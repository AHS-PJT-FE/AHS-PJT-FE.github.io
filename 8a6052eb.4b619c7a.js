(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{113:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(t),m=r,d=b["".concat(c,".").concat(m)]||b[m]||s[m]||l;return t?a.a.createElement(d,o(o({ref:n},p),{},{components:t})):a.a.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<l;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),l=(t(0),t(113)),c=["components"],o={id:"GettingStarted",title:"\u5165\u95e8"},i={unversionedId:"GettingStarted",id:"GettingStarted",isDocsHomePage:!1,title:"\u5165\u95e8",description:"\u73af\u5883\u914d\u7f6e",source:"@site/docs/GettingStarted.md",slug:"/GettingStarted",permalink:"/docs/GettingStarted",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/GettingStarted.md",version:"current",sidebar:"docs",previous:{title:"\u6587\u6863\u53d1\u5e03\u6d41\u7a0b",permalink:"/docs/"},next:{title:"Badge",permalink:"/docs/badge"}},p=[{value:"\u73af\u5883\u914d\u7f6e",id:"\u73af\u5883\u914d\u7f6e",children:[]},{value:"\u5b9e\u4f8b\u5de5\u7a0b\u8fd0\u884c",id:"\u5b9e\u4f8b\u5de5\u7a0b\u8fd0\u884c",children:[]}],u={toc:p};function b(e){var n=e.components,t=Object(a.a)(e,c);return Object(l.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"\u73af\u5883\u914d\u7f6e"},"\u73af\u5883\u914d\u7f6e"),Object(l.b)("p",null,"\u5b89\u88c5 nvm "),Object(l.b)("p",null,"\u5b89\u88c5\u547d\u4ee4 "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-curl",metastring:"-o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash","-o-":!0,"https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh":!0,"|":!0,bash:!0},"")),Object(l.b)("p",null,"\u4f7f\u7528\u547d\u4ee4  ",Object(l.b)("inlineCode",{parentName:"p"},"nvm ls")),Object(l.b)("p",null,"\u67e5\u770b\u4f7f\u7528\u7684 node \u7248\u672c\u662f\u5426\u662fv12.18.2"),Object(l.b)("p",null,"node \u7248\u672c v12.18.2"),Object(l.b)("h4",{id:"\u5b89\u88c5-nrm-\u8fdb\u884cnpm-\u6e90\u7ba1\u7406"},"\u5b89\u88c5 nrm \u8fdb\u884cnpm \u6e90\u7ba1\u7406"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"npm install -g nrm\n")),Object(l.b)("p",null,"\u67e5\u770b nrm \u6e90"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"nrm ls\n")),Object(l.b)("p",null,"\u6dfb\u52a0\u7231\u56de\u6536\u79c1\u6709\u6e90"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"nrm add aihuishou http://121.43.178.15:5000/\n")),Object(l.b)("p",null,"\u5207\u6362\u5230\u7231\u56de\u6536\u79c1\u6709\u6e90"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"nrm use aihuishou\n")),Object(l.b)("p",null,"npm \u767b\u5f55\u79c1\u6709\u6e90\u8d26\u53f7"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"npm login\n")),Object(l.b)("p",null,"\u8f93\u5165\u8d26\u53f7 zhanghao\n\u8f93\u5165\u5bc6\u7801 zhanghao2202\n\u8f93\u5165\u90ae\u7bb1 \uff08\u90ae\u7bb1\u4e3a\u516c\u53f8\u90ae\u7bb1\uff09eg ",Object(l.b)("a",{parentName:"p",href:"mailto:xuewu.yang@aihuisou.com"},"xuewu.yang@aihuisou.com")),Object(l.b)("h4",{id:"\u5b89\u88c5-lerna"},"\u5b89\u88c5 lerna"),Object(l.b)("p",null,"Lerna \u662f\u4e00\u79cd\u5de5\u5177\uff0c\u9488\u5bf9 \u4f7f\u7528 git \u548c npm \u7ba1\u7406\u591a\u8f6f\u4ef6\u5305\u4ee3\u7801\u4ed3\u5e93\u7684\u5de5\u4f5c\u6d41\u7a0b\u8fdb\u884c\u4f18\u5316."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"npm install --global lerna\n")),Object(l.b)("h4",{id:"\u5b89\u88c5-luban-\u4f9d\u8d56"},"\u5b89\u88c5 luban \u4f9d\u8d56"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"yarn bootstrap\n")),Object(l.b)("h3",{id:"\u5b9e\u4f8b\u5de5\u7a0b\u8fd0\u884c"},"\u5b9e\u4f8b\u5de5\u7a0b\u8fd0\u884c"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"yarn example android\nyarn example ios\n\n#\u6ce8\u610f\u82e5\u662f\u9047\u5230ios \u5e93pod install \u5931\u8d25 \u5c31\u8fdb\u5165\u5230 ios \u76ee\u5f55 \u6267\u884c pod install\n\n# \u542f\u52a8\u670d\u52a1\nyarn example start\n\n")))}b.isMDXComponent=!0}}]);