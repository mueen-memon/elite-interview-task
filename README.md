# Elite - Interview Task

This is a web application for managing and starring products. It allows users to view and star products, and it also displays starred products.

### Prerequisites

- Node.js and npm (Node Package Manager) installed.
- Prisma CLI installed globally (`npm install -g prisma`).
- Planer Scale is used for the MySql database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/elite-interview-task.git
   ```

1. Navigate to the project directory:

   - cd elite-task

1. Install dependencies for the backend and frontend:

   - cd backend
   - npm install or yarn
   - cd ../frontend
   - npm install or yarn

1. Set up environment variables:

   - For this test project I have added .env to repo with database-url usually this needs to be in git ignore.

1. Start the backend and frontend:

   In the backend directory:

   - `npm run dev or yarn dev`
     In the frontend directory:
   - `npm run dev or yarn dev`

The backend will run on http://localhost:3001/, and the frontend will run on http://localhost:5173/.

5. Usage - Access the web application by opening http://localhost:3001 in your web browser. - View and star products on the main page.
   Click on a product to view its details.
   Star a product by clicking on the star icon and providing your name and email.

6. Project Structure
   backend/: Node.js backend using Express and Prisma for database interaction.
   frontend/: React frontend for the web application.

7. Technologies Used
   Backend: Node.js, Express.js, Prisma, PostgreSQL.
   Frontend: React, Axios.
   Styling: Tailwind CSS.
   Routing: React Router DOM.
   Modal: React Modal.
