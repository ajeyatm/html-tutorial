let users = ['amit', 'ajeya', 'gauri', 'aman', 'jeeva', 'john']

// const newArr = users.map((item, ind, arr) => {
//     return item + '-' + ind
//   })

function myMap(arr, cb) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let out = cb(arr[i], i, arr)
    newArr.push(out)
  }
  return newArr
}

let result = myMap(users, (x, y, z) => {
  return x + '-' + y
})

// console.log(result)

// const namesStartWithAUsingFilter = users.filter((x, y, z) => {
//   return x.startsWith('a')
// })
function myFilter(arr, cb) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let boolRes = cb(arr[i], i, arr)
    if (boolRes) newArr.push(arr[i])
  }
  return newArr
}
const namesStartWithAUsingMyFilter = myFilter(users, (x, y, z) => {
  return x.startsWith('a')
})
console.log(namesStartWithAUsingMyFilter)
