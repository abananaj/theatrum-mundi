// ==================== TESTS
console.log('hello from index.js');
// module
import { testModule } from "./scripts/testModule.ts";
console.log(testModule);
// babel
[1, 2, 3].map(n => n + 1);


// ==================== STYLES
import "./index.scss";

// ==================== NPM IMPORTS
import "bootstrap";
import "locomotive-scroll";

// ==================== CUSTOM MODULES
import './scripts/tmScroll.ts';
import './scripts/navbar.ts';