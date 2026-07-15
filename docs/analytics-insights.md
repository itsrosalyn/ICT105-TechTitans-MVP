# Lab 08 - Analytics Insights

## 1. Analytics Question

What did users do, say, and prove when testing the MVP direction?

Users successfully completed the main attendance workflow and confirmed that the prototype was easy to understand and useful. The testing also identified that QR code scanning and GPS verification are currently simulated and should be implemented in the final prototype.

---

## 2. Metrics Calculated

| Metric | Formula / Method | Result |
|---|---|---:|
| Total test users | Count testers | **7** |
| Completed tasks | Count TaskCompleted = Yes | **7** |
| Task success rate | Completed tasks ÷ total testers | **100% (7/7)** |
| Average feedback score | Average Ease of Use Score | **4.7 / 5** |
| Average interest level | Average Interest Level | **4.9 / 5** |
| Confusion points | Count repeated confusion categories | **2 (QR scanning and GPS verification)** |

---

## 3. Findings

1. **All seven participants successfully completed their assigned tasks, resulting in a 100% task success rate.**

2. **Users rated the prototype highly, with an average ease-of-use score of 4.7/5 and an average interest level of 4.9/5, indicating strong acceptance of the proposed solution.**

3. **The most common feedback was that QR code scanning and GPS verification were only simulated in the prototype. Users expect these features to be fully functional in the final implementation.**

---

## 4. Interpretation

The validation results indicate that the overall MVP direction is appropriate. Both students and lecturers found the interface easy to navigate and understood the attendance workflow without assistance. The prototype successfully validated the user experience, while highlighting the need to replace simulated QR code scanning and GPS verification with actual implementations before the final prototype.

---

## 5. Requirements Affected

| Requirement ID | Evidence | Action Needed |
|---|---|---|
| FR-02 | Students completed the attendance workflow successfully. | Maintain the current navigation flow. |
| FR-03 | QR code scanning was simulated during testing. | Implement real QR code scanning. |
| FR-08 | Students understood the attendance percentage tracker. | No changes required. |
| FR-09 | Lecturers generated QR codes successfully. | Maintain the current interface. |
| FR-10 | GPS verification was simulated. | Integrate real GPS location verification. |
| FR-11 | Users clearly understood the attendance confirmation message. | Keep the confirmation screen. |
| FR-12 | Lecturers found the dashboard useful. | Consider adding more attendance analytics. |

---

## 6. Next Prototype Improvement

- Implement real QR code scanning functionality.
- Integrate GPS-based location verification using the Geolocation API.
- Improve the attendance dashboard with additional statistics and analytics.
- Add clearer guidance during the QR scanning and GPS verification process.
- Continue usability testing after implementing the core attendance features.
