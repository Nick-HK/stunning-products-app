## Overview
A sample web app for managing products. Touch with Python and React(MUI).

It provides a backend API built with Flask, a frontend user interface built with React.js and Material UI, and utilizes a MySQL database for data storage.

### Prerequisites

1.  Docker
2.  Docker Compose
3.  An internet connection to access the Docker public registry for image pulling.


### Instructions
Follow these steps to set up and run the project:

1. Clone this project to your desired path.
2. Open a terminal or command prompt and navigate to the project's directory.
3. Run the following command to bring up the project:
    `docker-compose up -d`
3. Wait for up to a minute for the database setup to complete.
4. Once the setup is complete, you can access the project by opening your web browser and navigating to http://localhost:3000.


### Software Version
The project uses the following software versions:

- Python 3.5
- NPM 9.5.1
- MySQL 8.0.33


### Frameworks
The project utilizes the following frameworks:

#### Backend
- Flask 2.3.2

#### Frontend
- React.js (18.2.0)
- Material UI (5.13.7)


### Testing

#### Frontend
The frontend of the project is tested using @testing-library/react, which is a popular testing library for React applications. It provides a set of utility functions to simulate user interactions and assert the expected behavior of components.

To run the frontend tests, follow these steps:
1. Ensure that the project dependencies are installed by running npm install in the frontend directory.
2. Open a terminal or command prompt and navigate to the frontend directory.
3. Run the following command to execute the tests:
    `npm test`

#### Backend
The backend of the project is tested using functional tests that cover all the routes implemented in the Flask application. These tests are designed to verify the functionality of the API endpoints and ensure that they handle different scenarios correctly.

To run the backend tests, follow these steps:
1. Ensure that the project dependencies are installed by running pip install -r requirements.txt in the project's root directory.
2. Change the database connection string to your developement database or expose ports from the dockerized mysql database
3. Open a terminal or command prompt and navigate to the project's root directory.
4. Run the following command to execute the tests:
    `python -m unittest products/test_routes.py`

### Assumptions
The following assumptions were made during the development of this project:

1. The React project has been built for production and deployed into the Dockerized NGINX. This ensures that the frontend application is optimized and ready for deployment in a production environment using NGINX as the web server.

2. No authorization/authentication is required, as mentioned in the instructions. The project assumes that there are no user authentication or authorization requirements, and anyone can access the application and perform CRUD operations on the products.

3. A unique key column uid has been created in the database table for indexing and identifying each product. This column serves as a unique identifier for each product record in the database, enabling efficient indexing and retrieval of specific products.

4. After successfully adding, updating, or removing a product, the user will be redirected to the product listings page. This ensures a smooth user experience by providing immediate feedback and allowing users to see the updated product list after performing any modifications.

5. The form's color input is using a default autocomplete list, but users can define their own colors. The color input field in the form provides a dropdown with a predefined list of colors for autocomplete suggestions. However, users have the flexibility to enter their own custom color values if they are not available in the predefined list.

6. A sample row is being added for better illustration. The project includes a sample row in the database table to provide a visual representation and better illustrate the structure and functionality of the application. This sample row can be modified or removed as needed when adding actual product data.


### Additional Information

#### API Details
The following table provides details about the available API endpoints:

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/api/products`                          | Retrieve all products.                   |
| `POST`   | `/api/product`                           | Create a new product.                    |
| `GET`    | `/api/product/{id}`                      | Retrieve product with specific id.       |
| `PUT`    | `/api/product/{id}`                      | Update product with specific id.         |
| `DELETE` | `/api/product/{id}`                      | Delete product with specific id.         |

#### Database schema
The project uses a MySQL database with the following table and columns:

`Table`

| `Name`      | `Comment`                       | `Character Set` | `Collation`        | `Engine` |
| ----------- | ------------------------------- | --------------- | ------------------ | -------- |
| Products    | Storing all product information | utf8mb4         | utf8mb4_0900_ai_ci | InnoDB   |

`Primary Key`

| `Columns`    |
| ------------ |
| uid          |

`Indexes`

| `Columns`    |
| ------------ |
| uid          |

`Columns`

| `Name`        | `Type`             | `Nullable` | `Default`           | `Comment`                    |
| ------------- | ------------------ | ---------- | ------------------- | ---------------------------- |
| uid           | int auto_increment | `No`       |                     | Product Unique ID            |
| name          | mediumtext         | `Yes`      |                     | Product Name                 |
| ID            | int                | `Yes`      |                     | Product ID (user-defined)    |
| description   | longtext           | `Yes`      |                     | Product Description          |
| colour        | mediumtext         | `Yes`      |                     | Product Colour               |
| size          | int                | `Yes`      |                     | Product Size                 |
