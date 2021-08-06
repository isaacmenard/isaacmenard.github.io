for(var i = 0; i < document.getElementsByClassName('logoIndex').length;i++){
  var item = document.getElementsByClassName('logoIndex')[i]
  item.onclick = function () {
    window.location = 'index.html'
  }
}


$(window).on('load', function(){
  if(document.getElementsByClassName("loadingDiv")){
    document.getElementsByClassName("loadingDiv")[0].style.visibility = "hidden"
  }
});
