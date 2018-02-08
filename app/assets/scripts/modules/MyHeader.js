import $ from 'jquery';


class MyHeader {
    
    
}

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
     