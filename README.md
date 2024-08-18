![Screenshot (60)](https://github.com/user-attachments/assets/f0b99785-3848-4f6e-b388-cc70be7571e4)# E-Commerce Shopping Cart Application

This is a simple e-commerce shopping cart application built with [Next.js](https://nextjs.org/) and styled using [Tailwind CSS](https://tailwindcss.com/). The application allows users to browse a list of products, add items to a shopping cart, adjust quantities, remove items, and apply discounts.

## Features

- **Product Listing Page**: Displays a grid of products with images, names, prices, and an "Add to Cart" button.
- **Shopping Cart**: Dedicated cart page where users can manage their selected products.
  - Adjust quantity of items
  - Remove items from the cart
  - See the subtotal, apply discounts, and view the total price
- **Responsive Design**: Optimized for various screen sizes.

## Technical Specifications

- **Frontend Framework**:  ReactJS (Next.js)
- **Styling**: Tailwind CSS
- **Data Source**: Local JSON file or open-source API (configurable)

## Installation and Setup

### 1. Project Setup:
#### 1.1 Install Next.js
`npx create-next-app@latest ecommerce-app`

#### 1.2 Navigate to the project directory:
`cd ecommerce-app`

#### 1.2 Install Dependencies
``npm install tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
``

## Folder Structure
after creation, the project should look like this.
```
ecommerce-app/
  .next/
  node_modules/
  src/
    components/
       Navbar.js       # Navigation bar component
       ProductCard.js  # Component for displaying individual products
       CartItem.js     # Component for displaying items in the cart
    pages/
       index.js        # Home page (product listing)
       cart.js         # Shopping cart page
    public/
       products.json   # Local JSON file with product data
    styles/
      globals.css     # Global styles
  .gitignore          # Git ignore file
   README.md           # Project documentation
   package.json        # Project configuration and dependencies
```


# Usage
+ Browse the product listing page to view available products.
- Click the "Add to Cart" button to add products to your shopping cart.
+ Navigate to the cart page to view, adjust, or remove items.
- Apply discount codes (if available) and see the total price update accordingly.


### Run the development server:
`npm run dev`

### Access the application:
* Open http://localhost:3000 with your browser to see the application.

# Screenshots

Here are some screenshots that demonstrates how the website works:

# 1. Product Listing Page:

Screenshot (1)

![Screenshot (59)](https://github.com/user-attachments/assets/262c0dbe-0232-4b3b-b946-9582e3db5044)

Screenshot (2)

![Screenshot (60)](https://github.com/user-attachments/assets/a7c98cc3-7e09-4608-86b3-7c938475a994)

## Mobile View:
Screenshot (3)

![Screenshot (50)](https://github.com/user-attachments/assets/b4d2a3ed-5fc9-4d73-9f8b-f46aebfd7a32) 

# 2. Cart Page:
Screenshot (4)
![Screenshot (56)](https://github.com/user-attachments/assets/7b39388a-872e-4a65-8264-0bbf4870290c) 

Screenshot (5)
![Screenshot (54)](https://github.com/user-attachments/assets/4b693e47-d8d6-452b-8dbc-25a5fb2ee4f4)

Screenshot (6)
![Screenshot (58)](https://github.com/user-attachments/assets/5b1cdb54-e796-4c47-8848-078dcd289712)

## Mobile View:
Screenshot (7)

![Screenshot (52)](https://github.com/user-attachments/assets/1dc63e13-fd85-4c05-ae2f-22b57fd91714)

Screenshot (8)
![Screenshot (53)](https://github.com/user-attachments/assets/9eaea6ff-e81c-4648-9d1a-c302d57da3db)


# Acknowledgements
* ReactJS (Next.js)
+ Tailwind CSS
- Flipkart for design inspiration
