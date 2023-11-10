//  CLASSES
// * story-content-container
// *    story-heading
// *    story-body-text-container
// *        story-paragraph-element


const storyParagraphs = [
  "Nestled in the heart of New York City, Cloud 8 Café isn't just another spot in the city's bustling coffee scene – it's a revelation. This isn't your average café; it's where modern aesthetics meet an unparalleled atmosphere of productivity. Firstly, let’s talk about the ambiance. The moment you step inside, you’re greeted by an interior that strikes a perfect balance between sleek, industrial chic and cozy, welcoming vibes.",
  
  "The minimalist decor, accentuated by warm lighting and occasional splashes of greenery, creates an environment that fuels creativity and focus.The seating arrangement is thoughtfully designed, offering a mix of communal tables, cozy nooks, and even stand - up spots for those who like to mix up their work posture. Noise levels here are masterfully moderated - the buzz of quiet conversations, the soft clacking of laptop keys, and the gentle hum of espresso machines blend into a background symphony that's stimulating rather than distracting. It's a vibe that invites you to hunker down with your laptop and punch out that report or brainstorm your next big idea.",

  "Cloud 8 Café takes its brew seriously. Sourced from the finest local roasters, every cup is a testament to quality and craftsmanship. Be it a robust espresso to kickstart your morning or a delicately balanced pour-over to mellow out your afternoon, they have it all. And for the non-coffee drinkers, their range of artisanal teas and fresh pastries are delightful. Service here deserves a special mention.",
  
  "The staff strikes a perfect balance between being attentive and giving you space to work undisturbed.It's service with a smile, but also with an understanding of a workspace's sanctity.In conclusion, Cloud 8 Café transcends the typical coffee shop formula.It's a haven for productive work, a hotspot for superb coffee, and a testament to the fact that in the heart of the city, there are still places where one can enjoy tranquility and productivity in a stylish setting. Whether you’re looking to power through a project or just enjoy a good book with your latte, Cloud 8 Café promises — and delivers — an exceptional experience.",

  "Connectivity is a breeze with high-speed Wi-Fi and plenty of power outlets thoughtfully sprinkled throughout the space. Whether you're a digital nomad, a student, or just someone looking to catch up on emails, you'll find yourself productive and connected. The real highlight, of course, is the coffee.",
];

function createStory() {
  
  const storyContentContainer = document.createElement('div');
  storyContentContainer.classList.add('story-content-container');

  const storyHeading = document.createElement('h2');
  storyHeading.classList.add('story-heading');
  storyHeading.textContent = 'Our Story';
  
  const storyBodyTextContainer = document.createElement('div');
  storyBodyTextContainer.classList.add('story-body-text-container');
  storyContentContainer.appendChild(storyBodyTextContainer);
  
  const storyParagraphFragment = document.createDocumentFragment();
  
  storyParagraphs.forEach(paragaph => {
    const storyParagraphElement = document.createElement('p');
    storyParagraphElement.classList.add('story-paragraph-element');
    storyParagraphElement.textContent = paragaph;

    const divider = document.createElement('hr');
    divider.classList.add('story-divider');
    
    storyParagraphFragment.append(storyParagraphElement, divider);
  });
  
  
  storyBodyTextContainer.appendChild(storyParagraphFragment);
  
  storyContentContainer.append(storyHeading, storyBodyTextContainer);

  return storyContentContainer;
}

export default createStory;