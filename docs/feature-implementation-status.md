# Lab 10 - Feature Implementation Status

## Purpose
Use this file to prove that your prototype implementation is connected to system-requirements.md.

| Req ID | Required Functionality | Prototype Screen/Module | Current Status | Evidence | Next Fix Needed |
|---|---|---|---|---|---|
| FR-01 | Homepage or landing screen | home-page.html | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/home-page.png" width="100%" /> | None |
| FR-02 | Primary user pathway | Student QR Scanner & Lecturer Attendance Dashboard | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/scanqr-page.png" width="100%" /> <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/wireframes/lecturer-dashboard.png" width="100%" /> | None |
| FR-03 | User input or data submission | One-Touch Check-in (Logged-in Student & GPS) | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/confirmation-page.png" width="100%" /> | None |
| FR-04 | Data storage or simulated storage | Firebase Realtime Database | Completed | <img width="1280" height="727" alt="Firebase data" src="https://github.com/user-attachments/assets/980f35cb-f369-4ed7-b728-7ae88f62b334" /> | None |
| FR-05 | View records or information list | Lecturer Roster View (ICT 105) | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/lecturer-dashboard.png" width="100%" /> | None |
| FR-06 | Search, filter, or category function | Student Attendance History Filter by Course (ICT 105) & Date | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/records-page.png" width="100%" /> | None |
| FR-07 | Detail view for each record | Student Attendance Detail Modal | Working Draft | N/A (Pending implementation) | Display submission timestamp and room validation status |
| FR-08 | Status or progress tracking | Real-time Attendance Counter (e.g., Present vs Total enrolled) | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/lecturer-dashboard.png" width="100%" /> | None |
| FR-09 | Admin or manager function | Lecturer Session Management Panel (Prof. Herison) | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/qr-generation.png" width="100%" /> | None |
| FR-10 | Validation and error prevention | Geofence Proximity Check (Room 3-216) & Duplicate Check | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/gpscheck-page.png" width="100%" /> | None |
| FR-11 | Confirmation or feedback message | Scan Success Toast/Alert Message | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/confirmation-page.png" width="100%" /> | None |
| FR-12 | Dashboard or summary view | Lecturer Class Summary Screen | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/lecturer-dashboard.png" width="100%" /> | None |
| FR-13 | UI consistency | Shared Navigation Bar & Color Theme (CSS Stylesheet) | Completed | [UI Consistency](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/prototype/styles.css) | None |
| FR-14 | Mobile-friendly/responsive design | Student Mobile Viewport Layout | Completed | <img width="746" height="1280" alt="Mobile View" src="https://github.com/user-attachments/assets/a5fac736-0d48-49ae-ab7e-f66c8bb572d0" /> | None |
| FR-15 | Privacy and responsible data handling | Real-time GPS validation without logging raw coordinate history | Completed | [User Consent Statement](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/docs/user-consent-statement.md) , [Data Inventory](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/data/data-inventory.csv)| None |
| FR-16 | Final prototype traceability | Full System Flow (Lecturer Display->Student Scan->Firebase Entry | Completed | <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/privacy-security-review.png" width="100%" /> | None |

## Summary
- Features working today: Core functional requirements including One-Touch Student Check-in (FR-03), Lecturer Dashboard (FR-12), Mobile Viewport Layout(FR-14), UI Consistency (FR-13), Privacy Governance (FR-15), and System Traceability (FR-16).
- Features partially working: FR-07 (Working Draft)
- Features not yet started: None
- Features requiring instructor feedback: Fine-tuning the GPS location accuracy radius (FR-10) to ensure students inside Room 3-216 are not accidently blocked by low mobile GPS precision.
