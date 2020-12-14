var elList = document.getElementsByTagName("td");
var caseSelect = null
var colorSelect = null
var caseSelectId = null;
var infoCases = null;
var arraySelect = 7;
document.getElementById("palette").style.visibility = "hidden"

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      infoCases = this.responseText;
      infoCases = infoCases.split("$")
      infoCases.forEach((item, i) => {
        item = item.split("/")
        for(var i = 0; i < item.length;i++){
          item[i] = item[i].split("\'").join("")
        }
        if(item[1] == arraySelect){
          elList[item[0]].style.backgroundColor = item[2]
        }
      });
    }
  };
  xhttp.open("GET", "https://donjonsansdragon.space/artPlaCaseGet.php", false);
  xhttp.send();



function modifierCase(el){
  for(var i = 0; i < elList.length; i++){
    if(elList[i] == el){
      caseSelect = el
      caseSelectId = i
    }
  }
  document.getElementById("palette").style.visibility = "visible"
}

function newColor(color) {
  colorSelect = color
  caseSelect.style.background = color
  document.getElementById("palette").style.visibility = "hidden"
  sendEnd()
}

for(var i = 0; i < elList.length; i++){
  if(elList[i].className != "color"){
      elList[i].addEventListener("click", function(){modifierCase(this)}, false);
  }else{
      elList[i].addEventListener("click", function(){newColor(this.style.backgroundColor)}, false);
  }
}

function sendEnd() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      window.location="affichageAll.html"
    }
  }
  xhttp.open("GET", "https://donjonsansdragon.space/artPlaCase.php?case='" + caseSelectId + "'&tableau=" + arraySelect + "&couleur='"+colorSelect+"'", false);
  xhttp.send();
}



var listeTd = document.getElementsByTagName("td")
var listeTable = document.getElementsByTagName("table")
if(window.innerWidth > window.innerHeight){
  document.body.style.width = window.innerHeight+"px";
  document.body.style.height = window.innerHeight+"px";
  for(var i = 0; i < listeTd.length;i++){
    listeTd[i].style.width = window.innerHeight/1.2/9+"px";
    listeTd[i].style.height = window.innerHeight/1.2/9+"px";
    listeTd[i].style.border = "1px solid gray"
  }
  for(var i = 0; i < listeTable.length;i++){
    listeTable[i].style.width = window.innerHeight/1.2+"px";
    listeTable[i].style.height = window.innerHeight/1.2+"px";
  }
}else{
  document.body.style.width = window.innerWidth+"px";
  document.body.style.height = window.innerWidth+"px";
  for(var i = 0; i < listeTd.length;i++){
    listeTd[i].style.width = window.innerWidth/1.2/9+"px";
    listeTd[i].style.height = window.innerWidth/1.2/9+"px";
  }
  for(var i = 0; i < listeTable.length;i++){
    listeTable[i].style.width = window.innerWidth/1.2+"px";
    listeTable[i].style.height = window.innerWidth/1.2+"px";
  }
}
