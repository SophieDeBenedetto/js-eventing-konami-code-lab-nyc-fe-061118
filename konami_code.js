const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

//jQuery
// $("body").on("keydown", init)

// "vanilla" JS 
document.body.addEventListener("keydown", init)
//const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0
function init(event) {
  debugger;

  let key = event.which;
  if (key === code[index]) {
    index++
    if (index === code.length) {
      alert("KONAMI")
    }
  } else {
    index = 0;
  }
}

