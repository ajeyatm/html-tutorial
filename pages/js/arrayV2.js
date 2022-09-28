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

//item= value of the item , index=index of the item, arr=value of the array itself
// users.forEach((item, index, arr) => {
//   console.log(item, index, arr)
// })

let usersWithTheirIndexes = []
// for (let i = 0; i < users.length; i++) {
//   usersWithTheirIndexes.push(users[i] + '-' + i)
// }

// for (let i in users) {
//   usersWithTheirIndexes.push(users[i] + '-' + i)
// }

// for (let user of users) {
//   let ind = users.indexOf(user)
//   usersWithTheirIndexes.push(user + '-' + ind)
// }

users.forEach((item, index, arr) => {
  usersWithTheirIndexes.push(item + '-' + index)
})

const newArr = users.map((item, ind, arr) => {
  return item + '-' + ind
})

const namesStartWithA = users.map((x, y, z) => {
  return x.startsWith('a')
})

let namesStartWithCharA = []
users.forEach((item, index, arr) => {
  if (item.startsWith('a')) {
    namesStartWithCharA.push(item)
  }
})

const namesStartWithAUsingFilter = users.filter((x, y, z) => {
  return x.startsWith('a')
})
// console.log(namesStartWithAUsingFilter)

let nums = [100, 200, 300, 400, 500]
let sum = 0
// for (let i = 0; i < nums.length; i++) {
//   sum = sum + nums[i]
// }
// nums.forEach((apple, mango, banana) => {
//   sum = sum + apple
// })

let result = nums.reduce((acc, curr, ind, arr) => {
  return acc + curr
}, 0)

let result2 = nums.reduce((acc, curr, ind, arr) => acc + curr)
console.log(result2)
