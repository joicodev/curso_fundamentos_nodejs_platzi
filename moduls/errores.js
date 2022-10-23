function seRompe() {
  return 3 + z;
}

function seRompeAsincrona() {
  setTimeout(function () {
    try {
      return a + b;
    } catch (e) {
      console.error(e.name + ': ' + e.message)
    }
  }, 1000);
}

try {
  //seRompe();
  seRompeAsincrona();
} catch (e) {
  if (e instanceof EvalError) {
    console.error(e.name + ': ' + e.message)
  } else if (e instanceof RangeError) {
    console.error(e.name + ': ' + e.message)
  } else {
    console.error(e.name + ': ' + e.message)
  }
}