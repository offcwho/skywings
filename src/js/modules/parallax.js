import { Parallax } from "swiper/modules";

const plane = document.getElementById('plane');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    plane.style.right = value * -1.25 + 'px';
})

export default Parallax;