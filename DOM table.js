// let container=foo("div","container");
// let row=foo("div","row");
// let col=foo("div","col");

// row.append(col);
// container.append(row);
// document.body.append(container);

// function foo(elementname,attrname){

//     let ele=document.createElement(elementname);
//     //an alternative for setAttribute in classname
//     ele.className=attrname;
//     return ele;
    
//     }

// 1.getElementById;
// 2.getElementByClassname;
// 3.getElementByTagname;
// 4.document.querySelector();
// 5.document.querySelectorAll();


// function foo(){
// let ele1=document.getElementById("firstname").value;
// let ele2=document.getElementById("midname").value;
// let ele3=document.getElementById("lastname").value;
// let ele4=document.getElementById("password").value;
// console.log(ele1,ele2,ele3,ele4)
// }



//creating tables using DOM
var table=document.createElement("table");
table.className="table";
//head code
var thead=document.createElement("thead");
thead.className="thead-dark";

var tr=document.createElement("tr");

var th1=createtrth("th","firstname");
var th2=createtrth("th","lastname");

tr.append(th1,th2);
thead.append(tr);

//body of the table code
var tbody=document.createElement("tbody");
var tr=document.createElement("tr");

var td1=createtrth("td","mak");
var td2=createtrth("td","otto");

tr.append(td1,td2);

var tbody=document.createElement("tbody");
var tr1=document.createElement("tr");

var td3=createtrth("td","abhi");
var td4=createtrth("td","nav");

tr1.append(td3,td4);
tbody.append(tr,tr1rd);

table.append(thead,tbody);
document.body.append(table);


//document.createElemenet();ele.innerHTML=ele;
function createtrth(element,values){
    var ele=document.createElement(element);
    ele.innerHTML=values;
    return ele;}