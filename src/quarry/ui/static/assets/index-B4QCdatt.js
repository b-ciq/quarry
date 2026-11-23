var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var C={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function w(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return w(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var T=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(T,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(T,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function fe(e){var t=C.T,n={};n.types=t===null?null:t.types,C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,de)}catch(e){de(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}}function pe(e){var t=C.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else fe(pe.bind(null,e))}var me={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=me,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.addTransitionType=pe,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return w(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return w(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=fe,e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,re());else{var t=n(l);t!==null&&T(x,t.startTime-e)}}}var S=!1,ee=-1,te=5,C=-1;function ne(){return g?!0:!(e.unstable_now()-C<te)}function w(){if(g=!1,S){var t=e.unstable_now();C=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ee),ee=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&T(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():S=!1}}}var re;if(typeof y==`function`)re=function(){y(w)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=w,re=function(){ae.postMessage(null)}}else re=function(){_(w,0)};function T(t,n){ee=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):te=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ee),ee=-1):h=!0,T(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,re()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function ee(e,t,n){return e===n||e===t&&(x=e,!0)}function te(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function C(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ne(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var w=Object.assign,re=Symbol.for(`react.element`),ie=Symbol.for(`react.transitional.element`),ae=Symbol.for(`react.portal`),T=Symbol.for(`react.fragment`),oe=Symbol.for(`react.strict_mode`),se=Symbol.for(`react.profiler`),ce=Symbol.for(`react.consumer`),le=Symbol.for(`react.context`),ue=Symbol.for(`react.forward_ref`),de=Symbol.for(`react.suspense`),fe=Symbol.for(`react.suspense_list`),pe=Symbol.for(`react.memo`),me=Symbol.for(`react.lazy`),he=Symbol.for(`react.activity`),ge=Symbol.for(`react.legacy_hidden`),_e=Symbol.for(`react.memo_cache_sentinel`),ve=Symbol.for(`react.view_transition`),ye=Symbol.for(`react.recoverable`),be=Symbol.iterator;function xe(e){return typeof e!=`object`||!e?null:(e=be&&e[be]||e[`@@iterator`],typeof e==`function`?e:null)}var Se=Symbol.for(`react.client.reference`);function Ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case T:return`Fragment`;case se:return`Profiler`;case oe:return`StrictMode`;case de:return`Suspense`;case fe:return`SuspenseList`;case he:return`Activity`;case ve:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case ae:return`Portal`;case le:return e.displayName||`Context`;case ce:return(e._context.displayName||`Context`)+`.Consumer`;case ue:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case pe:return t=e.displayName||null,t===null?Ce(e.type)||`Memo`:t;case me:t=e._payload,e=e._init;try{return Ce(e(t))}catch{}}return null}var we=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Te={pending:!1,data:null,method:null,action:null},Ee=[],De=-1;function Oe(e){return{current:e}}function ke(e){0>De||(e.current=Ee[De],Ee[De]=null,De--)}function O(e,t){De++,Ee[De]=e.current,e.current=t}var Ae=Oe(null),je=Oe(null),Me=Oe(null),Ne=Oe(null);function Pe(e,t){switch(O(Me,t),O(je,e),O(Ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ke(Ae),O(Ae,e)}function Fe(){ke(Ae),ke(je),ke(Me)}function Ie(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,O(Ne,e)),t=Ae.current;var n=dp(t,e.type);t!==n&&(O(je,e),O(Ae,n))}function Le(e){je.current===e&&(ke(Ae),ke(je)),Ne.current===e&&(ke(Ne),sh._currentValue=Te)}var Re,ze;function Be(e){if(Re===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Re=t&&t[1]||``,ze=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Re+e+ze}var Ve=!1;function He(e,t){if(!e||Ve)return``;Ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Be(n):``}function Ue(e,t){switch(e.tag){case 26:case 27:case 5:return Be(e.type);case 16:return Be(`Lazy`);case 13:return e.child!==t&&t!==null?Be(`Suspense Fallback`):Be(`Suspense`);case 19:return Be(`SuspenseList`);case 0:case 15:return He(e.type,!1);case 11:return He(e.type.render,!1);case 1:return He(e.type,!0);case 31:return Be(`Activity`);case 30:return Be(`ViewTransition`);default:return``}}function We(e){try{var t=``,n=null;do t+=Ue(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ge=Object.prototype.hasOwnProperty,Ke=t.unstable_scheduleCallback,qe=t.unstable_cancelCallback,Je=t.unstable_shouldYield,Ye=t.unstable_requestPaint,Xe=t.unstable_now,Ze=t.unstable_getCurrentPriorityLevel,Qe=t.unstable_ImmediatePriority,$e=t.unstable_UserBlockingPriority,et=t.unstable_NormalPriority,k=t.unstable_LowPriority,tt=t.unstable_IdlePriority,nt=t.log,rt=t.unstable_setDisableYieldValue,it=null,at=null;function ot(e){if(typeof nt==`function`&&rt(e),at&&typeof at.setStrictMode==`function`)try{at.setStrictMode(it,e)}catch{}}var st=Math.clz32?Math.clz32:ut,ct=Math.log,lt=Math.LN2;function ut(e){return e>>>=0,e===0?32:31-(ct(e)/lt|0)|0}var dt=256,ft=262144,pt=4194304;function mt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=mt(n))):i=mt(o):i=mt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=mt(n))):i=mt(o)):i=mt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function gt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _t(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-st(n),i=1<<r;t|=e[r],n&=~i}return t}function vt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(){var e=pt;return pt<<=1,!(pt&62914560)&&(pt=4194304),e}function bt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function St(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-st(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-st(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function wt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Tt(e,t){var n=t&-t;return n=n&42?1:Et(n),(n&(e.suspendedLanes|t))===0?n:0}function Et(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ot(){var e=D.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function kt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var At=Math.random().toString(36).slice(2),jt=`__reactFiber$`+At,Mt=`__reactProps$`+At,Nt=`__reactContainer$`+At,Pt=`__reactEvents$`+At,Ft=`__reactListeners$`+At,It=`__reactHandles$`+At,Lt=`__reactResources$`+At,Rt=`__reactMarker$`+At,zt=`__reactLoad$`+At;function Bt(e){delete e[jt],delete e[Mt],delete e[Ft],delete e[It]}function Vt(e){var t;if(t=e[jt])return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[jt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Ht(e){if(e=e[jt]||e[Nt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ut(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Wt(e){var t=e[Lt];return t||=e[Lt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Gt(e){e[Rt]=!0}function Kt(e){e[zt]=void 0}var qt=new Set,Jt={};function A(e,t){Yt(e,t),Yt(e+`Capture`,t)}function Yt(e,t){for(Jt[e]=t,e=0;e<t.length;e++)qt.add(t[e])}var Xt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),j={},Zt={};function Qt(e){return Ge.call(Zt,e)?!0:Ge.call(j,e)?!1:Xt.test(e)?Zt[e]=!0:(j[e]=!0,!1)}var M=!1;function $t(){var e=M;return M=!1,e}function en(e,t,n){if(Qt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function tn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function nn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function rn(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function an(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function on(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sn(e){if(!e._valueTracker){var t=an(e)?`checked`:`value`;e._valueTracker=on(e,t,``+e[t])}}function cn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=an(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var ln=/[\n"\\]/g;function un(e){return e.replace(ln,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function dn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+rn(t)):e.value!==``+rn(t)&&(e.value=``+rn(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):pn(e,rn(n)):o===`number`&&e.value==t?pn(e,rn(e.value)):pn(e,rn(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+rn(s):e.removeAttribute(`name`)}function fn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){sn(e);return}n=n==null?``:``+rn(n),t=t==null?n:``+rn(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),sn(e)}function pn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function mn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+rn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function hn(e,t,n){t!=null&&(t=``+rn(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+rn(n)}function gn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(we(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=rn(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),sn(e)}function _n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function yn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||vn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function bn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,M=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(yn(e,a,r),M=!0)}else for(var o in t)t.hasOwnProperty(o)&&yn(e,o,t[o])}function xn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wn(e){return Cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Tn(){}var En=null;function N(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dn=null,P=null;function On(e){var t=Ht(e);if(t&&(e=t.stateNode)){var n=e[Mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(dn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+un(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Mt]||null;if(!a)throw Error(i(90));dn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&cn(r)}break a;case`textarea`:hn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&mn(e,!!n.multiple,t,!1)}}}var kn=!1;function An(e,t,n){if(kn)return e(t,n);kn=!0;try{return e(t)}finally{if(kn=!1,(Dn!==null||P!==null)&&(zd(),Dn&&(t=Dn,e=P,P=Dn=null,On(t),e)))for(t=0;t<e.length;t++)On(e[t])}}function jn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Mn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Nn=!1;if(Mn)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Nn=!0}}),window.addEventListener(`test`,Pn,Pn),window.removeEventListener(`test`,Pn,Pn)}catch{Nn=!1}var Fn=null,In=null,Ln=null;function Rn(){if(Ln)return Ln;var e,t=In,n=t.length,r,i=`value`in Fn?Fn.value:Fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ln=i.slice(e,1<r?1-r:void 0)}function zn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bn(){return!0}function Vn(){return!1}function Hn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Bn:Vn,this.isPropagationStopped=Vn,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wn=Hn(Un),Gn=w({},Un,{view:0,detail:0}),Kn=Hn(Gn),qn,Jn,Yn,Xn=w({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:or,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Yn&&(Yn&&e.type===`mousemove`?(qn=e.screenX-Yn.screenX,Jn=e.screenY-Yn.screenY):Jn=qn=0,Yn=e),qn)},movementY:function(e){return`movementY`in e?e.movementY:Jn}}),Zn=Hn(Xn),Qn=Hn(w({},Xn,{dataTransfer:0})),F=Hn(w({},Gn,{relatedTarget:0})),$n=Hn(w({},Un,{animationName:0,elapsedTime:0,pseudoElement:0})),er=Hn(w({},Un,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),tr=Hn(w({},Un,{data:0})),nr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},rr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},ir={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function ar(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ir[e])?!!t[e]:!1}function or(){return ar}var sr=Hn(w({},Gn,{key:function(e){if(e.key){var t=nr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=zn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?rr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:or,charCode:function(e){return e.type===`keypress`?zn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?zn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),cr=Hn(w({},Xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),lr=Hn(w({},Un,{submitter:0})),ur=Hn(w({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:or})),dr=Hn(w({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0})),fr=Hn(w({},Xn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),pr=Hn(w({},Un,{newState:0,oldState:0,source:0})),mr=[9,13,27,32],hr=Mn&&`CompositionEvent`in window,gr=null;Mn&&`documentMode`in document&&(gr=document.documentMode);var I=Mn&&`TextEvent`in window&&!gr,_r=Mn&&(!hr||gr&&8<gr&&11>=gr),vr=` `,yr=!1;function br(e,t){switch(e){case`keyup`:return mr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function xr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Sr=!1;function Cr(e,t){switch(e){case`compositionend`:return xr(t);case`keypress`:return t.which===32?(yr=!0,vr):null;case`textInput`:return e=t.data,e===vr&&yr?null:e;default:return null}}function wr(e,t){if(Sr)return e===`compositionend`||!hr&&br(e,t)?(e=Rn(),Ln=In=Fn=null,Sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return _r&&t.locale!==`ko`?null:t.data;default:return null}}var Tr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Tr[e.type]:t===`textarea`}function Dr(e,t,n,r){Dn?P?P.push(r):P=[r]:Dn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Wn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Or=null,kr=null;function L(e){Vf(e,0)}function Ar(e){if(cn(Ut(e)))return e}function jr(e,t){if(e===`change`)return t}var Mr=!1;if(Mn){var Nr;if(Mn){var Pr=`oninput`in document;if(!Pr){var Fr=document.createElement(`div`);Fr.setAttribute(`oninput`,`return;`),Pr=typeof Fr.oninput==`function`}Nr=Pr}else Nr=!1;Mr=Nr&&(!document.documentMode||9<document.documentMode)}function Ir(){Or&&(Or.detachEvent(`onpropertychange`,Lr),kr=Or=null)}function Lr(e){if(e.propertyName===`value`&&Ar(kr)){var t=[];Dr(t,kr,e,N(e)),An(L,t)}}function Rr(e,t,n){e===`focusin`?(Ir(),Or=t,kr=n,Or.attachEvent(`onpropertychange`,Lr)):e===`focusout`&&Ir()}function zr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Ar(kr)}function Br(e,t){if(e===`click`)return Ar(t)}function Vr(e,t){if(e===`input`||e===`change`)return Ar(t)}function Hr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ur=typeof Object.is==`function`?Object.is:Hr;function Wr(e,t){if(Ur(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ge.call(t,i)||!Ur(e[i],t[i]))return!1}return!0}function Gr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qr(e,t){var n=Kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Kr(n)}}function Jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function Xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Zr=Mn&&`documentMode`in document&&11>=document.documentMode,Qr=null,$r=null,ei=null,ti=!1;function ni(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ti||Qr==null||Qr!==Gr(r)||(r=Qr,`selectionStart`in r&&Xr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ei&&Wr(ei,r)||(ei=r,r=Jf($r,`onSelect`),0<r.length&&(t=new Wn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Qr)))}function ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ii={animationend:ri(`Animation`,`AnimationEnd`),animationiteration:ri(`Animation`,`AnimationIteration`),animationstart:ri(`Animation`,`AnimationStart`),transitionrun:ri(`Transition`,`TransitionRun`),transitionstart:ri(`Transition`,`TransitionStart`),transitioncancel:ri(`Transition`,`TransitionCancel`),transitionend:ri(`Transition`,`TransitionEnd`)},ai={},oi={};Mn&&(oi=document.createElement(`div`).style,`AnimationEvent`in window||(delete ii.animationend.animation,delete ii.animationiteration.animation,delete ii.animationstart.animation),`TransitionEvent`in window||delete ii.transitionend.transition);function si(e){if(ai[e])return ai[e];if(!ii[e])return e;var t=ii[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in oi)return ai[e]=t[n];return e}var ci=si(`animationend`),li=si(`animationiteration`),ui=si(`animationstart`),di=si(`transitionrun`),fi=si(`transitionstart`),pi=si(`transitioncancel`),mi=si(`transitionend`),hi=new Map,gi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);gi.push(`scrollEnd`);function _i(e,t){hi.set(e,t),A(t,[e])}var vi=0;function yi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=vi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function bi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function xi(e,t){return e=bi(e),t=bi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Si=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ci=[],wi=0,Ti=0;function Ei(){for(var e=wi,t=Ti=wi=0;t<e;){var n=Ci[t];Ci[t++]=null;var r=Ci[t];Ci[t++]=null;var i=Ci[t];Ci[t++]=null;var a=Ci[t];if(Ci[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Ai(n,i,a)}}function Di(e,t,n,r){Ci[wi++]=e,Ci[wi++]=t,Ci[wi++]=n,Ci[wi++]=r,Ti|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Oi(e,t,n,r){return Di(e,t,n,r),ji(e)}function ki(e,t){return Di(e,null,null,t),ji(e)}function Ai(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-st(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ji(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Mi={};function Ni(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pi(e,t,n,r){return new Ni(e,t,n,r)}function Fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,t){var n=e.alternate;return n===null?(n=Pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Li(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ri(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Fi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Ae.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case he:return e=Pi(31,n,t,a),e.elementType=he,e.lanes=o,e;case T:return zi(n.children,a,o,t);case oe:s=8,a|=24;break;case se:return e=Pi(12,n,t,a|2),e.elementType=se,e.lanes=o,e;case de:return e=Pi(13,n,t,a),e.elementType=de,e.lanes=o,e;case fe:return e=Pi(19,n,t,a),e.elementType=fe,e.lanes=o,e;case ge:case ve:return e=a|32,e=Pi(30,n,t,e),e.elementType=ve,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case le:s=10;break a;case ce:s=9;break a;case ue:s=11;break a;case pe:s=14;break a;case me:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function zi(e,t,n,r){return e=Pi(7,e,r,t),e.lanes=n,e}function Bi(e,t,n){return e=Pi(6,e,null,t),e.lanes=n,e}function Vi(e){var t=Pi(18,null,null,0);return t.stateNode=e,t}function Hi(e,t,n){return t=Pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ui=new WeakMap;function Wi(e,t){if(typeof e==`object`&&e){var n=Ui.get(e);return n===void 0?(t={value:e,source:t,stack:We(t)},Ui.set(e,t),t):n}return{value:e,source:t,stack:We(t)}}var Gi=[],Ki=0,qi=null,Ji=0,Yi=[],Xi=0,Zi=null,Qi=1,$i=``;function ea(e,t){Gi[Ki++]=Ji,Gi[Ki++]=qi,qi=e,Ji=t}function ta(e,t,n){Yi[Xi++]=Qi,Yi[Xi++]=$i,Yi[Xi++]=Zi,Zi=e;var r=Qi;e=$i;var i=32-st(r)-1;r&=~(1<<i),n+=1;var a=32-st(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qi=1<<32-st(t)+i|n<<i|r,$i=a+e}else Qi=1<<a|n<<i|r,$i=e}function na(e){e.return!==null&&(ea(e,1),ta(e,1,0))}function ra(e){for(;e===qi;)qi=Gi[--Ki],Gi[Ki]=null,Ji=Gi[--Ki],Gi[Ki]=null;for(;e===Zi;)Zi=Yi[--Xi],Yi[Xi]=null,$i=Yi[--Xi],Yi[Xi]=null,Qi=Yi[--Xi],Yi[Xi]=null}function ia(e,t){Yi[Xi++]=Qi,Yi[Xi++]=$i,Yi[Xi++]=Zi,Qi=t.id,$i=t.overflow,Zi=e}var aa=null,R=null,z=!1,oa=null,sa=!1,ca=Error(i(519));function la(e){throw ha(Wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ca}function ua(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[jt]=e,t[Mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),fn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),gn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=Tn),t=!0):t=!1,t||la(e,!0)}function da(e){for(aa=e.return;aa;)switch(aa.tag){case 5:case 31:case 13:sa=!1;return;case 27:case 3:sa=!0;return;default:aa=aa.return}}function fa(e){if(e!==aa)return!1;if(!z)return da(e),z=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&R&&la(e),da(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));R=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));R=dm(e)}else t===27?(t=R,Sp(e.type)?(e=um,um=null,R=e):R=t):R=aa?lm(e.stateNode.nextSibling):null;return!0}function pa(){R=aa=null,z=!1}function ma(){var e=oa;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),oa=null),e}function ha(e){oa===null?oa=[e]:oa.push(e)}var ga=Oe(null),_a=null,va=null;function ya(e,t,n){O(ga,t._currentValue),t._currentValue=n}function ba(e){e._currentValue=ga.current,ke(ga)}function xa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Sa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),xa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),xa(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),xa(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ca(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ur(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Ne.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&Sa(t,e,n,r),t.flags|=262144,e!==null}function wa(e){for(e=e.firstContext;e!==null;){if(!Ur(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ta(e){_a=e,va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ea(e){return Oa(_a,e)}function Da(e,t){return _a===null&&Ta(e),Oa(e,t)}function Oa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},va===null){if(e===null)throw Error(i(308));va=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else va=va.next=t;return n}var ka=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Aa=t.unstable_scheduleCallback,ja=t.unstable_NormalPriority,Ma={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Na(){return{controller:new ka,data:new Map,refCount:0}}function Pa(e){e.refCount--,e.refCount===0&&Aa(ja,function(){e.controller.abort()})}function Fa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ia=null;function La(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ra=null,za=0,Ba=0,Va=null;function Ha(e,t){if(Ra===null){var n=Ra=[];za=0,Ba=Pf(),Va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return za++,t.then(Ua,Ua),t}function Ua(){if(--za===0&&(Ia=null,Ra!==null)){Va!==null&&(Va.status=`fulfilled`);var e=Ra;Ra=null,Ba=0,Va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Wa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ga=E.S;E.S=function(e,t){if(hd=Xe(),typeof t==`object`&&t&&typeof t.then==`function`&&Ha(e,t),Ia!==null)for(var n=bf;n!==null;)Fa(n,Ia),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Fa(r,n),r=r.next;if(Ba!==0){r=Ia,r===null&&(r=Ia=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ga!==null&&Ga(e,t)};var Ka=Oe(null);function qa(){var e=Ka.current;return e===null?q.pooledCache:e}function Ja(e,t){t===null?O(Ka,Ka.current):O(Ka,t.pool)}function Ya(){var e=qa();return e===null?null:{parent:Ma._currentValue,pool:e}}var Xa=Error(i(460)),Za=Error(i(474)),Qa=Error(i(542)),$a={then:function(){}};function eo(e){return e=e.status,e===`fulfilled`||e===`rejected`}function to(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Tn,Tn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ao(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(Tn,Tn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ao(e),e}throw ro=t,Xa}}function no(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ro=e,Xa):e}}var ro=null;function io(){if(ro===null)throw Error(i(459));var e=ro;return ro=null,e}function ao(e){if(e===Xa||e===Qa)throw Error(i(483))}var oo=null,so=0;function co(e){var t=so;return so+=1,oo===null&&(oo=[]),to(oo,e,t)}function lo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function uo(e,t){throw t.$$typeof===re?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function fo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ii(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===T?(e=d(e,t,n.props.children,r,n.key),lo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===me&&no(i)===t.type)?(t=a(t,n.props),lo(t,n),t.return=e,t):(t=Ri(n.type,n.key,n.props,null,e.mode,r),lo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Hi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=zi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ie:return n=Ri(t.type,t.key,t.props,null,e.mode,n),lo(n,t),n.return=e,n;case ae:return t=Hi(t,e.mode,n),t.return=e,t;case me:return t=no(t),f(e,t,n)}if(we(t)||xe(t))return t=zi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,co(t),n);if(t.$$typeof===le)return f(e,Da(e,t),n);uo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ie:return n.key===i?l(e,t,n,r):null;case ae:return n.key===i?u(e,t,n,r):null;case me:return n=no(n),p(e,t,n,r)}if(we(n)||xe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,co(n),r);if(n.$$typeof===le)return p(e,t,Da(e,n),r);uo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ie:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ae:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case me:return r=no(r),m(e,t,n,r,i)}if(we(r)||xe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,co(r),i);if(r.$$typeof===le)return m(e,t,n,Da(t,r),i);uo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),z&&ea(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&ea(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),z&&ea(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&ea(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&ea(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&ea(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===T&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case ie:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===T){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),lo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===me&&no(l)===r.type){n(e,r.sibling),c=a(r,o.props),lo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===T?(c=zi(o.props.children,e.mode,c,o.key),lo(c,o),c.return=e,e=c):(c=Ri(o.type,o.key,o.props,null,e.mode,c),lo(c,o),c.return=e,e=c)}return s(e);case ae:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Hi(o,e.mode,c),c.return=e,e=c}return s(e);case me:return o=no(o),_(e,r,o,c)}if(we(o))return h(e,r,o,c);if(xe(o)){if(l=xe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,co(o),c);if(o.$$typeof===le)return _(e,r,Da(e,o),c);uo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{so=0;var i=_(e,t,n,r);return oo=null,i}catch(t){if(t===Xa||t===Qa)throw t;var a=Pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var po=fo(!0),mo=fo(!1),ho=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _o(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ji(e),Ai(e,null,n),t}return Di(e,r,t,n),ji(e)}function bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wt(e,n)}}function xo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var So=!1;function Co(){if(So){var e=Va;if(e!==null)throw e}}function wo(e,t,n,r){So=!1;var i=e.updateQueue;ho=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===Ba&&(So=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=w({},d,f);break a;case 2:ho=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function To(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)To(n[e],t)}var Do=Oe(null),Oo=Oe(0);function ko(e,t){e=id,O(Oo,e),O(Do,t),id=e|t.baseLanes}function Ao(){O(Oo,id),O(Do,Do.current)}function jo(){id=Oo.current,ke(Do),ke(Oo)}var Mo=Oe(null),No=null;function Po(e){var t=e.alternate;O(zo,zo.current&1),O(Mo,e),No===null&&(t===null||Do.current!==null||t.memoizedState!==null)&&(No=e)}function Fo(e){O(zo,zo.current),O(Mo,e),No===null&&(No=e)}function Io(e){e.tag===22?(O(zo,zo.current),O(Mo,e),No===null&&(No=e)):Lo()}function Lo(){O(zo,zo.current),O(Mo,Mo.current)}function Ro(e){ke(Mo),No===e&&(No=null),ke(zo)}var zo=Oe(0);function Bo(e,t){O(Mo,Mo.current),O(zo,t)}function Vo(e){ke(zo),ke(Mo),No===e&&(No=null)}function Ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Uo=0,B=null,V=null,Wo=null,Go=!1,Ko=!1,qo=!1,Jo=0,Yo=0,Xo=null,Zo=0;function Qo(){throw Error(i(321))}function $o(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ur(e[n],t[n]))return!1;return!0}function es(e,t,n,r,i,a){return Uo=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?_c:vc,qo=!1,a=n(r,i),qo=!1,Ko&&(a=ns(t,n,r,i)),ts(e),a}function ts(e){E.H=gc;var t=V!==null&&V.next!==null;if(Uo=0,Wo=V=B=null,Go=!1,Yo=0,Xo=null,t)throw Error(i(300));e===null||Fc||(e=e.dependencies,e!==null&&wa(e)&&(Fc=!0))}function ns(e,t,n,r){B=e;var a=0;do{if(Ko&&(Xo=null),Yo=0,Ko=!1,25<=a)throw Error(i(301));if(a+=1,Wo=V=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=yc,o=t(n,r)}while(Ko);return o}function rs(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?us(t):t,e=e.useState()[0],(V===null?null:V.memoizedState)!==e&&(B.flags|=1024),t}function is(){var e=Jo!==0;return Jo=0,e}function as(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function os(e){if(Go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Go=!1}Uo=0,Wo=V=B=null,Ko=!1,Yo=Jo=0,Xo=null}function ss(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wo===null?B.memoizedState=Wo=e:Wo=Wo.next=e,Wo}function cs(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=Wo===null?B.memoizedState:Wo.next;if(t!==null)Wo=t,V=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},Wo===null?B.memoizedState=Wo=e:Wo=Wo.next=e}return Wo}function ls(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function us(e){var t=Yo;return Yo+=1,Xo===null&&(Xo=[]),e=to(Xo,e,t),t=B,(Wo===null?t.memoizedState:Wo.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?_c:vc),e}function ds(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return us(e);if(e.$$typeof===ye)return;if(e.$$typeof===le)return Ea(e)}throw Error(i(438,String(e)))}function fs(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ls(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=_e;return t.index++,n}function ps(e,t){return typeof t==`function`?t(e):t}function ms(e){return hs(cs(),V,e)}function hs(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Uo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ba&&(d=!0);else if((Uo&p)===p){u=u.next,p===Ba&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,od|=p;f=u.action,qo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ur(o,e.memoizedState)&&(Fc=!0,d&&(n=Va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function gs(e){var t=cs(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ur(o,t.memoizedState)||(Fc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function _s(e,t,n){var r=B,a=cs(),o=z;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ur((V||a).memoizedState,n);if(s&&(a.memoizedState=n,Fc=!0),a=a.queue,Hs(bs.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Wo!==null&&!!(Wo.memoizedState.tag&1),Ls(e?9:8,{destroy:void 0},ys.bind(null,r,a,n,t),null),e){if(r.flags|=2048,q===null)throw Error(i(349));o||Uo&127||vs(r,t,n)}return n}function vs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=ls(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ys(e,t,n,r){t.value=n,t.getSnapshot=r,xs(t)&&Ss(e)}function bs(e,t,n){return n(function(){xs(t)&&Ss(e)})}function xs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ur(e,n)}catch{return!0}}function Ss(e){var t=ki(e,2);t!==null&&Pd(t,e,2)}function Cs(e){var t=ss();if(typeof e==`function`){var n=e;if(e=n(),qo){ot(!0);try{n()}finally{ot(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:e},t}function ws(e,t,n,r){return e.baseState=n,hs(e,V,typeof r==`function`?r:ps)}function Ts(e,t,n,r,a){if(pc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Es(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Es(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};o.types=a===null?null:a.types,E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Ds(e,t,s)}catch(n){ks(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Ds(e,t,a)}catch(n){ks(e,t,n)}}function Ds(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Os(e,t,n)},function(n){return ks(e,t,n)}):Os(e,t,n)}function Os(e,t,n){t.status=`fulfilled`,t.value=n,As(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Es(e,n)))}function ks(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,As(t),t=t.next;while(t!==r)}e.action=null}function As(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function js(e,t){return t}function Ms(e,t){if(z){var n=q.formState;if(n!==null){a:{var r=B;if(z){if(R){b:{for(var i=R,a=sa;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){R=lm(i.nextSibling),r=i.data===`F!`;break a}}la(r)}r=!1}r&&(t=n[0])}}return n=ss(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:t},n.queue=r,n=uc.bind(null,B,r),r.dispatch=n,r=Cs(!1),a=fc.bind(null,B,!1,r.queue),r=ss(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ts.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ns(e){return Ps(cs(),V,e)}function Ps(e,t,n){if(t=hs(e,t,js)[0],e=ms(ps)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=us(t)}catch(e){throw e===Xa?Qa:e}else r=t;t=cs();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,Ls(9,{destroy:void 0},Fs.bind(null,i,n),null)),[r,a,e]}function Fs(e,t){e.action=t}function Is(e){var t=cs(),n=V;if(n!==null)return Ps(t,n,e);cs(),t=t.memoizedState,n=cs();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=ls(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Rs(){return cs().memoizedState}function zs(e,t,n,r){var i=ss();B.flags|=e,i.memoizedState=Ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function Bs(e,t,n,r){var i=cs();r=r===void 0?null:r;var a=i.memoizedState.inst;V!==null&&r!==null&&$o(r,V.memoizedState.deps)?i.memoizedState=Ls(t,a,n,r):(B.flags|=e,i.memoizedState=Ls(1|t,a,n,r))}function Vs(e,t){zs(8390656,8,e,t)}function Hs(e,t){Bs(2048,8,e,t)}function Us(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=ls(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ws(e){var t=cs().memoizedState;return Us({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Gs(e,t){return Bs(4,2,e,t)}function Ks(e,t){return Bs(4,4,e,t)}function qs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Js(e,t,n){n=n==null?null:n.concat([e]),Bs(4,4,qs.bind(null,t,e),n)}function Ys(){}function Xs(e,t){var n=cs();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&$o(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zs(e,t){var n=cs();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&$o(t,r[1]))return r[0];if(r=e(),qo){ot(!0);try{e()}finally{ot(!1)}}return n.memoizedState=[r,t],r}function Qs(e,t,n){return n===void 0||Uo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),B.lanes|=e,od|=e,n)}function $s(e,t,n,r){return Ur(n,t)?n:Do.current===null?!(Uo&106)||Uo&1073741824&&!(Y&261930)?(Fc=!0,e.memoizedState=n):(e=Md(),B.lanes|=e,od|=e,t):(e=Qs(e,n,r),Ur(e,t)||(Fc=!0),e)}function ec(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};s.types=o===null?null:o.types,E.T=s,fc(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?dc(e,t,Wa(c,r),jd(e)):dc(e,t,r,jd(e))}catch(n){dc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function tc(){}function nc(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=rc(e).queue;ec(e,a,t,Te,n===null?tc:function(){return ic(e),n(r)})}function rc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Te,baseState:Te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:Te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ic(e){var t=rc(e);t.next===null&&(t=e.alternate.memoizedState),dc(e,t.next.queue,{},jd())}function ac(){return Ea(sh)}function oc(){return cs().memoizedState}function sc(){return cs().memoizedState}function cc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=vo(n);var r=yo(t,e,n);r!==null&&(Pd(r,t,n),bo(r,t,n)),t={cache:Na()},e.payload=t;return}t=t.return}}function lc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},pc(e)?mc(t,n):(n=Oi(e,t,n,r),n!==null&&(Pd(n,e,r),hc(n,t,r)))}function uc(e,t,n){dc(e,t,n,jd())}function dc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(pc(e))mc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ur(s,o))return Di(e,t,i,0),q===null&&Ei(),!1}catch{}if(n=Oi(e,t,i,r),n!==null)return Pd(n,e,r),hc(n,t,r),!0}return!1}function fc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},pc(e)){if(t)throw Error(i(479))}else t=Oi(e,n,r,2),t!==null&&Pd(t,e,2)}function pc(e){var t=e.alternate;return e===B||t!==null&&t===B}function mc(e,t){Ko=Go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wt(e,n)}}var gc={readContext:Ea,use:ds,useCallback:Qo,useContext:Qo,useEffect:Qo,useImperativeHandle:Qo,useLayoutEffect:Qo,useInsertionEffect:Qo,useMemo:Qo,useReducer:Qo,useRef:Qo,useState:Qo,useDebugValue:Qo,useDeferredValue:Qo,useTransition:Qo,useSyncExternalStore:Qo,useId:Qo,useHostTransitionStatus:Qo,useFormState:Qo,useActionState:Qo,useOptimistic:Qo,useMemoCache:Qo,useCacheRefresh:Qo,useEffectEvent:Qo},_c={readContext:Ea,use:ds,useCallback:function(e,t){return ss().memoizedState=[e,t===void 0?null:t],e},useContext:Ea,useEffect:Vs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),zs(4194308,4,qs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zs(4194308,4,e,t)},useInsertionEffect:function(e,t){zs(4,2,e,t)},useMemo:function(e,t){var n=ss();t=t===void 0?null:t;var r=e();if(qo){ot(!0);try{e()}finally{ot(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ss();if(n!==void 0){var i=n(t);if(qo){ot(!0);try{n(t)}finally{ot(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=lc.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=ss();return e={current:e},t.memoizedState=e},useState:function(e){e=Cs(e);var t=e.queue,n=uc.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ys,useDeferredValue:function(e,t){return Qs(ss(),e,t)},useTransition:function(){var e=Cs(!1);return e=ec.bind(null,B,e.queue,!0,!1),ss().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=ss();if(z){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||vs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Vs(bs.bind(null,r,o,e),[e]),r.flags|=2048,Ls(9,{destroy:void 0},ys.bind(null,r,o,n,t),null),n},useId:function(){var e=ss(),t=q.identifierPrefix;if(z){var n=$i,r=Qi;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Jo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Zo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ac,useFormState:Ms,useActionState:Ms,useOptimistic:function(e){var t=ss();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fc.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:fs,useCacheRefresh:function(){return ss().memoizedState=cc.bind(null,B)},useEffectEvent:function(e){var t=ss(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},vc={readContext:Ea,use:ds,useCallback:Xs,useContext:Ea,useEffect:Hs,useImperativeHandle:Js,useInsertionEffect:Gs,useLayoutEffect:Ks,useMemo:Zs,useReducer:ms,useRef:Rs,useState:function(){return ms(ps)},useDebugValue:Ys,useDeferredValue:function(e,t){return $s(cs(),V.memoizedState,e,t)},useTransition:function(){var e=ms(ps)[0],t=cs().memoizedState;return[typeof e==`boolean`?e:us(e),t]},useSyncExternalStore:_s,useId:oc,useHostTransitionStatus:ac,useFormState:Ns,useActionState:Ns,useOptimistic:function(e,t){return ws(cs(),V,e,t)},useMemoCache:fs,useCacheRefresh:sc,useEffectEvent:Ws},yc={readContext:Ea,use:ds,useCallback:Xs,useContext:Ea,useEffect:Hs,useImperativeHandle:Js,useInsertionEffect:Gs,useLayoutEffect:Ks,useMemo:Zs,useReducer:gs,useRef:Rs,useState:function(){return gs(ps)},useDebugValue:Ys,useDeferredValue:function(e,t){var n=cs();return V===null?Qs(n,e,t):$s(n,V.memoizedState,e,t)},useTransition:function(){var e=gs(ps)[0],t=cs().memoizedState;return[typeof e==`boolean`?e:us(e),t]},useSyncExternalStore:_s,useId:oc,useHostTransitionStatus:ac,useFormState:Is,useActionState:Is,useOptimistic:function(e,t){var n=cs();return V===null?(n.baseState=e,[e,n.queue.dispatch]):ws(n,V,e,t)},useMemoCache:fs,useCacheRefresh:sc,useEffectEvent:Ws};function bc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=vo(r);i.payload=t,n!=null&&(i.callback=n),t=yo(e,i,r),t!==null&&(Pd(t,e,r),bo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=vo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=yo(e,i,r),t!==null&&(Pd(t,e,r),bo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=vo(n);r.tag=2,t!=null&&(r.callback=t),t=yo(e,r,n),t!==null&&(Pd(t,e,n),bo(t,e,n))}};function Sc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Wr(n,r)||!Wr(i,a):!0}function Cc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xc.enqueueReplaceState(t,t.state,null)}function wc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=w({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Tc(e){Si(e)}function Ec(e){console.error(e)}function Dc(e){Si(e)}function Oc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function kc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ac(e,t,n){return n=vo(n),n.tag=3,n.payload={element:null},n.callback=function(){Oc(e,t)},n}function jc(e){return e=vo(e),e.tag=3,e}function Mc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){kc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){kc(t,n,r),typeof i!=`function`&&(vd===null?vd=new Set([this]):vd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ca(t,n,a,!0),n=Mo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return No===null?Kd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===$a?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===$a?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(z)return t=Mo.current,t===null?(r!==ca&&(t=Error(i(423),{cause:r}),ha(Wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Wi(r,n),a=Ac(e.stateNode,r,a),xo(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ca&&(e=Error(i(422),{cause:r}),ha(Wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Wi(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ac(n.stateNode,r,e),xo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vd===null||!vd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=jc(a),Mc(a,e,n,r),xo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Pc=Error(i(461)),Fc=!1;function Ic(e,t,n,r){t.child=e===null?mo(t,null,n,r):po(t,e.child,n,r)}function Lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ta(t),r=es(e,t,n,o,a,i),s=is(),e!==null&&!Fc?(as(e,t,i),dl(e,t,i)):(z&&s&&na(t),t.flags|=1,Ic(e,t,r,i),t.child)}function Rc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,zc(e,t,a,r,i)):(e=Ri(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!fl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Wr:n,n(o,r)&&e.ref===t.ref)return dl(e,t,i)}return t.flags|=1,e=Ii(a,r),e.ref=t.ref,e.return=t,t.child=e}function zc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Wr(a,r)&&e.ref===t.ref){if(Fc=!1,t.pendingProps=r=a,fl(e,i))e.flags&131072&&(Fc=!0);else return t.lanes=e.lanes,dl(e,t,i)}}return qc(e,t,n,r,i)}function Bc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Hc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ja(t,a===null?null:a.cachePool),a===null?Ao():ko(t,a),Io(t);else return r=t.lanes=536870912,Hc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ja(t,null),Ao(),Lo()):(Ja(t,a.cachePool),ko(t,a),Lo(),t.memoizedState=null);return Ic(e,t,i,n),t.child}function Vc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Hc(e,t,n,r,i){var a=qa();return a=a===null?null:{parent:Ma._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ja(t,null),Ao(),Io(t),e!==null&&Ca(e,t,r,!0),t.childLanes=i,null}function Uc(e,t){return t=nl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Wc(e,t,n){return po(t,e.child,null,n),e=Uc(t,t.pendingProps),e.flags|=2,Ro(t),t.memoizedState=null,e}function Gc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(z){if(r.mode===`hidden`)return e=Uc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Vc(null,e);if(Fo(t),(e=R)?(e=am(e,sa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Zi===null?null:{id:Qi,overflow:$i},retryLane:536870912,hydrationErrors:null},n=Vi(e),n.return=t,t.child=n,aa=t,R=null)):e=null,e===null)throw la(t);return t.lanes=536870912,null}return Uc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Fo(t),a){if(t.flags&256)t.flags&=-257,t=Wc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Fc||Ca(e,t,n,!1),a=(n&e.childLanes)!==0,Fc||a){if(Do.current===null){if(r=q,r!==null&&(s=Tt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ki(e,s),Pd(r,e,s),Pc;Kd()}t=Wc(e,t,n)}else e=o.treeContext,R=lm(s.nextSibling),aa=t,z=!0,oa=null,sa=!1,e!==null&&ia(t,e),t=Uc(t,r),t.flags|=134221824;return t}return e=Ii(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Kc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function qc(e,t,n,r,i){return Ta(t),n=es(e,t,n,r,void 0,i),r=is(),e!==null&&!Fc?(as(e,t,i),dl(e,t,i)):(z&&r&&na(t),t.flags|=1,Ic(e,t,n,i),t.child)}function Jc(e,t,n,r,i,a){return Ta(t),t.updateQueue=null,n=ns(t,r,n,i),ts(e),r=is(),e!==null&&!Fc?(as(e,t,a),dl(e,t,a)):(z&&r&&na(t),t.flags|=1,Ic(e,t,n,a),t.child)}function Yc(e,t,n,r,i){if(Ta(t),t.stateNode===null){var a=Mi,o=n.contextType;typeof o==`object`&&o&&(a=Ea(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=xc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},go(t),o=n.contextType,a.context=typeof o==`object`&&o?Ea(o):Mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(bc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&xc.enqueueReplaceState(a,a.state,null),wo(t,r,a,i),Co(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=wc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Mi,typeof u==`object`&&u&&(o=Ea(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Cc(t,a,r,o),ho=!1;var f=t.memoizedState;a.state=f,wo(t,r,a,i),Co(),l=t.memoizedState,s||f!==l||ho?(typeof d==`function`&&(bc(t,n,d,r),l=t.memoizedState),(c=ho||Sc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,_o(e,t),o=t.memoizedProps,u=wc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Mi,typeof l==`object`&&l&&(c=Ea(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Cc(t,a,r,c),ho=!1,f=t.memoizedState,a.state=f,wo(t,r,a,i),Co();var p=t.memoizedState;o!==d||f!==p||ho||e!==null&&e.dependencies!==null&&wa(e.dependencies)?(typeof s==`function`&&(bc(t,n,s,r),p=t.memoizedState),(u=ho||Sc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&wa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Kc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=po(t,e.child,null,i),t.child=po(t,null,n,i)):Ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=dl(e,t,i),e}function Xc(e,t,n,r){return pa(),t.flags|=256,Ic(e,t,n,r),t.child}var Zc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qc(e){return{baseLanes:e,cachePool:Ya()}}function $c(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function el(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(zo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(z){if(i?Po(t):Lo(),(e=R)?(e=am(e,sa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Zi===null?null:{id:Qi,overflow:$i},retryLane:536870912,hydrationErrors:null},n=Vi(e),n.return=t,t.child=n,aa=t,R=null)):e=null,e===null)throw la(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Lo(),i=t.mode,a=nl({mode:`hidden`,children:a},i),r=zi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Qc(n),r.childLanes=$c(e,o,n),t.memoizedState=Zc,Vc(null,r)):(Po(t),tl(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return il(e,t,a,o,r,c,s,n)}return i?(Lo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ii(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=zi(i,a,n,null),i.flags|=2):i=Ii(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Vc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Qc(n):(a=i.cachePool,a===null?a=Ya():(s=Ma._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=$c(e,o,n),t.memoizedState=Zc,Vc(e.child,r)):(Po(t),n=e.child,e=n.sibling,n=Ii(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function tl(e,t){return t=nl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function nl(e,t){return e=Pi(22,e,null,t),e.lanes=0,e}function rl(e,t,n){return po(t,e.child,null,n),e=tl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function il(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Po(t),t.flags&=-257,rl(e,t,c)):t.memoizedState===null?(Lo(),o=a.fallback,s=t.mode,a=nl({mode:`visible`,children:a.children},s),o=zi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,po(t,e.child,null,c),a=t.child,a.memoizedState=Qc(c),a.childLanes=$c(e,r,c),t.memoizedState=Zc,Vc(null,a)):(Lo(),t.child=e.child,t.flags|=128,null);if(Po(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ha({value:a,source:null,stack:null})),rl(e,t,c)}if(Fc||Ca(e,t,c,!1),r=(c&e.childLanes)!==0,Fc||r){if(Do.current!==null)return rl(e,t,c);if(r=q,r!==null&&(a=Tt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,ki(e,a),Pd(r,e,a),Pc;return om(o)||Kd(),rl(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,R=lm(o.nextSibling),aa=t,z=!0,oa=null,sa=!1,e!==null&&ia(t,e),t=tl(t,a.children),t.flags|=134221824,t)}function al(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xa(e.return,t,n)}function ol(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Ho(n)===null&&(t=e),e=e.sibling}return t}function sl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function cl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ll(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=zo.current;if(t.flags&128)return Bo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Bo(t,o),i===`backwards`&&e!==null?(cl(e),Ic(e,t,r,n),cl(e)):Ic(e,t,r,n),r=z?Ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&al(e,n,t);else if(e.tag===19)al(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=ol(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,cl(t)),sl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sl(t,!0,n,null,a,r);break;case`together`:sl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=ol(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sl(t,!1,i,n,a,r)}return t.child}function ul(e,t,n){var r=t.pendingProps;return ya(t,t.type,r.value),Ic(e,t,r.children,n),t.child}function dl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Ca(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ii(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ii(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&wa(e)))}function pl(e,t,n){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),ya(t,Ma,e.memoizedState.cache),pa();break;case 27:case 5:Ie(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:ya(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Po(t),t.flags|=128,null;r=Ca(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?el(e,t,n):(Po(t),e=dl(e,t,n),e===null?null:e.sibling)}Po(t);break;case 19:if(t.flags&128)return ll(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Ca(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return ll(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Bo(t,zo.current),r)break;return null;case 22:return t.lanes=0,Bc(e,t,n,t.pendingProps);case 24:ya(t,Ma,e.memoizedState.cache)}return dl(e,t,n)}function ml(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Fc=!0;else{if(!fl(e,n)&&!(t.flags&128))return Fc=!1,pl(e,t,n);Fc=!!(e.flags&131072)}}else Fc=!1,z&&t.flags&1048576&&ta(t,Ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=no(t.elementType),t.type=e,typeof e==`function`)Fi(e)?(r=wc(e,r),t.tag=1,t=Yc(null,t,e,r,n)):(t.tag=0,t=qc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ue){t.tag=11,t=Lc(null,t,e,r,n);break a}if(a===pe){t.tag=14,t=Rc(null,t,e,r,n);break a}if(a===le){t.tag=10,t.type=e,t=ul(null,t,n);break a}}throw t=Ce(e)||e,Error(i(306,t,``))}}return t;case 0:return qc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=wc(r,t.pendingProps),Yc(e,t,r,a,n);case 3:a:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,_o(e,t),wo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ya(t,Ma,r),r!==o.cache&&Sa(t,[Ma],n,!0),Co(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Xc(e,t,r,n);break a}if(r!==a){a=Wi(Error(i(424)),t),ha(a),t=Xc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(R=lm(e.firstChild),aa=t,z=!0,oa=null,sa=!0,n=mo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(pa(),r===a){t=dl(e,t,n);break a}Ic(e,t,r,n)}t=t.child}return t;case 26:return Kc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:z||(t.stateNode=fp(t.type,t.pendingProps,Me.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ie(t),e===null&&z&&(r=t.stateNode=hm(t.type,t.pendingProps,Me.current),aa=t,sa=!0,a=R,Sp(t.type)?(um=a,R=lm(r.firstChild)):R=a),Ic(e,t,t.pendingProps.children,n),Kc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&z&&((a=r=R)&&(r=rm(r,t.type,t.pendingProps,sa),r===null?a=!1:(t.stateNode=r,aa=t,R=lm(r.firstChild),sa=!1,a=!0)),a||la(t)),Ie(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=es(e,t,rs,null,null,n),sh._currentValue=a),Kc(e,t),Ic(e,t,r,n),t.child;case 6:return e===null&&z&&((e=n=R)&&(n=im(n,t.pendingProps,sa),n===null?e=!1:(t.stateNode=n,aa=t,R=null,e=!0)),e||la(t)),null;case 13:return el(e,t,n);case 4:return Pe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=po(t,null,r,n):Ic(e,t,r,n),t.child;case 11:return Lc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Kc(e,t),Ic(e,t,r,n),t.child;case 8:return Ic(e,t,t.pendingProps.children,n),t.child;case 12:return Ic(e,t,t.pendingProps.children,n),t.child;case 10:return ul(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Ta(t),a=Ea(a),r=r(a),t.flags|=1,Ic(e,t,r,n),t.child;case 14:return Rc(e,t,t.type,t.pendingProps,n);case 15:return zc(e,t,t.type,t.pendingProps,n);case 19:return ll(e,t,n);case 31:return Gc(e,t,n);case 22:return Bc(e,t,n,t.pendingProps);case 24:return Ta(t),r=Ea(Ma),e===null?(a=qa(),a===null&&(a=q,o=Na(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},go(t),ya(t,Ma,a)):((e.lanes&n)!==0&&(_o(e,t),wo(t,null,null,n),Co()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ya(t,Ma,r),r!==a.cache&&Sa(t,[Ma],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ya(t,Ma,r))),Ic(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:z&&na(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Kc(e,t),Ic(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function hl(e){e.flags|=4}function gl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw ro=$a,Za}}else e.flags&=-16777217}function _l(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw ro=$a,Za}}function vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:yt(),e.lanes|=t,ud|=t)}function yl(e,t){if(!z)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bl(e,t,n){var r=t.pendingProps;switch(ra(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ba(Ma),Fe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fa(t)?hl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ma())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(hl(t),o===null?(H(t),gl(t,a,null,r,n)):(H(t),_l(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(hl(t),H(t),_l(t,o)):(e=e.memoizedProps,e!==r&&hl(t),H(t),gl(t,a,e,r,n)),null;case 27:if(Le(t),n=Me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&hl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),t.subtreeFlags&=-33554433,null}e=Ae.current,fa(t)?ua(t,e):(e=hm(a,r,n),t.stateNode=e,hl(t))}return H(t),t.subtreeFlags&=-33554433,null;case 5:if(Le(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&hl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),t.subtreeFlags&=-33554433,null}if(o=Ae.current,fa(t))ua(t,o);else{var s=lp(Me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[jt]=t,o[Mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&hl(t)}}return H(t),t.subtreeFlags&=-33554433,gl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&hl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Me.current,fa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=aa,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[jt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||la(t,!0)}else e=lp(e).createTextNode(r),e[jt]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=fa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[jt]=t}else pa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=ma(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ro(t),t):(Ro(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=fa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[jt]=t}else pa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=ma(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ro(t),t):(Ro(t),null)}return Ro(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vl(t,t.updateQueue),H(t),null);case 4:return Fe(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,H(t),null;case 10:return ba(t.type),H(t),null;case 19:if(Vo(t),r=t.memoizedState,r===null)return H(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)yl(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ho(e),o!==null){for(t.flags|=128,yl(r,!1),e=o.updateQueue,t.updateQueue=e,vl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Li(n,e),n=n.sibling;return Bo(t,zo.current&1|2),z&&ea(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Xe()>gd&&(t.flags|=128,a=!0,yl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Ho(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,vl(t,e),yl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!z)return H(t),null}else 2*Xe()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,yl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Xe(),e.sibling=null,o=zo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||z?Bo(t,o):(n=o,O(Mo,t),O(zo,n),No===null&&(No=t)),z&&ea(t,r.treeForkCount),e}return H(t),null;case 22:case 23:return Ro(t),jo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&vl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ke(Ka),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ba(Ma),H(t),null;case 25:return null;case 30:return t.flags|=33554432,H(t),null}throw Error(i(156,t.tag))}function xl(e,t){switch(ra(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ba(Ma),Fe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Le(t),null;case 31:if(t.memoizedState!==null){if(Ro(t),t.alternate===null)throw Error(i(340));pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ro(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Vo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Fe(),null;case 10:return ba(t.type),null;case 22:case 23:return Ro(t),jo(),e!==null&&ke(Ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ba(Ma),null;case 25:return null;default:return null}}function Sl(e,t){switch(ra(t),t.tag){case 3:ba(Ma),Fe();break;case 26:case 27:case 5:Le(t);break;case 4:Fe();break;case 31:t.memoizedState!==null&&Ro(t);break;case 13:Ro(t);break;case 19:Vo(t);break;case 10:ba(t.type);break;case 22:case 23:Ro(t),jo(),e!==null&&ke(Ka);break;case 24:ba(Ma)}}function U(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Cl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function wl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Eo(t,n)}catch(t){Z(e,e.return,t)}}}function Tl(e,t,n){n.props=wc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function El(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=yi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Dl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Ol(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function kl(e){for(var t=e.return;t!==null&&(Ml(t)&&em(e.stateNode,t.stateNode),!jl(t));)t=t.return}function Al(e){for(var t=e.return;t!==null&&(Ml(t)&&tm(e.stateNode,t.stateNode),!jl(t));)t=t.return}function jl(e){return e.tag===5||e.tag===3||e.tag===27}function Ml(e){return e&&e.tag===7&&e.stateNode!==null}function Nl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Pl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Mt]=t}catch(t){Z(e,e.return,t)}}function Fl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Il(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Fl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tn)),Ol(e,r),M=!0;else if(i!==4&&(i===27&&(Ol(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Ll(e,t,n,r),e=e.sibling;e!==null;)Ll(e,t,n,r),e=e.sibling}function Rl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Ol(e,r),M=!0;else if(i!==4&&(i===27&&(Ol(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Rl(e,t,n,r),e=e.sibling;e!==null;)Rl(e,t,n,r),e=e.sibling}function zl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[jt]=e,t[Mt]=n}catch(t){Z(e,e.return,t)}}var Bl=!1,Vl=null;function Hl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Bl=!0)}var Ul=null;function Wl(){var e=Ul;return Ul=null,e}var Gl=0;function Kl(e,t,n,r,i){return Gl=0,ql(e.child,t,n,r,i)}function ql(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Bl=!0,Tp(o,Gl===0?t:t+`_`+Gl,n),Gl++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||ql(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Jl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Jl(e.child,t),e=e.sibling}function Yl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Yl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=xi(t.default,t.share),t!==`none`&&(Kl(e,n,t,null,!1)||Jl(e.child,!1))}e=e.sibling}}function Xl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=yi(r,n),a=xi(r.default,n.paired?r.share:r.enter);a===`none`?Yl(e):Kl(e,i,a,null,!1)?(Yl(e),n.paired||t||Nd(e,r.onEnter)):Jl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Xl(e,t),e=e.sibling;else Yl(e)}function Zl(e){if(Vl!==null&&Vl.size!==0){var t=Vl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=xi(n.default,n.share);if(a!==`none`&&(Kl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Jl(e.child,!1)),t.delete(r),t.size===0)break}}}Zl(e)}e=e.sibling}}}function Ql(e){if(e.tag===30){var t=e.memoizedProps,n=yi(t,e.stateNode),r=Vl===null?void 0:Vl.get(n),i=xi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Kl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Vl.delete(n),Nd(e,t.onShare)):Jl(e.child,!1)),Vl!==null&&Zl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ql(e),e=e.sibling;else Vl!==null&&Zl(e)}function $l(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=yi(t,e.stateNode);t=xi(t.default,t.update),e.flags&=-5,t!==`none`&&Kl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&$l(e);e=e.sibling}}function eu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Jl(e.child,!1))}eu(e)}e=e.sibling}}function tu(e){if(e.tag===30)e.stateNode.paired=null,Jl(e.child,!1),eu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)tu(e),e=e.sibling;else eu(e)}function nu(e){for(e=e.child;e!==null;)e.tag===30?Jl(e.child,!1):e.subtreeFlags&33554432&&nu(e),e=e.sibling}function ru(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Gl<a.length){var l=a[Gl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Gl===0?n:n+`_`+Gl,i),s&&e.flags&4||(Ul===null&&(Ul=[]),Ul.push(c,Gl===0?r:r+`_`+Gl,t.memoizedProps)),Gl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:ru(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function iu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=yi(n,r),a=xi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Gl=0,i=ru(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&iu(e,t);e=e.sibling}}var au=!1,W=!1,ou=!1,su=!1,cu=typeof WeakSet==`function`?WeakSet:Set,G=null,lu=!1,uu=!1,du=!1,fu=!1;function pu(e,t,n){if(e=e.containerInfo,sp=gh,e=Yr(e),Xr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,G=t,t=n?9270:1024;G!==null;){if(e=G,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Ql(r[a]);if(e.alternate===null&&e.flags&2)n&&Hl(e),mu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Ql(r),mu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Hl(e),mu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,G=r):(n&&$l(e),mu(n))}}Vl=null}function mu(e){for(;G!==null;){var t=G,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=wc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=yi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=xi(a.default,a.update),a!==`none`&&Kl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,G=r;break}G=t.return}}function hu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Fu(e,n),r&4&&U(5,n);break;case 1:if(Fu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=wc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&wl(n),r&512&&El(n,n.return);break;case 3:if(Fu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Eo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&zl(n);case 26:case 5:Fu(e,n),t===null&&r&4&&Nl(n),r&512&&El(n,n.return);break;case 12:Fu(e,n);break;case 31:Fu(e,n),r&4&&wu(e,n);break;case 13:Fu(e,n),r&4&&Tu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||au,!r){var a=t!==null&&t.memoizedState!==null||W;t=au,i=W,au=r,(W=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Lu(e,n,r)):Fu(e,n),au=t,W=i}break;case 30:Fu(e,n),r&512&&El(n,n.return);break;case 7:r&512&&El(n,n.return);default:Fu(e,n)}}function gu(e,t){for(e=e.child;e!==null;)_u(e,t),e=e.sibling}function _u(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}vu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,M=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&gu(e,t);break;default:gu(e,t)}}function vu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:_u(n,r);break a;case 22:n.memoizedState===null&&vu(n,r);break a;default:vu(n,r)}}e=e.sibling}}function yu(e){var t=e.alternate;t!==null&&(e.alternate=null,yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Bt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var bu=null,xu=!1;function Su(e,t,n){for(n=n.child;n!==null;)Cu(e,t,n),n=n.sibling}function Cu(e,t,n){if(at&&typeof at.onCommitFiberUnmount==`function`)try{at.onCommitFiberUnmount(it,n)}catch{}switch(n.tag){case 26:W||Dl(n,t),Su(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!W&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:W||Dl(n,t),Al(n);var r=bu,i=xu;Sp(n.type)&&(bu=n.stateNode,xu=!1),Su(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),bu=r,xu=i;break;case 5:W||Dl(n,t),Al(n);case 6:if(n.tag===6&&Al(n),r=bu,i=xu,bu=null,Su(e,t,n),bu=r,xu=i,bu!==null){if(xu)try{(bu.nodeType===9?bu.body:bu.nodeName===`HTML`?bu.ownerDocument.body:bu).removeChild(n.stateNode),M=!0}catch(e){Z(n,t,e)}else try{bu.removeChild(n.stateNode),M=!0}catch(e){Z(n,t,e)}}break;case 18:bu!==null&&(xu?(e=bu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(bu,n.stateNode));break;case 4:r=bu,i=xu,bu=n.stateNode.containerInfo,xu=!0,Su(e,t,n),bu=r,xu=i;break;case 0:case 11:case 14:case 15:Cl(2,n,t),W||Cl(4,n,t),Su(e,t,n);break;case 1:W||(Dl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Tl(n,t,r)),Su(e,t,n);break;case 21:Su(e,t,n);break;case 22:W=(r=W)||n.memoizedState!==null,Su(e,t,n),W=r;break;case 30:Dl(n,t),Su(e,t,n);break;case 7:W||Dl(n,t),Su(e,t,n);break;default:Su(e,t,n)}}function wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Tu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Eu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new cu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new cu),t;default:throw Error(i(435,e.tag))}}function Du(e,t){var n=Eu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Ou(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){bu=l.stateNode,xu=!1;break a}break;case 5:bu=l.stateNode,xu=!1;break a;case 3:case 4:bu=l.stateNode.containerInfo,xu=!0;break a}l=l.return}if(bu===null)throw Error(i(160));Cu(s,c,o),bu=null,xu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Au(t,e,n),t=t.sibling}var ku=null;function Au(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Ou(t,e,n),ju(e),a&4&&(Cl(3,e,e.return),U(3,e),Cl(5,e,e.return));break;case 1:Ou(t,e,n),ju(e),a&512&&(W||r===null||Dl(r,r.return)),a&64&&au&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=ku,Ou(t,e,n),ju(e),a&512&&(W||r===null||Dl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(au)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Rt]||r[jt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[jt]=e,Gt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[jt]=e,Gt(r),t=r}e.stateNode=t}}else au||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Pl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||W||t.parentNode.removeChild(t)):a.count--,n===null?au||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Ou(t,e,n),ju(e),a&512&&(W||r===null||Dl(r,r.return)),r!==null&&a&4&&Pl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=ou,ou=!1,Ou(t,e,n),ou=o,ju(e),a&512&&(W||r===null||Dl(r,r.return)),e.flags&32){t=e.stateNode;try{_n(t,``),M=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Pl(e,t,r===null?t:r.memoizedProps)),a&1024&&(su=!0);break;case 6:if(Ou(t,e,n),ju(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,M=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(M=!1,Wm=null,o=ku,ku=bm(t.containerInfo),Ou(t,e,n),ku=o,ju(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}su&&(su=!1,Mu(e)),M=!1;break;case 4:a=ou,ou=au,r=$t(),o=ku,ku=bm(e.stateNode.containerInfo),Ou(t,e,n),ju(e),ku=o,M&&uu&&(du=!0),M=r,ou=a;break;case 12:Ou(t,e,n),ju(e);break;case 31:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 13:Ou(t,e,n),ju(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=Xe()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=au,l=W,u=ou;au=c||o,ou=u||o,W=l||s,Ou(t,e,n),W=l,ou=u,au=c,ju(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||au||W||(t=s||W,n=au,r=W,au=o||au,W=t,Iu(e,2),au=n,W=r),!o&&ou||gu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Du(e,n))));break;case 19:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 30:a&512&&(W||r===null||Dl(r,r.return)),a=$t(),o=uu,s=(n&335544064)===n,c=e.memoizedProps,uu=s&&xi(c.default,c.update)!==`none`,Ou(t,e,n),ju(e),s&&r!==null&&M&&(e.flags|=4),uu=o,M=a;break;case 21:break;case 7:a&512&&(W||r===null||Dl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Ou(t,e,n),ju(e)}}function ju(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Fl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Ml(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(jl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Rl(e,Il(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(_n(l,``),n.flags&=-33),Rl(e,Il(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Ll(e,Il(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Nu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Pu(t,e),t=t.sibling;else iu(t,!1)}function Pu(e,t){var n=e.alternate;if(n===null)Xl(e,!1);else switch(e.tag){case 3:if(fu=lu=!1,Wl(),Nu(t,e),!lu&&!du){if(e=Ul,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),fu=!0}Ul=null;break;case 5:Nu(t,e);break;case 4:r=lu,lu=!1,Nu(t,e),lu&&(du=!0),lu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Nu(t,e):Xl(e,!1));break;case 30:r=lu,i=Wl(),lu=!1,Nu(t,e),lu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=yi(a,o),o=yi(n.memoizedProps,o);var s=xi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Gl=0,t=ru(e,n,t,o,s,a,!0),Gl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Ul=i):i!==null&&(i.push.apply(i,Ul),Ul=i),lu=e.flags&32?!0:r;break;default:Nu(t,e)}}function Fu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hu(e,t.alternate,t),t=t.sibling}function Iu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Cl(4,n,n.return),Iu(n,r);break;case 1:Dl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Tl(n,n.return,i),Iu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:Dl(n,n.return),n.tag!==5&&n.tag!==27||Al(n),Iu(n,r);break;case 6:Al(n);break;case 26:Dl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||W||i.parentNode.removeChild(i),Iu(n,r);break;case 22:n.memoizedState===null&&Iu(n,r);break;case 30:Dl(n,n.return),Iu(n,r);break;case 7:Dl(n,n.return);default:Iu(n,r)}e=e.sibling}}function Lu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Lu(i,a,n),U(4,a);break;case 1:if(Lu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)To(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&wl(a),El(a,a.return);break;case 27:n&2&&zl(a);case 5:a.tag!==5&&a.tag!==27||kl(a),Lu(i,a,n),s&&r===null&&o&4&&Nl(a),El(a,a.return);break;case 6:kl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||au||Km(bm(c.ownerDocument),a.type,c),Lu(i,a,n),s&&r===null&&o&4&&Nl(a),El(a,a.return);break;case 12:Lu(i,a,n);break;case 31:Lu(i,a,n),s&&o&4&&wu(i,a);break;case 13:Lu(i,a,n),s&&o&4&&Tu(i,a);break;case 22:a.memoizedState===null&&Lu(i,a,n),El(a,a.return);break;case 30:Lu(i,a,n),El(a,a.return);break;case 7:El(a,a.return);default:Lu(i,a,n)}t=t.sibling}}function Ru(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Pa(n))}function zu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pa(e))}function Bu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Vu(e,t,n,r),t=t.sibling;else i&&nu(t)}function Vu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&tu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Bu(e,t,n,r),a&2048&&U(9,t);break;case 1:Bu(e,t,n,r);break;case 3:Bu(e,t,n,r),i&&fu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Pa(a)));break;case 12:if(a&2048){Bu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Bu(e,t,n,r);break;case 31:Bu(e,t,n,r);break;case 13:Bu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&tu(t),o._visibility&2?Bu(e,t,n,r):(o._visibility|=2,Hu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&tu(s),o._visibility&2?Bu(e,t,n,r):Uu(e,t)),a&2048&&Ru(s,t);break;case 24:Bu(e,t,n,r),a&2048&&zu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Jl(a.child,!0),Jl(t.child,!0))),Bu(e,t,n,r);break;default:Bu(e,t,n,r)}}function Hu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Hu(a,o,s,c,i),U(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Hu(a,o,s,c,i)):u._visibility&2?Hu(a,o,s,c,i):Uu(a,o),i&&l&2048&&Ru(o.alternate,o);break;case 24:Hu(a,o,s,c,i),i&&l&2048&&zu(o.alternate,o);break;default:Hu(a,o,s,c,i)}t=t.sibling}}function Uu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Uu(n,r),i&2048&&Ru(r.alternate,r);break;case 24:Uu(n,r),i&2048&&zu(r.alternate,r);break;default:Uu(n,r)}t=t.sibling}}var Wu=8192;function Gu(e,t,n){if(e.subtreeFlags&Wu)for(e=e.child;e!==null;)Ku(e,t,n),e=e.sibling}function Ku(e,t,n){switch(e.tag){case 26:Gu(e,t,n),e.flags&Wu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ku,e.memoizedState,e.memoizedProps));break;case 5:Gu(e,t,n),e.flags&Wu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ku;ku=bm(e.stateNode.containerInfo),Gu(e,t,n),ku=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Wu,Wu=16777216,Gu(e,t,n),Wu=r):Gu(e,t,n));break;case 30:if((e.flags&Wu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Vl===null&&(Vl=new Map),Vl.set(r,i)}Gu(e,t,n);break;default:Gu(e,t,n)}}function qu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ju(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];G=r,Zu(r,e)}qu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yu(e),e=e.sibling}function Yu(e){switch(e.tag){case 0:case 11:case 15:Ju(e),e.flags&2048&&Cl(9,e,e.return);break;case 3:Ju(e);break;case 12:Ju(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xu(e)):Ju(e);break;default:Ju(e)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];G=r,Zu(r,e)}qu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Cl(8,t,t.return),Xu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xu(t));break;default:Xu(t)}e=e.sibling}}function Zu(e,t){for(;G!==null;){var n=G;switch(n.tag){case 0:case 11:case 15:Cl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Pa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,G=r;else a:for(n=e;G!==null;){r=G;var i=r.sibling,a=r.return;if(yu(r),r===n){G=null;break a}if(i!==null){i.return=a,G=i;break a}G=a}}}var Qu={getCacheForType:function(e){var t=Ea(Ma),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ea(Ma).controller.signal}},$u=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,vd=null,yd=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return K&2&&Y!==0?Y&-Y:E.T===null?Ot():Pf()}function Md(){if(ld===0){if(!(Y&536870912)||z){var e=ft;ft<<=1,!(ft&3932160)&&(ft=262144),ld=e}else ld=536870912}return e=Mo.current,e!==null&&(e.flags|=32),ld}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(yi(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,Y,ld,!1)),xt(e,n),K&2&&e===q||(e===q&&(!(K&2)&&(sd|=n),ad===4&&Rd(e,Y,ld,!1)),Ef(e))}function Fd(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||gt(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n))a=qd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-Xe(),10<a)){if(Rd(r,t,ld,!td),ht(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Id(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Tn},Vl=null,Ku(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-Xe():(a&4194048)===a?hd-Xe():0,m=eh(d,m),m!==null)?(Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l)):nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ur(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=_t(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-st(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Ct(e,n,t)}function zd(){return K&6?!0:(Df(0,!1),!1)}function Bd(){if(J!==null){if(X===0)var e=J.return;else e=J,va=_a=null,os(e),oo=null,so=0,e=J;for(;e!==null;)Sl(e.alternate,e),e=e.return;J=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),q=e,J=n=Ii(e.current,null),Y=t,X=0,ed=null,td=!1,nd=gt(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=_t(e,t),Ei(),n}function Hd(e,t){B=null,E.H=gc,t===Xa||t===Qa?(t=io(),X=3):t===Za?(t=io(),X=4):X=t===Pc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,J===null&&(ad=1,Oc(e,Wi(t,e.current)))}function Ud(){var e=Mo.current;return e===null?!0:(Y&4194048)===Y?No===null:(Y&62914560)===Y||Y&536870912?e===No:!1}function Wd(){var e=E.H;return E.H=gc,e===null?gc:e}function Gd(){var e=E.A;return E.A=Qu,e}function Kd(){ad=4,td||(Y&4194048)!==Y&&Mo.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||q===null||Rd(q,Y,ld,!1)}function qd(e,t,n){var r=K;K|=2;var i=Wd(),a=Gd();(q!==e||Y!==t)&&(_d=null,Vd(e,t)),t=!1;var o=ad;a:do try{if(X!==0&&J!==null){var s=J,c=ed;switch(X){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:Mo.current===null&&(t=!0);var l=X;if(X=0,ed=null,$d(e,s,c,l),n&&nd){o=0;break a}break;default:l=X,X=0,ed=null,$d(e,s,c,l)}}Jd(),o=ad;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,va=_a=null,K=r,E.H=i,E.A=a,J===null&&(q=null,Y=0,Ei()),o}function Jd(){for(;J!==null;)Zd(J)}function Yd(e,t){var n=K;K|=2;var r=Wd(),a=Gd();q!==e||Y!==t?(_d=null,gd=Xe()+500,Vd(e,t)):nd=gt(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=ed;b:switch(X){case 1:X=0,ed=null,$d(e,t,o,1);break;case 2:case 9:if(eo(o)){X=0,ed=null,Qd(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),Ef(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:eo(o)?(X=0,ed=null,Qd(t)):(X=0,ed=null,$d(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Ym(s):c.stateNode.complete){X=0,ed=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,ef(u))}break b}}X=0,ed=null,$d(e,t,o,5);break;case 6:X=0,ed=null,$d(e,t,o,6);break;case 8:Bd(),ad=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return va=_a=null,E.H=r,E.A=a,K=n,J===null?(q=null,Y=0,Ei(),ad):0}function Xd(){for(;J!==null&&!Je();)Zd(J)}function Zd(e){var t=ml(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=Jc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:os(t);var r=t;r===aa&&(z?(da(r),r.tag===5&&r.stateNode!=null&&(R=r.stateNode)):(da(r),z=!0));default:Sl(n,t),t=J=Li(t,id),t=ml(n,t,id)}e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function $d(e,t,n,r){va=_a=null,os(t),oo=null,so=0;var i=t.return;try{if(Nc(e,i,t,n,Y)){ad=1,Oc(e,Wi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;ad=1,Oc(e,Wi(n,e.current)),J=null;return}t.flags&32768?(z||r===1?e=!0:nd||Y&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=Mo.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,td);return}e=t.return;var n=bl(t.alternate,t,id);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ad===0&&(ad=5)}function tf(e,t){do{var n=xl(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);ad=6,J=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(yd!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===q&&(J=q=null,Y=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Ti,St(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=La(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(et,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Bl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,i=D.p,D.p=2,a=K,K|=4;try{pu(e,t,n)}finally{K=a,D.p=i,E.T=r}}yd=1,Bl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(yd!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){yd===3&&(yd=0,Pu(xd,bd),yd=4)}function sf(){if(yd===1){yd=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=E.T,E.T=null;var i=D.p;D.p=2;var a=K;K|=4;try{uu=du=!1,Au(t,e,n),n=cp;var o=Yr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Jr(s.ownerDocument.documentElement,s)){if(c!==null&&Xr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=qr(s,h),v=qr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{K=a,D.p=i,E.T=r}}e.current=t,yd=2}}function cf(){if(yd===2){yd=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=K;K|=4;try{hu(e,t.alternate,t)}finally{K=i,D.p=r,E.T=n}}yd=3}}function lf(){if(yd===4||yd===3){yd=0;var e=Ed;Ed=null,Ye();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?yd=5:(yd=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(vd=null),Dt(r),n=n.stateNode,at&&typeof at.onCommitFiberRoot==`function`)try{at.onCommitFiberRoot(it,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=E.T,a=D.p,D.p=2,E.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{E.T=n,D.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pa(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(yd!==5)return!1;var e=bd,t=Cd;Cd=0;var n=Dt(Sd),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=wd,wd=null;var o=bd,s=Sd;if(yd=0,xd=bd=null,Sd=0,K&6)throw Error(i(331));var c=K;if(K|=4,Yu(o.current),Vu(o,o.current,s,n),K=c,Df(0,!1),at&&typeof at.onPostCommitFiberRoot==`function`)try{at.onPostCommitFiberRoot(it,o)}catch{}return!0}finally{D.p=a,E.T=r,uf(e,t)}}function pf(e,t,n){t=Wi(n,t),t=Ac(e.stateNode,t,2),e=yo(e,t,2),e!==null&&(xt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vd===null||!vd.has(r))){e=Wi(n,e),n=jc(2),r=yo(t,n,2),r!==null&&(Mc(n,r,t,e),xt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $u;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(ad===4||ad===3&&(Y&62914560)===Y&&300>Xe()-md?K&2?cd|=n:Vd(e,0):cd|=n,ud===Y&&(ud=0)),Ef(e)}function gf(e,t){t===0&&(t=yt()),e=ki(e,t),e!==null&&(xt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ke(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-st(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=Y,a=ht(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||gt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=Xe(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}yd!==0&&yd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-st(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=vt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=ht(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&qe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||gt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&qe(r),Dt(n)){case 2:case 8:n=$e;break;case 32:n=et;break;case 268435456:n=tt;break;default:n=et}return r=jf.bind(null,e),n=Ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&qe(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(yd!==0&&yd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=Y;return r=ht(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,Xe()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){K&6?Ke(Qe,Of):kf()})}function Pf(){if(Tf===0){var e=Ba;e===0&&(e=dt,dt<<=1,!(dt&261888)&&(dt=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:wn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[Mt]||null).action),o=r.submitter;o&&(t=(t=o[Mt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Wn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);nc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),nc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<gi.length;Lf++){var Rf=gi[Lf];_i(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}_i(ci,`onAnimationEnd`),_i(li,`onAnimationIteration`),_i(ui,`onAnimationStart`),_i(`dblclick`,`onDoubleClick`),_i(`focusin`,`onFocus`),_i(`focusout`,`onBlur`),_i(di,`onTransitionRun`),_i(fi,`onTransitionStart`),_i(pi,`onTransitionCancel`),_i(mi,`onTransitionEnd`),Yt(`onMouseEnter`,[`mouseout`,`mouseover`]),Yt(`onMouseLeave`,[`mouseout`,`mouseover`]),Yt(`onPointerEnter`,[`pointerout`,`pointerover`]),Yt(`onPointerLeave`,[`pointerout`,`pointerover`]),A(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),A(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),A(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),A(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),A(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),A(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Si(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Si(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Pt];n===void 0&&(n=t[Pt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,qt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Nn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Vt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}An(function(){var r=a,i=N(n),s=[];a:{var c=hi.get(e);if(c!==void 0){var l=Wn,u=e;switch(e){case`keypress`:if(zn(n)===0)break a;case`keydown`:case`keyup`:l=sr;break;case`focusin`:u=`focus`,l=F;break;case`focusout`:u=`blur`,l=F;break;case`beforeblur`:case`afterblur`:l=F;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Zn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Qn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=ur;break;case ci:case li:case ui:l=$n;break;case mi:l=dr;break;case`scroll`:case`scrollend`:l=Kn;break;case`wheel`:l=fr;break;case`copy`:case`cut`:case`paste`:l=er;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=cr;break;case`submit`:l=lr;break;case`toggle`:case`beforetoggle`:l=pr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=jn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==En&&(u=n.relatedTarget||n.fromElement)&&(Vt(u)||u[Nt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Vt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Zn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=cr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Ut(c),h=l==null?u:Ut(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Vt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?ne(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?Ut(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=jr;else if(Er(c)){if(Mr)_=Vr;else{_=zr;var v=Rr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&xn(r.elementType)&&(_=jr):_=Br;if(_&&=_(e,r)){Dr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Ut(r):window,e){case`focusin`:(Er(v)||v.contentEditable===`true`)&&(Qr=v,$r=r,ei=null);break;case`focusout`:ei=$r=Qr=null;break;case`mousedown`:ti=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ti=!1,ni(s,n,i);break;case`selectionchange`:if(Zr)break;case`keydown`:case`keyup`:ni(s,n,i)}var y;if(hr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else Sr?br(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(_r&&n.locale!==`ko`&&(Sr||b!==`onCompositionStart`?b===`onCompositionEnd`&&Sr&&(y=Rn()):(Fn=i,In=`value`in Fn?Fn.value:Fn.textContent,Sr=!0)),v=Jf(r,b),0<v.length&&(b=new tr(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=xr(n),y!==null&&(b.data=y)))),(y=I?Cr(e,n):wr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new tr(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=jn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=jn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=jn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=jn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||_n(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&_n(e,``+r);else return;break;case`className`:tn(e,`class`,r);break;case`tabIndex`:tn(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:tn(e,n,r);break;case`style`:bn(e,r,o);return;case`data`:if(t!==`object`){tn(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=wn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=wn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Tn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=wn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),en(e,`popover`,r);break;case`xlinkActuate`:nn(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:nn(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:nn(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:nn(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:nn(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:nn(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:nn(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:nn(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:nn(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:en(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=Sn.get(n)||n,en(e,n,r);else return}M=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:bn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)_n(e,r);else if(typeof r==`number`||typeof r==`bigint`)_n(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=Tn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Mt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}M=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):en(e,n,r)}return}M=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}fn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&mn(e,!!r,n,!0):mn(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}gn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(xn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(M=!0),o=m;break;case`name`:m!==f&&(M=!0),a=m;break;case`checked`:m!==f&&(M=!0),u=m;break;case`defaultChecked`:m!==f&&(M=!0),d=m;break;case`value`:m!==f&&(M=!0),s=m;break;case`defaultValue`:m!==f&&(M=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}dn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(M=!0),p=o;break;case`defaultValue`:o!==l&&(M=!0),c=o;break;case`multiple`:o!==l&&(M=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?mn(e,!!n,n?[]:``,!1):mn(e,!!n,t,!0)):mn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(M=!0),p=a;break;case`defaultValue`:a!==o&&(M=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}hn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(M=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(xn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[jt]=r,n[Mt]=t,np(n,e,t),Gt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Rt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:w({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Vt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ne(n,a,C),t===null?t=!1:(h(t,!0,ee,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=ne(r,a,C),t===null?t=!1:(h(t,!0,te,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Bt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Rt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===Tn&&(e.onclick=null),Bt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Bt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=D.d;D.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Ht(e);t!==null&&t.tag===5&&t.type===`form`?ic(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=un(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Gt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+un(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+un(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+un(n.imageSizes)+`"]`)):i+=`[href="`+un(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=w({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[zt]=!0,o.onload=o.onerror=function(){Kt(o)}),Gt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+un(r)+`"][href="`+un(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=w({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Gt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Wt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=w({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Gt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Wt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=w({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Gt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Wt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=w({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Gt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=Me.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Wt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Wt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Wt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+un(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[zt]){r.loading=1;return}}else t=e.createElement(`link`),t[zt]=!0,t.onload=t.onerror=Kt.bind(null,t),np(t,`link`,n),Gt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+un(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+un(n.href)+`"]`);if(r)return t.instance=r,Gt(r),r;var a=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Gt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Gt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Gt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Gt(a),a):(r=n,(a=vm.get(o))&&(r=w({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Gt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Rt]||a[jt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Gt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Gt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:le,Provider:null,Consumer:null,_currentValue:Te,_currentValue2:Te,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Pi(3,null,null,t),e.current=a,a.stateNode=e,t=Na(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},go(a),e}function uh(e){return e?(e=Mi,e):Mi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=vo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=yo(e,r,t),n!==null&&(Pd(n,e,t),bo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=ki(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=Et(t);var n=ki(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,yh(e,t,n,r)}finally{D.p=a,E.T=i}}function vh(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,yh(e,t,n,r)}finally{D.p=a,E.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Ht(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=mt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-st(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(K&6)&&(gd=Xe()+500,Df(0,!1))}}break;case 31:case 13:s=ki(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=N(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Vt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ze()){case Qe:return 2;case $e:return 8;case et:case k:return 32;case tt:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ht(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Vt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,kt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,kt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);En=r,n.target.dispatchEvent(r),En=null}else return t=Ht(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Ht(n);a!==null&&(e.splice(t,3),t-=3,nc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Mt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Mt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Nt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ot();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{it=Jh.inject(qh),at=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Tc,s=Ec,c=Dc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Nt]=t.current,Wf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=e=>e.replace(/[-_ ]+(\w)/g,(e,t)=>t.toUpperCase()).replace(/^./,e=>e.toLowerCase());function b(e,t){return`__ciq-font-${e}-${t.weight}-${t.style}`}function x(e,t){return`
    @font-face {
      font-family: '${e}';
      font-style: ${t.style};
      font-weight: ${t.weight};
      src: url('${t.file}') format('woff2');
      font-display: swap;
    }
  `}function S(e,t){return{href:t.file,type:`font/woff2`,as:`font`,crossOrigin:`anonymous`}}function ee(e,t){let{id:n}=t,r=n??b(e,t);if(document.getElementById(r))return;let i=document.createElement(`style`);i.id=r,i.textContent=x(e,t),document.head.appendChild(i)}var te=(e,t)=>t?e.filter(e=>{let n=!t.weights||t.weights.includes(e.weight),r=!t.styles||t.styles.includes(e.style);return n&&r}):e;function C(e){let t=Object.fromEntries(e.variants.map(t=>{let{weight:n,style:r}=t;return[y([e.name,n,r===`normal`?``:r].filter(Boolean).join(`-`)),{css:()=>x(e.name,t),preload:()=>[S(e.name,t)],inject:()=>ee(e.name,t)}]})),n={[y(e.name)]:{css:t=>te(e.variants,t).map(t=>x(e.name,t)).join(`
`),preload:t=>te(e.variants,t).map(t=>S(e.name,t)),inject:t=>te(e.variants,t).forEach(t=>ee(e.name,t))}};return{...t,...n}}var ne=`/assets/CommitMono-Regular.woff2`,w=`/assets/CommitMono-Italic.woff2`,re=`/assets/CommitMono-Bold.woff2`,ie=`/assets/CommitMono-BoldItalic.woff2`,ae=`/assets/Inter-Thin.woff2`,T=`/assets/Inter-ThinItalic.woff2`,oe=`/assets/Inter-ExtraLight.woff2`,se=`/assets/Inter-ExtraLightItalic.woff2`,ce=`/assets/Inter-Light.woff2`,le=`/assets/Inter-LightItalic.woff2`,ue=`/assets/Inter-Regular.woff2`,de=`/assets/Inter-Italic.woff2`,fe=`/assets/Inter-Medium.woff2`,pe=`/assets/Inter-MediumItalic.woff2`,me=`/assets/Inter-SemiBold.woff2`,he=`/assets/Inter-SemiBoldItalic.woff2`,ge=`/assets/Inter-Bold.woff2`,_e=`/assets/Inter-BoldItalic.woff2`,ve=`/assets/Inter-ExtraBold.woff2`,ye=`/assets/Inter-ExtraBoldItalic.woff2`,be=`/assets/Inter-Black.woff2`,xe=`/assets/Inter-BlackItalic.woff2`,Se=`/assets/Roboto-Thin.woff2`,Ce=`/assets/Roboto-ThinItalic.woff2`,we=`/assets/Roboto-Light.woff2`,E=`/assets/Roboto-LightItalic.woff2`,D=`/assets/Roboto-Regular.woff2`,Te=`/assets/Roboto-RegularItalic.woff2`,Ee=`/assets/Roboto-Medium.woff2`,De=`/assets/Roboto-MediumItalic.woff2`,Oe=`/assets/Roboto-Bold.woff2`,ke=`/assets/Roboto-BoldItalic.woff2`,O=`/assets/Roboto-Black.woff2`,Ae=`/assets/Roboto-BlackItalic.woff2`,je=`/assets/Satoshi-Light.woff2`,Me=`/assets/Satoshi-LightItalic.woff2`,Ne=`/assets/Satoshi-Regular.woff2`,Pe=`/assets/Satoshi-Italic.woff2`,Fe=`/assets/Satoshi-Medium.woff2`,Ie=`/assets/Satoshi-MediumItalic.woff2`,Le=`/assets/Satoshi-Bold.woff2`,Re=`/assets/Satoshi-BoldItalic.woff2`,ze=`/assets/Satoshi-Black.woff2`,Be=`/assets/Satoshi-BlackItalic.woff2`,Ve={name:`CommitMono`,variants:[{weight:400,style:`normal`,file:ne},{weight:400,style:`italic`,file:w},{weight:700,style:`normal`,file:re},{weight:700,style:`italic`,file:ie}]},He={name:`Inter`,variants:[{weight:100,style:`normal`,file:ae},{weight:100,style:`italic`,file:T},{weight:200,style:`normal`,file:oe},{weight:200,style:`italic`,file:se},{weight:300,style:`normal`,file:ce},{weight:300,style:`italic`,file:le},{weight:400,style:`normal`,file:ue},{weight:400,style:`italic`,file:de},{weight:500,style:`normal`,file:fe},{weight:500,style:`italic`,file:pe},{weight:600,style:`normal`,file:me},{weight:600,style:`italic`,file:he},{weight:700,style:`normal`,file:ge},{weight:700,style:`italic`,file:_e},{weight:800,style:`normal`,file:ve},{weight:800,style:`italic`,file:ye},{weight:900,style:`normal`,file:be},{weight:900,style:`italic`,file:xe}]},Ue={name:`Roboto`,variants:[{weight:100,style:`normal`,file:Se},{weight:100,style:`italic`,file:Ce},{weight:300,style:`normal`,file:we},{weight:300,style:`italic`,file:E},{weight:400,style:`normal`,file:D},{weight:400,style:`italic`,file:Te},{weight:500,style:`normal`,file:Ee},{weight:500,style:`italic`,file:De},{weight:700,style:`normal`,file:Oe},{weight:700,style:`italic`,file:ke},{weight:900,style:`normal`,file:O},{weight:900,style:`italic`,file:Ae}]},We={name:`Satoshi`,variants:[{weight:300,style:`normal`,file:je},{weight:300,style:`italic`,file:Me},{weight:400,style:`normal`,file:Ne},{weight:400,style:`italic`,file:Pe},{weight:500,style:`normal`,file:Fe},{weight:500,style:`italic`,file:Ie},{weight:700,style:`normal`,file:Le},{weight:700,style:`italic`,file:Re},{weight:900,style:`normal`,file:ze},{weight:900,style:`italic`,file:Be}]},Ge=C(Ve),Ke=C(He),qe=C(Ue),Je=C(We);Ge.commitMono,Ge.commitMono400,Ge.commitMono400Italic,Ge.commitMono700,Ge.commitMono700Italic;var Ye=Ke.inter;Ke.inter100,Ke.inter100Italic,Ke.inter200,Ke.inter200Italic,Ke.inter300,Ke.inter300Italic,Ke.inter400,Ke.inter400Italic,Ke.inter500,Ke.inter500Italic,Ke.inter600,Ke.inter600Italic,Ke.inter700,Ke.inter700Italic,Ke.inter800,Ke.inter800Italic,Ke.inter900,Ke.inter900Italic,qe.roboto,qe.roboto100,qe.roboto100Italic,qe.roboto300,qe.roboto300Italic,qe.roboto400,qe.roboto400Italic,qe.roboto500,qe.roboto500Italic,qe.roboto700,qe.roboto700Italic,qe.roboto900,qe.roboto900Italic;var Xe=Je.satoshi;Je.satoshi300,Je.satoshi300Italic,Je.satoshi400,Je.satoshi400Italic,Je.satoshi500,Je.satoshi500Italic,Je.satoshi700,Je.satoshi700Italic,Je.satoshi900,Je.satoshi900Italic;var Ze=new Set([`children`,`localName`,`ref`,`style`,`className`]),Qe=new WeakMap,$e=(e,t,n,r,i)=>{let a=i?.[t];a===void 0?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==r&&((e,t,n)=>{let r=Qe.get(e);r===void 0&&Qe.set(e,r=new Map);let i=r.get(t);n===void 0?i!==void 0&&(r.delete(t),e.removeEventListener(t,i)):i===void 0?(r.set(t,i={handleEvent:n}),e.addEventListener(t,i)):i.handleEvent=n})(e,a,n)},et=({react:e,tagName:t,elementClass:n,events:r,displayName:i})=>{let a=new Set(Object.keys(r??{})),o=e.forwardRef(((i,o)=>{let s=e.useRef(new Map),c=e.useRef(null),l={},u={};for(let[e,t]of Object.entries(i))Ze.has(e)?l[e===`className`?`class`:e]=t:a.has(e)||e in n.prototype?u[e]=t:l[e]=t;return e.useLayoutEffect((()=>{if(c.current===null)return;let e=new Map;for(let t in u)$e(c.current,t,i[t],s.current.get(t),r),s.current.delete(t),e.set(t,i[t]);for(let[e,t]of s.current)$e(c.current,e,void 0,t,r);s.current=e})),e.useLayoutEffect((()=>{c.current?.removeAttribute(`defer-hydration`)}),[]),l.suppressHydrationWarning=!0,e.createElement(t,{...l,ref:e.useCallback((e=>{c.current=e,typeof o==`function`?o(e):o!==null&&(o.current=e)}),[o])})}));return o.displayName=i??n.name,o};function k(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function tt(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)}function nt(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n}var rt=globalThis,it=rt.ShadowRoot&&(rt.ShadyCSS===void 0||rt.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,at=Symbol(),ot=new WeakMap,st=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(it&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ot.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ot.set(t,e))}return e}toString(){return this.cssText}},ct=e=>new st(typeof e==`string`?e:e+``,void 0,at),lt=(e,...t)=>new st(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,at),ut=(e,t)=>{if(it)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=rt.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},dt=it?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return ct(t)})(e):e,{is:ft,defineProperty:pt,getOwnPropertyDescriptor:mt,getOwnPropertyNames:ht,getOwnPropertySymbols:gt,getPrototypeOf:_t}=Object,vt=globalThis,yt=vt.trustedTypes,bt=yt?yt.emptyScript:``,xt=vt.reactiveElementPolyfillSupport,St=(e,t)=>e,Ct={toAttribute(e,t){switch(t){case Boolean:e=e?bt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},wt=(e,t)=>!ft(e,t),Tt={attribute:!0,type:String,converter:Ct,reflect:!1,useDefault:!1,hasChanged:wt};Symbol.metadata??=Symbol(`metadata`),vt.litPropertyMetadata??=new WeakMap;var Et=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Tt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&pt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=mt(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Tt}static _$Ei(){if(this.hasOwnProperty(St(`elementProperties`)))return;let e=_t(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(St(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(St(`properties`))){let e=this.properties,t=[...ht(e),...gt(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(dt(e))}else e!==void 0&&t.push(dt(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ut(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Ct:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Ct:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??wt)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Et.elementStyles=[],Et.shadowRootOptions={mode:`open`},Et[St(`elementProperties`)]=new Map,Et[St(`finalized`)]=new Map,xt?.({ReactiveElement:Et}),(vt.reactiveElementVersions??=[]).push(`2.1.2`);var Dt=globalThis,Ot=e=>e,kt=Dt.trustedTypes,At=kt?kt.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,jt=`$lit$`,Mt=`lit$${Math.random().toFixed(9).slice(2)}$`,Nt=`?`+Mt,Pt=`<${Nt}>`,Ft=document,It=()=>Ft.createComment(``),Lt=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Rt=Array.isArray,zt=e=>Rt(e)||typeof e?.[Symbol.iterator]==`function`,Bt=`[ 	
\f\r]`,Vt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,Ut=/>/g,Wt=RegExp(`>|${Bt}(?:([^\\s"'>=/]+)(${Bt}*=${Bt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Gt=/'/g,Kt=/"/g,qt=/^(?:script|style|textarea|title)$/i,Jt=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),A=Jt(1),Yt=Jt(2),Xt=Symbol.for(`lit-noChange`),j=Symbol.for(`lit-nothing`),Zt=new WeakMap,Qt=Ft.createTreeWalker(Ft,129);function M(e,t){if(!Rt(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return At===void 0?t:At.createHTML(t)}var $t=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Vt;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Vt?c[1]===`!--`?o=Ht:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Wt):(qt.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Wt):o=Ut:o===Wt?c[0]===`>`?(o=i??Vt,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Wt:c[3]===`"`?Kt:Gt):o===Kt||o===Gt?o=Wt:o===Ht||o===Ut?o=Vt:(o=Wt,i=void 0);let d=o===Wt&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Vt?n+Pt:l>=0?(r.push(s),n.slice(0,l)+jt+n.slice(l)+Mt+d):n+Mt+(l===-2?t:d)}return[M(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},en=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=$t(t,n);if(this.el=e.createElement(l,r),Qt.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Qt.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(jt)){let t=u[o++],n=i.getAttribute(e).split(Mt),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?on:r[1]===`?`?sn:r[1]===`@`?cn:an}),i.removeAttribute(e)}else e.startsWith(Mt)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(qt.test(i.tagName)){let e=i.textContent.split(Mt),t=e.length-1;if(t>0){i.textContent=kt?kt.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],It()),Qt.nextNode(),c.push({type:2,index:++a});i.append(e[t],It())}}}else if(i.nodeType===8){if(i.data===Nt)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Mt,e+1))!==-1;)c.push({type:7,index:a}),e+=Mt.length-1}}a++}}static createElement(e,t){let n=Ft.createElement(`template`);return n.innerHTML=e,n}};function tn(e,t,n=e,r){if(t===Xt)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Lt(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=tn(e,i._$AS(e,t.values),i,r)),t}var nn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ft).importNode(t,!0);Qt.currentNode=r;let i=Qt.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new rn(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ln(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Qt.nextNode(),a++)}return Qt.currentNode=Ft,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},rn=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=tn(this,e,t),Lt(e)?e===j||e==null||e===``?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==Xt&&this._(e):e._$litType$===void 0?e.nodeType===void 0?zt(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&Lt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ft.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=en.createElement(M(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new nn(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Zt.get(e.strings);return t===void 0&&Zt.set(e.strings,t=new en(e)),t}k(t){Rt(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(It()),this.O(It()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Ot(e).nextSibling;Ot(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},an=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=j}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=tn(this,e,t,0),a=!Lt(e)||e!==this._$AH&&e!==Xt,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=tn(this,r[n+o],t,o),s===Xt&&(s=this._$AH[o]),a||=!Lt(s)||s!==this._$AH[o],s===j?e=j:e!==j&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},on=class extends an{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}},sn=class extends an{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}},cn=class extends an{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=tn(this,e,t,0)??j)===Xt)return;let n=this._$AH,r=e===j&&n!==j||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==j&&(n===j||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ln=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){tn(this,e)}},un={M:jt,P:Mt,A:Nt,C:1,L:$t,R:nn,D:zt,V:tn,I:rn,H:an,N:sn,U:cn,B:on,F:ln},dn=Dt.litHtmlPolyfillSupport;dn?.(en,rn),(Dt.litHtmlVersions??=[]).push(`3.3.3`);var fn=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new rn(t.insertBefore(It(),e),e,void 0,n??{})}return i._$AI(e),i},pn=globalThis,mn=class extends Et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=fn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Xt}};mn._$litElement$=!0,mn.finalized=!0,pn.litElementHydrateSupport?.({LitElement:mn});var hn=pn.litElementPolyfillSupport;hn?.({LitElement:mn}),(pn.litElementVersions??=[]).push(`4.2.2`);var gn={attribute:!0,type:String,converter:Ct,reflect:!1,hasChanged:wt},_n=(e=gn,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function vn(e){return(t,n)=>typeof n==`object`?_n(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function yn(e){return vn({...e,state:!0,attribute:!1})}var bn=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function xn(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return bn(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return bn(n,r,{get(){return a(this)}})}}var Sn=new WeakMap,Cn={description:!0,type:!0,options:!0,default:!0,required:!0,copyRule:!0,experimental:!0,attribute:!0,reflect:!0},wn=new Set([`attribute`,`reflect`]),Tn={fromAttribute:e=>e!==null&&e!==`false`,toAttribute:e=>e?``:null};function En(e){return e===`boolean`?Boolean:e===`number`?Number:/\[\]$/.test(e)||e.startsWith(`Array`)?Array:e===`object`||e.startsWith(`Record<`)||e.startsWith(`{`)?Object:String}function N(e){return(t,n)=>{let r=Sn.get(t);r||(r={},Sn.set(t,r));let{type:i}=e,a={type:i},o={};for(let[t,n]of Object.entries(e))t!==`type`&&(t in Cn&&Object.assign(a,{[t]:n}),(!(t in Cn)||wn.has(t))&&(o[t]=n));let s=En(i),c=s!==Array&&s!==Object,l=s===Boolean?{converter:Tn}:{};a.attribute??=n.toLowerCase(),a.reflect=a.attribute!==!1&&(a.reflect??c),r[n]=a,vn({type:s,reflect:c,...l,...o})(t,n)}}function Dn(e){let t=[],n=e;for(;n&&n!==Object.prototype;)t.push(n),n=Object.getPrototypeOf(n);let r={};for(let e of t.reverse()){let t=Sn.get(e);t&&Object.assign(r,t)}return r}function P(e,t){return n=>{let r=n.meta;if(r){r.events||={};let n=t.description??(t.forwarded?`Forwarded native ${e} event.`:void 0);r.events[e]={...t,description:n}}}}var On=new Set([`checkbox`,`radio`]),kn=new Set([`text`,`search`,`url`,`tel`,`password`]),An=[`type`,`part`,`slot`],jn=e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement,Mn=e=>[e.localName,...An.map(t=>e.getAttribute(t)??``)].join(`|`),Nn=(e,t)=>[...e.querySelectorAll(`*`)].filter(e=>Mn(e)===t),Pn=(e,t)=>{let n=Mn(t);return{key:n,index:Nn(e,n).indexOf(t)}};function Fn(e){let t=[...e.options].filter(e=>e.defaultSelected);if(t.length||e.multiple)return t.map(e=>e.value);let n=[...e.options].find(e=>!e.disabled);return n?[n.value]:[]}function In(e){if(e instanceof HTMLTextAreaElement)return e.defaultValue;let t=document.createElement(`input`);return[...e.attributes].forEach(({name:e,value:n})=>t.setAttribute(e,n)),t.value}function Ln(e){if(e instanceof HTMLSelectElement){let t=[...e.selectedOptions].map(e=>e.value);return t.join(`
`)===Fn(e).join(`
`)?void 0:t}if(e instanceof HTMLInputElement&&On.has(e.type))return e.checked===e.defaultChecked?void 0:e.checked;if(!(e instanceof HTMLInputElement&&e.type===`file`))return e.value===In(e)?void 0:e.value}function Rn(e,t){e instanceof HTMLSelectElement?[...e.options].forEach(e=>{e.selected=t.includes(e.value)}):typeof t==`boolean`?e.checked=t:e.value=t}var zn=(e,t)=>!(e instanceof HTMLSelectElement)||t.length===0||[...e.options].some(e=>t.includes(e.value)),Bn=e=>e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement&&kn.has(e.type);function Vn(e){let t=new Map;return[...e.querySelectorAll(`*`)].map(e=>{let n=Mn(e),r=t.get(n)??0;return t.set(n,r+1),[e,{key:n,index:r}]})}function Hn(e,t){return Vn(e).flatMap(([e,n])=>{let r=[...t,n];return[[e,r],...e.shadowRoot?Hn(e.shadowRoot,r):[]]})}var Un=e=>e.flatMap(([e,t])=>{let n=jn(e)?Ln(e):void 0;return n===void 0?[]:[{location:t,value:n}]}),Wn=e=>e.flatMap(([e,t])=>e.scrollTop||e.scrollLeft?[{location:t,top:e.scrollTop,left:e.scrollLeft}]:[]);function Gn(e,t=[]){let n=e.activeElement;if(!n)return;let r=[...t,Pn(e,n)];return n.shadowRoot?.activeElement?Gn(n.shadowRoot,r):{location:r,selection:Bn(n)?[n.selectionStart??0,n.selectionEnd??0]:null}}function Kn(e){let t=Hn(e,[]);return{edits:Un(t),scrolls:Wn(t),focus:Gn(e)}}async function qn(e,[t,...n]){let r=Nn(e,t.key)[t.index];return!r||!n.length?r:(`updateComplete`in r&&await r.updateComplete,r.shadowRoot?qn(r.shadowRoot,n):void 0)}async function Jn(e,{edits:t,scrolls:n,focus:r}){let i=(await Promise.all(t.map(async({location:t,value:n})=>({control:await qn(e,t),value:n})))).flatMap(({control:e,value:t})=>!e||!jn(e)||!zn(e,t)?[]:(Rn(e,t),[e]));(await Promise.all(n.map(async({location:t,top:n,left:r})=>({element:await qn(e,t),top:n,left:r})))).forEach(({element:e,top:t,left:n})=>e?.scrollTo({top:t,left:n,behavior:`instant`}));let a=r&&await qn(e,r.location);return r&&a instanceof HTMLElement&&(a.focus({preventScroll:!0}),r.selection&&Bn(a)&&a.setSelectionRange(...r.selection)),i}function Yn(e){e.forEach(e=>{e.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),e.dispatchEvent(new Event(`change`,{bubbles:!0}))})}var Xn=Symbol.for(`tagName`),Zn=(e,t)=>{e[Xn]=t},Qn=class extends mn{createRenderRoot(){let e=this.shadowRoot;return e?(this.serverRenderedNodes=[...e.childNodes],ut(e,this.constructor.elementStyles),e):super.createRenderRoot()}update(e){let t=this.serverRenderedNodes,n=this.renderRoot,r=t&&Kn(n);super.update(e),t&&r&&(t.forEach(e=>e.remove()),this.serverRenderedNodes=void 0,queueMicrotask(()=>void Jn(n,r).then(Yn)))}static ensureDefined(){if(!this.tagName)throw Error(`${this.name} is missing a tagName. Did you forget to use @quanticElement decorator?`);Zn(this,this.tagName),customElements.get(this.tagName)||customElements.define(this.tagName,this)}};function F(e){return function(t){customElements.get(e)||customElements.define(e,t),t.tagName=e,Zn(t,e);let n=Dn(t.prototype);if(t.meta&&Object.keys(n).length){let r=Object.prototype.hasOwnProperty.call(t,`meta`),i=r?t.meta:{...t.meta,tag:e,props:{...t.meta.props??{}}};i.props={...i.props??{},...n},r||(t.meta=i)}return t}}function $n(e,t){let n=t.cssText;if(e===``)return ct(`:host(:has(> :not([slot]))) { ${n} } @scope { :scope:has(> :not([slot])) { ${n} } }`);let r=er(e);return ct(`:host(:has(> [slot="${r}"])) { ${n} } @scope { :scope:has(> [slot="${r}"]) { ${n} } }`)}function er(e){return e.replace(/["\\]/g,`\\$&`)}var tr=`data-slot-filled`,nr=(e,t=[])=>{var n,r,i,a,o,s,c;if(t.length===0)return e;let l=e=>`cssText`in e?e.cssText:Array.from(e.cssRules,e=>e.cssText).join(`
`),u=e=>e===``?`slot:not([name])`:`slot[name="${er(e)}"]`,d=t.map(e=>{let t=u(e);return e===``?`${t}[${tr}="false"] { display: none; }`:[`${t} { display: none; }`,$n(e,ct(`${t} { display: revert-layer; }`)).cssText,`${t}[${tr}="true"] { display: revert-layer; }`].join(` `)}).join(` `);class f extends e{constructor(){super(...arguments),n.add(this),r.set(this,!1),i.set(this,e=>e.nodeType!==Node.TEXT_NODE||e.textContent?.trim()!==``),a.set(this,e=>{let r=e.target;t.includes(r.name)&&tt(this,n,`m`,o).call(this,r)})}static finalizeStyles(t){return[ct(`@layer quantic-component, quantic-slot-visibility; @layer quantic-component { ${(e.finalizeStyles?.call(this,t)??[]).map(l).join(`
`)} } @layer quantic-slot-visibility { ${d} }`)]}connectedCallback(){super.connectedCallback(),tt(this,n,`m`,s).call(this)}disconnectedCallback(){tt(this,n,`m`,c).call(this),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated?.(e),tt(this,n,`m`,s).call(this)}updated(e){super.updated?.(e);for(let e of t){let t=this.renderRoot.querySelector(e===``?`slot:not([name])`:`slot[name="${CSS.escape(e)}"]`);t&&tt(this,n,`m`,o).call(this,t)}}}return r=new WeakMap,i=new WeakMap,a=new WeakMap,n=new WeakSet,o=function(e){let t=String(e.assignedNodes({flatten:!0}).some(tt(this,i,`f`)));e.getAttribute(tr)!==t&&e.setAttribute(tr,t)},s=function(){!tt(this,r,`f`)&&this.renderRoot&&(this.renderRoot.addEventListener(`slotchange`,tt(this,a,`f`),{capture:!0}),nt(this,r,!0,`f`))},c=function(){tt(this,r,`f`)&&this.renderRoot&&(this.renderRoot.removeEventListener(`slotchange`,tt(this,a,`f`),{capture:!0}),nt(this,r,!1,`f`))},f},rr={Success:`success`,Error:`error`,Warning:`warning`,Info:`info`},ir=Symbol.for(``),ar=e=>{if(e?.r===ir)return e?._$litStatic$},or=e=>({_$litStatic$:e,r:ir}),sr=new Map,cr=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=ar(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=sr.get(e))===void 0&&(o.raw=o,sr.set(e,t=o)),n=s}return e(t,...n)})(A),lr={Primary:`primary`,Secondary:`secondary`,Outline:`outline`,Ghost:`ghost`},ur={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`,ExtraLarge:`xl`},dr={Never:`never`,Always:`always`,Small:`sm`,Medium:`md`,Large:`lg`},fr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},pr=e=>(...t)=>({_$litDirective$:e,values:t}),mr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},hr=pr(class extends mr{constructor(e){if(super(e),e.type!==fr.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Xt}}),gr=e=>e??j,I=class extends Qn{constructor(){super(),this.as=`button`,this.variant=lr.Primary,this.size=ur.Medium,this.type=`button`,this.icon=!1,this.destructive=!1,this.disabled=!1,this.autofocus=!1,this.grow=dr.Never,this.handleClick=e=>{if(!this.disabled){let t=this.form?document.getElementById(this.form):null,n=this.internals?.form??t??this.getRootNode()?.host?.closest?.(`form`);if(n){if(this.type===`submit`){let t=null;this.name&&this.value!=null&&(t=document.createElement(`input`),t.type=`hidden`,t.name=this.name,t.value=this.value,t.setAttribute(`data-quantic-name-value-holder`,`1`),n.appendChild(t));try{n.requestSubmit(this.innerButton??void 0)}catch{n.requestSubmit()}finally{queueMicrotask(()=>t?.remove())}e.preventDefault()}else this.type===`reset`&&(n.reset(),e.preventDefault())}}},this.internals=this.attachInternals?.()??{form:null}}render(){let e=or(this.as),t=this.as===`button`?void 0:this.as===`a`?`link`:`button`,n=this.as===`button`?this.type:void 0,r=hr({main:!0,[`size--${this.size}`]:!0,[`variant--${this.variant}`]:!0,icon:this.icon,destructive:this.destructive,[`grow--${this.grow}`]:!0});return this.as===`button`?cr`<button
          class=${r}
          tabindex=${this.disabled?-1:0}
          type=${n}
          ?disabled=${this.disabled}
          ?autofocus=${this.autofocus}
          form=${gr(this.form)}
          name=${gr(this.name)}
          value=${gr(this.value)}
          @click=${this.handleClick}
        >
          <slot></slot>
        </button>`:cr`
        <${e}
          class=${r}
          role="${t}"
          tabindex=${this.disabled?-1:0}
          aria-disabled=${this.disabled}
          href=${gr(this.href)}
          target=${gr(this.target)}
          download=${gr(this.download)}
        >
          <slot></slot>
        </${e}>`}};I.meta={tag:`quantic-button`,description:`Clickable action trigger for form submission, primary CTAs, and secondary actions. Supports icon-only mode and polymorphic rendering as an <a> or <span>. Prefer over quantic-icon-label when the element needs to be interactive.`,category:`action`,slots:{"":{description:`Button label or icon content.`}},relatedTo:[`quantic-button-bar`,`quantic-icon-label`]},I.formAssociated=!0,I.styles=lt`
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
  `,k([N({type:`"button" | "a" | "div" | "span"`,default:`button`,description:`Underlying HTML element. Use "a" for navigation, "button" (default) for actions.`})],I.prototype,`as`,void 0),k([N({type:`ButtonVariant`,options:Object.values(lr),default:lr.Primary,reflect:!0,description:`Visual style. Use primary for the main CTA, secondary for paired actions, outline for neutral actions, ghost for inline or toolbar actions.`})],I.prototype,`variant`,void 0),k([N({type:`ButtonSize`,options:Object.values(ur),default:ur.Medium,reflect:!0,description:`Controls padding and font size.`})],I.prototype,`size`,void 0),k([N({type:`"button" | "submit" | "reset"`,default:`button`,reflect:!0,description:`Native button type for form association.`})],I.prototype,`type`,void 0),k([N({type:`string`,reflect:!0,description:`ID of the associated <form> element.`})],I.prototype,`form`,void 0),k([N({type:`string`,reflect:!0,description:`Name submitted with form data.`})],I.prototype,`name`,void 0),k([N({type:`string`,reflect:!0,description:`Value submitted with form data.`})],I.prototype,`value`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Square icon-only mode — equal padding on all sides, no text label.`})],I.prototype,`icon`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Renders in error/danger colors. Use for irreversible actions such as delete or remove.`})],I.prototype,`destructive`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction and reduces opacity.`})],I.prototype,`disabled`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Automatically focuses the button on page load.`})],I.prototype,`autofocus`,void 0),k([N({type:`ButtonGrow`,options:Object.values(dr),default:dr.Never,reflect:!0,description:`Responsive full-width behaviour. "always" is always full-width; "sm", "md", "lg" expand at those container-query thresholds.`})],I.prototype,`grow`,void 0),k([N({type:`string`,reflect:!0,description:`URL for anchor rendering (as="a" only).`})],I.prototype,`href`,void 0),k([N({type:`string`,reflect:!0,description:`Link target for anchor rendering (as="a" only).`})],I.prototype,`target`,void 0),k([N({type:`string`,reflect:!0,description:`Filename hint for download links (as="a" only).`})],I.prototype,`download`,void 0),k([xn(`button`)],I.prototype,`innerButton`,void 0),I=k([F(`quantic-button`)],I);var _r={ApptainerOutline:`apptainer.outline`,ApptainerSolid:`apptainer.solid`,AscenderOutline:`ascender.outline`,AscenderSolid:`ascender.solid`,CIQBridgeOutline:`ciq-bridge.outline`,CIQBridgeSolid:`ciq-bridge.solid`,FuzzballOutline:`fuzzball.outline`,FuzzballSolid:`fuzzball.solid`,RLCHardenedOutline:`rlc-hardened.outline`,RLCHardenedSolid:`rlc-hardened.solid`,RLCPlusOutline:`rlc-plus.outline`,RLCPlusSolid:`rlc-plus.solid`,RLCProAIOutline:`rlc-pro-ai.outline`,RLCProAISolid:`rlc-pro-ai.solid`,RLCProHardenedOutline:`rlc-pro-hardened.outline`,RLCProHardenedSolid:`rlc-pro-hardened.solid`,RLCProOutline:`rlc-pro.outline`,RLCProSolid:`rlc-pro.solid`,RockyLinuxOutline:`rocky-linux.outline`,RockyLinuxSolid:`rocky-linux.solid`,StratumOutline:`stratum.outline`,StratumSolid:`stratum.solid`,SupportOutline:`support.outline`,SupportSolid:`support.solid`,WarewulfOutline:`warewulf.outline`,WarewulfSolid:`warewulf.solid`},vr={AArrowDown:`AArrowDown`,AArrowUp:`AArrowUp`,ALargeSmall:`ALargeSmall`,Accessibility:`Accessibility`,Activity:`Activity`,AirVent:`AirVent`,Airplay:`Airplay`,AlarmClock:`AlarmClock`,AlarmClockCheck:`AlarmClockCheck`,AlarmClockMinus:`AlarmClockMinus`,AlarmClockOff:`AlarmClockOff`,AlarmClockPlus:`AlarmClockPlus`,AlarmSmoke:`AlarmSmoke`,Album:`Album`,AlignCenter:`AlignCenter`,AlignCenterHorizontal:`AlignCenterHorizontal`,AlignCenterVertical:`AlignCenterVertical`,AlignEndHorizontal:`AlignEndHorizontal`,AlignEndVertical:`AlignEndVertical`,AlignHorizontalDistributeCenter:`AlignHorizontalDistributeCenter`,AlignHorizontalDistributeEnd:`AlignHorizontalDistributeEnd`,AlignHorizontalDistributeStart:`AlignHorizontalDistributeStart`,AlignHorizontalJustifyCenter:`AlignHorizontalJustifyCenter`,AlignHorizontalJustifyEnd:`AlignHorizontalJustifyEnd`,AlignHorizontalJustifyStart:`AlignHorizontalJustifyStart`,AlignHorizontalSpaceAround:`AlignHorizontalSpaceAround`,AlignHorizontalSpaceBetween:`AlignHorizontalSpaceBetween`,AlignJustify:`AlignJustify`,AlignLeft:`AlignLeft`,AlignRight:`AlignRight`,AlignStartHorizontal:`AlignStartHorizontal`,AlignStartVertical:`AlignStartVertical`,AlignVerticalDistributeCenter:`AlignVerticalDistributeCenter`,AlignVerticalDistributeEnd:`AlignVerticalDistributeEnd`,AlignVerticalDistributeStart:`AlignVerticalDistributeStart`,AlignVerticalJustifyCenter:`AlignVerticalJustifyCenter`,AlignVerticalJustifyEnd:`AlignVerticalJustifyEnd`,AlignVerticalJustifyStart:`AlignVerticalJustifyStart`,AlignVerticalSpaceAround:`AlignVerticalSpaceAround`,AlignVerticalSpaceBetween:`AlignVerticalSpaceBetween`,Ambulance:`Ambulance`,Ampersand:`Ampersand`,Ampersands:`Ampersands`,Amphora:`Amphora`,Anchor:`Anchor`,Angry:`Angry`,Annoyed:`Annoyed`,Antenna:`Antenna`,Anvil:`Anvil`,Aperture:`Aperture`,AppWindow:`AppWindow`,AppWindowMac:`AppWindowMac`,Apple:`Apple`,Archive:`Archive`,ArchiveRestore:`ArchiveRestore`,ArchiveX:`ArchiveX`,Armchair:`Armchair`,ArrowBigDown:`ArrowBigDown`,ArrowBigDownDash:`ArrowBigDownDash`,ArrowBigLeft:`ArrowBigLeft`,ArrowBigLeftDash:`ArrowBigLeftDash`,ArrowBigRight:`ArrowBigRight`,ArrowBigRightDash:`ArrowBigRightDash`,ArrowBigUp:`ArrowBigUp`,ArrowBigUpDash:`ArrowBigUpDash`,ArrowDown:`ArrowDown`,ArrowDown01:`ArrowDown01`,ArrowDown10:`ArrowDown10`,ArrowDownAZ:`ArrowDownAZ`,ArrowDownFromLine:`ArrowDownFromLine`,ArrowDownLeft:`ArrowDownLeft`,ArrowDownNarrowWide:`ArrowDownNarrowWide`,ArrowDownRight:`ArrowDownRight`,ArrowDownToDot:`ArrowDownToDot`,ArrowDownToLine:`ArrowDownToLine`,ArrowDownUp:`ArrowDownUp`,ArrowDownWideNarrow:`ArrowDownWideNarrow`,ArrowDownZA:`ArrowDownZA`,ArrowLeft:`ArrowLeft`,ArrowLeftFromLine:`ArrowLeftFromLine`,ArrowLeftRight:`ArrowLeftRight`,ArrowLeftToLine:`ArrowLeftToLine`,ArrowRight:`ArrowRight`,ArrowRightFromLine:`ArrowRightFromLine`,ArrowRightLeft:`ArrowRightLeft`,ArrowRightToLine:`ArrowRightToLine`,ArrowUp:`ArrowUp`,ArrowUp01:`ArrowUp01`,ArrowUp10:`ArrowUp10`,ArrowUpAZ:`ArrowUpAZ`,ArrowUpDown:`ArrowUpDown`,ArrowUpFromDot:`ArrowUpFromDot`,ArrowUpFromLine:`ArrowUpFromLine`,ArrowUpLeft:`ArrowUpLeft`,ArrowUpNarrowWide:`ArrowUpNarrowWide`,ArrowUpRight:`ArrowUpRight`,ArrowUpToLine:`ArrowUpToLine`,ArrowUpWideNarrow:`ArrowUpWideNarrow`,ArrowUpZA:`ArrowUpZA`,ArrowsUpFromLine:`ArrowsUpFromLine`,Asterisk:`Asterisk`,AtSign:`AtSign`,Atom:`Atom`,AudioLines:`AudioLines`,AudioWaveform:`AudioWaveform`,Award:`Award`,Axe:`Axe`,Axis3d:`Axis3d`,Baby:`Baby`,Backpack:`Backpack`,Badge:`Badge`,BadgeAlert:`BadgeAlert`,BadgeCent:`BadgeCent`,BadgeCheck:`BadgeCheck`,BadgeDollarSign:`BadgeDollarSign`,BadgeEuro:`BadgeEuro`,BadgeHelp:`BadgeHelp`,BadgeIndianRupee:`BadgeIndianRupee`,BadgeInfo:`BadgeInfo`,BadgeJapaneseYen:`BadgeJapaneseYen`,BadgeMinus:`BadgeMinus`,BadgePercent:`BadgePercent`,BadgePlus:`BadgePlus`,BadgePoundSterling:`BadgePoundSterling`,BadgeRussianRuble:`BadgeRussianRuble`,BadgeSwissFranc:`BadgeSwissFranc`,BadgeX:`BadgeX`,BaggageClaim:`BaggageClaim`,Ban:`Ban`,Banana:`Banana`,Bandage:`Bandage`,Banknote:`Banknote`,BanknoteArrowDown:`BanknoteArrowDown`,BanknoteArrowUp:`BanknoteArrowUp`,BanknoteX:`BanknoteX`,Barcode:`Barcode`,Baseline:`Baseline`,Bath:`Bath`,Battery:`Battery`,BatteryCharging:`BatteryCharging`,BatteryFull:`BatteryFull`,BatteryLow:`BatteryLow`,BatteryMedium:`BatteryMedium`,BatteryPlus:`BatteryPlus`,BatteryWarning:`BatteryWarning`,Beaker:`Beaker`,Bean:`Bean`,BeanOff:`BeanOff`,Bed:`Bed`,BedDouble:`BedDouble`,BedSingle:`BedSingle`,Beef:`Beef`,Beer:`Beer`,BeerOff:`BeerOff`,Bell:`Bell`,BellDot:`BellDot`,BellElectric:`BellElectric`,BellMinus:`BellMinus`,BellOff:`BellOff`,BellPlus:`BellPlus`,BellRing:`BellRing`,BetweenHorizontalEnd:`BetweenHorizontalEnd`,BetweenHorizontalStart:`BetweenHorizontalStart`,BetweenVerticalEnd:`BetweenVerticalEnd`,BetweenVerticalStart:`BetweenVerticalStart`,BicepsFlexed:`BicepsFlexed`,Bike:`Bike`,Binary:`Binary`,Binoculars:`Binoculars`,Biohazard:`Biohazard`,Bird:`Bird`,Bitcoin:`Bitcoin`,Blend:`Blend`,Blinds:`Blinds`,Blocks:`Blocks`,Bluetooth:`Bluetooth`,BluetoothConnected:`BluetoothConnected`,BluetoothOff:`BluetoothOff`,BluetoothSearching:`BluetoothSearching`,Bold:`Bold`,Bolt:`Bolt`,Bomb:`Bomb`,Bone:`Bone`,Book:`Book`,BookA:`BookA`,BookAudio:`BookAudio`,BookCheck:`BookCheck`,BookCopy:`BookCopy`,BookDashed:`BookDashed`,BookDown:`BookDown`,BookHeadphones:`BookHeadphones`,BookHeart:`BookHeart`,BookImage:`BookImage`,BookKey:`BookKey`,BookLock:`BookLock`,BookMarked:`BookMarked`,BookMinus:`BookMinus`,BookOpen:`BookOpen`,BookOpenCheck:`BookOpenCheck`,BookOpenText:`BookOpenText`,BookPlus:`BookPlus`,BookText:`BookText`,BookType:`BookType`,BookUp:`BookUp`,BookUp2:`BookUp2`,BookUser:`BookUser`,BookX:`BookX`,Bookmark:`Bookmark`,BookmarkCheck:`BookmarkCheck`,BookmarkMinus:`BookmarkMinus`,BookmarkPlus:`BookmarkPlus`,BookmarkX:`BookmarkX`,BoomBox:`BoomBox`,Bot:`Bot`,BotMessageSquare:`BotMessageSquare`,BotOff:`BotOff`,BowArrow:`BowArrow`,Box:`Box`,Boxes:`Boxes`,Braces:`Braces`,Brackets:`Brackets`,Brain:`Brain`,BrainCircuit:`BrainCircuit`,BrainCog:`BrainCog`,BrickWall:`BrickWall`,BrickWallFire:`BrickWallFire`,Briefcase:`Briefcase`,BriefcaseBusiness:`BriefcaseBusiness`,BriefcaseConveyorBelt:`BriefcaseConveyorBelt`,BriefcaseMedical:`BriefcaseMedical`,BringToFront:`BringToFront`,Brush:`Brush`,BrushCleaning:`BrushCleaning`,Bubbles:`Bubbles`,Bug:`Bug`,BugOff:`BugOff`,BugPlay:`BugPlay`,Building:`Building`,Building2:`Building2`,Bus:`Bus`,BusFront:`BusFront`,Cable:`Cable`,CableCar:`CableCar`,Cake:`Cake`,CakeSlice:`CakeSlice`,Calculator:`Calculator`,Calendar:`Calendar`,Calendar1:`Calendar1`,CalendarArrowDown:`CalendarArrowDown`,CalendarArrowUp:`CalendarArrowUp`,CalendarCheck:`CalendarCheck`,CalendarCheck2:`CalendarCheck2`,CalendarClock:`CalendarClock`,CalendarCog:`CalendarCog`,CalendarDays:`CalendarDays`,CalendarFold:`CalendarFold`,CalendarHeart:`CalendarHeart`,CalendarMinus:`CalendarMinus`,CalendarMinus2:`CalendarMinus2`,CalendarOff:`CalendarOff`,CalendarPlus:`CalendarPlus`,CalendarPlus2:`CalendarPlus2`,CalendarRange:`CalendarRange`,CalendarSearch:`CalendarSearch`,CalendarSync:`CalendarSync`,CalendarX:`CalendarX`,CalendarX2:`CalendarX2`,Camera:`Camera`,CameraOff:`CameraOff`,Candy:`Candy`,CandyCane:`CandyCane`,CandyOff:`CandyOff`,Cannabis:`Cannabis`,Captions:`Captions`,CaptionsOff:`CaptionsOff`,Car:`Car`,CarFront:`CarFront`,CarTaxiFront:`CarTaxiFront`,Caravan:`Caravan`,Carrot:`Carrot`,CaseLower:`CaseLower`,CaseSensitive:`CaseSensitive`,CaseUpper:`CaseUpper`,CassetteTape:`CassetteTape`,Cast:`Cast`,Castle:`Castle`,Cat:`Cat`,Cctv:`Cctv`,ChartArea:`ChartArea`,ChartBar:`ChartBar`,ChartBarBig:`ChartBarBig`,ChartBarDecreasing:`ChartBarDecreasing`,ChartBarIncreasing:`ChartBarIncreasing`,ChartBarStacked:`ChartBarStacked`,ChartCandlestick:`ChartCandlestick`,ChartColumn:`ChartColumn`,ChartColumnBig:`ChartColumnBig`,ChartColumnDecreasing:`ChartColumnDecreasing`,ChartColumnIncreasing:`ChartColumnIncreasing`,ChartColumnStacked:`ChartColumnStacked`,ChartGantt:`ChartGantt`,ChartLine:`ChartLine`,ChartNetwork:`ChartNetwork`,ChartNoAxesColumn:`ChartNoAxesColumn`,ChartNoAxesColumnDecreasing:`ChartNoAxesColumnDecreasing`,ChartNoAxesColumnIncreasing:`ChartNoAxesColumnIncreasing`,ChartNoAxesCombined:`ChartNoAxesCombined`,ChartNoAxesGantt:`ChartNoAxesGantt`,ChartPie:`ChartPie`,ChartScatter:`ChartScatter`,ChartSpline:`ChartSpline`,Check:`Check`,CheckCheck:`CheckCheck`,CheckLine:`CheckLine`,ChefHat:`ChefHat`,Cherry:`Cherry`,ChevronDown:`ChevronDown`,ChevronFirst:`ChevronFirst`,ChevronLast:`ChevronLast`,ChevronLeft:`ChevronLeft`,ChevronRight:`ChevronRight`,ChevronUp:`ChevronUp`,ChevronsDown:`ChevronsDown`,ChevronsDownUp:`ChevronsDownUp`,ChevronsLeft:`ChevronsLeft`,ChevronsLeftRight:`ChevronsLeftRight`,ChevronsLeftRightEllipsis:`ChevronsLeftRightEllipsis`,ChevronsRight:`ChevronsRight`,ChevronsRightLeft:`ChevronsRightLeft`,ChevronsUp:`ChevronsUp`,ChevronsUpDown:`ChevronsUpDown`,Chrome:`Chrome`,Church:`Church`,Cigarette:`Cigarette`,CigaretteOff:`CigaretteOff`,Circle:`Circle`,CircleAlert:`CircleAlert`,CircleArrowDown:`CircleArrowDown`,CircleArrowLeft:`CircleArrowLeft`,CircleArrowOutDownLeft:`CircleArrowOutDownLeft`,CircleArrowOutDownRight:`CircleArrowOutDownRight`,CircleArrowOutUpLeft:`CircleArrowOutUpLeft`,CircleArrowOutUpRight:`CircleArrowOutUpRight`,CircleArrowRight:`CircleArrowRight`,CircleArrowUp:`CircleArrowUp`,CircleCheck:`CircleCheck`,CircleCheckBig:`CircleCheckBig`,CircleChevronDown:`CircleChevronDown`,CircleChevronLeft:`CircleChevronLeft`,CircleChevronRight:`CircleChevronRight`,CircleChevronUp:`CircleChevronUp`,CircleDashed:`CircleDashed`,CircleDivide:`CircleDivide`,CircleDollarSign:`CircleDollarSign`,CircleDot:`CircleDot`,CircleDotDashed:`CircleDotDashed`,CircleEllipsis:`CircleEllipsis`,CircleEqual:`CircleEqual`,CircleFadingArrowUp:`CircleFadingArrowUp`,CircleFadingPlus:`CircleFadingPlus`,CircleGauge:`CircleGauge`,CircleHelp:`CircleHelp`,CircleMinus:`CircleMinus`,CircleOff:`CircleOff`,CircleParking:`CircleParking`,CircleParkingOff:`CircleParkingOff`,CirclePause:`CirclePause`,CirclePercent:`CirclePercent`,CirclePlay:`CirclePlay`,CirclePlus:`CirclePlus`,CirclePower:`CirclePower`,CircleSlash:`CircleSlash`,CircleSlash2:`CircleSlash2`,CircleSmall:`CircleSmall`,CircleStop:`CircleStop`,CircleUser:`CircleUser`,CircleUserRound:`CircleUserRound`,CircleX:`CircleX`,CircuitBoard:`CircuitBoard`,Citrus:`Citrus`,Clapperboard:`Clapperboard`,Clipboard:`Clipboard`,ClipboardCheck:`ClipboardCheck`,ClipboardCopy:`ClipboardCopy`,ClipboardList:`ClipboardList`,ClipboardMinus:`ClipboardMinus`,ClipboardPaste:`ClipboardPaste`,ClipboardPen:`ClipboardPen`,ClipboardPenLine:`ClipboardPenLine`,ClipboardPlus:`ClipboardPlus`,ClipboardType:`ClipboardType`,ClipboardX:`ClipboardX`,Clock:`Clock`,Clock1:`Clock1`,Clock10:`Clock10`,Clock11:`Clock11`,Clock12:`Clock12`,Clock2:`Clock2`,Clock3:`Clock3`,Clock4:`Clock4`,Clock5:`Clock5`,Clock6:`Clock6`,Clock7:`Clock7`,Clock8:`Clock8`,Clock9:`Clock9`,ClockAlert:`ClockAlert`,ClockArrowDown:`ClockArrowDown`,ClockArrowUp:`ClockArrowUp`,ClockFading:`ClockFading`,ClockPlus:`ClockPlus`,Cloud:`Cloud`,CloudAlert:`CloudAlert`,CloudCog:`CloudCog`,CloudDownload:`CloudDownload`,CloudDrizzle:`CloudDrizzle`,CloudFog:`CloudFog`,CloudHail:`CloudHail`,CloudLightning:`CloudLightning`,CloudMoon:`CloudMoon`,CloudMoonRain:`CloudMoonRain`,CloudOff:`CloudOff`,CloudRain:`CloudRain`,CloudRainWind:`CloudRainWind`,CloudSnow:`CloudSnow`,CloudSun:`CloudSun`,CloudSunRain:`CloudSunRain`,CloudUpload:`CloudUpload`,Cloudy:`Cloudy`,Clover:`Clover`,Club:`Club`,Code:`Code`,CodeXml:`CodeXml`,Codepen:`Codepen`,Codesandbox:`Codesandbox`,Coffee:`Coffee`,Cog:`Cog`,Coins:`Coins`,Columns2:`Columns2`,Columns3:`Columns3`,Columns3Cog:`Columns3Cog`,Columns4:`Columns4`,Combine:`Combine`,Command:`Command`,Compass:`Compass`,Component:`Component`,Computer:`Computer`,ConciergeBell:`ConciergeBell`,Cone:`Cone`,Construction:`Construction`,Contact:`Contact`,ContactRound:`ContactRound`,Container:`Container`,Contrast:`Contrast`,Cookie:`Cookie`,CookingPot:`CookingPot`,Copy:`Copy`,CopyCheck:`CopyCheck`,CopyMinus:`CopyMinus`,CopyPlus:`CopyPlus`,CopySlash:`CopySlash`,CopyX:`CopyX`,Copyleft:`Copyleft`,Copyright:`Copyright`,CornerDownLeft:`CornerDownLeft`,CornerDownRight:`CornerDownRight`,CornerLeftDown:`CornerLeftDown`,CornerLeftUp:`CornerLeftUp`,CornerRightDown:`CornerRightDown`,CornerRightUp:`CornerRightUp`,CornerUpLeft:`CornerUpLeft`,CornerUpRight:`CornerUpRight`,Cpu:`Cpu`,CreativeCommons:`CreativeCommons`,CreditCard:`CreditCard`,Croissant:`Croissant`,Crop:`Crop`,Cross:`Cross`,Crosshair:`Crosshair`,Crown:`Crown`,Cuboid:`Cuboid`,CupSoda:`CupSoda`,Currency:`Currency`,Cylinder:`Cylinder`,Dam:`Dam`,Database:`Database`,DatabaseBackup:`DatabaseBackup`,DatabaseZap:`DatabaseZap`,DecimalsArrowLeft:`DecimalsArrowLeft`,DecimalsArrowRight:`DecimalsArrowRight`,Delete:`Delete`,Dessert:`Dessert`,Diameter:`Diameter`,Diamond:`Diamond`,DiamondMinus:`DiamondMinus`,DiamondPercent:`DiamondPercent`,DiamondPlus:`DiamondPlus`,Dice1:`Dice1`,Dice2:`Dice2`,Dice3:`Dice3`,Dice4:`Dice4`,Dice5:`Dice5`,Dice6:`Dice6`,Dices:`Dices`,Diff:`Diff`,Disc:`Disc`,Disc2:`Disc2`,Disc3:`Disc3`,DiscAlbum:`DiscAlbum`,Divide:`Divide`,Dna:`Dna`,DnaOff:`DnaOff`,Dock:`Dock`,Dog:`Dog`,DollarSign:`DollarSign`,Donut:`Donut`,DoorClosed:`DoorClosed`,DoorClosedLocked:`DoorClosedLocked`,DoorOpen:`DoorOpen`,Dot:`Dot`,Download:`Download`,DraftingCompass:`DraftingCompass`,Drama:`Drama`,Dribbble:`Dribbble`,Drill:`Drill`,Droplet:`Droplet`,DropletOff:`DropletOff`,Droplets:`Droplets`,Drum:`Drum`,Drumstick:`Drumstick`,Dumbbell:`Dumbbell`,Ear:`Ear`,EarOff:`EarOff`,Earth:`Earth`,EarthLock:`EarthLock`,Eclipse:`Eclipse`,Egg:`Egg`,EggFried:`EggFried`,EggOff:`EggOff`,Ellipsis:`Ellipsis`,EllipsisVertical:`EllipsisVertical`,Equal:`Equal`,EqualApproximately:`EqualApproximately`,EqualNot:`EqualNot`,Eraser:`Eraser`,EthernetPort:`EthernetPort`,Euro:`Euro`,Expand:`Expand`,ExternalLink:`ExternalLink`,Eye:`Eye`,EyeClosed:`EyeClosed`,EyeOff:`EyeOff`,Facebook:`Facebook`,Factory:`Factory`,Fan:`Fan`,FastForward:`FastForward`,Feather:`Feather`,Fence:`Fence`,FerrisWheel:`FerrisWheel`,Figma:`Figma`,File:`File`,FileArchive:`FileArchive`,FileAudio:`FileAudio`,FileAudio2:`FileAudio2`,FileAxis3d:`FileAxis3d`,FileBadge:`FileBadge`,FileBadge2:`FileBadge2`,FileBox:`FileBox`,FileChartColumn:`FileChartColumn`,FileChartColumnIncreasing:`FileChartColumnIncreasing`,FileChartLine:`FileChartLine`,FileChartPie:`FileChartPie`,FileCheck:`FileCheck`,FileCheck2:`FileCheck2`,FileClock:`FileClock`,FileCode:`FileCode`,FileCode2:`FileCode2`,FileCog:`FileCog`,FileDiff:`FileDiff`,FileDigit:`FileDigit`,FileDown:`FileDown`,FileHeart:`FileHeart`,FileImage:`FileImage`,FileInput:`FileInput`,FileJson:`FileJson`,FileJson2:`FileJson2`,FileKey:`FileKey`,FileKey2:`FileKey2`,FileLock:`FileLock`,FileLock2:`FileLock2`,FileMinus:`FileMinus`,FileMinus2:`FileMinus2`,FileMusic:`FileMusic`,FileOutput:`FileOutput`,FilePen:`FilePen`,FilePenLine:`FilePenLine`,FilePlus:`FilePlus`,FilePlus2:`FilePlus2`,FileQuestion:`FileQuestion`,FileScan:`FileScan`,FileSearch:`FileSearch`,FileSearch2:`FileSearch2`,FileSliders:`FileSliders`,FileSpreadsheet:`FileSpreadsheet`,FileStack:`FileStack`,FileSymlink:`FileSymlink`,FileTerminal:`FileTerminal`,FileText:`FileText`,FileType:`FileType`,FileType2:`FileType2`,FileUp:`FileUp`,FileUser:`FileUser`,FileVideo:`FileVideo`,FileVideo2:`FileVideo2`,FileVolume:`FileVolume`,FileVolume2:`FileVolume2`,FileWarning:`FileWarning`,FileX:`FileX`,FileX2:`FileX2`,Files:`Files`,Film:`Film`,Fingerprint:`Fingerprint`,FireExtinguisher:`FireExtinguisher`,Fish:`Fish`,FishOff:`FishOff`,FishSymbol:`FishSymbol`,Flag:`Flag`,FlagOff:`FlagOff`,FlagTriangleLeft:`FlagTriangleLeft`,FlagTriangleRight:`FlagTriangleRight`,Flame:`Flame`,FlameKindling:`FlameKindling`,Flashlight:`Flashlight`,FlashlightOff:`FlashlightOff`,FlaskConical:`FlaskConical`,FlaskConicalOff:`FlaskConicalOff`,FlaskRound:`FlaskRound`,FlipHorizontal:`FlipHorizontal`,FlipHorizontal2:`FlipHorizontal2`,FlipVertical:`FlipVertical`,FlipVertical2:`FlipVertical2`,Flower:`Flower`,Flower2:`Flower2`,Focus:`Focus`,FoldHorizontal:`FoldHorizontal`,FoldVertical:`FoldVertical`,Folder:`Folder`,FolderArchive:`FolderArchive`,FolderCheck:`FolderCheck`,FolderClock:`FolderClock`,FolderClosed:`FolderClosed`,FolderCode:`FolderCode`,FolderCog:`FolderCog`,FolderDot:`FolderDot`,FolderDown:`FolderDown`,FolderGit:`FolderGit`,FolderGit2:`FolderGit2`,FolderHeart:`FolderHeart`,FolderInput:`FolderInput`,FolderKanban:`FolderKanban`,FolderKey:`FolderKey`,FolderLock:`FolderLock`,FolderMinus:`FolderMinus`,FolderOpen:`FolderOpen`,FolderOpenDot:`FolderOpenDot`,FolderOutput:`FolderOutput`,FolderPen:`FolderPen`,FolderPlus:`FolderPlus`,FolderRoot:`FolderRoot`,FolderSearch:`FolderSearch`,FolderSearch2:`FolderSearch2`,FolderSymlink:`FolderSymlink`,FolderSync:`FolderSync`,FolderTree:`FolderTree`,FolderUp:`FolderUp`,FolderX:`FolderX`,Folders:`Folders`,Footprints:`Footprints`,Forklift:`Forklift`,Forward:`Forward`,Frame:`Frame`,Framer:`Framer`,Frown:`Frown`,Fuel:`Fuel`,Fullscreen:`Fullscreen`,Funnel:`Funnel`,FunnelPlus:`FunnelPlus`,FunnelX:`FunnelX`,GalleryHorizontal:`GalleryHorizontal`,GalleryHorizontalEnd:`GalleryHorizontalEnd`,GalleryThumbnails:`GalleryThumbnails`,GalleryVertical:`GalleryVertical`,GalleryVerticalEnd:`GalleryVerticalEnd`,Gamepad:`Gamepad`,Gamepad2:`Gamepad2`,Gauge:`Gauge`,Gavel:`Gavel`,Gem:`Gem`,Ghost:`Ghost`,Gift:`Gift`,GitBranch:`GitBranch`,GitBranchPlus:`GitBranchPlus`,GitCommitHorizontal:`GitCommitHorizontal`,GitCommitVertical:`GitCommitVertical`,GitCompare:`GitCompare`,GitCompareArrows:`GitCompareArrows`,GitFork:`GitFork`,GitGraph:`GitGraph`,GitMerge:`GitMerge`,GitPullRequest:`GitPullRequest`,GitPullRequestArrow:`GitPullRequestArrow`,GitPullRequestClosed:`GitPullRequestClosed`,GitPullRequestCreate:`GitPullRequestCreate`,GitPullRequestCreateArrow:`GitPullRequestCreateArrow`,GitPullRequestDraft:`GitPullRequestDraft`,Github:`Github`,Gitlab:`Gitlab`,GlassWater:`GlassWater`,Glasses:`Glasses`,Globe:`Globe`,GlobeLock:`GlobeLock`,Goal:`Goal`,Gpu:`Gpu`,Grab:`Grab`,GraduationCap:`GraduationCap`,Grape:`Grape`,Grid2x2:`Grid2x2`,Grid2x2Check:`Grid2x2Check`,Grid2x2Plus:`Grid2x2Plus`,Grid2x2X:`Grid2x2X`,Grid3x3:`Grid3x3`,Grip:`Grip`,GripHorizontal:`GripHorizontal`,GripVertical:`GripVertical`,Group:`Group`,Guitar:`Guitar`,Ham:`Ham`,Hamburger:`Hamburger`,Hammer:`Hammer`,Hand:`Hand`,HandCoins:`HandCoins`,HandHeart:`HandHeart`,HandHelping:`HandHelping`,HandMetal:`HandMetal`,HandPlatter:`HandPlatter`,Handshake:`Handshake`,HardDrive:`HardDrive`,HardDriveDownload:`HardDriveDownload`,HardDriveUpload:`HardDriveUpload`,HardHat:`HardHat`,Hash:`Hash`,Haze:`Haze`,HdmiPort:`HdmiPort`,Heading:`Heading`,Heading1:`Heading1`,Heading2:`Heading2`,Heading3:`Heading3`,Heading4:`Heading4`,Heading5:`Heading5`,Heading6:`Heading6`,HeadphoneOff:`HeadphoneOff`,Headphones:`Headphones`,Headset:`Headset`,Heart:`Heart`,HeartCrack:`HeartCrack`,HeartHandshake:`HeartHandshake`,HeartMinus:`HeartMinus`,HeartOff:`HeartOff`,HeartPlus:`HeartPlus`,HeartPulse:`HeartPulse`,Heater:`Heater`,Hexagon:`Hexagon`,Highlighter:`Highlighter`,History:`History`,Hop:`Hop`,HopOff:`HopOff`,Hospital:`Hospital`,Hotel:`Hotel`,Hourglass:`Hourglass`,House:`House`,HousePlug:`HousePlug`,HousePlus:`HousePlus`,HouseWifi:`HouseWifi`,IceCreamBowl:`IceCreamBowl`,IceCreamCone:`IceCreamCone`,IdCard:`IdCard`,Image:`Image`,ImageDown:`ImageDown`,ImageMinus:`ImageMinus`,ImageOff:`ImageOff`,ImagePlay:`ImagePlay`,ImagePlus:`ImagePlus`,ImageUp:`ImageUp`,ImageUpscale:`ImageUpscale`,Images:`Images`,Import:`Import`,Inbox:`Inbox`,IndentDecrease:`IndentDecrease`,IndentIncrease:`IndentIncrease`,IndianRupee:`IndianRupee`,Infinity:`Infinity`,Info:`Info`,InspectionPanel:`InspectionPanel`,Instagram:`Instagram`,Italic:`Italic`,IterationCcw:`IterationCcw`,IterationCw:`IterationCw`,JapaneseYen:`JapaneseYen`,Joystick:`Joystick`,Kanban:`Kanban`,Key:`Key`,KeyRound:`KeyRound`,KeySquare:`KeySquare`,Keyboard:`Keyboard`,KeyboardMusic:`KeyboardMusic`,KeyboardOff:`KeyboardOff`,Lamp:`Lamp`,LampCeiling:`LampCeiling`,LampDesk:`LampDesk`,LampFloor:`LampFloor`,LampWallDown:`LampWallDown`,LampWallUp:`LampWallUp`,LandPlot:`LandPlot`,Landmark:`Landmark`,Languages:`Languages`,Laptop:`Laptop`,LaptopMinimal:`LaptopMinimal`,LaptopMinimalCheck:`LaptopMinimalCheck`,Lasso:`Lasso`,LassoSelect:`LassoSelect`,Laugh:`Laugh`,Layers:`Layers`,Layers2:`Layers2`,LayoutDashboard:`LayoutDashboard`,LayoutGrid:`LayoutGrid`,LayoutList:`LayoutList`,LayoutPanelLeft:`LayoutPanelLeft`,LayoutPanelTop:`LayoutPanelTop`,LayoutTemplate:`LayoutTemplate`,Leaf:`Leaf`,LeafyGreen:`LeafyGreen`,Lectern:`Lectern`,LetterText:`LetterText`,Library:`Library`,LibraryBig:`LibraryBig`,LifeBuoy:`LifeBuoy`,Ligature:`Ligature`,Lightbulb:`Lightbulb`,LightbulbOff:`LightbulbOff`,Link:`Link`,Link2:`Link2`,Link2Off:`Link2Off`,Linkedin:`Linkedin`,List:`List`,ListCheck:`ListCheck`,ListChecks:`ListChecks`,ListCollapse:`ListCollapse`,ListEnd:`ListEnd`,ListFilter:`ListFilter`,ListFilterPlus:`ListFilterPlus`,ListMinus:`ListMinus`,ListMusic:`ListMusic`,ListOrdered:`ListOrdered`,ListPlus:`ListPlus`,ListRestart:`ListRestart`,ListStart:`ListStart`,ListTodo:`ListTodo`,ListTree:`ListTree`,ListVideo:`ListVideo`,ListX:`ListX`,Loader:`Loader`,LoaderCircle:`LoaderCircle`,LoaderPinwheel:`LoaderPinwheel`,Locate:`Locate`,LocateFixed:`LocateFixed`,LocateOff:`LocateOff`,LocationEdit:`LocationEdit`,Lock:`Lock`,LockKeyhole:`LockKeyhole`,LockKeyholeOpen:`LockKeyholeOpen`,LockOpen:`LockOpen`,LogIn:`LogIn`,LogOut:`LogOut`,Logs:`Logs`,Lollipop:`Lollipop`,Luggage:`Luggage`,Magnet:`Magnet`,Mail:`Mail`,MailCheck:`MailCheck`,MailMinus:`MailMinus`,MailOpen:`MailOpen`,MailPlus:`MailPlus`,MailQuestion:`MailQuestion`,MailSearch:`MailSearch`,MailWarning:`MailWarning`,MailX:`MailX`,Mailbox:`Mailbox`,Mails:`Mails`,Map:`Map`,MapPin:`MapPin`,MapPinCheck:`MapPinCheck`,MapPinCheckInside:`MapPinCheckInside`,MapPinHouse:`MapPinHouse`,MapPinMinus:`MapPinMinus`,MapPinMinusInside:`MapPinMinusInside`,MapPinOff:`MapPinOff`,MapPinPlus:`MapPinPlus`,MapPinPlusInside:`MapPinPlusInside`,MapPinX:`MapPinX`,MapPinXInside:`MapPinXInside`,MapPinned:`MapPinned`,MapPlus:`MapPlus`,Mars:`Mars`,MarsStroke:`MarsStroke`,Martini:`Martini`,Maximize:`Maximize`,Maximize2:`Maximize2`,Medal:`Medal`,Megaphone:`Megaphone`,MegaphoneOff:`MegaphoneOff`,Meh:`Meh`,MemoryStick:`MemoryStick`,Menu:`Menu`,Merge:`Merge`,MessageCircle:`MessageCircle`,MessageCircleCode:`MessageCircleCode`,MessageCircleDashed:`MessageCircleDashed`,MessageCircleHeart:`MessageCircleHeart`,MessageCircleMore:`MessageCircleMore`,MessageCircleOff:`MessageCircleOff`,MessageCirclePlus:`MessageCirclePlus`,MessageCircleQuestion:`MessageCircleQuestion`,MessageCircleReply:`MessageCircleReply`,MessageCircleWarning:`MessageCircleWarning`,MessageCircleX:`MessageCircleX`,MessageSquare:`MessageSquare`,MessageSquareCode:`MessageSquareCode`,MessageSquareDashed:`MessageSquareDashed`,MessageSquareDiff:`MessageSquareDiff`,MessageSquareDot:`MessageSquareDot`,MessageSquareHeart:`MessageSquareHeart`,MessageSquareLock:`MessageSquareLock`,MessageSquareMore:`MessageSquareMore`,MessageSquareOff:`MessageSquareOff`,MessageSquarePlus:`MessageSquarePlus`,MessageSquareQuote:`MessageSquareQuote`,MessageSquareReply:`MessageSquareReply`,MessageSquareShare:`MessageSquareShare`,MessageSquareText:`MessageSquareText`,MessageSquareWarning:`MessageSquareWarning`,MessageSquareX:`MessageSquareX`,MessagesSquare:`MessagesSquare`,Mic:`Mic`,MicOff:`MicOff`,MicVocal:`MicVocal`,Microchip:`Microchip`,Microscope:`Microscope`,Microwave:`Microwave`,Milestone:`Milestone`,Milk:`Milk`,MilkOff:`MilkOff`,Minimize:`Minimize`,Minimize2:`Minimize2`,Minus:`Minus`,Monitor:`Monitor`,MonitorCheck:`MonitorCheck`,MonitorCog:`MonitorCog`,MonitorDot:`MonitorDot`,MonitorDown:`MonitorDown`,MonitorOff:`MonitorOff`,MonitorPause:`MonitorPause`,MonitorPlay:`MonitorPlay`,MonitorSmartphone:`MonitorSmartphone`,MonitorSpeaker:`MonitorSpeaker`,MonitorStop:`MonitorStop`,MonitorUp:`MonitorUp`,MonitorX:`MonitorX`,Moon:`Moon`,MoonStar:`MoonStar`,Mountain:`Mountain`,MountainSnow:`MountainSnow`,Mouse:`Mouse`,MouseOff:`MouseOff`,MousePointer:`MousePointer`,MousePointer2:`MousePointer2`,MousePointerBan:`MousePointerBan`,MousePointerClick:`MousePointerClick`,Move:`Move`,Move3d:`Move3d`,MoveDiagonal:`MoveDiagonal`,MoveDiagonal2:`MoveDiagonal2`,MoveDown:`MoveDown`,MoveDownLeft:`MoveDownLeft`,MoveDownRight:`MoveDownRight`,MoveHorizontal:`MoveHorizontal`,MoveLeft:`MoveLeft`,MoveRight:`MoveRight`,MoveUp:`MoveUp`,MoveUpLeft:`MoveUpLeft`,MoveUpRight:`MoveUpRight`,MoveVertical:`MoveVertical`,Music:`Music`,Music2:`Music2`,Music3:`Music3`,Music4:`Music4`,Navigation:`Navigation`,Navigation2:`Navigation2`,Navigation2Off:`Navigation2Off`,NavigationOff:`NavigationOff`,Network:`Network`,Newspaper:`Newspaper`,Nfc:`Nfc`,NonBinary:`NonBinary`,Notebook:`Notebook`,NotebookPen:`NotebookPen`,NotebookTabs:`NotebookTabs`,NotebookText:`NotebookText`,NotepadText:`NotepadText`,NotepadTextDashed:`NotepadTextDashed`,Nut:`Nut`,NutOff:`NutOff`,Octagon:`Octagon`,OctagonAlert:`OctagonAlert`,OctagonMinus:`OctagonMinus`,OctagonPause:`OctagonPause`,OctagonX:`OctagonX`,Omega:`Omega`,Option:`Option`,Orbit:`Orbit`,Origami:`Origami`,Package:`Package`,Package2:`Package2`,PackageCheck:`PackageCheck`,PackageMinus:`PackageMinus`,PackageOpen:`PackageOpen`,PackagePlus:`PackagePlus`,PackageSearch:`PackageSearch`,PackageX:`PackageX`,PaintBucket:`PaintBucket`,PaintRoller:`PaintRoller`,Paintbrush:`Paintbrush`,PaintbrushVertical:`PaintbrushVertical`,Palette:`Palette`,Panda:`Panda`,PanelBottom:`PanelBottom`,PanelBottomClose:`PanelBottomClose`,PanelBottomDashed:`PanelBottomDashed`,PanelBottomOpen:`PanelBottomOpen`,PanelLeft:`PanelLeft`,PanelLeftClose:`PanelLeftClose`,PanelLeftDashed:`PanelLeftDashed`,PanelLeftOpen:`PanelLeftOpen`,PanelRight:`PanelRight`,PanelRightClose:`PanelRightClose`,PanelRightDashed:`PanelRightDashed`,PanelRightOpen:`PanelRightOpen`,PanelTop:`PanelTop`,PanelTopClose:`PanelTopClose`,PanelTopDashed:`PanelTopDashed`,PanelTopOpen:`PanelTopOpen`,PanelsLeftBottom:`PanelsLeftBottom`,PanelsRightBottom:`PanelsRightBottom`,PanelsTopLeft:`PanelsTopLeft`,Paperclip:`Paperclip`,Parentheses:`Parentheses`,ParkingMeter:`ParkingMeter`,PartyPopper:`PartyPopper`,Pause:`Pause`,PawPrint:`PawPrint`,PcCase:`PcCase`,Pen:`Pen`,PenLine:`PenLine`,PenOff:`PenOff`,PenTool:`PenTool`,Pencil:`Pencil`,PencilLine:`PencilLine`,PencilOff:`PencilOff`,PencilRuler:`PencilRuler`,Pentagon:`Pentagon`,Percent:`Percent`,PersonStanding:`PersonStanding`,PhilippinePeso:`PhilippinePeso`,Phone:`Phone`,PhoneCall:`PhoneCall`,PhoneForwarded:`PhoneForwarded`,PhoneIncoming:`PhoneIncoming`,PhoneMissed:`PhoneMissed`,PhoneOff:`PhoneOff`,PhoneOutgoing:`PhoneOutgoing`,Pi:`Pi`,Piano:`Piano`,Pickaxe:`Pickaxe`,PictureInPicture:`PictureInPicture`,PictureInPicture2:`PictureInPicture2`,PiggyBank:`PiggyBank`,Pilcrow:`Pilcrow`,PilcrowLeft:`PilcrowLeft`,PilcrowRight:`PilcrowRight`,Pill:`Pill`,PillBottle:`PillBottle`,Pin:`Pin`,PinOff:`PinOff`,Pipette:`Pipette`,Pizza:`Pizza`,Plane:`Plane`,PlaneLanding:`PlaneLanding`,PlaneTakeoff:`PlaneTakeoff`,Play:`Play`,Plug:`Plug`,Plug2:`Plug2`,PlugZap:`PlugZap`,Plus:`Plus`,Pocket:`Pocket`,PocketKnife:`PocketKnife`,Podcast:`Podcast`,Pointer:`Pointer`,PointerOff:`PointerOff`,Popcorn:`Popcorn`,Popsicle:`Popsicle`,PoundSterling:`PoundSterling`,Power:`Power`,PowerOff:`PowerOff`,Presentation:`Presentation`,Printer:`Printer`,PrinterCheck:`PrinterCheck`,Projector:`Projector`,Proportions:`Proportions`,Puzzle:`Puzzle`,Pyramid:`Pyramid`,QrCode:`QrCode`,Quote:`Quote`,Rabbit:`Rabbit`,Radar:`Radar`,Radiation:`Radiation`,Radical:`Radical`,Radio:`Radio`,RadioReceiver:`RadioReceiver`,RadioTower:`RadioTower`,Radius:`Radius`,RailSymbol:`RailSymbol`,Rainbow:`Rainbow`,Rat:`Rat`,Ratio:`Ratio`,Receipt:`Receipt`,ReceiptCent:`ReceiptCent`,ReceiptEuro:`ReceiptEuro`,ReceiptIndianRupee:`ReceiptIndianRupee`,ReceiptJapaneseYen:`ReceiptJapaneseYen`,ReceiptPoundSterling:`ReceiptPoundSterling`,ReceiptRussianRuble:`ReceiptRussianRuble`,ReceiptSwissFranc:`ReceiptSwissFranc`,ReceiptText:`ReceiptText`,RectangleEllipsis:`RectangleEllipsis`,RectangleGoggles:`RectangleGoggles`,RectangleHorizontal:`RectangleHorizontal`,RectangleVertical:`RectangleVertical`,Recycle:`Recycle`,Redo:`Redo`,Redo2:`Redo2`,RedoDot:`RedoDot`,RefreshCcw:`RefreshCcw`,RefreshCcwDot:`RefreshCcwDot`,RefreshCw:`RefreshCw`,RefreshCwOff:`RefreshCwOff`,Refrigerator:`Refrigerator`,Regex:`Regex`,RemoveFormatting:`RemoveFormatting`,Repeat:`Repeat`,Repeat1:`Repeat1`,Repeat2:`Repeat2`,Replace:`Replace`,ReplaceAll:`ReplaceAll`,Reply:`Reply`,ReplyAll:`ReplyAll`,Rewind:`Rewind`,Ribbon:`Ribbon`,Rocket:`Rocket`,RockingChair:`RockingChair`,RollerCoaster:`RollerCoaster`,Rotate3d:`Rotate3d`,RotateCcw:`RotateCcw`,RotateCcwKey:`RotateCcwKey`,RotateCcwSquare:`RotateCcwSquare`,RotateCw:`RotateCw`,RotateCwSquare:`RotateCwSquare`,Route:`Route`,RouteOff:`RouteOff`,Router:`Router`,Rows2:`Rows2`,Rows3:`Rows3`,Rows4:`Rows4`,Rss:`Rss`,Ruler:`Ruler`,RulerDimensionLine:`RulerDimensionLine`,RussianRuble:`RussianRuble`,Sailboat:`Sailboat`,Salad:`Salad`,Sandwich:`Sandwich`,Satellite:`Satellite`,SatelliteDish:`SatelliteDish`,SaudiRiyal:`SaudiRiyal`,Save:`Save`,SaveAll:`SaveAll`,SaveOff:`SaveOff`,Scale:`Scale`,Scale3d:`Scale3d`,Scaling:`Scaling`,Scan:`Scan`,ScanBarcode:`ScanBarcode`,ScanEye:`ScanEye`,ScanFace:`ScanFace`,ScanHeart:`ScanHeart`,ScanLine:`ScanLine`,ScanQrCode:`ScanQrCode`,ScanSearch:`ScanSearch`,ScanText:`ScanText`,School:`School`,Scissors:`Scissors`,ScissorsLineDashed:`ScissorsLineDashed`,ScreenShare:`ScreenShare`,ScreenShareOff:`ScreenShareOff`,Scroll:`Scroll`,ScrollText:`ScrollText`,Search:`Search`,SearchCheck:`SearchCheck`,SearchCode:`SearchCode`,SearchSlash:`SearchSlash`,SearchX:`SearchX`,Section:`Section`,Send:`Send`,SendHorizontal:`SendHorizontal`,SendToBack:`SendToBack`,SeparatorHorizontal:`SeparatorHorizontal`,SeparatorVertical:`SeparatorVertical`,Server:`Server`,ServerCog:`ServerCog`,ServerCrash:`ServerCrash`,ServerOff:`ServerOff`,Settings:`Settings`,Settings2:`Settings2`,Shapes:`Shapes`,Share:`Share`,Share2:`Share2`,Sheet:`Sheet`,Shell:`Shell`,Shield:`Shield`,ShieldAlert:`ShieldAlert`,ShieldBan:`ShieldBan`,ShieldCheck:`ShieldCheck`,ShieldEllipsis:`ShieldEllipsis`,ShieldHalf:`ShieldHalf`,ShieldMinus:`ShieldMinus`,ShieldOff:`ShieldOff`,ShieldPlus:`ShieldPlus`,ShieldQuestion:`ShieldQuestion`,ShieldUser:`ShieldUser`,ShieldX:`ShieldX`,Ship:`Ship`,ShipWheel:`ShipWheel`,Shirt:`Shirt`,ShoppingBag:`ShoppingBag`,ShoppingBasket:`ShoppingBasket`,ShoppingCart:`ShoppingCart`,Shovel:`Shovel`,ShowerHead:`ShowerHead`,Shredder:`Shredder`,Shrimp:`Shrimp`,Shrink:`Shrink`,Shrub:`Shrub`,Shuffle:`Shuffle`,Sigma:`Sigma`,Signal:`Signal`,SignalHigh:`SignalHigh`,SignalLow:`SignalLow`,SignalMedium:`SignalMedium`,SignalZero:`SignalZero`,Signature:`Signature`,Signpost:`Signpost`,SignpostBig:`SignpostBig`,Siren:`Siren`,SkipBack:`SkipBack`,SkipForward:`SkipForward`,Skull:`Skull`,Slack:`Slack`,Slash:`Slash`,Slice:`Slice`,SlidersHorizontal:`SlidersHorizontal`,SlidersVertical:`SlidersVertical`,Smartphone:`Smartphone`,SmartphoneCharging:`SmartphoneCharging`,SmartphoneNfc:`SmartphoneNfc`,Smile:`Smile`,SmilePlus:`SmilePlus`,Snail:`Snail`,Snowflake:`Snowflake`,SoapDispenserDroplet:`SoapDispenserDroplet`,Sofa:`Sofa`,Soup:`Soup`,Space:`Space`,Spade:`Spade`,Sparkle:`Sparkle`,Sparkles:`Sparkles`,Speaker:`Speaker`,Speech:`Speech`,SpellCheck:`SpellCheck`,SpellCheck2:`SpellCheck2`,Spline:`Spline`,SplinePointer:`SplinePointer`,Split:`Split`,SprayCan:`SprayCan`,Sprout:`Sprout`,Square:`Square`,SquareActivity:`SquareActivity`,SquareArrowDown:`SquareArrowDown`,SquareArrowDownLeft:`SquareArrowDownLeft`,SquareArrowDownRight:`SquareArrowDownRight`,SquareArrowLeft:`SquareArrowLeft`,SquareArrowOutDownLeft:`SquareArrowOutDownLeft`,SquareArrowOutDownRight:`SquareArrowOutDownRight`,SquareArrowOutUpLeft:`SquareArrowOutUpLeft`,SquareArrowOutUpRight:`SquareArrowOutUpRight`,SquareArrowRight:`SquareArrowRight`,SquareArrowUp:`SquareArrowUp`,SquareArrowUpLeft:`SquareArrowUpLeft`,SquareArrowUpRight:`SquareArrowUpRight`,SquareAsterisk:`SquareAsterisk`,SquareBottomDashedScissors:`SquareBottomDashedScissors`,SquareChartGantt:`SquareChartGantt`,SquareCheck:`SquareCheck`,SquareCheckBig:`SquareCheckBig`,SquareChevronDown:`SquareChevronDown`,SquareChevronLeft:`SquareChevronLeft`,SquareChevronRight:`SquareChevronRight`,SquareChevronUp:`SquareChevronUp`,SquareCode:`SquareCode`,SquareDashed:`SquareDashed`,SquareDashedBottom:`SquareDashedBottom`,SquareDashedBottomCode:`SquareDashedBottomCode`,SquareDashedKanban:`SquareDashedKanban`,SquareDashedMousePointer:`SquareDashedMousePointer`,SquareDashedTopSolid:`SquareDashedTopSolid`,SquareDivide:`SquareDivide`,SquareDot:`SquareDot`,SquareEqual:`SquareEqual`,SquareFunction:`SquareFunction`,SquareKanban:`SquareKanban`,SquareLibrary:`SquareLibrary`,SquareM:`SquareM`,SquareMenu:`SquareMenu`,SquareMinus:`SquareMinus`,SquareMousePointer:`SquareMousePointer`,SquareParking:`SquareParking`,SquareParkingOff:`SquareParkingOff`,SquarePen:`SquarePen`,SquarePercent:`SquarePercent`,SquarePi:`SquarePi`,SquarePilcrow:`SquarePilcrow`,SquarePlay:`SquarePlay`,SquarePlus:`SquarePlus`,SquarePower:`SquarePower`,SquareRadical:`SquareRadical`,SquareRoundCorner:`SquareRoundCorner`,SquareScissors:`SquareScissors`,SquareSigma:`SquareSigma`,SquareSlash:`SquareSlash`,SquareSplitHorizontal:`SquareSplitHorizontal`,SquareSplitVertical:`SquareSplitVertical`,SquareSquare:`SquareSquare`,SquareStack:`SquareStack`,SquareTerminal:`SquareTerminal`,SquareUser:`SquareUser`,SquareUserRound:`SquareUserRound`,SquareX:`SquareX`,SquaresExclude:`SquaresExclude`,SquaresIntersect:`SquaresIntersect`,SquaresSubtract:`SquaresSubtract`,SquaresUnite:`SquaresUnite`,Squircle:`Squircle`,Squirrel:`Squirrel`,Stamp:`Stamp`,Star:`Star`,StarHalf:`StarHalf`,StarOff:`StarOff`,StepBack:`StepBack`,StepForward:`StepForward`,Stethoscope:`Stethoscope`,Sticker:`Sticker`,StickyNote:`StickyNote`,Store:`Store`,StretchHorizontal:`StretchHorizontal`,StretchVertical:`StretchVertical`,Strikethrough:`Strikethrough`,Subscript:`Subscript`,Sun:`Sun`,SunDim:`SunDim`,SunMedium:`SunMedium`,SunMoon:`SunMoon`,SunSnow:`SunSnow`,Sunrise:`Sunrise`,Sunset:`Sunset`,Superscript:`Superscript`,SwatchBook:`SwatchBook`,SwissFranc:`SwissFranc`,SwitchCamera:`SwitchCamera`,Sword:`Sword`,Swords:`Swords`,Syringe:`Syringe`,Table:`Table`,Table2:`Table2`,TableCellsMerge:`TableCellsMerge`,TableCellsSplit:`TableCellsSplit`,TableColumnsSplit:`TableColumnsSplit`,TableOfContents:`TableOfContents`,TableProperties:`TableProperties`,TableRowsSplit:`TableRowsSplit`,Tablet:`Tablet`,TabletSmartphone:`TabletSmartphone`,Tablets:`Tablets`,Tag:`Tag`,Tags:`Tags`,Tally1:`Tally1`,Tally2:`Tally2`,Tally3:`Tally3`,Tally4:`Tally4`,Tally5:`Tally5`,Tangent:`Tangent`,Target:`Target`,Telescope:`Telescope`,Tent:`Tent`,TentTree:`TentTree`,Terminal:`Terminal`,TestTube:`TestTube`,TestTubeDiagonal:`TestTubeDiagonal`,TestTubes:`TestTubes`,Text:`Text`,TextCursor:`TextCursor`,TextCursorInput:`TextCursorInput`,TextQuote:`TextQuote`,TextSearch:`TextSearch`,TextSelect:`TextSelect`,Theater:`Theater`,Thermometer:`Thermometer`,ThermometerSnowflake:`ThermometerSnowflake`,ThermometerSun:`ThermometerSun`,ThumbsDown:`ThumbsDown`,ThumbsUp:`ThumbsUp`,Ticket:`Ticket`,TicketCheck:`TicketCheck`,TicketMinus:`TicketMinus`,TicketPercent:`TicketPercent`,TicketPlus:`TicketPlus`,TicketSlash:`TicketSlash`,TicketX:`TicketX`,Tickets:`Tickets`,TicketsPlane:`TicketsPlane`,Timer:`Timer`,TimerOff:`TimerOff`,TimerReset:`TimerReset`,ToggleLeft:`ToggleLeft`,ToggleRight:`ToggleRight`,Toilet:`Toilet`,Tornado:`Tornado`,Torus:`Torus`,Touchpad:`Touchpad`,TouchpadOff:`TouchpadOff`,TowerControl:`TowerControl`,ToyBrick:`ToyBrick`,Tractor:`Tractor`,TrafficCone:`TrafficCone`,TrainFront:`TrainFront`,TrainFrontTunnel:`TrainFrontTunnel`,TrainTrack:`TrainTrack`,TramFront:`TramFront`,Transgender:`Transgender`,Trash:`Trash`,Trash2:`Trash2`,TreeDeciduous:`TreeDeciduous`,TreePalm:`TreePalm`,TreePine:`TreePine`,Trees:`Trees`,Trello:`Trello`,TrendingDown:`TrendingDown`,TrendingUp:`TrendingUp`,TrendingUpDown:`TrendingUpDown`,Triangle:`Triangle`,TriangleAlert:`TriangleAlert`,TriangleDashed:`TriangleDashed`,TriangleRight:`TriangleRight`,Trophy:`Trophy`,Truck:`Truck`,TruckElectric:`TruckElectric`,Turtle:`Turtle`,Tv:`Tv`,TvMinimal:`TvMinimal`,TvMinimalPlay:`TvMinimalPlay`,Twitch:`Twitch`,Twitter:`Twitter`,Type:`Type`,TypeOutline:`TypeOutline`,Umbrella:`Umbrella`,UmbrellaOff:`UmbrellaOff`,Underline:`Underline`,Undo:`Undo`,Undo2:`Undo2`,UndoDot:`UndoDot`,UnfoldHorizontal:`UnfoldHorizontal`,UnfoldVertical:`UnfoldVertical`,Ungroup:`Ungroup`,University:`University`,Unlink:`Unlink`,Unlink2:`Unlink2`,Unplug:`Unplug`,Upload:`Upload`,Usb:`Usb`,User:`User`,UserCheck:`UserCheck`,UserCog:`UserCog`,UserLock:`UserLock`,UserMinus:`UserMinus`,UserPen:`UserPen`,UserPlus:`UserPlus`,UserRound:`UserRound`,UserRoundCheck:`UserRoundCheck`,UserRoundCog:`UserRoundCog`,UserRoundMinus:`UserRoundMinus`,UserRoundPen:`UserRoundPen`,UserRoundPlus:`UserRoundPlus`,UserRoundSearch:`UserRoundSearch`,UserRoundX:`UserRoundX`,UserSearch:`UserSearch`,UserX:`UserX`,Users:`Users`,UsersRound:`UsersRound`,Utensils:`Utensils`,UtensilsCrossed:`UtensilsCrossed`,UtilityPole:`UtilityPole`,Variable:`Variable`,Vault:`Vault`,Vegan:`Vegan`,VenetianMask:`VenetianMask`,Venus:`Venus`,VenusAndMars:`VenusAndMars`,Vibrate:`Vibrate`,VibrateOff:`VibrateOff`,Video:`Video`,VideoOff:`VideoOff`,Videotape:`Videotape`,View:`View`,Voicemail:`Voicemail`,Volleyball:`Volleyball`,Volume:`Volume`,Volume1:`Volume1`,Volume2:`Volume2`,VolumeOff:`VolumeOff`,VolumeX:`VolumeX`,Vote:`Vote`,Wallet:`Wallet`,WalletCards:`WalletCards`,WalletMinimal:`WalletMinimal`,Wallpaper:`Wallpaper`,Wand:`Wand`,WandSparkles:`WandSparkles`,Warehouse:`Warehouse`,WashingMachine:`WashingMachine`,Watch:`Watch`,Waves:`Waves`,WavesLadder:`WavesLadder`,Waypoints:`Waypoints`,Webcam:`Webcam`,Webhook:`Webhook`,WebhookOff:`WebhookOff`,Weight:`Weight`,Wheat:`Wheat`,WheatOff:`WheatOff`,WholeWord:`WholeWord`,Wifi:`Wifi`,WifiHigh:`WifiHigh`,WifiLow:`WifiLow`,WifiOff:`WifiOff`,WifiPen:`WifiPen`,WifiZero:`WifiZero`,Wind:`Wind`,WindArrowDown:`WindArrowDown`,Wine:`Wine`,WineOff:`WineOff`,Workflow:`Workflow`,Worm:`Worm`,WrapText:`WrapText`,Wrench:`Wrench`,X:`X`,Youtube:`Youtube`,Zap:`Zap`,ZapOff:`ZapOff`,ZoomIn:`ZoomIn`,ZoomOut:`ZoomOut`,ArrowDown_0_1:`ArrowDown01`,ArrowDown_1_0:`ArrowDown10`,ArrowUp_0_1:`ArrowUp01`,ArrowUp_1_0:`ArrowUp10`,Axis_3d:`Axis3d`,BookUp_2:`BookUp2`,Building_2:`Building2`,Calendar_1:`Calendar1`,CalendarCheck_2:`CalendarCheck2`,CalendarMinus_2:`CalendarMinus2`,CalendarPlus_2:`CalendarPlus2`,CalendarX_2:`CalendarX2`,CircleSlash_2:`CircleSlash2`,Clock_1:`Clock1`,Clock_10:`Clock10`,Clock_11:`Clock11`,Clock_12:`Clock12`,Clock_2:`Clock2`,Clock_3:`Clock3`,Clock_4:`Clock4`,Clock_5:`Clock5`,Clock_6:`Clock6`,Clock_7:`Clock7`,Clock_8:`Clock8`,Clock_9:`Clock9`,Columns_2:`Columns2`,Columns_3:`Columns3`,Columns_3Cog:`Columns3Cog`,Columns_4:`Columns4`,Dice_1:`Dice1`,Dice_2:`Dice2`,Dice_3:`Dice3`,Dice_4:`Dice4`,Dice_5:`Dice5`,Dice_6:`Dice6`,Disc_2:`Disc2`,Disc_3:`Disc3`,FileAudio_2:`FileAudio2`,FileAxis_3d:`FileAxis3d`,FileBadge_2:`FileBadge2`,FileCheck_2:`FileCheck2`,FileCode_2:`FileCode2`,FileJson_2:`FileJson2`,FileKey_2:`FileKey2`,FileLock_2:`FileLock2`,FileMinus_2:`FileMinus2`,FilePlus_2:`FilePlus2`,FileSearch_2:`FileSearch2`,FileType_2:`FileType2`,FileVideo_2:`FileVideo2`,FileVolume_2:`FileVolume2`,FileX_2:`FileX2`,FlipHorizontal_2:`FlipHorizontal2`,FlipVertical_2:`FlipVertical2`,Flower_2:`Flower2`,FolderGit_2:`FolderGit2`,FolderSearch_2:`FolderSearch2`,Gamepad_2:`Gamepad2`,Grid_2x2:`Grid2x2`,Grid_2x2Check:`Grid2x2Check`,Grid_2x2Plus:`Grid2x2Plus`,Grid_2x2X:`Grid2x2X`,Grid_3x3:`Grid3x3`,Heading_1:`Heading1`,Heading_2:`Heading2`,Heading_3:`Heading3`,Heading_4:`Heading4`,Heading_5:`Heading5`,Heading_6:`Heading6`,Layers_2:`Layers2`,Link_2:`Link2`,Link_2Off:`Link2Off`,Maximize_2:`Maximize2`,Minimize_2:`Minimize2`,MousePointer_2:`MousePointer2`,Move_3d:`Move3d`,MoveDiagonal_2:`MoveDiagonal2`,Music_2:`Music2`,Music_3:`Music3`,Music_4:`Music4`,Navigation_2:`Navigation2`,Navigation_2Off:`Navigation2Off`,Package_2:`Package2`,PictureInPicture_2:`PictureInPicture2`,Plug_2:`Plug2`,Redo_2:`Redo2`,Repeat_1:`Repeat1`,Repeat_2:`Repeat2`,Rotate_3d:`Rotate3d`,Rows_2:`Rows2`,Rows_3:`Rows3`,Rows_4:`Rows4`,Scale_3d:`Scale3d`,Settings_2:`Settings2`,Share_2:`Share2`,SpellCheck_2:`SpellCheck2`,Table_2:`Table2`,Tally_1:`Tally1`,Tally_2:`Tally2`,Tally_3:`Tally3`,Tally_4:`Tally4`,Tally_5:`Tally5`,Trash_2:`Trash2`,Undo_2:`Undo2`,Unlink_2:`Unlink2`,Volume_1:`Volume1`,Volume_2:`Volume2`},yr={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`,ExtraLarge:`xl`},br={..._r,...vr},xr={Gray:`gray`,Brand:`brand`,Error:`error`,Warning:`warning`,Success:`success`,GrayBlue:`gray-blue`,BlueLight:`blue-light`,Blue:`blue`,Indigo:`indigo`,Purple:`purple`,Pink:`pink`,Orange:`orange`},Sr=[`gray`,`brand`,`error`,`warning`,`success`,`gray-blue`,`blue-light`,`blue`,`indigo`,`purple`,`pink`,`orange`];function Cr(e,t,n){return Math.min(Math.max(e,t),n)}function wr(e){return Sr.map(t=>`.color--${t} {\n  ${e(t)}\n}`).join(`
`)}function Tr(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})}function Er(e){let t=Tr();return e?`${e}-${t}`:t}function Dr(e,t,n,r=`value`){t.has(r)&&t.get(r)!==void 0&&e.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:n},bubbles:!0,composed:!0}))}function Or(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function kr(e,t,n){if(e.style?.setProperty){e.style.setProperty(t,n);return}let r=(e.getAttribute(`style`)??``).trim(),i=`${t}: ${n}`,a=RegExp(`${Or(t)}\\s*:\\s*[^;]*`);if(a.test(r)){e.setAttribute(`style`,r.replace(a,i));return}let o=r.replace(/;$/,``).trim();e.setAttribute(`style`,o?`${o}; ${i}`:i)}var L=class extends Qn{constructor(){super(...arguments),this.role=`presentation`,this.size=yr.Medium}willUpdate(e){e.has(`size`)&&typeof this.size==`number`&&kr(this,`--icon-size`,`${this.size}px`),e.has(`strokeWidth`)&&this.strokeWidth!=null&&kr(this,`--icon-stroke-width`,`${this.strokeWidth}`)}};L.styles=lt`
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
  `,k([vn({type:String,reflect:!0})],L.prototype,`role`,void 0),k([vn({type:String,reflect:!0})],L.prototype,`size`,void 0),k([vn({type:Number,reflect:!0})],L.prototype,`strokeWidth`,void 0);var Ar=class extends L{render(){return Yt`
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

    `}};Ar.styles=L.styles,Ar=k([F(`quantic-icon-lucide-circle-check`)],Ar);var jr=class extends L{render(){return Yt`
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

    `}};jr.styles=L.styles,jr=k([F(`quantic-icon-lucide-circle-x`)],jr);var Mr=class extends L{render(){return Yt`
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

    `}};Mr.styles=L.styles,Mr=k([F(`quantic-icon-lucide-info`)],Mr);var Nr=class extends L{render(){return Yt`
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

    `}};Nr.styles=L.styles,Nr=k([F(`quantic-icon-lucide-triangle-alert`)],Nr);var Pr=class extends L{render(){return Yt`
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

    `}};Pr.styles=L.styles,Pr=k([F(`quantic-icon-lucide-x`)],Pr),I.ensureDefined(),Ar.ensureDefined(),jr.ensureDefined(),Mr.ensureDefined(),Nr.ensureDefined(),Pr.ensureDefined();var Fr=class extends nr(Qn,[`title`,``,`action`]){constructor(){super(...arguments),this.type=rr.Info,this.showCloseButton=!1,this.handleCloseClick=()=>{this.dispatchEvent(new Event(`close`,{bubbles:!0,composed:!0}))}}updated(e){super.updated(e),(e.has(`type`)||!this.hasAttribute(`role`))&&(this.setAttribute(`role`,this.type===rr.Error?`alert`:`status`),this.setAttribute(`aria-live`,this.type===rr.Error?`assertive`:`polite`),this.setAttribute(`aria-atomic`,`true`))}renderDefaultIcon(){switch(this.type){case rr.Success:return A`<quantic-icon-lucide-circle-check
          size="md"
        ></quantic-icon-lucide-circle-check>`;case rr.Error:return A`<quantic-icon-lucide-circle-x
          size="md"
        ></quantic-icon-lucide-circle-x>`;case rr.Warning:return A`<quantic-icon-lucide-triangle-alert
          size="md"
        ></quantic-icon-lucide-triangle-alert>`;case rr.Info:default:return A`<quantic-icon-lucide-info
          size="md"
        ></quantic-icon-lucide-info>`}}render(){return A`
      <div class="container">
        <span class="icon">
          <slot name="icon">${this.renderDefaultIcon()}</slot>
        </span>
        <div class="content">
          <slot name="title" class="title"></slot>
          <slot class="body"></slot>
          <slot name="action" class="action"></slot>
        </div>
        ${this.showCloseButton?A`<quantic-button
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
              </quantic-button>`:j}
      </div>
    `}};Fr.meta={tag:`quantic-alert`,description:`Inline alert banner with severity styles and optional dismiss action. Visibility is owned by the consumer.`,category:`feedback`,avoidWhen:[{when:`the message is transient and not tied to a place on the page`,useInstead:`quantic-toast`}],accessibility:{providedByComponent:[`announced through a live region`,`severity conveyed by icon as well as colour`],requiredFromConsumer:[`a title, so the message does not depend on colour alone`]},slots:{icon:{description:`Optional icon override. Defaults to a type-derived lucide icon.`},title:{description:`Optional bold title.`,copyRule:`heading`},"":{description:`Body content of the alert.`},action:{description:`Optional action element (e.g. a link or button).`,copyRule:`heading`}},relatedTo:[`quantic-toast`,`quantic-button`]},Fr.styles=lt`
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
  `,k([N({type:`AlertType`,options:Object.values(rr),default:rr.Info,reflect:!0,description:`Severity. Drives icon and color tokens.`})],Fr.prototype,`type`,void 0),k([N({type:`boolean`,attribute:`show-close-button`,default:`false`,description:`Shows a built-in close button. Click dispatches a "close" event.`})],Fr.prototype,`showCloseButton`,void 0),Fr=k([P(`close`,{description:`Fired when the user clicks the close button. The consumer is responsible for hiding the alert.`}),F(`quantic-alert`)],Fr);var{I:Ir}=un,Lr=e=>e,Rr=e=>e.strings===void 0,zr=()=>document.createComment(``),Br=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new Ir(r.insertBefore(zr(),i),r.insertBefore(zr(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=Lr(e).nextSibling;Lr(r).insertBefore(e,i),e=t}}}return n},Vr=(e,t,n=e)=>(e._$AI(t,n),e),Hr={},Ur=(e,t=Hr)=>e._$AH=t,Wr=e=>e._$AH,Gr=e=>{e._$AR(),e._$AA.remove()},Kr=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},qr=pr(class extends mr{constructor(e){if(super(e),e.type!==fr.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Wr(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=Vr(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=Vr(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=Vr(i[d],a[m]),Br(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=Vr(i[f],a[p]),Br(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=Kr(o,p,m),u=Kr(s,d,f)),l.has(s[d])){if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=Br(e,i[d]);Vr(t,a[p]),c[p]=t}else c[p]=Vr(n,a[p]),Br(e,i[d],n),i[t]=null;p++}else Gr(i[f]),f--}else Gr(i[d]),d++;for(;p<=m;){let t=Br(e,c[m+1]);Vr(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&Gr(e)}return this.ut=o,Ur(e,c),Xt}}),Jr=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Jr(e,t);return!0},Yr=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Xr=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),$r(t)}};function Zr(e){this._$AN===void 0?this._$AM=e:(Yr(this),this._$AM=e,Xr(this))}function Qr(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)Jr(r[e],!1),Yr(r[e]);else r!=null&&(Jr(r,!1),Yr(r))}else Jr(this,e)}}var $r=e=>{e.type==fr.CHILD&&(e._$AP??=Qr,e._$AQ??=Zr)},ei=class extends mr{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Xr(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Jr(this,e),Yr(this))}setValue(e){if(Rr(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},ti=()=>new ni,ni=class{},ri=new WeakMap,ii=pr(class extends ei{render(e){return j}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),j}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=ri.get(t);n===void 0&&(n=new WeakMap,ri.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?ri.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ai=Math.min,oi=Math.max,si=Math.round,ci=Math.floor,li=e=>({x:e,y:e}),ui={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function di(e,t,n){return oi(e,ai(t,n))}function fi(e,t){return typeof e==`function`?e(t):e}function pi(e){return e.split(`-`)[0]}function mi(e){return e.split(`-`)[1]}function hi(e){return e===`x`?`y`:`x`}function gi(e){return e===`y`?`height`:`width`}function _i(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function vi(e){return hi(_i(e))}function yi(e,t,n){n===void 0&&(n=!1);let r=mi(e),i=vi(e),a=gi(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Oi(o)),[o,Oi(o)]}function bi(e){let t=Oi(e);return[xi(e),t,xi(t)]}function xi(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var Si=[`left`,`right`],Ci=[`right`,`left`],wi=[`top`,`bottom`],Ti=[`bottom`,`top`];function Ei(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Ci:Si:t?Si:Ci;case`left`:case`right`:return t?wi:Ti;default:return[]}}function Di(e,t,n,r){let i=mi(e),a=Ei(pi(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(xi)))),a}function Oi(e){let t=pi(e);return ui[t]+e.slice(t.length)}function ki(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function Ai(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:ki(e)}function ji(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Mi(e,t,n){let{reference:r,floating:i}=e,a=_i(t),o=vi(t),s=gi(o),c=pi(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=mi(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Ni(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=fi(t,e),p=Ai(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=ji(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=ji(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Pi=50,Fi=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Ni},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Mi(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Pi&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Mi(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Ii=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=fi(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=pi(r),_=_i(o),v=pi(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Oi(o)]:bi(o)),x=p!==`none`;!d&&x&&b.push(...Di(o,m,p,y));let S=[o,...b],ee=await s.detectOverflow(t,h),te=[],C=i.flip?.overflows||[];if(l&&te.push(ee[g]),u){let e=yi(r,a,y);te.push(ee[e[0]],ee[e[1]])}if(C=[...C,{placement:r,overflows:te}],!te.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===_i(t)||C.every(e=>_i(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(x){let t=_i(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},Li=new Set([`left`,`top`]);async function Ri(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=pi(n),s=mi(n),c=_i(n)===`y`,l=Li.has(o)?-1:1,u=a&&c?-1:1,d=fi(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var zi=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Ri(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Bi=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=fi(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=_i(i),p=hi(f),m=u[p],h=u[f],g=(e,t)=>di(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}};function Vi(){return typeof window<`u`}function Hi(e){return Gi(e)?(e.nodeName||``).toLowerCase():`#document`}function Ui(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Wi(e){return((Gi(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Gi(e){return Vi()?e instanceof Node||e instanceof Ui(e).Node:!1}function Ki(e){return Vi()?e instanceof Element||e instanceof Ui(e).Element:!1}function qi(e){return Vi()?e instanceof HTMLElement||e instanceof Ui(e).HTMLElement:!1}function Ji(e){return!Vi()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Ui(e).ShadowRoot}function Yi(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=R(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Xi(e){return/^(table|td|th)$/.test(Hi(e))}function Zi(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Qi=/transform|translate|scale|rotate|perspective|filter/,$i=/paint|layout|strict|content/,ea=e=>!!e&&e!==`none`,ta;function na(e){let t=Ki(e)?R(e):e;return ea(t.transform)||ea(t.translate)||ea(t.scale)||ea(t.rotate)||ea(t.perspective)||!ia()&&(ea(t.backdropFilter)||ea(t.filter))||Qi.test(t.willChange||``)||$i.test(t.contain||``)}function ra(e){let t=oa(e);for(;qi(t)&&!aa(t);){if(na(t))return t;if(Zi(t))return null;t=oa(t)}return null}function ia(){return ta??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),ta}function aa(e){return/^(html|body|#document)$/.test(Hi(e))}function R(e){return Ui(e).getComputedStyle(e)}function z(e){return Ki(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function oa(e){if(Hi(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Ji(e)&&e.host||Wi(e);return Ji(t)?t.host:t}function sa(e){let t=oa(e);return aa(t)?(e.ownerDocument||e).body:qi(t)&&Yi(t)?t:sa(t)}function ca(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=sa(e),i=r===e.ownerDocument?.body,a=Ui(r);if(i){let e=la(a);return t.concat(a,a.visualViewport||[],Yi(r)?r:[],e&&n?ca(e):[])}return t.concat(r,ca(r,[],n))}function la(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ua(e){let t=R(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=qi(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=si(n)!==a||si(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function da(e){return Ki(e)?e:e.contextElement}function fa(e){let t=da(e);if(!qi(t))return li(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=ua(t),o=(a?si(n.width):n.width)/r,s=(a?si(n.height):n.height)/i;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}var pa=li(0);function ma(e){let t=Ui(e);return!ia()||!t.visualViewport?pa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ha(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===Ui(e)}function ga(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=da(e),o=li(1);t&&(r?Ki(r)&&(o=fa(r)):o=fa(e));let s=ha(a,n,r)?ma(a):li(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=Ui(a),t=Ki(r)?Ui(r):r,n=e,i=la(n);for(;i&&t!==n;){let e=fa(i),t=i.getBoundingClientRect(),r=R(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Ui(i),i=la(n)}}return ji({width:u,height:d,x:c,y:l})}function _a(e,t){let n=z(e).scrollLeft;return t?t.left+n:ga(Wi(e)).left+n}function va(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-_a(e,n),y:n.top+t.scrollTop}}function ya(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Wi(r),s=t?Zi(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=li(1),u=li(0),d=qi(r);if((d||!a)&&((Hi(r)!==`body`||Yi(o))&&(c=z(r)),d)){let e=ga(r);l=fa(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?va(o,c):li(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ba(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function xa(e){let t=z(e),n=e.ownerDocument.body,r=oi(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=oi(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+_a(e),o=-t.scrollTop;return R(n).direction===`rtl`&&(a+=oi(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var Sa=25;function Ca(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=Ui(e),a=Wi(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!ia()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(_a(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=Sa&&(s-=o)}return{width:s,height:c,x:l,y:u}}function wa(e,t){let n=ga(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=fa(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Ta(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Ca(e,n,t);else if(t===`document`)r=xa(Wi(e));else if(Ki(t))r=wa(t,n);else{let n=ma(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return ji(r)}function Ea(e,t){let n=t.get(e);if(n)return n;let r=ca(e,[],!1).filter(e=>Ki(e)&&Hi(e)!==`body`),i=null,a=R(e).position===`fixed`,o=a?oa(e):e;for(;Ki(o)&&!aa(o);){let e=R(o),t=na(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=oa(o)}return t.set(e,r),r}function Da(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Zi(t)?[]:Ea(t,this._c):[].concat(n),r],o=Ta(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=Ta(t,a[e],i);s=oi(n.top,s),c=ai(n.right,c),l=ai(n.bottom,l),u=oi(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Oa(e){let{width:t,height:n}=ua(e);return{width:t,height:n}}function ka(e,t,n){let r=qi(t),i=Wi(t),a=n===`fixed`,o=ga(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=li(0);if((r||!a)&&((Hi(t)!==`body`||Yi(i))&&(s=z(t)),r)){let e=ga(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=_a(i));let l=i&&!r&&!a?va(i,s):li(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function Aa(e){return R(e).position===`static`}function ja(e,t){if(!qi(e)||R(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Wi(e)===n&&(n=n.ownerDocument.body),n}function Ma(e,t){let n=Ui(e);if(Zi(e))return n;if(!qi(e)){let t=oa(e);for(;t&&!aa(t);){if(Ki(t)&&!Aa(t))return t;t=oa(t)}return n}let r=ja(e,t);for(;r&&Xi(r)&&Aa(r);)r=ja(r,t);return r&&aa(r)&&Aa(r)&&!na(r)?n:r||ra(e)||n}var Na=async function(e){let t=this.getOffsetParent||Ma,n=this.getDimensions,r=await n(e.floating);return{reference:ka(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Pa(e){return R(e).direction===`rtl`}var Fa={convertOffsetParentRelativeRectToViewportRelativeRect:ya,getDocumentElement:Wi,getClippingRect:Da,getOffsetParent:Ma,getElementRects:Na,getClientRects:ba,getDimensions:Oa,getScale:fa,isElement:Ki,isRTL:Pa};function Ia(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function La(e,t,n){let r=null,i,a=Wi(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=ci(d),h=ci(a.clientWidth-(u+f)),g=ci(a.clientHeight-(d+p)),_=ci(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:oi(0,ai(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!Ia(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=Ui(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function Ra(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=da(e),u=i||a?[...l?ca(l):[],...t?ca(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?La(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?ga(e):null;c&&g();function g(){let t=ga(e);h&&!Ia(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var za=zi,Ba=Bi,Va=Ii,Ha=(e,t,n)=>{let r=new Map,i=n??{},a={...Fa,...i.platform,_c:r};return Fi(e,t,{...i,platform:a})};function Ua(e){class t extends e{constructor(){super(...arguments),this.ariaLabel=null,this.ariaDescription=null,this.ariaInvalid=null}getA11yAttributes(e){let t=e?.label??this.ariaLabel,n=e?.description??this.ariaDescription,r=e?.invalid??this.ariaInvalid===`true`;return{label:gr(t||void 0),description:gr(n||void 0),invalid:gr(r?`true`:void 0)}}}return k([N({type:`string`,attribute:`aria-label`,description:`Accessible label for the component (aria-label).`})],t.prototype,`ariaLabel`,void 0),k([N({type:`string`,attribute:`aria-description`,description:`Accessible description bound directly to aria-description.`})],t.prototype,`ariaDescription`,void 0),k([N({type:`string`,attribute:`aria-invalid`,description:`Marks the component invalid for assistive technologies (aria-invalid).`})],t.prototype,`ariaInvalid`,void 0),t}var Wa={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},Ga=class extends L{render(){return Yt`
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

    `}};Ga.styles=L.styles,Ga=k([F(`quantic-icon-lucide-chevron-down`)],Ga);var Ka=class extends L{render(){return Yt`
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

    `}};Ka.styles=L.styles,Ka=k([F(`quantic-icon-lucide-circle-alert`)],Ka),Ga.ensureDefined(),Ka.ensureDefined();var qa={xs:yr.ExtraSmall,sm:yr.ExtraSmall,md:yr.Small,lg:yr.Medium},Ja=e=>qa[e]??yr.Small,Ya=e=>A`<quantic-icon-lucide-circle-alert
    size=${Ja(e)}
    class="error-icon"
  ></quantic-icon-lucide-circle-alert>`,Xa=(e,t={})=>A`<quantic-icon-lucide-chevron-down
    size=${Ja(e)}
    class="suffix-icon"
    @click=${t.click}
    @mousedown=${t.mousedown}
  ></quantic-icon-lucide-chevron-down>`,Za={xs:{font:`13px`,block:`var(--quantic-spacing-xxs)`,inline:`var(--quantic-spacing-2)`},sm:{font:`var(--quantic-font-size-body-sm)`,block:`var(--quantic-spacing-sm)`,inline:`var(--quantic-spacing-2)`},md:{font:`var(--quantic-font-size-body-md)`,block:`var(--quantic-spacing-md)`,inline:`var(--quantic-spacing-3)`},lg:{font:`var(--quantic-font-size-body-lg)`,block:`var(--quantic-spacing-3)`,inline:`var(--quantic-spacing-4)`}};Object.keys(Za);function Qa(e,t){let n=t=>ct(`--quantic-component-${e}-${t}`),r=ct(`var(--quantic-component-${e}-border-radius, var(--quantic-radius-sm))`),i=ct(`var(--quantic-component-${e}-border-color, var(--quantic-border-primary))`),a=Object.entries(Za).map(([t,{font:n,block:r,inline:i}])=>`
        .main.size--${t} {
          font-size: var(--quantic-component-${e}-font-size, ${n});
          padding: var(--quantic-component-${e}-padding-block, ${r})
            var(--quantic-component-${e}-padding-inline, ${i});
        }`).join(`
`);return lt`
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
      min-width: var(${n(`min-width`)}, ${ct(t)});
      font-family: var(--quantic-font-family-body);
      border: 1px solid ${i};
      border-radius: ${r};
      color: var(${n(`color`)}, var(--quantic-text-primary));
      background-color: var(${n(`bg`)}, var(--quantic-bg-primary));
      transition:
        border-color 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out;
    }

    ${ct(a)}

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
  `}var $a=class extends Ua(Qn){constructor(){super(),this.listboxId=Er(`combobox-listbox`),this.value=``,this.name=``,this.placeholder=``,this.options=[],this.size=Wa.Medium,this.disabled=!1,this.required=!1,this.invalid=!1,this.emptyLabel=`No results`,this.allowCustomValue=!1,this._open=!1,this._inputValue=``,this._activeIndex=-1,this._inputRef=ti(),this._listboxRef=ti(),this.internals=this.attachInternals()}updated(e){let t=e.has(`value`),n=e.has(`options`),r=e.has(`allowCustomValue`);if(t||r||n&&!this._open){let e=this.options.find(e=>e.value===this.value);this._inputValue=e?e.label:this.allowCustomValue?this.value:``}e.has(`value`)&&this.internals.setFormValue(this.value),(e.has(`value`)||e.has(`required`))&&this.updateValidity(),e.has(`options`)&&this._open&&(this._activeIndex=-1),e.has(`_activeIndex`)&&this._activeIndex>=0&&this.shadowRoot?.querySelectorAll(`[role="option"]`)[this._activeIndex]?.scrollIntoView({block:`nearest`})}get filteredOptions(){if(!this._inputValue)return this.options;let e=this.filterFn??((e,t)=>e.label.toLowerCase().includes(t.toLowerCase()));return this.options.filter(t=>e(t,this._inputValue))}firstNavigableIndex(){return this.filteredOptions.findIndex(e=>!e.disabled)}lastNavigableIndex(){let e=this.filteredOptions;for(let t=e.length-1;t>=0;t--)if(!e[t].disabled)return t;return-1}nextNavigableIndex(e,t){let n=this.filteredOptions,r=e+t;for(;r>=0&&r<n.length;){if(!n[r].disabled)return r;r+=t}return e}async openList(){this._open||this.disabled||(this._open=!0,this._activeIndex=-1,await this.updateComplete,this.positionListbox())}closeList(e=!1){if(this._open){if(this._open=!1,this._activeIndex=-1,this.cleanup?.(),this.cleanup=void 0,e&&(this.allowCustomValue||!this._inputValue.trim()))this.commitInputValue();else{let e=this.options.find(e=>e.value===this.value);this._inputValue=e?.label??(this.allowCustomValue?this.value:``)}}}commitInputValue(){let e=this._inputValue.trim();this._inputValue=e,e!==this.value&&(this.value=e,this.internals.setFormValue(e),this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:e},bubbles:!0,composed:!0})))}positionListbox(){let e=this._listboxRef.value;e&&(this.cleanup=Ra(this,e,async()=>{if(!e)return;let{x:t,y:n}=await Ha(this,e,{placement:`bottom-start`,middleware:[za(4),Va(),Ba({padding:8})],strategy:`absolute`});Object.assign(e.style,{left:`${t}px`,top:`${n}px`,width:`${this.getBoundingClientRect().width}px`})}))}selectOption(e){this.value=e.value,this._inputValue=e.label,this.internals.setFormValue(e.value),this._open=!1,this._activeIndex=-1,this.cleanup?.(),this.cleanup=void 0,this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:this.value},bubbles:!0,composed:!0})),this._inputRef.value?.focus()}handleInput(e){let t=e.target;this._inputValue=t.value,this._activeIndex=-1,this._open||this.openList(),this.dispatchEvent(new CustomEvent(`input-changed`,{detail:{value:this._inputValue},bubbles:!0,composed:!0}))}handleKeyDown(e){switch(e.key){case`ArrowDown`:e.preventDefault(),this._open?this._activeIndex=this.nextNavigableIndex(this._activeIndex,1):this.openList().then(()=>{this._activeIndex=this.firstNavigableIndex()});break;case`ArrowUp`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.nextNavigableIndex(this._activeIndex,-1);break;case`Home`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.firstNavigableIndex();break;case`End`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.lastNavigableIndex();break;case`Enter`:if(this._open&&this._activeIndex>=0){let t=this.filteredOptions[this._activeIndex];t&&!t.disabled&&(e.preventDefault(),this.selectOption(t))}else this._open&&(this.allowCustomValue||!this._inputValue.trim())&&(e.preventDefault(),this.closeList(!0));break;case`Escape`:e.preventDefault(),this.closeList();break;case`Tab`:this.closeList(!0)}}handleBlur(){this.closeList(!0),this.dispatchEvent(new Event(`blur`,{bubbles:!0,composed:!0}))}handleFocus(){this.dispatchEvent(new Event(`focus`,{bubbles:!0,composed:!0}))}handleInputClick(){this.openList()}handleChevronMouseDown(e){e.preventDefault(),this._open?this.closeList():(this._inputRef.value?.focus(),this.openList())}formResetCallback(){this.value=``,this._inputValue=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e);let t=this.options.find(t=>t.value===e);this._inputValue=t?.label??(this.allowCustomValue?e:``)}formDisabledCallback(e){this.disabled=e}disconnectedCallback(){super.disconnectedCallback(),this.cleanup?.()}updateValidity(){let e=this._inputRef.value;e&&this.internals.setValidity(e.validity,e.validationMessage,e)}get activeDescendant(){if(!(!this._open||this._activeIndex<0))return`${this.listboxId}-opt-${this._activeIndex}`}render(){let e=hr({main:!0,[`size--${this.size}`]:!0}),t=hr({listbox:!0,"is-open":this._open,[`size--${this.size}`]:!0}),n=this.getA11yAttributes({invalid:this.invalid}),r=this.filteredOptions;return A`
      <div class=${e}>
        <slot name="prefix"></slot>
        <input
          ${ii(this._inputRef)}
          class="input"
          role="combobox"
          aria-expanded=${this._open?`true`:`false`}
          aria-haspopup="listbox"
          aria-autocomplete="list"
          aria-controls=${this.listboxId}
          aria-activedescendant=${gr(this.activeDescendant)}
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
        ${this.invalid?Ya(this.size):A`<slot name="suffix"
                >${Xa(this.size,{mousedown:this.handleChevronMouseDown})}</slot
              >`}
      </div>

      <ul
        ${ii(this._listboxRef)}
        id=${this.listboxId}
        role="listbox"
        class=${t}
        @mousedown=${e=>e.preventDefault()}
      >
        ${r.length===0?A`<li
                class="option-empty"
                role="option"
                aria-disabled="true"
                aria-selected="false"
              >
                ${this.emptyLabel}
              </li>`:qr(r,e=>e.value,(e,t)=>A`
                  <li
                    id=${`${this.listboxId}-opt-${t}`}
                    role="option"
                    class=${hr({option:!0,"is-active":t===this._activeIndex,"is-selected":e.value===this.value,"is-disabled":!!e.disabled})}
                    aria-selected=${e.value===this.value?`true`:`false`}
                    aria-disabled=${e.disabled?`true`:`false`}
                    @click=${()=>this.handleOptionClick(e)}
                  >
                    <span class="option-label">${e.label}</span>
                  </li>
                `)}
      </ul>
    `}handleOptionClick(e){e.disabled||this.selectOption(e)}};$a.meta={tag:`quantic-combobox`,description:`Text input that filters a list of options as the user types. Form-associated. Use for large option sets or anywhere a plain <select> is inadequate. Wrap in quantic-combobox-field to add a label and validation messaging.`,category:`form`,avoidWhen:[{when:`the option set is short and fixed`,useInstead:`quantic-select`}],accessibility:{providedByComponent:[`aria-expanded and aria-selected`,`arrow keys and Escape`,`form association`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{prefix:{description:`Leading content (e.g. icon).`},suffix:{description:`Trailing content, replacing the default chevron.`}},relatedTo:[`quantic-combobox-field`,`quantic-select`,`quantic-field`]},$a.formAssociated=!0,$a.styles=[Qa(`combobox`,`6em`),lt`
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
    `],k([N({type:`string`,default:``,reflect:!0,description:`Currently selected value submitted with the form.`})],$a.prototype,`value`,void 0),k([N({type:`string`,description:`Name submitted with form data.`})],$a.prototype,`name`,void 0),k([N({type:`string`,description:`Placeholder shown when no option is selected.`,copyRule:`placeholder`})],$a.prototype,`placeholder`,void 0),k([N({type:`ComboboxOption[]`,default:`[]`,description:`Options to display. Each item must have a label (display text) and value (form value). Set this prop reactively to implement async/server-side filtering.`})],$a.prototype,`options`,void 0),k([N({type:`ComboboxSize`,options:Object.values(Wa),default:Wa.Medium,description:`Controls padding and font size.`})],$a.prototype,`size`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],$a.prototype,`disabled`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],$a.prototype,`required`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-combobox-field.`})],$a.prototype,`invalid`,void 0),k([N({type:`string`,default:`No results`,description:`Text shown in the listbox when no options match the input.`,copyRule:`empty-state`})],$a.prototype,`emptyLabel`,void 0),k([N({type:`boolean`,default:`false`,description:`When true, the user can type a value that does not match any option. The typed text is preserved on blur/Enter and surfaced through the value-changed event. When false (default), only values from the options list are accepted.`})],$a.prototype,`allowCustomValue`,void 0),k([N({type:`(option: ComboboxOption, inputValue: string) => boolean`,description:`Custom filter predicate. If omitted, defaults to case-insensitive substring match on option.label.`})],$a.prototype,`filterFn`,void 0),k([yn()],$a.prototype,`_open`,void 0),k([yn()],$a.prototype,`_inputValue`,void 0),k([yn()],$a.prototype,`_activeIndex`,void 0),$a=k([P(`value-changed`,{description:`Fired when the user selects an option from the list, clears the field, or commits a custom value when allowCustomValue is enabled.`,detail:`{ value: string }`}),P(`input-changed`,{description:`Fired on every keystroke in the text field. Use to drive async filtering by updating the options prop in response.`,detail:`{ value: string }`}),P(`focus`,{forwarded:!0}),P(`blur`,{forwarded:!0}),F(`quantic-combobox`)],$a);var eo=xr,to={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},no=class extends Qn{constructor(){super(...arguments),this.color=eo.Brand,this.size=to.Medium,this.rounded=!1,this.icon=!1}render(){return cr`
      <div class=${hr({main:!0,[`size--${this.size}`]:!0,[`color--${this.color}`]:!0,icon:this.icon,rounded:this.rounded})}>
        <slot name="before"></slot>
        <slot></slot>
        <slot name="after"></slot>
      </div>
    `}};no.meta={tag:`quantic-badge`,description:`Compact inline label for status, category, or count. Non-interactive — use quantic-button for clickable chips. Supports a wide color palette and an icon-only square mode.`,category:`display`,avoidWhen:[{when:`the label is dismissible or selectable`,useInstead:`quantic-tag`},{when:`the label is clickable`,useInstead:`quantic-button`},{when:`the value is a named system state`,useInstead:`quantic-status-badge`}],slots:{before:{description:`Content before the label (e.g. icon).`},"":{description:`Badge label text or icon.`},after:{description:`Content after the label.`}},relatedTo:[`quantic-tag`,`quantic-status-badge`]},no.styles=lt`
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

    ${ct(wr(e=>`
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
  `,k([N({type:`BadgeColor`,options:Object.values(eo),default:eo.Brand,description:`Semantic color. Use "error" for failures, "success" for passing states, "warning" for caution, "brand" (default) for neutral highlights.`})],no.prototype,`color`,void 0),k([N({type:`BadgeSize`,options:Object.values(to),default:to.Medium,description:`Controls padding and font size.`})],no.prototype,`size`,void 0),k([N({type:`boolean`,default:`false`,description:`Applies a fully rounded (pill) border radius.`})],no.prototype,`rounded`,void 0),k([N({type:`boolean`,default:`false`,description:`Square icon-only mode — equal padding on all sides.`})],no.prototype,`icon`,void 0),no=k([F(`quantic-badge`)],no);var ro=class extends Qn{constructor(){super(...arguments),this.ariaLabel=null}render(){return A`
      <div class="group" part="group" role="group" aria-label=${this.ariaLabel??`Actions`}>
        <slot></slot>
      </div>
    `}};ro.meta={tag:`quantic-action-group`,description:`A row of related actions sharing one accessible name and a consistent gap. Takes quantic-button, and quantic-dropdown-menu or quantic-popover when the trigger is a button. Wraps when the row runs out of width. Gap: --quantic-component-action-group-gap. Use quantic-button-bar when the buttons should read as one joined control.`,category:`action`,avoidWhen:[{when:`the buttons are segments of a single control`,useInstead:`quantic-button-bar`}],accessibility:{providedByComponent:[`role=group with one accessible name across the row`],requiredFromConsumer:[`an ariaLabel naming the group`]},slots:{"":{description:`quantic-button elements, or a quantic-dropdown-menu or quantic-popover triggered by one.`}},parts:{group:{description:`The flex container, for a column layout or a different alignment.`}},relatedTo:[`quantic-button`,`quantic-button-bar`,`quantic-dialog-actions`,`quantic-dropdown-menu`,`quantic-popover`]},ro.styles=lt`
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
  `,k([N({type:`string`,attribute:`aria-label`,description:`Accessible name for the group.`})],ro.prototype,`ariaLabel`,void 0),ro=k([F(`quantic-action-group`)],ro);var io=class extends Event{constructor(e,t,n,r){super(`context-request`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=n,this.subscribe=r??!1}};function ao(e){return e}var oo=class{constructor(e,t,n,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,t.context!==void 0){let e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&=(this.unsubscribe(),void 0)}dispatchRequest(){this.host.dispatchEvent(new io(this.context,this.host,this.t,this.subscribe))}},so=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}},co=class extends Event{constructor(e,t){super(`context-provider`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}},lo=class extends so{constructor(e,t,n){super(t.context===void 0?n:t.initialValue),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:n}]of this.subscriptions)t.has(e)||(t.add(e),n.dispatchEvent(new io(this.context,n,e,!0)));e.stopPropagation()},this.host=e,this.context=t.context===void 0?t:t.context,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener(`context-request`,this.onContextRequest),this.host.addEventListener(`context-provider`,this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new co(this.context,this.host))}};function uo({context:e}){return(t,n)=>{let r=new WeakMap;if(typeof n==`object`)return{get(){return t.get.call(this)},set(e){return r.get(this).setValue(e),t.set.call(this,e)},init(t){return r.set(this,new lo(this,{context:e,initialValue:t})),t}};{t.constructor.addInitializer((t=>{r.set(t,new lo(t,{context:e}))}));let i=Object.getOwnPropertyDescriptor(t,n),a;if(i===void 0){let e=new WeakMap;a={get(){return e.get(this)},set(t){r.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=i.set;a={...i,set(t){r.get(this).setValue(t),e?.call(this,t)}}}Object.defineProperty(t,n,a);return}}}function fo({context:e,subscribe:t}){return(n,r)=>{typeof r==`object`?r.addInitializer((function(){new oo(this,{context:e,callback:e=>{n.set.call(this,e)},subscribe:t})})):n.constructor.addInitializer((n=>{new oo(n,{context:e,callback:e=>{n[r]=e},subscribe:t})}))}}var po={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},mo=ao(`button-bar.size`),ho={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1,Home:`first`,End:`last`};function go(e,t){if(!e.length)return null;if(t){let t=e.findIndex(e=>e.tabbable);if(t!==-1)return t}let n=e.findIndex(e=>e.active);return n===-1?0:n}function _o(e,t,n){let r=ho[e];return r===void 0||n<2||t<0||t>=n?null:r===`first`?0:r===`last`?n-1:(t+r+n)%n}var vo=`quantic-button-bar-item, quantic-button-group-item`,yo=class extends Qn{constructor(){super(...arguments),this.size=po.Medium,this.ariaLabel=null,this.hasSynced=!1,this.defaultLabel=`Button bar`}connectedCallback(){super.connectedCallback(),this.disabledObserver=new MutationObserver(()=>this.syncFocusStop()),this.disabledObserver.observe(this,{attributeFilter:[`disabled`],subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.disabledObserver?.disconnect(),this.disabledObserver=void 0}get items(){return[...this.querySelectorAll(vo)].filter(e=>e.parentElement===this&&!e.disabled)}setFocusStop(e,t){e.forEach((e,n)=>{e.tabbable=n===t})}syncFocusStop(){let e=this.items,t=go(e,this.hasSynced);t!==null&&(this.hasSynced=!0,this.setFocusStop(e,t))}handleFocusIn(e){let t=this.items,n=t.findIndex(t=>t.contains(e.target));n!==-1&&this.setFocusStop(t,n)}handleKeydown(e){let t=this.items,n=t.findIndex(t=>t.contains(e.target)),r=_o(e.key,n,t.length);r!==null&&(e.preventDefault(),this.setFocusStop(t,r),t[r].focus())}render(){return A`
      <div
        class="container"
        role="toolbar"
        aria-label=${this.ariaLabel??this.defaultLabel}
        @keydown=${this.handleKeydown}
        @focusin=${this.handleFocusIn}
      >
        <slot @slotchange=${()=>this.syncFocusStop()}></slot>
      </div>
    `}};yo.meta={tag:`quantic-button-bar`,description:`Toolbar of related buttons joined into one cohesive control, with shared sizing. Use for switching between views or modes, and for a compact run of icon actions. Items carry aria-pressed via active, so a set can behave as exclusive options or as independent toggles. Focus follows the toolbar pattern: one tab stop, arrow keys move between items, Home and End jump to the ends. Prefer quantic-button for a standalone action, and quantic-tabs when each segment reveals a panel.`,category:`action`,avoidWhen:[{when:`the buttons are unrelated actions rather than segments of one control`,useInstead:`quantic-action-group`}],accessibility:{providedByComponent:[`one accessible name for the bar`,`arrow keys move between items`],requiredFromConsumer:[`an ariaLabel naming what the bar controls`]},slots:{"":{description:`One or more quantic-button-bar-item elements.`}},relatedTo:[`quantic-button`]},yo.styles=lt`
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
  `,k([uo({context:mo}),N({type:`ButtonBarSize`,options:Object.values(po),default:po.Medium,description:`Size applied to all child items via context.`})],yo.prototype,`size`,void 0),k([N({type:`string`,attribute:`aria-label`,description:`Accessible label for the group.`})],yo.prototype,`ariaLabel`,void 0),yo=k([F(`quantic-button-bar`)],yo);var bo=class extends Qn{constructor(){super(...arguments),this.tabbable=!0,this.disabled=!1,this.active=!1,this.ariaLabel=null}focus(e){this.innerButton?.focus(e)}render(){return A`
      <button
        type="button"
        class=${hr({main:!0,[`size--${this.size}`]:!!this.size,"is-active":this.active})}
        tabindex=${this.disabled||!this.tabbable?-1:0}
        ?disabled=${this.disabled}
        aria-pressed=${this.active?`true`:`false`}
        aria-label=${gr(this.ariaLabel??void 0)}
      >
        <div class="content">
          <slot></slot>
        </div>
      </button>
    `}};bo.meta={tag:`quantic-button-bar-item`,description:`Single segment within a quantic-button-bar. Renders as a native button with shared sizing from the parent context and a pressed state via active.`,category:`action`,subComponentOf:`quantic-button-bar`,slots:{"":{description:`Button label or icon content.`}},relatedTo:[`quantic-button-bar`,`quantic-button`]},bo.styles=lt`
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
  `,k([fo({context:mo,subscribe:!0})],bo.prototype,`size`,void 0),k([yn()],bo.prototype,`tabbable`,void 0),k([xn(`button`)],bo.prototype,`innerButton`,void 0),k([N({type:`boolean`,default:`false`,description:`Prevents interaction and reduces opacity.`,reflect:!0})],bo.prototype,`disabled`,void 0),k([N({type:`boolean`,default:`false`,description:`Marks this item as the currently selected/active option.`,reflect:!0})],bo.prototype,`active`,void 0),k([N({type:`string`,attribute:`aria-label`,description:`Accessible label for the inner button. Required when the item holds only an icon.`})],bo.prototype,`ariaLabel`,void 0),bo=k([F(`quantic-button-bar-item`)],bo);var xo={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},So=class extends Ua(Qn){constructor(){super(),this.checked=!1,this.required=!1,this.disabled=!1,this.invalid=!1,this.indeterminate=!1,this.label=``,this.name=``,this.size=xo.Medium,this.defaultChecked=!1,this.defaultIndeterminate=!1,this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.defaultChecked=this.hasAttribute(`checked`),this.defaultIndeterminate=this.hasAttribute(`indeterminate`)}forwardNative(e){let t=e.target;this.checked=t.checked,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}updated(e){super.updated(e);let t=this.renderRoot.querySelector(`input`);t&&(t.indeterminate=this.indeterminate,e.has(`checked`)&&(t.checked=this.checked)),e.has(`checked`)&&this.internals.setFormValue(this.checked?`on`:null)}dispatchValueChanged(e){this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{checked:this.checked,indeterminate:this.indeterminate},bubbles:!0,composed:!0}))}formResetCallback(){let e=this.renderRoot.querySelector(`input`);this.checked=this.defaultChecked,this.indeterminate=this.defaultIndeterminate,this.internals.setFormValue(this.defaultChecked?`on`:null),e&&(e.checked=this.defaultChecked,e.indeterminate=this.defaultIndeterminate)}formStateRestoreCallback(e){this.checked=e===`on`,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}get computedLabel(){return this.ariaLabel||this.label}render(){let e=hr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({label:this.computedLabel,invalid:this.invalid});return A`
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
    `}};So.meta={tag:`quantic-checkbox`,description:`Form-associated checkbox for selecting one or more options from a set. Supports checked, indeterminate, and disabled states with full form integration.`,category:`form`,avoidWhen:[{when:`the control applies a setting immediately rather than on submit`,useInstead:`quantic-toggle`}],accessibility:{providedByComponent:[`form association`,`Space toggles`,`checked and indeterminate state reflected`],requiredFromConsumer:[`a label, via the label prop or by wrapping in quantic-field`]},slots:{"":{description:`Label content. Falls back to the label property if empty.`}},relatedTo:[`quantic-field`,`quantic-checkbox-group`]},So.formAssociated=!0,So.styles=lt`
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
  `,k([N({type:`boolean`,default:`false`,reflect:!0,description:`Whether the checkbox is checked.`})],So.prototype,`checked`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Marks the checkbox as required for form validation.`})],So.prototype,`required`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction and applies disabled styling.`})],So.prototype,`disabled`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling when the field fails validation.`})],So.prototype,`invalid`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Shows an indeterminate (partial-selection) state.`})],So.prototype,`indeterminate`,void 0),k([N({type:`string`,default:`''`,description:`Visible label text. Overridden by slotted content.`,copyRule:`control-label`})],So.prototype,`label`,void 0),k([N({type:`string`,default:`''`,description:`Name submitted with form data.`})],So.prototype,`name`,void 0),k([N({type:`CheckboxSize`,options:Object.values(xo),default:xo.Medium,description:`Controls the size of the checkbox box and label text.`})],So.prototype,`size`,void 0),So=k([P(`value-changed`,{description:`Fired whenever the input's value is updated (on input & change).`,detail:`{ checked: boolean, indeterminate: boolean }`}),P(`input`,{forwarded:!0}),P(`change`,{forwarded:!0}),P(`focus`,{forwarded:!0}),P(`blur`,{forwarded:!0}),P(`keydown`,{forwarded:!0}),P(`keyup`,{forwarded:!0}),F(`quantic-checkbox`)],So);var Co={Small:`sm`,Medium:`md`,Large:`lg`,XLarge:`xl`},wo={None:`none`,Subtle:`subtle`,Opaque:`opaque`},To={Dialog:`dialog`,AlertDialog:`alertdialog`},Eo=class extends Qn{constructor(){super(...arguments),this.visible=!1,this.variant=wo.Opaque}render(){return A`<div class="backdrop backdrop--${this.variant}"></div>`}};Eo.meta={tag:`quantic-dialog-backdrop`,description:`Semi-transparent overlay rendered behind quantic-dialog. Internal sub-component — do not use directly.`,category:`feedback`,relatedTo:[`quantic-dialog`]},Eo.styles=lt`
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
  `,k([N({type:`boolean`,default:`false`,reflect:!0,description:`Whether the backdrop is visible.`})],Eo.prototype,`visible`,void 0),k([N({type:`DialogBackdrop`,options:Object.values(wo),default:wo.Opaque,description:`Visual style of the backdrop overlay.`})],Eo.prototype,`variant`,void 0),Eo=k([F(`quantic-dialog-backdrop`)],Eo);var Do=class extends nr(Qn,[`pretitle`,`subtitle`]){constructor(){super(...arguments),this.level=`2`}render(){return A`
      <div class="main">
        <hgroup>
          <slot name="pretitle" class="pretitle"></slot>
          <div class="title" role="heading" aria-level=${this.level}>
            <slot></slot>
          </div>
          <slot name="subtitle" class="subtitle"></slot>
        </hgroup>
      </div>
    `}};Do.meta={tag:`quantic-dialog-title`,description:`Header/title bar sub-component for quantic-dialog. Renders a semantic heading with optional pretitle and subtitle slots.`,category:`feedback`,subComponentOf:`quantic-dialog`,slots:{pretitle:{description:`Small label displayed above the main title.`,copyRule:`title-fragment`},"":{description:`Main title text.`},subtitle:{description:`Supplementary text displayed below the title.`,copyRule:`title-fragment`}},relatedTo:[`quantic-dialog`]},Do.styles=lt`
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
  `,k([N({type:`"1" | "2" | "3" | "4" | "5" | "6"`,default:`"2"`,description:`Heading level for the title element.`})],Do.prototype,`level`,void 0),Do=k([F(`quantic-dialog-title`)],Do),ro.ensureDefined();var Oo=class extends Qn{render(){return cr`
      <quantic-action-group aria-label="">
        <slot></slot>
      </quantic-action-group>
    `}};Oo.meta={tag:`quantic-dialog-actions`,description:`Footer actions bar for quantic-dialog. Lays action buttons out as a quantic-action-group, flush to the right.`,category:`feedback`,subComponentOf:`quantic-dialog`,slots:{"":{description:`Action buttons, typically quantic-button elements.`}},relatedTo:[`quantic-dialog`,`quantic-button`,`quantic-action-group`]},Oo.styles=lt`
    :host {
      display: block;
    }

    quantic-action-group {
      width: fit-content;
      margin-inline-start: auto;
    }
  `,Oo=k([F(`quantic-dialog-actions`)],Oo);var ko=[`input:not([inert]):not([inert] *)`,`select:not([inert]):not([inert] *)`,`textarea:not([inert]):not([inert] *)`,`a[href]:not([inert]):not([inert] *)`,`area[href]:not([inert]):not([inert] *)`,`button:not([inert]):not([inert] *)`,`[tabindex]:not(slot):not([inert]):not([inert] *)`,`audio[controls]:not([inert]):not([inert] *)`,`video[controls]:not([inert]):not([inert] *)`,`[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)`,`details>summary:first-of-type:not([inert]):not([inert] *)`,`details:not([inert]):not([inert] *)`],Ao=ko.join(`,`),jo=typeof Element>`u`,Mo=jo?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,No=!jo&&Element.prototype.getRootNode?function(e){return e==null||e.getRootNode==null?void 0:e.getRootNode()}:function(e){return e?.ownerDocument},Po=function(e,t){t===void 0&&(t=!0);var n=e==null||e.getAttribute==null?void 0:e.getAttribute(`inert`);return n===``||n===`true`||t&&e&&(typeof e.closest==`function`?e.closest(`[inert]`):Po(e.parentNode))},Fo=function(e){var t,n=e==null||e.getAttribute==null||(t=e.getAttribute(`contenteditable`))==null?void 0:t.toLowerCase();return n===``||n===`true`||n===`plaintext-only`},Io=function(e,t,n){if(Po(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Ao));return t&&Mo.call(e,Ao)&&r.unshift(e),r=r.filter(n),r},Lo=function(e,t,n){for(var r=[],i=Array.from(e);i.length;){var a=i.shift();if(!Po(a,!1)){if(a.tagName===`SLOT`){var o=a.assignedElements(),s=Lo(o.length?o:a.children,!0,n);n.flatten?r.push.apply(r,s):r.push({scopeParent:a,candidates:s})}else{Mo.call(a,Ao)&&n.filter(a)&&(t||!e.includes(a))&&r.push(a);var c=a.shadowRoot||typeof n.getShadowRoot==`function`&&n.getShadowRoot(a),l=!Po(c,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(a));if(c&&l){var u=Lo(c===!0?a.children:c.children,!0,n);n.flatten?r.push.apply(r,u):r.push({scopeParent:a,candidates:u})}else i.unshift.apply(i,a.children)}}}return r},Ro=function(e){return!isNaN(parseInt(e.getAttribute(`tabindex`),10))},zo=function(e){if(!e)throw Error(`No node provided`);return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||Fo(e))&&!Ro(e)?0:e.tabIndex},Bo=function(e,t){var n=zo(e);return n<0&&t&&!Ro(e)?0:n},Vo=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Ho=function(e){return e.tagName===`INPUT`},Uo=function(e){return Ho(e)&&e.type===`hidden`},B=function(e){return e.tagName===`DETAILS`&&Array.prototype.slice.apply(e.children).some(function(e){return e.tagName===`SUMMARY`})},V=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},Wo=function(e){if(!e.name)return!0;var t=e.form||No(e),n=function(e){return t.querySelectorAll(`input[type="radio"][name="`+e+`"]`)},r;if(typeof window<`u`&&window.CSS!==void 0&&typeof window.CSS.escape==`function`)r=n(window.CSS.escape(e.name));else try{r=n(e.name)}catch(e){return console.error(`Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s`,e.message),!1}var i=V(r,e.form);return!i||i===e},Go=function(e){return Ho(e)&&e.type===`radio`},Ko=function(e){return Go(e)&&!Wo(e)},qo=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return n===0&&r===0},Jo=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if(n===`full-native`&&`checkVisibility`in e)return!e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});var i=getComputedStyle(e).visibility;if(i===`hidden`||i===`collapse`)return!0;var a=Mo.call(e,`details>summary:first-of-type`)?e.parentElement:e;if(Mo.call(a,`details:not([open]) *`))return!0;if(!n||n===`full`||n===`full-native`||n===`legacy-full`){if(typeof r==`function`){for(var o=e;e;){var s=e.parentElement,c=No(e);if(s&&!s.shadowRoot&&r(s)===!0)return qo(e);e=e.assignedSlot?e.assignedSlot:!s&&c!==e.ownerDocument?c.host:s}e=o}if(e.isConnected)return!e.getClientRects().length;if(n!==`legacy-full`)return!0}else if(n===`non-zero-area`)return qo(e);return!1},Yo=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName===`FIELDSET`&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if(r.tagName===`LEGEND`)return Mo.call(t,`fieldset[disabled] *`)?!0:!r.contains(e)}return!0}t=t.parentElement}return!1},Xo=function(e,t){return!(t.disabled||Uo(t)||Jo(t,e)||B(t)||Yo(t))},Zo=function(e,t){return!(Ko(t)||zo(t)<0||!Xo(e,t))},Qo=function(e){var t=parseInt(e.getAttribute(`tabindex`),10);return!!(isNaN(t)||t>=0)},$o=function(e){var t=[],n=[];return e.forEach(function(e,r){var i=!!e.scopeParent,a=i?e.scopeParent:e,o=Bo(a,i),s=i?$o(e.candidates):a;o===0?i?t.push.apply(t,s):t.push(a):n.push({documentOrder:r,tabIndex:o,item:e,isScope:i,content:s})}),n.sort(Vo).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(t)},es=function(e,t){return t||={},$o(t.getShadowRoot?Lo([e],t.includeContainer,{filter:Zo.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Qo}):Io(e,t.includeContainer,Zo.bind(null,t)))},ts=function(e,t){return t||={},t.getShadowRoot?Lo([e],t.includeContainer,{filter:Xo.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):Io(e,t.includeContainer,Xo.bind(null,t))},ns=function(e,t){if(t||={},!e)throw Error(`No node provided`);return Mo.call(e,Ao)!==!1&&Zo(t,e)},rs=ko.concat(`iframe:not([inert]):not([inert] *)`).join(`,`),is=function(e,t){if(t||={},!e)throw Error(`No node provided`);return Mo.call(e,rs)!==!1&&Xo(t,e)};function as(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function os(e){if(Array.isArray(e))return as(e)}function ss(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=gs(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function cs(e,t,n){return(t=hs(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ls(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function us(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ds(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function fs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ds(Object(n),!0).forEach(function(t){cs(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ds(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ps(e){return os(e)||ls(e)||gs(e)||us()}function ms(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function hs(e){var t=ms(e,`string`);return typeof t==`symbol`?t:t+``}function gs(e,t){if(e){if(typeof e==`string`)return as(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?as(e,t):void 0}}var _s={getActiveTrap:function(e){return e?.length>0?e[e.length-1]:null},activateTrap:function(e,t){t!==_s.getActiveTrap(e)&&_s.pauseTrap(e);var n=e.indexOf(t);n===-1||e.splice(n,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);n!==-1&&e.splice(n,1),_s.unpauseTrap(e)},pauseTrap:function(e){_s.getActiveTrap(e)?._setPausedState(!0)},unpauseTrap:function(e){var t=_s.getActiveTrap(e);t&&!t._isManuallyPaused()&&t._setPausedState(!1)}},vs=function(e){return e.tagName&&e.tagName.toLowerCase()===`input`&&typeof e.select==`function`},ys=function(e){return e?.key===`Escape`||e?.key===`Esc`||e?.keyCode===27},bs=function(e){return e?.key===`Tab`||e?.keyCode===9},xs=function(e){return bs(e)&&!e.shiftKey},Ss=function(e){return bs(e)&&e.shiftKey},Cs=function(e){return setTimeout(e,0)},ws=function(e){var t=[...arguments].slice(1);return typeof e==`function`?e.apply(void 0,t):e},Ts=function(e){return e.target.shadowRoot&&typeof e.composedPath==`function`?e.composedPath()[0]:e.target},Es=[],Ds=function(e,t){var n=t?.document||document,r=t?.trapStack||Es,i=fs({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isolateSubtrees:!1,isKeyForward:xs,isKeyBackward:Ss},t),a={containers:[],containerGroups:[],tabbableGroups:[],adjacentElements:new Set,alreadySilent:new Set,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},o,s=function(e,t,n){return e&&e[t]!==void 0?e[t]:i[n||t]},c=function(e,t){var n=typeof t?.composedPath==`function`?t.composedPath():void 0;return a.containerGroups.findIndex(function(t){var r=t.container,i=t.tabbableNodes;return r.contains(e)||n?.includes(r)||i.find(function(t){return t===e})})},l=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.hasFallback,a=r!==void 0&&r,o=t.params,s=o===void 0?[]:o,c=i[e];if(typeof c==`function`&&(c=c.apply(void 0,ps(s))),c===!0&&(c=void 0),!c){if(c===void 0||c===!1)return c;throw Error(`\`${e}\` was specified but was not a node, or did not return a node`)}var l=c;if(typeof c==`string`){try{l=n.querySelector(c)}catch(t){throw Error(`\`${e}\` appears to be an invalid selector; error="${t.message}"`)}if(!l&&!a)throw Error(`\`${e}\` as selector refers to no known node`)}return l},u=function(){var e=l(`initialFocus`,{hasFallback:!0});if(e===!1)return!1;if(e===void 0||e&&!is(e,i.tabbableOptions)){if(c(n.activeElement)>=0)e=n.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||l(`fallbackFocus`)}}else e===null&&(e=l(`fallbackFocus`));if(!e)throw Error(`Your focus-trap needs to have at least one focusable element`);return e},d=function(){if(a.containerGroups=a.containers.map(function(e){var t=es(e,i.tabbableOptions),n=ts(e,i.tabbableOptions),r=t.length>0?t[0]:void 0,a=t.length>0?t[t.length-1]:void 0,o=n.find(function(e){return ns(e)}),s=n.slice().reverse().find(function(e){return ns(e)});return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:!!t.find(function(e){return zo(e)>0}),firstTabbableNode:r,lastTabbableNode:a,firstDomTabbableNode:o,lastDomTabbableNode:s,nextTabbableNode:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=t.indexOf(e);return i<0?r?n.slice(n.indexOf(e)+1).find(function(e){return ns(e)}):n.slice(0,n.indexOf(e)).reverse().find(function(e){return ns(e)}):t[i+(r?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!l(`fallbackFocus`))throw Error(`Your focus-trap must have at least one container with at least one tabbable node in it at all times`);if(a.containerGroups.find(function(e){return e.posTabIndexesFound})&&a.containerGroups.length>1)throw Error(`At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.`)},f=function(e){var t=e.activeElement;if(t)return t.shadowRoot&&t.shadowRoot.activeElement!==null?f(t.shadowRoot):t},p=function(e){e!==!1&&e!==f(document)&&(!e||!e.focus?p(u()):(e.focus({preventScroll:!!i.preventScroll}),a.mostRecentlyFocusedNode=e,vs(e)&&e.select()))},m=function(e){var t=l(`setReturnFocus`,{params:[e]});return t||t!==!1&&e},h=function(e){var t=e.target,n=e.event,r=e.isBackward,o=r!==void 0&&r;t||=Ts(n),d();var s=null;if(a.tabbableGroups.length>0){var u=c(t,n),f=u>=0?a.containerGroups[u]:void 0;if(u<0)s=o?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(o){var p=a.tabbableGroups.findIndex(function(e){var n=e.firstTabbableNode;return t===n});if(p<0&&(f.container===t||is(t,i.tabbableOptions)&&!ns(t,i.tabbableOptions)&&!f.nextTabbableNode(t,!1))&&(p=u),p>=0){var m=p===0?a.tabbableGroups.length-1:p-1,h=a.tabbableGroups[m];s=zo(t)>=0?h.lastTabbableNode:h.lastDomTabbableNode}else bs(n)||(s=f.nextTabbableNode(t,!1))}else{var g=a.tabbableGroups.findIndex(function(e){var n=e.lastTabbableNode;return t===n});if(g<0&&(f.container===t||is(t,i.tabbableOptions)&&!ns(t,i.tabbableOptions)&&!f.nextTabbableNode(t))&&(g=u),g>=0){var _=g===a.tabbableGroups.length-1?0:g+1,v=a.tabbableGroups[_];s=zo(t)>=0?v.firstTabbableNode:v.firstDomTabbableNode}else bs(n)||(s=f.nextTabbableNode(t))}}else s=l(`fallbackFocus`);return s},g=function(e){c(Ts(e),e)>=0||(ws(i.clickOutsideDeactivates,e)?o.deactivate({returnFocus:i.returnFocusOnDeactivate}):ws(i.allowOutsideClick,e)||e.preventDefault())},_=function(e){var t=Ts(e),n=c(t,e)>=0;if(n||t instanceof Document)n&&(a.mostRecentlyFocusedNode=t);else{e.stopImmediatePropagation();var r,o=!0;if(a.mostRecentlyFocusedNode){if(zo(a.mostRecentlyFocusedNode)>0){var s=c(a.mostRecentlyFocusedNode),l=a.containerGroups[s].tabbableNodes;if(l.length>0){var d=l.findIndex(function(e){return e===a.mostRecentlyFocusedNode});d>=0&&(i.isKeyForward(a.recentNavEvent)?d+1<l.length&&(r=l[d+1],o=!1):d-1>=0&&(r=l[d-1],o=!1))}}else a.containerGroups.some(function(e){return e.tabbableNodes.some(function(e){return zo(e)>0})})||(o=!1)}else o=!1;o&&(r=h({target:a.mostRecentlyFocusedNode,isBackward:i.isKeyBackward(a.recentNavEvent)})),p(r||a.mostRecentlyFocusedNode||u())}a.recentNavEvent=void 0},v=function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];a.recentNavEvent=e;var n=h({event:e,isBackward:t});n&&(bs(e)&&e.preventDefault(),p(n))},y=function(e){(i.isKeyForward(e)||i.isKeyBackward(e))&&v(e,i.isKeyBackward(e))},b=function(e){ys(e)&&ws(i.escapeDeactivates,e)!==!1&&(e.preventDefault(),o.deactivate())},x=function(e){c(Ts(e),e)>=0||ws(i.clickOutsideDeactivates,e)||ws(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},S=function(){if(a.active)return _s.activateTrap(r,o),a.delayInitialFocusTimer=i.delayInitialFocus?Cs(function(){p(u())}):p(u()),n.addEventListener(`focusin`,_,!0),n.addEventListener(`mousedown`,g,{capture:!0,passive:!1}),n.addEventListener(`touchstart`,g,{capture:!0,passive:!1}),n.addEventListener(`click`,x,{capture:!0,passive:!1}),n.addEventListener(`keydown`,y,{capture:!0,passive:!1}),n.addEventListener(`keydown`,b),o},ee=function(e){a.active&&!a.paused&&o._setSubtreeIsolation(!1),a.adjacentElements.clear(),a.alreadySilent.clear();var t=new Set,n=new Set,r=ss(e),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;t.add(s);for(var c=typeof ShadowRoot<`u`&&s.getRootNode()instanceof ShadowRoot,l=s;l;){t.add(l);var u=l.parentElement,d=[];u?d=u.children:!u&&c&&(d=l.getRootNode().children,u=l.getRootNode().host,c=typeof ShadowRoot<`u`&&u.getRootNode()instanceof ShadowRoot);var f=ss(d),p;try{for(f.s();!(p=f.n()).done;){var m=p.value;n.add(m)}}catch(e){f.e(e)}finally{f.f()}l=u}}}catch(e){r.e(e)}finally{r.f()}t.forEach(function(e){n.delete(e)}),a.adjacentElements=n},te=function(){if(a.active)return n.removeEventListener(`focusin`,_,!0),n.removeEventListener(`mousedown`,g,!0),n.removeEventListener(`touchstart`,g,!0),n.removeEventListener(`click`,x,!0),n.removeEventListener(`keydown`,y,!0),n.removeEventListener(`keydown`,b),o},C=typeof window<`u`&&`MutationObserver`in window?new MutationObserver(function(e){e.some(function(e){return Array.from(e.removedNodes).some(function(e){return e===a.mostRecentlyFocusedNode})})&&p(u())}):void 0,ne=function(){C&&(C.disconnect(),a.active&&!a.paused&&a.containers.map(function(e){C.observe(e,{subtree:!0,childList:!0})}))};return o={get active(){return a.active},get paused(){return a.paused},activate:function(e){if(a.active)return this;var t=s(e,`onActivate`),c=s(e,`onPostActivate`),l=s(e,`checkCanFocusTrap`),u=_s.getActiveTrap(r),p=!1;if(u&&!u.paused){var m;(m=u._setSubtreeIsolation)==null||m.call(u,!1),p=!0}try{l||d(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=f(n),t?.();var h=function(){l&&d(),S(),ne(),i.isolateSubtrees&&o._setSubtreeIsolation(!0),c?.()};if(l)return l(a.containers.concat()).then(h,h),this;h()}catch(e){if(u===_s.getActiveTrap(r)&&p){var g;(g=u._setSubtreeIsolation)==null||g.call(u,!0)}throw e}return this},deactivate:function(e){if(!a.active)return this;var t=fs({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,a.paused||o._setSubtreeIsolation(!1),a.alreadySilent.clear(),te(),a.active=!1,a.paused=!1,ne(),_s.deactivateTrap(r,o);var n=s(t,`onDeactivate`),c=s(t,`onPostDeactivate`),l=s(t,`checkCanReturnFocus`),u=s(t,`returnFocus`,`returnFocusOnDeactivate`);n?.();var d=function(){Cs(function(){u&&p(m(a.nodeFocusedBeforeActivation)),c?.()})};return u&&l?(l(m(a.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){return a.active?(a.manuallyPaused=!0,this._setPausedState(!0,e)):this},unpause:function(e){return!a.active||(a.manuallyPaused=!1,r[r.length-1]!==this)?this:this._setPausedState(!1,e)},updateContainerElements:function(e){return a.containers=[].concat(e).filter(Boolean).map(function(e){return typeof e==`string`?n.querySelector(e):e}),i.isolateSubtrees&&ee(a.containers),a.active&&(d(),i.isolateSubtrees&&!a.paused&&o._setSubtreeIsolation(!0)),ne(),this}},Object.defineProperties(o,{_isManuallyPaused:{value:function(){return a.manuallyPaused}},_setPausedState:{value:function(e,t){if(a.paused===e)return this;if(a.paused=e,e){var n=s(t,`onPause`),r=s(t,`onPostPause`);n?.(),te(),ne(),o._setSubtreeIsolation(!1),r?.()}else{var i=s(t,`onUnpause`),c=s(t,`onPostUnpause`);i?.(),o._setSubtreeIsolation(!0),d(),S(),ne(),c?.()}return this}},_setSubtreeIsolation:{value:function(e){i.isolateSubtrees&&a.adjacentElements.forEach(function(t){if(e)switch(i.isolateSubtrees){case`aria-hidden`:(t.ariaHidden===`true`||t.getAttribute(`aria-hidden`)?.toLowerCase()===`true`)&&a.alreadySilent.add(t),t.setAttribute(`aria-hidden`,`true`);break;default:(t.inert||t.hasAttribute(`inert`))&&a.alreadySilent.add(t),t.setAttribute(`inert`,!0)}else if(!a.alreadySilent.has(t))switch(i.isolateSubtrees){case`aria-hidden`:t.removeAttribute(`aria-hidden`);break;default:t.removeAttribute(`inert`)}})}}}),o.updateContainerElements(e),o},Os=500;Eo.ensureDefined(),I.ensureDefined(),Pr.ensureDefined();var ks=class extends nr(Qn,[`header`,`footer`]){constructor(){super(...arguments),this.open=!1,this.size=Co.Medium,this.fullscreen=!1,this.showCloseButton=!0,this.backdrop=wo.Opaque,this.persistent=!1,this.role=To.Dialog,this.ariaLabel=null,this.dialogId=Er(`dialog`),this.headerId=Er(`dialog-title`),this.originalOverflow=``,this.originalPaddingRight=``,this.backdropPointerDownOutside=!1,this.handleTriggerClick=()=>{this.show()},this.handleEscape=e=>{e.key===`Escape`&&this.open&&(e.stopPropagation(),this.persistent||this.hide())},this.handleBackdropPointerDown=e=>{this.backdropPointerDownOutside=e.target===this.wrapperElement},this.handleBackdropPointerUp=e=>{this.persistent||(this.backdropPointerDownOutside&&e.target===this.wrapperElement&&this.hide(),this.backdropPointerDownOutside=!1)},this.hide=async()=>{if(!this.open||this.persistent)return;let e=new Event(`before-close`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.addEventListener(`dialog-close`,this.hide),this.addEventListener(`keydown`,this.handleEscape)}disconnectedCallback(){if(super.disconnectedCallback(),this.removeEventListener(`dialog-close`,this.hide),this.removeEventListener(`keydown`,this.handleEscape),this.unlockBodyScroll(),this.focusTrap)try{this.focusTrap.deactivate()}catch(e){console.error(`Failed to deactivate focus trap:`,e)}finally{this.focusTrap=null}}updated(e){super.updated(e),e.has(`open`)&&(this.open?this._activate():e.get(`open`)&&this._deactivate())}get triggerElement(){return this.triggerSlot?.assignedElements({flatten:!0})[0]}get hasHeaderContent(){return this.headerSlot?.assignedNodes({flatten:!0}).some(e=>e.nodeType!==Node.TEXT_NODE||e.textContent?.trim())??!1}handleSlotChange(){let e=this.triggerElement;e&&(e.setAttribute(`aria-controls`,this.dialogId),e.setAttribute(`aria-haspopup`,`dialog`),e.setAttribute(`aria-expanded`,this.open?`true`:`false`))}lockBodyScroll(){if(typeof document>`u`)return;let e=window.innerWidth-document.documentElement.clientWidth;this.originalOverflow=document.body.style.overflow,this.originalPaddingRight=document.body.style.paddingRight,document.body.style.overflow=`hidden`,e>0&&(document.body.style.paddingRight=`${e}px`)}unlockBodyScroll(){typeof document<`u`&&(document.body.style.overflow=this.originalOverflow,document.body.style.paddingRight=this.originalPaddingRight)}updateTriggerAria(){let e=this.triggerElement;e&&e.setAttribute(`aria-expanded`,this.open?`true`:`false`)}async waitForDialogRender(){await this.updateComplete,await new Promise(e=>{let t=()=>{this.wrapperElement?.removeEventListener(`transitionend`,t),e()};this.wrapperElement?.addEventListener(`transitionend`,t),setTimeout(t,Os)})}async show(){if(this.open)return;let e=new Event(`before-open`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!0)}async toggle(){this.open?await this.hide():await this.show()}async _activate(){if(this.updateTriggerAria(),this.lockBodyScroll(),this.backdropElement&&(await this.backdropElement.updateComplete,this.backdropElement.visible=!0),this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:!0},bubbles:!0,composed:!0})),await this.updateComplete,this.mainElement)try{this.focusTrap=Ds(this.mainElement,{escapeDeactivates:!1,clickOutsideDeactivates:!1,allowOutsideClick:!0,returnFocusOnDeactivate:!0,fallbackFocus:this.mainElement,tabbableOptions:{getShadowRoot:!0}}),this.focusTrap.activate()}catch(e){console.error(`Failed to activate focus trap:`,e),this.focusTrap=null}await this.waitForDialogRender(),this.dispatchEvent(new Event(`after-open`,{bubbles:!0,composed:!0}))}async _deactivate(){if(this.updateTriggerAria(),this.focusTrap)try{this.focusTrap.deactivate()}catch(e){console.error(`Failed to deactivate focus trap:`,e)}finally{this.focusTrap=null}this.backdropElement&&(this.backdropElement.visible=!1),this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:!1},bubbles:!0,composed:!0})),await this.waitForDialogRender(),this.unlockBodyScroll(),this.dispatchEvent(new Event(`after-close`,{bubbles:!0,composed:!0}))}render(){return A`
      <div class="trigger" @click=${this.handleTriggerClick}>
        <slot name="trigger" @slotchange=${this.handleSlotChange}></slot>
      </div>
      <quantic-dialog-backdrop
        ?visible=${this.open}
        variant=${this.backdrop}
      ></quantic-dialog-backdrop>
      <div
        class=${hr({wrapper:!0,"wrapper--fullscreen":this.fullscreen})}
        @pointerdown=${this.handleBackdropPointerDown}
        @pointerup=${this.handleBackdropPointerUp}
      >
        <div
          class=${hr({main:!0,fullscreen:this.fullscreen,[`size--${this.size}`]:!this.fullscreen})}
          role=${this.role}
          aria-modal="true"
          aria-labelledby=${gr(this.hasHeaderContent?this.headerId:void 0)}
          aria-label=${gr(this.ariaLabel??void 0)}
          id=${this.dialogId}
          tabindex="-1"
        >
          ${this.showCloseButton&&!this.persistent?A`<quantic-button
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
    `}};ks.meta={tag:`quantic-dialog`,description:`Modal overlay dialog with focus trap, scroll lock, and animated entrance. Use quantic-dialog-title in the header slot and quantic-dialog-actions in the footer slot.`,category:`feedback`,avoidWhen:[{when:`the dialog only confirms or cancels one action`,useInstead:`quantic-confirm-dialog`},{when:`the content is contextual and does not need to block the page`,useInstead:`quantic-popover`},{when:`the page should stay usable while the content is open, such as a detail or chat panel`,useInstead:`quantic-drawer`}],accessibility:{providedByComponent:[`focus trap while open`,`focus restored to the trigger on close`,`Escape dismisses`,`scroll lock`],requiredFromConsumer:[`a title, via quantic-dialog-title in the header slot or the ariaLabel prop`]},slots:{trigger:{description:`Element that opens the dialog when clicked.`},header:{description:`Dialog header — place quantic-dialog-title here.`},"":{description:`Main dialog body content.`},footer:{description:`Dialog footer — place quantic-dialog-actions here.`}},relatedTo:[`quantic-button`]},ks.styles=lt`
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
  `,k([N({type:`boolean`,default:`false`,reflect:!0,description:`Whether the dialog is visible.`})],ks.prototype,`open`,void 0),k([N({type:`DialogSize`,options:Object.values(Co),default:Co.Medium,description:`Maximum width of the dialog panel.`})],ks.prototype,`size`,void 0),k([N({type:`boolean`,default:`false`,description:`Expands the dialog to fill the viewport, ignoring size.`})],ks.prototype,`fullscreen`,void 0),k([N({type:`boolean`,default:`true`,description:`Shows a built-in close button in the top-right corner.`})],ks.prototype,`showCloseButton`,void 0),k([N({type:`DialogBackdrop`,options:Object.values(wo),default:wo.Opaque,description:`Style of the backdrop overlay.`})],ks.prototype,`backdrop`,void 0),k([N({type:`boolean`,default:`false`,description:`Prevents the dialog from being closed via Escape or backdrop click.`})],ks.prototype,`persistent`,void 0),k([N({type:`DialogRole`,options:Object.values(To),default:To.Dialog,description:`ARIA role for the dialog element. Use "alertdialog" for confirmation dialogs.`})],ks.prototype,`role`,void 0),k([N({type:`string`,attribute:`aria-label`,description:`Accessible label when the dialog has no visible heading.`})],ks.prototype,`ariaLabel`,void 0),k([xn(`quantic-dialog-backdrop`)],ks.prototype,`backdropElement`,void 0),k([xn(`.wrapper`)],ks.prototype,`wrapperElement`,void 0),k([xn(`.main`)],ks.prototype,`mainElement`,void 0),k([xn(`slot[name="trigger"]`)],ks.prototype,`triggerSlot`,void 0),k([xn(`slot[name="header"]`)],ks.prototype,`headerSlot`,void 0),ks=k([P(`open-changed`,{description:`Fired when the dialog open state changes.`,detail:`{ open: boolean }`}),P(`before-open`,{description:`Fired before the dialog opens.`}),P(`after-open`,{description:`Fired after the dialog opens and animations complete.`}),P(`before-close`,{description:`Fired before the dialog closes.`}),P(`after-close`,{description:`Fired after the dialog closes and animations complete.`}),F(`quantic-dialog`)],ks);var As=class extends Qn{constructor(){super(...arguments),this.open=!1,this.heading=``,this.message=``,this.confirmText=`Confirm`,this.cancelText=`Cancel`,this.destructive=!1,this.loading=!1,this.persistent=!1,this.showCloseButton=!0,this.size=Co.Small,this.handleConfirmClick=()=>{if(this.loading)return;let e=new Event(`confirm`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!1)},this.handleCancelClick=()=>{this.loading||(this.dispatchEvent(new Event(`cancel`,{bubbles:!0,composed:!0})),this.open=!1)},this.handleInnerBeforeClose=()=>{this.dispatchEvent(new Event(`cancel`,{bubbles:!0,composed:!0}))},this.handleInnerOpenChanged=e=>{let t=e.detail;this.open!==t.open&&(this.open=t.open)}}updated(e){super.updated(e),e.has(`open`)&&this.innerDialog&&(this.innerDialog.open=this.open)}get buttonSize(){return this.size===Co.Large||this.size===Co.XLarge?ur.Medium:ur.Small}render(){return A`
      <quantic-dialog
        .size=${this.size}
        .role=${To.AlertDialog}
        ?persistent=${this.persistent||this.loading}
        ?show-close-button=${this.showCloseButton&&!this.loading}
        @before-close=${this.handleInnerBeforeClose}
        @open-changed=${this.handleInnerOpenChanged}
      >
        <slot name="trigger" slot="trigger"></slot>
        ${this.heading?A`<quantic-dialog-title slot="header" level="2">
              ${this.heading}
            </quantic-dialog-title>`:j}

        <div class="body">
          <slot>${this.message?A`<p>${this.message}</p>`:j}</slot>
        </div>

        <quantic-dialog-actions slot="footer">
          <quantic-button
            variant="${lr.Outline}"
            .size=${this.buttonSize}
            ?disabled=${this.loading}
            @click=${this.handleCancelClick}
          >
            ${this.cancelText}
          </quantic-button>
          <quantic-button
            variant="${lr.Primary}"
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
    `}};As.meta={tag:`quantic-confirm-dialog`,description:'Confirmation dialog with title, body, and confirm/cancel actions. Wraps quantic-dialog with role="alertdialog". Use `destructive` for irreversible actions.',category:`feedback`,avoidWhen:[{when:`the dialog carries a form or more than two actions`,useInstead:`quantic-dialog`}],accessibility:{providedByComponent:[`role=alertdialog`,`everything quantic-dialog provides`],requiredFromConsumer:[`a heading and a message, so the action is named without relying on the button alone`]},slots:{trigger:{description:`Element that opens the dialog when clicked.`},"":{description:"Body content. Overrides the `message` prop when non-empty. Accepts rich HTML, including a nested quantic-alert for contextual warnings."},"confirm-icon":{description:`Optional leading icon for the confirm button.`}},relatedTo:[`quantic-dialog`,`quantic-button`,`quantic-alert`]},As.styles=lt`
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
  `,k([N({type:`boolean`,default:`false`,reflect:!0,description:`Whether the dialog is visible.`})],As.prototype,`open`,void 0),k([N({type:`string`,description:`Heading shown in the dialog header.`,copyRule:`heading`})],As.prototype,`heading`,void 0),k([N({type:`string`,description:`Body message. Ignored if default slot has content. Use the slot for rich content.`,copyRule:`body-message`})],As.prototype,`message`,void 0),k([N({type:`string`,attribute:`confirm-text`,default:`"Confirm"`,description:`Label for the confirm action button.`,copyRule:`action-label`})],As.prototype,`confirmText`,void 0),k([N({type:`string`,attribute:`cancel-text`,default:`"Cancel"`,description:`Label for the cancel action button.`,copyRule:`dismiss-label`})],As.prototype,`cancelText`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Renders the confirm button in error/danger colors. Use for irreversible actions such as delete or remove.`})],As.prototype,`destructive`,void 0),k([N({type:`boolean`,default:`false`,description:`Disables both action buttons. Set while performing an async action after a confirm event.`})],As.prototype,`loading`,void 0),k([N({type:`boolean`,default:`false`,description:`Prevents the dialog from being closed via Escape, backdrop, or the close button.`})],As.prototype,`persistent`,void 0),k([N({type:`boolean`,attribute:`show-close-button`,default:`true`,description:`Shows the close (X) button in the top-right corner.`})],As.prototype,`showCloseButton`,void 0),k([N({type:`DialogSize`,options:Object.values(Co),default:Co.Small,description:`Maximum width of the dialog panel.`})],As.prototype,`size`,void 0),k([xn(`quantic-dialog`)],As.prototype,`innerDialog`,void 0),As=k([P(`confirm`,{description:"Fired when the confirm button is clicked. Cancellable — call preventDefault() to keep the dialog open (e.g. while performing an async action with `loading`)."}),P(`cancel`,{description:`Fired when the dialog is dismissed via the cancel button, close button, Escape, or backdrop click.`}),F(`quantic-confirm-dialog`)],As);var js=`important`,Ms=` !`+js,Ns=pr(class extends mr{constructor(e){if(super(e),e.type!==fr.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Ms);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?js:``):n[e]=r}}return Xt}});function Ps(e){let t=Number.isFinite(e.minSize)?e.minSize:0,n=Number.isFinite(e.maxSize)?e.maxSize:100,r=Cr(t,0,100),i=Cr(n,0,100);return{min:Math.min(r,i),max:Math.max(r,i)}}function Fs(e,t){if(t){if(e===`ArrowUp`)return-1;if(e===`ArrowDown`)return 1}else{if(e===`ArrowLeft`)return-1;if(e===`ArrowRight`)return 1}return null}function Is(e,t){return t.reduce((t,n,r)=>n.collapsed?t:t+e[r],0)}function Ls(e,t,n){let{a:r,b:i,total:a}=n,o=Math.max(r.min,a-i.max),s=Math.min(r.max,a-i.min),c=Cr(e+t,Math.min(o,s),Math.max(o,s));return[c,a-c]}function Rs(e,t){return e*t/100}function zs(e,t){if(e.length!==t.length)return e;let n=Is(e,t);return n===0?e.map(()=>0):e.map((e,r)=>t[r]?.collapsed?0:e/n*100)}var Bs=e=>{if(e.endsWith(`%`)){let t=parseFloat(e);return{percent:isNaN(t)||t<0?0:t,flex:0}}let t=e===`*`?1:parseFloat(e);return{percent:0,flex:isNaN(t)||t<=0?1:t}},Vs={percent:0,flex:1};function Hs(e,t){if(t===0)return[];let n=e.trim().split(/\s+/).filter(Boolean),r=Array.from({length:t},(e,t)=>t<n.length?Bs(n[t]):Vs),i=r.reduce((e,{percent:t})=>e+t,0),a=r.reduce((e,{flex:t})=>e+t,0),o=Math.max(0,100-i),s=r.map(({percent:e,flex:t})=>t===0?e:a>0?t/a*o:0),c=s.reduce((e,t)=>e+t,0);return c>0?s.map(e=>e/c*100):Array(t).fill(100/t)}var Us=class extends L{render(){return Yt`
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

    `}};Us.styles=L.styles,Us=k([F(`quantic-icon-lucide-eye`)],Us);var Ws=class extends L{render(){return Yt`
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

    `}};Ws.styles=L.styles,Ws=k([F(`quantic-icon-lucide-eye-off`)],Ws);var Gs={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`};Us.ensureDefined(),Ws.ensureDefined(),I.ensureDefined();var Ks=class extends Ua(Qn){focus(e){this.nativeInput?.focus(e)}constructor(){super(),this.value=``,this.type=`text`,this.name=``,this.placeholder=``,this.size=Gs.Medium,this.disabled=!1,this.required=!1,this.readOnly=!1,this.invalid=!1,this.autoComplete=`off`,this.showPassword=!1,this.internals=this.attachInternals()}togglePassword(){this.showPassword=!this.showPassword}get iconSize(){return Ja(this.size)}updated(e){e.has(`value`)&&(this.internals.setFormValue(this.value),this.updateValidity()),Dr(this,e,this.value)}forwardNative(e){let t=e.target;this.value=t.value,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}handleKeyDown(e){this.forwardNative(e),e.key===`Enter`&&this.internals.form?.requestSubmit()}dispatchValueChanged(e){this.value=e.target.value}formResetCallback(){this.value=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}updateValidity(){let e=this.shadowRoot?.querySelector(`input`);e&&this.internals.setValidity(e.validity,e.validationMessage,e)}render(){let e=hr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return A`
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
        ${this.type===`password`?A`<quantic-button
                class="password-toggle"
                variant="ghost"
                size="xs"
                icon
                type="button"
                ?disabled=${this.disabled||this.readOnly}
                aria-label=${this.showPassword?`Hide password`:`Show password`}
                @click=${this.togglePassword}
              >
                ${this.showPassword?A`<quantic-icon-lucide-eye-off
                        size=${this.iconSize}
                      ></quantic-icon-lucide-eye-off>`:A`<quantic-icon-lucide-eye
                        size=${this.iconSize}
                      ></quantic-icon-lucide-eye>`}
              </quantic-button>`:``}
        ${this.invalid?Ya(this.size):``}
        ${this.invalid?``:A`<slot name="suffix"></slot>`}
      </div>
    `}};Ks.meta={tag:`quantic-text-input`,description:`Single-line text field with native form association. Wrap in quantic-field to add a visible label, hint text, and validation messaging. Use type="password" or type="email" to get browser-native input behaviour.`,category:`form`,avoidWhen:[{when:`the value is numeric with a min, max or step`,useInstead:`quantic-number-input`},{when:`the value is multi-line prose`,useInstead:`quantic-textarea`}],accessibility:{providedByComponent:[`form association`,`native input semantics and keyboard behaviour`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{prefix:{description:`Leading content (e.g. icon or currency symbol).`},suffix:{description:`Trailing content (e.g. icon or unit label).`}},parts:{input:{description:`The native input element.`}},relatedTo:[`quantic-field`,`quantic-number-input`,`quantic-select`]},Ks.formAssociated=!0,Ks.styles=[Qa(`text-input`,`5em`),lt`
      .input:-webkit-autofill {
        -webkit-text-fill-color: var(--quantic-text-secondary);
        -webkit-box-shadow: 0 0 0px 1000px
          var(--quantic-component-text-input-bg, var(--quantic-bg-primary)) inset;
      }

      .password-toggle {
        margin-inline-start: var(--quantic-spacing-2);
      }
    `],k([N({type:`string`,default:``,description:`Current value of the input.`})],Ks.prototype,`value`,void 0),k([N({type:`string`,default:`text`,description:`Native input type.`})],Ks.prototype,`type`,void 0),k([N({type:`string`,description:`Name submitted with form data.`})],Ks.prototype,`name`,void 0),k([N({type:`string`,description:`Placeholder text shown when the field is empty.`,copyRule:`placeholder`})],Ks.prototype,`placeholder`,void 0),k([N({type:`TextInputSize`,options:Object.values(Gs),default:Gs.Medium,description:`Controls padding and font size.`})],Ks.prototype,`size`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],Ks.prototype,`disabled`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],Ks.prototype,`required`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Makes the field non-editable but still focusable and selectable.`})],Ks.prototype,`readOnly`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],Ks.prototype,`invalid`,void 0),k([N({type:`string`,default:`off`,reflect:!0,description:`Native autocomplete attribute passed to the inner <input>.`})],Ks.prototype,`autoComplete`,void 0),k([yn()],Ks.prototype,`showPassword`,void 0),k([xn(`input`)],Ks.prototype,`nativeInput`,void 0),Ks=k([P(`value-changed`,{description:`Fired whenever the value changes, from user input or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),P(`input`,{forwarded:!0}),P(`change`,{forwarded:!0}),P(`focus`,{forwarded:!0}),P(`blur`,{forwarded:!0}),P(`keydown`,{forwarded:!0}),P(`keyup`,{forwarded:!0}),P(`keypress`,{forwarded:!0}),F(`quantic-text-input`)],Ks);var qs={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},Js=class extends Ua(Qn){constructor(){super(...arguments),this.options=[],this.value=``,this.name=``,this.placeholder=``,this.size=qs.Medium,this.disabled=!1,this.required=!1,this.invalid=!1,this._selectRef=ti(),this._slottedOptions=[]}dispatchValueChanged(e){this.value=e.target.value}openDropdown(e){if(!this.disabled){e.stopPropagation();let t=this._selectRef.value;t?.showPicker(),t?.click(),t?.focus()}}updated(e){if(e.has(`value`)){let e=this._selectRef.value,t=this.options.find(([,e])=>e===this.value);e&&t&&(e.value=t[1])}Dr(this,e,this.value)}forwardNative(e){this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}handleSlotChange(e){let t=e.target.assignedElements({flatten:!0});this._slottedOptions=t.filter(e=>e.tagName===`OPTION`),this.requestUpdate()}render(){let e=hr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return A`
      <slot @slotchange=${this.handleSlotChange} style="display: none"></slot>
      <div class="${e}">
        <slot name="prefix"></slot>
        <select
          ${ii(this._selectRef)}
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
          ${!this.value&&this.placeholder?A`<option value="">${this.placeholder}</option>`:null}
          ${this.options.length>0?this.options.map(([e,t])=>A`<option value=${t}>${e}</option>`):this._slottedOptions.length>0?this._slottedOptions.map(e=>A`<option value=${e.value} ?selected=${e.selected}>${e.textContent}</option>`):A`<option value="" disabled>No options available</option>`}
        </select>
        ${this.invalid?Ya(this.size):A`<slot name="suffix"
                >${Xa(this.size,{click:this.openDropdown})}</slot
              >`}
      </div>
    `}};Js.meta={tag:`quantic-select`,description:`Dropdown select input backed by a native <select>. Form-associated. Pass options via the options prop or slot native <option> elements.`,category:`form`,avoidWhen:[{when:`the option set is large enough to need filtering`,useInstead:`quantic-combobox`}],accessibility:{providedByComponent:[`native select semantics and keyboard behaviour`,`form association`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{"":{description:`Native option elements, read to build the list. Never rendered directly.`},prefix:{description:`Leading content (e.g. icon).`},suffix:{description:`Trailing content, replacing the default chevron.`}},relatedTo:[`quantic-field`,`quantic-text-input`]},Js.styles=[Qa(`select`,`6em`),lt`
      .main {
        line-height: var(--quantic-line-height-body-md);
      }
    `],k([N({type:`Option<T>[]`,default:`[]`,description:`Array of [label, value] tuples. Alternatively, slot native <option> elements.`})],Js.prototype,`options`,void 0),k([N({type:`string`,default:``,reflect:!0,description:`Currently selected value.`})],Js.prototype,`value`,void 0),k([N({type:`string`,description:`Name submitted with form data.`})],Js.prototype,`name`,void 0),k([N({type:`string`,description:`Placeholder option shown when no value is selected.`,copyRule:`placeholder`})],Js.prototype,`placeholder`,void 0),k([N({type:`SelectSize`,options:Object.values(qs),default:qs.Medium,description:`Controls padding and font size.`})],Js.prototype,`size`,void 0),k([N({type:`boolean`,default:`false`,description:`Prevents interaction.`})],Js.prototype,`disabled`,void 0),k([N({type:`boolean`,default:`false`,description:`Marks the field as required for form validation.`})],Js.prototype,`required`,void 0),k([N({type:`boolean`,default:`false`,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],Js.prototype,`invalid`,void 0),Js=k([P(`value-changed`,{description:`Fired whenever the value changes, from user selection or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),P(`focus`,{forwarded:!0}),P(`blur`,{forwarded:!0}),F(`quantic-select`)],Js);var Ys=class extends L{render(){return Yt`
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

    `}};Ys.styles=L.styles,Ys=k([F(`quantic-icon-lucide-chevron-up`)],Ys);var Xs=class extends L{render(){return Yt`
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

    `}};Xs.styles=L.styles,Xs=k([F(`quantic-icon-lucide-panel-left-close`)],Xs);var Zs=class extends L{render(){return Yt`
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

    `}};Zs.styles=L.styles,Zs=k([F(`quantic-icon-lucide-panel-left-open`)],Zs);var Qs=class extends L{render(){return Yt`
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

    `}};Qs.styles=L.styles,Qs=k([F(`quantic-icon-lucide-search`)],Qs);var $s={MAX_LINES:1e4,FOLLOW_SCROLL_THRESHOLD:50},ec=[`log-black`,`log-danger`,`log-success`,`log-warning`,`log-blue`,`log-magenta`,`log-info`,`log-white`,`log-gray`,`log-danger`,`log-success`,`log-warning`,`log-blue`,`log-magenta`,`log-info`,`log-white`],tc=[`#1c1c1c`,`#8b0000`,`#006400`,`#808000`,`#00008b`,`#800080`,`#008b8b`,`#a9a9a9`,`#404040`,`#ff4444`,`#44ff44`,`#ffff44`,`#4444ff`,`#ff44ff`,`#44ffff`,`#ffffff`],nc=e=>e===0?0:55+e*40,rc=e=>{let t=e-16,n=Math.floor(t/36),r=Math.floor(t%36/6),i=t%6;return`rgb(${nc(n)},${nc(r)},${nc(i)})`},ic=e=>{let t=8+(e-232)*10;return`rgb(${t},${t},${t})`},ac=e=>e<232?rc(e):ic(e),oc=[`fgClass`,`fgRgb`,`bgColor`,`bold`,`dim`,`italic`,`underline`],sc=()=>({fgClass:null,fgRgb:null,bgColor:null,bold:!1,dim:!1,italic:!1,underline:!1}),cc=e=>({...e,fgClass:null,fgRgb:null}),lc=(e,t)=>t<16?{...e,fgClass:ec[t],fgRgb:null}:{...e,fgClass:null,fgRgb:ac(t)},uc=(e,t)=>({...e,bgColor:t<16?tc[t]:ac(t)}),dc=(e,t=0)=>({state:e,skip:t}),fc=e=>t=>dc({...t,...e}),pc=e=>t=>dc(e(t)),mc=(e,{params:t,index:n})=>{let r=t[n+1];return r===5&&n+2<t.length?dc(lc(e,t[n+2]),2):r===2&&n+4<t.length?dc({...e,fgClass:null,fgRgb:`rgb(${t[n+2]},${t[n+3]},${t[n+4]})`},4):dc(e)},hc=(e,{params:t,index:n})=>{let r=t[n+1];return r===5&&n+2<t.length?dc(uc(e,t[n+2]),2):r===2&&n+4<t.length?dc({...e,bgColor:`rgb(${t[n+2]},${t[n+3]},${t[n+4]})`},4):dc(e)},gc=e=>t=>dc({...t,fgClass:ec[e],fgRgb:null}),_c=e=>t=>dc({...t,bgColor:tc[e]}),vc={0:()=>dc(sc()),1:fc({bold:!0}),2:fc({dim:!0}),3:fc({italic:!0}),4:fc({underline:!0}),22:fc({bold:!1,dim:!1}),23:fc({italic:!1}),24:fc({underline:!1}),38:mc,39:pc(cc),48:hc,49:fc({bgColor:null})},yc=e=>vc[e]||(e>=30&&e<=37?gc(e-30):e>=40&&e<=47?_c(e-40):e>=90&&e<=97?gc(e-90+8):e>=100&&e<=107?_c(e-100+8):e=>dc(e)),bc=e=>e===``?[0]:e.split(`;`).map(Number),xc=(e,t)=>t.reduce(e=>{if(e.index>=t.length)return e;let n=t[e.index],{state:r,skip:i}=yc(n)(e.state,{params:t,index:e.index});return{state:r,index:e.index+1+i}},{state:e,index:0}).state,Sc=(e,t)=>xc(e,bc(t));function Cc(e){let{fgClass:t,fgRgb:n,bgColor:r,bold:i,dim:a,italic:o,underline:s}=e;return t===null&&n===null&&r===null&&!i&&!a&&!o&&!s}function wc(e){let t=[...e.matchAll(/\x1b\[([0-9;]*)m/g)].reduce((t,n)=>{let r=e.slice(t.cursor,n.index);return{segments:r?[...t.segments,{text:r,state:t.state}]:t.segments,state:Sc(t.state,n[1]),cursor:n.index+n[0].length}},{segments:[],state:sc(),cursor:0}),n=e.slice(t.cursor);return n?[...t.segments,{text:n,state:t.state}]:t.segments}var Tc=e=>e.map(e=>e.text).join(``),Ec=/^\[(?:info|ok|warn|error|debug)\]$/i;function Dc(e){if(e.length<2)return null;let[t,...n]=e;if(!Ec.test(t.text))return null;let r=n.map(e=>({...e,state:{...e.state}})),i=r[0];return i&&(r[0]={...i,text:i.text.replace(/^\s+/,``)}),{tag:t,body:r}}var Oc=(e,t)=>oc.every(n=>e[n]===t[n]),kc=(e,t,n)=>{let r=Array(e).fill(`none`);return t.forEach(({start:e,end:t})=>r.fill(`hit`,e,t)),n&&r.fill(`active`,n.start,n.end),r},Ac=(e,t)=>{let n=[],r=Math.max(t.length,1);for(let i=e.indexOf(t);i!==-1;i=e.indexOf(t,i+r))n.push({start:i,end:i+t.length});return n};function jc(e,t){let n=t.trim();return n?Ac(e.toLowerCase(),n.toLowerCase()):[]}function Mc(e,t){return e.flatMap((e,n)=>jc(Tc(e),t).map(({start:e,end:t})=>({lineIndex:n,start:e,end:t})))}var Nc=e=>e.map((t,n)=>e.slice(0,n).reduce((e,t)=>e+t.text.length,0)),Pc=e=>{let t=Nc(e);return e.flatMap((e,n)=>e.text.split(``).map((r,i)=>({char:r,state:e.state,pos:t[n]+i})))},Fc=e=>e.reduce((e,t)=>{let n=e[e.length-1];return n&&n.highlight===t.highlight&&Oc(n.state,t.state)?e[e.length-1]={...n,text:n.text+t.text}:e.push(t),e},[]);function Ic(e,t,n){if(!t.length)return e.map(e=>({...e,highlight:`none`}));let r=Pc(e),i=kc(r.length,t,n);return Fc(r.map(({char:e,state:t,pos:n})=>({text:e,state:t,highlight:i[n]})))}var Lc=class extends Qn{constructor(){super(...arguments),this.parsed=[],this.lineIndex=0,this.searchQuery=``,this.activeMatch=null,this.lineNumber=0}scrollActiveMatchIntoView(){this.renderRoot.querySelector(`.log-search-active`)?.scrollIntoView({block:`nearest`,inline:`nearest`})}renderSegment({text:e,state:t}){if(Cc(t))return e;let n={"log-bold":t.bold,"log-dim":t.dim,"log-italic":t.italic,"log-underline":t.underline};return t.fgClass&&(n[t.fgClass]=!0),A`<span
      class=${hr(n)}
      style=${Ns({color:t.fgRgb,background:t.bgColor})}
      >${e}</span
    >`}renderSearchSlice(e){let t=this.renderSegment({text:e.text,state:e.state});return e.highlight===`none`?t:A`<mark
      class=${hr({"log-search-hit":e.highlight===`hit`,"log-search-active":e.highlight===`active`})}
      >${t}</mark
    >`}get showLineNumber(){return this.lineNumber>0}renderLineNumber(){return this.showLineNumber?A`<span class="line-number">${this.lineNumber}</span>`:null}renderPlainContent(e){return A`<span class="log-line">${e.map(e=>this.renderSegment(e))}</span>`}renderLeveledContent(e){return A`<span class="log-level-tag">${this.renderSegment(e.tag)}</span
      ><span class="log-level-body">${e.body.map(e=>this.renderSegment(e))}</span>`}renderSearchContent(e){let t=this.searchQuery.trim(),n=jc(Tc(e),t),r=this.activeMatch;return A`<span class="log-line">${Ic(e,n,r&&r.lineIndex===this.lineIndex?{start:r.start,end:r.end}:null).map(e=>this.renderSearchSlice(e))}</span>`}willUpdate(){let e=this.searchQuery.trim()?null:Dc(this.parsed);this.toggleAttribute(`leveled`,!!e)}render(){let e=this.parsed,t=this.searchQuery.trim(),n=t?null:Dc(e);return n?A`${this.renderLineNumber()}${this.renderLeveledContent(n)}`:t?A`${this.renderLineNumber()}${this.renderSearchContent(e)}`:A`${this.renderLineNumber()}${this.renderPlainContent(e)}`}};Lc.meta={tag:`quantic-log-output-line`,description:`Single rendered row within quantic-log-output. Applies ANSI styling, optional level-tag layout, and in-buffer search highlights.`,category:`display`,subComponentOf:`quantic-log-output`,relatedTo:[`quantic-log-output`]},Lc.styles=lt`
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
  `,k([N({type:`AnsiSegment[]`,default:`[]`,attribute:!1,description:`Parsed ANSI segments for this buffer line.`})],Lc.prototype,`parsed`,void 0),k([N({type:`number`,default:`0`,attribute:`line-index`,description:`Zero-based index of this line in the parent buffer.`})],Lc.prototype,`lineIndex`,void 0),k([N({type:`string`,default:``,attribute:!1,description:`Current search query from the parent log viewer.`})],Lc.prototype,`searchQuery`,void 0),k([N({type:`{ lineIndex: number; start: number; end: number } | null`,default:`null`,attribute:!1,description:`Active search match in the buffer, if any.`})],Lc.prototype,`activeMatch`,void 0),k([N({type:`number`,default:`0`,attribute:`line-number`,description:`When greater than zero, shows this ordinal beside the row.`})],Lc.prototype,`lineNumber`,void 0),Lc=k([F(`quantic-log-output-line`)],Lc),yo.ensureDefined(),bo.ensureDefined(),I.ensureDefined(),Ks.ensureDefined(),Qs.ensureDefined(),Ys.ensureDefined(),Ga.ensureDefined(),Pr.ensureDefined();var Rc=class extends Qn{constructor(){super(...arguments),this.value=``,this.matchCount=0,this.activeMatchIndex=0,this.open=!1}updated(e){e.has(`open`)&&this.open&&this.focusSearchInput()}showSearch(){this.open?this.focusSearchInput():this.openSearch()}focusSearchInput(){this.updateComplete.then(()=>{let e=this.inputEl;e&&e.updateComplete.then(()=>e.focus())})}get matchLabel(){return this.matchCount?`${Math.min(this.activeMatchIndex+1,this.matchCount)} / ${this.matchCount}`:`0 / 0`}emitValue(e){this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:e},bubbles:!0,composed:!0}))}emitOpen(e){this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:e},bubbles:!0,composed:!0}))}openSearch(){this.open=!0,this.emitOpen(!0)}closeSearch(){this.open=!1,this.emitOpen(!1),this.emitValue(``)}handleToggleOpen(){this.open?this.closeSearch():this.openSearch()}handleValueChanged(e){e.stopPropagation(),this.emitValue(e.detail.value)}handleKeydown(e){e.key===`Escape`?(e.preventDefault(),this.closeSearch()):e.key===`Enter`&&(e.preventDefault(),this.dispatchEvent(new CustomEvent(e.shiftKey?`previous-match`:`next-match`,{bubbles:!0,composed:!0})))}handlePreviousMatch(){this.dispatchEvent(new CustomEvent(`previous-match`,{bubbles:!0,composed:!0}))}handleNextMatch(){this.dispatchEvent(new CustomEvent(`next-match`,{bubbles:!0,composed:!0}))}render(){return this.open?A`
      <quantic-text-input
        type="search"
        size=${Gs.ExtraSmall}
        placeholder="Search"
        aria-label="Search log"
        .value=${this.value}
        @value-changed=${this.handleValueChanged}
        @keydown=${this.handleKeydown}
      ></quantic-text-input>
      <span class="count" aria-live="polite">${this.matchLabel}</span>
      <quantic-button-bar size=${po.ExtraSmall} aria-label="Search match navigation">
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
    `:A`
        <quantic-button
          icon
          size=${ur.ExtraSmall}
          variant="outline"
          aria-label="Search log"
          @click=${this.handleToggleOpen}
        >
          <quantic-icon-lucide-search size="xxs"></quantic-icon-lucide-search>
        </quantic-button>
      `}};Rc.meta={tag:`quantic-log-output-search`,description:`Floating search control for quantic-log-output. Collapsed to a search icon; expanded to a query field with match navigation.`,category:`display`,subComponentOf:`quantic-log-output`,relatedTo:[`quantic-log-output`,`quantic-text-input`,`quantic-button-bar`]},Rc.styles=lt`
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
  `,k([N({type:`string`,default:``,description:`Current search query.`})],Rc.prototype,`value`,void 0),k([N({type:`number`,default:`0`,attribute:`match-count`,description:`Total matches in the log buffer.`})],Rc.prototype,`matchCount`,void 0),k([N({type:`number`,default:`0`,attribute:`active-match-index`,description:`Zero-based index of the highlighted match.`})],Rc.prototype,`activeMatchIndex`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Whether the search field is expanded.`})],Rc.prototype,`open`,void 0),k([xn(`quantic-text-input`)],Rc.prototype,`inputEl`,void 0),Rc=k([P(`value-changed`,{description:`Fired when the search query changes, including when cleared on close.`,detail:`{ value: string }`}),P(`previous-match`,{description:`Fired when the user activates the previous-match control.`}),P(`next-match`,{description:`Fired when the user activates the next-match control.`}),P(`open-changed`,{description:`Fired when the overlay expands or collapses.`,detail:`{ open: boolean }`}),F(`quantic-log-output-search`)],Rc),So.ensureDefined(),Rc.ensureDefined(),Lc.ensureDefined();var zc=class extends Qn{constructor(){super(...arguments),this.follow=!0,this.followLabel=`Follow`,this.lineNumbers=!1,this.maxLines=$s.MAX_LINES,this.searchable=!0,this.lineBuffer=[],this.searchQuery=``,this.activeMatchIndex=0,this.resizeObserver=null,this.handleScroll=()=>{let{scrollTop:e,scrollHeight:t,clientHeight:n}=this.outputEl;this.follow=!(t-e-n>$s.FOLLOW_SCROLL_THRESHOLD)}}get lines(){return this.lineBuffer.map(e=>e.raw)}set lines(e){this.lineBuffer=this.clampToMax(e.map(e=>({raw:e,parsed:wc(e)})))}get isSearchActive(){return this.searchable&&this.searchQuery.trim().length>0}get effectiveSearchQuery(){return this.searchable?this.searchQuery:``}get searchMatches(){return Mc(this.lineBuffer.map(e=>e.parsed),this.searchQuery)}get activeMatch(){let e=this.searchMatches;return e.length?e[Math.min(Math.max(this.activeMatchIndex,0),e.length-1)]??null:null}firstUpdated(){this.outputEl.addEventListener(`scroll`,this.handleScroll),this.resizeObserver=new ResizeObserver(()=>{this.follow&&!this.isSearchActive&&this.scrollToBottom()}),this.resizeObserver.observe(this.outputEl)}updated(e){if(e.has(`maxLines`)&&(this.lineBuffer=this.clampToMax(this.lineBuffer)),e.has(`searchable`)&&!this.searchable&&(this.searchQuery=``,this.activeMatchIndex=0),e.has(`searchQuery`)&&(this.activeMatchIndex=0),e.has(`lineBuffer`)||e.has(`searchQuery`)){let e=this.searchMatches.length;e===0?this.activeMatchIndex=0:this.activeMatchIndex>=e&&(this.activeMatchIndex=e-1)}this.follow&&!this.isSearchActive&&this.scrollToBottom(),this.isSearchActive&&(e.has(`activeMatchIndex`)||e.has(`lineBuffer`)||e.has(`searchQuery`))&&this.scrollActiveMatchIntoView()}disconnectedCallback(){super.disconnectedCallback(),this.outputEl?.removeEventListener(`scroll`,this.handleScroll),this.resizeObserver?.disconnect(),this.resizeObserver=null}appendLine(e){this.lineBuffer=this.clampToMax([...this.lineBuffer,{raw:e,parsed:wc(e)}])}clampToMax(e){return e.length>this.maxLines?e.slice(-this.maxLines):e}renderLineRows(){let e=this.activeMatch;return this.lineBuffer.map(({parsed:t},n)=>A`<quantic-log-output-line
        .parsed=${t}
        .lineIndex=${n}
        .searchQuery=${this.effectiveSearchQuery}
        .activeMatch=${e}
        .lineNumber=${this.lineNumbers?n+1:0}
      ></quantic-log-output-line>`)}scrollToBottom(){this.outputEl.scrollTop=this.outputEl.scrollHeight}scrollActiveMatchIntoView(){requestAnimationFrame(()=>{let e=this.activeMatch;e&&(this.outputEl?.querySelector(`quantic-log-output-line[line-index="${e.lineIndex}"]`))?.scrollActiveMatchIntoView()})}handleFollowChange(e){this.follow=e.detail.checked,this.follow&&this.scrollToBottom()}handleSearchValueChanged(e){this.searchQuery=e.detail.value}handleOutputKeydown(e){this.searchable&&e.key===`f`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),this.searchEl?.showSearch())}goToPreviousMatch(){let e=this.searchMatches.length;e&&(this.activeMatchIndex=(this.activeMatchIndex-1+e)%e)}goToNextMatch(){let e=this.searchMatches.length;e&&(this.activeMatchIndex=(this.activeMatchIndex+1)%e)}render(){let e=this.searchMatches.length;return A`
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
        ${this.searchable?A`<quantic-log-output-search
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
    `}};zc.meta={tag:`quantic-log-output`,description:`Scrollable terminal-style log viewer that renders ANSI-coloured text with optional line numbers. Accepts lines as a property array or via appendLine(). A follow checkbox auto-scrolls to the latest line. When searchable, an overlay search control finds text in the log buffer.`,category:`display`,accessibility:{providedByComponent:[`live region for appended output`,`a follow toggle so announcements can be stopped`,`in-log search with match navigation when searchable`],requiredFromConsumer:[`a followLabel describing what following does`]},slots:{toolbar:{description:`Additional controls placed in the toolbar next to the follow checkbox.`}}},zc.styles=lt`
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
  `,k([N({type:`boolean`,default:`true`,reflect:!0,description:`When true, the output automatically scrolls to the latest line.`})],zc.prototype,`follow`,void 0),k([N({type:`string`,default:`Follow`,attribute:`follow-label`,description:`Label text for the follow toggle checkbox.`,copyRule:`toggle-effect-label`})],zc.prototype,`followLabel`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,attribute:`line-numbers`,description:`When true, prepends line numbers to each row.`})],zc.prototype,`lineNumbers`,void 0),k([N({type:`number`,default:String($s.MAX_LINES),attribute:`max-lines`,description:`Maximum number of lines retained in the buffer. Older lines are dropped when the limit is exceeded.`})],zc.prototype,`maxLines`,void 0),k([N({type:`boolean`,default:`true`,reflect:!0,description:`When true, shows in-log search and highlights matches. Set to false to omit search UI and keyboard shortcut.`})],zc.prototype,`searchable`,void 0),k([yn()],zc.prototype,`lineBuffer`,void 0),k([yn()],zc.prototype,`searchQuery`,void 0),k([yn()],zc.prototype,`activeMatchIndex`,void 0),k([xn(`.output`)],zc.prototype,`outputEl`,void 0),k([xn(`quantic-log-output-search`)],zc.prototype,`searchEl`,void 0),zc=k([F(`quantic-log-output`)],zc);var Bc=class extends Qn{constructor(){super(...arguments),this.direction=`horizontal`,this.resizable=!1,this.split=``,this.collapseBelow=`640px`,this.panes=[],this.sizes=[],this.mutationObserver=null,this.collapsedObserver=null,this.resizeObserver=null,this.dragInfo=null,this.handlePointerMove=e=>{if(!this.dragInfo)return;let t=this.direction===`vertical`?this.wrapper.clientHeight:this.wrapper.clientWidth;if(t===0)return;let{dividerIndex:n,startX:r,startY:i,startLayoutA:a,startLayoutB:o}=this.dragInfo,s=this.panes[n-1],c=this.panes[n],[l,u]=Ls(a,(this.direction===`vertical`?e.clientY-i:e.clientX-r)/t*100,{a:Ps(s),b:Ps(c),total:a+o}),d=[...this.sizes];d[n-1]=Rs(l,this.dragInfo.activeSizesSum),d[n]=Rs(u,this.dragInfo.activeSizesSum),this.sizes=d,this.applySizes()},this.handlePointerUp=()=>{this.dragInfo&&(this.renderRoot.querySelectorAll(`.divider.dragging`).forEach(e=>{e.classList.remove(`dragging`)}),this.removeEventListener(`pointermove`,this.handlePointerMove),this.removeEventListener(`pointerup`,this.handlePointerUp),this.removeEventListener(`pointercancel`,this.handlePointerUp),this.dragInfo=null,this.dispatchEvent(new CustomEvent(`resize`,{bubbles:!0,composed:!0,detail:{sizes:this.sizes}})))}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.discoverPanes()),this.mutationObserver.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.collapsedObserver?.disconnect(),this.resizeObserver?.disconnect(),this.dragInfo&&=(this.removeEventListener(`pointermove`,this.handlePointerMove),this.removeEventListener(`pointerup`,this.handlePointerUp),this.removeEventListener(`pointercancel`,this.handlePointerUp),null)}firstUpdated(){this.discoverPanes(),this.setupResizeObserver()}updated(e){super.updated(e),e.has(`split`)&&(this.sizes=Hs(this.split,this.panes.length),this.applySizes()),(e.has(`collapseBelow`)||e.has(`direction`))&&this.checkStacked()}discoverPanes(){let e=Array.from(this.querySelectorAll(`:scope > quantic-splitter-pane`));e.forEach((e,t)=>{let n=`pane-${t}`;e.getAttribute(`slot`)!==n&&e.setAttribute(`slot`,n)}),this.panes.forEach(t=>{e.includes(t)||(t.removeAttribute(`slot`),t.removeAttribute(`stacked`))});let t=this.panes.length;this.panes=e,e.length!==t&&(this.sizes=Hs(this.split,e.length)),this.setupCollapsedObserver(),this.applySizes()}setupCollapsedObserver(){this.collapsedObserver?.disconnect(),this.panes.length!==0&&(this.collapsedObserver=new MutationObserver(()=>{this.panes=[...this.panes],this.applySizes()}),this.panes.forEach(e=>{this.collapsedObserver.observe(e,{attributes:!0,attributeFilter:[`collapsed`]})}))}setupResizeObserver(){this.wrapper&&(this.resizeObserver=new ResizeObserver(e=>{let t=e[0];t&&this.checkStackedForSize(t.contentRect.width)}),this.resizeObserver.observe(this.wrapper))}checkStacked(){this.wrapper&&this.checkStackedForSize(this.wrapper.clientWidth)}checkStackedForSize(e){let t=(this.collapseBelow??``).trim(),n=t.endsWith(`px`)?parseFloat(t):NaN;if(this.direction!==`vertical`&&!Number.isFinite(n))return;let r=this.direction!==`vertical`&&e<=n;this.toggleAttribute(`stacked`,r),this.panes.forEach(e=>e.toggleAttribute(`stacked`,r))}applySizes(){let e=zs(this.sizes,this.panes);this.panes.forEach((t,n)=>{t.style.setProperty(`--quantic-component-splitter-pane-flex-grow`,String(e[n]))}),this.renderRoot.querySelectorAll(`[part="divider"]`).forEach((t,n)=>{t.setAttribute(`aria-valuenow`,String(Math.round(e[n])))})}dividerEffectiveBounds(e,t){let n=Ps(this.panes[e-1]),r=Ps(this.panes[e]),i=t[e-1]+t[e];return{min:Math.max(n.min,i-r.max),max:Math.min(n.max,i-r.min)}}isDividerDisabled(e){return!this.resizable||(this.panes[e-1]?.collapsed??!1)||(this.panes[e]?.collapsed??!1)}isDividerHidden(e){return(this.panes[e-1]?.hasAttribute(`collapsed`)??!1)||(this.panes[e]?.hasAttribute(`collapsed`)??!1)}handleDividerPointerDown(e,t){e.preventDefault();let n=e.currentTarget;n.setPointerCapture(e.pointerId),n.classList.add(`dragging`);let r=zs(this.sizes,this.panes),i=Is(this.sizes,this.panes);this.dragInfo={dividerIndex:t,startX:e.clientX,startY:e.clientY,startLayoutA:r[t-1],startLayoutB:r[t],activeSizesSum:i},this.addEventListener(`pointermove`,this.handlePointerMove),this.addEventListener(`pointerup`,this.handlePointerUp),this.addEventListener(`pointercancel`,this.handlePointerUp)}handleDividerKeyDown(e,t){let n=Fs(e.key,this.direction===`vertical`);if(n===null)return;e.preventDefault();let r=zs(this.sizes,this.panes),[i,a]=Ls(r[t-1],n,{a:Ps(this.panes[t-1]),b:Ps(this.panes[t]),total:r[t-1]+r[t]}),o=Is(this.sizes,this.panes),s=[...this.sizes];s[t-1]=Rs(i,o),s[t]=Rs(a,o),this.sizes=s,this.applySizes(),this.dispatchEvent(new CustomEvent(`resize`,{bubbles:!0,composed:!0,detail:{sizes:this.sizes}}))}render(){let e=zs(this.sizes,this.panes);return A`
      <div
        class=${hr({wrapper:!0,"direction--horizontal":this.direction===`horizontal`,"direction--vertical":this.direction===`vertical`})}
      >
        ${this.panes.map((t,n)=>{let r=n>0?this.dividerEffectiveBounds(n,e):null;return A`${n>0&&!this.isDividerHidden(n)?A`<div
                    class=${hr({divider:!0,disabled:this.isDividerDisabled(n)})}
                    part="divider"
                    role="separator"
                    tabindex=${this.isDividerDisabled(n)?j:`0`}
                    aria-orientation=${this.direction===`vertical`?`horizontal`:`vertical`}
                    aria-valuenow=${Math.round(e[n-1])}
                    aria-valuemin=${Math.round(r.min)}
                    aria-valuemax=${Math.round(r.max)}
                    @pointerdown=${e=>this.handleDividerPointerDown(e,n)}
                    @keydown=${e=>this.handleDividerKeyDown(e,n)}
                  ></div>`:j}<slot name="pane-${n}"></slot>`})}
      </div>
    `}};Bc.meta={tag:`quantic-splitter-group`,description:`Resizable panel container — renders two or more panes separated by draggable dividers. Collapses to a stacked layout below the collapse-below breakpoint.`,category:`layout`,accessibility:{providedByComponent:[`separator roles`,`keyboard resize`,`roving tabindex across the handles`],requiredFromConsumer:[`an accessible name for each pane`]},slots:{"":{description:`Two or more quantic-splitter-pane elements.`}},parts:{divider:{description:`The draggable handle between two panes.`}}},Bc.styles=lt`
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
  `,k([N({type:`"horizontal" | "vertical"`,default:`horizontal`,description:`Axis along which panes are split.`})],Bc.prototype,`direction`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Enables draggable dividers for interactive resizing.`})],Bc.prototype,`resizable`,void 0),k([N({type:`string`,description:`Comma-separated initial size percentages, e.g. "30,70". Equal split when omitted.`})],Bc.prototype,`split`,void 0),k([N({attribute:`collapse-below`,type:`string`,default:`640px`,description:`Pixel breakpoint below which panes stack vertically instead of side-by-side.`})],Bc.prototype,`collapseBelow`,void 0),k([xn(`.wrapper`)],Bc.prototype,`wrapper`,void 0),k([yn()],Bc.prototype,`panes`,void 0),Bc=k([F(`quantic-splitter-group`)],Bc);var Vc=class extends Qn{constructor(){super(...arguments),this.collapsed=!1,this.minSize=10,this.maxSize=90,this.variant=`default`}render(){return A`<slot></slot>`}};Vc.meta={tag:`quantic-splitter-pane`,description:`Individual resizable pane within a quantic-splitter-group. Set min-size and max-size to constrain how far it can be dragged.`,category:`layout`,subComponentOf:`quantic-splitter-group`,slots:{"":{description:`Pane content.`}},relatedTo:[`quantic-splitter-group`]},Vc.styles=lt`
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
  `,k([N({type:`boolean`,default:`false`,reflect:!0,description:`Collapses the pane to zero size, hiding its content.`})],Vc.prototype,`collapsed`,void 0),k([N({type:`number`,default:`10`,attribute:`min-size`,description:`Minimum size as a percentage of the splitter container.`})],Vc.prototype,`minSize`,void 0),k([N({type:`number`,default:`90`,attribute:`max-size`,description:`Maximum size as a percentage of the splitter container.`})],Vc.prototype,`maxSize`,void 0),k([N({type:`"default" | "solid"`,default:`default`,reflect:!0,description:`Visual style — "solid" applies a secondary background color.`})],Vc.prototype,`variant`,void 0),Vc=k([F(`quantic-splitter-pane`)],Vc);var Hc={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},Uc={[Hc.ExtraSmall]:xo.ExtraSmall,[Hc.Large]:xo.Medium};So.ensureDefined(),Pr.ensureDefined();var Wc=class extends Qn{constructor(){super(...arguments),this.size=Hc.Medium,this.selectable=!1,this.dismissible=!1,this.selected=!1}handleClick(){this.selectable&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(`tag-select`,{detail:{selected:this.selected},bubbles:!0,composed:!0})))}handleDismiss(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent(`tag-dismiss`,{bubbles:!0,composed:!0}))}handleKeyDown(e){this.selectable&&(e.key===`Enter`||e.key===` `)&&!e.target.closest(`.dismiss-button`)&&(e.preventDefault(),this.handleClick())}render(){return cr`
      <div
        class=${hr({main:!0,[`size--${this.size}`]:!0,selectable:this.selectable})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        tabindex=${this.selectable?`0`:`-1`}
        role=${this.selectable?`checkbox`:void 0}
        aria-checked=${this.selectable?String(this.selected):void 0}
      >
        ${this.selectable?cr`<quantic-checkbox
                size=${Uc[this.size]??`sm`}
                ?checked=${this.selected}
              ></quantic-checkbox>`:null}
        <slot name="before"></slot>
        <slot></slot>
        <slot name="after"></slot>
        ${this.dismissible?cr`
                <button class="dismiss-button" @click=${this.handleDismiss} aria-label="Dismiss">
                  <quantic-icon-lucide-x size="xs"></quantic-icon-lucide-x>
                </button>
              `:null}
      </div>
    `}};Wc.meta={tag:`quantic-tag`,description:`Compact inline label that can be dismissible or selectable. Used for filters, categories, and version tags. Use quantic-count-tag or quantic-status-tag for specialised variants.`,category:`display`,avoidWhen:[{when:`the tag shows a numeric count`,useInstead:`quantic-count-tag`},{when:`the tag shows a semantic status`,useInstead:`quantic-status-tag`}],accessibility:{providedByComponent:[`keyboard dismissal when dismissible`,`roving tabindex within a tag group`]},slots:{"":{description:`Tag label text or icon content.`},before:{description:`Leading content (e.g. icon or color dot).`},after:{description:`Trailing content (e.g. count badge).`}},relatedTo:[`quantic-count-tag`,`quantic-status-tag`,`quantic-badge`]},Wc.styles=lt`
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
  `,k([N({type:`TagSize`,options:Object.values(Hc),default:Hc.Medium,description:`Controls padding and font size.`})],Wc.prototype,`size`,void 0),k([N({type:`boolean`,default:`false`,description:`Renders a checkbox and makes the tag toggleable.`})],Wc.prototype,`selectable`,void 0),k([N({type:`boolean`,default:`false`,description:`Shows a dismiss (×) button to remove the tag.`})],Wc.prototype,`dismissible`,void 0),k([N({type:`boolean`,default:`false`,description:`Current selected state when selectable is true.`})],Wc.prototype,`selected`,void 0),Wc=k([P(`tag-select`,{description:`Fired when a tag's selection state changes (only when selectable is true).`,detail:`{ selected: boolean }`}),P(`tag-dismiss`,{description:`Fired when a tag's dismiss button is clicked (only when dismissible is true).`}),F(`quantic-tag`)],Wc);var Gc={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},Kc={None:`none`,Vertical:`vertical`,Horizontal:`horizontal`,Both:`both`};Ka.ensureDefined();var qc=class extends Ua(Qn){constructor(){super(),this.value=``,this.name=``,this.placeholder=``,this.size=Gc.Medium,this.rows=4,this.resize=Kc.Vertical,this.disabled=!1,this.required=!1,this.readOnly=!1,this.invalid=!1,this.autoComplete=`off`,this.internals=this.attachInternals()}updated(e){e.has(`value`)&&(this.internals.setFormValue(this.value),this.updateValidity()),Dr(this,e,this.value)}forwardNative(e){let t=e.target;this.value=t.value,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}dispatchValueChanged(e){this.value=e.target.value}formResetCallback(){this.value=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}updateValidity(){let e=this.shadowRoot?.querySelector(`textarea`);e&&this.internals.setValidity(e.validity,e.validationMessage,e)}render(){let e=hr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return A`
      <div class=${e}>
        <textarea
          .value=${this.value}
          .autocomplete="${this.autoComplete}"
          class="input"
          placeholder=${this.placeholder}
          name=${this.name}
          .rows=${this.rows}
          part="input"
          style=${Ns({resize:this.resize})}
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
        ${this.invalid?A`<quantic-icon-lucide-circle-alert
              name=${br.CircleAlert}
              size=${yr.Small}
              class="error-icon"
            ></quantic-icon-lucide-circle-alert>`:``}
      </div>
    `}};qc.meta={tag:`quantic-textarea`,description:`Multi-line text field with native form association. Wrap in quantic-field to add a visible label, hint text, and validation messaging.`,category:`form`,avoidWhen:[{when:`the value is code or structured text needing a line gutter`,useInstead:`quantic-code-input`}],accessibility:{providedByComponent:[`form association`,`native textarea semantics`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},parts:{input:{description:`The native textarea element.`}},relatedTo:[`quantic-field`,`quantic-text-input`]},qc.formAssociated=!0,qc.styles=lt`
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
  `,k([N({type:`string`,default:``,description:`Current value of the textarea.`})],qc.prototype,`value`,void 0),k([N({type:`string`,description:`Name submitted with form data.`})],qc.prototype,`name`,void 0),k([N({type:`string`,description:`Placeholder text shown when the field is empty.`,copyRule:`placeholder`})],qc.prototype,`placeholder`,void 0),k([N({type:`TextareaSize`,options:Object.values(Gc),default:Gc.Medium,description:`Controls padding and font size.`})],qc.prototype,`size`,void 0),k([N({type:`number`,default:`4`,description:`Number of visible text rows.`})],qc.prototype,`rows`,void 0),k([N({type:`TextareaResize`,options:Object.values(Kc),default:Kc.Vertical,description:`Controls the resize handle direction.`})],qc.prototype,`resize`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],qc.prototype,`disabled`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],qc.prototype,`required`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Makes the field non-editable but still focusable and selectable.`})],qc.prototype,`readOnly`,void 0),k([N({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],qc.prototype,`invalid`,void 0),k([N({type:`string`,default:`off`,reflect:!0,description:`Native autocomplete attribute passed to the inner <textarea>.`})],qc.prototype,`autoComplete`,void 0),qc=k([P(`value-changed`,{description:`Fired whenever the value changes, from user input or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),P(`input`,{forwarded:!0}),P(`change`,{forwarded:!0}),P(`focus`,{forwarded:!0}),P(`blur`,{forwarded:!0}),P(`keydown`,{forwarded:!0}),P(`keyup`,{forwarded:!0}),P(`keypress`,{forwarded:!0}),F(`quantic-textarea`)],qc);function Jc(e){return e}var Yc=/\/\*(?:[^*]|\*(?!\/))*\*\//g,Xc=/\n/g,Zc=/^\s*/,Qc=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,$c=/^:\s*/,el=/^((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|url\((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|[^)]*)\)|[^};])+)/,tl=/^[;\s]*/,nl=`
`,rl=`/`,il=`*`,al=``,ol=`comment`,sl=`declaration`;function cl(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var n=1,r=1;function i(e){var t=e.match(Xc);t&&(n+=t.length);var i=e.lastIndexOf(nl);r=~i?e.length-i:r+e.length}function a(){var e={line:n,column:r};return function(t){return t.position=new o(e),l(),t}}function o(e){this.start=e,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function s(i){var a=Error(t.source+`:`+n+`:`+r+`: `+i);if(a.reason=i,a.filename=t.source,a.line=n,a.column=r,a.source=e,!t.silent)throw a}function c(t){var n=t.exec(e);if(n){var r=n[0];return i(r),e=e.slice(r.length),n}}function l(){c(Zc)}function u(e){for(var t;t=d();)e.push(t);return e}function d(){var t=a();if(rl==e.charAt(0)&&il==e.charAt(1)){for(var n=2;al!=e.charAt(n)&&(il!=e.charAt(n)||rl!=e.charAt(n+1));)++n;if(n+=2,al===e.charAt(n-1))return s(`End of comment missing`);var o=e.slice(2,n-2);return r+=2,i(o),e=e.slice(n),r+=2,t({type:ol,comment:o})}}function f(){var e=a(),t=c(Qc);if(t){if(d(),!c($c))return s(`property missing ':'`);var n=c(el),r=e({type:sl,property:t[0].replace(Yc,al).trim(),value:n?n[0].replace(Yc,al).trim():al});return c(tl),r}}function p(){var e=[];u(e);for(var t;t=f();)e.push(t),u(e);return e}return l(),p()}function ll(e,t){let n=null;if(!e||typeof e!=`string`)return n;let r=cl(e),i=typeof t==`function`;return r.forEach(e=>{if(e.type!==`declaration`)return;let{property:r,value:a}=e;i?t(r,a,e):a&&(n??={},n[r]=a)}),n}var ul=/^--[a-zA-Z0-9_-]+$/,dl=/-([a-z])/g,fl=/^[^-]+$/,pl=/^-(webkit|moz|ms|o|khtml)-/,ml=/^-(ms)-/,hl=e=>!e||fl.test(e)||ul.test(e),gl=(e,t)=>t.toUpperCase(),_l=(e,t)=>`${t}-`,vl=(e,t={})=>hl(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(ml,_l):e.replace(pl,_l),e.replace(dl,gl));function yl(e,t){let n={};return!e||typeof e!=`string`||ll(e,(e,r)=>{e&&r&&(n[vl(e,t)]=r)}),n}var H=(e,t,...n)=>{let r=typeof t?.style==`object`?t.style:void 0;return Jc((e,t,...n)=>{let i=t?.style;return typeof i==`string`&&(t={...t,style:{...r,...yl(i,{reactCompat:!0})}}),_.createElement(e,t,...n)})(e,t,...n)},bl={..._,createElement:H};typeof window>`u`&&(globalThis.litSsrReactEnabled=!0);var xl=et({react:bl,tagName:`quantic-alert`,elementClass:Fr,events:{onClose:`close`}});xl.displayName=`Alert`;var Sl=et({react:bl,tagName:`quantic-badge`,elementClass:no});Sl.displayName=`Badge`;var U=et({react:bl,tagName:`quantic-button`,elementClass:I});U.displayName=`Button`;var Cl=et({react:bl,tagName:`quantic-button-bar-item`,elementClass:bo});Cl.displayName=`ButtonBarItem`;var wl=et({react:bl,tagName:`quantic-button-bar`,elementClass:yo});wl.displayName=`ButtonBar`;var Tl=et({react:bl,tagName:`quantic-checkbox`,elementClass:So,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`}});Tl.displayName=`Checkbox`;var El=et({react:bl,tagName:`quantic-combobox`,elementClass:$a,events:{onValueChanged:`value-changed`,onInputChanged:`input-changed`,onFocus:`focus`,onBlur:`blur`}});El.displayName=`Combobox`;var Dl=et({react:bl,tagName:`quantic-confirm-dialog`,elementClass:As,events:{onConfirm:`confirm`,onCancel:`cancel`}});Dl.displayName=`ConfirmDialog`;var Ol=et({react:bl,tagName:`quantic-dialog-actions`,elementClass:Oo});Ol.displayName=`DialogActions`;var kl=et({react:bl,tagName:`quantic-dialog-title`,elementClass:Do});kl.displayName=`DialogTitle`;var Al=et({react:bl,tagName:`quantic-dialog`,elementClass:ks,events:{onOpenChanged:`open-changed`,onBeforeOpen:`before-open`,onAfterOpen:`after-open`,onBeforeClose:`before-close`,onAfterClose:`after-close`}});Al.displayName=`Dialog`;var jl=et({react:bl,tagName:`quantic-icon-lucide-panel-left-close`,elementClass:Xs});jl.displayName=`LucideIconPanelLeftClose`;var Ml=et({react:bl,tagName:`quantic-icon-lucide-panel-left-open`,elementClass:Zs});Ml.displayName=`LucideIconPanelLeftOpen`;var Nl=et({react:bl,tagName:`quantic-icon-lucide-x`,elementClass:Pr});Nl.displayName=`LucideIconX`;var Pl=et({react:bl,tagName:`quantic-log-output`,elementClass:zc});Pl.displayName=`LogOutput`;var Fl=et({react:bl,tagName:`quantic-select`,elementClass:Js,events:{onValueChanged:`value-changed`,onFocus:`focus`,onBlur:`blur`}});Fl.displayName=`Select`;var Il=et({react:bl,tagName:`quantic-splitter-group`,elementClass:Bc});Il.displayName=`SplitterGroup`;var Ll=et({react:bl,tagName:`quantic-splitter-pane`,elementClass:Vc});Ll.displayName=`SplitterPane`;var Rl=et({react:bl,tagName:`quantic-tag`,elementClass:Wc,events:{onTagSelect:`tag-select`,onTagDismiss:`tag-dismiss`}});Rl.displayName=`Tag`;var zl=et({react:bl,tagName:`quantic-text-input`,elementClass:Ks,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`,onKeypress:`keypress`}});zl.displayName=`TextInput`;var Bl=et({react:bl,tagName:`quantic-textarea`,elementClass:qc,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`,onKeypress:`keypress`}});Bl.displayName=`Textarea`;async function Vl(e){let t=await fetch(e);if(!t.ok)throw Error(`${e}: HTTP ${t.status}`);return await t.json()}var Hl=()=>Vl(`/api/assets`),Ul=()=>Vl(`/api/status`),Wl=()=>Vl(`/api/vocabulary`);async function Gl(e,t,n){try{let r=await fetch(t,{method:e,headers:n===void 0?void 0:{"Content-Type":`application/json`},body:n===void 0?void 0:JSON.stringify(n)}),i=await r.json().catch(()=>({}));if(r.ok&&i.asset){let e=i.asset.id;return{ok:!0,asset:{...i.asset,thumb_url:`/thumbs/${e}.webp`,full_url:`/files/${e}`}}}return{ok:!1,status:r.status,error:i.error??`HTTP ${r.status}`,errors:i.errors??[]}}catch(e){return{ok:!1,status:0,error:e.message,errors:[]}}}var Kl=(e,t)=>Gl(`PATCH`,`/api/assets/${encodeURIComponent(e)}`,t),ql=e=>Gl(`POST`,`/api/assets/${encodeURIComponent(e)}/confirm`),Jl=e=>Gl(`POST`,`/api/assets/${encodeURIComponent(e)}/retire`),Yl=e=>Gl(`POST`,`/api/assets/${encodeURIComponent(e)}/restore`),Xl=(e,t=8)=>Vl(`/api/assets/${encodeURIComponent(e)}/similar?limit=${t}`);function Zl(e){let t={},n=[];for(let r of e){let e=/^([a-z_]+)(?:\.[a-z_]+)?:/.exec(r);e?(t[e[1]]??=[]).push(r):n.push(r)}return{byField:t,general:n}}async function Ql(e,t,n){try{let r=await fetch(t,{method:e,headers:n?.json===void 0?void 0:{"Content-Type":`application/json`},body:n?.form??(n?.json===void 0?void 0:JSON.stringify(n.json))}),i=await r.json().catch(()=>({})),a=Array.isArray(i.errors)?` (${i.errors.join(`; `)})`:``,o=r.ok?``:`${i.error??i.message??`HTTP ${r.status}`}${a}`;return{ok:r.ok,status:r.status,data:i,error:o}}catch(e){return{ok:!1,status:0,data:{},error:e.message}}}var $l=encodeURIComponent,eu=(e,t)=>Ql(`POST`,`/api/vocabulary/${$l(e)}`,{json:{slug:t}}),tu=(e,t,n)=>Ql(`POST`,`/api/vocabulary/${$l(e)}/${$l(t)}/rename`,{json:{new:n}}),nu=(e,t,n)=>Ql(`POST`,`/api/vocabulary/${$l(e)}/${$l(t)}/merge`,{json:{into:n}}),ru=(e,t)=>Ql(`DELETE`,`/api/vocabulary/${$l(e)}/${$l(t)}`),iu=e=>Ql(`POST`,`/api/ingest`,{form:e}),au=()=>Ql(`POST`,`/api/sync`),W=e=>Ql(`POST`,`/api/${e}`),ou=e=>Ql(`GET`,`/api/jobs/${$l(e)}`);async function su(e,t=50){let n=await Ql(`GET`,`/api/search?q=${encodeURIComponent(e)}&limit=${t}`);return{ok:n.ok,hits:n.data.hits??[],stale:!!n.data.stale,error:n.error}}var cu=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),G=o(((e,t)=>{t.exports=cu()}))(),lu=600;function uu({jobId:e,name:t,onFinished:n}){let[r,i]=(0,_.useState)({state:`running`,log:[],result:null,error:null}),[a,o]=(0,_.useState)(null),s=(0,_.useRef)(n);return(0,_.useEffect)(()=>{s.current=n}),(0,_.useEffect)(()=>{let t=!1,n,r=async()=>{let a=await ou(e);t||(a.ok?(i(a.data),a.data.state===`running`?n=setTimeout(r,lu):s.current(a.data)):o(a.error))};return r(),()=>{t=!0,n&&clearTimeout(n)}},[e]),(0,G.jsxs)(`section`,{className:`job-log`,"aria-label":`${t} job`,children:[(0,G.jsxs)(`div`,{className:`job-log-head`,children:[(0,G.jsx)(`strong`,{children:t}),(0,G.jsx)(Sl,{size:`sm`,color:r.state===`failed`?`error`:r.state===`done`?`success`:`warning`,children:r.state})]}),a&&(0,G.jsxs)(xl,{type:`error`,children:[`Lost contact with job: `,a]}),r.error&&(0,G.jsx)(xl,{type:`error`,children:r.error}),(0,G.jsx)(Pl,{lines:r.log,follow:!0})]})}var du=[`hero`,`spot-illustration`,`background`,`screenshot`,`diagram`,`lifestyle`];function fu({products:e,onIngested:t,onReviewQueue:n}){let[r,i]=(0,_.useState)([]),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(``),[d,f]=(0,_.useState)(``),[p,m]=(0,_.useState)(``),[h,g]=(0,_.useState)(``),[v,y]=(0,_.useState)(!1),[b,x]=(0,_.useState)(null),[S,ee]=(0,_.useState)(null),[te,C]=(0,_.useState)(null),[ne,w]=(0,_.useState)(null),re=(0,_.useRef)(null),ie=e=>{e?.length&&i(t=>[...t,...Array.from(e)])},ae=s===`screenshot`,T=r.length>0&&s!==``&&l.trim()!==``&&(!ae||h!==``);return(0,G.jsxs)(`div`,{className:`ingest`,children:[(0,G.jsxs)(`div`,{className:`dropzone${a?` dropzone-over`:``}`,onDragOver:e=>{e.preventDefault(),o(!0)},onDragLeave:()=>o(!1),onDrop:e=>{e.preventDefault(),o(!1),ie(e.dataTransfer.files)},children:[(0,G.jsx)(`p`,{children:`Drop images here`}),(0,G.jsx)(U,{size:`sm`,variant:`outline`,onClick:()=>re.current?.click(),children:`Choose files`}),(0,G.jsx)(`input`,{ref:re,type:`file`,multiple:!0,accept:`image/*`,hidden:!0,"aria-label":`Choose image files`,onChange:e=>{ie(e.target.files),e.target.value=``}}),r.length>0&&(0,G.jsx)(`ul`,{className:`ingest-files`,"aria-label":`Files to ingest`,children:r.map((e,t)=>(0,G.jsxs)(`li`,{children:[e.name,` `,(0,G.jsx)(U,{size:`sm`,variant:`ghost`,onClick:()=>i(e=>e.filter((e,n)=>n!==t)),children:`Remove`})]},`${e.name}-${t}`))})]}),(0,G.jsxs)(`div`,{className:`ingest-form`,children:[(0,G.jsxs)(`div`,{className:`field`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Class`}),(0,G.jsx)(Fl,{"aria-label":`Class`,placeholder:`Choose class`,options:du.map(e=>[e,e]),value:s,onValueChanged:e=>c(e.detail.value)})]}),ae&&(0,G.jsxs)(`div`,{className:`field`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Product (required for screenshots)`}),(0,G.jsx)(Fl,{"aria-label":`Product`,placeholder:`Choose product`,options:e.map(e=>[e,e]),value:h,onValueChanged:e=>g(e.detail.value)})]}),(0,G.jsxs)(`div`,{className:`field`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Source origin`}),(0,G.jsx)(zl,{"aria-label":`Source origin`,placeholder:`e.g. adobe-stock`,value:l,onValueChanged:e=>u(e.detail.value)})]}),(0,G.jsxs)(`div`,{className:`field`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`License (optional)`}),(0,G.jsx)(zl,{"aria-label":`License`,value:d,onValueChanged:e=>f(e.detail.value)})]}),(0,G.jsxs)(`div`,{className:`field`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`License id (optional)`}),(0,G.jsx)(zl,{"aria-label":`License id`,value:p,onValueChanged:e=>m(e.detail.value)})]}),(0,G.jsx)(`div`,{children:(0,G.jsx)(U,{disabled:!T||v,onClick:async()=>{y(!0),x(null),ee(null),C(null),w(null);let e=new FormData;r.forEach(t=>e.append(`files`,t)),e.append(`asset_class`,s),e.append(`origin`,l.trim()),d.trim()&&e.append(`license`,d.trim()),p.trim()&&e.append(`license_id`,p.trim()),ae&&e.append(`product`,h);let n=await iu(e);y(!1),n.ok?(ee(n.data),i([]),t(n.data)):x(n.error)},children:v?`Ingesting...`:`Ingest ${r.length||``} file${r.length===1?``:`s`}`})})]}),b&&(0,G.jsx)(xl,{type:`error`,children:b}),S&&(0,G.jsxs)(`section`,{className:`ingest-report`,"aria-label":`Ingest report`,children:[(0,G.jsxs)(xl,{type:S.created.length?`success`:`warning`,children:[S.created.length,` created, `,S.skipped.length,` skipped.`]}),S.created.length>0&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`ul`,{children:S.created.map(e=>(0,G.jsx)(`li`,{children:e},e))}),(0,G.jsx)(`p`,{children:`Re-index so new assets get thumbnails and show up in search.`}),(0,G.jsxs)(`div`,{className:`ingest-actions`,children:[(0,G.jsx)(U,{size:`sm`,onClick:async()=>{w(null);let e=await W(`reindex`);e.ok?C(e.data.job_id):w(e.error)},disabled:te!==null,children:`Re-index now`}),` `,(0,G.jsx)(U,{size:`sm`,variant:`outline`,onClick:n,children:`Open review queue`})]}),ne&&(0,G.jsx)(xl,{type:`error`,children:ne}),te&&(0,G.jsx)(uu,{jobId:te,name:`Re-index`,onFinished:()=>t(S)},te)]}),S.skipped.length>0&&(0,G.jsx)(`ul`,{"aria-label":`Skipped files`,children:S.skipped.map((e,t)=>(0,G.jsxs)(`li`,{children:[(0,G.jsx)(`strong`,{children:e.file}),`: `,e.reason]},`${e.file}-${t}`))})]})]})}var pu=[`class`,`status`,`product`,`tone`,`categories`,`verticals`,`concepts`,`style`,`license`];function mu(e,t){switch(t){case`class`:return e.class?[e.class]:[];case`status`:return e.status?[e.status]:[];case`product`:return e.products??[];case`tone`:return e.tone?[e.tone]:[];case`categories`:return e.categories??[];case`verticals`:return e.verticals??[];case`concepts`:return e.concepts??[];case`style`:return e.style??[];case`license`:return e.license?[e.license]:[]}}function hu(e){return[e.id,e.file,e.description,e.class,e.status,e.license,e.tone??``,...e.products,...e.categories,...e.verticals,...e.concepts,...e.style].join(`
`).toLowerCase()}function gu(e,t,n){let r=n.trim().toLowerCase(),i=pu.flatMap(e=>{let n=t[e];return n&&n.length?[{axis:e,want:n}]:[]});return e.filter(e=>{for(let{axis:t,want:n}of i){let r=mu(e,t);if(!n.some(e=>r.includes(e)))return!1}return r===``||hu(e).includes(r)})}function _u(e,t){let n=new Map;for(let r of e)for(let e of new Set(mu(r,t)))n.set(e,(n.get(e)??0)+1);return[...n].map(([e,t])=>({value:e,count:t})).sort((e,t)=>t.count-e.count||e.value.localeCompare(t.value))}var vu={products:`product`,categories:`categories`,verticals:`verticals`,concepts:`concepts`,style:`style`};function yu(e,t){let n={};for(let[r,i]of Object.entries(t)){let t=vu[r];n[r]=i.map(n=>({slug:n,count:t?e.filter(e=>mu(e,t).includes(n)).length:0}))}return n}function bu(e,t){let n=new Map(t.map(e=>[e.id,e]));return e.flatMap(e=>{let t=n.get(e.id);return t?[t]:[]})}function xu(e,t){return e===t.thumb_url&&t.full_url!==t.thumb_url?t.full_url:null}var Su=/^[a-z0-9]+(?:-[a-z0-9]+)*$/;function Cu({assets:e,vocabulary:t,onChanged:n,onOpenInGrid:r}){let i=yu(e,t),[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)({}),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(null),v=()=>{o(null),c(``)},y=(e,t)=>{f(!1),e.ok?(m(null),g(t),v(),n()):(g(null),m({text:e.error,usage:e.data.usage}),v())},b=async(e,t)=>{f(!0),m(null),y(await e(),t)},x=e=>{let t=(l[e]??``).trim();b(()=>eu(e,t),`Added ${t} to ${e}.`).then(()=>u(t=>({...t,[e]:``})))},S=a,ee=S?(t[S.axis]??[]).filter(e=>e!==S.slug):[],te=Su.test(s)&&!!S&&s!==S.slug;return(0,G.jsxs)(`div`,{className:`vocab`,children:[p&&(0,G.jsxs)(xl,{type:`error`,children:[(0,G.jsx)(`div`,{children:p.text}),p.usage&&p.usage.length>0&&(0,G.jsx)(`ul`,{"aria-label":`Assets using this slug`,children:p.usage.map(e=>(0,G.jsx)(`li`,{children:e},e))})]}),h&&(0,G.jsx)(`p`,{className:`editor-message`,role:`status`,children:h}),Object.entries(i).map(([e,t])=>(0,G.jsxs)(`section`,{className:`vocab-axis`,"aria-label":`${e} vocabulary`,children:[(0,G.jsxs)(`h2`,{children:[e,` `,(0,G.jsx)(Sl,{size:`sm`,color:`gray`,children:t.length})]}),(0,G.jsx)(`ul`,{className:`vocab-list`,children:t.map(({slug:t,count:n})=>(0,G.jsxs)(`li`,{className:`vocab-row`,children:[(0,G.jsx)(U,{size:`sm`,variant:`ghost`,"aria-label":`Show ${t} in grid`,onClick:()=>vu[e]&&r(vu[e],t),children:t}),(0,G.jsx)(`span`,{className:`facet-count`,"aria-label":`${n} assets`,children:n}),(0,G.jsx)(`span`,{className:`ops-spacer`}),(0,G.jsx)(U,{size:`sm`,variant:`outline`,disabled:d,"aria-label":`Rename ${t}`,onClick:()=>{c(t),o({kind:`rename`,axis:e,slug:t})},children:`Rename`}),(0,G.jsx)(U,{size:`sm`,variant:`outline`,disabled:d,"aria-label":`Merge ${t}`,onClick:()=>o({kind:`merge`,axis:e,slug:t}),children:`Merge`}),(0,G.jsx)(U,{size:`sm`,variant:`outline`,disabled:d||n>0,"aria-label":`Delete ${t}`,title:n>0?`In use by ${n} asset(s); merge it instead`:void 0,onClick:()=>o({kind:`delete`,axis:e,slug:t}),children:`Delete`})]},t))}),(0,G.jsxs)(`div`,{className:`vocab-add`,children:[(0,G.jsx)(zl,{size:`sm`,"aria-label":`New ${e} slug`,placeholder:`new-slug`,value:l[e]??``,onValueChanged:t=>u(n=>({...n,[e]:t.detail.value}))}),(0,G.jsx)(U,{size:`sm`,disabled:d||!Su.test((l[e]??``).trim()),onClick:()=>x(e),children:`Add`})]})]},e)),(0,G.jsx)(Dl,{open:S?.kind===`delete`,heading:`Delete ${S?.slug??``}?`,message:`Remove ${S?.slug??``} from ${S?.axis??``}. It is unused, so no assets change. This syncs from origin first and makes one commit.`,confirmText:`Delete`,destructive:!0,loading:d,onConfirm:()=>S&&b(()=>ru(S.axis,S.slug),`Deleted ${S.slug}.`),onCancel:v}),(0,G.jsxs)(Al,{open:S?.kind===`rename`||S?.kind===`merge`,size:`sm`,"aria-label":S?.kind===`merge`?`Merge slug`:`Rename slug`,onOpenChanged:e=>{e.detail.open||v()},children:[(0,G.jsx)(kl,{slot:`header`,children:S?.kind===`merge`?`Merge ${S.slug} into...`:`Rename ${S?.slug??``}`}),S?.kind===`merge`?(0,G.jsx)(Fl,{"aria-label":`Merge into`,placeholder:`Choose target slug`,options:ee.map(e=>[e,e]),value:s,onValueChanged:e=>c(e.detail.value)}):(0,G.jsx)(zl,{"aria-label":`New slug`,value:s,invalid:s!==``&&!Su.test(s),onValueChanged:e=>c(e.detail.value)}),(0,G.jsx)(`p`,{className:`editor-message`,children:`Rewrites every affected asset (all statuses) and vocabulary.json in one commit, after syncing from origin.`}),(0,G.jsxs)(Ol,{slot:`footer`,children:[(0,G.jsx)(U,{variant:`outline`,onClick:v,children:`Cancel`}),S?.kind===`merge`?(0,G.jsx)(U,{disabled:d||!s,onClick:()=>b(()=>nu(S.axis,S.slug,s),`Merged ${S.slug} into ${s}.`),children:`Merge`}):(0,G.jsx)(U,{disabled:d||!te,onClick:()=>S&&b(()=>tu(S.axis,S.slug,s),`Renamed ${S.slug} to ${s}.`),children:`Rename`})]})]})]})}var wu={class:`Class`,status:`Status`,product:`Product`,tone:`Tone`,categories:`Categories`,verticals:`Verticals`,concepts:`Concepts`,style:`Style`,license:`License`};function Tu({assets:e,filters:t,q:n,onToggle:r}){return(0,G.jsx)(`nav`,{className:`facet-rail`,"aria-label":`Filters`,children:pu.map(i=>{let{[i]:a,...o}=t,s=_u(gu(e,o,n),i),c=t[i]??[],l=[...s,...c.filter(e=>!s.some(t=>t.value===e)).map(e=>({value:e,count:0}))];return l.length===0?null:(0,G.jsxs)(`fieldset`,{className:`facet-group`,children:[(0,G.jsx)(`legend`,{children:wu[i]}),l.map(({value:e,count:t})=>(0,G.jsx)(Tl,{size:`sm`,checked:c.includes(e),onValueChanged:t=>r(i,e,t.detail.checked),"aria-label":`${wu[i]}: ${e}`,children:(0,G.jsxs)(`span`,{className:`facet-row`,children:[(0,G.jsx)(`span`,{children:e}),(0,G.jsx)(`span`,{className:`facet-count`,children:t})]})},e))]},i)})})}function Eu({status:e,error:t,onRefresh:n}){let[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(null),p=a||s,m=async()=>{c(!0),u(null);let e=await au();if(c(!1),e.ok){let t=e.data;u({kind:`success`,text:!t.pulled&&!t.pushed?`In sync with origin.`:`Synced${t.pulled?`, pulled changes`:``}${t.pushed?`, pushed changes`:``}.`})}else u({kind:`error`,text:e.error});n()},h=async e=>{u(null);let t=await W(e);t.ok?(o(!0),i({id:t.data.job_id,name:e===`reindex`?`Re-index`:`Publish`})):u({kind:`error`,text:t.error})};return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`div`,{className:`ops-bar`,role:`status`,"aria-label":`Workspace status`,children:[t&&(0,G.jsxs)(Sl,{color:`error`,children:[`Status unavailable: `,t]}),e&&(0,G.jsxs)(G.Fragment,{children:[e.git&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(Sl,{color:e.git.behind?`warning`:`gray`,children:[`git: `,e.git.ahead,` ahead / `,e.git.behind,` behind`]}),(0,G.jsxs)(Sl,{color:e.git.dirty_managed.length?`warning`:`gray`,children:[e.git.dirty_managed.length,` uncommitted managed`]}),e.git.dirty_other.length>0&&(0,G.jsxs)(Sl,{color:`gray`,children:[e.git.dirty_other.length,` other dirty (ignored)`]})]}),(0,G.jsxs)(Sl,{color:e.index_stale?`warning`:`success`,children:[`index `,e.index_stale?`stale`:`fresh`]}),(0,G.jsxs)(Sl,{color:e.exports_stale?`warning`:`success`,children:[`exports `,e.exports_stale?`stale`:`fresh`]}),(0,G.jsxs)(Sl,{color:`gray`,children:[`embedder: `,e.embedder_mode??`none`]})]}),d&&(0,G.jsxs)(Sl,{color:`success`,children:[`last publish: `,d]}),(0,G.jsx)(`span`,{className:`ops-spacer`}),(0,G.jsx)(U,{size:`sm`,variant:`outline`,disabled:p,onClick:m,children:s?`Syncing...`:`Sync`}),(0,G.jsx)(U,{size:`sm`,variant:`outline`,disabled:p,onClick:()=>h(`reindex`),children:`Re-index`}),(0,G.jsx)(U,{size:`sm`,disabled:p,onClick:()=>h(`publish`),children:`Publish`})]}),l&&(0,G.jsx)(`div`,{className:`ops-notice`,children:(0,G.jsx)(xl,{type:l.kind===`error`?`error`:`success`,children:l.text})}),r&&(0,G.jsx)(`div`,{className:`ops-notice`,children:(0,G.jsx)(uu,{jobId:r.id,name:r.name,onFinished:e=>{o(!1),e.state===`done`&&typeof e.result?.version==`string`&&f(e.result.version),n()}},r.id)})]})}var Du=[`products`,`categories`,`verticals`,`concepts`,`style`],Ou=e=>({description:e.description??``,tags:{products:e.products,categories:e.categories,verticals:e.verticals,concepts:e.concepts,style:e.style},tone:e.tone??``,product_version:e.product_version??``,captured_at:e.captured_at??``,usage_restrictions:(e.usage_restrictions??[]).join(`, `)}),ku=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]);function Au(e,t){let n={};t.description!==(e.description??``)&&(n.description=t.description);for(let r of Du)ku(t.tags[r],e[r])||(n[r]=t.tags[r]);e.class===`background`&&t.tone&&t.tone!==(e.tone??``)&&(n.tone=t.tone),e.class===`screenshot`&&(t.product_version&&t.product_version!==(e.product_version??``)&&(n.product_version=t.product_version),t.captured_at&&t.captured_at!==(e.captured_at??``)&&(n.captured_at=t.captured_at));let r=t.usage_restrictions.split(`,`).map(e=>e.trim()).filter(Boolean);return ku(r,e.usage_restrictions??[])||(n.usage_restrictions=r),n}function ju(e,t){return!e||t()}function Mu({label:e,value:t,vocabulary:n,onChange:r,errors:i=[]}){let[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(0),l=n.filter(e=>!t.includes(e)).map(e=>({label:e,value:e})),u=a.trim()!==``&&!n.includes(a.trim()),d=e=>{n.includes(e)&&(t.includes(e)||r([...t,e]),o(``),c(e=>e+1))};return(0,G.jsxs)(`div`,{className:`field${i.length?` field-invalid`:``}`,"data-field":e,children:[(0,G.jsx)(`span`,{className:`field-label`,children:e}),(0,G.jsxs)(`div`,{className:`chips`,children:[t.map(n=>(0,G.jsx)(Rl,{size:`sm`,dismissible:!0,"aria-label":`${e}: ${n}`,onTagDismiss:()=>r(t.filter(e=>e!==n)),children:n},n)),(0,G.jsx)(El,{size:`sm`,"aria-label":`Add ${e}`,placeholder:`Add ${e}`,options:l,allowCustomValue:!0,invalid:i.length>0,onInputChanged:e=>o(e.detail.value),onValueChanged:e=>d(e.detail.value)},s)]}),u&&(0,G.jsxs)(`p`,{className:`field-hint`,role:`status`,children:[`"`,a.trim(),`" is not in the `,e,` vocabulary, so it will not be saved. Propose it to the curator to add it.`]}),i.map(e=>(0,G.jsx)(`p`,{className:`field-error`,role:`alert`,children:e},e))]})}function Nu({errors:e}){return(0,G.jsx)(G.Fragment,{children:(e??[]).map(e=>(0,G.jsx)(`p`,{className:`field-error`,role:`alert`,children:e},e))})}function Pu({asset:e,vocabulary:t,onChanged:n,onTransition:r,onOpenSimilar:i,onDirtyChange:a,ref:o}){let[s,c]=(0,_.useState)(()=>Ou(e)),[l,u]=(0,_.useState)([]),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(!1),v=(0,_.useRef)(!1),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(null),ee=(0,_.useMemo)(()=>Au(e,s),[e,s]),te=Object.keys(ee).length>0;(0,_.useEffect)(()=>(a?.(te),()=>a?.(!1)),[te,a]),(0,_.useEffect)(()=>{let t=!0;return Xl(e.id).then(e=>t&&b(e)).catch(e=>t&&S(e.message)),()=>{t=!1}},[e.id]);let C=e=>(u(e.errors),m(e.errors.length?null:e.error),!1),ne=async()=>{if(!te)return e;let t=await Kl(e.id,ee);return t.ok?(n(t.asset),c(Ou(t.asset)),t.asset):(C(t),null)},w=async e=>{v.current=!0,g(!0),u([]),f(null),m(null);try{return await e()}finally{v.current=!1,g(!1)}},re=()=>w(async()=>{await ne()&&te&&f(`Saved.`)}),ie=()=>v.current?Promise.resolve(!1):w(async()=>{if(!await ne())return!1;let t=await ql(e.id);return t.ok?(n(t.asset),r?.(`confirm`,t.asset),!0):C(t)}),ae=t=>v.current?Promise.resolve(!1):w(async()=>{let i=await(t===`retire`?Jl:Yl)(e.id);return i.ok?(n(i.asset),r?.(t,i.asset),!0):C(i)});(0,_.useImperativeHandle)(o,()=>({confirm:ie}));let{byField:T,general:oe}=Zl(l),se=new Set([...Du,`description`,`usage_restrictions`,...e.class===`background`?[`tone`]:[],...e.class===`screenshot`?[`product_version`,`captured_at`]:[]]),ce=[...oe,...Object.entries(T).filter(([e])=>!se.has(e)).flatMap(([,e])=>e)];return(0,G.jsxs)(`div`,{className:`editor`,"data-asset-id":e.id,children:[(0,G.jsx)(`a`,{href:e.full_url,target:`_blank`,rel:`noreferrer`,className:`editor-image`,title:`Open full resolution`,children:(0,G.jsx)(`img`,{src:e.full_url,alt:e.description||e.id})}),(0,G.jsxs)(`div`,{className:`editor-form`,children:[(0,G.jsxs)(`div`,{className:`editor-head`,children:[(0,G.jsx)(`h2`,{children:e.id}),(0,G.jsx)(Sl,{size:`sm`,color:e.status===`confirmed`?`success`:e.status===`proposed`?`warning`:`gray`,children:e.status}),(0,G.jsxs)(`span`,{className:`editor-meta`,children:[e.class,` / `,e.aspect,` / `,e.license]})]}),d&&(0,G.jsx)(`p`,{className:`editor-message`,role:`status`,children:d}),p&&(0,G.jsx)(xl,{type:`error`,children:p}),ce.length>0&&(0,G.jsx)(xl,{type:`error`,children:ce.map(e=>(0,G.jsx)(`div`,{children:e},e))}),(0,G.jsxs)(`div`,{className:`field${T.description?` field-invalid`:``}`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Description`}),(0,G.jsx)(Bl,{"aria-label":`Description`,value:s.description,invalid:!!T.description,onValueChanged:e=>c(t=>({...t,description:e.detail.value}))}),(0,G.jsx)(Nu,{errors:T.description})]}),Du.map(e=>(0,G.jsx)(Mu,{label:e,value:s.tags[e],vocabulary:t[e]??[],errors:T[e],onChange:t=>c(n=>({...n,tags:{...n.tags,[e]:t}}))},e)),e.class===`background`&&(0,G.jsxs)(`div`,{className:`field${T.tone?` field-invalid`:``}`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Tone`}),(0,G.jsx)(Fl,{"aria-label":`Tone`,placeholder:`Choose tone`,options:[[`dark`,`dark`],[`light`,`light`]],value:s.tone,invalid:!!T.tone,onValueChanged:e=>c(t=>({...t,tone:e.detail.value}))}),(0,G.jsx)(Nu,{errors:T.tone})]}),e.class===`screenshot`&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`div`,{className:`field${T.product_version?` field-invalid`:``}`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Product version`}),(0,G.jsx)(zl,{"aria-label":`Product version`,value:s.product_version,invalid:!!T.product_version,onValueChanged:e=>c(t=>({...t,product_version:e.detail.value}))}),(0,G.jsx)(Nu,{errors:T.product_version})]}),(0,G.jsxs)(`div`,{className:`field${T.captured_at?` field-invalid`:``}`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Captured at`}),(0,G.jsx)(zl,{"aria-label":`Captured at`,placeholder:`YYYY-MM-DD`,value:s.captured_at,invalid:!!T.captured_at,onValueChanged:e=>c(t=>({...t,captured_at:e.detail.value}))}),(0,G.jsx)(Nu,{errors:T.captured_at})]})]}),(0,G.jsxs)(`div`,{className:`field${T.usage_restrictions?` field-invalid`:``}`,children:[(0,G.jsx)(`span`,{className:`field-label`,children:`Usage restrictions (comma separated)`}),(0,G.jsx)(zl,{"aria-label":`Usage restrictions`,value:s.usage_restrictions,invalid:!!T.usage_restrictions,onValueChanged:e=>c(t=>({...t,usage_restrictions:e.detail.value}))}),(0,G.jsx)(Nu,{errors:T.usage_restrictions})]}),(0,G.jsxs)(`div`,{className:`editor-actions`,children:[(0,G.jsx)(U,{size:`sm`,disabled:h||!te,onClick:re,children:`Save`}),e.status===`proposed`&&(0,G.jsx)(U,{size:`sm`,variant:`outline`,disabled:h,onClick:ie,children:`Confirm`}),e.status===`retired`?(0,G.jsx)(U,{size:`sm`,variant:`outline`,disabled:h,onClick:()=>ae(`restore`),children:`Restore`}):(0,G.jsx)(U,{size:`sm`,variant:`outline`,disabled:h,onClick:()=>ae(`retire`),children:`Retire`})]}),(0,G.jsxs)(`section`,{className:`similar`,"aria-label":`More like this`,children:[(0,G.jsx)(`h3`,{children:`More like this`}),x&&(0,G.jsxs)(`p`,{className:`empty`,children:[`Unavailable: `,x]}),!x&&y===null&&(0,G.jsx)(`p`,{className:`empty`,children:`Loading...`}),y&&y.length===0&&(0,G.jsx)(`p`,{className:`empty`,children:`No neighbours found.`}),y&&y.length>0&&(0,G.jsx)(`ul`,{className:`similar-strip`,children:y.map(e=>(0,G.jsx)(`li`,{children:(0,G.jsx)(`a`,{href:e.full_url,title:e.id,onClick:t=>{i&&(t.preventDefault(),i(e.id))},children:(0,G.jsx)(`img`,{src:e.thumb_url,alt:e.description||e.id,loading:`lazy`})})},e.id))})]})]})]})}function Fu({status:e}){return e===`proposed`?(0,G.jsx)(Sl,{size:`sm`,color:`warning`,children:`proposed`}):e===`confirmed`?(0,G.jsx)(Sl,{size:`sm`,color:`success`,children:`confirmed`}):(0,G.jsx)(Sl,{size:`sm`,color:`gray`,children:e})}function Iu({a:e,selected:t,onSelect:n}){let[r,i]=(0,_.useState)(e.thumb_url),[a,o]=(0,_.useState)(e.thumb_url);return a!==e.thumb_url&&(o(e.thumb_url),i(e.thumb_url)),(0,G.jsxs)(`li`,{className:`tile${e.status===`retired`?` tile-retired`:``}${t?` tile-selected`:``}`,"data-status":e.status,children:[(0,G.jsx)(`a`,{href:e.full_url,className:`tile-thumb`,"aria-label":`Edit ${e.id}`,"aria-current":t||void 0,onClick:t=>{t.metaKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),n(e.id))},children:r?(0,G.jsx)(`img`,{src:r,alt:e.description||e.id,loading:`lazy`,decoding:`async`,onError:()=>i(xu(r,e))}):(0,G.jsx)(`span`,{className:`tile-placeholder`,role:`img`,"aria-label":`No preview for ${e.id}`,children:`No preview`})}),(0,G.jsxs)(`div`,{className:`tile-meta`,children:[(0,G.jsx)(`span`,{className:`tile-id`,title:e.id,children:e.id}),(0,G.jsx)(Fu,{status:e.status})]}),(0,G.jsxs)(`div`,{className:`tile-sub`,children:[(0,G.jsx)(`span`,{children:e.class}),e.tone&&(0,G.jsx)(`span`,{children:e.tone}),e.products.length>0&&(0,G.jsxs)(`span`,{children:[e.products.slice(0,2).join(`, `),e.products.length>2?` +${e.products.length-2}`:``]})]})]})}function Lu({assets:e,total:t,selectedId:n,onSelect:r}){return e.length===0?(0,G.jsx)(`p`,{className:`empty`,children:t===0?`No assets in the library yet.`:`No assets match these filters.`}):(0,G.jsx)(`ul`,{className:`grid`,"aria-label":`${e.length} of ${t} assets`,children:e.map(e=>(0,G.jsx)(Iu,{a:e,selected:e.id===n,onSelect:r},e.id))})}var Ru=e=>({queue:e,index:0,exited:e.length===0}),zu=e=>e.queue[e.index];function Bu(e,t){if(e.exited)return e;switch(t.type){case`next`:return{...e,index:Math.min(e.index+1,e.queue.length-1)};case`prev`:return{...e,index:Math.max(e.index-1,0)};case`confirmed`:case`retired`:{let t=e.queue.filter((t,n)=>n!==e.index);return{queue:t,index:Math.min(e.index,t.length-1),exited:t.length===0}}case`exit`:return{...e,exited:!0}}}var Vu=/^(INPUT|TEXTAREA|SELECT)$|^QUANTIC-(TEXT-INPUT|TEXTAREA|COMBOBOX|SELECT)$/;function Hu({initialIds:e,assets:t,vocabulary:n,onChanged:r,onExit:i,confirmDiscard:a,onDirtyChange:o}){let[s,c]=(0,_.useReducer)(Bu,e,Ru),l=(0,_.useRef)(null),u=zu(s),d=t.find(e=>e.id===u);(0,_.useEffect)(()=>{s.exited&&i()},[s.exited,i]);let f=(0,_.useRef)(a);(0,_.useEffect)(()=>{f.current=a});let p=e=>{f.current()&&c({type:e})},m=(0,_.useRef)(p);return(0,_.useEffect)(()=>{m.current=p}),(0,_.useEffect)(()=>{let e=e=>{if(e.metaKey||e.ctrlKey||e.altKey)return;let t=e.composedPath()[0]?.tagName??``;if(!Vu.test(t.toUpperCase())){if(e.key===`ArrowRight`)m.current(`next`);else if(e.key===`ArrowLeft`)m.current(`prev`);else if(e.key===`Escape`)m.current(`exit`);else if(e.key===`c`||e.key===`C`)l.current?.confirm();else return;e.preventDefault()}};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),d?(0,G.jsxs)(`div`,{className:`review`,children:[(0,G.jsxs)(`div`,{className:`review-bar`,children:[(0,G.jsx)(U,{size:`sm`,variant:`outline`,disabled:s.index===0,onClick:()=>p(`prev`),children:`Previous`}),(0,G.jsxs)(`span`,{className:`review-position`,role:`status`,"aria-live":`polite`,children:[s.index+1,` of `,s.queue.length]}),(0,G.jsx)(U,{size:`sm`,variant:`outline`,disabled:s.index>=s.queue.length-1,onClick:()=>p(`next`),children:`Next`}),(0,G.jsx)(`span`,{className:`ops-spacer`}),(0,G.jsx)(`span`,{className:`review-keys`,children:`Left/Right: navigate. C: confirm and next. Esc: exit.`}),(0,G.jsx)(U,{size:`sm`,variant:`outline`,onClick:()=>p(`exit`),children:`Exit`})]}),(0,G.jsx)(Pu,{ref:l,asset:d,vocabulary:n,onChanged:r,onDirtyChange:o,onTransition:e=>{e===`confirm`?c({type:`confirmed`}):e===`retire`&&c({type:`retired`})}},d.id)]}):(0,G.jsx)(`p`,{className:`empty`,children:`Review queue is empty.`})}var Uu=`quarry.filters`;function Wu(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)({}),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)({}),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(`library`),[ee,te]=(0,_.useState)(()=>localStorage.getItem(Uu)!==`closed`),C=()=>te(e=>(localStorage.setItem(Uu,e?`closed`:`open`),!e)),[ne,w]=(0,_.useState)(null),[re,ie]=(0,_.useState)(null),[ae,T]=(0,_.useState)(!1),oe=(0,_.useCallback)(()=>{Ul().then(e=>{s(e),l(null)}).catch(e=>l(e.message))},[]),se=(0,_.useCallback)(()=>{Hl().then(e=>{t(e),a(null)}).catch(e=>a(e.message)).finally(()=>r(!0)),Wl().then(h).catch(()=>h({})),oe()},[oe]);(0,_.useEffect)(se,[se]),(0,_.useEffect)(()=>{let e=setInterval(oe,3e4);return()=>clearInterval(e)},[oe]);let ce=(0,_.useMemo)(()=>ne?gu(bu(ne.ids,e),u,``):gu(e,u,f),[e,u,f,ne]),le=(0,_.useCallback)(e=>{t(t=>t.map(t=>t.id===e.id?e:t)),oe()},[oe]),ue=async()=>{let e=f.trim();if(!e)return;T(!0),ie(null);let t=await su(e);T(!1),t.ok?w({q:e,ids:t.hits,stale:t.stale}):(w(null),ie(t.error))},de=()=>{w(null),ie(null),p(``)},fe=(0,_.useRef)(!1),pe=(0,_.useCallback)(e=>{fe.current=e},[]),me=(0,_.useCallback)(()=>ju(fe.current,()=>window.confirm(`You have unsaved changes. Discard them?`))?(fe.current=!1,!0):!1,[]);(0,_.useEffect)(()=>{let e=e=>{fe.current&&e.preventDefault()};return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[]);let he=(0,_.useCallback)(()=>b(null),[]),ge=(0,_.useMemo)(()=>e.filter(e=>e.status===`proposed`).length,[e]),_e=e.find(e=>e.id===g),ve=()=>{me()&&v(null)},ye=y===null&&x===`library`,be=e=>{(y!==null||x!==e)&&me()&&(v(null),b(null),S(e))};return(0,G.jsxs)(`div`,{className:`app`,children:[(0,G.jsxs)(`header`,{className:`topbar`,children:[ye&&(0,G.jsxs)(U,{icon:!0,size:`sm`,variant:`ghost`,onClick:C,children:[ee?(0,G.jsx)(jl,{size:`xs`}):(0,G.jsx)(Ml,{size:`xs`}),(0,G.jsx)(`span`,{className:`sr-only`,children:ee?`Hide filters`:`Show filters`})]}),(0,G.jsx)(`h1`,{children:`Quarry`}),(0,G.jsxs)(wl,{size:`sm`,"aria-label":`View`,children:[(0,G.jsx)(Cl,{active:y===null&&x===`library`,onClick:()=>be(`library`),children:`Library`}),(0,G.jsxs)(Cl,{active:y!==null,disabled:ge===0,onClick:()=>{y===null&&me()&&(v(null),S(`library`),b(e.filter(e=>e.status===`proposed`).map(e=>e.id)))},children:[`Review queue (`,ge,`)`]}),(0,G.jsx)(Cl,{active:y===null&&x===`vocab`,onClick:()=>be(`vocab`),children:`Vocabulary`}),(0,G.jsx)(Cl,{active:y===null&&x===`ingest`,onClick:()=>be(`ingest`),children:`Ingest`})]}),(0,G.jsx)(`div`,{className:`search`,children:(0,G.jsx)(`div`,{onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),ue())},children:(0,G.jsx)(zl,{type:`search`,"aria-label":`Search assets`,placeholder:`Filter; press Enter for index search`,value:f,onValueChanged:e=>{p(e.detail.value),w(null),ie(null)}})})}),(0,G.jsx)(`span`,{className:`result-count`,children:n?`${ce.length} / ${e.length}`:``})]}),(0,G.jsx)(Eu,{status:o,error:c,onRefresh:se}),y===null?x===`vocab`?(0,G.jsx)(`main`,{className:`main`,children:(0,G.jsx)(Cu,{assets:e,vocabulary:m,onChanged:se,onOpenInGrid:(e,t)=>{d({[e]:[t]}),p(``),S(`library`)}})}):x===`ingest`?(0,G.jsx)(`main`,{className:`main`,children:(0,G.jsx)(fu,{products:m.products??[],onIngested:se,onReviewQueue:()=>{let t=e.filter(e=>e.status===`proposed`).map(e=>e.id);t.length&&b(t)}})}):(0,G.jsx)(`div`,{className:`body`,children:(0,G.jsxs)(Il,{resizable:!0,split:`18% 82%`,children:[(0,G.jsx)(Ll,{variant:`solid`,collapsed:!ee,minSize:12,maxSize:35,children:(0,G.jsx)(Tu,{assets:e,filters:u,q:f,onToggle:(e,t,n)=>d(r=>{let i=r[e]??[];return{...r,[e]:n?[...i.filter(e=>e!==t),t]:i.filter(e=>e!==t)}})})}),(0,G.jsx)(Ll,{minSize:50,maxSize:100,children:(0,G.jsxs)(Il,{resizable:!0,split:`58% 42%`,collapseBelow:`560px`,children:[(0,G.jsx)(Ll,{minSize:30,children:(0,G.jsxs)(`main`,{className:`main`,"aria-label":`Gallery`,children:[(ae||ne||re)&&(0,G.jsxs)(`div`,{className:`search-banner`,role:`region`,"aria-label":`Index search`,children:[ae&&(0,G.jsx)(`p`,{className:`empty`,children:`Searching index...`}),re&&(0,G.jsxs)(xl,{type:`error`,children:[`Index search failed: `,re,` `,/mismatch|embedder/i.test(re)?`Re-index with the matching embedder (or restart the workbench with the right embedder option), then try again.`:``]}),ne&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`div`,{className:`search-banner-row`,children:[(0,G.jsxs)(`strong`,{children:[`Index search: “`,ne.q,`”`]}),(0,G.jsxs)(`span`,{children:[ce.length,` result`,ce.length===1?``:`s`,`, best match first`]}),(0,G.jsx)(U,{size:`sm`,variant:`outline`,onClick:de,children:`Clear`})]}),ne.stale&&(0,G.jsx)(xl,{type:`warning`,children:`The index is stale; results may miss recent edits. Re-index to refresh.`})]}),re&&(0,G.jsx)(`div`,{children:(0,G.jsx)(U,{size:`sm`,variant:`outline`,onClick:de,children:`Clear`})})]}),i?(0,G.jsxs)(`p`,{className:`empty`,role:`alert`,children:[`Could not load assets: `,i]}):n?(0,G.jsx)(Lu,{assets:ce,total:e.length,selectedId:g,onSelect:e=>{(e===g||me())&&v(e)}}):(0,G.jsx)(`p`,{className:`empty`,children:`Loading...`})]})}),(0,G.jsx)(Ll,{collapsed:!_e,minSize:25,maxSize:70,children:_e&&(0,G.jsxs)(`aside`,{className:`detail`,"aria-label":`Asset details`,children:[(0,G.jsxs)(`div`,{className:`detail-bar`,children:[(0,G.jsx)(`span`,{className:`detail-title`,children:`Details`}),(0,G.jsxs)(U,{icon:!0,size:`sm`,variant:`ghost`,onClick:ve,children:[(0,G.jsx)(Nl,{size:`xs`}),(0,G.jsx)(`span`,{className:`sr-only`,children:`Close details`})]})]}),(0,G.jsx)(Pu,{asset:_e,vocabulary:m,onChanged:le,onDirtyChange:pe,onOpenSimilar:t=>{e.some(e=>e.id===t)&&me()&&v(t)}},_e.id)]})})]})})]})}):(0,G.jsx)(`main`,{className:`main`,children:(0,G.jsx)(Hu,{initialIds:y,assets:e,vocabulary:m,onChanged:le,onExit:he,confirmDiscard:me,onDirtyChange:pe})})]})}Ye.inject(),Xe.inject(),(0,v.createRoot)(document.getElementById(`root`)).render((0,G.jsx)(_.StrictMode,{children:(0,G.jsx)(Wu,{})}));