# ConverseX

### **Project Overview**

ConverseX is a full-stack e-commerce web application focused on shopping for Converse shoes. It features a product listing, detailed product pages, and a cart functionality that allows users to add items to their cart. The application is built using React and Redux on the frontend and Node.js with Express on the backend, utilizing Prisma for database management.

### **Deployed URLs**
- **Frontend:** [Netlify](https://66c40ec034adde9487ce8ec8--lucent-scone-5c8186.netlify.app/)
- **Backend:** [Backend Repo URL](https://github.com/erinyooey/Capstone-Backend)

### **Important Notes**
- The frontend is fully deployed and accessible via the Netlify link above.
- To fully experience the app, the backend must be run locally.

### **Local Setup Instructions**
If you wish to run the project locally:

1. **Clone the repository:**
   git clone https://github.com/erinyooey/E-Commerce.git
2. **Navigate to the project directory:**
   cd [project directory]
3. **Install frontend dependencies**
   npm install
4. **Navigate to the backend directory and install dependencies:**
    cd backend
    npm install
5.	**Set up environment variables:**
	•	Create a .env file in the backend directory with the necessary environment variables, such as database connection strings.

    DATABASE_URL="postgresql://capstone_project_backend_user:4SWgUA2H6vQfc9shKT4Wou8UNK0NFb6g@dpg-cqggdf1u0jms73fm5o80-a.oregon-postgres.render.com/capstone_project_backend"
    WEB_TOKEN="secret1234"
6.	**Run the application locally:**
	•	Start the backend server: npm run dev

7: **Start the frontend:**
    npm run dev
    Command Click the localhost link to view the application in your browser

### **Features**

- **Product Listing:** Browse a variety of Converse shoes with images, descriptions, prices, and availability status.
- **Product Detail Page:** View detailed information about each shoe.
- **Search Functionality:** Filter and search products by name.

### **Technologies Used**

- **Frontend:** React, Redux Toolkit, CSS Modules, Axios
- **Backend:** Node.js, Express, Prisma, PostgreSQL
- **Deployment:** Netlify (Frontend), Render(Backend)
