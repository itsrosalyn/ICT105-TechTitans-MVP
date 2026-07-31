# Lab 10 - Implementation Plan

## 1. Project Information

- **Group name:** Tech Titans
- **Project title:** QR Code Attendance System with GPS Verification
- **Repository link:** [ICT105-TechTitans-MVP](https://github.com/itsrosalyn/ICT105-TechTitans-MVP.git)
- **Selected platform/tools:** HTML, CSS and JavaScript
- **Backend status:** No backend

## 2. Prototype Scope for Sprint 1

| Feature | Requirement ID | User Story ID | Screen/Module | Sprint 1 Status |
|---|---|---|---|---|
| Login and role-selection screen | FR-01 | US-01, US-05 | Login Page | In Progress |
| Main student check-in workflow | FR-02 | US-01, US-02, US-03 | Student Check-In Flow | In Progress |
| QR code scanning and attendance submission | FR-03 | US-01 | QR Scanner Page | In Progress |
| Attendance record simulation | FR-04 | US-01, US-06 | Attendance Data Module | In Progress |
| Attendance records list | FR-05 | US-04, US-06 | Attendance History / Lecturer Records | In Progress |
| Attendance search and filter | FR-06 | US-04 | Attendance History | In Progress |
| Attendance detail view | FR-07 | US-04 | Attendance Details | In Progress |
| Attendance percentage and status tracking | FR-08 | US-04 | Attendance Tracker | In Progress |
| Lecturer QR code and session management | FR-09 | US-05 | Lecturer Dashboard / QR Generation | In Progress |
| GPS location boundary validation | FR-10 | US-02 | GPS Verification Page | In Progress |
| Attendance confirmation and error feedback | FR-11 | US-03 | Confirmation Page | In Progress |
| Lecturer dashboard and summary metrics | FR-12 | US-06 | Lecturer Dashboard | In Progress |
| Consistent user interface | FR-13 | All user stories | All Screens | In Progress |
| Responsive student and lecturer screens | FR-14 | All user stories | Mobile and Desktop Layouts | In Progress |
| Privacy-aware attendance data handling | FR-15 | US-01, US-02, US-06 | Data Handling Module | In Progress |
| Requirement and feature traceability | FR-16 | All user stories | Documentation and Prototype | In Progress |

## 3. Implementation Approach

- **Frontend:**  
  The prototype will be developed using HTML, CSS, and JavaScript. Student screens will be designed for mobile browsers, while lecturer screens will be optimized for desktop use. The interface will follow the approved Lab 05 wireframes and maintain consistent colors, buttons, typography, and navigation.

- **Data source/storage:**  
  Sprint 1 uses sample attendance data and JavaScript objects to simulate attendance records. No backend database is used. Attendance records are for demonstration purposes only and are not stored permanently.

- **Admin/status handling:**  
  Lecturers will use a separate dashboard to create attendance sessions, generate QR codes, view class rosters, monitor check-ins, and review attendance summaries. Lecturer functions will be separated from student functions.

- **Search/filter approach:**  
  JavaScript will be used to filter attendance records by course, semester, date, or attendance status. Search and filter results will update directly on the attendance-history screen.

- **Validation approach:**  
  The prototype will validate required login fields, QR code status, GPS permission, classroom location boundary, duplicate submissions, and expired attendance sessions. Users will receive clear success or error feedback after each action.

- **Screenshots/evidence approach:**  
  Screenshots of implemented screens, interactions, validation messages, and responsive layouts will be stored in the `/screenshots/` folder. GitHub commits, issues, and updated documentation files will be used as contribution evidence.

## 4. Member Responsibilities

| Member | Responsibility | Evidence of Contribution |
|---|---|---|
| Thun Thiri Khin | Create the feature implementation status and update the weekly logbook. | [Issue 51](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/issues/51#issue-4928042198) |
| Mya Hninsi Phyu | Update the README and case study brief. | [Issue 52](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/issues/52#issue-4928057057) |
| Pan Thway Chal Ko Ko Lwin | Check required prototype files and update prototype screenshots. | [Issue 53](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/issues/53#issue-4928067478) |
| Phoo Myat Thwin | Create the sample data, implementation flow, and implementation plan. | [Issue 50](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/issues/50#issue-4928034848) |

## 5. Risks or Blockers

- **QR code scanning:**  
  Browser camera permissions and device compatibility may affect real QR code scanning. The team will test the QR code library and keep a simulated fallback for demonstrations.

- **GPS accuracy:**  
  Mobile GPS results may be inaccurate indoors. The team will use predefined classroom coordinates with a reasonable distance tolerance.

- **No backend storage:**  
  Attendance records are not saved permanently because the prototype does not use a backend database. Sample data and JavaScript objects will be used for demonstration.

- **Internet connectivity:**  
  An unstable network may interrupt browser-based location services or external QR code libraries. The prototype will display clear error messages when a service is unavailable.

- **Responsive design:**  
  Student and lecturer screens require different layouts. The team will test the interface on mobile and laptop screen sizes.

- **Privacy and access control:**  
  Attendance and GPS information must not be publicly exposed. The prototype will use only sample data and collect the minimum information required for demonstration.

- **Time limitations:**  
  Implementing every feature fully may not be possible during Sprint 1. The team will prioritize login, QR check-in, GPS verification, confirmation, attendance history, and the lecturer dashboard.
