/* ============================================================
   script.js – MABB97 School Friends Memory Website
   ============================================================ */

// ── Photo Data ──────────────────────────────────────────────
const photos = [
  { file: "20200430_191747.jpg", year: "2020" },
  { file: "20200604_123914.jpg", year: "2020" },
  { file: "20200604_141110.jpg", year: "2020" },
  { file: "20200604_154930.jpg", year: "2020" },
  { file: "20200604_174121.jpg", year: "2020" },
  { file: "20200604_181806.jpg", year: "2020" },
  { file: "20200604_181809.jpg", year: "2020" },
  { file: "20200604_181823.jpg", year: "2020" },
  { file: "20200606_132935.jpg", year: "2020" },
  { file: "20200618_174112.jpg", year: "2020" },
  { file: "20200618_174118.jpg", year: "2020" },
  { file: "20200623_164017.jpg", year: "2020" },
  { file: "20200623_183506.jpg", year: "2020" },
  { file: "20200628_113204.jpg", year: "2020" },
  { file: "20200628_132045.jpg", year: "2020" },
  { file: "20200628_132052.jpg", year: "2020" },
  { file: "20200628_132058.jpg", year: "2020" },
  { file: "20200705_130738.jpg", year: "2020" },
  { file: "20200705_143920.jpg", year: "2020" },
  { file: "20200713_133253.jpg", year: "2020" },
  { file: "20200713_150139.jpg", year: "2020" },
  { file: "20200713_165345.jpg", year: "2020" },
  { file: "20200715_173151.jpg", year: "2020" },
  { file: "20200715_173235.jpg", year: "2020" },
  { file: "20200728_125507.jpg", year: "2020" },
  { file: "20200730_195009.jpg", year: "2020" },
  { file: "20200731_144549.jpg", year: "2020" },
  { file: "20200731_175521.jpg", year: "2020" },
  { file: "20200812_155210.jpg", year: "2020" },
  { file: "20200815_014418.jpg", year: "2020" },
  { file: "20200919_223338.jpg", year: "2020" },
  { file: "20201009_152938.jpg", year: "2020" },
  { file: "20201207_185819.jpg", year: "2020" },
  { file: "20201231_175910.jpg", year: "2020" },
  { file: "IMG-20200801-WA0002.jpg", year: "2020" },
  { file: "IMG-20200804-WA0004.jpg", year: "2020" },
  { file: "IMG-20200815-WA0004.jpg", year: "2020" },
  { file: "IMG-20200815-WA0006.jpg", year: "2020" },
  { file: "IMG-20200815-WA0012.jpg", year: "2020" },
  { file: "IMG-20200815-WA0022.jpg", year: "2020" },
  { file: "IMG-20200815-WA0036.jpg", year: "2020" },
  { file: "IMG-20200815-WA0041.jpg", year: "2020" },
  { file: "IMG-20200815-WA0064.jpg", year: "2020" },
  { file: "IMG-20200817-WA0002.jpg", year: "2020" },
  { file: "IMG-20200820-WA0000.jpg", year: "2020" },
  { file: "IMG-20200820-WA0002.jpg", year: "2020" },
  { file: "20210316_202820.jpg", year: "2021" },
  { file: "IMG-20210905-WA0003.jpg", year: "2021" },
  { file: "IMG-20210911-WA0053.jpg", year: "2021" },
  { file: "IMG-20210911-WA0054.jpg", year: "2021" },
  { file: "IMG-20210911-WA0056.jpg", year: "2021" },
  { file: "IMG-20210911-WA0057.jpg", year: "2021" },
  { file: "IMG-20210911-WA0061.jpg", year: "2021" },
  { file: "IMG-20211003-WA0004.jpg", year: "2021" },
  { file: "IMG-20220116-WA0005.jpg", year: "2022" },
  { file: "IMG-20220303-WA0014.jpg", year: "2022" },
  { file: "IMG-20220303-WA0015.jpg", year: "2022" },
  { file: "IMG-20220318-WA0019.jpg", year: "2022" },
  { file: "IMG-20220325-WA0004.jpg", year: "2022" },
  { file: "IMG-20220501-WA0008.jpg", year: "2022" },
  { file: "IMG-20220501-WA0011.jpg", year: "2022" },
  { file: "IMG-20220501-WA0012.jpg", year: "2022" },
  { file: "IMG-20220501-WA0013.jpg", year: "2022" },
  { file: "IMG-20220501-WA0014.jpg", year: "2022" },
  { file: "IMG-20220501-WA0015.jpg", year: "2022" },
  { file: "IMG-20220501-WA0016.jpg", year: "2022" },
  { file: "IMG-20220501-WA0017.jpg", year: "2022" },
  { file: "IMG-20220501-WA0018.jpg", year: "2022" },
  { file: "IMG-20220501-WA0019.jpg", year: "2022" },
  { file: "IMG-20220501-WA0021.jpg", year: "2022" },
  { file: "IMG-20220501-WA0022.jpg", year: "2022" },
  { file: "IMG-20220502-WA0013~2.jpg", year: "2022" },
  { file: "IMG-20220502-WA0015.jpg", year: "2022" },
  { file: "IMG-20220502-WA0017.jpg", year: "2022" },
  { file: "IMG-20220503-WA0010.jpg", year: "2022" },
  { file: "IMG-20220531-WA0003.jpg", year: "2022" },
];

// ── Helpers ──────────────────────────────────────────────────
function formatDateFromFilename(filename) {
  const m = filename.match(/(\d{4})(\d{2})(\d{2})/);
  if (!m) return "";
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const y = m[1], mo = parseInt(m[2]) - 1, d = parseInt(m[3]);
  return `${months[mo]} ${d}, ${y}`;
}

// ── Build Gallery ─────────────────────────────────────────────
function buildGallery() {
  const grid = document.getElementById("gallery-grid");
  grid.innerHTML = "";
  photos.forEach((photo, idx) => {
    const item = document.createElement("div");
    item.className = "gallery-item reveal";
    item.dataset.year = photo.year;
    item.dataset.idx = idx;

    const dateTxt = formatDateFromFilename(photo.file);

    item.innerHTML = `
      <img src="Photos/${photo.file}" alt="Memory ${idx + 1}" loading="lazy" />
      <div class="gallery-item-overlay">
        <span class="gallery-item-date">${dateTxt}</span>
      </div>
    `;

    item.addEventListener("click", () => openLightbox(idx));
    grid.appendChild(item);
  });
}

// ── Lightbox ──────────────────────────────────────────────────
let currentIdx = 0;

function openLightbox(idx) {
  currentIdx = idx;
  const lb = document.getElementById("lightbox");
  const backdrop = document.getElementById("lb-backdrop");
  const img = document.getElementById("lb-img");
  const caption = document.getElementById("lb-caption");
  const photo = photos[idx];
  img.src = `Photos/${photo.file}`;
  caption.textContent = formatDateFromFilename(photo.file) || photo.file;
  lb.classList.add("active");
  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.getElementById("lb-backdrop").classList.remove("active");
  document.body.style.overflow = "";
}

function prevPhoto() {
  currentIdx = (currentIdx - 1 + photos.length) % photos.length;
  openLightbox(currentIdx);
}

function nextPhoto() {
  currentIdx = (currentIdx + 1) % photos.length;
  openLightbox(currentIdx);
}

document.getElementById("lb-close").addEventListener("click", closeLightbox);
document.getElementById("lb-backdrop").addEventListener("click", closeLightbox);
document.getElementById("lb-prev").addEventListener("click", (e) => { e.stopPropagation(); prevPhoto(); });
document.getElementById("lb-next").addEventListener("click", (e) => { e.stopPropagation(); nextPhoto(); });

document.addEventListener("keydown", (e) => {
  if (document.getElementById("lightbox").classList.contains("active")) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevPhoto();
    if (e.key === "ArrowRight") nextPhoto();
  }
});

// ── Year Filter ───────────────────────────────────────────────
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".gallery-item").forEach(item => {
      if (filter === "all" || item.dataset.year === filter) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

// ── Navbar Scroll Effect ───────────────────────────────────────
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}, { passive: true });

// ── Scroll Reveal ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, Math.min(i * 60, 400));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

function observeRevealItems() {
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

// ── Animated Hero Particles ────────────────────────────────────
function spawnParticles() {
  const container = document.getElementById("particles");
  const count = 25;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 4 + 1;
    p.style.cssText = `
      width:  ${size}px;
      height: ${size}px;
      left:   ${Math.random() * 100}%;
      top:    ${60 + Math.random() * 40}%;
      --dur:  ${5 + Math.random() * 8}s;
      --delay:${Math.random() * 6}s;
      opacity: 0;
    `;
    container.appendChild(p);
  }
}

// ── Init ──────────────────────────────────────────────────────
buildGallery();
spawnParticles();
observeRevealItems();

// re-observe after gallery items are added
setTimeout(observeRevealItems, 100);
