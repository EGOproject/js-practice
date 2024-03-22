document.addEventListener("DOMContentLoaded", function() {
    let countValue = 0;
    function count() {
        countValue += 1;
        document.querySelector("#cValue").innerHTML = countValue;
    }
    document.querySelector("#counter").onclick = count
});