"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2969],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),f=r,h=c["".concat(l,".").concat(f)]||c[f]||p[f]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},43428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"bifrost-dashboards",title:"Bifrost Dashboards",sidebar_label:"Bifrost",description:"bifrost is a decentralized finance hub and liquid staking platform.",keywords:["polkadot","dashboard","dune","bifrost","DeFi"],slug:"../bifrost-dashboards"},l="Bifrost Dashboards",d={unversionedId:"general/dune-analytics/parachain-dashboards/bifrost-dashboards",id:"general/dune-analytics/parachain-dashboards/bifrost-dashboards",title:"Bifrost Dashboards",description:"bifrost is a decentralized finance hub and liquid staking platform.",source:"@site/../docs/general/dune-analytics/parachain-dashboards/bifrost-dashboards.md",sourceDirName:"general/dune-analytics/parachain-dashboards",slug:"/general/dune-analytics/bifrost-dashboards",permalink:"/docs/general/dune-analytics/bifrost-dashboards",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/dune-analytics/parachain-dashboards/bifrost-dashboards.md",tags:[],version:"current",lastUpdatedBy:"MK",lastUpdatedAt:1717658873,formattedLastUpdatedAt:"Jun 6, 2024",frontMatter:{id:"bifrost-dashboards",title:"Bifrost Dashboards",sidebar_label:"Bifrost",description:"bifrost is a decentralized finance hub and liquid staking platform.",keywords:["polkadot","dashboard","dune","bifrost","DeFi"],slug:"../bifrost-dashboards"},sidebar:"docs",previous:{title:"Interlay",permalink:"/docs/general/dune-analytics/interlay-dashboards"},next:{title:"Hydration",permalink:"/docs/general/dune-analytics/hydration-dashboards"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Featured Dashboards on Dune",id:"featured-dashboards-on-dune",level:2},{value:"Key Tables",id:"key-tables",level:2},{value:"Useful Queries",id:"useful-queries",level:2},{value:"Getting Started with Queries",id:"getting-started-with-queries",level:2}],p={toc:c},f="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(f,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bifrost-dashboards"},"Bifrost Dashboards"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Bifrost is a decentralized finance hub and liquid staking platform on the Polkadot network and other\nchains. Users obtain a liquid staking token, vToken, by staking their native tokens. The vToken can\nthen be used in DeFi applications, such as lending, borrowing, and trading."),(0,o.kt)("p",null,"On Polkadot, users can stake DOT, ASTR, FIL, GLMR, Manta at the moment."),(0,o.kt)("p",null,"They can also trade their vTokens in a DEX (stableswap) operating on the Bifrost parachain."),(0,o.kt)("h2",{id:"featured-dashboards-on-dune"},"Featured Dashboards on Dune"),(0,o.kt)("p",null,"Here you'll find a variety of dashboards that help visualize data from the Bifrost parachain:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dune.com/substrate/bifrost"},"bifrost on Polkadot"),": This dashboard provides a comprehensive\nview of staking, value locked, and trading on Bifrost parachain.")),(0,o.kt)("h2",{id:"key-tables"},"Key Tables"),(0,o.kt)("p",null,"Data from the bifrost parachain is organized into several key tables: ",(0,o.kt)("inlineCode",{parentName:"p"},"bifrost.balances"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"bifrost.blocks"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bifrost.calls"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bifrost.events"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bifrost.extrinsics"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bifrost.transfers"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"bifrost.traces")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"bifrost.traces")," table is created by a snapshot script utilizing Bifrost API calls to fetch\naccurate values which would be difficult to calculate from the blockchain events alone."),(0,o.kt)("h2",{id:"useful-queries"},"Useful Queries"),(0,o.kt)("p",null,"Some of the most important queries for Bifrost are mentioned here."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Subject Area"),(0,o.kt)("th",{parentName:"tr",align:null},"Query"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Liquid Staking"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://dune.com/queries/3571958"},"query_3571958")),(0,o.kt)("td",{parentName:"tr",align:null},"Provides amount of vTokens and therefore tokens staked (1=1) Used HydraDX oracle for USD values.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Bifrost Stableswap"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://dune.com/queries/3532234"},"query_3532234")),(0,o.kt)("td",{parentName:"tr",align:null},"Provides price and volume for stableswap pairs, e.g. DOT <-> VDOT")))),(0,o.kt)("p",null,"Dune users are encouraged to study the source code of the queries, including parts of a query that\nmay have been commented out for future use."),(0,o.kt)("p",null,"Uncommenting these parts may accelerate your effort of adopting a query to a slightly different use\ncase."),(0,o.kt)("h2",{id:"getting-started-with-queries"},"Getting Started with Queries"),(0,o.kt)("p",null,"To get started with querying data from Bifrost, you are welcome to use the mentioned queries. You\ncan also use the following DuneSQL queries as examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Bifrost Loan Market Data" showLineNumbers',title:'"Bifrost',Loan:!0,Market:!0,'Data"':!0,showLineNumbers:!0},"WITH A AS(\nselect\nblock_time,\nevent_id,\nsection,\nmethod,\nJSON_ARRAY_LENGTH(data) as array_length,\nJSON_VALUE(data, 'strict $[0]') as account,\n--JSON_QUERY(data, 'strict $[1]') as value_1,\n--JSON_VALUE(data, 'strict $[2]') as some_amount,\nJSON_QUERY(data, 'strict $[3]') as token_in,\nJSON_QUERY(data, 'strict $[4]') as token_out,\nCAST(JSON_VALUE(data, 'strict $[5]') AS UINT256) as amount_in,\nCAST(JSON_VALUE(data, 'strict $[9]') AS UINT256) as amount_out\n--JSON_QUERY(data, 'strict $[7]') as value_7,\n--JSON_QUERY(data, 'strict $[8]') as value_8,\n--JSON_QUERY(data, 'strict $[9]') as value_9\nfrom bifrost.events\nwhere section='stableAsset' and method in ('TokenSwapped') and block_time > TIMESTAMP '2024-05-01'\n)\nSELECT\ndate_trunc('hour', block_time) as \"day\",\nSUM(amount_in)/1e10 as dot_volume_swapped,\n1.000 * SUM(amount_in)/SUM(amount_out) as avg_price,\n(1.000 * SUM(amount_in)/SUM(amount_out)) < 1 as price_low -- very low prices\nFROM A\nwhere token_in='{\"token2\":0}' and token_out='{\"vToken2\":0}' and amount_out>0 and block_time > TIMESTAMP '2024-05-01'\nGROUP BY 1\norder by 1 DESC\n\n")),(0,o.kt)("p",null,"The query is fairly typical for a parachain query on Dune. It parses events from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"bifrost.events")," table, and calculates the aggregate values for each hour."),(0,o.kt)("p",null,"The query uses Dune's native UINT256 type, which allows to deal with very large numbers and still\nmaintain precision."),(0,o.kt)("p",null,"Query result:"),(0,o.kt)("iframe",{src:"https://dune.com/embeds/3532234/5941878/",height:"350",width:"100%"}),(0,o.kt)("admonition",{title:"DuneSQL Reference",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more information on DuneSQL, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/general/dunesql-cheatsheet"},"DuneSQL Cheatsheet"),"\nand\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.dune.com/query-engine/Functions-and-operators/index"},"DuneSQL Official Documentation"),".")))}h.isMDXComponent=!0}}]);