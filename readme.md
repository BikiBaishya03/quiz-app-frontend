Quiz and Notes Web App (Frontend) 🧠🖥️
The interactive, responsive client-side interface for the Quiz and Notes application. Built entirely with Vanilla JavaScript, this lightweight frontend delivers a fast, seamless user experience for taking topic-wise programming quizzes and studying quick revision notes, fully decoupled from its Spring Boot backend.

🚀 Features
✅ Dynamic API Routing: Automatically detects the environment (local vs. production) to route fetch requests securely to the local server or live cloud API.

✅ Topic-Based Quizzes: Interactive quiz modules for multiple programming languages (Java, Python, JavaScript, .NET, etc.).

✅ Dedicated Study Hub: Organized notes section for quick pre-quiz revision.

✅ Fully Responsive: Fluid layout that scales perfectly across mobile, tablet, and desktop devices.

✅ Zero-Dependency Architecture: Built strictly with HTML5, CSS3, and Vanilla JS—no heavy frameworks or bundlers required.

### 📂 Project Structure

quiz-app-frontend/
├── images/               # UI assets, icons, and banners
├── index.html            # Main Landing Page
├── index.js              # Logic for the landing page navigation and setup
├── quiz.css              # Styling specific to the quiz interface
├── quiz.html             # The main interactive quiz page
├── quiz.js               # Core logic for fetching questions and running the quiz
├── readme.md             # This file
├── result.html           # Page to display final scores and feedback
└── style.css             # Global UI styling and responsive breakpoints

🧑‍💻 Technologies Used
HTML5

CSS3 (Flexbox/Grid for layout)

JavaScript (Vanilla JS, Fetch API)

Netlify (Cloud Hosting & Deployment)

Git & GitHub

⚙️ Local Setup & Installation
Because this is a zero-dependency Vanilla JS project, running it locally is incredibly fast.

Clone the repository:

Bash
git clone https://github.com/BikiBaishya03/quiz-app-frontend
Navigate to the project directory:

Bash
cd quiz-app-frontend
Open the application:

Simply double-click index.html to open it in your browser.

Recommended: Use the Live Server extension in VS Code to run it on http://127.0.0.1:5500 to prevent local CORS restrictions.

Backend Connection: By default, script.js is configured to look for the Spring Boot API at http://localhost:8080. Ensure your local backend is running, or update the BACKEND_URL variable to point to your live Render deployment.

🤝 Contributions
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📧 Contact
For questions, suggestions, or feedback:

Email: bikibaishya121@gmail.com

GitHub: @BikiBaishya03