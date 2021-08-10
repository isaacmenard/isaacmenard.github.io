data = data[0]

for(var i = 0; i < document.getElementsByClassName('logoIndex').length;i++){
  var item = document.getElementsByClassName('logoIndex')[i]
  item.onclick = function () {
    window.location = 'index.html'
  }
}


$(window).on('load', function(){
  if(document.getElementsByClassName("loadingDiv")[0]){
    document.getElementsByClassName("loadingDiv")[0].style.visibility = "hidden"
  }
});


var parcoursBigContenaire = document.getElementById("contenereBoxParcours")
if(parcoursBigContenaire){
  data.parcours.seasons.forEach((item, i) => {
    var parcoursContenaire = document.createElement("div")
    parcoursContenaire.className = "seasonsBox"
    parcoursBigContenaire.appendChild(parcoursContenaire)

    var titleSeason  = document.createElement("p")
    titleSeason.innerHTML = item.titleSeason
    parcoursContenaire.appendChild(titleSeason)
    item.episodes.forEach((item2, i) => {

      var divBoxEp = document.createElement("div")
      divBoxEp.className = "boxEp"
      parcoursContenaire.appendChild(divBoxEp)

      var leftBoxEp = document.createElement("div")
      leftBoxEp.className = "leftBoxEp"
      divBoxEp.appendChild(leftBoxEp)

      var imgBoxEp = document.createElement("img")
      imgBoxEp.src = item2.img
      leftBoxEp.appendChild(imgBoxEp)

      var centerBoxEp = document.createElement("div")
      centerBoxEp.className = "centerBoxEp"
      divBoxEp.appendChild(centerBoxEp)

      var h1Tilte = document.createElement("h1")
      h1Tilte.innerHTML = (i+1)+". "+ item2.title
      centerBoxEp.appendChild(h1Tilte)

      var pTilte = document.createElement("p")
      pTilte.innerHTML = item2.subtitle
      centerBoxEp.appendChild(pTilte)

      var rightBoxEp = document.createElement("div")
      rightBoxEp.className = "rightBoxEp"
      divBoxEp.appendChild(rightBoxEp)

      var iconDownload = document.createElement("i")
      iconDownload.className = "fas fa-download"
      rightBoxEp.appendChild(iconDownload)
    });


  });


}
