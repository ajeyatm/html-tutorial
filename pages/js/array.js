fruits = ['apple', 'mango']
// ['apple', 'mango']
fruits.push('banana')
// 3
fruits
// ['apple', 'mango', 'banana']
fruits[0]
// 'apple'
fruits[0][0]
// 'a'
fruits[0][1]
// 'p'
fruits[1]
// 'mango'
fruits[1].indexOf('o')
// 4
fruits.indexOf('banana')
// 2
fruits.push(123)
4
fruits.indexOf(123)
// 3
fruits.push('apple')
// 5
fruits.lastIndexOf('apple')
// 4
let num = [1, 4.6, 900]
// undefined
fruits + num
// 'apple,mango,banana,123,apple1,4.6,900'
fruits.concat(num)
// ['apple', 'mango', 'banana', 123, 'apple', 1, 4.6, 900]
fruits
// ['apple', 'mango', 'banana', 123, 'apple']
num
// [1, 4.6, 900]
;[].concat(fruits, num)
// ['apple', 'mango', 'banana', 123, 'apple', 1, 4.6, 900]
let finalArr = [].concat(fruits, num)
// undefined
finalArr
// ['apple', 'mango', 'banana', 123, 'apple', 1, 4.6, 900]0: "apple"1: "mango"2: "banana"3: 1234: "apple"5: 16: 4.67: 900length: 8[[Prototype]]: Array(0)
finalArr.includes('apple')
// true
finalArr.pop()
// 900
finalArr
// ['apple', 'mango', 'banana', 123, 'apple', 1, 4.6]
finalArr.reverse()
// [4.6, 1, 'apple', 123, 'banana', 'mango', 'apple']0: 4.61: 12: "apple"3: 1234: "banana"5: "mango"6: "apple"length: 7[[Prototype]]: Array(0)
finalArr
// [4.6, 1, 'apple', 123, 'banana', 'mango', 'apple']0: 4.61: 12: "apple"3: 1234: "banana"5: "mango"6: "apple"length: 7[[Prototype]]: Array(0)
finalArr.join()
// '4.6,1,apple,123,banana,mango,apple'
finalArr.join('')
// '4.61apple123bananamangoapple'
finalArr.join('$')
// '4.6$1$apple$123$banana$mango$apple'
finalArr.join('ajeya')
// '4.6ajeya1ajeyaappleajeya123ajeyabananaajeyamangoajeyaapple'
finalArr.slice(0, 1)
// [4.6]
finalArr.slice(0, 4)
// [4.6, 1, 'apple', 123]
finalArr.unshift(true)
// 8
finalArr
// [true, 4.6, 1, 'apple', 123, 'banana', 'mango', 'apple']
finalArr.shift()
// true
finalArr
//  [4.6, 1, 'apple', 123, 'banana', 'mango', 'apple']
//pop - removes last item , shift - removed first item
// undefined
//push - adds items at the last position, unshift -  adds items at the first position
// undefined
