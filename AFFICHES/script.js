var imgList = []
closeImg()
for(var i = 0; i< document.getElementsByClassName('card').length;i++){
  console.log(document.getElementsByClassName('card')[i].getElementsByTagName("img")[0])
  document.getElementsByClassName('card')[i].onclick = function(){
    document.getElementById("imageToChange").src = this.getElementsByTagName("img")[0].src
    document.getElementById("ENGRAND").style.visibility = "visible"
  }
}
function closeImg(){
  document.getElementById("ENGRAND").style.visibility = "hidden"
}
