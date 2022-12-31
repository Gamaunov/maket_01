const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// $(function () {
//   $(".slider").slick({
//     slidesToShow: 1,
//     dots: false,

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//         },
//       },
//       {
//         breakpoint: 320,
//         settings: {
//           prevArrow:
//             '<button type="button" class= "slick-arrow slick-prev"></button>',
//           nextArrow:
//             '<button type="button" class= "slick-arrow slick-next"></button>',
//         },
//       },
//     ],
//     mobileFirst: true,
//   });

//   $(".video__popup-link").magnificPopup({
//     disableOn: 700,
//     type: "iframe",
//     mainClass: "mfp-fade",
//     removalDelay: 160,
//     preloader: false,

//     fixedContentPos: false,
//   });
// });

let images = [
  {
    url: "https://dezo103.github.io/repair-design-project/assets/images/slide1.jpg",
  },
  {
    url: "https://rolling-scopes-school.github.io/irinainina-JS2020Q3/repair-design-project/src/img/project2.jpg",
  },
  { url: "https://unknown82.github.io/projekt-1-unger/img/pic3.jpg" },
];

function initSlider(options) {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderLinks = document.querySelector(".slider__places");

  initImages();
  initArrows();

  if (options.links) {
    initLinks();
  }

  if (options.dots) {
    initDots();
  }

  if (options.titles) {
    initTitles();
  }

  if (options.autoplay) {
    initAutoplay();
  }

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${
        index === 0 ? "active" : ""
      }" style="background-image:url(${
        images[index].url
      });" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initLinks() {
    images.forEach((image, index) => {
      let links = document.querySelector(".slider__places-items");
      links.classList.add("active");
    });
    sliderLinks.querySelectorAll(".slider__places-items").forEach((links) => {
      links.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }

    if (options.links) {
      sliderLinks.querySelector(".active").classList.remove("active");
      sliderLinks.querySelector(".n" + num).classList.add("active");
    }

    if (options.titles) changeTitle(num);
  }

  function initAutoplay() {
    setInterval(() => {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, options.autoplayInterval);
  }
}

let sliderOptions = {
  dots: true,
  titles: false,
  autoplay: true,
  autoplayInterval: 3000,
  links: true,
};

document.addEventListener("DOMContentLoaded", function () {
  initSlider(sliderOptions);
});

//second slider
function initSlider2() {
  let image = document.querySelectorAll(".infinity__slider img");
  let current = 0;

  function slider() {
    for (let i = 0; i < image.length; i++) {
      image[i].classList.add("opacity0");
    }
    image[current].classList.remove("opacity0");
  }
  slider();

  document.querySelector(".btn-left").onclick = function () {
    if (current - 1 == -1) {
      current = image.length - 1;
    } else {
      current--;
    }
    slider();
  };
  document.querySelector(".btn-right").onclick = function () {
    if (current + 1 == image.length) {
      current = 0;
    } else {
      current++;
    }
    slider();
  };
}
document.addEventListener("DOMContentLoaded", function () {
  initSlider2();
});
