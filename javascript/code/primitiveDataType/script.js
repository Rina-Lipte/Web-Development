console.log("Hello shegaon");
var a=10;
var b=20;
console.log(a+b);
let c=55.859632;
console.log(c, typeof c)
console.log(c.toFixed(2))
console.log(c.toPrecision(3))
let d=25;
console.log(d.toString(2))

//Math Methods

console.log(Math.max(4,7))
console.log(Math.min(5,8))
console.log(Math.sqrt(16))
console.log(Math.cbrt(27))
console.log(Math.pow(2,3))
console.log(Math.floor(3.8))
console.log(Math.ceil(3.2))
console.log(Math.round(3.5))
console.log(Math.random())
console.log(Math.round(Math.random()*10000))

//string

let cost=25;
console.log(`the cost is ${cost}`)
console.log("the time is 5'o clock")
console.log(`The gandhi said"good morning"`);
let str="Javascript is so easy";
console.log(str.length)
console.log(str.charAt(1),str[1])
console.log(str.indexOf('a'))
console.log(str.lastIndexOf('a'))
console.log(str.toUpperCase())
console.log(str.toLocaleLowerCase())
console.log(str.startsWith('j'))
console.log(str.endsWith('easy'))
console.log(str.split(' '))
console.log(str.trim())
console.log(str.replace('a','b'))
let str1="billu"
console.log(str1.concat("tinky"))
console.log(str1.concat("tinky"),str1+"tinky")
console.log(str1.includes('e'))
console.log(str1.includes('bi'))
console.log(str1.slice(1,4))
console.log(str1.search("llu"))


//Undefined

let x=true
console.log(x,typeof X)