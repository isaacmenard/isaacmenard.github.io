var caseSelect = null
var colorSelect = null
var caseSelectId = null;
var infoCases = null;


  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      infoCases = this.responseText;
      infoCases = infoCases.split("$")
      for(var j = 0; j < infoCases.length;j++){
        var item = infoCases[j]
        item = item.split("/")
        for(var i = 0; i < item.length;i++){
          item[i] = item[i].split("\'").join("")
        }
          var elList = document.getElementById(item[1]).getElementsByTagName("td");
          if(elList[item[0]-10]){
            elList[item[0]-10].style.backgroundColor = item[2]
          }
      };
    }
  };
  xhttp.open("GET", "https://donjonsansdragon.space/artPlaCaseGet.php", false);
  xhttp.send();


var listeTd = document.getElementsByTagName("td")
var listeTable = document.getElementsByTagName("table")
if(window.innerWidth > window.innerHeight){
  document.body.style.width = window.innerHeight+"px";
  document.body.style.height = window.innerHeight+"px";
  for(var i = 0; i < listeTd.length;i++){
    listeTd[i].style.width = window.innerHeight/3/9+"px";
    listeTd[i].style.height = window.innerHeight/3/9+"px";
  }
  for(var i = 0; i < listeTable.length;i++){
    listeTable[i].style.width = window.innerHeight/3+"px";
    listeTable[i].style.height = window.innerHeight/3+"px";
  }
}else{
  document.body.style.width = window.innerWidth+"px";
  document.body.style.height = window.innerWidth+"px";
  for(var i = 0; i < listeTd.length;i++){
    listeTd[i].style.width = window.innerWidth/3/9+"px";
    listeTd[i].style.height = window.innerWidth/3/9+"px";
  }
  for(var i = 0; i < listeTable.length;i++){
    listeTable[i].style.width = window.innerWidth/3+"px";
    listeTable[i].style.height = window.innerWidth/3+"px";
  }
}
