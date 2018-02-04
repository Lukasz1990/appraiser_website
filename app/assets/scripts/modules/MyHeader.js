import $ from 'jquery';


class MyHeader {
    
    
}


//arrow scroll down button //
  $(function()      
        {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('.our_beginning__space').offset().top }, 700, 'linear');
      return false;
    });
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



const sliderContent = document.querySelectorAll('.slide');





    function checkSlide() {
      sliderContent.forEach(slide => {
       
        const slideInAt = (window.scrollY + window.innerHeight) - slide.height / 4;
       
        const imageBottom = slide.offsetTop + slide.height;
        const isHalfShown = slideInAt > slide.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }





window.addEventListener('scroll',debounce(checkSlide));








export default MyHeader;
     