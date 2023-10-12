//on start
function launch(){
    var win = document.querySelector(".onStart");
    win.style.display = "flex";
    setTimeout(function(){
        win.style.display = "none";
    },5000)
}
window.onload = launch()
