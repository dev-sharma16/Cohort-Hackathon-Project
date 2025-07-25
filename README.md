# 🎓 Raj Shamani Inspired Cohort Hackathon Website

A React-based mock platform inspired by Raj Shamani's personal brand site. This web app demonstrates a simplified cohort learning model with login/signup functionality, dummy payment flow, and protected course access using Appwrite for authentication.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-4.0-purple.svg)
![Appwrite](https://img.shields.io/badge/Appwrite-BaaS-red.svg)

---

## 🚀 Features

- 🔐 **User Authentication** (Login/Signup via Appwrite)
- 🛡️ **Protected Routes** for Course Details Page
- 💳 **Dummy Payment Gateway** Logic
- 🏠 **Homepage** with personal branding content
- 📚 **Course Page** (accessible only after payment)
- 🎨 Clean UI using **Tailwind CSS**

---

## 🧠 Flow Overview

### 1. **Login / Signup**
- Users can sign up or log in using Appwrite Authentication
- After successful login, they're redirected to the homepage

### 2. **Payment Gateway Simulation**
- If a user hasn't "paid", visiting the Course Detail page shows a dummy payment screen
- After "paying", they are allowed to access the course content

> ⚠️ **Note:** This is a dummy payment flow — no real transactions happen.

### 3. **Protected Course Access**
- Access is controlled using local state or Appwrite DB flags
- Users must be logged in *and* marked as "paid" to access the course

---

## 🛠 Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Forms:** React Hook Form
- **Backend-as-a-Service:** Appwrite
- **State Management:** Redux (with Redux Store)

---

## 🗂️ Folder Structure

```
HACKATHON PROJECT/
│
├── node_modules/
├── public/
├── src/
│   ├── appwrite/          # Appwrite configuration and auth
│   ├── assets/            # Static assets (images, icons)
│   ├── components/        # Reusable React components
│   ├── pages/             # Page components
│   ├── redux store/       # Redux state management
│   ├── routes/            # React Router configuration
│   ├── App.css           # Main app styles
│   ├── App.jsx           # Main App component
│   ├── index.css         # Global CSS styles
│   └── main.jsx          # React entry point
│
├── .env                  # Environment variables
├── .env.sample          # Sample environment file
├── .gitignore           # Git ignore rules
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package-lock.json    # Dependency lock file
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/hackathon-project.git
cd hackathon-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory with your Appwrite credentials (use `.env.sample` as reference):

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 🧪 Appwrite Services Used

- ✅ **Authentication** - Signup/Login functionality
- 📂 **Database** *(optional)* - Storing payment flags or course access
- 🔐 **Session Management** - Auto-login and protected routes

---

## 🔧 Configuration

### Appwrite Setup

1. Create an Appwrite project at [cloud.appwrite.io](https://cloud.appwrite.io)
2. Enable Authentication service
3. Configure OAuth providers (optional)
4. Create a database and collection for user data
5. Set up appropriate permissions

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_APPWRITE_ENDPOINT` | Appwrite API endpoint | Yes |
| `VITE_APPWRITE_PROJECT_ID` | Your Appwrite project ID | Yes |

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

