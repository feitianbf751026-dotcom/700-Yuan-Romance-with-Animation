var yf=Object.defineProperty;var _f=(e,t,n)=>t in e?yf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var co=(e,t,n)=>_f(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Ef(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ru={exports:{}},gi={},iu={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),wf=Symbol.for("react.portal"),kf=Symbol.for("react.fragment"),xf=Symbol.for("react.strict_mode"),Sf=Symbol.for("react.profiler"),Cf=Symbol.for("react.provider"),Nf=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),Df=Symbol.for("react.memo"),Lf=Symbol.for("react.lazy"),fo=Symbol.iterator;function zf(e){return e===null||typeof e!="object"?null:(e=fo&&e[fo]||e["@@iterator"],typeof e=="function"?e:null)}var lu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},su=Object.assign,ou={};function hn(e,t,n){this.props=e,this.context=t,this.refs=ou,this.updater=n||lu}hn.prototype.isReactComponent={};hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function au(){}au.prototype=hn.prototype;function gs(e,t,n){this.props=e,this.context=t,this.refs=ou,this.updater=n||lu}var vs=gs.prototype=new au;vs.constructor=gs;su(vs,hn.prototype);vs.isPureReactComponent=!0;var po=Array.isArray,uu=Object.prototype.hasOwnProperty,ys={current:null},cu={key:!0,ref:!0,__self:!0,__source:!0};function fu(e,t,n){var r,i={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)uu.call(t,r)&&!cu.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var a=Array(o),f=0;f<o;f++)a[f]=arguments[f+2];i.children=a}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:sr,type:e,key:l,ref:s,props:i,_owner:ys.current}}function Rf(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _s(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Af(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ho=/\/+/g;function Ai(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Af(""+e.key):t.toString(36)}function Ar(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case sr:case wf:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ai(s,0):r,po(i)?(n="",e!=null&&(n=e.replace(ho,"$&/")+"/"),Ar(i,t,n,"",function(f){return f})):i!=null&&(_s(i)&&(i=Rf(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ho,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",po(e))for(var o=0;o<e.length;o++){l=e[o];var a=r+Ai(l,o);s+=Ar(l,t,n,a,i)}else if(a=zf(e),typeof a=="function")for(e=a.call(e),o=0;!(l=e.next()).done;)l=l.value,a=r+Ai(l,o++),s+=Ar(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function dr(e,t,n){if(e==null)return e;var r=[],i=0;return Ar(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Of(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Or={transition:null},Mf={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Or,ReactCurrentOwner:ys};function du(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:dr,forEach:function(e,t,n){dr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return dr(e,function(){t++}),t},toArray:function(e){return dr(e,function(t){return t})||[]},only:function(e){if(!_s(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=hn;A.Fragment=kf;A.Profiler=Sf;A.PureComponent=gs;A.StrictMode=xf;A.Suspense=Pf;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mf;A.act=du;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=su({},e.props),i=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=ys.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(a in t)uu.call(t,a)&&!cu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&o!==void 0?o[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){o=Array(a);for(var f=0;f<a;f++)o[f]=arguments[f+2];r.children=o}return{$$typeof:sr,type:e.type,key:i,ref:l,props:r,_owner:s}};A.createContext=function(e){return e={$$typeof:Nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cf,_context:e},e.Consumer=e};A.createElement=fu;A.createFactory=function(e){var t=fu.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Tf,render:e}};A.isValidElement=_s;A.lazy=function(e){return{$$typeof:Lf,_payload:{_status:-1,_result:e},_init:Of}};A.memo=function(e,t){return{$$typeof:Df,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Or.transition;Or.transition={};try{e()}finally{Or.transition=t}};A.unstable_act=du;A.useCallback=function(e,t){return fe.current.useCallback(e,t)};A.useContext=function(e){return fe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};A.useEffect=function(e,t){return fe.current.useEffect(e,t)};A.useId=function(){return fe.current.useId()};A.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return fe.current.useMemo(e,t)};A.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};A.useRef=function(e){return fe.current.useRef(e)};A.useState=function(e){return fe.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return fe.current.useTransition()};A.version="18.3.1";iu.exports=A;var R=iu.exports;const jf=Ef(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff=R,If=Symbol.for("react.element"),Bf=Symbol.for("react.fragment"),bf=Object.prototype.hasOwnProperty,Uf=Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hf={key:!0,ref:!0,__self:!0,__source:!0};function pu(e,t,n){var r,i={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)bf.call(t,r)&&!Hf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:If,type:e,key:l,ref:s,props:i,_owner:Uf.current}}gi.Fragment=Bf;gi.jsx=pu;gi.jsxs=pu;ru.exports=gi;var T=ru.exports,hu={exports:{}},xe={},mu={exports:{}},gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,h){var w=N.length;N.push(h);e:for(;0<w;){var D=w-1>>>1,z=N[D];if(0<i(z,h))N[D]=h,N[w]=z,w=D;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var h=N[0],w=N.pop();if(w!==h){N[0]=w;e:for(var D=0,z=N.length,X=z>>>1;D<X;){var B=2*(D+1)-1,be=N[B],Ne=B+1,Bt=N[Ne];if(0>i(be,w))Ne<z&&0>i(Bt,be)?(N[D]=Bt,N[Ne]=w,D=Ne):(N[D]=be,N[B]=w,D=B);else if(Ne<z&&0>i(Bt,w))N[D]=Bt,N[Ne]=w,D=Ne;else break e}}return h}function i(N,h){var w=N.sortIndex-h.sortIndex;return w!==0?w:N.id-h.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var a=[],f=[],g=1,m=null,p=3,_=!1,E=!1,k=!1,I=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(N){for(var h=n(f);h!==null;){if(h.callback===null)r(f);else if(h.startTime<=N)r(f),h.sortIndex=h.expirationTime,t(a,h);else break;h=n(f)}}function v(N){if(k=!1,d(N),!E)if(n(a)!==null)E=!0,vn(C);else{var h=n(f);h!==null&&St(v,h.startTime-N)}}function C(N,h){E=!1,k&&(k=!1,c(L),L=-1),_=!0;var w=p;try{for(d(h),m=n(a);m!==null&&(!(m.expirationTime>h)||N&&!ie());){var D=m.callback;if(typeof D=="function"){m.callback=null,p=m.priorityLevel;var z=D(m.expirationTime<=h);h=e.unstable_now(),typeof z=="function"?m.callback=z:m===n(a)&&r(a),d(h)}else r(a);m=n(a)}if(m!==null)var X=!0;else{var B=n(f);B!==null&&St(v,B.startTime-h),X=!1}return X}finally{m=null,p=w,_=!1}}var x=!1,S=null,L=-1,j=5,O=-1;function ie(){return!(e.unstable_now()-O<j)}function Ce(){if(S!==null){var N=e.unstable_now();O=N;var h=!0;try{h=S(!0,N)}finally{h?xt():(x=!1,S=null)}}else x=!1}var xt;if(typeof u=="function")xt=function(){u(Ce)};else if(typeof MessageChannel<"u"){var fr=new MessageChannel,Ri=fr.port2;fr.port1.onmessage=Ce,xt=function(){Ri.postMessage(null)}}else xt=function(){I(Ce,0)};function vn(N){S=N,x||(x=!0,xt())}function St(N,h){L=I(function(){N(e.unstable_now())},h)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){E||_||(E=!0,vn(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var h=3;break;default:h=p}var w=p;p=h;try{return N()}finally{p=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,h){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var w=p;p=N;try{return h()}finally{p=w}},e.unstable_scheduleCallback=function(N,h,w){var D=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?D+w:D):w=D,N){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=w+z,N={id:g++,callback:h,priorityLevel:N,startTime:w,expirationTime:z,sortIndex:-1},w>D?(N.sortIndex=w,t(f,N),n(a)===null&&N===n(f)&&(k?(c(L),L=-1):k=!0,St(v,w-D))):(N.sortIndex=z,t(a,N),E||_||(E=!0,vn(C))),N},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(N){var h=p;return function(){var w=p;p=h;try{return N.apply(this,arguments)}finally{p=w}}}})(gu);mu.exports=gu;var $f=mu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf=R,ke=$f;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vu=new Set,$n={};function Ft(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for($n[e]=t,e=0;e<t.length;e++)vu.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sl=Object.prototype.hasOwnProperty,Wf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mo={},go={};function Qf(e){return Sl.call(go,e)?!0:Sl.call(mo,e)?!1:Wf.test(e)?go[e]=!0:(mo[e]=!0,!1)}function Gf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kf(e,t,n,r){if(t===null||typeof t>"u"||Gf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Es=/[\-:]([a-z])/g;function ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Es,ws);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Es,ws);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Es,ws);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function ks(e,t,n,r){var i=re.hasOwnProperty(t)?re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kf(t,n,i,r)&&(n=null),r||i===null?Qf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nt=Vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pr=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),$t=Symbol.for("react.fragment"),xs=Symbol.for("react.strict_mode"),Cl=Symbol.for("react.profiler"),yu=Symbol.for("react.provider"),_u=Symbol.for("react.context"),Ss=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),Tl=Symbol.for("react.suspense_list"),Cs=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Eu=Symbol.for("react.offscreen"),vo=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=vo&&e[vo]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Oi;function Ln(e){if(Oi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oi=t&&t[1]||""}return`
`+Oi+e}var Mi=!1;function ji(e,t){if(!e||Mi)return"";Mi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,o=l.length-1;1<=s&&0<=o&&i[s]!==l[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==l[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==l[o]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=o);break}}}finally{Mi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ln(e):""}function Yf(e){switch(e.tag){case 5:return Ln(e.type);case 16:return Ln("Lazy");case 13:return Ln("Suspense");case 19:return Ln("SuspenseList");case 0:case 2:case 15:return e=ji(e.type,!1),e;case 11:return e=ji(e.type.render,!1),e;case 1:return e=ji(e.type,!0),e;default:return""}}function Pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $t:return"Fragment";case Ht:return"Portal";case Cl:return"Profiler";case xs:return"StrictMode";case Nl:return"Suspense";case Tl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _u:return(e.displayName||"Context")+".Consumer";case yu:return(e._context.displayName||"Context")+".Provider";case Ss:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cs:return t=e.displayName||null,t!==null?t:Pl(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return Pl(e(t))}catch{}}return null}function Xf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pl(t);case 8:return t===xs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zf(e){var t=wu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hr(e){e._valueTracker||(e._valueTracker=Zf(e))}function ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Dl(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xu(e,t){t=t.checked,t!=null&&ks(e,"checked",t,!1)}function Ll(e,t){xu(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zl(e,t.type,n):t.hasOwnProperty("defaultValue")&&zl(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _o(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function zl(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Eo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(zn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function Su(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mr,Nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jf=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){Jf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function Tu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function Pu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Tu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var qf=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ol(e,t){if(t){if(qf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function Ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jl=null;function Ns(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,tn=null,nn=null;function ko(e){if(e=ur(e)){if(typeof Fl!="function")throw Error(y(280));var t=e.stateNode;t&&(t=wi(t),Fl(e.stateNode,e.type,t))}}function Du(e){tn?nn?nn.push(e):nn=[e]:tn=e}function Lu(){if(tn){var e=tn,t=nn;if(nn=tn=null,ko(e),t)for(e=0;e<t.length;e++)ko(t[e])}}function zu(e,t){return e(t)}function Ru(){}var Fi=!1;function Au(e,t,n){if(Fi)return e(t,n);Fi=!0;try{return zu(e,t,n)}finally{Fi=!1,(tn!==null||nn!==null)&&(Ru(),Lu())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=wi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var Il=!1;if(Je)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Il=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Il=!1}function ed(e,t,n,r,i,l,s,o,a){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(g){this.onError(g)}}var Mn=!1,Gr=null,Kr=!1,Bl=null,td={onError:function(e){Mn=!0,Gr=e}};function nd(e,t,n,r,i,l,s,o,a){Mn=!1,Gr=null,ed.apply(td,arguments)}function rd(e,t,n,r,i,l,s,o,a){if(nd.apply(this,arguments),Mn){if(Mn){var f=Gr;Mn=!1,Gr=null}else throw Error(y(198));Kr||(Kr=!0,Bl=f)}}function It(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ou(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xo(e){if(It(e)!==e)throw Error(y(188))}function id(e){var t=e.alternate;if(!t){if(t=It(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return xo(i),e;if(l===r)return xo(i),t;l=l.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=l;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,r=l;break}if(o===r){s=!0,r=i,n=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===n){s=!0,n=l,r=i;break}if(o===r){s=!0,r=l,n=i;break}o=o.sibling}if(!s)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Mu(e){return e=id(e),e!==null?ju(e):null}function ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ju(e);if(t!==null)return t;e=e.sibling}return null}var Fu=ke.unstable_scheduleCallback,So=ke.unstable_cancelCallback,ld=ke.unstable_shouldYield,sd=ke.unstable_requestPaint,K=ke.unstable_now,od=ke.unstable_getCurrentPriorityLevel,Ts=ke.unstable_ImmediatePriority,Iu=ke.unstable_UserBlockingPriority,Yr=ke.unstable_NormalPriority,ad=ke.unstable_LowPriority,Bu=ke.unstable_IdlePriority,vi=null,Ve=null;function ud(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:dd,cd=Math.log,fd=Math.LN2;function dd(e){return e>>>=0,e===0?32:31-(cd(e)/fd|0)|0}var gr=64,vr=4194304;function Rn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var o=s&~i;o!==0?r=Rn(o):(l&=s,l!==0&&(r=Rn(l)))}else s=n&~i,s!==0?r=Rn(s):l!==0&&(r=Rn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),i=1<<n,r|=e[n],t&=~i;return r}function pd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Fe(l),o=1<<s,a=i[s];a===-1?(!(o&n)||o&r)&&(i[s]=pd(o,t)):a<=t&&(e.expiredLanes|=o),l&=~o}}function bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bu(){var e=gr;return gr<<=1,!(gr&4194240)&&(gr=64),e}function Ii(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function md(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Fe(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Ps(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Uu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hu,Ds,$u,Vu,Wu,Ul=!1,yr=[],ct=null,ft=null,dt=null,Qn=new Map,Gn=new Map,st=[],gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Co(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function En(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ur(t),t!==null&&Ds(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vd(e,t,n,r,i){switch(t){case"focusin":return ct=En(ct,e,t,n,r,i),!0;case"dragenter":return ft=En(ft,e,t,n,r,i),!0;case"mouseover":return dt=En(dt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Qn.set(l,En(Qn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Gn.set(l,En(Gn.get(l)||null,e,t,n,r,i)),!0}return!1}function Qu(e){var t=Tt(e.target);if(t!==null){var n=It(t);if(n!==null){if(t=n.tag,t===13){if(t=Ou(n),t!==null){e.blockedOn=t,Wu(e.priority,function(){$u(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jl=r,n.target.dispatchEvent(r),jl=null}else return t=ur(n),t!==null&&Ds(t),e.blockedOn=n,!1;t.shift()}return!0}function No(e,t,n){Mr(e)&&n.delete(t)}function yd(){Ul=!1,ct!==null&&Mr(ct)&&(ct=null),ft!==null&&Mr(ft)&&(ft=null),dt!==null&&Mr(dt)&&(dt=null),Qn.forEach(No),Gn.forEach(No)}function wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ul||(Ul=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,yd)))}function Kn(e){function t(i){return wn(i,e)}if(0<yr.length){wn(yr[0],e);for(var n=1;n<yr.length;n++){var r=yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&wn(ct,e),ft!==null&&wn(ft,e),dt!==null&&wn(dt,e),Qn.forEach(t),Gn.forEach(t),n=0;n<st.length;n++)r=st[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)Qu(n),n.blockedOn===null&&st.shift()}var rn=nt.ReactCurrentBatchConfig,Zr=!0;function _d(e,t,n,r){var i=F,l=rn.transition;rn.transition=null;try{F=1,Ls(e,t,n,r)}finally{F=i,rn.transition=l}}function Ed(e,t,n,r){var i=F,l=rn.transition;rn.transition=null;try{F=4,Ls(e,t,n,r)}finally{F=i,rn.transition=l}}function Ls(e,t,n,r){if(Zr){var i=Hl(e,t,n,r);if(i===null)Ki(e,t,r,Jr,n),Co(e,r);else if(vd(i,e,t,n,r))r.stopPropagation();else if(Co(e,r),t&4&&-1<gd.indexOf(e)){for(;i!==null;){var l=ur(i);if(l!==null&&Hu(l),l=Hl(e,t,n,r),l===null&&Ki(e,t,r,Jr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ki(e,t,r,null,n)}}var Jr=null;function Hl(e,t,n,r){if(Jr=null,e=Ns(r),e=Tt(e),e!==null)if(t=It(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ou(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function Gu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(od()){case Ts:return 1;case Iu:return 4;case Yr:case ad:return 16;case Bu:return 536870912;default:return 16}default:return 16}}var at=null,zs=null,jr=null;function Ku(){if(jr)return jr;var e,t=zs,n=t.length,r,i="value"in at?at.value:at.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[l-r];r++);return jr=i.slice(e,1<r?1-r:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function To(){return!1}function Se(e){function t(n,r,i,l,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?_r:To,this.isPropagationStopped=To,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=Se(mn),ar=Q({},mn,{view:0,detail:0}),wd=Se(ar),Bi,bi,kn,yi=Q({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:As,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(Bi=e.screenX-kn.screenX,bi=e.screenY-kn.screenY):bi=Bi=0,kn=e),Bi)},movementY:function(e){return"movementY"in e?e.movementY:bi}}),Po=Se(yi),kd=Q({},yi,{dataTransfer:0}),xd=Se(kd),Sd=Q({},ar,{relatedTarget:0}),Ui=Se(Sd),Cd=Q({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nd=Se(Cd),Td=Q({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pd=Se(Td),Dd=Q({},mn,{data:0}),Do=Se(Dd),Ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ad(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rd[e])?!!t[e]:!1}function As(){return Ad}var Od=Q({},ar,{key:function(e){if(e.key){var t=Ld[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:As,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Md=Se(Od),jd=Q({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lo=Se(jd),Fd=Q({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:As}),Id=Se(Fd),Bd=Q({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),bd=Se(Bd),Ud=Q({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hd=Se(Ud),$d=[9,13,27,32],Os=Je&&"CompositionEvent"in window,jn=null;Je&&"documentMode"in document&&(jn=document.documentMode);var Vd=Je&&"TextEvent"in window&&!jn,Yu=Je&&(!Os||jn&&8<jn&&11>=jn),zo=" ",Ro=!1;function Xu(e,t){switch(e){case"keyup":return $d.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function Wd(e,t){switch(e){case"compositionend":return Zu(t);case"keypress":return t.which!==32?null:(Ro=!0,zo);case"textInput":return e=t.data,e===zo&&Ro?null:e;default:return null}}function Qd(e,t){if(Vt)return e==="compositionend"||!Os&&Xu(e,t)?(e=Ku(),jr=zs=at=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yu&&t.locale!=="ko"?null:t.data;default:return null}}var Gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gd[e.type]:t==="textarea"}function Ju(e,t,n,r){Du(r),t=qr(t,"onChange"),0<t.length&&(n=new Rs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fn=null,Yn=null;function Kd(e){uc(e,0)}function _i(e){var t=Gt(e);if(ku(t))return e}function Yd(e,t){if(e==="change")return t}var qu=!1;if(Je){var Hi;if(Je){var $i="oninput"in document;if(!$i){var Oo=document.createElement("div");Oo.setAttribute("oninput","return;"),$i=typeof Oo.oninput=="function"}Hi=$i}else Hi=!1;qu=Hi&&(!document.documentMode||9<document.documentMode)}function Mo(){Fn&&(Fn.detachEvent("onpropertychange",ec),Yn=Fn=null)}function ec(e){if(e.propertyName==="value"&&_i(Yn)){var t=[];Ju(t,Yn,e,Ns(e)),Au(Kd,t)}}function Xd(e,t,n){e==="focusin"?(Mo(),Fn=t,Yn=n,Fn.attachEvent("onpropertychange",ec)):e==="focusout"&&Mo()}function Zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _i(Yn)}function Jd(e,t){if(e==="click")return _i(t)}function qd(e,t){if(e==="input"||e==="change")return _i(t)}function ep(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:ep;function Xn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sl.call(t,i)||!Be(e[i],t[i]))return!1}return!0}function jo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fo(e,t){var n=jo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jo(n)}}function tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nc(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function Ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tp(e){var t=nc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tc(n.ownerDocument.documentElement,n)){if(r!==null&&Ms(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Fo(n,l);var s=Fo(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var np=Je&&"documentMode"in document&&11>=document.documentMode,Wt=null,$l=null,In=null,Vl=!1;function Io(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vl||Wt==null||Wt!==Qr(r)||(r=Wt,"selectionStart"in r&&Ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),In&&Xn(In,r)||(In=r,r=qr($l,"onSelect"),0<r.length&&(t=new Rs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wt)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},Vi={},rc={};Je&&(rc=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function Ei(e){if(Vi[e])return Vi[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rc)return Vi[e]=t[n];return e}var ic=Ei("animationend"),lc=Ei("animationiteration"),sc=Ei("animationstart"),oc=Ei("transitionend"),ac=new Map,Bo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){ac.set(e,t),Ft(t,[e])}for(var Wi=0;Wi<Bo.length;Wi++){var Qi=Bo[Wi],rp=Qi.toLowerCase(),ip=Qi[0].toUpperCase()+Qi.slice(1);Et(rp,"on"+ip)}Et(ic,"onAnimationEnd");Et(lc,"onAnimationIteration");Et(sc,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(oc,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lp=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function bo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rd(r,t,void 0,e),e.currentTarget=null}function uc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],a=o.instance,f=o.currentTarget;if(o=o.listener,a!==l&&i.isPropagationStopped())break e;bo(i,o,f),l=a}else for(s=0;s<r.length;s++){if(o=r[s],a=o.instance,f=o.currentTarget,o=o.listener,a!==l&&i.isPropagationStopped())break e;bo(i,o,f),l=a}}}if(Kr)throw e=Bl,Kr=!1,Bl=null,e}function U(e,t){var n=t[Yl];n===void 0&&(n=t[Yl]=new Set);var r=e+"__bubble";n.has(r)||(cc(t,e,2,!1),n.add(r))}function Gi(e,t,n){var r=0;t&&(r|=4),cc(n,e,r,t)}var wr="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[wr]){e[wr]=!0,vu.forEach(function(n){n!=="selectionchange"&&(lp.has(n)||Gi(n,!1,e),Gi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wr]||(t[wr]=!0,Gi("selectionchange",!1,t))}}function cc(e,t,n,r){switch(Gu(t)){case 1:var i=_d;break;case 4:i=Ed;break;default:i=Ls}n=i.bind(null,t,n,e),i=void 0,!Il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ki(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;o!==null;){if(s=Tt(o),s===null)return;if(a=s.tag,a===5||a===6){r=l=s;continue e}o=o.parentNode}}r=r.return}Au(function(){var f=l,g=Ns(n),m=[];e:{var p=ac.get(e);if(p!==void 0){var _=Rs,E=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":_=Md;break;case"focusin":E="focus",_=Ui;break;case"focusout":E="blur",_=Ui;break;case"beforeblur":case"afterblur":_=Ui;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Po;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Id;break;case ic:case lc:case sc:_=Nd;break;case oc:_=bd;break;case"scroll":_=wd;break;case"wheel":_=Hd;break;case"copy":case"cut":case"paste":_=Pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Lo}var k=(t&4)!==0,I=!k&&e==="scroll",c=k?p!==null?p+"Capture":null:p;k=[];for(var u=f,d;u!==null;){d=u;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,c!==null&&(v=Wn(u,c),v!=null&&k.push(Jn(u,v,d)))),I)break;u=u.return}0<k.length&&(p=new _(p,E,null,n,g),m.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",p&&n!==jl&&(E=n.relatedTarget||n.fromElement)&&(Tt(E)||E[qe]))break e;if((_||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,_?(E=n.relatedTarget||n.toElement,_=f,E=E?Tt(E):null,E!==null&&(I=It(E),E!==I||E.tag!==5&&E.tag!==6)&&(E=null)):(_=null,E=f),_!==E)){if(k=Po,v="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=Lo,v="onPointerLeave",c="onPointerEnter",u="pointer"),I=_==null?p:Gt(_),d=E==null?p:Gt(E),p=new k(v,u+"leave",_,n,g),p.target=I,p.relatedTarget=d,v=null,Tt(g)===f&&(k=new k(c,u+"enter",E,n,g),k.target=d,k.relatedTarget=I,v=k),I=v,_&&E)t:{for(k=_,c=E,u=0,d=k;d;d=bt(d))u++;for(d=0,v=c;v;v=bt(v))d++;for(;0<u-d;)k=bt(k),u--;for(;0<d-u;)c=bt(c),d--;for(;u--;){if(k===c||c!==null&&k===c.alternate)break t;k=bt(k),c=bt(c)}k=null}else k=null;_!==null&&Uo(m,p,_,k,!1),E!==null&&I!==null&&Uo(m,I,E,k,!0)}}e:{if(p=f?Gt(f):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var C=Yd;else if(Ao(p))if(qu)C=qd;else{C=Zd;var x=Xd}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Jd);if(C&&(C=C(e,f))){Ju(m,C,n,g);break e}x&&x(e,p,f),e==="focusout"&&(x=p._wrapperState)&&x.controlled&&p.type==="number"&&zl(p,"number",p.value)}switch(x=f?Gt(f):window,e){case"focusin":(Ao(x)||x.contentEditable==="true")&&(Wt=x,$l=f,In=null);break;case"focusout":In=$l=Wt=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,Io(m,n,g);break;case"selectionchange":if(np)break;case"keydown":case"keyup":Io(m,n,g)}var S;if(Os)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Vt?Xu(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Yu&&n.locale!=="ko"&&(Vt||L!=="onCompositionStart"?L==="onCompositionEnd"&&Vt&&(S=Ku()):(at=g,zs="value"in at?at.value:at.textContent,Vt=!0)),x=qr(f,L),0<x.length&&(L=new Do(L,e,null,n,g),m.push({event:L,listeners:x}),S?L.data=S:(S=Zu(n),S!==null&&(L.data=S)))),(S=Vd?Wd(e,n):Qd(e,n))&&(f=qr(f,"onBeforeInput"),0<f.length&&(g=new Do("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:f}),g.data=S))}uc(m,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Wn(e,n),l!=null&&r.unshift(Jn(e,l,i)),l=Wn(e,t),l!=null&&r.push(Jn(e,l,i))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uo(e,t,n,r,i){for(var l=t._reactName,s=[];n!==null&&n!==r;){var o=n,a=o.alternate,f=o.stateNode;if(a!==null&&a===r)break;o.tag===5&&f!==null&&(o=f,i?(a=Wn(n,l),a!=null&&s.unshift(Jn(n,a,o))):i||(a=Wn(n,l),a!=null&&s.push(Jn(n,a,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var sp=/\r\n?/g,op=/\u0000|\uFFFD/g;function Ho(e){return(typeof e=="string"?e:""+e).replace(sp,`
`).replace(op,"")}function kr(e,t,n){if(t=Ho(t),Ho(e)!==t&&n)throw Error(y(425))}function ei(){}var Wl=null,Ql=null;function Gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,ap=typeof clearTimeout=="function"?clearTimeout:void 0,$o=typeof Promise=="function"?Promise:void 0,up=typeof queueMicrotask=="function"?queueMicrotask:typeof $o<"u"?function(e){return $o.resolve(null).then(e).catch(cp)}:Kl;function cp(e){setTimeout(function(){throw e})}function Yi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Kn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),$e="__reactFiber$"+gn,qn="__reactProps$"+gn,qe="__reactContainer$"+gn,Yl="__reactEvents$"+gn,fp="__reactListeners$"+gn,dp="__reactHandles$"+gn;function Tt(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qe]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vo(e);e!==null;){if(n=e[$e])return n;e=Vo(e)}return t}e=n,n=e.parentNode}return null}function ur(e){return e=e[$e]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function wi(e){return e[qn]||null}var Xl=[],Kt=-1;function wt(e){return{current:e}}function H(e){0>Kt||(e.current=Xl[Kt],Xl[Kt]=null,Kt--)}function b(e,t){Kt++,Xl[Kt]=e.current,e.current=t}var _t={},ae=wt(_t),ge=wt(!1),Rt=_t;function an(e,t){var n=e.type.contextTypes;if(!n)return _t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function ti(){H(ge),H(ae)}function Wo(e,t,n){if(ae.current!==_t)throw Error(y(168));b(ae,t),b(ge,n)}function fc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,Xf(e)||"Unknown",i));return Q({},n,r)}function ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,Rt=ae.current,b(ae,e),b(ge,ge.current),!0}function Qo(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=fc(e,t,Rt),r.__reactInternalMemoizedMergedChildContext=e,H(ge),H(ae),b(ae,e)):H(ge),b(ge,n)}var Ke=null,ki=!1,Xi=!1;function dc(e){Ke===null?Ke=[e]:Ke.push(e)}function pp(e){ki=!0,dc(e)}function kt(){if(!Xi&&Ke!==null){Xi=!0;var e=0,t=F;try{var n=Ke;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ke=null,ki=!1}catch(i){throw Ke!==null&&(Ke=Ke.slice(e+1)),Fu(Ts,kt),i}finally{F=t,Xi=!1}}return null}var Yt=[],Xt=0,ri=null,ii=0,Te=[],Pe=0,At=null,Ye=1,Xe="";function Ct(e,t){Yt[Xt++]=ii,Yt[Xt++]=ri,ri=e,ii=t}function pc(e,t,n){Te[Pe++]=Ye,Te[Pe++]=Xe,Te[Pe++]=At,At=e;var r=Ye;e=Xe;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var l=32-Fe(t)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ye=1<<32-Fe(t)+i|n<<i|r,Xe=l+e}else Ye=1<<l|n<<i|r,Xe=e}function js(e){e.return!==null&&(Ct(e,1),pc(e,1,0))}function Fs(e){for(;e===ri;)ri=Yt[--Xt],Yt[Xt]=null,ii=Yt[--Xt],Yt[Xt]=null;for(;e===At;)At=Te[--Pe],Te[Pe]=null,Xe=Te[--Pe],Te[Pe]=null,Ye=Te[--Pe],Te[Pe]=null}var we=null,Ee=null,$=!1,je=null;function hc(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Go(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,Ee=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=At!==null?{id:Ye,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,Ee=null,!0):!1;default:return!1}}function Zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jl(e){if($){var t=Ee;if(t){var n=t;if(!Go(e,t)){if(Zl(e))throw Error(y(418));t=pt(n.nextSibling);var r=we;t&&Go(e,t)?hc(r,n):(e.flags=e.flags&-4097|2,$=!1,we=e)}}else{if(Zl(e))throw Error(y(418));e.flags=e.flags&-4097|2,$=!1,we=e}}}function Ko(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function xr(e){if(e!==we)return!1;if(!$)return Ko(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gl(e.type,e.memoizedProps)),t&&(t=Ee)){if(Zl(e))throw mc(),Error(y(418));for(;t;)hc(e,t),t=pt(t.nextSibling)}if(Ko(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=we?pt(e.stateNode.nextSibling):null;return!0}function mc(){for(var e=Ee;e;)e=pt(e.nextSibling)}function un(){Ee=we=null,$=!1}function Is(e){je===null?je=[e]:je.push(e)}var hp=nt.ReactCurrentBatchConfig;function xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var o=i.refs;s===null?delete o[l]:o[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Sr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yo(e){var t=e._init;return t(e._payload)}function gc(e){function t(c,u){if(e){var d=c.deletions;d===null?(c.deletions=[u],c.flags|=16):d.push(u)}}function n(c,u){if(!e)return null;for(;u!==null;)t(c,u),u=u.sibling;return null}function r(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function i(c,u){return c=vt(c,u),c.index=0,c.sibling=null,c}function l(c,u,d){return c.index=d,e?(d=c.alternate,d!==null?(d=d.index,d<u?(c.flags|=2,u):d):(c.flags|=2,u)):(c.flags|=1048576,u)}function s(c){return e&&c.alternate===null&&(c.flags|=2),c}function o(c,u,d,v){return u===null||u.tag!==6?(u=rl(d,c.mode,v),u.return=c,u):(u=i(u,d),u.return=c,u)}function a(c,u,d,v){var C=d.type;return C===$t?g(c,u,d.props.children,v,d.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===it&&Yo(C)===u.type)?(v=i(u,d.props),v.ref=xn(c,u,d),v.return=c,v):(v=Vr(d.type,d.key,d.props,null,c.mode,v),v.ref=xn(c,u,d),v.return=c,v)}function f(c,u,d,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=il(d,c.mode,v),u.return=c,u):(u=i(u,d.children||[]),u.return=c,u)}function g(c,u,d,v,C){return u===null||u.tag!==7?(u=zt(d,c.mode,v,C),u.return=c,u):(u=i(u,d),u.return=c,u)}function m(c,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=rl(""+u,c.mode,d),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case pr:return d=Vr(u.type,u.key,u.props,null,c.mode,d),d.ref=xn(c,null,u),d.return=c,d;case Ht:return u=il(u,c.mode,d),u.return=c,u;case it:var v=u._init;return m(c,v(u._payload),d)}if(zn(u)||yn(u))return u=zt(u,c.mode,d,null),u.return=c,u;Sr(c,u)}return null}function p(c,u,d,v){var C=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return C!==null?null:o(c,u,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pr:return d.key===C?a(c,u,d,v):null;case Ht:return d.key===C?f(c,u,d,v):null;case it:return C=d._init,p(c,u,C(d._payload),v)}if(zn(d)||yn(d))return C!==null?null:g(c,u,d,v,null);Sr(c,d)}return null}function _(c,u,d,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return c=c.get(d)||null,o(u,c,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pr:return c=c.get(v.key===null?d:v.key)||null,a(u,c,v,C);case Ht:return c=c.get(v.key===null?d:v.key)||null,f(u,c,v,C);case it:var x=v._init;return _(c,u,d,x(v._payload),C)}if(zn(v)||yn(v))return c=c.get(d)||null,g(u,c,v,C,null);Sr(u,v)}return null}function E(c,u,d,v){for(var C=null,x=null,S=u,L=u=0,j=null;S!==null&&L<d.length;L++){S.index>L?(j=S,S=null):j=S.sibling;var O=p(c,S,d[L],v);if(O===null){S===null&&(S=j);break}e&&S&&O.alternate===null&&t(c,S),u=l(O,u,L),x===null?C=O:x.sibling=O,x=O,S=j}if(L===d.length)return n(c,S),$&&Ct(c,L),C;if(S===null){for(;L<d.length;L++)S=m(c,d[L],v),S!==null&&(u=l(S,u,L),x===null?C=S:x.sibling=S,x=S);return $&&Ct(c,L),C}for(S=r(c,S);L<d.length;L++)j=_(S,c,L,d[L],v),j!==null&&(e&&j.alternate!==null&&S.delete(j.key===null?L:j.key),u=l(j,u,L),x===null?C=j:x.sibling=j,x=j);return e&&S.forEach(function(ie){return t(c,ie)}),$&&Ct(c,L),C}function k(c,u,d,v){var C=yn(d);if(typeof C!="function")throw Error(y(150));if(d=C.call(d),d==null)throw Error(y(151));for(var x=C=null,S=u,L=u=0,j=null,O=d.next();S!==null&&!O.done;L++,O=d.next()){S.index>L?(j=S,S=null):j=S.sibling;var ie=p(c,S,O.value,v);if(ie===null){S===null&&(S=j);break}e&&S&&ie.alternate===null&&t(c,S),u=l(ie,u,L),x===null?C=ie:x.sibling=ie,x=ie,S=j}if(O.done)return n(c,S),$&&Ct(c,L),C;if(S===null){for(;!O.done;L++,O=d.next())O=m(c,O.value,v),O!==null&&(u=l(O,u,L),x===null?C=O:x.sibling=O,x=O);return $&&Ct(c,L),C}for(S=r(c,S);!O.done;L++,O=d.next())O=_(S,c,L,O.value,v),O!==null&&(e&&O.alternate!==null&&S.delete(O.key===null?L:O.key),u=l(O,u,L),x===null?C=O:x.sibling=O,x=O);return e&&S.forEach(function(Ce){return t(c,Ce)}),$&&Ct(c,L),C}function I(c,u,d,v){if(typeof d=="object"&&d!==null&&d.type===$t&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case pr:e:{for(var C=d.key,x=u;x!==null;){if(x.key===C){if(C=d.type,C===$t){if(x.tag===7){n(c,x.sibling),u=i(x,d.props.children),u.return=c,c=u;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===it&&Yo(C)===x.type){n(c,x.sibling),u=i(x,d.props),u.ref=xn(c,x,d),u.return=c,c=u;break e}n(c,x);break}else t(c,x);x=x.sibling}d.type===$t?(u=zt(d.props.children,c.mode,v,d.key),u.return=c,c=u):(v=Vr(d.type,d.key,d.props,null,c.mode,v),v.ref=xn(c,u,d),v.return=c,c=v)}return s(c);case Ht:e:{for(x=d.key;u!==null;){if(u.key===x)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(c,u.sibling),u=i(u,d.children||[]),u.return=c,c=u;break e}else{n(c,u);break}else t(c,u);u=u.sibling}u=il(d,c.mode,v),u.return=c,c=u}return s(c);case it:return x=d._init,I(c,u,x(d._payload),v)}if(zn(d))return E(c,u,d,v);if(yn(d))return k(c,u,d,v);Sr(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(c,u.sibling),u=i(u,d),u.return=c,c=u):(n(c,u),u=rl(d,c.mode,v),u.return=c,c=u),s(c)):n(c,u)}return I}var cn=gc(!0),vc=gc(!1),li=wt(null),si=null,Zt=null,Bs=null;function bs(){Bs=Zt=si=null}function Us(e){var t=li.current;H(li),e._currentValue=t}function ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){si=e,Bs=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(Bs!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(si===null)throw Error(y(308));Zt=e,si.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var Pt=null;function Hs(e){Pt===null?Pt=[e]:Pt.push(e)}function yc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Hs(t)):(n.next=i.next,i.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function $s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,et(e,n)}return i=r.interleaved,i===null?(t.next=t,Hs(r)):(t.next=i.next,i.next=t),r.interleaved=t,et(e,n)}function Ir(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ps(e,n)}}function Xo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oi(e,t,n,r){var i=e.updateQueue;lt=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var a=o,f=a.next;a.next=null,s===null?l=f:s.next=f,s=a;var g=e.alternate;g!==null&&(g=g.updateQueue,o=g.lastBaseUpdate,o!==s&&(o===null?g.firstBaseUpdate=f:o.next=f,g.lastBaseUpdate=a))}if(l!==null){var m=i.baseState;s=0,g=f=a=null,o=l;do{var p=o.lane,_=o.eventTime;if((r&p)===p){g!==null&&(g=g.next={eventTime:_,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var E=e,k=o;switch(p=t,_=n,k.tag){case 1:if(E=k.payload,typeof E=="function"){m=E.call(_,m,p);break e}m=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=k.payload,p=typeof E=="function"?E.call(_,m,p):E,p==null)break e;m=Q({},m,p);break e;case 2:lt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[o]:p.push(o))}else _={eventTime:_,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},g===null?(f=g=_,a=m):g=g.next=_,s|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;p=o,o=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(g===null&&(a=m),i.baseState=a,i.firstBaseUpdate=f,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Mt|=s,e.lanes=s,e.memoizedState=m}}function Zo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var cr={},We=wt(cr),er=wt(cr),tr=wt(cr);function Dt(e){if(e===cr)throw Error(y(174));return e}function Vs(e,t){switch(b(tr,t),b(er,e),b(We,cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Al(t,e)}H(We),b(We,t)}function fn(){H(We),H(er),H(tr)}function Ec(e){Dt(tr.current);var t=Dt(We.current),n=Al(t,e.type);t!==n&&(b(er,e),b(We,n))}function Ws(e){er.current===e&&(H(We),H(er))}var V=wt(0);function ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zi=[];function Qs(){for(var e=0;e<Zi.length;e++)Zi[e]._workInProgressVersionPrimary=null;Zi.length=0}var Br=nt.ReactCurrentDispatcher,Ji=nt.ReactCurrentBatchConfig,Ot=0,W=null,Z=null,q=null,ui=!1,Bn=!1,nr=0,mp=0;function le(){throw Error(y(321))}function Gs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Ks(e,t,n,r,i,l){if(Ot=l,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Br.current=e===null||e.memoizedState===null?_p:Ep,e=n(r,i),Bn){l=0;do{if(Bn=!1,nr=0,25<=l)throw Error(y(301));l+=1,q=Z=null,t.updateQueue=null,Br.current=wp,e=n(r,i)}while(Bn)}if(Br.current=ci,t=Z!==null&&Z.next!==null,Ot=0,q=Z=W=null,ui=!1,t)throw Error(y(300));return e}function Ys(){var e=nr!==0;return nr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?W.memoizedState=q=e:q=q.next=e,q}function Re(){if(Z===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=q===null?W.memoizedState:q.next;if(t!==null)q=t,Z=e;else{if(e===null)throw Error(y(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},q===null?W.memoizedState=q=e:q=q.next=e}return q}function rr(e,t){return typeof t=="function"?t(e):t}function qi(e){var t=Re(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=Z,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var o=s=null,a=null,f=l;do{var g=f.lane;if((Ot&g)===g)a!==null&&(a=a.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var m={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};a===null?(o=a=m,s=r):a=a.next=m,W.lanes|=g,Mt|=g}f=f.next}while(f!==null&&f!==l);a===null?s=r:a.next=o,Be(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,W.lanes|=l,Mt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function el(e){var t=Re(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);Be(l,t.memoizedState)||(me=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function wc(){}function kc(e,t){var n=W,r=Re(),i=t(),l=!Be(r.memoizedState,i);if(l&&(r.memoizedState=i,me=!0),r=r.queue,Xs(Cc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,ir(9,Sc.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(y(349));Ot&30||xc(n,t,i)}return i}function xc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sc(e,t,n,r){t.value=n,t.getSnapshot=r,Nc(t)&&Tc(e)}function Cc(e,t,n){return n(function(){Nc(t)&&Tc(e)})}function Nc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Tc(e){var t=et(e,1);t!==null&&Ie(t,e,1,-1)}function Jo(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=yp.bind(null,W,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pc(){return Re().memoizedState}function br(e,t,n,r){var i=He();W.flags|=e,i.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function xi(e,t,n,r){var i=Re();r=r===void 0?null:r;var l=void 0;if(Z!==null){var s=Z.memoizedState;if(l=s.destroy,r!==null&&Gs(r,s.deps)){i.memoizedState=ir(t,n,l,r);return}}W.flags|=e,i.memoizedState=ir(1|t,n,l,r)}function qo(e,t){return br(8390656,8,e,t)}function Xs(e,t){return xi(2048,8,e,t)}function Dc(e,t){return xi(4,2,e,t)}function Lc(e,t){return xi(4,4,e,t)}function zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rc(e,t,n){return n=n!=null?n.concat([e]):null,xi(4,4,zc.bind(null,t,e),n)}function Zs(){}function Ac(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Oc(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mc(e,t,n){return Ot&21?(Be(n,t)||(n=bu(),W.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function gp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Ji.transition;Ji.transition={};try{e(!1),t()}finally{F=n,Ji.transition=r}}function jc(){return Re().memoizedState}function vp(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fc(e))Ic(t,n);else if(n=yc(e,t,n,r),n!==null){var i=ce();Ie(n,e,r,i),Bc(n,t,r)}}function yp(e,t,n){var r=gt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))Ic(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,o=l(s,n);if(i.hasEagerState=!0,i.eagerState=o,Be(o,s)){var a=t.interleaved;a===null?(i.next=i,Hs(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=yc(e,t,i,r),n!==null&&(i=ce(),Ie(n,e,r,i),Bc(n,t,r))}}function Fc(e){var t=e.alternate;return e===W||t!==null&&t===W}function Ic(e,t){Bn=ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ps(e,n)}}var ci={readContext:ze,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},_p={readContext:ze,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:qo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,br(4194308,4,zc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return br(4194308,4,e,t)},useInsertionEffect:function(e,t){return br(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vp.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Jo,useDebugValue:Zs,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Jo(!1),t=e[0];return e=gp.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,i=He();if($){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),ee===null)throw Error(y(349));Ot&30||xc(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,qo(Cc.bind(null,r,l,e),[e]),r.flags|=2048,ir(9,Sc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=He(),t=ee.identifierPrefix;if($){var n=Xe,r=Ye;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ep={readContext:ze,useCallback:Ac,useContext:ze,useEffect:Xs,useImperativeHandle:Rc,useInsertionEffect:Dc,useLayoutEffect:Lc,useMemo:Oc,useReducer:qi,useRef:Pc,useState:function(){return qi(rr)},useDebugValue:Zs,useDeferredValue:function(e){var t=Re();return Mc(t,Z.memoizedState,e)},useTransition:function(){var e=qi(rr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:wc,useSyncExternalStore:kc,useId:jc,unstable_isNewReconciler:!1},wp={readContext:ze,useCallback:Ac,useContext:ze,useEffect:Xs,useImperativeHandle:Rc,useInsertionEffect:Dc,useLayoutEffect:Lc,useMemo:Oc,useReducer:el,useRef:Pc,useState:function(){return el(rr)},useDebugValue:Zs,useDeferredValue:function(e){var t=Re();return Z===null?t.memoizedState=e:Mc(t,Z.memoizedState,e)},useTransition:function(){var e=el(rr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:wc,useSyncExternalStore:kc,useId:jc,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function es(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Si={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=gt(e),l=Ze(r,i);l.payload=t,n!=null&&(l.callback=n),t=ht(e,l,i),t!==null&&(Ie(t,e,i,r),Ir(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=gt(e),l=Ze(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ht(e,l,i),t!==null&&(Ie(t,e,i,r),Ir(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=gt(e),i=Ze(n,r);i.tag=2,t!=null&&(i.callback=t),t=ht(e,i,r),t!==null&&(Ie(t,e,r,n),Ir(t,e,r))}};function ea(e,t,n,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(i,l):!0}function bc(e,t,n){var r=!1,i=_t,l=t.contextType;return typeof l=="object"&&l!==null?l=ze(l):(i=ve(t)?Rt:ae.current,r=t.contextTypes,l=(r=r!=null)?an(e,i):_t),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Si,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function ta(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Si.enqueueReplaceState(t,t.state,null)}function ts(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$s(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=ze(l):(l=ve(t)?Rt:ae.current,i.context=an(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(es(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Si.enqueueReplaceState(i,i.state,null),oi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=Yf(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ns(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kp=typeof WeakMap=="function"?WeakMap:Map;function Uc(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){di||(di=!0,ds=r),ns(e,t)},n}function Hc(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ns(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ns(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function na(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=jp.bind(null,e,t,n),t.then(e,e))}function ra(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ia(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var xp=nt.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?vc(t,null,n,r):cn(t,e.child,n,r)}function la(e,t,n,r,i){n=n.render;var l=t.ref;return ln(t,i),r=Ks(e,t,n,r,l,i),n=Ys(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tt(e,t,i)):($&&n&&js(t),t.flags|=1,ue(e,t,r,i),t.child)}function sa(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!lo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,$c(e,t,l,r,i)):(e=Vr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(s,r)&&e.ref===t.ref)return tt(e,t,i)}return t.flags|=1,e=vt(l,r),e.ref=t.ref,e.return=t,t.child=e}function $c(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Xn(l,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,tt(e,t,i)}return rs(e,t,n,r,i)}function Vc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(qt,_e),_e|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(qt,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,b(qt,_e),_e|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,b(qt,_e),_e|=r;return ue(e,t,i,n),t.child}function Wc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rs(e,t,n,r,i){var l=ve(n)?Rt:ae.current;return l=an(t,l),ln(t,i),n=Ks(e,t,n,r,l,i),r=Ys(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tt(e,t,i)):($&&r&&js(t),t.flags|=1,ue(e,t,n,i),t.child)}function oa(e,t,n,r,i){if(ve(n)){var l=!0;ni(t)}else l=!1;if(ln(t,i),t.stateNode===null)Ur(e,t),bc(t,n,r),ts(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var a=s.context,f=n.contextType;typeof f=="object"&&f!==null?f=ze(f):(f=ve(n)?Rt:ae.current,f=an(t,f));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||a!==f)&&ta(t,s,r,f),lt=!1;var p=t.memoizedState;s.state=p,oi(t,r,s,i),a=t.memoizedState,o!==r||p!==a||ge.current||lt?(typeof g=="function"&&(es(t,n,g,r),a=t.memoizedState),(o=lt||ea(t,n,o,r,p,a,f))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=f,r=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,_c(e,t),o=t.memoizedProps,f=t.type===t.elementType?o:Oe(t.type,o),s.props=f,m=t.pendingProps,p=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=ze(a):(a=ve(n)?Rt:ae.current,a=an(t,a));var _=n.getDerivedStateFromProps;(g=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==m||p!==a)&&ta(t,s,r,a),lt=!1,p=t.memoizedState,s.state=p,oi(t,r,s,i);var E=t.memoizedState;o!==m||p!==E||ge.current||lt?(typeof _=="function"&&(es(t,n,_,r),E=t.memoizedState),(f=lt||ea(t,n,f,r,p,E,a)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,E,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,E,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),s.props=r,s.state=E,s.context=a,r=f):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return is(e,t,n,r,l,i)}function is(e,t,n,r,i,l){Wc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Qo(t,n,!1),tt(e,t,l);r=t.stateNode,xp.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=cn(t,e.child,null,l),t.child=cn(t,null,o,l)):ue(e,t,o,l),t.memoizedState=r.state,i&&Qo(t,n,!0),t.child}function Qc(e){var t=e.stateNode;t.pendingContext?Wo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wo(e,t.context,!1),Vs(e,t.containerInfo)}function aa(e,t,n,r,i){return un(),Is(i),t.flags|=256,ue(e,t,n,r),t.child}var ls={dehydrated:null,treeContext:null,retryLane:0};function ss(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gc(e,t,n){var r=t.pendingProps,i=V.current,l=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),b(V,i&1),e===null)return Jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Ti(s,r,0,null),e=zt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ss(n),t.memoizedState=ls,e):Js(t,s));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Sp(e,t,s,r,o,i,n);if(l){l=r.fallback,s=t.mode,i=e.child,o=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=vt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?l=vt(o,l):(l=zt(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?ss(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=ls,r}return l=e.child,e=l.sibling,r=vt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Js(e,t){return t=Ti({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Cr(e,t,n,r){return r!==null&&Is(r),cn(t,e.child,null,n),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sp(e,t,n,r,i,l,s){if(n)return t.flags&256?(t.flags&=-257,r=tl(Error(y(422))),Cr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ti({mode:"visible",children:r.children},i,0,null),l=zt(l,i,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&cn(t,e.child,null,s),t.child.memoizedState=ss(s),t.memoizedState=ls,l);if(!(t.mode&1))return Cr(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(y(419)),r=tl(l,r,void 0),Cr(e,t,s,r)}if(o=(s&e.childLanes)!==0,me||o){if(r=ee,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,et(e,i),Ie(r,e,i,-1))}return io(),r=tl(Error(y(421))),Cr(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Fp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Ee=pt(i.nextSibling),we=t,$=!0,je=null,e!==null&&(Te[Pe++]=Ye,Te[Pe++]=Xe,Te[Pe++]=At,Ye=e.id,Xe=e.overflow,At=t),t=Js(t,r.children),t.flags|=4096,t)}function ua(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ql(e.return,t,n)}function nl(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ue(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ua(e,n,t);else if(e.tag===19)ua(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ai(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nl(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ai(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nl(t,!0,n,null,l);break;case"together":nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ur(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cp(e,t,n){switch(t.tag){case 3:Qc(t),un();break;case 5:Ec(t);break;case 1:ve(t.type)&&ni(t);break;case 4:Vs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;b(li,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Gc(e,t,n):(b(V,V.current&1),e=tt(e,t,n),e!==null?e.sibling:null);b(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),b(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Vc(e,t,n)}return tt(e,t,n)}var Yc,os,Xc,Zc;Yc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};os=function(){};Xc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Dt(We.current);var l=null;switch(n){case"input":i=Dl(e,i),r=Dl(e,r),l=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),l=[];break;case"textarea":i=Rl(e,i),r=Rl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ei)}Ol(n,r);var s;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var o=i[f];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&($n.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in r){var a=r[f];if(o=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&a!==o&&(a!=null||o!=null))if(f==="style")if(o){for(s in o)!o.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&o[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(l||(l=[]),l.push(f,n)),n=a;else f==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,o=o?o.__html:void 0,a!=null&&o!==a&&(l=l||[]).push(f,a)):f==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(f,""+a):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&($n.hasOwnProperty(f)?(a!=null&&f==="onScroll"&&U("scroll",e),l||o===a||(l=[])):(l=l||[]).push(f,a))}n&&(l=l||[]).push("style",n);var f=l;(t.updateQueue=f)&&(t.flags|=4)}};Zc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Np(e,t,n){var r=t.pendingProps;switch(Fs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ve(t.type)&&ti(),se(t),null;case 3:return r=t.stateNode,fn(),H(ge),H(ae),Qs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,je!==null&&(ms(je),je=null))),os(e,t),se(t),null;case 5:Ws(t);var i=Dt(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Xc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return se(t),null}if(e=Dt(We.current),xr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[$e]=t,r[qn]=l,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<An.length;i++)U(An[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":yo(r,l),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},U("invalid",r);break;case"textarea":Eo(r,l),U("invalid",r)}Ol(n,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var o=l[s];s==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&kr(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&kr(r.textContent,o,e),i=["children",""+o]):$n.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&U("scroll",r)}switch(n){case"input":hr(r),_o(r,l,!0);break;case"textarea":hr(r),wo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ei)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[$e]=t,e[qn]=r,Yc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ml(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<An.length;i++)U(An[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":yo(e,r),i=Dl(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),U("invalid",e);break;case"textarea":Eo(e,r),i=Rl(e,r),U("invalid",e);break;default:i=r}Ol(n,i),o=i;for(l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="style"?Pu(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Nu(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Vn(e,a):typeof a=="number"&&Vn(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&($n.hasOwnProperty(l)?a!=null&&l==="onScroll"&&U("scroll",e):a!=null&&ks(e,l,a,s))}switch(n){case"input":hr(e),_o(e,r,!1);break;case"textarea":hr(e),wo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?en(e,!!r.multiple,l,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ei)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Zc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Dt(tr.current),Dt(We.current),xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(l=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:kr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&kr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return se(t),null;case 13:if(H(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Ee!==null&&t.mode&1&&!(t.flags&128))mc(),un(),t.flags|=98560,l=!1;else if(l=xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(y(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));l[$e]=t}else un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),l=!1}else je!==null&&(ms(je),je=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?J===0&&(J=3):io())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return fn(),os(e,t),e===null&&Zn(t.stateNode.containerInfo),se(t),null;case 10:return Us(t.type._context),se(t),null;case 17:return ve(t.type)&&ti(),se(t),null;case 19:if(H(V),l=t.memoizedState,l===null)return se(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)Sn(l,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ai(e),s!==null){for(t.flags|=128,Sn(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(V,V.current&1|2),t.child}e=e.sibling}l.tail!==null&&K()>pn&&(t.flags|=128,r=!0,Sn(l,!1),t.lanes=4194304)}else{if(!r)if(e=ai(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!$)return se(t),null}else 2*K()-l.renderingStartTime>pn&&n!==1073741824&&(t.flags|=128,r=!0,Sn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=K(),t.sibling=null,n=V.current,b(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return ro(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Tp(e,t){switch(Fs(t),t.tag){case 1:return ve(t.type)&&ti(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),H(ge),H(ae),Qs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ws(t),null;case 13:if(H(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(V),null;case 4:return fn(),null;case 10:return Us(t.type._context),null;case 22:case 23:return ro(),null;case 24:return null;default:return null}}var Nr=!1,oe=!1,Pp=typeof WeakSet=="function"?WeakSet:Set,P=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function as(e,t,n){try{n()}catch(r){G(e,t,r)}}var ca=!1;function Dp(e,t){if(Wl=Zr,e=nc(),Ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,o=-1,a=-1,f=0,g=0,m=e,p=null;t:for(;;){for(var _;m!==n||i!==0&&m.nodeType!==3||(o=s+i),m!==l||r!==0&&m.nodeType!==3||(a=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(_=m.firstChild)!==null;)p=m,m=_;for(;;){if(m===e)break t;if(p===n&&++f===i&&(o=s),p===l&&++g===r&&(a=s),(_=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=_}n=o===-1||a===-1?null:{start:o,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ql={focusedElem:e,selectionRange:n},Zr=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var k=E.memoizedProps,I=E.memoizedState,c=t.stateNode,u=c.getSnapshotBeforeUpdate(t.elementType===t.type?k:Oe(t.type,k),I);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){G(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return E=ca,ca=!1,E}function bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&as(t,n,l)}i=i.next}while(i!==r)}}function Ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jc(e){var t=e.alternate;t!==null&&(e.alternate=null,Jc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[qn],delete t[Yl],delete t[fp],delete t[dp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qc(e){return e.tag===5||e.tag===3||e.tag===4}function fa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ei));else if(r!==4&&(e=e.child,e!==null))for(cs(e,t,n),e=e.sibling;e!==null;)cs(e,t,n),e=e.sibling}function fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fs(e,t,n),e=e.sibling;e!==null;)fs(e,t,n),e=e.sibling}var te=null,Me=!1;function rt(e,t,n){for(n=n.child;n!==null;)ef(e,t,n),n=n.sibling}function ef(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(vi,n)}catch{}switch(n.tag){case 5:oe||Jt(n,t);case 6:var r=te,i=Me;te=null,rt(e,t,n),te=r,Me=i,te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?Yi(e.parentNode,n):e.nodeType===1&&Yi(e,n),Kn(e)):Yi(te,n.stateNode));break;case 4:r=te,i=Me,te=n.stateNode.containerInfo,Me=!0,rt(e,t,n),te=r,Me=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&as(n,t,s),i=i.next}while(i!==r)}rt(e,t,n);break;case 1:if(!oe&&(Jt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){G(n,t,o)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,rt(e,t,n),oe=r):rt(e,t,n);break;default:rt(e,t,n)}}function da(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pp),t.forEach(function(r){var i=Ip.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:te=o.stateNode,Me=!1;break e;case 3:te=o.stateNode.containerInfo,Me=!0;break e;case 4:te=o.stateNode.containerInfo,Me=!0;break e}o=o.return}if(te===null)throw Error(y(160));ef(l,s,i),te=null,Me=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(f){G(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tf(t,e),t=t.sibling}function tf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Ue(e),r&4){try{bn(3,e,e.return),Ci(3,e)}catch(k){G(e,e.return,k)}try{bn(5,e,e.return)}catch(k){G(e,e.return,k)}}break;case 1:Ae(t,e),Ue(e),r&512&&n!==null&&Jt(n,n.return);break;case 5:if(Ae(t,e),Ue(e),r&512&&n!==null&&Jt(n,n.return),e.flags&32){var i=e.stateNode;try{Vn(i,"")}catch(k){G(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,o=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&xu(i,l),Ml(o,s);var f=Ml(o,l);for(s=0;s<a.length;s+=2){var g=a[s],m=a[s+1];g==="style"?Pu(i,m):g==="dangerouslySetInnerHTML"?Nu(i,m):g==="children"?Vn(i,m):ks(i,g,m,f)}switch(o){case"input":Ll(i,l);break;case"textarea":Su(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var _=l.value;_!=null?en(i,!!l.multiple,_,!1):p!==!!l.multiple&&(l.defaultValue!=null?en(i,!!l.multiple,l.defaultValue,!0):en(i,!!l.multiple,l.multiple?[]:"",!1))}i[qn]=l}catch(k){G(e,e.return,k)}}break;case 6:if(Ae(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(k){G(e,e.return,k)}}break;case 3:if(Ae(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(k){G(e,e.return,k)}break;case 4:Ae(t,e),Ue(e);break;case 13:Ae(t,e),Ue(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(to=K())),r&4&&da(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(f=oe)||g,Ae(t,e),oe=f):Ae(t,e),Ue(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&e.mode&1)for(P=e,g=e.child;g!==null;){for(m=P=g;P!==null;){switch(p=P,_=p.child,p.tag){case 0:case 11:case 14:case 15:bn(4,p,p.return);break;case 1:Jt(p,p.return);var E=p.stateNode;if(typeof E.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(k){G(r,n,k)}}break;case 5:Jt(p,p.return);break;case 22:if(p.memoizedState!==null){ha(m);continue}}_!==null?(_.return=p,P=_):ha(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,f?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=m.stateNode,a=m.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,o.style.display=Tu("display",s))}catch(k){G(e,e.return,k)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(k){G(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ae(t,e),Ue(e),r&4&&da(e);break;case 21:break;default:Ae(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qc(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vn(i,""),r.flags&=-33);var l=fa(e);fs(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,o=fa(e);cs(e,o,s);break;default:throw Error(y(161))}}catch(a){G(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lp(e,t,n){P=e,nf(e)}function nf(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Nr;if(!s){var o=i.alternate,a=o!==null&&o.memoizedState!==null||oe;o=Nr;var f=oe;if(Nr=s,(oe=a)&&!f)for(P=i;P!==null;)s=P,a=s.child,s.tag===22&&s.memoizedState!==null?ma(i):a!==null?(a.return=s,P=a):ma(i);for(;l!==null;)P=l,nf(l),l=l.sibling;P=i,Nr=o,oe=f}pa(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,P=l):pa(e)}}function pa(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Zo(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zo(t,s,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Kn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}oe||t.flags&512&&us(t)}catch(p){G(t,t.return,p)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function ha(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function ma(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ci(4,t)}catch(a){G(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){G(t,i,a)}}var l=t.return;try{us(t)}catch(a){G(t,l,a)}break;case 5:var s=t.return;try{us(t)}catch(a){G(t,s,a)}}}catch(a){G(t,t.return,a)}if(t===e){P=null;break}var o=t.sibling;if(o!==null){o.return=t.return,P=o;break}P=t.return}}var zp=Math.ceil,fi=nt.ReactCurrentDispatcher,qs=nt.ReactCurrentOwner,Le=nt.ReactCurrentBatchConfig,M=0,ee=null,Y=null,ne=0,_e=0,qt=wt(0),J=0,lr=null,Mt=0,Ni=0,eo=0,Un=null,he=null,to=0,pn=1/0,Ge=null,di=!1,ds=null,mt=null,Tr=!1,ut=null,pi=0,Hn=0,ps=null,Hr=-1,$r=0;function ce(){return M&6?K():Hr!==-1?Hr:Hr=K()}function gt(e){return e.mode&1?M&2&&ne!==0?ne&-ne:hp.transition!==null?($r===0&&($r=bu()),$r):(e=F,e!==0||(e=window.event,e=e===void 0?16:Gu(e.type)),e):1}function Ie(e,t,n,r){if(50<Hn)throw Hn=0,ps=null,Error(y(185));or(e,n,r),(!(M&2)||e!==ee)&&(e===ee&&(!(M&2)&&(Ni|=n),J===4&&ot(e,ne)),ye(e,r),n===1&&M===0&&!(t.mode&1)&&(pn=K()+500,ki&&kt()))}function ye(e,t){var n=e.callbackNode;hd(e,t);var r=Xr(e,e===ee?ne:0);if(r===0)n!==null&&So(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&So(n),t===1)e.tag===0?pp(ga.bind(null,e)):dc(ga.bind(null,e)),up(function(){!(M&6)&&kt()}),n=null;else{switch(Uu(r)){case 1:n=Ts;break;case 4:n=Iu;break;case 16:n=Yr;break;case 536870912:n=Bu;break;default:n=Yr}n=ff(n,rf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rf(e,t){if(Hr=-1,$r=0,M&6)throw Error(y(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Xr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=hi(e,r);else{t=r;var i=M;M|=2;var l=sf();(ee!==e||ne!==t)&&(Ge=null,pn=K()+500,Lt(e,t));do try{Op();break}catch(o){lf(e,o)}while(!0);bs(),fi.current=l,M=i,Y!==null?t=0:(ee=null,ne=0,t=J)}if(t!==0){if(t===2&&(i=bl(e),i!==0&&(r=i,t=hs(e,i))),t===1)throw n=lr,Lt(e,0),ot(e,r),ye(e,K()),n;if(t===6)ot(e,r);else{if(i=e.current.alternate,!(r&30)&&!Rp(i)&&(t=hi(e,r),t===2&&(l=bl(e),l!==0&&(r=l,t=hs(e,l))),t===1))throw n=lr,Lt(e,0),ot(e,r),ye(e,K()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:Nt(e,he,Ge);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=to+500-K(),10<t)){if(Xr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kl(Nt.bind(null,e,he,Ge),t);break}Nt(e,he,Ge);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Fe(r);l=1<<s,s=t[s],s>i&&(i=s),r&=~l}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zp(r/1960))-r,10<r){e.timeoutHandle=Kl(Nt.bind(null,e,he,Ge),r);break}Nt(e,he,Ge);break;case 5:Nt(e,he,Ge);break;default:throw Error(y(329))}}}return ye(e,K()),e.callbackNode===n?rf.bind(null,e):null}function hs(e,t){var n=Un;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=hi(e,t),e!==2&&(t=he,he=n,t!==null&&ms(t)),e}function ms(e){he===null?he=e:he.push.apply(he,e)}function Rp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Be(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~eo,t&=~Ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function ga(e){if(M&6)throw Error(y(327));sn();var t=Xr(e,0);if(!(t&1))return ye(e,K()),null;var n=hi(e,t);if(e.tag!==0&&n===2){var r=bl(e);r!==0&&(t=r,n=hs(e,r))}if(n===1)throw n=lr,Lt(e,0),ot(e,t),ye(e,K()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,he,Ge),ye(e,K()),null}function no(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(pn=K()+500,ki&&kt())}}function jt(e){ut!==null&&ut.tag===0&&!(M&6)&&sn();var t=M;M|=1;var n=Le.transition,r=F;try{if(Le.transition=null,F=1,e)return e()}finally{F=r,Le.transition=n,M=t,!(M&6)&&kt()}}function ro(){_e=qt.current,H(qt)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ap(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(Fs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ti();break;case 3:fn(),H(ge),H(ae),Qs();break;case 5:Ws(r);break;case 4:fn();break;case 13:H(V);break;case 19:H(V);break;case 10:Us(r.type._context);break;case 22:case 23:ro()}n=n.return}if(ee=e,Y=e=vt(e.current,null),ne=_e=t,J=0,lr=null,eo=Ni=Mt=0,he=Un=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}n.pending=r}Pt=null}return e}function lf(e,t){do{var n=Y;try{if(bs(),Br.current=ci,ui){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ui=!1}if(Ot=0,q=Z=W=null,Bn=!1,nr=0,qs.current=null,n===null||n.return===null){J=1,lr=t,Y=null;break}e:{var l=e,s=n.return,o=n,a=t;if(t=ne,o.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var f=a,g=o,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var _=ra(s);if(_!==null){_.flags&=-257,ia(_,s,o,l,t),_.mode&1&&na(l,f,t),t=_,a=f;var E=t.updateQueue;if(E===null){var k=new Set;k.add(a),t.updateQueue=k}else E.add(a);break e}else{if(!(t&1)){na(l,f,t),io();break e}a=Error(y(426))}}else if($&&o.mode&1){var I=ra(s);if(I!==null){!(I.flags&65536)&&(I.flags|=256),ia(I,s,o,l,t),Is(dn(a,o));break e}}l=a=dn(a,o),J!==4&&(J=2),Un===null?Un=[l]:Un.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var c=Uc(l,a,t);Xo(l,c);break e;case 1:o=a;var u=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(mt===null||!mt.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Hc(l,o,t);Xo(l,v);break e}}l=l.return}while(l!==null)}af(n)}catch(C){t=C,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function sf(){var e=fi.current;return fi.current=ci,e===null?ci:e}function io(){(J===0||J===3||J===2)&&(J=4),ee===null||!(Mt&268435455)&&!(Ni&268435455)||ot(ee,ne)}function hi(e,t){var n=M;M|=2;var r=sf();(ee!==e||ne!==t)&&(Ge=null,Lt(e,t));do try{Ap();break}catch(i){lf(e,i)}while(!0);if(bs(),M=n,fi.current=r,Y!==null)throw Error(y(261));return ee=null,ne=0,J}function Ap(){for(;Y!==null;)of(Y)}function Op(){for(;Y!==null&&!ld();)of(Y)}function of(e){var t=cf(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?af(e):Y=t,qs.current=null}function af(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tp(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Y=null;return}}else if(n=Np(n,t,_e),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);J===0&&(J=5)}function Nt(e,t,n){var r=F,i=Le.transition;try{Le.transition=null,F=1,Mp(e,t,n,r)}finally{Le.transition=i,F=r}return null}function Mp(e,t,n,r){do sn();while(ut!==null);if(M&6)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(md(e,l),e===ee&&(Y=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,ff(Yr,function(){return sn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Le.transition,Le.transition=null;var s=F;F=1;var o=M;M|=4,qs.current=null,Dp(e,n),tf(n,e),tp(Ql),Zr=!!Wl,Ql=Wl=null,e.current=n,Lp(n),sd(),M=o,F=s,Le.transition=l}else e.current=n;if(Tr&&(Tr=!1,ut=e,pi=i),l=e.pendingLanes,l===0&&(mt=null),ud(n.stateNode),ye(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(di)throw di=!1,e=ds,ds=null,e;return pi&1&&e.tag!==0&&sn(),l=e.pendingLanes,l&1?e===ps?Hn++:(Hn=0,ps=e):Hn=0,kt(),null}function sn(){if(ut!==null){var e=Uu(pi),t=Le.transition,n=F;try{if(Le.transition=null,F=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,pi=0,M&6)throw Error(y(331));var i=M;for(M|=4,P=e.current;P!==null;){var l=P,s=l.child;if(P.flags&16){var o=l.deletions;if(o!==null){for(var a=0;a<o.length;a++){var f=o[a];for(P=f;P!==null;){var g=P;switch(g.tag){case 0:case 11:case 15:bn(8,g,l)}var m=g.child;if(m!==null)m.return=g,P=m;else for(;P!==null;){g=P;var p=g.sibling,_=g.return;if(Jc(g),g===f){P=null;break}if(p!==null){p.return=_,P=p;break}P=_}}}var E=l.alternate;if(E!==null){var k=E.child;if(k!==null){E.child=null;do{var I=k.sibling;k.sibling=null,k=I}while(k!==null)}}P=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,P=s;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:bn(9,l,l.return)}var c=l.sibling;if(c!==null){c.return=l.return,P=c;break e}P=l.return}}var u=e.current;for(P=u;P!==null;){s=P;var d=s.child;if(s.subtreeFlags&2064&&d!==null)d.return=s,P=d;else e:for(s=u;P!==null;){if(o=P,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ci(9,o)}}catch(C){G(o,o.return,C)}if(o===s){P=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,P=v;break e}P=o.return}}if(M=i,kt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{F=n,Le.transition=t}}return!1}function va(e,t,n){t=dn(n,t),t=Uc(e,t,1),e=ht(e,t,1),t=ce(),e!==null&&(or(e,1,t),ye(e,t))}function G(e,t,n){if(e.tag===3)va(e,e,n);else for(;t!==null;){if(t.tag===3){va(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=dn(n,e),e=Hc(t,e,1),t=ht(t,e,1),e=ce(),t!==null&&(or(t,1,e),ye(t,e));break}}t=t.return}}function jp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(J===4||J===3&&(ne&130023424)===ne&&500>K()-to?Lt(e,0):eo|=n),ye(e,t)}function uf(e,t){t===0&&(e.mode&1?(t=vr,vr<<=1,!(vr&130023424)&&(vr=4194304)):t=1);var n=ce();e=et(e,t),e!==null&&(or(e,t,n),ye(e,n))}function Fp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uf(e,n)}function Ip(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),uf(e,n)}var cf;cf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Cp(e,t,n);me=!!(e.flags&131072)}else me=!1,$&&t.flags&1048576&&pc(t,ii,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ur(e,t),e=t.pendingProps;var i=an(t,ae.current);ln(t,n),i=Ks(null,t,r,e,i,n);var l=Ys();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(l=!0,ni(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$s(t),i.updater=Si,t.stateNode=i,i._reactInternals=t,ts(t,r,e,n),t=is(null,t,r,!0,l,n)):(t.tag=0,$&&l&&js(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ur(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=bp(r),e=Oe(r,e),i){case 0:t=rs(null,t,r,e,n);break e;case 1:t=oa(null,t,r,e,n);break e;case 11:t=la(null,t,r,e,n);break e;case 14:t=sa(null,t,r,Oe(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),rs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),oa(e,t,r,i,n);case 3:e:{if(Qc(t),e===null)throw Error(y(387));r=t.pendingProps,l=t.memoizedState,i=l.element,_c(e,t),oi(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=dn(Error(y(423)),t),t=aa(e,t,r,n,i);break e}else if(r!==i){i=dn(Error(y(424)),t),t=aa(e,t,r,n,i);break e}else for(Ee=pt(t.stateNode.containerInfo.firstChild),we=t,$=!0,je=null,n=vc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===i){t=tt(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return Ec(t),e===null&&Jl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,Gl(r,i)?s=null:l!==null&&Gl(r,l)&&(t.flags|=32),Wc(e,t),ue(e,t,s,n),t.child;case 6:return e===null&&Jl(t),null;case 13:return Gc(e,t,n);case 4:return Vs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),la(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,b(li,r._currentValue),r._currentValue=s,l!==null)if(Be(l.value,s)){if(l.children===i.children&&!ge.current){t=tt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){s=l.child;for(var a=o.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Ze(-1,n&-n),a.tag=2;var f=l.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?a.next=a:(a.next=g.next,g.next=a),f.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ql(l.return,n,t),o.lanes|=n;break}a=a.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(y(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ql(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ln(t,n),i=ze(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=Oe(r,t.pendingProps),i=Oe(r.type,i),sa(e,t,r,i,n);case 15:return $c(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),Ur(e,t),t.tag=1,ve(r)?(e=!0,ni(t)):e=!1,ln(t,n),bc(t,r,i),ts(t,r,i,n),is(null,t,r,!0,e,n);case 19:return Kc(e,t,n);case 22:return Vc(e,t,n)}throw Error(y(156,t.tag))};function ff(e,t){return Fu(e,t)}function Bp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new Bp(e,t,n,r)}function lo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bp(e){if(typeof e=="function")return lo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ss)return 11;if(e===Cs)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,t,n,r,i,l){var s=2;if(r=e,typeof e=="function")lo(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case $t:return zt(n.children,i,l,t);case xs:s=8,i|=8;break;case Cl:return e=De(12,n,t,i|2),e.elementType=Cl,e.lanes=l,e;case Nl:return e=De(13,n,t,i),e.elementType=Nl,e.lanes=l,e;case Tl:return e=De(19,n,t,i),e.elementType=Tl,e.lanes=l,e;case Eu:return Ti(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yu:s=10;break e;case _u:s=9;break e;case Ss:s=11;break e;case Cs:s=14;break e;case it:s=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=De(s,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function zt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Ti(e,t,n,r){return e=De(22,e,r,t),e.elementType=Eu,e.lanes=n,e.stateNode={isHidden:!1},e}function rl(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function il(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Up(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ii(0),this.expirationTimes=Ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function so(e,t,n,r,i,l,s,o,a){return e=new Up(e,t,n,o,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=De(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$s(l),e}function Hp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function df(e){if(!e)return _t;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(ve(n))return fc(e,n,t)}return t}function pf(e,t,n,r,i,l,s,o,a){return e=so(n,r,!0,e,i,l,s,o,a),e.context=df(null),n=e.current,r=ce(),i=gt(n),l=Ze(r,i),l.callback=t??null,ht(n,l,i),e.current.lanes=i,or(e,i,r),ye(e,r),e}function Pi(e,t,n,r){var i=t.current,l=ce(),s=gt(i);return n=df(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(i,t,s),e!==null&&(Ie(e,i,s,l),Ir(e,i,s)),s}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ya(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oo(e,t){ya(e,t),(e=e.alternate)&&ya(e,t)}function $p(){return null}var hf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ao(e){this._internalRoot=e}Di.prototype.render=ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));Pi(e,t,null,null)};Di.prototype.unmount=ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jt(function(){Pi(null,e,null,null)}),t[qe]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&Qu(e)}};function uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _a(){}function Vp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var f=mi(s);l.call(f)}}var s=pf(t,r,e,0,null,!1,!1,"",_a);return e._reactRootContainer=s,e[qe]=s.current,Zn(e.nodeType===8?e.parentNode:e),jt(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var f=mi(a);o.call(f)}}var a=so(e,0,!1,null,null,!1,!1,"",_a);return e._reactRootContainer=a,e[qe]=a.current,Zn(e.nodeType===8?e.parentNode:e),jt(function(){Pi(t,a,n,r)}),a}function zi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var o=i;i=function(){var a=mi(s);o.call(a)}}Pi(t,s,e,i)}else s=Vp(n,t,e,i,r);return mi(s)}Hu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rn(t.pendingLanes);n!==0&&(Ps(t,n|1),ye(t,K()),!(M&6)&&(pn=K()+500,kt()))}break;case 13:jt(function(){var r=et(e,1);if(r!==null){var i=ce();Ie(r,e,1,i)}}),oo(e,1)}};Ds=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=ce();Ie(t,e,134217728,n)}oo(e,134217728)}};$u=function(e){if(e.tag===13){var t=gt(e),n=et(e,t);if(n!==null){var r=ce();Ie(n,e,t,r)}oo(e,t)}};Vu=function(){return F};Wu=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Fl=function(e,t,n){switch(t){case"input":if(Ll(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(y(90));ku(r),Ll(r,i)}}}break;case"textarea":Su(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};zu=no;Ru=jt;var Wp={usingClientEntryPoint:!1,Events:[ur,Gt,wi,Du,Lu,no]},Cn={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qp={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mu(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||$p,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{vi=Pr.inject(Qp),Ve=Pr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wp;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uo(t))throw Error(y(200));return Hp(e,t,null,n)};xe.createRoot=function(e,t){if(!uo(e))throw Error(y(299));var n=!1,r="",i=hf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=so(e,1,!1,null,null,n,!1,r,i),e[qe]=t.current,Zn(e.nodeType===8?e.parentNode:e),new ao(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Mu(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return jt(e)};xe.hydrate=function(e,t,n){if(!Li(t))throw Error(y(200));return zi(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!uo(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",s=hf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=pf(t,null,e,1,n??null,i,!1,l,s),e[qe]=t.current,Zn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Di(t)};xe.render=function(e,t,n){if(!Li(t))throw Error(y(200));return zi(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!Li(e))throw Error(y(40));return e._reactRootContainer?(jt(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};xe.unstable_batchedUpdates=no;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Li(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return zi(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mf)}catch(e){console.error(e)}}mf(),hu.exports=xe;var Gp=hu.exports,gf,Ea=Gp;gf=Ea.createRoot,Ea.hydrateRoot;const Kp=({onStart:e,isLoading:t})=>T.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-50 overflow-hidden",children:[T.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-70 scale-110 animate-[subtle-zoom_30s_infinite_alternate]",style:{backgroundImage:"url(https://image.pollinations.ai/prompt/rainy%20city%20night%20neon%20lights%20reflection%20makoto%20shinkai%20style%20anime%20lonely%20atmosphere?width=1920&height=1080&nologo=true)"}}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 backdrop-blur-[1px]"}),T.jsxs("div",{className:"z-10 flex flex-col items-center text-center px-4 max-w-4xl w-full",children:[T.jsxs("div",{className:"mb-14 space-y-4",children:[T.jsx("h1",{className:"text-7xl md:text-9xl font-serif-sc font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]",children:"七百元"}),T.jsx("div",{className:"h-px w-24 bg-white/30 mx-auto my-6"}),T.jsx("h3",{className:"text-2xl md:text-4xl font-serif-sc text-white/90 font-light tracking-wide",children:"错过的约定"})]}),T.jsxs("p",{className:"max-w-2xl text-lg md:text-xl text-gray-300 font-serif-sc leading-loose mb-16 drop-shadow-md",children:["“我订了房间，付了钱。",T.jsx("br",{}),"但站在那条走廊里，我意识到这代价远超我所能承受。”"]}),T.jsxs("button",{onClick:e,disabled:t,className:`
              group relative px-20 py-5 text-xl tracking-[0.3em] font-medium transition-all duration-700
              ${t?"opacity-50 cursor-not-allowed":"opacity-100 hover:scale-105"}
            `,children:[T.jsx("div",{className:"absolute inset-0 border border-white/40 skew-x-12 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"}),T.jsx("span",{className:"relative z-10 text-white font-serif-sc",children:t?"记忆读取中...":"开启回忆"})]})]}),T.jsx("style",{children:`
        @keyframes subtle-zoom {
            0% { transform: scale(1.1); }
            100% { transform: scale(1.2); }
        }
      `})]}),Yp=({text:e,speed:t=30,onComplete:n})=>{const[r,i]=R.useState("");return R.useEffect(()=>{i("");let l=0;const s=setInterval(()=>{l<e.length?(i(o=>o+e.charAt(l)),l++):(clearInterval(s),n&&n())},t);return()=>clearInterval(s)},[e,t,n]),T.jsx("span",{children:r})},Dr={narrative:`手机屏幕的光在昏暗的走廊里显得格外刺眼。APP上的订单显示"已接单"，备注栏里写着"全套服务，不过夜"。我盯着微信支付里刚刚转出去的700元，又抬头看了看面前的302号房门。

走廊里很安静，只有远处电梯运行的嗡嗡声。门缝里透出微弱的电视光，还有隐约的说话声——她在打电话，声音很轻，听不清内容，但能感觉到她的紧张。

这本该是一场交易。我只是太寂寞了，想找个人陪。但真到了门口，听着里面传来的声音，一股巨大的荒谬感和羞耻感突然击中了我。

我的手指悬在门板前，犹豫了整整五分钟。里面的电视声音很清晰，她在等我。但我就是迈不出这一步。

700块钱，买来的不是陪伴，而是更深的孤独。`,dialogue:"（不行……我做不到……）",speaker:"内心独白",backgroundDescription:"dark hotel hallway, pov looking at door number 302, phone screen glowing, moody cinematic lighting, wong kar wai style",choices:[{id:"p1",text:"直接转身逃跑，什么都不说",sentiment:"shy"},{id:"p2",text:'给她发消息："对不起，我来不了"',sentiment:"neutral"},{id:"p3",text:"站在门口纠结很久，最终还是走了",sentiment:"cold"}],isEnding:!1},wa={narrative:`我转身就跑。

电梯太慢，我直接冲下楼梯，三步并作两步，一口气跑到街上。雨开始下了，细密的雨丝打在脸上，冰凉刺骨。我任由雨水冲刷，心跳如擂鼓，呼吸急促得像是要窒息。

700块钱打了水漂。我连道歉都不敢说，就这么逃了。像个小偷，像只老鼠，像所有见不得光的东西。

我拉黑了所有联系方式，删掉了那个APP，发誓再也不碰这种事。但那个门后的人，那个我永远不会见到的她，却成了我心底一个永远的问号。

她会不会觉得我是个变态？还是只是觉得我是个懦夫？

也许，两者都是。`,dialogue:"（我真是个废物……）",speaker:"内心独白",backgroundDescription:"rainy city street at night, protagonist running in panic, neon reflections, self-loathing atmosphere",choices:[{id:"1a_1",text:"【继续】",sentiment:"neutral"}],isEnding:!1},ka={narrative:`接下来的一个月，我把自己埋在工作里。加班到深夜，周末也待在办公室，用忙碌麻痹自己。

但每到深夜，那个问号就会冒出来：她怎么样了？她会不会恨我？还是早就把我忘了？

我开始在社交软件上疯狂地刷，试图找到她的痕迹。但我知道，即使找到了，我也没有勇气去联系。

我甚至开始怀疑，我是不是真的只配这样活着——永远在边缘徘徊，永远不敢真正靠近任何人。`,dialogue:"（也许，我注定就是这样的人……）",speaker:"内心独白",backgroundDescription:"dark office at night, computer screen glowing, lonely atmosphere, city lights outside window",choices:[{id:"1a_2",text:"继续逃避，用工作填满生活",sentiment:"cold"},{id:"1a_3",text:"想要改变，但不知道从哪里开始",sentiment:"sad"}],isEnding:!1},xa={narrative:`我选择了继续逃避。工作成了我唯一的避风港。

我接了更多的项目，主动申请加班，甚至周末也来公司。同事们都说我变了，变得"上进"了。只有我知道，我只是在逃避。

每天晚上回到家，空荡荡的房间让我感到窒息。我开始失眠，开始做噩梦。梦里，我总是站在那扇门前，但永远不敢敲门。

一个月后，我的身体开始抗议。胃痛、头痛、失眠。我知道，这样下去不行。

但我还是不知道该怎么改变。`,dialogue:"（我到底在害怕什么？）",speaker:"内心独白",backgroundDescription:"empty apartment at night, protagonist lying on bed, phone screen glowing, lonely and exhausted",choices:[{id:"1a_2a",text:"继续这样下去，直到崩溃",sentiment:"cold"},{id:"1a_2b",text:"决定尝试改变，哪怕只是一小步",sentiment:"bold"}],isEnding:!1},Sa={narrative:`我决定尝试改变。哪怕只是一小步。

我开始强迫自己参加公司的团建活动，开始主动和同事聊天，开始尝试在社交软件上主动打招呼。

但每次，我都失败了。我害怕被拒绝，害怕说错话，害怕暴露自己的孤独。

直到有一天，我在公司食堂看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次逃避的开始？`,dialogue:"（不能再逃了……）",speaker:"内心独白",backgroundDescription:"company cafeteria, lunch time, protagonist seeing familiar figure, nervous anticipation",choices:[{id:"1a_3a",text:"鼓起勇气，走过去",sentiment:"bold"},{id:"1a_3b",text:"还是不敢，默默走开",sentiment:"shy"}],isEnding:!1},ll={narrative:`两个月过去了。我尝试过改变——去健身房，参加社交活动，甚至下载了新的交友软件。

但每次想要主动的时候，那个夜晚的恐惧就会回来。我害怕被拒绝，害怕被看穿，害怕再次证明自己是个懦夫。

直到有一天，我在公司楼下看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的第一反应是转身逃跑——就像那天晚上一样。但这一次，我停住了脚步。

也许，这就是我改变的机会？`,dialogue:"（不能再逃了……）",speaker:"内心独白",backgroundDescription:"company building entrance, morning light, protagonist hesitating, determination growing",choices:[{id:"1a_4",text:"鼓起勇气，主动上前打招呼",sentiment:"bold"},{id:"1a_5",text:"还是不敢，默默观察",sentiment:"shy"}],isEnding:!1},Ca={narrative:`我深吸一口气，走了过去。每一步都像是踩在棉花上，软绵绵的，使不上力。

"你好……"我的声音有点颤抖，几乎听不见，"你还记得我吗？"

她转过身，看到我的瞬间，眼神里闪过一丝惊讶，然后是复杂的情绪——困惑、好奇，还有一丝我读不懂的东西。

"记得。"她点点头，声音很轻，"那天晚上，你到了门口，但没进来。"

我愣住了。她居然记得。我以为她早就忘了，就像我试图忘记一样。

"对不起……"我说，"我……"

"不用道歉。"她打断我，语气很平静，"其实，我也很庆幸你没进来。因为那天，我也是第一次接那种单，我也很害怕。"

我们站在公司楼下，早高峰的人流从身边经过，但那一刻，世界好像只剩下我们两个人。

"要不，我们找个地方聊聊？"她问，眼神里有种我从未见过的温柔。`,dialogue:'"我知道附近有家咖啡店，很安静。"',speaker:"琳",backgroundDescription:"company building lobby, two people talking, morning crowd passing by, intimate moment",choices:[{id:"1a_6",text:'"好，我知道附近有家咖啡店"',sentiment:"bold"},{id:"1a_7",text:'"我……还是算了吧"',sentiment:"shy"}],isEnding:!1},sl={narrative:`我们去了公司附近的一家咖啡店。店面不大，但很安静，角落里摆着几盆绿植，阳光从落地窗洒进来，在地板上投下斑驳的光影。

我点了两杯拿铁，找了个靠窗的位置。她在我对面坐下，脱掉外套，露出里面简单的白衬衫。

"所以……"她先开口，声音很轻，"那天晚上，你为什么没进来？"

我沉默了很久。咖啡的热气在两人之间升腾，模糊了视线。该怎么说？说我害怕？说我懦弱？说我配不上那种交易？

"我……"我深吸一口气，终于抬起头看着她，"我到了门口，但突然意识到，我想要的不是那种关系。我想要的是……有人理解我，有人陪我说话，有人让我觉得我不那么孤独。"

她看着我，眼神很复杂。有理解，有同情，还有某种我读不懂的东西。

"那你现在呢？"她问，声音很轻，"还觉得孤独吗？"`,dialogue:'"和你聊天的时候，好像……不那么孤独了。"',speaker:"我",backgroundDescription:"cozy coffee shop, afternoon, two people at corner table, deep conversation, warm lighting",choices:[{id:"1a_6a",text:'"和你聊天，让我感觉好多了"',sentiment:"romantic"},{id:"1a_6b",text:'"也许吧，但我不敢奢望什么"',sentiment:"sad"}],isEnding:!1},ol={narrative:`从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。

我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，她最喜欢的日落是在海边看到的，她深夜听的音乐总是很悲伤。

她也开始了解我。我的工作，我的孤独，我的恐惧。我告诉她，我害怕被拒绝，害怕被伤害，害怕暴露真实的自己。

"你知道吗？"有一天，我们在公园里散步，夕阳把我们的影子拉得很长，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。"

那一刻，我突然意识到，也许，我真的可以改变。也许，我不需要一直逃避。

"也许，我们可以成为朋友？"她问，声音很轻，像是在试探。`,dialogue:'"我想……不只是朋友。"',speaker:"我",backgroundDescription:"evening walk in park, two people walking side by side, sunset colors, peaceful atmosphere",choices:[{id:"1a_6c",text:'"我想……不只是朋友"',sentiment:"romantic"},{id:"1a_6d",text:'"好，朋友也很好"',sentiment:"neutral"}],isEnding:!1},al={narrative:`我还是没有勇气上前。我看着她走进电梯，看着电梯门关上，看着数字从1跳到11。

接下来的几天，我开始留意她。我发现她每天早上8点半到公司，中午12点在食堂吃饭，晚上经常加班到很晚。

我甚至开始计算时间，想要"偶遇"她。但每次真的遇到了，我又会假装没看见，或者快速走开。

直到有一天，在电梯里，我们被挤到了一起。她身上的茉莉花香再次袭来，我心跳加速。

"你也是这栋楼的？"她突然问。

我点了点头，不敢看她。`,dialogue:'"我在11楼，设计部。你呢？"',speaker:"琳",backgroundDescription:"crowded elevator, two people close together, tense atmosphere, morning commute",choices:[{id:"1a_8",text:'"12楼……"',sentiment:"shy"},{id:"1a_9",text:"假装没听见，盯着楼层数字",sentiment:"cold"}],isEnding:!1},Na={narrative:`"12楼？"她笑了，"那我们以后可能会经常遇到呢。"

电梯到了11楼，她准备出去，但突然回头看了我一眼。

"对了，"她说，"你看起来很眼熟。我们是不是在哪里见过？"

我的心跳瞬间停止。她认出我了？

"可能……在楼下便利店？"我勉强回答。

"也许吧。"她点点头，走出了电梯。

电梯门关上，我靠在墙上，心跳如擂鼓。她认出我了，但她没有说破。这是机会吗？`,dialogue:"（也许，我应该主动一点？）",speaker:"内心独白",backgroundDescription:"elevator interior, protagonist alone, conflicted expression, opportunity dawning",choices:[{id:"1a_8a",text:"下次遇到她，主动打招呼",sentiment:"bold"},{id:"1a_8b",text:"继续观察，等待更好的时机",sentiment:"shy"}],isEnding:!1},ul={narrative:`我还是选择了逃避。我假装没听见，盯着楼层数字，直到电梯到了12楼。

接下来的几周，我继续观察她。我知道她喜欢在便利店买三明治当早餐，知道她中午总是点那家店的麻辣烫，知道她晚上经常加班到很晚。

我甚至开始跟踪她——不是恶意的，只是想知道她住在哪里，想知道她下班后去哪里。

我知道这很变态，但我控制不住自己。我想了解她，想靠近她，但我又不敢。

直到有一天，她突然转过身，看着我。

"你跟踪我多久了？"她问，语气很平静，但眼神很冷。`,dialogue:'"我……对不起……"',speaker:"我",backgroundDescription:"dark street at night, protagonist caught following, guilty expression, tense confrontation",choices:[{id:"1a_9a",text:"解释自己的行为，请求原谅",sentiment:"bold"},{id:"1a_9b",text:"转身逃跑，再次逃避",sentiment:"cold"}],isEnding:!1},Ta={narrative:`我的手指在屏幕上打字，删了又写，写了又删。走廊里的感应灯灭了，我站在黑暗中，只有手机屏幕的光照亮我的脸。

最后发出去的只有简单的几个字：

"不好意思，我来不了了。给您添麻烦了。"

发送。

我盯着屏幕看了很久，对方一直没回。时间一分一秒地过去，每一秒都像是煎熬。我正准备离开，手机震了一下。

"没关系的。"

然后又是一条，间隔了几秒："不过既然你付了钱，我有义务问一句——你还好吗？"

我愣住了。这是职业话术吗？还是……真的在关心我？

"如果只是想找人聊聊天，其实不用这样的。"

屏幕上的字在黑暗中发着光，像是一根救命稻草。`,dialogue:"（她在……安慰我？）",speaker:"内心独白",backgroundDescription:"phone screen close-up, chat messages glowing in dark hallway, warm text bubbles",choices:[{id:"1b_1",text:'"谢谢，我没事。"然后删除好友',sentiment:"cold"},{id:"1b_2",text:'"对不起，我只是……做不到那种事。"',sentiment:"shy"},{id:"1b_3",text:'"其实，能聊聊吗？我请你喝咖啡。"',sentiment:"bold"}],isEnding:!1},Pa={narrative:`我删除了她的好友。那一刻，我松了一口气，但心里却空落落的。

接下来的日子，我试图忘记那个夜晚，忘记那个700块，忘记那个我永远不知道名字的她。

但奇怪的是，我反而更频繁地想起她。想起她最后那句话："如果只是想找人聊聊天，其实不用这样的。"

也许，我真的只是想要有人陪？也许，我错过了什么？

两个月后，我在公司楼下看到了一个熟悉的身影。`,dialogue:"（是她吗？）",speaker:"内心独白",backgroundDescription:"convenience store, protagonist seeing familiar figure, recognition dawning",choices:[{id:"1b_1a",text:"主动上前，想要道歉",sentiment:"bold"},{id:"1b_1b",text:"假装没看见，快速离开",sentiment:"cold"}],isEnding:!1},Da={narrative:`我删除了她，但后悔很快就来了。

我开始在微信里搜索她的账号，想要重新加她。但我发现，我已经不记得她的微信号了。

我开始在社交软件上寻找，试图找到她的痕迹。但我知道，即使找到了，我也没有勇气去联系。

一个月后，我在公司楼下看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次错过？`,dialogue:"（不能再错过了……）",speaker:"内心独白",backgroundDescription:"company building entrance, morning, protagonist seeing familiar figure, second chance dawning",choices:[{id:"1b_1aa",text:"鼓起勇气，主动上前",sentiment:"bold"},{id:"1b_1ab",text:"还是不敢，默默走开",sentiment:"shy"}],isEnding:!1},Nn={narrative:`我走了过去。每一步都像是踩在刀刃上，但我知道，如果这次再逃避，就真的没有机会了。

"你好……"我的声音有点颤抖，几乎听不清，"你还记得我吗？"

她转过身，看到我的瞬间，眼神里闪过一丝惊讶，然后是复杂的情绪——困惑、好奇，还有一丝我读不懂的东西。

"记得。"她点点头，声音很轻，"你删除了我的好友。"

我愣住了。她居然记得。我以为她早就忘了，就像我试图忘记一样。

"对不起……"我说，声音越来越小，"我……我当时很混乱，我不知道该怎么面对你。"

"没关系。"她笑了，眼睛弯成月牙，"其实，我也理解。那种情况下，谁都会混乱的。"

我们站在公司楼下，早高峰的人流从身边经过，但那一刻，世界好像只剩下我们两个人。`,dialogue:'"要不，我们重新认识一下？"',speaker:"琳",backgroundDescription:"company building lobby, two people talking, morning crowd, second chance moment",choices:[{id:"1b_1ac",text:'"好，我想重新认识你"',sentiment:"bold"},{id:"1b_1ad",text:'"我……还是算了吧"',sentiment:"shy"}],isEnding:!1},La={narrative:`那晚，我们聊了很久。从晚上11点聊到凌晨3点，手机屏幕的光在黑暗中发着光，像是两个孤独的灵魂在互相取暖。

她告诉我，她叫琳，是个设计师。那段时间家里出了事，急需用钱，所以才接了那个单。但真到了那一刻，她也很害怕。

"其实，我也很庆幸你没来。"她说，声音很轻，"因为我不知道自己能不能真的做到。"

我们聊工作，聊生活，聊那些不敢对别人说的话。第一次，我感觉到有人真正理解我的孤独。那种感觉很奇怪，就像是在黑暗中突然看到了一束光。

"要不，我们见个面吧？"她突然说，声音里带着一丝试探，"不是那种见面，就是……普通朋友那种。"`,dialogue:'"你觉得呢？"',speaker:"琳",backgroundDescription:"phone chat interface, late night, warm conversation atmosphere",choices:[{id:"1b_2a",text:'"好，什么时候？"',sentiment:"bold"},{id:"1b_2b",text:'"我……还是算了吧"',sentiment:"shy"}],isEnding:!1},za={narrative:`从那天起，我们每天晚上都会聊天。有时候是文字，有时候是语音，有时候是视频。手机屏幕的光在黑暗中发着光，像是两个孤独的灵魂在互相取暖。

我了解到，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，画的是她们家的小花园。她最喜欢的日落是在海边看到的，那时候她刚失恋，一个人坐在沙滩上，看着太阳慢慢沉入海平面。她深夜听的音乐总是很悲伤，她说，悲伤的音乐让她觉得不那么孤独。

我也开始告诉她我的故事。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"

那一刻，我突然意识到，也许，我真的可以改变。`,dialogue:'"也许，我们可以成为真正的朋友？"',speaker:"琳",backgroundDescription:"phone video call interface, late night, two people talking, intimate conversation",choices:[{id:"1b_2aa",text:'"我想……不只是朋友"',sentiment:"romantic"},{id:"1b_2ab",text:'"好，朋友也很好"',sentiment:"neutral"}],isEnding:!1},Ra={narrative:`我们约好了见面。周六下午，咖啡店。

我提前半小时就到了，选了个靠窗的位置，点了两杯拿铁。

我紧张得手心出汗。这是我第一次真正意义上的"约会"，虽然我们都说只是朋友见面。

她迟到了十分钟，进门的时候还在打电话："嗯，我到了，先挂了。"

挂断电话，她看到了我，愣了一下，然后笑了。

"没想到你真的会来。"她在我对面坐下，"我还以为你会放我鸽子。"

"我答应的事，不会反悔。"我说。

"那那天晚上呢？"她问，但语气里没有责备，只有好奇。`,dialogue:'"那天……我到了门口，但没敢进去。"',speaker:"我",backgroundDescription:"coffee shop, afternoon, two people meeting for first time, nervous but warm atmosphere",choices:[{id:"1b_2ac",text:"继续解释那晚的感受",sentiment:"bold"},{id:"1b_2ad",text:"转移话题，聊其他事情",sentiment:"shy"}],isEnding:!1},Aa={narrative:`周六下午，我提前半小时就到了咖啡店。选了个靠窗的位置，点了两杯拿铁，然后开始等待。

窗外的阳光很好，洒在桌面上，把咖啡杯的影子拉得很长。我盯着那两杯咖啡，看着热气慢慢消散，心里七上八下的。

她迟到了十分钟，进门的时候还在打电话："嗯，我到了，先挂了。"

挂断电话，她看到了我，愣了一下，然后笑了。那笑容很轻，但很真实。

"没想到你真的会来。"她在我对面坐下，脱掉外套，"我还以为你会放我鸽子。"

"我答应的事，不会反悔。"我说，声音比我想象的要坚定。

"那那天晚上呢？"她问，但语气里没有责备，只有好奇，还有一丝我读不懂的东西。

我沉默了。咖啡的热气在我们之间升腾，模糊了视线。`,dialogue:'"那天……我到了门口，但没敢进去。"',speaker:"我",backgroundDescription:"cozy coffee shop, afternoon sunlight, two people at table, warm atmosphere",choices:[{id:"1b_3a",text:"继续解释那晚的感受",sentiment:"bold"},{id:"1b_3b",text:"转移话题，聊其他事情",sentiment:"shy"}],isEnding:!1},Oa={narrative:`我们聊了很久。从下午2点聊到傍晚6点，窗外的阳光从明亮变成金黄，再变成橘红，最后消失在城市的边缘。

她告诉我，她叫琳，是个设计师。那段时间家里出了事，急需用钱，所以才接了那个单。但真到了那一刻，她也很害怕。

"其实，我也很庆幸你没来。"她说，声音很轻，"因为我不知道自己能不能真的做到。"

我们聊工作，聊生活，聊那些不敢对别人说的话。咖啡凉了又热，热了又凉，但我们谁都没有在意。

"你知道吗？"她突然说，眼神很认真，"那天晚上，我一直在想，你会是什么样的人。现在我知道了——你是个好人，只是太孤独了。"

那一刻，我突然觉得，也许，我真的可以改变。`,dialogue:'"要不，我们以后经常见面吧？"',speaker:"琳",backgroundDescription:"coffee shop evening, warm lighting, two people deep in conversation, intimate atmosphere",choices:[{id:"1b_3c",text:'"好，我也想。"',sentiment:"romantic"},{id:"1b_3d",text:'"我……需要考虑一下"',sentiment:"shy"}],isEnding:!1},Ma={narrative:`从那天起，我们开始定期见面。每周六下午，同一家咖啡店，同一个位置。

我们聊工作，聊生活，聊那些不敢对别人说的话。我慢慢了解到，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。

她也开始了解我。我的工作，我的孤独，我的恐惧。

"你知道吗？"有一天她对我说，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"

那一刻，我突然意识到，也许，我真的可以改变。

"也许，我们可以不只是朋友？"我鼓起勇气问。`,dialogue:'"我……也想。"',speaker:"琳",backgroundDescription:"coffee shop, regular meeting spot, two people comfortable with each other, growing intimacy",choices:[{id:"1b_3ca",text:"握住她的手",sentiment:"romantic"},{id:"1b_3cb",text:"保持距离，慢慢来",sentiment:"shy"}],isEnding:!1},ja={narrative:`我站在门口站了很久，久到走廊的感应灯都灭了两次。

手机屏幕在黑暗中发着光，微信支付的记录刺眼地提醒着我——700元，已支付。那数字在屏幕上跳动着，像是在嘲笑我的犹豫。

我能听到门里传来的声音，她在打电话："嗯……客人好像还没到……可能路上堵车吧。"

声音很轻，带着一丝不确定。那一刻，我突然意识到，门的另一边也是一个活生生的人。她也在等，也会紧张，也会想这个陌生人会是什么样。

我抬起手，想要敲门，但手指悬在半空中，怎么也落不下去。

最终，我还是走了。但我没有删除联系方式，只是备注改成了"700元"。那三个字，像是一个标记，提醒我那个我永远无法忘记的夜晚。`,dialogue:"（对不起……）",speaker:"内心独白",backgroundDescription:"dark hallway, motion sensor lights turning off, phone light illuminating protagonist's conflicted face",choices:[{id:"1c_1",text:"【继续】",sentiment:"neutral"}],isEnding:!1},cl={narrative:`那700块钱成了我心里的一个结。一个解不开的结，一个让我夜不能寐的结。

我时不时会点开她的微信头像，想看看她的朋友圈，想了解她是个什么样的人。她的头像是一张风景照，夕阳下的海边，很美。海浪拍打着沙滩，夕阳把天空染成橘红色，像是一幅画。

但我从来没有发过消息。我不知道该说什么——道歉？解释？还是假装什么都没发生过？每次打开对话框，手指悬在键盘上，却一个字也打不出来。那些话在脑海里转来转去，但就是说不出口。

一个月后，我在朋友圈看到了她的动态。她发了一张工作照，配文是："新项目终于上线了，累死了。"

照片里的她笑得很灿烂，完全不像那个夜晚我脑海中想象的样子。她看起来……很普通，很真实，就像我身边的任何一个同事。

我突然意识到，我欠她一个道歉。不是为那700块钱，而是为我的逃避，为我的懦弱。`,dialogue:"（也许，我应该主动联系她？）",speaker:"内心独白",backgroundDescription:"phone screen showing social media, protagonist scrolling, guilt and hesitation",choices:[{id:"1c_2",text:"给她发消息，想要道歉",sentiment:"bold"},{id:"1c_3",text:"还是不敢，继续观察",sentiment:"shy"}],isEnding:!1},Fa={narrative:`我选择了继续观察。我开始每天查看她的朋友圈，开始留意她的动态，开始试图从这些碎片中拼凑出她的生活。

我发现她喜欢画画，喜欢看日落，喜欢在深夜听音乐。我发现她工作很努力，经常加班到很晚。我发现她似乎很孤独，朋友圈里很少有其他人的照片。

我开始想象，如果那天我敲门了，现在会是什么样子？我们会成为朋友吗？还是只是陌生人？

两个月后，我在公司楼下看到了一个熟悉的身影。米色风衣，茉莉花香，还有那个我永远忘不了的气质。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次错过？我站在人群中，看着她走进大楼，心里五味杂陈。`,dialogue:"（不能再错过了……）",speaker:"内心独白",backgroundDescription:"company building entrance, morning, protagonist seeing familiar figure, opportunity dawning",choices:[{id:"1c_3a",text:"鼓起勇气，主动上前",sentiment:"bold"},{id:"1c_3b",text:"还是不敢，继续观察",sentiment:"shy"}],isEnding:!1},Ia={narrative:`我鼓起勇气，给她发了条消息："你好，我是那天晚上的……我想为那天的事道歉。"

发送。

我盯着屏幕，心跳加速。她会回吗？她会骂我吗？还是直接拉黑我？

十分钟后，她回了："没事的，我理解。你还好吗？"

我愣住了。她不仅没有生气，还在关心我？

"我……还好。你呢？"我回复。

"我也还好。对了，你也在XX大厦上班吗？我好像见过你。"

我们开始聊天。从简单的问候，到工作，到生活，到那些不敢对别人说的话。`,dialogue:'"要不，我们见个面？就当……交个朋友？"',speaker:"琳",backgroundDescription:"phone chat interface, two people chatting, warm conversation, building connection",choices:[{id:"1c_2a",text:'"好，什么时候方便？"',sentiment:"bold"},{id:"1c_2b",text:'"我……还是算了吧"',sentiment:"shy"}],isEnding:!1},fl={narrative:`我们约在公司楼下的咖啡店。我提前到了，选了个安静的角落，点了两杯拿铁。

窗外的阳光很好，透过百叶窗洒进来，在桌面上投下斑驳的光影。我盯着那两杯咖啡，看着热气慢慢消散，心里七上八下的。

她准时出现，穿着简单的白衬衫和牛仔裤，和我想象中的完全不一样。她看起来很普通，很真实，就像我身边的任何一个同事。

"你好。"她在我对面坐下，声音很轻，"没想到我们真的会见面。"

"我也没想到。"我说，声音比我想象的要平静，"我以为你会直接拉黑我。"

"为什么要拉黑？"她笑了，那笑容很轻，但很真实，"你又不是坏人，只是……有点胆小而已。"

我们聊了很久。她告诉我，她叫琳，是个设计师。那700块钱，她其实早就忘了。

"对我来说，那只是工作。"她说，语气很平静，"但对你来说，可能不一样吧？"`,dialogue:'"其实，我只是想要有人陪。"',speaker:"我",backgroundDescription:"coffee shop, afternoon, two people meeting for first time, warm and understanding atmosphere",choices:[{id:"1c_6",text:"继续深入聊下去",sentiment:"romantic"},{id:"1c_7",text:"保持距离，只做朋友",sentiment:"neutral"}],isEnding:!1},Xp={narrative:`我们继续聊下去。从下午2点聊到傍晚6点，窗外的阳光从明亮变成金黄，再变成橘红，最后消失在城市的边缘。

她告诉我，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，画的是她们家的小花园，那时候她还在上小学。她最喜欢的日落是在海边看到的，那时候她刚失恋，一个人坐在沙滩上，看着太阳慢慢沉入海平面，眼泪和海水混在一起。她深夜听的音乐总是很悲伤，她说，悲伤的音乐让她觉得不那么孤独。

我也开始告诉她我的故事。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"

那一刻，我突然意识到，也许，我真的可以改变。

"也许，我们可以不只是朋友？"我鼓起勇气问。`,dialogue:'"我……也想。"',speaker:"琳",backgroundDescription:"coffee shop evening, warm lighting, two people deep in conversation, growing intimacy",choices:[{id:"1c_6a",text:"握住她的手",sentiment:"romantic"},{id:"1c_6b",text:"保持距离，慢慢来",sentiment:"shy"}],isEnding:!1},Ba={narrative:`我们选择了保持距离，只做朋友。

从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。公园里的路灯已经亮了，昏黄的光洒在我们身上，把影子拉得很长。

我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。有时候我们会聊几句，有时候只是安静地走着，听着彼此的脚步声。

我慢慢了解到，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她也开始了解我。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"

那一刻，我突然意识到，也许，我真的可以改变。

"也许，我们可以不只是朋友？"我鼓起勇气问。`,dialogue:'"我……也想。"',speaker:"琳",backgroundDescription:"evening walk in park, two people walking side by side, sunset colors, peaceful friendship",choices:[{id:"1c_7a",text:"握住她的手",sentiment:"romantic"},{id:"1c_7b",text:"保持距离，继续做朋友",sentiment:"neutral"}],isEnding:!1},pe={narrative:`
三个月后。公司楼下的全家便利店。

外面下着梅雨，细密的雨丝打在玻璃窗上，模糊了外面的世界。我等着微波炉热饭团，盯着那个旋转的盘子，听着"叮"的一声。

身边突然多了一个收伞的身影——米色风衣，淡淡的茉莉花香。那香味很熟悉，熟悉到让我心跳加速。

我转过头，侧脸重叠的那一刻，我的脑子"嗡"了一声。

是她。虽然那天我们没见过面，但我死都不会认错这个气质。那个在黑暗中安慰我的人，那个让我感到温暖的人。

她也在看我，眼神里闪过一丝惊讶，然后是复杂的情绪。`,dialogue:'"诶，不好意思，能帮我拿一下那边的纸巾吗？"',speaker:"琳",backgroundDescription:"convenience store interior, rainy window, fluorescent lighting, slice of life anime style",choices:[{id:"2_1",text:"僵硬地递过去，不敢对视",sentiment:"shy"},{id:"2_2",text:'"你是……那天的？"',sentiment:"bold"},{id:"2_3",text:"假装不认识，拿了饭团就走",sentiment:"cold"}],isEnding:!1},Qe={narrative:`
她认出我了。无论我怎么装，她那双眼睛里闪过的惊讶和复杂的情绪都出卖了一切。那眼神里有困惑，有好奇，还有一丝我读不懂的东西。

公司食堂里人声鼎沸，但我们之间的空气却像是凝固了一样。她端着餐盘，站在我面前，餐盘里的饭菜还冒着热气。

"你也在这栋楼上班？"她问，语气很自然，但我听得出一丝试探。她的声音很轻，但在嘈杂的食堂里，我却听得清清楚楚。

"嗯……12楼。"我说，声音比我想象的要平静。但我知道，我的心跳已经快得像是要跳出胸膛。

"我在11楼，设计部的。"她笑了笑，那笑容很轻，但很真实，"看来以后可能会常见面。"

空气安静了几秒。微波炉的提示音打破了尴尬，"叮"的一声，像是把我们从某种奇怪的氛围中拉了出来。

"要不……一起吃？"她问，声音很轻，带着一丝不确定，"我一个人吃也挺无聊的。"`,dialogue:'"好。"',speaker:"我",backgroundDescription:"company cafeteria, warm afternoon light, casual atmosphere",choices:[{id:"3_1",text:"接受邀请，坐下来聊",sentiment:"romantic"},{id:"3_2",text:'"不好意思，我赶时间。"',sentiment:"cold"},{id:"3_3",text:'"其实我想先道个歉……"',sentiment:"bold"}],isEnding:!1},Zp={narrative:`
我僵硬地递过纸巾，不敢看她。手指触碰到她手背的瞬间，像是触电一样，我立刻缩了回来。

"谢谢。"她接过纸巾，声音很轻。我能感觉到她在看我，但我就是不敢抬头。

空气安静得可怕。微波炉又"叮"了一声，但这次，我们谁都没有动。

"你……"她突然开口，声音里带着一丝犹豫，"是不是那天晚上的……"

我猛地抬起头，对上了她的眼睛。那双眼睛里，有惊讶，有困惑，还有一丝我读不懂的东西。

"我……"我想说什么，但话到嘴边，却一个字也说不出来。`,dialogue:"（她认出来了……）",speaker:"内心独白",backgroundDescription:"convenience store, awkward moment, two people recognizing each other, tense atmosphere",choices:[{id:"2_1a",text:"承认，然后道歉",sentiment:"bold"},{id:"2_1b",text:"继续装傻，快速离开",sentiment:"shy"}],isEnding:!1},Jp={narrative:`
"你是……那天的？"我鼓起勇气问。

她愣了一下，然后笑了。那笑容很轻，但很真实。

"嗯。"她点点头，"没想到会在这里遇到你。"

我们站在便利店里，周围是来来往往的顾客，但那一刻，世界好像只剩下我们两个人。

"那天……对不起。"我说，声音很轻，"我……"

"不用道歉。"她打断我，"其实，我也很庆幸你没进来。因为那天，我也是第一次接那种单，我也很害怕。"

我愣住了。她居然也害怕？我以为只有我一个人在害怕。`,dialogue:'"那……我们能聊聊吗？"',speaker:"我",backgroundDescription:"convenience store, recognition moment, two people understanding each other, warm atmosphere",choices:[{id:"2_2a",text:'"好，我知道附近有家咖啡店"',sentiment:"bold"},{id:"2_2b",text:'"我……还是算了吧"',sentiment:"shy"}],isEnding:!1},qp={narrative:`
我假装不认识，拿了饭团就走。脚步很快，快得像是要逃离什么。

但我知道，我逃不掉的。那个夜晚，那700块钱，那个我永远无法忘记的她，会一直跟着我，像影子一样。

我走到门口，推开门，外面的雨还在下。我站在屋檐下，看着雨丝打在玻璃上，模糊了里面的世界。

身后传来脚步声，然后是她的声音："等等。"

我停住了脚步，但没有回头。我知道，如果回头，我就再也走不了了。`,dialogue:"（不能再逃了……）",speaker:"内心独白",backgroundDescription:"convenience store entrance, rainy day, protagonist hesitating, second chance",choices:[{id:"2_3a",text:"停下脚步，转过身",sentiment:"bold"},{id:"2_3b",text:"继续走，不回头",sentiment:"cold"}],isEnding:!1},eh={narrative:`
我们找了个靠窗的位置坐下。食堂里人声鼎沸，但我们之间的空气却像是凝固了一样。

她先开口："所以，你也在12楼？"

"嗯，技术部。"我说，声音比我想象的要平静。

"技术部啊……"她笑了笑，"我们设计部经常要和你们对接，说不定以后会经常见面。"

我们聊工作，聊生活，聊那些不敢对别人说的话。午餐时间很快就过去了，但我们谁都没有要离开的意思。

"要不……"她突然说，声音很轻，"我们以后经常一起吃饭？"`,dialogue:'"好。"',speaker:"我",backgroundDescription:"company cafeteria, lunch conversation, two people getting closer, warm atmosphere",choices:[{id:"3_1a",text:'"我也想。"',sentiment:"romantic"},{id:"3_1b",text:'"我……需要考虑一下"',sentiment:"shy"}],isEnding:!1},th={narrative:`
"不好意思，我赶时间。"我说，声音很冷。

她的笑容僵了一下，然后点点头："没关系，理解。"

我拿起餐盘，转身就走。每一步都像是踩在刀刃上，但我没有回头。

我知道，我又一次逃跑了。就像那天晚上一样。

但这次，我知道我错过了什么。我错过了一个可能，一个机会，一个也许能改变我人生的瞬间。

那700块钱，又成了我心里一个永远的问号。`,dialogue:"（我又逃跑了……）",speaker:"内心独白",backgroundDescription:"company cafeteria, rejection moment, protagonist leaving, regretful atmosphere",choices:[{id:"3_2a",text:"后悔，想要回去道歉",sentiment:"bold"},{id:"3_2b",text:"继续逃避，彻底放弃",sentiment:"cold"}],isEnding:!1},nh={narrative:`
"其实我想先道个歉……"我说，声音很轻，"那天晚上，我到了门口，但我逃跑了。我删除了你的联系方式，我试图忘记你，但我做不到。"

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你跟踪我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在观察你。"她说，"在公司里，在电梯里，在食堂里。我一直在想，你会不会主动和我说话。"

我们坐在食堂里，周围是嘈杂的说话声，但那一刻，世界好像只剩下我们两个人。`,dialogue:'"所以，我们都在等对方先开口？"',speaker:"我",backgroundDescription:"company cafeteria, apology moment, two people understanding each other, emotional atmosphere",choices:[{id:"3_3a",text:'"那现在，我们可以重新开始吗？"',sentiment:"bold"},{id:"3_3b",text:'"我……还是有点害怕"',sentiment:"shy"}],isEnding:!1},rh={narrative:`
我深吸一口气，终于抬起头看着她。

"对不起。"我说，声音很轻，"那天晚上，我到了门口，但我逃跑了。我删除了你的联系方式，我试图忘记你，但我做不到。"

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你跟踪我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在观察你。"她说，"在公司里，在电梯里，在食堂里。我一直在想，你会不会主动和我说话。"`,dialogue:'"所以，我们都在等对方先开口？"',speaker:"我",backgroundDescription:"convenience store, confession moment, two people understanding each other, emotional",choices:[{id:"2_1aa",text:'"那现在，我们可以重新开始吗？"',sentiment:"bold"},{id:"2_1ab",text:'"我……还是有点害怕"',sentiment:"shy"}],isEnding:!1},ih={narrative:`
我继续装傻，快速离开。脚步很快，快得像是要逃离什么。

但我知道，我逃不掉的。那个夜晚，那700块钱，那个我永远无法忘记的她，会一直跟着我，像影子一样。

我走到门口，推开门，外面的雨还在下。我站在屋檐下，看着雨丝打在玻璃上，模糊了里面的世界。

身后传来脚步声，然后是她的声音："等等。"

我停住了脚步，但没有回头。我知道，如果回头，我就再也走不了了。`,dialogue:"（不能再逃了……）",speaker:"内心独白",backgroundDescription:"convenience store entrance, rainy day, protagonist hesitating, second chance",choices:[{id:"2_1ba",text:"停下脚步，转过身",sentiment:"bold"},{id:"2_1bb",text:"继续走，不回头",sentiment:"cold"}],isEnding:!1},lh={narrative:`
"好，我知道附近有家咖啡店。"我说，声音比我想象的要平静。

我们走出便利店，外面的雨还在下。她撑开伞，我犹豫了一下，还是走了过去。

"一起吧。"她说，声音很轻。

我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。

咖啡店不远，就在街角。我们推门进去，找了个靠窗的位置坐下。

"所以……"她先开口，声音很轻，"那天晚上，你为什么没进来？"`,dialogue:'"我到了门口，但突然意识到，我想要的不是那种关系。"',speaker:"我",backgroundDescription:"coffee shop, rainy day, two people talking, intimate atmosphere",choices:[{id:"2_2aa",text:"继续深入聊下去",sentiment:"romantic"},{id:"2_2ab",text:"保持距离，只做朋友",sentiment:"neutral"}],isEnding:!1},ba={narrative:`
"我……还是算了吧。"我说，声音很轻。

她的笑容僵了一下，然后点点头："没关系，理解。"

我拿起东西，转身就走。每一步都像是踩在刀刃上，但我没有回头。

我知道，我又一次逃跑了。就像那天晚上一样。

但这次，我知道我错过了什么。我错过了一个可能，一个机会，一个也许能改变我人生的瞬间。`,dialogue:"（我又逃跑了……）",speaker:"内心独白",backgroundDescription:"convenience store, hesitation moment, protagonist leaving, regretful atmosphere",choices:[{id:"2_2ba",text:"后悔，想要回去道歉",sentiment:"bold"},{id:"2_2bb",text:"继续逃避，彻底放弃",sentiment:"cold"}],isEnding:!1},Ua={narrative:`
我停下脚步，转过身。

她站在便利店门口，手里拿着伞，看着我。雨丝打在她的头发上，在灯光下闪闪发光。

"你……"她开口，声音很轻，"是不是那天晚上的……"

我点了点头，不敢看她。

"我……对不起。"我说，声音很轻，"我逃跑了。"

她走过来，把伞举到我头上。那一刻，我们之间的距离突然变得很近，近到我能闻到她身上的茉莉花香。`,dialogue:'"不用道歉。其实，我也很庆幸你没进来。"',speaker:"琳",backgroundDescription:"convenience store entrance, rainy day, two people under umbrella, intimate moment",choices:[{id:"2_3aa",text:'"那……我们能聊聊吗？"',sentiment:"bold"},{id:"2_3ab",text:'"我……还是算了吧"',sentiment:"shy"}],isEnding:!1},Tn={narrative:`
我继续走，不回头。脚步很快，快得像是要逃离什么。

但我知道，我逃不掉的。那个夜晚，那700块钱，那个我永远无法忘记的她，会一直跟着我，像影子一样。

我走到地铁站，买了票，上了车。车厢里人很多，但我却觉得比任何时候都孤独。

那700块钱，成了我心里一个永远的秘密。一个只有我知道的秘密，一个永远不会对任何人提起的秘密。

也许，这就是我的宿命。永远在边缘徘徊，永远不敢真正靠近任何人。`,dialogue:"（再见了，琳……）",speaker:"内心独白",backgroundDescription:"subway station, protagonist leaving, final escape, melancholic atmosphere",choices:[{id:"2_3ba",text:"接受现实，继续生活",sentiment:"neutral"},{id:"2_3bb",text:"决定回去找她，哪怕只是见一面",sentiment:"bold"}],isEnding:!1},sh={narrative:`
"我也想。"我说，声音比我想象的要平静。

她笑了，那笑容很轻，但很真实。

从那天起，我们开始经常一起吃饭。有时候是食堂，有时候是公司附近的餐厅，有时候是便利店。

我们聊工作，聊生活，聊那些不敢对别人说的话。我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。

她也开始了解我。我的工作，我的孤独，我的恐惧。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"`,dialogue:'"也许，我们可以不只是朋友？"',speaker:"我",backgroundDescription:"restaurant, regular lunch meetings, two people getting closer, warm atmosphere",choices:[{id:"3_1aa",text:'"我想……不只是朋友"',sentiment:"romantic"},{id:"3_1ab",text:'"好，朋友也很好"',sentiment:"neutral"}],isEnding:!1},oh={narrative:`
"我……需要考虑一下。"我说，声音很轻。

她的笑容僵了一下，然后点点头："没关系，理解。"

我知道，我又一次逃跑了。就像那天晚上一样。

但这次，我知道我错过了什么。我错过了一个可能，一个机会，一个也许能改变我人生的瞬间。

那700块钱，又成了我心里一个永远的问号。`,dialogue:"（我又逃跑了……）",speaker:"内心独白",backgroundDescription:"company cafeteria, hesitation moment, protagonist leaving, regretful atmosphere",choices:[{id:"3_1ba",text:"后悔，想要回去道歉",sentiment:"bold"},{id:"3_1bb",text:"继续逃避，彻底放弃",sentiment:"cold"}],isEnding:!1},ah={narrative:`
我后悔了。我想要回去道歉，想要告诉她，其实我想和她一起吃饭，想要告诉她，其实我很想了解她。

但我没有。我继续走，继续逃避，继续用工作麻痹自己。

那700块钱，成了我心里一个永远的问号。一个只有我知道的问号，一个永远不会对任何人提起的问号。

也许，这就是我的宿命。永远在边缘徘徊，永远不敢真正靠近任何人。`,dialogue:"（我又逃跑了……）",speaker:"内心独白",backgroundDescription:"office, protagonist working late, regretful atmosphere, lonely",choices:[{id:"3_2aa",text:"决定回去找她，哪怕只是道歉",sentiment:"bold"},{id:"3_2ab",text:"继续逃避，彻底放弃",sentiment:"cold"}],isEnding:!1},uh={narrative:`
我选择了继续逃避，彻底放弃。

时间是最好的良药，虽然伤口还在，但至少不再流血了。我学会了和孤独共处，学会了在人群中保持距离，学会了不再期待什么。

那700块钱，成了我心里一个永远的秘密。一个只有我知道的秘密，一个永远不会对任何人提起的秘密。

有时候，我会想，如果那天我接受了她的邀请，现在会是什么样子？但我知道，没有如果。有些选择，做错了就是做错了，错过了就是错过了。`,dialogue:"（就这样吧……）",speaker:"内心独白",backgroundDescription:"city street at night, protagonist walking alone, accepting loneliness, melancholic but peaceful",choices:[{id:"3_2ba",text:"接受现实，继续生活",sentiment:"neutral"},{id:"3_2bb",text:"决定回去找她，哪怕只是见一面",sentiment:"bold"}],isEnding:!1},ch={narrative:`
"那现在，我们可以重新开始吗？"我问，声音很轻。

她看着我，眼神很复杂。有理解，有同情，还有某种我读不懂的东西。

"好。"她说，声音很轻，"我们重新开始。"

从那天起，我们开始经常一起吃饭。有时候是食堂，有时候是公司附近的餐厅，有时候是便利店。

我们聊工作，聊生活，聊那些不敢对别人说的话。我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。

她也开始了解我。我的工作，我的孤独，我的恐惧。`,dialogue:'"也许，我们可以不只是朋友？"',speaker:"我",backgroundDescription:"restaurant, new beginning, two people getting closer, warm atmosphere",choices:[{id:"3_3aa",text:'"我想……不只是朋友"',sentiment:"romantic"},{id:"3_3ab",text:'"好，朋友也很好"',sentiment:"neutral"}],isEnding:!1},fh={narrative:`
"我……还是有点害怕。"我说，声音很轻。

她看着我，眼神很温柔。

"那我们就慢慢来。"她说，握住我的手，"不用着急，我们可以慢慢了解彼此。"

从那天起，我们开始经常一起吃饭。有时候是食堂，有时候是公司附近的餐厅，有时候是便利店。

我们聊工作，聊生活，聊那些不敢对别人说的话。我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。

她也开始了解我。我的工作，我的孤独，我的恐惧。`,dialogue:'"谢谢你理解我。"',speaker:"我",backgroundDescription:"restaurant, understanding moment, two people supporting each other, warm atmosphere",choices:[{id:"3_3ba",text:"拥抱她，告诉她我会努力",sentiment:"romantic"},{id:"3_3bb",text:"保持距离，只做朋友",sentiment:"neutral"}],isEnding:!1},dh={narrative:`
我选择了继续逃避。工作成了我唯一的避风港，但也是我的牢笼。

我接了更多的项目，主动申请加班，甚至周末也来公司。同事们都说我变了，变得"上进"了。只有我知道，我只是在逃避。

每天晚上回到家，空荡荡的房间让我感到窒息。我开始失眠，开始做噩梦。梦里，我总是站在那扇门前，但永远不敢敲门。

一个月后，我的身体开始抗议。胃痛、头痛、失眠。我知道，这样下去不行。

但我还是不知道该怎么改变。`,dialogue:"（我到底在害怕什么？）",speaker:"内心独白",backgroundDescription:"empty apartment at night, protagonist lying on bed, phone screen glowing, lonely and exhausted",choices:[{id:"1a_4a",text:"继续这样下去，直到崩溃",sentiment:"cold"},{id:"1a_4b",text:"决定尝试改变，哪怕只是一小步",sentiment:"bold"}],isEnding:!1},ph={narrative:`
我选择了继续逃避，直到身体彻底崩溃。

那天早上，我在公司突然晕倒了。醒来的时候，我已经在医院里了。医生说我过度劳累，需要休息。

病床很白，很干净，但也很冷。我看着天花板，突然意识到，我不能再这样下去了。

我拿出手机，想要给她发条消息，但手指悬在键盘上，却一个字也打不出来。

也许，这就是我的报应。`,dialogue:"（如果那天我敲门了，现在会是什么样子？）",speaker:"内心独白",backgroundDescription:"hospital room, white walls, protagonist lying on bed, phone in hand, melancholic atmosphere",choices:[{id:"1a_5aa",text:"出院后，决定彻底改变",sentiment:"bold"},{id:"1a_5ab",text:"继续逃避，换一份工作",sentiment:"cold"}],isEnding:!1},hh={narrative:`
我决定尝试改变。我开始参加公司的团建活动，开始主动和同事聊天，开始尝试在社交软件上主动打招呼。

但每次，我都失败了。我害怕被拒绝，害怕说错话，害怕暴露自己的孤独。

直到有一天，我在公司食堂看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次逃避的开始？`,dialogue:"（不能再逃了……）",speaker:"内心独白",backgroundDescription:"company cafeteria, lunch time, protagonist seeing familiar figure, nervous anticipation",choices:[{id:"1a_5ba",text:"鼓起勇气，走过去",sentiment:"bold"},{id:"1a_5bb",text:"还是不敢，默默走开",sentiment:"shy"}],isEnding:!1},mh={narrative:`
我决定尝试改变。哪怕只是一小步。

我开始强迫自己参加公司的团建活动，开始主动和同事聊天，开始尝试在社交软件上主动打招呼。

但每次，我都失败了。我害怕被拒绝，害怕说错话，害怕暴露自己的孤独。

直到有一天，我在公司食堂看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次逃避的开始？`,dialogue:"（不能再逃了……）",speaker:"内心独白",backgroundDescription:"company cafeteria, lunch time, protagonist seeing familiar figure, nervous anticipation",choices:[{id:"1a_4c",text:"鼓起勇气，走过去",sentiment:"bold"},{id:"1a_4d",text:"还是不敢，默默走开",sentiment:"shy"}],isEnding:!1},Ha={narrative:`
我鼓起勇气，走了过去。每一步都像是踩在刀刃上，但我知道，如果这次再逃避，就真的没有机会了。

"你好……"我的声音有点颤抖，"你还记得我吗？"

她转过身，看到我的瞬间，眼神里闪过一丝惊讶，然后是复杂的情绪。

"记得。"她点点头，声音很轻，"那天晚上，你到了门口，但没进来。"

我们站在食堂里，周围是嘈杂的说话声，但那一刻，世界好像只剩下我们两个人。`,dialogue:'"要不，我们找个地方聊聊？"',speaker:"琳",backgroundDescription:"company cafeteria, two people talking, lunch crowd, intimate moment",choices:[{id:"1a_5a",text:'"好，我知道附近有家咖啡店"',sentiment:"bold"},{id:"1a_5b",text:'"我……还是算了吧"',sentiment:"shy"}],isEnding:!1},dl={narrative:`
我还是选择了逃避。我假装没看见，快速走开，心跳如擂鼓。

接下来的几天，我开始留意她。我发现她每天早上8点半到公司，中午12点在食堂吃饭，晚上经常加班到很晚。

我甚至开始计算时间，想要"偶遇"她。但每次真的遇到了，我又会假装没看见，或者快速走开。

直到有一天，在电梯里，我们被挤到了一起。她身上的茉莉花香再次袭来，我心跳加速。

"你也是这栋楼的？"她突然问。`,dialogue:'"我在11楼，设计部。你呢？"',speaker:"琳",backgroundDescription:"crowded elevator, two people close together, tense atmosphere, morning commute",choices:[{id:"1a_5c",text:'"12楼……"',sentiment:"shy"},{id:"1a_5d",text:"假装没听见，盯着楼层数字",sentiment:"cold"}],isEnding:!1},$a={narrative:`
我们去了公司附近的一家咖啡店。店面不大，但很安静，角落里摆着几盆绿植，阳光从落地窗洒进来，在地板上投下斑驳的光影。

我点了两杯拿铁，找了个靠窗的位置。她在我对面坐下，脱掉外套，露出里面简单的白衬衫。

"所以……"她先开口，声音很轻，"那天晚上，你为什么没进来？"

我沉默了很久。咖啡的热气在两人之间升腾，模糊了视线。该怎么说？说我害怕？说我懦弱？说我配不上那种交易？

"我……"我深吸一口气，终于抬起头看着她，"我到了门口，但突然意识到，我想要的不是那种关系。我想要的是……有人理解我，有人陪我说话，有人让我觉得我不那么孤独。"

她看着我，眼神很复杂。有理解，有同情，还有某种我读不懂的东西。`,dialogue:'"那你现在呢？还觉得孤独吗？"',speaker:"琳",backgroundDescription:"cozy coffee shop, afternoon, two people at corner table, deep conversation, warm lighting",choices:[{id:"1a_6a",text:'"和你聊天的时候，好像……不那么孤独了。"',sentiment:"romantic"},{id:"1a_6b",text:'"也许吧，但我不敢奢望什么"',sentiment:"sad"}],isEnding:!1},pl={narrative:`
"12楼？"她笑了，"那我们以后可能会经常遇到呢。"

电梯到了11楼，她准备出去，但突然回头看了我一眼。

"对了，"她说，"你看起来很眼熟。我们是不是在哪里见过？"

我的心跳瞬间停止。她认出我了？

"可能……在楼下便利店？"我勉强回答。

"也许吧。"她点点头，走出了电梯。

电梯门关上，我靠在墙上，心跳如擂鼓。她认出我了，但她没有说破。这是机会吗？`,dialogue:"（也许，我应该主动一点？）",speaker:"内心独白",backgroundDescription:"elevator interior, protagonist alone, conflicted expression, opportunity dawning",choices:[{id:"1a_6c",text:"下次遇到她，主动打招呼",sentiment:"bold"},{id:"1a_6d",text:"继续观察，等待更好的时机",sentiment:"shy"}],isEnding:!1},hl={narrative:`
从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。

公园里的路灯已经亮了，昏黄的光洒在我们身上，把影子拉得很长。我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。

我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，那时候她还在上小学，画得很丑，但妈妈却把它裱起来，挂在客厅里。

她也开始了解我。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。"`,dialogue:'"也许，我们可以成为朋友？"',speaker:"琳",backgroundDescription:"evening walk in park, two people walking side by side, sunset colors, peaceful atmosphere",choices:[{id:"1a_7a",text:'"我想……不只是朋友"',sentiment:"romantic"},{id:"1a_7b",text:'"好，朋友也很好"',sentiment:"neutral"}],isEnding:!1},Va={narrative:`
我还是选择了继续观察。我看着她走进电梯，看着电梯门关上，看着数字从1跳到11。

接下来的几周，我继续观察她。我知道她喜欢在便利店买三明治当早餐，知道她中午总是点那家店的麻辣烫，知道她晚上经常加班到很晚。

我甚至开始跟踪她——不是恶意的，只是想知道她住在哪里，想知道她下班后去哪里。

我知道这很变态，但我控制不住自己。我想了解她，想靠近她，但我又不敢。

直到有一天，她突然转过身，看着我。

"你跟踪我多久了？"她问，语气很平静，但眼神很冷。`,dialogue:'"我……对不起……"',speaker:"我",backgroundDescription:"dark street at night, protagonist caught following, guilty expression, tense confrontation",choices:[{id:"1a_7c",text:"解释自己的行为，请求原谅",sentiment:"bold"},{id:"1a_7d",text:"转身逃跑，再次逃避",sentiment:"cold"}],isEnding:!1},Lr={narrative:`
我决定向她坦白一切。包括那700块钱，包括我的跟踪，包括我的恐惧和孤独。

我们坐在公园的长椅上，夜色很浓，路灯的光很暗。我把所有的事情都说了出来，每一个字都像是从心底挖出来的。

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你跟踪我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在观察你。"她说，"在公司里，在电梯里，在食堂里。我一直在想，你会不会主动和我说话。"

我愣住了。`,dialogue:'"所以，我们都在等对方先开口？"',speaker:"我",backgroundDescription:"park bench at night, two people sitting, street lights, emotional confession",choices:[{id:"1a_8a",text:'"那现在，我们可以重新开始吗？"',sentiment:"bold"},{id:"1a_8b",text:'"我……不知道"',sentiment:"shy"}],isEnding:!1},ml={narrative:`
我选择了再次逃避。我转身就跑，像那天晚上一样。

她在我身后喊我的名字，但我没有回头。我跑得很快，快得像是要逃离什么。

但我知道，我逃不掉的。那个夜晚，那700块钱，那个我永远无法忘记的她，会一直跟着我，像影子一样。

后来我换了工作，离开了那栋楼。听说她也跳槽去了外地。

那700块钱，成了我心里永远的刺。每次路过那家酒店，我都会想：如果那天我更勇敢一点，如果我更早说出真相……

但人生没有如果。`,dialogue:"（再见了……）",speaker:"内心独白",backgroundDescription:"empty street at night, lonely figure running away, cold blue tones, melancholic",choices:[{id:"1a_8c",text:"继续逃避，彻底离开这座城市",sentiment:"cold"},{id:"1a_8d",text:"决定回去找她，哪怕只是道歉",sentiment:"bold"}],isEnding:!1},Wa={narrative:`
三个月后，我决定回去找她。

我回到了那栋楼，回到了那家咖啡店，回到了我们曾经相遇的地方。但一切都变了。咖啡店换了老板，装修也变了。那家酒店也重新装修了，302号房的门牌号都换了。

我开始在社交软件上寻找，试图找到她的痕迹。但我知道，即使找到了，我也没有勇气去联系。

直到有一天，我在朋友圈里看到了一张照片。是她，和一个我不认识的男人，在海边看日落。照片下面写着："终于找到了对的人。"

那一刻，我突然意识到，我错过了。`,dialogue:"（也许，这就是我的报应……）",speaker:"内心独白",backgroundDescription:"empty coffee shop, protagonist sitting alone, melancholic atmosphere, regret",choices:[{id:"1a_9a",text:"给她发消息，哪怕只是道歉",sentiment:"bold"},{id:"1a_9b",text:"彻底放弃，接受现实",sentiment:"sad"}],isEnding:!1},Qa={narrative:`
我选择了彻底离开。我删除了所有关于她的记忆，删除了那700块钱的转账记录，删除了那个夜晚所有的痕迹。

我搬到了另一个城市，换了工作，换了手机号，换了所有能换的东西。我以为这样就能忘记，就能重新开始。

但我知道，我忘不掉的。那个夜晚，那700块钱，那个我永远无法忘记的她，会一直跟着我，像影子一样。

每次路过类似的酒店，每次看到米色风衣，每次闻到茉莉花香，我都会想起她。

那700块钱，成了我心里永远的刺。

一年后，我在新城市的咖啡店里，偶然听到了一首歌。歌词里唱着："有些人，错过了就是一辈子。"

我放下咖啡，看着窗外。这座城市很大，很繁华，但我却觉得比从前更孤独了。`,dialogue:"（也许，这就是我的宿命……）",speaker:"内心独白",backgroundDescription:"new city coffee shop, protagonist looking out window, melancholic atmosphere, time passing",choices:[{id:"1a_9c",text:"接受现实，继续生活",sentiment:"neutral"},{id:"1a_9c2",text:"决定回去找她，哪怕只是见一面",sentiment:"bold"}],isEnding:!1},gh={narrative:`
我鼓起勇气，给她发了条消息："对不起，那天我逃跑了。我想为我的懦弱道歉。"

发送。

我盯着屏幕，心跳加速。她会回吗？她会骂我吗？还是直接拉黑我？

三天后，她回了："没关系，我理解。你现在还好吗？"

我愣住了。她不仅没有生气，还在关心我？

"我……还好。你呢？"我回复。

"我也还好。对了，我交男朋友了。他对我很好。"

那一刻，我突然意识到，我错过了。彻底错过了。`,dialogue:"（祝你幸福……）",speaker:"内心独白",backgroundDescription:"phone screen, last message, bittersweet farewell, melancholic",choices:[{id:"1a_9d",text:"祝福她，然后彻底放下",sentiment:"neutral"},{id:"1a_9e",text:"告诉她，我其实一直喜欢她",sentiment:"bold"}],isEnding:!1},vh={narrative:`
我选择了祝福她。

"祝你幸福。"我回复。

"谢谢。你也是。"她回。

然后，我们再也没有联系过。

那700块钱，成了我心里永远的刺。每次路过那家酒店，我都会想：如果那天我更勇敢一点，如果我更早说出真相……

但人生没有如果。有些错过，就是一辈子。

我学会了接受，学会了放下，学会了祝福。虽然心里还是会痛，但我知道，这是最好的结局。`,dialogue:"（再见了，琳。祝你幸福。）",speaker:"内心独白",backgroundDescription:"sunset over city, protagonist looking at horizon, acceptance and peace, warm colors",choices:[{id:"1a_10a",text:"【结局】",sentiment:"neutral"}],isEnding:!1},Ga={narrative:`
我选择了告诉她真相。

"其实，我一直喜欢你。"我发过去，"从那天晚上开始，我就一直在想你。我知道现在说这些已经太晚了，但我还是想告诉你。"

发送。

我盯着屏幕，心跳加速。她会回吗？她会骂我吗？还是直接拉黑我？

十分钟后，她回了："谢谢你告诉我。我也曾经对你有过好感，但那是过去的事了。现在，我有男朋友了，我很幸福。我希望你也能找到属于你的幸福。"

那一刻，我突然意识到，也许，这就是最好的结局。我们都没有错，只是错过了。`,dialogue:"（谢谢你，琳。我会找到属于我的幸福的。）",speaker:"内心独白",backgroundDescription:"phone screen, final confession, bittersweet but peaceful, warm lighting",choices:[{id:"1a_10b",text:"【结局】",sentiment:"neutral"}],isEnding:!1},gl={narrative:`
我选择了接受现实。

时间是最好的良药，虽然伤口还在，但至少不再流血了。我学会了和孤独共处，学会了在人群中保持距离，学会了不再期待什么。

那700块钱，成了我心里一个永远的秘密。一个只有我知道的秘密，一个永远不会对任何人提起的秘密。

有时候，我会想，如果那天我敲门了，现在会是什么样子？但我知道，没有如果。有些选择，做错了就是做错了，错过了就是错过了。

我继续生活，继续工作，继续在这个城市里游荡。只是，我再也不会去那家酒店，再也不会下载那种APP，再也不会试图用钱买来陪伴。

也许，这就是成长。学会接受，学会放下，学会一个人走下去。`,dialogue:"（就这样吧……）",speaker:"内心独白",backgroundDescription:"city street at night, protagonist walking alone, accepting loneliness, melancholic but peaceful",choices:[{id:"1a_10c",text:"【结局】",sentiment:"neutral"}],isEnding:!1},vl={narrative:`
我决定回去找她，哪怕只是见一面。

我买了回程的票，回到了那座城市。一切都没变，又好像一切都变了。那栋楼还在，那家咖啡店还在，但那家酒店已经拆了，建成了新的商业中心。

我开始在社交软件上疯狂地寻找，试图找到她的痕迹。我翻遍了所有可能的地方，问遍了所有可能认识她的人。

终于，我找到了。她的朋友圈里，有她和男朋友的合照，有他们的旅行照片，有他们的日常。每一张照片里，她都笑得很开心。

我盯着那些照片，看了很久很久。然后，我关掉了手机。

也许，这就是最好的结局。她找到了她的幸福，而我，也应该去寻找我的了。

那700块钱，就让它成为过去吧。`,dialogue:"（再见了，琳。祝你幸福。）",speaker:"内心独白",backgroundDescription:"old city street, protagonist looking at phone, bittersweet realization, warm sunset",choices:[{id:"1a_10d",text:"【结局】",sentiment:"neutral"}],isEnding:!1},zr={narrative:`
我删除了她，但后悔很快就来了。

我开始在微信里搜索她的账号，想要重新加她。但我发现，我已经不记得她的微信号了。

我开始在社交软件上寻找，试图找到她的痕迹。但我知道，即使找到了，我也没有勇气去联系。

一个月后，我在公司楼下看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次错过？`,dialogue:"（不能再错过了……）",speaker:"内心独白",backgroundDescription:"company building entrance, morning, protagonist seeing familiar figure, second chance dawning",choices:[{id:"1b_4a",text:"鼓起勇气，主动上前",sentiment:"bold"},{id:"1b_4b",text:"还是不敢，默默走开",sentiment:"shy"}],isEnding:!1},Ka={narrative:`
从那天起，我们每天晚上都会聊天。有时候是文字，有时候是语音，有时候是视频。手机屏幕的光在黑暗中发着光，像是两个孤独的灵魂在互相取暖。

我了解到，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，画的是她们家的小花园，那时候她还在上小学。她最喜欢的日落是在海边看到的，那时候她刚失恋，一个人坐在沙滩上，看着太阳慢慢沉入海平面，眼泪和海水混在一起。

我也开始告诉她我的故事。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。`,dialogue:'"也许，我们可以成为真正的朋友？"',speaker:"琳",backgroundDescription:"phone video call interface, late night, two people talking, intimate conversation",choices:[{id:"1b_4c",text:'"我想……不只是朋友"',sentiment:"romantic"},{id:"1b_4d",text:'"好，朋友也很好"',sentiment:"neutral"}],isEnding:!1},Ya={narrative:`
我们约好了见面。周六下午，咖啡店。

我提前半小时就到了，选了个靠窗的位置，点了两杯拿铁。咖啡的香气在空气中弥漫，阳光透过百叶窗洒在桌子上，形成斑驳的光影。

我紧张得手心出汗，不停地看手机，又不停地望向门口。每一个推门进来的人，都让我的心跳加速。

她迟到了十分钟，进门的时候还在打电话："嗯，我到了，先挂了。"

挂断电话，她看到了我，愣了一下，然后笑了。那个笑容很轻，但很真实。`,dialogue:'"没想到你真的会来。"',speaker:"琳",backgroundDescription:"coffee shop, afternoon, two people meeting for first time, nervous but warm atmosphere",choices:[{id:"1b_5a",text:'"我答应的事，不会反悔。"',sentiment:"bold"},{id:"1b_5b",text:'"其实我也很紧张……"',sentiment:"shy"}],isEnding:!1},yl={narrative:`
我们聊了很久。从下午2点聊到傍晚6点，窗外的阳光从明亮变成金黄，再变成橘红，最后消失在城市的边缘。

她告诉我，她叫琳，是个设计师。那段时间家里出了事，急需用钱，所以才接了那个单。但真到了那一刻，她也很害怕。

"其实，我也很庆幸你没来。"她说，声音很轻，"因为我不知道自己能不能真的做到。"

我们聊工作，聊生活，聊那些不敢对别人说的话。咖啡凉了又热，热了又凉，但我们谁都没有在意。

"你知道吗？"她突然说，眼神很认真，"那天晚上，我一直在想，你会是什么样的人。现在我知道了——你是个好人，只是太孤独了。"`,dialogue:'"要不，我们以后经常见面吧？"',speaker:"琳",backgroundDescription:"coffee shop evening, warm lighting, two people deep in conversation, intimate atmosphere",choices:[{id:"1b_6a",text:'"好，我也想。"',sentiment:"romantic"},{id:"1b_6b",text:'"我……需要考虑一下"',sentiment:"shy"}],isEnding:!1},Xa={narrative:`
从那天起，我们开始定期见面。每周六下午，同一家咖啡店，同一个位置。

我们聊工作，聊生活，聊那些不敢对别人说的话。我慢慢了解到，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。

她也开始了解我。我的工作，我的孤独，我的恐惧。

"你知道吗？"有一天她对我说，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"

那一刻，我突然意识到，也许，我真的可以改变。

"也许，我们可以不只是朋友？"我鼓起勇气问。`,dialogue:'"我……也想。"',speaker:"琳",backgroundDescription:"coffee shop, regular meeting spot, two people comfortable with each other, growing intimacy",choices:[{id:"1b_7a",text:"握住她的手",sentiment:"romantic"},{id:"1b_7b",text:"保持距离，慢慢来",sentiment:"shy"}],isEnding:!1},Za={narrative:`
我握住了她的手。她的手很暖，很软，像是一团火，温暖了我冰冷的心。

她看着我，眼神很复杂。有惊讶，有感动，还有一丝我读不懂的东西。

"你知道吗？"她说，声音很轻，"我一直以为，我们只是朋友。但现在，我发现我错了。"

"什么意思？"我问。

"我也想要更多。"她说，脸红了，"不只是朋友，而是……"

她没有说完，但我明白了。那一刻，我突然觉得，也许，这700块钱，是我这辈子花得最值得的一笔钱。`,dialogue:'"那我们……试试看？"',speaker:"我",backgroundDescription:"coffee shop, two people holding hands, warm atmosphere, relationship defining moment",choices:[{id:"1b_8a",text:'"好，我们试试看。"',sentiment:"romantic"},{id:"1b_8b",text:'"我……还是有点害怕"',sentiment:"shy"},{id:"1b_8c",text:'"我想先坦白一件事"',sentiment:"honest"}],isEnding:!1},Ut={narrative:`
我们开始了第一次正式的约会。

我提前半小时就到了，选了个靠窗的位置，点了她最喜欢的拿铁。咖啡的香气在空气中弥漫，阳光透过百叶窗洒在桌子上，形成斑驳的光影。

她准时出现，穿着简单的白衬衫和牛仔裤，和我想象中的完全不一样。我想象中的她，应该是那种浓妆艳抹、穿着暴露的样子。但眼前的她，干净、简单，甚至有些朴素。

"你好。"她在我对面坐下，把包放在旁边的椅子上，"没想到我们真的会在一起。"

"我也没想到。"我说，声音有点紧张，"我以为你会直接拒绝我。"

"为什么要拒绝？"她笑了，眼睛弯成月牙，"你又不是坏人，只是……有点胆小而已。"`,dialogue:'"其实，我只是想要有人陪。"',speaker:"我",backgroundDescription:"coffee shop, first date, two people at table, warm and romantic atmosphere",choices:[{id:"1b_9a",text:"握住她的手，告诉她我的感受",sentiment:"romantic"},{id:"1b_9b",text:"保持距离，慢慢来",sentiment:"shy"}],isEnding:!1},Pn={narrative:`
我选择了告诉她我的恐惧。

"其实，我还是有点害怕。"我说，声音很轻，"我害怕我会伤害你，我害怕我会让你失望，我害怕……"

"害怕什么？"她问，眼神很温柔。

"害怕我会再次逃跑。"我说，声音更轻了，"就像那天晚上一样。"

她看着我，眼神很复杂。有理解，有同情，还有一丝我读不懂的东西。

"那我们就慢慢来。"她说，握住我的手，"不用着急，我们可以慢慢了解彼此。"`,dialogue:'"谢谢你理解我。"',speaker:"我",backgroundDescription:"coffee shop, two people talking, understanding and support, warm atmosphere",choices:[{id:"1b_9c",text:"拥抱她，告诉她我会努力",sentiment:"romantic"},{id:"1b_9d",text:"保持距离，只做朋友",sentiment:"neutral"}],isEnding:!1},Dn={narrative:`
我选择了向她坦白一切。

"其实，我想先坦白一件事。"我说，声音很轻，"那天晚上，我到了门口，但我逃跑了。我删除了你的联系方式，我试图忘记你，但我做不到。"

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你跟踪我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在观察你。"她说，"在公司里，在电梯里，在食堂里。我一直在想，你会不会主动和我说话。"`,dialogue:'"所以，我们都在等对方先开口？"',speaker:"我",backgroundDescription:"coffee shop, full confession, two people understanding each other, emotional moment",choices:[{id:"1b_9e",text:'"那现在，我们可以重新开始吗？"',sentiment:"bold"},{id:"1b_9f",text:'"我……还是有点害怕"',sentiment:"shy"}],isEnding:!1},Rr={narrative:`
从那天起，我们开始正式交往。

我们每周六下午都会见面，有时候是咖啡店，有时候是公园，有时候是电影院。我们聊工作，聊生活，聊那些不敢对别人说的话。

我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她也开始了解我。我的工作，我的孤独，我的恐惧。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。"

那一刻，我突然意识到，也许，我真的可以改变。也许，我真的可以幸福。`,dialogue:'"谢谢你，琳。"',speaker:"我",backgroundDescription:"park walk, two people in love, growing relationship, warm sunset colors",choices:[{id:"1b_10a",text:"【结局】",sentiment:"neutral"}],isEnding:!1},_l={narrative:`
我选择了保持距离，只做朋友。

"我明白了。"她说，声音很轻，"也许，朋友的关系更适合我们。"

我们继续见面，继续聊天，但再也没有越过那条线。我们成了最好的朋友，无话不谈，互相支持。

有时候，我会想，如果那天我更勇敢一点，如果我更早说出真相，现在会是什么样子？

但我知道，有些关系，不是爱情，却同样珍贵。`,dialogue:'"谢谢你，琳。你是我最好的朋友。"',speaker:"我",backgroundDescription:"coffee shop, two friends, warm friendship, peaceful atmosphere",choices:[{id:"1b_10b",text:"【结局】",sentiment:"neutral"}],isEnding:!1},El={narrative:`
我选择了继续观察。我开始每天查看她的朋友圈，开始留意她的动态，开始试图从这些碎片中拼凑出她的生活。

我发现她喜欢画画，喜欢看日落，喜欢在深夜听音乐。我发现她工作很努力，经常加班到很晚。我发现她似乎很孤独，朋友圈里很少有其他人的照片。

我开始想象，如果那天我敲门了，现在会是什么样子？我们会成为朋友吗？还是只是陌生人？

两个月后，我在公司楼下看到了一个熟悉的身影。米色风衣，茉莉花香。

是她。

我的心跳瞬间加速。这是机会吗？还是又一次错过？`,dialogue:"（不能再错过了……）",speaker:"内心独白",backgroundDescription:"company building entrance, morning, protagonist seeing familiar figure, opportunity dawning",choices:[{id:"1c_4a",text:"鼓起勇气，主动上前",sentiment:"bold"},{id:"1c_4b",text:"还是不敢，继续观察",sentiment:"shy"}],isEnding:!1},yh={narrative:`
我鼓起勇气，给她发了条消息："你好，我是那天晚上的……我想为那天的事道歉。"

发送。

我盯着屏幕，心跳加速。她会回吗？她会骂我吗？还是直接拉黑我？

十分钟后，她回了："没事的，我理解。你还好吗？"

我愣住了。她不仅没有生气，还在关心我？

"我……还好。你呢？"我回复。

"我也还好。对了，你也在XX大厦上班吗？我好像见过你。"

我们开始聊天。从简单的问候，到工作，到生活，到那些不敢对别人说的话。`,dialogue:'"要不，我们见个面？就当……交个朋友？"',speaker:"琳",backgroundDescription:"phone chat interface, two people chatting, warm conversation, building connection",choices:[{id:"1c_4c",text:'"好，什么时候方便？"',sentiment:"bold"},{id:"1c_4d",text:'"我……还是算了吧"',sentiment:"shy"}],isEnding:!1},_h={narrative:`
我们约在公司楼下的咖啡店。我提前到了，选了个安静的角落。咖啡店的音乐很轻，是那种让人放松的爵士乐。

我点了两杯拿铁，然后开始等待。时间过得很慢，每一秒都像是在考验我的耐心。

她准时出现，穿着简单的白衬衫和牛仔裤，和我想象中的完全不一样。我想象中的她，应该是那种浓妆艳抹、穿着暴露的样子。但眼前的她，干净、简单，甚至有些朴素。

"你好。"她在我对面坐下，把包放在旁边的椅子上，"没想到我们真的会见面。"

"我也没想到。"我说，声音有点紧张，"我以为你会直接拉黑我。"

"为什么要拉黑？"她笑了，眼睛弯成月牙，"你又不是坏人，只是……有点胆小而已。"`,dialogue:'"其实，我只是想要有人陪。"',speaker:"我",backgroundDescription:"coffee shop, afternoon, two people meeting for first time, warm and understanding atmosphere",choices:[{id:"1c_5a",text:"继续深入聊下去",sentiment:"romantic"},{id:"1c_5b",text:"保持距离，只做朋友",sentiment:"neutral"}],isEnding:!1},Eh={narrative:`
我们继续聊下去。从下午2点聊到傍晚6点，窗外的阳光从明亮变成金黄，再变成橘红，最后消失在城市的边缘。

她告诉我，她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她告诉我，她画的第一幅画是给妈妈的生日礼物，那时候她还在上小学，画得很丑，但妈妈却把它裱起来，挂在客厅里。她最喜欢的日落是在海边看到的，那时候她刚失恋，一个人坐在沙滩上，看着太阳慢慢沉入海平面，眼泪和海水混在一起。

我也开始告诉她我的故事。我的工作，我的孤独，我的恐惧。那些我从未对任何人说过的话，在她面前，却变得那么容易说出口。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是孤独，你只是太害怕了。害怕被拒绝，害怕被伤害，害怕暴露真实的自己。"`,dialogue:'"也许，我们可以不只是朋友？"',speaker:"我",backgroundDescription:"coffee shop evening, warm lighting, two people deep in conversation, growing intimacy",choices:[{id:"1c_6a",text:'"我……也想。"',sentiment:"romantic"},{id:"1c_6b",text:'"我……还是有点害怕"',sentiment:"shy"}],isEnding:!1},Ja={narrative:`
从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。

公园里的路灯已经亮了，昏黄的光洒在我们身上，把影子拉得很长。我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。

我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她也开始了解我。我的工作，我的孤独，我的恐惧。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。"

那一刻，我突然意识到，也许，我真的可以改变。`,dialogue:'"也许，我们可以不只是朋友？"',speaker:"琳",backgroundDescription:"evening walk in park, two people walking side by side, sunset colors, peaceful atmosphere",choices:[{id:"1c_7a",text:'"我想……不只是朋友"',sentiment:"romantic"},{id:"1c_7b",text:'"好，朋友也很好"',sentiment:"neutral"}],isEnding:!1},qa={narrative:`八章C-1：最终选择】
我握住了她的手。她的手很暖，很软，像是一团火，温暖了我冰冷的心。

她看着我，眼神很复杂。有惊讶，有感动，还有一丝我读不懂的东西。

"你知道吗？"她说，声音很轻，"我一直以为，我们只是朋友。但现在，我发现我错了。"

"什么意思？"我问。

"我也想要更多。"她说，脸红了，"不只是朋友，而是……"

她没有说完，但我明白了。那一刻，我突然觉得，也许，这700块钱，是我这辈子花得最值得的一笔钱。`,dialogue:'"那我们……试试看？"',speaker:"我",backgroundDescription:"park bench at night, two people holding hands, warm atmosphere, relationship defining moment",choices:[{id:"1c_8a",text:'"好，我们试试看。"',sentiment:"romantic"},{id:"1c_8b",text:'"我……还是有点害怕"',sentiment:"shy"},{id:"1c_8c",text:'"我想先为那700块钱道歉"',sentiment:"honest"}],isEnding:!1},wh={narrative:`九章C-1：新的开始】
我们开始了新的关系。

从那天起，我们开始经常见面。有时候是咖啡店，有时候是公司食堂，有时候是下班后的散步。

公园里的路灯已经亮了，昏黄的光洒在我们身上，把影子拉得很长。我们并排走着，中间隔着一点距离，但那种距离让人感到安全，也让人感到温暖。

我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她也开始了解我。我的工作，我的孤独，我的恐惧。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。"`,dialogue:'"也许，我们可以不只是朋友？"',speaker:"琳",backgroundDescription:"evening walk in park, two people in new relationship, warm sunset colors, peaceful",choices:[{id:"1c_9a",text:'"我想……不只是朋友"',sentiment:"romantic"},{id:"1c_9b",text:'"好，朋友也很好"',sentiment:"neutral"}],isEnding:!1},kh={narrative:`九章C-2：再次的恐惧】
我选择了告诉她我的恐惧。

"其实，我还是有点害怕。"我说，声音很轻，"我害怕我会伤害你，我害怕我会让你失望，我害怕……"

"害怕什么？"她问，眼神很温柔。

"害怕我会再次逃跑。"我说，声音更轻了，"就像那天晚上一样。"

她看着我，眼神很复杂。有理解，有同情，还有一丝我读不懂的东西。

"那我们就慢慢来。"她说，握住我的手，"不用着急，我们可以慢慢了解彼此。"`,dialogue:'"谢谢你理解我。"',speaker:"我",backgroundDescription:"coffee shop, two people talking, understanding and support, warm atmosphere",choices:[{id:"1c_9c",text:"拥抱她，告诉她我会努力",sentiment:"romantic"},{id:"1c_9d",text:"保持距离，只做朋友",sentiment:"neutral"}],isEnding:!1},xh={narrative:`九章C-3：700元的道歉】
我选择了向她坦白那700块钱的事。

"其实，我想先为那700块钱道歉。"我说，声音很轻，"那天晚上，我到了门口，但我逃跑了。我删除了你的联系方式，我试图忘记你，但我做不到。"

她安静地听完，没有说话。空气很安静，安静到我能听到自己的心跳声。

"我明白了。"她终于开口，声音很轻，"你跟踪我，是因为你想了解我，但又不敢直接接近我，对吗？"

我点了点头，不敢看她。

"其实，我也一直在观察你。"她说，"在公司里，在电梯里，在食堂里。我一直在想，你会不会主动和我说话。"`,dialogue:'"所以，我们都在等对方先开口？"',speaker:"我",backgroundDescription:"coffee shop, full confession about 700 yuan, two people understanding each other, emotional",choices:[{id:"1c_9e",text:'"那现在，我们可以重新开始吗？"',sentiment:"bold"},{id:"1c_9f",text:'"我……还是有点害怕"',sentiment:"shy"}],isEnding:!1},wl={narrative:`十章C-1：关系的深化】
从那天起，我们开始正式交往。

我们每周六下午都会见面，有时候是咖啡店，有时候是公园，有时候是电影院。我们聊工作，聊生活，聊那些不敢对别人说的话。

我慢慢了解到，她叫琳，是个设计师。她喜欢画画，喜欢看日落，喜欢在深夜听音乐。她也开始了解我。我的工作，我的孤独，我的恐惧。

"你知道吗？"有一天她对我说，声音很轻，但很坚定，"你其实不是懦弱，你只是太善良了。善良到不敢伤害任何人，包括自己。"

那一刻，我突然意识到，也许，我真的可以改变。也许，我真的可以幸福。`,dialogue:'"谢谢你，琳。"',speaker:"我",backgroundDescription:"park walk, two people in love, deepening relationship, warm sunset colors",choices:[{id:"1c_10a",text:"【结局】",sentiment:"neutral"}],isEnding:!1},kl={narrative:`十章C-2：友谊之路】
我选择了保持距离，只做朋友。

"我明白了。"她说，声音很轻，"也许，朋友的关系更适合我们。"

我们继续见面，继续聊天，但再也没有越过那条线。我们成了最好的朋友，无话不谈，互相支持。

有时候，我会想，如果那天我更勇敢一点，如果我更早说出真相，现在会是什么样子？

但我知道，有些关系，不是爱情，却同样珍贵。`,dialogue:'"谢谢你，琳。你是我最好的朋友。"',speaker:"我",backgroundDescription:"coffee shop, two friends, warm friendship, peaceful atmosphere",choices:[{id:"1c_10b",text:"【结局】",sentiment:"neutral"}],isEnding:!1},eu={narrative:`
公园的长椅上，我把那一夜所有的恐惧、羞耻、自我怀疑全盘托出。每一个字都像是从心底挖出来的，带着血，带着痛。

"我逃跑不是因为嫌弃你，是因为我嫌弃我自己。我怕进了那扇门，就再也回不去了。"

琳安静地听完，眼眶红了。月光洒在她脸上，把眼泪照得闪闪发光。

"笨蛋。"她突然笑了，眼泪却掉了下来，"那天你跑掉的时候，我反而松了口气。因为我也是第一次接那种单，吓死了。"

"什么？"我愣住了。

"我那阵子家里出事，急需用钱。但真到了那一刻，我也不知道自己能不能做到……"她握住我的手，手心很暖，"所以谢谢你，那天没敲门。"

月光下，我们的手紧紧相握。那一刻，我突然觉得，也许，这700块钱，是我这辈子花得最值得的一笔钱。

"那这700块……"

"就当我们的定情信物吧。"她笑着说，眼泪还在掉，"不过下次约会，你得请我吃好一点的。"`,dialogue:'"我们回家吧。"',speaker:"琳",backgroundDescription:"park bench under moonlight, warm embrace, romantic ending, cherry blossoms",choices:[],isEnding:!0,endingType:"good"},tu={narrative:`
"我明白了。"琳点点头，声音很轻，"那天的事，我们都当它没发生过吧。"

"真的可以吗？"我问，声音里带着一丝不确定。

"为什么不可以？"她笑得很轻松，但眼神很认真，"人生那么长，谁没有几件想忘记的事呢。"

后来，我们成了很好的同事，很好的朋友。偶尔一起加班，一起吐槽公司的奇葩客户，一起在深夜的便利店买打折便当。

那700块钱，最后变成了我们的梗——每次我请客，她都会说："行啊，反正你还欠我700。"然后我们就会笑，笑得很大声，像是要把所有的尴尬和羞耻都笑掉。

有些关系，不是爱情，却同样珍贵。就像那700块钱，买来的不是交易，而是一段真正的友谊。`,dialogue:'"下次一起吃饭，你请客。"',speaker:"琳",backgroundDescription:"office rooftop at sunset, two friends laughing, warm friendship ending",choices:[],isEnding:!0,endingType:"neutral"},xl={narrative:`
"对不起，我不能接受这样的开始。"琳站起身，眼神里是深深的失望。那种失望，比愤怒更让人难受。

"我本来以为……算了，不重要了。"她的声音很轻，但每个字都像是刀子，割在我心上。

她转身离开，背影消失在夜色里。我想追上去，但腿像灌了铅一样沉重。我只能站在原地，看着她走远，直到再也看不见。

后来我换了工作，离开了那栋楼。听说她也跳槽去了外地。

那700块钱，成了我心里永远的刺。每次路过那家酒店，我都会想：如果那天我更勇敢一点，如果我更早说出真相……

但人生没有如果。

我们错过了。就像两条平行线，永远不会有交集。`,dialogue:"（再见了……）",speaker:"内心独白",backgroundDescription:"empty street at night, lonely figure, cold blue tones, melancholic ending",choices:[],isEnding:!0,endingType:"bad"},nu={narrative:`
"我不能说我完全原谅你。"琳看着我，眼神很认真，"但我理解你当时的感受。"

"我……"我想说什么，但话到嘴边又咽了回去。

"嘘。"她伸出手指抵住我的嘴唇，动作很轻，但很坚定，"过去的事就让它过去吧。如果你真的想补偿我，那就……"

"请我吃一个月的早餐，怎么样？"她笑了，那笑容很轻，但很真实，"不许迟到，不许偷懒。"

"成交！"我说，声音比我想象的要坚定。

从那天起，每天早上7点，我们会在便利店门口碰面。她喝豆浆配包子，我喝咖啡配三明治。有时候我们会聊几句，有时候只是安静地坐着，看着窗外的阳光慢慢亮起来。

一个月后，她说："早餐可以停了，但晚餐得继续。"

我说："那就一辈子吧。"

她脸红了，但没说话，只是点了点头。`,dialogue:'"笨蛋，谁说要一辈子了……"',speaker:"琳（脸红）",backgroundDescription:"morning convenience store, two people having breakfast, warm sunlight, hopeful ending",choices:[],isEnding:!0,endingType:"good"},Sh={narrative:`
我选择了沉默。她也没有再问。

从那天起，我们偶尔还会在电梯里遇到，在食堂擦肩而过。我们会点头，会说"你好"，但仅此而已。就像两条平行线，永远不会有交集。

她交了男朋友，听说是另一个部门的主管。我在交友软件上划来划去，却再也找不到能让我心动的人。

那700块钱，最终什么都没有买到。没有陪伴，没有理解，没有改变。什么都没有。

我们成了最熟悉的陌生人。有时候我会想，如果那天我敲门了，现在会是什么样子？但人生没有如果。

就这样吧。`,dialogue:"（就这样吧……）",speaker:"内心独白",backgroundDescription:"crowded elevator, two people standing far apart, cold atmosphere, neutral ending",choices:[],isEnding:!0,endingType:"neutral"};class Ch{constructor(){co(this,"state",{affection:0,courage:0,honesty:0,path:[],depth:0,stage:0,branch:"main",hasConfessed:!1,specialEvents:[],relationshipType:"stranger",intimacy:0})}calculateIntimacy(){const{affection:t,courage:n,honesty:r,hasConfessed:i,relationshipType:l,specialEvents:s,depth:o}=this.state;let a=0;t>=0?a=Math.pow(t/10,.7)*35:a=Math.max(0,(t+10)*1.5);const f=n*1.2,g=r*1.3,m=n>=5&&r>=5?Math.min(n,r)*.5:0,p=Math.min(30,f+g+m);let _=0;if(i){const S=(n+r)/2;_=Math.min(15,S*1.5)}let E=0;switch(l){case"romantic":E=t>=3?20:t>=0?15:10;break;case"friend":E=12;break;case"complicated":E=6;break;case"stranger":E=0;break}const k=["normal_meet","coffee_date","coffee_talk","1a_first_meet","1b_apology","1c_first_message","1a_building_trust","1b_regular_meet","1c_deep_conversation","1a_confront","1b_deep_chat","1c_meeting"],I=s.filter(S=>k.includes(S)).length;let c=0;for(let S=0;S<Math.min(I,5);S++)c+=3-S*.5;c=Math.min(12,c);const u=["1a_stalking","1b_1","1a_escape"],d=s.filter(S=>u.includes(S)).length,v=Math.min(15,d*4);let C=0;o<=5?C=o*1.2:C=6+(o-5)*.8,C=Math.min(10,C);let x=a+p+_+E+c-v+C;return t<-7?x*=.5:t<-3&&(x*=.75),t>=5&&(n<3||r<3)&&(x*=.85),l==="romantic"&&t<2&&(x*=.9),x=Math.max(0,Math.min(100,Math.round(x))),x}async startNewGame(){return this.state={affection:0,courage:0,honesty:0,path:[],depth:0,stage:0,branch:"main",hasConfessed:!1,specialEvents:[],relationshipType:"stranger",intimacy:0},Dr}async nextTurn(t,n){return await new Promise(r=>setTimeout(r,800)),this.state.path.push(n),this.state.depth++,this.updateState(n),this.getNextSceneByPath()}async nextTurnWithChoice(t,n){return this.nextTurn(t,n.id)}updateState(t){t==="p1"?(this.state.courage-=2,this.state.honesty-=1):t==="p2"?(this.state.honesty+=3,this.state.affection+=2):t==="p3"&&(this.state.honesty+=1,this.state.affection-=1),t==="1a_2"?(this.state.courage-=1,this.state.affection-=1,this.state.specialEvents.push("1a_deep_work")):t==="1a_3"?(this.state.courage+=1,this.state.specialEvents.push("1a_try_change")):t==="1a_2a"?(this.state.courage-=2,this.state.affection-=2):t==="1a_2b"?(this.state.courage+=2,this.state.specialEvents.push("1a_try_change")):t==="1a_3a"?(this.state.courage+=3,this.state.affection+=2,this.state.specialEvents.push("1a_confront")):t==="1a_3b"?this.state.courage-=1:t==="1a_4"?(this.state.courage+=3,this.state.affection+=2,this.state.specialEvents.push("1a_confront")):t==="1a_5"?(this.state.courage-=1,this.state.specialEvents.push("1a_observe")):t==="1a_6"?(this.state.courage+=2,this.state.affection+=3,this.state.specialEvents.push("1a_first_meet")):t==="1a_7"?(this.state.courage-=1,this.state.affection-=1):t==="1a_6a"?(this.state.affection+=3,this.state.courage+=2,this.state.specialEvents.push("1a_building_trust")):t==="1a_6b"?(this.state.affection+=1,this.state.courage-=1):t==="1a_6c"?(this.state.affection+=4,this.state.courage+=3,this.state.relationshipType="romantic"):t==="1a_6d"?(this.state.affection+=2,this.state.relationshipType="friend"):t==="1a_7a"?(this.state.affection+=4,this.state.courage+=3,this.state.relationshipType="romantic"):t==="1a_7b"?(this.state.affection+=2,this.state.relationshipType="friend"):t==="1a_7c"?(this.state.courage+=2,this.state.honesty+=2,this.state.affection+=1):t==="1a_7d"?(this.state.courage-=3,this.state.affection-=3):t==="1a_8a"?(this.state.affection+=3,this.state.courage+=2,this.state.relationshipType="romantic"):t==="1a_8b"?(this.state.affection+=1,this.state.relationshipType="friend"):t==="1a_8c"?(this.state.affection-=2,this.state.relationshipType="stranger"):t==="1a_8"?(this.state.courage+=1,this.state.affection+=1,this.state.specialEvents.push("1a_elevator_talk")):t==="1a_9"?(this.state.courage-=2,this.state.affection-=2,this.state.specialEvents.push("1a_stalking")):t==="1a_8a"?(this.state.courage+=2,this.state.affection+=2,this.state.specialEvents.push("normal_meet")):t==="1a_8b"?this.state.courage-=1:t==="1a_9a"?(this.state.courage+=2,this.state.honesty+=2,this.state.affection+=1):t==="1a_9b"&&(this.state.courage-=3,this.state.affection-=3),t==="1b_1"?(this.state.branch="cold",this.state.affection-=3,this.state.specialEvents.push("1b_1")):t==="1b_2"?(this.state.honesty+=2,this.state.affection+=2,this.state.specialEvents.push("1b_2")):t==="1b_3"&&(this.state.courage+=3,this.state.affection+=3,this.state.specialEvents.push("coffee_date")),t==="1b_1a"?(this.state.courage+=2,this.state.honesty+=2,this.state.affection+=1,this.state.specialEvents.push("1b_apology")):t==="1b_1b"?(this.state.courage-=2,this.state.affection-=2,this.state.specialEvents.push("1b_regret")):t==="1b_1aa"?(this.state.courage+=3,this.state.affection+=2,this.state.specialEvents.push("1b_apology")):t==="1b_1ab"?this.state.courage-=1:t==="1b_1ac"?(this.state.courage+=2,this.state.affection+=3,this.state.specialEvents.push("normal_meet")):t==="1b_1ad"?(this.state.courage-=1,this.state.affection-=1):t==="1b_2a"?(this.state.courage+=2,this.state.affection+=2,this.state.specialEvents.push("1b_plan_meet")):t==="1b_2b"?(this.state.courage-=1,this.state.affection-=1,this.state.specialEvents.push("1b_deep_chat")):t==="1b_2aa"?(this.state.affection+=3,this.state.courage+=2,this.state.relationshipType="romantic"):t==="1b_2ab"?(this.state.affection+=2,this.state.relationshipType="friend"):t==="1b_2ac"?(this.state.honesty+=2,this.state.affection+=2,this.state.specialEvents.push("coffee_talk")):t==="1b_2ad"?this.state.affection+=1:t==="1b_3a"?(this.state.honesty+=2,this.state.affection+=2,this.state.specialEvents.push("coffee_talk")):t==="1b_3b"?this.state.affection+=1:t==="1b_3c"?(this.state.affection+=3,this.state.courage+=2,this.state.specialEvents.push("1b_regular_meet")):t==="1b_3d"?(this.state.affection+=1,this.state.courage-=1):t==="1b_3ca"?(this.state.affection+=4,this.state.courage+=3,this.state.relationshipType="romantic"):t==="1b_3cb"?(this.state.affection+=2,this.state.relationshipType="friend"):t==="1b_7a"?(this.state.affection+=4,this.state.courage+=3,this.state.relationshipType="romantic"):t==="1b_7b"?(this.state.affection+=2,this.state.relationshipType="friend"):t==="1b_8a"?(this.state.affection+=5,this.state.courage+=3,this.state.relationshipType="romantic"):t==="1b_8b"&&(this.state.affection+=2,this.state.relationshipType="friend"),t==="1c_2"?(this.state.courage+=2,this.state.honesty+=2,this.state.specialEvents.push("1c_first_message")):t==="1c_3"?(this.state.courage-=1,this.state.specialEvents.push("1c_stalking")):t==="1c_2a"?(this.state.courage+=2,this.state.affection+=2,this.state.specialEvents.push("normal_meet")):t==="1c_2b"?(this.state.courage-=1,this.state.affection-=1):t==="1c_3a"?(this.state.courage+=3,this.state.affection+=2,this.state.specialEvents.push("1b_apology")):t==="1c_3b"?this.state.courage-=1:t==="1c_4"?(this.state.courage+=2,this.state.affection+=2,this.state.specialEvents.push("normal_meet")):t==="1c_5"?(this.state.courage-=1,this.state.affection-=1):t==="1c_6"?(this.state.affection+=3,this.state.courage+=2,this.state.specialEvents.push("1c_deep_conversation")):t==="1c_7"?(this.state.affection+=1,this.state.specialEvents.push("1c_friendship")):t==="1c_6a"?(this.state.affection+=4,this.state.courage+=3,this.state.relationshipType="romantic"):t==="1c_6b"?(this.state.affection+=2,this.state.relationshipType="friend"):t==="1c_7a"?(this.state.affection+=4,this.state.courage+=3,this.state.relationshipType="romantic"):t==="1c_7b"?(this.state.affection+=2,this.state.relationshipType="friend"):t==="1c_8a"?(this.state.affection+=5,this.state.courage+=3,this.state.relationshipType="romantic"):t==="1c_8b"&&(this.state.affection+=2,this.state.relationshipType="friend"),t==="2_1"?this.state.affection+=1:t==="2_2"?(this.state.courage+=3,this.state.honesty+=3,this.state.hasConfessed=!0):t==="2_3"&&(this.state.affection-=2,this.state.relationshipType="stranger"),t==="3_1"?(this.state.affection+=2,this.state.relationshipType="romantic"):t==="3_2"?(this.state.affection-=1,this.state.relationshipType="stranger"):t==="3_3"&&(this.state.honesty+=3,this.state.courage+=2,this.state.affection+=2,this.state.hasConfessed=!0),t==="2_1a"?(this.state.courage+=2,this.state.honesty+=2,this.state.affection+=1):t==="2_1b"?this.state.courage-=1:t==="2_2a"?(this.state.courage+=2,this.state.affection+=3,this.state.specialEvents.push("normal_meet")):t==="2_2b"?(this.state.courage-=1,this.state.affection-=1):t==="2_3a"?(this.state.courage+=3,this.state.affection+=2,this.state.specialEvents.push("normal_meet")):t==="2_3b"?(this.state.courage-=2,this.state.affection-=2):t==="3_1a"?(this.state.affection+=3,this.state.courage+=2,this.state.relationshipType="romantic"):t==="3_1b"?(this.state.affection+=1,this.state.courage-=1):t==="3_2a"?(this.state.courage+=2,this.state.affection+=1):t==="3_2b"?(this.state.courage-=2,this.state.affection-=2):t==="3_3a"?(this.state.affection+=3,this.state.courage+=2,this.state.relationshipType="romantic"):t==="3_3b"&&(this.state.affection+=1,this.state.relationshipType="friend"),this.state.intimacy=this.calculateIntimacy()}getNextSceneByPath(){const t=this.state.path,n=this.state.depth;if(n===0)return Dr;if(n===1){if(t[0]==="p1")return wa;if(t[0]==="p2")return Ta;if(t[0]==="p3")return ja}return this.matchSceneByPath(t,n)}matchSceneByPath(t,n){return t.join("->"),t[0]==="p1"?this.match1ABranch(t,n):t[0]==="p2"?this.match1BBranch(t,n):t[0]==="p3"?this.match1CBranch(t,n):n>10?this.getEnding():Dr}match1ABranch(t,n){t.join("->");const r=t[t.length-1];if(n===2&&t[1]==="1a_1")return ka;if(n===3){if(r==="1a_2")return xa;if(r==="1a_3")return Sa}if(n===4){if(r==="1a_2a")return dh;if(r==="1a_2b")return mh;if(r==="1a_3a")return ll;if(r==="1a_3b")return al;if(r==="1a_4")return Ca;if(r==="1a_5")return al}if(n===5){if(r==="1a_4a")return ph;if(r==="1a_4b")return hh;if(r==="1a_4c")return Ha;if(r==="1a_4d")return dl;if(r==="1a_6")return sl;if(r==="1a_7")return dl;if(r==="1a_8")return Na;if(r==="1a_9")return ul}if(n===6){if(r==="1a_5aa")return $a;if(r==="1a_5ab")return ml;if(r==="1a_5ba")return Ha;if(r==="1a_5bb")return dl;if(r==="1a_5a")return $a;if(r==="1a_5b"||r==="1a_5c")return pl;if(r==="1a_5d")return Va;if(r==="1a_6")return sl}if(n===7){if(r==="1a_6a"||r==="1a_6b")return ol;if(r==="1a_6c")return hl;if(r==="1a_6d")return Va;if(r==="1a_7a"||r==="1a_7b")return hl;if(r==="1a_7c")return Lr;if(r==="1a_7d")return ml;if(r==="1a_8a")return pl;if(r==="1a_8b")return ul;if(r==="1a_9a")return Lr;if(r==="1a_9b")return ml}if(n===8){if(r==="1a_7a"||r==="1a_7b")return Lr;if(r==="1a_8a"||r==="1a_8b")return Wa;if(r==="1a_8c")return Qa;if(r==="1a_8d")return gh}if(n===9){if(r==="1a_9a")return Ga;if(r==="1a_9b")return Qa;if(r==="1a_9c")return gl;if(r==="1a_9c2")return vl;if(r==="1a_9d")return vh;if(r==="1a_9e")return Ga}return n===10&&(r==="1a_10a"||r==="1a_10b"||r==="1a_10c"||r==="1a_10d")?this.getEnding():n>10?this.getEnding():this.getDefaultNextScene(t,n)}match1BBranch(t,n){const r=t.join("->");if(n===2){if(t[1]==="1b_1")return Pa;if(t[1]==="1b_2")return La;if(t[1]==="1b_3")return Aa}if(n===3){if(r.includes("1b_1a"))return Nn;if(r.includes("1b_1b"))return Da;if(r.includes("1b_2a"))return Ra;if(r.includes("1b_2b"))return za;if(r.includes("1b_3a"))return Oa;if(r.includes("1b_3b"))return pe}if(n===4){if(r.includes("1b_1aa")||r.includes("1b_1ab"))return zr;if(r.includes("1b_1ac"))return pe;if(r.includes("1b_1ad"))return zr;if(r.includes("1b_2aa"))return Ya;if(r.includes("1b_2ab"))return Ka;if(r.includes("1b_2ac"))return yl;if(r.includes("1b_2ad"))return pe;if(r.includes("1b_3c"))return Ma;if(r.includes("1b_3d"))return pe;if(r.includes("2_1"))return Zp;if(r.includes("2_2"))return Jp;if(r.includes("2_3"))return qp;if(r.includes("3_1"))return eh;if(r.includes("3_2"))return th;if(r.includes("3_3"))return nh}if(n===5){if(r.includes("1b_4a"))return Nn;if(r.includes("1b_4b"))return zr;if(r.includes("1b_4c"))return Ya;if(r.includes("1b_4d"))return Ka;if(r.includes("1b_5a")||r.includes("1b_5b"))return yl;if(r.includes("2_1a"))return rh;if(r.includes("2_1b"))return ih;if(r.includes("2_2a"))return lh;if(r.includes("2_2b"))return ba;if(r.includes("2_3a"))return Ua;if(r.includes("2_3b"))return Tn;if(r.includes("3_1a"))return sh;if(r.includes("3_1b"))return oh;if(r.includes("3_2a"))return ah;if(r.includes("3_2b"))return uh;if(r.includes("3_3a"))return ch;if(r.includes("3_3b"))return fh}if(n===6){if(r.includes("1b_6a")||r.includes("1b_6b"))return Xa;if(r.includes("2_1aa"))return Ut;if(r.includes("2_1ab"))return Pn;if(r.includes("2_1ba"))return Ua;if(r.includes("2_1bb"))return Tn;if(r.includes("2_2aa"))return Ut;if(r.includes("2_2ab"))return Pn;if(r.includes("2_2ba"))return Dn;if(r.includes("2_2bb"))return Tn;if(r.includes("2_3aa"))return Ut;if(r.includes("2_3ab"))return ba;if(r.includes("2_3ba"))return gl;if(r.includes("2_3bb"))return vl;if(r.includes("3_1aa"))return Ut;if(r.includes("3_1ab"))return Pn;if(r.includes("3_1ba"))return Dn;if(r.includes("3_1bb"))return Tn;if(r.includes("3_2aa"))return Dn;if(r.includes("3_2ab"))return Tn;if(r.includes("3_2ba"))return gl;if(r.includes("3_2bb"))return vl;if(r.includes("3_3aa"))return Ut;if(r.includes("3_3ab"))return Pn;if(r.includes("3_3ba"))return Dn;if(r.includes("3_3bb"))return _l}if(n===7&&(r.includes("1b_7a")||r.includes("1b_7b")))return Za;if(n===8){if(r.includes("1b_8a"))return Ut;if(r.includes("1b_8b"))return Pn;if(r.includes("1b_8c"))return Dn}if(n===9){if(r.includes("1b_9a")||r.includes("1b_9b")||r.includes("1b_9c"))return Rr;if(r.includes("1b_9d"))return _l;if(r.includes("1b_9e"))return Rr;if(r.includes("1b_9f"))return _l}return n===10&&(r.includes("1b_10a")||r.includes("1b_10b"))?this.getEnding():n>10?this.getEnding():this.getDefaultNextScene(t,n)}match1CBranch(t,n){const r=t.join("->");if(n===2&&t[1]==="1c_1")return cl;if(n===3){if(r.includes("1c_2"))return Ia;if(r.includes("1c_3"))return Fa}if(n===4){if(r.includes("1c_2a"))return fl;if(r.includes("1c_2b"))return El;if(r.includes("1c_3a"))return Nn;if(r.includes("1c_3b"))return El;if(r.includes("1c_4"))return fl;if(r.includes("1c_5"))return El}if(n===5){if(r.includes("1c_4c"))return _h;if(r.includes("1c_4d"))return yh;if(r.includes("1c_5a"))return Eh;if(r.includes("1c_5b"))return Ba}if(n===6&&(r.includes("1c_6a")||r.includes("1c_6b")))return Ja;if(n===7&&(r.includes("1c_7a")||r.includes("1c_7b")))return qa;if(n===8){if(r.includes("1c_8a"))return wh;if(r.includes("1c_8b"))return kh;if(r.includes("1c_8c"))return xh}if(n===9){if(r.includes("1c_9a"))return wl;if(r.includes("1c_9b"))return kl;if(r.includes("1c_9c"))return wl;if(r.includes("1c_9d"))return kl;if(r.includes("1c_9e"))return wl;if(r.includes("1c_9f"))return kl}return n===10&&(r.includes("1c_10a")||r.includes("1c_10b"))?this.getEnding():n>10?this.getEnding():this.getDefaultNextScene(t,n)}getSceneByPath(t,n){return this.getDefaultNextScene([t],n)}getDefaultNextScene(t,n){return n>10?this.getEnding():pe}getNextScene(){const t=this.state.stage,n=this.state.branch;if(t===1)return n==="cold"?wa:n==="friend"?Ta:ja;if(n==="cold"){if(t===2)return this.state.specialEvents.includes("1a_deep_work")?xa:this.state.specialEvents.includes("1a_try_change")?Sa:ka;if(t===3)return this.state.specialEvents.includes("1a_try_change"),ll;if(t===4)return this.state.specialEvents.includes("1a_confront")?Ca:this.state.specialEvents.includes("1a_observe")?al:pe;if(t===5)return this.state.specialEvents.includes("1a_first_meet")?sl:this.state.specialEvents.includes("1a_elevator_talk")?Na:this.state.specialEvents.includes("1a_stalking")?ul:this.state.specialEvents.includes("normal_meet")?Qe:pe;if(t===6)return this.state.specialEvents.includes("1a_building_trust")?ol:this.state.specialEvents.includes("had_lunch")?pe:(this.state.specialEvents.push("had_lunch"),Qe);if(t===7)return this.state.specialEvents.includes("had_lunch")?this.getEnding():(this.state.specialEvents.push("had_lunch"),Qe);if(t>=8)return this.getEnding()}if(n==="friend"){if(t===2){if(this.state.specialEvents.includes("1b_1"))return Pa;if(this.state.specialEvents.includes("1b_2"))return La;if(this.state.specialEvents.includes("coffee_date"))return Aa}if(t===3)return this.state.specialEvents.includes("1b_regret")?Da:this.state.specialEvents.includes("1b_apology")?Nn:this.state.specialEvents.includes("1b_deep_chat")?za:this.state.specialEvents.includes("1b_plan_meet")?Ra:this.state.specialEvents.includes("coffee_talk")?Oa:pe;if(t===4)return this.state.specialEvents.includes("1b_regular_meet")?Ma:this.state.specialEvents.includes("normal_meet")?Qe:this.state.specialEvents.includes("had_lunch")?pe:(this.state.specialEvents.push("had_lunch"),Qe);if(t===5)return this.state.specialEvents.includes("had_lunch")?this.getEnding():(this.state.specialEvents.push("had_lunch"),Qe);if(t>=6)return this.getEnding()}if(n==="main"){if(t===2)return cl;if(t===3)return this.state.specialEvents.includes("1c_first_message")?Ia:this.state.specialEvents.includes("1c_stalking")?Fa:cl;if(t===4)return this.state.specialEvents.includes("normal_meet")?fl:this.state.specialEvents.includes("1b_apology")?Nn:pe;if(t===5)return this.state.specialEvents.includes("1c_deep_conversation")?Xp:this.state.specialEvents.includes("1c_friendship")?Ba:this.state.specialEvents.includes("had_lunch")?pe:(this.state.specialEvents.push("had_lunch"),Qe);if(t===6)return this.state.specialEvents.includes("had_lunch")?this.getEnding():(this.state.specialEvents.push("had_lunch"),Qe);if(t>=7)return this.getEnding()}if(t===2&&!n)return pe;if(t===3||t===4){if(!this.state.specialEvents.includes("had_lunch")&&!this.state.specialEvents.includes("coffee_date")&&!this.state.specialEvents.includes("normal_meet"))return pe;if(!this.state.specialEvents.includes("had_lunch"))return this.state.specialEvents.push("had_lunch"),Qe}return t>=4?this.getEnding():Dr}getEnding(){const{intimacy:t,relationshipType:n,hasConfessed:r}=this.state;return t>=80&&n==="romantic"&&r?eu:t>=60&&t<80&&(r||this.state.honesty>=6)?nu:t>=40&&t<80&&n==="friend"?tu:t>=20&&t<40?xl:t<20||n==="stranger"?Sh:t>=80?eu:t>=60?nu:t>=40&&n==="friend"?tu:xl}getState(){return{...this.state}}}const Wr=new Ch,Nh=({scene:e,onChoiceSelected:t,isLoading:n})=>{const[r,i]=R.useState(!1),[l,s]=R.useState(""),[o,a]=R.useState(0),f=()=>i(!0);R.useEffect(()=>{const p=Wr.getState();a(p.intimacy)},[e]),R.useEffect(()=>{if(i(!1),e.backgroundDescription){const _=encodeURIComponent(`${e.backgroundDescription}, Makoto Shinkai style, anime masterpiece, 8k, highly detailed, emotional lighting, cinematic`);s(`https://image.pollinations.ai/prompt/${_}?width=1920&height=1080&nologo=true&seed=${Math.floor(Math.random()*1e3)}`)}},[e.narrative]);const g=p=>p>=80?"text-pink-300":p>=60?"text-red-300":p>=40?"text-orange-300":p>=20?"text-yellow-300":"text-gray-400",m=p=>p>=80?"深爱":p>=60?"亲密":p>=40?"熟悉":p>=20?"相识":"陌生";return T.jsxs("div",{className:"relative w-full h-full overflow-hidden bg-black select-none font-sans",style:{pointerEvents:"auto"},children:[T.jsx("div",{className:"absolute top-6 right-6 z-30 bg-black/70 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 shadow-lg",children:T.jsxs("div",{className:"flex flex-col items-end gap-1",children:[T.jsx("div",{className:"text-xs text-gray-400 tracking-wider uppercase",children:"亲密度"}),T.jsx("div",{className:`text-2xl font-bold ${g(o)}`,children:o}),T.jsx("div",{className:`text-xs ${g(o)}`,children:m(o)})]})}),T.jsx("div",{className:"absolute inset-0 bg-cover bg-center animate-[subtle-zoom_30s_infinite_alternate]",style:{backgroundImage:`url(${l})`,filter:"brightness(0.9) contrast(1.1) saturate(1.1)"}},l),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 pointer-events-none"}),T.jsxs("div",{className:"absolute inset-0 flex flex-col justify-end",children:[T.jsx("div",{className:`
            w-full flex flex-col items-center gap-3 px-4 mb-6 z-20
            transition-all duration-700 ease-out
            ${r&&!n?"opacity-100 translate-y-0":"opacity-0 translate-y-8 pointer-events-none"}
          `,children:e.choices.map((p,_)=>T.jsxs("button",{onClick:()=>t(p),className:`
                group relative overflow-hidden w-full max-w-2xl 
                bg-black/60 hover:bg-black/80
                backdrop-blur-md border border-white/20
                hover:border-blue-300/60
                text-white py-4 px-8 text-center
                shadow-[0_0_15px_rgba(0,0,0,0.5)] 
                transition-all duration-300 transform hover:scale-[1.01]
              `,style:{transitionDelay:`${_*150}ms`},children:[T.jsx("span",{className:"text-lg tracking-widest text-gray-100 group-hover:text-blue-100 transition-colors",children:p.text}),T.jsx("div",{className:"absolute left-0 top-0 h-full w-[2px] bg-blue-500/0 group-hover:bg-blue-400/80 transition-all duration-500"}),T.jsx("div",{className:"absolute right-0 top-0 h-full w-[2px] bg-blue-500/0 group-hover:bg-blue-400/80 transition-all duration-500"})]},p.id))}),T.jsxs("div",{className:"w-full bg-gradient-to-t from-black via-black/95 to-transparent pt-12 pb-8 px-4 md:px-20 lg:px-40 z-10",children:[e.speaker&&T.jsx("div",{className:"transform translate-y-4 translate-x-2 z-20 relative",children:T.jsx("span",{className:"inline-block px-8 py-1 bg-gray-900/90 text-blue-200 font-bold text-xl tracking-widest shadow-lg border-t border-l border-r border-white/10 rounded-t-lg backdrop-blur-md",children:e.speaker})}),T.jsxs("div",{className:"relative min-h-[160px] md:min-h-[200px] bg-gray-900/85 backdrop-blur-xl border border-white/10 shadow-2xl p-6 md:p-8 rounded-lg rounded-tl-none",children:[e.narrative&&e.speaker&&T.jsx("div",{className:"mb-4 text-gray-400 text-sm md:text-base italic leading-relaxed",children:e.narrative}),T.jsx("div",{className:"text-xl md:text-2xl leading-relaxed text-gray-100 drop-shadow-sm",children:T.jsx(Yp,{text:e.dialogue||e.narrative,speed:30,onComplete:f})}),r&&!n&&T.jsx("div",{className:"absolute bottom-4 right-4 animate-bounce text-blue-300",children:T.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 13l-7 7-7-7m14-8l-7 7-7-7"})})}),n&&T.jsx("div",{className:"absolute bottom-4 right-4 flex items-center gap-2 text-xs text-blue-300/50",children:T.jsx("span",{className:"animate-pulse tracking-widest uppercase",children:"故事生成中..."})})]})]})]}),T.jsx("style",{children:`
        @keyframes subtle-zoom {
          0%   { transform: scale(1.0); }
          100% { transform: scale(1.15); }
        }
      `})]})},Th=()=>{const[e,t]=R.useState({x:0,y:0}),[n,r]=R.useState(!1),[i,l]=R.useState({x:0,y:0}),[s,o]=R.useState("standby"),[a,f]=R.useState(0),[g,m]=R.useState(!1),[p,_]=R.useState(null),[E,k]=R.useState(null),[I,c]=R.useState(100),[u,d]=R.useState(100),[v,C]=R.useState(100),x=R.useRef(null),S=R.useRef(null),L=R.useRef(null),j=R.useRef(new Map),[O,ie]=R.useState(!1);R.useEffect(()=>{const h=D=>new Promise((z,X)=>{if(j.current.has(D)){z();return}const B=new Image;B.onload=()=>{j.current.set(D,B),z()},B.onerror=X,B.src=D});(async()=>{const D=[];Object.values(Ce).forEach(z=>{D.push(...z.frames)});try{await Promise.all(D.map(z=>h(z).catch(()=>{console.warn("Failed to preload image:",z)}))),ie(!0),console.log("All images preloaded successfully")}catch(z){console.error("Error preloading images:",z),ie(!0)}})()},[]);const Ce={standby:{frames:["/firefly/Standby/0.png","/firefly/Standby/1.png","/firefly/Standby/2.png","/firefly/Standby/3.png","/firefly/Standby/4.png","/firefly/Standby/5.png"],loop:!0,duration:150},left:{frames:["/firefly/left/0.png","/firefly/left/1.png","/firefly/left/2.png","/firefly/left/3.png"],loop:!0,duration:100},right:{frames:["/firefly/right/0.png","/firefly/right/1.png","/firefly/right/2.png","/firefly/right/3.png"],loop:!0,duration:100},eat:{frames:["/firefly/eat/0.png","/firefly/eat/1.png","/firefly/eat/2.png","/firefly/eat/3.png"],loop:!0,duration:150},sleep:{frames:["/firefly/sleep/0.png","/firefly/sleep/1.png","/firefly/sleep/2.png","/firefly/sleep/3.png"],loop:!0,duration:200},love:{frames:["/firefly/Love/0.png","/firefly/Love/1.png","/firefly/Love/2.png","/firefly/Love/3.png","/firefly/Love/4.png","/firefly/Love/5.png"],loop:!1,duration:150},mention:{frames:["/firefly/mention/0.png","/firefly/mention/1.png","/firefly/mention/2.png","/firefly/mention/3.png"],loop:!0,duration:150}};R.useEffect(()=>{const h=D=>new Promise((z,X)=>{if(j.current.has(D)){z();return}const B=new Image;B.onload=()=>{j.current.set(D,B),z()},B.onerror=()=>{console.warn("Failed to preload image:",D),z()},B.src=D});(async()=>{const D=[];Object.values(Ce).forEach(z=>{D.push(...z.frames)});try{for(let X=0;X<D.length;X+=10){const B=D.slice(X,X+10);await Promise.all(B.map(be=>h(be)))}ie(!0),console.log("All images preloaded successfully")}catch(z){console.error("Error preloading images:",z),ie(!0)}})()},[]),R.useEffect(()=>{const h=()=>{const w=window.innerWidth,D=window.innerHeight;t({x:w-250,y:D/2-100})};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),R.useEffect(()=>{const h=Ce[s];if(!h||h.frames.length===0){console.log("Animation config not found for action:",s);return}console.log("Starting animation for action:",s,"frames:",h.frames.length,"loop:",h.loop,"duration:",h.duration),x.current&&(clearInterval(x.current),x.current=null),f(0);let w=0;const D=()=>{w=w+1,w>=h.frames.length&&(h.loop?w=0:(w=h.frames.length-1,clearInterval(x.current),x.current=null,setTimeout(()=>{console.log("Non-loop animation finished, returning to standby"),o("standby")},50))),console.log("Animation frame update:",w,"/",h.frames.length,"action:",s,"image:",h.frames[w]),f(w)};f(0),w=0;const z=setInterval(D,h.duration||150);return x.current=z,console.log("Animation timer started, interval:",h.duration||150),()=>{x.current&&(clearInterval(x.current),x.current=null)}},[s]);const xt=R.useCallback(()=>{if(console.log("handleWalk called, isMoving:",g,"walkingDirection:",p),g&&p){m(!1),_(null),o("standby"),S.current&&(clearInterval(S.current),S.current=null);return}m(!0);const h=Math.random()>.5?"left":"right";_(h),o(h),S.current&&clearInterval(S.current);const w=5;let D=h;S.current=setInterval(()=>{t(z=>{const X=D==="left"?-w:w,B=z.x+X,be=window.innerWidth-200,Ne=0;return B<=Ne?(D="right",_("right"),o("right"),{x:Ne,y:z.y}):B>=be?(D="left",_("left"),o("left"),{x:be,y:z.y}):{x:B,y:z.y}})},50)},[g,p]),fr=R.useCallback(h=>{var X;if(h.button!==0)return;h.preventDefault(),h.stopPropagation(),console.log("handleMouseDown called");const w=(X=L.current)==null?void 0:X.getBoundingClientRect();if(!w){console.log("No rect found");return}const D=h.clientY-w.top,z=h.clientX-w.left;if(console.log("Click position:",{clickX:z,clickY:D,rectWidth:w.width,rectHeight:w.height}),z>=0&&z<=w.width&&D>=0&&D<=w.height)if(D<w.height/4){console.log("Love action triggered"),o("love"),setTimeout(()=>{o("standby"),c(B=>Math.min(100,B+5))},6*150+100);return}else console.log("Mention action triggered"),r(!0),l({x:h.clientX-e.x,y:h.clientY-e.y}),o("mention")},[e]);R.useEffect(()=>{if(!n)return;const h=D=>{const z=D.clientX-i.x,X=D.clientY-i.y,B=window.innerWidth-200,be=window.innerHeight-200,Ne=Math.max(0,Math.min(B,z)),Bt=Math.max(0,Math.min(be,X));t({x:Ne,y:Bt})},w=()=>{n&&(r(!1),o("standby"))};return window.addEventListener("mousemove",h),window.addEventListener("mouseup",w),()=>{window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",w)}},[n,i]);const Ri=R.useCallback(()=>{if(console.log("handleFeed called, currentAction:",s),s==="eat"){o("standby");return}s==="standby"&&(o("eat"),d(h=>Math.min(100,h+20)),c(h=>Math.min(100,h+5)))},[s]),vn=R.useCallback(()=>{if(console.log("handleSleep called, currentAction:",s),s==="sleep"){o("standby");return}s==="standby"&&(o("sleep"),C(h=>Math.min(100,h+30)))},[s]);R.useEffect(()=>()=>{x.current&&clearInterval(x.current),S.current&&clearInterval(S.current)},[]),R.useEffect(()=>{const h=setInterval(()=>{d(w=>Math.max(0,w-.1)),C(w=>Math.max(0,w-.1)),(u<20||v<20)&&c(w=>Math.max(0,w-.05))},1e4);return()=>clearInterval(h)},[u,v]),R.useEffect(()=>{if(!E)return;const h=()=>{k(null)},w=()=>{k(null)};return setTimeout(()=>{window.addEventListener("click",h),window.addEventListener("contextmenu",w)},100),()=>{window.removeEventListener("click",h),window.removeEventListener("contextmenu",w)}},[E]);const St=Ce[s],N=(St==null?void 0:St.frames[a])||Ce.standby.frames[0];return R.useEffect(()=>{console.log("Current state:",{currentAction:s,currentFrame:a,currentImage:N,isMoving:g,walkingDirection:p})},[s,a,N,g,p]),T.jsxs(T.Fragment,{children:[T.jsxs("div",{ref:L,className:"fixed select-none",style:{left:`${e.x}px`,top:`${e.y}px`,transform:n?"scale(1.05)":"scale(1)",transition:n?"none":"transform 0.2s ease",cursor:n?"grabbing":"default",zIndex:999999,pointerEvents:"auto"},onMouseDown:h=>{h.preventDefault(),h.stopPropagation(),fr(h)},onContextMenu:h=>{h.preventDefault(),h.stopPropagation(),k({x:h.clientX,y:h.clientY})},onClick:h=>{h.stopPropagation()},children:[T.jsx("img",{src:N,alt:"流萤",className:"w-48 h-48 object-contain drop-shadow-2xl pointer-events-none",draggable:!1,style:{opacity:j.current.has(N)?1:.3,transition:"opacity 0.1s ease-in-out"},onError:h=>{console.error("Failed to load image:",N,"action:",s,"frame:",a),h.currentTarget.style.opacity="0.5"},onLoad:h=>{j.current.has(N)||j.current.set(N,h.currentTarget),h.currentTarget.style.opacity="1"}},`${s}-${a}`),(()=>{const h=Ce[s];if(!h)return null;const w=(a+1)%h.frames.length,D=h.frames[w];return D&&!j.current.has(D)?T.jsx("img",{src:D,alt:"",className:"hidden",onLoad:z=>{j.current.has(D)||j.current.set(D,z.currentTarget)}}):null})()]}),E&&T.jsxs("div",{className:"fixed bg-black/90 border border-white/20 rounded-lg p-2 shadow-lg",style:{left:`${E.x}px`,top:`${E.y}px`,zIndex:999999,pointerEvents:"auto"},onClick:h=>{h.preventDefault(),h.stopPropagation()},onContextMenu:h=>{h.preventDefault(),h.stopPropagation()},children:[T.jsx("button",{onClick:h=>{h.preventDefault(),h.stopPropagation(),console.log("Walk button clicked"),xt(),k(null)},className:"block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded transition-colors cursor-pointer",style:{pointerEvents:"auto"},children:"行走"}),T.jsx("button",{onClick:h=>{h.preventDefault(),h.stopPropagation(),console.log("Feed button clicked"),Ri(),k(null)},className:"block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded transition-colors cursor-pointer",style:{pointerEvents:"auto"},children:"喂食"}),T.jsx("button",{onClick:h=>{h.preventDefault(),h.stopPropagation(),console.log("Sleep button clicked"),vn(),k(null)},className:"block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded transition-colors cursor-pointer",style:{pointerEvents:"auto"},children:"睡觉"})]})]})},Ph=()=>{const[e,t]=R.useState({history:[],currentScene:null,isLoading:!1,gameStarted:!1,gameEnded:!1,backgroundImageUrl:""}),n=async()=>{t(i=>({...i,isLoading:!0}));try{const i=await Wr.startNewGame();t(l=>({...l,gameStarted:!0,isLoading:!1,currentScene:i,history:[{role:"model",parts:JSON.stringify(i)}]}))}catch(i){console.error("Error starting game:",i),alert("游戏启动失败，请刷新重试。"),t(l=>({...l,isLoading:!1}))}},r=async i=>{if(!e.currentScene)return;t(s=>({...s,isLoading:!0}));const l=[...e.history,{role:"user",parts:i.text}];try{const s=await Wr.nextTurnWithChoice(l,i);t(o=>({...o,currentScene:s,isLoading:!1,gameEnded:s.isEnding,history:[...l,{role:"model",parts:JSON.stringify(s)}]}))}catch(s){console.error("Error generating next turn:",s),alert("剧情生成失败，正在尝试恢复..."),t(o=>({...o,isLoading:!1}))}};return T.jsx("div",{className:"relative w-screen h-screen bg-slate-900 text-white overflow-hidden font-sans",children:e.gameStarted?T.jsxs(T.Fragment,{children:[e.currentScene&&T.jsx(Nh,{scene:e.currentScene,onChoiceSelected:r,isLoading:e.isLoading}),T.jsx(Th,{}),e.gameEnded&&e.currentScene&&T.jsxs("div",{className:"absolute inset-0 bg-black/95 flex flex-col items-center justify-center z-50 p-8 text-center transition-opacity duration-1000",children:[T.jsx("h2",{className:"text-5xl font-serif-sc mb-6 text-blue-200 drop-shadow-lg",children:e.currentScene.endingType==="good"?"💝 美好的结局":e.currentScene.endingType==="bad"?"💔 遗憾的结局":"🤝 另一种可能"}),T.jsx("div",{className:"h-px w-32 bg-gray-600 mb-8"}),T.jsx("p",{className:"max-w-2xl text-xl text-gray-300 leading-relaxed mb-12 font-serif-sc tracking-wide whitespace-pre-line",children:e.currentScene.narrative}),T.jsxs("div",{className:"mb-8 text-sm text-gray-500",children:[T.jsx("p",{children:"你已解锁 5 个结局中的 1 个"}),T.jsx("p",{className:"mt-2",children:"💡 提示：不同的选择会带来完全不同的故事走向"})]}),T.jsxs("div",{className:"flex gap-4",children:[T.jsx("button",{onClick:()=>window.location.reload(),className:"px-10 py-4 border border-white/30 hover:border-white hover:bg-white/10 text-white text-lg tracking-[0.2em] transition-all duration-300 font-serif-sc",children:"重新开始"}),T.jsx("button",{onClick:()=>{const i=Wr.getState();alert(`调试信息：
好感度: ${i.affection}
勇气: ${i.courage}
诚实: ${i.honesty}
分支: ${i.branch}
坦白: ${i.hasConfessed}`)},className:"px-10 py-4 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 text-blue-300 text-lg tracking-[0.2em] transition-all duration-300 font-serif-sc",children:"查看数据"})]})]})]}):T.jsx(Kp,{onStart:n,isLoading:e.isLoading})})},vf=document.getElementById("root");if(!vf)throw new Error("Could not find root element to mount to");const Dh=gf(vf);Dh.render(T.jsx(jf.StrictMode,{children:T.jsx(Ph,{})}));
