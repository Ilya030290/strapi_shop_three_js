(self.webpackChunkthreejs_shop_strapi=self.webpackChunkthreejs_shop_strapi||[]).push([[1092],{81610:(G,N,v)=>{"use strict";G.exports=v(96233)},96233:function(G,N,v){(function(o,D){G.exports=D(v(67294),v(78384))})(this,function(o,D){return function(a){var m={};function t(i){if(m[i])return m[i].exports;var r=m[i]={i,l:!1,exports:{}};return a[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=a,t.c=m,t.d=function(i,r,c){t.o(i,r)||Object.defineProperty(i,r,{enumerable:!0,get:c})},t.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,r){if(1&r&&(i=t(i)),8&r||4&r&&typeof i=="object"&&i&&i.__esModule)return i;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:i}),2&r&&typeof i!="string")for(var s in i)t.d(c,s,function(d){return i[d]}.bind(null,s));return c},t.n=function(i){var r=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(r,"a",r),r},t.o=function(i,r){return Object.prototype.hasOwnProperty.call(i,r)},t.p="",t(t.s=121)}({0:function(a,m,t){a.exports=t(19)()},1:function(a,m){a.exports=o},10:function(a,m,t){var i=t(25),r=t(26),c=t(22),s=t(27);a.exports=function(d,u){return i(d)||r(d,u)||c(d,u)||s()},a.exports.default=a.exports,a.exports.__esModule=!0},121:function(a,m,t){"use strict";t.r(m),t.d(m,"Switch",function(){return M});var i,r,c=t(6),s=t.n(c),d=t(4),u=t.n(d),x=t(3),P=t.n(x),w=t(1),l=t.n(w),h=t(0),L=t.n(h),K=t(2),O=t.n(K),j=t(9),e=t(5),n=["label","onChange","onLabel","offLabel","selected","visibleLabels"],f=O.a.div(i||(i=P()([`
  background: `,`;
  border: none;
  border-radius: 16px;
  position: relative;
  height: `,`rem;
  width: `,`rem;

  & span {
    font-size: `,`;
  }

  &:before {
    content: '';
    background: `,`;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: `,`;
    top: `,`;
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`])),function(g){return g.theme.colors.danger500},1.5,2.5,function(g){return g.visibleLabels?"1rem":0},function(g){return g.theme.colors.neutral0},function(g){return g.theme.spaces[1]},function(g){return g.theme.spaces[1]}),I=O.a.button(r||(r=P()([`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] `,` {
    background: `,`;
  }

  &[aria-checked='true'] `,`:before {
    transform: translateX(1rem);
  }
`])),f,function(g){return g.theme.colors.success500},f),M=l.a.forwardRef(function(g,y){var S=g.label,z=g.onChange,Z=g.onLabel,H=g.offLabel,W=g.selected,F=g.visibleLabels,p=u()(g,n);return l.a.createElement(I,s()({ref:y,role:"switch","aria-checked":W,"aria-label":S,onClick:z,visibleLabels:F,type:"button"},p),l.a.createElement(j.Flex,null,l.a.createElement(f,null,l.a.createElement("span",null,Z),l.a.createElement("span",null,H)),F&&l.a.createElement(e.Box,{as:"span","aria-hidden":!0,paddingLeft:2,color:W?"success600":"danger600"},W?Z:H)))});M.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},M.propTypes={label:L.a.string.isRequired,offLabel:L.a.string,onChange:L.a.func.isRequired,onLabel:L.a.string,selected:L.a.bool.isRequired,visibleLabels:L.a.bool},M.displayName="Switch"},13:function(a,m){function t(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(a.exports=t=function(r){return typeof r},a.exports.default=a.exports,a.exports.__esModule=!0):(a.exports=t=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},a.exports.default=a.exports,a.exports.__esModule=!0),t(i)}a.exports=t,a.exports.default=a.exports,a.exports.__esModule=!0},19:function(a,m,t){"use strict";var i=t(20);function r(){}function c(){}c.resetWarningCache=r,a.exports=function(){function s(x,P,w,l,h,L){if(L!==i){var K=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw K.name="Invariant Violation",K}}function d(){return s}s.isRequired=s;var u={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:d,element:s,elementType:s,instanceOf:d,node:s,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:c,resetWarningCache:r};return u.PropTypes=u,u}},2:function(a,m){a.exports=D},20:function(a,m,t){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(a,m){a.exports=function(t,i){(i==null||i>t.length)&&(i=t.length);for(var r=0,c=new Array(i);r<i;r++)c[r]=t[r];return c},a.exports.default=a.exports,a.exports.__esModule=!0},22:function(a,m,t){var i=t(21);a.exports=function(r,c){if(r){if(typeof r=="string")return i(r,c);var s=Object.prototype.toString.call(r).slice(8,-1);return s==="Object"&&r.constructor&&(s=r.constructor.name),s==="Map"||s==="Set"?Array.from(r):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?i(r,c):void 0}},a.exports.default=a.exports,a.exports.__esModule=!0},24:function(a,m){a.exports=function(t,i){if(t==null)return{};var r,c,s={},d=Object.keys(t);for(c=0;c<d.length;c++)r=d[c],i.indexOf(r)>=0||(s[r]=t[r]);return s},a.exports.default=a.exports,a.exports.__esModule=!0},25:function(a,m){a.exports=function(t){if(Array.isArray(t))return t},a.exports.default=a.exports,a.exports.__esModule=!0},26:function(a,m){a.exports=function(t,i){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var c,s,d=[],u=!0,x=!1;try{for(r=r.call(t);!(u=(c=r.next()).done)&&(d.push(c.value),!i||d.length!==i);u=!0);}catch(P){x=!0,s=P}finally{try{u||r.return==null||r.return()}finally{if(x)throw s}}return d}},a.exports.default=a.exports,a.exports.__esModule=!0},27:function(a,m){a.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},a.exports.default=a.exports,a.exports.__esModule=!0},3:function(a,m){a.exports=function(t,i){return i||(i=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}}))},a.exports.default=a.exports,a.exports.__esModule=!0},4:function(a,m,t){var i=t(24);a.exports=function(r,c){if(r==null)return{};var s,d,u=i(r,c);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(r);for(d=0;d<x.length;d++)s=x[d],c.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(r,s)&&(u[s]=r[s])}return u},a.exports.default=a.exports,a.exports.__esModule=!0},5:function(a,m,t){"use strict";t.r(m),t.d(m,"Box",function(){return j});var i,r=t(3),c=t.n(r),s=t(2),d=t.n(s),u=t(7),x=t(1),P=t.n(x),w=t(0),l=t.n(w),h=function(e){return P.a.createElement("div",e)},L={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},K={_hover:l.a.func,background:l.a.string,basis:l.a.oneOfType([l.a.string,l.a.string]),borderColor:l.a.string,children:l.a.oneOfType([l.a.node,l.a.string]),color:l.a.string,flex:l.a.oneOfType([l.a.string,l.a.string]),grow:l.a.oneOfType([l.a.string,l.a.string]),hasRadius:l.a.bool,hiddenS:l.a.bool,hiddenXS:l.a.bool,padding:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingBottom:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingLeft:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingRight:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingTop:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),shadow:l.a.string,shrink:l.a.oneOfType([l.a.string,l.a.string])};h.defaultProps=L,h.propTypes=K;var O={color:!0},j=d.a.div.withConfig({shouldForwardProp:function(e,n){return!O[e]&&n(e)}})(i||(i=c()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var n=e.fontSize;return e.theme.fontSizes[n]||n},function(e){var n=e.theme,f=e.background;return n.colors[f]},function(e){var n=e.theme,f=e.color;return n.colors[f]},function(e){var n=e.theme,f=e.padding;return Object(u.a)("padding",f,n)},function(e){var n=e.theme,f=e.paddingTop;return Object(u.a)("padding-top",f,n)},function(e){var n=e.theme,f=e.paddingRight;return Object(u.a)("padding-right",f,n)},function(e){var n=e.theme,f=e.paddingBottom;return Object(u.a)("padding-bottom",f,n)},function(e){var n=e.theme,f=e.paddingLeft;return Object(u.a)("padding-left",f,n)},function(e){var n=e.theme,f=e.marginLeft;return Object(u.a)("margin-left",f,n)},function(e){var n=e.theme,f=e.marginRight;return Object(u.a)("margin-right",f,n)},function(e){var n=e.theme,f=e.marginTop;return Object(u.a)("margin-top",f,n)},function(e){var n=e.theme,f=e.marginBottom;return Object(u.a)("margin-bottom",f,n)},function(e){var n=e.theme;return e.hiddenS?"".concat(n.mediaQueries.tablet," { display: none; }"):void 0},function(e){var n=e.theme;return e.hiddenXS?"".concat(n.mediaQueries.mobile," { display: none; }"):void 0},function(e){var n=e.theme,f=e.hasRadius,I=e.borderRadius;return f?n.borderRadius:I},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var n=e.borderColor;return e.theme.colors[n]},function(e){var n=e.theme,f=e.borderColor,I=e.borderStyle,M=e.borderWidth;if(f&&!I&&!M)return"1px solid ".concat(n.colors[f])},function(e){var n=e.theme,f=e.shadow;return n.shadows[f]},function(e){return e.pointerEvents},function(e){var n=e._hover,f=e.theme;return n?n(f):void 0},function(e){return e.display},function(e){return e.position},function(e){var n=e.left;return e.theme.spaces[n]||n},function(e){var n=e.right;return e.theme.spaces[n]||n},function(e){var n=e.top;return e.theme.spaces[n]||n},function(e){var n=e.bottom;return e.theme.spaces[n]||n},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var n=e.width;return e.theme.spaces[n]||n},function(e){var n=e.maxWidth;return e.theme.spaces[n]||n},function(e){var n=e.minWidth;return e.theme.spaces[n]||n},function(e){var n=e.height;return e.theme.spaces[n]||n},function(e){var n=e.maxHeight;return e.theme.spaces[n]||n},function(e){var n=e.minHeight;return e.theme.spaces[n]||n},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});j.defaultProps=L,j.propTypes=K},6:function(a,m){function t(){return a.exports=t=Object.assign||function(i){for(var r=1;r<arguments.length;r++){var c=arguments[r];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(i[s]=c[s])}return i},a.exports.default=a.exports,a.exports.__esModule=!0,t.apply(this,arguments)}a.exports=t,a.exports.default=a.exports,a.exports.__esModule=!0},7:function(a,m,t){"use strict";var i=t(10),r=t.n(i),c=t(13),s=t.n(c);m.a=function(d,u,x){var P=u;if(Array.isArray(u)||s()(u)!=="object"||(P=[u==null?void 0:u.desktop,u==null?void 0:u.tablet,u==null?void 0:u.mobile]),P!==void 0){if(Array.isArray(P)){var w=P,l=r()(w,3),h=l[0],L=l[1],K=l[2],O="".concat(d,": ").concat(x.spaces[h],";");return L!==void 0&&(O+="".concat(x.mediaQueries.tablet,`{
          `).concat(d,": ").concat(x.spaces[L],`;
        }`)),K!==void 0&&(O+="".concat(x.mediaQueries.mobile,`{
          `).concat(d,": ").concat(x.spaces[K],`;
        }`)),O}var j=x.spaces[P]||P;return"".concat(d,": ").concat(j,";")}}},9:function(a,m,t){"use strict";t.r(m),t.d(m,"Flex",function(){return e});var i,r=t(3),c=t.n(r),s=t(2),d=t.n(s),u=t(5),x=t(7),P=t(1),w=t.n(P),l=t(0),h=t.n(l),L=function(n){return w.a.createElement("div",n)},K={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},O={alignItems:h.a.string,basis:h.a.oneOfType([h.a.string,h.a.number]),direction:h.a.string,gap:h.a.oneOfType([h.a.shape({desktop:h.a.number,mobile:h.a.number,tablet:h.a.number}),h.a.number,h.a.arrayOf(h.a.number),h.a.string]),inline:h.a.bool,justifyContent:h.a.string,reverse:h.a.bool,shrink:h.a.number,wrap:h.a.string};L.defaultProps=K,L.propTypes=O;var j={direction:!0},e=d()(u.Box).withConfig({shouldForwardProp:function(n,f){return!j[n]&&f(n)}})(i||(i=c()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-shrink: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(n){return n.alignItems},function(n){return n.inline?"inline-flex":"flex"},function(n){return n.direction},function(n){return n.shrink},function(n){return n.wrap},function(n){var f=n.gap,I=n.theme;return Object(x.a)("gap",f,I)},function(n){return n.justifyContent});e.defaultProps=K,e.propTypes=O}})})},11077:(G,N,v)=>{"use strict";v.r(N),v.d(N,{default:()=>F});var o=v(67294),D=v(68547),a=v(84734),m=v.n(a),t=v(5493),i=v(19408),r=v(34626),c=v(78862),s=v(62031),d=v(55967),u=v(49425),x=v(9925),P=v(43808),w=v(85104),l=v(81610),h=v(67826);const K=[{label:"USD - US Dollar",value:"usd"},{label:"ALL - Albania Lek",value:"all"},{label:"AED - United Arab Emirates Dirham",value:"aed"},{label:"ANG - Netherlands Antillean Guilder",value:"ang"},{label:"ARS - Argentine Peso",value:"ars"},{label:"AWG - Aruba Guilder",value:"awg"},{label:"AUD - Australian Dollar",value:"aud"},{label:"BBD - Barbados Dollar",value:"bbd"},{label:"BDT - Bangladeshi Taka",value:"bdt"},{label:"BGN - Bulgarian Lev",value:"bgn"},{label:"BMD - Bermudan Dollar",value:"bmd"},{label:"BRL - Brazilian Real",value:"brl"},{label:"CAD - Canadian Dollar",value:"cad"},{label:"CHF - Swiss Franc",value:"chf"},{label:"COP - Colombian Peso",value:"cop"},{label:"EGP - Egyptian Pound",value:"egp"},{label:"EUR - Euro",value:"eur"},{label:"GBP - British Pound",value:"gbp"},{label:"HKD - Hong Kong Dollar",value:"hkd"},{label:"IDR - Indonesian Rupiah",value:"idr"},{label:"INR - Indian Rupee",value:"inr"},{label:"JPY - Japanese Yen",value:"jpy"},{label:"KRW - South Korean Won",value:"krw"},{label:"LKR - Sri Lankan Rupee",value:"lkr"},{label:"MXN - Mexican Peso",value:"mxn"},{label:"MYR - Malaysian Ringitt",value:"myr"},{label:"NGN - Nigerian Naira",value:"ngn"},{label:"NOK - Norweign Krone",value:"nok"},{label:"NPR - Nepalese Rupee",value:"npr"},{label:"NZD - New Zealand Dollar",value:"nzd"},{label:"PLN - Poland Zloty",value:"pln"},{label:"PHP - Philippine Piso",value:"php"},{label:"PKR - Pakistani Rupee",value:"pkr"},{label:"QAR - Qatari Rial",value:"qar"},{label:"ZAR - South Africa Rand",value:"zar"},{label:"SAR - Saudi Riyal",value:"sar"},{label:"SGD - Singapore Dollar",value:"sgd"},{label:"SEK - Sweden Krona",value:"sek"},{label:"RON - Romania New Leu",value:"ron"},{label:"THB - Thai Baht",value:"thb"},{label:"TWD - Taiwan New Dollar",value:"twd"},{label:"TRL - Turkey Lira",value:"trl"},{label:"UAH - Ukraine Hryvna",value:"uah"},{label:"VND - Viet Nam Dong",value:"vnd"},{label:"ZWD - Zimbabwe Dollar",value:"zwd"}];var O=v(93768),j=Object.defineProperty,e=Object.defineProperties,n=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,g=(p,T,C)=>T in p?j(p,T,{enumerable:!0,configurable:!0,writable:!0,value:C}):p[T]=C,y=(p,T)=>{for(var C in T||(T={}))I.call(T,C)&&g(p,C,T[C]);if(f)for(var C of f(T))M.call(T,C)&&g(p,C,T[C]);return p},S=(p,T)=>e(p,n(T)),z=(p,T,C)=>new Promise((q,Q)=>{var k=A=>{try{E(C.next(A))}catch(U){Q(U)}},b=A=>{try{E(C.throw(A))}catch(U){Q(U)}},E=A=>A.done?q(A.value):Promise.resolve(A.value).then(k,b);E((C=C.apply(p,T)).next())});const H=()=>{const[p,T]=(0,o.useState)({isLiveMode:!1,stripeLivePubKey:"",stripeLiveSecKey:"",stripeTestPubKey:"",stripeTestSecKey:"",checkoutSuccessUrl:"",checkoutCancelUrl:"",currency:void 0}),[C,q]=(0,o.useState)(!1),[Q,k]=(0,o.useState)(!1),[b,E]=(0,o.useState)({stripeLivePubKey:"",stripeLiveSecKey:"",stripeTestPubKey:"",stripeTestSecKey:"",checkoutSuccessUrl:"",checkoutCancelUrl:"",currency:""});(0,o.useEffect)(()=>{z(void 0,null,function*(){var B;const R=yield(0,O.A7)();if((B=R.data)!=null&&B.response){const{isLiveMode:X,stripeLivePubKey:Y,stripeLiveSecKey:J,stripeTestPubKey:$,stripeTestSecKey:_,checkoutSuccessUrl:ee,checkoutCancelUrl:te,currency:ne}=R.data.response;T(S(y({},p),{isLiveMode:X,stripeLivePubKey:Y,stripeLiveSecKey:J,stripeTestPubKey:$,stripeTestSecKey:_,checkoutSuccessUrl:ee,checkoutCancelUrl:te,currency:ne}))}})},[]);const A=B=>{T(S(y({},p),{currency:B})),E(S(y({},b),{currency:""}))},U=B=>{const{name:R,value:X}=B.target;T(S(y({},p),{[R]:X})),R==="stripeLivePubKey"?E(S(y({},b),{stripeLivePubKey:""})):R==="stripeLiveSecKey"?E(S(y({},b),{stripeLiveSecKey:""})):R==="stripeTestPubKey"?E(S(y({},b),{stripeTestPubKey:""})):R==="stripeTestSecKey"?E(S(y({},b),{stripeTestSecKey:""})):R==="checkoutSuccessUrl"?E(S(y({},b),{checkoutSuccessUrl:""})):R==="checkoutCancelUrl"&&E(S(y({},b),{checkoutCancelUrl:""}))},V=()=>z(void 0,null,function*(){k(!0),!p.stripeLivePubKey&&!p.stripeLiveSecKey&&!p.stripeTestPubKey&&!p.stripeTestSecKey&&!p.checkoutSuccessUrl&&!p.checkoutCancelUrl&&!p.currency?(E(S(y({},b),{stripeLivePubKey:"Live Stripe Publishable Key is required",stripeLiveSecKey:"Live Stripe Secret Key is required",stripeTestPubKey:"Test Stripe Publishable Key is required",stripeTestSecKey:"Test Stripe Secret Key is required",checkoutSuccessUrl:"Checkout Success Page URL is required",checkoutCancelUrl:"Checkout Cancel Page URL is required",currency:"Currency is required"})),k(!1)):p.stripeLivePubKey?p.stripeLiveSecKey?p.stripeTestPubKey?p.stripeTestSecKey?p.checkoutSuccessUrl?p.checkoutCancelUrl?p.currency?((yield(0,O.HI)(p)).data.ok&&q(!0),k(!1)):(E(S(y({},b),{currency:"Currency is required"})),k(!1)):(E(S(y({},b),{checkoutCancelUrl:"Checkout Cancel Page URL is required"})),k(!1)):(E(S(y({},b),{checkoutSuccessUrl:"Checkout Success Page URL is required"})),k(!1)):(E(S(y({},b),{stripeTestSecKey:"Test Stripe Secret Key is required"})),k(!1)):(E(S(y({},b),{stripeTestPubKey:"Test Stripe Publishable Key is required"})),k(!1)):(E(S(y({},b),{stripeLiveSecKey:"Live Stripe Secret Key is required"})),k(!1)):(E(S(y({},b),{stripeLivePubKey:"Live Stripe Publishable Key is required"})),k(!1))});return o.createElement(s.Main,null,o.createElement(D.SettingsPageTitle,{name:"Stripe"}),o.createElement(c.HeaderLayout,{title:"Stripe Configuration",primaryAction:o.createElement(i.Button,{type:"submit",loading:Q,onClick:V,startIcon:o.createElement(m(),null),size:"L"},"Save")}),o.createElement(c.ContentLayout,null,o.createElement(t.Box,{paddingBottom:2},C?o.createElement(x.Alert,{closeLabel:"Close alert",title:"Stripe configuration",variant:"success",onClose:()=>{q(!1)}},"saved successfully."):""),o.createElement(t.Box,{shadow:"tableShadow",background:"neutral0",paddingTop:6,paddingLeft:7,paddingRight:7,paddingBottom:6,hasRadius:!0},o.createElement(t.Box,null,o.createElement(u.Typography,{variant:"delta"},"Credentials")),o.createElement(t.Box,{paddingBottom:2,paddingTop:1},o.createElement(u.Typography,{variant:"omega"},"Configure your stripe publishable and secret Key.")),o.createElement(t.Box,{paddingTop:2},o.createElement(r.Grid,{gap:4},o.createElement(r.GridItem,{col:12,s:12},o.createElement(t.Box,{paddingTop:3},o.createElement(h.Flex,{alignItems:"center"},o.createElement(t.Box,{paddingRight:4},o.createElement(u.Typography,{variant:"delta"},"Live Mode")),o.createElement(l.Switch,{label:"Live Mode",visibleLabels:!0,offLabel:"Stripe is in test mode",onLabel:"Stripe is ready to accept payment",selected:p.isLiveMode,onChange:()=>{T(S(y({},p),{isLiveMode:!p.isLiveMode}))}})))),o.createElement(r.GridItem,{col:6,s:12},o.createElement(t.Box,{paddingTop:2,paddingBottom:3},o.createElement(d.TextInput,{name:"stripeLivePubKey",label:"Live Stripe Publishable Key",placeholder:"Live Stripe Publishable Key",required:!0,value:p.stripeLivePubKey,error:b.stripeLivePubKey?b.stripeLivePubKey:"",onChange:U}))),o.createElement(r.GridItem,{col:6,s:12},o.createElement(t.Box,{paddingTop:2,paddingBottom:3},o.createElement(d.TextInput,{name:"stripeLiveSecKey",placeholder:"Live Stripe Secret Key",label:"Live Stripe Secret Key",required:!0,value:p.stripeLiveSecKey,error:b.stripeLiveSecKey?b.stripeLiveSecKey:"",onChange:U}))),o.createElement(r.GridItem,{col:6,s:12},o.createElement(t.Box,{paddingBottom:2},o.createElement(d.TextInput,{name:"stripeTestPubKey",placeholder:"Test Stripe Publishable Key",label:"Test Stripe Publishable Key",required:!0,value:p.stripeTestPubKey,error:b.stripeTestPubKey?b.stripeTestPubKey:"",onChange:U}))),o.createElement(r.GridItem,{col:6,s:12},o.createElement(t.Box,{paddingBottom:2},o.createElement(d.TextInput,{name:"stripeTestSecKey",placeholder:"Test Stripe Secret Key",label:"Test Stripe Secret Key",required:!0,value:p.stripeTestSecKey,error:b.stripeTestSecKey?b.stripeTestSecKey:"",onChange:U})))))),o.createElement("br",null),o.createElement(t.Box,{shadow:"tableShadow",background:"neutral0",paddingTop:6,paddingLeft:7,paddingRight:7,paddingBottom:6,hasRadius:!0},o.createElement(t.Box,{paddingBottom:2},o.createElement(u.Typography,{variant:"delta"},"Global Setting")),o.createElement(t.Box,{paddingTop:2},o.createElement(r.Grid,{gap:4},o.createElement(r.GridItem,{col:6,s:12},o.createElement(t.Box,{paddingTop:2,paddingBottom:2},o.createElement(d.TextInput,{name:"checkoutSuccessUrl",label:"Payment Success Page URL",required:!0,value:p.checkoutSuccessUrl,error:b.checkoutSuccessUrl?b.checkoutSuccessUrl:"",onChange:U,hint:"Redirects to the success page after the  payment successful"}))),o.createElement(r.GridItem,{col:6,s:12},o.createElement(t.Box,{paddingTop:2,paddingBottom:2},o.createElement(d.TextInput,{name:"checkoutCancelUrl",label:"Payment Cancel Page URL",required:!0,value:p.checkoutCancelUrl,error:b.checkoutCancelUrl?b.checkoutCancelUrl:"",onChange:U,hint:"Redirects to the cancel page after the  payment failed"}))),o.createElement(r.GridItem,{col:6,s:12},o.createElement(t.Box,{paddingBottom:2},o.createElement(P.Select,{id:"select1",label:"Choose Currency",required:!0,placeholder:"Choose Currency",clearLabel:"Clear the Currency",error:b.currency?b.currency:"",onClear:()=>T(S(y({},p),{currency:void 0})),onChange:B=>A(B),value:p.currency},K&&K.map((B,R)=>o.createElement(P.Option,{value:B.value,key:R},B.label)))))))),o.createElement("br",null),o.createElement(t.Box,{shadow:"tableShadow",background:"neutral0",paddingTop:6,paddingLeft:7,paddingRight:7,paddingBottom:6,hasRadius:!0},o.createElement(t.Box,{paddingBottom:2},o.createElement(u.Typography,{variant:"delta"},"Email Settings")),o.createElement(t.Box,{paddingTop:2},o.createElement(r.Grid,{gap:4},o.createElement(r.GridItem,{col:6,s:12},o.createElement(w.Link,{href:"https://support.stripe.com/questions/set-up-account-email-notifications",isExternal:!0},"Setup seller notification")),o.createElement(r.GridItem,{col:6,s:12},o.createElement(w.Link,{href:" https://stripe.com/docs/receipts",isExternal:!0},"Setup buyer notification"))))),o.createElement("br",null),o.createElement(t.Box,{shadow:"tableShadow",background:"neutral0",paddingTop:6,paddingLeft:7,paddingRight:7,paddingBottom:6,hasRadius:!0},o.createElement(t.Box,{paddingTop:2},o.createElement(r.Grid,{gap:4},o.createElement(r.GridItem,{col:6,s:12},o.createElement(u.Typography,{variant:"pi"},"Need help? Contact us at : support@higheredlab.com")))))))},F=()=>o.createElement(H,null)}}]);
