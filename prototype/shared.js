// AttendQR — single shared JS module.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, deleteDoc, collection, query, where, getDocs, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDekEtcKYdx-zelubr0Qpq8ZNZk2ACkBOU",
  authDomain: "attender-demo.firebaseapp.com",
  projectId: "attender-demo",
  storageBucket: "attender-demo.firebasestorage.app",
  messagingSenderId: "284650952052",
  appId: "1:284650952052:web:d50f23ef490124f8148821"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export function getCurrentUser(){
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      unsubscribe();
      if(!user){ resolve(null); return; }
      try{
        const snap = await getDoc(doc(db, "users", user.uid));
        resolve(snap.exists() ? { uid: user.uid, ...snap.data() } : null);
      } catch(e){ resolve(null); }
    });
  });
}

export async function requireRole(requiredRole){
  const user = await getCurrentUser();
  if(!user || user.role !== requiredRole){
    window.location.href = "index.html";
    return null;
  }
  return user;
}

export function wireLogout(selector = "#logout-link"){
  const el = document.querySelector(selector);
  if(!el) return;
  el.addEventListener('click', async (e) => {
    e.preventDefault();
    if(!confirm("Are you sure you want to log out?")) return;
    await signOut(auth);
    window.location.href = "index.html";
  });
}

export function initials(name){
  return (name || "").split(" ").filter(Boolean).map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

export function avatarUrl(name){
  return "https://api.dicebear.com/7.x/initials/svg?seed=" + encodeURIComponent(name || "U") + "&backgroundType=gradientLinear";
}

export function wireProfileMenu(user){
  const trigger = document.getElementById('nav-avatar');
  const dropdown = document.getElementById('profile-dropdown');
  if(!trigger || !dropdown || !user) return;

  document.getElementById('profile-avatar-img').src = avatarUrl(user.name);
  document.getElementById('profile-id-label').textContent = user.role === 'lecturer' ? 'Staff ID' : 'Student ID';
  document.getElementById('profile-id').textContent = user.schoolId || '—';
  document.getElementById('profile-name').textContent = user.name || '—';
  document.getElementById('profile-email').textContent = user.email || '—';
  document.getElementById('profile-status').textContent = user.role === 'lecturer' ? 'Lecturer' : 'Student';

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if(!dropdown.contains(e.target) && e.target !== trigger){
      dropdown.classList.remove('open');
    }
  });
}

// ---- index.html ----
export async function initLoginPage(){
  const EMAIL_DOMAIN = "rsu.ac.th";
  const EMAIL_RE = new RegExp("^[^\\s@]+@" + EMAIL_DOMAIN.replace(".", "\\.") + "$", "i");
  const STUDENT_ID_RE = /^\d{7}$/;
  const STAFF_ID_RE = /^T\d{4}$/i;

  let signupRole = "student";

  window.setMode = function(mode){
    const isLogin = mode === "login";
    document.getElementById('panel-login').style.display = isLogin ? "" : "none";
    document.getElementById('panel-signup').style.display = isLogin ? "none" : "";
    document.getElementById('tab-login').classList.toggle('active', isLogin);
    document.getElementById('tab-signup').classList.toggle('active', !isLogin);
  };

  window.setSignupRole = function(role){
    signupRole = role;
    document.getElementById('signup-role-student').classList.toggle('active', role === 'student');
    document.getElementById('signup-role-lecturer').classList.toggle('active', role === 'lecturer');
    const label = document.getElementById('signup-id-label');
    const input = document.getElementById('signup-id');
    const hint = document.getElementById('signup-id-hint');
    if(role === 'student'){
      label.textContent = 'Student ID';
      input.placeholder = '6412345';
      hint.textContent = '7 digits, e.g. 6412345';
    } else {
      label.textContent = 'Staff ID';
      input.placeholder = 'T1023';
      hint.textContent = 'Letter T followed by 4 digits, e.g. T1023';
    }
  };

  function showError(elId, msg){
    const el = document.getElementById(elId);
    el.textContent = msg;
    el.classList.add('show');
  }
  function clearError(elId){
    document.getElementById(elId).classList.remove('show');
  }

  async function routeByRole(uid){
    const snap = await getDoc(doc(db, "users", uid));
    if(!snap.exists()){
      showError('login-error', "We couldn't find your profile. Please sign up again.");
      return;
    }
    const profile = snap.data();
    window.location.href = (profile.role === "lecturer") ? "lecturer-dashboard.html" : "home.html";
  }

  document.getElementById('login-btn').addEventListener('click', async function(e){
    e.preventDefault();
    clearError('login-error');
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    if(!email || !password){
      showError('login-error', "Enter your email and password.");
      return;
    }

    const btn = document.getElementById('login-btn');
    btn.disabled = true; btn.textContent = "Logging in…";
    try{
      const cred = await signInWithEmailAndPassword(auth, email, password);
      await routeByRole(cred.user.uid);
    } catch(err){
      showError('login-error', "Invalid email or password.");
    } finally{
      btn.disabled = false; btn.textContent = "Log in";
    }
  });

  document.getElementById('signup-btn').addEventListener('click', async function(e){
    e.preventDefault();
    clearError('signup-error');

    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const schoolId = document.getElementById('signup-id').value.trim().toUpperCase();
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;

    if(!name || !email || !schoolId || !password || !confirm){
      showError('signup-error', "Please fill in all fields.");
      return;
    }
    if(!EMAIL_RE.test(email)){
      showError('signup-error', "Email must be a valid @" + EMAIL_DOMAIN + " address.");
      return;
    }
    const idRe = signupRole === "student" ? STUDENT_ID_RE : STAFF_ID_RE;
    const idFormatMsg = signupRole === "student"
      ? "Student ID must be 7 digits (e.g. 6412345)."
      : "Staff ID must be the letter T followed by 4 digits (e.g. T1023).";
    if(!idRe.test(schoolId)){
      showError('signup-error', idFormatMsg);
      return;
    }
    if(password.length < 6){
      showError('signup-error', "Password must be at least 6 characters.");
      return;
    }
    if(password !== confirm){
      showError('signup-error', "Passwords don't match.");
      return;
    }

    const btn = document.getElementById('signup-btn');
    btn.disabled = true; btn.textContent = "Creating account…";
    try{
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", cred.user.uid), {
        name,
        email,
        role: signupRole,
        schoolId,
        createdAt: new Date().toISOString()
      });
      window.location.href = (signupRole === "lecturer") ? "lecturer-dashboard.html" : "home.html";
    } catch(err){
      if(err.code === "auth/email-already-in-use"){
        showError('signup-error', "An account with that email already exists. Try logging in instead.");
      } else if(err.code === "auth/invalid-email"){
        showError('signup-error', "That email address looks invalid.");
      } else {
        showError('signup-error', "Couldn't create your account: " + err.message);
      }
    } finally{
      btn.disabled = false; btn.textContent = "Create account";
    }
  });
}

// ---- home.html ----
export async function initHomePage(){
  const currentUser = await requireRole("student");
  if(!currentUser) throw new Error("Redirecting to login");
  wireLogout();

  const firstName = currentUser.name.split(" ")[0];
  document.getElementById('greeting-text').textContent = "Good morning, " + firstName;
  document.getElementById('nav-avatar').textContent = initials(currentUser.name);
  wireProfileMenu(currentUser);

  const today = new Date();
  document.getElementById('greeting-sub').textContent = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  const q = query(collection(db, "records"), where("studentName", "==", currentUser.name));
  const snap = await getDocs(q);
  const myRecords = snap.docs.map(d => d.data()).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  const totalSessions = myRecords.length;
  const onTimeCount = myRecords.filter(r => r.status === "On time").length;
  const lateCount = myRecords.filter(r => r.status === "Late").length;
  const absentCount = myRecords.filter(r => r.status === "Absent").length;
  const attendedCount = onTimeCount + lateCount;

  document.getElementById('stat-rate').textContent = totalSessions > 0
    ? Math.round((attendedCount / totalSessions) * 100) + "%"
    : "—";
  document.getElementById('stat-sessions').textContent = totalSessions;
  document.getElementById('stat-late').textContent = lateCount;

  document.getElementById('mini-attended').textContent = attendedCount + " / " + totalSessions;
  document.getElementById('mini-ontime').textContent = attendedCount > 0
    ? Math.round((onTimeCount / attendedCount) * 100) + "%"
    : "—";
  document.getElementById('mini-absences').textContent = absentCount;

  const listEl = document.getElementById('recent-checkins-list');
  if(myRecords.length){
    const rowsHtml = myRecords.slice(0, 5).map(r => {
      const icon = (r.course || "?").charAt(0);
      const badge = r.status === "Late" ? '<span class="badge late">Late</span>' :
        r.status === "Absent" ? '<span class="badge" style="background:#fee2e2;color:#b91c1c;">Absent</span>' :
        '<span class="badge">On time</span>';
      return '<div class="row-item">' +
        '<div class="row-icon">' + icon + '</div>' +
        '<div class="row-text"><div class="row-title">' + (r.course || "—") + '</div>' +
        '<div class="row-sub">' + (r.date || "—") + ', ' + (r.time || "—") + '</div></div>' +
        badge +
        '</div>';
    }).join("");
    listEl.innerHTML = rowsHtml;
  } else {
    listEl.innerHTML = '<p style="text-align:center;font-size:13px;color:var(--muted);padding:12px 0;margin:0;">No check-ins yet.</p>';
  }

  document.body.style.visibility = "visible";
}

// ---- scan.html ----
export async function initScanPage(){
  const currentUser = await requireRole("student");
  if(!currentUser) throw new Error("Redirecting to login");
  wireLogout();
  document.getElementById('nav-avatar').textContent = initials(currentUser.name);
  document.getElementById('student-name').value = currentUser.name;
  wireProfileMenu(currentUser);

  const html5QrCode = new Html5Qrcode("qr-reader");
  let handled = false;

  function getName(){
    return currentUser ? currentUser.name : null;
  }

  function parsePayload(decodedText){
    try{
      const data = JSON.parse(decodedText);
      if(data.sessionId) return data;
    }catch(e){  }
    return { sessionId: decodedText, course: "Unknown course", room: "Unknown room", building: "" };
  }

  function proceedToGps(payload, name){
    document.getElementById('session-title').textContent = payload.course || "Session";
    document.getElementById('session-sub').textContent =
      (payload.building ? payload.building + " · " : "") + (payload.room || "");

    sessionStorage.setItem("attendqr_pending", JSON.stringify({
      studentName: name,
      sessionId: payload.sessionId,
      course: payload.course,
      room: payload.room,
      building: payload.building,
      scannedAt: new Date().toISOString()
    }));

    setTimeout(() => { window.location.href = "gps.html"; }, 300);
  }

  function onScanSuccess(decodedText, decodedResult){
    if(handled) return;
    const name = getName();
    if(!name) return; 
    handled = true;
    html5QrCode.stop().catch(() => {}).finally(() => {
      proceedToGps(parsePayload(decodedText), name);
    });
  }

  function onScanFailure(error){}

  html5QrCode.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    },
    onScanSuccess,
    onScanFailure
  ).catch(err => {
    console.error("Unable to start QR scanner:", err);
    document.querySelector('.camera-hint').textContent = "Camera access denied or unavailable — use 'Enter code manually' below.";
  });

  document.getElementById('manual-entry-btn').addEventListener('click', async () => {
    const name = getName();
    if(!name) return;
    const code = prompt("Enter the session code shown on the lecturer's screen (e.g. the text under the QR code):");
    if(!code) return;

    const snap = await getDoc(doc(db, "sessions", "active"));
    const session = snap.exists() ? snap.data() : null;
    if(!session || session.sessionId !== code.trim().toUpperCase() || session.active === false){
      alert("That session code wasn't found. Double check it, or ask your lecturer to generate a new QR.");
      return;
    }
    if(html5QrCode && html5QrCode.isScanning){
      html5QrCode.stop().catch(() => {});
    }
    proceedToGps(session, name);
  });
}

// ---- records.html ----
export async function initRecordsPage(){
  const currentUser = await requireRole("student");
  if(!currentUser) throw new Error("Redirecting to login");
  wireLogout();
  document.getElementById('nav-avatar').textContent = initials(currentUser.name);
  wireProfileMenu(currentUser);

  const q = query(collection(db, "records"), where("studentName", "==", currentUser.name));
  const snap = await getDocs(q);
  const myRecords = snap.docs.map(d => d.data()).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  function badgeFor(status){
    if(status === "Late") return '<span class="badge late">Late</span>';
    if(status === "Absent") return '<span class="badge absent">Absent</span>';
    return '<span class="badge">On time</span>';
  }

  const onTimeCount = myRecords.filter(r => r.status === "On time").length;
  const lateCount = myRecords.filter(r => r.status === "Late").length;
  const absentCount = myRecords.filter(r => r.status === "Absent").length;

  document.getElementById('stat-total').textContent = myRecords.length;
  document.getElementById('stat-ontime').textContent = onTimeCount;
  document.getElementById('stat-late').textContent = lateCount;
  document.getElementById('stat-absent').textContent = absentCount;

  if(myRecords.length){
    const headerRow = document.getElementById('header-row');
    const rowsHtml = myRecords.map(r => {
      const icon = (r.course || "?").charAt(0);
      const location = ((r.building ? r.building + " / " : "") + (r.room || "")).trim() || "—";
      return '<tr>' +
        '<td><div class="session-cell"><div class="row-icon">' + icon + '</div>' + (r.course || "—") + '</div></td>' +
        '<td>' + (r.date || "—") + '</td>' +
        '<td>' + (r.time || "—") + '</td>' +
        '<td>' + location + '</td>' +
        '<td>' + badgeFor(r.status) + '</td>' +
        '</tr>';
    }).join("");
    headerRow.insertAdjacentHTML('afterend', rowsHtml);
  }

  const searchInput = document.getElementById('search-input');
  const courseFilter = document.getElementById('course-filter');
  const statusFilter = document.getElementById('status-filter');
  const table = document.getElementById('records-table');
  const noResults = document.getElementById('no-results');
  const paginationEl = document.querySelector('.pagination');
  const pageSummaryEl = paginationEl ? paginationEl.querySelector('span') : null;
  const pageBtnsEl = paginationEl ? paginationEl.querySelector('.page-btns') : null;

  const PAGE_SIZE = 5;
  let currentPage = 1;

  function matchesFilters(tr, term, course, status){
    const rowText = tr.textContent.toLowerCase();
    const rowCourseCell = tr.querySelector('.session-cell');
    const rowCourse = rowCourseCell ? rowCourseCell.textContent.trim().slice(1) : "";
    const rowStatusEl = tr.querySelector('.badge');
    const rowStatus = rowStatusEl ? rowStatusEl.textContent.trim() : "";

    const matchesTerm = !term || rowText.includes(term);
    const matchesCourse = !course || rowCourse === course;
    const matchesStatus = !status || rowStatus === status ||
      (status === "Late" && rowStatusEl && rowStatusEl.classList.contains('late')) ||
      (status === "Absent" && rowStatusEl && rowStatusEl.classList.contains('absent')) ||
      (status === "On time" && rowStatusEl && !rowStatusEl.classList.contains('late') && !rowStatusEl.classList.contains('absent'));

    return matchesTerm && matchesCourse && matchesStatus;
  }

  function renderPaginationControls(matchCount, totalPages){
    if(!pageSummaryEl || !pageBtnsEl) return;

    pageSummaryEl.textContent = matchCount === 0
      ? "Showing 0 of 0"
      : "Showing " + ((currentPage - 1) * PAGE_SIZE + 1) + "–" + Math.min(currentPage * PAGE_SIZE, matchCount) + " of " + matchCount;

    const allBtns = Array.from(pageBtnsEl.children);
    const numberBtns = allBtns.filter(el => el.textContent.trim() !== '›');
    const nextBtnEl = allBtns[allBtns.length - 1];

    const windowSize = numberBtns.length;
    const windowStart = Math.min(Math.max(1, currentPage - Math.floor(windowSize / 2)), Math.max(1, totalPages - windowSize + 1));

    numberBtns.forEach((btn, i) => {
      const pageNum = windowStart + i;
      if(pageNum > totalPages){
        btn.style.visibility = "hidden";
        btn.onclick = null;
        return;
      }
      btn.style.visibility = "";
      btn.textContent = pageNum;
      btn.classList.toggle('active', pageNum === currentPage);
      btn.onclick = () => { currentPage = pageNum; applyFilters(); };
    });

    if(nextBtnEl){
      const disabled = currentPage >= totalPages;
      nextBtnEl.style.opacity = disabled ? "0.4" : "";
      nextBtnEl.style.pointerEvents = disabled ? "none" : "";
      nextBtnEl.onclick = disabled ? null : () => { currentPage += 1; applyFilters(); };
    }
  }

  function applyFilters(){
    const term = searchInput.value.trim().toLowerCase();
    const course = courseFilter.value;
    const status = statusFilter.value;

    const rows = Array.from(table.querySelectorAll('tr')).filter(tr => tr.id !== 'header-row');
    const matching = rows.filter(tr => matchesFilters(tr, term, course, status));
    const totalPages = Math.max(1, Math.ceil(matching.length / PAGE_SIZE));
    if(currentPage > totalPages) currentPage = totalPages;
    if(currentPage < 1) currentPage = 1;

    const pageStart = (currentPage - 1) * PAGE_SIZE;
    const pageEnd = pageStart + PAGE_SIZE;

    rows.forEach(tr => { tr.style.display = "none"; });
    matching.slice(pageStart, pageEnd).forEach(tr => { tr.style.display = ""; });

    noResults.style.display = matching.length === 0 ? "" : "none";
    table.style.display = matching.length === 0 ? "none" : "";

    renderPaginationControls(matching.length, totalPages);
  }

  searchInput.addEventListener('input', () => { currentPage = 1; applyFilters(); });
  courseFilter.addEventListener('change', () => { currentPage = 1; applyFilters(); });
  statusFilter.addEventListener('change', () => { currentPage = 1; applyFilters(); });

  applyFilters();
}

// ---- confirmation.html ----
export async function initConfirmationPage(){
  const currentUser = await requireRole("student");
  if(!currentUser) throw new Error("Redirecting to login");
  wireLogout();
  document.getElementById('nav-avatar').textContent = initials(currentUser.name);
  wireProfileMenu(currentUser);

  const raw = sessionStorage.getItem("attendqr_last_record");
  let r = null;
  if(raw){
    try{ r = JSON.parse(raw); } catch(e){ r = null; }
  }
  if(r){
    document.getElementById('d-session').textContent = r.course || "—";
    document.getElementById('d-room').textContent = ((r.building || "") + (r.building ? " / " : "") + (r.room || "")).trim() || "—";
    document.getElementById('d-time').textContent = r.time || "—";
    const statusEl = document.getElementById('d-status');
    statusEl.textContent = r.status || "—";
    if(r.status === "Late"){
      statusEl.style.background = "#fef3c7";
      statusEl.style.color = "#92400e";
    }
  }
}

// ---- gps.html ----
export async function initGpsPage(){
  const currentUser = await requireRole("student");
  if(!currentUser) throw new Error("Redirecting to login");
  wireLogout();
  document.getElementById('nav-avatar').textContent = initials(currentUser.name);
  wireProfileMenu(currentUser);

  const pendingRaw = sessionStorage.getItem("attendqr_pending");
  let pending = null;
  if(pendingRaw){
    try{ pending = JSON.parse(pendingRaw); } catch(e){ pending = null; }
  }
  const PENDING_MAX_AGE_MS = 20 * 60 * 1000; // discard stale scans so an old check-in can't be replayed later
  if(pending && pending.scannedAt){
    const age = Date.now() - new Date(pending.scannedAt).getTime();
    if(!isFinite(age) || age > PENDING_MAX_AGE_MS){
      pending = null;
    }
  }
  if(!pending){
    sessionStorage.removeItem("attendqr_pending");
    window.location.href = "scan.html";
    throw new Error("Redirecting to scan — no valid pending check-in");
  }

  const sessionSnap = await getDoc(doc(db, "sessions", "active"));
  const savedSession = sessionSnap.exists() ? sessionSnap.data() : null;
  const sessionIsLive = !!savedSession && savedSession.sessionId === pending.sessionId && savedSession.active !== false;
  const session = sessionIsLive ? savedSession : null;

  let withinRange = false;
  let locating = false;

  function setPill(ok, label){
    const pill = document.getElementById('status-pill');
    pill.style.background = ok ? "#dcfce7" : "#fee2e2";
    pill.style.color = ok ? "#15803d" : "#b91c1c";
    pill.innerHTML = '<span class="status-dot" style="background:' + (ok ? "#15803d" : "#b91c1c") + ';"></span>' + label;
  }

  function haversineDistanceMeters(lat1, lng1, lat2, lng2){
    const R = 6371000;
    const toRad = (deg) => deg * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  function renderStatic(){
    document.getElementById('room-label').textContent = (pending.building ? pending.building + " · " : "") + (pending.room || "Room");
    document.getElementById('detail-session').textContent = pending.course || "—";
    document.getElementById('detail-radius').textContent = session ? session.radius + " m" : "—";
  }

  function locate(){
    renderStatic();

    if(!session){
      setPill(false, "Session ended");
      document.getElementById('detail-distance').textContent = "—";
      document.getElementById('continue-btn').disabled = true;
      withinRange = false;
      return;
    }

    if(session.lat == null || session.lng == null){
      setPill(false, "Location not set for this session");
      document.getElementById('detail-distance').textContent = "—";
      document.getElementById('continue-btn').disabled = true;
      withinRange = false;
      return;
    }

    if(!navigator.geolocation){
      setPill(false, "GPS unsupported on this device");
      document.getElementById('detail-distance').textContent = "—";
      document.getElementById('continue-btn').disabled = true;
      withinRange = false;
      return;
    }

    if(locating) return;
    locating = true;
    document.getElementById('continue-btn').disabled = true;
    document.getElementById('retry-btn').disabled = true;
    setPill(false, "Checking your location…");
    document.getElementById('detail-distance').textContent = "—";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        locating = false;
        document.getElementById('retry-btn').disabled = false;

        const { latitude, longitude } = position.coords;
        const dist = haversineDistanceMeters(latitude, longitude, session.lat, session.lng);
        const radius = Number(session.radius);

        document.getElementById('detail-distance').textContent = Math.round(dist) + " m";

        withinRange = dist <= radius;
        document.getElementById('continue-btn').disabled = !withinRange;
        setPill(withinRange, withinRange ? "Within check-in range" : "Outside check-in range");
      },
      (error) => {
        locating = false;
        document.getElementById('retry-btn').disabled = false;
        withinRange = false;
        document.getElementById('continue-btn').disabled = true;
        document.getElementById('detail-distance').textContent = "—";

        let msg = "Couldn't get your location";
        if(error.code === error.PERMISSION_DENIED) msg = "Location access denied — enable it in your browser settings";
        else if(error.code === error.POSITION_UNAVAILABLE) msg = "Location unavailable — try again";
        else if(error.code === error.TIMEOUT) msg = "Location check timed out — try again";
        setPill(false, msg);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  }

  document.getElementById('retry-btn').addEventListener('click', locate);

  document.getElementById('continue-btn').addEventListener('click', async () => {
    if(!session){
      alert("This session is no longer active. Ask your lecturer for a new QR code.");
      return;
    }
    if(!withinRange){
      alert("You're outside the allowed check-in radius. Move closer to the room and tap 'Retry location check'.");
      return;
    }

    const dupeQuery = query(
      collection(db, "records"),
      where("studentName", "==", pending.studentName),
      where("sessionId", "==", pending.sessionId)
    );
    const dupeSnap = await getDocs(dupeQuery);
    if(!dupeSnap.empty){
      sessionStorage.setItem("attendqr_last_record", JSON.stringify(dupeSnap.docs[0].data()));
      sessionStorage.removeItem("attendqr_pending");
      window.location.href = "confirmation.html";
      return;
    }

    const minutesSince = (Date.now() - session.createdAt) / 60000;
    const status = minutesSince <= 10 ? "On time" : "Late";
    const now = new Date();

    const record = {
      studentName: pending.studentName,
      course: pending.course,
      room: pending.room,
      building: pending.building,
      sessionId: pending.sessionId,
      date: now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      status: status,
      timestamp: now.toISOString()
    };

    await addDoc(collection(db, "records"), record);
    sessionStorage.setItem("attendqr_last_record", JSON.stringify(record));
    sessionStorage.removeItem("attendqr_pending");

    window.location.href = "confirmation.html";
  });

  locate();
}

// ---- lecturer-dashboard.html ----
export async function initLecturerDashboardPage(){
  const currentUser = await requireRole("lecturer");
  if(!currentUser) throw new Error("Redirecting to login");
  wireLogout();

  document.getElementById('greeting-text').textContent = "Good morning, " + currentUser.name;
  document.getElementById('nav-avatar').textContent = initials(currentUser.name.replace(/^Prof\.\s*/i, ""));
  wireProfileMenu(currentUser);

  const today = new Date();
  document.getElementById('greeting-sub').textContent = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  let unsubscribeRecords = null;
  let firstLoadDone = false;
  function revealOnce(){
    if(!firstLoadDone){
      firstLoadDone = true;
      document.body.style.visibility = "visible";
    }
  }

  function courseIcon(course){
    return (course || "?").charAt(0);
  }
  function isToday(ts){
    return new Date(ts).toDateString() === new Date().toDateString();
  }

  async function refreshDashboard(){
    const [recordsSnap, historySnap, activeSnap] = await Promise.all([
      getDocs(collection(db, "records")),
      getDocs(collection(db, "sessions_history")),
      getDoc(doc(db, "sessions", "active"))
    ]);
    const allRecords = recordsSnap.docs.map(d => d.data());
    const history = historySnap.docs.map(d => d.data());
    const activeSession = activeSnap.exists() ? activeSnap.data() : null;

    document.getElementById('stat-distinct-students').textContent = new Set(allRecords.map(r => r.studentName)).size;

    document.getElementById('stat-total-checkins').textContent = allRecords.length;

    const todaysSessions = history.filter(s => isToday(s.createdAt));
    if(activeSession && isToday(activeSession.createdAt)){
      todaysSessions.push({ ...activeSession, _live: true });
    }
    todaysSessions.sort((a, b) => a.createdAt - b.createdAt);
    document.getElementById('stat-sessions-today').textContent = todaysSessions.length;

    const table = document.getElementById('todays-sessions-table');
    const headerRow = document.getElementById('todays-header-row');
    Array.from(table.querySelectorAll('tr')).forEach(tr => { if(tr.id !== 'todays-header-row') tr.remove(); });

    const emptyEl = document.getElementById('todays-empty');
    if(todaysSessions.length === 0){
      emptyEl.style.display = "";
    } else {
      emptyEl.style.display = "none";
      const rowsHtml = todaysSessions.map(s => {
        const count = allRecords.filter(r => r.sessionId === s.sessionId).length;
        const time = new Date(s.createdAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
        const status = s._live ? '<span class="badge live">Live</span>' : '<span class="badge">Ended</span>';
        return '<tr>' +
          '<td><div class="session-cell"><div class="row-icon">' + courseIcon(s.course) + '</div>' + (s.course || "—") + '</div></td>' +
          '<td>' + (s.room || "—") + '</td>' +
          '<td>' + time + '</td>' +
          '<td>' + count + ' checked in</td>' +
          '<td>' + status + '</td>' +
          '</tr>';
      }).join("");
      headerRow.insertAdjacentHTML('afterend', rowsHtml);
    }
    const now = Date.now();
    const WEEK = 7 * 24 * 60 * 60 * 1000;
    const weekCounts = [];
    for(let i = 5; i >= 0; i--){
      const end = now - i * WEEK;
      const start = end - WEEK;
      weekCounts.push(allRecords.filter(r => {
        const t = new Date(r.timestamp).getTime();
        return t > start && t <= end;
      }).length);
    }
    const maxCount = Math.max(1, ...weekCounts);
    document.getElementById('trend-chart').innerHTML = weekCounts.map((c, i) => {
      const pct = Math.max(Math.round((c / maxCount) * 100), c > 0 ? 6 : 2);
      const hi = i === weekCounts.length - 1 ? ' hi' : '';
      return '<div class="bar-col"><div class="bar' + hi + '" style="height:' + pct + '%;" title="' + c + ' check-ins"></div><div class="bar-label">' + c + '</div></div>';
    }).join("");

    const courseCounts = {};
    allRecords.forEach(r => {
      const c = r.course || "Unknown";
      courseCounts[c] = (courseCounts[c] || 0) + 1;
    });
    const courseEntries = Object.entries(courseCounts).sort((a, b) => b[1] - a[1]);
    const coursesTable = document.getElementById('courses-table');
    coursesTable.innerHTML = courseEntries.length === 0
      ? '<tr><td style="color:var(--muted);">No check-ins recorded yet.</td></tr>'
      : courseEntries.map(([course, count]) =>
          '<tr><td>' + course + '</td><td style="text-align:right;font-weight:700;">' + count + ' check-ins</td></tr>'
        ).join("");

    const TWO_WEEKS = 14 * 24 * 60 * 60 * 1000;
    const cutoff = Date.now() - TWO_WEEKS;
    const lastSeenByCourse = {};
    allRecords.forEach(r => {
      const c = r.course || "Unknown";
      lastSeenByCourse[c] = lastSeenByCourse[c] || {};
      const t = new Date(r.timestamp).getTime();
      if(!lastSeenByCourse[c][r.studentName] || t > lastSeenByCourse[c][r.studentName]){
        lastSeenByCourse[c][r.studentName] = t;
      }
    });
    const alerts = [];
    Object.entries(lastSeenByCourse).forEach(([course, students]) => {
      const stale = Object.values(students).filter(t => t < cutoff).length;
      if(stale > 0){
        alerts.push({
          title: stale + (stale > 1 ? " students haven't" : " student hasn't") + " checked in recently",
          sub: course + " · No check-in in the last 14 days"
        });
      }
    });
    const alertsList = document.getElementById('alerts-list');
    alertsList.innerHTML = alerts.length === 0
      ? '<p style="text-align:center;font-size:12px;color:var(--muted);padding:6px 0;">No alerts right now.</p>'
      : alerts.map(a =>
          '<div class="alert-row">' +
            '<div class="alert-icon">!</div>' +
            '<div><div class="alert-title">' + a.title + '</div><div class="alert-sub">' + a.sub + '</div></div>' +
          '</div>'
        ).join("");
  }

  onSnapshot(doc(db, "sessions", "active"), async (snap) => {
    document.getElementById('stat-live-count').textContent = snap.exists() ? 1 : 0;
    const panel = document.getElementById('active-session-panel');

    if(unsubscribeRecords){ unsubscribeRecords(); unsubscribeRecords = null; }

    if(!snap.exists()){
      panel.style.display = "none";
      await refreshDashboard();
      revealOnce();
      return;
    }

    const session = snap.data();
    panel.style.display = "";
    document.getElementById('active-course').textContent = session.course;
    document.getElementById('active-room').textContent = (session.building ? session.building + " / " : "") + session.room;

    const q = query(collection(db, "records"), where("sessionId", "==", session.sessionId));
    unsubscribeRecords = onSnapshot(q, (recSnap) => {
      document.getElementById('active-checkins').textContent = recSnap.size;
    });

    await refreshDashboard();
    revealOnce();
  });
}

// ---- QR.html ----
export async function initQrPage(){
  const sessionRef = doc(db, "sessions", "active");

  const currentUser = await requireRole("lecturer");
  if(!currentUser) throw new Error("Redirecting to login");
  wireLogout();
  document.getElementById('nav-avatar').textContent = initials(currentUser.name.replace(/^Prof\.\s*/i, ""));
  wireProfileMenu(currentUser);

  let activeSessionId = null;
  let unsubscribeRecords = null;

  // Fixed classroom GPS anchors, keyed by course.
  const COURSE_LOCATIONS = {
    "ICT 101": { lat: 13.96358, lng: 100.58673 },
    "ICT 102": { lat: 13.96358, lng: 100.58673 },
    "ICT 103": { lat: 13.96358, lng: 100.58673 },
    "ICT 110": { lat: 13.96358, lng: 100.58673 },
    "ICT 113": { lat: 13.96358, lng: 100.58673 },
    "ICT 202": { lat: 13.96644, lng: 100.58650 },
    "ICT 209": { lat: 13.96644, lng: 100.58650 },
    "ICT 210": { lat: 13.96644, lng: 100.58650 },
    "ICT 211": { lat: 13.96644, lng: 100.58650 },
    "ICT 212": { lat: 13.96644, lng: 100.58650 }
  };

  function genCode(len = 6){
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let s = "";
    for(let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
    return s;
  }

  function showQrError(msg){
    const el = document.getElementById('qr-error');
    el.textContent = msg;
    el.classList.add('show');
  }
  function clearQrError(){
    document.getElementById('qr-error').classList.remove('show');
  }
  function friendlyFirebaseError(err){
    if(err && err.code === "permission-denied"){
      return "Firestore blocked this write (permission-denied). Check your Firestore security rules.";
    }
    if(err && err.message && err.message.includes("not-found")){
      return "Firestore isn't enabled for this project yet. Enable it in the Firebase console (Build → Firestore Database).";
    }
    return "Couldn't generate the QR code: " + (err && err.message ? err.message : err);
  }

  function renderQR(session){
    const frame = document.getElementById('qr-frame');
    frame.innerHTML = "";
    new QRCode(frame, {
      text: JSON.stringify({ sessionId: session.sessionId, course: session.course, room: session.room, building: session.building }),
      width: 248,
      height: 248,
      correctLevel: QRCode.CorrectLevel.H
    });
    document.getElementById('session-code-display').textContent = "Session code (for manual entry): " + session.sessionId;
    document.getElementById('qr-course').textContent = session.course;
    document.getElementById('qr-room').textContent = (session.building ? session.building + " / " : "") + session.room;
    document.getElementById('timer-pill').innerHTML = '<span class="timer-dot"></span>Active · ' + session.lengthMin + ' min session';
    document.getElementById('qr-gps').textContent = (session.lat != null && session.lng != null)
      ? session.lat.toFixed(5) + ', ' + session.lng.toFixed(5)
      : "Not set";
  }

  function updateLiveList(records){
    const listEl = document.getElementById('live-list');
    document.getElementById('checkin-count').textContent = records.length + " checked in";

    if(records.length === 0){
      listEl.innerHTML = '<div class="live-row" style="color:var(--muted);">No check-ins yet for this session.</div>';
      return;
    }
    listEl.innerHTML = records.slice().reverse().map(r => {
      const initials = r.studentName.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
      return '<div class="live-row"><div class="live-avatar">' + initials + '</div><div class="live-name">' + r.studentName + '</div><span class="live-time">' + r.time + '</span></div>';
    }).join("");
  }

  function watchRecords(sessionId){
    if(unsubscribeRecords) unsubscribeRecords();
    const q = query(collection(db, "records"), where("sessionId", "==", sessionId));
    unsubscribeRecords = onSnapshot(q, (snap) => {
      updateLiveList(snap.docs.map(d => d.data()));
    });
  }

  async function generateSession(){
    clearQrError();
    const course = document.getElementById('course-select').value;
    const room = document.getElementById('room-input').value.trim() || "Room";
    const lengthMin = parseInt(document.getElementById('length-select').value, 10);
    const radius = document.getElementById('radius-select').value;
    const building = "";

    const sessionId = genCode();
    const now = Date.now();
    const loc = COURSE_LOCATIONS[course] || null;
    const session = {
      sessionId, course, room, building, radius, lengthMin,
      createdAt: now, expiresAt: now + lengthMin * 60000,
      lat: loc ? loc.lat : null,
      lng: loc ? loc.lng : null
    };

    const btn = document.getElementById('generate-btn');
    const refreshBtn = document.getElementById('refresh-btn');
    btn.disabled = true; refreshBtn.disabled = true;

    try{
      await setDoc(sessionRef, session);
      activeSessionId = sessionId;
      renderQR(session);
      watchRecords(sessionId);
    } catch(err){
      console.error("generateSession failed:", err);
      showQrError(friendlyFirebaseError(err));
    } finally{
      btn.disabled = false; refreshBtn.disabled = false;
    }
  }

  document.getElementById('generate-btn').addEventListener('click', generateSession);
  document.getElementById('refresh-btn').addEventListener('click', generateSession);

  document.getElementById('stop-btn').addEventListener('click', async () => {
    if(!activeSessionId) return;
    clearQrError();
    try{
      await deleteDoc(sessionRef);
    } catch(err){
      console.error("Ending session failed:", err);
      showQrError(friendlyFirebaseError(err));
      return;
    }
    activeSessionId = null;
    if(unsubscribeRecords) unsubscribeRecords();

    document.getElementById('qr-frame').innerHTML = '<span style="color:var(--muted);font-size:12px;">Generate a QR to display it here</span>';
    document.getElementById('session-code-display').textContent = "";
    document.getElementById('timer-pill').innerHTML = 'No active session';
    document.getElementById('qr-course').textContent = "—";
    document.getElementById('qr-room').textContent = "—";
    document.getElementById('checkin-count').textContent = "0";
    document.getElementById('qr-gps').textContent = "—";
    document.getElementById('live-list').innerHTML = '<div class="live-row" style="color:var(--muted);">Generate a QR code to start seeing live check-ins.</div>';
  });

  try{
    const existing = await getDoc(sessionRef);
    if(existing.exists()){
      const session = existing.data();
      activeSessionId = session.sessionId;
      renderQR(session);
      watchRecords(session.sessionId);
    }
  } catch(err){
    console.error("Loading existing session failed:", err);
    showQrError(friendlyFirebaseError(err));
  } finally{
    document.body.style.visibility = "visible";
  }
}
