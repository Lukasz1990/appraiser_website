import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class ScrollMenu {
  constructor() {

    this.headerLinks = $(".menu-nav a");

    this.addSmoothScrolling();
  }
    
    
         addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

 
export default ScrollMenu;




