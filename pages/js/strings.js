let username = 'ajeya'
// undefined
username.length
// 5
username.toUpperCase()
// 'AJEYA'
let city = 'DeHLi'
// undefined
city.toLowerCase()
// 'dehli'
username + city
// 'ajeyaDeHLi'
username.concat(' ', city, ' - ', 'shsdh')
// 'ajeya DeHLi - shsdh'
username.repeat(2)
// 'ajeyaajeya'
username.repeat(4)
// 'ajeyaajeyaajeyaajeya'
let email = '  Ajeya@Gmail.com '
// undefined
email.trim().toLowerCase()
// 'ajeya@gmail.com'
email.replace('@', '$')
// '  Ajeya$Gmail.com '
email.replace('a', 's')
// '  Ajeys@Gmail.com '
username.replace('a', 's')
// 'sjeya'
username.replaceAll('a', 's')
// 'sjeys'
let msg = 'good evening'
// undefined
msg[0]
// 'g'
msg[6]
// 'v'
msg[3]
// 'd'
msg.indexOf('d')
// 3
msg.indexOf('o')
// 1
msg.lastIndexOf('o')
// 2
msg.slice(0, 5)
// 'good '
msg.slice(1, 5)
// 'ood '
msg.substr(0, 2)
// 'go'
msg.substr(1, 5)
// 'ood e'
msg.substr(2, 6)
// 'od eve'

let text = 'hello@world'
// undefined
text.endsWith('ld')
// true
text.startsWith('hello')
// true
text.includes('@wo')
// true
text.split('@')
// ['hello', 'world']
let arr = text.split('@')
// undefined
// arr[('hello', 'world')]
text.split('o')
// ['hell', '@w', 'rld']
text.split()
// ['hello@world']
text.split('')
//  ['h', 'e', 'l', 'l', 'o', '@', 'w', 'o', 'r', 'l', 'd']
text.split('ll')
// ['he', 'o@world']
text.split('hello@world')
// ['', '']
text.match('hello')
// ['hello', index: 0, input: 'hello@world', groups: undefined]
