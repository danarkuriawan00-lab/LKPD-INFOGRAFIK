const QUESTIONS = [
  {
    n: 1,
    level: "L1",
    text: "Berdasarkan tampilan visual infografik pada gambar di atas, tujuan utama penggunaan kombinasi gambar, warna, dan teks singkat adalah...",
    options: {
      A: "Menghabiskan ruang pada kertas agar terlihat penuh",
      B: "Mempermudah pembaca memahami informasi dengan cepat dan menarik",
      C: "Menggantikan seluruh isi buku pelajaran menjadi gambar",
      D: "Menyembunyikan data penting agar pembaca menebak sendiri",
    },
    answer: "B",
    explain:
      "Infografik memadukan gambar, warna, dan teks ringkas agar pesan kesehatan lebih cepat dipahami dan menarik.",
  },
  {
    n: 2,
    level: "L1",
    text: "Bagian infografik di atas yang terletak di posisi paling atas dan berfungsi memberikan gambaran umum mengenai seluruh isi pesan dinamakan...",
    options: {
      A: "Catatan kaki",
      B: "Judul infografik",
      C: "Sumber data",
      D: "Ilustrasi pendukung",
    },
    answer: "B",
    explain: "Judul berada di bagian paling atas dan merangkum topik seluruh infografik.",
  },
  {
    n: 3,
    level: "L2",
    text: "Pada infografik di atas terdapat panduan gambar piring yang dibagi menjadi beberapa bagian (makanan pokok, lauk-pauk, buah, dan sayur). Maksud penyampaian informasi melalui gambar tersebut adalah...",
    options: {
      A: "Menunjukkan bahwa kita harus makan empat kali sehari",
      B: "Memberikan panduan visual mengenai proporsi gizi seimbang dalam sekali makan",
      C: "Memaksa pembaca membeli jenis piring tertentu",
      D: "Menjelaskan tata cara mencuci piring yang benar",
    },
    answer: "B",
    explain: "Gambar piring adalah panduan visual porsi gizi seimbang, bukan frekuensi makan atau cara mencuci piring.",
  },
  {
    n: 4,
    level: "L2",
    text: 'Bacalah cuplikan teks singkat yang terdapat pada infografik di atas: "Minum air putih minimal 8 gelas sehari untuk menjaga hidrasi tubuh." Tindakan yang paling sesuai dengan imbauan infografik tersebut adalah...',
    options: {
      A: "Mengganti air putih dengan minuman bersoda setiap hari",
      B: "Memenuhi kebutuhan cairan tubuh dengan rutin minum air putih secara teratur",
      C: "Minum 8 gelas air sekaligus hanya di pagi hari",
      D: "Menghindari minum air putih saat berolahraga",
    },
    answer: "B",
    explain: "Imbauan itu meminta hidrasi teratur dengan air putih, bukan soda, bukan diminum sekaligus, dan tetap penting saat olahraga.",
  },
  {
    n: 5,
    level: "L3",
    text: 'Mengapa informasi mengenai "Pola Hidup Sehat" pada gambar di atas lebih efektif disajikan dalam bentuk infografik dibandingkan teks bacaan panjang sepanjang tiga halaman?',
    options: {
      A: "Karena infografik tidak memerlukan data fakta ilmiah",
      B: "Karena membaca teks panjang membutuhkan waktu lebih lama, sedangkan infografik langsung menonjolkan poin inti melalui ilustrasi yang mempermudah pemahaman",
      C: "Karena anak-anak tidak bisa membaca teks yang mengandung huruf",
      D: "Karena infografik selalu memuat cerita rekaan atau fiksi",
    },
    answer: "B",
    explain: "Kekuatan infografik ada pada ringkasnya poin kunci plus ilustrasi, bukan karena data ilmiah tidak perlu atau isinya fiksi.",
  },
  {
    n: 6,
    level: "L1",
    text: "Berdasarkan infografik di atas, informasi visual utama yang disampaikan kepada pembaca berkaitan dengan...",
    options: {
      A: "Tata cara memilih pakaian olahraga",
      B: "Komposisi dan aturan pola makan sehat sehari-hari",
      C: "Jadwal kegiatan belajar di sekolah",
      D: "Bahaya penggunaan plastik sekali pakai",
    },
    answer: "B",
    explain: "Fokus stimulus 2 adalah komposisi dan aturan pola makan sehat, bukan pakaian, jadwal sekolah, atau plastik.",
  },
  {
    n: 7,
    level: "L2",
    text: "Jenis penyajian data pada gambar di atas dikategorikan sebagai infografik informasi karena...",
    options: {
      A: "Berisi daftar harga bahan makanan di pasar",
      B: "Menyajikan fakta dan saran kesehatan yang dikemas ringkas dengan visual menarik",
      C: "Berisi peta lokasi rumah sakit di Indonesia",
      D: "Menjelaskan sejarah perkembangan alat masak modern",
    },
    answer: "B",
    explain: "Infografik informasi menyajikan fakta/saran secara ringkas dan visual, bukan daftar harga, peta, atau sejarah alat masak.",
  },
  {
    n: 8,
    level: "L1",
    text: 'Berdasarkan infografik "5 Manfaat Bersepeda" pada gambar di atas, salah satu manfaat fisik yang didapatkan dari kegiatan bersepeda secara rutin adalah...',
    options: {
      A: "Melatih kemampuan membaca cepat",
      B: "Menguatkan otot kaki dan menjaga kesehatan jantung",
      C: "Menambah tinggi badan secara instan",
      D: "Mengurangi kebutuhan tidur malam",
    },
    answer: "B",
    explain: "Bersepeda adalah olahraga yang menguatkan otot kaki dan menjaga kesehatan jantung.",
  },
  {
    n: 9,
    level: "L2",
    text: "Dandi merasa sering stres dan mudah lelah setelah belajar seharian. Berdasarkan infografik di atas, saran kegiatan yang paling tepat untuk Dandi adalah...",
    options: {
      A: "Duduk bermain gim ponsel sepanjang malam",
      B: "Bersepeda santai di sore hari untuk menyegarkan pikiran dan menjaga kebugaran",
      C: "Menghindari segala bentuk olahraga outdoor",
      D: "Mengurangi konsumsi air putih saat beraktivitas",
    },
    answer: "B",
    explain: "Infografik menekankan manfaat bersepeda bagi kebugaran dan penyegaran pikiran, cocok untuk meredakan stres.",
  },
  {
    n: 10,
    level: "L2",
    text: "Perhatikan dua poin manfaat dalam infografik tersebut: mengendalikan berat badan dan meningkatkan daya tahan tubuh. Hubungan antara kedua poin manfaat tersebut bagi seorang pelajar adalah...",
    options: {
      A: "Bersepeda menjaga tubuh tetap sehat dan fit sehingga tidak mudah sakit saat beraktivitas di sekolah",
      B: "Bersepeda membuat tubuh menjadi lemas sehingga tidak bisa konsentrasi belajar",
      C: "Bersepeda hanya berguna untuk orang dewasa yang ingin menurunkan berat badan",
      D: "Poin 1 dan poin 2 saling bertentangan satu sama lain",
    },
    answer: "A",
    explain: "Kedua manfaat saling menunjang: tubuh lebih sehat dan daya tahan naik, sehingga pelajar lebih bugar di sekolah.",
  },
  {
    n: 11,
    level: "L3",
    text: "Seorang pembaca mengkritik infografik 5 Manfaat Bersepeda di atas karena hanya menampilkan ikon dan kalimat pendek tanpa penjelasan medis yang rumit. Menurut analisis kualitatif infografik, apakah kritik tersebut tepat?",
    options: {
      A: "Tepat, karena infografik wajib memuat seluruh isi buku kedokteran",
      B: "Tidak tepat, karena ciri utama infografik adalah menyampaikan poin-poin kunci secara ringkas dan visual agar mudah dicerna masyarakat umum",
      C: "Tepat, karena semakin panjang kalimat dalam infografik, semakin bagus kualitasnya",
      D: "Tidak tepat, karena infografik seharusnya hanya berisi gambar tanpa huruf sama sekali",
    },
    answer: "B",
    explain: "Kritik itu tidak tepat. Infografik justru unggul karena ringkas, visual, dan mudah dicerna, bukan karena meniru buku kedokteran.",
  },
  {
    n: 12,
    level: "L1",
    text: "Berdasarkan infografik kewaspadaan penyakit campak pada gambar di atas, tanda atau gejala awal yang umum dialami penderita adalah...",
    options: {
      A: "Sakit gigi dan gusi bengkak",
      B: "Demam tinggi, timbul ruam merah pada kulit, serta batuk/pilek",
      C: "Nyeri pada pergelangan tangan",
      D: "Penglihatan kabur sejak lahir",
    },
    answer: "B",
    explain: "Gejala khas campak meliputi demam tinggi, ruam merah, serta batuk atau pilek.",
  },
  {
    n: 13,
    level: "L1",
    text: "Poin penting pencegahan utama penyakit campak yang ditegaskan dalam infografik di atas adalah melalui...",
    options: {
      A: "Pemberian imunisasi/vaksinasi",
      B: "Memakai pakaian tebal setiap hari",
      C: "Menjauhi olahraga di luar rumah",
      D: "Mengonsumsi makanan manis berlebihan",
    },
    answer: "A",
    explain: "Pencegahan utama campak adalah imunisasi/vaksinasi.",
  },
  {
    n: 14,
    level: "L2",
    text: "Di sebuah sekolah, ditemukan salah satu siswa mengalami gejala demam dan timbul ruam merah. Berdasarkan pesan imbauan pada infografik di atas, langkah awal yang harus dilakukan pihak sekolah/orang tua adalah...",
    options: {
      A: "Membiarkan anak tetap bermain bersama teman-teman di kelas",
      B: "Memeriksakan anak ke fasilitas kesehatan dan mengisolasi mandiri agar tidak menularkan ke siswa lain",
      C: "Menyuruh anak berolahraga lari maraton",
      D: "Mengabaikan gejala karena ruam merah akan hilang sendiri tanpa penanganan",
    },
    answer: "B",
    explain: "Campak menular. Anak perlu diperiksa ke faskes dan diisolasi agar tidak menulari siswa lain.",
  },
  {
    n: 15,
    level: "L3",
    text: "Sebuah infografik kesehatan memuat data peningkatan kasus campak beserta grafik kenaikan angkanya. Apa fungsi utama keberadaan grafik angka/statistik tersebut dalam infografik di atas?",
    options: {
      A: "Hiasan visual agar halaman infografik tampak berwarna-warni",
      B: "Menunjukkan bukti fakta yang akurat agar masyarakat lebih waspada terhadap tingkat keparahan situasi",
      C: "Membingungkan pembaca yang tidak suka pelajaran matematika",
      D: "Mengurangi keterbacaan teks utama infografik",
    },
    answer: "B",
    explain: "Grafik statistik memberi bukti fakta agar pembaca lebih waspada, bukan sekadar hiasan atau penghambat baca.",
  },
];

const form = document.getElementById("quizForm");
const resultEl = document.getElementById("result");
const progressText = document.getElementById("progressText");

function renderQuestions() {
  document.querySelectorAll(".questions").forEach((box) => {
    const from = Number(box.dataset.from);
    const to = Number(box.dataset.to);
    box.innerHTML = QUESTIONS.filter((q) => q.n >= from && q.n <= to)
      .map((q) => {
        const opts = Object.entries(q.options)
          .map(
            ([key, val]) => `
            <label class="option" data-q="${q.n}" data-key="${key}">
              <input type="radio" name="q${q.n}" value="${key}" />
              <span><strong>${key}.</strong> ${val}</span>
            </label>`
          )
          .join("");
        return `
          <article class="question" id="q-${q.n}">
            <div class="q-head">
              <span class="level">${q.level}</span>
              <p class="q-text"><span class="num">${q.n}.</span> ${q.text}</p>
            </div>
            <div class="options">${opts}</div>
            <div class="feedback" id="fb-${q.n}"></div>
          </article>`;
      })
      .join("");
  });
}

function selectedCount() {
  return QUESTIONS.filter((q) => form[`q${q.n}`] && form[`q${q.n}`].value).length;
}

function updateProgress() {
  progressText.textContent = `${selectedCount()} dari 15 soal terjawab`;
}

function markSelected(input) {
  const name = input.name;
  document.querySelectorAll(`input[name="${name}"]`).forEach((el) => {
    el.closest(".option").classList.toggle("selected", el.checked);
  });
  updateProgress();
}

function grade() {
  let score = 0;
  QUESTIONS.forEach((q) => {
    const picked = form[`q${q.n}`].value;
    const fb = document.getElementById(`fb-${q.n}`);
    document.querySelectorAll(`input[name="q${q.n}"]`).forEach((el) => {
      el.disabled = true;
      const lab = el.closest(".option");
      lab.classList.remove("selected", "correct", "wrong");
      if (el.value === q.answer) lab.classList.add("correct");
      if (picked && el.value === picked && picked !== q.answer) lab.classList.add("wrong");
    });
    const ok = picked === q.answer;
    if (ok) score += 1;
    fb.className = `feedback show ${ok ? "ok" : "no"}`;
    fb.textContent = ok
      ? `Benar. ${q.explain}`
      : `Kurang tepat. Kunci: ${q.answer}. ${q.explain}`;
  });

  document.getElementById("scoreValue").textContent = score;
  const label =
    score === 15
      ? "Sempurna! Pemahaman infografik kesehatanmu sangat kuat."
      : score >= 12
        ? "Baik sekali. Beberapa poin masih bisa dipertegas."
        : score >= 9
          ? "Cukup. Ulangi stimulus yang masih keliru."
          : "Perlu latihan lagi. Baca ulang infografik dan pembahasan.";
  document.getElementById("scoreLabel").textContent = label;
  document.getElementById("scoreBar").style.width = `${(score / 15) * 100}%`;
  resultEl.classList.remove("hidden");
  document.body.classList.add("reviewed");
  resultEl.scrollIntoView({ behavior: "smooth", block: "center" });
}

function resetQuiz() {
  form.reset();
  document.body.classList.remove("reviewed");
  resultEl.classList.add("hidden");
  document.querySelectorAll(".option").forEach((el) => {
    el.classList.remove("selected", "correct", "wrong");
  });
  document.querySelectorAll('input[type="radio"]').forEach((el) => {
    el.disabled = false;
  });
  document.querySelectorAll(".feedback").forEach((el) => {
    el.className = "feedback";
    el.textContent = "";
  });
  updateProgress();
  document.getElementById("petunjuk").scrollIntoView({ behavior: "smooth" });
}

renderQuestions();
updateProgress();

form.addEventListener("change", (e) => {
  if (e.target.matches('input[type="radio"]')) markSelected(e.target);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (selectedCount() < 15) {
    const firstBlank = QUESTIONS.find((q) => !form[`q${q.n}`].value);
    alert("Lengkapi semua soal sebelum diperiksa.");
    if (firstBlank) document.getElementById(`q-${firstBlank.n}`).scrollIntoView({ behavior: "smooth" });
    return;
  }
  grade();
});

document.getElementById("resetBtn").addEventListener("click", resetQuiz);
document.getElementById("retryBtn").addEventListener("click", resetQuiz);
