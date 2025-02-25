# 📘 Accredian Frontend Task

This is the **frontend** for the **Refer & Earn** landing page, built using **React.js** and styled with **Tailwind CSS**. The frontend is responsive, user-friendly, and includes a **"Refer Now"** button that triggers a popup modal for referring a course.

---

## 🚀 Features
- **Refer & Earn Landing Page** with a visually appealing **Hero Section**.  
- **Popup Modal** for referral form submission, capturing referrer and referee details.  
- Form validation for mandatory fields.  
- Responsive design using **Tailwind CSS**.  
- Seamless integration with the backend RESTful APIs.  

---

## 🛠️ Technologies Used
- **React.js** - Frontend library for building user interfaces.  
- **Axios** - For making HTTP requests to the backend.  
- **Tailwind CSS** - For responsive and modern styling.  
- **Vite** - Frontend build tool for faster development.  

---

## 📂 Project Structure

- | - index.html
- | - package.json
- | - .env
- | - .env.sample
- | - vite.config.js
- | - tailwind.config.js
- | - postcss.config.js
- | - src
  - | - App.jsx
  - | - main.jsx
  - | - App.css
  - | - index.css
  - | - components
    - | - Benfits.jsx
    - | - Footer.jsx
    - | - Header.jsx
    - | - Hero.jsx
    - | - HowItWorks.jsx
    - | - ReferralModal.jsx


---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_API_URL="https://your-backend-link.onrender.com"
```
---
 ## 📦 Installation
 Clone the repository
 ```
git clone https://github.com/YOUR_USERNAME/Accredian-frontend-task.git
cd Accredian-frontend-task
```
Install the dependencies
```
npm install
```
Start development server
```
npm run dev
```

## 🌐 API Integration
The frontend interacts with the backend through Axios to handle referral form submissions.

- Ensure the backend is deployed and accessible.
- Update the VITE_API_BASE_URL in the .env file accordingly.

## 📊 Form Validation
- Form fields are validated for required inputs.
- Error messages are displayed for invalid or empty fields.


## 🚀 Deployment
- Frontend on Vercel
- Push your code to GitHub.
- Go to Vercel and click on New Project.
- Connect your GitHub repository.
- In Environment Variables, add the variables from your .env file.
- Click Deploy.

## 🐛 Troubleshooting
CORS Errors

- Ensure CORS is properly configured in your backend.
- Double-check the VITE_API_URL value in .env.
  
404 Not Found

- Verify the API endpoints in the backend.
- Confirm the frontend is pointing to the correct backend URL.


## 🤝 Contributing
Contributions are welcome!

- Fork the repo.
- Create your feature branch: git checkout -b feature/YourFeature.
- Commit your changes: git commit -m 'Add some feature'.
- Push to the branch: git push origin feature/YourFeature.
- Open a pull request.

## 
---

### 🚀 Note  
- Save this as `README.md` in your **Accredian-frontend-task** repository.  
- **Update placeholders** (e.g. `VITE_API_URL`) with your specific details.  
- After deploying, **update live demo links** to point to your deployed frontend and backend.  

---

If you need any more help with deployment or other documentation, let me know! 🚀
