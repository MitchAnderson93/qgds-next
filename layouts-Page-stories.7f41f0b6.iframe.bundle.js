(self.webpackChunkqgds_next=self.webpackChunkqgds_next||[]).push([[792],{"./src/layouts/Page.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Page:()=>Page,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _data_site_json__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/data/site.json"),_components_index_hbs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.hbs"),_components_index_hbs__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_components_index_hbs__WEBPACK_IMPORTED_MODULE_1__);let __WEBPACK_DEFAULT_EXPORT__={title:"Templates/Standard page"};var Page=(function(args){return _components_index_hbs__WEBPACK_IMPORTED_MODULE_1___default()(args)}).bind({});Page.args={site:_data_site_json__WEBPACK_IMPORTED_MODULE_0__},Page.parameters={...Page.parameters,docs:{...Page.parameters?.docs,source:{originalSource:"args => pageTemplate(args)",...Page.parameters?.docs?.source}}};let __namedExportsOrder=["Page"]},"./src/components/_global/footer-scripts.hbs":(module,__unused_webpack_exports,__webpack_require__)=>{var Handlebars=__webpack_require__("./node_modules/handlebars/runtime.js");module.exports=(Handlebars.default||Handlebars).template({compiler:[8,">= 4.3.0"],main:function(container,depth0,helpers,partials,data){return'<!-- Font awesome JS  -->\n<script src="https://kit.fontawesome.com/fb2f2d4cd6.js" crossorigin="anonymous"></script>\n\n<!-- Bundled JS  -->\n<script src="./js/bundle.js"></script>\n\n<!-- Standard GTM -->\n<script async src="https://www.googletagmanager.com/gtag/js?id={GA_TRACKING_ID}"></script>\n<script>\n    window.dataLayer = window.dataLayer || [];\n    function gtag() { dataLayer.push(arguments); }\n    gtag(\'js\', new Date());\n    gtag(\'config\', \'{GA_TRACKING_ID}\');\n</script>'},useData:!0})},"./src/components/_global/header-scripts.hbs":(module,__unused_webpack_exports,__webpack_require__)=>{var Handlebars=__webpack_require__("./node_modules/handlebars/runtime.js");module.exports=(Handlebars.default||Handlebars).template({compiler:[8,">= 4.3.0"],main:function(container,depth0,helpers,partials,data){return'<!-- Metadata -->\n<meta charset="utf-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1" />\n\n<!-- TO DO [X]: QH Fonts/Icon implementations -->\n<link href=\'https://fonts.googleapis.com/css?family=Noto Sans:wght@300;400;600;900&display=swap\' rel=\'stylesheet\'>\n<link rel="stylesheet" href="https://use.typekit.net/fse2tsb.css" />\n<link rel="stylesheet" href="./css/main.css" />\n\n<style>\n    .qld__grid {\n        --QLD-light-alt-background__shade: #e9e2ee;\n        --QLD-light-alt-background: #f7f5f9;\n        --QLD-color-light-alt-border: #968fae;\n        --QLD-QH-color-light-alt-button__hover: #d55033;\n        --QLD-QH-color-light-alt-button: #e96f53;\n        --QLD-color-light-background__shade: #f8f7f8;\n        --QLD-color-light-background: #ffffff;\n        --QLD-color-light-border: #e0dbe4;\n        --QLD-color-light-focus: #6f8869;\n        --QLD-color-light-button__hover: #443260;\n        --QLD-color-light-button: #634b78;\n        --QLD-color-light-button__text: #ffffff;\n        --QLD-color-light-link__visited: #896f98;\n        --QLD-color-light-link: #634b78;\n        --QLD-color-light-text__muted: #636569;\n        --QLD-color-light-text: #414141;\n        --QLD-color-light-heading: #3d2651;\n        --QLD-color-light-siteTitle: #3d2651;\n        --QLD-color-light-designAccent: #fbaf54;\n        --QLD-color-dark-alt-background__shade: #3d2651;\n        --QLD-color-dark-alt-background: #443260;\n        --QLD-color-dark-alt-border: #b0a3b8;\n        --QLD-color-dark-alt-button__hover: #fda05d;\n        --QLD-color-dark-alt-button: #fd855d;\n        --QLD-color-dark-background__shade: #4e3a68;\n        --QLD-color-dark-background: #634b78;\n        --QLD-color-dark-border: #553b6b;\n        --QLD-color-dark-focus: #a3b497;\n        --QLD-color-dark-button__hover: #bda7d8;\n        --QLD-color-dark-button: #fff5fe;\n        --QLD-color-dark-button__text: #443260;\n        --QLD-color-dark-link__visited: #d7cddf;\n        --QLD-color-dark-link: #f0e7fb;\n        --QLD-color-dark-text__muted: #d7cddf;\n        --QLD-color-dark-text: #f6ebff;\n        --QLD-color-dark-heading: #ffffff;\n        --QLD-color-dark-siteTitle: #ffffff;\n        --QLD-color-dark-designAccent: #fbaf54;\n    }\n</style>'},useData:!0})},"./src/components/index.hbs":(module,__unused_webpack_exports,__webpack_require__)=>{var Handlebars=__webpack_require__("./node_modules/handlebars/runtime.js");module.exports=(Handlebars.default||Handlebars).template({compiler:[8,">= 4.3.0"],main:function(container,depth0,helpers,partials,data){var stack1;return'<!DOCTYPE html>\n<!--[if lt IE 8]>\n        <html class="no-js lt-ie8 lt-ie9" lang="en">\n    <![endif]-->\n<!--[if IE 8]>\n        <html class="no-js lt-ie9 ie8" lang="en">\n    <![endif]-->\n<!--[if IE 9]>\n        <html class="no-js ie9" lang="en">\n    <![endif]-->\n<!--[if !(IE)]><!-->\n<html class="no-js" lang="en">\n<!--<![endif]-->\n<head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>Queensland Design System - storybook example</title>\n'+(null!=(stack1=container.invokePartial(__webpack_require__("./src/components/_global/header-scripts.hbs"),depth0,{name:"_global/header-scripts",data:data,indent:"    ",helpers:helpers,partials:partials,decorators:container.decorators}))?stack1:"")+'</head>\n<body class="qld__grid custombody">\n'+(null!=(stack1=container.invokePartial(__webpack_require__("./src/components/header/html/component.hbs"),depth0,{name:"header/html/component",data:data,indent:"    ",helpers:helpers,partials:partials,decorators:container.decorators}))?stack1:"")+'\n    <!-- MAIN BODY -->\n    <main class="main" role="main">\n        <section class="qld__body qld__body--breadcrumb">\n            <div class="container-fluid"></div>\n        </section>\n        <!--CONTENT-->\n        <div class="qld__body">\n            <div class="container-fluid">\n                <div class="row">\n                    <div class="col-xs-12 col-md-4 col-lg-3"></div>\n                    <div class="col-xs-12 col-md-8 col-lg-9" id="content"></div>\n                </div>\n            </div>\n        </div>\n    </main>\n'+(null!=(stack1=container.invokePartial(__webpack_require__("./src/components/footer/html/component.hbs"),depth0,{name:"footer/html/component",data:data,indent:"    ",helpers:helpers,partials:partials,decorators:container.decorators}))?stack1:"")+(null!=(stack1=container.invokePartial(__webpack_require__("./src/components/_global/footer-scripts.hbs"),depth0,{name:"_global/footer-scripts",data:data,indent:"    ",helpers:helpers,partials:partials,decorators:container.decorators}))?stack1:"")+"</body>\n</html>"},usePartial:!0,useData:!0})}}]);