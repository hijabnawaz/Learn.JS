const name="hijab"
const repo= 4

// console.log(name + repo);

console.log(`hello my name is ${name} my repo count is ${repo}`)


const gameName=  new String('hijabjb')
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt("b"))
// console.log(gameName.indexOf("b"))

const newString= gameName.substring(0,4) 
console.log(newString)

const anotherString= gameName.slice(-7,6) 
console.log(anotherString)

const greeting = '   Hello world!   ';
console.log(greeting);

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.includes('hijab'))
console.log( url.replace('%20', '-'))