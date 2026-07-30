# System Requirements

## Minimum Final Prototype Functionalities

These requirements define the minimum prototype functionalities that each ICT105 student group must address in the final prototype. The requirements are designed to be platform-independent and can align with different project topics, such as booking systems, reporting systems, inventory systems, learning platforms, dashboards, marketplace concepts, reminder systems, service request systems, or other IT-based solutions.

| Req ID | Minimum Prototype Functionality | What Students Must Show in Final Prototype |
| --- | --- | --- |
| **FR-01** | **Clear problem-specific homepage or landing screen** | Login Screen: A welcome page where users select if they are a "Student" or a "Lecturer" to access their accounts. |
| **FR-02** | **Primary user pathway** | Check-In Flows: Shows a student logging in → scanning a QR code → sharing GPS location → getting a success message. |
| **FR-03** | **User input or data submission feature** | Scan & Location Input: The student interface captures scanned QR code details and mobile GPS coordinates. |
| **FR-04** | **Data storage or record management** | Cloud Database: Attendance date (Student ID, time, and class ID) is securely saved in a Firebase or MySQL database. |
| **FR-05** | **View records / information list** | Attendance List: Lecturers can view a live list of all students who successfully checked into the active class section. |
| **FR-06** | **Search, filter, or category function** | History Filter: Students can filter their past attendance records by course subject or semester. |
| **FR-07** | **Detail view for each record** | Check-In Details: Users can click on a specific class date to see the exact timestamp and location verification log. |
| **FR-08** | **Status or progress tracking** | Attendance Tracker: Automatically tracks if a student's cumulative presence is above or below the mandatory 80% university requirement. |
| **FR-09** | **Admin or manager function** | Lecturer Dashboard: Gives lecturers the power to create unique session QR codes and manage active class rosters. |
| **FR-10** | **Basic validation and error prevention** | Location Boundary Check: The system verifies the student's GPS data and rejects the log if they are outside the classroom wall. |
| **FR-11** | **Confirmation or feedback message** | Status Pop-ups: Displays an immediate "Submission successful" message or an error message like "Too Far from Class" right after scanning. |
| **FR-12** | **Dashboard, summary, or simple analytics view** | Summary Metrics: A dashboard for lecturers showing total students present, absent metrics, and location warnings. |
| **FR-13** | **Basic user interface consistency** | Clean Layout: Uses a unified color theme (green for present, red for warnings), consistent font matching, and matching buttons. |
| **FR-14** | **Mobile-friendly or responsive design consideration** | Optimized Screens: The student check-in portal is shaped perfectly for mobile web browsers, and the lecturer panel works great on desktop screens. |
| **FR-15** | **Basic privacy and responsible data handling** | Safe Data Boundaries: The app only collects necessary check-in points (ID and time). No permanent background location tracking is used. |
| **FR-16** | **Final prototype traceability** | Feature Traceability: Every interface screen maps perfectly back to our core Lab 04 features (Scanner maps to F01, GPS maps to F02). |

---

## Minimum Technical Requirement

The final prototype must not be only a static idea or presentation. It must be an interactive prototype where users can click, submit, view, search/filter, update, or simulate the main workflow.

Acceptable platforms may include:

| Platform Type | Acceptable Prototype Form |
| --- | --- |
| Web app | Lecture Web Portal (HTML/CSS/JS + Cloud Hosting): A website for lecturers to log in, create QR codes, and manage active classrooms. |
| Mobile app prototype | Student Check-In app (HTML/CSS/JS): A mobile app for students to log in, scan QR codes with their phone camera, and submit GPS coordinates via the Geolocation API. |
| Dashboard system | Real Time Monitoring Panel (HTML/CSS/JS): A visual screen showing graphs or tables of live student presence and metrics tracking the 80% attendance rule. |
| Data-driven prototype | Attendance Record System (Firebase/MySQL): A structured backend where student check-ins actively write data to a live database, alllowing records to be stored, filtered, and viewed. |

# Feature Implementation Status for Lab 14

| Requirement ID | Requirement Summary | Prototype Screen/Module | Status | Evidence/Screenshot | Notes |
|---|---|---|---|---|---|
| FR-01 | Homepage or landing screen | Login Page / Home Page | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/login-page.png" width="100%" /><br><img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/home-page.png" width="100%" /> | Updated the login page and homepage navigation for smoother user access. |
| FR-02 | Primary user pathway | Login → QR Scan → GPS Check → Confirmation | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/scanqr-page.png" width="100%" /><br><img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/gpscheck-page.png" width="100%" /><br><img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/confirmation-page.png" width="100%" /> | Improved page navigation and user workflow throughout the attendance process. |
| FR-03 | User input or data submission | QR Scan & GPS Input | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/scanqr-page.png" width="100%" /><br><img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/gpscheck-page.png" width="100%" /> | Students submit attendance using QR scanning and GPS verification. |
| FR-04 | Data storage or record management | Firebase Realtime Database | Completed | <img width="1280" height="727" alt="Firebase data" src="https://github.com/user-attachments/assets/980f35cb-f369-4ed7-b728-7ae88f62b334" /> | Attendance information is securely stored in Firebase. |
| FR-05 | Live check-in/list | Lecturer Dashboard / Attendance Records | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/lecturer-dashboard.png" width="100%" /><br><img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/records-page.png" width="100%" /> | Updated dashboard and records page to improve record viewing and navigation. |
| FR-06 | Search/filter/category | Records Page | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/records-page.png" width="100%" /> | Students can filter attendance records by course and date. |
| FR-07 | Detail view | Attendance Record Details | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/records-page.png" width="100%" /> | Basic record information is available, but detailed attendance information is still under development. |
| FR-08 | Status/progress tracking | Attendance Tracker | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/acea8f4718f4ca15dde3e6e01ae53ceafa7fb432/screenshots/qr-generation.png" width="100%" /> | Dashboard displays attendance statistics, but the automatic 80% attendance progress tracker is not fully implemented. |
| FR-09 | Admin/manager function | QR Generation / Lecturer Dashboard | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/qr-generation.png" width="100%" /> | Lecturers can generate QR codes and manage attendance sessions. |
| FR-10 | Validation and feedback | GPS Validation | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/gpscheck-page.png" width="100%" /> | GPS location is validated before attendance is accepted. |
| FR-11 | Dashboard/summary/metrics | Confirmation Page | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/confirmation-page.png" width="100%" /> | Users receive immediate confirmation after successful attendance submission. |
| FR-12 | Dashboard/summary/metrics | Lecturer Dashboard | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/lecturer-dashboard.png" width="100%" /> | The dashboard provides summary metrics, attendance statistics, and session information for lecturers. |
