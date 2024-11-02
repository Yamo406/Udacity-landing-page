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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

const sections = document.querySelectorAll("section");
const navbarFragment = new DocumentFragment();
const navbarlist = document.querySelector('#navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// navbar style
navbarlist.classList.add('navbar__menu');

sections.forEach((section) => {
    const element = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = section.dataset.nav;
    link.classList.add('menu__link');


    link.addEventListener('click', (event) => {
        event.preventDefault();
        section.scrollIntoView({ behavior: "smooth" });
    });

    element.appendChild(link);
    navbarFragment.appendChild(element);

});

// build the nav

navbarlist.appendChild(navbarFragment);

// Add class 'active' to section when near top of viewport

// how would you select the Active section?
// If the section in the middle of the viewport is the current section
// then highlight it.
document.addEventListener("scroll", (event) => {
    sections.forEach((section, index) => {
        let rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // Remove active class from all sections
            sections.forEach(sec => sec.classList.remove("activeSection"));
            // Add active class to the current section
            section.classList.add("activeSection");
        }
    });
})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


