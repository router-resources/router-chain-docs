"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[350],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),d=m(a),c=i,u=d["".concat(o,".").concat(c)]||d[c]||s[c]||r;return a?n.createElement(u,p(p({ref:t},k),{},{components:a})):n.createElement(u,p({ref:t},k))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,p=new Array(r);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var m=2;m<r;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50550:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const r={},p="beaker wasm",l={unversionedId:"commands/beaker_wasm",id:"commands/beaker_wasm",title:"beaker wasm",description:"Manipulating and interacting with CosmWasm contract",source:"@site/docs/beaker/commands/beaker_wasm.md",sourceDirName:"commands",slug:"/commands/beaker_wasm",permalink:"/beaker/commands/beaker_wasm",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/beaker/commands/beaker_wasm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"beaker key",permalink:"/beaker/commands/beaker_key"},next:{title:"beaker wasm proposal",permalink:"/beaker/commands/beaker_wasm_proposal"}},o={},m=[{value:"Subcommands",id:"subcommands",level:2},{value:"<code>beaker wasm new</code>",id:"beaker-wasm-new",level:3},{value:"<code>beaker wasm build</code>",id:"beaker-wasm-build",level:3},{value:"<code>beaker wasm store-code</code>",id:"beaker-wasm-store-code",level:3},{value:"<code>beaker wasm ts-gen</code>",id:"beaker-wasm-ts-gen",level:3},{value:"<code>beaker wasm update-admin</code>",id:"beaker-wasm-update-admin",level:3},{value:"<code>beaker wasm clear-admin</code>",id:"beaker-wasm-clear-admin",level:3},{value:"<code>beaker wasm instantiate</code>",id:"beaker-wasm-instantiate",level:3},{value:"<code>beaker wasm migrate</code>",id:"beaker-wasm-migrate",level:3},{value:"<code>beaker wasm deploy</code>",id:"beaker-wasm-deploy",level:3},{value:"<code>beaker wasm upgrade</code>",id:"beaker-wasm-upgrade",level:3},{value:"<code>beaker wasm proposal</code>",id:"beaker-wasm-proposal",level:3}],k={toc:m};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"beaker-wasm"},(0,i.kt)("inlineCode",{parentName:"h1"},"beaker wasm")),(0,i.kt)("p",null,"Manipulating and interacting with CosmWasm contract"),(0,i.kt)("p",null,"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--help"),": Print help information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--version"),": Print version information"))),(0,i.kt)("h2",{id:"subcommands"},"Subcommands"),(0,i.kt)("h3",{id:"beaker-wasm-new"},(0,i.kt)("inlineCode",{parentName:"h3"},"beaker wasm new")),(0,i.kt)("p",null,"Create new CosmWasm contract from boilerplate"),(0,i.kt)("p",null,"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--help"),": Print help information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--version"),": Print version information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"}," <contract-name>"),"Contract name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-t/--target-dir <target-dir>"),": Path to store generated contract")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-v/--version <version>"),": Template's version, using main branch if not specified"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beaker-wasm-build"},(0,i.kt)("inlineCode",{parentName:"h3"},"beaker wasm build")),(0,i.kt)("p",null,"Build .wasm for storing contract code on the blockchain"),(0,i.kt)("p",null,"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--help"),": Print help information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--version"),": Print version information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--no-wasm-opt"),": If set, the contract(s) will not be optimized by wasm-opt after build (only use in dev)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-a/--aarch64"),": Option for m1 user for wasm optimization, FOR TESTING ONLY, PRODUCTION BUILD SHOULD USE INTEL BUILD"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beaker-wasm-store-code"},(0,i.kt)("inlineCode",{parentName:"h3"},"beaker wasm store-code")),(0,i.kt)("p",null,"Store .wasm on chain for later initialization"),(0,i.kt)("p",null,"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--help"),": Print help information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--version"),": Print version information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"}," <contract-name>"),"Name of the contract to store")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--no-wasm-opt"),": If set, use non wasm-opt optimized wasm to store code (only use in dev)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--permit-instantiate-only <permit-instantiate-only>"),": Restricting the code to be able to instantiate only by given address, no restriction by default")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-n/--network <network>"),": Name of the network to broadcast transaction to, the actual endpoint / chain-id are defined in config (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"local"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gas <gas>"),": Coin (amount and denom) you are willing to pay as gas eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"1000uosmo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gas-limit <gas-limit>"),": Limit to how much gas amount allowed to be consumed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-account <signer-account>"),": Specifies predefined account as a tx signer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-keyring <signer-keyring>"),": Specifies private_key as a tx signer (base64 encoded string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-mnemonic <signer-mnemonic>"),": Specifies mnemonic as a tx signer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-private-key <signer-private-key>"),": Specifies private_key as a tx signer (base64 encoded string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-t/--timeout-height <timeout-height>"),": Specifies a block timeout height to prevent the tx from being committed past a certain height (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),")"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beaker-wasm-ts-gen"},(0,i.kt)("inlineCode",{parentName:"h3"},"beaker wasm ts-gen")),(0,i.kt)("p",null,"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--help"),": Print help information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--version"),": Print version information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"}," <contract-name>"),"Name of the contract to store")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--schema-gen-cmd <schema-gen-cmd>"),": Sschema generation command, default: ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo run -p {contract_name} --example schema"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--schema-dir <schema-dir>"),": Directory of input schema for ts generation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--out-dir <out-dir>"),": Code output directory, ignore remaining ts build process if custom out_dir is specified")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--node-package-manager <node-package-manager>"),": Code output directory (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),")"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beaker-wasm-update-admin"},(0,i.kt)("inlineCode",{parentName:"h3"},"beaker wasm update-admin")),(0,i.kt)("p",null,"Update admin that can migrate contract"),(0,i.kt)("p",null,"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--help"),": Print help information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--version"),": Print version information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"}," <contract-name>"),"Name of the contract to store")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-l/--label <label>"),": Label for the instantiated contract for later reference (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--new-admin <new-admin>"),": Address of new admin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-n/--network <network>"),": Name of the network to broadcast transaction to, the actual endpoint / chain-id are defined in config (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"local"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gas <gas>"),": Coin (amount and denom) you are willing to pay as gas eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"1000uosmo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gas-limit <gas-limit>"),": Limit to how much gas amount allowed to be consumed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-account <signer-account>"),": Specifies predefined account as a tx signer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-keyring <signer-keyring>"),": Specifies private_key as a tx signer (base64 encoded string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-mnemonic <signer-mnemonic>"),": Specifies mnemonic as a tx signer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-private-key <signer-private-key>"),": Specifies private_key as a tx signer (base64 encoded string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-t/--timeout-height <timeout-height>"),": Specifies a block timeout height to prevent the tx from being committed past a certain height (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),")"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beaker-wasm-clear-admin"},(0,i.kt)("inlineCode",{parentName:"h3"},"beaker wasm clear-admin")),(0,i.kt)("p",null,"Clear admin so no one can migrate contract"),(0,i.kt)("p",null,"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--help"),": Print help information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--version"),": Print version information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"}," <contract-name>"),"Name of the contract to store")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-l/--label <label>"),": Label for the instantiated contract for later reference (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-n/--network <network>"),": Name of the network to broadcast transaction to, the actual endpoint / chain-id are defined in config (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"local"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gas <gas>"),": Coin (amount and denom) you are willing to pay as gas eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"1000uosmo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gas-limit <gas-limit>"),": Limit to how much gas amount allowed to be consumed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-account <signer-account>"),": Specifies predefined account as a tx signer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-keyring <signer-keyring>"),": Specifies private_key as a tx signer (base64 encoded string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-mnemonic <signer-mnemonic>"),": Specifies mnemonic as a tx signer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-private-key <signer-private-key>"),": Specifies private_key as a tx signer (base64 encoded string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-t/--timeout-height <timeout-height>"),": Specifies a block timeout height to prevent the tx from being committed past a certain height (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),")"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beaker-wasm-instantiate"},(0,i.kt)("inlineCode",{parentName:"h3"},"beaker wasm instantiate")),(0,i.kt)("p",null,"Instanitate .wasm stored on chain"),(0,i.kt)("p",null,"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--help"),": Print help information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--version"),": Print version information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"}," <contract-name>"),"Name of the contract to instantiate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-l/--label <label>"),": Label for the instantiated contract for later reference (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-r/--raw <raw>"),": Raw json string to use as instantiate msg")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--admin <admin>"),': Specifying admin required for contract migration. Use "signer" for setting tx signer as admin. Use bech32 address (eg. "osmo1cyyzpxplxdzkeea7kwsydadg87357qnahakaks") for custom admin')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-f/--funds <funds>"),": Funds to send to instantiated contract")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--no-proposal-sync"),": Skip the check for proposal's updated code_id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-y/--yes"),": Agree to all prompts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-n/--network <network>"),": Name of the network to broadcast transaction to, the actual endpoint / chain-id are defined in config (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"local"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gas <gas>"),": Coin (amount and denom) you are willing to pay as gas eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"1000uosmo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gas-limit <gas-limit>"),": Limit to how much gas amount allowed to be consumed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-account <signer-account>"),": Specifies predefined account as a tx signer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-keyring <signer-keyring>"),": Specifies private_key as a tx signer (base64 encoded string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-mnemonic <signer-mnemonic>"),": Specifies mnemonic as a tx signer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-private-key <signer-private-key>"),": Specifies private_key as a tx signer (base64 encoded string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-t/--timeout-height <timeout-height>"),": Specifies a block timeout height to prevent the tx from being committed past a certain height (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),")"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beaker-wasm-migrate"},(0,i.kt)("inlineCode",{parentName:"h3"},"beaker wasm migrate")),(0,i.kt)("p",null,"Migrated instanitate contract to use other code stored on chain"),(0,i.kt)("p",null,"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--help"),": Print help information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--version"),": Print version information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"}," <contract-name>"),"Name of the contract to instantiate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-l/--label <label>"),": Label for the instantiated contract for selcting migration target (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-r/--raw <raw>"),": Raw json string to use as instantiate msg")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--no-proposal-sync"),": Skip the check for proposal's updated code_id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-y/--yes"),": Agree to all prompts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-n/--network <network>"),": Name of the network to broadcast transaction to, the actual endpoint / chain-id are defined in config (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"local"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gas <gas>"),": Coin (amount and denom) you are willing to pay as gas eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"1000uosmo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gas-limit <gas-limit>"),": Limit to how much gas amount allowed to be consumed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-account <signer-account>"),": Specifies predefined account as a tx signer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-keyring <signer-keyring>"),": Specifies private_key as a tx signer (base64 encoded string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-mnemonic <signer-mnemonic>"),": Specifies mnemonic as a tx signer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-private-key <signer-private-key>"),": Specifies private_key as a tx signer (base64 encoded string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-t/--timeout-height <timeout-height>"),": Specifies a block timeout height to prevent the tx from being committed past a certain height (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),")"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beaker-wasm-deploy"},(0,i.kt)("inlineCode",{parentName:"h3"},"beaker wasm deploy")),(0,i.kt)("p",null,"Build, Optimize, Store code, and instantiate contract"),(0,i.kt)("p",null,"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--help"),": Print help information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--version"),": Print version information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"}," <contract-name>"),"Name of the contract to deploy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-l/--label <label>"),": Label for the instantiated contract for later reference (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-r/--raw <raw>"),": Raw json string to use as instantiate msg")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--permit-instantiate-only <permit-instantiate-only>"),": Restricting the code to be able to instantiate only by given address, no restriction by default")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--admin <admin>"),': Specifying admin required for contract migration. Use "signer" for setting tx signer as admin. Use bech32 address (eg. "osmo1cyyzpxplxdzkeea7kwsydadg87357qnahakaks") for custom admin')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-f/--funds <funds>"),": Funds to send to instantiated contract")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--no-rebuild"),": Use existing .wasm file to deploy if set to true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--no-wasm-opt"),": If set, skip wasm-opt and store the unoptimized code (only use in dev)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-n/--network <network>"),": Name of the network to broadcast transaction to, the actual endpoint / chain-id are defined in config (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"local"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gas <gas>"),": Coin (amount and denom) you are willing to pay as gas eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"1000uosmo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gas-limit <gas-limit>"),": Limit to how much gas amount allowed to be consumed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-account <signer-account>"),": Specifies predefined account as a tx signer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-keyring <signer-keyring>"),": Specifies private_key as a tx signer (base64 encoded string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-mnemonic <signer-mnemonic>"),": Specifies mnemonic as a tx signer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-private-key <signer-private-key>"),": Specifies private_key as a tx signer (base64 encoded string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-t/--timeout-height <timeout-height>"),": Specifies a block timeout height to prevent the tx from being committed past a certain height (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),")"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beaker-wasm-upgrade"},(0,i.kt)("inlineCode",{parentName:"h3"},"beaker wasm upgrade")),(0,i.kt)("p",null,"Build, Optimize, Store code, and migrate contract"),(0,i.kt)("p",null,"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--help"),": Print help information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--version"),": Print version information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"}," <contract-name>"),"Name of the contract to deploy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-l/--label <label>"),": Label for the instantiated contract for later reference (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-r/--raw <raw>"),": Raw json string to use as instantiate msg")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--no-rebuild"),": Use existing .wasm file to deploy if set to true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--no-wasm-opt"),": If set, skip wasm-opt and store the unoptimized code (only use in dev)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--permit-instantiate-only <permit-instantiate-only>"),": Restricting the code to be able to instantiate only by given address, no restriction by default")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-n/--network <network>"),": Name of the network to broadcast transaction to, the actual endpoint / chain-id are defined in config (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"local"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gas <gas>"),": Coin (amount and denom) you are willing to pay as gas eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"1000uosmo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gas-limit <gas-limit>"),": Limit to how much gas amount allowed to be consumed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-account <signer-account>"),": Specifies predefined account as a tx signer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-keyring <signer-keyring>"),": Specifies private_key as a tx signer (base64 encoded string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-mnemonic <signer-mnemonic>"),": Specifies mnemonic as a tx signer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer-private-key <signer-private-key>"),": Specifies private_key as a tx signer (base64 encoded string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-t/--timeout-height <timeout-height>"),": Specifies a block timeout height to prevent the tx from being committed past a certain height (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),")"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beaker-wasm-proposal"},(0,i.kt)("inlineCode",{parentName:"h3"},"beaker wasm proposal")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/beaker/commands/beaker_wasm_proposal"},">"," ",(0,i.kt)("inlineCode",{parentName:"a"},"beaker wasm proposal"),"'s subcommands")),(0,i.kt)("p",null,"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--help"),": Print help information")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--version"),": Print version information"))))}s.isMDXComponent=!0}}]);