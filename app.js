// =========================
// D-DAY 자동 계산
// =========================
const tripStart = new Date("2026-10-28");
const today = new Date();

const diff = Math.ceil((tripStart - today) / (1000 * 60 * 60 * 24));

document.addEventListener("DOMContentLoaded", () => {
  const ddayEl = document.querySelector(".d-day");
  if (ddayEl) {
    ddayEl.innerText = `D-${diff}`;
  }
});

// =========================
// 카드 클릭 애니메이션
// =========================
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.add("active-pop");

    setTimeout(() => {
      card.classList.remove("active-pop");
    }, 200);
  });
});

// =========================
// 플로팅 버튼 클릭 효과
// =========================
const fab = document.querySelector(".floating-btn");

if (fab) {
  fab.addEventListener("click", () => {
    fab.classList.add("clicked");

    setTimeout(() => {
      fab.classList.remove("clicked");
    }, 200);
  });
}
