import '../css/style.css';

const content = document.getElementById('content');

const pageNames = ['home', 'products', 'story', 'gallery'];

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
    navLink.setAttribute('href', '#');
    navLink.textContent = page;

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
  headerTitle.textContent = 'Coffee';

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

function createDivider(classArray = []) {
  // ? if classArray is an array, it returns the array
  // ? if classArray is a string (a truthy value), it returns an array with the string as the only element
  // ? if classArray is a falsy value, it returns an empty array
  classArray = Array.isArray(classArray)
    ? classArray
    : classArray
    ? [classArray]
    : [];
  
  const pathData = 'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z';

  const svgNameSpace = 'http://www.w3.org/2000/svg';
  const shapeDivider = document.createElement('div');
  shapeDivider.classList.add(...classArray);

  const shapeDividerSVG = document.createElementNS(svgNameSpace, 'svg');
  // ? ns = namespace (svgNameSpace) is required for svg elements
  shapeDividerSVG.setAttributeNS(null, 'viewBox', '0 0 1200 120');
  shapeDividerSVG.setAttributeNS(null, 'preserveAspectRatio', 'none');
  shapeDividerSVG.setAttribute('aria-hidden', 'true');
  shapeDividerSVG.setAttribute('role', 'presentation');
  
  const shapeDividerPath = document.createElementNS(svgNameSpace, 'path');
  shapeDividerPath.classList.add('shape-fill');
  shapeDividerPath.setAttributeNS(null, 'd', pathData);

  shapeDividerSVG.appendChild(shapeDividerPath);

  shapeDivider.appendChild(shapeDividerSVG);

  return shapeDivider;
}

function createQuotation(quoteObject) {
  const { parts: quotePartsArray, author } = quoteObject;
  // ? extracts the value parts property from the quotesObject, an array
  // ? extracts the value of the author property from the quotesObject, a string

  const figure = document.createElement('figure');

  const blockquote = document.createElement('blockquote');

  const blockquoteText = document.createElement('p');
  blockquoteText.classList.add('testimonial-quote');

  const figcaption = document.createElement('figcaption');
  figcaption.classList.add('testimonial-figcaption');
  figcaption.textContent = `- ${author}`;

  const emphasisText = 'coffee';
  
  quotePartsArray.forEach((part) => {
    if (part === emphasisText) {
      const emphasizedSpan = document.createElement('span');
      emphasizedSpan.classList.add('shop-name');
      emphasizedSpan.textContent = part;

      blockquoteText.appendChild(emphasizedSpan);
    } else {
      blockquoteText.appendChild(document.createTextNode(part));
    }
  });

  blockquote.appendChild(blockquoteText);

  figure.appendChild(blockquote);
  figure.appendChild(figcaption);

  return figure;
}

function createSectionOne() {
  const shopDisplaySection = document.createElement('section');
  shopDisplaySection.classList.add('shop-display-section');

  const shopImage = document.createElement('img');
  shopImage.classList.add('shop-image');
  shopImage.setAttribute('src', './assets/images/coffee-shop.png');
  shopImage.setAttribute('alt', 'Coffee Shop');

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

  shopDisplaySection.appendChild(shapeDividerTop);
  shopDisplaySection.appendChild(shopImage);
  shopDisplaySection.appendChild(shapeDividerBottom);

  return shopDisplaySection;
}

function createSectionTwo() {
  const testimonialSection = document.createElement('section');
  testimonialSection.classList.add('testimonial-section');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('page-content', 'section-content', 'testimonial-section-content');

  const coffeeCupImage = document.createElement('img');
  coffeeCupImage.classList.add('coffee-cup');
  coffeeCupImage.setAttribute('src', './assets/images/coffee-cup.webp');
  coffeeCupImage.setAttribute('alt', 'Coffee Cup');

  const shapeDividerBottom = createDivider([
    'shape-divider',
    'shape-divider-bottom',
    'shape-divider-three',
  ]);

  const quotes = {
    quoteOne: {
      'parts': [
        '"',
        'coffee',
        ' ',
        'blends sleek design with a productivity-boosting ambiance, all while serving up some of the city\'s finest joe. It\'s the perfect urban oasis for creatives and coffee lovers alike."',
      ],
      'author': 'Elon Musk',
    },
    quoteTwo: {
      'parts': [
        '"With its winning combination of earth-toned, minimalist design and signature lo-fi music',
        ' ',
        'coffee',
        ' ',
        'is the go-to spot for modern city dwellers seeking a tranquil haven to work and savor top-notch java. It\'s where aesthetic meets caffeine."',
      ],
      'author': 'John Cloud',
    },
  }
  
  contentContainer.appendChild(createQuotation(quotes.quoteOne));
  contentContainer.appendChild(coffeeCupImage);
  contentContainer.appendChild(createQuotation(quotes.quoteTwo));

  testimonialSection.appendChild(contentContainer);
  testimonialSection.appendChild(shapeDividerBottom);

  return testimonialSection;
}

function renderHoursContent() {
  const hoursTable = document.createElement('div');

  const tableHeading = document.createElement('h2');
  tableHeading.classList.add('information-heading');
  tableHeading.textContent = 'hours of operation';

  const hoursContentContainer = document.createElement('div');
  hoursContentContainer.classList.add('hours-content-container');

  const hoursData = {
    'monday': '7:00am - 11:00pm',
    'tuesday': '7:00am - 11:00pm',
    'wednesday': '7:00am - 11:00pm',
    'thursday': '7:00am - 11:00pm',
    'friday': '7:00am - 11:00pm',
    'saturday': '9:00am - 12:00am',
    'sunday': '9:00am - 7:00pm',
  };
  
  for (const day in hoursData) {
    const dayContainer = document.createElement('div');
    dayContainer.classList.add('day-container');

    const operatingDay = document.createElement('p');
    operatingDay.classList.add('information-sub-heading', 'operating-day');
    operatingDay.textContent = day;

    const operatingHours = document.createElement('p');
    operatingHours.classList.add('operating-hours');
    operatingHours.textContent = hoursData[day];

    const horizontalRule = document.createElement('hr');

    dayContainer.appendChild(operatingDay);
    dayContainer.appendChild(operatingHours);
    
    hoursContentContainer.appendChild(dayContainer);
    hoursContentContainer.appendChild(horizontalRule);
  }

  hoursTable.appendChild(tableHeading);
  hoursTable.appendChild(hoursContentContainer);

  return hoursTable;
}

function createSubContainer(contactDataArr) {
  const informationSubContainer = document.createElement('div');
  informationSubContainer.classList.add('information-sub-container');

  const informationSubHeading = document.createElement('h3');
  informationSubHeading.classList.add('information-sub-heading');
  informationSubHeading.textContent = contactDataArr[1];

  const methodOfContact = document.createElement('a');
  methodOfContact.classList.add('method-of-contact');
  methodOfContact.setAttribute('href', contactDataArr[0]);
  methodOfContact.textContent = contactDataArr[2];

  informationSubContainer.appendChild(informationSubHeading);
  informationSubContainer.appendChild(methodOfContact);

  return informationSubContainer;
}

function renderAddress(addressData) { 
  const addressContainer = document.createElement('div');
  addressContainer.classList.add('address-container');

  const addressSubHeading = document.createElement('h3');
  addressSubHeading.classList.add('information-sub-heading');
  addressSubHeading.textContent = 'address:';
  
  const addressStreet = document.createElement('p');
  addressStreet.textContent = addressData[0];

  const addressCityStateZip = document.createElement('p');
  addressCityStateZip.textContent = addressData[1];

  addressContainer.appendChild(addressSubHeading);
  addressContainer.appendChild(addressStreet);
  addressContainer.appendChild(addressCityStateZip);

  return addressContainer;
}

function createSectionThree() {
  const addressDataArr = ['888 Coffee Street', 'New York, NY 10003'];

  const informationSection = document.createElement('section');
  informationSection.classList.add('information-section');
  
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('page-content', 'section-content', 'information-section-content');

  const hoursTable = renderHoursContent();
  hoursTable.classList.add('hours-table');

  const informationBottomSection = document.createElement('div');
  informationBottomSection.classList.add('information-bottom-section');

  const contactUsContainer = document.createElement('div');
  contactUsContainer.classList.add('contact-us-container');

  const contactUsHeading = document.createElement('h2');
  contactUsHeading.classList.add('information-heading');
  contactUsHeading.textContent = 'contact us';

  const contactUsContent = document.createElement('div');
  contactUsContent.classList.add('contact-us-content');

  const visitUsContainer = document.createElement('div');
  visitUsContainer.classList.add('visit-us');
  
  const visitUsHeading = document.createElement('h2');
  visitUsHeading.classList.add('information-heading');
  visitUsHeading.textContent = 'visit us';

  const addressContainer = renderAddress(addressDataArr);

  const emailSubContainer = createSubContainer([
    'mailto:coffee@cyclonestud.io',
    'email:',
    'coffee@cyclonestud.io',
  ]);
  const phoneSubContainer = createSubContainer([
    'tel:212-555-7813',
    'phone:',
    '212-555-7813',
  ]);  
  const instagramSubContainer = createSubContainer([
    '#',
    'instagram',
    '@coffeebycyclone',
  ]);

  contactUsContent.appendChild(emailSubContainer);
  contactUsContent.appendChild(phoneSubContainer);
  contactUsContent.appendChild(instagramSubContainer);

  contactUsContainer.appendChild(contactUsHeading);
  contactUsContainer.appendChild(contactUsContent);

  visitUsContainer.appendChild(visitUsHeading);
  visitUsContainer.appendChild(addressContainer);

  informationBottomSection.appendChild(contactUsContainer);
  informationBottomSection.appendChild(visitUsContainer);
  
  contentContainer.appendChild(hoursTable);
  contentContainer.appendChild(informationBottomSection);

  informationSection.appendChild(contentContainer);

  return informationSection;
}

function createFooter() {
  const footer = document.createElement('footer');
  // const footerTextParts

  


  // const footerText = document.
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
// content.appendChild(createFooter());

// ! use when changing page contents
// navLink.setAttribute('aria-current', 'page');