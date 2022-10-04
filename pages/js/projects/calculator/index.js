console.log('working')

const screen = document.getElementById('screen')

let currentVal = ''
function btnClicked(val) {
  console.log(val)

  if (val === 'ac') {
    currentVal = '0'
  } else if (val === 'ce') {
    if (currentVal.length === 1) {
      currentVal = '0'
    } else {
      currentVal = currentVal.slice(0, -1)
    }
  } else if (val === '=') {
    currentVal = String(eval(currentVal))
  } else {
    if (currentVal === '0') {
      currentVal = val
    } else {
      currentVal += val
    }
  }
  screen.innerText = currentVal

  console.log(currentVal)
}
