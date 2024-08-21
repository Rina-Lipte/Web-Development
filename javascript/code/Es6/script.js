/*Rest operator(Rest of parameter)*/

/*let s=0;    
function sum(...a)
{
    sum=0;
    a.forEach((e)=>s+=e)
}
 sum(2,3,6,7);
 console.log(s);*/

//========================================//

 //Spread Oprator(Whenever we want to spread the operator)

 let s=0;    
function sum(...a)
{
    const newArr=[4,5,...a,6]
}
 sum(2,3,6,7);
 console.log(s);


 //destructuring
 let arr=[5,6,7];
 let[x,y,z]=arr;
 console.log(x);
 let obj = {name:"raj",age:50}
 console.log(obj.age)
 const{name,age}=obj;
 console.log(age)


function display(a,b,c)
{
    console.log(a,b,c)
}
display(5,4,3,2)



class Car{
       name;price;color;
}
let obj1=new Car()
obj1.name="Kia"
let obj2=new Car()
obj2.name="mercedes"
console.log(obj1.name,obj2.name);

/*create a class Electronics and create two objects and assign values and console them*/
class Electronics{
    devicename;price;
}
let obj3=new Electronics()
obj3.devicename="TV"
let obj4=new Electronics()
obj4.devicename="AC"
obj4.price=200000
console.log(obj3.devicename,obj4.devicename,obj4.price);


class Employee
{
    ename;eid;esalary;
    constructor(i,n,s)
    {
        this.eid=i;//this is a current calling object
        this.esalary=s;
        this.ename=n;
    }
    getData()
    {
        console.log(this.eid,this.ename,this.esalary)
    }
}
let emp1=new Employee(1234,"Rina",900000)//constructor is used to assign the defautl value
emp1.getData()





/*create a class teacher and use constructor to assign values for tname,tid,tsalary and create teacher objects and print in console*/

class Teacher
{
    tname;tid;tsalary;
    constructor(i,n,s)
    {
        this.tid=i;
        this.tsalary=s;
        this.tname=n;
    }
    getData()
    {
        console.log(this.tid,this.tname,this.tsalary)
    }
}
let tech=new Employee(4,"RinaLipte",1500000)
tech.getData()


//Inharitance

 class Manager extends Employee //extends bring value frome one class to another
{
    team;
    constructor(i,n,s,t)
    {
        super(i,n,s);
        this.team=t;
    }
}
let m1=new Manager(24,"sheru",7000000)
console.log(m1.ename)


/*use inharitance and declar a class principle extending teacher with attribute like profit*/
class Principle extends Teacher
{
    profit;
    constructor(i,n,s,p)
    {
        super(i,n,s);
        this.profit=p;
    }
}
let p1=new Principle(2,"gopi",25)
console.log(p1.tname)

export{Manager,emp1,arr}
export default display