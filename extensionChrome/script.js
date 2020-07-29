// JavaScript Document
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		 document.body.innerHTML = (this.responseText)
	  }
	};
	xhttp.open("GET", "http://localhost/Sextension Chrome/list.php", true);
	xhttp.send();