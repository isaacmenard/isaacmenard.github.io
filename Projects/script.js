// I will be creating a different pen with touch support but right // now I have no time for it due to school

var title = ["MOI","DONJON SANS DRAGON", "COVID MARKET", "PROJET ART GENERATION VISAGE", "PROJET ART QR CODE","PROTOTYPE JEU DE SOCIETE", "MES DESSINS","MES APPLICATIONS MOBILES"]
var more = false

function plus(){
	if(!more){
		more = true
		document.getElementById("moins").style.top = "-50%"
		document.getElementById("more").style.top = "0%"
		document.getElementById("PLUS").innerHTML = "RETOUR"
	}else{
		more = false
		document.getElementById("moins").style.top = "50%"
		document.getElementById("more").style.top = "100%"
				document.getElementById("PLUS").innerHTML = "PLUS"
	}
}

const slider = document.querySelector(".items");
		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button");

		let current = 0;
		let prev = 7;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 7 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");
			}

			document.getElementById("title").innerHTML = title[current]

			if (next == 8) {
				next = 0;
			}

			if (prev == -1) {
				prev = 7;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
		}
