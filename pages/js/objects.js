let person = {
  name: 'amit',
  age: 30,
}
// undefined
person.name
// 'amit'
person.age
// 30
person['name']
// 'amit'
person['age']
// 30
person.email = 'amit@gmail.com'
// 'amit@gmail.com'
person
// {name: 'amit', age: 30, email: 'amit@gmail.com'}
person['phoneNumber'] = 123456789
// 123456789
person
// {name: 'amit', age: 30, email: 'amit@gmail.com', phoneNumber: 123456789}
person['phoneNumber'] = 88888888
// 88888888
person
// {name: 'amit', age: 30, email: 'amit@gmail.com', phoneNumber: 88888888}
person.phoneNumber = 999999999
// 999999999
person
// {name: 'amit', age: 30, email: 'amit@gmail.com', phoneNumber: 999999999}
person.city = 'bengaluru'
// 'bengaluru'
person
// {name: 'amit', age: 30, email: 'amit@gmail.com', phoneNumber: 999999999, city: 'bengaluru'}
person['city'] = 'mangaluru'
// 'mangaluru'
person
// {name: 'amit', age: 30, email: 'amit@gmail.com', phoneNumber: 999999999, city: 'mangaluru'}
person.address = {
  doorNumber: '#108/4',
  strtNo: '5th cross',
  landmark: 'Gandhi circle',
  areaName: 'Gandhi Nagar',
  pincode: 560001,
  cityName: 'bengaluru',
}
// {doorNumber: '#108/4', strtNo: '5th cross', landmark: 'Gandhi circle', areaName: 'Gandhi Nagar', pincode: 560001, …}
person
// {name: 'amit', age: 30, email: 'amit@gmail.com', phoneNumber: 999999999, city: 'mangaluru', …}address: {doorNumber: '#108/4', strtNo: '5th cross', landmark: 'Gandhi circle', areaName: 'Gandhi Nagar', pincode: 560001, …}areaName: "Gandhi Nagar"cityName: "bengaluru"doorNumber: "#108/4"landmark: "Gandhi circle"pincode: 560001strtNo: "5th cross"[[Prototype]]: Objectage: 30city: "mangaluru"email: "amit@gmail.com"name: "amit"phoneNumber: 999999999[[Prototype]]: Object
person.hobbies = ['coocking', 'watching tv prgms', 'playing tt']
// ['coocking', 'watching tv prgms', 'playing tt']
person
// {name: 'amit', age: 30, email: 'amit@gmail.com', phoneNumber: 999999999, city: 'mangaluru', …}address: {doorNumber: '#108/4', strtNo: '5th cross', landmark: 'Gandhi circle', areaName: 'Gandhi Nagar', pincode: 560001, …}age: 30city: "mangaluru"email: "amit@gmail.com"hobbies: (3) ['coocking', 'watching tv prgms', 'playing tt']0: "coocking"1: "watching tv prgms"2: "playing tt"length: 3[[Prototype]]: Array(0)name: "amit"phoneNumber: 999999999[[Prototype]]: Object
a = {
  name: 'ajeya',
  name: 'amit',
}
// {name: 'amit'}
Object.keys(person)
// ['name', 'age', 'email', 'phoneNumber', 'city', 'address', 'hobbies']

Object.keys(person)
// ['name', 'age', 'email', 'phoneNumber', 'city', 'address', 'hobbies']
Object.values(person)
// ['amit', 30, 'amit@gmail.com', 999999999, 'mangaluru', {…}, Array(3)]0: "amit"1: 302: "amit@gmail.com"3: 9999999994: "mangaluru"5: {doorNumber: '#108/4', strtNo: '5th cross', landmark: 'Gandhi circle', areaName: 'Gandhi Nagar', pincode: 560001, …}areaName: "Gandhi Nagar"cityName: "bengaluru"doorNumber: "#108/4"landmark: "Gandhi circle"pincode: 560001strtNo: "5th cross"[[Prototype]]: Object6: (3) ['coocking', 'watching tv prgms', 'playing tt']0: "coocking"1: "watching tv prgms"2: "playing tt"length: 3[[Prototype]]: Array(0)length: 7[[Prototype]]: Array(0)
person.hasOwnProperty('age')
// true
person.hasOwnProperty('agek')
// false
person.hasOwnProperty('email')
// true
