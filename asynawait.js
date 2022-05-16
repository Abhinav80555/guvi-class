//async and await
//how to work with async and await
//covid19 api details fetching
//and displyaing the results


//async and await:it is a syntatic way of writing the promises easier
//to convert normal functions into async functions 
//add async keyword before the function

//the return type of async function is always promise!!

//await:is used within async function
//it will make the function to wait until the promise is resolved 
async function foo() {
    let res=await fetch("https://restcountries.com/v2/all");
    let res1=await res.json();
    console.log(res1);
    }

    foo();

//try-catch:it is a error handling statement
//try:it a code/the code to be tested 
//catch:suppose if anything happened in try block,it has to be handled in catch block    

async function foo1(){
    try {
    let res=await fetch("https://restcountries.com/v2/all");
    let res1=await res.json();
    console.log(res1);
    } catch (error) {
    console.log(error);
    }
    }    
    foo1();    