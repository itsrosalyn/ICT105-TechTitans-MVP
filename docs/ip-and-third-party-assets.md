# IP and Third-Party Assets Register

| Asset / Resource | Type | Source / URL | License / Permission | How It Is Used | Credit Required? | Risk | Action |
|---|---|---|---|---|---|---|---|
| QRCode.js | JavaScript Library | [QRCode.js](https://davidshimjs.github.io/qrcodejs/) | Open Source (MIT License) | Injected into the script to dynamically generate and display the visual session QR code matrix on the screen. | No | Low | Maintain standard library reference script intact within the HTML markup. |
| HTML5 / CSS3 / JavaScript | Web Interface Languages | [Native Web Standards (W3C)](https://www.w3.org/) | Open Standard / Free Use | Used to code and build the front-end user interface screens (login, scanner, and confirmation pages) directly. | No | Low | None required: standard built-in browser technologies. |
| Firebase | Backend Cloud Service / Database | [Firebase](https://firebase.google.com/) | Free Tier / Proprietary (Google) | Used for user authentication (student / lecturer login) and storing live attendance records securely. | No | Low | Monitor database security rules to prevent unauthorized data access. |
| html5-qrcode | Code Library / API | [html5-qrcode](https://github.com/mebjas/html5-qrcode) | Open Source (MIT License) | Integrated into the frontend to scan student attendance QR codes via mobile cameras. | No | Low | Keep library updated and maintain the standard license notice in the code repository. |
| HTML5 Geolocation API | Browser Web API | [built-in Browser API (W3C Standard)](https://www.w3.org/standards/) | Standard Web Protocol / Free Use | Used to capture the student's physical coordinates to verify they are in the lecture room. | No | Low | None required: standard built-in browser functionality. |
| Microsoft Power BI | Software Analytics Tool | [Microsoft Power BI](https://app.powerbi.com/singleSignOn?ru=https%3A%2F%2Fapp.powerbi.com%2F%3FnoSignUpCheck%3D1) | Proprietary (Institutional License) | Used by the team to build the analytics dashboard for lecturers to track attendance metrics. | No | Low | Ensure data privacy compliance when publishing or sharing the dashboard tracking sheets. |

## IP Summary

The project utilizes a combination of open-source libraries, native web APIs, cloud database infrastructure, and proprietary analytics platforms to deliver the QR Code Attendance System.
- **User Interface:** The entire web layout and front-end interface screens were custom-coded from scratch using standard HTML5, CSS3, and JavaScript structures rather than relying on external visual UI templates or third-party frameworks.
- **QR Code Engine:** Visual assets generation uses the open-source QRCode.js tool via CDN to render active room tokens dynamically on the teacher dashboard panel.
- **Cloud Infrastructure & Backend:** The project implements Google Firebase under its standard free tier limits to manage live user account authentication and rational database storage for student check-in records.
- **External Code & APIs:** The project integrates the open-source html5-qrcode library under the MIT license for camera-based scanning functionality, alongside the native HTML5 Geolocation API for verifying location parameters.
- **Analytics & Tooling:**  Attendance data tracking and verification sheets are processed using Microsoft Power BI under standard institutional access to generate the backend lecturer dashboards.
- **Risks:** All core assets lverage open-source or fully authorized development tools, presenting a **Low Risk** profile with no immediate replacement actions required.
