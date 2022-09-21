//1. 2 number
let x = 16
let y = 36
//20,40
let m = 20
let n = 40
//60,40
let i = 20
let j = 40

//same set of operations again and again
//keyword functionname (paramters?) {logic}

//creating function
function hello() {
  console.log('hellow')
}
//calling the function or function invocation

// hello()

//creating function

function someMathOperations(value1, value2, hhh, jsjsj) {
  console.log('The two numbers- ', value1, value2, hhh, jsjsj)
  //2. add the numbers
  let sum = value1 + value2
  console.log('sum- ', sum)
  //3. multiply the numbers
  let mul = value1 * value2
  console.log('mul- ', mul)
  //4.  add answers from step 2 and step 3
  console.log('final ans- ', sum + mul)
}
//calling the function or function invocation
// someMathOperations(x, y)
// someMathOperations(m, n)
// someMathOperations(i, j)
// someMathOperations(100, 200, 400, 5000)

//firstName, lastName
let firstName = 'Amit'
let lastName = 'Sharma'
// console.log(firstName.concat(' ', lastName))

function getFullName(firstName, lastName) {
  console.log(firstName.concat(' ', lastName))
}
// getFullName(lastName, firstName)

function ageComparison(age) {
  if (age < 10) {
    console.log('Age is less than the 10')
  } else if (age >= 10 && age <= 30) {
    console.log('Age is between 10 and 30')
  } else if (age >= 31 && age <= 60) {
    console.log('Age is between 31 and 60')
  } else {
    console.log('Age is above 60')
  }
}

// ageComparison(100)
function areaOfCircle(radius) {
  console.log(Math.PI * radius)
}
function areaOfRectangle(length, width) {
  console.log(length * width)
}
function findArea(geometry, dimensions) {
  if (geometry === 'circle') {
    console.log('Area of circle') //PI*r^2
    console.log(Math.PI * Math.pow(dimensions['radius'], 2)) //PI*r^2
  } else if (geometry === 'square') {
    console.log('Area of square') //PI*r^2
    console.log(dimensions.length * dimensions.length) //l*l
  } else if (geometry === 'rectangle') {
    console.log('Area of rectangle') //l*w
    console.log(dimensions.length * dimensions.width)
  } else if (geometry === 'triangle') {
    console.log('Area of triangle') //1/2 * base * height
    console.log((dimensions.base * dimensions.height) / 2)
  }
}
// findArea('circle', { radius: 10 })
// findArea('triangle', { height: 10, base: 20 })
// findArea('rectangle', { length: 10, width: 20 })
// findArea('square', { length: 10 })

function addTwoNumbers(val1, val2) {
  return val1 + val2 //40
}

// let ans = addTwoNumbers(10, 30)

function ageComparisonV2(age) {
  if (age < 10) {
    return 'Age is less than the 10'
  } else if (age >= 10 && age <= 30) {
    return 'Age is between 10 and 30'
  } else if (age >= 31 && age <= 60) {
    return 'Age is between 31 and 60'
  } else {
    return 'Age is above 60'
  }
}

let ageAns = ageComparisonV2(55)
console.log(ageAns)
