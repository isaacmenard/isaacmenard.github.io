var imgList = []
var interval;
closeImg()
for(var i = 0; i< document.getElementsByClassName('card').length;i++){
  document.getElementsByClassName('card')[i].onclick = function(){
    arr = this.getElementsByTagName("img")[0].src.split("/")
    index = arr.findIndex(el => el === "POSTERS_COMPRESS")
    arr[index] = "POSTERS"
    document.getElementById("imageToChange").src = arr.join("/")
    document.getElementById("ENGRAND").style.visibility = "visible"
    document.getElementById("parDessus").style.visibility = "visible"
    interval = setInterval(function () {
      if(document.getElementById("imageToChange").complete){
        console.log("complete")
        clearInterval(interval)
            document.getElementById("parDessus").style.visibility = "hidden"
      }
    }, 10);
  }
}
function closeImg(){
  clearInterval(interval)
  document.getElementById("parDessus").style.visibility = "hidden"
  document.getElementById("ENGRAND").style.visibility = "hidden"
}
