// toggle-carousel.js
// Toggles between two carousels, their backgrounds, and text content in the showcase section

/**
 * Script Overview:
 * Name: toggle-carousel.js
 * Purpose: Manages switching between two carousels in the showcase section,
 *          updating backgrounds, section classes, button text, and description.
 */

/**
 * Functions
 */

/**
 * setState
 * Parameters:
 *   index (number, required) - Index of the active carousel (0 or 1)
 * Returns: void
 * Description: Updates visibility of carousels and backgrounds, toggles
 *              section state classes, and updates the button text and description
 *              based on the active carousel.
 */

/**
 * Events / Callbacks
 * Description: Attaches a DOMContentLoaded listener to initialize the toggle button.
 *              Adds a click listener to the toggle button to switch between
 *              carousel states and calls setState to reflect the current state.
 */
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggleCarousel');
    const section = document.getElementById('showcase');
    const dscrpt = document.getElementById('showcase-description');
    const carousels = [document.getElementById('carousel1'), document.getElementById('carousel2')];
    const backgrounds = [document.getElementById('bg1'), document.getElementById('bg2')];
    let active = 0;

    function setState(index) {
        const btnText = btn.querySelector('p');

        carousels.forEach((c, i) => c.classList.toggle('hidden', i !== index));
        backgrounds.forEach((b, i) => b.classList.toggle('hidden', i !== index));
        section.classList.toggle('carousel1-active', index === 0);
        section.classList.toggle('carousel2-active', index === 1);

        if (index === 0) {
            btnText.textContent = 'Projects';
            dscrpt.textContent = 'Browse my most recent projects.';
        } else {
            btnText.textContent = 'Blog';
            dscrpt.textContent = 'Explore the latest blog entries.';
        }
    }

    btn.addEventListener('click', () => {
        active = active === 0 ? 1 : 0;
        setState(active);
    });

    setState(active);
});
