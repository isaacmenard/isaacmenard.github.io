document.getElementsByClassName("page1Div")[0].style.visibility = "visible"

function page(element){
    document.getElementsByClassName("active")[0].className = document.getElementsByClassName("active")[0].className.split(" ")[0]
    for(var i = 0; i < document.getElementsByClassName("page").length;i++){
        document.getElementsByClassName("page")[i].style.visibility = "hidden"
    }
    document.getElementsByClassName(element.className.split(" ")[0] +"Div")[0].style.visibility = "visible"
    element.className = element.className + " active"
}