(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{YdMl:function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(a("jehZ")),u=n(a("p0pE"));a("miYZ");var d=n(a("tsqr")),o=n(a("qIgq")),i=l(a("q1tI")),c=a("MuoO"),s=n(a("wd/R")),f=a("M7Dx"),m=n(a("hEcH")),p=a("4rMY"),g=function(e){var t=e.form.getFieldDecorator,a=e.settleStatus,l={};return i["default"].createElement(i["default"].Fragment,null,i["default"].createElement(f.FormItemInput,{getFieldDecorator:t,label:"",fieldId:"contractNum",required:!1,formItemLayout:l,inputProps:{placeholder:"\u91c7\u8d2d\u5408\u540c\u53f7"}}),i["default"].createElement(f.FormItemInput,{getFieldDecorator:t,label:"",fieldId:"supplierName",required:!1,formItemLayout:l,inputProps:{placeholder:"\u4f9b\u5e94\u5546"}}),i["default"].createElement(f.FormItemInput,{getFieldDecorator:t,label:"",fieldId:"productName",required:!1,formItemLayout:l,inputProps:{placeholder:"\u4ea7\u54c1\u540d\u79f0"}}),i["default"].createElement(f.FormItemRangePicker,{getFieldDecorator:t,label:"0"===a?"\u5408\u540c\u7b7e\u8ba2\u65e5\u671f":"\u7ed3\u7b97\u65f6\u95f4",fieldId:"dateRange",required:!1,datePickerProps:{format:"YYYY-MM-DD"},formItemLayout:l}))},h=[],I="",E={},S=function(e){var t=e.dispatch,a=(0,i.useState)("descend"),l=(0,o["default"])(a,2),n=l[0],c=l[1],S=(0,i.useState)("0"),v=(0,o["default"])(S,2),b=v[0],w=v[1],N=(0,i.useState)(!1),y=(0,o["default"])(N,2),P=y[0],D=y[1];(0,i.useEffect)(function(){},[]);var F=function(e){h=[],I=e.contractBusinessId;var a={contractBusinessId:I,settleStatus:b};if("0"!==b)a.settleId=e.settleId;else try{_czc1.push(["_trackEvent","\u91c7\u8d2d\u7ed3\u7b97","\u7ed3\u7b97","","",""])}catch(e){}t({type:"settleModel/getSettleBuyPopupWindow",payload:a,callback:function(){D(!0)}})},M=function(e,t,a){n!==a.order&&c(a.order)},_=function(e){return E.setInitialValue(),"1"===b?D(!1):!h||!h.length>0?d["default"].error("\u8bf7\u9009\u62e9\u8f66\u8f86"):void t({type:"settleModel/saveSettleBuyPopupWindow",payload:(0,u["default"])({},e,{contractBusinessId:I,settles:h}),callback:function(){D(!1),E.setInitialValue()}})},C=function(e){var t=(0,u["default"])({},e,{settleStatus:b});return t.dateRange&&("0"===b?(t.signDateStart=t.dateRange.startTime,t.signDateEnd=t.dateRange.endTime):(t.settleTimeStart=t.dateRange.startTime,t.settleTimeEnd=t.dateRange.endTime),delete t.dateRange),t},R=[{value:"0",label:"\u5f85\u7ed3\u7b97"},{value:"1",label:"\u5df2\u7ed3\u7b97"}],x={parentTabs:R,searchFormProps:{},searchParams:{currentPage:1,orderStage:"",pageSize:10,searchCount:!0,dateRange:{startTime:(0,s["default"])().subtract(30,"days").format("YYYY-MM-DD"),endTime:(0,s["default"])().format("YYYY-MM-DD")},contractNum:void 0,supplierName:void 0,productName:void 0},dispatch:t,namespace:"productStorageModel",handleTableChange:M,onTabChange:function(e){return w(e)},paramsHandler:C},T=[{title:"\u5e8f\u53f7",dataIndex:"index",render:function(e,t,a){return a+1}},{title:"\u91c7\u8d2d\u5408\u540c\u53f7",dataIndex:"contractNum"},{title:"\u4f9b\u5e94\u5546",dataIndex:"supplierName"},{title:"\u4ea7\u54c1\u540d\u79f0",dataIndex:"productName"},{title:"0"===b?"\u672a\u7ed3\u7b97\u8f66\u8f86\u6570":"\u5df2\u7ed3\u7b97\u8f66\u8f86\u6570",dataIndex:"carNum"},{title:"0"===b?"\u5408\u540c\u7b7e\u8ba2\u65e5\u671f":"\u7ed3\u7b97\u65f6\u95f4",dataIndex:"0"===b?"signDate":"settleTime"},{title:"\u64cd\u4f5c",dataIndex:"_option",render:function(e,t){return i["default"].createElement("a",{onClick:function(){return F(t)}},"0"===b?"\u7ed3\u7b97":"\u67e5\u770b\u8be6\u7ec6")}}],Y=(0,u["default"])({},x,{tableProps:{hasRowSelection:!1,columns:T}}),k=(0,u["default"])({},x,{tableProps:{hasRowSelection:!1,columns:T}}),q={width:740,visible:P,onOk:function(e){return _(e)},onCancel:function(){return D(!1)},title:"0"===b?"\u7ed3\u7b97":"\u7ed3\u7b97\u67e5\u770b",ComProps:{settleStatus:b,rowKey:"id",onSelectRow:function(e){h=e}}},V="0"===b?(0,u["default"])({},Y):(0,u["default"])({},k);return i["default"].createElement(i["default"].Fragment,null,i["default"].createElement(f.TableWrapper,(0,r["default"])({},V,{tableWrapperRef:function(e){E=e},listService:p.getSettleListBuy,currentTabKey:b}),i["default"].createElement(g,{settleStatus:b})),i["default"].createElement(m["default"],q))},v=(0,c.connect)(function(e){return{}})(S);t["default"]=v},hEcH:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0,a("14J3");var r=l(a("BMrR"));a("jCWc");var u,d,o,i=l(a("kPKH")),c=l(a("2Taf")),s=l(a("vZ4D")),f=l(a("l4Ni")),m=l(a("ujKo")),p=l(a("MhPg")),g=n(a("q1tI")),h=a("LvDl"),I=a("MuoO"),E=l(a("ws40")),S=a("M7Dx"),v=(u=(0,I.connect)(function(e){var t=e.settleModel.modalInfo,a=void 0===t?{}:t;return{modalInfo:a}}),u((o=function(e){function t(){var e,a;(0,c["default"])(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,f["default"])(this,(e=(0,m["default"])(t)).call.apply(e,[this].concat(n))),a.state={formValue:{unitPriceSettlement:"",weightSettle:""},_amountSettlement:null},a}return(0,p["default"])(t,e),(0,s["default"])(t,[{key:"onValueChange",value:function(e,t){var a=this.state,l=a.formValue,n=a._amountSettlement;l[e]=t;var r=l.unitPriceSettlement,u=l.weightSettle;n=(0,h.isNumber)(Number(r))&&(0,h.isNumber)(Number(u))?(Number(r)*Number(u)).toFixed(2):null,this.setState({formValue:{unitPriceSettlement:r,weightSettle:u},_amountSettlement:n})}},{key:"onSelectRow",value:function(e,t){var a=this.props,l=a.onSelectRow,n=a.form.setFieldsValue,r=t.reduce(function(e,t){return e+t.netWeight},0);this.onValueChange("weightSettle",r),n({weightSettle:"".concat(r)}),l(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.form,l=a.getFieldDecorator,n=(a.setFieldsInitialValue,t.rowKey),u=t.settleStatus,d=t.modalInfo,o=d.settles,c=void 0===o?[]:o,s=d.productName,f=d.supplierName,m=d.unitPrice,p=(d.unitPriceSettlement,d.weightSettle),h=d.weightNet,I=d.weightDeduct,v=d.amountSettlement,b=[{title:"\u5e8f\u53f7",dataIndex:"index",render:function(e,t,a){return a+1}},{title:"\u8f66\u53f7",dataIndex:"trainNumber"},{title:"\u51c0\u91cd(\u5428)",dataIndex:"netWeight"},{title:"\u662f\u5426\u6298\u4ef7",dataIndex:"productName",render:function(e){return e?"\xa5".concat(e):"\u5426"}},{title:"\u53f8\u78c5\u65f6\u95f4",dataIndex:"weighingTime"}],w={labelCol:{span:8},wrapperCol:{span:16}},N={data:{list:c},columns:b,hasRowSelection:"0"===u,onSelectRow:this.onSelectRow.bind(this),rowKey:n},y=this.state._amountSettlement;return g["default"].createElement(g["default"].Fragment,null,g["default"].createElement("div",{className:E["default"].title},"\u5408\u540c\u4fe1\u606f"),g["default"].createElement("div",{className:E["default"].content},g["default"].createElement(r["default"],null,g["default"].createElement(i["default"],{span:8},"\u4f9b\u5e94\u5546\uff1a",g["default"].createElement("span",null,f||"\u65e0")),g["default"].createElement(i["default"],{span:8},"\u4ea7\u54c1\u540d\u79f0\uff1a",g["default"].createElement("span",null,s||"\u65e0")),g["default"].createElement(i["default"],{span:8},"\u91c7\u8d2d\u5355\u4ef7\uff08\u5143/\u5428\uff09\uff1a",g["default"].createElement("span",null,m||"\u65e0")))),g["default"].createElement("div",{className:E["default"].title},"0"===u?"\u7ed3\u7b97":"\u7ed3\u7b97\u4fe1\u606f"),g["default"].createElement(S.StandardTable,N),g["default"].createElement("div",{className:E["default"].content},"0"===u?g["default"].createElement(r["default"],null,g["default"].createElement(i["default"],{span:12},g["default"].createElement(S.FormItemInput,{getFieldDecorator:l,label:"\u7ed3\u7b97\u6570\u91cf(\u5428):",fieldId:"weightSettle",required:!0,formItemLayout:w,inputProps:{placeholder:"\u8bf7\u8f93\u5165",type:"number",readOnly:"0"!==u,onChange:function(t){return e.onValueChange("weightSettle",t.target.value)}}})),g["default"].createElement(i["default"],{span:12},g["default"].createElement(S.FormItemInput,{getFieldDecorator:l,label:"\u7ed3\u7b97\u5355\u4ef7(\u5143):",fieldId:"unitPriceSettlement",required:!0,formItemLayout:w,inputProps:{placeholder:"\u8bf7\u8f93\u5165",type:"number",readOnly:"0"!==u,onChange:function(t){return e.onValueChange("unitPriceSettlement",t.target.value)}}})),g["default"].createElement(i["default"],{span:12},"\u7ed3\u7b97\u603b\u4ef7\uff1a",g["default"].createElement("span",{className:E["default"].red},y||"-","\u5143"))):g["default"].createElement(r["default"],null,g["default"].createElement(i["default"],{span:12},"\u603b\u51c0\u91cd\uff1a",g["default"].createElement("span",{className:E["default"].red},h,"\u5428")),g["default"].createElement(i["default"],{span:12},"\u7ed3\u7b97\u5355\u4ef7\uff1a",g["default"].createElement("span",{className:E["default"].red},m,"\u5143")),g["default"].createElement(i["default"],{span:12},"\u6263\u91cd\u91cd\u91cf\uff1a",g["default"].createElement("span",{className:E["default"].red},I,"\u5428")),g["default"].createElement(i["default"],{span:12},"\u7ed3\u7b97\u603b\u4ef7\uff1a",g["default"].createElement("span",{className:E["default"].red},v,"\u5143")),g["default"].createElement(i["default"],{span:12},"\u7ed3\u7b97\u91cd\u91cf\uff1a",g["default"].createElement("span",{className:E["default"].red},p,"\u5428")))))}}]),t}(g.PureComponent),d=o))||d),b=(0,S.CustomFormHOC)(v),w=(0,S.CustomModalHOC)(b);t["default"]=w},ws40:function(e,t,a){e.exports={title:"title___3ITEA",content:"content___2f6_X",red:"red___q9ciO"}}}]);