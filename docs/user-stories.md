# Lab 04 - User Stories and Acceptance Criteria

## User Story Format

**As a [user role], I want to [goal/action], so that [benefit/value].**

## User Stories

| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence |
| -------- | ---- | ---------- | ------------------- | -------- | ------------------- | ------------- |
| US-01 | Student | As a student, I want to scan a QR code to check in to class, so that my attendance is recorded quickly and conveniently. | **FR-03: User input or data submission feature** | Must | **Given** a valid class session is active, **when** the student scans the QR code, **then** the attendance is recorded successfully. | Student check-in screen |
| US-02 | Student | As a student, I want my location to be verified during check-in, so that attendance is only recorded when I am physically present in class. | **FR-10: Basic validation and error prevention** | Must | **Given** the student is within the approved location, **when** the QR code is scanned, **then** attendance is accepted; otherwise, it is rejected. | GPS verification screen |
| US-03 | Student | As a student, I want to receive an instant confirmation after checking in, so that I know my attendance has been successfully recorded. | **FR-11: Confirmation or feedback message** | Must | **Given** a successful check-in, **when** the process is completed, **then** the system displays a confirmation message. | Confirmation message screen |
| US-04 | Student | As a student, I want to view my attendance history and attendance percentage, so that I can monitor my attendance throughout the semester. | **FR-05: View records / information list; FR-06: Search, filter, or category function; FR-07: Detail view for each record; FR-08: Status or progress tracking** | Should | **Given** the student is logged in, **when** they open the attendance page, **then** their attendance records and percentage are displayed. | Attendance history page |
| US-05 | Lecturer | As a lecturer, I want to generate a unique QR code for each class session, so that students can check in for the correct lecture. | **FR-09: Admin or manager function** | Must | **Given** the lecturer starts a class session, **when** they create attendance, **then** a unique QR code is generated. | Lecturer dashboard |
| US-06 | Lecturer | As a lecturer, I want to view attendance records in real time, so that I can monitor student attendance without manual tracking. | **FR-12: Dashboard, summary, or simple analytics view** | Must | **Given** students are checking in, **when** the lecturer views the dashboard, **then** attendance records update automatically. | Attendance dashboard |

## Acceptance Criteria Checklist

A good acceptance criterion should be:

* Testable
* Observable in the final prototype
* Connected to a requirement
* Connected to user evidence
* Not too vague

## Rejected / Future User Stories

| Story ID | Reason for Postponing | Future Condition |
| -------- | --------------------- | ---------------- |
| US-07 | Automatic attendance notifications to students | Implement after the core attendance features are completed. |
| US-08 | Integration with the university's Learning Management System (LMS) | Implement if university API access becomes available. |
| US-09 | Face recognition for attendance verification | Consider in a future version if additional security is required. |
