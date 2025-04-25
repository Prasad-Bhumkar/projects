# Indicab Tourism Website Template

## Overview
Indicab is a responsive tourism website template designed for travel agencies. It features interactive galleries, booking forms, and a modern layout.

## Features
- Fully responsive design
- Interactive image gallery using Owl Carousel
- Booking form with validation
- SEO-friendly structure

## Current Project Status and Planned Improvements
The project has been analyzed for UI components, UX issues, and performance optimizations. Key areas identified for improvement include accessibility enhancements, performance optimization, SEO improvements, UI/UX refinements, and code quality improvements. Planned features include user login/register functionality, real booking integration, multi-language support, and analytics integration.

## Setup Instructions
1. Clone or download the repository.
2. Open the project folder in your editor.
3. Launch `index.html` in your browser.

## Folder Structure
```
Indicab/
|-- index.html
|-- css/
|   |-- style.css
|-- scss/
|   |-- main.scss
|-- js/
|   |-- main.js
|-- img/
|-- lib/
|   |-- owlcarousel/
|-- README.md
|-- LICENSE.txt
```

## Image Compression
To compress images, use the following commands:
```
for %i in (img\*.jpg img\*.png) do magick mogrify -path img\compressed -quality 85 %i
magick mogrify -path img\compressed -quality 85 img\*.jpg img\*.png
```
|-- LICENSE.txt
