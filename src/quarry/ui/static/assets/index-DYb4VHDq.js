var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var ee=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return T(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var E=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(E,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(E,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function de(e){var t=w.T,n={};n.types=t===null?null:t.types,w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,ue)}catch(e){ue(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}}function fe(e){var t=w.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else de(fe.bind(null,e))}var pe={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=pe,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.addTransitionType=fe,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=de,e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,ne());else{var t=n(l);t!==null&&E(x,t.startTime-e)}}}var S=!1,ee=-1,C=5,w=-1;function te(){return g?!0:!(e.unstable_now()-w<C)}function T(){if(g=!1,S){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ee),ee=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&E(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ne():S=!1}}}var ne;if(typeof y==`function`)ne=function(){y(T)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=T,ne=function(){ie.postMessage(null)}}else ne=function(){_(T,0)};function E(t,n){ee=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ee),ee=-1):h=!0,E(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ne()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function ee(e,t,n){return e===n||e===t&&(x=e,!0)}function C(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function w(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function te(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var T=Object.assign,ne=Symbol.for(`react.element`),re=Symbol.for(`react.transitional.element`),ie=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),ae=Symbol.for(`react.strict_mode`),oe=Symbol.for(`react.profiler`),se=Symbol.for(`react.consumer`),ce=Symbol.for(`react.context`),le=Symbol.for(`react.forward_ref`),ue=Symbol.for(`react.suspense`),de=Symbol.for(`react.suspense_list`),fe=Symbol.for(`react.memo`),pe=Symbol.for(`react.lazy`),me=Symbol.for(`react.activity`),he=Symbol.for(`react.legacy_hidden`),ge=Symbol.for(`react.memo_cache_sentinel`),_e=Symbol.for(`react.view_transition`),ve=Symbol.for(`react.recoverable`),ye=Symbol.iterator;function be(e){return typeof e!=`object`||!e?null:(e=ye&&e[ye]||e[`@@iterator`],typeof e==`function`?e:null)}var xe=Symbol.for(`react.client.reference`);function Se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===xe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case oe:return`Profiler`;case ae:return`StrictMode`;case ue:return`Suspense`;case de:return`SuspenseList`;case me:return`Activity`;case _e:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case ie:return`Portal`;case ce:return e.displayName||`Context`;case se:return(e._context.displayName||`Context`)+`.Consumer`;case le:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case fe:return t=e.displayName||null,t===null?Se(e.type)||`Memo`:t;case pe:t=e._payload,e=e._init;try{return Se(e(t))}catch{}}return null}var Ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we={pending:!1,data:null,method:null,action:null},Te=[],Ee=-1;function De(e){return{current:e}}function Oe(e){0>Ee||(e.current=Te[Ee],Te[Ee]=null,Ee--)}function k(e,t){Ee++,Te[Ee]=e.current,e.current=t}var ke=De(null),Ae=De(null),je=De(null),Me=De(null);function Ne(e,t){switch(k(je,t),k(Ae,e),k(ke,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}Oe(ke),k(ke,e)}function Pe(){Oe(ke),Oe(Ae),Oe(je)}function Fe(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,k(Me,e)),t=ke.current;var n=dp(t,e.type);t!==n&&(k(Ae,e),k(ke,n))}function Ie(e){Ae.current===e&&(Oe(ke),Oe(Ae)),Me.current===e&&(Oe(Me),sh._currentValue=we)}var Le,Re;function ze(e){if(Le===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Le=t&&t[1]||``,Re=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Le+e+Re}var Be=!1;function Ve(e,t){if(!e||Be)return``;Be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ze(n):``}function He(e,t){switch(e.tag){case 26:case 27:case 5:return ze(e.type);case 16:return ze(`Lazy`);case 13:return e.child!==t&&t!==null?ze(`Suspense Fallback`):ze(`Suspense`);case 19:return ze(`SuspenseList`);case 0:case 15:return Ve(e.type,!1);case 11:return Ve(e.type.render,!1);case 1:return Ve(e.type,!0);case 31:return ze(`Activity`);case 30:return ze(`ViewTransition`);default:return``}}function Ue(e){try{var t=``,n=null;do t+=He(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var We=Object.prototype.hasOwnProperty,Ge=t.unstable_scheduleCallback,Ke=t.unstable_cancelCallback,qe=t.unstable_shouldYield,Je=t.unstable_requestPaint,Ye=t.unstable_now,Xe=t.unstable_getCurrentPriorityLevel,Ze=t.unstable_ImmediatePriority,Qe=t.unstable_UserBlockingPriority,$e=t.unstable_NormalPriority,A=t.unstable_LowPriority,et=t.unstable_IdlePriority,tt=t.log,nt=t.unstable_setDisableYieldValue,rt=null,it=null;function at(e){if(typeof tt==`function`&&nt(e),it&&typeof it.setStrictMode==`function`)try{it.setStrictMode(rt,e)}catch{}}var ot=Math.clz32?Math.clz32:lt,st=Math.log,ct=Math.LN2;function lt(e){return e>>>=0,e===0?32:31-(st(e)/ct|0)|0}var ut=256,dt=262144,ft=4194304;function pt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=pt(n))):i=pt(o):i=pt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=pt(n))):i=pt(o)):i=pt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function ht(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function gt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-ot(n),i=1<<r;t|=e[r],n&=~i}return t}function _t(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vt(){var e=ft;return ft<<=1,!(ft&62914560)&&(ft=4194304),e}function yt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ot(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&St(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function St(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ot(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function wt(e,t){var n=t&-t;return n=n&42?1:Tt(n),(n&(e.suspendedLanes|t))===0?n:0}function Tt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Et(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Dt(){var e=O.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function Ot(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var kt=Math.random().toString(36).slice(2),At=`__reactFiber$`+kt,jt=`__reactProps$`+kt,Mt=`__reactContainer$`+kt,Nt=`__reactEvents$`+kt,Pt=`__reactListeners$`+kt,Ft=`__reactHandles$`+kt,It=`__reactResources$`+kt,Lt=`__reactMarker$`+kt,Rt=`__reactLoad$`+kt;function zt(e){delete e[At],delete e[jt],delete e[Pt],delete e[Ft]}function Bt(e){var t;if(t=e[At])return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[At])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Vt(e){if(e=e[At]||e[Mt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ht(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ut(e){var t=e[It];return t||=e[It]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Wt(e){e[Lt]=!0}function Gt(e){e[Rt]=void 0}var Kt=new Set,qt={};function j(e,t){Jt(e,t),Jt(e+`Capture`,t)}function Jt(e,t){for(qt[e]=t,e=0;e<t.length;e++)Kt.add(t[e])}var Yt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),M={},Xt={};function Zt(e){return We.call(Xt,e)?!0:We.call(M,e)?!1:Yt.test(e)?Xt[e]=!0:(M[e]=!0,!1)}var N=!1;function Qt(){var e=N;return N=!1,e}function $t(e,t,n){if(Zt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function en(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function tn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function nn(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function rn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function an(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function on(e){if(!e._valueTracker){var t=rn(e)?`checked`:`value`;e._valueTracker=an(e,t,``+e[t])}}function sn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=rn(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var cn=/[\n"\\]/g;function ln(e){return e.replace(cn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function un(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+nn(t)):e.value!==``+nn(t)&&(e.value=``+nn(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):fn(e,nn(n)):o===`number`&&e.value==t?fn(e,nn(e.value)):fn(e,nn(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+nn(s):e.removeAttribute(`name`)}function dn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){on(e);return}n=n==null?``:``+nn(n),t=t==null?n:``+nn(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),on(e)}function fn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function pn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function mn(e,t,n){t!=null&&(t=``+nn(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+nn(n)}function hn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(Ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=nn(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),on(e)}function gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function vn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||_n.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function yn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,N=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(vn(e,a,r),N=!0)}else for(var o in t)t.hasOwnProperty(o)&&vn(e,o,t[o])}function bn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var xn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(e){return Sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function wn(){}var Tn=null;function P(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var En=null,F=null;function Dn(e){var t=Vt(e);if(t&&(e=t.stateNode)){var n=e[jt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(un(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+ln(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[jt]||null;if(!a)throw Error(i(90));un(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&sn(r)}break a;case`textarea`:mn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}}}var On=!1;function kn(e,t,n){if(On)return e(t,n);On=!0;try{return e(t)}finally{if(On=!1,(En!==null||F!==null)&&(zd(),En&&(t=En,e=F,F=En=null,Dn(t),e)))for(t=0;t<e.length;t++)Dn(e[t])}}function An(e,t){var n=e.stateNode;if(n===null)return null;var r=n[jt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var jn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Mn=!1;if(jn)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Mn=!0}}),window.addEventListener(`test`,Nn,Nn),window.removeEventListener(`test`,Nn,Nn)}catch{Mn=!1}var Pn=null,Fn=null,In=null;function Ln(){if(In)return In;var e,t=Fn,n=t.length,r,i=`value`in Pn?Pn.value:Pn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return In=i.slice(e,1<r?1-r:void 0)}function Rn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zn(){return!0}function Bn(){return!1}function Vn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?zn:Bn,this.isPropagationStopped=Bn,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Un=Vn(Hn),Wn=T({},Hn,{view:0,detail:0}),Gn=Vn(Wn),Kn,qn,Jn,Yn=T({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Jn&&(Jn&&e.type===`mousemove`?(Kn=e.screenX-Jn.screenX,qn=e.screenY-Jn.screenY):qn=Kn=0,Jn=e),Kn)},movementY:function(e){return`movementY`in e?e.movementY:qn}}),Xn=Vn(Yn),Zn=Vn(T({},Yn,{dataTransfer:0})),I=Vn(T({},Wn,{relatedTarget:0})),Qn=Vn(T({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0})),$n=Vn(T({},Hn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),er=Vn(T({},Hn,{data:0})),tr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},nr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},rr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function ir(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rr[e])?!!t[e]:!1}function ar(){return ir}var or=Vn(T({},Wn,{key:function(e){if(e.key){var t=tr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Rn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?nr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(e){return e.type===`keypress`?Rn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Rn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),sr=Vn(T({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),cr=Vn(T({},Hn,{submitter:0})),lr=Vn(T({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar})),ur=Vn(T({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0})),dr=Vn(T({},Yn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),fr=Vn(T({},Hn,{newState:0,oldState:0,source:0})),pr=[9,13,27,32],mr=jn&&`CompositionEvent`in window,hr=null;jn&&`documentMode`in document&&(hr=document.documentMode);var L=jn&&`TextEvent`in window&&!hr,gr=jn&&(!mr||hr&&8<hr&&11>=hr),_r=` `,vr=!1;function yr(e,t){switch(e){case`keyup`:return pr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function br(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var xr=!1;function Sr(e,t){switch(e){case`compositionend`:return br(t);case`keypress`:return t.which===32?(vr=!0,_r):null;case`textInput`:return e=t.data,e===_r&&vr?null:e;default:return null}}function Cr(e,t){if(xr)return e===`compositionend`||!mr&&yr(e,t)?(e=Ln(),In=Fn=Pn=null,xr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return gr&&t.locale!==`ko`?null:t.data;default:return null}}var wr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!wr[e.type]:t===`textarea`}function Er(e,t,n,r){En?F?F.push(r):F=[r]:En=r,t=Jf(t,`onChange`),0<t.length&&(n=new Un(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Dr=null,Or=null;function R(e){Vf(e,0)}function kr(e){if(sn(Ht(e)))return e}function Ar(e,t){if(e===`change`)return t}var jr=!1;if(jn){var Mr;if(jn){var Nr=`oninput`in document;if(!Nr){var Pr=document.createElement(`div`);Pr.setAttribute(`oninput`,`return;`),Nr=typeof Pr.oninput==`function`}Mr=Nr}else Mr=!1;jr=Mr&&(!document.documentMode||9<document.documentMode)}function Fr(){Dr&&(Dr.detachEvent(`onpropertychange`,Ir),Or=Dr=null)}function Ir(e){if(e.propertyName===`value`&&kr(Or)){var t=[];Er(t,Or,e,P(e)),kn(R,t)}}function Lr(e,t,n){e===`focusin`?(Fr(),Dr=t,Or=n,Dr.attachEvent(`onpropertychange`,Ir)):e===`focusout`&&Fr()}function Rr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return kr(Or)}function zr(e,t){if(e===`click`)return kr(t)}function Br(e,t){if(e===`input`||e===`change`)return kr(t)}function Vr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Hr=typeof Object.is==`function`?Object.is:Vr;function Ur(e,t){if(Hr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!We.call(t,i)||!Hr(e[i],t[i]))return!1}return!0}function Wr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Gr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kr(e,t){var n=Gr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Gr(n)}}function qr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function Yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Xr=jn&&`documentMode`in document&&11>=document.documentMode,Zr=null,Qr=null,$r=null,ei=!1;function ti(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ei||Zr==null||Zr!==Wr(r)||(r=Zr,`selectionStart`in r&&Yr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&Ur($r,r)||($r=r,r=Jf(Qr,`onSelect`),0<r.length&&(t=new Un(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Zr)))}function ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ri={animationend:ni(`Animation`,`AnimationEnd`),animationiteration:ni(`Animation`,`AnimationIteration`),animationstart:ni(`Animation`,`AnimationStart`),transitionrun:ni(`Transition`,`TransitionRun`),transitionstart:ni(`Transition`,`TransitionStart`),transitioncancel:ni(`Transition`,`TransitionCancel`),transitionend:ni(`Transition`,`TransitionEnd`)},ii={},ai={};jn&&(ai=document.createElement(`div`).style,`AnimationEvent`in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),`TransitionEvent`in window||delete ri.transitionend.transition);function oi(e){if(ii[e])return ii[e];if(!ri[e])return e;var t=ri[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ai)return ii[e]=t[n];return e}var si=oi(`animationend`),ci=oi(`animationiteration`),li=oi(`animationstart`),ui=oi(`transitionrun`),di=oi(`transitionstart`),fi=oi(`transitioncancel`),pi=oi(`transitionend`),mi=new Map,hi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);hi.push(`scrollEnd`);function gi(e,t){mi.set(e,t),j(t,[e])}var _i=0;function vi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=_i++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function yi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function bi(e,t){return e=yi(e),t=yi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var xi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Si=[],Ci=0,wi=0;function Ti(){for(var e=Ci,t=wi=Ci=0;t<e;){var n=Si[t];Si[t++]=null;var r=Si[t];Si[t++]=null;var i=Si[t];Si[t++]=null;var a=Si[t];if(Si[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ki(n,i,a)}}function Ei(e,t,n,r){Si[Ci++]=e,Si[Ci++]=t,Si[Ci++]=n,Si[Ci++]=r,wi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Di(e,t,n,r){return Ei(e,t,n,r),Ai(e)}function Oi(e,t){return Ei(e,null,null,t),Ai(e)}function ki(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ot(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ai(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ji={};function Mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ni(e,t,n,r){return new Mi(e,t,n,r)}function Pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,t){var n=e.alternate;return n===null?(n=Ni(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ii(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Li(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Pi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,ke.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case me:return e=Ni(31,n,t,a),e.elementType=me,e.lanes=o,e;case E:return Ri(n.children,a,o,t);case ae:s=8,a|=24;break;case oe:return e=Ni(12,n,t,a|2),e.elementType=oe,e.lanes=o,e;case ue:return e=Ni(13,n,t,a),e.elementType=ue,e.lanes=o,e;case de:return e=Ni(19,n,t,a),e.elementType=de,e.lanes=o,e;case he:case _e:return e=a|32,e=Ni(30,n,t,e),e.elementType=_e,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case ce:s=10;break a;case se:s=9;break a;case le:s=11;break a;case fe:s=14;break a;case pe:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ni(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ri(e,t,n,r){return e=Ni(7,e,r,t),e.lanes=n,e}function zi(e,t,n){return e=Ni(6,e,null,t),e.lanes=n,e}function Bi(e){var t=Ni(18,null,null,0);return t.stateNode=e,t}function Vi(e,t,n){return t=Ni(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hi=new WeakMap;function Ui(e,t){if(typeof e==`object`&&e){var n=Hi.get(e);return n===void 0?(t={value:e,source:t,stack:Ue(t)},Hi.set(e,t),t):n}return{value:e,source:t,stack:Ue(t)}}var Wi=[],Gi=0,Ki=null,qi=0,Ji=[],Yi=0,Xi=null,Zi=1,Qi=``;function $i(e,t){Wi[Gi++]=qi,Wi[Gi++]=Ki,Ki=e,qi=t}function ea(e,t,n){Ji[Yi++]=Zi,Ji[Yi++]=Qi,Ji[Yi++]=Xi,Xi=e;var r=Zi;e=Qi;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zi=1<<32-ot(t)+i|n<<i|r,Qi=a+e}else Zi=1<<a|n<<i|r,Qi=e}function ta(e){e.return!==null&&($i(e,1),ea(e,1,0))}function na(e){for(;e===Ki;)Ki=Wi[--Gi],Wi[Gi]=null,qi=Wi[--Gi],Wi[Gi]=null;for(;e===Xi;)Xi=Ji[--Yi],Ji[Yi]=null,Qi=Ji[--Yi],Ji[Yi]=null,Zi=Ji[--Yi],Ji[Yi]=null}function ra(e,t){Ji[Yi++]=Zi,Ji[Yi++]=Qi,Ji[Yi++]=Xi,Zi=t.id,Qi=t.overflow,Xi=e}var ia=null,z=null,B=!1,aa=null,oa=!1,sa=Error(i(519));function ca(e){throw ma(Ui(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),sa}function la(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[At]=e,t[jt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),dn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),hn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=wn),t=!0):t=!1,t||ca(e,!0)}function ua(e){for(ia=e.return;ia;)switch(ia.tag){case 5:case 31:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:ia=ia.return}}function da(e){if(e!==ia)return!1;if(!B)return ua(e),B=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&z&&ca(e),ua(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=dm(e)}else t===27?(t=z,Sp(e.type)?(e=um,um=null,z=e):z=t):z=ia?lm(e.stateNode.nextSibling):null;return!0}function fa(){z=ia=null,B=!1}function pa(){var e=aa;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),aa=null),e}function ma(e){aa===null?aa=[e]:aa.push(e)}var ha=De(null),ga=null,_a=null;function va(e,t,n){k(ha,t._currentValue),t._currentValue=n}function ya(e){e._currentValue=ha.current,Oe(ha)}function ba(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function xa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ba(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ba(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ba(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Sa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Hr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&xa(t,e,n,r),t.flags|=262144,e!==null}function Ca(e){for(e=e.firstContext;e!==null;){if(!Hr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wa(e){ga=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ta(e){return Da(ga,e)}function Ea(e,t){return ga===null&&wa(e),Da(e,t)}function Da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},_a===null){if(e===null)throw Error(i(308));_a=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _a=_a.next=t;return n}var Oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ka=t.unstable_scheduleCallback,Aa=t.unstable_NormalPriority,ja={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ma(){return{controller:new Oa,data:new Map,refCount:0}}function Na(e){e.refCount--,e.refCount===0&&ka(Aa,function(){e.controller.abort()})}function Pa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Fa=null;function Ia(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var La=null,Ra=0,za=0,Ba=null;function Va(e,t){if(La===null){var n=La=[];Ra=0,za=Pf(),Ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ra++,t.then(Ha,Ha),t}function Ha(){if(--Ra===0&&(Fa=null,La!==null)){Ba!==null&&(Ba.status=`fulfilled`);var e=La;La=null,za=0,Ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ua(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Wa=D.S;D.S=function(e,t){if(hd=Ye(),typeof t==`object`&&t&&typeof t.then==`function`&&Va(e,t),Fa!==null)for(var n=bf;n!==null;)Pa(n,Fa),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Pa(r,n),r=r.next;if(za!==0){r=Fa,r===null&&(r=Fa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Wa!==null&&Wa(e,t)};var Ga=De(null);function Ka(){var e=Ga.current;return e===null?$u.pooledCache:e}function qa(e,t){t===null?k(Ga,Ga.current):k(Ga,t.pool)}function Ja(){var e=Ka();return e===null?null:{parent:ja._currentValue,pool:e}}var Ya=Error(i(460)),Xa=Error(i(474)),Za=Error(i(542)),Qa={then:function(){}};function $a(e){return e=e.status,e===`fulfilled`||e===`rejected`}function eo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(wn,wn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,io(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(wn,wn);else{if(e=$u,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,io(e),e}throw no=t,Ya}}function to(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(no=e,Ya):e}}var no=null;function ro(){if(no===null)throw Error(i(459));var e=no;return no=null,e}function io(e){if(e===Ya||e===Za)throw Error(i(483))}var ao=null,oo=0;function so(e){var t=oo;return oo+=1,ao===null&&(ao=[]),eo(ao,e,t)}function co(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function lo(e,t){throw t.$$typeof===ne?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function uo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Fi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=zi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===E?(e=d(e,t,n.props.children,r,n.key),co(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===pe&&to(i)===t.type)?(t=a(t,n.props),co(t,n),t.return=e,t):(t=Li(n.type,n.key,n.props,null,e.mode,r),co(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Vi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ri(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=zi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case re:return n=Li(t.type,t.key,t.props,null,e.mode,n),co(n,t),n.return=e,n;case ie:return t=Vi(t,e.mode,n),t.return=e,t;case pe:return t=to(t),f(e,t,n)}if(Ce(t)||be(t))return t=Ri(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,so(t),n);if(t.$$typeof===ce)return f(e,Ea(e,t),n);lo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case re:return n.key===i?l(e,t,n,r):null;case ie:return n.key===i?u(e,t,n,r):null;case pe:return n=to(n),p(e,t,n,r)}if(Ce(n)||be(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,so(n),r);if(n.$$typeof===ce)return p(e,t,Ea(e,n),r);lo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case re:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ie:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case pe:return r=to(r),m(e,t,n,r,i)}if(Ce(r)||be(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,so(r),i);if(r.$$typeof===ce)return m(e,t,n,Ea(t,r),i);lo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),B&&$i(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return B&&$i(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),B&&$i(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),B&&$i(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return B&&$i(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),B&&$i(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===E&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case re:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===E){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),co(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===pe&&to(l)===r.type){n(e,r.sibling),c=a(r,o.props),co(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===E?(c=Ri(o.props.children,e.mode,c,o.key),co(c,o),c.return=e,e=c):(c=Li(o.type,o.key,o.props,null,e.mode,c),co(c,o),c.return=e,e=c)}return s(e);case ie:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Vi(o,e.mode,c),c.return=e,e=c}return s(e);case pe:return o=to(o),_(e,r,o,c)}if(Ce(o))return h(e,r,o,c);if(be(o)){if(l=be(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,so(o),c);if(o.$$typeof===ce)return _(e,r,Ea(e,o),c);lo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=zi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{oo=0;var i=_(e,t,n,r);return ao=null,i}catch(t){if(t===Ya||t===Za)throw t;var a=Ni(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var fo=uo(!0),po=uo(!1),mo=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function go(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _o(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function vo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ai(e),ki(e,null,n),t}return Ei(e,r,t,n),Ai(e)}function yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ct(e,n)}}function bo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var xo=!1;function So(){if(xo){var e=Ba;if(e!==null)throw e}}function Co(e,t,n,r){xo=!1;var i=e.updateQueue;mo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===za&&(xo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=T({},d,f);break a;case 2:mo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function wo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function To(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)wo(n[e],t)}var Eo=De(null),Do=De(0);function Oo(e,t){e=id,k(Do,e),k(Eo,t),id=e|t.baseLanes}function ko(){k(Do,id),k(Eo,Eo.current)}function Ao(){id=Do.current,Oe(Eo),Oe(Do)}var jo=De(null),Mo=null;function No(e){var t=e.alternate;k(Ro,Ro.current&1),k(jo,e),Mo===null&&(t===null||Eo.current!==null||t.memoizedState!==null)&&(Mo=e)}function Po(e){k(Ro,Ro.current),k(jo,e),Mo===null&&(Mo=e)}function Fo(e){e.tag===22?(k(Ro,Ro.current),k(jo,e),Mo===null&&(Mo=e)):Io()}function Io(){k(Ro,Ro.current),k(jo,jo.current)}function Lo(e){Oe(jo),Mo===e&&(Mo=null),Oe(Ro)}var Ro=De(0);function zo(e,t){k(jo,jo.current),k(Ro,t)}function Bo(e){Oe(Ro),Oe(jo),Mo===e&&(Mo=null)}function Vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ho=0,V=null,H=null,Uo=null,Wo=!1,Go=!1,Ko=!1,qo=0,Jo=0,Yo=null,Xo=0;function Zo(){throw Error(i(321))}function Qo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Hr(e[n],t[n]))return!1;return!0}function $o(e,t,n,r,i,a){return Ho=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?gc:_c,Ko=!1,a=n(r,i),Ko=!1,Go&&(a=ts(t,n,r,i)),es(e),a}function es(e){D.H=hc;var t=H!==null&&H.next!==null;if(Ho=0,Uo=H=V=null,Wo=!1,Jo=0,Yo=null,t)throw Error(i(300));e===null||Pc||(e=e.dependencies,e!==null&&Ca(e)&&(Pc=!0))}function ts(e,t,n,r){V=e;var a=0;do{if(Go&&(Yo=null),Jo=0,Go=!1,25<=a)throw Error(i(301));if(a+=1,Uo=H=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=vc,o=t(n,r)}while(Go);return o}function ns(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?ls(t):t,e=e.useState()[0],(H===null?null:H.memoizedState)!==e&&(V.flags|=1024),t}function rs(){var e=qo!==0;return qo=0,e}function is(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function as(e){if(Wo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wo=!1}Ho=0,Uo=H=V=null,Go=!1,Jo=qo=0,Yo=null}function os(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Uo===null?V.memoizedState=Uo=e:Uo=Uo.next=e,Uo}function ss(){if(H===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=H.next;var t=Uo===null?V.memoizedState:Uo.next;if(t!==null)Uo=t,H=e;else{if(e===null)throw V.alternate===null?Error(i(467)):Error(i(310));H=e,e={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},Uo===null?V.memoizedState=Uo=e:Uo=Uo.next=e}return Uo}function cs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ls(e){var t=Jo;return Jo+=1,Yo===null&&(Yo=[]),e=eo(Yo,e,t),t=V,(Uo===null?t.memoizedState:Uo.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?gc:_c),e}function us(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ls(e);if(e.$$typeof===ve)return;if(e.$$typeof===ce)return Ta(e)}throw Error(i(438,String(e)))}function ds(e){var t=null,n=V.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=V.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=cs(),V.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ge;return t.index++,n}function fs(e,t){return typeof t==`function`?t(e):t}function ps(e){return ms(ss(),H,e)}function ms(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Ho&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===za&&(d=!0);else if((Ho&p)===p){u=u.next,p===za&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,V.lanes|=p,od|=p;f=u.action,Ko&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,V.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Hr(o,e.memoizedState)&&(Pc=!0,d&&(n=Ba,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function hs(e){var t=ss(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Hr(o,t.memoizedState)||(Pc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function gs(e,t,n){var r=V,a=ss(),o=B;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Hr((H||a).memoizedState,n);if(s&&(a.memoizedState=n,Pc=!0),a=a.queue,Vs(ys.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Uo!==null&&!!(Uo.memoizedState.tag&1),Is(e?9:8,{destroy:void 0},vs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,$u===null)throw Error(i(349));o||Ho&127||_s(r,t,n)}return n}function _s(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t=cs(),V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vs(e,t,n,r){t.value=n,t.getSnapshot=r,bs(t)&&xs(e)}function ys(e,t,n){return n(function(){bs(t)&&xs(e)})}function bs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Hr(e,n)}catch{return!0}}function xs(e){var t=Oi(e,2);t!==null&&Pd(t,e,2)}function Ss(e){var t=os();if(typeof e==`function`){var n=e;if(e=n(),Ko){at(!0);try{n()}finally{at(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:e},t}function Cs(e,t,n,r){return e.baseState=n,ms(e,H,typeof r==`function`?r:fs)}function ws(e,t,n,r,a){if(fc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ts(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ts(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};o.types=a===null?null:a.types,D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Es(e,t,s)}catch(n){Os(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Es(e,t,a)}catch(n){Os(e,t,n)}}function Es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ds(e,t,n)},function(n){return Os(e,t,n)}):Ds(e,t,n)}function Ds(e,t,n){t.status=`fulfilled`,t.value=n,ks(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ts(e,n)))}function Os(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ks(t),t=t.next;while(t!==r)}e.action=null}function ks(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function As(e,t){return t}function js(e,t){if(B){var n=$u.formState;if(n!==null){a:{var r=V;if(B){if(z){b:{for(var i=z,a=oa;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){z=lm(i.nextSibling),r=i.data===`F!`;break a}}ca(r)}r=!1}r&&(t=n[0])}}return n=os(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:t},n.queue=r,n=lc.bind(null,V,r),r.dispatch=n,r=Ss(!1),a=dc.bind(null,V,!1,r.queue),r=os(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=ws.bind(null,V,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ms(e){return Ns(ss(),H,e)}function Ns(e,t,n){if(t=ms(e,t,As)[0],e=ps(fs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ls(t)}catch(e){throw e===Ya?Za:e}else r=t;t=ss();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(V.flags|=2048,Is(9,{destroy:void 0},Ps.bind(null,i,n),null)),[r,a,e]}function Ps(e,t){e.action=t}function Fs(e){var t=ss(),n=H;if(n!==null)return Ns(t,n,e);ss(),t=t.memoizedState,n=ss();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Is(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=V.updateQueue,t===null&&(t=cs(),V.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ls(){return ss().memoizedState}function Rs(e,t,n,r){var i=os();V.flags|=e,i.memoizedState=Is(1|t,{destroy:void 0},n,r===void 0?null:r)}function zs(e,t,n,r){var i=ss();r=r===void 0?null:r;var a=i.memoizedState.inst;H!==null&&r!==null&&Qo(r,H.memoizedState.deps)?i.memoizedState=Is(t,a,n,r):(V.flags|=e,i.memoizedState=Is(1|t,a,n,r))}function Bs(e,t){Rs(8390656,8,e,t)}function Vs(e,t){zs(2048,8,e,t)}function Hs(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=cs(),V.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Us(e){var t=ss().memoizedState;return Hs({ref:t,nextImpl:e}),function(){if(q&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Ws(e,t){return zs(4,2,e,t)}function Gs(e,t){return zs(4,4,e,t)}function Ks(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qs(e,t,n){n=n==null?null:n.concat([e]),zs(4,4,Ks.bind(null,t,e),n)}function Js(){}function Ys(e,t){var n=ss();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Qo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xs(e,t){var n=ss();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Qo(t,r[1]))return r[0];if(r=e(),Ko){at(!0);try{e()}finally{at(!1)}}return n.memoizedState=[r,t],r}function Zs(e,t,n){return n===void 0||Ho&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),V.lanes|=e,od|=e,n)}function Qs(e,t,n,r){return Hr(n,t)?n:Eo.current===null?!(Ho&106)||Ho&1073741824&&!(Y&261930)?(Pc=!0,e.memoizedState=n):(e=Md(),V.lanes|=e,od|=e,t):(e=Zs(e,n,r),Hr(e,t)||(Pc=!0),e)}function $s(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};s.types=o===null?null:o.types,D.T=s,dc(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?uc(e,t,Ua(c,r),jd(e)):uc(e,t,r,jd(e))}catch(n){uc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function ec(){}function tc(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=nc(e).queue;$s(e,a,t,we,n===null?ec:function(){return rc(e),n(r)})}function nc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:we,baseState:we,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:we},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rc(e){var t=nc(e);t.next===null&&(t=e.alternate.memoizedState),uc(e,t.next.queue,{},jd())}function ic(){return Ta(sh)}function ac(){return ss().memoizedState}function oc(){return ss().memoizedState}function sc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=_o(n);var r=vo(t,e,n);r!==null&&(Pd(r,t,n),yo(r,t,n)),t={cache:Ma()},e.payload=t;return}t=t.return}}function cc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fc(e)?pc(t,n):(n=Di(e,t,n,r),n!==null&&(Pd(n,e,r),mc(n,t,r)))}function lc(e,t,n){uc(e,t,n,jd())}function uc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fc(e))pc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Hr(s,o))return Ei(e,t,i,0),$u===null&&Ti(),!1}catch{}if(n=Di(e,t,i,r),n!==null)return Pd(n,e,r),mc(n,t,r),!0}return!1}function dc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},fc(e)){if(t)throw Error(i(479))}else t=Di(e,n,r,2),t!==null&&Pd(t,e,2)}function fc(e){var t=e.alternate;return e===V||t!==null&&t===V}function pc(e,t){Go=Wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ct(e,n)}}var hc={readContext:Ta,use:us,useCallback:Zo,useContext:Zo,useEffect:Zo,useImperativeHandle:Zo,useLayoutEffect:Zo,useInsertionEffect:Zo,useMemo:Zo,useReducer:Zo,useRef:Zo,useState:Zo,useDebugValue:Zo,useDeferredValue:Zo,useTransition:Zo,useSyncExternalStore:Zo,useId:Zo,useHostTransitionStatus:Zo,useFormState:Zo,useActionState:Zo,useOptimistic:Zo,useMemoCache:Zo,useCacheRefresh:Zo,useEffectEvent:Zo},gc={readContext:Ta,use:us,useCallback:function(e,t){return os().memoizedState=[e,t===void 0?null:t],e},useContext:Ta,useEffect:Bs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Rs(4194308,4,Ks.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rs(4194308,4,e,t)},useInsertionEffect:function(e,t){Rs(4,2,e,t)},useMemo:function(e,t){var n=os();t=t===void 0?null:t;var r=e();if(Ko){at(!0);try{e()}finally{at(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=os();if(n!==void 0){var i=n(t);if(Ko){at(!0);try{n(t)}finally{at(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=cc.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=os();return e={current:e},t.memoizedState=e},useState:function(e){e=Ss(e);var t=e.queue,n=lc.bind(null,V,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Js,useDeferredValue:function(e,t){return Zs(os(),e,t)},useTransition:function(){var e=Ss(!1);return e=$s.bind(null,V,e.queue,!0,!1),os().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=V,a=os();if(B){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),$u===null)throw Error(i(349));Y&127||_s(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Bs(ys.bind(null,r,o,e),[e]),r.flags|=2048,Is(9,{destroy:void 0},vs.bind(null,r,o,n,t),null),n},useId:function(){var e=os(),t=$u.identifierPrefix;if(B){var n=Qi,r=Zi;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=qo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ic,useFormState:js,useActionState:js,useOptimistic:function(e){var t=os();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=dc.bind(null,V,!0,n),n.dispatch=t,[e,t]},useMemoCache:ds,useCacheRefresh:function(){return os().memoizedState=sc.bind(null,V)},useEffectEvent:function(e){var t=os(),n={impl:e};return t.memoizedState=n,function(){if(q&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},_c={readContext:Ta,use:us,useCallback:Ys,useContext:Ta,useEffect:Vs,useImperativeHandle:qs,useInsertionEffect:Ws,useLayoutEffect:Gs,useMemo:Xs,useReducer:ps,useRef:Ls,useState:function(){return ps(fs)},useDebugValue:Js,useDeferredValue:function(e,t){return Qs(ss(),H.memoizedState,e,t)},useTransition:function(){var e=ps(fs)[0],t=ss().memoizedState;return[typeof e==`boolean`?e:ls(e),t]},useSyncExternalStore:gs,useId:ac,useHostTransitionStatus:ic,useFormState:Ms,useActionState:Ms,useOptimistic:function(e,t){return Cs(ss(),H,e,t)},useMemoCache:ds,useCacheRefresh:oc,useEffectEvent:Us},vc={readContext:Ta,use:us,useCallback:Ys,useContext:Ta,useEffect:Vs,useImperativeHandle:qs,useInsertionEffect:Ws,useLayoutEffect:Gs,useMemo:Xs,useReducer:hs,useRef:Ls,useState:function(){return hs(fs)},useDebugValue:Js,useDeferredValue:function(e,t){var n=ss();return H===null?Zs(n,e,t):Qs(n,H.memoizedState,e,t)},useTransition:function(){var e=hs(fs)[0],t=ss().memoizedState;return[typeof e==`boolean`?e:ls(e),t]},useSyncExternalStore:gs,useId:ac,useHostTransitionStatus:ic,useFormState:Fs,useActionState:Fs,useOptimistic:function(e,t){var n=ss();return H===null?(n.baseState=e,[e,n.queue.dispatch]):Cs(n,H,e,t)},useMemoCache:ds,useCacheRefresh:oc,useEffectEvent:Us};function yc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=_o(r);i.payload=t,n!=null&&(i.callback=n),t=vo(e,i,r),t!==null&&(Pd(t,e,r),yo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=_o(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=vo(e,i,r),t!==null&&(Pd(t,e,r),yo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=_o(n);r.tag=2,t!=null&&(r.callback=t),t=vo(e,r,n),t!==null&&(Pd(t,e,n),yo(t,e,n))}};function xc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,r)||!Ur(i,a):!0}function Sc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bc.enqueueReplaceState(t,t.state,null)}function Cc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=T({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function wc(e){xi(e)}function Tc(e){console.error(e)}function Ec(e){xi(e)}function Dc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Oc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function kc(e,t,n){return n=_o(n),n.tag=3,n.payload={element:null},n.callback=function(){Dc(e,t)},n}function Ac(e){return e=_o(e),e.tag=3,e}function jc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Oc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Oc(t,n,r),typeof i!=`function`&&(vd===null?vd=new Set([this]):vd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Mc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Sa(t,n,a,!0),n=jo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Mo===null?Kd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Qa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===Qa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(B)return t=jo.current,t===null?(r!==sa&&(t=Error(i(423),{cause:r}),ma(Ui(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ui(r,n),a=kc(e.stateNode,r,a),bo(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==sa&&(e=Error(i(422),{cause:r}),ma(Ui(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ui(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Ui(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=kc(n.stateNode,r,e),bo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vd===null||!vd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Ac(a),jc(a,e,n,r),bo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Nc=Error(i(461)),Pc=!1;function Fc(e,t,n,r){t.child=e===null?po(t,null,n,r):fo(t,e.child,n,r)}function Ic(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return wa(t),r=$o(e,t,n,o,a,i),s=rs(),e!==null&&!Pc?(is(e,t,i),ul(e,t,i)):(B&&s&&ta(t),t.flags|=1,Fc(e,t,r,i),t.child)}function Lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Pi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Rc(e,t,a,r,i)):(e=Li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!dl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ur:n,n(o,r)&&e.ref===t.ref)return ul(e,t,i)}return t.flags|=1,e=Fi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Rc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ur(a,r)&&e.ref===t.ref){if(Pc=!1,t.pendingProps=r=a,dl(e,i))e.flags&131072&&(Pc=!0);else return t.lanes=e.lanes,ul(e,t,i)}}return Kc(e,t,n,r,i)}function zc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Vc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&qa(t,a===null?null:a.cachePool),a===null?ko():Oo(t,a),Fo(t);else return r=t.lanes=536870912,Vc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&qa(t,null),ko(),Io()):(qa(t,a.cachePool),Oo(t,a),Io(),t.memoizedState=null);return Fc(e,t,i,n),t.child}function Bc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Vc(e,t,n,r,i){var a=Ka();return a=a===null?null:{parent:ja._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&qa(t,null),ko(),Fo(t),e!==null&&Sa(e,t,r,!0),t.childLanes=i,null}function Hc(e,t){return t=tl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Uc(e,t,n){return fo(t,e.child,null,n),e=Hc(t,t.pendingProps),e.flags|=2,Lo(t),t.memoizedState=null,e}function Wc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(B){if(r.mode===`hidden`)return e=Hc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Bc(null,e);if(Po(t),(e=z)?(e=am(e,oa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xi===null?null:{id:Zi,overflow:Qi},retryLane:536870912,hydrationErrors:null},n=Bi(e),n.return=t,t.child=n,ia=t,z=null)):e=null,e===null)throw ca(t);return t.lanes=536870912,null}return Hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Po(t),a){if(t.flags&256)t.flags&=-257,t=Uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Pc||Sa(e,t,n,!1),a=(n&e.childLanes)!==0,Pc||a){if(Eo.current===null){if(r=$u,r!==null&&(s=wt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Oi(e,s),Pd(r,e,s),Nc;Kd()}t=Uc(e,t,n)}else e=o.treeContext,z=lm(s.nextSibling),ia=t,B=!0,aa=null,oa=!1,e!==null&&ra(t,e),t=Hc(t,r),t.flags|=134221824;return t}return e=Fi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Kc(e,t,n,r,i){return wa(t),n=$o(e,t,n,r,void 0,i),r=rs(),e!==null&&!Pc?(is(e,t,i),ul(e,t,i)):(B&&r&&ta(t),t.flags|=1,Fc(e,t,n,i),t.child)}function qc(e,t,n,r,i,a){return wa(t),t.updateQueue=null,n=ts(t,r,n,i),es(e),r=rs(),e!==null&&!Pc?(is(e,t,a),ul(e,t,a)):(B&&r&&ta(t),t.flags|=1,Fc(e,t,n,a),t.child)}function Jc(e,t,n,r,i){if(wa(t),t.stateNode===null){var a=ji,o=n.contextType;typeof o==`object`&&o&&(a=Ta(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=bc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},ho(t),o=n.contextType,a.context=typeof o==`object`&&o?Ta(o):ji,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(yc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&bc.enqueueReplaceState(a,a.state,null),Co(t,r,a,i),So(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Cc(n,s);a.props=c;var l=a.context,u=n.contextType;o=ji,typeof u==`object`&&u&&(o=Ta(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Sc(t,a,r,o),mo=!1;var f=t.memoizedState;a.state=f,Co(t,r,a,i),So(),l=t.memoizedState,s||f!==l||mo?(typeof d==`function`&&(yc(t,n,d,r),l=t.memoizedState),(c=mo||xc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,go(e,t),o=t.memoizedProps,u=Cc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ji,typeof l==`object`&&l&&(c=Ta(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Sc(t,a,r,c),mo=!1,f=t.memoizedState,a.state=f,Co(t,r,a,i),So();var p=t.memoizedState;o!==d||f!==p||mo||e!==null&&e.dependencies!==null&&Ca(e.dependencies)?(typeof s==`function`&&(yc(t,n,s,r),p=t.memoizedState),(u=mo||xc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ca(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=fo(t,e.child,null,i),t.child=fo(t,null,n,i)):Fc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ul(e,t,i),e}function Yc(e,t,n,r){return fa(),t.flags|=256,Fc(e,t,n,r),t.child}var Xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zc(e){return{baseLanes:e,cachePool:Ja()}}function Qc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function $c(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Ro.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(B){if(i?No(t):Io(),(e=z)?(e=am(e,oa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xi===null?null:{id:Zi,overflow:Qi},retryLane:536870912,hydrationErrors:null},n=Bi(e),n.return=t,t.child=n,ia=t,z=null)):e=null,e===null)throw ca(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Io(),i=t.mode,a=tl({mode:`hidden`,children:a},i),r=Ri(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Zc(n),r.childLanes=Qc(e,o,n),t.memoizedState=Xc,Bc(null,r)):(No(t),el(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return rl(e,t,a,o,r,c,s,n)}return i?(Io(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Fi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ri(i,a,n,null),i.flags|=2):i=Fi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Bc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Zc(n):(a=i.cachePool,a===null?a=Ja():(s=ja._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Qc(e,o,n),t.memoizedState=Xc,Bc(e.child,r)):(No(t),n=e.child,e=n.sibling,n=Fi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function el(e,t){return t=tl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function tl(e,t){return e=Ni(22,e,null,t),e.lanes=0,e}function nl(e,t,n){return fo(t,e.child,null,n),e=el(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(No(t),t.flags&=-257,nl(e,t,c)):t.memoizedState===null?(Io(),o=a.fallback,s=t.mode,a=tl({mode:`visible`,children:a.children},s),o=Ri(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,fo(t,e.child,null,c),a=t.child,a.memoizedState=Zc(c),a.childLanes=Qc(e,r,c),t.memoizedState=Xc,Bc(null,a)):(Io(),t.child=e.child,t.flags|=128,null);if(No(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ma({value:a,source:null,stack:null})),nl(e,t,c)}if(Pc||Sa(e,t,c,!1),r=(c&e.childLanes)!==0,Pc||r){if(Eo.current!==null)return nl(e,t,c);if(r=$u,r!==null&&(a=wt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Oi(e,a),Pd(r,e,a),Nc;return om(o)||Kd(),nl(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,z=lm(o.nextSibling),ia=t,B=!0,aa=null,oa=!1,e!==null&&ra(t,e),t=el(t,a.children),t.flags|=134221824,t)}function il(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ba(e.return,t,n)}function al(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Vo(n)===null&&(t=e),e=e.sibling}return t}function ol(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function sl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function cl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Ro.current;if(t.flags&128)return zo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,zo(t,o),i===`backwards`&&e!==null?(sl(e),Fc(e,t,r,n),sl(e)):Fc(e,t,r,n),r=B?qi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&il(e,n,t);else if(e.tag===19)il(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=al(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,sl(t)),ol(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ol(t,!0,n,null,a,r);break;case`together`:ol(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=al(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ol(t,!1,i,n,a,r)}return t.child}function ll(e,t,n){var r=t.pendingProps;return va(t,t.type,r.value),Fc(e,t,r.children,n),t.child}function ul(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Sa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Fi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Ca(e)))}function fl(e,t,n){switch(t.tag){case 3:Ne(t,t.stateNode.containerInfo),va(t,ja,e.memoizedState.cache),fa();break;case 27:case 5:Fe(t);break;case 4:Ne(t,t.stateNode.containerInfo);break;case 10:va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Po(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return No(t),t.flags|=128,null;r=Sa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?$c(e,t,n):(No(t),e=ul(e,t,n),e===null?null:e.sibling)}No(t);break;case 19:if(t.flags&128)return cl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Sa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return cl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),zo(t,Ro.current),r)break;return null;case 22:return t.lanes=0,zc(e,t,n,t.pendingProps);case 24:va(t,ja,e.memoizedState.cache)}return ul(e,t,n)}function pl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Pc=!0;else{if(!dl(e,n)&&!(t.flags&128))return Pc=!1,fl(e,t,n);Pc=!!(e.flags&131072)}}else Pc=!1,B&&t.flags&1048576&&ea(t,qi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=to(t.elementType),t.type=e,typeof e==`function`)Pi(e)?(r=Cc(e,r),t.tag=1,t=Jc(null,t,e,r,n)):(t.tag=0,t=Kc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===le){t.tag=11,t=Ic(null,t,e,r,n);break a}if(a===fe){t.tag=14,t=Lc(null,t,e,r,n);break a}if(a===ce){t.tag=10,t.type=e,t=ll(null,t,n);break a}}throw t=Se(e)||e,Error(i(306,t,``))}}return t;case 0:return Kc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Cc(r,t.pendingProps),Jc(e,t,r,a,n);case 3:a:{if(Ne(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,go(e,t),Co(t,r,null,n);var s=t.memoizedState;if(r=s.cache,va(t,ja,r),r!==o.cache&&xa(t,[ja],n,!0),So(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Yc(e,t,r,n);break a}if(r!==a){a=Ui(Error(i(424)),t),ma(a),t=Yc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(z=lm(e.firstChild),ia=t,B=!0,aa=null,oa=!0,n=po(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(fa(),r===a){t=ul(e,t,n);break a}Fc(e,t,r,n)}t=t.child}return t;case 26:return Gc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:B||(t.stateNode=fp(t.type,t.pendingProps,je.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Fe(t),e===null&&B&&(r=t.stateNode=hm(t.type,t.pendingProps,je.current),ia=t,oa=!0,a=z,Sp(t.type)?(um=a,z=lm(r.firstChild)):z=a),Fc(e,t,t.pendingProps.children,n),Gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&B&&((a=r=z)&&(r=rm(r,t.type,t.pendingProps,oa),r===null?a=!1:(t.stateNode=r,ia=t,z=lm(r.firstChild),oa=!1,a=!0)),a||ca(t)),Fe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=$o(e,t,ns,null,null,n),sh._currentValue=a),Gc(e,t),Fc(e,t,r,n),t.child;case 6:return e===null&&B&&((e=n=z)&&(n=im(n,t.pendingProps,oa),n===null?e=!1:(t.stateNode=n,ia=t,z=null,e=!0)),e||ca(t)),null;case 13:return $c(e,t,n);case 4:return Ne(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fo(t,null,r,n):Fc(e,t,r,n),t.child;case 11:return Ic(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Gc(e,t),Fc(e,t,r,n),t.child;case 8:return Fc(e,t,t.pendingProps.children,n),t.child;case 12:return Fc(e,t,t.pendingProps.children,n),t.child;case 10:return ll(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,wa(t),a=Ta(a),r=r(a),t.flags|=1,Fc(e,t,r,n),t.child;case 14:return Lc(e,t,t.type,t.pendingProps,n);case 15:return Rc(e,t,t.type,t.pendingProps,n);case 19:return cl(e,t,n);case 31:return Wc(e,t,n);case 22:return zc(e,t,n,t.pendingProps);case 24:return wa(t),r=Ta(ja),e===null?(a=Ka(),a===null&&(a=$u,o=Ma(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},ho(t),va(t,ja,a)):((e.lanes&n)!==0&&(go(e,t),Co(t,null,null,n),So()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,va(t,ja,r),r!==a.cache&&xa(t,[ja],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),va(t,ja,r))),Fc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:B&&ta(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Gc(e,t),Fc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ml(e){e.flags|=4}function hl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw no=Qa,Xa}}else e.flags&=-16777217}function gl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw no=Qa,Xa}}function _l(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:vt(),e.lanes|=t,ud|=t)}function vl(e,t){if(!B)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yl(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ya(ja),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(da(t)?ml(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pa())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(ml(t),o===null?(U(t),hl(t,a,null,r,n)):(U(t),gl(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(ml(t),U(t),gl(t,o)):(e=e.memoizedProps,e!==r&&ml(t),U(t),hl(t,a,e,r,n)),null;case 27:if(Ie(t),n=je.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ml(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),t.subtreeFlags&=-33554433,null}e=ke.current,da(t)?la(t,e):(e=hm(a,r,n),t.stateNode=e,ml(t))}return U(t),t.subtreeFlags&=-33554433,null;case 5:if(Ie(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ml(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),t.subtreeFlags&=-33554433,null}if(o=ke.current,da(t))la(t,o);else{var s=lp(je.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[At]=t,o[jt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&ml(t)}}return U(t),t.subtreeFlags&=-33554433,hl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ml(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=je.current,da(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ia,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[At]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||ca(t,!0)}else e=lp(e).createTextNode(r),e[At]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=da(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[At]=t}else fa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=pa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Lo(t),t):(Lo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=da(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[At]=t}else fa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=pa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Lo(t),t):(Lo(t),null)}return Lo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),_l(t,t.updateQueue),U(t),null);case 4:return Pe(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,U(t),null;case 10:return ya(t.type),U(t),null;case 19:if(Bo(t),r=t.memoizedState,r===null)return U(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)vl(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Vo(e),o!==null){for(t.flags|=128,vl(r,!1),e=o.updateQueue,t.updateQueue=e,_l(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ii(n,e),n=n.sibling;return zo(t,Ro.current&1|2),B&&$i(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ye()>gd&&(t.flags|=128,a=!0,vl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Vo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,_l(t,e),vl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!B)return U(t),null}else 2*Ye()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,vl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ye(),e.sibling=null,o=Ro.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||B?zo(t,o):(n=o,k(jo,t),k(Ro,n),Mo===null&&(Mo=t)),B&&$i(t,r.treeForkCount),e}return U(t),null;case 22:case 23:return Lo(t),Ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&_l(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Oe(Ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ya(ja),U(t),null;case 25:return null;case 30:return t.flags|=33554432,U(t),null}throw Error(i(156,t.tag))}function bl(e,t){switch(na(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ya(ja),Pe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ie(t),null;case 31:if(t.memoizedState!==null){if(Lo(t),t.alternate===null)throw Error(i(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Lo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Bo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Pe(),null;case 10:return ya(t.type),null;case 22:case 23:return Lo(t),Ao(),e!==null&&Oe(Ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ya(ja),null;case 25:return null;default:return null}}function W(e,t){switch(na(t),t.tag){case 3:ya(ja),Pe();break;case 26:case 27:case 5:Ie(t);break;case 4:Pe();break;case 31:t.memoizedState!==null&&Lo(t);break;case 13:Lo(t);break;case 19:Bo(t);break;case 10:ya(t.type);break;case 22:case 23:Lo(t),Ao(),e!==null&&Oe(Ga);break;case 24:ya(ja)}}function xl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Sl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Cl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{To(t,n)}catch(t){Z(e,e.return,t)}}}function wl(e,t,n){n.props=Cc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Tl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=vi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function El(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Dl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Ol(e){for(var t=e.return;t!==null&&(jl(t)&&em(e.stateNode,t.stateNode),!Al(t));)t=t.return}function kl(e){for(var t=e.return;t!==null&&(jl(t)&&tm(e.stateNode,t.stateNode),!Al(t));)t=t.return}function Al(e){return e.tag===5||e.tag===3||e.tag===27}function jl(e){return e&&e.tag===7&&e.stateNode!==null}function Ml(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Nl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[jt]=t}catch(t){Z(e,e.return,t)}}function Pl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Fl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Pl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wn)),Dl(e,r),N=!0;else if(i!==4&&(i===27&&(Dl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Il(e,t,n,r),e=e.sibling;e!==null;)Il(e,t,n,r),e=e.sibling}function Ll(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Dl(e,r),N=!0;else if(i!==4&&(i===27&&(Dl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ll(e,t,n,r),e=e.sibling;e!==null;)Ll(e,t,n,r),e=e.sibling}function Rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[At]=e,t[jt]=n}catch(t){Z(e,e.return,t)}}var zl=!1,Bl=null;function Vl(e){(e.tag===30||e.subtreeFlags&33554432)&&(zl=!0)}var Hl=null;function Ul(){var e=Hl;return Hl=null,e}var Wl=0;function Gl(e,t,n,r,i){return Wl=0,Kl(e.child,t,n,r,i)}function Kl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);zl=!0,Tp(o,Wl===0?t:t+`_`+Wl,n),Wl++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Kl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function ql(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||ql(e.child,t),e=e.sibling}function Jl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Jl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=bi(t.default,t.share),t!==`none`&&(Gl(e,n,t,null,!1)||ql(e.child,!1))}e=e.sibling}}function Yl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=vi(r,n),a=bi(r.default,n.paired?r.share:r.enter);a===`none`?Jl(e):Gl(e,i,a,null,!1)?(Jl(e),n.paired||t||Nd(e,r.onEnter)):ql(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Yl(e,t),e=e.sibling;else Jl(e)}function Xl(e){if(Bl!==null&&Bl.size!==0){var t=Bl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=bi(n.default,n.share);if(a!==`none`&&(Gl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):ql(e.child,!1)),t.delete(r),t.size===0)break}}}Xl(e)}e=e.sibling}}}function Zl(e){if(e.tag===30){var t=e.memoizedProps,n=vi(t,e.stateNode),r=Bl===null?void 0:Bl.get(n),i=bi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Gl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Bl.delete(n),Nd(e,t.onShare)):ql(e.child,!1)),Bl!==null&&Xl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Zl(e),e=e.sibling;else Bl!==null&&Xl(e)}function Ql(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=vi(t,e.stateNode);t=bi(t.default,t.update),e.flags&=-5,t!==`none`&&Gl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Ql(e);e=e.sibling}}function $l(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,ql(e.child,!1))}$l(e)}e=e.sibling}}function eu(e){if(e.tag===30)e.stateNode.paired=null,ql(e.child,!1),$l(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e),e=e.sibling;else $l(e)}function tu(e){for(e=e.child;e!==null;)e.tag===30?ql(e.child,!1):e.subtreeFlags&33554432&&tu(e),e=e.sibling}function nu(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Wl<a.length){var l=a[Wl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Wl===0?n:n+`_`+Wl,i),s&&e.flags&4||(Hl===null&&(Hl=[]),Hl.push(c,Wl===0?r:r+`_`+Wl,t.memoizedProps)),Wl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:nu(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function ru(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=vi(n,r),a=bi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Wl=0,i=nu(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&ru(e,t);e=e.sibling}}var G=!1,K=!1,iu=!1,au=!1,ou=typeof WeakSet==`function`?WeakSet:Set,su=null,cu=!1,lu=!1,uu=!1,du=!1;function fu(e,t,n){if(e=e.containerInfo,sp=gh,e=Jr(e),Yr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,su=t,t=n?9270:1024;su!==null;){if(e=su,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Zl(r[a]);if(e.alternate===null&&e.flags&2)n&&Vl(e),pu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Zl(r),pu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Vl(e),pu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,su=r):(n&&Ql(e),pu(n))}}Bl=null}function pu(e){for(;su!==null;){var t=su,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Cc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=vi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=bi(a.default,a.update),a!==`none`&&Gl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,su=r;break}su=t.return}}function mu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Pu(e,n),r&4&&xl(5,n);break;case 1:if(Pu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Cc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Cl(n),r&512&&Tl(n,n.return);break;case 3:if(Pu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{To(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Rl(n);case 26:case 5:Pu(e,n),t===null&&r&4&&Ml(n),r&512&&Tl(n,n.return);break;case 12:Pu(e,n);break;case 31:Pu(e,n),r&4&&Cu(e,n);break;case 13:Pu(e,n),r&4&&wu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||G,!r){var a=t!==null&&t.memoizedState!==null||K;t=G,i=K,G=r,(K=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Iu(e,n,r)):Pu(e,n),G=t,K=i}break;case 30:Pu(e,n),r&512&&Tl(n,n.return);break;case 7:r&512&&Tl(n,n.return);default:Pu(e,n)}}function hu(e,t){for(e=e.child;e!==null;)gu(e,t),e=e.sibling}function gu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}_u(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,N=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&hu(e,t);break;default:hu(e,t)}}function _u(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:gu(n,r);break a;case 22:n.memoizedState===null&&_u(n,r);break a;default:_u(n,r)}}e=e.sibling}}function vu(e){var t=e.alternate;t!==null&&(e.alternate=null,vu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var yu=null,bu=!1;function xu(e,t,n){for(n=n.child;n!==null;)Su(e,t,n),n=n.sibling}function Su(e,t,n){if(it&&typeof it.onCommitFiberUnmount==`function`)try{it.onCommitFiberUnmount(rt,n)}catch{}switch(n.tag){case 26:K||El(n,t),xu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!K&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:K||El(n,t),kl(n);var r=yu,i=bu;Sp(n.type)&&(yu=n.stateNode,bu=!1),xu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),yu=r,bu=i;break;case 5:K||El(n,t),kl(n);case 6:if(n.tag===6&&kl(n),r=yu,i=bu,yu=null,xu(e,t,n),yu=r,bu=i,yu!==null){if(bu)try{(yu.nodeType===9?yu.body:yu.nodeName===`HTML`?yu.ownerDocument.body:yu).removeChild(n.stateNode),N=!0}catch(e){Z(n,t,e)}else try{yu.removeChild(n.stateNode),N=!0}catch(e){Z(n,t,e)}}break;case 18:yu!==null&&(bu?(e=yu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(yu,n.stateNode));break;case 4:r=yu,i=bu,yu=n.stateNode.containerInfo,bu=!0,xu(e,t,n),yu=r,bu=i;break;case 0:case 11:case 14:case 15:Sl(2,n,t),K||Sl(4,n,t),xu(e,t,n);break;case 1:K||(El(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&wl(n,t,r)),xu(e,t,n);break;case 21:xu(e,t,n);break;case 22:K=(r=K)||n.memoizedState!==null,xu(e,t,n),K=r;break;case 30:El(n,t),xu(e,t,n);break;case 7:K||El(n,t),xu(e,t,n);break;default:xu(e,t,n)}}function Cu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Tu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ou),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ou),t;default:throw Error(i(435,e.tag))}}function Eu(e,t){var n=Tu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Du(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){yu=l.stateNode,bu=!1;break a}break;case 5:yu=l.stateNode,bu=!1;break a;case 3:case 4:yu=l.stateNode.containerInfo,bu=!0;break a}l=l.return}if(yu===null)throw Error(i(160));Su(s,c,o),yu=null,bu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ku(t,e,n),t=t.sibling}var Ou=null;function ku(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Du(t,e,n),Au(e),a&4&&(Sl(3,e,e.return),xl(3,e),Sl(5,e,e.return));break;case 1:Du(t,e,n),Au(e),a&512&&(K||r===null||El(r,r.return)),a&64&&G&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Ou,Du(t,e,n),Au(e),a&512&&(K||r===null||El(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(G)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Lt]||r[At]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[At]=e,Wt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[At]=e,Wt(r),t=r}e.stateNode=t}}else G||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Nl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||K||t.parentNode.removeChild(t)):a.count--,n===null?G||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Du(t,e,n),Au(e),a&512&&(K||r===null||El(r,r.return)),r!==null&&a&4&&Nl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=iu,iu=!1,Du(t,e,n),iu=o,Au(e),a&512&&(K||r===null||El(r,r.return)),e.flags&32){t=e.stateNode;try{gn(t,``),N=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Nl(e,t,r===null?t:r.memoizedProps)),a&1024&&(au=!0);break;case 6:if(Du(t,e,n),Au(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,N=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(N=!1,Wm=null,o=Ou,Ou=bm(t.containerInfo),Du(t,e,n),Ou=o,Au(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}au&&(au=!1,ju(e)),N=!1;break;case 4:a=iu,iu=G,r=Qt(),o=Ou,Ou=bm(e.stateNode.containerInfo),Du(t,e,n),Au(e),Ou=o,N&&lu&&(uu=!0),N=r,iu=a;break;case 12:Du(t,e,n),Au(e);break;case 31:Du(t,e,n),Au(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 13:Du(t,e,n),Au(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=Ye()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=G,l=K,u=iu;G=c||o,iu=u||o,K=l||s,Du(t,e,n),K=l,iu=u,G=c,Au(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||G||K||(t=s||K,n=G,r=K,G=o||G,K=t,Fu(e,2),G=n,K=r),!o&&iu||hu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Eu(e,n))));break;case 19:Du(t,e,n),Au(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 30:a&512&&(K||r===null||El(r,r.return)),a=Qt(),o=lu,s=(n&335544064)===n,c=e.memoizedProps,lu=s&&bi(c.default,c.update)!==`none`,Du(t,e,n),Au(e),s&&r!==null&&N&&(e.flags|=4),lu=o,N=a;break;case 21:break;case 7:a&512&&(K||r===null||El(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Du(t,e,n),Au(e)}}function Au(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Pl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(jl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Al(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Ll(e,Fl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(gn(l,``),n.flags&=-33),Ll(e,Fl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Il(e,Fl(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ju(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ju(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Mu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Nu(t,e),t=t.sibling;else ru(t,!1)}function Nu(e,t){var n=e.alternate;if(n===null)Yl(e,!1);else switch(e.tag){case 3:if(du=cu=!1,Ul(),Mu(t,e),!cu&&!uu){if(e=Hl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),du=!0}Hl=null;break;case 5:Mu(t,e);break;case 4:r=cu,cu=!1,Mu(t,e),cu&&(uu=!0),cu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Mu(t,e):Yl(e,!1));break;case 30:r=cu,i=Ul(),cu=!1,Mu(t,e),cu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=vi(a,o),o=vi(n.memoizedProps,o);var s=bi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Wl=0,t=nu(e,n,t,o,s,a,!0),Wl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Hl=i):i!==null&&(i.push.apply(i,Hl),Hl=i),cu=e.flags&32?!0:r;break;default:Mu(t,e)}}function Pu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)mu(e,t.alternate,t),t=t.sibling}function Fu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Sl(4,n,n.return),Fu(n,r);break;case 1:El(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&wl(n,n.return,i),Fu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:El(n,n.return),n.tag!==5&&n.tag!==27||kl(n),Fu(n,r);break;case 6:kl(n);break;case 26:El(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||K||i.parentNode.removeChild(i),Fu(n,r);break;case 22:n.memoizedState===null&&Fu(n,r);break;case 30:El(n,n.return),Fu(n,r);break;case 7:El(n,n.return);default:Fu(n,r)}e=e.sibling}}function Iu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Iu(i,a,n),xl(4,a);break;case 1:if(Iu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)wo(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&Cl(a),Tl(a,a.return);break;case 27:n&2&&Rl(a);case 5:a.tag!==5&&a.tag!==27||Ol(a),Iu(i,a,n),s&&r===null&&o&4&&Ml(a),Tl(a,a.return);break;case 6:Ol(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||G||Km(bm(c.ownerDocument),a.type,c),Iu(i,a,n),s&&r===null&&o&4&&Ml(a),Tl(a,a.return);break;case 12:Iu(i,a,n);break;case 31:Iu(i,a,n),s&&o&4&&Cu(i,a);break;case 13:Iu(i,a,n),s&&o&4&&wu(i,a);break;case 22:a.memoizedState===null&&Iu(i,a,n),Tl(a,a.return);break;case 30:Iu(i,a,n),Tl(a,a.return);break;case 7:Tl(a,a.return);default:Iu(i,a,n)}t=t.sibling}}function Lu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Na(n))}function Ru(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Na(e))}function zu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Bu(e,t,n,r),t=t.sibling;else i&&tu(t)}function Bu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&eu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:zu(e,t,n,r),a&2048&&xl(9,t);break;case 1:zu(e,t,n,r);break;case 3:zu(e,t,n,r),i&&du&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Na(a)));break;case 12:if(a&2048){zu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else zu(e,t,n,r);break;case 31:zu(e,t,n,r);break;case 13:zu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&eu(t),o._visibility&2?zu(e,t,n,r):(o._visibility|=2,Vu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&eu(s),o._visibility&2?zu(e,t,n,r):Hu(e,t)),a&2048&&Lu(s,t);break;case 24:zu(e,t,n,r),a&2048&&Ru(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(ql(a.child,!0),ql(t.child,!0))),zu(e,t,n,r);break;default:zu(e,t,n,r)}}function Vu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Vu(a,o,s,c,i),xl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Vu(a,o,s,c,i)):u._visibility&2?Vu(a,o,s,c,i):Hu(a,o),i&&l&2048&&Lu(o.alternate,o);break;case 24:Vu(a,o,s,c,i),i&&l&2048&&Ru(o.alternate,o);break;default:Vu(a,o,s,c,i)}t=t.sibling}}function Hu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Hu(n,r),i&2048&&Lu(r.alternate,r);break;case 24:Hu(n,r),i&2048&&Ru(r.alternate,r);break;default:Hu(n,r)}t=t.sibling}}var Uu=8192;function Wu(e,t,n){if(e.subtreeFlags&Uu)for(e=e.child;e!==null;)Gu(e,t,n),e=e.sibling}function Gu(e,t,n){switch(e.tag){case 26:Wu(e,t,n),e.flags&Uu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,Ou,e.memoizedState,e.memoizedProps));break;case 5:Wu(e,t,n),e.flags&Uu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=Ou;Ou=bm(e.stateNode.containerInfo),Wu(e,t,n),Ou=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Uu,Uu=16777216,Wu(e,t,n),Uu=r):Wu(e,t,n));break;case 30:if((e.flags&Uu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Bl===null&&(Bl=new Map),Bl.set(r,i)}Wu(e,t,n);break;default:Wu(e,t,n)}}function Ku(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];su=r,Xu(r,e)}Ku(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ju(e),e=e.sibling}function Ju(e){switch(e.tag){case 0:case 11:case 15:qu(e),e.flags&2048&&Sl(9,e,e.return);break;case 3:qu(e);break;case 12:qu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Yu(e)):qu(e);break;default:qu(e)}}function Yu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];su=r,Xu(r,e)}Ku(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sl(8,t,t.return),Yu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Yu(t));break;default:Yu(t)}e=e.sibling}}function Xu(e,t){for(;su!==null;){var n=su;switch(n.tag){case 0:case 11:case 15:Sl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Na(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,su=r;else a:for(n=e;su!==null;){r=su;var i=r.sibling,a=r.return;if(vu(r),r===n){su=null;break a}if(i!==null){i.return=a,su=i;break a}su=a}}}var Zu={getCacheForType:function(e){var t=Ta(ja),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ta(ja).controller.signal}},Qu=typeof WeakMap==`function`?WeakMap:Map,q=0,$u=null,J=null,Y=0,X=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,vd=null,yd=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return q&2&&Y!==0?Y&-Y:D.T===null?Dt():Pf()}function Md(){if(ld===0){if(!(Y&536870912)||B){var e=dt;dt<<=1,!(dt&3932160)&&(dt=262144),ld=e}else ld=536870912}return e=jo.current,e!==null&&(e.flags|=32),ld}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(vi(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===$u&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,Y,ld,!1)),bt(e,n),q&2&&e===$u||(e===$u&&(!(q&2)&&(sd|=n),ad===4&&Rd(e,Y,ld,!1)),Ef(e))}function Fd(e,t,n){if(q&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||ht(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n))a=qd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-Ye(),10<a)){if(Rd(r,t,ld,!td),mt(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Id(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wn},Bl=null,Gu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-Ye():(a&4194048)===a?hd-Ye():0,m=eh(d,m),m!==null)?(Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l)):nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Hr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=gt(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ot(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&St(e,n,t)}function zd(){return q&6?!0:(Df(0,!1),!1)}function Bd(){if(J!==null){if(X===0)var e=J.return;else e=J,_a=ga=null,as(e),ao=null,oo=0,e=J;for(;e!==null;)W(e.alternate,e),e=e.return;J=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),$u=e,J=n=Fi(e.current,null),Y=t,X=0,ed=null,td=!1,nd=ht(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=gt(e,t),Ti(),n}function Hd(e,t){V=null,D.H=hc,t===Ya||t===Za?(t=ro(),X=3):t===Xa?(t=ro(),X=4):X=t===Nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,J===null&&(ad=1,Dc(e,Ui(t,e.current)))}function Ud(){var e=jo.current;return e===null?!0:(Y&4194048)===Y?Mo===null:(Y&62914560)===Y||Y&536870912?e===Mo:!1}function Wd(){var e=D.H;return D.H=hc,e===null?hc:e}function Gd(){var e=D.A;return D.A=Zu,e}function Kd(){ad=4,td||(Y&4194048)!==Y&&jo.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||$u===null||Rd($u,Y,ld,!1)}function qd(e,t,n){var r=q;q|=2;var i=Wd(),a=Gd();($u!==e||Y!==t)&&(_d=null,Vd(e,t)),t=!1;var o=ad;a:do try{if(X!==0&&J!==null){var s=J,c=ed;switch(X){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:jo.current===null&&(t=!0);var l=X;if(X=0,ed=null,$d(e,s,c,l),n&&nd){o=0;break a}break;default:l=X,X=0,ed=null,$d(e,s,c,l)}}Jd(),o=ad;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,_a=ga=null,q=r,D.H=i,D.A=a,J===null&&($u=null,Y=0,Ti()),o}function Jd(){for(;J!==null;)Zd(J)}function Yd(e,t){var n=q;q|=2;var r=Wd(),a=Gd();$u!==e||Y!==t?(_d=null,gd=Ye()+500,Vd(e,t)):nd=ht(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=ed;b:switch(X){case 1:X=0,ed=null,$d(e,t,o,1);break;case 2:case 9:if($a(o)){X=0,ed=null,Qd(t);break}t=function(){X!==2&&X!==9||$u!==e||(X=7),Ef(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:$a(o)?(X=0,ed=null,Qd(t)):(X=0,ed=null,$d(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Ym(s):c.stateNode.complete){X=0,ed=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,ef(u))}break b}}X=0,ed=null,$d(e,t,o,5);break;case 6:X=0,ed=null,$d(e,t,o,6);break;case 8:Bd(),ad=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return _a=ga=null,D.H=r,D.A=a,q=n,J===null?($u=null,Y=0,Ti(),ad):0}function Xd(){for(;J!==null&&!qe();)Zd(J)}function Zd(e){var t=pl(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=qc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=qc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:as(t);var r=t;r===ia&&(B?(ua(r),r.tag===5&&r.stateNode!=null&&(z=r.stateNode)):(ua(r),B=!0));default:W(n,t),t=J=Ii(t,id),t=pl(n,t,id)}e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function $d(e,t,n,r){_a=ga=null,as(t),ao=null,oo=0;var i=t.return;try{if(Mc(e,i,t,n,Y)){ad=1,Dc(e,Ui(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;ad=1,Dc(e,Ui(n,e.current)),J=null;return}t.flags&32768?(B||r===1?e=!0:nd||Y&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=jo.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,td);return}e=t.return;var n=yl(t.alternate,t,id);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ad===0&&(ad=5)}function tf(e,t){do{var n=bl(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);ad=6,J=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(yd!==0);if(q&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===$u&&(J=$u=null,Y=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=wi,xt(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Ia(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf($e,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),zl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=D.T,D.T=null,i=O.p,O.p=2,a=q,q|=4;try{fu(e,t,n)}finally{q=a,O.p=i,D.T=r}}yd=1,zl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(yd!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){yd===3&&(yd=0,Nu(xd,bd),yd=4)}function sf(){if(yd===1){yd=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=D.T,D.T=null;var i=O.p;O.p=2;var a=q;q|=4;try{lu=uu=!1,ku(t,e,n),n=cp;var o=Jr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&qr(s.ownerDocument.documentElement,s)){if(c!==null&&Yr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Kr(s,h),v=Kr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{q=a,O.p=i,D.T=r}}e.current=t,yd=2}}function cf(){if(yd===2){yd=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=q;q|=4;try{mu(e,t.alternate,t)}finally{q=i,O.p=r,D.T=n}}yd=3}}function lf(){if(yd===4||yd===3){yd=0;var e=Ed;Ed=null,Je();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?yd=5:(yd=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(vd=null),Et(r),n=n.stateNode,it&&typeof it.onCommitFiberRoot==`function`)try{it.onCommitFiberRoot(rt,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=D.T,a=O.p,O.p=2,D.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{D.T=n,O.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Na(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(yd!==5)return!1;var e=bd,t=Cd;Cd=0;var n=Et(Sd),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=wd,wd=null;var o=bd,s=Sd;if(yd=0,xd=bd=null,Sd=0,q&6)throw Error(i(331));var c=q;if(q|=4,Ju(o.current),Bu(o,o.current,s,n),q=c,Df(0,!1),it&&typeof it.onPostCommitFiberRoot==`function`)try{it.onPostCommitFiberRoot(rt,o)}catch{}return!0}finally{O.p=a,D.T=r,uf(e,t)}}function pf(e,t,n){t=Ui(n,t),t=kc(e.stateNode,t,2),e=vo(e,t,2),e!==null&&(bt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vd===null||!vd.has(r))){e=Ui(n,e),n=Ac(2),r=vo(t,n,2),r!==null&&(jc(n,r,t,e),bt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,$u===e&&(Y&n)===n&&(ad===4||ad===3&&(Y&62914560)===Y&&300>Ye()-md?q&2?cd|=n:Vd(e,0):cd|=n,ud===Y&&(ud=0)),Ef(e)}function gf(e,t){t===0&&(t=vt()),e=Oi(e,t),e!==null&&(bt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ge(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ot(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=Y,a=mt(r,r===$u?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||ht(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=Ye(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}yd!==0&&yd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ot(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=_t(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=$u,n=Y,n=mt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||ht(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ke(r),Et(n)){case 2:case 8:n=Qe;break;case 32:n=$e;break;case 268435456:n=et;break;default:n=$e}return r=jf.bind(null,e),n=Ge(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ke(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(yd!==0&&yd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=Y;return r=mt(e,e===$u?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,Ye()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){q&6?Ge(Ze,Of):kf()})}function Pf(){if(Tf===0){var e=za;e===0&&(e=ut,ut<<=1,!(ut&261888)&&(ut=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Cn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[jt]||null).action),o=r.submitter;o&&(t=(t=o[jt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Un(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);tc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),tc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<hi.length;Lf++){var Rf=hi[Lf];gi(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}gi(si,`onAnimationEnd`),gi(ci,`onAnimationIteration`),gi(li,`onAnimationStart`),gi(`dblclick`,`onDoubleClick`),gi(`focusin`,`onFocus`),gi(`focusout`,`onBlur`),gi(ui,`onTransitionRun`),gi(di,`onTransitionStart`),gi(fi,`onTransitionCancel`),gi(pi,`onTransitionEnd`),Jt(`onMouseEnter`,[`mouseout`,`mouseover`]),Jt(`onMouseLeave`,[`mouseout`,`mouseover`]),Jt(`onPointerEnter`,[`pointerout`,`pointerover`]),Jt(`onPointerLeave`,[`pointerout`,`pointerover`]),j(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),j(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),j(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),j(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),j(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),j(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){xi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){xi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Nt];n===void 0&&(n=t[Nt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Kt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Mn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Bt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}kn(function(){var r=a,i=P(n),s=[];a:{var c=mi.get(e);if(c!==void 0){var l=Un,u=e;switch(e){case`keypress`:if(Rn(n)===0)break a;case`keydown`:case`keyup`:l=or;break;case`focusin`:u=`focus`,l=I;break;case`focusout`:u=`blur`,l=I;break;case`beforeblur`:case`afterblur`:l=I;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Xn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=lr;break;case si:case ci:case li:l=Qn;break;case pi:l=ur;break;case`scroll`:case`scrollend`:l=Gn;break;case`wheel`:l=dr;break;case`copy`:case`cut`:case`paste`:l=$n;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=sr;break;case`submit`:l=cr;break;case`toggle`:case`beforetoggle`:l=fr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=An(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==Tn&&(u=n.relatedTarget||n.fromElement)&&(Bt(u)||u[Mt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Bt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Xn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=sr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Ht(c),h=l==null?u:Ht(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Bt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?te(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?Ht(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Ar;else if(Tr(c)){if(jr)_=Br;else{_=Rr;var v=Lr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&bn(r.elementType)&&(_=Ar):_=zr;if(_&&=_(e,r)){Er(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Ht(r):window,e){case`focusin`:(Tr(v)||v.contentEditable===`true`)&&(Zr=v,Qr=r,$r=null);break;case`focusout`:$r=Qr=Zr=null;break;case`mousedown`:ei=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ei=!1,ti(s,n,i);break;case`selectionchange`:if(Xr)break;case`keydown`:case`keyup`:ti(s,n,i)}var y;if(mr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else xr?yr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(gr&&n.locale!==`ko`&&(xr||b!==`onCompositionStart`?b===`onCompositionEnd`&&xr&&(y=Ln()):(Pn=i,Fn=`value`in Pn?Pn.value:Pn.textContent,xr=!0)),v=Jf(r,b),0<v.length&&(b=new er(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=br(n),y!==null&&(b.data=y)))),(y=L?Sr(e,n):Cr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new er(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=An(e,n),i!=null&&r.unshift(qf(e,i,a)),i=An(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=An(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=An(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||gn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&gn(e,``+r);else return;break;case`className`:en(e,`class`,r);break;case`tabIndex`:en(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:en(e,n,r);break;case`style`:yn(e,r,o);return;case`data`:if(t!==`object`){en(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Cn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Cn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=wn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Cn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),$t(e,`popover`,r);break;case`xlinkActuate`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:tn(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:tn(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:tn(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:$t(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=xn.get(n)||n,$t(e,n,r);else return}N=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:yn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)gn(e,r);else if(typeof r==`number`||typeof r==`bigint`)gn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=wn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!qt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[jt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}N=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):$t(e,n,r)}return}N=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}dn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&pn(e,!!r,n,!0):pn(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}hn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(bn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(N=!0),o=m;break;case`name`:m!==f&&(N=!0),a=m;break;case`checked`:m!==f&&(N=!0),u=m;break;case`defaultChecked`:m!==f&&(N=!0),d=m;break;case`value`:m!==f&&(N=!0),s=m;break;case`defaultValue`:m!==f&&(N=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}un(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(N=!0),p=o;break;case`defaultValue`:o!==l&&(N=!0),c=o;break;case`multiple`:o!==l&&(N=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?pn(e,!!n,n?[]:``,!1):pn(e,!!n,t,!0)):pn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(N=!0),p=a;break;case`defaultValue`:a!==o&&(N=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}mn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(N=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(bn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[At]=r,n[jt]=t,np(n,e,t),Wt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Lt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:T({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Bt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=te(n,a,w),t===null?t=!1:(h(t,!0,ee,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=te(r,a,w),t===null?t=!1:(h(t,!0,C,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),zt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Lt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===wn&&(e.onclick=null),zt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=O.d;O.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Vt(e);t!==null&&t.tag===5&&t.type===`form`?rc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=ln(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Wt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+ln(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+ln(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+ln(n.imageSizes)+`"]`)):i+=`[href="`+ln(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=T({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Rt]=!0,o.onload=o.onerror=function(){Gt(o)}),Wt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+ln(r)+`"][href="`+ln(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=T({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Wt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Ut(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=T({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Wt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Ut(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=T({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Wt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Ut(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=T({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Wt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=je.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Ut(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Ut(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Ut(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+ln(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Rt]){r.loading=1;return}}else t=e.createElement(`link`),t[Rt]=!0,t.onload=t.onerror=Gt.bind(null,t),np(t,`link`,n),Wt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+ln(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+ln(n.href)+`"]`);if(r)return t.instance=r,Wt(r),r;var a=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Wt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Wt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Wt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Wt(a),a):(r=n,(a=vm.get(o))&&(r=T({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Wt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Lt]||a[At]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Wt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Wt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:ce,Provider:null,Consumer:null,_currentValue:we,_currentValue2:we,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yt(0),this.hiddenUpdates=yt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ni(3,null,null,t),e.current=a,a.stateNode=e,t=Ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},ho(a),e}function uh(e){return e?(e=ji,e):ji}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=_o(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=vo(e,r,t),n!==null&&(Pd(n,e,t),yo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Oi(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=Tt(t);var n=Oi(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,yh(e,t,n,r)}finally{O.p=a,D.T=i}}function vh(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,yh(e,t,n,r)}finally{O.p=a,D.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Vt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=pt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ot(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(q&6)&&(gd=Ye()+500,Df(0,!1))}}break;case 31:case 13:s=Oi(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=P(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Bt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Xe()){case Ze:return 2;case Qe:return 8;case $e:case A:return 32;case et:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Vt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Bt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,Ot(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,Ot(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Tn=r,n.target.dispatchEvent(r),Tn=null}else return t=Vt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Vt(n);a!==null&&(e.splice(t,3),t-=3,tc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[jt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[jt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Mt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{rt=Jh.inject(qh),it=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=wc,s=Tc,c=Ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Mt]=t.current,Wf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=e=>e.replace(/[-_ ]+(\w)/g,(e,t)=>t.toUpperCase()).replace(/^./,e=>e.toLowerCase());function b(e,t){return`__ciq-font-${e}-${t.weight}-${t.style}`}function x(e,t){return`
    @font-face {
      font-family: '${e}';
      font-style: ${t.style};
      font-weight: ${t.weight};
      src: url('${t.file}') format('woff2');
      font-display: swap;
    }
  `}function S(e,t){return{href:t.file,type:`font/woff2`,as:`font`,crossOrigin:`anonymous`}}function ee(e,t){let{id:n}=t,r=n??b(e,t);if(document.getElementById(r))return;let i=document.createElement(`style`);i.id=r,i.textContent=x(e,t),document.head.appendChild(i)}var C=(e,t)=>t?e.filter(e=>{let n=!t.weights||t.weights.includes(e.weight),r=!t.styles||t.styles.includes(e.style);return n&&r}):e;function w(e){let t=Object.fromEntries(e.variants.map(t=>{let{weight:n,style:r}=t;return[y([e.name,n,r===`normal`?``:r].filter(Boolean).join(`-`)),{css:()=>x(e.name,t),preload:()=>[S(e.name,t)],inject:()=>ee(e.name,t)}]})),n={[y(e.name)]:{css:t=>C(e.variants,t).map(t=>x(e.name,t)).join(`
`),preload:t=>C(e.variants,t).map(t=>S(e.name,t)),inject:t=>C(e.variants,t).forEach(t=>ee(e.name,t))}};return{...t,...n}}var te=`/assets/CommitMono-Regular.woff2`,T=`/assets/CommitMono-Italic.woff2`,ne=`/assets/CommitMono-Bold.woff2`,re=`/assets/CommitMono-BoldItalic.woff2`,ie=`/assets/Inter-Thin.woff2`,E=`/assets/Inter-ThinItalic.woff2`,ae=`/assets/Inter-ExtraLight.woff2`,oe=`/assets/Inter-ExtraLightItalic.woff2`,se=`/assets/Inter-Light.woff2`,ce=`/assets/Inter-LightItalic.woff2`,le=`/assets/Inter-Regular.woff2`,ue=`/assets/Inter-Italic.woff2`,de=`/assets/Inter-Medium.woff2`,fe=`/assets/Inter-MediumItalic.woff2`,pe=`/assets/Inter-SemiBold.woff2`,me=`/assets/Inter-SemiBoldItalic.woff2`,he=`/assets/Inter-Bold.woff2`,ge=`/assets/Inter-BoldItalic.woff2`,_e=`/assets/Inter-ExtraBold.woff2`,ve=`/assets/Inter-ExtraBoldItalic.woff2`,ye=`/assets/Inter-Black.woff2`,be=`/assets/Inter-BlackItalic.woff2`,xe=`/assets/Roboto-Thin.woff2`,Se=`/assets/Roboto-ThinItalic.woff2`,Ce=`/assets/Roboto-Light.woff2`,D=`/assets/Roboto-LightItalic.woff2`,O=`/assets/Roboto-Regular.woff2`,we=`/assets/Roboto-RegularItalic.woff2`,Te=`/assets/Roboto-Medium.woff2`,Ee=`/assets/Roboto-MediumItalic.woff2`,De=`/assets/Roboto-Bold.woff2`,Oe=`/assets/Roboto-BoldItalic.woff2`,k=`/assets/Roboto-Black.woff2`,ke=`/assets/Roboto-BlackItalic.woff2`,Ae=`/assets/Satoshi-Light.woff2`,je=`/assets/Satoshi-LightItalic.woff2`,Me=`/assets/Satoshi-Regular.woff2`,Ne=`/assets/Satoshi-Italic.woff2`,Pe=`/assets/Satoshi-Medium.woff2`,Fe=`/assets/Satoshi-MediumItalic.woff2`,Ie=`/assets/Satoshi-Bold.woff2`,Le=`/assets/Satoshi-BoldItalic.woff2`,Re=`/assets/Satoshi-Black.woff2`,ze=`/assets/Satoshi-BlackItalic.woff2`,Be={name:`CommitMono`,variants:[{weight:400,style:`normal`,file:te},{weight:400,style:`italic`,file:T},{weight:700,style:`normal`,file:ne},{weight:700,style:`italic`,file:re}]},Ve={name:`Inter`,variants:[{weight:100,style:`normal`,file:ie},{weight:100,style:`italic`,file:E},{weight:200,style:`normal`,file:ae},{weight:200,style:`italic`,file:oe},{weight:300,style:`normal`,file:se},{weight:300,style:`italic`,file:ce},{weight:400,style:`normal`,file:le},{weight:400,style:`italic`,file:ue},{weight:500,style:`normal`,file:de},{weight:500,style:`italic`,file:fe},{weight:600,style:`normal`,file:pe},{weight:600,style:`italic`,file:me},{weight:700,style:`normal`,file:he},{weight:700,style:`italic`,file:ge},{weight:800,style:`normal`,file:_e},{weight:800,style:`italic`,file:ve},{weight:900,style:`normal`,file:ye},{weight:900,style:`italic`,file:be}]},He={name:`Roboto`,variants:[{weight:100,style:`normal`,file:xe},{weight:100,style:`italic`,file:Se},{weight:300,style:`normal`,file:Ce},{weight:300,style:`italic`,file:D},{weight:400,style:`normal`,file:O},{weight:400,style:`italic`,file:we},{weight:500,style:`normal`,file:Te},{weight:500,style:`italic`,file:Ee},{weight:700,style:`normal`,file:De},{weight:700,style:`italic`,file:Oe},{weight:900,style:`normal`,file:k},{weight:900,style:`italic`,file:ke}]},Ue={name:`Satoshi`,variants:[{weight:300,style:`normal`,file:Ae},{weight:300,style:`italic`,file:je},{weight:400,style:`normal`,file:Me},{weight:400,style:`italic`,file:Ne},{weight:500,style:`normal`,file:Pe},{weight:500,style:`italic`,file:Fe},{weight:700,style:`normal`,file:Ie},{weight:700,style:`italic`,file:Le},{weight:900,style:`normal`,file:Re},{weight:900,style:`italic`,file:ze}]},We=w(Be),Ge=w(Ve),Ke=w(He),qe=w(Ue);We.commitMono,We.commitMono400,We.commitMono400Italic,We.commitMono700,We.commitMono700Italic;var Je=Ge.inter;Ge.inter100,Ge.inter100Italic,Ge.inter200,Ge.inter200Italic,Ge.inter300,Ge.inter300Italic,Ge.inter400,Ge.inter400Italic,Ge.inter500,Ge.inter500Italic,Ge.inter600,Ge.inter600Italic,Ge.inter700,Ge.inter700Italic,Ge.inter800,Ge.inter800Italic,Ge.inter900,Ge.inter900Italic,Ke.roboto,Ke.roboto100,Ke.roboto100Italic,Ke.roboto300,Ke.roboto300Italic,Ke.roboto400,Ke.roboto400Italic,Ke.roboto500,Ke.roboto500Italic,Ke.roboto700,Ke.roboto700Italic,Ke.roboto900,Ke.roboto900Italic;var Ye=qe.satoshi;qe.satoshi300,qe.satoshi300Italic,qe.satoshi400,qe.satoshi400Italic,qe.satoshi500,qe.satoshi500Italic,qe.satoshi700,qe.satoshi700Italic,qe.satoshi900,qe.satoshi900Italic;var Xe=new Set([`children`,`localName`,`ref`,`style`,`className`]),Ze=new WeakMap,Qe=(e,t,n,r,i)=>{let a=i?.[t];a===void 0?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==r&&((e,t,n)=>{let r=Ze.get(e);r===void 0&&Ze.set(e,r=new Map);let i=r.get(t);n===void 0?i!==void 0&&(r.delete(t),e.removeEventListener(t,i)):i===void 0?(r.set(t,i={handleEvent:n}),e.addEventListener(t,i)):i.handleEvent=n})(e,a,n)},$e=({react:e,tagName:t,elementClass:n,events:r,displayName:i})=>{let a=new Set(Object.keys(r??{})),o=e.forwardRef(((i,o)=>{let s=e.useRef(new Map),c=e.useRef(null),l={},u={};for(let[e,t]of Object.entries(i))Xe.has(e)?l[e===`className`?`class`:e]=t:a.has(e)||e in n.prototype?u[e]=t:l[e]=t;return e.useLayoutEffect((()=>{if(c.current===null)return;let e=new Map;for(let t in u)Qe(c.current,t,i[t],s.current.get(t),r),s.current.delete(t),e.set(t,i[t]);for(let[e,t]of s.current)Qe(c.current,e,void 0,t,r);s.current=e})),e.useLayoutEffect((()=>{c.current?.removeAttribute(`defer-hydration`)}),[]),l.suppressHydrationWarning=!0,e.createElement(t,{...l,ref:e.useCallback((e=>{c.current=e,typeof o==`function`?o(e):o!==null&&(o.current=e)}),[o])})}));return o.displayName=i??n.name,o};function A(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function et(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)}function tt(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n}var nt=globalThis,rt=nt.ShadowRoot&&(nt.ShadyCSS===void 0||nt.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,it=Symbol(),at=new WeakMap,ot=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(rt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=at.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&at.set(t,e))}return e}toString(){return this.cssText}},st=e=>new ot(typeof e==`string`?e:e+``,void 0,it),ct=(e,...t)=>new ot(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,it),lt=(e,t)=>{if(rt)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=nt.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ut=rt?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return st(t)})(e):e,{is:dt,defineProperty:ft,getOwnPropertyDescriptor:pt,getOwnPropertyNames:mt,getOwnPropertySymbols:ht,getPrototypeOf:gt}=Object,_t=globalThis,vt=_t.trustedTypes,yt=vt?vt.emptyScript:``,bt=_t.reactiveElementPolyfillSupport,xt=(e,t)=>e,St={toAttribute(e,t){switch(t){case Boolean:e=e?yt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ct=(e,t)=>!dt(e,t),wt={attribute:!0,type:String,converter:St,reflect:!1,useDefault:!1,hasChanged:Ct};Symbol.metadata??=Symbol(`metadata`),_t.litPropertyMetadata??=new WeakMap;var Tt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=wt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ft(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=pt(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??wt}static _$Ei(){if(this.hasOwnProperty(xt(`elementProperties`)))return;let e=gt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(xt(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xt(`properties`))){let e=this.properties,t=[...mt(e),...ht(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ut(e))}else e!==void 0&&t.push(ut(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?St:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?St:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Ct)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Tt.elementStyles=[],Tt.shadowRootOptions={mode:`open`},Tt[xt(`elementProperties`)]=new Map,Tt[xt(`finalized`)]=new Map,bt?.({ReactiveElement:Tt}),(_t.reactiveElementVersions??=[]).push(`2.1.2`);var Et=globalThis,Dt=e=>e,Ot=Et.trustedTypes,kt=Ot?Ot.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,At=`$lit$`,jt=`lit$${Math.random().toFixed(9).slice(2)}$`,Mt=`?`+jt,Nt=`<${Mt}>`,Pt=document,Ft=()=>Pt.createComment(``),It=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Lt=Array.isArray,Rt=e=>Lt(e)||typeof e?.[Symbol.iterator]==`function`,zt=`[ 	
\f\r]`,Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vt=/-->/g,Ht=/>/g,Ut=RegExp(`>|${zt}(?:([^\\s"'>=/]+)(${zt}*=${zt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Wt=/'/g,Gt=/"/g,Kt=/^(?:script|style|textarea|title)$/i,qt=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),j=qt(1),Jt=qt(2),Yt=Symbol.for(`lit-noChange`),M=Symbol.for(`lit-nothing`),Xt=new WeakMap,Zt=Pt.createTreeWalker(Pt,129);function N(e,t){if(!Lt(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return kt===void 0?t:kt.createHTML(t)}var Qt=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Bt;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Bt?c[1]===`!--`?o=Vt:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Ut):(Kt.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Ut):o=Ht:o===Ut?c[0]===`>`?(o=i??Bt,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Ut:c[3]===`"`?Gt:Wt):o===Gt||o===Wt?o=Ut:o===Vt||o===Ht?o=Bt:(o=Ut,i=void 0);let d=o===Ut&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Bt?n+Nt:l>=0?(r.push(s),n.slice(0,l)+At+n.slice(l)+jt+d):n+jt+(l===-2?t:d)}return[N(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},$t=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Qt(t,n);if(this.el=e.createElement(l,r),Zt.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Zt.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(At)){let t=u[o++],n=i.getAttribute(e).split(jt),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?an:r[1]===`?`?on:r[1]===`@`?sn:rn}),i.removeAttribute(e)}else e.startsWith(jt)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Kt.test(i.tagName)){let e=i.textContent.split(jt),t=e.length-1;if(t>0){i.textContent=Ot?Ot.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Ft()),Zt.nextNode(),c.push({type:2,index:++a});i.append(e[t],Ft())}}}else if(i.nodeType===8){if(i.data===Mt)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(jt,e+1))!==-1;)c.push({type:7,index:a}),e+=jt.length-1}}a++}}static createElement(e,t){let n=Pt.createElement(`template`);return n.innerHTML=e,n}};function en(e,t,n=e,r){if(t===Yt)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=It(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=en(e,i._$AS(e,t.values),i,r)),t}var tn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Pt).importNode(t,!0);Zt.currentNode=r;let i=Zt.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new nn(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new cn(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Zt.nextNode(),a++)}return Zt.currentNode=Pt,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},nn=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=en(this,e,t),It(e)?e===M||e==null||e===``?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==Yt&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Rt(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==M&&It(this._$AH)?this._$AA.nextSibling.data=e:this.T(Pt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=$t.createElement(N(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new tn(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Xt.get(e.strings);return t===void 0&&Xt.set(e.strings,t=new $t(e)),t}k(t){Lt(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Ft()),this.O(Ft()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Dt(e).nextSibling;Dt(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},rn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=en(this,e,t,0),a=!It(e)||e!==this._$AH&&e!==Yt,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=en(this,r[n+o],t,o),s===Yt&&(s=this._$AH[o]),a||=!It(s)||s!==this._$AH[o],s===M?e=M:e!==M&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},an=class extends rn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},on=class extends rn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},sn=class extends rn{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=en(this,e,t,0)??M)===Yt)return;let n=this._$AH,r=e===M&&n!==M||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==M&&(n===M||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},cn=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){en(this,e)}},ln={M:At,P:jt,A:Mt,C:1,L:Qt,R:tn,D:Rt,V:en,I:nn,H:rn,N:on,U:sn,B:an,F:cn},un=Et.litHtmlPolyfillSupport;un?.($t,nn),(Et.litHtmlVersions??=[]).push(`3.3.3`);var dn=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new nn(t.insertBefore(Ft(),e),e,void 0,n??{})}return i._$AI(e),i},fn=globalThis,pn=class extends Tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=dn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Yt}};pn._$litElement$=!0,pn.finalized=!0,fn.litElementHydrateSupport?.({LitElement:pn});var mn=fn.litElementPolyfillSupport;mn?.({LitElement:pn}),(fn.litElementVersions??=[]).push(`4.2.2`);var hn={attribute:!0,type:String,converter:St,reflect:!1,hasChanged:Ct},gn=(e=hn,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function _n(e){return(t,n)=>typeof n==`object`?gn(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function vn(e){return _n({...e,state:!0,attribute:!1})}var yn=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function bn(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return yn(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return yn(n,r,{get(){return a(this)}})}}var xn=new WeakMap,Sn={description:!0,type:!0,options:!0,default:!0,required:!0,copyRule:!0,experimental:!0,attribute:!0,reflect:!0},Cn=new Set([`attribute`,`reflect`]),wn={fromAttribute:e=>e!==null&&e!==`false`,toAttribute:e=>e?``:null};function Tn(e){return e===`boolean`?Boolean:e===`number`?Number:/\[\]$/.test(e)||e.startsWith(`Array`)?Array:e===`object`||e.startsWith(`Record<`)||e.startsWith(`{`)?Object:String}function P(e){return(t,n)=>{let r=xn.get(t);r||(r={},xn.set(t,r));let{type:i}=e,a={type:i},o={};for(let[t,n]of Object.entries(e))t!==`type`&&(t in Sn&&Object.assign(a,{[t]:n}),(!(t in Sn)||Cn.has(t))&&(o[t]=n));let s=Tn(i),c=s!==Array&&s!==Object,l=s===Boolean?{converter:wn}:{};a.attribute??=n.toLowerCase(),a.reflect=a.attribute!==!1&&(a.reflect??c),r[n]=a,_n({type:s,reflect:c,...l,...o})(t,n)}}function En(e){let t=[],n=e;for(;n&&n!==Object.prototype;)t.push(n),n=Object.getPrototypeOf(n);let r={};for(let e of t.reverse()){let t=xn.get(e);t&&Object.assign(r,t)}return r}function F(e,t){return n=>{let r=n.meta;if(r){r.events||={};let n=t.description??(t.forwarded?`Forwarded native ${e} event.`:void 0);r.events[e]={...t,description:n}}}}var Dn=new Set([`checkbox`,`radio`]),On=new Set([`text`,`search`,`url`,`tel`,`password`]),kn=[`type`,`part`,`slot`],An=e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement,jn=e=>[e.localName,...kn.map(t=>e.getAttribute(t)??``)].join(`|`),Mn=(e,t)=>[...e.querySelectorAll(`*`)].filter(e=>jn(e)===t),Nn=(e,t)=>{let n=jn(t);return{key:n,index:Mn(e,n).indexOf(t)}};function Pn(e){let t=[...e.options].filter(e=>e.defaultSelected);if(t.length||e.multiple)return t.map(e=>e.value);let n=[...e.options].find(e=>!e.disabled);return n?[n.value]:[]}function Fn(e){if(e instanceof HTMLTextAreaElement)return e.defaultValue;let t=document.createElement(`input`);return[...e.attributes].forEach(({name:e,value:n})=>t.setAttribute(e,n)),t.value}function In(e){if(e instanceof HTMLSelectElement){let t=[...e.selectedOptions].map(e=>e.value);return t.join(`
`)===Pn(e).join(`
`)?void 0:t}if(e instanceof HTMLInputElement&&Dn.has(e.type))return e.checked===e.defaultChecked?void 0:e.checked;if(!(e instanceof HTMLInputElement&&e.type===`file`))return e.value===Fn(e)?void 0:e.value}function Ln(e,t){e instanceof HTMLSelectElement?[...e.options].forEach(e=>{e.selected=t.includes(e.value)}):typeof t==`boolean`?e.checked=t:e.value=t}var Rn=(e,t)=>!(e instanceof HTMLSelectElement)||t.length===0||[...e.options].some(e=>t.includes(e.value)),zn=e=>e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement&&On.has(e.type);function Bn(e){let t=new Map;return[...e.querySelectorAll(`*`)].map(e=>{let n=jn(e),r=t.get(n)??0;return t.set(n,r+1),[e,{key:n,index:r}]})}function Vn(e,t){return Bn(e).flatMap(([e,n])=>{let r=[...t,n];return[[e,r],...e.shadowRoot?Vn(e.shadowRoot,r):[]]})}var Hn=e=>e.flatMap(([e,t])=>{let n=An(e)?In(e):void 0;return n===void 0?[]:[{location:t,value:n}]}),Un=e=>e.flatMap(([e,t])=>e.scrollTop||e.scrollLeft?[{location:t,top:e.scrollTop,left:e.scrollLeft}]:[]);function Wn(e,t=[]){let n=e.activeElement;if(!n)return;let r=[...t,Nn(e,n)];return n.shadowRoot?.activeElement?Wn(n.shadowRoot,r):{location:r,selection:zn(n)?[n.selectionStart??0,n.selectionEnd??0]:null}}function Gn(e){let t=Vn(e,[]);return{edits:Hn(t),scrolls:Un(t),focus:Wn(e)}}async function Kn(e,[t,...n]){let r=Mn(e,t.key)[t.index];return!r||!n.length?r:(`updateComplete`in r&&await r.updateComplete,r.shadowRoot?Kn(r.shadowRoot,n):void 0)}async function qn(e,{edits:t,scrolls:n,focus:r}){let i=(await Promise.all(t.map(async({location:t,value:n})=>({control:await Kn(e,t),value:n})))).flatMap(({control:e,value:t})=>!e||!An(e)||!Rn(e,t)?[]:(Ln(e,t),[e]));(await Promise.all(n.map(async({location:t,top:n,left:r})=>({element:await Kn(e,t),top:n,left:r})))).forEach(({element:e,top:t,left:n})=>e?.scrollTo({top:t,left:n,behavior:`instant`}));let a=r&&await Kn(e,r.location);return r&&a instanceof HTMLElement&&(a.focus({preventScroll:!0}),r.selection&&zn(a)&&a.setSelectionRange(...r.selection)),i}function Jn(e){e.forEach(e=>{e.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),e.dispatchEvent(new Event(`change`,{bubbles:!0}))})}var Yn=Symbol.for(`tagName`),Xn=(e,t)=>{e[Yn]=t},Zn=class extends pn{createRenderRoot(){let e=this.shadowRoot;return e?(this.serverRenderedNodes=[...e.childNodes],lt(e,this.constructor.elementStyles),e):super.createRenderRoot()}update(e){let t=this.serverRenderedNodes,n=this.renderRoot,r=t&&Gn(n);super.update(e),t&&r&&(t.forEach(e=>e.remove()),this.serverRenderedNodes=void 0,queueMicrotask(()=>void qn(n,r).then(Jn)))}static ensureDefined(){if(!this.tagName)throw Error(`${this.name} is missing a tagName. Did you forget to use @quanticElement decorator?`);Xn(this,this.tagName),customElements.get(this.tagName)||customElements.define(this.tagName,this)}};function I(e){return function(t){customElements.get(e)||customElements.define(e,t),t.tagName=e,Xn(t,e);let n=En(t.prototype);if(t.meta&&Object.keys(n).length){let r=Object.prototype.hasOwnProperty.call(t,`meta`),i=r?t.meta:{...t.meta,tag:e,props:{...t.meta.props??{}}};i.props={...i.props??{},...n},r||(t.meta=i)}return t}}function Qn(e,t){let n=t.cssText;if(e===``)return st(`:host(:has(> :not([slot]))) { ${n} } @scope { :scope:has(> :not([slot])) { ${n} } }`);let r=$n(e);return st(`:host(:has(> [slot="${r}"])) { ${n} } @scope { :scope:has(> [slot="${r}"]) { ${n} } }`)}function $n(e){return e.replace(/["\\]/g,`\\$&`)}var er=`data-slot-filled`,tr=(e,t=[])=>{var n,r,i,a,o,s,c;if(t.length===0)return e;let l=e=>`cssText`in e?e.cssText:Array.from(e.cssRules,e=>e.cssText).join(`
`),u=e=>e===``?`slot:not([name])`:`slot[name="${$n(e)}"]`,d=t.map(e=>{let t=u(e);return e===``?`${t}[${er}="false"] { display: none; }`:[`${t} { display: none; }`,Qn(e,st(`${t} { display: revert-layer; }`)).cssText,`${t}[${er}="true"] { display: revert-layer; }`].join(` `)}).join(` `);class f extends e{constructor(){super(...arguments),n.add(this),r.set(this,!1),i.set(this,e=>e.nodeType!==Node.TEXT_NODE||e.textContent?.trim()!==``),a.set(this,e=>{let r=e.target;t.includes(r.name)&&et(this,n,`m`,o).call(this,r)})}static finalizeStyles(t){return[st(`@layer quantic-component, quantic-slot-visibility; @layer quantic-component { ${(e.finalizeStyles?.call(this,t)??[]).map(l).join(`
`)} } @layer quantic-slot-visibility { ${d} }`)]}connectedCallback(){super.connectedCallback(),et(this,n,`m`,s).call(this)}disconnectedCallback(){et(this,n,`m`,c).call(this),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated?.(e),et(this,n,`m`,s).call(this)}updated(e){super.updated?.(e);for(let e of t){let t=this.renderRoot.querySelector(e===``?`slot:not([name])`:`slot[name="${CSS.escape(e)}"]`);t&&et(this,n,`m`,o).call(this,t)}}}return r=new WeakMap,i=new WeakMap,a=new WeakMap,n=new WeakSet,o=function(e){let t=String(e.assignedNodes({flatten:!0}).some(et(this,i,`f`)));e.getAttribute(er)!==t&&e.setAttribute(er,t)},s=function(){!et(this,r,`f`)&&this.renderRoot&&(this.renderRoot.addEventListener(`slotchange`,et(this,a,`f`),{capture:!0}),tt(this,r,!0,`f`))},c=function(){et(this,r,`f`)&&this.renderRoot&&(this.renderRoot.removeEventListener(`slotchange`,et(this,a,`f`),{capture:!0}),tt(this,r,!1,`f`))},f},nr={Success:`success`,Error:`error`,Warning:`warning`,Info:`info`},rr=Symbol.for(``),ir=e=>{if(e?.r===rr)return e?._$litStatic$},ar=e=>({_$litStatic$:e,r:rr}),or=new Map,sr=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=ir(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=or.get(e))===void 0&&(o.raw=o,or.set(e,t=o)),n=s}return e(t,...n)})(j),cr={Primary:`primary`,Secondary:`secondary`,Outline:`outline`,Ghost:`ghost`},lr={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`,ExtraLarge:`xl`},ur={Never:`never`,Always:`always`,Small:`sm`,Medium:`md`,Large:`lg`},dr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},fr=e=>(...t)=>({_$litDirective$:e,values:t}),pr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},mr=fr(class extends pr{constructor(e){if(super(e),e.type!==dr.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Yt}}),hr=e=>e??M,L=class extends Zn{constructor(){super(),this.as=`button`,this.variant=cr.Primary,this.size=lr.Medium,this.type=`button`,this.icon=!1,this.destructive=!1,this.disabled=!1,this.autofocus=!1,this.grow=ur.Never,this.handleClick=e=>{if(!this.disabled){let t=this.form?document.getElementById(this.form):null,n=this.internals?.form??t??this.getRootNode()?.host?.closest?.(`form`);if(n){if(this.type===`submit`){let t=null;this.name&&this.value!=null&&(t=document.createElement(`input`),t.type=`hidden`,t.name=this.name,t.value=this.value,t.setAttribute(`data-quantic-name-value-holder`,`1`),n.appendChild(t));try{n.requestSubmit(this.innerButton??void 0)}catch{n.requestSubmit()}finally{queueMicrotask(()=>t?.remove())}e.preventDefault()}else this.type===`reset`&&(n.reset(),e.preventDefault())}}},this.internals=this.attachInternals?.()??{form:null}}render(){let e=ar(this.as),t=this.as===`button`?void 0:this.as===`a`?`link`:`button`,n=this.as===`button`?this.type:void 0,r=mr({main:!0,[`size--${this.size}`]:!0,[`variant--${this.variant}`]:!0,icon:this.icon,destructive:this.destructive,[`grow--${this.grow}`]:!0});return this.as===`button`?sr`<button
          class=${r}
          tabindex=${this.disabled?-1:0}
          type=${n}
          ?disabled=${this.disabled}
          ?autofocus=${this.autofocus}
          form=${hr(this.form)}
          name=${hr(this.name)}
          value=${hr(this.value)}
          @click=${this.handleClick}
        >
          <slot></slot>
        </button>`:sr`
        <${e}
          class=${r}
          role="${t}"
          tabindex=${this.disabled?-1:0}
          aria-disabled=${this.disabled}
          href=${hr(this.href)}
          target=${hr(this.target)}
          download=${hr(this.download)}
        >
          <slot></slot>
        </${e}>`}};L.meta={tag:`quantic-button`,description:`Clickable action trigger for form submission, primary CTAs, and secondary actions. Supports icon-only mode and polymorphic rendering as an <a> or <span>. Prefer over quantic-icon-label when the element needs to be interactive.`,category:`action`,slots:{"":{description:`Button label or icon content.`}},relatedTo:[`quantic-button-bar`,`quantic-icon-label`]},L.formAssociated=!0,L.styles=ct`
    :host {
      display: inline-flex;
    }

    :host([disabled]) {
      pointer-events: none;
      opacity: 0.5;
    }

    :host([grow='always']) {
      width: 100%;
    }

    @container box-container (max-width: 25rem) {
      :host([grow='sm']),
      :host([grow='md']),
      :host([grow='lg']) {
        width: 100%;
      }
    }

    @container box-container (max-width: 40rem) {
      :host([grow='md']),
      :host([grow='lg']) {
        width: 100%;
      }
    }

    @container box-container (max-width: 64rem) {
      :host([grow='lg']) {
        width: 100%;
      }
    }

    .main {
      position: relative;
      appearance: none;
      border: none;
      border-radius: var(--quantic-radius-xs);
      font-family: var(--quantic-font-family-body);
      font-weight: var(--quantic-font-weight-semibold);
      white-space: nowrap;
      text-decoration: none;
      text-transform: uppercase;
      text-align: center;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--quantic-spacing-2);
      width: 100%;
      color: var(--quantic-text-primary);
      cursor: pointer;
      outline: none;
      box-sizing: border-box;
      vertical-align: middle;
      transition:
        background-color 0.2s ease-in-out,
        border-color 0.2s ease-in-out,
        color 0.2s ease-in-out;
    }

    .main::before {
      content: '';
      display: block;
      position: absolute;
      inset: 0;
      border-radius: var(--quantic-radius-sm);
      border: 2px solid var(--quantic-focus-ring);
      transition: all 0.2s ease-in-out;
      opacity: 0;
    }

    .main:focus-visible::before {
      inset: -4px;
      opacity: 1;
      border: 2px solid var(--quantic-focus-ring);
    }

    .destructive:focus-visible::before {
      border: 2px solid var(--quantic-fg-error-primary);
    }

    .size--xs {
      padding: var(--quantic-spacing-1) var(--quantic-spacing-2);
      font-size: var(--quantic-font-size-body-xs);
      line-height: var(--quantic-line-height-body-xs);
      min-height: calc(
        var(--quantic-line-height-body-xs) + var(--quantic-spacing-1) * 2
      );
    }

    .size--sm {
      padding: var(--quantic-spacing-2) var(--quantic-spacing-3);
      font-size: var(--quantic-font-size-body-sm);
      line-height: var(--quantic-line-height-body-sm);
      min-height: calc(
        var(--quantic-line-height-body-sm) + var(--quantic-spacing-2) * 2
      );
    }

    .size--md {
      padding: 10px var(--quantic-spacing-3);
      font-size: var(--quantic-font-size-body-md);
      line-height: var(--quantic-line-height-body-md);
      min-height: calc(var(--quantic-line-height-body-md) + 10px * 2);
    }

    .size--lg {
      padding: var(--quantic-spacing-3) var(--quantic-spacing-4);
      font-size: var(--quantic-font-size-body-lg);
      line-height: var(--quantic-line-height-body-lg);
      min-height: calc(
        var(--quantic-line-height-body-lg) + var(--quantic-spacing-3) * 2
      );
    }

    .size--xl {
      padding: 14px 18px;
      font-size: var(--quantic-font-size-body-xl);
      line-height: var(--quantic-line-height-body-xl);
      min-height: calc(var(--quantic-line-height-body-xl) + 14px * 2);
    }

    .icon {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 100%;
    }

    .icon.size--xs {
      width: 1.75rem;
    }

    .icon.size--sm {
      width: 2.25rem;
    }

    .icon.size--md {
      width: 2.75rem;
    }

    .icon.size--lg {
      width: 3.25rem;
    }

    .icon.size--xl {
      width: 3.75rem;
    }

    .variant--primary {
      background-color: var(--quantic-bg-brand-primary);
      color: var(--quantic-text-primary-on-brand);
    }

    .variant--primary:hover {
      background-color: var(--quantic-bg-brand-primary-hover);
    }

    .destructive.variant--primary {
      background-color: var(--quantic-fg-error-primary);
      color: var(--quantic-text-white);
    }

    .destructive.variant--primary:hover {
      background-color: var(--quantic-text-error-primary-hover);
    }

    .variant--secondary {
      background-color: transparent;
      border: 1px solid var(--quantic-border-brand);
      color: var(--quantic-fg-brand-primary);
    }

    .variant--secondary:hover {
      border: 1px solid var(--quantic-border-brand);
      background-color: var(--quantic-bg-brand-primary);
      color: var(--quantic-text-primary-on-brand);
    }

    .destructive.variant--secondary {
      border: 1px solid var(--quantic-fg-error-primary);
      color: var(--quantic-fg-error-primary);
    }

    .destructive.variant--secondary:hover {
      border: 1px solid var(--quantic-fg-error-primary);
      background-color: var(--quantic-fg-error-primary);
      color: var(--quantic-text-white);
    }

    .variant--outline {
      background-color: transparent;
      border: 1px solid var(--quantic-border-primary);
    }

    .variant--outline:hover {
      border: 1px solid var(--quantic-border-brand);
    }

    .destructive.variant--outline {
      border: 1px solid var(--quantic-fg-error-primary);
      color: var(--quantic-fg-error-primary);
    }

    .destructive.variant--outline:hover {
      border: 1px solid var(--quantic-fg-error-primary);
    }

    .destructive.variant--ghost:hover {
      color: var(--quantic-fg-error-primary);
    }

    .variant--ghost {
      background-color: transparent;
      border: transparent;
      padding: 0;
    }

    ::slotted(*) {
      display: flex;
      align-items: center;
    }
  `,A([P({type:`"button" | "a" | "div" | "span"`,default:`button`,description:`Underlying HTML element. Use "a" for navigation, "button" (default) for actions.`})],L.prototype,`as`,void 0),A([P({type:`ButtonVariant`,options:Object.values(cr),default:cr.Primary,reflect:!0,description:`Visual style. Use primary for the main CTA, secondary for paired actions, outline for neutral actions, ghost for inline or toolbar actions.`})],L.prototype,`variant`,void 0),A([P({type:`ButtonSize`,options:Object.values(lr),default:lr.Medium,reflect:!0,description:`Controls padding and font size.`})],L.prototype,`size`,void 0),A([P({type:`"button" | "submit" | "reset"`,default:`button`,reflect:!0,description:`Native button type for form association.`})],L.prototype,`type`,void 0),A([P({type:`string`,reflect:!0,description:`ID of the associated <form> element.`})],L.prototype,`form`,void 0),A([P({type:`string`,reflect:!0,description:`Name submitted with form data.`})],L.prototype,`name`,void 0),A([P({type:`string`,reflect:!0,description:`Value submitted with form data.`})],L.prototype,`value`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Square icon-only mode — equal padding on all sides, no text label.`})],L.prototype,`icon`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Renders in error/danger colors. Use for irreversible actions such as delete or remove.`})],L.prototype,`destructive`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction and reduces opacity.`})],L.prototype,`disabled`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Automatically focuses the button on page load.`})],L.prototype,`autofocus`,void 0),A([P({type:`ButtonGrow`,options:Object.values(ur),default:ur.Never,reflect:!0,description:`Responsive full-width behaviour. "always" is always full-width; "sm", "md", "lg" expand at those container-query thresholds.`})],L.prototype,`grow`,void 0),A([P({type:`string`,reflect:!0,description:`URL for anchor rendering (as="a" only).`})],L.prototype,`href`,void 0),A([P({type:`string`,reflect:!0,description:`Link target for anchor rendering (as="a" only).`})],L.prototype,`target`,void 0),A([P({type:`string`,reflect:!0,description:`Filename hint for download links (as="a" only).`})],L.prototype,`download`,void 0),A([bn(`button`)],L.prototype,`innerButton`,void 0),L=A([I(`quantic-button`)],L);var gr={ApptainerOutline:`apptainer.outline`,ApptainerSolid:`apptainer.solid`,AscenderOutline:`ascender.outline`,AscenderSolid:`ascender.solid`,CIQBridgeOutline:`ciq-bridge.outline`,CIQBridgeSolid:`ciq-bridge.solid`,FuzzballOutline:`fuzzball.outline`,FuzzballSolid:`fuzzball.solid`,RLCHardenedOutline:`rlc-hardened.outline`,RLCHardenedSolid:`rlc-hardened.solid`,RLCPlusOutline:`rlc-plus.outline`,RLCPlusSolid:`rlc-plus.solid`,RLCProAIOutline:`rlc-pro-ai.outline`,RLCProAISolid:`rlc-pro-ai.solid`,RLCProHardenedOutline:`rlc-pro-hardened.outline`,RLCProHardenedSolid:`rlc-pro-hardened.solid`,RLCProOutline:`rlc-pro.outline`,RLCProSolid:`rlc-pro.solid`,RockyLinuxOutline:`rocky-linux.outline`,RockyLinuxSolid:`rocky-linux.solid`,StratumOutline:`stratum.outline`,StratumSolid:`stratum.solid`,SupportOutline:`support.outline`,SupportSolid:`support.solid`,WarewulfOutline:`warewulf.outline`,WarewulfSolid:`warewulf.solid`},_r={AArrowDown:`AArrowDown`,AArrowUp:`AArrowUp`,ALargeSmall:`ALargeSmall`,Accessibility:`Accessibility`,Activity:`Activity`,AirVent:`AirVent`,Airplay:`Airplay`,AlarmClock:`AlarmClock`,AlarmClockCheck:`AlarmClockCheck`,AlarmClockMinus:`AlarmClockMinus`,AlarmClockOff:`AlarmClockOff`,AlarmClockPlus:`AlarmClockPlus`,AlarmSmoke:`AlarmSmoke`,Album:`Album`,AlignCenter:`AlignCenter`,AlignCenterHorizontal:`AlignCenterHorizontal`,AlignCenterVertical:`AlignCenterVertical`,AlignEndHorizontal:`AlignEndHorizontal`,AlignEndVertical:`AlignEndVertical`,AlignHorizontalDistributeCenter:`AlignHorizontalDistributeCenter`,AlignHorizontalDistributeEnd:`AlignHorizontalDistributeEnd`,AlignHorizontalDistributeStart:`AlignHorizontalDistributeStart`,AlignHorizontalJustifyCenter:`AlignHorizontalJustifyCenter`,AlignHorizontalJustifyEnd:`AlignHorizontalJustifyEnd`,AlignHorizontalJustifyStart:`AlignHorizontalJustifyStart`,AlignHorizontalSpaceAround:`AlignHorizontalSpaceAround`,AlignHorizontalSpaceBetween:`AlignHorizontalSpaceBetween`,AlignJustify:`AlignJustify`,AlignLeft:`AlignLeft`,AlignRight:`AlignRight`,AlignStartHorizontal:`AlignStartHorizontal`,AlignStartVertical:`AlignStartVertical`,AlignVerticalDistributeCenter:`AlignVerticalDistributeCenter`,AlignVerticalDistributeEnd:`AlignVerticalDistributeEnd`,AlignVerticalDistributeStart:`AlignVerticalDistributeStart`,AlignVerticalJustifyCenter:`AlignVerticalJustifyCenter`,AlignVerticalJustifyEnd:`AlignVerticalJustifyEnd`,AlignVerticalJustifyStart:`AlignVerticalJustifyStart`,AlignVerticalSpaceAround:`AlignVerticalSpaceAround`,AlignVerticalSpaceBetween:`AlignVerticalSpaceBetween`,Ambulance:`Ambulance`,Ampersand:`Ampersand`,Ampersands:`Ampersands`,Amphora:`Amphora`,Anchor:`Anchor`,Angry:`Angry`,Annoyed:`Annoyed`,Antenna:`Antenna`,Anvil:`Anvil`,Aperture:`Aperture`,AppWindow:`AppWindow`,AppWindowMac:`AppWindowMac`,Apple:`Apple`,Archive:`Archive`,ArchiveRestore:`ArchiveRestore`,ArchiveX:`ArchiveX`,Armchair:`Armchair`,ArrowBigDown:`ArrowBigDown`,ArrowBigDownDash:`ArrowBigDownDash`,ArrowBigLeft:`ArrowBigLeft`,ArrowBigLeftDash:`ArrowBigLeftDash`,ArrowBigRight:`ArrowBigRight`,ArrowBigRightDash:`ArrowBigRightDash`,ArrowBigUp:`ArrowBigUp`,ArrowBigUpDash:`ArrowBigUpDash`,ArrowDown:`ArrowDown`,ArrowDown01:`ArrowDown01`,ArrowDown10:`ArrowDown10`,ArrowDownAZ:`ArrowDownAZ`,ArrowDownFromLine:`ArrowDownFromLine`,ArrowDownLeft:`ArrowDownLeft`,ArrowDownNarrowWide:`ArrowDownNarrowWide`,ArrowDownRight:`ArrowDownRight`,ArrowDownToDot:`ArrowDownToDot`,ArrowDownToLine:`ArrowDownToLine`,ArrowDownUp:`ArrowDownUp`,ArrowDownWideNarrow:`ArrowDownWideNarrow`,ArrowDownZA:`ArrowDownZA`,ArrowLeft:`ArrowLeft`,ArrowLeftFromLine:`ArrowLeftFromLine`,ArrowLeftRight:`ArrowLeftRight`,ArrowLeftToLine:`ArrowLeftToLine`,ArrowRight:`ArrowRight`,ArrowRightFromLine:`ArrowRightFromLine`,ArrowRightLeft:`ArrowRightLeft`,ArrowRightToLine:`ArrowRightToLine`,ArrowUp:`ArrowUp`,ArrowUp01:`ArrowUp01`,ArrowUp10:`ArrowUp10`,ArrowUpAZ:`ArrowUpAZ`,ArrowUpDown:`ArrowUpDown`,ArrowUpFromDot:`ArrowUpFromDot`,ArrowUpFromLine:`ArrowUpFromLine`,ArrowUpLeft:`ArrowUpLeft`,ArrowUpNarrowWide:`ArrowUpNarrowWide`,ArrowUpRight:`ArrowUpRight`,ArrowUpToLine:`ArrowUpToLine`,ArrowUpWideNarrow:`ArrowUpWideNarrow`,ArrowUpZA:`ArrowUpZA`,ArrowsUpFromLine:`ArrowsUpFromLine`,Asterisk:`Asterisk`,AtSign:`AtSign`,Atom:`Atom`,AudioLines:`AudioLines`,AudioWaveform:`AudioWaveform`,Award:`Award`,Axe:`Axe`,Axis3d:`Axis3d`,Baby:`Baby`,Backpack:`Backpack`,Badge:`Badge`,BadgeAlert:`BadgeAlert`,BadgeCent:`BadgeCent`,BadgeCheck:`BadgeCheck`,BadgeDollarSign:`BadgeDollarSign`,BadgeEuro:`BadgeEuro`,BadgeHelp:`BadgeHelp`,BadgeIndianRupee:`BadgeIndianRupee`,BadgeInfo:`BadgeInfo`,BadgeJapaneseYen:`BadgeJapaneseYen`,BadgeMinus:`BadgeMinus`,BadgePercent:`BadgePercent`,BadgePlus:`BadgePlus`,BadgePoundSterling:`BadgePoundSterling`,BadgeRussianRuble:`BadgeRussianRuble`,BadgeSwissFranc:`BadgeSwissFranc`,BadgeX:`BadgeX`,BaggageClaim:`BaggageClaim`,Ban:`Ban`,Banana:`Banana`,Bandage:`Bandage`,Banknote:`Banknote`,BanknoteArrowDown:`BanknoteArrowDown`,BanknoteArrowUp:`BanknoteArrowUp`,BanknoteX:`BanknoteX`,Barcode:`Barcode`,Baseline:`Baseline`,Bath:`Bath`,Battery:`Battery`,BatteryCharging:`BatteryCharging`,BatteryFull:`BatteryFull`,BatteryLow:`BatteryLow`,BatteryMedium:`BatteryMedium`,BatteryPlus:`BatteryPlus`,BatteryWarning:`BatteryWarning`,Beaker:`Beaker`,Bean:`Bean`,BeanOff:`BeanOff`,Bed:`Bed`,BedDouble:`BedDouble`,BedSingle:`BedSingle`,Beef:`Beef`,Beer:`Beer`,BeerOff:`BeerOff`,Bell:`Bell`,BellDot:`BellDot`,BellElectric:`BellElectric`,BellMinus:`BellMinus`,BellOff:`BellOff`,BellPlus:`BellPlus`,BellRing:`BellRing`,BetweenHorizontalEnd:`BetweenHorizontalEnd`,BetweenHorizontalStart:`BetweenHorizontalStart`,BetweenVerticalEnd:`BetweenVerticalEnd`,BetweenVerticalStart:`BetweenVerticalStart`,BicepsFlexed:`BicepsFlexed`,Bike:`Bike`,Binary:`Binary`,Binoculars:`Binoculars`,Biohazard:`Biohazard`,Bird:`Bird`,Bitcoin:`Bitcoin`,Blend:`Blend`,Blinds:`Blinds`,Blocks:`Blocks`,Bluetooth:`Bluetooth`,BluetoothConnected:`BluetoothConnected`,BluetoothOff:`BluetoothOff`,BluetoothSearching:`BluetoothSearching`,Bold:`Bold`,Bolt:`Bolt`,Bomb:`Bomb`,Bone:`Bone`,Book:`Book`,BookA:`BookA`,BookAudio:`BookAudio`,BookCheck:`BookCheck`,BookCopy:`BookCopy`,BookDashed:`BookDashed`,BookDown:`BookDown`,BookHeadphones:`BookHeadphones`,BookHeart:`BookHeart`,BookImage:`BookImage`,BookKey:`BookKey`,BookLock:`BookLock`,BookMarked:`BookMarked`,BookMinus:`BookMinus`,BookOpen:`BookOpen`,BookOpenCheck:`BookOpenCheck`,BookOpenText:`BookOpenText`,BookPlus:`BookPlus`,BookText:`BookText`,BookType:`BookType`,BookUp:`BookUp`,BookUp2:`BookUp2`,BookUser:`BookUser`,BookX:`BookX`,Bookmark:`Bookmark`,BookmarkCheck:`BookmarkCheck`,BookmarkMinus:`BookmarkMinus`,BookmarkPlus:`BookmarkPlus`,BookmarkX:`BookmarkX`,BoomBox:`BoomBox`,Bot:`Bot`,BotMessageSquare:`BotMessageSquare`,BotOff:`BotOff`,BowArrow:`BowArrow`,Box:`Box`,Boxes:`Boxes`,Braces:`Braces`,Brackets:`Brackets`,Brain:`Brain`,BrainCircuit:`BrainCircuit`,BrainCog:`BrainCog`,BrickWall:`BrickWall`,BrickWallFire:`BrickWallFire`,Briefcase:`Briefcase`,BriefcaseBusiness:`BriefcaseBusiness`,BriefcaseConveyorBelt:`BriefcaseConveyorBelt`,BriefcaseMedical:`BriefcaseMedical`,BringToFront:`BringToFront`,Brush:`Brush`,BrushCleaning:`BrushCleaning`,Bubbles:`Bubbles`,Bug:`Bug`,BugOff:`BugOff`,BugPlay:`BugPlay`,Building:`Building`,Building2:`Building2`,Bus:`Bus`,BusFront:`BusFront`,Cable:`Cable`,CableCar:`CableCar`,Cake:`Cake`,CakeSlice:`CakeSlice`,Calculator:`Calculator`,Calendar:`Calendar`,Calendar1:`Calendar1`,CalendarArrowDown:`CalendarArrowDown`,CalendarArrowUp:`CalendarArrowUp`,CalendarCheck:`CalendarCheck`,CalendarCheck2:`CalendarCheck2`,CalendarClock:`CalendarClock`,CalendarCog:`CalendarCog`,CalendarDays:`CalendarDays`,CalendarFold:`CalendarFold`,CalendarHeart:`CalendarHeart`,CalendarMinus:`CalendarMinus`,CalendarMinus2:`CalendarMinus2`,CalendarOff:`CalendarOff`,CalendarPlus:`CalendarPlus`,CalendarPlus2:`CalendarPlus2`,CalendarRange:`CalendarRange`,CalendarSearch:`CalendarSearch`,CalendarSync:`CalendarSync`,CalendarX:`CalendarX`,CalendarX2:`CalendarX2`,Camera:`Camera`,CameraOff:`CameraOff`,Candy:`Candy`,CandyCane:`CandyCane`,CandyOff:`CandyOff`,Cannabis:`Cannabis`,Captions:`Captions`,CaptionsOff:`CaptionsOff`,Car:`Car`,CarFront:`CarFront`,CarTaxiFront:`CarTaxiFront`,Caravan:`Caravan`,Carrot:`Carrot`,CaseLower:`CaseLower`,CaseSensitive:`CaseSensitive`,CaseUpper:`CaseUpper`,CassetteTape:`CassetteTape`,Cast:`Cast`,Castle:`Castle`,Cat:`Cat`,Cctv:`Cctv`,ChartArea:`ChartArea`,ChartBar:`ChartBar`,ChartBarBig:`ChartBarBig`,ChartBarDecreasing:`ChartBarDecreasing`,ChartBarIncreasing:`ChartBarIncreasing`,ChartBarStacked:`ChartBarStacked`,ChartCandlestick:`ChartCandlestick`,ChartColumn:`ChartColumn`,ChartColumnBig:`ChartColumnBig`,ChartColumnDecreasing:`ChartColumnDecreasing`,ChartColumnIncreasing:`ChartColumnIncreasing`,ChartColumnStacked:`ChartColumnStacked`,ChartGantt:`ChartGantt`,ChartLine:`ChartLine`,ChartNetwork:`ChartNetwork`,ChartNoAxesColumn:`ChartNoAxesColumn`,ChartNoAxesColumnDecreasing:`ChartNoAxesColumnDecreasing`,ChartNoAxesColumnIncreasing:`ChartNoAxesColumnIncreasing`,ChartNoAxesCombined:`ChartNoAxesCombined`,ChartNoAxesGantt:`ChartNoAxesGantt`,ChartPie:`ChartPie`,ChartScatter:`ChartScatter`,ChartSpline:`ChartSpline`,Check:`Check`,CheckCheck:`CheckCheck`,CheckLine:`CheckLine`,ChefHat:`ChefHat`,Cherry:`Cherry`,ChevronDown:`ChevronDown`,ChevronFirst:`ChevronFirst`,ChevronLast:`ChevronLast`,ChevronLeft:`ChevronLeft`,ChevronRight:`ChevronRight`,ChevronUp:`ChevronUp`,ChevronsDown:`ChevronsDown`,ChevronsDownUp:`ChevronsDownUp`,ChevronsLeft:`ChevronsLeft`,ChevronsLeftRight:`ChevronsLeftRight`,ChevronsLeftRightEllipsis:`ChevronsLeftRightEllipsis`,ChevronsRight:`ChevronsRight`,ChevronsRightLeft:`ChevronsRightLeft`,ChevronsUp:`ChevronsUp`,ChevronsUpDown:`ChevronsUpDown`,Chrome:`Chrome`,Church:`Church`,Cigarette:`Cigarette`,CigaretteOff:`CigaretteOff`,Circle:`Circle`,CircleAlert:`CircleAlert`,CircleArrowDown:`CircleArrowDown`,CircleArrowLeft:`CircleArrowLeft`,CircleArrowOutDownLeft:`CircleArrowOutDownLeft`,CircleArrowOutDownRight:`CircleArrowOutDownRight`,CircleArrowOutUpLeft:`CircleArrowOutUpLeft`,CircleArrowOutUpRight:`CircleArrowOutUpRight`,CircleArrowRight:`CircleArrowRight`,CircleArrowUp:`CircleArrowUp`,CircleCheck:`CircleCheck`,CircleCheckBig:`CircleCheckBig`,CircleChevronDown:`CircleChevronDown`,CircleChevronLeft:`CircleChevronLeft`,CircleChevronRight:`CircleChevronRight`,CircleChevronUp:`CircleChevronUp`,CircleDashed:`CircleDashed`,CircleDivide:`CircleDivide`,CircleDollarSign:`CircleDollarSign`,CircleDot:`CircleDot`,CircleDotDashed:`CircleDotDashed`,CircleEllipsis:`CircleEllipsis`,CircleEqual:`CircleEqual`,CircleFadingArrowUp:`CircleFadingArrowUp`,CircleFadingPlus:`CircleFadingPlus`,CircleGauge:`CircleGauge`,CircleHelp:`CircleHelp`,CircleMinus:`CircleMinus`,CircleOff:`CircleOff`,CircleParking:`CircleParking`,CircleParkingOff:`CircleParkingOff`,CirclePause:`CirclePause`,CirclePercent:`CirclePercent`,CirclePlay:`CirclePlay`,CirclePlus:`CirclePlus`,CirclePower:`CirclePower`,CircleSlash:`CircleSlash`,CircleSlash2:`CircleSlash2`,CircleSmall:`CircleSmall`,CircleStop:`CircleStop`,CircleUser:`CircleUser`,CircleUserRound:`CircleUserRound`,CircleX:`CircleX`,CircuitBoard:`CircuitBoard`,Citrus:`Citrus`,Clapperboard:`Clapperboard`,Clipboard:`Clipboard`,ClipboardCheck:`ClipboardCheck`,ClipboardCopy:`ClipboardCopy`,ClipboardList:`ClipboardList`,ClipboardMinus:`ClipboardMinus`,ClipboardPaste:`ClipboardPaste`,ClipboardPen:`ClipboardPen`,ClipboardPenLine:`ClipboardPenLine`,ClipboardPlus:`ClipboardPlus`,ClipboardType:`ClipboardType`,ClipboardX:`ClipboardX`,Clock:`Clock`,Clock1:`Clock1`,Clock10:`Clock10`,Clock11:`Clock11`,Clock12:`Clock12`,Clock2:`Clock2`,Clock3:`Clock3`,Clock4:`Clock4`,Clock5:`Clock5`,Clock6:`Clock6`,Clock7:`Clock7`,Clock8:`Clock8`,Clock9:`Clock9`,ClockAlert:`ClockAlert`,ClockArrowDown:`ClockArrowDown`,ClockArrowUp:`ClockArrowUp`,ClockFading:`ClockFading`,ClockPlus:`ClockPlus`,Cloud:`Cloud`,CloudAlert:`CloudAlert`,CloudCog:`CloudCog`,CloudDownload:`CloudDownload`,CloudDrizzle:`CloudDrizzle`,CloudFog:`CloudFog`,CloudHail:`CloudHail`,CloudLightning:`CloudLightning`,CloudMoon:`CloudMoon`,CloudMoonRain:`CloudMoonRain`,CloudOff:`CloudOff`,CloudRain:`CloudRain`,CloudRainWind:`CloudRainWind`,CloudSnow:`CloudSnow`,CloudSun:`CloudSun`,CloudSunRain:`CloudSunRain`,CloudUpload:`CloudUpload`,Cloudy:`Cloudy`,Clover:`Clover`,Club:`Club`,Code:`Code`,CodeXml:`CodeXml`,Codepen:`Codepen`,Codesandbox:`Codesandbox`,Coffee:`Coffee`,Cog:`Cog`,Coins:`Coins`,Columns2:`Columns2`,Columns3:`Columns3`,Columns3Cog:`Columns3Cog`,Columns4:`Columns4`,Combine:`Combine`,Command:`Command`,Compass:`Compass`,Component:`Component`,Computer:`Computer`,ConciergeBell:`ConciergeBell`,Cone:`Cone`,Construction:`Construction`,Contact:`Contact`,ContactRound:`ContactRound`,Container:`Container`,Contrast:`Contrast`,Cookie:`Cookie`,CookingPot:`CookingPot`,Copy:`Copy`,CopyCheck:`CopyCheck`,CopyMinus:`CopyMinus`,CopyPlus:`CopyPlus`,CopySlash:`CopySlash`,CopyX:`CopyX`,Copyleft:`Copyleft`,Copyright:`Copyright`,CornerDownLeft:`CornerDownLeft`,CornerDownRight:`CornerDownRight`,CornerLeftDown:`CornerLeftDown`,CornerLeftUp:`CornerLeftUp`,CornerRightDown:`CornerRightDown`,CornerRightUp:`CornerRightUp`,CornerUpLeft:`CornerUpLeft`,CornerUpRight:`CornerUpRight`,Cpu:`Cpu`,CreativeCommons:`CreativeCommons`,CreditCard:`CreditCard`,Croissant:`Croissant`,Crop:`Crop`,Cross:`Cross`,Crosshair:`Crosshair`,Crown:`Crown`,Cuboid:`Cuboid`,CupSoda:`CupSoda`,Currency:`Currency`,Cylinder:`Cylinder`,Dam:`Dam`,Database:`Database`,DatabaseBackup:`DatabaseBackup`,DatabaseZap:`DatabaseZap`,DecimalsArrowLeft:`DecimalsArrowLeft`,DecimalsArrowRight:`DecimalsArrowRight`,Delete:`Delete`,Dessert:`Dessert`,Diameter:`Diameter`,Diamond:`Diamond`,DiamondMinus:`DiamondMinus`,DiamondPercent:`DiamondPercent`,DiamondPlus:`DiamondPlus`,Dice1:`Dice1`,Dice2:`Dice2`,Dice3:`Dice3`,Dice4:`Dice4`,Dice5:`Dice5`,Dice6:`Dice6`,Dices:`Dices`,Diff:`Diff`,Disc:`Disc`,Disc2:`Disc2`,Disc3:`Disc3`,DiscAlbum:`DiscAlbum`,Divide:`Divide`,Dna:`Dna`,DnaOff:`DnaOff`,Dock:`Dock`,Dog:`Dog`,DollarSign:`DollarSign`,Donut:`Donut`,DoorClosed:`DoorClosed`,DoorClosedLocked:`DoorClosedLocked`,DoorOpen:`DoorOpen`,Dot:`Dot`,Download:`Download`,DraftingCompass:`DraftingCompass`,Drama:`Drama`,Dribbble:`Dribbble`,Drill:`Drill`,Droplet:`Droplet`,DropletOff:`DropletOff`,Droplets:`Droplets`,Drum:`Drum`,Drumstick:`Drumstick`,Dumbbell:`Dumbbell`,Ear:`Ear`,EarOff:`EarOff`,Earth:`Earth`,EarthLock:`EarthLock`,Eclipse:`Eclipse`,Egg:`Egg`,EggFried:`EggFried`,EggOff:`EggOff`,Ellipsis:`Ellipsis`,EllipsisVertical:`EllipsisVertical`,Equal:`Equal`,EqualApproximately:`EqualApproximately`,EqualNot:`EqualNot`,Eraser:`Eraser`,EthernetPort:`EthernetPort`,Euro:`Euro`,Expand:`Expand`,ExternalLink:`ExternalLink`,Eye:`Eye`,EyeClosed:`EyeClosed`,EyeOff:`EyeOff`,Facebook:`Facebook`,Factory:`Factory`,Fan:`Fan`,FastForward:`FastForward`,Feather:`Feather`,Fence:`Fence`,FerrisWheel:`FerrisWheel`,Figma:`Figma`,File:`File`,FileArchive:`FileArchive`,FileAudio:`FileAudio`,FileAudio2:`FileAudio2`,FileAxis3d:`FileAxis3d`,FileBadge:`FileBadge`,FileBadge2:`FileBadge2`,FileBox:`FileBox`,FileChartColumn:`FileChartColumn`,FileChartColumnIncreasing:`FileChartColumnIncreasing`,FileChartLine:`FileChartLine`,FileChartPie:`FileChartPie`,FileCheck:`FileCheck`,FileCheck2:`FileCheck2`,FileClock:`FileClock`,FileCode:`FileCode`,FileCode2:`FileCode2`,FileCog:`FileCog`,FileDiff:`FileDiff`,FileDigit:`FileDigit`,FileDown:`FileDown`,FileHeart:`FileHeart`,FileImage:`FileImage`,FileInput:`FileInput`,FileJson:`FileJson`,FileJson2:`FileJson2`,FileKey:`FileKey`,FileKey2:`FileKey2`,FileLock:`FileLock`,FileLock2:`FileLock2`,FileMinus:`FileMinus`,FileMinus2:`FileMinus2`,FileMusic:`FileMusic`,FileOutput:`FileOutput`,FilePen:`FilePen`,FilePenLine:`FilePenLine`,FilePlus:`FilePlus`,FilePlus2:`FilePlus2`,FileQuestion:`FileQuestion`,FileScan:`FileScan`,FileSearch:`FileSearch`,FileSearch2:`FileSearch2`,FileSliders:`FileSliders`,FileSpreadsheet:`FileSpreadsheet`,FileStack:`FileStack`,FileSymlink:`FileSymlink`,FileTerminal:`FileTerminal`,FileText:`FileText`,FileType:`FileType`,FileType2:`FileType2`,FileUp:`FileUp`,FileUser:`FileUser`,FileVideo:`FileVideo`,FileVideo2:`FileVideo2`,FileVolume:`FileVolume`,FileVolume2:`FileVolume2`,FileWarning:`FileWarning`,FileX:`FileX`,FileX2:`FileX2`,Files:`Files`,Film:`Film`,Fingerprint:`Fingerprint`,FireExtinguisher:`FireExtinguisher`,Fish:`Fish`,FishOff:`FishOff`,FishSymbol:`FishSymbol`,Flag:`Flag`,FlagOff:`FlagOff`,FlagTriangleLeft:`FlagTriangleLeft`,FlagTriangleRight:`FlagTriangleRight`,Flame:`Flame`,FlameKindling:`FlameKindling`,Flashlight:`Flashlight`,FlashlightOff:`FlashlightOff`,FlaskConical:`FlaskConical`,FlaskConicalOff:`FlaskConicalOff`,FlaskRound:`FlaskRound`,FlipHorizontal:`FlipHorizontal`,FlipHorizontal2:`FlipHorizontal2`,FlipVertical:`FlipVertical`,FlipVertical2:`FlipVertical2`,Flower:`Flower`,Flower2:`Flower2`,Focus:`Focus`,FoldHorizontal:`FoldHorizontal`,FoldVertical:`FoldVertical`,Folder:`Folder`,FolderArchive:`FolderArchive`,FolderCheck:`FolderCheck`,FolderClock:`FolderClock`,FolderClosed:`FolderClosed`,FolderCode:`FolderCode`,FolderCog:`FolderCog`,FolderDot:`FolderDot`,FolderDown:`FolderDown`,FolderGit:`FolderGit`,FolderGit2:`FolderGit2`,FolderHeart:`FolderHeart`,FolderInput:`FolderInput`,FolderKanban:`FolderKanban`,FolderKey:`FolderKey`,FolderLock:`FolderLock`,FolderMinus:`FolderMinus`,FolderOpen:`FolderOpen`,FolderOpenDot:`FolderOpenDot`,FolderOutput:`FolderOutput`,FolderPen:`FolderPen`,FolderPlus:`FolderPlus`,FolderRoot:`FolderRoot`,FolderSearch:`FolderSearch`,FolderSearch2:`FolderSearch2`,FolderSymlink:`FolderSymlink`,FolderSync:`FolderSync`,FolderTree:`FolderTree`,FolderUp:`FolderUp`,FolderX:`FolderX`,Folders:`Folders`,Footprints:`Footprints`,Forklift:`Forklift`,Forward:`Forward`,Frame:`Frame`,Framer:`Framer`,Frown:`Frown`,Fuel:`Fuel`,Fullscreen:`Fullscreen`,Funnel:`Funnel`,FunnelPlus:`FunnelPlus`,FunnelX:`FunnelX`,GalleryHorizontal:`GalleryHorizontal`,GalleryHorizontalEnd:`GalleryHorizontalEnd`,GalleryThumbnails:`GalleryThumbnails`,GalleryVertical:`GalleryVertical`,GalleryVerticalEnd:`GalleryVerticalEnd`,Gamepad:`Gamepad`,Gamepad2:`Gamepad2`,Gauge:`Gauge`,Gavel:`Gavel`,Gem:`Gem`,Ghost:`Ghost`,Gift:`Gift`,GitBranch:`GitBranch`,GitBranchPlus:`GitBranchPlus`,GitCommitHorizontal:`GitCommitHorizontal`,GitCommitVertical:`GitCommitVertical`,GitCompare:`GitCompare`,GitCompareArrows:`GitCompareArrows`,GitFork:`GitFork`,GitGraph:`GitGraph`,GitMerge:`GitMerge`,GitPullRequest:`GitPullRequest`,GitPullRequestArrow:`GitPullRequestArrow`,GitPullRequestClosed:`GitPullRequestClosed`,GitPullRequestCreate:`GitPullRequestCreate`,GitPullRequestCreateArrow:`GitPullRequestCreateArrow`,GitPullRequestDraft:`GitPullRequestDraft`,Github:`Github`,Gitlab:`Gitlab`,GlassWater:`GlassWater`,Glasses:`Glasses`,Globe:`Globe`,GlobeLock:`GlobeLock`,Goal:`Goal`,Gpu:`Gpu`,Grab:`Grab`,GraduationCap:`GraduationCap`,Grape:`Grape`,Grid2x2:`Grid2x2`,Grid2x2Check:`Grid2x2Check`,Grid2x2Plus:`Grid2x2Plus`,Grid2x2X:`Grid2x2X`,Grid3x3:`Grid3x3`,Grip:`Grip`,GripHorizontal:`GripHorizontal`,GripVertical:`GripVertical`,Group:`Group`,Guitar:`Guitar`,Ham:`Ham`,Hamburger:`Hamburger`,Hammer:`Hammer`,Hand:`Hand`,HandCoins:`HandCoins`,HandHeart:`HandHeart`,HandHelping:`HandHelping`,HandMetal:`HandMetal`,HandPlatter:`HandPlatter`,Handshake:`Handshake`,HardDrive:`HardDrive`,HardDriveDownload:`HardDriveDownload`,HardDriveUpload:`HardDriveUpload`,HardHat:`HardHat`,Hash:`Hash`,Haze:`Haze`,HdmiPort:`HdmiPort`,Heading:`Heading`,Heading1:`Heading1`,Heading2:`Heading2`,Heading3:`Heading3`,Heading4:`Heading4`,Heading5:`Heading5`,Heading6:`Heading6`,HeadphoneOff:`HeadphoneOff`,Headphones:`Headphones`,Headset:`Headset`,Heart:`Heart`,HeartCrack:`HeartCrack`,HeartHandshake:`HeartHandshake`,HeartMinus:`HeartMinus`,HeartOff:`HeartOff`,HeartPlus:`HeartPlus`,HeartPulse:`HeartPulse`,Heater:`Heater`,Hexagon:`Hexagon`,Highlighter:`Highlighter`,History:`History`,Hop:`Hop`,HopOff:`HopOff`,Hospital:`Hospital`,Hotel:`Hotel`,Hourglass:`Hourglass`,House:`House`,HousePlug:`HousePlug`,HousePlus:`HousePlus`,HouseWifi:`HouseWifi`,IceCreamBowl:`IceCreamBowl`,IceCreamCone:`IceCreamCone`,IdCard:`IdCard`,Image:`Image`,ImageDown:`ImageDown`,ImageMinus:`ImageMinus`,ImageOff:`ImageOff`,ImagePlay:`ImagePlay`,ImagePlus:`ImagePlus`,ImageUp:`ImageUp`,ImageUpscale:`ImageUpscale`,Images:`Images`,Import:`Import`,Inbox:`Inbox`,IndentDecrease:`IndentDecrease`,IndentIncrease:`IndentIncrease`,IndianRupee:`IndianRupee`,Infinity:`Infinity`,Info:`Info`,InspectionPanel:`InspectionPanel`,Instagram:`Instagram`,Italic:`Italic`,IterationCcw:`IterationCcw`,IterationCw:`IterationCw`,JapaneseYen:`JapaneseYen`,Joystick:`Joystick`,Kanban:`Kanban`,Key:`Key`,KeyRound:`KeyRound`,KeySquare:`KeySquare`,Keyboard:`Keyboard`,KeyboardMusic:`KeyboardMusic`,KeyboardOff:`KeyboardOff`,Lamp:`Lamp`,LampCeiling:`LampCeiling`,LampDesk:`LampDesk`,LampFloor:`LampFloor`,LampWallDown:`LampWallDown`,LampWallUp:`LampWallUp`,LandPlot:`LandPlot`,Landmark:`Landmark`,Languages:`Languages`,Laptop:`Laptop`,LaptopMinimal:`LaptopMinimal`,LaptopMinimalCheck:`LaptopMinimalCheck`,Lasso:`Lasso`,LassoSelect:`LassoSelect`,Laugh:`Laugh`,Layers:`Layers`,Layers2:`Layers2`,LayoutDashboard:`LayoutDashboard`,LayoutGrid:`LayoutGrid`,LayoutList:`LayoutList`,LayoutPanelLeft:`LayoutPanelLeft`,LayoutPanelTop:`LayoutPanelTop`,LayoutTemplate:`LayoutTemplate`,Leaf:`Leaf`,LeafyGreen:`LeafyGreen`,Lectern:`Lectern`,LetterText:`LetterText`,Library:`Library`,LibraryBig:`LibraryBig`,LifeBuoy:`LifeBuoy`,Ligature:`Ligature`,Lightbulb:`Lightbulb`,LightbulbOff:`LightbulbOff`,Link:`Link`,Link2:`Link2`,Link2Off:`Link2Off`,Linkedin:`Linkedin`,List:`List`,ListCheck:`ListCheck`,ListChecks:`ListChecks`,ListCollapse:`ListCollapse`,ListEnd:`ListEnd`,ListFilter:`ListFilter`,ListFilterPlus:`ListFilterPlus`,ListMinus:`ListMinus`,ListMusic:`ListMusic`,ListOrdered:`ListOrdered`,ListPlus:`ListPlus`,ListRestart:`ListRestart`,ListStart:`ListStart`,ListTodo:`ListTodo`,ListTree:`ListTree`,ListVideo:`ListVideo`,ListX:`ListX`,Loader:`Loader`,LoaderCircle:`LoaderCircle`,LoaderPinwheel:`LoaderPinwheel`,Locate:`Locate`,LocateFixed:`LocateFixed`,LocateOff:`LocateOff`,LocationEdit:`LocationEdit`,Lock:`Lock`,LockKeyhole:`LockKeyhole`,LockKeyholeOpen:`LockKeyholeOpen`,LockOpen:`LockOpen`,LogIn:`LogIn`,LogOut:`LogOut`,Logs:`Logs`,Lollipop:`Lollipop`,Luggage:`Luggage`,Magnet:`Magnet`,Mail:`Mail`,MailCheck:`MailCheck`,MailMinus:`MailMinus`,MailOpen:`MailOpen`,MailPlus:`MailPlus`,MailQuestion:`MailQuestion`,MailSearch:`MailSearch`,MailWarning:`MailWarning`,MailX:`MailX`,Mailbox:`Mailbox`,Mails:`Mails`,Map:`Map`,MapPin:`MapPin`,MapPinCheck:`MapPinCheck`,MapPinCheckInside:`MapPinCheckInside`,MapPinHouse:`MapPinHouse`,MapPinMinus:`MapPinMinus`,MapPinMinusInside:`MapPinMinusInside`,MapPinOff:`MapPinOff`,MapPinPlus:`MapPinPlus`,MapPinPlusInside:`MapPinPlusInside`,MapPinX:`MapPinX`,MapPinXInside:`MapPinXInside`,MapPinned:`MapPinned`,MapPlus:`MapPlus`,Mars:`Mars`,MarsStroke:`MarsStroke`,Martini:`Martini`,Maximize:`Maximize`,Maximize2:`Maximize2`,Medal:`Medal`,Megaphone:`Megaphone`,MegaphoneOff:`MegaphoneOff`,Meh:`Meh`,MemoryStick:`MemoryStick`,Menu:`Menu`,Merge:`Merge`,MessageCircle:`MessageCircle`,MessageCircleCode:`MessageCircleCode`,MessageCircleDashed:`MessageCircleDashed`,MessageCircleHeart:`MessageCircleHeart`,MessageCircleMore:`MessageCircleMore`,MessageCircleOff:`MessageCircleOff`,MessageCirclePlus:`MessageCirclePlus`,MessageCircleQuestion:`MessageCircleQuestion`,MessageCircleReply:`MessageCircleReply`,MessageCircleWarning:`MessageCircleWarning`,MessageCircleX:`MessageCircleX`,MessageSquare:`MessageSquare`,MessageSquareCode:`MessageSquareCode`,MessageSquareDashed:`MessageSquareDashed`,MessageSquareDiff:`MessageSquareDiff`,MessageSquareDot:`MessageSquareDot`,MessageSquareHeart:`MessageSquareHeart`,MessageSquareLock:`MessageSquareLock`,MessageSquareMore:`MessageSquareMore`,MessageSquareOff:`MessageSquareOff`,MessageSquarePlus:`MessageSquarePlus`,MessageSquareQuote:`MessageSquareQuote`,MessageSquareReply:`MessageSquareReply`,MessageSquareShare:`MessageSquareShare`,MessageSquareText:`MessageSquareText`,MessageSquareWarning:`MessageSquareWarning`,MessageSquareX:`MessageSquareX`,MessagesSquare:`MessagesSquare`,Mic:`Mic`,MicOff:`MicOff`,MicVocal:`MicVocal`,Microchip:`Microchip`,Microscope:`Microscope`,Microwave:`Microwave`,Milestone:`Milestone`,Milk:`Milk`,MilkOff:`MilkOff`,Minimize:`Minimize`,Minimize2:`Minimize2`,Minus:`Minus`,Monitor:`Monitor`,MonitorCheck:`MonitorCheck`,MonitorCog:`MonitorCog`,MonitorDot:`MonitorDot`,MonitorDown:`MonitorDown`,MonitorOff:`MonitorOff`,MonitorPause:`MonitorPause`,MonitorPlay:`MonitorPlay`,MonitorSmartphone:`MonitorSmartphone`,MonitorSpeaker:`MonitorSpeaker`,MonitorStop:`MonitorStop`,MonitorUp:`MonitorUp`,MonitorX:`MonitorX`,Moon:`Moon`,MoonStar:`MoonStar`,Mountain:`Mountain`,MountainSnow:`MountainSnow`,Mouse:`Mouse`,MouseOff:`MouseOff`,MousePointer:`MousePointer`,MousePointer2:`MousePointer2`,MousePointerBan:`MousePointerBan`,MousePointerClick:`MousePointerClick`,Move:`Move`,Move3d:`Move3d`,MoveDiagonal:`MoveDiagonal`,MoveDiagonal2:`MoveDiagonal2`,MoveDown:`MoveDown`,MoveDownLeft:`MoveDownLeft`,MoveDownRight:`MoveDownRight`,MoveHorizontal:`MoveHorizontal`,MoveLeft:`MoveLeft`,MoveRight:`MoveRight`,MoveUp:`MoveUp`,MoveUpLeft:`MoveUpLeft`,MoveUpRight:`MoveUpRight`,MoveVertical:`MoveVertical`,Music:`Music`,Music2:`Music2`,Music3:`Music3`,Music4:`Music4`,Navigation:`Navigation`,Navigation2:`Navigation2`,Navigation2Off:`Navigation2Off`,NavigationOff:`NavigationOff`,Network:`Network`,Newspaper:`Newspaper`,Nfc:`Nfc`,NonBinary:`NonBinary`,Notebook:`Notebook`,NotebookPen:`NotebookPen`,NotebookTabs:`NotebookTabs`,NotebookText:`NotebookText`,NotepadText:`NotepadText`,NotepadTextDashed:`NotepadTextDashed`,Nut:`Nut`,NutOff:`NutOff`,Octagon:`Octagon`,OctagonAlert:`OctagonAlert`,OctagonMinus:`OctagonMinus`,OctagonPause:`OctagonPause`,OctagonX:`OctagonX`,Omega:`Omega`,Option:`Option`,Orbit:`Orbit`,Origami:`Origami`,Package:`Package`,Package2:`Package2`,PackageCheck:`PackageCheck`,PackageMinus:`PackageMinus`,PackageOpen:`PackageOpen`,PackagePlus:`PackagePlus`,PackageSearch:`PackageSearch`,PackageX:`PackageX`,PaintBucket:`PaintBucket`,PaintRoller:`PaintRoller`,Paintbrush:`Paintbrush`,PaintbrushVertical:`PaintbrushVertical`,Palette:`Palette`,Panda:`Panda`,PanelBottom:`PanelBottom`,PanelBottomClose:`PanelBottomClose`,PanelBottomDashed:`PanelBottomDashed`,PanelBottomOpen:`PanelBottomOpen`,PanelLeft:`PanelLeft`,PanelLeftClose:`PanelLeftClose`,PanelLeftDashed:`PanelLeftDashed`,PanelLeftOpen:`PanelLeftOpen`,PanelRight:`PanelRight`,PanelRightClose:`PanelRightClose`,PanelRightDashed:`PanelRightDashed`,PanelRightOpen:`PanelRightOpen`,PanelTop:`PanelTop`,PanelTopClose:`PanelTopClose`,PanelTopDashed:`PanelTopDashed`,PanelTopOpen:`PanelTopOpen`,PanelsLeftBottom:`PanelsLeftBottom`,PanelsRightBottom:`PanelsRightBottom`,PanelsTopLeft:`PanelsTopLeft`,Paperclip:`Paperclip`,Parentheses:`Parentheses`,ParkingMeter:`ParkingMeter`,PartyPopper:`PartyPopper`,Pause:`Pause`,PawPrint:`PawPrint`,PcCase:`PcCase`,Pen:`Pen`,PenLine:`PenLine`,PenOff:`PenOff`,PenTool:`PenTool`,Pencil:`Pencil`,PencilLine:`PencilLine`,PencilOff:`PencilOff`,PencilRuler:`PencilRuler`,Pentagon:`Pentagon`,Percent:`Percent`,PersonStanding:`PersonStanding`,PhilippinePeso:`PhilippinePeso`,Phone:`Phone`,PhoneCall:`PhoneCall`,PhoneForwarded:`PhoneForwarded`,PhoneIncoming:`PhoneIncoming`,PhoneMissed:`PhoneMissed`,PhoneOff:`PhoneOff`,PhoneOutgoing:`PhoneOutgoing`,Pi:`Pi`,Piano:`Piano`,Pickaxe:`Pickaxe`,PictureInPicture:`PictureInPicture`,PictureInPicture2:`PictureInPicture2`,PiggyBank:`PiggyBank`,Pilcrow:`Pilcrow`,PilcrowLeft:`PilcrowLeft`,PilcrowRight:`PilcrowRight`,Pill:`Pill`,PillBottle:`PillBottle`,Pin:`Pin`,PinOff:`PinOff`,Pipette:`Pipette`,Pizza:`Pizza`,Plane:`Plane`,PlaneLanding:`PlaneLanding`,PlaneTakeoff:`PlaneTakeoff`,Play:`Play`,Plug:`Plug`,Plug2:`Plug2`,PlugZap:`PlugZap`,Plus:`Plus`,Pocket:`Pocket`,PocketKnife:`PocketKnife`,Podcast:`Podcast`,Pointer:`Pointer`,PointerOff:`PointerOff`,Popcorn:`Popcorn`,Popsicle:`Popsicle`,PoundSterling:`PoundSterling`,Power:`Power`,PowerOff:`PowerOff`,Presentation:`Presentation`,Printer:`Printer`,PrinterCheck:`PrinterCheck`,Projector:`Projector`,Proportions:`Proportions`,Puzzle:`Puzzle`,Pyramid:`Pyramid`,QrCode:`QrCode`,Quote:`Quote`,Rabbit:`Rabbit`,Radar:`Radar`,Radiation:`Radiation`,Radical:`Radical`,Radio:`Radio`,RadioReceiver:`RadioReceiver`,RadioTower:`RadioTower`,Radius:`Radius`,RailSymbol:`RailSymbol`,Rainbow:`Rainbow`,Rat:`Rat`,Ratio:`Ratio`,Receipt:`Receipt`,ReceiptCent:`ReceiptCent`,ReceiptEuro:`ReceiptEuro`,ReceiptIndianRupee:`ReceiptIndianRupee`,ReceiptJapaneseYen:`ReceiptJapaneseYen`,ReceiptPoundSterling:`ReceiptPoundSterling`,ReceiptRussianRuble:`ReceiptRussianRuble`,ReceiptSwissFranc:`ReceiptSwissFranc`,ReceiptText:`ReceiptText`,RectangleEllipsis:`RectangleEllipsis`,RectangleGoggles:`RectangleGoggles`,RectangleHorizontal:`RectangleHorizontal`,RectangleVertical:`RectangleVertical`,Recycle:`Recycle`,Redo:`Redo`,Redo2:`Redo2`,RedoDot:`RedoDot`,RefreshCcw:`RefreshCcw`,RefreshCcwDot:`RefreshCcwDot`,RefreshCw:`RefreshCw`,RefreshCwOff:`RefreshCwOff`,Refrigerator:`Refrigerator`,Regex:`Regex`,RemoveFormatting:`RemoveFormatting`,Repeat:`Repeat`,Repeat1:`Repeat1`,Repeat2:`Repeat2`,Replace:`Replace`,ReplaceAll:`ReplaceAll`,Reply:`Reply`,ReplyAll:`ReplyAll`,Rewind:`Rewind`,Ribbon:`Ribbon`,Rocket:`Rocket`,RockingChair:`RockingChair`,RollerCoaster:`RollerCoaster`,Rotate3d:`Rotate3d`,RotateCcw:`RotateCcw`,RotateCcwKey:`RotateCcwKey`,RotateCcwSquare:`RotateCcwSquare`,RotateCw:`RotateCw`,RotateCwSquare:`RotateCwSquare`,Route:`Route`,RouteOff:`RouteOff`,Router:`Router`,Rows2:`Rows2`,Rows3:`Rows3`,Rows4:`Rows4`,Rss:`Rss`,Ruler:`Ruler`,RulerDimensionLine:`RulerDimensionLine`,RussianRuble:`RussianRuble`,Sailboat:`Sailboat`,Salad:`Salad`,Sandwich:`Sandwich`,Satellite:`Satellite`,SatelliteDish:`SatelliteDish`,SaudiRiyal:`SaudiRiyal`,Save:`Save`,SaveAll:`SaveAll`,SaveOff:`SaveOff`,Scale:`Scale`,Scale3d:`Scale3d`,Scaling:`Scaling`,Scan:`Scan`,ScanBarcode:`ScanBarcode`,ScanEye:`ScanEye`,ScanFace:`ScanFace`,ScanHeart:`ScanHeart`,ScanLine:`ScanLine`,ScanQrCode:`ScanQrCode`,ScanSearch:`ScanSearch`,ScanText:`ScanText`,School:`School`,Scissors:`Scissors`,ScissorsLineDashed:`ScissorsLineDashed`,ScreenShare:`ScreenShare`,ScreenShareOff:`ScreenShareOff`,Scroll:`Scroll`,ScrollText:`ScrollText`,Search:`Search`,SearchCheck:`SearchCheck`,SearchCode:`SearchCode`,SearchSlash:`SearchSlash`,SearchX:`SearchX`,Section:`Section`,Send:`Send`,SendHorizontal:`SendHorizontal`,SendToBack:`SendToBack`,SeparatorHorizontal:`SeparatorHorizontal`,SeparatorVertical:`SeparatorVertical`,Server:`Server`,ServerCog:`ServerCog`,ServerCrash:`ServerCrash`,ServerOff:`ServerOff`,Settings:`Settings`,Settings2:`Settings2`,Shapes:`Shapes`,Share:`Share`,Share2:`Share2`,Sheet:`Sheet`,Shell:`Shell`,Shield:`Shield`,ShieldAlert:`ShieldAlert`,ShieldBan:`ShieldBan`,ShieldCheck:`ShieldCheck`,ShieldEllipsis:`ShieldEllipsis`,ShieldHalf:`ShieldHalf`,ShieldMinus:`ShieldMinus`,ShieldOff:`ShieldOff`,ShieldPlus:`ShieldPlus`,ShieldQuestion:`ShieldQuestion`,ShieldUser:`ShieldUser`,ShieldX:`ShieldX`,Ship:`Ship`,ShipWheel:`ShipWheel`,Shirt:`Shirt`,ShoppingBag:`ShoppingBag`,ShoppingBasket:`ShoppingBasket`,ShoppingCart:`ShoppingCart`,Shovel:`Shovel`,ShowerHead:`ShowerHead`,Shredder:`Shredder`,Shrimp:`Shrimp`,Shrink:`Shrink`,Shrub:`Shrub`,Shuffle:`Shuffle`,Sigma:`Sigma`,Signal:`Signal`,SignalHigh:`SignalHigh`,SignalLow:`SignalLow`,SignalMedium:`SignalMedium`,SignalZero:`SignalZero`,Signature:`Signature`,Signpost:`Signpost`,SignpostBig:`SignpostBig`,Siren:`Siren`,SkipBack:`SkipBack`,SkipForward:`SkipForward`,Skull:`Skull`,Slack:`Slack`,Slash:`Slash`,Slice:`Slice`,SlidersHorizontal:`SlidersHorizontal`,SlidersVertical:`SlidersVertical`,Smartphone:`Smartphone`,SmartphoneCharging:`SmartphoneCharging`,SmartphoneNfc:`SmartphoneNfc`,Smile:`Smile`,SmilePlus:`SmilePlus`,Snail:`Snail`,Snowflake:`Snowflake`,SoapDispenserDroplet:`SoapDispenserDroplet`,Sofa:`Sofa`,Soup:`Soup`,Space:`Space`,Spade:`Spade`,Sparkle:`Sparkle`,Sparkles:`Sparkles`,Speaker:`Speaker`,Speech:`Speech`,SpellCheck:`SpellCheck`,SpellCheck2:`SpellCheck2`,Spline:`Spline`,SplinePointer:`SplinePointer`,Split:`Split`,SprayCan:`SprayCan`,Sprout:`Sprout`,Square:`Square`,SquareActivity:`SquareActivity`,SquareArrowDown:`SquareArrowDown`,SquareArrowDownLeft:`SquareArrowDownLeft`,SquareArrowDownRight:`SquareArrowDownRight`,SquareArrowLeft:`SquareArrowLeft`,SquareArrowOutDownLeft:`SquareArrowOutDownLeft`,SquareArrowOutDownRight:`SquareArrowOutDownRight`,SquareArrowOutUpLeft:`SquareArrowOutUpLeft`,SquareArrowOutUpRight:`SquareArrowOutUpRight`,SquareArrowRight:`SquareArrowRight`,SquareArrowUp:`SquareArrowUp`,SquareArrowUpLeft:`SquareArrowUpLeft`,SquareArrowUpRight:`SquareArrowUpRight`,SquareAsterisk:`SquareAsterisk`,SquareBottomDashedScissors:`SquareBottomDashedScissors`,SquareChartGantt:`SquareChartGantt`,SquareCheck:`SquareCheck`,SquareCheckBig:`SquareCheckBig`,SquareChevronDown:`SquareChevronDown`,SquareChevronLeft:`SquareChevronLeft`,SquareChevronRight:`SquareChevronRight`,SquareChevronUp:`SquareChevronUp`,SquareCode:`SquareCode`,SquareDashed:`SquareDashed`,SquareDashedBottom:`SquareDashedBottom`,SquareDashedBottomCode:`SquareDashedBottomCode`,SquareDashedKanban:`SquareDashedKanban`,SquareDashedMousePointer:`SquareDashedMousePointer`,SquareDashedTopSolid:`SquareDashedTopSolid`,SquareDivide:`SquareDivide`,SquareDot:`SquareDot`,SquareEqual:`SquareEqual`,SquareFunction:`SquareFunction`,SquareKanban:`SquareKanban`,SquareLibrary:`SquareLibrary`,SquareM:`SquareM`,SquareMenu:`SquareMenu`,SquareMinus:`SquareMinus`,SquareMousePointer:`SquareMousePointer`,SquareParking:`SquareParking`,SquareParkingOff:`SquareParkingOff`,SquarePen:`SquarePen`,SquarePercent:`SquarePercent`,SquarePi:`SquarePi`,SquarePilcrow:`SquarePilcrow`,SquarePlay:`SquarePlay`,SquarePlus:`SquarePlus`,SquarePower:`SquarePower`,SquareRadical:`SquareRadical`,SquareRoundCorner:`SquareRoundCorner`,SquareScissors:`SquareScissors`,SquareSigma:`SquareSigma`,SquareSlash:`SquareSlash`,SquareSplitHorizontal:`SquareSplitHorizontal`,SquareSplitVertical:`SquareSplitVertical`,SquareSquare:`SquareSquare`,SquareStack:`SquareStack`,SquareTerminal:`SquareTerminal`,SquareUser:`SquareUser`,SquareUserRound:`SquareUserRound`,SquareX:`SquareX`,SquaresExclude:`SquaresExclude`,SquaresIntersect:`SquaresIntersect`,SquaresSubtract:`SquaresSubtract`,SquaresUnite:`SquaresUnite`,Squircle:`Squircle`,Squirrel:`Squirrel`,Stamp:`Stamp`,Star:`Star`,StarHalf:`StarHalf`,StarOff:`StarOff`,StepBack:`StepBack`,StepForward:`StepForward`,Stethoscope:`Stethoscope`,Sticker:`Sticker`,StickyNote:`StickyNote`,Store:`Store`,StretchHorizontal:`StretchHorizontal`,StretchVertical:`StretchVertical`,Strikethrough:`Strikethrough`,Subscript:`Subscript`,Sun:`Sun`,SunDim:`SunDim`,SunMedium:`SunMedium`,SunMoon:`SunMoon`,SunSnow:`SunSnow`,Sunrise:`Sunrise`,Sunset:`Sunset`,Superscript:`Superscript`,SwatchBook:`SwatchBook`,SwissFranc:`SwissFranc`,SwitchCamera:`SwitchCamera`,Sword:`Sword`,Swords:`Swords`,Syringe:`Syringe`,Table:`Table`,Table2:`Table2`,TableCellsMerge:`TableCellsMerge`,TableCellsSplit:`TableCellsSplit`,TableColumnsSplit:`TableColumnsSplit`,TableOfContents:`TableOfContents`,TableProperties:`TableProperties`,TableRowsSplit:`TableRowsSplit`,Tablet:`Tablet`,TabletSmartphone:`TabletSmartphone`,Tablets:`Tablets`,Tag:`Tag`,Tags:`Tags`,Tally1:`Tally1`,Tally2:`Tally2`,Tally3:`Tally3`,Tally4:`Tally4`,Tally5:`Tally5`,Tangent:`Tangent`,Target:`Target`,Telescope:`Telescope`,Tent:`Tent`,TentTree:`TentTree`,Terminal:`Terminal`,TestTube:`TestTube`,TestTubeDiagonal:`TestTubeDiagonal`,TestTubes:`TestTubes`,Text:`Text`,TextCursor:`TextCursor`,TextCursorInput:`TextCursorInput`,TextQuote:`TextQuote`,TextSearch:`TextSearch`,TextSelect:`TextSelect`,Theater:`Theater`,Thermometer:`Thermometer`,ThermometerSnowflake:`ThermometerSnowflake`,ThermometerSun:`ThermometerSun`,ThumbsDown:`ThumbsDown`,ThumbsUp:`ThumbsUp`,Ticket:`Ticket`,TicketCheck:`TicketCheck`,TicketMinus:`TicketMinus`,TicketPercent:`TicketPercent`,TicketPlus:`TicketPlus`,TicketSlash:`TicketSlash`,TicketX:`TicketX`,Tickets:`Tickets`,TicketsPlane:`TicketsPlane`,Timer:`Timer`,TimerOff:`TimerOff`,TimerReset:`TimerReset`,ToggleLeft:`ToggleLeft`,ToggleRight:`ToggleRight`,Toilet:`Toilet`,Tornado:`Tornado`,Torus:`Torus`,Touchpad:`Touchpad`,TouchpadOff:`TouchpadOff`,TowerControl:`TowerControl`,ToyBrick:`ToyBrick`,Tractor:`Tractor`,TrafficCone:`TrafficCone`,TrainFront:`TrainFront`,TrainFrontTunnel:`TrainFrontTunnel`,TrainTrack:`TrainTrack`,TramFront:`TramFront`,Transgender:`Transgender`,Trash:`Trash`,Trash2:`Trash2`,TreeDeciduous:`TreeDeciduous`,TreePalm:`TreePalm`,TreePine:`TreePine`,Trees:`Trees`,Trello:`Trello`,TrendingDown:`TrendingDown`,TrendingUp:`TrendingUp`,TrendingUpDown:`TrendingUpDown`,Triangle:`Triangle`,TriangleAlert:`TriangleAlert`,TriangleDashed:`TriangleDashed`,TriangleRight:`TriangleRight`,Trophy:`Trophy`,Truck:`Truck`,TruckElectric:`TruckElectric`,Turtle:`Turtle`,Tv:`Tv`,TvMinimal:`TvMinimal`,TvMinimalPlay:`TvMinimalPlay`,Twitch:`Twitch`,Twitter:`Twitter`,Type:`Type`,TypeOutline:`TypeOutline`,Umbrella:`Umbrella`,UmbrellaOff:`UmbrellaOff`,Underline:`Underline`,Undo:`Undo`,Undo2:`Undo2`,UndoDot:`UndoDot`,UnfoldHorizontal:`UnfoldHorizontal`,UnfoldVertical:`UnfoldVertical`,Ungroup:`Ungroup`,University:`University`,Unlink:`Unlink`,Unlink2:`Unlink2`,Unplug:`Unplug`,Upload:`Upload`,Usb:`Usb`,User:`User`,UserCheck:`UserCheck`,UserCog:`UserCog`,UserLock:`UserLock`,UserMinus:`UserMinus`,UserPen:`UserPen`,UserPlus:`UserPlus`,UserRound:`UserRound`,UserRoundCheck:`UserRoundCheck`,UserRoundCog:`UserRoundCog`,UserRoundMinus:`UserRoundMinus`,UserRoundPen:`UserRoundPen`,UserRoundPlus:`UserRoundPlus`,UserRoundSearch:`UserRoundSearch`,UserRoundX:`UserRoundX`,UserSearch:`UserSearch`,UserX:`UserX`,Users:`Users`,UsersRound:`UsersRound`,Utensils:`Utensils`,UtensilsCrossed:`UtensilsCrossed`,UtilityPole:`UtilityPole`,Variable:`Variable`,Vault:`Vault`,Vegan:`Vegan`,VenetianMask:`VenetianMask`,Venus:`Venus`,VenusAndMars:`VenusAndMars`,Vibrate:`Vibrate`,VibrateOff:`VibrateOff`,Video:`Video`,VideoOff:`VideoOff`,Videotape:`Videotape`,View:`View`,Voicemail:`Voicemail`,Volleyball:`Volleyball`,Volume:`Volume`,Volume1:`Volume1`,Volume2:`Volume2`,VolumeOff:`VolumeOff`,VolumeX:`VolumeX`,Vote:`Vote`,Wallet:`Wallet`,WalletCards:`WalletCards`,WalletMinimal:`WalletMinimal`,Wallpaper:`Wallpaper`,Wand:`Wand`,WandSparkles:`WandSparkles`,Warehouse:`Warehouse`,WashingMachine:`WashingMachine`,Watch:`Watch`,Waves:`Waves`,WavesLadder:`WavesLadder`,Waypoints:`Waypoints`,Webcam:`Webcam`,Webhook:`Webhook`,WebhookOff:`WebhookOff`,Weight:`Weight`,Wheat:`Wheat`,WheatOff:`WheatOff`,WholeWord:`WholeWord`,Wifi:`Wifi`,WifiHigh:`WifiHigh`,WifiLow:`WifiLow`,WifiOff:`WifiOff`,WifiPen:`WifiPen`,WifiZero:`WifiZero`,Wind:`Wind`,WindArrowDown:`WindArrowDown`,Wine:`Wine`,WineOff:`WineOff`,Workflow:`Workflow`,Worm:`Worm`,WrapText:`WrapText`,Wrench:`Wrench`,X:`X`,Youtube:`Youtube`,Zap:`Zap`,ZapOff:`ZapOff`,ZoomIn:`ZoomIn`,ZoomOut:`ZoomOut`,ArrowDown_0_1:`ArrowDown01`,ArrowDown_1_0:`ArrowDown10`,ArrowUp_0_1:`ArrowUp01`,ArrowUp_1_0:`ArrowUp10`,Axis_3d:`Axis3d`,BookUp_2:`BookUp2`,Building_2:`Building2`,Calendar_1:`Calendar1`,CalendarCheck_2:`CalendarCheck2`,CalendarMinus_2:`CalendarMinus2`,CalendarPlus_2:`CalendarPlus2`,CalendarX_2:`CalendarX2`,CircleSlash_2:`CircleSlash2`,Clock_1:`Clock1`,Clock_10:`Clock10`,Clock_11:`Clock11`,Clock_12:`Clock12`,Clock_2:`Clock2`,Clock_3:`Clock3`,Clock_4:`Clock4`,Clock_5:`Clock5`,Clock_6:`Clock6`,Clock_7:`Clock7`,Clock_8:`Clock8`,Clock_9:`Clock9`,Columns_2:`Columns2`,Columns_3:`Columns3`,Columns_3Cog:`Columns3Cog`,Columns_4:`Columns4`,Dice_1:`Dice1`,Dice_2:`Dice2`,Dice_3:`Dice3`,Dice_4:`Dice4`,Dice_5:`Dice5`,Dice_6:`Dice6`,Disc_2:`Disc2`,Disc_3:`Disc3`,FileAudio_2:`FileAudio2`,FileAxis_3d:`FileAxis3d`,FileBadge_2:`FileBadge2`,FileCheck_2:`FileCheck2`,FileCode_2:`FileCode2`,FileJson_2:`FileJson2`,FileKey_2:`FileKey2`,FileLock_2:`FileLock2`,FileMinus_2:`FileMinus2`,FilePlus_2:`FilePlus2`,FileSearch_2:`FileSearch2`,FileType_2:`FileType2`,FileVideo_2:`FileVideo2`,FileVolume_2:`FileVolume2`,FileX_2:`FileX2`,FlipHorizontal_2:`FlipHorizontal2`,FlipVertical_2:`FlipVertical2`,Flower_2:`Flower2`,FolderGit_2:`FolderGit2`,FolderSearch_2:`FolderSearch2`,Gamepad_2:`Gamepad2`,Grid_2x2:`Grid2x2`,Grid_2x2Check:`Grid2x2Check`,Grid_2x2Plus:`Grid2x2Plus`,Grid_2x2X:`Grid2x2X`,Grid_3x3:`Grid3x3`,Heading_1:`Heading1`,Heading_2:`Heading2`,Heading_3:`Heading3`,Heading_4:`Heading4`,Heading_5:`Heading5`,Heading_6:`Heading6`,Layers_2:`Layers2`,Link_2:`Link2`,Link_2Off:`Link2Off`,Maximize_2:`Maximize2`,Minimize_2:`Minimize2`,MousePointer_2:`MousePointer2`,Move_3d:`Move3d`,MoveDiagonal_2:`MoveDiagonal2`,Music_2:`Music2`,Music_3:`Music3`,Music_4:`Music4`,Navigation_2:`Navigation2`,Navigation_2Off:`Navigation2Off`,Package_2:`Package2`,PictureInPicture_2:`PictureInPicture2`,Plug_2:`Plug2`,Redo_2:`Redo2`,Repeat_1:`Repeat1`,Repeat_2:`Repeat2`,Rotate_3d:`Rotate3d`,Rows_2:`Rows2`,Rows_3:`Rows3`,Rows_4:`Rows4`,Scale_3d:`Scale3d`,Settings_2:`Settings2`,Share_2:`Share2`,SpellCheck_2:`SpellCheck2`,Table_2:`Table2`,Tally_1:`Tally1`,Tally_2:`Tally2`,Tally_3:`Tally3`,Tally_4:`Tally4`,Tally_5:`Tally5`,Trash_2:`Trash2`,Undo_2:`Undo2`,Unlink_2:`Unlink2`,Volume_1:`Volume1`,Volume_2:`Volume2`},vr={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`,ExtraLarge:`xl`},yr={...gr,..._r},br={Gray:`gray`,Brand:`brand`,Error:`error`,Warning:`warning`,Success:`success`,GrayBlue:`gray-blue`,BlueLight:`blue-light`,Blue:`blue`,Indigo:`indigo`,Purple:`purple`,Pink:`pink`,Orange:`orange`},xr=[`gray`,`brand`,`error`,`warning`,`success`,`gray-blue`,`blue-light`,`blue`,`indigo`,`purple`,`pink`,`orange`];function Sr(e,t,n){return Math.min(Math.max(e,t),n)}function Cr(e){return xr.map(t=>`.color--${t} {\n  ${e(t)}\n}`).join(`
`)}function wr(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})}function Tr(e){let t=wr();return e?`${e}-${t}`:t}function Er(e,t,n,r=`value`){t.has(r)&&t.get(r)!==void 0&&e.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:n},bubbles:!0,composed:!0}))}function Dr(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Or(e,t,n){if(e.style?.setProperty){e.style.setProperty(t,n);return}let r=(e.getAttribute(`style`)??``).trim(),i=`${t}: ${n}`,a=RegExp(`${Dr(t)}\\s*:\\s*[^;]*`);if(a.test(r)){e.setAttribute(`style`,r.replace(a,i));return}let o=r.replace(/;$/,``).trim();e.setAttribute(`style`,o?`${o}; ${i}`:i)}var R=class extends Zn{constructor(){super(...arguments),this.role=`presentation`,this.size=vr.Medium}willUpdate(e){e.has(`size`)&&typeof this.size==`number`&&Or(this,`--icon-size`,`${this.size}px`),e.has(`strokeWidth`)&&this.strokeWidth!=null&&Or(this,`--icon-stroke-width`,`${this.strokeWidth}`)}};R.styles=ct`
    :host([size='xxs']) {
      --icon-size: var(--quantic-spacing-lg, 0.75rem);
      --icon-stroke-width: 2;
    }

    :host([size='xs']) {
      --icon-size: var(--quantic-spacing-xl, 1rem);
      --icon-stroke-width: 2;
    }

    :host([size='sm']) {
      --icon-size: var(--quantic-spacing-2xl, 1.25rem);
      --icon-stroke-width: 2;
    }

    :host([size='md']) {
      --icon-size: var(--quantic-spacing-3xl, 1.5rem);
      --icon-stroke-width: 2;
    }

    :host([size='lg']) {
      --icon-size: var(--quantic-spacing-5xl, 2.5rem);
      --icon-stroke-width: 1.5;
    }

    :host([size='xl']) {
      --icon-size: var(--quantic-spacing-7xl, 4rem);
      --icon-stroke-width: 1.25;
    }

    :host {
      display: inline-block;
      width: var(--icon-size, var(--quantic-spacing-3xl, 1.5rem));
      height: var(--icon-size, var(--quantic-spacing-3xl, 1.5rem));
    }

    svg {
      width: 100%;
      height: 100%;
      stroke-width: var(--icon-stroke-width, 2);
    }
  `,A([_n({type:String,reflect:!0})],R.prototype,`role`,void 0),A([_n({type:String,reflect:!0})],R.prototype,`size`,void 0),A([_n({type:Number,reflect:!0})],R.prototype,`strokeWidth`,void 0);var kr=class extends R{render(){return Jt`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-circle-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m9 12 2 2 4-4" />
</svg>

    `}};kr.styles=R.styles,kr=A([I(`quantic-icon-lucide-circle-check`)],kr);var Ar=class extends R{render(){return Jt`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-circle-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m15 9-6 6" />
  <path d="m9 9 6 6" />
</svg>

    `}};Ar.styles=R.styles,Ar=A([I(`quantic-icon-lucide-circle-x`)],Ar);var jr=class extends R{render(){return Jt`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-info"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 16v-4" />
  <path d="M12 8h.01" />
</svg>

    `}};jr.styles=R.styles,jr=A([I(`quantic-icon-lucide-info`)],jr);var Mr=class extends R{render(){return Jt`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-triangle-alert"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
  <path d="M12 9v4" />
  <path d="M12 17h.01" />
</svg>

    `}};Mr.styles=R.styles,Mr=A([I(`quantic-icon-lucide-triangle-alert`)],Mr);var Nr=class extends R{render(){return Jt`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>

    `}};Nr.styles=R.styles,Nr=A([I(`quantic-icon-lucide-x`)],Nr),L.ensureDefined(),kr.ensureDefined(),Ar.ensureDefined(),jr.ensureDefined(),Mr.ensureDefined(),Nr.ensureDefined();var Pr=class extends tr(Zn,[`title`,``,`action`]){constructor(){super(...arguments),this.type=nr.Info,this.showCloseButton=!1,this.handleCloseClick=()=>{this.dispatchEvent(new Event(`close`,{bubbles:!0,composed:!0}))}}updated(e){super.updated(e),(e.has(`type`)||!this.hasAttribute(`role`))&&(this.setAttribute(`role`,this.type===nr.Error?`alert`:`status`),this.setAttribute(`aria-live`,this.type===nr.Error?`assertive`:`polite`),this.setAttribute(`aria-atomic`,`true`))}renderDefaultIcon(){switch(this.type){case nr.Success:return j`<quantic-icon-lucide-circle-check
          size="md"
        ></quantic-icon-lucide-circle-check>`;case nr.Error:return j`<quantic-icon-lucide-circle-x
          size="md"
        ></quantic-icon-lucide-circle-x>`;case nr.Warning:return j`<quantic-icon-lucide-triangle-alert
          size="md"
        ></quantic-icon-lucide-triangle-alert>`;case nr.Info:default:return j`<quantic-icon-lucide-info
          size="md"
        ></quantic-icon-lucide-info>`}}render(){return j`
      <div class="container">
        <span class="icon">
          <slot name="icon">${this.renderDefaultIcon()}</slot>
        </span>
        <div class="content">
          <slot name="title" class="title"></slot>
          <slot class="body"></slot>
          <slot name="action" class="action"></slot>
        </div>
        ${this.showCloseButton?j`<quantic-button
                class="close-button"
                variant="ghost"
                size="sm"
                icon
                aria-label="Close"
                @click=${this.handleCloseClick}
              >
                <quantic-icon-lucide-x
                  size="sm"
                  class="close-icon"
                ></quantic-icon-lucide-x>
              </quantic-button>`:M}
      </div>
    `}};Pr.meta={tag:`quantic-alert`,description:`Inline alert banner with severity styles and optional dismiss action. Visibility is owned by the consumer.`,category:`feedback`,avoidWhen:[{when:`the message is transient and not tied to a place on the page`,useInstead:`quantic-toast`}],accessibility:{providedByComponent:[`announced through a live region`,`severity conveyed by icon as well as colour`],requiredFromConsumer:[`a title, so the message does not depend on colour alone`]},slots:{icon:{description:`Optional icon override. Defaults to a type-derived lucide icon.`},title:{description:`Optional bold title.`,copyRule:`heading`},"":{description:`Body content of the alert.`},action:{description:`Optional action element (e.g. a link or button).`,copyRule:`heading`}},relatedTo:[`quantic-toast`,`quantic-button`]},Pr.styles=ct`
    :host {
      --quantic-component-alert-bg: var(--quantic-bg-secondary);
      --quantic-component-alert-border-color: var(--quantic-border-primary);
      --quantic-component-alert-icon-color: var(--quantic-fg-brand-primary);
      --quantic-component-alert-title-color: var(--quantic-text-primary);
      --quantic-component-alert-text-color: var(--quantic-text-secondary);
      --quantic-component-alert-radius: var(--quantic-radius-md);
      --quantic-component-alert-padding: var(--quantic-spacing-3);
      --quantic-component-alert-gap: var(--quantic-spacing-3);

      display: block;
      box-sizing: border-box;
      font-family: var(--quantic-font-family-body);
    }

    :host([type='success']) {
      --quantic-component-alert-icon-color: var(--quantic-fg-success-primary);
    }

    :host([type='error']) {
      --quantic-component-alert-icon-color: var(--quantic-fg-error-primary);
    }

    :host([type='warning']) {
      --quantic-component-alert-icon-color: var(--quantic-fg-warning-primary);
    }

    .container {
      display: flex;
      align-items: flex-start;
      gap: var(--quantic-component-alert-gap);
      width: 100%;
      padding: var(--quantic-component-alert-padding);
      background-color: var(--quantic-component-alert-bg);
      border: 1px solid var(--quantic-component-alert-border-color);
      border-radius: var(--quantic-component-alert-radius);
      box-sizing: border-box;
    }

    .icon {
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
      height: var(--quantic-line-height-body-sm);
      color: var(--quantic-component-alert-icon-color);
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: var(--quantic-spacing-1);
      flex: 1;
      min-width: 0;
    }

    .title {
      display: block;
      color: var(--quantic-component-alert-title-color);
      font-size: var(--quantic-font-size-body-sm);
      line-height: var(--quantic-line-height-body-sm);
      font-weight: var(--quantic-font-weight-semibold);
    }

    .body {
      display: block;
      color: var(--quantic-component-alert-text-color);
      font-size: var(--quantic-font-size-body-sm);
      line-height: var(--quantic-line-height-body-sm);
    }

    .action {
      display: block;
      margin-top: var(--quantic-spacing-2);
    }

    .close-button {
      flex-shrink: 0;
      margin-inline-start: auto;
      margin-block-start: calc(var(--quantic-spacing-2) * -1);
      margin-inline-end: calc(var(--quantic-spacing-2) * -1);
    }

    .close-icon {
      color: var(--quantic-text-tertiary);
      transition: color var(--quantic-transition-duration-fast, 0.15s);
    }

    .close-button:hover .close-icon,
    .close-button:focus .close-icon {
      color: var(--quantic-text-primary);
    }

    [hidden] {
      display: none;
    }
  `,A([P({type:`AlertType`,options:Object.values(nr),default:nr.Info,reflect:!0,description:`Severity. Drives icon and color tokens.`})],Pr.prototype,`type`,void 0),A([P({type:`boolean`,attribute:`show-close-button`,default:`false`,description:`Shows a built-in close button. Click dispatches a "close" event.`})],Pr.prototype,`showCloseButton`,void 0),Pr=A([F(`close`,{description:`Fired when the user clicks the close button. The consumer is responsible for hiding the alert.`}),I(`quantic-alert`)],Pr);var{I:Fr}=ln,Ir=e=>e,Lr=e=>e.strings===void 0,Rr=()=>document.createComment(``),zr=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new Fr(r.insertBefore(Rr(),i),r.insertBefore(Rr(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=Ir(e).nextSibling;Ir(r).insertBefore(e,i),e=t}}}return n},Br=(e,t,n=e)=>(e._$AI(t,n),e),Vr={},Hr=(e,t=Vr)=>e._$AH=t,Ur=e=>e._$AH,Wr=e=>{e._$AR(),e._$AA.remove()},Gr=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Kr=fr(class extends pr{constructor(e){if(super(e),e.type!==dr.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Ur(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=Br(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=Br(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=Br(i[d],a[m]),zr(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=Br(i[f],a[p]),zr(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=Gr(o,p,m),u=Gr(s,d,f)),l.has(s[d])){if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=zr(e,i[d]);Br(t,a[p]),c[p]=t}else c[p]=Br(n,a[p]),zr(e,i[d],n),i[t]=null;p++}else Wr(i[f]),f--}else Wr(i[d]),d++;for(;p<=m;){let t=zr(e,c[m+1]);Br(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&Wr(e)}return this.ut=o,Hr(e,c),Yt}}),qr=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),qr(e,t);return!0},Jr=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Yr=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Qr(t)}};function Xr(e){this._$AN===void 0?this._$AM=e:(Jr(this),this._$AM=e,Yr(this))}function Zr(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)qr(r[e],!1),Jr(r[e]);else r!=null&&(qr(r,!1),Jr(r))}else qr(this,e)}}var Qr=e=>{e.type==dr.CHILD&&(e._$AP??=Zr,e._$AQ??=Xr)},$r=class extends pr{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Yr(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(qr(this,e),Jr(this))}setValue(e){if(Lr(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},ei=()=>new ti,ti=class{},ni=new WeakMap,ri=fr(class extends $r{render(e){return M}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),M}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=ni.get(t);n===void 0&&(n=new WeakMap,ni.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?ni.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ii=Math.min,ai=Math.max,oi=Math.round,si=Math.floor,ci=e=>({x:e,y:e}),li={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function ui(e,t,n){return ai(e,ii(t,n))}function di(e,t){return typeof e==`function`?e(t):e}function fi(e){return e.split(`-`)[0]}function pi(e){return e.split(`-`)[1]}function mi(e){return e===`x`?`y`:`x`}function hi(e){return e===`y`?`height`:`width`}function gi(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function _i(e){return mi(gi(e))}function vi(e,t,n){n===void 0&&(n=!1);let r=pi(e),i=_i(e),a=hi(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Di(o)),[o,Di(o)]}function yi(e){let t=Di(e);return[bi(e),t,bi(t)]}function bi(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var xi=[`left`,`right`],Si=[`right`,`left`],Ci=[`top`,`bottom`],wi=[`bottom`,`top`];function Ti(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Si:xi:t?xi:Si;case`left`:case`right`:return t?Ci:wi;default:return[]}}function Ei(e,t,n,r){let i=pi(e),a=Ti(fi(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(bi)))),a}function Di(e){let t=fi(e);return li[t]+e.slice(t.length)}function Oi(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function ki(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Oi(e)}function Ai(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function ji(e,t,n){let{reference:r,floating:i}=e,a=gi(t),o=_i(t),s=hi(o),c=fi(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=pi(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Mi(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=di(t,e),p=ki(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Ai(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Ai(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Ni=50,Pi=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Mi},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=ji(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Ni&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=ji(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Fi=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=di(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=fi(r),_=gi(o),v=fi(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Di(o)]:yi(o)),x=p!==`none`;!d&&x&&b.push(...Ei(o,m,p,y));let S=[o,...b],ee=await s.detectOverflow(t,h),C=[],w=i.flip?.overflows||[];if(l&&C.push(ee[g]),u){let e=vi(r,a,y);C.push(ee[e[0]],ee[e[1]])}if(w=[...w,{placement:r,overflows:C}],!C.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===gi(t)||w.every(e=>gi(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:w},reset:{placement:t}};let n=w.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=w.filter(e=>{if(x){let t=gi(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},Ii=new Set([`left`,`top`]);async function Li(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=fi(n),s=pi(n),c=gi(n)===`y`,l=Ii.has(o)?-1:1,u=a&&c?-1:1,d=di(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Ri=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Li(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},zi=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=di(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=gi(i),p=mi(f),m=u[p],h=u[f],g=(e,t)=>ui(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}};function Bi(){return typeof window<`u`}function Vi(e){return Wi(e)?(e.nodeName||``).toLowerCase():`#document`}function Hi(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ui(e){return((Wi(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Wi(e){return Bi()?e instanceof Node||e instanceof Hi(e).Node:!1}function Gi(e){return Bi()?e instanceof Element||e instanceof Hi(e).Element:!1}function Ki(e){return Bi()?e instanceof HTMLElement||e instanceof Hi(e).HTMLElement:!1}function qi(e){return!Bi()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Hi(e).ShadowRoot}function Ji(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=z(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Yi(e){return/^(table|td|th)$/.test(Vi(e))}function Xi(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Zi=/transform|translate|scale|rotate|perspective|filter/,Qi=/paint|layout|strict|content/,$i=e=>!!e&&e!==`none`,ea;function ta(e){let t=Gi(e)?z(e):e;return $i(t.transform)||$i(t.translate)||$i(t.scale)||$i(t.rotate)||$i(t.perspective)||!ra()&&($i(t.backdropFilter)||$i(t.filter))||Zi.test(t.willChange||``)||Qi.test(t.contain||``)}function na(e){let t=aa(e);for(;Ki(t)&&!ia(t);){if(ta(t))return t;if(Xi(t))return null;t=aa(t)}return null}function ra(){return ea??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),ea}function ia(e){return/^(html|body|#document)$/.test(Vi(e))}function z(e){return Hi(e).getComputedStyle(e)}function B(e){return Gi(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function aa(e){if(Vi(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||qi(e)&&e.host||Ui(e);return qi(t)?t.host:t}function oa(e){let t=aa(e);return ia(t)?(e.ownerDocument||e).body:Ki(t)&&Ji(t)?t:oa(t)}function sa(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=oa(e),i=r===e.ownerDocument?.body,a=Hi(r);if(i){let e=ca(a);return t.concat(a,a.visualViewport||[],Ji(r)?r:[],e&&n?sa(e):[])}return t.concat(r,sa(r,[],n))}function ca(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function la(e){let t=z(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Ki(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=oi(n)!==a||oi(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function ua(e){return Gi(e)?e:e.contextElement}function da(e){let t=ua(e);if(!Ki(t))return ci(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=la(t),o=(a?oi(n.width):n.width)/r,s=(a?oi(n.height):n.height)/i;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}var fa=ci(0);function pa(e){let t=Hi(e);return!ra()||!t.visualViewport?fa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ma(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===Hi(e)}function ha(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=ua(e),o=ci(1);t&&(r?Gi(r)&&(o=da(r)):o=da(e));let s=ma(a,n,r)?pa(a):ci(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=Hi(a),t=Gi(r)?Hi(r):r,n=e,i=ca(n);for(;i&&t!==n;){let e=da(i),t=i.getBoundingClientRect(),r=z(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Hi(i),i=ca(n)}}return Ai({width:u,height:d,x:c,y:l})}function ga(e,t){let n=B(e).scrollLeft;return t?t.left+n:ha(Ui(e)).left+n}function _a(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ga(e,n),y:n.top+t.scrollTop}}function va(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Ui(r),s=t?Xi(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=ci(1),u=ci(0),d=Ki(r);if((d||!a)&&((Vi(r)!==`body`||Ji(o))&&(c=B(r)),d)){let e=ha(r);l=da(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?_a(o,c):ci(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ya(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function ba(e){let t=B(e),n=e.ownerDocument.body,r=ai(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=ai(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+ga(e),o=-t.scrollTop;return z(n).direction===`rtl`&&(a+=ai(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var xa=25;function Sa(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=Hi(e),a=Ui(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!ra()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(ga(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=xa&&(s-=o)}return{width:s,height:c,x:l,y:u}}function Ca(e,t){let n=ha(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=da(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function wa(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Sa(e,n,t);else if(t===`document`)r=ba(Ui(e));else if(Gi(t))r=Ca(t,n);else{let n=pa(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Ai(r)}function Ta(e,t){let n=t.get(e);if(n)return n;let r=sa(e,[],!1).filter(e=>Gi(e)&&Vi(e)!==`body`),i=null,a=z(e).position===`fixed`,o=a?aa(e):e;for(;Gi(o)&&!ia(o);){let e=z(o),t=ta(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=aa(o)}return t.set(e,r),r}function Ea(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Xi(t)?[]:Ta(t,this._c):[].concat(n),r],o=wa(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=wa(t,a[e],i);s=ai(n.top,s),c=ii(n.right,c),l=ii(n.bottom,l),u=ai(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Da(e){let{width:t,height:n}=la(e);return{width:t,height:n}}function Oa(e,t,n){let r=Ki(t),i=Ui(t),a=n===`fixed`,o=ha(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=ci(0);if((r||!a)&&((Vi(t)!==`body`||Ji(i))&&(s=B(t)),r)){let e=ha(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=ga(i));let l=i&&!r&&!a?_a(i,s):ci(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function ka(e){return z(e).position===`static`}function Aa(e,t){if(!Ki(e)||z(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Ui(e)===n&&(n=n.ownerDocument.body),n}function ja(e,t){let n=Hi(e);if(Xi(e))return n;if(!Ki(e)){let t=aa(e);for(;t&&!ia(t);){if(Gi(t)&&!ka(t))return t;t=aa(t)}return n}let r=Aa(e,t);for(;r&&Yi(r)&&ka(r);)r=Aa(r,t);return r&&ia(r)&&ka(r)&&!ta(r)?n:r||na(e)||n}var Ma=async function(e){let t=this.getOffsetParent||ja,n=this.getDimensions,r=await n(e.floating);return{reference:Oa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Na(e){return z(e).direction===`rtl`}var Pa={convertOffsetParentRelativeRectToViewportRelativeRect:va,getDocumentElement:Ui,getClippingRect:Ea,getOffsetParent:ja,getElementRects:Ma,getClientRects:ya,getDimensions:Da,getScale:da,isElement:Gi,isRTL:Na};function Fa(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ia(e,t,n){let r=null,i,a=Ui(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=si(d),h=si(a.clientWidth-(u+f)),g=si(a.clientHeight-(d+p)),_=si(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:ai(0,ii(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!Fa(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=Hi(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function La(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=ua(e),u=i||a?[...l?sa(l):[],...t?sa(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?Ia(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?ha(e):null;c&&g();function g(){let t=ha(e);h&&!Fa(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Ra=Ri,za=zi,Ba=Fi,Va=(e,t,n)=>{let r=new Map,i=n??{},a={...Pa,...i.platform,_c:r};return Pi(e,t,{...i,platform:a})};function Ha(e){class t extends e{constructor(){super(...arguments),this.ariaLabel=null,this.ariaDescription=null,this.ariaInvalid=null}getA11yAttributes(e){let t=e?.label??this.ariaLabel,n=e?.description??this.ariaDescription,r=e?.invalid??this.ariaInvalid===`true`;return{label:hr(t||void 0),description:hr(n||void 0),invalid:hr(r?`true`:void 0)}}}return A([P({type:`string`,attribute:`aria-label`,description:`Accessible label for the component (aria-label).`})],t.prototype,`ariaLabel`,void 0),A([P({type:`string`,attribute:`aria-description`,description:`Accessible description bound directly to aria-description.`})],t.prototype,`ariaDescription`,void 0),A([P({type:`string`,attribute:`aria-invalid`,description:`Marks the component invalid for assistive technologies (aria-invalid).`})],t.prototype,`ariaInvalid`,void 0),t}var Ua={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},Wa=class extends R{render(){return Jt`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-chevron-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m6 9 6 6 6-6" />
</svg>

    `}};Wa.styles=R.styles,Wa=A([I(`quantic-icon-lucide-chevron-down`)],Wa);var Ga=class extends R{render(){return Jt`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-circle-alert"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <line x1="12" x2="12" y1="8" y2="12" />
  <line x1="12" x2="12.01" y1="16" y2="16" />
</svg>

    `}};Ga.styles=R.styles,Ga=A([I(`quantic-icon-lucide-circle-alert`)],Ga),Wa.ensureDefined(),Ga.ensureDefined();var Ka={xs:vr.ExtraSmall,sm:vr.ExtraSmall,md:vr.Small,lg:vr.Medium},qa=e=>Ka[e]??vr.Small,Ja=e=>j`<quantic-icon-lucide-circle-alert
    size=${qa(e)}
    class="error-icon"
  ></quantic-icon-lucide-circle-alert>`,Ya=(e,t={})=>j`<quantic-icon-lucide-chevron-down
    size=${qa(e)}
    class="suffix-icon"
    @click=${t.click}
    @mousedown=${t.mousedown}
  ></quantic-icon-lucide-chevron-down>`,Xa={xs:{font:`13px`,block:`var(--quantic-spacing-xxs)`,inline:`var(--quantic-spacing-2)`},sm:{font:`var(--quantic-font-size-body-sm)`,block:`var(--quantic-spacing-sm)`,inline:`var(--quantic-spacing-2)`},md:{font:`var(--quantic-font-size-body-md)`,block:`var(--quantic-spacing-md)`,inline:`var(--quantic-spacing-3)`},lg:{font:`var(--quantic-font-size-body-lg)`,block:`var(--quantic-spacing-3)`,inline:`var(--quantic-spacing-4)`}};Object.keys(Xa);function Za(e,t){let n=t=>st(`--quantic-component-${e}-${t}`),r=st(`var(--quantic-component-${e}-border-radius, var(--quantic-radius-sm))`),i=st(`var(--quantic-component-${e}-border-color, var(--quantic-border-primary))`),a=Object.entries(Xa).map(([t,{font:n,block:r,inline:i}])=>`
        .main.size--${t} {
          font-size: var(--quantic-component-${e}-font-size, ${n});
          padding: var(--quantic-component-${e}-padding-block, ${r})
            var(--quantic-component-${e}-padding-inline, ${i});
        }`).join(`
`);return ct`
    :host {
      display: inline-block;
      width: 100%;
    }

    .main {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: 100%;
      min-width: var(${n(`min-width`)}, ${st(t)});
      font-family: var(--quantic-font-family-body);
      border: 1px solid ${i};
      border-radius: ${r};
      color: var(${n(`color`)}, var(--quantic-text-primary));
      background-color: var(${n(`bg`)}, var(--quantic-bg-primary));
      transition:
        border-color 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out;
    }

    ${st(a)}

    .main::before {
      content: '';
      pointer-events: none;
      display: block;
      position: absolute;
      inset: 0;
      border-radius: ${r};
      border: 2px solid var(--quantic-focus-ring);
      transition: all 0.2s ease-in-out;
      opacity: 0;
    }

    .main:focus-within::before {
      inset: -4px;
      opacity: 1;
      border-radius: calc(${r} + 4px);
    }

    :host([invalid]) .main,
    :host([invalid]) .main::before {
      border-color: var(--quantic-border-error);
    }

    :host([invalid]) .main:focus-within {
      border-color: ${i};
    }

    .input {
      appearance: none;
      flex-grow: 1;
      min-width: 0;
      width: 100%;
      border: none;
      background: none;
      outline: none;
      color: var(${n(`color`)}, var(--quantic-text-secondary));
      padding: 0;
      margin: 0;
      line-height: inherit;
      font-family: inherit;
      font-size: inherit;
      font-weight: var(--quantic-font-weight-regular);
      text-overflow: ellipsis;
    }

    .input:disabled {
      cursor: not-allowed;
      color: var(--quantic-fg-disabled-subtle);
    }

    slot[name='prefix'],
    slot[name='suffix'] {
      display: inline-flex;
      align-items: center;
      margin: 0;
    }

    slot[name='prefix']::slotted(*) {
      margin-inline-end: var(--quantic-spacing-2);
    }

    slot[name='suffix']::slotted(*),
    .suffix-icon,
    .error-icon {
      margin-inline-start: var(--quantic-spacing-2);
    }

    .suffix-icon {
      flex-shrink: 0;
      color: var(--quantic-text-tertiary);
      cursor: pointer;
    }

    :host([disabled]) .suffix-icon {
      pointer-events: none;
    }

    .error-icon {
      flex-shrink: 0;
      color: var(--quantic-border-error);
    }
  `}var Qa=class extends Ha(Zn){constructor(){super(),this.listboxId=Tr(`combobox-listbox`),this.value=``,this.name=``,this.placeholder=``,this.options=[],this.size=Ua.Medium,this.disabled=!1,this.required=!1,this.invalid=!1,this.emptyLabel=`No results`,this.allowCustomValue=!1,this._open=!1,this._inputValue=``,this._activeIndex=-1,this._inputRef=ei(),this._listboxRef=ei(),this.internals=this.attachInternals()}updated(e){let t=e.has(`value`),n=e.has(`options`),r=e.has(`allowCustomValue`);if(t||r||n&&!this._open){let e=this.options.find(e=>e.value===this.value);this._inputValue=e?e.label:this.allowCustomValue?this.value:``}e.has(`value`)&&this.internals.setFormValue(this.value),(e.has(`value`)||e.has(`required`))&&this.updateValidity(),e.has(`options`)&&this._open&&(this._activeIndex=-1),e.has(`_activeIndex`)&&this._activeIndex>=0&&this.shadowRoot?.querySelectorAll(`[role="option"]`)[this._activeIndex]?.scrollIntoView({block:`nearest`})}get filteredOptions(){if(!this._inputValue)return this.options;let e=this.filterFn??((e,t)=>e.label.toLowerCase().includes(t.toLowerCase()));return this.options.filter(t=>e(t,this._inputValue))}firstNavigableIndex(){return this.filteredOptions.findIndex(e=>!e.disabled)}lastNavigableIndex(){let e=this.filteredOptions;for(let t=e.length-1;t>=0;t--)if(!e[t].disabled)return t;return-1}nextNavigableIndex(e,t){let n=this.filteredOptions,r=e+t;for(;r>=0&&r<n.length;){if(!n[r].disabled)return r;r+=t}return e}async openList(){this._open||this.disabled||(this._open=!0,this._activeIndex=-1,await this.updateComplete,this.positionListbox())}closeList(e=!1){if(this._open){if(this._open=!1,this._activeIndex=-1,this.cleanup?.(),this.cleanup=void 0,e&&(this.allowCustomValue||!this._inputValue.trim()))this.commitInputValue();else{let e=this.options.find(e=>e.value===this.value);this._inputValue=e?.label??(this.allowCustomValue?this.value:``)}}}commitInputValue(){let e=this._inputValue.trim();this._inputValue=e,e!==this.value&&(this.value=e,this.internals.setFormValue(e),this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:e},bubbles:!0,composed:!0})))}positionListbox(){let e=this._listboxRef.value;e&&(this.cleanup=La(this,e,async()=>{if(!e)return;let{x:t,y:n}=await Va(this,e,{placement:`bottom-start`,middleware:[Ra(4),Ba(),za({padding:8})],strategy:`absolute`});Object.assign(e.style,{left:`${t}px`,top:`${n}px`,width:`${this.getBoundingClientRect().width}px`})}))}selectOption(e){this.value=e.value,this._inputValue=e.label,this.internals.setFormValue(e.value),this._open=!1,this._activeIndex=-1,this.cleanup?.(),this.cleanup=void 0,this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:this.value},bubbles:!0,composed:!0})),this._inputRef.value?.focus()}handleInput(e){let t=e.target;this._inputValue=t.value,this._activeIndex=-1,this._open||this.openList(),this.dispatchEvent(new CustomEvent(`input-changed`,{detail:{value:this._inputValue},bubbles:!0,composed:!0}))}handleKeyDown(e){switch(e.key){case`ArrowDown`:e.preventDefault(),this._open?this._activeIndex=this.nextNavigableIndex(this._activeIndex,1):this.openList().then(()=>{this._activeIndex=this.firstNavigableIndex()});break;case`ArrowUp`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.nextNavigableIndex(this._activeIndex,-1);break;case`Home`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.firstNavigableIndex();break;case`End`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.lastNavigableIndex();break;case`Enter`:if(this._open&&this._activeIndex>=0){let t=this.filteredOptions[this._activeIndex];t&&!t.disabled&&(e.preventDefault(),this.selectOption(t))}else this._open&&(this.allowCustomValue||!this._inputValue.trim())&&(e.preventDefault(),this.closeList(!0));break;case`Escape`:e.preventDefault(),this.closeList();break;case`Tab`:this.closeList(!0)}}handleBlur(){this.closeList(!0),this.dispatchEvent(new Event(`blur`,{bubbles:!0,composed:!0}))}handleFocus(){this.dispatchEvent(new Event(`focus`,{bubbles:!0,composed:!0}))}handleInputClick(){this.openList()}handleChevronMouseDown(e){e.preventDefault(),this._open?this.closeList():(this._inputRef.value?.focus(),this.openList())}formResetCallback(){this.value=``,this._inputValue=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e);let t=this.options.find(t=>t.value===e);this._inputValue=t?.label??(this.allowCustomValue?e:``)}formDisabledCallback(e){this.disabled=e}disconnectedCallback(){super.disconnectedCallback(),this.cleanup?.()}updateValidity(){let e=this._inputRef.value;e&&this.internals.setValidity(e.validity,e.validationMessage,e)}get activeDescendant(){if(!(!this._open||this._activeIndex<0))return`${this.listboxId}-opt-${this._activeIndex}`}render(){let e=mr({main:!0,[`size--${this.size}`]:!0}),t=mr({listbox:!0,"is-open":this._open,[`size--${this.size}`]:!0}),n=this.getA11yAttributes({invalid:this.invalid}),r=this.filteredOptions;return j`
      <div class=${e}>
        <slot name="prefix"></slot>
        <input
          ${ri(this._inputRef)}
          class="input"
          role="combobox"
          aria-expanded=${this._open?`true`:`false`}
          aria-haspopup="listbox"
          aria-autocomplete="list"
          aria-controls=${this.listboxId}
          aria-activedescendant=${hr(this.activeDescendant)}
          aria-label=${n.label}
          aria-description=${n.description}
          aria-invalid=${n.invalid}
          .value=${this._inputValue}
          placeholder=${this.placeholder}
          name=${this.name}
          ?required=${this.required}
          ?disabled=${this.disabled}
          autocomplete="off"
          @click=${this.handleInputClick}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        />
        ${this.invalid?Ja(this.size):j`<slot name="suffix"
                >${Ya(this.size,{mousedown:this.handleChevronMouseDown})}</slot
              >`}
      </div>

      <ul
        ${ri(this._listboxRef)}
        id=${this.listboxId}
        role="listbox"
        class=${t}
        @mousedown=${e=>e.preventDefault()}
      >
        ${r.length===0?j`<li
                class="option-empty"
                role="option"
                aria-disabled="true"
                aria-selected="false"
              >
                ${this.emptyLabel}
              </li>`:Kr(r,e=>e.value,(e,t)=>j`
                  <li
                    id=${`${this.listboxId}-opt-${t}`}
                    role="option"
                    class=${mr({option:!0,"is-active":t===this._activeIndex,"is-selected":e.value===this.value,"is-disabled":!!e.disabled})}
                    aria-selected=${e.value===this.value?`true`:`false`}
                    aria-disabled=${e.disabled?`true`:`false`}
                    @click=${()=>this.handleOptionClick(e)}
                  >
                    <span class="option-label">${e.label}</span>
                  </li>
                `)}
      </ul>
    `}handleOptionClick(e){e.disabled||this.selectOption(e)}};Qa.meta={tag:`quantic-combobox`,description:`Text input that filters a list of options as the user types. Form-associated. Use for large option sets or anywhere a plain <select> is inadequate. Wrap in quantic-combobox-field to add a label and validation messaging.`,category:`form`,avoidWhen:[{when:`the option set is short and fixed`,useInstead:`quantic-select`}],accessibility:{providedByComponent:[`aria-expanded and aria-selected`,`arrow keys and Escape`,`form association`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{prefix:{description:`Leading content (e.g. icon).`},suffix:{description:`Trailing content, replacing the default chevron.`}},relatedTo:[`quantic-combobox-field`,`quantic-select`,`quantic-field`]},Qa.formAssociated=!0,Qa.styles=[Za(`combobox`,`6em`),ct`
      :host {
        position: relative;
      }

      .listbox {
        position: absolute;
        z-index: 9999;
        list-style: none;
        margin: 0;
        padding: var(--quantic-spacing-2);
        background-color: var(--quantic-component-combobox-listbox-bg, var(--quantic-bg-primary));
        border: 1px solid
          var(--quantic-component-combobox-listbox-border-color, var(--quantic-border-secondary));
        border-radius: var(
          --quantic-component-combobox-listbox-border-radius,
          var(--quantic-radius-md)
        );
        box-shadow: var(
          --quantic-component-combobox-listbox-shadow,
          0 10px 15px -3px rgb(0 0 0 / 0.1),
          0 4px 6px -4px rgb(0 0 0 / 0.1)
        );
        overflow-y: auto;
        max-height: var(--quantic-component-combobox-listbox-max-height, 300px);
        box-sizing: border-box;
        font-family: var(--quantic-font-family-body);
        display: none;
      }

      .listbox.is-open {
        display: flex;
        flex-direction: column;
        gap: var(--quantic-spacing-0-5);
      }

      .listbox.size--xs {
        --quantic-internal-combobox-option-padding-block: var(--quantic-spacing-1);
        --quantic-internal-combobox-option-padding-inline: var(--quantic-spacing-1-5);
        --quantic-internal-combobox-option-font-size: 13px;
        --quantic-internal-combobox-option-line-height: var(--quantic-line-height-body-xs);
      }

      .listbox.size--sm {
        --quantic-internal-combobox-option-padding-block: var(--quantic-spacing-1-5);
        --quantic-internal-combobox-option-padding-inline: var(--quantic-spacing-2);
        --quantic-internal-combobox-option-font-size: var(--quantic-font-size-body-sm);
        --quantic-internal-combobox-option-line-height: var(--quantic-line-height-body-sm);
      }

      .listbox.size--md {
        --quantic-internal-combobox-option-padding-block: var(--quantic-spacing-2);
        --quantic-internal-combobox-option-padding-inline: var(--quantic-spacing-3);
        --quantic-internal-combobox-option-font-size: var(--quantic-font-size-body-md);
        --quantic-internal-combobox-option-line-height: var(--quantic-line-height-body-md);
      }

      .listbox.size--lg {
        --quantic-internal-combobox-option-padding-block: var(--quantic-spacing-3);
        --quantic-internal-combobox-option-padding-inline: var(--quantic-spacing-4);
        --quantic-internal-combobox-option-font-size: var(--quantic-font-size-body-lg);
        --quantic-internal-combobox-option-line-height: var(--quantic-line-height-body-lg);
      }

      .option {
        display: flex;
        align-items: center;
        padding: var(
            --quantic-component-combobox-option-padding-block,
            var(--quantic-internal-combobox-option-padding-block, var(--quantic-spacing-2))
          )
          var(
            --quantic-component-combobox-option-padding-inline,
            var(--quantic-internal-combobox-option-padding-inline, var(--quantic-spacing-3))
          );
        border-radius: var(--quantic-radius-sm);
        font-size: var(
          --quantic-component-combobox-option-font-size,
          var(--quantic-internal-combobox-option-font-size, var(--quantic-font-size-body-md))
        );
        line-height: var(
          --quantic-component-combobox-option-line-height,
          var(--quantic-internal-combobox-option-line-height, var(--quantic-line-height-body-md))
        );
        color: var(--quantic-text-primary);
        cursor: pointer;
        user-select: none;
        box-sizing: border-box;
        transition: background-color 0.15s ease-in-out;
      }

      .option-label {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .option:hover,
      .option.is-active {
        background-color: var(--quantic-bg-secondary-hover);
      }

      .option.is-selected {
        background-color: var(--quantic-bg-active);
      }

      .option.is-disabled {
        pointer-events: none;
        opacity: 0.5;
        cursor: default;
      }

      .option-empty {
        padding: var(--quantic-component-combobox-option-padding-block, var(--quantic-spacing-2))
          var(--quantic-component-combobox-option-padding-inline, var(--quantic-spacing-3));
        font-size: var(
          --quantic-component-combobox-option-font-size,
          var(--quantic-font-size-body-md)
        );
        color: var(--quantic-text-tertiary);
      }
    `],A([P({type:`string`,default:``,reflect:!0,description:`Currently selected value submitted with the form.`})],Qa.prototype,`value`,void 0),A([P({type:`string`,description:`Name submitted with form data.`})],Qa.prototype,`name`,void 0),A([P({type:`string`,description:`Placeholder shown when no option is selected.`,copyRule:`placeholder`})],Qa.prototype,`placeholder`,void 0),A([P({type:`ComboboxOption[]`,default:`[]`,description:`Options to display. Each item must have a label (display text) and value (form value). Set this prop reactively to implement async/server-side filtering.`})],Qa.prototype,`options`,void 0),A([P({type:`ComboboxSize`,options:Object.values(Ua),default:Ua.Medium,description:`Controls padding and font size.`})],Qa.prototype,`size`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],Qa.prototype,`disabled`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],Qa.prototype,`required`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-combobox-field.`})],Qa.prototype,`invalid`,void 0),A([P({type:`string`,default:`No results`,description:`Text shown in the listbox when no options match the input.`,copyRule:`empty-state`})],Qa.prototype,`emptyLabel`,void 0),A([P({type:`boolean`,default:`false`,description:`When true, the user can type a value that does not match any option. The typed text is preserved on blur/Enter and surfaced through the value-changed event. When false (default), only values from the options list are accepted.`})],Qa.prototype,`allowCustomValue`,void 0),A([P({type:`(option: ComboboxOption, inputValue: string) => boolean`,description:`Custom filter predicate. If omitted, defaults to case-insensitive substring match on option.label.`})],Qa.prototype,`filterFn`,void 0),A([vn()],Qa.prototype,`_open`,void 0),A([vn()],Qa.prototype,`_inputValue`,void 0),A([vn()],Qa.prototype,`_activeIndex`,void 0),Qa=A([F(`value-changed`,{description:`Fired when the user selects an option from the list, clears the field, or commits a custom value when allowCustomValue is enabled.`,detail:`{ value: string }`}),F(`input-changed`,{description:`Fired on every keystroke in the text field. Use to drive async filtering by updating the options prop in response.`,detail:`{ value: string }`}),F(`focus`,{forwarded:!0}),F(`blur`,{forwarded:!0}),I(`quantic-combobox`)],Qa);var $a=br,eo={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},to=class extends Zn{constructor(){super(...arguments),this.color=$a.Brand,this.size=eo.Medium,this.rounded=!1,this.icon=!1}render(){return sr`
      <div class=${mr({main:!0,[`size--${this.size}`]:!0,[`color--${this.color}`]:!0,icon:this.icon,rounded:this.rounded})}>
        <slot name="before"></slot>
        <slot></slot>
        <slot name="after"></slot>
      </div>
    `}};to.meta={tag:`quantic-badge`,description:`Compact inline label for status, category, or count. Non-interactive — use quantic-button for clickable chips. Supports a wide color palette and an icon-only square mode.`,category:`display`,avoidWhen:[{when:`the label is dismissible or selectable`,useInstead:`quantic-tag`},{when:`the label is clickable`,useInstead:`quantic-button`},{when:`the value is a named system state`,useInstead:`quantic-status-badge`}],slots:{before:{description:`Content before the label (e.g. icon).`},"":{description:`Badge label text or icon.`},after:{description:`Content after the label.`}},relatedTo:[`quantic-tag`,`quantic-status-badge`]},to.styles=ct`
    :host {
      display: inline-flex;
    }

    .main {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--quantic-spacing-2);
      font-family: var(--quantic-font-family-body);
      font-weight: var(--quantic-font-weight-regular);
      line-height: 1.5em;
      white-space: nowrap;
      box-sizing: border-box;
      vertical-align: middle;
      border-radius: var(--quantic-radius-sm);
    }

    .size--xs {
      padding: 0 var(--quantic-spacing-1);
      font-size: var(--quantic-font-size-body-xs);
    }

    .size--sm {
      padding: var(--quantic-spacing-0-5) var(--quantic-spacing-1-5);
      font-size: var(--quantic-font-size-body-xs);
    }

    .size--md {
      padding: var(--quantic-spacing-0-5) var(--quantic-spacing-2);
      font-size: var(--quantic-font-size-body-sm);
      border-radius: var(--quantic-radius-sm);
    }

    .size--lg {
      padding: var(--quantic-spacing-1) var(--quantic-spacing-3);
      font-size: var(--quantic-font-size-body-sm);
      border-radius: var(--quantic-radius-lg);
    }

    /* Icon mode - square */
    .icon {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 100%;
    }

    .icon.size--xs {
      width: calc(var(--quantic-line-height-body-xs) + 2px);
      height: calc(var(--quantic-line-height-body-xs) + 2px);
    }

    .icon.size--sm {
      width: calc(var(--quantic-line-height-body-xs) + 4px);
      height: calc(var(--quantic-line-height-body-xs) + 4px);
    }

    .icon.size--md {
      width: calc(
        var(--quantic-line-height-body-sm) + var(--quantic-spacing-1) * 2
      );
      height: calc(
        var(--quantic-line-height-body-sm) + var(--quantic-spacing-1) * 2
      );
    }

    .icon.size--lg {
      width: calc(
        var(--quantic-line-height-body-sm) + var(--quantic-spacing-1) * 2
      );
      height: calc(
        var(--quantic-line-height-body-sm) + var(--quantic-spacing-1) * 2
      );
    }

    ${st(Cr(e=>`
      --badge-bg: var(--quantic-utility-${e}-50);
      --badge-border: var(--quantic-utility-${e}-200);
      --badge-text: var(--quantic-utility-${e}-700);
    `))}

    .rounded {
      border-radius: var(--quantic-radius-full);
    }

    .main {
      background-color: var(--badge-bg);
      border: 1px solid var(--badge-border);
      color: var(--badge-text);
    }

    ::slotted(*) {
      display: flex;
      align-items: center;
    }
  `,A([P({type:`BadgeColor`,options:Object.values($a),default:$a.Brand,description:`Semantic color. Use "error" for failures, "success" for passing states, "warning" for caution, "brand" (default) for neutral highlights.`})],to.prototype,`color`,void 0),A([P({type:`BadgeSize`,options:Object.values(eo),default:eo.Medium,description:`Controls padding and font size.`})],to.prototype,`size`,void 0),A([P({type:`boolean`,default:`false`,description:`Applies a fully rounded (pill) border radius.`})],to.prototype,`rounded`,void 0),A([P({type:`boolean`,default:`false`,description:`Square icon-only mode — equal padding on all sides.`})],to.prototype,`icon`,void 0),to=A([I(`quantic-badge`)],to);var no=class extends Zn{constructor(){super(...arguments),this.ariaLabel=null}render(){return j`
      <div class="group" part="group" role="group" aria-label=${this.ariaLabel??`Actions`}>
        <slot></slot>
      </div>
    `}};no.meta={tag:`quantic-action-group`,description:`A row of related actions sharing one accessible name and a consistent gap. Takes quantic-button, and quantic-dropdown-menu or quantic-popover when the trigger is a button. Wraps when the row runs out of width. Gap: --quantic-component-action-group-gap. Use quantic-button-bar when the buttons should read as one joined control.`,category:`action`,avoidWhen:[{when:`the buttons are segments of a single control`,useInstead:`quantic-button-bar`}],accessibility:{providedByComponent:[`role=group with one accessible name across the row`],requiredFromConsumer:[`an ariaLabel naming the group`]},slots:{"":{description:`quantic-button elements, or a quantic-dropdown-menu or quantic-popover triggered by one.`}},parts:{group:{description:`The flex container, for a column layout or a different alignment.`}},relatedTo:[`quantic-button`,`quantic-button-bar`,`quantic-dialog-actions`,`quantic-dropdown-menu`,`quantic-popover`]},no.styles=ct`
    :host {
      display: block;
    }

    .group {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(
        --quantic-component-action-group-gap,
        var(--quantic-spacing-3)
      );
    }
  `,A([P({type:`string`,attribute:`aria-label`,description:`Accessible name for the group.`})],no.prototype,`ariaLabel`,void 0),no=A([I(`quantic-action-group`)],no);var ro=class extends Event{constructor(e,t,n,r){super(`context-request`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=n,this.subscribe=r??!1}};function io(e){return e}var ao=class{constructor(e,t,n,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,t.context!==void 0){let e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&=(this.unsubscribe(),void 0)}dispatchRequest(){this.host.dispatchEvent(new ro(this.context,this.host,this.t,this.subscribe))}},oo=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}},so=class extends Event{constructor(e,t){super(`context-provider`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}},co=class extends oo{constructor(e,t,n){super(t.context===void 0?n:t.initialValue),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:n}]of this.subscriptions)t.has(e)||(t.add(e),n.dispatchEvent(new ro(this.context,n,e,!0)));e.stopPropagation()},this.host=e,this.context=t.context===void 0?t:t.context,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener(`context-request`,this.onContextRequest),this.host.addEventListener(`context-provider`,this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new so(this.context,this.host))}};function lo({context:e}){return(t,n)=>{let r=new WeakMap;if(typeof n==`object`)return{get(){return t.get.call(this)},set(e){return r.get(this).setValue(e),t.set.call(this,e)},init(t){return r.set(this,new co(this,{context:e,initialValue:t})),t}};{t.constructor.addInitializer((t=>{r.set(t,new co(t,{context:e}))}));let i=Object.getOwnPropertyDescriptor(t,n),a;if(i===void 0){let e=new WeakMap;a={get(){return e.get(this)},set(t){r.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=i.set;a={...i,set(t){r.get(this).setValue(t),e?.call(this,t)}}}Object.defineProperty(t,n,a);return}}}function uo({context:e,subscribe:t}){return(n,r)=>{typeof r==`object`?r.addInitializer((function(){new ao(this,{context:e,callback:e=>{n.set.call(this,e)},subscribe:t})})):n.constructor.addInitializer((n=>{new ao(n,{context:e,callback:e=>{n[r]=e},subscribe:t})}))}}var fo={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},po=io(`button-bar.size`),mo={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1,Home:`first`,End:`last`};function ho(e,t){if(!e.length)return null;if(t){let t=e.findIndex(e=>e.tabbable);if(t!==-1)return t}let n=e.findIndex(e=>e.active);return n===-1?0:n}function go(e,t,n){let r=mo[e];return r===void 0||n<2||t<0||t>=n?null:r===`first`?0:r===`last`?n-1:(t+r+n)%n}var _o=`quantic-button-bar-item, quantic-button-group-item`,vo=class extends Zn{constructor(){super(...arguments),this.size=fo.Medium,this.ariaLabel=null,this.hasSynced=!1,this.defaultLabel=`Button bar`}connectedCallback(){super.connectedCallback(),this.disabledObserver=new MutationObserver(()=>this.syncFocusStop()),this.disabledObserver.observe(this,{attributeFilter:[`disabled`],subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.disabledObserver?.disconnect(),this.disabledObserver=void 0}get items(){return[...this.querySelectorAll(_o)].filter(e=>e.parentElement===this&&!e.disabled)}setFocusStop(e,t){e.forEach((e,n)=>{e.tabbable=n===t})}syncFocusStop(){let e=this.items,t=ho(e,this.hasSynced);t!==null&&(this.hasSynced=!0,this.setFocusStop(e,t))}handleFocusIn(e){let t=this.items,n=t.findIndex(t=>t.contains(e.target));n!==-1&&this.setFocusStop(t,n)}handleKeydown(e){let t=this.items,n=t.findIndex(t=>t.contains(e.target)),r=go(e.key,n,t.length);r!==null&&(e.preventDefault(),this.setFocusStop(t,r),t[r].focus())}render(){return j`
      <div
        class="container"
        role="toolbar"
        aria-label=${this.ariaLabel??this.defaultLabel}
        @keydown=${this.handleKeydown}
        @focusin=${this.handleFocusIn}
      >
        <slot @slotchange=${()=>this.syncFocusStop()}></slot>
      </div>
    `}};vo.meta={tag:`quantic-button-bar`,description:`Toolbar of related buttons joined into one cohesive control, with shared sizing. Use for switching between views or modes, and for a compact run of icon actions. Items carry aria-pressed via active, so a set can behave as exclusive options or as independent toggles. Focus follows the toolbar pattern: one tab stop, arrow keys move between items, Home and End jump to the ends. Prefer quantic-button for a standalone action, and quantic-tabs when each segment reveals a panel.`,category:`action`,avoidWhen:[{when:`the buttons are unrelated actions rather than segments of one control`,useInstead:`quantic-action-group`}],accessibility:{providedByComponent:[`one accessible name for the bar`,`arrow keys move between items`],requiredFromConsumer:[`an ariaLabel naming what the bar controls`]},slots:{"":{description:`One or more quantic-button-bar-item elements.`}},relatedTo:[`quantic-button`]},vo.styles=ct`
    :host {
      --quantic-internal-button-bar-item-padding-block: var(--quantic-spacing-2);
      --quantic-internal-button-bar-item-padding-inline: var(--quantic-spacing-3);
      --quantic-internal-button-bar-item-font-size: var(--quantic-font-size-body-sm);
      --quantic-internal-button-bar-item-line-height: var(--quantic-line-height-body-sm);
      --quantic-component-button-bar-item-max-width: var(--quantic-width-xxs);
      --quantic-component-button-bar-border-radius: var(--quantic-radius-md);
      --quantic-component-button-bar-border-color: var(
        --quantic-border-primary
      );

      max-width: 100%;
      display: inline-flex;
      overflow: visible;
    }

    .container {
      display: inline-flex;
      align-items: stretch;
      overflow: hidden;
      border: 1px solid var(--quantic-component-button-bar-border-color);
      border-radius: var(--quantic-component-button-bar-border-radius);
    }
  `,A([lo({context:po}),P({type:`ButtonBarSize`,options:Object.values(fo),default:fo.Medium,description:`Size applied to all child items via context.`})],vo.prototype,`size`,void 0),A([P({type:`string`,attribute:`aria-label`,description:`Accessible label for the group.`})],vo.prototype,`ariaLabel`,void 0),vo=A([I(`quantic-button-bar`)],vo);var yo=class extends Zn{constructor(){super(...arguments),this.tabbable=!0,this.disabled=!1,this.active=!1,this.ariaLabel=null}focus(e){this.innerButton?.focus(e)}render(){return j`
      <button
        type="button"
        class=${mr({main:!0,[`size--${this.size}`]:!!this.size,"is-active":this.active})}
        tabindex=${this.disabled||!this.tabbable?-1:0}
        ?disabled=${this.disabled}
        aria-pressed=${this.active?`true`:`false`}
        aria-label=${hr(this.ariaLabel??void 0)}
      >
        <div class="content">
          <slot></slot>
        </div>
      </button>
    `}};yo.meta={tag:`quantic-button-bar-item`,description:`Single segment within a quantic-button-bar. Renders as a native button with shared sizing from the parent context and a pressed state via active.`,category:`action`,subComponentOf:`quantic-button-bar`,slots:{"":{description:`Button label or icon content.`}},relatedTo:[`quantic-button-bar`,`quantic-button`]},yo.styles=ct`
    :host {
      display: inline-flex;
      align-items: stretch;
    }

    :host([disabled]) {
      pointer-events: none;
      opacity: 0.5;
    }

    :host(:focus-within) {
      position: relative;
      z-index: 1;
    }

    .main {
      position: relative;
      appearance: none;
      background-color: transparent;
      border: none;
      border-right: 1px solid var(--quantic-border-primary);
      font-family: var(--quantic-font-family-body);
      font-weight: var(--quantic-font-weight-semibold);
      white-space: nowrap;
      text-decoration: none;
      text-align: center;
      display: block;
      width: 100%;
      height: 100%;
      color: var(--quantic-text-primary);
      cursor: pointer;
      outline: none;
      box-sizing: border-box;
      padding: var(
          --quantic-component-button-bar-padding-block,
          var(--quantic-internal-button-bar-item-padding-block)
        )
        var(
          --quantic-component-button-bar-padding-inline,
          var(--quantic-internal-button-bar-item-padding-inline)
        );
      font-size: var(
        --quantic-component-button-bar-font-size,
        var(--quantic-internal-button-bar-item-font-size)
      );
      line-height: var(
        --quantic-component-button-bar-line-height,
        var(--quantic-internal-button-bar-item-line-height)
      );
      transition:
        background-color 0.2s ease-in-out,
        color 0.2s ease-in-out;
    }

    :host(:first-of-type) .main {
      border-top-left-radius: var(
        --quantic-component-button-bar-border-radius,
        var(--quantic-radius-md)
      );
      border-bottom-left-radius: var(
        --quantic-component-button-bar-border-radius,
        var(--quantic-radius-md)
      );
    }

    :host(:last-of-type) .main {
      border-right: none;
      border-top-right-radius: var(
        --quantic-component-button-bar-border-radius,
        var(--quantic-radius-md)
      );
      border-bottom-right-radius: var(
        --quantic-component-button-bar-border-radius,
        var(--quantic-radius-md)
      );
    }

    :host(:first-of-type:last-of-type) .main {
      border-radius: var(--quantic-component-button-bar-border-radius, var(--quantic-radius-sm));
    }

    .main::before {
      content: '';
      pointer-events: none;
      display: block;
      position: absolute;
      inset: 0;
      border-radius: var(--quantic-radius-sm);
      border: 2px solid var(--quantic-focus-ring);
      transition: all 0.2s ease-in-out;
      opacity: 0;
    }

    .main:focus-visible::before {
      inset: 2px;
      opacity: 1;
    }

    .main:hover {
      background-color: var(--quantic-bg-secondary-hover);
    }

    .content {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: var(--quantic-component-button-bar-item-max-width);
    }

    .is-active {
      background-color: var(--quantic-bg-active);
    }

    .size--xs {
      --quantic-internal-button-bar-item-padding-block: var(--quantic-spacing-1);
      --quantic-internal-button-bar-item-padding-inline: var(--quantic-spacing-1);
      --quantic-internal-button-bar-item-font-size: var(--quantic-font-size-body-xs);
      --quantic-internal-button-bar-item-line-height: var(--quantic-line-height-body-xs);
    }

    .size--sm {
      --quantic-internal-button-bar-item-padding-block: var(--quantic-spacing-1);
      --quantic-internal-button-bar-item-padding-inline: var(--quantic-spacing-2);
      --quantic-internal-button-bar-item-font-size: var(--quantic-font-size-body-xs);
      --quantic-internal-button-bar-item-line-height: var(--quantic-line-height-body-xs);
    }

    .size--md {
      --quantic-internal-button-bar-item-padding-block: var(--quantic-spacing-2);
      --quantic-internal-button-bar-item-padding-inline: var(--quantic-spacing-3);
      --quantic-internal-button-bar-item-font-size: var(--quantic-font-size-body-sm);
      --quantic-internal-button-bar-item-line-height: var(--quantic-line-height-body-sm);
    }

    .size--lg {
      --quantic-internal-button-bar-item-padding-block: 10px;
      --quantic-internal-button-bar-item-padding-inline: var(--quantic-spacing-3);
      --quantic-internal-button-bar-item-font-size: var(--quantic-font-size-body-md);
      --quantic-internal-button-bar-item-line-height: var(--quantic-line-height-body-md);
    }

    ::slotted(*) {
      display: flex;
      align-items: center;
    }
  `,A([uo({context:po,subscribe:!0})],yo.prototype,`size`,void 0),A([vn()],yo.prototype,`tabbable`,void 0),A([bn(`button`)],yo.prototype,`innerButton`,void 0),A([P({type:`boolean`,default:`false`,description:`Prevents interaction and reduces opacity.`,reflect:!0})],yo.prototype,`disabled`,void 0),A([P({type:`boolean`,default:`false`,description:`Marks this item as the currently selected/active option.`,reflect:!0})],yo.prototype,`active`,void 0),A([P({type:`string`,attribute:`aria-label`,description:`Accessible label for the inner button. Required when the item holds only an icon.`})],yo.prototype,`ariaLabel`,void 0),yo=A([I(`quantic-button-bar-item`)],yo);var bo={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},xo=class extends Ha(Zn){constructor(){super(),this.checked=!1,this.required=!1,this.disabled=!1,this.invalid=!1,this.indeterminate=!1,this.label=``,this.name=``,this.size=bo.Medium,this.defaultChecked=!1,this.defaultIndeterminate=!1,this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.defaultChecked=this.hasAttribute(`checked`),this.defaultIndeterminate=this.hasAttribute(`indeterminate`)}forwardNative(e){let t=e.target;this.checked=t.checked,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}updated(e){super.updated(e);let t=this.renderRoot.querySelector(`input`);t&&(t.indeterminate=this.indeterminate,e.has(`checked`)&&(t.checked=this.checked)),e.has(`checked`)&&this.internals.setFormValue(this.checked?`on`:null)}dispatchValueChanged(e){this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{checked:this.checked,indeterminate:this.indeterminate},bubbles:!0,composed:!0}))}formResetCallback(){let e=this.renderRoot.querySelector(`input`);this.checked=this.defaultChecked,this.indeterminate=this.defaultIndeterminate,this.internals.setFormValue(this.defaultChecked?`on`:null),e&&(e.checked=this.defaultChecked,e.indeterminate=this.defaultIndeterminate)}formStateRestoreCallback(e){this.checked=e===`on`,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}get computedLabel(){return this.ariaLabel||this.label}render(){let e=mr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({label:this.computedLabel,invalid:this.invalid});return j`
      <label class=${e}>
        <input
          type="checkbox"
          name=${this.name}
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-label=${t.label}
          aria-description=${t.description}
          aria-invalid=${t.invalid}
          @change=${this.dispatchValueChanged}
          @click=${this.forwardNative}
          @keydown=${this.forwardNative}
          @keyup=${this.forwardNative}
          @focus=${this.forwardNative}
          @blur=${this.forwardNative}
          @input=${this.forwardNative}
        />
        <div class="box">
          <svg
            class="checkmark"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M10 3L4.5 8.5L2 6"
              stroke="currentColor"
              stroke-width="1.6666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg class="dashmark" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 6H9.5"
              stroke="currentColor"
              stroke-width="1.66666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <slot><span class="label">${this.label}</span></slot>
      </label>
    `}};xo.meta={tag:`quantic-checkbox`,description:`Form-associated checkbox for selecting one or more options from a set. Supports checked, indeterminate, and disabled states with full form integration.`,category:`form`,avoidWhen:[{when:`the control applies a setting immediately rather than on submit`,useInstead:`quantic-toggle`}],accessibility:{providedByComponent:[`form association`,`Space toggles`,`checked and indeterminate state reflected`],requiredFromConsumer:[`a label, via the label prop or by wrapping in quantic-field`]},slots:{"":{description:`Label content. Falls back to the label property if empty.`}},relatedTo:[`quantic-field`,`quantic-checkbox-group`]},xo.formAssociated=!0,xo.styles=ct`
    :host {
      display: inline-flex;
      align-items: center;
      font-family: var(--quantic-font-family-body);
      font-size: var(--quantic-font-size-body-md);
    }

    .main {
      position: relative;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      gap: var(--quantic-spacing-2);
      --checkbox-size: var(--quantic-spacing-5);
    }

    :host([disabled]) .main {
      cursor: not-allowed;
    }

    .main.size--xs {
      --checkbox-size: calc(var(--quantic-spacing-3) + 2px);
      --label-font-size: var(--quantic-font-size-body-xs);
    }

    .main.size--sm {
      --checkbox-size: var(--quantic-spacing-4);
      --label-font-size: var(--quantic-font-size-body-sm);
    }

    .main.size--md {
      --checkbox-size: var(--quantic-spacing-5);
      --label-font-size: var(--quantic-font-size-body-md);
    }

    .main.size--lg {
      --checkbox-size: var(--quantic-spacing-6);
      --label-font-size: var(--quantic-font-size-body-lg);
    }

    input {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    .box {
      position: relative;
      width: var(--checkbox-size);
      height: var(--checkbox-size);
      border: 1px solid var(--quantic-border-primary);
      border-radius: var(--quantic-radius-xs);
      background-color: var(--quantic-bg-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    /* Checked state */
    .checkmark,
    .dashmark {
      position: absolute;
      inset: var(--quantic-spacing-0-5);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    input:checked + .box,
    :host([indeterminate]) .box {
      background-color: var(--quantic-bg-brand-primary);
    }

    input:checked + .box .checkmark {
      opacity: 1;
      color: var(--quantic-text-primary);
    }

    :host([indeterminate]) .box .checkmark {
      opacity: 0;
    }

    :host([indeterminate]) .box .dashmark {
      opacity: 1;
      color: var(--quantic-text-primary);
    }

    /* Focus state */
    .box::before {
      content: '';
      display: block;
      position: absolute;
      inset: 0;
      opacity: 0;
      border-radius: var(--quantic-radius-xs);
      border: 2px solid transparent;
    }

    input:focus-visible + .box::before {
      inset: -4px;
      opacity: 1;
      border-color: var(--quantic-focus-ring);
    }

    /* Invalid state */
    :host([invalid]) .box {
      border-color: var(--quantic-border-error);
    }

    :host([invalid]) .box::before {
      border-color: var(--quantic-border-error);
    }

    .label {
      color: var(--quantic-text-primary);
      font-size: var(--label-font-size);
    }

    input:disabled ~ .label {
      color: var(--quantic-fg-disabled-subtle);
      cursor: not-allowed;
    }

    input:disabled + .box {
      background-color: var(--quantic-bg-disabled);
      border-color: var(--quantic-border-disabled);
    }

    input:disabled + .box .checkmark,
    input:disabled + .box .dashmark {
      color: var(--quantic-fg-disabled-subtle);
    }
  `,A([P({type:`boolean`,default:`false`,reflect:!0,description:`Whether the checkbox is checked.`})],xo.prototype,`checked`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Marks the checkbox as required for form validation.`})],xo.prototype,`required`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction and applies disabled styling.`})],xo.prototype,`disabled`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling when the field fails validation.`})],xo.prototype,`invalid`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Shows an indeterminate (partial-selection) state.`})],xo.prototype,`indeterminate`,void 0),A([P({type:`string`,default:`''`,description:`Visible label text. Overridden by slotted content.`,copyRule:`control-label`})],xo.prototype,`label`,void 0),A([P({type:`string`,default:`''`,description:`Name submitted with form data.`})],xo.prototype,`name`,void 0),A([P({type:`CheckboxSize`,options:Object.values(bo),default:bo.Medium,description:`Controls the size of the checkbox box and label text.`})],xo.prototype,`size`,void 0),xo=A([F(`value-changed`,{description:`Fired whenever the input's value is updated (on input & change).`,detail:`{ checked: boolean, indeterminate: boolean }`}),F(`input`,{forwarded:!0}),F(`change`,{forwarded:!0}),F(`focus`,{forwarded:!0}),F(`blur`,{forwarded:!0}),F(`keydown`,{forwarded:!0}),F(`keyup`,{forwarded:!0}),I(`quantic-checkbox`)],xo);var So={Small:`sm`,Medium:`md`,Large:`lg`,XLarge:`xl`},Co={None:`none`,Subtle:`subtle`,Opaque:`opaque`},wo={Dialog:`dialog`,AlertDialog:`alertdialog`},To=class extends Zn{constructor(){super(...arguments),this.visible=!1,this.variant=Co.Opaque}render(){return j`<div class="backdrop backdrop--${this.variant}"></div>`}};To.meta={tag:`quantic-dialog-backdrop`,description:`Semi-transparent overlay rendered behind quantic-dialog. Internal sub-component — do not use directly.`,category:`feedback`,relatedTo:[`quantic-dialog`]},To.styles=ct`
    :host {
      position: fixed;
      inset: 0;
      z-index: var(--quantic-component-dialog-backdrop-z-index, 9998);
      opacity: 0;
      transition: opacity var(--quantic-transition-duration-normal, 0.2s)
        var(--quantic-transition-timing-ease, ease-in-out);
      pointer-events: none;
    }

    :host([visible]) {
      opacity: 1;
      pointer-events: auto;
    }

    .backdrop {
      width: 100%;
      height: 100%;
    }

    .backdrop--subtle {
      background-color: rgb(
        var(--quantic-component-dialog-backdrop-color) / 0.7
      );
    }

    .backdrop--opaque {
      background-color: rgb(
        var(--quantic-component-dialog-backdrop-color) / 0.8
      );
      backdrop-filter: blur(4px);
    }

    .backdrop--none {
      background-color: transparent;
      pointer-events: none;
    }
  `,A([P({type:`boolean`,default:`false`,reflect:!0,description:`Whether the backdrop is visible.`})],To.prototype,`visible`,void 0),A([P({type:`DialogBackdrop`,options:Object.values(Co),default:Co.Opaque,description:`Visual style of the backdrop overlay.`})],To.prototype,`variant`,void 0),To=A([I(`quantic-dialog-backdrop`)],To);var Eo=class extends tr(Zn,[`pretitle`,`subtitle`]){constructor(){super(...arguments),this.level=`2`}render(){return j`
      <div class="main">
        <hgroup>
          <slot name="pretitle" class="pretitle"></slot>
          <div class="title" role="heading" aria-level=${this.level}>
            <slot></slot>
          </div>
          <slot name="subtitle" class="subtitle"></slot>
        </hgroup>
      </div>
    `}};Eo.meta={tag:`quantic-dialog-title`,description:`Header/title bar sub-component for quantic-dialog. Renders a semantic heading with optional pretitle and subtitle slots.`,category:`feedback`,subComponentOf:`quantic-dialog`,slots:{pretitle:{description:`Small label displayed above the main title.`,copyRule:`title-fragment`},"":{description:`Main title text.`},subtitle:{description:`Supplementary text displayed below the title.`,copyRule:`title-fragment`}},relatedTo:[`quantic-dialog`]},Eo.styles=ct`
    :host {
      display: block;
      --quantic-component-dialog-title-gap: var(--quantic-spacing-1-5);
      --quantic-component-dialog-title-font-size: var(
        --quantic-font-size-body-lg
      );
    }

    .main {
      display: flex;
      flex-direction: column;
      gap: var(--quantic-spacing-2);
    }

    hgroup {
      display: flex;
      flex-direction: column;
      gap: var(--quantic-component-dialog-title-gap);
      margin: 0;
    }

    .pretitle {
      display: block;
      color: var(--quantic-text-secondary);
    }

    .title {
      display: block;
      color: var(--quantic-text-primary);
      font-size: var(--quantic-component-dialog-title-font-size);
      font-weight: var(--quantic-font-weight-semibold);
    }

    .subtitle {
      display: block;
      color: var(--quantic-text-secondary);
    }

    [hidden] {
      display: none;
    }
  `,A([P({type:`"1" | "2" | "3" | "4" | "5" | "6"`,default:`"2"`,description:`Heading level for the title element.`})],Eo.prototype,`level`,void 0),Eo=A([I(`quantic-dialog-title`)],Eo),no.ensureDefined();var Do=class extends Zn{render(){return sr`
      <quantic-action-group aria-label="">
        <slot></slot>
      </quantic-action-group>
    `}};Do.meta={tag:`quantic-dialog-actions`,description:`Footer actions bar for quantic-dialog. Lays action buttons out as a quantic-action-group, flush to the right.`,category:`feedback`,subComponentOf:`quantic-dialog`,slots:{"":{description:`Action buttons, typically quantic-button elements.`}},relatedTo:[`quantic-dialog`,`quantic-button`,`quantic-action-group`]},Do.styles=ct`
    :host {
      display: block;
    }

    quantic-action-group {
      width: fit-content;
      margin-inline-start: auto;
    }
  `,Do=A([I(`quantic-dialog-actions`)],Do);var Oo=[`input:not([inert]):not([inert] *)`,`select:not([inert]):not([inert] *)`,`textarea:not([inert]):not([inert] *)`,`a[href]:not([inert]):not([inert] *)`,`area[href]:not([inert]):not([inert] *)`,`button:not([inert]):not([inert] *)`,`[tabindex]:not(slot):not([inert]):not([inert] *)`,`audio[controls]:not([inert]):not([inert] *)`,`video[controls]:not([inert]):not([inert] *)`,`[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)`,`details>summary:first-of-type:not([inert]):not([inert] *)`,`details:not([inert]):not([inert] *)`],ko=Oo.join(`,`),Ao=typeof Element>`u`,jo=Ao?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Mo=!Ao&&Element.prototype.getRootNode?function(e){return e==null||e.getRootNode==null?void 0:e.getRootNode()}:function(e){return e?.ownerDocument},No=function(e,t){t===void 0&&(t=!0);var n=e==null||e.getAttribute==null?void 0:e.getAttribute(`inert`);return n===``||n===`true`||t&&e&&(typeof e.closest==`function`?e.closest(`[inert]`):No(e.parentNode))},Po=function(e){var t,n=e==null||e.getAttribute==null||(t=e.getAttribute(`contenteditable`))==null?void 0:t.toLowerCase();return n===``||n===`true`||n===`plaintext-only`},Fo=function(e,t,n){if(No(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(ko));return t&&jo.call(e,ko)&&r.unshift(e),r=r.filter(n),r},Io=function(e,t,n){for(var r=[],i=Array.from(e);i.length;){var a=i.shift();if(!No(a,!1)){if(a.tagName===`SLOT`){var o=a.assignedElements(),s=Io(o.length?o:a.children,!0,n);n.flatten?r.push.apply(r,s):r.push({scopeParent:a,candidates:s})}else{jo.call(a,ko)&&n.filter(a)&&(t||!e.includes(a))&&r.push(a);var c=a.shadowRoot||typeof n.getShadowRoot==`function`&&n.getShadowRoot(a),l=!No(c,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(a));if(c&&l){var u=Io(c===!0?a.children:c.children,!0,n);n.flatten?r.push.apply(r,u):r.push({scopeParent:a,candidates:u})}else i.unshift.apply(i,a.children)}}}return r},Lo=function(e){return!isNaN(parseInt(e.getAttribute(`tabindex`),10))},Ro=function(e){if(!e)throw Error(`No node provided`);return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||Po(e))&&!Lo(e)?0:e.tabIndex},zo=function(e,t){var n=Ro(e);return n<0&&t&&!Lo(e)?0:n},Bo=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Vo=function(e){return e.tagName===`INPUT`},Ho=function(e){return Vo(e)&&e.type===`hidden`},V=function(e){return e.tagName===`DETAILS`&&Array.prototype.slice.apply(e.children).some(function(e){return e.tagName===`SUMMARY`})},H=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},Uo=function(e){if(!e.name)return!0;var t=e.form||Mo(e),n=function(e){return t.querySelectorAll(`input[type="radio"][name="`+e+`"]`)},r;if(typeof window<`u`&&window.CSS!==void 0&&typeof window.CSS.escape==`function`)r=n(window.CSS.escape(e.name));else try{r=n(e.name)}catch(e){return console.error(`Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s`,e.message),!1}var i=H(r,e.form);return!i||i===e},Wo=function(e){return Vo(e)&&e.type===`radio`},Go=function(e){return Wo(e)&&!Uo(e)},Ko=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return n===0&&r===0},qo=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if(n===`full-native`&&`checkVisibility`in e)return!e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});var i=getComputedStyle(e).visibility;if(i===`hidden`||i===`collapse`)return!0;var a=jo.call(e,`details>summary:first-of-type`)?e.parentElement:e;if(jo.call(a,`details:not([open]) *`))return!0;if(!n||n===`full`||n===`full-native`||n===`legacy-full`){if(typeof r==`function`){for(var o=e;e;){var s=e.parentElement,c=Mo(e);if(s&&!s.shadowRoot&&r(s)===!0)return Ko(e);e=e.assignedSlot?e.assignedSlot:!s&&c!==e.ownerDocument?c.host:s}e=o}if(e.isConnected)return!e.getClientRects().length;if(n!==`legacy-full`)return!0}else if(n===`non-zero-area`)return Ko(e);return!1},Jo=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName===`FIELDSET`&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if(r.tagName===`LEGEND`)return jo.call(t,`fieldset[disabled] *`)?!0:!r.contains(e)}return!0}t=t.parentElement}return!1},Yo=function(e,t){return!(t.disabled||Ho(t)||qo(t,e)||V(t)||Jo(t))},Xo=function(e,t){return!(Go(t)||Ro(t)<0||!Yo(e,t))},Zo=function(e){var t=parseInt(e.getAttribute(`tabindex`),10);return!!(isNaN(t)||t>=0)},Qo=function(e){var t=[],n=[];return e.forEach(function(e,r){var i=!!e.scopeParent,a=i?e.scopeParent:e,o=zo(a,i),s=i?Qo(e.candidates):a;o===0?i?t.push.apply(t,s):t.push(a):n.push({documentOrder:r,tabIndex:o,item:e,isScope:i,content:s})}),n.sort(Bo).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(t)},$o=function(e,t){return t||={},Qo(t.getShadowRoot?Io([e],t.includeContainer,{filter:Xo.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Zo}):Fo(e,t.includeContainer,Xo.bind(null,t)))},es=function(e,t){return t||={},t.getShadowRoot?Io([e],t.includeContainer,{filter:Yo.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):Fo(e,t.includeContainer,Yo.bind(null,t))},ts=function(e,t){if(t||={},!e)throw Error(`No node provided`);return jo.call(e,ko)!==!1&&Xo(t,e)},ns=Oo.concat(`iframe:not([inert]):not([inert] *)`).join(`,`),rs=function(e,t){if(t||={},!e)throw Error(`No node provided`);return jo.call(e,ns)!==!1&&Yo(t,e)};function is(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function as(e){if(Array.isArray(e))return is(e)}function os(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=hs(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function ss(e,t,n){return(t=ms(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cs(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ls(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function us(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ds(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?us(Object(n),!0).forEach(function(t){ss(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):us(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function fs(e){return as(e)||cs(e)||hs(e)||ls()}function ps(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ms(e){var t=ps(e,`string`);return typeof t==`symbol`?t:t+``}function hs(e,t){if(e){if(typeof e==`string`)return is(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?is(e,t):void 0}}var gs={getActiveTrap:function(e){return e?.length>0?e[e.length-1]:null},activateTrap:function(e,t){t!==gs.getActiveTrap(e)&&gs.pauseTrap(e);var n=e.indexOf(t);n===-1||e.splice(n,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);n!==-1&&e.splice(n,1),gs.unpauseTrap(e)},pauseTrap:function(e){gs.getActiveTrap(e)?._setPausedState(!0)},unpauseTrap:function(e){var t=gs.getActiveTrap(e);t&&!t._isManuallyPaused()&&t._setPausedState(!1)}},_s=function(e){return e.tagName&&e.tagName.toLowerCase()===`input`&&typeof e.select==`function`},vs=function(e){return e?.key===`Escape`||e?.key===`Esc`||e?.keyCode===27},ys=function(e){return e?.key===`Tab`||e?.keyCode===9},bs=function(e){return ys(e)&&!e.shiftKey},xs=function(e){return ys(e)&&e.shiftKey},Ss=function(e){return setTimeout(e,0)},Cs=function(e){var t=[...arguments].slice(1);return typeof e==`function`?e.apply(void 0,t):e},ws=function(e){return e.target.shadowRoot&&typeof e.composedPath==`function`?e.composedPath()[0]:e.target},Ts=[],Es=function(e,t){var n=t?.document||document,r=t?.trapStack||Ts,i=ds({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isolateSubtrees:!1,isKeyForward:bs,isKeyBackward:xs},t),a={containers:[],containerGroups:[],tabbableGroups:[],adjacentElements:new Set,alreadySilent:new Set,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},o,s=function(e,t,n){return e&&e[t]!==void 0?e[t]:i[n||t]},c=function(e,t){var n=typeof t?.composedPath==`function`?t.composedPath():void 0;return a.containerGroups.findIndex(function(t){var r=t.container,i=t.tabbableNodes;return r.contains(e)||n?.includes(r)||i.find(function(t){return t===e})})},l=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.hasFallback,a=r!==void 0&&r,o=t.params,s=o===void 0?[]:o,c=i[e];if(typeof c==`function`&&(c=c.apply(void 0,fs(s))),c===!0&&(c=void 0),!c){if(c===void 0||c===!1)return c;throw Error(`\`${e}\` was specified but was not a node, or did not return a node`)}var l=c;if(typeof c==`string`){try{l=n.querySelector(c)}catch(t){throw Error(`\`${e}\` appears to be an invalid selector; error="${t.message}"`)}if(!l&&!a)throw Error(`\`${e}\` as selector refers to no known node`)}return l},u=function(){var e=l(`initialFocus`,{hasFallback:!0});if(e===!1)return!1;if(e===void 0||e&&!rs(e,i.tabbableOptions)){if(c(n.activeElement)>=0)e=n.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||l(`fallbackFocus`)}}else e===null&&(e=l(`fallbackFocus`));if(!e)throw Error(`Your focus-trap needs to have at least one focusable element`);return e},d=function(){if(a.containerGroups=a.containers.map(function(e){var t=$o(e,i.tabbableOptions),n=es(e,i.tabbableOptions),r=t.length>0?t[0]:void 0,a=t.length>0?t[t.length-1]:void 0,o=n.find(function(e){return ts(e)}),s=n.slice().reverse().find(function(e){return ts(e)});return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:!!t.find(function(e){return Ro(e)>0}),firstTabbableNode:r,lastTabbableNode:a,firstDomTabbableNode:o,lastDomTabbableNode:s,nextTabbableNode:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=t.indexOf(e);return i<0?r?n.slice(n.indexOf(e)+1).find(function(e){return ts(e)}):n.slice(0,n.indexOf(e)).reverse().find(function(e){return ts(e)}):t[i+(r?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!l(`fallbackFocus`))throw Error(`Your focus-trap must have at least one container with at least one tabbable node in it at all times`);if(a.containerGroups.find(function(e){return e.posTabIndexesFound})&&a.containerGroups.length>1)throw Error(`At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.`)},f=function(e){var t=e.activeElement;if(t)return t.shadowRoot&&t.shadowRoot.activeElement!==null?f(t.shadowRoot):t},p=function(e){e!==!1&&e!==f(document)&&(!e||!e.focus?p(u()):(e.focus({preventScroll:!!i.preventScroll}),a.mostRecentlyFocusedNode=e,_s(e)&&e.select()))},m=function(e){var t=l(`setReturnFocus`,{params:[e]});return t||t!==!1&&e},h=function(e){var t=e.target,n=e.event,r=e.isBackward,o=r!==void 0&&r;t||=ws(n),d();var s=null;if(a.tabbableGroups.length>0){var u=c(t,n),f=u>=0?a.containerGroups[u]:void 0;if(u<0)s=o?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(o){var p=a.tabbableGroups.findIndex(function(e){var n=e.firstTabbableNode;return t===n});if(p<0&&(f.container===t||rs(t,i.tabbableOptions)&&!ts(t,i.tabbableOptions)&&!f.nextTabbableNode(t,!1))&&(p=u),p>=0){var m=p===0?a.tabbableGroups.length-1:p-1,h=a.tabbableGroups[m];s=Ro(t)>=0?h.lastTabbableNode:h.lastDomTabbableNode}else ys(n)||(s=f.nextTabbableNode(t,!1))}else{var g=a.tabbableGroups.findIndex(function(e){var n=e.lastTabbableNode;return t===n});if(g<0&&(f.container===t||rs(t,i.tabbableOptions)&&!ts(t,i.tabbableOptions)&&!f.nextTabbableNode(t))&&(g=u),g>=0){var _=g===a.tabbableGroups.length-1?0:g+1,v=a.tabbableGroups[_];s=Ro(t)>=0?v.firstTabbableNode:v.firstDomTabbableNode}else ys(n)||(s=f.nextTabbableNode(t))}}else s=l(`fallbackFocus`);return s},g=function(e){c(ws(e),e)>=0||(Cs(i.clickOutsideDeactivates,e)?o.deactivate({returnFocus:i.returnFocusOnDeactivate}):Cs(i.allowOutsideClick,e)||e.preventDefault())},_=function(e){var t=ws(e),n=c(t,e)>=0;if(n||t instanceof Document)n&&(a.mostRecentlyFocusedNode=t);else{e.stopImmediatePropagation();var r,o=!0;if(a.mostRecentlyFocusedNode){if(Ro(a.mostRecentlyFocusedNode)>0){var s=c(a.mostRecentlyFocusedNode),l=a.containerGroups[s].tabbableNodes;if(l.length>0){var d=l.findIndex(function(e){return e===a.mostRecentlyFocusedNode});d>=0&&(i.isKeyForward(a.recentNavEvent)?d+1<l.length&&(r=l[d+1],o=!1):d-1>=0&&(r=l[d-1],o=!1))}}else a.containerGroups.some(function(e){return e.tabbableNodes.some(function(e){return Ro(e)>0})})||(o=!1)}else o=!1;o&&(r=h({target:a.mostRecentlyFocusedNode,isBackward:i.isKeyBackward(a.recentNavEvent)})),p(r||a.mostRecentlyFocusedNode||u())}a.recentNavEvent=void 0},v=function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];a.recentNavEvent=e;var n=h({event:e,isBackward:t});n&&(ys(e)&&e.preventDefault(),p(n))},y=function(e){(i.isKeyForward(e)||i.isKeyBackward(e))&&v(e,i.isKeyBackward(e))},b=function(e){vs(e)&&Cs(i.escapeDeactivates,e)!==!1&&(e.preventDefault(),o.deactivate())},x=function(e){c(ws(e),e)>=0||Cs(i.clickOutsideDeactivates,e)||Cs(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},S=function(){if(a.active)return gs.activateTrap(r,o),a.delayInitialFocusTimer=i.delayInitialFocus?Ss(function(){p(u())}):p(u()),n.addEventListener(`focusin`,_,!0),n.addEventListener(`mousedown`,g,{capture:!0,passive:!1}),n.addEventListener(`touchstart`,g,{capture:!0,passive:!1}),n.addEventListener(`click`,x,{capture:!0,passive:!1}),n.addEventListener(`keydown`,y,{capture:!0,passive:!1}),n.addEventListener(`keydown`,b),o},ee=function(e){a.active&&!a.paused&&o._setSubtreeIsolation(!1),a.adjacentElements.clear(),a.alreadySilent.clear();var t=new Set,n=new Set,r=os(e),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;t.add(s);for(var c=typeof ShadowRoot<`u`&&s.getRootNode()instanceof ShadowRoot,l=s;l;){t.add(l);var u=l.parentElement,d=[];u?d=u.children:!u&&c&&(d=l.getRootNode().children,u=l.getRootNode().host,c=typeof ShadowRoot<`u`&&u.getRootNode()instanceof ShadowRoot);var f=os(d),p;try{for(f.s();!(p=f.n()).done;){var m=p.value;n.add(m)}}catch(e){f.e(e)}finally{f.f()}l=u}}}catch(e){r.e(e)}finally{r.f()}t.forEach(function(e){n.delete(e)}),a.adjacentElements=n},C=function(){if(a.active)return n.removeEventListener(`focusin`,_,!0),n.removeEventListener(`mousedown`,g,!0),n.removeEventListener(`touchstart`,g,!0),n.removeEventListener(`click`,x,!0),n.removeEventListener(`keydown`,y,!0),n.removeEventListener(`keydown`,b),o},w=typeof window<`u`&&`MutationObserver`in window?new MutationObserver(function(e){e.some(function(e){return Array.from(e.removedNodes).some(function(e){return e===a.mostRecentlyFocusedNode})})&&p(u())}):void 0,te=function(){w&&(w.disconnect(),a.active&&!a.paused&&a.containers.map(function(e){w.observe(e,{subtree:!0,childList:!0})}))};return o={get active(){return a.active},get paused(){return a.paused},activate:function(e){if(a.active)return this;var t=s(e,`onActivate`),c=s(e,`onPostActivate`),l=s(e,`checkCanFocusTrap`),u=gs.getActiveTrap(r),p=!1;if(u&&!u.paused){var m;(m=u._setSubtreeIsolation)==null||m.call(u,!1),p=!0}try{l||d(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=f(n),t?.();var h=function(){l&&d(),S(),te(),i.isolateSubtrees&&o._setSubtreeIsolation(!0),c?.()};if(l)return l(a.containers.concat()).then(h,h),this;h()}catch(e){if(u===gs.getActiveTrap(r)&&p){var g;(g=u._setSubtreeIsolation)==null||g.call(u,!0)}throw e}return this},deactivate:function(e){if(!a.active)return this;var t=ds({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,a.paused||o._setSubtreeIsolation(!1),a.alreadySilent.clear(),C(),a.active=!1,a.paused=!1,te(),gs.deactivateTrap(r,o);var n=s(t,`onDeactivate`),c=s(t,`onPostDeactivate`),l=s(t,`checkCanReturnFocus`),u=s(t,`returnFocus`,`returnFocusOnDeactivate`);n?.();var d=function(){Ss(function(){u&&p(m(a.nodeFocusedBeforeActivation)),c?.()})};return u&&l?(l(m(a.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){return a.active?(a.manuallyPaused=!0,this._setPausedState(!0,e)):this},unpause:function(e){return!a.active||(a.manuallyPaused=!1,r[r.length-1]!==this)?this:this._setPausedState(!1,e)},updateContainerElements:function(e){return a.containers=[].concat(e).filter(Boolean).map(function(e){return typeof e==`string`?n.querySelector(e):e}),i.isolateSubtrees&&ee(a.containers),a.active&&(d(),i.isolateSubtrees&&!a.paused&&o._setSubtreeIsolation(!0)),te(),this}},Object.defineProperties(o,{_isManuallyPaused:{value:function(){return a.manuallyPaused}},_setPausedState:{value:function(e,t){if(a.paused===e)return this;if(a.paused=e,e){var n=s(t,`onPause`),r=s(t,`onPostPause`);n?.(),C(),te(),o._setSubtreeIsolation(!1),r?.()}else{var i=s(t,`onUnpause`),c=s(t,`onPostUnpause`);i?.(),o._setSubtreeIsolation(!0),d(),S(),te(),c?.()}return this}},_setSubtreeIsolation:{value:function(e){i.isolateSubtrees&&a.adjacentElements.forEach(function(t){if(e)switch(i.isolateSubtrees){case`aria-hidden`:(t.ariaHidden===`true`||t.getAttribute(`aria-hidden`)?.toLowerCase()===`true`)&&a.alreadySilent.add(t),t.setAttribute(`aria-hidden`,`true`);break;default:(t.inert||t.hasAttribute(`inert`))&&a.alreadySilent.add(t),t.setAttribute(`inert`,!0)}else if(!a.alreadySilent.has(t))switch(i.isolateSubtrees){case`aria-hidden`:t.removeAttribute(`aria-hidden`);break;default:t.removeAttribute(`inert`)}})}}}),o.updateContainerElements(e),o},Ds=500;To.ensureDefined(),L.ensureDefined(),Nr.ensureDefined();var Os=class extends tr(Zn,[`header`,`footer`]){constructor(){super(...arguments),this.open=!1,this.size=So.Medium,this.fullscreen=!1,this.showCloseButton=!0,this.backdrop=Co.Opaque,this.persistent=!1,this.role=wo.Dialog,this.ariaLabel=null,this.dialogId=Tr(`dialog`),this.headerId=Tr(`dialog-title`),this.originalOverflow=``,this.originalPaddingRight=``,this.backdropPointerDownOutside=!1,this.handleTriggerClick=()=>{this.show()},this.handleEscape=e=>{e.key===`Escape`&&this.open&&(e.stopPropagation(),this.persistent||this.hide())},this.handleBackdropPointerDown=e=>{this.backdropPointerDownOutside=e.target===this.wrapperElement},this.handleBackdropPointerUp=e=>{this.persistent||(this.backdropPointerDownOutside&&e.target===this.wrapperElement&&this.hide(),this.backdropPointerDownOutside=!1)},this.hide=async()=>{if(!this.open||this.persistent)return;let e=new Event(`before-close`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.addEventListener(`dialog-close`,this.hide),this.addEventListener(`keydown`,this.handleEscape)}disconnectedCallback(){if(super.disconnectedCallback(),this.removeEventListener(`dialog-close`,this.hide),this.removeEventListener(`keydown`,this.handleEscape),this.unlockBodyScroll(),this.focusTrap)try{this.focusTrap.deactivate()}catch(e){console.error(`Failed to deactivate focus trap:`,e)}finally{this.focusTrap=null}}updated(e){super.updated(e),e.has(`open`)&&(this.open?this._activate():e.get(`open`)&&this._deactivate())}get triggerElement(){return this.triggerSlot?.assignedElements({flatten:!0})[0]}get hasHeaderContent(){return this.headerSlot?.assignedNodes({flatten:!0}).some(e=>e.nodeType!==Node.TEXT_NODE||e.textContent?.trim())??!1}handleSlotChange(){let e=this.triggerElement;e&&(e.setAttribute(`aria-controls`,this.dialogId),e.setAttribute(`aria-haspopup`,`dialog`),e.setAttribute(`aria-expanded`,this.open?`true`:`false`))}lockBodyScroll(){if(typeof document>`u`)return;let e=window.innerWidth-document.documentElement.clientWidth;this.originalOverflow=document.body.style.overflow,this.originalPaddingRight=document.body.style.paddingRight,document.body.style.overflow=`hidden`,e>0&&(document.body.style.paddingRight=`${e}px`)}unlockBodyScroll(){typeof document<`u`&&(document.body.style.overflow=this.originalOverflow,document.body.style.paddingRight=this.originalPaddingRight)}updateTriggerAria(){let e=this.triggerElement;e&&e.setAttribute(`aria-expanded`,this.open?`true`:`false`)}async waitForDialogRender(){await this.updateComplete,await new Promise(e=>{let t=()=>{this.wrapperElement?.removeEventListener(`transitionend`,t),e()};this.wrapperElement?.addEventListener(`transitionend`,t),setTimeout(t,Ds)})}async show(){if(this.open)return;let e=new Event(`before-open`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!0)}async toggle(){this.open?await this.hide():await this.show()}async _activate(){if(this.updateTriggerAria(),this.lockBodyScroll(),this.backdropElement&&(await this.backdropElement.updateComplete,this.backdropElement.visible=!0),this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:!0},bubbles:!0,composed:!0})),await this.updateComplete,this.mainElement)try{this.focusTrap=Es(this.mainElement,{escapeDeactivates:!1,clickOutsideDeactivates:!1,allowOutsideClick:!0,returnFocusOnDeactivate:!0,fallbackFocus:this.mainElement,tabbableOptions:{getShadowRoot:!0}}),this.focusTrap.activate()}catch(e){console.error(`Failed to activate focus trap:`,e),this.focusTrap=null}await this.waitForDialogRender(),this.dispatchEvent(new Event(`after-open`,{bubbles:!0,composed:!0}))}async _deactivate(){if(this.updateTriggerAria(),this.focusTrap)try{this.focusTrap.deactivate()}catch(e){console.error(`Failed to deactivate focus trap:`,e)}finally{this.focusTrap=null}this.backdropElement&&(this.backdropElement.visible=!1),this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:!1},bubbles:!0,composed:!0})),await this.waitForDialogRender(),this.unlockBodyScroll(),this.dispatchEvent(new Event(`after-close`,{bubbles:!0,composed:!0}))}render(){return j`
      <div class="trigger" @click=${this.handleTriggerClick}>
        <slot name="trigger" @slotchange=${this.handleSlotChange}></slot>
      </div>
      <quantic-dialog-backdrop
        ?visible=${this.open}
        variant=${this.backdrop}
      ></quantic-dialog-backdrop>
      <div
        class=${mr({wrapper:!0,"wrapper--fullscreen":this.fullscreen})}
        @pointerdown=${this.handleBackdropPointerDown}
        @pointerup=${this.handleBackdropPointerUp}
      >
        <div
          class=${mr({main:!0,fullscreen:this.fullscreen,[`size--${this.size}`]:!this.fullscreen})}
          role=${this.role}
          aria-modal="true"
          aria-labelledby=${hr(this.hasHeaderContent?this.headerId:void 0)}
          aria-label=${hr(this.ariaLabel??void 0)}
          id=${this.dialogId}
          tabindex="-1"
        >
          ${this.showCloseButton&&!this.persistent?j`<quantic-button
                  class="close-button"
                  variant="ghost"
                  size="sm"
                  icon
                  @click=${this.hide}
                  aria-label="Close"
                >
                  <quantic-icon-lucide-x size="sm" class="close-icon"></quantic-icon-lucide-x>
                </quantic-button>`:``}

          <slot class="header" name="header" id=${this.headerId}></slot>

          <slot class="body"></slot>

          <slot class="footer" name="footer"></slot>
        </div>
      </div>
    `}};Os.meta={tag:`quantic-dialog`,description:`Modal overlay dialog with focus trap, scroll lock, and animated entrance. Use quantic-dialog-title in the header slot and quantic-dialog-actions in the footer slot.`,category:`feedback`,avoidWhen:[{when:`the dialog only confirms or cancels one action`,useInstead:`quantic-confirm-dialog`},{when:`the content is contextual and does not need to block the page`,useInstead:`quantic-popover`},{when:`the page should stay usable while the content is open, such as a detail or chat panel`,useInstead:`quantic-drawer`}],accessibility:{providedByComponent:[`focus trap while open`,`focus restored to the trigger on close`,`Escape dismisses`,`scroll lock`],requiredFromConsumer:[`a title, via quantic-dialog-title in the header slot or the ariaLabel prop`]},slots:{trigger:{description:`Element that opens the dialog when clicked.`},header:{description:`Dialog header — place quantic-dialog-title here.`},"":{description:`Main dialog body content.`},footer:{description:`Dialog footer — place quantic-dialog-actions here.`}},relatedTo:[`quantic-button`]},Os.styles=ct`
    :host {
      --quantic-component-dialog-z-index: 9999;
      --quantic-component-dialog-backdrop-z-index: 9998;
      --quantic-component-dialog-backdrop-color: var(--quantic-bg-primary-rgb);
      --quantic-component-dialog-bg: var(--quantic-bg-primary);
      --quantic-component-dialog-border-color: var(--quantic-border-secondary);
      --quantic-component-dialog-border-radius: var(--quantic-radius-lg);
      --quantic-internal-dialog-padding-inline: var(--quantic-spacing-6);
      --quantic-internal-dialog-padding-block: var(--quantic-spacing-6);
      --quantic-internal-dialog-gap: var(--quantic-spacing-5);
      --quantic-component-dialog-max-width-sm: var(--quantic-width-xs);
      --quantic-component-dialog-max-width-md: var(--quantic-width-md);
      --quantic-component-dialog-max-width-lg: var(--quantic-width-lg);
      --quantic-component-dialog-max-width-xl: var(--quantic-width-xl);
      --quantic-component-dialog-max-height: calc(100vh - 4rem);

      font-family: var(--quantic-font-family-body);
    }

    .wrapper {
      position: fixed;
      inset: 0;
      z-index: var(--quantic-component-dialog-z-index);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--quantic-spacing-4);
      opacity: 0;
      pointer-events: none;
      transition:
        opacity var(--quantic-transition-duration-normal, 0.2s)
          var(--quantic-transition-timing-ease, ease-in-out),
        transform var(--quantic-transition-duration-normal, 0.2s)
          var(--quantic-transition-timing-ease, ease-in-out);
    }

    :host([open]) .wrapper {
      opacity: 1;
      pointer-events: auto;
    }

    .main {
      position: relative;
      display: flex;
      gap: var(--quantic-component-dialog-gap, var(--quantic-internal-dialog-gap));
      flex-direction: column;
      container-name: box-container;
      container-type: inline-size;
      width: 100%;
      max-height: var(--quantic-component-dialog-max-height);
      background-color: var(--quantic-component-dialog-bg);
      border: 1px solid var(--quantic-component-dialog-border-color);
      border-radius: var(--quantic-component-dialog-border-radius);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07);
      box-sizing: border-box;
      padding-block: var(
        --quantic-component-dialog-padding-block,
        var(--quantic-internal-dialog-padding-block)
      );
      transform: scale(0.95);
      transition: transform var(--quantic-transition-duration-normal, 0.2s)
        var(--quantic-transition-timing-ease, ease-in-out);
    }

    :host([open]) .main {
      transform: none;
    }

    .size--sm {
      max-width: var(--quantic-component-dialog-max-width-sm);
      --quantic-internal-dialog-padding-inline: var(--quantic-spacing-4);
      --quantic-internal-dialog-padding-block: var(--quantic-spacing-4);
      --quantic-internal-dialog-gap: var(--quantic-spacing-3);
    }

    .size--md {
      max-width: var(--quantic-component-dialog-max-width-md);
      --quantic-internal-dialog-padding-inline: var(--quantic-spacing-6);
      --quantic-internal-dialog-padding-block: var(--quantic-spacing-6);
      --quantic-internal-dialog-gap: var(--quantic-spacing-4);
    }

    .size--lg {
      max-width: var(--quantic-component-dialog-max-width-lg);
      --quantic-internal-dialog-padding-inline: var(--quantic-spacing-6);
      --quantic-internal-dialog-padding-block: var(--quantic-spacing-6);
      --quantic-internal-dialog-gap: var(--quantic-spacing-5);
    }

    .size--xl {
      max-width: var(--quantic-component-dialog-max-width-xl);
      --quantic-internal-dialog-padding-inline: var(--quantic-spacing-8);
      --quantic-internal-dialog-padding-block: var(--quantic-spacing-8);
      --quantic-internal-dialog-gap: var(--quantic-spacing-6);
    }

    .wrapper--fullscreen {
      padding: 0;
    }

    .fullscreen {
      width: 100%;
      height: 100%;
      max-width: none;
      max-height: none;
      border-radius: 0;
    }

    .close-button {
      position: absolute;
      top: var(--quantic-spacing-2);
      right: var(--quantic-spacing-2);
    }

    .close-button:hover .close-icon,
    .close-button:focus .close-icon {
      color: var(--quantic-text-primary);
    }

    .close-icon {
      color: var(--quantic-text-tertiary);
      transition: color var(--quantic-transition-duration-fast, 0.15s);
    }

    .header,
    .body,
    .footer {
      display: block;
      padding-inline: var(
        --quantic-component-dialog-padding-inline,
        var(--quantic-internal-dialog-padding-inline)
      );
    }

    .body {
      overflow-y: auto;
      overflow-x: hidden;
      min-height: 0;
      flex: 1;
      margin-block: calc(-1 * var(--quantic-spacing-1));
      padding-block: var(--quantic-spacing-1);
    }

    .header,
    .footer {
      flex-shrink: 0;
    }

    [hidden] {
      display: none;
    }

    .trigger {
      display: contents;
    }
  `,A([P({type:`boolean`,default:`false`,reflect:!0,description:`Whether the dialog is visible.`})],Os.prototype,`open`,void 0),A([P({type:`DialogSize`,options:Object.values(So),default:So.Medium,description:`Maximum width of the dialog panel.`})],Os.prototype,`size`,void 0),A([P({type:`boolean`,default:`false`,description:`Expands the dialog to fill the viewport, ignoring size.`})],Os.prototype,`fullscreen`,void 0),A([P({type:`boolean`,default:`true`,description:`Shows a built-in close button in the top-right corner.`})],Os.prototype,`showCloseButton`,void 0),A([P({type:`DialogBackdrop`,options:Object.values(Co),default:Co.Opaque,description:`Style of the backdrop overlay.`})],Os.prototype,`backdrop`,void 0),A([P({type:`boolean`,default:`false`,description:`Prevents the dialog from being closed via Escape or backdrop click.`})],Os.prototype,`persistent`,void 0),A([P({type:`DialogRole`,options:Object.values(wo),default:wo.Dialog,description:`ARIA role for the dialog element. Use "alertdialog" for confirmation dialogs.`})],Os.prototype,`role`,void 0),A([P({type:`string`,attribute:`aria-label`,description:`Accessible label when the dialog has no visible heading.`})],Os.prototype,`ariaLabel`,void 0),A([bn(`quantic-dialog-backdrop`)],Os.prototype,`backdropElement`,void 0),A([bn(`.wrapper`)],Os.prototype,`wrapperElement`,void 0),A([bn(`.main`)],Os.prototype,`mainElement`,void 0),A([bn(`slot[name="trigger"]`)],Os.prototype,`triggerSlot`,void 0),A([bn(`slot[name="header"]`)],Os.prototype,`headerSlot`,void 0),Os=A([F(`open-changed`,{description:`Fired when the dialog open state changes.`,detail:`{ open: boolean }`}),F(`before-open`,{description:`Fired before the dialog opens.`}),F(`after-open`,{description:`Fired after the dialog opens and animations complete.`}),F(`before-close`,{description:`Fired before the dialog closes.`}),F(`after-close`,{description:`Fired after the dialog closes and animations complete.`}),I(`quantic-dialog`)],Os);var ks=class extends Zn{constructor(){super(...arguments),this.open=!1,this.heading=``,this.message=``,this.confirmText=`Confirm`,this.cancelText=`Cancel`,this.destructive=!1,this.loading=!1,this.persistent=!1,this.showCloseButton=!0,this.size=So.Small,this.handleConfirmClick=()=>{if(this.loading)return;let e=new Event(`confirm`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!1)},this.handleCancelClick=()=>{this.loading||(this.dispatchEvent(new Event(`cancel`,{bubbles:!0,composed:!0})),this.open=!1)},this.handleInnerBeforeClose=()=>{this.dispatchEvent(new Event(`cancel`,{bubbles:!0,composed:!0}))},this.handleInnerOpenChanged=e=>{let t=e.detail;this.open!==t.open&&(this.open=t.open)}}updated(e){super.updated(e),e.has(`open`)&&this.innerDialog&&(this.innerDialog.open=this.open)}get buttonSize(){return this.size===So.Large||this.size===So.XLarge?lr.Medium:lr.Small}render(){return j`
      <quantic-dialog
        .size=${this.size}
        .role=${wo.AlertDialog}
        ?persistent=${this.persistent||this.loading}
        ?show-close-button=${this.showCloseButton&&!this.loading}
        @before-close=${this.handleInnerBeforeClose}
        @open-changed=${this.handleInnerOpenChanged}
      >
        <slot name="trigger" slot="trigger"></slot>
        ${this.heading?j`<quantic-dialog-title slot="header" level="2">
              ${this.heading}
            </quantic-dialog-title>`:M}

        <div class="body">
          <slot>${this.message?j`<p>${this.message}</p>`:M}</slot>
        </div>

        <quantic-dialog-actions slot="footer">
          <quantic-button
            variant="${cr.Outline}"
            .size=${this.buttonSize}
            ?disabled=${this.loading}
            @click=${this.handleCancelClick}
          >
            ${this.cancelText}
          </quantic-button>
          <quantic-button
            variant="${cr.Primary}"
            .size=${this.buttonSize}
            ?destructive=${this.destructive}
            ?disabled=${this.loading}
            @click=${this.handleConfirmClick}
          >
            <slot name="confirm-icon"></slot>
            ${this.confirmText}
          </quantic-button>
        </quantic-dialog-actions>
      </quantic-dialog>
    `}};ks.meta={tag:`quantic-confirm-dialog`,description:'Confirmation dialog with title, body, and confirm/cancel actions. Wraps quantic-dialog with role="alertdialog". Use `destructive` for irreversible actions.',category:`feedback`,avoidWhen:[{when:`the dialog carries a form or more than two actions`,useInstead:`quantic-dialog`}],accessibility:{providedByComponent:[`role=alertdialog`,`everything quantic-dialog provides`],requiredFromConsumer:[`a heading and a message, so the action is named without relying on the button alone`]},slots:{trigger:{description:`Element that opens the dialog when clicked.`},"":{description:"Body content. Overrides the `message` prop when non-empty. Accepts rich HTML, including a nested quantic-alert for contextual warnings."},"confirm-icon":{description:`Optional leading icon for the confirm button.`}},relatedTo:[`quantic-dialog`,`quantic-button`,`quantic-alert`]},ks.styles=ct`
    :host {
      display: contents;
      font-family: var(--quantic-font-family-body);
    }

    .body {
      display: flex;
      flex-direction: column;
      gap: var(--quantic-spacing-3);
      margin: 0;
      color: var(--quantic-text-secondary);
      overflow-wrap: break-word;
    }

    [size='md'] .body,
    [size='lg'] .body {
      gap: var(--quantic-spacing-4);
    }

    [size='xl'] .body {
      gap: var(--quantic-spacing-5);
    }

    [hidden] {
      display: none;
    }
  `,A([P({type:`boolean`,default:`false`,reflect:!0,description:`Whether the dialog is visible.`})],ks.prototype,`open`,void 0),A([P({type:`string`,description:`Heading shown in the dialog header.`,copyRule:`heading`})],ks.prototype,`heading`,void 0),A([P({type:`string`,description:`Body message. Ignored if default slot has content. Use the slot for rich content.`,copyRule:`body-message`})],ks.prototype,`message`,void 0),A([P({type:`string`,attribute:`confirm-text`,default:`"Confirm"`,description:`Label for the confirm action button.`,copyRule:`action-label`})],ks.prototype,`confirmText`,void 0),A([P({type:`string`,attribute:`cancel-text`,default:`"Cancel"`,description:`Label for the cancel action button.`,copyRule:`dismiss-label`})],ks.prototype,`cancelText`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Renders the confirm button in error/danger colors. Use for irreversible actions such as delete or remove.`})],ks.prototype,`destructive`,void 0),A([P({type:`boolean`,default:`false`,description:`Disables both action buttons. Set while performing an async action after a confirm event.`})],ks.prototype,`loading`,void 0),A([P({type:`boolean`,default:`false`,description:`Prevents the dialog from being closed via Escape, backdrop, or the close button.`})],ks.prototype,`persistent`,void 0),A([P({type:`boolean`,attribute:`show-close-button`,default:`true`,description:`Shows the close (X) button in the top-right corner.`})],ks.prototype,`showCloseButton`,void 0),A([P({type:`DialogSize`,options:Object.values(So),default:So.Small,description:`Maximum width of the dialog panel.`})],ks.prototype,`size`,void 0),A([bn(`quantic-dialog`)],ks.prototype,`innerDialog`,void 0),ks=A([F(`confirm`,{description:"Fired when the confirm button is clicked. Cancellable — call preventDefault() to keep the dialog open (e.g. while performing an async action with `loading`)."}),F(`cancel`,{description:`Fired when the dialog is dismissed via the cancel button, close button, Escape, or backdrop click.`}),I(`quantic-confirm-dialog`)],ks);var As=`important`,js=` !`+As,Ms=fr(class extends pr{constructor(e){if(super(e),e.type!==dr.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(js);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?As:``):n[e]=r}}return Yt}});function Ns(e){let t=Number.isFinite(e.minSize)?e.minSize:0,n=Number.isFinite(e.maxSize)?e.maxSize:100,r=Sr(t,0,100),i=Sr(n,0,100);return{min:Math.min(r,i),max:Math.max(r,i)}}function Ps(e,t){if(t){if(e===`ArrowUp`)return-1;if(e===`ArrowDown`)return 1}else{if(e===`ArrowLeft`)return-1;if(e===`ArrowRight`)return 1}return null}var Fs={Left:`left`,Right:`right`,Top:`top`,Bottom:`bottom`},Is={Small:`sm`,Medium:`md`,Large:`lg`},Ls=(e,t)=>j`
  <slot class="header" name="header"></slot>

  ${e?j`<div class="toolbar">
        <slot class="toolbar-content" name="toolbar"></slot>
        <quantic-button
          class="close-button"
          variant="ghost"
          size="sm"
          icon
          @click=${t}
        >
          <quantic-icon-lucide-x size="sm" class="close-icon"></quantic-icon-lucide-x>
          <span class="sr-only">Close</span>
        </quantic-button>
      </div>`:j`<slot class="toolbar" name="toolbar"></slot>`}

  <slot class="body"></slot>

  <slot class="footer" name="footer"></slot>
`,Rs=new Set([`quantic-dialog`,`quantic-drawer`,`quantic-layout-pane`]);function zs(e,t){for(let n of e){if(n===t)return!0;if(Rs.has(n.localName??``))return!1}return!1}function Bs(e,t){for(let n of e){if(n===t)return!1;let{localName:e,open:r}=n;if(e===`quantic-popover`&&r===!0)return!0}return!1}function Vs(e){return e===Fs.Top||e===Fs.Bottom}function Hs(e,t,n,r){let i={[Fs.Left]:t,[Fs.Right]:r.width-t,[Fs.Top]:n,[Fs.Bottom]:r.height-n}[e],a=Vs(e)?r.height:r.width;return a===0?0:i/a*100}function Us(e,t,n,r){if(e===`Home`)return r.min;if(e===`End`)return r.max;let i=Ps(e,Vs(t));return i===null?null:n+(t===Fs.Left||t===Fs.Top?i:-i)}L.ensureDefined(),Nr.ensureDefined();var Ws=class extends tr(Zn,[`header`,`toolbar`,`footer`]){constructor(){super(...arguments),this.open=!1,this.placement=Fs.Right,this.size=Is.Medium,this.resizable=!1,this.minSize=10,this.maxSize=90,this.showCloseButton=!0,this.ariaLabel=null,this.resizedPercent=null,this.currentPercent=0,this.measured=!1,this.drawerId=Tr(`drawer`),this.returnFocusTo=null,this.focusWasInside=!1,this.resizePointerId=null,this.handleViewportResize=e=>{e.target===window&&this.open&&this.resizable&&this.measure()},this.handleTriggerClick=()=>{this.show()},this.handleEscape=e=>{e.key===`Escape`&&this.open&&!e.defaultPrevented&&(Bs(e.composedPath(),this)||(e.stopPropagation(),this.hide()))},this.handleCloseRequest=e=>{e.stopPropagation(),zs(e.composedPath(),this)&&this.hide()},this.handleResizePointerDown=e=>{e.preventDefault();let t=e.currentTarget;t.setPointerCapture(e.pointerId),t.classList.add(`dragging`),this.resizePointerId=e.pointerId},this.handleResizePointerMove=e=>{this.resizePointerId===e.pointerId&&this.resizeTo(Hs(this.placement,e.clientX,e.clientY,{width:window.innerWidth,height:window.innerHeight}))},this.handleResizePointerUp=e=>{this.resizePointerId===e.pointerId&&(e.currentTarget.classList.remove(`dragging`),this.resizePointerId=null,this.dispatchResize())},this.handleResizeKeyDown=e=>{let t=Us(e.key,this.placement,this.currentPercent,this.bounds());t!==null&&(e.preventDefault(),this.resizeTo(t),this.dispatchResize())},this.hide=async()=>{if(!this.open)return;let e=new Event(`before-close`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.addEventListener(`dialog-close`,this.handleCloseRequest),this.addEventListener(`keydown`,this.handleEscape),window.addEventListener(`resize`,this.handleViewportResize)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`dialog-close`,this.handleCloseRequest),this.removeEventListener(`keydown`,this.handleEscape),window.removeEventListener(`resize`,this.handleViewportResize),this.resizePointerId=null,this.returnFocusTo=null}willUpdate(e){if(super.willUpdate(e),e.has(`open`)&&!!e.get(`open`)!==this.open&&(this.open?this.returnFocusTo=this.deepActiveElement():this.focusWasInside=this.matches(`:focus-within`)),(e.has(`size`)&&e.get(`size`)!==void 0||e.has(`placement`)&&e.get(`placement`)!==void 0)&&(this.resizedPercent=null),(e.has(`minSize`)||e.has(`maxSize`))&&this.resizedPercent!==null){let{min:e,max:t}=this.bounds();this.resizedPercent=Sr(this.resizedPercent,e,t),this.currentPercent=this.resizedPercent}}updated(e){super.updated(e),e.has(`open`)&&(this.open?this._activate():e.get(`open`)&&this._deactivate()),this.open&&this.resizable&&(e.has(`size`)||e.has(`placement`)||e.has(`resizable`)||e.has(`minSize`)||e.has(`maxSize`))&&this.measure()}get isVertical(){return Vs(this.placement)}get triggerElement(){return this.triggerSlot?.assignedElements({flatten:!0})[0]}handleSlotChange(){let e=this.triggerElement;e&&e.setAttribute(`aria-controls`,this.drawerId),this.updateTriggerAria()}deepActiveElement(){if(typeof document>`u`)return null;let e=document.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e instanceof HTMLElement?e:null}measure(){let e=this.panelElement?.getBoundingClientRect(),t=this.isVertical?window.innerHeight:window.innerWidth;if(!e||t===0)return;let n=(this.isVertical?e.height:e.width)/t*100,{min:r,max:i}=this.bounds();this.resizable&&(n<r||n>i)?this.resizeTo(n):this.currentPercent=n,this.measured=!0}bounds(){return Ns({minSize:this.minSize,maxSize:this.maxSize})}resizeTo(e){let{min:t,max:n}=this.bounds();this.resizedPercent=Sr(e,t,n),this.currentPercent=this.resizedPercent}dispatchResize(){this.dispatchEvent(new CustomEvent(`resize`,{bubbles:!0,composed:!0,detail:{size:this.currentPercent}}))}updateTriggerAria(){let e=this.triggerElement;e&&e.setAttribute(`aria-expanded`,this.open?`true`:`false`)}async show(){if(this.open)return;let e=new Event(`before-open`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!0)}async toggle(){this.open?await this.hide():await this.show()}async _activate(){this.updateTriggerAria(),this.ariaLabel||console.warn(`quantic-drawer opened without an aria-label, so its landmark has no accessible name`),this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:!0},bubbles:!0,composed:!0})),await this.updateComplete,this.open&&(this.panelElement?.focus({preventScroll:!0}),this.measure(),this.dispatchEvent(new Event(`after-open`,{bubbles:!0,composed:!0})))}async _deactivate(){this.updateTriggerAria(),this.focusWasInside&&(this.returnFocusTo??this.triggerElement)?.focus({preventScroll:!0}),this.returnFocusTo=null,this.focusWasInside=!1,this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:!1},bubbles:!0,composed:!0})),await this.updateComplete,this.open||this.dispatchEvent(new Event(`after-close`,{bubbles:!0,composed:!0}))}renderResizeHandle(){if(!this.resizable||!this.measured)return M;let{min:e,max:t}=this.bounds();return j`<div
      class="resize-handle"
      role="separator"
      tabindex="0"
      aria-label="Resize"
      aria-controls=${this.drawerId}
      aria-orientation=${this.isVertical?`horizontal`:`vertical`}
      aria-valuenow=${Math.round(this.currentPercent)}
      aria-valuemin=${Math.round(e)}
      aria-valuemax=${Math.round(t)}
      @pointerdown=${this.handleResizePointerDown}
      @pointermove=${this.handleResizePointerMove}
      @pointerup=${this.handleResizePointerUp}
      @pointercancel=${this.handleResizePointerUp}
      @keydown=${this.handleResizeKeyDown}
    ></div>`}render(){let e=this.resizedPercent===null?{}:this.isVertical?{height:`${this.resizedPercent}vh`}:{width:`${this.resizedPercent}vw`};return j`
      <div class="trigger" @click=${this.handleTriggerClick}>
        <slot name="trigger" @slotchange=${this.handleSlotChange}></slot>
      </div>
      <div
        class=${mr({panel:!0,[`placement--${this.placement}`]:!0,[`size--${this.size}`]:!0})}
        style=${Ms(e)}
        role="complementary"
        aria-label=${hr(this.ariaLabel??void 0)}
        id=${this.drawerId}
        tabindex="-1"
      >
        ${this.renderResizeHandle()}
        ${Ls(this.showCloseButton,this.hide)}
      </div>
    `}};Ws.meta={tag:`quantic-drawer`,description:`Non-modal panel that opens at an edge of the viewport over the page, which stays usable behind it. Optionally resizable. Stacks four bands: a header strip for tabs or panel-level controls, a toolbar carrying the title, a body that grows and scrolls, and a footer for actions.`,category:`feedback`,experimental:!0,avoidWhen:[{when:`the user has to finish or dismiss the content before returning to the page`,useInstead:`quantic-dialog`},{when:`the content is contextual and anchored to a trigger`,useInstead:`quantic-popover`},{when:`the panel sits permanently beside the main content rather than over it`,useInstead:`quantic-splitter-group`}],accessibility:{providedByComponent:[`complementary landmark named by the ariaLabel prop`,`focus moves into the drawer on open`,`focus restored to where it was on close, when it was inside the drawer`,`Escape closes while focus is inside`,`separator role and keyboard resize when resizable`],requiredFromConsumer:[`an accessible name via the ariaLabel prop, even when the toolbar shows a visible title`]},slots:{trigger:{description:`Element that opens the drawer when clicked.`},header:{description:`Top strip for tabs or panel-level controls. Hidden when empty.`},toolbar:{description:`Title row below the header — place quantic-dialog-title here, with any buttons that act on the content. The built-in close button sits at its end.`},"":{description:`Body content. Grows to fill the drawer and scrolls on overflow.`},footer:{description:`Footer pinned to the bottom — place actions here.`}},relatedTo:[`quantic-dialog`,`quantic-splitter-group`,`quantic-button`]},Ws.styles=ct`
    :host {
      --quantic-component-drawer-z-index: 9999;
      --quantic-component-drawer-bg: var(--quantic-bg-primary);
      --quantic-component-drawer-border-color: var(--quantic-border-secondary);
      --quantic-component-drawer-shadow-color: rgb(0 0 0 / 0.32);
      --quantic-component-drawer-width-sm: var(--quantic-width-xxs);
      --quantic-component-drawer-width-md: var(--quantic-width-sm);
      --quantic-component-drawer-width-lg: var(--quantic-width-lg);
      --quantic-component-drawer-height-sm: 30vh;
      --quantic-component-drawer-height-md: 50vh;
      --quantic-component-drawer-height-lg: 75vh;
      --quantic-internal-drawer-padding-inline: var(--quantic-spacing-4);
      --quantic-internal-drawer-padding-block: var(--quantic-spacing-4);
      --quantic-internal-drawer-header-padding-inline: var(--quantic-spacing-2);
      --quantic-internal-drawer-band-min-height: var(--quantic-spacing-12);

      font-family: var(--quantic-font-family-body);
    }

    .panel {
      position: fixed;
      z-index: var(--quantic-component-drawer-z-index);
      display: none;
      flex-direction: column;
      container-type: inline-size;
      box-sizing: border-box;
      max-width: 100%;
      max-height: 100%;
      background-color: var(--quantic-component-drawer-bg);
      box-shadow: var(
        --quantic-component-drawer-shadow,
        calc(var(--quantic-internal-drawer-shadow-x) * 16px)
          calc(var(--quantic-internal-drawer-shadow-y) * 16px) 32px -8px
          var(--quantic-component-drawer-shadow-color),
        calc(var(--quantic-internal-drawer-shadow-x) * 2px)
          calc(var(--quantic-internal-drawer-shadow-y) * 2px) 6px -2px
          var(--quantic-component-drawer-shadow-color)
      );
    }

    .panel:focus {
      outline: none;
    }

    :host([open]) .panel {
      display: flex;
    }

    .placement--left,
    .placement--right {
      top: 0;
      bottom: 0;
      width: var(--quantic-internal-drawer-size);
    }

    .placement--top,
    .placement--bottom {
      left: 0;
      right: 0;
      height: var(--quantic-internal-drawer-size);
    }

    .placement--left {
      left: 0;
      --quantic-internal-drawer-shadow-x: 1;
      --quantic-internal-drawer-shadow-y: 0;
    }

    .placement--right {
      right: 0;
      --quantic-internal-drawer-shadow-x: -1;
      --quantic-internal-drawer-shadow-y: 0;
    }

    .placement--top {
      top: 0;
      --quantic-internal-drawer-shadow-x: 0;
      --quantic-internal-drawer-shadow-y: 1;
    }

    .placement--bottom {
      bottom: 0;
      --quantic-internal-drawer-shadow-x: 0;
      --quantic-internal-drawer-shadow-y: -1;
    }

    .placement--left.size--sm,
    .placement--right.size--sm {
      --quantic-internal-drawer-size: var(--quantic-component-drawer-width-sm);
    }

    .placement--left.size--md,
    .placement--right.size--md {
      --quantic-internal-drawer-size: var(--quantic-component-drawer-width-md);
    }

    .placement--left.size--lg,
    .placement--right.size--lg {
      --quantic-internal-drawer-size: var(--quantic-component-drawer-width-lg);
    }

    .placement--top.size--sm,
    .placement--bottom.size--sm {
      --quantic-internal-drawer-size: var(--quantic-component-drawer-height-sm);
    }

    .placement--top.size--md,
    .placement--bottom.size--md {
      --quantic-internal-drawer-size: var(--quantic-component-drawer-height-md);
    }

    .placement--top.size--lg,
    .placement--bottom.size--lg {
      --quantic-internal-drawer-size: var(--quantic-component-drawer-height-lg);
    }

    .header,
    .toolbar,
    .footer {
      display: flex;
      align-items: center;
      gap: var(--quantic-spacing-2);
      flex-shrink: 0;
      box-sizing: border-box;
      min-height: var(--quantic-internal-drawer-band-min-height);
      border-color: var(--quantic-component-drawer-border-color);
      border-style: solid;
      border-width: 0;
    }

    .header {
      border-block-end-width: 1px;
      padding-inline: var(
        --quantic-component-drawer-header-padding-inline,
        var(--quantic-internal-drawer-header-padding-inline)
      );
    }

    .toolbar-content {
      display: flex;
      align-items: center;
      gap: var(--quantic-spacing-2);
      flex: 1;
      min-width: 0;
    }

    .toolbar,
    .footer {
      padding-inline: var(
        --quantic-component-drawer-padding-inline,
        var(--quantic-internal-drawer-padding-inline)
      );
      padding-block: var(--quantic-spacing-2);
    }

    .toolbar {
      border-block-end-width: 1px;
    }

    .footer {
      border-block-start-width: 1px;
    }

    .body {
      display: block;
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      overflow-x: hidden;
      padding-inline: var(
        --quantic-component-drawer-padding-inline,
        var(--quantic-internal-drawer-padding-inline)
      );
      padding-block: var(
        --quantic-component-drawer-padding-block,
        var(--quantic-internal-drawer-padding-block)
      );
    }

    .close-button {
      margin-inline-start: auto;
      flex-shrink: 0;
    }

    .close-button:hover .close-icon,
    .close-button:focus .close-icon {
      color: var(--quantic-text-primary);
    }

    .close-icon {
      color: var(--quantic-text-tertiary);
      transition: color var(--quantic-transition-duration-fast, 0.15s);
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }

    .resize-handle {
      position: absolute;
      z-index: 2;
      touch-action: none;
      user-select: none;
      outline: none;
    }

    .resize-handle::after {
      content: '';
      pointer-events: none;
      position: absolute;
      background: transparent;
      transition: background var(--quantic-transition-duration-fast, 0.15s) ease-in-out;
    }

    .resize-handle:hover::after,
    .resize-handle:focus-visible::after,
    .resize-handle.dragging::after {
      background: var(--quantic-fg-brand-primary);
    }

    .placement--left .resize-handle,
    .placement--right .resize-handle {
      top: 0;
      bottom: 0;
      width: var(--quantic-spacing-3);
      cursor: col-resize;
    }

    .placement--left .resize-handle::after,
    .placement--right .resize-handle::after {
      top: 0;
      bottom: 0;
      left: 50%;
      width: 4px;
      transform: translateX(-50%);
    }

    .placement--top .resize-handle,
    .placement--bottom .resize-handle {
      left: 0;
      right: 0;
      height: var(--quantic-spacing-3);
      cursor: row-resize;
    }

    .placement--top .resize-handle::after,
    .placement--bottom .resize-handle::after {
      left: 0;
      right: 0;
      top: 50%;
      height: 4px;
      transform: translateY(-50%);
    }

    .placement--left .resize-handle {
      right: 0;
      transform: translateX(50%);
    }

    .placement--right .resize-handle {
      left: 0;
      transform: translateX(-50%);
    }

    .placement--top .resize-handle {
      bottom: 0;
      transform: translateY(50%);
    }

    .placement--bottom .resize-handle {
      top: 0;
      transform: translateY(-50%);
    }

    [hidden] {
      display: none;
    }

    .trigger {
      display: contents;
    }
  `,A([P({type:`boolean`,default:`false`,reflect:!0,description:`Whether the drawer is visible.`})],Ws.prototype,`open`,void 0),A([P({type:`DrawerPlacement`,options:Object.values(Fs),default:Fs.Right,reflect:!0,description:`Viewport edge the drawer opens at.`})],Ws.prototype,`placement`,void 0),A([P({type:`DrawerSize`,options:Object.values(Is),default:Is.Medium,description:`Size of the drawer along its one sized dimension: width for left and right, height for top and bottom.`})],Ws.prototype,`size`,void 0),A([P({type:`boolean`,default:`false`,description:`Adds a draggable, keyboard-operable handle on the inner edge to resize the drawer.`})],Ws.prototype,`resizable`,void 0),A([P({type:`number`,default:`10`,attribute:`min-size`,description:`Minimum size when resizing, as a percentage of the viewport.`})],Ws.prototype,`minSize`,void 0),A([P({type:`number`,default:`90`,attribute:`max-size`,description:`Maximum size when resizing, as a percentage of the viewport.`})],Ws.prototype,`maxSize`,void 0),A([P({type:`boolean`,attribute:`show-close-button`,default:`true`,description:`Shows a built-in close button at the end of the toolbar.`})],Ws.prototype,`showCloseButton`,void 0),A([P({type:`string`,attribute:`aria-label`,required:!0,description:`Accessible name of the drawer landmark. Required, and used even when the toolbar shows a visible title.`})],Ws.prototype,`ariaLabel`,void 0),A([vn()],Ws.prototype,`resizedPercent`,void 0),A([vn()],Ws.prototype,`currentPercent`,void 0),A([vn()],Ws.prototype,`measured`,void 0),A([bn(`.panel`)],Ws.prototype,`panelElement`,void 0),A([bn(`slot[name="trigger"]`)],Ws.prototype,`triggerSlot`,void 0),Ws=A([F(`open-changed`,{description:`Fired when the drawer open state changes.`,detail:`{ open: boolean }`}),F(`before-open`,{description:`Fired before the drawer opens.`}),F(`after-open`,{description:`Fired after the drawer has opened and rendered.`}),F(`before-close`,{description:`Fired before the drawer closes.`}),F(`after-close`,{description:`Fired after the drawer has closed and rendered.`}),F(`resize`,{description:`Fired when the user finishes resizing the drawer by pointer, or on each keyboard step.`,detail:`{ size: number }`}),I(`quantic-drawer`)],Ws);var Gs=class extends R{render(){return Jt`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-eye"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
  <circle cx="12" cy="12" r="3" />
</svg>

    `}};Gs.styles=R.styles,Gs=A([I(`quantic-icon-lucide-eye`)],Gs);var Ks=class extends R{render(){return Jt`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-eye-off"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
  <path d="m2 2 20 20" />
</svg>

    `}};Ks.styles=R.styles,Ks=A([I(`quantic-icon-lucide-eye-off`)],Ks);var qs={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`};Gs.ensureDefined(),Ks.ensureDefined(),L.ensureDefined();var Js=class extends Ha(Zn){focus(e){this.nativeInput?.focus(e)}constructor(){super(),this.value=``,this.type=`text`,this.name=``,this.placeholder=``,this.size=qs.Medium,this.disabled=!1,this.required=!1,this.readOnly=!1,this.invalid=!1,this.autoComplete=`off`,this.showPassword=!1,this.internals=this.attachInternals()}togglePassword(){this.showPassword=!this.showPassword}get iconSize(){return qa(this.size)}updated(e){e.has(`value`)&&(this.internals.setFormValue(this.value),this.updateValidity()),Er(this,e,this.value)}forwardNative(e){let t=e.target;this.value=t.value,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}handleKeyDown(e){this.forwardNative(e),e.key===`Enter`&&this.internals.form?.requestSubmit()}dispatchValueChanged(e){this.value=e.target.value}formResetCallback(){this.value=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}updateValidity(){let e=this.shadowRoot?.querySelector(`input`);e&&this.internals.setValidity(e.validity,e.validationMessage,e)}render(){let e=mr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return j`
      <div class=${e}>
        <slot name="prefix"></slot>
        <input
          .value=${this.value}
          .autocomplete="${this.autoComplete}"
          class="input"
          placeholder=${this.placeholder}
          name=${this.name}
          type=${this.type===`password`&&this.showPassword?`text`:this.type}
          part="input"
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?disabled=${this.disabled}
          aria-label=${t.label}
          aria-description=${t.description}
          aria-invalid=${t.invalid}
          @input=${this.dispatchValueChanged}
          @change=${this.dispatchValueChanged}
          @focus=${this.forwardNative}
          @blur=${this.forwardNative}
          @keydown=${this.handleKeyDown}
          @keyup=${this.forwardNative}
          @keypress=${this.forwardNative}
        />
        ${this.type===`password`?j`<quantic-button
                class="password-toggle"
                variant="ghost"
                size="xs"
                icon
                type="button"
                ?disabled=${this.disabled||this.readOnly}
                aria-label=${this.showPassword?`Hide password`:`Show password`}
                @click=${this.togglePassword}
              >
                ${this.showPassword?j`<quantic-icon-lucide-eye-off
                        size=${this.iconSize}
                      ></quantic-icon-lucide-eye-off>`:j`<quantic-icon-lucide-eye
                        size=${this.iconSize}
                      ></quantic-icon-lucide-eye>`}
              </quantic-button>`:``}
        ${this.invalid?Ja(this.size):``}
        ${this.invalid?``:j`<slot name="suffix"></slot>`}
      </div>
    `}};Js.meta={tag:`quantic-text-input`,description:`Single-line text field with native form association. Wrap in quantic-field to add a visible label, hint text, and validation messaging. Use type="password" or type="email" to get browser-native input behaviour.`,category:`form`,avoidWhen:[{when:`the value is numeric with a min, max or step`,useInstead:`quantic-number-input`},{when:`the value is multi-line prose`,useInstead:`quantic-textarea`}],accessibility:{providedByComponent:[`form association`,`native input semantics and keyboard behaviour`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{prefix:{description:`Leading content (e.g. icon or currency symbol).`},suffix:{description:`Trailing content (e.g. icon or unit label).`}},parts:{input:{description:`The native input element.`}},relatedTo:[`quantic-field`,`quantic-number-input`,`quantic-select`]},Js.formAssociated=!0,Js.styles=[Za(`text-input`,`5em`),ct`
      .input:-webkit-autofill {
        -webkit-text-fill-color: var(--quantic-text-secondary);
        -webkit-box-shadow: 0 0 0px 1000px
          var(--quantic-component-text-input-bg, var(--quantic-bg-primary)) inset;
      }

      .password-toggle {
        margin-inline-start: var(--quantic-spacing-2);
      }
    `],A([P({type:`string`,default:``,description:`Current value of the input.`})],Js.prototype,`value`,void 0),A([P({type:`string`,default:`text`,description:`Native input type.`})],Js.prototype,`type`,void 0),A([P({type:`string`,description:`Name submitted with form data.`})],Js.prototype,`name`,void 0),A([P({type:`string`,description:`Placeholder text shown when the field is empty.`,copyRule:`placeholder`})],Js.prototype,`placeholder`,void 0),A([P({type:`TextInputSize`,options:Object.values(qs),default:qs.Medium,description:`Controls padding and font size.`})],Js.prototype,`size`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],Js.prototype,`disabled`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],Js.prototype,`required`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Makes the field non-editable but still focusable and selectable.`})],Js.prototype,`readOnly`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],Js.prototype,`invalid`,void 0),A([P({type:`string`,default:`off`,reflect:!0,description:`Native autocomplete attribute passed to the inner <input>.`})],Js.prototype,`autoComplete`,void 0),A([vn()],Js.prototype,`showPassword`,void 0),A([bn(`input`)],Js.prototype,`nativeInput`,void 0),Js=A([F(`value-changed`,{description:`Fired whenever the value changes, from user input or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),F(`input`,{forwarded:!0}),F(`change`,{forwarded:!0}),F(`focus`,{forwarded:!0}),F(`blur`,{forwarded:!0}),F(`keydown`,{forwarded:!0}),F(`keyup`,{forwarded:!0}),F(`keypress`,{forwarded:!0}),I(`quantic-text-input`)],Js);var Ys={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},Xs=class extends Ha(Zn){constructor(){super(...arguments),this.options=[],this.value=``,this.name=``,this.placeholder=``,this.size=Ys.Medium,this.disabled=!1,this.required=!1,this.invalid=!1,this._selectRef=ei(),this._slottedOptions=[]}dispatchValueChanged(e){this.value=e.target.value}openDropdown(e){if(!this.disabled){e.stopPropagation();let t=this._selectRef.value;t?.showPicker(),t?.click(),t?.focus()}}updated(e){if(e.has(`value`)){let e=this._selectRef.value,t=this.options.find(([,e])=>e===this.value);e&&t&&(e.value=t[1])}Er(this,e,this.value)}forwardNative(e){this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}handleSlotChange(e){let t=e.target.assignedElements({flatten:!0});this._slottedOptions=t.filter(e=>e.tagName===`OPTION`),this.requestUpdate()}render(){let e=mr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return j`
      <slot @slotchange=${this.handleSlotChange} style="display: none"></slot>
      <div class="${e}">
        <slot name="prefix"></slot>
        <select
          ${ri(this._selectRef)}
          class="input"
          .value=${this.value}
          name=${this.name}
          ?required=${this.required}
          ?disabled=${this.disabled}
          aria-label=${t.label}
          aria-description=${t.description}
          aria-invalid=${t.invalid}
          @input=${this.dispatchValueChanged}
          @change=${this.dispatchValueChanged}
          @focus=${this.forwardNative}
          @blur=${this.forwardNative}
        >
          ${!this.value&&this.placeholder?j`<option value="">${this.placeholder}</option>`:null}
          ${this.options.length>0?this.options.map(([e,t])=>j`<option value=${t}>${e}</option>`):this._slottedOptions.length>0?this._slottedOptions.map(e=>j`<option value=${e.value} ?selected=${e.selected}>${e.textContent}</option>`):j`<option value="" disabled>No options available</option>`}
        </select>
        ${this.invalid?Ja(this.size):j`<slot name="suffix"
                >${Ya(this.size,{click:this.openDropdown})}</slot
              >`}
      </div>
    `}};Xs.meta={tag:`quantic-select`,description:`Dropdown select input backed by a native <select>. Form-associated. Pass options via the options prop or slot native <option> elements.`,category:`form`,avoidWhen:[{when:`the option set is large enough to need filtering`,useInstead:`quantic-combobox`}],accessibility:{providedByComponent:[`native select semantics and keyboard behaviour`,`form association`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{"":{description:`Native option elements, read to build the list. Never rendered directly.`},prefix:{description:`Leading content (e.g. icon).`},suffix:{description:`Trailing content, replacing the default chevron.`}},relatedTo:[`quantic-field`,`quantic-text-input`]},Xs.styles=[Za(`select`,`6em`),ct`
      .main {
        line-height: var(--quantic-line-height-body-md);
      }
    `],A([P({type:`Option<T>[]`,default:`[]`,description:`Array of [label, value] tuples. Alternatively, slot native <option> elements.`})],Xs.prototype,`options`,void 0),A([P({type:`string`,default:``,reflect:!0,description:`Currently selected value.`})],Xs.prototype,`value`,void 0),A([P({type:`string`,description:`Name submitted with form data.`})],Xs.prototype,`name`,void 0),A([P({type:`string`,description:`Placeholder option shown when no value is selected.`,copyRule:`placeholder`})],Xs.prototype,`placeholder`,void 0),A([P({type:`SelectSize`,options:Object.values(Ys),default:Ys.Medium,description:`Controls padding and font size.`})],Xs.prototype,`size`,void 0),A([P({type:`boolean`,default:`false`,description:`Prevents interaction.`})],Xs.prototype,`disabled`,void 0),A([P({type:`boolean`,default:`false`,description:`Marks the field as required for form validation.`})],Xs.prototype,`required`,void 0),A([P({type:`boolean`,default:`false`,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],Xs.prototype,`invalid`,void 0),Xs=A([F(`value-changed`,{description:`Fired whenever the value changes, from user selection or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),F(`focus`,{forwarded:!0}),F(`blur`,{forwarded:!0}),I(`quantic-select`)],Xs);var Zs=class extends R{render(){return Jt`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-chevron-up"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m18 15-6-6-6 6" />
</svg>

    `}};Zs.styles=R.styles,Zs=A([I(`quantic-icon-lucide-chevron-up`)],Zs);var Qs=class extends R{render(){return Jt`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-search"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />
</svg>

    `}};Qs.styles=R.styles,Qs=A([I(`quantic-icon-lucide-search`)],Qs);var $s={MAX_LINES:1e4,FOLLOW_SCROLL_THRESHOLD:50},ec=[`log-black`,`log-danger`,`log-success`,`log-warning`,`log-blue`,`log-magenta`,`log-info`,`log-white`,`log-gray`,`log-danger`,`log-success`,`log-warning`,`log-blue`,`log-magenta`,`log-info`,`log-white`],tc=[`#1c1c1c`,`#8b0000`,`#006400`,`#808000`,`#00008b`,`#800080`,`#008b8b`,`#a9a9a9`,`#404040`,`#ff4444`,`#44ff44`,`#ffff44`,`#4444ff`,`#ff44ff`,`#44ffff`,`#ffffff`],nc=e=>e===0?0:55+e*40,rc=e=>{let t=e-16,n=Math.floor(t/36),r=Math.floor(t%36/6),i=t%6;return`rgb(${nc(n)},${nc(r)},${nc(i)})`},ic=e=>{let t=8+(e-232)*10;return`rgb(${t},${t},${t})`},ac=e=>e<232?rc(e):ic(e),oc=[`fgClass`,`fgRgb`,`bgColor`,`bold`,`dim`,`italic`,`underline`],sc=()=>({fgClass:null,fgRgb:null,bgColor:null,bold:!1,dim:!1,italic:!1,underline:!1}),cc=e=>({...e,fgClass:null,fgRgb:null}),lc=(e,t)=>t<16?{...e,fgClass:ec[t],fgRgb:null}:{...e,fgClass:null,fgRgb:ac(t)},uc=(e,t)=>({...e,bgColor:t<16?tc[t]:ac(t)}),dc=(e,t=0)=>({state:e,skip:t}),fc=e=>t=>dc({...t,...e}),pc=e=>t=>dc(e(t)),mc=(e,{params:t,index:n})=>{let r=t[n+1];return r===5&&n+2<t.length?dc(lc(e,t[n+2]),2):r===2&&n+4<t.length?dc({...e,fgClass:null,fgRgb:`rgb(${t[n+2]},${t[n+3]},${t[n+4]})`},4):dc(e)},hc=(e,{params:t,index:n})=>{let r=t[n+1];return r===5&&n+2<t.length?dc(uc(e,t[n+2]),2):r===2&&n+4<t.length?dc({...e,bgColor:`rgb(${t[n+2]},${t[n+3]},${t[n+4]})`},4):dc(e)},gc=e=>t=>dc({...t,fgClass:ec[e],fgRgb:null}),_c=e=>t=>dc({...t,bgColor:tc[e]}),vc={0:()=>dc(sc()),1:fc({bold:!0}),2:fc({dim:!0}),3:fc({italic:!0}),4:fc({underline:!0}),22:fc({bold:!1,dim:!1}),23:fc({italic:!1}),24:fc({underline:!1}),38:mc,39:pc(cc),48:hc,49:fc({bgColor:null})},yc=e=>vc[e]||(e>=30&&e<=37?gc(e-30):e>=40&&e<=47?_c(e-40):e>=90&&e<=97?gc(e-90+8):e>=100&&e<=107?_c(e-100+8):e=>dc(e)),bc=e=>e===``?[0]:e.split(`;`).map(Number),xc=(e,t)=>t.reduce(e=>{if(e.index>=t.length)return e;let n=t[e.index],{state:r,skip:i}=yc(n)(e.state,{params:t,index:e.index});return{state:r,index:e.index+1+i}},{state:e,index:0}).state,Sc=(e,t)=>xc(e,bc(t));function Cc(e){let{fgClass:t,fgRgb:n,bgColor:r,bold:i,dim:a,italic:o,underline:s}=e;return t===null&&n===null&&r===null&&!i&&!a&&!o&&!s}function wc(e){let t=[...e.matchAll(/\x1b\[([0-9;]*)m/g)].reduce((t,n)=>{let r=e.slice(t.cursor,n.index);return{segments:r?[...t.segments,{text:r,state:t.state}]:t.segments,state:Sc(t.state,n[1]),cursor:n.index+n[0].length}},{segments:[],state:sc(),cursor:0}),n=e.slice(t.cursor);return n?[...t.segments,{text:n,state:t.state}]:t.segments}var Tc=e=>e.map(e=>e.text).join(``),Ec=/^\[(?:info|ok|warn|error|debug)\]$/i;function Dc(e){if(e.length<2)return null;let[t,...n]=e;if(!Ec.test(t.text))return null;let r=n.map(e=>({...e,state:{...e.state}})),i=r[0];return i&&(r[0]={...i,text:i.text.replace(/^\s+/,``)}),{tag:t,body:r}}var Oc=(e,t)=>oc.every(n=>e[n]===t[n]),kc=(e,t,n)=>{let r=Array(e).fill(`none`);return t.forEach(({start:e,end:t})=>r.fill(`hit`,e,t)),n&&r.fill(`active`,n.start,n.end),r},Ac=(e,t)=>{let n=[],r=Math.max(t.length,1);for(let i=e.indexOf(t);i!==-1;i=e.indexOf(t,i+r))n.push({start:i,end:i+t.length});return n};function jc(e,t){let n=t.trim();return n?Ac(e.toLowerCase(),n.toLowerCase()):[]}function Mc(e,t){return e.flatMap((e,n)=>jc(Tc(e),t).map(({start:e,end:t})=>({lineIndex:n,start:e,end:t})))}var Nc=e=>e.map((t,n)=>e.slice(0,n).reduce((e,t)=>e+t.text.length,0)),Pc=e=>{let t=Nc(e);return e.flatMap((e,n)=>e.text.split(``).map((r,i)=>({char:r,state:e.state,pos:t[n]+i})))},Fc=e=>e.reduce((e,t)=>{let n=e[e.length-1];return n&&n.highlight===t.highlight&&Oc(n.state,t.state)?e[e.length-1]={...n,text:n.text+t.text}:e.push(t),e},[]);function Ic(e,t,n){if(!t.length)return e.map(e=>({...e,highlight:`none`}));let r=Pc(e),i=kc(r.length,t,n);return Fc(r.map(({char:e,state:t,pos:n})=>({text:e,state:t,highlight:i[n]})))}var Lc=class extends Zn{constructor(){super(...arguments),this.parsed=[],this.lineIndex=0,this.searchQuery=``,this.activeMatch=null,this.lineNumber=0}scrollActiveMatchIntoView(){this.renderRoot.querySelector(`.log-search-active`)?.scrollIntoView({block:`nearest`,inline:`nearest`})}renderSegment({text:e,state:t}){if(Cc(t))return e;let n={"log-bold":t.bold,"log-dim":t.dim,"log-italic":t.italic,"log-underline":t.underline};return t.fgClass&&(n[t.fgClass]=!0),j`<span
      class=${mr(n)}
      style=${Ms({color:t.fgRgb,background:t.bgColor})}
      >${e}</span
    >`}renderSearchSlice(e){let t=this.renderSegment({text:e.text,state:e.state});return e.highlight===`none`?t:j`<mark
      class=${mr({"log-search-hit":e.highlight===`hit`,"log-search-active":e.highlight===`active`})}
      >${t}</mark
    >`}get showLineNumber(){return this.lineNumber>0}renderLineNumber(){return this.showLineNumber?j`<span class="line-number">${this.lineNumber}</span>`:null}renderPlainContent(e){return j`<span class="log-line">${e.map(e=>this.renderSegment(e))}</span>`}renderLeveledContent(e){return j`<span class="log-level-tag">${this.renderSegment(e.tag)}</span
      ><span class="log-level-body">${e.body.map(e=>this.renderSegment(e))}</span>`}renderSearchContent(e){let t=this.searchQuery.trim(),n=jc(Tc(e),t),r=this.activeMatch;return j`<span class="log-line">${Ic(e,n,r&&r.lineIndex===this.lineIndex?{start:r.start,end:r.end}:null).map(e=>this.renderSearchSlice(e))}</span>`}willUpdate(){let e=this.searchQuery.trim()?null:Dc(this.parsed);this.toggleAttribute(`leveled`,!!e)}render(){let e=this.parsed,t=this.searchQuery.trim(),n=t?null:Dc(e);return n?j`${this.renderLineNumber()}${this.renderLeveledContent(n)}`:t?j`${this.renderLineNumber()}${this.renderSearchContent(e)}`:j`${this.renderLineNumber()}${this.renderPlainContent(e)}`}};Lc.meta={tag:`quantic-log-output-line`,description:`Single rendered row within quantic-log-output. Applies ANSI styling, optional level-tag layout, and in-buffer search highlights.`,category:`display`,subComponentOf:`quantic-log-output`,relatedTo:[`quantic-log-output`]},Lc.styles=ct`
    :host {
      display: block;
      line-height: inherit;
      min-height: 1lh;
    }

    :host([line-number='0']) {
      display: block;
    }

    :host(:not([line-number='0'])) {
      display: grid;
      align-items: baseline;
      grid-template-columns: max-content minmax(0, 1fr);
      gap: var(--quantic-spacing-4);
    }

    :host([leveled]:not([line-number='0'])) {
      grid-template-columns:
        max-content
        var(--quantic-internal-log-output-level-tag-width) minmax(0, 1fr);
    }

    .line-number {
      color: rgba(255, 255, 255, 0.2);
      user-select: none;
      text-align: right;
      min-width: 3ch;
      font-variant-numeric: tabular-nums;
    }

    .log-line,
    .log-level-tag,
    .log-level-body {
      white-space: pre;
      min-width: 0;
      font-family: inherit;
    }

    :host([leveled][line-number='0']) {
      display: grid;
      align-items: baseline;
      grid-template-columns:
        var(--quantic-internal-log-output-level-tag-width)
        minmax(0, 1fr);
    }

    mark.log-search-hit,
    mark.log-search-active {
      color: inherit;
      background: var(--quantic-internal-log-output-search-hit-bg);
      border-radius: 2px;
    }

    mark.log-search-active {
      background: var(--quantic-internal-log-output-search-active-bg);
      outline: 1px solid var(--quantic-fg-warning-primary);
    }

    .log-danger {
      color: var(--quantic-fg-error-primary, #d92d20);
    }
    .log-success {
      color: var(--quantic-fg-success-primary, #079455);
    }
    .log-warning {
      color: var(--quantic-fg-warning-primary, #dc6803);
    }
    .log-info {
      color: var(--quantic-utility-blue-500, #2e90fa);
    }
    .log-blue {
      color: var(--quantic-utility-blue-500, #2e90fa);
    }
    .log-magenta {
      color: var(--quantic-component-log-magenta, #c678dd);
    }
    .log-black {
      color: #1c1c1c;
    }
    .log-white {
      color: var(--quantic-utility-gray-300, #d5d7da);
    }
    .log-gray {
      color: var(--quantic-utility-gray-500, #717680);
    }

    .log-bold {
      font-weight: var(--quantic-font-weight-bold, 700);
    }
    .log-dim {
      opacity: 0.5;
    }
    .log-italic {
      font-style: italic;
    }
    .log-underline {
      text-decoration: underline;
    }
  `,A([P({type:`AnsiSegment[]`,default:`[]`,attribute:!1,description:`Parsed ANSI segments for this buffer line.`})],Lc.prototype,`parsed`,void 0),A([P({type:`number`,default:`0`,attribute:`line-index`,description:`Zero-based index of this line in the parent buffer.`})],Lc.prototype,`lineIndex`,void 0),A([P({type:`string`,default:``,attribute:!1,description:`Current search query from the parent log viewer.`})],Lc.prototype,`searchQuery`,void 0),A([P({type:`{ lineIndex: number; start: number; end: number } | null`,default:`null`,attribute:!1,description:`Active search match in the buffer, if any.`})],Lc.prototype,`activeMatch`,void 0),A([P({type:`number`,default:`0`,attribute:`line-number`,description:`When greater than zero, shows this ordinal beside the row.`})],Lc.prototype,`lineNumber`,void 0),Lc=A([I(`quantic-log-output-line`)],Lc),vo.ensureDefined(),yo.ensureDefined(),L.ensureDefined(),Js.ensureDefined(),Qs.ensureDefined(),Zs.ensureDefined(),Wa.ensureDefined(),Nr.ensureDefined();var Rc=class extends Zn{constructor(){super(...arguments),this.value=``,this.matchCount=0,this.activeMatchIndex=0,this.open=!1}updated(e){e.has(`open`)&&this.open&&this.focusSearchInput()}showSearch(){this.open?this.focusSearchInput():this.openSearch()}focusSearchInput(){this.updateComplete.then(()=>{let e=this.inputEl;e&&e.updateComplete.then(()=>e.focus())})}get matchLabel(){return this.matchCount?`${Math.min(this.activeMatchIndex+1,this.matchCount)} / ${this.matchCount}`:`0 / 0`}emitValue(e){this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:e},bubbles:!0,composed:!0}))}emitOpen(e){this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:e},bubbles:!0,composed:!0}))}openSearch(){this.open=!0,this.emitOpen(!0)}closeSearch(){this.open=!1,this.emitOpen(!1),this.emitValue(``)}handleToggleOpen(){this.open?this.closeSearch():this.openSearch()}handleValueChanged(e){e.stopPropagation(),this.emitValue(e.detail.value)}handleKeydown(e){e.key===`Escape`?(e.preventDefault(),this.closeSearch()):e.key===`Enter`&&(e.preventDefault(),this.dispatchEvent(new CustomEvent(e.shiftKey?`previous-match`:`next-match`,{bubbles:!0,composed:!0})))}handlePreviousMatch(){this.dispatchEvent(new CustomEvent(`previous-match`,{bubbles:!0,composed:!0}))}handleNextMatch(){this.dispatchEvent(new CustomEvent(`next-match`,{bubbles:!0,composed:!0}))}render(){return this.open?j`
      <quantic-text-input
        type="search"
        size=${qs.ExtraSmall}
        placeholder="Search"
        aria-label="Search log"
        .value=${this.value}
        @value-changed=${this.handleValueChanged}
        @keydown=${this.handleKeydown}
      ></quantic-text-input>
      <span class="count" aria-live="polite">${this.matchLabel}</span>
      <quantic-button-bar size=${fo.ExtraSmall} aria-label="Search match navigation">
        <quantic-button-bar-item
          aria-label="Previous match"
          ?disabled=${this.matchCount===0}
          @click=${this.handlePreviousMatch}
        >
          <quantic-icon-lucide-chevron-up size="xs"></quantic-icon-lucide-chevron-up>
        </quantic-button-bar-item>
        <quantic-button-bar-item
          aria-label="Next match"
          ?disabled=${this.matchCount===0}
          @click=${this.handleNextMatch}
        >
          <quantic-icon-lucide-chevron-down size="xs"></quantic-icon-lucide-chevron-down>
        </quantic-button-bar-item>
        <quantic-button-bar-item
          aria-label="Close search"
          class="close-button"
          @click=${this.closeSearch}
        >
          <quantic-icon-lucide-x size="xxs"></quantic-icon-lucide-x>
        </quantic-button-bar-item>
      </quantic-button-bar>
    `:j`
        <quantic-button
          icon
          size=${lr.ExtraSmall}
          variant="outline"
          aria-label="Search log"
          @click=${this.handleToggleOpen}
        >
          <quantic-icon-lucide-search size="xxs"></quantic-icon-lucide-search>
        </quantic-button>
      `}};Rc.meta={tag:`quantic-log-output-search`,description:`Floating search control for quantic-log-output. Collapsed to a search icon; expanded to a query field with match navigation.`,category:`display`,subComponentOf:`quantic-log-output`,relatedTo:[`quantic-log-output`,`quantic-text-input`,`quantic-button-bar`]},Rc.styles=ct`
    :host {
      position: absolute;
      top: var(--quantic-spacing-2);
      right: var(--quantic-spacing-2);
      z-index: 1;
      display: flex;
      align-items: center;
      gap: var(--quantic-spacing-2);
      max-width: calc(100% - 2 * var(--quantic-spacing-2));
      font-family: var(--quantic-font-family-body);
    }

    :host([open]) {
      padding: var(--quantic-spacing-1-5);
      background: var(--quantic-bg-primary);
      border: 1px solid var(--quantic-border-tertiary);
      border-radius: var(--quantic-radius-lg);
    }

    quantic-text-input {
      width: 9rem;
    }

    quantic-text-input::part(input)::-webkit-search-decoration,
    quantic-text-input::part(input)::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }

    quantic-text-input::part(input)::-webkit-search-cancel-button {
      width: var(--quantic-spacing-md);
      height: var(--quantic-spacing-md);
      margin-inline-start: var(--quantic-spacing-1);
      cursor: pointer;
      color: var(--quantic-text-quaternary);
      background:
        linear-gradient(
          45deg,
          transparent 42%,
          currentColor 42%,
          currentColor 58%,
          transparent 58%
        ),
        linear-gradient(
          -45deg,
          transparent 42%,
          currentColor 42%,
          currentColor 58%,
          transparent 58%
        );
    }

    quantic-text-input::part(input)::-webkit-search-cancel-button:hover {
      color: var(--quantic-text-secondary);
    }

    .count {
      font-size: var(--quantic-font-size-body-xs);
      color: var(--quantic-text-quaternary);
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }

    .close-button {
      padding-inline: var(--quantic-spacing-0-5);
    }
  `,A([P({type:`string`,default:``,description:`Current search query.`})],Rc.prototype,`value`,void 0),A([P({type:`number`,default:`0`,attribute:`match-count`,description:`Total matches in the log buffer.`})],Rc.prototype,`matchCount`,void 0),A([P({type:`number`,default:`0`,attribute:`active-match-index`,description:`Zero-based index of the highlighted match.`})],Rc.prototype,`activeMatchIndex`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Whether the search field is expanded.`})],Rc.prototype,`open`,void 0),A([bn(`quantic-text-input`)],Rc.prototype,`inputEl`,void 0),Rc=A([F(`value-changed`,{description:`Fired when the search query changes, including when cleared on close.`,detail:`{ value: string }`}),F(`previous-match`,{description:`Fired when the user activates the previous-match control.`}),F(`next-match`,{description:`Fired when the user activates the next-match control.`}),F(`open-changed`,{description:`Fired when the overlay expands or collapses.`,detail:`{ open: boolean }`}),I(`quantic-log-output-search`)],Rc),xo.ensureDefined(),Rc.ensureDefined(),Lc.ensureDefined();var zc=class extends Zn{constructor(){super(...arguments),this.follow=!0,this.followLabel=`Follow`,this.lineNumbers=!1,this.maxLines=$s.MAX_LINES,this.searchable=!0,this.lineBuffer=[],this.searchQuery=``,this.activeMatchIndex=0,this.resizeObserver=null,this.handleScroll=()=>{let{scrollTop:e,scrollHeight:t,clientHeight:n}=this.outputEl;this.follow=!(t-e-n>$s.FOLLOW_SCROLL_THRESHOLD)}}get lines(){return this.lineBuffer.map(e=>e.raw)}set lines(e){this.lineBuffer=this.clampToMax(e.map(e=>({raw:e,parsed:wc(e)})))}get isSearchActive(){return this.searchable&&this.searchQuery.trim().length>0}get effectiveSearchQuery(){return this.searchable?this.searchQuery:``}get searchMatches(){return Mc(this.lineBuffer.map(e=>e.parsed),this.searchQuery)}get activeMatch(){let e=this.searchMatches;return e.length?e[Math.min(Math.max(this.activeMatchIndex,0),e.length-1)]??null:null}firstUpdated(){this.outputEl.addEventListener(`scroll`,this.handleScroll),this.resizeObserver=new ResizeObserver(()=>{this.follow&&!this.isSearchActive&&this.scrollToBottom()}),this.resizeObserver.observe(this.outputEl)}updated(e){if(e.has(`maxLines`)&&(this.lineBuffer=this.clampToMax(this.lineBuffer)),e.has(`searchable`)&&!this.searchable&&(this.searchQuery=``,this.activeMatchIndex=0),e.has(`searchQuery`)&&(this.activeMatchIndex=0),e.has(`lineBuffer`)||e.has(`searchQuery`)){let e=this.searchMatches.length;e===0?this.activeMatchIndex=0:this.activeMatchIndex>=e&&(this.activeMatchIndex=e-1)}this.follow&&!this.isSearchActive&&this.scrollToBottom(),this.isSearchActive&&(e.has(`activeMatchIndex`)||e.has(`lineBuffer`)||e.has(`searchQuery`))&&this.scrollActiveMatchIntoView()}disconnectedCallback(){super.disconnectedCallback(),this.outputEl?.removeEventListener(`scroll`,this.handleScroll),this.resizeObserver?.disconnect(),this.resizeObserver=null}appendLine(e){this.lineBuffer=this.clampToMax([...this.lineBuffer,{raw:e,parsed:wc(e)}])}clampToMax(e){return e.length>this.maxLines?e.slice(-this.maxLines):e}renderLineRows(){let e=this.activeMatch;return this.lineBuffer.map(({parsed:t},n)=>j`<quantic-log-output-line
        .parsed=${t}
        .lineIndex=${n}
        .searchQuery=${this.effectiveSearchQuery}
        .activeMatch=${e}
        .lineNumber=${this.lineNumbers?n+1:0}
      ></quantic-log-output-line>`)}scrollToBottom(){this.outputEl.scrollTop=this.outputEl.scrollHeight}scrollActiveMatchIntoView(){requestAnimationFrame(()=>{let e=this.activeMatch;e&&(this.outputEl?.querySelector(`quantic-log-output-line[line-index="${e.lineIndex}"]`))?.scrollActiveMatchIntoView()})}handleFollowChange(e){this.follow=e.detail.checked,this.follow&&this.scrollToBottom()}handleSearchValueChanged(e){this.searchQuery=e.detail.value}handleOutputKeydown(e){this.searchable&&e.key===`f`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),this.searchEl?.showSearch())}goToPreviousMatch(){let e=this.searchMatches.length;e&&(this.activeMatchIndex=(this.activeMatchIndex-1+e)%e)}goToNextMatch(){let e=this.searchMatches.length;e&&(this.activeMatchIndex=(this.activeMatchIndex+1)%e)}render(){let e=this.searchMatches.length;return j`
      <div class="toolbar">
        <span class="line-count" aria-live="polite" aria-atomic="true">
          ${this.lineBuffer.length.toLocaleString()}
          ${this.lineBuffer.length===1?`line`:`lines`}
        </span>
        <span class="controls">
          <quantic-checkbox
            size="sm"
            .label=${this.followLabel}
            .checked=${this.follow}
            @value-changed=${this.handleFollowChange}
          ></quantic-checkbox>
          <slot name="toolbar"></slot>
        </span>
      </div>
      <div class="output-shell">
        ${this.searchable?j`<quantic-log-output-search
              .value=${this.searchQuery}
              .matchCount=${e}
              .activeMatchIndex=${this.activeMatchIndex}
              @value-changed=${this.handleSearchValueChanged}
              @previous-match=${this.goToPreviousMatch}
              @next-match=${this.goToNextMatch}
            ></quantic-log-output-search>`:null}
        <div
          class="output"
          role="log"
          aria-label="Log output"
          aria-live="off"
          tabindex="0"
          @keydown=${this.handleOutputKeydown}
        >
          ${this.renderLineRows()}
        </div>
      </div>
    `}};zc.meta={tag:`quantic-log-output`,description:`Scrollable terminal-style log viewer that renders ANSI-coloured text with optional line numbers. Accepts lines as a property array or via appendLine(). A follow checkbox auto-scrolls to the latest line. When searchable, an overlay search control finds text in the log buffer.`,category:`display`,accessibility:{providedByComponent:[`live region for appended output`,`a follow toggle so announcements can be stopped`,`in-log search with match navigation when searchable`],requiredFromConsumer:[`a followLabel describing what following does`]},slots:{toolbar:{description:`Additional controls placed in the toolbar next to the follow checkbox.`}}},zc.styles=ct`
    :host {
      display: flex;
      height: 100%;
      flex-direction: column;
      color: var(--quantic-component-log-output-fg, inherit);
      font-family: var(
        --quantic-component-log-output-font-family,
        var(--quantic-font-family-mono)
      );
      font-size: var(--quantic-component-log-output-font-size, 0.8125rem);
      line-height: 1.6;
      min-height: 0;
      overflow: hidden;
      --quantic-internal-log-output-level-tag-width: 8ch;
      --quantic-internal-log-output-search-hit-bg: var(--quantic-bg-warning-secondary);
      --quantic-internal-log-output-search-active-bg: var(--quantic-bg-warning-solid);
    }

    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--quantic-spacing-4);
      padding: var(--quantic-spacing-1-5) var(--quantic-spacing-2);
      border-bottom: 1px solid var(--quantic-border-secondary);
      flex-shrink: 0;
      font-family: var(--quantic-font-family-body);
    }

    .controls {
      display: flex;
      align-items: center;
      gap: var(--quantic-spacing-2);
    }

    .line-count {
      font-size: var(--quantic-font-size-body-xs);
      color: var(--quantic-text-quaternary);
      border-radius: var(--quantic-radius-full);
      padding: 1px var(--quantic-spacing-2);
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }

    ::slotted(*) {
      margin-left: auto;
    }

    .output-shell {
      position: relative;
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
    }

    .output {
      flex: 1;
      overflow-y: auto;
      overflow-x: auto;
      padding: var(--quantic-spacing-3);
      min-height: 0;
      outline: none;
      border-radius: var(
        --quantic-component-log-output-border-radius,
        var(--quantic-radius-md)
      );
      font-family: var(
        --quantic-component-log-output-font-family,
        var(--quantic-font-family-mono)
      );
      background-color: var(
        --quantic-component-log-output-bg,
        var(--quantic-color-gray-dark-mode-900)
      );
    }

    .output:focus-visible {
      box-shadow: inset 0 0 0 2px var(--quantic-focus-ring);
    }

    .output::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    .output::-webkit-scrollbar-track {
      background: transparent;
    }

    .output::-webkit-scrollbar-thumb {
      background: rgba(var(--quantic-fg-white-rgb), 0.12);
      border-radius: var(--quantic-radius-full);
    }

    .output::-webkit-scrollbar-thumb:hover {
      background: rgba(var(--quantic-fg-white-rgb), 0.2);
    }
  `,A([P({type:`boolean`,default:`true`,reflect:!0,description:`When true, the output automatically scrolls to the latest line.`})],zc.prototype,`follow`,void 0),A([P({type:`string`,default:`Follow`,attribute:`follow-label`,description:`Label text for the follow toggle checkbox.`,copyRule:`toggle-effect-label`})],zc.prototype,`followLabel`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,attribute:`line-numbers`,description:`When true, prepends line numbers to each row.`})],zc.prototype,`lineNumbers`,void 0),A([P({type:`number`,default:String($s.MAX_LINES),attribute:`max-lines`,description:`Maximum number of lines retained in the buffer. Older lines are dropped when the limit is exceeded.`})],zc.prototype,`maxLines`,void 0),A([P({type:`boolean`,default:`true`,reflect:!0,description:`When true, shows in-log search and highlights matches. Set to false to omit search UI and keyboard shortcut.`})],zc.prototype,`searchable`,void 0),A([vn()],zc.prototype,`lineBuffer`,void 0),A([vn()],zc.prototype,`searchQuery`,void 0),A([vn()],zc.prototype,`activeMatchIndex`,void 0),A([bn(`.output`)],zc.prototype,`outputEl`,void 0),A([bn(`quantic-log-output-search`)],zc.prototype,`searchEl`,void 0),zc=A([I(`quantic-log-output`)],zc);var Bc={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},Vc={[Bc.ExtraSmall]:bo.ExtraSmall,[Bc.Large]:bo.Medium};xo.ensureDefined(),Nr.ensureDefined();var Hc=class extends Zn{constructor(){super(...arguments),this.size=Bc.Medium,this.selectable=!1,this.dismissible=!1,this.selected=!1}handleClick(){this.selectable&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(`tag-select`,{detail:{selected:this.selected},bubbles:!0,composed:!0})))}handleDismiss(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent(`tag-dismiss`,{bubbles:!0,composed:!0}))}handleKeyDown(e){this.selectable&&(e.key===`Enter`||e.key===` `)&&!e.target.closest(`.dismiss-button`)&&(e.preventDefault(),this.handleClick())}render(){return sr`
      <div
        class=${mr({main:!0,[`size--${this.size}`]:!0,selectable:this.selectable})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        tabindex=${this.selectable?`0`:`-1`}
        role=${this.selectable?`checkbox`:void 0}
        aria-checked=${this.selectable?String(this.selected):void 0}
      >
        ${this.selectable?sr`<quantic-checkbox
                size=${Vc[this.size]??`sm`}
                ?checked=${this.selected}
              ></quantic-checkbox>`:null}
        <slot name="before"></slot>
        <slot></slot>
        <slot name="after"></slot>
        ${this.dismissible?sr`
                <button class="dismiss-button" @click=${this.handleDismiss} aria-label="Dismiss">
                  <quantic-icon-lucide-x size="xs"></quantic-icon-lucide-x>
                </button>
              `:null}
      </div>
    `}};Hc.meta={tag:`quantic-tag`,description:`Compact inline label that can be dismissible or selectable. Used for filters, categories, and version tags. Use quantic-count-tag or quantic-status-tag for specialised variants.`,category:`display`,avoidWhen:[{when:`the tag shows a numeric count`,useInstead:`quantic-count-tag`},{when:`the tag shows a semantic status`,useInstead:`quantic-status-tag`}],accessibility:{providedByComponent:[`keyboard dismissal when dismissible`,`roving tabindex within a tag group`]},slots:{"":{description:`Tag label text or icon content.`},before:{description:`Leading content (e.g. icon or color dot).`},after:{description:`Trailing content (e.g. count badge).`}},relatedTo:[`quantic-count-tag`,`quantic-status-tag`,`quantic-badge`]},Hc.styles=ct`
    :host {
      display: inline-flex;
    }

    .main {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--quantic-spacing-2);
      font-family: var(--quantic-font-family-body);
      font-weight: var(--quantic-font-weight-regular);
      line-height: 1.5em;
      white-space: nowrap;
      box-sizing: border-box;
      vertical-align: middle;
      border-radius: var(--quantic-radius-sm);
      background-color: var(--quantic-utility-gray-50);
      border: 1px solid var(--quantic-utility-gray-200);
      color: var(--quantic-utility-gray-700);
    }

    /* Sizes */
    .size--xs {
      gap: var(--quantic-spacing-1);
      padding: 0 var(--quantic-spacing-1);
      font-size: var(--quantic-font-size-body-xs);
    }

    .size--sm {
      padding: var(--quantic-spacing-0-5) var(--quantic-spacing-1);
      font-size: var(--quantic-font-size-body-xs);
    }

    .size--md {
      padding: var(--quantic-spacing-0-5) var(--quantic-spacing-1-5);
      font-size: var(--quantic-font-size-body-sm);
      border-radius: var(--quantic-radius-sm);
    }

    .size--lg {
      padding: var(--quantic-spacing-1) var(--quantic-spacing-2);
      font-size: var(--quantic-font-size-body-sm);
      border-radius: var(--quantic-radius-md);
    }

    .selectable {
      cursor: pointer;
      user-select: none;
      outline: none;
    }

    .selectable:hover {
      opacity: 0.8;
    }

    .main::before {
      content: '';
      pointer-events: none;
      display: block;
      position: absolute;
      inset: -4px;
      border-radius: var(--quantic-radius-md);
      border: 2px solid var(--quantic-focus-ring);
      transition: opacity 0.2s ease-in-out;
      opacity: 0;
    }

    .selectable:focus-visible::before {
      opacity: 1;
    }

    quantic-checkbox {
      pointer-events: none;
    }

    quantic-checkbox::part(box) {
      width: 14px;
      height: 14px;
    }

    .size--xs quantic-checkbox::part(box) {
      width: var(--quantic-spacing-3);
      height: var(--quantic-spacing-3);
    }

    .dismiss-button {
      appearance: none;
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: inherit;
      flex-shrink: 0;
      outline: 2px solid transparent;
      outline-offset: 0;
      border-radius: var(--quantic-radius-xxs);
      color: var(--quantic-text-quaternary);
      transition:
        color 0.2s ease-in-out,
        outline 0.2s ease-in-out,
        outline-offset 0.2s ease-in-out;
    }

    .dismiss-button:focus {
      outline: 2px solid var(--quantic-focus-ring);
      outline-offset: 2px;
    }

    .dismiss-button:hover {
      color: var(--quantic-text-primary);
    }

    ::slotted(*) {
      display: flex;
      align-items: center;
    }
  `,A([P({type:`TagSize`,options:Object.values(Bc),default:Bc.Medium,description:`Controls padding and font size.`})],Hc.prototype,`size`,void 0),A([P({type:`boolean`,default:`false`,description:`Renders a checkbox and makes the tag toggleable.`})],Hc.prototype,`selectable`,void 0),A([P({type:`boolean`,default:`false`,description:`Shows a dismiss (×) button to remove the tag.`})],Hc.prototype,`dismissible`,void 0),A([P({type:`boolean`,default:`false`,description:`Current selected state when selectable is true.`})],Hc.prototype,`selected`,void 0),Hc=A([F(`tag-select`,{description:`Fired when a tag's selection state changes (only when selectable is true).`,detail:`{ selected: boolean }`}),F(`tag-dismiss`,{description:`Fired when a tag's dismiss button is clicked (only when dismissible is true).`}),I(`quantic-tag`)],Hc);var Uc={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},Wc={None:`none`,Vertical:`vertical`,Horizontal:`horizontal`,Both:`both`};Ga.ensureDefined();var Gc=class extends Ha(Zn){constructor(){super(),this.value=``,this.name=``,this.placeholder=``,this.size=Uc.Medium,this.rows=4,this.resize=Wc.Vertical,this.disabled=!1,this.required=!1,this.readOnly=!1,this.invalid=!1,this.autoComplete=`off`,this.internals=this.attachInternals()}updated(e){e.has(`value`)&&(this.internals.setFormValue(this.value),this.updateValidity()),Er(this,e,this.value)}forwardNative(e){let t=e.target;this.value=t.value,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}dispatchValueChanged(e){this.value=e.target.value}formResetCallback(){this.value=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}updateValidity(){let e=this.shadowRoot?.querySelector(`textarea`);e&&this.internals.setValidity(e.validity,e.validationMessage,e)}render(){let e=mr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return j`
      <div class=${e}>
        <textarea
          .value=${this.value}
          .autocomplete="${this.autoComplete}"
          class="input"
          placeholder=${this.placeholder}
          name=${this.name}
          .rows=${this.rows}
          part="input"
          style=${Ms({resize:this.resize})}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?disabled=${this.disabled}
          aria-label=${t.label}
          aria-description=${t.description}
          aria-invalid=${t.invalid}
          @input=${this.dispatchValueChanged}
          @change=${this.dispatchValueChanged}
          @focus=${this.forwardNative}
          @blur=${this.forwardNative}
          @keydown=${this.forwardNative}
          @keyup=${this.forwardNative}
          @keypress=${this.forwardNative}
        ></textarea>
        ${this.invalid?j`<quantic-icon-lucide-circle-alert
              name=${yr.CircleAlert}
              size=${vr.Small}
              class="error-icon"
            ></quantic-icon-lucide-circle-alert>`:``}
      </div>
    `}};Gc.meta={tag:`quantic-textarea`,description:`Multi-line text field with native form association. Wrap in quantic-field to add a visible label, hint text, and validation messaging.`,category:`form`,avoidWhen:[{when:`the value is code or structured text needing a line gutter`,useInstead:`quantic-code-input`}],accessibility:{providedByComponent:[`form association`,`native textarea semantics`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},parts:{input:{description:`The native textarea element.`}},relatedTo:[`quantic-field`,`quantic-text-input`]},Gc.formAssociated=!0,Gc.styles=ct`
    :host {
      display: inline-block;
      width: 100%;

      --quantic-internal-textarea-padding-inline: var(--quantic-spacing-3);
      --quantic-internal-textarea-padding-block: var(--quantic-spacing-md);
      --quantic-component-textarea-bg: var(--quantic-bg-primary);
      --quantic-component-textarea-color: var(--quantic-text-primary);
    }

    .main {
      position: relative;
      display: block;
      box-sizing: border-box;
      width: 100%;
      font-family: var(--quantic-font-family-body);
      border: 1px solid var(--quantic-component-textarea-border-color, var(--quantic-border-primary));
      border-radius: var(--quantic-component-textarea-border-radius, var(--quantic-radius-sm));
      color: var(--quantic-component-textarea-color);
      background-color: var(--quantic-component-textarea-bg);
      padding: var(--quantic-component-textarea-padding-block, var(--quantic-internal-textarea-padding-block))
        var(--quantic-component-textarea-padding-inline, var(--quantic-internal-textarea-padding-inline));
      transition:
        border-color 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out;
    }

    .main::before {
      content: '';
      pointer-events: none;
      display: block;
      position: absolute;
      inset: 0;
      border-radius: var(--quantic-component-textarea-border-radius, var(--quantic-radius-sm));
      border: 2px solid var(--quantic-focus-ring);
      transition: all 0.2s ease-in-out;
      opacity: 0;
    }

    .main.size--xs {
      font-size: 13px;
      --quantic-internal-textarea-padding-inline: var(--quantic-spacing-2);
      --quantic-internal-textarea-padding-block: var(--quantic-spacing-xxs);
    }

    .main.size--sm {
      font-size: var(--quantic-font-size-body-sm);
      --quantic-internal-textarea-padding-inline: var(--quantic-spacing-2);
      --quantic-internal-textarea-padding-block: var(--quantic-spacing-sm);
    }

    .main.size--md {
      font-size: var(--quantic-font-size-body-md);
    }

    .main.size--lg {
      font-size: var(--quantic-font-size-body-lg);
      --quantic-internal-textarea-padding-inline: var(--quantic-spacing-4);
      --quantic-internal-textarea-padding-block: var(--quantic-spacing-3);
    }

    .input {
      appearance: none;
      display: block;
      border: none;
      background: none;
      outline: none;
      color: var(--quantic-text-secondary);
      padding: 0;
      margin: 0;
      min-height: 1lh;
      width: 100%;
      line-height: inherit;
      font-family: inherit;
      font-size: inherit;
      font-weight: var(--quantic-font-weight-regular);
    }

    .input:disabled {
      cursor: not-allowed;
      color: var(--quantic-fg-disabled-subtle);
    }

    .main:focus-within::before {
      inset: -4px;
      opacity: 1;
      border: 2px solid var(--quantic-focus-ring);
      border-radius: calc(var(--quantic-component-textarea-border-radius, var(--quantic-radius-sm)) + 4px);
    }

    :host([invalid]) .main {
      border-color: var(--quantic-border-error);
    }

    :host([invalid]) .main::before {
      border-color: var(--quantic-border-error);
    }

    :host([invalid]) .main:focus-within {
      border-color: var(--quantic-component-textarea-border-color, var(--quantic-border-primary));
    }

    .error-icon {
      position: absolute;
      bottom: var(--quantic-spacing-2);
      right: var(--quantic-spacing-2);
      color: var(--quantic-border-error);
      pointer-events: none;
    }
  `,A([P({type:`string`,default:``,description:`Current value of the textarea.`})],Gc.prototype,`value`,void 0),A([P({type:`string`,description:`Name submitted with form data.`})],Gc.prototype,`name`,void 0),A([P({type:`string`,description:`Placeholder text shown when the field is empty.`,copyRule:`placeholder`})],Gc.prototype,`placeholder`,void 0),A([P({type:`TextareaSize`,options:Object.values(Uc),default:Uc.Medium,description:`Controls padding and font size.`})],Gc.prototype,`size`,void 0),A([P({type:`number`,default:`4`,description:`Number of visible text rows.`})],Gc.prototype,`rows`,void 0),A([P({type:`TextareaResize`,options:Object.values(Wc),default:Wc.Vertical,description:`Controls the resize handle direction.`})],Gc.prototype,`resize`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],Gc.prototype,`disabled`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],Gc.prototype,`required`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Makes the field non-editable but still focusable and selectable.`})],Gc.prototype,`readOnly`,void 0),A([P({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],Gc.prototype,`invalid`,void 0),A([P({type:`string`,default:`off`,reflect:!0,description:`Native autocomplete attribute passed to the inner <textarea>.`})],Gc.prototype,`autoComplete`,void 0),Gc=A([F(`value-changed`,{description:`Fired whenever the value changes, from user input or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),F(`input`,{forwarded:!0}),F(`change`,{forwarded:!0}),F(`focus`,{forwarded:!0}),F(`blur`,{forwarded:!0}),F(`keydown`,{forwarded:!0}),F(`keyup`,{forwarded:!0}),F(`keypress`,{forwarded:!0}),I(`quantic-textarea`)],Gc);function Kc(e){return e}var qc=/\/\*(?:[^*]|\*(?!\/))*\*\//g,Jc=/\n/g,Yc=/^\s*/,Xc=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Zc=/^:\s*/,Qc=/^((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|url\((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|[^)]*)\)|[^};])+)/,$c=/^[;\s]*/,el=`
`,tl=`/`,nl=`*`,rl=``,il=`comment`,al=`declaration`;function ol(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var n=1,r=1;function i(e){var t=e.match(Jc);t&&(n+=t.length);var i=e.lastIndexOf(el);r=~i?e.length-i:r+e.length}function a(){var e={line:n,column:r};return function(t){return t.position=new o(e),l(),t}}function o(e){this.start=e,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function s(i){var a=Error(t.source+`:`+n+`:`+r+`: `+i);if(a.reason=i,a.filename=t.source,a.line=n,a.column=r,a.source=e,!t.silent)throw a}function c(t){var n=t.exec(e);if(n){var r=n[0];return i(r),e=e.slice(r.length),n}}function l(){c(Yc)}function u(e){for(var t;t=d();)e.push(t);return e}function d(){var t=a();if(tl==e.charAt(0)&&nl==e.charAt(1)){for(var n=2;rl!=e.charAt(n)&&(nl!=e.charAt(n)||tl!=e.charAt(n+1));)++n;if(n+=2,rl===e.charAt(n-1))return s(`End of comment missing`);var o=e.slice(2,n-2);return r+=2,i(o),e=e.slice(n),r+=2,t({type:il,comment:o})}}function f(){var e=a(),t=c(Xc);if(t){if(d(),!c(Zc))return s(`property missing ':'`);var n=c(Qc),r=e({type:al,property:t[0].replace(qc,rl).trim(),value:n?n[0].replace(qc,rl).trim():rl});return c($c),r}}function p(){var e=[];u(e);for(var t;t=f();)e.push(t),u(e);return e}return l(),p()}function sl(e,t){let n=null;if(!e||typeof e!=`string`)return n;let r=ol(e),i=typeof t==`function`;return r.forEach(e=>{if(e.type!==`declaration`)return;let{property:r,value:a}=e;i?t(r,a,e):a&&(n??={},n[r]=a)}),n}var cl=/^--[a-zA-Z0-9_-]+$/,ll=/-([a-z])/g,ul=/^[^-]+$/,dl=/^-(webkit|moz|ms|o|khtml)-/,fl=/^-(ms)-/,pl=e=>!e||ul.test(e)||cl.test(e),ml=(e,t)=>t.toUpperCase(),hl=(e,t)=>`${t}-`,gl=(e,t={})=>pl(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(fl,hl):e.replace(dl,hl),e.replace(ll,ml));function _l(e,t){let n={};return!e||typeof e!=`string`||sl(e,(e,r)=>{e&&r&&(n[gl(e,t)]=r)}),n}var vl=(e,t,...n)=>{let r=typeof t?.style==`object`?t.style:void 0;return Kc((e,t,...n)=>{let i=t?.style;return typeof i==`string`&&(t={...t,style:{...r,..._l(i,{reactCompat:!0})}}),_.createElement(e,t,...n)})(e,t,...n)},U={..._,createElement:vl};typeof window>`u`&&(globalThis.litSsrReactEnabled=!0);var yl=$e({react:U,tagName:`quantic-alert`,elementClass:Pr,events:{onClose:`close`}});yl.displayName=`Alert`;var bl=$e({react:U,tagName:`quantic-badge`,elementClass:to});bl.displayName=`Badge`;var W=$e({react:U,tagName:`quantic-button`,elementClass:L});W.displayName=`Button`;var xl=$e({react:U,tagName:`quantic-button-bar-item`,elementClass:yo});xl.displayName=`ButtonBarItem`;var Sl=$e({react:U,tagName:`quantic-button-bar`,elementClass:vo});Sl.displayName=`ButtonBar`;var Cl=$e({react:U,tagName:`quantic-checkbox`,elementClass:xo,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`}});Cl.displayName=`Checkbox`;var wl=$e({react:U,tagName:`quantic-combobox`,elementClass:Qa,events:{onValueChanged:`value-changed`,onInputChanged:`input-changed`,onFocus:`focus`,onBlur:`blur`}});wl.displayName=`Combobox`;var Tl=$e({react:U,tagName:`quantic-confirm-dialog`,elementClass:ks,events:{onConfirm:`confirm`,onCancel:`cancel`}});Tl.displayName=`ConfirmDialog`;var El=$e({react:U,tagName:`quantic-dialog-actions`,elementClass:Do});El.displayName=`DialogActions`;var Dl=$e({react:U,tagName:`quantic-dialog-title`,elementClass:Eo});Dl.displayName=`DialogTitle`;var Ol=$e({react:U,tagName:`quantic-dialog`,elementClass:Os,events:{onOpenChanged:`open-changed`,onBeforeOpen:`before-open`,onAfterOpen:`after-open`,onBeforeClose:`before-close`,onAfterClose:`after-close`}});Ol.displayName=`Dialog`;var kl=$e({react:U,tagName:`quantic-drawer`,elementClass:Ws,events:{onOpenChanged:`open-changed`,onBeforeOpen:`before-open`,onAfterOpen:`after-open`,onBeforeClose:`before-close`,onAfterClose:`after-close`,onResize:`resize`}});kl.displayName=`Drawer`;var Al=$e({react:U,tagName:`quantic-log-output`,elementClass:zc});Al.displayName=`LogOutput`;var jl=$e({react:U,tagName:`quantic-select`,elementClass:Xs,events:{onValueChanged:`value-changed`,onFocus:`focus`,onBlur:`blur`}});jl.displayName=`Select`;var Ml=$e({react:U,tagName:`quantic-tag`,elementClass:Hc,events:{onTagSelect:`tag-select`,onTagDismiss:`tag-dismiss`}});Ml.displayName=`Tag`;var Nl=$e({react:U,tagName:`quantic-text-input`,elementClass:Js,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`,onKeypress:`keypress`}});Nl.displayName=`TextInput`;var Pl=$e({react:U,tagName:`quantic-textarea`,elementClass:Gc,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`,onKeypress:`keypress`}});Pl.displayName=`Textarea`;async function Fl(e){let t=await fetch(e);if(!t.ok)throw Error(`${e}: HTTP ${t.status}`);return await t.json()}var Il=()=>Fl(`/api/assets`),Ll=()=>Fl(`/api/status`),Rl=()=>Fl(`/api/vocabulary`);async function zl(e,t,n){try{let r=await fetch(t,{method:e,headers:n===void 0?void 0:{"Content-Type":`application/json`},body:n===void 0?void 0:JSON.stringify(n)}),i=await r.json().catch(()=>({}));if(r.ok&&i.asset){let e=i.asset.id;return{ok:!0,asset:{...i.asset,thumb_url:`/thumbs/${e}.webp`,full_url:`/files/${e}`}}}return{ok:!1,status:r.status,error:i.error??`HTTP ${r.status}`,errors:i.errors??[]}}catch(e){return{ok:!1,status:0,error:e.message,errors:[]}}}var Bl=(e,t)=>zl(`PATCH`,`/api/assets/${encodeURIComponent(e)}`,t),Vl=e=>zl(`POST`,`/api/assets/${encodeURIComponent(e)}/confirm`),Hl=e=>zl(`POST`,`/api/assets/${encodeURIComponent(e)}/retire`),Ul=e=>zl(`POST`,`/api/assets/${encodeURIComponent(e)}/restore`),Wl=(e,t=8)=>Fl(`/api/assets/${encodeURIComponent(e)}/similar?limit=${t}`);function Gl(e){let t={},n=[];for(let r of e){let e=/^([a-z_]+)(?:\.[a-z_]+)?:/.exec(r);e?(t[e[1]]??=[]).push(r):n.push(r)}return{byField:t,general:n}}async function Kl(e,t,n){try{let r=await fetch(t,{method:e,headers:n?.json===void 0?void 0:{"Content-Type":`application/json`},body:n?.form??(n?.json===void 0?void 0:JSON.stringify(n.json))}),i=await r.json().catch(()=>({})),a=Array.isArray(i.errors)?` (${i.errors.join(`; `)})`:``,o=r.ok?``:`${i.error??i.message??`HTTP ${r.status}`}${a}`;return{ok:r.ok,status:r.status,data:i,error:o}}catch(e){return{ok:!1,status:0,data:{},error:e.message}}}var ql=encodeURIComponent,Jl=(e,t)=>Kl(`POST`,`/api/vocabulary/${ql(e)}`,{json:{slug:t}}),Yl=(e,t,n)=>Kl(`POST`,`/api/vocabulary/${ql(e)}/${ql(t)}/rename`,{json:{new:n}}),Xl=(e,t,n)=>Kl(`POST`,`/api/vocabulary/${ql(e)}/${ql(t)}/merge`,{json:{into:n}}),Zl=(e,t)=>Kl(`DELETE`,`/api/vocabulary/${ql(e)}/${ql(t)}`),Ql=e=>Kl(`POST`,`/api/ingest`,{form:e}),$l=()=>Kl(`POST`,`/api/sync`),eu=e=>Kl(`POST`,`/api/${e}`),tu=e=>Kl(`GET`,`/api/jobs/${ql(e)}`);async function nu(e,t=50){let n=await Kl(`GET`,`/api/search?q=${encodeURIComponent(e)}&limit=${t}`);return{ok:n.ok,hits:n.data.hits??[],stale:!!n.data.stale,error:n.error}}var ru=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),G=o(((e,t)=>{t.exports=ru()}))(),K=600;function iu({jobId:e,name:t,onFinished:n}){let[r,i]=(0,_.useState)({state:`running`,log:[],result:null,error:null}),[a,o]=(0,_.useState)(null),s=(0,_.useRef)(n);return(0,_.useEffect)(()=>{s.current=n}),(0,_.useEffect)(()=>{let t=!1,n,r=async()=>{let a=await tu(e);t||(a.ok?(i(a.data),a.data.state===`running`?n=setTimeout(r,K):s.current(a.data)):o(a.error))};return r(),()=>{t=!0,n&&clearTimeout(n)}},[e]),(0,G.jsxs)(`section`,{className:`job-log`,"aria-label":`${t} job`,children:[(0,G.jsxs)(`div`,{className:`job-log-head`,children:[(0,G.jsx)(`strong`,{children:t}),(0,G.jsx)(bl,{size:`sm`,color:r.state===`failed`?`error`:r.state===`done`?`success`:`warning`,children:r.state})]}),a&&(0,G.jsxs)(yl,{type:`error`,children:[`Lost contact with job: `,a]}),r.error&&(0,G.jsx)(yl,{type:`error`,children:r.error}),(0,G.jsx)(Al,{lines:r.log,follow:!0})]})}var au=[`hero`,`spot-illustration`,`background`,`screenshot`,`diagram`,`lifestyle`];function ou({products:e,onIngested:t,onReviewQueue:n}){let[r,i]=(0,_.useState)([]),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(``),[d,f]=(0,_.useState)(``),[p,m]=(0,_.useState)(``),[h,g]=(0,_.useState)(``),[v,y]=(0,_.useState)(!1),[b,x]=(0,_.useState)(!1),[S,ee]=(0,_.useState)(null),[C,w]=(0,_.useState)(null),[te,T]=(0,_.useState)(null),[ne,re]=(0,_.useState)(null),ie=(0,_.useRef)(null),E=e=>{e?.length&&i(t=>[...t,...Array.from(e)])},ae=s===`screenshot`,oe=r.length>0&&s!==``&&l.trim()!==``&&(!ae||h!==``);return(0,G.jsxs)(`div`,{className:`ingest`,children:[(0,G.jsxs)(`div`,{className:`dropzone${a?` dropzone-over`:``}`,onDragOver:e=>{e.preventDefault(),o(!0)},onDragLeave:()=>o(!1),onDrop:e=>{e.preventDefault(),o(!1),E(e.dataTransfer.files)},children:[(0,G.jsx)(`p`,{children:`Drop images here`}),(0,G.jsx)(W,{size:`sm`,variant:`outline`,onClick:()=>ie.current?.click(),children:`Choose files`}),(0,G.jsx)(`input`,{ref:ie,type:`file`,multiple:!0,accept:`image/*`,hidden:!0,"aria-label":`Choose image files`,onChange:e=>{E(e.target.files),e.target.value=``}}),r.length>0&&(0,G.jsx)(`ul`,{className:`ingest-files`,"aria-label":`Files to ingest`,children:r.map((e,t)=>(0,G.jsxs)(`li`,{children:[e.name,` `,(0,G.jsx)(W,{size:`sm`,variant:`ghost`,onClick:()=>i(e=>e.filter((e,n)=>n!==t)),children:`Remove`})]},`${e.name}-${t}`))})]}),(0,G.jsxs)(`div`,{className:`ingest-form`,children:[(0,G.jsxs)(`div`,{className:`field`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Class`}),(0,G.jsx)(jl,{"aria-label":`Class`,placeholder:`Choose class`,options:au.map(e=>[e,e]),value:s,onValueChanged:e=>c(e.detail.value)})]}),ae&&(0,G.jsxs)(`div`,{className:`field`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Product (required for screenshots)`}),(0,G.jsx)(jl,{"aria-label":`Product`,placeholder:`Choose product`,options:e.map(e=>[e,e]),value:h,onValueChanged:e=>g(e.detail.value)})]}),(0,G.jsxs)(`div`,{className:`field`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Source origin`}),(0,G.jsx)(Nl,{"aria-label":`Source origin`,placeholder:`e.g. adobe-stock`,value:l,onValueChanged:e=>u(e.detail.value)})]}),(0,G.jsxs)(`div`,{className:`field`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`License (optional)`}),(0,G.jsx)(Nl,{"aria-label":`License`,value:d,onValueChanged:e=>f(e.detail.value)})]}),(0,G.jsxs)(`div`,{className:`field`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`License id (optional)`}),(0,G.jsx)(Nl,{"aria-label":`License id`,value:p,onValueChanged:e=>m(e.detail.value)})]}),(0,G.jsx)(`div`,{className:`field`,children:(0,G.jsx)(Cl,{size:`sm`,checked:v,onValueChanged:e=>y(e.detail.checked),children:`These are anti-examples (what not to do)`})}),(0,G.jsx)(`div`,{children:(0,G.jsx)(W,{disabled:!oe||b,onClick:async()=>{x(!0),ee(null),w(null),T(null),re(null);let e=new FormData;r.forEach(t=>e.append(`files`,t)),e.append(`asset_class`,s),e.append(`origin`,l.trim()),d.trim()&&e.append(`license`,d.trim()),p.trim()&&e.append(`license_id`,p.trim()),ae&&e.append(`product`,h),v&&e.append(`anti_example`,`true`);let n=await Ql(e);x(!1),n.ok?(w(n.data),i([]),t(n.data)):ee(n.error)},children:b?`Ingesting...`:`Ingest ${r.length||``} file${r.length===1?``:`s`}`})})]}),S&&(0,G.jsx)(yl,{type:`error`,children:S}),C&&(0,G.jsxs)(`section`,{className:`ingest-report`,"aria-label":`Ingest report`,children:[(0,G.jsxs)(yl,{type:C.created.length?`success`:`warning`,children:[C.created.length,` created, `,C.skipped.length,` skipped.`]}),C.created.length>0&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`ul`,{children:C.created.map(e=>(0,G.jsx)(`li`,{children:e},e))}),(0,G.jsx)(`p`,{children:`Re-index so new assets get thumbnails and show up in search.`}),(0,G.jsxs)(`div`,{className:`ingest-actions`,children:[(0,G.jsx)(W,{size:`sm`,onClick:async()=>{re(null);let e=await eu(`reindex`);e.ok?T(e.data.job_id):re(e.error)},disabled:te!==null,children:`Re-index now`}),` `,(0,G.jsx)(W,{size:`sm`,variant:`outline`,onClick:n,children:`Open review queue`})]}),ne&&(0,G.jsx)(yl,{type:`error`,children:ne}),te&&(0,G.jsx)(iu,{jobId:te,name:`Re-index`,onFinished:()=>t(C)},te)]}),C.skipped.length>0&&(0,G.jsx)(`ul`,{"aria-label":`Skipped files`,children:C.skipped.map((e,t)=>(0,G.jsxs)(`li`,{children:[(0,G.jsx)(`strong`,{children:e.file}),`: `,e.reason]},`${e.file}-${t}`))})]})]})}var su=[`use`,`class`,`status`,`product`,`tone`,`categories`,`verticals`,`concepts`,`style`,`license`];function cu(e,t){switch(t){case`use`:return[e.anti_example?`anti-example`:`example`];case`class`:return e.class?[e.class]:[];case`status`:return e.status?[e.status]:[];case`product`:return e.products??[];case`tone`:return e.tone?[e.tone]:[];case`categories`:return e.categories??[];case`verticals`:return e.verticals??[];case`concepts`:return e.concepts??[];case`style`:return e.style??[];case`license`:return e.license?[e.license]:[]}}function lu(e){return[e.id,e.file,e.description,e.avoid_reason??``,e.class,e.status,e.license,e.tone??``,...e.products,...e.categories,...e.verticals,...e.concepts,...e.style].join(`
`).toLowerCase()}function uu(e,t,n){let r=n.trim().toLowerCase(),i=su.flatMap(e=>{let n=t[e];return n&&n.length?[{axis:e,want:n}]:[]});return e.filter(e=>{for(let{axis:t,want:n}of i){let r=cu(e,t);if(!n.some(e=>r.includes(e)))return!1}return r===``||lu(e).includes(r)})}function du(e,t){let n=new Map;for(let r of e)for(let e of new Set(cu(r,t)))n.set(e,(n.get(e)??0)+1);return[...n].map(([e,t])=>({value:e,count:t})).sort((e,t)=>t.count-e.count||e.value.localeCompare(t.value))}var fu={products:`product`,categories:`categories`,verticals:`verticals`,concepts:`concepts`,style:`style`};function pu(e,t){let n={};for(let[r,i]of Object.entries(t)){let t=fu[r];n[r]=i.map(n=>({slug:n,count:t?e.filter(e=>cu(e,t).includes(n)).length:0}))}return n}function mu(e,t){let n=new Map(t.map(e=>[e.id,e]));return e.flatMap(e=>{let t=n.get(e.id);return t?[t]:[]})}function hu(e,t){return e===t.thumb_url&&t.full_url!==t.thumb_url?t.full_url:null}var gu=/^[a-z0-9]+(?:-[a-z0-9]+)*$/;function _u({assets:e,vocabulary:t,onChanged:n,onOpenInGrid:r}){let i=pu(e,t),[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)({}),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(null),v=()=>{o(null),c(``)},y=(e,t)=>{f(!1),e.ok?(m(null),g(t),v(),n()):(g(null),m({text:e.error,usage:e.data.usage}),v())},b=async(e,t)=>{f(!0),m(null),y(await e(),t)},x=e=>{let t=(l[e]??``).trim();b(()=>Jl(e,t),`Added ${t} to ${e}.`).then(()=>u(t=>({...t,[e]:``})))},S=a,ee=S?(t[S.axis]??[]).filter(e=>e!==S.slug):[],C=gu.test(s)&&!!S&&s!==S.slug;return(0,G.jsxs)(`div`,{className:`vocab`,children:[p&&(0,G.jsxs)(yl,{type:`error`,children:[(0,G.jsx)(`div`,{children:p.text}),p.usage&&p.usage.length>0&&(0,G.jsx)(`ul`,{"aria-label":`Assets using this slug`,children:p.usage.map(e=>(0,G.jsx)(`li`,{children:e},e))})]}),h&&(0,G.jsx)(`p`,{className:`editor-message`,role:`status`,children:h}),Object.entries(i).map(([e,t])=>(0,G.jsxs)(`section`,{className:`vocab-axis`,"aria-label":`${e} vocabulary`,children:[(0,G.jsxs)(`h2`,{children:[e,` `,(0,G.jsx)(bl,{size:`sm`,color:`gray`,children:t.length})]}),(0,G.jsx)(`ul`,{className:`vocab-list`,children:t.map(({slug:t,count:n})=>(0,G.jsxs)(`li`,{className:`vocab-row`,children:[(0,G.jsx)(W,{size:`sm`,variant:`ghost`,"aria-label":`Show ${t} in grid`,onClick:()=>fu[e]&&r(fu[e],t),children:t}),(0,G.jsx)(`span`,{className:`facet-count`,"aria-label":`${n} assets`,children:n}),(0,G.jsx)(`span`,{className:`ops-spacer`}),(0,G.jsx)(W,{size:`sm`,variant:`outline`,disabled:d,"aria-label":`Rename ${t}`,onClick:()=>{c(t),o({kind:`rename`,axis:e,slug:t})},children:`Rename`}),(0,G.jsx)(W,{size:`sm`,variant:`outline`,disabled:d,"aria-label":`Merge ${t}`,onClick:()=>o({kind:`merge`,axis:e,slug:t}),children:`Merge`}),(0,G.jsx)(W,{size:`sm`,variant:`outline`,disabled:d||n>0,"aria-label":`Delete ${t}`,title:n>0?`In use by ${n} asset(s); merge it instead`:void 0,onClick:()=>o({kind:`delete`,axis:e,slug:t}),children:`Delete`})]},t))}),(0,G.jsxs)(`div`,{className:`vocab-add`,children:[(0,G.jsx)(Nl,{size:`sm`,"aria-label":`New ${e} slug`,placeholder:`new-slug`,value:l[e]??``,onValueChanged:t=>u(n=>({...n,[e]:t.detail.value}))}),(0,G.jsx)(W,{size:`sm`,disabled:d||!gu.test((l[e]??``).trim()),onClick:()=>x(e),children:`Add`})]})]},e)),(0,G.jsx)(Tl,{open:S?.kind===`delete`,heading:`Delete ${S?.slug??``}?`,message:`Remove ${S?.slug??``} from ${S?.axis??``}. It is unused, so no assets change. This syncs from origin first and makes one commit.`,confirmText:`Delete`,destructive:!0,loading:d,onConfirm:()=>S&&b(()=>Zl(S.axis,S.slug),`Deleted ${S.slug}.`),onCancel:v}),(0,G.jsxs)(Ol,{open:S?.kind===`rename`||S?.kind===`merge`,size:`sm`,"aria-label":S?.kind===`merge`?`Merge slug`:`Rename slug`,onOpenChanged:e=>{e.detail.open||v()},children:[(0,G.jsx)(Dl,{slot:`header`,children:S?.kind===`merge`?`Merge ${S.slug} into...`:`Rename ${S?.slug??``}`}),S?.kind===`merge`?(0,G.jsx)(jl,{"aria-label":`Merge into`,placeholder:`Choose target slug`,options:ee.map(e=>[e,e]),value:s,onValueChanged:e=>c(e.detail.value)}):(0,G.jsx)(Nl,{"aria-label":`New slug`,value:s,invalid:s!==``&&!gu.test(s),onValueChanged:e=>c(e.detail.value)}),(0,G.jsx)(`p`,{className:`editor-message`,children:`Rewrites every affected asset (all statuses) and vocabulary.json in one commit, after syncing from origin.`}),(0,G.jsxs)(El,{slot:`footer`,children:[(0,G.jsx)(W,{variant:`outline`,onClick:v,children:`Cancel`}),S?.kind===`merge`?(0,G.jsx)(W,{disabled:d||!s,onClick:()=>b(()=>Xl(S.axis,S.slug,s),`Merged ${S.slug} into ${s}.`),children:`Merge`}):(0,G.jsx)(W,{disabled:d||!C,onClick:()=>S&&b(()=>Yl(S.axis,S.slug,s),`Renamed ${S.slug} to ${s}.`),children:`Rename`})]})]})]})}var vu={use:`Use`,class:`Class`,status:`Status`,product:`Product`,tone:`Tone`,categories:`Categories`,verticals:`Verticals`,concepts:`Concepts`,style:`Style`,license:`License`};function yu({assets:e,filters:t,q:n,onToggle:r}){return(0,G.jsx)(`nav`,{className:`facet-rail`,"aria-label":`Filters`,children:su.map(i=>{let{[i]:a,...o}=t,s=du(uu(e,o,n),i),c=t[i]??[],l=[...s,...c.filter(e=>!s.some(t=>t.value===e)).map(e=>({value:e,count:0}))];return l.length===0?null:(0,G.jsxs)(`fieldset`,{className:`facet-group`,children:[(0,G.jsx)(`legend`,{children:vu[i]}),l.map(({value:e,count:t})=>(0,G.jsx)(Cl,{size:`sm`,checked:c.includes(e),onValueChanged:t=>r(i,e,t.detail.checked),"aria-label":`${vu[i]}: ${e}`,children:(0,G.jsxs)(`span`,{className:`facet-row`,children:[(0,G.jsx)(`span`,{children:e}),(0,G.jsx)(`span`,{className:`facet-count`,children:t})]})},e))]},i)})})}function bu({status:e,error:t,onRefresh:n}){let[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(null),p=a||s,m=async()=>{c(!0),u(null);let e=await $l();if(c(!1),e.ok){let t=e.data;u({kind:`success`,text:!t.pulled&&!t.pushed?`In sync with origin.`:`Synced${t.pulled?`, pulled changes`:``}${t.pushed?`, pushed changes`:``}.`})}else u({kind:`error`,text:e.error});n()},h=async e=>{u(null);let t=await eu(e);t.ok?(o(!0),i({id:t.data.job_id,name:e===`reindex`?`Re-index`:`Publish`})):u({kind:`error`,text:t.error})};return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`div`,{className:`ops-bar`,role:`status`,"aria-label":`Workspace status`,children:[t&&(0,G.jsxs)(bl,{color:`error`,children:[`Status unavailable: `,t]}),e&&(0,G.jsxs)(G.Fragment,{children:[e.git&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(bl,{color:e.git.behind?`warning`:`gray`,children:[`git: `,e.git.ahead,` ahead / `,e.git.behind,` behind`]}),(0,G.jsxs)(bl,{color:e.git.dirty_managed.length?`warning`:`gray`,children:[e.git.dirty_managed.length,` uncommitted managed`]}),e.git.dirty_other.length>0&&(0,G.jsxs)(bl,{color:`gray`,children:[e.git.dirty_other.length,` other dirty (ignored)`]})]}),(0,G.jsxs)(bl,{color:e.index_stale?`warning`:`success`,children:[`index `,e.index_stale?`stale`:`fresh`]}),(0,G.jsxs)(bl,{color:e.exports_stale?`warning`:`success`,children:[`exports `,e.exports_stale?`stale`:`fresh`]}),(0,G.jsxs)(bl,{color:`gray`,children:[`embedder: `,e.embedder_mode??`none`]})]}),d&&(0,G.jsxs)(bl,{color:`success`,children:[`last publish: `,d]}),(0,G.jsx)(`span`,{className:`ops-spacer`}),(0,G.jsx)(W,{size:`sm`,variant:`outline`,disabled:p,onClick:m,children:s?`Syncing...`:`Sync`}),(0,G.jsx)(W,{size:`sm`,variant:`outline`,disabled:p,onClick:()=>h(`reindex`),children:`Re-index`}),(0,G.jsx)(W,{size:`sm`,disabled:p,onClick:()=>h(`publish`),children:`Publish`})]}),l&&(0,G.jsx)(`div`,{className:`ops-notice`,children:(0,G.jsx)(yl,{type:l.kind===`error`?`error`:`success`,children:l.text})}),r&&(0,G.jsx)(`div`,{className:`ops-notice`,children:(0,G.jsx)(iu,{jobId:r.id,name:r.name,onFinished:e=>{o(!1),e.state===`done`&&typeof e.result?.version==`string`&&f(e.result.version),n()}},r.id)})]})}var xu=[`products`,`categories`,`verticals`,`concepts`,`style`],Su=e=>({description:e.description??``,tags:{products:e.products,categories:e.categories,verticals:e.verticals,concepts:e.concepts,style:e.style},tone:e.tone??``,product_version:e.product_version??``,captured_at:e.captured_at??``,usage_restrictions:(e.usage_restrictions??[]).join(`, `),anti_example:!!e.anti_example,avoid_reason:e.avoid_reason??``}),Cu=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]);function wu(e,t){let n={};t.description!==(e.description??``)&&(n.description=t.description);for(let r of xu)Cu(t.tags[r],e[r])||(n[r]=t.tags[r]);e.class===`background`&&t.tone&&t.tone!==(e.tone??``)&&(n.tone=t.tone),e.class===`screenshot`&&(t.product_version&&t.product_version!==(e.product_version??``)&&(n.product_version=t.product_version),t.captured_at&&t.captured_at!==(e.captured_at??``)&&(n.captured_at=t.captured_at));let r=t.usage_restrictions.split(`,`).map(e=>e.trim()).filter(Boolean);return Cu(r,e.usage_restrictions??[])||(n.usage_restrictions=r),t.anti_example!==!!e.anti_example&&(n.anti_example=t.anti_example),t.anti_example&&(n.anti_example!==void 0||t.avoid_reason!==(e.avoid_reason??``))&&(n.avoid_reason=t.avoid_reason),n}function Tu(e,t){return!e||t()}function Eu({label:e,value:t,vocabulary:n,onChange:r,errors:i=[]}){let[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(0),l=n.filter(e=>!t.includes(e)).map(e=>({label:e,value:e})),u=a.trim()!==``&&!n.includes(a.trim()),d=e=>{n.includes(e)&&(t.includes(e)||r([...t,e]),o(``),c(e=>e+1))};return(0,G.jsxs)(`div`,{className:`field${i.length?` field-invalid`:``}`,"data-field":e,children:[(0,G.jsx)(`span`,{className:`field-label`,children:e}),(0,G.jsxs)(`div`,{className:`chips`,children:[t.map(n=>(0,G.jsx)(Ml,{size:`sm`,dismissible:!0,"aria-label":`${e}: ${n}`,onTagDismiss:()=>r(t.filter(e=>e!==n)),children:n},n)),(0,G.jsx)(wl,{size:`sm`,"aria-label":`Add ${e}`,placeholder:`Add ${e}`,options:l,allowCustomValue:!0,invalid:i.length>0,onInputChanged:e=>o(e.detail.value),onValueChanged:e=>d(e.detail.value)},s)]}),u&&(0,G.jsxs)(`p`,{className:`field-hint`,role:`status`,children:[`"`,a.trim(),`" is not in the `,e,` vocabulary, so it will not be saved. Propose it to the curator to add it.`]}),i.map(e=>(0,G.jsx)(`p`,{className:`field-error`,role:`alert`,children:e},e))]})}function Du({errors:e}){return(0,G.jsx)(G.Fragment,{children:(e??[]).map(e=>(0,G.jsx)(`p`,{className:`field-error`,role:`alert`,children:e},e))})}function Ou({asset:e,vocabulary:t,onChanged:n,onTransition:r,onOpenSimilar:i,onDirtyChange:a,ref:o}){let[s,c]=(0,_.useState)(()=>Su(e)),[l,u]=(0,_.useState)([]),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(!1),v=(0,_.useRef)(!1),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(null),ee=(0,_.useMemo)(()=>wu(e,s),[e,s]),C=Object.keys(ee).length>0;(0,_.useEffect)(()=>(a?.(C),()=>a?.(!1)),[C,a]),(0,_.useEffect)(()=>{let t=!0;return Wl(e.id).then(e=>t&&b(e)).catch(e=>t&&S(e.message)),()=>{t=!1}},[e.id]);let w=e=>(u(e.errors),m(e.errors.length?null:e.error),!1),te=async()=>{if(!C)return e;let t=await Bl(e.id,ee);return t.ok?(n(t.asset),c(Su(t.asset)),t.asset):(w(t),null)},T=async e=>{v.current=!0,g(!0),u([]),f(null),m(null);try{return await e()}finally{v.current=!1,g(!1)}},ne=()=>T(async()=>{await te()&&C&&f(`Saved.`)}),re=()=>v.current?Promise.resolve(!1):T(async()=>{if(!await te())return!1;let t=await Vl(e.id);return t.ok?(n(t.asset),r?.(`confirm`,t.asset),!0):w(t)}),ie=t=>v.current?Promise.resolve(!1):T(async()=>{let i=await(t===`retire`?Hl:Ul)(e.id);return i.ok?(n(i.asset),r?.(t,i.asset),!0):w(i)});(0,_.useImperativeHandle)(o,()=>({confirm:re}));let{byField:E,general:ae}=Gl(l),oe=new Set([...xu,`description`,`usage_restrictions`,`anti_example`,`avoid_reason`,...e.class===`background`?[`tone`]:[],...e.class===`screenshot`?[`product_version`,`captured_at`]:[]]),se=[...ae,...Object.entries(E).filter(([e])=>!oe.has(e)).flatMap(([,e])=>e)];return(0,G.jsxs)(`div`,{className:`editor`,"data-asset-id":e.id,children:[(0,G.jsx)(`a`,{href:e.full_url,target:`_blank`,rel:`noreferrer`,className:`editor-image`,title:`Open full resolution`,children:(0,G.jsx)(`img`,{src:e.full_url,alt:e.description||e.id})}),(0,G.jsxs)(`div`,{className:`editor-form`,children:[(0,G.jsxs)(`div`,{className:`editor-head`,children:[(0,G.jsx)(`h2`,{children:e.id}),(0,G.jsx)(bl,{size:`sm`,color:e.status===`confirmed`?`success`:e.status===`proposed`?`warning`:`gray`,children:e.status}),e.anti_example&&(0,G.jsx)(bl,{size:`sm`,color:`error`,children:`anti-example`}),(0,G.jsxs)(`span`,{className:`editor-meta`,children:[e.class,` / `,e.aspect,` / `,e.license]})]}),d&&(0,G.jsx)(`p`,{className:`editor-message`,role:`status`,children:d}),p&&(0,G.jsx)(yl,{type:`error`,children:p}),se.length>0&&(0,G.jsx)(yl,{type:`error`,children:se.map(e=>(0,G.jsx)(`div`,{children:e},e))}),(0,G.jsxs)(`div`,{className:`field anti-field${E.avoid_reason?` field-invalid`:``}`,children:[(0,G.jsx)(Cl,{size:`sm`,checked:s.anti_example,onValueChanged:e=>c(t=>({...t,anti_example:e.detail.checked})),children:`Anti-example: shows what not to do (never served for use)`}),s.anti_example&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Why to avoid it`}),(0,G.jsx)(Pl,{"aria-label":`Why to avoid it`,placeholder:`e.g. Glossy 3D clip-art with lens flare; reads as generic stock.`,value:s.avoid_reason,invalid:!!E.avoid_reason,onValueChanged:e=>c(t=>({...t,avoid_reason:e.detail.value}))})]}),(0,G.jsx)(Du,{errors:[...E.anti_example??[],...E.avoid_reason??[]]})]}),(0,G.jsxs)(`div`,{className:`field${E.description?` field-invalid`:``}`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Description`}),(0,G.jsx)(Pl,{"aria-label":`Description`,value:s.description,invalid:!!E.description,onValueChanged:e=>c(t=>({...t,description:e.detail.value}))}),(0,G.jsx)(Du,{errors:E.description})]}),xu.map(e=>(0,G.jsx)(Eu,{label:e,value:s.tags[e],vocabulary:t[e]??[],errors:E[e],onChange:t=>c(n=>({...n,tags:{...n.tags,[e]:t}}))},e)),e.class===`background`&&(0,G.jsxs)(`div`,{className:`field${E.tone?` field-invalid`:``}`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Tone`}),(0,G.jsx)(jl,{"aria-label":`Tone`,placeholder:`Choose tone`,options:[[`dark`,`dark`],[`light`,`light`]],value:s.tone,invalid:!!E.tone,onValueChanged:e=>c(t=>({...t,tone:e.detail.value}))}),(0,G.jsx)(Du,{errors:E.tone})]}),e.class===`screenshot`&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`div`,{className:`field${E.product_version?` field-invalid`:``}`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Product version`}),(0,G.jsx)(Nl,{"aria-label":`Product version`,value:s.product_version,invalid:!!E.product_version,onValueChanged:e=>c(t=>({...t,product_version:e.detail.value}))}),(0,G.jsx)(Du,{errors:E.product_version})]}),(0,G.jsxs)(`div`,{className:`field${E.captured_at?` field-invalid`:``}`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Captured at`}),(0,G.jsx)(Nl,{"aria-label":`Captured at`,placeholder:`YYYY-MM-DD`,value:s.captured_at,invalid:!!E.captured_at,onValueChanged:e=>c(t=>({...t,captured_at:e.detail.value}))}),(0,G.jsx)(Du,{errors:E.captured_at})]})]}),(0,G.jsxs)(`div`,{className:`field${E.usage_restrictions?` field-invalid`:``}`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Usage restrictions (comma separated)`}),(0,G.jsx)(Nl,{"aria-label":`Usage restrictions`,value:s.usage_restrictions,invalid:!!E.usage_restrictions,onValueChanged:e=>c(t=>({...t,usage_restrictions:e.detail.value}))}),(0,G.jsx)(Du,{errors:E.usage_restrictions})]}),(0,G.jsxs)(`div`,{className:`editor-actions`,children:[(0,G.jsx)(W,{size:`sm`,disabled:h||!C,onClick:ne,children:`Save`}),e.status===`proposed`&&(0,G.jsx)(W,{size:`sm`,variant:`outline`,disabled:h,onClick:re,children:`Confirm`}),e.status===`retired`?(0,G.jsx)(W,{size:`sm`,variant:`outline`,disabled:h,onClick:()=>ie(`restore`),children:`Restore`}):(0,G.jsx)(W,{size:`sm`,variant:`outline`,disabled:h,onClick:()=>ie(`retire`),children:`Retire`})]}),(0,G.jsxs)(`section`,{className:`similar`,"aria-label":`More like this`,children:[(0,G.jsx)(`h3`,{children:`More like this`}),x&&(0,G.jsxs)(`p`,{className:`empty`,children:[`Unavailable: `,x]}),!x&&y===null&&(0,G.jsx)(`p`,{className:`empty`,children:`Loading...`}),y&&y.length===0&&(0,G.jsx)(`p`,{className:`empty`,children:`No neighbours found.`}),y&&y.length>0&&(0,G.jsx)(`ul`,{className:`similar-strip`,children:y.map(e=>(0,G.jsx)(`li`,{children:(0,G.jsx)(`a`,{href:e.full_url,title:e.id,onClick:t=>{i&&(t.preventDefault(),i(e.id))},children:(0,G.jsx)(`img`,{src:e.thumb_url,alt:e.description||e.id,loading:`lazy`})})},e.id))})]})]})]})}function ku({status:e}){return e===`proposed`?(0,G.jsx)(bl,{size:`sm`,color:`warning`,children:`proposed`}):e===`confirmed`?(0,G.jsx)(bl,{size:`sm`,color:`success`,children:`confirmed`}):(0,G.jsx)(bl,{size:`sm`,color:`gray`,children:e})}function Au({a:e,onSelect:t}){let[n,r]=(0,_.useState)(e.thumb_url),[i,a]=(0,_.useState)(e.thumb_url);return i!==e.thumb_url&&(a(e.thumb_url),r(e.thumb_url)),(0,G.jsxs)(`li`,{className:`tile${e.status===`retired`?` tile-retired`:``}${e.anti_example?` tile-anti`:``}`,"data-status":e.status,children:[(0,G.jsx)(`a`,{href:e.full_url,className:`tile-thumb`,"aria-label":`Edit ${e.id}`,onClick:n=>{n.metaKey||n.ctrlKey||n.shiftKey||(n.preventDefault(),t(e.id))},children:n?(0,G.jsx)(`img`,{src:n,alt:e.description||e.id,loading:`lazy`,decoding:`async`,onError:()=>r(hu(n,e))}):(0,G.jsx)(`span`,{className:`tile-placeholder`,role:`img`,"aria-label":`No preview for ${e.id}`,children:`No preview`})}),(0,G.jsxs)(`div`,{className:`tile-meta`,children:[(0,G.jsx)(`span`,{className:`tile-id`,title:e.id,children:e.id}),(0,G.jsxs)(`span`,{className:`tile-badges`,children:[e.anti_example&&(0,G.jsx)(bl,{size:`sm`,color:`error`,children:`avoid`}),(0,G.jsx)(ku,{status:e.status})]})]}),(0,G.jsxs)(`div`,{className:`tile-sub`,children:[(0,G.jsx)(`span`,{children:e.class}),e.tone&&(0,G.jsx)(`span`,{children:e.tone}),e.products.length>0&&(0,G.jsxs)(`span`,{children:[e.products.slice(0,2).join(`, `),e.products.length>2?` +${e.products.length-2}`:``]})]})]})}function ju({assets:e,total:t,onSelect:n}){return e.length===0?(0,G.jsx)(`p`,{className:`empty`,children:t===0?`No assets in the library yet.`:`No assets match these filters.`}):(0,G.jsx)(`ul`,{className:`grid`,"aria-label":`${e.length} of ${t} assets`,children:e.map(e=>(0,G.jsx)(Au,{a:e,onSelect:n},e.id))})}var Mu=e=>({queue:e,index:0,exited:e.length===0}),Nu=e=>e.queue[e.index];function Pu(e,t){if(e.exited)return e;switch(t.type){case`next`:return{...e,index:Math.min(e.index+1,e.queue.length-1)};case`prev`:return{...e,index:Math.max(e.index-1,0)};case`confirmed`:case`retired`:{let t=e.queue.filter((t,n)=>n!==e.index);return{queue:t,index:Math.min(e.index,t.length-1),exited:t.length===0}}case`exit`:return{...e,exited:!0}}}var Fu=/^(INPUT|TEXTAREA|SELECT)$|^QUANTIC-(TEXT-INPUT|TEXTAREA|COMBOBOX|SELECT)$/;function Iu({initialIds:e,assets:t,vocabulary:n,onChanged:r,onExit:i,confirmDiscard:a,onDirtyChange:o}){let[s,c]=(0,_.useReducer)(Pu,e,Mu),l=(0,_.useRef)(null),u=Nu(s),d=t.find(e=>e.id===u);(0,_.useEffect)(()=>{s.exited&&i()},[s.exited,i]);let f=(0,_.useRef)(a);(0,_.useEffect)(()=>{f.current=a});let p=e=>{f.current()&&c({type:e})},m=(0,_.useRef)(p);return(0,_.useEffect)(()=>{m.current=p}),(0,_.useEffect)(()=>{let e=e=>{if(e.metaKey||e.ctrlKey||e.altKey)return;let t=e.composedPath()[0]?.tagName??``;if(!Fu.test(t.toUpperCase())){if(e.key===`ArrowRight`)m.current(`next`);else if(e.key===`ArrowLeft`)m.current(`prev`);else if(e.key===`Escape`)m.current(`exit`);else if(e.key===`c`||e.key===`C`)l.current?.confirm();else return;e.preventDefault()}};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),d?(0,G.jsxs)(`div`,{className:`review`,children:[(0,G.jsxs)(`div`,{className:`review-bar`,children:[(0,G.jsx)(W,{size:`sm`,variant:`outline`,disabled:s.index===0,onClick:()=>p(`prev`),children:`Previous`}),(0,G.jsxs)(`span`,{className:`review-position`,role:`status`,"aria-live":`polite`,children:[s.index+1,` of `,s.queue.length]}),(0,G.jsx)(W,{size:`sm`,variant:`outline`,disabled:s.index>=s.queue.length-1,onClick:()=>p(`next`),children:`Next`}),(0,G.jsx)(`span`,{className:`ops-spacer`}),(0,G.jsx)(`span`,{className:`review-keys`,children:`Left/Right: navigate. C: confirm and next. Esc: exit.`}),(0,G.jsx)(W,{size:`sm`,variant:`outline`,onClick:()=>p(`exit`),children:`Exit`})]}),(0,G.jsx)(Ou,{ref:l,asset:d,vocabulary:n,onChanged:r,onDirtyChange:o,onTransition:e=>{e===`confirm`?c({type:`confirmed`}):e===`retire`&&c({type:`retired`})}},d.id)]}):(0,G.jsx)(`p`,{className:`empty`,children:`Review queue is empty.`})}function Lu(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)({}),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)({}),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(`library`),[ee,C]=(0,_.useState)(null),[w,te]=(0,_.useState)(null),[T,ne]=(0,_.useState)(!1),re=(0,_.useCallback)(()=>{Ll().then(e=>{s(e),l(null)}).catch(e=>l(e.message))},[]),ie=(0,_.useCallback)(()=>{Il().then(e=>{t(e),a(null)}).catch(e=>a(e.message)).finally(()=>r(!0)),Rl().then(h).catch(()=>h({})),re()},[re]);(0,_.useEffect)(ie,[ie]),(0,_.useEffect)(()=>{let e=setInterval(re,3e4);return()=>clearInterval(e)},[re]);let E=(0,_.useMemo)(()=>ee?uu(mu(ee.ids,e),u,``):uu(e,u,f),[e,u,f,ee]),ae=(0,_.useCallback)(e=>{t(t=>t.map(t=>t.id===e.id?e:t)),re()},[re]),oe=async()=>{let e=f.trim();if(!e)return;ne(!0),te(null);let t=await nu(e);ne(!1),t.ok?C({q:e,ids:t.hits,stale:t.stale}):(C(null),te(t.error))},se=()=>{C(null),te(null),p(``)},ce=(0,_.useRef)(!1),le=(0,_.useCallback)(e=>{ce.current=e},[]),ue=(0,_.useCallback)(()=>Tu(ce.current,()=>window.confirm(`You have unsaved changes. Discard them?`))?(ce.current=!1,!0):!1,[]);(0,_.useEffect)(()=>{let e=e=>{ce.current&&e.preventDefault()};return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[]);let de=(0,_.useCallback)(()=>b(null),[]),fe=(0,_.useMemo)(()=>e.filter(e=>e.status===`proposed`).length,[e]),pe=e.find(e=>e.id===g),me=e=>{(y!==null||x!==e)&&ue()&&(v(null),b(null),S(e))};return(0,G.jsxs)(`div`,{className:`app`,children:[(0,G.jsxs)(`header`,{className:`topbar`,children:[(0,G.jsx)(`h1`,{children:`Quarry`}),(0,G.jsxs)(Sl,{size:`sm`,"aria-label":`View`,children:[(0,G.jsx)(xl,{active:y===null&&x===`library`,onClick:()=>me(`library`),children:`Library`}),(0,G.jsxs)(xl,{active:y!==null,disabled:fe===0,onClick:()=>{y===null&&ue()&&(v(null),S(`library`),b(e.filter(e=>e.status===`proposed`).map(e=>e.id)))},children:[`Review queue (`,fe,`)`]}),(0,G.jsx)(xl,{active:y===null&&x===`vocab`,onClick:()=>me(`vocab`),children:`Vocabulary`}),(0,G.jsx)(xl,{active:y===null&&x===`ingest`,onClick:()=>me(`ingest`),children:`Ingest`})]}),(0,G.jsx)(`div`,{className:`search`,children:(0,G.jsx)(`div`,{onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),oe())},children:(0,G.jsx)(Nl,{type:`search`,"aria-label":`Search assets`,placeholder:`Filter; press Enter for index search`,value:f,onValueChanged:e=>{p(e.detail.value),C(null),te(null)}})})}),(0,G.jsx)(`span`,{className:`result-count`,children:n?`${E.length} / ${e.length}`:``})]}),(0,G.jsx)(bu,{status:o,error:c,onRefresh:ie}),y===null?x===`vocab`?(0,G.jsx)(`main`,{className:`main`,children:(0,G.jsx)(_u,{assets:e,vocabulary:m,onChanged:ie,onOpenInGrid:(e,t)=>{d({[e]:[t]}),p(``),S(`library`)}})}):x===`ingest`?(0,G.jsx)(`main`,{className:`main`,children:(0,G.jsx)(ou,{products:m.products??[],onIngested:ie,onReviewQueue:()=>{let t=e.filter(e=>e.status===`proposed`).map(e=>e.id);t.length&&b(t)}})}):(0,G.jsxs)(`div`,{className:`body`,children:[(0,G.jsx)(yu,{assets:e,filters:u,q:f,onToggle:(e,t,n)=>d(r=>{let i=r[e]??[];return{...r,[e]:n?[...i.filter(e=>e!==t),t]:i.filter(e=>e!==t)}})}),(0,G.jsxs)(`main`,{className:`main`,children:[(T||ee||w)&&(0,G.jsxs)(`div`,{className:`search-banner`,role:`region`,"aria-label":`Index search`,children:[T&&(0,G.jsx)(`p`,{className:`empty`,children:`Searching index...`}),w&&(0,G.jsxs)(yl,{type:`error`,children:[`Index search failed: `,w,` `,/mismatch|embedder/i.test(w)?`Re-index with the matching embedder (or restart the workbench with the right embedder option), then try again.`:``]}),ee&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`div`,{className:`search-banner-row`,children:[(0,G.jsxs)(`strong`,{children:[`Index search: “`,ee.q,`”`]}),(0,G.jsxs)(`span`,{children:[E.length,` result`,E.length===1?``:`s`,`, best match first`]}),(0,G.jsx)(W,{size:`sm`,variant:`outline`,onClick:se,children:`Clear`})]}),ee.stale&&(0,G.jsx)(yl,{type:`warning`,children:`The index is stale; results may miss recent edits. Re-index to refresh.`})]}),w&&(0,G.jsx)(`div`,{children:(0,G.jsx)(W,{size:`sm`,variant:`outline`,onClick:se,children:`Clear`})})]}),i?(0,G.jsxs)(`p`,{className:`empty`,role:`alert`,children:[`Could not load assets: `,i]}):n?(0,G.jsx)(ju,{assets:E,total:e.length,onSelect:e=>{(e===g||ue())&&v(e)}}):(0,G.jsx)(`p`,{className:`empty`,children:`Loading...`})]})]}):(0,G.jsx)(`main`,{className:`main`,children:(0,G.jsx)(Iu,{initialIds:y,assets:e,vocabulary:m,onChanged:ae,onExit:de,confirmDiscard:ue,onDirtyChange:le})}),(0,G.jsx)(kl,{open:y===null&&!!pe,placement:`right`,size:`lg`,resizable:!0,"aria-label":`Asset editor`,onBeforeClose:e=>{ue()||e.preventDefault()},onOpenChanged:e=>{e.detail.open||v(null)},children:pe&&(0,G.jsx)(Ou,{asset:pe,vocabulary:m,onChanged:ae,onDirtyChange:le,onOpenSimilar:t=>{e.some(e=>e.id===t)&&ue()&&v(t)}},pe.id)})]})}Je.inject(),Ye.inject(),(0,v.createRoot)(document.getElementById(`root`)).render((0,G.jsx)(_.StrictMode,{children:(0,G.jsx)(Lu,{})}));