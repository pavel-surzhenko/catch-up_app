!function(){var e,t={9299:function(e,t,n){"use strict";n(1038),n(8783),n(4747);var r=document.getElementById("slider"),o=Array.from(r.querySelectorAll(".box-content")),l=r.querySelectorAll(".box-content .button-prev"),a=r.querySelectorAll(".box-content .button-next"),s=0,i=0,c=4e3;o[0].style.display="flex",o[0].querySelector("figure").classList.add("animate__fadeIn"),o[0].querySelector(".slider-wrapper").classList.add("animate__fadeIn");var u=function(){o.forEach((function(e){e.style.display="none",e.querySelector("figure").classList.remove("animate__fadeIn"),e.querySelector(".slider-wrapper").classList.remove("animate__fadeIn")}))},d=function(e){o.forEach((function(t,n){n===e&&(t.style.display="flex",t.querySelector("figure").classList.add("animate__fadeIn"),t.querySelector(".slider-wrapper").classList.add("animate__fadeIn"))}))};l.forEach((function(e){e.onclick=function(){var e=0===s?o.length:s;clearInterval(i),u(),d(s=e-1),f(c)}})),a.forEach((function(e){e.onclick=function(){var e=s===o.length-1?-1:s;clearInterval(i),u(),d(s=e+1),f(c)}}));var f=function(e){i=setInterval((function(){u(),s===o.length-1?s=0:s+=1,d(s)}),e)};f(c),n(9826);var m=document.getElementById("loginBtn"),y=document.getElementById("email1"),v=document.getElementById("password1"),g=document.getElementById("loginForm"),p=function(e){localStorage.setItem("login",JSON.stringify(e))};m.onclick=function(){var e=JSON.parse(localStorage.getItem("students"))||[],t=JSON.parse(localStorage.getItem("teacher"))||{},n=t.password,r=t.email;if(n!==v.value||r!==y.value){var o=e.find((function(e){return e.password===v.value&&e.email===y.value}));o?(p(o),window.location.href="student.html"):g.reset()}else p(t),window.location.href="teacher.html"};var h=document.getElementById("regBtn"),E=document.getElementById("toLoginSvg"),I=document.getElementById("from3to2Svg"),w=document.getElementById("toStep2Btn"),b=document.getElementById("from1to2"),B=document.getElementById("from2to1"),S=document.getElementById("user_student"),x=(document.getElementById("user_teacher"),document.getElementById("createAccount")),L=document.getElementsByClassName("input-box"),k=document.getElementById("loginBlock"),_=document.getElementById("step1Block"),O=document.getElementById("regBlock"),A=document.getElementById("name"),q=document.getElementById("email"),j=document.getElementById("password"),N=document.getElementById("password_next"),T={};function J(){_.setAttribute("style","display: none;"),O.setAttribute("style","display: flex;"),S.checked?T.type="student":T.type="teacher"}function P(){O.setAttribute("style","display: none;"),_.setAttribute("style","display: flex;")}h.addEventListener("click",(function(){k.setAttribute("style","display: none;"),_.setAttribute("style","display: flex;")})),w.addEventListener("click",J),b.addEventListener("click",J),E.addEventListener("click",(function(){_.setAttribute("style","display: none;"),k.setAttribute("style","display: flex;")})),I.addEventListener("click",P),B.addEventListener("click",P),x.addEventListener("click",(function(){if(n=document.querySelector("label[for='name']"),(/[A-ZА-ЯЁ]{2,}\s[A-ZА-ЯЁ]{2,}/gi.test(A.value)?(A.classList.remove("error"),n.innerText="First and last name",n.style="",1):(A.classList.add("error"),n.innerText="Please enter first and last name",n.style="color:red;",0))&&function(){var e=document.querySelector("label[for='email']");return 0==/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(q.value)?(q.classList.add("error"),e.innerText="Please enter a valid email",e.style="color:red;",!1):(q.classList.remove("error"),e.innerText="Email",e.style="",!0)}()&&function(){var e=document.querySelector("label[for='password']");return j.value.length<1||j.value!==N.value?(j.classList.add("error"),N.classList.add("error"),e.innerText="Passwords do not match",e.style="color:red;",!1):(j.classList.remove("error"),N.classList.remove("error"),e.innerText="Password",e.style="",!0)}()){if(S.checked){var e,t=null!==(e=JSON.parse(localStorage.getItem("students")))&&void 0!==e?e:[];t.push({type:T.type,name:A.value,email:q.value,password:j.value}),localStorage.setItem("students",JSON.stringify(t)),p(t[t.length-1]),window.location.href="student.html"}else T.name=A.value,T.email=q.value,T.password=j.value,localStorage.setItem("teacher",JSON.stringify(T)),p(T),window.location.href="teacher.html";L.forEach((function(e){return e.value=""}))}var n}))},8006:function(e,t,n){var r=n(6324),o=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},9826:function(e,t,n){"use strict";var r=n(2109),o=n(2092).find,l=n(1223),a="find",s=!0;a in[]&&Array(1).find((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),l(a)}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,n,o,l){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],l=e[c][2];for(var s=!0,i=0;i<n.length;i++)(!1&l||a>=l)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(s=!1,l<a&&(a=l));s&&(e.splice(c--,1),t=o())}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,o,l]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,709:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,a=n[0],s=n[1],i=n[2],c=0;for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(i)var u=i(r);for(t&&t(n);c<a.length;c++)l=a[c],r.o(e,l)&&e[l]&&e[l][0](),e[a[c]]=0;return r.O(u)},n=self.webpackChunkjs_personal_projects=self.webpackChunkjs_personal_projects||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[470,914,709],(function(){return r(9299)}));o=r.O(o)}();
//# sourceMappingURL=index.487e4502.js.map