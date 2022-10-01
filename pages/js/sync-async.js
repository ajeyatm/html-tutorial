//Not all code executes in order ==> async
console.log('=====sync====')
let x = 10
x *= 2
x += 20
x -= 2
console.log('value of X == ', x)

console.log('=====async====')
let Y = 10

//timers, promises, cb, DOM events
setTimeout(() => {
  Y += 20
  console.log('Timer Y = ', Y)
}, 0)

new Promise((res, rej) => res()).then(() => {
  Y *= 2
  console.log('Promise Y = ', Y)
})

Y -= 2
console.log('value of Y == ', Y)
