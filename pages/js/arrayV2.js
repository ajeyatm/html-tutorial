let users = ['amit', 'ajeya', 'gauri', 'aman', 'jeeva', 'john'] //api 'https://user.com/names'
// console.log(users[0], users[1], users[2]);

//loops=> one at a time
//1. recursion
//initial value  =>runs onlyone time, before first iteration
let i = 0
function printItems() {
  //condition =>breaking condtions/check that will be run every iteration
  if (i >= users.length) return

  //logic
  console.log(users[i])

  //expression for next iteration => increment/descrement => runs every iteration
  i++ //i=i+1
  printItems()
}

// printItems()

//2.for-loop
// for(initial value; condition; expression for next iteration;)
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i])
// }
// for (let i = users.length - 1; i >= 0; i--) {
//   console.log(users[i])
// }
// for (let i = 1; i <= 100; i++) {
//   console.log(i)
// }

// for (let user of users) {
//   console.log(user)
// }

// for (let index in users) {
//   console.log(index)
// }

users.forEach((item, index, arr) => {
  console.log(item, index, arr)
})
