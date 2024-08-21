//----------While----------

i=5;
while(i<=10)
{
    console.log(i);
    i++;
}

//----------do while----------
i=5;
do{
    console.log(i);
    i++;
}
while(i<=10);

//------------For Loop----------
for(let i=0; i<=10; i++)
{
    console.log(i)
}

//"rina"----------->"RiNa"
let str="rina"
let str1=' '
for(let i=0; i<str.length; i++)
{
    str1+=(i%2==0)?str[i].toUpperCase():str[i].toLocaleLowerCase();
}
console.log(str1)


//----------forOf-----------
let arr=[5,8,9,1,2]
for(let k of arr)
{
    console.log(k)
}

//-----------forin----------
for(let k in arr)
{
    console.log(k)
}


//Input["Ajay Raj","John Doe","Raj Shekar","Pooja Begum"]
//output["AR","JD","RS","PB"]
let w=' '
w+="Ajay Raj".split(" ").map(ele=>ele[0]);
console.log(w)