(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-feca1c88"],{1401:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"i",(function(){return s})),r.d(t,"e",(function(){return n})),r.d(t,"h",(function(){return c})),r.d(t,"a",(function(){return l})),r.d(t,"j",(function(){return u})),r.d(t,"d",(function(){return m})),r.d(t,"f",(function(){return p})),r.d(t,"g",(function(){return y}));r("99af");var i=r("b775");function a(e){return Object(i["a"])({url:"/social_securitys/historys/".concat(e.month),params:e})}function o(e){return Object(i["a"])({url:"/social_securitys/historys/".concat(e.year,"/list"),data:e})}function s(e){return Object(i["a"])({url:"/social_securitys/historys/".concat(e.yearMonth,"/newReport"),method:"put",data:e})}function n(e){return Object(i["a"])({url:"/social_securitys/historys/archiveDetail/".concat(e.userId,"/").concat(e.yearMonth),data:e})}function c(e){return Object(i["a"])({url:"/social_securitys/list",method:"post",data:e})}function l(e){return Object(i["a"])({url:"/social_securitys/historys/".concat(e.yearMonth,"/archive"),method:"post",data:e})}function u(e){return Object(i["a"])({url:"/social_securitys/".concat(e.userId),method:"put",data:e})}function m(e){return Object(i["a"])({url:"/social_securitys/".concat(e)})}function p(e){return Object(i["a"])({url:"/social_securitys/payment_item/".concat(e)})}function y(){return Object(i["a"])({url:"/social_securitys/settings"})}},"245a":function(e,t,r){"use strict";r("548a")},2934:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("b775");function a(){return Object(i["a"])({url:"/sys/city"})}},"495e":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"detailBox"},[r("div",{staticClass:"detailTop"},[e._m(0),r("div",[r("b",[e._v(e._s(e.sizeForm.user.username))]),r("span",{class:e.dutyStatus?"job-txt-green":"job-txt-red"},[e._v(e._s(e.dutyStatusTxt))]),r("br"),r("p",[r("span",[e._v("最新工资基数 "+e._s(e.sizeForm.salaryBase)+" ")]),e._v(" "),r("span",[e._v("入职时间 "+e._s(e._f("formatDate")(e.sizeForm.user.timeOfEntry)))]),e._v(" "),r("span",[e._v("联系电话 "+e._s(e.sizeForm.user.mobile))])]),r("br"),r("p",[e._v(" 本月不缴纳社保 "),r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.isPaySocialInMonth,callback:function(t){e.isPaySocialInMonth=t},expression:"isPaySocialInMonth"}}),e._v(" 本月不缴纳公积金 "),r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.isPayProvidentInMonth,callback:function(t){e.isPayProvidentInMonth=t},expression:"isPayProvidentInMonth"}})],1)])]),r("div",{staticClass:"detailContentBox"},[r("el-form",{ref:"sizeForm.userSocialSecurity",attrs:{model:e.sizeForm.userSocialSecurity,rules:e.rules,"label-width":"100px",size:"mini"}},[r("el-form-item",{attrs:{label:"参保城市",prop:"participatingInTheCity"}},[r("el-select",{attrs:{"value-key":"id",placeholder:"请选择参保城市"},on:{change:e.socialSecurityCityChange},model:{value:e.sizeForm.userSocialSecurity.participatingInTheCity,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"participatingInTheCity",t)},expression:"sizeForm.userSocialSecurity.participatingInTheCity"}},e._l(e.cityList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"社保类型",prop:"socialSecurityType"}},[r("el-select",{attrs:{placeholder:"请选择社保类型"},model:{value:e.sizeForm.userSocialSecurity.socialSecurityType,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"socialSecurityType",t)},expression:"sizeForm.userSocialSecurity.socialSecurityType"}},[r("el-option",{attrs:{label:"首次开户",value:1}}),r("el-option",{attrs:{label:"非首次开户",value:2}})],1)],1),r("el-form-item",{attrs:{label:"户籍类型",prop:"householdRegistrationType"}},[r("el-select",{attrs:{placeholder:"请选择户籍类型"},model:{value:e.sizeForm.userSocialSecurity.householdRegistrationType,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"householdRegistrationType",t)},expression:"sizeForm.userSocialSecurity.householdRegistrationType"}},[r("el-option",{attrs:{label:"本市城镇",value:1}}),r("el-option",{attrs:{label:"本市农村",value:2}}),r("el-option",{attrs:{label:"外阜城镇",value:3}}),r("el-option",{attrs:{label:"外阜农村",value:4}})],1)],1),r("el-form-item",{attrs:{label:"社保基数",prop:"socialSecurityBase"}},[r("el-input",{staticStyle:{width:"38%"},attrs:{type:"number"},model:{value:e.sizeForm.userSocialSecurity.socialSecurityBase,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"socialSecurityBase",t)},expression:"sizeForm.userSocialSecurity.socialSecurityBase"}}),e._v("（基数范围是3387 ~ 25401） ")],1),r("el-form-item",{attrs:{label:"工伤比例",prop:"industrialInjuryRatio"}},[r("el-input",{staticStyle:{width:"38%"},attrs:{type:"number"},model:{value:e.sizeForm.userSocialSecurity.industrialInjuryRatio,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"industrialInjuryRatio",t)},expression:"sizeForm.userSocialSecurity.industrialInjuryRatio"}}),e._v("（比例范围是0.2％ ~ 3％，推荐0.2％） ")],1),r("el-form-item",{attrs:{label:"社保缴纳"}},[r("el-form-item",{staticStyle:{display:"inline-block"},attrs:{label:"个人","label-width":"74px"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"个人",inline:"true",disabled:!0},model:{value:e.personalPayment,callback:function(t){e.personalPayment=t},expression:"personalPayment"}})],1),r("el-form-item",{staticStyle:{display:"inline-block"},attrs:{label:"公司","label-width":"74px"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"企业",size:"small",inline:"true",disabled:!0},model:{value:e.companyPayment,callback:function(t){e.companyPayment=t},expression:"companyPayment"}})],1),r("el-table",{attrs:{data:e.computePaymentItemList}},[r("el-table-column",{attrs:{label:"缴费项目",prop:"name"}}),r("el-table-column",{attrs:{label:"企业基数"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{directives:[{name:"show",rawName:"v-show",value:t.row.switchCompany,expression:"paymentItem.row.switchCompany"}]},[e._v(e._s(e.sizeForm.userSocialSecurity.socialSecurityBase))])]}}])}),r("el-table-column",{attrs:{label:"企业比例"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{directives:[{name:"show",rawName:"v-show",value:t.row.switchCompany,expression:"paymentItem.row.switchCompany"}]},[e._v(e._s(t.row.scaleCompany)+"%")])]}}])}),r("el-table-column",{attrs:{label:"企业缴纳"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{directives:[{name:"show",rawName:"v-show",value:t.row.switchCompany,expression:"paymentItem.row.switchCompany"}],attrs:{disabled:!0},model:{value:t.row.companyPay,callback:function(r){e.$set(t.row,"companyPay",r)},expression:"paymentItem.row.companyPay"}})]}}])}),r("el-table-column",{attrs:{label:"个人基数"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{directives:[{name:"show",rawName:"v-show",value:t.row.switchPersonal,expression:"paymentItem.row.switchPersonal"}]},[e._v(e._s(e.sizeForm.socialSecurityBase))])]}}])}),r("el-table-column",{attrs:{label:"个人比例"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{directives:[{name:"show",rawName:"v-show",value:t.row.switchPersonal,expression:"paymentItem.row.switchPersonal"}]},[e._v(e._s(t.row.scalePersonal)+"%")])]}}])}),r("el-table-column",{attrs:{label:"个人缴纳"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{directives:[{name:"show",rawName:"v-show",value:t.row.switchPersonal,expression:"paymentItem.row.switchPersonal"}],attrs:{disabled:!0},model:{value:t.row.personalPay,callback:function(r){e.$set(t.row,"personalPay",r)},expression:"paymentItem.row.personalPay"}})]}}])})],1)],1),r("el-form-item",{attrs:{label:"社保备注"}},[r("el-input",{staticStyle:{width:"38%"},attrs:{type:"textarea",rows:2,placeholder:"1-300字符",maxlength:"300","show-word-limit":""},model:{value:e.sizeForm.userSocialSecurity.socialSecurityNotes,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"socialSecurityNotes",t)},expression:"sizeForm.userSocialSecurity.socialSecurityNotes"}})],1),r("el-form-item",{attrs:{label:"公积金城市",prop:"providentFundCity"}},[r("el-select",{attrs:{placeholder:"请选择公积金城市","value-key":"id"},model:{value:e.sizeForm.userSocialSecurity.providentFundCity,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"providentFundCity",t)},expression:"sizeForm.userSocialSecurity.providentFundCity"}},e._l(e.cityList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"公积金基数",prop:"providentFundBase"}},[r("el-input",{staticStyle:{width:"38%"},attrs:{type:"number"},model:{value:e.sizeForm.userSocialSecurity.providentFundBase,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"providentFundBase",t)},expression:"sizeForm.userSocialSecurity.providentFundBase"}}),e._v("（基数范围是2273 ~ 25401） ")],1),r("el-form-item",{attrs:{label:"企业比例",prop:"enterpriseProportion"}},[r("el-input",{staticStyle:{width:"38%"},attrs:{placeholder:"12",type:"number"},model:{value:e.sizeForm.userSocialSecurity.enterpriseProportion,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"enterpriseProportion",t)},expression:"sizeForm.userSocialSecurity.enterpriseProportion"}}),e._v("（比例范围是5％ ~ 12％，推荐12％ ） ")],1),r("el-form-item",{attrs:{label:"个人比例",prop:"personalProportion"}},[r("el-input",{staticStyle:{width:"38%"},attrs:{placeholder:"12",type:"number"},model:{value:e.sizeForm.userSocialSecurity.personalProportion,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"personalProportion",t)},expression:"sizeForm.userSocialSecurity.personalProportion"}}),e._v("（比例范围是5％ ~ 12％，推荐12％ ） ")],1),r("el-form-item",{attrs:{label:"公积金缴纳"}},[r("el-form-item",{staticStyle:{display:"inline-block"},attrs:{label:"个人","label-width":"50px",prop:"personalProvidentFundPayment"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"个人",inline:"true",type:"number"},model:{value:e.sizeForm.userSocialSecurity.personalProvidentFundPayment,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"personalProvidentFundPayment",t)},expression:"sizeForm.userSocialSecurity.personalProvidentFundPayment"}})],1),r("el-form-item",{staticStyle:{display:"inline-block"},attrs:{label:"公司","label-width":"50px",prop:"enterpriseProvidentFundPayment"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"企业",inline:"true",type:"number"},model:{value:e.sizeForm.userSocialSecurity.enterpriseProvidentFundPayment,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"enterpriseProvidentFundPayment",t)},expression:"sizeForm.userSocialSecurity.enterpriseProvidentFundPayment"}})],1),r("el-form-item",{staticStyle:{display:"inline-block"}},[r("span",[e._v("（为自动测算结果，可手动调整）")])])],1),r("el-form-item",{attrs:{label:"公积金备注"}},[r("el-input",{staticStyle:{width:"38%"},attrs:{type:"textarea",rows:2,placeholder:"1-300字符",maxlength:"300","show-word-limit":""},model:{value:e.sizeForm.userSocialSecurity.providentFundNotes,callback:function(t){e.$set(e.sizeForm.userSocialSecurity,"providentFundNotes",t)},expression:"sizeForm.userSocialSecurity.providentFundNotes"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit()}}},[e._v("保存")]),r("el-button",[e._v("取消")])],1)],1)],1)])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("img",{attrs:{src:r("616f"),width:"100",height:"100",alt:""}})])}],o=r("c7eb"),s=r("1da1"),n=(r("a9e3"),r("d3b7"),r("159b"),r("b0c0"),r("b680"),r("2934")),c=r("1401"),l={name:"DetailSocial",data:function(){var e=function(e,t,r){""===t?r(new Error("请输入社保基数")):t<3387||t>25401?r(new Error("请不要超出范围，基数范围是3387 ~ 25401")):r()},t=function(e,t,r){""===t?r(new Error("请输入工伤比例")):t<.2||t>3?r(new Error("请不要超出范围，比例范围是0.2％ ~ 3％")):r()},r=function(e,t,r){""===t?r(new Error("请输入公积金基数")):t<2273||t>25401?r(new Error("请不要超出范围，基数范围是2273 ~ 25401")):r()},i=function(e,t,r){""===t?r(new Error("请输入企业比例")):t<5||t>12?r(new Error("请不要超出范围，比例范围是5％ ~ 12％")):r()},a=function(e,t,r){""===t?r(new Error("请输入个人比例")):t<5||t>12?r(new Error("请不要超出范围，比例范围是5％ ~ 12％")):r()};return{sizeForm:{user:{},userSocialSecurity:{socialSecurityBase:3387,industrialInjuryRatio:.2}},cityList:[],paymentItemList:[],personalPayment:0,companyPayment:0,isPaySocialInMonth:!1,isPayProvidentInMonth:!1,rules:{participatingInTheCity:[{required:!0,message:"请选择参保城市1234",trigger:"change"}],socialSecurityType:[{required:!0,message:"请选择社保类型",trigger:"change"}],householdRegistrationType:[{required:!0,message:"请选择户籍类型",trigger:"change"}],socialSecurityBase:[{required:!0,validator:e,trigger:"blur"}],industrialInjuryRatio:[{required:!0,validator:t,trigger:"blur"}],providentFundCity:[{required:!0,message:"请选择公积金城市",trigger:"change"}],providentFundBase:[{required:!0,validator:r,trigger:"blur"}],enterpriseProportion:[{required:!0,validator:i,trigger:"blur"}],personalProportion:[{required:!0,validator:a,trigger:"blur"}],enterpriseProvidentFundPayment:[{required:!0,message:"请输入公司公积金缴纳数额",trigger:"change"}],personalProvidentFundPayment:[{required:!0,message:"请输入个人公积金缴纳数额",trigger:"change"}]}}},computed:{dutyStatusTxt:function(){return 1===this.sizeForm.user.inServiceStatus?"在职":"离职"},dutyStatus:function(){return 1===this.sizeForm.user.inServiceStatus},computePaymentItemList:function(){var e=this,t=Number(0),r=Number(0);return this.paymentItemList.forEach((function(i){"工伤"===i.name&&i.switchCompany&&(i.scaleCompany=e.sizeForm.userSocialSecurity.industrialInjuryRatio),i.switchCompany&&(i.companyPay=parseFloat(e.sizeForm.userSocialSecurity.socialSecurityBase*i.scaleCompany/100).toFixed(2),r=Number(r+Number(i.companyPay))),i.switchPersonal&&(i.personalPay=parseFloat(e.sizeForm.userSocialSecurity.socialSecurityBase*i.scalePersonal/100).toFixed(2),t=Number(t+Number(i.personalPay)))})),this.paymentItemList},computeEnterpriseProvidentFundPayment:function(){return parseFloat(this.sizeForm.userSocialSecurity.enterpriseProportion*this.sizeForm.userSocialSecurity.providentFundBase/100).toFixed(2)},computePersonalProvidentFundPayment:function(){return parseFloat(this.sizeForm.userSocialSecurity.personalProportion*this.sizeForm.userSocialSecurity.providentFundBase/100).toFixed(2)}},watch:{"sizeForm.userSocialSecurity.providentFundBase":function(){this.changeProvidentFundPayment()},"sizeForm.userSocialSecurity.enterpriseProportion":function(){this.changeProvidentFundPayment()},"sizeForm.userSocialSecurity.personalProportion":function(){this.changeProvidentFundPayment()},"sizeForm.userSocialSecurity.enterprisesPaySocialSecurityThisMonth":function(){this.isPaySocialInMonth=1===this.sizeForm.enterprisesPaySocialSecurityThisMonth},"sizeForm.userSocialSecurity.enterprisesPayTheProvidentFundThisMonth":function(){this.isPayProvidentInMonth=1===this.sizeForm.enterprisesPayTheProvidentFundThisMonth}},created:function(){this.sizeForm.userId=this.$route.params.id,this.getCityList(),this.getContent()},methods:{onSubmit:function(){this.saveData()},socialSecurityCityChange:function(e){this.sizeForm.userSocialSecurity.participatingInTheCity=e,this.initPaymentItem(e)},saveData:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){var r,i;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.sizeForm.userSocialSecurity.enterprisesPaySocialSecurityThisMonth=e.isPaySocialInMonth?1:0,e.sizeForm.userSocialSecurity.enterprisesPayTheProvidentFundThisMonth=e.isPayProvidentInMonth?1:0,e.sizeForm.userSocialSecurity.userId=e.sizeForm.userId,r=e.sizeForm.userSocialSecurity.participatingInTheCity,i=e.sizeForm.userSocialSecurity.participatingInTheCity,e.sizeForm.userSocialSecurity.participatingInTheCity=r.name,e.sizeForm.userSocialSecurity.participatingInTheCityId=r.id,e.sizeForm.userSocialSecurity.providentFundCity=i.name,e.sizeForm.userSocialSecurity.providentFundCityId=i.id,t.next=11,Object(c["j"])(e.sizeForm.userSocialSecurity);case 11:e.$message.success("保存成功");case 12:case"end":return t.stop()}}),t)})))()},getCityList:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["a"])();case 2:e.cityList=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getContent:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){var r,i;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["d"])(e.$route.params.id);case 2:r=t.sent,r.userSocialSecurity?(e.sizeForm=r,e.sizeForm.userId=e.$route.params.id,i={},i.name=e.sizeForm.userSocialSecurity.participatingInTheCity,i.id=e.sizeForm.userSocialSecurity.participatingInTheCityId,e.initPaymentItem(i)):e.sizeForm.user=r.user;case 4:case"end":return t.stop()}}),t)})))()},initPaymentItem:function(e){var t=this;return Object(s["a"])(Object(o["a"])().mark((function r(){return Object(o["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["f"])(e.id);case 2:t.paymentItemList=r.sent;case 3:case"end":return r.stop()}}),r)})))()},changeProvidentFundPayment:function(){this.sizeForm.userSocialSecurity.enterpriseProvidentFundPayment=parseFloat(this.sizeForm.userSocialSecurity.enterpriseProportion*this.sizeForm.userSocialSecurity.providentFundBase/100).toFixed(2),this.sizeForm.userSocialSecurity.personalProvidentFundPayment=parseFloat(this.sizeForm.userSocialSecurity.personalProportion*this.sizeForm.userSocialSecurity.providentFundBase/100).toFixed(2)}}},u=l,m=(r("245a"),r("2877")),p=Object(m["a"])(u,i,a,!1,null,"e190d9e2",null);t["default"]=p.exports},"548a":function(e,t,r){},"616f":function(e,t,r){e.exports=r.p+"static/img/img.0615818f.jpeg"}}]);