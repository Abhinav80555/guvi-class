// 1.creating an HTML element dynamically
// using document.create Element("elementname");
// function foo(){
// var element=document.createElement("div");
// <div></div>
// 2.to add the content:
// innerHTML: it is a property ,to add the content to html element
// element.innerHTML="this is dynamic div";
// <div>this is dynamic div</div>
// element.innerText="<p>this is p</P>";=with tag
// element.innerHTML="<p>this is p</P>";without taghm
// 3.after creating html element ,we should add the content to the body of the document
// document.body.append(element);}


// for bootstrap flow method
// let container = document.createElement("div");
// container.setAttribute("class", "container");
// //<div class="container"></div>
// let row = document.createElement("div");
// row.setAttribute("class", "row");

// let col = document.createElement("div");
// col.setAttribute("class", "col");

// row.append(col);
// container.append(row);
// document.body.append(container);

var email=label("label","for","email","Email");
var br=document.createElement("br");
var input=inputtype("input","type","email","id","email");
var br1=document.createElement("br");
var password=label("label","for","password","Password");
var br2=document.createElement("br");
var input1=inputtype("input","type","password","id","password");
var button=button("button","onclick","foo()","Sumbit")








document.body.append(email,br,input,br2);
document.body.append(password,br1,input1);
document.body.append(button);


function label(elementname,attribute,attrvalue,value){
var res=document.createElement(elementname);
res.setAttribute(attribute,attrvalue);
res.innerHTML=value;
return res;
}

function inputtype(elementname,attribute,attrvalue,val1,val2){
    var res1=document.createElement(elementname);
    res1.setAttribute(attribute,attrvalue);
    res1.setAttribute(val1,val2)
    return res1;
}
function button(elementname,attribute,attrvalue,value){
    var res3=document.createElement(elementname);
    res3.setAttribute(attribute,attrvalue);
    res3.innerHTML=value;
    return res3;

}
function foo(){
    let ele=document.getElementById("email").value;
    let ele1=document.getElementById("password").value;
    console.log(ele,ele1)
}