"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2683],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35703:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);const o=function(e){var t,a=e.message,o=(0,n.useState)(!0),r=o[0],s=o[1];return n.createElement(n.Fragment,null,r&&n.createElement("div",{className:"message-box"},n.createElement("button",{className:"close-button",onClick:function(){s(!1)}},"\u2716 "),n.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=a,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},79388:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=a(35703),i=["components"],l={id:"learn-guides-claims",title:"Polkadot-JS Guides about Claims",sidebar_label:"Claim Guides",description:"Step-by-step guide on how to claim your tokens.",keywords:["claims","tokens","kusama","polkadot"],slug:"../learn-guides-claims"},c=void 0,u={unversionedId:"learn/learn-guides-claims",id:"learn/learn-guides-claims",title:"Polkadot-JS Guides about Claims",description:"Step-by-step guide on how to claim your tokens.",source:"@site/../docs/learn/learn-guides-claims.md",sourceDirName:"learn",slug:"/learn-guides-claims",permalink:"/docs/learn-guides-claims",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-claims.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1720007534,formattedLastUpdatedAt:"Jul 3, 2024",frontMatter:{id:"learn-guides-claims",title:"Polkadot-JS Guides about Claims",sidebar_label:"Claim Guides",description:"Step-by-step guide on how to claim your tokens.",keywords:["claims","tokens","kusama","polkadot"],slug:"../learn-guides-claims"},sidebar:"docs",previous:{title:"DOT <> KSM Bridge",permalink:"/docs/learn-guides-dot-ksm-bridge"},next:{title:"Architecture",permalink:"/docs/learn-architecture"}},d={},p=[{value:"Generate an Account",id:"generate-an-account",level:2},{value:"Claiming Tokens",id:"claiming-tokens",level:2},{value:"Select Accounts",id:"select-accounts",level:3},{value:"Select Account on Ethereum",id:"select-account-on-ethereum",level:4},{value:"Sign Message on Ethereum &amp; Claim",id:"sign-message-on-ethereum--claim",level:3},{value:"Verifying your Claim",id:"verifying-your-claim",level:3}],m={toc:p},h="wrapper";function g(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)(h,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,r.kt)(s.Z,{message:"Screenshots on this page are based on Polkadot, but note that the same process applies to Kusama.",mdxType:"MessageBox"}),(0,r.kt)("p",null,"If you participated in a previous DOT sale before 2020 and received your DOT allocation indicator\ntokens, you can now claim your DOT (and a proportional amount of KSM on the Kusama network). The\nclaim process connects the address where your DOT indicators have been stored on Ethereum with a\nnative Polkadot address and, if your ETH\naddress is eligible, will pay the tokens to the\nDOT address."),(0,r.kt)("p",null,"To do this, you must sign a message on Ethereum containing the address of your\nPolkadot account. You can do this by using the\nPolkadot-JS UI ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/claims"},"Claims app"),". Ensure that you are connected to\nthe Polkadot network (displayed in the\nupper-left-hand corner of the screen)."),(0,r.kt)("admonition",{title:"Third-party claim processes",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Claiming using a third-party process can lead to losing your allocation; therefore, we cannot\nrecommend using any third-party apps. Manually specifying your transaction data, as specified in our\nclaims process below, is the only way to ensure you will receive your allocation.")),(0,r.kt)("h2",{id:"generate-an-account"},"Generate an Account"),(0,r.kt)("p",null,"You will need to generate a Polkadot account\nto claim DOT. See the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/wallets-and-extensions"},"available wallets and extensions")," for more information about\nwallets and browser extensions you can use to create an account. In terms of hardware wallet\nsupport, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ledger"},"Ledger")," devices or\n",(0,r.kt)("a",{parentName:"p",href:"/docs/polkadot-vault"},"Polkadot Vault"),"."),(0,r.kt)("h2",{id:"claiming-tokens"},"Claiming Tokens"),(0,r.kt)("p",null,"The Polkadot-JS ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/claims"},"Claims app")," will guide you through the\nprocess of claiming the tokens."),(0,r.kt)("h3",{id:"select-accounts"},"Select Accounts"),(0,r.kt)("p",null,'Select the account you would like to claim the\nDOT into and click the "Continue" button to\nproceed. Your screen should look something like this:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"claim select dot account",src:a(68294).Z,width:"1102",height:"301"})),(0,r.kt)("h4",{id:"select-account-on-ethereum"},"Select Account on Ethereum"),(0,r.kt)("p",null,'Paste the Ethereum address with the DOT allocation indicator tokens and click the "Continue" button\nto proceed.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"claim select eth account",src:a(16204).Z,width:"1092",height:"453"})),(0,r.kt)("h3",{id:"sign-message-on-ethereum--claim"},"Sign Message on Ethereum & Claim"),(0,r.kt)("p",null,'The hex-encoded string that follows the sentence: "Pay\nDOT to the\nPolkadot account:" is the hex-encoded public\nkey of your Polkadot account, minus the ',(0,r.kt)("inlineCode",{parentName:"p"},"0x"),"\nprefix."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"claim copy msg",src:a(55388).Z,width:"1107",height:"888"})),(0,r.kt)("p",null,"Go to\n",(0,r.kt)("a",{parentName:"p",href:"https://app.mycrypto.com/sign-message"},'the "Sign & Verify Message" tab on the MyCrypto web application'),'.\nMyCrypto is good to use if you have stored the key to the Ethereum account holding your DOT\nindicator tokens on a hardware device like a Ledger Nano. It also supports raw private keys,\nmnemonics, and the Polkadot Vault. After unlocking your Ethereum wallet, copy and paste the\noutputted sentence on the Polkadot-JS UI into the message box on the MyCrypto app. When you click\n"Sign Message" you will get a JSON output signature as shown below:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"claim get signature",src:a(94721).Z,width:"847",height:"673"})),(0,r.kt)("p",null,'Copy and paste the JSON output of the signed message from MyCrypto into the input box on the\nPolkadot-JS UI and click "Confirm Claim."'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"claim paste signature",src:a(7619).Z,width:"1933",height:"823"})),(0,r.kt)("p",null,"At this point, if you are eligible, you will see a success message if everything went right and your\nDOT will now be in the account that you claimed\nto. Congratulations! You can now participate in aspects of the\nPolkadot network such as\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"governance")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"staking"),"."),(0,r.kt)("h3",{id:"verifying-your-claim"},"Verifying your Claim"),(0,r.kt)("p",null,"After you make an on-chain claim for DOT, your\nYour account balance should be updated immediately."))}g.isMDXComponent=!0},55388:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-copy-msg-9202762828ee9a331ef58dd563e555b5.png"},94721:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-get-signature-654200548d6f5f1a374d9ccc9a164c67.png"},7619:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-paste-signature-2f64e7c24774df3fede97597551cc9c1.png"},68294:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-select-dot-account-a31d56bcfdb38d2783dd347b8e902e68.png"},16204:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-select-eth-account-d1e003f87a8b53786a325ec5339a626d.png"}}]);