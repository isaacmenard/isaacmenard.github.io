launchTitle()
function launchTitle(){
	document.getElementById("title").className=("glitch glitchAnim")
	setTimeout(function(){
		document.getElementById("title").className=("glitch")
		setTimeout(function(){
			launchTitle()
		},Math.random() * (5000 - 3000) + 3000)
	},Math.random() * (2000 - 200) + 200)
}

function changePage(){
	document.getElementById("title").className=("glitch glitchAnim")
	document.getElementById("title").style.fontSize = "1000%"
	setTimeout(function(){
		document.getElementById("title").style.visibility = "hidden"
	},200)
}
