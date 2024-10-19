# Task Management App

## Description

This Task Management App is built using **Next.js** and allows users to create, edit, delete, and manage tasks efficiently. Users can assign priorities to tasks, which helps in sorting and managing them based on importance. The application features a responsive design, ensuring a seamless experience across various devices.

## Features

- **Add Tasks**: Users can add new tasks with titles, descriptions, and priority levels.
- **Edit Tasks**: Users can edit existing tasks to update their information.
- **Delete Tasks**: Users can delete tasks that are no longer needed.
- **Sort Tasks by Priority**: Tasks can be sorted based on their assigned priority levels (High, Medium, Low).
- **Responsive Design**: The app is optimized for both desktop and mobile devices.

## Bonus Features

- **Local Storage**: Task data is persisted in local storage, ensuring that tasks remain available even after the app is refreshed or closed.
- **Search Functionality**: Users can search for tasks by title or description, making it easier to find specific tasks.

## Setup Instructions

To set up the project locally, follow these steps:

**Clone the Repository**:
git clone <repository-url>
cd task-management-app
Install Dependencies: Make sure you have Node.js installed. Then, run:

npm install
Run the Development Server: Start the application using:

npm run dev
The app will be running at http://localhost:3000.

Sorting Tasks by Priority
The tasks in the application are sorted based on their priority level. The priorities are categorized as follows:

High Priority: Tasks that need immediate attention.
Medium Priority: Important tasks but not urgent.
Low Priority: Tasks that can be addressed later.

**Approach for Sorting Tasks by Priority**
In this Task Management App, tasks are sorted based on their assigned priority levels, which include High, Medium, and Low. The approach to sorting is implemented as follows:

Priority Levels: Each task is assigned a priority when created or edited, using a dropdown menu. The priority levels are stored as strings: "High", "Medium", and "Low".

**Sorting Logic:**

1. When rendering the list of tasks, a sorting function is applied to the array of tasks based on their priority.
2. The tasks are compared according to a predefined order:
3. High priority tasks are given the highest precedence, followed by Medium, and finally Low priority tasks.
   This is achieved by mapping each priority level to a numerical value (e.g., High = 1, Medium = 2, Low = 3), allowing for easy comparison and sorting.
4. Rendering: The sorted array is then used to render the task list in the user interface, ensuring that users see their most important tasks first. Each task's priority is visually represented with distinct background colors for better clarity and emphasis.
