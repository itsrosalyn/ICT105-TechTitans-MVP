# Final Demo Link

## Prototype Link

https://attend-qr-1.netlify.app

## Landing Page Link

https://attendqr-landingpage.netlify.app/

## Notes

- The prototype is developed using **HTML, CSS, JavaScript, and Firebase**.
- Users can create a new account by selecting the **Sign Up** option on the login page. There is **no need to use a real university email address**—any valid email format (for example, `student@rsu.ac.th` or `lecturer@rsu.ac.th`) can be used to register and test the prototype.
- After creating an account, users can log in as either a **Student** or **Lecturer** to access the corresponding features.
- Students can scan the QR code, complete GPS verification, view their attendance history, and check their attendance percentage.
- Lecturers can generate QR codes, create attendance sessions, and view attendance records, summaries, and analytics through the lecturer dashboard. **Lecturers cannot edit or modify attendance records after they have been recorded.**
- Firebase Authentication is used for user registration and login, while Firebase Firestore stores attendance data and dashboard information.
- Sample attendance data is available to demonstrate the system's features. Some landing page metrics use **localStorage** as a fallback if Firebase is temporarily unavailable.
- The prototype is intended for **MVP demonstration and evaluation**, so some functions are simplified compared to a full production system.But most of them are fully functioned. 
