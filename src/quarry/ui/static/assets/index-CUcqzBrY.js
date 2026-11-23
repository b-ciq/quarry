var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var C={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function w(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return w(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var T=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(T,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(T,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function fe(e){var t=C.T,n={};n.types=t===null?null:t.types,C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,de)}catch(e){de(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}}function pe(e){var t=C.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else fe(pe.bind(null,e))}var me={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=me,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.addTransitionType=pe,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return w(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return w(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=fe,e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,re());else{var t=n(l);t!==null&&T(x,t.startTime-e)}}}var S=!1,ee=-1,te=5,C=-1;function ne(){return g?!0:!(e.unstable_now()-C<te)}function w(){if(g=!1,S){var t=e.unstable_now();C=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ee),ee=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&T(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():S=!1}}}var re;if(typeof y==`function`)re=function(){y(w)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=w,re=function(){ae.postMessage(null)}}else re=function(){_(w,0)};function T(t,n){ee=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):te=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ee),ee=-1):h=!0,T(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,re()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function ee(e,t,n){return e===n||e===t&&(x=e,!0)}function te(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function C(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ne(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var w=Object.assign,re=Symbol.for(`react.element`),ie=Symbol.for(`react.transitional.element`),ae=Symbol.for(`react.portal`),T=Symbol.for(`react.fragment`),oe=Symbol.for(`react.strict_mode`),se=Symbol.for(`react.profiler`),ce=Symbol.for(`react.consumer`),le=Symbol.for(`react.context`),ue=Symbol.for(`react.forward_ref`),de=Symbol.for(`react.suspense`),fe=Symbol.for(`react.suspense_list`),pe=Symbol.for(`react.memo`),me=Symbol.for(`react.lazy`),he=Symbol.for(`react.activity`),ge=Symbol.for(`react.legacy_hidden`),_e=Symbol.for(`react.memo_cache_sentinel`),ve=Symbol.for(`react.view_transition`),ye=Symbol.for(`react.recoverable`),be=Symbol.iterator;function xe(e){return typeof e!=`object`||!e?null:(e=be&&e[be]||e[`@@iterator`],typeof e==`function`?e:null)}var Se=Symbol.for(`react.client.reference`);function Ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case T:return`Fragment`;case se:return`Profiler`;case oe:return`StrictMode`;case de:return`Suspense`;case fe:return`SuspenseList`;case he:return`Activity`;case ve:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case ae:return`Portal`;case le:return e.displayName||`Context`;case ce:return(e._context.displayName||`Context`)+`.Consumer`;case ue:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case pe:return t=e.displayName||null,t===null?Ce(e.type)||`Memo`:t;case me:t=e._payload,e=e._init;try{return Ce(e(t))}catch{}}return null}var we=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Te={pending:!1,data:null,method:null,action:null},Ee=[],De=-1;function Oe(e){return{current:e}}function ke(e){0>De||(e.current=Ee[De],Ee[De]=null,De--)}function O(e,t){De++,Ee[De]=e.current,e.current=t}var Ae=Oe(null),je=Oe(null),Me=Oe(null),Ne=Oe(null);function Pe(e,t){switch(O(Me,t),O(je,e),O(Ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ke(Ae),O(Ae,e)}function Fe(){ke(Ae),ke(je),ke(Me)}function Ie(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,O(Ne,e)),t=Ae.current;var n=dp(t,e.type);t!==n&&(O(je,e),O(Ae,n))}function Le(e){je.current===e&&(ke(Ae),ke(je)),Ne.current===e&&(ke(Ne),sh._currentValue=Te)}var Re,ze;function Be(e){if(Re===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Re=t&&t[1]||``,ze=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Re+e+ze}var Ve=!1;function He(e,t){if(!e||Ve)return``;Ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Be(n):``}function Ue(e,t){switch(e.tag){case 26:case 27:case 5:return Be(e.type);case 16:return Be(`Lazy`);case 13:return e.child!==t&&t!==null?Be(`Suspense Fallback`):Be(`Suspense`);case 19:return Be(`SuspenseList`);case 0:case 15:return He(e.type,!1);case 11:return He(e.type.render,!1);case 1:return He(e.type,!0);case 31:return Be(`Activity`);case 30:return Be(`ViewTransition`);default:return``}}function We(e){try{var t=``,n=null;do t+=Ue(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ge=Object.prototype.hasOwnProperty,Ke=t.unstable_scheduleCallback,qe=t.unstable_cancelCallback,Je=t.unstable_shouldYield,Ye=t.unstable_requestPaint,Xe=t.unstable_now,Ze=t.unstable_getCurrentPriorityLevel,Qe=t.unstable_ImmediatePriority,$e=t.unstable_UserBlockingPriority,k=t.unstable_NormalPriority,A=t.unstable_LowPriority,et=t.unstable_IdlePriority,tt=t.log,nt=t.unstable_setDisableYieldValue,rt=null,it=null;function at(e){if(typeof tt==`function`&&nt(e),it&&typeof it.setStrictMode==`function`)try{it.setStrictMode(rt,e)}catch{}}var ot=Math.clz32?Math.clz32:ct,st=Math.log,j=Math.LN2;function ct(e){return e>>>=0,e===0?32:31-(st(e)/j|0)|0}var lt=256,ut=262144,dt=4194304;function ft(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=ft(n))):i=ft(o):i=ft(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=ft(n))):i=ft(o)):i=ft(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function mt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ht(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-ot(n),i=1<<r;t|=e[r],n&=~i}return t}function gt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _t(){var e=dt;return dt<<=1,!(dt&62914560)&&(dt=4194304),e}function vt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ot(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&xt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function xt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ot(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function St(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Ct(e,t){var n=t&-t;return n=n&42?1:wt(n),(n&(e.suspendedLanes|t))===0?n:0}function wt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Et(){var e=D.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function Dt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var Ot=Math.random().toString(36).slice(2),kt=`__reactFiber$`+Ot,At=`__reactProps$`+Ot,jt=`__reactContainer$`+Ot,Mt=`__reactEvents$`+Ot,Nt=`__reactListeners$`+Ot,Pt=`__reactHandles$`+Ot,Ft=`__reactResources$`+Ot,It=`__reactMarker$`+Ot,Lt=`__reactLoad$`+Ot;function Rt(e){delete e[kt],delete e[At],delete e[Nt],delete e[Pt]}function zt(e){var t;if(t=e[kt])return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[kt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Bt(e){if(e=e[kt]||e[jt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ht(e){var t=e[Ft];return t||=e[Ft]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ut(e){e[It]=!0}function Wt(e){e[Lt]=void 0}var Gt=new Set,Kt={};function M(e,t){qt(e,t),qt(e+`Capture`,t)}function qt(e,t){for(Kt[e]=t,e=0;e<t.length;e++)Gt.add(t[e])}var Jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),N={},Yt={};function Xt(e){return Ge.call(Yt,e)?!0:Ge.call(N,e)?!1:Jt.test(e)?Yt[e]=!0:(N[e]=!0,!1)}var P=!1;function Zt(){var e=P;return P=!1,e}function Qt(e,t,n){if(Xt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function $t(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function en(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function tn(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function nn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function rn(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function an(e){if(!e._valueTracker){var t=nn(e)?`checked`:`value`;e._valueTracker=rn(e,t,``+e[t])}}function on(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=nn(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var sn=/[\n"\\]/g;function cn(e){return e.replace(sn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function ln(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+tn(t)):e.value!==``+tn(t)&&(e.value=``+tn(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):dn(e,tn(n)):o===`number`&&e.value==t?dn(e,tn(e.value)):dn(e,tn(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+tn(s):e.removeAttribute(`name`)}function un(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){an(e);return}n=n==null?``:``+tn(n),t=t==null?n:``+tn(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),an(e)}function dn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function fn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+tn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pn(e,t,n){t!=null&&(t=``+tn(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+tn(n)}function mn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(we(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=tn(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),an(e)}function hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function _n(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||gn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function vn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,P=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(_n(e,a,r),P=!0)}else for(var o in t)t.hasOwnProperty(o)&&_n(e,o,t[o])}function yn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var bn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),xn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sn(e){return xn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Cn(){}var wn=null;function F(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tn=null,I=null;function En(e){var t=Bt(e);if(t&&(e=t.stateNode)){var n=e[At]||null;a:switch(e=t.stateNode,t.type){case`input`:if(ln(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+cn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[At]||null;if(!a)throw Error(i(90));ln(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&on(r)}break a;case`textarea`:pn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}}}var Dn=!1;function On(e,t,n){if(Dn)return e(t,n);Dn=!0;try{return e(t)}finally{if(Dn=!1,(Tn!==null||I!==null)&&(Rd(),Tn&&(t=Tn,e=I,I=Tn=null,En(t),e)))for(t=0;t<e.length;t++)En(e[t])}}function kn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[At]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var An=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,jn=!1;if(An)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){jn=!0}}),window.addEventListener(`test`,Mn,Mn),window.removeEventListener(`test`,Mn,Mn)}catch{jn=!1}var Nn=null,Pn=null,Fn=null;function In(){if(Fn)return Fn;var e,t=Pn,n=t.length,r,i=`value`in Nn?Nn.value:Nn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Fn=i.slice(e,1<r?1-r:void 0)}function Ln(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rn(){return!0}function zn(){return!1}function Bn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Rn:zn,this.isPropagationStopped=zn,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=Bn(Vn),Un=w({},Vn,{view:0,detail:0}),Wn=Bn(Un),Gn,Kn,qn,Jn=w({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==qn&&(qn&&e.type===`mousemove`?(Gn=e.screenX-qn.screenX,Kn=e.screenY-qn.screenY):Kn=Gn=0,qn=e),Gn)},movementY:function(e){return`movementY`in e?e.movementY:Kn}}),Yn=Bn(Jn),L=Bn(w({},Jn,{dataTransfer:0})),R=Bn(w({},Un,{relatedTarget:0})),Xn=Bn(w({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0})),Zn=Bn(w({},Vn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Qn=Bn(w({},Vn,{data:0})),$n={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},er={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},tr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function nr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tr[e])?!!t[e]:!1}function rr(){return nr}var ir=Bn(w({},Un,{key:function(e){if(e.key){var t=$n[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Ln(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?er[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rr,charCode:function(e){return e.type===`keypress`?Ln(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Ln(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),ar=Bn(w({},Jn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),or=Bn(w({},Vn,{submitter:0})),sr=Bn(w({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rr})),cr=Bn(w({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0})),lr=Bn(w({},Jn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),ur=Bn(w({},Vn,{newState:0,oldState:0,source:0})),dr=[9,13,27,32],fr=An&&`CompositionEvent`in window,pr=null;An&&`documentMode`in document&&(pr=document.documentMode);var mr=An&&`TextEvent`in window&&!pr,hr=An&&(!fr||pr&&8<pr&&11>=pr),gr=` `,_r=!1;function vr(e,t){switch(e){case`keyup`:return dr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function yr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var br=!1;function xr(e,t){switch(e){case`compositionend`:return yr(t);case`keypress`:return t.which===32?(_r=!0,gr):null;case`textInput`:return e=t.data,e===gr&&_r?null:e;default:return null}}function Sr(e,t){if(br)return e===`compositionend`||!fr&&vr(e,t)?(e=In(),Fn=Pn=Nn=null,br=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return hr&&t.locale!==`ko`?null:t.data;default:return null}}var Cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Cr[e.type]:t===`textarea`}function Tr(e,t,n,r){Tn?I?I.push(r):I=[r]:Tn=r,t=qf(t,`onChange`),0<t.length&&(n=new Hn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Er=null,Dr=null;function z(e){Bf(e,0)}function Or(e){if(on(Vt(e)))return e}function kr(e,t){if(e===`change`)return t}var Ar=!1;if(An){var jr;if(An){var Mr=`oninput`in document;if(!Mr){var Nr=document.createElement(`div`);Nr.setAttribute(`oninput`,`return;`),Mr=typeof Nr.oninput==`function`}jr=Mr}else jr=!1;Ar=jr&&(!document.documentMode||9<document.documentMode)}function Pr(){Er&&(Er.detachEvent(`onpropertychange`,Fr),Dr=Er=null)}function Fr(e){if(e.propertyName===`value`&&Or(Dr)){var t=[];Tr(t,Dr,e,F(e)),On(z,t)}}function Ir(e,t,n){e===`focusin`?(Pr(),Er=t,Dr=n,Er.attachEvent(`onpropertychange`,Fr)):e===`focusout`&&Pr()}function Lr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Or(Dr)}function Rr(e,t){if(e===`click`)return Or(t)}function zr(e,t){if(e===`input`||e===`change`)return Or(t)}function Br(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Vr=typeof Object.is==`function`?Object.is:Br;function Hr(e,t){if(Vr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ge.call(t,i)||!Vr(e[i],t[i]))return!1}return!0}function Ur(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Wr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gr(e,t){var n=Wr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Wr(n)}}function Kr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ur(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ur(e.document)}return t}function Jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Yr=An&&`documentMode`in document&&11>=document.documentMode,Xr=null,Zr=null,Qr=null,$r=!1;function ei(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$r||Xr==null||Xr!==Ur(r)||(r=Xr,`selectionStart`in r&&Jr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&Hr(Qr,r)||(Qr=r,r=qf(Zr,`onSelect`),0<r.length&&(t=new Hn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Xr)))}function ti(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ni={animationend:ti(`Animation`,`AnimationEnd`),animationiteration:ti(`Animation`,`AnimationIteration`),animationstart:ti(`Animation`,`AnimationStart`),transitionrun:ti(`Transition`,`TransitionRun`),transitionstart:ti(`Transition`,`TransitionStart`),transitioncancel:ti(`Transition`,`TransitionCancel`),transitionend:ti(`Transition`,`TransitionEnd`)},ri={},ii={};An&&(ii=document.createElement(`div`).style,`AnimationEvent`in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),`TransitionEvent`in window||delete ni.transitionend.transition);function ai(e){if(ri[e])return ri[e];if(!ni[e])return e;var t=ni[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ii)return ri[e]=t[n];return e}var oi=ai(`animationend`),si=ai(`animationiteration`),ci=ai(`animationstart`),li=ai(`transitionrun`),ui=ai(`transitionstart`),di=ai(`transitioncancel`),fi=ai(`transitionend`),pi=new Map,mi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);mi.push(`scrollEnd`);function hi(e,t){pi.set(e,t),M(t,[e])}var gi=0;function _i(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=yd.identifierPrefix;var n=gi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function vi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Dd;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function yi(e,t){return e=vi(e),t=vi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var bi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},xi=[],Si=0,Ci=0;function wi(){for(var e=Si,t=Ci=Si=0;t<e;){var n=xi[t];xi[t++]=null;var r=xi[t];xi[t++]=null;var i=xi[t];xi[t++]=null;var a=xi[t];if(xi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Oi(n,i,a)}}function Ti(e,t,n,r){xi[Si++]=e,xi[Si++]=t,xi[Si++]=n,xi[Si++]=r,Ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ei(e,t,n,r){return Ti(e,t,n,r),ki(e)}function Di(e,t){return Ti(e,null,null,t),ki(e)}function Oi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ot(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ki(e){if(50<Od)throw Od=0,kd=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ai={};function ji(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(e,t,n,r){return new ji(e,t,n,r)}function Ni(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pi(e,t){var n=e.alternate;return n===null?(n=Mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Fi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ii(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Ni(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Ae.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case he:return e=Mi(31,n,t,a),e.elementType=he,e.lanes=o,e;case T:return Li(n.children,a,o,t);case oe:s=8,a|=24;break;case se:return e=Mi(12,n,t,a|2),e.elementType=se,e.lanes=o,e;case de:return e=Mi(13,n,t,a),e.elementType=de,e.lanes=o,e;case fe:return e=Mi(19,n,t,a),e.elementType=fe,e.lanes=o,e;case ge:case ve:return e=a|32,e=Mi(30,n,t,e),e.elementType=ve,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case le:s=10;break a;case ce:s=9;break a;case ue:s=11;break a;case pe:s=14;break a;case me:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Li(e,t,n,r){return e=Mi(7,e,r,t),e.lanes=n,e}function Ri(e,t,n){return e=Mi(6,e,null,t),e.lanes=n,e}function zi(e){var t=Mi(18,null,null,0);return t.stateNode=e,t}function Bi(e,t,n){return t=Mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Vi=new WeakMap;function Hi(e,t){if(typeof e==`object`&&e){var n=Vi.get(e);return n===void 0?(t={value:e,source:t,stack:We(t)},Vi.set(e,t),t):n}return{value:e,source:t,stack:We(t)}}var Ui=[],Wi=0,Gi=null,Ki=0,qi=[],Ji=0,Yi=null,Xi=1,Zi=``;function Qi(e,t){Ui[Wi++]=Ki,Ui[Wi++]=Gi,Gi=e,Ki=t}function $i(e,t,n){qi[Ji++]=Xi,qi[Ji++]=Zi,qi[Ji++]=Yi,Yi=e;var r=Xi;e=Zi;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xi=1<<32-ot(t)+i|n<<i|r,Zi=a+e}else Xi=1<<a|n<<i|r,Zi=e}function ea(e){e.return!==null&&(Qi(e,1),$i(e,1,0))}function ta(e){for(;e===Gi;)Gi=Ui[--Wi],Ui[Wi]=null,Ki=Ui[--Wi],Ui[Wi]=null;for(;e===Yi;)Yi=qi[--Ji],qi[Ji]=null,Zi=qi[--Ji],qi[Ji]=null,Xi=qi[--Ji],qi[Ji]=null}function na(e,t){qi[Ji++]=Xi,qi[Ji++]=Zi,qi[Ji++]=Yi,Xi=t.id,Zi=t.overflow,Yi=e}var ra=null,B=null,V=!1,ia=null,aa=!1,oa=Error(i(519));function sa(e){throw pa(Hi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),oa}function ca(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[kt]=e,t[At]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<Rf.length;n++)$(Rf[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),un(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),mn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||$f(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=Cn),t=!0):t=!1,t||sa(e,!0)}function la(e){for(ra=e.return;ra;)switch(ra.tag){case 5:case 31:case 13:aa=!1;return;case 27:case 3:aa=!0;return;default:ra=ra.return}}function ua(e){if(e!==ra)return!1;if(!V)return la(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&B&&sa(e),la(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=dm(e)}else t===27?(t=B,Sp(e.type)?(e=um,um=null,B=e):B=t):B=ra?lm(e.stateNode.nextSibling):null;return!0}function da(){B=ra=null,V=!1}function fa(){var e=ia;return e!==null&&(dd===null?dd=e:dd.push.apply(dd,e),ia=null),e}function pa(e){ia===null?ia=[e]:ia.push(e)}var ma=Oe(null),ha=null,ga=null;function _a(e,t,n){O(ma,t._currentValue),t._currentValue=n}function va(e){e._currentValue=ma.current,ke(ma)}function ya(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ba(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ya(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ya(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ya(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function xa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Vr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Ne.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&ba(t,e,n,r),t.flags|=262144,e!==null}function Sa(e){for(e=e.firstContext;e!==null;){if(!Vr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){ha=e,ga=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wa(e){return Ea(ha,e)}function Ta(e,t){return ha===null&&Ca(e),Ea(e,t)}function Ea(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ga===null){if(e===null)throw Error(i(308));ga=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ga=ga.next=t;return n}var Da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Oa=t.unstable_scheduleCallback,ka=t.unstable_NormalPriority,Aa={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ja(){return{controller:new Da,data:new Map,refCount:0}}function Ma(e){e.refCount--,e.refCount===0&&Oa(ka,function(){e.controller.abort()})}function Na(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Pa=null;function Fa(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ia=null,La=0,Ra=0,za=null;function Ba(e,t){if(Ia===null){var n=Ia=[];La=0,Ra=Nf(),za={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return La++,t.then(Va,Va),t}function Va(){if(--La===0&&(Pa=null,Ia!==null)){za!==null&&(za.status=`fulfilled`);var e=Ia;Ia=null,Ra=0,za=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ha(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ua=E.S;E.S=function(e,t){if(md=Xe(),typeof t==`object`&&t&&typeof t.then==`function`&&Ba(e,t),Pa!==null)for(var n=yf;n!==null;)Na(n,Pa),n=n.next;if(n=e.types,n!==null){for(var r=yf;r!==null;)Na(r,n),r=r.next;if(Ra!==0){r=Pa,r===null&&(r=Pa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ua!==null&&Ua(e,t)};var Wa=Oe(null);function Ga(){var e=Wa.current;return e===null?Qu.pooledCache:e}function Ka(e,t){t===null?O(Wa,Wa.current):O(Wa,t.pool)}function qa(){var e=Ga();return e===null?null:{parent:Aa._currentValue,pool:e}}var Ja=Error(i(460)),Ya=Error(i(474)),Xa=Error(i(542)),Za={then:function(){}};function Qa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function $a(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Cn,Cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ro(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(Cn,Cn);else{if(e=Qu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ro(e),e}throw to=t,Ja}}function eo(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(to=e,Ja):e}}var to=null;function no(){if(to===null)throw Error(i(459));var e=to;return to=null,e}function ro(e){if(e===Ja||e===Xa)throw Error(i(483))}var io=null,ao=0;function oo(e){var t=ao;return ao+=1,io===null&&(io=[]),$a(io,e,t)}function so(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function co(e,t){throw t.$$typeof===re?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function lo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Pi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ri(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===T?(e=d(e,t,n.props.children,r,n.key),so(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===me&&eo(i)===t.type)?(t=a(t,n.props),so(t,n),t.return=e,t):(t=Ii(n.type,n.key,n.props,null,e.mode,r),so(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Bi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Li(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ri(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ie:return n=Ii(t.type,t.key,t.props,null,e.mode,n),so(n,t),n.return=e,n;case ae:return t=Bi(t,e.mode,n),t.return=e,t;case me:return t=eo(t),f(e,t,n)}if(we(t)||xe(t))return t=Li(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,oo(t),n);if(t.$$typeof===le)return f(e,Ta(e,t),n);co(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ie:return n.key===i?l(e,t,n,r):null;case ae:return n.key===i?u(e,t,n,r):null;case me:return n=eo(n),p(e,t,n,r)}if(we(n)||xe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,oo(n),r);if(n.$$typeof===le)return p(e,t,Ta(e,n),r);co(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ie:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ae:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case me:return r=eo(r),m(e,t,n,r,i)}if(we(r)||xe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,oo(r),i);if(r.$$typeof===le)return m(e,t,n,Ta(t,r),i);co(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Qi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Qi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Qi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Qi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Qi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Qi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===T&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case ie:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===T){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),so(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===me&&eo(l)===r.type){n(e,r.sibling),c=a(r,o.props),so(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===T?(c=Li(o.props.children,e.mode,c,o.key),so(c,o),c.return=e,e=c):(c=Ii(o.type,o.key,o.props,null,e.mode,c),so(c,o),c.return=e,e=c)}return s(e);case ae:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Bi(o,e.mode,c),c.return=e,e=c}return s(e);case me:return o=eo(o),_(e,r,o,c)}if(we(o))return h(e,r,o,c);if(xe(o)){if(l=xe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,oo(o),c);if(o.$$typeof===le)return _(e,r,Ta(e,o),c);co(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ri(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ao=0;var i=_(e,t,n,r);return io=null,i}catch(t){if(t===Ja||t===Xa)throw t;var a=Mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var uo=lo(!0),fo=lo(!1),po=!1;function mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ho(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function go(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _o(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ki(e),Oi(e,null,n),t}return Ti(e,r,t,n),ki(e)}function vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,St(e,n)}}function yo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bo=!1;function xo(){if(bo){var e=za;if(e!==null)throw e}}function So(e,t,n,r){bo=!1;var i=e.updateQueue;po=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(X&f)===f:(r&f)===f){f!==0&&f===Ra&&(bo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=w({},d,f);break a;case 2:po=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ad|=o,e.lanes=o,e.memoizedState=d}}function Co(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function wo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Co(n[e],t)}var To=Oe(null),Eo=Oe(0);function Do(e,t){e=rd,O(Eo,e),O(To,t),rd=e|t.baseLanes}function Oo(){O(Eo,rd),O(To,To.current)}function ko(){rd=Eo.current,ke(To),ke(Eo)}var Ao=Oe(null),jo=null;function Mo(e){var t=e.alternate;O(Lo,Lo.current&1),O(Ao,e),jo===null&&(t===null||To.current!==null||t.memoizedState!==null)&&(jo=e)}function No(e){O(Lo,Lo.current),O(Ao,e),jo===null&&(jo=e)}function Po(e){e.tag===22?(O(Lo,Lo.current),O(Ao,e),jo===null&&(jo=e)):Fo()}function Fo(){O(Lo,Lo.current),O(Ao,Ao.current)}function Io(e){ke(Ao),jo===e&&(jo=null),ke(Lo)}var Lo=Oe(0);function Ro(e,t){O(Ao,Ao.current),O(Lo,t)}function zo(e){ke(Lo),ke(Ao),jo===e&&(jo=null)}function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vo=0,H=null,Ho=null,Uo=null,Wo=!1,Go=!1,Ko=!1,qo=0,Jo=0,Yo=null,Xo=0;function Zo(){throw Error(i(321))}function Qo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vr(e[n],t[n]))return!1;return!0}function $o(e,t,n,r,i,a){return Vo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?gc:_c,Ko=!1,a=n(r,i),Ko=!1,Go&&(a=ts(t,n,r,i)),es(e),a}function es(e){E.H=hc;var t=Ho!==null&&Ho.next!==null;if(Vo=0,Uo=Ho=H=null,Wo=!1,Jo=0,Yo=null,t)throw Error(i(300));e===null||Pc||(e=e.dependencies,e!==null&&Sa(e)&&(Pc=!0))}function ts(e,t,n,r){H=e;var a=0;do{if(Go&&(Yo=null),Jo=0,Go=!1,25<=a)throw Error(i(301));if(a+=1,Uo=Ho=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=vc,o=t(n,r)}while(Go);return o}function ns(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?ls(t):t,e=e.useState()[0],(Ho===null?null:Ho.memoizedState)!==e&&(H.flags|=1024),t}function rs(){var e=qo!==0;return qo=0,e}function is(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function as(e){if(Wo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wo=!1}Vo=0,Uo=Ho=H=null,Go=!1,Jo=qo=0,Yo=null}function os(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Uo===null?H.memoizedState=Uo=e:Uo=Uo.next=e,Uo}function ss(){if(Ho===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=Ho.next;var t=Uo===null?H.memoizedState:Uo.next;if(t!==null)Uo=t,Ho=e;else{if(e===null)throw H.alternate===null?Error(i(467)):Error(i(310));Ho=e,e={memoizedState:Ho.memoizedState,baseState:Ho.baseState,baseQueue:Ho.baseQueue,queue:Ho.queue,next:null},Uo===null?H.memoizedState=Uo=e:Uo=Uo.next=e}return Uo}function cs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ls(e){var t=Jo;return Jo+=1,Yo===null&&(Yo=[]),e=$a(Yo,e,t),t=H,(Uo===null?t.memoizedState:Uo.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?gc:_c),e}function us(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ls(e);if(e.$$typeof===ye)return;if(e.$$typeof===le)return wa(e)}throw Error(i(438,String(e)))}function ds(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=cs(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=_e;return t.index++,n}function fs(e,t){return typeof t==`function`?t(e):t}function ps(e){return ms(ss(),Ho,e)}function ms(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Vo&f)===f:(X&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ra&&(d=!0);else if((Vo&p)===p){u=u.next,p===Ra&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,H.lanes|=p,ad|=p;f=u.action,Ko&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,H.lanes|=f,ad|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Vr(o,e.memoizedState)&&(Pc=!0,d&&(n=za,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function hs(e){var t=ss(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Vr(o,t.memoizedState)||(Pc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function gs(e,t,n){var r=H,a=ss(),o=V;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Vr((Ho||a).memoizedState,n);if(s&&(a.memoizedState=n,Pc=!0),a=a.queue,Vs(ys.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Uo!==null&&!!(Uo.memoizedState.tag&1),Is(e?9:8,{destroy:void 0},vs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Qu===null)throw Error(i(349));o||Vo&127||_s(r,t,n)}return n}function _s(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=cs(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vs(e,t,n,r){t.value=n,t.getSnapshot=r,bs(t)&&xs(e)}function ys(e,t,n){return n(function(){bs(t)&&xs(e)})}function bs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vr(e,n)}catch{return!0}}function xs(e){var t=Di(e,2);t!==null&&Nd(t,e,2)}function Ss(e){var t=os();if(typeof e==`function`){var n=e;if(e=n(),Ko){at(!0);try{n()}finally{at(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:e},t}function Cs(e,t,n,r){return e.baseState=n,ms(e,Ho,typeof r==`function`?r:fs)}function ws(e,t,n,r,a){if(fc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ts(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ts(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};o.types=a===null?null:a.types,E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Es(e,t,s)}catch(n){Os(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Es(e,t,a)}catch(n){Os(e,t,n)}}function Es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ds(e,t,n)},function(n){return Os(e,t,n)}):Ds(e,t,n)}function Ds(e,t,n){t.status=`fulfilled`,t.value=n,ks(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ts(e,n)))}function Os(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ks(t),t=t.next;while(t!==r)}e.action=null}function ks(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function As(e,t){return t}function js(e,t){if(V){var n=Qu.formState;if(n!==null){a:{var r=H;if(V){if(B){b:{for(var i=B,a=aa;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){B=lm(i.nextSibling),r=i.data===`F!`;break a}}sa(r)}r=!1}r&&(t=n[0])}}return n=os(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:t},n.queue=r,n=lc.bind(null,H,r),r.dispatch=n,r=Ss(!1),a=dc.bind(null,H,!1,r.queue),r=os(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=ws.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ms(e){return Ns(ss(),Ho,e)}function Ns(e,t,n){if(t=ms(e,t,As)[0],e=ps(fs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ls(t)}catch(e){throw e===Ja?Xa:e}else r=t;t=ss();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,Is(9,{destroy:void 0},Ps.bind(null,i,n),null)),[r,a,e]}function Ps(e,t){e.action=t}function Fs(e){var t=ss(),n=Ho;if(n!==null)return Ns(t,n,e);ss(),t=t.memoizedState,n=ss();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Is(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=cs(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ls(){return ss().memoizedState}function Rs(e,t,n,r){var i=os();H.flags|=e,i.memoizedState=Is(1|t,{destroy:void 0},n,r===void 0?null:r)}function zs(e,t,n,r){var i=ss();r=r===void 0?null:r;var a=i.memoizedState.inst;Ho!==null&&r!==null&&Qo(r,Ho.memoizedState.deps)?i.memoizedState=Is(t,a,n,r):(H.flags|=e,i.memoizedState=Is(1|t,a,n,r))}function Bs(e,t){Rs(8390656,8,e,t)}function Vs(e,t){zs(2048,8,e,t)}function Hs(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=cs(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Us(e){var t=ss().memoizedState;return Hs({ref:t,nextImpl:e}),function(){if(J&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Ws(e,t){return zs(4,2,e,t)}function Gs(e,t){return zs(4,4,e,t)}function Ks(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qs(e,t,n){n=n==null?null:n.concat([e]),zs(4,4,Ks.bind(null,t,e),n)}function Js(){}function Ys(e,t){var n=ss();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Qo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xs(e,t){var n=ss();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Qo(t,r[1]))return r[0];if(r=e(),Ko){at(!0);try{e()}finally{at(!1)}}return n.memoizedState=[r,t],r}function Zs(e,t,n){return n===void 0||Vo&1073741824&&!(X&261930)?e.memoizedState=t:(e.memoizedState=n,e=jd(),H.lanes|=e,ad|=e,n)}function Qs(e,t,n,r){return Vr(n,t)?n:To.current===null?!(Vo&106)||Vo&1073741824&&!(X&261930)?(Pc=!0,e.memoizedState=n):(e=jd(),H.lanes|=e,ad|=e,t):(e=Zs(e,n,r),Vr(e,t)||(Pc=!0),e)}function $s(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};s.types=o===null?null:o.types,E.T=s,dc(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?uc(e,t,Ha(c,r),Ad(e)):uc(e,t,r,Ad(e))}catch(n){uc(e,t,{then:function(){},status:`rejected`,reason:n},Ad())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function ec(){}function tc(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=nc(e).queue;$s(e,a,t,Te,n===null?ec:function(){return rc(e),n(r)})}function nc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Te,baseState:Te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:Te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rc(e){var t=nc(e);t.next===null&&(t=e.alternate.memoizedState),uc(e,t.next.queue,{},Ad())}function ic(){return wa(sh)}function ac(){return ss().memoizedState}function oc(){return ss().memoizedState}function sc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ad();e=go(n);var r=_o(t,e,n);r!==null&&(Nd(r,t,n),vo(r,t,n)),t={cache:ja()},e.payload=t;return}t=t.return}}function cc(e,t,n){var r=Ad();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fc(e)?pc(t,n):(n=Ei(e,t,n,r),n!==null&&(Nd(n,e,r),mc(n,t,r)))}function lc(e,t,n){uc(e,t,n,Ad())}function uc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fc(e))pc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Vr(s,o))return Ti(e,t,i,0),Qu===null&&wi(),!1}catch{}if(n=Ei(e,t,i,r),n!==null)return Nd(n,e,r),mc(n,t,r),!0}return!1}function dc(e,t,n,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},fc(e)){if(t)throw Error(i(479))}else t=Ei(e,n,r,2),t!==null&&Nd(t,e,2)}function fc(e){var t=e.alternate;return e===H||t!==null&&t===H}function pc(e,t){Go=Wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,St(e,n)}}var hc={readContext:wa,use:us,useCallback:Zo,useContext:Zo,useEffect:Zo,useImperativeHandle:Zo,useLayoutEffect:Zo,useInsertionEffect:Zo,useMemo:Zo,useReducer:Zo,useRef:Zo,useState:Zo,useDebugValue:Zo,useDeferredValue:Zo,useTransition:Zo,useSyncExternalStore:Zo,useId:Zo,useHostTransitionStatus:Zo,useFormState:Zo,useActionState:Zo,useOptimistic:Zo,useMemoCache:Zo,useCacheRefresh:Zo,useEffectEvent:Zo},gc={readContext:wa,use:us,useCallback:function(e,t){return os().memoizedState=[e,t===void 0?null:t],e},useContext:wa,useEffect:Bs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Rs(4194308,4,Ks.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rs(4194308,4,e,t)},useInsertionEffect:function(e,t){Rs(4,2,e,t)},useMemo:function(e,t){var n=os();t=t===void 0?null:t;var r=e();if(Ko){at(!0);try{e()}finally{at(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=os();if(n!==void 0){var i=n(t);if(Ko){at(!0);try{n(t)}finally{at(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=cc.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=os();return e={current:e},t.memoizedState=e},useState:function(e){e=Ss(e);var t=e.queue,n=lc.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Js,useDeferredValue:function(e,t){return Zs(os(),e,t)},useTransition:function(){var e=Ss(!1);return e=$s.bind(null,H,e.queue,!0,!1),os().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,a=os();if(V){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Qu===null)throw Error(i(349));X&127||_s(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Bs(ys.bind(null,r,o,e),[e]),r.flags|=2048,Is(9,{destroy:void 0},vs.bind(null,r,o,n,t),null),n},useId:function(){var e=os(),t=Qu.identifierPrefix;if(V){var n=Zi,r=Xi;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=qo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ic,useFormState:js,useActionState:js,useOptimistic:function(e){var t=os();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=dc.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:ds,useCacheRefresh:function(){return os().memoizedState=sc.bind(null,H)},useEffectEvent:function(e){var t=os(),n={impl:e};return t.memoizedState=n,function(){if(J&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},_c={readContext:wa,use:us,useCallback:Ys,useContext:wa,useEffect:Vs,useImperativeHandle:qs,useInsertionEffect:Ws,useLayoutEffect:Gs,useMemo:Xs,useReducer:ps,useRef:Ls,useState:function(){return ps(fs)},useDebugValue:Js,useDeferredValue:function(e,t){return Qs(ss(),Ho.memoizedState,e,t)},useTransition:function(){var e=ps(fs)[0],t=ss().memoizedState;return[typeof e==`boolean`?e:ls(e),t]},useSyncExternalStore:gs,useId:ac,useHostTransitionStatus:ic,useFormState:Ms,useActionState:Ms,useOptimistic:function(e,t){return Cs(ss(),Ho,e,t)},useMemoCache:ds,useCacheRefresh:oc,useEffectEvent:Us},vc={readContext:wa,use:us,useCallback:Ys,useContext:wa,useEffect:Vs,useImperativeHandle:qs,useInsertionEffect:Ws,useLayoutEffect:Gs,useMemo:Xs,useReducer:hs,useRef:Ls,useState:function(){return hs(fs)},useDebugValue:Js,useDeferredValue:function(e,t){var n=ss();return Ho===null?Zs(n,e,t):Qs(n,Ho.memoizedState,e,t)},useTransition:function(){var e=hs(fs)[0],t=ss().memoizedState;return[typeof e==`boolean`?e:ls(e),t]},useSyncExternalStore:gs,useId:ac,useHostTransitionStatus:ic,useFormState:Fs,useActionState:Fs,useOptimistic:function(e,t){var n=ss();return Ho===null?(n.baseState=e,[e,n.queue.dispatch]):Cs(n,Ho,e,t)},useMemoCache:ds,useCacheRefresh:oc,useEffectEvent:Us};function yc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=go(r);i.payload=t,n!=null&&(i.callback=n),t=_o(e,i,r),t!==null&&(Nd(t,e,r),vo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=go(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=_o(e,i,r),t!==null&&(Nd(t,e,r),vo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ad(),r=go(n);r.tag=2,t!=null&&(r.callback=t),t=_o(e,r,n),t!==null&&(Nd(t,e,n),vo(t,e,n))}};function xc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Hr(n,r)||!Hr(i,a):!0}function Sc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bc.enqueueReplaceState(t,t.state,null)}function Cc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=w({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function wc(e){bi(e)}function Tc(e){console.error(e)}function Ec(e){bi(e)}function Dc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Oc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function kc(e,t,n){return n=go(n),n.tag=3,n.payload={element:null},n.callback=function(){Dc(e,t)},n}function Ac(e){return e=go(e),e.tag=3,e}function jc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Oc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Oc(t,n,r),typeof i!=`function`&&(_d===null?_d=new Set([this]):_d.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Mc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&xa(t,n,a,!0),n=Ao.current,n!==null){switch(n.tag){case 31:case 13:case 19:return jo===null?Gd():n.alternate===null&&id===0&&(id=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Za?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),pf(e,r,a)),!1;case 22:return n.flags|=65536,r===Za?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),pf(e,r,a)),!1}throw Error(i(435,n.tag))}return pf(e,r,a),Gd(),!1}if(V)return t=Ao.current,t===null?(r!==oa&&(t=Error(i(423),{cause:r}),pa(Hi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Hi(r,n),a=kc(e.stateNode,r,a),yo(e,a),id!==4&&(id=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==oa&&(e=Error(i(422),{cause:r}),pa(Hi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Hi(o,n),ud===null?ud=[o]:ud.push(o),id!==4&&(id=2),t===null)return!0;r=Hi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=kc(n.stateNode,r,e),yo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(_d===null||!_d.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Ac(a),jc(a,e,n,r),yo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Nc=Error(i(461)),Pc=!1;function Fc(e,t,n,r){t.child=e===null?fo(t,null,n,r):uo(t,e.child,n,r)}function Ic(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ca(t),r=$o(e,t,n,o,a,i),s=rs(),e!==null&&!Pc?(is(e,t,i),ul(e,t,i)):(V&&s&&ea(t),t.flags|=1,Fc(e,t,r,i),t.child)}function Lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ni(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Rc(e,t,a,r,i)):(e=Ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!dl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Hr:n,n(o,r)&&e.ref===t.ref)return ul(e,t,i)}return t.flags|=1,e=Pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Rc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Hr(a,r)&&e.ref===t.ref){if(Pc=!1,t.pendingProps=r=a,dl(e,i))e.flags&131072&&(Pc=!0);else return t.lanes=e.lanes,ul(e,t,i)}}return Kc(e,t,n,r,i)}function zc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Vc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ka(t,a===null?null:a.cachePool),a===null?Oo():Do(t,a),Po(t);else return r=t.lanes=536870912,Vc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ka(t,null),Oo(),Fo()):(Ka(t,a.cachePool),Do(t,a),Fo(),t.memoizedState=null);return Fc(e,t,i,n),t.child}function Bc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Vc(e,t,n,r,i){var a=Ga();return a=a===null?null:{parent:Aa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ka(t,null),Oo(),Po(t),e!==null&&xa(e,t,r,!0),t.childLanes=i,null}function Hc(e,t){return t=tl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Uc(e,t,n){return uo(t,e.child,null,n),e=Hc(t,t.pendingProps),e.flags|=2,Io(t),t.memoizedState=null,e}function Wc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=Hc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Bc(null,e);if(No(t),(e=B)?(e=am(e,aa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yi===null?null:{id:Xi,overflow:Zi},retryLane:536870912,hydrationErrors:null},n=zi(e),n.return=t,t.child=n,ra=t,B=null)):e=null,e===null)throw sa(t);return t.lanes=536870912,null}return Hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(No(t),a){if(t.flags&256)t.flags&=-257,t=Uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Pc||xa(e,t,n,!1),a=(n&e.childLanes)!==0,Pc||a){if(To.current===null){if(r=Qu,r!==null&&(s=Ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Di(e,s),Nd(r,e,s),Nc;Gd()}t=Uc(e,t,n)}else e=o.treeContext,B=lm(s.nextSibling),ra=t,V=!0,ia=null,aa=!1,e!==null&&na(t,e),t=Hc(t,r),t.flags|=134221824;return t}return e=Pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Kc(e,t,n,r,i){return Ca(t),n=$o(e,t,n,r,void 0,i),r=rs(),e!==null&&!Pc?(is(e,t,i),ul(e,t,i)):(V&&r&&ea(t),t.flags|=1,Fc(e,t,n,i),t.child)}function qc(e,t,n,r,i,a){return Ca(t),t.updateQueue=null,n=ts(t,r,n,i),es(e),r=rs(),e!==null&&!Pc?(is(e,t,a),ul(e,t,a)):(V&&r&&ea(t),t.flags|=1,Fc(e,t,n,a),t.child)}function Jc(e,t,n,r,i){if(Ca(t),t.stateNode===null){var a=Ai,o=n.contextType;typeof o==`object`&&o&&(a=wa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=bc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},mo(t),o=n.contextType,a.context=typeof o==`object`&&o?wa(o):Ai,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(yc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&bc.enqueueReplaceState(a,a.state,null),So(t,r,a,i),xo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Cc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Ai,typeof u==`object`&&u&&(o=wa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Sc(t,a,r,o),po=!1;var f=t.memoizedState;a.state=f,So(t,r,a,i),xo(),l=t.memoizedState,s||f!==l||po?(typeof d==`function`&&(yc(t,n,d,r),l=t.memoizedState),(c=po||xc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ho(e,t),o=t.memoizedProps,u=Cc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Ai,typeof l==`object`&&l&&(c=wa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Sc(t,a,r,c),po=!1,f=t.memoizedState,a.state=f,So(t,r,a,i),xo();var p=t.memoizedState;o!==d||f!==p||po||e!==null&&e.dependencies!==null&&Sa(e.dependencies)?(typeof s==`function`&&(yc(t,n,s,r),p=t.memoizedState),(u=po||xc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=uo(t,e.child,null,i),t.child=uo(t,null,n,i)):Fc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ul(e,t,i),e}function Yc(e,t,n,r){return da(),t.flags|=256,Fc(e,t,n,r),t.child}var Xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zc(e){return{baseLanes:e,cachePool:qa()}}function Qc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=cd),e}function $c(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Lo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(V){if(i?Mo(t):Fo(),(e=B)?(e=am(e,aa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yi===null?null:{id:Xi,overflow:Zi},retryLane:536870912,hydrationErrors:null},n=zi(e),n.return=t,t.child=n,ra=t,B=null)):e=null,e===null)throw sa(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Fo(),i=t.mode,a=tl({mode:`hidden`,children:a},i),r=Li(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Zc(n),r.childLanes=Qc(e,o,n),t.memoizedState=Xc,Bc(null,r)):(Mo(t),el(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return rl(e,t,a,o,r,c,s,n)}return i?(Fo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Pi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Li(i,a,n,null),i.flags|=2):i=Pi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Bc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Zc(n):(a=i.cachePool,a===null?a=qa():(s=Aa._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Qc(e,o,n),t.memoizedState=Xc,Bc(e.child,r)):(Mo(t),n=e.child,e=n.sibling,n=Pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function el(e,t){return t=tl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function tl(e,t){return e=Mi(22,e,null,t),e.lanes=0,e}function nl(e,t,n){return uo(t,e.child,null,n),e=el(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Mo(t),t.flags&=-257,nl(e,t,c)):t.memoizedState===null?(Fo(),o=a.fallback,s=t.mode,a=tl({mode:`visible`,children:a.children},s),o=Li(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,uo(t,e.child,null,c),a=t.child,a.memoizedState=Zc(c),a.childLanes=Qc(e,r,c),t.memoizedState=Xc,Bc(null,a)):(Fo(),t.child=e.child,t.flags|=128,null);if(Mo(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,pa({value:a,source:null,stack:null})),nl(e,t,c)}if(Pc||xa(e,t,c,!1),r=(c&e.childLanes)!==0,Pc||r){if(To.current!==null)return nl(e,t,c);if(r=Qu,r!==null&&(a=Ct(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Di(e,a),Nd(r,e,a),Nc;return om(o)||Gd(),nl(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,B=lm(o.nextSibling),ra=t,V=!0,ia=null,aa=!1,e!==null&&na(t,e),t=el(t,a.children),t.flags|=134221824,t)}function il(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ya(e.return,t,n)}function al(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Bo(n)===null&&(t=e),e=e.sibling}return t}function ol(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function sl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function cl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Lo.current;if(t.flags&128)return Ro(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Ro(t,o),i===`backwards`&&e!==null?(sl(e),Fc(e,t,r,n),sl(e)):Fc(e,t,r,n),r=V?Ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&il(e,n,t);else if(e.tag===19)il(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=al(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,sl(t)),ol(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ol(t,!0,n,null,a,r);break;case`together`:ol(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=al(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ol(t,!1,i,n,a,r)}return t.child}function ll(e,t,n){var r=t.pendingProps;return _a(t,t.type,r.value),Fc(e,t,r.children,n),t.child}function ul(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ad|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(xa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Sa(e)))}function fl(e,t,n){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),_a(t,Aa,e.memoizedState.cache),da();break;case 27:case 5:Ie(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:_a(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,No(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Mo(t),t.flags|=128,null;r=xa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?$c(e,t,n):(Mo(t),e=ul(e,t,n),e===null?null:e.sibling)}Mo(t);break;case 19:if(t.flags&128)return cl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(xa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return cl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ro(t,Lo.current),r)break;return null;case 22:return t.lanes=0,zc(e,t,n,t.pendingProps);case 24:_a(t,Aa,e.memoizedState.cache)}return ul(e,t,n)}function pl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Pc=!0;else{if(!dl(e,n)&&!(t.flags&128))return Pc=!1,fl(e,t,n);Pc=!!(e.flags&131072)}}else Pc=!1,V&&t.flags&1048576&&$i(t,Ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=eo(t.elementType),t.type=e,typeof e==`function`)Ni(e)?(r=Cc(e,r),t.tag=1,t=Jc(null,t,e,r,n)):(t.tag=0,t=Kc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ue){t.tag=11,t=Ic(null,t,e,r,n);break a}if(a===pe){t.tag=14,t=Lc(null,t,e,r,n);break a}if(a===le){t.tag=10,t.type=e,t=ll(null,t,n);break a}}throw t=Ce(e)||e,Error(i(306,t,``))}}return t;case 0:return Kc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Cc(r,t.pendingProps),Jc(e,t,r,a,n);case 3:a:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,ho(e,t),So(t,r,null,n);var s=t.memoizedState;if(r=s.cache,_a(t,Aa,r),r!==o.cache&&ba(t,[Aa],n,!0),xo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Yc(e,t,r,n);break a}if(r!==a){a=Hi(Error(i(424)),t),pa(a),t=Yc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(B=lm(e.firstChild),ra=t,V=!0,ia=null,aa=!0,n=fo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(da(),r===a){t=ul(e,t,n);break a}Fc(e,t,r,n)}t=t.child}return t;case 26:return Gc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(t.stateNode=fp(t.type,t.pendingProps,Me.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ie(t),e===null&&V&&(r=t.stateNode=hm(t.type,t.pendingProps,Me.current),ra=t,aa=!0,a=B,Sp(t.type)?(um=a,B=lm(r.firstChild)):B=a),Fc(e,t,t.pendingProps.children,n),Gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((a=r=B)&&(r=rm(r,t.type,t.pendingProps,aa),r===null?a=!1:(t.stateNode=r,ra=t,B=lm(r.firstChild),aa=!1,a=!0)),a||sa(t)),Ie(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=$o(e,t,ns,null,null,n),sh._currentValue=a),Gc(e,t),Fc(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=B)&&(n=im(n,t.pendingProps,aa),n===null?e=!1:(t.stateNode=n,ra=t,B=null,e=!0)),e||sa(t)),null;case 13:return $c(e,t,n);case 4:return Pe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=uo(t,null,r,n):Fc(e,t,r,n),t.child;case 11:return Ic(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Gc(e,t),Fc(e,t,r,n),t.child;case 8:return Fc(e,t,t.pendingProps.children,n),t.child;case 12:return Fc(e,t,t.pendingProps.children,n),t.child;case 10:return ll(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Ca(t),a=wa(a),r=r(a),t.flags|=1,Fc(e,t,r,n),t.child;case 14:return Lc(e,t,t.type,t.pendingProps,n);case 15:return Rc(e,t,t.type,t.pendingProps,n);case 19:return cl(e,t,n);case 31:return Wc(e,t,n);case 22:return zc(e,t,n,t.pendingProps);case 24:return Ca(t),r=wa(Aa),e===null?(a=Ga(),a===null&&(a=Qu,o=ja(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},mo(t),_a(t,Aa,a)):((e.lanes&n)!==0&&(ho(e,t),So(t,null,null,n),xo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,_a(t,Aa,r),r!==a.cache&&ba(t,[Aa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),_a(t,Aa,r))),Fc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:V&&ea(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Gc(e,t),Fc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ml(e){e.flags|=4}function hl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Hd())e.flags|=8192;else throw to=Za,Ya}}else e.flags&=-16777217}function gl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Hd())e.flags|=8192;else throw to=Za,Ya}}function _l(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:_t(),e.lanes|=t,ld|=t)}function vl(e,t){if(!V)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function yl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bl(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yl(t),null;case 1:return yl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),va(Aa),Fe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ua(t)?ml(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,fa())),yl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(ml(t),o===null?(yl(t),hl(t,a,null,r,n)):(yl(t),gl(t,o))):o?o===e.memoizedState?(yl(t),t.flags&=-16777217):(ml(t),yl(t),gl(t,o)):(e=e.memoizedProps,e!==r&&ml(t),yl(t),hl(t,a,e,r,n)),null;case 27:if(Le(t),n=Me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ml(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return yl(t),t.subtreeFlags&=-33554433,null}e=Ae.current,ua(t)?ca(t,e):(e=hm(a,r,n),t.stateNode=e,ml(t))}return yl(t),t.subtreeFlags&=-33554433,null;case 5:if(Le(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ml(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return yl(t),t.subtreeFlags&=-33554433,null}if(o=Ae.current,ua(t))ca(t,o);else{var s=lp(Me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[kt]=t,o[At]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&ml(t)}}return yl(t),t.subtreeFlags&=-33554433,hl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ml(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Me.current,ua(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ra,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[kt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||$f(e.nodeValue,n)),e||sa(t,!0)}else e=lp(e).createTextNode(r),e[kt]=t,t.stateNode=e}return yl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ua(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[kt]=t}else da(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;yl(t),e=!1}else n=fa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Io(t),t):(Io(t),null);if(t.flags&128)throw Error(i(558))}return yl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ua(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[kt]=t}else da(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;yl(t),a=!1}else a=fa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Io(t),t):(Io(t),null)}return Io(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),_l(t,t.updateQueue),yl(t),null);case 4:return Fe(),e===null&&Uf(t.stateNode.containerInfo),t.flags|=67108864,yl(t),null;case 10:return va(t.type),yl(t),null;case 19:if(zo(t),r=t.memoizedState,r===null)return yl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)vl(r,!1);else{if(id!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Bo(e),o!==null){for(t.flags|=128,vl(r,!1),e=o.updateQueue,t.updateQueue=e,_l(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Fi(n,e),n=n.sibling;return Ro(t,Lo.current&1|2),V&&Qi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Xe()>hd&&(t.flags|=128,a=!0,vl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Bo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,_l(t,e),vl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!V)return yl(t),null}else 2*Xe()-r.renderingStartTime>hd&&n!==536870912&&(t.flags|=128,a=!0,vl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Xe(),e.sibling=null,o=Lo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||V?Ro(t,o):(n=o,O(Ao,t),O(Lo,n),jo===null&&(jo=t)),V&&Qi(t,r.treeForkCount),e}return yl(t),null;case 22:case 23:return Io(t),ko(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(yl(t),t.subtreeFlags&6&&(t.flags|=8192)):yl(t),n=t.updateQueue,n!==null&&_l(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ke(Wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),va(Aa),yl(t),null;case 25:return null;case 30:return t.flags|=33554432,yl(t),null}throw Error(i(156,t.tag))}function xl(e,t){switch(ta(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return va(Aa),Fe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Le(t),null;case 31:if(t.memoizedState!==null){if(Io(t),t.alternate===null)throw Error(i(340));da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Io(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return zo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Fe(),null;case 10:return va(t.type),null;case 22:case 23:return Io(t),ko(),e!==null&&ke(Wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return va(Aa),null;case 25:return null;default:return null}}function Sl(e,t){switch(ta(t),t.tag){case 3:va(Aa),Fe();break;case 26:case 27:case 5:Le(t);break;case 4:Fe();break;case 31:t.memoizedState!==null&&Io(t);break;case 13:Io(t);break;case 19:zo(t);break;case 10:va(t.type);break;case 22:case 23:Io(t),ko(),e!==null&&ke(Wa);break;case 24:va(Aa)}}function Cl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Q(t,t.return,e)}}function wl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Q(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Q(t,t.return,e)}}function Tl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{wo(t,n)}catch(t){Q(e,e.return,t)}}}function El(e,t,n){n.props=Cc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Q(e,t,n)}}function Dl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=_i(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Q(e,t,n)}}function Ol(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Q(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Q(e,t,n)}else n.current=null}}function kl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Al(e){for(var t=e.return;t!==null&&(Nl(t)&&em(e.stateNode,t.stateNode),!Ml(t));)t=t.return}function jl(e){for(var t=e.return;t!==null&&(Nl(t)&&tm(e.stateNode,t.stateNode),!Ml(t));)t=t.return}function Ml(e){return e.tag===5||e.tag===3||e.tag===27}function Nl(e){return e&&e.tag===7&&e.stateNode!==null}function Pl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Q(e,e.return,t)}}function Fl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[At]=t}catch(t){Q(e,e.return,t)}}function Il(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Ll(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Il(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Cn)),kl(e,r),P=!0;else if(i!==4&&(i===27&&(kl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Rl(e,t,n,r),e=e.sibling;e!==null;)Rl(e,t,n,r),e=e.sibling}function zl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),kl(e,r),P=!0;else if(i!==4&&(i===27&&(kl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(zl(e,t,n,r),e=e.sibling;e!==null;)zl(e,t,n,r),e=e.sibling}function Bl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[kt]=e,t[At]=n}catch(t){Q(e,e.return,t)}}var Vl=!1,U=null;function Hl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Vl=!0)}var W=null;function G(){var e=W;return W=null,e}var Ul=0;function Wl(e,t,n,r,i){return Ul=0,Gl(e.child,t,n,r,i)}function Gl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Vl=!0,Tp(o,Ul===0?t:t+`_`+Ul,n),Ul++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Gl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Kl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Kl(e.child,t),e=e.sibling}function ql(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ql(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=yi(t.default,t.share),t!==`none`&&(Wl(e,n,t,null,!1)||Kl(e.child,!1))}e=e.sibling}}function Jl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=_i(r,n),a=yi(r.default,n.paired?r.share:r.enter);a===`none`?ql(e):Wl(e,i,a,null,!1)?(ql(e),n.paired||t||Md(e,r.onEnter)):Kl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Jl(e,t),e=e.sibling;else ql(e)}function Yl(e){if(U!==null&&U.size!==0){var t=U;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=yi(n.default,n.share);if(a!==`none`&&(Wl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Md(e,n.onShare)):Kl(e.child,!1)),t.delete(r),t.size===0)break}}}Yl(e)}e=e.sibling}}}function Xl(e){if(e.tag===30){var t=e.memoizedProps,n=_i(t,e.stateNode),r=U===null?void 0:U.get(n),i=yi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Wl(e,n,i,null,!1)?r===void 0?Md(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,U.delete(n),Md(e,t.onShare)):Kl(e.child,!1)),U!==null&&Yl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Xl(e),e=e.sibling;else U!==null&&Yl(e)}function Zl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=_i(t,e.stateNode);t=yi(t.default,t.update),e.flags&=-5,t!==`none`&&Wl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Zl(e);e=e.sibling}}function Ql(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Kl(e.child,!1))}Ql(e)}e=e.sibling}}function $l(e){if(e.tag===30)e.stateNode.paired=null,Kl(e.child,!1),Ql(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)$l(e),e=e.sibling;else Ql(e)}function eu(e){for(e=e.child;e!==null;)e.tag===30?Kl(e.child,!1):e.subtreeFlags&33554432&&eu(e),e=e.sibling}function tu(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Ul<a.length){var l=a[Ul],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Ul===0?n:n+`_`+Ul,i),s&&e.flags&4||(W===null&&(W=[]),W.push(c,Ul===0?r:r+`_`+Ul,t.memoizedProps)),Ul++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:tu(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function nu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=_i(n,r),a=yi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Ul=0,i=tu(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Md(e,n.onUpdate))}else e.subtreeFlags&33554432&&nu(e,t);e=e.sibling}}var ru=!1,K=!1,iu=!1,au=!1,ou=typeof WeakSet==`function`?WeakSet:Set,su=null,cu=!1,lu=!1,uu=!1,du=!1;function fu(e,t,n){if(e=e.containerInfo,sp=gh,e=qr(e),Jr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,su=t,t=n?9270:1024;su!==null;){if(e=su,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Xl(r[a]);if(e.alternate===null&&e.flags&2)n&&Hl(e),pu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Xl(r),pu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Hl(e),pu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,su=r):(n&&Zl(e),pu(n))}}U=null}function pu(e){for(;su!==null;){var t=su,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Cc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Q(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=_i(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=yi(a.default,a.update),a!==`none`&&Wl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,su=r;break}su=t.return}}function mu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Pu(e,n),r&4&&Cl(5,n);break;case 1:if(Pu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Q(n,n.return,e)}else{var i=Cc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Q(n,n.return,e)}}}r&64&&Tl(n),r&512&&Dl(n,n.return);break;case 3:if(Pu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{wo(e,t)}catch(e){Q(n,n.return,e)}}break;case 27:t===null&&r&4&&Bl(n);case 26:case 5:Pu(e,n),t===null&&r&4&&Pl(n),r&512&&Dl(n,n.return);break;case 12:Pu(e,n);break;case 31:Pu(e,n),r&4&&Cu(e,n);break;case 13:Pu(e,n),r&4&&wu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gf.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||ru,!r){var a=t!==null&&t.memoizedState!==null||K;t=ru,i=K,ru=r,(K=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Iu(e,n,r)):Pu(e,n),ru=t,K=i}break;case 30:Pu(e,n),r&512&&Dl(n,n.return);break;case 7:r&512&&Dl(n,n.return);default:Pu(e,n)}}function hu(e,t){for(e=e.child;e!==null;)gu(e,t),e=e.sibling}function gu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Q(e,e.return,t)}_u(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,P=!0}catch(t){Q(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Q(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&hu(e,t);break;default:hu(e,t)}}function _u(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:gu(n,r);break a;case 22:n.memoizedState===null&&_u(n,r);break a;default:_u(n,r)}}e=e.sibling}}function vu(e){var t=e.alternate;t!==null&&(e.alternate=null,vu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Rt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var yu=null,bu=!1;function xu(e,t,n){for(n=n.child;n!==null;)Su(e,t,n),n=n.sibling}function Su(e,t,n){if(it&&typeof it.onCommitFiberUnmount==`function`)try{it.onCommitFiberUnmount(rt,n)}catch{}switch(n.tag){case 26:K||Ol(n,t),xu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!K&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:K||Ol(n,t),jl(n);var r=yu,i=bu;Sp(n.type)&&(yu=n.stateNode,bu=!1),xu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),yu=r,bu=i;break;case 5:K||Ol(n,t),jl(n);case 6:if(n.tag===6&&jl(n),r=yu,i=bu,yu=null,xu(e,t,n),yu=r,bu=i,yu!==null){if(bu)try{(yu.nodeType===9?yu.body:yu.nodeName===`HTML`?yu.ownerDocument.body:yu).removeChild(n.stateNode),P=!0}catch(e){Q(n,t,e)}else try{yu.removeChild(n.stateNode),P=!0}catch(e){Q(n,t,e)}}break;case 18:yu!==null&&(bu?(e=yu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(yu,n.stateNode));break;case 4:r=yu,i=bu,yu=n.stateNode.containerInfo,bu=!0,xu(e,t,n),yu=r,bu=i;break;case 0:case 11:case 14:case 15:wl(2,n,t),K||wl(4,n,t),xu(e,t,n);break;case 1:K||(Ol(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&El(n,t,r)),xu(e,t,n);break;case 21:xu(e,t,n);break;case 22:K=(r=K)||n.memoizedState!==null,xu(e,t,n),K=r;break;case 30:Ol(n,t),xu(e,t,n);break;case 7:K||Ol(n,t),xu(e,t,n);break;default:xu(e,t,n)}}function Cu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Q(t,t.return,e)}}}function wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Q(t,t.return,e)}}function Tu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ou),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ou),t;default:throw Error(i(435,e.tag))}}function Eu(e,t){var n=Tu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=_f.bind(null,e,t);t.then(r,r)}})}function Du(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){yu=l.stateNode,bu=!1;break a}break;case 5:yu=l.stateNode,bu=!1;break a;case 3:case 4:yu=l.stateNode.containerInfo,bu=!0;break a}l=l.return}if(yu===null)throw Error(i(160));Su(s,c,o),yu=null,bu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ku(t,e,n),t=t.sibling}var Ou=null;function ku(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Du(t,e,n),Au(e),a&4&&(wl(3,e,e.return),Cl(3,e),wl(5,e,e.return));break;case 1:Du(t,e,n),Au(e),a&512&&(K||r===null||Ol(r,r.return)),a&64&&ru&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Ou,Du(t,e,n),Au(e),a&512&&(K||r===null||Ol(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(ru)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[It]||r[kt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[kt]=e,Ut(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[kt]=e,Ut(r),t=r}e.stateNode=t}}else ru||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Fl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||K||t.parentNode.removeChild(t)):a.count--,n===null?ru||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Du(t,e,n),Au(e),a&512&&(K||r===null||Ol(r,r.return)),r!==null&&a&4&&Fl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=iu,iu=!1,Du(t,e,n),iu=o,Au(e),a&512&&(K||r===null||Ol(r,r.return)),e.flags&32){t=e.stateNode;try{hn(t,``),P=!0}catch(t){Q(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Fl(e,t,r===null?t:r.memoizedProps)),a&1024&&(au=!0);break;case 6:if(Du(t,e,n),Au(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,P=!0}catch(t){Q(e,e.return,t)}}break;case 3:if(P=!1,Wm=null,o=Ou,Ou=bm(t.containerInfo),Du(t,e,n),Ou=o,Au(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Q(e,e.return,t)}au&&(au=!1,ju(e)),P=!1;break;case 4:a=iu,iu=ru,r=Zt(),o=Ou,Ou=bm(e.stateNode.containerInfo),Du(t,e,n),Au(e),Ou=o,P&&lu&&(uu=!0),P=r,iu=a;break;case 12:Du(t,e,n),Au(e);break;case 31:Du(t,e,n),Au(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 13:Du(t,e,n),Au(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(pd=Xe()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=ru,l=K,u=iu;ru=c||o,iu=u||o,K=l||s,Du(t,e,n),K=l,iu=u,ru=c,Au(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||ru||K||(t=s||K,n=ru,r=K,ru=o||ru,K=t,Fu(e,2),ru=n,K=r),!o&&iu||hu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Eu(e,n))));break;case 19:Du(t,e,n),Au(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 30:a&512&&(K||r===null||Ol(r,r.return)),a=Zt(),o=lu,s=(n&335544064)===n,c=e.memoizedProps,lu=s&&yi(c.default,c.update)!==`none`,Du(t,e,n),Au(e),s&&r!==null&&P&&(e.flags|=4),lu=o,P=a;break;case 21:break;case 7:a&512&&(K||r===null||Ol(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Du(t,e,n),Au(e)}}function Au(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Il(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Nl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Ml(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;zl(e,Ll(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(hn(l,``),n.flags&=-33),zl(e,Ll(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Rl(e,Ll(e),u,s);break;default:throw Error(i(161))}}catch(t){Q(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ju(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ju(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Mu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Nu(t,e),t=t.sibling;else nu(t,!1)}function Nu(e,t){var n=e.alternate;if(n===null)Jl(e,!1);else switch(e.tag){case 3:if(du=cu=!1,G(),Mu(t,e),!cu&&!uu){if(e=W,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),du=!0}W=null;break;case 5:Mu(t,e);break;case 4:r=cu,cu=!1,Mu(t,e),cu&&(uu=!0),cu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Mu(t,e):Jl(e,!1));break;case 30:r=cu,i=G(),cu=!1,Mu(t,e),cu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=_i(a,o),o=_i(n.memoizedProps,o);var s=yi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Ul=0,t=tu(e,n,t,o,s,a,!0),Ul!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Md(e,e.memoizedProps.onUpdate),W=i):i!==null&&(i.push.apply(i,W),W=i),cu=e.flags&32?!0:r;break;default:Mu(t,e)}}function Pu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)mu(e,t.alternate,t),t=t.sibling}function Fu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:wl(4,n,n.return),Fu(n,r);break;case 1:Ol(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&El(n,n.return,i),Fu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:Ol(n,n.return),n.tag!==5&&n.tag!==27||jl(n),Fu(n,r);break;case 6:jl(n);break;case 26:Ol(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||K||i.parentNode.removeChild(i),Fu(n,r);break;case 22:n.memoizedState===null&&Fu(n,r);break;case 30:Ol(n,n.return),Fu(n,r);break;case 7:Ol(n,n.return);default:Fu(n,r)}e=e.sibling}}function Iu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Iu(i,a,n),Cl(4,a);break;case 1:if(Iu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Q(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Co(l[i],c)}catch(e){Q(r,r.return,e)}}s&&o&64&&Tl(a),Dl(a,a.return);break;case 27:n&2&&Bl(a);case 5:a.tag!==5&&a.tag!==27||Al(a),Iu(i,a,n),s&&r===null&&o&4&&Pl(a),Dl(a,a.return);break;case 6:Al(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||ru||Km(bm(c.ownerDocument),a.type,c),Iu(i,a,n),s&&r===null&&o&4&&Pl(a),Dl(a,a.return);break;case 12:Iu(i,a,n);break;case 31:Iu(i,a,n),s&&o&4&&Cu(i,a);break;case 13:Iu(i,a,n),s&&o&4&&wu(i,a);break;case 22:a.memoizedState===null&&Iu(i,a,n),Dl(a,a.return);break;case 30:Iu(i,a,n),Dl(a,a.return);break;case 7:Dl(a,a.return);default:Iu(i,a,n)}t=t.sibling}}function Lu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ma(n))}function Ru(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ma(e))}function zu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Bu(e,t,n,r),t=t.sibling;else i&&eu(t)}function Bu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&$l(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:zu(e,t,n,r),a&2048&&Cl(9,t);break;case 1:zu(e,t,n,r);break;case 3:zu(e,t,n,r),i&&du&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ma(a)));break;case 12:if(a&2048){zu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Q(t,t.return,e)}}else zu(e,t,n,r);break;case 31:zu(e,t,n,r);break;case 13:zu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&$l(t),o._visibility&2?zu(e,t,n,r):(o._visibility|=2,Vu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&$l(s),o._visibility&2?zu(e,t,n,r):Hu(e,t)),a&2048&&Lu(s,t);break;case 24:zu(e,t,n,r),a&2048&&Ru(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Kl(a.child,!0),Kl(t.child,!0))),zu(e,t,n,r);break;default:zu(e,t,n,r)}}function Vu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Vu(a,o,s,c,i),Cl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Vu(a,o,s,c,i)):u._visibility&2?Vu(a,o,s,c,i):Hu(a,o),i&&l&2048&&Lu(o.alternate,o);break;case 24:Vu(a,o,s,c,i),i&&l&2048&&Ru(o.alternate,o);break;default:Vu(a,o,s,c,i)}t=t.sibling}}function Hu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Hu(n,r),i&2048&&Lu(r.alternate,r);break;case 24:Hu(n,r),i&2048&&Ru(r.alternate,r);break;default:Hu(n,r)}t=t.sibling}}var q=8192;function Uu(e,t,n){if(e.subtreeFlags&q)for(e=e.child;e!==null;)Wu(e,t,n),e=e.sibling}function Wu(e,t,n){switch(e.tag){case 26:Uu(e,t,n),e.flags&q&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,Ou,e.memoizedState,e.memoizedProps));break;case 5:Uu(e,t,n),e.flags&q&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=Ou;Ou=bm(e.stateNode.containerInfo),Uu(e,t,n),Ou=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=q,q=16777216,Uu(e,t,n),q=r):Uu(e,t,n));break;case 30:if((e.flags&q)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,U===null&&(U=new Map),U.set(r,i)}Uu(e,t,n);break;default:Uu(e,t,n)}}function Gu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ku(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];su=r,Yu(r,e)}Gu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qu(e),e=e.sibling}function qu(e){switch(e.tag){case 0:case 11:case 15:Ku(e),e.flags&2048&&wl(9,e,e.return);break;case 3:Ku(e);break;case 12:Ku(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ju(e)):Ku(e);break;default:Ku(e)}}function Ju(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];su=r,Yu(r,e)}Gu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wl(8,t,t.return),Ju(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ju(t));break;default:Ju(t)}e=e.sibling}}function Yu(e,t){for(;su!==null;){var n=su;switch(n.tag){case 0:case 11:case 15:wl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,su=r;else a:for(n=e;su!==null;){r=su;var i=r.sibling,a=r.return;if(vu(r),r===n){su=null;break a}if(i!==null){i.return=a,su=i;break a}su=a}}}var Xu={getCacheForType:function(e){var t=wa(Aa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return wa(Aa).controller.signal}},Zu=typeof WeakMap==`function`?WeakMap:Map,J=0,Qu=null,Y=null,X=0,Z=0,$u=null,ed=!1,td=!1,nd=!1,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=null,dd=null,fd=!1,pd=0,md=0,hd=1/0,gd=null,_d=null,vd=0,yd=null,bd=null,xd=0,Sd=0,Cd=null,wd=null,Td=null,Ed=null,Dd=null,Od=0,kd=null;function Ad(){return J&2&&X!==0?X&-X:E.T===null?Et():Nf()}function jd(){if(cd===0){if(!(X&536870912)||V){var e=ut;ut<<=1,!(ut&3932160)&&(ut=262144),cd=e}else cd=536870912}return e=Ao.current,e!==null&&(e.flags|=32),cd}function Md(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(_i(e.memoizedProps,n))),Ed===null&&(Ed=[]),Ed.push(t.bind(null,r))}}function Nd(e,t,n){(e===Qu&&(Z===2||Z===9)||e.cancelPendingCommit!==null)&&(Bd(e,0),Ld(e,X,cd,!1)),yt(e,n),J&2&&e===Qu||(e===Qu&&(!(J&2)&&(od|=n),id===4&&Ld(e,X,cd,!1)),Tf(e))}function Pd(e,t,n){if(J&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||mt(e,t),a=r?Jd(e,t):Kd(e,t,!0),o=r;do{if(a===0){td&&!r&&Ld(e,t,0,!1);break}if(n=e.current.alternate,o&&!Id(n))a=Kd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ud;var l=c.current.memoizedState.isDehydrated;if(l&&(Bd(c,s).flags|=256),s=Kd(c,s,!1),s!==2&&s!==6){if(nd&&!l){c.errorRecoveryDisabledLanes|=o,od|=o,a=4;break a}o=dd,dd=a,o!==null&&(dd===null?dd=o:dd.push.apply(dd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Bd(e,0),Ld(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ld(r,t,cd,!ed);break a;case 2:dd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=pd+300-Xe(),10<a)){if(Ld(r,t,cd,!ed),pt(r,0,!0)!==0)break a;xd=t,r.timeoutHandle=gp(Fd.bind(null,r,n,dd,gd,fd,t,cd,od,ld,ed,o,`Throttled`,-0,0),a);break a}Fd(r,n,dd,gd,fd,t,cd,od,ld,ed,o,null,-0,0)}break}}while(1);Tf(e)}function Fd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Cn},U=null,Wu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?pd-Xe():(a&4194048)===a?md-Xe():0,m=eh(d,m),m!==null)?(xd=a,e.cancelPendingCommit=m(tf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Ld(e,a,o,!l)):tf(e,t,a,n,r,i,o,s,c,l,u,d)}function Id(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Vr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ld(e,t,n,r){t=ht(e,t),t&=~sd,t&=~od,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ot(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&xt(e,n,t)}function Rd(){return J&6?!0:(Ef(0,!1),!1)}function zd(){if(Y!==null){if(Z===0)var e=Y.return;else e=Y,ga=ha=null,as(e),io=null,ao=0,e=Y;for(;e!==null;)Sl(e.alternate,e),e=e.return;Y=null}}function Bd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xd=0,zd(),Qu=e,Y=n=Pi(e.current,null),X=t,Z=0,$u=null,ed=!1,td=mt(e,t),nd=!1,ld=cd=sd=od=ad=id=0,dd=ud=null,fd=!1,rd=ht(e,t),wi(),n}function Vd(e,t){H=null,E.H=hc,t===Ja||t===Xa?(t=no(),Z=3):t===Ya?(t=no(),Z=4):Z=t===Nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,$u=t,Y===null&&(id=1,Dc(e,Hi(t,e.current)))}function Hd(){var e=Ao.current;return e===null?!0:(X&4194048)===X?jo===null:(X&62914560)===X||X&536870912?e===jo:!1}function Ud(){var e=E.H;return E.H=hc,e===null?hc:e}function Wd(){var e=E.A;return E.A=Xu,e}function Gd(){id=4,ed||(X&4194048)!==X&&Ao.current!==null||(td=!0),!(ad&134217727)&&!(od&134217727)||Qu===null||Ld(Qu,X,cd,!1)}function Kd(e,t,n){var r=J;J|=2;var i=Ud(),a=Wd();(Qu!==e||X!==t)&&(gd=null,Bd(e,t)),t=!1;var o=id;a:do try{if(Z!==0&&Y!==null){var s=Y,c=$u;switch(Z){case 8:zd(),o=6;break a;case 3:case 2:case 9:case 6:Ao.current===null&&(t=!0);var l=Z;if(Z=0,$u=null,Qd(e,s,c,l),n&&td){o=0;break a}break;default:l=Z,Z=0,$u=null,Qd(e,s,c,l)}}qd(),o=id;break}catch(t){Vd(e,t)}while(1);return t&&e.shellSuspendCounter++,ga=ha=null,J=r,E.H=i,E.A=a,Y===null&&(Qu=null,X=0,wi()),o}function qd(){for(;Y!==null;)Xd(Y)}function Jd(e,t){var n=J;J|=2;var r=Ud(),a=Wd();Qu!==e||X!==t?(gd=null,hd=Xe()+500,Bd(e,t)):td=mt(e,t);a:do try{if(Z!==0&&Y!==null){t=Y;var o=$u;b:switch(Z){case 1:Z=0,$u=null,Qd(e,t,o,1);break;case 2:case 9:if(Qa(o)){Z=0,$u=null,Zd(t);break}t=function(){Z!==2&&Z!==9||Qu!==e||(Z=7),Tf(e)},o.then(t,t);break a;case 3:Z=7;break a;case 4:Z=5;break a;case 7:Qa(o)?(Z=0,$u=null,Zd(t)):(Z=0,$u=null,Qd(e,t,o,7));break;case 5:var s=null;switch(Y.tag){case 26:s=Y.memoizedState;case 5:case 27:var c=Y;if(s?Ym(s):c.stateNode.complete){Z=0,$u=null;var l=c.sibling;if(l!==null)Y=l;else{var u=c.return;u===null?Y=null:(Y=u,$d(u))}break b}}Z=0,$u=null,Qd(e,t,o,5);break;case 6:Z=0,$u=null,Qd(e,t,o,6);break;case 8:zd(),id=6;break a;default:throw Error(i(462))}}Yd();break}catch(t){Vd(e,t)}while(1);return ga=ha=null,E.H=r,E.A=a,J=n,Y===null?(Qu=null,X=0,wi(),id):0}function Yd(){for(;Y!==null&&!Je();)Xd(Y)}function Xd(e){var t=pl(e.alternate,e,rd);e.memoizedProps=e.pendingProps,t===null?$d(e):Y=t}function Zd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=qc(n,t,t.pendingProps,t.type,void 0,X);break;case 11:t=qc(n,t,t.pendingProps,t.type.render,t.ref,X);break;case 5:as(t);var r=t;r===ra&&(V?(la(r),r.tag===5&&r.stateNode!=null&&(B=r.stateNode)):(la(r),V=!0));default:Sl(n,t),t=Y=Fi(t,rd),t=pl(n,t,rd)}e.memoizedProps=e.pendingProps,t===null?$d(e):Y=t}function Qd(e,t,n,r){ga=ha=null,as(t),io=null,ao=0;var i=t.return;try{if(Mc(e,i,t,n,X)){id=1,Dc(e,Hi(n,e.current)),Y=null;return}}catch(t){if(i!==null)throw Y=i,t;id=1,Dc(e,Hi(n,e.current)),Y=null;return}t.flags&32768?(V||r===1?e=!0:td||X&536870912?e=!1:(ed=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),ef(t,e)):$d(t)}function $d(e){var t=e;do{if(t.flags&32768){ef(t,ed);return}e=t.return;var n=bl(t.alternate,t,rd);if(n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);id===0&&(id=5)}function ef(e,t){do{var n=xl(e.alternate,e);if(n!==null){n.flags&=32767,Y=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Y=e;return}Y=e=n}while(e!==null);id=6,Y=null}function tf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do uf();while(vd!==0);if(J&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Qu&&(Y=Qu=null,X=0),bd=t,yd=e,xd=n,Cd=a,wd=r,nf(e,t,n,s,c,l,f)}}function nf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Sd=s,s|=Ci,bt(e,n,s,r,i,a),Ed=null,(n&335544064)===n?(Dd=Fa(e),r=10262):(Dd=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,vf(k,function(){return df(),null})):(e.callbackNode=null,e.callbackPriority=0),Vl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,i=D.p,D.p=2,a=J,J|=4;try{fu(e,t,n)}finally{J=a,D.p=i,E.T=r}}vd=1,Vl?Td=Mp(o,e.containerInfo,Dd,of,sf,af,cf,df,rf,null,null):(of(),sf(),cf())}function rf(e){if(vd!==0){var t=yd.onRecoverableError;t(e,{componentStack:null})}}function af(){vd===3&&(vd=0,Nu(bd,yd),vd=4)}function of(){if(vd===1){vd=0;var e=yd,t=bd,n=xd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=E.T,E.T=null;var i=D.p;D.p=2;var a=J;J|=4;try{lu=uu=!1,ku(t,e,n),n=cp;var o=qr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Kr(s.ownerDocument.documentElement,s)){if(c!==null&&Jr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Gr(s,h),v=Gr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{J=a,D.p=i,E.T=r}}e.current=t,vd=2}}function sf(){if(vd===2){vd=0;var e=yd,t=bd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=J;J|=4;try{mu(e,t.alternate,t)}finally{J=i,D.p=r,E.T=n}}vd=3}}function cf(){if(vd===4||vd===3){vd=0;var e=Td;Td=null,Ye();var t=yd,n=bd,r=xd,i=wd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?vd=5:(vd=0,bd=yd=null,lf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(_d=null),Tt(r),n=n.stateNode,it&&typeof it.onCommitFiberRoot==`function`)try{it.onCommitFiberRoot(rt,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=E.T,a=D.p,D.p=2,E.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{E.T=n,D.p=a}}if(i=Ed,o=Dd,Dd=null,i!==null&&(Ed=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);xd&3&&uf(),Tf(t),a=t.pendingLanes,r&261930&&a&42?t===kd?Od++:(Od=0,kd=t):(Od=0,kd=null),Ef(0,!1)}}function lf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ma(t)))}function uf(){return Td!==null&&(Td.skipTransition(),Td=null),of(),sf(),cf(),df()}function df(){if(vd!==5)return!1;var e=yd,t=Sd;Sd=0;var n=Tt(xd),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=Cd,Cd=null;var o=yd,s=xd;if(vd=0,bd=yd=null,xd=0,J&6)throw Error(i(331));var c=J;if(J|=4,qu(o.current),Bu(o,o.current,s,n),J=c,Ef(0,!1),it&&typeof it.onPostCommitFiberRoot==`function`)try{it.onPostCommitFiberRoot(rt,o)}catch{}return!0}finally{D.p=a,E.T=r,lf(e,t)}}function ff(e,t,n){t=Hi(n,t),t=kc(e.stateNode,t,2),e=_o(e,t,2),e!==null&&(yt(e,2),Tf(e))}function Q(e,t,n){if(e.tag===3)ff(e,e,n);else for(;t!==null;){if(t.tag===3){ff(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(_d===null||!_d.has(r))){e=Hi(n,e),n=Ac(2),r=_o(t,n,2),r!==null&&(jc(n,r,t,e),yt(r,2),Tf(r));break}}t=t.return}}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(nd=!0,i.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Qu===e&&(X&n)===n&&(id===4||id===3&&(X&62914560)===X&&300>Xe()-pd?J&2?sd|=n:Bd(e,0):sd|=n,ld===X&&(ld=0)),Tf(e)}function hf(e,t){t===0&&(t=_t()),e=Di(e,t),e!==null&&(yt(e,t),Tf(e))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hf(e,n)}function _f(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),hf(e,n)}function vf(e,t){return Ke(e,t)}var yf=null,bf=null,xf=!1,Sf=!1,Cf=!1,wf=0;function Tf(e){e!==bf&&e.next===null&&(bf===null?yf=bf=e:bf=bf.next=e),Sf=!0,xf||(xf=!0,Mf())}function Ef(e,t){if(!Cf&&Sf){Cf=!0;do for(var n=!1,r=yf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ot(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,jf(r,a))}else a=X,a=pt(r,r===Qu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||mt(r,a)||(n=!0,jf(r,a))}r=r.next}while(n);Cf=!1}}function Df(){Of()}function Of(){Sf=xf=!1;var e=0;wf!==0&&hp()&&(e=wf);for(var t=Xe(),n=null,r=yf;r!==null;){var i=r.next,a=kf(r,t);a===0?(r.next=null,n===null?yf=i:n.next=i,i===null&&(bf=n)):(n=r,(e!==0||a&3)&&(Sf=!0)),r=i}vd!==0&&vd!==5||Ef(e,!1),wf!==0&&(wf=0)}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ot(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=gt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Qu,n=X,n=pt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Z===2||Z===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&qe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||mt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&qe(r),Tt(n)){case 2:case 8:n=$e;break;case 32:n=k;break;case 268435456:n=et;break;default:n=k}return r=Af.bind(null,e),n=Ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&qe(r),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,t){if(vd!==0&&vd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(uf()&&e.callbackNode!==n)return null;var r=X;return r=pt(e,e===Qu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Pd(e,r,t),kf(e,Xe()),e.callbackNode!=null&&e.callbackNode===n?Af.bind(null,e):null)}function jf(e,t){if(uf())return null;Pd(e,t,!0)}function Mf(){bp(function(){J&6?Ke(Qe,Df):Of()})}function Nf(){if(wf===0){var e=Ra;e===0&&(e=lt,lt<<=1,!(lt&261888)&&(lt=256)),wf=e}return wf}function Pf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Sn(e)}function Ff(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Pf((i[At]||null).action),o=r.submitter;o&&(t=(t=o[At]||null)?Pf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Hn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wf!==0){var e=new FormData(i,o);tc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),tc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var If=0;If<mi.length;If++){var Lf=mi[If];hi(Lf.toLowerCase(),`on`+(Lf[0].toUpperCase()+Lf.slice(1)))}hi(oi,`onAnimationEnd`),hi(si,`onAnimationIteration`),hi(ci,`onAnimationStart`),hi(`dblclick`,`onDoubleClick`),hi(`focusin`,`onFocus`),hi(`focusout`,`onBlur`),hi(li,`onTransitionRun`),hi(ui,`onTransitionStart`),hi(di,`onTransitionCancel`),hi(fi,`onTransitionEnd`),qt(`onMouseEnter`,[`mouseout`,`mouseover`]),qt(`onMouseLeave`,[`mouseout`,`mouseover`]),qt(`onPointerEnter`,[`pointerout`,`pointerover`]),qt(`onPointerLeave`,[`pointerout`,`pointerover`]),M(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),M(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),M(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),M(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),M(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),M(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Rf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),zf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Rf));function Bf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){bi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){bi(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[Mt];n===void 0&&(n=t[Mt]=new Set);var r=e+`__bubble`;n.has(r)||(Wf(t,e,2,!1),n.add(r))}function Vf(e,t,n){var r=0;t&&(r|=4),Wf(n,e,r,t)}var Hf=`_reactListening`+Math.random().toString(36).slice(2);function Uf(e){if(!e[Hf]){e[Hf]=!0,Gt.forEach(function(t){t!==`selectionchange`&&(zf.has(t)||Vf(t,!1,e),Vf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hf]||(t[Hf]=!0,Vf(`selectionchange`,!1,t))}}function Wf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!jn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Gf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=zt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}On(function(){var r=a,i=F(n),s=[];a:{var c=pi.get(e);if(c!==void 0){var l=Hn,u=e;switch(e){case`keypress`:if(Ln(n)===0)break a;case`keydown`:case`keyup`:l=ir;break;case`focusin`:u=`focus`,l=R;break;case`focusout`:u=`blur`,l=R;break;case`beforeblur`:case`afterblur`:l=R;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Yn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=L;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=sr;break;case oi:case si:case ci:l=Xn;break;case fi:l=cr;break;case`scroll`:case`scrollend`:l=Wn;break;case`wheel`:l=lr;break;case`copy`:case`cut`:case`paste`:l=Zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=ar;break;case`submit`:l=or;break;case`toggle`:case`beforetoggle`:l=ur}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=kn(m,p),g!=null&&d.push(Kf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==wn&&(u=n.relatedTarget||n.fromElement)&&(zt(u)||u[jt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?zt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Yn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=ar,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Vt(c),h=l==null?u:Vt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,zt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?ne(c,l,Jf):null,c!==null&&Yf(s,u,c,d,!1),l!==null&&f!==null&&Yf(s,f,l,d,!0)))}a:{if(c=r?Vt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=kr;else if(wr(c)){if(Ar)_=zr;else{_=Lr;var v=Ir}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&yn(r.elementType)&&(_=kr):_=Rr;if(_&&=_(e,r)){Tr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Vt(r):window,e){case`focusin`:(wr(v)||v.contentEditable===`true`)&&(Xr=v,Zr=r,Qr=null);break;case`focusout`:Qr=Zr=Xr=null;break;case`mousedown`:$r=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:$r=!1,ei(s,n,i);break;case`selectionchange`:if(Yr)break;case`keydown`:case`keyup`:ei(s,n,i)}var y;if(fr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else br?vr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(hr&&n.locale!==`ko`&&(br||b!==`onCompositionStart`?b===`onCompositionEnd`&&br&&(y=In()):(Nn=i,Pn=`value`in Nn?Nn.value:Nn.textContent,br=!0)),v=qf(r,b),0<v.length&&(b=new Qn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=yr(n),y!==null&&(b.data=y)))),(y=mr?xr(e,n):Sr(e,n))&&(b=qf(r,`onBeforeInput`),0<b.length&&(v=new Qn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Ff(s,e,r,n,i)}Bf(s,t)})}function Kf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=kn(e,n),i!=null&&r.unshift(Kf(e,i,a)),i=kn(e,t),i!=null&&r.push(Kf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Jf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=kn(n,a),l!=null&&o.unshift(Kf(n,l,c))):i||(l=kn(n,a),l!=null&&o.push(Kf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function Qf(e){return(typeof e==`string`?e:``+e).replace(Xf,`
`).replace(Zf,``)}function $f(e,t){return t=Qf(t),Qf(e)===t}function ep(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||hn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&hn(e,``+r);else return;break;case`className`:$t(e,`class`,r);break;case`tabIndex`:$t(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:$t(e,n,r);break;case`style`:vn(e,r,o);return;case`data`:if(t!==`object`){$t(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Sn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&ep(e,t,`name`,a.name,a,null),ep(e,t,`formEncType`,a.formEncType,a,null),ep(e,t,`formMethod`,a.formMethod,a,null),ep(e,t,`formTarget`,a.formTarget,a,null)):(ep(e,t,`encType`,a.encType,a,null),ep(e,t,`method`,a.method,a,null),ep(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Sn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Cn);return;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Sn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Qt(e,`popover`,r);break;case`xlinkActuate`:en(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:en(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:en(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:en(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:en(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:en(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:en(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:en(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:en(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Qt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=bn.get(n)||n,Qt(e,n,r);else return}P=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:vn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)hn(e,r);else if(typeof r==`number`||typeof r==`bigint`)hn(e,``+r);else return;break;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=Cn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[At]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}P=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Qt(e,n,r)}return}P=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,o,s,n,null)}}a&&ep(e,t,`srcSet`,n.srcSet,n,null),r&&ep(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:ep(e,t,r,d,n,null)}}un(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:ep(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&fn(e,!!r,n,!0):fn(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:ep(e,t,s,c,n,null)}mn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:ep(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<Rf.length;r++)$(Rf[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,u,r,n,null)}return;default:if(yn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&ep(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||ep(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(P=!0),o=m;break;case`name`:m!==f&&(P=!0),a=m;break;case`checked`:m!==f&&(P=!0),u=m;break;case`defaultChecked`:m!==f&&(P=!0),d=m;break;case`value`:m!==f&&(P=!0),s=m;break;case`defaultValue`:m!==f&&(P=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&ep(e,t,p,m,r,f)}}ln(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||ep(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(P=!0),p=o;break;case`defaultValue`:o!==l&&(P=!0),c=o;break;case`multiple`:o!==l&&(P=!0),s=o;default:o!==l&&ep(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?fn(e,!!n,n?[]:``,!1):fn(e,!!n,t,!0)):fn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:ep(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(P=!0),p=a;break;case`defaultValue`:a!==o&&(P=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&ep(e,t,s,a,r,o)}pn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:ep(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(P=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:ep(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&ep(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:ep(e,t,u,p,r,m)}return;default:if(yn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&ep(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||ep(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[kt]=r,n[At]=t,np(n,e,t),Ut(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[It]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:w({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=zt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ne(n,a,C),t===null?t=!1:(h(t,!0,ee,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=ne(r,a,C),t===null?t=!1:(h(t,!0,te,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Rt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[It])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&ep(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===Cn&&(e.onclick=null),Rt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Rt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=D.d;D.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=Rd();return e||t}function Cm(e){var t=Bt(e);t!==null&&t.tag===5&&t.type===`form`?rc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=cn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Ut(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+cn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+cn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+cn(n.imageSizes)+`"]`)):i+=`[href="`+cn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=w({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Lt]=!0,o.onload=o.onerror=function(){Wt(o)}),Ut(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+cn(r)+`"][href="`+cn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=w({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Ut(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Ht(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=w({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Ut(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Ht(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=w({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Ut(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Ht(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=w({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Ut(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=Me.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Ht(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Ht(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Ht(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+cn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Lt]){r.loading=1;return}}else t=e.createElement(`link`),t[Lt]=!0,t.onload=t.onerror=Wt.bind(null,t),np(t,`link`,n),Ut(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+cn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+cn(n.href)+`"]`);if(r)return t.instance=r,Ut(r),r;var a=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ut(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Ut(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Ut(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Ut(a),a):(r=n,(a=vm.get(o))&&(r=w({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ut(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[It]||a[kt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ut(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Ut(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:le,Provider:null,Consumer:null,_currentValue:Te,_currentValue2:Te,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vt(0),this.hiddenUpdates=vt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Mi(3,null,null,t),e.current=a,a.stateNode=e,t=ja(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},mo(a),e}function uh(e){return e?(e=Ai,e):Ai}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=go(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=_o(e,r,t),n!==null&&(Nd(n,e,t),vo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Di(e,67108864);t!==null&&Nd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=Ad();t=wt(t);var n=Di(e,t);n!==null&&Nd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,yh(e,t,n,r)}finally{D.p=a,E.T=i}}function vh(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,yh(e,t,n,r)}finally{D.p=a,E.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Gf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Bt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=ft(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ot(o);s.entanglements[1]|=c,o&=~c}Tf(a),!(J&6)&&(hd=Xe()+500,Ef(0,!1))}}break;case 31:case 13:s=Di(a,2),s!==null&&Nd(s,a,2),Rd(),ph(a,2)}if(a=bh(r),a===null&&Gf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Gf(e,t,r,null,n)}}function bh(e){return e=F(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=zt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ze()){case Qe:return 2;case $e:return 8;case k:case A:return 32;case et:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Bt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=zt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,Dt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,Dt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wn=r,n.target.dispatchEvent(r),wn=null}else return t=Bt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Bt(n);a!==null&&(e.splice(t,3),t-=3,tc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[At]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[At]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,Ad(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Rd(),t[jt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{rt=Jh.inject(qh),it=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=wc,s=Tc,c=Ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[jt]=t.current,Uf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=e=>e.replace(/[-_ ]+(\w)/g,(e,t)=>t.toUpperCase()).replace(/^./,e=>e.toLowerCase());function b(e,t){return`__ciq-font-${e}-${t.weight}-${t.style}`}function x(e,t){return`
    @font-face {
      font-family: '${e}';
      font-style: ${t.style};
      font-weight: ${t.weight};
      src: url('${t.file}') format('woff2');
      font-display: swap;
    }
  `}function S(e,t){return{href:t.file,type:`font/woff2`,as:`font`,crossOrigin:`anonymous`}}function ee(e,t){let{id:n}=t,r=n??b(e,t);if(document.getElementById(r))return;let i=document.createElement(`style`);i.id=r,i.textContent=x(e,t),document.head.appendChild(i)}var te=(e,t)=>t?e.filter(e=>{let n=!t.weights||t.weights.includes(e.weight),r=!t.styles||t.styles.includes(e.style);return n&&r}):e;function C(e){let t=Object.fromEntries(e.variants.map(t=>{let{weight:n,style:r}=t;return[y([e.name,n,r===`normal`?``:r].filter(Boolean).join(`-`)),{css:()=>x(e.name,t),preload:()=>[S(e.name,t)],inject:()=>ee(e.name,t)}]})),n={[y(e.name)]:{css:t=>te(e.variants,t).map(t=>x(e.name,t)).join(`
`),preload:t=>te(e.variants,t).map(t=>S(e.name,t)),inject:t=>te(e.variants,t).forEach(t=>ee(e.name,t))}};return{...t,...n}}var ne=`/assets/CommitMono-Regular.woff2`,w=`/assets/CommitMono-Italic.woff2`,re=`/assets/CommitMono-Bold.woff2`,ie=`/assets/CommitMono-BoldItalic.woff2`,ae=`/assets/Inter-Thin.woff2`,T=`/assets/Inter-ThinItalic.woff2`,oe=`/assets/Inter-ExtraLight.woff2`,se=`/assets/Inter-ExtraLightItalic.woff2`,ce=`/assets/Inter-Light.woff2`,le=`/assets/Inter-LightItalic.woff2`,ue=`/assets/Inter-Regular.woff2`,de=`/assets/Inter-Italic.woff2`,fe=`/assets/Inter-Medium.woff2`,pe=`/assets/Inter-MediumItalic.woff2`,me=`/assets/Inter-SemiBold.woff2`,he=`/assets/Inter-SemiBoldItalic.woff2`,ge=`/assets/Inter-Bold.woff2`,_e=`/assets/Inter-BoldItalic.woff2`,ve=`/assets/Inter-ExtraBold.woff2`,ye=`/assets/Inter-ExtraBoldItalic.woff2`,be=`/assets/Inter-Black.woff2`,xe=`/assets/Inter-BlackItalic.woff2`,Se=`/assets/Roboto-Thin.woff2`,Ce=`/assets/Roboto-ThinItalic.woff2`,we=`/assets/Roboto-Light.woff2`,E=`/assets/Roboto-LightItalic.woff2`,D=`/assets/Roboto-Regular.woff2`,Te=`/assets/Roboto-RegularItalic.woff2`,Ee=`/assets/Roboto-Medium.woff2`,De=`/assets/Roboto-MediumItalic.woff2`,Oe=`/assets/Roboto-Bold.woff2`,ke=`/assets/Roboto-BoldItalic.woff2`,O=`/assets/Roboto-Black.woff2`,Ae=`/assets/Roboto-BlackItalic.woff2`,je=`/assets/Satoshi-Light.woff2`,Me=`/assets/Satoshi-LightItalic.woff2`,Ne=`/assets/Satoshi-Regular.woff2`,Pe=`/assets/Satoshi-Italic.woff2`,Fe=`/assets/Satoshi-Medium.woff2`,Ie=`/assets/Satoshi-MediumItalic.woff2`,Le=`/assets/Satoshi-Bold.woff2`,Re=`/assets/Satoshi-BoldItalic.woff2`,ze=`/assets/Satoshi-Black.woff2`,Be=`/assets/Satoshi-BlackItalic.woff2`,Ve={name:`CommitMono`,variants:[{weight:400,style:`normal`,file:ne},{weight:400,style:`italic`,file:w},{weight:700,style:`normal`,file:re},{weight:700,style:`italic`,file:ie}]},He={name:`Inter`,variants:[{weight:100,style:`normal`,file:ae},{weight:100,style:`italic`,file:T},{weight:200,style:`normal`,file:oe},{weight:200,style:`italic`,file:se},{weight:300,style:`normal`,file:ce},{weight:300,style:`italic`,file:le},{weight:400,style:`normal`,file:ue},{weight:400,style:`italic`,file:de},{weight:500,style:`normal`,file:fe},{weight:500,style:`italic`,file:pe},{weight:600,style:`normal`,file:me},{weight:600,style:`italic`,file:he},{weight:700,style:`normal`,file:ge},{weight:700,style:`italic`,file:_e},{weight:800,style:`normal`,file:ve},{weight:800,style:`italic`,file:ye},{weight:900,style:`normal`,file:be},{weight:900,style:`italic`,file:xe}]},Ue={name:`Roboto`,variants:[{weight:100,style:`normal`,file:Se},{weight:100,style:`italic`,file:Ce},{weight:300,style:`normal`,file:we},{weight:300,style:`italic`,file:E},{weight:400,style:`normal`,file:D},{weight:400,style:`italic`,file:Te},{weight:500,style:`normal`,file:Ee},{weight:500,style:`italic`,file:De},{weight:700,style:`normal`,file:Oe},{weight:700,style:`italic`,file:ke},{weight:900,style:`normal`,file:O},{weight:900,style:`italic`,file:Ae}]},We={name:`Satoshi`,variants:[{weight:300,style:`normal`,file:je},{weight:300,style:`italic`,file:Me},{weight:400,style:`normal`,file:Ne},{weight:400,style:`italic`,file:Pe},{weight:500,style:`normal`,file:Fe},{weight:500,style:`italic`,file:Ie},{weight:700,style:`normal`,file:Le},{weight:700,style:`italic`,file:Re},{weight:900,style:`normal`,file:ze},{weight:900,style:`italic`,file:Be}]},Ge=C(Ve),Ke=C(He),qe=C(Ue),Je=C(We);Ge.commitMono,Ge.commitMono400,Ge.commitMono400Italic,Ge.commitMono700,Ge.commitMono700Italic;var Ye=Ke.inter;Ke.inter100,Ke.inter100Italic,Ke.inter200,Ke.inter200Italic,Ke.inter300,Ke.inter300Italic,Ke.inter400,Ke.inter400Italic,Ke.inter500,Ke.inter500Italic,Ke.inter600,Ke.inter600Italic,Ke.inter700,Ke.inter700Italic,Ke.inter800,Ke.inter800Italic,Ke.inter900,Ke.inter900Italic,qe.roboto,qe.roboto100,qe.roboto100Italic,qe.roboto300,qe.roboto300Italic,qe.roboto400,qe.roboto400Italic,qe.roboto500,qe.roboto500Italic,qe.roboto700,qe.roboto700Italic,qe.roboto900,qe.roboto900Italic;var Xe=Je.satoshi;Je.satoshi300,Je.satoshi300Italic,Je.satoshi400,Je.satoshi400Italic,Je.satoshi500,Je.satoshi500Italic,Je.satoshi700,Je.satoshi700Italic,Je.satoshi900,Je.satoshi900Italic;var Ze=new Set([`children`,`localName`,`ref`,`style`,`className`]),Qe=new WeakMap,$e=(e,t,n,r,i)=>{let a=i?.[t];a===void 0?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==r&&((e,t,n)=>{let r=Qe.get(e);r===void 0&&Qe.set(e,r=new Map);let i=r.get(t);n===void 0?i!==void 0&&(r.delete(t),e.removeEventListener(t,i)):i===void 0?(r.set(t,i={handleEvent:n}),e.addEventListener(t,i)):i.handleEvent=n})(e,a,n)},k=({react:e,tagName:t,elementClass:n,events:r,displayName:i})=>{let a=new Set(Object.keys(r??{})),o=e.forwardRef(((i,o)=>{let s=e.useRef(new Map),c=e.useRef(null),l={},u={};for(let[e,t]of Object.entries(i))Ze.has(e)?l[e===`className`?`class`:e]=t:a.has(e)||e in n.prototype?u[e]=t:l[e]=t;return e.useLayoutEffect((()=>{if(c.current===null)return;let e=new Map;for(let t in u)$e(c.current,t,i[t],s.current.get(t),r),s.current.delete(t),e.set(t,i[t]);for(let[e,t]of s.current)$e(c.current,e,void 0,t,r);s.current=e})),e.useLayoutEffect((()=>{c.current?.removeAttribute(`defer-hydration`)}),[]),l.suppressHydrationWarning=!0,e.createElement(t,{...l,ref:e.useCallback((e=>{c.current=e,typeof o==`function`?o(e):o!==null&&(o.current=e)}),[o])})}));return o.displayName=i??n.name,o};function A(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function et(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)}function tt(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n}var nt=globalThis,rt=nt.ShadowRoot&&(nt.ShadyCSS===void 0||nt.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,it=Symbol(),at=new WeakMap,ot=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(rt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=at.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&at.set(t,e))}return e}toString(){return this.cssText}},st=e=>new ot(typeof e==`string`?e:e+``,void 0,it),j=(e,...t)=>new ot(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,it),ct=(e,t)=>{if(rt)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=nt.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},lt=rt?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return st(t)})(e):e,{is:ut,defineProperty:dt,getOwnPropertyDescriptor:ft,getOwnPropertyNames:pt,getOwnPropertySymbols:mt,getPrototypeOf:ht}=Object,gt=globalThis,_t=gt.trustedTypes,vt=_t?_t.emptyScript:``,yt=gt.reactiveElementPolyfillSupport,bt=(e,t)=>e,xt={toAttribute(e,t){switch(t){case Boolean:e=e?vt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},St=(e,t)=>!ut(e,t),Ct={attribute:!0,type:String,converter:xt,reflect:!1,useDefault:!1,hasChanged:St};Symbol.metadata??=Symbol(`metadata`),gt.litPropertyMetadata??=new WeakMap;var wt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ct){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&dt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ft(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ct}static _$Ei(){if(this.hasOwnProperty(bt(`elementProperties`)))return;let e=ht(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(bt(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(bt(`properties`))){let e=this.properties,t=[...pt(e),...mt(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(lt(e))}else e!==void 0&&t.push(lt(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ct(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?xt:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?xt:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??St)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};wt.elementStyles=[],wt.shadowRootOptions={mode:`open`},wt[bt(`elementProperties`)]=new Map,wt[bt(`finalized`)]=new Map,yt?.({ReactiveElement:wt}),(gt.reactiveElementVersions??=[]).push(`2.1.2`);var Tt=globalThis,Et=e=>e,Dt=Tt.trustedTypes,Ot=Dt?Dt.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,kt=`$lit$`,At=`lit$${Math.random().toFixed(9).slice(2)}$`,jt=`?`+At,Mt=`<${jt}>`,Nt=document,Pt=()=>Nt.createComment(``),Ft=e=>e===null||typeof e!=`object`&&typeof e!=`function`,It=Array.isArray,Lt=e=>It(e)||typeof e?.[Symbol.iterator]==`function`,Rt=`[ 	
\f\r]`,zt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bt=/-->/g,Vt=/>/g,Ht=RegExp(`>|${Rt}(?:([^\\s"'>=/]+)(${Rt}*=${Rt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ut=/'/g,Wt=/"/g,Gt=/^(?:script|style|textarea|title)$/i,Kt=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),M=Kt(1),qt=Kt(2),Jt=Symbol.for(`lit-noChange`),N=Symbol.for(`lit-nothing`),Yt=new WeakMap,Xt=Nt.createTreeWalker(Nt,129);function P(e,t){if(!It(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Ot===void 0?t:Ot.createHTML(t)}var Zt=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=zt;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===zt?c[1]===`!--`?o=Bt:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Ht):(Gt.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Ht):o=Vt:o===Ht?c[0]===`>`?(o=i??zt,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Ht:c[3]===`"`?Wt:Ut):o===Wt||o===Ut?o=Ht:o===Bt||o===Vt?o=zt:(o=Ht,i=void 0);let d=o===Ht&&e[t+1].startsWith(`/>`)?` `:``;a+=o===zt?n+Mt:l>=0?(r.push(s),n.slice(0,l)+kt+n.slice(l)+At+d):n+At+(l===-2?t:d)}return[P(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Qt=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Zt(t,n);if(this.el=e.createElement(l,r),Xt.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Xt.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(kt)){let t=u[o++],n=i.getAttribute(e).split(At),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?rn:r[1]===`?`?an:r[1]===`@`?on:nn}),i.removeAttribute(e)}else e.startsWith(At)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Gt.test(i.tagName)){let e=i.textContent.split(At),t=e.length-1;if(t>0){i.textContent=Dt?Dt.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Pt()),Xt.nextNode(),c.push({type:2,index:++a});i.append(e[t],Pt())}}}else if(i.nodeType===8){if(i.data===jt)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(At,e+1))!==-1;)c.push({type:7,index:a}),e+=At.length-1}}a++}}static createElement(e,t){let n=Nt.createElement(`template`);return n.innerHTML=e,n}};function $t(e,t,n=e,r){if(t===Jt)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ft(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=$t(e,i._$AS(e,t.values),i,r)),t}var en=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Nt).importNode(t,!0);Xt.currentNode=r;let i=Xt.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new tn(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new sn(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Xt.nextNode(),a++)}return Xt.currentNode=Nt,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},tn=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=$t(this,e,t),Ft(e)?e===N||e==null||e===``?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==Jt&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Lt(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==N&&Ft(this._$AH)?this._$AA.nextSibling.data=e:this.T(Nt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Qt.createElement(P(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new en(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Yt.get(e.strings);return t===void 0&&Yt.set(e.strings,t=new Qt(e)),t}k(t){It(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Pt()),this.O(Pt()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Et(e).nextSibling;Et(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},nn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=$t(this,e,t,0),a=!Ft(e)||e!==this._$AH&&e!==Jt,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=$t(this,r[n+o],t,o),s===Jt&&(s=this._$AH[o]),a||=!Ft(s)||s!==this._$AH[o],s===N?e=N:e!==N&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},rn=class extends nn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}},an=class extends nn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}},on=class extends nn{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=$t(this,e,t,0)??N)===Jt)return;let n=this._$AH,r=e===N&&n!==N||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==N&&(n===N||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},sn=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){$t(this,e)}},cn={M:kt,P:At,A:jt,C:1,L:Zt,R:en,D:Lt,V:$t,I:tn,H:nn,N:an,U:on,B:rn,F:sn},ln=Tt.litHtmlPolyfillSupport;ln?.(Qt,tn),(Tt.litHtmlVersions??=[]).push(`3.3.3`);var un=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new tn(t.insertBefore(Pt(),e),e,void 0,n??{})}return i._$AI(e),i},dn=globalThis,fn=class extends wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=un(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Jt}};fn._$litElement$=!0,fn.finalized=!0,dn.litElementHydrateSupport?.({LitElement:fn});var pn=dn.litElementPolyfillSupport;pn?.({LitElement:fn}),(dn.litElementVersions??=[]).push(`4.2.2`);var mn={attribute:!0,type:String,converter:xt,reflect:!1,hasChanged:St},hn=(e=mn,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function gn(e){return(t,n)=>typeof n==`object`?hn(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function _n(e){return gn({...e,state:!0,attribute:!1})}var vn=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function yn(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return vn(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return vn(n,r,{get(){return a(this)}})}}var bn=new WeakMap,xn={description:!0,type:!0,options:!0,default:!0,required:!0,copyRule:!0,experimental:!0,attribute:!0,reflect:!0},Sn=new Set([`attribute`,`reflect`]),Cn={fromAttribute:e=>e!==null&&e!==`false`,toAttribute:e=>e?``:null};function wn(e){return e===`boolean`?Boolean:e===`number`?Number:/\[\]$/.test(e)||e.startsWith(`Array`)?Array:e===`object`||e.startsWith(`Record<`)||e.startsWith(`{`)?Object:String}function F(e){return(t,n)=>{let r=bn.get(t);r||(r={},bn.set(t,r));let{type:i}=e,a={type:i},o={};for(let[t,n]of Object.entries(e))t!==`type`&&(t in xn&&Object.assign(a,{[t]:n}),(!(t in xn)||Sn.has(t))&&(o[t]=n));let s=wn(i),c=s!==Array&&s!==Object,l=s===Boolean?{converter:Cn}:{};a.attribute??=n.toLowerCase(),a.reflect=a.attribute!==!1&&(a.reflect??c),r[n]=a,gn({type:s,reflect:c,...l,...o})(t,n)}}function Tn(e){let t=[],n=e;for(;n&&n!==Object.prototype;)t.push(n),n=Object.getPrototypeOf(n);let r={};for(let e of t.reverse()){let t=bn.get(e);t&&Object.assign(r,t)}return r}function I(e,t){return n=>{let r=n.meta;if(r){r.events||={};let n=t.description??(t.forwarded?`Forwarded native ${e} event.`:void 0);r.events[e]={...t,description:n}}}}var En=new Set([`checkbox`,`radio`]),Dn=new Set([`text`,`search`,`url`,`tel`,`password`]),On=[`type`,`part`,`slot`],kn=e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement,An=e=>[e.localName,...On.map(t=>e.getAttribute(t)??``)].join(`|`),jn=(e,t)=>[...e.querySelectorAll(`*`)].filter(e=>An(e)===t),Mn=(e,t)=>{let n=An(t);return{key:n,index:jn(e,n).indexOf(t)}};function Nn(e){let t=[...e.options].filter(e=>e.defaultSelected);if(t.length||e.multiple)return t.map(e=>e.value);let n=[...e.options].find(e=>!e.disabled);return n?[n.value]:[]}function Pn(e){if(e instanceof HTMLTextAreaElement)return e.defaultValue;let t=document.createElement(`input`);return[...e.attributes].forEach(({name:e,value:n})=>t.setAttribute(e,n)),t.value}function Fn(e){if(e instanceof HTMLSelectElement){let t=[...e.selectedOptions].map(e=>e.value);return t.join(`
`)===Nn(e).join(`
`)?void 0:t}if(e instanceof HTMLInputElement&&En.has(e.type))return e.checked===e.defaultChecked?void 0:e.checked;if(!(e instanceof HTMLInputElement&&e.type===`file`))return e.value===Pn(e)?void 0:e.value}function In(e,t){e instanceof HTMLSelectElement?[...e.options].forEach(e=>{e.selected=t.includes(e.value)}):typeof t==`boolean`?e.checked=t:e.value=t}var Ln=(e,t)=>!(e instanceof HTMLSelectElement)||t.length===0||[...e.options].some(e=>t.includes(e.value)),Rn=e=>e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement&&Dn.has(e.type);function zn(e){let t=new Map;return[...e.querySelectorAll(`*`)].map(e=>{let n=An(e),r=t.get(n)??0;return t.set(n,r+1),[e,{key:n,index:r}]})}function Bn(e,t){return zn(e).flatMap(([e,n])=>{let r=[...t,n];return[[e,r],...e.shadowRoot?Bn(e.shadowRoot,r):[]]})}var Vn=e=>e.flatMap(([e,t])=>{let n=kn(e)?Fn(e):void 0;return n===void 0?[]:[{location:t,value:n}]}),Hn=e=>e.flatMap(([e,t])=>e.scrollTop||e.scrollLeft?[{location:t,top:e.scrollTop,left:e.scrollLeft}]:[]);function Un(e,t=[]){let n=e.activeElement;if(!n)return;let r=[...t,Mn(e,n)];return n.shadowRoot?.activeElement?Un(n.shadowRoot,r):{location:r,selection:Rn(n)?[n.selectionStart??0,n.selectionEnd??0]:null}}function Wn(e){let t=Bn(e,[]);return{edits:Vn(t),scrolls:Hn(t),focus:Un(e)}}async function Gn(e,[t,...n]){let r=jn(e,t.key)[t.index];return!r||!n.length?r:(`updateComplete`in r&&await r.updateComplete,r.shadowRoot?Gn(r.shadowRoot,n):void 0)}async function Kn(e,{edits:t,scrolls:n,focus:r}){let i=(await Promise.all(t.map(async({location:t,value:n})=>({control:await Gn(e,t),value:n})))).flatMap(({control:e,value:t})=>!e||!kn(e)||!Ln(e,t)?[]:(In(e,t),[e]));(await Promise.all(n.map(async({location:t,top:n,left:r})=>({element:await Gn(e,t),top:n,left:r})))).forEach(({element:e,top:t,left:n})=>e?.scrollTo({top:t,left:n,behavior:`instant`}));let a=r&&await Gn(e,r.location);return r&&a instanceof HTMLElement&&(a.focus({preventScroll:!0}),r.selection&&Rn(a)&&a.setSelectionRange(...r.selection)),i}function qn(e){e.forEach(e=>{e.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),e.dispatchEvent(new Event(`change`,{bubbles:!0}))})}var Jn=Symbol.for(`tagName`),Yn=(e,t)=>{e[Jn]=t},L=class extends fn{createRenderRoot(){let e=this.shadowRoot;return e?(this.serverRenderedNodes=[...e.childNodes],ct(e,this.constructor.elementStyles),e):super.createRenderRoot()}update(e){let t=this.serverRenderedNodes,n=this.renderRoot,r=t&&Wn(n);super.update(e),t&&r&&(t.forEach(e=>e.remove()),this.serverRenderedNodes=void 0,queueMicrotask(()=>void Kn(n,r).then(qn)))}static ensureDefined(){if(!this.tagName)throw Error(`${this.name} is missing a tagName. Did you forget to use @quanticElement decorator?`);Yn(this,this.tagName),customElements.get(this.tagName)||customElements.define(this.tagName,this)}};function R(e){return function(t){customElements.get(e)||customElements.define(e,t),t.tagName=e,Yn(t,e);let n=Tn(t.prototype);if(t.meta&&Object.keys(n).length){let r=Object.prototype.hasOwnProperty.call(t,`meta`),i=r?t.meta:{...t.meta,tag:e,props:{...t.meta.props??{}}};i.props={...i.props??{},...n},r||(t.meta=i)}return t}}function Xn(e,t){let n=t.cssText;if(e===``)return st(`:host(:has(> :not([slot]))) { ${n} } @scope { :scope:has(> :not([slot])) { ${n} } }`);let r=Zn(e);return st(`:host(:has(> [slot="${r}"])) { ${n} } @scope { :scope:has(> [slot="${r}"]) { ${n} } }`)}function Zn(e){return e.replace(/["\\]/g,`\\$&`)}var Qn=`data-slot-filled`,$n=(e,t=[])=>{var n,r,i,a,o,s,c;if(t.length===0)return e;let l=e=>`cssText`in e?e.cssText:Array.from(e.cssRules,e=>e.cssText).join(`
`),u=e=>e===``?`slot:not([name])`:`slot[name="${Zn(e)}"]`,d=t.map(e=>{let t=u(e);return e===``?`${t}[${Qn}="false"] { display: none; }`:[`${t} { display: none; }`,Xn(e,st(`${t} { display: revert-layer; }`)).cssText,`${t}[${Qn}="true"] { display: revert-layer; }`].join(` `)}).join(` `);class f extends e{constructor(){super(...arguments),n.add(this),r.set(this,!1),i.set(this,e=>e.nodeType!==Node.TEXT_NODE||e.textContent?.trim()!==``),a.set(this,e=>{let r=e.target;t.includes(r.name)&&et(this,n,`m`,o).call(this,r)})}static finalizeStyles(t){return[st(`@layer quantic-component, quantic-slot-visibility; @layer quantic-component { ${(e.finalizeStyles?.call(this,t)??[]).map(l).join(`
`)} } @layer quantic-slot-visibility { ${d} }`)]}connectedCallback(){super.connectedCallback(),et(this,n,`m`,s).call(this)}disconnectedCallback(){et(this,n,`m`,c).call(this),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated?.(e),et(this,n,`m`,s).call(this)}updated(e){super.updated?.(e);for(let e of t){let t=this.renderRoot.querySelector(e===``?`slot:not([name])`:`slot[name="${CSS.escape(e)}"]`);t&&et(this,n,`m`,o).call(this,t)}}}return r=new WeakMap,i=new WeakMap,a=new WeakMap,n=new WeakSet,o=function(e){let t=String(e.assignedNodes({flatten:!0}).some(et(this,i,`f`)));e.getAttribute(Qn)!==t&&e.setAttribute(Qn,t)},s=function(){!et(this,r,`f`)&&this.renderRoot&&(this.renderRoot.addEventListener(`slotchange`,et(this,a,`f`),{capture:!0}),tt(this,r,!0,`f`))},c=function(){et(this,r,`f`)&&this.renderRoot&&(this.renderRoot.removeEventListener(`slotchange`,et(this,a,`f`),{capture:!0}),tt(this,r,!1,`f`))},f},er={Success:`success`,Error:`error`,Warning:`warning`,Info:`info`},tr=Symbol.for(``),nr=e=>{if(e?.r===tr)return e?._$litStatic$},rr=e=>({_$litStatic$:e,r:tr}),ir=new Map,ar=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=nr(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=ir.get(e))===void 0&&(o.raw=o,ir.set(e,t=o)),n=s}return e(t,...n)})(M),or={Primary:`primary`,Secondary:`secondary`,Outline:`outline`,Ghost:`ghost`},sr={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`,ExtraLarge:`xl`},cr={Never:`never`,Always:`always`,Small:`sm`,Medium:`md`,Large:`lg`},lr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ur=e=>(...t)=>({_$litDirective$:e,values:t}),dr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},fr=ur(class extends dr{constructor(e){if(super(e),e.type!==lr.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Jt}}),pr=e=>e??N,mr=class extends L{constructor(){super(),this.as=`button`,this.variant=or.Primary,this.size=sr.Medium,this.type=`button`,this.icon=!1,this.destructive=!1,this.disabled=!1,this.autofocus=!1,this.grow=cr.Never,this.handleClick=e=>{if(!this.disabled){let t=this.form?document.getElementById(this.form):null,n=this.internals?.form??t??this.getRootNode()?.host?.closest?.(`form`);if(n){if(this.type===`submit`){let t=null;this.name&&this.value!=null&&(t=document.createElement(`input`),t.type=`hidden`,t.name=this.name,t.value=this.value,t.setAttribute(`data-quantic-name-value-holder`,`1`),n.appendChild(t));try{n.requestSubmit(this.innerButton??void 0)}catch{n.requestSubmit()}finally{queueMicrotask(()=>t?.remove())}e.preventDefault()}else this.type===`reset`&&(n.reset(),e.preventDefault())}}},this.internals=this.attachInternals?.()??{form:null}}render(){let e=rr(this.as),t=this.as===`button`?void 0:this.as===`a`?`link`:`button`,n=this.as===`button`?this.type:void 0,r=fr({main:!0,[`size--${this.size}`]:!0,[`variant--${this.variant}`]:!0,icon:this.icon,destructive:this.destructive,[`grow--${this.grow}`]:!0});return this.as===`button`?ar`<button
          class=${r}
          tabindex=${this.disabled?-1:0}
          type=${n}
          ?disabled=${this.disabled}
          ?autofocus=${this.autofocus}
          form=${pr(this.form)}
          name=${pr(this.name)}
          value=${pr(this.value)}
          @click=${this.handleClick}
        >
          <slot></slot>
        </button>`:ar`
        <${e}
          class=${r}
          role="${t}"
          tabindex=${this.disabled?-1:0}
          aria-disabled=${this.disabled}
          href=${pr(this.href)}
          target=${pr(this.target)}
          download=${pr(this.download)}
        >
          <slot></slot>
        </${e}>`}};mr.meta={tag:`quantic-button`,description:`Clickable action trigger for form submission, primary CTAs, and secondary actions. Supports icon-only mode and polymorphic rendering as an <a> or <span>. Prefer over quantic-icon-label when the element needs to be interactive.`,category:`action`,slots:{"":{description:`Button label or icon content.`}},relatedTo:[`quantic-button-bar`,`quantic-icon-label`]},mr.formAssociated=!0,mr.styles=j`
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
  `,A([F({type:`"button" | "a" | "div" | "span"`,default:`button`,description:`Underlying HTML element. Use "a" for navigation, "button" (default) for actions.`})],mr.prototype,`as`,void 0),A([F({type:`ButtonVariant`,options:Object.values(or),default:or.Primary,reflect:!0,description:`Visual style. Use primary for the main CTA, secondary for paired actions, outline for neutral actions, ghost for inline or toolbar actions.`})],mr.prototype,`variant`,void 0),A([F({type:`ButtonSize`,options:Object.values(sr),default:sr.Medium,reflect:!0,description:`Controls padding and font size.`})],mr.prototype,`size`,void 0),A([F({type:`"button" | "submit" | "reset"`,default:`button`,reflect:!0,description:`Native button type for form association.`})],mr.prototype,`type`,void 0),A([F({type:`string`,reflect:!0,description:`ID of the associated <form> element.`})],mr.prototype,`form`,void 0),A([F({type:`string`,reflect:!0,description:`Name submitted with form data.`})],mr.prototype,`name`,void 0),A([F({type:`string`,reflect:!0,description:`Value submitted with form data.`})],mr.prototype,`value`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Square icon-only mode — equal padding on all sides, no text label.`})],mr.prototype,`icon`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Renders in error/danger colors. Use for irreversible actions such as delete or remove.`})],mr.prototype,`destructive`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction and reduces opacity.`})],mr.prototype,`disabled`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Automatically focuses the button on page load.`})],mr.prototype,`autofocus`,void 0),A([F({type:`ButtonGrow`,options:Object.values(cr),default:cr.Never,reflect:!0,description:`Responsive full-width behaviour. "always" is always full-width; "sm", "md", "lg" expand at those container-query thresholds.`})],mr.prototype,`grow`,void 0),A([F({type:`string`,reflect:!0,description:`URL for anchor rendering (as="a" only).`})],mr.prototype,`href`,void 0),A([F({type:`string`,reflect:!0,description:`Link target for anchor rendering (as="a" only).`})],mr.prototype,`target`,void 0),A([F({type:`string`,reflect:!0,description:`Filename hint for download links (as="a" only).`})],mr.prototype,`download`,void 0),A([yn(`button`)],mr.prototype,`innerButton`,void 0),mr=A([R(`quantic-button`)],mr);var hr={ApptainerOutline:`apptainer.outline`,ApptainerSolid:`apptainer.solid`,AscenderOutline:`ascender.outline`,AscenderSolid:`ascender.solid`,CIQBridgeOutline:`ciq-bridge.outline`,CIQBridgeSolid:`ciq-bridge.solid`,FuzzballOutline:`fuzzball.outline`,FuzzballSolid:`fuzzball.solid`,RLCHardenedOutline:`rlc-hardened.outline`,RLCHardenedSolid:`rlc-hardened.solid`,RLCPlusOutline:`rlc-plus.outline`,RLCPlusSolid:`rlc-plus.solid`,RLCProAIOutline:`rlc-pro-ai.outline`,RLCProAISolid:`rlc-pro-ai.solid`,RLCProHardenedOutline:`rlc-pro-hardened.outline`,RLCProHardenedSolid:`rlc-pro-hardened.solid`,RLCProOutline:`rlc-pro.outline`,RLCProSolid:`rlc-pro.solid`,RockyLinuxOutline:`rocky-linux.outline`,RockyLinuxSolid:`rocky-linux.solid`,StratumOutline:`stratum.outline`,StratumSolid:`stratum.solid`,SupportOutline:`support.outline`,SupportSolid:`support.solid`,WarewulfOutline:`warewulf.outline`,WarewulfSolid:`warewulf.solid`},gr={AArrowDown:`AArrowDown`,AArrowUp:`AArrowUp`,ALargeSmall:`ALargeSmall`,Accessibility:`Accessibility`,Activity:`Activity`,AirVent:`AirVent`,Airplay:`Airplay`,AlarmClock:`AlarmClock`,AlarmClockCheck:`AlarmClockCheck`,AlarmClockMinus:`AlarmClockMinus`,AlarmClockOff:`AlarmClockOff`,AlarmClockPlus:`AlarmClockPlus`,AlarmSmoke:`AlarmSmoke`,Album:`Album`,AlignCenter:`AlignCenter`,AlignCenterHorizontal:`AlignCenterHorizontal`,AlignCenterVertical:`AlignCenterVertical`,AlignEndHorizontal:`AlignEndHorizontal`,AlignEndVertical:`AlignEndVertical`,AlignHorizontalDistributeCenter:`AlignHorizontalDistributeCenter`,AlignHorizontalDistributeEnd:`AlignHorizontalDistributeEnd`,AlignHorizontalDistributeStart:`AlignHorizontalDistributeStart`,AlignHorizontalJustifyCenter:`AlignHorizontalJustifyCenter`,AlignHorizontalJustifyEnd:`AlignHorizontalJustifyEnd`,AlignHorizontalJustifyStart:`AlignHorizontalJustifyStart`,AlignHorizontalSpaceAround:`AlignHorizontalSpaceAround`,AlignHorizontalSpaceBetween:`AlignHorizontalSpaceBetween`,AlignJustify:`AlignJustify`,AlignLeft:`AlignLeft`,AlignRight:`AlignRight`,AlignStartHorizontal:`AlignStartHorizontal`,AlignStartVertical:`AlignStartVertical`,AlignVerticalDistributeCenter:`AlignVerticalDistributeCenter`,AlignVerticalDistributeEnd:`AlignVerticalDistributeEnd`,AlignVerticalDistributeStart:`AlignVerticalDistributeStart`,AlignVerticalJustifyCenter:`AlignVerticalJustifyCenter`,AlignVerticalJustifyEnd:`AlignVerticalJustifyEnd`,AlignVerticalJustifyStart:`AlignVerticalJustifyStart`,AlignVerticalSpaceAround:`AlignVerticalSpaceAround`,AlignVerticalSpaceBetween:`AlignVerticalSpaceBetween`,Ambulance:`Ambulance`,Ampersand:`Ampersand`,Ampersands:`Ampersands`,Amphora:`Amphora`,Anchor:`Anchor`,Angry:`Angry`,Annoyed:`Annoyed`,Antenna:`Antenna`,Anvil:`Anvil`,Aperture:`Aperture`,AppWindow:`AppWindow`,AppWindowMac:`AppWindowMac`,Apple:`Apple`,Archive:`Archive`,ArchiveRestore:`ArchiveRestore`,ArchiveX:`ArchiveX`,Armchair:`Armchair`,ArrowBigDown:`ArrowBigDown`,ArrowBigDownDash:`ArrowBigDownDash`,ArrowBigLeft:`ArrowBigLeft`,ArrowBigLeftDash:`ArrowBigLeftDash`,ArrowBigRight:`ArrowBigRight`,ArrowBigRightDash:`ArrowBigRightDash`,ArrowBigUp:`ArrowBigUp`,ArrowBigUpDash:`ArrowBigUpDash`,ArrowDown:`ArrowDown`,ArrowDown01:`ArrowDown01`,ArrowDown10:`ArrowDown10`,ArrowDownAZ:`ArrowDownAZ`,ArrowDownFromLine:`ArrowDownFromLine`,ArrowDownLeft:`ArrowDownLeft`,ArrowDownNarrowWide:`ArrowDownNarrowWide`,ArrowDownRight:`ArrowDownRight`,ArrowDownToDot:`ArrowDownToDot`,ArrowDownToLine:`ArrowDownToLine`,ArrowDownUp:`ArrowDownUp`,ArrowDownWideNarrow:`ArrowDownWideNarrow`,ArrowDownZA:`ArrowDownZA`,ArrowLeft:`ArrowLeft`,ArrowLeftFromLine:`ArrowLeftFromLine`,ArrowLeftRight:`ArrowLeftRight`,ArrowLeftToLine:`ArrowLeftToLine`,ArrowRight:`ArrowRight`,ArrowRightFromLine:`ArrowRightFromLine`,ArrowRightLeft:`ArrowRightLeft`,ArrowRightToLine:`ArrowRightToLine`,ArrowUp:`ArrowUp`,ArrowUp01:`ArrowUp01`,ArrowUp10:`ArrowUp10`,ArrowUpAZ:`ArrowUpAZ`,ArrowUpDown:`ArrowUpDown`,ArrowUpFromDot:`ArrowUpFromDot`,ArrowUpFromLine:`ArrowUpFromLine`,ArrowUpLeft:`ArrowUpLeft`,ArrowUpNarrowWide:`ArrowUpNarrowWide`,ArrowUpRight:`ArrowUpRight`,ArrowUpToLine:`ArrowUpToLine`,ArrowUpWideNarrow:`ArrowUpWideNarrow`,ArrowUpZA:`ArrowUpZA`,ArrowsUpFromLine:`ArrowsUpFromLine`,Asterisk:`Asterisk`,AtSign:`AtSign`,Atom:`Atom`,AudioLines:`AudioLines`,AudioWaveform:`AudioWaveform`,Award:`Award`,Axe:`Axe`,Axis3d:`Axis3d`,Baby:`Baby`,Backpack:`Backpack`,Badge:`Badge`,BadgeAlert:`BadgeAlert`,BadgeCent:`BadgeCent`,BadgeCheck:`BadgeCheck`,BadgeDollarSign:`BadgeDollarSign`,BadgeEuro:`BadgeEuro`,BadgeHelp:`BadgeHelp`,BadgeIndianRupee:`BadgeIndianRupee`,BadgeInfo:`BadgeInfo`,BadgeJapaneseYen:`BadgeJapaneseYen`,BadgeMinus:`BadgeMinus`,BadgePercent:`BadgePercent`,BadgePlus:`BadgePlus`,BadgePoundSterling:`BadgePoundSterling`,BadgeRussianRuble:`BadgeRussianRuble`,BadgeSwissFranc:`BadgeSwissFranc`,BadgeX:`BadgeX`,BaggageClaim:`BaggageClaim`,Ban:`Ban`,Banana:`Banana`,Bandage:`Bandage`,Banknote:`Banknote`,BanknoteArrowDown:`BanknoteArrowDown`,BanknoteArrowUp:`BanknoteArrowUp`,BanknoteX:`BanknoteX`,Barcode:`Barcode`,Baseline:`Baseline`,Bath:`Bath`,Battery:`Battery`,BatteryCharging:`BatteryCharging`,BatteryFull:`BatteryFull`,BatteryLow:`BatteryLow`,BatteryMedium:`BatteryMedium`,BatteryPlus:`BatteryPlus`,BatteryWarning:`BatteryWarning`,Beaker:`Beaker`,Bean:`Bean`,BeanOff:`BeanOff`,Bed:`Bed`,BedDouble:`BedDouble`,BedSingle:`BedSingle`,Beef:`Beef`,Beer:`Beer`,BeerOff:`BeerOff`,Bell:`Bell`,BellDot:`BellDot`,BellElectric:`BellElectric`,BellMinus:`BellMinus`,BellOff:`BellOff`,BellPlus:`BellPlus`,BellRing:`BellRing`,BetweenHorizontalEnd:`BetweenHorizontalEnd`,BetweenHorizontalStart:`BetweenHorizontalStart`,BetweenVerticalEnd:`BetweenVerticalEnd`,BetweenVerticalStart:`BetweenVerticalStart`,BicepsFlexed:`BicepsFlexed`,Bike:`Bike`,Binary:`Binary`,Binoculars:`Binoculars`,Biohazard:`Biohazard`,Bird:`Bird`,Bitcoin:`Bitcoin`,Blend:`Blend`,Blinds:`Blinds`,Blocks:`Blocks`,Bluetooth:`Bluetooth`,BluetoothConnected:`BluetoothConnected`,BluetoothOff:`BluetoothOff`,BluetoothSearching:`BluetoothSearching`,Bold:`Bold`,Bolt:`Bolt`,Bomb:`Bomb`,Bone:`Bone`,Book:`Book`,BookA:`BookA`,BookAudio:`BookAudio`,BookCheck:`BookCheck`,BookCopy:`BookCopy`,BookDashed:`BookDashed`,BookDown:`BookDown`,BookHeadphones:`BookHeadphones`,BookHeart:`BookHeart`,BookImage:`BookImage`,BookKey:`BookKey`,BookLock:`BookLock`,BookMarked:`BookMarked`,BookMinus:`BookMinus`,BookOpen:`BookOpen`,BookOpenCheck:`BookOpenCheck`,BookOpenText:`BookOpenText`,BookPlus:`BookPlus`,BookText:`BookText`,BookType:`BookType`,BookUp:`BookUp`,BookUp2:`BookUp2`,BookUser:`BookUser`,BookX:`BookX`,Bookmark:`Bookmark`,BookmarkCheck:`BookmarkCheck`,BookmarkMinus:`BookmarkMinus`,BookmarkPlus:`BookmarkPlus`,BookmarkX:`BookmarkX`,BoomBox:`BoomBox`,Bot:`Bot`,BotMessageSquare:`BotMessageSquare`,BotOff:`BotOff`,BowArrow:`BowArrow`,Box:`Box`,Boxes:`Boxes`,Braces:`Braces`,Brackets:`Brackets`,Brain:`Brain`,BrainCircuit:`BrainCircuit`,BrainCog:`BrainCog`,BrickWall:`BrickWall`,BrickWallFire:`BrickWallFire`,Briefcase:`Briefcase`,BriefcaseBusiness:`BriefcaseBusiness`,BriefcaseConveyorBelt:`BriefcaseConveyorBelt`,BriefcaseMedical:`BriefcaseMedical`,BringToFront:`BringToFront`,Brush:`Brush`,BrushCleaning:`BrushCleaning`,Bubbles:`Bubbles`,Bug:`Bug`,BugOff:`BugOff`,BugPlay:`BugPlay`,Building:`Building`,Building2:`Building2`,Bus:`Bus`,BusFront:`BusFront`,Cable:`Cable`,CableCar:`CableCar`,Cake:`Cake`,CakeSlice:`CakeSlice`,Calculator:`Calculator`,Calendar:`Calendar`,Calendar1:`Calendar1`,CalendarArrowDown:`CalendarArrowDown`,CalendarArrowUp:`CalendarArrowUp`,CalendarCheck:`CalendarCheck`,CalendarCheck2:`CalendarCheck2`,CalendarClock:`CalendarClock`,CalendarCog:`CalendarCog`,CalendarDays:`CalendarDays`,CalendarFold:`CalendarFold`,CalendarHeart:`CalendarHeart`,CalendarMinus:`CalendarMinus`,CalendarMinus2:`CalendarMinus2`,CalendarOff:`CalendarOff`,CalendarPlus:`CalendarPlus`,CalendarPlus2:`CalendarPlus2`,CalendarRange:`CalendarRange`,CalendarSearch:`CalendarSearch`,CalendarSync:`CalendarSync`,CalendarX:`CalendarX`,CalendarX2:`CalendarX2`,Camera:`Camera`,CameraOff:`CameraOff`,Candy:`Candy`,CandyCane:`CandyCane`,CandyOff:`CandyOff`,Cannabis:`Cannabis`,Captions:`Captions`,CaptionsOff:`CaptionsOff`,Car:`Car`,CarFront:`CarFront`,CarTaxiFront:`CarTaxiFront`,Caravan:`Caravan`,Carrot:`Carrot`,CaseLower:`CaseLower`,CaseSensitive:`CaseSensitive`,CaseUpper:`CaseUpper`,CassetteTape:`CassetteTape`,Cast:`Cast`,Castle:`Castle`,Cat:`Cat`,Cctv:`Cctv`,ChartArea:`ChartArea`,ChartBar:`ChartBar`,ChartBarBig:`ChartBarBig`,ChartBarDecreasing:`ChartBarDecreasing`,ChartBarIncreasing:`ChartBarIncreasing`,ChartBarStacked:`ChartBarStacked`,ChartCandlestick:`ChartCandlestick`,ChartColumn:`ChartColumn`,ChartColumnBig:`ChartColumnBig`,ChartColumnDecreasing:`ChartColumnDecreasing`,ChartColumnIncreasing:`ChartColumnIncreasing`,ChartColumnStacked:`ChartColumnStacked`,ChartGantt:`ChartGantt`,ChartLine:`ChartLine`,ChartNetwork:`ChartNetwork`,ChartNoAxesColumn:`ChartNoAxesColumn`,ChartNoAxesColumnDecreasing:`ChartNoAxesColumnDecreasing`,ChartNoAxesColumnIncreasing:`ChartNoAxesColumnIncreasing`,ChartNoAxesCombined:`ChartNoAxesCombined`,ChartNoAxesGantt:`ChartNoAxesGantt`,ChartPie:`ChartPie`,ChartScatter:`ChartScatter`,ChartSpline:`ChartSpline`,Check:`Check`,CheckCheck:`CheckCheck`,CheckLine:`CheckLine`,ChefHat:`ChefHat`,Cherry:`Cherry`,ChevronDown:`ChevronDown`,ChevronFirst:`ChevronFirst`,ChevronLast:`ChevronLast`,ChevronLeft:`ChevronLeft`,ChevronRight:`ChevronRight`,ChevronUp:`ChevronUp`,ChevronsDown:`ChevronsDown`,ChevronsDownUp:`ChevronsDownUp`,ChevronsLeft:`ChevronsLeft`,ChevronsLeftRight:`ChevronsLeftRight`,ChevronsLeftRightEllipsis:`ChevronsLeftRightEllipsis`,ChevronsRight:`ChevronsRight`,ChevronsRightLeft:`ChevronsRightLeft`,ChevronsUp:`ChevronsUp`,ChevronsUpDown:`ChevronsUpDown`,Chrome:`Chrome`,Church:`Church`,Cigarette:`Cigarette`,CigaretteOff:`CigaretteOff`,Circle:`Circle`,CircleAlert:`CircleAlert`,CircleArrowDown:`CircleArrowDown`,CircleArrowLeft:`CircleArrowLeft`,CircleArrowOutDownLeft:`CircleArrowOutDownLeft`,CircleArrowOutDownRight:`CircleArrowOutDownRight`,CircleArrowOutUpLeft:`CircleArrowOutUpLeft`,CircleArrowOutUpRight:`CircleArrowOutUpRight`,CircleArrowRight:`CircleArrowRight`,CircleArrowUp:`CircleArrowUp`,CircleCheck:`CircleCheck`,CircleCheckBig:`CircleCheckBig`,CircleChevronDown:`CircleChevronDown`,CircleChevronLeft:`CircleChevronLeft`,CircleChevronRight:`CircleChevronRight`,CircleChevronUp:`CircleChevronUp`,CircleDashed:`CircleDashed`,CircleDivide:`CircleDivide`,CircleDollarSign:`CircleDollarSign`,CircleDot:`CircleDot`,CircleDotDashed:`CircleDotDashed`,CircleEllipsis:`CircleEllipsis`,CircleEqual:`CircleEqual`,CircleFadingArrowUp:`CircleFadingArrowUp`,CircleFadingPlus:`CircleFadingPlus`,CircleGauge:`CircleGauge`,CircleHelp:`CircleHelp`,CircleMinus:`CircleMinus`,CircleOff:`CircleOff`,CircleParking:`CircleParking`,CircleParkingOff:`CircleParkingOff`,CirclePause:`CirclePause`,CirclePercent:`CirclePercent`,CirclePlay:`CirclePlay`,CirclePlus:`CirclePlus`,CirclePower:`CirclePower`,CircleSlash:`CircleSlash`,CircleSlash2:`CircleSlash2`,CircleSmall:`CircleSmall`,CircleStop:`CircleStop`,CircleUser:`CircleUser`,CircleUserRound:`CircleUserRound`,CircleX:`CircleX`,CircuitBoard:`CircuitBoard`,Citrus:`Citrus`,Clapperboard:`Clapperboard`,Clipboard:`Clipboard`,ClipboardCheck:`ClipboardCheck`,ClipboardCopy:`ClipboardCopy`,ClipboardList:`ClipboardList`,ClipboardMinus:`ClipboardMinus`,ClipboardPaste:`ClipboardPaste`,ClipboardPen:`ClipboardPen`,ClipboardPenLine:`ClipboardPenLine`,ClipboardPlus:`ClipboardPlus`,ClipboardType:`ClipboardType`,ClipboardX:`ClipboardX`,Clock:`Clock`,Clock1:`Clock1`,Clock10:`Clock10`,Clock11:`Clock11`,Clock12:`Clock12`,Clock2:`Clock2`,Clock3:`Clock3`,Clock4:`Clock4`,Clock5:`Clock5`,Clock6:`Clock6`,Clock7:`Clock7`,Clock8:`Clock8`,Clock9:`Clock9`,ClockAlert:`ClockAlert`,ClockArrowDown:`ClockArrowDown`,ClockArrowUp:`ClockArrowUp`,ClockFading:`ClockFading`,ClockPlus:`ClockPlus`,Cloud:`Cloud`,CloudAlert:`CloudAlert`,CloudCog:`CloudCog`,CloudDownload:`CloudDownload`,CloudDrizzle:`CloudDrizzle`,CloudFog:`CloudFog`,CloudHail:`CloudHail`,CloudLightning:`CloudLightning`,CloudMoon:`CloudMoon`,CloudMoonRain:`CloudMoonRain`,CloudOff:`CloudOff`,CloudRain:`CloudRain`,CloudRainWind:`CloudRainWind`,CloudSnow:`CloudSnow`,CloudSun:`CloudSun`,CloudSunRain:`CloudSunRain`,CloudUpload:`CloudUpload`,Cloudy:`Cloudy`,Clover:`Clover`,Club:`Club`,Code:`Code`,CodeXml:`CodeXml`,Codepen:`Codepen`,Codesandbox:`Codesandbox`,Coffee:`Coffee`,Cog:`Cog`,Coins:`Coins`,Columns2:`Columns2`,Columns3:`Columns3`,Columns3Cog:`Columns3Cog`,Columns4:`Columns4`,Combine:`Combine`,Command:`Command`,Compass:`Compass`,Component:`Component`,Computer:`Computer`,ConciergeBell:`ConciergeBell`,Cone:`Cone`,Construction:`Construction`,Contact:`Contact`,ContactRound:`ContactRound`,Container:`Container`,Contrast:`Contrast`,Cookie:`Cookie`,CookingPot:`CookingPot`,Copy:`Copy`,CopyCheck:`CopyCheck`,CopyMinus:`CopyMinus`,CopyPlus:`CopyPlus`,CopySlash:`CopySlash`,CopyX:`CopyX`,Copyleft:`Copyleft`,Copyright:`Copyright`,CornerDownLeft:`CornerDownLeft`,CornerDownRight:`CornerDownRight`,CornerLeftDown:`CornerLeftDown`,CornerLeftUp:`CornerLeftUp`,CornerRightDown:`CornerRightDown`,CornerRightUp:`CornerRightUp`,CornerUpLeft:`CornerUpLeft`,CornerUpRight:`CornerUpRight`,Cpu:`Cpu`,CreativeCommons:`CreativeCommons`,CreditCard:`CreditCard`,Croissant:`Croissant`,Crop:`Crop`,Cross:`Cross`,Crosshair:`Crosshair`,Crown:`Crown`,Cuboid:`Cuboid`,CupSoda:`CupSoda`,Currency:`Currency`,Cylinder:`Cylinder`,Dam:`Dam`,Database:`Database`,DatabaseBackup:`DatabaseBackup`,DatabaseZap:`DatabaseZap`,DecimalsArrowLeft:`DecimalsArrowLeft`,DecimalsArrowRight:`DecimalsArrowRight`,Delete:`Delete`,Dessert:`Dessert`,Diameter:`Diameter`,Diamond:`Diamond`,DiamondMinus:`DiamondMinus`,DiamondPercent:`DiamondPercent`,DiamondPlus:`DiamondPlus`,Dice1:`Dice1`,Dice2:`Dice2`,Dice3:`Dice3`,Dice4:`Dice4`,Dice5:`Dice5`,Dice6:`Dice6`,Dices:`Dices`,Diff:`Diff`,Disc:`Disc`,Disc2:`Disc2`,Disc3:`Disc3`,DiscAlbum:`DiscAlbum`,Divide:`Divide`,Dna:`Dna`,DnaOff:`DnaOff`,Dock:`Dock`,Dog:`Dog`,DollarSign:`DollarSign`,Donut:`Donut`,DoorClosed:`DoorClosed`,DoorClosedLocked:`DoorClosedLocked`,DoorOpen:`DoorOpen`,Dot:`Dot`,Download:`Download`,DraftingCompass:`DraftingCompass`,Drama:`Drama`,Dribbble:`Dribbble`,Drill:`Drill`,Droplet:`Droplet`,DropletOff:`DropletOff`,Droplets:`Droplets`,Drum:`Drum`,Drumstick:`Drumstick`,Dumbbell:`Dumbbell`,Ear:`Ear`,EarOff:`EarOff`,Earth:`Earth`,EarthLock:`EarthLock`,Eclipse:`Eclipse`,Egg:`Egg`,EggFried:`EggFried`,EggOff:`EggOff`,Ellipsis:`Ellipsis`,EllipsisVertical:`EllipsisVertical`,Equal:`Equal`,EqualApproximately:`EqualApproximately`,EqualNot:`EqualNot`,Eraser:`Eraser`,EthernetPort:`EthernetPort`,Euro:`Euro`,Expand:`Expand`,ExternalLink:`ExternalLink`,Eye:`Eye`,EyeClosed:`EyeClosed`,EyeOff:`EyeOff`,Facebook:`Facebook`,Factory:`Factory`,Fan:`Fan`,FastForward:`FastForward`,Feather:`Feather`,Fence:`Fence`,FerrisWheel:`FerrisWheel`,Figma:`Figma`,File:`File`,FileArchive:`FileArchive`,FileAudio:`FileAudio`,FileAudio2:`FileAudio2`,FileAxis3d:`FileAxis3d`,FileBadge:`FileBadge`,FileBadge2:`FileBadge2`,FileBox:`FileBox`,FileChartColumn:`FileChartColumn`,FileChartColumnIncreasing:`FileChartColumnIncreasing`,FileChartLine:`FileChartLine`,FileChartPie:`FileChartPie`,FileCheck:`FileCheck`,FileCheck2:`FileCheck2`,FileClock:`FileClock`,FileCode:`FileCode`,FileCode2:`FileCode2`,FileCog:`FileCog`,FileDiff:`FileDiff`,FileDigit:`FileDigit`,FileDown:`FileDown`,FileHeart:`FileHeart`,FileImage:`FileImage`,FileInput:`FileInput`,FileJson:`FileJson`,FileJson2:`FileJson2`,FileKey:`FileKey`,FileKey2:`FileKey2`,FileLock:`FileLock`,FileLock2:`FileLock2`,FileMinus:`FileMinus`,FileMinus2:`FileMinus2`,FileMusic:`FileMusic`,FileOutput:`FileOutput`,FilePen:`FilePen`,FilePenLine:`FilePenLine`,FilePlus:`FilePlus`,FilePlus2:`FilePlus2`,FileQuestion:`FileQuestion`,FileScan:`FileScan`,FileSearch:`FileSearch`,FileSearch2:`FileSearch2`,FileSliders:`FileSliders`,FileSpreadsheet:`FileSpreadsheet`,FileStack:`FileStack`,FileSymlink:`FileSymlink`,FileTerminal:`FileTerminal`,FileText:`FileText`,FileType:`FileType`,FileType2:`FileType2`,FileUp:`FileUp`,FileUser:`FileUser`,FileVideo:`FileVideo`,FileVideo2:`FileVideo2`,FileVolume:`FileVolume`,FileVolume2:`FileVolume2`,FileWarning:`FileWarning`,FileX:`FileX`,FileX2:`FileX2`,Files:`Files`,Film:`Film`,Fingerprint:`Fingerprint`,FireExtinguisher:`FireExtinguisher`,Fish:`Fish`,FishOff:`FishOff`,FishSymbol:`FishSymbol`,Flag:`Flag`,FlagOff:`FlagOff`,FlagTriangleLeft:`FlagTriangleLeft`,FlagTriangleRight:`FlagTriangleRight`,Flame:`Flame`,FlameKindling:`FlameKindling`,Flashlight:`Flashlight`,FlashlightOff:`FlashlightOff`,FlaskConical:`FlaskConical`,FlaskConicalOff:`FlaskConicalOff`,FlaskRound:`FlaskRound`,FlipHorizontal:`FlipHorizontal`,FlipHorizontal2:`FlipHorizontal2`,FlipVertical:`FlipVertical`,FlipVertical2:`FlipVertical2`,Flower:`Flower`,Flower2:`Flower2`,Focus:`Focus`,FoldHorizontal:`FoldHorizontal`,FoldVertical:`FoldVertical`,Folder:`Folder`,FolderArchive:`FolderArchive`,FolderCheck:`FolderCheck`,FolderClock:`FolderClock`,FolderClosed:`FolderClosed`,FolderCode:`FolderCode`,FolderCog:`FolderCog`,FolderDot:`FolderDot`,FolderDown:`FolderDown`,FolderGit:`FolderGit`,FolderGit2:`FolderGit2`,FolderHeart:`FolderHeart`,FolderInput:`FolderInput`,FolderKanban:`FolderKanban`,FolderKey:`FolderKey`,FolderLock:`FolderLock`,FolderMinus:`FolderMinus`,FolderOpen:`FolderOpen`,FolderOpenDot:`FolderOpenDot`,FolderOutput:`FolderOutput`,FolderPen:`FolderPen`,FolderPlus:`FolderPlus`,FolderRoot:`FolderRoot`,FolderSearch:`FolderSearch`,FolderSearch2:`FolderSearch2`,FolderSymlink:`FolderSymlink`,FolderSync:`FolderSync`,FolderTree:`FolderTree`,FolderUp:`FolderUp`,FolderX:`FolderX`,Folders:`Folders`,Footprints:`Footprints`,Forklift:`Forklift`,Forward:`Forward`,Frame:`Frame`,Framer:`Framer`,Frown:`Frown`,Fuel:`Fuel`,Fullscreen:`Fullscreen`,Funnel:`Funnel`,FunnelPlus:`FunnelPlus`,FunnelX:`FunnelX`,GalleryHorizontal:`GalleryHorizontal`,GalleryHorizontalEnd:`GalleryHorizontalEnd`,GalleryThumbnails:`GalleryThumbnails`,GalleryVertical:`GalleryVertical`,GalleryVerticalEnd:`GalleryVerticalEnd`,Gamepad:`Gamepad`,Gamepad2:`Gamepad2`,Gauge:`Gauge`,Gavel:`Gavel`,Gem:`Gem`,Ghost:`Ghost`,Gift:`Gift`,GitBranch:`GitBranch`,GitBranchPlus:`GitBranchPlus`,GitCommitHorizontal:`GitCommitHorizontal`,GitCommitVertical:`GitCommitVertical`,GitCompare:`GitCompare`,GitCompareArrows:`GitCompareArrows`,GitFork:`GitFork`,GitGraph:`GitGraph`,GitMerge:`GitMerge`,GitPullRequest:`GitPullRequest`,GitPullRequestArrow:`GitPullRequestArrow`,GitPullRequestClosed:`GitPullRequestClosed`,GitPullRequestCreate:`GitPullRequestCreate`,GitPullRequestCreateArrow:`GitPullRequestCreateArrow`,GitPullRequestDraft:`GitPullRequestDraft`,Github:`Github`,Gitlab:`Gitlab`,GlassWater:`GlassWater`,Glasses:`Glasses`,Globe:`Globe`,GlobeLock:`GlobeLock`,Goal:`Goal`,Gpu:`Gpu`,Grab:`Grab`,GraduationCap:`GraduationCap`,Grape:`Grape`,Grid2x2:`Grid2x2`,Grid2x2Check:`Grid2x2Check`,Grid2x2Plus:`Grid2x2Plus`,Grid2x2X:`Grid2x2X`,Grid3x3:`Grid3x3`,Grip:`Grip`,GripHorizontal:`GripHorizontal`,GripVertical:`GripVertical`,Group:`Group`,Guitar:`Guitar`,Ham:`Ham`,Hamburger:`Hamburger`,Hammer:`Hammer`,Hand:`Hand`,HandCoins:`HandCoins`,HandHeart:`HandHeart`,HandHelping:`HandHelping`,HandMetal:`HandMetal`,HandPlatter:`HandPlatter`,Handshake:`Handshake`,HardDrive:`HardDrive`,HardDriveDownload:`HardDriveDownload`,HardDriveUpload:`HardDriveUpload`,HardHat:`HardHat`,Hash:`Hash`,Haze:`Haze`,HdmiPort:`HdmiPort`,Heading:`Heading`,Heading1:`Heading1`,Heading2:`Heading2`,Heading3:`Heading3`,Heading4:`Heading4`,Heading5:`Heading5`,Heading6:`Heading6`,HeadphoneOff:`HeadphoneOff`,Headphones:`Headphones`,Headset:`Headset`,Heart:`Heart`,HeartCrack:`HeartCrack`,HeartHandshake:`HeartHandshake`,HeartMinus:`HeartMinus`,HeartOff:`HeartOff`,HeartPlus:`HeartPlus`,HeartPulse:`HeartPulse`,Heater:`Heater`,Hexagon:`Hexagon`,Highlighter:`Highlighter`,History:`History`,Hop:`Hop`,HopOff:`HopOff`,Hospital:`Hospital`,Hotel:`Hotel`,Hourglass:`Hourglass`,House:`House`,HousePlug:`HousePlug`,HousePlus:`HousePlus`,HouseWifi:`HouseWifi`,IceCreamBowl:`IceCreamBowl`,IceCreamCone:`IceCreamCone`,IdCard:`IdCard`,Image:`Image`,ImageDown:`ImageDown`,ImageMinus:`ImageMinus`,ImageOff:`ImageOff`,ImagePlay:`ImagePlay`,ImagePlus:`ImagePlus`,ImageUp:`ImageUp`,ImageUpscale:`ImageUpscale`,Images:`Images`,Import:`Import`,Inbox:`Inbox`,IndentDecrease:`IndentDecrease`,IndentIncrease:`IndentIncrease`,IndianRupee:`IndianRupee`,Infinity:`Infinity`,Info:`Info`,InspectionPanel:`InspectionPanel`,Instagram:`Instagram`,Italic:`Italic`,IterationCcw:`IterationCcw`,IterationCw:`IterationCw`,JapaneseYen:`JapaneseYen`,Joystick:`Joystick`,Kanban:`Kanban`,Key:`Key`,KeyRound:`KeyRound`,KeySquare:`KeySquare`,Keyboard:`Keyboard`,KeyboardMusic:`KeyboardMusic`,KeyboardOff:`KeyboardOff`,Lamp:`Lamp`,LampCeiling:`LampCeiling`,LampDesk:`LampDesk`,LampFloor:`LampFloor`,LampWallDown:`LampWallDown`,LampWallUp:`LampWallUp`,LandPlot:`LandPlot`,Landmark:`Landmark`,Languages:`Languages`,Laptop:`Laptop`,LaptopMinimal:`LaptopMinimal`,LaptopMinimalCheck:`LaptopMinimalCheck`,Lasso:`Lasso`,LassoSelect:`LassoSelect`,Laugh:`Laugh`,Layers:`Layers`,Layers2:`Layers2`,LayoutDashboard:`LayoutDashboard`,LayoutGrid:`LayoutGrid`,LayoutList:`LayoutList`,LayoutPanelLeft:`LayoutPanelLeft`,LayoutPanelTop:`LayoutPanelTop`,LayoutTemplate:`LayoutTemplate`,Leaf:`Leaf`,LeafyGreen:`LeafyGreen`,Lectern:`Lectern`,LetterText:`LetterText`,Library:`Library`,LibraryBig:`LibraryBig`,LifeBuoy:`LifeBuoy`,Ligature:`Ligature`,Lightbulb:`Lightbulb`,LightbulbOff:`LightbulbOff`,Link:`Link`,Link2:`Link2`,Link2Off:`Link2Off`,Linkedin:`Linkedin`,List:`List`,ListCheck:`ListCheck`,ListChecks:`ListChecks`,ListCollapse:`ListCollapse`,ListEnd:`ListEnd`,ListFilter:`ListFilter`,ListFilterPlus:`ListFilterPlus`,ListMinus:`ListMinus`,ListMusic:`ListMusic`,ListOrdered:`ListOrdered`,ListPlus:`ListPlus`,ListRestart:`ListRestart`,ListStart:`ListStart`,ListTodo:`ListTodo`,ListTree:`ListTree`,ListVideo:`ListVideo`,ListX:`ListX`,Loader:`Loader`,LoaderCircle:`LoaderCircle`,LoaderPinwheel:`LoaderPinwheel`,Locate:`Locate`,LocateFixed:`LocateFixed`,LocateOff:`LocateOff`,LocationEdit:`LocationEdit`,Lock:`Lock`,LockKeyhole:`LockKeyhole`,LockKeyholeOpen:`LockKeyholeOpen`,LockOpen:`LockOpen`,LogIn:`LogIn`,LogOut:`LogOut`,Logs:`Logs`,Lollipop:`Lollipop`,Luggage:`Luggage`,Magnet:`Magnet`,Mail:`Mail`,MailCheck:`MailCheck`,MailMinus:`MailMinus`,MailOpen:`MailOpen`,MailPlus:`MailPlus`,MailQuestion:`MailQuestion`,MailSearch:`MailSearch`,MailWarning:`MailWarning`,MailX:`MailX`,Mailbox:`Mailbox`,Mails:`Mails`,Map:`Map`,MapPin:`MapPin`,MapPinCheck:`MapPinCheck`,MapPinCheckInside:`MapPinCheckInside`,MapPinHouse:`MapPinHouse`,MapPinMinus:`MapPinMinus`,MapPinMinusInside:`MapPinMinusInside`,MapPinOff:`MapPinOff`,MapPinPlus:`MapPinPlus`,MapPinPlusInside:`MapPinPlusInside`,MapPinX:`MapPinX`,MapPinXInside:`MapPinXInside`,MapPinned:`MapPinned`,MapPlus:`MapPlus`,Mars:`Mars`,MarsStroke:`MarsStroke`,Martini:`Martini`,Maximize:`Maximize`,Maximize2:`Maximize2`,Medal:`Medal`,Megaphone:`Megaphone`,MegaphoneOff:`MegaphoneOff`,Meh:`Meh`,MemoryStick:`MemoryStick`,Menu:`Menu`,Merge:`Merge`,MessageCircle:`MessageCircle`,MessageCircleCode:`MessageCircleCode`,MessageCircleDashed:`MessageCircleDashed`,MessageCircleHeart:`MessageCircleHeart`,MessageCircleMore:`MessageCircleMore`,MessageCircleOff:`MessageCircleOff`,MessageCirclePlus:`MessageCirclePlus`,MessageCircleQuestion:`MessageCircleQuestion`,MessageCircleReply:`MessageCircleReply`,MessageCircleWarning:`MessageCircleWarning`,MessageCircleX:`MessageCircleX`,MessageSquare:`MessageSquare`,MessageSquareCode:`MessageSquareCode`,MessageSquareDashed:`MessageSquareDashed`,MessageSquareDiff:`MessageSquareDiff`,MessageSquareDot:`MessageSquareDot`,MessageSquareHeart:`MessageSquareHeart`,MessageSquareLock:`MessageSquareLock`,MessageSquareMore:`MessageSquareMore`,MessageSquareOff:`MessageSquareOff`,MessageSquarePlus:`MessageSquarePlus`,MessageSquareQuote:`MessageSquareQuote`,MessageSquareReply:`MessageSquareReply`,MessageSquareShare:`MessageSquareShare`,MessageSquareText:`MessageSquareText`,MessageSquareWarning:`MessageSquareWarning`,MessageSquareX:`MessageSquareX`,MessagesSquare:`MessagesSquare`,Mic:`Mic`,MicOff:`MicOff`,MicVocal:`MicVocal`,Microchip:`Microchip`,Microscope:`Microscope`,Microwave:`Microwave`,Milestone:`Milestone`,Milk:`Milk`,MilkOff:`MilkOff`,Minimize:`Minimize`,Minimize2:`Minimize2`,Minus:`Minus`,Monitor:`Monitor`,MonitorCheck:`MonitorCheck`,MonitorCog:`MonitorCog`,MonitorDot:`MonitorDot`,MonitorDown:`MonitorDown`,MonitorOff:`MonitorOff`,MonitorPause:`MonitorPause`,MonitorPlay:`MonitorPlay`,MonitorSmartphone:`MonitorSmartphone`,MonitorSpeaker:`MonitorSpeaker`,MonitorStop:`MonitorStop`,MonitorUp:`MonitorUp`,MonitorX:`MonitorX`,Moon:`Moon`,MoonStar:`MoonStar`,Mountain:`Mountain`,MountainSnow:`MountainSnow`,Mouse:`Mouse`,MouseOff:`MouseOff`,MousePointer:`MousePointer`,MousePointer2:`MousePointer2`,MousePointerBan:`MousePointerBan`,MousePointerClick:`MousePointerClick`,Move:`Move`,Move3d:`Move3d`,MoveDiagonal:`MoveDiagonal`,MoveDiagonal2:`MoveDiagonal2`,MoveDown:`MoveDown`,MoveDownLeft:`MoveDownLeft`,MoveDownRight:`MoveDownRight`,MoveHorizontal:`MoveHorizontal`,MoveLeft:`MoveLeft`,MoveRight:`MoveRight`,MoveUp:`MoveUp`,MoveUpLeft:`MoveUpLeft`,MoveUpRight:`MoveUpRight`,MoveVertical:`MoveVertical`,Music:`Music`,Music2:`Music2`,Music3:`Music3`,Music4:`Music4`,Navigation:`Navigation`,Navigation2:`Navigation2`,Navigation2Off:`Navigation2Off`,NavigationOff:`NavigationOff`,Network:`Network`,Newspaper:`Newspaper`,Nfc:`Nfc`,NonBinary:`NonBinary`,Notebook:`Notebook`,NotebookPen:`NotebookPen`,NotebookTabs:`NotebookTabs`,NotebookText:`NotebookText`,NotepadText:`NotepadText`,NotepadTextDashed:`NotepadTextDashed`,Nut:`Nut`,NutOff:`NutOff`,Octagon:`Octagon`,OctagonAlert:`OctagonAlert`,OctagonMinus:`OctagonMinus`,OctagonPause:`OctagonPause`,OctagonX:`OctagonX`,Omega:`Omega`,Option:`Option`,Orbit:`Orbit`,Origami:`Origami`,Package:`Package`,Package2:`Package2`,PackageCheck:`PackageCheck`,PackageMinus:`PackageMinus`,PackageOpen:`PackageOpen`,PackagePlus:`PackagePlus`,PackageSearch:`PackageSearch`,PackageX:`PackageX`,PaintBucket:`PaintBucket`,PaintRoller:`PaintRoller`,Paintbrush:`Paintbrush`,PaintbrushVertical:`PaintbrushVertical`,Palette:`Palette`,Panda:`Panda`,PanelBottom:`PanelBottom`,PanelBottomClose:`PanelBottomClose`,PanelBottomDashed:`PanelBottomDashed`,PanelBottomOpen:`PanelBottomOpen`,PanelLeft:`PanelLeft`,PanelLeftClose:`PanelLeftClose`,PanelLeftDashed:`PanelLeftDashed`,PanelLeftOpen:`PanelLeftOpen`,PanelRight:`PanelRight`,PanelRightClose:`PanelRightClose`,PanelRightDashed:`PanelRightDashed`,PanelRightOpen:`PanelRightOpen`,PanelTop:`PanelTop`,PanelTopClose:`PanelTopClose`,PanelTopDashed:`PanelTopDashed`,PanelTopOpen:`PanelTopOpen`,PanelsLeftBottom:`PanelsLeftBottom`,PanelsRightBottom:`PanelsRightBottom`,PanelsTopLeft:`PanelsTopLeft`,Paperclip:`Paperclip`,Parentheses:`Parentheses`,ParkingMeter:`ParkingMeter`,PartyPopper:`PartyPopper`,Pause:`Pause`,PawPrint:`PawPrint`,PcCase:`PcCase`,Pen:`Pen`,PenLine:`PenLine`,PenOff:`PenOff`,PenTool:`PenTool`,Pencil:`Pencil`,PencilLine:`PencilLine`,PencilOff:`PencilOff`,PencilRuler:`PencilRuler`,Pentagon:`Pentagon`,Percent:`Percent`,PersonStanding:`PersonStanding`,PhilippinePeso:`PhilippinePeso`,Phone:`Phone`,PhoneCall:`PhoneCall`,PhoneForwarded:`PhoneForwarded`,PhoneIncoming:`PhoneIncoming`,PhoneMissed:`PhoneMissed`,PhoneOff:`PhoneOff`,PhoneOutgoing:`PhoneOutgoing`,Pi:`Pi`,Piano:`Piano`,Pickaxe:`Pickaxe`,PictureInPicture:`PictureInPicture`,PictureInPicture2:`PictureInPicture2`,PiggyBank:`PiggyBank`,Pilcrow:`Pilcrow`,PilcrowLeft:`PilcrowLeft`,PilcrowRight:`PilcrowRight`,Pill:`Pill`,PillBottle:`PillBottle`,Pin:`Pin`,PinOff:`PinOff`,Pipette:`Pipette`,Pizza:`Pizza`,Plane:`Plane`,PlaneLanding:`PlaneLanding`,PlaneTakeoff:`PlaneTakeoff`,Play:`Play`,Plug:`Plug`,Plug2:`Plug2`,PlugZap:`PlugZap`,Plus:`Plus`,Pocket:`Pocket`,PocketKnife:`PocketKnife`,Podcast:`Podcast`,Pointer:`Pointer`,PointerOff:`PointerOff`,Popcorn:`Popcorn`,Popsicle:`Popsicle`,PoundSterling:`PoundSterling`,Power:`Power`,PowerOff:`PowerOff`,Presentation:`Presentation`,Printer:`Printer`,PrinterCheck:`PrinterCheck`,Projector:`Projector`,Proportions:`Proportions`,Puzzle:`Puzzle`,Pyramid:`Pyramid`,QrCode:`QrCode`,Quote:`Quote`,Rabbit:`Rabbit`,Radar:`Radar`,Radiation:`Radiation`,Radical:`Radical`,Radio:`Radio`,RadioReceiver:`RadioReceiver`,RadioTower:`RadioTower`,Radius:`Radius`,RailSymbol:`RailSymbol`,Rainbow:`Rainbow`,Rat:`Rat`,Ratio:`Ratio`,Receipt:`Receipt`,ReceiptCent:`ReceiptCent`,ReceiptEuro:`ReceiptEuro`,ReceiptIndianRupee:`ReceiptIndianRupee`,ReceiptJapaneseYen:`ReceiptJapaneseYen`,ReceiptPoundSterling:`ReceiptPoundSterling`,ReceiptRussianRuble:`ReceiptRussianRuble`,ReceiptSwissFranc:`ReceiptSwissFranc`,ReceiptText:`ReceiptText`,RectangleEllipsis:`RectangleEllipsis`,RectangleGoggles:`RectangleGoggles`,RectangleHorizontal:`RectangleHorizontal`,RectangleVertical:`RectangleVertical`,Recycle:`Recycle`,Redo:`Redo`,Redo2:`Redo2`,RedoDot:`RedoDot`,RefreshCcw:`RefreshCcw`,RefreshCcwDot:`RefreshCcwDot`,RefreshCw:`RefreshCw`,RefreshCwOff:`RefreshCwOff`,Refrigerator:`Refrigerator`,Regex:`Regex`,RemoveFormatting:`RemoveFormatting`,Repeat:`Repeat`,Repeat1:`Repeat1`,Repeat2:`Repeat2`,Replace:`Replace`,ReplaceAll:`ReplaceAll`,Reply:`Reply`,ReplyAll:`ReplyAll`,Rewind:`Rewind`,Ribbon:`Ribbon`,Rocket:`Rocket`,RockingChair:`RockingChair`,RollerCoaster:`RollerCoaster`,Rotate3d:`Rotate3d`,RotateCcw:`RotateCcw`,RotateCcwKey:`RotateCcwKey`,RotateCcwSquare:`RotateCcwSquare`,RotateCw:`RotateCw`,RotateCwSquare:`RotateCwSquare`,Route:`Route`,RouteOff:`RouteOff`,Router:`Router`,Rows2:`Rows2`,Rows3:`Rows3`,Rows4:`Rows4`,Rss:`Rss`,Ruler:`Ruler`,RulerDimensionLine:`RulerDimensionLine`,RussianRuble:`RussianRuble`,Sailboat:`Sailboat`,Salad:`Salad`,Sandwich:`Sandwich`,Satellite:`Satellite`,SatelliteDish:`SatelliteDish`,SaudiRiyal:`SaudiRiyal`,Save:`Save`,SaveAll:`SaveAll`,SaveOff:`SaveOff`,Scale:`Scale`,Scale3d:`Scale3d`,Scaling:`Scaling`,Scan:`Scan`,ScanBarcode:`ScanBarcode`,ScanEye:`ScanEye`,ScanFace:`ScanFace`,ScanHeart:`ScanHeart`,ScanLine:`ScanLine`,ScanQrCode:`ScanQrCode`,ScanSearch:`ScanSearch`,ScanText:`ScanText`,School:`School`,Scissors:`Scissors`,ScissorsLineDashed:`ScissorsLineDashed`,ScreenShare:`ScreenShare`,ScreenShareOff:`ScreenShareOff`,Scroll:`Scroll`,ScrollText:`ScrollText`,Search:`Search`,SearchCheck:`SearchCheck`,SearchCode:`SearchCode`,SearchSlash:`SearchSlash`,SearchX:`SearchX`,Section:`Section`,Send:`Send`,SendHorizontal:`SendHorizontal`,SendToBack:`SendToBack`,SeparatorHorizontal:`SeparatorHorizontal`,SeparatorVertical:`SeparatorVertical`,Server:`Server`,ServerCog:`ServerCog`,ServerCrash:`ServerCrash`,ServerOff:`ServerOff`,Settings:`Settings`,Settings2:`Settings2`,Shapes:`Shapes`,Share:`Share`,Share2:`Share2`,Sheet:`Sheet`,Shell:`Shell`,Shield:`Shield`,ShieldAlert:`ShieldAlert`,ShieldBan:`ShieldBan`,ShieldCheck:`ShieldCheck`,ShieldEllipsis:`ShieldEllipsis`,ShieldHalf:`ShieldHalf`,ShieldMinus:`ShieldMinus`,ShieldOff:`ShieldOff`,ShieldPlus:`ShieldPlus`,ShieldQuestion:`ShieldQuestion`,ShieldUser:`ShieldUser`,ShieldX:`ShieldX`,Ship:`Ship`,ShipWheel:`ShipWheel`,Shirt:`Shirt`,ShoppingBag:`ShoppingBag`,ShoppingBasket:`ShoppingBasket`,ShoppingCart:`ShoppingCart`,Shovel:`Shovel`,ShowerHead:`ShowerHead`,Shredder:`Shredder`,Shrimp:`Shrimp`,Shrink:`Shrink`,Shrub:`Shrub`,Shuffle:`Shuffle`,Sigma:`Sigma`,Signal:`Signal`,SignalHigh:`SignalHigh`,SignalLow:`SignalLow`,SignalMedium:`SignalMedium`,SignalZero:`SignalZero`,Signature:`Signature`,Signpost:`Signpost`,SignpostBig:`SignpostBig`,Siren:`Siren`,SkipBack:`SkipBack`,SkipForward:`SkipForward`,Skull:`Skull`,Slack:`Slack`,Slash:`Slash`,Slice:`Slice`,SlidersHorizontal:`SlidersHorizontal`,SlidersVertical:`SlidersVertical`,Smartphone:`Smartphone`,SmartphoneCharging:`SmartphoneCharging`,SmartphoneNfc:`SmartphoneNfc`,Smile:`Smile`,SmilePlus:`SmilePlus`,Snail:`Snail`,Snowflake:`Snowflake`,SoapDispenserDroplet:`SoapDispenserDroplet`,Sofa:`Sofa`,Soup:`Soup`,Space:`Space`,Spade:`Spade`,Sparkle:`Sparkle`,Sparkles:`Sparkles`,Speaker:`Speaker`,Speech:`Speech`,SpellCheck:`SpellCheck`,SpellCheck2:`SpellCheck2`,Spline:`Spline`,SplinePointer:`SplinePointer`,Split:`Split`,SprayCan:`SprayCan`,Sprout:`Sprout`,Square:`Square`,SquareActivity:`SquareActivity`,SquareArrowDown:`SquareArrowDown`,SquareArrowDownLeft:`SquareArrowDownLeft`,SquareArrowDownRight:`SquareArrowDownRight`,SquareArrowLeft:`SquareArrowLeft`,SquareArrowOutDownLeft:`SquareArrowOutDownLeft`,SquareArrowOutDownRight:`SquareArrowOutDownRight`,SquareArrowOutUpLeft:`SquareArrowOutUpLeft`,SquareArrowOutUpRight:`SquareArrowOutUpRight`,SquareArrowRight:`SquareArrowRight`,SquareArrowUp:`SquareArrowUp`,SquareArrowUpLeft:`SquareArrowUpLeft`,SquareArrowUpRight:`SquareArrowUpRight`,SquareAsterisk:`SquareAsterisk`,SquareBottomDashedScissors:`SquareBottomDashedScissors`,SquareChartGantt:`SquareChartGantt`,SquareCheck:`SquareCheck`,SquareCheckBig:`SquareCheckBig`,SquareChevronDown:`SquareChevronDown`,SquareChevronLeft:`SquareChevronLeft`,SquareChevronRight:`SquareChevronRight`,SquareChevronUp:`SquareChevronUp`,SquareCode:`SquareCode`,SquareDashed:`SquareDashed`,SquareDashedBottom:`SquareDashedBottom`,SquareDashedBottomCode:`SquareDashedBottomCode`,SquareDashedKanban:`SquareDashedKanban`,SquareDashedMousePointer:`SquareDashedMousePointer`,SquareDashedTopSolid:`SquareDashedTopSolid`,SquareDivide:`SquareDivide`,SquareDot:`SquareDot`,SquareEqual:`SquareEqual`,SquareFunction:`SquareFunction`,SquareKanban:`SquareKanban`,SquareLibrary:`SquareLibrary`,SquareM:`SquareM`,SquareMenu:`SquareMenu`,SquareMinus:`SquareMinus`,SquareMousePointer:`SquareMousePointer`,SquareParking:`SquareParking`,SquareParkingOff:`SquareParkingOff`,SquarePen:`SquarePen`,SquarePercent:`SquarePercent`,SquarePi:`SquarePi`,SquarePilcrow:`SquarePilcrow`,SquarePlay:`SquarePlay`,SquarePlus:`SquarePlus`,SquarePower:`SquarePower`,SquareRadical:`SquareRadical`,SquareRoundCorner:`SquareRoundCorner`,SquareScissors:`SquareScissors`,SquareSigma:`SquareSigma`,SquareSlash:`SquareSlash`,SquareSplitHorizontal:`SquareSplitHorizontal`,SquareSplitVertical:`SquareSplitVertical`,SquareSquare:`SquareSquare`,SquareStack:`SquareStack`,SquareTerminal:`SquareTerminal`,SquareUser:`SquareUser`,SquareUserRound:`SquareUserRound`,SquareX:`SquareX`,SquaresExclude:`SquaresExclude`,SquaresIntersect:`SquaresIntersect`,SquaresSubtract:`SquaresSubtract`,SquaresUnite:`SquaresUnite`,Squircle:`Squircle`,Squirrel:`Squirrel`,Stamp:`Stamp`,Star:`Star`,StarHalf:`StarHalf`,StarOff:`StarOff`,StepBack:`StepBack`,StepForward:`StepForward`,Stethoscope:`Stethoscope`,Sticker:`Sticker`,StickyNote:`StickyNote`,Store:`Store`,StretchHorizontal:`StretchHorizontal`,StretchVertical:`StretchVertical`,Strikethrough:`Strikethrough`,Subscript:`Subscript`,Sun:`Sun`,SunDim:`SunDim`,SunMedium:`SunMedium`,SunMoon:`SunMoon`,SunSnow:`SunSnow`,Sunrise:`Sunrise`,Sunset:`Sunset`,Superscript:`Superscript`,SwatchBook:`SwatchBook`,SwissFranc:`SwissFranc`,SwitchCamera:`SwitchCamera`,Sword:`Sword`,Swords:`Swords`,Syringe:`Syringe`,Table:`Table`,Table2:`Table2`,TableCellsMerge:`TableCellsMerge`,TableCellsSplit:`TableCellsSplit`,TableColumnsSplit:`TableColumnsSplit`,TableOfContents:`TableOfContents`,TableProperties:`TableProperties`,TableRowsSplit:`TableRowsSplit`,Tablet:`Tablet`,TabletSmartphone:`TabletSmartphone`,Tablets:`Tablets`,Tag:`Tag`,Tags:`Tags`,Tally1:`Tally1`,Tally2:`Tally2`,Tally3:`Tally3`,Tally4:`Tally4`,Tally5:`Tally5`,Tangent:`Tangent`,Target:`Target`,Telescope:`Telescope`,Tent:`Tent`,TentTree:`TentTree`,Terminal:`Terminal`,TestTube:`TestTube`,TestTubeDiagonal:`TestTubeDiagonal`,TestTubes:`TestTubes`,Text:`Text`,TextCursor:`TextCursor`,TextCursorInput:`TextCursorInput`,TextQuote:`TextQuote`,TextSearch:`TextSearch`,TextSelect:`TextSelect`,Theater:`Theater`,Thermometer:`Thermometer`,ThermometerSnowflake:`ThermometerSnowflake`,ThermometerSun:`ThermometerSun`,ThumbsDown:`ThumbsDown`,ThumbsUp:`ThumbsUp`,Ticket:`Ticket`,TicketCheck:`TicketCheck`,TicketMinus:`TicketMinus`,TicketPercent:`TicketPercent`,TicketPlus:`TicketPlus`,TicketSlash:`TicketSlash`,TicketX:`TicketX`,Tickets:`Tickets`,TicketsPlane:`TicketsPlane`,Timer:`Timer`,TimerOff:`TimerOff`,TimerReset:`TimerReset`,ToggleLeft:`ToggleLeft`,ToggleRight:`ToggleRight`,Toilet:`Toilet`,Tornado:`Tornado`,Torus:`Torus`,Touchpad:`Touchpad`,TouchpadOff:`TouchpadOff`,TowerControl:`TowerControl`,ToyBrick:`ToyBrick`,Tractor:`Tractor`,TrafficCone:`TrafficCone`,TrainFront:`TrainFront`,TrainFrontTunnel:`TrainFrontTunnel`,TrainTrack:`TrainTrack`,TramFront:`TramFront`,Transgender:`Transgender`,Trash:`Trash`,Trash2:`Trash2`,TreeDeciduous:`TreeDeciduous`,TreePalm:`TreePalm`,TreePine:`TreePine`,Trees:`Trees`,Trello:`Trello`,TrendingDown:`TrendingDown`,TrendingUp:`TrendingUp`,TrendingUpDown:`TrendingUpDown`,Triangle:`Triangle`,TriangleAlert:`TriangleAlert`,TriangleDashed:`TriangleDashed`,TriangleRight:`TriangleRight`,Trophy:`Trophy`,Truck:`Truck`,TruckElectric:`TruckElectric`,Turtle:`Turtle`,Tv:`Tv`,TvMinimal:`TvMinimal`,TvMinimalPlay:`TvMinimalPlay`,Twitch:`Twitch`,Twitter:`Twitter`,Type:`Type`,TypeOutline:`TypeOutline`,Umbrella:`Umbrella`,UmbrellaOff:`UmbrellaOff`,Underline:`Underline`,Undo:`Undo`,Undo2:`Undo2`,UndoDot:`UndoDot`,UnfoldHorizontal:`UnfoldHorizontal`,UnfoldVertical:`UnfoldVertical`,Ungroup:`Ungroup`,University:`University`,Unlink:`Unlink`,Unlink2:`Unlink2`,Unplug:`Unplug`,Upload:`Upload`,Usb:`Usb`,User:`User`,UserCheck:`UserCheck`,UserCog:`UserCog`,UserLock:`UserLock`,UserMinus:`UserMinus`,UserPen:`UserPen`,UserPlus:`UserPlus`,UserRound:`UserRound`,UserRoundCheck:`UserRoundCheck`,UserRoundCog:`UserRoundCog`,UserRoundMinus:`UserRoundMinus`,UserRoundPen:`UserRoundPen`,UserRoundPlus:`UserRoundPlus`,UserRoundSearch:`UserRoundSearch`,UserRoundX:`UserRoundX`,UserSearch:`UserSearch`,UserX:`UserX`,Users:`Users`,UsersRound:`UsersRound`,Utensils:`Utensils`,UtensilsCrossed:`UtensilsCrossed`,UtilityPole:`UtilityPole`,Variable:`Variable`,Vault:`Vault`,Vegan:`Vegan`,VenetianMask:`VenetianMask`,Venus:`Venus`,VenusAndMars:`VenusAndMars`,Vibrate:`Vibrate`,VibrateOff:`VibrateOff`,Video:`Video`,VideoOff:`VideoOff`,Videotape:`Videotape`,View:`View`,Voicemail:`Voicemail`,Volleyball:`Volleyball`,Volume:`Volume`,Volume1:`Volume1`,Volume2:`Volume2`,VolumeOff:`VolumeOff`,VolumeX:`VolumeX`,Vote:`Vote`,Wallet:`Wallet`,WalletCards:`WalletCards`,WalletMinimal:`WalletMinimal`,Wallpaper:`Wallpaper`,Wand:`Wand`,WandSparkles:`WandSparkles`,Warehouse:`Warehouse`,WashingMachine:`WashingMachine`,Watch:`Watch`,Waves:`Waves`,WavesLadder:`WavesLadder`,Waypoints:`Waypoints`,Webcam:`Webcam`,Webhook:`Webhook`,WebhookOff:`WebhookOff`,Weight:`Weight`,Wheat:`Wheat`,WheatOff:`WheatOff`,WholeWord:`WholeWord`,Wifi:`Wifi`,WifiHigh:`WifiHigh`,WifiLow:`WifiLow`,WifiOff:`WifiOff`,WifiPen:`WifiPen`,WifiZero:`WifiZero`,Wind:`Wind`,WindArrowDown:`WindArrowDown`,Wine:`Wine`,WineOff:`WineOff`,Workflow:`Workflow`,Worm:`Worm`,WrapText:`WrapText`,Wrench:`Wrench`,X:`X`,Youtube:`Youtube`,Zap:`Zap`,ZapOff:`ZapOff`,ZoomIn:`ZoomIn`,ZoomOut:`ZoomOut`,ArrowDown_0_1:`ArrowDown01`,ArrowDown_1_0:`ArrowDown10`,ArrowUp_0_1:`ArrowUp01`,ArrowUp_1_0:`ArrowUp10`,Axis_3d:`Axis3d`,BookUp_2:`BookUp2`,Building_2:`Building2`,Calendar_1:`Calendar1`,CalendarCheck_2:`CalendarCheck2`,CalendarMinus_2:`CalendarMinus2`,CalendarPlus_2:`CalendarPlus2`,CalendarX_2:`CalendarX2`,CircleSlash_2:`CircleSlash2`,Clock_1:`Clock1`,Clock_10:`Clock10`,Clock_11:`Clock11`,Clock_12:`Clock12`,Clock_2:`Clock2`,Clock_3:`Clock3`,Clock_4:`Clock4`,Clock_5:`Clock5`,Clock_6:`Clock6`,Clock_7:`Clock7`,Clock_8:`Clock8`,Clock_9:`Clock9`,Columns_2:`Columns2`,Columns_3:`Columns3`,Columns_3Cog:`Columns3Cog`,Columns_4:`Columns4`,Dice_1:`Dice1`,Dice_2:`Dice2`,Dice_3:`Dice3`,Dice_4:`Dice4`,Dice_5:`Dice5`,Dice_6:`Dice6`,Disc_2:`Disc2`,Disc_3:`Disc3`,FileAudio_2:`FileAudio2`,FileAxis_3d:`FileAxis3d`,FileBadge_2:`FileBadge2`,FileCheck_2:`FileCheck2`,FileCode_2:`FileCode2`,FileJson_2:`FileJson2`,FileKey_2:`FileKey2`,FileLock_2:`FileLock2`,FileMinus_2:`FileMinus2`,FilePlus_2:`FilePlus2`,FileSearch_2:`FileSearch2`,FileType_2:`FileType2`,FileVideo_2:`FileVideo2`,FileVolume_2:`FileVolume2`,FileX_2:`FileX2`,FlipHorizontal_2:`FlipHorizontal2`,FlipVertical_2:`FlipVertical2`,Flower_2:`Flower2`,FolderGit_2:`FolderGit2`,FolderSearch_2:`FolderSearch2`,Gamepad_2:`Gamepad2`,Grid_2x2:`Grid2x2`,Grid_2x2Check:`Grid2x2Check`,Grid_2x2Plus:`Grid2x2Plus`,Grid_2x2X:`Grid2x2X`,Grid_3x3:`Grid3x3`,Heading_1:`Heading1`,Heading_2:`Heading2`,Heading_3:`Heading3`,Heading_4:`Heading4`,Heading_5:`Heading5`,Heading_6:`Heading6`,Layers_2:`Layers2`,Link_2:`Link2`,Link_2Off:`Link2Off`,Maximize_2:`Maximize2`,Minimize_2:`Minimize2`,MousePointer_2:`MousePointer2`,Move_3d:`Move3d`,MoveDiagonal_2:`MoveDiagonal2`,Music_2:`Music2`,Music_3:`Music3`,Music_4:`Music4`,Navigation_2:`Navigation2`,Navigation_2Off:`Navigation2Off`,Package_2:`Package2`,PictureInPicture_2:`PictureInPicture2`,Plug_2:`Plug2`,Redo_2:`Redo2`,Repeat_1:`Repeat1`,Repeat_2:`Repeat2`,Rotate_3d:`Rotate3d`,Rows_2:`Rows2`,Rows_3:`Rows3`,Rows_4:`Rows4`,Scale_3d:`Scale3d`,Settings_2:`Settings2`,Share_2:`Share2`,SpellCheck_2:`SpellCheck2`,Table_2:`Table2`,Tally_1:`Tally1`,Tally_2:`Tally2`,Tally_3:`Tally3`,Tally_4:`Tally4`,Tally_5:`Tally5`,Trash_2:`Trash2`,Undo_2:`Undo2`,Unlink_2:`Unlink2`,Volume_1:`Volume1`,Volume_2:`Volume2`},_r={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`,ExtraLarge:`xl`},vr={...hr,...gr},yr={Gray:`gray`,Brand:`brand`,Error:`error`,Warning:`warning`,Success:`success`,GrayBlue:`gray-blue`,BlueLight:`blue-light`,Blue:`blue`,Indigo:`indigo`,Purple:`purple`,Pink:`pink`,Orange:`orange`},br=[`gray`,`brand`,`error`,`warning`,`success`,`gray-blue`,`blue-light`,`blue`,`indigo`,`purple`,`pink`,`orange`];function xr(e,t,n){return Math.min(Math.max(e,t),n)}function Sr(e){return br.map(t=>`.color--${t} {\n  ${e(t)}\n}`).join(`
`)}function Cr(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})}function wr(e){let t=Cr();return e?`${e}-${t}`:t}function Tr(e,t,n,r=`value`){t.has(r)&&t.get(r)!==void 0&&e.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:n},bubbles:!0,composed:!0}))}function Er(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Dr(e,t,n){if(e.style?.setProperty){e.style.setProperty(t,n);return}let r=(e.getAttribute(`style`)??``).trim(),i=`${t}: ${n}`,a=RegExp(`${Er(t)}\\s*:\\s*[^;]*`);if(a.test(r)){e.setAttribute(`style`,r.replace(a,i));return}let o=r.replace(/;$/,``).trim();e.setAttribute(`style`,o?`${o}; ${i}`:i)}var z=class extends L{constructor(){super(...arguments),this.role=`presentation`,this.size=_r.Medium}willUpdate(e){e.has(`size`)&&typeof this.size==`number`&&Dr(this,`--icon-size`,`${this.size}px`),e.has(`strokeWidth`)&&this.strokeWidth!=null&&Dr(this,`--icon-stroke-width`,`${this.strokeWidth}`)}};z.styles=j`
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
  `,A([gn({type:String,reflect:!0})],z.prototype,`role`,void 0),A([gn({type:String,reflect:!0})],z.prototype,`size`,void 0),A([gn({type:Number,reflect:!0})],z.prototype,`strokeWidth`,void 0);var Or=class extends z{render(){return qt`
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

    `}};Or.styles=z.styles,Or=A([R(`quantic-icon-lucide-circle-check`)],Or);var kr=class extends z{render(){return qt`
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

    `}};kr.styles=z.styles,kr=A([R(`quantic-icon-lucide-circle-x`)],kr);var Ar=class extends z{render(){return qt`
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

    `}};Ar.styles=z.styles,Ar=A([R(`quantic-icon-lucide-info`)],Ar);var jr=class extends z{render(){return qt`
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

    `}};jr.styles=z.styles,jr=A([R(`quantic-icon-lucide-triangle-alert`)],jr);var Mr=class extends z{render(){return qt`
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

    `}};Mr.styles=z.styles,Mr=A([R(`quantic-icon-lucide-x`)],Mr),mr.ensureDefined(),Or.ensureDefined(),kr.ensureDefined(),Ar.ensureDefined(),jr.ensureDefined(),Mr.ensureDefined();var Nr=class extends $n(L,[`title`,``,`action`]){constructor(){super(...arguments),this.type=er.Info,this.showCloseButton=!1,this.handleCloseClick=()=>{this.dispatchEvent(new Event(`close`,{bubbles:!0,composed:!0}))}}updated(e){super.updated(e),(e.has(`type`)||!this.hasAttribute(`role`))&&(this.setAttribute(`role`,this.type===er.Error?`alert`:`status`),this.setAttribute(`aria-live`,this.type===er.Error?`assertive`:`polite`),this.setAttribute(`aria-atomic`,`true`))}renderDefaultIcon(){switch(this.type){case er.Success:return M`<quantic-icon-lucide-circle-check
          size="md"
        ></quantic-icon-lucide-circle-check>`;case er.Error:return M`<quantic-icon-lucide-circle-x
          size="md"
        ></quantic-icon-lucide-circle-x>`;case er.Warning:return M`<quantic-icon-lucide-triangle-alert
          size="md"
        ></quantic-icon-lucide-triangle-alert>`;case er.Info:default:return M`<quantic-icon-lucide-info
          size="md"
        ></quantic-icon-lucide-info>`}}render(){return M`
      <div class="container">
        <span class="icon">
          <slot name="icon">${this.renderDefaultIcon()}</slot>
        </span>
        <div class="content">
          <slot name="title" class="title"></slot>
          <slot class="body"></slot>
          <slot name="action" class="action"></slot>
        </div>
        ${this.showCloseButton?M`<quantic-button
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
              </quantic-button>`:N}
      </div>
    `}};Nr.meta={tag:`quantic-alert`,description:`Inline alert banner with severity styles and optional dismiss action. Visibility is owned by the consumer.`,category:`feedback`,avoidWhen:[{when:`the message is transient and not tied to a place on the page`,useInstead:`quantic-toast`}],accessibility:{providedByComponent:[`announced through a live region`,`severity conveyed by icon as well as colour`],requiredFromConsumer:[`a title, so the message does not depend on colour alone`]},slots:{icon:{description:`Optional icon override. Defaults to a type-derived lucide icon.`},title:{description:`Optional bold title.`,copyRule:`heading`},"":{description:`Body content of the alert.`},action:{description:`Optional action element (e.g. a link or button).`,copyRule:`heading`}},relatedTo:[`quantic-toast`,`quantic-button`]},Nr.styles=j`
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
  `,A([F({type:`AlertType`,options:Object.values(er),default:er.Info,reflect:!0,description:`Severity. Drives icon and color tokens.`})],Nr.prototype,`type`,void 0),A([F({type:`boolean`,attribute:`show-close-button`,default:`false`,description:`Shows a built-in close button. Click dispatches a "close" event.`})],Nr.prototype,`showCloseButton`,void 0),Nr=A([I(`close`,{description:`Fired when the user clicks the close button. The consumer is responsible for hiding the alert.`}),R(`quantic-alert`)],Nr);var{I:Pr}=cn,Fr=e=>e,Ir=e=>e.strings===void 0,Lr=()=>document.createComment(``),Rr=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new Pr(r.insertBefore(Lr(),i),r.insertBefore(Lr(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=Fr(e).nextSibling;Fr(r).insertBefore(e,i),e=t}}}return n},zr=(e,t,n=e)=>(e._$AI(t,n),e),Br={},Vr=(e,t=Br)=>e._$AH=t,Hr=e=>e._$AH,Ur=e=>{e._$AR(),e._$AA.remove()},Wr=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Gr=ur(class extends dr{constructor(e){if(super(e),e.type!==lr.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Hr(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=zr(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=zr(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=zr(i[d],a[m]),Rr(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=zr(i[f],a[p]),Rr(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=Wr(o,p,m),u=Wr(s,d,f)),l.has(s[d])){if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=Rr(e,i[d]);zr(t,a[p]),c[p]=t}else c[p]=zr(n,a[p]),Rr(e,i[d],n),i[t]=null;p++}else Ur(i[f]),f--}else Ur(i[d]),d++;for(;p<=m;){let t=Rr(e,c[m+1]);zr(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&Ur(e)}return this.ut=o,Vr(e,c),Jt}}),Kr=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Kr(e,t);return!0},qr=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Jr=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Zr(t)}};function Yr(e){this._$AN===void 0?this._$AM=e:(qr(this),this._$AM=e,Jr(this))}function Xr(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)Kr(r[e],!1),qr(r[e]);else r!=null&&(Kr(r,!1),qr(r))}else Kr(this,e)}}var Zr=e=>{e.type==lr.CHILD&&(e._$AP??=Xr,e._$AQ??=Yr)},Qr=class extends dr{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Jr(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Kr(this,e),qr(this))}setValue(e){if(Ir(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},$r=()=>new ei,ei=class{},ti=new WeakMap,ni=ur(class extends Qr{render(e){return N}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),N}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=ti.get(t);n===void 0&&(n=new WeakMap,ti.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?ti.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ri=Math.min,ii=Math.max,ai=Math.round,oi=Math.floor,si=e=>({x:e,y:e}),ci={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function li(e,t,n){return ii(e,ri(t,n))}function ui(e,t){return typeof e==`function`?e(t):e}function di(e){return e.split(`-`)[0]}function fi(e){return e.split(`-`)[1]}function pi(e){return e===`x`?`y`:`x`}function mi(e){return e===`y`?`height`:`width`}function hi(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function gi(e){return pi(hi(e))}function _i(e,t,n){n===void 0&&(n=!1);let r=fi(e),i=gi(e),a=mi(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Ei(o)),[o,Ei(o)]}function vi(e){let t=Ei(e);return[yi(e),t,yi(t)]}function yi(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var bi=[`left`,`right`],xi=[`right`,`left`],Si=[`top`,`bottom`],Ci=[`bottom`,`top`];function wi(e,t,n){switch(e){case`top`:case`bottom`:return n?t?xi:bi:t?bi:xi;case`left`:case`right`:return t?Si:Ci;default:return[]}}function Ti(e,t,n,r){let i=fi(e),a=wi(di(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(yi)))),a}function Ei(e){let t=di(e);return ci[t]+e.slice(t.length)}function Di(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function Oi(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Di(e)}function ki(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Ai(e,t,n){let{reference:r,floating:i}=e,a=hi(t),o=gi(t),s=mi(o),c=di(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=fi(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function ji(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=ui(t,e),p=Oi(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=ki(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=ki(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Mi=50,Ni=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:ji},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Ai(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Mi&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Ai(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Pi=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=ui(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=di(r),_=hi(o),v=di(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Ei(o)]:vi(o)),x=p!==`none`;!d&&x&&b.push(...Ti(o,m,p,y));let S=[o,...b],ee=await s.detectOverflow(t,h),te=[],C=i.flip?.overflows||[];if(l&&te.push(ee[g]),u){let e=_i(r,a,y);te.push(ee[e[0]],ee[e[1]])}if(C=[...C,{placement:r,overflows:te}],!te.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===hi(t)||C.every(e=>hi(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(x){let t=hi(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},Fi=new Set([`left`,`top`]);async function Ii(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=di(n),s=fi(n),c=hi(n)===`y`,l=Fi.has(o)?-1:1,u=a&&c?-1:1,d=ui(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Li=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Ii(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Ri=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=ui(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=hi(i),p=pi(f),m=u[p],h=u[f],g=(e,t)=>li(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}};function zi(){return typeof window<`u`}function Bi(e){return Ui(e)?(e.nodeName||``).toLowerCase():`#document`}function Vi(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Hi(e){return((Ui(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Ui(e){return zi()?e instanceof Node||e instanceof Vi(e).Node:!1}function Wi(e){return zi()?e instanceof Element||e instanceof Vi(e).Element:!1}function Gi(e){return zi()?e instanceof HTMLElement||e instanceof Vi(e).HTMLElement:!1}function Ki(e){return!zi()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Vi(e).ShadowRoot}function qi(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=B(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Ji(e){return/^(table|td|th)$/.test(Bi(e))}function Yi(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Xi=/transform|translate|scale|rotate|perspective|filter/,Zi=/paint|layout|strict|content/,Qi=e=>!!e&&e!==`none`,$i;function ea(e){let t=Wi(e)?B(e):e;return Qi(t.transform)||Qi(t.translate)||Qi(t.scale)||Qi(t.rotate)||Qi(t.perspective)||!na()&&(Qi(t.backdropFilter)||Qi(t.filter))||Xi.test(t.willChange||``)||Zi.test(t.contain||``)}function ta(e){let t=ia(e);for(;Gi(t)&&!ra(t);){if(ea(t))return t;if(Yi(t))return null;t=ia(t)}return null}function na(){return $i??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),$i}function ra(e){return/^(html|body|#document)$/.test(Bi(e))}function B(e){return Vi(e).getComputedStyle(e)}function V(e){return Wi(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ia(e){if(Bi(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Ki(e)&&e.host||Hi(e);return Ki(t)?t.host:t}function aa(e){let t=ia(e);return ra(t)?(e.ownerDocument||e).body:Gi(t)&&qi(t)?t:aa(t)}function oa(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=aa(e),i=r===e.ownerDocument?.body,a=Vi(r);if(i){let e=sa(a);return t.concat(a,a.visualViewport||[],qi(r)?r:[],e&&n?oa(e):[])}return t.concat(r,oa(r,[],n))}function sa(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ca(e){let t=B(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Gi(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=ai(n)!==a||ai(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function la(e){return Wi(e)?e:e.contextElement}function ua(e){let t=la(e);if(!Gi(t))return si(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=ca(t),o=(a?ai(n.width):n.width)/r,s=(a?ai(n.height):n.height)/i;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}var da=si(0);function fa(e){let t=Vi(e);return!na()||!t.visualViewport?da:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function pa(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===Vi(e)}function ma(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=la(e),o=si(1);t&&(r?Wi(r)&&(o=ua(r)):o=ua(e));let s=pa(a,n,r)?fa(a):si(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=Vi(a),t=Wi(r)?Vi(r):r,n=e,i=sa(n);for(;i&&t!==n;){let e=ua(i),t=i.getBoundingClientRect(),r=B(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Vi(i),i=sa(n)}}return ki({width:u,height:d,x:c,y:l})}function ha(e,t){let n=V(e).scrollLeft;return t?t.left+n:ma(Hi(e)).left+n}function ga(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ha(e,n),y:n.top+t.scrollTop}}function _a(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Hi(r),s=t?Yi(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=si(1),u=si(0),d=Gi(r);if((d||!a)&&((Bi(r)!==`body`||qi(o))&&(c=V(r)),d)){let e=ma(r);l=ua(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?ga(o,c):si(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function va(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function ya(e){let t=V(e),n=e.ownerDocument.body,r=ii(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=ii(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+ha(e),o=-t.scrollTop;return B(n).direction===`rtl`&&(a+=ii(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var ba=25;function xa(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=Vi(e),a=Hi(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!na()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(ha(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=ba&&(s-=o)}return{width:s,height:c,x:l,y:u}}function Sa(e,t){let n=ma(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=ua(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Ca(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=xa(e,n,t);else if(t===`document`)r=ya(Hi(e));else if(Wi(t))r=Sa(t,n);else{let n=fa(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return ki(r)}function wa(e,t){let n=t.get(e);if(n)return n;let r=oa(e,[],!1).filter(e=>Wi(e)&&Bi(e)!==`body`),i=null,a=B(e).position===`fixed`,o=a?ia(e):e;for(;Wi(o)&&!ra(o);){let e=B(o),t=ea(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=ia(o)}return t.set(e,r),r}function Ta(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Yi(t)?[]:wa(t,this._c):[].concat(n),r],o=Ca(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=Ca(t,a[e],i);s=ii(n.top,s),c=ri(n.right,c),l=ri(n.bottom,l),u=ii(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Ea(e){let{width:t,height:n}=ca(e);return{width:t,height:n}}function Da(e,t,n){let r=Gi(t),i=Hi(t),a=n===`fixed`,o=ma(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=si(0);if((r||!a)&&((Bi(t)!==`body`||qi(i))&&(s=V(t)),r)){let e=ma(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=ha(i));let l=i&&!r&&!a?ga(i,s):si(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function Oa(e){return B(e).position===`static`}function ka(e,t){if(!Gi(e)||B(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Hi(e)===n&&(n=n.ownerDocument.body),n}function Aa(e,t){let n=Vi(e);if(Yi(e))return n;if(!Gi(e)){let t=ia(e);for(;t&&!ra(t);){if(Wi(t)&&!Oa(t))return t;t=ia(t)}return n}let r=ka(e,t);for(;r&&Ji(r)&&Oa(r);)r=ka(r,t);return r&&ra(r)&&Oa(r)&&!ea(r)?n:r||ta(e)||n}var ja=async function(e){let t=this.getOffsetParent||Aa,n=this.getDimensions,r=await n(e.floating);return{reference:Da(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ma(e){return B(e).direction===`rtl`}var Na={convertOffsetParentRelativeRectToViewportRelativeRect:_a,getDocumentElement:Hi,getClippingRect:Ta,getOffsetParent:Aa,getElementRects:ja,getClientRects:va,getDimensions:Ea,getScale:ua,isElement:Wi,isRTL:Ma};function Pa(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Fa(e,t,n){let r=null,i,a=Hi(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=oi(d),h=oi(a.clientWidth-(u+f)),g=oi(a.clientHeight-(d+p)),_=oi(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:ii(0,ri(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!Pa(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=Vi(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function Ia(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=la(e),u=i||a?[...l?oa(l):[],...t?oa(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?Fa(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?ma(e):null;c&&g();function g(){let t=ma(e);h&&!Pa(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var La=Li,Ra=Ri,za=Pi,Ba=(e,t,n)=>{let r=new Map,i=n??{},a={...Na,...i.platform,_c:r};return Ni(e,t,{...i,platform:a})};function Va(e){class t extends e{constructor(){super(...arguments),this.ariaLabel=null,this.ariaDescription=null,this.ariaInvalid=null}getA11yAttributes(e){let t=e?.label??this.ariaLabel,n=e?.description??this.ariaDescription,r=e?.invalid??this.ariaInvalid===`true`;return{label:pr(t||void 0),description:pr(n||void 0),invalid:pr(r?`true`:void 0)}}}return A([F({type:`string`,attribute:`aria-label`,description:`Accessible label for the component (aria-label).`})],t.prototype,`ariaLabel`,void 0),A([F({type:`string`,attribute:`aria-description`,description:`Accessible description bound directly to aria-description.`})],t.prototype,`ariaDescription`,void 0),A([F({type:`string`,attribute:`aria-invalid`,description:`Marks the component invalid for assistive technologies (aria-invalid).`})],t.prototype,`ariaInvalid`,void 0),t}var Ha={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},Ua=class extends z{render(){return qt`
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

    `}};Ua.styles=z.styles,Ua=A([R(`quantic-icon-lucide-chevron-down`)],Ua);var Wa=class extends z{render(){return qt`
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

    `}};Wa.styles=z.styles,Wa=A([R(`quantic-icon-lucide-circle-alert`)],Wa),Ua.ensureDefined(),Wa.ensureDefined();var Ga={xs:_r.ExtraSmall,sm:_r.ExtraSmall,md:_r.Small,lg:_r.Medium},Ka=e=>Ga[e]??_r.Small,qa=e=>M`<quantic-icon-lucide-circle-alert
    size=${Ka(e)}
    class="error-icon"
  ></quantic-icon-lucide-circle-alert>`,Ja=(e,t={})=>M`<quantic-icon-lucide-chevron-down
    size=${Ka(e)}
    class="suffix-icon"
    @click=${t.click}
    @mousedown=${t.mousedown}
  ></quantic-icon-lucide-chevron-down>`,Ya={xs:{font:`13px`,block:`var(--quantic-spacing-xxs)`,inline:`var(--quantic-spacing-2)`},sm:{font:`var(--quantic-font-size-body-sm)`,block:`var(--quantic-spacing-sm)`,inline:`var(--quantic-spacing-2)`},md:{font:`var(--quantic-font-size-body-md)`,block:`var(--quantic-spacing-md)`,inline:`var(--quantic-spacing-3)`},lg:{font:`var(--quantic-font-size-body-lg)`,block:`var(--quantic-spacing-3)`,inline:`var(--quantic-spacing-4)`}};Object.keys(Ya);function Xa(e,t){let n=t=>st(`--quantic-component-${e}-${t}`),r=st(`var(--quantic-component-${e}-border-radius, var(--quantic-radius-sm))`),i=st(`var(--quantic-component-${e}-border-color, var(--quantic-border-primary))`),a=Object.entries(Ya).map(([t,{font:n,block:r,inline:i}])=>`
        .main.size--${t} {
          font-size: var(--quantic-component-${e}-font-size, ${n});
          padding: var(--quantic-component-${e}-padding-block, ${r})
            var(--quantic-component-${e}-padding-inline, ${i});
        }`).join(`
`);return j`
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
  `}var Za=class extends Va(L){constructor(){super(),this.listboxId=wr(`combobox-listbox`),this.value=``,this.name=``,this.placeholder=``,this.options=[],this.size=Ha.Medium,this.disabled=!1,this.required=!1,this.invalid=!1,this.emptyLabel=`No results`,this.allowCustomValue=!1,this._open=!1,this._inputValue=``,this._activeIndex=-1,this._inputRef=$r(),this._listboxRef=$r(),this.internals=this.attachInternals()}updated(e){let t=e.has(`value`),n=e.has(`options`),r=e.has(`allowCustomValue`);if(t||r||n&&!this._open){let e=this.options.find(e=>e.value===this.value);this._inputValue=e?e.label:this.allowCustomValue?this.value:``}e.has(`value`)&&this.internals.setFormValue(this.value),(e.has(`value`)||e.has(`required`))&&this.updateValidity(),e.has(`options`)&&this._open&&(this._activeIndex=-1),e.has(`_activeIndex`)&&this._activeIndex>=0&&this.shadowRoot?.querySelectorAll(`[role="option"]`)[this._activeIndex]?.scrollIntoView({block:`nearest`})}get filteredOptions(){if(!this._inputValue)return this.options;let e=this.filterFn??((e,t)=>e.label.toLowerCase().includes(t.toLowerCase()));return this.options.filter(t=>e(t,this._inputValue))}firstNavigableIndex(){return this.filteredOptions.findIndex(e=>!e.disabled)}lastNavigableIndex(){let e=this.filteredOptions;for(let t=e.length-1;t>=0;t--)if(!e[t].disabled)return t;return-1}nextNavigableIndex(e,t){let n=this.filteredOptions,r=e+t;for(;r>=0&&r<n.length;){if(!n[r].disabled)return r;r+=t}return e}async openList(){this._open||this.disabled||(this._open=!0,this._activeIndex=-1,await this.updateComplete,this.positionListbox())}closeList(e=!1){if(this._open){if(this._open=!1,this._activeIndex=-1,this.cleanup?.(),this.cleanup=void 0,e&&(this.allowCustomValue||!this._inputValue.trim()))this.commitInputValue();else{let e=this.options.find(e=>e.value===this.value);this._inputValue=e?.label??(this.allowCustomValue?this.value:``)}}}commitInputValue(){let e=this._inputValue.trim();this._inputValue=e,e!==this.value&&(this.value=e,this.internals.setFormValue(e),this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:e},bubbles:!0,composed:!0})))}positionListbox(){let e=this._listboxRef.value;e&&(this.cleanup=Ia(this,e,async()=>{if(!e)return;let{x:t,y:n}=await Ba(this,e,{placement:`bottom-start`,middleware:[La(4),za(),Ra({padding:8})],strategy:`absolute`});Object.assign(e.style,{left:`${t}px`,top:`${n}px`,width:`${this.getBoundingClientRect().width}px`})}))}selectOption(e){this.value=e.value,this._inputValue=e.label,this.internals.setFormValue(e.value),this._open=!1,this._activeIndex=-1,this.cleanup?.(),this.cleanup=void 0,this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:this.value},bubbles:!0,composed:!0})),this._inputRef.value?.focus()}handleInput(e){let t=e.target;this._inputValue=t.value,this._activeIndex=-1,this._open||this.openList(),this.dispatchEvent(new CustomEvent(`input-changed`,{detail:{value:this._inputValue},bubbles:!0,composed:!0}))}handleKeyDown(e){switch(e.key){case`ArrowDown`:e.preventDefault(),this._open?this._activeIndex=this.nextNavigableIndex(this._activeIndex,1):this.openList().then(()=>{this._activeIndex=this.firstNavigableIndex()});break;case`ArrowUp`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.nextNavigableIndex(this._activeIndex,-1);break;case`Home`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.firstNavigableIndex();break;case`End`:if(!this._open)return;e.preventDefault(),this._activeIndex=this.lastNavigableIndex();break;case`Enter`:if(this._open&&this._activeIndex>=0){let t=this.filteredOptions[this._activeIndex];t&&!t.disabled&&(e.preventDefault(),this.selectOption(t))}else this._open&&(this.allowCustomValue||!this._inputValue.trim())&&(e.preventDefault(),this.closeList(!0));break;case`Escape`:e.preventDefault(),this.closeList();break;case`Tab`:this.closeList(!0)}}handleBlur(){this.closeList(!0),this.dispatchEvent(new Event(`blur`,{bubbles:!0,composed:!0}))}handleFocus(){this.dispatchEvent(new Event(`focus`,{bubbles:!0,composed:!0}))}handleInputClick(){this.openList()}handleChevronMouseDown(e){e.preventDefault(),this._open?this.closeList():(this._inputRef.value?.focus(),this.openList())}formResetCallback(){this.value=``,this._inputValue=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e);let t=this.options.find(t=>t.value===e);this._inputValue=t?.label??(this.allowCustomValue?e:``)}formDisabledCallback(e){this.disabled=e}disconnectedCallback(){super.disconnectedCallback(),this.cleanup?.()}updateValidity(){let e=this._inputRef.value;e&&this.internals.setValidity(e.validity,e.validationMessage,e)}get activeDescendant(){if(!(!this._open||this._activeIndex<0))return`${this.listboxId}-opt-${this._activeIndex}`}render(){let e=fr({main:!0,[`size--${this.size}`]:!0}),t=fr({listbox:!0,"is-open":this._open,[`size--${this.size}`]:!0}),n=this.getA11yAttributes({invalid:this.invalid}),r=this.filteredOptions;return M`
      <div class=${e}>
        <slot name="prefix"></slot>
        <input
          ${ni(this._inputRef)}
          class="input"
          role="combobox"
          aria-expanded=${this._open?`true`:`false`}
          aria-haspopup="listbox"
          aria-autocomplete="list"
          aria-controls=${this.listboxId}
          aria-activedescendant=${pr(this.activeDescendant)}
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
        ${this.invalid?qa(this.size):M`<slot name="suffix"
                >${Ja(this.size,{mousedown:this.handleChevronMouseDown})}</slot
              >`}
      </div>

      <ul
        ${ni(this._listboxRef)}
        id=${this.listboxId}
        role="listbox"
        class=${t}
        @mousedown=${e=>e.preventDefault()}
      >
        ${r.length===0?M`<li
                class="option-empty"
                role="option"
                aria-disabled="true"
                aria-selected="false"
              >
                ${this.emptyLabel}
              </li>`:Gr(r,e=>e.value,(e,t)=>M`
                  <li
                    id=${`${this.listboxId}-opt-${t}`}
                    role="option"
                    class=${fr({option:!0,"is-active":t===this._activeIndex,"is-selected":e.value===this.value,"is-disabled":!!e.disabled})}
                    aria-selected=${e.value===this.value?`true`:`false`}
                    aria-disabled=${e.disabled?`true`:`false`}
                    @click=${()=>this.handleOptionClick(e)}
                  >
                    <span class="option-label">${e.label}</span>
                  </li>
                `)}
      </ul>
    `}handleOptionClick(e){e.disabled||this.selectOption(e)}};Za.meta={tag:`quantic-combobox`,description:`Text input that filters a list of options as the user types. Form-associated. Use for large option sets or anywhere a plain <select> is inadequate. Wrap in quantic-combobox-field to add a label and validation messaging.`,category:`form`,avoidWhen:[{when:`the option set is short and fixed`,useInstead:`quantic-select`}],accessibility:{providedByComponent:[`aria-expanded and aria-selected`,`arrow keys and Escape`,`form association`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{prefix:{description:`Leading content (e.g. icon).`},suffix:{description:`Trailing content, replacing the default chevron.`}},relatedTo:[`quantic-combobox-field`,`quantic-select`,`quantic-field`]},Za.formAssociated=!0,Za.styles=[Xa(`combobox`,`6em`),j`
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
    `],A([F({type:`string`,default:``,reflect:!0,description:`Currently selected value submitted with the form.`})],Za.prototype,`value`,void 0),A([F({type:`string`,description:`Name submitted with form data.`})],Za.prototype,`name`,void 0),A([F({type:`string`,description:`Placeholder shown when no option is selected.`,copyRule:`placeholder`})],Za.prototype,`placeholder`,void 0),A([F({type:`ComboboxOption[]`,default:`[]`,description:`Options to display. Each item must have a label (display text) and value (form value). Set this prop reactively to implement async/server-side filtering.`})],Za.prototype,`options`,void 0),A([F({type:`ComboboxSize`,options:Object.values(Ha),default:Ha.Medium,description:`Controls padding and font size.`})],Za.prototype,`size`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],Za.prototype,`disabled`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],Za.prototype,`required`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-combobox-field.`})],Za.prototype,`invalid`,void 0),A([F({type:`string`,default:`No results`,description:`Text shown in the listbox when no options match the input.`,copyRule:`empty-state`})],Za.prototype,`emptyLabel`,void 0),A([F({type:`boolean`,default:`false`,description:`When true, the user can type a value that does not match any option. The typed text is preserved on blur/Enter and surfaced through the value-changed event. When false (default), only values from the options list are accepted.`})],Za.prototype,`allowCustomValue`,void 0),A([F({type:`(option: ComboboxOption, inputValue: string) => boolean`,description:`Custom filter predicate. If omitted, defaults to case-insensitive substring match on option.label.`})],Za.prototype,`filterFn`,void 0),A([_n()],Za.prototype,`_open`,void 0),A([_n()],Za.prototype,`_inputValue`,void 0),A([_n()],Za.prototype,`_activeIndex`,void 0),Za=A([I(`value-changed`,{description:`Fired when the user selects an option from the list, clears the field, or commits a custom value when allowCustomValue is enabled.`,detail:`{ value: string }`}),I(`input-changed`,{description:`Fired on every keystroke in the text field. Use to drive async filtering by updating the options prop in response.`,detail:`{ value: string }`}),I(`focus`,{forwarded:!0}),I(`blur`,{forwarded:!0}),R(`quantic-combobox`)],Za);var Qa=yr,$a={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},eo=class extends L{constructor(){super(...arguments),this.color=Qa.Brand,this.size=$a.Medium,this.rounded=!1,this.icon=!1}render(){return ar`
      <div class=${fr({main:!0,[`size--${this.size}`]:!0,[`color--${this.color}`]:!0,icon:this.icon,rounded:this.rounded})}>
        <slot name="before"></slot>
        <slot></slot>
        <slot name="after"></slot>
      </div>
    `}};eo.meta={tag:`quantic-badge`,description:`Compact inline label for status, category, or count. Non-interactive — use quantic-button for clickable chips. Supports a wide color palette and an icon-only square mode.`,category:`display`,avoidWhen:[{when:`the label is dismissible or selectable`,useInstead:`quantic-tag`},{when:`the label is clickable`,useInstead:`quantic-button`},{when:`the value is a named system state`,useInstead:`quantic-status-badge`}],slots:{before:{description:`Content before the label (e.g. icon).`},"":{description:`Badge label text or icon.`},after:{description:`Content after the label.`}},relatedTo:[`quantic-tag`,`quantic-status-badge`]},eo.styles=j`
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

    ${st(Sr(e=>`
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
  `,A([F({type:`BadgeColor`,options:Object.values(Qa),default:Qa.Brand,description:`Semantic color. Use "error" for failures, "success" for passing states, "warning" for caution, "brand" (default) for neutral highlights.`})],eo.prototype,`color`,void 0),A([F({type:`BadgeSize`,options:Object.values($a),default:$a.Medium,description:`Controls padding and font size.`})],eo.prototype,`size`,void 0),A([F({type:`boolean`,default:`false`,description:`Applies a fully rounded (pill) border radius.`})],eo.prototype,`rounded`,void 0),A([F({type:`boolean`,default:`false`,description:`Square icon-only mode — equal padding on all sides.`})],eo.prototype,`icon`,void 0),eo=A([R(`quantic-badge`)],eo);var to=class extends L{constructor(){super(...arguments),this.ariaLabel=null}render(){return M`
      <div class="group" part="group" role="group" aria-label=${this.ariaLabel??`Actions`}>
        <slot></slot>
      </div>
    `}};to.meta={tag:`quantic-action-group`,description:`A row of related actions sharing one accessible name and a consistent gap. Takes quantic-button, and quantic-dropdown-menu or quantic-popover when the trigger is a button. Wraps when the row runs out of width. Gap: --quantic-component-action-group-gap. Use quantic-button-bar when the buttons should read as one joined control.`,category:`action`,avoidWhen:[{when:`the buttons are segments of a single control`,useInstead:`quantic-button-bar`}],accessibility:{providedByComponent:[`role=group with one accessible name across the row`],requiredFromConsumer:[`an ariaLabel naming the group`]},slots:{"":{description:`quantic-button elements, or a quantic-dropdown-menu or quantic-popover triggered by one.`}},parts:{group:{description:`The flex container, for a column layout or a different alignment.`}},relatedTo:[`quantic-button`,`quantic-button-bar`,`quantic-dialog-actions`,`quantic-dropdown-menu`,`quantic-popover`]},to.styles=j`
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
  `,A([F({type:`string`,attribute:`aria-label`,description:`Accessible name for the group.`})],to.prototype,`ariaLabel`,void 0),to=A([R(`quantic-action-group`)],to);var no=class extends Event{constructor(e,t,n,r){super(`context-request`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=n,this.subscribe=r??!1}};function ro(e){return e}var io=class{constructor(e,t,n,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,t.context!==void 0){let e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&=(this.unsubscribe(),void 0)}dispatchRequest(){this.host.dispatchEvent(new no(this.context,this.host,this.t,this.subscribe))}},ao=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}},oo=class extends Event{constructor(e,t){super(`context-provider`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}},so=class extends ao{constructor(e,t,n){super(t.context===void 0?n:t.initialValue),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:n}]of this.subscriptions)t.has(e)||(t.add(e),n.dispatchEvent(new no(this.context,n,e,!0)));e.stopPropagation()},this.host=e,this.context=t.context===void 0?t:t.context,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener(`context-request`,this.onContextRequest),this.host.addEventListener(`context-provider`,this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new oo(this.context,this.host))}};function co({context:e}){return(t,n)=>{let r=new WeakMap;if(typeof n==`object`)return{get(){return t.get.call(this)},set(e){return r.get(this).setValue(e),t.set.call(this,e)},init(t){return r.set(this,new so(this,{context:e,initialValue:t})),t}};{t.constructor.addInitializer((t=>{r.set(t,new so(t,{context:e}))}));let i=Object.getOwnPropertyDescriptor(t,n),a;if(i===void 0){let e=new WeakMap;a={get(){return e.get(this)},set(t){r.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=i.set;a={...i,set(t){r.get(this).setValue(t),e?.call(this,t)}}}Object.defineProperty(t,n,a);return}}}function lo({context:e,subscribe:t}){return(n,r)=>{typeof r==`object`?r.addInitializer((function(){new io(this,{context:e,callback:e=>{n.set.call(this,e)},subscribe:t})})):n.constructor.addInitializer((n=>{new io(n,{context:e,callback:e=>{n[r]=e},subscribe:t})}))}}var uo={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},fo=ro(`button-bar.size`),po={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1,Home:`first`,End:`last`};function mo(e,t){if(!e.length)return null;if(t){let t=e.findIndex(e=>e.tabbable);if(t!==-1)return t}let n=e.findIndex(e=>e.active);return n===-1?0:n}function ho(e,t,n){let r=po[e];return r===void 0||n<2||t<0||t>=n?null:r===`first`?0:r===`last`?n-1:(t+r+n)%n}var go=`quantic-button-bar-item, quantic-button-group-item`,_o=class extends L{constructor(){super(...arguments),this.size=uo.Medium,this.ariaLabel=null,this.hasSynced=!1,this.defaultLabel=`Button bar`}connectedCallback(){super.connectedCallback(),this.disabledObserver=new MutationObserver(()=>this.syncFocusStop()),this.disabledObserver.observe(this,{attributeFilter:[`disabled`],subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.disabledObserver?.disconnect(),this.disabledObserver=void 0}get items(){return[...this.querySelectorAll(go)].filter(e=>e.parentElement===this&&!e.disabled)}setFocusStop(e,t){e.forEach((e,n)=>{e.tabbable=n===t})}syncFocusStop(){let e=this.items,t=mo(e,this.hasSynced);t!==null&&(this.hasSynced=!0,this.setFocusStop(e,t))}handleFocusIn(e){let t=this.items,n=t.findIndex(t=>t.contains(e.target));n!==-1&&this.setFocusStop(t,n)}handleKeydown(e){let t=this.items,n=t.findIndex(t=>t.contains(e.target)),r=ho(e.key,n,t.length);r!==null&&(e.preventDefault(),this.setFocusStop(t,r),t[r].focus())}render(){return M`
      <div
        class="container"
        role="toolbar"
        aria-label=${this.ariaLabel??this.defaultLabel}
        @keydown=${this.handleKeydown}
        @focusin=${this.handleFocusIn}
      >
        <slot @slotchange=${()=>this.syncFocusStop()}></slot>
      </div>
    `}};_o.meta={tag:`quantic-button-bar`,description:`Toolbar of related buttons joined into one cohesive control, with shared sizing. Use for switching between views or modes, and for a compact run of icon actions. Items carry aria-pressed via active, so a set can behave as exclusive options or as independent toggles. Focus follows the toolbar pattern: one tab stop, arrow keys move between items, Home and End jump to the ends. Prefer quantic-button for a standalone action, and quantic-tabs when each segment reveals a panel.`,category:`action`,avoidWhen:[{when:`the buttons are unrelated actions rather than segments of one control`,useInstead:`quantic-action-group`}],accessibility:{providedByComponent:[`one accessible name for the bar`,`arrow keys move between items`],requiredFromConsumer:[`an ariaLabel naming what the bar controls`]},slots:{"":{description:`One or more quantic-button-bar-item elements.`}},relatedTo:[`quantic-button`]},_o.styles=j`
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
  `,A([co({context:fo}),F({type:`ButtonBarSize`,options:Object.values(uo),default:uo.Medium,description:`Size applied to all child items via context.`})],_o.prototype,`size`,void 0),A([F({type:`string`,attribute:`aria-label`,description:`Accessible label for the group.`})],_o.prototype,`ariaLabel`,void 0),_o=A([R(`quantic-button-bar`)],_o);var vo=class extends L{constructor(){super(...arguments),this.tabbable=!0,this.disabled=!1,this.active=!1,this.ariaLabel=null}focus(e){this.innerButton?.focus(e)}render(){return M`
      <button
        type="button"
        class=${fr({main:!0,[`size--${this.size}`]:!!this.size,"is-active":this.active})}
        tabindex=${this.disabled||!this.tabbable?-1:0}
        ?disabled=${this.disabled}
        aria-pressed=${this.active?`true`:`false`}
        aria-label=${pr(this.ariaLabel??void 0)}
      >
        <div class="content">
          <slot></slot>
        </div>
      </button>
    `}};vo.meta={tag:`quantic-button-bar-item`,description:`Single segment within a quantic-button-bar. Renders as a native button with shared sizing from the parent context and a pressed state via active.`,category:`action`,subComponentOf:`quantic-button-bar`,slots:{"":{description:`Button label or icon content.`}},relatedTo:[`quantic-button-bar`,`quantic-button`]},vo.styles=j`
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
  `,A([lo({context:fo,subscribe:!0})],vo.prototype,`size`,void 0),A([_n()],vo.prototype,`tabbable`,void 0),A([yn(`button`)],vo.prototype,`innerButton`,void 0),A([F({type:`boolean`,default:`false`,description:`Prevents interaction and reduces opacity.`,reflect:!0})],vo.prototype,`disabled`,void 0),A([F({type:`boolean`,default:`false`,description:`Marks this item as the currently selected/active option.`,reflect:!0})],vo.prototype,`active`,void 0),A([F({type:`string`,attribute:`aria-label`,description:`Accessible label for the inner button. Required when the item holds only an icon.`})],vo.prototype,`ariaLabel`,void 0),vo=A([R(`quantic-button-bar-item`)],vo);var yo={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},bo=class extends Va(L){constructor(){super(),this.checked=!1,this.required=!1,this.disabled=!1,this.invalid=!1,this.indeterminate=!1,this.label=``,this.name=``,this.size=yo.Medium,this.defaultChecked=!1,this.defaultIndeterminate=!1,this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.defaultChecked=this.hasAttribute(`checked`),this.defaultIndeterminate=this.hasAttribute(`indeterminate`)}forwardNative(e){let t=e.target;this.checked=t.checked,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}updated(e){super.updated(e);let t=this.renderRoot.querySelector(`input`);t&&(t.indeterminate=this.indeterminate,e.has(`checked`)&&(t.checked=this.checked)),e.has(`checked`)&&this.internals.setFormValue(this.checked?`on`:null)}dispatchValueChanged(e){this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{checked:this.checked,indeterminate:this.indeterminate},bubbles:!0,composed:!0}))}formResetCallback(){let e=this.renderRoot.querySelector(`input`);this.checked=this.defaultChecked,this.indeterminate=this.defaultIndeterminate,this.internals.setFormValue(this.defaultChecked?`on`:null),e&&(e.checked=this.defaultChecked,e.indeterminate=this.defaultIndeterminate)}formStateRestoreCallback(e){this.checked=e===`on`,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}get computedLabel(){return this.ariaLabel||this.label}render(){let e=fr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({label:this.computedLabel,invalid:this.invalid});return M`
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
    `}};bo.meta={tag:`quantic-checkbox`,description:`Form-associated checkbox for selecting one or more options from a set. Supports checked, indeterminate, and disabled states with full form integration.`,category:`form`,avoidWhen:[{when:`the control applies a setting immediately rather than on submit`,useInstead:`quantic-toggle`}],accessibility:{providedByComponent:[`form association`,`Space toggles`,`checked and indeterminate state reflected`],requiredFromConsumer:[`a label, via the label prop or by wrapping in quantic-field`]},slots:{"":{description:`Label content. Falls back to the label property if empty.`}},relatedTo:[`quantic-field`,`quantic-checkbox-group`]},bo.formAssociated=!0,bo.styles=j`
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
  `,A([F({type:`boolean`,default:`false`,reflect:!0,description:`Whether the checkbox is checked.`})],bo.prototype,`checked`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Marks the checkbox as required for form validation.`})],bo.prototype,`required`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction and applies disabled styling.`})],bo.prototype,`disabled`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling when the field fails validation.`})],bo.prototype,`invalid`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Shows an indeterminate (partial-selection) state.`})],bo.prototype,`indeterminate`,void 0),A([F({type:`string`,default:`''`,description:`Visible label text. Overridden by slotted content.`,copyRule:`control-label`})],bo.prototype,`label`,void 0),A([F({type:`string`,default:`''`,description:`Name submitted with form data.`})],bo.prototype,`name`,void 0),A([F({type:`CheckboxSize`,options:Object.values(yo),default:yo.Medium,description:`Controls the size of the checkbox box and label text.`})],bo.prototype,`size`,void 0),bo=A([I(`value-changed`,{description:`Fired whenever the input's value is updated (on input & change).`,detail:`{ checked: boolean, indeterminate: boolean }`}),I(`input`,{forwarded:!0}),I(`change`,{forwarded:!0}),I(`focus`,{forwarded:!0}),I(`blur`,{forwarded:!0}),I(`keydown`,{forwarded:!0}),I(`keyup`,{forwarded:!0}),R(`quantic-checkbox`)],bo);var xo={Small:`sm`,Medium:`md`,Large:`lg`,XLarge:`xl`},So={None:`none`,Subtle:`subtle`,Opaque:`opaque`},Co={Dialog:`dialog`,AlertDialog:`alertdialog`},wo=class extends L{constructor(){super(...arguments),this.visible=!1,this.variant=So.Opaque}render(){return M`<div class="backdrop backdrop--${this.variant}"></div>`}};wo.meta={tag:`quantic-dialog-backdrop`,description:`Semi-transparent overlay rendered behind quantic-dialog. Internal sub-component — do not use directly.`,category:`feedback`,relatedTo:[`quantic-dialog`]},wo.styles=j`
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
  `,A([F({type:`boolean`,default:`false`,reflect:!0,description:`Whether the backdrop is visible.`})],wo.prototype,`visible`,void 0),A([F({type:`DialogBackdrop`,options:Object.values(So),default:So.Opaque,description:`Visual style of the backdrop overlay.`})],wo.prototype,`variant`,void 0),wo=A([R(`quantic-dialog-backdrop`)],wo);var To=class extends $n(L,[`pretitle`,`subtitle`]){constructor(){super(...arguments),this.level=`2`}render(){return M`
      <div class="main">
        <hgroup>
          <slot name="pretitle" class="pretitle"></slot>
          <div class="title" role="heading" aria-level=${this.level}>
            <slot></slot>
          </div>
          <slot name="subtitle" class="subtitle"></slot>
        </hgroup>
      </div>
    `}};To.meta={tag:`quantic-dialog-title`,description:`Header/title bar sub-component for quantic-dialog. Renders a semantic heading with optional pretitle and subtitle slots.`,category:`feedback`,subComponentOf:`quantic-dialog`,slots:{pretitle:{description:`Small label displayed above the main title.`,copyRule:`title-fragment`},"":{description:`Main title text.`},subtitle:{description:`Supplementary text displayed below the title.`,copyRule:`title-fragment`}},relatedTo:[`quantic-dialog`]},To.styles=j`
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
  `,A([F({type:`"1" | "2" | "3" | "4" | "5" | "6"`,default:`"2"`,description:`Heading level for the title element.`})],To.prototype,`level`,void 0),To=A([R(`quantic-dialog-title`)],To),to.ensureDefined();var Eo=class extends L{render(){return ar`
      <quantic-action-group aria-label="">
        <slot></slot>
      </quantic-action-group>
    `}};Eo.meta={tag:`quantic-dialog-actions`,description:`Footer actions bar for quantic-dialog. Lays action buttons out as a quantic-action-group, flush to the right.`,category:`feedback`,subComponentOf:`quantic-dialog`,slots:{"":{description:`Action buttons, typically quantic-button elements.`}},relatedTo:[`quantic-dialog`,`quantic-button`,`quantic-action-group`]},Eo.styles=j`
    :host {
      display: block;
    }

    quantic-action-group {
      width: fit-content;
      margin-inline-start: auto;
    }
  `,Eo=A([R(`quantic-dialog-actions`)],Eo);var Do=[`input:not([inert]):not([inert] *)`,`select:not([inert]):not([inert] *)`,`textarea:not([inert]):not([inert] *)`,`a[href]:not([inert]):not([inert] *)`,`area[href]:not([inert]):not([inert] *)`,`button:not([inert]):not([inert] *)`,`[tabindex]:not(slot):not([inert]):not([inert] *)`,`audio[controls]:not([inert]):not([inert] *)`,`video[controls]:not([inert]):not([inert] *)`,`[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)`,`details>summary:first-of-type:not([inert]):not([inert] *)`,`details:not([inert]):not([inert] *)`],Oo=Do.join(`,`),ko=typeof Element>`u`,Ao=ko?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,jo=!ko&&Element.prototype.getRootNode?function(e){return e==null||e.getRootNode==null?void 0:e.getRootNode()}:function(e){return e?.ownerDocument},Mo=function(e,t){t===void 0&&(t=!0);var n=e==null||e.getAttribute==null?void 0:e.getAttribute(`inert`);return n===``||n===`true`||t&&e&&(typeof e.closest==`function`?e.closest(`[inert]`):Mo(e.parentNode))},No=function(e){var t,n=e==null||e.getAttribute==null||(t=e.getAttribute(`contenteditable`))==null?void 0:t.toLowerCase();return n===``||n===`true`||n===`plaintext-only`},Po=function(e,t,n){if(Mo(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Oo));return t&&Ao.call(e,Oo)&&r.unshift(e),r=r.filter(n),r},Fo=function(e,t,n){for(var r=[],i=Array.from(e);i.length;){var a=i.shift();if(!Mo(a,!1)){if(a.tagName===`SLOT`){var o=a.assignedElements(),s=Fo(o.length?o:a.children,!0,n);n.flatten?r.push.apply(r,s):r.push({scopeParent:a,candidates:s})}else{Ao.call(a,Oo)&&n.filter(a)&&(t||!e.includes(a))&&r.push(a);var c=a.shadowRoot||typeof n.getShadowRoot==`function`&&n.getShadowRoot(a),l=!Mo(c,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(a));if(c&&l){var u=Fo(c===!0?a.children:c.children,!0,n);n.flatten?r.push.apply(r,u):r.push({scopeParent:a,candidates:u})}else i.unshift.apply(i,a.children)}}}return r},Io=function(e){return!isNaN(parseInt(e.getAttribute(`tabindex`),10))},Lo=function(e){if(!e)throw Error(`No node provided`);return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||No(e))&&!Io(e)?0:e.tabIndex},Ro=function(e,t){var n=Lo(e);return n<0&&t&&!Io(e)?0:n},zo=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Bo=function(e){return e.tagName===`INPUT`},Vo=function(e){return Bo(e)&&e.type===`hidden`},H=function(e){return e.tagName===`DETAILS`&&Array.prototype.slice.apply(e.children).some(function(e){return e.tagName===`SUMMARY`})},Ho=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},Uo=function(e){if(!e.name)return!0;var t=e.form||jo(e),n=function(e){return t.querySelectorAll(`input[type="radio"][name="`+e+`"]`)},r;if(typeof window<`u`&&window.CSS!==void 0&&typeof window.CSS.escape==`function`)r=n(window.CSS.escape(e.name));else try{r=n(e.name)}catch(e){return console.error(`Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s`,e.message),!1}var i=Ho(r,e.form);return!i||i===e},Wo=function(e){return Bo(e)&&e.type===`radio`},Go=function(e){return Wo(e)&&!Uo(e)},Ko=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return n===0&&r===0},qo=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if(n===`full-native`&&`checkVisibility`in e)return!e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});var i=getComputedStyle(e).visibility;if(i===`hidden`||i===`collapse`)return!0;var a=Ao.call(e,`details>summary:first-of-type`)?e.parentElement:e;if(Ao.call(a,`details:not([open]) *`))return!0;if(!n||n===`full`||n===`full-native`||n===`legacy-full`){if(typeof r==`function`){for(var o=e;e;){var s=e.parentElement,c=jo(e);if(s&&!s.shadowRoot&&r(s)===!0)return Ko(e);e=e.assignedSlot?e.assignedSlot:!s&&c!==e.ownerDocument?c.host:s}e=o}if(e.isConnected)return!e.getClientRects().length;if(n!==`legacy-full`)return!0}else if(n===`non-zero-area`)return Ko(e);return!1},Jo=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName===`FIELDSET`&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if(r.tagName===`LEGEND`)return Ao.call(t,`fieldset[disabled] *`)?!0:!r.contains(e)}return!0}t=t.parentElement}return!1},Yo=function(e,t){return!(t.disabled||Vo(t)||qo(t,e)||H(t)||Jo(t))},Xo=function(e,t){return!(Go(t)||Lo(t)<0||!Yo(e,t))},Zo=function(e){var t=parseInt(e.getAttribute(`tabindex`),10);return!!(isNaN(t)||t>=0)},Qo=function(e){var t=[],n=[];return e.forEach(function(e,r){var i=!!e.scopeParent,a=i?e.scopeParent:e,o=Ro(a,i),s=i?Qo(e.candidates):a;o===0?i?t.push.apply(t,s):t.push(a):n.push({documentOrder:r,tabIndex:o,item:e,isScope:i,content:s})}),n.sort(zo).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(t)},$o=function(e,t){return t||={},Qo(t.getShadowRoot?Fo([e],t.includeContainer,{filter:Xo.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Zo}):Po(e,t.includeContainer,Xo.bind(null,t)))},es=function(e,t){return t||={},t.getShadowRoot?Fo([e],t.includeContainer,{filter:Yo.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):Po(e,t.includeContainer,Yo.bind(null,t))},ts=function(e,t){if(t||={},!e)throw Error(`No node provided`);return Ao.call(e,Oo)!==!1&&Xo(t,e)},ns=Do.concat(`iframe:not([inert]):not([inert] *)`).join(`,`),rs=function(e,t){if(t||={},!e)throw Error(`No node provided`);return Ao.call(e,ns)!==!1&&Yo(t,e)};function is(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function as(e){if(Array.isArray(e))return is(e)}function os(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=hs(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function ss(e,t,n){return(t=ms(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cs(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ls(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function us(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ds(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?us(Object(n),!0).forEach(function(t){ss(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):us(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function fs(e){return as(e)||cs(e)||hs(e)||ls()}function ps(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ms(e){var t=ps(e,`string`);return typeof t==`symbol`?t:t+``}function hs(e,t){if(e){if(typeof e==`string`)return is(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?is(e,t):void 0}}var gs={getActiveTrap:function(e){return e?.length>0?e[e.length-1]:null},activateTrap:function(e,t){t!==gs.getActiveTrap(e)&&gs.pauseTrap(e);var n=e.indexOf(t);n===-1||e.splice(n,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);n!==-1&&e.splice(n,1),gs.unpauseTrap(e)},pauseTrap:function(e){gs.getActiveTrap(e)?._setPausedState(!0)},unpauseTrap:function(e){var t=gs.getActiveTrap(e);t&&!t._isManuallyPaused()&&t._setPausedState(!1)}},_s=function(e){return e.tagName&&e.tagName.toLowerCase()===`input`&&typeof e.select==`function`},vs=function(e){return e?.key===`Escape`||e?.key===`Esc`||e?.keyCode===27},ys=function(e){return e?.key===`Tab`||e?.keyCode===9},bs=function(e){return ys(e)&&!e.shiftKey},xs=function(e){return ys(e)&&e.shiftKey},Ss=function(e){return setTimeout(e,0)},Cs=function(e){var t=[...arguments].slice(1);return typeof e==`function`?e.apply(void 0,t):e},ws=function(e){return e.target.shadowRoot&&typeof e.composedPath==`function`?e.composedPath()[0]:e.target},Ts=[],Es=function(e,t){var n=t?.document||document,r=t?.trapStack||Ts,i=ds({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isolateSubtrees:!1,isKeyForward:bs,isKeyBackward:xs},t),a={containers:[],containerGroups:[],tabbableGroups:[],adjacentElements:new Set,alreadySilent:new Set,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},o,s=function(e,t,n){return e&&e[t]!==void 0?e[t]:i[n||t]},c=function(e,t){var n=typeof t?.composedPath==`function`?t.composedPath():void 0;return a.containerGroups.findIndex(function(t){var r=t.container,i=t.tabbableNodes;return r.contains(e)||n?.includes(r)||i.find(function(t){return t===e})})},l=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.hasFallback,a=r!==void 0&&r,o=t.params,s=o===void 0?[]:o,c=i[e];if(typeof c==`function`&&(c=c.apply(void 0,fs(s))),c===!0&&(c=void 0),!c){if(c===void 0||c===!1)return c;throw Error(`\`${e}\` was specified but was not a node, or did not return a node`)}var l=c;if(typeof c==`string`){try{l=n.querySelector(c)}catch(t){throw Error(`\`${e}\` appears to be an invalid selector; error="${t.message}"`)}if(!l&&!a)throw Error(`\`${e}\` as selector refers to no known node`)}return l},u=function(){var e=l(`initialFocus`,{hasFallback:!0});if(e===!1)return!1;if(e===void 0||e&&!rs(e,i.tabbableOptions)){if(c(n.activeElement)>=0)e=n.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||l(`fallbackFocus`)}}else e===null&&(e=l(`fallbackFocus`));if(!e)throw Error(`Your focus-trap needs to have at least one focusable element`);return e},d=function(){if(a.containerGroups=a.containers.map(function(e){var t=$o(e,i.tabbableOptions),n=es(e,i.tabbableOptions),r=t.length>0?t[0]:void 0,a=t.length>0?t[t.length-1]:void 0,o=n.find(function(e){return ts(e)}),s=n.slice().reverse().find(function(e){return ts(e)});return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:!!t.find(function(e){return Lo(e)>0}),firstTabbableNode:r,lastTabbableNode:a,firstDomTabbableNode:o,lastDomTabbableNode:s,nextTabbableNode:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=t.indexOf(e);return i<0?r?n.slice(n.indexOf(e)+1).find(function(e){return ts(e)}):n.slice(0,n.indexOf(e)).reverse().find(function(e){return ts(e)}):t[i+(r?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!l(`fallbackFocus`))throw Error(`Your focus-trap must have at least one container with at least one tabbable node in it at all times`);if(a.containerGroups.find(function(e){return e.posTabIndexesFound})&&a.containerGroups.length>1)throw Error(`At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.`)},f=function(e){var t=e.activeElement;if(t)return t.shadowRoot&&t.shadowRoot.activeElement!==null?f(t.shadowRoot):t},p=function(e){e!==!1&&e!==f(document)&&(!e||!e.focus?p(u()):(e.focus({preventScroll:!!i.preventScroll}),a.mostRecentlyFocusedNode=e,_s(e)&&e.select()))},m=function(e){var t=l(`setReturnFocus`,{params:[e]});return t||t!==!1&&e},h=function(e){var t=e.target,n=e.event,r=e.isBackward,o=r!==void 0&&r;t||=ws(n),d();var s=null;if(a.tabbableGroups.length>0){var u=c(t,n),f=u>=0?a.containerGroups[u]:void 0;if(u<0)s=o?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(o){var p=a.tabbableGroups.findIndex(function(e){var n=e.firstTabbableNode;return t===n});if(p<0&&(f.container===t||rs(t,i.tabbableOptions)&&!ts(t,i.tabbableOptions)&&!f.nextTabbableNode(t,!1))&&(p=u),p>=0){var m=p===0?a.tabbableGroups.length-1:p-1,h=a.tabbableGroups[m];s=Lo(t)>=0?h.lastTabbableNode:h.lastDomTabbableNode}else ys(n)||(s=f.nextTabbableNode(t,!1))}else{var g=a.tabbableGroups.findIndex(function(e){var n=e.lastTabbableNode;return t===n});if(g<0&&(f.container===t||rs(t,i.tabbableOptions)&&!ts(t,i.tabbableOptions)&&!f.nextTabbableNode(t))&&(g=u),g>=0){var _=g===a.tabbableGroups.length-1?0:g+1,v=a.tabbableGroups[_];s=Lo(t)>=0?v.firstTabbableNode:v.firstDomTabbableNode}else ys(n)||(s=f.nextTabbableNode(t))}}else s=l(`fallbackFocus`);return s},g=function(e){c(ws(e),e)>=0||(Cs(i.clickOutsideDeactivates,e)?o.deactivate({returnFocus:i.returnFocusOnDeactivate}):Cs(i.allowOutsideClick,e)||e.preventDefault())},_=function(e){var t=ws(e),n=c(t,e)>=0;if(n||t instanceof Document)n&&(a.mostRecentlyFocusedNode=t);else{e.stopImmediatePropagation();var r,o=!0;if(a.mostRecentlyFocusedNode){if(Lo(a.mostRecentlyFocusedNode)>0){var s=c(a.mostRecentlyFocusedNode),l=a.containerGroups[s].tabbableNodes;if(l.length>0){var d=l.findIndex(function(e){return e===a.mostRecentlyFocusedNode});d>=0&&(i.isKeyForward(a.recentNavEvent)?d+1<l.length&&(r=l[d+1],o=!1):d-1>=0&&(r=l[d-1],o=!1))}}else a.containerGroups.some(function(e){return e.tabbableNodes.some(function(e){return Lo(e)>0})})||(o=!1)}else o=!1;o&&(r=h({target:a.mostRecentlyFocusedNode,isBackward:i.isKeyBackward(a.recentNavEvent)})),p(r||a.mostRecentlyFocusedNode||u())}a.recentNavEvent=void 0},v=function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];a.recentNavEvent=e;var n=h({event:e,isBackward:t});n&&(ys(e)&&e.preventDefault(),p(n))},y=function(e){(i.isKeyForward(e)||i.isKeyBackward(e))&&v(e,i.isKeyBackward(e))},b=function(e){vs(e)&&Cs(i.escapeDeactivates,e)!==!1&&(e.preventDefault(),o.deactivate())},x=function(e){c(ws(e),e)>=0||Cs(i.clickOutsideDeactivates,e)||Cs(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},S=function(){if(a.active)return gs.activateTrap(r,o),a.delayInitialFocusTimer=i.delayInitialFocus?Ss(function(){p(u())}):p(u()),n.addEventListener(`focusin`,_,!0),n.addEventListener(`mousedown`,g,{capture:!0,passive:!1}),n.addEventListener(`touchstart`,g,{capture:!0,passive:!1}),n.addEventListener(`click`,x,{capture:!0,passive:!1}),n.addEventListener(`keydown`,y,{capture:!0,passive:!1}),n.addEventListener(`keydown`,b),o},ee=function(e){a.active&&!a.paused&&o._setSubtreeIsolation(!1),a.adjacentElements.clear(),a.alreadySilent.clear();var t=new Set,n=new Set,r=os(e),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;t.add(s);for(var c=typeof ShadowRoot<`u`&&s.getRootNode()instanceof ShadowRoot,l=s;l;){t.add(l);var u=l.parentElement,d=[];u?d=u.children:!u&&c&&(d=l.getRootNode().children,u=l.getRootNode().host,c=typeof ShadowRoot<`u`&&u.getRootNode()instanceof ShadowRoot);var f=os(d),p;try{for(f.s();!(p=f.n()).done;){var m=p.value;n.add(m)}}catch(e){f.e(e)}finally{f.f()}l=u}}}catch(e){r.e(e)}finally{r.f()}t.forEach(function(e){n.delete(e)}),a.adjacentElements=n},te=function(){if(a.active)return n.removeEventListener(`focusin`,_,!0),n.removeEventListener(`mousedown`,g,!0),n.removeEventListener(`touchstart`,g,!0),n.removeEventListener(`click`,x,!0),n.removeEventListener(`keydown`,y,!0),n.removeEventListener(`keydown`,b),o},C=typeof window<`u`&&`MutationObserver`in window?new MutationObserver(function(e){e.some(function(e){return Array.from(e.removedNodes).some(function(e){return e===a.mostRecentlyFocusedNode})})&&p(u())}):void 0,ne=function(){C&&(C.disconnect(),a.active&&!a.paused&&a.containers.map(function(e){C.observe(e,{subtree:!0,childList:!0})}))};return o={get active(){return a.active},get paused(){return a.paused},activate:function(e){if(a.active)return this;var t=s(e,`onActivate`),c=s(e,`onPostActivate`),l=s(e,`checkCanFocusTrap`),u=gs.getActiveTrap(r),p=!1;if(u&&!u.paused){var m;(m=u._setSubtreeIsolation)==null||m.call(u,!1),p=!0}try{l||d(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=f(n),t?.();var h=function(){l&&d(),S(),ne(),i.isolateSubtrees&&o._setSubtreeIsolation(!0),c?.()};if(l)return l(a.containers.concat()).then(h,h),this;h()}catch(e){if(u===gs.getActiveTrap(r)&&p){var g;(g=u._setSubtreeIsolation)==null||g.call(u,!0)}throw e}return this},deactivate:function(e){if(!a.active)return this;var t=ds({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,a.paused||o._setSubtreeIsolation(!1),a.alreadySilent.clear(),te(),a.active=!1,a.paused=!1,ne(),gs.deactivateTrap(r,o);var n=s(t,`onDeactivate`),c=s(t,`onPostDeactivate`),l=s(t,`checkCanReturnFocus`),u=s(t,`returnFocus`,`returnFocusOnDeactivate`);n?.();var d=function(){Ss(function(){u&&p(m(a.nodeFocusedBeforeActivation)),c?.()})};return u&&l?(l(m(a.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){return a.active?(a.manuallyPaused=!0,this._setPausedState(!0,e)):this},unpause:function(e){return!a.active||(a.manuallyPaused=!1,r[r.length-1]!==this)?this:this._setPausedState(!1,e)},updateContainerElements:function(e){return a.containers=[].concat(e).filter(Boolean).map(function(e){return typeof e==`string`?n.querySelector(e):e}),i.isolateSubtrees&&ee(a.containers),a.active&&(d(),i.isolateSubtrees&&!a.paused&&o._setSubtreeIsolation(!0)),ne(),this}},Object.defineProperties(o,{_isManuallyPaused:{value:function(){return a.manuallyPaused}},_setPausedState:{value:function(e,t){if(a.paused===e)return this;if(a.paused=e,e){var n=s(t,`onPause`),r=s(t,`onPostPause`);n?.(),te(),ne(),o._setSubtreeIsolation(!1),r?.()}else{var i=s(t,`onUnpause`),c=s(t,`onPostUnpause`);i?.(),o._setSubtreeIsolation(!0),d(),S(),ne(),c?.()}return this}},_setSubtreeIsolation:{value:function(e){i.isolateSubtrees&&a.adjacentElements.forEach(function(t){if(e)switch(i.isolateSubtrees){case`aria-hidden`:(t.ariaHidden===`true`||t.getAttribute(`aria-hidden`)?.toLowerCase()===`true`)&&a.alreadySilent.add(t),t.setAttribute(`aria-hidden`,`true`);break;default:(t.inert||t.hasAttribute(`inert`))&&a.alreadySilent.add(t),t.setAttribute(`inert`,!0)}else if(!a.alreadySilent.has(t))switch(i.isolateSubtrees){case`aria-hidden`:t.removeAttribute(`aria-hidden`);break;default:t.removeAttribute(`inert`)}})}}}),o.updateContainerElements(e),o},Ds=500;wo.ensureDefined(),mr.ensureDefined(),Mr.ensureDefined();var Os=class extends $n(L,[`header`,`footer`]){constructor(){super(...arguments),this.open=!1,this.size=xo.Medium,this.fullscreen=!1,this.showCloseButton=!0,this.backdrop=So.Opaque,this.persistent=!1,this.role=Co.Dialog,this.ariaLabel=null,this.dialogId=wr(`dialog`),this.headerId=wr(`dialog-title`),this.originalOverflow=``,this.originalPaddingRight=``,this.backdropPointerDownOutside=!1,this.handleTriggerClick=()=>{this.show()},this.handleEscape=e=>{e.key===`Escape`&&this.open&&(e.stopPropagation(),this.persistent||this.hide())},this.handleBackdropPointerDown=e=>{this.backdropPointerDownOutside=e.target===this.wrapperElement},this.handleBackdropPointerUp=e=>{this.persistent||(this.backdropPointerDownOutside&&e.target===this.wrapperElement&&this.hide(),this.backdropPointerDownOutside=!1)},this.hide=async()=>{if(!this.open||this.persistent)return;let e=new Event(`before-close`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.addEventListener(`dialog-close`,this.hide),this.addEventListener(`keydown`,this.handleEscape)}disconnectedCallback(){if(super.disconnectedCallback(),this.removeEventListener(`dialog-close`,this.hide),this.removeEventListener(`keydown`,this.handleEscape),this.unlockBodyScroll(),this.focusTrap)try{this.focusTrap.deactivate()}catch(e){console.error(`Failed to deactivate focus trap:`,e)}finally{this.focusTrap=null}}updated(e){super.updated(e),e.has(`open`)&&(this.open?this._activate():e.get(`open`)&&this._deactivate())}get triggerElement(){return this.triggerSlot?.assignedElements({flatten:!0})[0]}get hasHeaderContent(){return this.headerSlot?.assignedNodes({flatten:!0}).some(e=>e.nodeType!==Node.TEXT_NODE||e.textContent?.trim())??!1}handleSlotChange(){let e=this.triggerElement;e&&(e.setAttribute(`aria-controls`,this.dialogId),e.setAttribute(`aria-haspopup`,`dialog`),e.setAttribute(`aria-expanded`,this.open?`true`:`false`))}lockBodyScroll(){if(typeof document>`u`)return;let e=window.innerWidth-document.documentElement.clientWidth;this.originalOverflow=document.body.style.overflow,this.originalPaddingRight=document.body.style.paddingRight,document.body.style.overflow=`hidden`,e>0&&(document.body.style.paddingRight=`${e}px`)}unlockBodyScroll(){typeof document<`u`&&(document.body.style.overflow=this.originalOverflow,document.body.style.paddingRight=this.originalPaddingRight)}updateTriggerAria(){let e=this.triggerElement;e&&e.setAttribute(`aria-expanded`,this.open?`true`:`false`)}async waitForDialogRender(){await this.updateComplete,await new Promise(e=>{let t=()=>{this.wrapperElement?.removeEventListener(`transitionend`,t),e()};this.wrapperElement?.addEventListener(`transitionend`,t),setTimeout(t,Ds)})}async show(){if(this.open)return;let e=new Event(`before-open`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!0)}async toggle(){this.open?await this.hide():await this.show()}async _activate(){if(this.updateTriggerAria(),this.lockBodyScroll(),this.backdropElement&&(await this.backdropElement.updateComplete,this.backdropElement.visible=!0),this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:!0},bubbles:!0,composed:!0})),await this.updateComplete,this.mainElement)try{this.focusTrap=Es(this.mainElement,{escapeDeactivates:!1,clickOutsideDeactivates:!1,allowOutsideClick:!0,returnFocusOnDeactivate:!0,fallbackFocus:this.mainElement,tabbableOptions:{getShadowRoot:!0}}),this.focusTrap.activate()}catch(e){console.error(`Failed to activate focus trap:`,e),this.focusTrap=null}await this.waitForDialogRender(),this.dispatchEvent(new Event(`after-open`,{bubbles:!0,composed:!0}))}async _deactivate(){if(this.updateTriggerAria(),this.focusTrap)try{this.focusTrap.deactivate()}catch(e){console.error(`Failed to deactivate focus trap:`,e)}finally{this.focusTrap=null}this.backdropElement&&(this.backdropElement.visible=!1),this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:!1},bubbles:!0,composed:!0})),await this.waitForDialogRender(),this.unlockBodyScroll(),this.dispatchEvent(new Event(`after-close`,{bubbles:!0,composed:!0}))}render(){return M`
      <div class="trigger" @click=${this.handleTriggerClick}>
        <slot name="trigger" @slotchange=${this.handleSlotChange}></slot>
      </div>
      <quantic-dialog-backdrop
        ?visible=${this.open}
        variant=${this.backdrop}
      ></quantic-dialog-backdrop>
      <div
        class=${fr({wrapper:!0,"wrapper--fullscreen":this.fullscreen})}
        @pointerdown=${this.handleBackdropPointerDown}
        @pointerup=${this.handleBackdropPointerUp}
      >
        <div
          class=${fr({main:!0,fullscreen:this.fullscreen,[`size--${this.size}`]:!this.fullscreen})}
          role=${this.role}
          aria-modal="true"
          aria-labelledby=${pr(this.hasHeaderContent?this.headerId:void 0)}
          aria-label=${pr(this.ariaLabel??void 0)}
          id=${this.dialogId}
          tabindex="-1"
        >
          ${this.showCloseButton&&!this.persistent?M`<quantic-button
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
    `}};Os.meta={tag:`quantic-dialog`,description:`Modal overlay dialog with focus trap, scroll lock, and animated entrance. Use quantic-dialog-title in the header slot and quantic-dialog-actions in the footer slot.`,category:`feedback`,avoidWhen:[{when:`the dialog only confirms or cancels one action`,useInstead:`quantic-confirm-dialog`},{when:`the content is contextual and does not need to block the page`,useInstead:`quantic-popover`},{when:`the page should stay usable while the content is open, such as a detail or chat panel`,useInstead:`quantic-drawer`}],accessibility:{providedByComponent:[`focus trap while open`,`focus restored to the trigger on close`,`Escape dismisses`,`scroll lock`],requiredFromConsumer:[`a title, via quantic-dialog-title in the header slot or the ariaLabel prop`]},slots:{trigger:{description:`Element that opens the dialog when clicked.`},header:{description:`Dialog header — place quantic-dialog-title here.`},"":{description:`Main dialog body content.`},footer:{description:`Dialog footer — place quantic-dialog-actions here.`}},relatedTo:[`quantic-button`]},Os.styles=j`
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
  `,A([F({type:`boolean`,default:`false`,reflect:!0,description:`Whether the dialog is visible.`})],Os.prototype,`open`,void 0),A([F({type:`DialogSize`,options:Object.values(xo),default:xo.Medium,description:`Maximum width of the dialog panel.`})],Os.prototype,`size`,void 0),A([F({type:`boolean`,default:`false`,description:`Expands the dialog to fill the viewport, ignoring size.`})],Os.prototype,`fullscreen`,void 0),A([F({type:`boolean`,default:`true`,description:`Shows a built-in close button in the top-right corner.`})],Os.prototype,`showCloseButton`,void 0),A([F({type:`DialogBackdrop`,options:Object.values(So),default:So.Opaque,description:`Style of the backdrop overlay.`})],Os.prototype,`backdrop`,void 0),A([F({type:`boolean`,default:`false`,description:`Prevents the dialog from being closed via Escape or backdrop click.`})],Os.prototype,`persistent`,void 0),A([F({type:`DialogRole`,options:Object.values(Co),default:Co.Dialog,description:`ARIA role for the dialog element. Use "alertdialog" for confirmation dialogs.`})],Os.prototype,`role`,void 0),A([F({type:`string`,attribute:`aria-label`,description:`Accessible label when the dialog has no visible heading.`})],Os.prototype,`ariaLabel`,void 0),A([yn(`quantic-dialog-backdrop`)],Os.prototype,`backdropElement`,void 0),A([yn(`.wrapper`)],Os.prototype,`wrapperElement`,void 0),A([yn(`.main`)],Os.prototype,`mainElement`,void 0),A([yn(`slot[name="trigger"]`)],Os.prototype,`triggerSlot`,void 0),A([yn(`slot[name="header"]`)],Os.prototype,`headerSlot`,void 0),Os=A([I(`open-changed`,{description:`Fired when the dialog open state changes.`,detail:`{ open: boolean }`}),I(`before-open`,{description:`Fired before the dialog opens.`}),I(`after-open`,{description:`Fired after the dialog opens and animations complete.`}),I(`before-close`,{description:`Fired before the dialog closes.`}),I(`after-close`,{description:`Fired after the dialog closes and animations complete.`}),R(`quantic-dialog`)],Os);var ks=class extends L{constructor(){super(...arguments),this.open=!1,this.heading=``,this.message=``,this.confirmText=`Confirm`,this.cancelText=`Cancel`,this.destructive=!1,this.loading=!1,this.persistent=!1,this.showCloseButton=!0,this.size=xo.Small,this.handleConfirmClick=()=>{if(this.loading)return;let e=new Event(`confirm`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),e.defaultPrevented||(this.open=!1)},this.handleCancelClick=()=>{this.loading||(this.dispatchEvent(new Event(`cancel`,{bubbles:!0,composed:!0})),this.open=!1)},this.handleInnerBeforeClose=()=>{this.dispatchEvent(new Event(`cancel`,{bubbles:!0,composed:!0}))},this.handleInnerOpenChanged=e=>{let t=e.detail;this.open!==t.open&&(this.open=t.open)}}updated(e){super.updated(e),e.has(`open`)&&this.innerDialog&&(this.innerDialog.open=this.open)}get buttonSize(){return this.size===xo.Large||this.size===xo.XLarge?sr.Medium:sr.Small}render(){return M`
      <quantic-dialog
        .size=${this.size}
        .role=${Co.AlertDialog}
        ?persistent=${this.persistent||this.loading}
        ?show-close-button=${this.showCloseButton&&!this.loading}
        @before-close=${this.handleInnerBeforeClose}
        @open-changed=${this.handleInnerOpenChanged}
      >
        <slot name="trigger" slot="trigger"></slot>
        ${this.heading?M`<quantic-dialog-title slot="header" level="2">
              ${this.heading}
            </quantic-dialog-title>`:N}

        <div class="body">
          <slot>${this.message?M`<p>${this.message}</p>`:N}</slot>
        </div>

        <quantic-dialog-actions slot="footer">
          <quantic-button
            variant="${or.Outline}"
            .size=${this.buttonSize}
            ?disabled=${this.loading}
            @click=${this.handleCancelClick}
          >
            ${this.cancelText}
          </quantic-button>
          <quantic-button
            variant="${or.Primary}"
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
    `}};ks.meta={tag:`quantic-confirm-dialog`,description:'Confirmation dialog with title, body, and confirm/cancel actions. Wraps quantic-dialog with role="alertdialog". Use `destructive` for irreversible actions.',category:`feedback`,avoidWhen:[{when:`the dialog carries a form or more than two actions`,useInstead:`quantic-dialog`}],accessibility:{providedByComponent:[`role=alertdialog`,`everything quantic-dialog provides`],requiredFromConsumer:[`a heading and a message, so the action is named without relying on the button alone`]},slots:{trigger:{description:`Element that opens the dialog when clicked.`},"":{description:"Body content. Overrides the `message` prop when non-empty. Accepts rich HTML, including a nested quantic-alert for contextual warnings."},"confirm-icon":{description:`Optional leading icon for the confirm button.`}},relatedTo:[`quantic-dialog`,`quantic-button`,`quantic-alert`]},ks.styles=j`
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
  `,A([F({type:`boolean`,default:`false`,reflect:!0,description:`Whether the dialog is visible.`})],ks.prototype,`open`,void 0),A([F({type:`string`,description:`Heading shown in the dialog header.`,copyRule:`heading`})],ks.prototype,`heading`,void 0),A([F({type:`string`,description:`Body message. Ignored if default slot has content. Use the slot for rich content.`,copyRule:`body-message`})],ks.prototype,`message`,void 0),A([F({type:`string`,attribute:`confirm-text`,default:`"Confirm"`,description:`Label for the confirm action button.`,copyRule:`action-label`})],ks.prototype,`confirmText`,void 0),A([F({type:`string`,attribute:`cancel-text`,default:`"Cancel"`,description:`Label for the cancel action button.`,copyRule:`dismiss-label`})],ks.prototype,`cancelText`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Renders the confirm button in error/danger colors. Use for irreversible actions such as delete or remove.`})],ks.prototype,`destructive`,void 0),A([F({type:`boolean`,default:`false`,description:`Disables both action buttons. Set while performing an async action after a confirm event.`})],ks.prototype,`loading`,void 0),A([F({type:`boolean`,default:`false`,description:`Prevents the dialog from being closed via Escape, backdrop, or the close button.`})],ks.prototype,`persistent`,void 0),A([F({type:`boolean`,attribute:`show-close-button`,default:`true`,description:`Shows the close (X) button in the top-right corner.`})],ks.prototype,`showCloseButton`,void 0),A([F({type:`DialogSize`,options:Object.values(xo),default:xo.Small,description:`Maximum width of the dialog panel.`})],ks.prototype,`size`,void 0),A([yn(`quantic-dialog`)],ks.prototype,`innerDialog`,void 0),ks=A([I(`confirm`,{description:"Fired when the confirm button is clicked. Cancellable — call preventDefault() to keep the dialog open (e.g. while performing an async action with `loading`)."}),I(`cancel`,{description:`Fired when the dialog is dismissed via the cancel button, close button, Escape, or backdrop click.`}),R(`quantic-confirm-dialog`)],ks);var As=`important`,js=` !`+As,Ms=ur(class extends dr{constructor(e){if(super(e),e.type!==lr.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(js);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?As:``):n[e]=r}}return Jt}});function Ns(e){let t=Number.isFinite(e.minSize)?e.minSize:0,n=Number.isFinite(e.maxSize)?e.maxSize:100,r=xr(t,0,100),i=xr(n,0,100);return{min:Math.min(r,i),max:Math.max(r,i)}}function Ps(e,t){if(t){if(e===`ArrowUp`)return-1;if(e===`ArrowDown`)return 1}else{if(e===`ArrowLeft`)return-1;if(e===`ArrowRight`)return 1}return null}function Fs(e,t){return t.reduce((t,n,r)=>n.collapsed?t:t+e[r],0)}function Is(e,t,n){let{a:r,b:i,total:a}=n,o=Math.max(r.min,a-i.max),s=Math.min(r.max,a-i.min),c=xr(e+t,Math.min(o,s),Math.max(o,s));return[c,a-c]}function Ls(e,t){return e*t/100}function Rs(e,t){if(e.length!==t.length)return e;let n=Fs(e,t);return n===0?e.map(()=>0):e.map((e,r)=>t[r]?.collapsed?0:e/n*100)}var zs=e=>{if(e.endsWith(`%`)){let t=parseFloat(e);return{percent:isNaN(t)||t<0?0:t,flex:0}}let t=e===`*`?1:parseFloat(e);return{percent:0,flex:isNaN(t)||t<=0?1:t}},Bs={percent:0,flex:1};function Vs(e,t){if(t===0)return[];let n=e.trim().split(/\s+/).filter(Boolean),r=Array.from({length:t},(e,t)=>t<n.length?zs(n[t]):Bs),i=r.reduce((e,{percent:t})=>e+t,0),a=r.reduce((e,{flex:t})=>e+t,0),o=Math.max(0,100-i),s=r.map(({percent:e,flex:t})=>t===0?e:a>0?t/a*o:0),c=s.reduce((e,t)=>e+t,0);return c>0?s.map(e=>e/c*100):Array(t).fill(100/t)}var Hs=class extends z{render(){return qt`
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

    `}};Hs.styles=z.styles,Hs=A([R(`quantic-icon-lucide-eye`)],Hs);var Us=class extends z{render(){return qt`
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

    `}};Us.styles=z.styles,Us=A([R(`quantic-icon-lucide-eye-off`)],Us);var Ws={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`};Hs.ensureDefined(),Us.ensureDefined(),mr.ensureDefined();var Gs=class extends Va(L){focus(e){this.nativeInput?.focus(e)}constructor(){super(),this.value=``,this.type=`text`,this.name=``,this.placeholder=``,this.size=Ws.Medium,this.disabled=!1,this.required=!1,this.readOnly=!1,this.invalid=!1,this.autoComplete=`off`,this.showPassword=!1,this.internals=this.attachInternals()}togglePassword(){this.showPassword=!this.showPassword}get iconSize(){return Ka(this.size)}updated(e){e.has(`value`)&&(this.internals.setFormValue(this.value),this.updateValidity()),Tr(this,e,this.value)}forwardNative(e){let t=e.target;this.value=t.value,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}handleKeyDown(e){this.forwardNative(e),e.key===`Enter`&&this.internals.form?.requestSubmit()}dispatchValueChanged(e){this.value=e.target.value}formResetCallback(){this.value=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}updateValidity(){let e=this.shadowRoot?.querySelector(`input`);e&&this.internals.setValidity(e.validity,e.validationMessage,e)}render(){let e=fr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return M`
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
        ${this.type===`password`?M`<quantic-button
                class="password-toggle"
                variant="ghost"
                size="xs"
                icon
                type="button"
                ?disabled=${this.disabled||this.readOnly}
                aria-label=${this.showPassword?`Hide password`:`Show password`}
                @click=${this.togglePassword}
              >
                ${this.showPassword?M`<quantic-icon-lucide-eye-off
                        size=${this.iconSize}
                      ></quantic-icon-lucide-eye-off>`:M`<quantic-icon-lucide-eye
                        size=${this.iconSize}
                      ></quantic-icon-lucide-eye>`}
              </quantic-button>`:``}
        ${this.invalid?qa(this.size):``}
        ${this.invalid?``:M`<slot name="suffix"></slot>`}
      </div>
    `}};Gs.meta={tag:`quantic-text-input`,description:`Single-line text field with native form association. Wrap in quantic-field to add a visible label, hint text, and validation messaging. Use type="password" or type="email" to get browser-native input behaviour.`,category:`form`,avoidWhen:[{when:`the value is numeric with a min, max or step`,useInstead:`quantic-number-input`},{when:`the value is multi-line prose`,useInstead:`quantic-textarea`}],accessibility:{providedByComponent:[`form association`,`native input semantics and keyboard behaviour`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{prefix:{description:`Leading content (e.g. icon or currency symbol).`},suffix:{description:`Trailing content (e.g. icon or unit label).`}},parts:{input:{description:`The native input element.`}},relatedTo:[`quantic-field`,`quantic-number-input`,`quantic-select`]},Gs.formAssociated=!0,Gs.styles=[Xa(`text-input`,`5em`),j`
      .input:-webkit-autofill {
        -webkit-text-fill-color: var(--quantic-text-secondary);
        -webkit-box-shadow: 0 0 0px 1000px
          var(--quantic-component-text-input-bg, var(--quantic-bg-primary)) inset;
      }

      .password-toggle {
        margin-inline-start: var(--quantic-spacing-2);
      }
    `],A([F({type:`string`,default:``,description:`Current value of the input.`})],Gs.prototype,`value`,void 0),A([F({type:`string`,default:`text`,description:`Native input type.`})],Gs.prototype,`type`,void 0),A([F({type:`string`,description:`Name submitted with form data.`})],Gs.prototype,`name`,void 0),A([F({type:`string`,description:`Placeholder text shown when the field is empty.`,copyRule:`placeholder`})],Gs.prototype,`placeholder`,void 0),A([F({type:`TextInputSize`,options:Object.values(Ws),default:Ws.Medium,description:`Controls padding and font size.`})],Gs.prototype,`size`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],Gs.prototype,`disabled`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],Gs.prototype,`required`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Makes the field non-editable but still focusable and selectable.`})],Gs.prototype,`readOnly`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],Gs.prototype,`invalid`,void 0),A([F({type:`string`,default:`off`,reflect:!0,description:`Native autocomplete attribute passed to the inner <input>.`})],Gs.prototype,`autoComplete`,void 0),A([_n()],Gs.prototype,`showPassword`,void 0),A([yn(`input`)],Gs.prototype,`nativeInput`,void 0),Gs=A([I(`value-changed`,{description:`Fired whenever the value changes, from user input or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),I(`input`,{forwarded:!0}),I(`change`,{forwarded:!0}),I(`focus`,{forwarded:!0}),I(`blur`,{forwarded:!0}),I(`keydown`,{forwarded:!0}),I(`keyup`,{forwarded:!0}),I(`keypress`,{forwarded:!0}),R(`quantic-text-input`)],Gs);var Ks={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},qs=class extends Va(L){constructor(){super(...arguments),this.options=[],this.value=``,this.name=``,this.placeholder=``,this.size=Ks.Medium,this.disabled=!1,this.required=!1,this.invalid=!1,this._selectRef=$r(),this._slottedOptions=[]}dispatchValueChanged(e){this.value=e.target.value}openDropdown(e){if(!this.disabled){e.stopPropagation();let t=this._selectRef.value;t?.showPicker(),t?.click(),t?.focus()}}updated(e){if(e.has(`value`)){let e=this._selectRef.value,t=this.options.find(([,e])=>e===this.value);e&&t&&(e.value=t[1])}Tr(this,e,this.value)}forwardNative(e){this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}handleSlotChange(e){let t=e.target.assignedElements({flatten:!0});this._slottedOptions=t.filter(e=>e.tagName===`OPTION`),this.requestUpdate()}render(){let e=fr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return M`
      <slot @slotchange=${this.handleSlotChange} style="display: none"></slot>
      <div class="${e}">
        <slot name="prefix"></slot>
        <select
          ${ni(this._selectRef)}
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
          ${!this.value&&this.placeholder?M`<option value="">${this.placeholder}</option>`:null}
          ${this.options.length>0?this.options.map(([e,t])=>M`<option value=${t}>${e}</option>`):this._slottedOptions.length>0?this._slottedOptions.map(e=>M`<option value=${e.value} ?selected=${e.selected}>${e.textContent}</option>`):M`<option value="" disabled>No options available</option>`}
        </select>
        ${this.invalid?qa(this.size):M`<slot name="suffix"
                >${Ja(this.size,{click:this.openDropdown})}</slot
              >`}
      </div>
    `}};qs.meta={tag:`quantic-select`,description:`Dropdown select input backed by a native <select>. Form-associated. Pass options via the options prop or slot native <option> elements.`,category:`form`,avoidWhen:[{when:`the option set is large enough to need filtering`,useInstead:`quantic-combobox`}],accessibility:{providedByComponent:[`native select semantics and keyboard behaviour`,`form association`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},slots:{"":{description:`Native option elements, read to build the list. Never rendered directly.`},prefix:{description:`Leading content (e.g. icon).`},suffix:{description:`Trailing content, replacing the default chevron.`}},relatedTo:[`quantic-field`,`quantic-text-input`]},qs.styles=[Xa(`select`,`6em`),j`
      .main {
        line-height: var(--quantic-line-height-body-md);
      }
    `],A([F({type:`Option<T>[]`,default:`[]`,description:`Array of [label, value] tuples. Alternatively, slot native <option> elements.`})],qs.prototype,`options`,void 0),A([F({type:`string`,default:``,reflect:!0,description:`Currently selected value.`})],qs.prototype,`value`,void 0),A([F({type:`string`,description:`Name submitted with form data.`})],qs.prototype,`name`,void 0),A([F({type:`string`,description:`Placeholder option shown when no value is selected.`,copyRule:`placeholder`})],qs.prototype,`placeholder`,void 0),A([F({type:`SelectSize`,options:Object.values(Ks),default:Ks.Medium,description:`Controls padding and font size.`})],qs.prototype,`size`,void 0),A([F({type:`boolean`,default:`false`,description:`Prevents interaction.`})],qs.prototype,`disabled`,void 0),A([F({type:`boolean`,default:`false`,description:`Marks the field as required for form validation.`})],qs.prototype,`required`,void 0),A([F({type:`boolean`,default:`false`,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],qs.prototype,`invalid`,void 0),qs=A([I(`value-changed`,{description:`Fired whenever the value changes, from user selection or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),I(`focus`,{forwarded:!0}),I(`blur`,{forwarded:!0}),R(`quantic-select`)],qs);var Js=class extends z{render(){return qt`
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

    `}};Js.styles=z.styles,Js=A([R(`quantic-icon-lucide-chevron-up`)],Js);var Ys=class extends z{render(){return qt`
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

    `}};Ys.styles=z.styles,Ys=A([R(`quantic-icon-lucide-panel-left-close`)],Ys);var Xs=class extends z{render(){return qt`
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

    `}};Xs.styles=z.styles,Xs=A([R(`quantic-icon-lucide-panel-left-open`)],Xs);var Zs=class extends z{render(){return qt`
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

    `}};Zs.styles=z.styles,Zs=A([R(`quantic-icon-lucide-pencil`)],Zs);var Qs=class extends z{render(){return qt`
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

    `}};Qs.styles=z.styles,Qs=A([R(`quantic-icon-lucide-search`)],Qs),Zs.ensureDefined();var $s=class extends L{constructor(){super(...arguments),this.label=``,this.active=!1,this.invalid=!1,this.handleActivateClick=()=>{this.active||this.activate()},this.handleTriggerKey=e=>{this.active||e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),e.stopPropagation(),this.activate())},this.handleKeyDown=e=>{this.active&&e.key===`Escape`&&(this.deactivate(!0),this.dispatchEvent(new CustomEvent(`cancel`,{bubbles:!0,composed:!0})))},this.handleFocusOut=e=>{this.active&&!this.invalid&&(this.contains(e.relatedTarget)||this.shadowRoot?.contains(e.relatedTarget)||this.deactivate())}}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`focusout`,this.handleFocusOut)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`focusout`,this.handleFocusOut)}activate(){this.active=!0,this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(`slot[name="editor"]`)?.assignedElements()[0];(e?.shadowRoot?.querySelector(`input, textarea, select, [tabindex]:not([tabindex="-1"])`)??e)?.focus()})}deactivate(e=!1){this.active=!1,e&&this.updateComplete.then(()=>{this.renderRoot.querySelector(`.row`)?.focus()})}render(){let e=!!this.label;return M`
      <div
        class="${fr({row:!0,"is-active":this.active})}"
        role="${this.active?`group`:`button`}"
        tabindex="${this.active?`-1`:`0`}"
        @click=${this.handleActivateClick}
        @keydown=${this.handleTriggerKey}
      >
        <span class=${fr({label:!0,"is-empty":!e})}
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
              size=${_r.ExtraSmall}
            ></quantic-icon-lucide-pencil>
          </span>
        </span>
      </div>
    `}};$s.meta={tag:`quantic-inline-edit`,description:`Inline editable field that displays as static text and transitions to an input on click or keyboard activation. Fires a cancel event on Escape so consumers can revert optimistic state.`,category:`form`,accessibility:{providedByComponent:[`Escape cancels`,`focus returned after commit or cancel`],requiredFromConsumer:[`a label naming the value being edited`]},slots:{label:{description:`Optional label displayed to the left of the value.`,copyRule:`field-label`},display:{description:`Static display value shown when not active.`},editor:{description:`Input element shown when the field is active.`}}},$s.styles=[j`
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
  `,Xn(`label`,j`
    .label.is-empty {
      display: revert;
    }
  `)],A([F({type:`string`,default:``,description:`Fallback label text when no label slot content is provided.`,copyRule:`field-label`})],$s.prototype,`label`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`When true, the editor slot is visible and the display is hidden.`})],$s.prototype,`active`,void 0),A([F({type:`boolean`,default:`false`,description:`When true, focusout does not close the editor. The editor stays open until the value is valid or the user cancels.`})],$s.prototype,`invalid`,void 0),$s=A([I(`cancel`,{description:`Fired on Escape. Consumer should revert optimistic state.`}),R(`quantic-inline-edit`)],$s);var ec={MAX_LINES:1e4,FOLLOW_SCROLL_THRESHOLD:50},tc=[`log-black`,`log-danger`,`log-success`,`log-warning`,`log-blue`,`log-magenta`,`log-info`,`log-white`,`log-gray`,`log-danger`,`log-success`,`log-warning`,`log-blue`,`log-magenta`,`log-info`,`log-white`],nc=[`#1c1c1c`,`#8b0000`,`#006400`,`#808000`,`#00008b`,`#800080`,`#008b8b`,`#a9a9a9`,`#404040`,`#ff4444`,`#44ff44`,`#ffff44`,`#4444ff`,`#ff44ff`,`#44ffff`,`#ffffff`],rc=e=>e===0?0:55+e*40,ic=e=>{let t=e-16,n=Math.floor(t/36),r=Math.floor(t%36/6),i=t%6;return`rgb(${rc(n)},${rc(r)},${rc(i)})`},ac=e=>{let t=8+(e-232)*10;return`rgb(${t},${t},${t})`},oc=e=>e<232?ic(e):ac(e),sc=[`fgClass`,`fgRgb`,`bgColor`,`bold`,`dim`,`italic`,`underline`],cc=()=>({fgClass:null,fgRgb:null,bgColor:null,bold:!1,dim:!1,italic:!1,underline:!1}),lc=e=>({...e,fgClass:null,fgRgb:null}),uc=(e,t)=>t<16?{...e,fgClass:tc[t],fgRgb:null}:{...e,fgClass:null,fgRgb:oc(t)},dc=(e,t)=>({...e,bgColor:t<16?nc[t]:oc(t)}),fc=(e,t=0)=>({state:e,skip:t}),pc=e=>t=>fc({...t,...e}),mc=e=>t=>fc(e(t)),hc=(e,{params:t,index:n})=>{let r=t[n+1];return r===5&&n+2<t.length?fc(uc(e,t[n+2]),2):r===2&&n+4<t.length?fc({...e,fgClass:null,fgRgb:`rgb(${t[n+2]},${t[n+3]},${t[n+4]})`},4):fc(e)},gc=(e,{params:t,index:n})=>{let r=t[n+1];return r===5&&n+2<t.length?fc(dc(e,t[n+2]),2):r===2&&n+4<t.length?fc({...e,bgColor:`rgb(${t[n+2]},${t[n+3]},${t[n+4]})`},4):fc(e)},_c=e=>t=>fc({...t,fgClass:tc[e],fgRgb:null}),vc=e=>t=>fc({...t,bgColor:nc[e]}),yc={0:()=>fc(cc()),1:pc({bold:!0}),2:pc({dim:!0}),3:pc({italic:!0}),4:pc({underline:!0}),22:pc({bold:!1,dim:!1}),23:pc({italic:!1}),24:pc({underline:!1}),38:hc,39:mc(lc),48:gc,49:pc({bgColor:null})},bc=e=>yc[e]||(e>=30&&e<=37?_c(e-30):e>=40&&e<=47?vc(e-40):e>=90&&e<=97?_c(e-90+8):e>=100&&e<=107?vc(e-100+8):e=>fc(e)),xc=e=>e===``?[0]:e.split(`;`).map(Number),Sc=(e,t)=>t.reduce(e=>{if(e.index>=t.length)return e;let n=t[e.index],{state:r,skip:i}=bc(n)(e.state,{params:t,index:e.index});return{state:r,index:e.index+1+i}},{state:e,index:0}).state,Cc=(e,t)=>Sc(e,xc(t));function wc(e){let{fgClass:t,fgRgb:n,bgColor:r,bold:i,dim:a,italic:o,underline:s}=e;return t===null&&n===null&&r===null&&!i&&!a&&!o&&!s}function Tc(e){let t=[...e.matchAll(/\x1b\[([0-9;]*)m/g)].reduce((t,n)=>{let r=e.slice(t.cursor,n.index);return{segments:r?[...t.segments,{text:r,state:t.state}]:t.segments,state:Cc(t.state,n[1]),cursor:n.index+n[0].length}},{segments:[],state:cc(),cursor:0}),n=e.slice(t.cursor);return n?[...t.segments,{text:n,state:t.state}]:t.segments}var Ec=e=>e.map(e=>e.text).join(``),Dc=/^\[(?:info|ok|warn|error|debug)\]$/i;function Oc(e){if(e.length<2)return null;let[t,...n]=e;if(!Dc.test(t.text))return null;let r=n.map(e=>({...e,state:{...e.state}})),i=r[0];return i&&(r[0]={...i,text:i.text.replace(/^\s+/,``)}),{tag:t,body:r}}var kc=(e,t)=>sc.every(n=>e[n]===t[n]),Ac=(e,t,n)=>{let r=Array(e).fill(`none`);return t.forEach(({start:e,end:t})=>r.fill(`hit`,e,t)),n&&r.fill(`active`,n.start,n.end),r},jc=(e,t)=>{let n=[],r=Math.max(t.length,1);for(let i=e.indexOf(t);i!==-1;i=e.indexOf(t,i+r))n.push({start:i,end:i+t.length});return n};function Mc(e,t){let n=t.trim();return n?jc(e.toLowerCase(),n.toLowerCase()):[]}function Nc(e,t){return e.flatMap((e,n)=>Mc(Ec(e),t).map(({start:e,end:t})=>({lineIndex:n,start:e,end:t})))}var Pc=e=>e.map((t,n)=>e.slice(0,n).reduce((e,t)=>e+t.text.length,0)),Fc=e=>{let t=Pc(e);return e.flatMap((e,n)=>e.text.split(``).map((r,i)=>({char:r,state:e.state,pos:t[n]+i})))},Ic=e=>e.reduce((e,t)=>{let n=e[e.length-1];return n&&n.highlight===t.highlight&&kc(n.state,t.state)?e[e.length-1]={...n,text:n.text+t.text}:e.push(t),e},[]);function Lc(e,t,n){if(!t.length)return e.map(e=>({...e,highlight:`none`}));let r=Fc(e),i=Ac(r.length,t,n);return Ic(r.map(({char:e,state:t,pos:n})=>({text:e,state:t,highlight:i[n]})))}var Rc=class extends L{constructor(){super(...arguments),this.parsed=[],this.lineIndex=0,this.searchQuery=``,this.activeMatch=null,this.lineNumber=0}scrollActiveMatchIntoView(){this.renderRoot.querySelector(`.log-search-active`)?.scrollIntoView({block:`nearest`,inline:`nearest`})}renderSegment({text:e,state:t}){if(wc(t))return e;let n={"log-bold":t.bold,"log-dim":t.dim,"log-italic":t.italic,"log-underline":t.underline};return t.fgClass&&(n[t.fgClass]=!0),M`<span
      class=${fr(n)}
      style=${Ms({color:t.fgRgb,background:t.bgColor})}
      >${e}</span
    >`}renderSearchSlice(e){let t=this.renderSegment({text:e.text,state:e.state});return e.highlight===`none`?t:M`<mark
      class=${fr({"log-search-hit":e.highlight===`hit`,"log-search-active":e.highlight===`active`})}
      >${t}</mark
    >`}get showLineNumber(){return this.lineNumber>0}renderLineNumber(){return this.showLineNumber?M`<span class="line-number">${this.lineNumber}</span>`:null}renderPlainContent(e){return M`<span class="log-line">${e.map(e=>this.renderSegment(e))}</span>`}renderLeveledContent(e){return M`<span class="log-level-tag">${this.renderSegment(e.tag)}</span
      ><span class="log-level-body">${e.body.map(e=>this.renderSegment(e))}</span>`}renderSearchContent(e){let t=this.searchQuery.trim(),n=Mc(Ec(e),t),r=this.activeMatch;return M`<span class="log-line">${Lc(e,n,r&&r.lineIndex===this.lineIndex?{start:r.start,end:r.end}:null).map(e=>this.renderSearchSlice(e))}</span>`}willUpdate(){let e=this.searchQuery.trim()?null:Oc(this.parsed);this.toggleAttribute(`leveled`,!!e)}render(){let e=this.parsed,t=this.searchQuery.trim(),n=t?null:Oc(e);return n?M`${this.renderLineNumber()}${this.renderLeveledContent(n)}`:t?M`${this.renderLineNumber()}${this.renderSearchContent(e)}`:M`${this.renderLineNumber()}${this.renderPlainContent(e)}`}};Rc.meta={tag:`quantic-log-output-line`,description:`Single rendered row within quantic-log-output. Applies ANSI styling, optional level-tag layout, and in-buffer search highlights.`,category:`display`,subComponentOf:`quantic-log-output`,relatedTo:[`quantic-log-output`]},Rc.styles=j`
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
  `,A([F({type:`AnsiSegment[]`,default:`[]`,attribute:!1,description:`Parsed ANSI segments for this buffer line.`})],Rc.prototype,`parsed`,void 0),A([F({type:`number`,default:`0`,attribute:`line-index`,description:`Zero-based index of this line in the parent buffer.`})],Rc.prototype,`lineIndex`,void 0),A([F({type:`string`,default:``,attribute:!1,description:`Current search query from the parent log viewer.`})],Rc.prototype,`searchQuery`,void 0),A([F({type:`{ lineIndex: number; start: number; end: number } | null`,default:`null`,attribute:!1,description:`Active search match in the buffer, if any.`})],Rc.prototype,`activeMatch`,void 0),A([F({type:`number`,default:`0`,attribute:`line-number`,description:`When greater than zero, shows this ordinal beside the row.`})],Rc.prototype,`lineNumber`,void 0),Rc=A([R(`quantic-log-output-line`)],Rc),_o.ensureDefined(),vo.ensureDefined(),mr.ensureDefined(),Gs.ensureDefined(),Qs.ensureDefined(),Js.ensureDefined(),Ua.ensureDefined(),Mr.ensureDefined();var zc=class extends L{constructor(){super(...arguments),this.value=``,this.matchCount=0,this.activeMatchIndex=0,this.open=!1}updated(e){e.has(`open`)&&this.open&&this.focusSearchInput()}showSearch(){this.open?this.focusSearchInput():this.openSearch()}focusSearchInput(){this.updateComplete.then(()=>{let e=this.inputEl;e&&e.updateComplete.then(()=>e.focus())})}get matchLabel(){return this.matchCount?`${Math.min(this.activeMatchIndex+1,this.matchCount)} / ${this.matchCount}`:`0 / 0`}emitValue(e){this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:e},bubbles:!0,composed:!0}))}emitOpen(e){this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:e},bubbles:!0,composed:!0}))}openSearch(){this.open=!0,this.emitOpen(!0)}closeSearch(){this.open=!1,this.emitOpen(!1),this.emitValue(``)}handleToggleOpen(){this.open?this.closeSearch():this.openSearch()}handleValueChanged(e){e.stopPropagation(),this.emitValue(e.detail.value)}handleKeydown(e){e.key===`Escape`?(e.preventDefault(),this.closeSearch()):e.key===`Enter`&&(e.preventDefault(),this.dispatchEvent(new CustomEvent(e.shiftKey?`previous-match`:`next-match`,{bubbles:!0,composed:!0})))}handlePreviousMatch(){this.dispatchEvent(new CustomEvent(`previous-match`,{bubbles:!0,composed:!0}))}handleNextMatch(){this.dispatchEvent(new CustomEvent(`next-match`,{bubbles:!0,composed:!0}))}render(){return this.open?M`
      <quantic-text-input
        type="search"
        size=${Ws.ExtraSmall}
        placeholder="Search"
        aria-label="Search log"
        .value=${this.value}
        @value-changed=${this.handleValueChanged}
        @keydown=${this.handleKeydown}
      ></quantic-text-input>
      <span class="count" aria-live="polite">${this.matchLabel}</span>
      <quantic-button-bar size=${uo.ExtraSmall} aria-label="Search match navigation">
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
    `:M`
        <quantic-button
          icon
          size=${sr.ExtraSmall}
          variant="outline"
          aria-label="Search log"
          @click=${this.handleToggleOpen}
        >
          <quantic-icon-lucide-search size="xxs"></quantic-icon-lucide-search>
        </quantic-button>
      `}};zc.meta={tag:`quantic-log-output-search`,description:`Floating search control for quantic-log-output. Collapsed to a search icon; expanded to a query field with match navigation.`,category:`display`,subComponentOf:`quantic-log-output`,relatedTo:[`quantic-log-output`,`quantic-text-input`,`quantic-button-bar`]},zc.styles=j`
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
  `,A([F({type:`string`,default:``,description:`Current search query.`})],zc.prototype,`value`,void 0),A([F({type:`number`,default:`0`,attribute:`match-count`,description:`Total matches in the log buffer.`})],zc.prototype,`matchCount`,void 0),A([F({type:`number`,default:`0`,attribute:`active-match-index`,description:`Zero-based index of the highlighted match.`})],zc.prototype,`activeMatchIndex`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Whether the search field is expanded.`})],zc.prototype,`open`,void 0),A([yn(`quantic-text-input`)],zc.prototype,`inputEl`,void 0),zc=A([I(`value-changed`,{description:`Fired when the search query changes, including when cleared on close.`,detail:`{ value: string }`}),I(`previous-match`,{description:`Fired when the user activates the previous-match control.`}),I(`next-match`,{description:`Fired when the user activates the next-match control.`}),I(`open-changed`,{description:`Fired when the overlay expands or collapses.`,detail:`{ open: boolean }`}),R(`quantic-log-output-search`)],zc),bo.ensureDefined(),zc.ensureDefined(),Rc.ensureDefined();var Bc=class extends L{constructor(){super(...arguments),this.follow=!0,this.followLabel=`Follow`,this.lineNumbers=!1,this.maxLines=ec.MAX_LINES,this.searchable=!0,this.lineBuffer=[],this.searchQuery=``,this.activeMatchIndex=0,this.resizeObserver=null,this.handleScroll=()=>{let{scrollTop:e,scrollHeight:t,clientHeight:n}=this.outputEl;this.follow=!(t-e-n>ec.FOLLOW_SCROLL_THRESHOLD)}}get lines(){return this.lineBuffer.map(e=>e.raw)}set lines(e){this.lineBuffer=this.clampToMax(e.map(e=>({raw:e,parsed:Tc(e)})))}get isSearchActive(){return this.searchable&&this.searchQuery.trim().length>0}get effectiveSearchQuery(){return this.searchable?this.searchQuery:``}get searchMatches(){return Nc(this.lineBuffer.map(e=>e.parsed),this.searchQuery)}get activeMatch(){let e=this.searchMatches;return e.length?e[Math.min(Math.max(this.activeMatchIndex,0),e.length-1)]??null:null}firstUpdated(){this.outputEl.addEventListener(`scroll`,this.handleScroll),this.resizeObserver=new ResizeObserver(()=>{this.follow&&!this.isSearchActive&&this.scrollToBottom()}),this.resizeObserver.observe(this.outputEl)}updated(e){if(e.has(`maxLines`)&&(this.lineBuffer=this.clampToMax(this.lineBuffer)),e.has(`searchable`)&&!this.searchable&&(this.searchQuery=``,this.activeMatchIndex=0),e.has(`searchQuery`)&&(this.activeMatchIndex=0),e.has(`lineBuffer`)||e.has(`searchQuery`)){let e=this.searchMatches.length;e===0?this.activeMatchIndex=0:this.activeMatchIndex>=e&&(this.activeMatchIndex=e-1)}this.follow&&!this.isSearchActive&&this.scrollToBottom(),this.isSearchActive&&(e.has(`activeMatchIndex`)||e.has(`lineBuffer`)||e.has(`searchQuery`))&&this.scrollActiveMatchIntoView()}disconnectedCallback(){super.disconnectedCallback(),this.outputEl?.removeEventListener(`scroll`,this.handleScroll),this.resizeObserver?.disconnect(),this.resizeObserver=null}appendLine(e){this.lineBuffer=this.clampToMax([...this.lineBuffer,{raw:e,parsed:Tc(e)}])}clampToMax(e){return e.length>this.maxLines?e.slice(-this.maxLines):e}renderLineRows(){let e=this.activeMatch;return this.lineBuffer.map(({parsed:t},n)=>M`<quantic-log-output-line
        .parsed=${t}
        .lineIndex=${n}
        .searchQuery=${this.effectiveSearchQuery}
        .activeMatch=${e}
        .lineNumber=${this.lineNumbers?n+1:0}
      ></quantic-log-output-line>`)}scrollToBottom(){this.outputEl.scrollTop=this.outputEl.scrollHeight}scrollActiveMatchIntoView(){requestAnimationFrame(()=>{let e=this.activeMatch;e&&(this.outputEl?.querySelector(`quantic-log-output-line[line-index="${e.lineIndex}"]`))?.scrollActiveMatchIntoView()})}handleFollowChange(e){this.follow=e.detail.checked,this.follow&&this.scrollToBottom()}handleSearchValueChanged(e){this.searchQuery=e.detail.value}handleOutputKeydown(e){this.searchable&&e.key===`f`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),this.searchEl?.showSearch())}goToPreviousMatch(){let e=this.searchMatches.length;e&&(this.activeMatchIndex=(this.activeMatchIndex-1+e)%e)}goToNextMatch(){let e=this.searchMatches.length;e&&(this.activeMatchIndex=(this.activeMatchIndex+1)%e)}render(){let e=this.searchMatches.length;return M`
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
        ${this.searchable?M`<quantic-log-output-search
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
    `}};Bc.meta={tag:`quantic-log-output`,description:`Scrollable terminal-style log viewer that renders ANSI-coloured text with optional line numbers. Accepts lines as a property array or via appendLine(). A follow checkbox auto-scrolls to the latest line. When searchable, an overlay search control finds text in the log buffer.`,category:`display`,accessibility:{providedByComponent:[`live region for appended output`,`a follow toggle so announcements can be stopped`,`in-log search with match navigation when searchable`],requiredFromConsumer:[`a followLabel describing what following does`]},slots:{toolbar:{description:`Additional controls placed in the toolbar next to the follow checkbox.`}}},Bc.styles=j`
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
  `,A([F({type:`boolean`,default:`true`,reflect:!0,description:`When true, the output automatically scrolls to the latest line.`})],Bc.prototype,`follow`,void 0),A([F({type:`string`,default:`Follow`,attribute:`follow-label`,description:`Label text for the follow toggle checkbox.`,copyRule:`toggle-effect-label`})],Bc.prototype,`followLabel`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,attribute:`line-numbers`,description:`When true, prepends line numbers to each row.`})],Bc.prototype,`lineNumbers`,void 0),A([F({type:`number`,default:String(ec.MAX_LINES),attribute:`max-lines`,description:`Maximum number of lines retained in the buffer. Older lines are dropped when the limit is exceeded.`})],Bc.prototype,`maxLines`,void 0),A([F({type:`boolean`,default:`true`,reflect:!0,description:`When true, shows in-log search and highlights matches. Set to false to omit search UI and keyboard shortcut.`})],Bc.prototype,`searchable`,void 0),A([_n()],Bc.prototype,`lineBuffer`,void 0),A([_n()],Bc.prototype,`searchQuery`,void 0),A([_n()],Bc.prototype,`activeMatchIndex`,void 0),A([yn(`.output`)],Bc.prototype,`outputEl`,void 0),A([yn(`quantic-log-output-search`)],Bc.prototype,`searchEl`,void 0),Bc=A([R(`quantic-log-output`)],Bc);var Vc=yr,Hc={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`,ExtraLarge:`xl`},Uc=class extends L{constructor(){super(...arguments),this.size=Hc.Medium,this.label=`Loading`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`status`)}render(){return M`
      <div
        class=${fr({sizer:!0,[`size--${this.size}`]:!0,[`color--${this.color}`]:!!this.color})}
        aria-hidden="true"
      >
        <div class="ring"></div>
      </div>
      <span class="sr-only">${this.label}</span>
    `}};Uc.meta={tag:`quantic-spinner`,description:`Animated loading indicator. No content — purely visual feedback for in-progress states. Renders a role="status" host with a visually hidden accessible label.`,category:`feedback`,accessibility:{providedByComponent:[`role=status with visually hidden text`],requiredFromConsumer:[`a label naming what is loading`]}},Uc.styles=j`
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

    ${st(Sr(e=>`--quantic-internal-spinner-color: var(--quantic-utility-${e}-500);`))}

    .color--brand {
      --quantic-internal-spinner-color: var(--quantic-fg-brand-primary);
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `,A([F({type:`SpinnerSize`,options:Object.values(Hc),default:Hc.Medium,description:`Diameter of the spinner ring.`})],Uc.prototype,`size`,void 0),A([F({type:`SpinnerColor`,options:Object.values(Vc),description:`Overrides the ring color. Defaults to currentColor.`})],Uc.prototype,`color`,void 0),A([F({type:`string`,default:`Loading`,description:`Visually hidden text announced by screen readers.`,copyRule:`status-label`})],Uc.prototype,`label`,void 0),Uc=A([R(`quantic-spinner`)],Uc);var Wc=class extends L{constructor(){super(...arguments),this.direction=`horizontal`,this.resizable=!1,this.split=``,this.collapseBelow=`640px`,this.panes=[],this.sizes=[],this.mutationObserver=null,this.collapsedObserver=null,this.resizeObserver=null,this.dragInfo=null,this.handlePointerMove=e=>{if(!this.dragInfo)return;let t=this.direction===`vertical`?this.wrapper.clientHeight:this.wrapper.clientWidth;if(t===0)return;let{dividerIndex:n,startX:r,startY:i,startLayoutA:a,startLayoutB:o}=this.dragInfo,s=this.panes[n-1],c=this.panes[n],[l,u]=Is(a,(this.direction===`vertical`?e.clientY-i:e.clientX-r)/t*100,{a:Ns(s),b:Ns(c),total:a+o}),d=[...this.sizes];d[n-1]=Ls(l,this.dragInfo.activeSizesSum),d[n]=Ls(u,this.dragInfo.activeSizesSum),this.sizes=d,this.applySizes()},this.handlePointerUp=()=>{this.dragInfo&&(this.renderRoot.querySelectorAll(`.divider.dragging`).forEach(e=>{e.classList.remove(`dragging`)}),this.removeEventListener(`pointermove`,this.handlePointerMove),this.removeEventListener(`pointerup`,this.handlePointerUp),this.removeEventListener(`pointercancel`,this.handlePointerUp),this.dragInfo=null,this.dispatchEvent(new CustomEvent(`resize`,{bubbles:!0,composed:!0,detail:{sizes:this.sizes}})))}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.discoverPanes()),this.mutationObserver.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.collapsedObserver?.disconnect(),this.resizeObserver?.disconnect(),this.dragInfo&&=(this.removeEventListener(`pointermove`,this.handlePointerMove),this.removeEventListener(`pointerup`,this.handlePointerUp),this.removeEventListener(`pointercancel`,this.handlePointerUp),null)}firstUpdated(){this.discoverPanes(),this.setupResizeObserver()}updated(e){super.updated(e),e.has(`split`)&&(this.sizes=Vs(this.split,this.panes.length),this.applySizes()),(e.has(`collapseBelow`)||e.has(`direction`))&&this.checkStacked()}discoverPanes(){let e=Array.from(this.querySelectorAll(`:scope > quantic-splitter-pane`));e.forEach((e,t)=>{let n=`pane-${t}`;e.getAttribute(`slot`)!==n&&e.setAttribute(`slot`,n)}),this.panes.forEach(t=>{e.includes(t)||(t.removeAttribute(`slot`),t.removeAttribute(`stacked`))});let t=this.panes.length;this.panes=e,e.length!==t&&(this.sizes=Vs(this.split,e.length)),this.setupCollapsedObserver(),this.applySizes()}setupCollapsedObserver(){this.collapsedObserver?.disconnect(),this.panes.length!==0&&(this.collapsedObserver=new MutationObserver(()=>{this.panes=[...this.panes],this.applySizes()}),this.panes.forEach(e=>{this.collapsedObserver.observe(e,{attributes:!0,attributeFilter:[`collapsed`]})}))}setupResizeObserver(){this.wrapper&&(this.resizeObserver=new ResizeObserver(e=>{let t=e[0];t&&this.checkStackedForSize(t.contentRect.width)}),this.resizeObserver.observe(this.wrapper))}checkStacked(){this.wrapper&&this.checkStackedForSize(this.wrapper.clientWidth)}checkStackedForSize(e){let t=(this.collapseBelow??``).trim(),n=t.endsWith(`px`)?parseFloat(t):NaN;if(this.direction!==`vertical`&&!Number.isFinite(n))return;let r=this.direction!==`vertical`&&e<=n;this.toggleAttribute(`stacked`,r),this.panes.forEach(e=>e.toggleAttribute(`stacked`,r))}applySizes(){let e=Rs(this.sizes,this.panes);this.panes.forEach((t,n)=>{t.style.setProperty(`--quantic-component-splitter-pane-flex-grow`,String(e[n]))}),this.renderRoot.querySelectorAll(`[part="divider"]`).forEach((t,n)=>{t.setAttribute(`aria-valuenow`,String(Math.round(e[n])))})}dividerEffectiveBounds(e,t){let n=Ns(this.panes[e-1]),r=Ns(this.panes[e]),i=t[e-1]+t[e];return{min:Math.max(n.min,i-r.max),max:Math.min(n.max,i-r.min)}}isDividerDisabled(e){return!this.resizable||(this.panes[e-1]?.collapsed??!1)||(this.panes[e]?.collapsed??!1)}isDividerHidden(e){return(this.panes[e-1]?.hasAttribute(`collapsed`)??!1)||(this.panes[e]?.hasAttribute(`collapsed`)??!1)}handleDividerPointerDown(e,t){e.preventDefault();let n=e.currentTarget;n.setPointerCapture(e.pointerId),n.classList.add(`dragging`);let r=Rs(this.sizes,this.panes),i=Fs(this.sizes,this.panes);this.dragInfo={dividerIndex:t,startX:e.clientX,startY:e.clientY,startLayoutA:r[t-1],startLayoutB:r[t],activeSizesSum:i},this.addEventListener(`pointermove`,this.handlePointerMove),this.addEventListener(`pointerup`,this.handlePointerUp),this.addEventListener(`pointercancel`,this.handlePointerUp)}handleDividerKeyDown(e,t){let n=Ps(e.key,this.direction===`vertical`);if(n===null)return;e.preventDefault();let r=Rs(this.sizes,this.panes),[i,a]=Is(r[t-1],n,{a:Ns(this.panes[t-1]),b:Ns(this.panes[t]),total:r[t-1]+r[t]}),o=Fs(this.sizes,this.panes),s=[...this.sizes];s[t-1]=Ls(i,o),s[t]=Ls(a,o),this.sizes=s,this.applySizes(),this.dispatchEvent(new CustomEvent(`resize`,{bubbles:!0,composed:!0,detail:{sizes:this.sizes}}))}render(){let e=Rs(this.sizes,this.panes);return M`
      <div
        class=${fr({wrapper:!0,"direction--horizontal":this.direction===`horizontal`,"direction--vertical":this.direction===`vertical`})}
      >
        ${this.panes.map((t,n)=>{let r=n>0?this.dividerEffectiveBounds(n,e):null;return M`${n>0&&!this.isDividerHidden(n)?M`<div
                    class=${fr({divider:!0,disabled:this.isDividerDisabled(n)})}
                    part="divider"
                    role="separator"
                    tabindex=${this.isDividerDisabled(n)?N:`0`}
                    aria-orientation=${this.direction===`vertical`?`horizontal`:`vertical`}
                    aria-valuenow=${Math.round(e[n-1])}
                    aria-valuemin=${Math.round(r.min)}
                    aria-valuemax=${Math.round(r.max)}
                    @pointerdown=${e=>this.handleDividerPointerDown(e,n)}
                    @keydown=${e=>this.handleDividerKeyDown(e,n)}
                  ></div>`:N}<slot name="pane-${n}"></slot>`})}
      </div>
    `}};Wc.meta={tag:`quantic-splitter-group`,description:`Resizable panel container — renders two or more panes separated by draggable dividers. Collapses to a stacked layout below the collapse-below breakpoint.`,category:`layout`,accessibility:{providedByComponent:[`separator roles`,`keyboard resize`,`roving tabindex across the handles`],requiredFromConsumer:[`an accessible name for each pane`]},slots:{"":{description:`Two or more quantic-splitter-pane elements.`}},parts:{divider:{description:`The draggable handle between two panes.`}}},Wc.styles=j`
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
  `,A([F({type:`"horizontal" | "vertical"`,default:`horizontal`,description:`Axis along which panes are split.`})],Wc.prototype,`direction`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Enables draggable dividers for interactive resizing.`})],Wc.prototype,`resizable`,void 0),A([F({type:`string`,description:`Comma-separated initial size percentages, e.g. "30,70". Equal split when omitted.`})],Wc.prototype,`split`,void 0),A([F({attribute:`collapse-below`,type:`string`,default:`640px`,description:`Pixel breakpoint below which panes stack vertically instead of side-by-side.`})],Wc.prototype,`collapseBelow`,void 0),A([yn(`.wrapper`)],Wc.prototype,`wrapper`,void 0),A([_n()],Wc.prototype,`panes`,void 0),Wc=A([R(`quantic-splitter-group`)],Wc);var Gc=class extends L{constructor(){super(...arguments),this.collapsed=!1,this.minSize=10,this.maxSize=90,this.variant=`default`}render(){return M`<slot></slot>`}};Gc.meta={tag:`quantic-splitter-pane`,description:`Individual resizable pane within a quantic-splitter-group. Set min-size and max-size to constrain how far it can be dragged.`,category:`layout`,subComponentOf:`quantic-splitter-group`,slots:{"":{description:`Pane content.`}},relatedTo:[`quantic-splitter-group`]},Gc.styles=j`
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
  `,A([F({type:`boolean`,default:`false`,reflect:!0,description:`Collapses the pane to zero size, hiding its content.`})],Gc.prototype,`collapsed`,void 0),A([F({type:`number`,default:`10`,attribute:`min-size`,description:`Minimum size as a percentage of the splitter container.`})],Gc.prototype,`minSize`,void 0),A([F({type:`number`,default:`90`,attribute:`max-size`,description:`Maximum size as a percentage of the splitter container.`})],Gc.prototype,`maxSize`,void 0),A([F({type:`"default" | "solid"`,default:`default`,reflect:!0,description:`Visual style — "solid" applies a secondary background color.`})],Gc.prototype,`variant`,void 0),Gc=A([R(`quantic-splitter-pane`)],Gc);var Kc={Horizontal:`horizontal`,Vertical:`vertical`},qc={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},Jc=`quantic-tab-button`,Yc=`buttons`,Xc=`panels`,Zc=ro(`tabs.id`),Qc=ro(`tabs.size`),$c=ro(`tabs.orientation`),el=ro(`tabs.selectedIndex`),tl=class extends L{constructor(){super(...arguments),this.size=qc.Medium,this.orientation=Kc.Horizontal,this.selectedIndex=0,this.id=``,this.collapseBelow=``,this.resizeObserver=null,this._assignSlots=()=>{Array.from(this.children).filter(e=>e instanceof HTMLElement).forEach(e=>{let t=e.tagName.toLowerCase();t===`quantic-tab-button`&&(e.slot=Yc),t===`quantic-tab-panel`&&(e.slot=Xc)})}}connectedCallback(){super.connectedCallback(),this.addEventListener(`tab-selected`,this._onTabSelect),this.id||=`tabs-${Math.random().toString(36).substring(2,9)}`}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}firstUpdated(){this._assignSlots(),this.shadowRoot?.querySelectorAll(`slot[name="${Yc}"], slot[name="${Xc}"]`).forEach(e=>e.addEventListener(`slotchange`,this._assignSlots)),this.setupResizeObserver()}updated(e){super.updated(e),(e.has(`collapseBelow`)||e.has(`orientation`))&&this.checkStacked()}setupResizeObserver(){this.resizeObserver=new ResizeObserver(e=>{let t=e[0];t&&this.checkStackedForSize(t.contentRect.width)}),this.resizeObserver.observe(this)}checkStacked(){this.checkStackedForSize(this.clientWidth)}checkStackedForSize(e){if(e<=0)return;if(this.orientation!==Kc.Vertical){this.toggleAttribute(`stacked`,!1);return}let t=(this.collapseBelow??``).trim();if(!t.endsWith(`px`)){this.toggleAttribute(`stacked`,!1);return}let n=parseFloat(t);Number.isFinite(n)?this.toggleAttribute(`stacked`,e<=n):this.toggleAttribute(`stacked`,!1)}_onTabSelect(e){e.target.closest(`quantic-tabs`)===this&&(e.stopPropagation(),this.selectedIndex=e.detail.index)}render(){return M`
      <div class=${fr({main:!0,[`orientation--${this.orientation}`]:!0})}>
        <div class="buttons" part="nav" role="tablist">
          <slot name=${Yc}></slot>
        </div>
        <div class="panels" part="panels"><slot name=${Xc}></slot></div>
      </div>
    `}};tl.meta={tag:`quantic-tabs`,description:`Tab container managing quantic-tab-button triggers and quantic-tab-panel content areas. Place quantic-tab-button and quantic-tab-panel as direct children. Emits tab-selected when the active tab changes.`,category:`navigation`,accessibility:{providedByComponent:[`tab roles`,`aria-selected`,`roving tabindex across the tab list`],requiredFromConsumer:[`one quantic-tab-panel per quantic-tab-button`]},slots:{"":{description:`quantic-tab-button and quantic-tab-panel elements as direct children.`}},parts:{nav:{description:`The tablist container wrapping the tab buttons.`},panels:{description:`The container wrapping the tab panels.`}}},tl.styles=[j`
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

      .orientation--horizontal .buttons ::slotted(${st(Jc)}) {
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
    `,Xn(Xc,j`
        .panels {
          display: block;
        }
      `)],A([co({context:Qc}),F({type:`TabsSize`,options:Object.values(qc),default:`md`,reflect:!0,description:`Controls tab button font size and padding, and the gap between the tab buttons and panels.`})],tl.prototype,`size`,void 0),A([co({context:$c}),F({type:`TabsOrientation`,options:Object.values(Kc),default:`horizontal`,description:`Layout direction: "horizontal" shows tabs along the top, "vertical" shows them on the left.`})],tl.prototype,`orientation`,void 0),A([co({context:el}),F({type:`number`,default:`0`,description:`Zero-based index of the currently active tab.`})],tl.prototype,`selectedIndex`,void 0),A([co({context:Zc}),F({type:`string`,description:`Unique identifier shared via context to link buttons and panels. Auto-generated if not set.`})],tl.prototype,`id`,void 0),A([F({attribute:`collapse-below`,type:`string`,description:`Pixel breakpoint below which vertical tabs stack (list above panels), matching splitter. Unset by default so vertical tabs stay side-by-side at every width. Example: "640px".`})],tl.prototype,`collapseBelow`,void 0),tl=A([I(`tab-selected`,{description:`Fired when a tab is selected, providing the index of the selected tab.`,detail:`{ index: number }`}),R(`quantic-tabs`)],tl);var nl=(e,t)=>`tabbutton-${e}-${t}`,rl=(e,t)=>`tabpanel-${e}-${t}`;function il(e,t){e.hasAttribute(`slot`)||e.setAttribute(`slot`,t)}var al=class extends L{constructor(){super(...arguments),this.defaultSize=qc.Medium,this.size=this.defaultSize,this.defaultOrientation=Kc.Horizontal,this.orientation=this.defaultOrientation,this.defaultSelectedIndex=0,this.selectedIndex=this.defaultSelectedIndex,this.tabsId=``,this.disabled=!1,this.buttonRef=$r()}willUpdate(){il(this,Yc),this.toggleAttribute(`selected`,this.selectedIndex===this.index)}_onClick(){this.disabled||(this.dispatchEvent(new CustomEvent(`tab-selected`,{detail:{index:this.index},bubbles:!0,composed:!0})),this.buttonRef.value?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`}))}render(){let e=this.selectedIndex===this.index,t=fr({main:!0,"is-active":e,"is-disabled":this.disabled,[`orientation--${this.orientation}`]:!0,disabled:this.disabled,[`size--${this.size}`]:!0});return M`
      <button
        ${ni(this.buttonRef)}
        class=${t}
        part="button"
        id=${nl(this.tabsId,this.index)}
        role="tab"
        aria-selected=${e}
        aria-controls=${rl(this.tabsId,this.index)}
        aria-disabled=${this.disabled}
        ?disabled=${this.disabled}
        tabindex=${e&&!this.disabled?0:-1}
        @click=${this._onClick}
      >
        <slot name="icon"></slot>
        <slot></slot>
        <span class="indicator" part="indicator" aria-hidden="true"></span>
      </button>
    `}};al.meta={tag:`quantic-tab-button`,description:`Individual tab trigger button within quantic-tabs. Set index to match the corresponding quantic-tab-panel. Size and orientation are inherited via context from the parent quantic-tabs. Reflects a selected attribute while active. Restyle the mark with --quantic-component-tab-indicator-* / --quantic-component-tab-active-bg.`,category:`navigation`,subComponentOf:`quantic-tabs`,slots:{icon:{description:`Icon element, displayed before the label and scaled to the tab size.`},"":{description:`Tab label text or custom content.`}},parts:{button:{description:`The native button element.`},indicator:{description:`The active-tab mark.`}},relatedTo:[`quantic-tabs`,`quantic-tab-panel`]},al.styles=j`
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
  `,A([F({type:`TabsSize`,reflect:!0,description:`SSR fallback for size before context propagates from quantic-tabs.`})],al.prototype,`defaultSize`,void 0),A([lo({context:Qc,subscribe:!0})],al.prototype,`size`,void 0),A([F({type:`TabsOrientation`,reflect:!0,description:`SSR fallback for orientation before context propagates from quantic-tabs.`})],al.prototype,`defaultOrientation`,void 0),A([lo({context:$c,subscribe:!0})],al.prototype,`orientation`,void 0),A([F({type:`number`,default:`0`,reflect:!0,description:`SSR fallback for selected index before context propagates from quantic-tabs.`})],al.prototype,`defaultSelectedIndex`,void 0),A([lo({context:el,subscribe:!0})],al.prototype,`selectedIndex`,void 0),A([lo({context:Zc,subscribe:!0})],al.prototype,`tabsId`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Prevents this tab from being selected.`})],al.prototype,`disabled`,void 0),A([F({type:`number`,reflect:!0,description:`Zero-based position of this button; must match the index of the corresponding quantic-tab-panel.`,required:!0})],al.prototype,`index`,void 0),al=A([I(`tab-selected`,{description:`Fired when a tab is selected, providing the index of the selected tab.`,detail:`{ index: number }`}),R(`quantic-tab-button`)],al);var ol=class extends L{constructor(){super(...arguments),this.defaultSelectedIndex=0,this.selectedIndex=this.defaultSelectedIndex,this.tabsId=``}willUpdate(){il(this,Xc)}render(){let e=fr({main:!0,"is-active":this.selectedIndex===this.index});return M`<div
      id=${rl(this.tabsId,this.index)}
      class=${e}
      aria-labelledby=${nl(this.tabsId,this.index)}
      role="tabpanel"
      tabindex="0"
    >
      <slot></slot>
    </div>`}};ol.meta={tag:`quantic-tab-panel`,description:`Content panel associated with a tab button in quantic-tabs. Set index to match the corresponding quantic-tab-button. Visibility is controlled automatically by the parent quantic-tabs.`,category:`navigation`,subComponentOf:`quantic-tabs`,slots:{"":{description:`Panel content shown when this tab is active.`}},relatedTo:[`quantic-tabs`,`quantic-tab-button`]},ol.styles=j`
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
  `,A([F({type:`number`,default:`0`,reflect:!0,description:`SSR fallback for selected index before context propagates from quantic-tabs.`})],ol.prototype,`defaultSelectedIndex`,void 0),A([lo({context:el,subscribe:!0})],ol.prototype,`selectedIndex`,void 0),A([lo({context:Zc,subscribe:!0})],ol.prototype,`tabsId`,void 0),A([F({type:`number`,reflect:!0,description:`Zero-based position of this panel; must match the index of the corresponding quantic-tab-button.`,required:!0})],ol.prototype,`index`,void 0),ol=A([R(`quantic-tab-panel`)],ol);var sl={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},cl={[sl.ExtraSmall]:yo.ExtraSmall,[sl.Large]:yo.Medium};bo.ensureDefined(),Mr.ensureDefined();var ll=class extends L{constructor(){super(...arguments),this.size=sl.Medium,this.selectable=!1,this.dismissible=!1,this.selected=!1}handleClick(){this.selectable&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(`tag-select`,{detail:{selected:this.selected},bubbles:!0,composed:!0})))}handleDismiss(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent(`tag-dismiss`,{bubbles:!0,composed:!0}))}handleKeyDown(e){this.selectable&&(e.key===`Enter`||e.key===` `)&&!e.target.closest(`.dismiss-button`)&&(e.preventDefault(),this.handleClick())}render(){return ar`
      <div
        class=${fr({main:!0,[`size--${this.size}`]:!0,selectable:this.selectable})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        tabindex=${this.selectable?`0`:`-1`}
        role=${this.selectable?`checkbox`:void 0}
        aria-checked=${this.selectable?String(this.selected):void 0}
      >
        ${this.selectable?ar`<quantic-checkbox
                size=${cl[this.size]??`sm`}
                ?checked=${this.selected}
              ></quantic-checkbox>`:null}
        <slot name="before"></slot>
        <slot></slot>
        <slot name="after"></slot>
        ${this.dismissible?ar`
                <button class="dismiss-button" @click=${this.handleDismiss} aria-label="Dismiss">
                  <quantic-icon-lucide-x size="xs"></quantic-icon-lucide-x>
                </button>
              `:null}
      </div>
    `}};ll.meta={tag:`quantic-tag`,description:`Compact inline label that can be dismissible or selectable. Used for filters, categories, and version tags. Use quantic-count-tag or quantic-status-tag for specialised variants.`,category:`display`,avoidWhen:[{when:`the tag shows a numeric count`,useInstead:`quantic-count-tag`},{when:`the tag shows a semantic status`,useInstead:`quantic-status-tag`}],accessibility:{providedByComponent:[`keyboard dismissal when dismissible`,`roving tabindex within a tag group`]},slots:{"":{description:`Tag label text or icon content.`},before:{description:`Leading content (e.g. icon or color dot).`},after:{description:`Trailing content (e.g. count badge).`}},relatedTo:[`quantic-count-tag`,`quantic-status-tag`,`quantic-badge`]},ll.styles=j`
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
  `,A([F({type:`TagSize`,options:Object.values(sl),default:sl.Medium,description:`Controls padding and font size.`})],ll.prototype,`size`,void 0),A([F({type:`boolean`,default:`false`,description:`Renders a checkbox and makes the tag toggleable.`})],ll.prototype,`selectable`,void 0),A([F({type:`boolean`,default:`false`,description:`Shows a dismiss (×) button to remove the tag.`})],ll.prototype,`dismissible`,void 0),A([F({type:`boolean`,default:`false`,description:`Current selected state when selectable is true.`})],ll.prototype,`selected`,void 0),ll=A([I(`tag-select`,{description:`Fired when a tag's selection state changes (only when selectable is true).`,detail:`{ selected: boolean }`}),I(`tag-dismiss`,{description:`Fired when a tag's dismiss button is clicked (only when dismissible is true).`}),R(`quantic-tag`)],ll);var ul={ExtraSmall:`xs`,Small:`sm`,Medium:`md`,Large:`lg`},dl={None:`none`,Vertical:`vertical`,Horizontal:`horizontal`,Both:`both`};Wa.ensureDefined();var fl=class extends Va(L){constructor(){super(),this.value=``,this.name=``,this.placeholder=``,this.size=ul.Medium,this.rows=4,this.resize=dl.Vertical,this.disabled=!1,this.required=!1,this.readOnly=!1,this.invalid=!1,this.autoComplete=`off`,this.internals=this.attachInternals()}updated(e){e.has(`value`)&&(this.internals.setFormValue(this.value),this.updateValidity()),Tr(this,e,this.value)}forwardNative(e){let t=e.target;this.value=t.value,this.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0}))}dispatchValueChanged(e){this.value=e.target.value}formResetCallback(){this.value=``,this.internals.setFormValue(``)}formStateRestoreCallback(e){this.value=e,this.internals.setFormValue(e)}formDisabledCallback(e){this.disabled=e}updateValidity(){let e=this.shadowRoot?.querySelector(`textarea`);e&&this.internals.setValidity(e.validity,e.validationMessage,e)}render(){let e=fr({main:!0,[`size--${this.size}`]:!0}),t=this.getA11yAttributes({invalid:this.invalid});return M`
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
        ${this.invalid?M`<quantic-icon-lucide-circle-alert
              name=${vr.CircleAlert}
              size=${_r.Small}
              class="error-icon"
            ></quantic-icon-lucide-circle-alert>`:``}
      </div>
    `}};fl.meta={tag:`quantic-textarea`,description:`Multi-line text field with native form association. Wrap in quantic-field to add a visible label, hint text, and validation messaging.`,category:`form`,avoidWhen:[{when:`the value is code or structured text needing a line gutter`,useInstead:`quantic-code-input`}],accessibility:{providedByComponent:[`form association`,`native textarea semantics`],requiredFromConsumer:[`a visible label, by wrapping in quantic-field, or the ariaLabel prop`]},parts:{input:{description:`The native textarea element.`}},relatedTo:[`quantic-field`,`quantic-text-input`]},fl.formAssociated=!0,fl.styles=j`
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
  `,A([F({type:`string`,default:``,description:`Current value of the textarea.`})],fl.prototype,`value`,void 0),A([F({type:`string`,description:`Name submitted with form data.`})],fl.prototype,`name`,void 0),A([F({type:`string`,description:`Placeholder text shown when the field is empty.`,copyRule:`placeholder`})],fl.prototype,`placeholder`,void 0),A([F({type:`TextareaSize`,options:Object.values(ul),default:ul.Medium,description:`Controls padding and font size.`})],fl.prototype,`size`,void 0),A([F({type:`number`,default:`4`,description:`Number of visible text rows.`})],fl.prototype,`rows`,void 0),A([F({type:`TextareaResize`,options:Object.values(dl),default:dl.Vertical,description:`Controls the resize handle direction.`})],fl.prototype,`resize`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Prevents interaction.`})],fl.prototype,`disabled`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Marks the field as required for form validation.`})],fl.prototype,`required`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Makes the field non-editable but still focusable and selectable.`})],fl.prototype,`readOnly`,void 0),A([F({type:`boolean`,default:`false`,reflect:!0,description:`Applies error styling. Set alongside an error message in the parent quantic-field.`})],fl.prototype,`invalid`,void 0),A([F({type:`string`,default:`off`,reflect:!0,description:`Native autocomplete attribute passed to the inner <textarea>.`})],fl.prototype,`autoComplete`,void 0),fl=A([I(`value-changed`,{description:`Fired whenever the value changes, from user input or a programmatic update. Not fired on initial render.`,detail:`{ value: string }`}),I(`input`,{forwarded:!0}),I(`change`,{forwarded:!0}),I(`focus`,{forwarded:!0}),I(`blur`,{forwarded:!0}),I(`keydown`,{forwarded:!0}),I(`keyup`,{forwarded:!0}),I(`keypress`,{forwarded:!0}),R(`quantic-textarea`)],fl);var pl={Success:`success`,Error:`error`,Warning:`warning`,Info:`info`};mr.ensureDefined(),Or.ensureDefined(),kr.ensureDefined(),Ar.ensureDefined(),jr.ensureDefined(),Mr.ensureDefined();var ml=class extends $n(L,[`title`,``,`action`]){constructor(){super(...arguments),this.open=!1,this.type=pl.Info,this.showCloseButton=!0,this.ariaLabel=null,this.handleCloseClick=()=>{this.dispatchEvent(new Event(`close`,{bubbles:!0,composed:!0}))}}updated(e){super.updated(e),e.has(`open`)&&e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`open-changed`,{detail:{open:this.open},bubbles:!0,composed:!0}))}renderDefaultIcon(){switch(this.type){case pl.Success:return M`<quantic-icon-lucide-circle-check
          size="md"
        ></quantic-icon-lucide-circle-check>`;case pl.Error:return M`<quantic-icon-lucide-circle-x
          size="md"
        ></quantic-icon-lucide-circle-x>`;case pl.Warning:return M`<quantic-icon-lucide-triangle-alert
          size="md"
        ></quantic-icon-lucide-triangle-alert>`;case pl.Info:default:return M`<quantic-icon-lucide-info
          size="md"
        ></quantic-icon-lucide-info>`}}render(){let e=this.type===pl.Error;return M`
      <div
        class="container"
        role=${e?`alert`:`status`}
        aria-live=${this.open?e?`assertive`:`polite`:`off`}
        aria-atomic="true"
        aria-hidden=${this.open?`false`:`true`}
        aria-label=${pr(this.ariaLabel??void 0)}
      >
        <span class="icon">
          <slot name="icon">${this.renderDefaultIcon()}</slot>
        </span>
        <div class="content">
          <slot name="title" class="title"></slot>
          <slot class="body"></slot>
          <slot name="action" class="action"></slot>
        </div>
        ${this.showCloseButton?M`<quantic-button
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
              </quantic-button>`:N}
      </div>
    `}};ml.meta={tag:`quantic-toast`,description:`Presentational notification card with severity styles and optional action. State (open/close, auto-dismiss, stacking, viewport positioning) is owned by the consumer.`,category:`feedback`,avoidWhen:[{when:`the message belongs to a region of the page and should persist`,useInstead:`quantic-alert`}],accessibility:{providedByComponent:[`announced through a live region`,`severity conveyed by icon as well as colour`],requiredFromConsumer:[`a title`,`enough time to read it, if you set an auto-dismiss`]},slots:{icon:{description:`Optional icon override. Defaults to a type-derived lucide icon.`},title:{description:`Optional bold title.`,copyRule:`heading`},"":{description:`Body content of the toast.`},action:{description:`Optional action button (e.g. Undo). Wire your own click handler.`,copyRule:`heading`}},relatedTo:[`quantic-dialog`,`quantic-button`]},ml.styles=j`
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
  `,A([F({type:`boolean`,default:`false`,reflect:!0,description:`Whether the toast is visible.`})],ml.prototype,`open`,void 0),A([F({type:`ToastType`,options:Object.values(pl),default:pl.Info,reflect:!0,description:`Severity. Drives icon and color tokens.`})],ml.prototype,`type`,void 0),A([F({type:`boolean`,attribute:`show-close-button`,default:`true`,description:`Shows a built-in close button. Click dispatches a "close" event.`})],ml.prototype,`showCloseButton`,void 0),A([F({type:`string`,attribute:`aria-label`,description:`Accessible label when no title slot is provided.`})],ml.prototype,`ariaLabel`,void 0),ml=A([I(`open-changed`,{description:`Fired when the open state changes.`,detail:`{ open: boolean }`}),I(`close`,{description:`Fired when the user clicks the close button. The consumer is responsible for setting open=false.`}),R(`quantic-toast`)],ml);function hl(e){return e}var gl=/\/\*(?:[^*]|\*(?!\/))*\*\//g,_l=/\n/g,vl=/^\s*/,yl=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,bl=/^:\s*/,xl=/^((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|url\((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|[^)]*)\)|[^};])+)/,Sl=/^[;\s]*/,Cl=`
`,wl=`/`,Tl=`*`,El=``,Dl=`comment`,Ol=`declaration`;function kl(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var n=1,r=1;function i(e){var t=e.match(_l);t&&(n+=t.length);var i=e.lastIndexOf(Cl);r=~i?e.length-i:r+e.length}function a(){var e={line:n,column:r};return function(t){return t.position=new o(e),l(),t}}function o(e){this.start=e,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function s(i){var a=Error(t.source+`:`+n+`:`+r+`: `+i);if(a.reason=i,a.filename=t.source,a.line=n,a.column=r,a.source=e,!t.silent)throw a}function c(t){var n=t.exec(e);if(n){var r=n[0];return i(r),e=e.slice(r.length),n}}function l(){c(vl)}function u(e){for(var t;t=d();)e.push(t);return e}function d(){var t=a();if(wl==e.charAt(0)&&Tl==e.charAt(1)){for(var n=2;El!=e.charAt(n)&&(Tl!=e.charAt(n)||wl!=e.charAt(n+1));)++n;if(n+=2,El===e.charAt(n-1))return s(`End of comment missing`);var o=e.slice(2,n-2);return r+=2,i(o),e=e.slice(n),r+=2,t({type:Dl,comment:o})}}function f(){var e=a(),t=c(yl);if(t){if(d(),!c(bl))return s(`property missing ':'`);var n=c(xl),r=e({type:Ol,property:t[0].replace(gl,El).trim(),value:n?n[0].replace(gl,El).trim():El});return c(Sl),r}}function p(){var e=[];u(e);for(var t;t=f();)e.push(t),u(e);return e}return l(),p()}function Al(e,t){let n=null;if(!e||typeof e!=`string`)return n;let r=kl(e),i=typeof t==`function`;return r.forEach(e=>{if(e.type!==`declaration`)return;let{property:r,value:a}=e;i?t(r,a,e):a&&(n??={},n[r]=a)}),n}var jl=/^--[a-zA-Z0-9_-]+$/,Ml=/-([a-z])/g,Nl=/^[^-]+$/,Pl=/^-(webkit|moz|ms|o|khtml)-/,Fl=/^-(ms)-/,Il=e=>!e||Nl.test(e)||jl.test(e),Ll=(e,t)=>t.toUpperCase(),Rl=(e,t)=>`${t}-`,zl=(e,t={})=>Il(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(Fl,Rl):e.replace(Pl,Rl),e.replace(Ml,Ll));function Bl(e,t){let n={};return!e||typeof e!=`string`||Al(e,(e,r)=>{e&&r&&(n[zl(e,t)]=r)}),n}var Vl=(e,t,...n)=>{let r=typeof t?.style==`object`?t.style:void 0;return hl((e,t,...n)=>{let i=t?.style;return typeof i==`string`&&(t={...t,style:{...r,...Bl(i,{reactCompat:!0})}}),_.createElement(e,t,...n)})(e,t,...n)},U={..._,createElement:Vl};typeof window>`u`&&(globalThis.litSsrReactEnabled=!0);var Hl=k({react:U,tagName:`quantic-alert`,elementClass:Nr,events:{onClose:`close`}});Hl.displayName=`Alert`;var W=k({react:U,tagName:`quantic-badge`,elementClass:eo});W.displayName=`Badge`;var G=k({react:U,tagName:`quantic-button`,elementClass:mr});G.displayName=`Button`;var Ul=k({react:U,tagName:`quantic-button-bar-item`,elementClass:vo});Ul.displayName=`ButtonBarItem`;var Wl=k({react:U,tagName:`quantic-button-bar`,elementClass:_o});Wl.displayName=`ButtonBar`;var Gl=k({react:U,tagName:`quantic-checkbox`,elementClass:bo,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`}});Gl.displayName=`Checkbox`;var Kl=k({react:U,tagName:`quantic-combobox`,elementClass:Za,events:{onValueChanged:`value-changed`,onInputChanged:`input-changed`,onFocus:`focus`,onBlur:`blur`}});Kl.displayName=`Combobox`;var ql=k({react:U,tagName:`quantic-confirm-dialog`,elementClass:ks,events:{onConfirm:`confirm`,onCancel:`cancel`}});ql.displayName=`ConfirmDialog`;var Jl=k({react:U,tagName:`quantic-dialog-actions`,elementClass:Eo});Jl.displayName=`DialogActions`;var Yl=k({react:U,tagName:`quantic-dialog-title`,elementClass:To});Yl.displayName=`DialogTitle`;var Xl=k({react:U,tagName:`quantic-dialog`,elementClass:Os,events:{onOpenChanged:`open-changed`,onBeforeOpen:`before-open`,onAfterOpen:`after-open`,onBeforeClose:`before-close`,onAfterClose:`after-close`}});Xl.displayName=`Dialog`;var Zl=k({react:U,tagName:`quantic-icon-lucide-panel-left-close`,elementClass:Ys});Zl.displayName=`LucideIconPanelLeftClose`;var Ql=k({react:U,tagName:`quantic-icon-lucide-panel-left-open`,elementClass:Xs});Ql.displayName=`LucideIconPanelLeftOpen`;var $l=k({react:U,tagName:`quantic-icon-lucide-x`,elementClass:Mr});$l.displayName=`LucideIconX`;var eu=k({react:U,tagName:`quantic-inline-edit`,elementClass:$s,events:{onCancel:`cancel`}});eu.displayName=`InlineEdit`;var tu=k({react:U,tagName:`quantic-log-output`,elementClass:Bc});tu.displayName=`LogOutput`;var nu=k({react:U,tagName:`quantic-select`,elementClass:qs,events:{onValueChanged:`value-changed`,onFocus:`focus`,onBlur:`blur`}});nu.displayName=`Select`;var ru=k({react:U,tagName:`quantic-spinner`,elementClass:Uc});ru.displayName=`Spinner`;var K=k({react:U,tagName:`quantic-splitter-group`,elementClass:Wc});K.displayName=`SplitterGroup`;var iu=k({react:U,tagName:`quantic-splitter-pane`,elementClass:Gc});iu.displayName=`SplitterPane`;var au=k({react:U,tagName:`quantic-tab-button`,elementClass:al,events:{onTabSelected:`tab-selected`}});au.displayName=`TabButton`;var ou=k({react:U,tagName:`quantic-tab-panel`,elementClass:ol});ou.displayName=`TabPanel`;var su=k({react:U,tagName:`quantic-tabs`,elementClass:tl,events:{onTabSelected:`tab-selected`}});su.displayName=`Tabs`;var cu=k({react:U,tagName:`quantic-tag`,elementClass:ll,events:{onTagSelect:`tag-select`,onTagDismiss:`tag-dismiss`}});cu.displayName=`Tag`;var lu=k({react:U,tagName:`quantic-text-input`,elementClass:Gs,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`,onKeypress:`keypress`}});lu.displayName=`TextInput`;var uu=k({react:U,tagName:`quantic-textarea`,elementClass:fl,events:{onValueChanged:`value-changed`,onInput:`input`,onChange:`change`,onFocus:`focus`,onBlur:`blur`,onKeydown:`keydown`,onKeyup:`keyup`,onKeypress:`keypress`}});uu.displayName=`Textarea`;var du=k({react:U,tagName:`quantic-toast`,elementClass:ml,events:{onOpenChanged:`open-changed`,onClose:`close`}});du.displayName=`Toast`;async function fu(e){let t=await fetch(e);if(!t.ok)throw Error(`${e}: HTTP ${t.status}`);return await t.json()}var pu=()=>fu(`/api/assets`),mu=()=>fu(`/api/status`),hu=()=>fu(`/api/vocabulary`);async function gu(e,t,n){try{let r=await fetch(t,{method:e,headers:n===void 0?void 0:{"Content-Type":`application/json`},body:n===void 0?void 0:JSON.stringify(n)}),i=await r.json().catch(()=>({}));return r.ok&&i.asset?{ok:!0,asset:Pu(i.asset)}:{ok:!1,status:r.status,error:i.error??`HTTP ${r.status}`,errors:i.errors??[]}}catch(e){return{ok:!1,status:0,error:e.message,errors:[]}}}var _u=(e,t)=>gu(`PATCH`,`/api/assets/${encodeURIComponent(e)}`,t),vu=e=>gu(`POST`,`/api/assets/${encodeURIComponent(e)}/confirm`),yu=e=>gu(`POST`,`/api/assets/${encodeURIComponent(e)}/retire`),bu=e=>gu(`POST`,`/api/assets/${encodeURIComponent(e)}/restore`),xu=(e,t=8)=>fu(`/api/assets/${encodeURIComponent(e)}/similar?limit=${t}`);function Su(e){let t={},n=[];for(let r of e){let e=/^([a-z_]+)(?:\.[a-z_]+)?:/.exec(r);e?(t[e[1]]??=[]).push(r):n.push(r)}return{byField:t,general:n}}async function Cu(e,t,n){try{let r=await fetch(t,{method:e,headers:n?.json===void 0?void 0:{"Content-Type":`application/json`},body:n?.form??(n?.json===void 0?void 0:JSON.stringify(n.json))}),i=await r.json().catch(()=>({})),a=Array.isArray(i.errors)?` (${i.errors.join(`; `)})`:``,o=r.ok?``:`${i.error??i.message??`HTTP ${r.status}`}${a}`;return{ok:r.ok,status:r.status,data:i,error:o}}catch(e){return{ok:!1,status:0,data:{},error:e.message}}}var wu=encodeURIComponent,Tu=(e,t)=>Cu(`POST`,`/api/vocabulary/${wu(e)}`,{json:{slug:t}}),Eu=(e,t,n)=>Cu(`POST`,`/api/vocabulary/${wu(e)}/${wu(t)}/rename`,{json:{new:n}}),Du=(e,t,n)=>Cu(`POST`,`/api/vocabulary/${wu(e)}/${wu(t)}/merge`,{json:{into:n}}),Ou=(e,t)=>Cu(`DELETE`,`/api/vocabulary/${wu(e)}/${wu(t)}`),ku=e=>Cu(`POST`,`/api/ingest`,{form:e}),Au=()=>Cu(`POST`,`/api/sync`),ju=e=>Cu(`POST`,`/api/${e}`),Mu=e=>Cu(`GET`,`/api/jobs/${wu(e)}`);async function Nu(e,t=50){let n=await Cu(`GET`,`/api/search?q=${encodeURIComponent(e)}&limit=${t}`);return{ok:n.ok,hits:n.data.hits??[],stale:!!n.data.stale,error:n.error}}var Pu=e=>({...e,thumb_url:`/thumbs/${e.id}.webp`,full_url:`/files/${e.id}`}),Fu=e=>{let t=e.data?.errors;return Array.isArray(t)?t:[]};async function Iu(e,t,n){let r=await Cu(`POST`,`/api/assets/${wu(e)}/verdict`,{json:n===void 0?{verdict:t}:{verdict:t,reason:n}});return r.ok&&r.data.asset&&(r.data={...r.data,asset:Pu(r.data.asset)}),r}var Lu=(e,t)=>Cu(`POST`,`/api/verdicts`,{json:{verdict:e,ids:t}}),Ru=e=>Cu(`POST`,`/api/undo`,{json:{commit:e}}),zu=e=>Cu(`POST`,`/api/rate${e?`?redo=${e}`:``}`),Bu=()=>Cu(`GET`,`/api/rate/summary`),Vu=()=>Cu(`GET`,`/api/rate/needs-details`),Hu=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),q=o(((e,t)=>{t.exports=Hu()}))(),Uu=600;function Wu({jobId:e,name:t,onFinished:n}){let[r,i]=(0,_.useState)({state:`running`,log:[],result:null,error:null}),[a,o]=(0,_.useState)(null),s=(0,_.useRef)(n);return(0,_.useEffect)(()=>{s.current=n}),(0,_.useEffect)(()=>{let t=!1,n,r=async()=>{let a=await Mu(e);t||(a.ok?(i(a.data),a.data.state===`running`?n=setTimeout(r,Uu):s.current(a.data)):o(a.error))};return r(),()=>{t=!0,n&&clearTimeout(n)}},[e]),(0,q.jsxs)(`section`,{className:`job-log`,"aria-label":`${t} job`,children:[(0,q.jsxs)(`div`,{className:`job-log-head`,children:[(0,q.jsx)(`strong`,{children:t}),(0,q.jsx)(W,{size:`sm`,color:r.state===`failed`?`error`:r.state===`done`?`success`:`warning`,children:r.state})]}),a&&(0,q.jsxs)(Hl,{type:`error`,children:[`Lost contact with job: `,a]}),r.error&&(0,q.jsx)(Hl,{type:`error`,children:r.error}),(0,q.jsx)(tu,{lines:r.log,follow:!0})]})}var Gu=[`hero`,`spot-illustration`,`background`,`screenshot`,`diagram`,`lifestyle`];function Ku({products:e,onIngested:t,onReviewQueue:n,rater:r,rateJob:i,onAutoRate:a,rateError:o,waiting:s}){let[c,l]=(0,_.useState)([]),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(``),[y,b]=(0,_.useState)(``),[x,S]=(0,_.useState)(``),[ee,te]=(0,_.useState)(!1),[C,ne]=(0,_.useState)(!1),[w,re]=(0,_.useState)(null),[ie,ae]=(0,_.useState)(null),[T,oe]=(0,_.useState)(null),[se,ce]=(0,_.useState)(null),[le,ue]=(0,_.useState)(void 0),de=le!==void 0,fe=de&&i&&i.id!==le?i:null,pe=(0,_.useRef)(null),me=e=>{e?.length&&l(t=>[...t,...Array.from(e)])},he=f===`screenshot`,ge=c.length>0&&f!==``&&m.trim()!==``&&(!he||x!==``);return(0,q.jsxs)(`div`,{className:`ingest`,children:[(0,q.jsxs)(`div`,{className:`dropzone${u?` dropzone-over`:``}`,onDragOver:e=>{e.preventDefault(),d(!0)},onDragLeave:()=>d(!1),onDrop:e=>{e.preventDefault(),d(!1),me(e.dataTransfer.files)},children:[(0,q.jsx)(`p`,{children:`Drop images here`}),(0,q.jsx)(G,{size:`sm`,variant:`outline`,onClick:()=>pe.current?.click(),children:`Choose files`}),(0,q.jsx)(`input`,{ref:pe,type:`file`,multiple:!0,accept:`image/*`,hidden:!0,"aria-label":`Choose image files`,onChange:e=>{me(e.target.files),e.target.value=``}}),c.length>0&&(0,q.jsx)(`ul`,{className:`ingest-files`,"aria-label":`Files to ingest`,children:c.map((e,t)=>(0,q.jsxs)(`li`,{children:[e.name,` `,(0,q.jsx)(G,{size:`sm`,variant:`ghost`,onClick:()=>l(e=>e.filter((e,n)=>n!==t)),children:`Remove`})]},`${e.name}-${t}`))})]}),(0,q.jsxs)(`div`,{className:`ingest-form`,children:[(0,q.jsxs)(`div`,{className:`field`,children:[(0,q.jsx)(`span`,{className:`field-label`,children:`Class`}),(0,q.jsx)(nu,{"aria-label":`Class`,placeholder:`Choose class`,options:Gu.map(e=>[e,e]),value:f,onValueChanged:e=>p(e.detail.value)})]}),he&&(0,q.jsxs)(`div`,{className:`field`,children:[(0,q.jsx)(`span`,{className:`field-label`,children:`Product (required for screenshots)`}),(0,q.jsx)(nu,{"aria-label":`Product`,placeholder:`Choose product`,options:e.map(e=>[e,e]),value:x,onValueChanged:e=>S(e.detail.value)})]}),(0,q.jsxs)(`div`,{className:`field`,children:[(0,q.jsx)(`span`,{className:`field-label`,children:`Source origin`}),(0,q.jsx)(lu,{"aria-label":`Source origin`,placeholder:`e.g. adobe-stock`,value:m,onValueChanged:e=>h(e.detail.value)})]}),(0,q.jsxs)(`div`,{className:`field`,children:[(0,q.jsx)(`span`,{className:`field-label`,children:`License (optional)`}),(0,q.jsx)(lu,{"aria-label":`License`,value:g,onValueChanged:e=>v(e.detail.value)})]}),(0,q.jsxs)(`div`,{className:`field`,children:[(0,q.jsx)(`span`,{className:`field-label`,children:`License id (optional)`}),(0,q.jsx)(lu,{"aria-label":`License id`,value:y,onValueChanged:e=>b(e.detail.value)})]}),(0,q.jsx)(`div`,{className:`field`,children:(0,q.jsx)(Gl,{size:`sm`,checked:ee,onValueChanged:e=>te(e.detail.checked),children:`These are anti-examples (what not to do)`})}),(0,q.jsx)(`div`,{children:(0,q.jsx)(G,{disabled:!ge||C,onClick:async()=>{ne(!0),re(null),ae(null),oe(null),ce(null),ue(void 0);let e=new FormData;c.forEach(t=>e.append(`files`,t)),e.append(`asset_class`,f),e.append(`origin`,m.trim()),g.trim()&&e.append(`license`,g.trim()),y.trim()&&e.append(`license_id`,y.trim()),he&&e.append(`product`,x),ee&&e.append(`anti_example`,`true`);let n=await ku(e);ne(!1),n.ok?(ae(n.data),l([]),t(n.data)):re(n.error)},children:C?`Ingesting...`:`Ingest ${c.length||``} file${c.length===1?``:`s`}`})})]}),w&&(0,q.jsx)(Hl,{type:`error`,children:w}),ie&&(0,q.jsxs)(`section`,{className:`ingest-report`,"aria-label":`Ingest report`,children:[(0,q.jsxs)(Hl,{type:ie.created.length?`success`:`warning`,children:[ie.created.length,` created, `,ie.skipped.length,` skipped.`]}),ie.created.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`ul`,{children:ie.created.map(e=>(0,q.jsx)(`li`,{children:e},e))}),(0,q.jsx)(`p`,{children:`Re-index so new assets get thumbnails and show up in search.`}),(0,q.jsxs)(`div`,{className:`ingest-actions`,children:[(0,q.jsx)(G,{size:`sm`,onClick:async()=>{ce(null);let e=await ju(`reindex`);e.ok?oe(e.data.job_id):ce(e.error)},disabled:T!==null,children:`Re-index now`}),` `,(0,q.jsx)(G,{size:`sm`,variant:`outline`,onClick:n,children:`Open review queue`})]}),se&&(0,q.jsx)(Hl,{type:`error`,children:se}),T&&(0,q.jsx)(Wu,{jobId:T,name:`Re-index`,onFinished:()=>t(ie)},T),r?.available&&!fe&&s>0&&(0,q.jsxs)(`div`,{className:`ingest-autorate`,children:[(0,q.jsx)(`span`,{children:i?.running?`Auto-rate is already running; these images join the next run.`:`Auto-rate ${s} image${s===1?``:`s`} waiting for the bot?`}),(0,q.jsx)(G,{size:`sm`,disabled:!!i?.running,onClick:()=>{ue(i?.id??null),a()},children:`Auto-rate`})]}),de&&o&&(0,q.jsx)(Hl,{type:`error`,children:o}),fe&&(0,q.jsx)(Wu,{jobId:fe.id,name:`Auto-rate`,onFinished:()=>{}},fe.id)]}),ie.skipped.length>0&&(0,q.jsx)(`ul`,{"aria-label":`Skipped files`,children:ie.skipped.map((e,t)=>(0,q.jsxs)(`li`,{children:[(0,q.jsx)(`strong`,{children:e.file}),`: `,e.reason]},`${e.file}-${t}`))})]})]})}var qu=[`use`,`class`,`status`,`product`,`tone`,`categories`,`verticals`,`concepts`,`style`,`license`];function Ju(e,t){switch(t){case`use`:return[e.anti_example?`anti-example`:`example`];case`class`:return e.class?[e.class]:[];case`status`:return e.status?[e.status]:[];case`product`:return e.products??[];case`tone`:return e.tone?[e.tone]:[];case`categories`:return e.categories??[];case`verticals`:return e.verticals??[];case`concepts`:return e.concepts??[];case`style`:return e.style??[];case`license`:return e.license?[e.license]:[]}}function Yu(e){return[e.id,e.file,e.description,e.avoid_reason??``,e.class,e.status,e.license,e.tone??``,...e.products,...e.categories,...e.verticals,...e.concepts,...e.style].join(`
`).toLowerCase()}function Xu(e,t,n){let r=n.trim().toLowerCase(),i=qu.flatMap(e=>{let n=t[e];return n&&n.length?[{axis:e,want:n}]:[]});return e.filter(e=>{for(let{axis:t,want:n}of i){let r=Ju(e,t);if(!n.some(e=>r.includes(e)))return!1}return r===``||Yu(e).includes(r)})}function Zu(e,t){let n=new Map;for(let r of e)for(let e of new Set(Ju(r,t)))n.set(e,(n.get(e)??0)+1);return[...n].map(([e,t])=>({value:e,count:t})).sort((e,t)=>t.count-e.count||e.value.localeCompare(t.value))}var J={products:`product`,categories:`categories`,verticals:`verticals`,concepts:`concepts`,style:`style`};function Qu(e,t){let n={};for(let[r,i]of Object.entries(t)){let t=J[r];n[r]=i.map(n=>({slug:n,count:t?e.filter(e=>Ju(e,t).includes(n)).length:0}))}return n}function Y(e,t){let n=new Map(t.map(e=>[e.id,e]));return e.flatMap(e=>{let t=n.get(e.id);return t?[t]:[]})}function X(e,t){return e===t.thumb_url&&t.full_url!==t.thumb_url?t.full_url:null}var Z=/^[a-z0-9]+(?:-[a-z0-9]+)*$/;function $u({assets:e,vocabulary:t,onChanged:n,onOpenInGrid:r}){let i=Qu(e,t),[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)({}),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(null),v=()=>{o(null),c(``)},y=(e,t)=>{f(!1),e.ok?(m(null),g(t),v(),n()):(g(null),m({text:e.error,usage:e.data.usage}),v())},b=async(e,t)=>{f(!0),m(null),y(await e(),t)},x=e=>{let t=(l[e]??``).trim();b(()=>Tu(e,t),`Added ${t} to ${e}.`).then(()=>u(t=>({...t,[e]:``})))},S=a,ee=S?(t[S.axis]??[]).filter(e=>e!==S.slug):[],te=Z.test(s)&&!!S&&s!==S.slug;return(0,q.jsxs)(`div`,{className:`vocab`,children:[p&&(0,q.jsxs)(Hl,{type:`error`,children:[(0,q.jsx)(`div`,{children:p.text}),p.usage&&p.usage.length>0&&(0,q.jsx)(`ul`,{"aria-label":`Assets using this slug`,children:p.usage.map(e=>(0,q.jsx)(`li`,{children:e},e))})]}),h&&(0,q.jsx)(`p`,{className:`editor-message`,role:`status`,children:h}),Object.entries(i).map(([e,t])=>(0,q.jsxs)(`section`,{className:`vocab-axis`,"aria-label":`${e} vocabulary`,children:[(0,q.jsxs)(`h2`,{children:[e,` `,(0,q.jsx)(W,{size:`sm`,color:`gray`,children:t.length})]}),(0,q.jsx)(`ul`,{className:`vocab-list`,children:t.map(({slug:t,count:n})=>(0,q.jsxs)(`li`,{className:`vocab-row`,children:[(0,q.jsx)(G,{size:`sm`,variant:`ghost`,"aria-label":`Show ${t} in grid`,onClick:()=>J[e]&&r(J[e],t),children:t}),(0,q.jsx)(`span`,{className:`facet-count`,"aria-label":`${n} assets`,children:n}),(0,q.jsx)(`span`,{className:`ops-spacer`}),(0,q.jsx)(G,{size:`sm`,variant:`outline`,disabled:d,"aria-label":`Rename ${t}`,onClick:()=>{c(t),o({kind:`rename`,axis:e,slug:t})},children:`Rename`}),(0,q.jsx)(G,{size:`sm`,variant:`outline`,disabled:d,"aria-label":`Merge ${t}`,onClick:()=>o({kind:`merge`,axis:e,slug:t}),children:`Merge`}),(0,q.jsx)(G,{size:`sm`,variant:`outline`,disabled:d||n>0,"aria-label":`Delete ${t}`,title:n>0?`In use by ${n} asset(s); merge it instead`:void 0,onClick:()=>o({kind:`delete`,axis:e,slug:t}),children:`Delete`})]},t))}),(0,q.jsxs)(`div`,{className:`vocab-add`,children:[(0,q.jsx)(lu,{size:`sm`,"aria-label":`New ${e} slug`,placeholder:`new-slug`,value:l[e]??``,onValueChanged:t=>u(n=>({...n,[e]:t.detail.value}))}),(0,q.jsx)(G,{size:`sm`,disabled:d||!Z.test((l[e]??``).trim()),onClick:()=>x(e),children:`Add`})]})]},e)),(0,q.jsx)(ql,{open:S?.kind===`delete`,heading:`Delete ${S?.slug??``}?`,message:`Remove ${S?.slug??``} from ${S?.axis??``}. It is unused, so no assets change. This syncs from origin first and makes one commit.`,confirmText:`Delete`,destructive:!0,loading:d,onConfirm:()=>S&&b(()=>Ou(S.axis,S.slug),`Deleted ${S.slug}.`),onCancel:v}),(0,q.jsxs)(Xl,{open:S?.kind===`rename`||S?.kind===`merge`,size:`sm`,"aria-label":S?.kind===`merge`?`Merge slug`:`Rename slug`,onOpenChanged:e=>{e.detail.open||v()},children:[(0,q.jsx)(Yl,{slot:`header`,children:S?.kind===`merge`?`Merge ${S.slug} into...`:`Rename ${S?.slug??``}`}),S?.kind===`merge`?(0,q.jsx)(nu,{"aria-label":`Merge into`,placeholder:`Choose target slug`,options:ee.map(e=>[e,e]),value:s,onValueChanged:e=>c(e.detail.value)}):(0,q.jsx)(lu,{"aria-label":`New slug`,value:s,invalid:s!==``&&!Z.test(s),onValueChanged:e=>c(e.detail.value)}),(0,q.jsx)(`p`,{className:`editor-message`,children:`Rewrites every affected asset (all statuses) and vocabulary.json in one commit, after syncing from origin.`}),(0,q.jsxs)(Jl,{slot:`footer`,children:[(0,q.jsx)(G,{variant:`outline`,onClick:v,children:`Cancel`}),S?.kind===`merge`?(0,q.jsx)(G,{disabled:d||!s,onClick:()=>b(()=>Du(S.axis,S.slug,s),`Merged ${S.slug} into ${s}.`),children:`Merge`}):(0,q.jsx)(G,{disabled:d||!te,onClick:()=>S&&b(()=>Eu(S.axis,S.slug,s),`Renamed ${S.slug} to ${s}.`),children:`Rename`})]})]})]})}var ed={use:`Use`,class:`Class`,status:`Status`,product:`Product`,tone:`Tone`,categories:`Categories`,verticals:`Verticals`,concepts:`Concepts`,style:`Style`,license:`License`};function td({assets:e,filters:t,q:n,onToggle:r}){return(0,q.jsx)(`nav`,{className:`facet-rail`,"aria-label":`Filters`,children:qu.map(i=>{let{[i]:a,...o}=t,s=Zu(Xu(e,o,n),i),c=t[i]??[],l=[...s,...c.filter(e=>!s.some(t=>t.value===e)).map(e=>({value:e,count:0}))];return l.length===0?null:(0,q.jsxs)(`fieldset`,{className:`facet-group`,children:[(0,q.jsx)(`legend`,{children:ed[i]}),l.map(({value:e,count:t})=>(0,q.jsx)(Gl,{size:`sm`,checked:c.includes(e),onValueChanged:t=>r(i,e,t.detail.checked),"aria-label":`${ed[i]}: ${e}`,children:(0,q.jsxs)(`span`,{className:`facet-row`,children:[(0,q.jsx)(`span`,{children:e}),(0,q.jsx)(`span`,{className:`facet-count`,children:t})]})},e))]},i)})})}function nd({status:e,error:t,onRefresh:n}){let[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(null),p=a||s,m=async()=>{c(!0),u(null);let e=await Au();if(c(!1),e.ok){let t=e.data;u({kind:`success`,text:!t.pulled&&!t.pushed?`In sync with origin.`:`Synced${t.pulled?`, pulled changes`:``}${t.pushed?`, pushed changes`:``}.`})}else u({kind:`error`,text:e.error});n()},h=async e=>{u(null);let t=await ju(e);t.ok?(o(!0),i({id:t.data.job_id,name:e===`reindex`?`Re-index`:`Publish`})):u({kind:`error`,text:t.error})};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`div`,{className:`ops-bar`,role:`status`,"aria-label":`Workspace status`,children:[t&&(0,q.jsxs)(W,{color:`error`,children:[`Status unavailable: `,t]}),e&&(0,q.jsxs)(q.Fragment,{children:[e.git&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(W,{color:e.git.behind?`warning`:`gray`,children:[`git: `,e.git.ahead,` ahead / `,e.git.behind,` behind`]}),(0,q.jsxs)(W,{color:e.git.dirty_managed.length?`warning`:`gray`,children:[e.git.dirty_managed.length,` uncommitted managed`]}),e.git.dirty_other.length>0&&(0,q.jsxs)(W,{color:`gray`,children:[e.git.dirty_other.length,` other dirty (ignored)`]})]}),(0,q.jsxs)(W,{color:e.index_stale?`warning`:`success`,children:[`index `,e.index_stale?`stale`:`fresh`]}),(0,q.jsxs)(W,{color:e.exports_stale?`warning`:`success`,children:[`exports `,e.exports_stale?`stale`:`fresh`]}),(0,q.jsxs)(W,{color:`gray`,children:[`embedder: `,e.embedder_mode??`none`]})]}),d&&(0,q.jsxs)(W,{color:`success`,children:[`last publish: `,d]}),(0,q.jsx)(`span`,{className:`ops-spacer`}),(0,q.jsx)(G,{size:`sm`,variant:`outline`,disabled:p,onClick:m,children:s?`Syncing...`:`Sync`}),(0,q.jsx)(G,{size:`sm`,variant:`outline`,disabled:p,onClick:()=>h(`reindex`),children:`Re-index`}),(0,q.jsx)(G,{size:`sm`,disabled:p,onClick:()=>h(`publish`),children:`Publish`})]}),l&&(0,q.jsx)(`div`,{className:`ops-notice`,children:(0,q.jsx)(Hl,{type:l.kind===`error`?`error`:`success`,children:l.text})}),r&&(0,q.jsx)(`div`,{className:`ops-notice`,children:(0,q.jsx)(Wu,{jobId:r.id,name:r.name,onFinished:e=>{o(!1),e.state===`done`&&typeof e.result?.version==`string`&&f(e.result.version),n()}},r.id)})]})}var rd=[`products`,`categories`,`verticals`,`concepts`,`style`],id=e=>e==null?``:String(e),ad=e=>e.trim()===``?null:/^\d+$/.test(e.trim())?Number(e.trim()):e.trim(),od=e=>({description:e.description??``,tags:{products:e.products,categories:e.categories,verticals:e.verticals,concepts:e.concepts,style:e.style},tone:e.tone??``,product_version:e.product_version??``,captured_at:e.captured_at??``,usage_restrictions:(e.usage_restrictions??[]).join(`, `),anti_example:!!e.anti_example,avoid_reason:e.avoid_reason??``,license:e.license??``,generation:{prompt:id(e.generation?.prompt),model:id(e.generation?.model),seed:id(e.generation?.seed)}}),sd=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]);function cd(e,t){let n={};t.description!==(e.description??``)&&(n.description=t.description);for(let r of rd)sd(t.tags[r],e[r])||(n[r]=t.tags[r]);e.class===`background`&&t.tone&&t.tone!==(e.tone??``)&&(n.tone=t.tone),e.class===`screenshot`&&(t.product_version&&t.product_version!==(e.product_version??``)&&(n.product_version=t.product_version),t.captured_at&&t.captured_at!==(e.captured_at??``)&&(n.captured_at=t.captured_at));let r=t.usage_restrictions.split(`,`).map(e=>e.trim()).filter(Boolean);if(sd(r,e.usage_restrictions??[])||(n.usage_restrictions=r),t.anti_example!==!!e.anti_example&&(n.anti_example=t.anti_example),t.anti_example&&(n.anti_example!==void 0||t.avoid_reason!==(e.avoid_reason??``))&&(n.avoid_reason=t.avoid_reason),t.license.trim()!==(e.license??``)&&(n.license=t.license.trim()),e.source?.origin===`midjourney`){let r=t.generation,i=od(e).generation;(r.prompt!==i.prompt||r.model!==i.model||r.seed!==i.seed)&&(n.generation={prompt:r.prompt.trim()||null,model:r.model.trim()||null,seed:ad(r.seed)})}return n}function ld(e,t){return!e||t()}function ud(e,t,n){let r=e??[];return n?r.includes(t)?[...r]:[...r,t]:r.filter(e=>e!==t)}function dd({label:e,value:t,vocabulary:n,onChange:r,errors:i=[]}){let[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(0),l=n.filter(e=>!t.includes(e)).map(e=>({label:e,value:e})),u=a.trim()!==``&&!n.includes(a.trim()),d=e=>{n.includes(e)&&(t.includes(e)||r([...t,e]),o(``),c(e=>e+1))};return(0,q.jsxs)(`div`,{className:`field${i.length?` field-invalid`:``}`,"data-field":e,children:[(0,q.jsx)(`span`,{className:`field-label`,children:e}),(0,q.jsxs)(`div`,{className:`chips`,children:[t.map(n=>(0,q.jsx)(cu,{size:`sm`,dismissible:!0,"aria-label":`${e}: ${n}`,onTagDismiss:()=>r(t.filter(e=>e!==n)),children:n},n)),(0,q.jsx)(Kl,{size:`sm`,"aria-label":`Add ${e}`,placeholder:`Add ${e}`,options:l,allowCustomValue:!0,invalid:i.length>0,onInputChanged:e=>o(e.detail.value),onValueChanged:e=>d(e.detail.value)},s)]}),u&&(0,q.jsxs)(`p`,{className:`field-hint`,role:`status`,children:[`"`,a.trim(),`" is not in the `,e,` vocabulary, so it will not be saved. Propose it to the curator to add it.`]}),i.map(e=>(0,q.jsx)(`p`,{className:`field-error`,role:`alert`,children:e},e))]})}function fd({errors:e}){return(0,q.jsx)(q.Fragment,{children:(e??[]).map(e=>(0,q.jsx)(`p`,{className:`field-error`,role:`alert`,children:e},e))})}function pd({asset:e,vocabulary:t,onChanged:n,onTransition:r,onOpenSimilar:i,onDirtyChange:a,ref:o}){let[s,c]=(0,_.useState)(()=>od(e)),[l,u]=(0,_.useState)([]),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(!1),v=(0,_.useRef)(!1),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(null),ee=(0,_.useMemo)(()=>cd(e,s),[e,s]),te=Object.keys(ee).length>0;(0,_.useEffect)(()=>(a?.(te),()=>a?.(!1)),[te,a]),(0,_.useEffect)(()=>{let t=!0;return xu(e.id).then(e=>t&&b(e)).catch(e=>t&&S(e.message)),()=>{t=!1}},[e.id]);let C=e=>(u(e.errors),m(e.errors.length?null:e.error),!1),ne=async()=>{if(!te)return e;let t=await _u(e.id,ee);return t.ok?(n(t.asset),c(od(t.asset)),t.asset):(C(t),null)},w=async e=>{v.current=!0,g(!0),u([]),f(null),m(null);try{return await e()}finally{v.current=!1,g(!1)}},re=()=>w(async()=>{await ne()&&te&&f(`Saved.`)}),ie=()=>v.current?Promise.resolve(!1):w(async()=>{if(!await ne())return!1;let t=await vu(e.id);return t.ok?(n(t.asset),r?.(`confirm`,t.asset),!0):C(t)}),ae=t=>v.current?Promise.resolve(!1):w(async()=>{let i=await(t===`retire`?yu:bu)(e.id);return i.ok?(n(i.asset),r?.(t,i.asset),!0):C(i)});(0,_.useImperativeHandle)(o,()=>({confirm:ie}));let{byField:T,general:oe}=Su(l),se=e.source?.origin===`midjourney`,ce=new Set([...rd,`description`,`usage_restrictions`,`anti_example`,`avoid_reason`,`license`,...se?[`generation`]:[],...e.class===`background`?[`tone`]:[],...e.class===`screenshot`?[`product_version`,`captured_at`]:[]]),le=[...oe,...Object.entries(T).filter(([e])=>!ce.has(e)).flatMap(([,e])=>e)];return(0,q.jsxs)(`div`,{className:`editor`,"data-asset-id":e.id,children:[(0,q.jsx)(`a`,{href:e.full_url,target:`_blank`,rel:`noreferrer`,className:`editor-image`,title:`Open full resolution`,children:(0,q.jsx)(`img`,{src:e.full_url,alt:e.description||e.id})}),(0,q.jsxs)(`div`,{className:`editor-form`,children:[(0,q.jsxs)(`div`,{className:`editor-head`,children:[(0,q.jsx)(`h2`,{children:e.id}),(0,q.jsx)(W,{size:`sm`,color:e.status===`confirmed`?`success`:e.status===`proposed`?`warning`:`gray`,children:e.status}),e.anti_example&&(0,q.jsx)(W,{size:`sm`,color:`error`,children:`anti-example`}),(0,q.jsxs)(`span`,{className:`editor-meta`,children:[e.class,` / `,e.aspect,` / `,e.license]})]}),d&&(0,q.jsx)(`p`,{className:`editor-message`,role:`status`,children:d}),p&&(0,q.jsx)(Hl,{type:`error`,children:p}),le.length>0&&(0,q.jsx)(Hl,{type:`error`,children:le.map(e=>(0,q.jsx)(`div`,{children:e},e))}),(0,q.jsxs)(`div`,{className:`field anti-field${T.avoid_reason?` field-invalid`:``}`,children:[(0,q.jsx)(Gl,{size:`sm`,checked:s.anti_example,onValueChanged:e=>c(t=>({...t,anti_example:e.detail.checked})),children:`Anti-example: shows what not to do (never served for use)`}),s.anti_example&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{className:`field-label`,children:`Why to avoid it`}),(0,q.jsx)(uu,{"aria-label":`Why to avoid it`,placeholder:`e.g. Glossy 3D clip-art with lens flare; reads as generic stock.`,value:s.avoid_reason,invalid:!!T.avoid_reason,onValueChanged:e=>c(t=>({...t,avoid_reason:e.detail.value}))})]}),(0,q.jsx)(fd,{errors:[...T.anti_example??[],...T.avoid_reason??[]]})]}),(0,q.jsxs)(`div`,{className:`field${T.description?` field-invalid`:``}`,children:[(0,q.jsx)(`span`,{className:`field-label`,children:`Description`}),(0,q.jsx)(uu,{"aria-label":`Description`,value:s.description,invalid:!!T.description,onValueChanged:e=>c(t=>({...t,description:e.detail.value}))}),(0,q.jsx)(fd,{errors:T.description})]}),rd.map(e=>(0,q.jsx)(dd,{label:e,value:s.tags[e],vocabulary:t[e]??[],errors:T[e],onChange:t=>c(n=>({...n,tags:{...n.tags,[e]:t}}))},e)),e.class===`background`&&(0,q.jsxs)(`div`,{className:`field${T.tone?` field-invalid`:``}`,children:[(0,q.jsx)(`span`,{className:`field-label`,children:`Tone`}),(0,q.jsx)(nu,{"aria-label":`Tone`,placeholder:`Choose tone`,options:[[`dark`,`dark`],[`light`,`light`]],value:s.tone,invalid:!!T.tone,onValueChanged:e=>c(t=>({...t,tone:e.detail.value}))}),(0,q.jsx)(fd,{errors:T.tone})]}),e.class===`screenshot`&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`div`,{className:`field${T.product_version?` field-invalid`:``}`,children:[(0,q.jsx)(`span`,{className:`field-label`,children:`Product version`}),(0,q.jsx)(lu,{"aria-label":`Product version`,value:s.product_version,invalid:!!T.product_version,onValueChanged:e=>c(t=>({...t,product_version:e.detail.value}))}),(0,q.jsx)(fd,{errors:T.product_version})]}),(0,q.jsxs)(`div`,{className:`field${T.captured_at?` field-invalid`:``}`,children:[(0,q.jsx)(`span`,{className:`field-label`,children:`Captured at`}),(0,q.jsx)(lu,{"aria-label":`Captured at`,placeholder:`YYYY-MM-DD`,value:s.captured_at,invalid:!!T.captured_at,onValueChanged:e=>c(t=>({...t,captured_at:e.detail.value}))}),(0,q.jsx)(fd,{errors:T.captured_at})]})]}),(0,q.jsxs)(`div`,{className:`field${T.license?` field-invalid`:``}`,children:[(0,q.jsx)(`span`,{className:`field-label`,children:`License`}),(0,q.jsx)(lu,{"aria-label":`License`,placeholder:`e.g. adobe-stock:1036498535 or ciq-original`,value:s.license,invalid:!!T.license,onValueChanged:e=>c(t=>({...t,license:e.detail.value}))}),(0,q.jsx)(fd,{errors:T.license})]}),se&&(0,q.jsxs)(`fieldset`,{className:`field generation-field${T.generation?` field-invalid`:``}`,children:[(0,q.jsx)(`legend`,{className:`field-label`,children:`Midjourney generation`}),(0,q.jsx)(uu,{"aria-label":`Generation prompt`,placeholder:`Prompt`,value:s.generation.prompt,invalid:!!T.generation,onValueChanged:e=>c(t=>({...t,generation:{...t.generation,prompt:e.detail.value}}))}),(0,q.jsxs)(`div`,{className:`generation-row`,children:[(0,q.jsx)(lu,{"aria-label":`Generation model`,placeholder:`Model, e.g. v6.1`,value:s.generation.model,invalid:!!T.generation,onValueChanged:e=>c(t=>({...t,generation:{...t.generation,model:e.detail.value}}))}),(0,q.jsx)(lu,{"aria-label":`Generation seed`,placeholder:`Seed`,value:s.generation.seed,invalid:!!T.generation,onValueChanged:e=>c(t=>({...t,generation:{...t.generation,seed:e.detail.value}}))})]}),(0,q.jsx)(fd,{errors:T.generation})]}),(0,q.jsxs)(`div`,{className:`field${T.usage_restrictions?` field-invalid`:``}`,children:[(0,q.jsx)(`span`,{className:`field-label`,children:`Usage restrictions (comma separated)`}),(0,q.jsx)(lu,{"aria-label":`Usage restrictions`,value:s.usage_restrictions,invalid:!!T.usage_restrictions,onValueChanged:e=>c(t=>({...t,usage_restrictions:e.detail.value}))}),(0,q.jsx)(fd,{errors:T.usage_restrictions})]}),(0,q.jsxs)(`div`,{className:`editor-actions`,children:[(0,q.jsx)(G,{size:`sm`,disabled:h||!te,onClick:re,children:`Save`}),e.status===`proposed`&&(0,q.jsx)(G,{size:`sm`,variant:`outline`,disabled:h,onClick:ie,children:`Confirm`}),e.status===`retired`?(0,q.jsx)(G,{size:`sm`,variant:`outline`,disabled:h,onClick:()=>ae(`restore`),children:`Restore`}):(0,q.jsx)(G,{size:`sm`,variant:`outline`,disabled:h,onClick:()=>ae(`retire`),children:`Retire`})]}),(0,q.jsxs)(`section`,{className:`similar`,"aria-label":`More like this`,children:[(0,q.jsx)(`h3`,{children:`More like this`}),x&&(0,q.jsxs)(`p`,{className:`empty`,children:[`Unavailable: `,x]}),!x&&y===null&&(0,q.jsx)(`p`,{className:`empty`,children:`Loading...`}),y&&y.length===0&&(0,q.jsx)(`p`,{className:`empty`,children:`No neighbours found.`}),y&&y.length>0&&(0,q.jsx)(`ul`,{className:`similar-strip`,children:y.map(e=>(0,q.jsx)(`li`,{children:(0,q.jsx)(`a`,{href:e.full_url,title:e.id,onClick:t=>{i&&(t.preventDefault(),i(e.id))},children:(0,q.jsx)(`img`,{src:e.thumb_url,alt:e.description||e.id,loading:`lazy`})})},e.id))})]})]})]})}function md({status:e}){return e===`proposed`?(0,q.jsx)(W,{size:`sm`,color:`warning`,children:`proposed`}):e===`confirmed`?(0,q.jsx)(W,{size:`sm`,color:`success`,children:`confirmed`}):(0,q.jsx)(W,{size:`sm`,color:`gray`,children:e})}function hd({a:e,selected:t,onSelect:n}){let[r,i]=(0,_.useState)(e.thumb_url),[a,o]=(0,_.useState)(e.thumb_url);return a!==e.thumb_url&&(o(e.thumb_url),i(e.thumb_url)),(0,q.jsxs)(`li`,{className:`tile${e.status===`retired`?` tile-retired`:``}${e.anti_example?` tile-anti`:``}${t?` tile-selected`:``}`,"data-status":e.status,children:[(0,q.jsx)(`a`,{href:e.full_url,className:`tile-thumb`,"aria-label":`Edit ${e.id}`,"aria-current":t||void 0,onClick:t=>{t.metaKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),n(e.id))},children:r?(0,q.jsx)(`img`,{src:r,alt:e.description||e.id,loading:`lazy`,decoding:`async`,onError:()=>i(X(r,e))}):(0,q.jsx)(`span`,{className:`tile-placeholder`,role:`img`,"aria-label":`No preview for ${e.id}`,children:`No preview`})}),(0,q.jsxs)(`div`,{className:`tile-meta`,children:[(0,q.jsx)(`span`,{className:`tile-id`,title:e.id,children:e.id}),(0,q.jsxs)(`span`,{className:`tile-badges`,children:[e.anti_example&&(0,q.jsx)(W,{size:`sm`,color:`error`,children:`avoid`}),(0,q.jsx)(md,{status:e.status})]})]}),(0,q.jsxs)(`div`,{className:`tile-sub`,children:[(0,q.jsx)(`span`,{children:e.class}),e.tone&&(0,q.jsx)(`span`,{children:e.tone}),e.products.length>0&&(0,q.jsxs)(`span`,{children:[e.products.slice(0,2).join(`, `),e.products.length>2?` +${e.products.length-2}`:``]})]})]})}function gd({assets:e,total:t,selectedId:n,onSelect:r}){return e.length===0?(0,q.jsx)(`p`,{className:`empty`,children:t===0?`No assets in the library yet.`:`No assets match these filters.`}):(0,q.jsx)(`ul`,{className:`grid`,"aria-label":`${e.length} of ${t} assets`,children:e.map(e=>(0,q.jsx)(hd,{a:e,selected:e.id===n,onSelect:r},e.id))})}var _d=e=>({queue:e,index:0,exited:e.length===0}),vd=e=>e.queue[e.index];function yd(e,t){if(e.exited)return e;switch(t.type){case`next`:return{...e,index:Math.min(e.index+1,e.queue.length-1)};case`prev`:return{...e,index:Math.max(e.index-1,0)};case`confirmed`:case`retired`:{let t=e.queue.filter((t,n)=>n!==e.index);return{queue:t,index:Math.min(e.index,t.length-1),exited:t.length===0}}case`exit`:return{...e,exited:!0}}}var bd=/^(INPUT|TEXTAREA|SELECT)$|^QUANTIC-(TEXT-INPUT|TEXTAREA|COMBOBOX|SELECT)$/;function xd({initialIds:e,assets:t,vocabulary:n,onChanged:r,onExit:i,confirmDiscard:a,onDirtyChange:o}){let[s,c]=(0,_.useReducer)(yd,e,_d),l=(0,_.useRef)(null),u=vd(s),d=t.find(e=>e.id===u);(0,_.useEffect)(()=>{s.exited&&i()},[s.exited,i]);let f=(0,_.useRef)(a);(0,_.useEffect)(()=>{f.current=a});let p=e=>{f.current()&&c({type:e})},m=(0,_.useRef)(p);return(0,_.useEffect)(()=>{m.current=p}),(0,_.useEffect)(()=>{let e=e=>{if(e.metaKey||e.ctrlKey||e.altKey)return;let t=e.composedPath()[0]?.tagName??``;if(!bd.test(t.toUpperCase())){if(e.key===`ArrowRight`)m.current(`next`);else if(e.key===`ArrowLeft`)m.current(`prev`);else if(e.key===`Escape`)m.current(`exit`);else if(e.key===`c`||e.key===`C`)l.current?.confirm();else return;e.preventDefault()}};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),d?(0,q.jsxs)(`div`,{className:`review`,children:[(0,q.jsxs)(`div`,{className:`review-bar`,children:[(0,q.jsx)(G,{size:`sm`,variant:`outline`,disabled:s.index===0,onClick:()=>p(`prev`),children:`Previous`}),(0,q.jsxs)(`span`,{className:`review-position`,role:`status`,"aria-live":`polite`,children:[s.index+1,` of `,s.queue.length]}),(0,q.jsx)(G,{size:`sm`,variant:`outline`,disabled:s.index>=s.queue.length-1,onClick:()=>p(`next`),children:`Next`}),(0,q.jsx)(`span`,{className:`ops-spacer`}),(0,q.jsx)(`span`,{className:`review-keys`,children:`Left/Right: navigate. C: confirm and next. Esc: exit.`}),(0,q.jsx)(G,{size:`sm`,variant:`outline`,onClick:()=>p(`exit`),children:`Exit`})]}),(0,q.jsx)(pd,{ref:l,asset:d,vocabulary:n,onChanged:r,onDirtyChange:o,onTransition:e=>{e===`confirm`?c({type:`confirmed`}):e===`retire`&&c({type:`retired`})}},d.id)]}):(0,q.jsx)(`p`,{className:`empty`,children:`Review queue is empty.`})}var Sd=/^(INPUT|TEXTAREA|SELECT)$|^QUANTIC-(TEXT-INPUT|TEXTAREA|COMBOBOX|SELECT)$/;function Cd(e){if(e.metaKey||e.ctrlKey||e.altKey)return!0;let t=e.composedPath()[0]?.tagName??``;return Sd.test(t.toUpperCase())}function wd(e,t){let n=(0,_.useRef)(e);(0,_.useEffect)(()=>{n.current=e}),(0,_.useEffect)(()=>{if(!t)return;let e=e=>{Cd(e)||(e.repeat&&!e.key.startsWith(`Arrow`)||n.current(e))&&e.preventDefault()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t])}var Td={y:`yes`,n:`no`,m:`maybe`},Ed=[`yes`,`no`,`maybe`],Dd=(e,t)=>e<t?-1:+(e>t);function Od(e,t){let n={yes:[],no:[],maybe:[]},r=[],i=[];for(let a of e){let e=a.rating?.bot;a.status===`proposed`&&e&&!a.rating?.human&&(t.has(a.id)?r.push(a.id):e.strength===`strong`&&a.class!==`screenshot`?n[e.verdict].push(a.id):i.push(a.id))}let a=[];for(let e of Ed){let t=n[e].sort(Dd);for(let n=0;n<t.length;n+=24)a.push({verdict:e,ids:t.slice(n,n+24)})}return{strong:a,unsure:[...r.sort(Dd),...i.sort(Dd)]}}var kd=(e,t)=>Math.max(0,Math.min(e,t-1));function Ad(e){if(e.recent.total===0)return`No verdicts yet`;let t=`Bot agreed with you on ${e.recent.agreed} of ${e.recent.total} recent calls`;return e.strong.total===0?t:`${t} · strong calls ${Math.round(100*e.strong.agreed/e.strong.total)}%`}var jd={yes:`Yes`,no:`No`,maybe:`Maybe-yes`},Md=e=>!!e.rating?.bot&&!e.rating?.human,Nd=(e,t)=>!!e.rating?.bot&&e.rating.bot.verdict!==t,Pd=e=>e.status===`proposed`&&e.rating?.human?.verdict===`yes`;function Fd(e,t){let n=t.id===null?-1:e.indexOf(t.id);return n>=0?n:kd(t.index,e.length)}function Id(e,t){if(e){let n=new Set(t.flatMap(t=>t.verdict===e.verdict?t.ids:[])),r=e.ids.filter(e=>n.has(e));if(r.length===e.ids.length&&r.length>0)return e;if(r.length>0)return{verdict:e.verdict,ids:r}}return t[0]??null}var Ld={yes:`success`,no:`error`,maybe:`warning`},Rd={yes:`Y`,no:`N`,maybe:`M`},zd=400;function Bd({errors:e}){return(0,q.jsx)(q.Fragment,{children:(e??[]).map(e=>(0,q.jsx)(`p`,{className:`field-error`,role:`alert`,children:e},e))})}function Vd({show:e}){return e?(0,q.jsx)(W,{size:`sm`,color:`gray`,className:`bot-mark`,children:`bot`}):null}function Hd({asset:e,vocabulary:t,verdicts:n,errors:r,position:i,active:a,canUndo:o,onVerdict:s,onMove:c,onUndo:l,onEdit:u,onOpenEditor:d,toolbar:f}){let p=e.rating?.bot,m=Md(e),[h,g]=(0,_.useState)(null),[v,y]=(0,_.useState)(``),[b,x]=(0,_.useState)(e.description??``),S=(0,_.useRef)(null),ee=(0,_.useRef)(null),te=(0,_.useRef)(null),C=(0,_.useRef)(null),ne=(0,_.useRef)(e.description??``),w=(0,_.useRef)(!1),re=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=ee.current;h&&e&&e.updateComplete.then(()=>e.focus())},[h]);let ie=(0,_.useRef)(0);(0,_.useEffect)(()=>{ie.current=performance.now()},[]);let ae=(e,t)=>{e.detail>1||e.timeStamp-ie.current<zd||T(t)},T=t=>{Nd(e,t)?(y(``),g(t)):s(t)},oe=()=>{if(w.current){w.current=!1;return}let e=b.trim();e!==ne.current&&(ne.current=e,u(()=>({description:e})))},se=async t=>{let n=te.current;n&&(t&&(w.current=!1,ne.current=e.description??``),n.active=t,await n.updateComplete,t?(await C.current?.updateComplete,C.current?.focus()):le())},ce=()=>re.current?.shadowRoot?.querySelector(`input`)?.focus(),le=()=>S.current?.focus();wd(e=>{if(h)return!1;let t=Td[e.key.toLowerCase()];if(t&&n.includes(t))return T(t),!0;switch(e.key){case`ArrowRight`:return c(1),!0;case`ArrowLeft`:return c(-1),!0;case`t`:case`T`:return ce(),!0;case`d`:case`D`:return se(!0),!0;case`e`:case`E`:return d(),!0;case`z`:case`Z`:return l(),!0;default:return!1}},a);let{byField:ue,general:de}=Su(r),fe=new Set([...rd,`description`,...e.class===`background`?[`tone`]:[]]),pe=[...de,...Object.entries(ue).filter(([e])=>!fe.has(e)).flatMap(([,e])=>e)],me=rd.flatMap(e=>ue[e]??[]),he=rd.flatMap(t=>(e[t]??[]).map(e=>({axis:t,slug:e}))),ge=rd.flatMap(n=>(t[n]??[]).filter(t=>!(e[n]??[]).includes(t)).map(e=>({label:`${e} · ${n}`,value:`${n}/${e}`}))),_e=e=>{let[t,n]=e.split(`/`);n&&rd.includes(t)&&(u(e=>({[t]:ud(e[t],n,!0)})),queueMicrotask(()=>{re.current&&(re.current.value=``)}))};return(0,q.jsxs)(`div`,{className:`rate-card`,ref:S,tabIndex:-1,"data-asset-id":e.id,children:[(0,q.jsx)(`a`,{href:e.full_url,target:`_blank`,rel:`noreferrer`,className:`rate-card-image`,title:`Open full resolution`,children:(0,q.jsx)(`img`,{src:e.full_url,alt:e.description||e.id})}),(0,q.jsxs)(`div`,{className:`rate-card-side`,children:[(0,q.jsxs)(`div`,{className:`rate-card-top`,children:[f,(0,q.jsxs)(`span`,{className:`rate-card-pos`,role:`status`,"aria-live":`polite`,children:[i.index+1,` of `,i.total]})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{className:`rate-card-id`,title:e.id,children:e.id}),(0,q.jsxs)(`span`,{className:`editor-meta`,children:[e.class,` / `,e.aspect,` / `,e.license||`no license`,e.status!==`proposed`&&` / ${e.status}`]})]}),p&&(0,q.jsxs)(`div`,{className:`bot-call`,children:[(0,q.jsxs)(`span`,{className:`bot-call-verdict`,children:[(0,q.jsx)(`span`,{className:`field-label`,children:`Bot`}),(0,q.jsx)(W,{size:`sm`,color:Ld[p.verdict],children:jd[p.verdict]}),(0,q.jsx)(`span`,{className:`bot-strength`,children:p.strength})]}),p.reason&&(0,q.jsxs)(`p`,{className:`bot-reason`,children:[`“`,p.reason,`”`]})]}),e.rating?.human&&(0,q.jsxs)(`p`,{className:`editor-meta`,children:[`Last verdict: `,jd[e.rating.human.verdict],` by `,e.rating.human.by.replace(/\s*<.*>$/,``),e.rating.human.reason?` (“${e.rating.human.reason}”)`:``]}),pe.length>0&&(0,q.jsx)(Hl,{type:`error`,children:pe.map(e=>(0,q.jsx)(`div`,{children:e},e))}),(0,q.jsxs)(`dl`,{className:`card-fields`,children:[(0,q.jsxs)(`dt`,{className:`field-label`,children:[`Description `,(0,q.jsx)(Vd,{show:m&&!!e.description})]}),(0,q.jsxs)(`dd`,{className:ue.description?`field-invalid`:void 0,children:[(0,q.jsx)(`div`,{onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),oe(),se(!1))},children:(0,q.jsxs)(eu,{ref:te,className:`desc-edit`,onCancel:()=>{w.current=!0,x(e.description??``)},children:[(0,q.jsx)(`span`,{slot:`display`,className:`desc-text${e.description?``:` empty`}`,children:e.description||`No description. Press D to add one.`}),(0,q.jsx)(lu,{ref:C,slot:`editor`,size:`sm`,"aria-label":`Description`,value:b,invalid:!!ue.description,onValueChanged:e=>x(e.detail.value),onBlur:oe})]})}),(0,q.jsx)(Bd,{errors:ue.description})]}),(0,q.jsxs)(`dt`,{className:`field-label`,children:[`Tags `,(0,q.jsx)(Vd,{show:m&&he.length>0})]}),(0,q.jsxs)(`dd`,{className:me.length?`field-invalid`:void 0,children:[(0,q.jsxs)(`div`,{className:`chips`,onKeyDown:e=>{e.key===`Escape`&&le()},children:[he.map(({axis:e,slug:t})=>(0,q.jsx)(cu,{size:`sm`,dismissible:!0,title:e,"aria-label":`${e}: ${t}`,onTagDismiss:()=>u(n=>({[e]:ud(n[e],t,!1)})),children:t},`${e}/${t}`)),(0,q.jsx)(Kl,{ref:re,size:`sm`,className:`tag-add`,"aria-label":`Add tag`,placeholder:`Add tag (T)`,options:ge,onValueChanged:e=>_e(e.detail.value)})]}),(0,q.jsx)(Bd,{errors:me})]}),e.class===`background`&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`dt`,{className:`field-label`,children:[`Tone `,(0,q.jsx)(Vd,{show:m&&!!e.tone})]}),(0,q.jsxs)(`dd`,{className:ue.tone?`field-invalid`:void 0,children:[(0,q.jsx)(nu,{size:`sm`,className:`tone-select`,"aria-label":`Tone`,placeholder:`Choose tone`,options:[[`dark`,`dark`],[`light`,`light`]],value:e.tone??``,invalid:!!ue.tone,onValueChanged:t=>{t.detail.value&&t.detail.value!==e.tone&&u(()=>({tone:t.detail.value}))}}),(0,q.jsx)(Bd,{errors:ue.tone})]})]}),e.class===`screenshot`&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`dt`,{className:`field-label`,children:[`Version `,(0,q.jsx)(Vd,{show:m&&!!(e.product_version||e.captured_at)})]}),(0,q.jsxs)(`dd`,{children:[e.product_version||`—`,` · captured `,e.captured_at||`—`,` `,(0,q.jsx)(`span`,{className:`editor-meta`,children:`(fix in the editor)`})]})]})]}),(0,q.jsx)(`div`,{className:`rate-card-actions`,children:h?(0,q.jsxs)(`div`,{className:`why`,onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),s(h,v.trim()||void 0),g(null)):e.key===`Escape`&&(e.preventDefault(),g(null),le())},children:[(0,q.jsxs)(`span`,{className:`why-label`,children:[`You say `,(0,q.jsx)(`strong`,{children:jd[h]}),`; the bot said `,jd[p.verdict],`. Why?`]}),(0,q.jsx)(lu,{ref:ee,size:`sm`,"aria-label":`Why (optional)`,placeholder:`Optional. The bot learns most from these.`,value:v,onValueChanged:e=>y(e.detail.value)}),(0,q.jsxs)(`span`,{className:`key-hints`,children:[(0,q.jsx)(`kbd`,{children:`Enter`}),` save verdict · `,(0,q.jsx)(`kbd`,{children:`Esc`}),` cancel`]})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`div`,{className:`verdict-buttons`,children:[n.map(e=>(0,q.jsxs)(G,{size:`sm`,variant:e===p?.verdict?`primary`:`outline`,onClick:t=>ae(t,e),children:[(0,q.jsx)(`kbd`,{className:e===p?.verdict?`kbd-on-brand`:void 0,children:Rd[e]}),` `,jd[e]]},e)),(0,q.jsx)(`span`,{className:`ops-spacer`}),(0,q.jsx)(G,{size:`sm`,variant:`ghost`,disabled:!o,onClick:l,children:`Undo`}),(0,q.jsx)(G,{size:`sm`,variant:`ghost`,onClick:d,children:`Editor`})]}),(0,q.jsxs)(`span`,{className:`key-hints`,children:[(0,q.jsx)(`kbd`,{children:`T`}),` tags · `,(0,q.jsx)(`kbd`,{children:`D`}),` description · `,(0,q.jsx)(`kbd`,{children:`E`}),` editor · `,(0,q.jsx)(`kbd`,{children:`Z`}),` undo · `,(0,q.jsx)(`kbd`,{children:`←`}),` `,(0,q.jsx)(`kbd`,{children:`→`}),` move`]})]})})]})]})}var Ud=400;function Wd({a:e,wrong:t,focused:n,onToggle:r}){let[i,a]=(0,_.useState)(e.thumb_url),o=e.rating?.bot?.reason??``;return(0,q.jsx)(`li`,{className:`rate-tile${t?` rate-tile-wrong`:``}${n?` rate-tile-focus`:``}`,children:(0,q.jsxs)(`a`,{href:e.full_url,role:`checkbox`,"aria-checked":t,"aria-label":`${e.id}: bot is wrong`,title:o?`${e.id}: ${o}`:e.id,onClick:e=>{e.metaKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),r())},children:[i?(0,q.jsx)(`img`,{src:i,alt:e.description||e.id,decoding:`async`,onError:()=>a(X(i,e))}):(0,q.jsx)(`span`,{className:`tile-placeholder`,children:`No preview`}),o&&(0,q.jsx)(`span`,{className:`rate-tile-reason`,children:o}),t&&(0,q.jsx)(W,{className:`rate-tile-flag`,size:`sm`,color:`error`,children:`Bot is wrong`})]})})}function Gd({screen:e,assets:t,total:n,active:r,canUndo:i,onAccept:a,onUndo:o,toolbar:s}){let[c,l]=(0,_.useState)(new Set),[u,d]=(0,_.useState)(0),f=(0,_.useRef)(null),p=(0,_.useRef)(0);(0,_.useEffect)(()=>{p.current=performance.now()},[]);let m=e.ids,h=Math.min(u,m.length-1),g=e=>l(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}),v=()=>{let e=m.filter(e=>c.has(e));a(m.filter(e=>!c.has(e)),e)},y=()=>{let e=f.current;return e?Math.max(1,getComputedStyle(e).gridTemplateColumns.split(` `).length):1},b=e=>d(Math.max(0,Math.min(h+e,m.length-1)));wd(e=>{switch(e.key){case`ArrowRight`:return b(1),!0;case`ArrowLeft`:return b(-1),!0;case`ArrowDown`:return b(y()),!0;case`ArrowUp`:return b(-y()),!0;case` `:return g(m[h]),!0;case`Enter`:return v(),!0;case`z`:case`Z`:return o(),!0;default:return!1}},r);let x=m.length-m.filter(e=>c.has(e)).length,S=jd[e.verdict];return(0,q.jsxs)(`section`,{className:`strong`,"aria-label":`Strong ${S}`,children:[(0,q.jsxs)(`div`,{className:`lane-head`,children:[s,(0,q.jsxs)(`h2`,{children:[`Strong `,S,` (`,n,`)`]}),n>m.length&&(0,q.jsxs)(`span`,{className:`lane-sub`,children:[`showing `,m.length]}),(0,q.jsx)(`span`,{className:`ops-spacer`}),(0,q.jsxs)(`span`,{className:`key-hints`,children:[(0,q.jsx)(`kbd`,{children:`Click`}),` or `,(0,q.jsx)(`kbd`,{children:`Space`}),` bot is wrong · `,(0,q.jsx)(`kbd`,{children:`←↑↓→`}),` move · `,(0,q.jsx)(`kbd`,{children:`Z`}),` undo`]}),(0,q.jsx)(G,{size:`sm`,variant:`outline`,disabled:!i,onClick:o,children:`Undo`}),(0,q.jsxs)(G,{size:`sm`,onClick:e=>{e.detail<=1&&e.timeStamp-p.current>=Ud&&v()},children:[x?`Accept ${x} as ${S}`:`Send ${m.length} to cards`,` `,(0,q.jsx)(`kbd`,{className:`kbd-on-brand`,children:`Enter`})]})]}),(0,q.jsx)(`ul`,{className:`strong-grid`,ref:f,"aria-label":`${m.length} strong ${S} calls`,children:m.map((e,n)=>{let i=t.get(e);return i?(0,q.jsx)(Wd,{a:i,wrong:c.has(e),focused:r&&n===h,onToggle:()=>{d(n),g(e)}},e):null})})]})}var Kd=e=>Object.keys(e.result?.failed??{}).length;function qd(e){if(e.state===`failed`)return e.error??`Auto-rate failed.`;let t=e.result??{},n=Kd(e);return`${tf(Number(t.rated??0),`image`)} rated, ${n} failed, ${Number(t.skipped??0)} skipped.`}var Jd=[`review`,`needs`,`parked`],Yd=e=>e.split(/[:.]/)[0],Xd=6e3,Zd=`quarry.rate.wrong`;function Qd(){try{return new Set(JSON.parse(localStorage.getItem(Zd)??`[]`))}catch{return new Set}}var $d=(e,t)=>new Set([...e,...t]),ef=(e,t)=>{let n=new Set(e);return t.forEach(e=>n.delete(e)),n},tf=(e,t)=>`${e} ${t}${e===1?``:`s`}`;function nf({active:e,assets:t,vocabulary:n,summary:r,summaryError:i,rateJob:a,onStartRate:o,onRateJobFinished:s,onDismissRateJob:c,rateError:l,onChanged:u,onAssetSaved:d,refreshStatus:f,reloadAssets:p,refreshSummary:m,confirmDiscard:h,onDirtyChange:g,onToReviewCount:v}){let[y,b]=(0,_.useState)(`review`),[x,S]=(0,_.useState)(null),[ee,te]=(0,_.useState)(Qd),[C,ne]=(0,_.useState)(new Set),[w,re]=(0,_.useState)({}),ie=(e,t,n)=>re(r=>({...r,[e]:{verdict:r[e]?.verdict??[],edit:r[e]?.edit??[],[t]:n}})),ae=e=>[...new Set([...w[e]?.verdict??[],...w[e]?.edit??[]])],[T,oe]=(0,_.useState)({}),se=(0,_.useRef)(T),ce=(0,_.useRef)({}),[le,ue]=(0,_.useState)(null),[de,fe]=(0,_.useState)({id:null,index:0}),[pe,me]=(0,_.useState)({id:null,index:0}),[he,ge]=(0,_.useState)(null),[_e,ve]=(0,_.useState)(null),[ye,be]=(0,_.useState)(!1),[xe,Se]=(0,_.useState)({}),Ce=(0,_.useRef)([]),[we,E]=(0,_.useState)(0),[D,Te]=(0,_.useState)(null),Ee=()=>{E(Ce.current.length),Te(Ce.current.at(-1)?.commit??null)},De=(0,_.useRef)(Promise.resolve()),[Oe,ke]=(0,_.useState)(0),O=(0,_.useCallback)(e=>{ke(e=>e+1);let t=De.current.then(e);De.current=t.catch(e=>ge({kind:`error`,title:`Something went wrong`,text:e.message})).finally(()=>ke(e=>e-1))},[]),Ae=(0,_.useRef)(void 0),je=(0,_.useCallback)(()=>{clearTimeout(Ae.current),Ae.current=setTimeout(()=>{m(),f()},800)},[m,f]);(0,_.useEffect)(()=>()=>clearTimeout(Ae.current),[]),(0,_.useEffect)(()=>{if(!Oe)return;let e=e=>e.preventDefault();return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[Oe]);let Me=(0,_.useMemo)(()=>new Map(t.map(e=>[e.id,e])),[t]),Ne=(0,_.useMemo)(()=>t.filter(e=>!C.has(e.id)),[t,C]),{strong:Pe,unsure:Fe}=(0,_.useMemo)(()=>Od(Ne,ee),[Ne,ee]),Ie=e=>Pe.filter(t=>t.verdict===e).reduce((e,t)=>e+t.ids.length,0),Le=Pe.reduce((e,t)=>e+t.ids.length,0);(0,_.useEffect)(()=>{v(Le+Fe.length)},[v,Le,Fe.length]);let Re=(0,_.useMemo)(()=>Ne.filter(e=>e.status===`parked`).map(e=>e.id).sort(),[Ne]),ze=(0,_.useMemo)(()=>Ne.filter(Pd),[Ne]),Be=ze.map(e=>e.id).join(`,`),Ve=Id(le,Pe);Ve!==le&&ue(Ve);let He=Ve===null?`unsure`:Fe.length===0?`sure`:x??`sure`,Ue=Fd(Fe,de),We=Fe[Ue],Ge=Fd(Re,pe),Ke=Re[Ge],[qe,Je]=(0,_.useState)(e);qe!==e&&(Je(e),e||ve(null)),(0,_.useEffect)(()=>{if(!e||y!==`needs`)return;let t=!0;return Vu().then(e=>{t&&e.ok&&Se(e.data)}),()=>{t=!1}},[e,y,Be]),(0,_.useEffect)(()=>{if(!e)return;let t=y===`parked`?Re:Fe,n=y===`parked`?Ge:Ue;for(let e of t.slice(n+1,n+3)){let t=Me.get(e);t&&(new Image().src=t.full_url)}},[e,y,Fe,Re,Ue,Ge,Me]),(0,_.useEffect)(()=>{if(!t.length)return;let e=[...ee].filter(e=>{let t=Me.get(e);return t?.status===`proposed`&&!t.rating?.human});localStorage.setItem(Zd,JSON.stringify(e))},[ee,t.length,Me]),(0,_.useEffect)(()=>{if(!he||he.kind===`error`)return;let e=setTimeout(()=>ge(e=>e===he?null:e),Xd);return()=>clearTimeout(e)},[he]);let Ye=e=>{Ce.current.push(e),Ee()},Xe=(e,t,n,r)=>{let i=r===`parked`?Ge:Ue;(r===`parked`?me:fe)({id:null,index:i}),ne(t=>$d(t,[e])),ge(null),O(async()=>{let a=await Iu(e,t,n);if(a.ok)d(a.data.asset),ie(e,`verdict`,[]),te(t=>ef(t,[e])),Ye({commit:a.data.commit,ids:[e],from:r,verdict:t}),a.data.needs_details&&ge({kind:`info`,title:`Moved to Needs details`,text:`${e}: Yes recorded. Missing: ${a.data.needs_details.join(`; `)}`,undoCommit:a.data.commit});else{let n=Fu(a);ie(e,`verdict`,n.length?n:[a.error]),ge({kind:`error`,title:`Could not record ${jd[t]}`,text:`${e}: ${a.error}. Fix it on the card and try again.`}),(r===`parked`?me:fe)({id:e,index:i}),r===`parked`?b(`parked`):(b(`review`),S(`unsure`))}ne(t=>ef(t,[e])),je()})},Ze=(e,t,n)=>{te(e=>$d(e,n)),ge(n.length&&!t.length?{kind:`info`,title:`${tf(n.length,`image`)} sent to the cards`}:null),t.length&&(ne(e=>$d(e,t)),O(async()=>{let r=await Lu(e.verdict,t);if(r.ok){let t=r.data.failed,i=Object.keys(r.data.needs_details);te(e=>$d(e,Object.keys(t))),re(e=>{let n={...e};for(let[r,i]of Object.entries(t))n[r]={verdict:i,edit:e[r]?.edit??[]};return n}),r.data.commit&&Ye({commit:r.data.commit,ids:[...r.data.applied,...i],from:`grid`,verdict:e.verdict});let a=[];i.length&&a.push(`${i.length} moved to Needs details`),Object.keys(t).length&&a.push(`${Object.keys(t).length} need a fix on the card`),n.length&&a.push(`${n.length} flagged for a closer look`),ge({kind:Object.keys(t).length?`error`:`success`,title:r.data.commit?`Accepted ${r.data.applied.length} as ${jd[e.verdict]}`:`Nothing accepted`,text:a.length?`${a.join(`, `)}.`:void 0,undoCommit:r.data.commit??void 0})}else ge({kind:`error`,title:`Could not accept the screen`,text:r.error});await p(),ne(e=>ef(e,t)),je()}))},Qe=()=>{Ce.current.length&&O(async()=>{let e=Ce.current.at(-1);if(!e)return;let t=await Ru(e.commit);if((t.ok||t.status>=400&&t.status<500)&&(Ce.current.pop(),Ee()),!t.ok){ge({kind:`error`,title:`Could not undo`,text:t.error});return}await p(),re(t=>{let n={...t};return e.ids.forEach(e=>{n[e]&&(n[e]={...n[e],verdict:[]})}),n});let n=e.ids[0]??null;e.from===`grid`?(b(`review`),S(`sure`),ue({verdict:e.verdict,ids:e.ids})):e.from===`parked`?(b(`parked`),me({id:n,index:0})):(b(`review`),S(`unsure`),fe({id:n,index:0}));let r=e.ids.length===1?e.ids[0]:tf(e.ids.length,`image`);ge({kind:`success`,title:`Undone`,text:`${jd[e.verdict]} on ${r} is back for review.`}),je()})},$e=(e,t)=>{let n=se.current[e]??Me.get(e);if(!n)return;let r=t(n);se.current={...se.current,[e]:{...n,...r}},oe(se.current),ce.current[e]=(ce.current[e]??0)+1,O(async()=>{let t=await _u(e,r);if(--ce.current[e],t.ok){d(t.asset);let n=e=>Object.keys(r).includes(Yd(e));re(t=>t[e]?{...t,[e]:{verdict:t[e].verdict.filter(e=>!n(e)),edit:t[e].edit.filter(e=>!n(e))}}:t)}else ie(e,`edit`,t.errors.length?t.errors:[t.error]),ge({kind:`error`,title:`Edit not saved`,text:`${e}: ${t.errors.join(`; `)||t.error}`});if(!t.ok||ce.current[e]===0){let{[e]:t,...n}=se.current;se.current=n,oe(n)}})},k=e=>{ve(e),ge(null)},A=()=>{h()&&ve(null)};wd(e=>e.key===`Escape`&&(A(),!0),e&&_e!==null);let et=e=>{b(e),document.activeElement?.blur()},tt=e=>{S(e),document.activeElement?.blur()},nt=r?.waiting_for_bot??0,rt=r?.rater,it=!!a?.running,at=_e?Me.get(_e):void 0,ot=e&&!at;return(0,q.jsxs)(`div`,{className:`rate`,children:[(0,q.jsxs)(`div`,{className:`rate-strip`,role:`region`,"aria-label":`Rating status`,children:[(0,q.jsxs)(`div`,{className:`rate-strip-text`,children:[(0,q.jsx)(`strong`,{children:r?Ad(r.agreement):i?`Rating status unavailable`:`Loading...`}),r?.learning===`recent`&&(0,q.jsx)(`span`,{className:`editor-meta`,children:`Learning from recent verdicts — build the real index for look-alike learning.`}),i&&(0,q.jsx)(`span`,{className:`field-error`,children:i})]}),(0,q.jsx)(`span`,{className:`ops-spacer`}),a?.job&&(0,q.jsxs)(`span`,{className:`rate-last-run`,children:[(0,q.jsxs)(W,{size:`sm`,color:a.job.state===`failed`||Kd(a.job)>0?`warning`:`success`,children:[`Auto-rate `,a.job.state===`failed`?`stopped`:`done`]}),(0,q.jsx)(`span`,{className:`editor-meta`,children:qd(a.job)}),(0,q.jsx)(G,{size:`sm`,variant:`ghost`,onClick:()=>be(e=>!e),children:ye?`Hide log`:`Log`}),(0,q.jsxs)(G,{icon:!0,size:`sm`,variant:`ghost`,onClick:()=>{be(!1),c()},children:[(0,q.jsx)($l,{size:`xs`}),(0,q.jsx)(`span`,{className:`sr-only`,children:`Dismiss Auto-rate result`})]})]}),Oe>0&&(0,q.jsxs)(`span`,{className:`rate-saving`,children:[(0,q.jsx)(ru,{size:`xs`,label:`Saving changes`}),` Saving `,tf(Oe,`change`),`...`]}),(0,q.jsxs)(`span`,{className:`rate-waiting`,children:[tf(nt,`image`),` waiting for the bot`]}),(0,q.jsx)(G,{size:`sm`,disabled:!rt?.available||it||nt===0,onClick:o,children:it?`Auto-rating...`:`Auto-rate`}),rt&&!rt.available&&(0,q.jsx)(`span`,{className:`editor-meta rate-off`,children:rt.reason})]}),l&&(0,q.jsx)(`div`,{className:`rate-notice`,children:(0,q.jsx)(Hl,{type:`error`,children:l})}),a&&(a.running||ye)&&(0,q.jsx)(`div`,{className:`rate-notice rate-job`,children:(0,q.jsx)(Wu,{jobId:a.id,name:`Auto-rate`,onFinished:s},a.id)}),he&&e&&(0,q.jsx)(`div`,{className:`rate-toasts`,children:(0,q.jsxs)(du,{open:!0,type:he.kind,onClose:()=>ge(null),children:[(0,q.jsx)(`span`,{slot:`title`,children:he.title}),he.text,he.undoCommit&&D===he.undoCommit&&(0,q.jsx)(G,{slot:`action`,size:`sm`,variant:`ghost`,onClick:Qe,children:`Undo`})]})}),at?(0,q.jsxs)(`div`,{className:`review rate-editor`,children:[(0,q.jsxs)(`div`,{className:`review-bar`,children:[(0,q.jsx)(G,{size:`sm`,variant:`outline`,onClick:A,children:`Back to rating`}),(0,q.jsx)(`span`,{className:`review-keys`,children:`Esc: back to rating.`})]}),(0,q.jsx)(pd,{asset:at,vocabulary:n,onChanged:u,onDirtyChange:g,onTransition:()=>{ve(null),m()}},at.id)]}):(0,q.jsxs)(su,{size:`sm`,className:`rate-tabs`,selectedIndex:Jd.indexOf(y),onTabSelected:e=>et(Jd[e.detail.index]),children:[(0,q.jsxs)(au,{index:0,children:[`To review (`,Le+Fe.length,`)`]}),(0,q.jsxs)(au,{index:1,children:[`Needs details (`,ze.length,`)`]}),(0,q.jsxs)(au,{index:2,children:[`Parked (`,Re.length,`)`]}),(0,q.jsx)(ou,{index:0,children:y===`review`&&(()=>{if(!Ve&&Fe.length===0)return(0,q.jsxs)(`div`,{className:`rate-empty`,children:[(0,q.jsx)(`h2`,{children:`All caught up`}),(0,q.jsx)(`p`,{className:`empty`,children:nt>0?`${tf(nt,`image`)} still waiting for the bot. Run Auto-rate to queue them here.`:`Nothing left for you to check. New images land here once Auto-rate has looked at them.`}),(ze.length>0||Re.length>0)&&(0,q.jsxs)(`div`,{className:`rate-empty-actions`,children:[ze.length>0&&(0,q.jsxs)(G,{size:`sm`,variant:`outline`,onClick:()=>et(`needs`),children:[`Needs details (`,ze.length,`)`]}),Re.length>0&&(0,q.jsxs)(G,{size:`sm`,variant:`outline`,onClick:()=>et(`parked`),children:[`Parked (`,Re.length,`)`]})]})]});let e=(0,q.jsxs)(Wl,{size:`sm`,"aria-label":`Lane`,className:`lane-switch`,children:[(0,q.jsxs)(Ul,{active:He===`sure`,disabled:!Ve,onClick:()=>tt(`sure`),children:[`Bot is sure (`,Le,`)`]}),(0,q.jsxs)(Ul,{active:He===`unsure`,disabled:Fe.length===0,onClick:()=>tt(`unsure`),children:[`Bot is unsure (`,Fe.length,`)`]})]});return(0,q.jsx)(q.Fragment,{children:He===`sure`&&Ve?(0,q.jsx)(Gd,{screen:Ve,assets:Me,total:Ie(Ve.verdict),active:ot&&y===`review`,canUndo:we>0,onAccept:(e,t)=>Ze(Ve,e,t),onUndo:Qe,toolbar:e},`${Ve.verdict}:${Ve.ids[0]}`):We&&Me.get(We)?(0,q.jsx)(Hd,{asset:T[We]??Me.get(We),vocabulary:n,verdicts:[`yes`,`no`,`maybe`],errors:ae(We),position:{index:Ue,total:Fe.length},active:ot&&y===`review`,canUndo:we>0,onVerdict:(e,t)=>Xe(We,e,t,`card`),onMove:e=>{let t=Math.max(0,Math.min(Ue+e,Fe.length-1));fe({id:Fe[t],index:t})},onUndo:Qe,onEdit:e=>$e(We,e),onOpenEditor:()=>k(We),toolbar:e},We):null})})()}),(0,q.jsx)(ou,{index:1,children:y===`needs`&&(ze.length===0?(0,q.jsxs)(`div`,{className:`rate-empty`,children:[(0,q.jsx)(`h2`,{children:`Nothing needs details`}),(0,q.jsx)(`p`,{className:`empty`,children:`A Yes that cannot be confirmed from the card (say, a missing license) shows up here with what is missing.`})]}):(0,q.jsx)(`ul`,{className:`needs-list`,"aria-label":`Needs details`,children:ze.map(e=>(0,q.jsxs)(`li`,{className:`needs-row`,children:[(0,q.jsx)(`img`,{src:e.thumb_url,alt:e.description||e.id,loading:`lazy`}),(0,q.jsxs)(`div`,{className:`needs-info`,children:[(0,q.jsx)(`strong`,{children:e.id}),(0,q.jsxs)(`span`,{className:`editor-meta`,children:[e.class,` / `,e.source?.origin,` / `,e.license||`no license`]}),(xe[e.id]??[]).map(t=>(0,q.jsxs)(`p`,{className:`field-error`,children:[t.error,!t.editable&&(0,q.jsxs)(`span`,{className:`field-hint`,children:[` (not editable here: set it in `,e.id,`.json)`]})]},t.error))]}),(0,q.jsx)(G,{size:`sm`,variant:`outline`,onClick:()=>k(e.id),children:`Open in editor`})]},e.id))}))}),(0,q.jsx)(ou,{index:2,children:y===`parked`&&(()=>{let e=Ke?Me.get(Ke):void 0;return e?(0,q.jsx)(Hd,{asset:T[e.id]??e,vocabulary:n,verdicts:[`yes`,`no`],errors:ae(e.id),position:{index:Ge,total:Re.length},active:ot&&y===`parked`,canUndo:we>0,onVerdict:(t,n)=>Xe(e.id,t,n,`parked`),onMove:e=>{let t=Math.max(0,Math.min(Ge+e,Re.length-1));me({id:Re[t],index:t})},onUndo:Qe,onEdit:t=>$e(e.id,t),onOpenEditor:()=>k(e.id)},e.id):(0,q.jsxs)(`div`,{className:`rate-empty`,children:[(0,q.jsx)(`h2`,{children:`Nothing parked`}),(0,q.jsx)(`p`,{className:`empty`,children:`Maybe-yes images wait here, out of the library, until someone says Yes or No.`})]})})()})]})]})}var rf=`quarry.filters`;function af(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)({}),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)({}),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(`library`),[ee,te]=(0,_.useState)(null),[C,ne]=(0,_.useState)(null),[w,re]=(0,_.useState)(null),[ie,ae]=(0,_.useState)(null),[T,oe]=(0,_.useState)(()=>localStorage.getItem(rf)!==`closed`),se=()=>oe(e=>(localStorage.setItem(rf,e?`closed`:`open`),!e)),[ce,le]=(0,_.useState)(null),[ue,de]=(0,_.useState)(null),[fe,pe]=(0,_.useState)(!1),me=(0,_.useCallback)(()=>{mu().then(e=>{s(e),l(null)}).catch(e=>l(e.message))},[]),he=(0,_.useCallback)(()=>{Bu().then(e=>{e.ok?(te(e.data),ne(null)):ne(e.error)})},[]),ge=(0,_.useCallback)(()=>pu().then(e=>{t(e),a(null)}).catch(e=>a(e.message)).finally(()=>r(!0)),[]),_e=(0,_.useCallback)(()=>{ge(),hu().then(h).catch(()=>h({})),me(),he()},[me,he,ge]);(0,_.useEffect)(_e,[_e]),(0,_.useEffect)(()=>{let e=setInterval(me,3e4);return()=>clearInterval(e)},[me]),(0,_.useEffect)(()=>{if(!w?.running)return;let e=setInterval(()=>{ge(),he()},5e3);return()=>clearInterval(e)},[w?.running,ge,he]);let ve=(0,_.useCallback)(async()=>{ae(null);let e=await zu();e.ok?re({id:e.data.job_id,running:!0}):ae(`Auto-rate did not start: ${e.error}`)},[]),ye=(0,_.useCallback)(e=>{re(t=>t&&{...t,running:!1,job:e}),_e()},[_e]),be=(0,_.useMemo)(()=>ce?Xu(Y(ce.ids,e),u,``):Xu(e,u,f),[e,u,f,ce]),xe=(0,_.useCallback)(e=>{t(t=>t.map(t=>t.id===e.id?e:t)),me()},[me]),Se=(0,_.useCallback)(e=>t(t=>t.map(t=>t.id===e.id?e:t)),[]),Ce=async()=>{let e=f.trim();if(!e)return;pe(!0),de(null);let t=await Nu(e);pe(!1),t.ok?le({q:e,ids:t.hits,stale:t.stale}):(le(null),de(t.error))},we=()=>{le(null),de(null),p(``)},E=(0,_.useRef)(!1),D=(0,_.useCallback)(e=>{E.current=e},[]),Te=(0,_.useCallback)(()=>ld(E.current,()=>window.confirm(`You have unsaved changes. Discard them?`))?(E.current=!1,!0):!1,[]);(0,_.useEffect)(()=>{let e=e=>{E.current&&e.preventDefault()};return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[]);let Ee=(0,_.useCallback)(()=>b(null),[]),De=(0,_.useMemo)(()=>e.filter(e=>e.status===`proposed`).length,[e]),[Oe,ke]=(0,_.useState)(0),O=e.find(e=>e.id===g),Ae=()=>{Te()&&v(null)},je=y===null&&x===`library`,Me=e=>{(y!==null||x!==e)&&Te()&&(v(null),b(null),S(e))};return(0,q.jsxs)(`div`,{className:`app`,children:[(0,q.jsxs)(`header`,{className:`topbar`,children:[je&&(0,q.jsxs)(G,{icon:!0,size:`sm`,variant:`ghost`,onClick:se,children:[T?(0,q.jsx)(Zl,{size:`xs`}):(0,q.jsx)(Ql,{size:`xs`}),(0,q.jsx)(`span`,{className:`sr-only`,children:T?`Hide filters`:`Show filters`})]}),(0,q.jsx)(`h1`,{children:`Quarry`}),(0,q.jsxs)(Wl,{size:`sm`,"aria-label":`View`,children:[(0,q.jsx)(Ul,{active:y===null&&x===`library`,onClick:()=>Me(`library`),children:`Library`}),(0,q.jsxs)(Ul,{active:y===null&&x===`rate`,onClick:()=>Me(`rate`),children:[`Rate (`,Oe,`)`]}),(0,q.jsxs)(Ul,{active:y!==null,disabled:De===0,onClick:()=>{y===null&&Te()&&(v(null),S(`library`),b(e.filter(e=>e.status===`proposed`).map(e=>e.id)))},children:[`Review queue (`,De,`)`]}),(0,q.jsx)(Ul,{active:y===null&&x===`vocab`,onClick:()=>Me(`vocab`),children:`Vocabulary`}),(0,q.jsx)(Ul,{active:y===null&&x===`ingest`,onClick:()=>Me(`ingest`),children:`Ingest`})]}),(0,q.jsx)(`div`,{className:`search`,children:(0,q.jsx)(`div`,{onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ce())},children:(0,q.jsx)(lu,{type:`search`,"aria-label":`Search assets`,placeholder:`Filter; press Enter for index search`,value:f,onValueChanged:e=>{p(e.detail.value),le(null),de(null)}})})}),(0,q.jsx)(`span`,{className:`result-count`,children:n?`${be.length} / ${e.length}`:``})]}),(0,q.jsx)(nd,{status:o,error:c,onRefresh:_e}),(0,q.jsx)(`main`,{className:`main rate-main`,hidden:y!==null||x!==`rate`,children:(0,q.jsx)(nf,{active:y===null&&x===`rate`,assets:e,vocabulary:m,summary:ee,summaryError:C,rateJob:w,rateError:ie,onStartRate:ve,onRateJobFinished:ye,onDismissRateJob:()=>re(null),onChanged:xe,onAssetSaved:Se,refreshStatus:me,reloadAssets:ge,refreshSummary:he,confirmDiscard:Te,onDirtyChange:D,onToReviewCount:ke})}),y===null?x===`rate`?null:x===`vocab`?(0,q.jsx)(`main`,{className:`main`,children:(0,q.jsx)($u,{assets:e,vocabulary:m,onChanged:_e,onOpenInGrid:(e,t)=>{d({[e]:[t]}),p(``),S(`library`)}})}):x===`ingest`?(0,q.jsx)(`main`,{className:`main`,children:(0,q.jsx)(Ku,{products:m.products??[],onIngested:_e,rater:ee?.rater??null,waiting:ee?.waiting_for_bot??0,rateJob:w,onAutoRate:ve,rateError:ie,onReviewQueue:()=>{let t=e.filter(e=>e.status===`proposed`).map(e=>e.id);t.length&&b(t)}})}):(0,q.jsx)(`div`,{className:`body`,children:(0,q.jsxs)(K,{resizable:!0,split:`18% 82%`,children:[(0,q.jsx)(iu,{variant:`solid`,collapsed:!T,minSize:12,maxSize:35,children:(0,q.jsx)(td,{assets:e,filters:u,q:f,onToggle:(e,t,n)=>d(r=>{let i=r[e]??[];return{...r,[e]:n?[...i.filter(e=>e!==t),t]:i.filter(e=>e!==t)}})})}),(0,q.jsx)(iu,{minSize:50,maxSize:100,children:(0,q.jsxs)(K,{resizable:!0,split:`58% 42%`,collapseBelow:`560px`,children:[(0,q.jsx)(iu,{minSize:30,children:(0,q.jsxs)(`main`,{className:`main`,"aria-label":`Gallery`,children:[(fe||ce||ue)&&(0,q.jsxs)(`div`,{className:`search-banner`,role:`region`,"aria-label":`Index search`,children:[fe&&(0,q.jsx)(`p`,{className:`empty`,children:`Searching index...`}),ue&&(0,q.jsxs)(Hl,{type:`error`,children:[`Index search failed: `,ue,` `,/mismatch|embedder/i.test(ue)?`Re-index with the matching embedder (or restart the workbench with the right embedder option), then try again.`:``]}),ce&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`div`,{className:`search-banner-row`,children:[(0,q.jsxs)(`strong`,{children:[`Index search: “`,ce.q,`”`]}),(0,q.jsxs)(`span`,{children:[be.length,` result`,be.length===1?``:`s`,`, best match first`]}),(0,q.jsx)(G,{size:`sm`,variant:`outline`,onClick:we,children:`Clear`})]}),ce.stale&&(0,q.jsx)(Hl,{type:`warning`,children:`The index is stale; results may miss recent edits. Re-index to refresh.`})]}),ue&&(0,q.jsx)(`div`,{children:(0,q.jsx)(G,{size:`sm`,variant:`outline`,onClick:we,children:`Clear`})})]}),i?(0,q.jsxs)(`p`,{className:`empty`,role:`alert`,children:[`Could not load assets: `,i]}):n?(0,q.jsx)(gd,{assets:be,total:e.length,selectedId:g,onSelect:e=>{(e===g||Te())&&v(e)}}):(0,q.jsx)(`p`,{className:`empty`,children:`Loading...`})]})}),(0,q.jsx)(iu,{collapsed:!O,minSize:25,maxSize:70,children:O&&(0,q.jsxs)(`aside`,{className:`detail`,"aria-label":`Asset details`,children:[(0,q.jsxs)(`div`,{className:`detail-bar`,children:[(0,q.jsx)(`span`,{className:`detail-title`,children:`Details`}),(0,q.jsxs)(G,{icon:!0,size:`sm`,variant:`ghost`,onClick:Ae,children:[(0,q.jsx)($l,{size:`xs`}),(0,q.jsx)(`span`,{className:`sr-only`,children:`Close details`})]})]}),(0,q.jsx)(pd,{asset:O,vocabulary:m,onChanged:xe,onDirtyChange:D,onOpenSimilar:t=>{e.some(e=>e.id===t)&&Te()&&v(t)}},O.id)]})})]})})]})}):(0,q.jsx)(`main`,{className:`main`,children:(0,q.jsx)(xd,{initialIds:y,assets:e,vocabulary:m,onChanged:xe,onExit:Ee,confirmDiscard:Te,onDirtyChange:D})})]})}Ye.inject(),Xe.inject(),(0,v.createRoot)(document.getElementById(`root`)).render((0,q.jsx)(_.StrictMode,{children:(0,q.jsx)(af,{})}));