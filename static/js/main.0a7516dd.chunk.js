(this["webpackJsonpaddress-book"]=this["webpackJsonpaddress-book"]||[]).push([[0],{166:function(e,n,t){e.exports=t(342)},171:function(e,n,t){},199:function(e,n,t){},332:function(e,n,t){},342:function(e,n,t){"use strict";t.r(n);var a,i=t(0),c=t.n(i),o=t(4),r=t.n(o),d=(t(171),t(40)),l=t(20),u=t(39);function f(){var e="".concat(Math.random()).slice(2);return{id:e,key:e,newAdding:!0}}!function(e){e[e.View=0]="View",e[e.Editing=1]="Editing"}(a||(a={}));var s={addrs:[{id:"501",key:"501",name:"Khali Zhang",location:"Shanghai",office:"C-103",officePhone:"x55778",cellPhone:"650-353-1239"}],selected:[],handleAdd:function(){return null},handleDelete:function(){return null},handleUpdate:function(){return null},handleSelect:function(e){return null},syncUpdate:function(e){return null},mode:a.View,setMode:function(e){return null}},m=c.a.createContext(s),h=t(73),b=t(345),g=function(e){var n=e.name,t=e.addr,o=e.defaultEditing,r=e.allowEdit,d=Object(i.useContext)(m),f=d.syncUpdate,s=Object(i.useState)(Boolean(o)),g=Object(u.a)(s,2),E=g[0],O=g[1];return r&&E&&d.mode===a.Editing?c.a.createElement(b.a,{value:t[n],onChange:function(e){var a=Object(l.a)({},t,Object(h.a)({},n,e.target.value));f&&f(a)}}):c.a.createElement("span",{className:"editable-grid-text",onDoubleClick:function(){r&&(O(!0),d.setMode(a.Editing))}},t[n])},E=t(344),O=t(343),j=t(21),p=t(347),w=(t(199),E.a.Column),k=E.a.ColumnGroup;function v(e){return function(n,t){var a=n[e],i=t[e];return a&&i?a>i?1:a===i?0:-1:0}}var C=function(){var e=Object(p.a)().t,n=Object(i.useContext)(m),t=n.handleSelect,a=n.handleDelete,o=n.handleAdd,r=n.handleUpdate,d={onChange:function(e,n){t(n)},getCheckboxProps:function(e){return{name:e.name}}},u=Object(i.useContext)(m).all||[];return c.a.createElement(E.a,{rowSelection:Object(l.a)({},d),dataSource:u,title:function(){return"Address Book"},footer:function(){return c.a.createElement(O.a,{size:"middle"},c.a.createElement(j.a,{danger:!0,onClick:a},e("delete")),c.a.createElement(j.a,{onClick:r},e("update")),c.a.createElement(j.a,{onClick:o},e("add")))},bordered:!0},c.a.createElement(w,{title:e("id"),dataIndex:"id",key:"id",sorter:function(e,n){return parseInt(e.id)-parseInt(n.id)}}),c.a.createElement(w,{title:e("name"),dataIndex:"name",key:"name",render:function(e,n,t){return c.a.createElement(g,{name:"name",addr:n,allowEdit:n.newAdding,defaultEditing:n.newAdding})},sorter:v("name")}),c.a.createElement(w,{title:e("location"),dataIndex:"location",key:"location",render:function(e,n,t){return c.a.createElement(g,{name:"location",addr:n,allowEdit:n.newAdding,defaultEditing:n.newAdding})},sorter:v("location")}),c.a.createElement(w,{title:e("office"),dataIndex:"office",key:"office",render:function(e,n,t){return c.a.createElement(g,{name:"office",addr:n,allowEdit:n.newAdding,defaultEditing:n.newAdding})},sorter:v("office")}),c.a.createElement(k,{title:e("phone")},c.a.createElement(w,{title:e("office"),dataIndex:"officePhone",key:"officePhone",render:function(e,n,t){return c.a.createElement(g,{name:"officePhone",addr:n,allowEdit:n.newAdding,defaultEditing:n.newAdding})},sorter:v("officePhone")}),c.a.createElement(w,{title:e("cell"),dataIndex:"cellPhone",key:"cellPhone",render:function(e,n,t){return c.a.createElement(g,{name:"cellPhone",addr:n,allowEdit:!0,defaultEditing:n.newAdding})},sorter:v("cellPhone")})))},A=t(346);t(332);var x=function(){var e=Object(i.useState)(s.addrs),n=Object(u.a)(e,2),t=n[0],o=n[1],r=Object(i.useState)([]),h=Object(u.a)(r,2),b=h[0],g=h[1],E=Object(i.useState)([]),O=Object(u.a)(E,2),j=O[0],p=O[1],w=Object(i.useState)(a.View),k=Object(u.a)(w,2),v=k[0],x=k[1],y=Object(i.useMemo)((function(){return j.filter((function(e){if(e.newAdding)return!0;var n=t.find((function(n){return n.id===e.id}));return!(!n||JSON.stringify(e)===JSON.stringify(n))}))}),[t,j]),I=Object(i.useCallback)((function(e){var n=t.findIndex((function(n){return n.id===e.id}));n>-1?t[n]=Object(l.a)({},e,{newAdding:!1}):t.push(Object(l.a)({},e,{newAdding:!1})),o(Object(d.a)(t))}),[t]),S=Object(i.useCallback)((function(){x(a.View),y.length&&(A.a.open({message:"Updating messsage",description:"There are ".concat(y.length," address(es) will be updated\nThe ID:[").concat(y.map((function(e){return e.id})).join(","),"]")}),y.forEach((function(e){I(e)})),p([]))}),[y,I]),P=Object(i.useCallback)((function(e){var n=j.findIndex((function(n){return e.id===n.id}));n>-1?j[n]=Object(l.a)({},e):j.push(Object(l.a)({},e)),p(Object(d.a)(j))}),[j]),D=Object(i.useCallback)((function(){if(!(b.length<1)){var e=[];if(t.forEach((function(n){b.find((function(e){return e.id===n.id}))||e.push(n)})),o(e),j.length>0){var n=[];j.forEach((function(e){b.find((function(n){return n.id===e.id}))||n.push(e)})),j.length>n.length&&p(n)}g([])}}),[t,j,b]),U=Object(i.useCallback)((function(){var e=f();p([].concat(Object(d.a)(j),[e])),o([].concat(Object(d.a)(t),[e])),x(a.Editing)}),[j,t]),M=Object(i.useCallback)((function(e){g(e)}),[]),V=Object(i.useMemo)((function(){var e=Object(d.a)(t);return j.forEach((function(n){var t=e.findIndex((function(e){return n.id===e.id}));e[t]=Object(l.a)({},n)})),Object(d.a)(e)}),[t,j]);return c.a.createElement(m.Provider,{value:{addrs:t,all:V,selected:b,handleAdd:U,handleUpdate:function(){return S()},handleDelete:D,handleSelect:M,syncUpdate:P,mode:v,setMode:x}},c.a.createElement("div",{className:"App"},c.a.createElement("main",null,c.a.createElement(C,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=t(160),I=t(61);y.a.use(I.e).init({resources:{en:{translation:{title:"Address Book",id:"ID",name:"Name",location:"Location",office:"Office",phone:"Phone",cell:"Cell",delete:"Delete",update:"Update",add:"Add"}},zh:{translation:{title:"\u5730\u5740\u7c3f",id:"ID",name:"\u59d3\u540d",location:"\u4f4d\u7f6e",office:"\u529e\u516c\u5ba4",phone:"\u7535\u8bdd",cell:"\u624b\u673a",delete:"\u5220\u9664",update:"\u66f4\u65b0",add:"\u6dfb\u52a0"}}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});t(341);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[166,1,2]]]);
//# sourceMappingURL=main.0a7516dd.chunk.js.map