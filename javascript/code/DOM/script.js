const x1=document.getElementsByTagName('p')
console.log(x1)
console.log(x1[0])

const x2=document.getElementsByClassName('para');
console.log(x2);

const x3=document.getElementById('pa');
console.log(x3);

const x4=document.querySelector('pa')
console.log(x4)

const x5=document.querySelectorAll("p")
console.log(x5)


//manipulation
function fun()
{
    //alert(x3.textContent)
    x3.textContent="Byeeeeeeeee";
    x3.innerText
    //x3.textContent=`<b>Bye Bye</b>`
    //x3.innerHTML=`<b>Bye Bye</b>`
   
}