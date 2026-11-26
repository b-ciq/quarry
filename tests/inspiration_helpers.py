"""Shared record builders for inspiration tests."""


def make_record(code):
    return {"id": f"ig-{code.lower()}", "status": "proposed",
            "source_url": f"https://www.instagram.com/p/{code}/",
            "source": {"origin": "instagram", "shortcode": code, "kind": "post", "saved_at": None,
                       "ingested_at": "2026-11-24"},
            "owner": {}, "caption": "", "hashtags": [], "collections": [], "saved_because": "",
            "concepts": [], "style": [], "description": "",
            "capture": {"status": "pending", "slides_expected": None, "items": [], "note": ""}}


def item(n, type="image"):
    return {"slide": n, "media_id": f"m{n}", "type": type, "file": f"{n:02d}.jpg",
            "method": "page-data", "captured_at": "2026-11-24T00:00:00Z"}


def make_pin(pin_id):
    return {"id": f"pin-{pin_id}", "status": "proposed",
            "source_url": f"https://www.pinterest.com/pin/{pin_id}/",
            "source": {"origin": "pinterest", "pin_id": pin_id, "kind": "image",
                       "board": "https://www.pinterest.com/u/b/s/", "saved_at": None, "ingested_at": "2026-11-25"},
            "owner": {}, "caption": "", "hashtags": [], "collections": ["s"], "saved_because": "",
            "concepts": [], "style": [], "description": "",
            "capture": {"status": "pending", "slides_expected": None, "items": [], "note": ""}}
