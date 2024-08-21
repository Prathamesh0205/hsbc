
# Data Analysis App

This project is a web application that retrieves data from a backend, processes it, and provides detailed analysis. The application is built using Next.js, TypeScript, MySQL, and Prisma.

## Features

- **Data Retrieval:** Fetches all necessary data from the backend.
- **Data Analysis:** Performs comprehensive analysis over the fetched data.
- **TypeScript:** Ensures type safety throughout the application.
- **MySQL & Prisma:** Uses MySQL as the database, with Prisma as the ORM for easy data management.

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/), [React](https://reactjs.org/)
- **Backend:** [Node.js](https://nodejs.org/)
- **Database:** [MySQL](https://www.mysql.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## Installation

### Prerequisites

- Node.js
- MySQL

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
npm install
npx prisma migrate dev
Set up the database:

Create a MySQL database.
Update the DATABASE_URL in the .env file with your MySQL connection string.
The application will be available at http://localhost:3000.

Usage
Data Retrieval:

The app automatically fetches data from the backend when the relevant pages are loaded.
Data Analysis:

Navigate to the analysis page to view insights and analysis on the retrieved data.
Development
Scripts
npm run dev: Starts the development server.
npm run build: Builds the application for production.
npm run start: Runs the built application.
npm run lint: Lints the codebase using ESLint.
npx prisma studio: Launches Prisma Studio to view and edit data in your database.
Environment Variables
The application requires the following environment variables:

DATABASE_URL: MySQL connection string.
