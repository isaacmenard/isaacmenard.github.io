var imgList = []
closeImg()
for(var i = 0; i< document.getElementsByClassName('card').length;i++){
  document.getElementsByClassName('card')[i].onclick = function(){
    arr = this.getElementsByTagName("img")[0].src.split("/")
    index = arr.findIndex(el => el === "POSTERS_COMPRESS")
    arr[index] = "POSTERS"
    document.getElementById("imageToChange").src = arr.join("/")
    document.getElementById("ENGRAND").style.visibility = "visible"
  }
}
function closeImg(){
  document.getElementById("ENGRAND").style.visibility = "hidden"
}
