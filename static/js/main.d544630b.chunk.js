(this["webpackJsonpplategame.github.io"]=this["webpackJsonpplategame.github.io"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),r=t(6),s=t.n(r),o=(t(13),t(8)),c=t(7),u=t(4),l=(t(14),t(15),t(0)),h=function(e){var n=e.children;return e.seen?e.showSeen?Object(l.jsx)("div",{className:"seen state",onClick:function(){return e.toggleSeen(n)},children:n}):null:Object(l.jsx)("div",{className:"unseen state",onClick:function(){return e.toggleSeen(n)},children:n})},d=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],f="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",b=function(){return d.map((function(e){return{name:e,seen:!1}}))},j=function(e,n){for(var t=e[0].seen?1:0,a=0,i=n?"1":"0",r=1;r<e.length;r++)r%5===0?(i+=f[t],a=0,t=0):a+=1,e[r].seen&&(t+=Math.pow(2,a));return i+=f[t]},w=function(){Object(a.useEffect)((function(){document.title="License Plate Game";var e=g("state");if(function(e){return null!=e&&e.length>0}(e)){var n=function(e){for(var n=b(),t=0,a=1;a<e.length;a++)for(var i=f.indexOf(e[a]),r=0;r<5&&t<n.length;r++,t++)n[t].seen=(1&i)>0,i>>=1;return["1"===e[0],n]}(e),t=Object(u.a)(n,2),a=t[0],r=t[1];w(a),i(r)}else m("")}),[]);var e=Object(a.useState)(b()),n=Object(u.a)(e,2),t=n[0],i=n[1],r=Object(a.useState)(!0),s=Object(u.a)(r,2),d=s[0],w=s[1],g=function(e){var n=window.location.search;if(!n.startsWith("?"))return"";var t,a=n.substring(1).split("&"),i=Object(c.a)(a);try{for(i.s();!(t=i.n()).done;){var r=t.value;if(r.startsWith(e+"="))return r.substring(e.length+1)}}catch(s){i.e(s)}finally{i.f()}return""},v=function(e){var n=Object(o.a)(t);n.filter((function(n){return n.name===e})).forEach((function(e){return e.seen=!e.seen})),i(n),m(j(n,d))},m=function(e){var n=window.location.href,t=n.search(window.location.pathname+"$");if(e.length>0){var a=n.substr(0,t)+"/?state="+e;window.history.replaceState(null,"",a)}else window.history.replaceState(null,"",n.substr(0,t)+"/")};return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsxs)("div",{id:"controls",children:[Object(l.jsx)("div",{id:"showSeenCheck",children:Object(l.jsx)("input",{type:"checkbox",className:"showSeenCheck",checked:d,value:"showSeen",onChange:function(){m(j(t,!d)),w(!d)}})}),Object(l.jsx)("div",{id:"resetButton",onClick:function(){if(window.confirm("Are you sure you want to reset?")){var e=b();i(e),m(j(e,d))}},children:"Reset"})]}),t.map((function(e){return Object(l.jsx)(h,{seen:e.seen,showSeen:d,toggleSeen:v,children:e.name},e.name)}))]})})};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d544630b.chunk.js.map