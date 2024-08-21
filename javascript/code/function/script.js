let a=20;
let b=25;
let c=a+b;
let d=a-b;
let e=a*b;
console.log(c,d,e)


//simple

function display()
{
    console.log("Hello I'm a function");
}
console.log("Hello world")
display();


//parameters

function add(a,b)
{
    console.log("The addition is "+(a+b))
}
add(5,3)

function add(a,b=10)
{
    console.log("the addition is "+(a+b))
}
add(5)

//function can return value

function sum(a,b)
{
    return a+b;
}
let x=sum(5,6)
console.log(x)

//arrow function
var sum=(a,b)=>
    {
        console.log(a+b);
    }
sum(6,8);



function squCube(a)
{
    console.log(a*a)
    console.log(a*a*a)
}
squCube(5)

//input Rina => output RA

function name(str)
{
    let c=str.length;
    return str[0]+str[3].toUpperCase();

}
let result=name('Rina')
console.log(result)


//callbacks function

function mad()
{
    console.log("I'm mad");
}
function bad(a,b)
{
    console.log("I'm bad "+a)
    b();
}
bad(5,mad)

//closures

function x1(){
    var count=0;
    function y()
    {
        count++;
        console.log(count)
    }
    return y;
}
let z=x1();
z();
console.log(z);
z();
z();
z();