# Data Structure

## Project Title

QR code attendance system with GPS verification

## 1. Main Data Entities / Tables

| Entity / Table | Purpose | Example Records |
|---|---|---|
| AttendanceLogs | Records every individual student check-in attempt via QR and GPS. | ATT-009 (Marked Present via Verified scan) |
| Courses | Stores information about the university classes/modules. | ICT-205 (The specific class the student joined) |
| Users | Stores profiles and roles for students and lecturers. | 2nd Year Student (The type of user who scanned) |

## 2. Field Definition

| Entity | Field Name | Data Type | Required? | Example Value | Validation Rule | Used For Search/Filter? |
|---|---|---|---|---|---|---|
| AttendanceLogs | log_id | Text & Numbers | Yes | ATT-009 | Unique format: Must start with "ATT-" | Yes |
| AttendanceLogs | attendance_type | Text & Numbers | Yes | Present | Only 2 choices: Present or Absent | Yes |
| AttendanceLogs | course_code | Text | Yes | ICT-205 | Must match an active university course | Yes |
| AttendanceLogs | user_role | Text | Yes | 2nd Year Student | Select student year tier from dropdown | Yes |
| AttendanceLogs | classroom | Text | Yes | ICT Lab | Name of the assigned room | No |
| AttendanceLogs | session_date | Date | Yes | 01/07/2026 | Must be written as DD/MM/YYYY | Yes |
| AttendanceLogs | logged_by | Text | Yes | Student | Only 3 choices: Student, Lecturer, System | Yes |
| AttendanceLogs | verification | Text | Yes | Verified | Only 2 choices: Verified or Rejected | Yes |
| AttendanceLogs | system-notes | Text | No | Corrected class selection and scanned successfully. | Max 250 characters text note | No |

## 3. Status Values

| Status | Meaning | Attendance Type | Who Can Update? |
|---|---|---|---|
| Verified | Everything is correct. The student is inside the classroom using their own phone. | Present | System(Auto)/Lecturer |
| Rejected | Something went wrong. Either the system caught a proxy attempt (wrong GPS/duplicate phone), or the student missed the QR window. | Absent | System(Auto) |

## 4. Sample Records

Our data includes 20 sample rows showing real student check-ins and automated blocks across different class weeks. This matches our Excel sheet exactly.

https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/data/student-attendance-list-sample-records.xlsx

## 5. Data Privacy Note

- **No continuous tracking:** The app only checks GPS coordinates for one second at the exact moment the student scans the QR code. It does not track them after class.
-  **No private info saved:** We do not collect student home addresses, personal phone numbers, or private emails. Everything uses basic school IDs.
