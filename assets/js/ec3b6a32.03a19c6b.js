"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"learn-nft",title:"NFTs",sidebar_label:"Introduction to NFTs",description:"The NFT Landscape of the Polkadot Ecosystem.",keywords:["NFT","non-fungible token","NFT 2.0"],slug:"../learn-nft"},l=void 0,c={unversionedId:"learn/learn-nft",id:"learn/learn-nft",title:"NFTs",description:"The NFT Landscape of the Polkadot Ecosystem.",source:"@site/../docs/learn/learn-nft.md",sourceDirName:"learn",slug:"/learn-nft",permalink:"/docs/learn-nft",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-nft.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1693818728,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{id:"learn-nft",title:"NFTs",sidebar_label:"Introduction to NFTs",description:"The NFT Landscape of the Polkadot Ecosystem.",keywords:["NFT","non-fungible token","NFT 2.0"],slug:"../learn-nft"},sidebar:"docs",previous:{title:"Teleporting Assets",permalink:"/docs/learn-teleport"},next:{title:"Components",permalink:"/docs/learn-components-index"}},d={},p=[{value:"Fungibility",id:"fungibility",level:2},{value:"NFT Standards",id:"nft-standards",level:2},{value:"A typical NFT on Ethereum",id:"a-typical-nft-on-ethereum",level:3},{value:"NFTs in Polkadot &amp; Kusama",id:"nfts-in-polkadot--kusama",level:2},{value:"Bridging",id:"bridging",level:2},{value:"References",id:"references",level:2}],u={toc:p},h="wrapper";function f(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)(h,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page is a high-level overview of NFTs in the blockchain space and the various approaches to\nNFTs within the Polkadot network."),(0,i.kt)("h2",{id:"fungibility"},"Fungibility"),(0,i.kt)("p",null,"NFT stands for ",(0,i.kt)("em",{parentName:"p"},"non-fungible token"),". Fungibility means interchangeability inside of a group. In\ntheory, a $20 bill is always worth $20 in a store and identical in value to any other $20 bill. It\nis not, however, fungible with a $1 or $100 dollar bill (outside its group)."),(0,i.kt)("p",null,"A Pokemon\u2122 trading card of a Charizard is non-fungible with a card of Squirtle, whereas editions of\nCharizard are fungible with each other."),(0,i.kt)("p",null,"Fungibility is a spectrum - what is fungible to some might not be fungible to others. In reality,\nPokemon\u2122 cards, the canonical example of non-fungible assets are more fungible than US dollar\nbills, each of which has a unique serial number that may be important to a government agency. The\ncards have no serial numbers ","[1]","."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.investopedia.com/thmb/Nr-RLORu5CX_lIWZfLmV5X0eIrc=/613x345/smart/filters:no_upscale()/Clipboard01-d20f6eb9351e4f36a46e11fd87b53b2d.jpg",alt:"one dollar"})),(0,i.kt)("p",null,'Additionally, a digital item like a "purple magic sword" in a game may be fungible with another\nvisually identical sword if all the player cares about is the looks of their character. But if the\nother sword has a different function, and that function influences the outcome of an adventure the\nplayer is about to embark on, then visually identical swords are absolutely non-fungible.'),(0,i.kt)("p",null,"Bearing that in mind, the simplest explanation of NFTs is that ",(0,i.kt)("strong",{parentName:"p"},'NFTs are rows of arbitrary,\nproject-specific, and non-interchangeable data that can be cryptographically proven to "belong" to\nsomeone'),". This data can be anything - concert tickets, attendance badges, simple words, avatars,\nplots of land in a metaverse, audio clips, house deeds, mortgages, and more."),(0,i.kt)("h2",{id:"nft-standards"},"NFT Standards"),(0,i.kt)("p",null,'A general-purpose blockchain is not built to natively understand the concept of NFTs. It is only\nnatively aware and optimized for its own native tokens, but implementations built on such a chain\nare essentially "hacks".'),(0,i.kt)("p",null,'For example, Ethereum is a general-purpose blockchain that does not have the concept of "tokens"\n(fungible or not) built-in. Tokens in Ethereum are essentially spreadsheets of information to be\ninterpreted and read in a certain way by various user interfaces. This ',(0,i.kt)("em",{parentName:"p"},"way")," in which they should\nread them is called a ",(0,i.kt)("em",{parentName:"p"},"standard"),"."),(0,i.kt)("p",null,"The most widespread fungible token standard you may have heard of is ERC20, while the most\nwidespread NFT standard is ERC721, followed closely by ERC1155. The downside of having to define\nthese standards is that they are always instructions for how to read a spreadsheet pretending to\nserve information in a certain way, which by definition cannot be optimized. For this reason, even\non a good day of extremely low network congestion, interactions with NFTs on any EVM chain will cost\na few dollars but were on average around $100 per interaction (transfer, mint, sale) in 2021 on\nEthereum."),(0,i.kt)("p",null,"This prevents use cases that go beyond the current craze of ",(0,i.kt)("em",{parentName:"p"},"digital dust gathering NFTs"),' on\nEthereum - profile pictures, generative "look once and then put away" art, ',(0,i.kt)("a",{parentName:"p",href:"ens"},"ENS")," addresses, and\n",(0,i.kt)("a",{parentName:"p",href:"https://poap.xyz/"},"proof of attendance badges")," (which have since moved to the xDAI chain to save on\ngas fees)."),(0,i.kt)("h3",{id:"a-typical-nft-on-ethereum"},"A typical ",(0,i.kt)("a",{parentName:"h3",href:"https://opensea.io/assets/ethereum/0x2127fe7ffce4380459cced92f2d4793f3af094a4/12598"},"NFT on Ethereum")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"samurai nft",src:n(78101).Z,width:"506",height:"507"})),(0,i.kt)("p",null,"For the sake of comparison, we can refer to these as NFTs 1.0: static NFTs that are almost\nexclusively image-based collectibles of varying rarity."),(0,i.kt)("h2",{id:"nfts-in-polkadot--kusama"},"NFTs in Polkadot & Kusama"),(0,i.kt)("p",null,"This is where Polkadot's technology shines and\nwhere NFTs 2.0 come into play. By allowing\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"heterogeneous application-specific shards")," to exist, builders can natively\noptimize for complex NFT use cases without tradeoffs that would make interacting with the system\nprohibitively inefficient and expensive in other environments."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nft-projects"},"this page")," for more information about specific NFT project on Polkadot\nand Kusama.")),(0,i.kt)("h2",{id:"bridging"},"Bridging"),(0,i.kt)("p",null,"Bridging to and from Substrate chains and EVM chains takes much effort but is a highly desired\nfeature in the NFT industry. Merging the collector and customer base has significant implications,\nso multiple projects focus on making this possible."),(0,i.kt)("p",null,"Apart from RMRK (Substrate-to-Substrate seamless teleportation natively with ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCMP"),")\nand Efinity (Paratoken), the following efforts are underway:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mynft.com/"},(0,i.kt)("strong",{parentName:"a"},"MyNFT")),": an EVM to EVM bridging effort."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RMRK <-> EVM")," Simplification bridge: a bridge developed during the\n",(0,i.kt)("a",{parentName:"li",href:"https://rmrk.devpost.com"},"RMRK hackathon")," for porting RMRK NFTs into simplified IOUs on EVM\nchains")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[1]",": ",(0,i.kt)("a",{parentName:"li",href:"https://www.investopedia.com/terms/l/liars-poker.asp"},"Investopedia")),(0,i.kt)("li",{parentName:"ul"},"[2]",":\n",(0,i.kt)("a",{parentName:"li",href:"https://unique.network/blog/chelobricks-making-waves-with-10-000-substrate-based-nfts/"},"Unique Network's Chelobrick"))))}f.isMDXComponent=!0},78101:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/samurai-830479330323f7feeae0b981479ad9cc.png"}}]);