//Aplication of promises
//fetch:it is an alternative to XHR
// var res=fetch("https://restcountries.com/v3.1/all");
//fetch always returns a promises
// res.then((data)=>data.json())//it will give promise
//readable stream:its a packet of data
//to handle promises we have .then and .catch
//we are converting readble stream to object so,we are applying .json()
//then the return type is again a promise
//to handle it use then and .catch
// .then((data1)=>console.log(data1))
// .catch((error)=>console.log(error));

//CRUD:is common

var url="https://6250687d977373573f3ccfe1.mockapi.io/users";
//GET:READ
function getdata(){
    var res=fetch(url);
    res.then((data)=>data.json())
    .then((data1)=>console.log(data1))//if need to take value for data code here
    .catch((error)=>console.log(error));
}

//  getdata();

function createdata(){
    var data={
        name:"abhinav",
        email:"abi@gmail.com"
    };
    fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
}
// createdata();

function updatedata(){
    var data={
        name:"abhi",
        email:"abinav@gmail.com"
    };
    fetch(url+"/13",{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
    
}  
// updatedata();

function deletedata(){
    fetch(url+"/5",{
        method:"DELETE",
    })
}
deletedata();