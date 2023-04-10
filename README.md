# Tailwind CSS Boilerplate

This is a reusable Tailwind CSS boilerplate that can be easily integrated into your HTML or React projects. It includes a pre-configured `tailwind.config.js` file and a base `tailwind.css` file.

## Prerequisites

Ensure you have Node.js and npm installed on your system.

## Installation

1. Copy the `tailwind.config.js` and `src/input.css` files from the boilerplate repository into your project folder.

```console
curl -O https://raw.githubusercontent.com/renderedghost/tailwind-boilerplate/main/tailwind.config.js
mkdir -p src && curl -o src/input.css https://raw.githubusercontent.com/renderedghost/tailwind-boilerplate/main/src/input.css
```

2. Install Tailwind CSS and its dependencies:

```console
npm install tailwindcss@latest postcss@latest autoprefixer@latest
```


3. Update the `purge` property in the `tailwind.config.js` file to match your project's file structure:

```javascript
purge: ['./src/**/*.{js,jsx,ts,tsx,vue}', './public/index.html'],
```

> For a React project, you may need to adjust the file extensions to include .jsx and .tsx.

4. Add the build script to your package.json:

```json
"scripts": {
  "build:css": "tailwindcss build src/tailwind.css -o dist/tailwind.css"
}
```

## Usage For HTML projects

1. Run the build script to generate the production-ready CSS file:

```console
npm run build:css
```

2. Include the generated dist/tailwind.css file in your HTML files:

```html
<link rel="stylesheet" href="dist/tailwind.css" />
```

## Usage For HTML projects

1. Run the build script to generate the production-ready CSS file:

```console
npm run build:css
```

2. Import the generated `dist/tailwind.css` file in your `src/index.js` or `src/index.tsx` file:

```js
import './dist/tailwind.css';
```

## Customization

To customize the design system, modify the `tailwind.config.js` file.

Use the extend property to add or override styles without affecting the default styles.

Remember to run the build script 

```console
npm run build:css
```

to regenerate the production-ready CSS file after making changes to the configuration.

## License

This boilerplate is available under the [MIT License](https://chat.openai.com/chat/LICENSE).
