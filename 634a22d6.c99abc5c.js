(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{107:function(A,e,g){"use strict";g.d(e,"a",(function(){return i})),g.d(e,"b",(function(){return c}));var t=g(0),n=g.n(t);function B(A,e,g){return e in A?Object.defineProperty(A,e,{value:g,enumerable:!0,configurable:!0,writable:!0}):A[e]=g,A}function r(A,e){var g=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),g.push.apply(g,t)}return g}function o(A){for(var e=1;e<arguments.length;e++){var g=null!=arguments[e]?arguments[e]:{};e%2?r(Object(g),!0).forEach((function(e){B(A,e,g[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(g)):r(Object(g)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(g,e))}))}return A}function d(A,e){if(null==A)return{};var g,t,n=function(A,e){if(null==A)return{};var g,t,n={},B=Object.keys(A);for(t=0;t<B.length;t++)g=B[t],e.indexOf(g)>=0||(n[g]=A[g]);return n}(A,e);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(A);for(t=0;t<B.length;t++)g=B[t],e.indexOf(g)>=0||Object.prototype.propertyIsEnumerable.call(A,g)&&(n[g]=A[g])}return n}var Q=n.a.createContext({}),a=function(A){var e=n.a.useContext(Q),g=e;return A&&(g="function"==typeof A?A(e):o(o({},e),A)),g},i=function(A){var e=a(A.components);return n.a.createElement(Q.Provider,{value:e},A.children)},E={inlineCode:"code",wrapper:function(A){var e=A.children;return n.a.createElement(n.a.Fragment,{},e)}},f=n.a.forwardRef((function(A,e){var g=A.components,t=A.mdxType,B=A.originalType,r=A.parentName,Q=d(A,["components","mdxType","originalType","parentName"]),i=a(g),f=t,c=i["".concat(r,".").concat(f)]||i[f]||E[f]||B;return g?n.a.createElement(c,o(o({ref:e},Q),{},{components:g})):n.a.createElement(c,o({ref:e},Q))}));function c(A,e){var g=arguments,t=e&&e.mdxType;if("string"==typeof A||t){var B=g.length,r=new Array(B);r[0]=f;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=A,o.mdxType="string"==typeof A?A:t,r[1]=o;for(var Q=2;Q<B;Q++)r[Q]=g[Q];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,g)}f.displayName="MDXCreateElement"},155:function(A,e,g){"use strict";g.r(e),e.default="data:image/png;base64,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"},156:function(A,e,g){"use strict";g.r(e),e.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAEyCAYAAAAMZyIjAAAJLElEQVR4Xu3dz6seVx3H8VgJJKtAuyhWXQjFvYJ/QBdd+A9ofgjSolXJotSNLty0BNFlcOEybgKCFt0KiljQtT/w16KEWjQlTUo090xubgzH+c60C+de6U2aXGc+vAZe8GSemXPO7s1M7jxzbBiGDgBs27HlDgBgewQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0CHN7dt92N3tw5137b3rvX/Xd3XM8jxg0wQdElSgK9r/3uvDzX/14e9v9+Gvb/bhD1f68NvXZ/W59tV3dUwdW+eIO0QQdNi6u3fmK+8rV/vw89/14Ts/7cMXLvb2qW/09tGv9vaR52b1edxX303H1LF1Tp1bYyzHBTZF0GGr6sr63t4c5R/8srezY8Q/Nkb71LneTpzp7cOnezv2+f9W++q7OqaOHc+pc6cxaixX67BZgg5bVOHd2enD5dd6e/aV3p4Yr8BPHhDw91Pn1LnjGDXWNKaowyYJOmxNBff6zd4uvNrb0+d7O35AqO9XjVFjjWPW2KIO2yPosCUV2mvv9PbSpd6eeqG3Dx0Q5wdVY9WY49g1h6jDtgg6bMXuGNgbN+eYP/7lMcIPcIv9fZ2ex66oj3NNcy7XAaySoMMW1NXyrVu9feuHY3Cfn8O7L8YPS0X9+WmumtOVOmyDoMMW3Lvbh8u/6u0T53t7bBngR6DmGOeqOae5l+sBVkfQYe3qGfErV3t75uXejn9uf3wflZprnHN6pM1z6rB6gg5rVre764df6jnzJ784hvYIg15zjXNOz6nXGtx6h1UTdFiz+mnWujo/c7G3E4/y/83/h5pznHu6Sq+1LNcHrIagw5rV763/4ve9ffxrD/cRtcOqOce5aw3TWpbrA1ZD0GHN/nmrD9/9SW+nzu6P7VEZ5641TGtZrg9YDUGHtbo9uvp2H6bb7Wf2h/aojHPXGqa11JqW6wRWQdBhreq95a//Y35r2kEvWjkqNXe9pW1cy7Sm5TqBVRB0WKuK51/enN+KtozsURvXUGsRdFgvQYe1qkfF/vjG/C7zZWCP2riGWsu0puU6gVUQdFgrQQfug6DDWrnlDtwHQYe18kdxwH0QdFirekTsret9OPe93k7+Hx9bG+euNUxr8dgarJagw5r5YRngkAQd1sxPvwKHJOiwZl7OAhySoMOaeX0qcEiCDmt39858lf7My70dP8Kg11zjnNPVea1huS5gVQQdtuDeXh9+9OvePvlib48dEN+HreYY56o5p7mX6wFWR9BhC+p2962d3i78uLcnvzJG91H+f/rpeY5xrprTrXbYBkGHrdgdw3rjZm8vXert8S/N4d0X4w/q9Dz2OEfNNc25XAewSoIOW1JXy9femaP+1AsP91G2GqvGrJiPc7gyh20RdNiaCu318Ur9wqu9PX2+t+MHxPl+1Rg11jhmjS3msD2CDltUwd3Z6cPl13p79pXenniut5MPcAu+zqlzxzFqrGlMMYdNEnTYqgpv/QV6PVZWz6mfvTi/me3Uud5OnDn4hS61r76rY+rY8ZzpOfMao8YSc9gsQYet27sz//DL36714Td/7sP3f9aHFy/19tlv9/aZb/b26a/P6vO4r76bjqlj65w6t8ZYjgtsiqBDgrqyrp9mvbs3v0TlrRvz607rHeZ/emNWn2tffVfH1LF1jqtyiCDokKgeN5vszlfgpT6/t395PLB5gg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABDg2G2bzWaz2Wyb3/4DKPQaarzoicYAAAAASUVORK5CYII="},82:function(A,e,g){"use strict";g.r(e),g.d(e,"frontMatter",(function(){return r})),g.d(e,"metadata",(function(){return o})),g.d(e,"toc",(function(){return d})),g.d(e,"default",(function(){return a}));var t=g(3),n=g(7),B=(g(0),g(107)),r={id:"badge",title:"Badge"},o={unversionedId:"badge",id:"badge",isDocsHomePage:!1,title:"Badge",description:"badge \u662f\u4e00\u4e2a\u72b6\u6001\uff0c\u4ed6\u6709\u4e09\u79cd\u7c7b\u578b\uff0c\u4e00\u4e2a\u6570\u5b57\u6216\u8005\u4e00\u4e2a\u5c0f\u5706\u70b9\uff0c\u4e00\u822c\u4f1a\u51fa\u73b0\u518d\u4e00\u4e2a\u56fe\u6807\u7684\u53f3\u4e0a\u89d2\u3002",source:"@site/docs/badge-doc.md",slug:"/badge",permalink:"/docs/badge",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/badge-doc.md",version:"current",sidebar:"docs",previous:{title:"\u5165\u95e8",permalink:"/docs/GettingStarted"},next:{title:"Theme",permalink:"/docs/theme"}},d=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[]},{value:"Props",id:"props",children:[]}],Q={toc:d};function a(A){var e=A.components,r=Object(n.a)(A,["components"]);return Object(B.b)("wrapper",Object(t.a)({},Q,r,{components:e,mdxType:"MDXLayout"}),Object(B.b)("p",null,"badge \u662f\u4e00\u4e2a\u72b6\u6001\uff0c\u4ed6\u6709\u4e09\u79cd\u7c7b\u578b\uff0c\u4e00\u4e2a\u6570\u5b57\u6216\u8005\u4e00\u4e2a\u5c0f\u5706\u70b9\uff0c\u4e00\u822c\u4f1a\u51fa\u73b0\u518d\u4e00\u4e2a\u56fe\u6807\u7684\u53f3\u4e0a\u89d2\u3002"),Object(B.b)("p",null,Object(B.b)("img",{alt:"badge with content",src:g(155).default})),Object(B.b)("p",null,Object(B.b)("img",{alt:"badge without content",src:g(156).default})),Object(B.b)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),Object(B.b)("pre",null,Object(B.b)("code",{parentName:"pre",className:"language-typescript"},' <View>\n      <View style={{flexDirection:"row",padding:12}}>\n        <Badge size={28} >17</Badge>\n      </View>\n\n    <View style={{flexDirection:"row",padding:12}}>\n      <Badge size={28}>1</Badge>\n    </View>\n\n      <View style={{flexDirection:"row",padding:12}}>\n        <Badge size={28}>100</Badge>\n      </View>\n\n      <View style={{flexDirection:"row",padding:12}}>\n        <Badge size={28}>0</Badge>\n      </View>\n\n      <View style={{flexDirection:"row",padding:12}}>\n        <Badge size={28} type={\'dot\'}>1</Badge>\n      </View>\n\n      <View style={{flexDirection:"row",padding:12}}>\n        <Badge size={28} type={\'outline\'}>1</Badge>\n      </View>\n\n      <View style={{flexDirection:"row",padding:12}}>\n        <Badge size={28} type={\'outline\'}>100</Badge>\n      </View>\n\n      <View style={{flexDirection:"row",padding:12}}>\n        <Badge size={28} type={\'outline\'}>17</Badge>\n      </View>\n    </View>\n')),Object(B.b)("h3",{id:"props"},"Props"),Object(B.b)("h4",{id:"children-number"},"children: number;"),Object(B.b)("p",null,"\u8fd9\u4e2a\u662f\u6570\u5b57\u503c\uff0c\u5982\u679c\u4e3a0\u6216\u8005 undefined \u6216\u8005 null \u5c31\u4f1a\u9690\u85cf badge\u3002"),Object(B.b)("h4",{id:"size-number"},"size: number;"),Object(B.b)("p",null,"\u9ed8\u8ba4\u503c\uff1a24\n\u8fd9\u4e2a\u662f badge \u7684\u5927\u5c0f\u3002\u6587\u6848\u5927\u5c0f\u662f badge \u5927\u5c0f\u76843/4"),Object(B.b)("h4",{id:"type-outline--solid--dot"},'type?: "outline" | "solid" | "dot";'),Object(B.b)("p",null,"\u9ed8\u8ba4\u503c:solid"),Object(B.b)("p",null,"badge\u6837\u5f0f\uff1aoutline \u662f\u5916\u8fb9\u6846\u6837\u5f0f\uff0csolid \u662f\u586b\u5145\u7684\u6837\u5f0f\uff0cdot \u662f\u70b9\u70b9\u7684\u6837\u5f0f"),Object(B.b)("h4",{id:"maxsize-number"},"maxSize?: number;"),Object(B.b)("p",null,"\u9ed8\u8ba4\u503c:99\n\u8d85\u8fc7\u8fd9\u4e2a\u503c\u7684\u8bdd\u5c31\u4f1a\u663e\u793a maxSize+ \u4f8b\u598299+"),Object(B.b)("h4",{id:"theme-theme"},"theme?: Theme;"),Object(B.b)("p",null,"\u4e3b\u9898"),Object(B.b)("h4",{id:"textstyle-textstyle"},"textStyle?: TextStyle;"),Object(B.b)("p",null,"\u6587\u5b57\u6837\u5f0f"),Object(B.b)("h4",{id:"ref"},"ref"),Object(B.b)("p",null,"\u5f15\u7528"))}a.isMDXComponent=!0}}]);