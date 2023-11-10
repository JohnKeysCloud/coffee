import homePage from './home.js';
import productsPage from './products.js';
import storyPage from './story.js';
import '../css/style.css';

const pageContent = document.getElementById('content');

const pageNames = ['home', 'products', 'story'];

function hideNav() {
  const navUL = document.querySelector('.nav-ul');
  navUL.classList.remove('closing');
  navUL.removeEventListener('animationend', hideNav);

  const navSanButtonContainer = document.querySelector('.nav-san-button-container');
  navSanButtonContainer.classList.remove('open');
  navSanButtonContainer.setAttribute('aria-label', 'Open Navigation Menu');
  navSanButtonContainer.setAttribute('aria-expanded', false);
}

function toggleNavButton() {
  let navOpen = this.classList.contains('open');

  if (!navOpen) {
    this.classList.add('open');

    this.setAttribute('aria-label', 'Close Navigation Menu');
    this.setAttribute('aria-expanded', true);
  } else {
    this.nextElementSibling.classList.add('closing');

    this.nextElementSibling.addEventListener('animationend', hideNav);
  }
}

function createNav(pages) {
  const mainNavigation = document.createElement('nav');
  mainNavigation.setAttribute('aria-label', 'Main Navigation');

  const navSanButtonContainer = document.createElement('button');
  navSanButtonContainer.classList.add('nav-san-button-container');
  navSanButtonContainer.setAttribute('aria-label', 'Open Navigation Menu');
  navSanButtonContainer.setAttribute('aria-expanded', 'false');

  const navSanButton = document.createElement('div');
  navSanButton.classList.add('nav-san-button');
  
  const navUL = document.createElement('ul');
  navUL.classList.add('nav-ul');

  const listFragment = document.createDocumentFragment();
  pages.forEach((page) => {
    const navLI = document.createElement('li');
    navLI.classList.add('nav-li');
    
    const navLink = document.createElement('a');
    navLink.classList.add('nav-a');
    navLink.textContent = page;
    
    if (page === 'home') {
      navLink.setAttribute('aria-current', 'page');
    }

    navLI.appendChild(navLink);
    listFragment.appendChild(navLI);
  });
  
  navSanButtonContainer.appendChild(navSanButton);

  navUL.appendChild(listFragment);

  mainNavigation.appendChild(navSanButtonContainer);
  mainNavigation.appendChild(navUL);
  
  navSanButtonContainer.addEventListener('click', toggleNavButton);

  return mainNavigation;
}

function createHeader() {
  const header = document.createElement('header');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('page-content', 'header-content');

  const headerLeft = document.createElement('div');
  headerLeft.classList.add('header-left');

  const headerTitle = document.createElement('a');
  headerTitle.classList.add('header-title');
  headerTitle.textContent = 'Cloud 8 Café';

  const headerRight = document.createElement('div');
  headerRight.classList.add('header-right');

  const nav = createNav(pageNames);
  
  headerLeft.appendChild(headerTitle);

  headerRight.appendChild(nav);

  contentContainer.appendChild(headerLeft);
  contentContainer.appendChild(headerRight);

  header.appendChild(contentContainer);

  return header;
}

function createFooter() {
  const footer = document.createElement('footer');
  const footerTextParts = [
    '©',
    ' ',
    '{{footerYear}}',
    ' ',
    'Cloud 8 Café by Cyclone Studios',
  ];

  const footerText = document.createElement('p');
  footerTextParts.forEach((part) => {
    if (part === '{{footerYear}}') {
      const footerYear = document.createElement('span');
      footerYear.classList.add('footer-year');
      footerYear.textContent = new Date().getFullYear();

      footerText.appendChild(footerYear);
    } else {
      footerText.appendChild(document.createTextNode(part));
    }
  });
  
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');

  const contactData = {
    phone: {
      'href': 'tel:212-555-7813',
      'aria-label': 'Call Us',
      svgPathD:
        'M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z',
    },
    instagram: {
      'href': '#',
      'aria-label': 'Instagram',
      svgPathD:
        'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
    },
    email: {
      href: 'mailto:coffee@cyclonestud.io',
      'aria-label': 'Email Us',
      svgPathD: 'M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z',
    }
  }

  for (const contactMethod in contactData) {
    const methodData = contactData[contactMethod];
    
    const contactButtonLink = document.createElement('a');
    contactButtonLink.classList.add('footer-link');
    contactButtonLink.setAttribute('href', methodData.href);
    contactButtonLink.setAttribute('aria-label', methodData['aria-label']);

    const contactButtonSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    contactButtonSVG.classList.add('footer-logo');
    contactButtonSVG.setAttributeNS(null, 'viewBox', '0 0 512 512');
    contactButtonSVG.setAttributeNS(null, 'role', 'img');

    const contactButtonSVGPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    contactButtonSVGPath.setAttributeNS(null, 'd', methodData.svgPathD);

    contactButtonSVG.appendChild(contactButtonSVGPath);

    contactButtonLink.appendChild(contactButtonSVG);

    logoContainer.appendChild(contactButtonLink);
  }

  footer.appendChild(footerText);
  footer.appendChild(logoContainer);

  return footer;
}

function clearMainContent(mainElement) {
  if (mainElement) {
    while (mainElement.firstChild) {
      mainElement.firstChild.remove();
    }
  }
}

function renderMain(sectionsArray) {
  sectionsArray = Array.isArray(sectionsArray)
    ? sectionsArray
    : sectionsArray
    ? [sectionsArray]
    : [];
  
  const main = document.querySelector('main') || document.createElement('main');
  clearMainContent(main);
  
  sectionsArray.forEach((section) => {
    main.appendChild(section());
  });

  return main;
}

function renderHomePage() {
  pageContent.appendChild(createHeader(pageNames));
  pageContent.appendChild(renderMain(homePage));
  pageContent.appendChild(createFooter());
}

function resetAriaCurrent() {
  const navLinks = document.querySelectorAll('.nav-a');
  navLinks.forEach((link) => {
    if (!link.hasAttribute('aria-current')) return; 

    link.removeAttribute('aria-current');
  });
}

renderHomePage();

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    const navElement = e.target;

    if (navElement.hasAttribute('aria-current')) return;
    
    if (navElement.classList.contains('nav-a')) {
      e.preventDefault();

      resetAriaCurrent();

      switch (navElement.textContent) {
        case 'home':
          renderMain(homePage);
          navElement.setAttribute('aria-current', 'page');
          break;
        case 'products':
          renderMain(productsPage);
          navElement.setAttribute('aria-current', 'page');
          break;
        case 'story':
          renderMain(storyPage);
          navElement.setAttribute('aria-current', 'page');
          break;
        }
      }
  });
});
// ! use when changing page contents
// navLink.setAttribute('aria-current', 'page');
// main.appendChild(gallery);