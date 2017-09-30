!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,function(t,e){!function n(){t.length>0&&t.shift().apply(e||{},[n].concat(Array.prototype.slice.call(arguments,0)))}()});e.queue=i},function(t,e,n){"use strict";(function(t){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(){function t(t,e,n){return t=document.createElement(t),t.id=e,t.style.cssText=n,t}function e(e,n,i){var o=t("div",e,"padding:0 0 3px 3px;text-align:left;background:"+i),r=t("div",e+"Text","font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:"+n);for(r.innerHTML=e.toUpperCase(),o.appendChild(r),e=t("div",e+"Graph","width:74px;height:30px;background:"+n),o.appendChild(e),n=0;74>n;n++)e.appendChild(t("span","","width:1px;height:30px;float:left;opacity:0.9;background:"+i));return o}function n(t){for(var e=l.children,n=0;n<e.length;n++)e[n].style.display=n===t?"block":"none";h=t}function i(t,e){t.appendChild(t.firstChild).style.height=Math.min(30,30-30*e)+"px"}var o=self.performance&&self.performance.now?self.performance.now.bind(performance):Date.now,r=o(),a=r,s=0,h=0,l=t("div","stats","width:80px;opacity:0.9;cursor:pointer");l.addEventListener("mousedown",function(t){t.preventDefault(),n(++h%l.children.length)},!1);var c=0,u=1/0,d=0,f=e("fps","#0ff","#002"),p=f.children[0],m=f.children[1];l.appendChild(f);var g=0,y=1/0,v=0,f=e("ms","#0f0","#020"),w=f.children[0],x=f.children[1];if(l.appendChild(f),self.performance&&self.performance.memory){var b=0,_=1/0,k=0,f=e("mb","#f08","#201"),M=f.children[0],C=f.children[1];l.appendChild(f)}return n(h),{REVISION:14,domElement:l,setMode:n,begin:function(){r=o()},end:function(){var t=o();if(g=t-r,y=Math.min(y,g),v=Math.max(v,g),w.textContent=(0|g)+" MS ("+(0|y)+"-"+(0|v)+")",i(x,g/200),s++,t>a+1e3&&(c=Math.round(1e3*s/(t-a)),u=Math.min(u,c),d=Math.max(d,c),p.textContent=c+" FPS ("+u+"-"+d+")",i(m,c/100),a=t,s=0,void 0!==b)){var e=performance.memory.usedJSHeapSize,n=performance.memory.jsHeapSizeLimit;b=Math.round(9.54e-7*e),_=Math.min(_,b),k=Math.max(k,b),M.textContent=b+" MB ("+_+"-"+k+")",i(C,e/n)}return t},update:function(){r=this.end()}}};"object"===e(t)&&(t.exports=n)}).call(e,n(2)(t))},function(t,e,n){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(1),a=function(t){return t&&t.__esModule?t:{default:t}}(r),s=n(0),h=function(){function t(){i(this,t),this._images={},this.task=[]}return o(t,[{key:"load",value:function(t,e){for(var n=this,i=0;i<t.length;i++)!function(i){i==t.length-1?n.task.push(function(){n._images[t[i]]=new Image,n._images[t[i]].onload=function(){e()},n._images[t[i]].src=t[i]}):n.task.push(function(e){n._images[t[i]]=new Image,n._images[t[i]].onload=function(){e()},n._images[t[i]].src=t[i]})}(i);return(0,s.queue)(n.task,this)}},{key:"pick",value:function(t,e){var n=this;if(void 0!==this._images[t])return this._images[t];var i=[];i.push(t),n.load(i,e)}}]),t}(),l=function(){function t(e){i(this,t),this.stg=e.stg,this.context=e.stg.getContext("2d"),this.im=new h,this.store=null,this.init()}return o(t,[{key:"init",value:function(){this._width=this.stg.parentNode.clientWidth,this._height=this.stg.parentNode.clientHeight,this.dpr=window.devicePixelRatio||1,this.width=this.dpr*this._width,this.height=this.dpr*this._height,this.stg.style.width=this._width+"px",this.stg.style.height=this._height+"px",this.stg.width=~~this.width,this.stg.height=~~this.height,this.load(!1)}},{key:"dp",value:function(t){return~~t*this.dpr}},{key:"load",value:function(t){if(t){this.clear();var e=this.im.pick("../image/this.jpg");this.context.drawImage(e,0,0,e.width,e.height)}else{var n=~~this.context.measureText("Loading..").width*this.dpr,i=15*this.dpr,o=~~(this._width-n)/2,r=~~(this._height-i)/2;this.textAlign="center",this.context.font="400 "+15*this.dpr+"px 微软雅黑,Sans-Serif",this.context.fillStyle="#ccc",this.context.fillText("Loading..",o*this.dpr,r*this.dpr)}return!1}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.height;this.context.clearRect(t,e,n,i)}},{key:"update",value:function(t,e,n,i,o,r){this.store=[].slice.call(arguments,2),console.log(this.store,arguments,[].slice.call(arguments,1))}},{key:"draw",value:function(){}}]),t}(),c=new a.default;c.setMode(0),c.domElement.style.position="absolute",c.domElement.style.right="0px",c.domElement.style.top="0px",document.body.appendChild(c.domElement);var u=document.querySelector("#stage"),d=new l({stg:u});d.im.load(["../image/this.jpg"],function(){d.load(!0)}),window.addEventListener("resize",function(){d.init(),d.load(!0)})}]);