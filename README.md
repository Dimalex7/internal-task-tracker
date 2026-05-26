# Internal Task Tracker

This is a full-stack task management application developed for the Deloitte technical assessment. It consists of a Python FastAPI backend and a React frontend, fully containerized using Docker.

## Tech Stack

- Backend: FastAPI, SQLAlchemy, Pydantic, SQLite
- Frontend: React, Vite, Plain CSS
- Infrastructure: Docker, Docker Compose

### Architectural Decisions
FastAPI was selected for the backend due to its high performance, automatic OpenAPI documentation, and built-in data validation using Pydantic. SQLite was used as the database to meet the requirement for a local, zero-configuration data store.

The frontend is built with React and Vite to ensure a fast development environment and efficient build toolchain. Styling is handled via raw CSS without external frameworks (like Bootstrap or Tailwind) to keep the interface minimal, lightweight, and focused on core CSS layout principles.

## Getting Started

The easiest way to run the entire application is using Docker Compose.

### Prerequisites
Make sure you have Docker Desktop installed and running on your machine.

### Running with Docker

1. Open a terminal in the root directory of the project.
2. Run the following command to build and start the containers:
   docker compose up --build
3. Once the setup is complete, access the application via your browser:

    Frontend UI: http://localhost:5173

    Backend Swagger Docs: http://localhost:8000/docs

    To stop the application, press Ctrl + C in the terminal and run:
    docker compose down

#### Running Locally (Without Docker)
If you prefer to run the components manually, follow these steps:
Backend Setup
1. Navigate to the backend folder:
    cd backend
2. Create and activate a virtual environment:
    python -m venv venv
    On Windows:
    venv\Scripts\activate
    On macOS/Linux:
    source venv/bin/activate
3. Install dependencies and start the server:
    pip install -r requirements.txt
    uvicorn main:app --reload

Frontend Setup
1. Open a new terminal and navigate to the frontend folder:
    cd frontend
2. Install dependencies and start the development server:
    npm install
    npm run dev
3. Access the UI at http://localhost:5173

##### Features
1. Create tasks with a Title, Description, and Status.
2. View all tasks in a structured list.
3. Dynamic status tracking with badges (Open, In Progress, Completed).
4. Data persistence via local SQLite storage.