function SubmitPW() {
  var text = document.getElementById("password").value;                // get password
  if (btoa(text) === "SFQve3A0c3N3MHJkLWNvZDMtaXMtaDRyZH0uaHRtbA==") { // check password
    document.getElementById("href").innerText = "--> " + text + " <--";
  }
}

function WeirdHash(key) {
  if (key.length !== 21) throw new Error("Invalid Key Length"); // key is always 21 keys long
  var enc = key.split('').map(i=>i.charCodeAt(0)).map((i,j)=>String.fromCharCode(j+(i^(j+1)*((24**69)%[3,5,6,7,9,10,14,15,18,21,30,35][j%12])))).join('') // run weird algorithm
  if (enc === "JQ+vil?LR0mwlwel\x1c]dXZ") {
    // show key so that it can linkify
    document.getElementById("href").innerText = "--> " + key + " <--";
    console.log("%cCORRECT","font-size:2em")
  }
  return enc // return
}

function GiveKey() { // you don't need to de-obfuscate this, just run it and it works
  var _0x432e=['maybe\x20look\x20at\x20the\x20landing\x20page\x20again??','HT/{','innerHTML','childNodes','just\x20go\x20to\x20the\x20next\x20challenge\x20already','}.html','body','getElementsByTagName','kbd'];(function(_0x4eef82,_0x432e17){var _0x438dae=function(_0x2daad9){while(--_0x2daad9){_0x4eef82['push'](_0x4eef82['shift']());}};_0x438dae(++_0x432e17);}(_0x432e,0x1af));var _0x438d=function(_0x4eef82,_0x432e17){_0x4eef82=_0x4eef82-0x0;var _0x438dae=_0x432e[_0x4eef82];return _0x438dae;};if(document[_0x438d('0x7')][_0x438d('0x4')][0x3][_0x438d('0x3')]==='\x0a\x20\x20\x20\x20\x20\x20<h1\x20class=\x22center\x22>HackTest</h1>\x0a\x20\x20\x20\x20\x20\x20<h2\x20class=\x22center\x22><a href=\x22../HT/{Start}.html\x22>HT/{Start}.html</a></h2>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22center\x22>Press\x20<kbd>F12</kbd>,\x20or\x20<kbd>ctrl-shift-I</kbd>\x20to\x20open\x20the\x20dev\x20tools</p>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22center\x22>Flags\x20are\x20in\x20the\x20format\x20of\x20<button\x20onclick=\x22alert(\x27/HT/{[a-zA-Z0-9\x5c-]+}\x5c.html/g\x27)\x22>this\x20regex</button>,\x20while\x20you\x20can\x20access\x20them\x20from\x20the\x20github\x20repo,\x20i\x27d\x20suggest\x20not\x20so\x20that\x20you\x20can\x20have\x20the\x20experience\x20the\x20challenges</p>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22center\x22><button\x20onclick=\x22DisplayHint(0)\x22>Hint</button></p>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22center\x22><button\x20onclick=\x22DisplaySolution(0)\x22>Solution</button></p>\x0a\x20\x20\x20\x20'){var s=document[_0x438d('0x8')](_0x438d('0x0'))[0x1];s['innerHTML']=_0x438d('0x2')+s[_0x438d('0x3')]+_0x438d('0x6'),giveKey=()=>{alert(_0x438d('0x5'));};}else alert(_0x438d('0x1'));
}
