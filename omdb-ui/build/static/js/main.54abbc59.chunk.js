(this.webpackJsonpday4=this.webpackJsonpday4||[]).push([[0],{27:function(e,t,a){e.exports=a(57)},33:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),o=(a(32),a(10)),m=a(1),i=(a(33),a(9)),u=a(25),s=a.n(u),d=r.a.memo((function(e){var t=e.movie;Object(m.f)();return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card",style:{width:"18rem",margin:"auto"}},r.a.createElement("div",{className:"bd-placeholder-img card-img-top",style:{width:"18rem",height:"18rem",overflow:"hidden"}},r.a.createElement("img",{src:t.Poster,style:{width:"18rem"},alt:"Poster"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.Title),r.a.createElement("p",{className:"card-text"}," Year : ",t.Year," , Type: ",t.Type," "))),r.a.createElement("br",null))}));function h(e){var t=e.elements||[],a=e.component;return r.a.createElement("div",{className:"row"},t.map((function(e){return t=e,r.a.createElement(a,{movie:t,key:t.imdbID});var t})))}a(56);function E(e){var t=e.value;return r.a.createElement("div",{className:"background"},r.a.createElement("input",{className:"search clear-margin-top",type:"text",value:t,onChange:function(t){return e.onChange(t.target.value)}}),r.a.createElement("button",{className:"btn btn-success clear-margin-top",onClick:function(){return e.onSubmit(t)}},"Search"))}var v={headers:{"Access-Control-Allow-Origin":"*"}};function p(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(i.a)(l,2),m=o[0],u=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{value:a,onChange:c,onSubmit:function(e){var t="".concat("http://localhost:3001/","omdb/search?title=").concat(e);s.a.get(t,v).then((function(e){return function(e){e&&e.data&&e.data.Search instanceof Array&&u(e.data.Search)}(e)})).catch((function(e){return console.error(e)}))}}),r.a.createElement("br",null),r.a.createElement(h,{elements:m,component:d}))}function f(){var e=Object(m.g)();return r.a.createElement("p",null," Details page : Imdb ID ",e.imdbID)}function b(e){return r.a.createElement("button",{onClick:e.incrementCounter}," Click me! ")}function g(e){return r.a.createElement("p",null," Count = ",e.value," ")}function w(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null," Hello World "),r.a.createElement(b,{incrementCounter:function(){c(a+1)}}),r.a.createElement(g,{value:a}))}var y=function(){return r.a.createElement("div",{className:"container-fluid remove-padding"},r.a.createElement(o.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/search",component:p}),r.a.createElement(m.a,{path:"/details/:imdbID",component:f}),r.a.createElement(m.a,{path:"/",component:w}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.54abbc59.chunk.js.map