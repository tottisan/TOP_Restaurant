export function toggleMenu() {
  const openMenu = document.querySelector("#openToggle");
  const closeMenu = document.querySelector("#closeToggle");
  const activeClass = "navbar__ul--active";

  const toggleMenu = () => {
    document.querySelector(".navbar__ul").classList.toggle(activeClass);
  };

  openMenu.addEventListener("click", () => {
    toggleMenu();
  });

  closeMenu.addEventListener("click", () => {
    toggleMenu();
  });
}
