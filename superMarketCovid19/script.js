// JavaScript Document
var leftArrow = null;
var topArrow = null;
var posLeft = 0;
var posTop = 0;
var sizeLeft = window.innerWidth * 0.65
var sizeTop = window.innerHeight * 0.75
var sizeStockLeft = window.innerWidth * 0.15
var sizeStockTop = window.innerHeight * 0.75
var money = 500
var batimentConfig = []
var hourDep = 8
var hourFinish = 22
var hours = 7
var canMouve = true
var minutes = 29
var perso = document.getElementById("perso")
var canSpeak = true;
var benVar = false

refreshMoney()
document.getElementsByClassName("textDialogue")[0].style.bottom = "-400px"
document.getElementsByClassName("monster")[0].style.bottom = "-400px"
document.getElementsByClassName("textDialogue")[0].style.left = "60%"
document.getElementsByClassName("left")[0].style.left="-15%"
document.getElementsByClassName("batiment")[0].style.width = sizeLeft + "px"
document.getElementsByClassName("batiment")[0].style.height = sizeTop + "px"
document.getElementsByClassName("stock")[0].style.width = sizeStockLeft + "px"
document.getElementsByClassName("stock")[0].style.height = sizeStockTop + "px"
document.getElementsByClassName("batiment")[0].style.marginLeft = 0
document.getElementsByClassName("batiment")[0].style.marginTop = 0
addMinute()
document.getElementById("perso").style.top = "80%";
document.getElementById("perso").style.left = (sizeStockLeft/2.3) + sizeLeft + "px";
document.getElementsByClassName("leftWallContenaire")[0].style.marginTop = -((sizeLeft / 50 * 57)/22)+ "px";
document.getElementsByClassName("rightWallContenaire")[0].style.marginTop = -((sizeLeft / 50 * 57)/22)+ "px"
document.getElementsByClassName("right2WallContenaire")[0].style.marginTop = -((sizeLeft / 50 * 57)/22)+ "px"
document.getElementsByClassName("panneau")[0].style.marginTop = -(((sizeLeft +sizeStockLeft) / 50 * 57)/22 + 5) + "px"

setTimeout(function(){
	document.getElementsByClassName("textDialogue")[0].style.transition = "0.5s"
	document.getElementsByClassName("monster")[0].style.transition  = "0.5s"
	document.getElementsByClassName("left")[0].style.transition  = "0.5s"
},100)
setInterval(update,10)

for(var i = 0; i < 50;i++){
	var newPillon = document.createElement("div");
	newPillon.alt="pillon"
	newPillon.className = "pillon pillonTop";
	newPillon.style.width = (sizeLeft +sizeStockLeft) / 50 +"px"
	newPillon.style.height = ((sizeLeft +sizeStockLeft) / 50 * 57)/22 + "px"
	document.getElementsByClassName("topWallContenaire")[0].style.marginTop = "-"+(((sizeLeft +sizeStockLeft) / 50 * 57)/22) + "px"
	document.getElementsByClassName("topWallContenaire")[0].appendChild(newPillon)
	
	var newPillon = document.createElement("div");
	newPillon.alt="pillon"
	newPillon.className = "pillon pillonTop";
	newPillon.style.width = (sizeLeft +sizeStockLeft) / 50 +"px"
	newPillon.style.height = ((sizeLeft +sizeStockLeft) / 50 * 57)/22 + "px"
	document.getElementsByClassName("downWallContenaire")[0].appendChild(newPillon)
}
for(var i = 0; i <55;i++){
	
	if(i != 26 && i != 27&&i != 25 && i != 28 && i != 24 && i != 23&&i != 29 && i != 30){
		var newPillon = document.createElement("div");
		newPillon.className = "pillon pillonLeft";
		newPillon.alt="pillon"
		newPillon.style.width = sizeTop / 50 +"px"
		newPillon.style.height = (sizeTop / 50 * 11)/12 + "px"
		document.getElementsByClassName("leftWallContenaire")[0].appendChild(newPillon)
	}else{
		var newPillon = document.createElement("div");
		newPillon.alt="pillon"
		newPillon.style.width = sizeTop / 50 +"px"
		newPillon.style.height = (sizeTop / 50 * 11)/12 + "px"
		document.getElementsByClassName("leftWallContenaire")[0].appendChild(newPillon)
	}
	
	if(i != 26 && i != 27&&i != 25 && i != 28 && i != 24 && i != 23&&i != 29 && i != 30){
		var newPillon = document.createElement("div");
		newPillon.className = "pillon pillonRight";
		newPillon.alt="pillon"
		newPillon.style.width = sizeTop / 50 +"px"
		newPillon.style.height = (sizeTop / 50 * 11)/12 + "px"
		document.getElementsByClassName("rightWallContenaire")[0].appendChild(newPillon)
	}else{
		var newPillon = document.createElement("div");
		newPillon.alt="pillon"
		newPillon.style.width = sizeTop / 50 +"px"
		newPillon.style.height = (sizeTop / 50 * 11)/12 + "px"
		document.getElementsByClassName("rightWallContenaire")[0].appendChild(newPillon)
	}
	var newPillon = document.createElement("div");
		newPillon.className = "pillon pillonRight";
		newPillon.alt="pillon"
		newPillon.style.width = sizeTop / 50 +"px"
		newPillon.style.height = (sizeTop / 50 * 11)/12 + "px"
	document.getElementsByClassName("right2WallContenaire")[0].style.right = -sizeStockLeft +"px"
		document.getElementsByClassName("right2WallContenaire")[0].appendChild(newPillon)
}

document.onkeydown = checkKey;
document.onkeyup = checkKeyUp;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        topArrow = 1
    }
    else if (e.keyCode == '40') {
        topArrow = -1
    }
    else if (e.keyCode == '37') {
       leftArrow = 1
    }
    else if (e.keyCode == '39') {
       leftArrow = -1
    }

}
function checkKeyUp(e) {

    e = e || window.event;

    if (e.keyCode == '38' && topArrow == 1) {
        topArrow = null
    }
    else if (e.keyCode == '40' && topArrow == -1) {
        topArrow = null
    }
    else if (e.keyCode == '37' && leftArrow == 1) {
       leftArrow = null
    }
    else if (e.keyCode == '39' && leftArrow == -1) {
       leftArrow = null
    }

}
function update(){
	if(money < 0){
		alert("vous n'avez plus d'argent ! PERDU :) ")
		window.location = ""
	}
	for(var i = 0; i < batimentConfig.length;i++){
		if(batimentConfig[i].stock < 25 && batimentConfig[i].stock  != 0){
			batimentConfig[i].element.className = "alertBat batElement "+batimentConfig[i].id
		}else{
			batimentConfig[i].element.className = " batElement "+batimentConfig[i].id
		}
	}
}


function dialogueOpen(text){
	document.getElementsByClassName("textDialogue")[0].innerHTML = ""
	document.getElementsByClassName("textDialogue")[0].style.bottom = "50px"
	document.getElementsByClassName("textDialogue")[0].style.left = "0"
	document.getElementsByClassName("monster")[0].style.bottom = "310px"
	var count = 0;
	var interval = setInterval(function(){
		document.getElementsByClassName("textDialogue")[0].innerHTML += text.split("")[count]
		count++
		if(count >= text.split("").length){
			clearInterval(interval)
			setTimeout(dialogueClose,3000)
		}
	},50)
}
function dialogueClose(text){
	document.getElementsByClassName("textDialogue")[0].style.bottom = "-400px"
	document.getElementsByClassName("textDialogue")[0].style.left = "60%"
	document.getElementsByClassName("monster")[0].style.bottom = "-400px"
}

function tutoriel(){
	document.getElementsByTagName("header")[0].removeChild(document.getElementById("tutoBoutton"))
	document.getElementsByTagName("header")[0].removeChild(document.getElementById("startBoutton"))
	setTimeout(function(){
		dialogueOpen("Salut, je suis Patrick ! C'est moi qui vais t'aider durant cette aventure !")
	},2000)

	setTimeout(function(){
		dialogueOpen("Comme tu le sais, le COVID-19 Alias Coronavirus créé la panique ! En effet les gens paniquent et veulent faire des réserves en pillant notre super marché ! Ton objectif est donc de survivre au différentes journées et alimenter assez de monde..")
	},10000)

	setTimeout(function(){
		dialogueOpen("Rappelons-le, nous sommes en Guerre ! Bonne chance à toi !")
	},27000)
	
	setTimeout(function(){
		start()
	},33000)
}
function start(){
	if(document.getElementById("tutoBoutton")){
		document.getElementsByTagName("header")[0].removeChild(document.getElementById("tutoBoutton"))
		document.getElementsByTagName("header")[0].removeChild(document.getElementById("startBoutton"))
	}
	//document.getElementById("benBoutton").style.visibility = "visible"
	document.getElementsByClassName("left")[0].style.left="0"
	addMinute()
	setInterval(addMinute,500)
	buy(0,'masques',document.getElementById("firstBat"))
	buy(0,'gels',document.getElementById("firstBat"))
	buy(0,'pq',document.getElementById("firstBat"))
	buy(0,'pates',document.getElementById("firstBat"))
	buy(0,'alcool',document.getElementById("firstBat"))
	buy(0,'preservatif',document.getElementById("firstBat"))
	buy(0,'chloroquine',document.getElementById("firstBat"))
}

function ben(){
	if(benVar == false){
		benVar = true
		var cursors = document.createElement("style")
		cursors.innerHTML = ".batElement{cursor: crosshair}"
		document.body.appendChild(cursors)
		for(var i = 0; i < document.getElementsByClassName("batElement").length;i++){
			document.getElementsByClassName("batElement")[i].id = i
			document.getElementsByClassName("batElement")[i].onclick = function(){
				destroyBat(this,cursors)
			}
		}
	}else{
		benVar = false
	}
}
function destroyBat(element,cursors){
	batimentConfig[element.id]['newEmplacement'] = true
	element.parentNode.removeChild(element)
	document.body.removeChild(cursors)
	benVar = false
	for(var i = 0; i < document.getElementsByClassName("batElement").length;i++){
		document.getElementsByClassName("batElement")[i].id = i
		document.getElementsByClassName("batElement")[i].onclick = function(){
			rechargerBat(this,this.id,this.idKey)
		}
	}
}
function refreshMoney(){
	document.getElementById("money").innerHTML = money
}
function buy(prix,element,Elelement){
	if(batimentConfig.length <  14 && money - prix >= 0){
		var newElement = []
		money -= prix
		refreshMoney()
		newElement['type'] = element
		newElement['id'] = element
		addBatiment(newElement)
	}
}
function addBatiment(element){
	element['stock'] = 100
	var check = batimentConfig.length
	//for(var i = 0; i < batimentConfig.length; i++){
	//	if(batimentConfig[i]['newEmplacement'] == true){
	//		check = i
	//		batimentConfig[i]['newEmplacement'] = false
	//	}
	//}
	var newBat = document.createElement("div")
	newBat.className = "batElement "+element.id
	if(check < 7){
		newBat.style.left = ((sizeLeft / 8) * (check+1)-25) +"px"
		newBat.style.top = sizeTop / 12 +"px"
	}else{
		newBat.style.left = ((sizeLeft / 8) * (check-6)-25)+"px"
		newBat.style.top = sizeTop / 12 * 6+"px"
	}
	newBat['id'] = element.id
	newBat['idKey'] = check
	newBat.onclick = function (){
		rechargerBat(this,this.id,this.idKey)
	}
	newBat.innerHTML = element['stock']
	document.getElementsByClassName("bat"+check)[0].appendChild(newBat)
	element['element'] = newBat
	if(check == batimentConfig.length){
		batimentConfig.push(element)
	}else{
		batimentConfig[check] = element
	}
}
function addMinute(){
	if(minutes +1 < 60){
			minutes++
	}else{
		minutes = 0
		hours++
	}
	if(minutes < 10){
		document.getElementById("hour").innerHTML = hours+"h0"+minutes
	}else{
		document.getElementById("hour").innerHTML = hours+"h"+minutes
	}
	if(hours >= hourDep && minutes == 0 || hours >= hourDep && minutes == 30){
		launchVague(randomNum(hours*0.8,hours*2))
	}else if(hours >= hourDep){
		launchVague(randomNum(0,hours/4))
	}
}
function launchVague(number){
	for(var i = 0; i < number; i++){
		var mignion = document.createElement("img")
		mignion.alt = "img"
		mignion.className = "mignion"
		mignion.src = "https://i.ya-webdesign.com/images/transparent-personality-pixel-art-2.png"
		mignion.style.top = sizeTop/2 -randomNum(-20,40) - ((sizeLeft +sizeStockLeft) / 50 * 57)/22  +"px";
		mignion.style.left = "-100px"
		document.getElementsByClassName("int")[0].appendChild(mignion)
		mignion.style.transition = "1s"
		var count = 0
		var choix = randomBat()
		allerPos(mignion,choix)
	}
}
function randomBat(){
	var choix = randomNum(0,7)
	listBat = []
	var rupture = true;
	switch (choix){
		case 0 : choix = "masques"; break;
		case 1 : choix = "gels"; break;
		case 2 : choix = "pates"; break;
		case 3 : choix = "pq"; break;
		case 4 : choix = "alcool"; break;
		case 5 : choix = "preservatif"; break;
		case 6 : choix = "chloroquine"; break;
	}
	for(var i = 0; i < batimentConfig.length; i++){
		if(batimentConfig[i].id == choix){
			listBat.push(i)
		}
		if(batimentConfig[i].id != "dead"){
			rupture = false
		}
	}
	if(listBat.length > 0){
		return listBat[randomNum(0,listBat.length)]
	}else if(rupture == true){
		alert("Vous n'avez plus de rayon disponibles ! PERDU :) ")
		window.location = ""
	}else{
		money -= randomNum(2,8)
		refreshMoney()
		if(canSpeak == true){
			canSpeak = false

			dialogueOpen("Attention, les clients non plus accès au rayon "+choix+" veuillez le ravitailler en envoyant des stocks dessus ou en créant un nouveau ! vous perdez de l'argent !")
			setTimeout(function(){
				canSpeak = true
			},30000)
		}
		return randomBat()
	}
}
function randomNum(min, max) {
   min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function findBat(id){
	for(var i = 0; i < batimentConfig.length;i++){
		if(i == id){
			return batimentConfig[i]
		}
	}
	return false
}
function allerPos(element,pos){
	if(pos < 7){
		var posCalc = pos
		element.style.transition = (1*(posCalc+1)+(randomNum(0,10)/10))+"s"
		var set = setTimeout(function(){
			element.style.left = ((sizeLeft / 8) * (pos+1))+randomNum(35,60) +"px"
			setTimeout(function(){
				element.style.transition = "1s"
				element.style.top = sizeTop / (randomNum(25,60)/10)  - ((sizeLeft +sizeStockLeft) / 50 * 57)/22 +"px"
				setTimeout(function(){
					backPos(element)
					var nbElementsClient = randomNum(1,15)
					findBat(pos)['stock'] -= nbElementsClient
					money += nbElementsClient
					refreshMoney()
					findBat(pos)['element'].innerHTML = findBat(pos)['stock']
					if(findBat(pos)['stock'] <= 0){
						findBat(pos)['element'].className =  "batElement deadBat"
						findBat(pos)['id'] = "dead"
						findBat(pos)['element'].innerHTML = 0
					}
				},1*(posCalc+1)*1000)
			},(1*(pos+1))*randomNum(800,1200))
			
		},100)
	}else{
		var posCalc = pos
		element.style.transition = (1*(posCalc-6)+(randomNum(0,10)/10))+"s"
		var set = setTimeout(function(){
			element.style.left = ((sizeLeft / 8) * (pos-6))+randomNum(35,60) +"px"
			setTimeout(function(){
				element.style.transition = "1s"
				element.style.top = sizeTop / (randomNum(37,50)/10)*3  - ((sizeLeft +sizeStockLeft) / 50 * 57)/22 +"px"
				setTimeout(function(){
					backPos(element)
					findBat(pos)['stock'] -= randomNum(1,15)
					findBat(pos)['element'].innerHTML = findBat(pos)['stock']
					if(findBat(pos)['stock'] <= 0){
						findBat(pos)['element'].className =  "batElement deadBat"
						findBat(pos)['id'] = "dead"
						findBat(pos)['element'].innerHTML = 0
					}
				},1*(posCalc-6)*1000)
			},(1*(pos-6))*randomNum(800,1200))
		},100)
	}
	element['positionBat'] = pos
}
function backPos(element){
	element.style.top = sizeTop/2 -randomNum(-20,40) - ((sizeLeft +sizeStockLeft) / 50 * 57)/22  +"px"
	setTimeout(function(){
		if(randomNum(1, 3) == 1){
			if(element.positionBat <7){
				element.style.transition = (1*(element.positionBat+1))+"s"
				element.style.left = "-100px"
				setTimeout(function(){
					element.style.visibility = "hidden"
				},(1*(element.positionBat+1))*500)
			}else{
				element.style.transition = (1*(element.positionBat-6))+"s"
				element.style.left = "-100px"
				setTimeout(function(){
					element.style.visibility = "hidden"
				},(1*(element.positionBat-6))*500)
			}
		}else{
			var choix = randomBat()
			allerPos(element,choix)
		}
	},randomNum(800,1200))
}
function rechargerBat(element, id,key){
	if(canMouve == true){
		canMouve = false
		var cursors = document.createElement("style")
		cursors.innerHTML = ".batElement{cursor: not-allowed}"
		document.body.appendChild(cursors)
		perso.style.transition = "1s";
		perso.style.top = "20%"
		var posCalc = key < 7 ? (key+1) : key-6
		var posCalcDist = key < 7 ? (7 - key+1) : 14 - key
		setTimeout(function(){
			perso.style.transition = "0s";
			perso.className="reverseLift forkLift"
			setTimeout(function(){
				perso.style.transition = "0.5s";
				perso.src="img/forkLiftPlein.png"
				perso.style.top = "35%"
				setTimeout(function(){
					perso.style.transition = (0.8*(posCalcDist)+(randomNum(0,10)/10))+"s"
					perso.style.left = ((sizeLeft / 8) * (posCalc))+randomNum(35,60) +"px"
					setTimeout(function(){
						perso.style.transition = "1s"
						perso.style.top = key < 7 ? "20%" : "60%"
						setTimeout(function(){
							findBat(key)['id'] = id
							element.className =  "batElement "+id
							findBat(key)['stock'] = 100
							element.innerHTML = findBat(key)['stock']
							retourBat(0.8*(posCalcDist)+(randomNum(0,10)/10),cursors)
						},1000)
					},(0.8*(posCalcDist)+(randomNum(0,10)/10))*1000)
				},700)
			},100)
		},1500)
	}
}
function retourBat(time,cursor){
	perso.style.transition = "0s";
	perso.className="forkLift"
	perso.src="img/forkLiftVide.png"
	setTimeout(function(){
		perso.style.transition = "0.8s";
		perso.style.top = "35%"
		setTimeout(function(){
			perso.style.transition = time+"s";
			perso.style.left = (sizeStockLeft/2.3) + sizeLeft + "px";
			setTimeout(function(){
				perso.style.transition = "0.8s";
				perso.style.top = "80%";
				canMouve = true
				document.body.removeChild(cursor)
			},time*1000)
		},800)
	},1000)
}