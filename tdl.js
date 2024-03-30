document.addEventListener("DOMContentLoaded", function (){

    //by default the submitt button is disabled 7
    document.querySelector("#itext").onkeyup = () => {
        if(document.querySelector("#itext").value.length , 0){
            document.querySelector("#submit").disabled = true;
        }else{
            document.querySelector("#submit").disabled = false;
    }};



    document.querySelector("form").onsubmit = () => {
        const task = document.querySelector("#itext").value;
        const li = document.createElement("li");
        li.innerHTML=task;
        document.querySelector("#tasks").append(li);
        document.querySelector("#itext").value="";
        document.querySelector("#submit").disabled = true;
        return false;
    }
});
