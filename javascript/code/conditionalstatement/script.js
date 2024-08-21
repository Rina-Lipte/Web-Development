//-------------Simple if--------------- 
let a=5
if(a>0)
{
    console.log("Yes a is greater");
}

//---------------if-else---------------
if(a>0)
    {
        console.log("Yes a is greater");
    }
else
{
    console.log("condition faild");
}

//---------------if else ladder--------------
//positive negative
if(a>0)
{
    console.log("Positive");
}
else if(a<0)
{
    console.log("negative")
}
else{
    console.log("neither negative nor positive")
}


//Q  let a1=5, b=20,c=1

function value(a1,b,c){
    if(a1>b && a1>c)
    {
        console.log("a Greater")
    }
    else if(b>a1 && b>c)
    {
        console.log("b greater");
    }
    else{
        console.log("c greater");
    }
}
value(5,20,1)

//-----------ternary operator-------------
let x=3,y=50,z=90
let max=(x>y)?(x>z)?x:z:(y>z)?y:z;
console.log(max)  //90


//-------------Switch------------------

//print the days of week

let num=5;
switch(num)
{
    case 0: console.log("Sunday");
    break;
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wedday");
    break;
    case 4: console.log("Thusday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("satday");
    break;
    default:console.log("enter valid number");
}
