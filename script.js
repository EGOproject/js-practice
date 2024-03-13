let counter = 0
function count(){
    counter += 1
    alert(counter);
}
function hello(){
    // alert("hello, world");
    if (document.querySelector("h2").innerHTML === "I AM HERE"){
        document.querySelector("h2").innerHTML = "I HAVE LEFT";
    } else{
        document.querySelector("h2").innerHTML = "I AM HERE";
    }
}