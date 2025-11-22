// handle-scroll.js
// Handles smooth scrolling for links with data-target attributes

/**
 * Script Overview:
 * Name: handle-scroll.js
 * Purpose: Provides smooth scrolling functionality for links, including
 *          alignment of section bottoms with the viewport.
 */

/**
 * Functions
 */

/**
 * setBottom
 * Parameters:
 *   section (HTMLElement, required) - The section element to align with the viewport bottom.
 * Returns: number
 * Description: Computes the scroll position so that the bottom of the given
 *              section aligns with the bottom of the viewport.
 */
function setBottom(section) {
    const sectionBottom = section.getBoundingClientRect().bottom + window.scrollY;
    return sectionBottom - window.innerHeight;
}

/**
 * Events / Callbacks
 * Description: Attaches click event listeners to all links with the class 'js-scroll'.
 *              On click, prevents default behavior, identifies the target element,
 *              and scrolls smoothly either to the top of the element or aligns its
 *              bottom with the viewport if the link has the 'to-bottom' class.
 */
document.querySelectorAll('a.js-scroll').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(link.dataset.target);
        if (!target) return;

        if (link.classList.contains('to-bottom')) {
            const bottom = setBottom(target);
            window.scrollTo({ top: bottom, behavior: 'smooth' });
        } else {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
