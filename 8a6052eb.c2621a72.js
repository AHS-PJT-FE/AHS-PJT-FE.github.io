(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||s[d]||c;return n?a.a.createElement(m,o(o({ref:t},p),{},{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<c;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(106)),l={id:"GettingStarted",title:"\u5165\u95e8"},o={unversionedId:"GettingStarted",id:"GettingStarted",isDocsHomePage:!1,title:"\u5165\u95e8",description:"\u73af\u5883\u914d\u7f6e",source:"@site/docs/GettingStarted.md",slug:"/GettingStarted",permalink:"/docs/GettingStarted",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/GettingStarted.md",version:"current",sidebar:"docs",previous:{title:"\u6587\u6863\u53d1\u5e03\u6d41\u7a0b",permalink:"/docs/"},next:{title:"Badge",permalink:"/docs/badge"}},i=[{value:"\u73af\u5883\u914d\u7f6e",id:"\u73af\u5883\u914d\u7f6e",children:[]},{value:"\u5b9e\u4f8b\u5de5\u7a0b\u8fd0\u884c",id:"\u5b9e\u4f8b\u5de5\u7a0b\u8fd0\u884c",children:[]}],p={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"\u73af\u5883\u914d\u7f6e"},"\u73af\u5883\u914d\u7f6e"),Object(c.b)("h4",{id:"\u5b89\u88c5-nrm-\u8fdb\u884cnpm-\u6e90\u7ba1\u7406"},"\u5b89\u88c5 nrm \u8fdb\u884cnpm \u6e90\u7ba1\u7406"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"npm install -g nrm\n")),Object(c.b)("p",null,"\u67e5\u770b nrm \u6e90"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"nrm ls\n")),Object(c.b)("p",null,"\u6dfb\u52a0\u7231\u56de\u6536\u79c1\u6709\u6e90"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"nrm add aihuishou http://121.43.178.15:5000/\n")),Object(c.b)("p",null,"\u5207\u6362\u5230\u7231\u56de\u6536\u79c1\u6709\u6e90"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"nrm use aihuishou\n")),Object(c.b)("p",null,"npm \u767b\u5f55\u79c1\u6709\u6e90\u8d26\u53f7"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"npm login\n")),Object(c.b)("h4",{id:"\u5b89\u88c5-lerna"},"\u5b89\u88c5 lerna"),Object(c.b)("p",null,"Lerna \u662f\u4e00\u79cd\u5de5\u5177\uff0c\u9488\u5bf9 \u4f7f\u7528 git \u548c npm \u7ba1\u7406\u591a\u8f6f\u4ef6\u5305\u4ee3\u7801\u4ed3\u5e93\u7684\u5de5\u4f5c\u6d41\u7a0b\u8fdb\u884c\u4f18\u5316."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"npm install --global lerna\n")),Object(c.b)("h4",{id:"\u5b89\u88c5-luban-\u4f9d\u8d56"},"\u5b89\u88c5 luban \u4f9d\u8d56"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"yarn bootstrap\n")),Object(c.b)("h3",{id:"\u5b9e\u4f8b\u5de5\u7a0b\u8fd0\u884c"},"\u5b9e\u4f8b\u5de5\u7a0b\u8fd0\u884c"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"yarn example android\nyarn example ios\n\n# \u542f\u52a8\u670d\u52a1\nyarn example start\n\n")))}u.isMDXComponent=!0}}]);