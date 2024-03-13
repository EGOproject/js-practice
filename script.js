let counter = 0
function count(){
    if (document.querySelector("h2").innerHTML==="I HAVE LEFT"){
        alert("NOT AVAILABLE PLEASE WAIT!");
    }else {
        counter += 1
    // alert(counter);
        const countValue = document.querySelector("h1").innerHTML = counter
    }
    
}
function hello(){
    // alert("hello, world");
    if (document.querySelector("h2").innerHTML === "I AM HERE"){
        document.querySelector("h2").innerHTML = "I HAVE LEFT not";
    } else{
        document.querySelector("h2").innerHTML = "I AM HERE";
    }
}
function helloModified(){
    // creating variables for functions
    let heading = document.querySelector("h2");
    //instead of let you can use "const" to make it unchangeable
    if (heading.innerHTML === "I AM HERE"){
        heading.innerHTML = "I HAVE LEFT";
    } else{
        heading.innerHTML = "I AM HERE";
    }
}