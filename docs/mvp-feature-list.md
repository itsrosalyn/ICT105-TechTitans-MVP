# Lab 04 - MVP Feature List

## MVP Decision Rule
The MVP should include the smallest set of features that can demonstrate the core problem-solution fit by the end of the semester.

## MoSCoW Prioritization

| Feature ID | Feature Name | Problem Solved | Related User Story | Priority (Must/Should/Could/Won't) | Technical Complexity (1-5) | User Value (1-5) | Evidence Strength (1-5) | Include in Final Prototype? |
|---|---|---|---|---|---:|---:|---:|---|
| F01 | Web-Based Code Scanning Utility | Slow check-in methods, missing clipboards, and outdated tracking. | US-01 |  Must | 3 |  5 | 5 | Yes |
| F02 | GPS Geofencing Location Verification | Proxy attendance vulnerabilities where students sign in for absent peers. | US-02 | Must | 4 | 5 | 4 | Yes |
| F03 | Instant Check-In Feedback Messages| Student anxiety and uncertainty caused by a lack of immediate status confirmation. | US-03 | Must | 2 | 4 | 4 | Yes |
| F04 | Student Portal Attendance History | Students are unable to track their historical presence or check progress against academic rules. | US-04 | Should | 2 | 4 | 3 | Yes |
| F05 | Dynamic QR Code Generation | Verbal roll calls and manual attendance tracking consume too much lecture time. | US-05 | Must | 3 | 5 | 5 | Yes |
| F06 | Real-Time Lecturer Roster Dashboard | Manual tracking, paper archiving, and tedious database sorting inflate faculty workloads. | US-06 | Must | 3 | 5 | 5 | Yes |
| F07 | Automated Status Notifications | Students miss critical status drops or manually checked threshold alerts. | US-07 | Could | 3 | 3 | 2 | No |
| F08 | LMS Integration (University API Link) | Attendance data is siloed away from the central university portal architecture. | US-08 | Won't | 5 | 4 | 1 | No |
| F09 | Biometric Facial Recognition Check | Potential proxy bypass loops or dynamic image spoofing. | US-09 | Won't | 5 | 3 | 1 | No |

## Must-Have Features
- **Web-Based Code Scanner (F01)** : A quick, browser-based camera tool that lets students scan the screen image directly from their seats using their smartphones.
- **GPS Location Verification (F02)** : Check the student's physical coordinates against the classroom perimeter before logging attendance. This stops absent students from cheating by having friends scan for them.
- **Instant Check-In Feedback (F03)** : Shows an immediate "Success" or "Failure" message right after scanning. This eliminates student anxiety about whether their attendance was recorded.
- **Dynamic QR Code Generation (F05)** : Displays a unique QR code. This saves time by replacing slow paper sign-in sheets and verbal roll calls.
- **Lecturer Roster Dashboard (F06)** : Automatically updates the class roster in real time as students scan. This removes the hassle of manual data entry or sorting through paper lists after class.

## Should-Have Features
- **Student Attendance History View (F04)** : A simple portal page where students can check their past attendance records and overall percentages. This helps them easily keep track of the university's mandatory 80% attendance rule.

## Could-Have / Future Features
- **Automated Status Notifications (F07)** : Sends automatic alerts to students when their attendance drops near or below the mandatory 80% threshold, helping them stay accountable before it's too late.

## Not in MVP
- **LMS Integration (F08)** : Excluded from the first prototype because university database API access is highly restricted and complex to set up.
- **Biometric Facial Recognition Check (F09)** : Left out because it is too complex to build, drains device processing power, and is unnecessary.
