(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"1Cf9":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l={getReisterCode:{api:function(e){return"/supplychainfinance-user/user/getReisterCode?phone=".concat(e)},type:"POST"},validate:{api:function(e){var t=e.phone,a=e.code,l=e.type;return"/supplychainfinance-user/user/validate?account=".concat(t,"&code=").concat(a,"&type=").concat(l)},type:"POST"},register:{api:function(){return"/supplychainfinance-user/user/register"},type:"POST"}};t["default"]=l},"7c/T":function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0,a("+L6B");var r=l(a("2/Rp"));a("5NDa");var d=l(a("5rEg"));a("miYZ");var u=l(a("tsqr")),o=l(a("2Taf")),s=l(a("vZ4D")),i=l(a("l4Ni")),c=l(a("ujKo")),f=l(a("MhPg"));a("y8nQ");var m,p,_,g,h=l(a("Vl3Y")),v=n(a("q1tI")),E=a("MuoO"),b=l(a("bKel")),N=l(a("3a4m")),w=l(a("wY1l")),y=l(a("bIAp")),C=l(a("1Cf9")),L=l(a("t3Un")),k=a("+n12"),R=h["default"].Item,M=(m=(0,E.connect)(function(e){var t=e.global,a=e.loading;return{global:t,logining:a.effects["global/login"]}}),p=h["default"].create(),m(_=p((g=function(e){function t(e){var a;return(0,o["default"])(this,t),a=(0,i["default"])(this,(0,c["default"])(t).call(this,e)),a.handleEnterKey=function(e){13===e.which&&a.handleOk()},a.getReisterCode=function(){var e=a.props.form,t=e.getFieldError,l=e.getFieldValue,n=l("phone"),r=t("phone");!r&&n?(0,L["default"])(C["default"].getReisterCode.api(n),{method:C["default"].getReisterCode.type}).then(function(e){0===e.code?(u["default"].success("\u77ed\u4fe1\u53d1\u9001\u6210\u529f,\u8bf7\u67e5\u6536"),a.setState({time:60}),a.timer=setInterval(function(){var e=a.state.time;e>1?(e--,a.setState({time:e})):(clearInterval(a.timer),a.setState({time:0}))},1e3)):u["default"].error(e.msg)}):u["default"].info("\u8bf7\u8f93\u5165\u6b63\u786e\u768411\u4f4d\u624b\u673a\u53f7")},a.state={time:0},a.timer=null,a}return(0,f["default"])(t,e),(0,s["default"])(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleEnterKey.bind(this))}},{key:"handleOk",value:function(){var e=this.props.form;e.validateFieldsAndScroll(function(e,t){if(!e&&!e){var a=t.code,l=t.phone,n=t.password,r=t.password1;if(n!==r)return void u["default"].error("\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u6837");(0,L["default"])(C["default"].validate.api({phone:l,code:a,type:0}),{method:C["default"].validate.type}).then(function(e){return 0===e.code||(u["default"].error(e.msg),!1)}).then(function(e){return e?(0,L["default"])(C["default"].register.api(),{method:C["default"].register.type,body:{phone:l,password:n,name:""}}):{}}).then(function(e){e&&0===e.code?u["default"].success("\u6ce8\u518c\u6210\u529f\uff01",1.5,function(){N["default"].replace("/login")}):e.msg&&u["default"].error(e.msg)})}})}},{key:"componentWillUnmount",value:function(){this.timer&&clearInterval(this.timer),document.removeEventListener("keydown",this.handleEnterKey)}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props,l=(t.global,t.logining,this.state.time);return v["default"].createElement("div",{className:y["default"].app},v["default"].createElement("div",{className:y["default"].panel},v["default"].createElement("div",{className:y["default"].bg}),v["default"].createElement("div",{className:y["default"].wraper},v["default"].createElement("img",{className:y["default"].topLeft,src:a("haLz")}),v["default"].createElement("img",{className:y["default"].topRight,src:a("XyXv")}),v["default"].createElement("img",{className:y["default"].bottomLeft,src:a("Iiha")}),v["default"].createElement("img",{className:y["default"].bottomRight,src:a("MIGd")}),v["default"].createElement("div",{className:y["default"].left},v["default"].createElement("img",{className:y["default"].logo,src:a("zspw")}),v["default"].createElement("div",{className:y["default"].titleC},"\u4f9b\u5e94\u94fe\u79d1\u6280\u7ba1\u7406\u7cfb\u7edf"),v["default"].createElement("div",{className:y["default"].titleE},"SUPPLY CHAIN MANAGEMENT SYSTEM"),v["default"].createElement("div",{className:y["default"].welcome},"WELCOME")),v["default"].createElement("div",{className:y["default"].right},v["default"].createElement(h["default"],null,v["default"].createElement("div",{className:y["default"].title},"\u6ce8\u518c"),v["default"].createElement("div",{className:"".concat(y["default"].userName," ").concat(y["default"].pre)},v["default"].createElement(R,null,e("phone",{rules:[{required:!0,pattern:k.regExps.phone,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u768411\u4f4d\u624b\u673a\u53f7"}]})(v["default"].createElement(d["default"],{maxLength:11,prefix:v["default"].createElement("span",{className:y["default"].icon},"+86"),placeholder:"11\u4f4d\u624b\u673a\u53f7"})))),v["default"].createElement("div",{className:y["default"].code},v["default"].createElement("div",{className:y["default"].input_},v["default"].createElement(R,null,e("code",{rules:[{required:!0,message:"\u8f93\u5165\u9a8c\u8bc1\u7801!"}]})(v["default"].createElement(d["default"],{placeholder:"\u8f93\u5165\u9a8c\u8bc1\u7801",type:"number",autoComplete:!1,autoCapitalize:!1})))),v["default"].createElement(r["default"],{className:y["default"].button_,disabled:l>0,onClick:this.getReisterCode},l>0?"".concat(l,"\u79d2\u540e\u5931\u6548"):"\u83b7\u53d6\u9a8c\u8bc1\u7801")),v["default"].createElement("div",{className:y["default"].password},v["default"].createElement(R,null,e("password",{rules:[{required:!0,pattern:k.regExps.password,message:"\u8bf7\u8f93\u51656-16\u4f4d\u5bc6\u7801(\u6570\u5b57 \u5b57\u6bcd)"}]})(v["default"].createElement(d["default"],{type:"password",placeholder:"6-16\u4f4d\u5bc6\u7801\uff0c\u533a\u5206\u5927\u5c0f\u5199"})))),v["default"].createElement("div",{className:y["default"].password},v["default"].createElement(R,null,e("password1",{rules:[{required:!0,pattern:k.regExps.password,message:"\u8bf7\u8f93\u51656-16\u4f4d\u5bc6\u7801(\u6570\u5b57 \u5b57\u6bcd)"}]})(v["default"].createElement(d["default"],{type:"password",placeholder:"\u786e\u8ba4\u5bc6\u7801"}))))),v["default"].createElement("div",{className:y["default"].button,onClick:this.handleOk.bind(this)},"\u6ce8\u518c"),v["default"].createElement(w["default"],{className:y["default"].toLogin,to:"/login"},"\u4f7f\u7528\u5df2\u6709\u8d26\u6237\u767b\u5f55")))))}}]),t}(v.Component),_=g))||_)||_),I=(0,b["default"])(M);t["default"]=I},bIAp:function(e,t,a){e.exports={app:"app___26M2F",panel:"panel___1Qd5_",bg:"bg___pXgnX",wraper:"wraper___2r3ol",left:"left___1o9PZ",logo:"logo___GagRg",titleC:"titleC___2G6X4",titleE:"titleE___3xA8-",welcome:"welcome___2ubnS",right:"right___19IjY",title:"title___EgKk2",userName:"userName___2ZPfo",pre:"pre___2cSgk",icon:"icon___Q4tG0",code:"code___EUjKY",input_:"input____2kGCA",button_:"button____5p3JI",password:"password___Mmc3G",button:"button___1s9Js",toLogin:"toLogin___1szLw",topLeft:"topLeft___1XMJs",topRight:"topRight___3xlnR",bottomLeft:"bottomLeft___1cV9r",bottomRight:"bottomRight___3x_ar",input:"input___2_vOb"}}}]);