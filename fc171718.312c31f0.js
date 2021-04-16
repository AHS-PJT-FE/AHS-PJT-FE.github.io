(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var A=t(3),r=t(7),i=(t(0),t(108)),a={id:"dashline",title:"DashLine"},o={unversionedId:"dashline",id:"dashline",isDocsHomePage:!1,title:"DashLine",description:"dashline",source:"@site/docs/dashline-doc.md",slug:"/dashline",permalink:"/docs/dashline",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dashline-doc.md",version:"current",sidebar:"docs",previous:{title:"BottomSheet",permalink:"/docs/bottomsheet"},next:{title:"\u62cd\u573a\u6a21\u677f\u7ec4\u4ef6",permalink:"/docs/auctionScreenTemplate"}},c=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[]},{value:"Props",id:"props",children:[]}],l={toc:c};function s(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(A.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{alt:"dash_line",src:t(159).default})),Object(i.b)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'   <View style={{ flexDirection: "row", width: "100%", height: 50, justifyContent: "center" }}>\n      <DashLine\n        dashLineWidth={4}\n        dashLineHeight={1}\n        dashLineBorder={0}\n        dashLineOrientation={"horizontal"}\n        dashLineColor={"red"}\n        dashLineSpace={4}\n        dashLineContainerStyle={{ marginVertical: 0 }}/>\n    </View>\n\n    <View style={{ width: 100, height: 50, justifyContent: "center", alignSelf: "center" }}>\n       <DashLine\n         dashLineWidth={4}\n         dashLineHeight={1}\n         dashLineBorder={0}\n         dashLineOrientation={"vertical"}\n         dashLineColor={"red"}\n         dashLineSpace={4}\n         dashLineContainerStyle={{ marginHorizontal: 10 }}/>\n     </View>\n')),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("h4",{id:"dashlinewidth-number"},"dashLineWidth: number;"),Object(i.b)("p",null,"\u865a\u7ebf\u957f\u5ea6"),Object(i.b)("h4",{id:"dashlineheight-number"},"dashLineHeight: number;"),Object(i.b)("p",null,"\u865a\u7ebf\u9ad8\u5ea6"),Object(i.b)("h4",{id:"dashlineborder-number"},"dashLineBorder: number;"),Object(i.b)("p",null,"\u865a\u7ebf\u5706\u89d2"),Object(i.b)("h4",{id:"dashlineorientation-vertical--horizontal"},'dashLineOrientation: "vertical" | "horizontal";'),Object(i.b)("p",null,"\u865a\u7ebf\u6392\u5217\u65b9\u5411\nvertical\uff1a\u6a2a\u5411\u6392\u5217\nhorizontal\uff1a\u7eb5\u5411\u6392\u5217"),Object(i.b)("h4",{id:"dashlinecolor-colorvalue"},"dashLineColor: ColorValue;"),Object(i.b)("p",null,"\u865a\u7ebf\u989c\u8272"),Object(i.b)("h4",{id:"dashlinespace-number"},"dashLineSpace: number;"),Object(i.b)("p",null,"\u865a\u7ebf\u4e4b\u95f4\u95f4\u9694\u8ddd\u79bb"),Object(i.b)("h4",{id:"dashlinecontainerstyle-viewstyle"},"dashLineContainerStyle?: ViewStyle;"),Object(i.b)("p",null,"\u865a\u7ebf\u5916\u90e8\u5bb9\u5668\u6837\u5f0f"))}s.isMDXComponent=!0},108:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var A=t(0),r=t.n(A);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);n&&(A=A.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,A)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,A,r=function(e,n){if(null==e)return{};var t,A,r={},i=Object.keys(e);for(A=0;A<i.length;A++)t=i[A],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(A=0;A<i.length;A++)t=i[A],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,A=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),p=A,u=d["".concat(a,".").concat(p)]||d[p]||g[p]||i;return t?r.a.createElement(u,o(o({ref:n},l),{},{components:t})):r.a.createElement(u,o({ref:n},l))}));function u(e,n){var t=arguments,A=n&&n.mdxType;if("string"==typeof e||A){var i=t.length,a=new Array(i);a[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:A,a[1]=o;for(var l=2;l<i;l++)a[l]=t[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},159:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,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"}}]);