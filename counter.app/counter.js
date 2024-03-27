var syncButton = document.querySelector("#sync");
var countButton = document.querySelector("#count");
var updateButton = document.querySelector("#update");

if (!localStorage.getItem("#countValue")) {
    localStorage.setItem( "#countValue", 0 );
}
if (!localStorage.getItem("#oValue")) {
    localStorage.setItem( "#oValue", 0 );
}

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
        const newOvalue = parseFloat(localStorage.getItem("#countValue")) + parseFloat(localStorage.getItem("#oValue"));
        localStorage.setItem("#oValue", newOvalue);
        document.querySelector("#oValue").innerHTML = newOvalue;
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
    document.querySelector("#sync").innerHTML = "SYNC";
    document.querySelector("#update").disabled = false;
    document.querySelector("#update").style.visibility= 'visible';
}
function cPrint(){
    print();
}
function previewScreen(){
    document.querySelector(".previewContainer").style.visibility = "visible";

}
function counterScreen(){
    document.querySelector(".previewContainer").style.visibility = "hidden";

}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#countValue").innerHTML = localStorage.getItem("#countValue");
    document.querySelector("#oValue").innerHTML = localStorage.getItem("#oValue");
    document.querySelector("#prev").addEventListener("click", previewScreen);
    document.querySelector("#back").addEventListener("click", counterScreen);
    document.querySelector("#print").addEventListener("click", printContent);
    document.querySelector("#count").onclick = count;
    document.querySelector("#update").onclick = update;
    document.querySelector("#sync").onclick = sync;
    document.querySelector("#reset").onclick = reset;
    document.querySelector("#print").onclick = cPrint;
    document.querySelector("#prev").onclick = previewScreen;
    document.querySelector("#back").onclick = counterScreen;
});
document.addEventListener("keyup", (e)=>{
    if(e.key==="PrintScreen"){
        navigator.clipboard.writeText("");
        alert("Screenshots Disabled");
    }
})
