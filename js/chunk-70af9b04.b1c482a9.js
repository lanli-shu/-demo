(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70af9b04"],{9374:function(a,t,e){"use strict";var s=e("a628"),r=e.n(s);r.a},"9ebe":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"Account-details"},[e("div",{staticClass:"Account-content"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[a._v("管理员信息")])]),e("div",{staticClass:"text item"},[e("ul",{staticClass:"Account-ul"},[e("li",[a._v("管理员ID："+a._s(a.tableData.id))]),e("li",[a._v("账号："+a._s(a.tableData.account))]),e("li",[a._v("用户组："+a._s(a.tableData.userGroup))]),e("li",[a._v("创建时间："+a._s(a.tableData.ctime))])]),e("div",{staticClass:"nameimg"},[e("span",[a._v("管理员头像：")]),e("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://127.0.0.1:3333/goods.php?a=uploadImg","show-file-list":!1,"on-success":a.handleAvatarSuccess,"before-upload":a.beforeAvatarUpload}},[a.imageUrl?e("img",{staticClass:"avatar",attrs:{src:a.imageUrl}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e("div",{staticStyle:{clear:"both"}})])])],1)])},r=[],i=(e("96cf"),e("1da1")),n={created:function(){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.$axios.get("users.php?a=readOne&id=".concat(sessionStorage.getItem("id")));case 2:e=t.sent,0==e.data.code&&(a.tableData=e.data.data,a.imageUrl=e.data.data.imgUrl);case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{tableData:{id:123,name:"王小虎",account:"超级管理员",datatime:"2020.3.3"},imageUrl:""}},methods:{handleAvatarSuccess:function(a){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.imageUrl="http://127.0.0.1:3333/"+a.data,s={id:t.tableData.id,imgUrl:t.imageUrl},e.next=4,t.$axios.post("users.php?a=chgImg",t.qs.stringify(s));case 4:case"end":return e.stop()}}),e)})))()},beforeAvatarUpload:function(a){var t="image/jpeg"===a.type,e=a.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),e||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&e}}},c=n,l=(e("9374"),e("2877")),o=Object(l["a"])(c,s,r,!1,null,null,null);t["default"]=o.exports},a628:function(a,t,e){}}]);
//# sourceMappingURL=chunk-70af9b04.b1c482a9.js.map