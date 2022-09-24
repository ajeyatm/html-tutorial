function getFullName() {
  return `Ajeya kumar`
}

// function introduceName() {
//   return `Hello! I'm ${getFullName()}!`
// }
// function introduceJob() {
//   return `Hello! I'm ${describeJob()}!`
// }

//callback function
function introduce(cb) {
  return `Hello! I'm ${cb()}!`
}

function describeJob() {
  return `an engineer`
}

console.log(introduce(getFullName))
console.log(introduce(describeJob))
console.log(introduce(() => `strong`))
