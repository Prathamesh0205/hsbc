API-DRIVEN FINANCIAL DATA AGGREGATOR

DESCRIPTION:
Develop an API that aggregates and normalizes financial data from various sources,
offering a unified interface (dashboard) for accessing and analysing this information.

OBJECTIVE:
Create an API that simplifies access to diverse financial data, enabling developers
to build comprehensive financial applications. The solution should include a
dashboard that visualizes the data through multiple graphs. Dashboard should be
configurable in real time.

OUTCOME:
● An API or set of APIs capable of fetching financial data from the provided
datasets.
● A dashboard that utilizes these APIs to generate and display various graphs.

Table of Contents
1.	Features
2.	Architecture
3.	Tech Stack
4.	Installation
5.	Configuration
6.	Usage
7.	Development



Features

•	Data Retrieval: Seamlessly fetches and integrates data from the backend.
•	Data Analysis: Processes and visualizes data to generate insights.
•	Type Safety: Uses TypeScript for robust type-checking across the application.
•	Database Management: Efficient data handling using MySQL and Prisma ORM.

Architecture

Frontend
•	Next.js: Handles server-side rendering, routing, and static generation.
•	React: Provides a component-based structure for building the user interface.
•	TypeScript: Ensures type safety, reducing runtime errors.
Backend
•	Node.js: Serves as the runtime environment for executing server-side JavaScript.
•	MySQL: Relational database management system used to store and query data.
•	Prisma: ORM used for interacting with the MySQL database in a type-safe manner.
Database
•	MySQL: The data is stored in a MySQL database, with tables and relationships managed through Prisma ORM. Migrations are handled using Prisma's migration tool, ensuring that your database schema stays in sync with your application.
Tech Stack
•	Frontend: Next.js, React, TypeScript
•	Backend: Node.js, Express (optional for custom backend routes)
•	Database: MySQL, Prisma ORM
•	Others: ESLint, Prettier, Jest (for testing), Docker (for containerization)



Installation
Prerequisites
•	Node.js: Make sure you have Node.js installed on your machine.
•	MySQL: Install and set up MySQL on your local environment or use a cloud-based MySQL service.
•	Git: Ensure Git is installed to clone the repository.


Steps
Clone the Repository:
https://github.com/Prathamesh0205/hsbc.git
Install Dependencies:
Run the following command to install the required npm packages:
npm install
Set Up the Database:
Create a MySQL database on your local machine or a cloud provider.
Configure the connection string in the .env file.
Run Migrations:
Run Prisma migrations to set up your database schema:
npx prisma migrate dev
Start the Development Server:
Start the Next.js development server:
npm run dev
The application will be available at http://localhost:3000.
Configuration
Environment Variables
The application uses environment variables to manage configuration. Create a .env file in the root directory and add the following variables:
env
DATABASE_URL="mysql://user:password@localhost:3306/database_name"
Prisma Configuration
Prisma is configured via the prisma/schema.prisma file. This file defines your data model, the database connection, and migrations.
Next.js Configuration
Next.js can be configured through the next.config.js file for custom server settings, routing, and environment variables.
Usage
Data Retrieval
The application automatically fetches data from the backend on the relevant pages. Ensure that the backend is correctly set up and running.
Data Analysis
The analysis is provided on dedicated pages within the app. Navigate through the UI to access various analytical tools and visualizations.
API Routes
If you have custom API routes, they can be accessed under the /api path in your application. These routes can be used for additional backend logic or data manipulation.
Development
Scripts
•	npm run dev: Start the development server with hot reloading.
•	npm run build: Compile and bundle the application for production.
•	npm run start: Run the compiled application.
•	npm run lint: Lint the codebase with ESLint.
•	npx prisma studio: Launch Prisma Studio for database management.
Code Structure
The codebase is organized as follows:
•	/pages: Contains all the Next.js pages.
•	/components: Reusable React components.
•	/lib: Utility functions and helpers.
•	/prisma: Prisma schema and migration files.
•	/public: Static files like images and fonts.
•	/styles: CSS and styling files.
Linting and Formatting
ESLint and Prettier are used to ensure code quality and consistent formatting. Run npm run lint to check for linting errors.

Normalization:

Normalization is a process used in database design to organize data efficiently by reducing redundancy and ensuring data integrity. It involves dividing a database into tables and defining relationships between them according to specific rules known as "normal forms."
The primary goals of normalization are:
1.	Eliminate Redundancy: By breaking down large tables into smaller, related tables, normalization reduces the duplication of data, which minimizes the chances of inconsistencies.
2.	Ensure Data Integrity: Normalization enforces data dependencies through relationships and constraints, ensuring that data is accurate and remains consistent across the database.
3.	Simplify Queries: A well-normalized database simplifies complex queries, making data retrieval more efficient and reducing the likelihood of errors.
   
 API-DRIVEN FINANCIAL DATA AGGREGATOR

DESCRIPTION:
Develop an API that aggregates and normalizes financial data from various sources,
offering a unified interface (dashboard) for accessing and analysing this information.

OBJECTIVE:
Create an API that simplifies access to diverse financial data, enabling developers
to build comprehensive financial applications. The solution should include a
dashboard that visualizes the data through multiple graphs. Dashboard should be
configurable in real time.

OUTCOME:
● An API or set of APIs capable of fetching financial data from the provided
datasets.
● A dashboard that utilizes these APIs to generate and display various graphs.

Table of Contents
1.	Features
2.	Architecture
3.	Tech Stack
4.	Installation
5.	Configuration
6.	Usage
7.	Development



Features

•	Data Retrieval: Seamlessly fetches and integrates data from the backend.
•	Data Analysis: Processes and visualizes data to generate insights.
•	Type Safety: Uses TypeScript for robust type-checking across the application.
•	Database Management: Efficient data handling using MySQL and Prisma ORM.

Architecture

Frontend
•	Next.js: Handles server-side rendering, routing, and static generation.
•	React: Provides a component-based structure for building the user interface.
•	TypeScript: Ensures type safety, reducing runtime errors.
Backend
•	Node.js: Serves as the runtime environment for executing server-side JavaScript.
•	MySQL: Relational database management system used to store and query data.
•	Prisma: ORM used for interacting with the MySQL database in a type-safe manner.
Database
•	MySQL: The data is stored in a MySQL database, with tables and relationships managed through Prisma ORM. Migrations are handled using Prisma's migration tool, ensuring that your database schema stays in sync with your application.
Tech Stack
•	Frontend: Next.js, React, TypeScript
•	Backend: Node.js, Express (optional for custom backend routes)
•	Database: MySQL, Prisma ORM
•	Others: ESLint, Prettier, Jest (for testing), Docker (for containerization)



Installation
Prerequisites
•	Node.js: Make sure you have Node.js installed on your machine.
•	MySQL: Install and set up MySQL on your local environment or use a cloud-based MySQL service.
•	Git: Ensure Git is installed to clone the repository.


Steps
Clone the Repository:
https://github.com/Prathamesh0205/hsbc.git
Install Dependencies:
Run the following command to install the required npm packages:
npm install
Set Up the Database:
Create a MySQL database on your local machine or a cloud provider.
Configure the connection string in the .env file.
Run Migrations:
Run Prisma migrations to set up your database schema:
npx prisma migrate dev
Start the Development Server:
Start the Next.js development server:
npm run dev
The application will be available at http://localhost:3000.
Configuration
Environment Variables
The application uses environment variables to manage configuration. Create a .env file in the root directory and add the following variables:
env
DATABASE_URL="mysql://user:password@localhost:3306/database_name"
Prisma Configuration
Prisma is configured via the prisma/schema.prisma file. This file defines your data model, the database connection, and migrations.
Next.js Configuration
Next.js can be configured through the next.config.js file for custom server settings, routing, and environment variables.
Usage
Data Retrieval
The application automatically fetches data from the backend on the relevant pages. Ensure that the backend is correctly set up and running.
Data Analysis
The analysis is provided on dedicated pages within the app. Navigate through the UI to access various analytical tools and visualizations.
API Routes
If you have custom API routes, they can be accessed under the /api path in your application. These routes can be used for additional backend logic or data manipulation.
Development
Scripts
•	npm run dev: Start the development server with hot reloading.
•	npm run build: Compile and bundle the application for production.
•	npm run start: Run the compiled application.
•	npm run lint: Lint the codebase with ESLint.
•	npx prisma studio: Launch Prisma Studio for database management.
Code Structure
The codebase is organized as follows:
•	/pages: Contains all the Next.js pages.
•	/components: Reusable React components.
•	/lib: Utility functions and helpers.
•	/prisma: Prisma schema and migration files.
•	/public: Static files like images and fonts.
•	/styles: CSS and styling files.
Linting and Formatting
ESLint and Prettier are used to ensure code quality and consistent formatting. Run npm run lint to check for linting errors.

Normalization:

Normalization is a process used in database design to organize data efficiently by reducing redundancy and ensuring data integrity. It involves dividing a database into tables and defining relationships between them according to specific rules known as "normal forms."
The primary goals of normalization are:
1.	Eliminate Redundancy: By breaking down large tables into smaller, related tables, normalization reduces the duplication of data, which minimizes the chances of inconsistencies.
2.	Ensure Data Integrity: Normalization enforces data dependencies through relationships and constraints, ensuring that data is accurate and remains consistent across the database.
3.	Simplify Queries: A well-normalized database simplifies complex queries, making data retrieval more efficient and reducing the likelihood of errors.
 

![image](https://github.com/user-attachments/assets/a9c7d964-01db-4521-a815-7f397dc85e82)

Graphical Analysis: 

 ![image](https://github.com/user-attachments/assets/7d3510b6-200e-408f-8478-90c7a7c924a8)
 ![image](https://github.com/user-attachments/assets/c48c0017-0e3f-4468-abab-39e55453fb62)
Authentication:

![image](https://github.com/user-attachments/assets/a58fe349-8e72-4859-a593-a021391e004f)

