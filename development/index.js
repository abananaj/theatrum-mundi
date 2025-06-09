console.log('hello from index.js');

import { testModule } from "./scripts/test-module";
import "./index.scss";

console.log(testModule);

const hello = () => {
    console.log('babel arrow function test');
};

hello();

[1, 2, 3].map(n => n + 1);

// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";