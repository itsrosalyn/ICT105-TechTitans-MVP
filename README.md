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

# Lab 06 Update - Business Model Canvas and Technical Architecture

## Lab 06 Summary

In Lab 06, our group refined the business and technical foundation of the QR Code Lecture Attendance System with GPS Verification. We connected the identified problem, system requirements, MVP features, user stories, wireframes, and technical architecture into a complete prototype plan. This work provides a clear roadmap for implementing and demonstrating the final prototype. 

## Files Added or Updated

- [Business Model Canvas](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/d47e7da4faaeb9ac3137d9ed6191513b11c2f66e/docs/business-model-canvas.md)

- [Feature-Value Mapping](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/12d77981fd30eace3d2a2c510642af12308d5a9b/docs/feature-value-mapping.md)

- [Technical Architecture](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/12d77981fd30eace3d2a2c510642af12308d5a9b/docs/technical-architecture.md)

- [Data Structure](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/12d77981fd30eace3d2a2c510642af12308d5a9b/docs/data-structure.md) 

- [System Architecture Diagram](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/12d77981fd30eace3d2a2c510642af12308d5a9b/diagrams/system-architecture.mmd) 

- [Data Flow Diagram](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/12d77981fd30eace3d2a2c510642af12308d5a9b/diagrams/data-flow.mmd)

- [Weekly Logbook](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/20bb1dbffdc0cff54f28c675ce01a024c88bfa62/docs/weekly-logbook.md)


## Technical Direction

Our final prototype will use a database-backed web architecture built with HTML, CSS, and JavaScript. The prototype will also use the browser's Geolocation API to verify student locations during attendance check-in and a QR code library to generate and scan QR codes. 

## Final Prototype Connection

The outputs from Lab 06 serve as the blueprint for the final prototype. The Business Model Canvas defines the project's value proposition and stakeholders, while the Feature-Value Mapping ensures that every MVP feature delivers user and operational value. The Technical Architecture, Data Structure, System Architecture Diagram, and Data Flow Diagram provide implementation guidance for the frontend, database, and system interactions. Together, these documents ensure that every screen, user story, and functional requirement can be traced directly to the final working prototype.

## Lab 07: MVP Experiment Design

### Experiment Objective
To evaluate whether the clickable QR Code Attendance System with GPS Verification helps students and lecturers complete the attendance process efficiently and accurately. The experiment aims to validate the usability, effectiveness, and feasibility of the proposed workflow before further development.

### Critical Assumptions
1. Students need a faster and more convenient attendance check-in process than manual attendance.
2. QR code check-in with GPS verification will reduce proxy attendance and improve attendance accuracy.
3. Students can easily complete the QR scanning, GPS verification, and attendance confirmation process without assistance.

### MVP Experiment Type
Simple Web Prototype (HTML, CSS, and JavaScript)

A clickable web prototype was selected because it allows students and lecturers to experience the complete attendance workflow—including login, QR code generation, QR code scanning, GPS verification, attendance confirmation, attendance history, and the lecturer dashboard—without requiring a fully implemented backend database.

### Success Metrics
* At least 80% of participants successfully complete the attendance check-in workflow.
* Average usability rating of 4.0/5 or higher.
* Average interest level of 4.0/5 or higher.
* At least 80% of participants can complete the main tasks without assistance.
* User feedback identifies only minor usability issues and confirms that the workflow is easy to understand.

### Files Added in Lab 07
- [/docs/mvp-experiment-plan.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/397e1c08579790b7774762ebe0179d38c94f016d/docs/mvp-experiment-plan.md)
- [/docs/critical-assumptions.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/397e1c08579790b7774762ebe0179d38c94f016d/docs/critical-assumptions.md)
- [/docs/experiment-script.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/397e1c08579790b7774762ebe0179d38c94f016d/docs/experiment-script.md)
- [/docs/success-metrics.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/397e1c08579790b7774762ebe0179d38c94f016d/docs/success-metrics.md)
- [/docs/feedback-form.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/397e1c08579790b7774762ebe0179d38c94f016d/docs/feedback-form.md)
- [/docs/weekly-logbook.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/e393be4a177456aa43e9cbbd1dbea9f621935027/docs/weekly-logbook.md)
- [/prototype/mvp-demo-link.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/e393be4a177456aa43e9cbbd1dbea9f621935027/prototype/mvp-demo-link.md)
- [/data/experiment-results.csv](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/e393be4a177456aa43e9cbbd1dbea9f621935027/data/experiment-results.csv)
- [/screenshots](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/tree/e393be4a177456aa43e9cbbd1dbea9f621935027/screenshots)

### Connection to Final Prototype
EThe MVP experiment will provide evidence on whether the proposed attendance workflow is easy to use and addresses the identified user problems. Feedback from students and lecturers will be used to improve the QR code scanning process, GPS verification, attendance history, dashboard, and overall user interface before developing the final prototype. The experiment results will also help determine whether the current design should be continued or revised based on user validation.

# README Update - Lab 08

## Lab 08: Customer Validation and Analytics Sheet

### Validation Objective

Our team conducted moderated usability testing to validate whether students can successfully navigate the automated QR code check-in flow and GPS location verification parameters without external assistance. Additionally, we tested whether lecturers can seamlessly generate session QR codes and monitor attendance metrics via the admin dashboard backend to effectively mitigate proxy attendance cheating.

### Prototype Version Tested
- Version: v1
- Link: [Prototype Link](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/tree/main/prototype)
- Screenshots:
<img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/login-page.png" width="100%" />
<img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/home-page.png" width="100%" />
<img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/scanqr-page.png" width="100%" />
<img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/gpscheck-page.png" width="100%" />
<img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/confirmation-page.png" width="100%" />
<img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/records-page.png" width="100%" />
<img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/lecturer-dashboard.png" width="100%" />
<img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/qr-generation.png" width="100%" />
<img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/lab08-powerbi-dashboard.png" width="100%" />

### Analytics Summary
| Metric | Result |
|---|---:|
| Total test users | 7 (5 Students / 2 Lecturers) |
| Task success rate | 100% (7/7 Users Successfully Completed Tasks) |
| Average feedback score | 4.43 / 5 (Ease of Use Score) |
| Average interest level | 4.43 / 5 (High adoption interest) |
| Main confusion point | QR code scanning and GPS verification pages were only simulated |

### MVP Decision

Continue with Minor Revisions: The core navigation paths, role selection structures, and dashboard visibility achieved high success ratings and interest levels. However, because the QR scanning engine and physical GPS coordinates checking were only simulated in this prototype phase, the team will transition these modules from static screens into live-coded functional APIs (using ⁠html5-qrcode⁠ and HTML5 Geolocation API) before the next lab evaluation.

### Files Added
- [/data/validation-results.xlsx](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/data/validation-results-analytics.xlsx)
- [/data/validation-results.csv](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/data/validation-results.csv)
- [/docs/customer-validation-summary.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/docs/customer-validation-summary.md)
- [/docs/analytics-insights.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/docs/analytics-insights.md)
- [/docs/mvp-decision.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/docs/mvp-decision.md)
- [/screenshots/validation-test-screens.png](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/tree/main/screenshots)
- [/docs/weekly-logbook.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/docs/weekly-logbook.md)

## Lab 09 - Responsible IT Check

### Responsible Design Summary
During Lab 09, our team reviewed the prototype from a responsible IT perspective by evaluating privacy, ethics, intellectual property, and basic security. We identified potential risks related to attendance data privacy, GPS location verification, QR code misuse, and unauthorized access. Appropriate documentation and mitigation strategies were prepared to ensure the prototype follows responsible IT practices while collecting only the minimum data required for attendance verification.

### Files Added
- [/docs/legal-ethical-checklist.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/9c0b1b81cc64b572a3f647ad923304157f5e6c3d/docs/legal-ethical-checklist.md)
- [/docs/privacy-and-data-protection.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/9c0b1b81cc64b572a3f647ad923304157f5e6c3d/docs/privacy-and-data-protection.md)
- [/docs/data-handling-policy.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/9c0b1b81cc64b572a3f647ad923304157f5e6c3d/docs/data-handling-policy.md)
- [/docs/ip-and-third-party-assets.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/9c0b1b81cc64b572a3f647ad923304157f5e6c3d/docs/ip-and-third-party-assets.md)
- [/docs/security-risk-check.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/9c0b1b81cc64b572a3f647ad923304157f5e6c3d/docs/security-risk-check.md)
- [/docs/risk-register.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/9c0b1b81cc64b572a3f647ad923304157f5e6c3d/docs/risk-register.md)
- [/docs/user-consent-statement.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/9c0b1b81cc64b572a3f647ad923304157f5e6c3d/docs/user-consent-statement.md)

### Requirement Update
No changes were made to [system-requirements.md](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/8b99c614af57a90cf083d7d286a46d8719ecda06/docs/system-requirements.md) after the Lab 09 review. The team concluded that the existing functional requirements remain appropriate, and the identified improvements relate to implementation rather than changes to the system requirements.

### Team Contributions

| Member | Contribution |
|---|---|
| **Thun Thiri Khin** | Prepared the intellectual property and third-party assets documentation and ensured proper management of external assets and project data. |
| **Pan Thway Chal Ko Ko Lwin** | Conducted the security and risk assessment by preparing the security review and identifying potential risks and mitigation strategies for the prototype. |
| **Mya Hninsi Phyu** | Prepared the legal, ethical, and privacy documentation to ensure the prototype follows responsible IT practices and data protection principles. |
| **Phoo Myat Thwin** | Updated the project README, prepared the user consent statement, and completed the Lab 09 weekly logbook. |

# README Update Template - Lab 10

## Lab 10 - MVP Implementation Sprint 1

### Sprint Goal
Our goal in Lab 10 is to begin building the first working version of the prototype based on the approved requirements, wireframes, architecture, and responsible-design checks.

### Implementation Approach
- **Platform/tools:** HTML, CSS, JavaScript, Firebase, QR Code library, Geolocation API
- **Backend status:** Firebase backend implemented for authentication and attendance data management
- **Data storage/simulation:** Firebase Firestore (real-time attendance records and user data)
- **Prototype link or folder:** GitHub Repository: https://github.com/itsrosalyn/ICT105-TechTitans-MVP

| Feature                             | Requirement ID | Status        | Evidence                                               |
| ----------------------------------- | -------------- | ------------- | ------------------------------------------------------ |
| Homepage / Login                    | FR-01          | ✅ Implemented | [/prototype/index.html](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/8b99c614af57a90cf083d7d286a46d8719ecda06/prototype/index.html), [/prototype/home-page.html](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/8b99c614af57a90cf083d7d286a46d8719ecda06/prototype/home-page.html) |
| QR Code Check-in & GPS Verification | FR-03          | ✅ Implemented | [/prototype/scanqr-page.html](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/8b99c614af57a90cf083d7d286a46d8719ecda06/prototype/scanqr-page.html), [/prototype/gpscheck-page,html](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/8b99c614af57a90cf083d7d286a46d8719ecda06/prototype/gpscheck-page.html)|
| Attendance History                  | FR-05          | ✅ Implemented | [prototype/records-page.html](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/8b99c614af57a90cf083d7d286a46d8719ecda06/prototype/records-page.html)                       |
| Attendance Search / Filter          | FR-06          | ✅ Implemented | [prototype/records-page.html](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/8b99c614af57a90cf083d7d286a46d8719ecda06/prototype/records-page.html)     |
| Attendance Details                  | FR-07          | ✅ Implemented | [prototype/records-page.html](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/8b99c614af57a90cf083d7d286a46d8719ecda06/prototype/records-page.html) |
| Attendance Status Tracking       | FR-08          | ✅ Implemented |[prototype/confirmation-page.html](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/8b99c614af57a90cf083d7d286a46d8719ecda06/prototype/confirmation-page.html)  |
| Lecturer Attendance Management      | FR-09          | ✅ Implemented | [prototype/qr-generation.html](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/8b99c614af57a90cf083d7d286a46d8719ecda06/prototype/qr-generation.html)     |
| Lecturer Dashboard                  | FR-12          | ✅ Implemented | [prototype/lecturer-dashboard.html](https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/8b99c614af57a90cf083d7d286a46d8719ecda06/prototype/lecturer-dashboard.html)|


### Screenshots
- **Home page**
  <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/home-page.png" width="100%" />
- **Input-form**
  <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/login-page.png" width="100%" />
- **Record-list**
  <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/records-page.png" width="100%" />
- **Detail view**
  <img width="1280" height="727" alt="Firebase data" src="https://github.com/user-attachments/assets/980f35cb-f369-4ed7-b728-7ae88f62b334" />
- **Admin view**
  <img src="https://github.com/itsrosalyn/ICT105-TechTitans-MVP/blob/main/screenshots/lecturer-dashboard.png" width="100%" />

### Team Contribution
All group members contributed to the same GitHub repository/page.
