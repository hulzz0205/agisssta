// =============== Smooth Scroll ===============
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// =============== Typewriter Text ===============
const text = "Selamat Datang — Di Website Orang Yang Aku Sukain Selama Aku hidup Di Dunia Ini";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();


// =============== Fade Reveal Saat Scroll ===============
const fades = document.querySelectorAll(".fade");

const callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
};

const observer = new IntersectionObserver(callback);
fades.forEach(el => observer.observe(el));


// =============== Sticky Navbar + Change Color ===============
const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) nav.classList.add("nav-scroll");
  else nav.classList.remove("nav-scroll");
});


// =============== Lightbox ===============
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img-display");
const closeLb = document.getElementById("close-lightbox");

document.querySelectorAll(".lightbox-img").forEach(img => {
  img.addEventListener("click", e => {
    lightbox.style.display = "flex";
    lbImg.src = e.target.src;
  });
});

closeLb.addEventListener("click", () => {
  lightbox.style.display = "none";
});


// =============== Back To Top Button ===============
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) backTop.style.display = "block";
  else backTop.style.display = "none";
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//audio//

const audio = document.getElementById("myAudio");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸ Pause";
    } else {
        audio.pause();
        playBtn.textContent = "▶ Play";
    }
});


// ————————————————
// VIDEO LIGHTBOX
// ————————————————

const videoThumbs = document.querySelectorAll(".video-thumb");
const videoLightbox = document.getElementById("videoLightbox");
const videoDisplay = document.getElementById("videoDisplay");
const closeVideo = document.getElementById("closeVideo");

videoThumbs.forEach(v => {
    v.addEventListener("click", () => {
        const src = v.querySelector("source").src;
        videoDisplay.querySelector("source").src = src;
        videoDisplay.load();
        videoDisplay.play();
        videoLightbox.style.display = "flex";
    });
});

closeVideo.addEventListener("click", () => {
    videoLightbox.style.display = "none";
    videoDisplay.pause();
});
