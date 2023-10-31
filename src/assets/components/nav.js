import { navButton } from './nav-button.js';

const navUL = document.querySelector('.nav-ul');

function closeNav() {
  navUL.classList.remove('closing');
  navUL.removeEventListener('animationend', closeNav);

  navButton.classList.remove('open');
  navButton.setAttribute('aria-label', 'Open Navigation Menu');
  navButton.setAttribute('aria-expanded', false);
}

function initiateCloseNav() {
  navUL.classList.add('closing');
  navUL.addEventListener('animationend',closeNav);
}

export {
  initiateCloseNav
};