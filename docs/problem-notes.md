# Problem Notes

## Selected Case

QR Code Attendance System with GPS Verification

## Target Respondents

| Respondent Type                    | Why This Respondent Matters                                                                                     | Planned Number | Actual Number |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------: | ------------: |
| ICT students (Rangsit University)  | Primary users affected by attendance delays, proxy attendance issues, and lack of real-time attendance tracking |          20    |            18 |
| ICT lecturers (Rangsit University) | Responsible for managing attendance records and verifying student presence during lectures                      |            1–3 |             3 |

## Observed / Reported Problem

Current attendance processes rely on QR-code-based attendance systems and other semi-digital methods. While these approaches reduce the time required for attendance checking, they do not always verify whether students are physically present in class. Respondents also reported issues related to attendance reliability, missed check-ins, manual attendance corrections, and limited visibility of attendance records.

## Current Alternatives or Workarounds

| Workaround                     | Who Uses It?        | Weakness / Pain                                                    | Evidence Source               |
| ------------------------------ | ------------------- | ------------------------------------------------------------------ | ----------------------------- |
| QR-code Google Form attendance | Students, Lecturers | Does not verify physical presence and may allow remote submissions | Student & Lecturer interviews |
| Verbal roll call               | Lecturers           | Time-consuming and reduces lecture time efficiency                 | Lecturer interview            |
| Paper sign-in sheet            | Students, Lecturers | Can be manipulated, lost, or filled incorrectly                    | Student & Lecturer interviews |
| Spreadsheet tracking           | Lecturers           | Requires manual entry and increases workload                       | Lecturer interview            |

## Repeated Pain Points

| Pain Point                                     | Number of Mentions | Example Evidence                                                      | Severity |
| ---------------------------------------------- | -----------------: | --------------------------------------------------------------------- | -------- |
| Attendance verification is unreliable          |                 15 | “It is difficult to confirm whether students are physically present.” | High     |
| Attendance checking takes too much class time  |                 14 | “Several minutes are spent taking attendance before teaching begins.” | High     |
| Proxy attendance occurs                        |                 12 | “Students sometimes ask friends to mark attendance for them.”         | High     |
| Manual attendance management required          |                  9 | “Attendance data must be organized manually after each class.”        | Medium   |
| Students cannot easily track attendance status |                  8 | “I am not always aware of my attendance percentage.”                  | Medium   |

## Consequences

| Consequence                    | Example                                                          | Evidence Strength |
| ------------------------------ | ---------------------------------------------------------------- | ----------------- |
| Loss of lecture time           | 5–10 minutes per class used for attendance checking              | Strong            |
| Inaccurate attendance records  | Proxy attendance and remote submissions reduce reliability       | Strong            |
| Increased lecturer workload    | Manual attendance processing and attendance corrections required | Medium            |
| Reduced student accountability | Students may be marked present without attending class           | Medium            |

## Notes for MVP Direction

The MVP should focus on reducing attendance-checking time and preventing proxy attendance using a fast, simple, and mobile-friendly system.

Key considerations for MVP design:

* Lecturer login and session creation
* QR code generation per lecture session
* Student QR scanning for check-in
* GPS-based location verification to ensure physical presence
* Real-time attendance recording and updates
* Simple lecturer dashboard for attendance monitoring
* Lightweight backend (e.g., Firebase)
* Designed for a single-course classroom environment
