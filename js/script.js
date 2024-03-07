`use strict`;
//United Navigation
class UnitedNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Change expand screen if needed -->
      <div class="navbar navbar-expand-xl p-0">
        <div class="container-fluid p-0">
          <!-- Horn Rénovation Logo -->
          <a href="index.html" class="navbar-brand"
            ><img
              src="./images/nav-logo.svg"
              alt="Horn Rénovation Logo"
              class="nav-logo ps-5"
          /></a>
          <!-- Hamburger button -->
          <button
            class="navbar-toggler border-0 nav-toggle-btn pe-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Collapse Menu/ Navbar Items -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto nav-list">
              <!-- Ravalement de façade link item -->
              <li class="nav-item">
                <a href="ravalement_de_façade.html" class="nav-link nav-page">
                  <img
                    src="./images/ravalement-nav-link.svg"
                    alt="Ravalement de façade icone"
                    class="nav-icon"
                  />Ravalement de façade</a
                >
              </li>
              <!-- Rénovation link item -->
              <li class="nav-item">
                <a href="rénovation.html" class="nav-link nav-page"
                  ><img
                    src="./images/rénovation-nav-link.svg"
                    alt="Rénovation icone"
                    class="nav-icon"
                  />Rénovation</a
                >
              </li>
              <!-- Entretien Toiture link item -->
              <li class="nav-item">
                <a href="entretien_toiture.html" class="nav-link nav-page"
                  ><img
                    src="./images/toiture-nav-link.svg"
                    alt="Entretien Toiture Icone"
                    class="nav-icon"
                  />Entretien Toiture</a
                >
              </li>
              <!-- Actualités link item -->
              <li class="nav-item">
                <a href="actualités.html" class="nav-link nav-page"
                  >Actualités</a
                >
              </li>
              <!-- Contact link item -->
              <li class="nav-item">
                <a href="contact.html" class="nav-link nav-page">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}

// United Footer
class UnitedFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer slanted-top container-fluid px-0">
        <div class="container">
          <div class="row">
            <div class="col-md-4 text-sm-center">
              <a href="index.html"
                ><img src="./images/footer-logo.svg" alt="Horn Rénovation Logo" class="footer-logo "
              /></a>
            </div>
            <div class="col-md-4">
              <ul class="footer-contact-list">
                <li class="fw-bold text-uppercase footer-contact-list-item">Horn Rénovation</li>
                <li class="footer-contact-list-item"><a href="https://maps.app.goo.gl/HoqzpefTNBsZACoo7" class="footer-nav-link">
                  15 Rue Combe Jean Robert, <br/>21400 Châtillon-sur-Seine</a></li>
                <li class="footer-contact-list-item"><span class="me-3"><a href="tel:+330380817683" class="footer-nav-link">03 80 81 76 83</a></span><span><a href="tel:+330699357256" class="footer-nav-link">06 99 35 72 56</a></span></li>
                <!-- !Remove after testing number below -->
                <li><a href="tel:+3306149427" class="footer-nav-link">Call Jad Bou Raad - 06 76 14 94 27</a></li>
                <!-- !Remove after testing number above -->
                <li class="footer-contact-list-item"><a href="mailto:hornrenovation21400@gmail.com" target="_blank" class="footer-nav-link">hornrenovation21400@gmail.com</a></li>
                <!-- !Remove after testing link below -->
                <li class="footer-contact-list-item"><a href="mailto:jad.bou.raadd@gmail.com" class="footer-nav-link">jad.bou.raadd@gmail.com</a></li>
                <!-- !Remove top li after testing -->
                <li class="fw-bold text-uppercase contact-list-item"><a href="https://www.facebook.com/profile.php?id=61550916426241" target="_blank" class="footer-nav-link">Suivez-nous</a></li>
              </ul>
              </div>
            <div class="col-md-4">
              <ul class="footer-nav">
                <li class="footer-nav-item fw-bold"><a href="rénovation.html" class="footer-nav-link">Rénovation</a></li>
                <li class="footer-nav-item fw-bold"><a href="ravalement_de_façade.html" class="footer-nav-link">Ravalement de façade</a></li>
                <li class="footer-nav-item fw-bold"><a href="entretien_toiture.html" class="footer-nav-link">Toiture</a></li>
                <li class="footer-nav-item fw-bold"><a href="rénovation.html#peinture-intérieure" class="footer-nav-link">Peinture intérieure</a></li>
                <li class="footer-nav-item fw-bold"><a href="actualités.html" class="footer-nav-link">Actualités</a></li>
              </ul>
            </div>
          </div>
          <div class="container footer-legal">
            <span class="me-5">Mentions légales</span><span>Créé avec 😍 par TADAAAM Studio</span>  
          </div>
        </div>
        
      </div>
    `;
  }
}
// *****************
// Active Nav Page
// *****************
// !Review Code
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".nav-item");
  const currentLocation = location.pathname;

  links.forEach(function(link) {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("nav-item-selected");
    }
  });
});

// const navbarSelectedPage = window.location.pathname;
// const navLinks = document.querySelectorAll(`.nav-item`).forEach((link) => {
//   if (link.href.includes(`${navbarSelectedPage}`)) {
//     link.classList.add(`nav-item-selected`);
//   }
});

// ****************
// Carousel code
// *****************
const carouselArrows = document.querySelectorAll(`.arrow`);
const carouselImages = document.querySelectorAll(`.carousel-image`);
const barNav = document.querySelectorAll(`.carousel-bars-indicator`);

console.log(carouselArrows);
console.log(carouselImages);
console.log(barNav);

// Carousel Arrows controls
carouselArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const nextSlide = e.target.id === "arrow-right" ? 1 : -1;

    const selectedImage = document.querySelector(`.carousel-image-selected`);
    const selectedbar = document.querySelector(
      `.carousel-bars-indicator-selected`
    );

    newIndex = nextSlide + [...carouselImages].indexOf(selectedImage);

    if (newIndex < 0) newIndex = [...carouselImages].length - 1;
    if (newIndex >= [...carouselImages].length) newIndex = 0;

    carouselImages[newIndex].classList.add(`carousel-image-selected`);
    barNav[newIndex].classList.add(`carousel-bars-indicator-selected`);

    selectedImage.classList.remove(`carousel-image-selected`);
    selectedbar.classList.remove(`carousel-bars-indicator-selected`);
  });
});

// Carousel Bars controls

// *************
customElements.define(`united-nav`, UnitedNav);
customElements.define(`united-footer`, UnitedFooter);
