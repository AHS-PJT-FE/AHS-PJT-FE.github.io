(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{112:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),l=u(t),m=r,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||i;return t?o.a.createElement(f,p(p({ref:n},s),{},{components:t})):o.a.createElement(f,p({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<i;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},168:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/ic_inspection-391b07adc6fd1e1f1362e4c0822aa69d.png"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return a})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),i=(t(0),t(112)),c={id:"inspectionReport",title:"InspectionReport"},p={unversionedId:"inspectionReport",id:"inspectionReport",isDocsHomePage:!1,title:"InspectionReport",description:"InspectionReport \u8d28\u68c0\u62a5\u544a\u7ec4\u4ef6\uff0c\u53ef\u901a\u8fc7\u7b97\u6cd5\u52a8\u6001\u6392\u5e8f\u5df2\u8fbe\u5230\u6700\u5c11\u7a7a\u95f4\u5185\u5c55\u793a\u5185\u5bb9\u6700\u591a\uff1b",source:"@site/docs/inspectionReport-doc.md",slug:"/inspectionReport",permalink:"/docs/inspectionReport",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/inspectionReport-doc.md",version:"current",sidebar:"docs",previous:{title:"RefreshWrapper",permalink:"/docs/refreshWrapper"},next:{title:"Android\u8fde\u7eed\u62cd\u7167SDK\u63a5\u5165\u6587\u6863",permalink:"/docs/continuouscamerataker"}},a=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[]},{value:"\u5177\u4f53\u53c2\u6570",id:"\u5177\u4f53\u53c2\u6570",children:[]}],s={toc:a};function u(e){var n=e.components,c=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,c,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"InspectionReport \u8d28\u68c0\u62a5\u544a\u7ec4\u4ef6\uff0c\u53ef\u901a\u8fc7\u7b97\u6cd5\u52a8\u6001\u6392\u5e8f\u5df2\u8fbe\u5230\u6700\u5c11\u7a7a\u95f4\u5185\u5c55\u793a\u5185\u5bb9\u6700\u591a\uff1b"),Object(i.b)("p",null,Object(i.b)("img",{alt:"inspection",src:t(168).default})),Object(i.b)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},' <InspectionReport\n  dataList = {data}\nwarnIcon = {require("../../images/ic_inspection_warn.png"\n)\n}\npicIcon = {require("../../images/ic_inspection_pic.png"\n)\n}\nnormalIcon = {require("../../images/toBuySuccessIcon.png"\n)\n}\nonPicClick = {(inspection\n:\nInspectionReportItemData\n) =>\n{\n  console.log("picList", inspection.id);\n}\n}\n/>\n')),Object(i.b)("h3",{id:"\u5177\u4f53\u53c2\u6570"},"\u5177\u4f53\u53c2\u6570"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"\n// props\u53c2\u6570\ninterface InspectionReportProp {\n  dataList: Array<InspectionReportData>; // \u8d28\u68c0\u62a5\u544a\u5217\u8868\u6570\u636e\n  warnIcon: ImageSourcePropType; // \u5f02\u5e38\u9879\u6309\u94ae\n  normalIcon: ImageSourcePropType; // \u6b63\u5e38\u9879\u6309\u94ae\n  picIcon: ImageSourcePropType; // \u8d28\u68c0\u62a5\u544a\u56fe\u7247\u6309\u94ae\n  onPicClick?: (inspectionReportItemData?: InspectionReportItemData) => void; // \u56fe\u7247\u70b9\u51fb\u56de\u8c03\n  marginHorizontal: number; // \u8d28\u68c0\u62a5\u544a\u5de6\u53f3\u8fb9\u8ddd\n}\n\n// \u8d28\u68c0\u62a5\u544a\u5217\u8868\u6570\u636e\u7ed3\u6784\nexport type InspectionReportData = {\n  dataItem: Array<InspectionReportItemData>; // ppv\u5217\u8868\u6570\u636e\n  title: string; // ppn \u540d\u79f0\n};\n\n// ppv\u5217\u8868\u6570\u636e\nexport type InspectionReportItemData = {\n  id: string;  // ppv ID \n  name: string; // ppv\u540d\u79f0\n  picList?: Array<string>; // \u56fe\u7247\u5217\u8868\n  type: number; // ppv\u7c7b\u578b\uff0c\u662f\u5426\u5f02\u5e38\u9879; 1 - \u5f02\u5e38\u9879 0 - \u6b63\u5e38\u9879\n  sort: number; // \u6392\u5e8f\u5b57\u6bb5\uff0c\u662f\u5426\u4f18\u5148\u5c55\u793a; 1 - \u4f18\u5148\u5c55\u793a 0 - \u6b63\u5e38\u6392\u5e8f\n};\n")))}u.isMDXComponent=!0}}]);