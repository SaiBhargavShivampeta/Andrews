/* Created by Tivotal */

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
  themeToggler.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--theme-color", color);
  };
});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
// JavaScript code to scroll to the top of the page when "home" link is clicked
document.querySelector('a[href="#home"]').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page smoothly
});

 // Initialize Swiper for the gallery slider
 var gallerySwiper = new Swiper(".gallery-slider", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds
  },
  // Display two slides at a time
  slidesPerView: 2,
  // If we need pagination

  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let slideIndex = 0;
let slideInterval;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    slideInterval = setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function changeSlide(n) {
    clearTimeout(slideInterval);
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("slide").length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("slide").length;
    }
    showSlidesManually();
}

function currentSlide(n) {
    clearTimeout(slideInterval);
    slideIndex = n;
    showSlidesManually();
}

function showSlidesManually() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    slideInterval = setTimeout(showSlides, 5000); // Restart the interval
}

// Initial call to start the slideshow
showSlides();



var data1 = [['IN-UP'],
['IN-BR', 'IN-MH'],
['IN-WB', 'IN-MP', 'IN-RJ', 'IN-TN', 'IN-GJ', 'IN-KA', 'IN-AP'],
['IN-OR', 'IN-JH', 'IN-TG', 'IN-KL', 'IN-AS', 'IN-PB', 'IN-HR', 'IN-CT', 'IN-UT', 'IN-DL', 'IN-JK'],
['IN-HP', 'IN-TR', 'IN-ML', 'IN-MN', 'IN-NL', 'IN-PY', 'IN-GA', 'IN-AR', 'IN-DN', 'IN-MZ', 'IN-CH']
];

var ids = ['IN-AN', 'IN-AP', 'IN-AR', 'IN-AS', 'IN-BR', 'IN-CH', 'IN-CT', 'IN-DD', 'IN-DL', 'IN-DN', 'IN-GA', 'IN-GJ',
'IN-HP', 'IN-HR', 'IN-JH', 'IN-JK', 'IN-KA', 'IN-KL', 'IN-LD', 'IN-MH', 'IN-ML', 'IN-MN', 'IN-MP',
'IN-MZ', 'IN-NL', 'IN-OR', 'IN-PB', 'IN-PY', 'IN-RJ', 'IN-SK', 'IN-TG', 'IN-TN', 'IN-TR',
'IN-UP', 'IN-UT', 'IN-WB'];

function init(evt) {
if (window.svgDocument == null) {
    svgDocument = evt.target.ownerDocument;
}

tooltip = svgDocument.getElementById('tooltip');
tooltip_bg = svgDocument.getElementById('tooltip_bg');

for (var i in ids) {
    elt = document.getElementById(ids[i]);

    elt.onmouseover = function (e) {
        showTooltip(e, capitalizeFirstLetter(e.currentTarget.getAttribute("title")));
    };

    elt.onmouseout = function (e) {
        hideTooltip(e);
    };
}

colourCountries(data1);
}

function colourCountries(data) {
for (var colour = 0; colour < data.length; colour++) {
    for (var country = 0; country < data[colour].length; country++) {
        colourCountry(data[colour][country], colour);
    }
}
}

function colourCountry(name, colour) {
var country = svgDocument.getElementById(name);
var oldClass = country.getAttributeNS(null, 'class');
var newClass = oldClass + ' colour' + colour;
country.setAttributeNS(null, 'class', newClass);
}

function showTooltip(evt, mouseovertext) {
var x = evt.clientX - 500;
var y = evt.clientY - 100;
tooltip.setAttributeNS(null, "x", x);
tooltip.setAttributeNS(null, "y", y);
tooltip.firstChild.data = mouseovertext;
tooltip.setAttributeNS(null, "visibility", "visible");

var length = tooltip.getComputedTextLength();
tooltip_bg.setAttributeNS(null, "width", length + 10);
tooltip_bg.setAttributeNS(null, "x", x - 5);
tooltip_bg.setAttributeNS(null, "y", y - 20);
tooltip_bg.setAttributeNS(null, "visibility", "visible");
}

function hideTooltip(evt) {
tooltip.setAttributeNS(null, "visibility", "hidden");
tooltip_bg.setAttributeNS(null, "visibility", "hidden");
}

function capitalizeFirstLetter(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

function showTooltipNearCircle(evt, content) {
var x = +evt.target.getAttribute('cx') + 0;
var y = +evt.target.getAttribute('cy') + 50;

tooltip.setAttribute('x', x);
tooltip.setAttribute('y', y);
tooltip.textContent = content;

var length = tooltip.getComputedTextLength();
tooltip_bg.setAttribute('width', length + 10);
tooltip_bg.setAttribute('x', x + 160);
tooltip_bg.setAttribute('y', y - 14);

tooltip.setAttribute('visibility', 'visible');
tooltip_bg.setAttribute('visibility', 'visible');
}

function hideTooltipNearCircle() {
tooltip.setAttribute('visibility', 'hidden');
tooltip_bg.setAttribute('visibility', 'hidden');
}

// Function to count up to a target number
function countUp(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerText = Math.floor(progress * (end - start) + start) + '+';
      if (progress < 1) {
          window.requestAnimationFrame(step);
      }
  };
  window.requestAnimationFrame(step);
}

// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener('scroll', function() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
      if (isInViewport(counter) && !counter.classList.contains('counted')) {
          counter.classList.add('counted');
          const target = parseInt(counter.getAttribute('data-target'), 10);
          countUp(counter, 1, target, 2000); // Count from 1 to the target number over 2 seconds
      }
  });
});

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down
    header.classList.add('hidden-header');
  } else {
    // Scroll up
    header.classList.remove('hidden-header');
  }

  lastScrollTop = scrollTop;
});


function openGmail() {
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@andrewsevents.co.in', '_blank');
}

