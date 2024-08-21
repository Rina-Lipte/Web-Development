let arr=[2,5,8,4,1]
console.log(arr[0]);
console.log(arr);
console.log(arr[0]+arr[3])

//array have some default method
console.log(arr.length)  //5
console.log(arr.push(5,8,7)) //8
console.log(arr) //(8) [2,5,8,4,1,5,8,7]
console.log(arr.pop()) //7
console.log(arr)  //(7) [2,5,8,4,1,5,8]
console.log(arr.unshift(1,2,3)) //10
console.log(arr)  //(10) [1,2,3,2,5,8,4,1,5,8]
console.log(arr.shift()) //1
console.log(arr.splice(3,3)) //[5,8,4]
console.log(arr.splice(3,3,10,11,12))  //(3) [1,5,8]
console.log(arr) //(6) [2, 3, 2, 10, 11, 12]



//Q) let friends=["john","ross","rachel","monika","phoebe","brad"]
//remove "brad", add "joey"
//remove "john" add "chandler"
//between rachel and monika, add "ursella"

friends=["john","ross","rachel","monika","phoebe","brad"]
console.log(friends.splice(5,5,"joey"))
console.log(friends.splice(0,1,"chandler"))
console.log(friends.splice(3,0,"ursella"))
console.log(friends)


//-------------------------------------//

arr=[2,3,1,4,5]
console.log(arr.indexOf(3))  //1
console.log(arr.lastIndexOf(3)) //1
console.log(arr[2])  //1
console.log(arr.reverse())  //[5,4,1,3,2]


arr=[1,5,4,11]
console.log(arr.sort())  //[1,11,4,5]
console.log(arr.concat(1,2,3))

//For each

arr=[5,8,7,1,6]
function display(x){
    console.log(x)
}
arr.forEach(display)  // 5  8  7  1  6


function display(x){
    console.log(x*2)
}
arr.forEach(display)  //10  16  14  2  12


function display(x,y){
    console.log(x*2,y)
}
arr.forEach(display)  //10 0    16 1    14 2         2 3   12 4


//write a for each for above array which prints square of the number
function display(x){
    console.log(x*x)
}
arr.forEach(display) //25 64 49 1 36

//---------------map-------------------

let arr2=arr.map(function(x){
    return x*x;
})
console.log(arr2)  //[25, 64, 49, 1, 36]

let res=arr.map(function(ele){
    return ele%2==0;
})
console.log(res) //[false, true, false, false, true]

//filter
let res2=arr.filter(function(ele){
    return ele%2==0;
})
console.log(res2)//[8,6]

//reduce
arr=[5,4,8,1,4]
let result=arr.reduce(function(prev,curr){
    return prev+curr;
},10)
console.log((result)) //32