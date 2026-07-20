# Lab 10 - Feature Implementation Status

## Purpose
Use this file to prove that your prototype implementation is connected to system-requirements.md.

| Req ID | Required Functionality | Prototype Screen/Module | Current Status | Evidence | Next Fix Needed |
|---|---|---|---|---|---|
| FR-01 | Homepage or landing screen | home-page.html | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/home-page.png" width="100%" /> | Polish layout styling for cleaner look on small screens |
| FR-02 | Primary user pathway | Student QR Scanner & Lecturer Attendance Dashboard |  |  | Ensure smooth screen transition after successful scan |
| FR-03 | User input or data submission | Attendance check-in form (Student Name, Student ID, GPS trigger) |  | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/confirmation-page.png" width="100%" /> | Add input verification for Student ID format |
| FR-04 | Data storage or simulated storage | Firebase Realtime Database |  | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/records-page.png" width="100%" /> | Enforce secure database security rules |
| FR-05 | View records or information list | Lecturer Roster View (ICT 105) |  | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/lecturer-dashboard.png" width="100%" /> | Add timestamp solumn formatting |
| FR-06 | Search, filter, or category function | Roster Filter by Course (ICT 105) & Date |  |  |  |
| FR-07 | Detail view for each record | Student Attendance Detail Modal |  |  | Display submission timestamp and room validation status |
| FR-08 | Status or progress tracking | Real-time Attendance Counter (e.g., Present vs Total enrolled) |  |  | Auto-update count without needing a page refresh |
| FR-09 | Admin or manager function | Lecturer Session Management Panel (Prof. Herison) |  |  | Add button to manually close/lock attendance window |
| FR-10 | Validation and error prevention | Geofence Proximity Check (Room 3-216) & Duplicate Check |  | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/gpscheck-page.png" width="100%" /> | Refine GPS accuracy radius threshold to prevent false rejections |
| FR-11 | Confirmation or feedback message | Scan Success Toast/Alert Message |  | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/confirmation-page.png" width="100%" /> | Auto-dimiss feedback message after 5 seconds |
| FR-12 | Dashboard or summary view | Lecturer Class Summary Screen |  | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/lecturer-dashboard.png" width="100%" /> | Add total attendance percentage calculation |
| FR-13 | UI consistency | Shared Navigation Bar & Color Theme (CSS Stylesheet) |  |  | Standardize button padding and font hierarchy across screens |
| FR-14 | Mobile-friendly/responsive design | Student Mobile Viewport Layout |  | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/scanqr-page.png" width="100%" /> | Ensure camera viewfinder resizes properly on smaller screens |
| FR-15 | Privacy and responsible data handling | Real-time GPS validation without logging raw coordinate history |  | [User Consent Statement](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/docs/user-consent-statement.md) , [Data Inventory](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/data/data-inventory.csv)| Verify location permissions prompt appears before camera launch |
| FR-16 | Final prototype traceability | Full System Flow (Lecturer Display->Student Scan->Firebase Entry |  | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/privacy-security-review.png" width="100%" /> | Finalize end-to-end integration test documentation |

## Summary
- Features working today: 
- Features partially working: 
- Features not yet started: None
- Features requiring instructor feedback: Fine-tuning the GPS location accuracy radius (FR-10) to ensure students inside Room 3-216 are not accidently blocked by low mobile GPS precision.
