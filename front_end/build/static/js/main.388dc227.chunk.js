(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{10:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),r=n(16),l=n.n(r),a=(n(24),n(25),n(4)),j=n(2),d=function(e){e.history;return Object(c.jsxs)("div",{style:{width:"100%",height:"100%",textAlign:"center",marginTop:"20%"},children:[Object(c.jsx)("span",{style:{fontSize:"100px",color:"#FFE32C"},children:"\uc140\ud504 "}),Object(c.jsx)("span",{style:{fontSize:"100px",color:"#939393"},children:"\uacfc\uc77c \uacc4\uc0b0\ub300"}),Object(c.jsx)("br",{}),Object(c.jsx)(a.b,{to:"/selectupload",children:Object(c.jsx)("div",{style:{backgroundColor:"#FFE32C",color:"white",width:"160px",fontSize:"40px",borderRadius:"12px",position:"absolute",left:"50%",top:"60%",transform:"translate(-50%, -50%)"},children:"\uc2dc\uc791\ud558\uae30"})})]})},o=(n(34),function(){return Object(c.jsx)("div",{children:Object(c.jsx)("header",{children:Object(c.jsx)("nav",{style:{fontSize:"60px"},children:"\uc140\ud504 \uacfc\uc77c \uacc4\uc0b0\ub300"})})})}),b=(n(10),function(e){e.history;var t={borderRadius:"12px",fontSize:"45px",display:"inline",padding:"40px 20px",margin:"20px",border:"4px solid #ffe32c7a",color:"#ffe32c7a"};return Object(c.jsxs)("div",{style:{textAlign:"center",width:"100%"},children:[Object(c.jsx)(o,{}),Object(c.jsx)("div",{style:{fontSize:"45px",padding:"40px",margin:"20px"},children:"\uacc4\uc0b0 \ubc29\uc2dd\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."}),Object(c.jsxs)("div",{children:[Object(c.jsx)(a.b,{to:"/imageupload",style:{textDecoration:"none"},children:Object(c.jsx)("div",{style:t,children:"\uc0ac\uc9c4 \uc5c5\ub85c\ub4dc"})}),Object(c.jsx)(a.b,{to:"/webcam",style:{textDecoration:"none"},children:Object(c.jsx)("div",{style:t,children:"\uc2e4\uc2dc\uac04 \uce74\uba54\ub77c"})})]}),Object(c.jsx)("div",{style:{padding:"40px"},children:Object(c.jsx)(a.b,{to:"/",children:Object(c.jsx)("div",{className:"gray_button",children:"\uc774\uc804\uc73c\ub85c"})})})]})}),x=function(){return Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)(o,{}),Object(c.jsxs)("div",{style:{fontSize:"55px"},children:[Object(c.jsx)("span",{children:"\uc6d0"}),"\uc744 \uacb0\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"]}),Object(c.jsx)("div",{style:{textAlign:"center",border:"1px solid #AAAAAA",width:"535px",display:"inline-block",borderRadius:"38px"},children:Object(c.jsxs)("table",{style:{fontSize:"20px",display:"inline-block"},children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(c.jsx)("th",{children:"\uc218\ub7c9"}),Object(c.jsx)("th",{children:"\uae08\uc561"})]})}),Object(c.jsx)("tbody",{}),Object(c.jsx)("tfoot",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{colSpan:"2",children:"\ucd1d\uc561"}),Object(c.jsx)("td",{})]})})]})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"gray_button",children:"\ucde8\uc18c\ud558\uae30"}),Object(c.jsx)(a.b,{to:"/end",children:Object(c.jsx)("div",{className:"yellow_button",children:"\uacb0\uc81c\ud558\uae30"})})]})]})},O=n(9),h=(n(35),function(e){e.history;var t=Object(s.useState)("\uc5c5\ub85c\ub4dc\ud560 \ud30c\uc77c\uc744 \ub4dc\ub798\uadf8 \ud574\uc8fc\uc138\uc694"),n=Object(O.a)(t,2),i=n[0],r=n[1],l=Object(s.useState)(0),j=Object(O.a)(l,2),d=(j[0],j[1],Object(s.useState)(null)),b=Object(O.a)(d,2),x=b[0],h=b[1],p=Object(s.useState)(!0),u=Object(O.a)(p,2),g=u[0],f=(u[1],function(e){g&&r("File Detected"),e.stopPropagation(),e.preventDefault()}),v=function(e){g&&r(""),e.preventDefault()};return Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)(o,{}),Object(c.jsx)("div",{style:{fontSize:"45px",color:"#000000",padding:"0px",textAlign:"center"},children:"\uacc4\uc0b0\ud560 \uc0ac\uc9c4 \uc5c5\ub85c\ub4dc"}),Object(c.jsx)("div",{onDragEnter:f,onDragLeave:v,onDragOver:function(e){return e.preventDefault()},onDrop:v}),Object(c.jsx)("div",{className:"ImageCenter",children:Object(c.jsxs)("div",{className:"DropArea ".concat("Drop"===i?"Over":""),onDragOver:function(e){g&&r("Drop"),e.preventDefault()},onDragLeave:f,onDrop:function(e){var t=e.dataTransfer.files[0].type;if(["image/jpeg","image/png"].indexOf(t)>-1){var n=new FileReader;n.onload=function(e){return h(e.target.result)},n.readAsDataURL(e.dataTransfer.files[0]);var c=new FormData;c.append("image",e.dataTransfer.files[0]),console.log(e.dataTransfer.files[0]);var s=new XMLHttpRequest;s.open("POST","http://localhost:8000/api/addimage/"),s.send(c)}e.preventDefault()},children:[Object(c.jsxs)("div",{className:"ImageProgress ".concat(x?"Show":""),children:[Object(c.jsx)("div",{className:"ImageProgressImage",style:{backgroundImage:"url(".concat(x,")")}}),Object(c.jsx)("div",{className:"ImageProgressUploaded",style:{backgroundImage:"url(".concat(x,")")}})]}),Object(c.jsx)("div",{className:"Status",children:i})]})}),Object(c.jsxs)("div",{style:{btn_div:{padding:"40px",textAlign:"center"}},children:[Object(c.jsx)(a.b,{to:"/selectupload",children:Object(c.jsx)("div",{className:"gray_button",children:"\uc774\uc804\uc73c\ub85c"})}),Object(c.jsx)(a.b,{to:"/result",children:Object(c.jsx)("div",{className:"yellow_button",children:"\ub2e4\uc74c\uc73c\ub85c"})})]})]})}),p=n(18),u=n.n(p),g=function(){var e=i.a.useRef(null),t=i.a.useState(null),n=Object(O.a)(t,2),s=(n[0],n[1]);i.a.useCallback((function(){var t=e.current.getScreenshot();s(t)}),[e,s]);return Object(c.jsxs)("div",{style:{width:"100%",height:"100%",textAlign:"center"},children:[Object(c.jsx)("div",{style:{fontSize:"55px",color:"#000000",padding:"60px"},children:"\uc2e4\uc2dc\uac04 \uce74\uba54\ub77c"}),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(u.a,{audio:!1,ref:e,screenshotFormat:"image/jpeg"})})]})},f=function(){return Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)(o,{}),Object(c.jsx)(g,{}),Object(c.jsxs)("div",{children:[Object(c.jsx)(a.b,{to:"/selectupload",children:Object(c.jsx)("div",{className:"gray_button",children:"\ucde8\uc18c\ud558\uae30"})}),Object(c.jsx)(a.b,{to:"/result",children:Object(c.jsx)("div",{className:"yellow_button",children:"\uacb0\uc81c\ud558\uae30"})})]})]})},v=function(){return Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)(o,{}),Object(c.jsx)("div",{style:{fontSize:"100px",color:"#FFE32C",padding:"40px"},children:"\uac10\uc0ac\ud569\ub2c8\ub2e4\ud83c\udf52"}),Object(c.jsxs)("div",{style:{fontSize:"55px",padding:"10px"},children:[Object(c.jsx)("span",{}),"\uc6d0\uc774 \uacb0\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4"]}),Object(c.jsx)("div",{children:Object(c.jsx)(a.b,{to:"/",children:Object(c.jsx)("div",{className:"yellow_button",children:"\ud655\uc778\ud558\uae30"})})})]})};var m=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(a.a,{children:[Object(c.jsx)(j.a,{path:"/",exact:!0,component:d}),Object(c.jsx)(j.a,{path:"/selectupload",component:b}),Object(c.jsx)(j.a,{path:"/imageupload",component:h}),Object(c.jsx)(j.a,{path:"/webcam",component:f}),Object(c.jsx)(j.a,{path:"/result",component:x}),Object(c.jsx)(j.a,{path:"/end",component:v})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.388dc227.chunk.js.map