/* ============================================================
   script.js – MABB97 School Friends Memory Website
   ============================================================ */

// ── Photo Data ──────────────────────────────────────────────
const photos = [
  // ── 2020 ──
  { file: "20200430_191747.jpg", folder: "Photos", year: "2020" },
  { file: "20200604_123914.jpg", folder: "Photos", year: "2020" },
  { file: "20200604_141110.jpg", folder: "Photos", year: "2020" },
  { file: "20200604_154930.jpg", folder: "Photos", year: "2020" },
  { file: "20200604_174121.jpg", folder: "Photos", year: "2020" },
  { file: "20200604_181806.jpg", folder: "Photos", year: "2020" },
  { file: "20200604_181809.jpg", folder: "Photos", year: "2020" },
  { file: "20200604_181823.jpg", folder: "Photos", year: "2020" },
  { file: "20200606_132935.jpg", folder: "Photos", year: "2020" },
  { file: "20200618_174112.jpg", folder: "Photos", year: "2020" },
  { file: "20200618_174118.jpg", folder: "Photos", year: "2020" },
  { file: "20200623_164017.jpg", folder: "Photos", year: "2020" },
  { file: "20200623_183506.jpg", folder: "Photos", year: "2020" },
  { file: "20200628_113204.jpg", folder: "Photos", year: "2020" },
  { file: "20200628_132045.jpg", folder: "Photos", year: "2020" },
  { file: "20200628_132052.jpg", folder: "Photos", year: "2020" },
  { file: "20200628_132058.jpg", folder: "Photos", year: "2020" },
  { file: "20200705_130738.jpg", folder: "Photos", year: "2020" },
  { file: "20200705_143920.jpg", folder: "Photos", year: "2020" },
  { file: "20200713_133253.jpg", folder: "Photos", year: "2020" },
  { file: "20200713_150139.jpg", folder: "Photos", year: "2020" },
  { file: "20200713_165345.jpg", folder: "Photos", year: "2020" },
  { file: "20200715_173151.jpg", folder: "Photos", year: "2020" },
  { file: "20200715_173235.jpg", folder: "Photos", year: "2020" },
  { file: "20200728_125507.jpg", folder: "Photos", year: "2020" },
  { file: "20200730_195009.jpg", folder: "Photos", year: "2020" },
  { file: "20200731_144549.jpg", folder: "Photos", year: "2020" },
  { file: "20200731_175521.jpg", folder: "Photos", year: "2020" },
  { file: "20200812_155210.jpg", folder: "Photos", year: "2020" },
  { file: "20200815_014418.jpg", folder: "Photos", year: "2020" },
  { file: "20200919_223338.jpg", folder: "Photos", year: "2020" },
  { file: "20201009_152938.jpg", folder: "Photos", year: "2020" },
  { file: "20201207_185819.jpg", folder: "Photos", year: "2020" },
  { file: "20201231_175910.jpg", folder: "Photos", year: "2020" },
  { file: "IMG-20200801-WA0002.jpg", folder: "Photos", year: "2020" },
  { file: "IMG-20200804-WA0004.jpg", folder: "Photos", year: "2020" },
  { file: "IMG-20200815-WA0004.jpg", folder: "Photos", year: "2020" },
  { file: "IMG-20200815-WA0006.jpg", folder: "Photos", year: "2020" },
  { file: "IMG-20200815-WA0012.jpg", folder: "Photos", year: "2020" },
  { file: "IMG-20200815-WA0022.jpg", folder: "Photos", year: "2020" },
  { file: "IMG-20200815-WA0036.jpg", folder: "Photos", year: "2020" },
  { file: "IMG-20200815-WA0041.jpg", folder: "Photos", year: "2020" },
  { file: "IMG-20200815-WA0064.jpg", folder: "Photos", year: "2020" },
  { file: "IMG-20200817-WA0002.jpg", folder: "Photos", year: "2020" },
  { file: "IMG-20200820-WA0000.jpg", folder: "Photos", year: "2020" },
  { file: "IMG-20200820-WA0002.jpg", folder: "Photos", year: "2020" },
  // ── 2021 ──
  { file: "20210316_202820.jpg", folder: "Photos", year: "2021" },
  { file: "IMG-20210905-WA0003.jpg", folder: "Photos", year: "2021" },
  { file: "IMG-20210911-WA0053.jpg", folder: "Photos", year: "2021" },
  { file: "IMG-20210911-WA0054.jpg", folder: "Photos", year: "2021" },
  { file: "IMG-20210911-WA0056.jpg", folder: "Photos", year: "2021" },
  { file: "IMG-20210911-WA0057.jpg", folder: "Photos", year: "2021" },
  { file: "IMG-20210911-WA0061.jpg", folder: "Photos", year: "2021" },
  { file: "IMG-20211003-WA0004.jpg", folder: "Photos", year: "2021" },
  // ── 2022 ──
  { file: "IMG-20220116-WA0005.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220303-WA0014.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220303-WA0015.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220318-WA0019.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220325-WA0004.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220501-WA0008.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220501-WA0011.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220501-WA0012.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220501-WA0013.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220501-WA0014.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220501-WA0015.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220501-WA0016.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220501-WA0017.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220501-WA0018.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220501-WA0019.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220501-WA0021.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220501-WA0022.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220502-WA0013~2.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220502-WA0015.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220502-WA0017.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220503-WA0010.jpg", folder: "Photos", year: "2022" },
  { file: "IMG-20220531-WA0003.jpg", folder: "Photos", year: "2022" },
  // ── 2026 (New Photos) ──
  { file: "WhatsApp Image 2026-02-24 at 12.24.15 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.15 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.16 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.16 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.16 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.17 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.17 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.17 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.18 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.18 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.18 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.19 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.19 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.19 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.20 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.20 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.20 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.21 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.21 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.21 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.22 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.22 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-24 at 12.24.22 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.34 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.34 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.35 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.36 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.36 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.36 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.37 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.37 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.38 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.39 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.39 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.40 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.40 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.41 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.41 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.42 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.42 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.42 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.43 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.43 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.43 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.44 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.44 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.44 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.45 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.45 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.45 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.46 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.46 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.46 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.47 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.47 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.47 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.48 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.48 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.48 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.49 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.49 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.49 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.50 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.50 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.50 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.51 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.51 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.51 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.52 PM (1).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.52 PM (2).jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.52 PM.jpeg", folder: "New-Photo", year: "2026" },
  { file: "WhatsApp Image 2026-02-25 at 12.58.53 PM.jpeg", folder: "New-Photo", year: "2026" },
];

// ── Helpers ──────────────────────────────────────────────────
function formatDateFromFilename(filename) {
  // Standard format: YYYYMMDD
  const m1 = filename.match(/(\d{4})(\d{2})(\d{2})/);
  if (m1) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const y = m1[1], mo = parseInt(m1[2]) - 1, d = parseInt(m1[3]);
    return `${months[mo]} ${d}, ${y}`;
  }
  // WhatsApp format: YYYY-MM-DD
  const m2 = filename.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (m2) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const y = m2[1], mo = parseInt(m2[2]) - 1, d = parseInt(m2[3]);
    return `${months[mo]} ${d}, ${y}`;
  }
  return "";
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
      <img src="${photo.folder}/${photo.file}" alt="Memory ${idx + 1}" loading="lazy" />
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
  img.src = `${photo.folder}/${photo.file}`;
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
