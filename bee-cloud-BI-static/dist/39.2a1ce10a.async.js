(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{ZUbB:function(e,t,a){e.exports={container:"container___2V4hs",formPart:"formPart___1FfDj",partTitle:"partTitle___ymTZY",footer:"footer___3_afU"}},d9yv:function(e,t,a){"use strict";var i=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=i(a("q1tI"));a("IzEo");var l=r(a("bx4M"));a("P2fV");var d=r(a("NJEC"));a("+L6B");var c=r(a("2/Rp"));a("giR+");var o=r(a("fyUT"));a("/zsF");var u=r(a("PArb"));a("miYZ");var f=r(a("tsqr")),h=r(a("p0pE")),m=r(a("eHn4")),s=r(a("2Taf")),g=r(a("vZ4D")),y=r(a("l4Ni")),W=r(a("ujKo")),p=r(a("MhPg"));a("5NDa");var v=r(a("5rEg"));a("OaEy");var b=r(a("2fM7"));a("y8nQ");var F,k,E,I=r(a("Vl3Y")),C=r(a("ZUbB")),B=r(a("bKel")),S=r(a("3a4m")),j=i(a("+n12")),M=a("lUUk"),N=I["default"].Item,q=b["default"].Option,w=v["default"].TextArea,_=(F=I["default"].create(),(0,B["default"])(k=F((E=function(e){function t(){var e,a;(0,s["default"])(this,t);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return a=(0,y["default"])(this,(e=(0,W["default"])(t)).call.apply(e,[this].concat(r))),a.state={detail:{},devices:[],inHaveConfirm:!1,inButtonState:0,inFactoryWeightByManual:0,inFactoryWeight:null,outHaveConfirm:!1,outButtonState:0,outFactoryWeightByManual:0,outFactoryWeight:null,deductWeight:null,remark:null,deviceId:null},a.getWeight=function(e){var t=a.props.form.validateFields;t(["deviceId"],function(t,i){!t&&i.deviceId&&(0,M.getWeight)(i.deviceId).then(function(t){var i,r;t&&1===t.code&&("0"===t.object?a.setState((i={},(0,m["default"])(i,"".concat(e,"FactoryWeight"),0),(0,m["default"])(i,"".concat(e,"ButtonState"),2),i)):a.setState((r={},(0,m["default"])(r,"".concat(e,"FactoryWeight"),Number(t.object)),(0,m["default"])(r,"".concat(e,"ButtonState"),1),r)))})})},a.handleWeight=function(e){var t=a.props.location.query.machineId,i=a.state,r=i.detail,n=i.inFactoryWeight,l=i.inFactoryWeightByManual,d=i.outFactoryWeight,c=i.outFactoryWeightByManual,o={machineId:t,type:e,weightType:2};o=1===e?(0,h["default"])({},o,{inFactoryWeight:n,inFactoryWeightByManual:l}):(0,h["default"])({},o,{outFactoryWeight:d,outFactoryWeightByManual:c}),(0,M.confirmWeight)(o).then(function(t){t&&1===t.code&&(f["default"].success(t.message),1===e?a.setState({inButtonState:2,inHaveConfirm:!0,detail:(0,h["default"])({},r,{inFactoryWeight:n})}):a.setState({outButtonState:2,outHaveConfirm:!0,detail:(0,h["default"])({},r,{outFactoryWeight:d})}))})},a.saveWeightAndRemark=function(e){var t=a.props.form.validateFields,i=a.props.location.query.machineId,r=!0,n=!0;t(["deductWeight","remark"],function(t,a){if(!t)if(a.deductWeight||0===a.deductWeight){r=!1;var l=j.queryString({machineId:i,type:2,deductWeightByManual:2,deductWeight:a.deductWeight});(0,M.confirmDeductWeight)(l).then(function(t){if(t&&1===t.code)if(r=!0,a.remark){n=!1;var l=j.queryString({machineId:i,type:2,remark:a.remark});(0,M.saveRemark)(l).then(function(t){t&&1===t.code?(n=!0,r&&n&&e()):f["default"].error(t.message)})}else e();else f["default"].error(t.message)})}else if(a.remark){n=!1;var d=j.queryString({machineId:i,type:2,remark:a.remark});(0,M.saveRemark)(d).then(function(t){t&&1===t.code?(n=!0,r&&n&&e()):f["default"].error(t.message)})}else e()})},a.handleBack=function(){a.saveWeightAndRemark(function(){S["default"].goBack()})},a.handlePrint=function(){a.saveWeightAndRemark(function(){var e=a.props.form.validateFields,t=a.props.location.query.machineId,i=a.state,r=i.detail;i.deductWeight;e(["deviceId","inFactoryWeight","outFactoryWeight","deductWeight","remark"],function(e,a){if(!e){var i={machineId:t,type:2,remark:a.remark?a.remark:"",deductWeight:a.deductWeight?a.deductWeight:void 0,deviceId:a.deviceId,deliveryCompany:r.receivingCompany,driver:r.driver,productId:r.productId,productName:r.productName,trainNumber:r.trainNumber,inFactoryWeight:r.inFactoryWeight,outFactoryWeight:r.outFactoryWeight,netWeight:(r.outFactoryWeight-r.inFactoryWeight-(a.deductWeight||0)).toFixed(2)};(0,M.printPoundSheet)(i).then(function(e){e&&1===e.code?f["default"].success(e.message):f["default"].error(e.message)})}})})},a.handleOk=function(){var e=a.props.form.validateFields,t=a.props.location.query.machineId;e(["deductWeight","remark"],function(e,a){e||(0,M.continueMachine)({machineId:t,type:2,deductWeight:a.deductWeight||0===a.deductWeight?a.deductWeight:void 0,remark:a.remark?a.remark:void 0}).then(function(e){e&&1===e.code?(f["default"].success(e.message),S["default"].goBack()):f["default"].error(e.message)})})},a.handleCancel=function(){var e=a.props.form.validateFields,t=a.props.location.query.machineId;e(["deductWeight","remark"],function(e,a){e||(0,M.confirmMachine)({machineId:t,type:2,deductWeight:a.deductWeight||0===a.deductWeight?a.deductWeight:void 0,remark:a.remark?a.remark:void 0}).then(function(e){e&&1===e.code?(f["default"].success(e.message),S["default"].goBack()):f["default"].error(e.message)})})},a}return(0,p["default"])(t,e),(0,g["default"])(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.query.machineId;(0,M.getWeightSelectList)().then(function(t){t&&1===t.code&&e.setState({devices:t.object})});var a=j.queryString({machineId:t,type:2});(0,M.getWeightMachineWebDeatil)(a).then(function(t){t&&1===t.code&&e.setState({detail:t.object,inHaveConfirm:!!t.object.inFactoryWeightIsConfirm,inButtonState:t.object.inFactoryWeightIsConfirm?2:t.object.inFactoryWeight?1:0,inFactoryWeightByManual:t.object.inFactoryWeightByManual||0,inFactoryWeight:t.object.inFactoryWeight||0===t.object.inFactoryWeight?t.object.inFactoryWeight:null,outHaveConfirm:!!t.object.outFactoryWeightIsConfirm,outButtonState:t.object.outFactoryWeightIsConfirm?2:t.object.outFactoryWeight?1:0,outFactoryWeightByManual:t.object.outFactoryWeightByManual||0,outFactoryWeight:t.object.outFactoryWeight||0===t.object.outFactoryWeight?t.object.outFactoryWeight:null,deductWeight:t.object.deductWeight||null,remark:t.object.remark||null,deviceId:t.object.deviceId||null})})}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a=this.state,i=a.detail,r=a.devices,f=a.inHaveConfirm,h=a.inButtonState,m=a.inFactoryWeight,s=a.outHaveConfirm,g=a.outButtonState,y=a.outFactoryWeight,W=a.deductWeight,p=a.remark,v=a.deviceId;return n["default"].createElement("div",{className:C["default"].container},n["default"].createElement(l["default"],{title:"\u8fc7\u78c5\u8f66\u8f86",bordered:!1},n["default"].createElement("div",{className:C["default"].formPart},n["default"].createElement("span",{className:C["default"].partTitle},"\u8f66\u8f86\u4fe1\u606f"),n["default"].createElement(I["default"],{layout:"inline"},n["default"].createElement(N,{label:"\u8f66\u724c\u53f7"},i.trainNumber||"\u672a\u77e5"),n["default"].createElement(N,{label:"\u53f8\u673a"},i.driver||"\u672a\u77e5"),n["default"].createElement(N,{label:"\u8054\u7cfb\u65b9\u5f0f"},i.contact||"\u672a\u77e5"),n["default"].createElement(N,{label:"\u627f\u8fd0\u65b9"},i.carrierName||"\u672a\u77e5"),n["default"].createElement(N,{label:"\u6536\u8d27\u5355\u4f4d"},i.receivingCompany||"\u672a\u77e5"),n["default"].createElement(N,{label:"\u4ea7\u54c1\u540d\u79f0"},i.productName||"\u672a\u77e5"))),n["default"].createElement(u["default"],null),n["default"].createElement("div",{className:C["default"].formPart},n["default"].createElement("span",{className:C["default"].partTitle},"\u79f0\u91cd\u4fe1\u606f"),n["default"].createElement(I["default"],null,n["default"].createElement(N,{label:"\u79f0\u91cd\u8bbe\u5907"},t("deviceId",{initialValue:v,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u79f0\u91cd\u8bbe\u5907"}]})(n["default"].createElement(b["default"],{style:{width:"80%"},placeholder:"\u8bf7\u9009\u62e9\u79f0\u91cd\u8bbe\u5907"},r.map(function(e,t){return n["default"].createElement(q,{value:e.deviceId,key:e.deviceId},e.name)})))),n["default"].createElement(N,{label:"\u8fdb\u5382\u6570\u91cf"},t("inFactoryWeight",{initialValue:m,rules:[{required:!0,message:"\u8bf7\u79f0\u91cd"}]})(n["default"].createElement(o["default"],{disabled:3!==h,precision:2,style:{width:"60%"},placeholder:"\u8bf7\u79f0\u91cd",onChange:function(t){return e.setState({inFactoryWeight:t})}})),0===h?n["default"].createElement(c["default"],{onClick:this.getWeight.bind(this,"in"),type:"primary",style:{marginLeft:24}},"\u8fdb\u5382\u79f0\u91cd"):1===h?n["default"].createElement(c["default"],{onClick:this.handleWeight.bind(this,1),type:"primary",style:{marginLeft:24}},"\u786e\u8ba4\u79f0\u91cd"):2===h?n["default"].createElement(c["default"],{onClick:function(){return e.setState({inButtonState:3,inFactoryWeightByManual:1})},type:"primary",style:{marginLeft:24}},"\u624b\u52a8\u4fee\u6539"):3===h?n["default"].createElement(c["default"],{onClick:this.handleWeight.bind(this,1),type:"primary",style:{marginLeft:24}},"\u786e\u8ba4\u79f0\u91cd"):null),n["default"].createElement(N,{label:"\u51fa\u5382\u6570\u91cf"},t("outFactoryWeight",{initialValue:y,rules:[{required:!0,message:"\u8bf7\u79f0\u91cd"}]})(n["default"].createElement(o["default"],{disabled:3!==g,precision:2,style:{width:"60%"},placeholder:"\u8bf7\u79f0\u91cd",onChange:function(t){return e.setState({outFactoryWeight:t})}})),0===g?n["default"].createElement(c["default"],{onClick:this.getWeight.bind(this,"out"),type:"primary",style:{marginLeft:24}},"\u51fa\u5382\u79f0\u91cd"):1===g?n["default"].createElement(c["default"],{onClick:this.handleWeight.bind(this,2),type:"primary",style:{marginLeft:24}},"\u786e\u8ba4\u79f0\u91cd"):2===g?n["default"].createElement(c["default"],{onClick:function(){return e.setState({outButtonState:3,outFactoryWeightByManual:1})},type:"primary",style:{marginLeft:24}},"\u624b\u52a8\u4fee\u6539"):3===g?n["default"].createElement(c["default"],{onClick:this.handleWeight.bind(this,2),type:"primary",style:{marginLeft:24}},"\u786e\u8ba4\u79f0\u91cd"):null),n["default"].createElement(N,{label:"\u6263\u91cd\u6570\u91cf"},t("deductWeight",{initialValue:W||null})(n["default"].createElement(o["default"],{style:{width:"80%"},precision:2,placeholder:"\u8bf7\u8f93\u5165\u6263\u91cd\u6570\u91cf",onChange:function(t){return e.setState({deductWeight:t})}}))),n["default"].createElement(N,{label:"\u51c0\u91cd"},m&&y?(y-m-(W||0)).toFixed(2):"\u65e0"),n["default"].createElement(N,{label:"\u5b9e\u9645\u5230\u5382\u65f6\u95f4"},i.arrivalTime||"\u672a\u77e5"),n["default"].createElement(N,{label:"\u5907\u6ce8"},t("remark",{initialValue:p||null})(n["default"].createElement(w,{style:{width:"80%"},autoSize:{minRows:4,maxRows:4}}))))),n["default"].createElement("div",{className:C["default"].footer},n["default"].createElement(c["default"],{onClick:this.handleBack.bind(this),style:{marginRight:24}},"\u8fd4\u56de"),n["default"].createElement(c["default"],{disabled:!f||!s,onClick:this.handlePrint.bind(this),type:"primary",style:{marginRight:24}},"\u6253\u5370\u78c5\u5355"),n["default"].createElement(d["default"],{placement:"topLeft",title:"\u662f\u5426\u7ee7\u7eed\u8fd0\u8f7d\u8d27\u7269?",onConfirm:this.handleOk,onCancel:this.handleCancel,okText:"\u7ee7\u7eed\u8fd0\u8f7d",cancelText:"\u7ed3\u675f\u8fd0\u8f7d",disabled:!f||!s},n["default"].createElement(c["default"],{disabled:!f||!s,type:"primary"},"\u63d0\u4ea4")))))}}]),t}(n.Component),k=E))||k)||k);t["default"]=_}}]);