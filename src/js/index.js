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

  const shapeDivider = document.createElement('div');
  shapeDivider.classList.add(...classArray);

  const shapeDividerSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  // ? ns = namespace (svgNameSpace) is required for svg elements
  shapeDividerSVG.setAttributeNS(null, 'viewBox', '0 0 1200 120');
  shapeDividerSVG.setAttributeNS(null, 'preserveAspectRatio', 'none');
  shapeDividerSVG.setAttribute('aria-hidden', 'true');
  shapeDividerSVG.setAttribute('role', 'presentation');
  
  const shapeDividerPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
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
  const footerTextParts = [
    '©',
    ' ',
    '{{footerYear}}',
    ' ',
    'Coffee by Cyclone Studios',
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

    console.log(contactMethod);
    console.log(contactData[contactMethod].href);
    
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

// ! use when changing page contents
// navLink.setAttribute('aria-current', 'page');