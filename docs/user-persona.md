# Lab 04 - User Persona

## 1. Persona Name

Nara, Year 1 ICT Student

## 2. User Type

University student who regularly uses QR-code attendance systems and wants reliable attendance verification.

## 3. Background and Context

* Nara attends multiple ICT classes every week at Rangsit University.
* Lecturers use QR codes for attendance at the beginning of each lecture.
* She relies on her smartphone to scan QR codes and access academic resources.
* She prefers digital attendance because it is faster than verbal roll calls and paper attendance sheets.
* However, she is concerned about attendance accuracy and whether attendance records are properly stored.

## 4. Goals

* Check in to class quickly and without delays.
* Receive immediate confirmation that attendance has been recorded.
* Ensure attendance records are accurate and fair for all students.
* View attendance history and attendance status at any time.
* Prevent students from marking attendance for absent friends.

## 5. Pain Points from Lab 03 Evidence

| Pain Point                  | Evidence ID / Respondent | Explanation                                                               |
| --------------------------- | ------------------------ | ------------------------------------------------------------------------- |
| No location verification    | R011                     | Students can submit attendance without being physically present in class. |
| Proxy attendance            | R002, R008, R019         | Friends may submit attendance on behalf of absent students.               |
| No attendance tracking view | R021                     | Students cannot easily monitor their attendance records.                  |
| No confirmation message     | R007, R012               | Students are unsure whether attendance was successfully recorded.         |
| Short QR validity period    | R001, R009               | Students may miss attendance because the QR code expires too quickly.     |

## 6. Current Alternatives / Workarounds

| Current Alternative                       | Weakness / Limitation                        | Evidence         |
| ----------------------------------------- | -------------------------------------------- | ---------------- |
| Standard QR-code attendance               | Does not verify physical presence            | R011             |
| Paper attendance sheet                    | Allows proxy attendance and manual errors    | R019             |
| Verbal roll call                          | Consumes lecture time                        | R018             |
| Manual attendance correction by lecturers | Increases workload and administration effort | R006, R013, R017 |

## 7. Design Implications

* The system should verify student presence using GPS-based location validation before accepting attendance.
* The system should display an instant confirmation message (success/failure) immediately after check-in.
* The system should allow students to view attendance history and attendance percentage in real time.
* The system should automatically generate and synchronize attendance records for lecturers.
* The check-in process should remain simple, fast, and low-friction to avoid disrupting class time.
* The system should include a secure anti-proxy mechanism to reduce attendance fraud (e.g., QR + location validation).
* The system should support a manual fallback option only for exceptional cases (e.g., system error, device failure, lecturer override).
* MVP priority: accurate and fast attendance verification using QR code + GPS validation with real-time confirmation.
