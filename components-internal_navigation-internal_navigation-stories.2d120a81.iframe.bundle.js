(self.webpackChunkqgds_next=self.webpackChunkqgds_next||[]).push([[415],{"./src/components/internal_navigation/internal_navigation.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>internal_navigation_stories,internal_navigation:()=>internal_navigation});var component=__webpack_require__("./src/components/internal_navigation/html/component.hbs"),component_default=__webpack_require__.n(component);let manifest_namespaceObject=JSON.parse('{"top":{"asset_name":"Top level","asset_url":"https://www.google.com"},"data":{"metadata":{"pageType":{"value":"landing"}}},"component":{"data":{"metadata":{"headingType":{"value":"some-heading-type"},"heading":{"value":"Section Heading"}}}}}'),internal_navigation_stories={title:"Components/internal_navigation"};var internal_navigation=(function(args){return component_default()(args)}).bind({});internal_navigation.args={site:manifest_namespaceObject},internal_navigation.parameters={...internal_navigation.parameters,docs:{...internal_navigation.parameters?.docs,source:{originalSource:"args => internal_navigationTemplate(args)",...internal_navigation.parameters?.docs?.source}}};let __namedExportsOrder=["internal_navigation"]},"./src/components/internal_navigation/html/component.hbs":(module,__unused_webpack_exports,__webpack_require__)=>{var Handlebars=__webpack_require__("./node_modules/handlebars/runtime.js");function __default(obj){return obj&&(obj.__esModule?obj.default:obj)}module.exports=(Handlebars.default||Handlebars).template({1:function(container,depth0,helpers,partials,data){var stack1,alias1=null!=depth0?depth0:container.nullContext||{},lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName))return parent[propertyName]};return(null!=(stack1=__default(__webpack_require__("./.migrate/helpers/Handlebars/ifCond.js")).call(alias1,null!=depth0?lookupProperty(depth0,"asset_assetid"):depth0,"!=",(stack1=(stack1=(stack1=data&&lookupProperty(data,"root"))&&lookupProperty(stack1,"site"))&&lookupProperty(stack1,"data"))&&lookupProperty(stack1,"assetid"),{name:"ifCond",hash:{},fn:container.program(2,data,0),inverse:container.noop,data:data,loc:{start:{line:11,column:12},end:{line:14,column:23}}}))?stack1:"")+(null!=(stack1=__default(__webpack_require__("./.migrate/helpers/Handlebars/ifCond.js")).call(alias1,null!=depth0?lookupProperty(depth0,"asset_assetid"):depth0,"==",(stack1=(stack1=(stack1=data&&lookupProperty(data,"root"))&&lookupProperty(stack1,"site"))&&lookupProperty(stack1,"data"))&&lookupProperty(stack1,"assetid"),{name:"ifCond",hash:{},fn:container.program(4,data,0),inverse:container.noop,data:data,loc:{start:{line:15,column:12},end:{line:18,column:23}}}))?stack1:"")+(null!=(stack1=__default(__webpack_require__("./.migrate/helpers/Handlebars/inArray.js")).call(alias1,(stack1=(stack1=data&&lookupProperty(data,"root"))&&lookupProperty(stack1,"site"))&&lookupProperty(stack1,"lineage"),"asset_assetid",null!=depth0?lookupProperty(depth0,"asset_assetid"):depth0,{name:"inArray",hash:{},fn:container.program(6,data,0),inverse:container.noop,data:data,loc:{start:{line:19,column:12},end:{line:52,column:24}}}))?stack1:"")+"             </li>\n"},2:function(container,depth0,helpers,partials,data){var stack1,alias1=container.lambda,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName))return parent[propertyName]};return'            <li>\n                <a class="qld__sidenav__link" href="'+container.escapeExpression(alias1(null!=depth0?lookupProperty(depth0,"asset_url"):depth0,depth0))+'">'+(null!=(stack1=alias1(null!=depth0?lookupProperty(depth0,"asset_short_name"):depth0,depth0))?stack1:"")+"</a>\n"},4:function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName))return parent[propertyName]};return'            <li class="active" aria-current="page">\n                <span>'+(null!=(stack1=container.lambda(null!=depth0?lookupProperty(depth0,"asset_short_name"):depth0,depth0))?stack1:"")+"</span>\n"},6:function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName))return parent[propertyName]};return null!=(stack1=lookupProperty(helpers,"if").call(null!=depth0?depth0:container.nullContext||{},null!=depth0?lookupProperty(depth0,"children"):depth0,{name:"if",hash:{},fn:container.program(7,data,0),inverse:container.noop,data:data,loc:{start:{line:20,column:16},end:{line:51,column:23}}}))?stack1:""},7:function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName))return parent[propertyName]};return'                    <ul class="qld__link-list">\n'+(null!=(stack1=lookupProperty(helpers,"each").call(null!=depth0?depth0:container.nullContext||{},null!=depth0?lookupProperty(depth0,"children"):depth0,{name:"each",hash:{},fn:container.program(8,data,0),inverse:container.noop,data:data,loc:{start:{line:22,column:20},end:{line:49,column:29}}}))?stack1:"")+"                    </ul>  \n"},8:function(container,depth0,helpers,partials,data){var stack1,alias1=null!=depth0?depth0:container.nullContext||{},lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName))return parent[propertyName]};return(null!=(stack1=__default(__webpack_require__("./.migrate/helpers/Handlebars/ifCond.js")).call(alias1,null!=depth0?lookupProperty(depth0,"asset_assetid"):depth0,"!=",(stack1=(stack1=(stack1=data&&lookupProperty(data,"root"))&&lookupProperty(stack1,"site"))&&lookupProperty(stack1,"data"))&&lookupProperty(stack1,"assetid"),{name:"ifCond",hash:{},fn:container.program(9,data,0),inverse:container.noop,data:data,loc:{start:{line:23,column:24},end:{line:26,column:35}}}))?stack1:"")+(null!=(stack1=__default(__webpack_require__("./.migrate/helpers/Handlebars/ifCond.js")).call(alias1,null!=depth0?lookupProperty(depth0,"asset_assetid"):depth0,"==",(stack1=(stack1=(stack1=data&&lookupProperty(data,"root"))&&lookupProperty(stack1,"site"))&&lookupProperty(stack1,"data"))&&lookupProperty(stack1,"assetid"),{name:"ifCond",hash:{},fn:container.program(11,data,0),inverse:container.noop,data:data,loc:{start:{line:27,column:24},end:{line:30,column:35}}}))?stack1:"")+(null!=(stack1=__default(__webpack_require__("./.migrate/helpers/Handlebars/inArray.js")).call(alias1,(stack1=(stack1=data&&lookupProperty(data,"root"))&&lookupProperty(stack1,"site"))&&lookupProperty(stack1,"lineage"),"asset_assetid",null!=depth0?lookupProperty(depth0,"asset_assetid"):depth0,{name:"inArray",hash:{},fn:container.program(13,data,0),inverse:container.noop,data:data,loc:{start:{line:31,column:24},end:{line:47,column:36}}}))?stack1:"")+"                        </li>\n"},9:function(container,depth0,helpers,partials,data){var stack1,alias1=container.lambda,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName))return parent[propertyName]};return'                        <li>\n                            <a class="qld__sidenav__link" href="'+container.escapeExpression(alias1(null!=depth0?lookupProperty(depth0,"asset_url"):depth0,depth0))+'">'+(null!=(stack1=alias1(null!=depth0?lookupProperty(depth0,"asset_short_name"):depth0,depth0))?stack1:"")+"</a>\n"},11:function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName))return parent[propertyName]};return'                        <li class="active" aria-current="page">\n                            <span>'+(null!=(stack1=container.lambda(null!=depth0?lookupProperty(depth0,"asset_short_name"):depth0,depth0))?stack1:"")+"</span>\n"},13:function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName))return parent[propertyName]};return null!=(stack1=lookupProperty(helpers,"if").call(null!=depth0?depth0:container.nullContext||{},null!=depth0?lookupProperty(depth0,"children"):depth0,{name:"if",hash:{},fn:container.program(14,data,0),inverse:container.noop,data:data,loc:{start:{line:32,column:28},end:{line:46,column:35}}}))?stack1:""},14:function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName))return parent[propertyName]};return'                                <ul class="qld__link-list">\n'+(null!=(stack1=lookupProperty(helpers,"each").call(null!=depth0?depth0:container.nullContext||{},null!=depth0?lookupProperty(depth0,"children"):depth0,{name:"each",hash:{},fn:container.program(15,data,0),inverse:container.noop,data:data,loc:{start:{line:34,column:32},end:{line:44,column:41}}}))?stack1:"")+"                                </ul>  \n"},15:function(container,depth0,helpers,partials,data){var stack1,alias1=null!=depth0?depth0:container.nullContext||{},lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName))return parent[propertyName]};return(null!=(stack1=__default(__webpack_require__("./.migrate/helpers/Handlebars/ifCond.js")).call(alias1,null!=depth0?lookupProperty(depth0,"asset_assetid"):depth0,"!=",(stack1=(stack1=(stack1=data&&lookupProperty(data,"root"))&&lookupProperty(stack1,"site"))&&lookupProperty(stack1,"data"))&&lookupProperty(stack1,"assetid"),{name:"ifCond",hash:{},fn:container.program(16,data,0),inverse:container.noop,data:data,loc:{start:{line:35,column:36},end:{line:38,column:47}}}))?stack1:"")+(null!=(stack1=__default(__webpack_require__("./.migrate/helpers/Handlebars/ifCond.js")).call(alias1,null!=depth0?lookupProperty(depth0,"asset_assetid"):depth0,"==",(stack1=(stack1=(stack1=data&&lookupProperty(data,"root"))&&lookupProperty(stack1,"site"))&&lookupProperty(stack1,"data"))&&lookupProperty(stack1,"assetid"),{name:"ifCond",hash:{},fn:container.program(18,data,0),inverse:container.noop,data:data,loc:{start:{line:39,column:36},end:{line:42,column:47}}}))?stack1:"")+"                                    </li>    \n"},16:function(container,depth0,helpers,partials,data){var stack1,alias1=container.lambda,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName))return parent[propertyName]};return'                                    <li>\n                                        <a class="qld__sidenav__link" href="'+container.escapeExpression(alias1(null!=depth0?lookupProperty(depth0,"asset_url"):depth0,depth0))+'">'+(null!=(stack1=alias1(null!=depth0?lookupProperty(depth0,"asset_short_name"):depth0,depth0))?stack1:"")+"</a>\n"},18:function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName))return parent[propertyName]};return'                                    <li class="active" aria-current="page">\n                                        <span>'+(null!=(stack1=container.lambda(null!=depth0?lookupProperty(depth0,"asset_short_name"):depth0,depth0))?stack1:"")+"</span>\n"},compiler:[8,">= 4.3.0"],main:function(container,depth0,helpers,partials,data){var stack1,alias1=container.lambda,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName))return parent[propertyName]};return'<div class="qld__side-nav qld__accordion">\n    <button class="qld__side-nav__toggle qld__accordion__title qld__accordion--closed" aria-controls="nav-default" aria-expanded="false" aria-selected="false" >\n    In '+(null!=(stack1=alias1(null!=(stack1=null!=(stack1=null!=depth0?lookupProperty(depth0,"site"):depth0)?lookupProperty(stack1,"top"):stack1)?lookupProperty(stack1,"asset_name"):stack1,depth0))?stack1:"")+'\n    </button>\n    <nav aria-label="side navigation" id="nav-default" class="qld__side-nav__content qld__accordion--closed qld__accordion__body"> \n        <h2 class="qld__sidenav__title">\n            <a class="qld__sidenav__link" href="'+container.escapeExpression(alias1(null!=(stack1=null!=(stack1=null!=depth0?lookupProperty(depth0,"site"):depth0)?lookupProperty(stack1,"top"):stack1)?lookupProperty(stack1,"asset_url"):stack1,depth0))+'">'+(null!=(stack1=alias1(null!=(stack1=null!=(stack1=null!=depth0?lookupProperty(depth0,"site"):depth0)?lookupProperty(stack1,"top"):stack1)?lookupProperty(stack1,"asset_name"):stack1,depth0))?stack1:"")+'</a>\n        </h2>\n        <ul class="qld__link-list">\n'+(null!=(stack1=lookupProperty(helpers,"each").call(null!=depth0?depth0:container.nullContext||{},null!=(stack1=null!=depth0?lookupProperty(depth0,"site"):depth0)?lookupProperty(stack1,"children"):stack1,{name:"each",hash:{},fn:container.program(1,data,0),inverse:container.noop,data:data,loc:{start:{line:10,column:8},end:{line:54,column:17}}}))?stack1:"")+"        </ul>\n    </nav>\n</div>"},useData:!0})},"./.migrate/helpers/Handlebars/ifCond.js":module=>{module.exports=function(v1,operator,v2,options){switch(operator){case"==":return v1==v2?options.fn(this):options.inverse(this);case"===":return v1===v2?options.fn(this):options.inverse(this);case"!=":return v1!=v2?options.fn(this):options.inverse(this);case"!==":return v1!==v2?options.fn(this):options.inverse(this);case"<":return v1<v2?options.fn(this):options.inverse(this);case"<=":return v1<=v2?options.fn(this):options.inverse(this);case">":return v1>v2?options.fn(this):options.inverse(this);case">=":return v1>=v2?options.fn(this):options.inverse(this);case"&&":return v1&&v2?options.fn(this):options.inverse(this);case"||":return v1||v2?options.fn(this):options.inverse(this);case"contains":if("string"==typeof v1&&"string"==typeof v2)return v1.toLowerCase().indexOf(v2.toLowerCase())>=0?options.fn(this):options.inverse(this);return options.inverse(this);default:return options.inverse(this)}}},"./.migrate/helpers/Handlebars/inArray.js":module=>{module.exports=function(array,key,value,options){for(var x=0;x<array.length;x++)if(array[x][key]===value)return options.fn(this);return options.inverse(this)}}}]);