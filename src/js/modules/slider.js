import Swiper from 'swiper/bundle';

function Slider(){
    const swiper = new Swiper('.swiper', {
    
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 4000,
        },
    })
    
}
export default Slider;