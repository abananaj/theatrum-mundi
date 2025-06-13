// JS TEST
console.log('hello from index.js');

// MODULE TEST
import { testModule } from "./scripts/test-module";
import "./styles/index.scss";
console.log(testModule);

// BABEL TEST
[1, 2, 3].map(n => n + 1);

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";