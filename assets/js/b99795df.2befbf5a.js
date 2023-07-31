"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[713],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=o,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(b,l(l({ref:t},p),{},{components:a})):n.createElement(b,l({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),o=a(7294),r=a(6010),l=a(2466),i=a(6550),s=a(1980),u=a(7392),p=a(12);function c(e){return function(e){var t;return(null==(t=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function m(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=b({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=s??c;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var k=a(2389);const f="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(c(t),s(n))},d=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}null==(t=a)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},l,{className:(0,r.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f)},o.createElement(y,(0,n.Z)({},e,t)),o.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return o.createElement(w,(0,n.Z)({key:String(t)},e))}},6512:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var n=a(7462),o=(a(7294),a(3905)),r=a(4866),l=a(5162),i=a(9960),s=a(1207);const u={title:"Simple CLI (Recommended)",sidebar_position:2,description:"Farming on the Subspace Network",keywords:["Farmer","Farming","CLI","Binaries","GitHub"]},p=void 0,c={unversionedId:"protocol/cli",id:"version-latest/protocol/cli",title:"Simple CLI (Recommended)",description:"Farming on the Subspace Network",source:"@site/versioned_docs/version-latest/protocol/cli.md",sourceDirName:"protocol",slug:"/protocol/cli",permalink:"/docs/protocol/cli",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/protocol/cli.md",tags:[],version:"latest",lastUpdatedBy:"Justin",lastUpdatedAt:1690389398,formattedLastUpdatedAt:"Jul 26, 2023",sidebarPosition:2,frontMatter:{title:"Simple CLI (Recommended)",sidebar_position:2,description:"Farming on the Subspace Network",keywords:["Farmer","Farming","CLI","Binaries","GitHub"]},sidebar:"tutorialSidebar",previous:{title:"Polkadot.js",permalink:"/docs/protocol/wallets/polkadot"},next:{title:"Advanced CLI",permalink:"/docs/protocol/substrate-cli"}},m={},d=[{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"System Requirements",id:"system-requirements",level:3},{value:"Getting A Crypto Wallet",id:"getting-a-crypto-wallet",level:3},{value:"Required ports",id:"required-ports",level:3},{value:"Installation",id:"installation",level:2},{value:"Download Binaries",id:"download-binaries",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Gemini 3 Testnet",id:"gemini-3-testnet",level:3},{value:"Local Development",id:"local-development",level:3},{value:"Farming",id:"farming",level:2},{value:"Moving the Farming Process to the Background",id:"moving-the-farming-process-to-the-background",level:4},{value:"Having Trouble?",id:"having-trouble",level:2},{value:"View your Logs",id:"view-your-logs",level:3},{value:"Wipe Node &amp; Farmer",id:"wipe-node--farmer",level:3}],b={toc:d};function h(e){let{components:t,...u}=e;return(0,o.kt)("wrapper",(0,n.Z)({},b,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Recommended",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Simple CLI also known as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace-cli"},"Subspace CLI")," is the recommended way to farm on the Subspace Network. To get started, follow the guide below. For more information, you can check out the project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace-cli/blob/main/README.md"},"README on GitHub"),".")),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,o.kt)("admonition",{title:"Farming can be Network Intensive.",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you have a stable network connection. During the plotting phase of farming, it can be network intensive."),(0,o.kt)("p",{parentName:"admonition"},"This may impact your network usage so please check your network connection if you have a hard data limit.")),(0,o.kt)("p",null,"Subspace CLI requires commodity hardware specs to operate. At a ",(0,o.kt)("strong",{parentName:"p"},"minimum"),", it is recommended to have:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Hardware"),(0,o.kt)("th",{parentName:"tr",align:null},"Specs"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU"),(0,o.kt)("td",{parentName:"tr",align:null},"4 Core+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RAM"),(0,o.kt)("td",{parentName:"tr",align:null},"4GB+ (Rec. 8GB)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SWAP"),(0,o.kt)("td",{parentName:"tr",align:null},"4GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Storage"),(0,o.kt)("td",{parentName:"tr",align:null},"100GB SSD")))),(0,o.kt)("admonition",{title:"BUG#1388 - Storage Growing Too Large",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We are currently investigating a bug that is causing the node Archive to exceed its expected growth. As a result, we suggest having a minimum of 150-200GB of storage available for your system."),(0,o.kt)("p",{parentName:"admonition"},"Therefore, please make sure that you have at least ~150-200GB of storage in addition to your desired plot size."),(0,o.kt)("p",{parentName:"admonition"},"For more information, please visit: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace/issues/1388"},"https://github.com/subspace/subspace/issues/1388"))),(0,o.kt)("admonition",{title:"CoW File Systems Warning",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"It is advised not to use the Subspace farmer and node on CoW file systems for any OS."),(0,o.kt)("p",{parentName:"admonition"},"If BTRFS is used with Subspace, the directory/whole file system must be CoW disabled with the following command prior to starting Subspace."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Command to Cow Disable")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"sudo chattr +C path/to/datasubspace-cli-windows-x86_64-skylake-v0.42-alpha.exe\n")),(0,o.kt)("p",{parentName:"admonition"},"Alternatively, non-CoW file systems like ext4 or xfs can be used instead.")),(0,o.kt)("h3",{id:"getting-a-crypto-wallet"},"Getting A Crypto Wallet"),(0,o.kt)("p",null,"Before running anything you need to have a wallet where you'll receive testnet coins.\nFollow our how-to guides in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/category/wallets/"},"Wallets section")," of the documentation for steps on how to get your wallet setup."),(0,o.kt)("h3",{id:"required-ports"},"Required ports"),(0,o.kt)("p",null,"Currently, a few ports need to be exposed for node to work properly."),(0,o.kt)("p",null,"If you have a server with no firewall, there is nothing to be done, but otherwise make sure to open the following TCP ports for incoming connections."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"30333")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"30433"))),(0,o.kt)("p",null,"On the desktop side if you have a router in front of your computer, you'll need to forward TCP ports to the machine on which your node is running (how this is done varies from router to router, but there is always a feature like this, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/protocol/port-forwarding"},"How to Forward Ports")," for a more in-depth tutorial).\nIf you're connected directly without any router, then again nothing needs to be done in such case."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("admonition",{title:"ALPHA SOFTWARE",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Subspace CLI is in ",(0,o.kt)("strong",{parentName:"p"},"alpha"),".\nPlease feel free to file bug reports on our GitHub issues.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Prefer A video? Expand for our installation video"),(0,o.kt)("div",null,(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/h1-CX7lGl2w",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))),(0,o.kt)("h3",{id:"download-binaries"},"Download Binaries"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Compiled versions of the Subspace CLI is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace-cli/releases"},"hosted on GitHub"),". This is the recommended way to install the application. Please find the appropriate binary for your operating system."),(0,o.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some older processors/VMs are no longer supported by official releases, but can still be compiled manually if desired")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the Release Binary below.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand for Version 2 - For older processors since ~2009 and some old VMs"),(0,o.kt)("div",{className:s.Z.buttons},(0,o.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/subspace-cli/releases/download/v0.5.3-alpha-2/subspace-cli-windows-x86_64-v2-v0.5.3-alpha-2.exe",mdxType:"Link"},"Windows CLI Executable"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand for Version 3 - For newer processors since ~2015"),(0,o.kt)("div",{className:s.Z.buttons},(0,o.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/subspace-cli/releases/download/v0.5.3-alpha-2/subspace-cli-windows-x86_64-skylake-v0.5.3-alpha-2.exe",mdxType:"Link"},"Windows CLI Executable"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Open Powershell, type ",(0,o.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),").")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The warning below may appear because the application is trying to access the internet. This is expected as it is how the farmer talks to other farmers on the network. Please select 'Allow access' to continue farming.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Windows Defender Firewall",src:a(7715).Z,width:"527",height:"381"}))),(0,o.kt)(l.Z,{value:"macos",label:"\ud83c\udf4emacOS",default:!0,mdxType:"TabItem"},(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some older processors/VMs are no longer supported by official releases, but can still be compiled manually if desired")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download your Release Binary below.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Mac CLI Executable (Intel)"),(0,o.kt)("div",{className:s.Z.buttons},(0,o.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/subspace-cli/releases/download/v0.5.3-alpha-2/subspace-cli-macos-x86_64-v0.5.3-alpha-2.zip",mdxType:"Link"},"Mac CLI Executable (Intel)"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Mac CLI Executable (Apple M Series)"),(0,o.kt)("div",{className:s.Z.buttons},(0,o.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/subspace-cli/releases/download/v0.5.3-alpha-2/subspace-cli-macos-aarch64-v0.5.3-alpha-2.zip",mdxType:"Link"},"Mac CLI Executable (Apple M Series)"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Extract the ",(0,o.kt)("inlineCode",{parentName:"li"},".zip")," file."),(0,o.kt)("li",{parentName:"ol"},"Open Terminal, type ",(0,o.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),")."),(0,o.kt)("li",{parentName:"ol"},"Make the binary executable by running:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chmod +x subspace-cli-macos-x86_64-v0.5.3-alpha-2")," (Intel Chip)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chmod +x subspace-cli-macos-aarch64-v0.5.3-alpha-2")," (Apple M Series)")))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Your Mac may not let you open/initialize the file because of unidentified developer restrictions. To resolve this, go to Settings-> Security&Privacy -> General -> Allow"))),(0,o.kt)(l.Z,{value:"linux",label:"\ud83d\udc27Ubuntu",mdxType:"TabItem"},(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some older processors/VMs are no longer supported by official releases, but can still be compiled manually if desired")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download your Release Binary below.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand for Ubuntu Executable"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Version 2 - for older processors since ~2009 and some old VMs"),(0,o.kt)("div",{className:s.Z.buttons},(0,o.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/subspace-cli/releases/download/v0.5.3-alpha-2/subspace-cli-ubuntu-x86_64-v2-v0.5.3-alpha-2",mdxType:"Link"},"Ubuntu Executable"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Version 3 - For newer processors since ~2015"),(0,o.kt)("div",{className:s.Z.buttons},(0,o.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/subspace-cli/releases/download/v0.5.3-alpha-2/subspace-cli-ubuntu-x86_64-skylake-v0.5.3-alpha-2",mdxType:"Link"},"Ubuntu Executable")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand for Aarch64/64-bit Raspberry Pi Executables"),(0,o.kt)("div",{className:s.Z.buttons},(0,o.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/subspace-cli/releases/download/v0.5.3-alpha-2/subspace-cli-ubuntu-aarch64-v0.5.3-alpha-2",mdxType:"Link"},"Ubuntu Executable (aarch64)"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Open Terminal, type ",(0,o.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),")."),(0,o.kt)("li",{parentName:"ol"},"Make the binary executable by running:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chmod +x subspace-cli-ubuntu-x86_64-skylake-v0.5.3-alpha-2")," (Ubuntu)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chmod +x subspace-cli-ubuntu-aarch64-v0.5.3-alpha-2")," (Ubuntu aarch64)")))))),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To start we have to initialize our Farmer, this can be done with:"),(0,o.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"./subspace-cli-windows-x86_64-skylake-v0.5.3-alpha-2.exe init\n"))),(0,o.kt)(l.Z,{value:"macos",label:"\ud83c\udf4e macOS",mdxType:"TabItem"},"Intel Chip:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-macos-x86_64-v0.5.3-alpha-2 init\n\n")),(0,o.kt)("p",null,"Apple M Series:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-macos-aarch64-v0.5.3-alpha-2 init\n\n"))),(0,o.kt)(l.Z,{value:"linux",label:"\ud83d\udc27 Ubuntu",mdxType:"TabItem"},"Ubuntu:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-ubuntu-x86_64-skylake-v0.5.3-alpha-2 init\n\n")),(0,o.kt)("p",null,"Ubuntu Executable (aarch64):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-ubuntu-aarch64-v0.5.3-alpha-2 init\n\n")))),(0,o.kt)("p",null,"This will prompt you to setup your CLI configurations to begin farming. You should see a similar prompt like so (some info might be different than shown here w.r.t your OS):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'version: 0.5.0\n\nConfiguration creation process has started...\nEnter your farmer/reward address: REDACTED_ADDRESS\nEnter your node name to be identified on the network(defaults to `username`, press enter to use the default):\nSpecify a path for storing plot files (press enter to use the default: `"/home/username/.local/share/subspace-cli/plots"`):\nSpecify a path for storing node files (press enter to use the default: `"/home/username/.local/share/subspace-cli/node"`):\nSpecify a plot size (defaults to `1000.0 MB`, press enter to use the default):\nSpecify the chain to farm. Available options are: [Gemini3e, Dev, DevNet].\nDefaults to `Gemini3e`, press enter to use the default:\nConfiguration has been generated at /home/username/.config/subspace-cli\nReady for lift off! Run the follow command to begin: `"path/to/executable" farm`\n')),(0,o.kt)("admonition",{title:"Finding your settings.toml",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"After running ",(0,o.kt)("inlineCode",{parentName:"p"},"subspace-cli init"),", the prompt will display where the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.toml")," is generated. However in case you missed it, you can find the file based on your operating system:"),(0,o.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("p",{parentName:"admonition"},"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.toml")," will be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"$FOLDERID_RoamingAppData/subspace-cli/settings.toml"))),(0,o.kt)(l.Z,{value:"macos",label:"\ud83c\udf4emacOS",mdxType:"TabItem"},(0,o.kt)("p",{parentName:"admonition"},"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.toml")," will be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/Library/Application Support/subspace-cli/settings.toml"))),(0,o.kt)(l.Z,{value:"linux",label:"\ud83d\udc27Ubuntu",mdxType:"TabItem"},(0,o.kt)("p",{parentName:"admonition"},"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.toml")," will be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.config/subspace-cli/settings.toml"))))),(0,o.kt)("h3",{id:"gemini-3-testnet"},"Gemini 3 Testnet"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If you are using the default configurations from Subspace CLI, you are ready to go with the Gemini 3 Testnet. Alternatively, you can ensure this occurs by manually setting the network like so."),(0,o.kt)("p",null,"Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.toml")," directory and ensure your ",(0,o.kt)("inlineCode",{parentName:"p"},"chain")," is correctly specified to ",(0,o.kt)("inlineCode",{parentName:"p"},"gemini-3e")," as so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"# settings.toml\n[node]\nchain = 'gemini-3e'\n# ... redacted ...\n")),(0,o.kt)("h3",{id:"local-development"},"Local Development"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To run Subspace CLI in a local development mode, modify your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.toml")," and ensure your ",(0,o.kt)("inlineCode",{parentName:"p"},"chain")," points to ",(0,o.kt)("inlineCode",{parentName:"p"},"dev"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"# settings.toml\n[node]\nchain = 'dev'\n# ... redacted ...\n")),(0,o.kt)("h2",{id:"farming"},"Farming"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To begin farming on the network, just run the ",(0,o.kt)("inlineCode",{parentName:"p"},"farm")," command with the CLI like so:"),(0,o.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"./subspace-cli-windows-x86_64-v0.5.3-alpha-2.exe farm\n"))),(0,o.kt)(l.Z,{value:"macos",label:"\ud83c\udf4e macOS",mdxType:"TabItem"},(0,o.kt)("p",null,"Intel Chip:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-macos-x86_64-v0.5.3-alpha-2 farm\n\n")),(0,o.kt)("p",null,"Apple M1 Chip:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-macos-aarch64-v0.5.3-alpha-2 farm\n\n"))),(0,o.kt)(l.Z,{value:"linux",label:"\ud83d\udc27 Ubuntu",mdxType:"TabItem"},(0,o.kt)("p",null,"Ubuntu:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-ubuntu-x86_64-skylake-v0.5.3-alpha-2 farm\n\n")),(0,o.kt)("p",null,"Ubuntu Executable (aarch64):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-ubuntu-aarch64-v0.5.3-alpha-2 farm\n\n")))),(0,o.kt)("p",null,"You should see the farmer and node start successfully and begin syncing, plotting, and then farming:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Starting node ... (this might take up to couple of minutes)\nNode started successfully!\nStarting farmer ...\nFarmer started successfully!\nInitial plotting for plot: #0 (/home/username/.local/share/subspace-cli/plots)\n\u2801 [00:00:00] 3% [=>                                      ]\n      (31.00 MiB/953.67 MiB) 157.35 GiB/s, plotting, ETA: 0s\n")),(0,o.kt)("p",null,"That's it! Enjoy and Happy Farming!"),(0,o.kt)("h4",{id:"moving-the-farming-process-to-the-background"},"Moving the Farming Process to the Background"),(0,o.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"tmux",label:"Tmux",default:!0,mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Learn More about Tmux",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to learn more about Tmux and its options check out their Repo ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tmux/tmux/wiki"},"here"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new tmux session using a socket file named farming")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ tmux -S farming\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Move process to background by detaching")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Ctrl+b d OR \u2318+b d (Mac)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To re-attach")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ tmux -S farming attach\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To delete farming session")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ tmux kill-session -t farming\n"))),(0,o.kt)(l.Z,{value:"screen",label:"Screen",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Learn More about Screen",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to learn more about Screen and its options check out their Webpage ",(0,o.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/screen/"},"here"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create new screen using a socket file named farming")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ screen -S farming\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Move process to background by detaching")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Ctrl+d a OR \u2318+d a (Mac)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To re-attach")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ screen -r farming\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To delete farming session")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ screen -S farming -X quit\n")))),(0,o.kt)("h2",{id:"having-trouble"},"Having Trouble?"),(0,o.kt)("p",null,"If you are facing issues with your node/farmer you can try a few of the following things below, if you are unable to get your issue resolved please check our ",(0,o.kt)("a",{parentName:"p",href:"https://forums.subspace.network"},"Forums")," to see if your issue may have been solved, if its a new one feel free to post it! You can also join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/subspace-network"},"Discord")," for additional Peer to Peer help."),(0,o.kt)("h3",{id:"view-your-logs"},"View your Logs"),(0,o.kt)("p",null,"A good place to start if you are facing trouble is by viewing your logs and seeing if there are any errors or insights that might be available. You can find the location for your logs below"),(0,o.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Your Logs will be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"%USERPROFILE%/AppData/Local/subspace-cli/logs"))),(0,o.kt)(l.Z,{value:"macos",label:"\ud83c\udf4emacOS",mdxType:"TabItem"},(0,o.kt)("p",null,"Your Logs will be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/Library/Logs/subspace-cli/"))),(0,o.kt)(l.Z,{value:"linux",label:"\ud83d\udc27Ubuntu",mdxType:"TabItem"},(0,o.kt)("p",null,"Your Logs will be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.local/share/subspace-cli/logs")))),(0,o.kt)("h3",{id:"wipe-node--farmer"},"Wipe Node & Farmer"),(0,o.kt)("admonition",{title:"Updated from a previous version and now having issues?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Occasionally after updating to a new version of the CLI you will need to wipe your node and farmer, generally this should not be required but can be attempted if your farmer is having issues after having had worked fine previously.")),(0,o.kt)("p",null,"To simply restart the node, go to the terminal where you started the ",(0,o.kt)("inlineCode",{parentName:"p"},"farm")," command, and press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," you should see a shutdown message appear and the application will attempt a simple shutdown, if you dont see the message press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," again to force shutdown. You can then simply start the farmer again with the ",(0,o.kt)("inlineCode",{parentName:"p"},"farm")," command you used prior."),(0,o.kt)("p",null,"Use the same file name as the previous init and farm steps, then add the wipe command to free the previous memory that was being used. Generally, only do this if you have severe errors and are prompted by a staff member."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./subspace-cli-file-name wipe\n")),(0,o.kt)("p",null,"After wiping, follow the init and farm steps above to start farming again!"))}h.isMDXComponent=!0},1207:(e,t,a)=>{a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},7715:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Windows_Security_Alert-b960592cd2cbd7f821cfd5855c09a572.png"}}]);