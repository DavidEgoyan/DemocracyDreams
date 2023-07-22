/* These lines of code are selecting elements from the HTML document using various methods provided by
the Document Object Model (DOM) API in JavaScript. */
const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

/**
 * The function sets the "aria-expanded" attribute of all dropdown buttons to "false".
 */
function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

/**
 * The function removes the "active" class from all dropdown menus and prevents the click event from
 * propagating.
 */
function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}

/**
 * The function toggles the "show" class on the navMenu element.
 */
function toggleHamburger() {
  navMenu.classList.toggle("show");
}

/* This code is adding a click event listener to each element in the `dropdownBtn` array. When a
dropdown button is clicked, it retrieves the value of the `data-dropdown` attribute from the clicked
button using `e.currentTarget.dataset.dropdown`. It then uses this value to get the corresponding
dropdown element using `document.getElementById(dropdownIndex)`. */
dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  });
});

/* This code is adding a click event listener to each link element in the dropdown menus. When a link
is clicked, it calls three functions: `closeDropdownMenu()`, `setAriaExpandedFalse()`, and
`toggleHamburger()`. These functions respectively close any open dropdown menus, set the
`aria-expanded` attribute of all dropdown buttons to "false", and toggle the visibility of the
hamburger menu. */
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

/* This code is adding a click event listener to the entire HTML document. When the user clicks
anywhere on the document, the `closeDropdownMenu()` and `setAriaExpandedFalse()` functions are
called. This ensures that any open dropdown menus are closed and the `aria-expanded` attribute of
all dropdown buttons is set to "false" when the user clicks outside of the dropdown menu. */
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

/* This code is adding a keydown event listener to the entire HTML document. When the user presses the
"Escape" key, the `closeDropdownMenu()` and `setAriaExpandedFalse()` functions are called. This
ensures that any open dropdown menus are closed and the `aria-expanded` attribute of all dropdown
buttons is set to "false" when the user presses the "Escape" key. */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdownMenu();
    setAriaExpandedFalse();
  }
});

/* This line of code is adding a click event listener to the `hamburgerBtn` element. When the
`hamburgerBtn` is clicked, the `toggleHamburger()` function is called, which toggles the visibility
of the `navMenu` element by adding or removing the `show` class. */
hamburgerBtn.addEventListener("click", toggleHamburger);
