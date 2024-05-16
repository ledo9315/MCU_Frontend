document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".header__nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Alle aktiven Klassen entfernen
      navLinks.forEach((link) =>
        link.classList.remove("header__nav-link--active")
      );

      // Aktive Klasse zu dem angeklickten Link hinzufügen
      this.classList.add("header__nav-link--active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Link selektieren, der nach ganz oben scrollen soll
  const homeLink = document.querySelector(
    'a[href="#introduction-section"]' || 'a[href="#"]'
  );

  homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".header__nav-list");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".header__nav-item").forEach((item) =>
    item.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
});

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0; // Position des letzten Scrolls speichern
  const header = document.querySelector(".header"); // Die Header-Element selektieren

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if scrolling down and not at the top of the page
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.classList.add("header--hidden");
    } else {
      header.classList.remove("header--hidden");
    }
    lastScrollTop = scrollTop;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const header = document.querySelector(".header");
  const searchInput = document.querySelector(".header__search-input");
  const searchButton = document.querySelector(".header__search-button");

  searchButton.addEventListener("click", function () {
    const isDisplayed = searchInput.style.display === "block";
    searchInput.style.display = isDisplayed ? "none" : "block";
    if (!isDisplayed) {
      searchInput.focus();
    }
  });

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if scrolling down and not at the top of the page
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.classList.add("header--hidden");
    } else {
      header.classList.remove("header--hidden");
    }
    lastScrollTop = scrollTop;

    // Zusätzlich wird die Suchleiste ausgeblendet, wenn gescrollt wird
    if (searchInput.style.display === "block") {
      searchInput.style.display = "none";
    }
  });
});
