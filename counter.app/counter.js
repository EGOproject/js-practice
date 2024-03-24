var syncButton = document.querySelector("#sync");
var countButton = document.querySelector("#count");
var updateButton = document.querySelector("#update");

if (!localStorage.getItem("#countValue")) {
    localStorage.setItem( "#countValue", 0 );
}
if (!localStorage.getItem("#oValue")) {
    localStorage.setItem( "#oValue", 0 );
}
// }else{
//     document.querySelector("#countValue").innerHTML = localStorage.getItem("#countValue");
// }
function count() {
    let countValue = localStorage.getItem("#countValue");
    countValue ++;
    document.querySelector("#countValue").innerHTML = countValue;
    localStorage.setItem("#countValue", countValue);
}
function update(){
    printCvalue = localStorage.getItem("#countValue");
    const newOvalue = parseFloat(localStorage.getItem("#countValue")) + parseFloat(localStorage.getItem("#oValue"));
    document.querySelector("#oValue").innerHTML = newOvalue;
    localStorage.setItem("#oValue",newOvalue);
    localStorage.setItem("#countValue",0);
    document.querySelector("#countValue").innerHTML = localStorage.getItem("#countValue");
    printOvalue = newOvalue;
}
function sync() {
    if(document.querySelector("#sync").innerHTML === "SYNC") {
        document.querySelector("#sync").innerHTML = "UNSYNC";
        document.querySelector("#update").disabled = true;
        document.querySelector("#update").style.visibility= 'hidden';
        document.querySelector("#count").onclick = () => {
            count();
            syncUpdate();
        }
        
    } else{
        document.querySelector("#sync").innerHTML = "SYNC";
        localStorage.setItem("#countValue", 0);
        document.querySelector("#countValue").innerHTML = '0';
        document.querySelector("#count").onclick = count;
        document.querySelector("#update").disabled = false;
        document.querySelector("#update").style.visibility= 'visible';
    }
}
function unsync(){
    document.querySelector("#sync").innerHTML = "SYNC";
    localStorage.setItem("#countValue", 0);
    document.querySelector("#countValue").innerHTML = '0';
    document.querySelector("#count").onclick = count;
    document.querySelector("#update").disabled = false;
    document.querySelector("#update").style.visibility= 'visible';
}
function syncUpdate(){
    const newOvalue = 1 + parseFloat(localStorage.getItem("#oValue"));
    document.querySelector("#oValue").innerHTML = newOvalue;
    localStorage.setItem("#oValue",newOvalue);
    document.querySelector("#countValue").innerHTML = localStorage.getItem("#countValue");
}
function reset(){
    localStorage.setItem( "#countValue", 0 );
    localStorage.setItem( "#oValue", 0 );
    document.querySelector("#countValue").innerHTML = localStorage.getItem("#countValue");
    document.querySelector("#oValue").innerHTML = localStorage.getItem("#oValue");
    unsync();
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#countValue").innerHTML = localStorage.getItem("#countValue");
    document.querySelector("#oValue").innerHTML = localStorage.getItem("#oValue");
    
    document.querySelector("#count").onclick = count;
    document.querySelector("#update").onclick = update;
    document.querySelector("#sync").onclick = sync;
    document.querySelector("#reset").onclick = reset;

});