import '../css/style.css';
import toggleButton from '../assets/components/nav-button';

const content = document.getElementById('content');

const pageNames = ['home', 'products', 'story', 'gallery'];

function createNav(pages) {
  const mainNavigation = document.createElement('nav');
  const navSanButtonContainer = document.createElement('button');
  const navSanButton = document.createElement('div');
  const navUL = document.createElement('ul');

  const listFragment = document.createDocumentFragment();

  pages.forEach((page) => {
    const navLI = document.createElement('li');
    const navLink = document.createElement('a');

    navLI.classList.add('nav-li');
    navLink.classList.add('nav-a');

    navLink.setAttribute('href', '#');

    navLink.textContent = page;

    navLI.appendChild(navLink);
    listFragment.appendChild(navLI);
  });

  navSanButtonContainer.classList.add('nav-button');
  navSanButton.classList.add('nav-san');
  navUL.classList.add('nav-ul');

  mainNavigation.setAttribute('aria-label', 'Main Navigation');
  navSanButtonContainer.setAttribute('aria-label', 'Open Navigation Menu');
  navSanButtonContainer.setAttribute('aria-expanded', 'false');

  navSanButtonContainer.appendChild(navSanButton);
  navUL.appendChild(listFragment);
  mainNavigation.appendChild(navSanButtonContainer);
  mainNavigation.appendChild(navUL);

  return mainNavigation;
}

function createHeader() {
  const header = document.createElement('header');
  const pageContentContainer = document.createElement('div');
  const headerLeft = document.createElement('div');
  const headerTitle = document.createElement('a');
  const headerRight = document.createElement('div');

  pageContentContainer.classList.add('page-content header-container');
  headerLeft.classList.add('header-left');
  headerTitle.classList.add('header-title');
  headerRight.classList.add('header-right');

  headerTitle.textContent = 'Coffee';

  headerLeft.appendChild(headerTitle);
  headerRight.appendChild(createNav(pageNames));
  header.appendChild(headerLeft);
  header.appendChild(headerRight);
}

// * use when changing page contents
// navLink.setAttribute('aria-current', 'page');

function createDivider(classArray = []) {
  const shapeDivider = document.createElement('div');
  const shapeDividerSVG = document.createElement('svg');
  const shapeDividerPath = document.createElement('path');
  const pathData =
    'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z';

  // ? if classArray is an array, it returns the array
  // ? if classArray is a string (a truthy value), it returns an array with the string as the only element
  // ? if classArray is a falsy value, it returns an empty array
  classArray = Array.isArray(classArray)
    ? classArray
    : classArray
    ? [classArray]
    : [];

  shapeDivider.classList.add('shape-divider', ...classArray);
  shapeDividerPath.classList.add('shape-fill');

  shapeDividerSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  shapeDividerSVG.setAttribute('viewBox', '0 0 1200 120');
  shapeDividerSVG.setAttribute('preserveAspectRatio', 'none');
  shapeDividerSVG.setAttribute('aria-hidden', 'true');
  shapeDividerSVG.setAttribute('role', 'presentation');

  shapeDividerPath.setAttribute('d', pathData);

  shapeDividerSVG.appendChild(shapeDividerPath);
  shapeDivider.appendChild(shapeDividerSVG);

  return shapeDivider;
}

function createSectionOne() {
  const shopDisplaySection = document.createElement('section');
  const shopImage = document.createElement('img');
  const shapeDividerTop = createDivider([
    'shape-divider',
    'shape-divider-top',
    'shape-divider-one',
  ]);
  const shapeDividerBottom = createDivider([
    'shape-divider',
    'shape-divider-bottom',
    'shape-divider-two',
  ]);

  shopDisplaySection.classList.add('shop-display-section');

  shopImage.classList.add('shop-image');

  shopImage.setAttribute('src', './assets/images/coffee-shop.png');
  shopImage.setAttribute('alt', 'Coffee Shop');

  shopDisplaySection.appendChild(shapeDividerTop);
  shopDisplaySection.appendChild(shopImage);
  shopDisplaySection.appendChild(shapeDividerBottom);

  return shopDisplaySection;
}

function createSectionTwo() {
  // ! pressStart
}

function createSectionThree() {
  // ! pressStart
}

function createFooter() {
  // ! pressStart
}

function createMain() {
  const main = document.createElement('main');

  main.appendChild(createSectionOne());
  main.appendChild(createSectionTwo());
  main.appendChild(createSectionThree());
  
  return main;
}

content.appendChild(createHeader(pageNames));
content.appendChild(createMain());
content.appendChild(createFooter());