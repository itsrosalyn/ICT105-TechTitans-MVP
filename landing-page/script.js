// ── Firebase project config ──
const firebaseConfig = {
  apiKey: "AIzaSyDekEtcKYdx-zelubr0Qpq8ZNZk2ACkBOU",
  authDomain: "attender-demo.firebaseapp.com",
  projectId: "attender-demo",
  storageBucket: "attender-demo.firebasestorage.app",
  messagingSenderId: "284650952052",
  appId: "1:284650952052:web:d50f23ef490124f8148821",
  measurementId: "G-XHHRP0Q06M"
};

const COUNTERS_DOC = "attendqr/counters";
// These match the real prototype's Firestore shape (see shared.js):
// collection "records", with fields { course, timestamp (ISO string), ... }
const CHECKINS_COLLECTION = "records";
const CHECKIN_TIMESTAMP_FIELD = "timestamp";
const CHECKIN_COURSE_FIELD = "course";
const SAMPLE_COURSE_CODE = "ICT 101"; // note: prototype stores course codes with a space

const CTA_KEY = "attendqr_cta_clicks";
const DEMO_KEY = "attendqr_demo_clicks";

let ctaClicks = 0;
let demoClicks = 0;
let firestoreReady = false;
let db = null;
let counterRef = null;

// ── localStorage fallback (only used if Firebase fails to load) ────────
function loadLocalCount(key) {
  try {
    const stored = localStorage.getItem(key);
    return stored !== null ? Number(stored) || 0 : 0;
  } catch (err) {
    console.warn(`Couldn't read "${key}" from localStorage.`, err);
    return 0;
  }
}

function saveLocalCount(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    console.warn(`Couldn't save "${key}" to localStorage.`, err);
  }
}

// ── DOM refs, filled in on DOMContentLoaded ─────────────────────────────
let els = {};

function renderCounts() {
  if (els.ctaCount) els.ctaCount.textContent = ctaClicks;
  if (els.ctaTableCount) els.ctaTableCount.textContent = ctaClicks;
  if (els.demoCount) els.demoCount.textContent = demoClicks;
}

function initFirebase() {
  if (typeof firebase === "undefined") {
    console.warn(
      "AttendQR: Firebase SDK didn't load, falling back to localStorage " +
      "(counts won't sync across devices)."
    );
    ctaClicks = loadLocalCount(CTA_KEY);
    demoClicks = loadLocalCount(DEMO_KEY);
    renderCounts();
    return;
  }

  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    counterRef = db.doc(COUNTERS_DOC);
    firestoreReady = true;

    counterRef.onSnapshot(
      (snap) => {
        const data = snap.data() || {};
        ctaClicks = data.ctaClicks || 0;
        demoClicks = data.demoClicks || 0;
        renderCounts();
      },
      (err) => {
        console.error("AttendQR: Firestore counters listener failed.", err);
      }
    );

    listenForTodayRecords();
  } catch (err) {
    console.error("AttendQR: Firebase init failed, falling back to localStorage.", err);
    ctaClicks = loadLocalCount(CTA_KEY);
    demoClicks = loadLocalCount(DEMO_KEY);
    renderCounts();
  }
}

function incrementCounter(field) {
  if (firestoreReady && counterRef) {
    counterRef
      .set(
        { [field]: firebase.firestore.FieldValue.increment(1) },
        { merge: true }
      )
      .catch((err) => console.error(`AttendQR: failed to increment ${field}.`, err));
  } else {
    if (field === "ctaClicks") {
      ctaClicks++;
      saveLocalCount(CTA_KEY, ctaClicks);
    } else {
      demoClicks++;
      saveLocalCount(DEMO_KEY, demoClicks);
    }
    renderCounts();
  }
}

// ── Live "Records today" from the prototype's check-in data ────────────
function listenForTodayRecords() {
  if (!els.attendanceCount) return;

  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  // The prototype stores `timestamp` as new Date().toISOString(), a plain
  // string — not a Firestore Timestamp — so we compare against an ISO
  // string here too. ISO strings sort/compare correctly with >=.
  const startTs = startOfToday.toISOString();

  db.collection(CHECKINS_COLLECTION)
    .where(CHECKIN_COURSE_FIELD, "==", SAMPLE_COURSE_CODE)
    .where(CHECKIN_TIMESTAMP_FIELD, ">=", startTs)
    .onSnapshot(
      (snap) => {
        els.attendanceCount.textContent = snap.size;
      },
      (err) => {
        console.error(
          "AttendQR: couldn't load live records (check CHECKINS_COLLECTION / " +
          "CHECKIN_TIMESTAMP_FIELD in script.js match the prototype's real Firestore data).",
          err
        );
        els.attendanceCount.textContent = "–";
      }
    );
}

document.addEventListener("DOMContentLoaded", () => {
  els = {
    ctaButton: document.getElementById("ctaButton"),
    demoButton: document.getElementById("demoButton"),
    ctaCount: document.getElementById("ctaCount"),
    ctaTableCount: document.getElementById("ctaTableCount"),
    demoCount: document.getElementById("demoCount"),
    demoMessage: document.getElementById("demoMessage"),
    attendanceCount: document.getElementById("attendanceCount"),
    tryEl: document.getElementById("try"),
  };

  if (!els.ctaButton || !els.demoButton) {
    console.error("AttendQR: ctaButton or demoButton not found in the page.");
    return;
  }

  initFirebase();

  els.ctaButton.addEventListener("click", () => {
    incrementCounter("ctaClicks");
    if (els.tryEl) els.tryEl.scrollIntoView({ behavior: "smooth" });
  });

  els.demoButton.addEventListener("click", () => {
    incrementCounter("demoClicks");
    if (els.demoMessage) els.demoMessage.textContent = "Opening the prototype...";
    window.location.href = "https://attend-qr-1.netlify.app/index.html";
  });
});