# Legal and Ethical Checklist

## Project Title

QR Code Attendance System with GPS Verification

## Ethical Review

| Check Item | Yes/No | Evidence / Notes | Mitigation Action | Owner | GitHub Issue/Commit |
|---|---|---|---|---|---|
| Users are informed about the purpose of the prototype. | Yes | A user consent statement explains the purpose of the prototype, voluntary participation, and how the collected data will be used. | Display the consent statement before users begin testing. | Phoo Myat Thwin | [Issue #46](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/issues/49) |
| The prototype avoids misleading claims. | Yes | The prototype clearly demonstrates QR code generation, while QR scanning and GPS verification are identified as prototype or simulated features during testing. | Continue informing users about prototype limitations until the full implementation is completed. | Mya Hninsi Phyu | [Issue #47](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/issues/47) |
| The prototype does not collect unnecessary sensitive data. | Yes | Only essential attendance-related information (student ID or nickname, user role, attendance result, and feedback) is collected using Firebase. | Continue following the data minimization principle and avoid collecting unnecessary personal information. | Mya Hninsi Phyu | [Issue #47](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/issues/47) |
| Users can understand what happens after submission. | Yes | The system displays a confirmation message after attendance is successfully recorded, and the workflow is explained in the prototype. | Maintain clear confirmation and feedback messages throughout the attendance process. | Phoo Myat Thwin | [Issue #46](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/issues/49) |
| Admin or manager actions are clearly separated from user actions. | Yes | Student and lecturer accounts have separate login pages, permissions, and interfaces. Only lecturers can generate QR codes and access the attendance dashboard. | Maintain role-based access control and review permissions before deployment. | Pan Thway Chal Ko Ko Lwin | [Issue #48](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/issues/48) |
| The prototype avoids unfair or harmful treatment of users. | Yes | The same attendance verification process and rules apply to all students. Data inventory and third-party assets are reviewed to ensure responsible data use. | Continue reviewing data handling practices and third-party assets to support fair and ethical use of the system. | Thun Thiri Khin | [Issue #49](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/issues/49) |

## Summary Decision

- **Safe to continue:** **Yes**

- **Required revision before implementation:**
  - Complete the QR code scanning functionality.
  - Implement actual GPS verification instead of the current prototype selection.
  - Review Firebase Security Rules before deployment.
  - Add a privacy notice explaining the data collected and its purpose.
