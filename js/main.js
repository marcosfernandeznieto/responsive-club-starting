window.onload = function() {
    document.body.addEventListener("wheel", changeBackground);
}

function changeBackground() {
    console.log(window.scrollY);
    if (window.scrollY != 0) {
        document.getElementById("menu").style.backgroundColor = "#FFF";
        var lista=document.querySelectorAll("h3");
        for (let index = 0; index < lista.length; index++) {
            lista[index].style.color = "#000";
        }
    } else {
        document.getElementById("menu").style.backgroundColor = "transparent";
        var lista=document.querySelectorAll("h3");
        for (let index = 0; index < lista.length; index++) {
            lista[index].style.color = "rgb(255, 255, 255)";
        }
    }
    
}