//  HEADER - SEARCH 
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  // Logic
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '포트폴리오 검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


//  HEADER - BADGE & TOP BTN
// gsap은 애니메이션 처리를 해주는 Library
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //  badge 숨기기 
    // badgeEl.style.display = 'none';
    // gsab.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // TOP 버튼 보이기 
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    //  badge 보이기 
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // TOP 버튼 숨기기 
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
//  └ scroll 시 0.3초 마다 부하를 주어서 함수가 한 번에 실행되는 것을 방지 
//  _.throttle (함수, 시간)

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


//  VISUAL 순차적 애니메이션 (시간차로 화면에 출력)
// HTML에 class name을 fade-in 추가, CSS에 .fade-in을 opacity:0으로 작성 후 JS 작업 

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
      // gsab.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7,    //  0.7, 1.4/ 2.1/ 2.7 각각의 시간이 적용되어 순차적으로 출력 
    opacity: 1
  });
});


//  new Swiper('선택자, 옵션-객체 데이터')
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  //  한 번에 보여 줄 슬라이드 개 수 
  spaceBetween: 10,
  //  슬라이드 사이 여백 
  centeredSlides: true,
  //  1번 슬라이드 가운데 보이기 
  loop: true,
  //  반복 
  autoplay: {
    delay: 3000
  },
pagination: {
  el: '.promotion .swiper-pagination',
  //  페이지 번호 요소 선택자 
  clickable: true
  //  사용자의 페이지 번호 요소 제어 여부 
},
navigation: {
  prevEl: '.promotion .swiper-prev',
  nextEl: '.promotion .swiper-next'
}
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  //  느낌표를 특정한 변수 앞에 넣으면 그 값의 반대에 해당되는 값을 반환 & 반복 
  if (isHidePromotion) {
    //  숨김 처리 
    promotionEl.classList.add('hide');
  } else {
    //  보임 처리 
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  //  gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, random(1.5, 2.5),    //  애니메이션 동작 시간 
    { //  옵션
      y: size,
      repeat: -1,
      yoyo: true,   //  애니메이션이 한 번 처리되고 다시 돌아오게 함 
      ease: Sine.easeInOut,  //  gsap easing 함수 사용 
      delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //  보여짐의 요소들을 감시할 요소를 지정 
      triggerHook: .8
      //  감시하고자 하는 요소가 걸리는 지점 : viewport를 1로 보았을 때 0.8 지점 
    }) 
    .setClassToggle(spyEl, 'show') 
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();   // 현재 연도 