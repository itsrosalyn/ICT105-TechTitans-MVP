# Wireframe Specification

## Required Wireframe Screens

| Wireframe File                       | Purpose                    | Minimum Elements to Show                                                                                          | Related Requirements           |
| ------------------------------------ | -------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **/wireframes/homepage.png**         | Entry point of the system  | Project title, system description, Student Login, Lecturer Login, main navigation, and "Get Started" button       | **FR-01, FR-02**               |
| **/wireframes/checkin.png**          | Student QR Check-in        | QR code scanner, course/session information, scan button, validation messages, and navigation                     | **FR-03, FR-10, FR-11**        |
| **/wireframes/gps-verification.png** | GPS location verification  | Location permission request, GPS verification status, loading/progress indicator, and location validation message | **FR-03, FR-10**               |
| **/wireframes/confirmation.png**     | Attendance confirmation    | Attendance status, success/error message, attendance details (course, date, time), and return button              | **FR-11**                      |
| **/wireframes/history.png**          | Student attendance history | Attendance history table/card, attendance status, attendance percentage, search bar, and course/semester filter   | **FR-05, FR-06, FR-07, FR-08** |
| **/wireframes/generate-qr.png**      | Lecturer QR generation     | Course selection, attendance session details, generated QR code, session status, and action buttons               | **FR-03, FR-09**               |
| **/wireframes/dashboard.png**        | Lecturer dashboard         | Live attendance list, present/absent counts, attendance summary cards, attendance rate, and simple chart          | **FR-05, FR-06, FR-09, FR-12** |

## Wireframe Quality Rules
- Use consistent navigation, labels, colors, typography, and icons across all Student and Lecturer screens.
- Maintain a consistent visual theme throughout the system (e.g., green for successful attendance and red for errors or warnings).
- Display realistic sample data such as student names, course codes, attendance status, dates, times, and attendance percentages instead of empty placeholders.
- Ensure every wireframe supports one or more functional requirements (FRs) and MVP features.
- Clearly represent the complete attendance workflow: Login → QR Check-in → GPS Verification → Attendance Confirmation → Attendance History.
- Design the Student interface for mobile web browsers and the Lecturer interface for desktop screens.
- Provide clear feedback messages for user actions, such as "Attendance Recorded Successfully", "QR Code Invalid", and "Location Verification Failed".
- Include intuitive navigation so users can easily move between screens (e.g., Home, History, Dashboard, and Back).
- Ensure lecturer screens provide key management functions, including generating QR codes, monitoring attendance, viewing attendance summaries, and exporting attendance reports.
- Wireframes may be created using Figma, Canva, PowerPoint, HTML/CSS, or another suitable prototyping tool.
