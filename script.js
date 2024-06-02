function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  var typed = new Typed(".typing", {
    strings: [ "Software Engineering.", "Web Development.", "Full Stack Engineering.",],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true
});