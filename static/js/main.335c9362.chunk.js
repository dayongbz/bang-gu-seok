(window["webpackJsonpbang-gu-seok"]=window["webpackJsonpbang-gu-seok"]||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},21:function(e,t,a){},22:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(15),i=a.n(r),c=(a(21),a(22),a(3)),s=a(4),l=a.n(s),u=a(2),d=a.n(u);function m(e){e.position;var t=e.time;return n.a.createElement("div",{id:"weatherTimePositionWrapper"},n.a.createElement("div",{id:"weatherTime"},n.a.createElement("p",{id:"weatherDate"},t.date),n.a.createElement("p",null,t.hour,n.a.createElement("span",{className:"small"},":"),t.minute,n.a.createElement("span",{className:"small"},":"),t.seconds,n.a.createElement("span",{className:"small"},t.ampm))))}function h(e){var t=e.weather;return Object(o.useEffect)(function(){},[t]),n.a.createElement("div",{id:"weatherImage"})}m.defaultProps={position:{latitude:37.6314,longitude:126.8345,dong:"\ud654\uc8152\ub3d9"},time:{date:"2019.01.01",hour:"00",minute:"00",seconds:"00",ampm:"AM"}};var p=6371.00877,g=5,f=30,w=60,M=126,S=38,v=43,E=136;function I(){var e=Object(o.useState)(),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(o.useState)(),s=Object(c.a)(i,2),u=s[0],I=s[1],P=Object(o.useState)(),b=Object(c.a)(P,2),y=b[0],A=b[1];return Object(o.useEffect)(function(){navigator.geolocation.getCurrentPosition(function(e){window.localStorage.getItem("position")?r(JSON.parse(window.localStorage.getItem("position"))):function(e){l.a.get("https://cors-anywhere.herokuapp.com/https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=".concat(+e.coords.longitude.toFixed(4),",").concat(+e.coords.latitude.toFixed(4),"&orders=admcode&output=json"),{headers:{"X-NCP-APIGW-API-KEY-ID":"y6syzp2el8","X-NCP-APIGW-API-KEY":"oGUQ22oSWOEDf44apBf9QSZVKanLLauMgr5CnBDy"}}).then(function(t){r({latitude:+e.coords.latitude.toFixed(4),longitude:+e.coords.longitude.toFixed(4),dong:t.data.results[0].region.area3.name}),window.localStorage.setItem("position",JSON.stringify({latitude:+e.coords.latitude.toFixed(4),longitude:+e.coords.longitude.toFixed(4),dong:t.data.results[0].region.area3.name}))})}(e)}),setInterval(function(){I({date:d.a.tz("Asia/Seoul").format("YYYY.MM.DD"),hour:d.a.tz("Asia/Seoul").format("hh"),minute:d.a.tz("Asia/Seoul").format("mm"),seconds:d.a.tz("Asia/Seoul").format("ss"),ampm:d.a.tz("Asia/Seoul").format("A")})},100)},[]),Object(o.useEffect)(function(){a&&(window.localStorage.getItem("weather")?y||A(JSON.parse(window.localStorage.getItem("weather"))):function(){var e=function(e,t){var a=Math.PI/180,o=p/g,n=f*a,r=w*a,i=M*a,c=S*a,s=Math.tan(.25*Math.PI+.5*r)/Math.tan(.25*Math.PI+.5*n);s=Math.log(Math.cos(n)/Math.cos(r))/Math.log(s);var l=Math.tan(.25*Math.PI+.5*n);l=Math.pow(l,s)*Math.cos(n)/s;var u=Math.tan(.25*Math.PI+.5*c);u=o*l/Math.pow(u,s);var d={};d.lat=e,d.lng=t;var m=Math.tan(.25*Math.PI+e*a*.5);m=o*l/Math.pow(m,s);var h=t*a-i;return h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI),h*=s,d.x=Math.floor(m*Math.sin(h)+v+.5),d.y=Math.floor(u-m*Math.cos(h)+E+.5),d}(a.latitude,a.longitude),t=e.x,o=e.y;l.a.get("https://cors-anywhere.herokuapp.com/http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData?ServiceKey=j%2BeCKcismlZK%2BpaFNLrSPqSvTKVFFiiUqzXfxIXmNPl%2F4dWUGjlDL9wjnnAVFfGUGfJMK62lqnYwqLQe4r88fA%3D%3D&base_date=".concat(d.a.tz("Asia/Seoul").format("YYYYMMDD"),"&base_time=0500&nx=").concat(t,"&ny=").concat(o,"&_type=json")).then(function(e){A(e.data.response.body.items.item),window.localStorage.setItem("weather",JSON.stringify({time:d.a.tz("Asia/Seoul").format("HH:mm"),date:d.a.tz("Asia/Seoul").format("YYYY.MM.DD"),item:e.data.response.body.items.item}))})}())},[a,u,y]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"weatherWrapper"},n.a.createElement(h,{weather:y}),n.a.createElement(m,{position:a,time:u})))}var P=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"background"}),n.a.createElement("div",{id:"unsplashPhoto"},n.a.createElement("p",null,"Photo by",n.a.createElement("br",null),n.a.createElement("a",{target:"_blank",href:"https://unsplash.com/@enrapture"},"Enrapture Captivating Media"),n.a.createElement("br",null))),n.a.createElement(I,null))};i.a.render(n.a.createElement(P,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.335c9362.chunk.js.map