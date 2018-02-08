import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

function scrollNav() {
  $('.navbar a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();



              $('.open_menu').click(function(){
          $('.navbar').toggleClass('navbar_open');
          $('.open_menu').toggleClass('open');
       
    });



//back to top button //
     var offset = 250;
     var duration = 300;

            $(window).scroll(function() {
     if ($(this).scrollTop() > offset) {
         
        $('.back-to-top').fadeIn(duration);
        } else {
        $('.back-to-top').fadeOut(duration);
     }
     });
        $('.back-to-top').click(function(event) {
     event.preventDefault();
     $('html, body').animate({scrollTop: 0}, duration);
     return false;
     });



        
        
        
        
        function scrollpls(){
            const navbar = document.getElementById('header');
            if(window.scrollY >= 183) {
            navbar.classList.add('scroll_nav');
             } else {
                navbar.classList.remove('scroll_nav');
             }
            }
       
        
        
        window.addEventListener('scroll',scrollpls)









export default MobileMenu;





