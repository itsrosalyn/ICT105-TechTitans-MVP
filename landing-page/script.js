const CTA_KEY = "attendqr_cta_clicks";
const DEMO_KEY = "attendqr_demo_clicks";

function loadCount(key) {
  try {
    const stored = localStorage.getItem(key);
    return stored !== null ? Number(stored) || 0 : 0;
  } catch (err) {
    console.warn(`Couldn't read "${key}" from localStorage, starting at 0 for this session.`, err);
    return 0;
  }
}

function saveCount(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    console.warn(`Couldn't save "${key}" to localStorage — count won't persist after this session.`, err);
  }
}

let ctaClicks = loadCount(CTA_KEY);
let demoClicks = loadCount(DEMO_KEY);

document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.getElementById("ctaButton");
  const demoButton = document.getElementById("demoButton");
  const ctaCountEl = document.getElementById("ctaCount");
  const ctaTableCountEl = document.getElementById("ctaTableCount");
  const demoCountEl = document.getElementById("demoCount");
  const demoMessageEl = document.getElementById("demoMessage");
  const tryEl = document.getElementById("try");

  if (ctaCountEl) ctaCountEl.textContent = ctaClicks;
  if (ctaTableCountEl) ctaTableCountEl.textContent = ctaClicks;
  if (demoCountEl) demoCountEl.textContent = demoClicks;

  if (!ctaButton || !demoButton) {
    console.error("AttendQR: ctaButton or demoButton not found in the page.");
    return;
  }

  ctaButton.addEventListener("click", () => {
    ctaClicks++;
    saveCount(CTA_KEY, ctaClicks);
    if (ctaCountEl) ctaCountEl.textContent = ctaClicks;
    if (ctaTableCountEl) ctaTableCountEl.textContent = ctaClicks;
    if (tryEl) tryEl.scrollIntoView({ behavior: "smooth" });
  });

  demoButton.addEventListener("click", () => {
    demoClicks++;
    saveCount(DEMO_KEY, demoClicks);
    if (demoCountEl) demoCountEl.textContent = demoClicks;
    if (demoMessageEl) demoMessageEl.textContent = "Opening the prototype...";

    window.location.href = "https://attend-qr-1.netlify.app/index.html";
  });
});