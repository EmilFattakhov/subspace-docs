"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[67],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=o,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(b,r(r({ref:t},p),{},{components:a})):n.createElement(b,r({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),o=a(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),o=a(7294),l=a(6010),r=a(2389),i=a(7392),s=a(7094),u=a(2466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:a,block:r,defaultValue:c,values:d,groupId:b,className:k}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,i.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[N,x]=(0,o.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=b){const e=v[b];null!=e&&e!==N&&g.some((t=>t.value===e))&&x(e)}const S=e=>{const t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==N&&(C(t),x(n),null!=b&&w(b,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},k)},g.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:I,onClick:S},r,{className:(0,l.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,o.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,r.Z)();return o.createElement(c,(0,n.Z)({key:String(t)},e))}},5503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>u,metadata:()=>m,toc:()=>d});var n=a(7462),o=(a(7294),a(3905)),l=a(5488),r=a(5162),i=a(9960),s=a(1207);const u={title:"Simple CLI (Recommended)",sidebar_position:2,description:"Farming on the Subspace Network",keywords:["Farmer","Farming","CLI","Binaries","GitHub"]},p=void 0,m={unversionedId:"protocol/cli",id:"protocol/cli",title:"Simple CLI (Recommended)",description:"Farming on the Subspace Network",source:"@site/docs/protocol/cli.md",sourceDirName:"protocol",slug:"/protocol/cli",permalink:"/docs/protocol/cli",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/protocol/cli.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Simple CLI (Recommended)",sidebar_position:2,description:"Farming on the Subspace Network",keywords:["Farmer","Farming","CLI","Binaries","GitHub"]},sidebar:"tutorialSidebar",previous:{title:"Polkadot.js",permalink:"/docs/protocol/wallets/polkadot"},next:{title:"Advanced CLI",permalink:"/docs/protocol/substrate-cli"}},c={},d=[{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"System Requirements",id:"system-requirements",level:3},{value:"Getting A Crypto Wallet",id:"getting-a-crypto-wallet",level:3},{value:"Required ports",id:"required-ports",level:3},{value:"Installation",id:"installation",level:2},{value:"Download Binaries",id:"download-binaries",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Gemini 3 Testnet",id:"gemini-3-testnet",level:3},{value:"Local Development",id:"local-development",level:3},{value:"Farming",id:"farming",level:2},{value:"Moving the Farming Process to the Background",id:"moving-the-farming-process-to-the-background",level:4},{value:"Having Trouble?",id:"having-trouble",level:2},{value:"View your Logs",id:"view-your-logs",level:3},{value:"Wipe Node &amp; Farmer",id:"wipe-node--farmer",level:3}],b={toc:d};function k(e){let{components:t,...u}=e;return(0,o.kt)("wrapper",(0,n.Z)({},b,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Recommended",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Simple CLI also known as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace-cli"},"Subspace CLI")," is the recommended way to farm on the Subspace Network. To get started, follow the guide below. For more information, you can check out the project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace-cli/blob/main/README.md"},"README on GitHub"),".")),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,o.kt)("admonition",{title:"Farming can be Network Intensive.",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you have a stable network connection. During the plotting phase of farming, it can be network intensive."),(0,o.kt)("p",{parentName:"admonition"},"This may impact your network usage so please check your network connection if you have a hard data limit.")),(0,o.kt)("p",null,"Subspace CLI requires commodity hardware specs to operate. At a ",(0,o.kt)("strong",{parentName:"p"},"minimum"),", it is recommended to have:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Hardware"),(0,o.kt)("th",{parentName:"tr",align:null},"Specs"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU"),(0,o.kt)("td",{parentName:"tr",align:null},"4 Core+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RAM"),(0,o.kt)("td",{parentName:"tr",align:null},"4GB+ (Rec. 8GB)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SWAP"),(0,o.kt)("td",{parentName:"tr",align:null},"4GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Storage"),(0,o.kt)("td",{parentName:"tr",align:null},"100GB SSD")))),(0,o.kt)("admonition",{title:"BUG#1388 - Storage Growing Too Large",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We are currently investigating a bug that is causing the node Archive to exceed its expected growth. As a result, we suggest having a minimum of 150-200GB of storage available for your system."),(0,o.kt)("p",{parentName:"admonition"},"Therefore, please make sure that you have at least ~150-200GB of storage in addition to your desired plot size."),(0,o.kt)("p",{parentName:"admonition"},"For more information, please visit: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace/issues/1388"},"https://github.com/subspace/subspace/issues/1388"))),(0,o.kt)("admonition",{title:"CoW File Systems Warning",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"It is advised not to use the Subspace farmer and node on CoW file systems for any OS."),(0,o.kt)("p",{parentName:"admonition"},"If BTRFS is used with Subspace, the directory/whole file system must be CoW disabled with the following command prior to starting Subspace."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Command to Cow Disable")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"sudo chattr +C path/to/datasubspace-cli-windows-x86_64-skylake-v0.42-alpha.exe\n")),(0,o.kt)("p",{parentName:"admonition"},"Alternatively, non-CoW file systems like ext4 or xfs can be used instead.")),(0,o.kt)("h3",{id:"getting-a-crypto-wallet"},"Getting A Crypto Wallet"),(0,o.kt)("p",null,"Before running anything you need to have a wallet where you'll receive testnet coins.\nFollow our how-to guides in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/category/wallets/"},"Wallets section")," of the documentation for steps on how to get your wallet setup."),(0,o.kt)("h3",{id:"required-ports"},"Required ports"),(0,o.kt)("p",null,"Currently, a few ports need to be exposed for node to work properly."),(0,o.kt)("p",null,"If you have a server with no firewall, there is nothing to be done, but otherwise make sure to open the following TCP ports for incoming connections."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"30333")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"30433"))),(0,o.kt)("p",null,"On the desktop side if you have a router in front of your computer, you'll need to forward TCP ports to the machine on which your node is running (how this is done varies from router to router, but there is always a feature like this, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/protocol/port-forwarding"},"How to Forward Ports")," for a more in-depth tutorial).\nIf you're connected directly without any router, then again nothing needs to be done in such case."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("admonition",{title:"ALPHA SOFTWARE",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Subspace CLI is in ",(0,o.kt)("strong",{parentName:"p"},"alpha"),".\nPlease feel free to file bug reports on our GitHub issues.")),(0,o.kt)("h3",{id:"download-binaries"},"Download Binaries"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Compiled versions of the Subspace CLI is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace-cli/releases"},"hosted on GitHub"),". This is the recommended way to install the application. Please find the appropriate binary for your operating system."),(0,o.kt)(l.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some older processors/VMs are no longer supported by official releases, but can still be compiled manually if desired")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the Release Binary below.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand for Version 2 - For older processors since ~2009 and some old VMs"),(0,o.kt)("div",{className:s.Z.buttons},(0,o.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/subspace-cli/releases/download/v0.5.0-alpha/subspace-cli-windows-x86_64-v2-v0.5.0-alpha.exe",mdxType:"Link"},"Windows CLI Executable"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand for Version 3 - For newer processors since ~2015"),(0,o.kt)("div",{className:s.Z.buttons},(0,o.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/subspace-cli/releases/download/v0.5.0-alpha/subspace-cli-windows-x86_64-skylake-v0.5.0-alpha.exe",mdxType:"Link"},"Windows CLI Executable"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Open Powershell, type ",(0,o.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),").")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The warning below may appear because the application is trying to access the internet. This is expected as it is how the farmer talks to other farmers on the network. Please select 'Allow access' to continue farming.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Windows Defender Firewall",src:a(4948).Z,width:"527",height:"381"}))),(0,o.kt)(r.Z,{value:"macos",label:"\ud83c\udf4emacOS",default:!0,mdxType:"TabItem"},(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some older processors/VMs are no longer supported by official releases, but can still be compiled manually if desired")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download your Release Binary below.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Mac CLI Executable (Intel)"),(0,o.kt)("div",{className:s.Z.buttons},(0,o.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/subspace-cli/releases/download/v0.5.0-alpha/subspace-cli-macos-x86_64-v0.5.0-alpha.zip",mdxType:"Link"},"Mac CLI Executable (Intel)"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Mac CLI Executable (Apple M Series)"),(0,o.kt)("div",{className:s.Z.buttons},(0,o.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/subspace-cli/releases/download/v0.5.0-alpha/subspace-cli-macos-aarch64-v0.5.0-alpha.zip",mdxType:"Link"},"Mac CLI Executable (Apple M Series)"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Extract the ",(0,o.kt)("inlineCode",{parentName:"li"},".zip")," file."),(0,o.kt)("li",{parentName:"ol"},"Open Terminal, type ",(0,o.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),")."),(0,o.kt)("li",{parentName:"ol"},"Make the binary executable by running:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chmod +x subspace-cli-macos-x86_64-v0.5.0-alpha")," (Intel Chip)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chmod +x subspace-cli-macos-aarch64-v0.5.0-alpha")," (Apple M Series)")))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Your Mac may not let you open/initialize the file because of unidentified developer restrictions. To resolve this, go to Settings-> Security&Privacy -> General -> Allow"))),(0,o.kt)(r.Z,{value:"linux",label:"\ud83d\udc27Ubuntu",mdxType:"TabItem"},(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some older processors/VMs are no longer supported by official releases, but can still be compiled manually if desired")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download your Release Binary below.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand for Ubuntu Executable"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Version 2 - for older processors since ~2009 and some old VMs"),(0,o.kt)("div",{className:s.Z.buttons},(0,o.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/subspace-cli/releases/download/v0.5.0-alpha/subspace-cli-ubuntu-x86_64-v2-v0.5.0-alpha",mdxType:"Link"},"Ubuntu Executable"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Version 3 - For newer processors since ~2015"),(0,o.kt)("div",{className:s.Z.buttons},(0,o.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/subspace-cli/releases/download/v0.5.0-alpha/subspace-cli-ubuntu-x86_64-skylake-v0.5.0-alpha",mdxType:"Link"},"Ubuntu Executable")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand for Aarch64/64-bit Raspberry Pi Executables"),(0,o.kt)("div",{className:s.Z.buttons},(0,o.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/subspace-cli/releases/download/v0.5.0-alpha/subspace-cli-ubuntu-aarch64-v0.5.0-alpha",mdxType:"Link"},"Ubuntu Executable (aarch64)"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Open Terminal, type ",(0,o.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),")."),(0,o.kt)("li",{parentName:"ol"},"Make the binary executable by running:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chmod +x subspace-cli-ubuntu-x86_64-skylake-v0.5.0-alpha")," (Ubuntu)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chmod +x subspace-cli-ubuntu-aarch64-v0.5.0-alpha")," (Ubuntu aarch64)")))))),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To start we have to initialize our Farmer, this can be done with:"),(0,o.kt)(l.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"./subspace-cli-windows-x86_64-skylake-v0.5.0-alpha.exe init\n"))),(0,o.kt)(r.Z,{value:"macos",label:"\ud83c\udf4e macOS",mdxType:"TabItem"},"Intel Chip:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-macos-x86_64-v0.5.0-alpha init\n\n")),(0,o.kt)("p",null,"Apple M Series:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-macos-aarch64-v0.5.0-alpha init\n\n"))),(0,o.kt)(r.Z,{value:"linux",label:"\ud83d\udc27 Ubuntu",mdxType:"TabItem"},"Ubuntu:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-ubuntu-x86_64-skylake-v0.5.0-alpha init\n\n")),(0,o.kt)("p",null,"Ubuntu Executable (aarch64):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-ubuntu-aarch64-v0.5.0-alpha init\n\n")))),(0,o.kt)("p",null,"This will prompt you to setup your CLI configurations to begin farming. You should see a similar prompt like so (some info might be different than shown here w.r.t your OS):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'version: 0.4.1\n\nConfiguration creation process has started...\nEnter your farmer/reward address: REDACTED_ADDRESS\nEnter your node name to be identified on the network(defaults to `username`, press enter to use the default):\nSpecify a path for storing plot files (press enter to use the default: `"/home/username/.local/share/subspace-cli/plots"`):\nSpecify a path for storing node files (press enter to use the default: `"/home/username/.local/share/subspace-cli/node"`):\nSpecify a plot size (defaults to `1000.0 MB`, press enter to use the default):\nSpecify the chain to farm. Available options are: [Gemini3d, Dev, DevNet].\n Defaults to `Gemini3d`, press enter to use the default:\nConfiguration has been generated at /home/username/.config/subspace-cli\nReady for lift off! Run the follow command to begin: `"path/to/executable" farm`\n')),(0,o.kt)("admonition",{title:"Finding your settings.toml",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"After running ",(0,o.kt)("inlineCode",{parentName:"p"},"subspace-cli init"),", the prompt will display where the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.toml")," is generated. However in case you missed it, you can find the file based on your operating system:"),(0,o.kt)(l.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("p",{parentName:"admonition"},"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.toml")," will be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"$FOLDERID_RoamingAppData/subspace-cli/settings.toml"))),(0,o.kt)(r.Z,{value:"macos",label:"\ud83c\udf4emacOS",mdxType:"TabItem"},(0,o.kt)("p",{parentName:"admonition"},"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.toml")," will be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/Library/Application Support/subspace-cli/settings.toml"))),(0,o.kt)(r.Z,{value:"linux",label:"\ud83d\udc27Ubuntu",mdxType:"TabItem"},(0,o.kt)("p",{parentName:"admonition"},"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.toml")," will be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.config/subspace-cli/settings.toml"))))),(0,o.kt)("h3",{id:"gemini-3-testnet"},"Gemini 3 Testnet"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If you are using the default configurations from Subspace CLI, you are ready to go with the Gemini 3 Testnet. Alternatively, you can ensure this occurs by manually setting the network like so."),(0,o.kt)("p",null,"Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.toml")," directory and ensure your ",(0,o.kt)("inlineCode",{parentName:"p"},"chain")," is correctly specified to ",(0,o.kt)("inlineCode",{parentName:"p"},"gemini-3c")," as so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"# settings.toml\n[node]\nchain = 'gemini-3c'\n# ... redacted ...\n")),(0,o.kt)("h3",{id:"local-development"},"Local Development"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To run Subspace CLI in a local development mode, modify your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.toml")," and ensure your ",(0,o.kt)("inlineCode",{parentName:"p"},"chain")," points to ",(0,o.kt)("inlineCode",{parentName:"p"},"dev"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"# settings.toml\n[node]\nchain = 'dev'\n# ... redacted ...\n")),(0,o.kt)("h2",{id:"farming"},"Farming"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To begin farming on the network, just run the ",(0,o.kt)("inlineCode",{parentName:"p"},"farm")," command with the CLI like so:"),(0,o.kt)(l.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"./subspace-cli-windows-x86_64-v0.5.0-alpha.exe farm\n"))),(0,o.kt)(r.Z,{value:"macos",label:"\ud83c\udf4e macOS",mdxType:"TabItem"},(0,o.kt)("p",null,"Intel Chip:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-macos-x86_64-v0.5.0-alpha farm\n\n")),(0,o.kt)("p",null,"Apple M1 Chip:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-macos-aarch64-v0.5.0-alpha farm\n\n"))),(0,o.kt)(r.Z,{value:"linux",label:"\ud83d\udc27 Ubuntu",mdxType:"TabItem"},(0,o.kt)("p",null,"Ubuntu:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-ubuntu-x86_64-skylake-v0.5.0-alpha farm\n\n")),(0,o.kt)("p",null,"Ubuntu Executable (aarch64):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./subspace-cli-ubuntu-aarch64-v0.5.0-alpha farm\n\n")))),(0,o.kt)("p",null,"You should see the farmer and node start successfully and begin syncing, plotting, and then farming:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Starting node ... (this might take up to couple of minutes)\nNode started successfully!\nStarting farmer ...\nFarmer started successfully!\nInitial plotting for plot: #0 (/home/username/.local/share/subspace-cli/plots)\n\u2801 [00:00:00] 3% [=>                                      ]\n      (31.00 MiB/953.67 MiB) 157.35 GiB/s, plotting, ETA: 0s\n")),(0,o.kt)("p",null,"That's it! Enjoy and Happy Farming!"),(0,o.kt)("h4",{id:"moving-the-farming-process-to-the-background"},"Moving the Farming Process to the Background"),(0,o.kt)(l.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"tmux",label:"Tmux",default:!0,mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Learn More about Tmux",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to learn more about Tmux and its options check out their Repo ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tmux/tmux/wiki"},"here"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new tmux session using a socket file named farming")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ tmux -S farming\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Move process to background by detaching")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Ctrl+b d OR \u2318+b d (Mac)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To re-attach")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ tmux -S farming attach\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To delete farming session")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ tmux kill-session -t farming\n"))),(0,o.kt)(r.Z,{value:"screen",label:"Screen",mdxType:"TabItem"},(0,o.kt)("admonition",{title:"Learn More about Screen",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to learn more about Screen and its options check out their Webpage ",(0,o.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/screen/"},"here"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create new screen using a socket file named farming")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ screen -S farming\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Move process to background by detaching")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Ctrl+d a OR \u2318+d a (Mac)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To re-attach")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ screen -r farming\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To delete farming session")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ screen -S farming -X quit\n")))),(0,o.kt)("h2",{id:"having-trouble"},"Having Trouble?"),(0,o.kt)("p",null,"If you are facing issues with your node/farmer you can try a few of the following things below, if you are unable to get your issue resolved please check our ",(0,o.kt)("a",{parentName:"p",href:"https://forums.subspace.network"},"Forums")," to see if your issue may have been solved, if its a new one feel free to post it! You can also join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/subspace-network"},"Discord")," for additional Peer to Peer help."),(0,o.kt)("h3",{id:"view-your-logs"},"View your Logs"),(0,o.kt)("p",null,"A good place to start if you are facing trouble is by viewing your logs and seeing if there are any errors or insights that might be available. You can find the location for your logs below"),(0,o.kt)(l.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Your Logs will be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"%USERPROFILE%/AppData/Local/subspace-cli/logs"))),(0,o.kt)(r.Z,{value:"macos",label:"\ud83c\udf4emacOS",mdxType:"TabItem"},(0,o.kt)("p",null,"Your Logs will be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/Library/Logs/subspace-cli/"))),(0,o.kt)(r.Z,{value:"linux",label:"\ud83d\udc27Ubuntu",mdxType:"TabItem"},(0,o.kt)("p",null,"Your Logs will be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.local/share/subspace-cli/logs")))),(0,o.kt)("h3",{id:"wipe-node--farmer"},"Wipe Node & Farmer"),(0,o.kt)("admonition",{title:"Updated from a previous version and now having issues?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Occasionally after updating to a new version of the CLI you will need to wipe your node and farmer, generally this should not be required but can be attempted if your farmer is having issues after having had worked fine previously.")),(0,o.kt)("p",null,"To simply restart the node, go to the terminal where you started the ",(0,o.kt)("inlineCode",{parentName:"p"},"farm")," command, and press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," you should see a shutdown message appear and the application will attempt a simple shutdown, if you dont see the message press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," again to force shutdown. You can then simply start the farmer again with the ",(0,o.kt)("inlineCode",{parentName:"p"},"farm")," command you used prior."),(0,o.kt)("p",null,"Use the same file name as the previous init and farm steps, then add the wipe command to free the previous memory that was being used. Generally, only do this if you have severe errors and are prompted by a staff member."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./subspace-cli-file-name wipe\n")),(0,o.kt)("p",null,"After wiping, follow the init and farm steps above to start farming again!"))}k.isMDXComponent=!0},1207:(e,t,a)=>{a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},4948:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Windows_Security_Alert-b960592cd2cbd7f821cfd5855c09a572.png"}}]);