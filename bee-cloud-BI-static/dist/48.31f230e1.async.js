(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{n1BI:function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0,a("IzEo");var r=n(a("bx4M"));a("/zsF");var u=n(a("PArb")),d=n(a("p0pE"));a("miYZ");var c=n(a("tsqr"));a("y8nQ");var o=n(a("Vl3Y"));a("+L6B");var m=n(a("2/Rp")),s=n(a("qIgq")),f=l(a("q1tI")),i=a("MuoO"),p=a("M7Dx"),E=n(a("ktId")),g=function(e){var t=e.form,a=e.form.getFieldDecorator,l=e.handleSubmitOK,n=e.storageOptions,r={},u=(0,f.useState)(!1),d=(0,s["default"])(u,2),c=d[0],i=d[1],E=function(e){e.preventDefault(),t.validateFields(function(e,t){!e&&l&&(l(t),i(!1))})};return f["default"].createElement(o["default"],{layout:"inline",onSubmit:E},f["default"].createElement(p.FormItemSelect,{getFieldDecorator:a,label:"\u4ed3\u5e93",fieldId:"storageId",required:!0,selectProps:{options:n,style:{width:300},disabled:!c},formItemLayout:r}),f["default"].createElement(p.FormItemInput,{getFieldDecorator:a,label:"\u5165\u5e93\u6570\u91cf",fieldId:"productNumber",required:!0,formItemLayout:r,inputProps:{placeholder:"\u9ed8\u8ba4\u4e3a\u6536\u8d27\u6570\u91cf",disabled:!c}}),f["default"].createElement(o["default"].Item,null,c?f["default"].createElement(m["default"],{onClick:function(){return i(!1)}},"\u53d6\u6d88"):f["default"].createElement(m["default"],{onClick:function(){return i(!0)}},"\u7f16\u8f91")),c?f["default"].createElement(o["default"].Item,null,f["default"].createElement(m["default"],{type:"primary",htmlType:"submit"},"\u63d0\u4ea4")):null)},b=(0,p.CustomFormHOC)(g),v=function(e){var t=e.location.query,a=e.storageOptions,l=e.dispatch,n=e.detailData,o=t.buyProductPendingStorageId,m=function(){l({type:"purchaseWarehousingModel/getDetailEffect",payload:{buyProductPendingStorageId:o},callback:function(e,t,a){"error"===t&&c["default"].error(a)}})};(0,f.useEffect)(function(){m()},[]);var s=function(e){var t=n.productId,r=n.productName,u=n.productUnit;l({type:"purchaseWarehousingModel/saveProductEffect",payload:(0,d["default"])({buyProductPendingStorageId:o,productId:t,productName:r,productUnit:u,storageName:a.filter(function(t){return t.value===e.storageId})[0].label},e),callback:function(e,t,a){"error"===t?c["default"].error(a):(c["default"].success(a),m())}})};return f["default"].createElement("div",{style:{marginLeft:32,marginRight:32}},f["default"].createElement(r["default"],null,f["default"].createElement("div",null,f["default"].createElement("div",null,f["default"].createElement("h3",null,"\u4e1a\u52a1\u4fe1\u606f"),f["default"].createElement("div",{className:E["default"].container},f["default"].createElement("div",{className:E["default"].containerItem},f["default"].createElement("span",{className:E["default"].label}," \u72b6\u6001:"),"0"===String(n.putStorage)?"\u5f85\u5165\u5e93":"\u5df2\u5165\u5e93"),f["default"].createElement("div",{className:E["default"].containerItem},f["default"].createElement("span",{className:E["default"].label}," \u91c7\u8d2d\u5408\u540c\u53f7:"),n.contractId),f["default"].createElement("div",{className:E["default"].containerItem},f["default"].createElement("span",{className:E["default"].label}," \u8f66\u53f7:"),n.licensePlateNumber),f["default"].createElement("div",{className:E["default"].containerItem},f["default"].createElement("span",{className:E["default"].label}," \u5904\u7406\u65b9\u5f0f:"),"0"===String(n.processMode)?"\u6298\u4ef7\u5165\u5e93":"\u786e\u8ba4\u5165\u5e93"))),f["default"].createElement(u["default"],null),f["default"].createElement("div",null,f["default"].createElement("h3",null,"\u4ea7\u54c1\u4fe1\u606f"),f["default"].createElement("div",{className:E["default"].container},f["default"].createElement("div",{className:E["default"].containerItem},f["default"].createElement("span",{className:E["default"].label}," \u4ea7\u54c1\u540d\u79f0:"),n.productName),f["default"].createElement("div",{className:E["default"].containerItem},f["default"].createElement("span",{className:E["default"].label}," \u89c4\u683c:"),n.productSpecName),f["default"].createElement("div",{className:E["default"].containerItem},f["default"].createElement("span",{className:E["default"].label}," \u8d28\u68c0\u7ed3\u679c:"),"1"===String(n.analysisResult)?"\u5408\u683c":"\u4e0d\u5408\u683c"),f["default"].createElement("div",{className:E["default"].containerItem},f["default"].createElement("span",{className:E["default"].label},"\u6536\u8d27\u6570\u91cf:"),n.productNumber),f["default"].createElement("div",{className:E["default"].containerItem},f["default"].createElement("span",{className:E["default"].label},"\u5230\u5382\u65f6\u95f4:"),n.arrivalTime),f["default"].createElement("div",{className:E["default"].containerItem},f["default"].createElement("span",{className:E["default"].label}," \u5907\u6ce8:"),n.remark)))),f["default"].createElement(u["default"],null),"1"===String(n.putStorage)?f["default"].createElement("div",null,f["default"].createElement("h3",null,"\u5165\u5e93\u4fe1\u606f"),f["default"].createElement("div",{className:E["default"].container},f["default"].createElement("div",{className:E["default"].containerItem},f["default"].createElement("span",{className:E["default"].label}," \u5165\u5e93\u6570\u91cf:"),n.actualProductNumber),f["default"].createElement("div",{className:E["default"].containerItem},f["default"].createElement("span",{className:E["default"].label}," \u4ed3\u5e93:"),a.filter(function(e){return e.value==="".concat(n.storageId)})[0].label),f["default"].createElement("div",{className:E["default"].containerItem},f["default"].createElement("span",{className:E["default"].label}," \u5165\u5e93\u65f6\u95f4:"),n.storageTime))):null),"0"===String(n.putStorage)?f["default"].createElement(r["default"],{style:{marginTop:10}},f["default"].createElement("h3",null,"\u5165\u5e93\u4fe1\u606f"),f["default"].createElement(b,{handleSubmitOK:s,storageOptions:a,dataDetail:{storageId:n.storageId?"".concat(n.storageId):"",productNumber:"".concat(n.productNumber)}})):null)},N=(0,i.connect)(function(e){var t=e.purchaseWarehousingModel,a=t.storageOptions,l=t.detailData,n=e.loading.models;return{storageOptions:a,loading:n.purchaseWarehousingModel,detailData:l}})(v);t["default"]=N}}]);