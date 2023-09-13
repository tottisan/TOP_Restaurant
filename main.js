import "./style.css";
import { headerElement } from "./components/header";
import { homeElement } from "./components/home";
import { toggleMenu } from "./methods/mobile";

document.querySelector("#app").innerHTML = `
    ${headerElement}
    ${homeElement}

`;

toggleMenu();
