(this.webpackJsonpEmojiType=this.webpackJsonpEmojiType||[]).push([[0],{31:function(e,r,t){},35:function(e,r){},36:function(e,r,t){},37:function(e,r,t){"use strict";t.r(r);var n={};t.r(n),t.d(n,"setCurrentWord",(function(){return b})),t.d(n,"pushCurrentWord",(function(){return O})),t.d(n,"popLastWord",(function(){return p}));var c=t(1),u=t(8),o=t.n(u),a=t(7),i=(t(29),t(30),t(31),t(0)),s=Object(a.b)((function(e){return{text:e.main.text,currentWord:e.main.currentWord}}))((function(e){return Object(i.jsx)("div",{className:"TextView",children:e.text+e.currentWord+"\u258b"})})),j=t(9),d=t(14),h=t(4),l=t(39),b=function(e){return{type:"SET_CURRENT_WORD",payload:e}},O=function(){return{type:"PUSH_CURRENT_WORD"}},p=function(){return{type:"POP_LAST_WORD"}};function C(e){var r=Object(c.useRef)(e);return r.current=e,Object(c.useCallback)((function(){return r.current.apply(r,arguments)}),[])}function f(e,r,t,n){var u=Object(c.useRef)(e);u.current=e;var o=Object(c.useRef)(void 0),a=function(){n(o.current)};return[function(){a(),o.current=t((function(){return u.current()}),r)},a]}function x(e,r){return f(e,r,window.setTimeout,window.clearTimeout)}function w(e,r){return f(e,r,window.setInterval,window.clearInterval)}var v=t(16),W=new(t.n(v).a),m=t(33),S=m();function y(e){return e.map((function(e){if(Array.isArray(e))return new m.Point(e[0],e[1])}))}S.addGesture("smiley",y([[161,433],[161,435],[161,437],[161,441],[163,445],[165,450],[169,456],[174,462],[179,469],[190,480],[197,485],[210,492],[226,499],[230,500],[264,503],[267,503],[271,503],[275,503],[278,502],[281,501],[283,499],[286,497],[294,481],[295,476],[299,466],[302,460],[305,454],[308,447],[309,443],[311,440],[312,438],[313,437],[313,436],[313,435],[314,435],[314,435],[314,435]])),S.addGesture("frowny",y([[155,420],[155,419],[155,418],[155,417],[157,414],[159,412],[161,409],[164,407],[168,403],[172,400],[176,397],[181,395],[185,393],[190,391],[196,389],[200,387],[206,385],[210,384],[216,383],[220,382],[224,382],[228,381],[232,381],[236,381],[239,380],[242,380],[246,380],[249,380],[254,380],[257,380],[259,380],[262,381],[265,382],[268,383],[270,384],[271,385],[275,386],[278,388],[280,389],[283,391],[286,393],[288,394],[291,397],[293,400],[296,402],[298,405],[300,407],[302,409],[303,411],[306,415],[308,419],[308,420],[309,422],[310,425],[311,427],[312,428],[312,430],[313,431],[313,433],[313,434],[314,436],[314,437],[314,438],[314,440],[315,441],[315,442],[315,442],[315,442],[315,443],[315,443],[315,443]])),S.addGesture("open_smile",y([[147,370],[148,372],[154,377],[161,382],[165,385],[168,387],[174,390],[179,393],[183,396],[198,403],[203,405],[233,409],[247,410],[272,410],[278,409],[282,407],[287,405],[290,404],[293,401],[295,400],[300,396],[302,394],[304,392],[307,389],[308,387],[309,384],[321,363],[321,363],[321,363],[321,363],[321,364],[321,364],[321,364],[321,364],[321,365],[321,365],[321,365],[321,366],[321,366],[321,367],[320,368],[320,368],[320,369],[320,370],[319,371],[317,376],[316,379],[314,383],[312,389],[310,394],[307,401],[304,408],[301,414],[298,420],[296,424],[295,425],[293,428],[290,431],[286,434],[284,436],[282,437],[279,439],[275,440],[271,442],[267,443],[257,446],[250,448],[246,449],[237,451],[228,452],[216,453],[206,454],[202,454],[193,454],[185,453],[179,451],[172,447],[167,443],[161,437],[149,420],[147,415],[145,408],[143,400],[142,393],[142,391],[142,390],[142,389],[142,388],[142,388],[142,388]])),S.addGesture("tear",y([[224,368],[224,369],[224,370],[224,372],[224,373],[224,374],[224,376],[224,378],[224,380],[224,382],[224,385],[224,387],[224,389],[224,390],[225,392],[225,394],[225,395],[225,397],[225,399],[225,400],[225,402],[225,404],[225,406],[224,407],[224,409],[223,410],[221,414],[219,416],[217,418],[215,420],[210,426],[208,429],[206,432],[205,434],[204,437],[202,440],[201,442],[199,447],[198,449],[198,451],[197,455],[197,458],[197,461],[197,465],[197,468],[197,472],[198,474],[199,477],[200,480],[202,482],[204,485],[207,487],[210,488],[212,489],[215,489],[219,489],[222,489],[226,489],[239,489],[243,487],[246,486],[248,485],[250,483],[251,482],[252,482],[252,481],[252,480],[252,479],[252,477],[251,476],[250,475],[249,474],[245,470],[242,465],[240,461],[238,458],[236,452],[235,446],[234,439],[232,428],[231,419],[230,405],[230,396],[230,388],[230,380],[230,377],[230,372],[230,369],[230,366],[230,365],[230,364],[230,364]])),S.addGesture("up",y([[232,475],[232,472],[232,463],[232,453],[232,430],[232,415],[232,406],[232,390],[232,373],[232,367],[232,353],[232,341],[232,332],[232,323],[232,318],[232,314],[232,308]]));var R=new(t(34))("en_US",!1,!1,{dictionaryPath:"dictionaries"}),g=n,T=Object(a.b)((function(e){return{currentWord:e.main.currentWord}}),g)((function(e){var r=Object(c.useState)(!0),t=Object(h.a)(r,2),n=t[0],u=t[1],o=Object(c.useState)(!1),a=Object(h.a)(o,2),s=a[0],b=a[1],O=Object(c.useState)(!1),p=Object(h.a)(O,2),f=p[0],v=p[1],m=Object(c.useState)(!1),g=Object(h.a)(m,2),T=g[0],k=g[1],_=Object(c.useState)(""),P=Object(h.a)(_,2),D=P[0],E=P[1],N=Object(c.useState)(!1),L=Object(h.a)(N,2),A=L[0],U=L[1],G=Object(c.useRef)(null),M=Object(c.useRef)(!1),I=Object(c.useRef)(!1),J=Object(c.useRef)(!1),q=Object(c.useRef)([]),B=Object(c.useRef)(0),H=C((function(r){var t=r.char,n=r.display,c=Object(d.a)(r,["char","display"]);return Object(i.jsx)(l.a,Object(j.a)(Object(j.a)({},c),{},{outline:!0,onTouchStart:function(e){c.onTouchStart&&(c.onTouchStart(e),e.defaultPrevented)||(G.current=t)},onClick:function(r){if((!c.onClick||(c.onClick(r),!r.defaultPrevented))&&!(B.current>100)){var n=G.current?G.current:t;G.current=null;var o="";if(/\s/.test(e.currentWord.slice(-1))&&!/\s/.test(n))e.pushCurrentWord(),e.setCurrentWord(n),U(!1);else{var a=e.currentWord;if(" "===n&&!A&&a.trim()===a&&!R.check(a)){var i=R.suggest(a,1);i.length>0&&(o=a+n,a=i[0])}e.setCurrentWord(a+n)}u(!1),v(" "===n),E(o)}},children:n||t}))})),X=C((function(e){var r=e.upperChar,t=e.lowerChar,c=Object(d.a)(e,["upperChar","lowerChar"]);return Object(i.jsx)(H,Object(j.a)({char:n||s?r:t},c))})),Y=C((function(r){var t=r.char;return Object(i.jsx)(l.a,{outline:!0,onClick:function(){e.setCurrentWord(e.currentWord.slice(0,-1)+t+(T?"":" ")),u(!T&&("."===t||"?"===t||"!"===t)),""!==D&&E(D.slice(0,-1)+t+(T?"":" ")),v(!1)},children:t})})),z=function(){e.currentWord.length?(""!==D&&(" "===e.currentWord.slice(-1)?E(D.slice(0,-1)):(E(""),U(!0))),e.setCurrentWord(W.splitGraphemes(e.currentWord).slice(0,-1).join(""))):(e.popLastWord(),U(!1)),u(!1)},V=w((function(){z()}),50),$=Object(h.a)(V,2),F=$[0],K=$[1],Q=x((function(){z(),M.current=!0,F()}),500),Z=Object(h.a)(Q,2),ee=Z[0],re=Z[1],te=w((function(){e.setCurrentWord(e.currentWord+" "),u(!1)}),50),ne=Object(h.a)(te,2),ce=ne[0],ue=ne[1],oe=x((function(){e.setCurrentWord(e.currentWord+" "),u(!1),I.current=!0,ce()}),500),ae=Object(h.a)(oe,2),ie=ae[0],se=ae[1];return Object(i.jsxs)("div",{className:"TypingInterface",onMouseDown:function(){J.current=!0,q.current=[],B.current=0,document.addEventListener("mouseup",(function(){if(J.current=!1,B.current>100){console.log(JSON.stringify(q.current));var r=S.recognize(y(q.current)).Name;if(console.log(r),"No match."!==r){var t={smiley:String.fromCodePoint(128578),frowny:String.fromCodePoint(128549),open_smile:String.fromCodePoint(128516),tear:String.fromCodePoint(128514),up:String.fromCodePoint(128077),circle:String.fromCodePoint(128558)}[r];/\s/.test(e.currentWord.slice(-1))?(e.pushCurrentWord(),e.setCurrentWord(t),U(!1)):e.setCurrentWord(e.currentWord+t),u(!1),v(!1),U(!0)}}}),{once:!0})},onMouseMove:function(e){if(J.current){if(q.current.length){var r=q.current.slice(-1)[0],t=e.clientX-r[0],n=e.clientY-r[1];B.current+=Math.sqrt(t*t+n*n)}q.current.push([e.clientX,e.clientY])}},children:[Object(i.jsxs)("div",{id:"top_bar",children:[Object(i.jsx)(l.a,{outline:!0,id:"switch_keyboard",onClick:function(){return k(!T)},children:T?"ABC":"123"}),Object(i.jsx)("div",{id:"word_container",onClick:function(){""!==D&&(e.setCurrentWord(D),E(""),U(!0))},children:Object(i.jsx)("span",{id:"word",dir:"ltr",className:""!==D?"auto-corrected":"",children:e.currentWord.replaceAll("\n"," ")+"\u258b"})}),Object(i.jsx)(H,{char:"\n",display:"\u23ce",id:"enter"})]}),T?Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(H,{char:"7"}),Object(i.jsx)(H,{char:"8"}),Object(i.jsx)(H,{char:"9"}),Object(i.jsx)(H,{char:"@"}),Object(i.jsx)(H,{char:"-"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(H,{char:"4"}),Object(i.jsx)(H,{char:"5"}),Object(i.jsx)(H,{char:"6"}),Object(i.jsx)(H,{char:"$"}),Object(i.jsx)(H,{char:"%"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(H,{char:"1"}),Object(i.jsx)(H,{char:"2"}),Object(i.jsx)(H,{char:"3"}),Object(i.jsx)(H,{char:"'",onClick:function(){return k(!1)}}),Object(i.jsx)(H,{char:"/"})]})]}):Object(i.jsxs)("div",{id:"qwerty",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(X,{upperChar:"Q",lowerChar:"q"}),Object(i.jsx)(X,{upperChar:"W",lowerChar:"w"}),Object(i.jsx)(X,{upperChar:"E",lowerChar:"e"}),Object(i.jsx)(X,{upperChar:"R",lowerChar:"r"}),Object(i.jsx)(X,{upperChar:"T",lowerChar:"t"}),Object(i.jsx)(X,{upperChar:"Y",lowerChar:"y"}),Object(i.jsx)(X,{upperChar:"U",lowerChar:"u"}),Object(i.jsx)(X,{upperChar:"I",lowerChar:"i"}),Object(i.jsx)(X,{upperChar:"O",lowerChar:"o"}),Object(i.jsx)(X,{upperChar:"P",lowerChar:"p"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(X,{upperChar:"A",lowerChar:"a"}),Object(i.jsx)(X,{upperChar:"S",lowerChar:"s"}),Object(i.jsx)(X,{upperChar:"D",lowerChar:"d"}),Object(i.jsx)(X,{upperChar:"F",lowerChar:"f"}),Object(i.jsx)(X,{upperChar:"G",lowerChar:"g"}),Object(i.jsx)(X,{upperChar:"H",lowerChar:"h"}),Object(i.jsx)(X,{upperChar:"J",lowerChar:"j"}),Object(i.jsx)(X,{upperChar:"K",lowerChar:"k"}),Object(i.jsx)(X,{upperChar:"L",lowerChar:"l"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(X,{upperChar:"Z",lowerChar:"z"}),Object(i.jsx)(X,{upperChar:"X",lowerChar:"x"}),Object(i.jsx)(X,{upperChar:"C",lowerChar:"c"}),Object(i.jsx)(X,{upperChar:"V",lowerChar:"v"}),Object(i.jsx)(X,{upperChar:"B",lowerChar:"b"}),Object(i.jsx)(X,{upperChar:"N",lowerChar:"n"}),Object(i.jsx)(X,{upperChar:"M",lowerChar:"m"})]})]}),Object(i.jsxs)("div",{children:[T?Object(i.jsx)(H,{char:"0"}):Object(i.jsx)(l.a,{outline:!n&&!s,id:"shift",onClick:s?function(){return b(!1)}:function(){return u(!n)},onDoubleClick:function(){b(!0),u(!1)},children:s?"\u21ea":"\u21e7"}),f?Object(i.jsxs)("span",{id:"punctuation",children:[Object(i.jsx)(Y,{char:"."}),Object(i.jsx)(Y,{char:","}),Object(i.jsx)(Y,{char:"?"}),Object(i.jsx)(Y,{char:"!"})]}):Object(i.jsxs)("span",{children:[Object(i.jsx)(H,{char:" ",display:"\u23b5",id:"space",onClick:function(e){I.current&&e.preventDefault()},onTouchStart:function(e){e.preventDefault(),I.current=!1,ie(),document.addEventListener("touchend",(function(){se(),ue()}),{once:!0})},onMouseDown:function(){I.current=!1,ie(),document.addEventListener("mouseup",(function(){se(),ue()}),{once:!0})}}),Object(i.jsx)(l.a,{outline:!0,id:"backspace",onClick:function(){M.current||z()},onTouchStart:function(e){e.preventDefault(),M.current=!1,ee(),document.addEventListener("touchend",(function(){re(),K()}),{once:!0})},onMouseDown:function(){M.current=!1,ee(),document.addEventListener("mouseup",(function(){re(),K()}),{once:!0})},children:"\u232b"})]})]})]})})),k=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(s,{}),Object(i.jsx)(T,{})]})},_=(t(36),t(6)),P=t(18),D=t(19),E=Object(D.a)((function(e,r){switch(r.type){case"SET_CURRENT_WORD":return void(e.currentWord=r.payload);case"PUSH_CURRENT_WORD":return e.text+=e.currentWord,void(e.currentWord="");case"POP_LAST_WORD":var t=e.text.match(/[^\s]*[\s]*$/g);return void(t&&(e.currentWord=t[0].slice(0,-1),e.text=e.text.slice(0,-t[0].length)))}}),{text:"",currentWord:""}),N=Object(_.combineReducers)({main:E}),L=Object(_.createStore)(N,Object(P.composeWithDevTools)());console.log("Running in production mode"),o.a.render(Object(i.jsx)(a.a,{store:L,children:Object(i.jsx)(k,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.87d030ef.chunk.js.map