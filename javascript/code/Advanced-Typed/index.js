//set- setis used to store and manipulate unique value
let s=new Set();
console.log(s);
s.add(5);  //used to add value
s.add(2);
s.add(2);
console.log(s);
//delete is used for deleting,clear is used to clear whole set and has will check wheather the element existed or not


//***************************************************//
//map is used to take values whose key value are unique
let m= new Map();
m.set('name','Rina')
m.set('name','sharu')
console.log(m.get('name'),m)


//**************************************************//
//date 
let dt=new Date();
console.log(dt);
console.log(dt.getTime())//give time in ms from mid night
//let newtime= dt.getTime()+(20*60*1000)

console.log(dt.toLocaleTimeString())
dt.setDate(25)
console.log(dt)//o/p:=>Sun Aug 25 2024 14:57:06 GMT+0530 (India Standard Time)

//*************************************************//
//Regex(Regular expresion)
//they are used to create pattern
/*let re=new RegExp('[A-Za-z]^[0-9]')
console.log(re.test('Rina4'))*/

let re=/[A-Za-z]{3}/
console.log("Hai bye ".match(re));
