const moodNotes = {
  senang: {
    icon: "☀️",
    title: "Senang itu layak dirayakan.",
    message: "Nikmati rasa ringan ini tanpa perlu alasan besar. Momen kecil pun pantas disyukuri.",
    suggestion: "Bagikan kabar baikmu ke seseorang yang kamu sayangi."
  },
  tenang: {
    icon: "🍃",
    title: "Rasanya menyenangkan bisa bernapas lega.",
    message: "Simpan sedikit ruang untuk menikmati ketenangan yang sedang kamu rasakan.",
    suggestion: "Jauhkan layar sebentar dan nikmati minuman favoritmu."
  },
  lelah: {
    icon: "🌙",
    title: "Kamu sudah melakukan cukup banyak.",
    message: "Beristirahat bukan berarti menyerah. Tubuh dan pikiranmu juga perlu waktu untuk pulih.",
    suggestion: "Minum segelas air, lalu istirahat tanpa merasa bersalah."
  },
  cemas: {
    icon: "🌱",
    title: "Pelan-pelan saja, kamu ada di sini.",
    message: "Kamu tak harus menyelesaikan semuanya sekarang. Coba kembali ke satu hal yang bisa kamu kendalikan.",
    suggestion: "Tarik napas 4 hitungan, tahan 4, lalu embuskan 6. Ulangi tiga kali."
  },
  semangat: {
    icon: "✨",
    title: "Energi baikmu bisa membawamu melangkah.",
    message: "Gunakan semangatmu dengan ritme yang tetap ramah untuk diri sendiri.",
    suggestion: "Pilih satu hal penting dan mulai dari langkah terkecil."
  }
};

const moodButtons = document.querySelectorAll(".mood-card");
const result = document.querySelector("#hasil");
const resetButton = document.querySelector("#reset-button");

function chooseMood(mood) {
  const note = moodNotes[mood];
  if (!note) return;

  moodButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.mood === mood));
  });

  document.querySelector("#result-icon").textContent = note.icon;
  document.querySelector("#result-title").textContent = note.title;
  document.querySelector("#result-message").textContent = note.message;
  document.querySelector("#result-suggestion").textContent = note.suggestion;
  result.hidden = false;
}

moodButtons.forEach((button) => {
  button.addEventListener("click", () => chooseMood(button.dataset.mood));
});

resetButton.addEventListener("click", () => {
  result.hidden = true;
  moodButtons.forEach((button) => button.setAttribute("aria-pressed", "false"));
  moodButtons[0].focus();
});
