(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e97c8a4"],{"057f":function(t,e,r){var a=r("c6b6"),n=r("fc6a"),o=r("241c").f,i=r("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return i(c)}};t.exports.f=function(t){return c&&"Window"==a(t)?s(t):o(n(t))}},"072a":function(t,e,r){"use strict";r("9efa")},"0b42":function(t,e,r){var a=r("da84"),n=r("e8b5"),o=r("68ee"),i=r("861d"),c=r("b622"),s=c("species"),u=a.Array;t.exports=function(t){var e;return n(t)&&(e=t.constructor,o(e)&&(e===u||n(e.prototype))?e=void 0:i(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?u:e}},"159b":function(t,e,r){var a=r("da84"),n=r("fdbc"),o=r("785a"),i=r("17c2"),c=r("9112"),s=function(t){if(t&&t.forEach!==i)try{c(t,"forEach",i)}catch(e){t.forEach=i}};for(var u in n)n[u]&&s(a[u]&&a[u].prototype);s(o)},"17c2":function(t,e,r){"use strict";var a=r("b727").forEach,n=r("a640"),o=n("forEach");t.exports=o?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var a=r("d039"),n=r("b622"),o=r("2d00"),i=n("species");t.exports=function(t){return o>=51||!a((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2637:function(t,e,r){"use strict";r("7f12")},"428f":function(t,e,r){var a=r("da84");t.exports=a},"4dae":function(t,e,r){var a=r("da84"),n=r("23cb"),o=r("07fa"),i=r("8418"),c=a.Array,s=Math.max;t.exports=function(t,e,r){for(var a=o(t),u=n(e,a),f=n(void 0===r?a:r,a),l=c(s(f-u,0)),p=0;u<f;u++,p++)i(l,p,t[u]);return l.length=p,l}},"4de4":function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").filter,o=r("1dde"),i=o("filter");a({target:"Array",proto:!0,forced:!i},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var a=r("0b42");t.exports=function(t,e){return new(a(t))(0===e?0:e)}},"746f":function(t,e,r){var a=r("428f"),n=r("1a2d"),o=r("e5383"),i=r("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});n(e,t)||i(e,t,{value:o.f(t)})}},"7f12":function(t,e,r){},8418:function(t,e,r){"use strict";var a=r("a04b"),n=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=a(e);i in t?n.f(t,i,o(0,r)):t[i]=r}},"9efa":function(t,e,r){},a4d3:function(t,e,r){"use strict";var a=r("23e7"),n=r("da84"),o=r("d066"),i=r("2ba4"),c=r("c65b"),s=r("e330"),u=r("c430"),f=r("83ab"),l=r("4930"),p=r("d039"),d=r("1a2d"),m=r("e8b5"),b=r("1626"),v=r("861d"),g=r("3a9b"),h=r("d9b5"),y=r("825a"),w=r("7b0b"),O=r("fc6a"),D=r("a04b"),x=r("577e"),j=r("5c6c"),_=r("7c73"),k=r("df75"),P=r("241c"),I=r("057f"),S=r("7418"),$=r("06cf"),E=r("9bf2"),C=r("37e8"),F=r("d1e7"),L=r("f36a"),q=r("6eeb"),A=r("5692"),R=r("f772"),T=r("d012"),N=r("90e3"),V=r("b622"),J=r("e5383"),U=r("746f"),B=r("d44e"),M=r("69f3"),Q=r("b727").forEach,W=R("hidden"),X="Symbol",z="prototype",G=V("toPrimitive"),H=M.set,K=M.getterFor(X),Y=Object[z],Z=n.Symbol,tt=Z&&Z[z],et=n.TypeError,rt=n.QObject,at=o("JSON","stringify"),nt=$.f,ot=E.f,it=I.f,ct=F.f,st=s([].push),ut=A("symbols"),ft=A("op-symbols"),lt=A("string-to-symbol-registry"),pt=A("symbol-to-string-registry"),dt=A("wks"),mt=!rt||!rt[z]||!rt[z].findChild,bt=f&&p((function(){return 7!=_(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,r){var a=nt(Y,e);a&&delete Y[e],ot(t,e,r),a&&t!==Y&&ot(Y,e,a)}:ot,vt=function(t,e){var r=ut[t]=_(tt);return H(r,{type:X,tag:t,description:e}),f||(r.description=e),r},gt=function(t,e,r){t===Y&&gt(ft,e,r),y(t);var a=D(e);return y(r),d(ut,a)?(r.enumerable?(d(t,W)&&t[W][a]&&(t[W][a]=!1),r=_(r,{enumerable:j(0,!1)})):(d(t,W)||ot(t,W,j(1,{})),t[W][a]=!0),bt(t,a,r)):ot(t,a,r)},ht=function(t,e){y(t);var r=O(e),a=k(r).concat(xt(r));return Q(a,(function(e){f&&!c(wt,r,e)||gt(t,e,r[e])})),t},yt=function(t,e){return void 0===e?_(t):ht(_(t),e)},wt=function(t){var e=D(t),r=c(ct,this,e);return!(this===Y&&d(ut,e)&&!d(ft,e))&&(!(r||!d(this,e)||!d(ut,e)||d(this,W)&&this[W][e])||r)},Ot=function(t,e){var r=O(t),a=D(e);if(r!==Y||!d(ut,a)||d(ft,a)){var n=nt(r,a);return!n||!d(ut,a)||d(r,W)&&r[W][a]||(n.enumerable=!0),n}},Dt=function(t){var e=it(O(t)),r=[];return Q(e,(function(t){d(ut,t)||d(T,t)||st(r,t)})),r},xt=function(t){var e=t===Y,r=it(e?ft:O(t)),a=[];return Q(r,(function(t){!d(ut,t)||e&&!d(Y,t)||st(a,ut[t])})),a};if(l||(Z=function(){if(g(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?x(arguments[0]):void 0,e=N(t),r=function(t){this===Y&&c(r,ft,t),d(this,W)&&d(this[W],e)&&(this[W][e]=!1),bt(this,e,j(1,t))};return f&&mt&&bt(Y,e,{configurable:!0,set:r}),vt(e,t)},tt=Z[z],q(tt,"toString",(function(){return K(this).tag})),q(Z,"withoutSetter",(function(t){return vt(N(t),t)})),F.f=wt,E.f=gt,C.f=ht,$.f=Ot,P.f=I.f=Dt,S.f=xt,J.f=function(t){return vt(V(t),t)},f&&(ot(tt,"description",{configurable:!0,get:function(){return K(this).description}}),u||q(Y,"propertyIsEnumerable",wt,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:Z}),Q(k(dt),(function(t){U(t)})),a({target:X,stat:!0,forced:!l},{for:function(t){var e=x(t);if(d(lt,e))return lt[e];var r=Z(e);return lt[e]=r,pt[r]=e,r},keyFor:function(t){if(!h(t))throw et(t+" is not a symbol");if(d(pt,t))return pt[t]},useSetter:function(){mt=!0},useSimple:function(){mt=!1}}),a({target:"Object",stat:!0,forced:!l,sham:!f},{create:yt,defineProperty:gt,defineProperties:ht,getOwnPropertyDescriptor:Ot}),a({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:Dt,getOwnPropertySymbols:xt}),a({target:"Object",stat:!0,forced:p((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(w(t))}}),at){var jt=!l||p((function(){var t=Z();return"[null]"!=at([t])||"{}"!=at({a:t})||"{}"!=at(Object(t))}));a({target:"JSON",stat:!0,forced:jt},{stringify:function(t,e,r){var a=L(arguments),n=e;if((v(e)||void 0!==t)&&!h(t))return m(e)||(e=function(t,e){if(b(n)&&(e=c(n,this,t,e)),!h(e))return e}),a[1]=e,i(at,null,a)}})}if(!tt[G]){var _t=tt.valueOf;q(tt,G,(function(t){return c(_t,this)}))}B(Z,X),T[W]=!0},a640:function(t,e,r){"use strict";var a=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&a((function(){r.call(null,e||function(){throw 1},1)}))}},b0c0:function(t,e,r){var a=r("83ab"),n=r("5e77").EXISTS,o=r("e330"),i=r("9bf2").f,c=Function.prototype,s=o(c.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,f=o(u.exec),l="name";a&&!n&&i(c,l,{configurable:!0,get:function(){try{return f(u,s(this))[1]}catch(t){return""}}})},b64b:function(t,e,r){var a=r("23e7"),n=r("7b0b"),o=r("df75"),i=r("d039"),c=i((function(){o(1)}));a({target:"Object",stat:!0,forced:c},{keys:function(t){return o(n(t))}})},b727:function(t,e,r){var a=r("0366"),n=r("e330"),o=r("44ad"),i=r("7b0b"),c=r("07fa"),s=r("65f0"),u=n([].push),f=function(t){var e=1==t,r=2==t,n=3==t,f=4==t,l=6==t,p=7==t,d=5==t||l;return function(m,b,v,g){for(var h,y,w=i(m),O=o(w),D=a(b,v),x=c(O),j=0,_=g||s,k=e?_(m,x):r||p?_(m,0):void 0;x>j;j++)if((d||j in O)&&(h=O[j],y=D(h,j,w),t))if(e)k[j]=y;else if(y)switch(t){case 3:return!0;case 5:return h;case 6:return j;case 2:u(k,h)}else switch(t){case 4:return!1;case 7:u(k,h)}return l?-1:n||f?f:k}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},c287:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"add-product"},[r("div",{staticClass:"lc"},[r("step",{attrs:{current:t.ooo}})],1),r("div",{staticClass:"form"},[t.category&&0===t.ooo?r("basic",{attrs:{formData:t.basicInfo,categoryData:t.category},on:{click:t.handlerClick}}):t._e(),1===t.ooo?r("basic-pul",{attrs:{formData:t.basicPulInfo},on:{next:t.next,pre:t.pre}}):t._e()],1)])},n=[],o=r("5530"),i=r("1da1"),c=(r("96cf"),r("b1bc")),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-steps",{attrs:{current:t.current}},[r("a-step",{attrs:{title:"填写商品基本信息",subTitle:""}}),r("a-step",{attrs:{title:"填写商品销售信息",subTitle:""}})],1)},u=[],f={props:["current"]},l=f,p=r("2877"),d=Object(p["a"])(l,s,u,!1,null,null,null),m=d.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-form-model",{ref:"ruleForm",attrs:{model:t.formData,rules:t.rules}},[r("a-form-model-item",{ref:"title",attrs:{label:"副标题",prop:"title"}},[r("a-input",{model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),r("a-form-model-item",{attrs:{label:"商品描述",prop:"desc"}},[r("a-input",{attrs:{type:"textarea"},model:{value:t.formData.desc,callback:function(e){t.$set(t.formData,"desc",e)},expression:"formData.desc"}})],1),r("a-form-model-item",{attrs:{label:"商品分类",prop:"category"}},[r("a-select",{attrs:{placeholder:"请选择分类"},on:{change:t.handlerChange},model:{value:t.formData.category,callback:function(e){t.$set(t.formData,"category",e)},expression:"formData.category"}},t._l(t.categoryData,(function(e){return r("a-select-option",{key:e.id,attrs:{value:e.name}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),r("a-form-model-item",{attrs:{prop:"c_item"}},[r("a-select",{attrs:{placeholder:"请选择分类"},model:{value:t.formData.c_item,callback:function(e){t.$set(t.formData,"c_item",e)},expression:"formData.c_item"}},t._l(t.option,(function(e){return r("a-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])})),1)],1),r("a-form-model-item",{attrs:{label:"标签",prop:"tags"}},[r("a-select",{attrs:{mode:"tags","default-value":["包邮，最晚次日达！"]},model:{value:t.formData.tags,callback:function(e){t.$set(t.formData,"tags",e)},expression:"formData.tags"}})],1),r("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[r("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(" 下一步 ")]),r("a-button",{staticStyle:{"margin-left":"10px"},on:{click:t.resetForm}},[t._v(" 重置 ")])],1)],1)},v=[],g=(r("b0c0"),{props:["categoryData","formData"],data:function(){return{categoryTitle:"",rules:{title:[{required:!0,message:"请输入商品标题",trigger:"blur"}],category:[{required:!0,message:"请选择反分类",trigger:"blur"}],tags:[{required:!0,message:"请选择",trigger:"blur"}],desc:[{required:!0,message:"请输入商品描述",trigger:"blur"}]}}},methods:{onSubmit:function(){var t=this,e=this;this.$refs.ruleForm.validate((function(r){return!!r&&(e.$emit("click",t.formData),"")}))},handlerChange:function(t){this.categoryTitle=t},resetForm:function(){this.$refs.ruleForm.resetFields()}},computed:{option:function(){for(var t=[],e=0;e<this.categoryData.length;e+=1)this.categoryData[e].name===this.categoryTitle&&(t=this.categoryData[e].c_items);return t}}}),h=g,y=Object(p["a"])(h,b,v,!1,null,null,null),w=y.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-form-model",{ref:"form",attrs:{rules:t.rules,model:t.formData,"label-col":{span:4},"wrapper-col":{span:15}}},[r("a-form-model-item",{attrs:{label:"商品售价"}},[r("a-input",{model:{value:t.formData.price,callback:function(e){t.$set(t.formData,"price",t._n(e))},expression:"formData.price"}})],1),r("a-form-model-item",{attrs:{label:"销售折扣价"}},[r("a-input",{model:{value:t.formData.price_off,callback:function(e){t.$set(t.formData,"price_off",t._n(e))},expression:"formData.price_off"}})],1),r("a-form-model-item",{attrs:{label:"商品库存"}},[r("a-input",{model:{value:t.formData.inventory,callback:function(e){t.$set(t.formData,"inventory",t._n(e))},expression:"formData.inventory"}})],1),r("a-form-model-item",{attrs:{label:"计重单位"}},[r("a-input",{model:{value:t.formData.unit,callback:function(e){t.$set(t.formData,"unit",e)},expression:"formData.unit"}})],1),r("a-form-model-item",{attrs:{label:"图片"}},[r("a-upload",{attrs:{action:"/upload/images?appkey=1755179168_1639361355771","list-type":"picture-card","file-list":t.formData.fileList,name:"avatar"},on:{preview:t.handlePreview,change:t.handleChange}},[t.formData.fileList.length<8?r("div",[r("a-icon",{attrs:{type:t.previewVisible?"loading":"plus"}}),r("div",{staticClass:"ant-upload-text"},[t._v(" Upload ")])],1):t._e()]),r("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1),r("a-form-model-item",[r("a-button",{staticClass:"next",attrs:{type:"primary"},on:{click:t.next}},[t._v("下一步")]),r("a-button",{staticClass:"pre",on:{click:t.pre}},[t._v("上一步")])],1)],1)},D=[];r("d3b7"),r("4de4");function x(t){return new Promise((function(e,r){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){return e(a.result)},a.onerror=function(t){return r(t)}}))}var j={props:["formData"],data:function(){return{previewVisible:!1,previewImage:"",rules:{price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],inventory:[{required:!0,message:"请输入商品库存",trigger:"blur"}],unit:[{required:!0,message:"请输入商品计重单位",trigger:"blur"}]}}},methods:{pre:function(){this.$emit("pre")},next:function(){this.$emit("next")},handleCancel:function(){this.previewVisible=!1},handlePreview:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=t,t.url||t.preview){r.next=5;break}return r.next=4,x(t.originFileObj);case 4:a.preview=r.sent;case 5:e.previewImage=t.url||a.preview,e.previewVisible=!0;case 7:case"end":return r.stop()}}),r)})))()},handleChange:function(t){var e=t.file,r=t.fileList;if("done"===e.status)this.formData.images.push(e.response.data.url);else if("removed"===e.status){var a=e.response?e.response.data.url:e.url;this.formData.images=this.formData.images.filter((function(t){return t!==a}))}this.formData.fileList=r}}},_=j,k=(r("2637"),Object(p["a"])(_,O,D,!1,null,"8fabd5c4",null)),P=k.exports,I={created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.productId=t.$route.params.productId||null,!t.productId){e.next=8;break}return e.next=4,c["a"].get("/products/".concat(t.productId,"?appkey=1755179168_1639361355771"));case 4:for(r=e.sent,t.basicInfo=Object(o["a"])(Object(o["a"])({},t.basicInfo),r.data),t.basicPulInfo=Object(o["a"])(Object(o["a"])({},t.basicPulInfo),r.data),a=0;a<r.data.images.length;a+=1)t.basicPulInfo.fileList.push({uid:"-".concat(a+1),name:"image.png",status:"done",url:r.data.images[a]});case 8:c["a"].get("/category/all",{params:{appkey:"1755179168_1639361355771"}}).then((function(e){t.category=e.data.data}));case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{productId:null,ooo:0,category:null,basicInfo:{tags:["包邮，最晚次日达！"],category:[]},basicPulInfo:{fileList:[],images:[]}}},methods:{next:function(){var t=this;if(this.ooo+=1,this.productId){var e=Object(o["a"])(Object(o["a"])({},this.basicInfo),this.basicPulInfo);delete e.fileList,c["a"].put("/products/edit",e).then((function(e){"success"===e.status&&(t.$message.success("修改成功！"),t.$router.push({path:"/product/list"}))}))}else{var r=Object(o["a"])(Object(o["a"])(Object(o["a"])({},this.basicInfo),this.basicPulInfo),{},{status:1,appkey:"1755179168_1639361355771"});"时令水果"===r.category?r.category=2:r.category=1,delete r.fileList,c["a"].post("/products/add",r).then((function(e){"success"===e.status&&(t.$message.success("增加成功！"),t.$router.push({path:"/product/list"}))}))}},handlerClick:function(){this.ooo+=1},pre:function(){this.ooo-=1}},components:{step:m,basic:w,basicPul:P}},S=I,$=(r("072a"),Object(p["a"])(S,a,n,!1,null,"5d6746a2",null));e["default"]=$.exports},dbb4:function(t,e,r){var a=r("23e7"),n=r("83ab"),o=r("56ef"),i=r("fc6a"),c=r("06cf"),s=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,a=i(t),n=c.f,u=o(a),f={},l=0;while(u.length>l)r=n(a,e=u[l++]),void 0!==r&&s(f,e,r);return f}})},e439:function(t,e,r){var a=r("23e7"),n=r("d039"),o=r("fc6a"),i=r("06cf").f,c=r("83ab"),s=n((function(){i(1)})),u=!c||s;a({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},e5383:function(t,e,r){var a=r("b622");e.f=a},e8b5:function(t,e,r){var a=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=chunk-0e97c8a4.fca7c0af.js.map