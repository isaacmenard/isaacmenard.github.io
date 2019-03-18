speed = 1
deltaTime = 1000
population = 0;
money = 5000;
satisfaction = 50;
consommation = 0;
maj();
intervalID = setInterval(cycle, deltaTime);
industries = 0
maisons = 0
centrale = 0
batiments = 0
centraleFournie = 8
populationList = []

function speedUp() {
    if (speed == 1) {
        document.getElementById("speed").innerHTML = 2
        speed = 2
        deltaTime = 500
    }
    else if (speed == 2) {
        document.getElementById("speed").innerHTML = 3
        speed = 3
        deltaTime = 250
    }
    else if (speed == 3) {
        document.getElementById("speed").innerHTML = 1
        speed = 1
        deltaTime = 1000
    }
    clearInterval(intervalID);
    intervalID = setInterval(cycle, deltaTime);
}
function maj() {
    document.getElementById("money").innerHTML = Math.round(money);
    document.getElementById("population").innerHTML = Math.round(population);
    document.getElementById("satisfaction").innerHTML = Math.round(satisfaction);
    document.getElementById("consommation").innerHTML = Math.round(consommation);
}
function ouvre(x, y) {
    a = x;
    b = y;
    if (document.getElementById(a + " " + b).className == "cube0") {
        document.getElementById("market").style.visibility = "visible";
    }
    if (document.getElementById(a + " " + b).className != "cube0" && document.getElementById(a + " " + b).className != "cube") {
        document.getElementById("buldozer").style.visibility = "visible";
    }
}
function batiment(effect, montant, pop, satisf, conso) {
    if (money < montant) {
        alert("vous n'avez pas assez d'argent pour faire ceci !");
    }
    else if (centrale <= batiments / centraleFournie && effect != 6) {
        alert("vous n'avez pas assez d'electricitee pour faire ceci !");
    }
    else {
        var passagecentrale = 0
        money -= montant;
        population += pop
        satisfaction += satisf
        consommation += conso
        document.getElementById(a + " " + b).className = "cube" + effect;
        if (effect == 6) { centrale += 1; passagecentrale = 1 }
        maj();
        if (passagecentrale == 0) {
            batiments += 1
        }
    }
}
function buldozer(c) {
    money -= 100
    var passagecentrale = 0
    if (document.getElementById(a + " " + b).className == "cube1") {
        maisons -= 1
        population -= 4
    }
    if (document.getElementById(a + " " + b).className == "cube2") {
        satisfaction -= 5
    }
    if (document.getElementById(a + " " + b).className == "cube3") {
        satisfaction -= 15
        consommation -= 3
    }
    if (document.getElementById(a + " " + b).className == "cube4") {
        satisfaction -= 15
        consommation -= 2
    }
    if (document.getElementById(a + " " + b).className == "cube5") {
        industries -= 1
        satisfaction += 10
    }
    if (document.getElementById(a + " " + b).className == "cube6") {
        satisfaction += 10
        consommation -= 1.5
        centrale -= 1
        if (centrale <= batiments / centraleFournie) {
            supprCentrale(batiments - centrale * centraleFournie,c)
        }
        passagecentrale = 1
    }
    if (document.getElementById(a + " " + b).className == "cube7") {
        maisons -= 1
        population -= 6
    }
    if (document.getElementById(a + " " + b).className == "cube8") {
        satisfaction -= 15
        consommation -= 2
    }
    if (document.getElementById(a + " " + b).className == "cube9") {
        satisfaction -= 10
        consommation -= 1
    }
    document.getElementById(a + " " + b).className = "cube0"
    if (passagecentrale == 0) {
        batiments -= 1
    }
}
function cycle() {
    money += population / 10
    money -= consommation
    maj();
    humain(testX(), testY());
    if (money < 0) {
        alert("GAME OVER");
        void window.location.reload()
    }
}
function testY() {
    return Math.round(Math.random() * (5 - 1) + 1)
}
function testX() {
    return Math.round(Math.random() * (12 - 1) + 1)
}
function humain(Y1, X1) {
    if (Math.round(Math.random() * (4 - 1) + 1) == 4) {
        if (maisons/3 > industries && document.getElementById(X1 + " " + Y1).className == "cube1") {
            deleteBat(X1, Y1,0)
        }
        else if (document.getElementById(X1 + " " + Y1).className == "cube7" && maisons/ 3 > industries) {
            deleteBat(X1, Y1,0)
        }
        else if (document.getElementById(X1 + " " + Y1).className == "cube5" && industries / 1 > maisons) {
            deleteBat(X1, Y1,0)
        }
        else if (maisons > satisfaction && document.getElementById(X1 + " " + Y1).className == "cube1") {
            deleteBat(X1, Y1,0)
        }
        else if (document.getElementById(X1 + " " + Y1).className == "cube7" && maisons > satisfaction) {
            deleteBat(X1,Y1,0)
        }

    }
}
function supprCentrale(nD,c) {
    alert("il y a " + nD + " batiments de trop")
    var compteur = 0
    while (compteur < nD) {
        var x1 = testX()
        var y1 = testY()
        if (document.getElementById(y1 + " " + x1).className != "cube0" && document.getElementById(y1 + " " + x1).className != "cube6" && document.getElementById(y1 + " " + x1).className != "cube10") {
            deleteBat(y1, x1)
            compteur += 1
        }
    }
}
function deleteBat(a, b,) {
    var passagecentrale =0
    if (document.getElementById(a + " " + b).className == "cube1") {
        maisons -= 1
        population -= 4
    }
    if (document.getElementById(a + " " + b).className == "cube2") {
        satisfaction -= 5
    }
    if (document.getElementById(a + " " + b).className == "cube3") {
        satisfaction -= 15
        consommation -= 3
    }
    if (document.getElementById(a + " " + b).className == "cube4") {
        satisfaction -= 15
        consommation -= 2
    }
    if (document.getElementById(a + " " + b).className == "cube5") {
        industries -= 1
        satisfaction += 10
    }
    if (document.getElementById(a + " " + b).className == "cube6") {
        satisfaction += 10
        consommation -= 1.5
        centrale -= 1
        if (centrale <= batiments / centraleFournie) {
            supprCentrale(batiments - centrale * centraleFournie)
        }
    }
    if (document.getElementById(a + " " + b).className == "cube7") {
        maisons -= 1
        population -= 6
    }
    if (document.getElementById(a + " " + b).className == "cube8") {
        satisfaction -= 15
        consommation -= 2
    }
    if (document.getElementById(a + " " + b).className == "cube9") {
        satisfaction -= 10
        consommation -= 1
    }
    document.getElementById(a + " " + b).className = "cube10"
    if (passagecentrale == 0) {
        batiments -= 1
    }
}