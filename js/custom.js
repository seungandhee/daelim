// HOVER EFFECT
(function(){
  const itemEls = document.querySelectorAll('.item');
  const iconEls = document.querySelectorAll('.icon');

  itemEls[0].classList.add('active');
  itemEls[6].classList.add('active');

  itemEls.forEach((itemEl) => {
    const itemName = itemEl.dataset.name;
    
    iconEls.forEach((iconEl) => {
      const iconName = iconEl.dataset.name;

      iconEl.addEventListener('mouseenter', function(){

        if(iconName == itemName) {
          itemEl.classList.add('active');
        } else {
          itemEl.classList.remove('active');
        }

        itemEls[0].classList.add('active');
        itemEls[6].classList.add('active');
      })
    })
  })

})();

// SLICK JS : BESTPRODUCT-SLIDER
$('.bestproduct-slider').slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 1420,
      settings: {
        centerPadding: '180px',
        arrows: true,
        dots: false
      }
    } ,
    {
      breakpoint: 1049,
      settings: {
        centerPadding: '100px',
        dots: false
      }
    } ,
    {
      breakpoint: 800,
      settings: {
        centerMode: false,
        dots: false
      }
    }
  ]
});

// MEDIA
(function(){
  const videoItemEls = document.querySelectorAll('.video-item');
  const videoEls = document.querySelectorAll('.video-item video');
  videoItemEls[2].classList.add('active');

  videoItemEls.forEach((videoItemEl) => {
    
    videoItemEl.addEventListener('click', function(){
      videoItemEls.forEach((sib) => sib.classList.remove('active'));
      this.classList.add('active');

      if(this.classList.contains('active') == true) {
        videoEls.forEach((sib) => sib.pause());
        this.children[0].play();
      }
    })

    if(videoItemEl.classList.contains('active')) {
      videoItemEl.children[0].play();
    }
  })

})();

// MOBILE NAV
(function(){
  const triggerEl = document.querySelector('.trigger');
  const gnbInnerEl = document.querySelector('.gnb-inner');
  const headerRightEl = document.querySelector('.header-right');

  triggerEl.addEventListener('click', () => {

    if(gnbInnerEl.classList.contains('active') == false) {
      gnbInnerEl.classList.add('active');
      triggerEl.classList.add('active');
      headerRightEl.classList.add('active');
    } else {
      gnbInnerEl.classList.remove('active');
      triggerEl.classList.remove('active');
      headerRightEl.classList.remove('active');
    }
  })

  const liEls = document.querySelectorAll('.menu > li > a');

  liEls.forEach((LiEl) => {

    LiEl.addEventListener('click', function(){
      const submenu = this.nextElementSibling;

      if(submenu.classList.contains('active') == false) {
        submenu.classList.add('active');
      } else {
        submenu.classList.remove('active');
      }

      triggerEl.addEventListener('click', () => {
        submenu.classList.remove('active');
      })
    })
  })
})();

// MOBILE : HEADER ACTIVE
(function(){
  const headerEl = document.querySelector('header');

  window.addEventListener('scroll', () => {

    if(window.scrollY > 100) {
      headerEl.classList.add('active');
    } else {
      headerEl.classList.remove('active');
    }
  })
})();

// SEARCH OPEN
(function(){
  const searchEl = document.querySelector('.search');
  const searchOpenEl = document.querySelector('.search-open');
  const closeBtnEl = document.querySelector('.close-btn');

  searchEl.addEventListener('click', () => {

    if(searchOpenEl.classList.contains('active') == false) {
      searchOpenEl.classList.add('active');
    }
  })

  closeBtnEl.addEventListener('click', () => {

    if(searchOpenEl.classList.contains('active') == true) {
      searchOpenEl.classList.remove('active');
    }
  })
})();

// SEARCH FILTER
(function(){
  const filterbtnEl = document.querySelector('.filter-btn');
  const filterImgEls = document.querySelectorAll('.filter-img');

  filterbtnEl.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter;

    if(filter == null) {
      return;
    }

    filterImgEls.forEach((filterImgEl) => {
      const filterItem = filterImgEl.dataset.type;

      if(filter === '*' || filter === filterItem) {
        filterImgEl.style.display = "inline-block";
      } else {
        filterImgEl.style.display = "none";
      }
    })

  })
})();


























