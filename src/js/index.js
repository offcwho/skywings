// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

//Parallax
import Parallax from './modules/parallax.js';
Parallax();

//moveTo
import moveTo from './modules/moveto.js';
moveTo();

import Slider from './modules/slider.js';
Slider();