var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return D(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(k,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=ie(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function A(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function j(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function oe(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,ae)}catch(e){ae(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function se(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else oe(se.bind(null,e))}var ce={map:A,forEach:function(e,t,n){A(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ce,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=se,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:j}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=oe,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,ee());else{var t=n(l);t!==null&&k(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&k(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ee():S=!1}}}var ee;if(typeof y==`function`)ee=function(){y(D)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,te=O.port2;O.port1.onmessage=D,ee=function(){te.postMessage(null)}}else ee=function(){_(D,0)};function k(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,k(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ee()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,ee=Symbol.for(`react.element`),O=Symbol.for(`react.transitional.element`),te=Symbol.for(`react.portal`),k=Symbol.for(`react.fragment`),ne=Symbol.for(`react.strict_mode`),re=Symbol.for(`react.profiler`),ie=Symbol.for(`react.consumer`),A=Symbol.for(`react.context`),j=Symbol.for(`react.forward_ref`),ae=Symbol.for(`react.suspense`),oe=Symbol.for(`react.suspense_list`),se=Symbol.for(`react.memo`),ce=Symbol.for(`react.lazy`),le=Symbol.for(`react.activity`),ue=Symbol.for(`react.legacy_hidden`),de=Symbol.for(`react.memo_cache_sentinel`),fe=Symbol.for(`react.view_transition`),pe=Symbol.for(`react.recoverable`),me=Symbol.iterator;function he(e){return typeof e!=`object`||!e?null:(e=me&&e[me]||e[`@@iterator`],typeof e==`function`?e:null)}var ge=Symbol.for(`react.client.reference`);function _e(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ge?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case k:return`Fragment`;case re:return`Profiler`;case ne:return`StrictMode`;case ae:return`Suspense`;case oe:return`SuspenseList`;case le:return`Activity`;case fe:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case te:return`Portal`;case A:return e.displayName||`Context`;case ie:return(e._context.displayName||`Context`)+`.Consumer`;case j:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case se:return t=e.displayName||null,t===null?_e(e.type)||`Memo`:t;case ce:t=e._payload,e=e._init;try{return _e(e(t))}catch{}}return null}var ve=Array.isArray,M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},be=[],xe=-1;function Se(e){return{current:e}}function Ce(e){0>xe||(e.current=be[xe],be[xe]=null,xe--)}function we(e,t){xe++,be[xe]=e.current,e.current=t}var Te=Se(null),Ee=Se(null),De=Se(null),Oe=Se(null);function ke(e,t){switch(we(De,t),we(Ee,e),we(Te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}Ce(Te),we(Te,e)}function Ae(){Ce(Te),Ce(Ee),Ce(De)}function je(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,we(Oe,e)),t=Te.current;var n=dp(t,e.type);t!==n&&(we(Ee,e),we(Te,n))}function Me(e){Ee.current===e&&(Ce(Te),Ce(Ee)),Oe.current===e&&(Ce(Oe),sh._currentValue=ye)}var Ne,Pe;function Fe(e){if(Ne===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ne=t&&t[1]||``,Pe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ne+e+Pe}var Ie=!1;function Le(e,t){if(!e||Ie)return``;Ie=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ie=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Fe(n):``}function Re(e,t){switch(e.tag){case 26:case 27:case 5:return Fe(e.type);case 16:return Fe(`Lazy`);case 13:return e.child!==t&&t!==null?Fe(`Suspense Fallback`):Fe(`Suspense`);case 19:return Fe(`SuspenseList`);case 0:case 15:return Le(e.type,!1);case 11:return Le(e.type.render,!1);case 1:return Le(e.type,!0);case 31:return Fe(`Activity`);case 30:return Fe(`ViewTransition`);default:return``}}function ze(e){try{var t=``,n=null;do t+=Re(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Be=Object.prototype.hasOwnProperty,Ve=t.unstable_scheduleCallback,He=t.unstable_cancelCallback,Ue=t.unstable_shouldYield,We=t.unstable_requestPaint,Ge=t.unstable_now,Ke=t.unstable_getCurrentPriorityLevel,qe=t.unstable_ImmediatePriority,Je=t.unstable_UserBlockingPriority,P=t.unstable_NormalPriority,F=t.unstable_LowPriority,Ye=t.unstable_IdlePriority,Xe=t.log,Ze=t.unstable_setDisableYieldValue,Qe=null,$e=null;function et(e){if(typeof Xe==`function`&&Ze(e),$e&&typeof $e.setStrictMode==`function`)try{$e.setStrictMode(Qe,e)}catch{}}var tt=Math.clz32?Math.clz32:rt,nt=Math.log,I=Math.LN2;function rt(e){return e>>>=0,e===0?32:31-(nt(e)/I|0)|0}var it=256,at=262144,ot=4194304;function st(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ct(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=st(n))):i=st(o):i=st(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=st(n))):i=st(o)):i=st(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function lt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ut(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-tt(n),i=1<<r;t|=e[r],n&=~i}return t}function dt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ft(){var e=ot;return ot<<=1,!(ot&62914560)&&(ot=4194304),e}function pt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ht(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-tt(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&gt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function gt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-tt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function _t(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function vt(e,t){var n=t&-t;return n=n&42?1:yt(n),(n&(e.suspendedLanes|t))===0?n:0}function yt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function xt(){var e=N.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function St(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var Ct=Math.random().toString(36).slice(2),wt=`__reactFiber$`+Ct,Tt=`__reactProps$`+Ct,Et=`__reactContainer$`+Ct,Dt=`__reactEvents$`+Ct,Ot=`__reactListeners$`+Ct,kt=`__reactHandles$`+Ct,At=`__reactResources$`+Ct,jt=`__reactMarker$`+Ct,Mt=`__reactLoad$`+Ct;function Nt(e){delete e[wt],delete e[Tt],delete e[Ot],delete e[kt]}function Pt(e){var t;if(t=e[wt])return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[wt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Ft(e){if(e=e[wt]||e[Et]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function It(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Lt(e){var t=e[At];return t||=e[At]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Rt(e){e[jt]=!0}function zt(e){e[Mt]=void 0}var Bt=new Set,Vt={};function L(e,t){Ht(e,t),Ht(e+`Capture`,t)}function Ht(e,t){for(Vt[e]=t,e=0;e<t.length;e++)Bt.add(t[e])}var Ut=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Wt={},Gt={};function Kt(e){return Be.call(Gt,e)?!0:Be.call(Wt,e)?!1:Ut.test(e)?Gt[e]=!0:(Wt[e]=!0,!1)}var R=!1;function qt(){var e=R;return R=!1,e}function Jt(e,t,n){if(Kt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Yt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Xt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Qt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function $t(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function en(e){if(!e._valueTracker){var t=Qt(e)?`checked`:`value`;e._valueTracker=$t(e,t,``+e[t])}}function tn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Qt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var nn=/[\n"\\]/g;function rn(e){return e.replace(nn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function an(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Zt(t)):e.value!==``+Zt(t)&&(e.value=``+Zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):sn(e,Zt(n)):o===`number`&&e.value==t?sn(e,Zt(e.value)):sn(e,Zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Zt(s):e.removeAttribute(`name`)}function on(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){en(e);return}n=n==null?``:``+Zt(n),t=t==null?n:``+Zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),en(e)}function sn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function cn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ln(e,t,n){t!=null&&(t=``+Zt(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Zt(n)}function un(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ve(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),en(e)}function dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function pn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||fn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function mn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,R=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(pn(e,a,r),R=!0)}else for(var o in t)t.hasOwnProperty(o)&&pn(e,o,t[o])}function hn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var gn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),_n=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vn(e){return _n.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function yn(){}var bn=null;function z(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xn=null,B=null;function Sn(e){var t=Ft(e);if(t&&(e=t.stateNode)){var n=e[Tt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(an(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+rn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Tt]||null;if(!a)throw Error(i(90));an(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&tn(r)}break a;case`textarea`:ln(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}}}var Cn=!1;function wn(e,t,n){if(Cn)return e(t,n);Cn=!0;try{return e(t)}finally{if(Cn=!1,(xn!==null||B!==null)&&(Ld(),xn&&(t=xn,e=B,B=xn=null,Sn(t),e)))for(t=0;t<e.length;t++)Sn(e[t])}}function Tn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Tt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var En=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Dn=!1;if(En)try{var On={};Object.defineProperty(On,"passive",{get:function(){Dn=!0}}),window.addEventListener(`test`,On,On),window.removeEventListener(`test`,On,On)}catch{Dn=!1}var kn=null,An=null,jn=null;function Mn(){if(jn)return jn;var e,t=An,n=t.length,r,i=`value`in kn?kn.value:kn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return jn=i.slice(e,1<r?1-r:void 0)}function Nn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pn(){return!0}function Fn(){return!1}function In(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Pn:Fn,this.isPropagationStopped=Fn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rn=In(Ln),zn=D({},Ln,{view:0,detail:0}),Bn=In(zn),Vn,Hn,Un,Wn=D({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$n,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Un&&(Un&&e.type===`mousemove`?(Vn=e.screenX-Un.screenX,Hn=e.screenY-Un.screenY):Hn=Vn=0,Un=e),Vn)},movementY:function(e){return`movementY`in e?e.movementY:Hn}}),Gn=In(Wn),V=In(D({},Wn,{dataTransfer:0})),H=In(D({},zn,{relatedTarget:0})),Kn=In(D({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0})),qn=In(D({},Ln,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Jn=In(D({},Ln,{data:0})),Yn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Xn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Zn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zn[e])?!!t[e]:!1}function $n(){return Qn}var er=In(D({},zn,{key:function(e){if(e.key){var t=Yn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Nn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Xn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$n,charCode:function(e){return e.type===`keypress`?Nn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Nn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),tr=In(D({},Wn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nr=In(D({},Ln,{submitter:0})),rr=In(D({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$n})),ir=In(D({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0})),ar=In(D({},Wn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),or=In(D({},Ln,{newState:0,oldState:0,source:0})),sr=[9,13,27,32],cr=En&&`CompositionEvent`in window,lr=null;En&&`documentMode`in document&&(lr=document.documentMode);var ur=En&&`TextEvent`in window&&!lr,dr=En&&(!cr||lr&&8<lr&&11>=lr),fr=` `,pr=!1;function mr(e,t){switch(e){case`keyup`:return sr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function hr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var gr=!1;function _r(e,t){switch(e){case`compositionend`:return hr(t);case`keypress`:return t.which===32?(pr=!0,fr):null;case`textInput`:return e=t.data,e===fr&&pr?null:e;default:return null}}function vr(e,t){if(gr)return e===`compositionend`||!cr&&mr(e,t)?(e=Mn(),jn=An=kn=null,gr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return dr&&t.locale!==`ko`?null:t.data;default:return null}}var yr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!yr[e.type]:t===`textarea`}function xr(e,t,n,r){xn?B?B.push(r):B=[r]:xn=r,t=qf(t,`onChange`),0<t.length&&(n=new Rn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Sr=null,Cr=null;function U(e){Bf(e,0)}function wr(e){if(tn(It(e)))return e}function Tr(e,t){if(e===`change`)return t}var Er=!1;if(En){var Dr;if(En){var Or=`oninput`in document;if(!Or){var kr=document.createElement(`div`);kr.setAttribute(`oninput`,`return;`),Or=typeof kr.oninput==`function`}Dr=Or}else Dr=!1;Er=Dr&&(!document.documentMode||9<document.documentMode)}function Ar(){Sr&&(Sr.detachEvent(`onpropertychange`,jr),Cr=Sr=null)}function jr(e){if(e.propertyName===`value`&&wr(Cr)){var t=[];xr(t,Cr,e,z(e)),wn(U,t)}}function Mr(e,t,n){e===`focusin`?(Ar(),Sr=t,Cr=n,Sr.attachEvent(`onpropertychange`,jr)):e===`focusout`&&Ar()}function Nr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return wr(Cr)}function Pr(e,t){if(e===`click`)return wr(t)}function Fr(e,t){if(e===`input`||e===`change`)return wr(t)}function Ir(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Lr=typeof Object.is==`function`?Object.is:Ir;function Rr(e,t){if(Lr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Be.call(t,i)||!Lr(e[i],t[i]))return!1}return!0}function zr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vr(e,t){var n=Br(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Br(n)}}function Hr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ur(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=zr(e.document)}return t}function Wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Gr=En&&`documentMode`in document&&11>=document.documentMode,Kr=null,qr=null,Jr=null,Yr=!1;function Xr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yr||Kr==null||Kr!==zr(r)||(r=Kr,`selectionStart`in r&&Wr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&Rr(Jr,r)||(Jr=r,r=qf(qr,`onSelect`),0<r.length&&(t=new Rn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Kr)))}function Zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Qr={animationend:Zr(`Animation`,`AnimationEnd`),animationiteration:Zr(`Animation`,`AnimationIteration`),animationstart:Zr(`Animation`,`AnimationStart`),transitionrun:Zr(`Transition`,`TransitionRun`),transitionstart:Zr(`Transition`,`TransitionStart`),transitioncancel:Zr(`Transition`,`TransitionCancel`),transitionend:Zr(`Transition`,`TransitionEnd`)},$r={},ei={};En&&(ei=document.createElement(`div`).style,`AnimationEvent`in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),`TransitionEvent`in window||delete Qr.transitionend.transition);function ti(e){if($r[e])return $r[e];if(!Qr[e])return e;var t=Qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ei)return $r[e]=t[n];return e}var ni=ti(`animationend`),ri=ti(`animationiteration`),ii=ti(`animationstart`),ai=ti(`transitionrun`),oi=ti(`transitionstart`),si=ti(`transitioncancel`),ci=ti(`transitionend`),li=new Map,ui=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ui.push(`scrollEnd`);function di(e,t){li.set(e,t),L(t,[e])}var fi=0;function pi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=vd.identifierPrefix;var n=fi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function mi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Ed;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function hi(e,t){return e=mi(e),t=mi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var gi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},_i=[],vi=0,yi=0;function bi(){for(var e=vi,t=yi=vi=0;t<e;){var n=_i[t];_i[t++]=null;var r=_i[t];_i[t++]=null;var i=_i[t];_i[t++]=null;var a=_i[t];if(_i[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&wi(n,i,a)}}function xi(e,t,n,r){_i[vi++]=e,_i[vi++]=t,_i[vi++]=n,_i[vi++]=r,yi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Si(e,t,n,r){return xi(e,t,n,r),Ti(e)}function Ci(e,t){return xi(e,null,null,t),Ti(e)}function wi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-tt(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ti(e){if(50<Dd)throw Dd=0,Od=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ei={};function Di(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oi(e,t,n,r){return new Di(e,t,n,r)}function ki(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ai(e,t){var n=e.alternate;return n===null?(n=Oi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ji(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Mi(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)ki(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Te.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case le:return e=Oi(31,n,t,a),e.elementType=le,e.lanes=o,e;case k:return Ni(n.children,a,o,t);case ne:s=8,a|=24;break;case re:return e=Oi(12,n,t,a|2),e.elementType=re,e.lanes=o,e;case ae:return e=Oi(13,n,t,a),e.elementType=ae,e.lanes=o,e;case oe:return e=Oi(19,n,t,a),e.elementType=oe,e.lanes=o,e;case ue:case fe:return e=a|32,e=Oi(30,n,t,e),e.elementType=fe,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case A:s=10;break a;case ie:s=9;break a;case j:s=11;break a;case se:s=14;break a;case ce:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Oi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ni(e,t,n,r){return e=Oi(7,e,r,t),e.lanes=n,e}function Pi(e,t,n){return e=Oi(6,e,null,t),e.lanes=n,e}function Fi(e){var t=Oi(18,null,null,0);return t.stateNode=e,t}function Ii(e,t,n){return t=Oi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Li=new WeakMap;function Ri(e,t){if(typeof e==`object`&&e){var n=Li.get(e);return n===void 0?(t={value:e,source:t,stack:ze(t)},Li.set(e,t),t):n}return{value:e,source:t,stack:ze(t)}}var zi=[],Bi=0,Vi=null,Hi=0,Ui=[],Wi=0,Gi=null,Ki=1,qi=``;function Ji(e,t){zi[Bi++]=Hi,zi[Bi++]=Vi,Vi=e,Hi=t}function Yi(e,t,n){Ui[Wi++]=Ki,Ui[Wi++]=qi,Ui[Wi++]=Gi,Gi=e;var r=Ki;e=qi;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var a=32-tt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ki=1<<32-tt(t)+i|n<<i|r,qi=a+e}else Ki=1<<a|n<<i|r,qi=e}function Xi(e){e.return!==null&&(Ji(e,1),Yi(e,1,0))}function Zi(e){for(;e===Vi;)Vi=zi[--Bi],zi[Bi]=null,Hi=zi[--Bi],zi[Bi]=null;for(;e===Gi;)Gi=Ui[--Wi],Ui[Wi]=null,qi=Ui[--Wi],Ui[Wi]=null,Ki=Ui[--Wi],Ui[Wi]=null}function Qi(e,t){Ui[Wi++]=Ki,Ui[Wi++]=qi,Ui[Wi++]=Gi,Ki=t.id,qi=t.overflow,Gi=e}var $i=null,W=null,G=!1,ea=null,ta=!1,na=Error(i(519));function ra(e){throw la(Ri(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),na}function ia(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[wt]=e,t[Tt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<Rf.length;n++)$(Rf[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),on(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),un(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||$f(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=yn),t=!0):t=!1,t||ra(e,!0)}function aa(e){for($i=e.return;$i;)switch($i.tag){case 5:case 31:case 13:ta=!1;return;case 27:case 3:ta=!0;return;default:$i=$i.return}}function oa(e){if(e!==$i)return!1;if(!G)return aa(e),G=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&W&&ra(e),aa(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));W=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));W=dm(e)}else t===27?(t=W,Sp(e.type)?(e=um,um=null,W=e):W=t):W=$i?lm(e.stateNode.nextSibling):null;return!0}function sa(){W=$i=null,G=!1}function ca(){var e=ea;return e!==null&&(ud===null?ud=e:ud.push.apply(ud,e),ea=null),e}function la(e){ea===null?ea=[e]:ea.push(e)}var ua=Se(null),da=null,fa=null;function pa(e,t,n){we(ua,t._currentValue),t._currentValue=n}function ma(e){e._currentValue=ua.current,Ce(ua)}function ha(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ga(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ha(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ha(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ha(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function _a(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Lr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Oe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&ga(t,e,n,r),t.flags|=262144,e!==null}function va(e){for(e=e.firstContext;e!==null;){if(!Lr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ya(e){da=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ba(e){return Sa(da,e)}function xa(e,t){return da===null&&ya(e),Sa(e,t)}function Sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},fa===null){if(e===null)throw Error(i(308));fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fa=fa.next=t;return n}var Ca=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},wa=t.unstable_scheduleCallback,Ta=t.unstable_NormalPriority,Ea={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Da(){return{controller:new Ca,data:new Map,refCount:0}}function Oa(e){e.refCount--,e.refCount===0&&wa(Ta,function(){e.controller.abort()})}function ka(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Aa=null;function ja(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ma=null,Na=0,Pa=0,Fa=null;function Ia(e,t){if(Ma===null){var n=Ma=[];Na=0,Pa=Nf(),Fa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Na++,t.then(La,La),t}function La(){if(--Na===0&&(Aa=null,Ma!==null)){Fa!==null&&(Fa.status=`fulfilled`);var e=Ma;Ma=null,Pa=0,Fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ra(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var za=M.S;M.S=function(e,t){if(pd=Ge(),typeof t==`object`&&t&&typeof t.then==`function`&&Ia(e,t),Aa!==null)for(var n=yf;n!==null;)ka(n,Aa),n=n.next;if(n=e.types,n!==null){for(var r=yf;r!==null;)ka(r,n),r=r.next;if(Pa!==0){r=Aa,r===null&&(r=Aa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}za!==null&&za(e,t)};var Ba=Se(null);function Va(){var e=Ba.current;return e===null?Xu.pooledCache:e}function Ha(e,t){t===null?we(Ba,Ba.current):we(Ba,t.pool)}function Ua(){var e=Va();return e===null?null:{parent:Ea._currentValue,pool:e}}var Wa=Error(i(460)),Ga=Error(i(474)),Ka=Error(i(542)),qa={then:function(){}};function Ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ya(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(yn,yn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,$a(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(yn,yn);else{if(e=Xu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,$a(e),e}throw Za=t,Wa}}function Xa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Za=e,Wa):e}}var Za=null;function Qa(){if(Za===null)throw Error(i(459));var e=Za;return Za=null,e}function $a(e){if(e===Wa||e===Ka)throw Error(i(483))}var eo=null,to=0;function no(e){var t=to;return to+=1,eo===null&&(eo=[]),Ya(eo,e,t)}function ro(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function io(e,t){throw t.$$typeof===ee?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function ao(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ai(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Pi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===k?(e=d(e,t,n.props.children,r,n.key),ro(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ce&&Xa(i)===t.type)?(t=a(t,n.props),ro(t,n),t.return=e,t):(t=Mi(n.type,n.key,n.props,null,e.mode,r),ro(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ii(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ni(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Pi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case O:return n=Mi(t.type,t.key,t.props,null,e.mode,n),ro(n,t),n.return=e,n;case te:return t=Ii(t,e.mode,n),t.return=e,t;case ce:return t=Xa(t),f(e,t,n)}if(ve(t)||he(t))return t=Ni(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,no(t),n);if(t.$$typeof===A)return f(e,xa(e,t),n);io(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case O:return n.key===i?l(e,t,n,r):null;case te:return n.key===i?u(e,t,n,r):null;case ce:return n=Xa(n),p(e,t,n,r)}if(ve(n)||he(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,no(n),r);if(n.$$typeof===A)return p(e,t,xa(e,n),r);io(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case O:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case te:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ce:return r=Xa(r),m(e,t,n,r,i)}if(ve(r)||he(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,no(r),i);if(r.$$typeof===A)return m(e,t,n,xa(t,r),i);io(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),G&&Ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return G&&Ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),G&&Ji(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),G&&Ji(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return G&&Ji(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),G&&Ji(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===k&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case O:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===k){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),ro(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ce&&Xa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ro(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===k?(c=Ni(o.props.children,e.mode,c,o.key),ro(c,o),c.return=e,e=c):(c=Mi(o.type,o.key,o.props,null,e.mode,c),ro(c,o),c.return=e,e=c)}return s(e);case te:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ii(o,e.mode,c),c.return=e,e=c}return s(e);case ce:return o=Xa(o),_(e,r,o,c)}if(ve(o))return h(e,r,o,c);if(he(o)){if(l=he(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,no(o),c);if(o.$$typeof===A)return _(e,r,xa(e,o),c);io(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Pi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{to=0;var i=_(e,t,n,r);return eo=null,i}catch(t){if(t===Wa||t===Ka)throw t;var a=Oi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var oo=ao(!0),so=ao(!1),co=!1;function lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function po(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Yu&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ti(e),wi(e,null,n),t}return xi(e,r,t,n),Ti(e)}function mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_t(e,n)}}function ho(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var go=!1;function _o(){if(go){var e=Fa;if(e!==null)throw e}}function vo(e,t,n,r){go=!1;var i=e.updateQueue;co=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Q&f)===f:(r&f)===f){f!==0&&f===Pa&&(go=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:co=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),id|=o,e.lanes=o,e.memoizedState=d}}function yo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function bo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)yo(n[e],t)}var xo=Se(null),So=Se(0);function Co(e,t){e=nd,we(So,e),we(xo,t),nd=e|t.baseLanes}function wo(){we(So,nd),we(xo,xo.current)}function To(){nd=So.current,Ce(xo),Ce(So)}var Eo=Se(null),Do=null;function Oo(e){var t=e.alternate;we(No,No.current&1),we(Eo,e),Do===null&&(t===null||xo.current!==null||t.memoizedState!==null)&&(Do=e)}function ko(e){we(No,No.current),we(Eo,e),Do===null&&(Do=e)}function Ao(e){e.tag===22?(we(No,No.current),we(Eo,e),Do===null&&(Do=e)):jo()}function jo(){we(No,No.current),we(Eo,Eo.current)}function Mo(e){Ce(Eo),Do===e&&(Do=null),Ce(No)}var No=Se(0);function Po(e,t){we(Eo,Eo.current),we(No,t)}function Fo(e){Ce(No),Ce(Eo),Do===e&&(Do=null)}function Io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lo=0,K=null,Ro=null,zo=null,Bo=!1,Vo=!1,Ho=!1,Uo=0,Wo=0,Go=null,Ko=0;function qo(){throw Error(i(321))}function Jo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lr(e[n],t[n]))return!1;return!0}function Yo(e,t,n,r,i,a){return Lo=a,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?fc:pc,Ho=!1,a=n(r,i),Ho=!1,Vo&&(a=Zo(t,n,r,i)),Xo(e),a}function Xo(e){M.H=dc;var t=Ro!==null&&Ro.next!==null;if(Lo=0,zo=Ro=K=null,Bo=!1,Wo=0,Go=null,t)throw Error(i(300));e===null||Ac||(e=e.dependencies,e!==null&&va(e)&&(Ac=!0))}function Zo(e,t,n,r){K=e;var a=0;do{if(Vo&&(Go=null),Wo=0,Vo=!1,25<=a)throw Error(i(301));if(a+=1,zo=Ro=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=mc,o=t(n,r)}while(Vo);return o}function Qo(){var e=M.H,t=e.useState()[0];return t=typeof t.then==`function`?as(t):t,e=e.useState()[0],(Ro===null?null:Ro.memoizedState)!==e&&(K.flags|=1024),t}function $o(){var e=Uo!==0;return Uo=0,e}function es(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ts(e){if(Bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bo=!1}Lo=0,zo=Ro=K=null,Vo=!1,Wo=Uo=0,Go=null}function ns(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zo===null?K.memoizedState=zo=e:zo=zo.next=e,zo}function rs(){if(Ro===null){var e=K.alternate;e=e===null?null:e.memoizedState}else e=Ro.next;var t=zo===null?K.memoizedState:zo.next;if(t!==null)zo=t,Ro=e;else{if(e===null)throw K.alternate===null?Error(i(467)):Error(i(310));Ro=e,e={memoizedState:Ro.memoizedState,baseState:Ro.baseState,baseQueue:Ro.baseQueue,queue:Ro.queue,next:null},zo===null?K.memoizedState=zo=e:zo=zo.next=e}return zo}function is(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function as(e){var t=Wo;return Wo+=1,Go===null&&(Go=[]),e=Ya(Go,e,t),t=K,(zo===null?t.memoizedState:zo.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?fc:pc),e}function os(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return as(e);if(e.$$typeof===pe)return;if(e.$$typeof===A)return ba(e)}throw Error(i(438,String(e)))}function ss(e){var t=null,n=K.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=K.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=is(),K.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=de;return t.index++,n}function cs(e,t){return typeof t==`function`?t(e):t}function ls(e){return us(rs(),Ro,e)}function us(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Lo&f)===f:(Q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Pa&&(d=!0);else if((Lo&p)===p){u=u.next,p===Pa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,K.lanes|=p,id|=p;f=u.action,Ho&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,K.lanes|=f,id|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Lr(o,e.memoizedState)&&(Ac=!0,d&&(n=Fa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ds(e){var t=rs(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Lr(o,t.memoizedState)||(Ac=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fs(e,t,n){var r=K,a=rs(),o=G;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Lr((Ro||a).memoizedState,n);if(s&&(a.memoizedState=n,Ac=!0),a=a.queue,Ls(hs.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||zo!==null&&!!(zo.memoizedState.tag&1),Ms(e?9:8,{destroy:void 0},ms.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Xu===null)throw Error(i(349));o||Lo&127||ps(r,t,n)}return n}function ps(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t=is(),K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ms(e,t,n,r){t.value=n,t.getSnapshot=r,gs(t)&&_s(e)}function hs(e,t,n){return n(function(){gs(t)&&_s(e)})}function gs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lr(e,n)}catch{return!0}}function _s(e){var t=Ci(e,2);t!==null&&Md(t,e,2)}function vs(e){var t=ns();if(typeof e==`function`){var n=e;if(e=n(),Ho){et(!0);try{n()}finally{et(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:e},t}function ys(e,t,n,r){return e.baseState=n,us(e,Ro,typeof r==`function`?r:cs)}function bs(e,t,n,r,a){if(cc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};M.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,xs(t,o)):(o.next=n.next,t.pending=n.next=o)}}function xs(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=M.T,o={};o.types=a===null?null:a.types,M.T=o;try{var s=n(i,r),c=M.S;c!==null&&c(o,s),Ss(e,t,s)}catch(n){ws(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),M.T=a}}else try{a=n(i,r),Ss(e,t,a)}catch(n){ws(e,t,n)}}function Ss(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Cs(e,t,n)},function(n){return ws(e,t,n)}):Cs(e,t,n)}function Cs(e,t,n){t.status=`fulfilled`,t.value=n,Ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,xs(e,n)))}function ws(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ts(t),t=t.next;while(t!==r)}e.action=null}function Ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Es(e,t){return t}function Ds(e,t){if(G){var n=Xu.formState;if(n!==null){a:{var r=K;if(G){if(W){b:{for(var i=W,a=ta;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){W=lm(i.nextSibling),r=i.data===`F!`;break a}}ra(r)}r=!1}r&&(t=n[0])}}return n=ns(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:t},n.queue=r,n=ac.bind(null,K,r),r.dispatch=n,r=vs(!1),a=sc.bind(null,K,!1,r.queue),r=ns(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=bs.bind(null,K,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Os(e){return ks(rs(),Ro,e)}function ks(e,t,n){if(t=us(e,t,Es)[0],e=ls(cs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=as(t)}catch(e){throw e===Wa?Ka:e}else r=t;t=rs();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(K.flags|=2048,Ms(9,{destroy:void 0},As.bind(null,i,n),null)),[r,a,e]}function As(e,t){e.action=t}function js(e){var t=rs(),n=Ro;if(n!==null)return ks(t,n,e);rs(),t=t.memoizedState,n=rs();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ms(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=K.updateQueue,t===null&&(t=is(),K.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ns(){return rs().memoizedState}function Ps(e,t,n,r){var i=ns();K.flags|=e,i.memoizedState=Ms(1|t,{destroy:void 0},n,r===void 0?null:r)}function Fs(e,t,n,r){var i=rs();r=r===void 0?null:r;var a=i.memoizedState.inst;Ro!==null&&r!==null&&Jo(r,Ro.memoizedState.deps)?i.memoizedState=Ms(t,a,n,r):(K.flags|=e,i.memoizedState=Ms(1|t,a,n,r))}function Is(e,t){Ps(8390656,8,e,t)}function Ls(e,t){Fs(2048,8,e,t)}function Rs(e){K.flags|=4;var t=K.updateQueue;if(t===null)t=is(),K.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function zs(e){var t=rs().memoizedState;return Rs({ref:t,nextImpl:e}),function(){if(Yu&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Bs(e,t){return Fs(4,2,e,t)}function Vs(e,t){return Fs(4,4,e,t)}function Hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Us(e,t,n){n=n==null?null:n.concat([e]),Fs(4,4,Hs.bind(null,t,e),n)}function Ws(){}function Gs(e,t){var n=rs();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Jo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ks(e,t){var n=rs();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Jo(t,r[1]))return r[0];if(r=e(),Ho){et(!0);try{e()}finally{et(!1)}}return n.memoizedState=[r,t],r}function qs(e,t,n){return n===void 0||Lo&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=n,e=Ad(),K.lanes|=e,id|=e,n)}function Js(e,t,n,r){return Lr(n,t)?n:xo.current===null?!(Lo&106)||Lo&1073741824&&!(Q&261930)?(Ac=!0,e.memoizedState=n):(e=Ad(),K.lanes|=e,id|=e,t):(e=qs(e,n,r),Lr(e,t)||(Ac=!0),e)}function Ys(e,t,n,r,i){var a=N.p;N.p=a!==0&&8>a?a:8;var o=M.T,s={};s.types=o===null?null:o.types,M.T=s,sc(e,!1,t,n);try{var c=i(),l=M.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?oc(e,t,Ra(c,r),kd(e)):oc(e,t,r,kd(e))}catch(n){oc(e,t,{then:function(){},status:`rejected`,reason:n},kd())}finally{N.p=a,o!==null&&s.types!==null&&(o.types=s.types),M.T=o}}function Xs(){}function Zs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Qs(e).queue;Ys(e,a,t,ye,n===null?Xs:function(){return $s(e),n(r)})}function Qs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:ye},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $s(e){var t=Qs(e);t.next===null&&(t=e.alternate.memoizedState),oc(e,t.next.queue,{},kd())}function ec(){return ba(sh)}function tc(){return rs().memoizedState}function nc(){return rs().memoizedState}function rc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kd();e=fo(n);var r=po(t,e,n);r!==null&&(Md(r,t,n),mo(r,t,n)),t={cache:Da()},e.payload=t;return}t=t.return}}function ic(e,t,n){var r=kd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},cc(e)?lc(t,n):(n=Si(e,t,n,r),n!==null&&(Md(n,e,r),uc(n,t,r)))}function ac(e,t,n){oc(e,t,n,kd())}function oc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(cc(e))lc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Lr(s,o))return xi(e,t,i,0),Xu===null&&bi(),!1}catch{}if(n=Si(e,t,i,r),n!==null)return Md(n,e,r),uc(n,t,r),!0}return!1}function sc(e,t,n,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cc(e)){if(t)throw Error(i(479))}else t=Si(e,n,r,2),t!==null&&Md(t,e,2)}function cc(e){var t=e.alternate;return e===K||t!==null&&t===K}function lc(e,t){Vo=Bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_t(e,n)}}var dc={readContext:ba,use:os,useCallback:qo,useContext:qo,useEffect:qo,useImperativeHandle:qo,useLayoutEffect:qo,useInsertionEffect:qo,useMemo:qo,useReducer:qo,useRef:qo,useState:qo,useDebugValue:qo,useDeferredValue:qo,useTransition:qo,useSyncExternalStore:qo,useId:qo,useHostTransitionStatus:qo,useFormState:qo,useActionState:qo,useOptimistic:qo,useMemoCache:qo,useCacheRefresh:qo,useEffectEvent:qo},fc={readContext:ba,use:os,useCallback:function(e,t){return ns().memoizedState=[e,t===void 0?null:t],e},useContext:ba,useEffect:Is,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ps(4194308,4,Hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ps(4194308,4,e,t)},useInsertionEffect:function(e,t){Ps(4,2,e,t)},useMemo:function(e,t){var n=ns();t=t===void 0?null:t;var r=e();if(Ho){et(!0);try{e()}finally{et(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ns();if(n!==void 0){var i=n(t);if(Ho){et(!0);try{n(t)}finally{et(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ic.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=ns();return e={current:e},t.memoizedState=e},useState:function(e){e=vs(e);var t=e.queue,n=ac.bind(null,K,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ws,useDeferredValue:function(e,t){return qs(ns(),e,t)},useTransition:function(){var e=vs(!1);return e=Ys.bind(null,K,e.queue,!0,!1),ns().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=K,a=ns();if(G){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Xu===null)throw Error(i(349));Q&127||ps(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Is(hs.bind(null,r,o,e),[e]),r.flags|=2048,Ms(9,{destroy:void 0},ms.bind(null,r,o,n,t),null),n},useId:function(){var e=ns(),t=Xu.identifierPrefix;if(G){var n=qi,r=Ki;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Uo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Ko++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ec,useFormState:Ds,useActionState:Ds,useOptimistic:function(e){var t=ns();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=sc.bind(null,K,!0,n),n.dispatch=t,[e,t]},useMemoCache:ss,useCacheRefresh:function(){return ns().memoizedState=rc.bind(null,K)},useEffectEvent:function(e){var t=ns(),n={impl:e};return t.memoizedState=n,function(){if(Yu&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},pc={readContext:ba,use:os,useCallback:Gs,useContext:ba,useEffect:Ls,useImperativeHandle:Us,useInsertionEffect:Bs,useLayoutEffect:Vs,useMemo:Ks,useReducer:ls,useRef:Ns,useState:function(){return ls(cs)},useDebugValue:Ws,useDeferredValue:function(e,t){return Js(rs(),Ro.memoizedState,e,t)},useTransition:function(){var e=ls(cs)[0],t=rs().memoizedState;return[typeof e==`boolean`?e:as(e),t]},useSyncExternalStore:fs,useId:tc,useHostTransitionStatus:ec,useFormState:Os,useActionState:Os,useOptimistic:function(e,t){return ys(rs(),Ro,e,t)},useMemoCache:ss,useCacheRefresh:nc,useEffectEvent:zs},mc={readContext:ba,use:os,useCallback:Gs,useContext:ba,useEffect:Ls,useImperativeHandle:Us,useInsertionEffect:Bs,useLayoutEffect:Vs,useMemo:Ks,useReducer:ds,useRef:Ns,useState:function(){return ds(cs)},useDebugValue:Ws,useDeferredValue:function(e,t){var n=rs();return Ro===null?qs(n,e,t):Js(n,Ro.memoizedState,e,t)},useTransition:function(){var e=ds(cs)[0],t=rs().memoizedState;return[typeof e==`boolean`?e:as(e),t]},useSyncExternalStore:fs,useId:tc,useHostTransitionStatus:ec,useFormState:js,useActionState:js,useOptimistic:function(e,t){var n=rs();return Ro===null?(n.baseState=e,[e,n.queue.dispatch]):ys(n,Ro,e,t)},useMemoCache:ss,useCacheRefresh:nc,useEffectEvent:zs};function hc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kd(),i=fo(r);i.payload=t,n!=null&&(i.callback=n),t=po(e,i,r),t!==null&&(Md(t,e,r),mo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kd(),i=fo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=po(e,i,r),t!==null&&(Md(t,e,r),mo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kd(),r=fo(n);r.tag=2,t!=null&&(r.callback=t),t=po(e,r,n),t!==null&&(Md(t,e,n),mo(t,e,n))}};function _c(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(i,a):!0}function vc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gc.enqueueReplaceState(t,t.state,null)}function yc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function bc(e){gi(e)}function xc(e){console.error(e)}function Sc(e){gi(e)}function Cc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function wc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Tc(e,t,n){return n=fo(n),n.tag=3,n.payload={element:null},n.callback=function(){Cc(e,t)},n}function Ec(e){return e=fo(e),e.tag=3,e}function Dc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){wc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){wc(t,n,r),typeof i!=`function`&&(gd===null?gd=new Set([this]):gd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Oc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&_a(t,n,a,!0),n=Eo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Do===null?Wd():n.alternate===null&&rd===0&&(rd=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===qa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),pf(e,r,a)),!1;case 22:return n.flags|=65536,r===qa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),pf(e,r,a)),!1}throw Error(i(435,n.tag))}return pf(e,r,a),Wd(),!1}if(G)return t=Eo.current,t===null?(r!==na&&(t=Error(i(423),{cause:r}),la(Ri(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ri(r,n),a=Tc(e.stateNode,r,a),ho(e,a),rd!==4&&(rd=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==na&&(e=Error(i(422),{cause:r}),la(Ri(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ri(o,n),ld===null?ld=[o]:ld.push(o),rd!==4&&(rd=2),t===null)return!0;r=Ri(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Tc(n.stateNode,r,e),ho(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gd===null||!gd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Ec(a),Dc(a,e,n,r),ho(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var kc=Error(i(461)),Ac=!1;function jc(e,t,n,r){t.child=e===null?so(t,null,n,r):oo(t,e.child,n,r)}function Mc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ya(t),r=Yo(e,t,n,o,a,i),s=$o(),e!==null&&!Ac?(es(e,t,i),ol(e,t,i)):(G&&s&&Xi(t),t.flags|=1,jc(e,t,r,i),t.child)}function Nc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ki(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Pc(e,t,a,r,i)):(e=Mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!sl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Rr:n,n(o,r)&&e.ref===t.ref)return ol(e,t,i)}return t.flags|=1,e=Ai(a,r),e.ref=t.ref,e.return=t,t.child=e}function Pc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Rr(a,r)&&e.ref===t.ref){if(Ac=!1,t.pendingProps=r=a,sl(e,i))e.flags&131072&&(Ac=!0);else return t.lanes=e.lanes,ol(e,t,i)}}return Hc(e,t,n,r,i)}function Fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Lc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ha(t,a===null?null:a.cachePool),a===null?wo():Co(t,a),Ao(t);else return r=t.lanes=536870912,Lc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ha(t,null),wo(),jo()):(Ha(t,a.cachePool),Co(t,a),jo(),t.memoizedState=null);return jc(e,t,i,n),t.child}function Ic(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Lc(e,t,n,r,i){var a=Va();return a=a===null?null:{parent:Ea._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ha(t,null),wo(),Ao(t),e!==null&&_a(e,t,r,!0),t.childLanes=i,null}function Rc(e,t){return t=Zc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zc(e,t,n){return oo(t,e.child,null,n),e=Rc(t,t.pendingProps),e.flags|=2,Mo(t),t.memoizedState=null,e}function Bc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(G){if(r.mode===`hidden`)return e=Rc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ic(null,e);if(ko(t),(e=W)?(e=am(e,ta),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gi===null?null:{id:Ki,overflow:qi},retryLane:536870912,hydrationErrors:null},n=Fi(e),n.return=t,t.child=n,$i=t,W=null)):e=null,e===null)throw ra(t);return t.lanes=536870912,null}return Rc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ko(t),a){if(t.flags&256)t.flags&=-257,t=zc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Ac||_a(e,t,n,!1),a=(n&e.childLanes)!==0,Ac||a){if(xo.current===null){if(r=Xu,r!==null&&(s=vt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Ci(e,s),Md(r,e,s),kc;Wd()}t=zc(e,t,n)}else e=o.treeContext,W=lm(s.nextSibling),$i=t,G=!0,ea=null,ta=!1,e!==null&&Qi(t,e),t=Rc(t,r),t.flags|=134221824;return t}return e=Ai(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Hc(e,t,n,r,i){return ya(t),n=Yo(e,t,n,r,void 0,i),r=$o(),e!==null&&!Ac?(es(e,t,i),ol(e,t,i)):(G&&r&&Xi(t),t.flags|=1,jc(e,t,n,i),t.child)}function Uc(e,t,n,r,i,a){return ya(t),t.updateQueue=null,n=Zo(t,r,n,i),Xo(e),r=$o(),e!==null&&!Ac?(es(e,t,a),ol(e,t,a)):(G&&r&&Xi(t),t.flags|=1,jc(e,t,n,a),t.child)}function Wc(e,t,n,r,i){if(ya(t),t.stateNode===null){var a=Ei,o=n.contextType;typeof o==`object`&&o&&(a=ba(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=gc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},lo(t),o=n.contextType,a.context=typeof o==`object`&&o?ba(o):Ei,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(hc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&gc.enqueueReplaceState(a,a.state,null),vo(t,r,a,i),_o(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=yc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Ei,typeof u==`object`&&u&&(o=ba(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&vc(t,a,r,o),co=!1;var f=t.memoizedState;a.state=f,vo(t,r,a,i),_o(),l=t.memoizedState,s||f!==l||co?(typeof d==`function`&&(hc(t,n,d,r),l=t.memoizedState),(c=co||_c(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,uo(e,t),o=t.memoizedProps,u=yc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Ei,typeof l==`object`&&l&&(c=ba(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&vc(t,a,r,c),co=!1,f=t.memoizedState,a.state=f,vo(t,r,a,i),_o();var p=t.memoizedState;o!==d||f!==p||co||e!==null&&e.dependencies!==null&&va(e.dependencies)?(typeof s==`function`&&(hc(t,n,s,r),p=t.memoizedState),(u=co||_c(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&va(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Vc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=oo(t,e.child,null,i),t.child=oo(t,null,n,i)):jc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ol(e,t,i),e}function Gc(e,t,n,r){return sa(),t.flags|=256,jc(e,t,n,r),t.child}var Kc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qc(e){return{baseLanes:e,cachePool:Ua()}}function Jc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=sd),e}function Yc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(No.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(G){if(i?Oo(t):jo(),(e=W)?(e=am(e,ta),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gi===null?null:{id:Ki,overflow:qi},retryLane:536870912,hydrationErrors:null},n=Fi(e),n.return=t,t.child=n,$i=t,W=null)):e=null,e===null)throw ra(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(jo(),i=t.mode,a=Zc({mode:`hidden`,children:a},i),r=Ni(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=qc(n),r.childLanes=Jc(e,o,n),t.memoizedState=Kc,Ic(null,r)):(Oo(t),Xc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return $c(e,t,a,o,r,c,s,n)}return i?(jo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ai(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ni(i,a,n,null),i.flags|=2):i=Ai(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Ic(null,r),r=t.child,i=e.child.memoizedState,i===null?i=qc(n):(a=i.cachePool,a===null?a=Ua():(s=Ea._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Jc(e,o,n),t.memoizedState=Kc,Ic(e.child,r)):(Oo(t),n=e.child,e=n.sibling,n=Ai(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Xc(e,t){return t=Zc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Zc(e,t){return e=Oi(22,e,null,t),e.lanes=0,e}function Qc(e,t,n){return oo(t,e.child,null,n),e=Xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $c(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Oo(t),t.flags&=-257,Qc(e,t,c)):t.memoizedState===null?(jo(),o=a.fallback,s=t.mode,a=Zc({mode:`visible`,children:a.children},s),o=Ni(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,oo(t,e.child,null,c),a=t.child,a.memoizedState=qc(c),a.childLanes=Jc(e,r,c),t.memoizedState=Kc,Ic(null,a)):(jo(),t.child=e.child,t.flags|=128,null);if(Oo(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,la({value:a,source:null,stack:null})),Qc(e,t,c)}if(Ac||_a(e,t,c,!1),r=(c&e.childLanes)!==0,Ac||r){if(xo.current!==null)return Qc(e,t,c);if(r=Xu,r!==null&&(a=vt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ci(e,a),Md(r,e,a),kc;return om(o)||Wd(),Qc(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,W=lm(o.nextSibling),$i=t,G=!0,ea=null,ta=!1,e!==null&&Qi(t,e),t=Xc(t,a.children),t.flags|=134221824,t)}function el(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ha(e.return,t,n)}function tl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Io(n)===null&&(t=e),e=e.sibling}return t}function nl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function rl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function il(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=No.current;if(t.flags&128)return Po(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Po(t,o),i===`backwards`&&e!==null?(rl(e),jc(e,t,r,n),rl(e)):jc(e,t,r,n),r=G?Hi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&el(e,n,t);else if(e.tag===19)el(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=tl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,rl(t)),nl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Io(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nl(t,!0,n,null,a,r);break;case`together`:nl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=tl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nl(t,!1,i,n,a,r)}return t.child}function al(e,t,n){var r=t.pendingProps;return pa(t,t.type,r.value),jc(e,t,r.children,n),t.child}function ol(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),id|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(_a(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ai(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ai(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&va(e)))}function cl(e,t,n){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),pa(t,Ea,e.memoizedState.cache),sa();break;case 27:case 5:je(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:pa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ko(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Oo(t),t.flags|=128,null;r=_a(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Yc(e,t,n):(Oo(t),e=ol(e,t,n),e===null?null:e.sibling)}Oo(t);break;case 19:if(t.flags&128)return il(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(_a(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return il(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Po(t,No.current),r)break;return null;case 22:return t.lanes=0,Fc(e,t,n,t.pendingProps);case 24:pa(t,Ea,e.memoizedState.cache)}return ol(e,t,n)}function ll(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Ac=!0;else{if(!sl(e,n)&&!(t.flags&128))return Ac=!1,cl(e,t,n);Ac=!!(e.flags&131072)}}else Ac=!1,G&&t.flags&1048576&&Yi(t,Hi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Xa(t.elementType),t.type=e,typeof e==`function`)ki(e)?(r=yc(e,r),t.tag=1,t=Wc(null,t,e,r,n)):(t.tag=0,t=Hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===j){t.tag=11,t=Mc(null,t,e,r,n);break a}if(a===se){t.tag=14,t=Nc(null,t,e,r,n);break a}if(a===A){t.tag=10,t.type=e,t=al(null,t,n);break a}}throw t=_e(e)||e,Error(i(306,t,``))}}return t;case 0:return Hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=yc(r,t.pendingProps),Wc(e,t,r,a,n);case 3:a:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,uo(e,t),vo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,pa(t,Ea,r),r!==o.cache&&ga(t,[Ea],n,!0),_o(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Gc(e,t,r,n);break a}if(r!==a){a=Ri(Error(i(424)),t),la(a),t=Gc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(W=lm(e.firstChild),$i=t,G=!0,ea=null,ta=!0,n=so(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(sa(),r===a){t=ol(e,t,n);break a}jc(e,t,r,n)}t=t.child}return t;case 26:return Vc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:G||(t.stateNode=fp(t.type,t.pendingProps,De.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return je(t),e===null&&G&&(r=t.stateNode=hm(t.type,t.pendingProps,De.current),$i=t,ta=!0,a=W,Sp(t.type)?(um=a,W=lm(r.firstChild)):W=a),jc(e,t,t.pendingProps.children,n),Vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&G&&((a=r=W)&&(r=rm(r,t.type,t.pendingProps,ta),r===null?a=!1:(t.stateNode=r,$i=t,W=lm(r.firstChild),ta=!1,a=!0)),a||ra(t)),je(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Yo(e,t,Qo,null,null,n),sh._currentValue=a),Vc(e,t),jc(e,t,r,n),t.child;case 6:return e===null&&G&&((e=n=W)&&(n=im(n,t.pendingProps,ta),n===null?e=!1:(t.stateNode=n,$i=t,W=null,e=!0)),e||ra(t)),null;case 13:return Yc(e,t,n);case 4:return ke(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=oo(t,null,r,n):jc(e,t,r,n),t.child;case 11:return Mc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Vc(e,t),jc(e,t,r,n),t.child;case 8:return jc(e,t,t.pendingProps.children,n),t.child;case 12:return jc(e,t,t.pendingProps.children,n),t.child;case 10:return al(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,ya(t),a=ba(a),r=r(a),t.flags|=1,jc(e,t,r,n),t.child;case 14:return Nc(e,t,t.type,t.pendingProps,n);case 15:return Pc(e,t,t.type,t.pendingProps,n);case 19:return il(e,t,n);case 31:return Bc(e,t,n);case 22:return Fc(e,t,n,t.pendingProps);case 24:return ya(t),r=ba(Ea),e===null?(a=Va(),a===null&&(a=Xu,o=Da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},lo(t),pa(t,Ea,a)):((e.lanes&n)!==0&&(uo(e,t),vo(t,null,null,n),_o()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,pa(t,Ea,r),r!==a.cache&&ga(t,[Ea],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),pa(t,Ea,r))),jc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:G&&Xi(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Vc(e,t),jc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ul(e){e.flags|=4}function dl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Vd())e.flags|=8192;else throw Za=qa,Ga}}else e.flags&=-16777217}function fl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Vd())e.flags|=8192;else throw Za=qa,Ga}}function pl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:ft(),e.lanes|=t,cd|=t)}function ml(e,t){if(!G)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function hl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gl(e,t,n){var r=t.pendingProps;switch(Zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hl(t),null;case 1:return hl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ma(Ea),Ae(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(oa(t)?ul(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ca())),hl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(ul(t),o===null?(hl(t),dl(t,a,null,r,n)):(hl(t),fl(t,o))):o?o===e.memoizedState?(hl(t),t.flags&=-16777217):(ul(t),hl(t),fl(t,o)):(e=e.memoizedProps,e!==r&&ul(t),hl(t),dl(t,a,e,r,n)),null;case 27:if(Me(t),n=De.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ul(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return hl(t),t.subtreeFlags&=-33554433,null}e=Te.current,oa(t)?ia(t,e):(e=hm(a,r,n),t.stateNode=e,ul(t))}return hl(t),t.subtreeFlags&=-33554433,null;case 5:if(Me(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ul(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return hl(t),t.subtreeFlags&=-33554433,null}if(o=Te.current,oa(t))ia(t,o);else{var s=lp(De.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[wt]=t,o[Tt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&ul(t)}}return hl(t),t.subtreeFlags&=-33554433,dl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ul(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=De.current,oa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=$i,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[wt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||$f(e.nodeValue,n)),e||ra(t,!0)}else e=lp(e).createTextNode(r),e[wt]=t,t.stateNode=e}return hl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=oa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[wt]=t}else sa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;hl(t),e=!1}else n=ca(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Mo(t),t):(Mo(t),null);if(t.flags&128)throw Error(i(558))}return hl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=oa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[wt]=t}else sa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;hl(t),a=!1}else a=ca(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Mo(t),t):(Mo(t),null)}return Mo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),pl(t,t.updateQueue),hl(t),null);case 4:return Ae(),e===null&&Uf(t.stateNode.containerInfo),t.flags|=67108864,hl(t),null;case 10:return ma(t.type),hl(t),null;case 19:if(Fo(t),r=t.memoizedState,r===null)return hl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)ml(r,!1);else{if(rd!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Io(e),o!==null){for(t.flags|=128,ml(r,!1),e=o.updateQueue,t.updateQueue=e,pl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ji(n,e),n=n.sibling;return Po(t,No.current&1|2),G&&Ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ge()>md&&(t.flags|=128,a=!0,ml(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Io(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,pl(t,e),ml(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!G)return hl(t),null}else 2*Ge()-r.renderingStartTime>md&&n!==536870912&&(t.flags|=128,a=!0,ml(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ge(),e.sibling=null,o=No.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||G?Po(t,o):(n=o,we(Eo,t),we(No,n),Do===null&&(Do=t)),G&&Ji(t,r.treeForkCount),e}return hl(t),null;case 22:case 23:return Mo(t),To(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(hl(t),t.subtreeFlags&6&&(t.flags|=8192)):hl(t),n=t.updateQueue,n!==null&&pl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Ce(Ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ma(Ea),hl(t),null;case 25:return null;case 30:return t.flags|=33554432,hl(t),null}throw Error(i(156,t.tag))}function _l(e,t){switch(Zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ma(Ea),Ae(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Me(t),null;case 31:if(t.memoizedState!==null){if(Mo(t),t.alternate===null)throw Error(i(340));sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Mo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ae(),null;case 10:return ma(t.type),null;case 22:case 23:return Mo(t),To(),e!==null&&Ce(Ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ma(Ea),null;case 25:return null;default:return null}}function vl(e,t){switch(Zi(t),t.tag){case 3:ma(Ea),Ae();break;case 26:case 27:case 5:Me(t);break;case 4:Ae();break;case 31:t.memoizedState!==null&&Mo(t);break;case 13:Mo(t);break;case 19:Fo(t);break;case 10:ma(t.type);break;case 22:case 23:Mo(t),To(),e!==null&&Ce(Ba);break;case 24:ma(Ea)}}function yl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){ff(t,t.return,e)}}function bl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){ff(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){ff(t,t.return,e)}}function xl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{bo(t,n)}catch(t){ff(e,e.return,t)}}}function Sl(e,t,n){n.props=yc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){ff(e,t,n)}}function Cl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=pi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){ff(e,t,n)}}function wl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){ff(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){ff(e,t,n)}else n.current=null}}function Tl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function El(e){for(var t=e.return;t!==null&&(kl(t)&&em(e.stateNode,t.stateNode),!Ol(t));)t=t.return}function Dl(e){for(var t=e.return;t!==null&&(kl(t)&&tm(e.stateNode,t.stateNode),!Ol(t));)t=t.return}function Ol(e){return e.tag===5||e.tag===3||e.tag===27}function kl(e){return e&&e.tag===7&&e.stateNode!==null}function Al(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){ff(e,e.return,t)}}function jl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Tt]=t}catch(t){ff(e,e.return,t)}}function Ml(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Nl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ml(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yn)),Tl(e,r),R=!0;else if(i!==4&&(i===27&&(Tl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Pl(e,t,n,r),e=e.sibling;e!==null;)Pl(e,t,n,r),e=e.sibling}function q(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Tl(e,r),R=!0;else if(i!==4&&(i===27&&(Tl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(q(e,t,n,r),e=e.sibling;e!==null;)q(e,t,n,r),e=e.sibling}function Fl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[wt]=e,t[Tt]=n}catch(t){ff(e,e.return,t)}}var Il=!1,J=null;function Ll(e){(e.tag===30||e.subtreeFlags&33554432)&&(Il=!0)}var Rl=null;function zl(){var e=Rl;return Rl=null,e}var Bl=0;function Vl(e,t,n,r,i){return Bl=0,Hl(e.child,t,n,r,i)}function Hl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Il=!0,Tp(o,Bl===0?t:t+`_`+Bl,n),Bl++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Hl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Ul(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Ul(e.child,t),e=e.sibling}function Wl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Wl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=hi(t.default,t.share),t!==`none`&&(Vl(e,n,t,null,!1)||Ul(e.child,!1))}e=e.sibling}}function Gl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=pi(r,n),a=hi(r.default,n.paired?r.share:r.enter);a===`none`?Wl(e):Vl(e,i,a,null,!1)?(Wl(e),n.paired||t||jd(e,r.onEnter)):Ul(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Gl(e,t),e=e.sibling;else Wl(e)}function Kl(e){if(J!==null&&J.size!==0){var t=J;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=hi(n.default,n.share);if(a!==`none`&&(Vl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,jd(e,n.onShare)):Ul(e.child,!1)),t.delete(r),t.size===0)break}}}Kl(e)}e=e.sibling}}}function ql(e){if(e.tag===30){var t=e.memoizedProps,n=pi(t,e.stateNode),r=J===null?void 0:J.get(n),i=hi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Vl(e,n,i,null,!1)?r===void 0?jd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,J.delete(n),jd(e,t.onShare)):Ul(e.child,!1)),J!==null&&Kl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ql(e),e=e.sibling;else J!==null&&Kl(e)}function Jl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=pi(t,e.stateNode);t=hi(t.default,t.update),e.flags&=-5,t!==`none`&&Vl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Jl(e);e=e.sibling}}function Yl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ul(e.child,!1))}Yl(e)}e=e.sibling}}function Xl(e){if(e.tag===30)e.stateNode.paired=null,Ul(e.child,!1),Yl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Xl(e),e=e.sibling;else Yl(e)}function Zl(e){for(e=e.child;e!==null;)e.tag===30?Ul(e.child,!1):e.subtreeFlags&33554432&&Zl(e),e=e.sibling}function Ql(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Bl<a.length){var l=a[Bl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Bl===0?n:n+`_`+Bl,i),s&&e.flags&4||(Rl===null&&(Rl=[]),Rl.push(c,Bl===0?r:r+`_`+Bl,t.memoizedProps)),Bl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Ql(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function $l(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=pi(n,r),a=hi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Bl=0,i=Ql(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||jd(e,n.onUpdate))}else e.subtreeFlags&33554432&&$l(e,t);e=e.sibling}}var eu=!1,Y=!1,tu=!1,nu=!1,ru=typeof WeakSet==`function`?WeakSet:Set,iu=null,au=!1,ou=!1,su=!1,cu=!1;function lu(e,t,n){if(e=e.containerInfo,sp=gh,e=Ur(e),Wr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,iu=t,t=n?9270:1024;iu!==null;){if(e=iu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&ql(r[a]);if(e.alternate===null&&e.flags&2)n&&Ll(e),uu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&ql(r),uu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Ll(e),uu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,iu=r):(n&&Jl(e),uu(n))}}J=null}function uu(e){for(;iu!==null;){var t=iu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=yc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){ff(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=pi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=hi(a.default,a.update),a!==`none`&&Vl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,iu=r;break}iu=t.return}}function du(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ju(e,n),r&4&&yl(5,n);break;case 1:if(ju(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){ff(n,n.return,e)}else{var i=yc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){ff(n,n.return,e)}}}r&64&&xl(n),r&512&&Cl(n,n.return);break;case 3:if(ju(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{bo(e,t)}catch(e){ff(n,n.return,e)}}break;case 27:t===null&&r&4&&Fl(n);case 26:case 5:ju(e,n),t===null&&r&4&&Al(n),r&512&&Cl(n,n.return);break;case 12:ju(e,n);break;case 31:ju(e,n),r&4&&bu(e,n);break;case 13:ju(e,n),r&4&&xu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gf.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||eu,!r){var a=t!==null&&t.memoizedState!==null||Y;t=eu,i=Y,eu=r,(Y=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Nu(e,n,r)):ju(e,n),eu=t,Y=i}break;case 30:ju(e,n),r&512&&Cl(n,n.return);break;case 7:r&512&&Cl(n,n.return);default:ju(e,n)}}function fu(e,t){for(e=e.child;e!==null;)pu(e,t),e=e.sibling}function pu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){ff(e,e.return,t)}mu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,R=!0}catch(t){ff(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){ff(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&fu(e,t);break;default:fu(e,t)}}function mu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:pu(n,r);break a;case 22:n.memoizedState===null&&mu(n,r);break a;default:mu(n,r)}}e=e.sibling}}function hu(e){var t=e.alternate;t!==null&&(e.alternate=null,hu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Nt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gu=null,_u=!1;function vu(e,t,n){for(n=n.child;n!==null;)yu(e,t,n),n=n.sibling}function yu(e,t,n){if($e&&typeof $e.onCommitFiberUnmount==`function`)try{$e.onCommitFiberUnmount(Qe,n)}catch{}switch(n.tag){case 26:Y||wl(n,t),vu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Y&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Y||wl(n,t),Dl(n);var r=gu,i=_u;Sp(n.type)&&(gu=n.stateNode,_u=!1),vu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),gu=r,_u=i;break;case 5:Y||wl(n,t),Dl(n);case 6:if(n.tag===6&&Dl(n),r=gu,i=_u,gu=null,vu(e,t,n),gu=r,_u=i,gu!==null){if(_u)try{(gu.nodeType===9?gu.body:gu.nodeName===`HTML`?gu.ownerDocument.body:gu).removeChild(n.stateNode),R=!0}catch(e){ff(n,t,e)}else try{gu.removeChild(n.stateNode),R=!0}catch(e){ff(n,t,e)}}break;case 18:gu!==null&&(_u?(e=gu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(gu,n.stateNode));break;case 4:r=gu,i=_u,gu=n.stateNode.containerInfo,_u=!0,vu(e,t,n),gu=r,_u=i;break;case 0:case 11:case 14:case 15:bl(2,n,t),Y||bl(4,n,t),vu(e,t,n);break;case 1:Y||(wl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Sl(n,t,r)),vu(e,t,n);break;case 21:vu(e,t,n);break;case 22:Y=(r=Y)||n.memoizedState!==null,vu(e,t,n),Y=r;break;case 30:wl(n,t),vu(e,t,n);break;case 7:Y||wl(n,t),vu(e,t,n);break;default:vu(e,t,n)}}function bu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){ff(t,t.return,e)}}}function xu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){ff(t,t.return,e)}}function Su(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ru),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ru),t;default:throw Error(i(435,e.tag))}}function Cu(e,t){var n=Su(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=_f.bind(null,e,t);t.then(r,r)}})}function wu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){gu=l.stateNode,_u=!1;break a}break;case 5:gu=l.stateNode,_u=!1;break a;case 3:case 4:gu=l.stateNode.containerInfo,_u=!0;break a}l=l.return}if(gu===null)throw Error(i(160));yu(s,c,o),gu=null,_u=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Eu(t,e,n),t=t.sibling}var Tu=null;function Eu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}wu(t,e,n),Du(e),a&4&&(bl(3,e,e.return),yl(3,e),bl(5,e,e.return));break;case 1:wu(t,e,n),Du(e),a&512&&(Y||r===null||wl(r,r.return)),a&64&&eu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Tu,wu(t,e,n),Du(e),a&512&&(Y||r===null||wl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(eu)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[jt]||r[wt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[wt]=e,Rt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[wt]=e,Rt(r),t=r}e.stateNode=t}}else eu||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&jl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||Y||t.parentNode.removeChild(t)):a.count--,n===null?eu||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:wu(t,e,n),Du(e),a&512&&(Y||r===null||wl(r,r.return)),r!==null&&a&4&&jl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=tu,tu=!1,wu(t,e,n),tu=o,Du(e),a&512&&(Y||r===null||wl(r,r.return)),e.flags&32){t=e.stateNode;try{dn(t,``),R=!0}catch(t){ff(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,jl(e,t,r===null?t:r.memoizedProps)),a&1024&&(nu=!0);break;case 6:if(wu(t,e,n),Du(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,R=!0}catch(t){ff(e,e.return,t)}}break;case 3:if(R=!1,Wm=null,o=Tu,Tu=bm(t.containerInfo),wu(t,e,n),Tu=o,Du(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){ff(e,e.return,t)}nu&&(nu=!1,Ou(e)),R=!1;break;case 4:a=tu,tu=eu,r=qt(),o=Tu,Tu=bm(e.stateNode.containerInfo),wu(t,e,n),Du(e),Tu=o,R&&ou&&(su=!0),R=r,tu=a;break;case 12:wu(t,e,n),Du(e);break;case 31:wu(t,e,n),Du(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Cu(e,t)));break;case 13:wu(t,e,n),Du(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(fd=Ge()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Cu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=eu,l=Y,u=tu;eu=c||o,tu=u||o,Y=l||s,wu(t,e,n),Y=l,tu=u,eu=c,Du(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||eu||Y||(t=s||Y,n=eu,r=Y,eu=o||eu,Y=t,Mu(e,2),eu=n,Y=r),!o&&tu||fu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Cu(e,n))));break;case 19:wu(t,e,n),Du(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Cu(e,t)));break;case 30:a&512&&(Y||r===null||wl(r,r.return)),a=qt(),o=ou,s=(n&335544064)===n,c=e.memoizedProps,ou=s&&hi(c.default,c.update)!==`none`,wu(t,e,n),Du(e),s&&r!==null&&R&&(e.flags|=4),ou=o,R=a;break;case 21:break;case 7:a&512&&(Y||r===null||wl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:wu(t,e,n),Du(e)}}function Du(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ml(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(kl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Ol(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;q(e,Nl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(dn(l,``),n.flags&=-33),q(e,Nl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Pl(e,Nl(e),u,s);break;default:throw Error(i(161))}}catch(t){ff(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ou(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ou(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function ku(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Au(t,e),t=t.sibling;else $l(t,!1)}function Au(e,t){var n=e.alternate;if(n===null)Gl(e,!1);else switch(e.tag){case 3:if(cu=au=!1,zl(),ku(t,e),!au&&!su){if(e=Rl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),cu=!0}Rl=null;break;case 5:ku(t,e);break;case 4:r=au,au=!1,ku(t,e),au&&(su=!0),au=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?ku(t,e):Gl(e,!1));break;case 30:r=au,i=zl(),au=!1,ku(t,e),au&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=pi(a,o),o=pi(n.memoizedProps,o);var s=hi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Bl=0,t=Ql(e,n,t,o,s,a,!0),Bl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(jd(e,e.memoizedProps.onUpdate),Rl=i):i!==null&&(i.push.apply(i,Rl),Rl=i),au=e.flags&32?!0:r;break;default:ku(t,e)}}function ju(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)du(e,t.alternate,t),t=t.sibling}function Mu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:bl(4,n,n.return),Mu(n,r);break;case 1:wl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Sl(n,n.return,i),Mu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:wl(n,n.return),n.tag!==5&&n.tag!==27||Dl(n),Mu(n,r);break;case 6:Dl(n);break;case 26:wl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||Y||i.parentNode.removeChild(i),Mu(n,r);break;case 22:n.memoizedState===null&&Mu(n,r);break;case 30:wl(n,n.return),Mu(n,r);break;case 7:wl(n,n.return);default:Mu(n,r)}e=e.sibling}}function Nu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Nu(i,a,n),yl(4,a);break;case 1:if(Nu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){ff(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)yo(l[i],c)}catch(e){ff(r,r.return,e)}}s&&o&64&&xl(a),Cl(a,a.return);break;case 27:n&2&&Fl(a);case 5:a.tag!==5&&a.tag!==27||El(a),Nu(i,a,n),s&&r===null&&o&4&&Al(a),Cl(a,a.return);break;case 6:El(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||eu||Km(bm(c.ownerDocument),a.type,c),Nu(i,a,n),s&&r===null&&o&4&&Al(a),Cl(a,a.return);break;case 12:Nu(i,a,n);break;case 31:Nu(i,a,n),s&&o&4&&bu(i,a);break;case 13:Nu(i,a,n),s&&o&4&&xu(i,a);break;case 22:a.memoizedState===null&&Nu(i,a,n),Cl(a,a.return);break;case 30:Nu(i,a,n),Cl(a,a.return);break;case 7:Cl(a,a.return);default:Nu(i,a,n)}t=t.sibling}}function Pu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Oa(n))}function Fu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oa(e))}function Iu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Lu(e,t,n,r),t=t.sibling;else i&&Zl(t)}function Lu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Xl(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Iu(e,t,n,r),a&2048&&yl(9,t);break;case 1:Iu(e,t,n,r);break;case 3:Iu(e,t,n,r),i&&cu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Oa(a)));break;case 12:if(a&2048){Iu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){ff(t,t.return,e)}}else Iu(e,t,n,r);break;case 31:Iu(e,t,n,r);break;case 13:Iu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Xl(t),o._visibility&2?Iu(e,t,n,r):(o._visibility|=2,Ru(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Xl(s),o._visibility&2?Iu(e,t,n,r):zu(e,t)),a&2048&&Pu(s,t);break;case 24:Iu(e,t,n,r),a&2048&&Fu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Ul(a.child,!0),Ul(t.child,!0))),Iu(e,t,n,r);break;default:Iu(e,t,n,r)}}function Ru(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ru(a,o,s,c,i),yl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ru(a,o,s,c,i)):u._visibility&2?Ru(a,o,s,c,i):zu(a,o),i&&l&2048&&Pu(o.alternate,o);break;case 24:Ru(a,o,s,c,i),i&&l&2048&&Fu(o.alternate,o);break;default:Ru(a,o,s,c,i)}t=t.sibling}}function zu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:zu(n,r),i&2048&&Pu(r.alternate,r);break;case 24:zu(n,r),i&2048&&Fu(r.alternate,r);break;default:zu(n,r)}t=t.sibling}}var Bu=8192;function Vu(e,t,n){if(e.subtreeFlags&Bu)for(e=e.child;e!==null;)Hu(e,t,n),e=e.sibling}function Hu(e,t,n){switch(e.tag){case 26:Vu(e,t,n),e.flags&Bu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,Tu,e.memoizedState,e.memoizedProps));break;case 5:Vu(e,t,n),e.flags&Bu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=Tu;Tu=bm(e.stateNode.containerInfo),Vu(e,t,n),Tu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Bu,Bu=16777216,Vu(e,t,n),Bu=r):Vu(e,t,n));break;case 30:if((e.flags&Bu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,J===null&&(J=new Map),J.set(r,i)}Vu(e,t,n);break;default:Vu(e,t,n)}}function Uu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Wu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];iu=r,X(r,e)}Uu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gu(e),e=e.sibling}function Gu(e){switch(e.tag){case 0:case 11:case 15:Wu(e),e.flags&2048&&bl(9,e,e.return);break;case 3:Wu(e);break;case 12:Wu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ku(e)):Wu(e);break;default:Wu(e)}}function Ku(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];iu=r,X(r,e)}Uu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:bl(8,t,t.return),Ku(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ku(t));break;default:Ku(t)}e=e.sibling}}function X(e,t){for(;iu!==null;){var n=iu;switch(n.tag){case 0:case 11:case 15:bl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Oa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,iu=r;else a:for(n=e;iu!==null;){r=iu;var i=r.sibling,a=r.return;if(hu(r),r===n){iu=null;break a}if(i!==null){i.return=a,iu=i;break a}iu=a}}}var qu={getCacheForType:function(e){var t=ba(Ea),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ba(Ea).controller.signal}},Ju=typeof WeakMap==`function`?WeakMap:Map,Yu=0,Xu=null,Z=null,Q=0,Zu=0,Qu=null,$u=!1,ed=!1,td=!1,nd=0,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=null,ud=null,dd=!1,fd=0,pd=0,md=1/0,hd=null,gd=null,_d=0,vd=null,yd=null,bd=0,xd=0,Sd=null,Cd=null,wd=null,Td=null,Ed=null,Dd=0,Od=null;function kd(){return Yu&2&&Q!==0?Q&-Q:M.T===null?xt():Nf()}function Ad(){if(sd===0){if(!(Q&536870912)||G){var e=at;at<<=1,!(at&3932160)&&(at=262144),sd=e}else sd=536870912}return e=Eo.current,e!==null&&(e.flags|=32),sd}function jd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(pi(e.memoizedProps,n))),Td===null&&(Td=[]),Td.push(t.bind(null,r))}}function Md(e,t,n){(e===Xu&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)&&(zd(e,0),Id(e,Q,sd,!1)),mt(e,n),Yu&2&&e===Xu||(e===Xu&&(!(Yu&2)&&(ad|=n),rd===4&&Id(e,Q,sd,!1)),Tf(e))}function Nd(e,t,n){if(Yu&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||lt(e,t),a=r?qd(e,t):Gd(e,t,!0),o=r;do{if(a===0){ed&&!r&&Id(e,t,0,!1);break}if(n=e.current.alternate,o&&!Fd(n))a=Gd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ld;var l=c.current.memoizedState.isDehydrated;if(l&&(zd(c,s).flags|=256),s=Gd(c,s,!1),s!==2&&s!==6){if(td&&!l){c.errorRecoveryDisabledLanes|=o,ad|=o,a=4;break a}o=ud,ud=a,o!==null&&(ud===null?ud=o:ud.push.apply(ud,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){zd(e,0),Id(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Id(r,t,sd,!$u);break a;case 2:ud=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=fd+300-Ge(),10<a)){if(Id(r,t,sd,!$u),ct(r,0,!0)!==0)break a;bd=t,r.timeoutHandle=gp(Pd.bind(null,r,n,ud,hd,dd,t,sd,ad,cd,$u,o,`Throttled`,-0,0),a);break a}Pd(r,n,ud,hd,dd,t,sd,ad,cd,$u,o,null,-0,0)}break}}while(1);Tf(e)}function Pd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yn},J=null,Hu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?fd-Ge():(a&4194048)===a?pd-Ge():0,m=eh(d,m),m!==null)?(bd=a,e.cancelPendingCommit=m(ef.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Id(e,a,o,!l)):ef(e,t,a,n,r,i,o,s,c,l,u,d)}function Fd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Lr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Id(e,t,n,r){t=ut(e,t),t&=~od,t&=~ad,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-tt(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&gt(e,n,t)}function Ld(){return Yu&6?!0:(Ef(0,!1),!1)}function Rd(){if(Z!==null){if(Zu===0)var e=Z.return;else e=Z,fa=da=null,ts(e),eo=null,to=0,e=Z;for(;e!==null;)vl(e.alternate,e),e=e.return;Z=null}}function zd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bd=0,Rd(),Xu=e,Z=n=Ai(e.current,null),Q=t,Zu=0,Qu=null,$u=!1,ed=lt(e,t),td=!1,cd=sd=od=ad=id=rd=0,ud=ld=null,dd=!1,nd=ut(e,t),bi(),n}function Bd(e,t){K=null,M.H=dc,t===Wa||t===Ka?(t=Qa(),Zu=3):t===Ga?(t=Qa(),Zu=4):Zu=t===kc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Qu=t,Z===null&&(rd=1,Cc(e,Ri(t,e.current)))}function Vd(){var e=Eo.current;return e===null?!0:(Q&4194048)===Q?Do===null:(Q&62914560)===Q||Q&536870912?e===Do:!1}function Hd(){var e=M.H;return M.H=dc,e===null?dc:e}function Ud(){var e=M.A;return M.A=qu,e}function Wd(){rd=4,$u||(Q&4194048)!==Q&&Eo.current!==null||(ed=!0),!(id&134217727)&&!(ad&134217727)||Xu===null||Id(Xu,Q,sd,!1)}function Gd(e,t,n){var r=Yu;Yu|=2;var i=Hd(),a=Ud();(Xu!==e||Q!==t)&&(hd=null,zd(e,t)),t=!1;var o=rd;a:do try{if(Zu!==0&&Z!==null){var s=Z,c=Qu;switch(Zu){case 8:Rd(),o=6;break a;case 3:case 2:case 9:case 6:Eo.current===null&&(t=!0);var l=Zu;if(Zu=0,Qu=null,Zd(e,s,c,l),n&&ed){o=0;break a}break;default:l=Zu,Zu=0,Qu=null,Zd(e,s,c,l)}}Kd(),o=rd;break}catch(t){Bd(e,t)}while(1);return t&&e.shellSuspendCounter++,fa=da=null,Yu=r,M.H=i,M.A=a,Z===null&&(Xu=null,Q=0,bi()),o}function Kd(){for(;Z!==null;)Yd(Z)}function qd(e,t){var n=Yu;Yu|=2;var r=Hd(),a=Ud();Xu!==e||Q!==t?(hd=null,md=Ge()+500,zd(e,t)):ed=lt(e,t);a:do try{if(Zu!==0&&Z!==null){t=Z;var o=Qu;b:switch(Zu){case 1:Zu=0,Qu=null,Zd(e,t,o,1);break;case 2:case 9:if(Ja(o)){Zu=0,Qu=null,Xd(t);break}t=function(){Zu!==2&&Zu!==9||Xu!==e||(Zu=7),Tf(e)},o.then(t,t);break a;case 3:Zu=7;break a;case 4:Zu=5;break a;case 7:Ja(o)?(Zu=0,Qu=null,Xd(t)):(Zu=0,Qu=null,Zd(e,t,o,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var c=Z;if(s?Ym(s):c.stateNode.complete){Zu=0,Qu=null;var l=c.sibling;if(l!==null)Z=l;else{var u=c.return;u===null?Z=null:(Z=u,Qd(u))}break b}}Zu=0,Qu=null,Zd(e,t,o,5);break;case 6:Zu=0,Qu=null,Zd(e,t,o,6);break;case 8:Rd(),rd=6;break a;default:throw Error(i(462))}}Jd();break}catch(t){Bd(e,t)}while(1);return fa=da=null,M.H=r,M.A=a,Yu=n,Z===null?(Xu=null,Q=0,bi(),rd):0}function Jd(){for(;Z!==null&&!Ue();)Yd(Z)}function Yd(e){var t=ll(e.alternate,e,nd);e.memoizedProps=e.pendingProps,t===null?Qd(e):Z=t}function Xd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Uc(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=Uc(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:ts(t);var r=t;r===$i&&(G?(aa(r),r.tag===5&&r.stateNode!=null&&(W=r.stateNode)):(aa(r),G=!0));default:vl(n,t),t=Z=ji(t,nd),t=ll(n,t,nd)}e.memoizedProps=e.pendingProps,t===null?Qd(e):Z=t}function Zd(e,t,n,r){fa=da=null,ts(t),eo=null,to=0;var i=t.return;try{if(Oc(e,i,t,n,Q)){rd=1,Cc(e,Ri(n,e.current)),Z=null;return}}catch(t){if(i!==null)throw Z=i,t;rd=1,Cc(e,Ri(n,e.current)),Z=null;return}t.flags&32768?(G||r===1?e=!0:ed||Q&536870912?e=!1:($u=e=!0,(r===2||r===9||r===3||r===6)&&(r=Eo.current,r!==null&&r.tag===13&&(r.flags|=16384))),$d(t,e)):Qd(t)}function Qd(e){var t=e;do{if(t.flags&32768){$d(t,$u);return}e=t.return;var n=gl(t.alternate,t,nd);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);rd===0&&(rd=5)}function $d(e,t){do{var n=_l(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);rd=6,Z=null}function ef(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do lf();while(_d!==0);if(Yu&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Xu&&(Z=Xu=null,Q=0),yd=t,vd=e,bd=n,Sd=a,Cd=r,tf(e,t,n,s,c,l,f)}}function tf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(xd=s,s|=yi,ht(e,n,s,r,i,a),Td=null,(n&335544064)===n?(Ed=ja(e),r=10262):(Ed=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,vf(P,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),Il=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=M.T,M.T=null,i=N.p,N.p=2,a=Yu,Yu|=4;try{lu(e,t,n)}finally{Yu=a,N.p=i,M.T=r}}_d=1,Il?wd=Mp(o,e.containerInfo,Ed,af,of,rf,sf,uf,nf,null,null):(af(),of(),sf())}function nf(e){if(_d!==0){var t=vd.onRecoverableError;t(e,{componentStack:null})}}function rf(){_d===3&&(_d=0,Au(yd,vd),_d=4)}function af(){if(_d===1){_d=0;var e=vd,t=yd,n=bd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=M.T,M.T=null;var i=N.p;N.p=2;var a=Yu;Yu|=4;try{ou=su=!1,Eu(t,e,n),n=cp;var o=Ur(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Hr(s.ownerDocument.documentElement,s)){if(c!==null&&Wr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Vr(s,h),v=Vr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{Yu=a,N.p=i,M.T=r}}e.current=t,_d=2}}function of(){if(_d===2){_d=0;var e=vd,t=yd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=Yu;Yu|=4;try{du(e,t.alternate,t)}finally{Yu=i,N.p=r,M.T=n}}_d=3}}function sf(){if(_d===4||_d===3){_d=0;var e=wd;wd=null,We();var t=vd,n=yd,r=bd,i=Cd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?_d=5:(_d=0,yd=vd=null,cf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(gd=null),bt(r),n=n.stateNode,$e&&typeof $e.onCommitFiberRoot==`function`)try{$e.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=M.T,a=N.p,N.p=2,M.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{M.T=n,N.p=a}}if(i=Td,o=Ed,Ed=null,i!==null&&(Td=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);bd&3&&lf(),Tf(t),a=t.pendingLanes,r&261930&&a&42?t===Od?Dd++:(Dd=0,Od=t):(Dd=0,Od=null),Ef(0,!1)}}function cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Oa(t)))}function lf(){return wd!==null&&(wd.skipTransition(),wd=null),af(),of(),sf(),uf()}function uf(){if(_d!==5)return!1;var e=vd,t=xd;xd=0;var n=bt(bd),r=M.T,a=N.p;try{N.p=32>n?32:n,M.T=null,n=Sd,Sd=null;var o=vd,s=bd;if(_d=0,yd=vd=null,bd=0,Yu&6)throw Error(i(331));var c=Yu;if(Yu|=4,Gu(o.current),Lu(o,o.current,s,n),Yu=c,Ef(0,!1),$e&&typeof $e.onPostCommitFiberRoot==`function`)try{$e.onPostCommitFiberRoot(Qe,o)}catch{}return!0}finally{N.p=a,M.T=r,cf(e,t)}}function df(e,t,n){t=Ri(n,t),t=Tc(e.stateNode,t,2),e=po(e,t,2),e!==null&&(mt(e,2),Tf(e))}function ff(e,t,n){if(e.tag===3)df(e,e,n);else for(;t!==null;){if(t.tag===3){df(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gd===null||!gd.has(r))){e=Ri(n,e),n=Ec(2),r=po(t,n,2),r!==null&&(Dc(n,r,t,e),mt(r,2),Tf(r));break}}t=t.return}}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ju;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(td=!0,i.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xu===e&&(Q&n)===n&&(rd===4||rd===3&&(Q&62914560)===Q&&300>Ge()-fd?Yu&2?od|=n:zd(e,0):od|=n,cd===Q&&(cd=0)),Tf(e)}function hf(e,t){t===0&&(t=ft()),e=Ci(e,t),e!==null&&(mt(e,t),Tf(e))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hf(e,n)}function _f(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),hf(e,n)}function vf(e,t){return Ve(e,t)}var yf=null,bf=null,xf=!1,Sf=!1,Cf=!1,wf=0;function Tf(e){e!==bf&&e.next===null&&(bf===null?yf=bf=e:bf=bf.next=e),Sf=!0,xf||(xf=!0,Mf())}function Ef(e,t){if(!Cf&&Sf){Cf=!0;do for(var n=!1,r=yf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-tt(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,jf(r,a))}else a=Q,a=ct(r,r===Xu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||lt(r,a)||(n=!0,jf(r,a))}r=r.next}while(n);Cf=!1}}function Df(){Of()}function Of(){Sf=xf=!1;var e=0;wf!==0&&hp()&&(e=wf);for(var t=Ge(),n=null,r=yf;r!==null;){var i=r.next,a=kf(r,t);a===0?(r.next=null,n===null?yf=i:n.next=i,i===null&&(bf=n)):(n=r,(e!==0||a&3)&&(Sf=!0)),r=i}_d!==0&&_d!==5||Ef(e,!1),wf!==0&&(wf=0)}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-tt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=dt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Xu,n=Q,n=ct(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&He(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||lt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&He(r),bt(n)){case 2:case 8:n=Je;break;case 32:n=P;break;case 268435456:n=Ye;break;default:n=P}return r=Af.bind(null,e),n=Ve(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&He(r),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,t){if(_d!==0&&_d!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lf()&&e.callbackNode!==n)return null;var r=Q;return r=ct(e,e===Xu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Nd(e,r,t),kf(e,Ge()),e.callbackNode!=null&&e.callbackNode===n?Af.bind(null,e):null)}function jf(e,t){if(lf())return null;Nd(e,t,!0)}function Mf(){bp(function(){Yu&6?Ve(qe,Df):Of()})}function Nf(){if(wf===0){var e=Pa;e===0&&(e=it,it<<=1,!(it&261888)&&(it=256)),wf=e}return wf}function Pf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:vn(e)}function Ff(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Pf((i[Tt]||null).action),o=r.submitter;o&&(t=(t=o[Tt]||null)?Pf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Rn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wf!==0){var e=new FormData(i,o);Zs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Zs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var If=0;If<ui.length;If++){var Lf=ui[If];di(Lf.toLowerCase(),`on`+(Lf[0].toUpperCase()+Lf.slice(1)))}di(ni,`onAnimationEnd`),di(ri,`onAnimationIteration`),di(ii,`onAnimationStart`),di(`dblclick`,`onDoubleClick`),di(`focusin`,`onFocus`),di(`focusout`,`onBlur`),di(ai,`onTransitionRun`),di(oi,`onTransitionStart`),di(si,`onTransitionCancel`),di(ci,`onTransitionEnd`),Ht(`onMouseEnter`,[`mouseout`,`mouseover`]),Ht(`onMouseLeave`,[`mouseout`,`mouseover`]),Ht(`onPointerEnter`,[`pointerout`,`pointerover`]),Ht(`onPointerLeave`,[`pointerout`,`pointerover`]),L(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),L(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),L(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),L(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),L(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),L(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Rf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),zf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Rf));function Bf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){gi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){gi(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[Dt];n===void 0&&(n=t[Dt]=new Set);var r=e+`__bubble`;n.has(r)||(Wf(t,e,2,!1),n.add(r))}function Vf(e,t,n){var r=0;t&&(r|=4),Wf(n,e,r,t)}var Hf=`_reactListening`+Math.random().toString(36).slice(2);function Uf(e){if(!e[Hf]){e[Hf]=!0,Bt.forEach(function(t){t!==`selectionchange`&&(zf.has(t)||Vf(t,!1,e),Vf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hf]||(t[Hf]=!0,Vf(`selectionchange`,!1,t))}}function Wf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Dn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Gf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Pt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}wn(function(){var r=a,i=z(n),s=[];a:{var c=li.get(e);if(c!==void 0){var l=Rn,u=e;switch(e){case`keypress`:if(Nn(n)===0)break a;case`keydown`:case`keyup`:l=er;break;case`focusin`:u=`focus`,l=H;break;case`focusout`:u=`blur`,l=H;break;case`beforeblur`:case`afterblur`:l=H;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Gn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=V;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=rr;break;case ni:case ri:case ii:l=Kn;break;case ci:l=ir;break;case`scroll`:case`scrollend`:l=Bn;break;case`wheel`:l=ar;break;case`copy`:case`cut`:case`paste`:l=qn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=tr;break;case`submit`:l=nr;break;case`toggle`:case`beforetoggle`:l=or}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Tn(m,p),g!=null&&d.push(Kf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==bn&&(u=n.relatedTarget||n.fromElement)&&(Pt(u)||u[Et]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Pt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Gn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=tr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:It(c),h=l==null?u:It(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Pt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Jf):null,c!==null&&Yf(s,u,c,d,!1),l!==null&&f!==null&&Yf(s,f,l,d,!0)))}a:{if(c=r?It(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Tr;else if(br(c)){if(Er)_=Fr;else{_=Nr;var v=Mr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&hn(r.elementType)&&(_=Tr):_=Pr;if(_&&=_(e,r)){xr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?It(r):window,e){case`focusin`:(br(v)||v.contentEditable===`true`)&&(Kr=v,qr=r,Jr=null);break;case`focusout`:Jr=qr=Kr=null;break;case`mousedown`:Yr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Yr=!1,Xr(s,n,i);break;case`selectionchange`:if(Gr)break;case`keydown`:case`keyup`:Xr(s,n,i)}var y;if(cr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else gr?mr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(dr&&n.locale!==`ko`&&(gr||b!==`onCompositionStart`?b===`onCompositionEnd`&&gr&&(y=Mn()):(kn=i,An=`value`in kn?kn.value:kn.textContent,gr=!0)),v=qf(r,b),0<v.length&&(b=new Jn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=hr(n),y!==null&&(b.data=y)))),(y=ur?_r(e,n):vr(e,n))&&(b=qf(r,`onBeforeInput`),0<b.length&&(v=new Jn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Ff(s,e,r,n,i)}Bf(s,t)})}function Kf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Tn(e,n),i!=null&&r.unshift(Kf(e,i,a)),i=Tn(e,t),i!=null&&r.push(Kf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Jf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Tn(n,a),l!=null&&o.unshift(Kf(n,l,c))):i||(l=Tn(n,a),l!=null&&o.push(Kf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function Qf(e){return(typeof e==`string`?e:``+e).replace(Xf,`
`).replace(Zf,``)}function $f(e,t){return t=Qf(t),Qf(e)===t}function ep(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||dn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&dn(e,``+r);else return;break;case`className`:Yt(e,`class`,r);break;case`tabIndex`:Yt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Yt(e,n,r);break;case`style`:mn(e,r,o);return;case`data`:if(t!==`object`){Yt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=vn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&ep(e,t,`name`,a.name,a,null),ep(e,t,`formEncType`,a.formEncType,a,null),ep(e,t,`formMethod`,a.formMethod,a,null),ep(e,t,`formTarget`,a.formTarget,a,null)):(ep(e,t,`encType`,a.encType,a,null),ep(e,t,`method`,a.method,a,null),ep(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=vn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=yn);return;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=vn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Jt(e,`popover`,r);break;case`xlinkActuate`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Xt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Xt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Xt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Jt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=gn.get(n)||n,Jt(e,n,r);else return}R=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:mn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)dn(e,r);else if(typeof r==`number`||typeof r==`bigint`)dn(e,``+r);else return;break;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=yn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Vt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Tt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}R=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Jt(e,n,r)}return}R=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,o,s,n,null)}}a&&ep(e,t,`srcSet`,n.srcSet,n,null),r&&ep(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:ep(e,t,r,d,n,null)}}on(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:ep(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&cn(e,!!r,n,!0):cn(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:ep(e,t,s,c,n,null)}un(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:ep(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<Rf.length;r++)$(Rf[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,u,r,n,null)}return;default:if(hn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&ep(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||ep(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(R=!0),o=m;break;case`name`:m!==f&&(R=!0),a=m;break;case`checked`:m!==f&&(R=!0),u=m;break;case`defaultChecked`:m!==f&&(R=!0),d=m;break;case`value`:m!==f&&(R=!0),s=m;break;case`defaultValue`:m!==f&&(R=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&ep(e,t,p,m,r,f)}}an(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||ep(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(R=!0),p=o;break;case`defaultValue`:o!==l&&(R=!0),c=o;break;case`multiple`:o!==l&&(R=!0),s=o;default:o!==l&&ep(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?cn(e,!!n,n?[]:``,!1):cn(e,!!n,t,!0)):cn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:ep(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(R=!0),p=a;break;case`defaultValue`:a!==o&&(R=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&ep(e,t,s,a,r,o)}ln(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:ep(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(R=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:ep(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&ep(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:ep(e,t,u,p,r,m)}return;default:if(hn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&ep(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||ep(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[wt]=r,n[Tt]=t,np(n,e,t),Rt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[jt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Pt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Nt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[jt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&ep(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===yn&&(e.onclick=null),Nt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Nt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=N.d;N.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=Ld();return e||t}function Cm(e){var t=Ft(e);t!==null&&t.tag===5&&t.type===`form`?$s(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=rn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Rt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+rn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+rn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+rn(n.imageSizes)+`"]`)):i+=`[href="`+rn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Mt]=!0,o.onload=o.onerror=function(){zt(o)}),Rt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+rn(r)+`"][href="`+rn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Rt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Lt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Rt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Lt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Rt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Lt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Rt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=De.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Lt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Lt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Lt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+rn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Mt]){r.loading=1;return}}else t=e.createElement(`link`),t[Mt]=!0,t.onload=t.onerror=zt.bind(null,t),np(t,`link`,n),Rt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+rn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+rn(n.href)+`"]`);if(r)return t.instance=r,Rt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Rt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Rt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Rt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Rt(a),a):(r=n,(a=vm.get(o))&&(r=D({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Rt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[jt]||a[wt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Rt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Rt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:A,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pt(0),this.hiddenUpdates=pt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Oi(3,null,null,t),e.current=a,a.stateNode=e,t=Da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},lo(a),e}function uh(e){return e?(e=Ei,e):Ei}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=fo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=po(e,r,t),n!==null&&(Md(n,e,t),mo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Ci(e,67108864);t!==null&&Md(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=kd();t=yt(t);var n=Ci(e,t);n!==null&&Md(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=2,yh(e,t,n,r)}finally{N.p=a,M.T=i}}function vh(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=8,yh(e,t,n,r)}finally{N.p=a,M.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Gf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Ft(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=st(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-tt(o);s.entanglements[1]|=c,o&=~c}Tf(a),!(Yu&6)&&(md=Ge()+500,Ef(0,!1))}}break;case 31:case 13:s=Ci(a,2),s!==null&&Md(s,a,2),Ld(),ph(a,2)}if(a=bh(r),a===null&&Gf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Gf(e,t,r,null,n)}}function bh(e){return e=z(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Pt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ke()){case qe:return 2;case Je:return 8;case P:case F:return 32;case Ye:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ft(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Pt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,St(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,St(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bn=r,n.target.dispatchEvent(r),bn=null}else return t=Ft(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Ft(n);a!==null&&(e.splice(t,3),t-=3,Zs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Tt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Tt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,kd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Ld(),t[Et]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=xt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:M,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{Qe=Jh.inject(qh),$e=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=bc,s=xc,c=Sc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Et]=t.current,Uf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=e=>e.replace(/[-_ ]+(\w)/g,(e,t)=>t.toUpperCase()).replace(/^./,e=>e.toLowerCase());function b(e,t){return`__ciq-font-${e}-${t.weight}-${t.style}`}function x(e,t){return`
    @font-face {
      font-family: '${e}';
      font-style: ${t.style};
      font-weight: ${t.weight};
      src: url('${t.file}') format('woff2');
      font-display: swap;
    }
  `}function S(e,t){return{href:t.file,type:`font/woff2`,as:`font`,crossOrigin:`anonymous`}}function C(e,t){let{id:n}=t,r=n??b(e,t);if(document.getElementById(r))return;let i=document.createElement(`style`);i.id=r,i.textContent=x(e,t),document.head.appendChild(i)}var w=(e,t)=>t?e.filter(e=>{let n=!t.weights||t.weights.includes(e.weight),r=!t.styles||t.styles.includes(e.style);return n&&r}):e;function T(e){let t=Object.fromEntries(e.variants.map(t=>{let{weight:n,style:r}=t;return[y([e.name,n,r===`normal`?``:r].filter(Boolean).join(`-`)),{css:()=>x(e.name,t),preload:()=>[S(e.name,t)],inject:()=>C(e.name,t)}]})),n={[y(e.name)]:{css:t=>w(e.variants,t).map(t=>x(e.name,t)).join(`
`),preload:t=>w(e.variants,t).map(t=>S(e.name,t)),inject:t=>w(e.variants,t).forEach(t=>C(e.name,t))}};return{...t,...n}}var E=`/assets/CommitMono-Regular.woff2`,D=`/assets/CommitMono-Italic.woff2`,ee=`/assets/CommitMono-Bold.woff2`,O=`/assets/CommitMono-BoldItalic.woff2`,te=`/assets/Inter-Thin.woff2`,k=`/assets/Inter-ThinItalic.woff2`,ne=`/assets/Inter-ExtraLight.woff2`,re=`/assets/Inter-ExtraLightItalic.woff2`,ie=`/assets/Inter-Light.woff2`,A=`/assets/Inter-LightItalic.woff2`,j=`/assets/Inter-Regular.woff2`,ae=`/assets/Inter-Italic.woff2`,oe=`/assets/Inter-Medium.woff2`,se=`/assets/Inter-MediumItalic.woff2`,ce=`/assets/Inter-SemiBold.woff2`,le=`/assets/Inter-SemiBoldItalic.woff2`,ue=`/assets/Inter-Bold.woff2`,de=`/assets/Inter-BoldItalic.woff2`,fe=`/assets/Inter-ExtraBold.woff2`,pe=`/assets/Inter-ExtraBoldItalic.woff2`,me=`/assets/Inter-Black.woff2`,he=`/assets/Inter-BlackItalic.woff2`,ge=`/assets/Roboto-Thin.woff2`,_e=`/assets/Roboto-ThinItalic.woff2`,ve=`/assets/Roboto-Light.woff2`,M=`/assets/Roboto-LightItalic.woff2`,N=`/assets/Roboto-Regular.woff2`,ye=`/assets/Roboto-RegularItalic.woff2`,be=`/assets/Roboto-Medium.woff2`,xe=`/assets/Roboto-MediumItalic.woff2`,Se=`/assets/Roboto-Bold.woff2`,Ce=`/assets/Roboto-BoldItalic.woff2`,we=`/assets/Roboto-Black.woff2`,Te=`/assets/Roboto-BlackItalic.woff2`,Ee=`/assets/Satoshi-Light.woff2`,De=`/assets/Satoshi-LightItalic.woff2`,Oe=`/assets/Satoshi-Regular.woff2`,ke=`/assets/Satoshi-Italic.woff2`,Ae=`/assets/Satoshi-Medium.woff2`,je=`/assets/Satoshi-MediumItalic.woff2`,Me=`/assets/Satoshi-Bold.woff2`,Ne=`/assets/Satoshi-BoldItalic.woff2`,Pe=`/assets/Satoshi-Black.woff2`,Fe=`/assets/Satoshi-BlackItalic.woff2`,Ie={name:`CommitMono`,variants:[{weight:400,style:`normal`,file:E},{weight:400,style:`italic`,file:D},{weight:700,style:`normal`,file:ee},{weight:700,style:`italic`,file:O}]},Le={name:`Inter`,variants:[{weight:100,style:`normal`,file:te},{weight:100,style:`italic`,file:k},{weight:200,style:`normal`,file:ne},{weight:200,style:`italic`,file:re},{weight:300,style:`normal`,file:ie},{weight:300,style:`italic`,file:A},{weight:400,style:`normal`,file:j},{weight:400,style:`italic`,file:ae},{weight:500,style:`normal`,file:oe},{weight:500,style:`italic`,file:se},{weight:600,style:`normal`,file:ce},{weight:600,style:`italic`,file:le},{weight:700,style:`normal`,file:ue},{weight:700,style:`italic`,file:de},{weight:800,style:`normal`,file:fe},{weight:800,style:`italic`,file:pe},{weight:900,style:`normal`,file:me},{weight:900,style:`italic`,file:he}]},Re={name:`Roboto`,variants:[{weight:100,style:`normal`,file:ge},{weight:100,style:`italic`,file:_e},{weight:300,style:`normal`,file:ve},{weight:300,style:`italic`,file:M},{weight:400,style:`normal`,file:N},{weight:400,style:`italic`,file:ye},{weight:500,style:`normal`,file:be},{weight:500,style:`italic`,file:xe},{weight:700,style:`normal`,file:Se},{weight:700,style:`italic`,file:Ce},{weight:900,style:`normal`,file:we},{weight:900,style:`italic`,file:Te}]},ze={name:`Satoshi`,variants:[{weight:300,style:`normal`,file:Ee},{weight:300,style:`italic`,file:De},{weight:400,style:`normal`,file:Oe},{weight:400,style:`italic`,file:ke},{weight:500,style:`normal`,file:Ae},{weight:500,style:`italic`,file:je},{weight:700,style:`normal`,file:Me},{weight:700,style:`italic`,file:Ne},{weight:900,style:`normal`,file:Pe},{weight:900,style:`italic`,file:Fe}]},Be=T(Ie),Ve=T(Le),He=T(Re),Ue=T(ze);Be.commitMono,Be.commitMono400,Be.commitMono400Italic,Be.commitMono700,Be.commitMono700Italic;var We=Ve.inter;Ve.inter100,Ve.inter100Italic,Ve.inter200,Ve.inter200Italic,Ve.inter300,Ve.inter300Italic,Ve.inter400,Ve.inter400Italic,Ve.inter500,Ve.inter500Italic,Ve.inter600,Ve.inter600Italic,Ve.inter700,Ve.inter700Italic,Ve.inter800,Ve.inter800Italic,Ve.inter900,Ve.inter900Italic,He.roboto,He.roboto100,He.roboto100Italic,He.roboto300,He.roboto300Italic,He.roboto400,He.roboto400Italic,He.roboto500,He.roboto500Italic,He.roboto700,He.roboto700Italic,He.roboto900,He.roboto900Italic;var Ge=Ue.satoshi;Ue.satoshi300,Ue.satoshi300Italic,Ue.satoshi400,Ue.satoshi400Italic,Ue.satoshi500,Ue.satoshi500Italic,Ue.satoshi700,Ue.satoshi700Italic,Ue.satoshi900,Ue.satoshi900Italic;var Ke=new Set([`children`,`localName`,`ref`,`style`,`className`]),qe=new WeakMap,Je=(e,t,n,r,i)=>{let a=i?.[t];a===void 0?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==r&&((e,t,n)=>{let r=qe.get(e);r===void 0&&qe.set(e,r=new Map);let i=r.get(t);n===void 0?i!==void 0&&(r.delete(t),e.removeEventListener(t,i)):i===void 0?(r.set(t,i={handleEvent:n}),e.addEventListener(t,i)):i.handleEvent=n})(e,a,n)},P=({react:e,tagName:t,elementClass:n,events:r,displayName:i})=>{let a=new Set(Object.keys(r??{})),o=e.forwardRef(((i,o)=>{let s=e.useRef(new Map),c=e.useRef(null),l={},u={};for(let[e,t]of Object.entries(i))Ke.has(e)?l[e===`className`?`class`:e]=t:a.has(e)||e in n.prototype?u[e]=t:l[e]=t;return e.useLayoutEffect((()=>{if(c.current===null)return;let e=new Map;for(let t in u)Je(c.current,t,i[t],s.current.get(t),r),s.current.delete(t),e.set(t,i[t]);for(let[e,t]of s.current)Je(c.current,e,void 0,t,r);s.current=e})),e.useLayoutEffect((()=>{c.current?.removeAttribute(`defer-hydration`)}),[]),l.suppressHydrationWarning=!0,e.createElement(t,{...l,ref:e.useCallback((e=>{c.current=e,typeof o==`function`?o(e):o!==null&&(o.current=e)}),[o])})}));return o.displayName=i??n.name,o};function F(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function Ye(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)}function Xe(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n}var Ze=globalThis,Qe=Ze.ShadowRoot&&(Ze.ShadyCSS===void 0||Ze.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,$e=Symbol(),et=new WeakMap,tt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==$e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Qe&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=et.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&et.set(t,e))}return e}toString(){return this.cssText}},nt=e=>new tt(typeof e==`string`?e:e+``,void 0,$e),I=(e,...t)=>new tt(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,$e),rt=(e,t)=>{if(Qe)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=Ze.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},it=Qe?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return nt(t)})(e):e,{is:at,defineProperty:ot,getOwnPropertyDescriptor:st,getOwnPropertyNames:ct,getOwnPropertySymbols:lt,getPrototypeOf:ut}=Object,dt=globalThis,ft=dt.trustedTypes,pt=ft?ft.emptyScript:``,mt=dt.reactiveElementPolyfillSupport,ht=(e,t)=>e,gt={toAttribute(e,t){switch(t){case Boolean:e=e?pt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},_t=(e,t)=>!at(e,t),vt={attribute:!0,type:String,converter:gt,reflect:!1,useDefault:!1,hasChanged:_t};Symbol.metadata??=Symbol(`metadata`),dt.litPropertyMetadata??=new WeakMap;var yt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=vt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ot(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=st(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??vt}static _$Ei(){if(this.hasOwnProperty(ht(`elementProperties`)))return;let e=ut(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ht(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ht(`properties`))){let e=this.properties,t=[...ct(e),...lt(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(it(e))}else e!==void 0&&t.push(it(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?gt:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?gt:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??_t)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};yt.elementStyles=[],yt.shadowRootOptions={mode:`open`},yt[ht(`elementProperties`)]=new Map,yt[ht(`finalized`)]=new Map,mt?.({ReactiveElement:yt}),(dt.reactiveElementVersions??=[]).push(`2.1.2`);var bt=globalThis,xt=e=>e,St=bt.trustedTypes,Ct=St?St.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,wt=`$lit$`,Tt=`lit$${Math.random().toFixed(9).slice(2)}$`,Et=`?`+Tt,Dt=`<${Et}>`,Ot=document,kt=()=>Ot.createComment(``),At=e=>e===null||typeof e!=`object`&&typeof e!=`function`,jt=Array.isArray,Mt=e=>jt(e)||typeof e?.[Symbol.iterator]==`function`,Nt=`[ 	
\f\r]`,Pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ft=/-->/g,It=/>/g,Lt=RegExp(`>|${Nt}(?:([^\\s"'>=/]+)(${Nt}*=${Nt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Rt=/'/g,zt=/"/g,Bt=/^(?:script|style|textarea|title)$/i,Vt=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),L=Vt(1),Ht=Vt(2),Ut=Symbol.for(`lit-noChange`),Wt=Symbol.for(`lit-nothing`),Gt=new WeakMap,Kt=Ot.createTreeWalker(Ot,129);function R(e,t){if(!jt(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Ct===void 0?t:Ct.createHTML(t)}var qt=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Pt;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Pt?c[1]===`!--`?o=Ft:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Lt):(Bt.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Lt):o=It:o===Lt?c[0]===`>`?(o=i??Pt,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Lt:c[3]===`"`?zt:Rt):o===zt||o===Rt?o=Lt:o===Ft||o===It?o=Pt:(o=Lt,i=void 0);let d=o===Lt&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Pt?n+Dt:l>=0?(r.push(s),n.slice(0,l)+wt+n.slice(l)+Tt+d):n+Tt+(l===-2?t:d)}return[R(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Jt=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=qt(t,n);if(this.el=e.createElement(l,r),Kt.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Kt.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(wt)){let t=u[o++],n=i.getAttribute(e).split(Tt),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?$t:r[1]===`?`?en:r[1]===`@`?tn:Qt}),i.removeAttribute(e)}else e.startsWith(Tt)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Bt.test(i.tagName)){let e=i.textContent.split(Tt),t=e.length-1;if(t>0){i.textContent=St?St.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],kt()),Kt.nextNode(),c.push({type:2,index:++a});i.append(e[t],kt())}}}else if(i.nodeType===8){if(i.data===Et)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Tt,e+1))!==-1;)c.push({type:7,index:a}),e+=Tt.length-1}}a++}}static createElement(e,t){let n=Ot.createElement(`template`);return n.innerHTML=e,n}};function Yt(e,t,n=e,r){if(t===Ut)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=At(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Yt(e,i._$AS(e,t.values),i,r)),t}var Xt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ot).importNode(t,!0);Kt.currentNode=r;let i=Kt.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Zt(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new nn(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Kt.nextNode(),a++)}return Kt.currentNode=Ot,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Zt=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=Wt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Yt(this,e,t),At(e)?e===Wt||e==null||e===``?(this._$AH!==Wt&&this._$AR(),this._$AH=Wt):e!==this._$AH&&e!==Ut&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Mt(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Wt&&At(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ot.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Jt.createElement(R(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Xt(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Gt.get(e.strings);return t===void 0&&Gt.set(e.strings,t=new Jt(e)),t}k(t){jt(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(kt()),this.O(kt()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=xt(e).nextSibling;xt(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Qt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=Wt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Wt}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Yt(this,e,t,0),a=!At(e)||e!==this._$AH&&e!==Ut,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Yt(this,r[n+o],t,o),s===Ut&&(s=this._$AH[o]),a||=!At(s)||s!==this._$AH[o],s===Wt?e=Wt:e!==Wt&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===Wt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},$t=class extends Qt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Wt?void 0:e}},en=class extends Qt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Wt)}},tn=class extends Qt{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Yt(this,e,t,0)??Wt)===Ut)return;let n=this._$AH,r=e===Wt&&n!==Wt||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==Wt&&(n===Wt||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},nn=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Yt(this,e)}},rn={M:wt,P:Tt,A:Et,C:1,L:qt,R:Xt,D:Mt,V:Yt,I:Zt,H:Qt,N:en,U:tn,B:$t,F:nn},an=bt.litHtmlPolyfillSupport;an?.(Jt,Zt),(bt.litHtmlVersions??=[]).push(`3.3.3`);var on=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Zt(t.insertBefore(kt(),e),e,void 0,n??{})}return i._$AI(e),i},sn=globalThis,cn=class extends yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=on(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ut}};cn._$litElement$=!0,cn.finalized=!0,sn.litElementHydrateSupport?.({LitElement:cn});var ln=sn.litElementPolyfillSupport;ln?.({LitElement:cn}),(sn.litElementVersions??=[]).push(`4.2.2`);var un={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:_t},dn=(e=un,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function fn(e){return(t,n)=>typeof n==`object`?dn(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function pn(e){return fn({...e,state:!0,attribute:!1})}var mn=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function hn(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return mn(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return mn(n,r,{get(){return a(this)}})}}var gn=new WeakMap,_n={description:!0,type:!0,options:!0,default:!0,required:!0,copyRule:!0,experimental:!0,attribute:!0,reflect:!0},vn=new Set([`attribute`,`reflect`]),yn={fromAttribute:e=>e!==null&&e!==`false`,toAttribute:e=>e?``:null};function bn(e){return e===`boolean`?Boolean:e===`number`?Number:/\[\]$/.test(e)||e.startsWith(`Array`)?Array:e===`object`||e.startsWith(`Record<`)||e.startsWith(`{`)?Object:String}function z(e){return(t,n)=>{let r=gn.get(t);r||(r={},gn.set(t,r));let{type:i}=e,a={type:i},o={};for(let[t,n]of Object.entries(e))t!==`type`&&(t in _n&&Object.assign(a,{[t]:n}),(!(t in _n)||vn.has(t))&&(o[t]=n));let s=bn(i),c=s!==Array&&s!==Object,l=s===Boolean?{converter:yn}:{};a.attribute??=n.toLowerCase(),a.reflect=a.attribute!==!1&&(a.reflect??c),r[n]=a,fn({type:s,reflect:c,...l,...o})(t,n)}}function xn(e){let t=[],n=e;for(;n&&n!==Object.prototype;)t.push(n),n=Object.getPrototypeOf(n);let r={};for(let e of t.reverse()){let t=gn.get(e);t&&Object.assign(r,t)}return r}function B(e,t){return n=>{let r=n.meta;if(r){r.events||={};let n=t.description??(t.forwarded?`Forwarded native ${e} event.`:void 0);r.events[e]={...t,description:n}}}}var Sn=new Set([`checkbox`,`radio`]),Cn=new Set([`text`,`search`,`url`,`tel`,`password`]),wn=[`type`,`part`,`slot`],Tn=e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement,En=e=>[e.localName,...wn.map(t=>e.getAttribute(t)??``)].join(`|`),Dn=(e,t)=>[...e.querySelectorAll(`*`)].filter(e=>En(e)===t),On=(e,t)=>{let n=En(t);return{key:n,index:Dn(e,n).indexOf(t)}};function kn(e){let t=[...e.options].filter(e=>e.defaultSelected);if(t.length||e.multiple)return t.map(e=>e.value);let n=[...e.options].find(e=>!e.disabled);return n?[n.value]:[]}function An(e){if(e instanceof HTMLTextAreaElement)return e.defaultValue;let t=document.createElement(`input`);return[...e.attributes].forEach(({name:e,value:n})=>t.setAttribute(e,n)),t.value}function jn(e){if(e instanceof HTMLSelectElement){let t=[...e.selectedOptions].map(e=>e.value);return t.join(`
`)===kn(e).join(`
`)?void 0:t}if(e instanceof HTMLInputElement&&Sn.has(e.type))return e.checked===e.defaultChecked?void 0:e.checked;if(!(e instanceof HTMLInputElement&&e.type===`file`))return e.value===An(e)?void 0:e.value}function Mn(e,t){e instanceof HTMLSelectElement?[...e.options].forEach(e=>{e.selected=t.includes(e.value)}):typeof t==`boolean`?e.checked=t:e.value=t}var Nn=(e,t)=>!(e instanceof HTMLSelectElement)||t.length===0||[...e.options].some(e=>t.includes(e.value)),Pn=e=>e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement&&Cn.has(e.type);function Fn(e){let t=new Map;return[...e.querySelectorAll(`*`)].map(e=>{let n=En(e),r=t.get(n)??0;return t.set(n,r+1),[e,{key:n,index:r}]})}function In(e,t){return Fn(e).flatMap(([e,n])=>{let r=[...t,n];return[[e,r],...e.shadowRoot?In(e.shadowRoot,r):[]]})}var Ln=e=>e.flatMap(([e,t])=>{let n=Tn(e)?jn(e):void 0;return n===void 0?[]:[{location:t,value:n}]}),Rn=e=>e.flatMap(([e,t])=>e.scrollTop||e.scrollLeft?[{location:t,top:e.scrollTop,left:e.scrollLeft}]:[]);function zn(e,t=[]){let n=e.activeElement;if(!n)return;let r=[...t,On(e,n)];return n.shadowRoot?.activeElement?zn(n.shadowRoot,r):{location:r,selection:Pn(n)?[n.selectionStart??0,n.selectionEnd??0]:null}}function Bn(e){let t=In(e,[]);return{edits:Ln(t),scrolls:Rn(t),focus:zn(e)}}async function Vn(e,[t,...n]){let r=Dn(e,t.key)[t.index];return!r||!n.length?r:(`updateComplete`in r&&await r.updateComplete,r.shadowRoot?Vn(r.shadowRoot,n):void 0)}async function Hn(e,{edits:t,scrolls:n,focus:r}){let i=(await Promise.all(t.map(async({location:t,value:n})=>({control:await Vn(e,t),value:n})))).flatMap(({control:e,value:t})=>!e||!Tn(e)||!Nn(e,t)?[]:(Mn(e,t),[e]));(await Promise.all(n.map(async({location:t,top:n,left:r})=>({element:await Vn(e,t),top:n,left:r})))).forEach(({element:e,top:t,left:n})=>e?.scrollTo({top:t,left:n,behavior:`instant`}));let a=r&&await Vn(e,r.location);return r&&a instanceof HTMLElement&&(a.focus({preventScroll:!0}),r.selection&&Pn(a)&&a.setSelectionRange(...r.selection)),i}function Un(e){e.forEach(e=>{e.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),e.dispatchEvent(new Event(`change`,{bubbles:!0}))})}var Wn=Symbol.for(`tagName`),Gn=(e,t)=>{e[Wn]=t},V=class extends cn{createRenderRoot(){let e=this.shadowRoot;return e?(this.serverRenderedNodes=[...e.childNodes],rt(e,this.constructor.elementStyles),e):super.createRenderRoot()}update(e){let t=this.serverRenderedNodes,n=this.renderRoot,r=t&&Bn(n);super.update(e),t&&r&&(t.forEach(e=>e.remove()),this.serverRenderedNodes=void 0,queueMicrotask(()=>void Hn(n,r).then(Un)))}static ensureDefined(){if(!this.tagName)throw Error(`${this.name} is missing a tagName. Did you forget to use @quanticElement decorator?`);Gn(this,this.tagName),customElements.get(this.tagName)||customElements.define(this.tagName,this)}};function H(e){return function(t){customElements.get(e)||customElements.define(e,t),t.tagName=e,Gn(t,e);let n=xn(t.prototype);if(t.meta&&Object.keys(n).length){let r=Object.prototype.hasOwnProperty.call(t,`meta`),i=r?t.meta:{...t.meta,tag:e,props:{...t.meta.props??{}}};i.props={...i.props??{},...n},r||(t.meta=i)}return t}}function Kn(e,t){let n=t.cssText;if(e===``)return nt(`:host(:has(> :not([slot]))) { ${n} } @scope { :scope:has(> :not([slot])) { ${n} } }`);let r=qn(e);return nt(`:host(:has(> [slot="${r}"])) { ${n} } @scope { :scope:has(> [slot="${r}"]) { ${n} } }`)}function qn(e){return e.replace(/["\\]/g,`\\$&`)}var Jn=`data-slot-filled`,Yn=(e,t=[])=>{var n,r,i,a,o,s,c;if(t.length===0)return e;let l=e=>`cssText`in e?e.cssText:Array.from(e.cssRules,e=>e.cssText).join(`
`),u=e=>e===``?`slot:not([name])`:`slot[name="${qn(e)}"]`,d=t.map(e=>{let t=u(e);return e===``?`${t}[${Jn}="false"] { display: none; }`:[`${t} { display: none; }`,Kn(e,nt(`${t} { display: revert-layer; }`)).cssText,`${t}[${Jn}="true"] { display: revert-layer; }`].join(` `)}).join(` `);class f extends e{constructor(){super(...arguments),n.add(this),r.set(this,!1),i.set(this,e=>e.nodeType!==Node.TEXT_NODE||e.textContent?.trim()!==``),a.set(this,e=>{let r=e.target;t.includes(r.name)&&Ye(this,n,`m`,o).call(this,r)})}static finalizeStyles(t){return[nt(`@layer quantic-component, quantic-slot-visibility; @layer quantic-component { ${(e.finalizeStyles?.call(this,t)??[]).map(l).join(`
`)} } @layer quantic-slot-visibility { ${d} }`)]}connectedCallback(){super.connectedCallback(),Ye(this,n,`m`,s).call(this)}disconnectedCallback(){Ye(this,n,`m`,c).call(this),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated?.(e),Ye(this,n,`m`,s).call(this)}updated(e){super.updated?.(e);for(let e of t){let t=this.renderRoot.querySelector(e===``?`slot:not([name])`:`slot[name="${CSS.escape(e)}"]`);t&&Ye(this,n,`m`,o).call(this,t)}}}return r=new WeakMap,i=new WeakMap,a=new WeakMap,n=new WeakSet,o=function(e){let t=String(e.assignedNodes({flatten:!0}).some(Ye(this,i,`f`)));e.getAttribute(Jn)!==t&&e.setAttribute(Jn,t)},s=function(){!Ye(this,r,`f`)&&this.renderRoot&&(this.renderRoot.addEventListener(`slotchange`,Ye(this,a,`f`),{capture:!0}),Xe(this,r,!0,`f`))},c=function(){Ye(this,r,`f`)&&this.renderRoot&&(this.renderRoot.removeEventListener(`slotchange`,Ye(this,a,`f`),{capture:!0}),Xe(this,r,!1,`f`))},f},Xn={Success:`success`,Error:`error`,Warning:`warning`,Info:`info`},Zn=Symbol.for(``),Qn=e=>{if(e?.r===Zn)return e?._$litStatic$},$n=e=>({_$litStatic$:e,r:Zn}),er=new Map,tr=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Qn(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=er.get(e))===void 0&&(o.raw=o,er.set(e,t=o)),n=s}return e(t,...n)})(L),nr={Primary:`primary`,Secondary:`secondary`,Outline:`outline`,Ghost:`ghost`},rr={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`,ExtraLarge:`xl`},ir={Never:`never`,Always:`always`,Small:`sm`,Medium:`md`,Large:`lg`},ar={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},or=e=>(...t)=>({_$litDirective$:e,values:t}),sr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},cr=or(class extends sr{constructor(e){if(super(e),e.type!==ar.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ut}}),lr=e=>e??Wt,ur=class extends V{constructor(){super(),this.as=`button`,this.variant=nr.Primary,this.size=rr.Medium,this.type=`button`,this.icon=!1,this.destructive=!1,this.disabled=!1,this.autofocus=!1,this.grow=ir.Never,this.handleClick=e=>{if(!this.disabled){let t=this.form?document.getElementById(this.form):null,n=this.internals?.form??t??this.getRootNode()?.host?.closest?.(`form`);if(n){if(this.type===`submit`){let t=null;this.name&&this.value!=null&&(t=document.createElement(`input`),t.type=`hidden`,t.name=this.name,t.value=this.value,t.setAttribute(`data-quantic-name-value-holder`,`1`),n.appendChild(t));try{n.requestSubmit(this.innerButton??void 0)}catch{n.requestSubmit()}finally{queueMicrotask(()=>t?.remove())}e.preventDefault()}else this.type===`reset`&&(n.reset(),e.preventDefault())}}},this.internals=this.attachInternals?.()??{form:null}}render(){let e=$n(this.as),t=this.as===`button`?void 0:this.as===`a`?`link`:`button`,n=this.as===`button`?this.type:void 0,r=cr({main:!0,[`size--${this.size}`]:!0,[`variant--${this.variant}`]:!0,icon:this.icon,destructive:this.destructive,[`grow--${this.grow}`]:!0});return this.as===`button`?tr`<button
          class=${r}
          tabindex=${this.disabled?-1:0}
          type=${n}
          ?disabled=${this.disabled}
          ?autofocus=${this.autofocus}
          form=${lr(this.form)}
          name=${lr(this.name)}
          value=${lr(this.value)}
          @click=${this.handleClick}
        >
          <slot></slot>
        </button>`:tr`
        <${e}
          class=${r}
          role="${t}"
          tabindex=${this.disabled?-1:0}
          aria-disabled=${this.disabled}
          href=${lr(this.href)}
          target=${lr(this.target)}
          download=${lr(this.download)}
        >
          <slot></slot>
        </${e}>`}};ur.meta={tag:`quantic-button`,description:`Clickable action trigger for form submission, primary CTAs, and secondary actions. Supports icon-only mode and polymorphic rendering as an <a> or <span>. Prefer over quantic-icon-label when the element needs to be interactive.`,category:`action`,slots:{"":{description:`Button label or icon content.`}},relatedTo:[`quantic-button-bar`,`quantic-icon-label`]},ur.formAssociated=!0,ur.styles=I`
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
  `,F([z({type:`"button" | "a" | "div" | "span"`,default:`button`,description:`Underlying HTML element. Use "a" for navigation, "button" (default) for actions.`})],ur.prototype,`as`,void 0),F([z({type:`ButtonVariant`,options:Object.values(nr),default:nr.Primary,reflect:!0,description:`Visual style. Use primary for the main CTA, secondary for paired actions, outline for neutral actions, ghost for inline or toolbar actions.`})],ur.prototype,`variant`,void 0),F([z({type:`ButtonSize`,options:Object.values(rr),default:rr.Medium,reflect:!0,description:`Controls padding and font size.`})],ur.prototype,`size`,void 0),F([z({type:`"button" | "submit" | "reset"`,default:`button`,reflect:!0,description:`Native button type for form association.`})],ur.prototype,`type`,void 0),F([z({type:`string`,reflect:!0,description:`ID of the associated <form> element.`})],ur.prototype,`form`,void 0),F([z({type:`string`,reflect:!0,description:`Name submitted with form data.`})],ur.prototype,`name`,void 0),F([z({type:`string`,reflect:!0,description:`Value submitted with form data.`})],ur.prototype,`value`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Square icon-only mode — equal padding on all sides, no text label.`})],ur.prototype,`icon`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Renders in error/danger colors. Use for irreversible actions such as delete or remove.`})],ur.prototype,`destructive`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction and reduces opacity.`})],ur.prototype,`disabled`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Automatically focuses the button on page load.`})],ur.prototype,`autofocus`,void 0),F([z({type:`ButtonGrow`,options:Object.values(ir),default:ir.Never,reflect:!0,description:`Responsive full-width behaviour. "always" is always full-width; "sm", "md", "lg" expand at those container-query thresholds.`})],ur.prototype,`grow`,void 0),F([z({type:`string`,reflect:!0,description:`URL for anchor rendering (as="a" only).`})],ur.prototype,`href`,void 0),F([z({type:`string`,reflect:!0,description:`Link target for anchor rendering (as="a" only).`})],ur.prototype,`target`,void 0),F([z({type:`string`,reflect:!0,description:`Filename hint for download links (as="a" only).`})],ur.prototype,`download`,void 0),F([hn(`button`)],ur.prototype,`innerButton`,void 0),ur=F([H(`quantic-button`)],ur);var dr={ApptainerOutline:`apptainer.outline`,ApptainerSolid:`apptainer.solid`,AscenderOutline:`ascender.outline`,AscenderSolid:`ascender.solid`,CIQBridgeOutline:`ciq-bridge.outline`,CIQBridgeSolid:`ciq-bridge.solid`,FuzzballOutline:`fuzzball.outline`,FuzzballSolid:`fuzzball.solid`,RLCHardenedOutline:`rlc-hardened.outline`,RLCHardenedSolid:`rlc-hardened.solid`,RLCPlusOutline:`rlc-plus.outline`,RLCPlusSolid:`rlc-plus.solid`,RLCProAIOutline:`rlc-pro-ai.outline`,RLCProAISolid:`rlc-pro-ai.solid`,RLCProHardenedOutline:`rlc-pro-hardened.outline`,RLCProHardenedSolid:`rlc-pro-hardened.solid`,RLCProOutline:`rlc-pro.outline`,RLCProSolid:`rlc-pro.solid`,RockyLinuxOutline:`rocky-linux.outline`,RockyLinuxSolid:`rocky-linux.solid`,StratumOutline:`stratum.outline`,StratumSolid:`stratum.solid`,SupportOutline:`support.outline`,SupportSolid:`support.solid`,WarewulfOutline:`warewulf.outline`,WarewulfSolid:`warewulf.solid`},fr={AArrowDown:`AArrowDown`,AArrowUp:`AArrowUp`,ALargeSmall:`ALargeSmall`,Accessibility:`Accessibility`,Activity:`Activity`,AirVent:`AirVent`,Airplay:`Airplay`,AlarmClock:`AlarmClock`,AlarmClockCheck:`AlarmClockCheck`,AlarmClockMinus:`AlarmClockMinus`,AlarmClockOff:`AlarmClockOff`,AlarmClockPlus:`AlarmClockPlus`,AlarmSmoke:`AlarmSmoke`,Album:`Album`,AlignCenter:`AlignCenter`,AlignCenterHorizontal:`AlignCenterHorizontal`,AlignCenterVertical:`AlignCenterVertical`,AlignEndHorizontal:`AlignEndHorizontal`,AlignEndVertical:`AlignEndVertical`,AlignHorizontalDistributeCenter:`AlignHorizontalDistributeCenter`,AlignHorizontalDistributeEnd:`AlignHorizontalDistributeEnd`,AlignHorizontalDistributeStart:`AlignHorizontalDistributeStart`,AlignHorizontalJustifyCenter:`AlignHorizontalJustifyCenter`,AlignHorizontalJustifyEnd:`AlignHorizontalJustifyEnd`,AlignHorizontalJustifyStart:`AlignHorizontalJustifyStart`,AlignHorizontalSpaceAround:`AlignHorizontalSpaceAround`,AlignHorizontalSpaceBetween:`AlignHorizontalSpaceBetween`,AlignJustify:`AlignJustify`,AlignLeft:`AlignLeft`,AlignRight:`AlignRight`,AlignStartHorizontal:`AlignStartHorizontal`,AlignStartVertical:`AlignStartVertical`,AlignVerticalDistributeCenter:`AlignVerticalDistributeCenter`,AlignVerticalDistributeEnd:`AlignVerticalDistributeEnd`,AlignVerticalDistributeStart:`AlignVerticalDistributeStart`,AlignVerticalJustifyCenter:`AlignVerticalJustifyCenter`,AlignVerticalJustifyEnd:`AlignVerticalJustifyEnd`,AlignVerticalJustifyStart:`AlignVerticalJustifyStart`,AlignVerticalSpaceAround:`AlignVerticalSpaceAround`,AlignVerticalSpaceBetween:`AlignVerticalSpaceBetween`,Ambulance:`Ambulance`,Ampersand:`Ampersand`,Ampersands:`Ampersands`,Amphora:`Amphora`,Anchor:`Anchor`,Angry:`Angry`,Annoyed:`Annoyed`,Antenna:`Antenna`,Anvil:`Anvil`,Aperture:`Aperture`,AppWindow:`AppWindow`,AppWindowMac:`AppWindowMac`,Apple:`Apple`,Archive:`Archive`,ArchiveRestore:`ArchiveRestore`,ArchiveX:`ArchiveX`,Armchair:`Armchair`,ArrowBigDown:`ArrowBigDown`,ArrowBigDownDash:`ArrowBigDownDash`,ArrowBigLeft:`ArrowBigLeft`,ArrowBigLeftDash:`ArrowBigLeftDash`,ArrowBigRight:`ArrowBigRight`,ArrowBigRightDash:`ArrowBigRightDash`,ArrowBigUp:`ArrowBigUp`,ArrowBigUpDash:`ArrowBigUpDash`,ArrowDown:`ArrowDown`,ArrowDown01:`ArrowDown01`,ArrowDown10:`ArrowDown10`,ArrowDownAZ:`ArrowDownAZ`,ArrowDownFromLine:`ArrowDownFromLine`,ArrowDownLeft:`ArrowDownLeft`,ArrowDownNarrowWide:`ArrowDownNarrowWide`,ArrowDownRight:`ArrowDownRight`,ArrowDownToDot:`ArrowDownToDot`,ArrowDownToLine:`ArrowDownToLine`,ArrowDownUp:`ArrowDownUp`,ArrowDownWideNarrow:`ArrowDownWideNarrow`,ArrowDownZA:`ArrowDownZA`,ArrowLeft:`ArrowLeft`,ArrowLeftFromLine:`ArrowLeftFromLine`,ArrowLeftRight:`ArrowLeftRight`,ArrowLeftToLine:`ArrowLeftToLine`,ArrowRight:`ArrowRight`,ArrowRightFromLine:`ArrowRightFromLine`,ArrowRightLeft:`ArrowRightLeft`,ArrowRightToLine:`ArrowRightToLine`,ArrowUp:`ArrowUp`,ArrowUp01:`ArrowUp01`,ArrowUp10:`ArrowUp10`,ArrowUpAZ:`ArrowUpAZ`,ArrowUpDown:`ArrowUpDown`,ArrowUpFromDot:`ArrowUpFromDot`,ArrowUpFromLine:`ArrowUpFromLine`,ArrowUpLeft:`ArrowUpLeft`,ArrowUpNarrowWide:`ArrowUpNarrowWide`,ArrowUpRight:`ArrowUpRight`,ArrowUpToLine:`ArrowUpToLine`,ArrowUpWideNarrow:`ArrowUpWideNarrow`,ArrowUpZA:`ArrowUpZA`,ArrowsUpFromLine:`ArrowsUpFromLine`,Asterisk:`Asterisk`,AtSign:`AtSign`,Atom:`Atom`,AudioLines:`AudioLines`,AudioWaveform:`AudioWaveform`,Award:`Award`,Axe:`Axe`,Axis3d:`Axis3d`,Baby:`Baby`,Backpack:`Backpack`,Badge:`Badge`,BadgeAlert:`BadgeAlert`,BadgeCent:`BadgeCent`,BadgeCheck:`BadgeCheck`,BadgeDollarSign:`BadgeDollarSign`,BadgeEuro:`BadgeEuro`,BadgeHelp:`BadgeHelp`,BadgeIndianRupee:`BadgeIndianRupee`,BadgeInfo:`BadgeInfo`,BadgeJapaneseYen:`BadgeJapaneseYen`,BadgeMinus:`BadgeMinus`,BadgePercent:`BadgePercent`,BadgePlus:`BadgePlus`,BadgePoundSterling:`BadgePoundSterling`,BadgeRussianRuble:`BadgeRussianRuble`,BadgeSwissFranc:`BadgeSwissFranc`,BadgeX:`BadgeX`,BaggageClaim:`BaggageClaim`,Ban:`Ban`,Banana:`Banana`,Bandage:`Bandage`,Banknote:`Banknote`,BanknoteArrowDown:`BanknoteArrowDown`,BanknoteArrowUp:`BanknoteArrowUp`,BanknoteX:`BanknoteX`,Barcode:`Barcode`,Baseline:`Baseline`,Bath:`Bath`,Battery:`Battery`,BatteryCharging:`BatteryCharging`,BatteryFull:`BatteryFull`,BatteryLow:`BatteryLow`,BatteryMedium:`BatteryMedium`,BatteryPlus:`BatteryPlus`,BatteryWarning:`BatteryWarning`,Beaker:`Beaker`,Bean:`Bean`,BeanOff:`BeanOff`,Bed:`Bed`,BedDouble:`BedDouble`,BedSingle:`BedSingle`,Beef:`Beef`,Beer:`Beer`,BeerOff:`BeerOff`,Bell:`Bell`,BellDot:`BellDot`,BellElectric:`BellElectric`,BellMinus:`BellMinus`,BellOff:`BellOff`,BellPlus:`BellPlus`,BellRing:`BellRing`,BetweenHorizontalEnd:`BetweenHorizontalEnd`,BetweenHorizontalStart:`BetweenHorizontalStart`,BetweenVerticalEnd:`BetweenVerticalEnd`,BetweenVerticalStart:`BetweenVerticalStart`,BicepsFlexed:`BicepsFlexed`,Bike:`Bike`,Binary:`Binary`,Binoculars:`Binoculars`,Biohazard:`Biohazard`,Bird:`Bird`,Bitcoin:`Bitcoin`,Blend:`Blend`,Blinds:`Blinds`,Blocks:`Blocks`,Bluetooth:`Bluetooth`,BluetoothConnected:`BluetoothConnected`,BluetoothOff:`BluetoothOff`,BluetoothSearching:`BluetoothSearching`,Bold:`Bold`,Bolt:`Bolt`,Bomb:`Bomb`,Bone:`Bone`,Book:`Book`,BookA:`BookA`,BookAudio:`BookAudio`,BookCheck:`BookCheck`,BookCopy:`BookCopy`,BookDashed:`BookDashed`,BookDown:`BookDown`,BookHeadphones:`BookHeadphones`,BookHeart:`BookHeart`,BookImage:`BookImage`,BookKey:`BookKey`,BookLock:`BookLock`,BookMarked:`BookMarked`,BookMinus:`BookMinus`,BookOpen:`BookOpen`,BookOpenCheck:`BookOpenCheck`,BookOpenText:`BookOpenText`,BookPlus:`BookPlus`,BookText:`BookText`,BookType:`BookType`,BookUp:`BookUp`,BookUp2:`BookUp2`,BookUser:`BookUser`,BookX:`BookX`,Bookmark:`Bookmark`,BookmarkCheck:`BookmarkCheck`,BookmarkMinus:`BookmarkMinus`,BookmarkPlus:`BookmarkPlus`,BookmarkX:`BookmarkX`,BoomBox:`BoomBox`,Bot:`Bot`,BotMessageSquare:`BotMessageSquare`,BotOff:`BotOff`,BowArrow:`BowArrow`,Box:`Box`,Boxes:`Boxes`,Braces:`Braces`,Brackets:`Brackets`,Brain:`Brain`,BrainCircuit:`BrainCircuit`,BrainCog:`BrainCog`,BrickWall:`BrickWall`,BrickWallFire:`BrickWallFire`,Briefcase:`Briefcase`,BriefcaseBusiness:`BriefcaseBusiness`,BriefcaseConveyorBelt:`BriefcaseConveyorBelt`,BriefcaseMedical:`BriefcaseMedical`,BringToFront:`BringToFront`,Brush:`Brush`,BrushCleaning:`BrushCleaning`,Bubbles:`Bubbles`,Bug:`Bug`,BugOff:`BugOff`,BugPlay:`BugPlay`,Building:`Building`,Building2:`Building2`,Bus:`Bus`,BusFront:`BusFront`,Cable:`Cable`,CableCar:`CableCar`,Cake:`Cake`,CakeSlice:`CakeSlice`,Calculator:`Calculator`,Calendar:`Calendar`,Calendar1:`Calendar1`,CalendarArrowDown:`CalendarArrowDown`,CalendarArrowUp:`CalendarArrowUp`,CalendarCheck:`CalendarCheck`,CalendarCheck2:`CalendarCheck2`,CalendarClock:`CalendarClock`,CalendarCog:`CalendarCog`,CalendarDays:`CalendarDays`,CalendarFold:`CalendarFold`,CalendarHeart:`CalendarHeart`,CalendarMinus:`CalendarMinus`,CalendarMinus2:`CalendarMinus2`,CalendarOff:`CalendarOff`,CalendarPlus:`CalendarPlus`,CalendarPlus2:`CalendarPlus2`,CalendarRange:`CalendarRange`,CalendarSearch:`CalendarSearch`,CalendarSync:`CalendarSync`,CalendarX:`CalendarX`,CalendarX2:`CalendarX2`,Camera:`Camera`,CameraOff:`CameraOff`,Candy:`Candy`,CandyCane:`CandyCane`,CandyOff:`CandyOff`,Cannabis:`Cannabis`,Captions:`Captions`,CaptionsOff:`CaptionsOff`,Car:`Car`,CarFront:`CarFront`,CarTaxiFront:`CarTaxiFront`,Caravan:`Caravan`,Carrot:`Carrot`,CaseLower:`CaseLower`,CaseSensitive:`CaseSensitive`,CaseUpper:`CaseUpper`,CassetteTape:`CassetteTape`,Cast:`Cast`,Castle:`Castle`,Cat:`Cat`,Cctv:`Cctv`,ChartArea:`ChartArea`,ChartBar:`ChartBar`,ChartBarBig:`ChartBarBig`,ChartBarDecreasing:`ChartBarDecreasing`,ChartBarIncreasing:`ChartBarIncreasing`,ChartBarStacked:`ChartBarStacked`,ChartCandlestick:`ChartCandlestick`,ChartColumn:`ChartColumn`,ChartColumnBig:`ChartColumnBig`,ChartColumnDecreasing:`ChartColumnDecreasing`,ChartColumnIncreasing:`ChartColumnIncreasing`,ChartColumnStacked:`ChartColumnStacked`,ChartGantt:`ChartGantt`,ChartLine:`ChartLine`,ChartNetwork:`ChartNetwork`,ChartNoAxesColumn:`ChartNoAxesColumn`,ChartNoAxesColumnDecreasing:`ChartNoAxesColumnDecreasing`,ChartNoAxesColumnIncreasing:`ChartNoAxesColumnIncreasing`,ChartNoAxesCombined:`ChartNoAxesCombined`,ChartNoAxesGantt:`ChartNoAxesGantt`,ChartPie:`ChartPie`,ChartScatter:`ChartScatter`,ChartSpline:`ChartSpline`,Check:`Check`,CheckCheck:`CheckCheck`,CheckLine:`CheckLine`,ChefHat:`ChefHat`,Cherry:`Cherry`,ChevronDown:`ChevronDown`,ChevronFirst:`ChevronFirst`,ChevronLast:`ChevronLast`,ChevronLeft:`ChevronLeft`,ChevronRight:`ChevronRight`,ChevronUp:`ChevronUp`,ChevronsDown:`ChevronsDown`,ChevronsDownUp:`ChevronsDownUp`,ChevronsLeft:`ChevronsLeft`,ChevronsLeftRight:`ChevronsLeftRight`,ChevronsLeftRightEllipsis:`ChevronsLeftRightEllipsis`,ChevronsRight:`ChevronsRight`,ChevronsRightLeft:`ChevronsRightLeft`,ChevronsUp:`ChevronsUp`,ChevronsUpDown:`ChevronsUpDown`,Chrome:`Chrome`,Church:`Church`,Cigarette:`Cigarette`,CigaretteOff:`CigaretteOff`,Circle:`Circle`,CircleAlert:`CircleAlert`,CircleArrowDown:`CircleArrowDown`,CircleArrowLeft:`CircleArrowLeft`,CircleArrowOutDownLeft:`CircleArrowOutDownLeft`,CircleArrowOutDownRight:`CircleArrowOutDownRight`,CircleArrowOutUpLeft:`CircleArrowOutUpLeft`,CircleArrowOutUpRight:`CircleArrowOutUpRight`,CircleArrowRight:`CircleArrowRight`,CircleArrowUp:`CircleArrowUp`,CircleCheck:`CircleCheck`,CircleCheckBig:`CircleCheckBig`,CircleChevronDown:`CircleChevronDown`,CircleChevronLeft:`CircleChevronLeft`,CircleChevronRight:`CircleChevronRight`,CircleChevronUp:`CircleChevronUp`,CircleDashed:`CircleDashed`,CircleDivide:`CircleDivide`,CircleDollarSign:`CircleDollarSign`,CircleDot:`CircleDot`,CircleDotDashed:`CircleDotDashed`,CircleEllipsis:`CircleEllipsis`,CircleEqual:`CircleEqual`,CircleFadingArrowUp:`CircleFadingArrowUp`,CircleFadingPlus:`CircleFadingPlus`,CircleGauge:`CircleGauge`,CircleHelp:`CircleHelp`,CircleMinus:`CircleMinus`,CircleOff:`CircleOff`,CircleParking:`CircleParking`,CircleParkingOff:`CircleParkingOff`,CirclePause:`CirclePause`,CirclePercent:`CirclePercent`,CirclePlay:`CirclePlay`,CirclePlus:`CirclePlus`,CirclePower:`CirclePower`,CircleSlash:`CircleSlash`,CircleSlash2:`CircleSlash2`,CircleSmall:`CircleSmall`,CircleStop:`CircleStop`,CircleUser:`CircleUser`,CircleUserRound:`CircleUserRound`,CircleX:`CircleX`,CircuitBoard:`CircuitBoard`,Citrus:`Citrus`,Clapperboard:`Clapperboard`,Clipboard:`Clipboard`,ClipboardCheck:`ClipboardCheck`,ClipboardCopy:`ClipboardCopy`,ClipboardList:`ClipboardList`,ClipboardMinus:`ClipboardMinus`,ClipboardPaste:`ClipboardPaste`,ClipboardPen:`ClipboardPen`,ClipboardPenLine:`ClipboardPenLine`,ClipboardPlus:`ClipboardPlus`,ClipboardType:`ClipboardType`,ClipboardX:`ClipboardX`,Clock:`Clock`,Clock1:`Clock1`,Clock10:`Clock10`,Clock11:`Clock11`,Clock12:`Clock12`,Clock2:`Clock2`,Clock3:`Clock3`,Clock4:`Clock4`,Clock5:`Clock5`,Clock6:`Clock6`,Clock7:`Clock7`,Clock8:`Clock8`,Clock9:`Clock9`,ClockAlert:`ClockAlert`,ClockArrowDown:`ClockArrowDown`,ClockArrowUp:`ClockArrowUp`,ClockFading:`ClockFading`,ClockPlus:`ClockPlus`,Cloud:`Cloud`,CloudAlert:`CloudAlert`,CloudCog:`CloudCog`,CloudDownload:`CloudDownload`,CloudDrizzle:`CloudDrizzle`,CloudFog:`CloudFog`,CloudHail:`CloudHail`,CloudLightning:`CloudLightning`,CloudMoon:`CloudMoon`,CloudMoonRain:`CloudMoonRain`,CloudOff:`CloudOff`,CloudRain:`CloudRain`,CloudRainWind:`CloudRainWind`,CloudSnow:`CloudSnow`,CloudSun:`CloudSun`,CloudSunRain:`CloudSunRain`,CloudUpload:`CloudUpload`,Cloudy:`Cloudy`,Clover:`Clover`,Club:`Club`,Code:`Code`,CodeXml:`CodeXml`,Codepen:`Codepen`,Codesandbox:`Codesandbox`,Coffee:`Coffee`,Cog:`Cog`,Coins:`Coins`,Columns2:`Columns2`,Columns3:`Columns3`,Columns3Cog:`Columns3Cog`,Columns4:`Columns4`,Combine:`Combine`,Command:`Command`,Compass:`Compass`,Component:`Component`,Computer:`Computer`,ConciergeBell:`ConciergeBell`,Cone:`Cone`,Construction:`Construction`,Contact:`Contact`,ContactRound:`ContactRound`,Container:`Container`,Contrast:`Contrast`,Cookie:`Cookie`,CookingPot:`CookingPot`,Copy:`Copy`,CopyCheck:`CopyCheck`,CopyMinus:`CopyMinus`,CopyPlus:`CopyPlus`,CopySlash:`CopySlash`,CopyX:`CopyX`,Copyleft:`Copyleft`,Copyright:`Copyright`,CornerDownLeft:`CornerDownLeft`,CornerDownRight:`CornerDownRight`,CornerLeftDown:`CornerLeftDown`,CornerLeftUp:`CornerLeftUp`,CornerRightDown:`CornerRightDown`,CornerRightUp:`CornerRightUp`,CornerUpLeft:`CornerUpLeft`,CornerUpRight:`CornerUpRight`,Cpu:`Cpu`,CreativeCommons:`CreativeCommons`,CreditCard:`CreditCard`,Croissant:`Croissant`,Crop:`Crop`,Cross:`Cross`,Crosshair:`Crosshair`,Crown:`Crown`,Cuboid:`Cuboid`,CupSoda:`CupSoda`,Currency:`Currency`,Cylinder:`Cylinder`,Dam:`Dam`,Database:`Database`,DatabaseBackup:`DatabaseBackup`,DatabaseZap:`DatabaseZap`,DecimalsArrowLeft:`DecimalsArrowLeft`,DecimalsArrowRight:`DecimalsArrowRight`,Delete:`Delete`,Dessert:`Dessert`,Diameter:`Diameter`,Diamond:`Diamond`,DiamondMinus:`DiamondMinus`,DiamondPercent:`DiamondPercent`,DiamondPlus:`DiamondPlus`,Dice1:`Dice1`,Dice2:`Dice2`,Dice3:`Dice3`,Dice4:`Dice4`,Dice5:`Dice5`,Dice6:`Dice6`,Dices:`Dices`,Diff:`Diff`,Disc:`Disc`,Disc2:`Disc2`,Disc3:`Disc3`,DiscAlbum:`DiscAlbum`,Divide:`Divide`,Dna:`Dna`,DnaOff:`DnaOff`,Dock:`Dock`,Dog:`Dog`,DollarSign:`DollarSign`,Donut:`Donut`,DoorClosed:`DoorClosed`,DoorClosedLocked:`DoorClosedLocked`,DoorOpen:`DoorOpen`,Dot:`Dot`,Download:`Download`,DraftingCompass:`DraftingCompass`,Drama:`Drama`,Dribbble:`Dribbble`,Drill:`Drill`,Droplet:`Droplet`,DropletOff:`DropletOff`,Droplets:`Droplets`,Drum:`Drum`,Drumstick:`Drumstick`,Dumbbell:`Dumbbell`,Ear:`Ear`,EarOff:`EarOff`,Earth:`Earth`,EarthLock:`EarthLock`,Eclipse:`Eclipse`,Egg:`Egg`,EggFried:`EggFried`,EggOff:`EggOff`,Ellipsis:`Ellipsis`,EllipsisVertical:`EllipsisVertical`,Equal:`Equal`,EqualApproximately:`EqualApproximately`,EqualNot:`EqualNot`,Eraser:`Eraser`,EthernetPort:`EthernetPort`,Euro:`Euro`,Expand:`Expand`,ExternalLink:`ExternalLink`,Eye:`Eye`,EyeClosed:`EyeClosed`,EyeOff:`EyeOff`,Facebook:`Facebook`,Factory:`Factory`,Fan:`Fan`,FastForward:`FastForward`,Feather:`Feather`,Fence:`Fence`,FerrisWheel:`FerrisWheel`,Figma:`Figma`,File:`File`,FileArchive:`FileArchive`,FileAudio:`FileAudio`,FileAudio2:`FileAudio2`,FileAxis3d:`FileAxis3d`,FileBadge:`FileBadge`,FileBadge2:`FileBadge2`,FileBox:`FileBox`,FileChartColumn:`FileChartColumn`,FileChartColumnIncreasing:`FileChartColumnIncreasing`,FileChartLine:`FileChartLine`,FileChartPie:`FileChartPie`,FileCheck:`FileCheck`,FileCheck2:`FileCheck2`,FileClock:`FileClock`,FileCode:`FileCode`,FileCode2:`FileCode2`,FileCog:`FileCog`,FileDiff:`FileDiff`,FileDigit:`FileDigit`,FileDown:`FileDown`,FileHeart:`FileHeart`,FileImage:`FileImage`,FileInput:`FileInput`,FileJson:`FileJson`,FileJson2:`FileJson2`,FileKey:`FileKey`,FileKey2:`FileKey2`,FileLock:`FileLock`,FileLock2:`FileLock2`,FileMinus:`FileMinus`,FileMinus2:`FileMinus2`,FileMusic:`FileMusic`,FileOutput:`FileOutput`,FilePen:`FilePen`,FilePenLine:`FilePenLine`,FilePlus:`FilePlus`,FilePlus2:`FilePlus2`,FileQuestion:`FileQuestion`,FileScan:`FileScan`,FileSearch:`FileSearch`,FileSearch2:`FileSearch2`,FileSliders:`FileSliders`,FileSpreadsheet:`FileSpreadsheet`,FileStack:`FileStack`,FileSymlink:`FileSymlink`,FileTerminal:`FileTerminal`,FileText:`FileText`,FileType:`FileType`,FileType2:`FileType2`,FileUp:`FileUp`,FileUser:`FileUser`,FileVideo:`FileVideo`,FileVideo2:`FileVideo2`,FileVolume:`FileVolume`,FileVolume2:`FileVolume2`,FileWarning:`FileWarning`,FileX:`FileX`,FileX2:`FileX2`,Files:`Files`,Film:`Film`,Fingerprint:`Fingerprint`,FireExtinguisher:`FireExtinguisher`,Fish:`Fish`,FishOff:`FishOff`,FishSymbol:`FishSymbol`,Flag:`Flag`,FlagOff:`FlagOff`,FlagTriangleLeft:`FlagTriangleLeft`,FlagTriangleRight:`FlagTriangleRight`,Flame:`Flame`,FlameKindling:`FlameKindling`,Flashlight:`Flashlight`,FlashlightOff:`FlashlightOff`,FlaskConical:`FlaskConical`,FlaskConicalOff:`FlaskConicalOff`,FlaskRound:`FlaskRound`,FlipHorizontal:`FlipHorizontal`,FlipHorizontal2:`FlipHorizontal2`,FlipVertical:`FlipVertical`,FlipVertical2:`FlipVertical2`,Flower:`Flower`,Flower2:`Flower2`,Focus:`Focus`,FoldHorizontal:`FoldHorizontal`,FoldVertical:`FoldVertical`,Folder:`Folder`,FolderArchive:`FolderArchive`,FolderCheck:`FolderCheck`,FolderClock:`FolderClock`,FolderClosed:`FolderClosed`,FolderCode:`FolderCode`,FolderCog:`FolderCog`,FolderDot:`FolderDot`,FolderDown:`FolderDown`,FolderGit:`FolderGit`,FolderGit2:`FolderGit2`,FolderHeart:`FolderHeart`,FolderInput:`FolderInput`,FolderKanban:`FolderKanban`,FolderKey:`FolderKey`,FolderLock:`FolderLock`,FolderMinus:`FolderMinus`,FolderOpen:`FolderOpen`,FolderOpenDot:`FolderOpenDot`,FolderOutput:`FolderOutput`,FolderPen:`FolderPen`,FolderPlus:`FolderPlus`,FolderRoot:`FolderRoot`,FolderSearch:`FolderSearch`,FolderSearch2:`FolderSearch2`,FolderSymlink:`FolderSymlink`,FolderSync:`FolderSync`,FolderTree:`FolderTree`,FolderUp:`FolderUp`,FolderX:`FolderX`,Folders:`Folders`,Footprints:`Footprints`,Forklift:`Forklift`,Forward:`Forward`,Frame:`Frame`,Framer:`Framer`,Frown:`Frown`,Fuel:`Fuel`,Fullscreen:`Fullscreen`,Funnel:`Funnel`,FunnelPlus:`FunnelPlus`,FunnelX:`FunnelX`,GalleryHorizontal:`GalleryHorizontal`,GalleryHorizontalEnd:`GalleryHorizontalEnd`,GalleryThumbnails:`GalleryThumbnails`,GalleryVertical:`GalleryVertical`,GalleryVerticalEnd:`GalleryVerticalEnd`,Gamepad:`Gamepad`,Gamepad2:`Gamepad2`,Gauge:`Gauge`,Gavel:`Gavel`,Gem:`Gem`,Ghost:`Ghost`,Gift:`Gift`,GitBranch:`GitBranch`,GitBranchPlus:`GitBranchPlus`,GitCommitHorizontal:`GitCommitHorizontal`,GitCommitVertical:`GitCommitVertical`,GitCompare:`GitCompare`,GitCompareArrows:`GitCompareArrows`,GitFork:`GitFork`,GitGraph:`GitGraph`,GitMerge:`GitMerge`,GitPullRequest:`GitPullRequest`,GitPullRequestArrow:`GitPullRequestArrow`,GitPullRequestClosed:`GitPullRequestClosed`,GitPullRequestCreate:`GitPullRequestCreate`,GitPullRequestCreateArrow:`GitPullRequestCreateArrow`,GitPullRequestDraft:`GitPullRequestDraft`,Github:`Github`,Gitlab:`Gitlab`,GlassWater:`GlassWater`,Glasses:`Glasses`,Globe:`Globe`,GlobeLock:`GlobeLock`,Goal:`Goal`,Gpu:`Gpu`,Grab:`Grab`,GraduationCap:`GraduationCap`,Grape:`Grape`,Grid2x2:`Grid2x2`,Grid2x2Check:`Grid2x2Check`,Grid2x2Plus:`Grid2x2Plus`,Grid2x2X:`Grid2x2X`,Grid3x3:`Grid3x3`,Grip:`Grip`,GripHorizontal:`GripHorizontal`,GripVertical:`GripVertical`,Group:`Group`,Guitar:`Guitar`,Ham:`Ham`,Hamburger:`Hamburger`,Hammer:`Hammer`,Hand:`Hand`,HandCoins:`HandCoins`,HandHeart:`HandHeart`,HandHelping:`HandHelping`,HandMetal:`HandMetal`,HandPlatter:`HandPlatter`,Handshake:`Handshake`,HardDrive:`HardDrive`,HardDriveDownload:`HardDriveDownload`,HardDriveUpload:`HardDriveUpload`,HardHat:`HardHat`,Hash:`Hash`,Haze:`Haze`,HdmiPort:`HdmiPort`,Heading:`Heading`,Heading1:`Heading1`,Heading2:`Heading2`,Heading3:`Heading3`,Heading4:`Heading4`,Heading5:`Heading5`,Heading6:`Heading6`,HeadphoneOff:`HeadphoneOff`,Headphones:`Headphones`,Headset:`Headset`,Heart:`Heart`,HeartCrack:`HeartCrack`,HeartHandshake:`HeartHandshake`,HeartMinus:`HeartMinus`,HeartOff:`HeartOff`,HeartPlus:`HeartPlus`,HeartPulse:`HeartPulse`,Heater:`Heater`,Hexagon:`Hexagon`,Highlighter:`Highlighter`,History:`History`,Hop:`Hop`,HopOff:`HopOff`,Hospital:`Hospital`,Hotel:`Hotel`,Hourglass:`Hourglass`,House:`House`,HousePlug:`HousePlug`,HousePlus:`HousePlus`,HouseWifi:`HouseWifi`,IceCreamBowl:`IceCreamBowl`,IceCreamCone:`IceCreamCone`,IdCard:`IdCard`,Image:`Image`,ImageDown:`ImageDown`,ImageMinus:`ImageMinus`,ImageOff:`ImageOff`,ImagePlay:`ImagePlay`,ImagePlus:`ImagePlus`,ImageUp:`ImageUp`,ImageUpscale:`ImageUpscale`,Images:`Images`,Import:`Import`,Inbox:`Inbox`,IndentDecrease:`IndentDecrease`,IndentIncrease:`IndentIncrease`,IndianRupee:`IndianRupee`,Infinity:`Infinity`,Info:`Info`,InspectionPanel:`InspectionPanel`,Instagram:`Instagram`,Italic:`Italic`,IterationCcw:`IterationCcw`,IterationCw:`IterationCw`,JapaneseYen:`JapaneseYen`,Joystick:`Joystick`,Kanban:`Kanban`,Key:`Key`,KeyRound:`KeyRound`,KeySquare:`KeySquare`,Keyboard:`Keyboard`,KeyboardMusic:`KeyboardMusic`,KeyboardOff:`KeyboardOff`,Lamp:`Lamp`,LampCeiling:`LampCeiling`,LampDesk:`LampDesk`,LampFloor:`LampFloor`,LampWallDown:`LampWallDown`,LampWallUp:`LampWallUp`,LandPlot:`LandPlot`,Landmark:`Landmark`,Languages:`Languages`,Laptop:`Laptop`,LaptopMinimal:`LaptopMinimal`,LaptopMinimalCheck:`LaptopMinimalCheck`,Lasso:`Lasso`,LassoSelect:`LassoSelect`,Laugh:`Laugh`,Layers:`Layers`,Layers2:`Layers2`,LayoutDashboard:`LayoutDashboard`,LayoutGrid:`LayoutGrid`,LayoutList:`LayoutList`,LayoutPanelLeft:`LayoutPanelLeft`,LayoutPanelTop:`LayoutPanelTop`,LayoutTemplate:`LayoutTemplate`,Leaf:`Leaf`,LeafyGreen:`LeafyGreen`,Lectern:`Lectern`,LetterText:`LetterText`,Library:`Library`,LibraryBig:`LibraryBig`,LifeBuoy:`LifeBuoy`,Ligature:`Ligature`,Lightbulb:`Lightbulb`,LightbulbOff:`LightbulbOff`,Link:`Link`,Link2:`Link2`,Link2Off:`Link2Off`,Linkedin:`Linkedin`,List:`List`,ListCheck:`ListCheck`,ListChecks:`ListChecks`,ListCollapse:`ListCollapse`,ListEnd:`ListEnd`,ListFilter:`ListFilter`,ListFilterPlus:`ListFilterPlus`,ListMinus:`ListMinus`,ListMusic:`ListMusic`,ListOrdered:`ListOrdered`,ListPlus:`ListPlus`,ListRestart:`ListRestart`,ListStart:`ListStart`,ListTodo:`ListTodo`,ListTree:`ListTree`,ListVideo:`ListVideo`,ListX:`ListX`,Loader:`Loader`,LoaderCircle:`LoaderCircle`,LoaderPinwheel:`LoaderPinwheel`,Locate:`Locate`,LocateFixed:`LocateFixed`,LocateOff:`LocateOff`,LocationEdit:`LocationEdit`,Lock:`Lock`,LockKeyhole:`LockKeyhole`,LockKeyholeOpen:`LockKeyholeOpen`,LockOpen:`LockOpen`,LogIn:`LogIn`,LogOut:`LogOut`,Logs:`Logs`,Lollipop:`Lollipop`,Luggage:`Luggage`,Magnet:`Magnet`,Mail:`Mail`,MailCheck:`MailCheck`,MailMinus:`MailMinus`,MailOpen:`MailOpen`,MailPlus:`MailPlus`,MailQuestion:`MailQuestion`,MailSearch:`MailSearch`,MailWarning:`MailWarning`,MailX:`MailX`,Mailbox:`Mailbox`,Mails:`Mails`,Map:`Map`,MapPin:`MapPin`,MapPinCheck:`MapPinCheck`,MapPinCheckInside:`MapPinCheckInside`,MapPinHouse:`MapPinHouse`,MapPinMinus:`MapPinMinus`,MapPinMinusInside:`MapPinMinusInside`,MapPinOff:`MapPinOff`,MapPinPlus:`MapPinPlus`,MapPinPlusInside:`MapPinPlusInside`,MapPinX:`MapPinX`,MapPinXInside:`MapPinXInside`,MapPinned:`MapPinned`,MapPlus:`MapPlus`,Mars:`Mars`,MarsStroke:`MarsStroke`,Martini:`Martini`,Maximize:`Maximize`,Maximize2:`Maximize2`,Medal:`Medal`,Megaphone:`Megaphone`,MegaphoneOff:`MegaphoneOff`,Meh:`Meh`,MemoryStick:`MemoryStick`,Menu:`Menu`,Merge:`Merge`,MessageCircle:`MessageCircle`,MessageCircleCode:`MessageCircleCode`,MessageCircleDashed:`MessageCircleDashed`,MessageCircleHeart:`MessageCircleHeart`,MessageCircleMore:`MessageCircleMore`,MessageCircleOff:`MessageCircleOff`,MessageCirclePlus:`MessageCirclePlus`,MessageCircleQuestion:`MessageCircleQuestion`,MessageCircleReply:`MessageCircleReply`,MessageCircleWarning:`MessageCircleWarning`,MessageCircleX:`MessageCircleX`,MessageSquare:`MessageSquare`,MessageSquareCode:`MessageSquareCode`,MessageSquareDashed:`MessageSquareDashed`,MessageSquareDiff:`MessageSquareDiff`,MessageSquareDot:`MessageSquareDot`,MessageSquareHeart:`MessageSquareHeart`,MessageSquareLock:`MessageSquareLock`,MessageSquareMore:`MessageSquareMore`,MessageSquareOff:`MessageSquareOff`,MessageSquarePlus:`MessageSquarePlus`,MessageSquareQuote:`MessageSquareQuote`,MessageSquareReply:`MessageSquareReply`,MessageSquareShare:`MessageSquareShare`,MessageSquareText:`MessageSquareText`,MessageSquareWarning:`MessageSquareWarning`,MessageSquareX:`MessageSquareX`,MessagesSquare:`MessagesSquare`,Mic:`Mic`,MicOff:`MicOff`,MicVocal:`MicVocal`,Microchip:`Microchip`,Microscope:`Microscope`,Microwave:`Microwave`,Milestone:`Milestone`,Milk:`Milk`,MilkOff:`MilkOff`,Minimize:`Minimize`,Minimize2:`Minimize2`,Minus:`Minus`,Monitor:`Monitor`,MonitorCheck:`MonitorCheck`,MonitorCog:`MonitorCog`,MonitorDot:`MonitorDot`,MonitorDown:`MonitorDown`,MonitorOff:`MonitorOff`,MonitorPause:`MonitorPause`,MonitorPlay:`MonitorPlay`,MonitorSmartphone:`MonitorSmartphone`,MonitorSpeaker:`MonitorSpeaker`,MonitorStop:`MonitorStop`,MonitorUp:`MonitorUp`,MonitorX:`MonitorX`,Moon:`Moon`,MoonStar:`MoonStar`,Mountain:`Mountain`,MountainSnow:`MountainSnow`,Mouse:`Mouse`,MouseOff:`MouseOff`,MousePointer:`MousePointer`,MousePointer2:`MousePointer2`,MousePointerBan:`MousePointerBan`,MousePointerClick:`MousePointerClick`,Move:`Move`,Move3d:`Move3d`,MoveDiagonal:`MoveDiagonal`,MoveDiagonal2:`MoveDiagonal2`,MoveDown:`MoveDown`,MoveDownLeft:`MoveDownLeft`,MoveDownRight:`MoveDownRight`,MoveHorizontal:`MoveHorizontal`,MoveLeft:`MoveLeft`,MoveRight:`MoveRight`,MoveUp:`MoveUp`,MoveUpLeft:`MoveUpLeft`,MoveUpRight:`MoveUpRight`,MoveVertical:`MoveVertical`,Music:`Music`,Music2:`Music2`,Music3:`Music3`,Music4:`Music4`,Navigation:`Navigation`,Navigation2:`Navigation2`,Navigation2Off:`Navigation2Off`,NavigationOff:`NavigationOff`,Network:`Network`,Newspaper:`Newspaper`,Nfc:`Nfc`,NonBinary:`NonBinary`,Notebook:`Notebook`,NotebookPen:`NotebookPen`,NotebookTabs:`NotebookTabs`,NotebookText:`NotebookText`,NotepadText:`NotepadText`,NotepadTextDashed:`NotepadTextDashed`,Nut:`Nut`,NutOff:`NutOff`,Octagon:`Octagon`,OctagonAlert:`OctagonAlert`,OctagonMinus:`OctagonMinus`,OctagonPause:`OctagonPause`,OctagonX:`OctagonX`,Omega:`Omega`,Option:`Option`,Orbit:`Orbit`,Origami:`Origami`,Package:`Package`,Package2:`Package2`,PackageCheck:`PackageCheck`,PackageMinus:`PackageMinus`,PackageOpen:`PackageOpen`,PackagePlus:`PackagePlus`,PackageSearch:`PackageSearch`,PackageX:`PackageX`,PaintBucket:`PaintBucket`,PaintRoller:`PaintRoller`,Paintbrush:`Paintbrush`,PaintbrushVertical:`PaintbrushVertical`,Palette:`Palette`,Panda:`Panda`,PanelBottom:`PanelBottom`,PanelBottomClose:`PanelBottomClose`,PanelBottomDashed:`PanelBottomDashed`,PanelBottomOpen:`PanelBottomOpen`,PanelLeft:`PanelLeft`,PanelLeftClose:`PanelLeftClose`,PanelLeftDashed:`PanelLeftDashed`,PanelLeftOpen:`PanelLeftOpen`,PanelRight:`PanelRight`,PanelRightClose:`PanelRightClose`,PanelRightDashed:`PanelRightDashed`,PanelRightOpen:`PanelRightOpen`,PanelTop:`PanelTop`,PanelTopClose:`PanelTopClose`,PanelTopDashed:`PanelTopDashed`,PanelTopOpen:`PanelTopOpen`,PanelsLeftBottom:`PanelsLeftBottom`,PanelsRightBottom:`PanelsRightBottom`,PanelsTopLeft:`PanelsTopLeft`,Paperclip:`Paperclip`,Parentheses:`Parentheses`,ParkingMeter:`ParkingMeter`,PartyPopper:`PartyPopper`,Pause:`Pause`,PawPrint:`PawPrint`,PcCase:`PcCase`,Pen:`Pen`,PenLine:`PenLine`,PenOff:`PenOff`,PenTool:`PenTool`,Pencil:`Pencil`,PencilLine:`PencilLine`,PencilOff:`PencilOff`,PencilRuler:`PencilRuler`,Pentagon:`Pentagon`,Percent:`Percent`,PersonStanding:`PersonStanding`,PhilippinePeso:`PhilippinePeso`,Phone:`Phone`,PhoneCall:`PhoneCall`,PhoneForwarded:`PhoneForwarded`,PhoneIncoming:`PhoneIncoming`,PhoneMissed:`PhoneMissed`,PhoneOff:`PhoneOff`,PhoneOutgoing:`PhoneOutgoing`,Pi:`Pi`,Piano:`Piano`,Pickaxe:`Pickaxe`,PictureInPicture:`PictureInPicture`,PictureInPicture2:`PictureInPicture2`,PiggyBank:`PiggyBank`,Pilcrow:`Pilcrow`,PilcrowLeft:`PilcrowLeft`,PilcrowRight:`PilcrowRight`,Pill:`Pill`,PillBottle:`PillBottle`,Pin:`Pin`,PinOff:`PinOff`,Pipette:`Pipette`,Pizza:`Pizza`,Plane:`Plane`,PlaneLanding:`PlaneLanding`,PlaneTakeoff:`PlaneTakeoff`,Play:`Play`,Plug:`Plug`,Plug2:`Plug2`,PlugZap:`PlugZap`,Plus:`Plus`,Pocket:`Pocket`,PocketKnife:`PocketKnife`,Podcast:`Podcast`,Pointer:`Pointer`,PointerOff:`PointerOff`,Popcorn:`Popcorn`,Popsicle:`Popsicle`,PoundSterling:`PoundSterling`,Power:`Power`,PowerOff:`PowerOff`,Presentation:`Presentation`,Printer:`Printer`,PrinterCheck:`PrinterCheck`,Projector:`Projector`,Proportions:`Proportions`,Puzzle:`Puzzle`,Pyramid:`Pyramid`,QrCode:`QrCode`,Quote:`Quote`,Rabbit:`Rabbit`,Radar:`Radar`,Radiation:`Radiation`,Radical:`Radical`,Radio:`Radio`,RadioReceiver:`RadioReceiver`,RadioTower:`RadioTower`,Radius:`Radius`,RailSymbol:`RailSymbol`,Rainbow:`Rainbow`,Rat:`Rat`,Ratio:`Ratio`,Receipt:`Receipt`,ReceiptCent:`ReceiptCent`,ReceiptEuro:`ReceiptEuro`,ReceiptIndianRupee:`ReceiptIndianRupee`,ReceiptJapaneseYen:`ReceiptJapaneseYen`,ReceiptPoundSterling:`ReceiptPoundSterling`,ReceiptRussianRuble:`ReceiptRussianRuble`,ReceiptSwissFranc:`ReceiptSwissFranc`,ReceiptText:`ReceiptText`,RectangleEllipsis:`RectangleEllipsis`,RectangleGoggles:`RectangleGoggles`,RectangleHorizontal:`RectangleHorizontal`,RectangleVertical:`RectangleVertical`,Recycle:`Recycle`,Redo:`Redo`,Redo2:`Redo2`,RedoDot:`RedoDot`,RefreshCcw:`RefreshCcw`,RefreshCcwDot:`RefreshCcwDot`,RefreshCw:`RefreshCw`,RefreshCwOff:`RefreshCwOff`,Refrigerator:`Refrigerator`,Regex:`Regex`,RemoveFormatting:`RemoveFormatting`,Repeat:`Repeat`,Repeat1:`Repeat1`,Repeat2:`Repeat2`,Replace:`Replace`,ReplaceAll:`ReplaceAll`,Reply:`Reply`,ReplyAll:`ReplyAll`,Rewind:`Rewind`,Ribbon:`Ribbon`,Rocket:`Rocket`,RockingChair:`RockingChair`,RollerCoaster:`RollerCoaster`,Rotate3d:`Rotate3d`,RotateCcw:`RotateCcw`,RotateCcwKey:`RotateCcwKey`,RotateCcwSquare:`RotateCcwSquare`,RotateCw:`RotateCw`,RotateCwSquare:`RotateCwSquare`,Route:`Route`,RouteOff:`RouteOff`,Router:`Router`,Rows2:`Rows2`,Rows3:`Rows3`,Rows4:`Rows4`,Rss:`Rss`,Ruler:`Ruler`,RulerDimensionLine:`RulerDimensionLine`,RussianRuble:`RussianRuble`,Sailboat:`Sailboat`,Salad:`Salad`,Sandwich:`Sandwich`,Satellite:`Satellite`,SatelliteDish:`SatelliteDish`,SaudiRiyal:`SaudiRiyal`,Save:`Save`,SaveAll:`SaveAll`,SaveOff:`SaveOff`,Scale:`Scale`,Scale3d:`Scale3d`,Scaling:`Scaling`,Scan:`Scan`,ScanBarcode:`ScanBarcode`,ScanEye:`ScanEye`,ScanFace:`ScanFace`,ScanHeart:`ScanHeart`,ScanLine:`ScanLine`,ScanQrCode:`ScanQrCode`,ScanSearch:`ScanSearch`,ScanText:`ScanText`,School:`School`,Scissors:`Scissors`,ScissorsLineDashed:`ScissorsLineDashed`,ScreenShare:`ScreenShare`,ScreenShareOff:`ScreenShareOff`,Scroll:`Scroll`,ScrollText:`ScrollText`,Search:`Search`,SearchCheck:`SearchCheck`,SearchCode:`SearchCode`,SearchSlash:`SearchSlash`,SearchX:`SearchX`,Section:`Section`,Send:`Send`,SendHorizontal:`SendHorizontal`,SendToBack:`SendToBack`,SeparatorHorizontal:`SeparatorHorizontal`,SeparatorVertical:`SeparatorVertical`,Server:`Server`,ServerCog:`ServerCog`,ServerCrash:`ServerCrash`,ServerOff:`ServerOff`,Settings:`Settings`,Settings2:`Settings2`,Shapes:`Shapes`,Share:`Share`,Share2:`Share2`,Sheet:`Sheet`,Shell:`Shell`,Shield:`Shield`,ShieldAlert:`ShieldAlert`,ShieldBan:`ShieldBan`,ShieldCheck:`ShieldCheck`,ShieldEllipsis:`ShieldEllipsis`,ShieldHalf:`ShieldHalf`,ShieldMinus:`ShieldMinus`,ShieldOff:`ShieldOff`,ShieldPlus:`ShieldPlus`,ShieldQuestion:`ShieldQuestion`,ShieldUser:`ShieldUser`,ShieldX:`ShieldX`,Ship:`Ship`,ShipWheel:`ShipWheel`,Shirt:`Shirt`,ShoppingBag:`ShoppingBag`,ShoppingBasket:`ShoppingBasket`,ShoppingCart:`ShoppingCart`,Shovel:`Shovel`,ShowerHead:`ShowerHead`,Shredder:`Shredder`,Shrimp:`Shrimp`,Shrink:`Shrink`,Shrub:`Shrub`,Shuffle:`Shuffle`,Sigma:`Sigma`,Signal:`Signal`,SignalHigh:`SignalHigh`,SignalLow:`SignalLow`,SignalMedium:`SignalMedium`,SignalZero:`SignalZero`,Signature:`Signature`,Signpost:`Signpost`,SignpostBig:`SignpostBig`,Siren:`Siren`,SkipBack:`SkipBack`,SkipForward:`SkipForward`,Skull:`Skull`,Slack:`Slack`,Slash:`Slash`,Slice:`Slice`,SlidersHorizontal:`SlidersHorizontal`,SlidersVertical:`SlidersVertical`,Smartphone:`Smartphone`,SmartphoneCharging:`SmartphoneCharging`,SmartphoneNfc:`SmartphoneNfc`,Smile:`Smile`,SmilePlus:`SmilePlus`,Snail:`Snail`,Snowflake:`Snowflake`,SoapDispenserDroplet:`SoapDispenserDroplet`,Sofa:`Sofa`,Soup:`Soup`,Space:`Space`,Spade:`Spade`,Sparkle:`Sparkle`,Sparkles:`Sparkles`,Speaker:`Speaker`,Speech:`Speech`,SpellCheck:`SpellCheck`,SpellCheck2:`SpellCheck2`,Spline:`Spline`,SplinePointer:`SplinePointer`,Split:`Split`,SprayCan:`SprayCan`,Sprout:`Sprout`,Square:`Square`,SquareActivity:`SquareActivity`,SquareArrowDown:`SquareArrowDown`,SquareArrowDownLeft:`SquareArrowDownLeft`,SquareArrowDownRight:`SquareArrowDownRight`,SquareArrowLeft:`SquareArrowLeft`,SquareArrowOutDownLeft:`SquareArrowOutDownLeft`,SquareArrowOutDownRight:`SquareArrowOutDownRight`,SquareArrowOutUpLeft:`SquareArrowOutUpLeft`,SquareArrowOutUpRight:`SquareArrowOutUpRight`,SquareArrowRight:`SquareArrowRight`,SquareArrowUp:`SquareArrowUp`,SquareArrowUpLeft:`SquareArrowUpLeft`,SquareArrowUpRight:`SquareArrowUpRight`,SquareAsterisk:`SquareAsterisk`,SquareBottomDashedScissors:`SquareBottomDashedScissors`,SquareChartGantt:`SquareChartGantt`,SquareCheck:`SquareCheck`,SquareCheckBig:`SquareCheckBig`,SquareChevronDown:`SquareChevronDown`,SquareChevronLeft:`SquareChevronLeft`,SquareChevronRight:`SquareChevronRight`,SquareChevronUp:`SquareChevronUp`,SquareCode:`SquareCode`,SquareDashed:`SquareDashed`,SquareDashedBottom:`SquareDashedBottom`,SquareDashedBottomCode:`SquareDashedBottomCode`,SquareDashedKanban:`SquareDashedKanban`,SquareDashedMousePointer:`SquareDashedMousePointer`,SquareDashedTopSolid:`SquareDashedTopSolid`,SquareDivide:`SquareDivide`,SquareDot:`SquareDot`,SquareEqual:`SquareEqual`,SquareFunction:`SquareFunction`,SquareKanban:`SquareKanban`,SquareLibrary:`SquareLibrary`,SquareM:`SquareM`,SquareMenu:`SquareMenu`,SquareMinus:`SquareMinus`,SquareMousePointer:`SquareMousePointer`,SquareParking:`SquareParking`,SquareParkingOff:`SquareParkingOff`,SquarePen:`SquarePen`,SquarePercent:`SquarePercent`,SquarePi:`SquarePi`,SquarePilcrow:`SquarePilcrow`,SquarePlay:`SquarePlay`,SquarePlus:`SquarePlus`,SquarePower:`SquarePower`,SquareRadical:`SquareRadical`,SquareRoundCorner:`SquareRoundCorner`,SquareScissors:`SquareScissors`,SquareSigma:`SquareSigma`,SquareSlash:`SquareSlash`,SquareSplitHorizontal:`SquareSplitHorizontal`,SquareSplitVertical:`SquareSplitVertical`,SquareSquare:`SquareSquare`,SquareStack:`SquareStack`,SquareTerminal:`SquareTerminal`,SquareUser:`SquareUser`,SquareUserRound:`SquareUserRound`,SquareX:`SquareX`,SquaresExclude:`SquaresExclude`,SquaresIntersect:`SquaresIntersect`,SquaresSubtract:`SquaresSubtract`,SquaresUnite:`SquaresUnite`,Squircle:`Squircle`,Squirrel:`Squirrel`,Stamp:`Stamp`,Star:`Star`,StarHalf:`StarHalf`,StarOff:`StarOff`,StepBack:`StepBack`,StepForward:`StepForward`,Stethoscope:`Stethoscope`,Sticker:`Sticker`,StickyNote:`StickyNote`,Store:`Store`,StretchHorizontal:`StretchHorizontal`,StretchVertical:`StretchVertical`,Strikethrough:`Strikethrough`,Subscript:`Subscript`,Sun:`Sun`,SunDim:`SunDim`,SunMedium:`SunMedium`,SunMoon:`SunMoon`,SunSnow:`SunSnow`,Sunrise:`Sunrise`,Sunset:`Sunset`,Superscript:`Superscript`,SwatchBook:`SwatchBook`,SwissFranc:`SwissFranc`,SwitchCamera:`SwitchCamera`,Sword:`Sword`,Swords:`Swords`,Syringe:`Syringe`,Table:`Table`,Table2:`Table2`,TableCellsMerge:`TableCellsMerge`,TableCellsSplit:`TableCellsSplit`,TableColumnsSplit:`TableColumnsSplit`,TableOfContents:`TableOfContents`,TableProperties:`TableProperties`,TableRowsSplit:`TableRowsSplit`,Tablet:`Tablet`,TabletSmartphone:`TabletSmartphone`,Tablets:`Tablets`,Tag:`Tag`,Tags:`Tags`,Tally1:`Tally1`,Tally2:`Tally2`,Tally3:`Tally3`,Tally4:`Tally4`,Tally5:`Tally5`,Tangent:`Tangent`,Target:`Target`,Telescope:`Telescope`,Tent:`Tent`,TentTree:`TentTree`,Terminal:`Terminal`,TestTube:`TestTube`,TestTubeDiagonal:`TestTubeDiagonal`,TestTubes:`TestTubes`,Text:`Text`,TextCursor:`TextCursor`,TextCursorInput:`TextCursorInput`,TextQuote:`TextQuote`,TextSearch:`TextSearch`,TextSelect:`TextSelect`,Theater:`Theater`,Thermometer:`Thermometer`,ThermometerSnowflake:`ThermometerSnowflake`,ThermometerSun:`ThermometerSun`,ThumbsDown:`ThumbsDown`,ThumbsUp:`ThumbsUp`,Ticket:`Ticket`,TicketCheck:`TicketCheck`,TicketMinus:`TicketMinus`,TicketPercent:`TicketPercent`,TicketPlus:`TicketPlus`,TicketSlash:`TicketSlash`,TicketX:`TicketX`,Tickets:`Tickets`,TicketsPlane:`TicketsPlane`,Timer:`Timer`,TimerOff:`TimerOff`,TimerReset:`TimerReset`,ToggleLeft:`ToggleLeft`,ToggleRight:`ToggleRight`,Toilet:`Toilet`,Tornado:`Tornado`,Torus:`Torus`,Touchpad:`Touchpad`,TouchpadOff:`TouchpadOff`,TowerControl:`TowerControl`,ToyBrick:`ToyBrick`,Tractor:`Tractor`,TrafficCone:`TrafficCone`,TrainFront:`TrainFront`,TrainFrontTunnel:`TrainFrontTunnel`,TrainTrack:`TrainTrack`,TramFront:`TramFront`,Transgender:`Transgender`,Trash:`Trash`,Trash2:`Trash2`,TreeDeciduous:`TreeDeciduous`,TreePalm:`TreePalm`,TreePine:`TreePine`,Trees:`Trees`,Trello:`Trello`,TrendingDown:`TrendingDown`,TrendingUp:`TrendingUp`,TrendingUpDown:`TrendingUpDown`,Triangle:`Triangle`,TriangleAlert:`TriangleAlert`,TriangleDashed:`TriangleDashed`,TriangleRight:`TriangleRight`,Trophy:`Trophy`,Truck:`Truck`,TruckElectric:`TruckElectric`,Turtle:`Turtle`,Tv:`Tv`,TvMinimal:`TvMinimal`,TvMinimalPlay:`TvMinimalPlay`,Twitch:`Twitch`,Twitter:`Twitter`,Type:`Type`,TypeOutline:`TypeOutline`,Umbrella:`Umbrella`,UmbrellaOff:`UmbrellaOff`,Underline:`Underline`,Undo:`Undo`,Undo2:`Undo2`,UndoDot:`UndoDot`,UnfoldHorizontal:`UnfoldHorizontal`,UnfoldVertical:`UnfoldVertical`,Ungroup:`Ungroup`,University:`University`,Unlink:`Unlink`,Unlink2:`Unlink2`,Unplug:`Unplug`,Upload:`Upload`,Usb:`Usb`,User:`User`,UserCheck:`UserCheck`,UserCog:`UserCog`,UserLock:`UserLock`,UserMinus:`UserMinus`,UserPen:`UserPen`,UserPlus:`UserPlus`,UserRound:`UserRound`,UserRoundCheck:`UserRoundCheck`,UserRoundCog:`UserRoundCog`,UserRoundMinus:`UserRoundMinus`,UserRoundPen:`UserRoundPen`,UserRoundPlus:`UserRoundPlus`,UserRoundSearch:`UserRoundSearch`,UserRoundX:`UserRoundX`,UserSearch:`UserSearch`,UserX:`UserX`,Users:`Users`,UsersRound:`UsersRound`,Utensils:`Utensils`,UtensilsCrossed:`UtensilsCrossed`,UtilityPole:`UtilityPole`,Variable:`Variable`,Vault:`Vault`,Vegan:`Vegan`,VenetianMask:`VenetianMask`,Venus:`Venus`,VenusAndMars:`VenusAndMars`,Vibrate:`Vibrate`,VibrateOff:`VibrateOff`,Video:`Video`,VideoOff:`VideoOff`,Videotape:`Videotape`,View:`View`,Voicemail:`Voicemail`,Volleyball:`Volleyball`,Volume:`Volume`,Volume1:`Volume1`,Volume2:`Volume2`,VolumeOff:`VolumeOff`,VolumeX:`VolumeX`,Vote:`Vote`,Wallet:`Wallet`,WalletCards:`WalletCards`,WalletMinimal:`WalletMinimal`,Wallpaper:`Wallpaper`,Wand:`Wand`,WandSparkles:`WandSparkles`,Warehouse:`Warehouse`,WashingMachine:`WashingMachine`,Watch:`Watch`,Waves:`Waves`,WavesLadder:`WavesLadder`,Waypoints:`Waypoints`,Webcam:`Webcam`,Webhook:`Webhook`,WebhookOff:`WebhookOff`,Weight:`Weight`,Wheat:`Wheat`,WheatOff:`WheatOff`,WholeWord:`WholeWord`,Wifi:`Wifi`,WifiHigh:`WifiHigh`,WifiLow:`WifiLow`,WifiOff:`WifiOff`,WifiPen:`WifiPen`,WifiZero:`WifiZero`,Wind:`Wind`,WindArrowDown:`WindArrowDown`,Wine:`Wine`,WineOff:`WineOff`,Workflow:`Workflow`,Worm:`Worm`,WrapText:`WrapText`,Wrench:`Wrench`,X:`X`,Youtube:`Youtube`,Zap:`Zap`,ZapOff:`ZapOff`,ZoomIn:`ZoomIn`,ZoomOut:`ZoomOut`,ArrowDown_0_1:`ArrowDown01`,ArrowDown_1_0:`ArrowDown10`,ArrowUp_0_1:`ArrowUp01`,ArrowUp_1_0:`ArrowUp10`,Axis_3d:`Axis3d`,BookUp_2:`BookUp2`,Building_2:`Building2`,Calendar_1:`Calendar1`,CalendarCheck_2:`CalendarCheck2`,CalendarMinus_2:`CalendarMinus2`,CalendarPlus_2:`CalendarPlus2`,CalendarX_2:`CalendarX2`,CircleSlash_2:`CircleSlash2`,Clock_1:`Clock1`,Clock_10:`Clock10`,Clock_11:`Clock11`,Clock_12:`Clock12`,Clock_2:`Clock2`,Clock_3:`Clock3`,Clock_4:`Clock4`,Clock_5:`Clock5`,Clock_6:`Clock6`,Clock_7:`Clock7`,Clock_8:`Clock8`,Clock_9:`Clock9`,Columns_2:`Columns2`,Columns_3:`Columns3`,Columns_3Cog:`Columns3Cog`,Columns_4:`Columns4`,Dice_1:`Dice1`,Dice_2:`Dice2`,Dice_3:`Dice3`,Dice_4:`Dice4`,Dice_5:`Dice5`,Dice_6:`Dice6`,Disc_2:`Disc2`,Disc_3:`Disc3`,FileAudio_2:`FileAudio2`,FileAxis_3d:`FileAxis3d`,FileBadge_2:`FileBadge2`,FileCheck_2:`FileCheck2`,FileCode_2:`FileCode2`,FileJson_2:`FileJson2`,FileKey_2:`FileKey2`,FileLock_2:`FileLock2`,FileMinus_2:`FileMinus2`,FilePlus_2:`FilePlus2`,FileSearch_2:`FileSearch2`,FileType_2:`FileType2`,FileVideo_2:`FileVideo2`,FileVolume_2:`FileVolume2`,FileX_2:`FileX2`,FlipHorizontal_2:`FlipHorizontal2`,FlipVertical_2:`FlipVertical2`,Flower_2:`Flower2`,FolderGit_2:`FolderGit2`,FolderSearch_2:`FolderSearch2`,Gamepad_2:`Gamepad2`,Grid_2x2:`Grid2x2`,Grid_2x2Check:`Grid2x2Check`,Grid_2x2Plus:`Grid2x2Plus`,Grid_2x2X:`Grid2x2X`,Grid_3x3:`Grid3x3`,Heading_1:`Heading1`,Heading_2:`Heading2`,Heading_3:`Heading3`,Heading_4:`Heading4`,Heading_5:`Heading5`,Heading_6:`Heading6`,Layers_2:`Layers2`,Link_2:`Link2`,Link_2Off:`Link2Off`,Maximize_2:`Maximize2`,Minimize_2:`Minimize2`,MousePointer_2:`MousePointer2`,Move_3d:`Move3d`,MoveDiagonal_2:`MoveDiagonal2`,Music_2:`Music2`,Music_3:`Music3`,Music_4:`Music4`,Navigation_2:`Navigation2`,Navigation_2Off:`Navigation2Off`,Package_2:`Package2`,PictureInPicture_2:`PictureInPicture2`,Plug_2:`Plug2`,Redo_2:`Redo2`,Repeat_1:`Repeat1`,Repeat_2:`Repeat2`,Rotate_3d:`Rotate3d`,Rows_2:`Rows2`,Rows_3:`Rows3`,Rows_4:`Rows4`,Scale_3d:`Scale3d`,Settings_2:`Settings2`,Share_2:`Share2`,SpellCheck_2:`SpellCheck2`,Table_2:`Table2`,Tally_1:`Tally1`,Tally_2:`Tally2`,Tally_3:`Tally3`,Tally_4:`Tally4`,Tally_5:`Tally5`,Trash_2:`Trash2`,Undo_2:`Undo2`,Unlink_2:`Unlink2`,Volume_1:`Volume1`,Volume_2:`Volume2`},pr={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`,ExtraLarge:`xl`},mr={...dr,...fr},hr={Gray:`gray`,Brand:`brand`,Error:`error`,Warning:`warning`,Success:`success`,GrayBlue:`gray-blue`,BlueLight:`blue-light`,Blue:`blue`,Indigo:`indigo`,Purple:`purple`,Pink:`pink`,Orange:`orange`},gr=[`gray`,`brand`,`error`,`warning`,`success`,`gray-blue`,`blue-light`,`blue`,`indigo`,`purple`,`pink`,`orange`];function _r(e,t,n){return Math.min(Math.max(e,t),n)}function vr(e){return gr.map(t=>`.color--${t} {\n  ${e(t)}\n}`).join(`
`)}function yr(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})}function br(e){let t=yr();return e?`${e}-${t}`:t}function xr(e,t,n,r=`value`){t.has(r)&&t.get(r)!==void 0&&e.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:n},bubbles:!0,composed:!0}))}function Sr(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Cr(e,t,n){if(e.style?.setProperty){e.style.setProperty(t,n);return}let r=(e.getAttribute(`style`)??``).trim(),i=`${t}: ${n}`,a=RegExp(`${Sr(t)}\\s*:\\s*[^;]*`);if(a.test(r)){e.setAttribute(`style`,r.replace(a,i));return}let o=r.replace(/;$/,``).trim();e.setAttribute(`style`,o?`${o}; ${i}`:i)}var U=class extends V{constructor(){super(...arguments),this.role=`presentation`,this.size=pr.Medium}willUpdate(e){e.has(`size`)&&typeof this.size==`number`&&Cr(this,`--icon-size`,`${this.size}px`),e.has(`strokeWidth`)&&this.strokeWidth!=null&&Cr(this,`--icon-stroke-width`,`${this.strokeWidth}`)}};U.styles=I`
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
  `,F([fn({type:String,reflect:!0})],U.prototype,`role`,void 0),F([fn({type:String,reflect:!0})],U.prototype,`size`,void 0),F([fn({type:Number,reflect:!0})],U.prototype,`strokeWidth`,void 0);var wr=class extends U{render(){return Ht`
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

    `}};wr.styles=U.styles,wr=F([H(`quantic-icon-lucide-circle-check`)],wr);var Tr=class extends U{render(){return Ht`
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

    `}};Tr.styles=U.styles,Tr=F([H(`quantic-icon-lucide-circle-x`)],Tr);var Er=class extends U{render(){return Ht`
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

    `}};Er.styles=U.styles,Er=F([H(`quantic-icon-lucide-info`)],Er);var Dr=class extends U{render(){return Ht`
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

    `}};Dr.styles=U.styles,Dr=F([H(`quantic-icon-lucide-triangle-alert`)],Dr);var Or=class extends U{render(){return Ht`
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

    `}};Or.styles=U.styles,Or=F([H(`quantic-icon-lucide-x`)],Or),ur.ensureDefined(),wr.ensureDefined(),Tr.ensureDefined(),Er.ensureDefined(),Dr.ensureDefined(),Or.ensureDefined();var kr=class extends Yn(V,[`title`,``,`action`]){constructor(){super(...arguments),this.type=Xn.Info,this.showCloseButton=!1,this.handleCloseClick=()=>{this.dispatchEvent(new Event(`close`,{bubbles:!0,composed:!0}))}}updated(e){super.updated(e),(e.has(`type`)||!this.hasAttribute(`role`))&&(this.setAttribute(`role`,this.type===Xn.Error?`alert`:`status`),this.setAttribute(`aria-live`,this.type===Xn.Error?`assertive`:`polite`),this.setAttribute(`aria-atomic`,`true`))}renderDefaultIcon(){switch(this.type){case Xn.Success:return L`<quantic-icon-lucide-circle-check
          size="md"
        ></quantic-icon-lucide-circle-check>`;case Xn.Error:return L`<quantic-icon-lucide-circle-x
          size="md"
        ></quantic-icon-lucide-circle-x>`;case Xn.Warning:return L`<quantic-icon-lucide-triangle-alert
          size="md"
        ></quantic-icon-lucide-triangle-alert>`;case Xn.Info:default:return L`<quantic-icon-lucide-info
          size="md"
        ></quantic-icon-lucide-info>`}}render(){return L`
      <div class="container">
        <span class="icon">
          <slot name="icon">${this.renderDefaultIcon()}</slot>
        </span>
        <div class="content">
          <slot name="title" class="title"></slot>
          <slot class="body"></slot>
          <slot name="action" class="action"></slot>
        </div>
        ${this.showCloseButton?L`<quantic-button
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
              </quantic-button>`:Wt}
      </div>
    `}};kr.meta={tag:`quantic-alert`,description:`Inline alert banner with severity styles and optional dismiss action. Visibility is owned by the consumer.`,category:`feedback`,avoidWhen:[{when:`the message is transient and not tied to a place on the page`,useInstead:`quantic-toast`}],accessibility:{providedByComponent:[`announced through a live region`,`severity conveyed by icon as well as colour`],requiredFromConsumer:[`a title, so the message does not depend on colour alone`]},slots:{icon:{description:`Optional icon override. Defaults to a type-derived lucide icon.`},title:{description:`Optional bold title.`,copyRule:`heading`},"":{description:`Body content of the alert.`},action:{description:`Optional action element (e.g. a link or button).`,copyRule:`heading`}},relatedTo:[`quantic-toast`,`quantic-button`]},kr.styles=I`
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
  `,F([z({type:`AlertType`,options:Object.values(Xn),default:Xn.Info,reflect:!0,description:`Severity. Drives icon and color tokens.`})],kr.prototype,`type`,void 0),F([z({type:`boolean`,attribute:`show-close-button`,default:`false`,description:`Shows a built-in close button. Click dispatches a "close" event.`})],kr.prototype,`showCloseButton`,void 0),kr=F([B(`close`,{description:`Fired when the user clicks the close button. The consumer is responsible for hiding the alert.`}),H(`quantic-alert`)],kr);var{I:Ar}=rn,jr=e=>e,Mr=e=>e.strings===void 0,Nr=()=>document.createComment(``),Pr=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new Ar(r.insertBefore(Nr(),i),r.insertBefore(Nr(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=jr(e).nextSibling;jr(r).insertBefore(e,i),e=t}}}return n},Fr=(e,t,n=e)=>(e._$AI(t,n),e),Ir={},Lr=(e,t=Ir)=>e._$AH=t,Rr=e=>e._$AH,zr=e=>{e._$AR(),e._$AA.remove()},Br=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Vr=or(class extends sr{constructor(e){if(super(e),e.type!==ar.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Rr(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=Fr(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=Fr(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=Fr(i[d],a[m]),Pr(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=Fr(i[f],a[p]),Pr(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=Br(o,p,m),u=Br(s,d,f)),l.has(s[d])){if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=Pr(e,i[d]);Fr(t,a[p]),c[p]=t}else c[p]=Fr(n,a[p]),Pr(e,i[d],n),i[t]=null;p++}else zr(i[f]),f--}else zr(i[d]),d++;for(;p<=m;){let t=Pr(e,c[m+1]);Fr(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&zr(e)}return this.ut=o,Lr(e,c),Ut}}),Hr=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Hr(e,t);return!0},Ur=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Wr=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),qr(t)}};function Gr(e){this._$AN===void 0?this._$AM=e:(Ur(this),this._$AM=e,Wr(this))}function Kr(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)Hr(r[e],!1),Ur(r[e]);else r!=null&&(Hr(r,!1),Ur(r))}else Hr(this,e)}}var qr=e=>{e.type==ar.CHILD&&(e._$AP??=Kr,e._$AQ??=Gr)},Jr=class extends sr{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Wr(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Hr(this,e),Ur(this))}setValue(e){if(Mr(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Yr=()=>new Xr,Xr=class{},Zr=new WeakMap,Qr=or(class extends Jr{render(e){return Wt}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Wt}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Zr.get(t);n===void 0&&(n=new WeakMap,Zr.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?Zr.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),$r=Math.min,ei=Math.max,ti=Math.round,ni=Math.floor,ri=e=>({x:e,y:e}),ii={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function ai(e,t,n){return ei(e,$r(t,n))}function oi(e,t){return typeof e==`function`?e(t):e}function si(e){return e.split(`-`)[0]}function ci(e){return e.split(`-`)[1]}function li(e){return e===`x`?`y`:`x`}function ui(e){return e===`y`?`height`:`width`}function di(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function fi(e){return li(di(e))}function pi(e,t,n){n===void 0&&(n=!1);let r=ci(e),i=fi(e),a=ui(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Si(o)),[o,Si(o)]}function mi(e){let t=Si(e);return[hi(e),t,hi(t)]}function hi(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var gi=[`left`,`right`],_i=[`right`,`left`],vi=[`top`,`bottom`],yi=[`bottom`,`top`];function bi(e,t,n){switch(e){case`top`:case`bottom`:return n?t?_i:gi:t?gi:_i;case`left`:case`right`:return t?vi:yi;default:return[]}}function xi(e,t,n,r){let i=ci(e),a=bi(si(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(hi)))),a}function Si(e){let t=si(e);return ii[t]+e.slice(t.length)}function Ci(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function wi(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Ci(e)}function Ti(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Ei(e,t,n){let{reference:r,floating:i}=e,a=di(t),o=fi(t),s=ui(o),c=si(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=ci(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Di(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=oi(t,e),p=wi(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Ti(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Ti(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Oi=50,ki=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Di},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Ei(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Oi&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Ei(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Ai=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=oi(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=si(r),_=di(o),v=si(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Si(o)]:mi(o)),x=p!==`none`;!d&&x&&b.push(...xi(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=pi(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===di(t)||T.every(e=>di(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=di(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},ji=new Set([`left`,`top`]);async function Mi(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=si(n),s=ci(n),c=di(n)===`y`,l=ji.has(o)?-1:1,u=a&&c?-1:1,d=oi(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Ni=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Mi(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Pi=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=oi(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=di(i),p=li(f),m=u[p],h=u[f],g=(e,t)=>ai(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}};function Fi(){return typeof window<`u`}function Ii(e){return zi(e)?(e.nodeName||``).toLowerCase():`#document`}function Li(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ri(e){return((zi(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function zi(e){return Fi()?e instanceof Node||e instanceof Li(e).Node:!1}function Bi(e){return Fi()?e instanceof Element||e instanceof Li(e).Element:!1}function Vi(e){return Fi()?e instanceof HTMLElement||e instanceof Li(e).HTMLElement:!1}function Hi(e){return!Fi()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Li(e).ShadowRoot}function Ui(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=W(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Wi(e){return/^(table|td|th)$/.test(Ii(e))}function Gi(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Ki=/transform|translate|scale|rotate|perspective|filter/,qi=/paint|layout|strict|content/,Ji=e=>!!e&&e!==`none`,Yi;function Xi(e){let t=Bi(e)?W(e):e;return Ji(t.transform)||Ji(t.translate)||Ji(t.scale)||Ji(t.rotate)||Ji(t.perspective)||!Qi()&&(Ji(t.backdropFilter)||Ji(t.filter))||Ki.test(t.willChange||``)||qi.test(t.contain||``)}function Zi(e){let t=ea(e);for(;Vi(t)&&!$i(t);){if(Xi(t))return t;if(Gi(t))return null;t=ea(t)}return null}function Qi(){return Yi??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Yi}function $i(e){return/^(html|body|#document)$/.test(Ii(e))}function W(e){return Li(e).getComputedStyle(e)}function G(e){return Bi(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ea(e){if(Ii(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Hi(e)&&e.host||Ri(e);return Hi(t)?t.host:t}function ta(e){let t=ea(e);return $i(t)?(e.ownerDocument||e).body:Vi(t)&&Ui(t)?t:ta(t)}function na(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=ta(e),i=r===e.ownerDocument?.body,a=Li(r);if(i){let e=ra(a);return t.concat(a,a.visualViewport||[],Ui(r)?r:[],e&&n?na(e):[])}return t.concat(r,na(r,[],n))}function ra(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ia(e){let t=W(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Vi(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=ti(n)!==a||ti(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function aa(e){return Bi(e)?e:e.contextElement}function oa(e){let t=aa(e);if(!Vi(t))return ri(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=ia(t),o=(a?ti(n.width):n.width)/r,s=(a?ti(n.height):n.height)/i;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}var sa=ri(0);function ca(e){let t=Li(e);return!Qi()||!t.visualViewport?sa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function la(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===Li(e)}function ua(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=aa(e),o=ri(1);t&&(r?Bi(r)&&(o=oa(r)):o=oa(e));let s=la(a,n,r)?ca(a):ri(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=Li(a),t=Bi(r)?Li(r):r,n=e,i=ra(n);for(;i&&t!==n;){let e=oa(i),t=i.getBoundingClientRect(),r=W(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Li(i),i=ra(n)}}return Ti({width:u,height:d,x:c,y:l})}function da(e,t){let n=G(e).scrollLeft;return t?t.left+n:ua(Ri(e)).left+n}function fa(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-da(e,n),y:n.top+t.scrollTop}}function pa(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Ri(r),s=t?Gi(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=ri(1),u=ri(0),d=Vi(r);if((d||!a)&&((Ii(r)!==`body`||Ui(o))&&(c=G(r)),d)){let e=ua(r);l=oa(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?fa(o,c):ri(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ma(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function ha(e){let t=G(e),n=e.ownerDocument.body,r=ei(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=ei(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+da(e),o=-t.scrollTop;return W(n).direction===`rtl`&&(a+=ei(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var ga=25;function _a(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=Li(e),a=Ri(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Qi()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(da(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=ga&&(s-=o)}return{width:s,height:c,x:l,y:u}}function va(e,t){let n=ua(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=oa(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ya(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=_a(e,n,t);else if(t===`document`)r=ha(Ri(e));else if(Bi(t))r=va(t,n);else{let n=ca(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Ti(r)}function ba(e,t){let n=t.get(e);if(n)return n;let r=na(e,[],!1).filter(e=>Bi(e)&&Ii(e)!==`body`),i=null,a=W(e).position===`fixed`,o=a?ea(e):e;for(;Bi(o)&&!$i(o);){let e=W(o),t=Xi(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=ea(o)}return t.set(e,r),r}function xa(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Gi(t)?[]:ba(t,this._c):[].concat(n),r],o=ya(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=ya(t,a[e],i);s=ei(n.top,s),c=$r(n.right,c),l=$r(n.bottom,l),u=ei(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Sa(e){let{width:t,height:n}=ia(e);return{width:t,height:n}}function Ca(e,t,n){let r=Vi(t),i=Ri(t),a=n===`fixed`,o=ua(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=ri(0);if((r||!a)&&((Ii(t)!==`body`||Ui(i))&&(s=G(t)),r)){let e=ua(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=da(i));let l=i&&!r&&!a?fa(i,s):ri(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function wa(e){return W(e).position===`static`}function Ta(e,t){if(!Vi(e)||W(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Ri(e)===n&&(n=n.ownerDocument.body),n}function Ea(e,t){let n=Li(e);if(Gi(e))return n;if(!Vi(e)){let t=ea(e);for(;t&&!$i(t);){if(Bi(t)&&!wa(t))return t;t=ea(t)}return n}let r=Ta(e,t);for(;r&&Wi(r)&&wa(r);)r=Ta(r,t);return r&&$i(r)&&wa(r)&&!Xi(r)?n:r||Zi(e)||n}var Da=async function(e){let t=this.getOffsetParent||Ea,n=this.getDimensions,r=await n(e.floating);return{reference:Ca(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Oa(e){return W(e).direction===`rtl`}var ka={convertOffsetParentRelativeRectToViewportRelativeRect:pa,getDocumentElement:Ri,getClippingRect:xa,getOffsetParent:Ea,getElementRects:Da,getClientRects:ma,getDimensions:Sa,getScale:oa,isElement:Bi,isRTL:Oa};function Aa(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ja(e,t,n){let r=null,i,a=Ri(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=ni(d),h=ni(a.clientWidth-(u+f)),g=ni(a.clientHeight-(d+p)),_=ni(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:ei(0,$r(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!Aa(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=Li(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function Ma(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=aa(e),u=i||a?[...l?na(l):[],...t?na(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?ja(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?ua(e):null;c&&g();function g(){let t=ua(e);h&&!Aa(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Na=Ni,Pa=Pi,Fa=Ai,Ia=(e,t,n)=>{let r=new Map,i=n??{},a={...ka,...i.platform,_c:r};return ki(e,t,{...i,platform:a})};function La(e){class t extends e{constructor(){super(...arguments),this.ariaLabel=null,this.ariaDescription=null,this.ariaInvalid=null}getA11yAttributes(e){let t=e?.label??this.ariaLabel,n=e?.description??this.ariaDescription,r=e?.invalid??this.ariaInvalid===`true`;return{label:lr(t||void 0),description:lr(n||void 0),invalid:lr(r?`true`:void 0)}}}return F([z({type:`string`,attribute:`aria-label`,description:`Accessible label for the component (aria-label).`})],t.prototype,`ariaLabel`,void 0),F([z({type:`string`,attribute:`aria-description`,description:`Accessible description bound directly to aria-description.`})],t.prototype,`ariaDescription`,void 0),F([z({type:`string`,attribute:`aria-invalid`,description:`Marks the component invalid for assistive technologies (aria-invalid).`})],t.prototype,`ariaInvalid`,void 0),t}var Ra={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},za=class extends U{render(){return Ht`
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

    `}};za.styles=U.styles,za=F([H(`quantic-icon-lucide-chevron-down`)],za);var Ba=class extends U{render(){return Ht`
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

    `}};Ba.styles=U.styles,Ba=F([H(`quantic-icon-lucide-circle-alert`)],Ba),za.ensureDefined(),Ba.ensureDefined();var Va={xs:pr.ExtraSmall,sm:pr.ExtraSmall,md:pr.Small,lg:pr.Medium},Ha=e=>Va[e]??pr.Small,Ua=e=>L`<quantic-icon-lucide-circle-alert
    size=${Ha(e)}
    class="error-icon"
  ></quantic-icon-lucide-circle-alert>`,Wa=(e,t={})=>L`<quantic-icon-lucide-chevron-down
    size=${Ha(e)}
    class="suffix-icon"
    @click=${t.click}
    @mousedown=${t.mousedown}
  ></quantic-icon-lucide-chevron-down>`,Ga={xs:{font:`13px`,block:`var(--quantic-spacing-xxs)`,inline:`var(--quantic-spacing-2)`},sm:{font:`var(--quantic-font-size-body-sm)`,block:`var(--quantic-spacing-sm)`,inline:`var(--quantic-spacing-2)`},md:{font:`var(--quantic-font-size-body-md)`,block:`var(--quantic-spacing-md)`,inline:`var(--quantic-spacing-3)`},lg:{font:`var(--quantic-font-size-body-lg)`,block:`var(--quantic-spacing-3)`,inline:`var(--quantic-spacing-4)`}};Object.keys(Ga);function Ka(e,t){let n=t=>nt(`--quantic-component-${e}-${t}`),r=nt(`var(--quantic-component-${e}-border-radius, var(--quantic-radius-sm))`),i=nt(`var(--quantic-component-${e}-border-color, var(--quantic-border-primary))`),a=Object.entries(Ga).map(([t,{font:n,block:r,inline:i}])=>`
        .main.size--${t} {
          font-size: var(--quantic-component-${e}-font-size, ${n});
          padding: var(--quantic-component-${e}-padding-block, ${r})
            var(--quantic-component-${e}-padding-inline, ${i});
        }`).join(`
`);return I`
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
      min-width: var(${n(`min-width`)}, ${nt(t)});
      font-family: var(--quantic-font-family-body);
      border: 1px solid ${i};
      border-radius: ${r};
      color: var(${n(`color`)}, var(--quantic-text-primary));
      background-color: var(${n(`bg`)}, var(--quantic-bg-primary));
      transition:
        border-color 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out;
    }

    ${nt(a)}

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
  `}var qa=class extends La(V){constructor(){super(),this.listboxId=br(`combobox-listbox`),this.value=``,this.name=``,this.placeholder=``,this.options=[],this.size=Ra.Medium,this.disabled=!1,this.required=!1,this.invalid=!1,this.emptyLabel=`No results`,this.allowCustomValue=!1,this._open=!1,this._inputValue=``,this._activeIndex=-1,this._inputRef=Yr(),this._listboxRef=Yr(),this.internals=this.attachInternals()}updated(e){let t=e.has(`value`),n=e.has(`options`),r=e.has(`allowCustomValue`);if(t||r||n&&!this._open){let e=this.options.find(e=>e.value===this.value);this._inputValue=e?e.label:this.allowCustomValue?this.value:``}e.has(`value`)&&this.internals.setFormValue(this.value),(e.has(`value`)||e.has(`required`))&&this.updateValidity(),e.has(`options`)&&this._open&&(this._activeIndex=-1),e.has(`_activeIndex`)&&this._activeIndex>=0&&this.shadowRoot?.querySelectorAll(`[role="option"]`)[this._activeIndex]?.scrollIntoView({block:`nearest`})}get filteredOptions(){if(!this._inputValue)return this.options;let e=this.filterFn??((e,t)=>e.label.toLowerCase().includes(t.toLowerCase()));return this.options.filter(t=>e(t,this._inputValue))}firstNavigableIndex(){return this.filteredOptions.findIndex(e=>!e.disabled)}lastNavigableIndex(){let e=this.filteredOptions;for(let t=e.length-1;t>=0;t--)if(!e[t].disabled)return t;return-1}nextNavigableIndex(e,t){let n=this.filteredOptions,r=e+t;for(;r>=0&&r<n.length;){if(!n[r].disabled)return r;r+=t}return e}async openList(){this._open||this.disabled||(this._open=!0,this._activeIndex=-1,await this.updateComplete,this.positionListbox())}closeList(e=!1){if(this._open){if(this._open=!1,this._activeIndex=-1,this.cleanup?.(),this.cleanup=void 0,e&&(this.allowCustomValue||!this._inputValue.trim()))this.commitInputValue();else{let e=this.options.find(e=>e.value===this.value);this._inputValue=e?.label??(this.allowCustomValue?this.value:``)}}}commitInputValue(){let e=this._inputValue.trim();this._inputValue=e,e!==this.value&&(this.value=e,this.internals.setFormValue(e),this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:e},bubbles:!0,composed:!0})))}positionListbox(){let e=this._listboxRef.value;e&&(this.cleanup=Ma(this,e,async()=>{if(!e)return;let{x:t,y:n}=await Ia(this,e,{placement:`bottom-start`,middleware:[Na(4),Fa(),Pa({padding:8})],strategy:`absolute`});Object.assign(e.style,{left:`${t}px`,top:`${n}px`,width:`${this.getBoundingClientRect().width}px`})}))}selectOption(e){this.value=e.value,this._inputValue=e.label,this.internals.setFormValue(e.value),this._open=!1,this._activeIndex=-1,this.cleanup?.(),this.cleanup=void 0,this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:this.value},bubbles:!0,composed:!0})),this._inputRef.value?.focus()}handleInput(e){let t=e.target;this._inputValue=t.value,this._activeIndex=-1,this._open||this.openList(),this.dispatchEvent(new CustomEvent(`input-changed`,{detail:{value:this._inputValue},bubbles:!0,composed:!0}))}handleKeyDown(e){switch(e.key){case`ArrowDown`:e.preventDefault(),this._open?this._activeIndex=this.nextNavigableIndex(this._activeIndex,1):this.openList().then(()=>{this._activeIndex=this.firstNavigableIndex()});break;case`ArrowUp`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.nextNavigableIndex(this._activeIndex,-1);break;case`Home`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.firstNavigableIndex();break;case`End`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.lastNavigableIndex();break;case`Enter`:if(this._open&&this._activeIndex>=0){let t=this.filteredOptions[this._activeIndex];t&&!t.disabled&&(e.preventDefault(),this.selectOption(t))}else this._open&&(this.allowCustomValue||!this._inputValue.trim())&&(e.preventDefault(),this.closeList(!0));break;case`Escape`:e.preventDefault(),this.closeList();break;case`Tab`:this.closeList(!0)}}handleBlur(){this.closeList(!0),this.dispatchEvent(new Event(`blur`,{bubbles:!0,composed:!0}))}handleFocus(){this.dispatchEvent(new Event(`focus`,{bubbles:!0,composed:!0}))}handleInputClick(){this.openList()}handleChevronMouseDown(e){e.preventDefault(),this._open?this.closeList():(this._inputRef.value?.focus(),this.openList())}formResetCallback(){this.value=``,this._inputValue=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e);let t=this.options.find(t=>t.value===e);this._inputValue=t?.label??(this.allowCustomValue?e:``)}formDisabledCallback(e){this.disabled=e}disconnectedCallback(){super.disconnectedCallback(),this.cleanup?.()}updateValidity(){let e=this._inputRef.value;e&&this.internals.setValidity(e.validity,e.validationMessage,e)}get activeDescendant(){if(!(!this._open||this._activeIndex<0))return`${this.listboxId}-opt-${this._activeIndex}`}render(){let e=cr({main:!0,[`size--${this.size}`]:!0}),t=cr({listbox:!0,"is-open":this._open,[`size--${this.size}`]:!0}),n=this.getA11yAttributes({invalid:this.invalid}),r=this.filteredOptions;return L`
      <div class=${e}>
        <slot name="prefix"></slot>
        <input
          ${Qr(this._inputRef)}
          class="input"
          role="combobox"
          aria-expanded=${this._open?`true`:`false`}
          aria-haspopup="listbox"
          aria-autocomplete="list"
          aria-controls=${this.listboxId}
          aria-activedescendant=${lr(this.activeDescendant)}
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
        ${this.invalid?Ua(this.size):L`<slot name="suffix"
                >${Wa(this.size,{mousedown:this.handleChevronMouseDown})}</slot
              >`}
      </div>

      <ul
        ${Qr(this._listboxRef)}
        id=${this.listboxId}
        role="listbox"
        class=${t}
        @mousedown=${e=>e.preventDefault()}
      >
        ${r.length===0?L`<li
                class="option-empty"
                role="option"
                aria-disabled="true"
                aria-selected="false"
              >
                ${this.emptyLabel}
              </li>`:Vr(r,e=>e.value,(e,t)=>L`
                  <li
                    id=${`${this.listboxId}-opt-${t}`}
                    role="option"
                    class=${cr({option:!0,"is-active":t===this._activeIndex,"is-selected":e.value===this.value,"is-disabled":!!e.disabled})}
                    aria-selected=${e.value===this.value?`true`:`false`}
                    aria-disabled=${e.disabled?`true`:`false`}
                    @click=${()=>this.handleOptionClick(e)}
                  >
                    <span class="option-label">${e.label}</span>
                  </li>
                `)}
      </ul>
    `}handleOptionClick(e){e.disabled||this.selectOption(e)}};qa.meta={tag:`quantic-combobox`,description:`Text input that filters a list of options as the user types. Form-associated. Use for large option sets or anywhere a plain <select> is inadequate. Wrap in quantic-combobox-field to add a label and validation messaging.`,category:`form`,avoidWhen:[{when:`the option set is short and fixed`,useInstead:`quantic-select`}],accessibility:{providedByComponent:[`aria-expanded and aria-selected`,`arrow keys and Escape`,`form association`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{prefix:{description:`Leading content (e.g. icon).`},suffix:{description:`Trailing content, replacing the default chevron.`}},relatedTo:[`quantic-combobox-field`,`quantic-select`,`quantic-field`]},qa.formAssociated=!0,qa.styles=[Ka(`combobox`,`6em`),I`
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
    `],F([z({type:`string`,default:``,reflect:!0,description:`Currently selected value submitted with the form.`})],qa.prototype,`value`,void 0),F([z({type:`string`,description:`Name submitted with form data.`})],qa.prototype,`name`,void 0),F([z({type:`string`,description:`Placeholder shown when no option is selected.`,copyRule:`placeholder`})],qa.prototype,`placeholder`,void 0),F([z({type:`ComboboxOption[]`,default:`[]`,description:`Options to display. Each item must have a label (display text) and value (form value). Set this prop reactively to implement async/server-side filtering.`})],qa.prototype,`options`,void 0),F([z({type:`ComboboxSize`,options:Object.values(Ra),default:Ra.Medium,description:`Controls padding and font size.`})],qa.prototype,`size`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],qa.prototype,`disabled`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],qa.prototype,`required`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-combobox-field.`})],qa.prototype,`invalid`,void 0),F([z({type:`string`,default:`No results`,description:`Text shown in the listbox when no options match the input.`,copyRule:`empty-state`})],qa.prototype,`emptyLabel`,void 0),F([z({type:`boolean`,default:`false`,description:`When true, the user can type a value that does not match any option. The typed text is preserved on blur/Enter and surfaced through the value-changed event. When false (default), only values from the options list are accepted.`})],qa.prototype,`allowCustomValue`,void 0),F([z({type:`(option: ComboboxOption, inputValue: string) => boolean`,description:`Custom filter predicate. If omitted, defaults to case-insensitive substring match on option.label.`})],qa.prototype,`filterFn`,void 0),F([pn()],qa.prototype,`_open`,void 0),F([pn()],qa.prototype,`_inputValue`,void 0),F([pn()],qa.prototype,`_activeIndex`,void 0),qa=F([B(`value-changed`,{description:`Fired when the user selects an option from the list, clears the field, or commits a custom value when allowCustomValue is enabled.`,detail:`{ value: string }`}),B(`input-changed`,{description:`Fired on every keystroke in the text field. Use to drive async filtering by updating the options prop in response.`,detail:`{ value: string }`}),B(`focus`,{forwarded:!0}),B(`blur`,{forwarded:!0}),H(`quantic-combobox`)],qa);var Ja=hr,Ya={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},Xa=class extends V{constructor(){super(...arguments),this.color=Ja.Brand,this.size=Ya.Medium,this.rounded=!1,this.icon=!1}render(){return tr`
      <div class=${cr({main:!0,[`size--${this.size}`]:!0,[`color--${this.color}`]:!0,icon:this.icon,rounded:this.rounded})}>
        <slot name="before"></slot>
        <slot></slot>
        <slot name="after"></slot>
      </div>
    `}};Xa.meta={tag:`quantic-badge`,description:`Compact inline label for status, category, or count. Non-interactive — use quantic-button for clickable chips. Supports a wide color palette and an icon-only square mode.`,category:`display`,avoidWhen:[{when:`the label is dismissible or selectable`,useInstead:`quantic-tag`},{when:`the label is clickable`,useInstead:`quantic-button`},{when:`the value is a named system state`,useInstead:`quantic-status-badge`}],slots:{before:{description:`Content before the label (e.g. icon).`},"":{description:`Badge label text or icon.`},after:{description:`Content after the label.`}},relatedTo:[`quantic-tag`,`quantic-status-badge`]},Xa.styles=I`
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

    ${nt(vr(e=>`
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
  `,F([z({type:`BadgeColor`,options:Object.values(Ja),default:Ja.Brand,description:`Semantic color. Use "error" for failures, "success" for passing states, "warning" for caution, "brand" (default) for neutral highlights.`})],Xa.prototype,`color`,void 0),F([z({type:`BadgeSize`,options:Object.values(Ya),default:Ya.Medium,description:`Controls padding and font size.`})],Xa.prototype,`size`,void 0),F([z({type:`boolean`,default:`false`,description:`Applies a fully rounded (pill) border radius.`})],Xa.prototype,`rounded`,void 0),F([z({type:`boolean`,default:`false`,description:`Square icon-only mode — equal padding on all sides.`})],Xa.prototype,`icon`,void 0),Xa=F([H(`quantic-badge`)],Xa);var Za=class extends V{constructor(){super(...arguments),this.ariaLabel=null}render(){return L`
      <div class="group" part="group" role="group" aria-label=${this.ariaLabel??`Actions`}>
        <slot></slot>
      </div>
    `}};Za.meta={tag:`quantic-action-group`,description:`A row of related actions sharing one accessible name and a consistent gap. Takes quantic-button, and quantic-dropdown-menu or quantic-popover when the trigger is a button. Wraps when the row runs out of width. Gap: --quantic-component-action-group-gap. Use quantic-button-bar when the buttons should read as one joined control.`,category:`action`,avoidWhen:[{when:`the buttons are segments of a single control`,useInstead:`quantic-button-bar`}],accessibility:{providedByComponent:[`role=group with one accessible name across the row`],requiredFromConsumer:[`an ariaLabel naming the group`]},slots:{"":{description:`quantic-button elements, or a quantic-dropdown-menu or quantic-popover triggered by one.`}},parts:{group:{description:`The flex container, for a column layout or a different alignment.`}},relatedTo:[`quantic-button`,`quantic-button-bar`,`quantic-dialog-actions`,`quantic-dropdown-menu`,`quantic-popover`]},Za.styles=I`
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
  `,F([z({type:`string`,attribute:`aria-label`,description:`Accessible name for the group.`})],Za.prototype,`ariaLabel`,void 0),Za=F([H(`quantic-action-group`)],Za);var Qa=class extends Event{constructor(e,t,n,r){super(`context-request`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=n,this.subscribe=r??!1}};function $a(e){return e}var eo=class{constructor(e,t,n,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,t.context!==void 0){let e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&=(this.unsubscribe(),void 0)}dispatchRequest(){this.host.dispatchEvent(new Qa(this.context,this.host,this.t,this.subscribe))}},to=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}},no=class extends Event{constructor(e,t){super(`context-provider`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}},ro=class extends to{constructor(e,t,n){super(t.context===void 0?n:t.initialValue),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:n}]of this.subscriptions)t.has(e)||(t.add(e),n.dispatchEvent(new Qa(this.context,n,e,!0)));e.stopPropagation()},this.host=e,this.context=t.context===void 0?t:t.context,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener(`context-request`,this.onContextRequest),this.host.addEventListener(`context-provider`,this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new no(this.context,this.host))}};function io({context:e}){return(t,n)=>{let r=new WeakMap;if(typeof n==`object`)return{get(){return t.get.call(this)},set(e){return r.get(this).setValue(e),t.set.call(this,e)},init(t){return r.set(this,new ro(this,{context:e,initialValue:t})),t}};{t.constructor.addInitializer((t=>{r.set(t,new ro(t,{context:e}))}));let i=Object.getOwnPropertyDescriptor(t,n),a;if(i===void 0){let e=new WeakMap;a={get(){return e.get(this)},set(t){r.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=i.set;a={...i,set(t){r.get(this).setValue(t),e?.call(this,t)}}}Object.defineProperty(t,n,a);return}}}function ao({context:e,subscribe:t}){return(n,r)=>{typeof r==`object`?r.addInitializer((function(){new eo(this,{context:e,callback:e=>{n.set.call(this,e)},subscribe:t})})):n.constructor.addInitializer((n=>{new eo(n,{context:e,callback:e=>{n[r]=e},subscribe:t})}))}}var oo={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},so=$a(`button-bar.size`),co={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1,Home:`first`,End:`last`};function lo(e,t){if(!e.length)return null;if(t){let t=e.findIndex(e=>e.tabbable);if(t!==-1)return t}let n=e.findIndex(e=>e.active);return n===-1?0:n}function uo(e,t,n){let r=co[e];return r===void 0||n<2||t<0||t>=n?null:r===`first`?0:r===`last`?n-1:(t+r+n)%n}var fo=`quantic-button-bar-item, quantic-button-group-item`,po=class extends V{constructor(){super(...arguments),this.size=oo.Medium,this.ariaLabel=null,this.hasSynced=!1,this.defaultLabel=`Button bar`}connectedCallback(){super.connectedCallback(),this.disabledObserver=new MutationObserver(()=>this.syncFocusStop()),this.disabledObserver.observe(this,{attributeFilter:[`disabled`],subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.disabledObserver?.disconnect(),this.disabledObserver=void 0}get items(){return[...this.querySelectorAll(fo)].filter(e=>e.parentElement===this&&!e.disabled)}setFocusStop(e,t){e.forEach((e,n)=>{e.tabbable=n===t})}syncFocusStop(){let e=this.items,t=lo(e,this.hasSynced);t!==null&&(this.hasSynced=!0,this.setFocusStop(e,t))}handleFocusIn(e){let t=this.items,n=t.findIndex(t=>t.contains(e.target));n!==-1&&this.setFocusStop(t,n)}handleKeydown(e){let t=this.items,n=t.findIndex(t=>t.contains(e.target)),r=uo(e.key,n,t.length);r!==null&&(e.preventDefault(),this.setFocusStop(t,r),t[r].focus())}render(){return L`
      <div
        class="container"
        role="toolbar"
        aria-label=${this.ariaLabel??this.defaultLabel}
        @keydown=${this.handleKeydown}
        @focusin=${this.handleFocusIn}
      >
        <slot @slotchange=${()=>this.syncFocusStop()}></slot>
      </div>
    `}};po.meta={tag:`quantic-button-bar`,description:`Toolbar of related buttons joined into one cohesive control, with shared sizing. Use for switching between views or modes, and for a compact run of icon actions. Items carry aria-pressed via active, so a set can behave as exclusive options or as independent toggles. Focus follows the toolbar pattern: one tab stop, arrow keys move between items, Home and End jump to the ends. Prefer quantic-button for a standalone action, and quantic-tabs when each segment reveals a panel.`,category:`action`,avoidWhen:[{when:`the buttons are unrelated actions rather than segments of one control`,useInstead:`quantic-action-group`}],accessibility:{providedByComponent:[`one accessible name for the bar`,`arrow keys move between items`],requiredFromConsumer:[`an ariaLabel naming what the bar controls`]},slots:{"":{description:`One or more quantic-button-bar-item elements.`}},relatedTo:[`quantic-button`]},po.styles=I`
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
  `,F([io({context:so}),z({type:`ButtonBarSize`,options:Object.values(oo),default:oo.Medium,description:`Size applied to all child items via context.`})],po.prototype,`size`,void 0),F([z({type:`string`,attribute:`aria-label`,description:`Accessible label for the group.`})],po.prototype,`ariaLabel`,void 0),po=F([H(`quantic-button-bar`)],po);var mo=class extends V{constructor(){super(...arguments),this.tabbable=!0,this.disabled=!1,this.active=!1,this.ariaLabel=null}focus(e){this.innerButton?.focus(e)}render(){return L`
      <button
        type="button"
        class=${cr({main:!0,[`size--${this.size}`]:!!this.size,"is-active":this.active})}
        tabindex=${this.disabled||!this.tabbable?-1:0}
        ?disabled=${this.disabled}
        aria-pressed=${this.active?`true`:`false`}
        aria-label=${lr(this.ariaLabel??void 0)}
      >
        <div class="content">
          <slot></slot>
        </div>
      </button>
    `}};mo.meta={tag:`quantic-button-bar-item`,description:`Single segment within a quantic-button-bar. Renders as a native button with shared sizing from the parent context and a pressed state via active.`,category:`action`,subComponentOf:`quantic-button-bar`,slots:{"":{description:`Button label or icon content.`}},relatedTo:[`quantic-button-bar`,`quantic-button`]},mo.styles=I`
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
  `,F([ao({context:so,subscribe:!0})],mo.prototype,`size`,void 0),F([pn()],mo.prototype,`tabbable`,void 0),F([hn(`button`)],mo.prototype,`innerButton`,void 0),F([z({type:`boolean`,default:`false`,description:`Prevents interaction and reduces opacity.`,reflect:!0})],mo.prototype,`disabled`,void 0),F([z({type:`boolean`,default:`false`,description:`Marks this item as the currently selected/active option.`,reflect:!0})],mo.prototype,`active`,void 0),F([z({type:`string`,attribute:`aria-label`,description:`Accessible label for the inner button. Required when the item holds only an icon.`})],mo.prototype,`ariaLabel`,void 0),mo=F([H(`quantic-button-bar-item`)],mo);var ho={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},go=class extends La(V){constructor(){super(),this.checked=!1,this.required=!1,this.disabled=!1,this.invalid=!1,this.indeterminate=!1,this.label=``,this.name=``,this.size=ho.Medium,this.defaultChecked=!1,this.defaultIndeterminate=!1,this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.defaultChecked=this.hasAttribute(`checked`),this.defaultIndeterminate=this.hasAttribute(`indeterminate`)}forwardNative(e){let t=e.target;this.checked=t.checked,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}updated(e){super.updated(e);let t=this.renderRoot.querySelector(`input`);t&&(t.indeterminate=this.indeterminate,e.has(`checked`)&&(t.checked=this.checked)),e.has(`checked`)&&this.internals.setFormValue(this.checked?`on`:null)}dispatchValueChanged(e){this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{checked:this.checked,indeterminate:this.indeterminate},bubbles:!0,composed:!0}))}formResetCallback(){let e=this.renderRoot.querySelector(`input`);this.checked=this.defaultChecked,this.indeterminate=this.defaultIndeterminate,this.internals.setFormValue(this.defaultChecked?`on`:null),e&&(e.checked=this.defaultChecked,e.indeterminate=this.defaultIndeterminate)}formStateRestoreCallback(e){this.checked=e===`on`,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}get computedLabel(){return this.ariaLabel||this.label}render(){let e=cr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({label:this.computedLabel,invalid:this.invalid});return L`
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
    `}};go.meta={tag:`quantic-checkbox`,description:`Form-associated checkbox for selecting one or more options from a set. Supports checked, indeterminate, and disabled states with full form integration.`,category:`form`,avoidWhen:[{when:`the control applies a setting immediately rather than on submit`,useInstead:`quantic-toggle`}],accessibility:{providedByComponent:[`form association`,`Space toggles`,`checked and indeterminate state reflected`],requiredFromConsumer:[`a label, via the label prop or by wrapping in quantic-field`]},slots:{"":{description:`Label content. Falls back to the label property if empty.`}},relatedTo:[`quantic-field`,`quantic-checkbox-group`]},go.formAssociated=!0,go.styles=I`
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
  `,F([z({type:`boolean`,default:`false`,reflect:!0,description:`Whether the checkbox is checked.`})],go.prototype,`checked`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Marks the checkbox as required for form validation.`})],go.prototype,`required`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction and applies disabled styling.`})],go.prototype,`disabled`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling when the field fails validation.`})],go.prototype,`invalid`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Shows an indeterminate (partial-selection) state.`})],go.prototype,`indeterminate`,void 0),F([z({type:`string`,default:`''`,description:`Visible label text. Overridden by slotted content.`,copyRule:`control-label`})],go.prototype,`label`,void 0),F([z({type:`string`,default:`''`,description:`Name submitted with form data.`})],go.prototype,`name`,void 0),F([z({type:`CheckboxSize`,options:Object.values(ho),default:ho.Medium,description:`Controls the size of the checkbox box and label text.`})],go.prototype,`size`,void 0),go=F([B(`value-changed`,{description:`Fired whenever the input's value is updated (on input & change).`,detail:`{ checked: boolean, indeterminate: boolean }`}),B(`input`,{forwarded:!0}),B(`change`,{forwarded:!0}),B(`focus`,{forwarded:!0}),B(`blur`,{forwarded:!0}),B(`keydown`,{forwarded:!0}),B(`keyup`,{forwarded:!0}),H(`quantic-checkbox`)],go);var _o={Small:`sm`,Medium:`md`,Large:`lg`,XLarge:`xl`},vo={None:`none`,Subtle:`subtle`,Opaque:`opaque`},yo={Dialog:`dialog`,AlertDialog:`alertdialog`},bo=class extends V{constructor(){super(...arguments),this.visible=!1,this.variant=vo.Opaque}render(){return L`<div class="backdrop backdrop--${this.variant}"></div>`}};bo.meta={tag:`quantic-dialog-backdrop`,description:`Semi-transparent overlay rendered behind quantic-dialog. Internal sub-component — do not use directly.`,category:`feedback`,relatedTo:[`quantic-dialog`]},bo.styles=I`
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
  `,F([z({type:`boolean`,default:`false`,reflect:!0,description:`Whether the backdrop is visible.`})],bo.prototype,`visible`,void 0),F([z({type:`DialogBackdrop`,options:Object.values(vo),default:vo.Opaque,description:`Visual style of the backdrop overlay.`})],bo.prototype,`variant`,void 0),bo=F([H(`quantic-dialog-backdrop`)],bo);var xo=class extends Yn(V,[`pretitle`,`subtitle`]){constructor(){super(...arguments),this.level=`2`}render(){return L`
      <div class="main">
        <hgroup>
          <slot name="pretitle" class="pretitle"></slot>
          <div class="title" role="heading" aria-level=${this.level}>
            <slot></slot>
          </div>
          <slot name="subtitle" class="subtitle"></slot>
        </hgroup>
      </div>
    `}};xo.meta={tag:`quantic-dialog-title`,description:`Header/title bar sub-component for quantic-dialog. Renders a semantic heading with optional pretitle and subtitle slots.`,category:`feedback`,subComponentOf:`quantic-dialog`,slots:{pretitle:{description:`Small label displayed above the main title.`,copyRule:`title-fragment`},"":{description:`Main title text.`},subtitle:{description:`Supplementary text displayed below the title.`,copyRule:`title-fragment`}},relatedTo:[`quantic-dialog`]},xo.styles=I`
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
  `,F([z({type:`"1" | "2" | "3" | "4" | "5" | "6"`,default:`"2"`,description:`Heading level for the title element.`})],xo.prototype,`level`,void 0),xo=F([H(`quantic-dialog-title`)],xo),Za.ensureDefined();var So=class extends V{render(){return tr`
      <quantic-action-group aria-label="">
        <slot></slot>
      </quantic-action-group>
    `}};So.meta={tag:`quantic-dialog-actions`,description:`Footer actions bar for quantic-dialog. Lays action buttons out as a quantic-action-group, flush to the right.`,category:`feedback`,subComponentOf:`quantic-dialog`,slots:{"":{description:`Action buttons, typically quantic-button elements.`}},relatedTo:[`quantic-dialog`,`quantic-button`,`quantic-action-group`]},So.styles=I`
    :host {
      display: block;
    }

    quantic-action-group {
      width: fit-content;
      margin-inline-start: auto;
    }
  `,So=F([H(`quantic-dialog-actions`)],So);var Co=[`input:not([inert]):not([inert] *)`,`select:not([inert]):not([inert] *)`,`textarea:not([inert]):not([inert] *)`,`a[href]:not([inert]):not([inert] *)`,`area[href]:not([inert]):not([inert] *)`,`button:not([inert]):not([inert] *)`,`[tabindex]:not(slot):not([inert]):not([inert] *)`,`audio[controls]:not([inert]):not([inert] *)`,`video[controls]:not([inert]):not([inert] *)`,`[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)`,`details>summary:first-of-type:not([inert]):not([inert] *)`,`details:not([inert]):not([inert] *)`],wo=Co.join(`,`),To=typeof Element>`u`,Eo=To?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Do=!To&&Element.prototype.getRootNode?function(e){return e==null||e.getRootNode==null?void 0:e.getRootNode()}:function(e){return e?.ownerDocument},Oo=function(e,t){t===void 0&&(t=!0);var n=e==null||e.getAttribute==null?void 0:e.getAttribute(`inert`);return n===``||n===`true`||t&&e&&(typeof e.closest==`function`?e.closest(`[inert]`):Oo(e.parentNode))},ko=function(e){var t,n=e==null||e.getAttribute==null||(t=e.getAttribute(`contenteditable`))==null?void 0:t.toLowerCase();return n===``||n===`true`||n===`plaintext-only`},Ao=function(e,t,n){if(Oo(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(wo));return t&&Eo.call(e,wo)&&r.unshift(e),r=r.filter(n),r},jo=function(e,t,n){for(var r=[],i=Array.from(e);i.length;){var a=i.shift();if(!Oo(a,!1)){if(a.tagName===`SLOT`){var o=a.assignedElements(),s=jo(o.length?o:a.children,!0,n);n.flatten?r.push.apply(r,s):r.push({scopeParent:a,candidates:s})}else{Eo.call(a,wo)&&n.filter(a)&&(t||!e.includes(a))&&r.push(a);var c=a.shadowRoot||typeof n.getShadowRoot==`function`&&n.getShadowRoot(a),l=!Oo(c,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(a));if(c&&l){var u=jo(c===!0?a.children:c.children,!0,n);n.flatten?r.push.apply(r,u):r.push({scopeParent:a,candidates:u})}else i.unshift.apply(i,a.children)}}}return r},Mo=function(e){return!isNaN(parseInt(e.getAttribute(`tabindex`),10))},No=function(e){if(!e)throw Error(`No node provided`);return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||ko(e))&&!Mo(e)?0:e.tabIndex},Po=function(e,t){var n=No(e);return n<0&&t&&!Mo(e)?0:n},Fo=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Io=function(e){return e.tagName===`INPUT`},Lo=function(e){return Io(e)&&e.type===`hidden`},K=function(e){return e.tagName===`DETAILS`&&Array.prototype.slice.apply(e.children).some(function(e){return e.tagName===`SUMMARY`})},Ro=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},zo=function(e){if(!e.name)return!0;var t=e.form||Do(e),n=function(e){return t.querySelectorAll(`input[type="radio"][name="`+e+`"]`)},r;if(typeof window<`u`&&window.CSS!==void 0&&typeof window.CSS.escape==`function`)r=n(window.CSS.escape(e.name));else try{r=n(e.name)}catch(e){return console.error(`Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s`,e.message),!1}var i=Ro(r,e.form);return!i||i===e},Bo=function(e){return Io(e)&&e.type===`radio`},Vo=function(e){return Bo(e)&&!zo(e)},Ho=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return n===0&&r===0},Uo=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if(n===`full-native`&&`checkVisibility`in e)return!e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});var i=getComputedStyle(e).visibility;if(i===`hidden`||i===`collapse`)return!0;var a=Eo.call(e,`details>summary:first-of-type`)?e.parentElement:e;if(Eo.call(a,`details:not([open]) *`))return!0;if(!n||n===`full`||n===`full-native`||n===`legacy-full`){if(typeof r==`function`){for(var o=e;e;){var s=e.parentElement,c=Do(e);if(s&&!s.shadowRoot&&r(s)===!0)return Ho(e);e=e.assignedSlot?e.assignedSlot:!s&&c!==e.ownerDocument?c.host:s}e=o}if(e.isConnected)return!e.getClientRects().length;if(n!==`legacy-full`)return!0}else if(n===`non-zero-area`)return Ho(e);return!1},Wo=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName===`FIELDSET`&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if(r.tagName===`LEGEND`)return Eo.call(t,`fieldset[disabled] *`)?!0:!r.contains(e)}return!0}t=t.parentElement}return!1},Go=function(e,t){return!(t.disabled||Lo(t)||Uo(t,e)||K(t)||Wo(t))},Ko=function(e,t){return!(Vo(t)||No(t)<0||!Go(e,t))},qo=function(e){var t=parseInt(e.getAttribute(`tabindex`),10);return!!(isNaN(t)||t>=0)},Jo=function(e){var t=[],n=[];return e.forEach(function(e,r){var i=!!e.scopeParent,a=i?e.scopeParent:e,o=Po(a,i),s=i?Jo(e.candidates):a;o===0?i?t.push.apply(t,s):t.push(a):n.push({documentOrder:r,tabIndex:o,item:e,isScope:i,content:s})}),n.sort(Fo).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(t)},Yo=function(e,t){return t||={},Jo(t.getShadowRoot?jo([e],t.includeContainer,{filter:Ko.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:qo}):Ao(e,t.includeContainer,Ko.bind(null,t)))},Xo=function(e,t){return t||={},t.getShadowRoot?jo([e],t.includeContainer,{filter:Go.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):Ao(e,t.includeContainer,Go.bind(null,t))},Zo=function(e,t){if(t||={},!e)throw Error(`No node provided`);return Eo.call(e,wo)!==!1&&Ko(t,e)},Qo=Co.concat(`iframe:not([inert]):not([inert] *)`).join(`,`),$o=function(e,t){if(t||={},!e)throw Error(`No node provided`);return Eo.call(e,Qo)!==!1&&Go(t,e)};function es(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ts(e){if(Array.isArray(e))return es(e)}function ns(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=ds(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function rs(e,t,n){return(t=us(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function is(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function as(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function os(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ss(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?os(Object(n),!0).forEach(function(t){rs(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):os(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function cs(e){return ts(e)||is(e)||ds(e)||as()}function ls(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function us(e){var t=ls(e,`string`);return typeof t==`symbol`?t:t+``}function ds(e,t){if(e){if(typeof e==`string`)return es(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?es(e,t):void 0}}var fs={getActiveTrap:function(e){return e?.length>0?e[e.length-1]:null},activateTrap:function(e,t){t!==fs.getActiveTrap(e)&&fs.pauseTrap(e);var n=e.indexOf(t);n===-1||e.splice(n,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);n!==-1&&e.splice(n,1),fs.unpauseTrap(e)},pauseTrap:function(e){fs.getActiveTrap(e)?._setPausedState(!0)},unpauseTrap:function(e){var t=fs.getActiveTrap(e);t&&!t._isManuallyPaused()&&t._setPausedState(!1)}},ps=function(e){return e.tagName&&e.tagName.toLowerCase()===`input`&&typeof e.select==`function`},ms=function(e){return e?.key===`Escape`||e?.key===`Esc`||e?.keyCode===27},hs=function(e){return e?.key===`Tab`||e?.keyCode===9},gs=function(e){return hs(e)&&!e.shiftKey},_s=function(e){return hs(e)&&e.shiftKey},vs=function(e){return setTimeout(e,0)},ys=function(e){var t=[...arguments].slice(1);return typeof e==`function`?e.apply(void 0,t):e},bs=function(e){return e.target.shadowRoot&&typeof e.composedPath==`function`?e.composedPath()[0]:e.target},xs=[],Ss=function(e,t){var n=t?.document||document,r=t?.trapStack||xs,i=ss({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isolateSubtrees:!1,isKeyForward:gs,isKeyBackward:_s},t),a={containers:[],containerGroups:[],tabbableGroups:[],adjacentElements:new Set,alreadySilent:new Set,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},o,s=function(e,t,n){return e&&e[t]!==void 0?e[t]:i[n||t]},c=function(e,t){var n=typeof t?.composedPath==`function`?t.composedPath():void 0;return a.containerGroups.findIndex(function(t){var r=t.container,i=t.tabbableNodes;return r.contains(e)||n?.includes(r)||i.find(function(t){return t===e})})},l=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.hasFallback,a=r!==void 0&&r,o=t.params,s=o===void 0?[]:o,c=i[e];if(typeof c==`function`&&(c=c.apply(void 0,cs(s))),c===!0&&(c=void 0),!c){if(c===void 0||c===!1)return c;throw Error(`\`${e}\` was specified but was not a node, or did not return a node`)}var l=c;if(typeof c==`string`){try{l=n.querySelector(c)}catch(t){throw Error(`\`${e}\` appears to be an invalid selector; error="${t.message}"`)}if(!l&&!a)throw Error(`\`${e}\` as selector refers to no known node`)}return l},u=function(){var e=l(`initialFocus`,{hasFallback:!0});if(e===!1)return!1;if(e===void 0||e&&!$o(e,i.tabbableOptions)){if(c(n.activeElement)>=0)e=n.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||l(`fallbackFocus`)}}else e===null&&(e=l(`fallbackFocus`));if(!e)throw Error(`Your focus-trap needs to have at least one focusable element`);return e},d=function(){if(a.containerGroups=a.containers.map(function(e){var t=Yo(e,i.tabbableOptions),n=Xo(e,i.tabbableOptions),r=t.length>0?t[0]:void 0,a=t.length>0?t[t.length-1]:void 0,o=n.find(function(e){return Zo(e)}),s=n.slice().reverse().find(function(e){return Zo(e)});return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:!!t.find(function(e){return No(e)>0}),firstTabbableNode:r,lastTabbableNode:a,firstDomTabbableNode:o,lastDomTabbableNode:s,nextTabbableNode:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=t.indexOf(e);return i<0?r?n.slice(n.indexOf(e)+1).find(function(e){return Zo(e)}):n.slice(0,n.indexOf(e)).reverse().find(function(e){return Zo(e)}):t[i+(r?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!l(`fallbackFocus`))throw Error(`Your focus-trap must have at least one container with at least one tabbable node in it at all times`);if(a.containerGroups.find(function(e){return e.posTabIndexesFound})&&a.containerGroups.length>1)throw Error(`At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.`)},f=function(e){var t=e.activeElement;if(t)return t.shadowRoot&&t.shadowRoot.activeElement!==null?f(t.shadowRoot):t},p=function(e){e!==!1&&e!==f(document)&&(!e||!e.focus?p(u()):(e.focus({preventScroll:!!i.preventScroll}),a.mostRecentlyFocusedNode=e,ps(e)&&e.select()))},m=function(e){var t=l(`setReturnFocus`,{params:[e]});return t||t!==!1&&e},h=function(e){var t=e.target,n=e.event,r=e.isBackward,o=r!==void 0&&r;t||=bs(n),d();var s=null;if(a.tabbableGroups.length>0){var u=c(t,n),f=u>=0?a.containerGroups[u]:void 0;if(u<0)s=o?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(o){var p=a.tabbableGroups.findIndex(function(e){var n=e.firstTabbableNode;return t===n});if(p<0&&(f.container===t||$o(t,i.tabbableOptions)&&!Zo(t,i.tabbableOptions)&&!f.nextTabbableNode(t,!1))&&(p=u),p>=0){var m=p===0?a.tabbableGroups.length-1:p-1,h=a.tabbableGroups[m];s=No(t)>=0?h.lastTabbableNode:h.lastDomTabbableNode}else hs(n)||(s=f.nextTabbableNode(t,!1))}else{var g=a.tabbableGroups.findIndex(function(e){var n=e.lastTabbableNode;return t===n});if(g<0&&(f.container===t||$o(t,i.tabbableOptions)&&!Zo(t,i.tabbableOptions)&&!f.nextTabbableNode(t))&&(g=u),g>=0){var _=g===a.tabbableGroups.length-1?0:g+1,v=a.tabbableGroups[_];s=No(t)>=0?v.firstTabbableNode:v.firstDomTabbableNode}else hs(n)||(s=f.nextTabbableNode(t))}}else s=l(`fallbackFocus`);return s},g=function(e){c(bs(e),e)>=0||(ys(i.clickOutsideDeactivates,e)?o.deactivate({returnFocus:i.returnFocusOnDeactivate}):ys(i.allowOutsideClick,e)||e.preventDefault())},_=function(e){var t=bs(e),n=c(t,e)>=0;if(n||t instanceof Document)n&&(a.mostRecentlyFocusedNode=t);else{e.stopImmediatePropagation();var r,o=!0;if(a.mostRecentlyFocusedNode){if(No(a.mostRecentlyFocusedNode)>0){var s=c(a.mostRecentlyFocusedNode),l=a.containerGroups[s].tabbableNodes;if(l.length>0){var d=l.findIndex(function(e){return e===a.mostRecentlyFocusedNode});d>=0&&(i.isKeyForward(a.recentNavEvent)?d+1<l.length&&(r=l[d+1],o=!1):d-1>=0&&(r=l[d-1],o=!1))}}else a.containerGroups.some(function(e){return e.tabbableNodes.some(function(e){return No(e)>0})})||(o=!1)}else o=!1;o&&(r=h({target:a.mostRecentlyFocusedNode,isBackward:i.isKeyBackward(a.recentNavEvent)})),p(r||a.mostRecentlyFocusedNode||u())}a.recentNavEvent=void 0},v=function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];a.recentNavEvent=e;var n=h({event:e,isBackward:t});n&&(hs(e)&&e.preventDefault(),p(n))},y=function(e){(i.isKeyForward(e)||i.isKeyBackward(e))&&v(e,i.isKeyBackward(e))},b=function(e){ms(e)&&ys(i.escapeDeactivates,e)!==!1&&(e.preventDefault(),o.deactivate())},x=function(e){c(bs(e),e)>=0||ys(i.clickOutsideDeactivates,e)||ys(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},S=function(){if(a.active)return fs.activateTrap(r,o),a.delayInitialFocusTimer=i.delayInitialFocus?vs(function(){p(u())}):p(u()),n.addEventListener(`focusin`,_,!0),n.addEventListener(`mousedown`,g,{capture:!0,passive:!1}),n.addEventListener(`touchstart`,g,{capture:!0,passive:!1}),n.addEventListener(`click`,x,{capture:!0,passive:!1}),n.addEventListener(`keydown`,y,{capture:!0,passive:!1}),n.addEventListener(`keydown`,b),o},C=function(e){a.active&&!a.paused&&o._setSubtreeIsolation(!1),a.adjacentElements.clear(),a.alreadySilent.clear();var t=new Set,n=new Set,r=ns(e),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;t.add(s);for(var c=typeof ShadowRoot<`u`&&s.getRootNode()instanceof ShadowRoot,l=s;l;){t.add(l);var u=l.parentElement,d=[];u?d=u.children:!u&&c&&(d=l.getRootNode().children,u=l.getRootNode().host,c=typeof ShadowRoot<`u`&&u.getRootNode()instanceof ShadowRoot);var f=ns(d),p;try{for(f.s();!(p=f.n()).done;){var m=p.value;n.add(m)}}catch(e){f.e(e)}finally{f.f()}l=u}}}catch(e){r.e(e)}finally{r.f()}t.forEach(function(e){n.delete(e)}),a.adjacentElements=n},w=function(){if(a.active)return n.removeEventListener(`focusin`,_,!0),n.removeEventListener(`mousedown`,g,!0),n.removeEventListener(`touchstart`,g,!0),n.removeEventListener(`click`,x,!0),n.removeEventListener(`keydown`,y,!0),n.removeEventListener(`keydown`,b),o},T=typeof window<`u`&&`MutationObserver`in window?new MutationObserver(function(e){e.some(function(e){return Array.from(e.removedNodes).some(function(e){return e===a.mostRecentlyFocusedNode})})&&p(u())}):void 0,E=function(){T&&(T.disconnect(),a.active&&!a.paused&&a.containers.map(function(e){T.observe(e,{subtree:!0,childList:!0})}))};return o={get active(){return a.active},get paused(){return a.paused},activate:function(e){if(a.active)return this;var t=s(e,`onActivate`),c=s(e,`onPostActivate`),l=s(e,`checkCanFocusTrap`),u=fs.getActiveTrap(r),p=!1;if(u&&!u.paused){var m;(m=u._setSubtreeIsolation)==null||m.call(u,!1),p=!0}try{l||d(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=f(n),t?.();var h=function(){l&&d(),S(),E(),i.isolateSubtrees&&o._setSubtreeIsolation(!0),c?.()};if(l)return l(a.containers.concat()).then(h,h),this;h()}catch(e){if(u===fs.getActiveTrap(r)&&p){var g;(g=u._setSubtreeIsolation)==null||g.call(u,!0)}throw e}return this},deactivate:function(e){if(!a.active)return this;var t=ss({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,a.paused||o._setSubtreeIsolation(!1),a.alreadySilent.clear(),w(),a.active=!1,a.paused=!1,E(),fs.deactivateTrap(r,o);var n=s(t,`onDeactivate`),c=s(t,`onPostDeactivate`),l=s(t,`checkCanReturnFocus`),u=s(t,`returnFocus`,`returnFocusOnDeactivate`);n?.();var d=function(){vs(function(){u&&p(m(a.nodeFocusedBeforeActivation)),c?.()})};return u&&l?(l(m(a.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){return a.active?(a.manuallyPaused=!0,this._setPausedState(!0,e)):this},unpause:function(e){return!a.active||(a.manuallyPaused=!1,r[r.length-1]!==this)?this:this._setPausedState(!1,e)},updateContainerElements:function(e){return a.containers=[].concat(e).filter(Boolean).map(function(e){return typeof e==`string`?n.querySelector(e):e}),i.isolateSubtrees&&C(a.containers),a.active&&(d(),i.isolateSubtrees&&!a.paused&&o._setSubtreeIsolation(!0)),E(),this}},Object.defineProperties(o,{_isManuallyPaused:{value:function(){return a.manuallyPaused}},_setPausedState:{value:function(e,t){if(a.paused===e)return this;if(a.paused=e,e){var n=s(t,`onPause`),r=s(t,`onPostPause`);n?.(),w(),E(),o._setSubtreeIsolation(!1),r?.()}else{var i=s(t,`onUnpause`),c=s(t,`onPostUnpause`);i?.(),o._setSubtreeIsolation(!0),d(),S(),E(),c?.()}return this}},_setSubtreeIsolation:{value:function(e){i.isolateSubtrees&&a.adjacentElements.forEach(function(t){if(e)switch(i.isolateSubtrees){case`aria-hidden`:(t.ariaHidden===`true`||t.getAttribute(`aria-hidden`)?.toLowerCase()===`true`)&&a.alreadySilent.add(t),t.setAttribute(`aria-hidden`,`true`);break;default:(t.inert||t.hasAttribute(`inert`))&&a.alreadySilent.add(t),t.setAttribute(`inert`,!0)}else if(!a.alreadySilent.has(t))switch(i.isolateSubtrees){case`aria-hidden`:t.removeAttribute(`aria-hidden`);break;default:t.removeAttribute(`inert`)}})}}}),o.updateContainerElements(e),o},Cs=500;bo.ensureDefined(),ur.ensureDefined(),Or.ensureDefined();var ws=class extends Yn(V,[`header`,`footer`]){constructor(){super(...arguments),this.open=!1,this.size=_o.Medium,this.fullscreen=!1,this.showCloseButton=!0,this.backdrop=vo.Opaque,this.persistent=!1,this.role=yo.Dialog,this.ariaLabel=null,this.dialogId=br(`dialog`),this.headerId=br(`dialog-title`),this.originalOverflow=``,this.originalPaddingRight=``,this.backdropPointerDownOutside=!1,this.handleTriggerClick=()=>{this.show()},this.handleEscape=e=>{e.key===`Escape`&&this.open&&(e.stopPropagation(),this.persistent||this.hide())},this.handleBackdropPointerDown=e=>{this.backdropPointerDownOutside=e.target===this.wrapperElement},this.handleBackdropPointerUp=e=>{this.persistent||(this.backdropPointerDownOutside&&e.target===this.wrapperElement&&this.hide(),this.backdropPointerDownOutside=!1)},this.hide=async()=>{if(!this.open||this.persistent)return;let e=new Event(`before-close`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.addEventListener(`dialog-close`,this.hide),this.addEventListener(`keydown`,this.handleEscape)}disconnectedCallback(){if(super.disconnectedCallback(),this.removeEventListener(`dialog-close`,this.hide),this.removeEventListener(`keydown`,this.handleEscape),this.unlockBodyScroll(),this.focusTrap)try{this.focusTrap.deactivate()}catch(e){console.error(`Failed to deactivate focus trap:`,e)}finally{this.focusTrap=null}}updated(e){super.updated(e),e.has(`open`)&&(this.open?this._activate():e.get(`open`)&&this._deactivate())}get triggerElement(){return this.triggerSlot?.assignedElements({flatten:!0})[0]}get hasHeaderContent(){return this.headerSlot?.assignedNodes({flatten:!0}).some(e=>e.nodeType!==Node.TEXT_NODE||e.textContent?.trim())??!1}handleSlotChange(){let e=this.triggerElement;e&&(e.setAttribute(`aria-controls`,this.dialogId),e.setAttribute(`aria-haspopup`,`dialog`),e.setAttribute(`aria-expanded`,this.open?`true`:`false`))}lockBodyScroll(){if(typeof document>`u`)return;let e=window.innerWidth-document.documentElement.clientWidth;this.originalOverflow=document.body.style.overflow,this.originalPaddingRight=document.body.style.paddingRight,document.body.style.overflow=`hidden`,e>0&&(document.body.style.paddingRight=`${e}px`)}unlockBodyScroll(){typeof document<`u`&&(document.body.style.overflow=this.originalOverflow,document.body.style.paddingRight=this.originalPaddingRight)}updateTriggerAria(){let e=this.triggerElement;e&&e.setAttribute(`aria-expanded`,this.open?`true`:`false`)}async waitForDialogRender(){await this.updateComplete,await new Promise(e=>{let t=()=>{this.wrapperElement?.removeEventListener(`transitionend`,t),e()};this.wrapperElement?.addEventListener(`transitionend`,t),setTimeout(t,Cs)})}async show(){if(this.open)return;let e=new Event(`before-open`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!0)}async toggle(){this.open?await this.hide():await this.show()}async _activate(){if(this.updateTriggerAria(),this.lockBodyScroll(),this.backdropElement&&(await this.backdropElement.updateComplete,this.backdropElement.visible=!0),this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:!0},bubbles:!0,composed:!0})),await this.updateComplete,this.mainElement)try{this.focusTrap=Ss(this.mainElement,{escapeDeactivates:!1,clickOutsideDeactivates:!1,allowOutsideClick:!0,returnFocusOnDeactivate:!0,fallbackFocus:this.mainElement,tabbableOptions:{getShadowRoot:!0}}),this.focusTrap.activate()}catch(e){console.error(`Failed to activate focus trap:`,e),this.focusTrap=null}await this.waitForDialogRender(),this.dispatchEvent(new Event(`after-open`,{bubbles:!0,composed:!0}))}async _deactivate(){if(this.updateTriggerAria(),this.focusTrap)try{this.focusTrap.deactivate()}catch(e){console.error(`Failed to deactivate focus trap:`,e)}finally{this.focusTrap=null}this.backdropElement&&(this.backdropElement.visible=!1),this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:!1},bubbles:!0,composed:!0})),await this.waitForDialogRender(),this.unlockBodyScroll(),this.dispatchEvent(new Event(`after-close`,{bubbles:!0,composed:!0}))}render(){return L`
      <div class="trigger" @click=${this.handleTriggerClick}>
        <slot name="trigger" @slotchange=${this.handleSlotChange}></slot>
      </div>
      <quantic-dialog-backdrop
        ?visible=${this.open}
        variant=${this.backdrop}
      ></quantic-dialog-backdrop>
      <div
        class=${cr({wrapper:!0,"wrapper--fullscreen":this.fullscreen})}
        @pointerdown=${this.handleBackdropPointerDown}
        @pointerup=${this.handleBackdropPointerUp}
      >
        <div
          class=${cr({main:!0,fullscreen:this.fullscreen,[`size--${this.size}`]:!this.fullscreen})}
          role=${this.role}
          aria-modal="true"
          aria-labelledby=${lr(this.hasHeaderContent?this.headerId:void 0)}
          aria-label=${lr(this.ariaLabel??void 0)}
          id=${this.dialogId}
          tabindex="-1"
        >
          ${this.showCloseButton&&!this.persistent?L`<quantic-button
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
    `}};ws.meta={tag:`quantic-dialog`,description:`Modal overlay dialog with focus trap, scroll lock, and animated entrance. Use quantic-dialog-title in the header slot and quantic-dialog-actions in the footer slot.`,category:`feedback`,avoidWhen:[{when:`the dialog only confirms or cancels one action`,useInstead:`quantic-confirm-dialog`},{when:`the content is contextual and does not need to block the page`,useInstead:`quantic-popover`},{when:`the page should stay usable while the content is open, such as a detail or chat panel`,useInstead:`quantic-drawer`}],accessibility:{providedByComponent:[`focus trap while open`,`focus restored to the trigger on close`,`Escape dismisses`,`scroll lock`],requiredFromConsumer:[`a title, via quantic-dialog-title in the header slot or the ariaLabel prop`]},slots:{trigger:{description:`Element that opens the dialog when clicked.`},header:{description:`Dialog header — place quantic-dialog-title here.`},"":{description:`Main dialog body content.`},footer:{description:`Dialog footer — place quantic-dialog-actions here.`}},relatedTo:[`quantic-button`]},ws.styles=I`
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
  `,F([z({type:`boolean`,default:`false`,reflect:!0,description:`Whether the dialog is visible.`})],ws.prototype,`open`,void 0),F([z({type:`DialogSize`,options:Object.values(_o),default:_o.Medium,description:`Maximum width of the dialog panel.`})],ws.prototype,`size`,void 0),F([z({type:`boolean`,default:`false`,description:`Expands the dialog to fill the viewport, ignoring size.`})],ws.prototype,`fullscreen`,void 0),F([z({type:`boolean`,default:`true`,description:`Shows a built-in close button in the top-right corner.`})],ws.prototype,`showCloseButton`,void 0),F([z({type:`DialogBackdrop`,options:Object.values(vo),default:vo.Opaque,description:`Style of the backdrop overlay.`})],ws.prototype,`backdrop`,void 0),F([z({type:`boolean`,default:`false`,description:`Prevents the dialog from being closed via Escape or backdrop click.`})],ws.prototype,`persistent`,void 0),F([z({type:`DialogRole`,options:Object.values(yo),default:yo.Dialog,description:`ARIA role for the dialog element. Use "alertdialog" for confirmation dialogs.`})],ws.prototype,`role`,void 0),F([z({type:`string`,attribute:`aria-label`,description:`Accessible label when the dialog has no visible heading.`})],ws.prototype,`ariaLabel`,void 0),F([hn(`quantic-dialog-backdrop`)],ws.prototype,`backdropElement`,void 0),F([hn(`.wrapper`)],ws.prototype,`wrapperElement`,void 0),F([hn(`.main`)],ws.prototype,`mainElement`,void 0),F([hn(`slot[name="trigger"]`)],ws.prototype,`triggerSlot`,void 0),F([hn(`slot[name="header"]`)],ws.prototype,`headerSlot`,void 0),ws=F([B(`open-changed`,{description:`Fired when the dialog open state changes.`,detail:`{ open: boolean }`}),B(`before-open`,{description:`Fired before the dialog opens.`}),B(`after-open`,{description:`Fired after the dialog opens and animations complete.`}),B(`before-close`,{description:`Fired before the dialog closes.`}),B(`after-close`,{description:`Fired after the dialog closes and animations complete.`}),H(`quantic-dialog`)],ws);var Ts=class extends V{constructor(){super(...arguments),this.open=!1,this.heading=``,this.message=``,this.confirmText=`Confirm`,this.cancelText=`Cancel`,this.destructive=!1,this.loading=!1,this.persistent=!1,this.showCloseButton=!0,this.size=_o.Small,this.handleConfirmClick=()=>{if(this.loading)return;let e=new Event(`confirm`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!1)},this.handleCancelClick=()=>{this.loading||(this.dispatchEvent(new Event(`cancel`,{bubbles:!0,composed:!0})),this.open=!1)},this.handleInnerBeforeClose=()=>{this.dispatchEvent(new Event(`cancel`,{bubbles:!0,composed:!0}))},this.handleInnerOpenChanged=e=>{let t=e.detail;this.open!==t.open&&(this.open=t.open)}}updated(e){super.updated(e),e.has(`open`)&&this.innerDialog&&(this.innerDialog.open=this.open)}get buttonSize(){return this.size===_o.Large||this.size===_o.XLarge?rr.Medium:rr.Small}render(){return L`
      <quantic-dialog
        .size=${this.size}
        .role=${yo.AlertDialog}
        ?persistent=${this.persistent||this.loading}
        ?show-close-button=${this.showCloseButton&&!this.loading}
        @before-close=${this.handleInnerBeforeClose}
        @open-changed=${this.handleInnerOpenChanged}
      >
        <slot name="trigger" slot="trigger"></slot>
        ${this.heading?L`<quantic-dialog-title slot="header" level="2">
              ${this.heading}
            </quantic-dialog-title>`:Wt}

        <div class="body">
          <slot>${this.message?L`<p>${this.message}</p>`:Wt}</slot>
        </div>

        <quantic-dialog-actions slot="footer">
          <quantic-button
            variant="${nr.Outline}"
            .size=${this.buttonSize}
            ?disabled=${this.loading}
            @click=${this.handleCancelClick}
          >
            ${this.cancelText}
          </quantic-button>
          <quantic-button
            variant="${nr.Primary}"
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
    `}};Ts.meta={tag:`quantic-confirm-dialog`,description:'Confirmation dialog with title, body, and confirm/cancel actions. Wraps quantic-dialog with role="alertdialog". Use `destructive` for irreversible actions.',category:`feedback`,avoidWhen:[{when:`the dialog carries a form or more than two actions`,useInstead:`quantic-dialog`}],accessibility:{providedByComponent:[`role=alertdialog`,`everything quantic-dialog provides`],requiredFromConsumer:[`a heading and a message, so the action is named without relying on the button alone`]},slots:{trigger:{description:`Element that opens the dialog when clicked.`},"":{description:"Body content. Overrides the `message` prop when non-empty. Accepts rich HTML, including a nested quantic-alert for contextual warnings."},"confirm-icon":{description:`Optional leading icon for the confirm button.`}},relatedTo:[`quantic-dialog`,`quantic-button`,`quantic-alert`]},Ts.styles=I`
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
  `,F([z({type:`boolean`,default:`false`,reflect:!0,description:`Whether the dialog is visible.`})],Ts.prototype,`open`,void 0),F([z({type:`string`,description:`Heading shown in the dialog header.`,copyRule:`heading`})],Ts.prototype,`heading`,void 0),F([z({type:`string`,description:`Body message. Ignored if default slot has content. Use the slot for rich content.`,copyRule:`body-message`})],Ts.prototype,`message`,void 0),F([z({type:`string`,attribute:`confirm-text`,default:`"Confirm"`,description:`Label for the confirm action button.`,copyRule:`action-label`})],Ts.prototype,`confirmText`,void 0),F([z({type:`string`,attribute:`cancel-text`,default:`"Cancel"`,description:`Label for the cancel action button.`,copyRule:`dismiss-label`})],Ts.prototype,`cancelText`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Renders the confirm button in error/danger colors. Use for irreversible actions such as delete or remove.`})],Ts.prototype,`destructive`,void 0),F([z({type:`boolean`,default:`false`,description:`Disables both action buttons. Set while performing an async action after a confirm event.`})],Ts.prototype,`loading`,void 0),F([z({type:`boolean`,default:`false`,description:`Prevents the dialog from being closed via Escape, backdrop, or the close button.`})],Ts.prototype,`persistent`,void 0),F([z({type:`boolean`,attribute:`show-close-button`,default:`true`,description:`Shows the close (X) button in the top-right corner.`})],Ts.prototype,`showCloseButton`,void 0),F([z({type:`DialogSize`,options:Object.values(_o),default:_o.Small,description:`Maximum width of the dialog panel.`})],Ts.prototype,`size`,void 0),F([hn(`quantic-dialog`)],Ts.prototype,`innerDialog`,void 0),Ts=F([B(`confirm`,{description:"Fired when the confirm button is clicked. Cancellable — call preventDefault() to keep the dialog open (e.g. while performing an async action with `loading`)."}),B(`cancel`,{description:`Fired when the dialog is dismissed via the cancel button, close button, Escape, or backdrop click.`}),H(`quantic-confirm-dialog`)],Ts);var Es=`important`,Ds=` !`+Es,Os=or(class extends sr{constructor(e){if(super(e),e.type!==ar.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Ds);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Es:``):n[e]=r}}return Ut}});function ks(e){let t=Number.isFinite(e.minSize)?e.minSize:0,n=Number.isFinite(e.maxSize)?e.maxSize:100,r=_r(t,0,100),i=_r(n,0,100);return{min:Math.min(r,i),max:Math.max(r,i)}}function As(e,t){if(t){if(e===`ArrowUp`)return-1;if(e===`ArrowDown`)return 1}else{if(e===`ArrowLeft`)return-1;if(e===`ArrowRight`)return 1}return null}function js(e,t){return t.reduce((t,n,r)=>n.collapsed?t:t+e[r],0)}function Ms(e,t,n){let{a:r,b:i,total:a}=n,o=Math.max(r.min,a-i.max),s=Math.min(r.max,a-i.min),c=_r(e+t,Math.min(o,s),Math.max(o,s));return[c,a-c]}function Ns(e,t){return e*t/100}function Ps(e,t){if(e.length!==t.length)return e;let n=js(e,t);return n===0?e.map(()=>0):e.map((e,r)=>t[r]?.collapsed?0:e/n*100)}var Fs=e=>{if(e.endsWith(`%`)){let t=parseFloat(e);return{percent:isNaN(t)||t<0?0:t,flex:0}}let t=e===`*`?1:parseFloat(e);return{percent:0,flex:isNaN(t)||t<=0?1:t}},Is={percent:0,flex:1};function Ls(e,t){if(t===0)return[];let n=e.trim().split(/\s+/).filter(Boolean),r=Array.from({length:t},(e,t)=>t<n.length?Fs(n[t]):Is),i=r.reduce((e,{percent:t})=>e+t,0),a=r.reduce((e,{flex:t})=>e+t,0),o=Math.max(0,100-i),s=r.map(({percent:e,flex:t})=>t===0?e:a>0?t/a*o:0),c=s.reduce((e,t)=>e+t,0);return c>0?s.map(e=>e/c*100):Array(t).fill(100/t)}var Rs=class extends U{render(){return Ht`
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

    `}};Rs.styles=U.styles,Rs=F([H(`quantic-icon-lucide-eye`)],Rs);var zs=class extends U{render(){return Ht`
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

    `}};zs.styles=U.styles,zs=F([H(`quantic-icon-lucide-eye-off`)],zs);var Bs={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`};Rs.ensureDefined(),zs.ensureDefined(),ur.ensureDefined();var Vs=class extends La(V){focus(e){this.nativeInput?.focus(e)}constructor(){super(),this.value=``,this.type=`text`,this.name=``,this.placeholder=``,this.size=Bs.Medium,this.disabled=!1,this.required=!1,this.readOnly=!1,this.invalid=!1,this.autoComplete=`off`,this.showPassword=!1,this.internals=this.attachInternals()}togglePassword(){this.showPassword=!this.showPassword}get iconSize(){return Ha(this.size)}updated(e){e.has(`value`)&&(this.internals.setFormValue(this.value),this.updateValidity()),xr(this,e,this.value)}forwardNative(e){let t=e.target;this.value=t.value,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}handleKeyDown(e){this.forwardNative(e),e.key===`Enter`&&this.internals.form?.requestSubmit()}dispatchValueChanged(e){this.value=e.target.value}formResetCallback(){this.value=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}updateValidity(){let e=this.shadowRoot?.querySelector(`input`);e&&this.internals.setValidity(e.validity,e.validationMessage,e)}render(){let e=cr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return L`
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
        ${this.type===`password`?L`<quantic-button
                class="password-toggle"
                variant="ghost"
                size="xs"
                icon
                type="button"
                ?disabled=${this.disabled||this.readOnly}
                aria-label=${this.showPassword?`Hide password`:`Show password`}
                @click=${this.togglePassword}
              >
                ${this.showPassword?L`<quantic-icon-lucide-eye-off
                        size=${this.iconSize}
                      ></quantic-icon-lucide-eye-off>`:L`<quantic-icon-lucide-eye
                        size=${this.iconSize}
                      ></quantic-icon-lucide-eye>`}
              </quantic-button>`:``}
        ${this.invalid?Ua(this.size):``}
        ${this.invalid?``:L`<slot name="suffix"></slot>`}
      </div>
    `}};Vs.meta={tag:`quantic-text-input`,description:`Single-line text field with native form association. Wrap in quantic-field to add a visible label, hint text, and validation messaging. Use type="password" or type="email" to get browser-native input behaviour.`,category:`form`,avoidWhen:[{when:`the value is numeric with a min, max or step`,useInstead:`quantic-number-input`},{when:`the value is multi-line prose`,useInstead:`quantic-textarea`}],accessibility:{providedByComponent:[`form association`,`native input semantics and keyboard behaviour`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{prefix:{description:`Leading content (e.g. icon or currency symbol).`},suffix:{description:`Trailing content (e.g. icon or unit label).`}},parts:{input:{description:`The native input element.`}},relatedTo:[`quantic-field`,`quantic-number-input`,`quantic-select`]},Vs.formAssociated=!0,Vs.styles=[Ka(`text-input`,`5em`),I`
      .input:-webkit-autofill {
        -webkit-text-fill-color: var(--quantic-text-secondary);
        -webkit-box-shadow: 0 0 0px 1000px
          var(--quantic-component-text-input-bg, var(--quantic-bg-primary)) inset;
      }

      .password-toggle {
        margin-inline-start: var(--quantic-spacing-2);
      }
    `],F([z({type:`string`,default:``,description:`Current value of the input.`})],Vs.prototype,`value`,void 0),F([z({type:`string`,default:`text`,description:`Native input type.`})],Vs.prototype,`type`,void 0),F([z({type:`string`,description:`Name submitted with form data.`})],Vs.prototype,`name`,void 0),F([z({type:`string`,description:`Placeholder text shown when the field is empty.`,copyRule:`placeholder`})],Vs.prototype,`placeholder`,void 0),F([z({type:`TextInputSize`,options:Object.values(Bs),default:Bs.Medium,description:`Controls padding and font size.`})],Vs.prototype,`size`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],Vs.prototype,`disabled`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],Vs.prototype,`required`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Makes the field non-editable but still focusable and selectable.`})],Vs.prototype,`readOnly`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],Vs.prototype,`invalid`,void 0),F([z({type:`string`,default:`off`,reflect:!0,description:`Native autocomplete attribute passed to the inner <input>.`})],Vs.prototype,`autoComplete`,void 0),F([pn()],Vs.prototype,`showPassword`,void 0),F([hn(`input`)],Vs.prototype,`nativeInput`,void 0),Vs=F([B(`value-changed`,{description:`Fired whenever the value changes, from user input or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),B(`input`,{forwarded:!0}),B(`change`,{forwarded:!0}),B(`focus`,{forwarded:!0}),B(`blur`,{forwarded:!0}),B(`keydown`,{forwarded:!0}),B(`keyup`,{forwarded:!0}),B(`keypress`,{forwarded:!0}),H(`quantic-text-input`)],Vs);var Hs={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},Us=class extends La(V){constructor(){super(...arguments),this.options=[],this.value=``,this.name=``,this.placeholder=``,this.size=Hs.Medium,this.disabled=!1,this.required=!1,this.invalid=!1,this._selectRef=Yr(),this._slottedOptions=[]}dispatchValueChanged(e){this.value=e.target.value}openDropdown(e){if(!this.disabled){e.stopPropagation();let t=this._selectRef.value;t?.showPicker(),t?.click(),t?.focus()}}updated(e){if(e.has(`value`)){let e=this._selectRef.value,t=this.options.find(([,e])=>e===this.value);e&&t&&(e.value=t[1])}xr(this,e,this.value)}forwardNative(e){this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}handleSlotChange(e){let t=e.target.assignedElements({flatten:!0});this._slottedOptions=t.filter(e=>e.tagName===`OPTION`),this.requestUpdate()}render(){let e=cr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return L`
      <slot @slotchange=${this.handleSlotChange} style="display: none"></slot>
      <div class="${e}">
        <slot name="prefix"></slot>
        <select
          ${Qr(this._selectRef)}
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
          ${!this.value&&this.placeholder?L`<option value="">${this.placeholder}</option>`:null}
          ${this.options.length>0?this.options.map(([e,t])=>L`<option value=${t}>${e}</option>`):this._slottedOptions.length>0?this._slottedOptions.map(e=>L`<option value=${e.value} ?selected=${e.selected}>${e.textContent}</option>`):L`<option value="" disabled>No options available</option>`}
        </select>
        ${this.invalid?Ua(this.size):L`<slot name="suffix"
                >${Wa(this.size,{click:this.openDropdown})}</slot
              >`}
      </div>
    `}};Us.meta={tag:`quantic-select`,description:`Dropdown select input backed by a native <select>. Form-associated. Pass options via the options prop or slot native <option> elements.`,category:`form`,avoidWhen:[{when:`the option set is large enough to need filtering`,useInstead:`quantic-combobox`}],accessibility:{providedByComponent:[`native select semantics and keyboard behaviour`,`form association`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{"":{description:`Native option elements, read to build the list. Never rendered directly.`},prefix:{description:`Leading content (e.g. icon).`},suffix:{description:`Trailing content, replacing the default chevron.`}},relatedTo:[`quantic-field`,`quantic-text-input`]},Us.styles=[Ka(`select`,`6em`),I`
      .main {
        line-height: var(--quantic-line-height-body-md);
      }
    `],F([z({type:`Option<T>[]`,default:`[]`,description:`Array of [label, value] tuples. Alternatively, slot native <option> elements.`})],Us.prototype,`options`,void 0),F([z({type:`string`,default:``,reflect:!0,description:`Currently selected value.`})],Us.prototype,`value`,void 0),F([z({type:`string`,description:`Name submitted with form data.`})],Us.prototype,`name`,void 0),F([z({type:`string`,description:`Placeholder option shown when no value is selected.`,copyRule:`placeholder`})],Us.prototype,`placeholder`,void 0),F([z({type:`SelectSize`,options:Object.values(Hs),default:Hs.Medium,description:`Controls padding and font size.`})],Us.prototype,`size`,void 0),F([z({type:`boolean`,default:`false`,description:`Prevents interaction.`})],Us.prototype,`disabled`,void 0),F([z({type:`boolean`,default:`false`,description:`Marks the field as required for form validation.`})],Us.prototype,`required`,void 0),F([z({type:`boolean`,default:`false`,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],Us.prototype,`invalid`,void 0),Us=F([B(`value-changed`,{description:`Fired whenever the value changes, from user selection or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),B(`focus`,{forwarded:!0}),B(`blur`,{forwarded:!0}),H(`quantic-select`)],Us);var Ws=class extends U{render(){return Ht`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-arrow-down"
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
  <path d="M12 5v14" />
  <path d="m19 12-7 7-7-7" />
</svg>

    `}};Ws.styles=U.styles,Ws=F([H(`quantic-icon-lucide-arrow-down`)],Ws);var Gs=class extends U{render(){return Ht`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-arrow-up"
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
  <path d="m5 12 7-7 7 7" />
  <path d="M12 19V5" />
</svg>

    `}};Gs.styles=U.styles,Gs=F([H(`quantic-icon-lucide-arrow-up`)],Gs);var Ks=class extends U{render(){return Ht`
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

    `}};Ks.styles=U.styles,Ks=F([H(`quantic-icon-lucide-chevron-up`)],Ks);var qs=class extends U{render(){return Ht`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-chevrons-up-down"
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
  <path d="m7 15 5 5 5-5" />
  <path d="m7 9 5-5 5 5" />
</svg>

    `}};qs.styles=U.styles,qs=F([H(`quantic-icon-lucide-chevrons-up-down`)],qs);var Js=class extends U{render(){return Ht`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-git-merge"
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
  <circle cx="18" cy="18" r="3" />
  <circle cx="6" cy="6" r="3" />
  <path d="M6 21V9a9 9 0 0 0 9 9" />
</svg>

    `}};Js.styles=U.styles,Js=F([H(`quantic-icon-lucide-git-merge`)],Js);var Ys=class extends U{render(){return Ht`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-pencil"
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
  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" />
</svg>

    `}};Ys.styles=U.styles,Ys=F([H(`quantic-icon-lucide-pencil`)],Ys);var Xs=class extends U{render(){return Ht`
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

    `}};Xs.styles=U.styles,Xs=F([H(`quantic-icon-lucide-search`)],Xs);var Zs=class extends U{render(){return Ht`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-trash-2"
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
  <path d="M3 6h18" />
  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  <line x1="10" x2="10" y1="11" y2="17" />
  <line x1="14" x2="14" y1="11" y2="17" />
</svg>

    `}};Zs.styles=U.styles,Zs=F([H(`quantic-icon-lucide-trash-2`)],Zs);var Qs={MAX_LINES:1e4,FOLLOW_SCROLL_THRESHOLD:50},$s=[`log-black`,`log-danger`,`log-success`,`log-warning`,`log-blue`,`log-magenta`,`log-info`,`log-white`,`log-gray`,`log-danger`,`log-success`,`log-warning`,`log-blue`,`log-magenta`,`log-info`,`log-white`],ec=[`#1c1c1c`,`#8b0000`,`#006400`,`#808000`,`#00008b`,`#800080`,`#008b8b`,`#a9a9a9`,`#404040`,`#ff4444`,`#44ff44`,`#ffff44`,`#4444ff`,`#ff44ff`,`#44ffff`,`#ffffff`],tc=e=>e===0?0:55+e*40,nc=e=>{let t=e-16,n=Math.floor(t/36),r=Math.floor(t%36/6),i=t%6;return`rgb(${tc(n)},${tc(r)},${tc(i)})`},rc=e=>{let t=8+(e-232)*10;return`rgb(${t},${t},${t})`},ic=e=>e<232?nc(e):rc(e),ac=[`fgClass`,`fgRgb`,`bgColor`,`bold`,`dim`,`italic`,`underline`],oc=()=>({fgClass:null,fgRgb:null,bgColor:null,bold:!1,dim:!1,italic:!1,underline:!1}),sc=e=>({...e,fgClass:null,fgRgb:null}),cc=(e,t)=>t<16?{...e,fgClass:$s[t],fgRgb:null}:{...e,fgClass:null,fgRgb:ic(t)},lc=(e,t)=>({...e,bgColor:t<16?ec[t]:ic(t)}),uc=(e,t=0)=>({state:e,skip:t}),dc=e=>t=>uc({...t,...e}),fc=e=>t=>uc(e(t)),pc=(e,{params:t,index:n})=>{let r=t[n+1];return r===5&&n+2<t.length?uc(cc(e,t[n+2]),2):r===2&&n+4<t.length?uc({...e,fgClass:null,fgRgb:`rgb(${t[n+2]},${t[n+3]},${t[n+4]})`},4):uc(e)},mc=(e,{params:t,index:n})=>{let r=t[n+1];return r===5&&n+2<t.length?uc(lc(e,t[n+2]),2):r===2&&n+4<t.length?uc({...e,bgColor:`rgb(${t[n+2]},${t[n+3]},${t[n+4]})`},4):uc(e)},hc=e=>t=>uc({...t,fgClass:$s[e],fgRgb:null}),gc=e=>t=>uc({...t,bgColor:ec[e]}),_c={0:()=>uc(oc()),1:dc({bold:!0}),2:dc({dim:!0}),3:dc({italic:!0}),4:dc({underline:!0}),22:dc({bold:!1,dim:!1}),23:dc({italic:!1}),24:dc({underline:!1}),38:pc,39:fc(sc),48:mc,49:dc({bgColor:null})},vc=e=>_c[e]||(e>=30&&e<=37?hc(e-30):e>=40&&e<=47?gc(e-40):e>=90&&e<=97?hc(e-90+8):e>=100&&e<=107?gc(e-100+8):e=>uc(e)),yc=e=>e===``?[0]:e.split(`;`).map(Number),bc=(e,t)=>t.reduce(e=>{if(e.index>=t.length)return e;let n=t[e.index],{state:r,skip:i}=vc(n)(e.state,{params:t,index:e.index});return{state:r,index:e.index+1+i}},{state:e,index:0}).state,xc=(e,t)=>bc(e,yc(t));function Sc(e){let{fgClass:t,fgRgb:n,bgColor:r,bold:i,dim:a,italic:o,underline:s}=e;return t===null&&n===null&&r===null&&!i&&!a&&!o&&!s}function Cc(e){let t=[...e.matchAll(/\x1b\[([0-9;]*)m/g)].reduce((t,n)=>{let r=e.slice(t.cursor,n.index);return{segments:r?[...t.segments,{text:r,state:t.state}]:t.segments,state:xc(t.state,n[1]),cursor:n.index+n[0].length}},{segments:[],state:oc(),cursor:0}),n=e.slice(t.cursor);return n?[...t.segments,{text:n,state:t.state}]:t.segments}var wc=e=>e.map(e=>e.text).join(``),Tc=/^\[(?:info|ok|warn|error|debug)\]$/i;function Ec(e){if(e.length<2)return null;let[t,...n]=e;if(!Tc.test(t.text))return null;let r=n.map(e=>({...e,state:{...e.state}})),i=r[0];return i&&(r[0]={...i,text:i.text.replace(/^\s+/,``)}),{tag:t,body:r}}var Dc=(e,t)=>ac.every(n=>e[n]===t[n]),Oc=(e,t,n)=>{let r=Array(e).fill(`none`);return t.forEach(({start:e,end:t})=>r.fill(`hit`,e,t)),n&&r.fill(`active`,n.start,n.end),r},kc=(e,t)=>{let n=[],r=Math.max(t.length,1);for(let i=e.indexOf(t);i!==-1;i=e.indexOf(t,i+r))n.push({start:i,end:i+t.length});return n};function Ac(e,t){let n=t.trim();return n?kc(e.toLowerCase(),n.toLowerCase()):[]}function jc(e,t){return e.flatMap((e,n)=>Ac(wc(e),t).map(({start:e,end:t})=>({lineIndex:n,start:e,end:t})))}var Mc=e=>e.map((t,n)=>e.slice(0,n).reduce((e,t)=>e+t.text.length,0)),Nc=e=>{let t=Mc(e);return e.flatMap((e,n)=>e.text.split(``).map((r,i)=>({char:r,state:e.state,pos:t[n]+i})))},Pc=e=>e.reduce((e,t)=>{let n=e[e.length-1];return n&&n.highlight===t.highlight&&Dc(n.state,t.state)?e[e.length-1]={...n,text:n.text+t.text}:e.push(t),e},[]);function Fc(e,t,n){if(!t.length)return e.map(e=>({...e,highlight:`none`}));let r=Nc(e),i=Oc(r.length,t,n);return Pc(r.map(({char:e,state:t,pos:n})=>({text:e,state:t,highlight:i[n]})))}var Ic=class extends V{constructor(){super(...arguments),this.parsed=[],this.lineIndex=0,this.searchQuery=``,this.activeMatch=null,this.lineNumber=0}scrollActiveMatchIntoView(){this.renderRoot.querySelector(`.log-search-active`)?.scrollIntoView({block:`nearest`,inline:`nearest`})}renderSegment({text:e,state:t}){if(Sc(t))return e;let n={"log-bold":t.bold,"log-dim":t.dim,"log-italic":t.italic,"log-underline":t.underline};return t.fgClass&&(n[t.fgClass]=!0),L`<span
      class=${cr(n)}
      style=${Os({color:t.fgRgb,background:t.bgColor})}
      >${e}</span
    >`}renderSearchSlice(e){let t=this.renderSegment({text:e.text,state:e.state});return e.highlight===`none`?t:L`<mark
      class=${cr({"log-search-hit":e.highlight===`hit`,"log-search-active":e.highlight===`active`})}
      >${t}</mark
    >`}get showLineNumber(){return this.lineNumber>0}renderLineNumber(){return this.showLineNumber?L`<span class="line-number">${this.lineNumber}</span>`:null}renderPlainContent(e){return L`<span class="log-line">${e.map(e=>this.renderSegment(e))}</span>`}renderLeveledContent(e){return L`<span class="log-level-tag">${this.renderSegment(e.tag)}</span
      ><span class="log-level-body">${e.body.map(e=>this.renderSegment(e))}</span>`}renderSearchContent(e){let t=this.searchQuery.trim(),n=Ac(wc(e),t),r=this.activeMatch;return L`<span class="log-line">${Fc(e,n,r&&r.lineIndex===this.lineIndex?{start:r.start,end:r.end}:null).map(e=>this.renderSearchSlice(e))}</span>`}willUpdate(){let e=this.searchQuery.trim()?null:Ec(this.parsed);this.toggleAttribute(`leveled`,!!e)}render(){let e=this.parsed,t=this.searchQuery.trim(),n=t?null:Ec(e);return n?L`${this.renderLineNumber()}${this.renderLeveledContent(n)}`:t?L`${this.renderLineNumber()}${this.renderSearchContent(e)}`:L`${this.renderLineNumber()}${this.renderPlainContent(e)}`}};Ic.meta={tag:`quantic-log-output-line`,description:`Single rendered row within quantic-log-output. Applies ANSI styling, optional level-tag layout, and in-buffer search highlights.`,category:`display`,subComponentOf:`quantic-log-output`,relatedTo:[`quantic-log-output`]},Ic.styles=I`
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
  `,F([z({type:`AnsiSegment[]`,default:`[]`,attribute:!1,description:`Parsed ANSI segments for this buffer line.`})],Ic.prototype,`parsed`,void 0),F([z({type:`number`,default:`0`,attribute:`line-index`,description:`Zero-based index of this line in the parent buffer.`})],Ic.prototype,`lineIndex`,void 0),F([z({type:`string`,default:``,attribute:!1,description:`Current search query from the parent log viewer.`})],Ic.prototype,`searchQuery`,void 0),F([z({type:`{ lineIndex: number; start: number; end: number } | null`,default:`null`,attribute:!1,description:`Active search match in the buffer, if any.`})],Ic.prototype,`activeMatch`,void 0),F([z({type:`number`,default:`0`,attribute:`line-number`,description:`When greater than zero, shows this ordinal beside the row.`})],Ic.prototype,`lineNumber`,void 0),Ic=F([H(`quantic-log-output-line`)],Ic),po.ensureDefined(),mo.ensureDefined(),ur.ensureDefined(),Vs.ensureDefined(),Xs.ensureDefined(),Ks.ensureDefined(),za.ensureDefined(),Or.ensureDefined();var Lc=class extends V{constructor(){super(...arguments),this.value=``,this.matchCount=0,this.activeMatchIndex=0,this.open=!1}updated(e){e.has(`open`)&&this.open&&this.focusSearchInput()}showSearch(){this.open?this.focusSearchInput():this.openSearch()}focusSearchInput(){this.updateComplete.then(()=>{let e=this.inputEl;e&&e.updateComplete.then(()=>e.focus())})}get matchLabel(){return this.matchCount?`${Math.min(this.activeMatchIndex+1,this.matchCount)} / ${this.matchCount}`:`0 / 0`}emitValue(e){this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:e},bubbles:!0,composed:!0}))}emitOpen(e){this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:e},bubbles:!0,composed:!0}))}openSearch(){this.open=!0,this.emitOpen(!0)}closeSearch(){this.open=!1,this.emitOpen(!1),this.emitValue(``)}handleToggleOpen(){this.open?this.closeSearch():this.openSearch()}handleValueChanged(e){e.stopPropagation(),this.emitValue(e.detail.value)}handleKeydown(e){e.key===`Escape`?(e.preventDefault(),this.closeSearch()):e.key===`Enter`&&(e.preventDefault(),this.dispatchEvent(new CustomEvent(e.shiftKey?`previous-match`:`next-match`,{bubbles:!0,composed:!0})))}handlePreviousMatch(){this.dispatchEvent(new CustomEvent(`previous-match`,{bubbles:!0,composed:!0}))}handleNextMatch(){this.dispatchEvent(new CustomEvent(`next-match`,{bubbles:!0,composed:!0}))}render(){return this.open?L`
      <quantic-text-input
        type="search"
        size=${Bs.ExtraSmall}
        placeholder="Search"
        aria-label="Search log"
        .value=${this.value}
        @value-changed=${this.handleValueChanged}
        @keydown=${this.handleKeydown}
      ></quantic-text-input>
      <span class="count" aria-live="polite">${this.matchLabel}</span>
      <quantic-button-bar size=${oo.ExtraSmall} aria-label="Search match navigation">
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
    `:L`
        <quantic-button
          icon
          size=${rr.ExtraSmall}
          variant="outline"
          aria-label="Search log"
          @click=${this.handleToggleOpen}
        >
          <quantic-icon-lucide-search size="xxs"></quantic-icon-lucide-search>
        </quantic-button>
      `}};Lc.meta={tag:`quantic-log-output-search`,description:`Floating search control for quantic-log-output. Collapsed to a search icon; expanded to a query field with match navigation.`,category:`display`,subComponentOf:`quantic-log-output`,relatedTo:[`quantic-log-output`,`quantic-text-input`,`quantic-button-bar`]},Lc.styles=I`
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
  `,F([z({type:`string`,default:``,description:`Current search query.`})],Lc.prototype,`value`,void 0),F([z({type:`number`,default:`0`,attribute:`match-count`,description:`Total matches in the log buffer.`})],Lc.prototype,`matchCount`,void 0),F([z({type:`number`,default:`0`,attribute:`active-match-index`,description:`Zero-based index of the highlighted match.`})],Lc.prototype,`activeMatchIndex`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Whether the search field is expanded.`})],Lc.prototype,`open`,void 0),F([hn(`quantic-text-input`)],Lc.prototype,`inputEl`,void 0),Lc=F([B(`value-changed`,{description:`Fired when the search query changes, including when cleared on close.`,detail:`{ value: string }`}),B(`previous-match`,{description:`Fired when the user activates the previous-match control.`}),B(`next-match`,{description:`Fired when the user activates the next-match control.`}),B(`open-changed`,{description:`Fired when the overlay expands or collapses.`,detail:`{ open: boolean }`}),H(`quantic-log-output-search`)],Lc),go.ensureDefined(),Lc.ensureDefined(),Ic.ensureDefined();var Rc=class extends V{constructor(){super(...arguments),this.follow=!0,this.followLabel=`Follow`,this.lineNumbers=!1,this.maxLines=Qs.MAX_LINES,this.searchable=!0,this.lineBuffer=[],this.searchQuery=``,this.activeMatchIndex=0,this.resizeObserver=null,this.handleScroll=()=>{let{scrollTop:e,scrollHeight:t,clientHeight:n}=this.outputEl;this.follow=!(t-e-n>Qs.FOLLOW_SCROLL_THRESHOLD)}}get lines(){return this.lineBuffer.map(e=>e.raw)}set lines(e){this.lineBuffer=this.clampToMax(e.map(e=>({raw:e,parsed:Cc(e)})))}get isSearchActive(){return this.searchable&&this.searchQuery.trim().length>0}get effectiveSearchQuery(){return this.searchable?this.searchQuery:``}get searchMatches(){return jc(this.lineBuffer.map(e=>e.parsed),this.searchQuery)}get activeMatch(){let e=this.searchMatches;return e.length?e[Math.min(Math.max(this.activeMatchIndex,0),e.length-1)]??null:null}firstUpdated(){this.outputEl.addEventListener(`scroll`,this.handleScroll),this.resizeObserver=new ResizeObserver(()=>{this.follow&&!this.isSearchActive&&this.scrollToBottom()}),this.resizeObserver.observe(this.outputEl)}updated(e){if(e.has(`maxLines`)&&(this.lineBuffer=this.clampToMax(this.lineBuffer)),e.has(`searchable`)&&!this.searchable&&(this.searchQuery=``,this.activeMatchIndex=0),e.has(`searchQuery`)&&(this.activeMatchIndex=0),e.has(`lineBuffer`)||e.has(`searchQuery`)){let e=this.searchMatches.length;e===0?this.activeMatchIndex=0:this.activeMatchIndex>=e&&(this.activeMatchIndex=e-1)}this.follow&&!this.isSearchActive&&this.scrollToBottom(),this.isSearchActive&&(e.has(`activeMatchIndex`)||e.has(`lineBuffer`)||e.has(`searchQuery`))&&this.scrollActiveMatchIntoView()}disconnectedCallback(){super.disconnectedCallback(),this.outputEl?.removeEventListener(`scroll`,this.handleScroll),this.resizeObserver?.disconnect(),this.resizeObserver=null}appendLine(e){this.lineBuffer=this.clampToMax([...this.lineBuffer,{raw:e,parsed:Cc(e)}])}clampToMax(e){return e.length>this.maxLines?e.slice(-this.maxLines):e}renderLineRows(){let e=this.activeMatch;return this.lineBuffer.map(({parsed:t},n)=>L`<quantic-log-output-line
        .parsed=${t}
        .lineIndex=${n}
        .searchQuery=${this.effectiveSearchQuery}
        .activeMatch=${e}
        .lineNumber=${this.lineNumbers?n+1:0}
      ></quantic-log-output-line>`)}scrollToBottom(){this.outputEl.scrollTop=this.outputEl.scrollHeight}scrollActiveMatchIntoView(){requestAnimationFrame(()=>{let e=this.activeMatch;e&&(this.outputEl?.querySelector(`quantic-log-output-line[line-index="${e.lineIndex}"]`))?.scrollActiveMatchIntoView()})}handleFollowChange(e){this.follow=e.detail.checked,this.follow&&this.scrollToBottom()}handleSearchValueChanged(e){this.searchQuery=e.detail.value}handleOutputKeydown(e){this.searchable&&e.key===`f`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),this.searchEl?.showSearch())}goToPreviousMatch(){let e=this.searchMatches.length;e&&(this.activeMatchIndex=(this.activeMatchIndex-1+e)%e)}goToNextMatch(){let e=this.searchMatches.length;e&&(this.activeMatchIndex=(this.activeMatchIndex+1)%e)}render(){let e=this.searchMatches.length;return L`
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
        ${this.searchable?L`<quantic-log-output-search
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
    `}};Rc.meta={tag:`quantic-log-output`,description:`Scrollable terminal-style log viewer that renders ANSI-coloured text with optional line numbers. Accepts lines as a property array or via appendLine(). A follow checkbox auto-scrolls to the latest line. When searchable, an overlay search control finds text in the log buffer.`,category:`display`,accessibility:{providedByComponent:[`live region for appended output`,`a follow toggle so announcements can be stopped`,`in-log search with match navigation when searchable`],requiredFromConsumer:[`a followLabel describing what following does`]},slots:{toolbar:{description:`Additional controls placed in the toolbar next to the follow checkbox.`}}},Rc.styles=I`
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
  `,F([z({type:`boolean`,default:`true`,reflect:!0,description:`When true, the output automatically scrolls to the latest line.`})],Rc.prototype,`follow`,void 0),F([z({type:`string`,default:`Follow`,attribute:`follow-label`,description:`Label text for the follow toggle checkbox.`,copyRule:`toggle-effect-label`})],Rc.prototype,`followLabel`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,attribute:`line-numbers`,description:`When true, prepends line numbers to each row.`})],Rc.prototype,`lineNumbers`,void 0),F([z({type:`number`,default:String(Qs.MAX_LINES),attribute:`max-lines`,description:`Maximum number of lines retained in the buffer. Older lines are dropped when the limit is exceeded.`})],Rc.prototype,`maxLines`,void 0),F([z({type:`boolean`,default:`true`,reflect:!0,description:`When true, shows in-log search and highlights matches. Set to false to omit search UI and keyboard shortcut.`})],Rc.prototype,`searchable`,void 0),F([pn()],Rc.prototype,`lineBuffer`,void 0),F([pn()],Rc.prototype,`searchQuery`,void 0),F([pn()],Rc.prototype,`activeMatchIndex`,void 0),F([hn(`.output`)],Rc.prototype,`outputEl`,void 0),F([hn(`quantic-log-output-search`)],Rc.prototype,`searchEl`,void 0),Rc=F([H(`quantic-log-output`)],Rc);var zc=hr,Bc={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`,ExtraLarge:`xl`},Vc=class extends V{constructor(){super(...arguments),this.size=Bc.Medium,this.label=`Loading`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`status`)}render(){return L`
      <div
        class=${cr({sizer:!0,[`size--${this.size}`]:!0,[`color--${this.color}`]:!!this.color})}
        aria-hidden="true"
      >
        <div class="ring"></div>
      </div>
      <span class="sr-only">${this.label}</span>
    `}};Vc.meta={tag:`quantic-spinner`,description:`Animated loading indicator. No content — purely visual feedback for in-progress states. Renders a role="status" host with a visually hidden accessible label.`,category:`feedback`,accessibility:{providedByComponent:[`role=status with visually hidden text`],requiredFromConsumer:[`a label naming what is loading`]}},Vc.styles=I`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .sizer {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: spin var(--quantic-component-spinner-duration, 0.66s) linear
        infinite;
    }

    .size--xs {
      width: 12px;
      height: 12px;
    }

    .size--sm {
      width: 16px;
      height: 16px;
    }

    .size--md {
      width: 24px;
      height: 24px;
    }

    .size--lg {
      width: 28px;
      height: 28px;
    }

    .size--xl {
      width: 32px;
      height: 32px;
    }

    .ring {
      flex-shrink: 0;
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid
        var(
          --quantic-component-spinner-color,
          var(--quantic-internal-spinner-color, currentColor)
        );
      border-top-color: transparent;
    }

    .size--xs .ring {
      transform: scale(calc(12 / 24));
    }

    .size--sm .ring {
      transform: scale(calc(16 / 24));
    }

    .size--lg .ring {
      transform: scale(calc(28 / 24));
    }

    .size--xl .ring {
      transform: scale(calc(32 / 24));
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

    ${nt(vr(e=>`--quantic-internal-spinner-color: var(--quantic-utility-${e}-500);`))}

    .color--brand {
      --quantic-internal-spinner-color: var(--quantic-fg-brand-primary);
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `,F([z({type:`SpinnerSize`,options:Object.values(Bc),default:Bc.Medium,description:`Diameter of the spinner ring.`})],Vc.prototype,`size`,void 0),F([z({type:`SpinnerColor`,options:Object.values(zc),description:`Overrides the ring color. Defaults to currentColor.`})],Vc.prototype,`color`,void 0),F([z({type:`string`,default:`Loading`,description:`Visually hidden text announced by screen readers.`,copyRule:`status-label`})],Vc.prototype,`label`,void 0),Vc=F([H(`quantic-spinner`)],Vc);var Hc=class extends V{constructor(){super(...arguments),this.direction=`horizontal`,this.resizable=!1,this.split=``,this.collapseBelow=`640px`,this.panes=[],this.sizes=[],this.mutationObserver=null,this.collapsedObserver=null,this.resizeObserver=null,this.dragInfo=null,this.handlePointerMove=e=>{if(!this.dragInfo)return;let t=this.direction===`vertical`?this.wrapper.clientHeight:this.wrapper.clientWidth;if(t===0)return;let{dividerIndex:n,startX:r,startY:i,startLayoutA:a,startLayoutB:o}=this.dragInfo,s=this.panes[n-1],c=this.panes[n],[l,u]=Ms(a,(this.direction===`vertical`?e.clientY-i:e.clientX-r)/t*100,{a:ks(s),b:ks(c),total:a+o}),d=[...this.sizes];d[n-1]=Ns(l,this.dragInfo.activeSizesSum),d[n]=Ns(u,this.dragInfo.activeSizesSum),this.sizes=d,this.applySizes()},this.handlePointerUp=()=>{this.dragInfo&&(this.renderRoot.querySelectorAll(`.divider.dragging`).forEach(e=>{e.classList.remove(`dragging`)}),this.removeEventListener(`pointermove`,this.handlePointerMove),this.removeEventListener(`pointerup`,this.handlePointerUp),this.removeEventListener(`pointercancel`,this.handlePointerUp),this.dragInfo=null,this.dispatchEvent(new CustomEvent(`resize`,{bubbles:!0,composed:!0,detail:{sizes:this.sizes}})))}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.discoverPanes()),this.mutationObserver.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.collapsedObserver?.disconnect(),this.resizeObserver?.disconnect(),this.dragInfo&&=(this.removeEventListener(`pointermove`,this.handlePointerMove),this.removeEventListener(`pointerup`,this.handlePointerUp),this.removeEventListener(`pointercancel`,this.handlePointerUp),null)}firstUpdated(){this.discoverPanes(),this.setupResizeObserver()}updated(e){super.updated(e),e.has(`split`)&&(this.sizes=Ls(this.split,this.panes.length),this.applySizes()),(e.has(`collapseBelow`)||e.has(`direction`))&&this.checkStacked()}discoverPanes(){let e=Array.from(this.querySelectorAll(`:scope > quantic-splitter-pane`));e.forEach((e,t)=>{let n=`pane-${t}`;e.getAttribute(`slot`)!==n&&e.setAttribute(`slot`,n)}),this.panes.forEach(t=>{e.includes(t)||(t.removeAttribute(`slot`),t.removeAttribute(`stacked`))});let t=this.panes.length;this.panes=e,e.length!==t&&(this.sizes=Ls(this.split,e.length)),this.setupCollapsedObserver(),this.applySizes()}setupCollapsedObserver(){this.collapsedObserver?.disconnect(),this.panes.length!==0&&(this.collapsedObserver=new MutationObserver(()=>{this.panes=[...this.panes],this.applySizes()}),this.panes.forEach(e=>{this.collapsedObserver.observe(e,{attributes:!0,attributeFilter:[`collapsed`]})}))}setupResizeObserver(){this.wrapper&&(this.resizeObserver=new ResizeObserver(e=>{let t=e[0];t&&this.checkStackedForSize(t.contentRect.width)}),this.resizeObserver.observe(this.wrapper))}checkStacked(){this.wrapper&&this.checkStackedForSize(this.wrapper.clientWidth)}checkStackedForSize(e){let t=(this.collapseBelow??``).trim(),n=t.endsWith(`px`)?parseFloat(t):NaN;if(this.direction!==`vertical`&&!Number.isFinite(n))return;let r=this.direction!==`vertical`&&e<=n;this.toggleAttribute(`stacked`,r),this.panes.forEach(e=>e.toggleAttribute(`stacked`,r))}applySizes(){let e=Ps(this.sizes,this.panes);this.panes.forEach((t,n)=>{t.style.setProperty(`--quantic-component-splitter-pane-flex-grow`,String(e[n]))}),this.renderRoot.querySelectorAll(`[part="divider"]`).forEach((t,n)=>{t.setAttribute(`aria-valuenow`,String(Math.round(e[n])))})}dividerEffectiveBounds(e,t){let n=ks(this.panes[e-1]),r=ks(this.panes[e]),i=t[e-1]+t[e];return{min:Math.max(n.min,i-r.max),max:Math.min(n.max,i-r.min)}}isDividerDisabled(e){return!this.resizable||(this.panes[e-1]?.collapsed??!1)||(this.panes[e]?.collapsed??!1)}isDividerHidden(e){return(this.panes[e-1]?.hasAttribute(`collapsed`)??!1)||(this.panes[e]?.hasAttribute(`collapsed`)??!1)}handleDividerPointerDown(e,t){e.preventDefault();let n=e.currentTarget;n.setPointerCapture(e.pointerId),n.classList.add(`dragging`);let r=Ps(this.sizes,this.panes),i=js(this.sizes,this.panes);this.dragInfo={dividerIndex:t,startX:e.clientX,startY:e.clientY,startLayoutA:r[t-1],startLayoutB:r[t],activeSizesSum:i},this.addEventListener(`pointermove`,this.handlePointerMove),this.addEventListener(`pointerup`,this.handlePointerUp),this.addEventListener(`pointercancel`,this.handlePointerUp)}handleDividerKeyDown(e,t){let n=As(e.key,this.direction===`vertical`);if(n===null)return;e.preventDefault();let r=Ps(this.sizes,this.panes),[i,a]=Ms(r[t-1],n,{a:ks(this.panes[t-1]),b:ks(this.panes[t]),total:r[t-1]+r[t]}),o=js(this.sizes,this.panes),s=[...this.sizes];s[t-1]=Ns(i,o),s[t]=Ns(a,o),this.sizes=s,this.applySizes(),this.dispatchEvent(new CustomEvent(`resize`,{bubbles:!0,composed:!0,detail:{sizes:this.sizes}}))}render(){let e=Ps(this.sizes,this.panes);return L`
      <div
        class=${cr({wrapper:!0,"direction--horizontal":this.direction===`horizontal`,"direction--vertical":this.direction===`vertical`})}
      >
        ${this.panes.map((t,n)=>{let r=n>0?this.dividerEffectiveBounds(n,e):null;return L`${n>0&&!this.isDividerHidden(n)?L`<div
                    class=${cr({divider:!0,disabled:this.isDividerDisabled(n)})}
                    part="divider"
                    role="separator"
                    tabindex=${this.isDividerDisabled(n)?Wt:`0`}
                    aria-orientation=${this.direction===`vertical`?`horizontal`:`vertical`}
                    aria-valuenow=${Math.round(e[n-1])}
                    aria-valuemin=${Math.round(r.min)}
                    aria-valuemax=${Math.round(r.max)}
                    @pointerdown=${e=>this.handleDividerPointerDown(e,n)}
                    @keydown=${e=>this.handleDividerKeyDown(e,n)}
                  ></div>`:Wt}<slot name="pane-${n}"></slot>`})}
      </div>
    `}};Hc.meta={tag:`quantic-splitter-group`,description:`Resizable panel container — renders two or more panes separated by draggable dividers. Collapses to a stacked layout below the collapse-below breakpoint.`,category:`layout`,accessibility:{providedByComponent:[`separator roles`,`keyboard resize`,`roving tabindex across the handles`],requiredFromConsumer:[`an accessible name for each pane`]},slots:{"":{description:`Two or more quantic-splitter-pane elements.`}},parts:{divider:{description:`The draggable handle between two panes.`}}},Hc.styles=I`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      container-type: inline-size;
    }

    :host([stacked]) .wrapper {
      flex-direction: column;
      overflow-y: auto;
    }

    .wrapper {
      display: flex;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .wrapper.direction--horizontal {
      flex-direction: row;
    }

    .direction--horizontal .divider:not(.disabled) {
      cursor: col-resize;
    }

    .wrapper.direction--vertical {
      flex-direction: column;
    }

    .direction--vertical .divider:not(.disabled) {
      cursor: row-resize;
    }

    .divider {
      flex: 0 0 1px;
      position: relative;
      z-index: 1;
      touch-action: none;
      user-select: none;
      background: var(--quantic-border-primary);
      transition: background 0.15s ease-in-out;
    }

    .divider::before {
      content: '';
      position: absolute;
      inset: -6px;
      background: transparent;
    }

    .divider::after {
      content: '';
      pointer-events: none;
      position: absolute;
      background: transparent;
      transition:
        background 0.15s ease-in-out,
        width 0.15s ease-in-out,
        height 0.15s ease-in-out;
    }

    .direction--horizontal .divider::after {
      top: 0;
      bottom: 0;
      width: 1px;
      left: 50%;
      transform: translateX(-50%);
    }

    .direction--vertical .divider::after {
      left: 0;
      right: 0;
      height: 1px;
      top: 50%;
      transform: translateY(-50%);
    }

    .direction--horizontal .divider:hover::after,
    .direction--horizontal .divider.dragging::after {
      width: 4px;
      background: var(--quantic-fg-brand-primary);
    }

    .direction--vertical .divider:hover::after,
    .direction--vertical .divider.dragging::after {
      height: 4px;
      background: var(--quantic-fg-brand-primary);
    }

    .divider.disabled {
      pointer-events: none;
      cursor: default;
    }

    .divider.disabled::after {
      display: none;
    }

    :host([stacked]) .divider {
      display: none;
    }
  `,F([z({type:`"horizontal" | "vertical"`,default:`horizontal`,description:`Axis along which panes are split.`})],Hc.prototype,`direction`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Enables draggable dividers for interactive resizing.`})],Hc.prototype,`resizable`,void 0),F([z({type:`string`,description:`Comma-separated initial size percentages, e.g. "30,70". Equal split when omitted.`})],Hc.prototype,`split`,void 0),F([z({attribute:`collapse-below`,type:`string`,default:`640px`,description:`Pixel breakpoint below which panes stack vertically instead of side-by-side.`})],Hc.prototype,`collapseBelow`,void 0),F([hn(`.wrapper`)],Hc.prototype,`wrapper`,void 0),F([pn()],Hc.prototype,`panes`,void 0),Hc=F([H(`quantic-splitter-group`)],Hc);var Uc=class extends V{constructor(){super(...arguments),this.collapsed=!1,this.minSize=10,this.maxSize=90,this.variant=`default`}render(){return L`<slot></slot>`}};Uc.meta={tag:`quantic-splitter-pane`,description:`Individual resizable pane within a quantic-splitter-group. Set min-size and max-size to constrain how far it can be dragged.`,category:`layout`,subComponentOf:`quantic-splitter-group`,slots:{"":{description:`Pane content.`}},relatedTo:[`quantic-splitter-group`]},Uc.styles=I`
    :host {
      display: block;
      flex: var(--quantic-component-splitter-pane-flex-grow, 1) 0 0%;
      min-width: 0;
      min-height: 0;
      overflow: auto;
    }

    :host([collapsed]) {
      flex: 0 0 0%;
      overflow: hidden;
    }

    :host([stacked]) {
      flex: 0 0 auto;
      overflow: auto;
    }

    :host([variant='solid']) {
      background: var(--quantic-bg-secondary);
    }
  `,F([z({type:`boolean`,default:`false`,reflect:!0,description:`Collapses the pane to zero size, hiding its content.`})],Uc.prototype,`collapsed`,void 0),F([z({type:`number`,default:`10`,attribute:`min-size`,description:`Minimum size as a percentage of the splitter container.`})],Uc.prototype,`minSize`,void 0),F([z({type:`number`,default:`90`,attribute:`max-size`,description:`Maximum size as a percentage of the splitter container.`})],Uc.prototype,`maxSize`,void 0),F([z({type:`"default" | "solid"`,default:`default`,reflect:!0,description:`Visual style — "solid" applies a secondary background color.`})],Uc.prototype,`variant`,void 0),Uc=F([H(`quantic-splitter-pane`)],Uc);var Wc;(function(e){e.Outline=`outline`,e.Minimal=`minimal`,e.Striped=`striped`})(Wc||={});var Gc;(function(e){e.ExtraSmall=`xs`,e.Small=`sm`,e.Medium=`md`,e.Large=`lg`})(Gc||={});var Kc;(function(e){e.Ascending=`asc`,e.Descending=`desc`,e.None=`none`})(Kc||={});var qc;(function(e){e.Left=`left`,e.Center=`center`,e.Right=`right`})(qc||={});var Jc=$a(`table.variant`),Yc=class extends Yn(V,[`toolbar`,`header`,`footer`,`controls`]){constructor(){super(...arguments),this.size=Gc.Medium,this.variant=Wc.Outline,this.dense=!1,this.ariaLabel=null}render(){return L`
      <slot name="toolbar" class="toolbar"></slot>
      <div
        role="table"
        class="table"
        aria-label=${lr(this.ariaLabel)}
        aria-labelledby=${lr(this.ariaLabelledby)}
      >
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
      <slot name="controls" class="controls"></slot>
    `}};Yc.meta={tag:`quantic-table`,description:`Top-level table wrapper. Manages layout and passes context to child rows and cells. Place quantic-table-header, quantic-table-body, and quantic-table-footer inside. Use the toolbar slot for quantic-table-controls above the table.`,category:`display`,accessibility:{providedByComponent:[`table roles, passed down to rows and cells`],requiredFromConsumer:[`an ariaLabel or ariaLabelledby naming the table`]},slots:{header:{description:`quantic-table-header element.`},"":{description:`quantic-table-body element.`},footer:{description:`quantic-table-footer element.`},toolbar:{description:`quantic-table-controls or other toolbar content placed above the table.`},controls:{description:`quantic-table-controls or pagination content placed below the table.`}}},Yc.styles=I`
    :host {
      display: block;
      width: fit-content;
      font-family: var(--quantic-font-family-body);
      font-size: var(--quantic-component-table-font-size, var(--quantic-internal-table-font-size));
      overflow-x: auto;

      --quantic-internal-table-padding: var(--quantic-spacing-3);
      --quantic-internal-table-font-size: var(--quantic-font-size-body-sm);
      --quantic-component-table-color: var(--quantic-text-secondary);
      --quantic-component-table-header-color: var(--quantic-text-secondary);
      --quantic-component-table-border-color: var(--quantic-border-secondary);
      --quantic-component-table-row-striped-bg: var(--quantic-bg-secondary);
    }

    .table {
      display: table;
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      table-layout: auto;
    }

    /* Size */
    :host([size='xs']) {
      --quantic-internal-table-padding: var(--quantic-spacing-3);
      --quantic-internal-table-font-size: var(--quantic-font-size-body-xs);
    }

    :host([size='sm']) {
      --quantic-internal-table-padding: var(--quantic-spacing-4);
      --quantic-internal-table-font-size: var(--quantic-font-size-body-sm);
    }

    :host([size='md']) {
      --quantic-internal-table-padding: var(--quantic-spacing-5);
      --quantic-internal-table-font-size: var(--quantic-font-size-body-md);
    }

    :host([size='lg']) {
      --quantic-internal-table-padding: var(--quantic-spacing-6);
      --quantic-internal-table-font-size: var(--quantic-font-size-body-md);
    }

    /* Dense variants - relative to size */
    :host([dense][size='xs']) {
      --quantic-internal-table-padding: var(--quantic-spacing-1-5);
    }

    :host([dense][size='sm']) {
      --quantic-internal-table-padding: var(--quantic-spacing-2);
    }

    :host([dense][size='md']) {
      --quantic-internal-table-padding: var(--quantic-spacing-2);
    }

    :host([dense][size='lg']) {
      --quantic-internal-table-padding: var(--quantic-spacing-3);
    }

    .toolbar,
    .controls {
      display: block;
      padding: var(--quantic-component-table-padding, var(--quantic-internal-table-padding));
    }

    .toolbar {
      border-bottom: 1px solid var(--quantic-component-table-border-color);
    }

    :host([variant='minimal']) .controls {
      border-top: 1px solid var(--quantic-component-table-border-color);
    }

    [hidden] {
      display: none;
    }
  `,F([z({type:`TableSize`,options:Object.values(Gc),default:Gc.Medium,reflect:!0,description:`Controls cell padding and font size.`})],Yc.prototype,`size`,void 0),F([io({context:Jc}),z({type:`TableVariant`,options:Object.values(Wc),default:Wc.Outline,reflect:!0,description:`Visual style. "outline" adds row borders; "striped" alternates row backgrounds; "minimal" removes borders.`})],Yc.prototype,`variant`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Reduces cell padding for compact display.`})],Yc.prototype,`dense`,void 0),F([z({type:`string`,attribute:`aria-label`,description:`Accessible label for the table.`})],Yc.prototype,`ariaLabel`,void 0),F([z({type:`string`,attribute:`aria-labelledby`,description:`ID of an element that labels the table.`})],Yc.prototype,`ariaLabelledby`,void 0),Yc=F([H(`quantic-table`)],Yc);var Xc=class extends V{constructor(){super(...arguments),this.ariaLabel=null}render(){return L`
      <div class="start">
        <slot></slot>
      </div>
      <div class="end">
        <slot name="end"></slot>
      </div>
    `}};Xc.meta={tag:`quantic-table-controls`,description:`Toolbar area placed above or below a quantic-table via the toolbar or controls slot. Provides a two-zone layout: default slot for start-aligned items (search, filters) and the end slot for end-aligned items (bulk actions, column toggles).`,category:`display`,subComponentOf:`quantic-table`,slots:{"":{description:`Start-aligned controls such as search inputs and filter buttons.`},end:{description:`End-aligned controls such as bulk actions or column visibility toggles.`}},relatedTo:[`quantic-table`]},Xc.styles=I`
    :host {
      display: flex;
      align-items: center;
      gap: var(--quantic-spacing-3);
    }

    .start {
      display: flex;
      align-items: center;
      gap: var(--quantic-spacing-3);
      flex: 1;
    }

    .end {
      display: flex;
      align-items: center;
      gap: var(--quantic-spacing-3);
    }
  `,F([z({type:`string`,attribute:`aria-label`,reflect:!0,description:`Accessible label for the toolbar.`})],Xc.prototype,`ariaLabel`,void 0),Xc=F([H(`quantic-table-controls`)],Xc);var Zc=class extends V{constructor(){super(...arguments),this.role=`rowgroup`}render(){return L`<slot></slot>`}};Zc.meta={tag:`quantic-table-header`,description:`The <thead> equivalent for quantic-table. Place quantic-table-row elements containing quantic-table-head cells as children.`,category:`display`,subComponentOf:`quantic-table`,slots:{"":{description:`quantic-table-row elements with quantic-table-head cells.`}},relatedTo:[`quantic-table`,`quantic-table-head`]},Zc.styles=I`
    :host {
      display: table-header-group;
      border-bottom: 1px solid var(--quantic-border-secondary);
      --quantic-component-table-row-striped-bg: transparent;
    }
  `,F([z({type:`string`,default:`rowgroup`,reflect:!0,description:`ARIA role for the header row group.`})],Zc.prototype,`role`,void 0),Zc=F([H(`quantic-table-header`)],Zc),Gs.ensureDefined(),Ws.ensureDefined(),qs.ensureDefined();var Qc=class extends V{constructor(){super(...arguments),this.role=`columnheader`,this.scope=`col`,this.sortable=!1,this.sortDirection=Kc.None,this.align=qc.Left}willUpdate(){this.style&&(this.width&&(this.style.width=this.width),this.style.setProperty(`--cell-align`,this.align))}handleSort(){if(!this.sortable)return;let e=this.sortDirection===Kc.None?Kc.Ascending:this.sortDirection===Kc.Ascending?Kc.Descending:Kc.Ascending;this.dispatchEvent(new CustomEvent(`sort-change`,{detail:{direction:e,key:this.sortKey},bubbles:!0,composed:!0}))}render(){return this.sortable?L`
        <button
          @click=${this.handleSort}
          aria-sort=${this.sortDirection===Kc.None?`none`:this.sortDirection===Kc.Ascending?`ascending`:`descending`}
        >
          <slot></slot>
          ${this.sortDirection===Kc.Ascending?L`<quantic-icon-lucide-arrow-up
                size="xxs"
                class="sort-icon"
              ></quantic-icon-lucide-arrow-up>`:this.sortDirection===Kc.Descending?L`<quantic-icon-lucide-arrow-down
                  size="xxs"
                  class="sort-icon"
                ></quantic-icon-lucide-arrow-down>`:L`<quantic-icon-lucide-chevrons-up-down
                  size="xxs"
                  class="sort-icon"
                ></quantic-icon-lucide-chevrons-up-down>`}
        </button>
      `:L`<slot></slot>`}};Qc.meta={tag:`quantic-table-head`,description:`Individual column header cell within a quantic-table-header row. Renders as a <th> equivalent and supports optional sort controls. Emits sort-change when clicked while sortable.`,category:`display`,subComponentOf:`quantic-table`,slots:{"":{description:`Column header label text or content.`}},relatedTo:[`quantic-table-header`,`quantic-table`]},Qc.styles=I`
    :host {
      display: table-cell;
      padding: var(--quantic-component-table-padding, var(--quantic-internal-table-padding));
      font-weight: var(--quantic-font-weight-semibold);
      color: var(--quantic-component-table-header-color);
      border-bottom: 1px solid var(--quantic-component-table-border-color);
      text-align: var(--cell-align, left);
      vertical-align: middle;
    }

    .head-content {
      display: flex;
      align-items: center;
      gap: var(--quantic-spacing-2);
    }

    button {
      background: none;
      appearance: none;
      border: none;
      padding: 0;
      font: inherit;
      line-height: 1;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: var(--cell-align, left);
      gap: var(--quantic-spacing-2);
      width: 100%;
      color: inherit;
      font-weight: inherit;
      position: relative;
      border-radius: var(--quantic-radius-sm);
      outline: none;
      user-select: none;
    }

    button::before {
      content: '';
      pointer-events: none;
      display: block;
      position: absolute;
      inset: 0;
      border-radius: var(--quantic-radius-sm);
      border: 2px solid var(--quantic-focus-ring);
      transition: all 0.3s ease-in-out;
      opacity: 0;
    }

    button:focus-visible::before {
      inset: -4px;
      opacity: 1;
      border: 2px solid var(--quantic-focus-ring);
    }

    .sort-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      opacity: 0.4;
      transition: opacity 0.2s ease-in-out;
    }

    :host([sort-direction='asc']) .sort-icon,
    :host([sort-direction='desc']) .sort-icon {
      opacity: 1;
    }

    :host([sort-direction='asc']),
    :host([sort-direction='desc']) {
      font-weight: var(--quantic-font-weight-bold);
    }

    button:hover,
    button:focus-visible {
      color: var(--quantic-text-primary);
    }

    button:hover .sort-icon,
    button:focus-visible .sort-icon {
      opacity: 1;
    }
  `,F([z({type:`string`,default:`columnheader`,reflect:!0,description:`ARIA role for the column header.`})],Qc.prototype,`role`,void 0),F([z({type:`string`,default:`col`,reflect:!0,description:`Scope attribute for the th element.`})],Qc.prototype,`scope`,void 0),F([z({type:`boolean`,default:`false`,description:`Enables sort controls on this column header.`})],Qc.prototype,`sortable`,void 0),F([z({type:`SortDirection`,options:Object.values(Kc),default:Kc.None,attribute:`sort-direction`,description:`Current sort direction. Set to "asc" or "desc" to show the active sort indicator.`})],Qc.prototype,`sortDirection`,void 0),F([z({type:`string`,attribute:`sort-key`,description:`Identifier included in the sort-change event detail to identify which column was sorted.`})],Qc.prototype,`sortKey`,void 0),F([z({type:`string`,description:`Inline width applied to this column (e.g. "200px" or "20%").`})],Qc.prototype,`width`,void 0),F([z({type:`CellAlign`,options:Object.values(qc),default:qc.Left,reflect:!0,description:`Horizontal text alignment within the header cell.`})],Qc.prototype,`align`,void 0),Qc=F([B(`sort-change`,{description:`Fired when a sortable header is clicked.`,detail:`{ direction: "asc" | "desc", key?: string }`}),H(`quantic-table-head`)],Qc);var $c=class extends V{constructor(){super(...arguments),this.role=`rowgroup`}render(){return L`<slot></slot>`}};$c.meta={tag:`quantic-table-body`,description:`The <tbody> equivalent for quantic-table. Contains quantic-table-row elements with data cells.`,category:`display`,subComponentOf:`quantic-table`,slots:{"":{description:`quantic-table-row elements.`}},relatedTo:[`quantic-table`,`quantic-table-row`]},$c.styles=I`
    :host {
      display: table-row-group;
    }
  `,F([z({type:`string`,default:`rowgroup`,reflect:!0,description:`ARIA role for the row group.`})],$c.prototype,`role`,void 0),$c=F([H(`quantic-table-body`)],$c);var el=class extends V{constructor(){super(...arguments),this.variant=Wc.Outline,this.role=`row`,this.selected=!1}willUpdate(){this.classList&&Object.entries({"variant--minimal":this.variant===Wc.Minimal,"variant--outline":this.variant===Wc.Outline,"variant--striped":this.variant===Wc.Striped}).forEach(([e,t])=>{this.classList.toggle(e,t)})}render(){return L`<slot></slot>`}};el.meta={tag:`quantic-table-row`,description:`Single data row within a quantic-table-body or quantic-table-footer. Receives variant context from the parent quantic-table and applies matching styles. A row that selects an item (for example to show it in a quantic-layout-pane) keeps table semantics: give its name cell role="rowheader" and put a native button or link in it. Selection is owned by the consumer: handle clicks, set selected, and mark that control with aria-current. The row only shows the selected state.`,category:`display`,subComponentOf:`quantic-table`,avoidWhen:[{when:`the row itself should take focus and arrow keys should move between rows or cells`,useInstead:`a dedicated grid component; quantic-table is not role="grid" and rows are not focusable`}],accessibility:{providedByComponent:[`a visible selected ring, including in forced-colors mode`],requiredFromConsumer:[`role="rowheader" on the name cell, holding one native button or link named by the item (quantic-button does not forward aria-expanded or aria-current)`,`click handling and the selected state: the row does not select itself`,`aria-current="true" on that button or link while the row is selected, since the ring alone is not announced`,`aria-expanded and aria-controls on that button when it opens a pane`,`an accessible name on other row controls that includes the item, such as "Actions for training-datasets"`]},slots:{"":{description:`quantic-table-cell elements.`}},relatedTo:[`quantic-table-body`,`quantic-table-cell`]},el.styles=I`
    :host {
      --quantic-component-table-row-bg-selected: transparent;
      --quantic-component-table-row-border-selected: var(--quantic-border-brand);

      display: table-row;
    }

    /* Rows can't take a box-shadow or a reliable outline in every engine, so cells draw the ring.
       selected="false" parses as false, so the selectors exclude it. */
    :host(:dir(rtl)) {
      --quantic-internal-table-row-dir: -1;
    }

    :host([selected]:not([selected='false'])) ::slotted(*) {
      --quantic-internal-table-row-ring: var(--quantic-component-table-row-border-selected);
      --quantic-internal-table-row-edge: calc(var(--quantic-internal-table-row-dir, 1) * 2px);
      background-color: var(--quantic-component-table-row-bg-selected);
      box-shadow:
        inset 0 2px 0 var(--quantic-internal-table-row-ring),
        inset 0 -2px 0 var(--quantic-internal-table-row-ring);
    }

    :host([selected]:not([selected='false'])) ::slotted(:first-child) {
      box-shadow:
        inset var(--quantic-internal-table-row-edge) 0 0 var(--quantic-internal-table-row-ring),
        inset 0 2px 0 var(--quantic-internal-table-row-ring),
        inset 0 -2px 0 var(--quantic-internal-table-row-ring);
    }

    :host([selected]:not([selected='false'])) ::slotted(:last-child) {
      box-shadow:
        inset calc(-1 * var(--quantic-internal-table-row-edge)) 0 0 var(--quantic-internal-table-row-ring),
        inset 0 2px 0 var(--quantic-internal-table-row-ring),
        inset 0 -2px 0 var(--quantic-internal-table-row-ring);
    }

    :host([selected]:not([selected='false'])) ::slotted(:only-child) {
      box-shadow: inset 0 0 0 2px var(--quantic-internal-table-row-ring);
    }

    /* Forced colors drop box shadows, so draw the ring as an outline. */
    @media (forced-colors: active) {
      :host([selected]:not([selected='false'])) ::slotted(*) {
        box-shadow: none;
        outline: 2px solid Highlight;
        outline-offset: -2px;
      }
    }

    /* Striped variant */
    :host(:nth-child(odd).variant--striped) {
      background-color: var(--quantic-component-table-row-striped-bg);
    }
  `,F([ao({context:Jc,subscribe:!0})],el.prototype,`variant`,void 0),F([z({type:`string`,default:`row`,reflect:!0,description:`ARIA role for the table row.`})],el.prototype,`role`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Shows the row as the current selection. Visual only: set aria-current="true" on the row's button or link as well. Not aria-selected, which is only valid in a grid.`})],el.prototype,`selected`,void 0),el=F([H(`quantic-table-row`)],el);var tl=class extends V{constructor(){super(...arguments),this.variant=Wc.Outline,this.role=`cell`,this.align=qc.Left}willUpdate(){this.classList&&this.style&&(Object.entries({"variant--minimal":this.variant===Wc.Minimal,"variant--outline":this.variant===Wc.Outline,"variant--striped":this.variant===Wc.Striped}).forEach(([e,t])=>{this.classList.toggle(e,t)}),this.width&&(this.style.width=this.width),this.style.setProperty(`--cell-align`,this.align))}render(){return L`<slot></slot>`}};tl.meta={tag:`quantic-table-cell`,description:`Individual data cell within a quantic-table-row. Receives variant context from the parent quantic-table.`,category:`display`,subComponentOf:`quantic-table`,slots:{"":{description:`Cell content — text, elements, or other components.`}},relatedTo:[`quantic-table-row`,`quantic-table`]},tl.styles=I`
    :host {
      display: table-cell;
      padding: var(--quantic-component-table-padding, var(--quantic-internal-table-padding));
      font-size: var(--quantic-component-table-font-size, var(--quantic-internal-table-font-size));
      color: var(--quantic-component-table-color);
      vertical-align: middle;
      text-align: var(--cell-align, left);
    }

    :host(.variant--outline) {
      border-bottom: 1px solid var(--quantic-component-table-border-color);
    }
  `,F([ao({context:Jc,subscribe:!0})],tl.prototype,`variant`,void 0),F([z({type:`string`,default:`cell`,reflect:!0,description:`ARIA role for the table cell.`})],tl.prototype,`role`,void 0),F([z({type:`CellAlign`,options:Object.values(qc),default:qc.Left,reflect:!0,description:`Horizontal text alignment within the cell.`})],tl.prototype,`align`,void 0),F([z({type:`string`,description:`Inline width applied to this column (e.g. "200px" or "20%").`})],tl.prototype,`width`,void 0),tl=F([H(`quantic-table-cell`)],tl);var nl={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},rl={[nl.ExtraSmall]:ho.ExtraSmall,[nl.Large]:ho.Medium};go.ensureDefined(),Or.ensureDefined();var il=class extends V{constructor(){super(...arguments),this.size=nl.Medium,this.selectable=!1,this.dismissible=!1,this.selected=!1}handleClick(){this.selectable&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(`tag-select`,{detail:{selected:this.selected},bubbles:!0,composed:!0})))}handleDismiss(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent(`tag-dismiss`,{bubbles:!0,composed:!0}))}handleKeyDown(e){this.selectable&&(e.key===`Enter`||e.key===` `)&&!e.target.closest(`.dismiss-button`)&&(e.preventDefault(),this.handleClick())}render(){return tr`
      <div
        class=${cr({main:!0,[`size--${this.size}`]:!0,selectable:this.selectable})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        tabindex=${this.selectable?`0`:`-1`}
        role=${this.selectable?`checkbox`:void 0}
        aria-checked=${this.selectable?String(this.selected):void 0}
      >
        ${this.selectable?tr`<quantic-checkbox
                size=${rl[this.size]??`sm`}
                ?checked=${this.selected}
              ></quantic-checkbox>`:null}
        <slot name="before"></slot>
        <slot></slot>
        <slot name="after"></slot>
        ${this.dismissible?tr`
                <button class="dismiss-button" @click=${this.handleDismiss} aria-label="Dismiss">
                  <quantic-icon-lucide-x size="xs"></quantic-icon-lucide-x>
                </button>
              `:null}
      </div>
    `}};il.meta={tag:`quantic-tag`,description:`Compact inline label that can be dismissible or selectable. Used for filters, categories, and version tags. Use quantic-count-tag or quantic-status-tag for specialised variants.`,category:`display`,avoidWhen:[{when:`the tag shows a numeric count`,useInstead:`quantic-count-tag`},{when:`the tag shows a semantic status`,useInstead:`quantic-status-tag`}],accessibility:{providedByComponent:[`keyboard dismissal when dismissible`,`roving tabindex within a tag group`]},slots:{"":{description:`Tag label text or icon content.`},before:{description:`Leading content (e.g. icon or color dot).`},after:{description:`Trailing content (e.g. count badge).`}},relatedTo:[`quantic-count-tag`,`quantic-status-tag`,`quantic-badge`]},il.styles=I`
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
  `,F([z({type:`TagSize`,options:Object.values(nl),default:nl.Medium,description:`Controls padding and font size.`})],il.prototype,`size`,void 0),F([z({type:`boolean`,default:`false`,description:`Renders a checkbox and makes the tag toggleable.`})],il.prototype,`selectable`,void 0),F([z({type:`boolean`,default:`false`,description:`Shows a dismiss (×) button to remove the tag.`})],il.prototype,`dismissible`,void 0),F([z({type:`boolean`,default:`false`,description:`Current selected state when selectable is true.`})],il.prototype,`selected`,void 0),il=F([B(`tag-select`,{description:`Fired when a tag's selection state changes (only when selectable is true).`,detail:`{ selected: boolean }`}),B(`tag-dismiss`,{description:`Fired when a tag's dismiss button is clicked (only when dismissible is true).`}),H(`quantic-tag`)],il);var al={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},ol={None:`none`,Vertical:`vertical`,Horizontal:`horizontal`,Both:`both`};Ba.ensureDefined();var sl=class extends La(V){constructor(){super(),this.value=``,this.name=``,this.placeholder=``,this.size=al.Medium,this.rows=4,this.resize=ol.Vertical,this.disabled=!1,this.required=!1,this.readOnly=!1,this.invalid=!1,this.autoComplete=`off`,this.internals=this.attachInternals()}updated(e){e.has(`value`)&&(this.internals.setFormValue(this.value),this.updateValidity()),xr(this,e,this.value)}forwardNative(e){let t=e.target;this.value=t.value,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}dispatchValueChanged(e){this.value=e.target.value}formResetCallback(){this.value=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}updateValidity(){let e=this.shadowRoot?.querySelector(`textarea`);e&&this.internals.setValidity(e.validity,e.validationMessage,e)}render(){let e=cr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return L`
      <div class=${e}>
        <textarea
          .value=${this.value}
          .autocomplete="${this.autoComplete}"
          class="input"
          placeholder=${this.placeholder}
          name=${this.name}
          .rows=${this.rows}
          part="input"
          style=${Os({resize:this.resize})}
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
        ${this.invalid?L`<quantic-icon-lucide-circle-alert
              name=${mr.CircleAlert}
              size=${pr.Small}
              class="error-icon"
            ></quantic-icon-lucide-circle-alert>`:``}
      </div>
    `}};sl.meta={tag:`quantic-textarea`,description:`Multi-line text field with native form association. Wrap in quantic-field to add a visible label, hint text, and validation messaging.`,category:`form`,avoidWhen:[{when:`the value is code or structured text needing a line gutter`,useInstead:`quantic-code-input`}],accessibility:{providedByComponent:[`form association`,`native textarea semantics`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},parts:{input:{description:`The native textarea element.`}},relatedTo:[`quantic-field`,`quantic-text-input`]},sl.formAssociated=!0,sl.styles=I`
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
  `,F([z({type:`string`,default:``,description:`Current value of the textarea.`})],sl.prototype,`value`,void 0),F([z({type:`string`,description:`Name submitted with form data.`})],sl.prototype,`name`,void 0),F([z({type:`string`,description:`Placeholder text shown when the field is empty.`,copyRule:`placeholder`})],sl.prototype,`placeholder`,void 0),F([z({type:`TextareaSize`,options:Object.values(al),default:al.Medium,description:`Controls padding and font size.`})],sl.prototype,`size`,void 0),F([z({type:`number`,default:`4`,description:`Number of visible text rows.`})],sl.prototype,`rows`,void 0),F([z({type:`TextareaResize`,options:Object.values(ol),default:ol.Vertical,description:`Controls the resize handle direction.`})],sl.prototype,`resize`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],sl.prototype,`disabled`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],sl.prototype,`required`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Makes the field non-editable but still focusable and selectable.`})],sl.prototype,`readOnly`,void 0),F([z({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],sl.prototype,`invalid`,void 0),F([z({type:`string`,default:`off`,reflect:!0,description:`Native autocomplete attribute passed to the inner <textarea>.`})],sl.prototype,`autoComplete`,void 0),sl=F([B(`value-changed`,{description:`Fired whenever the value changes, from user input or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),B(`input`,{forwarded:!0}),B(`change`,{forwarded:!0}),B(`focus`,{forwarded:!0}),B(`blur`,{forwarded:!0}),B(`keydown`,{forwarded:!0}),B(`keyup`,{forwarded:!0}),B(`keypress`,{forwarded:!0}),H(`quantic-textarea`)],sl);function cl(e){return e}var ll=/\/\*(?:[^*]|\*(?!\/))*\*\//g,ul=/\n/g,dl=/^\s*/,fl=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,pl=/^:\s*/,ml=/^((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|url\((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|[^)]*)\)|[^};])+)/,hl=/^[;\s]*/,gl=`
`,_l=`/`,vl=`*`,yl=``,bl=`comment`,xl=`declaration`;function Sl(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var n=1,r=1;function i(e){var t=e.match(ul);t&&(n+=t.length);var i=e.lastIndexOf(gl);r=~i?e.length-i:r+e.length}function a(){var e={line:n,column:r};return function(t){return t.position=new o(e),l(),t}}function o(e){this.start=e,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function s(i){var a=Error(t.source+`:`+n+`:`+r+`: `+i);if(a.reason=i,a.filename=t.source,a.line=n,a.column=r,a.source=e,!t.silent)throw a}function c(t){var n=t.exec(e);if(n){var r=n[0];return i(r),e=e.slice(r.length),n}}function l(){c(dl)}function u(e){for(var t;t=d();)e.push(t);return e}function d(){var t=a();if(_l==e.charAt(0)&&vl==e.charAt(1)){for(var n=2;yl!=e.charAt(n)&&(vl!=e.charAt(n)||_l!=e.charAt(n+1));)++n;if(n+=2,yl===e.charAt(n-1))return s(`End of comment missing`);var o=e.slice(2,n-2);return r+=2,i(o),e=e.slice(n),r+=2,t({type:bl,comment:o})}}function f(){var e=a(),t=c(fl);if(t){if(d(),!c(pl))return s(`property missing ':'`);var n=c(ml),r=e({type:xl,property:t[0].replace(ll,yl).trim(),value:n?n[0].replace(ll,yl).trim():yl});return c(hl),r}}function p(){var e=[];u(e);for(var t;t=f();)e.push(t),u(e);return e}return l(),p()}function Cl(e,t){let n=null;if(!e||typeof e!=`string`)return n;let r=Sl(e),i=typeof t==`function`;return r.forEach(e=>{if(e.type!==`declaration`)return;let{property:r,value:a}=e;i?t(r,a,e):a&&(n??={},n[r]=a)}),n}var wl=/^--[a-zA-Z0-9_-]+$/,Tl=/-([a-z])/g,El=/^[^-]+$/,Dl=/^-(webkit|moz|ms|o|khtml)-/,Ol=/^-(ms)-/,kl=e=>!e||El.test(e)||wl.test(e),Al=(e,t)=>t.toUpperCase(),jl=(e,t)=>`${t}-`,Ml=(e,t={})=>kl(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(Ol,jl):e.replace(Dl,jl),e.replace(Tl,Al));function Nl(e,t){let n={};return!e||typeof e!=`string`||Cl(e,(e,r)=>{e&&r&&(n[Ml(e,t)]=r)}),n}var Pl=(e,t,...n)=>{let r=typeof t?.style==`object`?t.style:void 0;return cl((e,t,...n)=>{let i=t?.style;return typeof i==`string`&&(t={...t,style:{...r,...Nl(i,{reactCompat:!0})}}),_.createElement(e,t,...n)})(e,t,...n)},q={..._,createElement:Pl};typeof window>`u`&&(globalThis.litSsrReactEnabled=!0);var Fl=P({react:q,tagName:`quantic-alert`,elementClass:kr,events:{onClose:`close`}});Fl.displayName=`Alert`;var Il=P({react:q,tagName:`quantic-badge`,elementClass:Xa});Il.displayName=`Badge`;var J=P({react:q,tagName:`quantic-button`,elementClass:ur});J.displayName=`Button`;var Ll=P({react:q,tagName:`quantic-button-bar-item`,elementClass:mo});Ll.displayName=`ButtonBarItem`;var Rl=P({react:q,tagName:`quantic-button-bar`,elementClass:po});Rl.displayName=`ButtonBar`;var zl=P({react:q,tagName:`quantic-checkbox`,elementClass:go,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`}});zl.displayName=`Checkbox`;var Bl=P({react:q,tagName:`quantic-combobox`,elementClass:qa,events:{onValueChanged:`value-changed`,onInputChanged:`input-changed`,onFocus:`focus`,onBlur:`blur`}});Bl.displayName=`Combobox`;var Vl=P({react:q,tagName:`quantic-confirm-dialog`,elementClass:Ts,events:{onConfirm:`confirm`,onCancel:`cancel`}});Vl.displayName=`ConfirmDialog`;var Hl=P({react:q,tagName:`quantic-dialog-actions`,elementClass:So});Hl.displayName=`DialogActions`;var Ul=P({react:q,tagName:`quantic-dialog-title`,elementClass:xo});Ul.displayName=`DialogTitle`;var Wl=P({react:q,tagName:`quantic-dialog`,elementClass:ws,events:{onOpenChanged:`open-changed`,onBeforeOpen:`before-open`,onAfterOpen:`after-open`,onBeforeClose:`before-close`,onAfterClose:`after-close`}});Wl.displayName=`Dialog`;var Gl=P({react:q,tagName:`quantic-icon-lucide-git-merge`,elementClass:Js});Gl.displayName=`LucideIconGitMerge`;var Kl=P({react:q,tagName:`quantic-icon-lucide-pencil`,elementClass:Ys});Kl.displayName=`LucideIconPencil`;var ql=P({react:q,tagName:`quantic-icon-lucide-trash-2`,elementClass:Zs});ql.displayName=`LucideIconTrash_2`;var Jl=P({react:q,tagName:`quantic-log-output`,elementClass:Rc});Jl.displayName=`LogOutput`;var Yl=P({react:q,tagName:`quantic-select`,elementClass:Us,events:{onValueChanged:`value-changed`,onFocus:`focus`,onBlur:`blur`}});Yl.displayName=`Select`;var Xl=P({react:q,tagName:`quantic-spinner`,elementClass:Vc});Xl.displayName=`Spinner`;var Zl=P({react:q,tagName:`quantic-splitter-group`,elementClass:Hc});Zl.displayName=`SplitterGroup`;var Ql=P({react:q,tagName:`quantic-splitter-pane`,elementClass:Uc});Ql.displayName=`SplitterPane`;var $l=P({react:q,tagName:`quantic-table-body`,elementClass:$c});$l.displayName=`TableBody`;var eu=P({react:q,tagName:`quantic-table-cell`,elementClass:tl});eu.displayName=`TableCell`;var Y=P({react:q,tagName:`quantic-table-controls`,elementClass:Xc});Y.displayName=`TableControls`;var tu=P({react:q,tagName:`quantic-table-head`,elementClass:Qc,events:{onSortChange:`sort-change`}});tu.displayName=`TableHead`;var nu=P({react:q,tagName:`quantic-table-header`,elementClass:Zc});nu.displayName=`TableHeader`;var ru=P({react:q,tagName:`quantic-table-row`,elementClass:el});ru.displayName=`TableRow`;var iu=P({react:q,tagName:`quantic-table`,elementClass:Yc});iu.displayName=`Table`;var au=P({react:q,tagName:`quantic-tag`,elementClass:il,events:{onTagSelect:`tag-select`,onTagDismiss:`tag-dismiss`}});au.displayName=`Tag`;var ou=P({react:q,tagName:`quantic-text-input`,elementClass:Vs,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`,onKeypress:`keypress`}});ou.displayName=`TextInput`;var su=P({react:q,tagName:`quantic-textarea`,elementClass:sl,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`,onKeypress:`keypress`}});su.displayName=`Textarea`;async function cu(e){let t=await fetch(e);if(!t.ok)throw Error(`${e}: HTTP ${t.status}`);return await t.json()}var lu=()=>cu(`/api/assets`),uu=()=>cu(`/api/status`),du=()=>cu(`/api/vocabulary`);async function fu(e,t,n){try{let r=await fetch(t,{method:e,headers:n===void 0?void 0:{"Content-Type":`application/json`},body:n===void 0?void 0:JSON.stringify(n)}),i=await r.json().catch(()=>({}));return r.ok&&i.asset?{ok:!0,asset:ku(i.asset)}:{ok:!1,status:r.status,error:i.error??`HTTP ${r.status}`,errors:i.errors??[]}}catch(e){return{ok:!1,status:0,error:e.message,errors:[]}}}var pu=(e,t)=>fu(`PATCH`,`/api/assets/${encodeURIComponent(e)}`,t),mu=e=>fu(`POST`,`/api/assets/${encodeURIComponent(e)}/confirm`),hu=e=>fu(`POST`,`/api/assets/${encodeURIComponent(e)}/retire`),gu=e=>fu(`POST`,`/api/assets/${encodeURIComponent(e)}/restore`),_u=(e,t=8)=>cu(`/api/assets/${encodeURIComponent(e)}/similar?limit=${t}`);function vu(e){let t={},n=[];for(let r of e){let e=/^([a-z_]+)(?:\.[a-z_]+)?:/.exec(r);e?(t[e[1]]??=[]).push(r):n.push(r)}return{byField:t,general:n}}async function yu(e,t,n){try{let r=await fetch(t,{method:e,headers:n?.json===void 0?void 0:{"Content-Type":`application/json`},body:n?.form??(n?.json===void 0?void 0:JSON.stringify(n.json))}),i=await r.json().catch(()=>({})),a=Array.isArray(i.errors)?` (${i.errors.join(`; `)})`:``,o=r.ok?``:`${i.error??i.message??`HTTP ${r.status}`}${a}`;return{ok:r.ok,status:r.status,data:i,error:o}}catch(e){return{ok:!1,status:0,data:{},error:e.message}}}var bu=encodeURIComponent,xu=(e,t)=>yu(`POST`,`/api/vocabulary/${bu(e)}`,{json:{slug:t}}),Su=(e,t,n)=>yu(`POST`,`/api/vocabulary/${bu(e)}/${bu(t)}/rename`,{json:{new:n}}),Cu=(e,t,n)=>yu(`POST`,`/api/vocabulary/${bu(e)}/${bu(t)}/merge`,{json:{into:n}}),wu=(e,t)=>yu(`DELETE`,`/api/vocabulary/${bu(e)}/${bu(t)}`),Tu=e=>yu(`POST`,`/api/ingest`,{form:e}),Eu=()=>yu(`POST`,`/api/sync`),Du=e=>yu(`POST`,`/api/${e}`),Ou=e=>yu(`GET`,`/api/jobs/${bu(e)}`),ku=e=>({...e,thumb_url:`/thumbs/${e.id}.webp`,full_url:`/files/${e.id}`}),Au=e=>{let t=e.data?.errors;return Array.isArray(t)?t:[]};async function ju(e,t,n){let r=await yu(`POST`,`/api/assets/${bu(e)}/verdict`,{json:n===void 0?{verdict:t}:{verdict:t,reason:n}});return r.ok&&r.data.asset&&(r.data={...r.data,asset:ku(r.data.asset)}),r}var Mu=(e,t)=>yu(`POST`,`/api/verdicts`,{json:{verdict:e,ids:t}}),Nu=e=>yu(`POST`,`/api/undo`,{json:{commit:e}}),Pu=e=>yu(`POST`,`/api/rate${e?`?redo=${e}`:``}`),Fu=()=>yu(`GET`,`/api/rate/summary`);async function Iu(e,t,n){let r=await yu(e,t,n?{form:n}:void 0);return r.ok?{ok:!0,data:r.data}:{ok:!1,status:r.status,error:r.error}}var Lu=e=>`/api/capture/${bu(e)}`,Ru=()=>Iu(`GET`,`/api/capture`),zu=e=>Iu(`POST`,`${Lu(e)}/opened`),Bu=e=>Iu(`POST`,`${Lu(e)}/unavailable`),Vu=(e,t)=>Iu(`DELETE`,`${Lu(e)}/items/${t}`),Hu=e=>Iu(`DELETE`,`${Lu(e)}/items`);function Uu(e,t,n){let r=new FormData;return r.append(`file`,t),n!==void 0&&r.append(`slide`,String(n)),Iu(`POST`,`${Lu(e)}/files`,r)}var Wu=()=>yu(`GET`,`/api/inspiration`),Gu=(e,t)=>yu(`POST`,`/api/inspiration/status`,{json:{status:e,ids:t}}),Ku=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),X=o(((e,t)=>{t.exports=Ku()}))(),qu=600;function Ju({jobId:e,name:t,onFinished:n}){let[r,i]=(0,_.useState)({state:`running`,log:[],result:null,error:null}),[a,o]=(0,_.useState)(null),s=(0,_.useRef)(n);return(0,_.useEffect)(()=>{s.current=n}),(0,_.useEffect)(()=>{let t=!1,n,r=async()=>{let a=await Ou(e);t||(a.ok?(i(a.data),a.data.state===`running`?n=setTimeout(r,qu):s.current(a.data)):o(a.error))};return r(),()=>{t=!0,n&&clearTimeout(n)}},[e]),(0,X.jsxs)(`section`,{className:`job-log`,"aria-label":`${t} job`,children:[(0,X.jsxs)(`div`,{className:`job-log-head`,children:[(0,X.jsx)(`strong`,{children:t}),(0,X.jsx)(Il,{size:`sm`,color:r.state===`failed`?`error`:r.state===`done`?`success`:`warning`,children:r.state})]}),a&&(0,X.jsxs)(Fl,{type:`error`,children:[`Lost contact with job: `,a]}),r.error&&(0,X.jsx)(Fl,{type:`error`,children:r.error}),(0,X.jsx)(Jl,{lines:r.log,follow:!0})]})}var Yu=[`hero`,`spot-illustration`,`background`,`screenshot`,`diagram`,`lifestyle`];function Xu({products:e,onIngested:t,onReviewQueue:n,rater:r,rateJob:i,onAutoRate:a,rateError:o,waiting:s}){let[c,l]=(0,_.useState)([]),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(``),[y,b]=(0,_.useState)(``),[x,S]=(0,_.useState)(``),[C,w]=(0,_.useState)(!1),[T,E]=(0,_.useState)(!1),[D,ee]=(0,_.useState)(null),[O,te]=(0,_.useState)(null),[k,ne]=(0,_.useState)(null),[re,ie]=(0,_.useState)(null),[A,j]=(0,_.useState)(void 0),ae=A!==void 0,oe=ae&&i&&i.id!==A?i:null,se=(0,_.useRef)(null),ce=e=>{e?.length&&l(t=>[...t,...Array.from(e)])},le=f===`screenshot`,ue=c.length>0&&f!==``&&m.trim()!==``&&(!le||x!==``);return(0,X.jsxs)(`div`,{className:`ingest`,children:[(0,X.jsxs)(`div`,{className:`dropzone${u?` dropzone-over`:``}`,onDragOver:e=>{e.preventDefault(),d(!0)},onDragLeave:()=>d(!1),onDrop:e=>{e.preventDefault(),d(!1),ce(e.dataTransfer.files)},children:[(0,X.jsx)(`p`,{children:`Drop images here`}),(0,X.jsx)(J,{size:`sm`,variant:`outline`,onClick:()=>se.current?.click(),children:`Choose files`}),(0,X.jsx)(`input`,{ref:se,type:`file`,multiple:!0,accept:`image/*`,hidden:!0,"aria-label":`Choose image files`,onChange:e=>{ce(e.target.files),e.target.value=``}}),c.length>0&&(0,X.jsx)(`ul`,{className:`ingest-files`,"aria-label":`Files to ingest`,children:c.map((e,t)=>(0,X.jsxs)(`li`,{children:[e.name,` `,(0,X.jsx)(J,{size:`sm`,variant:`ghost`,onClick:()=>l(e=>e.filter((e,n)=>n!==t)),children:`Remove`})]},`${e.name}-${t}`))})]}),(0,X.jsxs)(`div`,{className:`ingest-form`,children:[(0,X.jsxs)(`div`,{className:`field`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`Class`}),(0,X.jsx)(Yl,{"aria-label":`Class`,placeholder:`Choose class`,options:Yu.map(e=>[e,e]),value:f,onValueChanged:e=>p(e.detail.value)})]}),le&&(0,X.jsxs)(`div`,{className:`field`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`Product (required for screenshots)`}),(0,X.jsx)(Yl,{"aria-label":`Product`,placeholder:`Choose product`,options:e.map(e=>[e,e]),value:x,onValueChanged:e=>S(e.detail.value)})]}),(0,X.jsxs)(`div`,{className:`field`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`Source origin`}),(0,X.jsx)(ou,{"aria-label":`Source origin`,placeholder:`e.g. adobe-stock`,value:m,onValueChanged:e=>h(e.detail.value)})]}),(0,X.jsxs)(`div`,{className:`field`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`License (optional)`}),(0,X.jsx)(ou,{"aria-label":`License`,value:g,onValueChanged:e=>v(e.detail.value)})]}),(0,X.jsxs)(`div`,{className:`field`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`License id (optional)`}),(0,X.jsx)(ou,{"aria-label":`License id`,value:y,onValueChanged:e=>b(e.detail.value)})]}),(0,X.jsx)(`div`,{className:`field`,children:(0,X.jsx)(zl,{size:`sm`,checked:C,onValueChanged:e=>w(e.detail.checked),children:`These are anti-examples (what not to do)`})}),(0,X.jsx)(`div`,{children:(0,X.jsx)(J,{disabled:!ue||T,onClick:async()=>{E(!0),ee(null),te(null),ne(null),ie(null),j(void 0);let e=new FormData;c.forEach(t=>e.append(`files`,t)),e.append(`asset_class`,f),e.append(`origin`,m.trim()),g.trim()&&e.append(`license`,g.trim()),y.trim()&&e.append(`license_id`,y.trim()),le&&e.append(`product`,x),C&&e.append(`anti_example`,`true`);let n=await Tu(e);E(!1),n.ok?(te(n.data),l([]),t(n.data)):ee(n.error)},children:T?`Ingesting...`:`Ingest ${c.length||``} file${c.length===1?``:`s`}`})})]}),D&&(0,X.jsx)(Fl,{type:`error`,children:D}),O&&(0,X.jsxs)(`section`,{className:`ingest-report`,"aria-label":`Ingest report`,children:[(0,X.jsxs)(Fl,{type:O.created.length?`success`:`warning`,children:[O.created.length,` created, `,O.skipped.length,` skipped.`]}),O.created.length>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(`ul`,{children:O.created.map(e=>(0,X.jsx)(`li`,{children:e},e))}),(0,X.jsx)(`p`,{children:`Re-index so new assets get thumbnails and show up in search.`}),(0,X.jsxs)(`div`,{className:`ingest-actions`,children:[(0,X.jsx)(J,{size:`sm`,onClick:async()=>{ie(null);let e=await Du(`reindex`);e.ok?ne(e.data.job_id):ie(e.error)},disabled:k!==null,children:`Re-index now`}),` `,(0,X.jsx)(J,{size:`sm`,variant:`outline`,onClick:n,children:`Open review queue`})]}),re&&(0,X.jsx)(Fl,{type:`error`,children:re}),k&&(0,X.jsx)(Ju,{jobId:k,name:`Re-index`,onFinished:()=>t(O)},k),r?.available&&!oe&&s>0&&(0,X.jsxs)(`div`,{className:`ingest-autorate`,children:[(0,X.jsx)(`span`,{children:i?.running?`Auto-rate is already running; these images join the next run.`:`Auto-rate ${s} image${s===1?``:`s`} waiting for the bot?`}),(0,X.jsx)(J,{size:`sm`,disabled:!!i?.running,onClick:()=>{j(i?.id??null),a()},children:`Auto-rate`})]}),ae&&o&&(0,X.jsx)(Fl,{type:`error`,children:o}),oe&&(0,X.jsx)(Ju,{jobId:oe.id,name:`Auto-rate`,onFinished:()=>{}},oe.id)]}),O.skipped.length>0&&(0,X.jsx)(`ul`,{"aria-label":`Skipped files`,children:O.skipped.map((e,t)=>(0,X.jsxs)(`li`,{children:[(0,X.jsx)(`strong`,{children:e.file}),`: `,e.reason]},`${e.file}-${t}`))})]})]})}var Z=(e,t)=>`${e} ${t}${e===1?``:`s`}`;function Q(e){let t=e.git;if(t&&t.dirty_managed.length)return{tone:`blocked`,text:`${Z(t.dirty_managed.length,`library file`)} changed outside Quarry. Saving is paused until ${t.dirty_managed.length===1?`it is`:`they are`} committed or discarded.`,action:null};let n=t?.ahead??0;return e.exports_stale||e.index_stale||n?{tone:`todo`,text:`Your latest changes aren't live for agents yet.${n?` ${Z(n,`saved change`)} not shared with teammates.`:``}`,action:`publish`}:t?.behind?{tone:`todo`,text:`Teammates have ${Z(t.behind,`new change`)}.`,action:`update`}:{tone:`ok`,text:`Everything is live.`,action:null}}function Zu({status:e,error:t,onRefresh:n}){let[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(!1),p=a||s,m=async()=>{c(!0),u(null);let e=await Eu();c(!1),u(e.ok?{kind:`success`,text:`Up to date with teammates.`}:{kind:`error`,text:e.error}),n()},h=async()=>{u(null),f(!1);let e=await Du(`publish`);e.ok?(o(!0),i(e.data.job_id)):u({kind:`error`,text:e.error})},g=e=>{o(!1),u(e.state===`done`?{kind:`success`,text:`Published. Agents and the deck builder have your latest approvals.`}:{kind:`error`,text:`Publish failed: ${e.error??`unknown error`}`}),e.state===`done`&&i(null),n()},v=e?Q(e):null,y=e?.embedder_mode===`fake`;return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(`div`,{className:`ops-bar ops-${v?.tone??`ok`}`,role:`status`,"aria-label":`Publishing status`,children:[t&&(0,X.jsxs)(`span`,{children:[`Couldn't check status: `,t]}),a?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Xl,{size:`sm`}),(0,X.jsx)(`span`,{children:`Publishing: getting teammates' changes, rebuilding search and exports, sharing yours...`})]}):s?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Xl,{size:`sm`}),(0,X.jsx)(`span`,{children:`Getting updates...`})]}):v&&(0,X.jsx)(`span`,{children:v.text}),y&&!a&&(0,X.jsx)(`span`,{className:`ops-dim`,title:`Restart Quarry without --fake-embedder, then Publish.`,children:`Search is using a stand-in model, so "More like this" and Claude's look-alike learning are rough.`}),(0,X.jsx)(`span`,{className:`ops-spacer`}),r&&(0,X.jsx)(J,{size:`sm`,variant:`ghost`,onClick:()=>f(e=>!e),children:d?`Hide details`:`Details`}),v?.action===`publish`&&(0,X.jsx)(J,{size:`sm`,disabled:p,onClick:()=>void h(),children:`Publish`}),v?.action===`update`&&(0,X.jsx)(J,{size:`sm`,variant:`outline`,disabled:p,onClick:()=>void m(),children:`Get updates`})]}),l&&(0,X.jsx)(`div`,{className:`ops-notice`,children:(0,X.jsx)(Fl,{type:l.kind,showCloseButton:!0,onClose:()=>u(null),children:l.text})}),r&&(0,X.jsx)(`div`,{className:`ops-notice`,hidden:!d,children:(0,X.jsx)(Ju,{jobId:r,name:`Publish`,onFinished:g},r)})]})}var Qu=[`products`,`categories`,`verticals`,`concepts`,`style`],$u=e=>e==null?``:String(e),ed=e=>e.trim()===``?null:/^\d+$/.test(e.trim())?Number(e.trim()):e.trim(),td=e=>({description:e.description??``,tags:{products:e.products,categories:e.categories,verticals:e.verticals,concepts:e.concepts,style:e.style},tone:e.tone??``,product_version:e.product_version??``,captured_at:e.captured_at??``,usage_restrictions:(e.usage_restrictions??[]).join(`, `),anti_example:!!e.anti_example,avoid_reason:e.avoid_reason??``,license:e.license??``,generation:{prompt:$u(e.generation?.prompt),model:$u(e.generation?.model),seed:$u(e.generation?.seed)}}),nd=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]);function rd(e,t){let n={};t.description!==(e.description??``)&&(n.description=t.description);for(let r of Qu)nd(t.tags[r],e[r])||(n[r]=t.tags[r]);e.class===`background`&&t.tone&&t.tone!==(e.tone??``)&&(n.tone=t.tone),e.class===`screenshot`&&(t.product_version&&t.product_version!==(e.product_version??``)&&(n.product_version=t.product_version),t.captured_at&&t.captured_at!==(e.captured_at??``)&&(n.captured_at=t.captured_at));let r=t.usage_restrictions.split(`,`).map(e=>e.trim()).filter(Boolean);if(nd(r,e.usage_restrictions??[])||(n.usage_restrictions=r),t.anti_example!==!!e.anti_example&&(n.anti_example=t.anti_example),t.anti_example&&(n.anti_example!==void 0||t.avoid_reason!==(e.avoid_reason??``))&&(n.avoid_reason=t.avoid_reason),t.license.trim()!==(e.license??``)&&(n.license=t.license.trim()),e.source?.origin===`midjourney`){let r=t.generation,i=td(e).generation;(r.prompt!==i.prompt||r.model!==i.model||r.seed!==i.seed)&&(n.generation={prompt:r.prompt.trim()||null,model:r.model.trim()||null,seed:ed(r.seed)})}return n}function id(e,t){return!e||t()}var ad={inbox:`Inbox`,approved:`Approved`,rejected:`Rejected`};function od(e){return e===`confirmed`?`approved`:e===`retired`?`rejected`:`inbox`}var sd=(e,t)=>`${e}\t${t}`,cd=e=>e.slice(0,e.indexOf(`	`)),ld={yes:`keep`,no:`reject`,maybe:`maybe`},ud=`Claude suggested (not in vocabulary)`,dd=[`Claude says`,`Claude's confidence`,`Your call`,`Use`,`Class`,`From`,`Products`,`Categories`,`Verticals`,`Concepts`,`Style`,`Tone`,ud];function fd(e){let t=[],n=e.rating?.bot;if(od(e.status)===`inbox`){t.push([`Claude says`,n?ld[n.verdict]??n.verdict:`not rated yet`]),n&&t.push([`Claude's confidence`,n.strength]),e.status===`parked`&&t.push([`Your call`,`maybe (parked)`]),e.status===`proposed`&&e.rating?.human?.verdict===`yes`&&t.push([`Your call`,`approved, needs details`]);for(let e of Object.values(n?.suggested_slugs??{}))for(let n of e)t.push([ud,n])}e.anti_example&&t.push([`Use`,`anti-example`]),e.class&&t.push([`Class`,e.class]);for(let n of e.products??[])t.push([`Products`,n]);for(let n of e.categories??[])t.push([`Categories`,n]);for(let n of e.verticals??[])t.push([`Verticals`,n]);for(let n of e.concepts??[])t.push([`Concepts`,n]);for(let n of e.style??[])t.push([`Style`,n]);return e.tone&&t.push([`Tone`,e.tone]),t}var pd=e=>[e.id,e.description,e.avoid_reason??``,e.class,e.license,e.rating?.bot?.reason??``,...e.products,...e.categories,...e.verticals,...e.concepts,...e.style].join(`
`),md={instagram:`Instagram`,pinterest:`Pinterest`},hd=e=>md[e]??e;function gd(e){let t=[e.owner?`@${e.owner}`:e.origin===`pinterest`?hd(e.origin):`unknown`];return e.saved_at&&t.push(`saved ${e.saved_at.slice(0,10)}`),!e.owner&&e.origin===`pinterest`&&e.collections.length&&t.push(e.collections.join(`, `)),t.join(` · `)}function _d(e){let t=[];e.origin&&t.push([`Source`,hd(e.origin)]),e.owner&&t.push([`From`,`@${e.owner}`]);for(let n of e.concepts)t.push([`Concepts`,n]);for(let n of e.style)t.push([`Style`,n]);return t}var vd=e=>[e.id,e.owner,e.caption,e.description,...e.concepts,...e.style].join(`
`);function yd(e,t){if(t.size===0)return!0;let n=new Set(e.map(([e,t])=>sd(e,t))),r=new Map;for(let e of t)r.set(cd(e),[...r.get(cd(e))??[],e]);return[...r.values()].every(e=>e.some(e=>n.has(e)))}var bd=(e,t)=>t.trim()===``||e.toLowerCase().includes(t.trim().toLowerCase());function xd(e,t,n,r){return e.filter(e=>bd(t.text(e),r)&&yd(t.facets(e),n))}function Sd(e,t,n,r){let i=e.filter(e=>bd(t.text(e),r)),a=new Set;for(let e of i)for(let[n]of t.facets(e))a.add(n);for(let e of n)a.add(cd(e));return[...a].sort((e,t)=>Cd(e)-Cd(t)||e.localeCompare(t)).map(e=>{let r=new Set([...n].filter(t=>cd(t)!==e)),a=new Map;for(let n of i){let i=t.facets(n);if(yd(i,r))for(let t of new Set(i.filter(([t])=>t===e).map(([,e])=>e)))a.set(t,(a.get(t)??0)+1)}for(let t of n)cd(t)===e&&!a.has(t.slice(e.length+1))&&a.set(t.slice(e.length+1),0);return{group:e,values:[...a].map(([t,r])=>({key:sd(e,t),value:t,count:r,selected:n.has(sd(e,t))})).sort((e,t)=>t.count-e.count||e.value.localeCompare(t.value))}}).filter(e=>e.values.length>0)}function Cd(e){let t=dd.indexOf(e);return t<0?dd.length:t}function wd(e,t){let n=e=>e.rating?.bot?e.rating.bot.strength===`strong`?0:1:2;return n(e)-n(t)||(e.id<t.id?-1:+(e.id>t.id))}function Td(e,t,n){let r=e.filter(e=>!t.has(e.id));return r.length===0?null:r[Math.min(n,r.length-1)].id}function Ed(e,t){switch(t){case`use`:return[e.anti_example?`anti-example`:`example`];case`class`:return e.class?[e.class]:[];case`status`:return e.status?[e.status]:[];case`product`:return e.products??[];case`tone`:return e.tone?[e.tone]:[];case`categories`:return e.categories??[];case`verticals`:return e.verticals??[];case`concepts`:return e.concepts??[];case`style`:return e.style??[];case`license`:return e.license?[e.license]:[]}}var Dd={products:`product`,categories:`categories`,verticals:`verticals`,concepts:`concepts`,style:`style`};function Od(e,t){let n={};for(let[r,i]of Object.entries(t)){let t=Dd[r];n[r]=i.map(n=>({slug:n,count:t?e.filter(e=>Ed(e,t).includes(n)).length:0}))}return n}var kd=[[`medium`,`Medium`],[`light`,`Light`],[`color`,`Color`],[`form`,`Form`],[`comp`,`Composition`]];function Ad(e,t){if(e!==`style`)return[{label:null,rows:t.map(e=>({...e,label:e.slug}))}];let n=kd.map(([,e])=>({label:e,rows:[]})),r={label:`Other`,rows:[]};for(let e of t){let t=kd.findIndex(([t])=>e.slug.startsWith(`${t}-`));t<0?r.rows.push({...e,label:e.slug}):n[t].rows.push({...e,label:e.slug.slice(kd[t][0].length+1)})}return[...n,r].filter(e=>e.rows.length>0)}var jd=class{seq=0;applied=0;savedAt=new Map;begin(){return++this.seq}saved(e){this.savedAt.set(e,this.seq)}accept(e){if(e<this.applied)return!1;this.applied=e;for(let[t,n]of this.savedAt)n<e&&this.savedAt.delete(t);return!0}merge(e,t,n){let r=new Map(n.map(e=>[e.id,e]));return t.map(t=>(this.savedAt.get(t.id)??-1)>=e?r.get(t.id)??t:t)}},Md=`That's enough for today. Pick up tomorrow.`,Nd=`Nothing left to capture`,Pd=[`pending`,`partial`,`captured`,`unavailable`,`all`],Fd=e=>e.saved_at??e.captured_at??``;function Id(e){return[...e].sort((e,t)=>{let n=Fd(e),r=Fd(t);return n===r?0:n<r?1:-1})}function Ld(e){return Id(e).find(e=>e.status===`pending`)??null}var Rd=e=>e.opened>=e.cap;function zd(e){let t=e.slides.length;switch(e.status){case`captured`:return`captured ${t}`;case`partial`:return`partial ${t}/${e.slides_expected??`?`}`;default:return e.status}}var Bd=(e,t)=>t===`all`?e:e.filter(e=>e.status===t),Vd=e=>(e.saved_at??``).slice(0,10),Hd=(e,t)=>Rd(t)?Md:`Open ${e.shortcode} on Instagram`,Ud={From:12,[ud]:12};function Wd({groups:e,onToggle:t}){return e.length===0?(0,X.jsx)(`p`,{className:`empty rail-empty`,children:`Nothing to filter yet. Filters fill in as Claude tags things.`}):(0,X.jsx)(`nav`,{className:`facet-rail`,"aria-label":`Filters`,children:e.map(({group:e,values:n})=>{let r=Ud[e]??1/0,i=n.filter((e,t)=>t<r||e.selected);return(0,X.jsxs)(`fieldset`,{className:`facet-group`,children:[(0,X.jsx)(`legend`,{children:e}),i.map(n=>(0,X.jsx)(zl,{size:`sm`,checked:n.selected,onValueChanged:e=>t(n.key,e.detail.checked),"aria-label":`${e}: ${n.value}`,children:(0,X.jsxs)(`span`,{className:`facet-row`,children:[(0,X.jsx)(`span`,{children:n.value}),(0,X.jsx)(`span`,{className:`facet-count`,children:n.count})]})},n.key)),n.length>i.length&&(0,X.jsxs)(`p`,{className:`facet-more`,children:[`+`,n.length-i.length,` more; use search`]})]},e)})})}function Gd({t:e,selected:t,onSelect:n}){let[r,i]=(0,_.useState)(e.src),[a,o]=(0,_.useState)(e.src);return a!==e.src&&(o(e.src),i(e.src)),(0,X.jsx)(`li`,{className:`thumb${t?` thumb-selected`:``}`,"data-id":e.id,children:(0,X.jsxs)(`a`,{href:e.fallback??e.src,"aria-label":e.alt||e.id,"aria-current":t||void 0,title:e.alt,onClick:t=>{t.metaKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),n(e.id))},children:[r?(0,X.jsx)(`img`,{src:r,alt:``,loading:`lazy`,decoding:`async`,onError:()=>i(r!==e.fallback&&e.fallback?e.fallback:null)}):(0,X.jsx)(`span`,{className:`thumb-missing`,children:`No preview`}),e.badge&&(0,X.jsx)(`span`,{className:`thumb-badge thumb-badge-${e.badge.tone}`,children:e.badge.text})]})})}function Kd({items:e,selectedId:t,onSelect:n,label:r}){return(0,_.useEffect)(()=>{t&&document.querySelector(`.thumb[data-id="${CSS.escape(t)}"]`)?.scrollIntoView({block:`nearest`})},[t]),(0,X.jsx)(`ul`,{className:`thumbs`,"aria-label":r,children:e.map(e=>(0,X.jsx)(Gd,{t:e,selected:e.id===t,onSelect:n},e.id))})}var qd=/^(INPUT|TEXTAREA|SELECT)$|^QUANTIC-(TEXT-INPUT|TEXTAREA|COMBOBOX|SELECT)$/;function Jd(e){if(e.metaKey||e.ctrlKey||e.altKey)return!0;let t=e.composedPath()[0]?.tagName??``;return qd.test(t.toUpperCase())}function Yd(e,t){let n=(0,_.useRef)(e);(0,_.useEffect)(()=>{n.current=e}),(0,_.useEffect)(()=>{if(!t)return;let e=e=>{Jd(e)||(e.repeat&&!e.key.startsWith(`Arrow`)||n.current(e))&&e.preventDefault()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t])}var Xd=3e3;function Zd(){let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(`pending`),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(null),y=(0,_.useRef)(null),b=(0,_.useRef)(null),x=(0,_.useRef)(!1),S=(0,_.useRef)(!1),C=(0,_.useRef)(!0),w=(0,_.useCallback)(function e(){C.current&&(x.current?S.current=!0:(x.current=!0,Ru().then(n=>{x.current=!1,n.ok?(t(n.data),r(null)):r(n.error),S.current&&(S.current=!1,e())})))},[]);(0,_.useEffect)(()=>{C.current=!0,w();let e=setInterval(w,Xd);return()=>{C.current=!1,clearInterval(e)}},[w]);let T=(0,_.useMemo)(()=>Id(e?.items??[]),[e]),E=(0,_.useMemo)(()=>Bd(T,i),[T,i]),D=(0,_.useMemo)(()=>Ld(T),[T]),ee=u?T.find(e=>e.shortcode===u&&e.status===`pending`):void 0,O=async(e,t)=>{l(e),s(null);let n=await t();return l(null),n.ok||s(`${e}: ${n.error}`),w(),n.ok},te=e=>{d(e.shortcode),zu(e.shortcode).then(n=>{n.ok?t(e=>e&&{...e,today:n.data.today}):s(`${e.shortcode}: ${n.error}`),w()})},k=e=>{p(e),h(String(e.slides[0]?.slide??``))},ne=()=>p(null),re=async e=>{let t=f;if(!t)return;let n=Number(m);await O(t.shortcode,()=>e?Hu(t.shortcode):Vu(t.shortcode,n))&&ne()},ie=(e,t)=>{let n=t?.[0];n&&O(e,()=>Uu(e,n))};if(!e)return(0,X.jsx)(`div`,{className:`capture`,children:n?(0,X.jsxs)(Fl,{type:`error`,children:[(0,X.jsx)(`span`,{slot:`title`,children:`Could not load captures`}),n]}):(0,X.jsx)(`p`,{className:`empty`,children:`Loading...`})});if(!e.enabled)return(0,X.jsx)(`div`,{className:`capture`,children:(0,X.jsx)(`p`,{className:`capture-setup`,children:e.setup})});let{counts:A,today:j}=e,ae=Rd(j);return(0,X.jsxs)(`div`,{className:`capture`,children:[(0,X.jsxs)(`header`,{className:`capture-head`,children:[(0,X.jsx)(`h2`,{children:`Capture: Instagram`}),(0,X.jsxs)(`span`,{className:`capture-counts`,children:[A.pending,` pending · `,A.partial,` partial · `,A.captured,` captured · `,A.unavailable,` unavailable`]}),(0,X.jsx)(`span`,{className:`ops-spacer`}),(0,X.jsxs)(`span`,{className:`capture-today`,title:`Posts opened today, against the daily cap`,children:[`today `,j.opened,`/`,j.cap]})]}),(0,X.jsxs)(`div`,{className:`capture-next`,children:[ae?(0,X.jsx)(J,{variant:`outline`,disabled:!0,children:Md}):D?(0,X.jsx)(J,{as:`a`,href:D.source_url,target:`quarry-capture`,onClick:()=>te(D),onAuxClick:e=>{e.button===1&&te(D)},children:`Open next`}):(0,X.jsx)(J,{variant:`outline`,disabled:!0,children:Nd}),!ae&&D&&(0,X.jsxs)(`span`,{className:`capture-next-id`,children:[D.id,` · `,D.owner||`unknown owner`,` · `,D.kind]}),ee&&(0,X.jsxs)(`span`,{className:`capture-waiting`,role:`status`,children:[`Waiting for `,ee.id,` to arrive...`]})]}),n&&(0,X.jsxs)(Fl,{type:`warning`,children:[(0,X.jsx)(`span`,{slot:`title`,children:`Refresh failed`}),n]}),o&&(0,X.jsxs)(Fl,{type:`error`,showCloseButton:!0,onClose:()=>s(null),children:[(0,X.jsx)(`span`,{slot:`title`,children:`That did not work`}),o]}),e.failed.length>0&&(0,X.jsxs)(Fl,{type:`warning`,children:[(0,X.jsxs)(`span`,{slot:`title`,children:[e.failed.length,` capture`,e.failed.length===1?``:`s`,` failed`]}),(0,X.jsx)(`ul`,{className:`capture-banner-list`,children:e.failed.map(e=>(0,X.jsxs)(`li`,{children:[`_failed/`,e.folder,e.reason?`: ${e.reason}`:``]},e.folder))})]}),e.warnings.length>0&&(0,X.jsxs)(Fl,{type:`warning`,children:[(0,X.jsxs)(`span`,{slot:`title`,children:[e.warnings.length,` warning`,e.warnings.length===1?``:`s`]}),(0,X.jsx)(`ul`,{className:`capture-banner-list`,children:e.warnings.map((e,t)=>(0,X.jsx)(`li`,{children:e},t))})]}),(0,X.jsxs)(iu,{dense:!0,"aria-label":`Instagram saves`,children:[(0,X.jsxs)(Y,{slot:`toolbar`,"aria-label":`Filter saves`,children:[(0,X.jsx)(Yl,{size:`sm`,"aria-label":`Status filter`,options:Pd.map(e=>[e,e]),value:i,onValueChanged:e=>a(e.detail.value)}),(0,X.jsxs)(`span`,{slot:`end`,className:`result-count`,children:[E.length,` shown`]})]}),(0,X.jsx)(nu,{slot:`header`,children:(0,X.jsxs)(ru,{children:[(0,X.jsx)(tu,{children:`Id`}),(0,X.jsx)(tu,{children:`Owner`}),(0,X.jsx)(tu,{children:`Kind`}),(0,X.jsx)(tu,{children:`Saved`}),(0,X.jsx)(tu,{children:`Status`}),(0,X.jsx)(tu,{children:`Actions`})]})}),(0,X.jsx)($l,{children:E.map(e=>(0,X.jsxs)(ru,{selected:g===e.shortcode,onDragOver:t=>{t.preventDefault(),v(e.shortcode)},onDragLeave:()=>v(t=>t===e.shortcode?null:t),onDrop:t=>{t.preventDefault(),v(null),ie(e.shortcode,t.dataTransfer.files)},children:[(0,X.jsx)(eu,{role:`rowheader`,children:e.id}),(0,X.jsx)(eu,{children:e.owner}),(0,X.jsx)(eu,{children:e.kind}),(0,X.jsx)(eu,{children:Vd(e)}),(0,X.jsx)(eu,{children:zd(e)}),(0,X.jsx)(eu,{children:(0,X.jsxs)(`div`,{className:`capture-actions`,children:[ae?(0,X.jsx)(`span`,{title:Hd(e,j),children:(0,X.jsx)(J,{size:`xs`,variant:`outline`,disabled:!0,"aria-label":`Open ${e.id} on Instagram`,children:`Open`})}):(0,X.jsx)(J,{size:`xs`,variant:`outline`,as:`a`,href:e.source_url,target:`quarry-capture`,title:Hd(e,j),"aria-label":`Open ${e.id} on Instagram`,onClick:()=>te(e),onAuxClick:t=>{t.button===1&&te(e)},children:`Open`}),(0,X.jsx)(J,{size:`xs`,variant:`outline`,disabled:c!==null||e.status===`unavailable`,"aria-label":`Mark ${e.id} unavailable`,onClick:()=>void O(e.shortcode,()=>Bu(e.shortcode)),children:`Unavailable`}),(0,X.jsx)(J,{size:`xs`,variant:`outline`,destructive:!0,disabled:c!==null||e.slides.length===0,"aria-label":`Remove files from ${e.id}`,onClick:()=>k(e),children:`Remove...`}),(0,X.jsx)(J,{size:`xs`,variant:`outline`,disabled:c!==null,"aria-label":`Add a file to ${e.id}`,onClick:()=>{b.current=e.shortcode,y.current?.click()},children:`Add file`})]})})]},e.shortcode))})]}),E.length===0&&(0,X.jsxs)(`p`,{className:`empty`,children:[`No `,i===`all`?``:`${i} `,`saves.`]}),(0,X.jsx)(`p`,{className:`capture-hint`,children:`Drop an image or video on a row to add it to that save.`}),(0,X.jsx)(`input`,{ref:y,type:`file`,accept:`image/jpeg,image/png,image/webp,video/mp4,video/quicktime,video/webm`,hidden:!0,"aria-label":`Choose a file to add`,onChange:e=>{b.current&&ie(b.current,e.target.files),e.target.value=``}}),(0,X.jsxs)(Wl,{open:f!==null,size:`md`,onOpenChanged:e=>{e.detail.open||ne()},children:[(0,X.jsxs)(Ul,{slot:`header`,children:[`Remove files from `,f?.id??``,`?`]}),(0,X.jsx)(`p`,{children:`Remove this slide deletes the chosen slide's file. Remove all slides deletes every file captured for this save. Either way the save goes back to partial or pending.`}),(0,X.jsxs)(`div`,{className:`field`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`Slide`}),(0,X.jsx)(Yl,{size:`sm`,"aria-label":`Slide to remove`,options:(f?.slides??[]).map(e=>[`Slide ${e.slide} (${e.type})`,String(e.slide)]),value:m,onValueChanged:e=>h(e.detail.value)})]}),(0,X.jsxs)(Hl,{slot:`footer`,children:[(0,X.jsx)(J,{variant:`outline`,onClick:ne,children:`Cancel`}),(0,X.jsx)(J,{variant:`outline`,destructive:!0,disabled:c!==null||!m,onClick:()=>void re(!1),children:`Remove this slide`}),(0,X.jsx)(J,{destructive:!0,disabled:c!==null,onClick:()=>void re(!0),children:`Remove all slides`})]})]})]})}function Qd({view:e,counts:t,onView:n,shown:r,total:i,filtering:a,onClear:o,bulk:s,undoLabel:c,onUndo:l}){return(0,X.jsxs)(`div`,{className:`view-bar`,children:[(0,X.jsxs)(Rl,{"aria-label":`View`,children:[(0,X.jsxs)(Ll,{active:e===`inbox`,onClick:()=>n(`inbox`),children:[ad.inbox,` (`,t.inbox,`)`]}),(0,X.jsxs)(Ll,{active:e===`approved`,onClick:()=>n(`approved`),children:[ad.approved,` (`,t.approved,`)`]})]}),a&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(`span`,{className:`view-shown`,children:[r,` of `,i,` shown`]}),(0,X.jsx)(J,{size:`sm`,variant:`ghost`,onClick:o,children:`Clear filters`})]}),(0,X.jsx)(`span`,{className:`spacer`}),s&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(J,{size:`sm`,variant:`outline`,destructive:!0,onClick:()=>s(`no`),children:[`Reject all `,r,` shown`]}),(0,X.jsxs)(J,{size:`sm`,variant:`outline`,onClick:()=>s(`yes`),children:[`Approve all `,r,` shown...`]})]}),c&&(0,X.jsx)(J,{size:`sm`,variant:`ghost`,onClick:l,title:`Undo ${c} (Z)`,children:`Undo`}),(0,X.jsx)(J,{size:`sm`,variant:e===`rejected`?`secondary`:`ghost`,onClick:()=>n(e===`rejected`?`inbox`:`rejected`),children:e===`rejected`?`Back to Inbox`:`Rejected (${t.rejected})`})]})}function $d({notice:e,onClose:t}){return e?(0,X.jsx)(`div`,{className:`notice-bar`,children:(0,X.jsx)(Fl,{type:e.kind,showCloseButton:!0,onClose:t,children:e.text})}):null}var ef={facets:_d,text:vd},tf=5e3,nf={yes:`confirmed`,no:`retired`},rf=(e,t)=>`${e} ${t}${e===1?``:`s`}`;function af({active:e,q:t,onInboxCount:n}){let[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)(null),[l,u]=(0,_.useState)(`inbox`),[d,f]=(0,_.useState)(new Set),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)(null),[b,x]=(0,_.useState)(!1),S=(0,_.useRef)([]),[C,w]=(0,_.useState)(null),T=(0,_.useCallback)(()=>{Promise.all([Wu(),Ru()]).then(([e,t])=>{e.ok?(i(e.data),o(null)):o(e.error),t.ok&&c(t.data)})},[]);(0,_.useEffect)(T,[T]),(0,_.useEffect)(()=>{if(!e||h)return;T();let t=setInterval(T,tf);return()=>clearInterval(t)},[e,h,T]);let E=(0,_.useMemo)(()=>r?.items??[],[r]),D=(0,_.useMemo)(()=>{let e={inbox:0,approved:0,rejected:0};for(let t of E)e[od(t.status)]+=1;return e},[E]);(0,_.useEffect)(()=>{n(D.inbox)},[D.inbox,n]);let ee=(0,_.useMemo)(()=>E.filter(e=>od(e.status)===l),[E,l]),O=(0,_.useMemo)(()=>xd(ee,ef,d,t),[ee,d,t]),te=(0,_.useMemo)(()=>Sd(ee,ef,d,t),[ee,d,t]),k=O.find(e=>e.id===p)??null,ne=d.size>0||t.trim()!==``,re=e=>{e!==l&&(u(e),f(new Set),m(null))},ie=e=>{if(!O.length)return;let t=O.findIndex(e=>e.id===p);m(O[Math.max(0,Math.min(O.length-1,t<0?0:t+e))].id)},A=async(e,t,n)=>{x(!0),y(null);let r=await Gu(e,t);if(x(!1),!r.ok)return y({kind:`error`,text:`Could not ${n}: ${r.error}`}),null;let a=Object.entries(r.data.failed);a.length&&y({kind:`warning`,text:`${rf(a.length,`save`)} not changed: ${a.map(([e,t])=>`${e} (${t})`).join(`; `)}`});let o=new Map(r.data.items.map(e=>[e.id,e]));return i(e=>e&&{...e,items:e.items.map(e=>o.get(e.id)??e)}),r.data},j=async(e,t)=>{let n=e===`yes`?`approve`:`reject`,r=t.length===1?`${n} ${t[0]}`:`${n} ${rf(t.length,`save`)}`,i=O.findIndex(e=>e.id===t[0]),a=await A(nf[e],t,r);a&&a.applied.length&&(S.current.push({label:r,from:a.applied}),w(r),m(t.length===1?Td(O,new Set(t),i):null),t.length>1&&y({kind:`success`,text:`${n===`approve`?`Approved`:`Rejected`} ${rf(a.applied.length,`save`)}.`}))},ae=e=>{let t=O.map(e=>e.id);(e!==`yes`||window.confirm(`Approve all ${t.length} shown?`))&&j(e,t)},oe=async()=>{let e=S.current.at(-1);if(!e||b)return;let t=new Map;for(let{id:n,from:r}of e.from)t.set(r,[...t.get(r)??[],n]);for(let[n,r]of t)if(!await A(n,r,`undo ${e.label}`))return;S.current.pop(),w(S.current.at(-1)?.label??null),y({kind:`success`,text:`Undone: ${e.label}.`}),e.from.length===1&&od(e.from[0].from)===l&&m(e.from[0].id)};if(Yd(e=>{switch(e.key){case`ArrowRight`:case`ArrowDown`:return ie(1),!0;case`ArrowLeft`:case`ArrowUp`:return ie(-1),!0;case`Escape`:return k?(m(null),!0):!1;case`z`:case`Z`:return C?(oe(),!0):!1}if(l!==`inbox`||!k||b)return!1;let t=e.key.toLowerCase();return t===`a`?(j(`yes`,[k.id]),!0):t===`x`?(j(`no`,[k.id]),!0):t===`s`&&(ie(1),!0)},e&&!h),h)return(0,X.jsxs)(`div`,{className:`area`,children:[(0,X.jsx)(`div`,{className:`view-bar`,children:(0,X.jsx)(J,{size:`sm`,variant:`ghost`,onClick:()=>g(!1),children:`Back to Inspiration`})}),(0,X.jsx)(`main`,{className:`main`,children:(0,X.jsx)(Zd,{})})]});if(r&&!r.enabled)return(0,X.jsx)(`div`,{className:`area`,children:(0,X.jsx)(`main`,{className:`main`,children:(0,X.jsx)(`p`,{className:`capture-setup`,children:r.setup})})});let se=s?s.counts.pending+s.counts.partial:0,ce=s?Ld(s.items):null,le=s?Rd(s.today):!1,ue=e=>{zu(e).then(t=>{t.ok||y({kind:`error`,text:`${e}: ${t.error}`})})},de=r?ne?`Nothing matches these filters.`:l===`inbox`?`Inbox zero. Pull in Instagram saves with Open next post and the Quarry button in Chrome.`:l===`approved`?`Nothing approved yet. Approve saves from the Inbox.`:`Nothing rejected.`:a?`Could not load inspiration: ${a}`:`Loading...`;return(0,X.jsxs)(`div`,{className:`area`,children:[(0,X.jsx)(Qd,{view:l,counts:D,onView:re,shown:O.length,total:ee.length,filtering:ne,onClear:()=>f(new Set),bulk:l===`inbox`&&ne&&O.length>0&&!b?ae:null,undoLabel:C,onUndo:()=>void oe()}),(0,X.jsx)($d,{notice:v,onClose:()=>y(null)}),l===`inbox`&&s?.enabled&&(0,X.jsxs)(`div`,{className:`area-strip`,children:[(0,X.jsxs)(`span`,{children:[(0,X.jsx)(`strong`,{children:`Instagram saves:`}),` `,rf(se,`saved post`),` not pulled in yet.`,(0,X.jsx)(`span`,{className:`strip-dim`,children:` Open a post, then click the Quarry button in Chrome. It lands here.`})]}),(0,X.jsx)(`span`,{className:`spacer`}),(0,X.jsxs)(`span`,{className:`strip-dim`,title:`Posts opened today, against the daily cap`,children:[`today `,s.today.opened,`/`,s.today.cap]}),le?(0,X.jsx)(J,{size:`sm`,variant:`outline`,disabled:!0,children:`That's enough for today. Pick up tomorrow.`}):ce&&(0,X.jsx)(J,{size:`sm`,as:`a`,href:ce.source_url,target:`quarry-capture`,onClick:()=>ue(ce.shortcode),onAuxClick:e=>{e.button===1&&ue(ce.shortcode)},children:`Open next post`}),(0,X.jsx)(J,{size:`sm`,variant:`ghost`,onClick:()=>g(!0),children:`Manage saves`})]}),r&&r.warnings.length>0&&l===`inbox`&&(0,X.jsx)(`div`,{className:`notice-bar`,children:(0,X.jsxs)(Fl,{type:`warning`,children:[rf(r.warnings.length,`warning`),`: `,r.warnings.slice(0,3).join(`; `)]})}),(0,X.jsx)(`div`,{className:`body`,children:(0,X.jsxs)(Zl,{resizable:!0,split:`18% 82%`,children:[(0,X.jsx)(Ql,{variant:`solid`,minSize:12,maxSize:35,children:(0,X.jsx)(Wd,{groups:te,onToggle:(e,t)=>f(n=>{let r=new Set(n);return t?r.add(e):r.delete(e),r})})}),(0,X.jsx)(Ql,{minSize:50,maxSize:100,children:(0,X.jsxs)(Zl,{resizable:!0,split:`60% 40%`,collapseBelow:`560px`,children:[(0,X.jsx)(Ql,{minSize:30,children:(0,X.jsx)(`main`,{className:`main`,"aria-label":`Inspiration ${l}`,children:O.length===0?(0,X.jsx)(`p`,{className:`empty`,children:de}):(0,X.jsx)(Kd,{items:O.map(e=>({id:e.id,src:e.media[0],alt:e.caption||e.id,badge:e.media.length>1?{text:`${e.media.length} SLIDES`,tone:`note`}:void 0})),selectedId:p,onSelect:m,label:`${O.length} saves`})})}),(0,X.jsx)(Ql,{collapsed:!k,minSize:25,maxSize:70,children:k&&(0,X.jsx)(of,{item:k,view:l,busy:b,onDecide:e=>void j(e,[k.id]),onSkip:()=>ie(1)},k.id)})]})})]})})]})}function of({item:e,view:t,busy:n,onDecide:r,onSkip:i}){let[a,o]=(0,_.useState)(0),s=[...e.concepts,...e.style];return(0,X.jsx)(`aside`,{className:`detail`,"aria-label":`Save details`,children:(0,X.jsxs)(`div`,{className:`editor`,children:[(0,X.jsx)(`a`,{href:e.media[a],target:`_blank`,rel:`noreferrer`,className:`editor-image`,title:`Open full size`,children:(0,X.jsx)(`img`,{src:e.media[a],alt:e.caption||e.id})}),e.media.length>1&&(0,X.jsx)(`ul`,{className:`similar-strip`,"aria-label":`Slides`,children:e.media.map((e,t)=>(0,X.jsx)(`li`,{className:t===a?`slide-on`:void 0,children:(0,X.jsx)(`a`,{href:e,onClick:e=>{e.preventDefault(),o(t)},"aria-label":`Slide ${t+1}`,children:(0,X.jsx)(`img`,{src:e,alt:``,loading:`lazy`})})},e))}),(0,X.jsxs)(`div`,{className:`editor-form`,children:[(0,X.jsxs)(`div`,{className:`editor-head`,children:[(0,X.jsx)(`h2`,{children:e.id}),(0,X.jsx)(Il,{size:`sm`,color:t===`approved`?`success`:t===`inbox`?`warning`:`gray`,children:t===`inbox`?`in inbox`:t})]}),(0,X.jsxs)(`div`,{className:`editor-actions decide-actions`,children:[t===`inbox`&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(J,{size:`sm`,disabled:n,onClick:()=>r(`yes`),children:[`Approve `,(0,X.jsx)(`kbd`,{children:`A`})]}),(0,X.jsxs)(J,{size:`sm`,variant:`outline`,destructive:!0,disabled:n,onClick:()=>r(`no`),children:[`Reject `,(0,X.jsx)(`kbd`,{children:`X`})]}),(0,X.jsxs)(J,{size:`sm`,variant:`outline`,disabled:n,onClick:i,children:[`Skip `,(0,X.jsx)(`kbd`,{children:`S`})]})]}),t===`approved`&&(0,X.jsx)(J,{size:`sm`,variant:`outline`,destructive:!0,disabled:n,onClick:()=>r(`no`),children:`Reject`}),t===`rejected`&&(0,X.jsx)(J,{size:`sm`,variant:`outline`,disabled:n,onClick:()=>r(`yes`),children:`Approve instead`}),(0,X.jsxs)(J,{size:`sm`,variant:`ghost`,as:`a`,href:e.source_url,target:`_blank`,children:[`View on `,hd(e.origin)]})]}),(0,X.jsxs)(`div`,{className:`field`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`From`}),(0,X.jsx)(`p`,{children:gd(e)})]}),e.caption&&(0,X.jsxs)(`div`,{className:`field`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`Caption`}),(0,X.jsx)(`p`,{className:`caption`,children:e.caption})]}),(0,X.jsxs)(`div`,{className:`field`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`Description`}),(0,X.jsx)(`p`,{className:e.description?void 0:`strip-dim`,children:e.description||`Not described yet. Claude does not describe or tag inspiration yet; that comes next.`})]}),s.length>0&&(0,X.jsxs)(`div`,{className:`field`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`Tags`}),(0,X.jsx)(`p`,{children:s.map(e=>(0,X.jsx)(Il,{size:`sm`,color:`gray`,children:e},e))})]})]})]})})}function sf({label:e,value:t,vocabulary:n,onChange:r,errors:i=[]}){let[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(0),l=n.filter(e=>!t.includes(e)).map(e=>({label:e,value:e})),u=a.trim()!==``&&!n.includes(a.trim()),d=e=>{n.includes(e)&&(t.includes(e)||r([...t,e]),o(``),c(e=>e+1))};return(0,X.jsxs)(`div`,{className:`field${i.length?` field-invalid`:``}`,"data-field":e,children:[(0,X.jsx)(`span`,{className:`field-label`,children:e}),(0,X.jsxs)(`div`,{className:`chips`,children:[t.map(n=>(0,X.jsx)(au,{size:`sm`,dismissible:!0,"aria-label":`${e}: ${n}`,onTagDismiss:()=>r(t.filter(e=>e!==n)),children:n},n)),(0,X.jsx)(Bl,{size:`sm`,"aria-label":`Add ${e}`,placeholder:`Add ${e}`,options:l,allowCustomValue:!0,invalid:i.length>0,onInputChanged:e=>o(e.detail.value),onValueChanged:e=>d(e.detail.value)},s)]}),u&&(0,X.jsxs)(`p`,{className:`field-hint`,role:`status`,children:[`"`,a.trim(),`" is not in the `,e,` vocabulary, so it will not be saved. Propose it to the curator to add it.`]}),i.map(e=>(0,X.jsx)(`p`,{className:`field-error`,role:`alert`,children:e},e))]})}var cf={proposed:`in inbox`,parked:`maybe`,confirmed:`approved`,retired:`rejected`};function lf({errors:e}){return(0,X.jsx)(X.Fragment,{children:(e??[]).map(e=>(0,X.jsx)(`p`,{className:`field-error`,role:`alert`,children:e},e))})}function uf({asset:e,vocabulary:t,onChanged:n,onTransition:r,onOpenSimilar:i,onDecided:a,onSkip:o,onDirtyChange:s,ref:c}){let[l,u]=(0,_.useState)(()=>td(e)),[d,f]=(0,_.useState)([]),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(null),[v,y]=(0,_.useState)(!1),b=(0,_.useRef)(!1),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(null),T=(0,_.useMemo)(()=>rd(e,l),[e,l]),E=Object.keys(T).length>0;(0,_.useEffect)(()=>(s?.(E),()=>s?.(!1)),[E,s]),(0,_.useEffect)(()=>{let t=!0;return _u(e.id).then(e=>t&&S(e)).catch(e=>t&&w(e.message)),()=>{t=!1}},[e.id]);let D=e=>(f(e.errors),g(e.errors.length?null:e.error),!1),ee=async()=>{if(!E)return e;let t=await pu(e.id,T);return t.ok?(n(t.asset),u(td(t.asset)),t.asset):(D(t),null)},O=async e=>{b.current=!0,y(!0),f([]),m(null),g(null);try{return await e()}finally{b.current=!1,y(!1)}},te=()=>O(async()=>{await ee()&&E&&m(`Saved.`)}),k=()=>b.current?Promise.resolve(!1):O(async()=>{if(!await ee())return!1;let t=await mu(e.id);return t.ok?(n(t.asset),r?.(`confirm`,t.asset),!0):D(t)}),ne=t=>b.current?Promise.resolve(!1):O(async()=>{let i=await(t===`retire`?hu:gu)(e.id);return i.ok?(n(i.asset),r?.(t,i.asset),!0):D(i)}),re=t=>b.current?Promise.resolve(!1):O(async()=>{if(t===`yes`&&!await ee())return!1;let r=await ju(e.id,t);if(!r.ok){let e=Au(r);return f(e),g(e.length?null:r.error),!1}return n(r.data.asset),r.data.needs_details&&(u(td(r.data.asset)),f(r.data.needs_details),m(`Approved, but it stays in the Inbox until the fields below are filled in.`)),a?.({asset:r.data.asset,commit:r.data.commit,verdict:t,needsDetails:r.data.needs_details}),!0});(0,_.useImperativeHandle)(c,()=>({confirm:k,decide:re}));let ie=od(e.status),A=e.rating?.bot,{byField:j,general:ae}=vu(d),oe=e.source?.origin===`midjourney`,se=new Set([...Qu,`description`,`usage_restrictions`,`anti_example`,`avoid_reason`,`license`,...oe?[`generation`]:[],...e.class===`background`?[`tone`]:[],...e.class===`screenshot`?[`product_version`,`captured_at`]:[]]),ce=[...ae,...Object.entries(j).filter(([e])=>!se.has(e)).flatMap(([,e])=>e)];return(0,X.jsxs)(`div`,{className:`editor`,"data-asset-id":e.id,children:[(0,X.jsx)(`a`,{href:e.full_url,target:`_blank`,rel:`noreferrer`,className:`editor-image`,title:`Open full resolution`,children:(0,X.jsx)(`img`,{src:e.full_url,alt:e.description||e.id})}),(0,X.jsxs)(`div`,{className:`editor-form`,children:[(0,X.jsxs)(`div`,{className:`editor-head`,children:[(0,X.jsx)(`h2`,{children:e.id}),(0,X.jsx)(Il,{size:`sm`,color:e.status===`confirmed`?`success`:e.status===`proposed`?`warning`:`gray`,children:cf[e.status]??e.status}),e.anti_example&&(0,X.jsx)(Il,{size:`sm`,color:`error`,children:`anti-example`}),(0,X.jsxs)(`span`,{className:`editor-meta`,children:[e.class,` / `,e.aspect,` / `,e.license]})]}),A&&(0,X.jsxs)(`div`,{className:`claude-says claude-says-${A.verdict}`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`Claude says`}),(0,X.jsxs)(`p`,{children:[(0,X.jsx)(`strong`,{children:ld[A.verdict]??A.verdict}),(0,X.jsx)(`span`,{className:`claude-strength`,children:A.strength===`strong`?`confident`:`unsure`}),A.reason]})]}),ie===`inbox`&&(0,X.jsxs)(`div`,{className:`editor-actions decide-actions`,children:[(0,X.jsxs)(J,{size:`sm`,disabled:v,onClick:()=>void re(`yes`),children:[`Approve `,(0,X.jsx)(`kbd`,{children:`A`})]}),(0,X.jsxs)(J,{size:`sm`,variant:`outline`,destructive:!0,disabled:v,onClick:()=>void re(`no`),children:[`Reject `,(0,X.jsx)(`kbd`,{children:`X`})]}),o&&(0,X.jsxs)(J,{size:`sm`,variant:`outline`,disabled:v,onClick:o,children:[`Skip `,(0,X.jsx)(`kbd`,{children:`S`})]})]}),p&&(0,X.jsx)(`p`,{className:`editor-message`,role:`status`,children:p}),h&&(0,X.jsx)(Fl,{type:`error`,children:h}),ce.length>0&&(0,X.jsx)(Fl,{type:`error`,children:ce.map(e=>(0,X.jsx)(`div`,{children:e},e))}),(0,X.jsxs)(`div`,{className:`field anti-field${j.avoid_reason?` field-invalid`:``}`,children:[(0,X.jsx)(zl,{size:`sm`,checked:l.anti_example,onValueChanged:e=>u(t=>({...t,anti_example:e.detail.checked})),children:`Anti-example: shows what not to do (never served for use)`}),l.anti_example&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(`span`,{className:`field-label`,children:`Why to avoid it`}),(0,X.jsx)(su,{"aria-label":`Why to avoid it`,placeholder:`e.g. Glossy 3D clip-art with lens flare; reads as generic stock.`,value:l.avoid_reason,invalid:!!j.avoid_reason,onValueChanged:e=>u(t=>({...t,avoid_reason:e.detail.value}))})]}),(0,X.jsx)(lf,{errors:[...j.anti_example??[],...j.avoid_reason??[]]})]}),(0,X.jsxs)(`div`,{className:`field${j.description?` field-invalid`:``}`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`Description`}),(0,X.jsx)(su,{"aria-label":`Description`,value:l.description,invalid:!!j.description,onValueChanged:e=>u(t=>({...t,description:e.detail.value}))}),(0,X.jsx)(lf,{errors:j.description})]}),Qu.map(e=>(0,X.jsx)(sf,{label:e,value:l.tags[e],vocabulary:t[e]??[],errors:j[e],onChange:t=>u(n=>({...n,tags:{...n.tags,[e]:t}}))},e)),e.class===`background`&&(0,X.jsxs)(`div`,{className:`field${j.tone?` field-invalid`:``}`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`Tone`}),(0,X.jsx)(Yl,{"aria-label":`Tone`,placeholder:`Choose tone`,options:[[`dark`,`dark`],[`light`,`light`]],value:l.tone,invalid:!!j.tone,onValueChanged:e=>u(t=>({...t,tone:e.detail.value}))}),(0,X.jsx)(lf,{errors:j.tone})]}),e.class===`screenshot`&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(`div`,{className:`field${j.product_version?` field-invalid`:``}`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`Product version`}),(0,X.jsx)(ou,{"aria-label":`Product version`,value:l.product_version,invalid:!!j.product_version,onValueChanged:e=>u(t=>({...t,product_version:e.detail.value}))}),(0,X.jsx)(lf,{errors:j.product_version})]}),(0,X.jsxs)(`div`,{className:`field${j.captured_at?` field-invalid`:``}`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`Captured at`}),(0,X.jsx)(ou,{"aria-label":`Captured at`,placeholder:`YYYY-MM-DD`,value:l.captured_at,invalid:!!j.captured_at,onValueChanged:e=>u(t=>({...t,captured_at:e.detail.value}))}),(0,X.jsx)(lf,{errors:j.captured_at})]})]}),(0,X.jsxs)(`div`,{className:`field${j.license?` field-invalid`:``}`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`License`}),(0,X.jsx)(ou,{"aria-label":`License`,placeholder:`e.g. adobe-stock:1036498535 or ciq-original`,value:l.license,invalid:!!j.license,onValueChanged:e=>u(t=>({...t,license:e.detail.value}))}),(0,X.jsx)(lf,{errors:j.license})]}),oe&&(0,X.jsxs)(`fieldset`,{className:`field generation-field${j.generation?` field-invalid`:``}`,children:[(0,X.jsx)(`legend`,{className:`field-label`,children:`Midjourney generation`}),(0,X.jsx)(su,{"aria-label":`Generation prompt`,placeholder:`Prompt`,value:l.generation.prompt,invalid:!!j.generation,onValueChanged:e=>u(t=>({...t,generation:{...t.generation,prompt:e.detail.value}}))}),(0,X.jsxs)(`div`,{className:`generation-row`,children:[(0,X.jsx)(ou,{"aria-label":`Generation model`,placeholder:`Model, e.g. v6.1`,value:l.generation.model,invalid:!!j.generation,onValueChanged:e=>u(t=>({...t,generation:{...t.generation,model:e.detail.value}}))}),(0,X.jsx)(ou,{"aria-label":`Generation seed`,placeholder:`Seed`,value:l.generation.seed,invalid:!!j.generation,onValueChanged:e=>u(t=>({...t,generation:{...t.generation,seed:e.detail.value}}))})]}),(0,X.jsx)(lf,{errors:j.generation})]}),(0,X.jsxs)(`div`,{className:`field${j.usage_restrictions?` field-invalid`:``}`,children:[(0,X.jsx)(`span`,{className:`field-label`,children:`Usage restrictions (comma separated)`}),(0,X.jsx)(ou,{"aria-label":`Usage restrictions`,value:l.usage_restrictions,invalid:!!j.usage_restrictions,onValueChanged:e=>u(t=>({...t,usage_restrictions:e.detail.value}))}),(0,X.jsx)(lf,{errors:j.usage_restrictions})]}),(0,X.jsxs)(`div`,{className:`editor-actions`,children:[(0,X.jsx)(J,{size:`sm`,disabled:v||!E,onClick:te,children:`Save`}),ie===`rejected`&&(0,X.jsx)(J,{size:`sm`,variant:`outline`,disabled:v,onClick:()=>ne(`restore`),children:`Approve instead`}),ie===`approved`&&(0,X.jsx)(J,{size:`sm`,variant:`outline`,destructive:!0,disabled:v,onClick:()=>ne(`retire`),children:`Reject`})]}),(0,X.jsxs)(`section`,{className:`similar`,"aria-label":`More like this`,children:[(0,X.jsx)(`h3`,{children:`More like this`}),C&&(0,X.jsxs)(`p`,{className:`empty`,children:[`Unavailable: `,C]}),!C&&x===null&&(0,X.jsx)(`p`,{className:`empty`,children:`Loading...`}),x&&x.length===0&&(0,X.jsx)(`p`,{className:`empty`,children:`No neighbours found.`}),x&&x.length>0&&(0,X.jsx)(`ul`,{className:`similar-strip`,children:x.map(e=>(0,X.jsx)(`li`,{children:(0,X.jsx)(`a`,{href:e.full_url,title:e.id,onClick:t=>{i&&(t.preventDefault(),i(e.id))},children:(0,X.jsx)(`img`,{src:e.thumb_url,alt:e.description||e.id,loading:`lazy`})})},e.id))})]})]})]})}var df={facets:fd,text:pd},ff={yes:`keep`,no:`reject`,maybe:`maybe`},pf=(e,t)=>`${e} ${t}${e===1?``:`s`}`;function mf(e,t){let n=e.rating?.bot,r;return t===`inbox`&&(e.status===`proposed`&&e.rating?.human?.verdict===`yes`?r={text:`NEEDS DETAILS`,tone:`note`}:e.status===`parked`?r={text:`PARKED`,tone:`note`}:n&&(r={text:`${ld[n.verdict].toUpperCase()}${n.strength===`strong`?``:`?`}`,tone:ff[n.verdict]})),e.anti_example&&(r={text:`AVOID`,tone:`reject`}),{id:e.id,src:e.thumb_url,fallback:e.full_url,alt:e.description||e.id,badge:r}}function hf({active:e,assets:t,loaded:n,loadError:r,vocabulary:i,q:a,summary:o,rateJob:s,rateError:c,onStartRate:l,onRateJobFinished:u,onDismissRateJob:d,onChanged:f,reloadAssets:p,refreshAfterWrite:m,confirmDiscard:h,onDirtyChange:g,openFilter:v}){let[y,b]=(0,_.useState)(`inbox`),[x,S]=(0,_.useState)(new Set),[C,w]=(0,_.useState)(null),[T,E]=(0,_.useState)(null),[D,ee]=(0,_.useState)(!1),[O,te]=(0,_.useState)(!1),k=(0,_.useRef)([]),[ne,re]=(0,_.useState)(null),ie=(0,_.useRef)(null),[A,j]=(0,_.useState)(v?.n??0);v&&v.n!==A&&(j(v.n),b(v.view),S(new Set([v.key])),w(null));let ae=(0,_.useMemo)(()=>{let e={inbox:0,approved:0,rejected:0};for(let n of t)e[od(n.status)]+=1;return e},[t]),oe=(0,_.useMemo)(()=>{let e=t.filter(e=>od(e.status)===y);return y===`inbox`?e.sort(wd):e},[t,y]),se=(0,_.useMemo)(()=>xd(oe,df,x,a),[oe,x,a]),ce=(0,_.useMemo)(()=>Sd(oe,df,x,a),[oe,x,a]),le=se.find(e=>e.id===C)??null,ue=x.size>0||a.trim()!==``;(0,_.useEffect)(()=>{let e=se.findIndex(e=>e.id===C),t=se[e+1];e>=0&&t&&(new Image().src=t.full_url)},[se,C]);let de=e=>{e!==y&&h()&&(b(e),S(new Set),w(null))},fe=e=>{(e===C||h())&&w(e)},pe=e=>{if(!se.length)return;let t=se.findIndex(e=>e.id===C);fe(se[Math.max(0,Math.min(se.length-1,t<0?0:t+e))].id)},me=(e,t,n)=>{k.current.push({commit:e,ids:t,label:n}),re(n)},he=(0,_.useCallback)(e=>{if(e.needsDetails){me(e.commit,[e.asset.id],`approve ${e.asset.id}`);return}let t=se.findIndex(t=>t.id===e.asset.id);w(Td(se,new Set([e.asset.id]),t)),me(e.commit,[e.asset.id],`${e.verdict===`yes`?`approve`:`reject`} ${e.asset.id}`),m()},[se,m]),ge=e=>{let t=se.findIndex(t=>t.id===e.id);w(Td(se,new Set([e.id]),t)),m()},_e=async e=>{let t=se.map(e=>e.id);if(!t.length||e===`yes`&&!window.confirm(`Approve all ${t.length} shown? Agents can use them as soon as you publish.`))return;ee(!0),E(null);let n=await Mu(e,t);if(ee(!1),!n.ok){E({kind:`error`,text:`Bulk ${e===`yes`?`approve`:`reject`} failed: ${n.error}`});return}let{applied:r,needs_details:i,failed:a,commit:o}=n.data,s=e===`yes`?`Approved`:`Rejected`,c=[Object.keys(i).length?`${Object.keys(i).length} still need details`:``,Object.keys(a).length?`${Object.keys(a).length} couldn't be changed (open them to see why)`:``].filter(Boolean).join(`; `);o&&me(o,[...r,...Object.keys(i)],`${e===`yes`?`approve`:`reject`} ${pf(r.length,`image`)}`),E({kind:Object.keys(a).length?`warning`:`success`,text:`${s} ${pf(r.length,`image`)}.${c?` ${c}.`:``}`}),w(null),await p(),m()},ve=async()=>{let e=k.current.at(-1);if(!e||D)return;ee(!0);let t=await Nu(e.commit);ee(!1),(t.ok||t.status>=400&&t.status<500)&&(k.current.pop(),re(k.current.at(-1)?.label??null)),t.ok?(E({kind:`success`,text:`Undone: ${e.label}. ${e.ids.length===1?`It's`:`They're`} back in the Inbox.`}),await p(),y===`inbox`&&e.ids.length===1&&w(e.ids[0]),m()):E({kind:`error`,text:`Could not undo: ${t.error}`})};Yd(e=>{switch(e.key){case`ArrowRight`:case`ArrowDown`:return pe(1),!0;case`ArrowLeft`:case`ArrowUp`:return pe(-1),!0;case`Escape`:return le?(fe(null),!0):!1;case`z`:case`Z`:return ne?(ve(),!0):!1}if(y!==`inbox`||!le)return!1;let t=e.key.toLowerCase();return t===`a`?(ie.current?.decide(`yes`),!0):t===`x`?(ie.current?.decide(`no`),!0):t===`s`&&(pe(1),!0)},e);let M=o?.waiting_for_bot??0,N=o?.rater,ye=!!s?.running,be=y===`inbox`&&(M>0||s||c)&&(0,X.jsxs)(`div`,{className:`area-strip`,role:`status`,children:[ye?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Xl,{size:`sm`}),(0,X.jsx)(`span`,{children:`Claude is describing, tagging and rating new images. They appear here as each batch finishes.`}),(0,X.jsx)(`span`,{className:`spacer`}),(0,X.jsx)(J,{size:`sm`,variant:`ghost`,onClick:()=>te(e=>!e),children:O?`Hide log`:`Show log`})]}):s?.job?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(`span`,{children:s.job.state===`failed`?`Claude stopped: ${s.job.error??`unknown error`}`:`Claude finished: ${pf(Number(s.job.result?.rated??0),`image`)} described and rated.`}),(0,X.jsx)(`span`,{className:`spacer`}),(0,X.jsx)(J,{size:`sm`,variant:`ghost`,onClick:()=>te(e=>!e),children:O?`Hide log`:`Show log`}),(0,X.jsx)(J,{size:`sm`,variant:`ghost`,onClick:d,children:`Dismiss`})]}):M>0?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(`span`,{children:[(0,X.jsx)(`strong`,{children:pf(M,`image`)}),` `,M===1?`hasn't`:`haven't`,` been described and rated by Claude yet.`]}),(0,X.jsx)(`span`,{className:`spacer`}),N?.available===!1?(0,X.jsxs)(`span`,{className:`strip-dim`,children:[`Claude is off: `,N.reason]}):(0,X.jsx)(J,{size:`sm`,onClick:l,children:`Describe and rate them`})]}):null,c&&(0,X.jsx)(Fl,{type:`error`,children:c})]}),xe=n?r?`Could not load the library: ${r}`:ue?`Nothing matches these filters.`:y===`inbox`?`Inbox zero. Add images with + Add images, then let Claude describe and rate them.`:y===`approved`?`Nothing approved yet. Approve images from the Inbox.`:`Nothing rejected.`:`Loading...`;return(0,X.jsxs)(`div`,{className:`area`,children:[(0,X.jsx)(Qd,{view:y,counts:ae,onView:de,shown:se.length,total:oe.length,filtering:ue,onClear:()=>S(new Set),bulk:y===`inbox`&&ue&&se.length>0&&!D?_e:null,undoLabel:ne,onUndo:()=>void ve()}),(0,X.jsx)($d,{notice:T,onClose:()=>E(null)}),be,s&&(0,X.jsx)(`div`,{className:`strip-log`,hidden:!O||y!==`inbox`,children:(0,X.jsx)(Ju,{jobId:s.id,name:`Describe and rate`,onFinished:u},s.id)}),(0,X.jsx)(`div`,{className:`body`,children:(0,X.jsxs)(Zl,{resizable:!0,split:`18% 82%`,children:[(0,X.jsx)(Ql,{variant:`solid`,minSize:12,maxSize:35,children:(0,X.jsx)(Wd,{groups:ce,onToggle:(e,t)=>S(n=>{let r=new Set(n);return t?r.add(e):r.delete(e),r})})}),(0,X.jsx)(Ql,{minSize:50,maxSize:100,children:(0,X.jsxs)(Zl,{resizable:!0,split:`60% 40%`,collapseBelow:`560px`,children:[(0,X.jsx)(Ql,{minSize:30,children:(0,X.jsx)(`main`,{className:`main`,"aria-label":`Library ${y}`,children:se.length===0?(0,X.jsx)(`p`,{className:`empty`,children:xe}):(0,X.jsx)(Kd,{items:se.map(e=>mf(e,y)),selectedId:C,onSelect:fe,label:`${se.length} images`})})}),(0,X.jsx)(Ql,{collapsed:!le,minSize:25,maxSize:70,children:le&&(0,X.jsx)(`aside`,{className:`detail`,"aria-label":`Image details`,children:(0,X.jsx)(uf,{ref:ie,asset:le,vocabulary:i,onChanged:f,onDecided:he,onSkip:()=>pe(1),onTransition:(e,t)=>ge(t),onDirtyChange:g,onOpenSimilar:e=>{let n=t.find(t=>t.id===e);if(!n||!h())return;let r=od(n.status);r!==y&&(b(r),S(new Set)),w(e)}},le.id)})})]})})]})})]})}var gf=/^[a-z0-9]+(?:-[a-z0-9]+)*$/;function _f({assets:e,vocabulary:t,onChanged:n,onOpenInGrid:r}){let i=Od(e,t),[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)({}),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(null),v=()=>{o(null),c(``)},y=(e,t)=>{f(!1),e.ok?(m(null),g(t),v(),n()):(g(null),m({text:e.error,usage:e.data.usage}),v())},b=async(e,t)=>{f(!0),m(null),y(await e(),t)},x=e=>{let t=(l[e]??``).trim();b(()=>xu(e,t),`Added ${t} to ${e}.`).then(()=>u(t=>({...t,[e]:``})))},S=a,C=S?(t[S.axis]??[]).filter(e=>e!==S.slug):[],w=gf.test(s)&&!!S&&s!==S.slug;return(0,X.jsxs)(`div`,{className:`vocab`,children:[p&&(0,X.jsxs)(Fl,{type:`error`,children:[(0,X.jsx)(`div`,{children:p.text}),p.usage&&p.usage.length>0&&(0,X.jsx)(`ul`,{"aria-label":`Assets using this slug`,children:p.usage.map(e=>(0,X.jsx)(`li`,{children:e},e))})]}),(0,X.jsx)(`p`,{className:`vocab-lead`,children:`One vocabulary for the Library and Inspiration. Claude tags with these terms; click a term to see its images.`}),h&&(0,X.jsx)(`p`,{className:`editor-message`,role:`status`,children:h}),Object.entries(i).map(([e,t])=>{let n=Ad(e,t),i=n.some(e=>e.label);return(0,X.jsxs)(`section`,{className:i?`vocab-axis vocab-axis--faceted`:`vocab-axis`,"aria-label":`${e} vocabulary`,children:[(0,X.jsxs)(`h2`,{children:[e,` `,(0,X.jsx)(Il,{size:`sm`,color:`gray`,children:t.length})]}),(0,X.jsx)(`div`,{className:`vocab-groups`,children:n.map(t=>(0,X.jsxs)(`div`,{className:`vocab-group`,children:[t.label&&(0,X.jsx)(`h3`,{children:t.label}),(0,X.jsx)(`ul`,{className:`vocab-list`,children:t.rows.map(({slug:t,label:n,count:i})=>(0,X.jsxs)(`li`,{className:i===0?`vocab-row is-unused`:`vocab-row`,children:[(0,X.jsxs)(`button`,{type:`button`,className:`vocab-term`,title:t,"aria-label":`Show ${t} in grid`,onClick:()=>Dd[e]&&r(Dd[e],t),children:[(0,X.jsx)(`span`,{className:`vocab-label`,children:n}),(0,X.jsx)(`span`,{className:`facet-count`,"aria-label":`${i} assets`,children:i})]}),(0,X.jsxs)(`span`,{className:`vocab-actions`,children:[(0,X.jsx)(vf,{label:`Rename ${t}`,tip:`Rename`,disabled:d,onClick:()=>{c(t),o({kind:`rename`,axis:e,slug:t})},children:(0,X.jsx)(Kl,{size:`xs`})}),(0,X.jsx)(vf,{label:`Merge ${t}`,tip:`Merge into another term`,disabled:d,onClick:()=>o({kind:`merge`,axis:e,slug:t}),children:(0,X.jsx)(Gl,{size:`xs`})}),(0,X.jsx)(vf,{label:`Delete ${t}`,disabled:d||i>0,destructive:!0,tip:i>0?`In use by ${i} asset${i===1?``:`s`}; merge it instead`:`Delete`,onClick:()=>o({kind:`delete`,axis:e,slug:t}),children:(0,X.jsx)(ql,{size:`xs`})})]})]},t))})]},t.label??e))}),(0,X.jsxs)(`div`,{className:`vocab-add`,children:[(0,X.jsx)(ou,{size:`sm`,"aria-label":`New ${e} slug`,placeholder:i?`facet-new-term`:`new-term`,value:l[e]??``,onValueChanged:t=>u(n=>({...n,[e]:t.detail.value}))}),(0,X.jsx)(J,{size:`sm`,variant:`outline`,disabled:d||!gf.test((l[e]??``).trim()),onClick:()=>x(e),children:`Add`})]})]},e)}),(0,X.jsx)(Vl,{open:S?.kind===`delete`,heading:`Delete ${S?.slug??``}?`,message:`Remove ${S?.slug??``} from ${S?.axis??``}. It is unused, so no assets change. This syncs from origin first and makes one commit.`,confirmText:`Delete`,destructive:!0,loading:d,onConfirm:()=>S&&b(()=>wu(S.axis,S.slug),`Deleted ${S.slug}.`),onCancel:v}),(0,X.jsxs)(Wl,{open:S?.kind===`rename`||S?.kind===`merge`,size:`sm`,"aria-label":S?.kind===`merge`?`Merge slug`:`Rename slug`,onOpenChanged:e=>{e.detail.open||v()},children:[(0,X.jsx)(Ul,{slot:`header`,children:S?.kind===`merge`?`Merge ${S.slug} into...`:`Rename ${S?.slug??``}`}),S?.kind===`merge`?(0,X.jsx)(Yl,{"aria-label":`Merge into`,placeholder:`Choose target slug`,options:C.map(e=>[e,e]),value:s,onValueChanged:e=>c(e.detail.value)}):(0,X.jsx)(ou,{"aria-label":`New slug`,value:s,invalid:s!==``&&!gf.test(s),onValueChanged:e=>c(e.detail.value)}),(0,X.jsx)(`p`,{className:`editor-message`,children:`Rewrites every affected asset (all statuses) and vocabulary.json in one commit, after syncing from origin.`}),(0,X.jsxs)(Hl,{slot:`footer`,children:[(0,X.jsx)(J,{variant:`outline`,onClick:v,children:`Cancel`}),S?.kind===`merge`?(0,X.jsx)(J,{disabled:d||!s,onClick:()=>b(()=>Cu(S.axis,S.slug,s),`Merged ${S.slug} into ${s}.`),children:`Merge`}):(0,X.jsx)(J,{disabled:d||!w,onClick:()=>S&&b(()=>Su(S.axis,S.slug,s),`Renamed ${S.slug} to ${s}.`),children:`Rename`})]})]})]})}function vf({label:e,tip:t,disabled:n,destructive:r,onClick:i,children:a}){return(0,X.jsx)(`span`,{className:`vocab-action`,title:t,children:(0,X.jsx)(J,{size:`xs`,variant:`ghost`,icon:!0,destructive:r,disabled:n,"aria-label":e,onClick:i,children:a})})}var yf={product:`Products`,categories:`Categories`,verticals:`Verticals`,concepts:`Concepts`,style:`Style`};function bf(){let[e,t]=(0,_.useState)(`library`),[n,r]=(0,_.useState)([]),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)({}),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(!1),[T,E]=(0,_.useState)(0),[D,ee]=(0,_.useState)(null),O=(0,_.useCallback)(()=>{uu().then(e=>{l(e),d(null)}).catch(e=>d(e.message))},[]),te=(0,_.useCallback)(()=>{Fu().then(e=>{e.ok&&v(e.data)})},[]),[k]=(0,_.useState)(()=>new jd),ne=(0,_.useCallback)(()=>{let e=k.begin();return lu().then(t=>{k.accept(e)&&r(n=>k.merge(e,t,n)),s(null)}).catch(e=>s(e.message)).finally(()=>a(!0))},[k]),re=(0,_.useCallback)(()=>{ne(),du().then(p).catch(()=>p({})),O(),te()},[O,te,ne]);(0,_.useEffect)(re,[re]),(0,_.useEffect)(()=>{let e=setInterval(O,3e4);return()=>clearInterval(e)},[O]);let ie=(0,_.useRef)(void 0),A=(0,_.useCallback)(()=>{clearTimeout(ie.current),ie.current=setTimeout(()=>{te(),O()},800)},[te,O]);(0,_.useEffect)(()=>{if(!y?.running)return;let e=setInterval(()=>{ne(),te()},5e3);return()=>clearInterval(e)},[y?.running,ne,te]);let j=(0,_.useCallback)(async()=>{S(null);let e=await Pu();e.ok?b({id:e.data.job_id,running:!0}):S(`Claude did not start: ${e.error}`)},[]),ae=(0,_.useCallback)(e=>{b(t=>t&&{...t,running:!1,job:e}),re()},[re]),oe=(0,_.useCallback)(e=>{k.saved(e.id),r(t=>t.map(t=>t.id===e.id?e:t))},[k]),se=(0,_.useCallback)(e=>{oe(e),A()},[oe,A]),ce=(0,_.useRef)(!1),le=(0,_.useCallback)(e=>{ce.current=e},[]),ue=(0,_.useCallback)(()=>id(ce.current,()=>window.confirm(`You have unsaved changes. Discard them?`))?(ce.current=!1,!0):!1,[]);(0,_.useEffect)(()=>{let e=e=>{ce.current&&e.preventDefault()};return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[]),(0,_.useEffect)(()=>{if(e!==`library`)return;let t=e=>{e.dataTransfer?.types.includes(`Files`)&&w(!0)};return window.addEventListener(`dragenter`,t),()=>window.removeEventListener(`dragenter`,t)},[e]);let de=(0,_.useMemo)(()=>n.filter(e=>od(e.status)===`inbox`).length,[n]),fe=n=>{n!==e&&ue()&&t(n)};return(0,X.jsxs)(`div`,{className:`app`,children:[(0,X.jsxs)(`header`,{className:`topbar`,children:[(0,X.jsx)(`h1`,{children:`Quarry`}),(0,X.jsxs)(Rl,{"aria-label":`Area`,children:[(0,X.jsxs)(Ll,{active:e===`library`,onClick:()=>fe(`library`),children:[`Library`,de?` (${de})`:``]}),(0,X.jsxs)(Ll,{active:e===`inspiration`,onClick:()=>fe(`inspiration`),children:[`Inspiration`,T?` (${T})`:``]}),(0,X.jsx)(Ll,{active:e===`vocabulary`,onClick:()=>fe(`vocabulary`),children:`Vocabulary`})]}),e!==`vocabulary`&&(0,X.jsx)(`div`,{className:`search`,children:(0,X.jsx)(ou,{type:`search`,"aria-label":`Search ${e}`,placeholder:`Search descriptions, tags and captions`,value:m,onValueChanged:e=>h(e.detail.value)})}),(0,X.jsx)(`span`,{className:`spacer`}),e===`library`&&(0,X.jsx)(J,{size:`sm`,onClick:()=>w(!0),children:`+ Add images`})]}),(0,X.jsx)(Zu,{status:c,error:u,onRefresh:re}),(0,X.jsx)(`div`,{className:`area-host`,hidden:e!==`library`,children:(0,X.jsx)(hf,{active:e===`library`&&!C,assets:n,loaded:i,loadError:o,vocabulary:f,q:m,summary:g,rateJob:y,rateError:x,onStartRate:()=>void j(),onRateJobFinished:ae,onDismissRateJob:()=>b(null),onChanged:se,reloadAssets:ne,refreshAfterWrite:A,confirmDiscard:ue,onDirtyChange:le,openFilter:D})}),(0,X.jsx)(`div`,{className:`area-host`,hidden:e!==`inspiration`,children:(0,X.jsx)(af,{active:e===`inspiration`,q:m,onInboxCount:E})}),e===`vocabulary`&&(0,X.jsx)(`main`,{className:`main`,children:(0,X.jsx)(_f,{assets:n,vocabulary:f,onChanged:re,onOpenInGrid:(e,r)=>{let i=yf[e]??e,a=n.some(e=>e.status===`confirmed`&&fd(e).some(([e,t])=>e===i&&t===r));ee(e=>({key:sd(i,r),view:a?`approved`:`inbox`,n:(e?.n??0)+1})),h(``),t(`library`)}})}),(0,X.jsxs)(Wl,{open:C,size:`lg`,onOpenChanged:e=>{e.detail.open||w(!1)},children:[(0,X.jsx)(Ul,{slot:`header`,children:`Add images to the Library`}),(0,X.jsx)(`p`,{className:`dialog-lead`,children:`They land in the Inbox. Claude then describes, tags and rates each one, and you approve or reject.`}),(0,X.jsx)(Xu,{products:f.products??[],onIngested:e=>{re(),e.created.length&&g?.rater.available&&!y?.running&&j()},rater:g?.rater??null,waiting:g?.waiting_for_bot??0,rateJob:y,onAutoRate:()=>void j(),rateError:x,onReviewQueue:()=>{w(!1),t(`library`)}})]})]})}We.inject(),Ge.inject(),(0,v.createRoot)(document.getElementById(`root`)).render((0,X.jsx)(_.StrictMode,{children:(0,X.jsx)(bf,{})}));