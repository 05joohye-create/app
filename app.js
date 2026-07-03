document.addEventListener("DOMContentLoaded", () => {
  const tripStart = new Date("2026-10-28T00:00:00");
  const today = new Date();

  const diff = Math.ceil(
    (tripStart.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  const ddayEl = document.querySelector(".d-day");
  if (ddayEl) {
    ddayEl.innerText = diff > 0 ? `D-${diff}` : "D-Day";
  }
});
