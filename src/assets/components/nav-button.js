import { closeNav, initiateCloseNav } from './nav.js';

const navButton = document.querySelector('.nav-san-button-container');
let navOpen;

function toggleButton() {
  navOpen = navButton.classList.contains('open');

  if (!navOpen) { 
    navButton.classList.toggle('open');
    navButton.setAttribute('aria-label', 'Close Navigation Menu');
    navButton.setAttribute('aria-expanded', true);
  } else {
    initiateCloseNav();
  }
}

navButton.addEventListener('click', toggleButton);

export {
  navButton,
  toggleButton
};