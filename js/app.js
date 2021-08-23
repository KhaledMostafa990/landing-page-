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
const navbarMenu = document.querySelector(".navbar__menu");
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

// build the nav list item

// create li element for nav
sections.forEach((elem, indx, arr) => {
  newLi = document.createElement("li");

  // Get the data-nav of the specific section to set inner li element
  let dataNav = elem.getAttribute("data-nav");
  newLi.innerHTML = dataNav;

  // Set the class attr to styling list item
  newLi.setAttribute("class", "menu__link");
  // listening for click on li element and scroll to it
  newLi.addEventListener("click", () => {
    elem.scrollIntoView({ behavior: "smooth", block: "end" });
  });

  //   console.log(dataNav);
  navbarList.appendChild(newLi);
});

// Add class 'active' to section when near top of viewport
const changeActiveSec = () => {
  for (section of sections) {
    // get the top of viewport
    let sectionView = section.getBoundingClientRect();
    let topOfSectionView = sectionView.top;

    // console.log(topOfSectionView);
    // // console.log(sectionView);

    // check which section in viewport closer to top
    if (
      // this number might need changed by follow viewport needs
      topOfSectionView >= -50 &&
      topOfSectionView <= 400 &&
      !section.classList.contains("your-active-class")
    ) {
      // if sec viewport true and not has active class
      section.classList.add("your-active-class");
    } else {
      // if false remove it
      section.classList.remove("your-active-class");
    }
  }
};
document.addEventListener("scroll", changeActiveSec);

/**
 * End Main Functions
 * Begin Events
 *
 */

// Scroll to anchor ID using scrollTO event

// Build menu

// Scroll to section on link click

// Set sections as active
