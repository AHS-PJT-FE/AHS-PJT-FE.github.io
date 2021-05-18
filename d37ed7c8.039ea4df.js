(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(110)),i={id:"refreshWrapper",title:"RefreshWrapper"},c={unversionedId:"refreshWrapper",id:"refreshWrapper",isDocsHomePage:!1,title:"RefreshWrapper",description:"\u80cc\u666f",source:"@site/docs/refreshWrapper-doc.md",slug:"/refreshWrapper",permalink:"/docs/refreshWrapper",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/refreshWrapper-doc.md",version:"current",sidebar:"docs",previous:{title:"\u62cd\u573a\u6a21\u677f\u7ec4\u4ef6",permalink:"/docs/auctionScreenTemplate"}},p=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[]},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[]}],s={toc:p};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u80cc\u666f"},"\u80cc\u666f"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"1\u3001\u76ee\u524d\u9879\u76ee\u4e2d\u4f7f\u7528focus\u3001blur\u7684\u65b9\u5f0f\u7e41\u7410\u4e0d\u7edf\u4e00\uff0c\u6709\u7684\u9875\u9762\u8fd8\u5728\u4f7f\u7528\u8001\u7684willFocus\u3001willBlur\u7684API\u5bfc\u81f4\u4e0d\u53ef\u63a7\u7684bug\u51fa\u73b0"),Object(a.b)("p",{parentName:"blockquote"},"2\u3001\u5728\u6df7\u5408\u6808\u7684\u6a21\u5f0f\u4e0b\uff0c\u5f53RN\u8df3\u8f6c\u81f3Native\u7684\u9875\u9762\u540e\u4ecenative\u9875\u9762\u56de\u9000\u5230RN\u9875\u9762\u65f6\u4f1a\u51fa\u73b0\u65e0\u6cd5\u83b7\u53d6\u56de\u9000\u4e8b\u4ef6\u7684\u60c5\u51b5\uff0c\u9020\u6210\u65e0\u6cd5\u5237\u65b0\u9875\u9762\uff0c\u6b64\u65f6\u9700\u8981\u4ecenative\u9875\u9762\u53d1\u9001\u901a\u77e5\u5230RN\u9875\u9762\u6bd4\u8f83\u7e41\u7410")),Object(a.b)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),Object(a.b)("p",null,"Component\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"),Object(a.b)("p",null,"1\u3001Component\u7ee7\u627fCommonPage\uff0cCommonPage\u4e2d\u8fdb\u884c\u4e86\u5b50view\u7684\u7ed1\u5b9a\u4ee5\u53ca\u5982\u4e0b3\u4e2d\u751f\u547d\u5468\u671f\u8c03\u7528\u7684\u65b9\u6cd5\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"constructor(props)\n{\n  super(props);\n  /**\n   * \u81ea\u52a8\u7ed1\u5b9a\u5b50view\u4f9d\u8d56\u7b80\u5316\u5237\u65b0\u63a5\u5165\u6d41\u7a0b\n   */\n  if (props.onRef) {\n    props.onRef(this);\n  }\n  this.bus = new EventBus();\n  this.setOptions();\n}\n\n/**\n * \u5b50view\u7ee7\u627f\u6b64\u51fd\u6570\u53ef\u83b7\u5f97native\u8df3\u56de\u9875\u9762\u662f\u5237\u65b0\n */\nnativeRefreshPage(){}\n\n/**\n * \u5b50view\u7ee7\u627f\u6b64\u51fd\u6570\u53ef\u83b7\u5f97RN\u6808\u8df3\u56defocus\u5237\u65b0\n */\nfocusRefreshPage(e:any){}\n\n/**\n * \u5b50view\u7ee7\u627f\u6b64\u51fd\u6570\u53ef\u83b7\u5f97RN\u5931\u53bb\u7126\u70b9blur\u5237\u65b0\n */\nblurRefreshPage(e:any){}\n")),Object(a.b)("p",null,"2\u3001\u6839\u636e\u9700\u6c42\u9009\u62e9\u81ea\u5df1\u9700\u8981\u590d\u5199\u7684\u65b9\u6cd5\uff0c\u4ee5\u4eac\u4e1c\u8f6c\u5356\u4e3a\u4f8b\u5177\u4f53\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'/**\n * \u5728\u9875\u9762\u83b7\u53d6\u7126\u70b9\u65f6\u8c03\u7528\n */\nfocusRefreshPage(e:any) {\n  super.focusRefreshPage(e);\n  const {getLimitInfo} = this.publicAuctionStore;\n  this.props.limitInfo.isNewMerchant && getLimitInfo();\n  if (!this.publicAuctionStore.scrollInitY) {\n    this.publicAuctionStore.initScroll();\n  }\n  !this.socket && this.initSocket();\n  this.updateItems();\n  Platform.OS == "ios" &&\n  OptNativeModule.ifReactNativeStatusBarLight &&\n  OptNativeModule.ifReactNativeStatusBarLight(true);\n}\n\n/**\n * \u5728\u9875\u9762\u5931\u53bb\u7126\u70b9\u65f6\u8c03\u7528\n */\nblurRefreshPage(e:any){\n  super.blurRefreshPage(e);\n  Platform.OS == "ios" &&\n  OptNativeModule.ifReactNativeStatusBarLight &&\n  OptNativeModule.ifReactNativeStatusBarLight(false);\n  this.publicAuctionStore.hideToolTip();\n}\n\n/**\n * native\u9875\u9762\u56de\u9000\u5230\u5f53\u524d\u9875\u9762\u65f6\u8c03\u7528\n */\nnativeRefreshPage(){\n  super.nativeRefreshPage();\n}\n\n/**\n * \u5bf9\u539f\u6709\u7684Component\u8fdb\u884c\u5bfc\u51fa\u64cd\u4f5c\n */\nexport default RefreshWrapper(PublicAuction);\n')),Object(a.b)("p",null,"React-Hooks\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"),Object(a.b)("p",null,"1\u3001\u5728hook\u7ec4\u4ef6\u7684\u6700\u4e0a\u5c42\u8c03\u7528RefreshWrapperHook\u65b9\u6cd5\uff0cRefreshWrapperHook\u53c2\u6570\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"interface RefreshWrapperHookProps {\n  /**\n   * \u5b50view\u7ee7\u627f\u6b64\u51fd\u6570\u53ef\u83b7\u5f97native\u8df3\u56de\u9875\u9762\u662f\u5237\u65b0\n   * \u4f20\u5165\u7c7b\u578b\u4e3a\uff1a()=>{}\n   */\n  nativeRefreshPage?: any;\n  /**\n   * \u5b50view\u7ee7\u627f\u6b64\u51fd\u6570\u53ef\u83b7\u5f97RN\u6808\u8df3\u56defocus\u5237\u65b0\n   * \u4f20\u5165\u7c7b\u578b\u4e3a\uff1a(event)=>{}\n   */\n  focusRefreshPage?: any;\n  /**\n   * \u5b50view\u7ee7\u627f\u6b64\u51fd\u6570\u53ef\u83b7\u5f97RN\u5931\u53bb\u7126\u70b9blur\u5237\u65b0\n   * \u4f20\u5165\u7c7b\u578b\u4e3a\uff1a(event)=>{}\n   */\n  blurRefreshPage?: any;\n  /**\n   * \u9875\u9762\u8def\u7531\u540d\u79f0\n   * \u83b7\u53d6\u65b9\u5f0f\uff1aprops.route.name\n   */\n  routeName?: String;\n}\n")),Object(a.b)("p",null,"2\u3001\u5728hook\u7ec4\u4ef6\u7684\u6700\u4e0a\u5c42\u8c03\u7528RefreshWrapperHook\u65b9\u6cd5\u65b9\u5f0f\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'export default function TestWrapperHook(props: any) {\n  /**\n   * \u4ee5\u81ea\u5b9a\u4e49hook\u7684\u65b9\u5f0f\u5bfc\u5165\n   */\n  RefreshWrapperHook({\n    nativeRefreshPage: () => {\n      console.log("\\n\\n\\n\\n============= nativeRefreshPage =============\\n\\n\\n\\n");\n    },\n    focusRefreshPage: e => {\n      console.log("\\n\\n\\n\\n============= focusRefreshPage =============\\n\\n\\n\\n");\n    },\n    blurRefreshPage: e => {\n      console.log("\\n\\n\\n\\n============= blurRefreshPage =============\\n\\n\\n\\n");\n    },\n    routeName: props.route.name\n  });\n  return (\n    <SafeAreaView>\n      <TouchableOpacity\n        style={{ marginTop: 100 }}\n        onPress={() => {\n          navigator.pagePush(props.navigation, "DarkAuctionList");\n        }}\n      >\n        <Text>test page </Text>\n      </TouchableOpacity>\n   </SafeAreaView>\n );\n}\n\n')))}u.isMDXComponent=!0},110:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),b=r,h=l["".concat(i,".").concat(b)]||l[b]||f[b]||a;return t?o.a.createElement(h,c(c({ref:n},s),{},{components:t})):o.a.createElement(h,c({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);