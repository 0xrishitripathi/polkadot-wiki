(self.webpackChunk=self.webpackChunk||[]).push([[7633],{7940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(4165),s=a(5861),o=a(7294),i=a(3444),r=a(7764),l=a(7425);function c(e,t,a){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)((0,n.Z)().mark((function e(t,a,s){var o,l,c,p,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return c=new i.U(o),e.next=21,r.G.create({provider:c});case 21:p=e.sent,(u=a.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"precise":(0,l.Precise)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,a=e.path,i=e.defaultValue,r=e.filter,l=void 0===r?void 0:r,p=(0,o.useState)(""),d=p[0],h=p[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?u(i.toString(),l,t,h):h(i.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,a,h);case 2:if(void 0!==(s=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(s,l,t,h):h(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(r){console.log(r)}}}),[]),d}},7425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,n){var s=void 0;if("polkadot"===a||"statemint"===a)s=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=6}e=parseFloat(e),n((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(s)+" "+t[a].symbol).toString())},Precise:function(e,a,n){n(e=(e=parseFloat(e))/t[a].precision+" "+t[a].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())}}},1427:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),s=a(3366),o=(a(7294),a(3905)),i=a(7940),r=["components"],l={id:"learn-assets",title:"Assets",sidebar_label:"Assets",description:"Learn about fungible and non-fungible assets in the Polkadot network.",keywords:["assets","fungible","non-fungible"],slug:"../learn-assets"},c=void 0,p={unversionedId:"learn/learn-assets",id:"learn/learn-assets",title:"Assets",description:"Learn about fungible and non-fungible assets in the Polkadot network.",source:"@site/../docs/learn/learn-assets.md",sourceDirName:"learn",slug:"/learn-assets",permalink:"/docs/learn-assets",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-assets.md",tags:[],version:"current",lastUpdatedBy:"michalisFr",lastUpdatedAt:1668670550,formattedLastUpdatedAt:"Nov 17, 2022",frontMatter:{id:"learn-assets",title:"Assets",sidebar_label:"Assets",description:"Learn about fungible and non-fungible assets in the Polkadot network.",keywords:["assets","fungible","non-fungible"],slug:"../learn-assets"},sidebar:"docs",previous:{title:"Proxy Accounts",permalink:"/docs/learn-proxies"},next:{title:"DOT",permalink:"/docs/learn-DOT"}},u={},d=[{value:"Fungible Assets",id:"fungible-assets",level:2},{value:"Creation and Management",id:"creation-and-management",level:3},{value:"Transferring Asset Balances",id:"transferring-asset-balances",level:3},{value:"Application Development",id:"application-development",level:3},{value:"Cross-Chain Accounting",id:"cross-chain-accounting",level:3},{value:"Non-Fungible Assets",id:"non-fungible-assets",level:2},{value:"Creation and Management",id:"creation-and-management-1",level:3},{value:"Transferring NFTs",id:"transferring-nfts",level:3},{value:"Advanced Techniques",id:"advanced-techniques",level:2}],h={toc:d};function m(e){var t=e.components,a=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Assets in the Polkadot network can be\nrepresented on several chains. They can also take many forms, from a parachain's native token to\non-chain representations of off-chain reserves. This page focuses on the latter, namely assets that\nwould be issued by a creator (e.g. rights to audited, off-chain reserves held by the creator, or art\nissued as an NFT)."),(0,o.kt)("p",null,"The\n",(0,o.kt)("a",{parentName:"p",href:"https://www.parity.io/blog/statemint-generic-assets-chain-proposing-a-common-good-parachain-to-polkadot-governance/"},"Statemint parachain"),"\n",'\nhosts data structures and logic that specialize in the creation, management, and use of assets in\nthe Polkadot network. Although other\nparachains can host applications dealing with assets on\nStatemint, Statemint can be\nthought of as the "home base" of assets in the network.'),(0,o.kt)("p",null,"Statemint uses DOT as its native\ntoken. The chain yields its governance to its parent Relay Chain, and has no inflation or era-based\nrewards for collators (although collators do receive a portion of transaction fees). As a\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots/"},"common good parachain"),",\nStatemint\nhas a trusted relationship with the Relay Chain,\nand as such, can teleport DOT between itself and the Relay Chain. That is, DOT on Statemint is\njust as good as DOT on the Relay Chain."),(0,o.kt)("p",null,"Statemint does not support smart contracts.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"#advanced-techniques"},"Advanced")," section at the bottom for discussion on using proxy and\nmultisig accounts to replicate oft used contract logic."),(0,o.kt)("h2",{id:"fungible-assets"},"Fungible Assets"),(0,o.kt)("p",null,"Fungible assets are those that are interchangeable, i.e. one unit is equivalent to any other unit\nfor the purposes of claiming the underlying item. Statemint\nrepresents fungible assets in the Assets pallet. For those familiar\nwith the ERC20 standard, this pallet presents a similar interface. However, the logic is encoded\ndirectly in the chain's runtime. As such, operations are not gas metered and instead are benchmarked\nupon every release, leading to efficient execution and stable transaction fees."),(0,o.kt)("h3",{id:"creation-and-management"},"Creation and Management"),(0,o.kt)("p",null,"Anyone on the network can create assets on Statemint, as long as they can reserve the\nrequired deposit of ",(0,o.kt)(i.Z,{network:"polkadot",path:"const.asset.assetDeposit",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"",". The network reserves the deposit on creation. The creator\nalso must specify a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetId"),", an integer of type ",(0,o.kt)("inlineCode",{parentName:"p"},"u32"),", to identify the asset. The ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetId"),'\nshould be the canonical identifier for an asset, as the chain does not enforce the uniqueness of\nmetadata like "name" and "symbol". The creator must also specify a minimum balance, which will\nprevent accounts from having dust balances.'),(0,o.kt)("p",null,"An asset class has a number of privileged roles. The creator of the asset automatically takes on all\nprivileged roles, but can reassign them after creation. These roles are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Owner"),(0,o.kt)("li",{parentName:"ul"},"Issuer"),(0,o.kt)("li",{parentName:"ul"},"Admin"),(0,o.kt)("li",{parentName:"ul"},"Freezer")),(0,o.kt)("p",null,"The owner has the ability to set the accounts responsible for the other three roles, as well as set\nasset metadata (e.g. name, symbol, decimals). The issuer can mint and burn tokens to/from addresses\nof their choosing. The freezer can freeze assets on target addresses or the entire asset class. The\nadmin can make force transfers as well as unfreeze accounts of the asset class. ",(0,o.kt)("strong",{parentName:"p"},"Always refer to\nthe ",(0,o.kt)("a",{parentName:"strong",href:"https://crates.parity.io/pallet_assets/index.html"},"reference documentation")," for certainty on\nprivileged roles.")),(0,o.kt)("p",null,"An asset's details contain one field not accessible to its owner or admin team, that of asset\nsufficiency. Only the network's governance mechanism can deem an asset as ",(0,o.kt)("em",{parentName:"p"},"sufficient"),". A balance of\na non-sufficient asset (the default) can only exist on already-existing accounts. That is, a user\ncould not create a new account on-chain by transferring an insufficient asset to it; the account\nmust already exist by having more than the existential deposit in DOT\n(or a sufficient asset). However, assets deemed ",(0,o.kt)("em",{parentName:"p"},"sufficient")," can\ninstantiate accounts and pay for transaction fees, such\nthat users can transact on Statemint without the need for DOT\n. "),(0,o.kt)("admonition",{title:"Transaction Fees on Polkadot-JS UI ",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Polkadot-JS UI ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps/issues/7812"},"doesn't support the functionality to pay with a sufficient asset yet"),". When using Polkadot-JS UI, transaction fee needs to be paid in  DOT.")),(0,o.kt)("h3",{id:"transferring-asset-balances"},"Transferring Asset Balances"),(0,o.kt)("p",null,"Users have a simple interface, namely the ability to transfer asset balances to other accounts\non-chain. As mentioned before, if the asset is not ",(0,o.kt)("em",{parentName:"p"},"sufficient"),", then the destination account must\nalready exist for the transfer to succeed."),(0,o.kt)("p",null,"The chain also contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive")," function, similar to that of the Balances pallet,\nthat will fail if execution would kill the sending account."),(0,o.kt)("p",null,"Statemint also sweeps dust balances into\ntransfers. For example, if an asset has a minimum balance of 10 and an account has a balance of 25,\nthen an attempt to transfer 20 units would actually transfer all 25."),(0,o.kt)("h3",{id:"application-development"},"Application Development"),(0,o.kt)("p",null,"Statemint provides an ",(0,o.kt)("inlineCode",{parentName:"p"},"approve_transfer"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_approved"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel_approval")," interface. Application developers can use this interface\nso that users can authorize the application to effectuate transfers up to a given amount on behalf\nof an account."),(0,o.kt)("h3",{id:"cross-chain-accounting"},"Cross-Chain Accounting"),(0,o.kt)("p",null,"Statemint uses a reserve-backed system to\nmanage asset transfers to other parachains. It tracks how much of each asset has gone to each\nparachain and will not accept more back from a particular parachain."),(0,o.kt)("p",null,"As a result of this, asset owners can use Statemint\nto track information like the total issuance of their asset in the\nentire network, as parachain balances would be included in the reserve-backed table. Likewise, for\nthe minting and burning of tokens, an asset's team can perform all operations on\nStatemint and propagate any minted tokens\nto other parachains in the network."),(0,o.kt)("p",null,'Parachains that want to send assets to other parachains should do so via instructions to\nStatemint so that the reserve-backed table\nstays up to date. For more info, see the "Moving Assets between Chains in XCM" section of the\n',(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/xcm-the-cross-consensus-message-format/"},"article on the XCM format"),"."),(0,o.kt)("h2",{id:"non-fungible-assets"},"Non-Fungible Assets"),(0,o.kt)("p",null,"Unlike fungible assets, the particular instance of a non-fungible asset (NFT) has meaning separate\nfrom another instance of the same class. Statemint\nrepresents NFTs in the\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_uniques/index.html"},"Uniques pallet"),"."),(0,o.kt)("p",null,"Similar to the Assets pallet, this functionality is encoded into the chain. Operations are\nbenchmarked prior to each release in lieu of any runtime metering, ensuring efficient execution and\nstable transaction fees."),(0,o.kt)("h3",{id:"creation-and-management-1"},"Creation and Management"),(0,o.kt)("p",null,'Anyone on the network can create an asset class, as long as they reserve the required\ndeposit of 100 DOT on Statemint. Creating instances of\na class also requires a per-instance deposit, unless the chain\'s governance designates the class as\n"free holding", allowing the class to mint more instances without deposit. The creator must specify\na ',(0,o.kt)("inlineCode",{parentName:"p"},"ClassId"),", which, like its cousin ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetId"),", should be the canonical identifier for the class."),(0,o.kt)("p",null,"The creator can also specify the same privileged roles of Owner, Admin, Issuer, and Freezer."),(0,o.kt)("p",null,"Asset classes and instances can have associated metadata. The metadata is an array of data that the\nclass Owner can add on-chain, for example, a link to an IPFS hash or other off-chain hosting\nservice. The Uniques pallet also supports setting key/value pairs as attributes to a class or\ninstance."),(0,o.kt)("h3",{id:"transferring-nfts"},"Transferring NFTs"),(0,o.kt)("p",null,"Users can transfer their NFTs to other accounts. The chain also provides an ",(0,o.kt)("inlineCode",{parentName:"p"},"approve_transfer"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_approved"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel_approval")," interface that application developers can use to allow\nusers to authorize an application to transfer an instance on their behalf."),(0,o.kt)("h2",{id:"advanced-techniques"},"Advanced Techniques"),(0,o.kt)("p",null,"Many asset creators on other networks use smart contracts to control privileged functions like\nminting and burning. Although Statemint\ndoes not have a smart contract interface, it contains the\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_multisig/index.html"},"Multisig"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_proxy/index.html"},"Proxy"),", and\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_utility/index.html"},"Utility")," pallets, which will meet most account\nmanagement needs."),(0,o.kt)("p",null,"For example, if a team wants sign-off from two groups to perform a privileged operation, it could\ncreate a 2-of-2 multisig from two anonymous proxies, and then set members from each group as proxies\nto those two accounts."))}m.isMDXComponent=!0},3971:()=>{},6601:()=>{}}]);