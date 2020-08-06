// THIS FILE CONTAINS SOLUTIONS TO DIFFERENT PUZZLES, LOOK AT YOUR OWN RISK

































































































function DisplayHint(id) {
  alert([
    "something's hidden underneath",
    "look at SubmitPW",
    "maybe try brute force?",
    "filter: contrast(1)"
  ][id])
}
function DisplaySolution(id) {
  console.log([
    GiveKey.toString(),
    SubmitPW.toString(),
    DO_SOLUTION_2.toString().replace('debug_delay', debug_delay.toString()),
    ""
  ][id]);
  alert([
    "remove the div's \"cover-screen\" class or run GiveKey() directly",
    "pass is in SubmitPW encoded in base64",
    "There's a function called DO_SOLUTION_2() that implements a possible solution",
    "set the contrast of the image to like 100 or something"
  ][id])
}

var debug_delay = (ms) => {return new Promise(y => setTimeout(y, ms))}

function debug_getHTML() {
  console.log(JSON.stringify(document.body.childNodes[3].innerHTML))
}

async function debug_keys(t) {
  valid = {}
  for (var n = 2; n < 42; n++) {
    new Array(255).fill(0).map((j,i)=>i).filter(i=>(i**69)%n===t).forEach(j=>{console.log(n,j,(j**69)%n);if(valid[j]===undefined)valid[j]=[];valid[j].push(n)})
    await debug_delay(10)
  }
  console.log(valid)
  var ml = 0;
  Object.values(valid).forEach(i => {
    if (i.length > ml) ml = i.length
  })
  console.log(Object.entries(valid).filter(i => i[1].length === ml))
}

async function DO_SOLUTION_2() {
  var toChar = (a) => { // list of all possible flag characters
    return ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','-','{','}','/', '.'][a]
  }
  var result = new Array(21).fill(0) // a representation of the key
  result[0] = 43 // set the "HT/{" and "}.html" to save time
  result[1] = 55
  result[2] = 65
  result[3] = 63
  result[15] = 64
  result[16] = 66
  result[17] = 17
  result[18] = 29
  result[19] = 22
  result[20] = 21
  var completed = 0; // number of brute-forced character
  var goal = "JQ+vil?LR0mwlwel\x1c]dXZ" // the output that should be there
  while (completed < 21) {
    var str = result.map(i=>toChar(i)).join('') // convert key to string
    var ans = WeirdHash(str) // test the value
    console.log(str, ans) // log it to console
    while (ans[completed] === goal[completed] && completed < 21) // if the character is correct
      completed++ // start checking the next character
    if (completed < 21) result[completed]++ // increment the current character
    await (debug_delay)(50) // small delay so that other threads can run
  }
}

var c3 = false;

setInterval(() => {
  if (document.body.innerHTML.replace(/HT\/{.*}.html(?!<\/a>)(?!['"])/g, "<a href='../$&'>$&</a>") !== document.body.innerHTML)
    document.body.innerHTML = document.body.innerHTML.replace(/HT\/{.*}.html(?!<\/a>)(?!['"])/g, "<a href='../$&'>$&</a>")
  if (!c3 && location.pathname.endsWith("/HT/%7Bok7UX3utzvI%7D.html") && /contrast\((\d+)\)/g.exec(document.getElementsByClassName("image")[0].style.filter)[1] >= 20) {
    document.getElementById("href").innerText = "--> HT/{Im4g3-M4nipul4tion-C00l}.html <--";
    c3 = true
  }
}, 100)

window.onload = () => {
  if (location.pathname === "/HT/%7Bok7UX3utzvI%7D.html")
    document.getElementsByClassName("image")[0].style.filter = "contrast(1)"
  document.querySelectorAll(".h-1em").forEach(i => i.height = parseFloat(getComputedStyle(document.body).fontSize) * 0.75)
}
