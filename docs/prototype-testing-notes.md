# Prototype Testing Notes

## Test Environment
- **Prototype link or folder:** (https://attend-qr-1.netlify.app/index.html)
- **Browser/device used:** Google Chrome (Desktop) and Google Chrome (Mobile View)
- **Tester role:** Student and Lecturer
- **Test date:** _24.7.2026

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found | Fix / Next Action |
|---|---|---|---|---|---|---|---|
| T-01 | Open homepage | Open the prototype homepage | Homepage displays the project title, description, and navigation options | Homepage loaded successfully with correct layout and navigation | Pass | None | None |
| T-02 | Student QR Check-in | Log in as a student, scan the QR code, and complete GPS verification | Attendance is successfully submitted and a confirmation message appears | Confirmation page displayed after successful QR scan and GPS verification | Pass | None | None |
| T-03 | View attendance records | Open the attendance history page | Attendance records are displayed correctly | Attendance history displayed using sample data | Pass | None | None |
| T-04 | Search/filter attendance | Filter attendance records by course or date | Matching attendance records are displayed | Search and filtering worked correctly | Pass | None | None |
| T-05 | Attendance detail view | Select an attendance record | Detailed attendance information should be displayed | Detail page is not yet fully implemented | Partial | Attendance detail modal/page is incomplete | Complete the attendance detail view with submission time and GPS validation information |
| T-06 | Lecturer dashboard | Open the lecturer dashboard and generate a QR session | QR session is generated and attendance information is displayed | Dashboard functions operated correctly | Pass | None | None |
| T-07 | Dashboard summary | View dashboard statistics | Attendance summary and statistics are displayed correctly | Dashboard summary displayed using sample attendance data | Pass | None | None |

## Summary of Issues

- Attendance detail page (FR-07) is still under development.
- GPS validation radius may require adjustment to improve location accuracy inside classrooms.
- Dashboard currently uses sample data because the prototype does not include a backend database.

## Improvements Completed During Lab 11

- Completed homepage and navigation improvements.
- Improved QR code scanning workflow and confirmation page.
- Added attendance history search and filtering.
- Improved responsive layout for mobile devices.
- Updated prototype screenshots and implementation documentation.
- Updated README and supporting project documents.
- Refer to GitHub Issues **#50**, **#51**, **#52**, and **#53** and the corresponding commits for implementation evidence.
