# FDEXUN:TOUR

FDEXUN:TOUR is a responsive travel and tourism website project by Rajput Parth, built with HTML, CSS, and JavaScript. It brings destination discovery, travel packages, and trip-planning forms together in one place.

## Features

- Responsive homepage with destination highlights and travel inspiration
- Package browsing with filters for destination, budget, duration, and travel type
- Destination guides for Kashmir, Istanbul, Paris, Bali, Dubai, Geneva, Port Blair, and Rome
- Booking and account pages with clear frontend-demo behavior; no reservation, payment, or secure authentication backend is configured
- Contact form with email delivery through FormSubmit and a pre-filled WhatsApp option

## Pages

- `index.html` - Homepage
- `packages.html` - Search and filter travel packages
- `package.html` - Package details
- `locations.html` - Destination guides
- `booking.html` - Booking form
- `about.html` and `info.html` - Project and brand information
- `contact.html` - Contact details and inquiry form
- `login.html` and `register.html` - Account interface pages

## Run locally

1. Clone or download this repository.
2. Open the project folder in a code editor.
3. Open `index.html` in a browser, or run it with a local development server such as the VS Code Live Server extension.

This is a static website; no package installation or build step is required. A network connection is needed for externally hosted fonts, icons, images, and contact form delivery.

## Deploy to GitHub Pages

Publish from the repository root on the `main` branch. Include the complete `css/`, `js/`, and `assets/` directories alongside the root HTML files; the pages use relative paths to these folders. Uploading only the `.html` files will leave the pages without styling, scripts, logos, and local images.

## Contact form

The contact form submits inquiries through FormSubmit, configured in `js/main.js`. FormSubmit may require the recipient to verify the email address on first use. The WhatsApp option opens a pre-filled message; the visitor must send it from WhatsApp.

Booking and account pages are frontend demos only. Account records stay in the browser's local storage and are not secure or shared across devices. Do not use real passwords; no booking, payment, or server-side authentication is performed.

## Asset and license note

Some images are loaded from external providers, and local image files may have separate usage terms. Check the rights for each image before redistribution. Any MIT license added to this repository should only cover material for which the repository owner has the rights to grant that license.