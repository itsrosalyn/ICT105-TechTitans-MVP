# Lab 04 Practice Case Brief
## QR Code Attendance System with GPS Verification

### Context
Lecturers often spend valuable class time recording attendance manually, while students may be able to engage in proxy attendance by asking others to check in on their behalf. Manual attendance management also makes it more difficult for lecturers to monitor attendance records and calculate attendance percentages efficiently.

### Problem from Lab 03 Evidence
The main evidence pattern is that the current attendance process is time-consuming, vulnerable to proxy attendance, and lacks an efficient digital system for recording, verifying, and monitoring attendance.

### Practice Goal for Lab 04
In this practice case, the team will transform the evidence into:
- a target user;
- a user persona;
- functional and non-functional requirements;
- user stories with acceptance criteria;
- MVP feature prioritization;
- simple user flow and use case diagram;
- a traceability link from evidence to final prototype deliverables.

# Lab 05 Practice Case Brief: QR code attendance system with GPS verification

## Case Context

Taking attendance manually or passing around a sign-in sheet wastes valuable class time. It also makes it very easy for students to cheat by signing in for their absent friends (proxy attendance), which makes tracking university attendance rules difficult.
## Target Users

- **Students:** Need a quick way to check into class using their smartphones.
- **Lecturers:** Need an easy way to show a QR code, stop proxy cheating, and see who is actually in class.

## Product Direction

The project is a simple attendance web app built with HTML, CSS, JavaScript.
- **Students** use their phones to scan a classroom QR code and share their GPS location to prove they are in the room.
- **Lecturers** use a dashboard to create the QR codes and automatically track if students are hitting the mandatory 80% attendance rule.

# Lab 06 Practice Case Brief

## Case: QR code attendance system with GPS verification

Manual sign-in sheets waste class time and enable proxy cheating, making it difficult to enforce university attendance rules.

## Target Users

- **Students:** Use smartphones for quick check-ins.
- **Lecturers:** Generate codes, stop cheating, and track live presence.

## Product Direction

A web-based prototype (HTML, CSS, JavaScript) allowing students to scan a QR code and share GPS data to prove presence, while letting lecturers track the mandatory 80% attendance rule via a dashboard.

# Lab 07 Case Study Brief: QR Code Attendance System with GPS Verification

## Problem Context
Manual attendance recording in classrooms is time-consuming and vulnerable to proxy attendance, where students ask others to sign in on their behalf. Lecturers also spend additional time managing attendance records manually.

## Practice Purpose
This case is used to validate the team's MVP concept before full implementation. The team aims to evaluate whether the proposed attendance workflow is easy to understand and whether the prototype interface supports users in completing the intended tasks.

## Example MVP Experiment Direction
The team wants to test whether students can understand the attendance workflow from login to attendance confirmation and whether lecturers can easily navigate the QR code generation and attendance dashboard screens using a clickable web prototype.

## Example Critical Assumption
Students and lecturers will find a QR code attendance system with GPS verification easier and more convenient than manual attendance, and they can understand the proposed workflow through a clickable prototype before the QR scanning and GPS verification features are fully implemented.

## Example Experiment Type
Clickable web prototype developed using HTML, CSS, and JavaScript.

# Lab 08 Case Study Brief - QR Code Attendance System with GPS Verification

## Case Context
Manual attendance recording in classrooms is time-consuming and vulnerable to proxy attendance. Lecturers also spend additional time recording attendance and calculating attendance percentages manually. The proposed system aims to improve the attendance process using QR codes and GPS verification.

## MVP Experiment
The practice MVP experiment tests whether users can:
1. Log in to the system.
2. Navigate the student attendance workflow.
3. Understand the QR code check-in and GPS verification process through the clickable prototype.
4. View attendance history and attendance percentage.
5. Generate a QR code and access the lecturer attendance dashboard.

## Validation Goal
The goal is to learn whether the proposed attendance workflow is understandable, useful, and worth continuing before the final prototype implementation. The experiment focuses on validating the user interface and workflow rather than the fully implemented QR scanning and GPS verification features.

## Practice Data
Use the provided sample dataset:
- [/data/validation-results.csv](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/24097c081e5be53b6c2b0dfed6a2c5c9a5655054/data/validation-results.csv)
- [/data/validation-results-analytics.xlsx](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/24097c081e5be53b6c2b0dfed6a2c5c9a5655054/data/validation-results-analytics.xlsx)

## Student Group Task
After completing the MVP experiment, the team will analyze the validation results, identify usability issues, and use the findings to improve the prototype before implementing the complete QR code scanning and GPS verification functions.

# Lab 09 Case Study Brief: QR Code Attendance System with GPS Verification

## Problem Context
Manual attendance recording is time-consuming and can lead to proxy attendance, where students ask others to record attendance on their behalf. Lecturers also spend additional time managing attendance records and calculating attendance percentages manually.

## Proposed Prototype
A web-based attendance prototype where students can log in, access the attendance workflow, view attendance history and attendance percentage, while lecturers can generate QR codes, manage attendance sessions, and monitor attendance records through a dashboard. QR code scanning and GPS verification are planned features that will be fully implemented in later development stages.

## Responsible IT Focus for Lab 09
Students must review what attendance data is collected, determine whether personal information is necessary, ensure users understand how their data is used, properly acknowledge third-party assets (such as Firebase and external libraries), and verify that lecturer/admin functions are clearly separated from student functions to protect attendance records.

# Lab 10 Case Study Brief: QR Code Attendance System with GPS Verification

## Practice Purpose
This case is used only for Lab 10 guided practice. Students must apply the same implementation process to their own selected group case.

## Problem Context
Manual attendance recording in classrooms is time-consuming and may allow proxy attendance, where students ask others to record attendance on their behalf. Lecturers also spend additional time managing attendance records and calculating attendance percentages manually.

## Target Users
- Students who record attendance during class
- Lecturers who create attendance sessions, generate QR codes, and monitor attendance records

## Minimum Prototype Idea
A web-based attendance system that allows students to log in, scan a QR code, verify their location using GPS, record attendance, view attendance history and attendance percentage, and allows lecturers to generate QR codes, create attendance sessions, and monitor attendance records through a dashboard.

## Practice Note
The prototype is developed using HTML, CSS, JavaScript, and Firebase for user authentication and attendance data storage. QR code scanning and GPS location verification are implemented to support attendance recording, while Firebase stores and manages attendance records in real time.
