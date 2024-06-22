### MERN Filter By Size App

### Brief description of what the project does
This project is a simple e-commerce application that allows users to filter products by size (e.g., X, XL, XXL, etc.). It is built using the MERN stack (MongoDB, Express, React, Node.js).

### Table of Contents
- Installation
- Usage
- Folder Structure
- Technologies Used
- API Endpoints
- Contributing
- License

### Installation
- bash
- Copy code
- git clone `<git remote add origin https://github.com/Yashop181/Filter-Size-Mern.git>`
- cd project-directory
- npm install
- npm start
- Access the application:
- Open http://localhost:3000 in your browser.

### Usage
- Provide instructions on how to use the application. Include details about how to navigate through different pages, add products, and filter products by size.

### Folder Structure
Briefly describe the folder structure of your project.

project-directory/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── productController.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── uploads/
│   ├── .gitignore
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.js
│   │   │   ├── AddProduct.js
│   │   │   └── ProductDisplay.js
│   │   ├── styles/
│   │   │   ├── AddProduct.css
│   │   │   ├── ProductDisplay.css
│   │   │   └── Layout.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│
├── .gitignore
├── package.json
├── LICENSE
└── README.md

### Technologies Used
List the technologies/frameworks/libraries used in your project.

# Frontend

- React
- React Router (for routing)
- CSS (for styling)
- Backend
- Node.js
- Express.js (for RESTful APIs)
- MongoDB (database)
- Mongoose (for MongoDB object modeling)
- HTTP Client
- Axios (for making HTTP requests)

### API Endpoints
List the API endpoints used in your project and describe their purpose.

- Product Endpoints
- POST /api/products: Add a new product.
- GET /api/products: Retrieve all products or filter products by size (e.g., GET /api/products?size=XL).

### Contributing
- Provide instructions for contributing to your project if it's open-source. Include guidelines for pull requests and reporting issues.

### License
- This project is licensed under the MIT License. See the LICENSE file for details.

© Yash Nigam