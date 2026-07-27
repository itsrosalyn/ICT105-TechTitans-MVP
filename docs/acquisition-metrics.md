# Acquisition Metrics

## Purpose

Define how the group will measure early user interest and evaluate the performance of the AttendQR landing page in encouraging students 
and lecturers to explore the QR Code Attendance System with GPS Verification prototype.


## Required Metrics

| Metric ID | Metric Name         | What It Measures                                                                 | Formula / Counting Method                                           | Data Source                                                            | Target / Success Criterion                  |
| --------- | ------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------- |
| **M-01**  | Landing page views  | Number of visitors who open the AttendQR landing page.                           | Count total page visits using Netlify Analytics or manual tracking. | Netlify Analytics/ manual tracking spreadsheet.                      | **At least 30 landing page views.**         |
| **M-02**  | CTA clicks          | Number of visitors who click the **"Try the Demo"** button.                      | (CTA Clicks ÷ Landing Page Views) × 100                             | **Firebase Firestore (`attendqr/counters`) ** | **At least 50% of visitors click the CTA.** |
| **M-03**  | Demo attempts       | Number of visitors who click **"Open Prototype Demo"** and access the prototype. | Count total prototype launches.                                     | **Firebase Firestore (`attendqr/counters`) ** | **At least 15 demo attempts.**              |
| **M-04**  | Feedback responses  | Number of users who provide feedback after using the prototype.                  | Count submitted feedback responses.                                 | Feedback form/manual feedback record.                               | **At least 20 responses.**                  |
| **M-05**  | Interest conversion | Percentage of landing page visitors who proceed to the prototype.                | (Demo Attempts ÷ Landing Page Views) × 100                          | Netlify Analytics combined with Firebase counters.                     | **At least 50% conversion rate.**           |


## Interpretation

- If the acquisition metrics do not reach the target values, the team will:
- Improve the headline to communicate the benefits of QR attendance more clearly.
- Make the Try the Demo button more prominent and persuasive.
- Simplify the prototype workflow so users can complete the demo with fewer steps.
- Share the landing page with more ICT students and lecturers through university channels.
- Improve the explanation of QR attendance and GPS verification to increase user confidence.
- Gather additional user feedback and revise the landing page based on common suggestions.
