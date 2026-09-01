# Mide Soles

Mide Soles is a modern, responsive footwear business website built for a shoe maker and retailer based in Oye-Ekiti, Nigeria.

The website showcases handmade shoes, ready-to-wear footwear and custom-order services. Customers can explore available products and send enquiries directly through WhatsApp.

## Live Website

Add the deployed website link here:

[View Mide Soles](https://your-website-link.vercel.app)

## Features

* Modern and responsive interface
* Mobile navigation menu
* Product catalogue
* Product category filtering
* Handmade and ready-to-wear shoe sections
* Custom shoe ordering process
* WhatsApp product enquiries
* WhatsApp contact form
* Floating WhatsApp button
* Instagram and TikTok links
* About and craftsmanship sections
* Responsive product cards
* Custom SVG favicon
* Mobile, tablet and desktop support

## Built With

* React
* Vite
* Tailwind CSS
* JavaScript
* Lucide React
* Vercel

## Project Structure

```text
soft-soles/
├── public/
│   ├── images/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Products.jsx
│   │   ├── Services.jsx
│   │   └── WhatsAppButton.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Getting Started

### Prerequisites

Install Node.js and npm before running the project.

Check that they are installed:

```bash
node --version
npm --version
```

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/soft-soles.git
```

Enter the project directory:

```bash
cd soft-soles
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL displayed in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

## Customizing the Website

### Product information

Product names, categories, prices and images are stored in:

```text
src/data/products.js
```

Example:

```js
{
  id: 1,
  name: "Classic Leather Loafers",
  category: "Handmade",
  price: "₦25,000",
  image: "/images/shoe-1.jpg",
}
```

### Product images

Place the real product images inside:

```text
public/images/
```

Reference them from the product data using:

```js
image: "/images/shoe-1.jpg"
```

### WhatsApp number

Replace the placeholder WhatsApp number in the relevant components:

```js
const whatsappNumber = "2340000000000";
```

Use the international format without `+`, spaces or hyphens.

Example:

```js
const whatsappNumber = "2348012345678";
```

### Social media links

Replace the placeholder links in the Contact and Footer components:

```js
const instagramLink = "https://instagram.com/your-username";
const tiktokLink = "https://tiktok.com/@your-username";
```

## Deployment

The project can be deployed using Vercel.

1. Push the project to GitHub.
2. Sign in to Vercel.
3. Select **Add New Project**.
4. Import the GitHub repository.
5. Confirm the Vite build settings.
6. Click **Deploy**.

Vercel will automatically build and deploy the website.

## Business Location

Mide Soles
Oye-Ekiti, Ekiti State
Nigeria

## Author

Designed and developed by [Albert Adekanye](https://github.com/AlbertAdekanye).

## License

This project was created for Mide Soles. The design, business content and product assets should not be reused commercially without permission.
