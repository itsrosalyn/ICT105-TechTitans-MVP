# User Testing Results

## 1. Testing Summary

- Date: July 28, 2026
- Number of testers: 7 ( 5 Students, 2 Lecturers)
- Prototype link: [Prototype Link](https://attend-qr-1.netlify.app/index.html)
- Testing location/platform: Room 3-216 (In-person on mobile & laptop browsers)

## 2. Task Completion Summary

| Task ID | Task | Completed? | Main Issue Found | Evidence / Comment |
| --- | --- | --- | --- | --- |
| T01 | Open homepage and explain system purpose | Yes | None | All 7 testers immediately understood AttendQR's purpose within 5 seconds. |
| T02 | Log in and submit check-in via QR scanner | Yes | Camera permission prompt was easy to miss | 6 users checked in smoothly; 1 student had camera blocked by browser settings. |
| T03 | Search/filter attendance records | Partial | Filter button icon was too small on mobile | Students found records, but required extra taps to activate the date filter. |
| T04 | View attendance detail and check-in status | Yes | None | "Present" green status badge was clear and easily readable for all testers. |
| T05 | Review dashboard summary metrics | Yes | Chart labels looked slightly cramped on phone screens | Lecturers appreciated the real-time check-in percentage chart. |

## 3. Common Usability Issues

| Issue ID | Issue Description | Severity | Related Requirement | Proposed Fix |
| --- | --- | --- | --- | --- |
| UI-01 | Browser camera permission popup gets blocked or overlooked on first launch. | Important | FR-03, FR-10 | Add a clear onscreen banner prompting users to allow camera access before opening the scanner. |
| UI-02 | Date filter controls on the attendance history page are small on mobile devices. | Useful | FR-05, FR-06 | Increase touch target padding for filter buttons to improve mobile responsiveness. |
| UI-03 | Summary chart labels overlap slightly on small smartphone screens. | Useful | FR-12 | Adjust chart display settings to stack legend items vertically on screens under 400px width. |

## 4. User Feedback Summary

- **What Users Liked:** Fast check-in process, clean login interface, instant confirmation badge, and clear lecturer overview metrics.
- **What Users Disliked:** Having to manually enable camera permissions if default settings blocked it.
- **What Users Misunderstood:** One student thought GPS tracking was active continuously, rather than only during the instant check-in moment.
- **User Suggestions:** Add a quick "Help / Camera Guide" tooltip on the scanner screen and an option to export attendance history as a PDF.

## 5. Evidence-Based Decision

**Selected Decision:** Needs minor revision.

**Explanation:**
The core workflow, from landing page navigation to QR scanning and viewing attendance status, was successfully completed by all testers with high satisfaction. The only friction observed involved minor mobile UI scaling and initial camera permission prompts. Fixing these minor layout and onboarding issues before Lab 14 will ensure a seamless final demonstration.
