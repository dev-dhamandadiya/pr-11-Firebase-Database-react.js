📚 Book Store Management System

A fully functional CRUD (Create, Read, Update, Delete) web application built using React JS, Redux Toolkit, Firebase Realtime Database, Axios, and Tailwind CSS. This project demonstrates modern frontend development practices, state management, asynchronous API handling, and responsive UI design.

🚀 Live Features

✅ Add New Books
✅ View All Books
✅ Update Existing Books
✅ Delete Books
✅ Form Validation
✅ Firebase Realtime Database Integration
✅ Redux Toolkit State Management
✅ Responsive Tailwind CSS UI
✅ Real-Time Data Updates

🛠️ Tech Stack
Technology	Purpose
React JS	Frontend Development
Redux Toolkit	State Management
Firebase Realtime Database	Backend Database
Axios	API Handling
Tailwind CSS	UI Design
Vite	Development Environment
📂 Project Structure
src
│
├── api
│   └── axiosInstance.js
│
├── app
│   └── store.js
│
├── feature
│   └── book
│       └── BookSlice.js
│
├── App.jsx
├── main.jsx
└── index.css
📋 Application Workflow
Create Book

Users can add a new book by entering:

Book Title
Author Name
Book Price

The data is stored in Firebase Realtime Database and immediately displayed in the UI.

Read Books

All books are fetched from Firebase and displayed in a responsive table containing:

Serial Number
Title
Author
Price
Actions
Update Books

Users can edit existing records.

Click Edit
Data automatically fills the form
Update details
Save changes

Redux Toolkit updates both Firebase and local state instantly.

Delete Books

Users can remove records permanently using the Delete button.

A confirmation popup prevents accidental deletion.

🔥 Firebase Integration
Database Structure
{
  "books": {
    "-OXYZ123": {
      "title": "React JS",
      "author": "John Doe",
      "price": "499"
    }
  }
}
Firebase Rules
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
⚡ Redux Toolkit Implementation

The project uses:

createSlice()

Used for creating reducers and managing application state.

createAsyncThunk()

Used for handling asynchronous Firebase operations:

Create Book
Fetch Books
Update Book
Delete Book
Store Configuration

Redux Store manages:

{
  books: [],
  loading: false,
  error: null
}
📌 Form Validation

The application includes client-side validation:

Book Title Required
Author Name Required
Price Required
Price Must Be Greater Than Zero

Error messages are displayed dynamically below each field.

🎨 User Interface

The UI is built using Tailwind CSS and includes:

Responsive Design
Modern Card Layout
Dynamic Table
Hover Effects
Action Buttons
Clean Typography
Mobile-Friendly Interface
📸 Screenshots
Home Page


![Home](./add-book.png)

Book List Table

![Book-list](./book-list.png)

Update Book

![Edit Book](./updated-book.png)

Delete Book

![Delete-list](./book-list.png)

📦 Installation

Clone the repository:

git clone <repository-url>

Install dependencies:

npm install

Run the project:

npm run dev
📥 Required Packages
npm install axios
npm install react-redux
npm install @reduxjs/toolkit
npm install tailwindcss @tailwindcss/vite
🎯 Learning Outcomes

Through this project, I gained practical experience in:

React Hooks
useState
useEffect
Redux Toolkit
createSlice
createAsyncThunk
Firebase Realtime Database
Axios API Integration
CRUD Operations
Form Validation
Tailwind CSS
Responsive Design
State Management
🔮 Future Enhancements
Search Functionality
Pagination
Category Management
Authentication
Dark Mode
Book Cover Upload
Export Data to PDF
Dashboard Analytics
👨‍💻 Developer

Project Name: Book Store Management System
Technology Stack: React JS + Redux Toolkit + Firebase + Tailwind CSS
Purpose: Learning CRUD Operations and State Management

⭐ Conclusion

This project successfully demonstrates the implementation of a complete CRUD application using React JS, Redux Toolkit, Firebase Realtime Database, Axios, and Tailwind CSS. It highlights efficient state management, API integration, and responsive user interface development while following modern frontend best practices.