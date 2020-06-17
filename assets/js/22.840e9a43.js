(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{371:function(t,e,a){"use strict";a.r(e);var s=a(40),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://github.com/freakzlike/vue-service-model/actions",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/freakzlike/vue-service-model/workflows/Build/badge.svg",alt:"Build"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://codecov.io/gh/freakzlike/vue-service-model",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codecov.io/gh/freakzlike/vue-service-model/branch/master/graph/badge.svg",alt:"codecov"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagequality.com/#?package=vue-service-model",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://npm.packagequality.com/shield/vue-service-model.svg",alt:"Package Quality"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/vue-service-model",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/vue-service-model.svg",alt:"Latest Version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/freakzlike/vue-service-model/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/l/vue-service-model.svg",alt:"License"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vue-service-model\n")])])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://codepen.io/freakzlike/pen/WNvWJXg",target:"_blank",rel:"noopener noreferrer"}},[t._v("Codepen example"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/freakzlike/vue-service-model-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("Example project"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Definition of a simple "),a("RouterLink",{attrs:{to:"/guide/service-model.html"}},[a("code",[t._v("ServiceModel")])]),t._v(" without using fields. https://jsonplaceholder.typicode.com/albums/ is being used as an example REST JSON service.")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ServiceModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-service-model'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Album")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceModel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Define service url")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" urls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://jsonplaceholder.typicode.com/albums/'")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Define model fields")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" fieldsDef "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("primaryKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve all albums from /albums/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" allAlbums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve specific album from /albums/1/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" album "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve value for field title")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output: Album title")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set new title for album")]),t._v("\nalbum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Updated album'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update album by doing a PUT request to /albums/1/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"mapping-of-service-urls-to-vue-service-model-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapping-of-service-urls-to-vue-service-model-methods"}},[t._v("#")]),t._v(" Mapping of service URLs to vue-service-model methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Url")]),t._v(" "),a("th",[t._v("HTTP Method")]),t._v(" "),a("th",[t._v("vue-service-model methods")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("/albums/")]),t._v(" "),a("td",[t._v("GET")]),t._v(" "),a("td",[a("code",[t._v("Album.objects.list()")])])]),t._v(" "),a("tr",[a("td",[t._v("/albums/")]),t._v(" "),a("td",[t._v("POST")]),t._v(" "),a("td",[a("code",[t._v("Album.objects.create()")]),t._v(" or "),a("code",[t._v("album.create()")])])]),t._v(" "),a("tr",[a("td",[t._v("/albums/{pk}/")]),t._v(" "),a("td",[t._v("GET")]),t._v(" "),a("td",[a("code",[t._v("Album.objects.detail()")]),t._v(" or "),a("code",[t._v("album.reload()")])])]),t._v(" "),a("tr",[a("td",[t._v("/albums/{pk}/")]),t._v(" "),a("td",[t._v("PUT")]),t._v(" "),a("td",[a("code",[t._v("Album.objects.update()")]),t._v(" or "),a("code",[t._v("album.update()")])])]),t._v(" "),a("tr",[a("td",[t._v("/albums/{pk}/")]),t._v(" "),a("td",[t._v("DELETE")]),t._v(" "),a("td",[a("code",[t._v("Album.objects.delete()")]),t._v(" or "),a("code",[t._v("album.delete()")])])])])]),t._v(" "),a("h3",{attrs:{id:"rendering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rendering"}},[t._v("#")]),t._v(" Rendering:")]),t._v(" "),a("p",[t._v("By using a common component "),a("RouterLink",{attrs:{to:"/guide/components.html#displayfield"}},[a("code",[t._v("DisplayField")])]),t._v(" you can render the value of a field for display purpose anywhere in your application with the same output.")],1),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("display-field")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":model")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("field-name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("Or "),a("RouterLink",{attrs:{to:"/guide/components.html#inputfield"}},[a("code",[t._v("InputField")])]),t._v(" for an input field.")],1),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input-field")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":model")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("album"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("field-name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h2",{attrs:{id:"contribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contribution"}},[t._v("#")]),t._v(" Contribution")]),t._v(" "),a("p",[t._v("Feel free to create an issue for bugs, feature requests, suggestions or any idea you have. You can also add a pull request with your implementation.")]),t._v(" "),a("p",[t._v("It would please me to hear from your experience.")]),t._v(" "),a("p",[t._v("I used some ideas and names from "),a("a",{attrs:{href:"https://www.djangoproject.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("django"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://www.django-rest-framework.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("django REST framework"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://www.ag-grid.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ag-Grid"),a("OutboundLink")],1),t._v(" and other libraries and frameworks.")])])}),[],!1,null,null,null);e.default=n.exports}}]);