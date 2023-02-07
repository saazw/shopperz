const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});

function search()
{
    var inp = document.getElementById('input').value;
    if(inp == "About" || inp == "ABOUT" || inp == "about" || inp == "contact" || inp == "CONTACT" || inp == "Contact" )
    {
        window.location.href="sample.html";
    }
    else
    {
        alert('Result not found');
    }

}