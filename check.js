let coldEle=document.getElementsById(ele1);
let coughEle=document.getElementsById(ele2);
let bpEle=document.getElementsById(ele3);
let spEle=document.getElementsById(ele4);


let emptyContainer=document.getElementById("empContainer");
let btn=document.getElementById("submitBtn");

btn.addEventListener("click",function(event){
    event.preventDefault();
    if (coldEle.checked===true && coughEle.checked===true)
    {
        console.log("FEVER");
    } 
});