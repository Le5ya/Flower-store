$( document ).ready(function() {
const flowersSlider = new Swiper('.flowers-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 6,
    }

  }

});




const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
      }
    });

$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
      opts : {
        caption : 'First caption',
        thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
      }
    },
    {
      src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
      }
    });

  });

const goods = document.querySelector('.goods');
const  counterGroups = goods.querySelectorAll('.counter-group');

counterGroups.forEach((item) => {
const  counterButtonMinus = item.querySelector('.counter-button--minus');
const  counterButtonPlus = item.querySelector('.counter-button--plus');

const  counterInput = item.querySelector('.counter-input');

let num = Number(counterInput.value);

counterButtonPlus.addEventListener('click', () => {
	num = num += 1;
	counterInput.value = String(num);

})
counterButtonMinus.addEventListener('click', () => {
	num -= 1;
	counterInput.value = String(num);


		})
});



});

