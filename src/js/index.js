// import styles bundle
import 'swiper/css/bundle';

import { createIcons, icons } from 'lucide';

createIcons({ icons });

import { SpeedInsights } from '@vercel/speed-insights/next';

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

//Parallax
import Parallax from './modules/parallax.js';
Parallax();

//moveTo
import moveTo from './modules/moveto.js';
moveTo();

//Slider
import Slider from './modules/slider.js';
Slider();

//Button
import ToTop from './modules/button.js';
ToTop();