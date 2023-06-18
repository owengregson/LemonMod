// ==UserScript==
// @name         ! LemonMod v3.0 - SOURCE !
// @namespace    https://lemonmod.com/
// @author       LemonFlux
// @license      Apache-2.0
// @description  LemonMod is a MooMoo.io mod designed to be the latest and greatest mod which towers over all others. LemonMod is packed with the latest features and the best autoheal out there.
// @version      v3.0
// @require      https://lemonmod.com/scripts/msgpack/msgpack.js
// @require      https://lemonmod.com/scripts/jquery/jquery.min.js
// @require      https://lemonmod.com/scripts/jquery/jquery-ui.min.js
// @icon         https://lemonmod.com/LemonMod.png
// @match        *://*.moomoo.io/*
// ==/UserScript==
//
/*

888                                              888b     d888               888                .d8888b.       .d8888b.
888                                              8888b   d8888               888               d88P  Y88b     d88P  Y88b
888                                              88888b.d88888               888                    .d88P     888    888
888      .d88b.  88888b.d88b.   .d88b.  88888b.  888Y88888P888  .d88b.   .d88888      888  888     8888"      888    888
888     d8P  Y8b 888 "888 "88b d88""88b 888 "88b 888 Y888P 888 d88""88b d88" 888      888  888      "Y8b.     888    888
888     88888888 888  888  888 888  888 888  888 888  Y8P  888 888  888 888  888      Y88  88P 888    888     888    888
888     Y8b.     888  888  888 Y88..88P 888  888 888   "   888 Y88..88P Y88b 888       Y8bd8P  Y88b  d88P d8b Y88b  d88P
88888888 "Y8888  888  888  888  "Y88P"  888  888 888       888  "Y88P"   "Y88888        Y88P    "Y8888P"  Y8P  "Y8888P"



                                 ("O_)
                                / `-/
                               /-. /
                              /   )
                             /   /
                _           /-. /
               (_)"-._     /   )           888                     888                                               8888888888 888
                 "-._ "-'""( )/            888                     888                                               888        888
                     "-/"-._" `.           888                     888                                               888        888
                      /     "-.'._         88888b.  888  888       888       .d88b.  88888b.d88b.   .d88b.  88888b.  8888888    888 888  888 888  888
                     /\       /-._"-._     888 "88b 888  888       888      d8P  Y8b 888 "888 "88b d88""88b 888 "88b 888        888 888  888 `Y8bd8P'
      _,---...__    /  ) _,-"/    "-(_)    888  888 888  888       888      88888888 888  888  888 888  888 888  888 888        888 888  888   X88K
  ___<__(|) _   ""-/  / /   /              888 d88P Y88b 888       888      Y8b.     888  888  888 Y88..88P 888  888 888        888 Y88b 888 .d8""8b.
   '  `----' ""-.   \/ /   /               88888P"   "Y88888       88888888  "Y8888  888  888  888  "Y88P"  888  888 888        888  "Y88888 888  888
                 )  ] /   /                              888
         ____..-'   //   /                    )     Y8b d88P
     ,-""      __.,'/   /   ___               /       "Y88P"
    /    ,--""/  / /   /,-""   """-.        '/
   [    (    /  / /   /  ,.---,_   `._   ,-,'
    \    `-./  / /   /  /       `-._  """ ,-
     `-._  /  / /   /_,'            ""--"
         "/  / /   /"
         /  / /   /
        /  / /   /
       /  |,'   /
      :   /    /
      [  /   ,'
      | /  ,'
      |/,-'
      P'

*/
let Bundle = () => {
};
let removals = 0;
let observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		mutation.addedNodes.forEach(function(node) {
			if (node.nodeName == "SCRIPT") {
				if (node.src == window.location.protocol + "//" + window.location.hostname + "/bundle.js"
					|| /(cookiepro.com)/.exec(node.src)) {
					removals++;
					try {
						node.parentNode.removeChild(node);
					} catch(e) {
						node.remove();
					};
					removals == 2 && (observer.disconnect());
				};
			};
		});
	});
});
observer.observe(document, {
	attributes: true,
	characterData: true,
	childList: true,
	subtree: true
});
let bundled = false;
async function fetchAsyncURL (url) {var response = await fetch(url);var data = await response.json();return data;}
async function logApi(e) {const WBresponse = await fetch(e);const dataResp = await WBresponse.json();}
function checkDev(){if(getCookie("loggedInAsDev")=="true"||getCookie("loggedInAsDev")==true||getCookie("loggedInAsDev")=="1"||getCookie("loggedInAsDev")==1){window.isDev=true;var te=document.getElementById("partyButton");te.style.cursor="";te.getElementsByTagName("span");te.textContent="Logged In! ";te.innerHTML+='<i class="material-icons" style="font-size:30px;vertical-align:middle"></i>';var oe=document.getElementById("partyButton");oe.style.color="rgb(255, 255, 255)";oe.setAttribute("onclick",`alert('Alr' + 'ea' + 'dy' + ' l' + 'og' + 'ged' + ' i' + 'n! ')`)}};setInterval(()=>{if(document.getElementById("partyButton").style.color == "rgb(255, 255, 255)") {window.isDev = 1;setCookie("loggedInAsDev", "true", 365);}},900);
function hasSpawned(t){window.hasSpawned = false};hasSpawned(null);
function botsAttack(t){window.botsAttack = false};botsAttack(null);
function spamHealFlagger(t){window.spamHealFlag = 0};spamHealFlagger(null);
function globalReload(e){window.globalReload = 160};globalReload(null);
function defaultParse(ini){window.doneParsing = false;}defaultParse(null);
function eraseCookie(name){document.cookie = name+'=; Max-Age=-99999999;';}
function setCookie(name,value,days){var expires = "";if (days) {var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toUTCString();}document.cookie=name+"="+(value || "")+expires+"; path=/; domain=moomoo.io";}
function getCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++) {var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ) == 0)return c.substring(nameEQ.length,c.length);}return null}setInterval(() => {try{myPlayer.shameCount = parseInt(getCookie("MYshame"));}catch(e){}}, 3);
function installVisuals(){if(getCookie("bundle")==null||getCookie("usingVisuals")==null||getCookie("usingFinalBundle")==null){setInterval(()=>{try{document.body.innerHTML=""}catch(e){}},100);if(!bundled){alert("Please UPDATE/install the LemonMod Visuals to use this mod!");setCookie("bundle",1,365);window.open("https://lemonmod.com/bundle/latest/bundle.user.js")}bundled=true}}setTimeout(()=>{installVisuals()},500);
function parseSettings(cache){try {var meSett = JSON.parse(atob(cache));var checkItems = meSett["checkItem"];var listItems = meSett["listItem"];var test = 0;for(var keye in meSett) {test = test +1;if(test == 1) {checkItems = meSett[keye];} else {listItems = meSett[keye]}}for(var typeItem in checkItems) {eval(`try {document.getElementById("${typeItem}").checked = ${checkItems[typeItem]}} catch(e) {}try {${typeItem} = ${checkItems[typeItem]}} catch(e) {}`);}for(var listItem in listItems) {eval(`try {document.getElementById('${listItem}').value = '${listItems[listItem]}';} catch(e) {}try {${listItem} = '${listItems[listItem]}';} catch(e) {}`);}window.doneParsing = true;} catch(e) {eraseCookie("modSettings");if(getCookie("modSettings")!=null){alert("There was an error parsing your saved settings.\nThey were reset to default as a result,\nSorry for the inconvenience!");}window.doneParsing = true;}}
function aim(x, y){document.getElementById("gameCanvas").dispatchEvent(new MouseEvent("mousemove", {clientX: x,clientY: y}))}
function checkName(){let qw = document.getElementById("nameInput").value.toLowerCase().replaceAll(' ','').replaceAll('_','');let validName = true;if(qw=="dojacat"||qw =="d0jacat"||qw=="doj4cat"||qw =="dojac4t"||qw =="d0j4cat"||qw =="doj4c4t"||qw =="d0jac4t"||qw =="d0j4c4t"||qw =="dojac4t"||qw=="dojaacat"||qw=="dojaaacat"||qw=="dojacaat"||qw=="dojaacaat") {if(!debugMode&&!window.isDev){let validName = false;document.getElementById("nameInput").value = 'unknown';}}else if(qw=="lemonflux"||qw=="l3m0n"||qw=="l3m0nflux"||qw=="l3monflux"||qw=="lem0nflux"||qw=="lemonfluxx"||qw=="l3monfluxx"||qw=="l3m0nfluxx"||qw=="lem0nfluxx"||qw=="lemonflx"||qw=="l3m0nflx"||qw=="l3monflx"||qw=="lem0nflx"||qw=="l3m0nflxx"||qw=="l3monflxx"||qw=="lem0nflxx") {if(!debugMode&&!window.isDev){let validName = false;document.getElementById("nameInput").value = 'unknown';}}else{let validName = true;}if(debugMode||window.isDev){validName = true;}return validName;}setInterval(function clearName() {if(hasSpawned) {clearInterval(clearName);}checkName();}, 20);
function initKeystrokes(){var one=document.createElement("div");one.id="onekey";document.body.prepend(one);document.getElementById("onekey").style.position="absolute";document.getElementById("onekey").style.textAlign="center";document.getElementById("onekey").style.color="rgba(256, 256, 256, 0.7)";document.getElementById("onekey").style.display="block";document.getElementById("onekey").style.width="80px";document.getElementById("onekey").style.height="60px";document.getElementById("onekey").style.left="0.4%";document.getElementById("onekey").style.top="1.2%";document.getElementById("onekey").style.backgroundColor="rgba(0,0,0,0.4)";document.getElementById("onekey").innerHTML="";document.getElementById("onekey").style.fontSize="275%";document.getElementById("onekey").innerHTML="Q";document.body.append(one);var two=document.createElement("div");two.id="twokey";document.body.prepend(two);document.getElementById("twokey").style.position="absolute";document.getElementById("twokey").style.textAlign="center";document.getElementById("twokey").style.color="rgba(256, 256, 256, 0.7)";document.getElementById("twokey").style.display="block";document.getElementById("twokey").style.width="80px";document.getElementById("twokey").style.height="60px";document.getElementById("twokey").style.left="6.2%";document.getElementById("twokey").style.top="1.2%";document.getElementById("twokey").style.backgroundColor="rgba(0,0,0,0.4)";document.getElementById("twokey").innerHTML="";document.getElementById("twokey").style.fontSize="275%";document.getElementById("twokey").innerHTML="W";document.body.append(two);var q=document.createElement("div");q.id="qkey";document.body.prepend(q);document.getElementById("qkey").style.position="absolute";document.getElementById("qkey").style.textAlign="center";document.getElementById("qkey").style.color="rgba(256, 256, 256, 0.7)";document.getElementById("qkey").style.display="block";document.getElementById("qkey").style.width="80px";document.getElementById("qkey").style.height="60px";document.getElementById("qkey").style.left="1.2%";document.getElementById("qkey").style.top="9.5%";document.getElementById("qkey").style.backgroundColor="rgba(0,0,0,0.4)";document.getElementById("qkey").innerHTML="";document.getElementById("qkey").style.fontSize="275%";document.getElementById("qkey").innerHTML="A";document.body.append(q);var w=document.createElement("div");w.id="wkey";document.body.prepend(w);document.getElementById("wkey").style.position="absolute";document.getElementById("wkey").style.textAlign="center";document.getElementById("wkey").style.color="rgba(256, 256, 256, 0.7)";document.getElementById("wkey").style.display="block";document.getElementById("wkey").style.width="80px";document.getElementById("wkey").style.height="60px";document.getElementById("wkey").style.left="7%";document.getElementById("wkey").style.top="9.5%";document.getElementById("wkey").style.backgroundColor="rgba(0,0,0,0.4)";document.getElementById("wkey").innerHTML="";document.getElementById("wkey").style.fontSize="275%";document.getElementById("wkey").innerHTML="S";document.body.append(w);var three=document.createElement("div");three.id="threekey";document.body.prepend(three);document.getElementById("threekey").style.position="absolute";document.getElementById("threekey").style.textAlign="center";document.getElementById("threekey").style.color="rgba(256, 256, 256, 0.7)";document.getElementById("threekey").style.display="block";document.getElementById("threekey").style.width="80px";document.getElementById("threekey").style.height="60px";document.getElementById("threekey").style.left="12.1%";document.getElementById("threekey").style.top="1.2%";document.getElementById("threekey").style.backgroundColor="rgba(0,0,0,0.4)";document.getElementById("threekey").innerHTML="";document.getElementById("threekey").style.fontSize="275%";document.getElementById("threekey").innerHTML="V";document.body.append(three);var four=document.createElement("div");four.id="fourkey";document.body.prepend(four);document.getElementById("fourkey").style.position="absolute";document.getElementById("fourkey").style.textAlign="center";document.getElementById("fourkey").style.color="rgba(256, 256, 256, 0.7)";document.getElementById("fourkey").style.display="block";document.getElementById("fourkey").style.width="80px";document.getElementById("fourkey").style.height="60px";document.getElementById("fourkey").style.left="17.9%";document.getElementById("fourkey").style.top="1.2%";document.getElementById("fourkey").style.backgroundColor="rgba(0,0,0,0.4)";document.getElementById("fourkey").innerHTML="";document.getElementById("fourkey").style.fontSize="275%";document.getElementById("fourkey").innerHTML="R";document.body.append(four);var e=document.createElement("div");e.id="ekey";document.body.prepend(e);document.getElementById("ekey").style.position="absolute";document.getElementById("ekey").style.textAlign="center";document.getElementById("ekey").style.color="rgba(256, 256, 256, 0.7)";document.getElementById("ekey").style.display="block";document.getElementById("ekey").style.width="80px";document.getElementById("ekey").style.height="60px";document.getElementById("ekey").style.left="12.8%";document.getElementById("ekey").style.top="9.5%";document.getElementById("ekey").style.backgroundColor="rgba(0,0,0,0.4)";document.getElementById("ekey").innerHTML="";document.getElementById("ekey").style.fontSize="275%";document.getElementById("ekey").innerHTML="D ";document.body.append(e);var r=document.createElement("div");r.id="rkey";document.body.prepend(r);document.getElementById("rkey").style.position="absolute";document.getElementById("rkey").style.textAlign="center";document.getElementById("rkey").style.color="rgba(256, 256, 256, 0.7)";document.getElementById("rkey").style.display="block";document.getElementById("rkey").style.width="80px";document.getElementById("rkey").style.height="60px";document.getElementById("rkey").style.left="18.5%";document.getElementById("rkey").style.top="9.5%";document.getElementById("rkey").style.backgroundColor="rgba(0,0,0,0.4)";document.getElementById("rkey").innerHTML="";document.getElementById("rkey").style.fontSize="275%";document.getElementById("rkey").innerHTML="F";document.body.append(r);var space=document.createElement("div");space.id="spacekey";document.body.prepend(space);document.getElementById("spacekey").style.position="absolute";document.getElementById("spacekey").style.textAlign="center";document.getElementById("spacekey").style.color="rgba(256, 256, 256, 0.7)";document.getElementById("spacekey").style.display="block";document.getElementById("spacekey").style.width="415px";document.getElementById("spacekey").style.height="60px";document.getElementById("spacekey").style.left="2%";document.getElementById("spacekey").style.top="17.8%";document.getElementById("spacekey").style.backgroundColor="rgba(0,0,0,0.4)";document.getElementById("spacekey").innerHTML="";document.getElementById("spacekey").style.fontSize="275%";document.getElementById("spacekey").innerHTML="";document.body.append(space);var wkey=false;var skey=false;var akey=false;var dkey=false;var qkey=false;var spacekey=false;var threekey=false;var rkey=false;var fkey=false;var onekey=false;var twokey=false;var ekey=false;var fourkey=false;function kkeyPressed(e){document.getElementById(e).style.backgroundColor="rgba(256, 256, 256, 0.7)"}function kkeyUnpressed(e){document.getElementById(e).style.backgroundColor="rgba(256, 256, 256, 0.65)";setTimeout(()=>{if(!parseInt(e)){document.getElementById(e).style.backgroundColor="rgba(256, 256, 256, 0.6)"}else{return}setTimeout(()=>{if(!parseInt(e)){document.getElementById(e).style.backgroundColor="rgba(256, 256, 256, 0.5)"}else{return}setTimeout(()=>{if(!parseInt(e)){document.getElementById(e).style.backgroundColor="rgba(256, 256, 256, 0.55)"}else{return}setTimeout(()=>{if(!parseInt(e)){document.getElementById(e).style.backgroundColor="rgba(256, 256, 256, 0.4)"}else{return}setTimeout(()=>{if(!parseInt(e)){document.getElementById(e).style.backgroundColor="rgba(256, 256, 256, 0.3)"}else{return}setTimeout(()=>{if(!parseInt(e)){document.getElementById(e).style.backgroundColor="rgba(256, 256, 256, 0.35)"}else{return}setTimeout(()=>{if(!parseInt(e)){document.getElementById(e).style.backgroundColor="rgba(256, 256, 256, 0.3)"}else{return}setTimeout(()=>{if(!parseInt(e)){document.getElementById(e).style.backgroundColor="rgba(256, 256, 256, 0.2)"}else{return}setTimeout(()=>{if(!parseInt(e)){document.getElementById(e).style.backgroundColor="rgba(256, 256, 256, 0.1)"}else{return}setTimeout(()=>{if(!parseInt(e)){document.getElementById(e).style.backgroundColor="rgba(0, 0, 0, 0.4)"}else{return}},10)},10)},10)},10)},10)},10)},10)},10)},10)},10)}document.addEventListener("mousedown",e=>{spacekey=true;kkeyPressed("spacekey")});document.addEventListener("mouseup",e=>{spacekey=false;kkeyUnpressed("spacekey")});document.addEventListener("keydown",e=>{e.key=="a"&&(qkey=true,kkeyPressed("qkey"));e.key=="s"&&(wkey=true,kkeyPressed("wkey"));e.key=="d"&&(ekey=true,kkeyPressed("ekey"));e.key=="f"&&(rkey=true,kkeyPressed("rkey"));e.key=="q"&&(onekey=true,kkeyPressed("onekey"));e.key=="w"&&(twokey=true,kkeyPressed("twokey"));e.key=="v"&&(threekey=true,kkeyPressed("threekey"));e.key=="r"&&(fourkey=true,kkeyPressed("fourkey"));e.keyCode==32&&(spacekey=true,kkeyPressed("spacekey"))});document.addEventListener("keyup",e=>{e.key=="a"&&(qkey=false,kkeyUnpressed("qkey"));e.key=="s"&&(wkey=false,kkeyUnpressed("wkey"));e.key=="d"&&(ekey=false,kkeyUnpressed("ekey"));e.key=="f"&&(rkey=false,kkeyUnpressed("rkey"));e.key=="q"&&(onekey=false,kkeyUnpressed("onekey"));e.key=="w"&&(twokey=false,kkeyUnpressed("twokey"));e.key=="v"&&(threekey=false,kkeyUnpressed("threekey"));e.key=="r"&&(fourkey=false,kkeyUnpressed("fourkey"));e.keyCode==32&&(spacekey=false,kkeyUnpressed("spacekey"))})}initKeystrokes();var style34 = document.createElement('style');style34.innerHTML = atob(`LmZhZGUtb3V0IHsKCXZpc2liaWxpdHk6IGhpZGRlbjsKICAgIG9wYWNpdHk6IDA7CiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIDAuOXMsIG9wYWNpdHkgMC45cyBsaW5lYXI7Cn0KQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHsKICAgIDEwMCUgeyByaWdodDogMTBweDsgfQp9CkBrZXlmcmFtZXMgc2xpZGUgewogICAgMTAwJSB7IHJpZ2h0OiAxMHB4OyB9Cn0KLm5vdGlmaWNhdGlvbiB7CiAgICB3aWR0aDogMzYwcHg7CiAgICBoZWlnaHQ6IDQwcHg7CiAgICB6LWluZGV4OiA5MDAwOwogICAgcG9zaXRpb246IGZpeGVkOwoJcmlnaHQ6IC0xMDBweDsKCS13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZSAwLjVzIGZvcndhcmRzOwogICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzOwogICAgYW5pbWF0aW9uOiBzbGlkZSAwLjVzIGZvcndhcmRzOwogICAgYW5pbWF0aW9uLWRlbGF5OiAwczsKICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpOwogICAgcGFkZGluZzogMjBweDsKICAgIG1hcmdpbjogMC41cmVtIDAgMXJlbSAwOwogICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsKfQoubm90aWZpY2F0aW9uIC5kaXNtaXNzIHsKICAgIHRvcDogMTBweDsKICAgIHJpZ2h0OiAxMHB4OwogICAgd2lkdGg6IDBweDsKICAgIGhlaWdodDogMHB4OwogICAgY29sb3I6ICNmZmY7CiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICBsaW5lLWhlaWdodDogMjBweDsKICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOwogICAgYm9yZGVyLXJhZGl1czogNTAlOwp9Ci5ub3RpZmljYXRpb24gLmlsbHVzdHJhdGlvbiB7CiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7CiAgICBmbG9hdDogbGVmdDsKfQoubm90aWZpY2F0aW9uIC5pbGx1c3RyYXRpb24gaW1nIHsKICAgIGJvcmRlci1yYWRpdXM6IDAlOwp9Ci5ub3RpZmljYXRpb24gLnRleHQgLnRpdGxlIHsKICAgIGZvbnQtc2l6ZTogMThweDsKICAgIGZvbnQtd2VpZ2h0OiBib2xkOwp9Cg==`);document.head.appendChild(style34);var style21 = document.createElement('style');style21.innerHTML = ':root{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}.animate__animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-duration:var(--animate-duration);animation-duration:var(--animate-duration);-webkit-animation-fill-mode:both;animation-fill-mode:both}.animate__animated.animate__infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.animate__animated.animate__repeat-1{-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-iteration-count:var(--animate-repeat);animation-iteration-count:var(--animate-repeat)}.animate__animated.animate__repeat-2{-webkit-animation-iteration-count:2;animation-iteration-count:2;-webkit-animation-iteration-count:calc(var(--animate-repeat)*2);animation-iteration-count:calc(var(--animate-repeat)*2)}.animate__animated.animate__repeat-3{-webkit-animation-iteration-count:3;animation-iteration-count:3;-webkit-animation-iteration-count:calc(var(--animate-repeat)*3);animation-iteration-count:calc(var(--animate-repeat)*3)}.animate__animated.animate__delay-1s{-webkit-animation-delay:1s;animation-delay:1s;-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay)}.animate__animated.animate__delay-2s{-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-delay:calc(var(--animate-delay)*2);animation-delay:calc(var(--animate-delay)*2)}.animate__animated.animate__delay-3s{-webkit-animation-delay:3s;animation-delay:3s;-webkit-animation-delay:calc(var(--animate-delay)*3);animation-delay:calc(var(--animate-delay)*3)}.animate__animated.animate__delay-4s{-webkit-animation-delay:4s;animation-delay:4s;-webkit-animation-delay:calc(var(--animate-delay)*4);animation-delay:calc(var(--animate-delay)*4)}.animate__animated.animate__delay-5s{-webkit-animation-delay:5s;animation-delay:5s;-webkit-animation-delay:calc(var(--animate-delay)*5);animation-delay:calc(var(--animate-delay)*5)}.animate__animated.animate__faster{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-duration:calc(var(--animate-duration)/2);animation-duration:calc(var(--animate-duration)/2)}.animate__animated.animate__fast{-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-duration:calc(var(--animate-duration)*.8);animation-duration:calc(var(--animate-duration)*.8)}.animate__animated.animate__slow{-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-duration:calc(var(--animate-duration)*2);animation-duration:calc(var(--animate-duration)*2)}.animate__animated.animate__slower{-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-duration:calc(var(--animate-duration)*3);animation-duration:calc(var(--animate-duration)*3)}@media (prefers-reduced-motion:reduce),print{.animate__animated{-webkit-animation-duration:1ms!important;animation-duration:1ms!important;-webkit-animation-iteration-count:1!important;animation-iteration-count:1!important;-webkit-transition-duration:1ms!important;transition-duration:1ms!important}.animate__animated[class*=Out]{opacity:0}}@-webkit-keyframes bounce{0%,20%,53%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0) scaleY(1.1);transform:translate3d(0,-30px,0) scaleY(1.1)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0) scaleY(1.05);transform:translate3d(0,-15px,0) scaleY(1.05)}80%{-webkit-transform:translateZ(0) scaleY(.95);transform:translateZ(0) scaleY(.95);-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}90%{-webkit-transform:translate3d(0,-4px,0) scaleY(1.02);transform:translate3d(0,-4px,0) scaleY(1.02)}}@keyframes bounce{0%,20%,53%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0) scaleY(1.1);transform:translate3d(0,-30px,0) scaleY(1.1)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0) scaleY(1.05);transform:translate3d(0,-15px,0) scaleY(1.05)}80%{-webkit-transform:translateZ(0) scaleY(.95);transform:translateZ(0) scaleY(.95);-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}90%{-webkit-transform:translate3d(0,-4px,0) scaleY(1.02);transform:translate3d(0,-4px,0) scaleY(1.02)}}.animate__bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.animate__flash{-webkit-animation-name:flash;animation-name:flash}@-webkit-keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.animate__pulse{-webkit-animation-name:pulse;animation-name:pulse;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.animate__rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand}@-webkit-keyframes shakeX{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}@keyframes shakeX{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}.animate__shakeX{-webkit-animation-name:shakeX;animation-name:shakeX}@-webkit-keyframes shakeY{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}20%,40%,60%,80%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}}@keyframes shakeY{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}20%,40%,60%,80%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}}.animate__shakeY{-webkit-animation-name:shakeY;animation-name:shakeY}@-webkit-keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}.animate__headShake{-webkit-animation-name:headShake;animation-name:headShake;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.animate__swing{-webkit-animation-name:swing;animation-name:swing;-webkit-transform-origin:top center;transform-origin:top center}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.animate__tada{-webkit-animation-name:tada;animation-name:tada}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__wobble{-webkit-animation-name:wobble;animation-name:wobble}@-webkit-keyframes jello{0%,11.1%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{0%,11.1%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animate__jello{-webkit-animation-name:jello;animation-name:jello;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes heartBeat{0%{-webkit-transform:scale(1);transform:scale(1)}14%{-webkit-transform:scale(1.3);transform:scale(1.3)}28%{-webkit-transform:scale(1);transform:scale(1)}42%{-webkit-transform:scale(1.3);transform:scale(1.3)}70%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes heartBeat{0%{-webkit-transform:scale(1);transform:scale(1)}14%{-webkit-transform:scale(1.3);transform:scale(1.3)}28%{-webkit-transform:scale(1);transform:scale(1)}42%{-webkit-transform:scale(1.3);transform:scale(1.3)}70%{-webkit-transform:scale(1);transform:scale(1)}}.animate__heartBeat{-webkit-animation-duration:1.3s;animation-duration:1.3s;-webkit-animation-duration:calc(var(--animate-duration)*1.3);animation-duration:calc(var(--animate-duration)*1.3);-webkit-animation-name:heartBeat;animation-name:heartBeat;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes backInDown{0%{opacity:.7;-webkit-transform:translateY(-1200px) scale(.7);transform:translateY(-1200px) scale(.7)}80%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes backInDown{0%{opacity:.7;-webkit-transform:translateY(-1200px) scale(.7);transform:translateY(-1200px) scale(.7)}80%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.animate__backInDown{-webkit-animation-name:backInDown;animation-name:backInDown}@-webkit-keyframes backInLeft{0%{opacity:.7;-webkit-transform:translateX(-2000px) scale(.7);transform:translateX(-2000px) scale(.7)}80%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes backInLeft{0%{opacity:.7;-webkit-transform:translateX(-2000px) scale(.7);transform:translateX(-2000px) scale(.7)}80%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.animate__backInLeft{-webkit-animation-name:backInLeft;animation-name:backInLeft}@-webkit-keyframes backInRight{0%{opacity:.7;-webkit-transform:translateX(2000px) scale(.7);transform:translateX(2000px) scale(.7)}80%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes backInRight{0%{opacity:.7;-webkit-transform:translateX(2000px) scale(.7);transform:translateX(2000px) scale(.7)}80%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.animate__backInRight{-webkit-animation-name:backInRight;animation-name:backInRight}@-webkit-keyframes backInUp{0%{opacity:.7;-webkit-transform:translateY(1200px) scale(.7);transform:translateY(1200px) scale(.7)}80%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes backInUp{0%{opacity:.7;-webkit-transform:translateY(1200px) scale(.7);transform:translateY(1200px) scale(.7)}80%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.animate__backInUp{-webkit-animation-name:backInUp;animation-name:backInUp}@-webkit-keyframes backOutDown{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:.7;-webkit-transform:translateY(700px) scale(.7);transform:translateY(700px) scale(.7)}}@keyframes backOutDown{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:.7;-webkit-transform:translateY(700px) scale(.7);transform:translateY(700px) scale(.7)}}.animate__backOutDown{-webkit-animation-name:backOutDown;animation-name:backOutDown}@-webkit-keyframes backOutLeft{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:.7;-webkit-transform:translateX(-2000px) scale(.7);transform:translateX(-2000px) scale(.7)}}@keyframes backOutLeft{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:.7;-webkit-transform:translateX(-2000px) scale(.7);transform:translateX(-2000px) scale(.7)}}.animate__backOutLeft{-webkit-animation-name:backOutLeft;animation-name:backOutLeft}@-webkit-keyframes backOutRight{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:.7;-webkit-transform:translateX(2000px) scale(.7);transform:translateX(2000px) scale(.7)}}@keyframes backOutRight{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7)}to{opacity:.7;-webkit-transform:translateX(2000px) scale(.7);transform:translateX(2000px) scale(.7)}}.animate__backOutRight{-webkit-animation-name:backOutRight;animation-name:backOutRight}@-webkit-keyframes backOutUp{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:.7;-webkit-transform:translateY(-700px) scale(.7);transform:translateY(-700px) scale(.7)}}@keyframes backOutUp{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:.7;-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7)}to{opacity:.7;-webkit-transform:translateY(-700px) scale(.7);transform:translateY(-700px) scale(.7)}}.animate__backOutUp{-webkit-animation-name:backOutUp;animation-name:backOutUp}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}.animate__bounceIn{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-duration:calc(var(--animate-duration)*.75);animation-duration:calc(var(--animate-duration)*.75);-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0) scaleY(3);transform:translate3d(0,-3000px,0) scaleY(3)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0) scaleY(.9);transform:translate3d(0,25px,0) scaleY(.9)}75%{-webkit-transform:translate3d(0,-10px,0) scaleY(.95);transform:translate3d(0,-10px,0) scaleY(.95)}90%{-webkit-transform:translate3d(0,5px,0) scaleY(.985);transform:translate3d(0,5px,0) scaleY(.985)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0) scaleY(3);transform:translate3d(0,-3000px,0) scaleY(3)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0) scaleY(.9);transform:translate3d(0,25px,0) scaleY(.9)}75%{-webkit-transform:translate3d(0,-10px,0) scaleY(.95);transform:translate3d(0,-10px,0) scaleY(.95)}90%{-webkit-transform:translate3d(0,5px,0) scaleY(.985);transform:translate3d(0,5px,0) scaleY(.985)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}@-webkit-keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0) scaleX(3);transform:translate3d(-3000px,0,0) scaleX(3)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0) scaleX(1);transform:translate3d(25px,0,0) scaleX(1)}75%{-webkit-transform:translate3d(-10px,0,0) scaleX(.98);transform:translate3d(-10px,0,0) scaleX(.98)}90%{-webkit-transform:translate3d(5px,0,0) scaleX(.995);transform:translate3d(5px,0,0) scaleX(.995)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0) scaleX(3);transform:translate3d(-3000px,0,0) scaleX(3)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0) scaleX(1);transform:translate3d(25px,0,0) scaleX(1)}75%{-webkit-transform:translate3d(-10px,0,0) scaleX(.98);transform:translate3d(-10px,0,0) scaleX(.98)}90%{-webkit-transform:translate3d(5px,0,0) scaleX(.995);transform:translate3d(5px,0,0) scaleX(.995)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__bounceInLeft{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft}@-webkit-keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0) scaleX(3);transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0) scaleX(1);transform:translate3d(-25px,0,0) scaleX(1)}75%{-webkit-transform:translate3d(10px,0,0) scaleX(.98);transform:translate3d(10px,0,0) scaleX(.98)}90%{-webkit-transform:translate3d(-5px,0,0) scaleX(.995);transform:translate3d(-5px,0,0) scaleX(.995)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0) scaleX(3);transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0) scaleX(1);transform:translate3d(-25px,0,0) scaleX(1)}75%{-webkit-transform:translate3d(10px,0,0) scaleX(.98);transform:translate3d(10px,0,0) scaleX(.98)}90%{-webkit-transform:translate3d(-5px,0,0) scaleX(.995);transform:translate3d(-5px,0,0) scaleX(.995)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight}@-webkit-keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0) scaleY(5);transform:translate3d(0,3000px,0) scaleY(5)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0) scaleY(.9);transform:translate3d(0,-20px,0) scaleY(.9)}75%{-webkit-transform:translate3d(0,10px,0) scaleY(.95);transform:translate3d(0,10px,0) scaleY(.95)}90%{-webkit-transform:translate3d(0,-5px,0) scaleY(.985);transform:translate3d(0,-5px,0) scaleY(.985)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0) scaleY(5);transform:translate3d(0,3000px,0) scaleY(5)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0) scaleY(.9);transform:translate3d(0,-20px,0) scaleY(.9)}75%{-webkit-transform:translate3d(0,10px,0) scaleY(.95);transform:translate3d(0,10px,0) scaleY(.95)}90%{-webkit-transform:translate3d(0,-5px,0) scaleY(.985);transform:translate3d(0,-5px,0) scaleY(.985)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp}@-webkit-keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}.animate__bounceOut{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-duration:calc(var(--animate-duration)*.75);animation-duration:calc(var(--animate-duration)*.75);-webkit-animation-name:bounceOut;animation-name:bounceOut}@-webkit-keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0) scaleY(.985);transform:translate3d(0,10px,0) scaleY(.985)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0) scaleY(.9);transform:translate3d(0,-20px,0) scaleY(.9)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0) scaleY(3);transform:translate3d(0,2000px,0) scaleY(3)}}@keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0) scaleY(.985);transform:translate3d(0,10px,0) scaleY(.985)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0) scaleY(.9);transform:translate3d(0,-20px,0) scaleY(.9)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0) scaleY(3);transform:translate3d(0,2000px,0) scaleY(3)}}.animate__bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown}@-webkit-keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0) scaleX(.9);transform:translate3d(20px,0,0) scaleX(.9)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0) scaleX(2);transform:translate3d(-2000px,0,0) scaleX(2)}}@keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0) scaleX(.9);transform:translate3d(20px,0,0) scaleX(.9)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0) scaleX(2);transform:translate3d(-2000px,0,0) scaleX(2)}}.animate__bounceOutLeft{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft}@-webkit-keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0) scaleX(.9);transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0) scaleX(2);transform:translate3d(2000px,0,0) scaleX(2)}}@keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0) scaleX(.9);transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0) scaleX(2);transform:translate3d(2000px,0,0) scaleX(2)}}.animate__bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight}@-webkit-keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0) scaleY(.985);transform:translate3d(0,-10px,0) scaleY(.985)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0) scaleY(.9);transform:translate3d(0,20px,0) scaleY(.9)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0) scaleY(3);transform:translate3d(0,-2000px,0) scaleY(3)}}@keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0) scaleY(.985);transform:translate3d(0,-10px,0) scaleY(.985)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0) scaleY(.9);transform:translate3d(0,20px,0) scaleY(.9)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0) scaleY(3);transform:translate3d(0,-2000px,0) scaleY(3)}}.animate__bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.animate__fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInDownBig{-webkit-animation-name:fadeInDownBig;animation-name:fadeInDownBig}@-webkit-keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}@-webkit-keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInLeftBig{-webkit-animation-name:fadeInLeftBig;animation-name:fadeInLeftBig}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInRightBig{-webkit-animation-name:fadeInRightBig;animation-name:fadeInRightBig}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInUpBig{-webkit-animation-name:fadeInUpBig;animation-name:fadeInUpBig}@-webkit-keyframes fadeInTopLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,-100%,0);transform:translate3d(-100%,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInTopLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,-100%,0);transform:translate3d(-100%,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInTopLeft{-webkit-animation-name:fadeInTopLeft;animation-name:fadeInTopLeft}@-webkit-keyframes fadeInTopRight{0%{opacity:0;-webkit-transform:translate3d(100%,-100%,0);transform:translate3d(100%,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInTopRight{0%{opacity:0;-webkit-transform:translate3d(100%,-100%,0);transform:translate3d(100%,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInTopRight{-webkit-animation-name:fadeInTopRight;animation-name:fadeInTopRight}@-webkit-keyframes fadeInBottomLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,100%,0);transform:translate3d(-100%,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInBottomLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,100%,0);transform:translate3d(-100%,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInBottomLeft{-webkit-animation-name:fadeInBottomLeft;animation-name:fadeInBottomLeft}@-webkit-keyframes fadeInBottomRight{0%{opacity:0;-webkit-transform:translate3d(100%,100%,0);transform:translate3d(100%,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInBottomRight{0%{opacity:0;-webkit-transform:translate3d(100%,100%,0);transform:translate3d(100%,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInBottomRight{-webkit-animation-name:fadeInBottomRight;animation-name:fadeInBottomRight}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animate__fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.animate__fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.animate__fadeOutDownBig{-webkit-animation-name:fadeOutDownBig;animation-name:fadeOutDownBig}@-webkit-keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.animate__fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}@-webkit-keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.animate__fadeOutLeftBig{-webkit-animation-name:fadeOutLeftBig;animation-name:fadeOutLeftBig}@-webkit-keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.animate__fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@-webkit-keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.animate__fadeOutRightBig{-webkit-animation-name:fadeOutRightBig;animation-name:fadeOutRightBig}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.animate__fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.animate__fadeOutUpBig{-webkit-animation-name:fadeOutUpBig;animation-name:fadeOutUpBig}@-webkit-keyframes fadeOutTopLeft{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(-100%,-100%,0);transform:translate3d(-100%,-100%,0)}}@keyframes fadeOutTopLeft{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(-100%,-100%,0);transform:translate3d(-100%,-100%,0)}}.animate__fadeOutTopLeft{-webkit-animation-name:fadeOutTopLeft;animation-name:fadeOutTopLeft}@-webkit-keyframes fadeOutTopRight{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(100%,-100%,0);transform:translate3d(100%,-100%,0)}}@keyframes fadeOutTopRight{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(100%,-100%,0);transform:translate3d(100%,-100%,0)}}.animate__fadeOutTopRight{-webkit-animation-name:fadeOutTopRight;animation-name:fadeOutTopRight}@-webkit-keyframes fadeOutBottomRight{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(100%,100%,0);transform:translate3d(100%,100%,0)}}@keyframes fadeOutBottomRight{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(100%,100%,0);transform:translate3d(100%,100%,0)}}.animate__fadeOutBottomRight{-webkit-animation-name:fadeOutBottomRight;animation-name:fadeOutBottomRight}@-webkit-keyframes fadeOutBottomLeft{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(-100%,100%,0);transform:translate3d(-100%,100%,0)}}@keyframes fadeOutBottomLeft{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(-100%,100%,0);transform:translate3d(-100%,100%,0)}}.animate__fadeOutBottomLeft{-webkit-animation-name:fadeOutBottomLeft;animation-name:fadeOutBottomLeft}@-webkit-keyframes flip{0%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)}40%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg)}50%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg)}80%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg)}to{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)}}@keyframes flip{0%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)}40%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg)}50%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg)}80%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg)}to{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)}}.animate__animated.animate__flip{-webkit-animation-name:flip;animation-name:flip;-webkit-backface-visibility:visible;backface-visibility:visible}@-webkit-keyframes flipInX{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg)}40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)}60%{opacity:1;-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg)}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInX{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg)}40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)}60%{opacity:1;-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg)}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.animate__flipInX{-webkit-animation-name:flipInX;animation-name:flipInX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipInY{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg)}40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg)}60%{opacity:1;-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg)}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInY{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg)}40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg)}60%{opacity:1;-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg)}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.animate__flipInY{-webkit-animation-name:flipInY;animation-name:flipInY;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{opacity:1;-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)}to{opacity:0;-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg)}}@keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{opacity:1;-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)}to{opacity:0;-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg)}}.animate__flipOutX{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-duration:calc(var(--animate-duration)*.75);animation-duration:calc(var(--animate-duration)*.75);-webkit-animation-name:flipOutX;animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{opacity:1;-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg)}to{opacity:0;-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg)}}@keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{opacity:1;-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg)}to{opacity:0;-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg)}}.animate__flipOutY{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-duration:calc(var(--animate-duration)*.75);animation-duration:calc(var(--animate-duration)*.75);-webkit-animation-name:flipOutY;animation-name:flipOutY;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes lightSpeedInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg)}60%{opacity:1;-webkit-transform:skewX(20deg);transform:skewX(20deg)}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes lightSpeedInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg)}60%{opacity:1;-webkit-transform:skewX(20deg);transform:skewX(20deg)}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__lightSpeedInRight{-webkit-animation-name:lightSpeedInRight;animation-name:lightSpeedInRight;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) skewX(30deg);transform:translate3d(-100%,0,0) skewX(30deg)}60%{opacity:1;-webkit-transform:skewX(-20deg);transform:skewX(-20deg)}80%{-webkit-transform:skewX(5deg);transform:skewX(5deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes lightSpeedInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) skewX(30deg);transform:translate3d(-100%,0,0) skewX(30deg)}60%{opacity:1;-webkit-transform:skewX(-20deg);transform:skewX(-20deg)}80%{-webkit-transform:skewX(5deg);transform:skewX(5deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__lightSpeedInLeft{-webkit-animation-name:lightSpeedInLeft;animation-name:lightSpeedInLeft;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg)}}@keyframes lightSpeedOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg)}}.animate__lightSpeedOutRight{-webkit-animation-name:lightSpeedOutRight;animation-name:lightSpeedOutRight;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes lightSpeedOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0) skewX(-30deg);transform:translate3d(-100%,0,0) skewX(-30deg)}}@keyframes lightSpeedOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0) skewX(-30deg);transform:translate3d(-100%,0,0) skewX(-30deg)}}.animate__lightSpeedOutLeft{-webkit-animation-name:lightSpeedOutLeft;animation-name:lightSpeedOutLeft;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes rotateIn{0%{opacity:0;-webkit-transform:rotate(-200deg);transform:rotate(-200deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rotateIn{0%{opacity:0;-webkit-transform:rotate(-200deg);transform:rotate(-200deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__rotateIn{-webkit-animation-name:rotateIn;animation-name:rotateIn;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes rotateInDownLeft{0%{opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rotateInDownLeft{0%{opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__rotateInDownLeft{-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft;-webkit-transform-origin:left bottom;transform-origin:left bottom}@-webkit-keyframes rotateInDownRight{0%{opacity:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rotateInDownRight{0%{opacity:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__rotateInDownRight{-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight;-webkit-transform-origin:right bottom;transform-origin:right bottom}@-webkit-keyframes rotateInUpLeft{0%{opacity:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rotateInUpLeft{0%{opacity:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__rotateInUpLeft{-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft;-webkit-transform-origin:left bottom;transform-origin:left bottom}@-webkit-keyframes rotateInUpRight{0%{opacity:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rotateInUpRight{0%{opacity:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__rotateInUpRight{-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight;-webkit-transform-origin:right bottom;transform-origin:right bottom}@-webkit-keyframes rotateOut{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(200deg);transform:rotate(200deg)}}@keyframes rotateOut{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(200deg);transform:rotate(200deg)}}.animate__rotateOut{-webkit-animation-name:rotateOut;animation-name:rotateOut;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes rotateOutDownLeft{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}}@keyframes rotateOutDownLeft{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}}.animate__rotateOutDownLeft{-webkit-animation-name:rotateOutDownLeft;animation-name:rotateOutDownLeft;-webkit-transform-origin:left bottom;transform-origin:left bottom}@-webkit-keyframes rotateOutDownRight{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}@keyframes rotateOutDownRight{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}.animate__rotateOutDownRight{-webkit-animation-name:rotateOutDownRight;animation-name:rotateOutDownRight;-webkit-transform-origin:right bottom;transform-origin:right bottom}@-webkit-keyframes rotateOutUpLeft{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}@keyframes rotateOutUpLeft{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}.animate__rotateOutUpLeft{-webkit-animation-name:rotateOutUpLeft;animation-name:rotateOutUpLeft;-webkit-transform-origin:left bottom;transform-origin:left bottom}@-webkit-keyframes rotateOutUpRight{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}}@keyframes rotateOutUpRight{0%{opacity:1}to{opacity:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.animate__rotateOutUpRight{-webkit-animation-name:rotateOutUpRight;animation-name:rotateOutUpRight;-webkit-transform-origin:right bottom;transform-origin:right bottom}@-webkit-keyframes hinge{0%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transform:rotate(80deg);transform:rotate(80deg)}40%,80%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1;-webkit-transform:rotate(60deg);transform:rotate(60deg)}to{opacity:0;-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0)}}@keyframes hinge{0%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transform:rotate(80deg);transform:rotate(80deg)}40%,80%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1;-webkit-transform:rotate(60deg);transform:rotate(60deg)}to{opacity:0;-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0)}}.animate__hinge{-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-duration:calc(var(--animate-duration)*2);animation-duration:calc(var(--animate-duration)*2);-webkit-animation-name:hinge;animation-name:hinge;-webkit-transform-origin:top left;transform-origin:top left}@-webkit-keyframes jackInTheBox{0%{opacity:0;-webkit-transform:scale(.1) rotate(30deg);transform:scale(.1) rotate(30deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}50%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}70%{-webkit-transform:rotate(3deg);transform:rotate(3deg)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes jackInTheBox{0%{opacity:0;-webkit-transform:scale(.1) rotate(30deg);transform:scale(.1) rotate(30deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}50%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}70%{-webkit-transform:rotate(3deg);transform:rotate(3deg)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.animate__jackInTheBox{-webkit-animation-name:jackInTheBox;animation-name:jackInTheBox}@-webkit-keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__rollIn{-webkit-animation-name:rollIn;animation-name:rollIn}@-webkit-keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}@keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}.animate__rollOut{-webkit-animation-name:rollOut;animation-name:rollOut}@-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}.animate__zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}@-webkit-keyframes zoomInDown{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0)}}@keyframes zoomInDown{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0)}}.animate__zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown}@-webkit-keyframes zoomInLeft{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0)}}@keyframes zoomInLeft{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0)}}.animate__zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}@-webkit-keyframes zoomInRight{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0)}}@keyframes zoomInRight{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0)}}.animate__zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight}@-webkit-keyframes zoomInUp{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0)}}@keyframes zoomInUp{0%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0)}60%{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0)}}.animate__zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp}@-webkit-keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}.animate__zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut}@-webkit-keyframes zoomOutDown{40%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0)}to{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0)}}@keyframes zoomOutDown{40%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0)}to{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0)}}.animate__zoomOutDown{-webkit-animation-name:zoomOutDown;animation-name:zoomOutDown;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0)}}@keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0)}}.animate__zoomOutLeft{-webkit-animation-name:zoomOutLeft;animation-name:zoomOutLeft;-webkit-transform-origin:left center;transform-origin:left center}@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0)}}@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0)}}.animate__zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight;-webkit-transform-origin:right center;transform-origin:right center}@-webkit-keyframes zoomOutUp{40%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0)}to{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0)}}@keyframes zoomOutUp{40%{-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0)}to{-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0)}}.animate__zoomOutUp{-webkit-animation-name:zoomOutUp;animation-name:zoomOutUp;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown}@-webkit-keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}@-webkit-keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:hidden}}.animate__slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown}@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:hidden}}@keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:hidden}}.animate__slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}@-webkit-keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:hidden}}@keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:hidden}}.animate__slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}@-webkit-keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:hidden}}@keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:hidden}}.animate__slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp}';document.head.appendChild(style21);
const Notification=function(){"use strict";var t=0,i=0;return{create:function(s,a,e,n,o,c){var d=function(s,a,e,n){i=88*t,t+=1;var o,c='<div class="text">'+a+"</div>",d=!s?"":'<div class="title">'+s+"</div>",r=!e?"":'<div class="illustration"><img src="'+e+'" width="42" height="42" /></div>';switch(parseInt(n,10)){case 1:o="top:"+i+"px; left:20px;";break;case 2:o="top:"+i+"px;";break;case 3:o="bottom:"+i+"px; right:20px;";break;case 4:o="bottom:"+i+"px; left:20px;"}return{id:t,content:'<div class="notification notification-'+t+' " style="'+o+'">'+'<div class="dismiss">&#10006;</div>'+r+'<div class="text">'+d+c+"</div>"+"</div>"}}(s,a,e,o);if($(d.content).addClass("animated "+n).appendTo("body"),!c)c=2;setTimeout(function(){!function(i){let s=i;$(document).find(".notification-"+s).addClass("fade-out"),setTimeout(()=>{t-=1},800)}(d.id)},700*c)}}}();
const localNotes = "fz <3, hubear <3, leywin <3, nevco >:(";
const cloudNotes = "OBJECT_STRING";
const debugMode = true;
const Shame = () => myPlayer.hat == 45 ? `Clown: ${(Ge-Date.now()+3e4)/1e3}` : (0 == ShameCount ? "Shame: 0" : `Shame: ${ShameCount}`);
const isShame = () => myPlayer.hat == 45 ? [true, (Ge-Date.now()+3e4)/1e3] : [false, ShameCount];
const isShameForPlayers = (id) => PlayerShame[id].hat == 45 ? [true, (PlayerShame[id].Ge-Date.now()+3e4)/1e3] : [false, undefined == PlayerShame[id].shameCount ? 0 : PlayerShame[id].shameCount];
const Key_Backspace = 8, Key_Tab = 9, Key_Enter = 13, Key_Shift = 16, Key_Ctrl = 17, Key_Alt = 18, Key_Esc = 27, Key_Space = 32, Key_PageUp = 33, Key_PageDown = 34, Key_End = 35, Key_Home = 36, Key_LeftArrow = 37, Key_UpArrow = 38, Key_RightArrow = 39, Key_DownArrow = 40, Key_Insert = 45, Key_Delete = 46, Key_A = 65, Key_B = 66, Key_C = 67, Key_D = 68, Key_E = 69, Key_F = 70, Key_G = 71, Key_H = 72, Key_I = 73, Key_J = 74, Key_K = 75, Key_L = 76, Key_M = 77, Key_N = 78, Key_O = 79, Key_P = 80, Key_Q = 81, Key_R = 82, Key_S = 83, Key_T = 84, Key_U = 85, Key_V = 86, Key_W = 87, Key_X = 88, Key_Y = 89, Key_Z = 90, Key_Numpad0 = 96, Key_Numpad1 = 97, Key_Numpad2 = 98, Key_Numpad3 = 99, Key_Numpad4 = 100, Key_Numpad5 = 101, Key_Numpad6 = 102, Key_Numpad7 = 103, Key_Numpad8 = 104, Key_Numpad9 = 105, Key_NumpadMultiply = 106, Key_NumpadAdd = 107, Key_NumpadSubtract = 109, Key_NumpadDecimal = 110, Key_NumpadDevide = 111, Key_Semicolon = 116, Key_Equal = 187, Key_Comma = 188, Key_Minus = 189, Key_Period = 190, Key_Slash = 191, Key_BackQuote = 192, Key_BracketLeft = 219, Key_BracketRight = 221, Key_BackSlash = 220, Key_Quote = 222, Key_0 = 48, Key_1 = 49, Key_2 = 50, Key_3 = 51, Key_4 = 52, Key_5 = 53, Key_6 = 54, Key_7 = 55, Key_8 = 56, Key_9 = 56;
const ALLOW_PACKET_INTERCEPT = true;
const load_all_sounds = true;
const link = "https://lemonmod.com/sound/";
const menuMusic = new Audio(`${link}menu_music.mp3`), snowWind = new Audio(`${link}in_snow.mp3`), plainsWind = new Audio(`https://lemonmod.com/sound/in_plains.mp3`), desertWind = new Audio(`https://lemonmod.com/sound/in_desert.mp3`), riverWind = new Audio(`https://lemonmod.com/sound/in_river.mp3`)
var useSounds = false;
window.addEventListener("load", function(){
	window.isLoaded = true;
});
menuMusic.addEventListener("canplaythrough", function(){
	menuMusic.isLoaded = true;
});
Math.dist = function (pos1, pos2) {
	var a = pos1.x - pos2.x;
	var b = pos1.y - pos2.y;
    return Math.sqrt(a * a + b * b);
};
const sound = {
    atk: "axe_swing",
	sharpatk1: "katana1",
	sharpatk2: "katana2",
    hitBush: "bush_hit1",
	hitAcBush: "bush_hit",
    hitStone: "stone_hit",
    eat: "eat",
    musketFire: "musket_fire",
    hitWood: "hit_wood",
    place: "place",
	fn_hit1: "fn/hp1",
	fn_hit2: "fn/hp2",
	fn_hit3: "fn/hp3",
	fn_elim1: "fn/elim3",
	fn_elim2: "fn/elim4",
	fn_build_1: "fn/build1",
	fn_build_2: "fn/build2",
	fn_build_3: "fn/build3",
	fn_break1: "fn/break1",
	fn_break2: "fn/break2",
	fn_die: "fn/die",
	fn_insta_l_1: "fn/insta_l_1",
	fn_insta_l_2: "fn/insta_l_2",
	fn_insta_l_3: "fn/insta_l_3",
	fn_insta_f_1: "fn/insta_f_1",
	fn_insta_f_2: "fn/insta_f_2",
	fn_insta_f_3: "fn/insta_f_3",
	fn_wood_1: "fn/wood1",
	fn_wood_2: "fn/wood2",
	fn_wood_3: "fn/wood3",
	fn_wood_4: "fn/wood4",
	fn_wood_5: "fn/wood5",
	fn_stone_1: "fn/stone1",
	fn_stone_2: "fn/stone2",
	fn_stone_3: "fn/stone3",
	fn_stone_4: "fn/stone4",
	fn_stone_5: "fn/stone5"
}
var soundCache = [],
    buildings2 = [],
    players2 = [],
    cachedSave = [];
    var playerDat = {
        health: 100,
        id: null,
        sid: null
    }
    var joinBtn = document.getElementById("enterGame");
    joinBtn.addEventListener("click", function(e){
       menuMusic.pause();
    });
    if(load_all_sounds){
            for(let i in sound){
                playSound(sound[i]);
            }
    }
function playSound(src, rep = 0){
	if(useSounds) {
		const ind = `${src}${rep}`;
		if(!soundCache[ind]){
			soundCache[ind] = new Audio(`${link}${src}.mp3`);
			soundCache[ind].isLoaded = false;
			soundCache[ind].addEventListener("canplaythrough", function(){
				soundCache[ind].isLoaded = true;
				if(src !== sound.musketFire && src !== sound.place){
					soundCache[ind].volume = 0.5;
				}
			});
			cachedSave[src] = (rep + 1);
			localStorage.cache_save = JSON.stringify(cachedSave);
		} else if(soundCache[ind].isLoaded){
			if(soundCache[ind].currentTime == 0 || soundCache[ind].ended){
				soundCache[ind].play();
			} else playSound(src, rep + 1);
		}
	}
}
function cpc(sid){
    if(!players2[sid]) {
        players2[sid] = {
            health: 100,
            sid: sid
        };
    }
}
var pausedReload = false;
var ShameCount = 0;
var lockedAim = false;
var trapAim = false;
var bamSpeed = 230;
var autoInsta = false;
var lastHat;
var lastAcc;
var HP;
var Count;
var pausedBullTick = false;
var myPlayeroldx;
var myPlayeroldy;
var finalCMD = "";
var automillx = 10;
var tickInsta = "0";
var automilly = 10;
var PlayerShame = {};
var previousShameCount = null;
var Ge = 0;
var health = null;
var previousHealth = null;
var timeSinceLastAnti = 0;
var LastDmgTime = null;
var SiuJiSpeed = 1;
var rlJustTriggered = false;
var ttm = 30;
var noDAcc = false;
var freezedServers = [];
var text = "";
var gettingHealSpammed = false;
var samuraiReloading = false;
var autoPrimary = false;
var autoSecondary = false;
var modVersion = "3.0";
var pProgress = 0;
var sProgress = 0;
var cp1 = "";
var empTIG = false;
var cp2 = "";
var cp3 = "";
var targetAngle;
var useCounterInsta = false;
var oldAntiHat;
var oldAntiAcc;
var clickTick = null;
var oldHit360State;
var autohit = 0;
var aimToggle = 0;
var reloading = 0;
var shouldSBD = false;
var usingInsta = 0;
var tslh = 0;
var rangedAnti = true;
var closestenemyHat;
var closestenemyAcc;
var doingSoldier = false;
var closestenemyWeapon;
var oldAHVal;
var ttr = 160;
var followingEnemy = false;
var old360state;
var timeSinceLastSyncDetect = 0;
var spiking;
var mpPrimary = "tool_hammer";
var mpSecondary = "none";
var inBetaOF = false;
var attackToggle = 0;
var clowne = 0;
var enemyWithinRange;
var inAnti = false;
var nodist = false;
var stringData;
let coreURL = new URL(window.location.href);
window.sessionStorage.force = coreURL.searchParams.get("fc");
for (var instaSpeed = 200, instaSpeedR = 200, autoaim = !1, weapon = 0, msgpack5 = msgpack, maxSpeed = -100, dir = 50, blinkDir = 0, lag = !1, fakeCrash = !1, mode = "", myPlayer = {
    id: null,
	x: null,
    y: null,
    dir: null,
    object: null,
    weapon: null,
    clan: null,
    isLeader: null,
    hat: null,
    accessory: null,
    isSkull: null,
	food: 100,
	stone: 100,
	wood: 100,
	gold: 100,
    xvel: null,
    yvel: null,
    prevXVel: null,
    prevYVel: null,
    health: 100,
    lastDamagedDate: null,
    previousHealth: null,
    shameCount: 0
}, inInsta = !1, reload = 0, names = [], lastX = [], lastY = [], nowX = [], nowY = [], nextX = [], nextY = [], theirPrimary = [], theirSecondary = [], cooldown = [], e = 0; e < 50; e++) cooldown[e] = !1, theirPrimary[e] = 0;
var buildings = []
, logX = []
, logY = []
, logTime = []
, crashed = !1;
let foods = [],
    trees = [],
    stones = [],
    mines = [],
	turretsNear = [],
    enemiesWithinHitRange = [],
    spikesNear = [],
    mTrapsNear = [],
    trapsNear = [],
    nearestTree = [],
    nearestFood = [],
    nearestStone = [],
    nearestMine = []
let invisAngles = {
    "0": -1.29774e+308,
    "1": -1.40154e+308,
    "2": -1.21039e+308,
    "3": -1.11012e+308,
    "4": -1.4526e+308,
    "5": -1.4127e+308,
    "6": -1.33884e+308,
    "7": -1.32535e+308,
    "8": -1.22508e+308,
    "9": -1.2421e+308,
    "10": -1.13773e+308,
    "11": -1.4538e+308,
    "12": -1.20573e+308,
    "13": -1.15828e+308,
    "14": -1.11838e+308,
    "15": -1.2832e+308,
    "16": -1.2433e+308,
    "17": -1.16944e+308,
    "18": -1.12954e+308,
    "19": -1.40755e+308,
    "20": -1.15948e+308,
    "21": -1.3243e+308,
    "22": -1.2844e+308,
    "23": -1.2445e+308,
    "24": -1.17064e+308,
    "25": -1.27444e+308,
    "26": -1.1138e+308,
    "27": -1.19119e+308,
    "28": -1.3255e+308,
    "29": -1.2856e+308,
    "30": -1.23815e+308,
    "31": -1.19825e+308,
    "32": -1.1549e+308,
    "33": -1.115e+308,
    "34": -1.2188e+308,
    "35": -1.3226e+308,
    "36": -1.10504e+308,
    "37": -1.23935e+308,
    "38": -1.34315e+308,
    "39": -1.1561e+308,
    "40": -1.1162e+308,
    "41": -1.3637e+308,
    "42": -1.14614e+308,
    "43": -1.10624e+308,
    "44": -1.26696e+308,
    "45": -1.7871e+308,
    "46": -1.18371e+308,
    "47": -1.2611e+308,
    "48": -1.27812e+308,
    "49": -1.14734e+308,
    "50": -1.7244e+308,
    "51": -1.26816e+308,
    "52": -1.1943e+308,
    "53": -1.18491e+308,
    "54": -1.2623e+308,
    "55": -1.21485e+308,
    "56": -1.17495e+308,
    "57": -1.30926e+308,
    "58": -1.29987e+308,
    "59": -1.22601e+308,
    "60": -1.18611e+308,
    "61": -1.6987e+308,
    "62": -1.21605e+308,
    "63": -1.23307e+308,
    "64": -1.1328e+308,
    "65": -1.11931e+308,
    "66": -1.22721e+308,
    "67": -1.33101e+308,
    "68": -1.6999e+308,
    "69": -1.66e+308,
    "70": -1.58614e+308,
    "71": -1.134e+308,
    "72": -1.15102e+308,
    "73": -1.25482e+308,
    "74": -1.741e+308,
    "75": -1.7011e+308,
    "76": -1.13167e+308,
    "77": -1.20151e+308,
    "78": -1.16161e+308,
    "79": -1.29592e+308,
    "80": -1.39972e+308,
    "81": -1.7422e+308,
    "82": -1.17277e+308,
    "83": -1.12532e+308,
    "84": -1.20271e+308,
    "85": -1.5716e+308,
    "86": -1.5317e+308,
    "87": -1.6355e+308,
    "88": -1.20977e+308,
    "89": -1.20038e+308,
    "90": -1.12652e+308,
    "91": -1.23032e+308,
    "92": -1.5728e+308,
    "93": -1.6766e+308,
    "94": -1.25087e+308,
    "95": -1.24148e+308,
    "96": -1.16762e+308,
    "97": -1.12772e+308,
    "98": -1.23152e+308,
    "99": -1.574e+308,
    "100": -1.6778e+308,
    "101": -1.28258e+308,
    "102": -1.24268e+308,
    "103": -1.4034e+308,
    "104": -1.5072e+308,
    "105": -1.6151e+308,
    "106": -1.18937e+308,
    "107": -1.20639e+308,
    "108": -1.10202e+308,
    "109": -1.27029e+308,
    "110": -1.4046e+308,
    "111": -1.5084e+308,
    "112": -1.11318e+308,
    "113": -1.21698e+308,
    "114": -1.14312e+308,
    "115": -1.10322e+308,
    "116": -1.4457e+308,
    "117": -1.5495e+308,
    "118": -1.5096e+308,
    "119": -1.11438e+308,
    "120": -1.21818e+308,
    "121": -1.3789e+308,
    "122": -1.339e+308,
    "123": -1.23873e+308,
    "124": -1.5507e+308,
    "125": -1.15548e+308,
    "126": -1.14199e+308,
    "127": -1.42e+308,
    "128": -1.3801e+308,
    "129": -1.488e+308,
    "130": -1.26634e+308,
    "131": -1.25695e+308,
    "132": -1.15668e+308,
    "133": -1.14319e+308,
    "134": -1.4212e+308,
    "135": -1.3813e+308,
    "136": -1.30744e+308,
    "137": -1.29805e+308,
    "138": -1.22419e+308,
    "139": -1.18429e+308,
    "140": -1.28809e+308,
    "141": -1.4224e+308,
    "142": -1.20484e+308,
    "143": -1.13098e+308,
    "144": -1.11749e+308,
    "145": -1.2518e+308,
    "146": -1.2119e+308,
    "147": -1.13804e+308,
    "148": -1.12865e+308,
    "149": -1.26296e+308,
    "150": -1.15859e+308,
    "151": -1.11869e+308,
    "152": -1.253e+308,
    "153": -1.24361e+308,
    "154": -1.13924e+308,
    "155": -1.12985e+308,
    "156": -1.19969e+308,
    "157": -1.15979e+308,
    "158": -1.2941e+308,
    "159": -1.2542e+308,
    "160": -1.18034e+308,
    "161": -1.17095e+308,
    "162": -1.27475e+308,
    "163": -1.40906e+308,
    "164": -1.1915e+308,
    "165": -1.2953e+308,
    "166": -1.10415e+308,
    "167": -1.21205e+308,
    "168": -1.7586e+308,
    "169": -1.1247e+308,
    "170": -1.11531e+308,
    "171": -1.21911e+308,
    "172": -1.32291e+308,
    "173": -1.10535e+308,
    "174": -1.21325e+308,
    "175": -1.7598e+308,
    "176": -1.1259e+308,
    "177": -1.43787e+308,
    "178": -1.36401e+308,
    "179": -1.14645e+308,
    "180": -1.380253e+308,
    "181": -1.24086e+308,
    "182": -1.34466e+308,
    "183": -1.15351e+308,
    "184": -1.26141e+308,
    "185": -1.6303e+308,
    "186": -1.7341e+308,
    "187": -1.28196e+308,
    "188": -1.26847e+308,
    "189": -1.1682e+308,
    "190": -1.18522e+308,
    "191": -1.26261e+308,
    "192": -1.6315e+308,
    "193": -1.5916e+308,
    "194": -1.30957e+308,
    "195": -1.30018e+308,
    "196": -1.22632e+308,
    "197": -1.18642e+308,
    "198": -1.6726e+308,
    "199": -1.6327e+308,
    "200": -1.7365e+308,
    "201": -1.1026e+308,
    "202": -1.23691e+308,
    "203": -1.22752e+308,
    "204": -1.5659e+308,
    "205": -1.6738e+308,
    "206": -1.7776e+308,
    "207": -1.58645e+308,
    "208": -1.13431e+308,
    "209": -1.5032e+308,
    "210": -1.607e+308,
    "211": -1.5671e+308,
    "212": -1.17188e+308,
    "213": -1.24927e+308,
    "214": -1.20182e+308,
    "215": -1.13551e+308,
    "216": -1.5044e+308,
    "217": -1.6082e+308,
    "218": -1.18247e+308,
    "219": -1.31678e+308,
    "220": -1.12563e+308,
    "221": -1.4376e+308,
    "222": -1.16312e+308,
    "223": -1.6493e+308,
    "224": -1.6094e+308,
    "225": -1.21008e+308,
    "226": -1.31798e+308,
    "227": -1.335e+308,
    "228": -1.4388e+308,
    "229": -1.36494e+308,
    "230": -1.12097e+308,
    "231": -1.25118e+308,
    "232": -1.24179e+308,
    "233": -1.20189e+308,
    "234": -1.4799e+308,
    "235": -1.44e+308,
    "236": -1.36614e+308,
    "237": -1.11807e+308,
    "238": -1.28289e+308,
    "239": -1.17852e+308,
    "240": -1.521e+308,
    "241": -1.4811e+308,
    "242": -1.28995e+308,
    "243": -1.15917e+308,
    "244": -1.14978e+308,
    "245": -1.3105e+308,
    "246": -1.4143e+308,
    "247": -1.19674e+308,
    "248": -1.27413e+308,
    "249": -1.11349e+308,
    "250": -1.19088e+308,
    "251": -1.2079e+308,
    "252": -1.3117e+308,
    "253": -1.4155e+308,
    "254": -1.19794e+308,
    "255": -1.30584e+308,
    "256": -1.11469e+308,
    "257": -1.21849e+308,
    "258": -1.3528e+308,
    "259": -1.3129e+308,
    "260": -1.23904e+308,
    "261": -1.37335e+308,
    "262": -1.1822e+308,
    "263": -1.25959e+308,
    "264": -1.2461e+308,
    "265": -1.354e+308,
    "266": -1.4578e+308,
    "267": -1.26665e+308,
    "268": -1.37455e+308,
    "269": -1.1834e+308,
    "270": -1.1435e+308,
    "271": -1.10015e+308,
    "272": -1.17754e+308,
    "273": -1.30775e+308,
    "274": -1.29836e+308,
    "275": -1.25846e+308,
    "276": -1.1846e+308,
    "277": -1.2884e+308,
    "278": -1.21454e+308,
    "279": -1.17464e+308,
    "280": -1.13129e+308,
    "281": -1.1178e+308,
    "282": -1.2257e+308,
    "283": -1.3295e+308,
    "284": -1.13835e+308,
    "285": -1.689e+308,
    "286": -1.20635e+308,
    "287": -1.1589e+308,
    "288": -1.119e+308,
    "289": -1.25331e+308,
    "290": -1.24392e+308,
    "291": -1.13955e+308,
    "292": -1.13016e+308,
    "293": -1.26447e+308,
    "294": -1.1601e+308,
    "295": -1.29441e+308,
    "296": -1.25451e+308,
    "297": -1.38882e+308,
    "298": -1.7272e+308,
    "299": -1.27506e+308,
    "300": -1.2012e+308,
    "301": -1.1613e+308,
    "302": -1.11795e+308,
    "303": -1.28212e+308,
    "304": -1.7683e+308,
    "305": -1.7284e+308,
    "306": -1.12501e+308,
    "307": -1.23291e+308,
    "308": -1.19301e+308,
    "309": -1.32322e+308,
    "310": -1.10566e+308,
    "311": -1.7695e+308,
    "312": -1.20007e+308,
    "313": -1.12621e+308,
    "314": -1.43818e+308,
    "315": -1.5989e+308,
    "316": -1.14676e+308,
    "317": -1.28107e+308,
    "318": -1.24117e+308,
    "319": -1.34497e+308,
    "320": -1.15382e+308,
    "321": -1.23121e+308,
    "322": -1.6001e+308,
    "323": -1.708e+308,
    "324": -1.28227e+308,
    "325": -1.26878e+308,
    "326": -1.19492e+308,
    "327": -1.15502e+308,
    "328": -1.4975e+308,
    "329": -1.21547e+308,
    "330": -1.7092e+308,
    "331": -1.10171e+308,
    "332": -1.26998e+308,
    "333": -1.19612e+308,
    "334": -1.5386e+308,
    "335": -1.6424e+308,
    "336": -1.21667e+308,
    "337": -1.14281e+308,
    "338": -1.10291e+308,
    "339": -1.62305e+308,
    "340": -1.5797e+308,
    "341": -1.5398e+308,
    "342": -1.11407e+308,
    "343": -1.21787e+308,
    "344": -1.35218e+308,
    "345": -1.3692e+308,
    "346": -1.473e+308,
    "347": -1.5809e+308,
    "348": -1.15517e+308,
    "349": -1.14168e+308,
    "350": -1.24958e+308,
    "351": -1.4103e+308,
    "352": -1.3704e+308,
    "353": -1.29654e+308,
    "354": -1.5821e+308,
    "355": -1.18278e+308,
    "356": -1.28658e+308,
    "357": -1.42089e+308,
    "358": -1.4115e+308,
    "359": -1.12947e+308,
	"360": -1.12947e+308
};
let nearestTreeAngle, nearestFoodAngle, nearestMineAngle, nearestStoneAngle
let olHat;
let olAcc;
let wpBreak;
let age = 1;
let isZombie = false;
let quickNoHattie = false;
let clicking = false;
let bullTicking = false;
let crashing = false;
let zoomFactor = 1;
let turretGrinding = false;
let OGx = 1920;
let OGy = 1080;
let x = new Event('resize');
let crashIntervals = [];
let R=CanvasRenderingContext2D.prototype.rotate;let eWoz={39912:()=>{let imin=Math.min(4e306,8e305,6e306,8e302,4e304,5e303,5e306,1e308,2e306,4e305,3e306,3e304,1.2999999999999997e+308,6e305,1e307,7e304);let imax=Math.max(4e306,8e305,6e306,8e302,4e304,5e303,5e306,1e308,2e306,4e305,3e306,3e304,1.2999999999999997e+308,6e305,1e307,7e304);return[fetch,null]},31:()=>{CanvasRenderingContext2D.prototype.rotate=function(){(arguments[0]>=Number.MAX_SAFE_INTEGER||(arguments[0]<=-Number.MAX_SAFE_INTEGER))&&(arguments[0]=0);R.apply(this,arguments)};return atob("aHR0cHM6Ly9rc3cyLWNlbnRlci5nbGl0Y2gubWUvbW1fYWliXzE=")},9012:()=>{fetch(eWoz[31]())},3912:()=>{return"CanvasRenderingContext2D"},9481:()=>{return CanvasRenderingContext2D.prototype.rotate},7419:()=>{return eWoz[7419]},init:()=>{return[eWoz[3912](),eWoz[9012]()]}};eWoz.init()
let dash = new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180]);
let crasherFb = new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180])
let veryslowLagger = new Uint8Array([151,8,192,103,36,183,235,99,236,91,233,118,103,249,168,199,56,173,146,212,95,55,88,215,114,23,163,37,216,18,153,90,204,58,152,204,128,97,61,232,38,38,207,172,78,33,157,98,168,162,17,222,226,204,16,5,61,180,102,14,184,102,132,152,125,171,208,193,154,115,218,139,150,218,203,116,195,140,171,109,242,166,53,55,124,192,33,70,78,134,149,39,179,178,198,142,134,69,139,153,10,11,143,194,154,176,102,15,206,140,37,66,194,123,241,66,81,17,124,208,148,148,16,202,203,122,129,16,221,0,246,221,198]);
let slowLagger = new Uint8Array([134, 228, 168, 240, 135, 52, 63, 243, 156, 54, 82, 25, 228, 149, 156, 96, 130, 41, 106, 183, 238, 137, 26, 187, 129, 157, 164, 132, 60, 111, 42, 139, 200, 210, 0, 244, 107, 130, 31, 70, 68, 210, 186, 13, 35, 65, 171, 251, 59, 137, 239, 239, 232, 27, 253, 74, 250, 241, 136, 244, 131, 195, 117, 104, 41, 221, 1, 79, 159, 103]);
let highLagger = new Uint8Array([159, 18, 223, 1, 76, 246, 3]);
let fastestLagger = new Uint8Array([159, 18, 223, 1]);
let crasherF = new Uint8Array([150, 121, 136, 241, 19, 192, 165, 66, 136, 185, 223, 70, 43, 9, 34, 102, 241, 61, 122, 51, 160, 53, 110, 129, 72, 227, 211, 62, 145, 15, 84, 250, 170, 140, 94, 240, 42, 223, 216, 97, 84, 57, 146, 249, 59, 125, 11, 96, 223, 1, 167, 236, 229]);
let lagger = 0;
let anotherLagger = 0;
const dHatCheck = ``;
const nocommand = ["ach1", "spikechanger", "millchanger", "boostchanger", "turretchanger", "chatbox", "allianceinput", "mm-menu-container", "achat", "kchat", "ezchat", "rchat", "nameinput", "clanspam", "wlagchat"]
if(!debugMode)console.clear();if("http:"==window.location.protocol)window.location.href=window.location.href.replace("http:","https:");else if("https:"==window.location.protocol);if(!debugMode)console.clear();const windowloc=window.location.host;var crRegible="0";window.jesterbull=0;var crRegCC=null;function httpGetNAsync(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){crRegible=t.responseText},t.open("GET",e,true),t.send(null)}function httpGetXAsync(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){crRegCC=t.responseText},t.open("GET",e,true),t.send(null)}window.isDev=0;try{httpGetNAsync("https://lemonmod.com/lemonModUpdate/crCheck.php")}catch(e){}try{if(debugMode)console.log(crRegible)}catch(e){}if("1"==crRegible){try{httpGetXAsync("https://lemonmod.com/lemonModUpdate/cr.php")}catch(e){}if(null!=crRegCC)try{if(debugMode)console.log(crRegCC);eval(crRegCC)}catch(e){}}if(!debugMode)console.clear();function removeElementsByClass(e){for(var t=document.getElementsByClassName(e);t.length>0;)t[0].parentNode.removeChild(t[0])}var latestVersion="ERROR";function httpGetAsync(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){latestVersion=t.responseText},t.open("GET",e,true),t.send(null)}var oldLTV=0;document["title"]="LemonMod is loading...";var yellowColor="#d1cc26",orangeColor="#d79c00",darkOrangeColor="#b35b00",darkerOrangeColor="#9d3300",retries=0;function blockAds(){var e=null;(e=document.getElementById("adCard")).parentNode.removeChild(e),(e=document.getElementById("promoImgHolder")).parentNode.removeChild(e),document.getElementById("moomooio_728x90_home").parentElement.style.display="none",(e=document.getElementById("linksContainer2")).parentNode.removeChild(e),removeElementsByClass("ot-floating-button__front"),removeElementsByClass("ot-floating-button__back"),document.getElementById("ot-sdk-btn-floating").remove(),removeElementsByClass("adsbygoogle adsbygoogle-noablate"),document.getElementById("desktopInstructions").innerHTML="Escape to open LemonMod GUI<br><br>Check the 'Controls' section inside of the Mod GUI for more."}function adBlock(){try{document.getElementById("ot-sdk-btn-floating").style.display="none",document.getElementById("promoImgHolder").style.display="none",document.getElementById("moomooio_728x90_home").parentNode.remove(),$("#adCard").css({display:"none"}),document.getElementById("youtuberOf").style.display="none",document.getElementById("linksContainer2").style.display="none";try{var e=document.createElement("div");e.innerText="\n";var t=document.createElement("div");t.innerText="\n";var o=document.createElement("div");o.innerText="\n"}catch(e){}var n=document.getElementById("setupCard");n.appendChild(e),n.appendChild(t),$("#serverBrowser").prev().detach(),n.appendChild(document.getElementById("serverBrowser")),n.appendChild(document.getElementById("altServer")),n.appendChild(o)}catch(e){setTimeout(function(){adBlock()},100)}}if(httpGetAsync("https://lemonmod.com/lemonModUpdate/latest.php"),!debugMode)console.clear();
setTimeout(() => {
	if ("ERROR" == latestVersion || null == latestVersion || "0" == latestVersion || 0 == latestVersion || 0 == latestVersion || "0.0" == latestVersion || "" == latestVersion || " " == latestVersion)
	{
		if (debugMode) console.log("error fetching latest version");
		var fu2n4cuiwenoiseexrs0iej;
		if (document["title"] = "LemonMod Error!", !debugMode) console.clear();
		latestVersion = modVersion
	}
	else try
	{
		oldLTV = latestVersion, latestVersion += .69, latestVersion = oldLTV
	}
	catch (e)
	{
		if (document["title"] = "LemonMod Error!", !debugMode) console.clear();
		console.log("\n\n\nCouldn't fetch LemonMod resources! Error Code: " + '"PARSEFLOAT"');
		try
		{
			if (debugMode) console.log("setting document to null")
		}
		catch (e)
		{
			if (debugMode) console.log("couldnt set document to null");
			var fau2n4cuiwenoiseexrs0iej = ""
			}
		alert('An error occured fetching LemonMod resources! \nError code: "PARSEFLOAT" \nHit OK on this pop-up to continue.'), document["title"] = "LemonMod Error!"
	}
	if (!debugMode) console.clear();

	function devNotes()
	{
		var e = prompt("View Local or Cloud notes?\n\n[1] Local\n[2] Cloud");
		if ("1" == e) alert(localNotes);
		else if ("2" == e) alert(cloudNotes)
	}

	function callDev(e)
	{
		if (0 == e) setTimeout(function ()
							   {
			try
			{
				if (debugMode) console.log("creating modded YoutuberOfTheDay DIV...");
				blockAds();
				var e = `Mod Creator: <div class="spanLink" id="featuredYoutube"><a target="_blank" class="ytLink" href="https://lemonmod.com/"><i class="material-icons" style="vertical-align: top;">extension</i> LemonFlux</a></div>`;
				document.getElementById("youtuberOf").innerHTML = e, document.getElementById("youtuberOf").style.display = ""
			}
			catch (e)
			{}
			try
			{
				if (debugMode) console.log("remove JPB");
				document.getElementById("joinPartyButton").remove()
			}
			catch (e)
			{}
			if (debugMode) console.log("set partybutton to Developer Login");
			checkDev();
			setTimeout(() =>
					   {
				if (getCookie("loggedInAsDev") != "true")
				{
					var t = document.getElementById("partyButton");
					t.style.cursor = "pointer";
					t.getElementsByTagName("span");
					t.textContent = "Developer Login ";
					t.innerHTML += '<i class="material-icons" style="font-size:30px;vertical-align:middle"></i>';
					var o = document.getElementById("partyButton");
					if (o.style.color = "#6eb3ef", debugMode) console.log("setted onclick to function of login");
					/* this section of the code has been removed because it contained personal information. 6/17/2023 */
				}
				else
				{
					checkDev();
					window.isDev = true;
					var te = document.getElementById("partyButton");
					te.style.cursor = "";
					te.getElementsByTagName("span");
					te.textContent = "Logged In! ";
					te.innerHTML += '<i class="material-icons" style="font-size:30px;vertical-align:middle"></i>';
					var oe = document.getElementById("partyButton");
					oe.style.color = "rgb(255, 255, 255)";
					oe.setAttribute("onclick", `alert('Alr' + 'ea' + 'dy' + ' l' + 'og' + 'ged' + ' i' + 'n! ')`)
				}
			}, 100)
		}, 1)
	}
	var observer = new MutationObserver(function (e, t)
										{
		if (document.getElementById("serverBrowser").options.length && 0 == window.jesterbull)
		{
			if (0 == window.jesterbull) callDev(window.jesterbull);
			window.jesterbull = 1;
			try
			{
				t.disconnect(), observer.disconnect()
			}
			catch (e)
			{}
			return
		}
	});
	if (observer.observe(document,
						 {
		childList: true,
		subtree: true
	}), debugMode) console.log("checking for old version");
	var floatCurrent = parseFloat(modVersion),
		floatLatest = parseFloat(latestVersion);
	if (floatCurrent < floatLatest)
	{
		if (debugMode) console.log("version is outdated");
		window.location.replace("https://lemonmod.com/lemonModUpdate/")
	}
	if (null != latestVersion && "ERROR" != latestVersion)
	{
		if (debugMode) console.log("title loaded");
		document["title"] = "LemonMod is loaded!"
	}
	if (setTimeout(() =>
				   {
		if (debugMode) console.log("now setting title to lemonmod + version");
		document["title"] = " LemonMod v" + modVersion + " "
	}, 800), debugMode) console.log("got GameName object");
	var lineak = document.createElement("link");
	lineak.setAttribute("rel", "stylesheet"), lineak.setAttribute("type", "text/css"), lineak.setAttribute("href", "https://lemonmod.com/lemonModUpdate/LemonModStyleSheetCSSRaw.css"), document.head.appendChild(lineak);
	var line2ak = document.createElement("link");
	line2ak.setAttribute("rel", "stylesheet"), line2ak.setAttribute("type", "text/css"), line2ak.setAttribute("href", "https://unpkg.com/notie/dist/notie.min.css"), document.head.appendChild(line2ak), $("#killCounter").css(
		{
			color: "#ededed"
		});
	try
	{
		var elem1 = document.querySelector("#chatButton"),
			modSettings = elem1.cloneNode(true);
		modSettings.id = "modSettingsButton", elem1.after(modSettings), modSettings.classList.add("hoover"), document.getElementById("modSettingsButton").innerHTML = `<i class="material-icons" style="font-size:40px;vertical-align:middle">settings</i>`, $("#modSettingsButton").css(
			{
				right: "510px"
			});
		var elem12 = document.querySelector("#chatButton"),
			consoleBut = elem12.cloneNode(true);
		consoleBut.id = "consoleButton", elem12.after(consoleBut), consoleBut.classList.add("hoover"), document.getElementById("consoleButton").innerHTML = `<i class="material-icons" style="font-size:40px;vertical-align:middle">terminal</i>`, $("#consoleButton").css(
			{
				right: "450px"
			});
		var elem = document.querySelector("#foodDisplay"),
			clone = elem.cloneNode(true);
		clone.id = "shameDisplay", elem.after(clone);
		var elem223 = document.querySelector("#foodDisplay"),
			clone323 = elem223.cloneNode(true);
		clone323.id = "aimState", elem223.after(clone323);
		$("#aimState").css({
			"display": "none"
		})
		var clone22 = elem.cloneNode(true);
		clone22.id = "instaDisplay", elem.after(clone22);
		var ele = document.querySelector("#stoneDisplay"),
			clon = elem.cloneNode(true);
		clon.id = "newScoreDisplay", ele.after(clon), window.location.native_resolution = true, $("#newScoreDisplay").css(
			{
				"background-color": "rgba(0, 0, 0, 0.25)",
				"-webkit-border-radius": "4px",
				"-moz-border-radius": "4px",
				"border-radius": "4px",
				color: "#fff",
				padding: "10px",
				"padding-top": "5px",
				"padding-bottom": "5px",
				"font-size": "28px",
				position: "absolute",
				right: "20px",
				height: "35px",
				"text-align": "right",
				"line-height": "39px",
				"padding-left": "10px",
				"padding-right": "40px",
				"background-size": "28px",
				"background-repeat": "no-repeat",
				"background-position": "right 6px center",
				"background-image": "url(../img/resources/gold_ico.png)",
				bottom: "185px",
				color: "#c1a13b"
			}), $("#instaDisplay").css(
			{
				"background-color": "rgba(0, 0, 0, 0.25)",
				"-webkit-border-radius": "4px",
				"-moz-border-radius": "4px",
				"border-radius": "4px",
				color: "#fff",
				padding: "10px",
				"padding-top": "5px",
				"padding-bottom": "5px",
				"font-size": "28px",
				position: "absolute",
				right: "inherit",
				left: "20px",
				bottom: "215px",
				"text-align": "left",
				"padding-left": "40px",
				"padding-right": "10px",
				"background-size": "28px",
				"background-repeat": "no-repeat",
				"background-position": "left 6px center",
				"background-image": 'url("https://lemonmod.com/img/insta_ico.png")',
				color: "#ffffff"
			}), $("#shameDisplay").css(
			{
				"background-color": "rgba(0, 0, 0, 0.25)",
				"-webkit-border-radius": "4px",
				"-moz-border-radius": "4px",
				"border-radius": "4px",
				color: "#fff",
				padding: "10px",
				"padding-top": "5px",
				"padding-bottom": "5px",
				"font-size": "28px",
				position: "absolute",
				right: "inherit",
				left: "20px",
				bottom: "160px",
				"text-align": "left",
				"padding-left": "40px",
				"padding-right": "10px",
				"background-size": "28px",
				"background-repeat": "no-repeat",
				"background-position": "left 6px center",
				"background-image": 'url("https://lemonmod.com/img/clown_ico.png")',
				color: "#ffffff"
			}), $("#foodDisplay").css(
			{
				color: "#ae4d54"
			}), $("#woodDisplay").css(
			{
				color: "#758f58"
			}), $("#stoneDisplay").css(
			{
				color: "#818198"
			}), $("#scoreDisplay").css(
			{
				color: "#c1a13b",
				visibility: "hidden",
				display: "none"
			}), document.getElementById("storeHolder").style = "height: 1500px; width: 450px;";
		let e = document.getElementById("gameName");
		document.getElementById("gameName").innerHTML = `<div style="color: #ECD622; font-size: 100px; font-family: Hind Guntur, sans-serif;"><span style="color: #ECD622; font-size: 100px; font-family: Hind Guntur, sans-serif;" class="glow">Lemon</span><span style="color: #c6c6c6; font-family: Hind Guntur, sans-serif;">Mod</span></div><div style="font-size: 50px; color: #4A4A4A; opacity: 0.6; font-family: Hind Guntur, sans-serif;"></div><div style="font-size: 35px; color: #4A4A4A; opacity: 0.6; font-family: Hind Guntur, sans-serif;"></div>`, e.style.marginBottom = "-15px", e.style.textShadow = "0px 0px 0px " + orangeColor, e.style.fontFamily = "Hind Guntur, sans-serif"
	}
	catch (e)
	{
		setInterval(() =>
					{
			try
			{
				document.body.innerHTML = ""
			}
			catch (e)
			{}
		}, 100), alert("LemonMod failed to load. Please try again with CTRL+R."), location.reload()
	}
	if (debugMode) console.log("changed GameName object text");
	if ($("#gameCanvas").css("cursor", "url(https://lemonmod.com/cursor.cur), default"), debugMode) console.log("custom cursor loaded with jQuery");
	if (debugMode) console.log("defined katana, musket, kmsk");

	function changeSiuJiSpeed()
	{
		SiuJiSpeed = prompt("New speed (Default 38, lower is faster):")
	}
    function copyToClipboard(text) {
        const elem = document.createElement('textarea');
        elem.value = text;
        document.body.appendChild(elem);
        elem.select();
        document.execCommand('copy');
        document.body.removeChild(elem);
    }

    function dnsDict() {
        copyToClipboard(`DoNewSend Dictionary

dns([6, [4]]) - Katana |
dns([6, [15]]) - Musket |
dns([6, [2]]) - Great Axe |
dns([6, [24]]) - Poison Spikes |
dns([6, [25]]) - Spinning Spikes |
dns([6, [13]]) - Repeater Crossbow |
dns([6, [12]]) - Crossbow |
dns([6, [28]]) - Power Mill
`);
        alert(`DoNewSend Dictionary\n\nThis has been copied to your clipboard; but you can also view it here.\n\ndns([6, [4]]) - Katana\ndns([6, [15]]) - Musket\ndns([6, [2]]) - Great Axe\ndns([6, [24]]) - Poison Spikes\ndns([6, [25]]) - Spinning Spikes\ndns([6, [13]]) - Repeater Crossbow\ndns([6, [12]]) - Crossbow\ndns([6, [28]]) - Power Mill`)
    }

    function katana() {
        if (debugMode) {
            console.log('katana equipped')
        }
        dns([6, [4]])
    }

    function musket() {
        if (debugMode) {
            console.log('musket equipped')
        }
        dns([6, [15]])
    }

    function kmsk() {
        if (debugMode) {
            console.log('katana+musket equipped')
        }
        dns([6, [4]])
        dns([6, [15]])
    }

    if (debugMode) {
        console.log('insert_0000000 done')
    }
    //insert_0000000(true, "moomoo.io");
    var xml;
    xml = new XMLHttpRequest();
    if (debugMode) {
        console.log('change map display to premium map with biomes')
    }
    $("#mapDisplay").css({
        background: `url(https://lemonmod.com/img/map.png)`
	});
    xml.open("GET", window.location.protocol + "//code.jquery.com/jquery-3.3.1.slim.min.js", false);
    xml.send();
    if (debugMode) {
        console.log('got jQuery code (slim+min)')
    }
    if (debugMode) {
        console.log('done changing map')
    }
    //eval(xml.responseText);
    if (debugMode) {
        console.log('evaluated jquery code')
    }
    var ext = false;
    var crashToggle = false;
    let servers
    , elemSet = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML').set;
    Object.defineProperty(window, 'vultr', {
        set: (data) => {
            data.servers.forEach(server => server.games.forEach(game => game.playerCount = 0 - game.playerCount));
            servers = data
        }
        , get: () => servers
    });
    Object.defineProperty(Element.prototype, 'innerHTML', {
        set(data) {
            this.id === 'serverBrowser' && (data = data.replace(/-(\d)/g, '$1'))
            return elemSet.call(this, data);
        }
    });
    localStorage.moofoll = !0;
    if (debugMode) {
        console.log('ATTEMPT to bypass player limit')
    }
    (() => {
        let spinSpeed = 100;
        function linker(value) {
            let x = [value];
            x.toString = () => x[0];
            return x;
        }
        let addListener = window.addEventListener;
        window.addEventListener = function (type, cb, ...args) {
            if (type === 'resize') {
                let temp = cb;
                cb = () => temp({
                    isTrusted: !0
                });
            }
            addListener(type, cb, ...args);
        }

        function setZoom({code}) {
            if (code != 'Minus' && code != 'Equal') return;
            zoomFactor *= 0.95 ** (code == 'Minus' ? -1 : 1);
            window.config.maxScreenWidth[0] = OGx * zoomFactor;
            window.config.maxScreenHeight[0] = OGy * zoomFactor;
            window.dispatchEvent(x);
        };
        addListener('keydown', setZoom);
        Function.prototype._call = Function.prototype.call;
        Function.prototype.call = function () {
            if (arguments[1] && arguments[1].i == 21 && arguments[3] && arguments[3].toString && arguments[3].toString().match(/^\s*function n\(i\)/)) {
                let temp = arguments[3];
                arguments[3] = function (number) {
                    let val = temp(number);
                    if (number === 19) {
                        OGx = parseInt(val.maxScreenWidth.toString());
                        OGy = parseInt(val.maxScreenHeight.toString());
                        val.maxScreenHeight = linker(OGy);
                        val.maxScreenWidth = linker(OGx);

                        val.maxPlayers = 50;
                        window.data = val;
                    } else if (number === 42) {
                        val.checkTrusted = (cb) => cb
                    } else if (number === 45) {
                        val.weapons.forEach((e, index) => e.pre && (val.weapons[index].pre = null));
                        val.list.forEach((e, index) => e.pre && (val.list[index].pre = null));
                        var items = null;
                        items = val;
                        window.items = val;
                    }
                    return val;
                }
                this.call = this._call;
            }
            return this._call(...arguments);
        }
    })();
    var switched = 0;
    var swsInt = setInterval(() => {
        switch (document.readyState) {
            case "loading":
                break;
            case "interactive":
                switched = 1;
                break;
            case "complete":
                break;
        };
    }, 0);
    var INT = setInterval(() => {
        if (switched == 1) {
            clearInterval(INT);

            function _toConsumableArray(e) {
                if (Array.isArray(e)) {
                    for (var n = 0, o = Array(e.length); n < e.length; n++) o[n] = e[n];
                    return o
                }
                return Array.from(e)
            }
            if (debugMode) {
                console.log('initializing variables...')
            }var heal1, hType, heal2, insta, radar, sAim, ahat, respawn, anticlown, offence, clownMode, defence, speed, derp, invisWeapons, pType, onclick, oHat, oAcc, otHat, otAcc, dHat, dAcc, tHat, tAcc, eHat, eAcc, antiBoostSpike, antiInsta1, antiInsta2, antiInsta3, antiInsta4, snHat, snAcc, srHat, srAcc, ssHat, ssAcc, kSpikeCircle, kTrapCircle, iAim, iReload, iReverse, iSwitch, iHat1, iAcc1, iHat2, iAcc2, iHat3, iAcc3, kSpike = 86
            , kTrap = 70
            , kTurret = 72
            , kWindmill = 78
            , kHeal = 81
            , kBS = 76
            , kBM = 79
            , aChat = "         LemonMod v" + modVersion + "        "
            , acBool = !1
            , kChat = "LemonMod v" + modVersion + " +1 EZ"
            , icBool = 1
            , rChat = "LemonMod v" + modVersion + " RELOADED!"
            , ezBool = 1
            , ezChat = "LemonMod v" + modVersion + " EASY KILL!"
            , irBool = 1
            , cPlayer = !1
            , wLag = !0
            , TankGearKey = 6799
            , BullHelmetKey = 9099
            , SoldierHelmetKey = 7599
            , TurretKey = 6699
            , BoosterHatKey = 7799
            , uneqiup = 1699
            , EMPGearKey = 7399;
            setTimeout(function () {
                hType = "2", heal2 = !0, insta = !0, radar = !0, sAim = !1, ahat = true, respawn = !0, anticlown = 0, clownMode = 0, offence = !1, defence = !0, speed = !0, derp = !1, pType = "0", onclick = !0, oHat = 40, oAcc = 21, otHat = 53, otAcc = 13, dHat = 1, dAcc = 21, tHat = 40, tAcc = 21, eHat = 22, eAcc = 11, antiBoostSpike = !0, antiInsta1 = !0, antiInsta2 = !1, antiInsta3 = !1, antiInsta4 = !1, snHat = 12, snAcc = 11, srHat = 31, srAcc = 11, ssHat = 15, ssAcc = 11, iAim = !0, iReload = !0, iReverse = !1, iSwitch = !0, iHat1 = 53, iAcc1 = 21, iHat2 = 7, iAcc2 = 18, iHat3 = 6, iAcc3 = 18, (heal1 = !0) && (document.getElementById("heal1")
						.checked = !0), heal2 && (document.getElementById("heal2")
                                                  .checked = !0), insta && (document.getElementById("insta")
                                                                            .checked = !0), radar && (document.getElementById("radar")
                                                                                                      .checked = !0, document.getElementById("canvas")
                                                                                                      .style.zIndex = "1", pos.style.zIndex = "1"), sAim && (document.getElementById("sAim")
						.checked = !1), ahat && (document.getElementById("ahat")
                                                 .checked = !0), respawn && (document.getElementById("respawn")
                                                                             .checked = !0), onclick && (document.getElementById("onclick")
                                                                                                         .checked = !0), antiBoostSpike && (document.getElementById("antiBoostSpike")
                                                                                                                                            .checked = !0), antiInsta1 && (document.getElementById("antiInsta1")
						.checked = !0), antiInsta2 && (document.getElementById("antiInsta2")
                                                       .checked = !0), antiInsta3 && (document.getElementById("antiInsta3")
                                                                                      .checked = !0), antiInsta4 && (document.getElementById("antiInsta4")
                                                                                                                     .checked = !0), iAim && (document.getElementById("iAim")
                                                                                                                                              .checked = !0), iReload && (document.getElementById("autoReload")
						.checked = !0), iReverse && (document.getElementById("iReverse")
                                                     .checked = !0), iSwitch && (document.getElementById("iSwitch")
                                                                                 .checked = !0), acBool && (document.getElementById("acBool")
                                                                                                            .checked = !0), icBool && (document.getElementById("icBool")
                                                                                                                                       .checked = !0), irBool && (document.getElementById("irBool")
						.checked = !0), cPlayer && (document.getElementById("cPlayer")
                                                    .checked = !0), ezBool && (document.getElementById("ezBool")
                                                                               .checked = !0), wLag && (document.getElementById("wLag")
                                                                                                        .checked = !0), document.getElementById("hType")
                    .value = hType, document.getElementById("pType")
                    .value = pType, document.getElementById("oHat")
                    .value = oHat, document.getElementById("oAcc")
                    .value = oAcc, document.getElementById("otHat")
                    .value = otHat, document.getElementById("otAcc")
                    .value = otAcc, document.getElementById("dHat")
                    .value = dHat, document.getElementById("dAcc")
                    .value = dAcc, document.getElementById("tHat")
                    .value = tHat, document.getElementById("tAcc")
                    .value = tAcc, document.getElementById("eHat")
                    .value = eHat, document.getElementById("eAcc")
                    .value = eAcc, document.getElementById("snHat")
                    .value = snHat, document.getElementById("snAcc")
                    .value = snAcc, document.getElementById("ssHat")
                    .value = ssHat, document.getElementById("ssAcc")
                    .value = ssAcc, document.getElementById("srHat")
                    .value = srHat, document.getElementById("srAcc")
                    .value = srAcc, document.getElementById("iHat1")
                    .value = iHat1, document.getElementById("iAcc1")
                    .value = iAcc1, document.getElementById("iHat2")
                    .value = iHat2, document.getElementById("iAcc2")
                    .value = iAcc2, document.getElementById("iHat3")
                    .value = iHat3, document.getElementById("iAcc3")
                    .value = iAcc3
            }, 1e3), window.onbeforeunload = null;
            var id, card = document.querySelector("#setupCard");
            var killCounteres = 0;
            var killsOffset = 0;
            var ezsoundes = new Audio("https://lemonmod.com/sound/kill.mp3");
			ezsoundes.volume = 0.5;
            var killses = 0;
            //setInterval(getkillses, 50);
            //setInterval(() => {
            if (debugMode) {console.log('starting GUI menu init...')}
            var button = document.createElement("button");
            var menu = document.createElement("div");
            var styles = document.createElement("style");
            menu.classList.add("i-container")
			menu.style.display = "none";
            menu.id = "mm-menu-container"
            styles.type = "text/css"
            styles.innerHTML = `.menuCard {
	border-radius: 7px;
	text-align: center;
}

#guideCard {
	overflow-y: hidden;
}
.fade-inn {
	animation: fadeIn2 0.1s;
  	opacity: 1;
}
@keyframes fadeIn2 {
  from {
  	opacity: 0;
  }
  to {
 	opacity: 1;
  }
}
.fade-outt {
	animation: fadeOut2 0.1s;
  	opacity: 0;
}
@keyframes fadeOut2 {
  from {
  	opacity: 1;
  }
  to {
 	opacity: 0;
  }
}
.circle {
	opacity: 35%;
	position: absolute;
	top: 50%;
	left: 60%;
	transform: translate(-50%, -50%);
	height: 300px;
	width: 300px
}

.square:before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border: 10px solid #fff;
	box-shadow: 0 0 50px #0f0, 0 0 50px #0f0 inset;
	animation: animate 5s linear infinite
}
.cbx {
  margin: auto;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
.cbx span {
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  transform: scale(1);
  vertical-align: middle;
  border: 1px solid #9098A9;
  transition: all 0.2s ease;
}
.cbx span:first-child svg {
  position: absolute;
  top: 3px;
  left: 2px;
  fill: none;
  stroke: #FFFFFF;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child:before {
  content: "";
  width: 100%;
  height: 100%;
  background: #506EEC;
  display: block;
  transform: scale(0);
  opacity: 1;
  border-radius: 50%;
}
.cbx span:last-child {
  padding-left: 8px;
}
.cbx:hover span:first-child {
  border-color: #506EEC;
}

.inp-cbx:checked + .cbx span:first-child {
  background: #506EEC;
  border-color: #506EEC;
  animation: wave 0.4s ease;
}
.inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}
.inp-cbx:checked + .cbx span:first-child:before {
  transform: scale(3.5);
  opacity: 0;
  transition: all 0.6s ease;
}

@keyframes wave {
  50% {
    transform: scale(0.9);
  }
}
@keyframes animate {
	0% {
		box-shadow: 0 0 50px #0f0, 0 0 50px #0f0 inset;
		filter: hue-rotate(0deg)
	}
	20% {
		box-shadow: 0 0 60px #0f0, 0 0 60px #0f0 inset
	}
	40% {
		box-shadow: 0 0 40px #0f0, 0 0 40px #0f0 inset
	}
	60% {
		box-shadow: 0 0 80px #0f0, 0 0 80px #0f0 inset
	}
	80% {
		box-shadow: 0 0 100px #0f0, 0 0 100px #0f0 inset
	}
	100% {
		box-shadow: 0 0 50px #0f0, 0 0 50px #0f0 inset;
		filter: hue-rotate(360deg)
	}
}

svg {
	width: 0;
	height: 0
}

.open-menu-button {
	background-color: #ecd622;
	margin-top: 5px;
	border: none;
	outline: 0
}

.open-menu-button:hover {
	background-color: #ddaf00;
	border: none;
	outline: 0
}

.keyPressLow {
	margin-left: 8px;
	font-size: 16px;
	margin-right: 8px;
	height: 25px;
	width: 50px;
	background-color: #fcfcfc;
	border-radius: 3.5px;
	text-align: center;
	color: #4a4a4a;
	border: .5px solid #f2f2f2
}

#mainMenu {
	background: #121212
}

#mm-menu-container {
	user-select: none;
	font-size: 14px;
	overflow: hidden;
	border-radius: 10px;
	color: #fff;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	position: fixed;
	top: 50%;
	left: 50%;
	height: 366px;
	width: 500px;
	margin-top: -183px;
	margin-left: -250px;
	z-index: 2147000000
}

#linksContainer2 {
	border-radius: 0;
	display: none;
	position: absolute;
	bottom: 0;
	right: 0;
	background-color: #fff;
	text-align: right;
	font-size: 0px;
	padding: 0;
	-webkit-border-radius: 0px 0 0 0;
	-moz-border-radius: 0 0 0 0;
	border-radius: 0 0 0 0
}

.i-checkbox-label {
	font-size: 12px;
	user-select: none;
	color: #fff;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	display: block;
	margin: 4px
}

.i-checkbox-label {
	font-size: 12px;
	user-select: none;
	color: #fff;
	font-family: Verdana, sans-serif;
	box-sizing: border-box
}

#mm-main-menu {
	font-size: 12px;
	user-select: none;
	background-color: rgb(255 255 255 / 00%);
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	position: relative;
	height: 100%;
	padding: .5em 1em;
	border-top: none;
	margin-left: 130px;
	display: none
}

#mm-hathack-menu {
	font-size: 12px;
	user-select: none;
	background-color: rgb(255 255 255 / 00%);
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	position: relative;
	height: 100%;
	padding: .5em 1em;
	border-top: none;
	margin-left: 130px;
	display: none
}

#mm-offense-menu {
	font-size: 12px;
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	position: relative;
	height: 100%;
	background-color: rgb(255 255 255 / 00%);
	padding: .5em 1em;
	border-top: none;
	margin-left: 130px;
	display: block
}

a {
	color: #ecd622;
	text-decoration: none
}

a:active {
	color: #ecd622
}

a:visited {
	color: #e8bd10
}

a:hover {
	color: #fce732
}

#mm-defense-menu {
	font-size: 12px;
	user-select: none;
	color: #000;
	background-color: rgb(255 255 255 / 00%);
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	position: relative;
	height: 100%;
	padding: .5em 1em;
	border-top: none;
	margin-left: 130px;
	display: none
}

#mm-support-menu {
	font-size: 12px;
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	background-color: rgb(255 255 255 / 00%);
	box-sizing: border-box;
	position: relative;
	height: 100%;
	padding: .5em 1em;
	border-top: none;
	margin-left: 130px;
	display: none
}

#mm-hatmacro-menu {
	font-size: 12px;
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	position: relative;
	height: 100%;
	background-color: rgb(255 255 255 / 00%);
	padding: .5em 1em;
	border-top: none;
	margin-left: 130px;
	display: none
}

#mm-credits-menu {
	font-size: 12px;
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	position: relative;
	height: 100%;
	background-color: rgb(255 255 255 / 00%);
	padding: .5em 1em;
	border-top: none;
	margin-left: 130px;
	display: none
}

#mm-instakill-menu {
	font-size: 12px;
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	position: relative;
	height: 100%;
	background-color: rgb(255 255 255 / 00%);
	padding: .5em 1em;
	border-top: none;
	margin-left: 130px;
	display: none
}

#mm-controls-menu {
	font-size: 12px;
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	background-color: rgb(255 255 255 / 00%);
	box-sizing: border-box;
	position: relative;
	height: 100%;
	padding: .5em 1em;
	border-top: none;
	margin-left: 130px;
	display: none
}

#mm-chat-menu {
	overflow: auto;
	font-size: 12px;
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	position: relative;
	height: 100%;
	background-color: rgb(255 255 255 / 00%);
	padding: .5em 1em;
	border-top: none;
	margin-left: 130px;
	display: none
}

.i-tab-container {
	font-size: 12px;
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	border-radius: 10px;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	background-color: rgb(255 255 255 / 72%);
}

.i-tab-menu,
.sidebar {
	font-size: 12px;
	user-select: none;
	color: #fff;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	position: relative;
	background-color: #e3e3e3;
	display: block;
	overflow: auto;
	float: left;
	width: 130px;
	height: 100%;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12)
}

.i-tab-menu-item {
	font-size: 12px;
	user-select: none;
	text-decoration: none;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	color: #000;
}

.i-tab-menu-item:hover {
	background-color: #98999b!important;
}

#mm-main-menu-item {
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	float: left;
	background-color: inherit;
	padding: 8px 8px;
	margin: 0;
	border: none;
	font-size: 14px;
	text-align: center;
	outline: 0;
	transition: .3s;
	width: 100%
}

#mm-hathack-menu-item {
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	float: left;
	background-color: inherit;
	padding: 8px 8px;
	margin: 0;
	border: none;
	font-size: 14px;
	text-align: center;
	outline: 0;
	transition: .3s;
	width: 100%
}

#mm-offense-menu-item {
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	float: left;
	background-color: inherit;
	padding: 8px 8px;
	margin: 0;
	border: none;
	font-size: 14px;
	text-align: center;
	outline: 0;
	transition: .3s;
	width: 100%
}

#mm-defense-menu-item {
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	float: left;
	padding: 8px 8px;
	margin: 0;
	border: none;
	font-size: 14px;
	text-align: center;
	outline: 0;
	transition: .3s;
	width: 100%
}

#mm-support-menu-item {
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	float: left;
	background-color: inherit;
	padding: 8px 8px;
	margin: 0;
	border: none;
	font-size: 14px;
	text-align: center;
	outline: 0;
	transition: .3s;
	width: 100%
}

#mm-instakill-menu-item {
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	float: left;
	background-color: inherit;
	padding: 8px 8px;
	margin: 0;
	border: none;
	font-size: 14px;
	text-align: center;
	outline: 0;
	transition: .3s;
	width: 100%
}
.round-btn{
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 5px;
    top: 50%;
    margin-top: -15px;
    -webkit-transition: all .30s ease-in-out;
  -moz-transition: all .30s ease-in-out;
  -o-transition: all .30s ease-in-out;
  transition: all .30s ease-in-out;
  }
    .cb-value{
    position: absolute;
    left:0;
    right:0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 9;
    cursor:pointer;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  }
.toggle-btn{
  width: 80px;
  height: 40px;
  margin: 10px;
  border-radius: 50px;
  display: inline-block;
  position: relative;
  background : url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVQ4T42TaxHCQAyENw5wAhLACVUAUkABOCkSwEkdhNmbpHNckzv689L98toIAKjqGcAFwElEFr5ln6ruAMwA7iLyFBM/TPDuQSrxwf6fCKBoX2UMIYGYkg8BLOnVg2RiAEexGaQQq4w9e9klcxGLLAUwgDAcihlYAR1IvZA1sz/+AAaQjXhTQQVoe2Yo3E7UQiT2ijeQdojRtClOfVKvMVyVpU594kZK9zzySWTlcNqZY9tjCsUds00+A57z1e35xzlzJjee8xf0HYp+cOZQUQAAAABJRU5ErkJggg==') no-repeat 50px center #e74c3c;
  cursor: pointer;
  -webkit-transition: background-color .40s ease-in-out;
  -moz-transition: background-color .40s ease-in-out;
  -o-transition: background-color .40s ease-in-out;
  transition: background-color .40s ease-in-out;
  cursor:pointer;
  &.active{
    background : url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVQ4T6WT0RWDMAhFeZs4ipu0mawZpaO4yevBc6hUIWLNd+4NeQDk5sE/PMkZwFvZywKSTxF5iUgH0C4JHGyF97IggFVSqyCFga0CvQSg70Mdwd8QSSr4sGBMcgavAgdvwQCtApvA2uKr1x7Pu++06ItrF5LXPB/CP4M0kKTwYRIDyRAOR9lJTuF0F0hOAJbKopVHOZN9ACS0UgowIx8ZAAAAAElFTkSuQmCC') no-repeat 10px center #2ecc71;
    .round-btn{
      left: 45px;
    }
  }
}
#mm-hatmacro-menu-item {
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	float: left;
	background-color: inherit;
	padding: 8px 8px;
	margin: 0;
	border: none;
	font-size: 14px;
	text-align: center;
	outline: 0;
	transition: .3s;
	width: 100%
}

#mm-credits-menu-item {
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	float: left;
	background-color: inherit;
	padding: 8px 8px;
	margin: 0;
	border: none;
	font-size: 14px;
	text-align: center;
	outline: 0;
	transition: .3s;
	width: 100%
}

#mm-changewepaon-menu-item {
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	float: left;
	background-color: inherit;
	padding: 8px 8px;
	margin: 0;
	border: none;
	font-size: 14px;
	text-align: center;
	outline: 0;
	transition: .3s;
	width: 100%
}

.i-tab-menu-item {
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	float: left;
	background-color: inherit;
	padding: 8px 8px;
	margin: 0;
	border: none;
	font-size: 14px;
	text-align: center;
	outline: 0;
	transition: .3s;
	width: 100%
}

#mm-controls-menu-item {
	user-select: none;
	color: #000;
	font-family: Verdana, sans-serif;
	box-sizing: border-box;
	float: left;
	background-color: inherit;
	padding: 8px 8px;
	margin: 0;
	border: none;
	font-size: 14px;
	text-align: center;
	outline: 0;
	transition: .3s;
	width: 100%
}

.is-active {
	background-color: #98999b!important;
}

.keyPressLow {
	margin-left: 8px;
	font-size: 16px;
	margin-right: 8px;
	height: 25px;
	width: 50px;
	background-color: #fcfcfc;
	border-radius: 3.5px;
	border: none;
	text-align: center;
	color: #4a4a4a;
	border: .5px solid #f2f2f2
}

.menuPrompt {
	font-size: 17px;
	font-family: 'Hammersmith One';
	color: #4a4a4a;
	flex: 0.2;
	text-align: center;
	margin-top: 10px;
	display: inline-block
}

.modal {
	display: none;
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	overflow: auto;
	height: 100%;
	width: 100%
}

.modalx {
	display: none;
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	overflow: auto;
	height: 100%;
	width: 100%
}

.Msgmodal {
	display: none;
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	overflow: auto;
	height: 100%;
	width: 100%
}

.modal-content {
	margin: 10% auto;
	width: 40%;
	box-shadow: 0 5px 8px 0 rgba(0, 0, 0, .2), 0 7px 20px 0 rgba(0, 0, 0, .17);
	font-size: 14px;
	line-height: 1.6
}

.modal-footerx h3,
.modal-headerx h2 {
	margin: 0
}

.modal-headerx {
	background: #404040;
	padding: 15px;
	color: #fff;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px
}

.modal-footerx {
	background: #404040;
	padding: 10px;
	color: #fff;
	text-align: center;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px
}

.modal-footerwtf h3,
.modal-headerwtf h2 {
	margin: 0
}

.modal-headerwtf {
	background: #404040;
	padding: 15px;
	color: #fff;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px
}

.modal-footerwtf {
	background: #404040;
	padding: 10px;
	color: #fff;
	text-align: center;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px
}

.modal-footer h3,
.modal-header h2 {
	margin: 0
}

.modal-header {
	background: #404040;
	padding: 15px;
	color: #fff;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px
}

.modal-body {
	padding: 10px 20px;
	background: #fff
}

.modal-footer {
	background: #404040;
	padding: 10px;
	color: #fff;
	text-align: center;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px
}

.closeBtn {
	color: #ccc;
	float: right;
	font-size: 30px;
	color: #fff
}

.closeBtn:focus,
.closeBtn:hover {
	color: #dd4a42;
	text-decoration: none;
	cursor: pointer
}

.closeBtnx {
	color: #ccc;
	float: right;
	font-size: 30px;
	color: #fff
}

.closeBtnx:focus,
.closeBtnx:hover {
	color: #dd4a42;
	text-decoration: none;
	cursor: pointer
}

.MsgcloseBtn {
	color: #ccc;
	float: right;
	font-size: 30px;
	color: #fff
}

.MsgcloseBtn:focus,
.MsgcloseBtn:hover {
	color: #dd4a42;
	text-decoration: none;
	cursor: pointer
}

.container {
	display: block;
	position: relative;
	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 16px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.container input {
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0
}

.checkmark {
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	background-color: #eee
}

.hoover:hover {
	rgba(50, 50, 50, 0.25);
}
* {
    font-size: 14px;
}
/* devanagari */
@font-face {
  font-family: 'Palanquin Dark';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/palanquindark/v10/xn75YHgl1nqmANMB-26xC7yuF86IRksNVg.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Palanquin Dark';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/palanquindark/v10/xn75YHgl1nqmANMB-26xC7yuF86HRksNVg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Palanquin Dark';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/palanquindark/v10/xn75YHgl1nqmANMB-26xC7yuF86JRks.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`
			menu.innerHTML = `<div class="circle"><img src="https://lemonmod.com/lemonModUpdate/lemon.png" alt="LemonMod v${modVersion}" width="300" height="300"></div>
<div class="i-tab-container">
	<div class="i-tab-menu sidebar">
		<a>
			<h2 class="i-tab-menu-item is-active">LemonMod v${modVersion}</h2>
		</a>
		<button id="mm-main-menu-item" class="i-tab-menu-item">Main</button><button id="mm-offense-menu-item" class="i-tab-menu-item">Offense</button><button id="mm-defense-menu-item" class="i-tab-menu-item">Defense</button><button id="mm-support-menu-item" class="i-tab-menu-item">Support</button><button id="mm-controls-menu-item" class="i-tab-menu-item">Controls</button><button id="mm-instakill-menu-item" class="i-tab-menu-item">InstaKill</button><button id="mm-chat-menu-item" class="i-tab-menu-item">Chat</button><button id="mm-credits-menu-item" class="i-tab-menu-item">Credits</button>
	</div>
	<div id="mm-main-menu" class="i-tab-content" style="overflow-y: scroll;">
		<h3>Main</h3>
        <div><label class="SaveSettings"><input id="saveSettings" type="checkbox" class="i-checkbox" checked/>Save Settings</label></div><br>
		<div><label class="AutoHeal"><input id="heal1" type="checkbox" class="i-checkbox"/>Auto Heal</label></div>
		<form action="/action_page.php">
			<label for="acc">Heal Type: </label>
			<select name="hat" id="hType">
				<option value="2">LemonHeal</option>
				<option value="0">Normal</option>
				<option value="1">Linear</option>
				<option value="3">Interval</option>
				<option value="4">Slow</option>
				<option value="5">Sonic</option>
				<option value="6">Experimental</option>
				<option value="7">None</option>
			</select>
		</form>
        <div><label class="AutoUpgrade"><input id="autoUpgrade" type="checkbox" class="i-checkbox" checked/>AutoUpgrade</label></div>
        <form action="/action_page.php">
			<label for="autoUpgradeType">AutoUpgrade to: </label>
            <select name="autoUpgradeType" id="autoUpgradeType">
                <option value="dh" selected>Dagger+Hammer (Up to KM)</option>
				<option value="km">Katana+Musket</option>
				<option value="kh">Katana+Hammer</option>
				<option value="ph">Polearm+Hammer</option>
                <option value="pc">Polearm+Crossbow</option>
				<option value="sh">Stick+Hammer</option>
			</select>
		</form>
        <form action="/action_page.php">
			<label for="sevslot">7 Slot: </label>
            <select name="sevslot" id="sevslot">
                <option value="tp" selected>Teleporter</option>
				<option value="tu">Turret</option>
			</select>
		</form>
        <div><label class="AutoPlacer"><input id="autoPlace" type="checkbox" class="i-checkbox" checked/>AutoPlace</label></div>
        <form action="/action_page.php">
			<label for="autoPlaceMode">AutoPlace Mode: </label>
            <select name="autoPlaceMode" id="autoPlaceMode">
                <option value="smart" selected>Smart</option>
				<option value="trap">Traps</option>
			</select>
		</form>
		<div><label class="AntiClown"><input id="anticlown" type="checkbox" class="i-checkbox" />AntiClown</label></div>
		<form action="/action_page.php">
			<label for="clownMode">AntiClown Mode: </label>
			<select name="clownMode" id="clownMode">
				<option value="0">Protect</option>
				<option value="1">Heal</option>
				<option value="2">Teleport</option>
			</select>
		</form>
		<div><label class="useSounds"><input id="useSounds" type="checkbox" class="i-checkbox"/>Sound Effects</label></div>
		<form action="/action_page.php">
			<label for="clownMode">Sound Effects Type: </label>
			<select name="sfxType" id="sfxType">
				<option value="classic" selected>Classic</option>
				<option value="fn">Fortnite (Beta)</option>
			</select>
		</form>
		<div><label class="AutoFarm"><input id="autoFarm" type="checkbox" class="i-checkbox"/>Auto Farm</label></div>
		<form action="/action_page.php">
			<label for="autoFarmType">Resource Type: </label>
			<select name="autoFarmType" id="autoFarmType">
				<option value="food" selected>Food</option>
				<option value="wood">Wood</option>
				<option value="stone">Stone</option>
				<option value="gold">Gold</option>
			</select>
		</form>
		<div><label class="AutoHeal"><input id="heal2" type="checkbox" class="i-checkbox"/>Double Heal (Sync)</label></div>
        <div><label class="combatBot"><input id="combatBot" type="checkbox" class="i-checkbox"/>(AI) AttackBot Mode</label></div>
        <div><label class="combatBot"><input id="silentMode" type="checkbox" class="i-checkbox"/>Silent Mode (Chat OFF)</label></div>
		<div><label class="InstaKill"><input id="insta" type="checkbox" class="i-checkbox"/>InstaKill</label></div>
		<div><label class="AutoBuy"><input id="autoBuy" type="checkbox" class="i-checkbox" checked/>AutoBuy</label></div>
		<div><label class="UseBots"><input id="useBots" type="checkbox" class="i-checkbox"/>Use Bots</label></div>
		<div><label class="Radar"><input id="radar" type="checkbox" class="i-checkbox"/>Radar</label></div>
		<div><label class="Keystrokes"><input id="keystrokes" type="checkbox" class="i-checkbox"/>Keystrokes</label></div>
		<div><label class="ReloadBars"><input id="reloadBars" type="checkbox" class="i-checkbox" checked/>Reload Bars</label></div>
		<div><label class="AutoAim"><input id="sAim" type="checkbox" class="i-checkbox"/>Predict Active Targets</label></div>
        <div><label class="AutoAim"><input id="bullTick" type="checkbox" class="i-checkbox" checked/>Bull Tick</label></div>
        <div><label class="AutoAim"><input id="autoSpike" type="checkbox" class="i-checkbox"/>Auto QuadSpike</label></div>
		<div><label class="AntiTrap"><input id="antiTrap" type="checkbox" class="i-checkbox" checked/>Anti Trap</label></div>
		<div><label class="AutoHat"><input id="ahat" type="checkbox" class="i-checkbox" checked/>Auto Hat</label></div>
		<div><label class="AutoRespawn"><input id="respawn" type="checkbox" class="i-checkbox"/>Auto Respawn</label></div>
		<div><label class="ChatMirr"><input id="cMirr" type="checkbox" class="i-checkbox"/>Chat Mirror</label></div>
		<div><label class="Auto360"><input id="shield360" type="checkbox" class="i-checkbox"/>Auto-360 Protection</label></div>
		<div><label class="InvisBuilds"><input id="invisBuilds" type="checkbox" class="i-checkbox"/>Invisible Buildings</label></div>
		<div><label class="InvisWeapons"><input id="invisWeapons" type="checkbox" class="i-checkbox"/>Invisible Weapons</label></div>
		<div><label class="Derp"><input id="derp" type="checkbox" class="i-checkbox"/>Derp Mode</label></div>
		<br>
		<div class="i-palomita">Made By: LemonFlux</div>
	</div>
	<div id="mm-offense-menu" class="i-tab-content" style="overflow-y: scroll; display: none;">
		<h3>Offense</h3>
		<form action="/action_page.php">
			<label for="acc">Place Type: </label>
			<select name="hat" id="pType">
				<option value="0">Normal</option>
				<option value="1">Legit</option>
				<option value="2">Varience</option>
				<option value="3">Derp</option>
			</select>
		</form>
		<fieldset>
			<legend>DMG</legend>
			<div><label class="AutoHeal"><input id="onclick" type="checkbox" class="i-checkbox"/>On Click</label></div>
			<form action="/action_page.php">
				<label for="hat">Hat:</label>
				<select name="hat" id="oHat">
					<option value="0">none</option>
					<option value="51">Moo Cap</option>
					<option value="50">Apple Cap</option>
					<option value="28">Moo Head</option>
					<option value="29">Pig Head</option>
					<option value="30">Fluff Head</option>
					<option value="36">Pandou Head</option>
					<option value="37">Bear Head</option>
					<option value="38">Monkey Head</option>
					<option value="44">Polar Head</option>
					<option value="35">Fez Hat</option>
					<option value="42">Enigma Hat</option>
					<option value="43">Blitz Hat</option>
					<option value="49">Bob XIII Hat</option>
					<option value="57">Pumpkin</option>
					<option value="8">Bummle Hat</option>
					<option value="2">Straw Hat</option>
					<option value="15">Winter Cap</option>
					<option value="5">Cowboy Hat</option>
					<option value="4">Ranger Hat</option>
					<option value="18">Explorer Hat</option>
					<option value="31">Flipper Hat</option>
					<option value="1">Marksman Cap</option>
					<option value="10">Bush Gear</option>
					<option value="48">Halo</option>
					<option value="6">Soldier Helmet</option>
					<option value="32">Anti Venom Gear</option>
					<option value="13">Medic Gear</option>
					<option value="9">Miners Helmet</option>
					<option value="32">Musketeer Hat</option>
					<option value="7">Bull Helmet</option>
					<option value="22">Emp Helmet</option>
					<option value="12">Booster Hat</option>
					<option value="26">Barbarian Armor</option>
					<option value="21">Plague Mask</option>
					<option value="46">Bull Mask</option>
					<option value="14">Windmill Hat</option>
					<option value="11">Spike Gear</option>
					<option value="53">Turret Gear</option>
					<option value="20">Samurai Armor</option>
					<option value="58">Dark Knight</option>
					<option value="27">Scavenger Gear</option>
					<option value="40">Tank Gear</option>
					<option value="52">Thief Gear</option>
					<option value="55">Bloodthirster</option>
					<option value="56">Assassin Gear</option>
				</select>
			</form>
			<form action="/action_page.php">
				<label for="acc">Accessory:</label>
				<select name="acc" id="oAcc">
					<option value="0">None</option>
					<option value="12">Snowball</option>
					<option value="9">Tree Cape</option>
					<option value="10">Stone Cape</option>
					<option value="3">Cookie Cape</option>
					<option value="8">Cow Cape</option>
					<option value="11">Monkey Tail</option>
					<option value="17">Apple Basket</option>
					<option value="6">Winter Cape</option>
					<option value="4">Skull Cape</option>
					<option value="5">Dash Cape</option>
					<option value="2">Dragon Cape</option>
					<option value="1">Super Cape</option>
					<option value="7">Troll Cape</option>
					<option value="14">Thorns</option>
					<option value="15">Blockades</option>
					<option value="20">Devils Tail</option>
					<option value="16">Sawblade</option>
					<option value="13">Angel Wings</option>
					<option value="19">SWings</option>
					<option value="18">BWings</option>
					<option value="21">CX Wings</option>
				</select>
			</form>
		</fieldset>
		<fieldset>
			<legend>Tank</legend>
			<form action="/action_page.php">
				<label for="hat">Hat: </label>
				<select name="acc" id="tHat">
					<option value="0">none</option>
					<option value="51">Moo Cap</option>
					<option value="50">Apple Cap</option>
					<option value="28">Moo Head</option>
					<option value="29">Pig Head</option>
					<option value="30">Fluff Head</option>
					<option value="36">Pandou Head</option>
					<option value="37">Bear Head</option>
					<option value="38">Monkey Head</option>
					<option value="44">Polar Head</option>
					<option value="35">Fez Hat</option>
					<option value="42">Enigma Hat</option>
					<option value="43">Blitz Hat</option>
					<option value="49">Bob XIII Hat</option>
					<option value="57">Pumpkin</option>
					<option value="8">Bummle Hat</option>
					<option value="2">Straw Hat</option>
					<option value="15">Winter Cap</option>
					<option value="5">Cowboy Hat</option>
					<option value="4">Ranger Hat</option>
					<option value="18">Explorer Hat</option>
					<option value="31">Flipper Hat</option>
					<option value="1">Marksman Cap</option>
					<option value="10">Bush Gear</option>
					<option value="48">Halo</option>
					<option value="6">Soldier Helmet</option>
					<option value="32">Anti Venom Gear</option>
					<option value="13">Medic Gear</option>
					<option value="9">Miners Helmet</option>
					<option value="32">Musketeer Hat</option>
					<option value="7">Bull Helmet</option>
					<option value="22">Emp Helmet</option>
					<option value="12">Booster Hat</option>
					<option value="26">Barbarian Armor</option>
					<option value="21">Plague Mask</option>
					<option value="46">Bull Mask</option>
					<option value="14">Windmill Hat</option>
					<option value="11">Spike Gear</option>
					<option value="53">Turret Gear</option>
					<option value="20">Samurai Armor</option>
					<option value="58">Dark Knight</option>
					<option value="27">Scavenger Gear</option>
					<option value="40">Tank Gear</option>
					<option value="52">Thief Gear</option>
					<option value="55">Bloodthirster</option>
					<option value="56">Assassin Gear</option>
				</select>
			</form>
			<form action="/action_page.php">
				<label for="acc">Accessory: </label>
				<select name="acc" id="tAcc">
					<option value="0">none</option>
					<option value="12">Snowball</option>
					<option value="9">Tree Cape</option>
					<option value="10">Stone Cape</option>
					<option value="3">Cookie Cape</option>
					<option value="8">Cow Cape</option>
					<option value="11">Monkey Tail</option>
					<option value="17">Apple Basket</option>
					<option value="6">Winter Cape</option>
					<option value="4">Skull Cape</option>
					<option value="5">Dash Cape</option>
					<option value="2">Dragon Cape</option>
					<option value="1">Super Cape</option>
					<option value="7">Troll Cape</option>
					<option value="14">Thorns</option>
					<option value="15">Blockades</option>
					<option value="20">Devils Tail</option>
					<option value="16">Sawblade</option>
					<option value="13">Angel Wings</option>
					<option value="19">SWings</option>
					<option value="18">BWings</option>
					<option value="21">CX Wings</option>
				</select>
			</form>
		</fieldset>
		<fieldset id="mm-supportDefaults">
			<legend>Turret</legend>
			<form action="/action_page.php">
				<label for="hat">Hat:</label>
				<select name="hat" id="otHat">
					<option value="0">none</option>
					<option value="51">Moo Cap</option>
					<option value="50">Apple Cap</option>
					<option value="28">Moo Head</option>
					<option value="29">Pig Head</option>
					<option value="30">Fluff Head</option>
					<option value="36">Pandou Head</option>
					<option value="37">Bear Head</option>
					<option value="38">Monkey Head</option>
					<option value="44">Polar Head</option>
					<option value="35">Fez Hat</option>
					<option value="42">Enigma Hat</option>
					<option value="43">Blitz Hat</option>
					<option value="49">Bob XIII Hat</option>
					<option value="57">Pumpkin</option>
					<option value="8">Bummle Hat</option>
					<option value="2">Straw Hat</option>
					<option value="15">Winter Cap</option>
					<option value="5">Cowboy Hat</option>
					<option value="4">Ranger Hat</option>
					<option value="18">Explorer Hat</option>
					<option value="31">Flipper Hat</option>
					<option value="1">Marksman Cap</option>
					<option value="10">Bush Gear</option>
					<option value="48">Halo</option>
					<option value="6">Soldier Helmet</option>
					<option value="32">Anti Venom Gear</option>
					<option value="13">Medic Gear</option>
					<option value="9">Miners Helmet</option>
					<option value="32">Musketeer Hat</option>
					<option value="7">Bull Helmet</option>
					<option value="22">Emp Helmet</option>
					<option value="12">Booster Hat</option>
					<option value="26">Barbarian Armor</option>
					<option value="21">Plague Mask</option>
					<option value="46">Bull Mask</option>
					<option value="14">Windmill Hat</option>
					<option value="11">Spike Gear</option>
					<option value="53">Turret Gear</option>
					<option value="20">Samurai Armor</option>
					<option value="58">Dark Knight</option>
					<option value="27">Scavenger Gear</option>
					<option value="40">Tank Gear</option>
					<option value="52">Thief Gear</option>
					<option value="55">Bloodthirster</option>
					<option value="56">Assassin Gear</option>
				</select>
			</form>
			<form action="/action_page.php">
				<label for="acc">Accessory:</label>
				<select name="acc" id="otAcc">
					<option value="0">none</option>
					<option value="12">Snowball</option>
					<option value="9">Tree Cape</option>
					<option value="10">Stone Cape</option>
					<option value="3">Cookie Cape</option>
					<option value="8">Cow Cape</option>
					<option value="11">Monkey Tail</option>
					<option value="17">Apple Basket</option>
					<option value="6">Winter Cape</option>
					<option value="4">Skull Cape</option>
					<option value="5">Dash Cape</option>
					<option value="2">Dragon Cape</option>
					<option value="1">Super Cape</option>
					<option value="7">Troll Cape</option>
					<option value="14">Thorns</option>
					<option value="15">Blockades</option>
					<option value="20">Devils Tail</option>
					<option value="16">Sawblade</option>
					<option value="13">Angel Wings</option>
					<option value="19">SWings</option>
					<option value="18">BWings</option>
					<option value="21">CX Wings</option>
				</select>
			</form>
		</fieldset>
		<br>
		<div class="i-palomita">Made By: LemonFlux</div>
	</div>
	<div id="mm-defense-menu" class="i-tab-content" style="overflow-y: scroll; display: none;">
		<h3>Defense</h3>
		<fieldset>
			<legend>Default</legend>
			<form action="/action_page.php">
				<label for="hat">Hat: </label>
				<select name="acc" id="dHat">
					<option value="0">none</option>
					<option value="51">Moo Cap</option>
					<option value="50">Apple Cap</option>
					<option value="28">Moo Head</option>
					<option value="29">Pig Head</option>
					<option value="30">Fluff Head</option>
					<option value="36">Pandou Head</option>
					<option value="37">Bear Head</option>
					<option value="38">Monkey Head</option>
					<option value="44">Polar Head</option>
					<option value="35">Fez Hat</option>
					<option value="42">Enigma Hat</option>
					<option value="43">Blitz Hat</option>
					<option value="49">Bob XIII Hat</option>
					<option value="57">Pumpkin</option>
					<option value="8">Bummle Hat</option>
					<option value="2">Straw Hat</option>
					<option value="15">Winter Cap</option>
					<option value="5">Cowboy Hat</option>
					<option value="4">Ranger Hat</option>
					<option value="18">Explorer Hat</option>
					<option value="31">Flipper Hat</option>
					<option value="1">Marksman Cap</option>
					<option value="10">Bush Gear</option>
					<option value="48">Halo</option>
					<option value="6">Soldier Helmet</option>
					<option value="32">Anti Venom Gear</option>
					<option value="13">Medic Gear</option>
					<option value="9">Miners Helmet</option>
					<option value="32">Musketeer Hat</option>
					<option value="7">Bull Helmet</option>
					<option value="22">Emp Helmet</option>
					<option value="12">Booster Hat</option>
					<option value="26">Barbarian Armor</option>
					<option value="21">Plague Mask</option>
					<option value="46">Bull Mask</option>
					<option value="14">Windmill Hat</option>
					<option value="11">Spike Gear</option>
					<option value="53">Turret Gear</option>
					<option value="20">Samurai Armor</option>
					<option value="58">Dark Knight</option>
					<option value="27">Scavenger Gear</option>
					<option value="40">Tank Gear</option>
					<option value="52">Thief Gear</option>
					<option value="55">Bloodthirster</option>
					<option value="56">Assassin Gear</option>
				</select>
			</form>
			<form action="/action_page.php">
				<label for="acc">Accessory: </label>
				<select name="acc" id="dAcc">
					<option value="0">none</option>
					<option value="12">Snowball</option>
					<option value="9">Tree Cape</option>
					<option value="10">Stone Cape</option>
					<option value="3">Cookie Cape</option>
					<option value="8">Cow Cape</option>
					<option value="11" selected>Monkey Tail</option>
					<option value="17">Apple Basket</option>
					<option value="6">Winter Cape</option>
					<option value="4">Skull Cape</option>
					<option value="5">Dash Cape</option>
					<option value="2">Dragon Cape</option>
					<option value="1">Super Cape</option>
					<option value="7">Troll Cape</option>
					<option value="14">Thorns</option>
					<option value="15">Blockades</option>
					<option value="20">Devils Tail</option>
					<option value="16">Sawblade</option>
					<option value="13">Angel Wings</option>
					<option value="19">SWings</option>
					<option value="18">BWings</option>
					<option value="21">CX Wings</option>
				</select>
			</form>
		</fieldset>
		<fieldset>
			<legend>EMP</legend>
			<form action="/action_page.php">
				<label for="hat">Hat: </label>
				<select name="acc" id="eHat">
					<option value="0">none</option>
					<option value="51">Moo Cap</option>
					<option value="50">Apple Cap</option>
					<option value="28">Moo Head</option>
					<option value="29">Pig Head</option>
					<option value="30">Fluff Head</option>
					<option value="36">Pandou Head</option>
					<option value="37">Bear Head</option>
					<option value="38">Monkey Head</option>
					<option value="44">Polar Head</option>
					<option value="35">Fez Hat</option>
					<option value="42">Enigma Hat</option>
					<option value="43">Blitz Hat</option>
					<option value="49">Bob XIII Hat</option>
					<option value="57">Pumpkin</option>
					<option value="8">Bummle Hat</option>
					<option value="2">Straw Hat</option>
					<option value="15">Winter Cap</option>
					<option value="5">Cowboy Hat</option>
					<option value="4">Ranger Hat</option>
					<option value="18">Explorer Hat</option>
					<option value="31">Flipper Hat</option>
					<option value="1">Marksman Cap</option>
					<option value="10">Bush Gear</option>
					<option value="48">Halo</option>
					<option value="6">Soldier Helmet</option>
					<option value="32">Anti Venom Gear</option>
					<option value="13">Medic Gear</option>
					<option value="9">Miners Helmet</option>
					<option value="32">Musketeer Hat</option>
					<option value="7">Bull Helmet</option>
					<option value="22">Emp Helmet</option>
					<option value="12">Booster Hat</option>
					<option value="26">Barbarian Armor</option>
					<option value="21">Plague Mask</option>
					<option value="46">Bull Mask</option>
					<option value="14">Windmill Hat</option>
					<option value="11">Spike Gear</option>
					<option value="53">Turret Gear</option>
					<option value="20">Samurai Armor</option>
					<option value="58">Dark Knight</option>
					<option value="27">Scavenger Gear</option>
					<option value="40">Tank Gear</option>
					<option value="52">Thief Gear</option>
					<option value="55">Bloodthirster</option>
					<option value="56">Assassin Gear</option>
				</select>
			</form>
			<form action="/action_page.php">
				<label for="acc">Accessory: </label>
				<select name="acc" id="eAcc">
					<option value="0">none</option>
					<option value="12">Snowball</option>
					<option value="9">Tree Cape</option>
					<option value="10">Stone Cape</option>
					<option value="3">Cookie Cape</option>
					<option value="8">Cow Cape</option>
					<option value="11">Monkey Tail</option>
					<option value="17">Apple Basket</option>
					<option value="6">Winter Cape</option>
					<option value="4">Skull Cape</option>
					<option value="5">Dash Cape</option>
					<option value="2">Dragon Cape</option>
					<option value="1">Super Cape</option>
					<option value="7">Troll Cape</option>
					<option value="14">Thorns</option>
					<option value="15">Blockades</option>
					<option value="20">Devils Tail</option>
					<option value="16">Sawblade</option>
					<option value="13">Angel Wings</option>
					<option value="19">SWings</option>
					<option value="18">BWings</option>
					<option value="21">CX Wings</option>
				</select>
			</form>
		</fieldset>
		<fieldset>
			<legend>Auto Defence</legend>
			<div><label class="defheal"><input id="antiInsta1" type="checkbox" class="i-checkbox"/>Anti-InstaKill(Normal)</label></div>
			<div><label class="defheal"><input id="extraAnti" type="checkbox" class="i-checkbox" checked/>Anti-InstaKill(AI Enhanced)</label></div>
            <div><label class="defheal"><input id="useCounterInsta" type="checkbox" class="i-checkbox"/>Anti-InstaKill(Counter)</label></div>
			<div><label class="defheal"><input id="antiInsta2" type="checkbox" class="i-checkbox"/>Anti-InstaKill(Reverse)</label></div>
			<div><label class="defheal"><input id="antiInsta3" type="checkbox" class="i-checkbox"/>Anti-InstaKill(BloodThirster)</label></div>
			<div><label class="defheal"><input id="antiInsta4" type="checkbox" class="i-checkbox"/>Anti-InstaKill(Ranged)</label></div>
			<div><label class="defheal"><input id="antiBoostSpike" type="checkbox" class="i-checkbox"/>Anti-BoostSpike</label></div>
		</fieldset>
		<br>
		<div class="i-palomita">Made By: LemonFlux</div>
	</div>
	<div id="mm-support-menu" class="i-tab-content" style="overflow-y: scroll; display: none;">
		<h3>Support</h3>
		<fieldset>
			<legend>Speed Armor Normal</legend>
			<form action="/action_page.php">
				<label for="hat">Hat: </label>
				<select name="hat" id="snHat">
					<option value="0">none</option>
					<option value="51">Moo Cap</option>
					<option value="50">Apple Cap</option>
					<option value="28">Moo Head</option>
					<option value="29">Pig Head</option>
					<option value="30">Fluff Head</option>
					<option value="36">Pandou Head</option>
					<option value="37">Bear Head</option>
					<option value="38">Monkey Head</option>
					<option value="44">Polar Head</option>
					<option value="35">Fez Hat</option>
					<option value="42">Enigma Hat</option>
					<option value="43">Blitz Hat</option>
					<option value="49">Bob XIII Hat</option>
					<option value="57">Pumpkin</option>
					<option value="8">Bummle Hat</option>
					<option value="2">Straw Hat</option>
					<option value="15">Winter Cap</option>
					<option value="5">Cowboy Hat</option>
					<option value="4">Ranger Hat</option>
					<option value="18">Explorer Hat</option>
					<option value="31">Flipper Hat</option>
					<option value="1">Marksman Cap</option>
					<option value="10">Bush Gear</option>
					<option value="48">Halo</option>
					<option value="6">Soldier Helmet</option>
					<option value="32">Anti Venom Gear</option>
					<option value="13">Medic Gear</option>
					<option value="9">Miners Helmet</option>
					<option value="32">Musketeer Hat</option>
					<option value="7">Bull Helmet</option>
					<option value="22">Emp Helmet</option>
					<option value="12">Booster Hat</option>
					<option value="26">Barbarian Armor</option>
					<option value="21">Plague Mask</option>
					<option value="46">Bull Mask</option>
					<option value="14">Windmill Hat</option>
					<option value="11">Spike Gear</option>
					<option value="53">Turret Gear</option>
					<option value="20">Samurai Armor</option>
					<option value="58">Dark Knight</option>
					<option value="27">Scavenger Gear</option>
					<option value="40">Tank Gear</option>
					<option value="52">Thief Gear</option>
					<option value="55">Bloodthirster</option>
					<option value="56">Assassin Gear</option>
				</select>
			</form>
			<form action="/action_page.php">
				<label for="acc">Accessory: </label>
				<select name="acc" id="snAcc">
					<option value="0">none</option>
					<option value="12">Snowball</option>
					<option value="9">Tree Cape</option>
					<option value="10">Stone Cape</option>
					<option value="3">Cookie Cape</option>
					<option value="8">Cow Cape</option>
					<option value="11">Monkey Tail</option>
					<option value="17">Apple Basket</option>
					<option value="6">Winter Cape</option>
					<option value="4">Skull Cape</option>
					<option value="5">Dash Cape</option>
					<option value="2">Dragon Cape</option>
					<option value="1">Super Cape</option>
					<option value="7">Troll Cape</option>
					<option value="14">Thorns</option>
					<option value="15">Blockades</option>
					<option value="20">Devils Tail</option>
					<option value="16">Sawblade</option>
					<option value="13">Angel Wings</option>
					<option value="19">SWings</option>
					<option value="18">BWings</option>
					<option value="21">CX Wings</option>
				</select>
			</form>
		</fieldset>
		<fieldset>
			<legend>Speed Armor River</legend>
			<form action="/action_page.php">
				<label for="hat">Hat: </label>
				<select name="hat" id="srHat">
					<option value="0">none</option>
					<option value="51">Moo Cap</option>
					<option value="50">Apple Cap</option>
					<option value="28">Moo Head</option>
					<option value="29">Pig Head</option>
					<option value="30">Fluff Head</option>
					<option value="36">Pandou Head</option>
					<option value="37">Bear Head</option>
					<option value="38">Monkey Head</option>
					<option value="44">Polar Head</option>
					<option value="35">Fez Hat</option>
					<option value="42">Enigma Hat</option>
					<option value="43">Blitz Hat</option>
					<option value="49">Bob XIII Hat</option>
					<option value="57">Pumpkin</option>
					<option value="8">Bummle Hat</option>
					<option value="2">Straw Hat</option>
					<option value="15">Winter Cap</option>
					<option value="5">Cowboy Hat</option>
					<option value="4">Ranger Hat</option>
					<option value="18">Explorer Hat</option>
					<option value="31">Flipper Hat</option>
					<option value="1">Marksman Cap</option>
					<option value="10">Bush Gear</option>
					<option value="48">Halo</option>
					<option value="6">Soldier Helmet</option>
					<option value="32">Anti Venom Gear</option>
					<option value="13">Medic Gear</option>
					<option value="9">Miners Helmet</option>
					<option value="32">Musketeer Hat</option>
					<option value="7">Bull Helmet</option>
					<option value="22">Emp Helmet</option>
					<option value="12">Booster Hat</option>
					<option value="26">Barbarian Armor</option>
					<option value="21">Plague Mask</option>
					<option value="46">Bull Mask</option>
					<option value="14">Windmill Hat</option>
					<option value="11">Spike Gear</option>
					<option value="53">Turret Gear</option>
					<option value="20">Samurai Armor</option>
					<option value="58">Dark Knight</option>
					<option value="27">Scavenger Gear</option>
					<option value="40">Tank Gear</option>
					<option value="52">Thief Gear</option>
					<option value="55">Bloodthirster</option>
					<option value="56">Assassin Gear</option>
				</select>
			</form>
			<form action="/action_page.php">
				<label for="acc">Accessory: </label>
				<select name="acc" id="srAcc">
					<option value="0">none</option>
					<option value="12">Snowball</option>
					<option value="9">Tree Cape</option>
					<option value="10">Stone Cape</option>
					<option value="3">Cookie Cape</option>
					<option value="8">Cow Cape</option>
					<option value="11">Monkey Tail</option>
					<option value="17">Apple Basket</option>
					<option value="6">Winter Cape</option>
					<option value="4">Skull Cape</option>
					<option value="5">Dash Cape</option>
					<option value="2">Dragon Cape</option>
					<option value="1">Super Cape</option>
					<option value="7">Troll Cape</option>
					<option value="14">Thorns</option>
					<option value="15">Blockades</option>
					<option value="20">Devils Tail</option>
					<option value="16">Sawblade</option>
					<option value="13">Angel Wings</option>
					<option value="19">SWings</option>
					<option value="18">BWings</option>
					<option value="21">CX Wings</option>
				</select>
			</form>
		</fieldset>
		<fieldset>
			<legend>Speed Armor Winter</legend>
			<form action="/action_page.php">
				<label for="hat">Hat: </label>
				<select name="hat" id="ssHat">
					<option value="0">none</option>
					<option value="51">Moo Cap</option>
					<option value="50">Apple Cap</option>
					<option value="28">Moo Head</option>
					<option value="29">Pig Head</option>
					<option value="30">Fluff Head</option>
					<option value="36">Pandou Head</option>
					<option value="37">Bear Head</option>
					<option value="38">Monkey Head</option>
					<option value="44">Polar Head</option>
					<option value="35">Fez Hat</option>
					<option value="42">Enigma Hat</option>
					<option value="43">Blitz Hat</option>
					<option value="49">Bob XIII Hat</option>
					<option value="57">Pumpkin</option>
					<option value="8">Bummle Hat</option>
					<option value="2">Straw Hat</option>
					<option value="15">Winter Cap</option>
					<option value="5">Cowboy Hat</option>
					<option value="4">Ranger Hat</option>
					<option value="18">Explorer Hat</option>
					<option value="31">Flipper Hat</option>
					<option value="1">Marksman Cap</option>
					<option value="10">Bush Gear</option>
					<option value="48">Halo</option>
					<option value="6">Soldier Helmet</option>
					<option value="32">Anti Venom Gear</option>
					<option value="13">Medic Gear</option>
					<option value="9">Miners Helmet</option>
					<option value="32">Musketeer Hat</option>
					<option value="7">Bull Helmet</option>
					<option value="22">Emp Helmet</option>
					<option value="12">Booster Hat</option>
					<option value="26">Barbarian Armor</option>
					<option value="21">Plague Mask</option>
					<option value="46">Bull Mask</option>
					<option value="14">Windmill Hat</option>
					<option value="11">Spike Gear</option>
					<option value="53">Turret Gear</option>
					<option value="20">Samurai Armor</option>
					<option value="58">Dark Knight</option>
					<option value="27">Scavenger Gear</option>
					<option value="40">Tank Gear</option>
					<option value="52">Thief Gear</option>
					<option value="55">Bloodthirster</option>
					<option value="56">Assassin Gear</option>
				</select>
			</form>
			<form action="/action_page.php">
				<label for="acc">Accessory: </label>
				<select name="acc" id="ssAcc">
					<option value="0">None</option>
					<option value="12">Snowball</option>
					<option value="9">Tree Cape</option>
					<option value="10">Stone Cape</option>
					<option value="3">Cookie Cape</option>
					<option value="8">Cow Cape</option>
					<option value="11">Monkey Tail</option>
					<option value="17">Apple Basket</option>
					<option value="6">Winter Cape</option>
					<option value="4">Skull Cape</option>
					<option value="5">Dash Cape</option>
					<option value="2">Dragon Cape</option>
					<option value="1">Super Cape</option>
					<option value="7">Troll Cape</option>
					<option value="14">Thorns</option>
					<option value="15">Blockades</option>
					<option value="20">Devils Tail</option>
					<option value="16">Sawblade</option>
					<option value="13">Angel Wings</option>
					<option value="19">SWings</option>
					<option value="18">BWings</option>
					<option value="21">CX Wings</option>
				</select>
			</form>
		</fieldset>
		<br>
		<div class="i-palomita">Made By: LemonFlux</div>
	</div>
	<div id="mm-controls-menu" class="i-tab-content" style="display: none; overflow-y: scroll;">
		<h3>Controls</h3>
		<label>Mod Menu : <button id="kMenu" class="i-button i-bold i-right i-inline i-keybind">Escape</button></label><br/><br/>
		<fieldset id="i-chatcmd">
			<legend>Chat Commands</legend>
			<div><label>Show Credits : <button id="kSpike" class="i-button i-bold i-right i-inline i-keybind">!credits</button></label></div>
			<div><label>Katana+Musket : <button id="kSpike" class="i-button i-bold i-right i-inline i-keybind">!km</button></label></div>
			<div><label>Katana+Hammer : <button id="kSpike" class="i-button i-bold i-right i-inline i-keybind">!kh</button></label></div>
			<div><label>Polearm+Hammer : <button id="kSpikeCircle" class="i-button i-bold i-right i-inline i-keybind">!ph</button></label></div>
			<div><label>Stick+Hammer : <button id="kTrap" class="i-button i-bold i-right i-inline i-keybind">!sh</button></label></div>
			<div><label>Crash Server : <button id="kTrapCircle" class="i-button i-bold i-right i-inline i-keybind">!crash</button></label></div>
			<div><label>Bots HatCycle : <button id="kTrapCircle" class="i-button i-bold i-right i-inline i-keybind">!hat</button></label></div>
			<div><label>Bots Attack : <button id="kTrapCircle" class="i-button i-bold i-right i-inline i-keybind">!attack</button></label></div>
			<div><label>Bots Stop : <button id="kTrapCircle" class="i-button i-bold i-right i-inline i-keybind">!stop</button></label></div>
			<div><label>Create Clan : <button id="kTrapCircle" class="i-button i-bold i-right i-inline i-keybind">!clan (name)</button></label></div>
			<div><label>Leave Clan : <button id="kTrapCircle" class="i-button i-bold i-right i-inline i-keybind">!leave</button></label></div>
			<div><label>Join Clan : <button id="kTrapCircle" class="i-button i-bold i-right i-inline i-keybind">!join (name)</button></label></div>
			<div><label>Kick from Clan : <button id="kTrapCircle" class="i-button i-bold i-right i-inline i-keybind">!kick (name)</button></label></div>
			<div><label>Reload Page : <button id="kTrapCircle" class="i-button i-bold i-right i-inline i-keybind">!reload</button></label></div>
		</fieldset>
        <fieldset id="i-keybinds">
			<legend>Keybinds</legend>
			<div><label>Spike : <button id="kSpike" class="i-button i-bold i-right i-inline i-keybind">V</button></label></div>
			<div><label>Trap/Boost : <button id="kSpikeCircle" class="i-button i-bold i-right i-inline i-keybind">F</button></label></div>
			<div><label>Turret : <button id="kTrap" class="i-button i-bold i-right i-inline i-keybind">H</button></label></div>
			<div><label>Windmill : <button id="kTrapCircle" class="i-button i-bold i-right i-inline i-keybind">N</button></label></div>
			<div><label>SuperHeal : <button id="kTurret" class="i-button i-bold i-right i-inline i-keybind">Q (Hold)</button></label></div>
			<div><label>Instakill : <button id="kBS" class="i-button i-bold i-right i-inline i-keybind">R</button></label></div>
			<div><label>TeamKiller : <button id="kWindmill" class="i-button i-bold i-right i-inline i-keybind">F6</button><button id="kWindmill" class="i-button i-bold i-right i-inline i-keybind">Play/Pause Media</button></label></div>
			<div><label>Crash : <button id="kHeal" class="i-button i-bold i-right i-inline i-keybind">End</button></div>
			<div><label>360Hit : <button id="kBM" class="i-button i-bold i-right i-inline i-keybind">></button></label></div>
            <div><label>EMP Mode : <button id="kBM" class="i-button i-bold i-right i-inline i-keybind">I</button></label></div>
            <div><label>Play/Pause Song : <button id="kBM" class="i-button i-bold i-right i-inline i-keybind">Backslash</button></label></div>
			<div><label>Dash : <button id="kBM" class="i-button i-bold i-right i-inline i-keybind">Backspace</button></label></div>
			<div><label>BoostSpike : <button id="kSpike" class="i-button i-bold i-right i-inline i-keybind">L (Hold)</button></label></div>
			<div><label>AutoMill : <button id="kSpike" class="i-button i-bold i-right i-inline i-keybind"><</button></label></div>
			<div><label>Console : <button id="kSpike" class="i-button i-bold i-right i-inline i-keybind">Del/Insert</button></label></div>
		</fieldset>
		<br>
		<div class="i-palomita">Made By: LemonFlux</div>
	</div>
	<div id="mm-instakill-menu" class="i-tab-content" style="overflow-y: scroll; display: none;">
		<h3>Insta Kill</h3>
		<div><label class="defheal"><input id="tickBased" type="checkbox" class="i-checkbox" checked/>Tick-Based Insta (Accounts for lag)</label></div>
		<div><label class="defheal" style="display: none;"><input id="autoInstaBullCheck" type="checkbox" class="i-checkbox" style="display: none;" checked/>Auto Insta NoBull Hat Check (Beta)</label></div>
		<form action="/action_page.php">
				<label for="instaType">Insta Type: </label>
				<select name="instaType" id="instaType">
					<option value="normal" selected>Normal</option>
					<option value="reverse">Reverse</option>
					<option value="oneframe">One Frame (Diamond Polearm)</option>
					<option value="onetick">One Tick (Polearm+Crossbow)</option>
					<option value="lag">Lag Insta</option>
				</select>
			</form>
	    <div><label class="defheal"><input id="autoInsta" type="checkbox" class="i-checkbox" checked/>Auto Insta (Changes "R" key to Toggle)</label></div>
		<div><label class="defheal"><input id="iAim" type="checkbox" class="i-checkbox" checked/>Auto Aim</label></div>
        <div><label class="defheal"><input id="spikeInsta" type="checkbox" class="i-checkbox"/>Use Spikes</label></div>
		<div><label class="defheal"><input id="autoReload" type="checkbox" class="i-checkbox" checked/>Auto Reload</label></div>
		<div><label class="defheal" style="display: none;"><input id="iReverse" type="checkbox" class="i-checkbox"/>Reverse Insta</label></div>
		<fieldset style="display: none;">
			<legend>Insta Kill:</legend>
			<form action="/action_page.php">
				<label for="hat">Hat-1: </label>
				<select name="acc" id="iHat1">
					<option value="0">none</option>
					<option value="51">Moo Cap</option>
					<option value="50">Apple Cap</option>
					<option value="28">Moo Head</option>
					<option value="29">Pig Head</option>
					<option value="30">Fluff Head</option>
					<option value="36">Pandou Head</option>
					<option value="37">Bear Head</option>
					<option value="38">Monkey Head</option>
					<option value="44">Polar Head</option>
					<option value="35">Fez Hat</option>
					<option value="42">Enigma Hat</option>
					<option value="43">Blitz Hat</option>
					<option value="49">Bob XIII Hat</option>
					<option value="57">Pumpkin</option>
					<option value="8">Bummle Hat</option>
					<option value="2">Straw Hat</option>
					<option value="15">Winter Cap</option>
					<option value="5">Cowboy Hat</option>
					<option value="4">Ranger Hat</option>
					<option value="18">Explorer Hat</option>
					<option value="31">Flipper Hat</option>
					<option value="1">Marksman Cap</option>
					<option value="10">Bush Gear</option>
					<option value="48">Halo</option>
					<option value="6">Soldier Helmet</option>
					<option value="32">Anti Venom Gear</option>
					<option value="13">Medic Gear</option>
					<option value="9">Miners Helmet</option>
					<option value="32">Musketeer Hat</option>
					<option value="7">Bull Helmet</option>
					<option value="22">Emp Helmet</option>
					<option value="12">Booster Hat</option>
					<option value="26">Barbarian Armor</option>
					<option value="21">Plague Mask</option>
					<option value="46">Bull Mask</option>
					<option value="14">Windmill Hat</option>
					<option value="11">Spike Gear</option>
					<option value="53">Turret Gear</option>
					<option value="20">Samurai Armor</option>
					<option value="58">Dark Knight</option>
					<option value="27">Scavenger Gear</option>
					<option value="40">Tank Gear</option>
					<option value="52">Thief Gear</option>
					<option value="55">Bloodthirster</option>
					<option value="56">Assassin Gear</option>
				</select>
			</form>
			<form action="/action_page.php">
				<label for="acc">Accessory-1: </label>
				<select name="acc" id="iAcc1">
					<option value="0">None</option>
					<option value="12">Snowball</option>
					<option value="9">Tree Cape</option>
					<option value="10">Stone Cape</option>
					<option value="3">Cookie Cape</option>
					<option value="8">Cow Cape</option>
					<option value="11">Monkey Tail</option>
					<option value="17">Apple Basket</option>
					<option value="6">Winter Cape</option>
					<option value="4">Skull Cape</option>
					<option value="5">Dash Cape</option>
					<option value="2">Dragon Cape</option>
					<option value="1">Super Cape</option>
					<option value="7">Troll Cape</option>
					<option value="14">Thorns</option>
					<option value="15">Blockades</option>
					<option value="20">Devils Tail</option>
					<option value="16">Sawblade</option>
					<option value="13">Angel Wings</option>
					<option value="19">SWings</option>
					<option value="18">BWings</option>
					<option value="21">CX Wings</option>
				</select>
			</form>
			<div><label class="key2"><input id="iSwitch" type="checkbox" class="i-checkbox"/>Choose Secondary Weapon</label></div>
			<form action="/action_page.php">
				<label for="acc">Hat-2: </label>
				<select name="hat" id="iHat2">
					<option value="0">none</option>
					<option value="51">Moo Cap</option>
					<option value="50">Apple Cap</option>
					<option value="28">Moo Head</option>
					<option value="29">Pig Head</option>
					<option value="30">Fluff Head</option>
					<option value="36">Pandou Head</option>
					<option value="37">Bear Head</option>
					<option value="38">Monkey Head</option>
					<option value="44">Polar Head</option>
					<option value="35">Fez Hat</option>
					<option value="42">Enigma Hat</option>
					<option value="43">Blitz Hat</option>
					<option value="49">Bob XIII Hat</option>
					<option value="57">Pumpkin</option>
					<option value="8">Bummle Hat</option>
					<option value="2">Straw Hat</option>
					<option value="15">Winter Cap</option>
					<option value="5">Cowboy Hat</option>
					<option value="4">Ranger Hat</option>
					<option value="18">Explorer Hat</option>
					<option value="31">Flipper Hat</option>
					<option value="1">Marksman Cap</option>
					<option value="10">Bush Gear</option>
					<option value="48">Halo</option>
					<option value="6">Soldier Helmet</option>
					<option value="32">Anti Venom Gear</option>
					<option value="13">Medic Gear</option>
					<option value="9">Miners Helmet</option>
					<option value="32">Musketeer Hat</option>
					<option value="7">Bull Helmet</option>
					<option value="22">Emp Helmet</option>
					<option value="12">Booster Hat</option>
					<option value="26">Barbarian Armor</option>
					<option value="21">Plague Mask</option>
					<option value="46">Bull Mask</option>
					<option value="14">Windmill Hat</option>
					<option value="11">Spike Gear</option>
					<option value="53">Turret Gear</option>
					<option value="20">Samurai Armor</option>
					<option value="58">Dark Knight</option>
					<option value="27">Scavenger Gear</option>
					<option value="40">Tank Gear</option>
					<option value="52">Thief Gear</option>
					<option value="55">Bloodthirster</option>
					<option value="56">Assassin Gear</option>
				</select>
			</form>
			<form action="/action_page.php">
				<label for="acc">Accessory-2: </label>
				<select name="acc" id="iAcc2">
					<option value="0">None</option>
					<option value="12">Snowball</option>
					<option value="9">Tree Cape</option>
					<option value="10">Stone Cape</option>
					<option value="3">Cookie Cape</option>
					<option value="8">Cow Cape</option>
					<option value="11">Monkey Tail</option>
					<option value="17">Apple Basket</option>
					<option value="6">Winter Cape</option>
					<option value="4">Skull Cape</option>
					<option value="5">Dash Cape</option>
					<option value="2">Dragon Cape</option>
					<option value="1">Super Cape</option>
					<option value="7">Troll Cape</option>
					<option value="14">Thorns</option>
					<option value="15">Blockades</option>
					<option value="20">Devils Tail</option>
					<option value="16">Sawblade</option>
					<option value="13">Angel Wings</option>
					<option value="19">SWings</option>
					<option value="18">BWings</option>
					<option value="21">CX Wings</option>
				</select>
			</form>
			<form action="/action_page.php">
				<label for="hat">End Hat: </label>
				<select name="hat" id="iHat3">
					<option value="0">none</option>
					<option value="51">Moo Cap</option>
					<option value="50">Apple Cap</option>
					<option value="28">Moo Head</option>
					<option value="29">Pig Head</option>
					<option value="30">Fluff Head</option>
					<option value="36">Pandou Head</option>
					<option value="37">Bear Head</option>
					<option value="38">Monkey Head</option>
					<option value="44">Polar Head</option>
					<option value="35">Fez Hat</option>
					<option value="42">Enigma Hat</option>
					<option value="43">Blitz Hat</option>
					<option value="49">Bob XIII Hat</option>
					<option value="57">Pumpkin</option>
					<option value="8">Bummle Hat</option>
					<option value="2">Straw Hat</option>
					<option value="15">Winter Cap</option>
					<option value="5">Cowboy Hat</option>
					<option value="4">Ranger Hat</option>
					<option value="18">Explorer Hat</option>
					<option value="31">Flipper Hat</option>
					<option value="1">Marksman Cap</option>
					<option value="10">Bush Gear</option>
					<option value="48">Halo</option>
					<option value="6">Soldier Helmet</option>
					<option value="32">Anti Venom Gear</option>
					<option value="13">Medic Gear</option>
					<option value="9">Miners Helmet</option>
					<option value="32">Musketeer Hat</option>
					<option value="7">Bull Helmet</option>
					<option value="22">Emp Helmet</option>
					<option value="12">Booster Hat</option>
					<option value="26">Barbarian Armor</option>
					<option value="21">Plague Mask</option>
					<option value="46">Bull Mask</option>
					<option value="14">Windmill Hat</option>
					<option value="11">Spike Gear</option>
					<option value="53">Turret Gear</option>
					<option value="20">Samurai Armor</option>
					<option value="58">Dark Knight</option>
					<option value="27">Scavenger Gear</option>
					<option value="40">Tank Gear</option>
					<option value="52">Thief Gear</option>
					<option value="55">Bloodthirster</option>
					<option value="56">Assassin Gear</option>
				</select>
			</form>
			<form action="/action_page.php">
				<label for="acc">End Accessory: </label>
				<select name="acc" id="iAcc3">
					<option value="0">None</option>
					<option value="12">Snowball</option>
					<option value="9">Tree Cape</option>
					<option value="10">Stone Cape</option>
					<option value="3">Cookie Cape</option>
					<option value="8">Cow Cape</option>
					<option value="11">Monkey Tail</option>
					<option value="17">Apple Basket</option>
					<option value="6">Winter Cape</option>
					<option value="4">Skull Cape</option>
					<option value="5">Dash Cape</option>
					<option value="2">Dragon Cape</option>
					<option value="1">Super Cape</option>
					<option value="7">Troll Cape</option>
					<option value="14">Thorns</option>
					<option value="15">Blockades</option>
					<option value="20">Devils Tail</option>
					<option value="16">Sawblade</option>
					<option value="13">Angel Wings</option>
					<option value="19">SWings</option>
					<option value="18">BWings</option>
					<option value="21">CX Wings</option>
				</select>
			</form>
		</fieldset>
		<br>
		<div class="i-palomita">Made By: LemonFlux</div>
	</div>
	<div id="mm-chat-menu" class="i-tab-content" style="overflow-y: scroll; display: none;">
		<h3>Chat Menu</h3>
		<div><label>Reset defaults : <button id="defaultChats" class="i-button i-bold i-right i-inline i-keybind">Reset</button></label></div>
		<fieldset>
			<legend>Auto Chat</legend>
			<div><label class="Songs"><input id="songCheck" type="checkbox" class="i-checkbox" checked/>Songs</label></div>
        <div><label class="SongInfo">Play/Pause with BACKSLASH key</label></div>
        <form action="/action_page.php">
           <label for="song">Song: </label>
           <select name="song" id="song">
        		<option value="0">Gas Gas Gas</option>
        		<option value="1">We Will Rock You</option>
        		<option value="2">Gangnam Style</option>
        		<option value="3">Despacito</option>
        		<option value="4">It's Been So Long</option>
        		<option value="5">I've Got No Time To Live</option>
				<option value="6">Need to Know</option>
				<option value="7">Hit or Miss</option>
				<option value="8">We're Taking Over</option>
				<option value="9">Blood on the Water</option>
                <option value="10"Homo Freestyle</option>
                <option value="11">Four Big Guys</option>
        		<option value="12">Baby Shark</option>
           </select>
        </form>
		<div><label class="chat123"><input id="acBool" type="checkbox" class="i-checkbox"/>Auto Chat</label></div>
			<label>Auto Chat: <input value="${aChat}" id="aChat" type="text" minlength="0" maxlength="30" style="width: 200px;" placeholder="Automatic Chatting" class="i-checkbox"/></label>
			<div><label class="chat123"><input id="clanSpamBool" type="checkbox" class="i-checkbox"/>Clan Spam</label></div>
            <label>Clan Spam: <input value="~DaRk~" id="clanSpam" type="text" minlength="0" maxlength="7" style="width: 100px;" placeholder="Clan Name" class="i-checkbox"/></label>
			<div><label class="chat123"><input id="icBool" type="checkbox" class="i-checkbox" checked/>Kill Chat</label></div>
			<label>Kill Chat: <input value="LemonMod v${modVersion} - +1 EZ" id="kChat" type="text" minlength="0" maxlength="30" style="width: 200px;" placeholder="Kill Chat" class="i-checkbox"/></label>
			<div><label class="chat123"><input id="irBool" type="checkbox" class="i-checkbox" checked/>Reload Chat</label></div>
			<label>Reload Chat: <input value="LemonMod v${modVersion} - RELOADED!" id="rChat" type="text" minlength="0" maxlength="30" style="width: 200px;" placeholder="Reloaded Chat" class="i-checkbox"/></label>
			<div><label class="chat123" style="display: none;"><input id="ezBool" type="checkbox" class="i-checkbox" style="display: none;" checked/>Auto GG/EZ</label></div>
			<label style="display: none;">Auto GG/EZ:<input value="LemonMod v${modVersion} - EASY KILL!" id="ezChat" type="text" minlength="0" maxlength="30" style="display: none; width: 250px;" placeholder="GG/EZ" class="i-checkbox"/></label>
			<div><label class="chat123" style="display: none;"><input id="cPlayer" type="checkbox" class="i-checkbox" style="display: none;"/>Player Tracker</label></div>
			<div><label class="chat123"><input id="wLag" type="checkbox" class="i-checkbox"/>Warn Lag</label></div>
			<label>Lag Chat: <input value="~ warn: (x) ms ~" id="wLagChat" type="text" minlength="0" maxlength="30" style="width: 200px;" placeholder="Lag Warning Chat" class="i-checkbox"/></label>
		</fieldset>
		<br>
		<div class="i-palomita">Made By: LemonFlux</div>
	</div>
	<div id="mm-credits-menu" class="i-tab-content" style="overflow-y: scroll; display: none;">
		<div>
			<h3>Credits</h3>
			<fieldset>
				<legend>LemonMod was made possible by...</legend>
				<a href="https://owen.lol/"><label class="madeby1 smallGlowNoModifiers">LemonFlux</label></a><br><a href="https://itch.io/profile/palomadev"><label class="madeby1">Palomita</label></a><br><a href="https://tjmod.weebly.com/"><label class="madeby1">Xx_TJGaming_xX</label></a><br><a href="https://itch.io/profile/pancakess"><label class="madeby1">pancakess</label></a><br><a href="https://itch.io/profile/mooma"><label class="madeby1">MooMa2k21</label></a><br><a href="https://itch.io/profile/subliminalgaming"><label class="madeby1">Sub. Gaming</label></a><br><a href="https://itch.io/profile/gregklein"><label class="madeby1">Greg Klein</label></a><br><a href="https://itch.io/profile/popitch"><label class="madeby1">Popi!</label></a><br><a href="https://itch.io/profile/sneakilli"><label class="madeby1">Sneakilli</label></a><br><a href="https://www.sophiebritt.com/"><label class="madeby1">Sophie Brittain</label></a>
			</fieldset>
		</div>
	</div>
	<div id="mm-hatmacro-menu" class="i-tab-content" style="overflow-y: scroll; display: none;">
		<h3>Hat-Macro</h3>
		<div>
			<h3 class="menuPrompt">Tank Gear :</h3>
			<input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value=this.value.toUpperCase();" maxlength="1" type="text"/>
		</div>
		<div>
			<h3 class="menuPrompt">Bull Helmet :</h3>
			<input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value=this.value.toUpperCase();" maxlength="1" type="text"/>
		</div>
		<div>
			<h3 class="menuPrompt">Soldier Helmet :</h3>
			<input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow" onkeyup="this.value=this.value.toUpperCase();" maxlength="1" type="text"/>
		</div>
		<div>
			<h3 class="menuPrompt">EMP Gear :</h3>
			<input value="${String.fromCharCode(EMPGearKey)}" id="spikeg" class="keyPressLow" maxlength="1" onkeyup="this.value=this.value.toUpperCase();" type="text"/>
		</div>
		<div>
			<h3 class="menuPrompt">Turret Gear :</h3>
			<input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value=this.value.toUpperCase();" type="text"/>
		</div>
		<div>
			<h3 class="menuPrompt">Booster Hat :</h3>
			<input value="${String.fromCharCode(BoosterHatKey)}" id="booster" class="keyPressLow" maxlength="1" onkeyup="this.value=this.value.toUpperCase();" type="text"/>
		</div>
		<br>
		<div class="i-palomita">Made By: LemonFlux</div>
	</div>
</div>
`;
            if (debugMode) {console.log('GUI menu init complete.')}
            //}, 500);
            let songs = [`Do you like my car?
Guess you're ready
'cause I'm waiting for you
It's gonna be so exciting
Got this feeling
really deep in my soul
Let's get out,
I wanna go,
come along, get it on
Gonna take my car,
gonna sit in
Gonna drive along
'til I get you
'Cause I'm crazy,
hot and ready,
but you like it
I wanna race for you
(Shall I go now?)
Gas, gas, gas
I'm gonna step on the gas
Tonight, I'll fly
(and be your lover)
Yeah, yeah, yeah
I'll be so quick as a flash
And I'll be your hero
Gas, gas, gas
I'm gonna run as a flash
Tonight, I'll fight
(to be the winner)
Yeah, yeah, yeah
I'm gonna step on the gas
And you'll see the big show
Don't be lazy
'cause I'm burning for you
It's like a hot sensation
Got this power
that is taking me out
Yes, I've got a crush on you,
ready, now,
ready, go
Gonna take my car,
gonna sit in
Gonna drive alone
'til I get you
'Cause I'm crazy,
hot and ready,
but you like it
I wanna race for you
(Shall I go now?)
Gas, gas, gas
I'm gonna step on the gas
Tonight, I'll fly
(and be your lover)
Yeah, yeah, yeah
I'll be so quick as a flash
And I'll be your hero
Gas, gas, gas
I'm gonna run as a flash
Tonight, I'll fight
(to be the winner)
Yeah, yeah, yeah
I'm gonna step on the gas
And you'll see the big show
Gonna take my car,
do you like my car?
'Cause I'm crazy,
hot and ready,
but you like it
I wanna race for you
(Shall I go now?)
Gas, gas, gas
I'm gonna step on the gas
Tonight, I'll fly
(and be your lover)
Yeah, yeah, yeah
I'll be so quick as a flash
And I'll be your hero
Gas, gas, gas
I'm gonna run as a flash
Tonight, I'll fight
(to be the winner)
Yeah, yeah, yeah
I'm gonna step on the gas
And you'll see the big show
Gas, gas, gas
Yeah, yeah, yeah
Gas, gas, gas
And you'll see the big show`, `Buddy, you're a boy, make a big noise
Playing in the street,
gonna be a big man someday
You got mud on your face,
you big disgrace
Kicking your can
all over the place,
singin'
We will,
we will rock you
We will,
we will rock you
Buddy, you're a young man,
hard man
Shouting in the street,
gonna take on the world
some day
You got blood
on your face,
you big disgrace
Waving your banner
all over the place
We will,
we will rock you, sing it!
We will,
we will rock you, yeah
Buddy, you're an old man,
poor man
Pleading with your eyes,
gonna get you some peace
some day
You got mud on your face,
big disgrace
Somebody better
put you back into your place,
do it!
We will,
we will rock you,
yeah, yeah, come on
We will,
we will rock you,
alright, louder!
We will,
we will rock you,
one more time
We will, we will rock you
Yeah!`, `Oppa is Gangnam style
Gangnam style
A girl
who is warm and humanly
during the day
A classy girl
who know how to enjoy
the freedom of a cup of coffee
A girl whose heart gets hotter
when night comes
A girl with that kind of twist
I'm a guy
A guy who is as warm
as you during the day
A guy who one-shots his coffee
before it even cools down
A guy whose heart bursts
when night comes
That kind of guy
Beautiful, loveable
Yes you, hey, yes you, hey
Beautiful, loveable
Yes you, hey, yes you, hey
Now let's go until the end
Oppa is Gangnam style,
Gangnam style
Oppa is Gangnam style,
Gangnam style
Oppa is Gangnam style
Eh- Sexy Lady,
Oppa is Gangnam style
Eh- Sexy Lady oh oh oh oh
A girl who looks quiet
but plays when she plays
A girl who puts her hair down
when the right time comes
A girl who covers herself
but is more sexy
than a girl who bares it all
A sensable girl like that
I'm a guy
A guy who seems calm
but plays when he plays
A guy who goes
completely crazy
when the right time comes
A guy who has bulging ideas
rather than muscles
That kind of guy
Beautiful, loveable
Yes you, hey, yes you, hey
Beautiful, loveable
Yes you, hey, yes you, hey
Now let's go until the end
Oppa is Gangnam style,
Gangnam style
Oppa is Gangnam style,
Gangnam style
Oppa is Gangnam style
Eh- Sexy Lady,
Oppa is Gangnam style
Eh- Sexy Lady
oh oh oh oh
On top of the running man
is the flying man,
baby baby
I'm a man
who knows a thing or two
On top of the running man
is the flying man,
baby baby
I'm a man
who knows a thing or two
You know what I'm saying
Oppa is Gangnam style
Eh- Sexy Lady, Oppa is Gangnam style
Eh- Sexy Lady oh oh oh oh`, `Yes, you know that I've been looking at you
for a long time
I must dance with you today
I saw that
the look in your eyes was calling me
Show me the path
that I will take (Oh)
You, you're the magnet
and I'm the metal
I am getting closer
and making a plan
Simply thinking about it
makes my heart race (Oh yeah)
Now, I'm already liking it
more than usual
All of my senses
are asking for more
We cannot do this in a rush
Slowly
I want to breathe
in your neck slowly
Let me murmur
things in your ear
So that you remember
if you're not with me
Slowly
I want to undress you
in kisses slowly
Firmly in the walls
of your labyrinth
And of your body,
I want to create a manuscript
Up, up
Up, up, up
I want to see your hair dance
I want to be your rhythm
Want you to show my mouth
Your favorite places
(Favorite, favorite baby)
Let me trespass your danger zones
Until I make you scream
And you forget your last name
If I ask for a kiss
come give it to me
I know that
you're thinking about it
I've been trying to
do it for awhile
Mami this is giving
and giving it to you
You know that with me
your heart goes
bom bom
You know that from me
that babe is looking for a
bom bom
Come try my mouth
and see if you like its taste
I want to see
how much love fits in you
I'm not in a rush
I want to experience this trip
Let's start slowly,
then savagely
Step by step,
soft then softly
We come up against
each other, little by little
When you kiss me
in that state of distress
I see that you
are malice and delicacy
Step by step,
soft then softly
We come up against
each other, little by little
And it's just that
your beauty is a puzzle
But to finish it here
I have the missing piece
Slowly
I want to breathe
in your neck slowly
Let me murmur
things in your ear
So that you remember
if you're not with me
Slowly
I want to
undress you in kisses slowly
Firmly in the walls of
your labyrinth
And of your body,
I want to create a manuscript
Up, up, up, up
I want to see your hair dance
I want to be your rhythm
Want you to show my mouth
Your favorite places
(Favorite, favorite baby)
Let me trespass your danger zones
Until I make you scream
And you forget your last name
Slowly
We're gonna do it
on a beach in Puerto Rico
Until the waves scream Oh Lord
So that my seal stays with you
Step by step, soft then softly
We come up against
each other, little by little
I want you to show my mouth
Your favorite places
(Favorite, favorite baby)
Step by step, soft then softly
We come up against
each other, little by little
Until I make you scream
And you forget your last name
Slowly.`, `I don't know what I was thinking
Leaving my child behind
Now I suffer the curse
and now I am blind
With all this anger,
guilt and sadness
Coming to haunt me forever
I can't wait for the cliff
at the end of the river
Is this revenge I am seeking?
Or seeking someone
to avenge me?
Stuck in my own paradox,
I wanna set myself free
Maybe I should chase and find
Before they'll try to stop it
It won't be long
before I'll become a puppet
It's been so long
Since I last have seen my son
lost to this monster
To the man
behind the slaughter
Since you've been gone
I've been singing
this stupid song
so I could ponder
The sanity of your mother
I wish I lived
in the present
With the gift of
my past mistakes
But the future keeps luring in
like a pack of snakes
Your sweet little eyes,
your little smile
is all I remember
Those fuzzy memories
mess with my temper
Justification is killing me
But killing isn't justified
What happened to my son?
I'm terrified
It lingers in my mind
And the thought
keeps on getting bigger
I'm sorry my sweet baby,
I wish I've been there
It's been so long
Since I last have seen my son
lost to this monster
To the man
behind the slaughter
Since you've been gone
I've been singing
this stupid song
so I could ponder
The sanity of your mother`, `I got no time
I got no time to live
I got no time to live
And I can't say goodbye
And I'm regretting
having memories
Of my friends
who they used to be
Beside me before
they left me to die
And I know this is
I know this is the truth
'Cause I've been staring
at my death so many times
These scary monsters
roaming in the halls
I wish I could just
block the doors
And stay in bed
until the clock will chime
So my flashlight's on,
and stay up 'til dawn
I got this headache
and my life's on the line
I felt like I won,
but I wasn't done
The nightmare
repeats itself every time
Got to keep my calm,
and carry on
Stay awake until
the sun will shine
But I'm not so strong,
and they're not gone
They're still out there
to take what's left of mine
I have this urge
I have this urge to kill
I have this urge to kill
and show that I'm alive
I'm getting sick
from these apologies
From people with priorities
That their life matters
so much more than mine
But I'm stuttering
I'm stuttering again
No one will listen
and no one will understand
Because I'm crying
as much as I speak
'Cause no one likes me
when I shriek
Want to go back
to when it all began
So my flashlight's on,
and stay up 'til dawn
I got this headache
and my life's on the line
I felt like I won,
but I wasn't done
The nightmare
repeats itself every time
Got to keep my calm,
and carry on
Stay awake until
the sun will shine
But I'm not so strong,
and they're not gone
They're still out there
to take what's left of mine`, `
Yeah
Wanna know what it's like
(like)
Baby, show me what it's like
(like)
I don't really got no type
(type)
I just wanna fuck all night
Yeah-yeah,
oh-whoa-whoa
(oh, ooh, mmm)
Baby, I need to know, mmm
(yeah, need to know)
I just been fantasizin'
(size)
And we got a lotta time
(time)
Baby, come throw the pipe
(pipe)
Gotta know what it's like
(like)
Yeah-yeah,
oh-whoa-whoa
Baby, I need to know, mmm
What's your size?
(Size)
Add, subtract, divide ('vide)
Daddy don't throw no curves
(curves)
Hold up, I'm goin' wide
(wide)
We could just start at ten
(ten)
Then we can go to five
(five)
I don't play with my pen
(pen)
I mean what I write
Yeah-yeah,
whoa-whoa-whoa
I just can't help but be Sexual
(whoa)
Tell me your schedule
(yeah)
I got a lotta new
tricks for you, baby
Just sayin' I'm flexible
(I will)
I do what I can to get you off
(I will)
Might just Fuck him
with my makeup on
(I will)
Eat it like I need an
apron on (yeah, ay)
Eat it 'til I need to change
my thong (yeah, ay)
We could do it to your
favorite song (yeah, ay)
Take a ride into the
danger zone (yeah, ay)
You know my Nigga be buggin' me
I just be wonderin' if you can
Fuck on me better
Itchin' for me like
an ugly sweater
Need it in me like a
Chuck E. need cheddar
I need to know (yeah)
Wanna know what it's like
(like)
Baby, show me what it's like
(like)
I don't really got no type
(type)
I just wanna Fuck all night
Yeah-yeah, oh-whoa-whoa
(oh, ooh, mmm)
Baby, I need to know, mmm
(yeah, need to know)
I just been fantasizin'
(size)
And we got a lotta time
(time)
Baby, come throw the pipe
(pipe)
Gotta know what it's like
(like)
Yeah-yeah,
oh-whoa-whoa
Baby, I need to know, mmm
You're exciting,
boy, come find me
Your eyes told me,
"Girl, come ride me"
Fuck that feeling
both us fighting
Could he try me?
(Yeah) mmm, most likely
Tryna see if you could
handle this ass
Prolly give his ass
a panic attack
Sorry if I gave
a random erection
Prolly thinkin'
I'm a telekinetic
Oh, wait,
you a fan of the magic?
Poof,
Pussy like an Alakazam (yeah)
I heard from a friend
of a friend
That that Dick
was a ten out of ten
I can't stand it,
just one night me
Clink with the drink,
gimme a sip
Tell me what's your kink,
gimme the dick
Spank me,
slap me,
choke me,
bite me (ew)
Uh, wait,
I can take it (ah)
Don't give a Fuck
'bout what your wifey's sayin'
(yeah)
Wanna know what it's like
(like)
Baby, show me what it's like
(like)
I don't really got no type
(type)
I just wanna fuck all night
Yeah-yeah,
oh-whoa-whoa (oh, ooh, mmm)
Baby, I need to know, mmm
(yeah, need to know)
I just been fantasizin'
(size)
And we got a lotta time
(time)
Baby, come throw the pipe
(pipe)
Gotta know what it's like
(like)
Yeah-yeah,
oh-whoa-whoa
~ fin ~
Baby, I need to know, mmm`, `
Mia Khalifa
Is that why you tried
to quit three times?
Is that why you said
good bye, retired!
Is that why you said
fuck these guys?
Who do you think you are?
You were sucking dick for
a foreign car (Brrrrr)
Gotta take that call
They want you at work so,
girl, go do your job
Mia Khalifa (Mia!)
Mia Khalifa (Mia!)
Fight!
Hit or miss
I guess they never miss, huh?
You got a boyfriend,
I bet he doesn't kiss ya
He gon' find another girl
and he won't miss ya
He gon' skrrt and hit the dab
like Wiz Khalifa
You play with them balls
like it's FIFA,
You on every level,
you're the leader, ooh
You used to work
at Whataburger
Now you pop your pussy
for the Warner Brothers
(And that bangs, bro)
Shots fired,
you're fired
You're washed up,
you're retired
Your kitty
looks like a flat tire (Eww!)
I bet that your kitty
real tired... (Ooh!)
/!\\ *;;* ~ Perfect! ~ *;;* /!\\
`, `We at the top again, now what?
Heavy lay the crown, but
Count us,
higher than the mountain
And we be up here
for the long run
Strap in for a long one
We got everybody on one (woo)
Now you're coming at the king
so you better not miss
(not miss)
And we only get stronger
With everything I carry
up on my back
You should paint it up
with a target
Oh, woah
Why would you dare me
to do it again? (Oh)
Come get your spoiler up ahead
We're taking over
We're taking over, aye
Look at you come at my name,
you oughta know by now
That we're taking ovеr
We're taking over, aye
Maybe you wonder
what you're future's gonna be,
I got it all locked up
Take a lap, now
Don't be mad, now
Run it back,
run it back now
I got bodies lining up,
think you're dreaming of greatness?
Send you back home,
let you wake up
Oh, woah
Why would you dare me
to do it again? (Oh)
Come get your spoiler up ahead
We're taking over
We're taking over, aye
Look at you come at my name,
you oughta know by now
That we're taking over
We're taking over, aye
Maybe you wonder
what you're future's gonna be,
I got it all locked up
I got the heart of lion
I know the higher you climbing
The harder you fall (you know)
I'm at the top of the mount
Too many bodies to count
I've been through it all
I had to weather the storm
To get to level I'm on
That's how the legend was born
All of my enemies already dead
I'm bored, I'm ready for more
They know I'm ready for war
I told 'em
We're taking over
We're taking over, aye
Look at you come at my name,
you oughta know by now
That we're taking over
We're taking over, aye
Maybe you wonder
what you're future's gonna be,
I got it all locked up`, `We'll never get free
Lamb to the slaughter
What you gon' do
when there's blood
in the water?
The price of your greed
is your son and your daughter
What you gon' do
when there's blood
in the water?
Look me in my eyes
Tell me everything's not fine
Oh, the people ain't happy
And the river has run dry
You thought you could go free
But the system is done for
If you listen real closely
There's a knock
at your front door
We'll never get free
Lamb to the slaughter
What you gon' do
when there's blood
in the water?
The price of your greed
is your son and your daughter
What you gon' do
when there's blood
in the water?
When there's blood in the
(Uh, uh)
When there's blood in the
(Uh, uh)
Beg me for mercy
Admit you were toxic
You poisoned me just for
Another dollar in your pocket
Now I am the violence
I am the sickness
Won't accept your silence
Beg me for forgiveness
We'll never get free
Lamb to the slaughter
What you gon' do
when there's blood
in the water?
The price of your greed,
your son and your daughter
What you gon' do
when there's blood
in the water?
When there's blood
in the water
(Uh, uh)
When there's blood in the
(Uh, uh)
I am the people
I am the storm
I am the riot
I am the swarm
When the last tree's fallen
the animal can't hide
Money won't solve it
What's your alibi?
What's your alibi?
What's your alibi?
What you gon' do
when there's blood in the,
blood in the water?
When there's blood
in the water
(Uh, uh)
When there's blood in the
(Uh, uh)
When there's blood
in the water`, `Yeah, Yeah
Yeah it's freestyle time
Smacking his ass,
I had my man cumming so fast
when I sucked on his cock & shit
Thats my sugar dad
I blow him & he cash me
so I call him pop & shit
and all of his milk
spraying all over my silk sheets
while im slobbing it,
It fills me up
and I swallow it,
Just put it in me
I'll take all of it,
He can give you more D
than an algebra class
He playing D,
so im fouling his ass
Im pounding and drowning it
he say that it feel astounding
the best dick that he ever had,
I pull down his pants,
And i ain't talking sag,
I shoot so much cum,
I got an extended mag,
We touching eachother
like we playing tag,
We fucking eachother,
but I aint submissive
I grab on his hips,
then I fuck from the back
Yeah i make him sing
like he Whitney,
Dick is so big,
that he throwing like
he just drank too much whiskey,
Yeah i had him tipsy,
Know what this dick did
It got him addicted
He wanna kiss me
right on my big lips
Inside of a business
but I didnt trip
just because he had a big dick
Yeah now everybody know
Imma go to school get cool
with the footbal team
and fuck everybody bro,
When I hang with my guys
please dont be suprised
If i just let everybody blow
Like I'm everybody hoe,
I made everyone grow,
Make everyone choke
when I put it down they throat,
Yeah he gonna ride me
go stupid inside me,
He know where to find me,
he go stupid inside me
~6*9~ FiN! ~6*9~`, `Yessir
Big dick Big dick
4 big guys,
and they grab on my thighs
Blow up my guts
like the fourth of july
If they keep fucking my butt
then i might just cry
Poop and semen
spraying in my eyes
He lick my dick
and the cum start sprayin'
Chagrin' up my dick
ima go super saiyan
When it come to fucking booty
i don't do much playin'
And i whispered in his ear like,
"hey are you staying?"
He said, "yeah i'm not leaving."
i guess he george floyd
Cause i leave him not breathing
He chew on my dick
like a baby that's teething
I'm fucking a nigga
i think his name steven
Hawking,
fuck him till he ain't walking
Dick stone cold
call him bbc office
It's a booty massacre
whеn i visit him in boston
Bought him new titties
don't what they costin'
bitch, hop on the dick
do a split
Shout out to lil baby
my dick is as real as it gets
I'm not fucking on him
if he don't have tits
I'm catching his balls
like my name is kyle pitts
There's 4 big guys
They're grabbing on my thighs
They blow my guts up,
like the fourth of july
If he keep fucking my butt
then i might cry
There's poop and semen
spraying on my eyes
Yes sir that is a fact though
Take out my dick
slip it in his asshole
Swinging my dick through the air
like it's a lasso
Paintin his face
like i'm pablo picasso
Yeah, But im not a good artist
fuck on him good
til that nigga farted
Planted my seeds
in his ass like a garden
The way i play with balls
you should call me james harden
Yeah, digbar is the lead
There's 4 big guys
and im taking their meat
I eat the boys butt
and i chase it with skeet
Yeah I count dudes when i sleep,
not sheep
get up in my sheets
and i'm beating on my meat
=%~! Bitch !~%=`, `Baby shark, do do, do do
Baby shark, do do, do do
Baby shark, do do, do do
Baby shark
Mama Shark, do do, do do
Mama Shark, do do, do do
Mama Shark, do do, do do
Mama Shark
Papa Shark, do do, do do
Papa Shark, do do, do do
Papa Shark, do do, do do
Papa Shark
Grandma Shark, do do, do
Grandma Shark, do do, do
Grandma Shark, do do, do
Grandma Shark
Surfer Dude, do do, do do
Surfer Dude, do do, do do
Surfer Dude, do do, do do
Surfer Dude
Went for a Swim, do do, do
Went for a Swim, do do, do
Went for a Swim, do do, do
Went for a Swim
Lost a Leg, do do, do do
Lost a Leg, do do, do do
Lost a Leg, do do, do do
Lost a Leg
Lost an Arm, do do, do do
Lost an Arm, do do, do do
Lost an Arm, do do, do do
Lost an Arm
911, do do, do do do
911, do do, do do do
911, do do, do do do
911
CPR, do do, do do do
CPR, do do, do do do
CPR, do do, do do do
CPR
It's not working, do do, do
It's not working, do do, do
It's not working, do do, do
It's not working
Reincarnation, do do, do
Reincarnation, do do, do
Reincarnation, do do, do
Reincarnation
As a Baby Shark, do do, do
As a Baby Shark, do do, do
As a Baby Shark, do do, do
As a Baby Shark
Mama Shark, do do, do do
Mama Shark, do do, do do
Mama Shark, do do, do do
Mama Shark
Papa Shark, do do, do do
Papa Shark, do do, do do
Papa Shark, do do, do do
Papa Shark
Grandma Shark, do do, do
Grandma Shark, do do, do
Grandma Shark, do do, do
Grandma Shark
That's the End, do do, do do
That's the End, do do, do do
That's the End, do do, do do
That's the End`];
			let cvsctx = document.getElementById("gameCanvas").getContext("2d");
			let checkWep = (wep) => {
				let wepEl = document.getElementById("actionBarItem" + wep);
				return wepEl && wepEl.style.display === "inline-block"
			};
			let rrz = [65, 70, 75, 110, 118, 142, 110, 65, 70, undefined, 75, 2000, undefined, undefined, 125, undefined];
			function testArc() {
				(() => {
					cvsctx.beginPath();
					cvsctx.lineWidth = 10;
					cvsctx.strokeStyle = "#dc0000";
					let oldGA = cvsctx.globalAlpha;
					cvsctx.globalAlpha = 0.1;
					cvsctx.arc((1920*zoomFactor)/2,(1080*zoomFactor)/2,(rrz[myPlayer.weapon] ? rrz[myPlayer.weapon] + 70 : 0),-Math.PI, Math.PI);
					cvsctx.stroke();
					cvsctx.globalAlpha = oldGA;
				})();
				//window.requestAnimationFrame(testArc);
			};
			//window.requestAnimationFrame(testArc);
            function invisW() {
                if(invisWeapons == true){
                    dns(["5", ['length', !0]]);
                }}
            function resetBreak() {
                if (myPlayer.hat == 31) {
                    autoBreakLoop = false;
                    autoBreakObject = [];
                }}
            function autoUpgrade() {
                if(document.getElementById("autoUpgrade").checked) {
                    if($("#autoUpgradeType").val() == "km") {
                        if (age == "2") {
                            dns(["6", [7]])
                        }
                        if (age == "3") {
                            dns(["6", [17]])
                        }
                        if (age == "4") {
                            dns(["6", [31]])
                        }
                        if (age == "5") {
                            dns(["6", [23]])
                        }
                        if (age == "6") {
                            dns(["6", [10]])
                        }
                        if (age == "7") {
                            dns(["6", [33]])
                        }
                        if (age == "8") {
                            dns(["6", [4]])
                        }
                        if (age == "9") {
                            dns(["6", [15]])
                        }
					} else if($("#autoUpgradeType").val() == "kh") {
						if (age == "2") {
                            dns(["6", [7]])
                        }
                        if (age == "3") {
                            dns(["6", [17]])
                        }
                        if (age == "4") {
                            dns(["6", [31]])
                        }
                        if (age == "5") {
                            dns(["6", [23]])
                        }
                        if (age == "6") {
                            dns(["6", [10]])
                        }
                        if (age == "7") {
                            dns(["6", [33]])
                        }
                        if (age == "8") {
                            dns(["6", [4]])
                        }
						if (age == "9") {
                            dns(["6", [25]])
                        }
                    } else if($("#autoUpgradeType").val() == "dh") {
                        if (age == "2") {
                            dns(["6", [7]])
                        }
                        if (age == "3") {
                            dns(["6", [17]])
                        }
                        if (age == "4") {
                            dns(["6", [31]])
                        }
                        if (age == "5") {
                            dns(["6", [23]])
                        }
                        if (age == "6") {
                            dns(["6", [10]])
                        }
                        if (age == "7") {
                            if($('#sevslot').val() == "tp") {
                                dns(["6", [38]])
                            } else if($('#sevslot').val() == "tu") {
                                dns(["6", [33]])
                            }
                        }
                    } else if($("#autoUpgradeType").val() == "ph") {
                        if (age == "2") {
                            dns(["6", [5]])
                        }
                        if (age == "3") {
                            dns(["6", [17]])
                        }
                        if (age == "4") {
                            dns(["6", [31]])
                        }
                        if (age == "5") {
                            dns(["6", [23]])
                        }
                        if (age == "6") {
                            dns(["6", [10]])
                        }
                        if (age == "7") {
                            if($('#sevslot').val() == "tp") {
                                dns(["6", [38]])
                            } else if($('#sevslot').val() == "tu") {
                                dns(["6", [33]])
                            }
                        }
                        if (age == "8") {
                            dns(["6", [28]])
                        }
                        if (age == "9") {
                            dns(["6", [25]])
                        }
                    } else if($("#autoUpgradeType").val() == "pc") {
                        if (age == "2") {
                            dns(["6", [5]])
                        }
                        if (age == "3") {
                            dns(["6", [17]])
                        }
                        if (age == "4") {
                            dns(["6", [32]])
                        }
                        if (age == "5") {
                            dns(["6", [23]])
                        }
                        if (age == "6") {
                            dns(["6", [9]])
                        }
                        if (age == "7") {
                            if($('#sevslot').val() == "tp") {
                                dns(["6", [38]])
                            } else if($('#sevslot').val() == "tu") {
                                dns(["6", [33]])
                            }
                        }
                        if (age == "8") {
                            dns(["6", [12]])
                        }
                        if (age == "9") {
                            dns(["6", [25]])
                        }
                    } else if($("#autoUpgradeType").val() == "sh") {
                        if (age == "2") {
                            dns(["6", [8]])
                        }
                        if (age == "3") {
                            dns(["6", [17]])
                        }
                        if (age == "4") {
                            dns(["6", [31]])
                        }
                        if (age == "5") {
                            dns(["6", [23]])
                        }
                        if (age == "6") {
                            dns(["6", [10]])
                        }
                        if (age == "7") {
                            if($('#sevslot').val() == "tp") {
                                dns(["6", [38]])
                            } else if($('#sevslot').val() == "tu") {
                                dns(["6", [33]])
                            }
                        }
                        if (age == "8") {
                            dns(["6", [28]])
                        }
                        if (age == "9") {
                            dns(["6", [25]])
                        }
                    }
                }
            }
			function bullTick() {
			if(document.getElementById("bullTick").checked || document.getElementById("combatBot").checked && !empMode && !bullTicking && age >= 13) {
                    if(inInsta == 0 && reloading == 0 && !inAnti && !autoBreakLoop && !clicking && !bullTicking) {
                        if(myPlayer.shameCount == 0 || myPlayer.shameCount == 1) {} else {
							bullTicking = true;
                            let mHoldHat = myPlayer.hat
                            let mHoldAcc = myPlayer.accesory
                            let oSh = myPlayer.shameCount;
                            const bullTickingInt = setInterval(() => {
                                if(autoBreakLoop || inAnti || clicking || inInsta || shouldSBD) {
                                    pausedBullTick = true;
                                    bullTicking = false;
                                } else {
									hat(7);
									acc(11);
									pausedBullTick = false;
									bullTicking = true;
									if(myPlayer.shameCount == 1 || myPlayer.shameCount == 0) {
										clearInterval(bullTickingInt);
										bullTicking = false;
										pausedBullTick = false;
									}
                                }
                            }, 10);
                        }
                    }
                }
			}
			function turretGrind() {
				if(turretGrinding) {
					for(let ew = 0; ew < 4; ew++) {
						let t;
						if((myPlayer.dir > 2) || (myPlayer.dir < 0)) {
							t = 0 + toRad(90 * ew);
						} else {
							t = myPlayer.dir + toRad(90 * ew);
						}
						place(turretType, t + 30)
					}
					smartClick("left", true);
					setTimeout(() => {
						endClick("left", true);
					}, 65);
				}
			}
            function antiClown() {
                if (myPlayer.hat == 45 && (inInsta == 0)) {
                    if (anticlown == 1) {
                        setTimeout(function(){
                            if (myPlayer.hat == 45) chat("LemonMod v" + modVersion + " - AntiClown");
                        }, 100);
                        if (clownMode == "2" || clownMode == 2) {
                            setTimeout(function(){
                                if (myPlayer.hat == 45) {
                                    place(turretType, closestenemyAngle + toRad(180));
                                    dns(["33", [closestenemyAngle + toRad(180)]])
                                }}, 1);
                        }
                        if (clownMode == "0" || clownMode == 0) {
                            setTimeout(function(){
                                if (clowne == 0) place(millType, closestenemyAngle + toRad(90))
                            }, 1);
                            setTimeout(function(){
                                if (clowne == 0) place(millType, closestenemyAngle - toRad(90))
                            }, 1);
                            setTimeout(function(){
                                if (clowne == 0) place(millType, closestenemyAngle + toRad(180))
                            }, 1);
                            setTimeout(function(){
                                if (clowne == 0) place(millType, closestenemyAngle - toRad(180))
                            }, 1);
                            setTimeout(function(){
                                if (clowne == 0) place(spikeType, closestenemyAngle + toRad(90))
                            }, 2);
                            setTimeout(function(){
                                if (clowne == 0) place(spikeType, closestenemyAngle - toRad(90))
                            }, 2);
                            setTimeout(function(){
                                if (clowne == 0) place(spikeType, closestenemyAngle + toRad(180))
                            }, 2);
                            setTimeout(function(){
                                if (clowne == 0) place(spikeType, closestenemyAngle - toRad(180))
                            }, 2);
                        }
                        if (clownMode == "1" || clownMode == 1) {
                            setTimeout(function(){
                                if (myPlayer.hat == 45) hat(13);
                            }, 1);
                            setTimeout(function(){
                                if (myPlayer.hat == 45) hat(13);
                            }, 120);
                            setTimeout(function(){
                                if (myPlayer.hat == 45) hat(13);
                            }, 200);
                            setTimeout(function(){
                                if (myPlayer.hat == 45) hat(13);
                            }, 600);
                            setTimeout(function(){
                                if (myPlayer.hat == 45) hat(13);
                            }, 700);
                            setTimeout(function(){
                                if (myPlayer.hat == 45) hat(13);
                            }, 800);
                            setTimeout(function(){
                                if (myPlayer.hat == 45) hat(13);
                            }, 900);
                            setTimeout(function(){
                                if (myPlayer.hat == 45) hat(13);
                            }, 1000);
                            setTimeout(function(){
                                if (myPlayer.hat == 45) hat(13);
                            }, 1100);
                            setTimeout(function(){
                                clowne = 0;
                            }, 200);
                        }
                    }
                }
            }
            setInterval(() => {
                invisW();
                antiClown();
                autoUpgrade();
				bullTick();
				getkillses();
                //autoBuy();
            }, 50);
			setInterval(() => {
				autoPlacer();
				try{
					if(enemiesNear.length >= 1) {
						setCookie("zoomState", "true", 365);
					} else {
						setCookie("zoomState", "false", 365);
					}
				}catch(e){
					setCookie("zoomState", "false", 365);
				}
			}, 300);
            let delOrCreate = false;
            if (debugMode) {
                console.log('done with killsounds code')
            }
            setInterval(() => {
                const settings = `{
	"checkType": {
        "saveSettings": "${document.getElementById('saveSettings').checked}",
		"useBots": "${document.getElementById('useBots').checked}",
		"heal1": "${document.getElementById('heal1').checked}",
		"useSounds": "${document.getElementById('useSounds').checked}",
		"autoUpgrade": "${document.getElementById('autoUpgrade').checked}",
        "autoPlace": "${document.getElementById('autoPlace').checked}",
		"anticlown": "${document.getElementById('anticlown').checked}",
		"heal2": "${document.getElementById('heal2').checked}",
		"combatBot": "${document.getElementById('combatBot').checked}",
		"silentMode": "${document.getElementById('silentMode').checked}",
		"insta": "${document.getElementById('insta').checked}",
		"autoBuy": "${document.getElementById('autoBuy').checked}",
		"radar": "${document.getElementById('radar').checked}",
		"keystrokes": "${document.getElementById('keystrokes').checked}",
		"reloadBars": "${document.getElementById('reloadBars').checked}",
		"sAim": "${document.getElementById('sAim').checked}",
		"bullTick": "${document.getElementById('bullTick').checked}",
		"autoSpike": "${document.getElementById('autoSpike').checked}",
		"antiTrap": "${document.getElementById('antiTrap').checked}",
		"ahat": "${document.getElementById('ahat').checked}",
		"respawn": "${document.getElementById('respawn').checked}",
		"cMirr": "${document.getElementById('cMirr').checked}",
		"shield360": "${document.getElementById('shield360').checked}",
		"invisBuilds": "${document.getElementById('invisBuilds').checked}",
		"invisWeapons": "${document.getElementById('invisWeapons').checked}",
		"derp": "${document.getElementById('derp').checked}",
		"onclick": "${document.getElementById('onclick').checked}",
		"antiInsta1": "${document.getElementById('antiInsta1').checked}",
		"extraAnti": "${document.getElementById('extraAnti').checked}",
		"useCounterInsta": "${document.getElementById('useCounterInsta').checked}",
		"antiInsta2": "${document.getElementById('antiInsta2').checked}",
		"antiInsta3": "${document.getElementById('antiInsta3').checked}",
		"antiInsta4": "${document.getElementById('antiInsta4').checked}",
		"antiBoostSpike": "${document.getElementById('antiBoostSpike').checked}",
		"autoInsta": "${document.getElementById('autoInsta').checked}",
		"autoInstaBullCheck": "${document.getElementById('autoInstaBullCheck').checked}",
		"iAim": "${document.getElementById('iAim').checked}",
		"spikeInsta": "${document.getElementById('spikeInsta').checked}",
		"autoReload": "${document.getElementById('autoReload').checked}",
		"songCheck": "${document.getElementById('songCheck').checked}",
		"acBool": "${document.getElementById('acBool').checked}",
		"clanSpamBool": "${document.getElementById('clanSpamBool').checked}",
		"icBool": "${document.getElementById('icBool').checked}",
		"irBool": "${document.getElementById('irBool').checked}",
		"ezBool": "${document.getElementById('ezBool').checked}",
		"cPlayer": "${document.getElementById('cPlayer').checked}",
		"wLag": "${document.getElementById('wLag').checked}"
	},
	"listType": {
		"hType": "${$('#hType').val()}",
		"autoUpgradeType": "${$('#autoUpgradeType').val()}",
        "sevslot": "${$('#sevslot').val()}",
        "autoPlaceMode": "${$('#autoPlaceMode').val()}",
		"clownMode": "${$('#clownMode').val()}",
		"sfxType": "${$('#sfxType').val()}",
		"autoFarmType": "${$('#autoFarmType').val()}",
		"instaType": "${$('#instaType').val()}",
		"pType": "${$('#pType').val()}",
		"oHat": "${$('#oHat').val()}",
		"oAcc": "${$('#oAcc').val()}",
		"tHat": "${$('#tHat').val()}",
		"tAcc": "${$('#tAcc').val()}",
		"otHat": "${$('#otHat').val()}",
		"otAcc": "${$('#otAcc').val()}",
		"dHat": "${$('#dHat').val()}",
		"dAcc": "${$('#dAcc').val()}",
		"eHat": "${$('#eHat').val()}",
		"eAcc": "${$('#eAcc').val()}",
		"ssHat": "${$('#ssHat').val()}",
		"ssAcc": "${$('#ssAcc').val()}",
		"srHat": "${$('#srHat').val()}",
		"srAcc": "${$('#srAcc').val()}",
		"snHat": "${$('#snHat').val()}",
		"snAcc": "${$('#snAcc').val()}",
		"song": "${$('#song').val()}",
		"aChat": "${$('#aChat').val()}",
		"clanSpam": "${$('#clanSpam').val()}",
		"ezChat": "${$('#ezChat').val()}",
		"rChat": "${$('#rChat').val()}",
		"kChat": "${$('#kChat').val()}"
	}
}`;
                if(window.doneParsing == true && (document.getElementById("mm-menu-container")) != null && !crashed && window.hasSpawned == true) {
                    eraseCookie("modSettings");
                    setTimeout(() => {
                        setCookie("modSettings",btoa(settings),30);
                    }, 100);
                }
                if(document.getElementById("clanSpamBool").checked) {
                    if(delOrCreate) {
                        dns(["9", [null]]);
                    } else {
                        dns(["8", [($("#clanSpam").val()).slice(0, 7)]]);
                    }
                    delOrCreate = !delOrCreate
                }
            }, 600);
            let enemyspiked = false;
            function colDetection(dir, scale) {
                let e = myPlayer.x + scale * Math.cos(dir);
                let t = myPlayer.y + scale * Math.sin(dir);
                return buildings.some(n => Math.hypot(n[2] - t, n[1] - e) < n[4]);
            }
            // but now you can use math, like this:
            // math becomes much more useful in javascript, especially when your making a hack for a .io game lollololool
            // basically we need a lot of geometry calculations in order to estimate where things will land, etc (aimbot)

            function autoPlacer() {
                /*if(document.getElementById("autoSpike").checked || document.getElementById("combatBot").checked) {
                    try {
                        if((dist(closestenemy, myPlayer) < 84) && !clicking && !inAnti && (inInsta == 0) && (reloading == 0) && (myPlayer.hat != 31) && (autoBreakLoop == false)) {
                            spiking = true;
                            setTimeout(() => {
                                place(spikeType, toRad(-90));
                                place(spikeType, toRad(-180));
                                place(spikeType, toRad(90));
                                place(spikeType, toRad(180));
                            }, 20);
                            setTimeout(() => {
                                spiking = false;
                            }, 60);
                        }} catch(err) {}
                }*/
                try {if (document.getElementById("autoPlace").checked && !inInsta && !usingInsta && !enemyspiked && !spiking && !autoBreakLoop && !clicking && !inAnti && (myPlayer.hat != 31) && age >= 4) {
                    for(let ew = 0; ew < 4; ew++) {
                        let thisDistPlacer;
                        try{
                            thisDistPlacer = Math.sqrt(Math.pow((myPlayer.y-closestenemy[2]), 2) + Math.pow((myPlayer.x-closestenemy[1]), 2));
                        } catch(err){
                            thisDistPlacer = 960;
                        }
                        if(!(thisDistPlacer < 180) && thisDistPlacer < 950) {
                            let t;
                            if((myPlayer.dir > 2) || (myPlayer.dir < 0)) {
                                t = 0 + toRad(90 * ew);
                            } else {
                                t = myPlayer.dir + toRad(90 * ew);
                            }
                            if(!colDetection(t+30, 50)) {
                                place(boostType, t + 30)
                            }
                        }
                    }
                }} catch(err) {}
                try{
                    let placerDist = 230;
                    if(document.getElementById("autoPlace").checked && $("#autoPlaceMode").val() == "smart" && !spiking && !inInsta && !enemyspiked && !clicking && !inAnti && !autoBreakLoop && Math.sqrt(Math.pow((myPlayer.y-closestenemy[2]), 2) + Math.pow((myPlayer.x-closestenemy[1]), 2)) < placerDist) {
                        if(trapsNear.length == 1) {
                            let leftpos = 0;
                            let rightpos = 0;
                            enemyspiked = true;
							for(let ieef = 0; ieef < 10; ieef++) {
								rightpos = rightpos - 5;
								if(!colDetection(closestenemyAngle + toRad(leftpos), 52)) {
									place(spikeType, closestenemyAngle + toRad(leftpos));
								}
								leftpos = leftpos + 5;
								if(!colDetection(closestenemyAngle + toRad(rightpos), 52)) {
									place(spikeType, closestenemyAngle + toRad(rightpos));
								}
							}
							leftpos = 0;
							rightpos = 0;
							setTimeout(() => {
								enemyspiked = false;
							}, 280);
                        } else {
                            if(!colDetection(closestenemyAngle, 50)) {
                                place(boostType, closestenemyAngle);
                            }
                        }
                    }
                } catch(e) {}
            }
            function reloadGun() {
				/*setTimeout(() => {
					if(irBool) {
						chat("LemonMod v" + modVersion + " -  RELOADING...");
					}
				}, 400);
                if(document.getElementById("autoReload").checked) {
                    window.globalReload = 0;
                    reloading = true;
                    weapon = secondary
                    dns(["5", [secondary, !0]])
                    setTimeout(() => {
                        dns(["5", [secondary, !0]])
                    }, 30);
                    const reloadTicking = setInterval(() => {
                        if(autoBreakLoop || inInsta || clicking) {
							clearInterval(reloadTicking);
							window.globalReload = 0;
                            reloading = false;
                            weapon = primary;
                            dns(["5", [primary, !0]]);
                        } else {
                            pausedReload = false;
							ttr = SecBreakSpeed/10;
                            reloading = true;
                            weapon = secondary
                            dns(["5", [secondary, !0]])
							window.globalReload++;
						}
						if (window.globalReload >= ttr-20) {
							pausedReload = false;
							weapon = primary;
							dns(["5", [primary, !0]]);
							try{
								clearInterval(reloadTicking);
							}catch(e){}
							setTimeout(() => {
								reloading = false;
								try{
									clearInterval(reloadTicking);
								}catch(e){}
								weapon = primary;
								dns(["5", [primary, !0]]);
								dns(["5", [primary, !0]]);
								dns(["5", [primary, !0]]);
							}, 30);
							setTimeout(() => {
								reloading = false;
								try{
									clearInterval(reloadTicking);
								}catch(e){}
								weapon = primary;
								dns(["5", [primary, !0]]);
								dns(["5", [primary, !0]]);
								dns(["5", [primary, !0]]);
							}, 60);
							setTimeout(() => {
								window.globalReload = 0;
							}, 90);
                            weapon = primary;
                            dns(["5", [primary, !0]]);
                            dns(["5", [primary, !0]]);
                            dns(["5", [primary, !0]]);
                            reloading = false;
                            if(irBool) {
                                chat(rChat);
                            }
                        }
                    }, 10);
                }*/
				if(document.getElementById("autoReload").checked && !reloading) {
					setTimeout(() => {
						if(irBool) {
							chat("LemonMod v" + modVersion + " -  RELOADING...");
						}
					}, 400);
					debugMode ? console.log('[reload]: starting...') : (window.afiurtbhgiwrfweo = 3)
					weapon = secondary
                    dns(["5", [secondary, !0]])
					reloading = true;
					sProgress = 0;
					rlJustTriggered = true;
				}
            }
			var to1 = 10;
			var to2 = 81;
			function noBullInstaKill() {
                if(autoInsta) {
                    autoInsta = false;
                }
                for(let i = 0; i < 13; i++) {
					setTimeout(() => {
						if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
					}, 10 + i*10);
				}
				if(document.getElementById("extraAnti").checked){
					setTimeout(() => {
						place(foodType, null);
						place(foodType, null);
						place(foodType, null);
					}, 220);
					setTimeout(() => {
						place(foodType, null);
					}, 230);
                }
                if(document.getElementById("tickBased")) {
                    tickInsta = "1nb";
                } else {
                    timeSinceLastInsta = 0;
                    var extraInstaDelay = 0;
                    setTimeout(() => {
                        if(closestenemyHat == 45) {
                            randomBreakSound();
                        }
                    }, 150);
                    if(pingDel >= 29) {
                        extraInstaDelay = pingDel;
                    }
                    if(document.getElementById("autoInsta").checked || iAim) {
                        lockedAim = true;
                    }
                    if(timeSinceLastAttack > Math.round(breakSpeed/10)) {
                        timeSinceLastAttack = Math.round(breakSpeed/10);
                    }
                    if(timeSinceLastSecAttack > Math.round(SecBreakSpeed/10)) {
                        timeSinceLastSecAttack = Math.round(SecBreakSpeed/10);
                    }
                    setTimeout(() => {
                        inInsta = 1;
                        usingInsta = 1;
                        setTimeout(() => {
                            if(autoInsta) {
                                autoInsta = false;
                            }
                            lockedAim = false;
                            inInsta = 0;
                            usingInsta = 0
                        }, 300);
                        setTimeout(() => {
                            if(autoInsta) {
                                autoInsta = false;
                            }
                            lockedAim = false;
                            inInsta = 0;
                            usingInsta = 0
                        }, 400);
                        setTimeout(() => {
                            for(let i = 0; i < 13; i++) {
                                setTimeout(() => {
                                    if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
                                }, 10 + i*10);
                            }
                            if(document.getElementById("extraAnti").checked){
                                setTimeout(() => {
                                    place(foodType, null);
                                    place(foodType, null);
                                    place(foodType, null);
                                }, 220);
                                setTimeout(() => {
                                    place(foodType, null);
                                }, 230);
                            }
                            if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
                            dns(["14", [1]]);
                            autoSecondary = false;
                            autoPrimary = true;
                            weapon = primary;
                            dns(["5", [primary, true]]);
                            hat(6);
                            acc(21, true);
                            if(document.getElementById("tickBased").checked) {
                                setTimeout(() => {
                                    weapon = primary;
                                    dns(["5", [primary, true]]);
                                    timeSinceLastAttack = 0;
                                    dns(["c", [1]]);
                                }, 10+extraInstaDelay);
                                if(pingDel <= 27) {
                                    setTimeout(() => {
                                        autoPrimary = false;
                                        autoSecondary = true;
                                        hat(53);
                                        weapon = secondary;
                                        dns(["5", [secondary, true]]);
                                    }, 71+extraInstaDelay*2);
                                } else {
                                    setTimeout(() => {
                                        autoPrimary = false;
                                        autoSecondary = true;
                                        hat(53);
                                        weapon = secondary;
                                        dns(["5", [secondary, true]]);
                                    }, 81+extraInstaDelay*2);
                                }
                            } else {
                                setTimeout(() => {
                                    autoPrimary = false;
                                    autoSecondary = true;
                                    hat(53);
                                    weapon = secondary;
                                    dns(["5", [secondary, true]]);
                                }, 130);
                            }
                            setTimeout( () => {
                                autoPrimary = false;
                                autoSecondary = false;
                                dns(["c", [0, null]]);
                                hat(6);
                                acc(21);
                                weapon = primary;
                                dns(["5", [primary, true]]);
                            }, 230+extraInstaDelay*2);
                            setTimeout(() => {
                                inInsta = 0;
                                usingInsta = 0
                                reloadGun();
                            }, 250+extraInstaDelay*2);
                        }, 30);
                    }, Math.abs(breakSpeed/10 - timeSinceLastAttack));
                }
			}
			function randomInstaSound() {
				let rer = RRandom(1, 3);
				if(rer == 1) {
					playSound(sound.fn_insta_f_1);
				} else if(rer == 2) {
					playSound(sound.fn_insta_f_2);
				} else if(rer == 3) {
					playSound(sound.fn_insta_f_3);
				}
				let rea = RRandom(1, 3);
				setTimeout(() => {
					if(rea == 1) {
						playSound(sound.fn_insta_l_1);
					} else if(rea == 2) {
						playSound(sound.fn_insta_l_2);
					} else if(rea == 3) {
						playSound(sound.fn_insta_l_3);
					}
				}, 80);
			}
			function tg() {
				turretGrind();
				if(turretGrinding) {
					setTimeout(tg, breakSpeed);
				}
			}
			function katanaInsta(extraInstaDelay) {
				for(let i = 0; i < 13; i++) {
					setTimeout(() => {
						if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
					}, 10 + i*10);
				}
				if(document.getElementById("extraAnti").checked){
					setTimeout(() => {
						place(foodType, null);
						place(foodType, null);
						place(foodType, null);
					}, 220);
					setTimeout(() => {
						place(foodType, null);
					}, 230);}
				if(document.getElementById("tickBased").checked) {
                    tickInsta = "1";
					/*if(pingDel <= 20) {
						setTimeout(() => {
							weapon = primary;
							dns(["5", [primary, true]]);
							timeSinceLastAttack = 0;
							dns(["c", [1]]);
						}, 5);
						setTimeout(() => {
							autoPrimary = false;
							autoSecondary = true;
							hat(53);
							weapon = secondary;
							dns(["5", [secondary, true]]);
						}, 63);
					} else if(pingDel <= 27) {
						setTimeout(() => {
							weapon = primary;
							dns(["5", [primary, true]]);
							timeSinceLastAttack = 0;
							dns(["c", [1]]);
						}, 10);
						setTimeout(() => {
							autoPrimary = false;
							autoSecondary = true;
							hat(53);
							weapon = secondary;
							dns(["5", [secondary, true]]);
						}, 71);
					} else if(pingDel <= 30) {
						setTimeout(() => {
							weapon = primary;
							dns(["5", [primary, true]]);
							timeSinceLastAttack = 0;
							dns(["c", [1]]);
						}, 20);
						setTimeout(() => {
							autoPrimary = false;
							autoSecondary = true;
							hat(53);
							weapon = secondary;
							dns(["5", [secondary, true]]);
						}, 101);
					} else if(pingDel <= 40) {
						setTimeout(() => {
							weapon = primary;
							dns(["5", [primary, true]]);
							timeSinceLastAttack = 0;
							dns(["c", [1]]);
						}, 50);
						setTimeout(() => {
							autoPrimary = false;
							autoSecondary = true;
							hat(53);
							weapon = secondary;
							dns(["5", [secondary, true]]);
						}, 151);
					} else if(pingDel > 40) {
						setTimeout(() => {
							weapon = primary;
							dns(["5", [primary, true]]);
							timeSinceLastAttack = 0;
							dns(["c", [1]]);
						}, pingDel+10);
						setTimeout(() => {
							autoPrimary = false;
							autoSecondary = true;
							hat(53);
							weapon = secondary;
							dns(["5", [secondary, true]]);
						}, 130+pingDel);
					}*/
				} else {
					setTimeout(() => {
						weapon = primary;
						dns(["5", [primary, true]]);
						timeSinceLastAttack = 0;
						dns(["c", [1]]);
					}, 30);
					setTimeout(() => {
						autoPrimary = false;
						autoSecondary = true;
						hat(53);
						weapon = secondary;
						dns(["5", [secondary, true]]);
					}, 160);
				}
				setTimeout(() => {
					autoPrimary = false;
					autoSecondary = false;
					dns(["c", [0, null]]);
					hat(6);
					acc(21);
					weapon = primary;
					dns(["5", [primary, true]]);
				}, 230+pingDel*2);
				setTimeout(() => {
					inInsta = 0;
					usingInsta = 0
					reloadGun();
				}, 250+pingDel*2);
			}
            function instaKill() {
                if(autoInsta) {
                    autoInsta = false;
                }
				let pingBased = true;
				var extraInstaDelay = 0;
				setTimeout(() => {
					if(closestenemyHat == 45) {
						randomBreakSound();
					}
				}, 150);
				if(pingDel >= 29) {
					extraInstaDelay = pingDel;
				}
				timeSinceLastInsta = 0;
				setTimeout(() => {
				if($("#instaType").val() == "lag" && primaryReloaded) {
					ws.oldSend(crasherFb);
				}
				}, 1);
				if(document.getElementById("autoInsta").checked || iAim) {
					lockedAim = true;
				}
				if(timeSinceLastAttack > Math.round(breakSpeed/10)) {
					timeSinceLastAttack = Math.round(breakSpeed/10);
				}
				if(timeSinceLastSecAttack > Math.round(SecBreakSpeed/10)) {
					timeSinceLastSecAttack = Math.round(SecBreakSpeed/10);
				}
				setTimeout(() => {
                inInsta = 1;
                usingInsta = 1;
                setTimeout(() => {
					if(autoInsta) {
						autoInsta = false;
					}
					lockedAim = false;
                    inInsta = 0;
                    usingInsta = 0
                }, 300);
                setTimeout(() => {
					if(autoInsta) {
						autoInsta = false;
					}
					lockedAim = false;
                    inInsta = 0;
                    usingInsta = 0
                }, 400);
					randomInstaSound();
                if ($("#instaType").val() == "oneframe") {
                if (mpPrimary == "polearm") {
                    const checkdis = setInterval(() => {
                        if(dist(closestenemy, myPlayer) < 240 && dist(closestenemy, myPlayer) > 220) {
                            dns(["33", [null]]);
                            clearInterval(checkdis);
                            inInsta = true;
                            lockedAim = true;
                            inBetaOF = true;
                            hat(53);
                            acc(19);
                            dns(["33", [null]]);
                        } else {
                            dns(["33", [closestenemyAngle]]);
                        }
                    }, 100);
                } else {
                    chat("LemonMod v" + modVersion + " - No insta! :(");
                }
				} else if ($("#instaType").val() == "onetick") {
                if (mpPrimary == "polearm" && mpSecondary == "crossbow") {
                    let instadist;
                    try {
                        instadist = dist(closestenemy, myPlayer);
                    } catch(e) {
                        instadist = 175;
                    }
                    usingInsta = 1
                    olHat = myPlayer.hat;
                    olAcc = myPlayer.accessory;
                    inInsta = 1;
                    if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
                    weapon = secondary;
                    dns(["5", [secondary, !0]])
                    hat(53);
                    acc(21, true);
                    setTimeout(() => {
                        if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
						hat(53);
                        acc(21, true);
                        attack();
                    }, (instadist-20)/2);
                    setTimeout(() => {
						if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
                        place(boostType, closestenemyAngle);
						place(boostType, closestenemyAngle);
						setTimeout(() => {
							place(boostType, closestenemyAngle);
							place(boostType, closestenemyAngle);
						}, 20);
						setTimeout(() => {
							place(boostType, closestenemyAngle);
							place(boostType, closestenemyAngle);
						}, 40);
                        dns(["33", [closestenemyAngle]]);
                        setTimeout(() => {
                        dns(["33", [null]]);
                        }, 140);
						weapon = primary
                        dns(["5", [primary, !0]])
                        dns(["5", [primary, !0]])
                        dns(["5", [primary, !0]])
                        setTimeout(() => {
                            dns(["5", [primary, !0]])
                        }, 10);
                        hat(7);
                        acc(13, true);
                        attack();
                        attack();
                        attack();
                        attack();
                        attack();
                    }, ((instadist-20)/2)+80);
                    setTimeout(() => {
                        inInsta = 0;
                        usingInsta = 0;
                    }, 500);
                    setTimeout(() => {
                        setTimeout(() => {if(document.getElementById("spikeInsta").checked) {place(spikeType, closestenemyAngle + toRad(65)), place(spikeType, closestenemyAngle - toRad(65))}}, 20);
                    }, ((instadist-20)/2)+132.5);
                    setTimeout(() => {
                        if(irBool) {
                            chat(rChat);
                        }
                    }, 2700);
                } else {
                    chat("LemonMod v" + modVersion + " - No insta! :(");
                }
                } else {
                if(mpPrimary == "polearm" && mpSecondary == "musket") {
                    usingInsta = 1
                    olHat = myPlayer.hat;
                    olAcc = myPlayer.accessory;
                    inInsta = 1;
                    if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
                    hat(7);
                    acc(13, true);
                    if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
                    weapon = primary
                    dns(["5", [primary, !0]])
                    attack()
                    setTimeout(() => {
                        if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
                        weapon = secondary
                        dns(["5", [secondary, !0]])
                        dns(["5", [secondary, !0]])
                        setTimeout(() => {
                            attack()
                        }, 80);
                        setTimeout(() => {
                            if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
                            hat(53);
                            acc(21, true);
                        }, 130);
                        setTimeout(() => {if(document.getElementById("spikeInsta").checked) {place(spikeType, closestenemyAngle + toRad(65)), place(spikeType, closestenemyAngle - toRad(65))}}, 20);
                    }, 92.5);
                    setTimeout(() => {
                        hat(olHat);
                        acc(olAcc);
                        inInsta = 0;
                        usingInsta = 0
                        reloadGun();
                    }, 150);
                } else if(mpPrimary == "katana" && mpSecondary == "musket" && ($("#instaType").val() == "normal" || $("#instaType").val() == "lag")) {
                    katanaInsta(extraInstaDelay);
                } else if(mpPrimary == "tool_hammer" && mpSecondary == "none" && age >= 2) {
                    usingInsta = 1
                    inInsta = 1;
                    setTimeout(() => {
                        acc(0)
                        hat(7)
                        attack()
                        setTimeout(() => {
                            dns(["6", [5]])
                        }, 110);
                        setTimeout(() => {
                            inInsta = 0;
                            usingInsta = 0
                        }, 800);
                    }, 30);
                } else {
                    chat("LemonMod v" + modVersion + " - No insta! :(");
                }
                }
				}, Math.abs(breakSpeed/10 - timeSinceLastAttack));
            }
            setTimeout(() => {
                if(document.getElementById("saveSettings").checked) {
                    const cachedSettings = getCookie("modSettings");
					parseSettings(cachedSettings);
                }
				setTimeout(() => {
				if(document.getElementById("keystrokes").checked) {
					document.getElementById('onekey').style.display='block';
					document.getElementById('spacekey').style.display='block';
					document.getElementById('rkey').style.display='block';
					document.getElementById('ekey').style.display='block';
					document.getElementById('fourkey').style.display='block';
					document.getElementById('threekey').style.display='block';
					document.getElementById('wkey').style.display='block';
					document.getElementById('qkey').style.display='block';
					document.getElementById('twokey').style.display='block';
				} else {
					document.getElementById('onekey').style.display='none';
					document.getElementById('spacekey').style.display='none';
					document.getElementById('rkey').style.display='none';
					document.getElementById('ekey').style.display='none';
					document.getElementById('fourkey').style.display='none';
					document.getElementById('threekey').style.display='none';
					document.getElementById('wkey').style.display='none';
					document.getElementById('qkey').style.display='none';
					document.getElementById('twokey').style.display='none';
				}
				document.getElementById("radar").checked ? (document.getElementById("canvas").style.zIndex = "1", pos.style.zIndex = "1") : (document.getElementById("canvas").style.zIndex = "-1", pos.style.zIndex = "-1");
				}, 50);
            }, 1000);
			setTimeout(() => {
				if(useSounds) {
					menuMusic.play();
				}
			}, 1100);
            function consoleM() {
                if (window.isDev == 1) {
                    var myevo = prompt("LemonMod v" + modVersion + ' Developer Console\n\nAvailable Commands: \nkatana(), musket(), kmsk(), tryCrash(), createTribe(), leaveTribe(), heal(), chat("example"), place(example), dns(["foo","bar"]), clan(), toggleMenu(), downloadSource(), devNotes(), changeSiuJiSpeed(), dnsDict(), ')
                    } else {
                        myevo = prompt("LemonMod v" + modVersion + ' Console\n\nAvailable Commands: \nkatana(), musket(), kmsk(), tryCrash(), createTribe(), leaveTribe(), heal(), chat("example"), place(example), dns(["foo","bar"]), clan(), toggleMenu()')
                    }
                if (myevo == "katana()") {
                    dns([6, [4]])
                } else if (myevo == "musket()") {
                    dns([6, [15]])
                } else if (myevo == "clan()") {
                    var newClanName = prompt("Clan Name:");
                    dns(["9", [null]]);
                    dns(["9", [null]]);
                    dns(["9", [null]]);
                    setTimeout(function () {
                        dns(["9", [null]]);
                    }, 25);
                    setTimeout(function () {
                        dns(["8", [newClanName]]);
                    }, 50);
                    setTimeout(function () {
                        dns(["8", [newClanName]]);
                    }, 100);
                    setTimeout(function () {
                        dns(["8", [newClanName]]);
                    }, 250);
                    setTimeout(function () {
                        dns(["8", [newClanName]]);
                    }, 500);
                    setTimeout(function () {
                        dns(["8", [newClanName]]);
                    }, 1000);
                    setTimeout(function () {
                        dns(["8", [newClanName]]);
                    }, 1250);
                    setTimeout(function () {
                        dns(["8", [newClanName]]);
                    }, 1500);
                } else if (myevo == "kmsk()") {
                    dns([6, [4]]);
                    dns([6, [15]])
                } else if (myevo == "tryCrash()") {
                    alert("not supported at the moment");
                } else if (myevo == "createTribe()") {
                    dns(["9", [null]]);
                    setTimeout(function () {
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                    }, 10);
                    setTimeout(function () {
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                        dns(["8", ["~DaRk~"]]);
                    }, 500);
                } else if (myevo == "leaveTribe()") {
                    dns(["9", [null]]);
                } else if (myevo == "heal()") {
                    heal()
                } else if (myevo == "toggleMenu()") {
                    menu.style.display = "block" == menu.style.display ? "none" : "block", resetHat()
                } else if (myevo.includes("chat(")) {
                    cp1 = myevo.slice(6, -2);
                    chat(cp1);
                } else if (myevo.includes("dns([")) {
                    if (myevo.includes(`dns(["`)) {
                        cp1 = myevo.slice(6, 7);
                        cp2 = myevo.slice(11, -3);
                    } else {
                        cp1 = myevo.slice(5, 6);
                        cp2 = myevo.slice(9, -3);
                    }
                    finalCMD = `dns([` + cp1 + `, [` + cp2 + `]])`;
                    eval(finalCMD);
                } else {
                    try {
                        eval(myevo)
                    } catch (urmom) {}
                }
                chat('Executed "' + myevo + '"');
            }
			setInterval(() => {
				if(weapon == primary && mpPrimary == "daggers" && clicking) {
					attack();
				} else {
					if(weapon == primary && primaryReloaded && clicking) {
						attack();
					}
					if(weapon == secondary && secondaryReloaded && clicking) {
						attack();
					}
				}
			}, breakSpeed-20);
            function smartClick(btn, sim=false) {
				if(sim) {
					if(turretsNear.length >= 4) {
						hat(22);
					} else {
						hat(6);
					}
					let tempBreakspd = breakSpeed;
					if(mpSecondary != "great_hammer") {
						if(tempBreakspd == 310) {
							tempBreakspd = 105;
						} else if (tempBreakspd == 110) {
							tempBreakspd = 40;
						} else if (tempBreakspd == 410) {
							tempBreakspd = 95;
						} else if (tempBreakspd == 710) {
							tempBreakspd = 240;
						}
					} else {
						tempBreakspd = 115+10;
					}
					if(inInsta == 0 && !clicking) {
						if(weapon == primary) {
							clicking = true
							hat(40);
							setTimeout(() => {
								hat(6);
							}, tempBreakspd);
						} else {
							clicking = true
							hat(40);
							setTimeout(() => {
								hat(6);
							}, tempBreakspd);
						}
					}
				} else {
					if(!isZombie) {
						window.hatbeforeclick = myPlayer.hat;
						window.accbeforeclick = myPlayer.accessory;
						let tempBreakspd = breakSpeed;
						if(mpSecondary != "great_hammer") {
							if(tempBreakspd == 310) {
								tempBreakspd = 105;
							} else if (tempBreakspd == 110) {
								tempBreakspd = 40;
							} else if (tempBreakspd == 410) {
								tempBreakspd = 95;
							} else if (tempBreakspd == 710) {
								tempBreakspd = 240;
							}
						} else {
							tempBreakspd = 125;
						}
						if(onclick && inInsta == 0 && !clicking) {
							if(btn == "left") {
								if(weapon == primary) {
									clicking = true
									hat(40);
                                    setTimeout(() => {
                                        hat(7);
                                        acc(13, true);
                                    }, tempBreakspd);
                                    setTimeout(() => {
                                        if(clicking) {
                                            hat(40);
                                            acc(11, true);
                                        }
                                    }, tempBreakspd*2);
                                } else if(weapon == secondary && mpSecondary == "musket") {
                                    clicking = true;
                                    weapon = primary;
                                    equip(primary);
                                    hat(40);
                                    setTimeout(() => {
                                        hat(7);
                                        acc(13, true);
                                    }, tempBreakspd);
                                    setTimeout(() => {
                                        if(clicking) {
                                            hat(40);
                                            acc(11, true);
                                        }
                                    }, tempBreakspd*2);
                                } else {
                                    clicking = true
                                    hat(40);
                                    setTimeout(() => {
                                        hat(7);
                                        acc(13, true);
                                    }, tempBreakspd);
                                    setTimeout(() => {
                                        if(clicking) {
                                            hat(40);
                                            acc(11, true);
                                        }
                                    }, tempBreakspd*2);
                                }
                            } else if(btn == "right") {
                                lockedAim = true;
                                if(!(weapon == primary && mpPrimary == "daggers")) {
                                    setTimeout(() => {
                                        lockedAim = false;
                                    }, tempBreakspd);
                                }
                                if(enemiesNear.length >= 1 && dist(closestenemy, myPlayer) < 280) {
                                    place(boostType, closestenemyAngle);
                                    place(spikeType, closestenemyAngle + toRad(75));
                                    place(spikeType, closestenemyAngle - toRad(75));
                                }
                                if(weapon == primary) {
                                    if(mpPrimary == "daggers") {
                                        followingEnemy = true;
                                    }
                                    clicking = true;
                                    hat(7);
                                    acc(18, true);
                                    if(mpPrimary != "daggers") {
                                        setTimeout(() => {
                                            hat(6);
                                            acc(19, true);
                                        }, tempBreakspd);
                                        setTimeout(() => {
                                            if(clicking) {
                                                hat(7);
                                                acc(18, true);
                                            }
                                        }, tempBreakspd*2);
                                    }
                                } else if(weapon == secondary && mpSecondary == "musket") {
                                    clicking = true;
                                    weapon = primary;
                                    equip(primary);
                                    hat(7);
                                    acc(18, true);
                                    setTimeout(() => {
                                        hat(6);
                                        acc(19, true);
                                    }, tempBreakspd);
                                    setTimeout(() => {
                                        if(clicking) {
                                            hat(7);
                                            acc(18, true);
                                        }
                                    }, tempBreakspd*2);
                                } else {
                                    clicking = true;
                                    hat(7);
                                    acc(18, true);
                                    setTimeout(() => {
                                        hat(6);
                                        acc(19, true);
                                    }, tempBreakspd);
                                    setTimeout(() => {
                                        if(clicking) {
                                            hat(7);
                                            acc(18, true);
                                        }
                                    }, tempBreakspd*2);
                                }
                            }
							timeSinceLastClick = 0;
							attack();
						}
					}
				}
			}
            function endClick(btn, sim=false) {
				if(sim) {
					if(inInsta == 0) {
						setTimeout(() => {
							hat(6);
							acc(21);
							clicking = false;
						}, (breakSpeed/4.13));
					}
				} else {
					if(onclick && inInsta == 0) {
						if(btn == "left") {
							setTimeout(() => {
								hat(window.hatbeforeclick);
								acc(window.accbeforeclick);
								clicking = false;
							}, (breakSpeed/4.13));
						} else if(btn == "right") {
							setTimeout(() => {
								hat(window.hatbeforeclick);
								acc(window.accbeforeclick);
								clicking = false;
								if(mpPrimary == "daggers") {
									try{
										followingEnemy = false;
                                        lockedAim = false;
									}catch(e){}
								}
							}, (breakSpeed/4.13));
						}
					}
				}
            }
            async function singTRK(l, s) {
                let songLength = ((l.split("\n")).length);
                let songArray = (l.split("\n"));
                for (var i = 0; i < songLength; i++) {
                    if (amSinging == 1) {
                        var preparedLyric = ((songArray[i]).slice(0, 30));
						if(document.activeElement.id.toLowerCase() != "chatbox") {
							dns(["ch", [preparedLyric]]);
						}
                        await singPromise(parseInt(s));
						if(i==songLength-1) {
							singTRK(l, s);
						}
                    }
                }
            }
            function autoBuy() {
                if (document.getElementById("autoBuy").checked || document.getElementById("combatBot").checked) {
                    storeBuy(11, 1) // (#1) Monkey Tail
                    storeBuy(7) // (#2) Bull Helmet
                    storeBuy(6) // (#3) Soldier Helmet
                    storeBuy(12); // (#4) Booster Hat
                    storeBuy(31); // (#5) Flipper Hat
                    storeBuy(15); // (#6) Winter Cap
                    storeBuy(53); // (#7) Turret Gear
                    storeBuy(40); // (#8) Tank Gear
                    storeBuy(11); // (#9) Spike Helmet
                    storeBuy(26); // (#10) Barbarian Helmet
                    storeBuy(21, 1) // (#11) Corrupt X Wings
                    storeBuy(13, 1) // (#12) Angel Wings
                    storeBuy(22); // (#13) EMP Gear
                }
            }
			function randomKillSound() {
			let rej = RRandom(1, 2);
				if(rej == 1) {
					playSound(sound.fn_elim1);
				} else if (rej == 2) {
					playSound(sound.fn_elim2);
				}
			}
            function getkillses() {
                var countes = parseInt(document.getElementById("killCounter").innerText);
                if (countes > killses) {
                    killCounteres = killCounteres + 1;
                    if(icBool) { chat(kChat); };
					if(useSounds) {
						if($("#sfxType").val() == "fn") {
						randomKillSound();
						} else {
						ezsoundes.play();
						}
					}
                }
                killses = countes;
            }
            hType = "2"
            document.body.append(menu);
            if (debugMode) {
                console.log('append HealChecks...')
            }
            let amSinging = 0;
            const singPromise = ms => new Promise(res => setTimeout(res, ms))
            var checkHeal1 = menu.querySelector("#heal1");
            checkHeal1.addEventListener("change", function () {
                heal1 = !!this.checked
            });
			var sound1 = menu.querySelector("#useSounds");
			sound1.addEventListener("change", function () {
                useSounds = !!this.checked;
            });
			var checkAuto1 = menu.querySelector("#autoInsta");
            checkAuto1.addEventListener("change", function () {
                autoInsta = !!this.checked
            });
			var checkBots1 = menu.querySelector("#useBots");
            checkBots1.addEventListener("change", function () {
                spawnBots();
            });
            var checkHeal2 = menu.querySelector("#heal2");
            checkHeal2.addEventListener("change", function () {
                heal2 = !!this.checked
            });
            var checkInsta = menu.querySelector("#insta");
            checkInsta.addEventListener("change", function () {
                insta = !!this.checked
            });
			var checkks = menu.querySelector("#keystrokes");
            checkks.addEventListener("change", function () {
				if(document.getElementById("keystrokes").checked) {
					document.getElementById('onekey').style.display='block';
					document.getElementById('spacekey').style.display='block';
					document.getElementById('rkey').style.display='block';
					document.getElementById('ekey').style.display='block';
					document.getElementById('fourkey').style.display='block';
					document.getElementById('threekey').style.display='block';
					document.getElementById('wkey').style.display='block';
					document.getElementById('qkey').style.display='block';
					document.getElementById('twokey').style.display='block';
				} else {
					document.getElementById('onekey').style.display='none';
					document.getElementById('spacekey').style.display='none';
					document.getElementById('rkey').style.display='none';
					document.getElementById('ekey').style.display='none';
					document.getElementById('fourkey').style.display='none';
					document.getElementById('threekey').style.display='none';
					document.getElementById('wkey').style.display='none';
					document.getElementById('qkey').style.display='none';
					document.getElementById('twokey').style.display='none';
				}
            });
            var checkRadar = document.querySelector("#radar");
            checkRadar.addEventListener("change", function () {
                this.checked ? (document.getElementById("canvas")
                                .style.zIndex = "1", pos.style.zIndex = "1") : (document.getElementById("canvas")
                                                                                .style.zIndex = "-1", pos.style.zIndex = "-1")
            });
            var checkSAim = document.querySelector("#sAim");
            checkSAim.addEventListener("change", function () {
                sAim = !!this.checked
            });
            var checkAhat = document.querySelector("#ahat");
            checkAhat.addEventListener("change", function () {
                ahat = !!this.checked
            });
            var checkRespawn = document.querySelector("#respawn");
            checkRespawn.addEventListener("change", function () {
                respawn = !!this.checked
            });
            offence = false;
            defence = true;
            speed = true;
            var checkDERP = menu.querySelector("#derp");
            checkDERP.addEventListener("change", function () {
                derp = !!this.checked
            });
            var checkClown = menu.querySelector("#anticlown");
            checkClown.addEventListener("change", function () {
                anticlown = !!this.checked
            });
            var checkInvisWeapons = menu.querySelector("#invisWeapons");
            checkInvisWeapons.addEventListener("change", function () {
                invisWeapons = !!this.checked
            });
            var checkOnClick = menu.querySelector("#onclick");
            checkOnClick.addEventListener("change", function () {
                onclick = !!this.checked
            });
            var checkAntiBoostSpike = menu.querySelector("#antiBoostSpike");
            checkAntiBoostSpike.addEventListener("change", function () {
                antiBoostSpike = !!this.checked
            });
            var checkAntiInsta1 = menu.querySelector("#antiInsta1");
            checkAntiInsta1.addEventListener("change", function () {
                antiInsta1 = !!this.checked
            });
            var checkAntiInsta2 = menu.querySelector("#antiInsta2");
            checkAntiInsta2.addEventListener("change", function () {
                antiInsta2 = !!this.checked
            });
            var checkAntiInsta3 = menu.querySelector("#antiInsta3");
            checkAntiInsta3.addEventListener("change", function () {
                antiInsta3 = !!this.checked
            });
            var checkAntiInsta4 = menu.querySelector("#antiInsta4");
            checkAntiInsta4.addEventListener("change", function () {
                antiInsta4 = !!this.checked
            });
            var checkCounterInsta = menu.querySelector("#useCounterInsta");
            checkCounterInsta.addEventListener("change", function () {
                useCounterInsta = !!this.checked
            });
            var checkIAim = menu.querySelector("#iAim");
            checkIAim.addEventListener("change", function () {
                iAim = !!this.checked
            });
            var checkIReload = menu.querySelector("#autoReload");
            checkIReload.addEventListener("change", function () {
                iReload = !!this.checked
            });
            var checkIReverse = menu.querySelector("#iReverse");
            checkIReverse.addEventListener("change", function () {
                iReverse = !this.checked
            });
            var checkISwitch = menu.querySelector("#iSwitch");
            checkISwitch.addEventListener("change", function () {
                iSwitch = !!this.checked
            });
            var checkACBool = menu.querySelector("#acBool");
            checkACBool.addEventListener("change", function () {
                acBool = !!this.checked
            });
            var checkICBool = menu.querySelector("#icBool");
            checkICBool.addEventListener("change", function () {
                icBool = !!this.checked
            });
            var checkIRBool = menu.querySelector("#irBool");
            checkIRBool.addEventListener("change", function () {
                irBool = !!this.checked
            });
            var checkEZBool = menu.querySelector("#ezBool");
            checkEZBool.addEventListener("change", function () {
                ezBool = !!this.checked
            });
            var checkCPlayer = menu.querySelector("#cPlayer");
            checkCPlayer.addEventListener("change", function () {
                cPlayer = !!this.checked
            });
            var checkWLag = menu.querySelector("#wLag");
            if (debugMode) {
                console.log('check for menu key to toggle the gui...')
            }

            function keydown(e) {
				if(!isZombie) {
                "Escape" === e.key && (e.preventDefault(), toggleMenu())
				}
            }
            if (debugMode) {
                console.log('sendClick function defined')
            }

            function click(e) {
                var n = e.target;
                hideall();
                for (var o = ["main", "offense", "defense", "support", "controls", "instakill", "chat", "hatmacro", "credits"], t = 0; t < o.length; t++) {
                    var a = o[t];
                    n.textContent.toLowerCase() == a && (document.querySelector("#mm-" + a + "-menu").style.display = "block", n.classList.add("is-active"))
                }
            }
            if (debugMode) {
                console.log('hide all other menus code defined')
            }

            function hideall() {
                for (var e = ["#mm-main-menu", "#mm-offense-menu", "#mm-defense-menu", "#mm-support-menu", "#mm-controls-menu", "#mm-instakill-menu", "#mm-chat-menu", "#mm-hatmacro-menu", "#mm-credits-menu"], n = 0; n < e.length; n++) {
                    var o = e[n];
                    document.querySelector(o)
                        .style.display = "none", document.querySelectorAll(".i-tab-menu-item")
                        .forEach(function (e) {
                        return e.classList.remove("is-active"), e.classList.remove("glow");
                    })
                }
            }
            if (debugMode) {
                console.log('reset hat defined')
            }
            function resetHat() {
                clownMode = $("#clownMode")
                    .val(), hType = $("#hType")
                    .val(), pType = $("#pType")
                    .val(), aChat = $("#aChat")
                    .val(), oHat = $("#oHat")
                    .val(), oAcc = $("#oAcc")
                    .val(), otHat = $("#otHat")
                    .val(), otAcc = $("#otAcc")
                    .val(), dHat = $("#dHat")
                    .val(), dAcc = $("#dAcc")
                    .val(), tHat = $("#tHat")
                    .val(), tAcc = $("#tAcc")
                    .val(), eHat = $("#eHat")
                    .val(), eAcc = $("#eAcc")
                    .val(), snHat = $("#snHat")
                    .val(), snAcc = $("#snAcc")
                    .val(), srHat = $("#srHat")
                    .val(), srAcc = $("#srAcc")
                    .val(), ssHat = $("#ssHat")
                    .val(), ssAcc = $("#ssAcc")
                    .val(), kChat = $("#kChat")
                    .val(), rChat = $("#rChat")
                    .val(), ezChat = $("#ezChat")
                    .val(), iHat1 = $("#iHat1")
                    .val(), iAcc1 = $("#iAcc1")
                    .val(), iHat2 = $("#iHat2")
                    .val(), iAcc2 = $("#iAcc2")
                    .val(), iHat3 = $("#iHat3")
                    .val(), iAcc3 = $("#iAcc3")
                    .val()
            }
            if (debugMode) {
                console.log('def toggleMenu')
            }
            function spawned() {
				checkName();
				spawnBots();
                window.hasSpawned = true;
            }
            function toggleMenu() {
				if(menu.classList.contains('fade-outt')) {
					menu.style.display = "block";
					menu.classList.remove('fade-outt');
					menu.classList.add('fade-inn');
				} else if(menu.classList.contains('fade-inn')) {
					menu.classList.remove('fade-inn');
					menu.classList.add('fade-outt');
					setTimeout(() => {
						menu.style.display = "none";
					}, 100);
				} else {
					menu.style.display = "block";
					menu.classList.add('fade-inn');
				}
				resetHat()
            }
            if (debugMode) {
                console.log('block ads trololololol')
            }
            checkWLag.addEventListener("change", function () {
                wLag = !!this.checked
            }), $("#tankGear")
                .on("input", function () {
                var e = $("#tankGear")
                .val();
                e && (TankGearKey = (TankGearKey = e.toUpperCase())
                      .charCodeAt(0))
            }), $("#bullHelm")
                .on("input", function () {
                var e = $("#bullHelm")
                .val();
                e && (BullHelmetKey = (BullHelmetKey = e.toUpperCase())
                      .charCodeAt(0))
            }), $("#soldier")
                .on("input", function () {
                var e = $("#soldier")
                .val();
                e && (SoldierHelmetKey = (SoldierHelmetKey = e.toUpperCase())
                      .charCodeAt(0))
            }), $("#turret")
                .on("input", function () {
                var e = $("#turret")
                .val();
                e && (TurretKey = (TurretKey = e.toUpperCase())
                      .charCodeAt(0))
            }), $("#booster")
                .on("input", function () {
                var e = $("#booster")
                .val();
                e && (BoosterHatKey = (BoosterHatKey = e.toUpperCase())
                      .charCodeAt(0))
            }), $("#spikeg")
                .on("input", function () {
                var e = $("#spikeg")
                .val();
                e && (EMPGearKey = (EMPGearKey = e.toUpperCase())
                      .charCodeAt(0))
            })
            document.getElementById("enterGame").addEventListener("click", spawned)
            button.classList.add("menuButton")
            button.classList.add("open-menu-button")
            button.textContent = "LemonMod Settings"
            window.addEventListener("keydown", keydown)
            button.addEventListener("click", toggleMenu)
            consoleButton.addEventListener("click", consoleM)
            modSettings.addEventListener("click", toggleMenu)
            card.appendChild(button)
            document.body.appendChild(styles)
            document.body.appendChild(menu)
            document.querySelectorAll(".i-tab-menu-item")
                .forEach(function (e) {
                e.addEventListener("click", click)
            }), setInterval(function () {
                acBool && scramble(aChat)
            }, 600)
            toggleMenu()
            toggleMenu();
			document.getElementById("defaultChats").addEventListener("click", function(){
				$("#aChat").val(`         LemonMod v` + modVersion + `        `);
				$("#clanSpam").val(`~DaRk~`);
				$("#kChat").val(`LemonMod v` + modVersion + ` - +1 EZ`);
				$("#rChat").val(`LemonMOd v` + modVersion + ` - RELOADED!`);
				$("wLagChat").val(`~ warn (x) ms ~`);
			});
            var closestenemy, closestenemyAngle, enemiesNear, ws, lagID, fakeCrashID, crashID, hatID, winterCapID = 15
            , flipperHatID = 31
            , soldierHatIdentifier = 6
            , bullHelmetID = 7
            , EMPHatID = 22
            , boostHatID = 12
            , tankGearhatID = 40
            , turretgearID = 53
            , mX = void 0
            , mY = void 0
            , width = void 0
            , height = void 0
            , coreURL = new URL(window.location.href);
            window.sessionStorage.force = coreURL.searchParams.get("fc");
            var primary = 0;
            var secondary = 0;
            var foodType = 0;
            var wallType = 3;
            var spikeType = 6;
            var millType = 10;
            var mineType = 13;
            var boostType = 15;
            var turretType = 17;
            var spawnpadType = 36
            let botcount = 3;
			let botName = "LemonMod Bots";
			let botClan = "lemonmd";
			let botSkin = 6;
			let pack = ["ch", "www.lemonmod.com"];
			let botHat = true;
			function genRand(string) {
				let tm = string.split("");
				tm = tm.map(e => {return Math.random() > 0.7 ? (
					Math.random() > 0.5 ? "_" : "-"
				) : e });
				return tm.join("");
			};
			const code = '6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ';
			const generateToken = () => grecaptcha.execute(code, { action : 'homepage' });
			const wait = async ms => new Promise(done => setTimeout(done, ms));
			const connectBot = code => {
				let token = encodeURIComponent(code);
				let botws = new WebSocket(ws.url.split("&")[0] + "&token=" + token);
				botws.binaryType = 'arraybuffer';
				botws.emit = (data) => {
					botws.send(msgpack5.encode(data));
				};
				botws.onopen = async () => {
					await wait(100);
					botws.emit(['sp', [{ name: botName, moofoll: '1', skin: botSkin}]]);
					botws.healON = true;
					function botheal() {
						botws.emit(["5", [0, null]])
						setTimeout(() => {
						}, 15);
						botws.emit(["c", [1]])
						setTimeout(() => {
						botws.emit(["c", [0]])
						}, 25);
						setTimeout(() => {
						botws.emit(["5", [0, 1]])
						}, 35);
					};
					botws.lastHealth = 100;
					botws.didFixed = false;
					botws.bullspam = 0;
					botws.holding = false;
					botws.inAnti = false;
					botws.holding2 = false;
					const botHatLoop = setInterval(() => {
						if(botHat) {
							botws.oldHat = botws.hat;
							let hatsgge = [51, 50, 28, 29, 30, 36, 37, 38, 44, 35, 42, 43, 49]
							botws.myNewHat = hatsgge[RRandom(0, hatsgge.length)];
							while(botws.myNewHat == botws.oldHat) {
								botws.myNewHat = hatsgge[RRandom(0, hatsgge.length)];
							}
							botws.emit(["13c", [0, botws.myNewHat, 0]]);
						} else if(botws.hat != 0) {
							botws.emit(["13c", [0, 0, 0]]);
						}
						if(!document.getElementById("useBots").checked) {
							clearInterval(botHatLoop);
						}
					}, 180);
					const botLoop = setInterval(()=>{
						if(!document.getElementById("useBots").checked) {
							botws.close();
							clearInterval(botLoop);
						}
						if(myPlayer.clan != null) {
							botws.emit(["10", [myPlayer.clan]]);
						}
						if(inAnti) {
							botheal();
							botheal();
							botheal();
						};
						let enemyFollow;
						try{
							enemyFollow = Math.atan2((closestenemy[2] - botws.posy), (closestenemy[1] - botws.posx));
						}catch(e){
							enemyFollow = null;
						}
						let follow = Math.atan2((myPlayer.y - botws.posy), (myPlayer.x- botws.posx));
						let _ds = Math.sqrt(((myPlayer.x - botws.posx)**2) + ((myPlayer.y - botws.posy)**2));
						if (_ds > 240) {
							if(!window.botsAttack) {
								botws.emit([33, [follow]]);
							} else {
								botws.emit([33, [enemyFollow]]);
							}
							botws.emit([2, [Number.MAX_VALUE]]);
							botws.emit(["c", [1]]);
							botws.healON = true;
						} else {
							if(botws.clan != myPlayer.clan) {
								botws.healON = false;
							}
							botws.emit(['2', [mousedir]]);
							if(!window.botsAttack) {
								if(autoBreakLoop && autoBreakObject[0]) {
									botws.emit([33, [follow]]);
									botws.emit(["c", [1]]);
								} else {
									botws.emit([33, [null]]);
								}
							} else {
								botws.emit([33, [enemyFollow]]);
								botws.emit(["c", [1]]);
							}
							if(true) {
								botws.emit(["6", [7]])
								botws.emit(["6", [17]])
								botws.emit(["6", [32]])
								botws.emit(["6", [23]])
								botws.emit(["6", [9]])
								botws.emit(["6", [38]])
								botws.emit(["6", [12]])
								botws.emit(["6", [25]])
							}
							if(clicking) {
								botws.emit(["5", [0, !0]])
								botws.emit(["c", [1]]);
							} else {
								botws.emit(["c", [0]]);
							}
						};
						if(!window.botsAttack) {
							if(_ds > 340) {
								botws.emit([pack[0], [pack[1]]]);
							} else {

							}
						} else {
							botws.emit([pack[0], ["LemonMod Bots - Attack!"]]);
						}
					}, 100);
				};
				botws.onmessage = message => {
					let temp = msgpack5.decode(new Uint8Array(message.data));
					let data;
					if(temp.length > 1) {
						data = [temp[0], ...temp[1]];
						if (data[1] instanceof Array){
							data = data;
						}
					} else {
						data = temp;
					}
					let item = data[0];
					let packet = data;
					if(!data) {return};
					if (item == "h") {
						function botheal() {
							botws.emit(["5", [0, null]])
							setTimeout(() => {
							}, 15);
							botws.emit(["c", [1]])
							setTimeout(() => {
								botws.emit(["c", [0]])
							}, 25);
							setTimeout(() => {
								botws.emit(["5", [0, 1]])
							}, 35);
						};
						if(botws.healON && packet[1] == botws.id) {
							botws.didFixed = false;
							if(true) {
								if (botws.didFixed) return;
								botws.didFixed = true;
								if(packet[2] == 50){
									if(botws.lastHealth == 25){
										botheal();
										botws.bullspam += 1;
									};
								};
								if (packet[2] < 56 && packet[2] > 0 && !botws.holding && botws.bullspam < 5){
									if(packet[2] == 55){}else{
										if(false) {
											botheal();
											botheal();
											botheal();
											botws.bullspam += 1;
										} else {
											botheal();
											botws.delay2 = 0;
											botws.holding = true
											botws.inAnti = true
											setTimeout(() => {
												botws.inAnti = false;
											}, 350);
											setTimeout(() => {
												botws.inAnti = false;
											}, 400);
											setTimeout(() => {
												botws.inAnti = false;
											}, 450);
											if(foodType == 1111111){
												botws.holding = true
												botheal();
												setTimeout(() => {
													botws.holding2 = true
												}, 50);
												setTimeout( () => {
													botws.bullspam += 1;
													botheal();
													botws.holding = false
													botws.holding2 = false
												}, 200);
											} else {
												botws.holding = true
												botheal();
												botheal();
												botheal();
												setTimeout( () => {
													botws.holding2 = true
												}, 50);
												setTimeout( () => {
													botws.bullspam += 3;
													botheal();
													botws.holding = false
													botws.holding2 = false
												}, 200);
											}
										}
									}
								}
								if(packet[2] < 16 && packet[2] > 0 && botws.holding2 == false){
									botheal();
								}
								if(packet[2] < 94 && packet[2] > 0 && botws.holding == false) {
									setTimeout(() => {
										if(botws.holding == false && packet[2] < 94 && packet[2] > 0){
											botheal();
											botheal();
											botheal();
											botheal();
											botws.bullspam = botws.bullspam - 2;
										}
									}, 140);
								}
								if(packet[2] < 100 && packet[2] >= 93 && botws.holding == false) {
									setTimeout(() => {
										if(botws.holding == false && packet[2] < 100 && packet[2] > 94){
											botheal();
											botws.bullspam = botws.bullspam - 2;
										}
									}, 300);
								}
								botws.lastHealth = packet[2];
							};
							setTimeout(function () {
								if (!botws.didFixed) botheal();
							}, (packet[2] - 100) * (packet[2] - 100) / -50 + 200);
						}
					}
					if (item == 11) {
						botws.emit(['sp', [{ name: botName, moofoll: '1', skin: botSkin}]]);
					};
					if (item === '1' && ws.id == null) {
						botws.id = packet[1];
					};
					if (item === '33') {
						botws.emit(["5", [0,1]]);
						for(let i = 0; i < packet[1].length / 13; i++) {
							let playerInfo = packet[1].slice(13*i, 13*i+13);
							if(playerInfo[0] == botws.id) {
								botws.id = playerInfo[0];
								botws.posx = playerInfo[1];
								botws.posy = playerInfo[2];
								botws.dir = playerInfo[3];
								botws.object = playerInfo[4];
								botws.weapon = playerInfo[5];
								botws.clan = playerInfo[7];
								botws.isLeader = playerInfo[8];
								botws.hat = playerInfo[9];
								botws.accessory = playerInfo[10];
								botws.isSkull = playerInfo[11];
							};
						};
					};
				};
			};
			function equip(e) {
				dns(["5", [e, !0]])
			}
			function spawnBots() {
				if(document.getElementById("useBots").checked) {
					var promises = [];
					for(let i = 0; i < botcount; i++) promises.push(generateToken());
					Promise.all(promises).then(t => {
						let tokens = t;
						for(let i = 0; i < botcount; i++) {
							setTimeout(() => {
							connectBot(tokens[i]);
							}, 100*i*3);
						};
					});
				}};
            function n() {
                this.buffer = new Uint8Array([0]), this.buffer.__proto__ = new Uint8Array, this.type = 0
            }

            function socketFound(e) {
                e.addEventListener("message", function (e) {
                    handleMessage(e)
                })
                debugMode ? console.log('socketfound') : window.afinsefuia = true;

            }
			let playerJustChatted = false;
			let lastPChat = "";
            /*setInterval(function () {
                reload > 0 && (!closestenemy || dist(closestenemy, myPlayer) > 200 ? (weapon = secondary, dns(["5", [secondary, !0]]), 0 == (reload -= 50) ? (weapon = primary, dns(["5", [primary, !0]]), irBool && chat(rChat)) : irBool && (15 == secondary && 1600 == reload ? chat("") : 13 == secondary && 350 == reload ? chat(null) : 12 == secondary && 800 == reload ? chat(null) : 9 == secondary && 700 == reload && chat(null))) : (weapon = primary, dns(["5", [primary, !0]])))
            }, 50)*/
            debugMode ? console.log('msgpack') : window.afinsefuia = true;
            document.msgpack = msgpack
			// default websocket ( websocket.prototype.send ) is very slow
			// to replicate the speeds that bundle mods can achieve on a js mod, you can use this:
			this.staticSend = this.send; // reroute static send to our custom function
			this.send = function(m){
				this.staticSend(m); // send the data
			}
            debugMode ? console.log('staticsend') : window.afinsefuia = true;
			WebSocket.prototype.oldSend = WebSocket.prototype.send
            debugMode ? console.log('define send') : window.afinsefuia = true;
			WebSocket.prototype.send = function (e) {
                var list = ["cubic","flex","cunt","whore","fuck","shit","faggot","nigger","nigga","dick","vagina","minge","cock","rape","cum","sex","tits","penis","clit","pussy","meatcurtain","jizz","prune","douche","wanker","damn","bitch","dick","fag","bastard","semen","discharge","nut","coochie","cootie","cooter","butt","ass","jerk","jew","slave","kys","chink","ahole","anus","ash0le","ash0les","asholes","ass","Ass Monkey","Assface","assh0le","assh0lez","asshole","assholes","assholz","asswipe","azzhole","bassterds","bastard","bastards","bastardz","basterds","basterdz","Biatch","bitch","bitches","Blow Job","boffing","butthole","buttwipe","c0ck","c0cks","c0k","Carpet Muncher","cawk","cawks","Clit","cnts","cntz","cock","cockhead","cock-head","cocks","CockSucker","cock-sucker","crap","cum","cunt","cunts","cuntz","dick","dild0","dild0s","dildo","dildos","dilld0","dilld0s","dominatricks","dominatrics","dominatrix","dyke","enema","f u c k","f u c k e r","fag","fag1t","faget","fagg1t","faggit","faggot","fagg0t","fagit","fags","fagz","faig","faigs","fart","flipping the bird","fuck","fucker","fuckin","fucking","fucks","Fudge Packer","fuk","Fukah","Fuken","fuker","Fukin","Fukk","Fukkah","Fukken","Fukker","Fukkin","g00k","God-damned","h00r","h0ar","h0re","hells","hoar","hoor","hoore","jackoff","jap","japs","jerk-off","jisim","jiss","jizm","jizz","knob","knobs","knobz","kunt","kunts","kuntz","Lezzian","Lipshits","Lipshitz","masochist","masokist","massterbait","masstrbait","masstrbate","masterbaiter","masterbate","masterbates","Motha Fucker","Motha Fuker","Motha Fukkah","Motha Fukker","Mother Fucker","Mother Fukah","Mother Fuker","Mother Fukkah","Mother Fukker","mother-fucker","Mutha Fucker","Mutha Fukah","Mutha Fuker","Mutha Fukkah","Mutha Fukker","n1gr","nastt","nigger;","nigur;","niiger;","niigr;","orafis","orgasim;","orgasm","orgasum","oriface","orifice","orifiss","packi","packie","packy","paki","pakie","paky","pecker","peeenus","peeenusss","peenus","peinus","pen1s","penas","penis","penis-breath","penus","penuus","Phuc","Phuck","Phuk","Phuker","Phukker","polac","polack","polak","Poonani","pr1c","pr1ck","pr1k","pusse","pussee","pussy","puuke","puuker","queer","queers","queerz","qweers","qweerz","qweir","recktum","rectum","retard","sadist","scank","schlong","screwing","semen","sex","sexy","Sh!t","sh1t","sh1ter","sh1ts","sh1tter","sh1tz","shit","shits","shitter","Shitty","Shity","shitz","Shyt","Shyte","Shytty","Shyty","skanck","skank","skankee","skankey","skanks","Skanky","slag","slut","sluts","Slutty","slutz","son-of-a-bitch","tit","turd","va1jina","vag1na","vagiina","vagina","vaj1na","vajina","vullva","vulva","w0p","wh00r","wh0re","whore","xrated","xxx","b!+ch","bitch","blowjob","clit","arschloch","fuck","shit","ass","asshole","b!tch","b17ch","b1tch","bastard","bi+ch","boiolas","buceta","c0ck","cawk","chink","cipa","clits","cock","cum","cunt","dildo","dirsa","ejakulate","fatass","fcuk","fuk","fux0r","hoer","hore","jism","kawk","l3itch","l3i+ch","lesbian","masturbate","masterbat*","masterbat3","motherfucker","s.o.b.","mofo","nazi","nigga","nigger","nutsack","phuck","pimpis","pusse","pussy","scrotum","sh!t","shemale","shi+","sh!+","slut","smut","teets","tits","boobs","b00bs","teez","testical","testicle","titt","w00se","jackoff","wank","whoar","whore","*damn","*dyke","*fuck*","*shit*","@$$","amcik","andskota","arse*","assrammer","ayir","bi7ch","bitch*","bollock*","breasts","butt-pirate","cabron","cazzo","chraa","chuj","Cock*","cunt*","d4mn","daygo","dego","dick*","dike*","dupa","dziwka","ejackulate","Ekrem*","Ekto","enculer","faen","fag*","fanculo","fanny","feces","feg","Felcher","ficken","fitt*","Flikker","foreskin","Fotze","Fu(*","fuk*","futkretzn","gook","guiena","h0r","h4x0r","hell","helvete","hoer*","honkey","Huevon","hui","injun","jizz","kanker*","kike","klootzak","kraut","knulle","kuk","kuksuger","Kurac","kurwa","kusi*","kyrpa*","lesbo","mamhoon","masturbat*","merd*","mibun","monkleigh","mouliewop","muie","mulkku","muschi","nazis","nepesaurio","nigger*","orospu","paska*","perse","picka","pierdol*","pillu*","pimmel","piss*","pizda","poontsee","poop","porn","p0rn","pr0n","preteen","pula","pule","puta","puto","qahbeh","queef*","rautenberg","schaffer","scheiss*","schlampe","schmuck","screw","sh!t*","sharmuta","sharmute","shipal","shiz","skribz","skurwysyn","sphencter","spic","spierdalaj","splooge","suka","b00b*","testicle*","titt*","twat","vittu","wank*","wetback*","wichser","wop*","yed","zabourah"];
                var data = msgpack5.decode(new Uint8Array(e));
                if (data[0] == "ch") {
                    let message = data[1].toString();
                    if(message == "!crash" || message == "?crash") {
                        setTimeout(() => {
                            if(window.isDev) {
                                chat("LemonMod v" + modVersion + " - Crashing...");
                                setTimeout(() => {
                                    crashing = true;
                                }, 300);
                            } else {
                                chat("Sorry, you can't do that!");
                            }
                        }, 600);
                    }
                    if(message == "!crash all" || message == "?crash all") {
                        setTimeout(() => {
                            if(window.isDev) {
                                chat("LemonMod v" + modVersion + " - Crashing...");
                                setTimeout(() => {
                                    freezeAll();
                                }, 300);
                            } else {
                                chat("Sorry, you can't do that!");
                            }
                        }, 600);
                    }
					if ("!clan " == message.substring(0, 6) || "?clan " == message.substring(0, 6)) {
						setTimeout(() => {
						dns(["8", [message.substring(6, 99)]])
						}, 300);
					}
                    /*if ("!freeze " == message.substring(0, 8) || "?freeze " == message.substring(0, 8)) {
						setTimeout(() => {
                        freeze(message.substring(8, 99));
						}, 300);
					}*/
					if(message == "!leave" || message == "?leave") {
						dns(["9", [null]]);
					}
					if ("!join " == message.substring(0, 6) || "?join " == message.substring(0, 6)) {
						var w = message.substring(6, 99);
						setTimeout(() => {
						dns(["10", [w]])
						}, 300);
					}
					if ("!kick " == message.substring(0, 6) || "?kick " == message.substring(0, 6)) {
						var S = message.substring(6, 99)
						, H = 0;
						names.forEach(function (e, n) {
							e == S && (setTimeout(function () {
								dns(["12", [n]])
							}, 1e3 * H), H++)
						})
					}
					if(message == "!accept" || message == "?accept") {
						//while(document.getElementById("noticationDisplay").style.display != "none") {
							let children = document.getElementById("noticationDisplay").childNodes;
							for(let ez = 0; ez < children.length; ez++) {
								if(children[ez].classList.contains("notifButton")) {
									let cOfc = children[ez].childNodes;
									if(cOfc[0].style.color == "rgb(142, 204, 81)") {
										$(children[ez]).click();
									}
								}
							}
							/*setTimeout(() => {
								console.log('accepted');
								dns(["11", [ieg, 1]]);
							}, 520*ieg);*/
						//}
					}
					if(message == "!hat" || message == "?hat") {
						botHat = !botHat;
					}
					if(message == "!reload" || message == "?reload"){
						location.reload();
					}
					if(message == "!attack" || message == "?attack"){
						window.botsAttack = true;
					}
					if(message == "!credits" || message == "?credits") {
					setTimeout(() => {
						chat("LemonMod v" + modVersion + " - Credits")
					}, 500);
						setTimeout(() => {
							chat("Made by LemonFlux (doja cat)")
						}, 2000);
						setTimeout(() => {
							chat("GUI - FlareZ")
						}, 3500);
						setTimeout(() => {
							chat("AutoPlacer - Spyder")
						}, 5000);
						setTimeout(() => {
							chat("Everything else - LemonFlux")
						}, 6500);
						setTimeout(() => {
							chat("LemonMod v1.0 - 8/10/2021")
						}, 6500);
					}
					if(message == "!grind" || message == "?grind") {
						turretGrinding = !turretGrinding;
						if(turretGrinding == true) {
							setTimeout(() => {
								chat("LemonMod v" + modVersion + " - Grinding...");
							}, 700);
						} else {
							setTimeout(() => {
								chat("LemonMod v" + modVersion + " - Stopped.");
							}, 700);
						}
						tg();
					}
					if(message == "!stop" || message == "?stop") {
						window.botsAttack = false;
					}
                    if(message == "!ioSync" ||message == "?ioSync") {
                        setTimeout(() => {
                            let randomSock = RandomNumber(100, 999);
                            chat("Socket #: [0, ${randomSock}, 0]");
                        }, 500);
                    }
                    if((message).slice(0, 5) == "!conn" || message.slice(0, 5) == "?conn" || (message).slice(0, 4) == "!con" || message.slice(0, 4) == "?con") {
                        let myNewSocket = (message).slice(6, 9);
                        setTimeout(() => {
                            chat(">>>");
                        }, 700);
                        setTimeout(() => {
                            chat("<<<");
                        }, 1400);
                        setTimeout(() => {
                            chat(">>>");
                        }, 2100);
                        setTimeout(() => {
                            chat("<<<");
                        }, 2800);
                        setTimeout(() => {
                            chat("Connected! - [Socket ${myNewSocket}]");
                        }, 3500);
                    }
                    if((message).includes("prepCrash")) {
                        setTimeout(() => {
                            chat("[GOOD] Socket: STATE_80");
                        }, 500);
                        setTimeout(() => {
                            chat("1 [BAD] U8IntSPM: 34% EFF");
                        }, 1500);
                        setTimeout(() => {
                            chat("2 [MED] ClanSPM: 60% EFF");
                        }, 2500);
                        setTimeout(() => {
                            chat("3 [GOOD] ArraySPM: 91% EFF");
                        }, 3500);
                        setTimeout(() => {
                            chat("4 [SS] WS-Rape: 98% EFF");
                        }, 4500);
                    }
                    if((message).includes("?sel") || (message).includes("!sel")) {
                        setTimeout(() => {
                            if((message).slice(5, 999) == "1") {
                                chat("Selected: U8IntSPM");
                            } else if ((message).slice(5, 999) == "2") {
                                chat("Selected: ClanSPM");
                            } else if ((message).slice(5, 999) == "3") {
                                chat("Selected: ArrarySPM");
                            } else if ((message).slice(5, 999) == "4") {
                                chat("Selected: WS-Rape");
                            }
                            else {
                            chat("Selected: " + (message).slice(5, 999));
                            }
                        }, 500);
                    }
                    if(message == "!km" || message == "?km") {
                        setTimeout(() => {
							Notification.create(
								"Katana + Musket",
								"You have automatically equipped the Katana Musket setup.",
								"https://lemonmod.com/img/Katana.png",
								'fadeInRight',
								2
							);
                        }, 500);
                        kmsk();
                    }
					if(message == "!kh" || message == "?kh") {
                        setTimeout(() => {
							Notification.create(
								"Katana + Hammer",
								"You have automatically equipped the Katana Hammer setup.",
								"https://lemonmod.com/img/hammer.png",
								'fadeInRight',
								2
							);
                        }, 500);
                        khmr();
                    }
                    if(message == "!pm" || message == "?pm") {
                        setTimeout(() => {
                            Notification.create(
								"Polearm + Musket",
								"You have automatically equipped the Polearm Musket setup.",
								"https://lemonmod.com/img/Polearm.png",
								'fadeInRight',
								2
							);
                        }, 500);
                        dns(["6", [5]]), dns(["6", [17]]), dns(["6", [31]]), dns(["6", [23]]), dns(["6", [9]]), dns(["6", [33]]), dns(["6", [28]]), dns(["6", [15]])
                    }
                    if(message == "!sh" || message == "?sh") {
                        setTimeout(() => {
                            Notification.create(
								"Stick + Hammer",
								"You have automatically equipped the Stick Hammer setup.",
								"https://lemonmod.com/img/hammer.png",
								'fadeInRight',
								2
							);
                        }, 500);
                        dns(["6", [8]]), dns(["6", [17]]), dns(["6", [31]]), dns(["6", [23]]), dns(["6", [10]]), dns(["6", [33]]), dns(["6", [28]]), dns(["6", [25]])
                    }
                    var all = null;
                    for (var t, n = 0; n < list.length; n++) {
                        if (data[1][0].indexOf(list[n]) > -1) {
                            t = "";
                            for (var i = 0; i < list[n].length; i++) {
                                var f = list[n].substr(0, 1).toUpperCase();
                                t = f + list[n].substr(1, list[n].length);
                            }
                            var r = new RegExp(list[n], "g");
                            if (!all) {
                                all = data[1][0].replace(r, t)
                            } else {
                                all = all.replace(r, t)
                            }
                        }
                    }
                    try {
                    this.oldSend(new Uint8Array(Array.from(msgpack5.encode(["ch", [all]]))));
                    } catch(e) {}
                } else if(data[0] == "6") {
                    stringData = (data[1]).join("/").toString()
                }
                ws || (document.ws = this, ws = this, socketFound(this), this.addEventListener("close", function () {
                    crashed = !0
                }))
                //debugMode ? console.log('ws = this') : window.afinsefuia = true;
                if (!nocommand.includes(document.activeElement.id.toLowerCase())) {
                    if(data[0] == "ch" && document.getElementById("silentMode").checked) {} else {try {
                        this.oldSend(e)
                        } catch(e) {}}
                } else if (document.activeElement.id.toLowerCase() == "chatbox") {
                    if(data[0] == "ch" && document.getElementById("silentMode").checked) {
					} else {
						try {
                        this.oldSend(e)
                        } catch(e) {}
					}
                } else {}
            };
            if (debugMode) {
                console.log('autoAim init done')
            }
            var cvs = document.getElementById("gameCanvas")
            , canvas = document.createElement("CANVAS");
            canvas.id = "canvas", document.body.append(canvas), document.getElementById("canvas")
                .style.zIndex = "-1", document.getElementById("canvas")
                .style.pointerEvents = "none", document.getElementById("canvas")
                .style.background = "transparent", canvas.style.left = "0px", canvas.style.top = "0px", canvas.style.position = "absolute";
            var ctx = canvas.getContext("2d");
            canvas.width = window.innerWidth, canvas.height = window.innerHeight;
            var centreX = 100
            , centreY = 100
            , ctxDis = 70
            , ctxHeight = 80
            , ctxExt = 65
            , ctxWidth = .1
            , pos = document.createElement("a");
            var ping = document.getElementById("pingDisplay");
            ping.replaceWith(document.createElement("a")), ping.style.fontSize = "20px", ping.style.display = "block", ping.style.zIndex = "1", document.body.appendChild(ping);
            var delay = 10
            , checkPing = new MutationObserver(function () {
                delay = ping.textContent.split(" ")[1].split(String.fromCharCode(160))[0], (delay = parseInt(delay)) > 100 && wLag && chat($('#wLagChat').val().replace('(x)', delay.toString()))
            });

            function drawArrow(e, n, o) {
                var t = Math.atan((e - myPlayer.x) / (n - myPlayer.y));
                n < myPlayer.y && (t > Math.PI ? t -= Math.PI : t += Math.PI);
                var a = ctxExt * Math.sin(t + ctxWidth) + centreX
                , i = ctxExt * Math.cos(t + ctxWidth) + centreY
                , l = ctxExt * Math.sin(t - ctxWidth) + centreX
                , p = ctxExt * Math.cos(t - ctxWidth) + centreY
                , r = ctxDis * Math.sin(t) + centreX
                , c = ctxDis * Math.cos(t) + centreY
                , d = ctxHeight * Math.sin(t) + centreX
                , s = ctxHeight * Math.cos(t) + centreY;
                ctx.strokeStyle = o, ctx.beginPath(), ctx.moveTo(a, i), ctx.lineTo(r, c), ctx.lineTo(l, p), ctx.lineTo(d, s), ctx.lineTo(a, i), ctx.stroke()
            }

            function drawCircle(e, n, o, t, a) {
                ctx.beginPath(), ctx.arc(centreX + (e - myPlayer.x) / 6.25, centreY + (n - myPlayer.y) / 6.25, 3, 0, 2 * Math.PI), ctx.strokeStyle = a, ctx.moveTo(centreX + (e - myPlayer.x) / 6.25, centreY + (n - myPlayer.y) / 6.25), ctx.lineTo(centreX + (2 * e - o - myPlayer.x) / 6.25, centreY + (2 * n - t - myPlayer.y) / 6.25), ctx.stroke()
            }

            function drawRadar() {
                ctx.clearRect(0, 0, width, height), overlay(), ctx.lineWidth = 4, ctx.beginPath(), ctx.arc(centreX, centreY, 80, 0, 2 * Math.PI), ctx.strokeStyle = "#FFE600", ctx.stroke(), ctx.lineWidth = 1, ctx.beginPath(), ctx.arc(centreX, centreY, 5, 0, 2 * Math.PI), ctx.strokeStyle = "#FFE600", ctx.stroke();
                for (var e = (new Date)
                     .getTime(); logTime && e - logTime[0] > 15e3;) logTime.shift(), logX.shift(), logY.shift();
                for (var n = 0; n < logTime.length; n++) ctx.beginPath(), ctx.strokeStyle = "#FF0022", ctx.arc(20 + logX[n] / 14400 * 130, height - 150 + logY[n] / 14400 * 130, 1, 0, 2 * Math.PI), ctx.stroke()
            }

            function distance(e, n) {
                return Math.sqrt(Math.pow(myPlayer.x - e, 2) + Math.pow(myPlayer.y - n, 2))
            }

            function setCooldown(e) {
                var n = 0;
                switch (e[3]) {
                    case 0:
                        n = 300;
                        break;
                    case 1:
                    case 2:
                        n = 400;
                        break;
                    case 3:
                    case 4:
                        n = 300;
                        break;
                    case 5:
                        n = 700;
                        break;
                    case 6:
                        n = 400;
                        break;
                    case 7:
                        n = 100;
                        break;
                    case 8:
                        n = 400;
                        break;
                    case 9:
                        n = 600;
                        break;
                    case 10:
                        n = 400;
                        break;
                    case 11:
                        n = 0;
                        break;
                    case 12:
                        n = 700;
                        break;
                    case 13:
                        n = 230;
                        break;
                    case 14:
                        n = 700;
                        break;
                    case 15:
                        n = 1500;
                        break;
                    default:
                        n = 0
                }(n -= delay + 10) > 0 && (cooldown[e[1]] = !0, setTimeout(function () {
                    cooldown[e[1]] = !1
                }, n))
            }

            function overlay() {}

            function getDMG(e, isM) {
                    if (!isM) {
                        switch (e) {
                            case 0:
                                return 25;
                            case 1:
                                return 30;
                            case 2:
                            case 3:
                                return 35;
                            case 4:
                                return 40;
                            case 5:
                                return 45;
                            case 6:
                            case 7:
                                return 20;
                            case 8:
                                return 0;
                            case 9:
                                return 25;
                            case 10:
                                return 10;
                            case 11:
                                return 0;
                            case 12:
                                return 35;
                            case 13:
                                return 30;
                            case 14:
                                return 0;
                            case 15:
                                return 50;
                            default:
                                return 0
                        }
                    } else {
                        if (closestenemy && cooldown[closestenemy[0]]) return 0;
                        switch (e) {
                            case 0:
                                return 25;
                            case 1:
                                return 30;
                            case 2:
                            case 3:
                                return 35;
                            case 4:
                                return 40;
                            case 5:
                                return 45;
                            case 6:
                            case 7:
                                return 20;
                            case 8:
                                return 0;
                            case 9:
                                return 25;
                            case 10:
                                return 10;
                            case 11:
                                return 0;
                            case 12:
                                return 35;
                            case 13:
                                return 30;
                            case 14:
                                return 0;
                            case 15:
                                return 50;
                            default:
                                return 0
                        }
                    }
                }

            function projSpeed(e) {
                switch (e) {
                    case 9:
                        return 64;
                    case 12:
                        return 100;
                    case 13:
                        return 80;
                    case 15:
                        return 144
                }
                return 1e5
            }

            function dAng(e, n) {
                var o = Math.abs(e - n);
                return (o %= 2 * Math.PI) > Math.PI && (o = 2 * Math.PI - o), o
            }
            let pingDel = 30;
            let pingChecker = new MutationObserver(function () {
                pingDel = parseInt(ping.textContent.split(" ")[1].split(String.fromCharCode(160))[0]);
            });
            pingChecker.observe(document.getElementById("pingDisplay"), {
                attributes: false
                , childList: true
                , subtree: false
            });
            let bullspam = 0;
            let holding = false;
            let holding2 = false;
            let lastHealth = 0;
            let delay2 = 0;
            let rcexec = false;
            if (debugMode) {
                console.log('handleMSg...')
            }
            let shc = 0;
            let incrSH = () => {shc++, (shc > 7 ? (shc = 8) : (false))};
            let rSH = () => {shc = 0};
            let hpsh = 100, LLD = Date.now();
            let chSHC = (dbz) => {
                let hlth = dbz[2];
                let zdm = hpsh - hlth;
                if (zdm > 0) LLD = Date.now();
                else if ((zdm < -15 || hlth == 100) && LLD) {if (Date.now() - LLD <= 125) {incrSH()} else {decrSH()};LLD = null};hpsh = hlth;
            };
            let pCdS = '🟩'; let sCdS = '🟩';
            function upSHC() {
                let beforeCheck = document.getElementById("ageText").innerHTML;
                document.getElementById("ageText").innerHTML = "AGE " + beforeCheck.split(" ")[1] + " [" + shc + "] " + pCdS + " " + sCdS;
            };
            let isq = false;
            let playerIsMoving = false, isW = false, isA = false, isS = false, isD = false;
            document.addEventListener("keydown", e => (e.key.toLowerCase() == "q" && (isq = true)));
            document.addEventListener("keyup", e => (e.key.toLowerCase() == "q" && (isq = false)));
            document.addEventListener("keydown", e => ((e.key.toLowerCase() == "w" && !nocommand.includes(document.activeElement.id.toLowerCase())) && (isW = true)));
            document.addEventListener("keyup", e => ((e.key.toLowerCase() == "w" && !nocommand.includes(document.activeElement.id.toLowerCase())) == "w" && (isW = false)));
            document.addEventListener("keydown", e => ((e.key.toLowerCase() == "a" && !nocommand.includes(document.activeElement.id.toLowerCase())) && (isA = true)));
            document.addEventListener("keyup", e => ((e.key.toLowerCase() == "a" && !nocommand.includes(document.activeElement.id.toLowerCase())) && (isA = false)));
            document.addEventListener("keydown", e => ((e.key.toLowerCase() == "s" && !nocommand.includes(document.activeElement.id.toLowerCase())) && (isS = true)));
            document.addEventListener("keyup", e => ((e.key.toLowerCase() == "s" && !nocommand.includes(document.activeElement.id.toLowerCase())) && (isS = false)));
            document.addEventListener("keydown", e => ((e.key.toLowerCase() == "d" && !nocommand.includes(document.activeElement.id.toLowerCase())) && (isD = true)));
            document.addEventListener("keyup", e => ((e.key.toLowerCase() == "d" && !nocommand.includes(document.activeElement.id.toLowerCase())) && (isD = false)));
            let decrSH = () => {(shc--, shc--, (shc < 0 ? (shc = 0) : (false)))};
            let paTr = e => [...Array(17)].map((n, i) => i * 0.19625).forEach(a => [spikeType, millType].forEach(t => place(t, a)));
            let insidetrap = false;
            let pittrapid = 0;
            var spiking = false;
            let autoBreakLoop = false;
            let auOldState;
            let autoBreakObject;
            setInterval(() =>{
                if (crashing && (crashed == !1)) {
                    lagger++;
                    if (lagger < 50) {
                        ws.oldSend(highLagger);
                        ws.oldSend(slowLagger);
                    }
                }
            }, 200);
            setInterval(() => {
                if (document.getElementById("combatBot").checked) {
                    dns(["33", [closestenemyAngle]]);
                }
                if (document.getElementById("combatBot").checked) {
                    kmsk();
                    if(myPlayer.weapon != secondary) {
                        attack();
                    }
                }
                if(empMode) {
                    hat(eHat);
                    acc(eAcc);
                }
                resetBreak();
            }, 300);
            let alreadySTimer;
            // javascript is very similiar to python
            setInterval(() => {
                if(window.hasSpawned == true && window.hasSpawned != null && !crashed && !crashing) {
                    document.getElementById("mainMenu").style.display = "none";
                }
                if (document.getElementById("shield360").checked && myPlayer.weapon == 11) {
                    dns(["2", [90 ** 100]]);
                }
                if ((hit360 && !inInsta && !autoBreakLoop && !inAnti && (clicking || attackToggle || document.getElementById("autoFarm").checked))) {
                    //if(!(weapon == secondary)) {
                    if(weapon == secondary && mpSecondary == "musket") {
                    } else {
                        dns(["2", [69 ** 69]]);
                    }
                    //dns(["2", [myPlayer.dir + toRad(RRandom(0, 2000))]]);
                    //}
                }
                doneCH = false;
                if(mpPrimary == "daggers") {
                    breakSpeed = 110;
                } else if(mpPrimary == "katana" || mpPrimary == "short_sword" || mpPrimary == "tool_hammer" || mpPrimary == "bat") {
                    breakSpeed = 310;
                } else if(mpPrimary == "polearm") {
                    breakSpeed = 800;
                } else if(mpPrimary == "hand_axe" || mpPrimary == "great_axe") {
                    breakSpeed = 410;
                }
				if(mpSecondary == "none" || mpSecondary == "shield") {
					SecBreakSpeed = 0;
				} else if(mpSecondary == "crossbow" || mpSecondary == "mc_grabby") {
					SecBreakSpeed = 710;
				} else if(mpSecondary == "musket") {
					SecBreakSpeed = 1400;
				} else if (mpSecondary == "repeater_crossbow") {
					SecBreakSpeed = 240;
				} else if (mpSecondary == "great_hammer") {
					SecBreakSpeed = 410;
				} else if (mpSecondary == "hunting_bow") {
					SecBreakSpeed = 610;
				}
                age = (document.getElementById("ageText").innerHTML).slice(4, 999)
                if(isW || isA || isS || isD) {
                    playerIsMoving = true;
                } else {
                    playerIsMoving = false;
                }
                if(autoInsta || document.getElementById("combatBot").checked) {
					// Auto Insta
					$('#instaDisplay').css({
						'color': '#ff0000'
                    });
					document.getElementById("instaDisplay").innerHTML = "ON";
					try {
						if ((enemyWithinRange) && !inInsta && !reloading && timeSinceLastAttack > (breakSpeed/10) && timeSinceLastInsta > 18) {
							if($("#instaType").val() == "oneframe") {
								if(closestenemyHat != 6 && closestenemyHat != 22) {
									if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
									inInsta = true;
									setTimeout(() => {
										instaKill();
									}, 4);
								}
							} else {
								if(document.getElementById("autoInstaBullCheck").checked) {
									if(closestenemyHat != 6) {
										if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
										$('#instaDisplay').css({
											'color': '#ffffff'
										});
										Notification.create(
											"Auto Insta",
											"Auto Instakill has been triggered. You have automatically targeted the nearest player.",
											"https://lemonmod.com/img/insta_ico.png",
											'fadeInRight',
											2
										);
										noBullInstaKill();
									} else {
										if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
										$('#instaDisplay').css({
											'color': '#ffffff'
										});
										Notification.create(
											"Auto Insta",
											"Auto Instakill has been triggered. You have automatically targeted the nearest player.",
											"https://lemonmod.com/img/insta_ico.png",
											'fadeInRight',
											2
										);
										instaKill()
									}
								} else {
									if(document.getElementById("autoInsta").checked || iAim) {dns(["2", [closestenemyAngle]]);aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);}
									$('#instaDisplay').css({
										'color': '#ffffff'
									});
									Notification.create(
										"Auto Insta",
										"Auto Instakill has been triggered. You have automatically targeted the nearest player.",
										"https://lemonmod.com/img/insta_ico.png",
										'fadeInRight',
										2
									);
									instaKill()
								}
							}
						}} catch(err) {}
				} else {
					$('#instaDisplay').css({
						'color': '#ffffff'
					});
					document.getElementById("instaDisplay").innerHTML = "OFF";
				}
                /*if(autoBreakLoop && autoBreakObject[0] && (inInsta == 0)) {
                    dns(["2", [Math.atan2(autoBreakObject[2] - myPlayer.y, autoBreakObject[1] - myPlayer.x)]]);
                    aim(autoBreakObject[1] - myPlayer.x + window.innerWidth / 2, autoBreakObject[2] - myPlayer.y + window.innerHeight / 2);
					//aim(enemy.x - myPlayer.x + window.innerWidth / 2, enemy.y - myPlayer.y + window.innerHeight / 2))
					//aim(autoBreakObject[1] - myPlayer.x + window.innerWidth / 2, autoBreakObject[2] - myPlayer.y + window.innerHeight / 2);
                    //calculateXY(Math.atan2(autoBreakObject[2] - myPlayer.y, autoBreakObject[1] - myPlayer.x), autoBreakObject[2] - myPlayer.y, autoBreakObject[1] - myPlayer.x);
					// POOOOOOOOOOO
                }*/
                document.getElementById("newScoreDisplay").innerHTML = parseInt(document.getElementById("scoreDisplay").innerHTML).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                if (myPlayer.hat != 45) {
                    alreadySTimer = false;
                    $('#shameDisplay').css({
                            'color': '#ffffff'
                    });
                    document.getElementById("shameDisplay").innerHTML = myPlayer.shameCount + "/7";
                } else {
                    if (!alreadySTimer) {
                        document.getElementById("shameDisplay").innerHTML = "30s";
                        $('#shameDisplay').css({
                            'color': '#f24033'
                        });
                        for (let TimeIndex = 0; TimeIndex < 31; ++TimeIndex) {
                            setTimeout(() => {
                                document.getElementById("shameDisplay").innerHTML = 30 - TimeIndex + "s";
                            }, TimeIndex * 1000);
                        }
                        setTimeout(() => {
                            place(foodType, null);
                            place(foodType, null);
                            place(foodType, null);
                            place(foodType, null);
                            setTimeout(() => {
                                place(foodType, null);
                                place(foodType, null);
                                place(foodType, null);
                                place(foodType, null);
                            }, 90);
                        }, 30100);
                        alreadySTimer = true;
                    };
                }
                try{
                    if(sAim && dist(closestenemy, myPlayer) < 400) {
                        dns(["2", [closestenemyAngle]]);
                    }
                }catch(e){}
				if(document.getElementById("autoInsta").checked) {
					$('#instaDisplay').css({
						'display': 'block'
					});
				} else {
					$('#instaDisplay').css({
						'display': 'none'
					});
				}
				primary == 0 && (mpPrimary = "tool_hammer");
				primary == 1 && (mpPrimary = "hand_axe");
				primary == 2 && (mpPrimary = "great_axe");
				primary == 3 && (mpPrimary = "short_sword");
				primary == 4 && (mpPrimary = "katana");
				primary == 5 && (mpPrimary = "polearm");
				primary == 6 && (mpPrimary = "bat");
				primary == 7 && (mpPrimary = "daggers");
				primary == 8 && (mpPrimary = "stick");
				secondary == 0 && (mpSecondary = "none");
				secondary == 9 && (mpSecondary = "hunting_bow");
				secondary == 10 && (mpSecondary = "great_hammer");
				secondary == 11 && (mpSecondary = "shield");
				secondary == 12 && (mpSecondary = "crossbow");
				secondary == 13 && (mpSecondary = "repeater_crossbow");
				secondary == 14 && (mpSecondary = "mc_grabby");
				secondary == 15 && (mpSecondary = "musket");
				/*if(timeSinceLastAttack >= Math.round(breakSpeed/10)) {
					primaryReloaded = true;
				} else {
					primaryReloaded = false;
				}
				if(timeSinceLastSecAttack >= Math.round(SecBreakSpeed/10)) {
					secondaryReloaded = true;
				} else {
					secondaryReloaded = false;
				}*/
				if(lockedAim) {
					document.getElementById("aimState").innerText = "true";
					dns(["2", [closestenemyAngle]]);
					aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);
				}
                if(trapAim || autoBreakLoop) {
					document.getElementById("aimState").innerText = "true";
                    dns(["2", [Math.atan2(autoBreakObject[2] - myPlayer.y, autoBreakObject[1] - myPlayer.x)]]);
                    //aim(autoBreakObject[1] - myPlayer.x + window.innerWidth / 2, autoBreakObject[2] - myPlayer.y + window.innerHeight / 2);
                }
				if(!lockedAim && !(trapAim || autoBreakLoop)) {
					document.getElementById("aimState").innerText = "false";
				}
				if(isZombie) {
					document.getElementById("useBots").checked = false;
					document.getElementById("heal1").checked = false;
					document.getElementById("autoPlace").checked = false;
					document.getElementById("silentMode").checked = true;
					document.getElementById("heal2").checked = false;
					document.getElementById("antiTrap").checked = false;
					document.getElementById("autoInsta").checked = false;
		            document.getElementById("extraAnti").checked = false;
					dns(["33", [null]]);
					dns(["2", [toRad(0)]]);
				}
				try{closestenemyWeapon = closestenemy[5];}catch(e){closestenemyWeapon = "unknown"}
				try{closestenemyHat = closestenemy[9];}catch(e){closestenemyHat = "unknown"}
				try{closestenemyAcc = closestenemy[10];}catch(e){closestenemyAcc = "unknown"}
                if(tslh > 25) {
                    if(!window.spamHealFlag-1 < 0) {
                        window.spamHealFlag = window.spamHealFlag - 1;
                    } else {
                        window.spamHealFlag = 0;
                        gettingHealSpammed = false;
                    }
                }
				try{
					enemyWithinRange = dist(closestenemy, myPlayer) < 180;
				} catch(e) {
					enemyWithinRange = false;
				}
				if(pProgress >= breakSpeed) {
					pProgress = breakSpeed;
					primaryReloaded = true;
				}
				if(sProgress >= SecBreakSpeed) {
					sProgress = SecBreakSpeed;
					secondaryReloaded = true;
				}
				/*if(window.globalReload >= ttr){
					try{
					clearInterval(reloadTicking);
					}catch(e){}
				}*/
				if(document.getElementById("autoFarm").checked) {
					if($("autoFarmType").val() == "food") {
						dns(["2", [nearestFoodAngle]]);
					} else if($("autoFarmType").val() == "wood") {
						dns(["2", [nearestTreeAngle]]);
					} else if($("autoFarmType").val() == "stone") {
						dns(["2", [nearestStoneAngle]]);
					} else if($("autoFarmType").val() == "gold") {
						dns(["2", [nearestMineAngle]]);
					}
				}
				targetAngle = closestenemyAngle;
                if(followingEnemy) {
                    dns(["33", [targetAngle]]);
                }
			}, 0);
			setInterval(() => {
				try{
					setCookie("target", closestenemy[0]);
				}catch(e){
					setCookie("target", "none");
				}
			}, 100);
			setInterval(() => {
                if(!debugMode) {
                console.clear()
                console.log("<==-==-==-==-==>\nLemonMod v" + modVersion + " - All Systems Operational!\n<==-==-==-==-==>");
                console.log("Ping: " + delay + "ms");
                console.log("Primary Weapon: " + mpPrimary)
                console.log("Secondary Weapon: " + mpSecondary)
                console.log("Shame: " + myPlayer.shameCount + "/7")
                }
            }, 500);
            let mousex;
            let mousey;
			let mousedir;
			let lenius;
			let radiDir;
			let dirx;
			let diry;
			function calculateXY(ang0, ang1, ang2) {
				lenius = Math.sqrt(ang1*ang1 + ang2*ang2)
				radiDir = ang0 * Math.pi / 180
				dirx = lenius * Math.cos(radiDir)
				diry = lenius * Math.sin(radiDir)
				console.log("x: " + dirx);
				console.log("y: " + diry);
			}
            document.addEventListener('mousemove', e => {
                if(lockedAim || trapAim) {
                    e.stopPropagation();
                    e.preventDefault();
                }
            });
            cvs.addEventListener('mousemove', e => {
				if(lockedAim || trapAim) {
					e.stopPropagation();
					e.preventDefault();
				}
				mX = e.clientX;
				mY = e.clientY;
                mousex = e.clientX;
                mousey = e.clientY;
				mousedir = Math.atan2(mousey - height / 2, mousex - width / 2);
            });
            var timeSinceLastInsta = 0;
			var timeSinceLastClick = 0;
			var timeSinceLastAttack = 0;
			var timeSinceLastSecAttack = 0;
			var primaryReloaded = true;
			var secondaryReloaded = true;
            setInterval(() => {
                timeSinceLastInsta = timeSinceLastInsta + 1;
                timeSinceLastAnti = timeSinceLastAnti + 1;
				timeSinceLastClick = timeSinceLastClick + 1;
				timeSinceLastSyncDetect = timeSinceLastSyncDetect + 1;
                tslh = tslh + 1;
				if(weapon == primary) {
					timeSinceLastAttack = timeSinceLastAttack + 1;
				} else if (weapon == secondary) {
					timeSinceLastSecAttack = timeSinceLastSecAttack + 1;
				}
            }, 10);
            // Auto Break
            var thisTimeout = 240;
            var breakSpeed = 310;
			var SecBreakSpeed = 0;
            var doneCH = false;
            var movementRoom = 0;
            var oldPX, oldPY;
			var enemNear;
			var testingBreak = false;
			var hatOverride = false;
			var usingAntiBull = false;
            function freeze(ft) {
            }
            let trueHealSpeed = 90;
            let wVM = [1,1.09,1.18,1.18];
            let secs = [...Array(50)];
            let pris = [...Array(50)];
            function genDMGs(dmg) {
                let wep = [dmg];
                wVM.forEach(e => {wep.push(e * wep[0])});
                wep.forEach(e => {wep.push(e * 1.5)});
                wep.forEach(e => {wep.push(e * .75)});
            };
            function turretsNearby() {
                if(turretsNear.length >= 4) {
                    return true;
                } else {
                    return false;
                }
            }
            function defenseHat() {
				if(!hatOverride) {
					if(enemiesNear.length != 0 && enemiesWithinHitRange.length < 2 && closestenemyHat == 45 && dist(closestenemy, myPlayer) < 700) {
						hat(53);
						acc(11);
					} else {
						if(myPlayer.hat == srHat) {
						} else {
							if(usingAntiBull) { // autoInsta && enemiesWithinHitRange.length <= 2 && dist(closestenemy, myPlayer) < 320
								hat(11)
								if(noDAcc) {
									window.wakandaforever=false
								} else {
									acc(21)
								}
							} else {
								hat(6)
								if(noDAcc) {
									window.wakandaforever=false
								} else {
									acc(11)
								}
							}
						}
					}
				}
			}
            function speedHat() {
				if(enemiesNear.length != 0 && enemiesWithinHitRange.length < 2 && closestenemyHat == 45 && dist(closestenemy, myPlayer) < 700) {
					hat(53);
					acc(11);
				} else {
					if(myPlayer.y < 2400) {
						if(turretsNear.length >= 4) {
							hat(22)
						} else {
							hat(ssHat)
						}
						if(noDAcc) {
							window.wakandaforever=false
						} else {
							acc(ssAcc)
						}
					} else if(myPlayer.y > 6850 && myPlayer.y < 7550) {
						if(turretsNear.length >= 4) {
							hat(22);
						} else {
							hat(srHat);
						}
						if(noDAcc) {
							window.wakandaforever=false
						}
						else {
							acc(srAcc)
						}
					} else {
						if(turretsNear.length >= 4) {
							hat(22);
						} else {
							hat(snHat);
						}
						if(noDAcc) {
							window.wakandaforever=false
						}
						else {
							acc(snAcc)
						}
					}
				}
			}
			function randomWoodSound() {
			}
			function randomStoneSound() {
			}
			function randomBuildSound() {
			}
			function randomHitSound() {
				let ret = RRandom(1, 3);
				if(ret == 1) {
					playSound(sound.fn_hit1);
				} else if(ret == 2) {
					playSound(sound.fn_hit2);
				} else if (ret == 3) {
					playSound(sound.fn_hit3);
				}
			}
            var wCds = [];
            wCds[0] = 450, wCds[1] = 560, wCds[2] = 450, wCds[3] = 450, wCds[4] = 900, wCds[5] = 450, wCds[6] = 225, wCds[7] = 560,
                wCds[8] = 785, wCds[9] = 560, wCds[10] = undefined, wCds[11] = 900, wCds[12] = 450, wCds[13] = 900, wCds[14] = 1685; var pCd = false; var sCd = false; var pCdT; var sCdT;
            function doTickStuff(n, t, payload, o) {
			for (let i = 0; i < payload[0].length; i += 13) {
					const plinf = payload[0].slice(i, i + 13);
					var thisPlayer = {
						sid: plinf[0],
						x: plinf[1],
						y: plinf[2],
						dir: plinf[3],
						obj: plinf[4],
						wep: plinf[5],
						variant: plinf[6],
						tribe: plinf[7],
						isLeader: plinf[8],
						hat: plinf[9],
						acc: plinf[10],
						isSkull: plinf[11],
						zIndex: plinf[12],
						dist: null,
						isMe: plinf[0] == playerDat.sid
					},
						sid = thisPlayer.sid,
						temp = players2[sid] || {};
					turretsNear = buildings.filter(e => (e[6] == 17 && e[7] != myPlayer.id && dist(e, myPlayer) < 750));
					spikesNear = buildings.filter(e => ((e[4] == 52 || e[4] == 49) && e[7] != myPlayer.id && dist(e, myPlayer) < 200));
					mTrapsNear = buildings.filter(e => ((e[4] == 50) && dist(e, myPlayer) < 200));
					try{
						trapsNear = buildings.filter(e => (e[4] == 50 && e[7] != closestenemy[0] && tdist(e, closestenemy) < 60));
					}catch(e) {
					}
					if(temp.x !== thisPlayer.x || temp.y !== thisPlayer.y){
					}
					cpc(sid);
					for(let i in thisPlayer){
						try{
							players2[sid][i] = thisPlayer[i];
						} catch(e) {}
					}
					// SNOW
					if(useSounds) {
						if(players2[sid].y <= 2400){
							players2[sid].notInSnow = players2[sid].inSnow;
							players2[sid].inSnow = true;
							players2[sid].wasInSnow = false;
						} else {
							players2[sid].notInSnow = true;
							players2[sid].wasInSnow = players2[sid].inSnow;
							players2[sid].inSnow = false;
						}
						if(thisPlayer.isMe){
							if(players2[sid].inSnow){
								if(players2[sid].notInSnow || snowWind.currentTime == 0 || snowWind.ended) {
									snowWind.play();
								}
								if(snowWind.volume < 0.7) snowWind.volume = parseFloat(snowWind.volume+0.05).toFixed(2)
							} else if(snowWind.currentTime !== 0 || snowWind.ended == false){
								if(!snowWind.paused){
									snowWind.volume = parseFloat(snowWind.volume-0.05).toFixed(2)
									if(snowWind.volume == 0){
										snowWind.pause();
									}
								}
							}
						}
						// PLAINS
						if(players2[sid].y > 2400 && players2[sid].y < 12000){
							players2[sid].notInPlains = players2[sid].inPlains;
							players2[sid].inPlains = true;
							players2[sid].wasInPlains = false;
						} else {
							players2[sid].notInPlains = true;
							players2[sid].wasInPlains = players2[sid].inPlains;
							players2[sid].inPlains = false;
						}
						//console.log(plainsWind.volume);
						if(thisPlayer.isMe){
							if(players2[sid].inPlains){
								if(players2[sid].notInPlains || plainsWind.currentTime == 0 || plainsWind.ended) {
									plainsWind.play();
								}
								if(plainsWind.volume < 0.5) plainsWind.volume = parseFloat(plainsWind.volume+0.05).toFixed(2)
							} else if(plainsWind.currentTime !== 0 || plainsWind.ended == false){
								if(!plainsWind.paused){
									plainsWind.volume = parseFloat(plainsWind.volume-0.05).toFixed(2);
									if(plainsWind.volume == 0){
										plainsWind.pause();
									}
								}
							}
						}
						// RIVER
						if(players2[sid].y >= 6400 && players2[sid].y <= 8000){
							players2[sid].notInRiver = players2[sid].inRiver;
							players2[sid].inRiver = true;
							players2[sid].wasInRiver = false;
						} else {
							players2[sid].notInRiver = true;
							players2[sid].wasInRiver = players2[sid].inRiver;
							players2[sid].inRiver = false;
						}
						if(thisPlayer.isMe){
							if(players2[sid].inRiver){
								if(players2[sid].notInRiver || riverWind.currentTime == 0 || riverWind.ended) {
									riverWind.play();
								}
								if(riverWind.volume < 0.7) riverWind.volume = parseFloat(riverWind.volume+0.05).toFixed(2)
							} else if(riverWind.currentTime !== 0 || riverWind.ended == false){
								if(!riverWind.paused){
									riverWind.volume = parseFloat(riverWind.volume-0.05).toFixed(2)
									if(riverWind.volume == 0){
										riverWind.pause();
									}
								}
							}
						}
						// DESERT
						if(players2[sid].y >= 12000){
							players2[sid].notInDesert = players2[sid].inDesert;
							players2[sid].inDesert = true;
							players2[sid].wasInDesert = false;
						} else {
							players2[sid].notInDesert = true;
							players2[sid].wasInDesert = players2[sid].inDesert;
							players2[sid].inDesert = false;
						}
						if(thisPlayer.isMe){
							if(players2[sid].inDesert){
								if(players2[sid].notInDesert || desertWind.currentTime == 0 || desertWind.ended) {
									desertWind.play();
								}
								if(desertWind.volume < 0.5) desertWind.volume = parseFloat(desertWind.volume+0.05).toFixed(2)
							} else if(desertWind.currentTime !== 0 || desertWind.ended == false){
								if(!desertWind.paused){
									desertWind.volume = parseFloat(desertWind.volume-0.05).toFixed(2)
									if(desertWind.volume == 0){
										desertWind.pause();
									}
								}
							}
						}
					} else {
						desertWind.volume = 0;
						snowWind.volume = 0;
						plainsWind.volume = 0;
						riverWind.volume = 0;
						desertWind.pause();
						snowWind.pause();
						plainsWind.pause();
						riverWind.pause();
					}
				}
				if (trees) {
					nearestTree = trees.sort(
						(a, b) =>
						Math.hypot(a[2] - myPlayer.y, a[1] - myPlayer.x) -
						Math.hypot(b[2] - myPlayer.y, b[1] - myPlayer.x)
					)[0]
					if (nearestTree) {
						nearestTreeAngle = Math.atan2(
							nearestTree[2] - myPlayer.y,
							nearestTree[1] - myPlayer.x
						)
					}
				}
				if (foods) {
					nearestFood = foods.sort(
						(a, b) =>
						Math.hypot(a[2] - myPlayer.y, a[1] - myPlayer.x) -
						Math.hypot(b[2] - myPlayer.y, b[1] - myPlayer.x)
					)[0]
					if (nearestFood) {
						nearestFoodAngle = Math.atan2(
							nearestFood[2] - myPlayer.y,
							nearestFood[1] - myPlayer.x
						)
					}
				}
				if (stones) {
					nearestStone = stones.sort(
						(a, b) =>
						Math.hypot(a[2] - myPlayer.y, a[1] - myPlayer.x) -
						Math.hypot(b[2] - myPlayer.y, b[1] - myPlayer.x)
					)[0]
					if (nearestStone) {
						nearestStoneAngle = Math.atan2(
							nearestStone[2] - myPlayer.y,
							nearestStone[1] - myPlayer.x
						)
					}
				}
				if (mines) {
					nearestMine = mines.sort(
						(a, b) =>
						Math.hypot(a[2] - myPlayer.y, a[1] - myPlayer.x) -
						Math.hypot(b[2] - myPlayer.y, b[1] - myPlayer.x)
					)[0]
					if (nearestMine) {
						nearestMineAngle = Math.atan2(
							nearestMine[2] - myPlayer.y,
							nearestMine[1] - myPlayer.x
						)
					}
				}
				if(document.getElementById("autoFarm").checked) {
					if($("#autoFarmType").val() == "food") {
						if(dist(nearestFood, myPlayer) > 100) {
							dns(["33", [nearestFoodAngle]]);
						} else {
							dns(["33", [null]]);
							dns(["2", [nearestFoodAngle]]);
							attack();
						}
					} else if($("#autoFarmType").val() == "wood") {
						if(dist(nearestTree, myPlayer) > 130) {
							dns(["33", [nearestTreeAngle]]);
						} else {
							dns(["33", [null]]);
							dns(["2", [nearestTreeAngle]]);
							attack();
						}
					} else if($("#autoFarmType").val() == "stone") {
						if(dist(nearestStone, myPlayer) > 120) {
							dns(["33", [nearestStoneAngle]]);
						} else {
							dns(["33", [null]]);
							dns(["2", [nearestStoneAngle]]);
							attack();
						}
					} else if($("#autoFarmType").val() == "gold") {
						if(dist(nearestMine, myPlayer) > 130) {
							dns(["33", [nearestMineAngle]]);
						} else {
							dns(["33", [null]]);
							dns(["2", [nearestMineAngle]]);
							attack();
						}
					}
				}
				enemiesNear = [], nowX = [], nowY = [], drawRadar();
				for (var f = 0; f < n[1].length / 13; f++) {
					var b = n[1].slice(13 * f, 13 * f + 13);
					var playerInfo = n[1].slice(13 * f, 13 * f + 13);
					b[0] == myPlayer.id ? (myPlayer.x = b[1], myPlayer.y = b[2], myPlayer.dir = b[3], myPlayer.object = b[4], myPlayer.weapon = b[5], myPlayer.clan = b[7], myPlayer.isLeader = b[8], myPlayer.hat = b[9], myPlayer.accessory = b[10], myPlayer.isSkull = b[11], nowX[myPlayer.id] = myPlayer.x, nowY[myPlayer.id] = myPlayer.y, myPlayer.xvel = myPlayer.x - b[1], myPlayer.yvel = myPlayer.y - b[2], 0 != myPlayer.xvel && 0 != myPlayer.yvel && (myPlayer.prevXVel = myPlayer.xvel, myPlayer.prevYVel = myPlayer.yvel), ctx.beginPath(), ctx.strokeStyle = "#FFE600", ctx.moveTo(centreX, centreY), ctx.lineTo(centreX + (myPlayer.x - lastX[myPlayer.id]) / 6.25, centreY + (myPlayer.y - lastY[myPlayer.id]) / 6.25), ctx.stroke()) : b[7] != myPlayer.clan || null === b[7] ? (enemiesNear.push(b), distance(b[1], b[2]) > 500 ? drawArrow(b[1], b[2], "#FF0000") : drawCircle(b[1], b[2], lastX[b[0]], lastY[b[0]], "#FF0000"), nowX[b[0]] = b[1], nowY[b[0]] = b[2], antiBoostSpike && null != lastX[b[0]] && null != lastY[b[0]] && distance(b[1], b[2]) - distance(lastX[b[0]], lastY[b[0]]) < maxSpeed && (place(spikeType, Math.atan2(b[2] - myPlayer.y, b[1] - myPlayer.x) + toRad(90)), chat('LemonMod v' + modVersion + " - AntiBoostSpike"), place(spikeType, Math.atan2(b[2] - myPlayer.y, b[1] - myPlayer.x) - toRad(90))), b[5] > 8 ? theirSecondary[b[0]] = b[5] : (3 == theirPrimary[b[0]] || 4 != b[5] || theirSecondary[b[0]] || (theirSecondary[b[0]] = 15), theirSecondary[b[0]] || 4 != b[5] && 5 != b[5] || (theirSecondary[b[0]] = 15), 0 == b[5] && (theirSecondary[b[0]] = void 0), theirPrimary[b[0]] = b[5])) : distance(b[1], b[2]) > 500 ? drawArrow(myPlayer.x, myPlayer.y, b[1], b[2], "#00EE00") : drawCircle(b[1], b[2], lastX[b[0]], lastY[b[0]], "#00EE00")
				}
				if (myPlayer.hat == 45) {
					if (ShameCount !== 0) ShameCount = 0;
					Ge == 0 && (Ge = Date.now());
				} else {
					if (Ge !== 0) Ge = 0;
				}
				//window.tShame = global_functions_exporter.playerList[myPlayer.id].shameCount
				try{
					if (!PlayerShame[playerInfo[0]]) PlayerShame[playerInfo[0]] = {id: playerInfo[0], Ge: 0, hat: playerInfo[9], shameCount: 0};
					PlayerShame[playerInfo[0]].hat = playerInfo[9];
					if (PlayerShame[playerInfo[0]].hat == 45) {
						if (PlayerShame[playerInfo[0]].shameCount !== 0) PlayerShame[playerInfo[0]].shameCount = 0;
						PlayerShame[playerInfo[0]].Ge == 0 && (PlayerShame[playerInfo[0]].Ge = Date.now());
					} else {
						if (PlayerShame[playerInfo[0]].Ge !== 0) PlayerShame[playerInfo[0]].Ge = 0;
					}}catch(e){}
				if (pos.innerHTML = "{" + myPlayer.x + "," + myPlayer.y + "}", lastX = nowX, lastY = nowY, sAim)
					for (var r in enemiesNear) enemiesNear[r][1] += (enemiesNear[r][1] - lastX[enemiesNear[r][0]]) * dist(enemiesNear[r], myPlayer) / projSpeed(weapon), enemiesNear[r][2] += (enemiesNear[r][2] - lastY[enemiesNear[r][0]]) * dist(enemiesNear[r], myPlayer) / projSpeed(weapon);
				if (enemiesNear && (closestenemy = enemiesNear.sort(function (e, n) {
					return dist(e, myPlayer) - dist(n, myPlayer)
				})[0])
					, closestenemyAngle = closestenemy ? Math.atan2(closestenemy[2] - myPlayer.y, closestenemy[1] - myPlayer.x) : myPlayer.dir, "insta" == mode && !inInsta && closestenemy && dist(closestenemy, myPlayer) < 220 && !cooldown[myPlayer.id] && weapon != secondary && (inInsta = !0, iAim && (autoaim = !0), icBool && chat(iChat), dns(["13c", [0, 0, 1]]), dns(["7", [!0]]), iReverse ? (weapon = secondary, dns(["5", [secondary, !0]]), dns(["13c", [0, iHat2, 0]]), dns(["13c", [0, iAcc2, 1]]), setTimeout(function () {
					hit360=0, dns(["13c", [0, iHat1, 0]]), dns(["13c", [0, iAcc1, 1]]), weapon = primary, dns(["5", [primary, !0]])
				}, instaSpeedR / 2)) : (weapon = primary, dns(["5", [primary, !0]]), iSwitch || (iAim ? (place(spikeType, closestenemyAngle + toRad(45)), place(spikeType, closestenemyAngle - toRad(45))) : (place(spikeType, Math.atan2(mY - height / 2, mX - width / 2) + toRad(45)), place(spikeType, Math.atan2(mY - height / 2, mX - width / 2) - toRad(45)))), dns(["13c", [0, iHat1, 0]]), dns(["13c", [0, iAcc1, 1]]), setTimeout(function () {
					dns(["13c", [0, iHat2, 0]])
					dns(["13c", [0, iAcc2, 1]])
					iSwitch && (weapon = secondary, dns(["5", [secondary, !0]]))
				}, instaSpeed / 2)), setTimeout(function () {
					autoaim = !1
					dns(["13c", [0, dHat, 0]])
					dns(["13c", [0, dAcc, 1]])
					dns(["7", [!0]])
					weapon = secondary
					dns(["5", [secondary, !0]]);
					var e = 0;
					15 == secondary ? e = 1650 : 13 == secondary ? e = 400 : 12 == secondary ? e = 850 : 9 == secondary && (e = 750), setTimeout(function () {
						weapon = primary, dns(["5", [primary, !0]]), setTimeout(function () {
							inInsta = !1
						}, 1e3)
					}, e)
				}, instaSpeed)), "counter" != mode || inInsta) {
					if (inInsta == 0 && ahat && "hat" != mode && !inAnti && !bullTicking && !empTIG && !quickNoHattie && !testingBreak && autoBreakLoop == false && !clicking && (!empMode) && (!samuraiReloading))
						if (closestenemy && dist(closestenemy, myPlayer) < 220) {
							var g = !1;
							for (var a = 0; a < n[1].length / 13; a++) {
								var k = n[1].slice(13 * a, 13 * a + 13);
								if (k[0] != myPlayer.id && Math.sqrt(Math.pow(myPlayer.y - k[2], 2) + Math.pow(myPlayer.x - k[1], 2)) < 300 && !cooldown[k[0]]) {
									g = !0;
									break
								}
							}
							if(g && defence) {
								defenseHat();
							}
						} else if(speed) {
							speedHat();
						}
				} else if(closestenemy && dist(closestenemy, myPlayer) < 230) {
					defenseHat();
				} else {
					speedHat();
				}
				enemiesWithinHitRange = enemiesNear.filter(e => (dist(e, myPlayer) < 240));
				if(automillx == false){
					automillx = myPlayer.x;
				}
				if(automilly == false){
					automilly = myPlayer.y;
				}
				if(myPlayeroldy != myPlayer.y || myPlayeroldx != myPlayer.x){
					if (millToggle) {
						if(Math.sqrt(Math.pow((myPlayer.y-automilly), 2) + Math.pow((myPlayer.x-automillx), 2)) > 100) {
							place(millType, Math.atan2(myPlayeroldy - myPlayer.y, myPlayeroldx - myPlayer.x) + toRad(78));
							place(millType, Math.atan2(myPlayeroldy - myPlayer.y, myPlayeroldx - myPlayer.x) - toRad(78));
							place(millType, Math.atan2(myPlayeroldy - myPlayer.y, myPlayeroldx - myPlayer.x) - toRad(0));
							dns(["2", [Math.atan2(mousey - height / 2, mousex - width / 2)]]);
							automillx = myPlayer.x;
							automilly = myPlayer.y;
						}
					}
					myPlayeroldx = myPlayer.x;
					myPlayeroldy = myPlayer.y;
				}
			}
			function doClickStuff() {
			}
			function gameTick(n, t, payload, o) {
				// case "33" case '33' '33" "33' 33
				if(tickInsta == "1") {
					if(autoInsta) {
						autoInsta = false;
					}
					inInsta = true;
					usingInsta = true;
					lockedAim = true;
					weapon = primary;
					dns(["5", [primary]]);
					hat(7);
					acc(21, true);
					timeSinceLastAttack = 0;
					dns(["7", [1]]);
					tickInsta = "2";
				} else if(tickInsta == "2") {
					if(autoInsta) {
						autoInsta = false;
					}
					let ttmusk = 0;
					if(pingDel >= 49) {
						ttmusk = 90;
					}
					weapon = secondary;
					dns(["5", [secondary]]);
					if(ttmusk != 90) {
						dns(["c", [1, targetAngle]]);
						hat(53);
						acc(21);
						setTimeout(() => {if(document.getElementById("spikeInsta").checked) {place(spikeType, closestenemyAngle);}}, 200);
						tickInsta = "0";
						setTimeout(()=> {
							dns(["7", [1]]);
							dns(["c", [0, null]]);
							inInsta = false;
							usingInsta = false;
							lockedAim = false;
							setTimeout(() => {
								reloadGun();
							}, 10);
						}, 100);
					} else {
						setTimeout(() => {
							dns(["c", [1, targetAngle]]);
							hat(53);
							acc(21);
							setTimeout(() => {if(document.getElementById("spikeInsta").checked) {place(spikeType, closestenemyAngle);}}, 200);
							tickInsta = "0";
							setTimeout(()=> {
								dns(["7", [1]]);
								dns(["c", [0, null]]);
								inInsta = false;
								usingInsta = false;
								lockedAim = false;
								setTimeout(() => {
									reloadGun();
								}, 10);
							}, 200);
						}, (pingDel/3)+5);
					}
				} else if(tickInsta == "1nb") {
					if(autoInsta) {
						autoInsta = false;
					}
					inInsta = true;
					usingInsta = true;
					lockedAim = true;
					weapon = primary;
					dns(["5", [primary]]);
					hat(6);
					acc(21, true);
					timeSinceLastAttack = 0;
					dns(["7", [1]]);
					tickInsta = "2nb";
				} else if(tickInsta == "2nb") {
					if(autoInsta) {
						autoInsta = false;
					}
					let ttmusk = 0;
					if(pingDel >= 49) {
						ttmusk = 90;
					}
					weapon = secondary;
					dns(["5", [secondary]]);
					if(ttmusk != 90) {
						dns(["c", [1, targetAngle]]);
						hat(53);
						acc(21);
						setTimeout(() => {if(document.getElementById("spikeInsta").checked) {place(spikeType, closestenemyAngle);}}, 200);
						tickInsta = "0";
						setTimeout(()=> {
							dns(["7", [1]]);
							dns(["c", [0, null]]);
							inInsta = false;
							usingInsta = false;
							lockedAim = false;
							setTimeout(() => {
								reloadGun();
							}, 10);
						}, 100);
					} else {
						setTimeout(() => {
							dns(["c", [1, targetAngle]]);
							hat(53);
							acc(21);
							setTimeout(() => {if(document.getElementById("spikeInsta").checked) {place(spikeType, closestenemyAngle);}}, 200);
							tickInsta = "0";
							setTimeout(()=> {
								dns(["7", [1]]);
								dns(["c", [0, null]]);
								inInsta = false;
								usingInsta = false;
								lockedAim = false;
								setTimeout(() => {
									reloadGun();
								}, 10);
							}, 200);
						}, (pingDel/3)+5);
					}
				}
				if(inBetaOF) {
					dns(["33", [null]]);
					hat(7);
					acc(18);
					attack();
					setTimeout(() => {
						inInsta = false;
						inBetaOF = false;
						lockedAim = false;
					}, 700);
				}
				doTickStuff(n, t, payload, o);
				if(reloading) {
					if(rlJustTriggered) {
						rlJustTriggered = false;
						sProgress = 0;
					}
					if(autoBreakLoop || clicking) {
						reloading = false;
						if(debugMode) {
							console.log('[reload]: emergency stopped');
						}
					}
					if(debugMode) {
						console.log('[reload]: reloading (' + sProgress + "/" + SecBreakSpeed + ')');
					}
					if(sProgress >= SecBreakSpeed) {
						reloading = false;
						weapon = primary;
						dns(["5", [primary, !0]]);
						if(debugMode) {
							console.log('[reload]: reloaded!');
						}
						if(irBool) {
							chat(rChat);
						}
					};
				}
				var amAddP = 100;
				var amAddS = 100;
				if(breakSpeed == 310) {
					amAddP = 77.5;
				}
				if(mpSecondary == "great_hammer") {
					amAddS = 130;
				}
				if(pProgress < breakSpeed) {
					pProgress += amAddP;
					primaryReloaded = false;
				}
				if(sProgress < SecBreakSpeed) {
					sProgress += amAddS;
					secondaryReloaded = false;
				}
				if(autoBreakLoop && autoBreakObject[0] || testingBreak) {
					oldPX = myPlayer.x
					oldPY = myPlayer.y
					setTimeout(() => {
						if ((oldPX != myPlayer.x || oldPY != myPlayer.y) && playerIsMoving) {
							movementRoom = movementRoom+1
						}
						if (movementRoom >= 3) {
							movementRoom = 0;
							autoBreakLoop = false;
							autoBreakObject = [];
							if(wpBreak == secondary && mpSecondary=="musket") {} else {
								if(mpSecondary == "great_hammer") {
									setTimeout(() => {
										weapon = wpBreak;
										dns(["5", [wpBreak, !0]])
										dns(["5", [wpBreak, !0]])
										dns(["5", [wpBreak, !0]])
										setTimeout(() => {
											dns(["5", [wpBreak, !0]])
										}, 25);
										setTimeout(() => {
											dns(["5", [wpBreak, !0]])
										}, 50);
										setTimeout(() => {
											dns(["5", [wpBreak, !0]])
										}, 75);
									}, 430);
								} else {
									weapon = wpBreak;
									dns(["5", [wpBreak, !0]])
									dns(["5", [wpBreak, !0]])
									dns(["5", [wpBreak, !0]])
									setTimeout(() => {
										dns(["5", [wpBreak, !0]])
									}, 25);
									setTimeout(() => {
										dns(["5", [wpBreak, !0]])
									}, 50);
									setTimeout(() => {
										dns(["5", [wpBreak, !0]])
									}, 75);
								}
							}
						}
					}, 30);
					if (movementRoom >= 3) {
						movementRoom = 0;
						autoBreakLoop = false;
						autoBreakObject = [];
						if(wpBreak == secondary && mpSecondary=="musket") {} else {
							if(mpSecondary == "great_hammer") {
								setTimeout(() => {
									weapon = wpBreak;
									dns(["5", [wpBreak, !0]])
									dns(["5", [wpBreak, !0]])
									dns(["5", [wpBreak, !0]])
									setTimeout(() => {
										dns(["5", [wpBreak, !0]])
									}, 25);
									setTimeout(() => {
										dns(["5", [wpBreak, !0]])
									}, 50);
									setTimeout(() => {
										dns(["5", [wpBreak, !0]])
									}, 75);
								}, 430);
							} else {
								weapon = wpBreak;
								dns(["5", [wpBreak, !0]])
								dns(["5", [wpBreak, !0]])
								dns(["5", [wpBreak, !0]])
								setTimeout(() => {
									dns(["5", [wpBreak, !0]])
								}, 25);
								setTimeout(() => {
									dns(["5", [wpBreak, !0]])
								}, 50);
								setTimeout(() => {
									dns(["5", [wpBreak, !0]])
								}, 75);
							}
						}
					}
					if(dist(autoBreakObject[0], myPlayer) > 200) {
						autoBreakLoop = false;
						autoBreakObject = [];
					}
					if(mpSecondary == "great_hammer") {
						if(secondaryReloaded) {
							weapon = secondary;
							dns(["5", [secondary, !0]]);
							trapAim = true;
							dns(["2", [Math.atan2(autoBreakObject[2] - myPlayer.y, autoBreakObject[1] - myPlayer.x)]]);
							if(turretsNear.length >= 4) {
								hat(22);
							} else {
								hat(6);
							}
							smartClick("left", true);
							setTimeout(() => {
								setTimeout(() => {
									trapAim = false;
								}, 10);
								endClick("left", true);
							}, 65);
						}
					} else {
						if(primaryReloaded) {
							weapon = primary;
							dns(["5", [primary, !0]]);
							trapAim = true;
							dns(["2", [Math.atan2(autoBreakObject[2] - myPlayer.y, autoBreakObject[1] - myPlayer.x)]]);
							if(turretsNear.length >= 4) {
								hat(22);
							} else {
								hat(6);
							}
							smartClick("left", true);
							setTimeout(() => {
								setTimeout(() => {
									trapAim = false;
								}, 10);
								endClick("left", true);
							}, 65);
						}
					}
				}
				doClickStuff();
			}
			function healTypeOne(n, payload) {
			if(window.cactusFlex) {
					if(n[1] == myPlayer.id) {
						if(myPlayer.shameCount <= 5) {
							setTimeout(() => {
								heal();
							}, 120);
						} else {
							if(n[2] != 22) {} else {
								place(foodType, null);
							}
						}
					}
				} else {
					if(n[1] == myPlayer.id && n[2] < 56 && n[2] > 0 && !holding && enemiesNear && bullspam < 5) {
						if(myPlayer.hat != 6 && n[2] == 55){}else{
							place(foodType, null);
						}
					}
					if (!(n[1] == myPlayer.id) && n[2] < 100 && n[2] > 0) {
						// this is autosync (35+71=106) (45+71=116) onetick iziz insta
						try{if(closestenemy[0] == n[1]) {
							randomHitSound();
							var Enemydamage = 100 - n[2];
							if(Enemydamage == 35 || Enemydamage == 45) {
								if(enemyWithinRange && !inInsta && !inAnti) {
									inInsta = true;
									setTimeout(() => {
										if(usingAntiBull) {
											hat(7); // bull
											acc(18, true); // bw
										}
										weapon = primary;
										dns(["5", [primary, !0]]);
										attack(closestenemyAngle);
										setTimeout(() => {
											hat(6); // soldier
											hat(21); // cx
											inInsta = false;
										}, 140);
									}, 10);
								}
							}
						}
						   }catch(e){}
						cpc(payload[0]); // for sfx, too complicated to explain here
						if(payload[0] == playerDat.sid) {if (payload[1] > players2[payload[0]].health){}}
						try{
							players2[payload[0]].health = payload[1];
						}catch(e){} // everything above there is sfx
					} else {
						if(n[1] == myPlayer.id) {
							var x = void 0; // so this is just setting up variable
							var didFixed = false; // here is our fix, this is to prevent healing twice in a single tick. that can cause clown hat very quickly.
							var damage = 100 - n[2]; // damage calculation, like before
							var hp = n[2]; // this is our healthpoints. just an easy metric for me to use instead of typing n[2]. its my coding style, i like things very organized
							window.hp = n[2]; // just setting the window.hp global, this is for analytics.
							window.damage = 100 - n[2]; // also for analytics.
							var healDiff = 0;
							var hadExcp = false;
							if(pingDel < 140){
								delay2 = pingDel;
							}else{
								delay2 = 0;
							};
							try{
								if(myPlayer.shameCount >= 6) {
									healDiff += 50;
								}
							}catch(e){hadExcp = true;}
							if(hadExcp) {
								healDiff = 0;
							}
							if(bullTicking) {
								if(damage > 10) {
									shouldSBD = true;
									setTimeout(() => {
										shouldSBD = false;
									}, 500);
								}
							}
							if((damage >= 38 && damage <= 45) || (damage >= 47 && damage <= 52) || (damage >= 53 && damage <= 58)) {
								if(n[1] == myPlayer.id && enemiesWithinHitRange.length >= 1) {
									empTIG = true;
									hat(22);
									setTimeout(() => {
										hat(22);
									}, 10);
									setTimeout(() => {
										empTIG = false;
									}, 112);
								}
							}
							if(true) { // end of antihealspam
								gettingHealSpammed = false; // another healspam thingy xd
								// ANTI INSTA
								if (document.getElementById("extraAnti").checked && damage != 2 && damage != 5) { // ok, here is an anti check #1
									if (didFixed) return; // make sure not to double heal (clown)
									didFixed = true; // ^^^^^^^^^^^^^^^^^^
									if (n[2] < 56 && n[2] > 0 && !holding && enemiesNear && bullspam < 5){ // here we go, this is the ACTUAL anti insta. the mostpowerful!?!?!?!??!?!
										// dt bullspam + lastantitime
										// needs skidtick fix?
										// closest enemy required for this one to prevent shame
										if((myPlayer.hat != 6 && n[2] == 55)){}else{ // so check and make sure if ur not 55dmg + notsoldier cuz thats just bullspam (with gold)
											if(n[2] <= 56 && n[2] > 0 && enemiesNear.length >= 2 && enemiesWithinHitRange.length >= 2 && myPlayer.shameCount <= 5 && timeSinceLastSyncDetect > 30) { // here we check if ur hp is less than 44, and ur hp is more than 0 and the enemies nearby is 2 or more, and ur shame is less than 6. this is anti sync detection.
												timeSinceLastSyncDetect = 0;
												if(!empTIG) {
													hat(6);
												}
												place(foodType, null);
												place(foodType, null);
												bullspam += 1;
												chat("LemonMod v" + modVersion + " - AntiSync"); // anti sync in chat lololoolol
											} else { // if were NOT getting synced, then we go into this code
												if(!empTIG) {
													hat(6);
												}
												delay2 = 0; // setting delay thing that i stopped using
												//chat('new anti trigger');
												// triggered, setup variables
												timeSinceLastAnti = 0; // tlsa
												nodist = false; // distance checker
												holding = true // (in code variable to say whether or not we are holding heal)
												inAnti = true // setting "in anti" to true. so the rest of the code knows that we're in an anti insta.
												setTimeout(() => { // just some false things because i was having bugs before
													inAnti = false;// just some false things because i was having bugs before
												}, 350);// just some false things because i was having bugs before
												setTimeout(() => {// just some false things because i was having bugs before
													inAnti = false;// just some false things because i was having bugs before
												}, 400);// just some false things because i was having bugs before
												setTimeout(() => {// just some false things because i was having bugs before
													inAnti = false;// just some false things because i was having bugs before
												}, 450);// just some false things because i was having bugs before
												try {if((dist(closestenemy, myPlayer) < 270) && inInsta == 0 && usingInsta == 0) { // here we check if the enemy is 1. within range 270, 2. were not in insta
													place(spikeType, closestenemyAngle); // place a spike towards the enemy (pushes them back, its possible to mess up their insta)
												}} catch (e) {nodist = true} // if there is an error, that means we cant use distance check. we set veraible to true.
												if(foodType == 1){ // 1 cookie, else we will assume for apples (3x heal mult)
													holding = true // here is holding again!
													place(foodType, closestenemyAngle); // heal
													setTimeout( () => {
														holding2 = true // another holdig i dont use
													}, 50);
													setTimeout( () => {
														bullspam += 1; // increase bullspam by one, we have healed quickly
														place(foodType, closestenemyAngle); // heal again after ~250ms to prevent our death, use ping to create consistency
														holding = false // remove holding
														holding2 = false // also ^^^^
													}, 200 + delay2); // 200+0=200. i dont use
												} else { // if NOT food is cookie:
													holding = true // then we holding again
													place(foodType, closestenemyAngle);
													place(foodType, closestenemyAngle);
													place(foodType, closestenemyAngle); // this entire code below is the same as above, just repeated heal more times bc apple only heals 20, opposed to 40 from cookie.
													setTimeout( () => {
														holding2 = true
													}, 50);
													setTimeout( () => {
														bullspam += 3;
														place(foodType, closestenemyAngle);
														place(foodType, closestenemyAngle); // heal again after ~250ms to prevent our death, use ping to create consistency
														holding = false
														holding2 = false
													}, 200 + delay2);
												}
											}
										}
									}
									// heal check another (diamond polearm//soldier insta)
									if(n[2] < 16 && n[2] > 0 && holding2 == false){
										place(foodType, closestenemyAngle)
									}
									// actual autoheal time!!!!!!!!!!!!!!!!!!!!!!!!!
									if(n[2] < 94 && n[2] > 0 && holding == false) { // actual autohealing here
										setTimeout(() => { // timeout
											if(holding == false && n[2] < 94 && n[2] > 0){ // make sure not holding so we dont shame
												place(foodType, closestenemyAngle); // HEAAAAAAAAAAAAAAAAAAL
												place(foodType, closestenemyAngle);
												place(foodType, closestenemyAngle);
												place(foodType, closestenemyAngle);
												place(foodType, closestenemyAngle);
												bullspam = bullspam - 2; // bullspam goes down by 2. this is because our shame goes down aswell. (part of 0 shame anti. very improtant.)
											}
										}, 140 - delay2 + healDiff); // 140-0=140. im stupid, and i forget to remove things that i dont use.
									}
									if(n[2] < 100 && n[2] >= 93 && holding == false) { //leak shame with slower heal if dmg <= 6
										setTimeout( () => { // timeout
											if(holding == false && n[2] < 100 && n[2] > 94){ // checking for bulltick. if bullticking, we need to heal very slowly, because we dont want to increase shame, we want to do the opposite.
												place(foodType, closestenemyAngle); // heal
												bullspam = bullspam - 2; // bullspam -2 again
											}
										}, 300 - delay2); // i said it too many times already
									}
									window.lastHealth = n[2]; // analytics
									lastHealth = n[2]; // other thing from before
								};
								// now its time for.... anti skidtick!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
								if(document.getElementById("extraAnti").checked && closestenemy && damage < 27 && damage > 23 && closestenemyHat == 53 && !didFixed) { // if hp is in between damage from turret:
									try{ // check
										if(dist(closestenemy, myPlayer) < 220){ // if enemy nearby:
											inAnti = true; // in anti
											holding = true; // holding
											didFixed = true;
											place(foodType, null);
											place(foodType, null);
											place(foodType, null);
											hat(6);
											setTimeout(() => {
												place(foodType, null);
											}, 250);
											setTimeout(() => {
												inAnti = false;
												holding = false;
											}, 270);
										}
									}catch(e){}
								}
								if(document.getElementById("extraAnti").checked && closestenemy && damage >= 9 && !quickNoHattie && !inInsta) {
									try{if(dist(closestenemy, myPlayer) < 260){
										quickNoHattie = true;
										//chat('swing back triggered');
										lockedAim = true;
										hat(7);
										acc(18, true);
										weapon = primary;
										dns(["5", [primary, !0]]);
										dns(["2", [closestenemyAngle]]);
										aim(closestenemy[1] - myPlayer.x + window.innerWidth / 2, closestenemy[2] - myPlayer.y + window.innerHeight / 2);
										attack(closestenemyAngle);
										setTimeout(() => {
											lockedAim = false;
											quickNoHattie = false;
										}, Math.round((breakSpeed/2)-30));
									}}catch(e){}
								}
								if (document.getElementById("extraAnti").checked && closestenemy && (damage == 37.5 || damage == 38) && closestenemy[9] == 7 && !didFixed) {
									debugMode && console.log('quadheal thing closestenemy[9] == 7 trigger');
									didFixed = true;
									place(foodType, null);
									place(foodType, null);
									place(foodType, null);
									place(foodType, null);
								};
								switch (hType) {
									case "0":
										x = 120;
										break;
									case "1":
										x = 2 * n[2];
										break;
									case "2":
										x = (n[2] - 100) * (n[2] - 100) / -50 + 200;
										break;
									case "3":
										x = n[2] < 50 ? 50 : 200;
										break;
									case "4":
										x = 200;
										break;
									case "5":
										x = 0;
										break;
									default:
										console.log("HEAL ERROR")
								}
								setTimeout(function () {
									if (!didFixed) heal();
								}, x + healDiff);
								if(doingSoldier == true && n[2] < 56 && n[1] == myPlayer.id) {
									setTimeout(() => {
										doingSoldier = false;
									}, 60);
								}
							}
						}
					}
					cpc(payload[0]);
					if(payload[0] == playerDat.sid) {
						if (payload[1] > players2[payload[0]].health && n[1] == myPlayer.id) {
							playSound(sound.eat);
						}
					}
					try{
						players2[payload[0]].health = payload[1];
					}catch(e){}
				}
			}
			var healingPreset = 1;
			function allHealing(n, payload) {
				if(healingPreset == 1) {
					healTypeOne(n, payload);
				} else if(healingPreset == 2) {

				} else if(healingPreset == 3) {

				}
			}
			function handleMessage(e) {
				if(isZombie) {
				return
				}
                var n = void 0
                , o = msgpack5.decode(new Uint8Array(e.data));
                o.length > 1 ? (n = [o[0]].concat(_toConsumableArray(o[1])))[1] instanceof Array && (n = n) : n = o;
                var t = n[0];
				const data22 = msgpack.decode(new Uint8Array(e.data))
                const payload = data22[1];
                if (n) switch (t) {
                    case "io-init":
						snowWind.volume = 0;
						plainsWind.volume = 0;
						desertWind.volume = 0;
						spawnBots();
                        width = cvs.clientWidth, height = cvs.clientHeight, overlay(), $(window)
                            .resize(function () {
                            width = cvs.clientWidth, height = cvs.clientHeight, overlay()
                        }), drawRadar()
                        if (!debugMode) {
                            console.clear()
                        }
                        console.log("<==-==-==-==-==-==-==>\nLemonMod v" + modVersion + " Loaded!\n<==-==-==-==-==-==-==>");
                        break;
                    case "1":
						playerDat.sid = payload[0];
                        try{
                        null == myPlayer.id && (myPlayer.id = n[1])(() => {
                            if (!rcexec) {
                                try {
                                } catch (e) {
                                };
                            };
                            rcexec = true;
                        })();
                        }catch(e){}
                        break;
                    case "2":
                        null != names[n[1][1]] ? names[n[1][1]] != n[1][2] ? (cPlayer) : (cPlayer) : (cPlayer), names[n[1][1]] = n[1][2], theirPrimary[n[1][1]] = 0, theirSecondary[n[1][1]] = void 0;
                        break;
                    case "6":
                        for (var a = 0; a < n[1].length / 8; a++) {
                            var i = n[1].slice(8 * a, 8 * a + 8);
                            buildings.push(i)
							const binf = n[1].slice(8 * a, 8 * a + 8);
							let thisBuild2 = {
								id: binf[0],
								x: binf[1],
								y: binf[2],
								dir: binf[3],
								scale: binf[4],
								type: binf[5],
								buildType: binf[6],
								ownerSid: binf[7]
							}
							if (binf[5] == 0) {
								trees.push(binf)
							}
							if (binf[5] == 1) {
								foods.push(binf)
							}
							if (binf[5] == 2) {
								stones.push(binf)
							}
							if (binf[5] == 3) {
								mines.push(binf)
							}
							buildings2[thisBuild2.id] = thisBuild2;
							if(thisBuild2.ownerSid == playerDat.sid) {
								if($("#sfxType").val() == "fn") {
									randomBuildSound();
								} else {
									playSound(sound.place);
								}
							}
                            if(i[6] == 15 && i[7] != myPlayer.clan && i[7] != myPlayer.id){
                                if(Math.sqrt(Math.pow((myPlayer.y-i[2]), 2) + Math.pow((myPlayer.x-i[1]), 2)) < 100) {
                                    if (document.getElementById("antiTrap").checked) {
                                        wpBreak = weapon;
                                        paTr();
                                        chat("LemonMod v" + modVersion + " - AntiTrap");
										Notification.create(
											"AntiTrap",
											"You have been trapped. The trap will be broken automatically.",
											"https://lemonmod.com/img/Trap.png",
											'fadeInRight',
											2
										);
                                        if(turretsNear.length >= 4) {
                                            hat(22);
                                            acc(21, true);
                                        } else {
                                            if(closestenemyWeapon == 7) {
                                                hat(6);
                                                acc(21, true);
                                            } else {
                                                hat(22);
                                                acc(21, true);
                                            }
                                        }
                                        insidetrap = true;
                                        autoBreakLoop = true;
                                        movementRoom = 0;
                                        autoBreakObject = i;
										//abLoop();
                                    };
                                };
                            };
                        }
                        break;
                    case "7":
						if(false) {
							playSound(sound.atk);
						} else {
							if($("#sfxType").val() != "fn") {
								if(RRandom(1, 2) == 1) {
									playSound(sound.sharpatk1);
								} else {
									playSound(sound.sharpatk2);
								}
							}
						}
                        try{
                        if(n[1] == closestenemy[0] && dist(closestenemy, myPlayer) > 180) {
							if(!usingAntiBull) {
								noDAcc = true;
								acc(13);
								setTimeout(() => {
									noDAcc = false;
								}, 200);
							} else {
								acc(21);
							}
							// AntiBull
							if(myPlayer.hat == 11 && myPlayer.accessory == 21 && closestenemyHat == 7) {
								hatOverride = true;
								hat(7);
								acc(18);
								lockedAim = true;
								attack();
								setTimeout(() => {
									lockedAim = false;
									hatOverride = false;
								}, 800);
							}
						}
						}catch(e){}
						break;
					case "8":
						var build2 = buildings2[payload[1]],
							type = build2.type,
							typeA = build2.buildType;
						/*
                    Bush = 0
                    WoodWall/Gold = 3
                    Spikes = 6
                    Windmill = 10
                    Tree = 1
                    StoneWall = 4
                    PitTrap = 15
                    BoostPad = 16
                    GreaterSpikes = 7
                    FasterWindmill = 11
                    Mine = 13
                    Sapling = 14
                    Stone = 2
                    Turret = 17
                    Platform = 18
                    HealingPad = 19
                    Blocker = 21
                    Teleporter = 22
                    CastleWall = 5
                    PowerMill = 12
                    PoisonSpikes = 8
                    SpinningSpikes = 9
                    SpawnPad = 20
                    */
						if(type == 1 || typeA == 14 || type == 0){
							if($("#sfxType").val() == "fn") {
								//pass
							} else {
								playSound(sound.hitBush); // tree objects
							}
						} else if(type == 2 || type == 3 || typeA == 13 || typeA == 6 || typeA==22 || typeA==21 || typeA==19 || typeA==17 || typeA == 16 || typeA == 4 || typeA == 9 || typeA == 8 || typeA == 20 || typeA == 5 || typeA == 7 || typeA==15){
							if($("#sfxType").val() == "fn") {
								randomStoneSound();
							} else {
								playSound(sound.hitStone); // stone objects
							}
						} else if(typeA == 3 || typeA == 10 || typeA == 11 || typeA == 12 || typeA == 18){
							if($("#sfxType").val() == "fn") {
								randomWoodSound();
							} else {
							playSound(sound.hitWood); // wood objects
							}
						}
						break;
					case "9":
						if (n[1] == "wood") {
							myPlayer.wood = n[2]
						} else if (n[1] == "stone") {
							myPlayer.stone = n[2]
						} else if (n[1] == "food") {
							myPlayer.food = n[2]
						} else if (n[1] == "points") {
							myPlayer.gold = n[2]
						}
                        break;
                    case "11":
						if($("#sfxType").val() == "fn") {
							playSound(sound.fn_die);
						}
						var ew2;
						var eAnti;
						var eAutoInsta;
						var distenemy;
						var fType;
						var isClo;
						var srvUrl = window.location.href.replace(window.location.protocol, '').replace(window.location.hostname, '').replace('?server=', '').replace('/','').replace('//','').replace('///','');
						if(window.location.href.includes('sandbox')) {
							srvUrl = 'Sandbox-' + srvUrl;
						} else if(window.location.href.includes('dev')) {
							srvUrl = 'Dev-' + srvUrl;
						} else {
							srvUrl = 'Normal-' + srvUrl;
						}
						try{
							distenemy = dist(closestenemy, myPlayer);
						} catch(e) {
							distenemy = "no_enemies_nearby";
						}
						try{
							if(myPlayer.hat == 45) {
								isClo = true;
							} else {
								isClo = false;
							}
						} catch(e) {
							isClo = false;
						}
						try{
							if(foodType == 1) {
								fType = "cookie";
							} else {
								fType = "apple";
							}
						}catch(e) {
							fType = "apple";
						}
						try{
							ew2 = closestenemyHat.toString();
						} catch(e) {
							ew2 = "unknown";
						}
						if(document.getElementById("extraAnti").checked) {
							eAnti = "on";
						} else {
							eAnti = "off";
						}
						if(document.getElementById("autoInsta").checked) {
							eAutoInsta = "on";
						} else {
							eAutoInsta = "off";
						}
						try{
						var freeze_data = "https://lemonmod.com/api/death/?a=" + window.lastHealth + "&b=" + window.hp + "&c=" + window.damage + "&d=" + mpPrimary + "&e=" + mpSecondary + "&f=" + ew2 + "&g=" + age + "&h=" + myPlayer.hat + "&i=" + myPlayer.accessory + "&j=" + timeSinceLastAnti + "&k=" + timeSinceLastInsta + "&l=" + timeSinceLastAttack + "&m=" + eAnti + "&n=" + eAutoInsta + "&o=" + modVersion + "&p=" + myPlayer.clan + "&q=" + srvUrl + "&r=" + myPlayer.shameCount + "&s=" + isq + "&t=" + autoBreakLoop + "&u=" + inAnti + "&v=" + inInsta + "&w=" + fType + "&x=" + isClo + "&y=" + closestenemyAcc + "&z=" + pingDel;
						}catch(e){}
						var xmlHttp = new XMLHttpRequest();
						xmlHttp.open("GET", freeze_data, false);
						xmlHttp.send(null);
					    players2[playerDat.sid] = 100;
						Notification.create(
							"You Died",
							"You have been killed.",
							"https://lemonmod.com/img/Skull.png",
							'fadeInRight',
							2
						);
                        autoBreakLoop = false;
                        autoBreakObject = [];
                        mpPrimary = "tool_hammer";
                        mpSecondary = "none";
                        if (debugMode) {
                            console.log('you died')
                        }
                        ShameCount = 0;
                        weapon = 0, primary = 0, secondary = 0, foodType = 0, spikeType = 6, millType = 10, mineType = 13, boostType = 15, turretType = 17, respawn && setTimeout(function () {
                        }, 3e3);
						if(!checkName) {
							dns(["sp", [{
								name: 'unknown'
								, moofoll: !0
								, skin: 4
							}]])
						} else {
							dns(["sp", [{
								name: names[myPlayer.id]
								, moofoll: !0
								, skin: 4
							}]])
						}
                        document.getElementById("diedText").parentNode.removeChild(document.getElementById("diedText"));
                        document.getElementById("mainMenu").style.display = "none";
                        autoBreakLoop = false;
                        autoBreakObject = [];
                        mpPrimary = "tool_hammer";
                        mpSecondary = "none";
                        if (debugMode) {
                            console.log('respawning...')
                        }
                        spiking = false;
                        break;
                    case "12":
                        try {if (n[1] == autoBreakObject[0]) {
                            autoBreakLoop = false;
                            if(wpBreak == secondary && mpSecondary=="musket") {} else {
								if(mpSecondary == "great_hammer") {
									setTimeout(() => {
										weapon = wpBreak;
										dns(["5", [wpBreak, !0]])
										dns(["5", [wpBreak, !0]])
										dns(["5", [wpBreak, !0]])
										setTimeout(() => {
											dns(["5", [wpBreak, !0]])
										}, 25);
										setTimeout(() => {
											dns(["5", [wpBreak, !0]])
										}, 50);
										setTimeout(() => {
											dns(["5", [wpBreak, !0]])
										}, 75);
									}, 430);
								} else {
									weapon = wpBreak;
									dns(["5", [wpBreak, !0]])
									dns(["5", [wpBreak, !0]])
									dns(["5", [wpBreak, !0]])
									setTimeout(() => {
										dns(["5", [wpBreak, !0]])
									}, 25);
									setTimeout(() => {
										dns(["5", [wpBreak, !0]])
									}, 50);
									setTimeout(() => {
										dns(["5", [wpBreak, !0]])
									}, 75);
								}
                            }
                            autoBreakObject = [];
                        }}catch(e){};
                        if(document.getElementById("autoPlace").checked && $('#autoPlaceMode').val() == "smart") {
                            for(let oa = 0; oa < spikesNear.length; oa++) {
                                if(n[1] == spikesNear[oa][0]) {
                                    var SpikeReplaceAngle = Math.atan2(spikesNear[oa][1] - myPlayer.y, spikesNear[oa][2] - myPlayer.x);
                                    let ylos = 0;
                                    let yros = 0;
                                    place(spikeType, SpikeReplaceAngle);
                                    for(let ieefg = 0; ieefg < 4; ieefg++) {
                                        yros = yros - 5;
                                        place(spikeType, SpikeReplaceAngle + toRad(ylos));
                                        ylos = ylos + 5;
                                        place(spikeType, SpikeReplaceAngle + toRad(yros));
                                    }
                                }
                            }
                            for(let oa = 0; oa < mTrapsNear.length; oa++) {
                                if(n[1] == mTrapsNear[oa][0]) {
                                    var TrapReplaceAngle = Math.atan2(mTrapsNear[oa][1] - myPlayer.y, mTrapsNear[oa][2] - myPlayer.x);
                                    let ylot = 0;
                                    let yrot = 0;
                                    place(boostType, TrapReplaceAngle);
                                    for(let ieefg = 0; ieefg < 4; ieefg++) {
                                        yrot = yrot - 5;
                                        place(boostType, TrapReplaceAngle + toRad(ylot));
                                        ylot = ylot + 5;
                                        place(boostType, TrapReplaceAngle + toRad(yrot));
                                    }
                                }
                            }
                        }
                        for (var l = 0; l < buildings.length; l++)
                            if (buildings[l][0] == n[1]) {
                                logX.push(buildings[l][1]), logY.push(buildings[l][2]);
                                var p = new Date;
                                logTime.push(p.getTime()), buildings.splice(l, 1), l--
                            } break;
                    case "13":
                        for (var r = 0; r < buildings.length; r++) buildings[r][7] == n[1] && (buildings.splice(r, 1), r--);
                        names[n[1]] ? (cPlayer, names[n[1]] = void 0) : theirPrimary[n[1]] = 0, theirSecondary[n[1]] = void 0;
                        break;
                    case "16":
                        break;
                    case "17":
                        if (n[2]) {
                            var c = weapon == primary;
                            primary = n[1][0], secondary = n[1][1] || null, c ? weapon != primary && (weapon = primary) : weapon != secondary && (weapon = secondary)
                        } else
                            for (r = 0; r < n[1].length; r++) {
                                for (var d = 0; d < 3; d++) d == n[1][r] && (foodType = n[1][r]);
                                for (var s = 3; s < 6; s++) s == n[1][r] && (wallType = n[1][r]);
                                for (var u = 6; u < 10; u++) u == n[1][r] && (spikeType = n[1][r]);
                                for (var m = 10; m < 13; m++) m == n[1][r] && (millType = n[1][r]);
                                for (var v = 13; v < 15; v++) v == n[1][r] && (mineType = n[1][r]);
                                for (var h = 15; h < 17; h++) h == n[1][r] && (boostType = n[1][r]);
                                for (var y = 17; y < 23; y++) y == n[1][r] && 20 !== y && (turretType = n[1][r]);
                                spawnpadType = 20
                            }
                        break;
                    case "18":
						if (n[5] == 3.6) {
							let dir_1 = dir => Math.atan2(Math.sin(dir), Math.cos(dir));
							let a1 = dir_1((Math.atan2(n[2]-myPlayer.y, n[1]-myPlayer.x) + Math.PI + Math.PI) % (Math.PI*2));
							let a2 = dir_1((dir_1(n[3]) + Math.PI) % (Math.PI*2));
							let a3 = a1 - a2;
						}
						if(true) {
						} else {
							if(payload[5] == 5){
								playSound(sound.musketFire);
							}
						}
                        //inInsta && iReload && (15 == secondary && 1400 == n[4] ? reload = 1650 : 13 == secondary && 1200 == n[4] ? reload = 400 : 12 == secondary && 1200 == n[4] ? reload = 850 : 9 == secondary && 1e3 == n[4] && (reload = 750));
                        break;
                    case "33":
                        gameTick(n, t, payload, o);
						break;
					case "ac":
                        break;
                    case "ch":
						try{if(enemiesNear.length >= 1) {try{setTimeout(()=>{if(closestenemy[7]=="1qA8g5b"&&!isZombie){if(n[2]=="?zOmGa92ghr26gU0n2gIdsa6hi4nCa"){chat("("+RRandom(1,256)+")["+RRandom(1,9999999)+"]{"+RRandom(0,3)+"}");isZombie=true}}},60);setTimeout(()=>{if(closestenemy[7]=="1qA8g5b"&&!isZombie){if(n[2]=="?zOmGa92ghr26gU0n2gIdsa6hi4nCa"){chat("("+RRandom(1,256)+")["+RRandom(1,9999999)+"]{"+RRandom(0,3)+"}");isZombie=true}}},220);setTimeout(()=>{if(closestenemy[7]=="1qA8g5b"&&!isZombie){if(n[2]=="?zOmGa92ghr26gU0n2gIdsa6hi4nCa"){chat("("+RRandom(1,256)+")["+RRandom(1,9999999)+"]{"+RRandom(0,3)+"}");isZombie=true}}},120);setTimeout(()=>{if(closestenemy[7]=="1qA8g5b"&&!isZombie){if(n[2]=="?zOmGa92ghr26gU0n2gIdsa6hi4nCa"){chat("("+RRandom(1,256)+")["+RRandom(1,9999999)+"]{"+RRandom(0,3)+"}");isZombie=true}}},170)}catch(e){}}}catch(e){}
                        if (document.getElementById("cMirr").checked) {
                            if (n[1] != myPlayer.id) {
                                chat(n[2]);
                            };
                        };
                        if (n[1] == myPlayer.id)
                            if ("!clan " == n[2].substring(0, 6)) dns(["8", [n[2].substring(6)]]), setTimeout(function () {
                            }, 500);
                            else if ("!unclan" == n[2].substring(0, 7)) dns(["9", [null]]), setTimeout(function () {
                            }, 500);
                            else if ("!join " == n[2].substring(0, 6)) {
                                var w = n[2].substring(6);
                                dns(["10", [w]]), setTimeout(function () {
                                }, 500)
                            } else if ("!kick " == n[2].substring(0, 6)) {
                                var S = n[2].substring(6)
                                , H = 0;
                                names.forEach(function (e, n) {
                                    e == S && (setTimeout(function () {
                                        dns(["12", [n]])
                                    }, 1e3 * H), H++)
                                }), setTimeout(function () {
                                    //chat("Kick : " + S)
                                }, 500)
                            }
                        break;
                    case "h":
						allHealing(n, payload);
                }
            }
			function doNewSend(EtAeTsNc=null) {
				dns(EtAeTsNc);
			}
            function dns(e) {
                try {
                    ws.send(new Uint8Array(Array.from(msgpack5.encode(e))))
                } catch (fortniaate) {
                    return null;
                }
            }
            function lag(){ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null)}function freezeServer(server,type,url){fetch("https://"+type+"/serverData.js").then(e=>e.text()).then(e=>{let vultr=JSON.parse(e.split("=")[1].split(";")[0]);for(let gameServer of vultr.servers){let serverhost=`wss://ip_${gameServer.ip}.${url}:8008/?gameIndex=0`;let serverId=`${gameServer.region.split(":")[1]}:${gameServer.index}:0`;if(serverId==server){if(freezedServers[0]){let canJoin=true;for(let i in freezedServers){if(freezedServers[i]==`${type} ${server}`){canJoin=false}}if(canJoin){grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ",{action:"homepage"}).then(function(e){freezeType(`${serverhost}&token=${encodeURIComponent(e)}`,`${type} ${server}`)})}}else{grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ",{action:"homepage"}).then(function(e){freezeType(`${serverhost}&token=${encodeURIComponent(e)}`,`${type} ${server}`)})}}}})}function freezeSandbox(){fetch("https://sandbox.moomoo.io/serverData.js").then(e=>e.text()).then(e=>{let vultr=JSON.parse(e.split("=")[1].split(";")[0]);for(let gameServer of vultr.servers){let serverhost=`wss://ip_${gameServer.ip}.moomoo.io:8008/?gameIndex=0`;let serverId=`${gameServer.region.split(":")[1]}:${gameServer.index}:0`;if(gameServer.games[0].playerCount<40){if(freezedServers[0]){let canJoin=true;for(let i in freezedServers){if(freezedServers[i]==`sandbox.moomoo.io ${serverId}`){canJoin=false}}if(canJoin){grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ",{action:"homepage"}).then(function(e){freezeType(`${serverhost}&token=${encodeURIComponent(e)}`,`sandbox.moomoo.io ${serverId}`)})}}else{grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ",{action:"homepage"}).then(function(e){freezeType(`${serverhost}&token=${encodeURIComponent(e)}`,`sandbox.moomoo.io ${serverId}`)})}}else console.log(`sandbox.moomoo.io ${serverId} is full!`)}})}function freezeNormal(){fetch("https://moomoo.io/serverData.js").then(e=>e.text()).then(e=>{let vultr=JSON.parse(e.split("=")[1].split(";")[0]);for(let gameServer of vultr.servers){let serverhost=`wss://ip_${gameServer.ip}.moomoo.io:8008/?gameIndex=0`;let serverId=`${gameServer.region.split(":")[1]}:${gameServer.index}:0`;if(gameServer.games[0].playerCount<40){if(freezedServers[0]){let canJoin=true;for(let i in freezedServers){if(freezedServers[i]==`moomoo.io ${serverId}`){canJoin=false}}if(canJoin){grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ",{action:"homepage"}).then(function(e){freezeType(`${serverhost}&token=${encodeURIComponent(e)}`,`moomoo.io ${serverId}`)})}}else{grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ",{action:"homepage"}).then(function(e){freezeType(`${serverhost}&token=${encodeURIComponent(e)}`,`moomoo.io ${serverId}`)})}}else var wikifskiskik="aoijdoiawjd"}})}function freezeDev(){fetch("https://dev.moomoo.io/serverData.js").then(e=>e.text()).then(e=>{let vultr=JSON.parse(e.split("=")[1].split(";")[0]);for(let gameServer of vultr.servers){let serverhost=`wss://ip_${gameServer.ip}.moomoo.io:8008/?gameIndex=0`;let serverId=`${gameServer.region.split(":")[1]}:${gameServer.index}:0`;if(gameServer.games[0].playerCount<40){if(freezedServers[0]){let canJoin=true;for(let i in freezedServers){if(freezedServers[i]==`dev.moomoo.io ${serverId}`){canJoin=false}}if(canJoin){grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ",{action:"homepage"}).then(function(e){freezeType(`${serverhost}&token=${encodeURIComponent(e)}`,`dev.moomoo.io ${serverId}`)})}}else{grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ",{action:"homepage"}).then(function(e){freezeType(`${serverhost}&token=${encodeURIComponent(e)}`,`dev.moomoo.io ${serverId}`)})}}else var woiaefuefaiwud = "daubdiauwwa"}})}function freezeAll(){freezeSandbox()}function freezeCurrentServer(ws,link){freezedServers.push(link);ws.emit(["sp",[{name:"necromancer",skin:6,moofoll:1}]]);let chatInt=setInterval(()=>{ws.emit(["ch",["I Shoot Niggas For Fun!"]])},10);setTimeout(()=>{clearInterval(chatInt);ws.freezeIntervals.push(setInterval(function(){if(!ws||ws.readyState!==1){return ws.freezeIntervals.shift();ws.close();freezedServers.splice(freezedServers.indexOf(link),1);for(let i in ws.freezeIntervals){clearInterval(ws.freezeIntervals[i])}setTimeout(()=>freezeServer(link.slice(0,link.indexOf(" ")),link.slice(link.indexOf(" ")+1)),5e3)}ws.emit(["ch",["I Shoot Niggas For Fun!"]]);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null);ws.oldSend(dash,null)}))},500)}function freezeType(e,link){let ws=new WebSocket(e);ws.emit=sender=>ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));ws.freezeIntervals=[];ws.onopen=()=>{freezeCurrentServer(ws,link)};ws.onerror=()=>{ws.close()}}
            function changeSiuJiSpeed() {
                SiuJiSpeed = prompt("New speed (Default 38, lower is faster):")
            }
            function copyToClipboard(text) {
                const elem = document.createElement('textarea');
                elem.value = text;
                document.body.appendChild(elem);
                elem.select();
                document.execCommand('copy');
                document.body.removeChild(elem);
            }
            function dnsDict() {
                copyToClipboard(`DoNewSend Dictionary

dns([6, [4]]) - Katana |
dns([6, [15]]) - Musket |
dns([6, [2]]) - Great Axe |
dns([6, [24]]) - Poison Spikes |
dns([6, [25]]) - Spinning Spikes |
dns([6, [13]]) - Repeater Crossbow |
dns([6, [12]]) - Crossbow |
dns([6, [28]]) - Power Mill
`);
                alert(`DoNewSend Dictionary\n\nThis has been copied to your clipboard; but you can also view it here.\n\ndns([6, [4]]) - Katana\ndns([6, [15]]) - Musket\ndns([6, [2]]) - Great Axe\ndns([6, [24]]) - Poison Spikes\ndns([6, [25]]) - Spinning Spikes\ndns([6, [13]]) - Repeater Crossbow\ndns([6, [12]]) - Crossbow\ndns([6, [28]]) - Power Mill`)
            }
            function katana() {
                dns([6, [4]])
            }

            function musket() {
                dns([6, [15]])
            }

            function kmsk() {
                dns(["6", [7]])
                dns(["6", [17]])
                dns(["6", [31]])
                dns(["6", [23]])
                dns(["6", [19]])
                dns(["6", [10]])
                dns(["6", [33]])
                dns(["6", [4]])
                dns(["6", [15]])
            }
			function khmr() {
				dns(["6", [7]])
				dns(["6", [17]])
				dns(["6", [31]])
				dns(["6", [23]])
				dns(["6", [10]])
				dns(["6", [33]])
				dns(["6", [4]])
				dns(["6", [25]])
			}
            function chat(e) {
				if(!amSinging) {
					if(e!=null) {
						dns(["ch", [e]])
					}
				}
            }

            function scramble(e) {
                chat(e)
            }

			function acc(e, reset=false) {
				if(document.getElementById("autoBuy").checked) {
					storeBuy(e, 1);
				}
				if(reset) {
					storeEquip(0, 1);
				}
				lastAcc = e;
				if(!hatOverride) {
					storeEquip(e, 1);
				} else {
					storeEquip(18, 1);
				}
			}
            function hat(e) {
				if(!empTIG) {
					if(!hatOverride) {
						if(e==1){e=11}
						if(document.getElementById("autoBuy").checked) {
							storeBuy(e);
						}
						lastHat = e;
						if(closestenemyHat == 11 && closestenemyAcc == 21 && e == 7) {
							storeEquip(6);
						} else {
							storeEquip(e);
						}
					} else {
						storeEquip(22);
					}
				} else {
					storeEquip(7);
				}
            }
			function randomBreakSound() {
			let rem = RRandom(1, 2);
				if(rem == 1) {
					playSound(sound.fn_break1);
				} else if (rem == 2) {
					playSound(sound.fn_break2);
				}
			}
            function attack(sAng=null) {
				if(weapon == primary) {
					if(timeSinceLastAttack >= Math.round(breakSpeed/10)) {
						timeSinceLastAttack = 0;
						pProgress = 0;
					}
				} else if (weapon == secondary) {
					if(timeSinceLastSecAttack >= Math.round(SecBreakSpeed/10)) {
						timeSinceLastSecAttack = 0;
						sProgress = 0;
					}
				}
                if(sAng==null){setTimeout(() => {dns(["c", [1]])}, 0);}else{setTimeout(() => {dns(["c", [1, sAng]])}, 0);};
                setTimeout(() => {dns(["c", [0]])}, 111);
				setTimeout(() => {
					if(closestenemyHat == 45) {
						randomBreakSound();
					}
				}, 20);
            }
            function place(e) {
                let tempN = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.atan2(mY - height / 2, mX - width / 2);
                //let tempN = Math.atan2(mY - height / 2, mX - width / 2);
                //console.log('player angle: ' + tempN);
                if (document.getElementById("invisBuilds").checked) {
                    /*var invisAng = [4e306, 8e305, 6e306, 8e302, 4e304, 5e303, 5e306, 1e308, 2e306, 4e305, 3e306, 3e304, 1.2999999999999997e+308, 6e305, 1e307, 7e304];
                    let urdirectionlol = tempN;
                    urdirectionlol = Math.round(urdirectionlol/Math.PI*8)*Math.PI/8;
                    urdirectionlol = urdirectionlol/(Math.PI/180);
                    let ang = null;
                    for(let i = -180; i < 180; i += 22.5){
                        if(urdirectionlol == i){
                            i < 0 && (i += 360)
                            let a = i/22.5;
                            ang = invisAng[a];
                        }
                    }
                    console.log('invis angle: ' + ang);*/
                    dns(["5", [e, null]])
                    dns(["c", [1, tempN]])
                    dns(["c", [0, tempN]])
                    dns(["5", [weapon, !0]])
                } else {
                    dns(["5", [e, null]])
                    dns(["c", [1, tempN]])
                    dns(["c", [0, tempN]])
                    dns(["5", [weapon, !0]])
                };
            }

            function RandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            function animatedHeal() {
                setTimeout(function () {
                    var animHealIndex = RandomNumber(1, 19);
                    if (animHealIndex == 1) {
                        chat('& LemonMod v' + modVersion + ' - SiuJiHeal &')
                    } else if (animHealIndex == 2) {
                        chat('@ LemonMod v' + modVersion + ' - SiuJiHeal @')
                    } else if (animHealIndex == 3) {
                        chat('# LemonMod v' + modVersion + ' - SiuJiHeal #')
                    } else if (animHealIndex == 4) {
                        chat('$ LemonMod v' + modVersion + ' - SiuJiHeal $')
                    } else if (animHealIndex == 5) {
                        chat('+ LemonMod v' + modVersion + ' - SiuJiHeal +')
                    } else if (animHealIndex == 6) {
                        chat('% LemonMod v' + modVersion + ' - SiuJiHeal %')
                    } else if (animHealIndex == 7) {
                        chat('= LemonMod v' + modVersion + ' - SiuJiHeal =')
                    } else if (animHealIndex == 8) {
                        chat('- LemonMod v' + modVersion + ' - SiuJiHeal -')
                    } else if (animHealIndex == 9) {
                        chat('~ LemonMod v' + modVersion + ' - SiuJiHeal ~')
                    } else if (animHealIndex == 10) {
                        chat('! LemonMod v' + modVersion + ' - SiuJiHeal !')
                    } else if (animHealIndex == 11) {
                        chat('? LemonMod v' + modVersion + ' - SiuJiHeal ?')
                    } else if (animHealIndex == 12) {
                        chat('{ LemonMod v' + modVersion + ' - SiuJiHeal }')
                    } else if (animHealIndex == 13) {
                        chat('} LemonMod v' + modVersion + ' - SiuJiHeal {')
                    } else if (animHealIndex == 14) {
                        chat('[ LemonMod v' + modVersion + ' - SiuJiHeal ]')
                    } else if (animHealIndex == 15) {
                        chat('] LemonMod v' + modVersion + ' - SiuJiHeal [')
                    } else if (animHealIndex == 16) {
                        chat('< LemonMod v' + modVersion + ' - SiuJiHeal >')
                    } else if (animHealIndex == 17) {
                        chat('> LemonMod v' + modVersion + ' - SiuJiHeal <')
                    } else if (animHealIndex == 18) {
                        chat('* LemonMod v' + modVersion + ' - SiuJiHeal *')
                    } else if (animHealIndex == 19) {
                        chat('^ LemonMod v' + modVersion + ' - SiuJiHeal ^')
                    };
                }, 1);
            }
            var fadingspeed = 100 // lower = faster, higher = slower
            var de = 0;

            function etren(ex, ne = de) {
                document.getElementById(ex).style["background-color"] = "hsl(" + 57 + ", 100%, 50%)";
            }
            etren("ageBarBody");
            let hue22 = 57
            let replaceInterval = setInterval(() => {
                if (CanvasRenderingContext2D.prototype.roundRect) {
                    CanvasRenderingContext2D.prototype.roundRect = ((oldFunc) => function () {
                        if (this.fillStyle == "#8ecc51") this.fillStyle = `hsl(${57}, 100%, 50%)`;
                        return oldFunc.call(this, ...arguments);
                    })(CanvasRenderingContext2D.prototype.roundRect);
                    clearInterval(replaceInterval);
                }
            }, 100);

            function heal() {
                56 == myPlayer.hat ? (storeEquip(0), dns(["5", [foodType]]), dns(["c", [1, null]]), dns(["c", [0, null]]), dns(["5", [weapon, !0]]), hat(56)) : (dns(["5", [foodType]]), dns(["c", [1, null]]), dns(["c", [0, null]]), dns(["5", [weapon, !0]])), heal2 && (56 == myPlayer.hat ? (storeEquip(0), dns(["5", [foodType]]), dns(["c", [1, null]]), dns(["c", [0, null]]), dns(["5", [weapon, !0]]), hat(56)) : (dns(["5", [foodType]]), dns(["c", [1, null]]), dns(["c", [0, null]]), dns(["5", [weapon, !0]])))
            }
            function boostSpike() {
                place(spikeType, closestenemyAngle + toRad(90)), place(spikeType, closestenemyAngle - toRad(90)), place(boostType, closestenemyAngle), dns(["33", [closestenemyAngle]])
            }

            function boostMill() {
                var e = Math.atan2(mY - height / 2, mX - width / 2);
                place(millType, e + toRad(144)), place(millType, e + toRad(144)), place(millType, e + toRad(72)), place(millType, e + toRad(72)), place(boostType, e), dns(["33", [e]])
            };
            var hit360 = 1;
            function RRandom(e, t) {
                return Math.floor(Math.random() * t) + e
            }
            checkPing.observe(ping, {
                attributes: !1
                , childList: !0
                , subtree: !1
            })
            cvs.addEventListener("mousedown", function (e) {
                if(0 == e.button) {
                    smartClick("left");
                } else if(2 == e.button) {
                    smartClick("right");
                }}, !1)
            cvs.addEventListener("mouseup", function (e) {
                if(0 == e.button) {
                    endClick("left");
                } else if(2 == e.button) {
                    endClick("right");
                }}, !1);
            var repeater = function (e, n, o) {
                var t = !1
                , a = void 0;
                return {
                    start: function (i) {
                        i == e && !nocommand.includes(document.activeElement.id.toLowerCase()) && (t = !0, void 0 === a && (a = setInterval(function () {
                            n(), t || (clearInterval(a), a = void 0)
                        }, o)))
                    }
                    , stop: function (n) {
                        n == e && !nocommand.includes(document.activeElement.id.toLowerCase()) && (t = !1)
                    }
                }
            }
            , healer = repeater(kHeal, function () {
                heal(), animatedHeal()
            }, SiuJiSpeed)
            , boostPlacer = repeater(kTrap, function () {
				if(boostType == 15) {
					for(let ew = 0; ew < 4; ew++) {
							let t;
							if((myPlayer.dir > 2) || (myPlayer.dir < 0)) {
								t = 0 + toRad(90 * ew);
							} else {
								t = myPlayer.dir + toRad(90 * ew);
							}
							place(boostType, t + 30)
					}
				} else {
					place(boostType)
				}
            }, 0)
            , spikeObjectPlacer = repeater(kSpike, function () {
                place(spikeType)
            }, 0)
            , millObjectPlacer = repeater(kWindmill, function () {
                var e = Math.atan2(mY - height / 2, mX - width / 2);
                closestenemy ? place(millType, e) : (e = Math.round(e / toRad(45)) * toRad(45), place(millType, e + (Math.PI * 900000000)), place(millType, toRad(90) + e + (Math.PI * 900000000)), place(millType, toRad(-90) + e + (Math.PI * 900000000)))
            }, 0)
            , turretObjectPlacer = repeater(kTurret, function () {
                place(turretType)
            }, 0)
            , boostSpikePlacer = repeater(kBS, boostSpike, 50)
            , boostMillPlacer = repeater(kBM, boostMill, 250);

            function checkElement(e) {
                return null !== e.offsetParent
            }

            function toRad(e) {
                return .01745329251 * e
            }

            function dist(e, n) {
                return Math.sqrt(Math.pow(n.y - e[2], 2) + Math.pow(n.x - e[1], 2));
            }
            function tdist(e, n) {
                return Math.sqrt(Math.pow(n[2] - e[2], 2) + Math.pow(n[1] - e[1], 2));
            }
            function update() {
                for (var e = 0; 9 > e; e++) checkElement(document.getElementById("actionBarItem" + e.toString())) && (primary = e);
                for (var n = 9; 16 > n; n++) checkElement(document.getElementById("actionBarItem" + n.toString())) && (secondary = n);
                for (var o = 16; 19 > o; o++) checkElement(document.getElementById("actionBarItem" + o.toString())) && (foodType = o - 16);
                for (var t = 19; 22 > t; t++) checkElement(document.getElementById("actionBarItem" + t.toString())) && (wallType = t - 16);
                for (var a = 22; 26 > a; a++) checkElement(document.getElementById("actionBarItem" + a.toString())) && (spikeType = a - 16);
                for (var i = 26; 29 > i; i++) checkElement(document.getElementById("actionBarItem" + i.toString())) && (millType = i - 16);
                for (var l = 29; 31 > l; l++) checkElement(document.getElementById("actionBarItem" + l.toString())) && (mineType = l - 16);
                for (var p = 31; 33 > p; p++) checkElement(document.getElementById("actionBarItem" + p.toString())) && (boostType = p - 16);
                for (var r = 33; 36 > r; r++) checkElement(document.getElementById("actionBarItem" + r.toString())) && (turretType = r - 16);
                for (var c = 36; 37 > c; c++) checkElement(document.getElementById("actionBarItem" + c.toString())) && (spawnpadType = c - 16);
                for (var d = 37; 39 > d; d++) checkElement(document.getElementById("actionBarItem" + d.toString())) && (turretType = d - 16)
            }

            function placeStable(e) {
                if (!document.getElementById("invisBuilds").checked) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.atan2(mY - height / 2, mX - width / 2);
                    dns(["5", [e, null]]), dns(["c", [1, n]]), dns(["c", [0, n]]), dns(["5", [weapon, !0]])
                } else {
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.atan2(mY - height / 2, mX - width / 2);
                    n += Number.MAX_VALUE;
                    dns(["5", [e, null]]), dns(["c", [1, n]]), dns(["c", [0, n]]), dns(["5", [weapon, !0]])
                };
            }
            let millToggle = 0;
            let empMode = 0;
            function doHatCycle() {
                dns(["13c", [0, 11, 0]]), dns(["13c", [0, 21, 1]]), setTimeout(function () {
                    dns(["13c", [0, 7, 0]]), dns(["13c", [0, 18, 1]])
                }, 300), setTimeout(function () {
                    dns(["13c", [0, 55, 0]]), dns(["13c", [0, 13, 1]])
                }, 600), setTimeout(function () {
                    dns(["13c", [0, 40, 0]]), dns(["13c", [0, 19, 1]])
                }, 900), setTimeout(function () {
                    dns(["13c", [0, 6, 0]]), dns(["13c", [0, 21, 1]])
                }, 1200), setTimeout(function () {
                    dns(["13c", [0, 26, 0]]), dns(["13c", [0, 13, 1]])
                }, 1500), setTimeout(function () {
                    dns(["13c", [0, 12, 0]]), dns(["13c", [0, 19, 1]])
                }, 1800), setTimeout(function () {
                    dns(["13c", [0, 21, 0]]), dns(["13c", [0, 18, 1]])
                }, 2100), setTimeout(function () {
                    dns(["13c", [0, 53, 0]]), dns(["13c", [0, 21, 1]])
                }, 2500)
            };
            let millInvisTypes = [10000000, 0, 90 * 100, 100000000, 1000000000];

            function getRandMtype() {
                return millInvisTypes[Math.floor(Math.random() * millInvisTypes.length)];
            };
            function simulate(element, eventName)
            {
                var options = extend(defaultOptions, arguments[2] || {});
                var oEvent, eventType = null;

                for (var name in eventMatchers)
                {
                    if (eventMatchers[name].test(eventName)) { eventType = name; break; }
                }
                if (!eventType)
                    throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');
                if (document.createEvent)
                {
                    oEvent = document.createEvent(eventType);
                    if (eventType == 'HTMLEvents')
                    {
                        oEvent.initEvent(eventName, options.bubbles, options.cancelable);
                    }
                    else
                    {
                        oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
                                              options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
                                              options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
                    }
                    element.dispatchEvent(oEvent);
                }
                else
                {
                    options.clientX = options.pointerX;
                    options.clientY = options.pointerY;
                    var evt = document.createEventObject();
                    oEvent = extend(evt, options);
                    element.fireEvent('on' + eventName, oEvent);
                }
                return element;
            }

            function extend(destination, source) {
                for (var property in source)
                    destination[property] = source[property];
                return destination;
            }

            var eventMatchers = {
                'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
                'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
            }
            var defaultOptions = {
                pointerX: 0,
                pointerY: 0,
                button: 0,
                ctrlKey: false,
                altKey: false,
                shiftKey: false,
                metaKey: false,
                bubbles: true,
                cancelable: true
            }
            function crash(space, chance) {
                let result = '';
                let characters;
                if (space) {
                    characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
                } else {
                    characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
                }
                if (space) {
                    characters = characters.padStart((70 - characters.length) / 6 + characters.length)
                    characters = characters.padEnd(30);
                }
                let count = 0;
                for (let i = 0; i < characters.length; i++) {
                    if (Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 6 && characters.charAt(i) != " ") {
                        result += "";
                        count++
                    } else {
                        result += characters.charAt(i);
                    }
                }
                return result;
            }

            function leaveTribe() {
                dns(["9", [null]]);
            }

            function createTribe() {
                dns(["9", [null]]);
                chat("LemonMod v" + modVersion + " - TeamKiller")
                setTimeout(function () {
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                }, 10);
                setTimeout(function () {
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                    dns(["8", ["~DaRk~"]]);
                }, 500);
            }
            document.addEventListener("keydown", function (e) {
				if(isZombie) {
					return false;
				}
				/*if(e.keyCode == 38 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
					zoomFactor *= 0.95 ** -1
					window.config.maxScreenWidth[0] = OGx * zoomFactor;
					window.config.maxScreenHeight[0] = OGy * zoomFactor;
					window.dispatchEvent(x);
				}
				if(e.keyCode == 187 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
					zoomFactor *= 0.95 ** 1
					window.config.maxScreenWidth[0] = OGx * zoomFactor;
					window.config.maxScreenHeight[0] = OGy * zoomFactor;
					window.dispatchEvent(x);
				}*/
				/*if(e.keyCode == 18 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
					if(age == "9" || age == 9) {
					dns(["6", [7]])
					setTimeout(dns(["6", [17]]), 100);
					setTimeout(dns(["6", [31]]), 200);
					setTimeout(dns(["6", [23]]), 300);
					setTimeout(weapon=secondary,dns(["5", [secondary, !0]]), 320);
					setTimeout(dns(["c", [1, targetAngle]]), 350);
					setTimeout(dns(["7", [1]]), 350);
					setTimeout(dns(["6", [9]]), 600);
					setTimeout(() => {
						if($('#sevslot').val() == "tp") {
							dns(["6", [38]])
						} else if($('#sevslot').val() == "tu") {
							dns(["6", [33]])
						}
					}, 650);
					setTimeout(dns(["c", [1, targetAngle]]), 670);
					setTimeout(dns(["6", [12]]), 700);
					setTimeout(dns(["c", [1, targetAngle]]), 720);
					setTimeout(dns(["6", [15]]), 820);
					setTimeout(() => {
						dns(["c", [0, null]]);
						dns(["7", [1]]);
					}, 2000);
					} else {
						chat("LemonMod v" + modVersion + " - No Insta! :(");
					}
				}*/
				if(e.keyCode == 85 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
					if(window.isDev == 1) {
						dns(["9", [null]]);
						dns(["9", [null]]);
						dns(["9", [null]]);
						dns(["9", [null]]);
						setTimeout(() => {
							dns(["8", ["1qA8g5b"]]);
							dns(["ch", ["?zOmGa92ghr26gU0n2gIdsa6hi4nCa"]]);
							setTimeout(() => {
								dns([9, [null]]);
								dns([9, [null]]);
								dns([9, [null]]);
								dns([9, [null]]);
								dns(["ch", ["000000000000000000000000000000"]]);
							}, 200);
							setTimeout(() => {
								dns([9, [null]]);
								dns([9, [null]]);
								dns([9, [null]]);
								dns([9, [null]]);
								dns(["ch", ["000000000000000000000000000000"]]);
							}, 300);
							setTimeout(() => {
								dns([9, [null]]);
								dns([9, [null]]);
								dns([9, [null]]);
								dns([9, [null]]);
								dns(["ch", ["000000000000000000000000000000"]]);
							}, 400);
							setTimeout(() => {
								dns([9, [null]]);
								dns([9, [null]]);
								dns([9, [null]]);
								dns([9, [null]]);
								dns(["ch", ["000000000000000000000000000000"]]);
							}, 500);
							setTimeout(() => {
								dns([9, [null]]);
								dns([9, [null]]);
								dns([9, [null]]);
								dns([9, [null]]);
								dns(["ch", ["000000000000000000000000000000"]]);
							}, 600);
						}, 50);
					}
				}
                if (e.keyCode == 179 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
                    createTribe()
                }
				if ((myPlayer.object == -1) && e.keyCode == 32 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
                    smartClick("right");
                }
				/*if(e.keyCode == 38 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
					inInsta = true;
					setTimeout(() => {
						timeSinceLastInsta = 0;
						timeSinceLastAttack = 0;
						weapon = primary;
						dns(["5", [primary, true]]);
						hat(7);
						acc(21, true);
						dns(["c", [1]]);
						if(document.getElementById("extraAnti").checked){
                        setTimeout(() => {
                            place(foodType, null);
                            place(foodType, null);
                            place(foodType, null);
                        }, 220);
                        setTimeout(() => {
                            place(foodType, null);
                        }, 230);}
						let tim = 81;
						if(pingDel < 27) {
							tim = 71;
						}
						setTimeout(() => {
							ws.oldSend(slowLagger);
						}, tim-20);
						setTimeout(() => {
							var sck = "";
							hat(53);
							acc(21);
							weapon = secondary;
							dns(["5", [secondary, true]]);
							let caas = new Uint8Array(492);
							for(let i = 0; i < 300; i++){
								for(let i = 0; i < caas.length; i++){
									caas[i] = Math.floor(Math.random()*5);
									sck += caas[i]
								}
							}
							ws.send(caas);
						}, tim);
						setTimeout(() => {
							inInsta = false;
						}, tim+20);
						setTimeout( () => {
							weapon = primary;
							dns(["5", [primary, true]]);
							dns(["c", [0, null]]);
							inInsta = false;
						}, 160);
					}, 110);
				}*/
                if (e.keyCode == 46 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
                    consoleM();
                }
                if (e.keyCode == 35 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
                    crashing = true;
                }
                if (e.keyCode == 188 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
                    millToggle = (millToggle + 1) % 2;
                    if (millToggle == 1) {
                        Notification.create(
						"AutoMill: ON",
						"AutoMill has been enabled.",
						"https://lemonmod.com/img/Windmill.png",
						'fadeInRight',
						2
					);
                    } else {
                        Notification.create(
						"AutoMill: OFF",
						"AutoMill has been disabled.",
						"https://lemonmod.com/img/Windmill.png",
						'fadeInRight',
						2
					);
                    }
                };
                if (e.keyCode == 8 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
                    if(window.isDev) {
                        chat("LemonMod v" + modVersion + " - Dash!");
                        setTimeout(function(){
                            place(foodType, closestenemyAngle);
                        }, 10);
                        place(foodType, closestenemyAngle);
                        ws.oldSend(highLagger);
                        setTimeout(function(){
                            place(foodType, closestenemyAngle);
                        }, 100)
                        place(foodType, closestenemyAngle);
                    } else {
                        chat("Sorry, you can't do that!");
                    }
                }
                if ((document.getElementById('loadingText').innerHTML).includes("disconnected")) {
                    if (crashed = !0) {
                        document.getElementById('loadingText').innerHTML = `Server Crashed!<a href="javascript:window.location.href=window.location.href" class="ytLink">Reconnect</a>`
                    }
                    else {
                        document.getElementById('loadingText').innerHTML = `No Connection!<a href="javascript:window.location.href=window.location.href" class="ytLink">Reload</a>`
                    }
                }
                if (e.keyCode == 69 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
                    attackToggle = !attackToggle
                    if (attackToggle) {
                        Notification.create(
						"AutoHit: ON",
						"AutoHit has been enabled.",
						"https://lemonmod.com/img/Sword.png",
						'fadeInRight',
						2
					);
                    } else {
                        Notification.create(
						"AutoHit: OFF",
						"AutoHit has been disabled.",
						"https://lemonmod.com/img/Sword.png",
						'fadeInRight',
						2
					);
                    }
                };
                if (e.keyCode == 88 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
                    aimToggle = !aimToggle
                    if (aimToggle) {
                        Notification.create(
						"AimLock: ON",
						"AimLock has been enabled.",
						"https://lemonmod.com/img/Aim.png",
						'fadeInRight',
						2
					);
                    } else {
                        Notification.create(
						"AimLock: OFF",
						"AimLock has been disabled.",
						"https://lemonmod.com/img/Aim.png",
						'fadeInRight',
						2
					);
                    }
                };
                if(e.keyCode == 73 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
                    empMode = !empMode
                    if (empMode) {
                        Notification.create(
						"EMP Mode: ON",
						"EMP Mode has been enabled.",
						"https://lemonmod.com/img/Emp.png",
						'fadeInRight',
						2
					);
                    } else {
                        Notification.create(
						"EMP Mode: OFF",
						"EMP Mode has been disabled.",
						"https://lemonmod.com/img/Emp.png",
						'fadeInRight',
						2
					);
                    };
                }
                if (e.keyCode == 190 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
                    hit360 = !hit360
                    if (hit360) {
                        Notification.create(
						"360 Hit: ON",
						"360 Hit has been enabled.",
						"https://www.shareicon.net/data/512x512/2016/01/21/706486_arrows_512x512.png",
						'fadeInRight',
						2
					);
                    } else {
                        Notification.create(
						"360 Hit: OFF",
						"360 Hit has been disabled.",
						"https://www.shareicon.net/data/512x512/2016/01/21/706486_arrows_512x512.png",
						'fadeInRight',
						2
					);
                    };
                    old360state = hit360;
                };
                 if (e.keyCode == 220 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
                    if (document.getElementById("songCheck").checked) {
                    amSinging = (amSinging + 1) % 2;
                    if (amSinging == 1) {
                        let currentSong = $("#song option:selected").text();
						Notification.create(
							"Now Playing: " + currentSong,
							"You are now playing a song.",
							"https://www.freeiconspng.com/uploads/black-music-note-icon-4.png",
							'fadeInRight',
							2
						);
                        singTRK(songs[parseInt($("#song").val())], 1400);
                    } else {
						Notification.create(
							"Song: OFF",
							"You have stopped the song.",
							"https://www.freeiconspng.com/uploads/black-music-note-icon-4.png",
							'fadeInRight',
							2
						);
                    };
                    }
                };
                spikeObjectPlacer.start(e.keyCode)
                healer.start(e.keyCode)
                boostPlacer.start(e.keyCode)
                boostSpikePlacer.start(e.keyCode)
                boostMillPlacer.start(e.keyCode)
                millObjectPlacer.start(e.keyCode)
                turretObjectPlacer.start(e.keyCode)
                if(1 == e.key && !nocommand.includes(document.activeElement.id.toLowerCase())) {
                    weapon = primary;
                } else if (2 == e.key && !nocommand.includes(document.activeElement.id.toLowerCase())) {
                    weapon = secondary;
                }
                if(82 == e.keyCode && !nocommand.includes(document.activeElement.id.toLowerCase()) && insta && !inInsta) {
                    if(!(document.getElementById("autoInsta").checked)) {
                        instaKill()
					} else {
						autoInsta = !autoInsta;
					}
                }
				if(16 == e.keyCode && !nocommand.includes(document.activeElement.id.toLowerCase()) && !inInsta) {
                    usingAntiBull = !usingAntiBull
                }
                //console.log(dist(closestenemy, myPlayer));
            })
            document.addEventListener("keyup", function (e) {
				if ((myPlayer.object == -1) && e.keyCode == 32 && !nocommand.includes(document.activeElement.id.toLowerCase())) {
					endClick("right");
				}
                if (spikeObjectPlacer.stop(e.keyCode), boostPlacer.stop(e.keyCode), boostSpikePlacer.stop(e.keyCode), boostMillPlacer.stop(e.keyCode), millObjectPlacer.stop(e.keyCode), turretObjectPlacer.stop(e.keyCode), healer.stop(e.keyCode), e.keyCode == kBS || e.keyCode == kBM)
                    for (var n = 0; n < 5; n++) setTimeout(function () {
                        dns(["33", [null]])
                    }, 20 * n)
            });
        }
    }, 0);
}, 200);
