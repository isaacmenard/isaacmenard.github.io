// When the user scrolls the page, execute myFunction
var countScroll = 0
window.onscroll = function() {myFunction(countScroll)};
myFunction(countScroll)

var sH = $('#imgPerso').height();
$('#imgPerso').css('width', sH*19/24 + 'px');
var animation = false;
var ancienScroll = 0
var timeOut;
function myFunction(an) {
  clearTimeout(timeOut)
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = 100 + "%";
  document.getElementById("imgPerso").style.left = scrolled*95/100 + "%";
  if(ancienScroll < scrolled){
    document.getElementById("imgPerso").style.transform = "scaleX(1)"
  }else{
    document.getElementById("imgPerso").style.transform = "scaleX(-1)"
  }


  if(scrolled >= 2 && scrolled < 10){
    document.getElementById("rocket").src="IMG/rocket_1.png"
    document.getElementById("rocket").style.top = scrolled*8 + "%"
    document.getElementById("rocket").style.left = -scrolled*2 + 63 + "%"
    document.getElementById("rocket").style.transform =  "rotate(-"+(90-scrolled*10)+"deg) scale(0.8)"

    document.getElementById("moon").style.left = scrolled*0.6 + 70 + "%"
    document.getElementById("moon").style.top =  -scrolled*2 +12 + "%"
    document.getElementById("moon").style.width = -scrolled+12 + "%"
  }else if(scrolled < 2 ){
    document.getElementById("rocket").style.top = 10 + "%"
    document.getElementById("rocket").style.left =  63 + "%"
    document.getElementById("rocket").src="IMG/rocket_0.png"
    document.getElementById("rocket").style.transform =  "rotate(-90deg) scale(0.8)"

    document.getElementById("moon").style.left =  70 + "%"
    document.getElementById("moon").style.top =  10 + "%"
  }else{

    document.getElementById("rocket").src="IMG/rocket_0.png"
    document.getElementById("rocket").style.transform =  "rotate(0deg) scale(0.8)"
    document.getElementById("rocket").style.top = 10*8 + "%"
    document.getElementById("rocket").style.left = 43 + "%"

    document.getElementById("moon").style.top =  -20*2 +12 + "%"
  }



  if(an != 0){
    ancienScroll = scrolled
    animation = true;
    timeOut = setTimeout(function () {
      animation = false
    }, 500);
  }
  countScroll++




  function paralax(elId, factor){
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById(elId);
    if(ancienScroll < scrolled){
      if(!target['topPos']){
        target['topPos'] = scrolltotop - factor
      }else{
        target.topPos -= factor
      }
    }else{
      if(!target['topPos']){
        target['topPos'] = scrolltotop + factor
      }else{
        target.topPos += factor
      }
    }
    //target.style.top = target.topPos + "px";
  }
}


$(function() {
       // Sections height
       $(window).resize(function() {
           var sH = $('#imgPerso').height();
          $('#imgPerso').css('width', sH*19/24 + 'px');
       });
   });


var count = 1;
var interval = setInterval(function () {
  if(animation){
  document.getElementById("imgPerso").style.backgroundImage = "url('NAMKA/running/running_"+count+".png')"
  count++;
  if(count > 8){
    count = 1
  }}else{
    document.getElementById("imgPerso").style.backgroundImage = "url('NAMKA/Idle.png')"
  }
}, 100);
