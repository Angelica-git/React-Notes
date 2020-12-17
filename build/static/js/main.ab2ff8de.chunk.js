(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{27:function(e){e.exports=JSON.parse('{"title":"Title","body":"Note","save":"Save","delete":"Delete","archive":"Archive","unarchive":"Un-archive","newNote":"New note","notes":"Notes","noNotesFound":"No notes found","saved":"Saved!","deleted":"Deleted!"}')},28:function(e){e.exports=JSON.parse('{"title":"Rubrik","body":"Anteckning","save":"Spara","delete":"Radera","archive":"Arkiv","unarchive":"\xc5ngra arkiv","newNote":"Ny anteckning","notes":"Anteckningar","noNotesFound":"Inga anteckningar hittades","saved":"Sparad!","deleted":"Raderad!"}')},40:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),s=n.n(a),r=n(10),i=n.n(r),o=n(25),l=n(6);var u=[];function d(){var e=localStorage.getItem("notes");return e?JSON.parse(e):(localStorage.setItem("notes",JSON.stringify([])),[])}function j(e){var t=d(),n=t.findIndex((function(t){return t.id===e}));n>=0&&t.splice(n,1);var c=JSON.stringify(t);localStorage.setItem("notes",c)}function b(e){var t=d(),n=u.findIndex((function(t){return t.id===e}));n>=0&&u.splice(n,1);var c=JSON.stringify(t);localStorage.setItem("notes",c)}var O=n(29),v=(n(26),n(23)),f=n(30),h=n(12),x=n(7),g=n(24),N=n(27),S=n(28),m=s.a.createContext(null),p={sv:S,en:N};function y(e){var t=e.children,n=e.initLangCode,s=Object(a.useState)(n),r=Object(l.a)(s,2),i=r[0],o=r[1],u=p[i];return Object(c.jsx)(m.Provider,{value:{lang:u,setLangCode:o},children:t})}function C(e){var t=e.selectedNote,n=e.setSelectedNote,s=e.notes,r=Object(a.useContext)(m).lang;return s.length?Object(c.jsx)(g.a,{as:"ul",children:s.map((function(e,a){return Object(c.jsx)(g.a.Item,{active:!!t&&e.id===t.id,onClick:function(){return function(e){n(e)}(e)},as:"li",children:e.title})}))}):r.noNotesFound}var k=n(9),I=n(31);function J(e){var t=e.selectedNote,n=(e.setSelectedNote,e.refreshList),s=e.isArchived;console.log(t);var r=Object(a.useState)(""),i=Object(l.a)(r,2),o=i[0],O=i[1],v=Object(a.useState)(""),f=Object(l.a)(v,2),h=f[0],g=f[1],N=Object(a.useState)(""),S=Object(l.a)(N,2),p=S[0],y=S[1],C=Object(a.useState)(""),J=Object(l.a)(C,2),L=J[0],A=J[1],E=Object(a.useContext)(m).lang;Object(a.useEffect)((function(){if(t)return O(t.title);O("")&&g(t.body),g("")}),[t]),Object(a.useEffect)((function(){if(t)return g(t.body);g("")}),[t]),Object(a.useEffect)((function(){setTimeout((function(){return y("")}),3e3)}),[p]);return Object(c.jsxs)(k.a,{children:[Object(c.jsxs)(k.a.Group,{controlId:"formGroupTitle",children:[Object(c.jsx)(k.a.Label,{children:E.title}),Object(c.jsx)(k.a.Control,{value:o,onChange:function(e){return O(e.target.value)}})]}),Object(c.jsxs)(k.a.Group,{controlId:"formGroupNote",children:[Object(c.jsx)(k.a.Label,{children:E.body}),Object(c.jsx)(k.a.Control,{as:"textarea",value:h,onChange:function(e){return g(e.target.value)}})]}),Object(c.jsx)(x.a,{onClick:function(e){if(e.preventDefault(),O(""),g(""),y(E.saved),A("success"),t)return function(e,t,n){var c=d(),a=c.findIndex((function(t){return t.id===e})),s={id:e,title:t,body:n};c.splice(a,1),c.splice(0,0,s);var r=JSON.stringify(c);localStorage.setItem("notes",r)}(t.id,o,h),n();console.log("Saving new note:",o),function(e,t){var n=d(),c={id:Date.now(),title:e,body:t};n.push(c),console.log("about to save",n);var a=JSON.stringify(n);localStorage.setItem("notes",a)}(o,h),n(),console.log(d())},variant:"success",style:w.button,children:E.save}),t&&Object(c.jsxs)(x.a,{onClick:function(e){e.preventDefault();var c=t.id;j(c),b(c),n(),O(""),g(""),y(E.deleted),A("danger")},variant:"danger",style:w.button,children:[E.delete," ",Object(c.jsx)("i",{class:"fas fa-trash-alt"})]}),t&&Object(c.jsx)(x.a,{onClick:function(e){var c;e.preventDefault(),s?function(e){var t=d();t.push(e),b(e.id);var n=JSON.stringify(t);localStorage.setItem("notes",n)}(t):(c=t,u.push(c),j(c.id)),n(),O("")},variant:"secondary",style:w.button,children:s?E.unarchive:E.archive}),p&&Object(c.jsx)(I.a,{className:"mt-2",variant:L,children:p})]})}var w={button:{marginRight:10}},L=s.a.createContext(null);function A(e){var t=e.children,n=Object(a.useState)([]),s=Object(l.a)(n,2),r=s[0],i=s[1];return Object(a.useEffect)((function(){var e=d();i(e)}),[]),Object(c.jsx)(L.Provider,{value:{notes:r,setNotes:i},children:t})}function E(e){var t=e.children,n=Object(a.useContext)(m).setLangCode;return Object(c.jsxs)("div",{children:[Object(c.jsx)(x.a,{size:"sm",className:"mb-4 mr-2",onClick:function(){return n("sv")},children:"SE"}),Object(c.jsx)(x.a,{size:"sm",className:"mb-4",onClick:function(){return n("en")},children:"EN"}),Object(c.jsx)("div",{children:t})]})}function D(){var e=Object(a.useState)(void 0),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),i=Object(l.a)(r,2),j=i[0],b=i[1],g=Object(a.useContext)(L),N=g.notes,S=g.setNotes,p=Object(a.useState)([]),y=Object(l.a)(p,2),k=y[0],I=y[1],w=Object(a.useContext)(m).lang;return Object(c.jsxs)(v.a,{children:[Object(c.jsx)(O.a,{fluid:!0,children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)("h1",{children:"Notes by Angelica"}),Object(c.jsx)("p",{children:"React app!"})]})}),Object(c.jsx)(E,{}),Object(c.jsxs)(f.a,{children:[Object(c.jsxs)(h.a,{sm:4,children:[Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(x.a,{onClick:function(){return s(void 0)},variant:"dark",size:"md",block:!0,className:"mb-4",children:w.newNote})}),Object(c.jsx)(C,{notes:j?k:N,selectedNote:n,setSelectedNote:s}),Object(c.jsxs)(x.a,{onClick:function(){return b(!j)},variant:j?"primary":"secondary",size:"md",block:!0,className:"mt-4",children:[j?Object(c.jsx)("i",{class:"fas fa-sticky-note"}):Object(c.jsx)("i",{class:"fas fa-inbox"})," \xa0",j?w.notes:w.archive]})]}),Object(c.jsx)(h.a,{children:Object(c.jsx)(J,{isArchived:j,refreshList:function(){s(void 0);var e=d(),t=u;S(Object(o.a)(e)),I(Object(o.a)(t))},selectedNote:n})})]})]})}function R(){return Object(c.jsx)(A,{children:Object(c.jsx)(y,{initLangCode:"en",children:Object(c.jsx)(z,{})})})}function z(){return Object(c.jsx)(D,{})}i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(R,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ab2ff8de.chunk.js.map