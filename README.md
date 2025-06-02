
Built by https://www.blackbox.ai

---

# CareX Dashboard

## Project Overview
CareX is an interactive application designed to provide a user-friendly dashboard for managing student data, performance analytics, and educational resources. It features a clean UI built with Tailwind CSS for styling and integrates with a backend powered by Express.js for RESTful API capabilities. The dashboard helps educators track student information, performance metrics, and other essential data efficiently.

## Installation

To set up the CareX Dashboard locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/carex-dashboard.git
   cd carex-dashboard
   ```

2. **Install dependencies:**
   - For the backend, navigate to the project folder and run:
   ```bash
   npm install
   ```
   - Ensure you have Node.js (version 16 or higher) installed, along with `nodemon` for development.

3. **Create the SQLite database:**
   The application initializes the SQLite database automatically upon running.

4. **Start the server:**
   For development mode, use:
   ```bash
   npm run dev
   ```
   Or for production mode:
   ```bash
   npm start
   ```

5. **Access the application:**
   You can view the application by opening a web browser and navigating to:
   ```
   http://localhost:3001
   ```

## Usage

Once the server is running, you can access the CareX Dashboard. It features various components:

- **Sidebar Navigation:** Provides links to different sections such as Dashboard, Reports, Scheduling, AI Analysis, and Settings.
- **Stats Cards:** Displays key metrics such as Active Students and New Enrollments.
- **Performance Chart:** Visual representation of student performance over time using Chart.js.
- **Functionalities List:** Showcases the available features of the application.

## Features

- Integrated Automation
- BrainX AI for Advanced Analytics
- Cloud Integration
- Detailed Performance Analysis
- Digital Attendance 
- AI Encryption
- Timetable Generator
- Automated Workflows
- Parent Portal
- Internal Chat
- Teacher Scoring System

## Dependencies

The project relies on several packages, as detailed in the `package.json`:

- **express:** ^4.18.2 - web framework for Node.js
- **sqlite3:** ^5.1.6 - SQLite client for database interaction
- **cors:** ^2.8.5 - middleware to enable CORS
- **body-parser:** ^1.20.2 - middleware to parse incoming request bodies
- **nodemon:** ^2.0.22 (devDependency) - tool that helps develop Node.js-based applications by automatically restarting the server on code changes

## Project Structure

The project consists of the following files and folders:

```
carex-dashboard/
│
├── index.html          # Main HTML file rendering the dashboard layout
├── App.jsx             # Main React application component
├── package.json        # Node.js project manifest detailing dependencies and scripts
└── server.js           # Backend server utilizing Express.js to handle API requests
```

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Express.js](https://expressjs.com/) for backend server implementation
- [SQLite](https://www.sqlite.org/) for lightweight database management
- [Chart.js](https://www.chartjs.org/) for data visualization

For any issues or further assistance, feel free to reach out or open an issue in the repository.