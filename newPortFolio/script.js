launchTitle()

function launchTitle() {
  document.getElementById("title").className = ("glitch glitchAnim")
  setTimeout(function () {
    document.getElementById("title").className = ("glitch")
    setTimeout(function () {
      launchTitle()
    }, Math.random() * (5000 - 3000) + 3000)
  }, Math.random() * (2000 - 200) + 200)
}

function changePage() {
  document.getElementById("title").className = ("glitch glitchAnim")
  document.getElementById("title").style.fontSize = "1000%"
  setTimeout(function () {
    document.getElementById("title").style.visibility = "hidden"
    lineAnim()
  }, 200)
}

function lineAnim() {
  var line1 = document.createElement("div")
  var line2 = document.createElement("div")
  setTimeout(function () {
      line1.style.left = "15%"
      line1.style.width = "70%"
      line2.style.left = "15%"
      line2.style.width = "70%"
      setTimeout(function () {
          line1.style.top = "10%"
          line1.style.height = "30%"
          line2.style.height = "30%"
          line2.style.top = "60%"
          setTimeout(function () {
              var line1Text = document.createElement("h1")
              var line2Text = document.createElement("h1")
              line1Text.className = "glitch glitchAnim"
              line2Text.className = "glitch glitchAnim"
              line1Text.style.fontSize = "10em";
              line2Text.style.fontSize = "12em";
              setTimeout(function () {
                  line1Text.style.fontSize = "2em";
                  line2Text.style.fontSize = "2em";
                  line1.style.transition = 'none'
                  line2.style.transition = 'none'
                  setTimeout(changeLine(line1), 1400)

                  function changeLine(lineSelect) {
                    var ancien = lineSelect.style.borderColor
                    lineSelect.style.borderColor = 'transparent'
                    setTimeout(function () {
                        lineSelect.style.borderColor = ancien
                        setTimeout(function () {
                          if (Math.round(Math.random()) == 1) {
                            changeLine(line1)
                          } else {
                            changeLine(line2)
                          }
                        }, Math.random() * (2000 - 200) + 200)
                    }, Math.random() * (1000 - 200) + 200)
				  }
              }, 200)
			 line1Text.innerHTML = "développement Informatique !"; 
			 line2Text.innerHTML = "Sapeur Pompier";
             line1.appendChild(line1Text);
			  line2.appendChild(line2Text);
          }, 800)
      }, 800)
  }, 1000)
line1.className = ("line")
line2.className = ("line")
document.body.appendChild(line1)
document.body.appendChild(line2)
}
