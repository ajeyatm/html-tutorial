//10,9,8,7,6,5,4,3,2,1
// setTimeout(() => {
//   console.log('hi');
// }, 1000 * 5)

for (let num = 1; num <= 10; num++) {
  setTimeout(() => {
    console.log(num)
  }, 1000 * num)
}

let val = 1
const timerId = setInterval(() => {
  console.log(val)
  val++
  if (val > 10) clearInterval(timerId)
}, 1000)
