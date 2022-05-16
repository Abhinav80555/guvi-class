var label=document.createElement("label");
label.innerHTML="Enter the country name";
label.setAttribute("for","text");

var br=document.createElement("br");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");
input.setAttribute("required","true");

var br1=document.createElement("br");

var button=document.createElement("button");
button.addEventListener("click",foo);
button.innerHTML="Search";

document.body.append(label,br,input,br1,button);
async function foo(){
    let cc=document.getElementById("text").value;
    let res=await fetch(`https://api.covid19api.com/total/country/${cc}`);
    let res1=await res.json();
    console.log(res1);
    for(var i=0;i<res1.length;i++){
        // console.log(`Active:${res1[i].Active} Deaths:${res1[i].Deaths}`);
       var ele=document.createElement("div");
       ele.style.color="green";
       ele.style.fontSize="14px";
       ele.innerHTML=`Active:${res1[i].Active} Deaths:${res1[i].Deaths}`
       document.body.append(ele);
    
     
    }

}
