const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    
  });

let burger = document.querySelector(".burger-wrap");
let miniNav = document.querySelector(".active-content")
    burger.addEventListener("click", function() {
        burger.classList.toggle("active");
        miniNav.classList.toggle("active");
    });