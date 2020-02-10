menu.onclick = function my_func() {
	let x = document.getElementById("myTopnav");

	if (x.className === "topnav"){
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

