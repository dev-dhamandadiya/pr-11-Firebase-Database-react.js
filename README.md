📚 Book Store Management System

A modern and responsive CRUD (Create, Read, Update, Delete) application built with React JS, Redux Toolkit, Firebase Realtime Database, Axios, and Tailwind CSS. This project demonstrates state management, asynchronous API integration, form validation, and responsive UI development using modern frontend technologies.

🚀 Features

✨ Add New Books
✨ View All Books in a Responsive Table
✨ Update Existing Book Records
✨ Delete Books with Confirmation
✨ Form Validation with Error Messages
✨ Firebase Realtime Database Integration
✨ Redux Toolkit State Management
✨ Responsive Tailwind CSS UI
✨ Real-Time Data Updates

🛠️ Tech Stack
Technology	Usage
React JS	Frontend Development
Redux Toolkit	State Management
Firebase Realtime Database	Backend Database
Axios	API Requests
Tailwind CSS	Styling & Responsive Design
Vite	Fast Development Environment
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
⚙️ CRUD Functionality
➕ Create Book

Users can add a new book by providing:

Book Title
Author Name
Book Price

The data is stored in Firebase Realtime Database and instantly displayed in the UI.

📖 Read Books

All books are fetched from Firebase and displayed in a structured table containing:

Serial Number
Book Title
Author Name
Price
Action Buttons
✏️ Update Book

Users can update existing records:

Click the Edit button
Existing data automatically fills the form
Modify the details
Click Update Book
🗑️ Delete Book

Users can permanently delete a book record.

Confirmation popup before deletion
Instant UI update after successful deletion
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
⚡ Redux Toolkit Flow
UI
 ↓
Dispatch Action
 ↓
createAsyncThunk
 ↓
Axios Request
 ↓
Firebase Database
 ↓
Redux Store Update
 ↓
UI Re-render
📌 Form Validation

The application includes validation for:

✅ Book Title Required
✅ Author Name Required
✅ Price Required
✅ Price Must Be Greater Than 0

Dynamic error messages are displayed below the respective fields.

🎨 User Interface

The UI is built using Tailwind CSS and includes:

Clean Dashboard Layout
Responsive Design
Interactive Table
Hover Effects
Action Buttons
Modern Typography
Mobile-Friendly Experience
📸 Screenshots
🏠 Home Page
![Home](./add-book.png)
📚 Book List
![Book List](./book-list.png)
✏️ Update Book
![Update Book](./updated-book.png)
🗑️ Delete Book
![Delete Book](./book-list.png)
📦 Installation
Clone Repository
git clone <repository-url>
Install Dependencies
npm install
Run Project
npm run dev
📥 Required Packages
npm install axios
npm install react-redux
npm install @reduxjs/toolkit
npm install tailwindcss @tailwindcss/vite
🎯 Learning Outcomes

This project helped in understanding:

React Hooks (useState, useEffect)
Redux Toolkit
createSlice
createAsyncThunk
Firebase Realtime Database
Axios Integration
CRUD Operations
Form Validation
State Management
Tailwind CSS
Responsive Design
🔮 Future Improvements
🔍 Search Functionality
📄 Pagination
🔐 Authentication
🌙 Dark Mode
🖼️ Book Cover Upload
📊 Dashboard Analytics
📥 Export Data to PDF
👨‍💻 Developer

Project: Book Store Management System
Built With: React JS, Redux Toolkit, Firebase, Axios, Tailwind CSS
Purpose: Learning Modern Frontend Development & CRUD Operations

⭐ Conclusion

The Book Store Management System successfully demonstrates the implementation of a complete CRUD application using React JS, Redux Toolkit, Firebase Realtime Database, Axios, and Tailwind CSS. The project showcases modern frontend development practices, efficient state management, API integration, and responsive UI design.

⭐ If you found this project useful, don't forget to give it a star on GitHub!