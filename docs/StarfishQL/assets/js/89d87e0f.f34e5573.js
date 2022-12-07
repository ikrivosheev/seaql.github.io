"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[953],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},i="Querying Graph Data",l={unversionedId:"architecture-of-graph-query-engine/querying-graph-data",id:"architecture-of-graph-query-engine/querying-graph-data",title:"Querying Graph Data",description:"StarfishQL allows the user to perform queries for graphs and vectors of nodes with highly customizable parameters.",source:"@site/docs/02-architecture-of-graph-query-engine/06-querying-graph-data.md",sourceDirName:"02-architecture-of-graph-query-engine",slug:"/architecture-of-graph-query-engine/querying-graph-data",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/querying-graph-data",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/02-architecture-of-graph-query-engine/06-querying-graph-data.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1670209191,formattedLastUpdatedAt:"Dec 5, 2022",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Calculating Node Connectivity",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/calculating-node-connectivity"},next:{title:"Web API Layer",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/web-api-layer"}},p={},s=[{value:"Graph example",id:"graph-example",level:2},{value:"Vector example",id:"vector-example",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"querying-graph-data"},"Querying Graph Data"),(0,a.kt)("p",null,"StarfishQL allows the user to perform queries for graphs and vectors of nodes with highly customizable parameters."),(0,a.kt)("h2",{id:"graph-example"},"Graph example"),(0,a.kt)("p",null,"To find the graph of ",(0,a.kt)("inlineCode",{parentName:"p"},"sea-orm")," and its dependents up to the depth of 3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// Body of a POST request to be sent to `/query`\n{\n    "graph": {\n        "of": "crate",\n        "constraints": [\n            {\n                "rootNodes": [\n                    "sea-orm"\n                ]\n            },\n            {\n                "edge": {\n                    "of": "depends",\n                    "traversal": {\n                        "reverseDirection": true\n                    }\n                }\n            },\n            {\n                "limit": {\n                    "depth": 3\n                }\n            }\n        ]\n    }\n}\n')),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "nodes": [\n        {\n            "name": "wolfie",\n            "weight": null,\n            "depth": 1\n        },\n        {\n            "name": "sea-migrations",\n            "weight": null,\n            "depth": 1\n        },\n        {\n            "name": "sea-orm-cli",\n            "weight": null,\n            "depth": 2\n        },\n        {\n            "name": "inspirer-foundation",\n            "weight": null,\n            "depth": 1\n        },\n        {\n            "name": "sea_orm_casbin_adapter",\n            "weight": null,\n            "depth": 1\n        },\n        {\n            "name": "tardis",\n            "weight": null,\n            "depth": 1\n        },\n        {\n            "name": "sea-orm",\n            "weight": null,\n            "depth": 0\n        },\n        {\n            "name": "sea-schema",\n            "weight": null,\n            "depth": 1\n        }\n    ],\n    "edges": [\n        {\n            "fromNode": "sea-orm",\n            "toNode": "sea-migrations"\n        },\n        {\n            "fromNode": "sea-orm",\n            "toNode": "inspirer-foundation"\n        },\n        {\n            "fromNode": "sea-orm",\n            "toNode": "tardis"\n        },\n        {\n            "fromNode": "sea-orm",\n            "toNode": "sea-schema"\n        },\n        {\n            "fromNode": "sea-orm",\n            "toNode": "wolfie"\n        },\n        {\n            "fromNode": "sea-orm",\n            "toNode": "sea_orm_casbin_adapter"\n        },\n        {\n            "fromNode": "sea-schema",\n            "toNode": "sea-orm-cli"\n        }\n    ]\n}\n')),(0,a.kt)("h2",{id:"vector-example"},"Vector example"),(0,a.kt)("p",null,"To find the top 10 most depended upon crates, using the complex connectivity with a weight-decay factor of 0.5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// Body of a POST request to be sent to `/query`\n{\n    "vector": {\n        "of": "crate",\n        "constraints": [\n            {\n                "sortBy": {\n                    "key": {\n                        "connectivity": {\n                            "of": "depends",\n                            "type": "complex05"\n                        }\n                    },\n                    "desc": true\n                }\n            },\n            {\n                "limit": 10\n            }\n        ]\n    }\n}\n')),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "name": "syn",\n        "weight": 9872.005332565983,\n        "depth": null\n    },\n    {\n        "name": "cc",\n        "weight": 9140.676057275385,\n        "depth": null\n    },\n    {\n        "name": "ryu",\n        "weight": 8823.481965709943,\n        "depth": null\n    },\n    {\n        "name": "chrono",\n        "weight": 7459.312721305301,\n        "depth": null\n    },\n    {\n        "name": "url",\n        "weight": 7204.165128913257,\n        "depth": null\n    },\n    {\n        "name": "log",\n        "weight": 6289.462544210255,\n        "depth": null\n    },\n    {\n        "name": "anyhow",\n        "weight": 6234.039542149767,\n        "depth": null\n    },\n    {\n        "name": "jobserver",\n        "weight": 4610.775528637692,\n        "depth": null\n    },\n    {\n        "name": "no-panic",\n        "weight": 4435.037857616553,\n        "depth": null\n    },\n    {\n        "name": "async-trait",\n        "weight": 4052.337468007814,\n        "depth": null\n    }\n]\n')))}u.isMDXComponent=!0}}]);