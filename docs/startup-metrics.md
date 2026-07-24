# Startup / Product Metrics

## 1. Metrics Summary

| Metric ID | Metric Name | Metric Type | Why This Metric Matters | Formula / How to Calculate | Data Source | Prototype Screen |
|---|---|---|---|---|---|---|
| M-01 | Total Check-ins | Usage | Shows total adoption and daily student attendance activity across classes | Count total check-in records in database | Firebase Firestore / Realtime DB | Lecturer Dashboard |
| M-02 | Late Arrivals | Status | Identifies tradiness trends to help lecturers address attendance issues early | Count check-in records where status = "Late" | Attendance Records Collection | Lecturer Dashboard / Students Records |
| M-03 | On-Time Check-ins | Status | Verifies successful, timely student check-ins per session | Count check-in records where status = "On-Time" | Attendance Records Collection |  Lecturer Dashboard |
| M-04 | Average Attendance Rate | Category | Tracks overall class participation and engagement percentage | (On-Time + Late check-ins) / Total enrolled students x 100 | Students Stats Engine / Firebase | Student Home Screen & Stats View |
| M-05 | QR Scan Success Rate | Validation | Measures whether students can smoothly complete the primary check-in task without scanner/camera errors | Successful QR scans / Total scan attempts x 100 | App Event Logs / Validation Results | Analytics Summary |
| M-06 | GPS Verification Accuracy Rate | Validation | Ensures geo-fencing (Room 3-216 location check) is accurately validating student presence without false rejections | Successful location matches / Total location checks x 100 | Location Audit Logs | Analytics Summary |

## 2. Metrics Interpretation

Our metrics show strong initial adoption, with students actively using the mobile QR scanner and lecturers receiving real-time attendance logs. Tracking **Total Check-ins (M-01)** against **Late Arrivals (M-02)** gives immediate visibility validation data reveals that low mobile GPS precision in Room 3-216 occasionally causes false location rejections, lowering our **GPS Accuray Rate (M-06)**. Next, the team will fine-tune the geo-fencing accuracy radius (FR-10) and optimize the scanner viewfinder to ensure a faster, seamless check-in experience.

## 3. Link to Final Prototype

In the final prototype, these metrics are demonstrated across both student and lecturer interfaces:

- **Student View ([Home Screen](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/home-page.png)):** Displays individual performance metrics like **Average Attendance Rate (M-04)** (e.g., 90% Attendance Rate), total sessions attended, and late arrival counts.
- **Lecturer Dashboard ([Admin View](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/lecturer-dashboard.png)):** Displays live counters for **Total Check-ins (M-01), Late Arrivals (M-02),** and **On-Time Check-ins (M-03)** as students scan in during class.
- **Student Attendance History ([Record List](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/records-page.png)):** Displays the student's personal log of past check-ins (e.g., date, time, and status), proving that check-in attempts including **QR Scan Success (M-05)** and **GPS Verification (M-06)** are successfully saved and displayed to th user.
