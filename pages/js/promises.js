//fullfilled promises
//failed

//function it can take input,after 5second,
//it checkswhether the input is odd or even
//if input is odd,it fails
//if input is even , it succeeds
function oddOrEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`)
  } else {
    console.log(`${num} is odd`)
  }
}

//oddOrEven(3)
//promises can yield either success or fail
function iPromiseToReturnOnlyEvenNumbers(num) {
  return new Promise((resolve, reject) => {
    //resolve() will executes the callback function in then block
    if (num % 2 === 0) resolve(num)
    //reject() will executes the callback function in catch block
    else reject()
  })
}

iPromiseToReturnOnlyEvenNumbers(4)
  .then((xxxxx) => {
    console.log('number is even', xxxxx)
  })
  .catch((yyyy) => {
    console.log('number is odd', yyyy)
  })

// iPromiseToReturnOnlyEvenNumbers(3)
//   .then((resp) => console.log(resp))
//   .catch((failedRes) => console.log(failedRes))
