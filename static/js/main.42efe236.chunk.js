(this["webpackJsonpsing-along"]=this["webpackJsonpsing-along"]||[]).push([[0],{59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(0),r=n(19),a=n.n(r),o=(n(59),n(60),n(37)),s=n(48),l=n(118),d=(n(61),n(45)),u=n.n(d),j=n(113),h=n(15),b=n(119),f=n(114),O=n(116),g=n(115),v=n(117),x=n(111),m=function(){return Object(c.jsx)(h.b,{to:"/shuffle/0",children:Object(c.jsx)(x.a,{size:"large",variant:"outlined",style:{margin:"0.5rem"},endIcon:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[Object(c.jsx)("path",{fill:"currentColor",d:"M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"}),Object(c.jsx)("path",{fill:"currentColor",d:"M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"})]}),children:"Shuffle Play"})})},p=Object(j.a)({label:{flexDirection:"column",minWidth:"420px"},card:{margin:8,maxWidth:320},cardMedia:{height:180},cardTitle:{fontSize:"1rem",fontWeight:500}}),y=function(e){var t=e.songList,n=p();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"\ud83c\udf84\ud83c\udf85\ud83e\udd36\ud83c\udfb5 Christmas Sing Along \ud83c\udfb6\u2603\ufe0f\ud83c\udf81\ud83c\udf84"}),Object(c.jsx)("nav",{children:Object(c.jsx)(m,{})}),Object(c.jsx)("section",{className:"directory",children:t.sort((function(e,t){return e.songTitle.localeCompare(t.songTitle)})).map((function(e){var t=e.videoId,i=e.songTitle,r=e.songArtist,a=e.cc,o="https://img.youtube.com/vi/".concat(t,"/mqdefault.jpg"),s="Youtube Thumbnail of ".concat(i),l=i&&r?"":"/edit";return Object(c.jsx)(b.a,{className:n.card,children:Object(c.jsx)(h.b,{to:"/".concat(t).concat(l),children:Object(c.jsxs)(f.a,{children:[Object(c.jsx)(g.a,{className:n.cardMedia,component:"img",alt:s,title:s,image:o}),Object(c.jsxs)(O.a,{children:[Object(c.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",className:n.cardTitle,children:i}),Object(c.jsxs)(v.a,{variant:"body2",color:"textSecondary",component:"p",children:[r,a&&Object(c.jsx)(u.a,{className:"cc-icon"})]})]})]})})},t)}))})]})},I=n(28),S=n(22),w=n.n(S),T=n(36),E=n(16),C=n(46),N=n.n(C),L=function(e){return e?0:["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document?1:0},k=function(e){var t=e.videoId,n=e.videoWidth,c=e.videoHeight,r=e.cc,a=void 0!==r&&r,o=e.onVideoEnd,s=Object(i.useState)(0),l=Object(E.a)(s,2),d=l[0],u=l[1],j=Object(i.useState)(),h=Object(E.a)(j,2),b=h[0],f=h[1];return Object(i.useEffect)((function(){var e,n=function(e){return{playerVars:{cc_load_policy:1,iv_load_policy:3,playsinline:L(e),modestbranding:1}}}(a),c=N()(t,n);c.loadVideoById(t),f(c);var i=function(){var t=Object(T.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.getCurrentTime();case 2:n=t.sent,u(1e3*n),100,e=setInterval((function(){u((function(e){return e+100}))}),100);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),r=function(){return clearInterval(e)},s=c.on("stateChange",(function(e){var t=window.YT.PlayerState,n=t.PLAYING,c=t.PAUSED,a=t.ENDED;switch(e.data){case n:i();break;case c:r();break;case a:r(),o&&o()}}));return function(){r(),c.off(s),c.destroy()}}),[t,a,o]),Object(i.useEffect)((function(){b&&n&&c&&b.setSize(n,c)}),[b,n,c]),{milliseconds:d}},P=(n(87),n(47)),A=function(e){var t=e.milliseconds,n=e.captionHeight,r=e.songTitle,a=e.songArtist,o=e.cc,s=Object(i.useState)(""),l=Object(E.a)(s,2),d=l[0],u=l[1];Object(i.useEffect)((function(){var e=o?"":"/sing-along/lyrics/".concat(r," - ").concat(a,".lrc");fetch(e).then((function(e){return e.text()})).then(u)}),[r,a,o]);var j=Object(i.useCallback)((function(e){var t=e.lrcLine,n=e.active;return Object(c.jsx)("div",{className:n?"active-line":"inactive-line",children:t.content})}),[]);return Object(c.jsx)(P.a,{className:"lrc",lrc:o?"[00:00.0] [CC Available]":d,currentTime:t,lineRenderer:j,style:{height:"calc(".concat(n,"px - 4em)"),overflow:"hidden"},spaceTop:0})},H=function(e){var t=e.videoId,n=e.songTitle,i=e.songArtist,r=e.cc,a=e.onVideoEnd,o=function(){var e=document.getElementsByTagName("html")[0],t=e.clientHeight,n=e.clientWidth,c=.8*t,i=c<n,r={height:i?c:9*n/16,width:i?16*c/9:n};return{dimensions:{video:r,caption:{height:t-r.height}}}}().dimensions,s=o.video,l=o.caption,d=k({videoId:t,videoWidth:s.width,videoHeight:s.height,cc:r,onVideoEnd:a}).milliseconds;return Object(c.jsxs)("section",{className:"karaoke",children:[Object(c.jsx)("div",{id:t}),Object(c.jsx)(A,{milliseconds:d,captionHeight:l.height,songTitle:n,songArtist:i,cc:r})]})},M=n(6),D=function(e){var t=e.songList,n=Object(M.g)().shuffleIndex,c=parseInt(n,10)%t.length,r=t[c],a=Object(M.f)();return Object(i.createElement)(H,Object(I.a)(Object(I.a)({},r),{},{onVideoEnd:function(){a.replace("/shuffle/".concat(c+1))},key:n}))},B=function(e){var t=e.songList,n=Object(M.g)().videoId,i=t.filter((function(e){return e.videoId===n}))[0]||{};return Object(c.jsx)(H,Object(I.a)({},i))},V=function(){var e=Object(i.useState)([]),t=Object(E.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)([]),s=Object(E.a)(a,2),l=s[0],d=s[1],u=Object(M.g)().videoId,j=k({videoId:u}).milliseconds;return Object(c.jsxs)("section",{className:"sync-lyrics",style:{display:"flex"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{id:u}),Object(c.jsx)("br",{}),Object(c.jsx)("textarea",{style:{border:"solid 1px gray",height:"35%",width:"100%"},onChange:function(e){return r(e.target.value.split("\n"))}}),Object(c.jsx)("br",{}),Object(c.jsx)(x.a,{variant:"outlined",onClick:function(){return d((function(e){return[].concat(Object(o.a)(e),[j])}))},children:"SET TIME"}),Object(c.jsx)("br",{}),Object(c.jsx)(x.a,{variant:"outlined",onClick:function(){return d((function(e){return e.filter((function(e,t){return t!==l.length-1}))}))},children:"UNDO"})]}),Object(c.jsx)("div",{style:{paddingLeft:"1em",maxHeight:"100vh",overflow:"auto"},children:n.map((function(e,t){var n=l[t]?"[".concat(new Date(0,0,0,0,0,0,l[t]).toISOString().substring(14,21),"] "):"";return Object(c.jsxs)("div",{children:[n,e]},t)}))})]})},W=Object(s.a)({palette:{type:"dark"}}),z=function(){var e=function(e){var t=Object(i.useState)(""),n=Object(E.a)(t,2),c=n[0],r=n[1];return Object(i.useEffect)((function(){e&&function(){var t=Object(T.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(e).then((function(e){return e.text()})).then((function(e){return r(e)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),{data:c}}("/sing-along/lyrics/index.json").data,t=e?JSON.parse(e):[],n=Object(o.a)(t).sort((function(){return.5-Math.random()}));return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(l.a,{theme:W,children:Object(c.jsxs)(M.c,{children:[Object(c.jsx)(M.a,{path:"/shuffle/:shuffleIndex",children:Object(c.jsx)(D,{songList:n})}),Object(c.jsx)(M.a,{path:"/:videoId/edit",children:Object(c.jsx)(V,{})}),Object(c.jsx)(M.a,{path:"/:videoId",children:Object(c.jsx)(B,{songList:t})}),Object(c.jsx)(M.a,{path:"/",children:Object(c.jsx)(y,{songList:t})})]})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(c.jsx)(i.StrictMode,{children:Object(c.jsx)(h.a,{children:Object(c.jsx)(z,{})})}),document.getElementById("root")),F()}},[[88,1,2]]]);
//# sourceMappingURL=main.42efe236.chunk.js.map