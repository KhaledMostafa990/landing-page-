"use stict";
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const mainContent = document.querySelector("main");
const sections = document.querySelectorAll("section");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarList = document.querySelector("#navbar__list");
// let newSection = oneSection.setAttribute("id", "section4");
let newli;

/**
 * End Global Variables
 *
 *
 * Start Helper Functions
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav list
// add li element with thier section name to navbar
sections.forEach((elem, indx, arr) => {
  // create new li element
  newLi = document.createElement("li");
  navbarList.appendChild(newLi);

  // Get the name of the specific section to set in li element
  let dataNav = elem.getAttribute("data-nav");
  newLi.textContent = dataNav;

  console.log(dataNav);
});

// Scroll to anchor ID using scrollTO event
sections.forEach((elem, indx, arr) => {
  // listening for li item and scoll to it
  newLi.addEventListener("click", () => {
    elem.scrollIntoView({ behavior: "smooth", block: "end" });
  });
});
// Add class 'active' to section when near top of viewport

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
