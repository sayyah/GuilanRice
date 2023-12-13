// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// StickyMenu

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// StickyMenu


// SlideShow

var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
var totalSlides = slides.length;

showSlides();

function showSlides() {
  var oldSlideIndex = slideIndex - 1;
  if (oldSlideIndex < 0) {
    oldSlideIndex = totalSlides - 1;
  }

  // Remove animation classes from all slides
  for (var i = 0; i < totalSlides; i++) {
    slides[i].classList.remove("fadeToLeftNew", "fadeToLeftOld");
  }

  // Add animation classes for the old and new slides
  slides[oldSlideIndex].classList.add("fadeToLeftOld");
  slides[slideIndex].classList.add("fadeToLeftNew");

  // Display the new slide
  slides[slideIndex].style.display = "block";

  // Increment slide index for next iteration
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  // After 1 second, hide the old slide
  setTimeout(function () {
    slides[oldSlideIndex].style.display = "none";
  }, 1000);

  // Repeat after 15 seconds
  setTimeout(showSlides, 15000);
}

// SlideShow