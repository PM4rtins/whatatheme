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
    let slidesToScroll = 3;
    let slidesToShow = 3;

    if (document.body.classList.contains('is-hidden-tablet')) { 
        slidesToScroll = 1;
        slidesToShow = 1;
    }

    bulmaCarousel.attach('.carousel', {
        slidesToScroll: slidesToScroll,
        slidesToShow: slidesToShow,
        pagination: 1,
        navigation: true,
        loop: false,
        infinite: false,
    });
});
