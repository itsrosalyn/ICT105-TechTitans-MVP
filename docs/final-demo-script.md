# Final Demo Script

## Demo Duration

Recommended duration: 5-7 minutes.

## 1. Opening

- **Project:** AttendQR: QR Code Attendance System with GPS Verification
- **Problem:** Paper sign-ins and static QR codes allow proxy attendance and waste valuable class time.
- **Target Users:** ICT Students & Lecturers
- **Value Proposition:** Fast, proxy-proof check-ins combining dynamic QR codes with indoor location verification.

## 2. User Scenario

In Room 3-216, a lecturer starts an attendance session and generates a QR code for the class. A student also opens AttendQR, registers or logs in, scans the QR code, completes GPS verification, and receives an attendance confirmation. The attendance record is stored in Firebase and can be viewed later by both the student and lecturer.

## 3. Prototype Walkthrough

| Step | Screen / Feature | What to Demonstrate | Requirement ID |
|---|---|---|---|
| 1 | Landing Page | Introduce AttendQR, explain the problem, target users and click Try the Demo to open the live prototype. | FR-01 |
| 2 | User Registration & Login | Demonstrate student account registration and login. | FR-02 |
| 3 | QR Code Check-in & GPS Verification | Scan the QR code, verify GPS location, and display the attendance confirmation message. | FR-03, FR-10, FR-11 |
| 4 | Attendance History | Display the student's attendance records and attendance percentage. | FR-05 |
| 5 | Search & Filter | Demonstrate searching or filtering attendance records by course or semester. | FR-06 |
| 6 | Attendance Details | Open the attendance details popup to show the course, session, date, time, GPS verification status, and attendance status. | FR-07 |
| 7 | Lecturer Functions | Generate a QR code, monitor attendance records, attendance percentages, and automatic absent marking. | FR-08, FR-09 |
| 8 | Dashboard & Metrics | Display attendance summaries, present and absent statistics, and attendance percentages. | FR-12 |
| 9 | Requirement Traceability | Briefly explain how the implemented features satisfy the documented system requirements and MVP features. | FR-16 |

---

## 4. Evidence and Validation

- Tested with 7 participants (5 students, 2 lecturers) with a 100% task completion rate.
- Verified attendance recording using Firebase Authentication and Firestore.
- Evidence collected via testing logs and spreadsheet records (⁠user-testing-evidence.png⁠).
- User feedback resulted in several improvements, including:
  - Attendance detail popup
  - Improved lecturer dashboard
  - Landing page connected to the live prototype
  - Automatic absent marking
  - Improved GPS validation messages
  - Improved dashboard layout

## 5. Closing

AttendQR demonstrates how QR code scanning combined with GPS verification can improve attendance accuracy, reduce manual administrative work, and discourage proxy attendance. The prototype successfully validates the core MVP and provides a strong foundation for future enhancements such as report export, notifications, advanced analytics, and integration with university systems.
