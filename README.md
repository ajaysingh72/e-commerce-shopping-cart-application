# E-Commerce Shopping Cart Application

This is a simple e-commerce shopping cart application built with [Next.js](https://nextjs.org/) and styled using [Tailwind CSS](https://tailwindcss.com/). The application allows users to browse a list of products, add items to a shopping cart, adjust quantities, remove items, and apply discounts.

## Features

- **Product Listing Page**: Displays a grid of products with images, names, prices, and an "Add to Cart" button.
- **Shopping Cart**: Dedicated cart page where users can manage their selected products.
  - Adjust quantity of items
  - Remove items from the cart
  - See the subtotal, apply discounts, and view the total price
- **Responsive Design**: Optimized for various screen sizes.

## Technical Specifications

- **Frontend Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **Data Source**: Local JSON file or open-source API (configurable)

## Installation and Setup

### 1. Project Setup:
#### 1.1 Install Next.js
'npx create-next-app@latest ecommerce-app'

#### 1.2 Navigate to the project directory:
'cd ecommerce-app'

#### 1.2 Install Dependencies
'npm install tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
'

## Folder Structure
after creation, the project should look like this.

'''
ecommerce-app
├── components
│   ├── Navbar.js       # Navigation bar component
│   ├── ProductCard.js  # Component for displaying individual products
│   ├── CartItem.js     # Component for displaying items in the cart
├── pages
│   ├── index.js        # Home page (product listing)
│   ├── cart.js         # Shopping cart page
├── public
│   ├── products.json   # Local JSON file with product data
├── styles
│   ├── globals.css     # Global styles
├── .gitignore          # Git ignore file
├── README.md           # Project documentation
└── package.json        # Project configuration and dependencies
'''
