let paravalue=document.getElementById('count')
let c=0;
function incr()
{
    c++;
    paravalue.textContent=c;
}
function decr()
{
    if(c<=0)
        {
            alert("It should not less");
        }
        else{
            c--;
            paravalue.textContent=c;
        }
    
}
function reset()
{
    c=0;
    paravalue.textContent=c;
}