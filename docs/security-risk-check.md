# Basic Security Risk Check

| Area | Risk Question | Current Status | Risk Level | Mitigation | Owner |
|---|---|---|---|---|---|
| Form input | Can incomplete or invalid data be submitted? | Users must log in with a valid email and password through Firebase Authentication before accessing the system. | Low | Use form validation and Firebase Authentication to reject invalid login attempts and incomplete data. | Development Team |
| Admin function | Can normal users access admin actions? | Student and lecturer accounts have separate roles. Only lecturers can generate QR codes and access lecturer dashboard functions. | Low | Implement role-based access control and restrict lecturer features to authorized lecturer accounts only. | Development Team |
| Data display | Is private information visible to everyone? | Students can only view their own attendance history. Lecturer data and other students' records are not accessible. | Low | Apply Firestore security rules to restrict data access based on authenticated user roles and IDs. | Development Team |
| Status update | Can records be edited without control? | Students cannot edit attendance records after submission. Attendance management is limited to authorized lecturers. | Low | Restrict record modification permissions through Firestore security rules and role validation. | Development Team |
| Public links | Does a public link expose data that should be private? | QR codes are generated per session, have a time limit, and attendance requires GPS verification. | Medium | Use unique session-based QR codes, expiration timers, GPS verification, and authenticated attendance submission. | Development Team |
| File upload | If used, can unsafe or unrelated files be uploaded? | No file upload feature is included in the MVP. | Low | Keep file uploads disabled in the current version of the system. | Development Team |

## Security Decision

**Continue with mitigation**

The system already includes several security controls, including Firebase Authentication, role-based access control, Firestore security restrictions, unique time-limited QR codes, and GPS verification. The primary remaining risk is QR code sharing, which is reduced through session expiration and location verification. No redesign is required for the MVP.
