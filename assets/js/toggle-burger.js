// toggle-burger.js
// Toggles the 'is-active' class on navbar burger elements for mobile navigation

/**
 * Script Overview:
 * Name: toggle-burger.js
 * Purpose: Enables mobile navigation by toggling the 'is-active' class on
 *          navbar burger buttons and their corresponding menu targets.
 */

/**
 * Events / Callbacks
 * Description: Attaches a DOMContentLoaded event listener to find all elements
 *              with the class 'navbar-burger'. For each burger element, adds
 *              a click listener that toggles the 'is-active' class on both the
 *              burger and its target menu element.
 */
document.addEventListener('DOMContentLoaded', function () {
    var burgers = Array.from(document.querySelectorAll('.navbar-burger'));
    burgers.forEach(function (burger) {
        burger.addEventListener('click', function () {
            var target = document.getElementById(burger.dataset.target);
            burger.classList.toggle('is-active');
            target.classList.toggle('is-active');
        });
    });
});
