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
    localStorage.setItem( "username", "" );
    localStorage.setItem( "countname", "" );
    localStorage.setItem( "image", "" );
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
    document.querySelector(".containerA").style.filter = "blur(20px)";  
}
function counterScreen(){
    document.querySelector(".previewContainer").style.visibility = "hidden";
    document.querySelector(".containerA").style.filter = "none";
}
function fillDetails(){
    document.querySelector("#dForm").style.visibility = "visible";
    document.querySelector(".previewContainer").style.filter = "blur(20px)";
    document.querySelector("#print").disabled = true;
    document.querySelector("#details").disabled = true;
    document.querySelector("#back").disabled = true;
}
function sDone(){
    document.querySelector("#dForm").style.visibility = "hidden";
    document.querySelector(".previewContainer").style.filter = "none";
    document.querySelector("#print").disabled = false;
    document.querySelector("#details").disabled = false;
    document.querySelector("#back").disabled = false;
}
function toShare(){
    let sharedLink = window.location.href; // Get the current page URL
    navigator.clipboard.writeText(sharedLink)
        .then(() => {
            alert('Link copied to clipboard');
        })
        .catch((error) => {
            console.error('Failed to copy: ', error);
        });
}

function uploadImg() {
    let pp = document.querySelector("#PP");
    let rpp = document.querySelector("#rPP");
    let dimg = document.querySelector("#dImg");
    dimg.onchange = () => {
        pp.src = URL.createObjectURL(dimg.files[0]);
        rpp.src = URL.createObjectURL(dimg.files[0]);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#countValue").innerHTML = localStorage.getItem("#countValue");
    document.querySelector("#oValue").innerHTML = localStorage.getItem("#oValue");
    document.querySelector("#prev").onclick = previewScreen;
    document.querySelector("#back").onclick = counterScreen;
    document.querySelector("#print").onclick = printContent;
    document.querySelector("#count").onclick = count;
    document.querySelector("#update").onclick = update;
    document.querySelector("#sync").onclick = sync;
    document.querySelector("#reset").onclick = reset;
    document.querySelector("#print").onclick = cPrint;
    document.querySelector("#prev").onclick = previewScreen;
    document.querySelector("#back").onclick = counterScreen;
    document.querySelector("#details").onclick = fillDetails;
    document.querySelector("#dBack").onclick = sDone;
    document.querySelector("#share").onclick = toShare;
    document.querySelector("#ubtn").onclick = uploadImg;

});

document.addEventListener("DOMContentLoaded", function() {
    // Check if there is a saved username and image in local storage
    let savedName = localStorage.getItem("username");
    let savedImage = localStorage.getItem("image");
    let savedListName =localStorage.getItem("countname")
    if (savedName) {
        document.querySelector("#userName").value = savedName;
    }
    if (savedListName) {
        document.querySelector("#countName").value = savedListName;
        document.querySelector("#listTitle").textContent = savedListName;
    }
    
    if (savedImage) {
        document.querySelector("#PP").src = savedImage;
    }

    // Event listener for the back button
    document.querySelector("#dBack").addEventListener("click", function() {
        document.querySelector("#listTitle").innerHTML = localStorage.getItem("countname");
        document.querySelector("#reportUserName").innerHTML = localStorage.getItem("username");
        // Save the new username to local storage
        let newName = document.querySelector("#userName").value;
        localStorage.setItem("username", newName);
        
        let newListName = document.querySelector("#countName").value;
        localStorage.setItem("countname", newListName);

        // Save the new image to local storage
        let newImage = document.querySelector("#PP").src;
        localStorage.setItem("image", newImage);

        document.querySelector("#listTitle").textContent = newListName;
    });
    document.querySelector("#prev").addEventListener("click", function(){
        document.querySelector("#listTitle").innerHTML = localStorage.getItem("countname");
    })
    // Function to handle image upload
    function uploadImg() {
        let pp = document.querySelector("#PP");
        let rpp = document.querySelector("#rPP");
        let dimg = document.querySelector("#dImg");
        
        dimg.onchange = () => {
            let file = dimg.files[0];
            let reader = new FileReader();
            
            reader.onloadend = function() {
                pp.src = reader.result;
                rpp.src = reader.result;
            }
            
            if (file) {
                reader.readAsDataURL(file);
            }
        }
    }

    // Call the uploadImg function to enable image upload functionality
    uploadImg();
});