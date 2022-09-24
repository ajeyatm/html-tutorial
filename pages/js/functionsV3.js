function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}

function introduce(firstName, lastName) {
  return `Hello! I'm ${getFullName(firstName, lastName)}!`
}

// let a = introduce('Ajeya', 'kumar')
// console.log(a)

function addOne(num, limit) {
  if (num > 100) return
  console.log(`number`, num)
  num++
  addOne(num, 100)
}

// addOne(1, 100)

function factorial(num) {
  console.log(num)
  if (num === 0 || num === 1) return 1
  return num * factorial(num - 1)
  //factorial(4) = 4 * factorial(3) = 4 * 6 = 24
  //factorial(3) = 3 * factorial(2) = 3 * 2 = 6
  //factorial(2) = 2 * factorial(1) = 2 * 1 = 2
  //factorial(1) = 1
}

console.log('final ans', factorial(4))
