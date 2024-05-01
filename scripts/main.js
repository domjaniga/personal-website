// ITW PROJECT 2
// Author: Dominik Janiga
// xlogin: xjanigd00

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

window.onscroll = function() {scrollRotate()};

function scrollRotate() {
    var rotateimg = document.getElementById("rotateimg");
    rotateimg.style.transform = "rotate("+ (window.pageYOffset/5) + "deg)"
}