// select date
const date = document.getElementById("date");
date.textContent = new Date().getFullYear();

// select elements
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

// *****************
// Toggle button
// ****************

navToggle.addEventListener("click", () => {
  // this manual method will not work for newly added menu items
  //   linksContainer.classList.toggle("show-links");

  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksheight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksheight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// *****************
// Scroll Events
// ****************
const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrolHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;

  if (scrolHeight > navHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }

  if (scrolHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// *****************
// Scroll Links
// ****************
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate heights
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const navheight = navBar.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains("fixed-nav");
    let position = element.offsetTop - navheight;

    if (!fixedNav) {
      position = position - navheight;
    }
    if (navheight > 82) {
      position = position + containerHeight;
    }
    console.log(position);

    window.scrollTo({
      left: 0,
      top: position,
    });

    linksContainer.style.height = 0;
  });
});
