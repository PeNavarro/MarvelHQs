(this.webpackJsonpmarvelhqs=this.webpackJsonpmarvelhqs||[]).push([[0],{35:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var c,s,r=a(0),n=a.n(r),l=a(20),i=a.n(l),o=a(21),j=a.n(o),b=a(24),h=a(17),d=(a(35),a(23),a(19)),u=a(25),m=a(12),f=a(22),O=a(15),p=a(16),x=a(27),v=a(26);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var a,c,s=function(e,t){if(null==e)return{};var a,c,s={},r=Object.keys(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}function N(e,t){var a=e.title,n=e.titleId,l=y(e,["title","titleId"]);return r.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:128,height:80,viewBox:"0 0 500 200",ref:t,"aria-labelledby":n},l),a?r.createElement("title",{id:n},a):null,c||(c=r.createElement("path",{fill:"#f0141e",d:"M0 0h500v200H0z"})),s||(s=r.createElement("path",{d:"M423.12 46.619V15.991h-85.706l-14.11 102.282-13.94-102.282h-30.908l3.454 27.312c-3.563-7-16.211-27.312-44.061-27.312-.185-.012-30.945 0-30.945 0l-.128 149.084-22.523-149.084-40.484-.012-23.304 154.467.013-154.455H81.726l-13.965 86.768-13.604-86.768H15.399v167.932h30.523v-80.944l13.886 80.944h16.224l13.69-80.944v80.944h58.838l3.558-25.83h23.688l3.558 25.83 57.771.037h.042v-.037H237.249v-54.504l7.074-1.024 14.661 55.565h29.883l-.012-.037H288.94l-19.238-65.11c9.741-7.179 20.752-25.379 17.822-42.798v-.006c.036.226 18.164 108.026 18.164 108.026l35.534-.11 24.279-152.203v152.203h57.617v-30.199h-27.344v-38.507h27.344v-30.66h-27.344v-37.94h27.346zM155.713 131.47l8.387-71.802 8.69 71.802h-17.077zm88.708-33.155c-2.344 1.123-4.784 1.685-7.172 1.691v-54.01c.037 0 .093-.006.153-.006 2.38-.018 20.203.714 20.203 26.709 0 13.598-6.06 22.174-13.184 25.616zm240.186 55.383v30.188h-56.214V15.967h30.272v137.731h25.942z",fill:"#fff"})))}var w=r.forwardRef(N),H=(a.p,a(34)),k=a(1);var S=function(){return Object(k.jsx)(H.a,{className:"navbar",variant:"dark",children:Object(k.jsx)(H.a.Brand,{className:"mx-auto",href:"#home",children:Object(k.jsx)(w,{})})})},E=a.p+"static/media/marvelcomics.6e741aa2.png",B=a(38);var M=function(){return Object(k.jsx)(B.a,{className:"jumbotron",children:Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(p.a,{lg:6,children:[Object(k.jsx)("h1",{children:"Marvel HQs"}),Object(k.jsx)("p",{children:"Trabalho desenvolvido para o curso stack MERN."}),Object(k.jsx)("br",{}),Object(k.jsx)("p",{className:"descricao",children:"Estamos consumindo uma API fornecida pela Marvel para listar as HQs do her\xf3i escolhido por voc\xea. Infelizmente, n\xf3s s\xf3 temos acesso aos primeiros 20 resultados que a API nos fornece. \ud83d\ude09"}),Object(k.jsx)("p",{children:"Desenvolvido por: Pedro Mack Navarro e Nickolas da Silva Veiga"})]}),Object(k.jsx)(p.a,{lg:6,children:Object(k.jsx)("img",{className:"bannerImg",src:E,alt:"marvel comics logo"})})]})})},z=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(""),n=Object(h.a)(s,2),l=n[0],i=n[1],o=Object(r.useState)(!1),g=Object(h.a)(o,2),y=g[0],N=g[1],w=Object(r.useState)(!1),H=Object(h.a)(w,2),E=H[0],B=H[1];function z(){return(z=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),"ts=1&apikey=f7a66890b4af590827efc6365bde9b10&hash=92e887122fb4b3a85bcbf6b664787416",t="https://gateway.marvel.com/v1/public/characters?".concat("ts=1&apikey=f7a66890b4af590827efc6365bde9b10&hash=92e887122fb4b3a85bcbf6b664787416"),e.next=5,fetch(t).then((function(e){return e.json()})).then((function(e){c(e.data.results)})).catch((function(){B(!0)}));case 5:N(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){document.title="Marvel HQs",function(){z.apply(this,arguments)}()}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(S,{}),Object(k.jsx)(M,{}),Object(k.jsx)(u.a,{children:Object(k.jsxs)(O.a,{className:"d-flex justify-content-center",children:[y&&Object(k.jsx)(v.a,{className:"mt-5",animation:"border",role:"status"}),!y&&Object(k.jsxs)(p.a,{lg:6,children:[E&&Object(k.jsxs)(m.a,{className:"semBorda mb-4",children:[Object(k.jsx)(m.a.Header,{className:"cardCabe\xe7alho",children:"Erro"}),Object(k.jsx)(m.a.Body,{className:"cardCorpo",children:Object(k.jsx)(m.a.Text,{children:"N\xe3o foi poss\xedvel listar os super-her\xf3is, tente novamente mais tarde."})})]}),!E&&Object(k.jsxs)(m.a,{className:"semBorda mb-4",children:[Object(k.jsx)(m.a.Header,{className:"cardCabe\xe7alho",children:"Procure o seu super-her\xf3i"}),Object(k.jsxs)(m.a.Body,{className:"cardCorpo",children:[Object(k.jsx)(f.a,{children:Object(k.jsxs)(f.a.Group,{children:[Object(k.jsx)(f.a.Label,{children:"Selecionar:"}),Object(k.jsxs)(f.a.Control,{className:"select",as:"select",size:"lg",onChange:function(e){return i(e.target.value)},custom:!0,children:[Object(k.jsx)("option",{disabled:!0,selected:!0,children:"Selecione o her\xf3i"},"1"),function(e){var t=[];return e.map((function(e){return t.push(e.id+"/"+e.name)})),t}(a).map((function(e){return Object(k.jsx)("option",{value:e.split("/")[0],children:e.split("/")[1]},e.split("/")[0])}))]})]})}),Object(k.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(k.jsx)(d.b,{to:"/Hq/".concat(l),children:Object(k.jsx)(x.a,{className:"semBorda botao",children:"Pesquisar"})})})]})]})]})]})})]})},C=a(7),I=function(){var e=Object(C.f)().id,t=Object(r.useState)([]),a=Object(h.a)(t,2),c=a[0],s=a[1],n=Object(r.useState)(!1),l=Object(h.a)(n,2),i=l[0],o=l[1],f=Object(r.useState)(!1),g=Object(h.a)(f,2),y=g[0],N=g[1];function w(){return(w=Object(b.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),"ts=1&apikey=f7a66890b4af590827efc6365bde9b10&hash=92e887122fb4b3a85bcbf6b664787416",a="https://gateway.marvel.com/v1/public/characters/".concat(e,"/comics?").concat("ts=1&apikey=f7a66890b4af590827efc6365bde9b10&hash=92e887122fb4b3a85bcbf6b664787416"),t.next=5,fetch(a).then((function(e){return e.json()})).then((function(e){s(e.data.results)})).catch((function(e){N(!0)}));case 5:o(!1);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function H(e){var t=e.listaHqs.map((function(e){return Object(k.jsx)(p.a,{lg:3,children:Object(k.jsxs)(m.a,{lg:10,className:"semBorda mb-4",children:[Object(k.jsx)(m.a.Img,{variant:"top",src:e.thumbnail.path+"/portrait_incredible."+e.thumbnail.extension}),Object(k.jsx)(m.a.Body,{className:"cardCorpo",children:Object(k.jsx)(m.a.Title,{children:e.series.name})})]})})}));return Object(k.jsx)(k.Fragment,{children:t})}return Object(r.useEffect)((function(){document.title="Marvel HQs",function(){w.apply(this,arguments)}()}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(S,{}),y&&Object(k.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(k.jsx)("h5",{className:"textoCentralizado",children:"N\xe3o foi poss\xedvel listar os super-her\xf3is, tente novamente mais tarde."})}),i&&Object(k.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(k.jsx)(v.a,{className:"mt-5",animation:"border",role:"status"})}),!i&&Object(k.jsx)(u.a,{children:!y&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(O.a,{className:"d-flex justify-content-center",children:[c.length<=0&&Object(k.jsx)("h5",{className:"textoCentralizado",children:"Esse super-her\xf3i n\xe3o participou de nenhuma HQ"}),Object(k.jsx)(H,{listaHqs:c})]}),Object(k.jsx)(O.a,{className:"d-flex justify-content-center mb-4",children:Object(k.jsx)(d.b,{to:"/",children:Object(k.jsx)(x.a,{className:"semBorda botaoPreto",children:"Voltar"})})})]})})]})};i.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(d.a,{basename:"/MarvelHQs",children:Object(k.jsxs)(C.c,{children:[Object(k.jsx)(C.a,{path:"/",component:z,exact:!0}),Object(k.jsx)(C.a,{path:"/Hq/:id",component:I})]})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.7ddfd25a.chunk.js.map