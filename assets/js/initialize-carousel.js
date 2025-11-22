// initialize-carousel.js
// Initializes a Bulma-based carousel within the current page's DOM context

/**
 * Script Overview:
 * Name: initialize-carousel.js
 * Purpose: Builds and initializes a carousel component using the Bulma framework.
 */

/**
 * Events / Callbacks
 * Description: Attaches a DOMContentLoaded event listener to the document. 
 *              Once the DOM is fully loaded, it initializes all elements with
 *              the class 'carousel' using bulmaCarousel.attach() and configures
 *              options such as slidesToScroll, slidesToShow, navigation, loop, and infinite.
 */
document.addEventListener('DOMContentLoaded', () => {
    bulmaCarousel.attach('.carousel', {
        slidesToScroll: 1,
        slidesToShow: 3,
        navigation: true,
        loop: true,
        infinite: true,
    });
});
