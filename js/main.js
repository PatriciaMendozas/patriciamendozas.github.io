$(document).ready(initPage);

function initPage()
{
  $(document).scroll(checkScroll);
 
}
function checkScroll()
{
  var x=document.body.scrollTop;  
  if (x>=1100 && x<2300) {
      move(); } 
  else {
      var elems = $(".myBar");
      elems.each(function(e)
  {
    var p = $(this).attr("data-per");
  /*var elem1 = document.getElementById("myBar1")*/
    $(this).css('width', 10 + '%');
  });
  }
}
/*habilidades*/
function move() {
  var elems = $(".myBar");
  elems.each(function(e)
  {
    var p = $(this).attr("data-per");
  /*var elem1 = document.getElementById("myBar1")*/
    $(this).css('width', p + '%');
  });

  
}

function frame() {
  if (width == p) {
    clearInterval(id);
  } else {
    width++;
    e.style('width', width + '%');
  /*elem1.style.width = width + '%';*/
  }
}

//MENU SCROLL
$(".menu a").click(function() {
  //on click, we get the target value of the selected element
  var target = $(this).attr('target');
  //we then scroll our body until the top of the corresponding div in 700ms
  $('body').animate({
    scrollTop: $("#" + target).offset().top-45
  }, 700);
  //45 is the menu height
});

//SCROLLSPY                
function scrollSpy(){
  $(".menu a").removeClass("active"); //we remove active from every menu element

  //we get the divs offsets looping the menu links and getting the targets (this is dynamic: when we change div #suzy's height, code won't break!)
  var divs = [];
  $(".menu a").each(function(i) {
    var appo = $(this).attr("target");
    //here we get the distance from top of each div
    divs[i] = $("#" + appo).offset().top;
  });

  //gets actual scroll and adds window height/2 to change the active menu voice when the lower div reaches half of screen (it can be changed)
  var pos = $(window).scrollTop();
  var off = ($(window).height()) / 2;

  pos = pos + off;

  //we parse our "div distances from top" object (divs) until we find a div which is further from top than the actual scroll position(+ of course window height/2). When we find it, we assign "active" class to the Nth menu voice which is corresponding to the last div closer to the top than the actual scroll -> trick is looping from index=0 while Nth css numeration starts from 1, so when the index=3 (fourth div) breaks our cycly, we give active to the third element in menu.
  var index = 0;

  for (index = 0; index < divs.length; index++) {
    if (pos < divs[index]) {
      break;
    }
  }
  $(".menu li:nth-child(" + index + ") a").addClass("active");
};

$(window).scroll(function() {
  scrollSpy();
});
$(document).ready(function() {
  scrollSpy();
});
//resumen
var x=0;
var y=0;
  function cambiar(){
    if (y<16) {
      x=x-27;
      y=y+1;
      $(".imgmpmsv").css("transform","translateY("+x+"px)"); 
      
    }
    else{
      x=0;
      y=0;
    
    }  
  }
