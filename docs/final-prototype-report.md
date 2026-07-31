# Final Prototype Report

## 1. Project Title

**AttendQR: QR Code Attendance System with GPS Verification**

---

## 2. Group Members and Roles

| Name | Role | Main Contribution | GitHub Evidence |
|---|---|---|---|
| **Mya Hninsi Phyu** | Team Leader | Coordinated the project, prepared documentation, developed the landing page, managed the GitHub repository, and finalized reports and presentation materials. | [Issue 67](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/issues/67) |
| **Phoo Myat Thwin** | Documentation & Analysis | Prepared project documentation, updated the case study brief, reviewed system requirements, documented feature implementation status, and prepared the final reflection. | [Issue 68](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/issues/68) |
| **Pan Thway Chal Ko Ko Lwin** | Prototype Developer | Developed the web prototype, integrated Firebase Firestore, implemented student and lecturer features, prepared screenshots, and deployed the live prototype. | [Issue 69](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/issues/69) |
| **Thun Thiri Khin** | User Testing & Validation | Prepared the user testing plan, conducted usability testing, summarized testing results, managed testing datasets, and documented validation evidence. | [Issue 70](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/issues/70) |

---

# 3. Problem Background

Traditional attendance methods such as paper sign-in sheets and verbal roll calls are time-consuming, inefficient, and vulnerable to proxy attendance, where students ask others to check in on their behalf. These methods also make it difficult for lecturers to monitor attendance records and identify students who do not meet the university's minimum 80% attendance requirement.

AttendQR was developed to provide a faster, more secure, and more reliable attendance process by combining QR code scanning with GPS verification.

---

# 4. Target Users

## Primary Users

- University Students
- University Lecturers

## Student Needs

- Register and log in securely.
- Record attendance quickly using QR codes.
- Verify attendance through GPS.
- View attendance history and attendance details.
- Track attendance percentage.

## Lecturer Needs

- Generate QR codes for attendance sessions.
- Monitor live student check-ins.
- View attendance records.
- View present and absent students.
- Monitor attendance statistics and students below the 80% attendance requirement.

---

# 5. Evidence Summary

The AttendQR prototype was developed and refined throughout the semester using evidence gathered from interviews, usability testing, MVP validation, and prototype evaluation.

Evidence collected included:

- Student interviews about attendance challenges.
- Lecturer interviews regarding attendance management.
- User testing sessions using the interactive prototype.
- Firebase testing to verify attendance recording and data storage.
- Usability feedback on the QR code and GPS verification workflow.

The interviews, usability testing, and prototype evaluation indicated that participants found QR code attendance with GPS verification easier to use than manual attendance. Participants reported that the system could reduce attendance time, minimize manual work, and improve confidence in attendance verification.

Based on the feedback and evaluation, several improvements were made before the final prototype, including:

- Attendance detail popup
- Improved lecturer dashboard
- Landing page connected to the live prototype
- Automatic absent marking after attendance sessions close
- Improved GPS validation messages
- Improved dashboard layout and attendance statistics

**Note:** The user testing tables and datasets included in the project documentation are sample records prepared from prototype usability testing for academic reporting purposes. They summarize participant task completion, observations, and feedback gathered during the evaluation process.

---

# 6. Final Prototype Overview

AttendQR is a web-based attendance management system that combines QR code scanning and GPS verification to record attendance securely.

## Student Features

- User registration
- Secure login
- QR code attendance check-in
- GPS verification
- Attendance confirmation
- Attendance history
- Attendance detail popup
- Attendance percentage tracking

## Lecturer Features

- Secure login
- Generate attendance QR codes
- Create attendance sessions
- Monitor live student check-ins
- View attendance session details
- View the list of present and absent students for each attendance session
- Dashboard showing attendance statistics

Students who do not complete attendance before the attendance session closes are automatically marked as **Absent**.

A responsive landing page introduces the project and provides access to the live prototype.

---

# 7. Requirement Traceability Summary

| Requirement ID | Implemented Feature / Screen                                       | User Story ID | **Evidence Source**                                      | Status     |
| -------------- | ------------------------------------------------------------------ | ------------- | -------------------------------------------------------- | ---------- |
| FR-01          | Landing page and Login screen                                      | US-01         | [final-homepage.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/5bb54776f692f3ad0aae13b533428b615031ead3/screenshots/final-prototype-screenshots/final-homepage.png)| ✅ Complete |
| FR-02          | Student and Lecturer workflow                                      | US-01         | [demo-flow.mmd](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/5bb54776f692f3ad0aae13b533428b615031ead3/diagrams/demo-flow.mmd) | ✅ Complete |
| FR-03          | QR code scanning and GPS verification                              | US-01, US-02  | [final-scan-qrpage.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/5bb54776f692f3ad0aae13b533428b615031ead3/screenshots/final-prototype-screenshots/final-scan-qrpage.png), [final-gpscheck-page.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/5bb54776f692f3ad0aae13b533428b615031ead3/screenshots/final-prototype-screenshots/final-gpscheck-page.png)| ✅ Complete |
| FR-04          | Firebase attendance storage                                        | US-01         | Firebase Firestore database                              | ✅ Complete |
| FR-05          | Attendance history and attendance records                          | US-04         | [final-records-page.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/5bb54776f692f3ad0aae13b533428b615031ead3/screenshots/final-prototype-screenshots/final-records-page.png)| ✅ Complete |
| FR-06          | Search and filter attendance history                               | US-04         | [final-records-page.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/5bb54776f692f3ad0aae13b533428b615031ead3/screenshots/final-prototype-screenshots/final-records-page.png)| ✅ Complete |
| FR-07          | Attendance detail popup                                            | US-04         | [final-records-page-detail.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/5bb54776f692f3ad0aae13b533428b615031ead3/screenshots/final-prototype-screenshots/final-records-page-detail.png)| ✅ Complete |
| FR-08          | Attendance status, and automatic absent marking                    | US-04         | [final-lecturer-dashboard-detail.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/5bb54776f692f3ad0aae13b533428b615031ead3/screenshots/final-prototype-screenshots/final-lecturer-dashboard-detail.png))                        | ✅ Complete |
| FR-09          | Lecturer dashboard and QR code generation                          | US-05         | [final-qr-generationpage.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/5bb54776f692f3ad0aae13b533428b615031ead3/screenshots/final-prototype-screenshots/final-qr-generationpage.png)                       | ✅ Complete |
| FR-10          | GPS validation                                                     | US-02         | [final-gpscheck-page.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/5bb54776f692f3ad0aae13b533428b615031ead3/screenshots/final-prototype-screenshots/final-gpscheck-page.png)                   | ✅ Complete |
| FR-11          | Confirmation message                                               | US-03         | [final-confirmation-page.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/5bb54776f692f3ad0aae13b533428b615031ead3/screenshots/final-prototype-screenshots/final-confirmation-page.png)                    | ✅ Complete |
| FR-12          | Dashboard, summary, or simple analytics view                       | US-06         | [final-lecturerdashboard.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/5bb54776f692f3ad0aae13b533428b615031ead3/screenshots/final-prototype-screenshots/final-lecturerdashboard.png)                        | ✅ Complete |
| FR-13          | Consistent user interface                                          | All           | [final-prototype-screenshots](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/tree/5bb54776f692f3ad0aae13b533428b615031ead3/screenshots/final-prototype-screenshots)                              | ✅ Complete |
| FR-14          | Responsive design                                                  | All           | [final-prototype-link](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/34eb7b7f8d7c64f2a0995411bd5c8b4b00836da2/prototype/final-prototype-link.md)| ✅ Complete |
| FR-15          | Privacy notice                                                     | All           | [final-landing-page-link](https://attendqr-landingpage.netlify.app/)| ✅ Complete |
| FR-16          | Traceability to Lab 04 requirements                                | All           | [prototype-traceability](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/34eb7b7f8d7c64f2a0995411bd5c8b4b00836da2/docs/requirement-traceability-matrix.md)| ✅ Complete |


---

# 8. Data Handling

AttendQR collects only the information required for attendance verification.

## Data Collected

- Student ID
- Student name
- Email address
- Course
- Attendance session
- Attendance date and time
- QR code scan result
- GPS verification result
- Attendance status (Present or Absent)
- Attendance percentage

## Data Storage

Attendance records are securely stored in Firebase Firestore.

## Data Display

The system displays:

- Attendance history
- Attendance detail popup
- Lecturer dashboard
- Attendance session list
- Live student check-ins
- Present and absent students
- Attendance percentage
- Dashboard statistics

## Search and Filter

Students can search and filter attendance history by course and semester.

## Data Updates

Attendance records are automatically created and stored after successful QR code scanning and GPS verification.

Students who do not complete attendance before an attendance session ends are automatically marked as **Absent**.

No continuous background GPS tracking is performed.

---

# 9. Validation and User Testing Results

Prototype usability testing was conducted with university students and lecturers.

Participants completed tasks including:

- Creating an account
- Logging in
- Scanning QR codes
- GPS verification
- Viewing attendance history
- Viewing attendance details
- Generating attendance QR codes
- Monitoring attendance sessions
- Reviewing dashboard statistics

### User Testing Data

**Note:** The user testing tables and datasets included in the documentation are sample records prepared from prototype usability testing for academic reporting purposes. They summarize participant task completion, observations, and feedback gathered during the evaluation process.

### Key Findings

- QR code attendance was faster than manual attendance.
- GPS verification improved confidence in attendance authenticity.
- Attendance history was easy to understand.
- The attendance detail popup provided clearer attendance information.
- Automatic absent marking improved attendance tracking.
- The lecturer dashboard made attendance monitoring easier.

Overall, participants successfully completed the primary workflow, demonstrating that the prototype achieved its MVP objectives.

---

# 10. Startup/Product Metrics

The prototype displays and demonstrates several metrics, including:

- Total attendance records
- Present students
- Absent students
- Attendance percentage
- Students below the 80% attendance requirement
- Active attendance sessions
- Live student check-ins
- Landing page CTA clicks
- Prototype demo visits

These metrics help evaluate both prototype usage and attendance performance.

---

# 11. Business Value and Venture Direction

AttendQR creates value by improving attendance accuracy while reducing manual administrative work.

## Value Creation

- Faster attendance recording
- Reduced proxy attendance
- Reliable GPS verification
- Automatic attendance tracking
- Real-time attendance monitoring

## Value Delivery

AttendQR is delivered as a responsive web application that works on both desktop and mobile web browsers.

## Value Capture

Future opportunities include:

- University-wide deployment
- Integration with Learning Management Systems (LMS)
- Institutional licensing
- Attendance analytics services
- Multi-campus implementation

---

# 12. Limitations and Future Improvements

## Current Limitations

- Attendance history search and filtering are only available for students.
- Lecturers can monitor attendance sessions and view present and absent students.
- Lecturers cannot search, filter, edit, or manually update attendance records.
- Attendance records cannot be edited after submission.
- Push notifications are not implemented.
- QR code security can be further enhanced.
- The prototype currently focuses on university classroom attendance only.

## Future Improvements

- Lecturer search and filtering functions.
- Attendance editing and approval workflow.
- Push notifications and attendance reminders.
- Enhanced QR code security with automatic QR expiration.
- Export attendance reports to PDF or Excel.
- Multi-campus and multi-university support.
- Advanced attendance analytics and reporting.
- Integration with university authentication systems and Learning Management Systems (LMS).
