"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[6566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(n),u=i,d=g["".concat(m,".").concat(u)]||g[u]||c[u]||r;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},18810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},o="Running Migration",l={unversionedId:"migration/running-migration",id:"version-0.6.x/migration/running-migration",title:"Running Migration",description:"After you have defined the migrations, you can apply or revert migrations in console or on application startup.",source:"@site/versioned_docs/version-0.6.x/05-migration/03-running-migration.md",sourceDirName:"05-migration",slug:"/migration/running-migration",permalink:"/SeaORM/docs/0.6.x/migration/running-migration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/05-migration/03-running-migration.md",tags:[],version:"0.6.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1670209191,formattedLastUpdatedAt:"Dec 5, 2022",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Writing Migration",permalink:"/SeaORM/docs/0.6.x/migration/writing-migration"},next:{title:"Select",permalink:"/SeaORM/docs/0.6.x/basic-crud/select"}},m={},p=[{value:"Command Line Interface (CLI)",id:"command-line-interface-cli",level:2},{value:"Via <code>sea-orm-cli</code>",id:"via-sea-orm-cli",level:3},{value:"Via SeaSchema Migrator CLI",id:"via-seaschema-migrator-cli",level:3},{value:"Migrating Programmatically",id:"migrating-programmatically",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-migration"},"Running Migration"),(0,i.kt)("p",null,"After you have defined the migrations, you can apply or revert migrations in console or on application startup."),(0,i.kt)("h2",{id:"command-line-interface-cli"},"Command Line Interface (CLI)"),(0,i.kt)("p",null,"Running migration manually in console. You should set ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," in your environment, follow the instruction ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-entity/sea-orm-cli#configure-environment"},"here")," to configure it."),(0,i.kt)("p",null,"Supported commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"init"),": Initialize migration directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"up"),": Apply all pending migrations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"up -n 10"),": Apply 10 pending migrations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"down"),": Rollback last applied migration"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"down -n 10"),": Rollback last 10 applied migrations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status"),": Check the status of all migrations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fresh"),": Drop all tables from the database, then reapply all migrations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh"),": Rollback all applied migrations, then reapply all migrations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reset"),": Rollback all applied migrations")),(0,i.kt)("h3",{id:"via-sea-orm-cli"},"Via ",(0,i.kt)("inlineCode",{parentName:"h3"},"sea-orm-cli")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," will execute ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo run --manifest-path ./migration/Cargo.toml -- COMMAND")," under the hood."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ sea-orm-cli migrate COMMAND\n")),(0,i.kt)("p",null,"You can customize the manifest path."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ sea-orm-cli migrate COMMAND -d ./other/migration/dir\n")),(0,i.kt)("h3",{id:"via-seaschema-migrator-cli"},"Via SeaSchema Migrator CLI"),(0,i.kt)("p",null,"Runs migrator CLI defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"migration/main.rs"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd migration\n$ cargo run -- COMMAND\n")),(0,i.kt)("h2",{id:"migrating-programmatically"},"Migrating Programmatically"),(0,i.kt)("p",null,"Performs migration on application startup with ",(0,i.kt)("inlineCode",{parentName:"p"},"Migrator"),", given that it implements ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-schema/0.5/sea_schema/migration/migrator/trait.MigratorTrait.html"},(0,i.kt)("inlineCode",{parentName:"a"},"MigratorTrait")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},"use migration::{Migrator, MigratorTrait};\n\n/// Apply all pending migrations\nMigrator::up(db, None).await?;\n\n/// Apply 10 pending migrations\nMigrator::up(db, Some(10)).await?;\n\n/// Rollback last applied migrations\nMigrator::down(db, None).await?;\n\n/// Rollback last 10 applied migrations\nMigrator::down(db, Some(10)).await?;\n\n/// Check the status of all migrations\nMigrator::status(db).await?;\n\n/// Drop all tables from the database, then reapply all migrations\nMigrator::fresh(db).await?;\n\n/// Rollback all applied migrations, then reapply all migrations\nMigrator::refresh(db).await?;\n\n/// Rollback all applied migrations\nMigrator::reset(db).await?;\n")))}c.isMDXComponent=!0}}]);