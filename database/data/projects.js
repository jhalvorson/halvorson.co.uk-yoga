module.exports = [
  {
    client: 'Royal Edinburgh Military Tattoo',
    url: 'https://itunes.apple.com/us/app/the-royal-edinburgh-military-tattoo/id1250371654?mt=8',
    agency: 'Signal',
    agencyUrl: 'https://cellosignal.com',
    techStack: ['REACT_NATIVE', 'WPAPI', 'FIREBASE'],
    description: 'I had the opportunity to lead development on Signal\'s first React Native application for Tattoo - a huge event attracting hundreds of thousands of tourists, which takes place over August every year. I led development over all areas of the application including building the UI components, building the integration between WordPress and Firebase and setting up our CI via Fastlane. The backend (WordPress) synced in real-time to Firebase which in turn delivered content updates in real-time to users. The CMS was built to control that standard content in the application and the real-time event updates. In order to make the application flexible for Tattoo the entire application runs on a "page-builder" allowing them to drag and drop elements into place and instantly update the UI of the application. ',
    year: 2017,
    role: 'Lead Developer',
  },
  {
    client: 'Marriott Hotels / Autograph',
    url: 'https://autograph-hotels.marriott.com/',
    agency: 'Signal',
    agencyUrl: 'https://cellosignal.com',
    techStack: ['WORDPRESS'],
    role: 'Lead Developer',
    year: 2017,
    description: 'I lead development - both front and backend for Marriott\'s Autograph Hotels new website. The admin interface was the primary concern of the site, it had to be intuitive and easy to control hotels - each of which had their own style and required different layouts. We settled on utilising a drag-and-drop interface to control most of the site. The site is built in a component-based fashion, all of which can stack on top of each other with ease. One of the primary features of the site is its prominent search, for this we offset all indexing to Elastic Search, this auto-indexes all DB updates.'
  },
  {
    client: 'Patrick Gilmour',
    techStack: ['WORDPRESS'],
    role: 'Design & Development',
    url: 'https://patrickgilmour.com',
    year: 2016,
    description: 'Patrick Gilmour is freelance chef working at large events such as weddings to small, intimate dinners. Patrick approached me to design and build his latest site. After discussions with Patrick we settled on a single-page site using smooth parallax effects and small snippets of film to engage the user. Users can enquire about bookings for both events and his supper club through contact forms on the site.'
  }
  // {
  //   client: 'Ambridge Partners',
  //   description: 'I was tasked with building a multilingual WordPress, multisite for Ambridge Partners. In total there are three sites, however, more can be spun up as necessary. The frontend uses Twig.js with our pattern library at Signal, this way the integration is a smooth process. To handle the twig templates in the backend we\'re using Timber. The project utilises WordPress\' multisite and the WPML plugin to handle translations and domain mapping.',
  //   techStack: ['WORDPRESS'],
  //   year: 2018,
  //   role: 'Lead Developer',
  //   agency: 'Signal',
  //   agencyUrl: 'https://cellosignal.com',
  // },
  // {
  //   client: 'Street Soccer Scotland',
  //   year: 2018
  // }
];