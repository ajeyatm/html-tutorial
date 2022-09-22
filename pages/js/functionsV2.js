//Varient-1
//function functionName(paramters){}
function createObject(name, age) {
  return {
    name, //name:name
    age, //age:age
  }
}

//varient-2
//let variablename = function (parameters){}
//function without function name is  called as anonymous function
//function name is removed
let createObjectV2 = function (name, age) {
  return {
    name, //name:name
    age, //age:age
  }
}

//Varient -3 - arrow function
//function keyword & function names are removed,
//added fat arrow => in betwen end of () and start of {}
let createObjectV3 = (name, age) => {
  return {
    name, //name:name
    age, //age:age
  }
}
// console.log(createObjectV3('ajeya', 39))

function addTwoNumbersAndReturnTheResult(num1, num2) {
  return num1 + num2
}

let addTwoNumbersAndReturnTheResultV2 = function (num1, num2) {
  return num1 + num2
}

//if calculation that is single line/simple, returning a value and
// if the function is arrow function
//we can remove {} and return key word
//calculations are done very next to the arrow
let addTwoNumbersAndReturnTheResultV3 = (num1, num2) => num1 + num2
// console.log(
//     (  (num1, num2) => num1 + num2   )(2, 3)
// )

// ;(function () {
//   console.log('hello')
// })()

console.log(addTwoNumbersAndReturnTheResultV3(5, 3))
