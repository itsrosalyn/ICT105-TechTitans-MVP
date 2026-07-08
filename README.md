# ICT105-TechTitans-MVP

## Course Information 
Course Code: ICT105

Course Name: Fundamental Technology Entrepreneurship 

Instructor: Dr. Herison Surbakti 

Project Type: 14-Labs Continuous IT Startup MVP Development 
## Team Name 
Tech Titans
## Team Members and Roles
| Name | Role | Responsibility | 
|---|---|---| 
| Thun Thiri Khin | Product Lead | Defines problem, target users, value proposition and project direction, maintains README |
| Pan Thway Chal Ko Ko Lwin | Technical Lead | Manages prototype development, repository structure, and technical feasibility, maintains weekly logbook | 
| Mya Hninsi Phyu | UX/UI Lead | Design wireframes, user flow, and interface screens,  maintains report files | 
| Phoo Myat Thwin | Validation Lead | Manages customer discovery survey/interview evidence and metric collection, maintains final submission package | 
## Initial Problem Area
Lecturers spend valuable class time taking attendance manually, and paper-based attendance records are time-consuming and prone to errors or proxy attendance.
## Target Users
University students, lecturers, university administrators and staff.
## Initial IT Venture Direction
A web-based application that allows lecturers to generate a unique QR code for each class session. Students scan the QR code to register their attendance, while the system verifies their location using GPS to ensure they are physically present at the lecture venue. Lecturers can monitor attendance records and generate reports in real time.
## Technology Possibility
Possible technologies:
- Web application
- Mobile application
- Dashboard system
- Cloud-based system
- Cybersecurity tool
- QR code generation and scanning
- GPS/Location-based verification
## Repository Structure
- docs: reports, profiles, idea logs, and weekly logbooks
- prototype: source code or clickable prototype files
- data: survey responses, validation data, and metrics
- finance: financial assumptions and model
- diagrams: user flow and technical architecture diagrams
- screenshots: evidence of prototype and repository progress
- pitch: pitch deck and final demo files

## Weekly Progress Log
| Lab | Main Activity | Output | Status | 
|---|---|---|---| 
| Lab 1 | Lab setup and idea log | Repository, team profile, initial idea log | Completed |
| Lab 2 | IT Opportunity Scanning and NUF Evaluation | Opportunity scan, NUF scoring sheet, selected project idea | Completed |
| Lab 3 | Customer Problem Discovery | Target respondents, customer discovery questions, interview/survey evidence, problem findings | Completed |

## Customer Problem Discovery Summary

In Lab 03, our team collected feedback from ICT students and lecturers at Rangsit University to validate the attendance management problem. The findings showed that attendance checking takes class time, requires manual effort, and remains vulnerable to proxy attendance. The evidence confirmed that this is a recurring problem worth solving.

## Target Respondents

The team collected feedback from:

* 18 ICT students at Rangsit University
* 3 ICT lecturers at Rangsit University

These respondents were selected because they are directly involved in classroom attendance processes and experience the challenges associated with current attendance methods.

## Main Evidence Found

Students and lecturers reported that attendance checking consumes lecture time and often requires manual effort. Proxy attendance remains a concern, while lecturers spend additional time organizing and correcting attendance records. Students also reported difficulty tracking their attendance status and confirming whether attendance had been successfully recorded.

Current workarounds include QR-code attendance forms, verbal roll calls, paper sign-in sheets, and spreadsheet-based tracking. Respondents described these methods as time-consuming and prone to errors.

## Updated Problem Statement

Current attendance processes rely on manual or semi-digital methods that interrupt lecture flow and reduce efficiency. These methods are vulnerable to proxy attendance, inaccurate records, and increased administrative workload. Students also have limited visibility of their attendance status.

## Decision for Next Step

Our team will define the primary customer segments for the Attendance Check System, including students and lecturers. We will create user personas based on the customer discovery findings and develop user stories that describe how each user group will interact with the system. These user stories will help guide the design and development of the system's features and functionality.

# Lab 04: User Persona, Requirements, and User Stories

### Primary Target User

ICT students at Rangsit University who use QR-code attendance systems and need a fast, accurate, and secure way to verify their attendance while preventing proxy attendance.

### Persona Summary

* **Persona name:** Nara, Year 1 ICT Student
* **User type:** University student who regularly uses QR-code attendance systems
* **Main goal:** Check in to class quickly, receive confirmation, and monitor attendance records
* **Main pain point:** Current QR attendance systems do not verify physical presence and can allow proxy attendance
* **Current workaround:** Using standard QR-code attendance forms and relying on lecturers to manually correct attendance issues

### Key Requirements

| Req ID | Requirement                                                                       | Priority | Related Evidence                        |
| ------ | --------------------------------------------------------------------------------- | -------- | --------------------------------------- |
| FR-01  | Students can scan a QR code to record attendance                                  | Must     | F01 – Web-Based Code Scanner            |
| FR-02  | System verifies attendance using GPS geofencing before check-in is accepted       | Must     | R011 – No location verification         |
| FR-03  | System displays an instant success or failure message after attendance submission | Must     | R007, R012 – No confirmation message    |
| FR-04  | Students can view attendance history and attendance percentage                    | Should   | R021 – No attendance tracking view      |
| FR-05  | Lecturers can generate a unique QR code for each class session                    | Must     | F05 – Dynamic QR Code Generation        |
| FR-06  | Lecturers can monitor attendance records through a real-time dashboard            | Must     | F06 – Lecturer Roster Dashboard         |
| NFR-01 | Attendance verification should complete within a few seconds                      | Must     | Need for fast classroom check-in        |
| NFR-02 | The system must be mobile-friendly for smartphone users                           | Must     | Students use smartphones for attendance |
| NFR-03 | Attendance data should be stored securely and accurately                          | Must     | Reliable attendance records required    |

### MVP Feature Scope

| Feature                               | Priority | Included in Final Prototype? |
| ------------------------------------- | -------- | ---------------------------- |
| Web-Based QR Code Scanner             | Must     | Yes                          |
| GPS Geofencing Location Verification  | Must     | Yes                          |
| Instant Check-In Feedback Messages    | Must     | Yes                          |
| Dynamic QR Code Generation            | Must     | Yes                          |
| Real-Time Lecturer Roster Dashboard   | Must     | Yes                          |
| Student Attendance History View       | Should   | Yes                          |
| Automated Status Notifications        | Could    | No                           |
| LMS Integration (University API Link) | Won't    | No                           |
| Biometric Facial Recognition Check    | Won't    | No                           |

### Diagram Links

* [User flow diagram](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/39edf21b8c10303d5bccdaa8ffe3c8238c3b69b1/diagrams/user-flow.png)
* [Use case diagram](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/39edf21b8c10303d5bccdaa8ffe3c8238c3b69b1/diagrams/use-case-diagram.png)

### GitHub Contribution Evidence

All members contributed to the repository through commits, issue discussions, feature implementation, documentation updates, and pull requests. Contribution evidence can be verified through the GitHub commit history and repository activity.

## Lab 05: Product Concept and UI/UX Wireframe

### Product Concept

The **QR Code Attendance System with GPS Verification** is a web-based attendance management system designed for ICT students and lecturers at Rangsit University. The system allows lecturers to generate a unique QR code for each class session, while students scan the QR code and verify their GPS location to record attendance. This approach reduces lecture time spent on attendance, prevents proxy attendance, and provides accurate, real-time attendance records for both students and lecturers.

### Requirement-Driven Screens

| Screen | Related Requirement IDs | Wireframe File |
|---|---|---|
| Login / Role Selection | **FR-01, FR-02** | [/wireframes/login-page.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/b7cbde5e9e0a651aee9c129dd18aa63f33ee21e6/wireframes/login-page.png) |
| Homepage / Landing | **FR-01, FR-02** | [/wireframes/home-page.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/b7cbde5e9e0a651aee9c129dd18aa63f33ee21e6/wireframes/home-page.png) |
| Student QR Code Check-in | **FR-03, FR-10** | [/wireframes/scanqr-page.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/b7cbde5e9e0a651aee9c129dd18aa63f33ee21e6/wireframes/scanqr-page.png) |
| GPS Location Verification | **FR-03, FR-10** | [/wireframes/gpscheck-page.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/b7cbde5e9e0a651aee9c129dd18aa63f33ee21e6/wireframes/gpscheck-page.png) |
| Attendance Confirmation | **FR-11** | [/wireframes/confirmation-page.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/b7cbde5e9e0a651aee9c129dd18aa63f33ee21e6/wireframes/confirmation-page.png) |
| Student Attendance History | **FR-05, FR-06, FR-07, FR-08** | [/wireframes/records-page.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/b7cbde5e9e0a651aee9c129dd18aa63f33ee21e6/wireframes/records-page.png) |
| Lecturer QR Code Generation | **FR-09** | [/wireframes/qr-generation.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/b7cbde5e9e0a651aee9c129dd18aa63f33ee21e6/wireframes/qr-generation.png) |
| Lecturer Dashboard | **FR-05, FR-06, FR-09, FR-12** | [/wireframes/lecturer-dashboard.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/b7cbde5e9e0a651aee9c129dd18aa63f33ee21e6/wireframes/lecturer-dashboard.png) |
### User Flow

The user flow begins with a user selecting either the **Student** or **Lecturer** role on the login screen. Students log in, scan the QR code, verify their GPS location, receive an attendance confirmation, and can view their attendance history. Lecturers log in to create attendance sessions, generate QR codes, monitor attendance records in real time, and view attendance summaries.

[User Flow Diagram](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/39edf21b8c10303d5bccdaa8ffe3c8238c3b69b1/diagrams/user-flow.png)

  

### Team Contribution

All team members contributed to the same GitHub repository throughout Lab 05.

- **Thun Thiri Khin** – Created case study brief and data file for student attendance list
- **Pan Thway Chal Ko Ko Lwin** – Created  wireframe designs, wireframe usability checklist and feature-requirement mapping.
- **Mya Hninsi Phyu** – Prepared the screen inventory checklist and wireframe specification
- **Phoo Myat Thwin** – Prepared the product concept, updated the README, and completed the weekly logbook.
