# Success Metrics and Decision Rules

## 1. Success Metrics
| Metric ID | Metric | Target | How to Measure | Related Requirement |
|---|---|---:|---|---|
| M-01 | QR and GPS CHeck-In Success Rate | 70% or higher | Successful check-ins within geofence / Total check-in attempts | FR-02, FR-03 |
| M-02 | Form and Session Creation Accuracy | 80% or higher | Valid submissions / Total session & log submissions | FR-03, FR-09, FR-10 |
| M-03 | Attendance History Search Rate | 70% or higher | Users who successfully find target records / Total filter searches | FR-06 |
| M-04 | App Usability Rating | Average 4 out of 5 | Feedback form rating on layout and navigation | FR-13, FR-14 |
| M-05 | Anti-Proxy Usefulness Rating | Average 4 out of 5 | Lecturer feedback rating on location boundary verification | FR-10 |

## 2. Decision Rules
| Result | Decision |
|---|---|
| Metrics meet target | Continue to implementation sprint (writing HTML, CSS, JavaScript, and connecting Firebase). |
| Some metrics fail | Revise wireframe, screens, check-in flow path, input labels, or feature priority before writing code. |
| Most metrics fail | Revisit the core requirements (FR-01 to FR-16), user workflows, and problem evidence before building. |
