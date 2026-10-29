WEDE5020 Parts 1, 2 & 3 - Project README

Name: Kevin Dlamini
Student Number: ST10514675
Module: WEDE5020 (Web Development)

Live Website: https://st10514675.github.io/WEDE5020_Part-1/
GitHub Repository: https://github.com/ST10514675/WEDE5020_Part-1

Project Overview
This is a 5-page website I built for Kevin's Cafe, a local coffee shop in Springs. Part 1 used pure HTML5 with no CSS or JavaScript, as instructed. Part 2 added full CSS styling, layout and responsive design. Part 3 adds JavaScript functionality (interactive map, menu search, gallery lightbox, FAQ accordion, validated forms), search engine optimisation, and deployment of the finished site online.

Website Goals and Objectives
- Establish an online presence for Kevin's Cafe so customers can find our menu, location, and contact details easily.
- Provide clear information about our products, prices, and branch locations.
- Allow customers to submit enquiries (catering, bookings) and general contact messages directly through the website.
- Build trust and credibility through customer testimonials and a professional, welcoming design.
- Ensure the site is fully usable on mobile devices, since many customers will browse on their phones.

Key Performance Indicators (KPIs):
- Number of enquiry/contact form submissions received.
- Website visits and time spent on the Menu page.
- Mobile vs desktop visitor ratio (site must perform well on both).

Key Features and Functionality
- 5-page responsive website: Home, About Us, Menu, Enquiries, Contact Us.
- Menu page with featured item cards, supporting item cards, and a live search with category filter and sorting by name or price.
- Interactive map (Leaflet) showing both branches, with popups, directions links and buttons that move the map to each branch.
- Photo gallery with a lightbox viewer (mouse and keyboard controls) and a FAQ accordion on the About page.
- Enquiry form with JavaScript validation that calculates a catering estimate or confirms a table booking.
- Contact form with JavaScript validation that compiles the message into an email ready to send.
- Customer testimonials on the home page.
- Search engine optimisation: unique page titles, meta descriptions and keywords, descriptive image names and alt text, robots.txt and sitemap.xml.

Timeline and Milestones
- Part 1 (Planning and HTML Structure): Organisation research, project proposal, sitemap, file structure, and basic HTML pages completed and submitted.
- Part 2 (CSS Styling and Responsive Design): External stylesheet, typography, layout (Flexbox/Grid), decoration, pseudo-classes, and full responsive design completed and submitted.
- Part 3 (Functionality and SEO): JavaScript interactivity, form validation, SEO optimisation and deployment completed.

Project Files
All the HTML files are in the main project folder. Images are in an "images" subfolder, the stylesheet is in a "css" subfolder and the JavaScript files are in a "js" subfolder:

1. index.html - Home page with a welcome message, main features, and customer testimonials.
2. about.html - Cafe story, mission, vision, team, photo gallery with lightbox, and FAQ accordion.
3. products.html - Menu page with searchable menu cards, plus the full menu sections with prices.
4. enquiry.html - Validated enquiry form for questions, table reservations, catering requests and feedback.
5. contact.html - Contact details, interactive map of both branches, and a validated contact form.
6. README.md - Documentation, changelog and references.
7. robots.txt - Tells search engine crawlers they may visit all pages and where the sitemap is.
8. sitemap.xml - List of all pages to help search engines understand the site structure.
9. css/style.css - External stylesheet controlling all styling and responsive design.
10. js/enquiry.js - Enquiry form validation and response.
11. js/contact.js - Contact form validation and email builder.
12. js/map.js - Interactive Leaflet map with both branch locations.
13. js/menu-search.js - Menu search, category filter and sorting.
14. js/about.js - Gallery lightbox and FAQ accordion.
15. images/ - Subfolder containing all JPEG pictures used on the site.
16. documents/ - Subfolder containing the project proposal.

Page Details

 Home Page (index.html): Welcomes visitors, gives a short overview of what we offer, shows a picture of the shop counter, includes customer testimonials, and has a link to the menu.

 About Us (about.html): Explains how the cafe started in Springs, our mission and vision, who works behind the counter, a photo gallery where each photo opens in a lightbox viewer, and a FAQ accordion.

 Menu (products.html): A "Find Your Favourite" section where visitors can search all 13 menu items, filter by category and sort by name or price. Below it, the full menu is shown under Hot Beverages, Bakery and Breakfast Combos with pictures and prices.

 Enquiries (enquiry.html): Form with name, email, phone, type of enquiry, number of guests, date and message. After validation it shows a response: a catering estimate, a table booking confirmation, or a thank-you message.

 Contact Us (contact.html): Phone number, email address, both branch addresses, an interactive map, and a contact form that builds an email to the cafe.

Part 3 Details

Functionality
- Interactive map: Leaflet with OpenStreetMap tiles, a marker for each branch, popups with the address and a directions link, and buttons to show either branch or both.
- Dynamic content and search: the menu items are stored in a JavaScript list and displayed as cards. The search box, category drop-down and sort drop-down update the cards instantly, with a count of results and a message when nothing matches.
- Gallery lightbox: clicking a gallery photo opens it large. Arrow buttons and the left/right keys move between photos, and the Escape key, close button or a click outside closes it.
- FAQ accordion: five questions; clicking one opens its answer and closes the others.

Forms and validation
- Both forms use JavaScript validation with a message under each field and a red border on fields with a problem. The cursor moves to the first field with an error.
- Rules include: names must use letters only; emails must have a valid format; South African phone numbers (0 or +27 followed by 9 digits); messages must be 10 to 500 characters; dates cannot be in the past.
- Enquiry form: catering requires at least 10 guests and is estimated at R85 per guest; table bookings are for up to 12 guests; feedback and general questions get a thank-you response.
- Contact form: the validated details are compiled into an email addressed to dlaminikevin79@gmail.com. The visitor sees a preview and clicks "Open in my email app" to send it.

Search engine optimisation and performance
- Every page has a unique title tag, meta description and meta keywords.
- Headings are used in order (h1, h2, h3) and pages are linked to each other through the navigation menu.
- Image files have descriptive lowercase names (for example cappuccino-latte-art.jpg) and every image has alt text.
- robots.txt and sitemap.xml are included in the root folder.
- The site is mobile friendly (responsive design from Part 2) and gallery images use lazy loading to help page speed.
- Security: text typed by visitors is displayed using textContent (never as HTML) and external links use rel="noopener". The deployed site is served over HTTPS.
- Off-page SEO plan (not carried out for this assignment): share the site on the cafe's social media and list the branches on Google Business Profile for local search.

Deployment
The website is deployed on GitHub Pages from the main branch of this repository: https://st10514675.github.io/WEDE5020_Part-1/

Sitemap

Home (index.html)
 ├── About Us (about.html)
 ├── Menu (products.html)
 ├── Enquiries (enquiry.html)
 └── Contact Us (contact.html)

All pages are linked to one another through a consistent navigation menu in the header, so every page can be reached from every other page.

Changelog

Part 1:
- Initial HTML structure built for all 5 pages.
- File and folder structure created (root HTML files + images subfolder).
- Content researched and added for each page.
- Navigation menu linked across all pages.

Part 2 (14-15 September 2026):
- Reviewed Part 1 submission; no lecturer feedback was provided (98% received, no comments left). Self-initiated content improvements made instead:
  - Added a "What Our Customers Say" testimonials section to index.html with 3 original customer reviews.
  - Added 3 new supporting images to products.html to illustrate the "Other Drinks," "Other Baked Items," and "Other Light Meals" lists.
  - Fixed a minor typo in enquiry.html footer ("Kevins Cafe" corrected to "Kevin's Cafe").
- Created external stylesheet (css/style.css) and linked it to all 5 HTML pages.
- Implemented base/reset styles and CSS custom properties for consistent branding (colours, fonts, spacing).
- Styled typography across all pages using Poppins (headings) and Inter (body text).
- Built page layout using Flexbox (header/nav) and CSS Grid (menu item cards on products.html), including a distinct secondary card style for supplementary menu items.
- Added visual/decoration styling: card shadows, button styling, form input styling, header/footer colour treatments.
- Implemented pseudo-classes (:hover, :focus, :active) for navigation links, buttons, and form fields.
- Implemented responsive design with media queries at 768px and 480px breakpoints, covering layout, typography, navigation, and image adjustments for tablet and mobile.
- Fixed contact.html Google Map iframe to be responsive by removing fixed width/height attributes and controlling sizing via CSS instead.

Part 3 (October 2026):
- Reviewed Part 2 feedback (98%, "Excellent work!!"). No specific changes were requested, so no corrections were needed; improvements below were self-initiated.
- SEO: replaced the page titles with unique, descriptive titles and added a unique meta description and meta keywords to all 5 pages.
- SEO: renamed images that had spaces in their names to descriptive lowercase names (for example "coffee logo.jpg" became kevins-cafe-logo.jpg) and updated all references. Improved alt text on the images.
- Enquiry form: added guests and date fields, JavaScript validation with error messages, and a response (catering estimate, booking confirmation or thank-you) in js/enquiry.js.
- Contact form: added phone and message type fields, JavaScript validation, and an email builder with a preview and a send button in js/contact.js.
- Replaced the Google Maps embed on contact.html with an interactive Leaflet map showing both branches, with popups and buttons (js/map.js).
- Added a "Find Your Favourite" search, category filter and sort section to products.html (js/menu-search.js).
- Added a photo gallery with a lightbox and a FAQ accordion to about.html (js/about.js).
- Added robots.txt and sitemap.xml.
- Added styles for form errors, the map, menu search, lightbox and accordion to css/style.css.
- Fixed a small typo in the about.html footer.
- Deployed the website on GitHub Pages.

Image References (IIE Harvard Format)

1. Unsplash. 2023. White ceramic cup with coffee latte on saucer. Available at: <https://unsplash.com/photos/a-cup-of-coffee-sitting-on-top-of-a-wooden-table-capuccino> [Accessed 12 August 2026].
2. Unsplash. 2022. Coffee shop interior display counter. Available at: <https://unsplash.com/photos/a-display-case-filled-with-lots-of-cakes-and-pastries-interior> [Accessed 12 August 2026].
3. Pexels. 2021. Two baristas behind coffee shop counter. Available at: <https://www.pexels.com/photo/man-and-woman-standing-behind-the-counter-about-us> [Accessed 12 August 2026].
4. Pexels. 2023. Assorted iced cupcakes display. Available at: <https://www.pexels.com/photo/close-up-photo-of-cupcakes-cupcakes> [Accessed 12 August 2026].
5. Unsplash. 2024. Fresh croissants served with hot coffee cup. Available at: <https://unsplash.com/photos/croissant-and-coffee-breakfast-meal> [Accessed 12 August 2026].
6. Unsplash. 2023. Paper coffee cup with takeaway logo. Available at: <https://unsplash.com/photos/white-and-black-disposable-cup-coffee-logo> [Accessed 12 August 2026].
7. Kobzar, V. n.d. Delicious Sandwiches on Plate. Pexels.com. Available at: <https://www.pexels.com/photo/delicious-sandwiches-on-plate-17322390/> [Accessed 14 September 2026].
8. Shakalova, S. n.d. Assorted French Pastries on Display at Bakery. Pexels.com. Available at: <https://www.pexels.com/photo/assorted-french-pastries-on-display-at-bakery-31101247/> [Accessed 14 September 2026].
9. Pexels. n.d. Hot Drinks Flat Lay [Search Results]. Pexels.com. Available at: <https://www.pexels.com/search/?q=hot%20drinks%20flat%20lay> [Accessed 14 September 2026].

Code and Library References

10. Agafonkin, V. 2023. Leaflet: an open-source JavaScript library for interactive maps (version 1.9.4). Available at: <https://leafletjs.com> [Accessed 29 October 2026].
11. OpenStreetMap contributors. n.d. OpenStreetMap. Available at: <https://www.openstreetmap.org> [Accessed 29 October 2026].
12. The Independent Institute of Education. 2026. Form validation example (HTML and JavaScript). WEDE5020 class material. [Accessed 29 October 2026].