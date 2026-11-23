var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var C={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function w(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function T(e,t){return w(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var E=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(E,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=T(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(E,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function D(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function O(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function le(e){var t=C.T,n={};n.types=t===null?null:t.types,C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,ce)}catch(e){ce(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}}function ue(e){var t=C.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else le(ue.bind(null,e))}var de={map:D,forEach:function(e,t,n){D(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return D(e,function(){t++}),t},toArray:function(e){return D(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=de,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.addTransitionType=ue,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return w(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return w(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=le,e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&E(x,t.startTime-e)}}}var S=!1,ee=-1,te=5,C=-1;function ne(){return g?!0:!(e.unstable_now()-C<te)}function w(){if(g=!1,S){var t=e.unstable_now();C=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ee),ee=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&E(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(w)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=w,T=function(){ie.postMessage(null)}}else T=function(){_(w,0)};function E(t,n){ee=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):te=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ee),ee=-1):h=!0,E(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function ee(e,t,n){return e===n||e===t&&(x=e,!0)}function te(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function C(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ne(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var w=Object.assign,T=Symbol.for(`react.element`),re=Symbol.for(`react.transitional.element`),ie=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),ae=Symbol.for(`react.strict_mode`),oe=Symbol.for(`react.profiler`),se=Symbol.for(`react.consumer`),D=Symbol.for(`react.context`),O=Symbol.for(`react.forward_ref`),ce=Symbol.for(`react.suspense`),le=Symbol.for(`react.suspense_list`),ue=Symbol.for(`react.memo`),de=Symbol.for(`react.lazy`),fe=Symbol.for(`react.activity`),pe=Symbol.for(`react.legacy_hidden`),me=Symbol.for(`react.memo_cache_sentinel`),he=Symbol.for(`react.view_transition`),ge=Symbol.for(`react.recoverable`),_e=Symbol.iterator;function ve(e){return typeof e!=`object`||!e?null:(e=_e&&e[_e]||e[`@@iterator`],typeof e==`function`?e:null)}var ye=Symbol.for(`react.client.reference`);function be(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ye?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case oe:return`Profiler`;case ae:return`StrictMode`;case ce:return`Suspense`;case le:return`SuspenseList`;case fe:return`Activity`;case he:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case ie:return`Portal`;case D:return e.displayName||`Context`;case se:return(e._context.displayName||`Context`)+`.Consumer`;case O:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ue:return t=e.displayName||null,t===null?be(e.type)||`Memo`:t;case de:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}var xe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Se={pending:!1,data:null,method:null,action:null},Ce=[],we=-1;function Te(e){return{current:e}}function Ee(e){0>we||(e.current=Ce[we],Ce[we]=null,we--)}function j(e,t){we++,Ce[we]=e.current,e.current=t}var De=Te(null),Oe=Te(null),ke=Te(null),Ae=Te(null);function je(e,t){switch(j(ke,t),j(Oe,e),j(De,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}Ee(De),j(De,e)}function Me(){Ee(De),Ee(Oe),Ee(ke)}function Ne(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,j(Ae,e)),t=De.current;var n=dp(t,e.type);t!==n&&(j(Oe,e),j(De,n))}function Pe(e){Oe.current===e&&(Ee(De),Ee(Oe)),Ae.current===e&&(Ee(Ae),sh._currentValue=Se)}var Fe,Ie;function Le(e){if(Fe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Fe=t&&t[1]||``,Ie=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Fe+e+Ie}var Re=!1;function ze(e,t){if(!e||Re)return``;Re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Re=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Le(n):``}function Be(e,t){switch(e.tag){case 26:case 27:case 5:return Le(e.type);case 16:return Le(`Lazy`);case 13:return e.child!==t&&t!==null?Le(`Suspense Fallback`):Le(`Suspense`);case 19:return Le(`SuspenseList`);case 0:case 15:return ze(e.type,!1);case 11:return ze(e.type.render,!1);case 1:return ze(e.type,!0);case 31:return Le(`Activity`);case 30:return Le(`ViewTransition`);default:return``}}function Ve(e){try{var t=``,n=null;do t+=Be(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var He=Object.prototype.hasOwnProperty,Ue=t.unstable_scheduleCallback,We=t.unstable_cancelCallback,Ge=t.unstable_shouldYield,Ke=t.unstable_requestPaint,qe=t.unstable_now,Je=t.unstable_getCurrentPriorityLevel,Ye=t.unstable_ImmediatePriority,Xe=t.unstable_UserBlockingPriority,M=t.unstable_NormalPriority,N=t.unstable_LowPriority,Ze=t.unstable_IdlePriority,Qe=t.log,$e=t.unstable_setDisableYieldValue,et=null,tt=null;function nt(e){if(typeof Qe==`function`&&$e(e),tt&&typeof tt.setStrictMode==`function`)try{tt.setStrictMode(et,e)}catch{}}var rt=Math.clz32?Math.clz32:at,it=Math.log,P=Math.LN2;function at(e){return e>>>=0,e===0?32:31-(it(e)/P|0)|0}var ot=256,st=262144,ct=4194304;function lt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ut(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=lt(n))):i=lt(o):i=lt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=lt(n))):i=lt(o)):i=lt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function dt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ft(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-rt(n),i=1<<r;t|=e[r],n&=~i}return t}function pt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mt(){var e=ct;return ct<<=1,!(ct&62914560)&&(ct=4194304),e}function ht(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _t(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-rt(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&vt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function vt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-rt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function bt(e,t){var n=t&-t;return n=n&42?1:xt(n),(n&(e.suspendedLanes|t))===0?n:0}function xt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function St(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ct(){var e=A.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function wt(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var Tt=Math.random().toString(36).slice(2),Et=`__reactFiber$`+Tt,Dt=`__reactProps$`+Tt,Ot=`__reactContainer$`+Tt,kt=`__reactEvents$`+Tt,At=`__reactListeners$`+Tt,jt=`__reactHandles$`+Tt,Mt=`__reactResources$`+Tt,Nt=`__reactMarker$`+Tt,Pt=`__reactLoad$`+Tt;function Ft(e){delete e[Et],delete e[Dt],delete e[At],delete e[jt]}function It(e){var t;if(t=e[Et])return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Et])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Lt(e){if(e=e[Et]||e[Ot]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Rt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function zt(e){var t=e[Mt];return t||=e[Mt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Bt(e){e[Nt]=!0}function Vt(e){e[Pt]=void 0}var Ht=new Set,Ut={};function F(e,t){Wt(e,t),Wt(e+`Capture`,t)}function Wt(e,t){for(Ut[e]=t,e=0;e<t.length;e++)Ht.add(t[e])}var Gt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Kt={},qt={};function Jt(e){return He.call(qt,e)?!0:He.call(Kt,e)?!1:Gt.test(e)?qt[e]=!0:(Kt[e]=!0,!1)}var I=!1;function Yt(){var e=I;return I=!1,e}function Xt(e,t,n){if(Jt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Qt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function $t(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function en(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function tn(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nn(e){if(!e._valueTracker){var t=en(e)?`checked`:`value`;e._valueTracker=tn(e,t,``+e[t])}}function rn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=en(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var an=/[\n"\\]/g;function on(e){return e.replace(an,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function sn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+$t(t)):e.value!==``+$t(t)&&(e.value=``+$t(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):ln(e,$t(n)):o===`number`&&e.value==t?ln(e,$t(e.value)):ln(e,$t(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+$t(s):e.removeAttribute(`name`)}function cn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){nn(e);return}n=n==null?``:``+$t(n),t=t==null?n:``+$t(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),nn(e)}function ln(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function dn(e,t,n){t!=null&&(t=``+$t(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+$t(n)}function fn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(xe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=$t(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),nn(e)}function pn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function hn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||mn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function gn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,I=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(hn(e,a,r),I=!0)}else for(var o in t)t.hasOwnProperty(o)&&hn(e,o,t[o])}function _n(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var vn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),yn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bn(e){return yn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function xn(){}var Sn=null;function L(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cn=null,R=null;function wn(e){var t=Lt(e);if(t&&(e=t.stateNode)){var n=e[Dt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(sn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+on(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Dt]||null;if(!a)throw Error(i(90));sn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&rn(r)}break a;case`textarea`:dn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}}}var Tn=!1;function En(e,t,n){if(Tn)return e(t,n);Tn=!0;try{return e(t)}finally{if(Tn=!1,(Cn!==null||R!==null)&&(Ld(),Cn&&(t=Cn,e=R,R=Cn=null,wn(t),e)))for(t=0;t<e.length;t++)wn(e[t])}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Dt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var On=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,kn=!1;if(On)try{var An={};Object.defineProperty(An,"passive",{get:function(){kn=!0}}),window.addEventListener(`test`,An,An),window.removeEventListener(`test`,An,An)}catch{kn=!1}var jn=null,Mn=null,Nn=null;function Pn(){if(Nn)return Nn;var e,t=Mn,n=t.length,r,i=`value`in jn?jn.value:jn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Nn=i.slice(e,1<r?1-r:void 0)}function Fn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function In(){return!0}function Ln(){return!1}function Rn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?In:Ln,this.isPropagationStopped=Ln,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=In)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=In)},persist:function(){},isPersistent:In}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=Rn(zn),Vn=w({},zn,{view:0,detail:0}),Hn=Rn(Vn),Un,Wn,Gn,Kn=w({},Vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Gn&&(Gn&&e.type===`mousemove`?(Un=e.screenX-Gn.screenX,Wn=e.screenY-Gn.screenY):Wn=Un=0,Gn=e),Un)},movementY:function(e){return`movementY`in e?e.movementY:Wn}}),qn=Rn(Kn),Jn=Rn(w({},Kn,{dataTransfer:0})),z=Rn(w({},Vn,{relatedTarget:0})),Yn=Rn(w({},zn,{animationName:0,elapsedTime:0,pseudoElement:0})),Xn=Rn(w({},zn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Zn=Rn(w({},zn,{data:0})),Qn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},$n={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},er={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function tr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=er[e])?!!t[e]:!1}function nr(){return tr}var rr=Rn(w({},Vn,{key:function(e){if(e.key){var t=Qn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Fn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?$n[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nr,charCode:function(e){return e.type===`keypress`?Fn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Fn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),ir=Rn(w({},Kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),ar=Rn(w({},zn,{submitter:0})),or=Rn(w({},Vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nr})),sr=Rn(w({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0})),cr=Rn(w({},Kn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),lr=Rn(w({},zn,{newState:0,oldState:0,source:0})),ur=[9,13,27,32],dr=On&&`CompositionEvent`in window,fr=null;On&&`documentMode`in document&&(fr=document.documentMode);var pr=On&&`TextEvent`in window&&!fr,mr=On&&(!dr||fr&&8<fr&&11>=fr),hr=` `,gr=!1;function _r(e,t){switch(e){case`keyup`:return ur.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function vr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var yr=!1;function br(e,t){switch(e){case`compositionend`:return vr(t);case`keypress`:return t.which===32?(gr=!0,hr):null;case`textInput`:return e=t.data,e===hr&&gr?null:e;default:return null}}function xr(e,t){if(yr)return e===`compositionend`||!dr&&_r(e,t)?(e=Pn(),Nn=Mn=jn=null,yr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return mr&&t.locale!==`ko`?null:t.data;default:return null}}var Sr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Sr[e.type]:t===`textarea`}function wr(e,t,n,r){Cn?R?R.push(r):R=[r]:Cn=r,t=qf(t,`onChange`),0<t.length&&(n=new Bn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Tr=null,Er=null;function B(e){Bf(e,0)}function Dr(e){if(rn(Rt(e)))return e}function Or(e,t){if(e===`change`)return t}var kr=!1;if(On){var Ar;if(On){var jr=`oninput`in document;if(!jr){var Mr=document.createElement(`div`);Mr.setAttribute(`oninput`,`return;`),jr=typeof Mr.oninput==`function`}Ar=jr}else Ar=!1;kr=Ar&&(!document.documentMode||9<document.documentMode)}function Nr(){Tr&&(Tr.detachEvent(`onpropertychange`,Pr),Er=Tr=null)}function Pr(e){if(e.propertyName===`value`&&Dr(Er)){var t=[];wr(t,Er,e,L(e)),En(B,t)}}function Fr(e,t,n){e===`focusin`?(Nr(),Tr=t,Er=n,Tr.attachEvent(`onpropertychange`,Pr)):e===`focusout`&&Nr()}function Ir(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Dr(Er)}function Lr(e,t){if(e===`click`)return Dr(t)}function Rr(e,t){if(e===`input`||e===`change`)return Dr(t)}function zr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Br=typeof Object.is==`function`?Object.is:zr;function Vr(e,t){if(Br(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!He.call(t,i)||!Br(e[i],t[i]))return!1}return!0}function Hr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wr(e,t){var n=Ur(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ur(n)}}function Gr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Hr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function qr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Jr=On&&`documentMode`in document&&11>=document.documentMode,Yr=null,Xr=null,Zr=null,Qr=!1;function $r(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qr||Yr==null||Yr!==Hr(r)||(r=Yr,`selectionStart`in r&&qr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&Vr(Zr,r)||(Zr=r,r=qf(Xr,`onSelect`),0<r.length&&(t=new Bn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Yr)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ti={animationend:ei(`Animation`,`AnimationEnd`),animationiteration:ei(`Animation`,`AnimationIteration`),animationstart:ei(`Animation`,`AnimationStart`),transitionrun:ei(`Transition`,`TransitionRun`),transitionstart:ei(`Transition`,`TransitionStart`),transitioncancel:ei(`Transition`,`TransitionCancel`),transitionend:ei(`Transition`,`TransitionEnd`)},ni={},ri={};On&&(ri=document.createElement(`div`).style,`AnimationEvent`in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),`TransitionEvent`in window||delete ti.transitionend.transition);function ii(e){if(ni[e])return ni[e];if(!ti[e])return e;var t=ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ri)return ni[e]=t[n];return e}var ai=ii(`animationend`),oi=ii(`animationiteration`),si=ii(`animationstart`),ci=ii(`transitionrun`),li=ii(`transitionstart`),ui=ii(`transitioncancel`),di=ii(`transitionend`),fi=new Map,pi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);pi.push(`scrollEnd`);function mi(e,t){fi.set(e,t),F(t,[e])}var hi=0;function gi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=vd.identifierPrefix;var n=hi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function _i(e){if(e==null||typeof e==`string`)return e;var t=null,n=Ed;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function vi(e,t){return e=_i(e),t=_i(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var yi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},bi=[],xi=0,Si=0;function Ci(){for(var e=xi,t=Si=xi=0;t<e;){var n=bi[t];bi[t++]=null;var r=bi[t];bi[t++]=null;var i=bi[t];bi[t++]=null;var a=bi[t];if(bi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Di(n,i,a)}}function wi(e,t,n,r){bi[xi++]=e,bi[xi++]=t,bi[xi++]=n,bi[xi++]=r,Si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ti(e,t,n,r){return wi(e,t,n,r),Oi(e)}function Ei(e,t){return wi(e,null,null,t),Oi(e)}function Di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-rt(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Oi(e){if(50<Dd)throw Dd=0,Od=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ki={};function Ai(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ji(e,t,n,r){return new Ai(e,t,n,r)}function Mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ni(e,t){var n=e.alternate;return n===null?(n=ji(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Pi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Fi(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Mi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,De.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case fe:return e=ji(31,n,t,a),e.elementType=fe,e.lanes=o,e;case E:return Ii(n.children,a,o,t);case ae:s=8,a|=24;break;case oe:return e=ji(12,n,t,a|2),e.elementType=oe,e.lanes=o,e;case ce:return e=ji(13,n,t,a),e.elementType=ce,e.lanes=o,e;case le:return e=ji(19,n,t,a),e.elementType=le,e.lanes=o,e;case pe:case he:return e=a|32,e=ji(30,n,t,e),e.elementType=he,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case D:s=10;break a;case se:s=9;break a;case O:s=11;break a;case ue:s=14;break a;case de:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ji(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ii(e,t,n,r){return e=ji(7,e,r,t),e.lanes=n,e}function Li(e,t,n){return e=ji(6,e,null,t),e.lanes=n,e}function Ri(e){var t=ji(18,null,null,0);return t.stateNode=e,t}function zi(e,t,n){return t=ji(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Bi=new WeakMap;function Vi(e,t){if(typeof e==`object`&&e){var n=Bi.get(e);return n===void 0?(t={value:e,source:t,stack:Ve(t)},Bi.set(e,t),t):n}return{value:e,source:t,stack:Ve(t)}}var Hi=[],Ui=0,Wi=null,Gi=0,Ki=[],qi=0,Ji=null,Yi=1,Xi=``;function Zi(e,t){Hi[Ui++]=Gi,Hi[Ui++]=Wi,Wi=e,Gi=t}function Qi(e,t,n){Ki[qi++]=Yi,Ki[qi++]=Xi,Ki[qi++]=Ji,Ji=e;var r=Yi;e=Xi;var i=32-rt(r)-1;r&=~(1<<i),n+=1;var a=32-rt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yi=1<<32-rt(t)+i|n<<i|r,Xi=a+e}else Yi=1<<a|n<<i|r,Xi=e}function $i(e){e.return!==null&&(Zi(e,1),Qi(e,1,0))}function ea(e){for(;e===Wi;)Wi=Hi[--Ui],Hi[Ui]=null,Gi=Hi[--Ui],Hi[Ui]=null;for(;e===Ji;)Ji=Ki[--qi],Ki[qi]=null,Xi=Ki[--qi],Ki[qi]=null,Yi=Ki[--qi],Ki[qi]=null}function ta(e,t){Ki[qi++]=Yi,Ki[qi++]=Xi,Ki[qi++]=Ji,Yi=t.id,Xi=t.overflow,Ji=e}var na=null,V=null,H=!1,ra=null,ia=!1,aa=Error(i(519));function oa(e){throw fa(Vi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),aa}function sa(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Et]=e,t[Dt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<Rf.length;n++)$(Rf[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),cn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),fn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||$f(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=xn),t=!0):t=!1,t||oa(e,!0)}function ca(e){for(na=e.return;na;)switch(na.tag){case 5:case 31:case 13:ia=!1;return;case 27:case 3:ia=!0;return;default:na=na.return}}function la(e){if(e!==na)return!1;if(!H)return ca(e),H=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&V&&oa(e),ca(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));V=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));V=dm(e)}else t===27?(t=V,Sp(e.type)?(e=um,um=null,V=e):V=t):V=na?lm(e.stateNode.nextSibling):null;return!0}function ua(){V=na=null,H=!1}function da(){var e=ra;return e!==null&&(ud===null?ud=e:ud.push.apply(ud,e),ra=null),e}function fa(e){ra===null?ra=[e]:ra.push(e)}var pa=Te(null),ma=null,ha=null;function ga(e,t,n){j(pa,t._currentValue),t._currentValue=n}function _a(e){e._currentValue=pa.current,Ee(pa)}function va(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ya(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),va(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),va(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),va(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ba(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Br(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Ae.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&ya(t,e,n,r),t.flags|=262144,e!==null}function xa(e){for(e=e.firstContext;e!==null;){if(!Br(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Sa(e){ma=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ca(e){return Ta(ma,e)}function wa(e,t){return ma===null&&Sa(e),Ta(e,t)}function Ta(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ha===null){if(e===null)throw Error(i(308));ha=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ha=ha.next=t;return n}var Ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Da=t.unstable_scheduleCallback,Oa=t.unstable_NormalPriority,ka={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Aa(){return{controller:new Ea,data:new Map,refCount:0}}function ja(e){e.refCount--,e.refCount===0&&Da(Oa,function(){e.controller.abort()})}function Ma(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Na=null;function Pa(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Fa=null,Ia=0,La=0,Ra=null;function za(e,t){if(Fa===null){var n=Fa=[];Ia=0,La=Nf(),Ra={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ia++,t.then(Ba,Ba),t}function Ba(){if(--Ia===0&&(Na=null,Fa!==null)){Ra!==null&&(Ra.status=`fulfilled`);var e=Fa;Fa=null,La=0,Ra=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ha=k.S;k.S=function(e,t){if(pd=qe(),typeof t==`object`&&t&&typeof t.then==`function`&&za(e,t),Na!==null)for(var n=yf;n!==null;)Ma(n,Na),n=n.next;if(n=e.types,n!==null){for(var r=yf;r!==null;)Ma(r,n),r=r.next;if(La!==0){r=Na,r===null&&(r=Na=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ha!==null&&Ha(e,t)};var Ua=Te(null);function Wa(){var e=Ua.current;return e===null?Zu.pooledCache:e}function Ga(e,t){t===null?j(Ua,Ua.current):j(Ua,t.pool)}function Ka(){var e=Wa();return e===null?null:{parent:ka._currentValue,pool:e}}var qa=Error(i(460)),Ja=Error(i(474)),Ya=Error(i(542)),Xa={then:function(){}};function Za(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Qa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(xn,xn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,no(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(xn,xn);else{if(e=Zu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,no(e),e}throw eo=t,qa}}function $a(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(eo=e,qa):e}}var eo=null;function to(){if(eo===null)throw Error(i(459));var e=eo;return eo=null,e}function no(e){if(e===qa||e===Ya)throw Error(i(483))}var ro=null,io=0;function ao(e){var t=io;return io+=1,ro===null&&(ro=[]),Qa(ro,e,t)}function oo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function so(e,t){throw t.$$typeof===T?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function co(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ni(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Li(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===E?(e=d(e,t,n.props.children,r,n.key),oo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===de&&$a(i)===t.type)?(t=a(t,n.props),oo(t,n),t.return=e,t):(t=Fi(n.type,n.key,n.props,null,e.mode,r),oo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=zi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ii(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Li(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case re:return n=Fi(t.type,t.key,t.props,null,e.mode,n),oo(n,t),n.return=e,n;case ie:return t=zi(t,e.mode,n),t.return=e,t;case de:return t=$a(t),f(e,t,n)}if(xe(t)||ve(t))return t=Ii(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ao(t),n);if(t.$$typeof===D)return f(e,wa(e,t),n);so(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case re:return n.key===i?l(e,t,n,r):null;case ie:return n.key===i?u(e,t,n,r):null;case de:return n=$a(n),p(e,t,n,r)}if(xe(n)||ve(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ao(n),r);if(n.$$typeof===D)return p(e,t,wa(e,n),r);so(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case re:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ie:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case de:return r=$a(r),m(e,t,n,r,i)}if(xe(r)||ve(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ao(r),i);if(r.$$typeof===D)return m(e,t,n,wa(t,r),i);so(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),H&&Zi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return H&&Zi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),H&&Zi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),H&&Zi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return H&&Zi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),H&&Zi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===E&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case re:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===E){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),oo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===de&&$a(l)===r.type){n(e,r.sibling),c=a(r,o.props),oo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===E?(c=Ii(o.props.children,e.mode,c,o.key),oo(c,o),c.return=e,e=c):(c=Fi(o.type,o.key,o.props,null,e.mode,c),oo(c,o),c.return=e,e=c)}return s(e);case ie:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=zi(o,e.mode,c),c.return=e,e=c}return s(e);case de:return o=$a(o),_(e,r,o,c)}if(xe(o))return h(e,r,o,c);if(ve(o)){if(l=ve(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,ao(o),c);if(o.$$typeof===D)return _(e,r,wa(e,o),c);so(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Li(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{io=0;var i=_(e,t,n,r);return ro=null,i}catch(t){if(t===qa||t===Ya)throw t;var a=ji(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var lo=co(!0),uo=co(!1),fo=!1;function po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ho(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function go(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Oi(e),Di(e,null,n),t}return wi(e,r,t,n),Oi(e)}function _o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yt(e,n)}}function vo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var yo=!1;function bo(){if(yo){var e=Ra;if(e!==null)throw e}}function xo(e,t,n,r){yo=!1;var i=e.updateQueue;fo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Z&f)===f:(r&f)===f){f!==0&&f===La&&(yo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=w({},d,f);break a;case 2:fo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),id|=o,e.lanes=o,e.memoizedState=d}}function So(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Co(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)So(n[e],t)}var wo=Te(null),To=Te(0);function Eo(e,t){e=nd,j(To,e),j(wo,t),nd=e|t.baseLanes}function Do(){j(To,nd),j(wo,wo.current)}function Oo(){nd=To.current,Ee(wo),Ee(To)}var ko=Te(null),Ao=null;function jo(e){var t=e.alternate;j(Io,Io.current&1),j(ko,e),Ao===null&&(t===null||wo.current!==null||t.memoizedState!==null)&&(Ao=e)}function Mo(e){j(Io,Io.current),j(ko,e),Ao===null&&(Ao=e)}function No(e){e.tag===22?(j(Io,Io.current),j(ko,e),Ao===null&&(Ao=e)):Po()}function Po(){j(Io,Io.current),j(ko,ko.current)}function Fo(e){Ee(ko),Ao===e&&(Ao=null),Ee(Io)}var Io=Te(0);function Lo(e,t){j(ko,ko.current),j(Io,t)}function Ro(e){Ee(Io),Ee(ko),Ao===e&&(Ao=null)}function zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bo=0,U=null,Vo=null,Ho=null,Uo=!1,Wo=!1,Go=!1,Ko=0,qo=0,Jo=null,Yo=0;function Xo(){throw Error(i(321))}function Zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Br(e[n],t[n]))return!1;return!0}function Qo(e,t,n,r,i,a){return Bo=a,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?hc:gc,Go=!1,a=n(r,i),Go=!1,Wo&&(a=es(t,n,r,i)),$o(e),a}function $o(e){k.H=mc;var t=Vo!==null&&Vo.next!==null;if(Bo=0,Ho=Vo=U=null,Uo=!1,qo=0,Jo=null,t)throw Error(i(300));e===null||Nc||(e=e.dependencies,e!==null&&xa(e)&&(Nc=!0))}function es(e,t,n,r){U=e;var a=0;do{if(Wo&&(Jo=null),qo=0,Wo=!1,25<=a)throw Error(i(301));if(a+=1,Ho=Vo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=_c,o=t(n,r)}while(Wo);return o}function ts(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?cs(t):t,e=e.useState()[0],(Vo===null?null:Vo.memoizedState)!==e&&(U.flags|=1024),t}function ns(){var e=Ko!==0;return Ko=0,e}function rs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function is(e){if(Uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Uo=!1}Bo=0,Ho=Vo=U=null,Wo=!1,qo=Ko=0,Jo=null}function as(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ho===null?U.memoizedState=Ho=e:Ho=Ho.next=e,Ho}function os(){if(Vo===null){var e=U.alternate;e=e===null?null:e.memoizedState}else e=Vo.next;var t=Ho===null?U.memoizedState:Ho.next;if(t!==null)Ho=t,Vo=e;else{if(e===null)throw U.alternate===null?Error(i(467)):Error(i(310));Vo=e,e={memoizedState:Vo.memoizedState,baseState:Vo.baseState,baseQueue:Vo.baseQueue,queue:Vo.queue,next:null},Ho===null?U.memoizedState=Ho=e:Ho=Ho.next=e}return Ho}function ss(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cs(e){var t=qo;return qo+=1,Jo===null&&(Jo=[]),e=Qa(Jo,e,t),t=U,(Ho===null?t.memoizedState:Ho.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?hc:gc),e}function ls(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return cs(e);if(e.$$typeof===ge)return;if(e.$$typeof===D)return Ca(e)}throw Error(i(438,String(e)))}function us(e){var t=null,n=U.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=U.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ss(),U.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=me;return t.index++,n}function ds(e,t){return typeof t==`function`?t(e):t}function fs(e){return ps(os(),Vo,e)}function ps(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Bo&f)===f:(Z&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===La&&(d=!0);else if((Bo&p)===p){u=u.next,p===La&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,U.lanes|=p,id|=p;f=u.action,Go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,U.lanes|=f,id|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Br(o,e.memoizedState)&&(Nc=!0,d&&(n=Ra,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ms(e){var t=os(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Br(o,t.memoizedState)||(Nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hs(e,t,n){var r=U,a=os(),o=H;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Br((Vo||a).memoizedState,n);if(s&&(a.memoizedState=n,Nc=!0),a=a.queue,Bs(vs.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Ho!==null&&!!(Ho.memoizedState.tag&1),Fs(e?9:8,{destroy:void 0},_s.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Zu===null)throw Error(i(349));o||Bo&127||gs(r,t,n)}return n}function gs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t=ss(),U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _s(e,t,n,r){t.value=n,t.getSnapshot=r,ys(t)&&bs(e)}function vs(e,t,n){return n(function(){ys(t)&&bs(e)})}function ys(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Br(e,n)}catch{return!0}}function bs(e){var t=Ei(e,2);t!==null&&Md(t,e,2)}function xs(e){var t=as();if(typeof e==`function`){var n=e;if(e=n(),Go){nt(!0);try{n()}finally{nt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:e},t}function Ss(e,t,n,r){return e.baseState=n,ps(e,Vo,typeof r==`function`?r:ds)}function Cs(e,t,n,r,a){if(dc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ws(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ws(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};o.types=a===null?null:a.types,k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),Ts(e,t,s)}catch(n){Ds(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),Ts(e,t,a)}catch(n){Ds(e,t,n)}}function Ts(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Es(e,t,n)},function(n){return Ds(e,t,n)}):Es(e,t,n)}function Es(e,t,n){t.status=`fulfilled`,t.value=n,Os(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ws(e,n)))}function Ds(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Os(t),t=t.next;while(t!==r)}e.action=null}function Os(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ks(e,t){return t}function As(e,t){if(H){var n=Zu.formState;if(n!==null){a:{var r=U;if(H){if(V){b:{for(var i=V,a=ia;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){V=lm(i.nextSibling),r=i.data===`F!`;break a}}oa(r)}r=!1}r&&(t=n[0])}}return n=as(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},n.queue=r,n=cc.bind(null,U,r),r.dispatch=n,r=xs(!1),a=uc.bind(null,U,!1,r.queue),r=as(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Cs.bind(null,U,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function js(e){return Ms(os(),Vo,e)}function Ms(e,t,n){if(t=ps(e,t,ks)[0],e=fs(ds)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=cs(t)}catch(e){throw e===qa?Ya:e}else r=t;t=os();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(U.flags|=2048,Fs(9,{destroy:void 0},Ns.bind(null,i,n),null)),[r,a,e]}function Ns(e,t){e.action=t}function Ps(e){var t=os(),n=Vo;if(n!==null)return Ms(t,n,e);os(),t=t.memoizedState,n=os();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Fs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=U.updateQueue,t===null&&(t=ss(),U.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Is(){return os().memoizedState}function Ls(e,t,n,r){var i=as();U.flags|=e,i.memoizedState=Fs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Rs(e,t,n,r){var i=os();r=r===void 0?null:r;var a=i.memoizedState.inst;Vo!==null&&r!==null&&Zo(r,Vo.memoizedState.deps)?i.memoizedState=Fs(t,a,n,r):(U.flags|=e,i.memoizedState=Fs(1|t,a,n,r))}function zs(e,t){Ls(8390656,8,e,t)}function Bs(e,t){Rs(2048,8,e,t)}function Vs(e){U.flags|=4;var t=U.updateQueue;if(t===null)t=ss(),U.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Hs(e){var t=os().memoizedState;return Vs({ref:t,nextImpl:e}),function(){if(Y&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Us(e,t){return Rs(4,2,e,t)}function Ws(e,t){return Rs(4,4,e,t)}function Gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ks(e,t,n){n=n==null?null:n.concat([e]),Rs(4,4,Gs.bind(null,t,e),n)}function qs(){}function Js(e,t){var n=os();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ys(e,t){var n=os();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Zo(t,r[1]))return r[0];if(r=e(),Go){nt(!0);try{e()}finally{nt(!1)}}return n.memoizedState=[r,t],r}function Xs(e,t,n){return n===void 0||Bo&1073741824&&!(Z&261930)?e.memoizedState=t:(e.memoizedState=n,e=Ad(),U.lanes|=e,id|=e,n)}function Zs(e,t,n,r){return Br(n,t)?n:wo.current===null?!(Bo&106)||Bo&1073741824&&!(Z&261930)?(Nc=!0,e.memoizedState=n):(e=Ad(),U.lanes|=e,id|=e,t):(e=Xs(e,n,r),Br(e,t)||(Nc=!0),e)}function Qs(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};s.types=o===null?null:o.types,k.T=s,uc(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?lc(e,t,Va(c,r),kd(e)):lc(e,t,r,kd(e))}catch(n){lc(e,t,{then:function(){},status:`rejected`,reason:n},kd())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function $s(){}function ec(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=tc(e).queue;Qs(e,a,t,Se,n===null?$s:function(){return nc(e),n(r)})}function tc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Se,baseState:Se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:Se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nc(e){var t=tc(e);t.next===null&&(t=e.alternate.memoizedState),lc(e,t.next.queue,{},kd())}function rc(){return Ca(sh)}function ic(){return os().memoizedState}function ac(){return os().memoizedState}function oc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kd();e=ho(n);var r=go(t,e,n);r!==null&&(Md(r,t,n),_o(r,t,n)),t={cache:Aa()},e.payload=t;return}t=t.return}}function sc(e,t,n){var r=kd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},dc(e)?fc(t,n):(n=Ti(e,t,n,r),n!==null&&(Md(n,e,r),pc(n,t,r)))}function cc(e,t,n){lc(e,t,n,kd())}function lc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(dc(e))fc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Br(s,o))return wi(e,t,i,0),Zu===null&&Ci(),!1}catch{}if(n=Ti(e,t,i,r),n!==null)return Md(n,e,r),pc(n,t,r),!0}return!1}function uc(e,t,n,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},dc(e)){if(t)throw Error(i(479))}else t=Ti(e,n,r,2),t!==null&&Md(t,e,2)}function dc(e){var t=e.alternate;return e===U||t!==null&&t===U}function fc(e,t){Wo=Uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yt(e,n)}}var mc={readContext:Ca,use:ls,useCallback:Xo,useContext:Xo,useEffect:Xo,useImperativeHandle:Xo,useLayoutEffect:Xo,useInsertionEffect:Xo,useMemo:Xo,useReducer:Xo,useRef:Xo,useState:Xo,useDebugValue:Xo,useDeferredValue:Xo,useTransition:Xo,useSyncExternalStore:Xo,useId:Xo,useHostTransitionStatus:Xo,useFormState:Xo,useActionState:Xo,useOptimistic:Xo,useMemoCache:Xo,useCacheRefresh:Xo,useEffectEvent:Xo},hc={readContext:Ca,use:ls,useCallback:function(e,t){return as().memoizedState=[e,t===void 0?null:t],e},useContext:Ca,useEffect:zs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ls(4194308,4,Gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){Ls(4,2,e,t)},useMemo:function(e,t){var n=as();t=t===void 0?null:t;var r=e();if(Go){nt(!0);try{e()}finally{nt(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=as();if(n!==void 0){var i=n(t);if(Go){nt(!0);try{n(t)}finally{nt(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=sc.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=as();return e={current:e},t.memoizedState=e},useState:function(e){e=xs(e);var t=e.queue,n=cc.bind(null,U,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qs,useDeferredValue:function(e,t){return Xs(as(),e,t)},useTransition:function(){var e=xs(!1);return e=Qs.bind(null,U,e.queue,!0,!1),as().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=U,a=as();if(H){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Zu===null)throw Error(i(349));Z&127||gs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,zs(vs.bind(null,r,o,e),[e]),r.flags|=2048,Fs(9,{destroy:void 0},_s.bind(null,r,o,n,t),null),n},useId:function(){var e=as(),t=Zu.identifierPrefix;if(H){var n=Xi,r=Yi;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Ko++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Yo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:rc,useFormState:As,useActionState:As,useOptimistic:function(e){var t=as();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=uc.bind(null,U,!0,n),n.dispatch=t,[e,t]},useMemoCache:us,useCacheRefresh:function(){return as().memoizedState=oc.bind(null,U)},useEffectEvent:function(e){var t=as(),n={impl:e};return t.memoizedState=n,function(){if(Y&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},gc={readContext:Ca,use:ls,useCallback:Js,useContext:Ca,useEffect:Bs,useImperativeHandle:Ks,useInsertionEffect:Us,useLayoutEffect:Ws,useMemo:Ys,useReducer:fs,useRef:Is,useState:function(){return fs(ds)},useDebugValue:qs,useDeferredValue:function(e,t){return Zs(os(),Vo.memoizedState,e,t)},useTransition:function(){var e=fs(ds)[0],t=os().memoizedState;return[typeof e==`boolean`?e:cs(e),t]},useSyncExternalStore:hs,useId:ic,useHostTransitionStatus:rc,useFormState:js,useActionState:js,useOptimistic:function(e,t){return Ss(os(),Vo,e,t)},useMemoCache:us,useCacheRefresh:ac,useEffectEvent:Hs},_c={readContext:Ca,use:ls,useCallback:Js,useContext:Ca,useEffect:Bs,useImperativeHandle:Ks,useInsertionEffect:Us,useLayoutEffect:Ws,useMemo:Ys,useReducer:ms,useRef:Is,useState:function(){return ms(ds)},useDebugValue:qs,useDeferredValue:function(e,t){var n=os();return Vo===null?Xs(n,e,t):Zs(n,Vo.memoizedState,e,t)},useTransition:function(){var e=ms(ds)[0],t=os().memoizedState;return[typeof e==`boolean`?e:cs(e),t]},useSyncExternalStore:hs,useId:ic,useHostTransitionStatus:rc,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){var n=os();return Vo===null?(n.baseState=e,[e,n.queue.dispatch]):Ss(n,Vo,e,t)},useMemoCache:us,useCacheRefresh:ac,useEffectEvent:Hs};function vc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kd(),i=ho(r);i.payload=t,n!=null&&(i.callback=n),t=go(e,i,r),t!==null&&(Md(t,e,r),_o(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kd(),i=ho(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=go(e,i,r),t!==null&&(Md(t,e,r),_o(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kd(),r=ho(n);r.tag=2,t!=null&&(r.callback=t),t=go(e,r,n),t!==null&&(Md(t,e,n),_o(t,e,n))}};function bc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Vr(n,r)||!Vr(i,a):!0}function xc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yc.enqueueReplaceState(t,t.state,null)}function Sc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=w({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Cc(e){yi(e)}function wc(e){console.error(e)}function Tc(e){yi(e)}function Ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Dc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Oc(e,t,n){return n=ho(n),n.tag=3,n.payload={element:null},n.callback=function(){Ec(e,t)},n}function kc(e){return e=ho(e),e.tag=3,e}function Ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Dc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Dc(t,n,r),typeof i!=`function`&&(gd===null?gd=new Set([this]):gd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function jc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ba(t,n,a,!0),n=ko.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Ao===null?Wd():n.alternate===null&&rd===0&&(rd=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),pf(e,r,a)),!1;case 22:return n.flags|=65536,r===Xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),pf(e,r,a)),!1}throw Error(i(435,n.tag))}return pf(e,r,a),Wd(),!1}if(H)return t=ko.current,t===null?(r!==aa&&(t=Error(i(423),{cause:r}),fa(Vi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Vi(r,n),a=Oc(e.stateNode,r,a),vo(e,a),rd!==4&&(rd=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==aa&&(e=Error(i(422),{cause:r}),fa(Vi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Vi(o,n),ld===null?ld=[o]:ld.push(o),rd!==4&&(rd=2),t===null)return!0;r=Vi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Oc(n.stateNode,r,e),vo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gd===null||!gd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=kc(a),Ac(a,e,n,r),vo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Mc=Error(i(461)),Nc=!1;function Pc(e,t,n,r){t.child=e===null?uo(t,null,n,r):lo(t,e.child,n,r)}function Fc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Sa(t),r=Qo(e,t,n,o,a,i),s=ns(),e!==null&&!Nc?(rs(e,t,i),ll(e,t,i)):(H&&s&&$i(t),t.flags|=1,Pc(e,t,r,i),t.child)}function Ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Lc(e,t,a,r,i)):(e=Fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!ul(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Vr:n,n(o,r)&&e.ref===t.ref)return ll(e,t,i)}return t.flags|=1,e=Ni(a,r),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Vr(a,r)&&e.ref===t.ref){if(Nc=!1,t.pendingProps=r=a,ul(e,i))e.flags&131072&&(Nc=!0);else return t.lanes=e.lanes,ll(e,t,i)}}return Gc(e,t,n,r,i)}function Rc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Bc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ga(t,a===null?null:a.cachePool),a===null?Do():Eo(t,a),No(t);else return r=t.lanes=536870912,Bc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ga(t,null),Do(),Po()):(Ga(t,a.cachePool),Eo(t,a),Po(),t.memoizedState=null);return Pc(e,t,i,n),t.child}function zc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bc(e,t,n,r,i){var a=Wa();return a=a===null?null:{parent:ka._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ga(t,null),Do(),No(t),e!==null&&ba(e,t,r,!0),t.childLanes=i,null}function Vc(e,t){return t=el({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hc(e,t,n){return lo(t,e.child,null,n),e=Vc(t,t.pendingProps),e.flags|=2,Fo(t),t.memoizedState=null,e}function Uc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(H){if(r.mode===`hidden`)return e=Vc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},zc(null,e);if(Mo(t),(e=V)?(e=am(e,ia),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ji===null?null:{id:Yi,overflow:Xi},retryLane:536870912,hydrationErrors:null},n=Ri(e),n.return=t,t.child=n,na=t,V=null)):e=null,e===null)throw oa(t);return t.lanes=536870912,null}return Vc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Mo(t),a){if(t.flags&256)t.flags&=-257,t=Hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Nc||ba(e,t,n,!1),a=(n&e.childLanes)!==0,Nc||a){if(wo.current===null){if(r=Zu,r!==null&&(s=bt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Ei(e,s),Md(r,e,s),Mc;Wd()}t=Hc(e,t,n)}else e=o.treeContext,V=lm(s.nextSibling),na=t,H=!0,ra=null,ia=!1,e!==null&&ta(t,e),t=Vc(t,r),t.flags|=134221824;return t}return e=Ni(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Wc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Gc(e,t,n,r,i){return Sa(t),n=Qo(e,t,n,r,void 0,i),r=ns(),e!==null&&!Nc?(rs(e,t,i),ll(e,t,i)):(H&&r&&$i(t),t.flags|=1,Pc(e,t,n,i),t.child)}function Kc(e,t,n,r,i,a){return Sa(t),t.updateQueue=null,n=es(t,r,n,i),$o(e),r=ns(),e!==null&&!Nc?(rs(e,t,a),ll(e,t,a)):(H&&r&&$i(t),t.flags|=1,Pc(e,t,n,a),t.child)}function qc(e,t,n,r,i){if(Sa(t),t.stateNode===null){var a=ki,o=n.contextType;typeof o==`object`&&o&&(a=Ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=yc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},po(t),o=n.contextType,a.context=typeof o==`object`&&o?Ca(o):ki,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(vc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&yc.enqueueReplaceState(a,a.state,null),xo(t,r,a,i),bo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Sc(n,s);a.props=c;var l=a.context,u=n.contextType;o=ki,typeof u==`object`&&u&&(o=Ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&xc(t,a,r,o),fo=!1;var f=t.memoizedState;a.state=f,xo(t,r,a,i),bo(),l=t.memoizedState,s||f!==l||fo?(typeof d==`function`&&(vc(t,n,d,r),l=t.memoizedState),(c=fo||bc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,mo(e,t),o=t.memoizedProps,u=Sc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ki,typeof l==`object`&&l&&(c=Ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&xc(t,a,r,c),fo=!1,f=t.memoizedState,a.state=f,xo(t,r,a,i),bo();var p=t.memoizedState;o!==d||f!==p||fo||e!==null&&e.dependencies!==null&&xa(e.dependencies)?(typeof s==`function`&&(vc(t,n,s,r),p=t.memoizedState),(u=fo||bc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&xa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Wc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=lo(t,e.child,null,i),t.child=lo(t,null,n,i)):Pc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ll(e,t,i),e}function Jc(e,t,n,r){return ua(),t.flags|=256,Pc(e,t,n,r),t.child}var Yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xc(e){return{baseLanes:e,cachePool:Ka()}}function Zc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=sd),e}function Qc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Io.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(H){if(i?jo(t):Po(),(e=V)?(e=am(e,ia),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ji===null?null:{id:Yi,overflow:Xi},retryLane:536870912,hydrationErrors:null},n=Ri(e),n.return=t,t.child=n,na=t,V=null)):e=null,e===null)throw oa(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Po(),i=t.mode,a=el({mode:`hidden`,children:a},i),r=Ii(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Xc(n),r.childLanes=Zc(e,o,n),t.memoizedState=Yc,zc(null,r)):(jo(t),$c(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return nl(e,t,a,o,r,c,s,n)}return i?(Po(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ni(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ii(i,a,n,null),i.flags|=2):i=Ni(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,zc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Xc(n):(a=i.cachePool,a===null?a=Ka():(s=ka._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Zc(e,o,n),t.memoizedState=Yc,zc(e.child,r)):(jo(t),n=e.child,e=n.sibling,n=Ni(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function $c(e,t){return t=el({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function el(e,t){return e=ji(22,e,null,t),e.lanes=0,e}function tl(e,t,n){return lo(t,e.child,null,n),e=$c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(jo(t),t.flags&=-257,tl(e,t,c)):t.memoizedState===null?(Po(),o=a.fallback,s=t.mode,a=el({mode:`visible`,children:a.children},s),o=Ii(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,lo(t,e.child,null,c),a=t.child,a.memoizedState=Xc(c),a.childLanes=Zc(e,r,c),t.memoizedState=Yc,zc(null,a)):(Po(),t.child=e.child,t.flags|=128,null);if(jo(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,fa({value:a,source:null,stack:null})),tl(e,t,c)}if(Nc||ba(e,t,c,!1),r=(c&e.childLanes)!==0,Nc||r){if(wo.current!==null)return tl(e,t,c);if(r=Zu,r!==null&&(a=bt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ei(e,a),Md(r,e,a),Mc;return om(o)||Wd(),tl(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,V=lm(o.nextSibling),na=t,H=!0,ra=null,ia=!1,e!==null&&ta(t,e),t=$c(t,a.children),t.flags|=134221824,t)}function rl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),va(e.return,t,n)}function il(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&zo(n)===null&&(t=e),e=e.sibling}return t}function al(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function ol(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function sl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Io.current;if(t.flags&128)return Lo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Lo(t,o),i===`backwards`&&e!==null?(ol(e),Pc(e,t,r,n),ol(e)):Pc(e,t,r,n),r=H?Gi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rl(e,n,t);else if(e.tag===19)rl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=il(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,ol(t)),al(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}al(t,!0,n,null,a,r);break;case`together`:al(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=il(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),al(t,!1,i,n,a,r)}return t.child}function cl(e,t,n){var r=t.pendingProps;return ga(t,t.type,r.value),Pc(e,t,r.children,n),t.child}function ll(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),id|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ba(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ni(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ni(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ul(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&xa(e)))}function dl(e,t,n){switch(t.tag){case 3:je(t,t.stateNode.containerInfo),ga(t,ka,e.memoizedState.cache),ua();break;case 27:case 5:Ne(t);break;case 4:je(t,t.stateNode.containerInfo);break;case 10:ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return jo(t),t.flags|=128,null;r=ba(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Qc(e,t,n):(jo(t),e=ll(e,t,n),e===null?null:e.sibling)}jo(t);break;case 19:if(t.flags&128)return sl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(ba(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return sl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Lo(t,Io.current),r)break;return null;case 22:return t.lanes=0,Rc(e,t,n,t.pendingProps);case 24:ga(t,ka,e.memoizedState.cache)}return ll(e,t,n)}function fl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Nc=!0;else{if(!ul(e,n)&&!(t.flags&128))return Nc=!1,dl(e,t,n);Nc=!!(e.flags&131072)}}else Nc=!1,H&&t.flags&1048576&&Qi(t,Gi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=$a(t.elementType),t.type=e,typeof e==`function`)Mi(e)?(r=Sc(e,r),t.tag=1,t=qc(null,t,e,r,n)):(t.tag=0,t=Gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===O){t.tag=11,t=Fc(null,t,e,r,n);break a}if(a===ue){t.tag=14,t=Ic(null,t,e,r,n);break a}if(a===D){t.tag=10,t.type=e,t=cl(null,t,n);break a}}throw t=be(e)||e,Error(i(306,t,``))}}return t;case 0:return Gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Sc(r,t.pendingProps),qc(e,t,r,a,n);case 3:a:{if(je(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,mo(e,t),xo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ga(t,ka,r),r!==o.cache&&ya(t,[ka],n,!0),bo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Jc(e,t,r,n);break a}if(r!==a){a=Vi(Error(i(424)),t),fa(a),t=Jc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(V=lm(e.firstChild),na=t,H=!0,ra=null,ia=!0,n=uo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ua(),r===a){t=ll(e,t,n);break a}Pc(e,t,r,n)}t=t.child}return t;case 26:return Wc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:H||(t.stateNode=fp(t.type,t.pendingProps,ke.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ne(t),e===null&&H&&(r=t.stateNode=hm(t.type,t.pendingProps,ke.current),na=t,ia=!0,a=V,Sp(t.type)?(um=a,V=lm(r.firstChild)):V=a),Pc(e,t,t.pendingProps.children,n),Wc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&H&&((a=r=V)&&(r=rm(r,t.type,t.pendingProps,ia),r===null?a=!1:(t.stateNode=r,na=t,V=lm(r.firstChild),ia=!1,a=!0)),a||oa(t)),Ne(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Qo(e,t,ts,null,null,n),sh._currentValue=a),Wc(e,t),Pc(e,t,r,n),t.child;case 6:return e===null&&H&&((e=n=V)&&(n=im(n,t.pendingProps,ia),n===null?e=!1:(t.stateNode=n,na=t,V=null,e=!0)),e||oa(t)),null;case 13:return Qc(e,t,n);case 4:return je(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lo(t,null,r,n):Pc(e,t,r,n),t.child;case 11:return Fc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Wc(e,t),Pc(e,t,r,n),t.child;case 8:return Pc(e,t,t.pendingProps.children,n),t.child;case 12:return Pc(e,t,t.pendingProps.children,n),t.child;case 10:return cl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Sa(t),a=Ca(a),r=r(a),t.flags|=1,Pc(e,t,r,n),t.child;case 14:return Ic(e,t,t.type,t.pendingProps,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 19:return sl(e,t,n);case 31:return Uc(e,t,n);case 22:return Rc(e,t,n,t.pendingProps);case 24:return Sa(t),r=Ca(ka),e===null?(a=Wa(),a===null&&(a=Zu,o=Aa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},po(t),ga(t,ka,a)):((e.lanes&n)!==0&&(mo(e,t),xo(t,null,null,n),bo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ga(t,ka,r),r!==a.cache&&ya(t,[ka],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ga(t,ka,r))),Pc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:H&&$i(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Wc(e,t),Pc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function pl(e){e.flags|=4}function ml(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Vd())e.flags|=8192;else throw eo=Xa,Ja}}else e.flags&=-16777217}function hl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Vd())e.flags|=8192;else throw eo=Xa,Ja}}function gl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:mt(),e.lanes|=t,cd|=t)}function _l(e,t){if(!H)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function vl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yl(e,t,n){var r=t.pendingProps;switch(ea(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vl(t),null;case 1:return vl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),_a(ka),Me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(la(t)?pl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,da())),vl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(pl(t),o===null?(vl(t),ml(t,a,null,r,n)):(vl(t),hl(t,o))):o?o===e.memoizedState?(vl(t),t.flags&=-16777217):(pl(t),vl(t),hl(t,o)):(e=e.memoizedProps,e!==r&&pl(t),vl(t),ml(t,a,e,r,n)),null;case 27:if(Pe(t),n=ke.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return vl(t),t.subtreeFlags&=-33554433,null}e=De.current,la(t)?sa(t,e):(e=hm(a,r,n),t.stateNode=e,pl(t))}return vl(t),t.subtreeFlags&=-33554433,null;case 5:if(Pe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return vl(t),t.subtreeFlags&=-33554433,null}if(o=De.current,la(t))sa(t,o);else{var s=lp(ke.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Et]=t,o[Dt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&pl(t)}}return vl(t),t.subtreeFlags&=-33554433,ml(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ke.current,la(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=na,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Et]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||$f(e.nodeValue,n)),e||oa(t,!0)}else e=lp(e).createTextNode(r),e[Et]=t,t.stateNode=e}return vl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=la(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Et]=t}else ua(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;vl(t),e=!1}else n=da(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Fo(t),t):(Fo(t),null);if(t.flags&128)throw Error(i(558))}return vl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=la(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Et]=t}else ua(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;vl(t),a=!1}else a=da(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Fo(t),t):(Fo(t),null)}return Fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),gl(t,t.updateQueue),vl(t),null);case 4:return Me(),e===null&&Uf(t.stateNode.containerInfo),t.flags|=67108864,vl(t),null;case 10:return _a(t.type),vl(t),null;case 19:if(Ro(t),r=t.memoizedState,r===null)return vl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)_l(r,!1);else{if(rd!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=zo(e),o!==null){for(t.flags|=128,_l(r,!1),e=o.updateQueue,t.updateQueue=e,gl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Pi(n,e),n=n.sibling;return Lo(t,Io.current&1|2),H&&Zi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&qe()>md&&(t.flags|=128,a=!0,_l(r,!1),t.lanes=4194304)}}else{if(!a){if(e=zo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,gl(t,e),_l(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!H)return vl(t),null}else 2*qe()-r.renderingStartTime>md&&n!==536870912&&(t.flags|=128,a=!0,_l(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=qe(),e.sibling=null,o=Io.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||H?Lo(t,o):(n=o,j(ko,t),j(Io,n),Ao===null&&(Ao=t)),H&&Zi(t,r.treeForkCount),e}return vl(t),null;case 22:case 23:return Fo(t),Oo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(vl(t),t.subtreeFlags&6&&(t.flags|=8192)):vl(t),n=t.updateQueue,n!==null&&gl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Ee(Ua),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),_a(ka),vl(t),null;case 25:return null;case 30:return t.flags|=33554432,vl(t),null}throw Error(i(156,t.tag))}function bl(e,t){switch(ea(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _a(ka),Me(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pe(t),null;case 31:if(t.memoizedState!==null){if(Fo(t),t.alternate===null)throw Error(i(340));ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ro(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Me(),null;case 10:return _a(t.type),null;case 22:case 23:return Fo(t),Oo(),e!==null&&Ee(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _a(ka),null;case 25:return null;default:return null}}function xl(e,t){switch(ea(t),t.tag){case 3:_a(ka),Me();break;case 26:case 27:case 5:Pe(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&Fo(t);break;case 13:Fo(t);break;case 19:Ro(t);break;case 10:_a(t.type);break;case 22:case 23:Fo(t),Oo(),e!==null&&Ee(Ua);break;case 24:_a(ka)}}function Sl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){ff(t,t.return,e)}}function Cl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){ff(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){ff(t,t.return,e)}}function wl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Co(t,n)}catch(t){ff(e,e.return,t)}}}function Tl(e,t,n){n.props=Sc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){ff(e,t,n)}}function El(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=gi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){ff(e,t,n)}}function Dl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){ff(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){ff(e,t,n)}else n.current=null}}function Ol(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function kl(e){for(var t=e.return;t!==null&&(Ml(t)&&em(e.stateNode,t.stateNode),!jl(t));)t=t.return}function Al(e){for(var t=e.return;t!==null&&(Ml(t)&&tm(e.stateNode,t.stateNode),!jl(t));)t=t.return}function jl(e){return e.tag===5||e.tag===3||e.tag===27}function Ml(e){return e&&e.tag===7&&e.stateNode!==null}function Nl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){ff(e,e.return,t)}}function Pl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Dt]=t}catch(t){ff(e,e.return,t)}}function Fl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Il(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Fl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xn)),Ol(e,r),I=!0;else if(i!==4&&(i===27&&(Ol(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Ll(e,t,n,r),e=e.sibling;e!==null;)Ll(e,t,n,r),e=e.sibling}function Rl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Ol(e,r),I=!0;else if(i!==4&&(i===27&&(Ol(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Rl(e,t,n,r),e=e.sibling;e!==null;)Rl(e,t,n,r),e=e.sibling}function zl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[Et]=e,t[Dt]=n}catch(t){ff(e,e.return,t)}}var Bl=!1,W=null;function Vl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Bl=!0)}var G=null;function K(){var e=G;return G=null,e}var Hl=0;function Ul(e,t,n,r,i){return Hl=0,Wl(e.child,t,n,r,i)}function Wl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Bl=!0,Tp(o,Hl===0?t:t+`_`+Hl,n),Hl++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Wl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Gl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Gl(e.child,t),e=e.sibling}function Kl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Kl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=vi(t.default,t.share),t!==`none`&&(Ul(e,n,t,null,!1)||Gl(e.child,!1))}e=e.sibling}}function ql(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=gi(r,n),a=vi(r.default,n.paired?r.share:r.enter);a===`none`?Kl(e):Ul(e,i,a,null,!1)?(Kl(e),n.paired||t||jd(e,r.onEnter)):Gl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ql(e,t),e=e.sibling;else Kl(e)}function Jl(e){if(W!==null&&W.size!==0){var t=W;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=vi(n.default,n.share);if(a!==`none`&&(Ul(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,jd(e,n.onShare)):Gl(e.child,!1)),t.delete(r),t.size===0)break}}}Jl(e)}e=e.sibling}}}function Yl(e){if(e.tag===30){var t=e.memoizedProps,n=gi(t,e.stateNode),r=W===null?void 0:W.get(n),i=vi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Ul(e,n,i,null,!1)?r===void 0?jd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,W.delete(n),jd(e,t.onShare)):Gl(e.child,!1)),W!==null&&Jl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Yl(e),e=e.sibling;else W!==null&&Jl(e)}function Xl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=gi(t,e.stateNode);t=vi(t.default,t.update),e.flags&=-5,t!==`none`&&Ul(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Xl(e);e=e.sibling}}function Zl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Gl(e.child,!1))}Zl(e)}e=e.sibling}}function Ql(e){if(e.tag===30)e.stateNode.paired=null,Gl(e.child,!1),Zl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ql(e),e=e.sibling;else Zl(e)}function $l(e){for(e=e.child;e!==null;)e.tag===30?Gl(e.child,!1):e.subtreeFlags&33554432&&$l(e),e=e.sibling}function eu(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Hl<a.length){var l=a[Hl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Hl===0?n:n+`_`+Hl,i),s&&e.flags&4||(G===null&&(G=[]),G.push(c,Hl===0?r:r+`_`+Hl,t.memoizedProps)),Hl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:eu(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function tu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=gi(n,r),a=vi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Hl=0,i=eu(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||jd(e,n.onUpdate))}else e.subtreeFlags&33554432&&tu(e,t);e=e.sibling}}var nu=!1,q=!1,ru=!1,iu=!1,au=typeof WeakSet==`function`?WeakSet:Set,ou=null,su=!1,cu=!1,lu=!1,uu=!1;function du(e,t,n){if(e=e.containerInfo,sp=gh,e=Kr(e),qr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,ou=t,t=n?9270:1024;ou!==null;){if(e=ou,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Yl(r[a]);if(e.alternate===null&&e.flags&2)n&&Vl(e),fu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Yl(r),fu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Vl(e),fu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,ou=r):(n&&Xl(e),fu(n))}}W=null}function fu(e){for(;ou!==null;){var t=ou,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Sc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){ff(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=gi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=vi(a.default,a.update),a!==`none`&&Ul(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,ou=r;break}ou=t.return}}function pu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Nu(e,n),r&4&&Sl(5,n);break;case 1:if(Nu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){ff(n,n.return,e)}else{var i=Sc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){ff(n,n.return,e)}}}r&64&&wl(n),r&512&&El(n,n.return);break;case 3:if(Nu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Co(e,t)}catch(e){ff(n,n.return,e)}}break;case 27:t===null&&r&4&&zl(n);case 26:case 5:Nu(e,n),t===null&&r&4&&Nl(n),r&512&&El(n,n.return);break;case 12:Nu(e,n);break;case 31:Nu(e,n),r&4&&Su(e,n);break;case 13:Nu(e,n),r&4&&Cu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gf.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||nu,!r){var a=t!==null&&t.memoizedState!==null||q;t=nu,i=q,nu=r,(q=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Fu(e,n,r)):Nu(e,n),nu=t,q=i}break;case 30:Nu(e,n),r&512&&El(n,n.return);break;case 7:r&512&&El(n,n.return);default:Nu(e,n)}}function mu(e,t){for(e=e.child;e!==null;)hu(e,t),e=e.sibling}function hu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){ff(e,e.return,t)}gu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,I=!0}catch(t){ff(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){ff(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&mu(e,t);break;default:mu(e,t)}}function gu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:hu(n,r);break a;case 22:n.memoizedState===null&&gu(n,r);break a;default:gu(n,r)}}e=e.sibling}}function _u(e){var t=e.alternate;t!==null&&(e.alternate=null,_u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ft(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var vu=null,yu=!1;function bu(e,t,n){for(n=n.child;n!==null;)xu(e,t,n),n=n.sibling}function xu(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount==`function`)try{tt.onCommitFiberUnmount(et,n)}catch{}switch(n.tag){case 26:q||Dl(n,t),bu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!q&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:q||Dl(n,t),Al(n);var r=vu,i=yu;Sp(n.type)&&(vu=n.stateNode,yu=!1),bu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),vu=r,yu=i;break;case 5:q||Dl(n,t),Al(n);case 6:if(n.tag===6&&Al(n),r=vu,i=yu,vu=null,bu(e,t,n),vu=r,yu=i,vu!==null){if(yu)try{(vu.nodeType===9?vu.body:vu.nodeName===`HTML`?vu.ownerDocument.body:vu).removeChild(n.stateNode),I=!0}catch(e){ff(n,t,e)}else try{vu.removeChild(n.stateNode),I=!0}catch(e){ff(n,t,e)}}break;case 18:vu!==null&&(yu?(e=vu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(vu,n.stateNode));break;case 4:r=vu,i=yu,vu=n.stateNode.containerInfo,yu=!0,bu(e,t,n),vu=r,yu=i;break;case 0:case 11:case 14:case 15:Cl(2,n,t),q||Cl(4,n,t),bu(e,t,n);break;case 1:q||(Dl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Tl(n,t,r)),bu(e,t,n);break;case 21:bu(e,t,n);break;case 22:q=(r=q)||n.memoizedState!==null,bu(e,t,n),q=r;break;case 30:Dl(n,t),bu(e,t,n);break;case 7:q||Dl(n,t),bu(e,t,n);break;default:bu(e,t,n)}}function Su(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){ff(t,t.return,e)}}}function Cu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){ff(t,t.return,e)}}function wu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new au),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new au),t;default:throw Error(i(435,e.tag))}}function Tu(e,t){var n=wu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=_f.bind(null,e,t);t.then(r,r)}})}function Eu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){vu=l.stateNode,yu=!1;break a}break;case 5:vu=l.stateNode,yu=!1;break a;case 3:case 4:vu=l.stateNode.containerInfo,yu=!0;break a}l=l.return}if(vu===null)throw Error(i(160));xu(s,c,o),vu=null,yu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ou(t,e,n),t=t.sibling}var Du=null;function Ou(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Eu(t,e,n),ku(e),a&4&&(Cl(3,e,e.return),Sl(3,e),Cl(5,e,e.return));break;case 1:Eu(t,e,n),ku(e),a&512&&(q||r===null||Dl(r,r.return)),a&64&&nu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Du,Eu(t,e,n),ku(e),a&512&&(q||r===null||Dl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(nu)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Nt]||r[Et]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[Et]=e,Bt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Et]=e,Bt(r),t=r}e.stateNode=t}}else nu||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Pl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||q||t.parentNode.removeChild(t)):a.count--,n===null?nu||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Eu(t,e,n),ku(e),a&512&&(q||r===null||Dl(r,r.return)),r!==null&&a&4&&Pl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=ru,ru=!1,Eu(t,e,n),ru=o,ku(e),a&512&&(q||r===null||Dl(r,r.return)),e.flags&32){t=e.stateNode;try{pn(t,``),I=!0}catch(t){ff(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Pl(e,t,r===null?t:r.memoizedProps)),a&1024&&(iu=!0);break;case 6:if(Eu(t,e,n),ku(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,I=!0}catch(t){ff(e,e.return,t)}}break;case 3:if(I=!1,Wm=null,o=Du,Du=bm(t.containerInfo),Eu(t,e,n),Du=o,ku(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){ff(e,e.return,t)}iu&&(iu=!1,Au(e)),I=!1;break;case 4:a=ru,ru=nu,r=Yt(),o=Du,Du=bm(e.stateNode.containerInfo),Eu(t,e,n),ku(e),Du=o,I&&cu&&(lu=!0),I=r,ru=a;break;case 12:Eu(t,e,n),ku(e);break;case 31:Eu(t,e,n),ku(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 13:Eu(t,e,n),ku(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(fd=qe()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=nu,l=q,u=ru;nu=c||o,ru=u||o,q=l||s,Eu(t,e,n),q=l,ru=u,nu=c,ku(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||nu||q||(t=s||q,n=nu,r=q,nu=o||nu,q=t,Pu(e,2),nu=n,q=r),!o&&ru||mu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Tu(e,n))));break;case 19:Eu(t,e,n),ku(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 30:a&512&&(q||r===null||Dl(r,r.return)),a=Yt(),o=cu,s=(n&335544064)===n,c=e.memoizedProps,cu=s&&vi(c.default,c.update)!==`none`,Eu(t,e,n),ku(e),s&&r!==null&&I&&(e.flags|=4),cu=o,I=a;break;case 21:break;case 7:a&512&&(q||r===null||Dl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Eu(t,e,n),ku(e)}}function ku(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Fl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Ml(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(jl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Rl(e,Il(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(pn(l,``),n.flags&=-33),Rl(e,Il(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Ll(e,Il(e),u,s);break;default:throw Error(i(161))}}catch(t){ff(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Au(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Au(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function ju(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Mu(t,e),t=t.sibling;else tu(t,!1)}function Mu(e,t){var n=e.alternate;if(n===null)ql(e,!1);else switch(e.tag){case 3:if(uu=su=!1,K(),ju(t,e),!su&&!lu){if(e=G,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),uu=!0}G=null;break;case 5:ju(t,e);break;case 4:r=su,su=!1,ju(t,e),su&&(lu=!0),su=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?ju(t,e):ql(e,!1));break;case 30:r=su,i=K(),su=!1,ju(t,e),su&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=gi(a,o),o=gi(n.memoizedProps,o);var s=vi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Hl=0,t=eu(e,n,t,o,s,a,!0),Hl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(jd(e,e.memoizedProps.onUpdate),G=i):i!==null&&(i.push.apply(i,G),G=i),su=e.flags&32?!0:r;break;default:ju(t,e)}}function Nu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pu(e,t.alternate,t),t=t.sibling}function Pu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Cl(4,n,n.return),Pu(n,r);break;case 1:Dl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Tl(n,n.return,i),Pu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:Dl(n,n.return),n.tag!==5&&n.tag!==27||Al(n),Pu(n,r);break;case 6:Al(n);break;case 26:Dl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||q||i.parentNode.removeChild(i),Pu(n,r);break;case 22:n.memoizedState===null&&Pu(n,r);break;case 30:Dl(n,n.return),Pu(n,r);break;case 7:Dl(n,n.return);default:Pu(n,r)}e=e.sibling}}function Fu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Fu(i,a,n),Sl(4,a);break;case 1:if(Fu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){ff(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)So(l[i],c)}catch(e){ff(r,r.return,e)}}s&&o&64&&wl(a),El(a,a.return);break;case 27:n&2&&zl(a);case 5:a.tag!==5&&a.tag!==27||kl(a),Fu(i,a,n),s&&r===null&&o&4&&Nl(a),El(a,a.return);break;case 6:kl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||nu||Km(bm(c.ownerDocument),a.type,c),Fu(i,a,n),s&&r===null&&o&4&&Nl(a),El(a,a.return);break;case 12:Fu(i,a,n);break;case 31:Fu(i,a,n),s&&o&4&&Su(i,a);break;case 13:Fu(i,a,n),s&&o&4&&Cu(i,a);break;case 22:a.memoizedState===null&&Fu(i,a,n),El(a,a.return);break;case 30:Fu(i,a,n),El(a,a.return);break;case 7:El(a,a.return);default:Fu(i,a,n)}t=t.sibling}}function Iu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ja(n))}function Lu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ja(e))}function Ru(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)zu(e,t,n,r),t=t.sibling;else i&&$l(t)}function zu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Ql(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ru(e,t,n,r),a&2048&&Sl(9,t);break;case 1:Ru(e,t,n,r);break;case 3:Ru(e,t,n,r),i&&uu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&ja(a)));break;case 12:if(a&2048){Ru(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){ff(t,t.return,e)}}else Ru(e,t,n,r);break;case 31:Ru(e,t,n,r);break;case 13:Ru(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Ql(t),o._visibility&2?Ru(e,t,n,r):(o._visibility|=2,Bu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Ql(s),o._visibility&2?Ru(e,t,n,r):Vu(e,t)),a&2048&&Iu(s,t);break;case 24:Ru(e,t,n,r),a&2048&&Lu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Gl(a.child,!0),Gl(t.child,!0))),Ru(e,t,n,r);break;default:Ru(e,t,n,r)}}function Bu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Bu(a,o,s,c,i),Sl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Bu(a,o,s,c,i)):u._visibility&2?Bu(a,o,s,c,i):Vu(a,o),i&&l&2048&&Iu(o.alternate,o);break;case 24:Bu(a,o,s,c,i),i&&l&2048&&Lu(o.alternate,o);break;default:Bu(a,o,s,c,i)}t=t.sibling}}function Vu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Vu(n,r),i&2048&&Iu(r.alternate,r);break;case 24:Vu(n,r),i&2048&&Lu(r.alternate,r);break;default:Vu(n,r)}t=t.sibling}}var J=8192;function Hu(e,t,n){if(e.subtreeFlags&J)for(e=e.child;e!==null;)Uu(e,t,n),e=e.sibling}function Uu(e,t,n){switch(e.tag){case 26:Hu(e,t,n),e.flags&J&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,Du,e.memoizedState,e.memoizedProps));break;case 5:Hu(e,t,n),e.flags&J&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=Du;Du=bm(e.stateNode.containerInfo),Hu(e,t,n),Du=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=J,J=16777216,Hu(e,t,n),J=r):Hu(e,t,n));break;case 30:if((e.flags&J)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,W===null&&(W=new Map),W.set(r,i)}Hu(e,t,n);break;default:Hu(e,t,n)}}function Wu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ou=r,Ju(r,e)}Wu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ku(e),e=e.sibling}function Ku(e){switch(e.tag){case 0:case 11:case 15:Gu(e),e.flags&2048&&Cl(9,e,e.return);break;case 3:Gu(e);break;case 12:Gu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,qu(e)):Gu(e);break;default:Gu(e)}}function qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ou=r,Ju(r,e)}Wu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Cl(8,t,t.return),qu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,qu(t));break;default:qu(t)}e=e.sibling}}function Ju(e,t){for(;ou!==null;){var n=ou;switch(n.tag){case 0:case 11:case 15:Cl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ja(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ou=r;else a:for(n=e;ou!==null;){r=ou;var i=r.sibling,a=r.return;if(_u(r),r===n){ou=null;break a}if(i!==null){i.return=a,ou=i;break a}ou=a}}}var Yu={getCacheForType:function(e){var t=Ca(ka),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ca(ka).controller.signal}},Xu=typeof WeakMap==`function`?WeakMap:Map,Y=0,Zu=null,X=null,Z=0,Q=0,Qu=null,$u=!1,ed=!1,td=!1,nd=0,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=null,ud=null,dd=!1,fd=0,pd=0,md=1/0,hd=null,gd=null,_d=0,vd=null,yd=null,bd=0,xd=0,Sd=null,Cd=null,wd=null,Td=null,Ed=null,Dd=0,Od=null;function kd(){return Y&2&&Z!==0?Z&-Z:k.T===null?Ct():Nf()}function Ad(){if(sd===0){if(!(Z&536870912)||H){var e=st;st<<=1,!(st&3932160)&&(st=262144),sd=e}else sd=536870912}return e=ko.current,e!==null&&(e.flags|=32),sd}function jd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(gi(e.memoizedProps,n))),Td===null&&(Td=[]),Td.push(t.bind(null,r))}}function Md(e,t,n){(e===Zu&&(Q===2||Q===9)||e.cancelPendingCommit!==null)&&(zd(e,0),Id(e,Z,sd,!1)),gt(e,n),Y&2&&e===Zu||(e===Zu&&(!(Y&2)&&(ad|=n),rd===4&&Id(e,Z,sd,!1)),Tf(e))}function Nd(e,t,n){if(Y&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||dt(e,t),a=r?qd(e,t):Gd(e,t,!0),o=r;do{if(a===0){ed&&!r&&Id(e,t,0,!1);break}if(n=e.current.alternate,o&&!Fd(n))a=Gd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ld;var l=c.current.memoizedState.isDehydrated;if(l&&(zd(c,s).flags|=256),s=Gd(c,s,!1),s!==2&&s!==6){if(td&&!l){c.errorRecoveryDisabledLanes|=o,ad|=o,a=4;break a}o=ud,ud=a,o!==null&&(ud===null?ud=o:ud.push.apply(ud,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){zd(e,0),Id(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Id(r,t,sd,!$u);break a;case 2:ud=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=fd+300-qe(),10<a)){if(Id(r,t,sd,!$u),ut(r,0,!0)!==0)break a;bd=t,r.timeoutHandle=gp(Pd.bind(null,r,n,ud,hd,dd,t,sd,ad,cd,$u,o,`Throttled`,-0,0),a);break a}Pd(r,n,ud,hd,dd,t,sd,ad,cd,$u,o,null,-0,0)}break}}while(1);Tf(e)}function Pd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xn},W=null,Uu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?fd-qe():(a&4194048)===a?pd-qe():0,m=eh(d,m),m!==null)?(bd=a,e.cancelPendingCommit=m(ef.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Id(e,a,o,!l)):ef(e,t,a,n,r,i,o,s,c,l,u,d)}function Fd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Br(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Id(e,t,n,r){t=ft(e,t),t&=~od,t&=~ad,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-rt(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&vt(e,n,t)}function Ld(){return Y&6?!0:(Ef(0,!1),!1)}function Rd(){if(X!==null){if(Q===0)var e=X.return;else e=X,ha=ma=null,is(e),ro=null,io=0,e=X;for(;e!==null;)xl(e.alternate,e),e=e.return;X=null}}function zd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bd=0,Rd(),Zu=e,X=n=Ni(e.current,null),Z=t,Q=0,Qu=null,$u=!1,ed=dt(e,t),td=!1,cd=sd=od=ad=id=rd=0,ud=ld=null,dd=!1,nd=ft(e,t),Ci(),n}function Bd(e,t){U=null,k.H=mc,t===qa||t===Ya?(t=to(),Q=3):t===Ja?(t=to(),Q=4):Q=t===Mc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Qu=t,X===null&&(rd=1,Ec(e,Vi(t,e.current)))}function Vd(){var e=ko.current;return e===null?!0:(Z&4194048)===Z?Ao===null:(Z&62914560)===Z||Z&536870912?e===Ao:!1}function Hd(){var e=k.H;return k.H=mc,e===null?mc:e}function Ud(){var e=k.A;return k.A=Yu,e}function Wd(){rd=4,$u||(Z&4194048)!==Z&&ko.current!==null||(ed=!0),!(id&134217727)&&!(ad&134217727)||Zu===null||Id(Zu,Z,sd,!1)}function Gd(e,t,n){var r=Y;Y|=2;var i=Hd(),a=Ud();(Zu!==e||Z!==t)&&(hd=null,zd(e,t)),t=!1;var o=rd;a:do try{if(Q!==0&&X!==null){var s=X,c=Qu;switch(Q){case 8:Rd(),o=6;break a;case 3:case 2:case 9:case 6:ko.current===null&&(t=!0);var l=Q;if(Q=0,Qu=null,Zd(e,s,c,l),n&&ed){o=0;break a}break;default:l=Q,Q=0,Qu=null,Zd(e,s,c,l)}}Kd(),o=rd;break}catch(t){Bd(e,t)}while(1);return t&&e.shellSuspendCounter++,ha=ma=null,Y=r,k.H=i,k.A=a,X===null&&(Zu=null,Z=0,Ci()),o}function Kd(){for(;X!==null;)Yd(X)}function qd(e,t){var n=Y;Y|=2;var r=Hd(),a=Ud();Zu!==e||Z!==t?(hd=null,md=qe()+500,zd(e,t)):ed=dt(e,t);a:do try{if(Q!==0&&X!==null){t=X;var o=Qu;b:switch(Q){case 1:Q=0,Qu=null,Zd(e,t,o,1);break;case 2:case 9:if(Za(o)){Q=0,Qu=null,Xd(t);break}t=function(){Q!==2&&Q!==9||Zu!==e||(Q=7),Tf(e)},o.then(t,t);break a;case 3:Q=7;break a;case 4:Q=5;break a;case 7:Za(o)?(Q=0,Qu=null,Xd(t)):(Q=0,Qu=null,Zd(e,t,o,7));break;case 5:var s=null;switch(X.tag){case 26:s=X.memoizedState;case 5:case 27:var c=X;if(s?Ym(s):c.stateNode.complete){Q=0,Qu=null;var l=c.sibling;if(l!==null)X=l;else{var u=c.return;u===null?X=null:(X=u,Qd(u))}break b}}Q=0,Qu=null,Zd(e,t,o,5);break;case 6:Q=0,Qu=null,Zd(e,t,o,6);break;case 8:Rd(),rd=6;break a;default:throw Error(i(462))}}Jd();break}catch(t){Bd(e,t)}while(1);return ha=ma=null,k.H=r,k.A=a,Y=n,X===null?(Zu=null,Z=0,Ci(),rd):0}function Jd(){for(;X!==null&&!Ge();)Yd(X)}function Yd(e){var t=fl(e.alternate,e,nd);e.memoizedProps=e.pendingProps,t===null?Qd(e):X=t}function Xd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Kc(n,t,t.pendingProps,t.type,void 0,Z);break;case 11:t=Kc(n,t,t.pendingProps,t.type.render,t.ref,Z);break;case 5:is(t);var r=t;r===na&&(H?(ca(r),r.tag===5&&r.stateNode!=null&&(V=r.stateNode)):(ca(r),H=!0));default:xl(n,t),t=X=Pi(t,nd),t=fl(n,t,nd)}e.memoizedProps=e.pendingProps,t===null?Qd(e):X=t}function Zd(e,t,n,r){ha=ma=null,is(t),ro=null,io=0;var i=t.return;try{if(jc(e,i,t,n,Z)){rd=1,Ec(e,Vi(n,e.current)),X=null;return}}catch(t){if(i!==null)throw X=i,t;rd=1,Ec(e,Vi(n,e.current)),X=null;return}t.flags&32768?(H||r===1?e=!0:ed||Z&536870912?e=!1:($u=e=!0,(r===2||r===9||r===3||r===6)&&(r=ko.current,r!==null&&r.tag===13&&(r.flags|=16384))),$d(t,e)):Qd(t)}function Qd(e){var t=e;do{if(t.flags&32768){$d(t,$u);return}e=t.return;var n=yl(t.alternate,t,nd);if(n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);rd===0&&(rd=5)}function $d(e,t){do{var n=bl(e.alternate,e);if(n!==null){n.flags&=32767,X=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){X=e;return}X=e=n}while(e!==null);rd=6,X=null}function ef(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do lf();while(_d!==0);if(Y&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Zu&&(X=Zu=null,Z=0),yd=t,vd=e,bd=n,Sd=a,Cd=r,tf(e,t,n,s,c,l,f)}}function tf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(xd=s,s|=Si,_t(e,n,s,r,i,a),Td=null,(n&335544064)===n?(Ed=Pa(e),r=10262):(Ed=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,vf(M,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),Bl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=k.T,k.T=null,i=A.p,A.p=2,a=Y,Y|=4;try{du(e,t,n)}finally{Y=a,A.p=i,k.T=r}}_d=1,Bl?wd=Mp(o,e.containerInfo,Ed,af,of,rf,sf,uf,nf,null,null):(af(),of(),sf())}function nf(e){if(_d!==0){var t=vd.onRecoverableError;t(e,{componentStack:null})}}function rf(){_d===3&&(_d=0,Mu(yd,vd),_d=4)}function af(){if(_d===1){_d=0;var e=vd,t=yd,n=bd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=k.T,k.T=null;var i=A.p;A.p=2;var a=Y;Y|=4;try{cu=lu=!1,Ou(t,e,n),n=cp;var o=Kr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Gr(s.ownerDocument.documentElement,s)){if(c!==null&&qr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Wr(s,h),v=Wr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{Y=a,A.p=i,k.T=r}}e.current=t,_d=2}}function of(){if(_d===2){_d=0;var e=vd,t=yd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=Y;Y|=4;try{pu(e,t.alternate,t)}finally{Y=i,A.p=r,k.T=n}}_d=3}}function sf(){if(_d===4||_d===3){_d=0;var e=wd;wd=null,Ke();var t=vd,n=yd,r=bd,i=Cd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?_d=5:(_d=0,yd=vd=null,cf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(gd=null),St(r),n=n.stateNode,tt&&typeof tt.onCommitFiberRoot==`function`)try{tt.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=k.T,a=A.p,A.p=2,k.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{k.T=n,A.p=a}}if(i=Td,o=Ed,Ed=null,i!==null&&(Td=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);bd&3&&lf(),Tf(t),a=t.pendingLanes,r&261930&&a&42?t===Od?Dd++:(Dd=0,Od=t):(Dd=0,Od=null),Ef(0,!1)}}function cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ja(t)))}function lf(){return wd!==null&&(wd.skipTransition(),wd=null),af(),of(),sf(),uf()}function uf(){if(_d!==5)return!1;var e=vd,t=xd;xd=0;var n=St(bd),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=Sd,Sd=null;var o=vd,s=bd;if(_d=0,yd=vd=null,bd=0,Y&6)throw Error(i(331));var c=Y;if(Y|=4,Ku(o.current),zu(o,o.current,s,n),Y=c,Ef(0,!1),tt&&typeof tt.onPostCommitFiberRoot==`function`)try{tt.onPostCommitFiberRoot(et,o)}catch{}return!0}finally{A.p=a,k.T=r,cf(e,t)}}function df(e,t,n){t=Vi(n,t),t=Oc(e.stateNode,t,2),e=go(e,t,2),e!==null&&(gt(e,2),Tf(e))}function ff(e,t,n){if(e.tag===3)df(e,e,n);else for(;t!==null;){if(t.tag===3){df(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gd===null||!gd.has(r))){e=Vi(n,e),n=kc(2),r=go(t,n,2),r!==null&&(Ac(n,r,t,e),gt(r,2),Tf(r));break}}t=t.return}}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(td=!0,i.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Zu===e&&(Z&n)===n&&(rd===4||rd===3&&(Z&62914560)===Z&&300>qe()-fd?Y&2?od|=n:zd(e,0):od|=n,cd===Z&&(cd=0)),Tf(e)}function hf(e,t){t===0&&(t=mt()),e=Ei(e,t),e!==null&&(gt(e,t),Tf(e))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hf(e,n)}function _f(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),hf(e,n)}function vf(e,t){return Ue(e,t)}var yf=null,bf=null,xf=!1,Sf=!1,Cf=!1,wf=0;function Tf(e){e!==bf&&e.next===null&&(bf===null?yf=bf=e:bf=bf.next=e),Sf=!0,xf||(xf=!0,Mf())}function Ef(e,t){if(!Cf&&Sf){Cf=!0;do for(var n=!1,r=yf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-rt(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,jf(r,a))}else a=Z,a=ut(r,r===Zu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||dt(r,a)||(n=!0,jf(r,a))}r=r.next}while(n);Cf=!1}}function Df(){Of()}function Of(){Sf=xf=!1;var e=0;wf!==0&&hp()&&(e=wf);for(var t=qe(),n=null,r=yf;r!==null;){var i=r.next,a=kf(r,t);a===0?(r.next=null,n===null?yf=i:n.next=i,i===null&&(bf=n)):(n=r,(e!==0||a&3)&&(Sf=!0)),r=i}_d!==0&&_d!==5||Ef(e,!1),wf!==0&&(wf=0)}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-rt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=pt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Zu,n=Z,n=ut(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Q===2||Q===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&We(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||dt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&We(r),St(n)){case 2:case 8:n=Xe;break;case 32:n=M;break;case 268435456:n=Ze;break;default:n=M}return r=Af.bind(null,e),n=Ue(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&We(r),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,t){if(_d!==0&&_d!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lf()&&e.callbackNode!==n)return null;var r=Z;return r=ut(e,e===Zu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Nd(e,r,t),kf(e,qe()),e.callbackNode!=null&&e.callbackNode===n?Af.bind(null,e):null)}function jf(e,t){if(lf())return null;Nd(e,t,!0)}function Mf(){bp(function(){Y&6?Ue(Ye,Df):Of()})}function Nf(){if(wf===0){var e=La;e===0&&(e=ot,ot<<=1,!(ot&261888)&&(ot=256)),wf=e}return wf}function Pf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:bn(e)}function Ff(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Pf((i[Dt]||null).action),o=r.submitter;o&&(t=(t=o[Dt]||null)?Pf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Bn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wf!==0){var e=new FormData(i,o);ec(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),ec(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var If=0;If<pi.length;If++){var Lf=pi[If];mi(Lf.toLowerCase(),`on`+(Lf[0].toUpperCase()+Lf.slice(1)))}mi(ai,`onAnimationEnd`),mi(oi,`onAnimationIteration`),mi(si,`onAnimationStart`),mi(`dblclick`,`onDoubleClick`),mi(`focusin`,`onFocus`),mi(`focusout`,`onBlur`),mi(ci,`onTransitionRun`),mi(li,`onTransitionStart`),mi(ui,`onTransitionCancel`),mi(di,`onTransitionEnd`),Wt(`onMouseEnter`,[`mouseout`,`mouseover`]),Wt(`onMouseLeave`,[`mouseout`,`mouseover`]),Wt(`onPointerEnter`,[`pointerout`,`pointerover`]),Wt(`onPointerLeave`,[`pointerout`,`pointerover`]),F(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),F(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),F(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),F(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),F(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),F(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Rf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),zf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Rf));function Bf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){yi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){yi(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[kt];n===void 0&&(n=t[kt]=new Set);var r=e+`__bubble`;n.has(r)||(Wf(t,e,2,!1),n.add(r))}function Vf(e,t,n){var r=0;t&&(r|=4),Wf(n,e,r,t)}var Hf=`_reactListening`+Math.random().toString(36).slice(2);function Uf(e){if(!e[Hf]){e[Hf]=!0,Ht.forEach(function(t){t!==`selectionchange`&&(zf.has(t)||Vf(t,!1,e),Vf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hf]||(t[Hf]=!0,Vf(`selectionchange`,!1,t))}}function Wf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!kn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Gf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=It(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}En(function(){var r=a,i=L(n),s=[];a:{var c=fi.get(e);if(c!==void 0){var l=Bn,u=e;switch(e){case`keypress`:if(Fn(n)===0)break a;case`keydown`:case`keyup`:l=rr;break;case`focusin`:u=`focus`,l=z;break;case`focusout`:u=`blur`,l=z;break;case`beforeblur`:case`afterblur`:l=z;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=qn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Jn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=or;break;case ai:case oi:case si:l=Yn;break;case di:l=sr;break;case`scroll`:case`scrollend`:l=Hn;break;case`wheel`:l=cr;break;case`copy`:case`cut`:case`paste`:l=Xn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=ir;break;case`submit`:l=ar;break;case`toggle`:case`beforetoggle`:l=lr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Dn(m,p),g!=null&&d.push(Kf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==Sn&&(u=n.relatedTarget||n.fromElement)&&(It(u)||u[Ot]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?It(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=qn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=ir,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Rt(c),h=l==null?u:Rt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,It(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?ne(c,l,Jf):null,c!==null&&Yf(s,u,c,d,!1),l!==null&&f!==null&&Yf(s,f,l,d,!0)))}a:{if(c=r?Rt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Or;else if(Cr(c)){if(kr)_=Rr;else{_=Ir;var v=Fr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&_n(r.elementType)&&(_=Or):_=Lr;if(_&&=_(e,r)){wr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Rt(r):window,e){case`focusin`:(Cr(v)||v.contentEditable===`true`)&&(Yr=v,Xr=r,Zr=null);break;case`focusout`:Zr=Xr=Yr=null;break;case`mousedown`:Qr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Qr=!1,$r(s,n,i);break;case`selectionchange`:if(Jr)break;case`keydown`:case`keyup`:$r(s,n,i)}var y;if(dr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else yr?_r(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(mr&&n.locale!==`ko`&&(yr||b!==`onCompositionStart`?b===`onCompositionEnd`&&yr&&(y=Pn()):(jn=i,Mn=`value`in jn?jn.value:jn.textContent,yr=!0)),v=qf(r,b),0<v.length&&(b=new Zn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=vr(n),y!==null&&(b.data=y)))),(y=pr?br(e,n):xr(e,n))&&(b=qf(r,`onBeforeInput`),0<b.length&&(v=new Zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Ff(s,e,r,n,i)}Bf(s,t)})}function Kf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Dn(e,n),i!=null&&r.unshift(Kf(e,i,a)),i=Dn(e,t),i!=null&&r.push(Kf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Jf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Dn(n,a),l!=null&&o.unshift(Kf(n,l,c))):i||(l=Dn(n,a),l!=null&&o.push(Kf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function Qf(e){return(typeof e==`string`?e:``+e).replace(Xf,`
`).replace(Zf,``)}function $f(e,t){return t=Qf(t),Qf(e)===t}function ep(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||pn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&pn(e,``+r);else return;break;case`className`:Zt(e,`class`,r);break;case`tabIndex`:Zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Zt(e,n,r);break;case`style`:gn(e,r,o);return;case`data`:if(t!==`object`){Zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=bn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&ep(e,t,`name`,a.name,a,null),ep(e,t,`formEncType`,a.formEncType,a,null),ep(e,t,`formMethod`,a.formMethod,a,null),ep(e,t,`formTarget`,a.formTarget,a,null)):(ep(e,t,`encType`,a.encType,a,null),ep(e,t,`method`,a.method,a,null),ep(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=bn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=xn);return;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=bn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Xt(e,`popover`,r);break;case`xlinkActuate`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Xt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=vn.get(n)||n,Xt(e,n,r);else return}I=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:gn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)pn(e,r);else if(typeof r==`number`||typeof r==`bigint`)pn(e,``+r);else return;break;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=xn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Ut.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Dt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}I=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Xt(e,n,r)}return}I=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,o,s,n,null)}}a&&ep(e,t,`srcSet`,n.srcSet,n,null),r&&ep(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:ep(e,t,r,d,n,null)}}cn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:ep(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&un(e,!!r,n,!0):un(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:ep(e,t,s,c,n,null)}fn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:ep(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<Rf.length;r++)$(Rf[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,u,r,n,null)}return;default:if(_n(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&ep(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||ep(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(I=!0),o=m;break;case`name`:m!==f&&(I=!0),a=m;break;case`checked`:m!==f&&(I=!0),u=m;break;case`defaultChecked`:m!==f&&(I=!0),d=m;break;case`value`:m!==f&&(I=!0),s=m;break;case`defaultValue`:m!==f&&(I=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&ep(e,t,p,m,r,f)}}sn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||ep(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(I=!0),p=o;break;case`defaultValue`:o!==l&&(I=!0),c=o;break;case`multiple`:o!==l&&(I=!0),s=o;default:o!==l&&ep(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?un(e,!!n,n?[]:``,!1):un(e,!!n,t,!0)):un(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:ep(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(I=!0),p=a;break;case`defaultValue`:a!==o&&(I=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&ep(e,t,s,a,r,o)}dn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:ep(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(I=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:ep(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&ep(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:ep(e,t,u,p,r,m)}return;default:if(_n(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&ep(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||ep(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[Et]=r,n[Dt]=t,np(n,e,t),Bt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Nt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:w({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=It(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ne(n,a,C),t===null?t=!1:(h(t,!0,ee,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=ne(r,a,C),t===null?t=!1:(h(t,!0,te,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Ft(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Nt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&ep(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===xn&&(e.onclick=null),Ft(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ft(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=A.d;A.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=Ld();return e||t}function Cm(e){var t=Lt(e);t!==null&&t.tag===5&&t.type===`form`?nc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=on(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Bt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+on(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+on(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+on(n.imageSizes)+`"]`)):i+=`[href="`+on(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=w({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Pt]=!0,o.onload=o.onerror=function(){Vt(o)}),Bt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+on(r)+`"][href="`+on(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=w({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Bt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=zt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=w({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Bt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=zt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=w({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Bt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=zt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=w({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Bt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=ke.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=zt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=zt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=zt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+on(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Pt]){r.loading=1;return}}else t=e.createElement(`link`),t[Pt]=!0,t.onload=t.onerror=Vt.bind(null,t),np(t,`link`,n),Bt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+on(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+on(n.href)+`"]`);if(r)return t.instance=r,Bt(r),r;var a=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Bt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Bt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Bt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Bt(a),a):(r=n,(a=vm.get(o))&&(r=w({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Bt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Nt]||a[Et]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Bt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Bt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:D,Provider:null,Consumer:null,_currentValue:Se,_currentValue2:Se,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ht(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ht(0),this.hiddenUpdates=ht(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ji(3,null,null,t),e.current=a,a.stateNode=e,t=Aa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},po(a),e}function uh(e){return e?(e=ki,e):ki}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=ho(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=go(e,r,t),n!==null&&(Md(n,e,t),_o(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Ei(e,67108864);t!==null&&Md(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=kd();t=xt(t);var n=Ei(e,t);n!==null&&Md(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,yh(e,t,n,r)}finally{A.p=a,k.T=i}}function vh(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,yh(e,t,n,r)}finally{A.p=a,k.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Gf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Lt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=lt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-rt(o);s.entanglements[1]|=c,o&=~c}Tf(a),!(Y&6)&&(md=qe()+500,Ef(0,!1))}}break;case 31:case 13:s=Ei(a,2),s!==null&&Md(s,a,2),Ld(),ph(a,2)}if(a=bh(r),a===null&&Gf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Gf(e,t,r,null,n)}}function bh(e){return e=L(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=It(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Je()){case Ye:return 2;case Xe:return 8;case M:case N:return 32;case Ze:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Lt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=It(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,wt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,wt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sn=r,n.target.dispatchEvent(r),Sn=null}else return t=Lt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Lt(n);a!==null&&(e.splice(t,3),t-=3,ec(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Dt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Dt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,kd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Ld(),t[Ot]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{et=Jh.inject(qh),tt=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Cc,s=wc,c=Tc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Ot]=t.current,Uf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=e=>e.replace(/[-_ ]+(\w)/g,(e,t)=>t.toUpperCase()).replace(/^./,e=>e.toLowerCase());function b(e,t){return`__ciq-font-${e}-${t.weight}-${t.style}`}function x(e,t){return`
    @font-face {
      font-family: '${e}';
      font-style: ${t.style};
      font-weight: ${t.weight};
      src: url('${t.file}') format('woff2');
      font-display: swap;
    }
  `}function S(e,t){return{href:t.file,type:`font/woff2`,as:`font`,crossOrigin:`anonymous`}}function ee(e,t){let{id:n}=t,r=n??b(e,t);if(document.getElementById(r))return;let i=document.createElement(`style`);i.id=r,i.textContent=x(e,t),document.head.appendChild(i)}var te=(e,t)=>t?e.filter(e=>{let n=!t.weights||t.weights.includes(e.weight),r=!t.styles||t.styles.includes(e.style);return n&&r}):e;function C(e){let t=Object.fromEntries(e.variants.map(t=>{let{weight:n,style:r}=t;return[y([e.name,n,r===`normal`?``:r].filter(Boolean).join(`-`)),{css:()=>x(e.name,t),preload:()=>[S(e.name,t)],inject:()=>ee(e.name,t)}]})),n={[y(e.name)]:{css:t=>te(e.variants,t).map(t=>x(e.name,t)).join(`
`),preload:t=>te(e.variants,t).map(t=>S(e.name,t)),inject:t=>te(e.variants,t).forEach(t=>ee(e.name,t))}};return{...t,...n}}var ne=`/assets/CommitMono-Regular.woff2`,w=`/assets/CommitMono-Italic.woff2`,T=`/assets/CommitMono-Bold.woff2`,re=`/assets/CommitMono-BoldItalic.woff2`,ie=`/assets/Inter-Thin.woff2`,E=`/assets/Inter-ThinItalic.woff2`,ae=`/assets/Inter-ExtraLight.woff2`,oe=`/assets/Inter-ExtraLightItalic.woff2`,se=`/assets/Inter-Light.woff2`,D=`/assets/Inter-LightItalic.woff2`,O=`/assets/Inter-Regular.woff2`,ce=`/assets/Inter-Italic.woff2`,le=`/assets/Inter-Medium.woff2`,ue=`/assets/Inter-MediumItalic.woff2`,de=`/assets/Inter-SemiBold.woff2`,fe=`/assets/Inter-SemiBoldItalic.woff2`,pe=`/assets/Inter-Bold.woff2`,me=`/assets/Inter-BoldItalic.woff2`,he=`/assets/Inter-ExtraBold.woff2`,ge=`/assets/Inter-ExtraBoldItalic.woff2`,_e=`/assets/Inter-Black.woff2`,ve=`/assets/Inter-BlackItalic.woff2`,ye=`/assets/Roboto-Thin.woff2`,be=`/assets/Roboto-ThinItalic.woff2`,xe=`/assets/Roboto-Light.woff2`,k=`/assets/Roboto-LightItalic.woff2`,A=`/assets/Roboto-Regular.woff2`,Se=`/assets/Roboto-RegularItalic.woff2`,Ce=`/assets/Roboto-Medium.woff2`,we=`/assets/Roboto-MediumItalic.woff2`,Te=`/assets/Roboto-Bold.woff2`,Ee=`/assets/Roboto-BoldItalic.woff2`,j=`/assets/Roboto-Black.woff2`,De=`/assets/Roboto-BlackItalic.woff2`,Oe=`/assets/Satoshi-Light.woff2`,ke=`/assets/Satoshi-LightItalic.woff2`,Ae=`/assets/Satoshi-Regular.woff2`,je=`/assets/Satoshi-Italic.woff2`,Me=`/assets/Satoshi-Medium.woff2`,Ne=`/assets/Satoshi-MediumItalic.woff2`,Pe=`/assets/Satoshi-Bold.woff2`,Fe=`/assets/Satoshi-BoldItalic.woff2`,Ie=`/assets/Satoshi-Black.woff2`,Le=`/assets/Satoshi-BlackItalic.woff2`,Re={name:`CommitMono`,variants:[{weight:400,style:`normal`,file:ne},{weight:400,style:`italic`,file:w},{weight:700,style:`normal`,file:T},{weight:700,style:`italic`,file:re}]},ze={name:`Inter`,variants:[{weight:100,style:`normal`,file:ie},{weight:100,style:`italic`,file:E},{weight:200,style:`normal`,file:ae},{weight:200,style:`italic`,file:oe},{weight:300,style:`normal`,file:se},{weight:300,style:`italic`,file:D},{weight:400,style:`normal`,file:O},{weight:400,style:`italic`,file:ce},{weight:500,style:`normal`,file:le},{weight:500,style:`italic`,file:ue},{weight:600,style:`normal`,file:de},{weight:600,style:`italic`,file:fe},{weight:700,style:`normal`,file:pe},{weight:700,style:`italic`,file:me},{weight:800,style:`normal`,file:he},{weight:800,style:`italic`,file:ge},{weight:900,style:`normal`,file:_e},{weight:900,style:`italic`,file:ve}]},Be={name:`Roboto`,variants:[{weight:100,style:`normal`,file:ye},{weight:100,style:`italic`,file:be},{weight:300,style:`normal`,file:xe},{weight:300,style:`italic`,file:k},{weight:400,style:`normal`,file:A},{weight:400,style:`italic`,file:Se},{weight:500,style:`normal`,file:Ce},{weight:500,style:`italic`,file:we},{weight:700,style:`normal`,file:Te},{weight:700,style:`italic`,file:Ee},{weight:900,style:`normal`,file:j},{weight:900,style:`italic`,file:De}]},Ve={name:`Satoshi`,variants:[{weight:300,style:`normal`,file:Oe},{weight:300,style:`italic`,file:ke},{weight:400,style:`normal`,file:Ae},{weight:400,style:`italic`,file:je},{weight:500,style:`normal`,file:Me},{weight:500,style:`italic`,file:Ne},{weight:700,style:`normal`,file:Pe},{weight:700,style:`italic`,file:Fe},{weight:900,style:`normal`,file:Ie},{weight:900,style:`italic`,file:Le}]},He=C(Re),Ue=C(ze),We=C(Be),Ge=C(Ve);He.commitMono,He.commitMono400,He.commitMono400Italic,He.commitMono700,He.commitMono700Italic;var Ke=Ue.inter;Ue.inter100,Ue.inter100Italic,Ue.inter200,Ue.inter200Italic,Ue.inter300,Ue.inter300Italic,Ue.inter400,Ue.inter400Italic,Ue.inter500,Ue.inter500Italic,Ue.inter600,Ue.inter600Italic,Ue.inter700,Ue.inter700Italic,Ue.inter800,Ue.inter800Italic,Ue.inter900,Ue.inter900Italic,We.roboto,We.roboto100,We.roboto100Italic,We.roboto300,We.roboto300Italic,We.roboto400,We.roboto400Italic,We.roboto500,We.roboto500Italic,We.roboto700,We.roboto700Italic,We.roboto900,We.roboto900Italic;var qe=Ge.satoshi;Ge.satoshi300,Ge.satoshi300Italic,Ge.satoshi400,Ge.satoshi400Italic,Ge.satoshi500,Ge.satoshi500Italic,Ge.satoshi700,Ge.satoshi700Italic,Ge.satoshi900,Ge.satoshi900Italic;var Je=new Set([`children`,`localName`,`ref`,`style`,`className`]),Ye=new WeakMap,Xe=(e,t,n,r,i)=>{let a=i?.[t];a===void 0?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==r&&((e,t,n)=>{let r=Ye.get(e);r===void 0&&Ye.set(e,r=new Map);let i=r.get(t);n===void 0?i!==void 0&&(r.delete(t),e.removeEventListener(t,i)):i===void 0?(r.set(t,i={handleEvent:n}),e.addEventListener(t,i)):i.handleEvent=n})(e,a,n)},M=({react:e,tagName:t,elementClass:n,events:r,displayName:i})=>{let a=new Set(Object.keys(r??{})),o=e.forwardRef(((i,o)=>{let s=e.useRef(new Map),c=e.useRef(null),l={},u={};for(let[e,t]of Object.entries(i))Je.has(e)?l[e===`className`?`class`:e]=t:a.has(e)||e in n.prototype?u[e]=t:l[e]=t;return e.useLayoutEffect((()=>{if(c.current===null)return;let e=new Map;for(let t in u)Xe(c.current,t,i[t],s.current.get(t),r),s.current.delete(t),e.set(t,i[t]);for(let[e,t]of s.current)Xe(c.current,e,void 0,t,r);s.current=e})),e.useLayoutEffect((()=>{c.current?.removeAttribute(`defer-hydration`)}),[]),l.suppressHydrationWarning=!0,e.createElement(t,{...l,ref:e.useCallback((e=>{c.current=e,typeof o==`function`?o(e):o!==null&&(o.current=e)}),[o])})}));return o.displayName=i??n.name,o};function N(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function Ze(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)}function Qe(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n}var $e=globalThis,et=$e.ShadowRoot&&($e.ShadyCSS===void 0||$e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,tt=Symbol(),nt=new WeakMap,rt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(et&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=nt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&nt.set(t,e))}return e}toString(){return this.cssText}},it=e=>new rt(typeof e==`string`?e:e+``,void 0,tt),P=(e,...t)=>new rt(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,tt),at=(e,t)=>{if(et)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=$e.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ot=et?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return it(t)})(e):e,{is:st,defineProperty:ct,getOwnPropertyDescriptor:lt,getOwnPropertyNames:ut,getOwnPropertySymbols:dt,getPrototypeOf:ft}=Object,pt=globalThis,mt=pt.trustedTypes,ht=mt?mt.emptyScript:``,gt=pt.reactiveElementPolyfillSupport,_t=(e,t)=>e,vt={toAttribute(e,t){switch(t){case Boolean:e=e?ht:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},yt=(e,t)=>!st(e,t),bt={attribute:!0,type:String,converter:vt,reflect:!1,useDefault:!1,hasChanged:yt};Symbol.metadata??=Symbol(`metadata`),pt.litPropertyMetadata??=new WeakMap;var xt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=bt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ct(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=lt(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??bt}static _$Ei(){if(this.hasOwnProperty(_t(`elementProperties`)))return;let e=ft(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_t(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_t(`properties`))){let e=this.properties,t=[...ut(e),...dt(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ot(e))}else e!==void 0&&t.push(ot(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return at(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?vt:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?vt:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??yt)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};xt.elementStyles=[],xt.shadowRootOptions={mode:`open`},xt[_t(`elementProperties`)]=new Map,xt[_t(`finalized`)]=new Map,gt?.({ReactiveElement:xt}),(pt.reactiveElementVersions??=[]).push(`2.1.2`);var St=globalThis,Ct=e=>e,wt=St.trustedTypes,Tt=wt?wt.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Et=`$lit$`,Dt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ot=`?`+Dt,kt=`<${Ot}>`,At=document,jt=()=>At.createComment(``),Mt=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Nt=Array.isArray,Pt=e=>Nt(e)||typeof e?.[Symbol.iterator]==`function`,Ft=`[ 	
\f\r]`,It=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,Rt=/>/g,zt=RegExp(`>|${Ft}(?:([^\\s"'>=/]+)(${Ft}*=${Ft}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Bt=/'/g,Vt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,Ut=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),F=Ut(1),Wt=Ut(2),Gt=Symbol.for(`lit-noChange`),Kt=Symbol.for(`lit-nothing`),qt=new WeakMap,Jt=At.createTreeWalker(At,129);function I(e,t){if(!Nt(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Tt===void 0?t:Tt.createHTML(t)}var Yt=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=It;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===It?c[1]===`!--`?o=Lt:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=zt):(Ht.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=zt):o=Rt:o===zt?c[0]===`>`?(o=i??It,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?zt:c[3]===`"`?Vt:Bt):o===Vt||o===Bt?o=zt:o===Lt||o===Rt?o=It:(o=zt,i=void 0);let d=o===zt&&e[t+1].startsWith(`/>`)?` `:``;a+=o===It?n+kt:l>=0?(r.push(s),n.slice(0,l)+Et+n.slice(l)+Dt+d):n+Dt+(l===-2?t:d)}return[I(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Xt=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Yt(t,n);if(this.el=e.createElement(l,r),Jt.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Jt.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Et)){let t=u[o++],n=i.getAttribute(e).split(Dt),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?tn:r[1]===`?`?nn:r[1]===`@`?rn:en}),i.removeAttribute(e)}else e.startsWith(Dt)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ht.test(i.tagName)){let e=i.textContent.split(Dt),t=e.length-1;if(t>0){i.textContent=wt?wt.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],jt()),Jt.nextNode(),c.push({type:2,index:++a});i.append(e[t],jt())}}}else if(i.nodeType===8){if(i.data===Ot)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Dt,e+1))!==-1;)c.push({type:7,index:a}),e+=Dt.length-1}}a++}}static createElement(e,t){let n=At.createElement(`template`);return n.innerHTML=e,n}};function Zt(e,t,n=e,r){if(t===Gt)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Mt(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Zt(e,i._$AS(e,t.values),i,r)),t}var Qt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??At).importNode(t,!0);Jt.currentNode=r;let i=Jt.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new $t(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new an(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Jt.nextNode(),a++)}return Jt.currentNode=At,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},$t=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=Kt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Zt(this,e,t),Mt(e)?e===Kt||e==null||e===``?(this._$AH!==Kt&&this._$AR(),this._$AH=Kt):e!==this._$AH&&e!==Gt&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Pt(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Kt&&Mt(this._$AH)?this._$AA.nextSibling.data=e:this.T(At.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Xt.createElement(I(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Qt(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=qt.get(e.strings);return t===void 0&&qt.set(e.strings,t=new Xt(e)),t}k(t){Nt(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(jt()),this.O(jt()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Ct(e).nextSibling;Ct(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},en=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=Kt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Kt}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Zt(this,e,t,0),a=!Mt(e)||e!==this._$AH&&e!==Gt,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Zt(this,r[n+o],t,o),s===Gt&&(s=this._$AH[o]),a||=!Mt(s)||s!==this._$AH[o],s===Kt?e=Kt:e!==Kt&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===Kt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},tn=class extends en{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Kt?void 0:e}},nn=class extends en{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Kt)}},rn=class extends en{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Zt(this,e,t,0)??Kt)===Gt)return;let n=this._$AH,r=e===Kt&&n!==Kt||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==Kt&&(n===Kt||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},an=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Zt(this,e)}},on={M:Et,P:Dt,A:Ot,C:1,L:Yt,R:Qt,D:Pt,V:Zt,I:$t,H:en,N:nn,U:rn,B:tn,F:an},sn=St.litHtmlPolyfillSupport;sn?.(Xt,$t),(St.litHtmlVersions??=[]).push(`3.3.3`);var cn=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new $t(t.insertBefore(jt(),e),e,void 0,n??{})}return i._$AI(e),i},ln=globalThis,un=class extends xt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=cn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Gt}};un._$litElement$=!0,un.finalized=!0,ln.litElementHydrateSupport?.({LitElement:un});var dn=ln.litElementPolyfillSupport;dn?.({LitElement:un}),(ln.litElementVersions??=[]).push(`4.2.2`);var fn={attribute:!0,type:String,converter:vt,reflect:!1,hasChanged:yt},pn=(e=fn,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function mn(e){return(t,n)=>typeof n==`object`?pn(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function hn(e){return mn({...e,state:!0,attribute:!1})}var gn=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function _n(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return gn(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return gn(n,r,{get(){return a(this)}})}}var vn=new WeakMap,yn={description:!0,type:!0,options:!0,default:!0,required:!0,copyRule:!0,experimental:!0,attribute:!0,reflect:!0},bn=new Set([`attribute`,`reflect`]),xn={fromAttribute:e=>e!==null&&e!==`false`,toAttribute:e=>e?``:null};function Sn(e){return e===`boolean`?Boolean:e===`number`?Number:/\[\]$/.test(e)||e.startsWith(`Array`)?Array:e===`object`||e.startsWith(`Record<`)||e.startsWith(`{`)?Object:String}function L(e){return(t,n)=>{let r=vn.get(t);r||(r={},vn.set(t,r));let{type:i}=e,a={type:i},o={};for(let[t,n]of Object.entries(e))t!==`type`&&(t in yn&&Object.assign(a,{[t]:n}),(!(t in yn)||bn.has(t))&&(o[t]=n));let s=Sn(i),c=s!==Array&&s!==Object,l=s===Boolean?{converter:xn}:{};a.attribute??=n.toLowerCase(),a.reflect=a.attribute!==!1&&(a.reflect??c),r[n]=a,mn({type:s,reflect:c,...l,...o})(t,n)}}function Cn(e){let t=[],n=e;for(;n&&n!==Object.prototype;)t.push(n),n=Object.getPrototypeOf(n);let r={};for(let e of t.reverse()){let t=vn.get(e);t&&Object.assign(r,t)}return r}function R(e,t){return n=>{let r=n.meta;if(r){r.events||={};let n=t.description??(t.forwarded?`Forwarded native ${e} event.`:void 0);r.events[e]={...t,description:n}}}}var wn=new Set([`checkbox`,`radio`]),Tn=new Set([`text`,`search`,`url`,`tel`,`password`]),En=[`type`,`part`,`slot`],Dn=e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement,On=e=>[e.localName,...En.map(t=>e.getAttribute(t)??``)].join(`|`),kn=(e,t)=>[...e.querySelectorAll(`*`)].filter(e=>On(e)===t),An=(e,t)=>{let n=On(t);return{key:n,index:kn(e,n).indexOf(t)}};function jn(e){let t=[...e.options].filter(e=>e.defaultSelected);if(t.length||e.multiple)return t.map(e=>e.value);let n=[...e.options].find(e=>!e.disabled);return n?[n.value]:[]}function Mn(e){if(e instanceof HTMLTextAreaElement)return e.defaultValue;let t=document.createElement(`input`);return[...e.attributes].forEach(({name:e,value:n})=>t.setAttribute(e,n)),t.value}function Nn(e){if(e instanceof HTMLSelectElement){let t=[...e.selectedOptions].map(e=>e.value);return t.join(`
`)===jn(e).join(`
`)?void 0:t}if(e instanceof HTMLInputElement&&wn.has(e.type))return e.checked===e.defaultChecked?void 0:e.checked;if(!(e instanceof HTMLInputElement&&e.type===`file`))return e.value===Mn(e)?void 0:e.value}function Pn(e,t){e instanceof HTMLSelectElement?[...e.options].forEach(e=>{e.selected=t.includes(e.value)}):typeof t==`boolean`?e.checked=t:e.value=t}var Fn=(e,t)=>!(e instanceof HTMLSelectElement)||t.length===0||[...e.options].some(e=>t.includes(e.value)),In=e=>e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement&&Tn.has(e.type);function Ln(e){let t=new Map;return[...e.querySelectorAll(`*`)].map(e=>{let n=On(e),r=t.get(n)??0;return t.set(n,r+1),[e,{key:n,index:r}]})}function Rn(e,t){return Ln(e).flatMap(([e,n])=>{let r=[...t,n];return[[e,r],...e.shadowRoot?Rn(e.shadowRoot,r):[]]})}var zn=e=>e.flatMap(([e,t])=>{let n=Dn(e)?Nn(e):void 0;return n===void 0?[]:[{location:t,value:n}]}),Bn=e=>e.flatMap(([e,t])=>e.scrollTop||e.scrollLeft?[{location:t,top:e.scrollTop,left:e.scrollLeft}]:[]);function Vn(e,t=[]){let n=e.activeElement;if(!n)return;let r=[...t,An(e,n)];return n.shadowRoot?.activeElement?Vn(n.shadowRoot,r):{location:r,selection:In(n)?[n.selectionStart??0,n.selectionEnd??0]:null}}function Hn(e){let t=Rn(e,[]);return{edits:zn(t),scrolls:Bn(t),focus:Vn(e)}}async function Un(e,[t,...n]){let r=kn(e,t.key)[t.index];return!r||!n.length?r:(`updateComplete`in r&&await r.updateComplete,r.shadowRoot?Un(r.shadowRoot,n):void 0)}async function Wn(e,{edits:t,scrolls:n,focus:r}){let i=(await Promise.all(t.map(async({location:t,value:n})=>({control:await Un(e,t),value:n})))).flatMap(({control:e,value:t})=>!e||!Dn(e)||!Fn(e,t)?[]:(Pn(e,t),[e]));(await Promise.all(n.map(async({location:t,top:n,left:r})=>({element:await Un(e,t),top:n,left:r})))).forEach(({element:e,top:t,left:n})=>e?.scrollTo({top:t,left:n,behavior:`instant`}));let a=r&&await Un(e,r.location);return r&&a instanceof HTMLElement&&(a.focus({preventScroll:!0}),r.selection&&In(a)&&a.setSelectionRange(...r.selection)),i}function Gn(e){e.forEach(e=>{e.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),e.dispatchEvent(new Event(`change`,{bubbles:!0}))})}var Kn=Symbol.for(`tagName`),qn=(e,t)=>{e[Kn]=t},Jn=class extends un{createRenderRoot(){let e=this.shadowRoot;return e?(this.serverRenderedNodes=[...e.childNodes],at(e,this.constructor.elementStyles),e):super.createRenderRoot()}update(e){let t=this.serverRenderedNodes,n=this.renderRoot,r=t&&Hn(n);super.update(e),t&&r&&(t.forEach(e=>e.remove()),this.serverRenderedNodes=void 0,queueMicrotask(()=>void Wn(n,r).then(Gn)))}static ensureDefined(){if(!this.tagName)throw Error(`${this.name} is missing a tagName. Did you forget to use @quanticElement decorator?`);qn(this,this.tagName),customElements.get(this.tagName)||customElements.define(this.tagName,this)}};function z(e){return function(t){customElements.get(e)||customElements.define(e,t),t.tagName=e,qn(t,e);let n=Cn(t.prototype);if(t.meta&&Object.keys(n).length){let r=Object.prototype.hasOwnProperty.call(t,`meta`),i=r?t.meta:{...t.meta,tag:e,props:{...t.meta.props??{}}};i.props={...i.props??{},...n},r||(t.meta=i)}return t}}function Yn(e,t){let n=t.cssText;if(e===``)return it(`:host(:has(> :not([slot]))) { ${n} } @scope { :scope:has(> :not([slot])) { ${n} } }`);let r=Xn(e);return it(`:host(:has(> [slot="${r}"])) { ${n} } @scope { :scope:has(> [slot="${r}"]) { ${n} } }`)}function Xn(e){return e.replace(/["\\]/g,`\\$&`)}var Zn=`data-slot-filled`,Qn=(e,t=[])=>{var n,r,i,a,o,s,c;if(t.length===0)return e;let l=e=>`cssText`in e?e.cssText:Array.from(e.cssRules,e=>e.cssText).join(`
`),u=e=>e===``?`slot:not([name])`:`slot[name="${Xn(e)}"]`,d=t.map(e=>{let t=u(e);return e===``?`${t}[${Zn}="false"] { display: none; }`:[`${t} { display: none; }`,Yn(e,it(`${t} { display: revert-layer; }`)).cssText,`${t}[${Zn}="true"] { display: revert-layer; }`].join(` `)}).join(` `);class f extends e{constructor(){super(...arguments),n.add(this),r.set(this,!1),i.set(this,e=>e.nodeType!==Node.TEXT_NODE||e.textContent?.trim()!==``),a.set(this,e=>{let r=e.target;t.includes(r.name)&&Ze(this,n,`m`,o).call(this,r)})}static finalizeStyles(t){return[it(`@layer quantic-component, quantic-slot-visibility; @layer quantic-component { ${(e.finalizeStyles?.call(this,t)??[]).map(l).join(`
`)} } @layer quantic-slot-visibility { ${d} }`)]}connectedCallback(){super.connectedCallback(),Ze(this,n,`m`,s).call(this)}disconnectedCallback(){Ze(this,n,`m`,c).call(this),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated?.(e),Ze(this,n,`m`,s).call(this)}updated(e){super.updated?.(e);for(let e of t){let t=this.renderRoot.querySelector(e===``?`slot:not([name])`:`slot[name="${CSS.escape(e)}"]`);t&&Ze(this,n,`m`,o).call(this,t)}}}return r=new WeakMap,i=new WeakMap,a=new WeakMap,n=new WeakSet,o=function(e){let t=String(e.assignedNodes({flatten:!0}).some(Ze(this,i,`f`)));e.getAttribute(Zn)!==t&&e.setAttribute(Zn,t)},s=function(){!Ze(this,r,`f`)&&this.renderRoot&&(this.renderRoot.addEventListener(`slotchange`,Ze(this,a,`f`),{capture:!0}),Qe(this,r,!0,`f`))},c=function(){Ze(this,r,`f`)&&this.renderRoot&&(this.renderRoot.removeEventListener(`slotchange`,Ze(this,a,`f`),{capture:!0}),Qe(this,r,!1,`f`))},f},$n={Success:`success`,Error:`error`,Warning:`warning`,Info:`info`},er=Symbol.for(``),tr=e=>{if(e?.r===er)return e?._$litStatic$},nr=e=>({_$litStatic$:e,r:er}),rr=new Map,ir=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=tr(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=rr.get(e))===void 0&&(o.raw=o,rr.set(e,t=o)),n=s}return e(t,...n)})(F),ar={Primary:`primary`,Secondary:`secondary`,Outline:`outline`,Ghost:`ghost`},or={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`,ExtraLarge:`xl`},sr={Never:`never`,Always:`always`,Small:`sm`,Medium:`md`,Large:`lg`},cr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},lr=e=>(...t)=>({_$litDirective$:e,values:t}),ur=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},dr=lr(class extends ur{constructor(e){if(super(e),e.type!==cr.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Gt}}),fr=e=>e??Kt,pr=class extends Jn{constructor(){super(),this.as=`button`,this.variant=ar.Primary,this.size=or.Medium,this.type=`button`,this.icon=!1,this.destructive=!1,this.disabled=!1,this.autofocus=!1,this.grow=sr.Never,this.handleClick=e=>{if(!this.disabled){let t=this.form?document.getElementById(this.form):null,n=this.internals?.form??t??this.getRootNode()?.host?.closest?.(`form`);if(n){if(this.type===`submit`){let t=null;this.name&&this.value!=null&&(t=document.createElement(`input`),t.type=`hidden`,t.name=this.name,t.value=this.value,t.setAttribute(`data-quantic-name-value-holder`,`1`),n.appendChild(t));try{n.requestSubmit(this.innerButton??void 0)}catch{n.requestSubmit()}finally{queueMicrotask(()=>t?.remove())}e.preventDefault()}else this.type===`reset`&&(n.reset(),e.preventDefault())}}},this.internals=this.attachInternals?.()??{form:null}}render(){let e=nr(this.as),t=this.as===`button`?void 0:this.as===`a`?`link`:`button`,n=this.as===`button`?this.type:void 0,r=dr({main:!0,[`size--${this.size}`]:!0,[`variant--${this.variant}`]:!0,icon:this.icon,destructive:this.destructive,[`grow--${this.grow}`]:!0});return this.as===`button`?ir`<button
          class=${r}
          tabindex=${this.disabled?-1:0}
          type=${n}
          ?disabled=${this.disabled}
          ?autofocus=${this.autofocus}
          form=${fr(this.form)}
          name=${fr(this.name)}
          value=${fr(this.value)}
          @click=${this.handleClick}
        >
          <slot></slot>
        </button>`:ir`
        <${e}
          class=${r}
          role="${t}"
          tabindex=${this.disabled?-1:0}
          aria-disabled=${this.disabled}
          href=${fr(this.href)}
          target=${fr(this.target)}
          download=${fr(this.download)}
        >
          <slot></slot>
        </${e}>`}};pr.meta={tag:`quantic-button`,description:`Clickable action trigger for form submission, primary CTAs, and secondary actions. Supports icon-only mode and polymorphic rendering as an <a> or <span>. Prefer over quantic-icon-label when the element needs to be interactive.`,category:`action`,slots:{"":{description:`Button label or icon content.`}},relatedTo:[`quantic-button-bar`,`quantic-icon-label`]},pr.formAssociated=!0,pr.styles=P`
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
  `,N([L({type:`"button" | "a" | "div" | "span"`,default:`button`,description:`Underlying HTML element. Use "a" for navigation, "button" (default) for actions.`})],pr.prototype,`as`,void 0),N([L({type:`ButtonVariant`,options:Object.values(ar),default:ar.Primary,reflect:!0,description:`Visual style. Use primary for the main CTA, secondary for paired actions, outline for neutral actions, ghost for inline or toolbar actions.`})],pr.prototype,`variant`,void 0),N([L({type:`ButtonSize`,options:Object.values(or),default:or.Medium,reflect:!0,description:`Controls padding and font size.`})],pr.prototype,`size`,void 0),N([L({type:`"button" | "submit" | "reset"`,default:`button`,reflect:!0,description:`Native button type for form association.`})],pr.prototype,`type`,void 0),N([L({type:`string`,reflect:!0,description:`ID of the associated <form> element.`})],pr.prototype,`form`,void 0),N([L({type:`string`,reflect:!0,description:`Name submitted with form data.`})],pr.prototype,`name`,void 0),N([L({type:`string`,reflect:!0,description:`Value submitted with form data.`})],pr.prototype,`value`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Square icon-only mode — equal padding on all sides, no text label.`})],pr.prototype,`icon`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Renders in error/danger colors. Use for irreversible actions such as delete or remove.`})],pr.prototype,`destructive`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction and reduces opacity.`})],pr.prototype,`disabled`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Automatically focuses the button on page load.`})],pr.prototype,`autofocus`,void 0),N([L({type:`ButtonGrow`,options:Object.values(sr),default:sr.Never,reflect:!0,description:`Responsive full-width behaviour. "always" is always full-width; "sm", "md", "lg" expand at those container-query thresholds.`})],pr.prototype,`grow`,void 0),N([L({type:`string`,reflect:!0,description:`URL for anchor rendering (as="a" only).`})],pr.prototype,`href`,void 0),N([L({type:`string`,reflect:!0,description:`Link target for anchor rendering (as="a" only).`})],pr.prototype,`target`,void 0),N([L({type:`string`,reflect:!0,description:`Filename hint for download links (as="a" only).`})],pr.prototype,`download`,void 0),N([_n(`button`)],pr.prototype,`innerButton`,void 0),pr=N([z(`quantic-button`)],pr);var mr={ApptainerOutline:`apptainer.outline`,ApptainerSolid:`apptainer.solid`,AscenderOutline:`ascender.outline`,AscenderSolid:`ascender.solid`,CIQBridgeOutline:`ciq-bridge.outline`,CIQBridgeSolid:`ciq-bridge.solid`,FuzzballOutline:`fuzzball.outline`,FuzzballSolid:`fuzzball.solid`,RLCHardenedOutline:`rlc-hardened.outline`,RLCHardenedSolid:`rlc-hardened.solid`,RLCPlusOutline:`rlc-plus.outline`,RLCPlusSolid:`rlc-plus.solid`,RLCProAIOutline:`rlc-pro-ai.outline`,RLCProAISolid:`rlc-pro-ai.solid`,RLCProHardenedOutline:`rlc-pro-hardened.outline`,RLCProHardenedSolid:`rlc-pro-hardened.solid`,RLCProOutline:`rlc-pro.outline`,RLCProSolid:`rlc-pro.solid`,RockyLinuxOutline:`rocky-linux.outline`,RockyLinuxSolid:`rocky-linux.solid`,StratumOutline:`stratum.outline`,StratumSolid:`stratum.solid`,SupportOutline:`support.outline`,SupportSolid:`support.solid`,WarewulfOutline:`warewulf.outline`,WarewulfSolid:`warewulf.solid`},hr={AArrowDown:`AArrowDown`,AArrowUp:`AArrowUp`,ALargeSmall:`ALargeSmall`,Accessibility:`Accessibility`,Activity:`Activity`,AirVent:`AirVent`,Airplay:`Airplay`,AlarmClock:`AlarmClock`,AlarmClockCheck:`AlarmClockCheck`,AlarmClockMinus:`AlarmClockMinus`,AlarmClockOff:`AlarmClockOff`,AlarmClockPlus:`AlarmClockPlus`,AlarmSmoke:`AlarmSmoke`,Album:`Album`,AlignCenter:`AlignCenter`,AlignCenterHorizontal:`AlignCenterHorizontal`,AlignCenterVertical:`AlignCenterVertical`,AlignEndHorizontal:`AlignEndHorizontal`,AlignEndVertical:`AlignEndVertical`,AlignHorizontalDistributeCenter:`AlignHorizontalDistributeCenter`,AlignHorizontalDistributeEnd:`AlignHorizontalDistributeEnd`,AlignHorizontalDistributeStart:`AlignHorizontalDistributeStart`,AlignHorizontalJustifyCenter:`AlignHorizontalJustifyCenter`,AlignHorizontalJustifyEnd:`AlignHorizontalJustifyEnd`,AlignHorizontalJustifyStart:`AlignHorizontalJustifyStart`,AlignHorizontalSpaceAround:`AlignHorizontalSpaceAround`,AlignHorizontalSpaceBetween:`AlignHorizontalSpaceBetween`,AlignJustify:`AlignJustify`,AlignLeft:`AlignLeft`,AlignRight:`AlignRight`,AlignStartHorizontal:`AlignStartHorizontal`,AlignStartVertical:`AlignStartVertical`,AlignVerticalDistributeCenter:`AlignVerticalDistributeCenter`,AlignVerticalDistributeEnd:`AlignVerticalDistributeEnd`,AlignVerticalDistributeStart:`AlignVerticalDistributeStart`,AlignVerticalJustifyCenter:`AlignVerticalJustifyCenter`,AlignVerticalJustifyEnd:`AlignVerticalJustifyEnd`,AlignVerticalJustifyStart:`AlignVerticalJustifyStart`,AlignVerticalSpaceAround:`AlignVerticalSpaceAround`,AlignVerticalSpaceBetween:`AlignVerticalSpaceBetween`,Ambulance:`Ambulance`,Ampersand:`Ampersand`,Ampersands:`Ampersands`,Amphora:`Amphora`,Anchor:`Anchor`,Angry:`Angry`,Annoyed:`Annoyed`,Antenna:`Antenna`,Anvil:`Anvil`,Aperture:`Aperture`,AppWindow:`AppWindow`,AppWindowMac:`AppWindowMac`,Apple:`Apple`,Archive:`Archive`,ArchiveRestore:`ArchiveRestore`,ArchiveX:`ArchiveX`,Armchair:`Armchair`,ArrowBigDown:`ArrowBigDown`,ArrowBigDownDash:`ArrowBigDownDash`,ArrowBigLeft:`ArrowBigLeft`,ArrowBigLeftDash:`ArrowBigLeftDash`,ArrowBigRight:`ArrowBigRight`,ArrowBigRightDash:`ArrowBigRightDash`,ArrowBigUp:`ArrowBigUp`,ArrowBigUpDash:`ArrowBigUpDash`,ArrowDown:`ArrowDown`,ArrowDown01:`ArrowDown01`,ArrowDown10:`ArrowDown10`,ArrowDownAZ:`ArrowDownAZ`,ArrowDownFromLine:`ArrowDownFromLine`,ArrowDownLeft:`ArrowDownLeft`,ArrowDownNarrowWide:`ArrowDownNarrowWide`,ArrowDownRight:`ArrowDownRight`,ArrowDownToDot:`ArrowDownToDot`,ArrowDownToLine:`ArrowDownToLine`,ArrowDownUp:`ArrowDownUp`,ArrowDownWideNarrow:`ArrowDownWideNarrow`,ArrowDownZA:`ArrowDownZA`,ArrowLeft:`ArrowLeft`,ArrowLeftFromLine:`ArrowLeftFromLine`,ArrowLeftRight:`ArrowLeftRight`,ArrowLeftToLine:`ArrowLeftToLine`,ArrowRight:`ArrowRight`,ArrowRightFromLine:`ArrowRightFromLine`,ArrowRightLeft:`ArrowRightLeft`,ArrowRightToLine:`ArrowRightToLine`,ArrowUp:`ArrowUp`,ArrowUp01:`ArrowUp01`,ArrowUp10:`ArrowUp10`,ArrowUpAZ:`ArrowUpAZ`,ArrowUpDown:`ArrowUpDown`,ArrowUpFromDot:`ArrowUpFromDot`,ArrowUpFromLine:`ArrowUpFromLine`,ArrowUpLeft:`ArrowUpLeft`,ArrowUpNarrowWide:`ArrowUpNarrowWide`,ArrowUpRight:`ArrowUpRight`,ArrowUpToLine:`ArrowUpToLine`,ArrowUpWideNarrow:`ArrowUpWideNarrow`,ArrowUpZA:`ArrowUpZA`,ArrowsUpFromLine:`ArrowsUpFromLine`,Asterisk:`Asterisk`,AtSign:`AtSign`,Atom:`Atom`,AudioLines:`AudioLines`,AudioWaveform:`AudioWaveform`,Award:`Award`,Axe:`Axe`,Axis3d:`Axis3d`,Baby:`Baby`,Backpack:`Backpack`,Badge:`Badge`,BadgeAlert:`BadgeAlert`,BadgeCent:`BadgeCent`,BadgeCheck:`BadgeCheck`,BadgeDollarSign:`BadgeDollarSign`,BadgeEuro:`BadgeEuro`,BadgeHelp:`BadgeHelp`,BadgeIndianRupee:`BadgeIndianRupee`,BadgeInfo:`BadgeInfo`,BadgeJapaneseYen:`BadgeJapaneseYen`,BadgeMinus:`BadgeMinus`,BadgePercent:`BadgePercent`,BadgePlus:`BadgePlus`,BadgePoundSterling:`BadgePoundSterling`,BadgeRussianRuble:`BadgeRussianRuble`,BadgeSwissFranc:`BadgeSwissFranc`,BadgeX:`BadgeX`,BaggageClaim:`BaggageClaim`,Ban:`Ban`,Banana:`Banana`,Bandage:`Bandage`,Banknote:`Banknote`,BanknoteArrowDown:`BanknoteArrowDown`,BanknoteArrowUp:`BanknoteArrowUp`,BanknoteX:`BanknoteX`,Barcode:`Barcode`,Baseline:`Baseline`,Bath:`Bath`,Battery:`Battery`,BatteryCharging:`BatteryCharging`,BatteryFull:`BatteryFull`,BatteryLow:`BatteryLow`,BatteryMedium:`BatteryMedium`,BatteryPlus:`BatteryPlus`,BatteryWarning:`BatteryWarning`,Beaker:`Beaker`,Bean:`Bean`,BeanOff:`BeanOff`,Bed:`Bed`,BedDouble:`BedDouble`,BedSingle:`BedSingle`,Beef:`Beef`,Beer:`Beer`,BeerOff:`BeerOff`,Bell:`Bell`,BellDot:`BellDot`,BellElectric:`BellElectric`,BellMinus:`BellMinus`,BellOff:`BellOff`,BellPlus:`BellPlus`,BellRing:`BellRing`,BetweenHorizontalEnd:`BetweenHorizontalEnd`,BetweenHorizontalStart:`BetweenHorizontalStart`,BetweenVerticalEnd:`BetweenVerticalEnd`,BetweenVerticalStart:`BetweenVerticalStart`,BicepsFlexed:`BicepsFlexed`,Bike:`Bike`,Binary:`Binary`,Binoculars:`Binoculars`,Biohazard:`Biohazard`,Bird:`Bird`,Bitcoin:`Bitcoin`,Blend:`Blend`,Blinds:`Blinds`,Blocks:`Blocks`,Bluetooth:`Bluetooth`,BluetoothConnected:`BluetoothConnected`,BluetoothOff:`BluetoothOff`,BluetoothSearching:`BluetoothSearching`,Bold:`Bold`,Bolt:`Bolt`,Bomb:`Bomb`,Bone:`Bone`,Book:`Book`,BookA:`BookA`,BookAudio:`BookAudio`,BookCheck:`BookCheck`,BookCopy:`BookCopy`,BookDashed:`BookDashed`,BookDown:`BookDown`,BookHeadphones:`BookHeadphones`,BookHeart:`BookHeart`,BookImage:`BookImage`,BookKey:`BookKey`,BookLock:`BookLock`,BookMarked:`BookMarked`,BookMinus:`BookMinus`,BookOpen:`BookOpen`,BookOpenCheck:`BookOpenCheck`,BookOpenText:`BookOpenText`,BookPlus:`BookPlus`,BookText:`BookText`,BookType:`BookType`,BookUp:`BookUp`,BookUp2:`BookUp2`,BookUser:`BookUser`,BookX:`BookX`,Bookmark:`Bookmark`,BookmarkCheck:`BookmarkCheck`,BookmarkMinus:`BookmarkMinus`,BookmarkPlus:`BookmarkPlus`,BookmarkX:`BookmarkX`,BoomBox:`BoomBox`,Bot:`Bot`,BotMessageSquare:`BotMessageSquare`,BotOff:`BotOff`,BowArrow:`BowArrow`,Box:`Box`,Boxes:`Boxes`,Braces:`Braces`,Brackets:`Brackets`,Brain:`Brain`,BrainCircuit:`BrainCircuit`,BrainCog:`BrainCog`,BrickWall:`BrickWall`,BrickWallFire:`BrickWallFire`,Briefcase:`Briefcase`,BriefcaseBusiness:`BriefcaseBusiness`,BriefcaseConveyorBelt:`BriefcaseConveyorBelt`,BriefcaseMedical:`BriefcaseMedical`,BringToFront:`BringToFront`,Brush:`Brush`,BrushCleaning:`BrushCleaning`,Bubbles:`Bubbles`,Bug:`Bug`,BugOff:`BugOff`,BugPlay:`BugPlay`,Building:`Building`,Building2:`Building2`,Bus:`Bus`,BusFront:`BusFront`,Cable:`Cable`,CableCar:`CableCar`,Cake:`Cake`,CakeSlice:`CakeSlice`,Calculator:`Calculator`,Calendar:`Calendar`,Calendar1:`Calendar1`,CalendarArrowDown:`CalendarArrowDown`,CalendarArrowUp:`CalendarArrowUp`,CalendarCheck:`CalendarCheck`,CalendarCheck2:`CalendarCheck2`,CalendarClock:`CalendarClock`,CalendarCog:`CalendarCog`,CalendarDays:`CalendarDays`,CalendarFold:`CalendarFold`,CalendarHeart:`CalendarHeart`,CalendarMinus:`CalendarMinus`,CalendarMinus2:`CalendarMinus2`,CalendarOff:`CalendarOff`,CalendarPlus:`CalendarPlus`,CalendarPlus2:`CalendarPlus2`,CalendarRange:`CalendarRange`,CalendarSearch:`CalendarSearch`,CalendarSync:`CalendarSync`,CalendarX:`CalendarX`,CalendarX2:`CalendarX2`,Camera:`Camera`,CameraOff:`CameraOff`,Candy:`Candy`,CandyCane:`CandyCane`,CandyOff:`CandyOff`,Cannabis:`Cannabis`,Captions:`Captions`,CaptionsOff:`CaptionsOff`,Car:`Car`,CarFront:`CarFront`,CarTaxiFront:`CarTaxiFront`,Caravan:`Caravan`,Carrot:`Carrot`,CaseLower:`CaseLower`,CaseSensitive:`CaseSensitive`,CaseUpper:`CaseUpper`,CassetteTape:`CassetteTape`,Cast:`Cast`,Castle:`Castle`,Cat:`Cat`,Cctv:`Cctv`,ChartArea:`ChartArea`,ChartBar:`ChartBar`,ChartBarBig:`ChartBarBig`,ChartBarDecreasing:`ChartBarDecreasing`,ChartBarIncreasing:`ChartBarIncreasing`,ChartBarStacked:`ChartBarStacked`,ChartCandlestick:`ChartCandlestick`,ChartColumn:`ChartColumn`,ChartColumnBig:`ChartColumnBig`,ChartColumnDecreasing:`ChartColumnDecreasing`,ChartColumnIncreasing:`ChartColumnIncreasing`,ChartColumnStacked:`ChartColumnStacked`,ChartGantt:`ChartGantt`,ChartLine:`ChartLine`,ChartNetwork:`ChartNetwork`,ChartNoAxesColumn:`ChartNoAxesColumn`,ChartNoAxesColumnDecreasing:`ChartNoAxesColumnDecreasing`,ChartNoAxesColumnIncreasing:`ChartNoAxesColumnIncreasing`,ChartNoAxesCombined:`ChartNoAxesCombined`,ChartNoAxesGantt:`ChartNoAxesGantt`,ChartPie:`ChartPie`,ChartScatter:`ChartScatter`,ChartSpline:`ChartSpline`,Check:`Check`,CheckCheck:`CheckCheck`,CheckLine:`CheckLine`,ChefHat:`ChefHat`,Cherry:`Cherry`,ChevronDown:`ChevronDown`,ChevronFirst:`ChevronFirst`,ChevronLast:`ChevronLast`,ChevronLeft:`ChevronLeft`,ChevronRight:`ChevronRight`,ChevronUp:`ChevronUp`,ChevronsDown:`ChevronsDown`,ChevronsDownUp:`ChevronsDownUp`,ChevronsLeft:`ChevronsLeft`,ChevronsLeftRight:`ChevronsLeftRight`,ChevronsLeftRightEllipsis:`ChevronsLeftRightEllipsis`,ChevronsRight:`ChevronsRight`,ChevronsRightLeft:`ChevronsRightLeft`,ChevronsUp:`ChevronsUp`,ChevronsUpDown:`ChevronsUpDown`,Chrome:`Chrome`,Church:`Church`,Cigarette:`Cigarette`,CigaretteOff:`CigaretteOff`,Circle:`Circle`,CircleAlert:`CircleAlert`,CircleArrowDown:`CircleArrowDown`,CircleArrowLeft:`CircleArrowLeft`,CircleArrowOutDownLeft:`CircleArrowOutDownLeft`,CircleArrowOutDownRight:`CircleArrowOutDownRight`,CircleArrowOutUpLeft:`CircleArrowOutUpLeft`,CircleArrowOutUpRight:`CircleArrowOutUpRight`,CircleArrowRight:`CircleArrowRight`,CircleArrowUp:`CircleArrowUp`,CircleCheck:`CircleCheck`,CircleCheckBig:`CircleCheckBig`,CircleChevronDown:`CircleChevronDown`,CircleChevronLeft:`CircleChevronLeft`,CircleChevronRight:`CircleChevronRight`,CircleChevronUp:`CircleChevronUp`,CircleDashed:`CircleDashed`,CircleDivide:`CircleDivide`,CircleDollarSign:`CircleDollarSign`,CircleDot:`CircleDot`,CircleDotDashed:`CircleDotDashed`,CircleEllipsis:`CircleEllipsis`,CircleEqual:`CircleEqual`,CircleFadingArrowUp:`CircleFadingArrowUp`,CircleFadingPlus:`CircleFadingPlus`,CircleGauge:`CircleGauge`,CircleHelp:`CircleHelp`,CircleMinus:`CircleMinus`,CircleOff:`CircleOff`,CircleParking:`CircleParking`,CircleParkingOff:`CircleParkingOff`,CirclePause:`CirclePause`,CirclePercent:`CirclePercent`,CirclePlay:`CirclePlay`,CirclePlus:`CirclePlus`,CirclePower:`CirclePower`,CircleSlash:`CircleSlash`,CircleSlash2:`CircleSlash2`,CircleSmall:`CircleSmall`,CircleStop:`CircleStop`,CircleUser:`CircleUser`,CircleUserRound:`CircleUserRound`,CircleX:`CircleX`,CircuitBoard:`CircuitBoard`,Citrus:`Citrus`,Clapperboard:`Clapperboard`,Clipboard:`Clipboard`,ClipboardCheck:`ClipboardCheck`,ClipboardCopy:`ClipboardCopy`,ClipboardList:`ClipboardList`,ClipboardMinus:`ClipboardMinus`,ClipboardPaste:`ClipboardPaste`,ClipboardPen:`ClipboardPen`,ClipboardPenLine:`ClipboardPenLine`,ClipboardPlus:`ClipboardPlus`,ClipboardType:`ClipboardType`,ClipboardX:`ClipboardX`,Clock:`Clock`,Clock1:`Clock1`,Clock10:`Clock10`,Clock11:`Clock11`,Clock12:`Clock12`,Clock2:`Clock2`,Clock3:`Clock3`,Clock4:`Clock4`,Clock5:`Clock5`,Clock6:`Clock6`,Clock7:`Clock7`,Clock8:`Clock8`,Clock9:`Clock9`,ClockAlert:`ClockAlert`,ClockArrowDown:`ClockArrowDown`,ClockArrowUp:`ClockArrowUp`,ClockFading:`ClockFading`,ClockPlus:`ClockPlus`,Cloud:`Cloud`,CloudAlert:`CloudAlert`,CloudCog:`CloudCog`,CloudDownload:`CloudDownload`,CloudDrizzle:`CloudDrizzle`,CloudFog:`CloudFog`,CloudHail:`CloudHail`,CloudLightning:`CloudLightning`,CloudMoon:`CloudMoon`,CloudMoonRain:`CloudMoonRain`,CloudOff:`CloudOff`,CloudRain:`CloudRain`,CloudRainWind:`CloudRainWind`,CloudSnow:`CloudSnow`,CloudSun:`CloudSun`,CloudSunRain:`CloudSunRain`,CloudUpload:`CloudUpload`,Cloudy:`Cloudy`,Clover:`Clover`,Club:`Club`,Code:`Code`,CodeXml:`CodeXml`,Codepen:`Codepen`,Codesandbox:`Codesandbox`,Coffee:`Coffee`,Cog:`Cog`,Coins:`Coins`,Columns2:`Columns2`,Columns3:`Columns3`,Columns3Cog:`Columns3Cog`,Columns4:`Columns4`,Combine:`Combine`,Command:`Command`,Compass:`Compass`,Component:`Component`,Computer:`Computer`,ConciergeBell:`ConciergeBell`,Cone:`Cone`,Construction:`Construction`,Contact:`Contact`,ContactRound:`ContactRound`,Container:`Container`,Contrast:`Contrast`,Cookie:`Cookie`,CookingPot:`CookingPot`,Copy:`Copy`,CopyCheck:`CopyCheck`,CopyMinus:`CopyMinus`,CopyPlus:`CopyPlus`,CopySlash:`CopySlash`,CopyX:`CopyX`,Copyleft:`Copyleft`,Copyright:`Copyright`,CornerDownLeft:`CornerDownLeft`,CornerDownRight:`CornerDownRight`,CornerLeftDown:`CornerLeftDown`,CornerLeftUp:`CornerLeftUp`,CornerRightDown:`CornerRightDown`,CornerRightUp:`CornerRightUp`,CornerUpLeft:`CornerUpLeft`,CornerUpRight:`CornerUpRight`,Cpu:`Cpu`,CreativeCommons:`CreativeCommons`,CreditCard:`CreditCard`,Croissant:`Croissant`,Crop:`Crop`,Cross:`Cross`,Crosshair:`Crosshair`,Crown:`Crown`,Cuboid:`Cuboid`,CupSoda:`CupSoda`,Currency:`Currency`,Cylinder:`Cylinder`,Dam:`Dam`,Database:`Database`,DatabaseBackup:`DatabaseBackup`,DatabaseZap:`DatabaseZap`,DecimalsArrowLeft:`DecimalsArrowLeft`,DecimalsArrowRight:`DecimalsArrowRight`,Delete:`Delete`,Dessert:`Dessert`,Diameter:`Diameter`,Diamond:`Diamond`,DiamondMinus:`DiamondMinus`,DiamondPercent:`DiamondPercent`,DiamondPlus:`DiamondPlus`,Dice1:`Dice1`,Dice2:`Dice2`,Dice3:`Dice3`,Dice4:`Dice4`,Dice5:`Dice5`,Dice6:`Dice6`,Dices:`Dices`,Diff:`Diff`,Disc:`Disc`,Disc2:`Disc2`,Disc3:`Disc3`,DiscAlbum:`DiscAlbum`,Divide:`Divide`,Dna:`Dna`,DnaOff:`DnaOff`,Dock:`Dock`,Dog:`Dog`,DollarSign:`DollarSign`,Donut:`Donut`,DoorClosed:`DoorClosed`,DoorClosedLocked:`DoorClosedLocked`,DoorOpen:`DoorOpen`,Dot:`Dot`,Download:`Download`,DraftingCompass:`DraftingCompass`,Drama:`Drama`,Dribbble:`Dribbble`,Drill:`Drill`,Droplet:`Droplet`,DropletOff:`DropletOff`,Droplets:`Droplets`,Drum:`Drum`,Drumstick:`Drumstick`,Dumbbell:`Dumbbell`,Ear:`Ear`,EarOff:`EarOff`,Earth:`Earth`,EarthLock:`EarthLock`,Eclipse:`Eclipse`,Egg:`Egg`,EggFried:`EggFried`,EggOff:`EggOff`,Ellipsis:`Ellipsis`,EllipsisVertical:`EllipsisVertical`,Equal:`Equal`,EqualApproximately:`EqualApproximately`,EqualNot:`EqualNot`,Eraser:`Eraser`,EthernetPort:`EthernetPort`,Euro:`Euro`,Expand:`Expand`,ExternalLink:`ExternalLink`,Eye:`Eye`,EyeClosed:`EyeClosed`,EyeOff:`EyeOff`,Facebook:`Facebook`,Factory:`Factory`,Fan:`Fan`,FastForward:`FastForward`,Feather:`Feather`,Fence:`Fence`,FerrisWheel:`FerrisWheel`,Figma:`Figma`,File:`File`,FileArchive:`FileArchive`,FileAudio:`FileAudio`,FileAudio2:`FileAudio2`,FileAxis3d:`FileAxis3d`,FileBadge:`FileBadge`,FileBadge2:`FileBadge2`,FileBox:`FileBox`,FileChartColumn:`FileChartColumn`,FileChartColumnIncreasing:`FileChartColumnIncreasing`,FileChartLine:`FileChartLine`,FileChartPie:`FileChartPie`,FileCheck:`FileCheck`,FileCheck2:`FileCheck2`,FileClock:`FileClock`,FileCode:`FileCode`,FileCode2:`FileCode2`,FileCog:`FileCog`,FileDiff:`FileDiff`,FileDigit:`FileDigit`,FileDown:`FileDown`,FileHeart:`FileHeart`,FileImage:`FileImage`,FileInput:`FileInput`,FileJson:`FileJson`,FileJson2:`FileJson2`,FileKey:`FileKey`,FileKey2:`FileKey2`,FileLock:`FileLock`,FileLock2:`FileLock2`,FileMinus:`FileMinus`,FileMinus2:`FileMinus2`,FileMusic:`FileMusic`,FileOutput:`FileOutput`,FilePen:`FilePen`,FilePenLine:`FilePenLine`,FilePlus:`FilePlus`,FilePlus2:`FilePlus2`,FileQuestion:`FileQuestion`,FileScan:`FileScan`,FileSearch:`FileSearch`,FileSearch2:`FileSearch2`,FileSliders:`FileSliders`,FileSpreadsheet:`FileSpreadsheet`,FileStack:`FileStack`,FileSymlink:`FileSymlink`,FileTerminal:`FileTerminal`,FileText:`FileText`,FileType:`FileType`,FileType2:`FileType2`,FileUp:`FileUp`,FileUser:`FileUser`,FileVideo:`FileVideo`,FileVideo2:`FileVideo2`,FileVolume:`FileVolume`,FileVolume2:`FileVolume2`,FileWarning:`FileWarning`,FileX:`FileX`,FileX2:`FileX2`,Files:`Files`,Film:`Film`,Fingerprint:`Fingerprint`,FireExtinguisher:`FireExtinguisher`,Fish:`Fish`,FishOff:`FishOff`,FishSymbol:`FishSymbol`,Flag:`Flag`,FlagOff:`FlagOff`,FlagTriangleLeft:`FlagTriangleLeft`,FlagTriangleRight:`FlagTriangleRight`,Flame:`Flame`,FlameKindling:`FlameKindling`,Flashlight:`Flashlight`,FlashlightOff:`FlashlightOff`,FlaskConical:`FlaskConical`,FlaskConicalOff:`FlaskConicalOff`,FlaskRound:`FlaskRound`,FlipHorizontal:`FlipHorizontal`,FlipHorizontal2:`FlipHorizontal2`,FlipVertical:`FlipVertical`,FlipVertical2:`FlipVertical2`,Flower:`Flower`,Flower2:`Flower2`,Focus:`Focus`,FoldHorizontal:`FoldHorizontal`,FoldVertical:`FoldVertical`,Folder:`Folder`,FolderArchive:`FolderArchive`,FolderCheck:`FolderCheck`,FolderClock:`FolderClock`,FolderClosed:`FolderClosed`,FolderCode:`FolderCode`,FolderCog:`FolderCog`,FolderDot:`FolderDot`,FolderDown:`FolderDown`,FolderGit:`FolderGit`,FolderGit2:`FolderGit2`,FolderHeart:`FolderHeart`,FolderInput:`FolderInput`,FolderKanban:`FolderKanban`,FolderKey:`FolderKey`,FolderLock:`FolderLock`,FolderMinus:`FolderMinus`,FolderOpen:`FolderOpen`,FolderOpenDot:`FolderOpenDot`,FolderOutput:`FolderOutput`,FolderPen:`FolderPen`,FolderPlus:`FolderPlus`,FolderRoot:`FolderRoot`,FolderSearch:`FolderSearch`,FolderSearch2:`FolderSearch2`,FolderSymlink:`FolderSymlink`,FolderSync:`FolderSync`,FolderTree:`FolderTree`,FolderUp:`FolderUp`,FolderX:`FolderX`,Folders:`Folders`,Footprints:`Footprints`,Forklift:`Forklift`,Forward:`Forward`,Frame:`Frame`,Framer:`Framer`,Frown:`Frown`,Fuel:`Fuel`,Fullscreen:`Fullscreen`,Funnel:`Funnel`,FunnelPlus:`FunnelPlus`,FunnelX:`FunnelX`,GalleryHorizontal:`GalleryHorizontal`,GalleryHorizontalEnd:`GalleryHorizontalEnd`,GalleryThumbnails:`GalleryThumbnails`,GalleryVertical:`GalleryVertical`,GalleryVerticalEnd:`GalleryVerticalEnd`,Gamepad:`Gamepad`,Gamepad2:`Gamepad2`,Gauge:`Gauge`,Gavel:`Gavel`,Gem:`Gem`,Ghost:`Ghost`,Gift:`Gift`,GitBranch:`GitBranch`,GitBranchPlus:`GitBranchPlus`,GitCommitHorizontal:`GitCommitHorizontal`,GitCommitVertical:`GitCommitVertical`,GitCompare:`GitCompare`,GitCompareArrows:`GitCompareArrows`,GitFork:`GitFork`,GitGraph:`GitGraph`,GitMerge:`GitMerge`,GitPullRequest:`GitPullRequest`,GitPullRequestArrow:`GitPullRequestArrow`,GitPullRequestClosed:`GitPullRequestClosed`,GitPullRequestCreate:`GitPullRequestCreate`,GitPullRequestCreateArrow:`GitPullRequestCreateArrow`,GitPullRequestDraft:`GitPullRequestDraft`,Github:`Github`,Gitlab:`Gitlab`,GlassWater:`GlassWater`,Glasses:`Glasses`,Globe:`Globe`,GlobeLock:`GlobeLock`,Goal:`Goal`,Gpu:`Gpu`,Grab:`Grab`,GraduationCap:`GraduationCap`,Grape:`Grape`,Grid2x2:`Grid2x2`,Grid2x2Check:`Grid2x2Check`,Grid2x2Plus:`Grid2x2Plus`,Grid2x2X:`Grid2x2X`,Grid3x3:`Grid3x3`,Grip:`Grip`,GripHorizontal:`GripHorizontal`,GripVertical:`GripVertical`,Group:`Group`,Guitar:`Guitar`,Ham:`Ham`,Hamburger:`Hamburger`,Hammer:`Hammer`,Hand:`Hand`,HandCoins:`HandCoins`,HandHeart:`HandHeart`,HandHelping:`HandHelping`,HandMetal:`HandMetal`,HandPlatter:`HandPlatter`,Handshake:`Handshake`,HardDrive:`HardDrive`,HardDriveDownload:`HardDriveDownload`,HardDriveUpload:`HardDriveUpload`,HardHat:`HardHat`,Hash:`Hash`,Haze:`Haze`,HdmiPort:`HdmiPort`,Heading:`Heading`,Heading1:`Heading1`,Heading2:`Heading2`,Heading3:`Heading3`,Heading4:`Heading4`,Heading5:`Heading5`,Heading6:`Heading6`,HeadphoneOff:`HeadphoneOff`,Headphones:`Headphones`,Headset:`Headset`,Heart:`Heart`,HeartCrack:`HeartCrack`,HeartHandshake:`HeartHandshake`,HeartMinus:`HeartMinus`,HeartOff:`HeartOff`,HeartPlus:`HeartPlus`,HeartPulse:`HeartPulse`,Heater:`Heater`,Hexagon:`Hexagon`,Highlighter:`Highlighter`,History:`History`,Hop:`Hop`,HopOff:`HopOff`,Hospital:`Hospital`,Hotel:`Hotel`,Hourglass:`Hourglass`,House:`House`,HousePlug:`HousePlug`,HousePlus:`HousePlus`,HouseWifi:`HouseWifi`,IceCreamBowl:`IceCreamBowl`,IceCreamCone:`IceCreamCone`,IdCard:`IdCard`,Image:`Image`,ImageDown:`ImageDown`,ImageMinus:`ImageMinus`,ImageOff:`ImageOff`,ImagePlay:`ImagePlay`,ImagePlus:`ImagePlus`,ImageUp:`ImageUp`,ImageUpscale:`ImageUpscale`,Images:`Images`,Import:`Import`,Inbox:`Inbox`,IndentDecrease:`IndentDecrease`,IndentIncrease:`IndentIncrease`,IndianRupee:`IndianRupee`,Infinity:`Infinity`,Info:`Info`,InspectionPanel:`InspectionPanel`,Instagram:`Instagram`,Italic:`Italic`,IterationCcw:`IterationCcw`,IterationCw:`IterationCw`,JapaneseYen:`JapaneseYen`,Joystick:`Joystick`,Kanban:`Kanban`,Key:`Key`,KeyRound:`KeyRound`,KeySquare:`KeySquare`,Keyboard:`Keyboard`,KeyboardMusic:`KeyboardMusic`,KeyboardOff:`KeyboardOff`,Lamp:`Lamp`,LampCeiling:`LampCeiling`,LampDesk:`LampDesk`,LampFloor:`LampFloor`,LampWallDown:`LampWallDown`,LampWallUp:`LampWallUp`,LandPlot:`LandPlot`,Landmark:`Landmark`,Languages:`Languages`,Laptop:`Laptop`,LaptopMinimal:`LaptopMinimal`,LaptopMinimalCheck:`LaptopMinimalCheck`,Lasso:`Lasso`,LassoSelect:`LassoSelect`,Laugh:`Laugh`,Layers:`Layers`,Layers2:`Layers2`,LayoutDashboard:`LayoutDashboard`,LayoutGrid:`LayoutGrid`,LayoutList:`LayoutList`,LayoutPanelLeft:`LayoutPanelLeft`,LayoutPanelTop:`LayoutPanelTop`,LayoutTemplate:`LayoutTemplate`,Leaf:`Leaf`,LeafyGreen:`LeafyGreen`,Lectern:`Lectern`,LetterText:`LetterText`,Library:`Library`,LibraryBig:`LibraryBig`,LifeBuoy:`LifeBuoy`,Ligature:`Ligature`,Lightbulb:`Lightbulb`,LightbulbOff:`LightbulbOff`,Link:`Link`,Link2:`Link2`,Link2Off:`Link2Off`,Linkedin:`Linkedin`,List:`List`,ListCheck:`ListCheck`,ListChecks:`ListChecks`,ListCollapse:`ListCollapse`,ListEnd:`ListEnd`,ListFilter:`ListFilter`,ListFilterPlus:`ListFilterPlus`,ListMinus:`ListMinus`,ListMusic:`ListMusic`,ListOrdered:`ListOrdered`,ListPlus:`ListPlus`,ListRestart:`ListRestart`,ListStart:`ListStart`,ListTodo:`ListTodo`,ListTree:`ListTree`,ListVideo:`ListVideo`,ListX:`ListX`,Loader:`Loader`,LoaderCircle:`LoaderCircle`,LoaderPinwheel:`LoaderPinwheel`,Locate:`Locate`,LocateFixed:`LocateFixed`,LocateOff:`LocateOff`,LocationEdit:`LocationEdit`,Lock:`Lock`,LockKeyhole:`LockKeyhole`,LockKeyholeOpen:`LockKeyholeOpen`,LockOpen:`LockOpen`,LogIn:`LogIn`,LogOut:`LogOut`,Logs:`Logs`,Lollipop:`Lollipop`,Luggage:`Luggage`,Magnet:`Magnet`,Mail:`Mail`,MailCheck:`MailCheck`,MailMinus:`MailMinus`,MailOpen:`MailOpen`,MailPlus:`MailPlus`,MailQuestion:`MailQuestion`,MailSearch:`MailSearch`,MailWarning:`MailWarning`,MailX:`MailX`,Mailbox:`Mailbox`,Mails:`Mails`,Map:`Map`,MapPin:`MapPin`,MapPinCheck:`MapPinCheck`,MapPinCheckInside:`MapPinCheckInside`,MapPinHouse:`MapPinHouse`,MapPinMinus:`MapPinMinus`,MapPinMinusInside:`MapPinMinusInside`,MapPinOff:`MapPinOff`,MapPinPlus:`MapPinPlus`,MapPinPlusInside:`MapPinPlusInside`,MapPinX:`MapPinX`,MapPinXInside:`MapPinXInside`,MapPinned:`MapPinned`,MapPlus:`MapPlus`,Mars:`Mars`,MarsStroke:`MarsStroke`,Martini:`Martini`,Maximize:`Maximize`,Maximize2:`Maximize2`,Medal:`Medal`,Megaphone:`Megaphone`,MegaphoneOff:`MegaphoneOff`,Meh:`Meh`,MemoryStick:`MemoryStick`,Menu:`Menu`,Merge:`Merge`,MessageCircle:`MessageCircle`,MessageCircleCode:`MessageCircleCode`,MessageCircleDashed:`MessageCircleDashed`,MessageCircleHeart:`MessageCircleHeart`,MessageCircleMore:`MessageCircleMore`,MessageCircleOff:`MessageCircleOff`,MessageCirclePlus:`MessageCirclePlus`,MessageCircleQuestion:`MessageCircleQuestion`,MessageCircleReply:`MessageCircleReply`,MessageCircleWarning:`MessageCircleWarning`,MessageCircleX:`MessageCircleX`,MessageSquare:`MessageSquare`,MessageSquareCode:`MessageSquareCode`,MessageSquareDashed:`MessageSquareDashed`,MessageSquareDiff:`MessageSquareDiff`,MessageSquareDot:`MessageSquareDot`,MessageSquareHeart:`MessageSquareHeart`,MessageSquareLock:`MessageSquareLock`,MessageSquareMore:`MessageSquareMore`,MessageSquareOff:`MessageSquareOff`,MessageSquarePlus:`MessageSquarePlus`,MessageSquareQuote:`MessageSquareQuote`,MessageSquareReply:`MessageSquareReply`,MessageSquareShare:`MessageSquareShare`,MessageSquareText:`MessageSquareText`,MessageSquareWarning:`MessageSquareWarning`,MessageSquareX:`MessageSquareX`,MessagesSquare:`MessagesSquare`,Mic:`Mic`,MicOff:`MicOff`,MicVocal:`MicVocal`,Microchip:`Microchip`,Microscope:`Microscope`,Microwave:`Microwave`,Milestone:`Milestone`,Milk:`Milk`,MilkOff:`MilkOff`,Minimize:`Minimize`,Minimize2:`Minimize2`,Minus:`Minus`,Monitor:`Monitor`,MonitorCheck:`MonitorCheck`,MonitorCog:`MonitorCog`,MonitorDot:`MonitorDot`,MonitorDown:`MonitorDown`,MonitorOff:`MonitorOff`,MonitorPause:`MonitorPause`,MonitorPlay:`MonitorPlay`,MonitorSmartphone:`MonitorSmartphone`,MonitorSpeaker:`MonitorSpeaker`,MonitorStop:`MonitorStop`,MonitorUp:`MonitorUp`,MonitorX:`MonitorX`,Moon:`Moon`,MoonStar:`MoonStar`,Mountain:`Mountain`,MountainSnow:`MountainSnow`,Mouse:`Mouse`,MouseOff:`MouseOff`,MousePointer:`MousePointer`,MousePointer2:`MousePointer2`,MousePointerBan:`MousePointerBan`,MousePointerClick:`MousePointerClick`,Move:`Move`,Move3d:`Move3d`,MoveDiagonal:`MoveDiagonal`,MoveDiagonal2:`MoveDiagonal2`,MoveDown:`MoveDown`,MoveDownLeft:`MoveDownLeft`,MoveDownRight:`MoveDownRight`,MoveHorizontal:`MoveHorizontal`,MoveLeft:`MoveLeft`,MoveRight:`MoveRight`,MoveUp:`MoveUp`,MoveUpLeft:`MoveUpLeft`,MoveUpRight:`MoveUpRight`,MoveVertical:`MoveVertical`,Music:`Music`,Music2:`Music2`,Music3:`Music3`,Music4:`Music4`,Navigation:`Navigation`,Navigation2:`Navigation2`,Navigation2Off:`Navigation2Off`,NavigationOff:`NavigationOff`,Network:`Network`,Newspaper:`Newspaper`,Nfc:`Nfc`,NonBinary:`NonBinary`,Notebook:`Notebook`,NotebookPen:`NotebookPen`,NotebookTabs:`NotebookTabs`,NotebookText:`NotebookText`,NotepadText:`NotepadText`,NotepadTextDashed:`NotepadTextDashed`,Nut:`Nut`,NutOff:`NutOff`,Octagon:`Octagon`,OctagonAlert:`OctagonAlert`,OctagonMinus:`OctagonMinus`,OctagonPause:`OctagonPause`,OctagonX:`OctagonX`,Omega:`Omega`,Option:`Option`,Orbit:`Orbit`,Origami:`Origami`,Package:`Package`,Package2:`Package2`,PackageCheck:`PackageCheck`,PackageMinus:`PackageMinus`,PackageOpen:`PackageOpen`,PackagePlus:`PackagePlus`,PackageSearch:`PackageSearch`,PackageX:`PackageX`,PaintBucket:`PaintBucket`,PaintRoller:`PaintRoller`,Paintbrush:`Paintbrush`,PaintbrushVertical:`PaintbrushVertical`,Palette:`Palette`,Panda:`Panda`,PanelBottom:`PanelBottom`,PanelBottomClose:`PanelBottomClose`,PanelBottomDashed:`PanelBottomDashed`,PanelBottomOpen:`PanelBottomOpen`,PanelLeft:`PanelLeft`,PanelLeftClose:`PanelLeftClose`,PanelLeftDashed:`PanelLeftDashed`,PanelLeftOpen:`PanelLeftOpen`,PanelRight:`PanelRight`,PanelRightClose:`PanelRightClose`,PanelRightDashed:`PanelRightDashed`,PanelRightOpen:`PanelRightOpen`,PanelTop:`PanelTop`,PanelTopClose:`PanelTopClose`,PanelTopDashed:`PanelTopDashed`,PanelTopOpen:`PanelTopOpen`,PanelsLeftBottom:`PanelsLeftBottom`,PanelsRightBottom:`PanelsRightBottom`,PanelsTopLeft:`PanelsTopLeft`,Paperclip:`Paperclip`,Parentheses:`Parentheses`,ParkingMeter:`ParkingMeter`,PartyPopper:`PartyPopper`,Pause:`Pause`,PawPrint:`PawPrint`,PcCase:`PcCase`,Pen:`Pen`,PenLine:`PenLine`,PenOff:`PenOff`,PenTool:`PenTool`,Pencil:`Pencil`,PencilLine:`PencilLine`,PencilOff:`PencilOff`,PencilRuler:`PencilRuler`,Pentagon:`Pentagon`,Percent:`Percent`,PersonStanding:`PersonStanding`,PhilippinePeso:`PhilippinePeso`,Phone:`Phone`,PhoneCall:`PhoneCall`,PhoneForwarded:`PhoneForwarded`,PhoneIncoming:`PhoneIncoming`,PhoneMissed:`PhoneMissed`,PhoneOff:`PhoneOff`,PhoneOutgoing:`PhoneOutgoing`,Pi:`Pi`,Piano:`Piano`,Pickaxe:`Pickaxe`,PictureInPicture:`PictureInPicture`,PictureInPicture2:`PictureInPicture2`,PiggyBank:`PiggyBank`,Pilcrow:`Pilcrow`,PilcrowLeft:`PilcrowLeft`,PilcrowRight:`PilcrowRight`,Pill:`Pill`,PillBottle:`PillBottle`,Pin:`Pin`,PinOff:`PinOff`,Pipette:`Pipette`,Pizza:`Pizza`,Plane:`Plane`,PlaneLanding:`PlaneLanding`,PlaneTakeoff:`PlaneTakeoff`,Play:`Play`,Plug:`Plug`,Plug2:`Plug2`,PlugZap:`PlugZap`,Plus:`Plus`,Pocket:`Pocket`,PocketKnife:`PocketKnife`,Podcast:`Podcast`,Pointer:`Pointer`,PointerOff:`PointerOff`,Popcorn:`Popcorn`,Popsicle:`Popsicle`,PoundSterling:`PoundSterling`,Power:`Power`,PowerOff:`PowerOff`,Presentation:`Presentation`,Printer:`Printer`,PrinterCheck:`PrinterCheck`,Projector:`Projector`,Proportions:`Proportions`,Puzzle:`Puzzle`,Pyramid:`Pyramid`,QrCode:`QrCode`,Quote:`Quote`,Rabbit:`Rabbit`,Radar:`Radar`,Radiation:`Radiation`,Radical:`Radical`,Radio:`Radio`,RadioReceiver:`RadioReceiver`,RadioTower:`RadioTower`,Radius:`Radius`,RailSymbol:`RailSymbol`,Rainbow:`Rainbow`,Rat:`Rat`,Ratio:`Ratio`,Receipt:`Receipt`,ReceiptCent:`ReceiptCent`,ReceiptEuro:`ReceiptEuro`,ReceiptIndianRupee:`ReceiptIndianRupee`,ReceiptJapaneseYen:`ReceiptJapaneseYen`,ReceiptPoundSterling:`ReceiptPoundSterling`,ReceiptRussianRuble:`ReceiptRussianRuble`,ReceiptSwissFranc:`ReceiptSwissFranc`,ReceiptText:`ReceiptText`,RectangleEllipsis:`RectangleEllipsis`,RectangleGoggles:`RectangleGoggles`,RectangleHorizontal:`RectangleHorizontal`,RectangleVertical:`RectangleVertical`,Recycle:`Recycle`,Redo:`Redo`,Redo2:`Redo2`,RedoDot:`RedoDot`,RefreshCcw:`RefreshCcw`,RefreshCcwDot:`RefreshCcwDot`,RefreshCw:`RefreshCw`,RefreshCwOff:`RefreshCwOff`,Refrigerator:`Refrigerator`,Regex:`Regex`,RemoveFormatting:`RemoveFormatting`,Repeat:`Repeat`,Repeat1:`Repeat1`,Repeat2:`Repeat2`,Replace:`Replace`,ReplaceAll:`ReplaceAll`,Reply:`Reply`,ReplyAll:`ReplyAll`,Rewind:`Rewind`,Ribbon:`Ribbon`,Rocket:`Rocket`,RockingChair:`RockingChair`,RollerCoaster:`RollerCoaster`,Rotate3d:`Rotate3d`,RotateCcw:`RotateCcw`,RotateCcwKey:`RotateCcwKey`,RotateCcwSquare:`RotateCcwSquare`,RotateCw:`RotateCw`,RotateCwSquare:`RotateCwSquare`,Route:`Route`,RouteOff:`RouteOff`,Router:`Router`,Rows2:`Rows2`,Rows3:`Rows3`,Rows4:`Rows4`,Rss:`Rss`,Ruler:`Ruler`,RulerDimensionLine:`RulerDimensionLine`,RussianRuble:`RussianRuble`,Sailboat:`Sailboat`,Salad:`Salad`,Sandwich:`Sandwich`,Satellite:`Satellite`,SatelliteDish:`SatelliteDish`,SaudiRiyal:`SaudiRiyal`,Save:`Save`,SaveAll:`SaveAll`,SaveOff:`SaveOff`,Scale:`Scale`,Scale3d:`Scale3d`,Scaling:`Scaling`,Scan:`Scan`,ScanBarcode:`ScanBarcode`,ScanEye:`ScanEye`,ScanFace:`ScanFace`,ScanHeart:`ScanHeart`,ScanLine:`ScanLine`,ScanQrCode:`ScanQrCode`,ScanSearch:`ScanSearch`,ScanText:`ScanText`,School:`School`,Scissors:`Scissors`,ScissorsLineDashed:`ScissorsLineDashed`,ScreenShare:`ScreenShare`,ScreenShareOff:`ScreenShareOff`,Scroll:`Scroll`,ScrollText:`ScrollText`,Search:`Search`,SearchCheck:`SearchCheck`,SearchCode:`SearchCode`,SearchSlash:`SearchSlash`,SearchX:`SearchX`,Section:`Section`,Send:`Send`,SendHorizontal:`SendHorizontal`,SendToBack:`SendToBack`,SeparatorHorizontal:`SeparatorHorizontal`,SeparatorVertical:`SeparatorVertical`,Server:`Server`,ServerCog:`ServerCog`,ServerCrash:`ServerCrash`,ServerOff:`ServerOff`,Settings:`Settings`,Settings2:`Settings2`,Shapes:`Shapes`,Share:`Share`,Share2:`Share2`,Sheet:`Sheet`,Shell:`Shell`,Shield:`Shield`,ShieldAlert:`ShieldAlert`,ShieldBan:`ShieldBan`,ShieldCheck:`ShieldCheck`,ShieldEllipsis:`ShieldEllipsis`,ShieldHalf:`ShieldHalf`,ShieldMinus:`ShieldMinus`,ShieldOff:`ShieldOff`,ShieldPlus:`ShieldPlus`,ShieldQuestion:`ShieldQuestion`,ShieldUser:`ShieldUser`,ShieldX:`ShieldX`,Ship:`Ship`,ShipWheel:`ShipWheel`,Shirt:`Shirt`,ShoppingBag:`ShoppingBag`,ShoppingBasket:`ShoppingBasket`,ShoppingCart:`ShoppingCart`,Shovel:`Shovel`,ShowerHead:`ShowerHead`,Shredder:`Shredder`,Shrimp:`Shrimp`,Shrink:`Shrink`,Shrub:`Shrub`,Shuffle:`Shuffle`,Sigma:`Sigma`,Signal:`Signal`,SignalHigh:`SignalHigh`,SignalLow:`SignalLow`,SignalMedium:`SignalMedium`,SignalZero:`SignalZero`,Signature:`Signature`,Signpost:`Signpost`,SignpostBig:`SignpostBig`,Siren:`Siren`,SkipBack:`SkipBack`,SkipForward:`SkipForward`,Skull:`Skull`,Slack:`Slack`,Slash:`Slash`,Slice:`Slice`,SlidersHorizontal:`SlidersHorizontal`,SlidersVertical:`SlidersVertical`,Smartphone:`Smartphone`,SmartphoneCharging:`SmartphoneCharging`,SmartphoneNfc:`SmartphoneNfc`,Smile:`Smile`,SmilePlus:`SmilePlus`,Snail:`Snail`,Snowflake:`Snowflake`,SoapDispenserDroplet:`SoapDispenserDroplet`,Sofa:`Sofa`,Soup:`Soup`,Space:`Space`,Spade:`Spade`,Sparkle:`Sparkle`,Sparkles:`Sparkles`,Speaker:`Speaker`,Speech:`Speech`,SpellCheck:`SpellCheck`,SpellCheck2:`SpellCheck2`,Spline:`Spline`,SplinePointer:`SplinePointer`,Split:`Split`,SprayCan:`SprayCan`,Sprout:`Sprout`,Square:`Square`,SquareActivity:`SquareActivity`,SquareArrowDown:`SquareArrowDown`,SquareArrowDownLeft:`SquareArrowDownLeft`,SquareArrowDownRight:`SquareArrowDownRight`,SquareArrowLeft:`SquareArrowLeft`,SquareArrowOutDownLeft:`SquareArrowOutDownLeft`,SquareArrowOutDownRight:`SquareArrowOutDownRight`,SquareArrowOutUpLeft:`SquareArrowOutUpLeft`,SquareArrowOutUpRight:`SquareArrowOutUpRight`,SquareArrowRight:`SquareArrowRight`,SquareArrowUp:`SquareArrowUp`,SquareArrowUpLeft:`SquareArrowUpLeft`,SquareArrowUpRight:`SquareArrowUpRight`,SquareAsterisk:`SquareAsterisk`,SquareBottomDashedScissors:`SquareBottomDashedScissors`,SquareChartGantt:`SquareChartGantt`,SquareCheck:`SquareCheck`,SquareCheckBig:`SquareCheckBig`,SquareChevronDown:`SquareChevronDown`,SquareChevronLeft:`SquareChevronLeft`,SquareChevronRight:`SquareChevronRight`,SquareChevronUp:`SquareChevronUp`,SquareCode:`SquareCode`,SquareDashed:`SquareDashed`,SquareDashedBottom:`SquareDashedBottom`,SquareDashedBottomCode:`SquareDashedBottomCode`,SquareDashedKanban:`SquareDashedKanban`,SquareDashedMousePointer:`SquareDashedMousePointer`,SquareDashedTopSolid:`SquareDashedTopSolid`,SquareDivide:`SquareDivide`,SquareDot:`SquareDot`,SquareEqual:`SquareEqual`,SquareFunction:`SquareFunction`,SquareKanban:`SquareKanban`,SquareLibrary:`SquareLibrary`,SquareM:`SquareM`,SquareMenu:`SquareMenu`,SquareMinus:`SquareMinus`,SquareMousePointer:`SquareMousePointer`,SquareParking:`SquareParking`,SquareParkingOff:`SquareParkingOff`,SquarePen:`SquarePen`,SquarePercent:`SquarePercent`,SquarePi:`SquarePi`,SquarePilcrow:`SquarePilcrow`,SquarePlay:`SquarePlay`,SquarePlus:`SquarePlus`,SquarePower:`SquarePower`,SquareRadical:`SquareRadical`,SquareRoundCorner:`SquareRoundCorner`,SquareScissors:`SquareScissors`,SquareSigma:`SquareSigma`,SquareSlash:`SquareSlash`,SquareSplitHorizontal:`SquareSplitHorizontal`,SquareSplitVertical:`SquareSplitVertical`,SquareSquare:`SquareSquare`,SquareStack:`SquareStack`,SquareTerminal:`SquareTerminal`,SquareUser:`SquareUser`,SquareUserRound:`SquareUserRound`,SquareX:`SquareX`,SquaresExclude:`SquaresExclude`,SquaresIntersect:`SquaresIntersect`,SquaresSubtract:`SquaresSubtract`,SquaresUnite:`SquaresUnite`,Squircle:`Squircle`,Squirrel:`Squirrel`,Stamp:`Stamp`,Star:`Star`,StarHalf:`StarHalf`,StarOff:`StarOff`,StepBack:`StepBack`,StepForward:`StepForward`,Stethoscope:`Stethoscope`,Sticker:`Sticker`,StickyNote:`StickyNote`,Store:`Store`,StretchHorizontal:`StretchHorizontal`,StretchVertical:`StretchVertical`,Strikethrough:`Strikethrough`,Subscript:`Subscript`,Sun:`Sun`,SunDim:`SunDim`,SunMedium:`SunMedium`,SunMoon:`SunMoon`,SunSnow:`SunSnow`,Sunrise:`Sunrise`,Sunset:`Sunset`,Superscript:`Superscript`,SwatchBook:`SwatchBook`,SwissFranc:`SwissFranc`,SwitchCamera:`SwitchCamera`,Sword:`Sword`,Swords:`Swords`,Syringe:`Syringe`,Table:`Table`,Table2:`Table2`,TableCellsMerge:`TableCellsMerge`,TableCellsSplit:`TableCellsSplit`,TableColumnsSplit:`TableColumnsSplit`,TableOfContents:`TableOfContents`,TableProperties:`TableProperties`,TableRowsSplit:`TableRowsSplit`,Tablet:`Tablet`,TabletSmartphone:`TabletSmartphone`,Tablets:`Tablets`,Tag:`Tag`,Tags:`Tags`,Tally1:`Tally1`,Tally2:`Tally2`,Tally3:`Tally3`,Tally4:`Tally4`,Tally5:`Tally5`,Tangent:`Tangent`,Target:`Target`,Telescope:`Telescope`,Tent:`Tent`,TentTree:`TentTree`,Terminal:`Terminal`,TestTube:`TestTube`,TestTubeDiagonal:`TestTubeDiagonal`,TestTubes:`TestTubes`,Text:`Text`,TextCursor:`TextCursor`,TextCursorInput:`TextCursorInput`,TextQuote:`TextQuote`,TextSearch:`TextSearch`,TextSelect:`TextSelect`,Theater:`Theater`,Thermometer:`Thermometer`,ThermometerSnowflake:`ThermometerSnowflake`,ThermometerSun:`ThermometerSun`,ThumbsDown:`ThumbsDown`,ThumbsUp:`ThumbsUp`,Ticket:`Ticket`,TicketCheck:`TicketCheck`,TicketMinus:`TicketMinus`,TicketPercent:`TicketPercent`,TicketPlus:`TicketPlus`,TicketSlash:`TicketSlash`,TicketX:`TicketX`,Tickets:`Tickets`,TicketsPlane:`TicketsPlane`,Timer:`Timer`,TimerOff:`TimerOff`,TimerReset:`TimerReset`,ToggleLeft:`ToggleLeft`,ToggleRight:`ToggleRight`,Toilet:`Toilet`,Tornado:`Tornado`,Torus:`Torus`,Touchpad:`Touchpad`,TouchpadOff:`TouchpadOff`,TowerControl:`TowerControl`,ToyBrick:`ToyBrick`,Tractor:`Tractor`,TrafficCone:`TrafficCone`,TrainFront:`TrainFront`,TrainFrontTunnel:`TrainFrontTunnel`,TrainTrack:`TrainTrack`,TramFront:`TramFront`,Transgender:`Transgender`,Trash:`Trash`,Trash2:`Trash2`,TreeDeciduous:`TreeDeciduous`,TreePalm:`TreePalm`,TreePine:`TreePine`,Trees:`Trees`,Trello:`Trello`,TrendingDown:`TrendingDown`,TrendingUp:`TrendingUp`,TrendingUpDown:`TrendingUpDown`,Triangle:`Triangle`,TriangleAlert:`TriangleAlert`,TriangleDashed:`TriangleDashed`,TriangleRight:`TriangleRight`,Trophy:`Trophy`,Truck:`Truck`,TruckElectric:`TruckElectric`,Turtle:`Turtle`,Tv:`Tv`,TvMinimal:`TvMinimal`,TvMinimalPlay:`TvMinimalPlay`,Twitch:`Twitch`,Twitter:`Twitter`,Type:`Type`,TypeOutline:`TypeOutline`,Umbrella:`Umbrella`,UmbrellaOff:`UmbrellaOff`,Underline:`Underline`,Undo:`Undo`,Undo2:`Undo2`,UndoDot:`UndoDot`,UnfoldHorizontal:`UnfoldHorizontal`,UnfoldVertical:`UnfoldVertical`,Ungroup:`Ungroup`,University:`University`,Unlink:`Unlink`,Unlink2:`Unlink2`,Unplug:`Unplug`,Upload:`Upload`,Usb:`Usb`,User:`User`,UserCheck:`UserCheck`,UserCog:`UserCog`,UserLock:`UserLock`,UserMinus:`UserMinus`,UserPen:`UserPen`,UserPlus:`UserPlus`,UserRound:`UserRound`,UserRoundCheck:`UserRoundCheck`,UserRoundCog:`UserRoundCog`,UserRoundMinus:`UserRoundMinus`,UserRoundPen:`UserRoundPen`,UserRoundPlus:`UserRoundPlus`,UserRoundSearch:`UserRoundSearch`,UserRoundX:`UserRoundX`,UserSearch:`UserSearch`,UserX:`UserX`,Users:`Users`,UsersRound:`UsersRound`,Utensils:`Utensils`,UtensilsCrossed:`UtensilsCrossed`,UtilityPole:`UtilityPole`,Variable:`Variable`,Vault:`Vault`,Vegan:`Vegan`,VenetianMask:`VenetianMask`,Venus:`Venus`,VenusAndMars:`VenusAndMars`,Vibrate:`Vibrate`,VibrateOff:`VibrateOff`,Video:`Video`,VideoOff:`VideoOff`,Videotape:`Videotape`,View:`View`,Voicemail:`Voicemail`,Volleyball:`Volleyball`,Volume:`Volume`,Volume1:`Volume1`,Volume2:`Volume2`,VolumeOff:`VolumeOff`,VolumeX:`VolumeX`,Vote:`Vote`,Wallet:`Wallet`,WalletCards:`WalletCards`,WalletMinimal:`WalletMinimal`,Wallpaper:`Wallpaper`,Wand:`Wand`,WandSparkles:`WandSparkles`,Warehouse:`Warehouse`,WashingMachine:`WashingMachine`,Watch:`Watch`,Waves:`Waves`,WavesLadder:`WavesLadder`,Waypoints:`Waypoints`,Webcam:`Webcam`,Webhook:`Webhook`,WebhookOff:`WebhookOff`,Weight:`Weight`,Wheat:`Wheat`,WheatOff:`WheatOff`,WholeWord:`WholeWord`,Wifi:`Wifi`,WifiHigh:`WifiHigh`,WifiLow:`WifiLow`,WifiOff:`WifiOff`,WifiPen:`WifiPen`,WifiZero:`WifiZero`,Wind:`Wind`,WindArrowDown:`WindArrowDown`,Wine:`Wine`,WineOff:`WineOff`,Workflow:`Workflow`,Worm:`Worm`,WrapText:`WrapText`,Wrench:`Wrench`,X:`X`,Youtube:`Youtube`,Zap:`Zap`,ZapOff:`ZapOff`,ZoomIn:`ZoomIn`,ZoomOut:`ZoomOut`,ArrowDown_0_1:`ArrowDown01`,ArrowDown_1_0:`ArrowDown10`,ArrowUp_0_1:`ArrowUp01`,ArrowUp_1_0:`ArrowUp10`,Axis_3d:`Axis3d`,BookUp_2:`BookUp2`,Building_2:`Building2`,Calendar_1:`Calendar1`,CalendarCheck_2:`CalendarCheck2`,CalendarMinus_2:`CalendarMinus2`,CalendarPlus_2:`CalendarPlus2`,CalendarX_2:`CalendarX2`,CircleSlash_2:`CircleSlash2`,Clock_1:`Clock1`,Clock_10:`Clock10`,Clock_11:`Clock11`,Clock_12:`Clock12`,Clock_2:`Clock2`,Clock_3:`Clock3`,Clock_4:`Clock4`,Clock_5:`Clock5`,Clock_6:`Clock6`,Clock_7:`Clock7`,Clock_8:`Clock8`,Clock_9:`Clock9`,Columns_2:`Columns2`,Columns_3:`Columns3`,Columns_3Cog:`Columns3Cog`,Columns_4:`Columns4`,Dice_1:`Dice1`,Dice_2:`Dice2`,Dice_3:`Dice3`,Dice_4:`Dice4`,Dice_5:`Dice5`,Dice_6:`Dice6`,Disc_2:`Disc2`,Disc_3:`Disc3`,FileAudio_2:`FileAudio2`,FileAxis_3d:`FileAxis3d`,FileBadge_2:`FileBadge2`,FileCheck_2:`FileCheck2`,FileCode_2:`FileCode2`,FileJson_2:`FileJson2`,FileKey_2:`FileKey2`,FileLock_2:`FileLock2`,FileMinus_2:`FileMinus2`,FilePlus_2:`FilePlus2`,FileSearch_2:`FileSearch2`,FileType_2:`FileType2`,FileVideo_2:`FileVideo2`,FileVolume_2:`FileVolume2`,FileX_2:`FileX2`,FlipHorizontal_2:`FlipHorizontal2`,FlipVertical_2:`FlipVertical2`,Flower_2:`Flower2`,FolderGit_2:`FolderGit2`,FolderSearch_2:`FolderSearch2`,Gamepad_2:`Gamepad2`,Grid_2x2:`Grid2x2`,Grid_2x2Check:`Grid2x2Check`,Grid_2x2Plus:`Grid2x2Plus`,Grid_2x2X:`Grid2x2X`,Grid_3x3:`Grid3x3`,Heading_1:`Heading1`,Heading_2:`Heading2`,Heading_3:`Heading3`,Heading_4:`Heading4`,Heading_5:`Heading5`,Heading_6:`Heading6`,Layers_2:`Layers2`,Link_2:`Link2`,Link_2Off:`Link2Off`,Maximize_2:`Maximize2`,Minimize_2:`Minimize2`,MousePointer_2:`MousePointer2`,Move_3d:`Move3d`,MoveDiagonal_2:`MoveDiagonal2`,Music_2:`Music2`,Music_3:`Music3`,Music_4:`Music4`,Navigation_2:`Navigation2`,Navigation_2Off:`Navigation2Off`,Package_2:`Package2`,PictureInPicture_2:`PictureInPicture2`,Plug_2:`Plug2`,Redo_2:`Redo2`,Repeat_1:`Repeat1`,Repeat_2:`Repeat2`,Rotate_3d:`Rotate3d`,Rows_2:`Rows2`,Rows_3:`Rows3`,Rows_4:`Rows4`,Scale_3d:`Scale3d`,Settings_2:`Settings2`,Share_2:`Share2`,SpellCheck_2:`SpellCheck2`,Table_2:`Table2`,Tally_1:`Tally1`,Tally_2:`Tally2`,Tally_3:`Tally3`,Tally_4:`Tally4`,Tally_5:`Tally5`,Trash_2:`Trash2`,Undo_2:`Undo2`,Unlink_2:`Unlink2`,Volume_1:`Volume1`,Volume_2:`Volume2`},gr={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`,ExtraLarge:`xl`},_r={...mr,...hr},vr={Gray:`gray`,Brand:`brand`,Error:`error`,Warning:`warning`,Success:`success`,GrayBlue:`gray-blue`,BlueLight:`blue-light`,Blue:`blue`,Indigo:`indigo`,Purple:`purple`,Pink:`pink`,Orange:`orange`},yr=[`gray`,`brand`,`error`,`warning`,`success`,`gray-blue`,`blue-light`,`blue`,`indigo`,`purple`,`pink`,`orange`];function br(e,t,n){return Math.min(Math.max(e,t),n)}function xr(e){return yr.map(t=>`.color--${t} {\n  ${e(t)}\n}`).join(`
`)}function Sr(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})}function Cr(e){let t=Sr();return e?`${e}-${t}`:t}function wr(e,t,n,r=`value`){t.has(r)&&t.get(r)!==void 0&&e.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:n},bubbles:!0,composed:!0}))}function Tr(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Er(e,t,n){if(e.style?.setProperty){e.style.setProperty(t,n);return}let r=(e.getAttribute(`style`)??``).trim(),i=`${t}: ${n}`,a=RegExp(`${Tr(t)}\\s*:\\s*[^;]*`);if(a.test(r)){e.setAttribute(`style`,r.replace(a,i));return}let o=r.replace(/;$/,``).trim();e.setAttribute(`style`,o?`${o}; ${i}`:i)}var B=class extends Jn{constructor(){super(...arguments),this.role=`presentation`,this.size=gr.Medium}willUpdate(e){e.has(`size`)&&typeof this.size==`number`&&Er(this,`--icon-size`,`${this.size}px`),e.has(`strokeWidth`)&&this.strokeWidth!=null&&Er(this,`--icon-stroke-width`,`${this.strokeWidth}`)}};B.styles=P`
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
  `,N([mn({type:String,reflect:!0})],B.prototype,`role`,void 0),N([mn({type:String,reflect:!0})],B.prototype,`size`,void 0),N([mn({type:Number,reflect:!0})],B.prototype,`strokeWidth`,void 0);var Dr=class extends B{render(){return Wt`
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

    `}};Dr.styles=B.styles,Dr=N([z(`quantic-icon-lucide-circle-check`)],Dr);var Or=class extends B{render(){return Wt`
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

    `}};Or.styles=B.styles,Or=N([z(`quantic-icon-lucide-circle-x`)],Or);var kr=class extends B{render(){return Wt`
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

    `}};kr.styles=B.styles,kr=N([z(`quantic-icon-lucide-info`)],kr);var Ar=class extends B{render(){return Wt`
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

    `}};Ar.styles=B.styles,Ar=N([z(`quantic-icon-lucide-triangle-alert`)],Ar);var jr=class extends B{render(){return Wt`
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

    `}};jr.styles=B.styles,jr=N([z(`quantic-icon-lucide-x`)],jr),pr.ensureDefined(),Dr.ensureDefined(),Or.ensureDefined(),kr.ensureDefined(),Ar.ensureDefined(),jr.ensureDefined();var Mr=class extends Qn(Jn,[`title`,``,`action`]){constructor(){super(...arguments),this.type=$n.Info,this.showCloseButton=!1,this.handleCloseClick=()=>{this.dispatchEvent(new Event(`close`,{bubbles:!0,composed:!0}))}}updated(e){super.updated(e),(e.has(`type`)||!this.hasAttribute(`role`))&&(this.setAttribute(`role`,this.type===$n.Error?`alert`:`status`),this.setAttribute(`aria-live`,this.type===$n.Error?`assertive`:`polite`),this.setAttribute(`aria-atomic`,`true`))}renderDefaultIcon(){switch(this.type){case $n.Success:return F`<quantic-icon-lucide-circle-check
          size="md"
        ></quantic-icon-lucide-circle-check>`;case $n.Error:return F`<quantic-icon-lucide-circle-x
          size="md"
        ></quantic-icon-lucide-circle-x>`;case $n.Warning:return F`<quantic-icon-lucide-triangle-alert
          size="md"
        ></quantic-icon-lucide-triangle-alert>`;case $n.Info:default:return F`<quantic-icon-lucide-info
          size="md"
        ></quantic-icon-lucide-info>`}}render(){return F`
      <div class="container">
        <span class="icon">
          <slot name="icon">${this.renderDefaultIcon()}</slot>
        </span>
        <div class="content">
          <slot name="title" class="title"></slot>
          <slot class="body"></slot>
          <slot name="action" class="action"></slot>
        </div>
        ${this.showCloseButton?F`<quantic-button
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
              </quantic-button>`:Kt}
      </div>
    `}};Mr.meta={tag:`quantic-alert`,description:`Inline alert banner with severity styles and optional dismiss action. Visibility is owned by the consumer.`,category:`feedback`,avoidWhen:[{when:`the message is transient and not tied to a place on the page`,useInstead:`quantic-toast`}],accessibility:{providedByComponent:[`announced through a live region`,`severity conveyed by icon as well as colour`],requiredFromConsumer:[`a title, so the message does not depend on colour alone`]},slots:{icon:{description:`Optional icon override. Defaults to a type-derived lucide icon.`},title:{description:`Optional bold title.`,copyRule:`heading`},"":{description:`Body content of the alert.`},action:{description:`Optional action element (e.g. a link or button).`,copyRule:`heading`}},relatedTo:[`quantic-toast`,`quantic-button`]},Mr.styles=P`
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
  `,N([L({type:`AlertType`,options:Object.values($n),default:$n.Info,reflect:!0,description:`Severity. Drives icon and color tokens.`})],Mr.prototype,`type`,void 0),N([L({type:`boolean`,attribute:`show-close-button`,default:`false`,description:`Shows a built-in close button. Click dispatches a "close" event.`})],Mr.prototype,`showCloseButton`,void 0),Mr=N([R(`close`,{description:`Fired when the user clicks the close button. The consumer is responsible for hiding the alert.`}),z(`quantic-alert`)],Mr);var{I:Nr}=on,Pr=e=>e,Fr=e=>e.strings===void 0,Ir=()=>document.createComment(``),Lr=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new Nr(r.insertBefore(Ir(),i),r.insertBefore(Ir(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=Pr(e).nextSibling;Pr(r).insertBefore(e,i),e=t}}}return n},Rr=(e,t,n=e)=>(e._$AI(t,n),e),zr={},Br=(e,t=zr)=>e._$AH=t,Vr=e=>e._$AH,Hr=e=>{e._$AR(),e._$AA.remove()},Ur=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Wr=lr(class extends ur{constructor(e){if(super(e),e.type!==cr.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Vr(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=Rr(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=Rr(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=Rr(i[d],a[m]),Lr(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=Rr(i[f],a[p]),Lr(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=Ur(o,p,m),u=Ur(s,d,f)),l.has(s[d])){if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=Lr(e,i[d]);Rr(t,a[p]),c[p]=t}else c[p]=Rr(n,a[p]),Lr(e,i[d],n),i[t]=null;p++}else Hr(i[f]),f--}else Hr(i[d]),d++;for(;p<=m;){let t=Lr(e,c[m+1]);Rr(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&Hr(e)}return this.ut=o,Br(e,c),Gt}}),Gr=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Gr(e,t);return!0},Kr=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},qr=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Xr(t)}};function Jr(e){this._$AN===void 0?this._$AM=e:(Kr(this),this._$AM=e,qr(this))}function Yr(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)Gr(r[e],!1),Kr(r[e]);else r!=null&&(Gr(r,!1),Kr(r))}else Gr(this,e)}}var Xr=e=>{e.type==cr.CHILD&&(e._$AP??=Yr,e._$AQ??=Jr)},Zr=class extends ur{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),qr(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Gr(this,e),Kr(this))}setValue(e){if(Fr(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Qr=()=>new $r,$r=class{},ei=new WeakMap,ti=lr(class extends Zr{render(e){return Kt}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Kt}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=ei.get(t);n===void 0&&(n=new WeakMap,ei.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?ei.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ni=Math.min,ri=Math.max,ii=Math.round,ai=Math.floor,oi=e=>({x:e,y:e}),si={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function ci(e,t,n){return ri(e,ni(t,n))}function li(e,t){return typeof e==`function`?e(t):e}function ui(e){return e.split(`-`)[0]}function di(e){return e.split(`-`)[1]}function fi(e){return e===`x`?`y`:`x`}function pi(e){return e===`y`?`height`:`width`}function mi(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function hi(e){return fi(mi(e))}function gi(e,t,n){n===void 0&&(n=!1);let r=di(e),i=hi(e),a=pi(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Ti(o)),[o,Ti(o)]}function _i(e){let t=Ti(e);return[vi(e),t,vi(t)]}function vi(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var yi=[`left`,`right`],bi=[`right`,`left`],xi=[`top`,`bottom`],Si=[`bottom`,`top`];function Ci(e,t,n){switch(e){case`top`:case`bottom`:return n?t?bi:yi:t?yi:bi;case`left`:case`right`:return t?xi:Si;default:return[]}}function wi(e,t,n,r){let i=di(e),a=Ci(ui(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(vi)))),a}function Ti(e){let t=ui(e);return si[t]+e.slice(t.length)}function Ei(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function Di(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Ei(e)}function Oi(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function ki(e,t,n){let{reference:r,floating:i}=e,a=mi(t),o=hi(t),s=pi(o),c=ui(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=di(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Ai(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=li(t,e),p=Di(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Oi(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Oi(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var ji=50,Mi=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Ai},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=ki(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<ji&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=ki(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Ni=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=li(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=ui(r),_=mi(o),v=ui(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Ti(o)]:_i(o)),x=p!==`none`;!d&&x&&b.push(...wi(o,m,p,y));let S=[o,...b],ee=await s.detectOverflow(t,h),te=[],C=i.flip?.overflows||[];if(l&&te.push(ee[g]),u){let e=gi(r,a,y);te.push(ee[e[0]],ee[e[1]])}if(C=[...C,{placement:r,overflows:te}],!te.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===mi(t)||C.every(e=>mi(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(x){let t=mi(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},Pi=new Set([`left`,`top`]);async function Fi(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=ui(n),s=di(n),c=mi(n)===`y`,l=Pi.has(o)?-1:1,u=a&&c?-1:1,d=li(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Ii=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Fi(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Li=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=li(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=mi(i),p=fi(f),m=u[p],h=u[f],g=(e,t)=>ci(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}};function Ri(){return typeof window<`u`}function zi(e){return Hi(e)?(e.nodeName||``).toLowerCase():`#document`}function Bi(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Vi(e){return((Hi(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Hi(e){return Ri()?e instanceof Node||e instanceof Bi(e).Node:!1}function Ui(e){return Ri()?e instanceof Element||e instanceof Bi(e).Element:!1}function Wi(e){return Ri()?e instanceof HTMLElement||e instanceof Bi(e).HTMLElement:!1}function Gi(e){return!Ri()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Bi(e).ShadowRoot}function Ki(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=V(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function qi(e){return/^(table|td|th)$/.test(zi(e))}function Ji(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Yi=/transform|translate|scale|rotate|perspective|filter/,Xi=/paint|layout|strict|content/,Zi=e=>!!e&&e!==`none`,Qi;function $i(e){let t=Ui(e)?V(e):e;return Zi(t.transform)||Zi(t.translate)||Zi(t.scale)||Zi(t.rotate)||Zi(t.perspective)||!ta()&&(Zi(t.backdropFilter)||Zi(t.filter))||Yi.test(t.willChange||``)||Xi.test(t.contain||``)}function ea(e){let t=ra(e);for(;Wi(t)&&!na(t);){if($i(t))return t;if(Ji(t))return null;t=ra(t)}return null}function ta(){return Qi??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Qi}function na(e){return/^(html|body|#document)$/.test(zi(e))}function V(e){return Bi(e).getComputedStyle(e)}function H(e){return Ui(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ra(e){if(zi(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Gi(e)&&e.host||Vi(e);return Gi(t)?t.host:t}function ia(e){let t=ra(e);return na(t)?(e.ownerDocument||e).body:Wi(t)&&Ki(t)?t:ia(t)}function aa(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=ia(e),i=r===e.ownerDocument?.body,a=Bi(r);if(i){let e=oa(a);return t.concat(a,a.visualViewport||[],Ki(r)?r:[],e&&n?aa(e):[])}return t.concat(r,aa(r,[],n))}function oa(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function sa(e){let t=V(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Wi(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=ii(n)!==a||ii(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function ca(e){return Ui(e)?e:e.contextElement}function la(e){let t=ca(e);if(!Wi(t))return oi(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=sa(t),o=(a?ii(n.width):n.width)/r,s=(a?ii(n.height):n.height)/i;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}var ua=oi(0);function da(e){let t=Bi(e);return!ta()||!t.visualViewport?ua:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function fa(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===Bi(e)}function pa(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=ca(e),o=oi(1);t&&(r?Ui(r)&&(o=la(r)):o=la(e));let s=fa(a,n,r)?da(a):oi(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=Bi(a),t=Ui(r)?Bi(r):r,n=e,i=oa(n);for(;i&&t!==n;){let e=la(i),t=i.getBoundingClientRect(),r=V(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Bi(i),i=oa(n)}}return Oi({width:u,height:d,x:c,y:l})}function ma(e,t){let n=H(e).scrollLeft;return t?t.left+n:pa(Vi(e)).left+n}function ha(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ma(e,n),y:n.top+t.scrollTop}}function ga(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Vi(r),s=t?Ji(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=oi(1),u=oi(0),d=Wi(r);if((d||!a)&&((zi(r)!==`body`||Ki(o))&&(c=H(r)),d)){let e=pa(r);l=la(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?ha(o,c):oi(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function _a(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function va(e){let t=H(e),n=e.ownerDocument.body,r=ri(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=ri(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+ma(e),o=-t.scrollTop;return V(n).direction===`rtl`&&(a+=ri(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var ya=25;function ba(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=Bi(e),a=Vi(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!ta()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(ma(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=ya&&(s-=o)}return{width:s,height:c,x:l,y:u}}function xa(e,t){let n=pa(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=la(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Sa(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=ba(e,n,t);else if(t===`document`)r=va(Vi(e));else if(Ui(t))r=xa(t,n);else{let n=da(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Oi(r)}function Ca(e,t){let n=t.get(e);if(n)return n;let r=aa(e,[],!1).filter(e=>Ui(e)&&zi(e)!==`body`),i=null,a=V(e).position===`fixed`,o=a?ra(e):e;for(;Ui(o)&&!na(o);){let e=V(o),t=$i(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=ra(o)}return t.set(e,r),r}function wa(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Ji(t)?[]:Ca(t,this._c):[].concat(n),r],o=Sa(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=Sa(t,a[e],i);s=ri(n.top,s),c=ni(n.right,c),l=ni(n.bottom,l),u=ri(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Ta(e){let{width:t,height:n}=sa(e);return{width:t,height:n}}function Ea(e,t,n){let r=Wi(t),i=Vi(t),a=n===`fixed`,o=pa(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=oi(0);if((r||!a)&&((zi(t)!==`body`||Ki(i))&&(s=H(t)),r)){let e=pa(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=ma(i));let l=i&&!r&&!a?ha(i,s):oi(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function Da(e){return V(e).position===`static`}function Oa(e,t){if(!Wi(e)||V(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Vi(e)===n&&(n=n.ownerDocument.body),n}function ka(e,t){let n=Bi(e);if(Ji(e))return n;if(!Wi(e)){let t=ra(e);for(;t&&!na(t);){if(Ui(t)&&!Da(t))return t;t=ra(t)}return n}let r=Oa(e,t);for(;r&&qi(r)&&Da(r);)r=Oa(r,t);return r&&na(r)&&Da(r)&&!$i(r)?n:r||ea(e)||n}var Aa=async function(e){let t=this.getOffsetParent||ka,n=this.getDimensions,r=await n(e.floating);return{reference:Ea(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function ja(e){return V(e).direction===`rtl`}var Ma={convertOffsetParentRelativeRectToViewportRelativeRect:ga,getDocumentElement:Vi,getClippingRect:wa,getOffsetParent:ka,getElementRects:Aa,getClientRects:_a,getDimensions:Ta,getScale:la,isElement:Ui,isRTL:ja};function Na(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Pa(e,t,n){let r=null,i,a=Vi(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=ai(d),h=ai(a.clientWidth-(u+f)),g=ai(a.clientHeight-(d+p)),_=ai(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:ri(0,ni(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!Na(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=Bi(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function Fa(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=ca(e),u=i||a?[...l?aa(l):[],...t?aa(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?Pa(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?pa(e):null;c&&g();function g(){let t=pa(e);h&&!Na(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Ia=Ii,La=Li,Ra=Ni,za=(e,t,n)=>{let r=new Map,i=n??{},a={...Ma,...i.platform,_c:r};return Mi(e,t,{...i,platform:a})};function Ba(e){class t extends e{constructor(){super(...arguments),this.ariaLabel=null,this.ariaDescription=null,this.ariaInvalid=null}getA11yAttributes(e){let t=e?.label??this.ariaLabel,n=e?.description??this.ariaDescription,r=e?.invalid??this.ariaInvalid===`true`;return{label:fr(t||void 0),description:fr(n||void 0),invalid:fr(r?`true`:void 0)}}}return N([L({type:`string`,attribute:`aria-label`,description:`Accessible label for the component (aria-label).`})],t.prototype,`ariaLabel`,void 0),N([L({type:`string`,attribute:`aria-description`,description:`Accessible description bound directly to aria-description.`})],t.prototype,`ariaDescription`,void 0),N([L({type:`string`,attribute:`aria-invalid`,description:`Marks the component invalid for assistive technologies (aria-invalid).`})],t.prototype,`ariaInvalid`,void 0),t}var Va={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},Ha=class extends B{render(){return Wt`
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

    `}};Ha.styles=B.styles,Ha=N([z(`quantic-icon-lucide-chevron-down`)],Ha);var Ua=class extends B{render(){return Wt`
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

    `}};Ua.styles=B.styles,Ua=N([z(`quantic-icon-lucide-circle-alert`)],Ua),Ha.ensureDefined(),Ua.ensureDefined();var Wa={xs:gr.ExtraSmall,sm:gr.ExtraSmall,md:gr.Small,lg:gr.Medium},Ga=e=>Wa[e]??gr.Small,Ka=e=>F`<quantic-icon-lucide-circle-alert
    size=${Ga(e)}
    class="error-icon"
  ></quantic-icon-lucide-circle-alert>`,qa=(e,t={})=>F`<quantic-icon-lucide-chevron-down
    size=${Ga(e)}
    class="suffix-icon"
    @click=${t.click}
    @mousedown=${t.mousedown}
  ></quantic-icon-lucide-chevron-down>`,Ja={xs:{font:`13px`,block:`var(--quantic-spacing-xxs)`,inline:`var(--quantic-spacing-2)`},sm:{font:`var(--quantic-font-size-body-sm)`,block:`var(--quantic-spacing-sm)`,inline:`var(--quantic-spacing-2)`},md:{font:`var(--quantic-font-size-body-md)`,block:`var(--quantic-spacing-md)`,inline:`var(--quantic-spacing-3)`},lg:{font:`var(--quantic-font-size-body-lg)`,block:`var(--quantic-spacing-3)`,inline:`var(--quantic-spacing-4)`}};Object.keys(Ja);function Ya(e,t){let n=t=>it(`--quantic-component-${e}-${t}`),r=it(`var(--quantic-component-${e}-border-radius, var(--quantic-radius-sm))`),i=it(`var(--quantic-component-${e}-border-color, var(--quantic-border-primary))`),a=Object.entries(Ja).map(([t,{font:n,block:r,inline:i}])=>`
        .main.size--${t} {
          font-size: var(--quantic-component-${e}-font-size, ${n});
          padding: var(--quantic-component-${e}-padding-block, ${r})
            var(--quantic-component-${e}-padding-inline, ${i});
        }`).join(`
`);return P`
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
      min-width: var(${n(`min-width`)}, ${it(t)});
      font-family: var(--quantic-font-family-body);
      border: 1px solid ${i};
      border-radius: ${r};
      color: var(${n(`color`)}, var(--quantic-text-primary));
      background-color: var(${n(`bg`)}, var(--quantic-bg-primary));
      transition:
        border-color 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out;
    }

    ${it(a)}

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
  `}var Xa=class extends Ba(Jn){constructor(){super(),this.listboxId=Cr(`combobox-listbox`),this.value=``,this.name=``,this.placeholder=``,this.options=[],this.size=Va.Medium,this.disabled=!1,this.required=!1,this.invalid=!1,this.emptyLabel=`No results`,this.allowCustomValue=!1,this._open=!1,this._inputValue=``,this._activeIndex=-1,this._inputRef=Qr(),this._listboxRef=Qr(),this.internals=this.attachInternals()}updated(e){let t=e.has(`value`),n=e.has(`options`),r=e.has(`allowCustomValue`);if(t||r||n&&!this._open){let e=this.options.find(e=>e.value===this.value);this._inputValue=e?e.label:this.allowCustomValue?this.value:``}e.has(`value`)&&this.internals.setFormValue(this.value),(e.has(`value`)||e.has(`required`))&&this.updateValidity(),e.has(`options`)&&this._open&&(this._activeIndex=-1),e.has(`_activeIndex`)&&this._activeIndex>=0&&this.shadowRoot?.querySelectorAll(`[role="option"]`)[this._activeIndex]?.scrollIntoView({block:`nearest`})}get filteredOptions(){if(!this._inputValue)return this.options;let e=this.filterFn??((e,t)=>e.label.toLowerCase().includes(t.toLowerCase()));return this.options.filter(t=>e(t,this._inputValue))}firstNavigableIndex(){return this.filteredOptions.findIndex(e=>!e.disabled)}lastNavigableIndex(){let e=this.filteredOptions;for(let t=e.length-1;t>=0;t--)if(!e[t].disabled)return t;return-1}nextNavigableIndex(e,t){let n=this.filteredOptions,r=e+t;for(;r>=0&&r<n.length;){if(!n[r].disabled)return r;r+=t}return e}async openList(){this._open||this.disabled||(this._open=!0,this._activeIndex=-1,await this.updateComplete,this.positionListbox())}closeList(e=!1){if(this._open){if(this._open=!1,this._activeIndex=-1,this.cleanup?.(),this.cleanup=void 0,e&&(this.allowCustomValue||!this._inputValue.trim()))this.commitInputValue();else{let e=this.options.find(e=>e.value===this.value);this._inputValue=e?.label??(this.allowCustomValue?this.value:``)}}}commitInputValue(){let e=this._inputValue.trim();this._inputValue=e,e!==this.value&&(this.value=e,this.internals.setFormValue(e),this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:e},bubbles:!0,composed:!0})))}positionListbox(){let e=this._listboxRef.value;e&&(this.cleanup=Fa(this,e,async()=>{if(!e)return;let{x:t,y:n}=await za(this,e,{placement:`bottom-start`,middleware:[Ia(4),Ra(),La({padding:8})],strategy:`absolute`});Object.assign(e.style,{left:`${t}px`,top:`${n}px`,width:`${this.getBoundingClientRect().width}px`})}))}selectOption(e){this.value=e.value,this._inputValue=e.label,this.internals.setFormValue(e.value),this._open=!1,this._activeIndex=-1,this.cleanup?.(),this.cleanup=void 0,this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:this.value},bubbles:!0,composed:!0})),this._inputRef.value?.focus()}handleInput(e){let t=e.target;this._inputValue=t.value,this._activeIndex=-1,this._open||this.openList(),this.dispatchEvent(new CustomEvent(`input-changed`,{detail:{value:this._inputValue},bubbles:!0,composed:!0}))}handleKeyDown(e){switch(e.key){case`ArrowDown`:e.preventDefault(),this._open?this._activeIndex=this.nextNavigableIndex(this._activeIndex,1):this.openList().then(()=>{this._activeIndex=this.firstNavigableIndex()});break;case`ArrowUp`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.nextNavigableIndex(this._activeIndex,-1);break;case`Home`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.firstNavigableIndex();break;case`End`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.lastNavigableIndex();break;case`Enter`:if(this._open&&this._activeIndex>=0){let t=this.filteredOptions[this._activeIndex];t&&!t.disabled&&(e.preventDefault(),this.selectOption(t))}else this._open&&(this.allowCustomValue||!this._inputValue.trim())&&(e.preventDefault(),this.closeList(!0));break;case`Escape`:e.preventDefault(),this.closeList();break;case`Tab`:this.closeList(!0)}}handleBlur(){this.closeList(!0),this.dispatchEvent(new Event(`blur`,{bubbles:!0,composed:!0}))}handleFocus(){this.dispatchEvent(new Event(`focus`,{bubbles:!0,composed:!0}))}handleInputClick(){this.openList()}handleChevronMouseDown(e){e.preventDefault(),this._open?this.closeList():(this._inputRef.value?.focus(),this.openList())}formResetCallback(){this.value=``,this._inputValue=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e);let t=this.options.find(t=>t.value===e);this._inputValue=t?.label??(this.allowCustomValue?e:``)}formDisabledCallback(e){this.disabled=e}disconnectedCallback(){super.disconnectedCallback(),this.cleanup?.()}updateValidity(){let e=this._inputRef.value;e&&this.internals.setValidity(e.validity,e.validationMessage,e)}get activeDescendant(){if(!(!this._open||this._activeIndex<0))return`${this.listboxId}-opt-${this._activeIndex}`}render(){let e=dr({main:!0,[`size--${this.size}`]:!0}),t=dr({listbox:!0,"is-open":this._open,[`size--${this.size}`]:!0}),n=this.getA11yAttributes({invalid:this.invalid}),r=this.filteredOptions;return F`
      <div class=${e}>
        <slot name="prefix"></slot>
        <input
          ${ti(this._inputRef)}
          class="input"
          role="combobox"
          aria-expanded=${this._open?`true`:`false`}
          aria-haspopup="listbox"
          aria-autocomplete="list"
          aria-controls=${this.listboxId}
          aria-activedescendant=${fr(this.activeDescendant)}
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
        ${this.invalid?Ka(this.size):F`<slot name="suffix"
                >${qa(this.size,{mousedown:this.handleChevronMouseDown})}</slot
              >`}
      </div>

      <ul
        ${ti(this._listboxRef)}
        id=${this.listboxId}
        role="listbox"
        class=${t}
        @mousedown=${e=>e.preventDefault()}
      >
        ${r.length===0?F`<li
                class="option-empty"
                role="option"
                aria-disabled="true"
                aria-selected="false"
              >
                ${this.emptyLabel}
              </li>`:Wr(r,e=>e.value,(e,t)=>F`
                  <li
                    id=${`${this.listboxId}-opt-${t}`}
                    role="option"
                    class=${dr({option:!0,"is-active":t===this._activeIndex,"is-selected":e.value===this.value,"is-disabled":!!e.disabled})}
                    aria-selected=${e.value===this.value?`true`:`false`}
                    aria-disabled=${e.disabled?`true`:`false`}
                    @click=${()=>this.handleOptionClick(e)}
                  >
                    <span class="option-label">${e.label}</span>
                  </li>
                `)}
      </ul>
    `}handleOptionClick(e){e.disabled||this.selectOption(e)}};Xa.meta={tag:`quantic-combobox`,description:`Text input that filters a list of options as the user types. Form-associated. Use for large option sets or anywhere a plain <select> is inadequate. Wrap in quantic-combobox-field to add a label and validation messaging.`,category:`form`,avoidWhen:[{when:`the option set is short and fixed`,useInstead:`quantic-select`}],accessibility:{providedByComponent:[`aria-expanded and aria-selected`,`arrow keys and Escape`,`form association`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{prefix:{description:`Leading content (e.g. icon).`},suffix:{description:`Trailing content, replacing the default chevron.`}},relatedTo:[`quantic-combobox-field`,`quantic-select`,`quantic-field`]},Xa.formAssociated=!0,Xa.styles=[Ya(`combobox`,`6em`),P`
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
    `],N([L({type:`string`,default:``,reflect:!0,description:`Currently selected value submitted with the form.`})],Xa.prototype,`value`,void 0),N([L({type:`string`,description:`Name submitted with form data.`})],Xa.prototype,`name`,void 0),N([L({type:`string`,description:`Placeholder shown when no option is selected.`,copyRule:`placeholder`})],Xa.prototype,`placeholder`,void 0),N([L({type:`ComboboxOption[]`,default:`[]`,description:`Options to display. Each item must have a label (display text) and value (form value). Set this prop reactively to implement async/server-side filtering.`})],Xa.prototype,`options`,void 0),N([L({type:`ComboboxSize`,options:Object.values(Va),default:Va.Medium,description:`Controls padding and font size.`})],Xa.prototype,`size`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],Xa.prototype,`disabled`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],Xa.prototype,`required`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-combobox-field.`})],Xa.prototype,`invalid`,void 0),N([L({type:`string`,default:`No results`,description:`Text shown in the listbox when no options match the input.`,copyRule:`empty-state`})],Xa.prototype,`emptyLabel`,void 0),N([L({type:`boolean`,default:`false`,description:`When true, the user can type a value that does not match any option. The typed text is preserved on blur/Enter and surfaced through the value-changed event. When false (default), only values from the options list are accepted.`})],Xa.prototype,`allowCustomValue`,void 0),N([L({type:`(option: ComboboxOption, inputValue: string) => boolean`,description:`Custom filter predicate. If omitted, defaults to case-insensitive substring match on option.label.`})],Xa.prototype,`filterFn`,void 0),N([hn()],Xa.prototype,`_open`,void 0),N([hn()],Xa.prototype,`_inputValue`,void 0),N([hn()],Xa.prototype,`_activeIndex`,void 0),Xa=N([R(`value-changed`,{description:`Fired when the user selects an option from the list, clears the field, or commits a custom value when allowCustomValue is enabled.`,detail:`{ value: string }`}),R(`input-changed`,{description:`Fired on every keystroke in the text field. Use to drive async filtering by updating the options prop in response.`,detail:`{ value: string }`}),R(`focus`,{forwarded:!0}),R(`blur`,{forwarded:!0}),z(`quantic-combobox`)],Xa);var Za=vr,Qa={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},$a=class extends Jn{constructor(){super(...arguments),this.color=Za.Brand,this.size=Qa.Medium,this.rounded=!1,this.icon=!1}render(){return ir`
      <div class=${dr({main:!0,[`size--${this.size}`]:!0,[`color--${this.color}`]:!0,icon:this.icon,rounded:this.rounded})}>
        <slot name="before"></slot>
        <slot></slot>
        <slot name="after"></slot>
      </div>
    `}};$a.meta={tag:`quantic-badge`,description:`Compact inline label for status, category, or count. Non-interactive — use quantic-button for clickable chips. Supports a wide color palette and an icon-only square mode.`,category:`display`,avoidWhen:[{when:`the label is dismissible or selectable`,useInstead:`quantic-tag`},{when:`the label is clickable`,useInstead:`quantic-button`},{when:`the value is a named system state`,useInstead:`quantic-status-badge`}],slots:{before:{description:`Content before the label (e.g. icon).`},"":{description:`Badge label text or icon.`},after:{description:`Content after the label.`}},relatedTo:[`quantic-tag`,`quantic-status-badge`]},$a.styles=P`
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

    ${it(xr(e=>`
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
  `,N([L({type:`BadgeColor`,options:Object.values(Za),default:Za.Brand,description:`Semantic color. Use "error" for failures, "success" for passing states, "warning" for caution, "brand" (default) for neutral highlights.`})],$a.prototype,`color`,void 0),N([L({type:`BadgeSize`,options:Object.values(Qa),default:Qa.Medium,description:`Controls padding and font size.`})],$a.prototype,`size`,void 0),N([L({type:`boolean`,default:`false`,description:`Applies a fully rounded (pill) border radius.`})],$a.prototype,`rounded`,void 0),N([L({type:`boolean`,default:`false`,description:`Square icon-only mode — equal padding on all sides.`})],$a.prototype,`icon`,void 0),$a=N([z(`quantic-badge`)],$a);var eo=class extends Jn{constructor(){super(...arguments),this.ariaLabel=null}render(){return F`
      <div class="group" part="group" role="group" aria-label=${this.ariaLabel??`Actions`}>
        <slot></slot>
      </div>
    `}};eo.meta={tag:`quantic-action-group`,description:`A row of related actions sharing one accessible name and a consistent gap. Takes quantic-button, and quantic-dropdown-menu or quantic-popover when the trigger is a button. Wraps when the row runs out of width. Gap: --quantic-component-action-group-gap. Use quantic-button-bar when the buttons should read as one joined control.`,category:`action`,avoidWhen:[{when:`the buttons are segments of a single control`,useInstead:`quantic-button-bar`}],accessibility:{providedByComponent:[`role=group with one accessible name across the row`],requiredFromConsumer:[`an ariaLabel naming the group`]},slots:{"":{description:`quantic-button elements, or a quantic-dropdown-menu or quantic-popover triggered by one.`}},parts:{group:{description:`The flex container, for a column layout or a different alignment.`}},relatedTo:[`quantic-button`,`quantic-button-bar`,`quantic-dialog-actions`,`quantic-dropdown-menu`,`quantic-popover`]},eo.styles=P`
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
  `,N([L({type:`string`,attribute:`aria-label`,description:`Accessible name for the group.`})],eo.prototype,`ariaLabel`,void 0),eo=N([z(`quantic-action-group`)],eo);var to=class extends Event{constructor(e,t,n,r){super(`context-request`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=n,this.subscribe=r??!1}};function no(e){return e}var ro=class{constructor(e,t,n,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,t.context!==void 0){let e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&=(this.unsubscribe(),void 0)}dispatchRequest(){this.host.dispatchEvent(new to(this.context,this.host,this.t,this.subscribe))}},io=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}},ao=class extends Event{constructor(e,t){super(`context-provider`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}},oo=class extends io{constructor(e,t,n){super(t.context===void 0?n:t.initialValue),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:n}]of this.subscriptions)t.has(e)||(t.add(e),n.dispatchEvent(new to(this.context,n,e,!0)));e.stopPropagation()},this.host=e,this.context=t.context===void 0?t:t.context,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener(`context-request`,this.onContextRequest),this.host.addEventListener(`context-provider`,this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new ao(this.context,this.host))}};function so({context:e}){return(t,n)=>{let r=new WeakMap;if(typeof n==`object`)return{get(){return t.get.call(this)},set(e){return r.get(this).setValue(e),t.set.call(this,e)},init(t){return r.set(this,new oo(this,{context:e,initialValue:t})),t}};{t.constructor.addInitializer((t=>{r.set(t,new oo(t,{context:e}))}));let i=Object.getOwnPropertyDescriptor(t,n),a;if(i===void 0){let e=new WeakMap;a={get(){return e.get(this)},set(t){r.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=i.set;a={...i,set(t){r.get(this).setValue(t),e?.call(this,t)}}}Object.defineProperty(t,n,a);return}}}function co({context:e,subscribe:t}){return(n,r)=>{typeof r==`object`?r.addInitializer((function(){new ro(this,{context:e,callback:e=>{n.set.call(this,e)},subscribe:t})})):n.constructor.addInitializer((n=>{new ro(n,{context:e,callback:e=>{n[r]=e},subscribe:t})}))}}var lo={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},uo=no(`button-bar.size`),fo={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1,Home:`first`,End:`last`};function po(e,t){if(!e.length)return null;if(t){let t=e.findIndex(e=>e.tabbable);if(t!==-1)return t}let n=e.findIndex(e=>e.active);return n===-1?0:n}function mo(e,t,n){let r=fo[e];return r===void 0||n<2||t<0||t>=n?null:r===`first`?0:r===`last`?n-1:(t+r+n)%n}var ho=`quantic-button-bar-item, quantic-button-group-item`,go=class extends Jn{constructor(){super(...arguments),this.size=lo.Medium,this.ariaLabel=null,this.hasSynced=!1,this.defaultLabel=`Button bar`}connectedCallback(){super.connectedCallback(),this.disabledObserver=new MutationObserver(()=>this.syncFocusStop()),this.disabledObserver.observe(this,{attributeFilter:[`disabled`],subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.disabledObserver?.disconnect(),this.disabledObserver=void 0}get items(){return[...this.querySelectorAll(ho)].filter(e=>e.parentElement===this&&!e.disabled)}setFocusStop(e,t){e.forEach((e,n)=>{e.tabbable=n===t})}syncFocusStop(){let e=this.items,t=po(e,this.hasSynced);t!==null&&(this.hasSynced=!0,this.setFocusStop(e,t))}handleFocusIn(e){let t=this.items,n=t.findIndex(t=>t.contains(e.target));n!==-1&&this.setFocusStop(t,n)}handleKeydown(e){let t=this.items,n=t.findIndex(t=>t.contains(e.target)),r=mo(e.key,n,t.length);r!==null&&(e.preventDefault(),this.setFocusStop(t,r),t[r].focus())}render(){return F`
      <div
        class="container"
        role="toolbar"
        aria-label=${this.ariaLabel??this.defaultLabel}
        @keydown=${this.handleKeydown}
        @focusin=${this.handleFocusIn}
      >
        <slot @slotchange=${()=>this.syncFocusStop()}></slot>
      </div>
    `}};go.meta={tag:`quantic-button-bar`,description:`Toolbar of related buttons joined into one cohesive control, with shared sizing. Use for switching between views or modes, and for a compact run of icon actions. Items carry aria-pressed via active, so a set can behave as exclusive options or as independent toggles. Focus follows the toolbar pattern: one tab stop, arrow keys move between items, Home and End jump to the ends. Prefer quantic-button for a standalone action, and quantic-tabs when each segment reveals a panel.`,category:`action`,avoidWhen:[{when:`the buttons are unrelated actions rather than segments of one control`,useInstead:`quantic-action-group`}],accessibility:{providedByComponent:[`one accessible name for the bar`,`arrow keys move between items`],requiredFromConsumer:[`an ariaLabel naming what the bar controls`]},slots:{"":{description:`One or more quantic-button-bar-item elements.`}},relatedTo:[`quantic-button`]},go.styles=P`
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
  `,N([so({context:uo}),L({type:`ButtonBarSize`,options:Object.values(lo),default:lo.Medium,description:`Size applied to all child items via context.`})],go.prototype,`size`,void 0),N([L({type:`string`,attribute:`aria-label`,description:`Accessible label for the group.`})],go.prototype,`ariaLabel`,void 0),go=N([z(`quantic-button-bar`)],go);var _o=class extends Jn{constructor(){super(...arguments),this.tabbable=!0,this.disabled=!1,this.active=!1,this.ariaLabel=null}focus(e){this.innerButton?.focus(e)}render(){return F`
      <button
        type="button"
        class=${dr({main:!0,[`size--${this.size}`]:!!this.size,"is-active":this.active})}
        tabindex=${this.disabled||!this.tabbable?-1:0}
        ?disabled=${this.disabled}
        aria-pressed=${this.active?`true`:`false`}
        aria-label=${fr(this.ariaLabel??void 0)}
      >
        <div class="content">
          <slot></slot>
        </div>
      </button>
    `}};_o.meta={tag:`quantic-button-bar-item`,description:`Single segment within a quantic-button-bar. Renders as a native button with shared sizing from the parent context and a pressed state via active.`,category:`action`,subComponentOf:`quantic-button-bar`,slots:{"":{description:`Button label or icon content.`}},relatedTo:[`quantic-button-bar`,`quantic-button`]},_o.styles=P`
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
  `,N([co({context:uo,subscribe:!0})],_o.prototype,`size`,void 0),N([hn()],_o.prototype,`tabbable`,void 0),N([_n(`button`)],_o.prototype,`innerButton`,void 0),N([L({type:`boolean`,default:`false`,description:`Prevents interaction and reduces opacity.`,reflect:!0})],_o.prototype,`disabled`,void 0),N([L({type:`boolean`,default:`false`,description:`Marks this item as the currently selected/active option.`,reflect:!0})],_o.prototype,`active`,void 0),N([L({type:`string`,attribute:`aria-label`,description:`Accessible label for the inner button. Required when the item holds only an icon.`})],_o.prototype,`ariaLabel`,void 0),_o=N([z(`quantic-button-bar-item`)],_o);var vo={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},yo=class extends Ba(Jn){constructor(){super(),this.checked=!1,this.required=!1,this.disabled=!1,this.invalid=!1,this.indeterminate=!1,this.label=``,this.name=``,this.size=vo.Medium,this.defaultChecked=!1,this.defaultIndeterminate=!1,this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.defaultChecked=this.hasAttribute(`checked`),this.defaultIndeterminate=this.hasAttribute(`indeterminate`)}forwardNative(e){let t=e.target;this.checked=t.checked,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}updated(e){super.updated(e);let t=this.renderRoot.querySelector(`input`);t&&(t.indeterminate=this.indeterminate,e.has(`checked`)&&(t.checked=this.checked)),e.has(`checked`)&&this.internals.setFormValue(this.checked?`on`:null)}dispatchValueChanged(e){this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{checked:this.checked,indeterminate:this.indeterminate},bubbles:!0,composed:!0}))}formResetCallback(){let e=this.renderRoot.querySelector(`input`);this.checked=this.defaultChecked,this.indeterminate=this.defaultIndeterminate,this.internals.setFormValue(this.defaultChecked?`on`:null),e&&(e.checked=this.defaultChecked,e.indeterminate=this.defaultIndeterminate)}formStateRestoreCallback(e){this.checked=e===`on`,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}get computedLabel(){return this.ariaLabel||this.label}render(){let e=dr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({label:this.computedLabel,invalid:this.invalid});return F`
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
    `}};yo.meta={tag:`quantic-checkbox`,description:`Form-associated checkbox for selecting one or more options from a set. Supports checked, indeterminate, and disabled states with full form integration.`,category:`form`,avoidWhen:[{when:`the control applies a setting immediately rather than on submit`,useInstead:`quantic-toggle`}],accessibility:{providedByComponent:[`form association`,`Space toggles`,`checked and indeterminate state reflected`],requiredFromConsumer:[`a label, via the label prop or by wrapping in quantic-field`]},slots:{"":{description:`Label content. Falls back to the label property if empty.`}},relatedTo:[`quantic-field`,`quantic-checkbox-group`]},yo.formAssociated=!0,yo.styles=P`
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
  `,N([L({type:`boolean`,default:`false`,reflect:!0,description:`Whether the checkbox is checked.`})],yo.prototype,`checked`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Marks the checkbox as required for form validation.`})],yo.prototype,`required`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction and applies disabled styling.`})],yo.prototype,`disabled`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling when the field fails validation.`})],yo.prototype,`invalid`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Shows an indeterminate (partial-selection) state.`})],yo.prototype,`indeterminate`,void 0),N([L({type:`string`,default:`''`,description:`Visible label text. Overridden by slotted content.`,copyRule:`control-label`})],yo.prototype,`label`,void 0),N([L({type:`string`,default:`''`,description:`Name submitted with form data.`})],yo.prototype,`name`,void 0),N([L({type:`CheckboxSize`,options:Object.values(vo),default:vo.Medium,description:`Controls the size of the checkbox box and label text.`})],yo.prototype,`size`,void 0),yo=N([R(`value-changed`,{description:`Fired whenever the input's value is updated (on input & change).`,detail:`{ checked: boolean, indeterminate: boolean }`}),R(`input`,{forwarded:!0}),R(`change`,{forwarded:!0}),R(`focus`,{forwarded:!0}),R(`blur`,{forwarded:!0}),R(`keydown`,{forwarded:!0}),R(`keyup`,{forwarded:!0}),z(`quantic-checkbox`)],yo);var bo={Small:`sm`,Medium:`md`,Large:`lg`,XLarge:`xl`},xo={None:`none`,Subtle:`subtle`,Opaque:`opaque`},So={Dialog:`dialog`,AlertDialog:`alertdialog`},Co=class extends Jn{constructor(){super(...arguments),this.visible=!1,this.variant=xo.Opaque}render(){return F`<div class="backdrop backdrop--${this.variant}"></div>`}};Co.meta={tag:`quantic-dialog-backdrop`,description:`Semi-transparent overlay rendered behind quantic-dialog. Internal sub-component — do not use directly.`,category:`feedback`,relatedTo:[`quantic-dialog`]},Co.styles=P`
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
  `,N([L({type:`boolean`,default:`false`,reflect:!0,description:`Whether the backdrop is visible.`})],Co.prototype,`visible`,void 0),N([L({type:`DialogBackdrop`,options:Object.values(xo),default:xo.Opaque,description:`Visual style of the backdrop overlay.`})],Co.prototype,`variant`,void 0),Co=N([z(`quantic-dialog-backdrop`)],Co);var wo=class extends Qn(Jn,[`pretitle`,`subtitle`]){constructor(){super(...arguments),this.level=`2`}render(){return F`
      <div class="main">
        <hgroup>
          <slot name="pretitle" class="pretitle"></slot>
          <div class="title" role="heading" aria-level=${this.level}>
            <slot></slot>
          </div>
          <slot name="subtitle" class="subtitle"></slot>
        </hgroup>
      </div>
    `}};wo.meta={tag:`quantic-dialog-title`,description:`Header/title bar sub-component for quantic-dialog. Renders a semantic heading with optional pretitle and subtitle slots.`,category:`feedback`,subComponentOf:`quantic-dialog`,slots:{pretitle:{description:`Small label displayed above the main title.`,copyRule:`title-fragment`},"":{description:`Main title text.`},subtitle:{description:`Supplementary text displayed below the title.`,copyRule:`title-fragment`}},relatedTo:[`quantic-dialog`]},wo.styles=P`
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
  `,N([L({type:`"1" | "2" | "3" | "4" | "5" | "6"`,default:`"2"`,description:`Heading level for the title element.`})],wo.prototype,`level`,void 0),wo=N([z(`quantic-dialog-title`)],wo),eo.ensureDefined();var To=class extends Jn{render(){return ir`
      <quantic-action-group aria-label="">
        <slot></slot>
      </quantic-action-group>
    `}};To.meta={tag:`quantic-dialog-actions`,description:`Footer actions bar for quantic-dialog. Lays action buttons out as a quantic-action-group, flush to the right.`,category:`feedback`,subComponentOf:`quantic-dialog`,slots:{"":{description:`Action buttons, typically quantic-button elements.`}},relatedTo:[`quantic-dialog`,`quantic-button`,`quantic-action-group`]},To.styles=P`
    :host {
      display: block;
    }

    quantic-action-group {
      width: fit-content;
      margin-inline-start: auto;
    }
  `,To=N([z(`quantic-dialog-actions`)],To);var Eo=[`input:not([inert]):not([inert] *)`,`select:not([inert]):not([inert] *)`,`textarea:not([inert]):not([inert] *)`,`a[href]:not([inert]):not([inert] *)`,`area[href]:not([inert]):not([inert] *)`,`button:not([inert]):not([inert] *)`,`[tabindex]:not(slot):not([inert]):not([inert] *)`,`audio[controls]:not([inert]):not([inert] *)`,`video[controls]:not([inert]):not([inert] *)`,`[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)`,`details>summary:first-of-type:not([inert]):not([inert] *)`,`details:not([inert]):not([inert] *)`],Do=Eo.join(`,`),Oo=typeof Element>`u`,ko=Oo?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Ao=!Oo&&Element.prototype.getRootNode?function(e){return e==null||e.getRootNode==null?void 0:e.getRootNode()}:function(e){return e?.ownerDocument},jo=function(e,t){t===void 0&&(t=!0);var n=e==null||e.getAttribute==null?void 0:e.getAttribute(`inert`);return n===``||n===`true`||t&&e&&(typeof e.closest==`function`?e.closest(`[inert]`):jo(e.parentNode))},Mo=function(e){var t,n=e==null||e.getAttribute==null||(t=e.getAttribute(`contenteditable`))==null?void 0:t.toLowerCase();return n===``||n===`true`||n===`plaintext-only`},No=function(e,t,n){if(jo(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Do));return t&&ko.call(e,Do)&&r.unshift(e),r=r.filter(n),r},Po=function(e,t,n){for(var r=[],i=Array.from(e);i.length;){var a=i.shift();if(!jo(a,!1)){if(a.tagName===`SLOT`){var o=a.assignedElements(),s=Po(o.length?o:a.children,!0,n);n.flatten?r.push.apply(r,s):r.push({scopeParent:a,candidates:s})}else{ko.call(a,Do)&&n.filter(a)&&(t||!e.includes(a))&&r.push(a);var c=a.shadowRoot||typeof n.getShadowRoot==`function`&&n.getShadowRoot(a),l=!jo(c,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(a));if(c&&l){var u=Po(c===!0?a.children:c.children,!0,n);n.flatten?r.push.apply(r,u):r.push({scopeParent:a,candidates:u})}else i.unshift.apply(i,a.children)}}}return r},Fo=function(e){return!isNaN(parseInt(e.getAttribute(`tabindex`),10))},Io=function(e){if(!e)throw Error(`No node provided`);return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||Mo(e))&&!Fo(e)?0:e.tabIndex},Lo=function(e,t){var n=Io(e);return n<0&&t&&!Fo(e)?0:n},Ro=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},zo=function(e){return e.tagName===`INPUT`},Bo=function(e){return zo(e)&&e.type===`hidden`},U=function(e){return e.tagName===`DETAILS`&&Array.prototype.slice.apply(e.children).some(function(e){return e.tagName===`SUMMARY`})},Vo=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},Ho=function(e){if(!e.name)return!0;var t=e.form||Ao(e),n=function(e){return t.querySelectorAll(`input[type="radio"][name="`+e+`"]`)},r;if(typeof window<`u`&&window.CSS!==void 0&&typeof window.CSS.escape==`function`)r=n(window.CSS.escape(e.name));else try{r=n(e.name)}catch(e){return console.error(`Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s`,e.message),!1}var i=Vo(r,e.form);return!i||i===e},Uo=function(e){return zo(e)&&e.type===`radio`},Wo=function(e){return Uo(e)&&!Ho(e)},Go=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return n===0&&r===0},Ko=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if(n===`full-native`&&`checkVisibility`in e)return!e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});var i=getComputedStyle(e).visibility;if(i===`hidden`||i===`collapse`)return!0;var a=ko.call(e,`details>summary:first-of-type`)?e.parentElement:e;if(ko.call(a,`details:not([open]) *`))return!0;if(!n||n===`full`||n===`full-native`||n===`legacy-full`){if(typeof r==`function`){for(var o=e;e;){var s=e.parentElement,c=Ao(e);if(s&&!s.shadowRoot&&r(s)===!0)return Go(e);e=e.assignedSlot?e.assignedSlot:!s&&c!==e.ownerDocument?c.host:s}e=o}if(e.isConnected)return!e.getClientRects().length;if(n!==`legacy-full`)return!0}else if(n===`non-zero-area`)return Go(e);return!1},qo=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName===`FIELDSET`&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if(r.tagName===`LEGEND`)return ko.call(t,`fieldset[disabled] *`)?!0:!r.contains(e)}return!0}t=t.parentElement}return!1},Jo=function(e,t){return!(t.disabled||Bo(t)||Ko(t,e)||U(t)||qo(t))},Yo=function(e,t){return!(Wo(t)||Io(t)<0||!Jo(e,t))},Xo=function(e){var t=parseInt(e.getAttribute(`tabindex`),10);return!!(isNaN(t)||t>=0)},Zo=function(e){var t=[],n=[];return e.forEach(function(e,r){var i=!!e.scopeParent,a=i?e.scopeParent:e,o=Lo(a,i),s=i?Zo(e.candidates):a;o===0?i?t.push.apply(t,s):t.push(a):n.push({documentOrder:r,tabIndex:o,item:e,isScope:i,content:s})}),n.sort(Ro).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(t)},Qo=function(e,t){return t||={},Zo(t.getShadowRoot?Po([e],t.includeContainer,{filter:Yo.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Xo}):No(e,t.includeContainer,Yo.bind(null,t)))},$o=function(e,t){return t||={},t.getShadowRoot?Po([e],t.includeContainer,{filter:Jo.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):No(e,t.includeContainer,Jo.bind(null,t))},es=function(e,t){if(t||={},!e)throw Error(`No node provided`);return ko.call(e,Do)!==!1&&Yo(t,e)},ts=Eo.concat(`iframe:not([inert]):not([inert] *)`).join(`,`),ns=function(e,t){if(t||={},!e)throw Error(`No node provided`);return ko.call(e,ts)!==!1&&Jo(t,e)};function rs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function is(e){if(Array.isArray(e))return rs(e)}function as(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=ms(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function os(e,t,n){return(t=ps(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ss(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function cs(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ls(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function us(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ls(Object(n),!0).forEach(function(t){os(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ls(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ds(e){return is(e)||ss(e)||ms(e)||cs()}function fs(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ps(e){var t=fs(e,`string`);return typeof t==`symbol`?t:t+``}function ms(e,t){if(e){if(typeof e==`string`)return rs(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?rs(e,t):void 0}}var hs={getActiveTrap:function(e){return e?.length>0?e[e.length-1]:null},activateTrap:function(e,t){t!==hs.getActiveTrap(e)&&hs.pauseTrap(e);var n=e.indexOf(t);n===-1||e.splice(n,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);n!==-1&&e.splice(n,1),hs.unpauseTrap(e)},pauseTrap:function(e){hs.getActiveTrap(e)?._setPausedState(!0)},unpauseTrap:function(e){var t=hs.getActiveTrap(e);t&&!t._isManuallyPaused()&&t._setPausedState(!1)}},gs=function(e){return e.tagName&&e.tagName.toLowerCase()===`input`&&typeof e.select==`function`},_s=function(e){return e?.key===`Escape`||e?.key===`Esc`||e?.keyCode===27},vs=function(e){return e?.key===`Tab`||e?.keyCode===9},ys=function(e){return vs(e)&&!e.shiftKey},bs=function(e){return vs(e)&&e.shiftKey},xs=function(e){return setTimeout(e,0)},Ss=function(e){var t=[...arguments].slice(1);return typeof e==`function`?e.apply(void 0,t):e},Cs=function(e){return e.target.shadowRoot&&typeof e.composedPath==`function`?e.composedPath()[0]:e.target},ws=[],Ts=function(e,t){var n=t?.document||document,r=t?.trapStack||ws,i=us({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isolateSubtrees:!1,isKeyForward:ys,isKeyBackward:bs},t),a={containers:[],containerGroups:[],tabbableGroups:[],adjacentElements:new Set,alreadySilent:new Set,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},o,s=function(e,t,n){return e&&e[t]!==void 0?e[t]:i[n||t]},c=function(e,t){var n=typeof t?.composedPath==`function`?t.composedPath():void 0;return a.containerGroups.findIndex(function(t){var r=t.container,i=t.tabbableNodes;return r.contains(e)||n?.includes(r)||i.find(function(t){return t===e})})},l=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.hasFallback,a=r!==void 0&&r,o=t.params,s=o===void 0?[]:o,c=i[e];if(typeof c==`function`&&(c=c.apply(void 0,ds(s))),c===!0&&(c=void 0),!c){if(c===void 0||c===!1)return c;throw Error(`\`${e}\` was specified but was not a node, or did not return a node`)}var l=c;if(typeof c==`string`){try{l=n.querySelector(c)}catch(t){throw Error(`\`${e}\` appears to be an invalid selector; error="${t.message}"`)}if(!l&&!a)throw Error(`\`${e}\` as selector refers to no known node`)}return l},u=function(){var e=l(`initialFocus`,{hasFallback:!0});if(e===!1)return!1;if(e===void 0||e&&!ns(e,i.tabbableOptions)){if(c(n.activeElement)>=0)e=n.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||l(`fallbackFocus`)}}else e===null&&(e=l(`fallbackFocus`));if(!e)throw Error(`Your focus-trap needs to have at least one focusable element`);return e},d=function(){if(a.containerGroups=a.containers.map(function(e){var t=Qo(e,i.tabbableOptions),n=$o(e,i.tabbableOptions),r=t.length>0?t[0]:void 0,a=t.length>0?t[t.length-1]:void 0,o=n.find(function(e){return es(e)}),s=n.slice().reverse().find(function(e){return es(e)});return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:!!t.find(function(e){return Io(e)>0}),firstTabbableNode:r,lastTabbableNode:a,firstDomTabbableNode:o,lastDomTabbableNode:s,nextTabbableNode:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=t.indexOf(e);return i<0?r?n.slice(n.indexOf(e)+1).find(function(e){return es(e)}):n.slice(0,n.indexOf(e)).reverse().find(function(e){return es(e)}):t[i+(r?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!l(`fallbackFocus`))throw Error(`Your focus-trap must have at least one container with at least one tabbable node in it at all times`);if(a.containerGroups.find(function(e){return e.posTabIndexesFound})&&a.containerGroups.length>1)throw Error(`At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.`)},f=function(e){var t=e.activeElement;if(t)return t.shadowRoot&&t.shadowRoot.activeElement!==null?f(t.shadowRoot):t},p=function(e){e!==!1&&e!==f(document)&&(!e||!e.focus?p(u()):(e.focus({preventScroll:!!i.preventScroll}),a.mostRecentlyFocusedNode=e,gs(e)&&e.select()))},m=function(e){var t=l(`setReturnFocus`,{params:[e]});return t||t!==!1&&e},h=function(e){var t=e.target,n=e.event,r=e.isBackward,o=r!==void 0&&r;t||=Cs(n),d();var s=null;if(a.tabbableGroups.length>0){var u=c(t,n),f=u>=0?a.containerGroups[u]:void 0;if(u<0)s=o?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(o){var p=a.tabbableGroups.findIndex(function(e){var n=e.firstTabbableNode;return t===n});if(p<0&&(f.container===t||ns(t,i.tabbableOptions)&&!es(t,i.tabbableOptions)&&!f.nextTabbableNode(t,!1))&&(p=u),p>=0){var m=p===0?a.tabbableGroups.length-1:p-1,h=a.tabbableGroups[m];s=Io(t)>=0?h.lastTabbableNode:h.lastDomTabbableNode}else vs(n)||(s=f.nextTabbableNode(t,!1))}else{var g=a.tabbableGroups.findIndex(function(e){var n=e.lastTabbableNode;return t===n});if(g<0&&(f.container===t||ns(t,i.tabbableOptions)&&!es(t,i.tabbableOptions)&&!f.nextTabbableNode(t))&&(g=u),g>=0){var _=g===a.tabbableGroups.length-1?0:g+1,v=a.tabbableGroups[_];s=Io(t)>=0?v.firstTabbableNode:v.firstDomTabbableNode}else vs(n)||(s=f.nextTabbableNode(t))}}else s=l(`fallbackFocus`);return s},g=function(e){c(Cs(e),e)>=0||(Ss(i.clickOutsideDeactivates,e)?o.deactivate({returnFocus:i.returnFocusOnDeactivate}):Ss(i.allowOutsideClick,e)||e.preventDefault())},_=function(e){var t=Cs(e),n=c(t,e)>=0;if(n||t instanceof Document)n&&(a.mostRecentlyFocusedNode=t);else{e.stopImmediatePropagation();var r,o=!0;if(a.mostRecentlyFocusedNode){if(Io(a.mostRecentlyFocusedNode)>0){var s=c(a.mostRecentlyFocusedNode),l=a.containerGroups[s].tabbableNodes;if(l.length>0){var d=l.findIndex(function(e){return e===a.mostRecentlyFocusedNode});d>=0&&(i.isKeyForward(a.recentNavEvent)?d+1<l.length&&(r=l[d+1],o=!1):d-1>=0&&(r=l[d-1],o=!1))}}else a.containerGroups.some(function(e){return e.tabbableNodes.some(function(e){return Io(e)>0})})||(o=!1)}else o=!1;o&&(r=h({target:a.mostRecentlyFocusedNode,isBackward:i.isKeyBackward(a.recentNavEvent)})),p(r||a.mostRecentlyFocusedNode||u())}a.recentNavEvent=void 0},v=function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];a.recentNavEvent=e;var n=h({event:e,isBackward:t});n&&(vs(e)&&e.preventDefault(),p(n))},y=function(e){(i.isKeyForward(e)||i.isKeyBackward(e))&&v(e,i.isKeyBackward(e))},b=function(e){_s(e)&&Ss(i.escapeDeactivates,e)!==!1&&(e.preventDefault(),o.deactivate())},x=function(e){c(Cs(e),e)>=0||Ss(i.clickOutsideDeactivates,e)||Ss(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},S=function(){if(a.active)return hs.activateTrap(r,o),a.delayInitialFocusTimer=i.delayInitialFocus?xs(function(){p(u())}):p(u()),n.addEventListener(`focusin`,_,!0),n.addEventListener(`mousedown`,g,{capture:!0,passive:!1}),n.addEventListener(`touchstart`,g,{capture:!0,passive:!1}),n.addEventListener(`click`,x,{capture:!0,passive:!1}),n.addEventListener(`keydown`,y,{capture:!0,passive:!1}),n.addEventListener(`keydown`,b),o},ee=function(e){a.active&&!a.paused&&o._setSubtreeIsolation(!1),a.adjacentElements.clear(),a.alreadySilent.clear();var t=new Set,n=new Set,r=as(e),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;t.add(s);for(var c=typeof ShadowRoot<`u`&&s.getRootNode()instanceof ShadowRoot,l=s;l;){t.add(l);var u=l.parentElement,d=[];u?d=u.children:!u&&c&&(d=l.getRootNode().children,u=l.getRootNode().host,c=typeof ShadowRoot<`u`&&u.getRootNode()instanceof ShadowRoot);var f=as(d),p;try{for(f.s();!(p=f.n()).done;){var m=p.value;n.add(m)}}catch(e){f.e(e)}finally{f.f()}l=u}}}catch(e){r.e(e)}finally{r.f()}t.forEach(function(e){n.delete(e)}),a.adjacentElements=n},te=function(){if(a.active)return n.removeEventListener(`focusin`,_,!0),n.removeEventListener(`mousedown`,g,!0),n.removeEventListener(`touchstart`,g,!0),n.removeEventListener(`click`,x,!0),n.removeEventListener(`keydown`,y,!0),n.removeEventListener(`keydown`,b),o},C=typeof window<`u`&&`MutationObserver`in window?new MutationObserver(function(e){e.some(function(e){return Array.from(e.removedNodes).some(function(e){return e===a.mostRecentlyFocusedNode})})&&p(u())}):void 0,ne=function(){C&&(C.disconnect(),a.active&&!a.paused&&a.containers.map(function(e){C.observe(e,{subtree:!0,childList:!0})}))};return o={get active(){return a.active},get paused(){return a.paused},activate:function(e){if(a.active)return this;var t=s(e,`onActivate`),c=s(e,`onPostActivate`),l=s(e,`checkCanFocusTrap`),u=hs.getActiveTrap(r),p=!1;if(u&&!u.paused){var m;(m=u._setSubtreeIsolation)==null||m.call(u,!1),p=!0}try{l||d(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=f(n),t?.();var h=function(){l&&d(),S(),ne(),i.isolateSubtrees&&o._setSubtreeIsolation(!0),c?.()};if(l)return l(a.containers.concat()).then(h,h),this;h()}catch(e){if(u===hs.getActiveTrap(r)&&p){var g;(g=u._setSubtreeIsolation)==null||g.call(u,!0)}throw e}return this},deactivate:function(e){if(!a.active)return this;var t=us({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,a.paused||o._setSubtreeIsolation(!1),a.alreadySilent.clear(),te(),a.active=!1,a.paused=!1,ne(),hs.deactivateTrap(r,o);var n=s(t,`onDeactivate`),c=s(t,`onPostDeactivate`),l=s(t,`checkCanReturnFocus`),u=s(t,`returnFocus`,`returnFocusOnDeactivate`);n?.();var d=function(){xs(function(){u&&p(m(a.nodeFocusedBeforeActivation)),c?.()})};return u&&l?(l(m(a.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){return a.active?(a.manuallyPaused=!0,this._setPausedState(!0,e)):this},unpause:function(e){return!a.active||(a.manuallyPaused=!1,r[r.length-1]!==this)?this:this._setPausedState(!1,e)},updateContainerElements:function(e){return a.containers=[].concat(e).filter(Boolean).map(function(e){return typeof e==`string`?n.querySelector(e):e}),i.isolateSubtrees&&ee(a.containers),a.active&&(d(),i.isolateSubtrees&&!a.paused&&o._setSubtreeIsolation(!0)),ne(),this}},Object.defineProperties(o,{_isManuallyPaused:{value:function(){return a.manuallyPaused}},_setPausedState:{value:function(e,t){if(a.paused===e)return this;if(a.paused=e,e){var n=s(t,`onPause`),r=s(t,`onPostPause`);n?.(),te(),ne(),o._setSubtreeIsolation(!1),r?.()}else{var i=s(t,`onUnpause`),c=s(t,`onPostUnpause`);i?.(),o._setSubtreeIsolation(!0),d(),S(),ne(),c?.()}return this}},_setSubtreeIsolation:{value:function(e){i.isolateSubtrees&&a.adjacentElements.forEach(function(t){if(e)switch(i.isolateSubtrees){case`aria-hidden`:(t.ariaHidden===`true`||t.getAttribute(`aria-hidden`)?.toLowerCase()===`true`)&&a.alreadySilent.add(t),t.setAttribute(`aria-hidden`,`true`);break;default:(t.inert||t.hasAttribute(`inert`))&&a.alreadySilent.add(t),t.setAttribute(`inert`,!0)}else if(!a.alreadySilent.has(t))switch(i.isolateSubtrees){case`aria-hidden`:t.removeAttribute(`aria-hidden`);break;default:t.removeAttribute(`inert`)}})}}}),o.updateContainerElements(e),o},Es=500;Co.ensureDefined(),pr.ensureDefined(),jr.ensureDefined();var Ds=class extends Qn(Jn,[`header`,`footer`]){constructor(){super(...arguments),this.open=!1,this.size=bo.Medium,this.fullscreen=!1,this.showCloseButton=!0,this.backdrop=xo.Opaque,this.persistent=!1,this.role=So.Dialog,this.ariaLabel=null,this.dialogId=Cr(`dialog`),this.headerId=Cr(`dialog-title`),this.originalOverflow=``,this.originalPaddingRight=``,this.backdropPointerDownOutside=!1,this.handleTriggerClick=()=>{this.show()},this.handleEscape=e=>{e.key===`Escape`&&this.open&&(e.stopPropagation(),this.persistent||this.hide())},this.handleBackdropPointerDown=e=>{this.backdropPointerDownOutside=e.target===this.wrapperElement},this.handleBackdropPointerUp=e=>{this.persistent||(this.backdropPointerDownOutside&&e.target===this.wrapperElement&&this.hide(),this.backdropPointerDownOutside=!1)},this.hide=async()=>{if(!this.open||this.persistent)return;let e=new Event(`before-close`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.addEventListener(`dialog-close`,this.hide),this.addEventListener(`keydown`,this.handleEscape)}disconnectedCallback(){if(super.disconnectedCallback(),this.removeEventListener(`dialog-close`,this.hide),this.removeEventListener(`keydown`,this.handleEscape),this.unlockBodyScroll(),this.focusTrap)try{this.focusTrap.deactivate()}catch(e){console.error(`Failed to deactivate focus trap:`,e)}finally{this.focusTrap=null}}updated(e){super.updated(e),e.has(`open`)&&(this.open?this._activate():e.get(`open`)&&this._deactivate())}get triggerElement(){return this.triggerSlot?.assignedElements({flatten:!0})[0]}get hasHeaderContent(){return this.headerSlot?.assignedNodes({flatten:!0}).some(e=>e.nodeType!==Node.TEXT_NODE||e.textContent?.trim())??!1}handleSlotChange(){let e=this.triggerElement;e&&(e.setAttribute(`aria-controls`,this.dialogId),e.setAttribute(`aria-haspopup`,`dialog`),e.setAttribute(`aria-expanded`,this.open?`true`:`false`))}lockBodyScroll(){if(typeof document>`u`)return;let e=window.innerWidth-document.documentElement.clientWidth;this.originalOverflow=document.body.style.overflow,this.originalPaddingRight=document.body.style.paddingRight,document.body.style.overflow=`hidden`,e>0&&(document.body.style.paddingRight=`${e}px`)}unlockBodyScroll(){typeof document<`u`&&(document.body.style.overflow=this.originalOverflow,document.body.style.paddingRight=this.originalPaddingRight)}updateTriggerAria(){let e=this.triggerElement;e&&e.setAttribute(`aria-expanded`,this.open?`true`:`false`)}async waitForDialogRender(){await this.updateComplete,await new Promise(e=>{let t=()=>{this.wrapperElement?.removeEventListener(`transitionend`,t),e()};this.wrapperElement?.addEventListener(`transitionend`,t),setTimeout(t,Es)})}async show(){if(this.open)return;let e=new Event(`before-open`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!0)}async toggle(){this.open?await this.hide():await this.show()}async _activate(){if(this.updateTriggerAria(),this.lockBodyScroll(),this.backdropElement&&(await this.backdropElement.updateComplete,this.backdropElement.visible=!0),this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:!0},bubbles:!0,composed:!0})),await this.updateComplete,this.mainElement)try{this.focusTrap=Ts(this.mainElement,{escapeDeactivates:!1,clickOutsideDeactivates:!1,allowOutsideClick:!0,returnFocusOnDeactivate:!0,fallbackFocus:this.mainElement,tabbableOptions:{getShadowRoot:!0}}),this.focusTrap.activate()}catch(e){console.error(`Failed to activate focus trap:`,e),this.focusTrap=null}await this.waitForDialogRender(),this.dispatchEvent(new Event(`after-open`,{bubbles:!0,composed:!0}))}async _deactivate(){if(this.updateTriggerAria(),this.focusTrap)try{this.focusTrap.deactivate()}catch(e){console.error(`Failed to deactivate focus trap:`,e)}finally{this.focusTrap=null}this.backdropElement&&(this.backdropElement.visible=!1),this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:!1},bubbles:!0,composed:!0})),await this.waitForDialogRender(),this.unlockBodyScroll(),this.dispatchEvent(new Event(`after-close`,{bubbles:!0,composed:!0}))}render(){return F`
      <div class="trigger" @click=${this.handleTriggerClick}>
        <slot name="trigger" @slotchange=${this.handleSlotChange}></slot>
      </div>
      <quantic-dialog-backdrop
        ?visible=${this.open}
        variant=${this.backdrop}
      ></quantic-dialog-backdrop>
      <div
        class=${dr({wrapper:!0,"wrapper--fullscreen":this.fullscreen})}
        @pointerdown=${this.handleBackdropPointerDown}
        @pointerup=${this.handleBackdropPointerUp}
      >
        <div
          class=${dr({main:!0,fullscreen:this.fullscreen,[`size--${this.size}`]:!this.fullscreen})}
          role=${this.role}
          aria-modal="true"
          aria-labelledby=${fr(this.hasHeaderContent?this.headerId:void 0)}
          aria-label=${fr(this.ariaLabel??void 0)}
          id=${this.dialogId}
          tabindex="-1"
        >
          ${this.showCloseButton&&!this.persistent?F`<quantic-button
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
    `}};Ds.meta={tag:`quantic-dialog`,description:`Modal overlay dialog with focus trap, scroll lock, and animated entrance. Use quantic-dialog-title in the header slot and quantic-dialog-actions in the footer slot.`,category:`feedback`,avoidWhen:[{when:`the dialog only confirms or cancels one action`,useInstead:`quantic-confirm-dialog`},{when:`the content is contextual and does not need to block the page`,useInstead:`quantic-popover`},{when:`the page should stay usable while the content is open, such as a detail or chat panel`,useInstead:`quantic-drawer`}],accessibility:{providedByComponent:[`focus trap while open`,`focus restored to the trigger on close`,`Escape dismisses`,`scroll lock`],requiredFromConsumer:[`a title, via quantic-dialog-title in the header slot or the ariaLabel prop`]},slots:{trigger:{description:`Element that opens the dialog when clicked.`},header:{description:`Dialog header — place quantic-dialog-title here.`},"":{description:`Main dialog body content.`},footer:{description:`Dialog footer — place quantic-dialog-actions here.`}},relatedTo:[`quantic-button`]},Ds.styles=P`
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
  `,N([L({type:`boolean`,default:`false`,reflect:!0,description:`Whether the dialog is visible.`})],Ds.prototype,`open`,void 0),N([L({type:`DialogSize`,options:Object.values(bo),default:bo.Medium,description:`Maximum width of the dialog panel.`})],Ds.prototype,`size`,void 0),N([L({type:`boolean`,default:`false`,description:`Expands the dialog to fill the viewport, ignoring size.`})],Ds.prototype,`fullscreen`,void 0),N([L({type:`boolean`,default:`true`,description:`Shows a built-in close button in the top-right corner.`})],Ds.prototype,`showCloseButton`,void 0),N([L({type:`DialogBackdrop`,options:Object.values(xo),default:xo.Opaque,description:`Style of the backdrop overlay.`})],Ds.prototype,`backdrop`,void 0),N([L({type:`boolean`,default:`false`,description:`Prevents the dialog from being closed via Escape or backdrop click.`})],Ds.prototype,`persistent`,void 0),N([L({type:`DialogRole`,options:Object.values(So),default:So.Dialog,description:`ARIA role for the dialog element. Use "alertdialog" for confirmation dialogs.`})],Ds.prototype,`role`,void 0),N([L({type:`string`,attribute:`aria-label`,description:`Accessible label when the dialog has no visible heading.`})],Ds.prototype,`ariaLabel`,void 0),N([_n(`quantic-dialog-backdrop`)],Ds.prototype,`backdropElement`,void 0),N([_n(`.wrapper`)],Ds.prototype,`wrapperElement`,void 0),N([_n(`.main`)],Ds.prototype,`mainElement`,void 0),N([_n(`slot[name="trigger"]`)],Ds.prototype,`triggerSlot`,void 0),N([_n(`slot[name="header"]`)],Ds.prototype,`headerSlot`,void 0),Ds=N([R(`open-changed`,{description:`Fired when the dialog open state changes.`,detail:`{ open: boolean }`}),R(`before-open`,{description:`Fired before the dialog opens.`}),R(`after-open`,{description:`Fired after the dialog opens and animations complete.`}),R(`before-close`,{description:`Fired before the dialog closes.`}),R(`after-close`,{description:`Fired after the dialog closes and animations complete.`}),z(`quantic-dialog`)],Ds);var Os=class extends Jn{constructor(){super(...arguments),this.open=!1,this.heading=``,this.message=``,this.confirmText=`Confirm`,this.cancelText=`Cancel`,this.destructive=!1,this.loading=!1,this.persistent=!1,this.showCloseButton=!0,this.size=bo.Small,this.handleConfirmClick=()=>{if(this.loading)return;let e=new Event(`confirm`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!1)},this.handleCancelClick=()=>{this.loading||(this.dispatchEvent(new Event(`cancel`,{bubbles:!0,composed:!0})),this.open=!1)},this.handleInnerBeforeClose=()=>{this.dispatchEvent(new Event(`cancel`,{bubbles:!0,composed:!0}))},this.handleInnerOpenChanged=e=>{let t=e.detail;this.open!==t.open&&(this.open=t.open)}}updated(e){super.updated(e),e.has(`open`)&&this.innerDialog&&(this.innerDialog.open=this.open)}get buttonSize(){return this.size===bo.Large||this.size===bo.XLarge?or.Medium:or.Small}render(){return F`
      <quantic-dialog
        .size=${this.size}
        .role=${So.AlertDialog}
        ?persistent=${this.persistent||this.loading}
        ?show-close-button=${this.showCloseButton&&!this.loading}
        @before-close=${this.handleInnerBeforeClose}
        @open-changed=${this.handleInnerOpenChanged}
      >
        <slot name="trigger" slot="trigger"></slot>
        ${this.heading?F`<quantic-dialog-title slot="header" level="2">
              ${this.heading}
            </quantic-dialog-title>`:Kt}

        <div class="body">
          <slot>${this.message?F`<p>${this.message}</p>`:Kt}</slot>
        </div>

        <quantic-dialog-actions slot="footer">
          <quantic-button
            variant="${ar.Outline}"
            .size=${this.buttonSize}
            ?disabled=${this.loading}
            @click=${this.handleCancelClick}
          >
            ${this.cancelText}
          </quantic-button>
          <quantic-button
            variant="${ar.Primary}"
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
    `}};Os.meta={tag:`quantic-confirm-dialog`,description:'Confirmation dialog with title, body, and confirm/cancel actions. Wraps quantic-dialog with role="alertdialog". Use `destructive` for irreversible actions.',category:`feedback`,avoidWhen:[{when:`the dialog carries a form or more than two actions`,useInstead:`quantic-dialog`}],accessibility:{providedByComponent:[`role=alertdialog`,`everything quantic-dialog provides`],requiredFromConsumer:[`a heading and a message, so the action is named without relying on the button alone`]},slots:{trigger:{description:`Element that opens the dialog when clicked.`},"":{description:"Body content. Overrides the `message` prop when non-empty. Accepts rich HTML, including a nested quantic-alert for contextual warnings."},"confirm-icon":{description:`Optional leading icon for the confirm button.`}},relatedTo:[`quantic-dialog`,`quantic-button`,`quantic-alert`]},Os.styles=P`
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
  `,N([L({type:`boolean`,default:`false`,reflect:!0,description:`Whether the dialog is visible.`})],Os.prototype,`open`,void 0),N([L({type:`string`,description:`Heading shown in the dialog header.`,copyRule:`heading`})],Os.prototype,`heading`,void 0),N([L({type:`string`,description:`Body message. Ignored if default slot has content. Use the slot for rich content.`,copyRule:`body-message`})],Os.prototype,`message`,void 0),N([L({type:`string`,attribute:`confirm-text`,default:`"Confirm"`,description:`Label for the confirm action button.`,copyRule:`action-label`})],Os.prototype,`confirmText`,void 0),N([L({type:`string`,attribute:`cancel-text`,default:`"Cancel"`,description:`Label for the cancel action button.`,copyRule:`dismiss-label`})],Os.prototype,`cancelText`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Renders the confirm button in error/danger colors. Use for irreversible actions such as delete or remove.`})],Os.prototype,`destructive`,void 0),N([L({type:`boolean`,default:`false`,description:`Disables both action buttons. Set while performing an async action after a confirm event.`})],Os.prototype,`loading`,void 0),N([L({type:`boolean`,default:`false`,description:`Prevents the dialog from being closed via Escape, backdrop, or the close button.`})],Os.prototype,`persistent`,void 0),N([L({type:`boolean`,attribute:`show-close-button`,default:`true`,description:`Shows the close (X) button in the top-right corner.`})],Os.prototype,`showCloseButton`,void 0),N([L({type:`DialogSize`,options:Object.values(bo),default:bo.Small,description:`Maximum width of the dialog panel.`})],Os.prototype,`size`,void 0),N([_n(`quantic-dialog`)],Os.prototype,`innerDialog`,void 0),Os=N([R(`confirm`,{description:"Fired when the confirm button is clicked. Cancellable — call preventDefault() to keep the dialog open (e.g. while performing an async action with `loading`)."}),R(`cancel`,{description:`Fired when the dialog is dismissed via the cancel button, close button, Escape, or backdrop click.`}),z(`quantic-confirm-dialog`)],Os);var ks=`important`,As=` !`+ks,js=lr(class extends ur{constructor(e){if(super(e),e.type!==cr.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(As);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?ks:``):n[e]=r}}return Gt}});function Ms(e){let t=Number.isFinite(e.minSize)?e.minSize:0,n=Number.isFinite(e.maxSize)?e.maxSize:100,r=br(t,0,100),i=br(n,0,100);return{min:Math.min(r,i),max:Math.max(r,i)}}function Ns(e,t){if(t){if(e===`ArrowUp`)return-1;if(e===`ArrowDown`)return 1}else{if(e===`ArrowLeft`)return-1;if(e===`ArrowRight`)return 1}return null}function Ps(e,t){return t.reduce((t,n,r)=>n.collapsed?t:t+e[r],0)}function Fs(e,t,n){let{a:r,b:i,total:a}=n,o=Math.max(r.min,a-i.max),s=Math.min(r.max,a-i.min),c=br(e+t,Math.min(o,s),Math.max(o,s));return[c,a-c]}function Is(e,t){return e*t/100}function Ls(e,t){if(e.length!==t.length)return e;let n=Ps(e,t);return n===0?e.map(()=>0):e.map((e,r)=>t[r]?.collapsed?0:e/n*100)}var Rs=e=>{if(e.endsWith(`%`)){let t=parseFloat(e);return{percent:isNaN(t)||t<0?0:t,flex:0}}let t=e===`*`?1:parseFloat(e);return{percent:0,flex:isNaN(t)||t<=0?1:t}},zs={percent:0,flex:1};function Bs(e,t){if(t===0)return[];let n=e.trim().split(/\s+/).filter(Boolean),r=Array.from({length:t},(e,t)=>t<n.length?Rs(n[t]):zs),i=r.reduce((e,{percent:t})=>e+t,0),a=r.reduce((e,{flex:t})=>e+t,0),o=Math.max(0,100-i),s=r.map(({percent:e,flex:t})=>t===0?e:a>0?t/a*o:0),c=s.reduce((e,t)=>e+t,0);return c>0?s.map(e=>e/c*100):Array(t).fill(100/t)}var Vs=class extends B{render(){return Wt`
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

    `}};Vs.styles=B.styles,Vs=N([z(`quantic-icon-lucide-eye`)],Vs);var Hs=class extends B{render(){return Wt`
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

    `}};Hs.styles=B.styles,Hs=N([z(`quantic-icon-lucide-eye-off`)],Hs);var Us={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`};Vs.ensureDefined(),Hs.ensureDefined(),pr.ensureDefined();var Ws=class extends Ba(Jn){focus(e){this.nativeInput?.focus(e)}constructor(){super(),this.value=``,this.type=`text`,this.name=``,this.placeholder=``,this.size=Us.Medium,this.disabled=!1,this.required=!1,this.readOnly=!1,this.invalid=!1,this.autoComplete=`off`,this.showPassword=!1,this.internals=this.attachInternals()}togglePassword(){this.showPassword=!this.showPassword}get iconSize(){return Ga(this.size)}updated(e){e.has(`value`)&&(this.internals.setFormValue(this.value),this.updateValidity()),wr(this,e,this.value)}forwardNative(e){let t=e.target;this.value=t.value,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}handleKeyDown(e){this.forwardNative(e),e.key===`Enter`&&this.internals.form?.requestSubmit()}dispatchValueChanged(e){this.value=e.target.value}formResetCallback(){this.value=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}updateValidity(){let e=this.shadowRoot?.querySelector(`input`);e&&this.internals.setValidity(e.validity,e.validationMessage,e)}render(){let e=dr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return F`
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
        ${this.type===`password`?F`<quantic-button
                class="password-toggle"
                variant="ghost"
                size="xs"
                icon
                type="button"
                ?disabled=${this.disabled||this.readOnly}
                aria-label=${this.showPassword?`Hide password`:`Show password`}
                @click=${this.togglePassword}
              >
                ${this.showPassword?F`<quantic-icon-lucide-eye-off
                        size=${this.iconSize}
                      ></quantic-icon-lucide-eye-off>`:F`<quantic-icon-lucide-eye
                        size=${this.iconSize}
                      ></quantic-icon-lucide-eye>`}
              </quantic-button>`:``}
        ${this.invalid?Ka(this.size):``}
        ${this.invalid?``:F`<slot name="suffix"></slot>`}
      </div>
    `}};Ws.meta={tag:`quantic-text-input`,description:`Single-line text field with native form association. Wrap in quantic-field to add a visible label, hint text, and validation messaging. Use type="password" or type="email" to get browser-native input behaviour.`,category:`form`,avoidWhen:[{when:`the value is numeric with a min, max or step`,useInstead:`quantic-number-input`},{when:`the value is multi-line prose`,useInstead:`quantic-textarea`}],accessibility:{providedByComponent:[`form association`,`native input semantics and keyboard behaviour`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{prefix:{description:`Leading content (e.g. icon or currency symbol).`},suffix:{description:`Trailing content (e.g. icon or unit label).`}},parts:{input:{description:`The native input element.`}},relatedTo:[`quantic-field`,`quantic-number-input`,`quantic-select`]},Ws.formAssociated=!0,Ws.styles=[Ya(`text-input`,`5em`),P`
      .input:-webkit-autofill {
        -webkit-text-fill-color: var(--quantic-text-secondary);
        -webkit-box-shadow: 0 0 0px 1000px
          var(--quantic-component-text-input-bg, var(--quantic-bg-primary)) inset;
      }

      .password-toggle {
        margin-inline-start: var(--quantic-spacing-2);
      }
    `],N([L({type:`string`,default:``,description:`Current value of the input.`})],Ws.prototype,`value`,void 0),N([L({type:`string`,default:`text`,description:`Native input type.`})],Ws.prototype,`type`,void 0),N([L({type:`string`,description:`Name submitted with form data.`})],Ws.prototype,`name`,void 0),N([L({type:`string`,description:`Placeholder text shown when the field is empty.`,copyRule:`placeholder`})],Ws.prototype,`placeholder`,void 0),N([L({type:`TextInputSize`,options:Object.values(Us),default:Us.Medium,description:`Controls padding and font size.`})],Ws.prototype,`size`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],Ws.prototype,`disabled`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],Ws.prototype,`required`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Makes the field non-editable but still focusable and selectable.`})],Ws.prototype,`readOnly`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],Ws.prototype,`invalid`,void 0),N([L({type:`string`,default:`off`,reflect:!0,description:`Native autocomplete attribute passed to the inner <input>.`})],Ws.prototype,`autoComplete`,void 0),N([hn()],Ws.prototype,`showPassword`,void 0),N([_n(`input`)],Ws.prototype,`nativeInput`,void 0),Ws=N([R(`value-changed`,{description:`Fired whenever the value changes, from user input or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),R(`input`,{forwarded:!0}),R(`change`,{forwarded:!0}),R(`focus`,{forwarded:!0}),R(`blur`,{forwarded:!0}),R(`keydown`,{forwarded:!0}),R(`keyup`,{forwarded:!0}),R(`keypress`,{forwarded:!0}),z(`quantic-text-input`)],Ws);var Gs={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},Ks=class extends Ba(Jn){constructor(){super(...arguments),this.options=[],this.value=``,this.name=``,this.placeholder=``,this.size=Gs.Medium,this.disabled=!1,this.required=!1,this.invalid=!1,this._selectRef=Qr(),this._slottedOptions=[]}dispatchValueChanged(e){this.value=e.target.value}openDropdown(e){if(!this.disabled){e.stopPropagation();let t=this._selectRef.value;t?.showPicker(),t?.click(),t?.focus()}}updated(e){if(e.has(`value`)){let e=this._selectRef.value,t=this.options.find(([,e])=>e===this.value);e&&t&&(e.value=t[1])}wr(this,e,this.value)}forwardNative(e){this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}handleSlotChange(e){let t=e.target.assignedElements({flatten:!0});this._slottedOptions=t.filter(e=>e.tagName===`OPTION`),this.requestUpdate()}render(){let e=dr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return F`
      <slot @slotchange=${this.handleSlotChange} style="display: none"></slot>
      <div class="${e}">
        <slot name="prefix"></slot>
        <select
          ${ti(this._selectRef)}
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
          ${!this.value&&this.placeholder?F`<option value="">${this.placeholder}</option>`:null}
          ${this.options.length>0?this.options.map(([e,t])=>F`<option value=${t}>${e}</option>`):this._slottedOptions.length>0?this._slottedOptions.map(e=>F`<option value=${e.value} ?selected=${e.selected}>${e.textContent}</option>`):F`<option value="" disabled>No options available</option>`}
        </select>
        ${this.invalid?Ka(this.size):F`<slot name="suffix"
                >${qa(this.size,{click:this.openDropdown})}</slot
              >`}
      </div>
    `}};Ks.meta={tag:`quantic-select`,description:`Dropdown select input backed by a native <select>. Form-associated. Pass options via the options prop or slot native <option> elements.`,category:`form`,avoidWhen:[{when:`the option set is large enough to need filtering`,useInstead:`quantic-combobox`}],accessibility:{providedByComponent:[`native select semantics and keyboard behaviour`,`form association`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{"":{description:`Native option elements, read to build the list. Never rendered directly.`},prefix:{description:`Leading content (e.g. icon).`},suffix:{description:`Trailing content, replacing the default chevron.`}},relatedTo:[`quantic-field`,`quantic-text-input`]},Ks.styles=[Ya(`select`,`6em`),P`
      .main {
        line-height: var(--quantic-line-height-body-md);
      }
    `],N([L({type:`Option<T>[]`,default:`[]`,description:`Array of [label, value] tuples. Alternatively, slot native <option> elements.`})],Ks.prototype,`options`,void 0),N([L({type:`string`,default:``,reflect:!0,description:`Currently selected value.`})],Ks.prototype,`value`,void 0),N([L({type:`string`,description:`Name submitted with form data.`})],Ks.prototype,`name`,void 0),N([L({type:`string`,description:`Placeholder option shown when no value is selected.`,copyRule:`placeholder`})],Ks.prototype,`placeholder`,void 0),N([L({type:`SelectSize`,options:Object.values(Gs),default:Gs.Medium,description:`Controls padding and font size.`})],Ks.prototype,`size`,void 0),N([L({type:`boolean`,default:`false`,description:`Prevents interaction.`})],Ks.prototype,`disabled`,void 0),N([L({type:`boolean`,default:`false`,description:`Marks the field as required for form validation.`})],Ks.prototype,`required`,void 0),N([L({type:`boolean`,default:`false`,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],Ks.prototype,`invalid`,void 0),Ks=N([R(`value-changed`,{description:`Fired whenever the value changes, from user selection or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),R(`focus`,{forwarded:!0}),R(`blur`,{forwarded:!0}),z(`quantic-select`)],Ks);var qs=class extends B{render(){return Wt`
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

    `}};qs.styles=B.styles,qs=N([z(`quantic-icon-lucide-chevron-up`)],qs);var Js=class extends B{render(){return Wt`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-panel-left-close"
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
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M9 3v18" />
  <path d="m16 15-3-3 3-3" />
</svg>

    `}};Js.styles=B.styles,Js=N([z(`quantic-icon-lucide-panel-left-close`)],Js);var Ys=class extends B{render(){return Wt`
<!-- @license lucide-static v0.511.0 - ISC -->
<svg
  class="lucide lucide-panel-left-open"
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
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M9 3v18" />
  <path d="m14 9 3 3-3 3" />
</svg>

    `}};Ys.styles=B.styles,Ys=N([z(`quantic-icon-lucide-panel-left-open`)],Ys);var Xs=class extends B{render(){return Wt`
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

    `}};Xs.styles=B.styles,Xs=N([z(`quantic-icon-lucide-pencil`)],Xs);var Zs=class extends B{render(){return Wt`
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

    `}};Zs.styles=B.styles,Zs=N([z(`quantic-icon-lucide-search`)],Zs),Xs.ensureDefined();var Qs=class extends Jn{constructor(){super(...arguments),this.label=``,this.active=!1,this.invalid=!1,this.handleActivateClick=()=>{this.active||this.activate()},this.handleTriggerKey=e=>{this.active||e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),e.stopPropagation(),this.activate())},this.handleKeyDown=e=>{this.active&&e.key===`Escape`&&(this.deactivate(!0),this.dispatchEvent(new CustomEvent(`cancel`,{bubbles:!0,composed:!0})))},this.handleFocusOut=e=>{this.active&&!this.invalid&&(this.contains(e.relatedTarget)||this.shadowRoot?.contains(e.relatedTarget)||this.deactivate())}}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`focusout`,this.handleFocusOut)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`focusout`,this.handleFocusOut)}activate(){this.active=!0,this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(`slot[name="editor"]`)?.assignedElements()[0];(e?.shadowRoot?.querySelector(`input, textarea, select, [tabindex]:not([tabindex="-1"])`)??e)?.focus()})}deactivate(e=!1){this.active=!1,e&&this.updateComplete.then(()=>{this.renderRoot.querySelector(`.row`)?.focus()})}render(){let e=!!this.label;return F`
      <div
        class="${dr({row:!0,"is-active":this.active})}"
        role="${this.active?`group`:`button`}"
        tabindex="${this.active?`-1`:`0`}"
        @click=${this.handleActivateClick}
        @keydown=${this.handleTriggerKey}
      >
        <span class=${dr({label:!0,"is-empty":!e})}
          ><slot name="label">${this.label}</slot></span
        >
        <span class="value">
          <span class="display">
            <slot name="display"><span>—</span></slot>
          </span>
          <span class="editor">
            <slot name="editor"></slot>
          </span>
          <span class="affordance">
            <quantic-icon-lucide-pencil
              size=${gr.ExtraSmall}
            ></quantic-icon-lucide-pencil>
          </span>
        </span>
      </div>
    `}};Qs.meta={tag:`quantic-inline-edit`,description:`Inline editable field that displays as static text and transitions to an input on click or keyboard activation. Fires a cancel event on Escape so consumers can revert optimistic state.`,category:`form`,accessibility:{providedByComponent:[`Escape cancels`,`focus returned after commit or cancel`],requiredFromConsumer:[`a label naming the value being edited`]},slots:{label:{description:`Optional label displayed to the left of the value.`,copyRule:`field-label`},display:{description:`Static display value shown when not active.`},editor:{description:`Input element shown when the field is active.`}}},Qs.styles=[P`
    :host {
      display: block;
      padding: var(
        --quantic-component-inline-edit-padding,
        var(--quantic-spacing-2)
      );
      margin-inline: calc(
        var(--quantic-component-inline-edit-padding, var(--quantic-spacing-2)) *
          -1
      );
      font-family: var(--quantic-font-family-body);
      border-radius: var(
        --quantic-component-inline-edit-border-radius,
        var(--quantic-radius-sm)
      );
      transition: background-color 0.15s ease-in-out;
      position: relative;
    }

    :host(:not([active])) {
      cursor: pointer;
    }

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--quantic-component-inline-edit-gap, var(--quantic-spacing-4));
    }

    .row:focus-visible {
      outline: 2px solid var(--quantic-focus-ring);
      outline-offset: 1px;
    }

    .label {
      flex-shrink: 0;
      font-size: var(
        --quantic-component-inline-edit-label-font-size,
        var(--quantic-font-size-body-sm)
      );
    }

    .label.is-empty {
      display: none;
    }

    .value {
      min-width: 0;
      display: flex;
      align-items: center;
      gap: var(--quantic-spacing-2);
    }

    @media (hover: hover) {
      :host(:hover) {
        background-color: var(--quantic-bg-secondary);
      }

      :host(:hover) .affordance {
        opacity: 1;
      }
    }

    @media (hover: none) {
      .affordance {
        opacity: 1;
      }
    }

    .display {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: flex;
      align-items: center;
    }

    .affordance {
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      line-height: 1;
      color: var(--quantic-text-tertiary);
      background-color: var(--quantic-bg-primary);
      border-radius: var(--quantic-radius-sm);
      padding: var(--quantic-spacing-1);
      opacity: 0;
      transition: opacity 0.15s ease-in-out;
      position: absolute;
      right: var(--quantic-spacing-1);
      width: var(--quantic-spacing-6);
      height: var(--quantic-spacing-6);
      justify-content: center;
    }

    .editor {
      flex: 1;
      min-width: 0;
      display: none;
    }

    .is-active .display,
    .is-active .affordance {
      display: none;
    }

    .is-active .editor {
      display: block;
    }
  `,Yn(`label`,P`
    .label.is-empty {
      display: revert;
    }
  `)],N([L({type:`string`,default:``,description:`Fallback label text when no label slot content is provided.`,copyRule:`field-label`})],Qs.prototype,`label`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`When true, the editor slot is visible and the display is hidden.`})],Qs.prototype,`active`,void 0),N([L({type:`boolean`,default:`false`,description:`When true, focusout does not close the editor. The editor stays open until the value is valid or the user cancels.`})],Qs.prototype,`invalid`,void 0),Qs=N([R(`cancel`,{description:`Fired on Escape. Consumer should revert optimistic state.`}),z(`quantic-inline-edit`)],Qs);var $s={MAX_LINES:1e4,FOLLOW_SCROLL_THRESHOLD:50},ec=[`log-black`,`log-danger`,`log-success`,`log-warning`,`log-blue`,`log-magenta`,`log-info`,`log-white`,`log-gray`,`log-danger`,`log-success`,`log-warning`,`log-blue`,`log-magenta`,`log-info`,`log-white`],tc=[`#1c1c1c`,`#8b0000`,`#006400`,`#808000`,`#00008b`,`#800080`,`#008b8b`,`#a9a9a9`,`#404040`,`#ff4444`,`#44ff44`,`#ffff44`,`#4444ff`,`#ff44ff`,`#44ffff`,`#ffffff`],nc=e=>e===0?0:55+e*40,rc=e=>{let t=e-16,n=Math.floor(t/36),r=Math.floor(t%36/6),i=t%6;return`rgb(${nc(n)},${nc(r)},${nc(i)})`},ic=e=>{let t=8+(e-232)*10;return`rgb(${t},${t},${t})`},ac=e=>e<232?rc(e):ic(e),oc=[`fgClass`,`fgRgb`,`bgColor`,`bold`,`dim`,`italic`,`underline`],sc=()=>({fgClass:null,fgRgb:null,bgColor:null,bold:!1,dim:!1,italic:!1,underline:!1}),cc=e=>({...e,fgClass:null,fgRgb:null}),lc=(e,t)=>t<16?{...e,fgClass:ec[t],fgRgb:null}:{...e,fgClass:null,fgRgb:ac(t)},uc=(e,t)=>({...e,bgColor:t<16?tc[t]:ac(t)}),dc=(e,t=0)=>({state:e,skip:t}),fc=e=>t=>dc({...t,...e}),pc=e=>t=>dc(e(t)),mc=(e,{params:t,index:n})=>{let r=t[n+1];return r===5&&n+2<t.length?dc(lc(e,t[n+2]),2):r===2&&n+4<t.length?dc({...e,fgClass:null,fgRgb:`rgb(${t[n+2]},${t[n+3]},${t[n+4]})`},4):dc(e)},hc=(e,{params:t,index:n})=>{let r=t[n+1];return r===5&&n+2<t.length?dc(uc(e,t[n+2]),2):r===2&&n+4<t.length?dc({...e,bgColor:`rgb(${t[n+2]},${t[n+3]},${t[n+4]})`},4):dc(e)},gc=e=>t=>dc({...t,fgClass:ec[e],fgRgb:null}),_c=e=>t=>dc({...t,bgColor:tc[e]}),vc={0:()=>dc(sc()),1:fc({bold:!0}),2:fc({dim:!0}),3:fc({italic:!0}),4:fc({underline:!0}),22:fc({bold:!1,dim:!1}),23:fc({italic:!1}),24:fc({underline:!1}),38:mc,39:pc(cc),48:hc,49:fc({bgColor:null})},yc=e=>vc[e]||(e>=30&&e<=37?gc(e-30):e>=40&&e<=47?_c(e-40):e>=90&&e<=97?gc(e-90+8):e>=100&&e<=107?_c(e-100+8):e=>dc(e)),bc=e=>e===``?[0]:e.split(`;`).map(Number),xc=(e,t)=>t.reduce(e=>{if(e.index>=t.length)return e;let n=t[e.index],{state:r,skip:i}=yc(n)(e.state,{params:t,index:e.index});return{state:r,index:e.index+1+i}},{state:e,index:0}).state,Sc=(e,t)=>xc(e,bc(t));function Cc(e){let{fgClass:t,fgRgb:n,bgColor:r,bold:i,dim:a,italic:o,underline:s}=e;return t===null&&n===null&&r===null&&!i&&!a&&!o&&!s}function wc(e){let t=[...e.matchAll(/\x1b\[([0-9;]*)m/g)].reduce((t,n)=>{let r=e.slice(t.cursor,n.index);return{segments:r?[...t.segments,{text:r,state:t.state}]:t.segments,state:Sc(t.state,n[1]),cursor:n.index+n[0].length}},{segments:[],state:sc(),cursor:0}),n=e.slice(t.cursor);return n?[...t.segments,{text:n,state:t.state}]:t.segments}var Tc=e=>e.map(e=>e.text).join(``),Ec=/^\[(?:info|ok|warn|error|debug)\]$/i;function Dc(e){if(e.length<2)return null;let[t,...n]=e;if(!Ec.test(t.text))return null;let r=n.map(e=>({...e,state:{...e.state}})),i=r[0];return i&&(r[0]={...i,text:i.text.replace(/^\s+/,``)}),{tag:t,body:r}}var Oc=(e,t)=>oc.every(n=>e[n]===t[n]),kc=(e,t,n)=>{let r=Array(e).fill(`none`);return t.forEach(({start:e,end:t})=>r.fill(`hit`,e,t)),n&&r.fill(`active`,n.start,n.end),r},Ac=(e,t)=>{let n=[],r=Math.max(t.length,1);for(let i=e.indexOf(t);i!==-1;i=e.indexOf(t,i+r))n.push({start:i,end:i+t.length});return n};function jc(e,t){let n=t.trim();return n?Ac(e.toLowerCase(),n.toLowerCase()):[]}function Mc(e,t){return e.flatMap((e,n)=>jc(Tc(e),t).map(({start:e,end:t})=>({lineIndex:n,start:e,end:t})))}var Nc=e=>e.map((t,n)=>e.slice(0,n).reduce((e,t)=>e+t.text.length,0)),Pc=e=>{let t=Nc(e);return e.flatMap((e,n)=>e.text.split(``).map((r,i)=>({char:r,state:e.state,pos:t[n]+i})))},Fc=e=>e.reduce((e,t)=>{let n=e[e.length-1];return n&&n.highlight===t.highlight&&Oc(n.state,t.state)?e[e.length-1]={...n,text:n.text+t.text}:e.push(t),e},[]);function Ic(e,t,n){if(!t.length)return e.map(e=>({...e,highlight:`none`}));let r=Pc(e),i=kc(r.length,t,n);return Fc(r.map(({char:e,state:t,pos:n})=>({text:e,state:t,highlight:i[n]})))}var Lc=class extends Jn{constructor(){super(...arguments),this.parsed=[],this.lineIndex=0,this.searchQuery=``,this.activeMatch=null,this.lineNumber=0}scrollActiveMatchIntoView(){this.renderRoot.querySelector(`.log-search-active`)?.scrollIntoView({block:`nearest`,inline:`nearest`})}renderSegment({text:e,state:t}){if(Cc(t))return e;let n={"log-bold":t.bold,"log-dim":t.dim,"log-italic":t.italic,"log-underline":t.underline};return t.fgClass&&(n[t.fgClass]=!0),F`<span
      class=${dr(n)}
      style=${js({color:t.fgRgb,background:t.bgColor})}
      >${e}</span
    >`}renderSearchSlice(e){let t=this.renderSegment({text:e.text,state:e.state});return e.highlight===`none`?t:F`<mark
      class=${dr({"log-search-hit":e.highlight===`hit`,"log-search-active":e.highlight===`active`})}
      >${t}</mark
    >`}get showLineNumber(){return this.lineNumber>0}renderLineNumber(){return this.showLineNumber?F`<span class="line-number">${this.lineNumber}</span>`:null}renderPlainContent(e){return F`<span class="log-line">${e.map(e=>this.renderSegment(e))}</span>`}renderLeveledContent(e){return F`<span class="log-level-tag">${this.renderSegment(e.tag)}</span
      ><span class="log-level-body">${e.body.map(e=>this.renderSegment(e))}</span>`}renderSearchContent(e){let t=this.searchQuery.trim(),n=jc(Tc(e),t),r=this.activeMatch;return F`<span class="log-line">${Ic(e,n,r&&r.lineIndex===this.lineIndex?{start:r.start,end:r.end}:null).map(e=>this.renderSearchSlice(e))}</span>`}willUpdate(){let e=this.searchQuery.trim()?null:Dc(this.parsed);this.toggleAttribute(`leveled`,!!e)}render(){let e=this.parsed,t=this.searchQuery.trim(),n=t?null:Dc(e);return n?F`${this.renderLineNumber()}${this.renderLeveledContent(n)}`:t?F`${this.renderLineNumber()}${this.renderSearchContent(e)}`:F`${this.renderLineNumber()}${this.renderPlainContent(e)}`}};Lc.meta={tag:`quantic-log-output-line`,description:`Single rendered row within quantic-log-output. Applies ANSI styling, optional level-tag layout, and in-buffer search highlights.`,category:`display`,subComponentOf:`quantic-log-output`,relatedTo:[`quantic-log-output`]},Lc.styles=P`
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
  `,N([L({type:`AnsiSegment[]`,default:`[]`,attribute:!1,description:`Parsed ANSI segments for this buffer line.`})],Lc.prototype,`parsed`,void 0),N([L({type:`number`,default:`0`,attribute:`line-index`,description:`Zero-based index of this line in the parent buffer.`})],Lc.prototype,`lineIndex`,void 0),N([L({type:`string`,default:``,attribute:!1,description:`Current search query from the parent log viewer.`})],Lc.prototype,`searchQuery`,void 0),N([L({type:`{ lineIndex: number; start: number; end: number } | null`,default:`null`,attribute:!1,description:`Active search match in the buffer, if any.`})],Lc.prototype,`activeMatch`,void 0),N([L({type:`number`,default:`0`,attribute:`line-number`,description:`When greater than zero, shows this ordinal beside the row.`})],Lc.prototype,`lineNumber`,void 0),Lc=N([z(`quantic-log-output-line`)],Lc),go.ensureDefined(),_o.ensureDefined(),pr.ensureDefined(),Ws.ensureDefined(),Zs.ensureDefined(),qs.ensureDefined(),Ha.ensureDefined(),jr.ensureDefined();var Rc=class extends Jn{constructor(){super(...arguments),this.value=``,this.matchCount=0,this.activeMatchIndex=0,this.open=!1}updated(e){e.has(`open`)&&this.open&&this.focusSearchInput()}showSearch(){this.open?this.focusSearchInput():this.openSearch()}focusSearchInput(){this.updateComplete.then(()=>{let e=this.inputEl;e&&e.updateComplete.then(()=>e.focus())})}get matchLabel(){return this.matchCount?`${Math.min(this.activeMatchIndex+1,this.matchCount)} / ${this.matchCount}`:`0 / 0`}emitValue(e){this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:e},bubbles:!0,composed:!0}))}emitOpen(e){this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:e},bubbles:!0,composed:!0}))}openSearch(){this.open=!0,this.emitOpen(!0)}closeSearch(){this.open=!1,this.emitOpen(!1),this.emitValue(``)}handleToggleOpen(){this.open?this.closeSearch():this.openSearch()}handleValueChanged(e){e.stopPropagation(),this.emitValue(e.detail.value)}handleKeydown(e){e.key===`Escape`?(e.preventDefault(),this.closeSearch()):e.key===`Enter`&&(e.preventDefault(),this.dispatchEvent(new CustomEvent(e.shiftKey?`previous-match`:`next-match`,{bubbles:!0,composed:!0})))}handlePreviousMatch(){this.dispatchEvent(new CustomEvent(`previous-match`,{bubbles:!0,composed:!0}))}handleNextMatch(){this.dispatchEvent(new CustomEvent(`next-match`,{bubbles:!0,composed:!0}))}render(){return this.open?F`
      <quantic-text-input
        type="search"
        size=${Us.ExtraSmall}
        placeholder="Search"
        aria-label="Search log"
        .value=${this.value}
        @value-changed=${this.handleValueChanged}
        @keydown=${this.handleKeydown}
      ></quantic-text-input>
      <span class="count" aria-live="polite">${this.matchLabel}</span>
      <quantic-button-bar size=${lo.ExtraSmall} aria-label="Search match navigation">
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
    `:F`
        <quantic-button
          icon
          size=${or.ExtraSmall}
          variant="outline"
          aria-label="Search log"
          @click=${this.handleToggleOpen}
        >
          <quantic-icon-lucide-search size="xxs"></quantic-icon-lucide-search>
        </quantic-button>
      `}};Rc.meta={tag:`quantic-log-output-search`,description:`Floating search control for quantic-log-output. Collapsed to a search icon; expanded to a query field with match navigation.`,category:`display`,subComponentOf:`quantic-log-output`,relatedTo:[`quantic-log-output`,`quantic-text-input`,`quantic-button-bar`]},Rc.styles=P`
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
  `,N([L({type:`string`,default:``,description:`Current search query.`})],Rc.prototype,`value`,void 0),N([L({type:`number`,default:`0`,attribute:`match-count`,description:`Total matches in the log buffer.`})],Rc.prototype,`matchCount`,void 0),N([L({type:`number`,default:`0`,attribute:`active-match-index`,description:`Zero-based index of the highlighted match.`})],Rc.prototype,`activeMatchIndex`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Whether the search field is expanded.`})],Rc.prototype,`open`,void 0),N([_n(`quantic-text-input`)],Rc.prototype,`inputEl`,void 0),Rc=N([R(`value-changed`,{description:`Fired when the search query changes, including when cleared on close.`,detail:`{ value: string }`}),R(`previous-match`,{description:`Fired when the user activates the previous-match control.`}),R(`next-match`,{description:`Fired when the user activates the next-match control.`}),R(`open-changed`,{description:`Fired when the overlay expands or collapses.`,detail:`{ open: boolean }`}),z(`quantic-log-output-search`)],Rc),yo.ensureDefined(),Rc.ensureDefined(),Lc.ensureDefined();var zc=class extends Jn{constructor(){super(...arguments),this.follow=!0,this.followLabel=`Follow`,this.lineNumbers=!1,this.maxLines=$s.MAX_LINES,this.searchable=!0,this.lineBuffer=[],this.searchQuery=``,this.activeMatchIndex=0,this.resizeObserver=null,this.handleScroll=()=>{let{scrollTop:e,scrollHeight:t,clientHeight:n}=this.outputEl;this.follow=!(t-e-n>$s.FOLLOW_SCROLL_THRESHOLD)}}get lines(){return this.lineBuffer.map(e=>e.raw)}set lines(e){this.lineBuffer=this.clampToMax(e.map(e=>({raw:e,parsed:wc(e)})))}get isSearchActive(){return this.searchable&&this.searchQuery.trim().length>0}get effectiveSearchQuery(){return this.searchable?this.searchQuery:``}get searchMatches(){return Mc(this.lineBuffer.map(e=>e.parsed),this.searchQuery)}get activeMatch(){let e=this.searchMatches;return e.length?e[Math.min(Math.max(this.activeMatchIndex,0),e.length-1)]??null:null}firstUpdated(){this.outputEl.addEventListener(`scroll`,this.handleScroll),this.resizeObserver=new ResizeObserver(()=>{this.follow&&!this.isSearchActive&&this.scrollToBottom()}),this.resizeObserver.observe(this.outputEl)}updated(e){if(e.has(`maxLines`)&&(this.lineBuffer=this.clampToMax(this.lineBuffer)),e.has(`searchable`)&&!this.searchable&&(this.searchQuery=``,this.activeMatchIndex=0),e.has(`searchQuery`)&&(this.activeMatchIndex=0),e.has(`lineBuffer`)||e.has(`searchQuery`)){let e=this.searchMatches.length;e===0?this.activeMatchIndex=0:this.activeMatchIndex>=e&&(this.activeMatchIndex=e-1)}this.follow&&!this.isSearchActive&&this.scrollToBottom(),this.isSearchActive&&(e.has(`activeMatchIndex`)||e.has(`lineBuffer`)||e.has(`searchQuery`))&&this.scrollActiveMatchIntoView()}disconnectedCallback(){super.disconnectedCallback(),this.outputEl?.removeEventListener(`scroll`,this.handleScroll),this.resizeObserver?.disconnect(),this.resizeObserver=null}appendLine(e){this.lineBuffer=this.clampToMax([...this.lineBuffer,{raw:e,parsed:wc(e)}])}clampToMax(e){return e.length>this.maxLines?e.slice(-this.maxLines):e}renderLineRows(){let e=this.activeMatch;return this.lineBuffer.map(({parsed:t},n)=>F`<quantic-log-output-line
        .parsed=${t}
        .lineIndex=${n}
        .searchQuery=${this.effectiveSearchQuery}
        .activeMatch=${e}
        .lineNumber=${this.lineNumbers?n+1:0}
      ></quantic-log-output-line>`)}scrollToBottom(){this.outputEl.scrollTop=this.outputEl.scrollHeight}scrollActiveMatchIntoView(){requestAnimationFrame(()=>{let e=this.activeMatch;e&&(this.outputEl?.querySelector(`quantic-log-output-line[line-index="${e.lineIndex}"]`))?.scrollActiveMatchIntoView()})}handleFollowChange(e){this.follow=e.detail.checked,this.follow&&this.scrollToBottom()}handleSearchValueChanged(e){this.searchQuery=e.detail.value}handleOutputKeydown(e){this.searchable&&e.key===`f`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),this.searchEl?.showSearch())}goToPreviousMatch(){let e=this.searchMatches.length;e&&(this.activeMatchIndex=(this.activeMatchIndex-1+e)%e)}goToNextMatch(){let e=this.searchMatches.length;e&&(this.activeMatchIndex=(this.activeMatchIndex+1)%e)}render(){let e=this.searchMatches.length;return F`
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
        ${this.searchable?F`<quantic-log-output-search
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
    `}};zc.meta={tag:`quantic-log-output`,description:`Scrollable terminal-style log viewer that renders ANSI-coloured text with optional line numbers. Accepts lines as a property array or via appendLine(). A follow checkbox auto-scrolls to the latest line. When searchable, an overlay search control finds text in the log buffer.`,category:`display`,accessibility:{providedByComponent:[`live region for appended output`,`a follow toggle so announcements can be stopped`,`in-log search with match navigation when searchable`],requiredFromConsumer:[`a followLabel describing what following does`]},slots:{toolbar:{description:`Additional controls placed in the toolbar next to the follow checkbox.`}}},zc.styles=P`
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
  `,N([L({type:`boolean`,default:`true`,reflect:!0,description:`When true, the output automatically scrolls to the latest line.`})],zc.prototype,`follow`,void 0),N([L({type:`string`,default:`Follow`,attribute:`follow-label`,description:`Label text for the follow toggle checkbox.`,copyRule:`toggle-effect-label`})],zc.prototype,`followLabel`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,attribute:`line-numbers`,description:`When true, prepends line numbers to each row.`})],zc.prototype,`lineNumbers`,void 0),N([L({type:`number`,default:String($s.MAX_LINES),attribute:`max-lines`,description:`Maximum number of lines retained in the buffer. Older lines are dropped when the limit is exceeded.`})],zc.prototype,`maxLines`,void 0),N([L({type:`boolean`,default:`true`,reflect:!0,description:`When true, shows in-log search and highlights matches. Set to false to omit search UI and keyboard shortcut.`})],zc.prototype,`searchable`,void 0),N([hn()],zc.prototype,`lineBuffer`,void 0),N([hn()],zc.prototype,`searchQuery`,void 0),N([hn()],zc.prototype,`activeMatchIndex`,void 0),N([_n(`.output`)],zc.prototype,`outputEl`,void 0),N([_n(`quantic-log-output-search`)],zc.prototype,`searchEl`,void 0),zc=N([z(`quantic-log-output`)],zc);var Bc=vr,Vc={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`,ExtraLarge:`xl`},Hc=class extends Jn{constructor(){super(...arguments),this.size=Vc.Medium,this.label=`Loading`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`status`)}render(){return F`
      <div
        class=${dr({sizer:!0,[`size--${this.size}`]:!0,[`color--${this.color}`]:!!this.color})}
        aria-hidden="true"
      >
        <div class="ring"></div>
      </div>
      <span class="sr-only">${this.label}</span>
    `}};Hc.meta={tag:`quantic-spinner`,description:`Animated loading indicator. No content — purely visual feedback for in-progress states. Renders a role="status" host with a visually hidden accessible label.`,category:`feedback`,accessibility:{providedByComponent:[`role=status with visually hidden text`],requiredFromConsumer:[`a label naming what is loading`]}},Hc.styles=P`
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

    ${it(xr(e=>`--quantic-internal-spinner-color: var(--quantic-utility-${e}-500);`))}

    .color--brand {
      --quantic-internal-spinner-color: var(--quantic-fg-brand-primary);
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `,N([L({type:`SpinnerSize`,options:Object.values(Vc),default:Vc.Medium,description:`Diameter of the spinner ring.`})],Hc.prototype,`size`,void 0),N([L({type:`SpinnerColor`,options:Object.values(Bc),description:`Overrides the ring color. Defaults to currentColor.`})],Hc.prototype,`color`,void 0),N([L({type:`string`,default:`Loading`,description:`Visually hidden text announced by screen readers.`,copyRule:`status-label`})],Hc.prototype,`label`,void 0),Hc=N([z(`quantic-spinner`)],Hc);var Uc=class extends Jn{constructor(){super(...arguments),this.direction=`horizontal`,this.resizable=!1,this.split=``,this.collapseBelow=`640px`,this.panes=[],this.sizes=[],this.mutationObserver=null,this.collapsedObserver=null,this.resizeObserver=null,this.dragInfo=null,this.handlePointerMove=e=>{if(!this.dragInfo)return;let t=this.direction===`vertical`?this.wrapper.clientHeight:this.wrapper.clientWidth;if(t===0)return;let{dividerIndex:n,startX:r,startY:i,startLayoutA:a,startLayoutB:o}=this.dragInfo,s=this.panes[n-1],c=this.panes[n],[l,u]=Fs(a,(this.direction===`vertical`?e.clientY-i:e.clientX-r)/t*100,{a:Ms(s),b:Ms(c),total:a+o}),d=[...this.sizes];d[n-1]=Is(l,this.dragInfo.activeSizesSum),d[n]=Is(u,this.dragInfo.activeSizesSum),this.sizes=d,this.applySizes()},this.handlePointerUp=()=>{this.dragInfo&&(this.renderRoot.querySelectorAll(`.divider.dragging`).forEach(e=>{e.classList.remove(`dragging`)}),this.removeEventListener(`pointermove`,this.handlePointerMove),this.removeEventListener(`pointerup`,this.handlePointerUp),this.removeEventListener(`pointercancel`,this.handlePointerUp),this.dragInfo=null,this.dispatchEvent(new CustomEvent(`resize`,{bubbles:!0,composed:!0,detail:{sizes:this.sizes}})))}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.discoverPanes()),this.mutationObserver.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.collapsedObserver?.disconnect(),this.resizeObserver?.disconnect(),this.dragInfo&&=(this.removeEventListener(`pointermove`,this.handlePointerMove),this.removeEventListener(`pointerup`,this.handlePointerUp),this.removeEventListener(`pointercancel`,this.handlePointerUp),null)}firstUpdated(){this.discoverPanes(),this.setupResizeObserver()}updated(e){super.updated(e),e.has(`split`)&&(this.sizes=Bs(this.split,this.panes.length),this.applySizes()),(e.has(`collapseBelow`)||e.has(`direction`))&&this.checkStacked()}discoverPanes(){let e=Array.from(this.querySelectorAll(`:scope > quantic-splitter-pane`));e.forEach((e,t)=>{let n=`pane-${t}`;e.getAttribute(`slot`)!==n&&e.setAttribute(`slot`,n)}),this.panes.forEach(t=>{e.includes(t)||(t.removeAttribute(`slot`),t.removeAttribute(`stacked`))});let t=this.panes.length;this.panes=e,e.length!==t&&(this.sizes=Bs(this.split,e.length)),this.setupCollapsedObserver(),this.applySizes()}setupCollapsedObserver(){this.collapsedObserver?.disconnect(),this.panes.length!==0&&(this.collapsedObserver=new MutationObserver(()=>{this.panes=[...this.panes],this.applySizes()}),this.panes.forEach(e=>{this.collapsedObserver.observe(e,{attributes:!0,attributeFilter:[`collapsed`]})}))}setupResizeObserver(){this.wrapper&&(this.resizeObserver=new ResizeObserver(e=>{let t=e[0];t&&this.checkStackedForSize(t.contentRect.width)}),this.resizeObserver.observe(this.wrapper))}checkStacked(){this.wrapper&&this.checkStackedForSize(this.wrapper.clientWidth)}checkStackedForSize(e){let t=(this.collapseBelow??``).trim(),n=t.endsWith(`px`)?parseFloat(t):NaN;if(this.direction!==`vertical`&&!Number.isFinite(n))return;let r=this.direction!==`vertical`&&e<=n;this.toggleAttribute(`stacked`,r),this.panes.forEach(e=>e.toggleAttribute(`stacked`,r))}applySizes(){let e=Ls(this.sizes,this.panes);this.panes.forEach((t,n)=>{t.style.setProperty(`--quantic-component-splitter-pane-flex-grow`,String(e[n]))}),this.renderRoot.querySelectorAll(`[part="divider"]`).forEach((t,n)=>{t.setAttribute(`aria-valuenow`,String(Math.round(e[n])))})}dividerEffectiveBounds(e,t){let n=Ms(this.panes[e-1]),r=Ms(this.panes[e]),i=t[e-1]+t[e];return{min:Math.max(n.min,i-r.max),max:Math.min(n.max,i-r.min)}}isDividerDisabled(e){return!this.resizable||(this.panes[e-1]?.collapsed??!1)||(this.panes[e]?.collapsed??!1)}isDividerHidden(e){return(this.panes[e-1]?.hasAttribute(`collapsed`)??!1)||(this.panes[e]?.hasAttribute(`collapsed`)??!1)}handleDividerPointerDown(e,t){e.preventDefault();let n=e.currentTarget;n.setPointerCapture(e.pointerId),n.classList.add(`dragging`);let r=Ls(this.sizes,this.panes),i=Ps(this.sizes,this.panes);this.dragInfo={dividerIndex:t,startX:e.clientX,startY:e.clientY,startLayoutA:r[t-1],startLayoutB:r[t],activeSizesSum:i},this.addEventListener(`pointermove`,this.handlePointerMove),this.addEventListener(`pointerup`,this.handlePointerUp),this.addEventListener(`pointercancel`,this.handlePointerUp)}handleDividerKeyDown(e,t){let n=Ns(e.key,this.direction===`vertical`);if(n===null)return;e.preventDefault();let r=Ls(this.sizes,this.panes),[i,a]=Fs(r[t-1],n,{a:Ms(this.panes[t-1]),b:Ms(this.panes[t]),total:r[t-1]+r[t]}),o=Ps(this.sizes,this.panes),s=[...this.sizes];s[t-1]=Is(i,o),s[t]=Is(a,o),this.sizes=s,this.applySizes(),this.dispatchEvent(new CustomEvent(`resize`,{bubbles:!0,composed:!0,detail:{sizes:this.sizes}}))}render(){let e=Ls(this.sizes,this.panes);return F`
      <div
        class=${dr({wrapper:!0,"direction--horizontal":this.direction===`horizontal`,"direction--vertical":this.direction===`vertical`})}
      >
        ${this.panes.map((t,n)=>{let r=n>0?this.dividerEffectiveBounds(n,e):null;return F`${n>0&&!this.isDividerHidden(n)?F`<div
                    class=${dr({divider:!0,disabled:this.isDividerDisabled(n)})}
                    part="divider"
                    role="separator"
                    tabindex=${this.isDividerDisabled(n)?Kt:`0`}
                    aria-orientation=${this.direction===`vertical`?`horizontal`:`vertical`}
                    aria-valuenow=${Math.round(e[n-1])}
                    aria-valuemin=${Math.round(r.min)}
                    aria-valuemax=${Math.round(r.max)}
                    @pointerdown=${e=>this.handleDividerPointerDown(e,n)}
                    @keydown=${e=>this.handleDividerKeyDown(e,n)}
                  ></div>`:Kt}<slot name="pane-${n}"></slot>`})}
      </div>
    `}};Uc.meta={tag:`quantic-splitter-group`,description:`Resizable panel container — renders two or more panes separated by draggable dividers. Collapses to a stacked layout below the collapse-below breakpoint.`,category:`layout`,accessibility:{providedByComponent:[`separator roles`,`keyboard resize`,`roving tabindex across the handles`],requiredFromConsumer:[`an accessible name for each pane`]},slots:{"":{description:`Two or more quantic-splitter-pane elements.`}},parts:{divider:{description:`The draggable handle between two panes.`}}},Uc.styles=P`
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
  `,N([L({type:`"horizontal" | "vertical"`,default:`horizontal`,description:`Axis along which panes are split.`})],Uc.prototype,`direction`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Enables draggable dividers for interactive resizing.`})],Uc.prototype,`resizable`,void 0),N([L({type:`string`,description:`Comma-separated initial size percentages, e.g. "30,70". Equal split when omitted.`})],Uc.prototype,`split`,void 0),N([L({attribute:`collapse-below`,type:`string`,default:`640px`,description:`Pixel breakpoint below which panes stack vertically instead of side-by-side.`})],Uc.prototype,`collapseBelow`,void 0),N([_n(`.wrapper`)],Uc.prototype,`wrapper`,void 0),N([hn()],Uc.prototype,`panes`,void 0),Uc=N([z(`quantic-splitter-group`)],Uc);var Wc=class extends Jn{constructor(){super(...arguments),this.collapsed=!1,this.minSize=10,this.maxSize=90,this.variant=`default`}render(){return F`<slot></slot>`}};Wc.meta={tag:`quantic-splitter-pane`,description:`Individual resizable pane within a quantic-splitter-group. Set min-size and max-size to constrain how far it can be dragged.`,category:`layout`,subComponentOf:`quantic-splitter-group`,slots:{"":{description:`Pane content.`}},relatedTo:[`quantic-splitter-group`]},Wc.styles=P`
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
  `,N([L({type:`boolean`,default:`false`,reflect:!0,description:`Collapses the pane to zero size, hiding its content.`})],Wc.prototype,`collapsed`,void 0),N([L({type:`number`,default:`10`,attribute:`min-size`,description:`Minimum size as a percentage of the splitter container.`})],Wc.prototype,`minSize`,void 0),N([L({type:`number`,default:`90`,attribute:`max-size`,description:`Maximum size as a percentage of the splitter container.`})],Wc.prototype,`maxSize`,void 0),N([L({type:`"default" | "solid"`,default:`default`,reflect:!0,description:`Visual style — "solid" applies a secondary background color.`})],Wc.prototype,`variant`,void 0),Wc=N([z(`quantic-splitter-pane`)],Wc);var Gc={Horizontal:`horizontal`,Vertical:`vertical`},Kc={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},qc=`quantic-tab-button`,Jc=`buttons`,Yc=`panels`,Xc=no(`tabs.id`),Zc=no(`tabs.size`),Qc=no(`tabs.orientation`),$c=no(`tabs.selectedIndex`),el=class extends Jn{constructor(){super(...arguments),this.size=Kc.Medium,this.orientation=Gc.Horizontal,this.selectedIndex=0,this.id=``,this.collapseBelow=``,this.resizeObserver=null,this._assignSlots=()=>{Array.from(this.children).filter(e=>e instanceof HTMLElement).forEach(e=>{let t=e.tagName.toLowerCase();t===`quantic-tab-button`&&(e.slot=Jc),t===`quantic-tab-panel`&&(e.slot=Yc)})}}connectedCallback(){super.connectedCallback(),this.addEventListener(`tab-selected`,this._onTabSelect),this.id||=`tabs-${Math.random().toString(36).substring(2,9)}`}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}firstUpdated(){this._assignSlots(),this.shadowRoot?.querySelectorAll(`slot[name="${Jc}"], slot[name="${Yc}"]`).forEach(e=>e.addEventListener(`slotchange`,this._assignSlots)),this.setupResizeObserver()}updated(e){super.updated(e),(e.has(`collapseBelow`)||e.has(`orientation`))&&this.checkStacked()}setupResizeObserver(){this.resizeObserver=new ResizeObserver(e=>{let t=e[0];t&&this.checkStackedForSize(t.contentRect.width)}),this.resizeObserver.observe(this)}checkStacked(){this.checkStackedForSize(this.clientWidth)}checkStackedForSize(e){if(e<=0)return;if(this.orientation!==Gc.Vertical){this.toggleAttribute(`stacked`,!1);return}let t=(this.collapseBelow??``).trim();if(!t.endsWith(`px`)){this.toggleAttribute(`stacked`,!1);return}let n=parseFloat(t);Number.isFinite(n)?this.toggleAttribute(`stacked`,e<=n):this.toggleAttribute(`stacked`,!1)}_onTabSelect(e){e.target.closest(`quantic-tabs`)===this&&(e.stopPropagation(),this.selectedIndex=e.detail.index)}render(){return F`
      <div class=${dr({main:!0,[`orientation--${this.orientation}`]:!0})}>
        <div class="buttons" part="nav" role="tablist">
          <slot name=${Jc}></slot>
        </div>
        <div class="panels" part="panels"><slot name=${Yc}></slot></div>
      </div>
    `}};el.meta={tag:`quantic-tabs`,description:`Tab container managing quantic-tab-button triggers and quantic-tab-panel content areas. Place quantic-tab-button and quantic-tab-panel as direct children. Emits tab-selected when the active tab changes.`,category:`navigation`,accessibility:{providedByComponent:[`tab roles`,`aria-selected`,`roving tabindex across the tab list`],requiredFromConsumer:[`one quantic-tab-panel per quantic-tab-button`]},slots:{"":{description:`quantic-tab-button and quantic-tab-panel elements as direct children.`}},parts:{nav:{description:`The tablist container wrapping the tab buttons.`},panels:{description:`The container wrapping the tab panels.`}}},el.styles=[P`
      :host {
        display: block;
        min-width: 0;
        --quantic-component-tabs-gap: var(--quantic-spacing-8);
        --quantic-component-tab-padding-block: calc(
          var(--quantic-spacing-2) + var(--quantic-spacing-0-5)
        );
      }

      :host([size='xs']) {
        --quantic-component-tabs-gap: var(--quantic-spacing-2);
        --quantic-component-tab-padding-block: var(--quantic-spacing-2);
      }

      :host([size='sm']) {
        --quantic-component-tabs-gap: var(--quantic-spacing-4);
        --quantic-component-tab-padding-block: var(--quantic-spacing-2);
      }

      :host([size='lg']) {
        --quantic-component-tabs-gap: var(--quantic-spacing-12);
        --quantic-component-tab-padding-block: var(--quantic-spacing-3);
      }

      .panels {
        flex: 1 1 auto;
        min-width: 0;
        min-height: 0;
        display: none;
      }

      .orientation--horizontal {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;
        gap: var(--quantic-component-tabs-gap);
      }

      .orientation--horizontal .buttons {
        display: flex;
        flex-direction: row;
        flex: 0 0 auto;
        width: 100%;
        min-width: 0;
        align-items: flex-end;
        border-bottom: 1px solid var(--quantic-border-secondary);
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        overscroll-behavior-x: contain;
        scrollbar-width: none;
        scrollbar-color: transparent transparent;
      }

      .orientation--horizontal .buttons ::slotted(${it(qc)}) {
        flex: 0 0 auto;
      }

      .buttons::-webkit-scrollbar-track,
      .buttons::-webkit-scrollbar-thumb {
        background: transparent;
      }

      .orientation--vertical {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        min-height: 0;
        gap: var(--quantic-component-tabs-gap);
      }

      .orientation--vertical .buttons {
        display: flex;
        flex-direction: column;
        flex: 0 0 auto;
        width: var(--quantic-spacing-56);
        border-right: 1px solid var(--quantic-border-tertiary);
      }

      :host([stacked]) .orientation--vertical {
        flex-direction: column;
      }

      :host([stacked]) .orientation--vertical .buttons {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid var(--quantic-border-tertiary);
      }
    `,Yn(Yc,P`
        .panels {
          display: block;
        }
      `)],N([so({context:Zc}),L({type:`TabsSize`,options:Object.values(Kc),default:`md`,reflect:!0,description:`Controls tab button font size and padding, and the gap between the tab buttons and panels.`})],el.prototype,`size`,void 0),N([so({context:Qc}),L({type:`TabsOrientation`,options:Object.values(Gc),default:`horizontal`,description:`Layout direction: "horizontal" shows tabs along the top, "vertical" shows them on the left.`})],el.prototype,`orientation`,void 0),N([so({context:$c}),L({type:`number`,default:`0`,description:`Zero-based index of the currently active tab.`})],el.prototype,`selectedIndex`,void 0),N([so({context:Xc}),L({type:`string`,description:`Unique identifier shared via context to link buttons and panels. Auto-generated if not set.`})],el.prototype,`id`,void 0),N([L({attribute:`collapse-below`,type:`string`,description:`Pixel breakpoint below which vertical tabs stack (list above panels), matching splitter. Unset by default so vertical tabs stay side-by-side at every width. Example: "640px".`})],el.prototype,`collapseBelow`,void 0),el=N([R(`tab-selected`,{description:`Fired when a tab is selected, providing the index of the selected tab.`,detail:`{ index: number }`}),z(`quantic-tabs`)],el);var tl=(e,t)=>`tabbutton-${e}-${t}`,nl=(e,t)=>`tabpanel-${e}-${t}`;function rl(e,t){e.hasAttribute(`slot`)||e.setAttribute(`slot`,t)}var il=class extends Jn{constructor(){super(...arguments),this.defaultSize=Kc.Medium,this.size=this.defaultSize,this.defaultOrientation=Gc.Horizontal,this.orientation=this.defaultOrientation,this.defaultSelectedIndex=0,this.selectedIndex=this.defaultSelectedIndex,this.tabsId=``,this.disabled=!1,this.buttonRef=Qr()}willUpdate(){rl(this,Jc),this.toggleAttribute(`selected`,this.selectedIndex===this.index)}_onClick(){this.disabled||(this.dispatchEvent(new CustomEvent(`tab-selected`,{detail:{index:this.index},bubbles:!0,composed:!0})),this.buttonRef.value?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`}))}render(){let e=this.selectedIndex===this.index,t=dr({main:!0,"is-active":e,"is-disabled":this.disabled,[`orientation--${this.orientation}`]:!0,disabled:this.disabled,[`size--${this.size}`]:!0});return F`
      <button
        ${ti(this.buttonRef)}
        class=${t}
        part="button"
        id=${tl(this.tabsId,this.index)}
        role="tab"
        aria-selected=${e}
        aria-controls=${nl(this.tabsId,this.index)}
        aria-disabled=${this.disabled}
        ?disabled=${this.disabled}
        tabindex=${e&&!this.disabled?0:-1}
        @click=${this._onClick}
      >
        <slot name="icon"></slot>
        <slot></slot>
        <span class="indicator" part="indicator" aria-hidden="true"></span>
      </button>
    `}};il.meta={tag:`quantic-tab-button`,description:`Individual tab trigger button within quantic-tabs. Set index to match the corresponding quantic-tab-panel. Size and orientation are inherited via context from the parent quantic-tabs. Reflects a selected attribute while active. Restyle the mark with --quantic-component-tab-indicator-* / --quantic-component-tab-active-bg.`,category:`navigation`,subComponentOf:`quantic-tabs`,slots:{icon:{description:`Icon element, displayed before the label and scaled to the tab size.`},"":{description:`Tab label text or custom content.`}},parts:{button:{description:`The native button element.`},indicator:{description:`The active-tab mark.`}},relatedTo:[`quantic-tabs`,`quantic-tab-panel`]},il.styles=P`
    :host {
      display: block;
    }

    .main {
      appearance: none;
      cursor: pointer;
      color: var(--quantic-text-quaternary);
      font-family: var(--quantic-font-family-body);
      border: none;
      background-color: var(--quantic-component-tab-bg, transparent);
      border-radius: var(
        --quantic-component-tab-radius,
        var(--quantic-radius-sm)
      );
      box-sizing: border-box;
      position: relative;
      padding: var(--quantic-spacing-2) var(--quantic-spacing-3);
      font-weight: var(--quantic-font-weight-semibold);
      outline: none;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      gap: var(--quantic-spacing-2);
      transition: background-color 0.15s ease-in-out;
    }

    ::slotted([slot='icon']) {
      display: flex;
      align-items: center;
      --icon-size: 1em;
    }

    .size--xs ::slotted([slot='icon']) {
      --icon-size: 0.9em;
    }

    .size--sm ::slotted([slot='icon']) {
      --icon-size: 1em;
    }

    .size--md ::slotted([slot='icon']) {
      --icon-size: 1.05em;
    }

    .size--lg ::slotted([slot='icon']) {
      --icon-size: 1.1em;
    }

    .orientation--vertical {
      text-align: left;
      width: 100%;
      --indicator-inset: 0 auto 0 0;
      --indicator-width: var(
        --quantic-component-tab-indicator-thickness,
        var(--quantic-spacing-0-5)
      );
      --indicator-height: auto;
      --indicator-hidden: scaleY(0);
      --indicator-shown: scaleY(1);
      --indicator-origin: top;
    }

    .size--xs {
      padding: var(--quantic-component-tab-padding-block, var(--quantic-spacing-2))
        var(--quantic-spacing-2);
      font-size: var(--quantic-font-size-body-xs);
      gap: var(--quantic-spacing-1);
    }

    .size--sm {
      padding: var(--quantic-component-tab-padding-block, var(--quantic-spacing-2))
        var(--quantic-spacing-3);
      font-size: var(--quantic-font-size-body-sm);
      gap: var(--quantic-spacing-1-5);
    }

    .size--md {
      padding: var(
          --quantic-component-tab-padding-block,
          calc(var(--quantic-spacing-2) + var(--quantic-spacing-0-5))
        )
        var(--quantic-spacing-3);
      font-size: var(--quantic-font-size-body-md);
      gap: var(--quantic-spacing-2);
    }

    .size--lg {
      padding: var(--quantic-component-tab-padding-block, var(--quantic-spacing-3))
        var(--quantic-spacing-4);
      font-size: var(--quantic-font-size-body-lg);
      gap: var(--quantic-spacing-2);
    }

    .is-active {
      color: var(--quantic-text-primary);
      background-color: var(--quantic-component-tab-active-bg, transparent);
    }

    .main:hover:not(.is-active):not(.is-disabled) {
      background-color: var(--quantic-component-tab-hover-bg, transparent);
    }

    /* focus ring */
    .main::before {
      content: '';
      pointer-events: none;
      display: block;
      position: absolute;
      inset: 0;
      border-radius: var(
        --quantic-component-tab-radius,
        var(--quantic-radius-sm)
      );
      border: 2px solid var(--quantic-focus-ring);
      transition: all 0.2s ease-in-out;
      opacity: 0;
    }

    .main:focus-visible::before {
      inset: 2px;
      opacity: 1;
      border: 2px solid var(--quantic-focus-ring);
    }

    .orientation--horizontal {
      --indicator-inset: auto 0 -1px 0;
      --indicator-width: auto;
      --indicator-height: var(
        --quantic-component-tab-indicator-thickness,
        3px
      );
      --indicator-hidden: scaleX(0);
      --indicator-shown: scaleX(1);
      --indicator-origin: left;
    }

    .indicator {
      display: block;
      pointer-events: none;
      position: absolute;
      inset: var(--quantic-component-tab-indicator-inset, var(--indicator-inset));
      width: var(--quantic-component-tab-indicator-width, var(--indicator-width));
      height: var(
        --quantic-component-tab-indicator-height,
        var(--indicator-height)
      );
      background-color: var(
        --quantic-component-tab-indicator-color,
        var(--quantic-fg-brand-primary)
      );
      border-radius: var(--quantic-component-tab-indicator-radius, 0);
      transform: var(
        --quantic-component-tab-indicator-transform,
        var(--indicator-hidden)
      );
      transform-origin: var(
        --quantic-component-tab-indicator-origin,
        var(--indicator-origin)
      );
      transition: transform 0.2s ease-in-out;
    }

    .main:hover .indicator,
    .is-active .indicator {
      transform: var(
        --quantic-component-tab-indicator-transform,
        var(--indicator-shown)
      );
    }

    .is-disabled {
      color: var(--quantic-text-disabled);
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.5;
    }

    .is-disabled .indicator {
      display: none;
    }
  `,N([L({type:`TabsSize`,reflect:!0,description:`SSR fallback for size before context propagates from quantic-tabs.`})],il.prototype,`defaultSize`,void 0),N([co({context:Zc,subscribe:!0})],il.prototype,`size`,void 0),N([L({type:`TabsOrientation`,reflect:!0,description:`SSR fallback for orientation before context propagates from quantic-tabs.`})],il.prototype,`defaultOrientation`,void 0),N([co({context:Qc,subscribe:!0})],il.prototype,`orientation`,void 0),N([L({type:`number`,default:`0`,reflect:!0,description:`SSR fallback for selected index before context propagates from quantic-tabs.`})],il.prototype,`defaultSelectedIndex`,void 0),N([co({context:$c,subscribe:!0})],il.prototype,`selectedIndex`,void 0),N([co({context:Xc,subscribe:!0})],il.prototype,`tabsId`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Prevents this tab from being selected.`})],il.prototype,`disabled`,void 0),N([L({type:`number`,reflect:!0,description:`Zero-based position of this button; must match the index of the corresponding quantic-tab-panel.`,required:!0})],il.prototype,`index`,void 0),il=N([R(`tab-selected`,{description:`Fired when a tab is selected, providing the index of the selected tab.`,detail:`{ index: number }`}),z(`quantic-tab-button`)],il);var al=class extends Jn{constructor(){super(...arguments),this.defaultSelectedIndex=0,this.selectedIndex=this.defaultSelectedIndex,this.tabsId=``}willUpdate(){rl(this,Yc)}render(){let e=dr({main:!0,"is-active":this.selectedIndex===this.index});return F`<div
      id=${nl(this.tabsId,this.index)}
      class=${e}
      aria-labelledby=${tl(this.tabsId,this.index)}
      role="tabpanel"
      tabindex="0"
    >
      <slot></slot>
    </div>`}};al.meta={tag:`quantic-tab-panel`,description:`Content panel associated with a tab button in quantic-tabs. Set index to match the corresponding quantic-tab-button. Visibility is controlled automatically by the parent quantic-tabs.`,category:`navigation`,subComponentOf:`quantic-tabs`,slots:{"":{description:`Panel content shown when this tab is active.`}},relatedTo:[`quantic-tabs`,`quantic-tab-button`]},al.styles=P`
    .main {
      display: none;
      outline: 0;
      position: relative;
    }

    /* focus ring */
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
      inset: -4px;
      opacity: 1;
      border: 2px solid var(--quantic-focus-ring);
    }

    .is-active {
      display: block;
    }
  `,N([L({type:`number`,default:`0`,reflect:!0,description:`SSR fallback for selected index before context propagates from quantic-tabs.`})],al.prototype,`defaultSelectedIndex`,void 0),N([co({context:$c,subscribe:!0})],al.prototype,`selectedIndex`,void 0),N([co({context:Xc,subscribe:!0})],al.prototype,`tabsId`,void 0),N([L({type:`number`,reflect:!0,description:`Zero-based position of this panel; must match the index of the corresponding quantic-tab-button.`,required:!0})],al.prototype,`index`,void 0),al=N([z(`quantic-tab-panel`)],al);var ol={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},sl={[ol.ExtraSmall]:vo.ExtraSmall,[ol.Large]:vo.Medium};yo.ensureDefined(),jr.ensureDefined();var cl=class extends Jn{constructor(){super(...arguments),this.size=ol.Medium,this.selectable=!1,this.dismissible=!1,this.selected=!1}handleClick(){this.selectable&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(`tag-select`,{detail:{selected:this.selected},bubbles:!0,composed:!0})))}handleDismiss(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent(`tag-dismiss`,{bubbles:!0,composed:!0}))}handleKeyDown(e){this.selectable&&(e.key===`Enter`||e.key===` `)&&!e.target.closest(`.dismiss-button`)&&(e.preventDefault(),this.handleClick())}render(){return ir`
      <div
        class=${dr({main:!0,[`size--${this.size}`]:!0,selectable:this.selectable})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        tabindex=${this.selectable?`0`:`-1`}
        role=${this.selectable?`checkbox`:void 0}
        aria-checked=${this.selectable?String(this.selected):void 0}
      >
        ${this.selectable?ir`<quantic-checkbox
                size=${sl[this.size]??`sm`}
                ?checked=${this.selected}
              ></quantic-checkbox>`:null}
        <slot name="before"></slot>
        <slot></slot>
        <slot name="after"></slot>
        ${this.dismissible?ir`
                <button class="dismiss-button" @click=${this.handleDismiss} aria-label="Dismiss">
                  <quantic-icon-lucide-x size="xs"></quantic-icon-lucide-x>
                </button>
              `:null}
      </div>
    `}};cl.meta={tag:`quantic-tag`,description:`Compact inline label that can be dismissible or selectable. Used for filters, categories, and version tags. Use quantic-count-tag or quantic-status-tag for specialised variants.`,category:`display`,avoidWhen:[{when:`the tag shows a numeric count`,useInstead:`quantic-count-tag`},{when:`the tag shows a semantic status`,useInstead:`quantic-status-tag`}],accessibility:{providedByComponent:[`keyboard dismissal when dismissible`,`roving tabindex within a tag group`]},slots:{"":{description:`Tag label text or icon content.`},before:{description:`Leading content (e.g. icon or color dot).`},after:{description:`Trailing content (e.g. count badge).`}},relatedTo:[`quantic-count-tag`,`quantic-status-tag`,`quantic-badge`]},cl.styles=P`
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
  `,N([L({type:`TagSize`,options:Object.values(ol),default:ol.Medium,description:`Controls padding and font size.`})],cl.prototype,`size`,void 0),N([L({type:`boolean`,default:`false`,description:`Renders a checkbox and makes the tag toggleable.`})],cl.prototype,`selectable`,void 0),N([L({type:`boolean`,default:`false`,description:`Shows a dismiss (×) button to remove the tag.`})],cl.prototype,`dismissible`,void 0),N([L({type:`boolean`,default:`false`,description:`Current selected state when selectable is true.`})],cl.prototype,`selected`,void 0),cl=N([R(`tag-select`,{description:`Fired when a tag's selection state changes (only when selectable is true).`,detail:`{ selected: boolean }`}),R(`tag-dismiss`,{description:`Fired when a tag's dismiss button is clicked (only when dismissible is true).`}),z(`quantic-tag`)],cl);var ll={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},ul={None:`none`,Vertical:`vertical`,Horizontal:`horizontal`,Both:`both`};Ua.ensureDefined();var dl=class extends Ba(Jn){constructor(){super(),this.value=``,this.name=``,this.placeholder=``,this.size=ll.Medium,this.rows=4,this.resize=ul.Vertical,this.disabled=!1,this.required=!1,this.readOnly=!1,this.invalid=!1,this.autoComplete=`off`,this.internals=this.attachInternals()}updated(e){e.has(`value`)&&(this.internals.setFormValue(this.value),this.updateValidity()),wr(this,e,this.value)}forwardNative(e){let t=e.target;this.value=t.value,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}dispatchValueChanged(e){this.value=e.target.value}formResetCallback(){this.value=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}updateValidity(){let e=this.shadowRoot?.querySelector(`textarea`);e&&this.internals.setValidity(e.validity,e.validationMessage,e)}render(){let e=dr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return F`
      <div class=${e}>
        <textarea
          .value=${this.value}
          .autocomplete="${this.autoComplete}"
          class="input"
          placeholder=${this.placeholder}
          name=${this.name}
          .rows=${this.rows}
          part="input"
          style=${js({resize:this.resize})}
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
        ${this.invalid?F`<quantic-icon-lucide-circle-alert
              name=${_r.CircleAlert}
              size=${gr.Small}
              class="error-icon"
            ></quantic-icon-lucide-circle-alert>`:``}
      </div>
    `}};dl.meta={tag:`quantic-textarea`,description:`Multi-line text field with native form association. Wrap in quantic-field to add a visible label, hint text, and validation messaging.`,category:`form`,avoidWhen:[{when:`the value is code or structured text needing a line gutter`,useInstead:`quantic-code-input`}],accessibility:{providedByComponent:[`form association`,`native textarea semantics`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},parts:{input:{description:`The native textarea element.`}},relatedTo:[`quantic-field`,`quantic-text-input`]},dl.formAssociated=!0,dl.styles=P`
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
  `,N([L({type:`string`,default:``,description:`Current value of the textarea.`})],dl.prototype,`value`,void 0),N([L({type:`string`,description:`Name submitted with form data.`})],dl.prototype,`name`,void 0),N([L({type:`string`,description:`Placeholder text shown when the field is empty.`,copyRule:`placeholder`})],dl.prototype,`placeholder`,void 0),N([L({type:`TextareaSize`,options:Object.values(ll),default:ll.Medium,description:`Controls padding and font size.`})],dl.prototype,`size`,void 0),N([L({type:`number`,default:`4`,description:`Number of visible text rows.`})],dl.prototype,`rows`,void 0),N([L({type:`TextareaResize`,options:Object.values(ul),default:ul.Vertical,description:`Controls the resize handle direction.`})],dl.prototype,`resize`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],dl.prototype,`disabled`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],dl.prototype,`required`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Makes the field non-editable but still focusable and selectable.`})],dl.prototype,`readOnly`,void 0),N([L({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],dl.prototype,`invalid`,void 0),N([L({type:`string`,default:`off`,reflect:!0,description:`Native autocomplete attribute passed to the inner <textarea>.`})],dl.prototype,`autoComplete`,void 0),dl=N([R(`value-changed`,{description:`Fired whenever the value changes, from user input or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),R(`input`,{forwarded:!0}),R(`change`,{forwarded:!0}),R(`focus`,{forwarded:!0}),R(`blur`,{forwarded:!0}),R(`keydown`,{forwarded:!0}),R(`keyup`,{forwarded:!0}),R(`keypress`,{forwarded:!0}),z(`quantic-textarea`)],dl);var fl={Success:`success`,Error:`error`,Warning:`warning`,Info:`info`};pr.ensureDefined(),Dr.ensureDefined(),Or.ensureDefined(),kr.ensureDefined(),Ar.ensureDefined(),jr.ensureDefined();var pl=class extends Qn(Jn,[`title`,``,`action`]){constructor(){super(...arguments),this.open=!1,this.type=fl.Info,this.showCloseButton=!0,this.ariaLabel=null,this.handleCloseClick=()=>{this.dispatchEvent(new Event(`close`,{bubbles:!0,composed:!0}))}}updated(e){super.updated(e),e.has(`open`)&&e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:this.open},bubbles:!0,composed:!0}))}renderDefaultIcon(){switch(this.type){case fl.Success:return F`<quantic-icon-lucide-circle-check
          size="md"
        ></quantic-icon-lucide-circle-check>`;case fl.Error:return F`<quantic-icon-lucide-circle-x
          size="md"
        ></quantic-icon-lucide-circle-x>`;case fl.Warning:return F`<quantic-icon-lucide-triangle-alert
          size="md"
        ></quantic-icon-lucide-triangle-alert>`;case fl.Info:default:return F`<quantic-icon-lucide-info
          size="md"
        ></quantic-icon-lucide-info>`}}render(){let e=this.type===fl.Error;return F`
      <div
        class="container"
        role=${e?`alert`:`status`}
        aria-live=${this.open?e?`assertive`:`polite`:`off`}
        aria-atomic="true"
        aria-hidden=${this.open?`false`:`true`}
        aria-label=${fr(this.ariaLabel??void 0)}
      >
        <span class="icon">
          <slot name="icon">${this.renderDefaultIcon()}</slot>
        </span>
        <div class="content">
          <slot name="title" class="title"></slot>
          <slot class="body"></slot>
          <slot name="action" class="action"></slot>
        </div>
        ${this.showCloseButton?F`<quantic-button
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
              </quantic-button>`:Kt}
      </div>
    `}};pl.meta={tag:`quantic-toast`,description:`Presentational notification card with severity styles and optional action. State (open/close, auto-dismiss, stacking, viewport positioning) is owned by the consumer.`,category:`feedback`,avoidWhen:[{when:`the message belongs to a region of the page and should persist`,useInstead:`quantic-alert`}],accessibility:{providedByComponent:[`announced through a live region`,`severity conveyed by icon as well as colour`],requiredFromConsumer:[`a title`,`enough time to read it, if you set an auto-dismiss`]},slots:{icon:{description:`Optional icon override. Defaults to a type-derived lucide icon.`},title:{description:`Optional bold title.`,copyRule:`heading`},"":{description:`Body content of the toast.`},action:{description:`Optional action button (e.g. Undo). Wire your own click handler.`,copyRule:`heading`}},relatedTo:[`quantic-dialog`,`quantic-button`]},pl.styles=P`
    :host {
      --quantic-component-toast-bg: var(--quantic-bg-secondary);
      --quantic-component-toast-border-color: var(--quantic-border-primary);
      --quantic-component-toast-icon-color: var(--quantic-fg-brand-primary);
      --quantic-component-toast-title-color: var(--quantic-text-primary);
      --quantic-component-toast-text-color: var(--quantic-text-secondary);
      --quantic-component-toast-min-width: var(--quantic-spacing-72);
      --quantic-component-toast-max-width: var(--quantic-spacing-96);
      --quantic-component-toast-radius: var(--quantic-radius-md);
      --quantic-component-toast-padding: var(--quantic-spacing-3);
      --quantic-component-toast-gap: var(--quantic-spacing-3);

      display: block;
      box-sizing: border-box;
      font-family: var(--quantic-font-family-body);
      opacity: 0;
      transform: translateY(8px);
      pointer-events: none;
      transition:
        opacity var(--quantic-transition-duration-normal, 0.2s)
          var(--quantic-transition-timing-ease, ease),
        transform var(--quantic-transition-duration-normal, 0.2s)
          var(--quantic-transition-timing-ease, ease);
    }

    :host([open]) {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    :host([type='success']) {
      --quantic-component-toast-icon-color: var(--quantic-fg-success-primary);
    }

    :host([type='error']) {
      --quantic-component-toast-icon-color: var(--quantic-fg-error-primary);
    }

    :host([type='warning']) {
      --quantic-component-toast-icon-color: var(--quantic-fg-warning-primary);
    }

    .container {
      display: flex;
      align-items: center;
      gap: var(--quantic-component-toast-gap);
      min-width: var(--quantic-component-toast-min-width);
      max-width: var(--quantic-component-toast-max-width);
      padding: var(--quantic-component-toast-padding);
      background-color: var(--quantic-component-toast-bg);
      border: 1px solid var(--quantic-component-toast-border-color);
      border-radius: var(--quantic-component-toast-radius);
    }

    .icon {
      display: inline-flex;
      flex-shrink: 0;
      color: var(--quantic-component-toast-icon-color);
      line-height: 0;
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
      color: var(--quantic-component-toast-title-color);
      font-size: var(--quantic-font-size-body-sm);
      line-height: var(--quantic-line-height-body-sm);
      font-weight: var(--quantic-font-weight-semibold);
    }

    .body {
      display: block;
      color: var(--quantic-component-toast-text-color);
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
  `,N([L({type:`boolean`,default:`false`,reflect:!0,description:`Whether the toast is visible.`})],pl.prototype,`open`,void 0),N([L({type:`ToastType`,options:Object.values(fl),default:fl.Info,reflect:!0,description:`Severity. Drives icon and color tokens.`})],pl.prototype,`type`,void 0),N([L({type:`boolean`,attribute:`show-close-button`,default:`true`,description:`Shows a built-in close button. Click dispatches a "close" event.`})],pl.prototype,`showCloseButton`,void 0),N([L({type:`string`,attribute:`aria-label`,description:`Accessible label when no title slot is provided.`})],pl.prototype,`ariaLabel`,void 0),pl=N([R(`open-changed`,{description:`Fired when the open state changes.`,detail:`{ open: boolean }`}),R(`close`,{description:`Fired when the user clicks the close button. The consumer is responsible for setting open=false.`}),z(`quantic-toast`)],pl);function ml(e){return e}var hl=/\/\*(?:[^*]|\*(?!\/))*\*\//g,gl=/\n/g,_l=/^\s*/,vl=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,yl=/^:\s*/,bl=/^((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|url\((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|[^)]*)\)|[^};])+)/,xl=/^[;\s]*/,Sl=`
`,Cl=`/`,wl=`*`,Tl=``,El=`comment`,Dl=`declaration`;function Ol(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var n=1,r=1;function i(e){var t=e.match(gl);t&&(n+=t.length);var i=e.lastIndexOf(Sl);r=~i?e.length-i:r+e.length}function a(){var e={line:n,column:r};return function(t){return t.position=new o(e),l(),t}}function o(e){this.start=e,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function s(i){var a=Error(t.source+`:`+n+`:`+r+`: `+i);if(a.reason=i,a.filename=t.source,a.line=n,a.column=r,a.source=e,!t.silent)throw a}function c(t){var n=t.exec(e);if(n){var r=n[0];return i(r),e=e.slice(r.length),n}}function l(){c(_l)}function u(e){for(var t;t=d();)e.push(t);return e}function d(){var t=a();if(Cl==e.charAt(0)&&wl==e.charAt(1)){for(var n=2;Tl!=e.charAt(n)&&(wl!=e.charAt(n)||Cl!=e.charAt(n+1));)++n;if(n+=2,Tl===e.charAt(n-1))return s(`End of comment missing`);var o=e.slice(2,n-2);return r+=2,i(o),e=e.slice(n),r+=2,t({type:El,comment:o})}}function f(){var e=a(),t=c(vl);if(t){if(d(),!c(yl))return s(`property missing ':'`);var n=c(bl),r=e({type:Dl,property:t[0].replace(hl,Tl).trim(),value:n?n[0].replace(hl,Tl).trim():Tl});return c(xl),r}}function p(){var e=[];u(e);for(var t;t=f();)e.push(t),u(e);return e}return l(),p()}function kl(e,t){let n=null;if(!e||typeof e!=`string`)return n;let r=Ol(e),i=typeof t==`function`;return r.forEach(e=>{if(e.type!==`declaration`)return;let{property:r,value:a}=e;i?t(r,a,e):a&&(n??={},n[r]=a)}),n}var Al=/^--[a-zA-Z0-9_-]+$/,jl=/-([a-z])/g,Ml=/^[^-]+$/,Nl=/^-(webkit|moz|ms|o|khtml)-/,Pl=/^-(ms)-/,Fl=e=>!e||Ml.test(e)||Al.test(e),Il=(e,t)=>t.toUpperCase(),Ll=(e,t)=>`${t}-`,Rl=(e,t={})=>Fl(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(Pl,Ll):e.replace(Nl,Ll),e.replace(jl,Il));function zl(e,t){let n={};return!e||typeof e!=`string`||kl(e,(e,r)=>{e&&r&&(n[Rl(e,t)]=r)}),n}var Bl=(e,t,...n)=>{let r=typeof t?.style==`object`?t.style:void 0;return ml((e,t,...n)=>{let i=t?.style;return typeof i==`string`&&(t={...t,style:{...r,...zl(i,{reactCompat:!0})}}),_.createElement(e,t,...n)})(e,t,...n)},W={..._,createElement:Bl};typeof window>`u`&&(globalThis.litSsrReactEnabled=!0);var Vl=M({react:W,tagName:`quantic-alert`,elementClass:Mr,events:{onClose:`close`}});Vl.displayName=`Alert`;var G=M({react:W,tagName:`quantic-badge`,elementClass:$a});G.displayName=`Badge`;var K=M({react:W,tagName:`quantic-button`,elementClass:pr});K.displayName=`Button`;var Hl=M({react:W,tagName:`quantic-button-bar-item`,elementClass:_o});Hl.displayName=`ButtonBarItem`;var Ul=M({react:W,tagName:`quantic-button-bar`,elementClass:go});Ul.displayName=`ButtonBar`;var Wl=M({react:W,tagName:`quantic-checkbox`,elementClass:yo,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`}});Wl.displayName=`Checkbox`;var Gl=M({react:W,tagName:`quantic-combobox`,elementClass:Xa,events:{onValueChanged:`value-changed`,onInputChanged:`input-changed`,onFocus:`focus`,onBlur:`blur`}});Gl.displayName=`Combobox`;var Kl=M({react:W,tagName:`quantic-confirm-dialog`,elementClass:Os,events:{onConfirm:`confirm`,onCancel:`cancel`}});Kl.displayName=`ConfirmDialog`;var ql=M({react:W,tagName:`quantic-dialog-actions`,elementClass:To});ql.displayName=`DialogActions`;var Jl=M({react:W,tagName:`quantic-dialog-title`,elementClass:wo});Jl.displayName=`DialogTitle`;var Yl=M({react:W,tagName:`quantic-dialog`,elementClass:Ds,events:{onOpenChanged:`open-changed`,onBeforeOpen:`before-open`,onAfterOpen:`after-open`,onBeforeClose:`before-close`,onAfterClose:`after-close`}});Yl.displayName=`Dialog`;var Xl=M({react:W,tagName:`quantic-icon-lucide-panel-left-close`,elementClass:Js});Xl.displayName=`LucideIconPanelLeftClose`;var Zl=M({react:W,tagName:`quantic-icon-lucide-panel-left-open`,elementClass:Ys});Zl.displayName=`LucideIconPanelLeftOpen`;var Ql=M({react:W,tagName:`quantic-icon-lucide-x`,elementClass:jr});Ql.displayName=`LucideIconX`;var $l=M({react:W,tagName:`quantic-inline-edit`,elementClass:Qs,events:{onCancel:`cancel`}});$l.displayName=`InlineEdit`;var eu=M({react:W,tagName:`quantic-log-output`,elementClass:zc});eu.displayName=`LogOutput`;var tu=M({react:W,tagName:`quantic-select`,elementClass:Ks,events:{onValueChanged:`value-changed`,onFocus:`focus`,onBlur:`blur`}});tu.displayName=`Select`;var nu=M({react:W,tagName:`quantic-spinner`,elementClass:Hc});nu.displayName=`Spinner`;var q=M({react:W,tagName:`quantic-splitter-group`,elementClass:Uc});q.displayName=`SplitterGroup`;var ru=M({react:W,tagName:`quantic-splitter-pane`,elementClass:Wc});ru.displayName=`SplitterPane`;var iu=M({react:W,tagName:`quantic-tab-button`,elementClass:il,events:{onTabSelected:`tab-selected`}});iu.displayName=`TabButton`;var au=M({react:W,tagName:`quantic-tab-panel`,elementClass:al});au.displayName=`TabPanel`;var ou=M({react:W,tagName:`quantic-tabs`,elementClass:el,events:{onTabSelected:`tab-selected`}});ou.displayName=`Tabs`;var su=M({react:W,tagName:`quantic-tag`,elementClass:cl,events:{onTagSelect:`tag-select`,onTagDismiss:`tag-dismiss`}});su.displayName=`Tag`;var cu=M({react:W,tagName:`quantic-text-input`,elementClass:Ws,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`,onKeypress:`keypress`}});cu.displayName=`TextInput`;var lu=M({react:W,tagName:`quantic-textarea`,elementClass:dl,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`,onKeypress:`keypress`}});lu.displayName=`Textarea`;var uu=M({react:W,tagName:`quantic-toast`,elementClass:pl,events:{onOpenChanged:`open-changed`,onClose:`close`}});uu.displayName=`Toast`;async function du(e){let t=await fetch(e);if(!t.ok)throw Error(`${e}: HTTP ${t.status}`);return await t.json()}var fu=()=>du(`/api/assets`),pu=()=>du(`/api/status`),mu=()=>du(`/api/vocabulary`);async function hu(e,t,n){try{let r=await fetch(t,{method:e,headers:n===void 0?void 0:{"Content-Type":`application/json`},body:n===void 0?void 0:JSON.stringify(n)}),i=await r.json().catch(()=>({}));return r.ok&&i.asset?{ok:!0,asset:Nu(i.asset)}:{ok:!1,status:r.status,error:i.error??`HTTP ${r.status}`,errors:i.errors??[]}}catch(e){return{ok:!1,status:0,error:e.message,errors:[]}}}var gu=(e,t)=>hu(`PATCH`,`/api/assets/${encodeURIComponent(e)}`,t),_u=e=>hu(`POST`,`/api/assets/${encodeURIComponent(e)}/confirm`),vu=e=>hu(`POST`,`/api/assets/${encodeURIComponent(e)}/retire`),yu=e=>hu(`POST`,`/api/assets/${encodeURIComponent(e)}/restore`),bu=(e,t=8)=>du(`/api/assets/${encodeURIComponent(e)}/similar?limit=${t}`);function xu(e){let t={},n=[];for(let r of e){let e=/^([a-z_]+)(?:\.[a-z_]+)?:/.exec(r);e?(t[e[1]]??=[]).push(r):n.push(r)}return{byField:t,general:n}}async function Su(e,t,n){try{let r=await fetch(t,{method:e,headers:n?.json===void 0?void 0:{"Content-Type":`application/json`},body:n?.form??(n?.json===void 0?void 0:JSON.stringify(n.json))}),i=await r.json().catch(()=>({})),a=Array.isArray(i.errors)?` (${i.errors.join(`; `)})`:``,o=r.ok?``:`${i.error??i.message??`HTTP ${r.status}`}${a}`;return{ok:r.ok,status:r.status,data:i,error:o}}catch(e){return{ok:!1,status:0,data:{},error:e.message}}}var Cu=encodeURIComponent,wu=(e,t)=>Su(`POST`,`/api/vocabulary/${Cu(e)}`,{json:{slug:t}}),Tu=(e,t,n)=>Su(`POST`,`/api/vocabulary/${Cu(e)}/${Cu(t)}/rename`,{json:{new:n}}),Eu=(e,t,n)=>Su(`POST`,`/api/vocabulary/${Cu(e)}/${Cu(t)}/merge`,{json:{into:n}}),Du=(e,t)=>Su(`DELETE`,`/api/vocabulary/${Cu(e)}/${Cu(t)}`),Ou=e=>Su(`POST`,`/api/ingest`,{form:e}),ku=()=>Su(`POST`,`/api/sync`),Au=e=>Su(`POST`,`/api/${e}`),ju=e=>Su(`GET`,`/api/jobs/${Cu(e)}`);async function Mu(e,t=50){let n=await Su(`GET`,`/api/search?q=${encodeURIComponent(e)}&limit=${t}`);return{ok:n.ok,hits:n.data.hits??[],stale:!!n.data.stale,error:n.error}}var Nu=e=>({...e,thumb_url:`/thumbs/${e.id}.webp`,full_url:`/files/${e.id}`}),Pu=e=>{let t=e.data?.errors;return Array.isArray(t)?t:[]};async function Fu(e,t,n){let r=await Su(`POST`,`/api/assets/${Cu(e)}/verdict`,{json:n===void 0?{verdict:t}:{verdict:t,reason:n}});return r.ok&&r.data.asset&&(r.data={...r.data,asset:Nu(r.data.asset)}),r}var Iu=(e,t)=>Su(`POST`,`/api/verdicts`,{json:{verdict:e,ids:t}}),Lu=e=>Su(`POST`,`/api/undo`,{json:{commit:e}}),Ru=e=>Su(`POST`,`/api/rate${e?`?redo=${e}`:``}`),zu=()=>Su(`GET`,`/api/rate/summary`),Bu=()=>Su(`GET`,`/api/rate/needs-details`),Vu=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),J=o(((e,t)=>{t.exports=Vu()}))(),Hu=600;function Uu({jobId:e,name:t,onFinished:n}){let[r,i]=(0,_.useState)({state:`running`,log:[],result:null,error:null}),[a,o]=(0,_.useState)(null),s=(0,_.useRef)(n);return(0,_.useEffect)(()=>{s.current=n}),(0,_.useEffect)(()=>{let t=!1,n,r=async()=>{let a=await ju(e);t||(a.ok?(i(a.data),a.data.state===`running`?n=setTimeout(r,Hu):s.current(a.data)):o(a.error))};return r(),()=>{t=!0,n&&clearTimeout(n)}},[e]),(0,J.jsxs)(`section`,{className:`job-log`,"aria-label":`${t} job`,children:[(0,J.jsxs)(`div`,{className:`job-log-head`,children:[(0,J.jsx)(`strong`,{children:t}),(0,J.jsx)(G,{size:`sm`,color:r.state===`failed`?`error`:r.state===`done`?`success`:`warning`,children:r.state})]}),a&&(0,J.jsxs)(Vl,{type:`error`,children:[`Lost contact with job: `,a]}),r.error&&(0,J.jsx)(Vl,{type:`error`,children:r.error}),(0,J.jsx)(eu,{lines:r.log,follow:!0})]})}var Wu=[`hero`,`spot-illustration`,`background`,`screenshot`,`diagram`,`lifestyle`];function Gu({products:e,onIngested:t,onReviewQueue:n,rater:r,rateJob:i,onAutoRate:a,rateError:o}){let[s,c]=(0,_.useState)([]),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(``),[p,m]=(0,_.useState)(``),[h,g]=(0,_.useState)(``),[v,y]=(0,_.useState)(``),[b,x]=(0,_.useState)(``),[S,ee]=(0,_.useState)(!1),[te,C]=(0,_.useState)(!1),[ne,w]=(0,_.useState)(null),[T,re]=(0,_.useState)(null),[ie,E]=(0,_.useState)(null),[ae,oe]=(0,_.useState)(null),[se,D]=(0,_.useState)(void 0),O=se!==void 0,ce=O&&i&&i.id!==se?i:null,le=(0,_.useRef)(null),ue=e=>{e?.length&&c(t=>[...t,...Array.from(e)])},de=d===`screenshot`,fe=s.length>0&&d!==``&&p.trim()!==``&&(!de||b!==``);return(0,J.jsxs)(`div`,{className:`ingest`,children:[(0,J.jsxs)(`div`,{className:`dropzone${l?` dropzone-over`:``}`,onDragOver:e=>{e.preventDefault(),u(!0)},onDragLeave:()=>u(!1),onDrop:e=>{e.preventDefault(),u(!1),ue(e.dataTransfer.files)},children:[(0,J.jsx)(`p`,{children:`Drop images here`}),(0,J.jsx)(K,{size:`sm`,variant:`outline`,onClick:()=>le.current?.click(),children:`Choose files`}),(0,J.jsx)(`input`,{ref:le,type:`file`,multiple:!0,accept:`image/*`,hidden:!0,"aria-label":`Choose image files`,onChange:e=>{ue(e.target.files),e.target.value=``}}),s.length>0&&(0,J.jsx)(`ul`,{className:`ingest-files`,"aria-label":`Files to ingest`,children:s.map((e,t)=>(0,J.jsxs)(`li`,{children:[e.name,` `,(0,J.jsx)(K,{size:`sm`,variant:`ghost`,onClick:()=>c(e=>e.filter((e,n)=>n!==t)),children:`Remove`})]},`${e.name}-${t}`))})]}),(0,J.jsxs)(`div`,{className:`ingest-form`,children:[(0,J.jsxs)(`div`,{className:`field`,children:[(0,J.jsx)(`span`,{className:`field-label`,children:`Class`}),(0,J.jsx)(tu,{"aria-label":`Class`,placeholder:`Choose class`,options:Wu.map(e=>[e,e]),value:d,onValueChanged:e=>f(e.detail.value)})]}),de&&(0,J.jsxs)(`div`,{className:`field`,children:[(0,J.jsx)(`span`,{className:`field-label`,children:`Product (required for screenshots)`}),(0,J.jsx)(tu,{"aria-label":`Product`,placeholder:`Choose product`,options:e.map(e=>[e,e]),value:b,onValueChanged:e=>x(e.detail.value)})]}),(0,J.jsxs)(`div`,{className:`field`,children:[(0,J.jsx)(`span`,{className:`field-label`,children:`Source origin`}),(0,J.jsx)(cu,{"aria-label":`Source origin`,placeholder:`e.g. adobe-stock`,value:p,onValueChanged:e=>m(e.detail.value)})]}),(0,J.jsxs)(`div`,{className:`field`,children:[(0,J.jsx)(`span`,{className:`field-label`,children:`License (optional)`}),(0,J.jsx)(cu,{"aria-label":`License`,value:h,onValueChanged:e=>g(e.detail.value)})]}),(0,J.jsxs)(`div`,{className:`field`,children:[(0,J.jsx)(`span`,{className:`field-label`,children:`License id (optional)`}),(0,J.jsx)(cu,{"aria-label":`License id`,value:v,onValueChanged:e=>y(e.detail.value)})]}),(0,J.jsx)(`div`,{className:`field`,children:(0,J.jsx)(Wl,{size:`sm`,checked:S,onValueChanged:e=>ee(e.detail.checked),children:`These are anti-examples (what not to do)`})}),(0,J.jsx)(`div`,{children:(0,J.jsx)(K,{disabled:!fe||te,onClick:async()=>{C(!0),w(null),re(null),E(null),oe(null),D(void 0);let e=new FormData;s.forEach(t=>e.append(`files`,t)),e.append(`asset_class`,d),e.append(`origin`,p.trim()),h.trim()&&e.append(`license`,h.trim()),v.trim()&&e.append(`license_id`,v.trim()),de&&e.append(`product`,b),S&&e.append(`anti_example`,`true`);let n=await Ou(e);C(!1),n.ok?(re(n.data),c([]),t(n.data)):w(n.error)},children:te?`Ingesting...`:`Ingest ${s.length||``} file${s.length===1?``:`s`}`})})]}),ne&&(0,J.jsx)(Vl,{type:`error`,children:ne}),T&&(0,J.jsxs)(`section`,{className:`ingest-report`,"aria-label":`Ingest report`,children:[(0,J.jsxs)(Vl,{type:T.created.length?`success`:`warning`,children:[T.created.length,` created, `,T.skipped.length,` skipped.`]}),T.created.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`ul`,{children:T.created.map(e=>(0,J.jsx)(`li`,{children:e},e))}),(0,J.jsx)(`p`,{children:`Re-index so new assets get thumbnails and show up in search.`}),(0,J.jsxs)(`div`,{className:`ingest-actions`,children:[(0,J.jsx)(K,{size:`sm`,onClick:async()=>{oe(null);let e=await Au(`reindex`);e.ok?E(e.data.job_id):oe(e.error)},disabled:ie!==null,children:`Re-index now`}),` `,(0,J.jsx)(K,{size:`sm`,variant:`outline`,onClick:n,children:`Open review queue`})]}),ae&&(0,J.jsx)(Vl,{type:`error`,children:ae}),ie&&(0,J.jsx)(Uu,{jobId:ie,name:`Re-index`,onFinished:()=>t(T)},ie),r?.available&&!ce&&(0,J.jsxs)(`div`,{className:`ingest-autorate`,children:[(0,J.jsxs)(`span`,{children:[`Auto-rate the `,T.created.length,` new image`,T.created.length===1?``:`s`,`?`]}),(0,J.jsx)(K,{size:`sm`,disabled:!!i?.running,onClick:()=>{D(i?.id??null),a()},children:`Auto-rate`})]}),O&&o&&(0,J.jsx)(Vl,{type:`error`,children:o}),ce&&(0,J.jsx)(Uu,{jobId:ce.id,name:`Auto-rate`,onFinished:()=>{}},ce.id)]}),T.skipped.length>0&&(0,J.jsx)(`ul`,{"aria-label":`Skipped files`,children:T.skipped.map((e,t)=>(0,J.jsxs)(`li`,{children:[(0,J.jsx)(`strong`,{children:e.file}),`: `,e.reason]},`${e.file}-${t}`))})]})]})}var Ku=[`use`,`class`,`status`,`product`,`tone`,`categories`,`verticals`,`concepts`,`style`,`license`];function qu(e,t){switch(t){case`use`:return[e.anti_example?`anti-example`:`example`];case`class`:return e.class?[e.class]:[];case`status`:return e.status?[e.status]:[];case`product`:return e.products??[];case`tone`:return e.tone?[e.tone]:[];case`categories`:return e.categories??[];case`verticals`:return e.verticals??[];case`concepts`:return e.concepts??[];case`style`:return e.style??[];case`license`:return e.license?[e.license]:[]}}function Ju(e){return[e.id,e.file,e.description,e.avoid_reason??``,e.class,e.status,e.license,e.tone??``,...e.products,...e.categories,...e.verticals,...e.concepts,...e.style].join(`
`).toLowerCase()}function Yu(e,t,n){let r=n.trim().toLowerCase(),i=Ku.flatMap(e=>{let n=t[e];return n&&n.length?[{axis:e,want:n}]:[]});return e.filter(e=>{for(let{axis:t,want:n}of i){let r=qu(e,t);if(!n.some(e=>r.includes(e)))return!1}return r===``||Ju(e).includes(r)})}function Xu(e,t){let n=new Map;for(let r of e)for(let e of new Set(qu(r,t)))n.set(e,(n.get(e)??0)+1);return[...n].map(([e,t])=>({value:e,count:t})).sort((e,t)=>t.count-e.count||e.value.localeCompare(t.value))}var Y={products:`product`,categories:`categories`,verticals:`verticals`,concepts:`concepts`,style:`style`};function Zu(e,t){let n={};for(let[r,i]of Object.entries(t)){let t=Y[r];n[r]=i.map(n=>({slug:n,count:t?e.filter(e=>qu(e,t).includes(n)).length:0}))}return n}function X(e,t){let n=new Map(t.map(e=>[e.id,e]));return e.flatMap(e=>{let t=n.get(e.id);return t?[t]:[]})}function Z(e,t){return e===t.thumb_url&&t.full_url!==t.thumb_url?t.full_url:null}var Q=/^[a-z0-9]+(?:-[a-z0-9]+)*$/;function Qu({assets:e,vocabulary:t,onChanged:n,onOpenInGrid:r}){let i=Zu(e,t),[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)({}),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(null),v=()=>{o(null),c(``)},y=(e,t)=>{f(!1),e.ok?(m(null),g(t),v(),n()):(g(null),m({text:e.error,usage:e.data.usage}),v())},b=async(e,t)=>{f(!0),m(null),y(await e(),t)},x=e=>{let t=(l[e]??``).trim();b(()=>wu(e,t),`Added ${t} to ${e}.`).then(()=>u(t=>({...t,[e]:``})))},S=a,ee=S?(t[S.axis]??[]).filter(e=>e!==S.slug):[],te=Q.test(s)&&!!S&&s!==S.slug;return(0,J.jsxs)(`div`,{className:`vocab`,children:[p&&(0,J.jsxs)(Vl,{type:`error`,children:[(0,J.jsx)(`div`,{children:p.text}),p.usage&&p.usage.length>0&&(0,J.jsx)(`ul`,{"aria-label":`Assets using this slug`,children:p.usage.map(e=>(0,J.jsx)(`li`,{children:e},e))})]}),h&&(0,J.jsx)(`p`,{className:`editor-message`,role:`status`,children:h}),Object.entries(i).map(([e,t])=>(0,J.jsxs)(`section`,{className:`vocab-axis`,"aria-label":`${e} vocabulary`,children:[(0,J.jsxs)(`h2`,{children:[e,` `,(0,J.jsx)(G,{size:`sm`,color:`gray`,children:t.length})]}),(0,J.jsx)(`ul`,{className:`vocab-list`,children:t.map(({slug:t,count:n})=>(0,J.jsxs)(`li`,{className:`vocab-row`,children:[(0,J.jsx)(K,{size:`sm`,variant:`ghost`,"aria-label":`Show ${t} in grid`,onClick:()=>Y[e]&&r(Y[e],t),children:t}),(0,J.jsx)(`span`,{className:`facet-count`,"aria-label":`${n} assets`,children:n}),(0,J.jsx)(`span`,{className:`ops-spacer`}),(0,J.jsx)(K,{size:`sm`,variant:`outline`,disabled:d,"aria-label":`Rename ${t}`,onClick:()=>{c(t),o({kind:`rename`,axis:e,slug:t})},children:`Rename`}),(0,J.jsx)(K,{size:`sm`,variant:`outline`,disabled:d,"aria-label":`Merge ${t}`,onClick:()=>o({kind:`merge`,axis:e,slug:t}),children:`Merge`}),(0,J.jsx)(K,{size:`sm`,variant:`outline`,disabled:d||n>0,"aria-label":`Delete ${t}`,title:n>0?`In use by ${n} asset(s); merge it instead`:void 0,onClick:()=>o({kind:`delete`,axis:e,slug:t}),children:`Delete`})]},t))}),(0,J.jsxs)(`div`,{className:`vocab-add`,children:[(0,J.jsx)(cu,{size:`sm`,"aria-label":`New ${e} slug`,placeholder:`new-slug`,value:l[e]??``,onValueChanged:t=>u(n=>({...n,[e]:t.detail.value}))}),(0,J.jsx)(K,{size:`sm`,disabled:d||!Q.test((l[e]??``).trim()),onClick:()=>x(e),children:`Add`})]})]},e)),(0,J.jsx)(Kl,{open:S?.kind===`delete`,heading:`Delete ${S?.slug??``}?`,message:`Remove ${S?.slug??``} from ${S?.axis??``}. It is unused, so no assets change. This syncs from origin first and makes one commit.`,confirmText:`Delete`,destructive:!0,loading:d,onConfirm:()=>S&&b(()=>Du(S.axis,S.slug),`Deleted ${S.slug}.`),onCancel:v}),(0,J.jsxs)(Yl,{open:S?.kind===`rename`||S?.kind===`merge`,size:`sm`,"aria-label":S?.kind===`merge`?`Merge slug`:`Rename slug`,onOpenChanged:e=>{e.detail.open||v()},children:[(0,J.jsx)(Jl,{slot:`header`,children:S?.kind===`merge`?`Merge ${S.slug} into...`:`Rename ${S?.slug??``}`}),S?.kind===`merge`?(0,J.jsx)(tu,{"aria-label":`Merge into`,placeholder:`Choose target slug`,options:ee.map(e=>[e,e]),value:s,onValueChanged:e=>c(e.detail.value)}):(0,J.jsx)(cu,{"aria-label":`New slug`,value:s,invalid:s!==``&&!Q.test(s),onValueChanged:e=>c(e.detail.value)}),(0,J.jsx)(`p`,{className:`editor-message`,children:`Rewrites every affected asset (all statuses) and vocabulary.json in one commit, after syncing from origin.`}),(0,J.jsxs)(ql,{slot:`footer`,children:[(0,J.jsx)(K,{variant:`outline`,onClick:v,children:`Cancel`}),S?.kind===`merge`?(0,J.jsx)(K,{disabled:d||!s,onClick:()=>b(()=>Eu(S.axis,S.slug,s),`Merged ${S.slug} into ${s}.`),children:`Merge`}):(0,J.jsx)(K,{disabled:d||!te,onClick:()=>S&&b(()=>Tu(S.axis,S.slug,s),`Renamed ${S.slug} to ${s}.`),children:`Rename`})]})]})]})}var $u={use:`Use`,class:`Class`,status:`Status`,product:`Product`,tone:`Tone`,categories:`Categories`,verticals:`Verticals`,concepts:`Concepts`,style:`Style`,license:`License`};function ed({assets:e,filters:t,q:n,onToggle:r}){return(0,J.jsx)(`nav`,{className:`facet-rail`,"aria-label":`Filters`,children:Ku.map(i=>{let{[i]:a,...o}=t,s=Xu(Yu(e,o,n),i),c=t[i]??[],l=[...s,...c.filter(e=>!s.some(t=>t.value===e)).map(e=>({value:e,count:0}))];return l.length===0?null:(0,J.jsxs)(`fieldset`,{className:`facet-group`,children:[(0,J.jsx)(`legend`,{children:$u[i]}),l.map(({value:e,count:t})=>(0,J.jsx)(Wl,{size:`sm`,checked:c.includes(e),onValueChanged:t=>r(i,e,t.detail.checked),"aria-label":`${$u[i]}: ${e}`,children:(0,J.jsxs)(`span`,{className:`facet-row`,children:[(0,J.jsx)(`span`,{children:e}),(0,J.jsx)(`span`,{className:`facet-count`,children:t})]})},e))]},i)})})}function td({status:e,error:t,onRefresh:n}){let[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(null),p=a||s,m=async()=>{c(!0),u(null);let e=await ku();if(c(!1),e.ok){let t=e.data;u({kind:`success`,text:!t.pulled&&!t.pushed?`In sync with origin.`:`Synced${t.pulled?`, pulled changes`:``}${t.pushed?`, pushed changes`:``}.`})}else u({kind:`error`,text:e.error});n()},h=async e=>{u(null);let t=await Au(e);t.ok?(o(!0),i({id:t.data.job_id,name:e===`reindex`?`Re-index`:`Publish`})):u({kind:`error`,text:t.error})};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(`div`,{className:`ops-bar`,role:`status`,"aria-label":`Workspace status`,children:[t&&(0,J.jsxs)(G,{color:`error`,children:[`Status unavailable: `,t]}),e&&(0,J.jsxs)(J.Fragment,{children:[e.git&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(G,{color:e.git.behind?`warning`:`gray`,children:[`git: `,e.git.ahead,` ahead / `,e.git.behind,` behind`]}),(0,J.jsxs)(G,{color:e.git.dirty_managed.length?`warning`:`gray`,children:[e.git.dirty_managed.length,` uncommitted managed`]}),e.git.dirty_other.length>0&&(0,J.jsxs)(G,{color:`gray`,children:[e.git.dirty_other.length,` other dirty (ignored)`]})]}),(0,J.jsxs)(G,{color:e.index_stale?`warning`:`success`,children:[`index `,e.index_stale?`stale`:`fresh`]}),(0,J.jsxs)(G,{color:e.exports_stale?`warning`:`success`,children:[`exports `,e.exports_stale?`stale`:`fresh`]}),(0,J.jsxs)(G,{color:`gray`,children:[`embedder: `,e.embedder_mode??`none`]})]}),d&&(0,J.jsxs)(G,{color:`success`,children:[`last publish: `,d]}),(0,J.jsx)(`span`,{className:`ops-spacer`}),(0,J.jsx)(K,{size:`sm`,variant:`outline`,disabled:p,onClick:m,children:s?`Syncing...`:`Sync`}),(0,J.jsx)(K,{size:`sm`,variant:`outline`,disabled:p,onClick:()=>h(`reindex`),children:`Re-index`}),(0,J.jsx)(K,{size:`sm`,disabled:p,onClick:()=>h(`publish`),children:`Publish`})]}),l&&(0,J.jsx)(`div`,{className:`ops-notice`,children:(0,J.jsx)(Vl,{type:l.kind===`error`?`error`:`success`,children:l.text})}),r&&(0,J.jsx)(`div`,{className:`ops-notice`,children:(0,J.jsx)(Uu,{jobId:r.id,name:r.name,onFinished:e=>{o(!1),e.state===`done`&&typeof e.result?.version==`string`&&f(e.result.version),n()}},r.id)})]})}var nd=[`products`,`categories`,`verticals`,`concepts`,`style`],rd=e=>({description:e.description??``,tags:{products:e.products,categories:e.categories,verticals:e.verticals,concepts:e.concepts,style:e.style},tone:e.tone??``,product_version:e.product_version??``,captured_at:e.captured_at??``,usage_restrictions:(e.usage_restrictions??[]).join(`, `),anti_example:!!e.anti_example,avoid_reason:e.avoid_reason??``}),id=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]);function ad(e,t){let n={};t.description!==(e.description??``)&&(n.description=t.description);for(let r of nd)id(t.tags[r],e[r])||(n[r]=t.tags[r]);e.class===`background`&&t.tone&&t.tone!==(e.tone??``)&&(n.tone=t.tone),e.class===`screenshot`&&(t.product_version&&t.product_version!==(e.product_version??``)&&(n.product_version=t.product_version),t.captured_at&&t.captured_at!==(e.captured_at??``)&&(n.captured_at=t.captured_at));let r=t.usage_restrictions.split(`,`).map(e=>e.trim()).filter(Boolean);return id(r,e.usage_restrictions??[])||(n.usage_restrictions=r),t.anti_example!==!!e.anti_example&&(n.anti_example=t.anti_example),t.anti_example&&(n.anti_example!==void 0||t.avoid_reason!==(e.avoid_reason??``))&&(n.avoid_reason=t.avoid_reason),n}function od(e,t){return!e||t()}function sd({label:e,value:t,vocabulary:n,onChange:r,errors:i=[]}){let[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(0),l=n.filter(e=>!t.includes(e)).map(e=>({label:e,value:e})),u=a.trim()!==``&&!n.includes(a.trim()),d=e=>{n.includes(e)&&(t.includes(e)||r([...t,e]),o(``),c(e=>e+1))};return(0,J.jsxs)(`div`,{className:`field${i.length?` field-invalid`:``}`,"data-field":e,children:[(0,J.jsx)(`span`,{className:`field-label`,children:e}),(0,J.jsxs)(`div`,{className:`chips`,children:[t.map(n=>(0,J.jsx)(su,{size:`sm`,dismissible:!0,"aria-label":`${e}: ${n}`,onTagDismiss:()=>r(t.filter(e=>e!==n)),children:n},n)),(0,J.jsx)(Gl,{size:`sm`,"aria-label":`Add ${e}`,placeholder:`Add ${e}`,options:l,allowCustomValue:!0,invalid:i.length>0,onInputChanged:e=>o(e.detail.value),onValueChanged:e=>d(e.detail.value)},s)]}),u&&(0,J.jsxs)(`p`,{className:`field-hint`,role:`status`,children:[`"`,a.trim(),`" is not in the `,e,` vocabulary, so it will not be saved. Propose it to the curator to add it.`]}),i.map(e=>(0,J.jsx)(`p`,{className:`field-error`,role:`alert`,children:e},e))]})}function cd({errors:e}){return(0,J.jsx)(J.Fragment,{children:(e??[]).map(e=>(0,J.jsx)(`p`,{className:`field-error`,role:`alert`,children:e},e))})}function ld({asset:e,vocabulary:t,onChanged:n,onTransition:r,onOpenSimilar:i,onDirtyChange:a,ref:o}){let[s,c]=(0,_.useState)(()=>rd(e)),[l,u]=(0,_.useState)([]),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(!1),v=(0,_.useRef)(!1),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(null),ee=(0,_.useMemo)(()=>ad(e,s),[e,s]),te=Object.keys(ee).length>0;(0,_.useEffect)(()=>(a?.(te),()=>a?.(!1)),[te,a]),(0,_.useEffect)(()=>{let t=!0;return bu(e.id).then(e=>t&&b(e)).catch(e=>t&&S(e.message)),()=>{t=!1}},[e.id]);let C=e=>(u(e.errors),m(e.errors.length?null:e.error),!1),ne=async()=>{if(!te)return e;let t=await gu(e.id,ee);return t.ok?(n(t.asset),c(rd(t.asset)),t.asset):(C(t),null)},w=async e=>{v.current=!0,g(!0),u([]),f(null),m(null);try{return await e()}finally{v.current=!1,g(!1)}},T=()=>w(async()=>{await ne()&&te&&f(`Saved.`)}),re=()=>v.current?Promise.resolve(!1):w(async()=>{if(!await ne())return!1;let t=await _u(e.id);return t.ok?(n(t.asset),r?.(`confirm`,t.asset),!0):C(t)}),ie=t=>v.current?Promise.resolve(!1):w(async()=>{let i=await(t===`retire`?vu:yu)(e.id);return i.ok?(n(i.asset),r?.(t,i.asset),!0):C(i)});(0,_.useImperativeHandle)(o,()=>({confirm:re}));let{byField:E,general:ae}=xu(l),oe=new Set([...nd,`description`,`usage_restrictions`,`anti_example`,`avoid_reason`,...e.class===`background`?[`tone`]:[],...e.class===`screenshot`?[`product_version`,`captured_at`]:[]]),se=[...ae,...Object.entries(E).filter(([e])=>!oe.has(e)).flatMap(([,e])=>e)];return(0,J.jsxs)(`div`,{className:`editor`,"data-asset-id":e.id,children:[(0,J.jsx)(`a`,{href:e.full_url,target:`_blank`,rel:`noreferrer`,className:`editor-image`,title:`Open full resolution`,children:(0,J.jsx)(`img`,{src:e.full_url,alt:e.description||e.id})}),(0,J.jsxs)(`div`,{className:`editor-form`,children:[(0,J.jsxs)(`div`,{className:`editor-head`,children:[(0,J.jsx)(`h2`,{children:e.id}),(0,J.jsx)(G,{size:`sm`,color:e.status===`confirmed`?`success`:e.status===`proposed`?`warning`:`gray`,children:e.status}),e.anti_example&&(0,J.jsx)(G,{size:`sm`,color:`error`,children:`anti-example`}),(0,J.jsxs)(`span`,{className:`editor-meta`,children:[e.class,` / `,e.aspect,` / `,e.license]})]}),d&&(0,J.jsx)(`p`,{className:`editor-message`,role:`status`,children:d}),p&&(0,J.jsx)(Vl,{type:`error`,children:p}),se.length>0&&(0,J.jsx)(Vl,{type:`error`,children:se.map(e=>(0,J.jsx)(`div`,{children:e},e))}),(0,J.jsxs)(`div`,{className:`field anti-field${E.avoid_reason?` field-invalid`:``}`,children:[(0,J.jsx)(Wl,{size:`sm`,checked:s.anti_example,onValueChanged:e=>c(t=>({...t,anti_example:e.detail.checked})),children:`Anti-example: shows what not to do (never served for use)`}),s.anti_example&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`span`,{className:`field-label`,children:`Why to avoid it`}),(0,J.jsx)(lu,{"aria-label":`Why to avoid it`,placeholder:`e.g. Glossy 3D clip-art with lens flare; reads as generic stock.`,value:s.avoid_reason,invalid:!!E.avoid_reason,onValueChanged:e=>c(t=>({...t,avoid_reason:e.detail.value}))})]}),(0,J.jsx)(cd,{errors:[...E.anti_example??[],...E.avoid_reason??[]]})]}),(0,J.jsxs)(`div`,{className:`field${E.description?` field-invalid`:``}`,children:[(0,J.jsx)(`span`,{className:`field-label`,children:`Description`}),(0,J.jsx)(lu,{"aria-label":`Description`,value:s.description,invalid:!!E.description,onValueChanged:e=>c(t=>({...t,description:e.detail.value}))}),(0,J.jsx)(cd,{errors:E.description})]}),nd.map(e=>(0,J.jsx)(sd,{label:e,value:s.tags[e],vocabulary:t[e]??[],errors:E[e],onChange:t=>c(n=>({...n,tags:{...n.tags,[e]:t}}))},e)),e.class===`background`&&(0,J.jsxs)(`div`,{className:`field${E.tone?` field-invalid`:``}`,children:[(0,J.jsx)(`span`,{className:`field-label`,children:`Tone`}),(0,J.jsx)(tu,{"aria-label":`Tone`,placeholder:`Choose tone`,options:[[`dark`,`dark`],[`light`,`light`]],value:s.tone,invalid:!!E.tone,onValueChanged:e=>c(t=>({...t,tone:e.detail.value}))}),(0,J.jsx)(cd,{errors:E.tone})]}),e.class===`screenshot`&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(`div`,{className:`field${E.product_version?` field-invalid`:``}`,children:[(0,J.jsx)(`span`,{className:`field-label`,children:`Product version`}),(0,J.jsx)(cu,{"aria-label":`Product version`,value:s.product_version,invalid:!!E.product_version,onValueChanged:e=>c(t=>({...t,product_version:e.detail.value}))}),(0,J.jsx)(cd,{errors:E.product_version})]}),(0,J.jsxs)(`div`,{className:`field${E.captured_at?` field-invalid`:``}`,children:[(0,J.jsx)(`span`,{className:`field-label`,children:`Captured at`}),(0,J.jsx)(cu,{"aria-label":`Captured at`,placeholder:`YYYY-MM-DD`,value:s.captured_at,invalid:!!E.captured_at,onValueChanged:e=>c(t=>({...t,captured_at:e.detail.value}))}),(0,J.jsx)(cd,{errors:E.captured_at})]})]}),(0,J.jsxs)(`div`,{className:`field${E.usage_restrictions?` field-invalid`:``}`,children:[(0,J.jsx)(`span`,{className:`field-label`,children:`Usage restrictions (comma separated)`}),(0,J.jsx)(cu,{"aria-label":`Usage restrictions`,value:s.usage_restrictions,invalid:!!E.usage_restrictions,onValueChanged:e=>c(t=>({...t,usage_restrictions:e.detail.value}))}),(0,J.jsx)(cd,{errors:E.usage_restrictions})]}),(0,J.jsxs)(`div`,{className:`editor-actions`,children:[(0,J.jsx)(K,{size:`sm`,disabled:h||!te,onClick:T,children:`Save`}),e.status===`proposed`&&(0,J.jsx)(K,{size:`sm`,variant:`outline`,disabled:h,onClick:re,children:`Confirm`}),e.status===`retired`?(0,J.jsx)(K,{size:`sm`,variant:`outline`,disabled:h,onClick:()=>ie(`restore`),children:`Restore`}):(0,J.jsx)(K,{size:`sm`,variant:`outline`,disabled:h,onClick:()=>ie(`retire`),children:`Retire`})]}),(0,J.jsxs)(`section`,{className:`similar`,"aria-label":`More like this`,children:[(0,J.jsx)(`h3`,{children:`More like this`}),x&&(0,J.jsxs)(`p`,{className:`empty`,children:[`Unavailable: `,x]}),!x&&y===null&&(0,J.jsx)(`p`,{className:`empty`,children:`Loading...`}),y&&y.length===0&&(0,J.jsx)(`p`,{className:`empty`,children:`No neighbours found.`}),y&&y.length>0&&(0,J.jsx)(`ul`,{className:`similar-strip`,children:y.map(e=>(0,J.jsx)(`li`,{children:(0,J.jsx)(`a`,{href:e.full_url,title:e.id,onClick:t=>{i&&(t.preventDefault(),i(e.id))},children:(0,J.jsx)(`img`,{src:e.thumb_url,alt:e.description||e.id,loading:`lazy`})})},e.id))})]})]})]})}function ud({status:e}){return e===`proposed`?(0,J.jsx)(G,{size:`sm`,color:`warning`,children:`proposed`}):e===`confirmed`?(0,J.jsx)(G,{size:`sm`,color:`success`,children:`confirmed`}):(0,J.jsx)(G,{size:`sm`,color:`gray`,children:e})}function dd({a:e,selected:t,onSelect:n}){let[r,i]=(0,_.useState)(e.thumb_url),[a,o]=(0,_.useState)(e.thumb_url);return a!==e.thumb_url&&(o(e.thumb_url),i(e.thumb_url)),(0,J.jsxs)(`li`,{className:`tile${e.status===`retired`?` tile-retired`:``}${e.anti_example?` tile-anti`:``}${t?` tile-selected`:``}`,"data-status":e.status,children:[(0,J.jsx)(`a`,{href:e.full_url,className:`tile-thumb`,"aria-label":`Edit ${e.id}`,"aria-current":t||void 0,onClick:t=>{t.metaKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),n(e.id))},children:r?(0,J.jsx)(`img`,{src:r,alt:e.description||e.id,loading:`lazy`,decoding:`async`,onError:()=>i(Z(r,e))}):(0,J.jsx)(`span`,{className:`tile-placeholder`,role:`img`,"aria-label":`No preview for ${e.id}`,children:`No preview`})}),(0,J.jsxs)(`div`,{className:`tile-meta`,children:[(0,J.jsx)(`span`,{className:`tile-id`,title:e.id,children:e.id}),(0,J.jsxs)(`span`,{className:`tile-badges`,children:[e.anti_example&&(0,J.jsx)(G,{size:`sm`,color:`error`,children:`avoid`}),(0,J.jsx)(ud,{status:e.status})]})]}),(0,J.jsxs)(`div`,{className:`tile-sub`,children:[(0,J.jsx)(`span`,{children:e.class}),e.tone&&(0,J.jsx)(`span`,{children:e.tone}),e.products.length>0&&(0,J.jsxs)(`span`,{children:[e.products.slice(0,2).join(`, `),e.products.length>2?` +${e.products.length-2}`:``]})]})]})}function fd({assets:e,total:t,selectedId:n,onSelect:r}){return e.length===0?(0,J.jsx)(`p`,{className:`empty`,children:t===0?`No assets in the library yet.`:`No assets match these filters.`}):(0,J.jsx)(`ul`,{className:`grid`,"aria-label":`${e.length} of ${t} assets`,children:e.map(e=>(0,J.jsx)(dd,{a:e,selected:e.id===n,onSelect:r},e.id))})}var pd=e=>({queue:e,index:0,exited:e.length===0}),md=e=>e.queue[e.index];function hd(e,t){if(e.exited)return e;switch(t.type){case`next`:return{...e,index:Math.min(e.index+1,e.queue.length-1)};case`prev`:return{...e,index:Math.max(e.index-1,0)};case`confirmed`:case`retired`:{let t=e.queue.filter((t,n)=>n!==e.index);return{queue:t,index:Math.min(e.index,t.length-1),exited:t.length===0}}case`exit`:return{...e,exited:!0}}}var gd=/^(INPUT|TEXTAREA|SELECT)$|^QUANTIC-(TEXT-INPUT|TEXTAREA|COMBOBOX|SELECT)$/;function _d({initialIds:e,assets:t,vocabulary:n,onChanged:r,onExit:i,confirmDiscard:a,onDirtyChange:o}){let[s,c]=(0,_.useReducer)(hd,e,pd),l=(0,_.useRef)(null),u=md(s),d=t.find(e=>e.id===u);(0,_.useEffect)(()=>{s.exited&&i()},[s.exited,i]);let f=(0,_.useRef)(a);(0,_.useEffect)(()=>{f.current=a});let p=e=>{f.current()&&c({type:e})},m=(0,_.useRef)(p);return(0,_.useEffect)(()=>{m.current=p}),(0,_.useEffect)(()=>{let e=e=>{if(e.metaKey||e.ctrlKey||e.altKey)return;let t=e.composedPath()[0]?.tagName??``;if(!gd.test(t.toUpperCase())){if(e.key===`ArrowRight`)m.current(`next`);else if(e.key===`ArrowLeft`)m.current(`prev`);else if(e.key===`Escape`)m.current(`exit`);else if(e.key===`c`||e.key===`C`)l.current?.confirm();else return;e.preventDefault()}};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),d?(0,J.jsxs)(`div`,{className:`review`,children:[(0,J.jsxs)(`div`,{className:`review-bar`,children:[(0,J.jsx)(K,{size:`sm`,variant:`outline`,disabled:s.index===0,onClick:()=>p(`prev`),children:`Previous`}),(0,J.jsxs)(`span`,{className:`review-position`,role:`status`,"aria-live":`polite`,children:[s.index+1,` of `,s.queue.length]}),(0,J.jsx)(K,{size:`sm`,variant:`outline`,disabled:s.index>=s.queue.length-1,onClick:()=>p(`next`),children:`Next`}),(0,J.jsx)(`span`,{className:`ops-spacer`}),(0,J.jsx)(`span`,{className:`review-keys`,children:`Left/Right: navigate. C: confirm and next. Esc: exit.`}),(0,J.jsx)(K,{size:`sm`,variant:`outline`,onClick:()=>p(`exit`),children:`Exit`})]}),(0,J.jsx)(ld,{ref:l,asset:d,vocabulary:n,onChanged:r,onDirtyChange:o,onTransition:e=>{e===`confirm`?c({type:`confirmed`}):e===`retire`&&c({type:`retired`})}},d.id)]}):(0,J.jsx)(`p`,{className:`empty`,children:`Review queue is empty.`})}var vd=/^(INPUT|TEXTAREA|SELECT)$|^QUANTIC-(TEXT-INPUT|TEXTAREA|COMBOBOX|SELECT)$/;function yd(e){if(e.metaKey||e.ctrlKey||e.altKey)return!0;let t=e.composedPath()[0]?.tagName??``;return vd.test(t.toUpperCase())}function bd(e,t){let n=(0,_.useRef)(e);(0,_.useEffect)(()=>{n.current=e}),(0,_.useEffect)(()=>{if(!t)return;let e=e=>{yd(e)||n.current(e)&&e.preventDefault()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t])}var xd={y:`yes`,n:`no`,m:`maybe`},Sd=[`yes`,`no`,`maybe`],Cd=(e,t)=>e<t?-1:+(e>t);function wd(e,t){let n={yes:[],no:[],maybe:[]},r=[],i=[];for(let a of e){let e=a.rating?.bot;a.status===`proposed`&&e&&!a.rating?.human&&(t.has(a.id)?r.push(a.id):e.strength===`strong`&&a.class!==`screenshot`?n[e.verdict].push(a.id):i.push(a.id))}let a=[];for(let e of Sd){let t=n[e].sort(Cd);for(let n=0;n<t.length;n+=24)a.push({verdict:e,ids:t.slice(n,n+24)})}return{strong:a,unsure:[...r.sort(Cd),...i.sort(Cd)]}}var Td=(e,t)=>Math.max(0,Math.min(e,t-1));function Ed(e){if(e.recent.total===0)return`No verdicts yet`;let t=`Bot agreed with you on ${e.recent.agreed} of ${e.recent.total} recent calls`;return e.strong.total===0?t:`${t} · strong calls ${Math.round(100*e.strong.agreed/e.strong.total)}%`}var Dd={yes:`Yes`,no:`No`,maybe:`Maybe-yes`},Od=e=>!!e.rating?.bot&&!e.rating?.human,kd=(e,t)=>!!e.rating?.bot&&e.rating.bot.verdict!==t,Ad=e=>e.status===`proposed`&&e.rating?.human?.verdict===`yes`;function jd(e,t){let n=t.id===null?-1:e.indexOf(t.id);return n>=0?n:Td(t.index,e.length)}function Md(e,t){if(e){let n=new Set(t.flatMap(t=>t.verdict===e.verdict?t.ids:[])),r=e.ids.filter(e=>n.has(e));if(r.length===e.ids.length&&r.length>0)return e;if(r.length>0)return{verdict:e.verdict,ids:r}}return t[0]??null}var Nd={yes:`success`,no:`error`,maybe:`warning`},Pd={yes:`Y`,no:`N`,maybe:`M`};function Fd({errors:e}){return(0,J.jsx)(J.Fragment,{children:(e??[]).map(e=>(0,J.jsx)(`p`,{className:`field-error`,role:`alert`,children:e},e))})}function Id({show:e}){return e?(0,J.jsx)(G,{size:`sm`,color:`gray`,className:`bot-mark`,children:`bot`}):null}function Ld({asset:e,vocabulary:t,verdicts:n,errors:r,position:i,active:a,canUndo:o,onVerdict:s,onMove:c,onUndo:l,onPatch:u,onOpenEditor:d,toolbar:f}){let p=e.rating?.bot,m=Od(e),[h,g]=(0,_.useState)(null),[v,y]=(0,_.useState)(``),[b,x]=(0,_.useState)(e.description??``),[S,ee]=(0,_.useState)(0),te=(0,_.useRef)(null),C=(0,_.useRef)(null),ne=(0,_.useRef)(null),w=(0,_.useRef)(null),T=(0,_.useRef)(e.description??``),re=(0,_.useRef)(!1),ie=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=C.current;h&&e&&e.updateComplete.then(()=>e.focus())},[h]);let E=t=>{kd(e,t)?(y(``),g(t)):s(t)},ae=()=>{if(re.current){re.current=!1;return}let e=b.trim();e!==T.current&&(T.current=e,u({description:e}))},oe=async e=>{let t=ne.current;t&&(t.active=e,await t.updateComplete,e?(await w.current?.updateComplete,w.current?.focus()):D())},se=()=>ie.current?.shadowRoot?.querySelector(`input`)?.focus(),D=()=>te.current?.focus();bd(e=>{if(h)return!1;let t=xd[e.key.toLowerCase()];if(t&&n.includes(t))return E(t),!0;switch(e.key){case`ArrowRight`:return c(1),!0;case`ArrowLeft`:return c(-1),!0;case`t`:case`T`:return se(),!0;case`d`:case`D`:return oe(!0),!0;case`e`:case`E`:return d(),!0;case`z`:case`Z`:return l(),!0;default:return!1}},a);let{byField:O,general:ce}=xu(r),le=new Set([...nd,`description`,...e.class===`background`?[`tone`]:[]]),ue=[...ce,...Object.entries(O).filter(([e])=>!le.has(e)).flatMap(([,e])=>e)],de=nd.flatMap(e=>O[e]??[]),fe=nd.flatMap(t=>(e[t]??[]).map(e=>({axis:t,slug:e}))),pe=nd.flatMap(n=>(t[n]??[]).filter(t=>!(e[n]??[]).includes(t)).map(e=>({label:`${e} · ${n}`,value:`${n}/${e}`}))),me=t=>{let[n,r]=t.split(`/`);r&&nd.includes(n)&&(u({[n]:[...e[n]??[],r]}),ee(e=>e+1),requestAnimationFrame(se))};return(0,J.jsxs)(`div`,{className:`rate-card`,ref:te,tabIndex:-1,"data-asset-id":e.id,children:[(0,J.jsx)(`a`,{href:e.full_url,target:`_blank`,rel:`noreferrer`,className:`rate-card-image`,title:`Open full resolution`,children:(0,J.jsx)(`img`,{src:e.full_url,alt:e.description||e.id})}),(0,J.jsxs)(`div`,{className:`rate-card-side`,children:[(0,J.jsxs)(`div`,{className:`rate-card-top`,children:[f,(0,J.jsxs)(`span`,{className:`rate-card-pos`,role:`status`,"aria-live":`polite`,children:[i.index+1,` of `,i.total]})]}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h2`,{className:`rate-card-id`,title:e.id,children:e.id}),(0,J.jsxs)(`span`,{className:`editor-meta`,children:[e.class,` / `,e.aspect,` / `,e.license||`no license`,e.status!==`proposed`&&` / ${e.status}`]})]}),p&&(0,J.jsxs)(`div`,{className:`bot-call`,children:[(0,J.jsxs)(`span`,{className:`bot-call-verdict`,children:[(0,J.jsx)(`span`,{className:`field-label`,children:`Bot`}),(0,J.jsx)(G,{size:`sm`,color:Nd[p.verdict],children:Dd[p.verdict]}),(0,J.jsx)(`span`,{className:`bot-strength`,children:p.strength})]}),p.reason&&(0,J.jsxs)(`p`,{className:`bot-reason`,children:[`“`,p.reason,`”`]})]}),e.rating?.human&&(0,J.jsxs)(`p`,{className:`editor-meta`,children:[`Last verdict: `,Dd[e.rating.human.verdict],` by `,e.rating.human.by.replace(/\s*<.*>$/,``),e.rating.human.reason?` (“${e.rating.human.reason}”)`:``]}),ue.length>0&&(0,J.jsx)(Vl,{type:`error`,children:ue.map(e=>(0,J.jsx)(`div`,{children:e},e))}),(0,J.jsxs)(`dl`,{className:`card-fields`,children:[(0,J.jsxs)(`dt`,{className:`field-label`,children:[`Description `,(0,J.jsx)(Id,{show:m&&!!e.description})]}),(0,J.jsxs)(`dd`,{className:O.description?`field-invalid`:void 0,children:[(0,J.jsx)(`div`,{onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),ae(),oe(!1))},children:(0,J.jsxs)($l,{ref:ne,className:`desc-edit`,onCancel:()=>{re.current=!0,x(e.description??``)},children:[(0,J.jsx)(`span`,{slot:`display`,className:`desc-text${e.description?``:` empty`}`,children:e.description||`No description. Press D to add one.`}),(0,J.jsx)(cu,{ref:w,slot:`editor`,size:`sm`,"aria-label":`Description`,value:b,invalid:!!O.description,onValueChanged:e=>x(e.detail.value),onBlur:ae})]})}),(0,J.jsx)(Fd,{errors:O.description})]}),(0,J.jsxs)(`dt`,{className:`field-label`,children:[`Tags `,(0,J.jsx)(Id,{show:m&&fe.length>0})]}),(0,J.jsxs)(`dd`,{className:de.length?`field-invalid`:void 0,children:[(0,J.jsxs)(`div`,{className:`chips`,onKeyDown:e=>{e.key===`Escape`&&D()},children:[fe.map(({axis:t,slug:n})=>(0,J.jsx)(su,{size:`sm`,dismissible:!0,title:t,"aria-label":`${t}: ${n}`,onTagDismiss:()=>u({[t]:(e[t]??[]).filter(e=>e!==n)}),children:n},`${t}/${n}`)),(0,J.jsx)(Gl,{ref:ie,size:`sm`,className:`tag-add`,"aria-label":`Add tag`,placeholder:`Add tag (T)`,options:pe,onValueChanged:e=>me(e.detail.value)},S)]}),(0,J.jsx)(Fd,{errors:de})]}),e.class===`background`&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(`dt`,{className:`field-label`,children:[`Tone `,(0,J.jsx)(Id,{show:m&&!!e.tone})]}),(0,J.jsxs)(`dd`,{className:O.tone?`field-invalid`:void 0,children:[(0,J.jsx)(tu,{size:`sm`,className:`tone-select`,"aria-label":`Tone`,placeholder:`Choose tone`,options:[[`dark`,`dark`],[`light`,`light`]],value:e.tone??``,invalid:!!O.tone,onValueChanged:t=>{t.detail.value&&t.detail.value!==e.tone&&u({tone:t.detail.value})}}),(0,J.jsx)(Fd,{errors:O.tone})]})]}),e.class===`screenshot`&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(`dt`,{className:`field-label`,children:[`Version `,(0,J.jsx)(Id,{show:m})]}),(0,J.jsxs)(`dd`,{children:[e.product_version||`—`,` · captured `,e.captured_at||`—`,` `,(0,J.jsx)(`span`,{className:`editor-meta`,children:`(fix in the editor)`})]})]})]}),(0,J.jsx)(`div`,{className:`rate-card-actions`,children:h?(0,J.jsxs)(`div`,{className:`why`,onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),s(h,v.trim()||void 0),g(null)):e.key===`Escape`&&(e.preventDefault(),g(null),D())},children:[(0,J.jsxs)(`span`,{className:`why-label`,children:[`You say `,(0,J.jsx)(`strong`,{children:Dd[h]}),`; the bot said `,Dd[p.verdict],`. Why?`]}),(0,J.jsx)(cu,{ref:C,size:`sm`,"aria-label":`Why (optional)`,placeholder:`Optional. The bot learns most from these.`,value:v,onValueChanged:e=>y(e.detail.value)}),(0,J.jsxs)(`span`,{className:`key-hints`,children:[(0,J.jsx)(`kbd`,{children:`Enter`}),` save verdict · `,(0,J.jsx)(`kbd`,{children:`Esc`}),` cancel`]})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(`div`,{className:`verdict-buttons`,children:[n.map(e=>(0,J.jsxs)(K,{size:`sm`,variant:e===p?.verdict?`primary`:`outline`,onClick:()=>E(e),children:[(0,J.jsx)(`kbd`,{className:e===p?.verdict?`kbd-on-brand`:void 0,children:Pd[e]}),` `,Dd[e]]},e)),(0,J.jsx)(`span`,{className:`ops-spacer`}),(0,J.jsx)(K,{size:`sm`,variant:`ghost`,disabled:!o,onClick:l,children:`Undo`}),(0,J.jsx)(K,{size:`sm`,variant:`ghost`,onClick:d,children:`Editor`})]}),(0,J.jsxs)(`span`,{className:`key-hints`,children:[(0,J.jsx)(`kbd`,{children:`T`}),` tags · `,(0,J.jsx)(`kbd`,{children:`D`}),` description · `,(0,J.jsx)(`kbd`,{children:`E`}),` editor · `,(0,J.jsx)(`kbd`,{children:`Z`}),` undo · `,(0,J.jsx)(`kbd`,{children:`←`}),` `,(0,J.jsx)(`kbd`,{children:`→`}),` move`]})]})})]})]})}function Rd({a:e,wrong:t,focused:n,onToggle:r}){let[i,a]=(0,_.useState)(e.thumb_url),o=e.rating?.bot?.reason??``;return(0,J.jsx)(`li`,{className:`rate-tile${t?` rate-tile-wrong`:``}${n?` rate-tile-focus`:``}`,children:(0,J.jsxs)(`a`,{href:e.full_url,role:`checkbox`,"aria-checked":t,"aria-label":`${e.id}: bot is wrong`,title:o?`${e.id}: ${o}`:e.id,onClick:e=>{e.metaKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),r())},children:[i?(0,J.jsx)(`img`,{src:i,alt:e.description||e.id,decoding:`async`,onError:()=>a(Z(i,e))}):(0,J.jsx)(`span`,{className:`tile-placeholder`,children:`No preview`}),o&&(0,J.jsx)(`span`,{className:`rate-tile-reason`,children:o}),t&&(0,J.jsx)(G,{className:`rate-tile-flag`,size:`sm`,color:`error`,children:`Bot is wrong`})]})})}function zd({screen:e,assets:t,total:n,active:r,canUndo:i,onAccept:a,onUndo:o,toolbar:s}){let[c,l]=(0,_.useState)(new Set),[u,d]=(0,_.useState)(0),f=(0,_.useRef)(null),p=e.ids,m=Math.min(u,p.length-1),h=e=>l(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}),g=()=>{let e=p.filter(e=>c.has(e));a(p.filter(e=>!c.has(e)),e)},v=()=>{let e=f.current;return e?Math.max(1,getComputedStyle(e).gridTemplateColumns.split(` `).length):1},y=e=>d(Math.max(0,Math.min(m+e,p.length-1)));bd(e=>{switch(e.key){case`ArrowRight`:return y(1),!0;case`ArrowLeft`:return y(-1),!0;case`ArrowDown`:return y(v()),!0;case`ArrowUp`:return y(-v()),!0;case` `:return h(p[m]),!0;case`Enter`:return g(),!0;case`z`:case`Z`:return o(),!0;default:return!1}},r);let b=p.length-p.filter(e=>c.has(e)).length,x=Dd[e.verdict];return(0,J.jsxs)(`section`,{className:`strong`,"aria-label":`Strong ${x}`,children:[(0,J.jsxs)(`div`,{className:`lane-head`,children:[s,(0,J.jsxs)(`h2`,{children:[`Strong `,x,` (`,n,`)`]}),n>p.length&&(0,J.jsxs)(`span`,{className:`lane-sub`,children:[`showing `,p.length]}),(0,J.jsx)(`span`,{className:`ops-spacer`}),(0,J.jsxs)(`span`,{className:`key-hints`,children:[(0,J.jsx)(`kbd`,{children:`Click`}),` or `,(0,J.jsx)(`kbd`,{children:`Space`}),` bot is wrong · `,(0,J.jsx)(`kbd`,{children:`←↑↓→`}),` move · `,(0,J.jsx)(`kbd`,{children:`Z`}),` undo`]}),(0,J.jsx)(K,{size:`sm`,variant:`outline`,disabled:!i,onClick:o,children:`Undo`}),(0,J.jsxs)(K,{size:`sm`,onClick:g,children:[b?`Accept ${b} as ${x}`:`Send ${p.length} to cards`,` `,(0,J.jsx)(`kbd`,{className:`kbd-on-brand`,children:`Enter`})]})]}),(0,J.jsx)(`ul`,{className:`strong-grid`,ref:f,"aria-label":`${p.length} strong ${x} calls`,children:p.map((e,n)=>{let i=t.get(e);return i?(0,J.jsx)(Rd,{a:i,wrong:c.has(e),focused:r&&n===m,onToggle:()=>{d(n),h(e)}},e):null})})]})}var Bd=e=>Object.keys(e.result?.failed??{}).length;function Vd(e){if(e.state===`failed`)return e.error??`Auto-rate failed.`;let t=e.result??{},n=Bd(e);return`${Yd(Number(t.rated??0),`image`)} rated, ${n} failed, ${Number(t.skipped??0)} skipped.`}var Hd=[`review`,`needs`,`parked`],Ud=6e3,Wd=`quarry.rate.wrong`,Gd=new Set([`description`,`products`,`categories`,`verticals`,`concepts`,`style`,`tone`,`product_version`,`captured_at`,`usage_restrictions`,`anti_example`,`avoid_reason`]);function Kd(){try{return new Set(JSON.parse(localStorage.getItem(Wd)??`[]`))}catch{return new Set}}var qd=(e,t)=>new Set([...e,...t]),Jd=(e,t)=>{let n=new Set(e);return t.forEach(e=>n.delete(e)),n},Yd=(e,t)=>`${e} ${t}${e===1?``:`s`}`;function Xd({active:e,assets:t,vocabulary:n,summary:r,summaryError:i,rateJob:a,onStartRate:o,onRateJobFinished:s,onDismissRateJob:c,rateError:l,onChanged:u,onAssetSaved:d,refreshStatus:f,reloadAssets:p,refreshSummary:m,confirmDiscard:h,onDirtyChange:g,onToReviewCount:v}){let[y,b]=(0,_.useState)(`review`),[x,S]=(0,_.useState)(null),[ee,te]=(0,_.useState)(Kd),[C,ne]=(0,_.useState)(new Set),[w,T]=(0,_.useState)({}),[re,ie]=(0,_.useState)(null),[E,ae]=(0,_.useState)({id:null,index:0}),[oe,se]=(0,_.useState)({id:null,index:0}),[D,O]=(0,_.useState)(null),[ce,le]=(0,_.useState)(null),[ue,de]=(0,_.useState)(!1),[fe,pe]=(0,_.useState)({}),me=(0,_.useRef)([]),[he,ge]=(0,_.useState)(0),_e=(0,_.useRef)(Promise.resolve()),[ve,ye]=(0,_.useState)(0),be=(0,_.useCallback)(e=>{ye(e=>e+1);let t=_e.current.then(e);_e.current=t.catch(e=>O({kind:`error`,title:`Something went wrong`,text:e.message})).finally(()=>ye(e=>e-1))},[]),xe=(0,_.useRef)(void 0),k=(0,_.useCallback)(()=>{clearTimeout(xe.current),xe.current=setTimeout(()=>{m(),f()},800)},[m,f]);(0,_.useEffect)(()=>()=>clearTimeout(xe.current),[]),(0,_.useEffect)(()=>{if(!ve)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[ve]);let A=(0,_.useMemo)(()=>new Map(t.map(e=>[e.id,e])),[t]),Se=(0,_.useMemo)(()=>t.filter(e=>!C.has(e.id)),[t,C]),{strong:Ce,unsure:we}=(0,_.useMemo)(()=>wd(Se,ee),[Se,ee]),Te=e=>Ce.filter(t=>t.verdict===e).reduce((e,t)=>e+t.ids.length,0),Ee=Ce.reduce((e,t)=>e+t.ids.length,0);(0,_.useEffect)(()=>{v(Ee+we.length)},[v,Ee,we.length]);let j=(0,_.useMemo)(()=>Se.filter(e=>e.status===`parked`).map(e=>e.id).sort(),[Se]),De=(0,_.useMemo)(()=>Se.filter(Ad),[Se]),Oe=De.map(e=>e.id).join(`,`),ke=Md(re,Ce);ke!==re&&ie(ke);let Ae=ke===null?`unsure`:we.length===0?`sure`:x??`sure`,je=jd(we,E),Me=we[je],Ne=jd(j,oe),Pe=j[Ne],[Fe,Ie]=(0,_.useState)(e);Fe!==e&&(Ie(e),e||le(null)),(0,_.useEffect)(()=>{if(!e||y!==`needs`)return;let t=!0;return Bu().then(e=>{t&&e.ok&&pe(e.data)}),()=>{t=!1}},[e,y,Oe]),(0,_.useEffect)(()=>{if(!e)return;let t=y===`parked`?j:we,n=y===`parked`?Ne:je;for(let e of t.slice(n+1,n+3)){let t=A.get(e);t&&(new Image().src=t.full_url)}},[e,y,we,j,je,Ne,A]),(0,_.useEffect)(()=>{if(!t.length)return;let e=[...ee].filter(e=>{let t=A.get(e);return t?.status===`proposed`&&!t.rating?.human});localStorage.setItem(Wd,JSON.stringify(e))},[ee,t.length,A]),(0,_.useEffect)(()=>{if(!D||D.kind===`error`)return;let e=setTimeout(()=>O(e=>e===D?null:e),Ud);return()=>clearTimeout(e)},[D]);let Le=e=>{me.current.push(e),ge(me.current.length)},Re=(e,t,n,r)=>{let i=r===`parked`?Ne:je;(r===`parked`?se:ae)({id:null,index:i}),ne(t=>qd(t,[e])),O(null),be(async()=>{let a=await Fu(e,t,n);if(a.ok)d(a.data.asset),T(t=>{let{[e]:n,...r}=t;return r}),te(t=>Jd(t,[e])),Le({commit:a.data.commit,ids:[e],from:r,verdict:t}),a.data.needs_details&&O({kind:`info`,title:`Moved to Needs details`,text:`${e}: Yes recorded. Missing: ${a.data.needs_details.join(`; `)}`,undo:!0});else{let n=Pu(a);T(t=>({...t,[e]:n.length?n:[a.error]})),O({kind:`error`,title:`Could not record ${Dd[t]}`,text:`${e}: ${a.error}. Fix it on the card and try again.`}),(r===`parked`?se:ae)({id:e,index:i}),r===`parked`?b(`parked`):(b(`review`),S(`unsure`))}ne(t=>Jd(t,[e])),k()})},ze=(e,t,n)=>{te(e=>qd(e,n)),O(n.length&&!t.length?{kind:`info`,title:`${Yd(n.length,`image`)} sent to the cards`}:null),t.length&&(ne(e=>qd(e,t)),be(async()=>{let r=await Iu(e.verdict,t);if(r.ok){let t=r.data.failed,i=Object.keys(r.data.needs_details);te(e=>qd(e,Object.keys(t))),T(e=>({...e,...t})),r.data.commit&&Le({commit:r.data.commit,ids:[...r.data.applied,...i],from:`grid`,verdict:e.verdict});let a=[];i.length&&a.push(`${i.length} moved to Needs details`),Object.keys(t).length&&a.push(`${Object.keys(t).length} need a fix on the card`),n.length&&a.push(`${n.length} flagged for a closer look`),O({kind:Object.keys(t).length?`error`:`success`,title:`Accepted ${r.data.applied.length} as ${Dd[e.verdict]}`,text:a.length?`${a.join(`, `)}.`:void 0,undo:!!r.data.commit})}else O({kind:`error`,title:`Could not accept the screen`,text:r.error});await p(),ne(e=>Jd(e,t)),k()}))},Be=()=>{me.current.length&&be(async()=>{let e=me.current.at(-1);if(!e)return;let t=await Lu(e.commit);if((t.ok||t.status>=400&&t.status<500)&&(me.current.pop(),ge(me.current.length)),!t.ok){O({kind:`error`,title:`Could not undo`,text:t.error});return}await p(),T(t=>{let n={...t};return e.ids.forEach(e=>delete n[e]),n});let n=e.ids[0]??null;e.from===`grid`?(b(`review`),S(`sure`),ie({verdict:e.verdict,ids:e.ids})):e.from===`parked`?(b(`parked`),se({id:n,index:0})):(b(`review`),S(`unsure`),ae({id:n,index:0}));let r=e.ids.length===1?e.ids[0]:Yd(e.ids.length,`image`);O({kind:`success`,title:`Undone`,text:`${Dd[e.verdict]} on ${r} is back for review.`}),k()})},Ve=(e,t)=>be(async()=>{let n=await gu(e,t);n.ok?(d(n.asset),T(n=>{let r=(n[e]??[]).filter(e=>!Object.keys(t).some(t=>e.startsWith(`${t}:`)||e.startsWith(`${t}.`))),{[e]:i,...a}=n;return r.length?{...a,[e]:r}:a})):T(t=>({...t,[e]:n.errors.length?n.errors:[n.error]}))}),He=e=>{le(e),O(null)},Ue=()=>{h()&&le(null)};bd(e=>e.key===`Escape`&&(Ue(),!0),e&&ce!==null);let We=e=>{b(e),document.activeElement?.blur()},Ge=e=>{S(e),document.activeElement?.blur()},Ke=r?.waiting_for_bot??0,qe=r?.rater,Je=!!a?.running,Ye=ce?A.get(ce):void 0,Xe=e&&!Ye;return(0,J.jsxs)(`div`,{className:`rate`,children:[(0,J.jsxs)(`div`,{className:`rate-strip`,role:`region`,"aria-label":`Rating status`,children:[(0,J.jsxs)(`div`,{className:`rate-strip-text`,children:[(0,J.jsx)(`strong`,{children:r?Ed(r.agreement):i?`Rating status unavailable`:`Loading...`}),r?.learning===`recent`&&(0,J.jsx)(`span`,{className:`editor-meta`,children:`Learning from recent verdicts — build the real index for look-alike learning.`}),i&&(0,J.jsx)(`span`,{className:`field-error`,children:i})]}),(0,J.jsx)(`span`,{className:`ops-spacer`}),a?.job&&(0,J.jsxs)(`span`,{className:`rate-last-run`,children:[(0,J.jsxs)(G,{size:`sm`,color:a.job.state===`failed`||Bd(a.job)>0?`warning`:`success`,children:[`Auto-rate `,a.job.state===`failed`?`stopped`:`done`]}),(0,J.jsx)(`span`,{className:`editor-meta`,children:Vd(a.job)}),(0,J.jsx)(K,{size:`sm`,variant:`ghost`,onClick:()=>de(e=>!e),children:ue?`Hide log`:`Log`}),(0,J.jsxs)(K,{icon:!0,size:`sm`,variant:`ghost`,onClick:()=>{de(!1),c()},children:[(0,J.jsx)(Ql,{size:`xs`}),(0,J.jsx)(`span`,{className:`sr-only`,children:`Dismiss Auto-rate result`})]})]}),ve>0&&(0,J.jsxs)(`span`,{className:`rate-saving`,children:[(0,J.jsx)(nu,{size:`xs`,label:`Saving changes`}),` Saving `,Yd(ve,`change`),`...`]}),(0,J.jsxs)(`span`,{className:`rate-waiting`,children:[Yd(Ke,`image`),` waiting for the bot`]}),(0,J.jsx)(K,{size:`sm`,disabled:!qe?.available||Je||Ke===0,onClick:o,children:Je?`Auto-rating...`:`Auto-rate`}),qe&&!qe.available&&(0,J.jsx)(`span`,{className:`editor-meta rate-off`,children:qe.reason})]}),l&&(0,J.jsx)(`div`,{className:`rate-notice`,children:(0,J.jsx)(Vl,{type:`error`,children:l})}),a&&(a.running||ue)&&(0,J.jsx)(`div`,{className:`rate-notice rate-job`,children:(0,J.jsx)(Uu,{jobId:a.id,name:`Auto-rate`,onFinished:s},a.id)}),D&&e&&(0,J.jsx)(`div`,{className:`rate-toasts`,children:(0,J.jsxs)(uu,{open:!0,type:D.kind,onClose:()=>O(null),children:[(0,J.jsx)(`span`,{slot:`title`,children:D.title}),D.text,D.undo&&he>0&&(0,J.jsx)(K,{slot:`action`,size:`sm`,variant:`ghost`,onClick:Be,children:`Undo`})]})}),Ye?(0,J.jsxs)(`div`,{className:`review rate-editor`,children:[(0,J.jsxs)(`div`,{className:`review-bar`,children:[(0,J.jsx)(K,{size:`sm`,variant:`outline`,onClick:Ue,children:`Back to rating`}),(0,J.jsx)(`span`,{className:`review-keys`,children:`Esc: back to rating.`})]}),(0,J.jsx)(ld,{asset:Ye,vocabulary:n,onChanged:u,onDirtyChange:g,onTransition:()=>{le(null),m()}},Ye.id)]}):(0,J.jsxs)(ou,{size:`sm`,className:`rate-tabs`,selectedIndex:Hd.indexOf(y),onTabSelected:e=>We(Hd[e.detail.index]),children:[(0,J.jsxs)(iu,{index:0,children:[`To review (`,Ee+we.length,`)`]}),(0,J.jsxs)(iu,{index:1,children:[`Needs details (`,De.length,`)`]}),(0,J.jsxs)(iu,{index:2,children:[`Parked (`,j.length,`)`]}),(0,J.jsx)(au,{index:0,children:y===`review`&&(()=>{if(!ke&&we.length===0)return(0,J.jsxs)(`div`,{className:`rate-empty`,children:[(0,J.jsx)(`h2`,{children:`All caught up`}),(0,J.jsx)(`p`,{className:`empty`,children:Ke>0?`${Yd(Ke,`image`)} still waiting for the bot. Run Auto-rate to queue them here.`:`Nothing left for you to check. New images land here once Auto-rate has looked at them.`}),(De.length>0||j.length>0)&&(0,J.jsxs)(`div`,{className:`rate-empty-actions`,children:[De.length>0&&(0,J.jsxs)(K,{size:`sm`,variant:`outline`,onClick:()=>We(`needs`),children:[`Needs details (`,De.length,`)`]}),j.length>0&&(0,J.jsxs)(K,{size:`sm`,variant:`outline`,onClick:()=>We(`parked`),children:[`Parked (`,j.length,`)`]})]})]});let e=(0,J.jsxs)(Ul,{size:`sm`,"aria-label":`Lane`,className:`lane-switch`,children:[(0,J.jsxs)(Hl,{active:Ae===`sure`,disabled:!ke,onClick:()=>Ge(`sure`),children:[`Bot is sure (`,Ee,`)`]}),(0,J.jsxs)(Hl,{active:Ae===`unsure`,disabled:we.length===0,onClick:()=>Ge(`unsure`),children:[`Bot is unsure (`,we.length,`)`]})]});return(0,J.jsx)(J.Fragment,{children:Ae===`sure`&&ke?(0,J.jsx)(zd,{screen:ke,assets:A,total:Te(ke.verdict),active:Xe&&y===`review`,canUndo:he>0,onAccept:(e,t)=>ze(ke,e,t),onUndo:Be,toolbar:e},`${ke.verdict}:${ke.ids[0]}`):Me&&A.get(Me)?(0,J.jsx)(Ld,{asset:A.get(Me),vocabulary:n,verdicts:[`yes`,`no`,`maybe`],errors:w[Me]??[],position:{index:je,total:we.length},active:Xe&&y===`review`,canUndo:he>0,onVerdict:(e,t)=>Re(Me,e,t,`card`),onMove:e=>{let t=Math.max(0,Math.min(je+e,we.length-1));ae({id:we[t],index:t})},onUndo:Be,onPatch:e=>Ve(Me,e),onOpenEditor:()=>He(Me),toolbar:e},Me):null})})()}),(0,J.jsx)(au,{index:1,children:y===`needs`&&(De.length===0?(0,J.jsxs)(`div`,{className:`rate-empty`,children:[(0,J.jsx)(`h2`,{children:`Nothing needs details`}),(0,J.jsx)(`p`,{className:`empty`,children:`A Yes that cannot be confirmed from the card (say, a missing license) shows up here with what is missing.`})]}):(0,J.jsx)(`ul`,{className:`needs-list`,"aria-label":`Needs details`,children:De.map(e=>(0,J.jsxs)(`li`,{className:`needs-row`,children:[(0,J.jsx)(`img`,{src:e.thumb_url,alt:e.description||e.id,loading:`lazy`}),(0,J.jsxs)(`div`,{className:`needs-info`,children:[(0,J.jsx)(`strong`,{children:e.id}),(0,J.jsxs)(`span`,{className:`editor-meta`,children:[e.class,` / `,e.source?.origin,` / `,e.license||`no license`]}),(fe[e.id]??[]).map(e=>(0,J.jsx)(`p`,{className:`field-error`,children:e},e)),(fe[e.id]??[]).some(e=>!Gd.has(e.split(/[:.]/)[0]))&&(0,J.jsxs)(`p`,{className:`field-hint`,children:[`The workbench cannot edit this field yet: set it in `,e.id,`.json and commit.`]})]}),(0,J.jsx)(K,{size:`sm`,variant:`outline`,onClick:()=>He(e.id),children:`Open in editor`})]},e.id))}))}),(0,J.jsx)(au,{index:2,children:y===`parked`&&(()=>{let e=Pe?A.get(Pe):void 0;return e?(0,J.jsx)(Ld,{asset:e,vocabulary:n,verdicts:[`yes`,`no`],errors:w[e.id]??[],position:{index:Ne,total:j.length},active:Xe&&y===`parked`,canUndo:he>0,onVerdict:(t,n)=>Re(e.id,t,n,`parked`),onMove:e=>{let t=Math.max(0,Math.min(Ne+e,j.length-1));se({id:j[t],index:t})},onUndo:Be,onPatch:t=>Ve(e.id,t),onOpenEditor:()=>He(e.id)},e.id):(0,J.jsxs)(`div`,{className:`rate-empty`,children:[(0,J.jsx)(`h2`,{children:`Nothing parked`}),(0,J.jsx)(`p`,{className:`empty`,children:`Maybe-yes images wait here, out of the library, until someone says Yes or No.`})]})})()})]})]})}var Zd=`quarry.filters`;function Qd(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)({}),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)({}),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(`library`),[ee,te]=(0,_.useState)(null),[C,ne]=(0,_.useState)(null),[w,T]=(0,_.useState)(null),[re,ie]=(0,_.useState)(null),[E,ae]=(0,_.useState)(()=>localStorage.getItem(Zd)!==`closed`),oe=()=>ae(e=>(localStorage.setItem(Zd,e?`closed`:`open`),!e)),[se,D]=(0,_.useState)(null),[O,ce]=(0,_.useState)(null),[le,ue]=(0,_.useState)(!1),de=(0,_.useCallback)(()=>{pu().then(e=>{s(e),l(null)}).catch(e=>l(e.message))},[]),fe=(0,_.useCallback)(()=>{zu().then(e=>{e.ok?(te(e.data),ne(null)):ne(e.error)})},[]),pe=(0,_.useCallback)(()=>fu().then(e=>{t(e),a(null)}).catch(e=>a(e.message)).finally(()=>r(!0)),[]),me=(0,_.useCallback)(()=>{pe(),mu().then(h).catch(()=>h({})),de(),fe()},[de,fe,pe]);(0,_.useEffect)(me,[me]),(0,_.useEffect)(()=>{let e=setInterval(de,3e4);return()=>clearInterval(e)},[de]),(0,_.useEffect)(()=>{if(!w?.running)return;let e=setInterval(()=>{pe(),fe()},5e3);return()=>clearInterval(e)},[w?.running,pe,fe]);let he=(0,_.useCallback)(async()=>{ie(null);let e=await Ru();e.ok?T({id:e.data.job_id,running:!0}):ie(`Auto-rate did not start: ${e.error}`)},[]),ge=(0,_.useCallback)(e=>{T(t=>t&&{...t,running:!1,job:e}),me()},[me]),_e=(0,_.useMemo)(()=>se?Yu(X(se.ids,e),u,``):Yu(e,u,f),[e,u,f,se]),ve=(0,_.useCallback)(e=>{t(t=>t.map(t=>t.id===e.id?e:t)),de()},[de]),ye=(0,_.useCallback)(e=>t(t=>t.map(t=>t.id===e.id?e:t)),[]),be=async()=>{let e=f.trim();if(!e)return;ue(!0),ce(null);let t=await Mu(e);ue(!1),t.ok?D({q:e,ids:t.hits,stale:t.stale}):(D(null),ce(t.error))},xe=()=>{D(null),ce(null),p(``)},k=(0,_.useRef)(!1),A=(0,_.useCallback)(e=>{k.current=e},[]),Se=(0,_.useCallback)(()=>od(k.current,()=>window.confirm(`You have unsaved changes. Discard them?`))?(k.current=!1,!0):!1,[]);(0,_.useEffect)(()=>{let e=e=>{k.current&&e.preventDefault()};return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[]);let Ce=(0,_.useCallback)(()=>b(null),[]),we=(0,_.useMemo)(()=>e.filter(e=>e.status===`proposed`).length,[e]),[Te,Ee]=(0,_.useState)(0),j=e.find(e=>e.id===g),De=()=>{Se()&&v(null)},Oe=y===null&&x===`library`,ke=e=>{(y!==null||x!==e)&&Se()&&(v(null),b(null),S(e))};return(0,J.jsxs)(`div`,{className:`app`,children:[(0,J.jsxs)(`header`,{className:`topbar`,children:[Oe&&(0,J.jsxs)(K,{icon:!0,size:`sm`,variant:`ghost`,onClick:oe,children:[E?(0,J.jsx)(Xl,{size:`xs`}):(0,J.jsx)(Zl,{size:`xs`}),(0,J.jsx)(`span`,{className:`sr-only`,children:E?`Hide filters`:`Show filters`})]}),(0,J.jsx)(`h1`,{children:`Quarry`}),(0,J.jsxs)(Ul,{size:`sm`,"aria-label":`View`,children:[(0,J.jsx)(Hl,{active:y===null&&x===`library`,onClick:()=>ke(`library`),children:`Library`}),(0,J.jsxs)(Hl,{active:y===null&&x===`rate`,onClick:()=>ke(`rate`),children:[`Rate (`,Te,`)`]}),(0,J.jsxs)(Hl,{active:y!==null,disabled:we===0,onClick:()=>{y===null&&Se()&&(v(null),S(`library`),b(e.filter(e=>e.status===`proposed`).map(e=>e.id)))},children:[`Review queue (`,we,`)`]}),(0,J.jsx)(Hl,{active:y===null&&x===`vocab`,onClick:()=>ke(`vocab`),children:`Vocabulary`}),(0,J.jsx)(Hl,{active:y===null&&x===`ingest`,onClick:()=>ke(`ingest`),children:`Ingest`})]}),(0,J.jsx)(`div`,{className:`search`,children:(0,J.jsx)(`div`,{onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),be())},children:(0,J.jsx)(cu,{type:`search`,"aria-label":`Search assets`,placeholder:`Filter; press Enter for index search`,value:f,onValueChanged:e=>{p(e.detail.value),D(null),ce(null)}})})}),(0,J.jsx)(`span`,{className:`result-count`,children:n?`${_e.length} / ${e.length}`:``})]}),(0,J.jsx)(td,{status:o,error:c,onRefresh:me}),(0,J.jsx)(`main`,{className:`main rate-main`,hidden:y!==null||x!==`rate`,children:(0,J.jsx)(Xd,{active:y===null&&x===`rate`,assets:e,vocabulary:m,summary:ee,summaryError:C,rateJob:w,rateError:re,onStartRate:he,onRateJobFinished:ge,onDismissRateJob:()=>T(null),onChanged:ve,onAssetSaved:ye,refreshStatus:de,reloadAssets:pe,refreshSummary:fe,confirmDiscard:Se,onDirtyChange:A,onToReviewCount:Ee})}),y===null?x===`rate`?null:x===`vocab`?(0,J.jsx)(`main`,{className:`main`,children:(0,J.jsx)(Qu,{assets:e,vocabulary:m,onChanged:me,onOpenInGrid:(e,t)=>{d({[e]:[t]}),p(``),S(`library`)}})}):x===`ingest`?(0,J.jsx)(`main`,{className:`main`,children:(0,J.jsx)(Gu,{products:m.products??[],onIngested:me,rater:ee?.rater??null,rateJob:w,onAutoRate:he,rateError:re,onReviewQueue:()=>{let t=e.filter(e=>e.status===`proposed`).map(e=>e.id);t.length&&b(t)}})}):(0,J.jsx)(`div`,{className:`body`,children:(0,J.jsxs)(q,{resizable:!0,split:`18% 82%`,children:[(0,J.jsx)(ru,{variant:`solid`,collapsed:!E,minSize:12,maxSize:35,children:(0,J.jsx)(ed,{assets:e,filters:u,q:f,onToggle:(e,t,n)=>d(r=>{let i=r[e]??[];return{...r,[e]:n?[...i.filter(e=>e!==t),t]:i.filter(e=>e!==t)}})})}),(0,J.jsx)(ru,{minSize:50,maxSize:100,children:(0,J.jsxs)(q,{resizable:!0,split:`58% 42%`,collapseBelow:`560px`,children:[(0,J.jsx)(ru,{minSize:30,children:(0,J.jsxs)(`main`,{className:`main`,"aria-label":`Gallery`,children:[(le||se||O)&&(0,J.jsxs)(`div`,{className:`search-banner`,role:`region`,"aria-label":`Index search`,children:[le&&(0,J.jsx)(`p`,{className:`empty`,children:`Searching index...`}),O&&(0,J.jsxs)(Vl,{type:`error`,children:[`Index search failed: `,O,` `,/mismatch|embedder/i.test(O)?`Re-index with the matching embedder (or restart the workbench with the right embedder option), then try again.`:``]}),se&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(`div`,{className:`search-banner-row`,children:[(0,J.jsxs)(`strong`,{children:[`Index search: “`,se.q,`”`]}),(0,J.jsxs)(`span`,{children:[_e.length,` result`,_e.length===1?``:`s`,`, best match first`]}),(0,J.jsx)(K,{size:`sm`,variant:`outline`,onClick:xe,children:`Clear`})]}),se.stale&&(0,J.jsx)(Vl,{type:`warning`,children:`The index is stale; results may miss recent edits. Re-index to refresh.`})]}),O&&(0,J.jsx)(`div`,{children:(0,J.jsx)(K,{size:`sm`,variant:`outline`,onClick:xe,children:`Clear`})})]}),i?(0,J.jsxs)(`p`,{className:`empty`,role:`alert`,children:[`Could not load assets: `,i]}):n?(0,J.jsx)(fd,{assets:_e,total:e.length,selectedId:g,onSelect:e=>{(e===g||Se())&&v(e)}}):(0,J.jsx)(`p`,{className:`empty`,children:`Loading...`})]})}),(0,J.jsx)(ru,{collapsed:!j,minSize:25,maxSize:70,children:j&&(0,J.jsxs)(`aside`,{className:`detail`,"aria-label":`Asset details`,children:[(0,J.jsxs)(`div`,{className:`detail-bar`,children:[(0,J.jsx)(`span`,{className:`detail-title`,children:`Details`}),(0,J.jsxs)(K,{icon:!0,size:`sm`,variant:`ghost`,onClick:De,children:[(0,J.jsx)(Ql,{size:`xs`}),(0,J.jsx)(`span`,{className:`sr-only`,children:`Close details`})]})]}),(0,J.jsx)(ld,{asset:j,vocabulary:m,onChanged:ve,onDirtyChange:A,onOpenSimilar:t=>{e.some(e=>e.id===t)&&Se()&&v(t)}},j.id)]})})]})})]})}):(0,J.jsx)(`main`,{className:`main`,children:(0,J.jsx)(_d,{initialIds:y,assets:e,vocabulary:m,onChanged:ve,onExit:Ce,confirmDiscard:Se,onDirtyChange:A})})]})}Ke.inject(),qe.inject(),(0,v.createRoot)(document.getElementById(`root`)).render((0,J.jsx)(_.StrictMode,{children:(0,J.jsx)(Qd,{})}));