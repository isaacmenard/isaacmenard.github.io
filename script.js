if(document.getElementsByClassName("page1Div")[0]){
document.getElementsByClassName("page1Div")[0].style.visibility = "visible"}


function page(element){
    document.getElementsByClassName("active")[0].className = document.getElementsByClassName("active")[0].className.split(" ")[0]
	if(document.getElementsByClassName("active")[0]){
	document.getElementsByClassName("active")[0].className = document.getElementsByClassName("active")[0].className.split(" ")[0]}
    for(var i = 0; i < document.getElementsByClassName("page").length;i++){
        document.getElementsByClassName("page")[i].style.visibility = "hidden"
    }
    document.getElementsByClassName(element.className.split(" ")[0] +"Div")[0].style.visibility = "visible"
    element.className = element.className + " active"
}

var $cell = $('.card');

//open and close card when clicked on card
$cell.find('.js-expander').click(function() {

  var $thisCell = $(this).closest('.card');

  if ($thisCell.hasClass('is-collapsed')) {
    $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
    $thisCell.removeClass('is-collapsed').addClass('is-expanded');
    
    if ($cell.not($thisCell).hasClass('is-inactive')) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass('is-inactive');
    }

  } else {
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $cell.not($thisCell).removeClass('is-inactive');
  }
});

//close card when click on cross
$cell.find('.js-collapser').click(function() {

  var $thisCell = $(this).closest('.card');

  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
  $cell.not($thisCell).removeClass('is-inactive');

});