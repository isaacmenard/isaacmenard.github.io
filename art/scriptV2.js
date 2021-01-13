function generateAFace(){
      document.getElementById("imgContenaireFace").innerHTML = ""
      var chooseAHead = getRandomArbitrary(0,body.face.length)
      var chooseAYeux = getRandomArbitrary(0,body.yeux.length)
      var chooseANez = getRandomArbitrary(0,body.nez.length)
      var chooseABouche = getRandomArbitrary(0,body.bouche.length)
      var chooseAHair = getRandomArbitrary(0,body.hair.length)
      var teteElement = document.createElement("div")
      var contenaireTete = document.createElement("div")

      teteElement.id = "tete"
      teteElement.className = "imgContenaire"
      teteElement.style.width = getRandomArbitrary(body.face[chooseAHead].widthMin,body.face[chooseAHead].widthMax) + "px"
      teteElement.style.height = getRandomArbitrary(body.face[chooseAHead].heightMin,body.face[chooseAHead].heightMax)  + "px"
      document.getElementById("imgContenaireFace").appendChild(teteElement)

      contenaireTete.id = "contenaireTete"
      contenaireTete.className = "imgContenaire"
      contenaireTete.style.top = 50 + body.face[chooseAHead].topBox + "%"
      contenaireTete.style.left = 50 + body.face[chooseAHead].leftBox + "%"
      contenaireTete.style.width = body.face[chooseAHead].widthBox  + "%"
      contenaireTete.style.height = body.face[chooseAHead].heightBox  + "%"
      teteElement.appendChild(contenaireTete)

      createElementFace(body.face[chooseAHead], false)
      createElementFace(body.yeux[chooseAYeux],true)
      createElementFace(body.nez[chooseANez],true)
      createElementFace(body.bouche[chooseABouche],true)

      function createElementFace(elementSelect,needResize){
        var elementImg = document.createElement("img")
        elementImg.src = elementSelect.src
        elementImg.className = "imgFace"
        if(elementSelect.top < Infinity){
            elementImg.style.top = elementSelect.top + 50 + "%"
        }
        if(getRandomArbitrary(0,2) == 1){
          if(elementSelect.left < Infinity){
              elementImg.style.left = -elementSelect.left + 50 + "%"
          }
          elementImg.style.transform = "scale(-1,1) translate(50%, -50%)"
        }else{
          if(elementSelect.left < Infinity){
              elementImg.style.left = elementSelect.left + 50 + "%"
          }
        }
        elementImg.style.width =elementSelect.width  + "%"
        elementImg.style.height = elementSelect.height+"%"
        if(needResize){
          contenaireTete.appendChild(elementImg)
        }else{
          teteElement.appendChild(elementImg)
        }
      }

}




function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

setInterval(generateAFace,200)
