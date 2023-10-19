//on start
function launch(){
    var win = document.querySelector(".onStart");
    win.style.display = "flex";
    setTimeout(function(){

        win.style.display = "none";
        document.querySelector(".content").style.display = "block";
    },4000)
}
window.onload = launch()
 
//dropdown
var drop = document.querySelector(".dropdown");
var barElement = document.querySelector(".bar")
barElement.addEventListener("click",function(){
    // Get the current icon element
    const iconElement = barElement.querySelector('i');

    // Check the current icon class and toggle it to 'fa-xmark' if it's 'fa-bars'
    if (iconElement.classList.contains('fa-bars')) {
        iconElement.classList.remove('fa-bars');
        iconElement.classList.add('fa-xmark');
        drop.style.top = '3.5rem';
    } else {
        // Toggle it back to 'fa-bars' if it's 'fa-xmark'
        iconElement.classList.remove('fa-xmark');
        iconElement.classList.add('fa-bars');
        drop.style.top = '-9rem';
    }
})

// cnhange text animation 

var changeText = document.getElementById('changetext');
const textOptions = ["Check PNR status", "Check Seat Availability", "Find Train", "Many More..."];
let currentTextIndex = 0;
function changeT(){
    changeText.innerText = textOptions[currentTextIndex++];
    if(currentTextIndex===4){
        currentTextIndex = 0;
    }
}
setInterval(changeT,3000);