// console.log(document.getElementsByClassName('box'))
// document.body.style.backgroundColor = 'red'

const divEl = document.createElement('div')
divEl.className = 'bigger-box'
divEl.style.height = '300px'
divEl.style.width = '400px'
divEl.style.border = '1px solid black'
divEl.style.backgroundColor = 'gray'
divEl.style.position = 'relative'

document.body.appendChild(divEl)

const childDivEl = document.createElement('div')
childDivEl.className = 'box'
childDivEl.style.height = '100px'
childDivEl.style.width = '300px'
childDivEl.style.border = '1px solid black'
childDivEl.style.backgroundColor = 'white'
childDivEl.style.position = 'absolute'
childDivEl.style.bottom = 0
childDivEl.style.right = 0
// childDivEl.innerText = 'Hello there'
childDivEl.innerHTML = `<span>Hi iam span!! </span><i>italic</i>`

divEl.appendChild(childDivEl)
