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

hello()

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
someMathOperations(x, y)
someMathOperations(m, n)
someMathOperations(i, j)
someMathOperations(100, 200, 400, 5000)

//firstName, lastName
let firstName = 'Amit'
let lastName = 'Sharma'
// console.log(firstName.concat(' ', lastName))

function getFullName(firstName, lastName) {
  console.log(firstName.concat(' ', lastName))
}
getFullName(lastName, firstName)
