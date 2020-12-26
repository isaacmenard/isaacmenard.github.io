var imgList = []
closeImg()
for(var i = 0; i< document.getElementsByClassName('card').length;i++){
  document.getElementsByClassName('card')[i].onclick = function(){
    document.getElementById("imageToChange").src = this.getElementsByTagName("img")[0].src
    document.getElementById("ENGRAND").style.visibility = "visible"
  }
}
function closeImg(){
  document.getElementById("ENGRAND").style.visibility = "hidden"
}
