# Digital Go-to-Market Plan

## Product / Prototype Name

AttendQR

## Target Early Users

ICT students and lecturers conducting lab sessions in Room 3-216 who need a fast, reliable, and verified attendance check-in process.

## Main Value Proposition

AttendQR provides instant, fraud-proof classroom check-ins by combining dynamic QR code scanning with precise GPS location verification.

## Channel Plan

| Channel | Target User | Message Angle | User Action Expected | Metric to Track | Why This Channel Fits |
| --- | --- | --- | --- | --- | --- |
| Class chat group | ICT Students | Scan and mark your attendance in under 3 seconds without waiting in line | Click prototype demo link / Open app | Demo clicks & sign-ins | Direct access to students in active course modules |
| Campus poster QR / Desk Flyers | ICT Students on classes | "In class? Scan here to verify your seat instantly." | Scan poster QR code | QR scanscount & location hits| Placed directly inside the room where check-ins occur |
| Lecturer Course Portal / Slides | Lecturers & TAs | Eliminate manual attendance taking and proxy attendance completely | Launch lecturer session manager | Active session creation | Lecturers are the primary drivers who initiate check-in sessions |

## Launch Sequence

1. Prepare the AttendQR prototype demo link, active session QR codes, and geofencing parameters for Room 3-216.
2. Share the lecturer dashboard link with early-adopter professors and post student access links in class chat groups.
3. Track real-time response using Firebase event logs, tracking QR Scan Success Rate (M-05) and GPS Accuracy Rate (M-06).
4. Collect user feedback via a short 2-question post-check-in modal on usability and speed.
5. Adjust the GPS geofencing radius (FR-10) and scanner responsiveness based on initial classroom test data.

## Risk and Mitigation

- **Risk:** Poor GPS reception or weak cellular signals inside Room 3-216 causes false location verification failures for students trying to check in.
- **Mitigation:** Implement a temporary grace radius for indoor GPS variance and provide lecturers with a manual override toggle on their dashboard for flagged edge cases.
