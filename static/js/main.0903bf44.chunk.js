(this.webpackJsonpmovienight=this.webpackJsonpmovienight||[]).push([[0],{29:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return d}));var s=a(0),n=a(18),r=a.n(n),c=a(24),A=a(21),i=a(35),o=a.n(i);function l(){var e=Object(s.useState)([]),t=Object(A.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(1),l=Object(A.a)(i,2),u=l[0],j=l[1],m=Object(s.useState)(0),d=Object(A.a)(m,2),p=d[0],b=d[1],g=Object(s.useState)(""),h=Object(A.a)(g,2),f=h[0],O=h[1],x=Object(s.useState)([]),v=Object(A.a)(x,2),w=v[0],B=v[1],N=Object(s.useState)([]),S=Object(A.a)(N,2),C=S[0],E=S[1],M="3cd3339977714b0c05b63e56cc0e2832",R=o.a.create({baseURL:"https://api.themoviedb.org/3/"});function k(){return Y.apply(this,arguments)}function Y(){return(Y=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get("trending/all/week",{params:{api_key:M,language:"pt-BR",page:u}}).then((function(e){var t=e.data;n(t.results),b(t.total_pages)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=Object(s.useCallback)((function(){if(f)try{R.get("/search/multi",{params:{api_key:M,language:"pt-BR",query:f,page:u}}).then((function(e){var t=e.data;n(t.results),b(t.total_pages)}))}catch(e){console.log(e)}}),[R,M,u,f]);function T(){return(T=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.all([R.get("/genre/movie/list",{params:{api_key:M,language:"pt-BR"}}),R.get("/genre/tv/list",{params:{api_key:M,language:"pt-BR"}})]).then(o.a.spread((function(e,t){var a=e.data,s=t.data;E(a.genres),B(s.genres)})));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){k().catch((function(e){return console.log(e)})),function(){return T.apply(this,arguments)}().catch((function(e){return console.log(e)})),window.scrollTo(0,0)}),[u,!f]),Object(s.useEffect)((function(){P()}),[P,f]),{api:R,apiKey:M,movies:a,currentPage:u,totalPages:p,handleChange:function(e,t){j(t),k().catch((function(e){return console.log(e)})),window.scrollTo(0,0)},handleSearch:function(e){O(e.target.value)},query:f,genreTv:w,genreMovie:C}}var u=a(2),j=Object(s.createContext)(null);function m(){return Object(s.useContext)(j)}function d(e){var t=l();return Object(u.jsx)(j.Provider,{value:{apiStore:t},children:e.children})}},70:function(e,t,a){},96:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var s=a(10),n=a(0),r=a.n(n),c=a(23),A=a(4),i=a(116),o=a(16),l=(a(70),a(2));function u(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("div",{className:"container-footer",children:[Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)("span",{children:"Baixe nosso app"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(o.a,{to:"https://play.google.com/store",children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"Google Play"})}),Object(l.jsx)(o.a,{to:"https://www.apple.com/br/app-store/",children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"App Store"})})]})]}),Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)("span",{children:"Siga nas redes"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(o.a,{to:"https://www.facebook.com/",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHRSURBVHgBvVfLccIwEF0xHHEBpAAogNyhgKSANGAKgHuggdxxAUkBoQAKiAsIBUAB5k72mVVGNjZage03s5ZlS3r7kVdrQwqcz+eImxnLhGXEMmSJ5HXGshfZGWNSzZpGQfgmEpEOB5aEFdjSPcRMCrI4gLBKgXWdB0wN6Ts3r9QMYH1CPmIm/aRLHJvEFXmvRLpogRSIJXT/MA4pXiwoDNjJmdOfeMbPbcyNkOLz2LA8kZ5wwYsc7QNZ49szL+U5c9xYV8cBpFmZNAATVnDmEvtc5CItWRqxYP6zcn4e675ooLUWOJX6CFHIhoTVQ1g8pccwoHDM+nwZKwcjth90yUgu8CwSBbRfxRjEQ+XgE8f2atfysx1aibMWA7j63lz8CKJ+wOABW7Xi9sc9eSTbQXmt53KAGDHT7Gos/iL37pE3pbCvIgdcfaLusQexqmJoGCmId9Q9fntyWmTUHVCXHW2u/qLukHO5xAdqH1t7HufE3IGr19QuYNjGdgo1FycDnMsxtYOlTa9AoeaSgiyh5rFySXOuqlENWo4QLqtq61sFfWgdVgbIVnUlkvHNZgVQ2CNHa489ECa+fygvsaMAPIC6akTFUgfuhFX2p02VjP4ASPeVTMDF59kAAAAASUVORK5CYII=",alt:"Facebook"})}),Object(l.jsx)(o.a,{to:"https://www.instagram.com/",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJRSURBVHgBtVfLccJADJWZHHEBTgFJAeQeF0AKSAPmHrjHKSAFwD1wDxRACqAAKAAKIHeih7VkMbJXZsyb0RjW8j5Z33VEBhwOh5gvKUuP5YElYYnl9p5lI7KMomhl2TMyEL6KxGTDlmXCBizoGmImBVnWgFAz4KPKA1EF6TtfXqgd4O0nFCJm0ikVcWwTF+SdEunwBqRAJqE7IfJIcWOoPLRkQZx+yYYu/VdAGQMX80hIUR5jlvuSYh7KzirwnkjMrLS84v0G+HEnC5lCumhCykQpFW8KzBFT8aJfFT3o8b2li7HmljU1A3KjL5LI2o+id4x1Ryy9VxT2dBvgrRO4+pmuALoau8w3bk5FEgKbwOMpiB+pGSHcmFNhOZZmbMAny45/74zbPCLGSYBozPLN0pcllJyfE6+SwdDNRTenenRBHOrFMAw5sPOmVBmuvW5FNwnsGXfIjjoDGyciiLdG3Z4k00y5N3U6ZASSy9oK+xggSCS+woBU1tEsFrz20oB4A2KUgGUwwNVItIFMmtO04TUQvpEdKxAvSbqJAUicORPhGVerPWrgYsH6DtNCXFdOnrpkSknPbgdXz13lHs5lOzckkDCZsjnWR6SPyzrSsZSeFsJjcrqxCKUvuuzZ6rElBNkPMS8fnzDx8hOxKCNOY2UflBviac1+AP0/VvYZSGs9P3NVDO+2MMIcdn/OOle5TFpE7pMeuTStFt8c1TLSztZ1B/qqc5gVIMtdTM3EngHITIxEa5MA4ST0DRUk9gyAB56oqE2/PuFOvJX7aDNNqj++k+v7zXoGLwAAAABJRU5ErkJggg==",alt:"Instagram"})}),Object(l.jsx)(o.a,{to:"https://youtube.com/",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ0SURBVHgBvVfPVbtAEB7yPP4ogBTg7y4FSAHRu/EsKcAC1LsNJA1w19yNdylACpAC4j3Ox87oBFmyxOj33jwWWOabfzu7RBSAzWYT8+WYJWNJWRKWWF6vWSqRMoqiVYjOKIDwQiSmMLyxLFke2YiahhIzKcjyAYRdBiyYfBlMzKTX5Lw8BEC+oF3ETHrDlzM6LJZMfmsfjFqk1x2kKJ4pudAVLAsajgnrzjuJ+QUIu8KrFf3MspKxGjQEOXOkehMJKZbHnGXs+agkl6uS5z6Ri8A7fRUf3idKQH4gapesZz0yk8c9H8DLSiyuZC5qYUXDgO+aqCpxuuMDeAWPstazfeCI2YuM+r21RPuSbelB5ODxKQ0DjGzao3mmbTMU2YjCvG0mkws3JBci5FmrPDXjXUgiqVJfCOEJ1m4t45AlNBbjJuR3qj6i/rxN+xq9B00K2CFc575Jox4FlSh4MTKxE/h+bpuCBdY8uXXrJfaFby3eagudsaCBxCrGADtOjA5ftNZH8rIr3LVYXrMyEuvVCOTuRcYotFRa7lTGMHpGfjSdq6SfYSE6mq7EhEreVzsliFd0QDDhA7no/KM+YimCoTuNF6zvnNzR590z5Q2cWtVFxwSfxWgSJ+YeudWCqmTfzbEDeb5v9nPdFpEPhMjmpZJ8kSgrxJhMvHll+U8urMc8t5CKhiGl2ULjlrfnn8SiHArvW9ad7dFAVB+MeGw9nklqt89cHYc8Pe5UrWddiI0kose2zK1D318d9r6dNH3H26ZA6JdIvcRCDq+vKHzbbAMpudOcBhP/wAD9hSl6ltRuYmMAdqGM3DpGAdl1bn/aglrwB40WCphOzhNxAAAAAElFTkSuQmCC",alt:"Youtube"})})]})]})]}),Object(l.jsxs)("div",{className:"footerText",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"FILMES ONLINE - ASSISTIR FILMES - FILMES ONLINE GR\xc1TIS"}),Object(l.jsx)("span",{children:"Filmes Online - Assistir Filmes Online - Filmes Online Gr\xe1tis - Filmes Comspanletos Dublados"})]}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper odio a felis tincidunt, a euismod orci tincidunt. Fusce eget elit magna. Integer eget justo ornare, auctor turpis non, mollis lacus. Vestibulum suscipit molestie lectus viverra hendrerit. Phasellus convallis arcu sed egestas tristique. Donec at tortor a sem viverra cursus. Cras vel rutrum lacus, quis condimentum velit. Praesent eu nisi imperdiet, commodo elit nec, aliquam leo. Vivamus non mauris at libero tempor convallis ac in velit."})]}),Object(l.jsx)(i.a,{className:"divider",variant:"middle"}),Object(l.jsx)("div",{className:"rights",children:"2019 \xa9 Todos os direitos reservados."})]})})}var j=a(117),m=a(120),d=a(118),p=a(58),b=a.n(p),g=a(29);a(96);function h(){var e=Object(g.b)().apiStore,t=e.handleSearch,a=e.query;return Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"container-title",children:[Object(l.jsx)(o.a,{to:"/",className:"title",children:Object(l.jsx)("span",{children:"movie night"})}),Object(l.jsx)("span",{className:"subtitle",children:"Informa\xe7\xf5es dos melhores filmes e s\xe9ries"})]}),Object(l.jsxs)(j.a,{className:"paper",id:"outlined-basic",variant:"outlined",children:[Object(l.jsx)(m.a,{className:"input",value:a,placeholder:"Pesquise por filmes ou s\xe9ries",onChange:t}),Object(l.jsx)(d.a,{type:"submit","aria-label":"search",children:Object(l.jsx)(b.a,{})})]})]})})}var f=a(18),O=a.n(f),x=a(24),v=r.a.lazy(Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([a.e(5),a.e(3)]).then(a.bind(null,134)).then((function(e){return{default:e.Home}})));case 1:case"end":return e.stop()}}),e)})))),w=r.a.lazy(Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.e(4).then(a.bind(null,135)).then((function(e){return{default:e.MovieDetails}})));case 1:case"end":return e.stop()}}),e)}))));function B(){return Object(l.jsxs)(A.d,{children:[Object(l.jsx)(A.b,{exact:!0,path:"/",render:function(){return Object(l.jsx)(A.a,{to:"/home"})}}),Object(l.jsx)(A.b,{path:"/home",component:v}),Object(l.jsx)(A.b,{exact:!0,path:"/:media/:id",component:w})]})}function N(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsx)(r.a.Suspense,{fallback:null,children:Object(l.jsx)(B,{})}),Object(l.jsx)(u,{})]})}var S=Object(s.a)();c.render(Object(l.jsx)(g.a,{children:Object(l.jsx)(A.c,{history:S,children:Object(l.jsx)(N,{})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.0903bf44.chunk.js.map