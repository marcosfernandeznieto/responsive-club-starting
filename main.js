window.onload = function() {
    document.body.addEventListener("wheel", changeBackground);
}

function changeBackground() {
    document.getElementById("menu").style.backgroundColor = "#FFF";
    var lista=document.querySelectorAll("h3");
    for (let index = 0; index < lista.length; index++) {
        lista[index].style.color = "#000";
    }
}