import "../css/header.css";

const headerElement = `
    <header class="header__container">
        <h1 class="header__title">The Coffe Factory</h1>
        <nav class="header__navbar">
            <img src="../../menu.svg" alt="mobile menu" class="header__icon header__open" id="openToggle">
            <ul class="navbar__ul">
                <img src="../../window-close.svg" alt="close menu" class="header__icon header__close" id="closeToggle">
                <li><a href="/">Home</a></li>
                <li><a href="/coffe/">Coffe</a></li>
                <li><a href="/about/">About us</a></li>
            </ul>
        </nav>
    </header>
`;

export { headerElement };
