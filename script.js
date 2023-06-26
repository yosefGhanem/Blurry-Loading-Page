const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
/*every 30 milliseconds*/
let int = setInterval(blurring, 30)

function blurring() {
  load++
  //now when int reaches 100 stop
  if (load > 99) {
    clearInterval(int)
  }
  console.log()

  loadText.innerText = `${load}%`
  //we gonna map 0 to 100 to 0 to 1
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  //do same for blur (max is 30)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
//Stack overflow is very useful for these functions

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

