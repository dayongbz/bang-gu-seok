(window["webpackJsonpbang-gu-seok"]=window["webpackJsonpbang-gu-seok"]||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},21:function(e,t,a){},22:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(15),i=a.n(o),c=(a(21),a(22),a(3)),l=a(4),s=a.n(l),u=a(1),m=a.n(u);function f(e){var t=e.weather;return Object(r.useEffect)(function(){},[t]),n.a.createElement("div",{id:"weatherCardWrap"},n.a.createElement("p",null,"\ud604\uc7ac \ub0a0\uc528"),n.a.createElement("div",{id:"weatherCardMain"},n.a.createElement("div",{className:"weatherCard"},n.a.createElement("p",{className:"title"},"\uae30\uc628"),n.a.createElement("p",{className:"details"},t&&t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue<900&&t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue>-900&&"".concat(t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue," \u2103"),t?"":n.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&(t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue>=900||t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue<=-900)&&"\uad00\uce21\uc2e4\ud328")),n.a.createElement("div",{className:"weatherCard"},n.a.createElement("p",{className:"title"},"\ube44\uc624\ub098?\ub208\uc624\ub098?"),n.a.createElement("p",{className:"details"},t&&(t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue>=900||t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue<=-900)&&"\uad00\uce21\uc2e4\ud328",t?"":n.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&0===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&"\uc5d0\uc787! \uc548\uc624\ub124...",t&&1===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&"\ub098\uc774\uc2a4! \ube44\uc628\ub2e4!",t&&2===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&"\uc6b0\uc640~ \ube44\ub791 \ub208 \ub458\ub2e4!",t&&3===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&"\ub098\uc774\uc2a4! \ub208\uc628\ub2e4!",t&&4===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&"\uc624! \uc18c\ub098\uae30\ub2e4!")),n.a.createElement("div",{className:"weatherCard"},n.a.createElement("p",{className:"title"},"\uc2b5\ub3c4"),n.a.createElement("p",{className:"details"},t&&t.item.filter(function(e){return"REH"===e.category})[0].obsrValue<900&&t.item.filter(function(e){return"REH"===e.category})[0].obsrValue>-900&&"".concat(t.item.filter(function(e){return"REH"===e.category})[0].obsrValue," %"),t?"":n.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&(t.item.filter(function(e){return"REH"===e.category})[0].obsrValue>=900||t.item.filter(function(e){return"REH"===e.category})[0].obsrValue<=-900)&&"\uad00\uce21\uc2e4\ud328")),n.a.createElement("div",{className:"weatherCard"},n.a.createElement("p",{className:"title"},"\ud48d\uc18d"),n.a.createElement("p",{className:"details"},t&&t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue<900&&t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue>-900&&"".concat(t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue," m/s"),t?"":n.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&(t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue>=900||t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue<=-900)&&"\uad00\uce21\uc2e4\ud328")),n.a.createElement("div",{className:"weatherCard"},n.a.createElement("p",{className:"title"},"\uc9c0\uc5ed\uae30\uc900"),n.a.createElement("p",{className:"details"},t?"":n.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&t.dong)),n.a.createElement("div",{className:"weatherCard"},n.a.createElement("p",{className:"title"},"\ub0a0\uc9dc\uae30\uc900"),n.a.createElement("p",{className:"details"},t?"":n.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&"".concat("".concat(t.item[0].baseTime).substring(0,2)," \uc2dc"),t&&n.a.createElement("span",{className:"small"},t.date)))))}function d(e){e.weather;var t=e.score;return n.a.createElement("div",{id:"weatherMain"},n.a.createElement("p",null,"\uc624\ub298\uc758 \ub0a0\uc528\uc758 \uc810\uc218\ub294",n.a.createElement("span",{className:"bold"},t&&0!==t.length?(t.reduce(function(e,t){return e+t})/3).toFixed(2):"00.00"),"\uc810 \uc785\ub2c8\ub2e4!"))}var g=6371.00877,b=5,h=30,p=60,E=126,y=38,w=43,S=136;function M(){var e=Object(r.useState)(),t=Object(c.a)(e,2),a=t[0],o=t[1],i=Object(r.useState)(),l=Object(c.a)(i,2),u=l[0],M=l[1],V=Object(r.useState)(),H=Object(c.a)(V,2),N=H[0],v=H[1],Y=Object(r.useState)(!0),I=Object(c.a)(Y,2),P=I[0],T=I[1],A=Object(r.useState)([]),D=Object(c.a)(A,2),O=D[0],j=D[1];return Object(r.useEffect)(function(){function e(e,t){s.a.get("https://cors-anywhere.herokuapp.com/https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=".concat(t.toFixed(4),",").concat(+e.toFixed(4),"&orders=admcode&output=json"),{headers:{"X-NCP-APIGW-API-KEY-ID":"y6syzp2el8","X-NCP-APIGW-API-KEY":"oGUQ22oSWOEDf44apBf9QSZVKanLLauMgr5CnBDy"}}).then(function(a){o({latitude:+e.toFixed(4),longitude:+t.toFixed(4),dong:a.data.results[0].region.area3.name}),window.localStorage.setItem("position",JSON.stringify({latitude:+e.toFixed(4),longitude:+t.toFixed(4),dong:a.data.results[0].region.area3.name}))})}navigator.geolocation.getCurrentPosition(function(t){window.localStorage.getItem("position")?o(JSON.parse(window.localStorage.getItem("position"))):e(t.coords.latitude,t.coords.longitude)},function(t){window.localStorage.getItem("position")?o(JSON.parse(window.localStorage.getItem("position"))):e(37.645050399999995,126.786284)}),setInterval(function(){M({date:m.a.tz("Asia/Seoul").format("YYYY.MM.DD"),hour:m.a.tz("Asia/Seoul").format("hh"),minute:m.a.tz("Asia/Seoul").format("mm"),seconds:m.a.tz("Asia/Seoul").format("ss"),ampm:m.a.tz("Asia/Seoul").format("A")})},300)},[]),Object(r.useEffect)(function(){function e(){T(!1);var e,t=function(e,t){var a=Math.PI/180,r=g/b,n=h*a,o=p*a,i=E*a,c=y*a,l=Math.tan(.25*Math.PI+.5*o)/Math.tan(.25*Math.PI+.5*n);l=Math.log(Math.cos(n)/Math.cos(o))/Math.log(l);var s=Math.tan(.25*Math.PI+.5*n);s=Math.pow(s,l)*Math.cos(n)/l;var u=Math.tan(.25*Math.PI+.5*c);u=r*s/Math.pow(u,l);var m={};m.lat=e,m.lng=t;var f=Math.tan(.25*Math.PI+e*a*.5);f=r*s/Math.pow(f,l);var d=t*a-i;return d>Math.PI&&(d-=2*Math.PI),d<-Math.PI&&(d+=2*Math.PI),d*=l,m.x=Math.floor(f*Math.sin(d)+w+.5),m.y=Math.floor(u-f*Math.cos(d)+S+.5),m}(a.latitude,a.longitude),r=t.x,n=t.y;e=+m.a.tz("Asia/Seoul").format("mm")>=40?m.a.tz("Asia/Seoul").format("HH00"):+m.a.tz("Asia/Seoul").format("HH")<11?"0".concat(+m.a.tz("Asia/Seoul").format("HH00")-100):"".concat(+m.a.tz("Asia/Seoul").format("HH00")-100),s.a.get("https://cors-anywhere.herokuapp.com/http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastGrib?ServiceKey=j%2BeCKcismlZK%2BpaFNLrSPqSvTKVFFiiUqzXfxIXmNPl%2F4dWUGjlDL9wjnnAVFfGUGfJMK62lqnYwqLQe4r88fA%3D%3D&base_date=".concat(m.a.tz("Asia/Seoul").format("YYYYMMDD"),"&base_time=").concat(e,"&nx=").concat(r,"&ny=").concat(n,"&_type=json")).then(function(e){v({time:m.a.tz("Asia/Seoul").format("HHmm"),date:m.a.tz("Asia/Seoul").format("YYYYMMDD"),item:e.data.response.body.items.item,dong:a.dong}),window.localStorage.setItem("weather",JSON.stringify({time:m.a.tz("Asia/Seoul").format("HHmm"),date:m.a.tz("Asia/Seoul").format("YYYYMMDD"),item:e.data.response.body.items.item,dong:a.dong})),T(!0)}).catch(function(e){T(!0)})}a&&P&&(window.localStorage.getItem("weather")?N||v(JSON.parse(window.localStorage.getItem("weather"))):e(),N&&a&&(+m.a.tz("Asia/Seoul").format("YYYYMMDD")-+N.item[0].baseDate!==0?e():+m.a.tz("Asia/Seoul").format("HHmm")-+N.item[0].baseTime>=140&&e()))},[a,N,u,P]),Object(r.useEffect)(function(){var e=[];if(N){switch(N.item.filter(function(e){return"T1H"===e.category})[0].obsrValue<=900&&N.item.filter(function(e){return"T1H"===e.category})[0].obsrValue>=-900?N.item.filter(function(e){return"T1H"===e.category})[0].obsrValue>=16&&N.item.filter(function(e){return"T1H"===e.category})[0].obsrValue<=20?e[0]=100:N.item.filter(function(e){return"T1H"===e.category})[0].obsrValue<=40&&N.item.filter(function(e){return"T1H"===e.category})[0].obsrValue>20?e[0]=(100-5*Math.abs(N.item.filter(function(e){return"T1H"===e.category})[0].obsrValue-20))/10*9:N.item.filter(function(e){return"T1H"===e.category})[0].obsrValue<16&&N.item.filter(function(e){return"T1H"===e.category})[0].obsrValue>=-34?e[0]=100-2*(16-N.item.filter(function(e){return"T1H"===e.category})[0].obsrValue):e[0]=0:e[0]=50,N.item.filter(function(e){return"PTY"===e.category})[0].obsrValue){case 0:e[1]=100;break;case 1:e[1]=30;break;case 2:e[1]=50;break;case 3:e[1]=70;break;case 4:e[1]=0;break;default:e[1]=50}N.item.filter(function(e){return"REH"===e.category})[0].obsrValue>=40&&N.item.filter(function(e){return"REH"===e.category})[0].obsrValue<=70?e[2]=100:(N.item.filter(function(e){return"REH"===e.category})[0].obsrValue>=0&&N.item.filter(function(e){return"REH"===e.category})[0].obsrValue,e[2]=30)}j(e)},[N]),n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,"\ubc29\uad6c\uc11d"),n.a.createElement("div",{id:"weatherWrapper"},n.a.createElement(d,{weather:N,score:O}),n.a.createElement(f,{weather:N,score:O})))}var V=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(M,null))};i.a.render(n.a.createElement(V,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c8382b0a.chunk.js.map