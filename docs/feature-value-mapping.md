# Feature-Value Mapping

| Feature ID | MVP Feature                             | Requirement ID             | User Story ID | User Value                                                                                               | Business / Operational Value                                                  | Prototype Screen or Module                                                          | Priority |
| ---------- | --------------------------------------- | -------------------------- | ------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- |
| F-01       | QR Code Attendance Check-In             | FR-03, FR-10, FR-11        | US-01         | Students can quickly record attendance by scanning a QR code instead of using manual attendance methods. | Reduces attendance time and improves efficiency during lectures.              | prototype/home-page.png (Entry) → prototype/scanqr-page.png (QR Check-in Screen)    | Must     |
| F-02       | GPS Location Verification               | FR-03, FR-10               | US-02         | Students can confirm attendance only when they are physically present in the classroom.                  | Prevents proxy attendance and improves reliability of attendance records.     | prototype/gpscheck-page.png - GPS Verification Screen                               | Must     |
| F-03       | Instant Attendance Confirmation         | FR-11                      | US-03         | Students immediately know whether their attendance submission was successful.                            | Reduces attendance disputes and lecturer workload.                            | prototype/confirmation-page.png - Attendance Confirmation Screen                    | Must     |
| F-04       | Student Attendance History              | FR-05, FR-06, FR-07, FR-08 | US-04         | Students can view attendance records and percentage to monitor their attendance progress.                | Reduces manual requests for attendance information.                           | prototype/records-page.png - Student Attendance History Screen                      | Should   |
| F-05       | Dynamic QR Code Generation              | FR-03, FR-09               | US-05         | Lecturers can generate a unique QR code for each class session.                                          | Creates organized attendance sessions and simplifies lecturer workflow.       | prototype/qr-generation.png - Lecturer QR Generation Screen                         | Must     |
| F-06       | Real-Time Lecturer Attendance Dashboard | FR-05, FR-06, FR-09, FR-12 | US-06         | Lecturers can monitor student attendance records instantly.                                              | Saves time by replacing manual tracking with automated attendance monitoring. | prototype/lecturer-dashboard.png - Lecturer Dashboard Screen                        | Must     |

## Reflection

## Which feature creates the strongest user value?
F-02: GPS Location Verification creates the strongest user value because it solves the main problem of proxy attendance and increases trust in attendance records.

## Which feature creates the strongest business or operational value?
F-06: Real-Time Lecturer Attendance Dashboard creates the strongest operational value because it reduces manual attendance management and allows lecturers to monitor attendance efficiently.

## Which required feature is still weak or unclear?
F-04: Student Attendance History is less critical than the core check-in workflow because it supports monitoring rather than solving the main attendance problem.
