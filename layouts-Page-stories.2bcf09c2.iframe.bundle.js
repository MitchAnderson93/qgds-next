(self.webpackChunkqgds_next=self.webpackChunkqgds_next||[]).push([[792],{"./src/layouts/Page.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Page:()=>Page,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _data_site_json__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/data/site.json"),_components_index_hbs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.hbs"),_components_index_hbs__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_components_index_hbs__WEBPACK_IMPORTED_MODULE_1__);let __WEBPACK_DEFAULT_EXPORT__={title:"Templates/Standard page"};var Page=(function(args){return _components_index_hbs__WEBPACK_IMPORTED_MODULE_1___default()(args)}).bind({});Page.args={site:_data_site_json__WEBPACK_IMPORTED_MODULE_0__},Page.parameters={...Page.parameters,docs:{...Page.parameters?.docs,source:{originalSource:"args => pageTemplate(args)",...Page.parameters?.docs?.source}}};let __namedExportsOrder=["Page"]},"./src/components/_global/footer-scripts.hbs":(module,__unused_webpack_exports,__webpack_require__)=>{var Handlebars=__webpack_require__("./node_modules/handlebars/runtime.js");module.exports=(Handlebars.default||Handlebars).template({compiler:[8,">= 4.3.0"],main:function(container,depth0,helpers,partials,data){return"<!-- Bundled JS  -->\n<script src=\"./js/bundle.js\"></script>\n\n<!-- Standard GTM -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id={GA_TRACKING_ID}\"></script>\n<script>\n    window.dataLayer = window.dataLayer || [];\n    function gtag() { dataLayer.push(arguments); }\n    gtag('js', new Date());\n    gtag('config', '{GA_TRACKING_ID}');\n</script>"},useData:!0})},"./src/components/_global/header-scripts.hbs":(module,__unused_webpack_exports,__webpack_require__)=>{var Handlebars=__webpack_require__("./node_modules/handlebars/runtime.js");module.exports=(Handlebars.default||Handlebars).template({compiler:[8,">= 4.3.0"],main:function(container,depth0,helpers,partials,data){return'<!-- Metadata -->\n<meta charset="utf-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1" />\n\n<!-- TO DO [X]: QH Fonts/Icon implementations -->\n<link href=\'https://fonts.googleapis.com/css?family=Noto Sans:wght@300;400;600;900&display=swap\' rel=\'stylesheet\'>\n<link rel="stylesheet" href="https://use.typekit.net/fse2tsb.css" />\n<link rel="stylesheet" href="./css/main.min.css" />'},useData:!0})},"./src/components/index.hbs":(module,__unused_webpack_exports,__webpack_require__)=>{var Handlebars=__webpack_require__("./node_modules/handlebars/runtime.js");module.exports=(Handlebars.default||Handlebars).template({compiler:[8,">= 4.3.0"],main:function(container,depth0,helpers,partials,data){var stack1;return'<!DOCTYPE html>\n<!--[if lt IE 8]>\n        <html class="no-js lt-ie8 lt-ie9" lang="en">\n    <![endif]-->\n<!--[if IE 8]>\n        <html class="no-js lt-ie9 ie8" lang="en">\n    <![endif]-->\n<!--[if IE 9]>\n        <html class="no-js ie9" lang="en">\n    <![endif]-->\n<!--[if !(IE)]><!-->\n<html class="no-js" lang="en">\n<!--<![endif]-->\n<head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>Queensland Design System - Storybook example</title>\n    <!-- '+(null!=(stack1=container.invokePartial(__webpack_require__("./src/components/_global/header-scripts.hbs"),depth0,{name:"_global/header-scripts",data:data,helpers:helpers,partials:partials,decorators:container.decorators}))?stack1:"")+' -->\n</head>\n<body class="qld__grid">\n'+(null!=(stack1=container.invokePartial(__webpack_require__("./src/components/header/html/component.hbs"),depth0,{name:"header/html/component",data:data,indent:"    ",helpers:helpers,partials:partials,decorators:container.decorators}))?stack1:"")+'    <!-- MAIN BODY -->\n    <main class="main" role="main">\n        <section class="qld__body qld__body--breadcrumb">\n            <div class="container-fluid"></div>\n        </section>\n        <!--CONTENT-->\n        <div class="qld__body">\n            <div class="container-fluid">\n                <div class="row">\n                    <div class="col-xs-12 col-md-4 col-lg-3"></div>\n                    <div class="col-xs-12 col-md-8 col-lg-9" id="content"></div>\n                </div>\n            </div>\n        </div>\n    </main>\n'+(null!=(stack1=container.invokePartial(__webpack_require__("./src/components/footer/html/component.hbs"),depth0,{name:"footer/html/component",data:data,indent:"    ",helpers:helpers,partials:partials,decorators:container.decorators}))?stack1:"")+"    <!-- "+(null!=(stack1=container.invokePartial(__webpack_require__("./src/components/_global/footer-scripts.hbs"),depth0,{name:"_global/footer-scripts",data:data,helpers:helpers,partials:partials,decorators:container.decorators}))?stack1:"")+" -->\n</body>\n</html>"},usePartial:!0,useData:!0})}}]);