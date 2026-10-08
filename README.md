# Andrea Brítez

![Website preview](docs/preview.jpg)

[Live site](https://dra-andrea-britez.vercel.app/)

A website for clinical psychologist Dr. Andrea Brítez. Built with HTML, CSS and JavaScript, using Cormorant Garamond and Jost, warm colors and a portrait-led layout.

## What's here

- Background, specialties, appointments and contact sections.
- Responsive navigation and subtle entrance animations.
- A contact form with native validation that prepares a WhatsApp message. It does not store messages.
- Open Graph metadata and semantic HTML.

## Run locally

The development server needs Node.js. No frontend dependencies are required.

```bash
npm run dev
```

Open the address printed by the server, usually `http://127.0.0.1:4173`.

## Files

```text
index.html             Content and structure
css/styles.css         Components and responsive styles
css/visual-system.css  Colors, typography and variables
js/main.js             Interactions and contact links
scripts/dev-server.js  Local development server
visual/                Design notes
```

Edit copy in `index.html`. Contact links and the portrait URL are configured in `js/main.js`.

To deploy, serve `index.html`, `css/` and `js/` from a static host, keeping their relative paths. No build step is needed.

The preview above is a screenshot of the site running locally.
