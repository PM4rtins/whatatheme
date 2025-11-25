// toggle-button.js
// Manages toggling of list-view and card-view dropdown buttons and their menus

/**
 * Script Overview:
 * Name: toggle-button.js
 * Purpose: Enables switching between list-view and card-view dropdowns by
 *          toggling the 'is-active' class on the buttons and corresponding menus.
 */

/**
 * Events / Callbacks
 * Description: Attaches click event listeners to the list-view and card-view
 *              buttons. Clicking a button toggles its 'is-active' state and
 *              the visibility of its corresponding menu, while deactivating
 *              the other button and menu.
 */
const listBtn = document.querySelector('.radio-button.list-view');
const cardBtn = document.querySelector('.radio-button.card-view');

const listMenu = document.querySelector('.dropdwn.list-view');
const cardMenu = document.querySelector('.dropdwn.card-view');

listBtn.addEventListener('click', () => {
    const active = listBtn.classList.contains('is-active');
    listBtn.classList.toggle('is-active', !active);
    listMenu.classList.toggle('is-active', !active);
    cardBtn.classList.remove('is-active');
    cardMenu.classList.remove('is-active');
});

cardBtn.addEventListener('click', () => {
    const active = cardBtn.classList.contains('is-active');
    cardBtn.classList.toggle('is-active', !active);
    cardMenu.classList.toggle('is-active', !active);
    listBtn.classList.remove('is-active');
    listMenu.classList.remove('is-active');
});
