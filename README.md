# Cibersecurity Summit 2025 site

<image style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" src="src/assets/images/miniatura.png" alt="Turismo Asturias Rutas al paraiso landing page">

## Link

https://cibersecuritysummit.netlify.app

## Descripción

Prototipo web dedicado a un evento orientado a la seguridad informática y otras actividades. Se utiliza Atomic CSS y Tailwind para la página de inicio y listado de ponentes. En el resto del sitio, se utilizan nuevas características de CSS moderno mediante SCSS, metodologías BEM y Stylelint de control.

**Autor:** Omar Hevia Arbana
**Fecha:** Enero 2025

---

# Cibersecurity Summit 2025 site

## Description

Web prototype dedicated to an event focused on cybersecurity and other activities. Atomic CSS and Tailwind are used for the homepage and speaker listing. In the rest of the site, modern CSS features are implemented using SCSS, BEM methodologies, and Stylelint for control.

**Author:** Omar Hevia Arbana
**Date:** Enero 2025

---

## Requirements

[Node.js](http://nodejs.org/) >= 18.x

## Getting started

Clone this repository with `git clone`, or download a .zip file using the top right green button.

Using the Terminal, navigate to the project folder and run `npm install`.

## Features

- Uses [Parcel v2](https://parceljs.org) module bundler.
- NPM scripts for fast development and production build (see Commands below).

### Stylesheets

- [Sass/SCSS](https://sass-lang.com) to CSS compilation (`@parcel/transformer-sass`).
- Transpilation of modern CSS synthax to support older bvrowsers, based on `browserslist`, including vendor prefixing and synthax lowering, with [PostCSS](https://postcss.org/) (`@parcel/transformer-postcss`).
- Minification and optimization of CSS files on production builds with [`lightningcss`](https://github.com/parcel-bundler/lightningcss) (`@parcel/optimizer-css`).

### HTML

- Minification and optimization of CSS files on production builds [`htmlnano`](https://github.com/posthtml/htmlnano) (`@parcel/optimizer-htmlnano`).
- [PostHTML](https://github.com/posthtml/posthtml) (`@parcel/transformer-posthtml`) features:
  - Include partial HTML files with [`posthtml-include`](https://github.com/posthtml/posthtml-include).

### Scripts

- Transpilation of modern JavaScript synthax to support older browsers, based on `browserslist`, with with [Babel](https://babeljs.io/) (`@parcel/transformer-babel`).
- Minification and optimization of JS code with [SWC](https://swc.rs/) (`@parcel/optimizer-swc`).

### Images

- Image transformation with [`sharp`](https://sharp.pixelplumbing.com/) ([`@parcel/transformer-image`](https://parceljs.org/recipes/image/)).

### Development

- Development server launch and live reloading on file changes.
- Friendly error reporting.

## How to use this boilerplate

Content lives inside the `src/` folder. If you do not want to change the configuration or are unsure about what you are doing, do not edit files outside the `src/` folder.

Always run the following commands during the development stage and for production builds. Please note that it is expected that all projects built with this boilerplate are compiled using `npm run build` before they are published.

### Commands

| Command         | Description                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`   | Runs a local web server for development and opens the browser to display it. Automatically compiles styles and scripts whenever a file in `src/` is changed, and live reloads the browser. This is what _must be run_ on the development stage.                                                                                                                     |
| `npm run build` | Compiles and minifies and optimizes the files in the assets folder. The generated compiled and optimized files are located in the `dist/` folder. This is what _must be run_ before publishing the project. This is also the build command to be run by external deployment services such as Netlify. The publishable files are then located in the `dist/` folder. |
| `npm run clean` | Deletes the current `/dist` folder and cache folders.                                                                                                                                                                                                                                                                                                               |
| `npm run test`  | Displays a success message if everything is working as expected.                                                                                                                                                                                                                                                                                                    |

Are you using this Boilerplate for your projects or for educational purposes? I would love to hear about it!
