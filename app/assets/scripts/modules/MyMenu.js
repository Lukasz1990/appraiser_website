import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $(".header_info__navbar_icon");
    this.headerInfo = $(".header_info");
    this.menuContent = $(".header_info__menu");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("header_info__menu__is_visible");
    this.headerInfo.toggleClass("header_info__is-expanded");
    this.menuIcon.toggleClass("header_info__navbar_icon--close-x")
  }
}

export default MobileMenu;





