(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{NhET:function(e,t,a){"use strict";var l=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=l(a("q1tI"));a("IzEo");var u=r(a("bx4M"));a("+L6B");var d=r(a("2/Rp"));a("/zsF");var c=r(a("PArb")),i=r(a("2Taf")),f=r(a("vZ4D")),o=r(a("l4Ni")),m=r(a("ujKo")),s=r(a("MhPg"));a("y8nQ");var h,E,p,b=r(a("Vl3Y")),v=r(a("tNXC")),g=r(a("bKel")),y=r(a("3a4m")),W=l(a("+n12")),_=a("lUUk"),N=b["default"].Item,k=(h=b["default"].create(),(0,g["default"])(E=h((p=function(e){function t(){var e,a;(0,i["default"])(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return a=(0,o["default"])(this,(e=(0,m["default"])(t)).call.apply(e,[this].concat(r))),a.state={detail:{}},a}return(0,s["default"])(t,e),(0,f["default"])(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.query.machineId,a=W.queryString({machineId:t,type:2});(0,_.getWeightMachineWebDeatil)(a).then(function(t){t&&1===t.code&&e.setState({detail:t.object})})}},{key:"render",value:function(){var e=this.state.detail;return n["default"].createElement("div",{className:v["default"].container},n["default"].createElement(u["default"],{title:"\u8fc7\u78c5\u8f66\u8f86",bordered:!1},n["default"].createElement("div",{className:v["default"].formPart},n["default"].createElement("span",{className:v["default"].partTitle},"\u8f66\u8f86\u4fe1\u606f"),n["default"].createElement(b["default"],{layout:"inline"},n["default"].createElement(N,{label:"\u8f66\u724c\u53f7"},e.trainNumber||"\u672a\u77e5"),n["default"].createElement(N,{label:"\u53f8\u673a"},e.driver||"\u672a\u77e5"),n["default"].createElement(N,{label:"\u8054\u7cfb\u65b9\u5f0f"},e.contact||"\u672a\u77e5"),n["default"].createElement(N,{label:"\u627f\u8fd0\u65b9"},e.carrierName||"\u672a\u77e5"),n["default"].createElement(N,{label:"\u53d1\u8d27\u5355\u4f4d"},e.deliveryCompany||"\u672a\u77e5"),n["default"].createElement(N,{label:"\u4ea7\u54c1\u540d\u79f0"},e.productName||"\u672a\u77e5"))),n["default"].createElement(c["default"],null),n["default"].createElement("div",{className:v["default"].formPart},n["default"].createElement("span",{className:v["default"].partTitle},"\u79f0\u91cd\u4fe1\u606f"),n["default"].createElement(b["default"],{layout:"inline"},n["default"].createElement(N,{label:"\u8fdb\u5382\u6570\u91cf"},e.inFactoryWeight||0===e.inFactoryWeight?e.inFactoryWeight+"\u5428":"\u672a\u77e5"),n["default"].createElement(N,{label:"\u51fa\u5382\u6570\u91cf"},e.outFactoryWeight||0===e.outFactoryWeight?e.outFactoryWeight+"\u5428":"\u672a\u77e5"),n["default"].createElement(N,{label:"\u6263\u91cd\u6570\u91cf"},e.deductWeight||0===e.deductWeight?e.deductWeight+"\u5428":"\u672a\u77e5"),n["default"].createElement(N,{label:"\u51c0\u91cd"},e.netWeight||0===e.netWeight?e.netWeight+"\u5428":"\u672a\u77e5"),n["default"].createElement(N,{label:"\u5907\u6ce8"},e.remark||"\u65e0"))),n["default"].createElement("div",{className:v["default"].footer},n["default"].createElement(d["default"],{onClick:function(){return y["default"].goBack()}},"\u8fd4\u56de"))))}}]),t}(n.Component),E=p))||E)||E);t["default"]=k},tNXC:function(e,t,a){e.exports={container:"container____A7CR",formPart:"formPart___yEHtJ",partTitle:"partTitle___19xzg",footer:"footer___WDqES"}}}]);