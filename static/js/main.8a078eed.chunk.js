(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),o=n(8),i=n.n(o);n(15),n(16);function l(e,t){return document.querySelector(".i"+e).querySelector(".j"+t)}function u(e,t){return l(e,t).style.backgroundColor}function s(e,t){l(e,t).addEventListener("click",(function(){console.log(u(e,t)),"blue"===u(e,t)?l(e,t).style.backgroundColor="black":"black"===u(e,t)?l(e,t).style.backgroundColor="red":"red"===u(e,t)?l(e,t).style.backgroundColor="green":l(e,t).style.backgroundColor="blue"}))}var d,h,b=function(e,t){for(var n=0;n<e;++n)for(var r=0;r<t;++r)l(n,r).style.backgroundColor="blue",s(n,r)},j=n(2),f=n(3),v=n(7),p=n(6),m=n(5),O=n(4);function g(e,t){return function(e,t){return document.querySelector(".i"+e).querySelector(".j"+t)}(e,t).style.backgroundColor}var y=[],k=!1,S=[0,0,-1,1],x=[1,-1,0,0];function w(e,t){return e>=0&&t>=0&&e<d&&t<h&&"black"!==g(e,t)&&"yellow"!==g(e,t)}var C=new Set;var B,q,D=function(e,t,n){return d=e,h=t,console.log("DFS started"),function(e){for(var t=[e[0]];0!==t.length;){var n=t.pop(),r=Object(O.a)(n,2),a=r[0],c=r[1];if(!C.has(1e6*a+c)){if(C.add(1e6*a+c),a===e[1][0]&&c===e[1][1])return void(k=!0);y.push([a,c]);for(var o=0;o<4;++o)w(a+S[o],c+x[o])&&t.push([a+S[o],c+x[o]])}}}(n),y.splice(0,1),{path:y,canReach:k}};function R(e,t){return function(e,t){return document.querySelector(".i"+e).querySelector(".j"+t)}(e,t).style.backgroundColor}var E=[],F=!1,G=[0,0,-1,1],I=[1,-1,0,0];function N(e,t){return e>=0&&t>=0&&e<B&&t<q&&"black"!==R(e,t)&&"yellow"!==R(e,t)}var H=new Set;var T,J,z=function(e,t,n){return B=e,q=t,console.log("BFS started"),function(e){for(var t=[e[0]];0!==t.length;){var n=Object(O.a)(t[0],2),r=n[0],a=n[1];if(t.splice(0,1),!H.has(1e6*r+a)){if(H.add(1e6*r+a),r===e[1][0]&&a===e[1][1])return void(F=!0);E.push([r,a]);for(var c=0;c<4;++c)N(r+G[c],a+I[c])&&t.push([r+G[c],a+I[c]])}}}(n),E.splice(0,1),{path:E,canReach:F}};function L(e,t){return function(e,t){return document.querySelector(".i"+e).querySelector(".j"+t)}(e,t).style.backgroundColor}var P=[],W=!1,Y=[0,0,-1,1],A=[1,-1,0,0];function K(e,t){return e>=0&&t>=0&&e<T&&t<J&&"black"!==L(e,t)}var M=new Set,Q=new Set;var U=function(e,t,n){return T=e,J=t,console.log("Bidirectional Search started"),function(e){var t=[e[0],e[1]];for(M.add(1e6*e[0][0]+e[0][1]),Q.add(1e6*e[1][0]+e[1][1]);0!==t.length;){var n=Object(O.a)(t[0],2),r=n[0],a=n[1];if(t.splice(0,1),r===e[1][0]&&a===e[1][1]||P.push([r,a]),M.has(1e6*r+a)&&Q.has(1e6*r+a))return void(W=!0);var c=1;M.has(1e6*r+a)&&(c=0);for(var o=0;o<4;++o)if(K(r+Y[o],a+A[o])){if(0===c&&M.has(1e6*(r+Y[o])+a+A[o]))continue;if(1===c&&Q.has(1e6*(r+Y[o])+a+A[o]))continue;t.push([r+Y[o],a+A[o]]),0===c?M.add(1e6*(r+Y[o])+a+A[o]):Q.add(1e6*(r+Y[o])+a+A[o])}}}(n),P.splice(0,1),{path:P,canReach:W}};function V(e,t){return document.querySelector(".i"+e).querySelector(".j"+t)}function X(e,t){return V(e,t).style.backgroundColor}var Z,$=0,_=[],ee=!1;function te(){if($===_.length)return clearInterval(Z),$=0,void(!1===ee?alert("It was impossible to reach destination."):alert("Destination was reached successfully."));V(_[$][0],_[$][1]).style.backgroundColor="yellow",++$}var ne=function(e,t,n){var r=function(e,t){for(var n=[-1,-1],r=0;r<e;++r)for(var a=0;a<t;++a)"green"===X(r,a)?n[0]=[r,a]:"red"===X(r,a)&&(n[1]=[r,a]);return n}(t,n);if(-1!==r[0]&&-1!==r[1]){if("DFS"===e){var a=D(t,n,r);_=a.path,ee=a.canReach}else if("BFS"===e){a=z(t,n,r);_=a.path,ee=a.canReach}else if("BiDir"===e){a=U(t,n,r);_=a.path,ee=a.canReach}Z=setInterval(te,500)}else alert("Wrong selection.")},re=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this)).state={algo:"DFS",n:e.n,m:e.m},r.handleChange=r.handleChange.bind(Object(v.a)(r)),r.clickHandler=r.clickHandler.bind(Object(v.a)(r)),r}return Object(f.a)(n,[{key:"clickHandler",value:function(){ne(this.state.algo,this.state.n,this.state.m)}},{key:"handleChange",value:function(e){this.setState({algo:e.target.value})}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("lable",{children:["Choose an algorithm:",Object(r.jsx)("br",{}),Object(r.jsxs)("select",{onChange:this.handleChange,children:[Object(r.jsx)("option",{value:"DFS",children:"Depth-first search"}),Object(r.jsx)("option",{value:"BFS",children:"Breadth-first search"}),Object(r.jsx)("option",{value:"BiDir",children:"Bi-directional search"})]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:this.clickHandler,children:"Start"})]})}}]),n}(c.a.Component),ae=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).state={row:e.row,column:e.column},r}return Object(f.a)(n,[{key:"GenerateRow",value:function(){for(var e=[],t=0;t<this.state.column;++t)e.push(Object(r.jsx)("td",{className:"j"+t,id:"block"}));return e}},{key:"GenerateTable",value:function(){for(var e=[],t=0;t<this.state.row;++t)e.push([Object(r.jsx)("tr",{className:"i"+t,children:this.GenerateRow()})]);return e}},{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("table",{className:"Graph",children:this.GenerateTable()})})}}]),n}(c.a.Component),ce=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Blue:Empty cell"}),Object(r.jsx)("li",{children:"Black:Obstical"}),Object(r.jsx)("li",{children:"Red: Destination"}),Object(r.jsx)("li",{children:"Green: Starting point"}),Object(r.jsx)("li",{children:"Yellow: Path explored"})]}),Object(r.jsx)("p",{children:" Tap a cell multiple times to change its colour."}),Object(r.jsx)("p",{children:"There must be only one Starting point in the grid else the first Starting point with minimum ( i, j) will be taken as the Starting point."}),Object(r.jsx)("br",{})]})}}]),n}(c.a.Component),oe=Number(prompt("Enter number of rows required.")),ie=Number(prompt("Enter number of column required."));i.a.render(Object(r.jsx)(ce,{}),document.getElementById("head")),i.a.render(Object(r.jsx)(ae,{row:oe,column:ie}),document.getElementById("maze")),b(oe,ie),i.a.render(Object(r.jsx)(re,{n:oe,m:ie}),document.getElementById("controls"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8a078eed.chunk.js.map