"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2884],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),h=o,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={id:"maintain-guides-how-to-upgrade",title:"How to Upgrade Your Validator",sidebar_label:"How to Upgrade Your Validator",descriptions:"Steps on how to upgrade your validator node.",keywords:["upgrade","node","validator","release","session"],slug:"../maintain-guides-how-to-upgrade"},l=void 0,d={unversionedId:"maintain/maintain-guides-how-to-upgrade",id:"maintain/maintain-guides-how-to-upgrade",title:"How to Upgrade Your Validator",description:"Validators perform critical functions for the network, and as such, have strict uptime requirements.",source:"@site/../docs/maintain/maintain-guides-how-to-upgrade.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-upgrade",permalink:"/docs/maintain-guides-how-to-upgrade",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-upgrade.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1663541349,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{id:"maintain-guides-how-to-upgrade",title:"How to Upgrade Your Validator",sidebar_label:"How to Upgrade Your Validator",descriptions:"Steps on how to upgrade your validator node.",keywords:["upgrade","node","validator","release","session"],slug:"../maintain-guides-how-to-upgrade"},sidebar:"docs",previous:{title:"Set Up a Validator with NGINX Reverse Proxy",permalink:"/docs/maintain-guides-how-to-setup-a-validator-with-reverse-proxy"},next:{title:"Monitor your node",permalink:"/docs/maintain-guides-how-to-monitor-your-node"}},p={},u=[{value:"Key Components",id:"key-components",level:2},{value:"Session Keys",id:"session-keys",level:3},{value:"Keystore",id:"keystore",level:3},{value:"Steps",id:"steps",level:2},{value:"Session <code>N</code>",id:"session-n",level:3},{value:"Session <code>N+3</code>",id:"session-n3",level:3}],c={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Validators perform critical functions for the network, and as such, have strict uptime requirements.\nValidators may have to go offline for short-periods of time to upgrade client software or to upgrade\nthe host machine. Usually, standard client upgrades will only require you to stop the service,\nreplace the binary and restart the service. This operation can be executed within a session and if\nperformed correctly will not produce a slashable event."),(0,r.kt)("p",null,"Validators may also need to perform long-lead maintenance tasks that will span more than one\nsession. Under these circumstances, an active validator may chill their stash and be removed from\nthe active validator set. Alternatively, the validator may substitute the active validator server\nwith another allowing the former to undergo maintenance activities."),(0,r.kt)("p",null,"This guide will provide an option for validators to seamlessly substitute an active validator server\nto allow for maintenance operations."),(0,r.kt)("p",null,"The process can take several hours, so make sure you understand the instructions first and plan\naccordingly."),(0,r.kt)("admonition",{title:"Keep an eye out on new releases from the community",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Upgrade or downgrade accordingly.")),(0,r.kt)("h2",{id:"key-components"},"Key Components"),(0,r.kt)("h3",{id:"session-keys"},"Session Keys"),(0,r.kt)("p",null,"Session keys are stored in the client and used to sign validator operations. They are what link your\nvalidator node to your Controller account. If you change them within a session you will have to wait\nfor the current session to finish and a further two sessions to elapse before they are applied."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../learn/learn-keys.md"},"More info about keys in Polkadot.")),(0,r.kt)("h3",{id:"keystore"},"Keystore"),(0,r.kt)("p",null,"Each validator server contains essential private keys in a folder called the ",(0,r.kt)("em",{parentName:"p"},"keystore"),". These keys\nare used by a validator to sign transactions at the network level. If two or more validators sign\ncertain transactions using the same keys, it can lead to an\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking/#slashing"},"equivocation slash"),"."),(0,r.kt)("p",null,"For this reason, it is advised that validators DO NOT CLONE or COPY the ",(0,r.kt)("em",{parentName:"p"},"keystore")," folder and\ninstead generate session keys for each new validator instance."),(0,r.kt)("p",null,"Default keystore path - ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot/chains/<chain>/keystore")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("p",null,"The following steps require a second validator which will be referred to as ",(0,r.kt)("inlineCode",{parentName:"p"},"Validator B"),"; the\noriginal server that is in the active set will be referred to as ",(0,r.kt)("inlineCode",{parentName:"p"},"Validator A"),"."),(0,r.kt)("h3",{id:"session-n"},"Session ",(0,r.kt)("inlineCode",{parentName:"h3"},"N")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start a second node. Once it is synced, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"--validator"),' flag. This is now "Validator B."'),(0,r.kt)("li",{parentName:"ol"},"Generate Session keys for ",(0,r.kt)("strong",{parentName:"li"},"Validator B"),"."),(0,r.kt)("li",{parentName:"ol"},"Submit a ",(0,r.kt)("inlineCode",{parentName:"li"},"set_key")," extrinsic from your Controller account with the session key generated from\n",(0,r.kt)("strong",{parentName:"li"},"Validator B"),"."),(0,r.kt)("li",{parentName:"ol"},"Take note of the Session that this extrinsic was executed in."),(0,r.kt)("li",{parentName:"ol"},"Allow the current session to elapse and then wait for two full sessions.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It is imperative that you keep Validator A running during this time.")," ",(0,r.kt)("inlineCode",{parentName:"p"},"set_key")," does not have an\nimmediate effect and requires two full sessions to elapse before it does. If you do switch off\nValidator A too early you may risk being chilled and face a fault within the Thousand Validator\nProgramme."),(0,r.kt)("h3",{id:"session-n3"},"Session ",(0,r.kt)("inlineCode",{parentName:"h3"},"N+3")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Validator B")," is now acting as your validator - you can safely perform operations on ",(0,r.kt)("strong",{parentName:"p"},"Validator\nA"),"."),(0,r.kt)("p",null,"When you are ready to restore ",(0,r.kt)("strong",{parentName:"p"},"Validator A"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start ",(0,r.kt)("strong",{parentName:"li"},"Validator A"),", sync the database and ensure that it is operating with the ",(0,r.kt)("inlineCode",{parentName:"li"},"--validator"),"\nflag."),(0,r.kt)("li",{parentName:"ol"},"Generate new Session keys for ",(0,r.kt)("strong",{parentName:"li"},"Validator A"),"."),(0,r.kt)("li",{parentName:"ol"},"Submit a ",(0,r.kt)("inlineCode",{parentName:"li"},"set_key")," extrinsic from your Controller account with the session key generated from\n",(0,r.kt)("strong",{parentName:"li"},"Validator A"),"."),(0,r.kt)("li",{parentName:"ol"},"Take note of the Session that this extrinsic was executed in.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Again, it is imperative that Validator B is kept running until the current session finishes and\ntwo further full sessions have elapsed.")),(0,r.kt)("p",null,"Once this time has elapsed, ",(0,r.kt)("strong",{parentName:"p"},"Validator A")," will take over. You can safely stop Validator B."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," To verify that the Session has changed, make sure that a block in the new Session is\nfinalized. You should see log messages like the ones below to confirm the change:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2019-10-28 21:44:13 Applying authority set change scheduled at block #450092\n2019-10-28 21:44:13 Applying GRANDPA set change to new set with 20 authorities\n")))}h.isMDXComponent=!0}}]);