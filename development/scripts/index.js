// ==================== TESTS
console.log('hello from index.js');
// module
import { testModule } from "./js/testModule";
console.log(testModule);
// babel
[1, 2, 3].map(n => n + 1);


// ==================== STYLES
import "./index.scss";

// ==================== NPM IMPORTS
import { gsap } from "gsap";
import { bootstrap } from "bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { LocomotiveScroll } from "locomotive-scroll";

// ==================== CUSTOM MODULES
import { nameMorph } from './js/homepg';