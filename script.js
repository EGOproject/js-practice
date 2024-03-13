document.addEventListener("DOMContentLoaded", function(){
    const available =document.querySelector("h3");
    function availability(){
        if(available.innerHTML === "ONLINE"){
            available.innerHTML = "OFLINE";
        }else{
            available.innerHTML = "ONLINE";
        }
    }
    const countValue =document.querySelector("h1");
    counter = 0
    function count(){
        if(available.innerHTML === "ONLINE"){
            counter += 1;
            countValue.innerHTML=counter;
            if (counter % 10 ==0){
                alert(`Count Has Reached ${counter}`);
            }
        }
        else{
            alert("NOT AVAILABLE PLEASE WAIT!");
        }
    }
    document.querySelector("form").onsubmit = function(){
        const name=document.querySelector("#name").value
        alert(`hello ${name}!`);
        alert("Form Submitted Successfully!")
    }
    document.querySelector("#count").onclick = count
    document.querySelector("#available").onclick = availability

    document.querySelector("#yellow").onclick = function(){
        document.querySelector("#tag").style.color="yellow"
    }
    document.querySelector("#red").onclick = function(){
        document.querySelector("#tag").style.color="red"
    }
    document.querySelector("#blue").onclick = function(){
        document.querySelector("#tag").style.color="blue"
    }
    document.querySelectorAll("button").forEach(function(button){
        button.onclick = function(){
            document.querySelector("#tag").style.color=button.dataset.color;
        }
        
    });
})