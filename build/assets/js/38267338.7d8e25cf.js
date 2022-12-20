"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[2539],{3905:(t,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>f});var r=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var u=r.createContext({}),c=function(t){var e=r.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):s(s({},e),t)),o},l=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,i=t.originalType,u=t.parentName,l=a(t,["components","mdxType","originalType","parentName"]),d=c(o),f=n,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return o?r.createElement(m,s(s({ref:e},l),{},{components:o})):r.createElement(m,s({ref:e},l))}));function f(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=o.length,s=new Array(i);s[0]=d;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:n,s[1]=a;for(var c=2;c<i;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},36917:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const i={title:"Buf Studio",sidebar_position:1},s=void 0,a={unversionedId:"grpc/interact-grpc-buf-studio",id:"grpc/interact-grpc-buf-studio",title:"Buf Studio",description:"Interacting with Buf Studio",source:"@site/docs/apis/grpc/interact-grpc-buf-studio.mdx",sourceDirName:"grpc",slug:"/grpc/interact-grpc-buf-studio",permalink:"/apis/grpc/interact-grpc-buf-studio",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/apis/grpc/interact-grpc-buf-studio.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Buf Studio",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Interacting with gRPC",permalink:"/apis/grpc/"},next:{title:"gRPCurl",permalink:"/apis/grpc/interact-grpc-curl"}},u={},c=[{value:"Interacting with Buf Studio",id:"interacting-with-buf-studio",level:2},{value:"How does buf Studio work with Osmosis",id:"how-does-buf-studio-work-with-osmosis",level:4},{value:"Composing requests",id:"composing-requests",level:4}],l={toc:c};function p(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,r.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"interacting-with-buf-studio"},"Interacting with Buf Studio"),(0,n.kt)("p",null,"An interactive web UI for all the gRPC and Protobuf services stored on the ",(0,n.kt)("a",{parentName:"p",href:"https://buf.build/osmosis-labs/osmosis"},"Osmosis Buf Schema Registry")),(0,n.kt)("p",null,"Studio preconfigured with the mainnet RPC:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://studio.buf.build/osmosis-labs/osmosis/osmosis.epochs.v1beta1.Query/EpochInfos?target=http%3A%2F%2Fgrpc.osmosis.zone%3A9090&selectedProtocol=grpc&agentUrl=https%3A%2F%2Fbuf.osmosis.zone&share=AQQA%2B%2F86Ant9"},"Launch Buf Studio on mainnet RPC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://studio.buf.build/osmosis-labs/osmosis/osmosis.epochs.v1beta1.Query/EpochInfos?target=http%3A%2F%2Fgrpc.dev-osmosis.zone%3A443&selectedProtocol=grpc&agentUrl=https%3A%2F%2Fbuf.osmosis.zone&share=AQQA%2B%2F86Ant9"},"Launch Buf Studio on testnet RPC"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(11901).Z,width:"2032",height:"1458"})),(0,n.kt)("p",null,"Things you can do with buf Studio: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select an endpoint from any BSR module to send requests to  gRPC"),(0,n.kt)("li",{parentName:"ul"},"Use the editor with schema-based autocompletion, validation and documentation to draft JSON based request messages."),(0,n.kt)("li",{parentName:"ul"},"Configure headers to further customize outgoing requests."),(0,n.kt)("li",{parentName:"ul"},"Optionally include cookies in outgoing request to send authenticated requests to private APIs (or Buf Studio Agent instances)."),(0,n.kt)("li",{parentName:"ul"},"Create shareable links for requests defined on Buf Studio to team members with access.")),(0,n.kt)("h4",{id:"how-does-buf-studio-work-with-osmosis"},"How does buf Studio work with Osmosis"),(0,n.kt)("p",null,"We have a Buf agent running at ",(0,n.kt)("a",{parentName:"p",href:"https://buf.osmosis.zone"},"https://buf.osmosis.zone")," which will allow you to use the buf data studio to explore the available methods. "),(0,n.kt)("h4",{id:"composing-requests"},"Composing requests"))}p.isMDXComponent=!0},11901:(t,e,o)=>{o.d(e,{Z:()=>r});const r=o.p+"assets/images/buf-30f670d272afadd5289a696df0b9f587.png"}}]);