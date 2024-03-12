window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) 
  {
    document.getElementById("navbar").style.height = "4rem";
    document.getElementById("navbar").style.fontSize = "0.8rem";
    document.getElementById("logo").style.height = "4rem";
  } 
  else 
  {
    document.getElementById("navbar").style.height = "6rem";
    document.getElementById("navbar").style.fontSize = "1.2rem";
    document.getElementById("logo").style.height = "6rem";
  }
}

var modal = document.getElementById("myModal");
var spn = document.getElementById("close");
setTimeout(function() {modal.style.display = "block";}, 2000);
spn.onclick = function() {modal.style.display = "none";}