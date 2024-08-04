/* blog Secion - Pages */
const pagesLink = document.querySelector('a[href="#blogs"]');

pagesLink.addEventListener('click', (e) => {
  e.preventDefault();

  const blogsSection = document.querySelector('#blogs');

  // Scroll to the Blogs
  blogsSection.scrollIntoView({ behavior: 'smooth' });
});

/* collection section - shop */
const shopLink = document.querySelector('a[href="#collection"]');

shopLink.addEventListener('click', (e) => {
  
  e.preventDefault();

  
  const collectionSection = document.querySelector('#collection');

  collectionSection.scrollIntoView({ behavior: 'smooth' });
});

/* fotters section - About US */
const AboutUsLink = document.querySelector('a[href="#footers"]');

AboutUsLink.addEventListener('click', (e) => {
  
  e.preventDefault();

  const footersSection = document.querySelector('#footers');

  footersSection.scrollIntoView({ behavior: 'smooth' });
});

/* Arrivel Section - Lookups */
const LookupsLink = document.querySelector('a[href="#arrivals"]');

LookupsLink.addEventListener('click', (e) => {
  
  e.preventDefault();

  const arrivalsSection = document.querySelector('#arrivals');

  arrivalsSection.scrollIntoView({ behavior: 'smooth' });
});