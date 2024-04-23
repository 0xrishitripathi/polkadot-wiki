(self.webpackChunk=self.webpackChunk||[]).push([[230],{47940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var o=a(74165),n=a(15861),i=a(67294),s=a(87152),r=a(9712),l=a(67425);function p(t,e,a){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)((0,o.Z)().mark((function t(e,a,n){var i,l,p,d,u;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=void 0,l=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){t.next=18;break}return t.abrupt("return");case 18:return p=new s.U(i),t.next=21,r.G.create({provider:p});case 21:d=t.sent,(u=a.split(".")).forEach((function(t){t in d&&(d=d[t])})),t.t1=u[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return l=d.toString(),t.abrupt("break",35);case 29:return t.next=31,d();case 31:return l=(l=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+a);case 35:return t.abrupt("return",l);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t,e,a,o){switch(e){case"humanReadable":(0,l.HumanReadable)(t,a,o);break;case"precise":(0,l.Precise)(t,a,o);break;case"blocksToDays":(0,l.BlocksToDays)(t,o);break;case"erasToDays":(0,l.ErasToDays)(t,o,a);break;case"percentage":(0,l.Percentage)(t,o);break;case"permillToPercent":(0,l.PermillToPercent)(t,o);break;case"arrayLength":(0,l.ArrayLength)(t,o);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(t){var e=t.network,a=t.path,s=t.defaultValue,r=t.filter,l=void 0===r?void 0:r,d=(0,i.useState)(""),c=d[0],k=d[1];return e=e.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?u(s.toString(),l,e,k):k(s.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":t="wss://polkadot-asset-hub-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var t=(0,n.Z)((0,o.Z)().mark((function t(){var n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e,a,k);case 2:if(void 0!==(n=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==l?u(n,l,e,k):k(n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{i()}catch(r){console.log(r)}}}),[]),c}},67425:t=>{var e="polkadot",a="kusama",o="statemine",n="statemint",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};t.exports={HumanReadable:function(t,s,r){var l=void 0;if(s===e||s===n)l=3;else{if(s!==a&&s!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}t=parseFloat(t),r((t=Number.isInteger(t/i[s].precision)?t/i[s].precision+" "+i[s].symbol:(t/i[s].precision).toFixed(l)+" "+i[s].symbol).toString())},Precise:function(t,e,a){a(t=(t=parseFloat(t))/i[e].precision+" "+i[e].symbol)},BlocksToDays:function(t,e){e((t=6*t/86400).toString())},ErasToDays:function(t,i,s){var r=void 0;if(s===e||s===n)r=1;else{if(s!==a&&s!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");r=4}i((t/=r).toString())},Percentage:function(t,e){e((t/=1e7).toString())},PermillToPercent:function(t,e){e((t/=1e4).toString())},ArrayLength:function(t,e){e((t=t.split(",").length).toString())}}},46494:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var o=a(87462),n=a(63366),i=(a(67294),a(3905)),s=(a(47940),["components"]),r={id:"learn-guides-nominator",title:"Polkadot-JS Guides For Nominators",sidebar_label:"Nominator Guides",description:"Polkadot-JS Guides for Nominators.",keyword:["nominate","stake","staking","claim","rewards","polkadot-js"],slug:"../learn-guides-nominator"},l=void 0,p={unversionedId:"learn/learn-guides-nominator",id:"learn/learn-guides-nominator",title:"Polkadot-JS Guides For Nominators",description:"Polkadot-JS Guides for Nominators.",source:"@site/../docs/learn/learn-guides-nominator.md",sourceDirName:"learn",slug:"/learn-guides-nominator",permalink:"/docs/learn-guides-nominator",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-nominator.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1713872889,formattedLastUpdatedAt:"Apr 23, 2024",frontMatter:{id:"learn-guides-nominator",title:"Polkadot-JS Guides For Nominators",sidebar_label:"Nominator Guides",description:"Polkadot-JS Guides for Nominators.",keyword:["nominate","stake","staking","claim","rewards","polkadot-js"],slug:"../learn-guides-nominator"},sidebar:"docs",previous:{title:"Staking Guides",permalink:"/docs/learn-guides-staking"},next:{title:"Nomination Pool Guides",permalink:"/docs/learn-guides-staking-pools"}},d={},u=[{value:"Nominate Using Polkadot-JS",id:"nominate-using-polkadot-js",level:2},{value:"Bond your tokens",id:"bond-your-tokens",level:3},{value:"Nominate a validator",id:"nominate-a-validator",level:3},{value:"Stop nominating",id:"stop-nominating",level:3},{value:"Claiming Rewards with Polkadot-JS",id:"claiming-rewards-with-polkadot-js",level:2},{value:"Using Command-Line Interface (CLI)",id:"using-command-line-interface-cli",level:2},{value:"Step 1: Install @polkadot/api-cli",id:"step-1-install-polkadotapi-cli",level:3},{value:"Step 2: Bond Tokens",id:"step-2-bond-tokens",level:3},{value:"Step 3: Nominate a validator",id:"step-3-nominate-a-validator",level:3}],c={toc:u},k="wrapper";function h(t){var e=t.components,r=(0,n.Z)(t,s);return(0,i.kt)(k,(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"sticky",style:{zIndex:1}},(0,i.kt)("br",null),(0,i.kt)("p",null,"Polkadot-JS is for developers and power users only. If you need help using the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/polkadotjs-ui"},"Polkadot-JS UI"),", you can contact the\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/home"},"Polkadot Support Team"),". For more user-friendly tools\nsee the ",(0,i.kt)("a",{parentName:"p",href:"./wallets-index"},"wallets"),", ",(0,i.kt)("a",{parentName:"p",href:"./apps-index"},"apps")," and ",(0,i.kt)("a",{parentName:"p",href:"./dashboards-index"},"dashboard")," pages.")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"this page")," to learn about staking."),(0,i.kt)("h2",{id:"nominate-using-polkadot-js"},"Nominate Using Polkadot-JS"),(0,i.kt)("admonition",{title:"Video Tutorials",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/FCXC0CDhyS4?t=219"},"How to Nominate/Stake")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/7VlTncHCGPc"},"Staking with a Ledger device and Polkadot-JS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=jL-N_IWiYVA"},"Staking with a Ledger device and Ledger Live")))),(0,i.kt)("h3",{id:"bond-your-tokens"},"Bond your tokens"),(0,i.kt)("admonition",{title:"Support Article",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Read the support article about\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000168057-polkadot-js-ui-how-do-i-stake-nominate-on-polkadot-"},"How to Bond Tokens and Nominate"),".")),(0,i.kt)("p",null,"On the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS UI"),' navigate to the "Staking" tab (within the\n"Network" menu).'),(0,i.kt)("p",null,'The "Staking Overview" subsection will show you all the active validators and their information -\ntheir identities, the amount of KSM that are staking for them, amount that is their own provided\nstake, how much they charge in commission, the era points they\'ve earned in the current era, and the\nlast block number that they produced. If you click on the chart button it will take you to the\n"Validator Stats" page for that validator that shows you more detailed and historical information\nabout the validator\'s stake, rewards and slashes.'),(0,i.kt)("p",null,'The "Account actions" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"link"),") allows you\nto stake and nominate."),(0,i.kt)("p",null,'The "Payouts" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/payouts"},"link"),") allows you to\nclaim rewards from staking."),(0,i.kt)("p",null,'The "Targets" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/targets"},"link"),") will help you\nestimate your earnings and this is where it's good to start picking favorites."),(0,i.kt)("p",null,'The "Waiting" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/waiting"},"link"),") lists all pending\nvalidators that are awaiting more nominations to enter the active validator set. Validators will\nstay in the waiting queue until they have enough KSM backing them (as allocated through the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"Phragm\xe9n election mechanism"),"). It is possible validator can remain in the\nqueue for a very long time if they never get enough backing."),(0,i.kt)("p",null,'The "Validator Stats" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/query"},"link"),") allows you\nto query a validator's stash address and see historical charts on era points, elected stake,\nrewards, and slashes."),(0,i.kt)("p",null,'Pick "Account actions" underneath "Network" > "Staking", then click the "+ Nominator" button.'),(0,i.kt)("p",null,"You will see a modal window that looks like the below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nominator-update-1",src:a(86367).Z,width:"2194",height:"1170"})),(0,i.kt)("p",null,'Select a "value bonded" that is ',(0,i.kt)("strong",{parentName:"p"},"less")," than the total amount of KSM you have, so you have some\nleft over to pay transaction fees. Transaction fees are currently at least 0.01 KSM, but they are\ndynamic based on a variety of factors including the load of recent blocks."),(0,i.kt)("p",null,"Also be mindful of the reaping threshold - the amount that must remain in an account lest it be\nburned. That amount is 0.01 in Kusama, so it's recommended to keep at least 0.1 KSM in your account\nto be on the safe side."),(0,i.kt)("p",null,"Choose whatever payment destination that makes sense to you. If you're unsure, you can choose \"Stash\naccount (increase amount at stake)\" to simply accrue the rewards into the amount you're staking and\nearn compound interest."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Payout account selection dropdown with the custom account option highlighted",src:a(42394).Z,width:"742",height:"245"})),(0,i.kt)("h3",{id:"nominate-a-validator"},"Nominate a validator"),(0,i.kt)("admonition",{title:"Support Article",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Read the support article about\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000150130-how-do-i-know-which-validators-to-choose-"},"How to Select Validators"),".")),(0,i.kt)("p",null,"You are now bonded. Being bonded means your tokens are locked and could be\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking#slashing"},"slashed")," if the validators you nominate misbehave. All bonded funds\ncan now be distributed to up to 16  validators. Be\ncareful about the validators you choose since you will be slashed if your validator commits an\noffence."),(0,i.kt)("p",null,'Click on "Nominate" on an account you\'ve bonded and you will be presented with another popup asking\nyou to select some validators.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nominating validators",src:a(47043).Z,width:"2208",height:"982"})),(0,i.kt)("p",null,"Select them, confirm the transaction, and you're done - you are now nominating. Your nominations\nwill become active in the next era. Eras last six hours on Kusama - depending on when you do this,\nyour nominations may become active almost immediately, or you may have to wait almost the entire six\nhours before your nominations are active. You can check how far along Kusama is in the current era\non the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking"},"Staking page"),"."),(0,i.kt)("p",null,"Assuming at least one of your nominations ends up in the active validator set, you will start to get\nrewards allocated to you. In order to claim them (i.e., add them to your account), you must manually\nclaim them. To initiate a claim, you can do it yourself or have the validator that you staked for\ninitiate a claim. This is to help optimize the effectiveness and storage of payouts on Kusama. See\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking#claiming-rewards"},"Claiming Rewards")," section of the Staking wiki page for\nmore details."),(0,i.kt)("h3",{id:"stop-nominating"},"Stop nominating"),(0,i.kt)("admonition",{title:"Support Article",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Read the support article about\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000167902-how-can-i-unstake-my-tokens-again-"},"How to Stop Nominating & Unbond Tokens"),".\nSee also the support article about\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170241-polkadot-js-ui-how-to-rebond-tokens-during-the-unbonding-period"},"How to Rebond Tokens"),".")),(0,i.kt)("p",null,"At some point, you might decide to stop nominating one or more validators. You can always change who\nyou're nominating, but you cannot withdraw your tokens unless you unbond them."),(0,i.kt)("h2",{id:"claiming-rewards-with-polkadot-js"},"Claiming Rewards with Polkadot-JS"),(0,i.kt)("p",null,"Anyone can trigger a payout for any validator, as long as they are willing to pay the transaction\nfee. Someone must submit a transaction with a validator ID and an era index.\nPolkadot will automatically calculate that\nvalidator's reward and distribute the rewards pro rata."),(0,i.kt)("p",null,"These details are handled for you automatically if you use the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/payout"},"Polkadot-JS UI"),", which also allows you to submit\nbatches of eras at once."),(0,i.kt)("p",null,'To claim rewards on Polkadot-JS UI, you will need to be in the "Payouts" tab underneath "Staking",\nwhich will list all the pending payouts for your stashes.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"pending-payouts",src:a(26416).Z,width:"2876",height:"600"})),(0,i.kt)("p",null,'To then claim your reward, select the "Payout all" button. This will prompt you to select your stash\naccounts for payout.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"select-payouts",src:a(32348).Z,width:"2192",height:"624"})),(0,i.kt)("p",null,"Once you are done with payout, another screen will appear asking for you to sign and submit the\ntransaction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"transaction-payouts",src:a(41083).Z,width:"2878",height:"818"})),(0,i.kt)("h2",{id:"using-command-line-interface-cli"},"Using Command-Line Interface (CLI)"),(0,i.kt)("p",null,"Apart from using the Polkadot-JS UI to participate in the staking, you can do all these things in\nCLI instead. The CLI approach allows you to interact with the\nPolkadot network without using Polkadot-JS."),(0,i.kt)("h3",{id:"step-1-install-polkadotapi-cli"},"Step 1: Install @polkadot/api-cli"),(0,i.kt)("p",null,"We assume you have installed ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org"},"NodeJS with npm"),". Run the following command to\ninstall the ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/api-cli")," globally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @polkadot/api-cli\n")),(0,i.kt)("h3",{id:"step-2-bond-tokens"},"Step 2: Bond Tokens"),(0,i.kt)("admonition",{title:"Controller accounts are deprecated",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Controller accounts are deprecated. For more information, see\n",(0,i.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/staking-controller-deprecation-plan-staking-ui-leads-comms/2748"},"this discussion"),".")),(0,i.kt)("p",null,"Executing the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "MNEMONIC_PHRASE" tx.staking.bond CONTROLLER_ADDRESS NUMBER_OF_TOKENS REWARD_DESTINATION --ws WEBSOCKET_ENDPOINT\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CONTROLLER_ADDRESS"),": An address you would like to bond to the stash account. (Controller accounts\nare now deprecated. Refer to\n",(0,i.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/staking-controller-deprecation-plan-staking-ui-leads-comms/2748"},"this discussion"),"\nfor additional context)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NUMBER_OF_TOKENS"),": The number of DOT you would\nlike to stake to the network.\nDOT has ten decimal places and is always represented as an integer with zeroes at the end. So 1 DOT = 10_000_000_000 Plancks. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-DOT"},"this page"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"REWARD_DESTINATION"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Staked")," - Pay into the stash account, increasing the amount at stake accordingly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stash")," - Pay into the stash account, not increasing the amount at stake."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Account")," - Pay into a custom account, like so:\n",(0,i.kt)("inlineCode",{parentName:"li"},"Account 1n8msHozaNxHicWFnRnNXzvqkYPWczkzUUkHhKw6o2BLBdo"),"","."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Controller")," - Pay into the controller account.")),(0,i.kt)("p",null,"Example for Kusama:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "xxxx xxxxx xxxx xxxxx" tx.staking.bond DMTHrNcmA8QbqRS4rBq8LXn8ipyczFoNMb1X4cY2WD9tdBX 1000000000000 Staked --ws wss://kusama-rpc.polkadot.io\n')),(0,i.kt)("p",null,"For wss endpoints see ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-endpoints"},"this page"),"."),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'...\n...\n    "status": {\n      "InBlock": "0x0ed1ec0ba69564e8f98958d69f826adef895b5617366a32a3aa384290e98514e"\n    }\n')),(0,i.kt)("p",null,"You can check the transaction status by using the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"InBlock")," in\n",(0,i.kt)("a",{parentName:"p",href:"https://www.subscan.io/"},"Subscan"),". Also, you can verify the bonding state under the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"Staking")," page on the Polkadot-JS UI."),(0,i.kt)("h3",{id:"step-3-nominate-a-validator"},"Step 3: Nominate a validator"),(0,i.kt)("p",null,"To nominate a validator, you can execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "MNEMONIC_PHRASE" tx.staking.nominate \'["VALIDATOR_ADDRESS"]\' --ws WS_ENDPOINT\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "xxxx xxxxx xxxx xxxxx" tx.staking.nominate \'["CmD9vaMYoiKe7HiFnfkftwvhKbxN9bhyjcDrfFRGbifJEG8","E457XaKbj2yTB2URy8N4UuzmyuFRkcdxYs67UvSgVr7HyFb"]\' --ws wss://kusama-rpc.polkadot.io\n')),(0,i.kt)("p",null,"After a few seconds, you should see the hash of the transaction, and if you would like to verify the\nnomination status, you can check that on the Polkadot-JS UI as well."))}h.isMDXComponent=!0},86367:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/kusama_nominator_popup-633f75e8b404699f33b7d78f5ad7fd34.png"},47043:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/kusama_nominator_selection-8e7c4058648339294ebce2e1ce0c58e8.png"},42394:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/01-cc60f0cb7494041501c0ed80e5dca352.png"},41083:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/polkadotjs_payout_complete-87ad124d5d70e50c16f1434074562d70.png"},26416:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/polkadotjs_payout_page-fc4f62399f71b542e9eaac01405ef528.png"},32348:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/polkadotjs_payout_popup-feb847cdfae64f3fa247cdb2beea4ba6.png"},46601:()=>{}}]);