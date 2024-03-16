(function ($) {
  'use strict';

  /* UI VARS */
  let logo = document.querySelector('.logo-04');

  /* Sticky Header */
  window.addEventListener('scroll', function () {
    let header = document.querySelectorAll('header');

    header.forEach((headItem) => {
      headItem.classList.toggle('sticky', window.scrollY > 0);
    });
  });

  /* Back to top button */
  var topBtn = $('#to-top');
  topBtn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  var serv = $('#serv');
  serv.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 900 }, 600);
  });

  var eve = $('#aba');
  eve.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 1800 }, 600);
  });

  var contact = $('#contact');
  contact.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 3500 }, 600);
  });
  var serv = $('#serv2');
  serv.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 900 }, 600);
  });
  var contact = $('#contact2');
  contact.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 4200 }, 600);
  });

  /* Search box open */
  $('.search-bar').on('click', function () {
    $('.search-box').addClass('search-open');
  });

  $('.search-close').on('click', function () {
    $('.search-box').removeClass('search-open');
  });

  /* Hamburger menu */
  function toggleSidebar() {
    $('header aside').toggleClass('active');
    $('.hamburger-menu').toggleClass('open');

    var sidebarOpen = $('header aside').hasClass('active');
    if (sidebarOpen) {
      disableScrolling();
    } else {
      enableScrolling();
    }
  }

  $('.hamburger-menu').on('click', function () {
    toggleSidebar();
  });

  $('.close-sidebar').on('click', function () {
    toggleSidebar();
  });

  $('aside .overlay').on('click', function () {
    toggleSidebar();
  });

  // AOS (Animate on Scroll) initialization
  AOS.init({
    duration: 1000,
    once: true,
  });
})(jQuery);

function enableScrolling() {
  document.body.style.overflow = 'auto';
}

function disableScrolling() {
  document.body.style.overflow = 'hidden';
}
