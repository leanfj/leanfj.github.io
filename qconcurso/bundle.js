!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){document.querySelector(".repositorios").classList.toggle("showrepos")}},function(e,t,n){"use strict";n(4),n(0),n(2),n(3)},function(e,t,n){"use strict";var r=document.querySelector(".brand"),o=document.querySelector(".info__lista"),i=document.querySelector("#js-link"),s=document.querySelector(".desafio__card");window.onload=function(){var e=new XMLHttpRequest;e.open("GET","https://api.github.com/users/leanfj",!0),e.onload=function(){if(200==e.status){var t=JSON.parse(e.responseText);r.innerHTML='\n          <img src="'+t.avatar_url+'" class="brand__img" alt="Foto Perfil">\n          <a href="'+t.html_url+'" class="brand__link" target="_blank">Visitar Perfil</a>\n        ',o.innerHTML='\n            <li class="info__lista__item">Repositórios: '+t.public_repos+'</li>\n            <li class="info__lista__item">Seguidores: '+t.followers+'</li>\n            <li class="info__lista__item">Seguindo: '+t.following+"</li>\n        ",i.setAttribute("href",t.html_url+"?tab=stars")}else s.innerHTML="<p>Erro ao carregar dados</p>"},e.send()}()},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));document.querySelector("#js-btn").addEventListener("click",function(){var e=new XMLHttpRequest;e.open("GET","https://api.github.com/users/leanfj/repos",!0),e.onload=function(){var t=JSON.parse(e.responseText),n=document.querySelector(".repositorios__lista"),r="";for(var o in t)r+='\n      <li class="repositorios__lista__item">\n      <a href="'+t[o].html_url+'" class="repositorios__lista__item__link" target="_blank">\n      '+t[o].name+"\n      </a>\n      </li>\n      ";n.innerHTML=r},e.send(),(0,r.default)()})},function(e,t){}]);