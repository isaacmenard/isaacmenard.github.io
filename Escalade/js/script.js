function startWall(wall) {
  document.getElementById("listeDesMurs").style.visibility = "hidden"
	document.getElementById("listeDesMurs").style.position = "fixed"
	var vertical = true;
  function start() {
	document.body.removeChild(document.getElementById("loadingAnimation"))
    document.getElementById("wallPage").style.visibility = "visible"
    window.onkeydown = logKey;
	document.getElementById("next").onclick = function(){changeSlide("+1")}
	document.getElementById("prev").onclick = function(){changeSlide("-1")}
	resize()
  }
  var listeMurs = {
    "laListe": ["Mur1", "Mur2"]
  };

  var listeDesMurs = {
    "Mur1": {
      slide: 16,
      folder: "Mur1",
		vertical:true
    },
    "Mur2": {
      slide: 10,
      folder: "Mur2",
		vertical:false
    },
  };


  function resize() {
    var width = $(window).width();
    var height = $(window).height();
    if (width < height && vertical == false) {
      document.getElementById("mur").style.width = "90%"
      document.getElementById("mur").style.marginLeft = "5%"
      document.getElementById("mur").style.marginRight = "5%"
    } else {
      document.getElementById("mur").style.width = "30%"
      document.getElementById("mur").style.marginLeft = "35%"
      document.getElementById("mur").style.marginRight = "35%"
    }
  }

  window.onresize = function () {
    resize()
  }


  function logKey(e) {
    if (e.code == "ArrowRight") {
      changeSlide("+1")
    }
    if (e.code == "ArrowLeft") {
      changeSlide("-1")
    }
  }

  var notreMur = listeDesMurs[listeMurs.laListe[wall]];

  folder = notreMur.folder
  slide = 0
  slideMax = notreMur.slide
	vertical = notreMur.vertical

  function changeSlide(direction) {
    if (direction == "+1") {
      if (slide < slideMax) {
        slide++
      }
    } else {
      if (slide > 0) {
        slide--
      }
    }
    refreshPage()
  }


  function refreshPage() {
    document.getElementById("mur").src = "imagesEscalades/" + folder + "/slide" + slide + ".png"
    if (slide == 0) {
      document.getElementById("prev").style.visibility = "hidden"
    } else {
      document.getElementById("prev").style.visibility = "visible"
    }

    if (slide == slideMax) {
      document.getElementById("next").style.visibility = "hidden"
    } else {
      document.getElementById("next").style.visibility = "visible"
    }
  }

for (var i = 0; i <= slideMax; i++) {
    document.getElementById("charching").innerHTML += "<img class='slideCharging' src='imagesEscalades/" + folder + "/slide" + i + ".png'/>"
  }
	
  var interval = setInterval(function () {
    var check = false
    for (var i = 0; i < document.getElementsByClassName("slideCharging").length; i++) {
      if (document.getElementsByClassName("slideCharging")[i].complete != true) {
		  return false
      }
    }
	 start()
    clearInterval(interval)
  }, 100)
	
	document.body.innerHTML += '<div id="loadingAnimation" class="lds-ring"><div></div><div></div><div></div><div></div></div>'
  
	refreshPage()
}
