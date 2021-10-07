

var click=false;
var card=document.querySelector(".card1");
var card2=document.querySelector(".card2");
var card3=document.querySelector(".card3");

var route=document.querySelector(".name13");
var route2=document.querySelector(".name23");
var route3=document.querySelector(".name33");


card.addEventListener("mouseover",() => {
    route.style.opacity="1.0";
});
card.addEventListener("mouseleave",() => {
    route.style.opacity="0.0";
});

card2.addEventListener("mouseover",() => {
    route2.style.opacity="1.0";
});
card2.addEventListener("mouseleave",() => {
    route2.style.opacity="0.0";
});

card3.addEventListener("mouseover",() => {
    route3.style.opacity="1.0";
});
card3.addEventListener("mouseleave",() => {
    route3.style.opacity="0.0";
});


//nav bar scroll effect---------------------------------------------------------------------------------------------------

window.addEventListener("scroll",function(){
    var nav=document.querySelector(".nav");
    var changelogo=document.querySelector(".logo");
    var ham=document.querySelector(".bar1");
    var ham1=document.querySelector(".bar2");
    var ham2=document.querySelector(".bar3");
    
    nav.classList.toggle("sticky",window.scrollY>0);
    if(window.scrollY>0)
    {
        changelogo.src="/cyril.svg";
    }
    else{
        changelogo.src="/cyril.svg";
    }
    if(window.scrollY>0)
    {
        ham.style.backgroundColor="#000";
        ham1.style.backgroundColor="#000";
        ham2.style.backgroundColor="#000";
    }
    else{
        ham.style.backgroundColor="#fff";
        ham1.style.backgroundColor="#fff";
        ham2.style.backgroundColor="#fff";
    }
});

//end of nav bar scroll effect=======================================================================================


//This below code enables nav bar effect-----------------------------------------------------------------------------------

var lastId,
 topMenu = $(".nav-links"),
 topMenuHeight = topMenu.outerHeight()+1,
 menuItems = topMenu.find("a"),
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });


menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 250);
  e.preventDefault();
});


$(window).scroll(function(){
   
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});

//end of nav bar effect===============================================================================================

var ex=document.querySelector(".ham");

$(".ham").on("click", function(e) {
    if(click){
        click=false;
    }
    else{
        click=true;
    }
    check(click);
  });

function check(value){
    if(value)
    {
        $(".nav-links").css("height", "calc(100vh - 50px)");
    $(".nav-links").css("overflow-y", "auto");
    }
    else{
        $(".nav-links").css("height", "0");
    }

}

$("li").on("click", function(e) {
    if(click)
    {
        $(".nav-links").css("height", "0");
        ex.classList.toggle("change");
        click=false;
    }
  });


  
function myFunction(x) {
    x.classList.toggle("change");
  }




  $(function(){  // $(document).ready shorthand
    $('.monster').fadeIn('slow');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('#hideme').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},1500);
                      
              }
              
          }); 
      
      });
      
  });



//   counter script****************************************************************************************************

$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 120,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 90,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 75,duration: 3000});
$('#number4').jQuerySimpleCounter({end: 10,duration: 3000});



  /* AUTHOR LINK */
 $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function(){
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });