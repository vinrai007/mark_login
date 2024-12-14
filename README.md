# **React Login and Home Page**

This project implements a login and home page using React.js with routing, form validation, API integration, and local storage management.

---

## **Features**

1. **Login Page**:
   - Username, Email, and Password input fields with icons and placeholders.
   - Validation:
     - Username must be `emilys`.
     - Email must follow a valid email format.
     - Password must be at least 8 characters long.
   - Displays error messages for invalid input.
   - API Integration:
     - Sends login credentials to [dummyjson.com API](https://dummyjson.com/auth/login).
   - Saves the authentication token and user data in `localStorage` after a successful login.
   - Auto-redirects users to the Home Page if they are already logged in.
   - "Remember Me" and "Forgot Password?" features (UI only).

2. **Home Page**:
   - Displays the logged-in user’s username and email.
   - A **Logout** button clears user data from `localStorage` and redirects to the Login Page.

3. **Routing**:
   - `/auth/login` → Login Page.
   - `/home` → Home Page.

4. **Responsive Design**:
   - Works seamlessly on desktop, tablet, and mobile devices.

---

## **Tech Stack**

- **React.js**: Core framework.
- **React Router**: For navigation between pages.
- **Axios**: For API calls.
- **CSS**: For styling.
- **React Icons**: For input field icons.

---

## **Project Setup**

Follow the steps below to set up and run the project locally.

### **1. Prerequisites**

Make sure you have the following installed:
- **Node.js**: [Download Node.js here](https://nodejs.org/)
- **npm** or **yarn**

### **2. Installation**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/react-login-app.git
   cd react-login-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   Required dependencies include:
   - `react-router-dom`
   - `axios`
   - `react-icons`

   These are automatically installed.

3. **Run the application**:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## **Project Structure**

```
react-login-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Home.js
│   ├── assets/
│   │   └── styles/
│   │       ├── Login.css
│   │       └── Home.css
│   ├── App.js
│   ├── index.js
│   └── README.md
└── package.json
```

---

## **API Details**

- **Endpoint**: `https://dummyjson.com/auth/login`
- **Request Body**:
   ```json
   {
     "username": "emilys",
     "password": "your_password",
     "email": "your_email",
     "expiresInMins": 30
   }
   ```
- **Response**:
   - A token is returned on successful login.

---

## **Usage**

1. **Login**:
   - Use `emilys` as the username.
   - Enter a valid email (e.g., `example@gmail.com`).
   - Enter a password with at least 8 characters.

2. **Home Page**:
   - After login, the Home Page displays user details.
   - Click **Logout** to clear the session and return to the Login Page.

---

## **Screenshots**

1. **Login Page**  
   ![Login Page](screenshots/login.png)

2. **Home Page**  
   ![Home Page](screenshots/home.png)

---

## **License**

This project is licensed under the MIT License.

---

## **Author**

- **VINAYAK RAI**
---
