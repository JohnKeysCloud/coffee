import { closeNav, initiateCloseNav } from './nav.js';

const navButton = document.querySelector('.nav-button');
let navOpen;

function toggleButton() {
  navOpen = navButton.classList.contains('open');

  if (!navOpen) { 
    navButton.classList.toggle('open');
    navButton.setAttribute('aria-label', 'Close Navigation Menu');
  } else {
    initiateCloseNav();
  }
}

navButton.addEventListener('click', toggleButton);

export {
  navButton,
  toggleButton
};