(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{"9H4y":function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0,a("14J3");var u=n(a("BMrR"));a("jCWc");var r=n(a("kPKH"));a("+L6B");var d=n(a("2/Rp"));a("IzEo");var c=n(a("bx4M"));a("/zsF");var f=n(a("PArb"));a("P2fV");var o=n(a("NJEC"));a("Pwec");var s=n(a("CtXQ")),m=n(a("gWZ8"));a("miYZ");var i=n(a("tsqr")),p=n(a("qIgq")),E=l(a("q1tI")),N=a("MuoO"),v=a("M7Dx"),b=n(a("mToO")),I=function(e){var t=e.location.query,a=e.storageOptions,l=e.productSpecOptions,n=e.dispatch,N=e.detailData,I=t.id,g=t.isOutStock,y=(0,E.useState)([]),S=(0,p["default"])(y,2),O=S[0],h=S[1],k=function(){n({type:"salesOutStockModel/getDetailEffect",payload:{id:I,isOutStock:g},callback:function(e,t,a){"error"===t&&i["default"].error(a)}})};(0,E.useEffect)(function(){k()},[]);var T=function(){var e=N.contractCarId,t=N.productId,u=N.productName,r=O.length>0&&O.filter(function(e){return e.productNumber&&e.productNumber&&e.storageId}).length>0;if(r){var d=O.map(function(n){return{contractCarId:e,productId:t,productName:u,productNumber:n.productNumber,productSpecId:n.productSpecId,productSpecName:l.filter(function(e){return e.value===n.productSpecId})[0].label,storageId:n.storageId,storageName:a.filter(function(e){return e.value===n.storageId})[0].label}}),c={bulkOutTonBagListDTO:{contractCarId:e,tonBagNumbers:[]},finishedProductOutDTOS:d};n({type:"salesOutStockModel/saveProductEffect",payload:c,callback:function(e,t,a){"error"===t?i["default"].error(a):(i["default"].success(a),k())}})}else i["default"].warning("\u8bf7\u5148\u6dfb\u52a0\u4ed3\u5e93\uff0c\u4e14\u6bcf\u4e00\u680f\u5fc5\u586b")},w=function(){var e={key:"".concat(Math.random()),productSpecId:"\u6682\u65e0",storageId:"\u6682\u65e0",productNumber:"\u6682\u65e0"},t=[].concat((0,m["default"])(O),[e]);h(t)},L=function(e){var t=O.filter(function(t){return t.key!==e});h(t)},M=[{title:"\u89c4\u683c",dataIndex:"productSpecId",editable:!0,inputType:"select",selectProps:{options:l}},{title:"\u4ed3\u5e93",dataIndex:"storageId",editable:!0,inputType:"select",selectProps:{options:a}},{title:"\u51fa\u5e93\u6570\u91cf",dataIndex:"productNumber",editable:!0,inputType:"input"},{title:"\u64cd\u4f5c",dataIndex:"operate",render:function(e,t){return E["default"].createElement(o["default"],{title:"\u786e\u8ba4\u5220\u9664\u5417?",onConfirm:function(){return L(t.key)},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},E["default"].createElement(s["default"],{type:"delete",style:{color:"red"}}))}}];return E["default"].createElement("div",{style:{marginLeft:32,marginRight:32}},E["default"].createElement(c["default"],null,E["default"].createElement("div",null,E["default"].createElement("div",null,E["default"].createElement("h3",null,"\u4e1a\u52a1\u4fe1\u606f"),E["default"].createElement("div",{className:b["default"].container},E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label}," \u72b6\u6001:"),"0"===String(N.putStorage)?"\u5f85\u51fa\u5e93":"\u5df2\u51fa\u5e93"),E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label}," \u9500\u552e\u5408\u540c\u53f7:"),N.contractId),E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label}," \u51fa\u5e93\u65f6\u95f4:"),N.modifyTime),E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label}," \u8f66\u53f7:"),N.licensePlateNumber),E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label}," \u53f8\u673a:"),N.driverName),E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label}," \u8054\u7cfb\u65b9\u5f0f:"),N.contact))),E["default"].createElement(f["default"],null),E["default"].createElement("div",null,E["default"].createElement("h3",null,"\u4ea7\u54c1\u4fe1\u606f"),E["default"].createElement("div",{className:b["default"].container},E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label}," \u4ea7\u54c1\u540d\u79f0:"),N.productName),E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label},"\u603b\u51fa\u5e93\u6570\u91cf:"),N.number)))),E["default"].createElement(f["default"],null),Array.isArray(N.oneList)&&N.oneList.length>0?E["default"].createElement(E["default"].Fragment,null,E["default"].createElement("div",null,E["default"].createElement("h3",null,"\u51fa\u5e93\u4fe1\u606f"),N.oneList.map(function(e){return E["default"].createElement("div",{className:b["default"].container},E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label}," \u4ea7\u54c1\u6570\u91cf:"),e.productNumber),E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label}," \u4ea7\u54c1\u89c4\u683c\u540d\u79f0:"),e.productSpecName),E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label}," \u4ed3\u5e93\u540d\u79f0:"),e.storageName))})),E["default"].createElement(f["default"],null)):null,Array.isArray(N.twoList)&&N.oneList.twoList>0?E["default"].createElement(E["default"].Fragment,null,E["default"].createElement("div",null,E["default"].createElement("h3",null,"\u5428\u888b\u51fa\u5e93\u4fe1\u606f"),N.oneList.map(function(e){return E["default"].createElement("div",{className:b["default"].container},E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label}," \u5428\u888b\u6570\u91cf:"),e.productNumber),E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label}," \u5428\u888b\u91cd\u91cf\u5355\u4f4d:"),e.productUnit),E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label}," \u4ed3\u5e93\u540d\u79f0:"),e.storageName),E["default"].createElement("div",{className:b["default"].containerItem},E["default"].createElement("span",{className:b["default"].label}," \u5428\u888b\u7f16\u53f7:"),e.tonBagNumber))})),E["default"].createElement(f["default"],null)):null),"0"===String(N.outStorage)?E["default"].createElement(c["default"],{style:{marginTop:10}},E["default"].createElement("h3",null,"\u51fa\u5e93\u4fe1\u606f"),E["default"].createElement(u["default"],null,E["default"].createElement(r["default"],{span:24},E["default"].createElement(v.TableEditV2,{columns:M,dataSource:O,handleTableSve:function(e){return h(e)},footer:function(){return E["default"].createElement("div",null,E["default"].createElement(d["default"],{type:"dashed",icon:"plus",style:{width:"100%",height:40,marginTop:5,marginBottom:10},onClick:w},"\u6dfb\u52a0\u4ed3\u5e93"))}}))),E["default"].createElement(u["default"],null,E["default"].createElement(r["default"],{offset:22},E["default"].createElement(d["default"],{type:"primary",onClick:T},"\u63d0\u4ea4")))):null)},g=(0,N.connect)(function(e){var t=e.salesOutStockModel,a=t.storageOptions,l=t.productSpecOptions,n=t.detailData,u=e.loading.models;return{storageOptions:a,productSpecOptions:l,loading:u.salesOutStockModel,detailData:n}})(I);t["default"]=g}}]);