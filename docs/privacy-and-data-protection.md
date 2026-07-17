# Privacy and Data Protection
## Data Collection Summary
| Data Field                                     | Why It Is Needed                            | Personal Data? | Sensitive Data? | Keep / Remove / Replace | Notes                                                                                    |
| ---------------------------------------------- | ------------------------------------------- | -------------- | --------------- | ----------------------- | ---------------------------------------------------------------------------------------- |
| Student ID                                     | Identify the student and record attendance  | Yes            | No              | Keep                    | Required for attendance records.                                                         |
| Student Name                                   | Display attendance records                  | Yes            | No              | Keep                    | Used only for identification by lecturers and students.                                  |
| Course/Class ID                                | Associate attendance with the correct class | No             | No              | Keep                    | Required for attendance management.                                                      |
| Attendance Date & Time                         | Record when attendance is submitted         | No             | No              | Keep                    | Required for attendance history.                                                         |
| QR Code Session ID                             | Identify the active attendance session      | No             | No              | Keep                    | Used to validate attendance submissions.                                                 |
| Location Verification (Near/Far or GPS Status) | Verify attendance location                  | No             | No              | Keep                    | Stores only the verification result, not continuous location data.                       |
| Attendance Status (Present/Absent)             | Track attendance progress                   | No             | No              | Keep                    | Used for attendance reports and percentage calculations.                                 |
| Email Address (Firebase Authentication)        | User login and authentication               | Yes            | No              | Keep                    | Used only for authentication and not displayed publicly.                                 |
| Password                                       | User authentication                         | Yes            | **Yes**         | Replace                 | Managed securely by Firebase Authentication; never stored or displayed by the prototype. |

## Privacy Rule for Prototype
The prototype collects only the information required to manage classroom attendance, including student identification, attendance records, QR code session information,
and location verification status. Data is stored securely in Firebase and is accessible only to authorized users based on their role. Students can view only their own
attendance history, while lecturers can manage attendance sessions and view class attendance records. The prototype avoids collecting unnecessary personal or sensitive
information and does not permanently store continuous GPS location data.

## Data Minimizing Decision
| Removed/Changed Data         | Decision                                   | Reason                                                                                           |
| ---------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Home Address                 | Removed                                    | Not required for attendance management.                                                          |
| Phone Number                 | Removed                                    | Not required for the prototype.                                                                  |
| Continuous GPS Coordinates   | Replaced with location verification status | The prototype verifies attendance location without permanently storing precise location data.    |
| Personal Profile Information | Removed                                    | Not related to the attendance process.                                                           |
| Password                     | Managed by Firebase Authentication         | Passwords are securely handled by Firebase and are never stored or displayed by the application. |
