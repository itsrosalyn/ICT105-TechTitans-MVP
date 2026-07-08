# Technical Architecture

## Project Title

**QR Code Attendance System with GPS Verification**

---

## 1. Selected Prototype Platform

**Frontend + Firebase**

- HTML
- CSS
- JavaScript
- Geolocation API

---

## 2. Architecture Decision

The project uses **HTML, CSS and JavaScript** because these technologies match the team's programming skills and support the required MVP features and Geolocation API enables classroom location verification. This architecture is suitable for implementing the required attendance workflow within the project timeline.

---

## 3. Main Components

| Component | Description | Tool / Technology | Related Requirement |
|---|---|---|---|
| User Interface | Student and Lecturer web interfaces for login, QR check-in, attendance history, QR generation, and dashboard. | HTML, CSS, JavaScript | **FR-01, FR-02, FR-13, FR-14** |
| Data Input Form | Student QR attendance submission, GPS location capture, and lecturer attendance session creation. | HTML Forms, JavaScript, Geolocation API | **FR-03, FR-10** |
| Data Storage | Store attendance records, session details, timestamps, and user information. | Firebase Firestore | **FR-04, FR-15** |
| Record List | Display attendance history and lecturer attendance records with search and filtering. | Firebase Firestore, JavaScript | **FR-05, FR-06** |
| Detail View | Display attendance details, including date, time, attendance status, and GPS verification result. | HTML, CSS, JavaScript | **FR-07** |
| Admin Function | Generate QR codes, create attendance sessions, and manage attendance records. | JavaScript, Firebase, QR Code Library | **FR-09** |
| Dashboard / Summary | Display attendance summaries, attendance percentage, present/absent counts, and simple analytics. | JavaScript, Firebase | **FR-08, FR-12** |

---

## 4. What Will Be Fully Implemented?

- Student login and homepage
- Lecturer login and homepage
- QR code attendance check-in
- GPS location verification
- Attendance confirmation messages
- Student attendance history
- Attendance search and filtering
- Dynamic QR code generation
- Lecturer dashboard
- Real-time attendance records
- Attendance percentage tracking

---

## 5. What Will Be Simulated?

- Classroom geofence boundaries using predefined coordinates
- QR code expiration timing
- Large-scale real-time attendance updates during demonstrations
- Learning Management System (LMS) integration
- Attendance reminder notifications

---

## 6. Final Prototype Risk

The biggest technical risk is integrating QR code scanning, GPS verification, and real-time attendance updates while maintaining reliable communication with the cloud database. GPS accuracy may vary depending on device permissions and environmental conditions, while internet connectivity may affect data synchronization.

To reduce these risks, the team will:

- Test the prototype on multiple mobile devices and web browsers.
- Use predefined classroom coordinates with a reasonable GPS tolerance.
- Validate each feature independently before integration.
- Store attendance records in Firebase Firestore for reliable synchronization.
- Prepare sample data and fallback demonstrations in case of network issues during the final presentation.
