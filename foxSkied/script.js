$(document).ready(function() {
    var newStyle = document.createElement("style");
	newStyle.innerHTML = ".background{height:100%;width:auto;visibility:visible}";
	document.body.appendChild(newStyle)
});

var hover = false
function load(){
	if(hover == false){
		hover = true
		document.getElementById("home").style.top = "-100%"
		document.getElementById("textHome").style.top = "0%"
		document.getElementById("montageNext").className = "arrow top" 
	}else{
		hover = false
		document.getElementById("home").style.top = "0%"
		document.getElementById("textHome").style.top = "100%"
		document.getElementById("montageNext").className = "arrow" 
	}
	
}
