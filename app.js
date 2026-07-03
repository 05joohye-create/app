document.addEventListener("DOMContentLoaded", () => {
  const startDate = new Date("2026-10-28T00:00:00");

  const now = new Date();
  now.setHours(0,0,0,0);

  const diff = Math.ceil((startDate - now) / (1000 * 60 * 60 * 24));

  const el = document.querySelector(".d-day");

  if (!el) return;

  if (diff > 0) {
    el.innerText = `D-${diff}`;
  } else if (diff === 0) {
    el.innerText = "D-DAY";
  } else {
    el.innerText = `D+${Math.abs(diff)}`;
  }
});
