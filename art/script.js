var animFinish = true

function startAnim(){
  animFinish = false
  document.body.onclick = ""
  document.getElementById('title').style.opacity = "0"
  setTimeout(function(){
      document.getElementById('title').innerHTML = "You have to choose 2 peoples"
      document.getElementById('title').style.opacity = "1"
      setTimeout(function(){
          document.getElementById('title').style.opacity = "0"
      },2000)
  },1000)
  setTimeout(function(){
      document.getElementById('title').innerHTML = "To create a new character "
      document.getElementById('title').style.opacity = "1"
      setTimeout(function(){
          document.getElementById('title').style.opacity = "0"
      },2000)
  },4000)
  setTimeout(function(){
      document.getElementById('title').innerHTML = "Lets start"
      document.getElementById('title').style.opacity = "1"
      setTimeout(function(){
          document.getElementById('title').style.opacity = "0"
      },2000)
  },7000)
  setTimeout(function(){
      document.getElementById('title').innerHTML = "TADAAAAA"
      document.getElementById('title').style.opacity = "1"
      document.getElementById('title').style.top = "15%"
      animFinish = true
      next(1)
  },10000)

}

function next(number){
  if(animFinish == true){
    document.getElementById('title').style.opacity = "0"
    setTimeout(function(){
      document.getElementById('title').innerHTML = "TAAADAAAA"
      document.getElementById('title').style.opacity = "1"
      setInterval(function(){
          generateAFace()
      },500)
    },2000)
  }
}

function generateAFace(){
  document.getElementById('title').style.opacity = "0"
  var yeux = "Assets/yeux/"+"Y_Simple_"+(Math.floor(Math.random() * Math.floor(3)) + 1)+".png";
  var bouche = "Assets/bouche/"+"B_Simple_"+(Math.floor(Math.random() * Math.floor(6)) + 1)+".png";
  var oreille = "Assets/Oreilles/"+"O_Simple_"+(Math.floor(Math.random() * Math.floor(2)) + 1)+".png";
  var nez = "Assets/nez/"+"N_Simple_"+(Math.floor(Math.random() * Math.floor(6)) + 1)+".png";
  var tete = "Assets/tete/"+"T_Simple_"+(Math.floor(Math.random() * Math.floor(2)) + 1)+".png";

  if(!document.getElementById("yeux")){
      var yeuxElement = document.createElement("img")
      yeuxElement.src = yeux
      yeuxElement.id = "yeux"
      yeuxElement.className = "imgFace"
      yeuxElement.style.width = Math.floor(Math.random() * Math.floor(-15) + 57) + "%"
      document.getElementById("imgContenaireFace").appendChild(yeuxElement)

      var nezElement = document.createElement("img")
      nezElement.src = nez
      nezElement.id = "nez"
      nezElement.className = "imgFace"
      nezElement.style.width = Math.floor(Math.random() * Math.floor(-15) + 57) + "%"
      document.getElementById("imgContenaireFace").appendChild(nezElement)

      var teteElement = document.createElement("img")
      teteElement.src = tete
      teteElement.id = "tete"
      teteElement.className = "imgFace"
      document.getElementById("imgContenaireFace").appendChild(teteElement)

      var oreilleElement = document.createElement("img")
      oreilleElement.src = oreille
      oreilleElement.id = "oreille"
      oreilleElement.className = "imgFace"
      document.getElementById("imgContenaireFace").appendChild(oreilleElement)

      var boucheElement = document.createElement("img")
      boucheElement.src = bouche
      boucheElement.id = "bouche"
      boucheElement.className = "imgFace"
      boucheElement.style.width = Math.floor(Math.random() * Math.floor(-15) + 57) + "%"
      document.getElementById("imgContenaireFace").appendChild(boucheElement)

  }else{
    document.getElementById("yeux").src = yeux
    document.getElementById("yeux").style.width = Math.floor(Math.random() * Math.floor(-15) + 57) + "%"
    document.getElementById("nez").src = nez
    document.getElementById("nez").style.width = Math.floor(Math.random() * Math.floor(-15) + 57) + "%"
    document.getElementById("tete").src = tete
    document.getElementById("bouche").src = bouche
    document.getElementById("bouche").style.width = Math.floor(Math.random() * Math.floor(-15) + 57) + "%"
    document.getElementById("oreille").src = oreille
  }
}
