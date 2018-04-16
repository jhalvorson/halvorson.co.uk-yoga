module.exports = [
  {
    client: 'Royal Edinburgh Military Tattoo',
    agency: 'Signal',
    agencyUrl: 'https://cellosignal.com',
    techStack: ['REACT_NATIVE', 'WPAPI', 'FIREBASE'],
    description: 'I had the opportunity to lead development on Signal\'s first React Native application for Tattoo - a huge event attracting hundreds of thousands of tourists, which takes place over August every year. I led development over all areas of the application including building the UI components, building the integration between WordPress and Firebase and setting up our CI via Fastlane. The backend (WordPress) synced in real-time to Firebase which in turn delivered content updates in real-time to users. The CMS was built to control that standard content in the application and the real-time event updates. In order to make the application flexible for Tattoo the entire application runs on a "page-builder" allowing them to drag and drop elements into place and instantly update the UI of the application. ',
    year: 2017,
    role: 'Lead Developer',
  },
  {
    client: 'Marriott Hotels / Autograph',
    agency: 'Signal',
    agencyUrl: 'https://cellosignal.com',
    techStack: ['WORDPRESS'],
    role: 'Lead Developer',
    description: 'I lead development - both front and backend for Marriott\'s Autograph Hotels new website. The admin interface was the primary concern of the site, it had to be intuitive and easy to control hotels - each of which had their own style and required different layouts. We settled on utilising a drag-and-drop interface to control most of the site. The site is built in a component-based fashion, all of which can stack on top of each other with ease. One of the primary features of the site is its prominent search, for this we offset all indexing to Elastic Search, this auto-indexes all DB updates.'
  },
  {
    client: 'Ambridge Partners',
    description: 'I was tasked with building a multilingual WordPress, multisite for Ambridge Partners. In total there are three sites, however, more can be spun up as necessary. The frontend uses Twig.js with our pattern library at Signal, this way the integration is a smooth process. To handle the twig templates in the backend we\'re using Timber. The project utilises WordPress\' multisite and the WPML plugin to handle translations and domain mapping.',
    techStack: ['WORDPRESS'],
    year: 2018,
    role: 'Lead Developer',
    agency: 'Signal',
    agencyUrl: 'https://cellosignal.com',
  },
];