									/*ground menu bar */
function menu_collaps()
{
	 var x = document.getElementById("hid_menu");
    if (x.className.indexOf("w3-show") == -1){
        x.className += " w3-show";
    }
	else {
        x.className = x.className.replace(" w3-show", "");
    }
}
									/*ground menu bar end*/

function AboutLook()
{
	try {
 document.getElementById("about_drag").style.display="block";
}
catch(err) {
    alert("our application is being bulleied by another tab you have opened! please close all tab and try again.");
}
}
function closeAboutLook()
{
	try {
 document.getElementById("about_drag").style.display="none";
}
catch(err) {
    alert("our application is being bulleied by another tab you have opened! please close all tab and try again.");
}
}

