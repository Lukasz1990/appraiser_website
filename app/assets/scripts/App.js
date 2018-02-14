import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

const sliderImages = document.querySelectorAll('.slide_down');





    function checkSlide() {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height * 1.2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
    }





window.addEventListener('scroll',debounce(checkSlide));


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
   

            $(window).scroll(function() {
     if ($(this).scrollTop() > offset) {
         
        $('.back-to-top').fadeIn(500);
        } else {
        $('.back-to-top').fadeOut(500);
     }
     });
        $('.back-to-top').click(function(event) {
     event.preventDefault();
     $('html, body').animate({scrollTop: 0}, 500);
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






 function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };




