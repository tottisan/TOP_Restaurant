import "./coffe.css";
import "../css/header.css";
import { headerElement } from "../components/header";
import { toggleMenu } from "../methods/mobile";

const coffeElement = `
    <main>
        <article class="coffe__container container">
        <div class="coffe__grid">
            <div class="coffe__details">
                <h2 class="coffe__title">Cappuccino</h1>
                <p class="coffe__description">
                Café espresso, leche vaporizada y abundante espuma de leche.
                </p>
                
            </div>
            <div class="coffe__image">
                <img src="/coffe1.jpg" alt="coffe cup">
            </div>
        </div>

        <div class="coffe__grid">
            <div class="coffe__details">
                <h2 class="coffe__title">Americano</h1>
                <p class="coffe__description">
                Café espresso combinado con agua al mejor estilo americano.
                </p>
                
            </div>
            <div class="coffe__image">
                <img src="/coffe1.jpg" alt="coffe cup">
            </div>
        </div>

        <div class="coffe__grid">
            <div class="coffe__details">
                <h2 class="coffe__title">Cappuccino</h1>
                <p class="coffe__description">
                Café espresso, leche vaporizada y abundante espuma de leche.
                </p>
                
            </div>
            <div class="coffe__image">
                <img src="/coffe1.jpg" alt="coffe cup">
            </div>
        </div>

        <div class="coffe__grid">
            <div class="coffe__details">
                <h2 class="coffe__title">Cappuccino</h1>
                <p class="coffe__description">
                Café espresso, leche vaporizada y abundante espuma de leche.
                </p>
                
            </div>
            <div class="coffe__image">
                <img src="/coffe1.jpg" alt="coffe cup">
            </div>
        </div>
        </article>
    </main>
`;

document.querySelector("#app").innerHTML = `
    ${headerElement}
    ${coffeElement}
`;

toggleMenu()