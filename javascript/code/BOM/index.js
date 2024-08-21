console.log(this)
console.log(window.location)
window.navigator.geolocation.getCurrentPosition((val)=>console.log(val.coords()))

//*********************************************//
document.getElementById('btn')
function getVideo()

let s=window.navigator.mediaDevices.getUserMedia({video:true}).then (s)=>
({
    
     const v=document.getElementById("vd")
     v.srcObject =s;
})