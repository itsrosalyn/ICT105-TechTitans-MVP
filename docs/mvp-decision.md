# Lab 08 - MVP Decision

## 1. Decision
Choose one:

- [ ] Continue with the current MVP direction
- [x] Continue with minor revisions
- [ ] Revise major workflow or feature
- [ ] Collect more evidence before implementation
- [ ] Pivot or change the solution direction

## 2. Evidence Supporting the Decision
According to our official usability testing metrics:
- **High success and Usability:** We achieved a 100% (7/7) Task Success Rate with an average ease-of-use rating of 4.7/5 and an outstanding average interest level of 4.9/5.
-  **The Main Hurdle:** All 7 participants completed their workflows successfully, but the primary confusion point highlighted was that the QR code scanning and GPS verification were omly simulated in this initial clickable prototype.
-   **Conclusion:** The MVP is validated with minor improvements required. The next prototype iteration must focus on making the QR code scanner and GPS verification actually functional.

## 3. Requirements to Keep
These functional requirements met all user expections and will be kept with their current design:
| Requirement ID | Reason |
|---|---|
| FR-02 | Students successfully completed the navigation check-in workflow without issues; we will maintain this current flow. |
| FR-08 | Attendance percentage tracking was highly intuitive and easy for students to understand. |
| FR-09 | Lecturers generated QR codes quickly and easily with zero confusion. |
| FR-11 | Confirmation messages after successful/failed attendance submission were clear and easy to read. |

## 4. Requirements to Improve
Based on tester feedback and technical limitations, these features need functional 
refinement:
| Requirement ID | Problem Found | Improvement Needed |
|---|---|---|
| FR-03 | QR code scanning is currently simulated. | Implement actual camera-based QR code scanning and value parsing. |
| FR-10 | GPS verification is currently simulated. | Integrate real HTML5 Geolocation API coordinate checking. |
| FR-12 | Lecturer dashboard was useful, but basic. | Consider adding more advanced real-time attendance analytics in upcoming versions. |

## 5. Prototype Changes Before Next Lab
1. **Dynamic QR Scanner Integration (FR-03):** Replace the static scanning mock interface with an active Javascript library (such as html5-qrcode) to grab camera inputs and parse QR string data.
2. **Active Geolocation Checking (FR-10):** Embed real-time browser location checks that query actual latitude/longitude coordinates to prove the geofencing logic.

## 6. GitHub Issues Created
| Issue Title | Assigned Member | Requirement ID |
|---|---|---|
| Issues #44 Lab 08 Improve prototype feature based on validation evidence | Pan Thway Chal Ko Ko Lwin | FR-03, FR-10 |
| Issues #43 Lab 08 Update README | Pan Thway Chal Ko Ko Lwin | FR-01, FR-02, FR-05, FR-06, FR-07, FR-08, FR-09, FR-10, FR-11, FR-12 |
| Issues #43 Lab 08 Update weekly logbook | Thun Thiri Khin | FR-01, FR-02, FR-05, FR-06, FR-07, FR-08, FR-09, FR-10, FR-11, FR-12 |
| Issues #42 Lab 08 Write mvp-decision.md| Thun Thiri Khin | FR-01, FR-02, FR-03, FR-05, FR-06, FR-07, FR-08, FR-09, FR-10, FR-11, FR-12 |
| Issues #41 Lab 08 Write analytics-insights.md | Phoo Myat Thwin | FR-12 |
| Issues #40 Lab 08 Write customer-validation-summary.md | Phoo Myat Thwin | FR-02, FR-03, FR-08, FR-09, FR-10, FR-11, FR-12 |
| Issues #39 Lab 08 Complete validation-results.xlsx/validation-results.csv | Mya Hninsi Phyu | FR-01, FR-02, FR-03, FR-05, FR-06, FR-07, FR-08, FR-09, FR-10, FR-11, FR-12 |
| Issues #38 Lab 08 Collect or clean validation data for own group case | Mya Hninsi Phyu | FR-01, FR-02, FR-03, FR-05, FR-06, FR-07, FR-08, FR-09, FR-10, FR-11, FR-12 |
