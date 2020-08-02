(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(2),o=n(6),a=(n(0),n(185)),c=n(191),i=n(192),s={id:"third-party-typescript",title:"TypeScript",sidebar_label:"TypeScript"},p={id:"third-party-typescript",isDocsHomePage:!1,title:"TypeScript",description:"Strongly typed components",source:"@site/docs/third-party-typescript.mdx",permalink:"/react-native-navigation/docs/third-party-typescript",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/third-party-typescript.mdx",sidebar_label:"TypeScript",sidebar:"docs",previous:{title:"Community libraries",permalink:"/react-native-navigation/docs/community-libraries"},next:{title:"MobX",permalink:"/react-native-navigation/docs/third-party-mobx"}},l=[{value:"Strongly typed components",id:"strongly-typed-components",children:[]},{value:"Typed props in commands",id:"typed-props-in-commands",children:[]}],u={rightToc:l};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"strongly-typed-components"},"Strongly typed components"),Object(a.b)("p",null,"Both functional and class components can be typed to get the benefits of strongly typed options and props."),Object(a.b)(c.a,{defaultValue:"clazz",values:[{label:"Class Component",value:"clazz"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"clazz",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import { NavigationComponent } from 'react-native-navigation';\n\ninterface Props extends NavigationComponentProps {\n  age: number\n}\n\nexport default class MyComponent extends NavigationComponent<Props> {\n  // Options are strongly typed\n  static options() {\n    return {\n      statusBar: {\n        // Some options are of union type. We're using `as const` to let the-\n        // TS compiler know this value is not a regular string\n        style: 'dark' as const,\n      },\n      topBar: {\n        title: {\n          text: 'My Screen',\n        }\n      };\n    }\n  }\n\n  constructor(props: Props) {\n    super(props);\n  }\n}\n"))),Object(a.b)(i.a,{value:"functional",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import { NavigationFunctionComponent } from 'react-native-navigation';\n\ninterface Props {\n  name: string;\n}\n\nconst MyFunctionalComponent: NavigationFunctionComponent<Props> = ({ componentId, name }) => {\n  return <View />;\n};\n\n// Static options are also supported!\nMyFunctionalComponent.options = {\n  topBar: {\n    title: {\n      text: 'Hello functional component',\n    },\n  },\n};\nexport default MyFunctionalComponent;\n")))),Object(a.b)("h2",{id:"typed-props-in-commands"},"Typed props in commands"),Object(a.b)("p",null,"Arguments are passed to components view the ",Object(a.b)("inlineCode",{parentName:"p"},"passProp"),". This is a common source for errors as these props tend to change overtime. Luckily we can type the passProps property to avoid these regressions. The example below shows how to declare types for passProps when pushing a screen."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"class Props: {\n  name: string\n}\n\nNavigation.push<Props>(componentId, {\n  component: {\n    name: 'MyComponent',\n    passProps: {\n      name: 'Bob',\n      color: 'red', // Compilation error! color isn't declared in Props\n    }\n  }\n});\n")),Object(a.b)("p",null,"The following commands accept typed passProps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"push"),Object(a.b)("li",{parentName:"ul"},"setStackRoot"),Object(a.b)("li",{parentName:"ul"},"showModal"),Object(a.b)("li",{parentName:"ul"},"showOverlay")))}m.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return n?o.a.createElement(d,i(i({ref:t},p),{},{components:n})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},187:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},188:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=o},189:function(e,t,n){"use strict";var r=n(0),o=n(188);t.a=function(){return Object(r.useContext)(o.a)}},191:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(189),c=n(187),i=n(92),s=n.n(i);const p=37,l=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:u,groupId:m}=e,{tabGroupChoices:b,setTabGroupChoices:d}=Object(a.a)(),[y,f]=Object(r.useState)(i);if(null!=m){const e=b[m];null!=e&&e!==y&&u.some(t=>t.value===e)&&f(e)}const v=e=>{f(e),null!=m&&d(m,e)},g=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},u.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":y===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case l:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case p:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),onFocus:()=>v(e),onClick:()=>v(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===y)[0]))}},192:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);