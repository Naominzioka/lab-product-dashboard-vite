## Product Dashboard Project


## About My Project

I created a product dashboard using **React** to show how a simple store inventory works. It takes a list of products and displays them on the screen in an organized way. The main goal of this project was to practice how data moves between different parts of a React app.

## What it Does

* **Shows Products**: Each product displays its name, price, and whether it is in stock.
* **Filter Buttons**: I added buttons so you can view all items, only the items in stock, or only the items that are sold out.
* **Out of Stock Styling**: If an item is out of stock, the card looks different (it gets a red border) so the user can see the status easily.
* **Remove Button**: Every product has a button that deletes it from the dashboard. When you click it, the list updates immediately.

## How I Built It

* **React State**: I used `useState` to keep track of the product list and which filter is active.
* **Props**: I learned how to pass data from the main `App` component down to the `ProductList` and then into the `ProductCard`.
* **Lifting State Up**: To make the "Remove" button work, I wrote a function in the parent component and passed it down so the child component could call it.
* **Material UI**: I used the **Grid system** to make sure the cards stay in a nice row and look good on different screen sizes.
* **Conditional Logic**: I used ternary operators (`? :`) to dynamically change styles and text based on whether a product is in stock or not.
* **CSS Modules**: I used a `.module.css` file to style the cards and used logic to add a special `outOfStockClass` when needed.

## Components

* **App.js**: This is where the main logic of the app lives and where the product data is stored.
* **ProductList.js**: This component takes the list and maps it into a grid of items.
* **ProductCard.js**: This is the individual box for each product that holds the info and the "Remove" button.

## To run this project

1. **Clone the project** or download the files.
2. Open your terminal in your project folder 
3. run `npm install` to install dependencies

4. Run `npm test` to make sure everything is working correctly.

5. Run `npm run dev` to start the app in your browser.
6. Copy the link provided .(usually http://localhost:5173/)
