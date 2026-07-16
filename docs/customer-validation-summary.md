# Lab 08 - Customer Validation Summary

## 1. Project Title

QR Code Attendance System with GPS Verification

---

## 2. Prototype Tested

The team tested a clickable web prototype that simulates the attendance workflow for both students and lecturers.

- **Prototype version:** v1
- **Prototype link or screenshot location:** [Prototype Folder](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/tree/7790fa919e966281ee2b02e142e2af5bc85598a0/prototype)
- **Main task tested:**
  - Student login
  - QR code check-in workflow
  - GPS verification
  - Attendance confirmation
  - Attendance history
  - Attendance percentage
  - Lecturer login
  - QR code generation
  - Lecturer dashboard
- **Related requirements from `system-requirements.md`:**
  FR-01, FR-02, FR-03, FR-05, FR-06, FR-07, FR-08, FR-09, FR-10, FR-11, FR-12

---

## 3. Test Users

| Test User ID | User Role | Why this user is relevant |
|---|---|---|
| TU-01 | Student | Tests the student login process. |
| TU-02 | Student | Tests the complete QR check-in workflow. |
| TU-03 | Student | Tests attendance history and attendance details. |
| TU-04 | Student | Tests attendance percentage tracking. |
| TU-05 | Student | Tests the complete student navigation workflow. |
| TU-06 | Lecturer | Tests lecturer login and management access. |
| TU-07 | Lecturer | Tests QR code generation and attendance dashboard. |

---

## 4. Validation Method

The team conducted moderated usability testing using a clickable web prototype. Each participant completed assigned tasks independently while the team observed task completion, completion time, ease of use, usefulness, confusion points, and overall feedback.

- **Testing method:** Moderated usability testing
- **Date/time:** 20–22 July 2026
- **Location or online platform:** Rangsit University
- **Number of testers:** 7
- **Data collected:**
  - Task completion
  - Completion time
  - Ease of use score
  - Usefulness score
  - Confusion points
  - Interest level
  - User comments
  - MVP validation signal

---

## 5. Summary of Results

| Metric | Result | Interpretation |
|---|---:|---|
| Total test users | 7 | Five students and two lecturers tested the prototype. |
| Task success rate | 100% (7/7) | Every participant successfully completed the assigned task. |
| Average feedback score | 4.43 / 5 | Users found the prototype easy to understand and use. |
| Average interest level | 4.43 / 5 | Participants showed strong interest in using the system. |
| Most common confusion point | QR scanning and GPS verification | Users understood the workflow but noted that these features were only simulated in the prototype. |

---

## 6. Key User Comments

- Students found the login process simple and easy to understand.
- The attendance history and attendance details were clear and easy to read.
- Attendance percentage was displayed clearly.
- The navigation flow was intuitive.
- Users understood the QR code check-in process, although QR scanning and GPS verification were only simulated.
- Lecturers found QR code generation and the attendance dashboard easy to use.
- The lecturer login provided quick access to attendance management features.

---

## 7. Affected Requirements

| Requirement ID | Evidence Found | Required Prototype Improvement |
|---|---|---|
| FR-02 | Students successfully completed the navigation workflow. | Maintain the current navigation flow. |
| FR-03 | QR code scanning is currently simulated. | Implement actual QR code scanning functionality. |
| FR-08 | Attendance percentage was easy to understand. | No major changes required. |
| FR-09 | Lecturers successfully generated QR codes. | Maintain the current workflow. |
| FR-10 | GPS verification is currently simulated. | Integrate real GPS location verification. |
| FR-11 | Confirmation messages were clear after attendance submission. | Keep the confirmation screen with additional attendance details if needed. |
| FR-12 | Lecturers found the dashboard useful and easy to use. | Consider adding more attendance analytics in future versions. |

---

## 8. Conclusion

The MVP is **validated with minor improvements required**. All participants successfully completed their assigned tasks, demonstrating that the core attendance workflow is understandable and easy to use. The main limitation identified was that QR code scanning and GPS verification are currently simulated. The next prototype iteration should focus on implementing these functions while maintaining the existing user interface and navigation.
