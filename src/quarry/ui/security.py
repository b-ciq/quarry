"""Workbench hardening: refuse foreign Host headers, cross-site writes, and leaky referrers."""
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from starlette.middleware.trustedhost import TrustedHostMiddleware

ALLOWED_HOSTS = ["127.0.0.1", "localhost", "testserver"]
DEV_ORIGINS = {"http://localhost:5173", "http://127.0.0.1:5173"}  # Vite dev server
WRITE_METHODS = {"POST", "PUT", "PATCH", "DELETE"}


def install(app: FastAPI) -> None:
    app.add_middleware(TrustedHostMiddleware, allowed_hosts=ALLOWED_HOSTS)

    @app.middleware("http")
    async def guard(request: Request, call_next):
        origin = request.headers.get("origin")
        if request.method in WRITE_METHODS and origin is not None:
            same_origin = origin == f"http://{request.headers.get('host', '')}"
            if not (same_origin or origin in DEV_ORIGINS):
                response = JSONResponse({"error": "cross-site request refused"}, status_code=403)
                response.headers["Referrer-Policy"] = "no-referrer"
                return response
        response = await call_next(request)
        response.headers["Referrer-Policy"] = "no-referrer"
        return response
