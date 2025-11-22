// handle-slideshow.js
// Updates the active slide in a slideshow based on window scroll position

/**
 * Script Overview:
 * Name: handle-slideshow.js
 * Purpose: Monitors window scroll position and updates the currently active
 *          slide in the slideshow accordingly.
 */

/**
 * Functions
 */

/**
 * updateSlide
 * Parameters: None
 * Returns: void
 * Description: Compares the current scroll position against slide target positions,
 *              updates the 'current' class on slides, and tracks the active slide index.
 */
function updateSlide() {
    const y = window.scrollY;
    let idx = active;

    for (let i = targets.length - 1; i >= 0; i--) {
        if (y >= targets[i]) {
            idx = i;
            break;
        }
    }

    if (idx === active) return;

    slides[active].classList.remove('current');
    slides[idx].classList.add('current');
    active = idx;
}

/**
 * Events / Callbacks
 * Description: Attaches a scroll event listener to the window that triggers
 *              updateSlide() on each scroll event, ensuring the slideshow
 *              reflects the current scroll position.
 */
window.addEventListener('scroll', updateSlide);

// Slide elements and targets
const slides = Array.from(document.querySelectorAll('#slideshow .slide'));
const targets = slides.map(slide => parseInt(slide.dataset.target, 10));
let active = 0;
