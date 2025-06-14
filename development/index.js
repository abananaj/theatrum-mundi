// JS TEST
console.log('hello from index.js');

// MODULE TEST
import { testModule } from "./scripts/test-module";
import "./styles/index.scss";
console.log(testModule);

// BABEL TEST
[1, 2, 3].map(n => n + 1);

import { gsap } from "gsap";
import { bootstrap } from "bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { LocomotiveScroll } from "locomotive-scroll";

import { homepg } from "./scripts/js/homepg";