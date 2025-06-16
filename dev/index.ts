// ==================== TESTS
console.log('hello from index.js');
// module
import { testModule } from "./ts/testModule.ts";
console.log(testModule);
// babel
[1, 2, 3].map(n => n + 1);


// ==================== STYLES
import "./index.scss";

// ==================== NPM IMPORTS
import { gsap } from "gsap";
import "bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "locomotive-scroll";

// ==================== CUSTOM MODULES
import './ts/homepg';