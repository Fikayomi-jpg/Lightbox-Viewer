const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");

function openLightbox(event) {
  const fullSrc = event.target.src.replace("-thumbnail", "");
  lightboxImage.src = fullSrc;
  lightbox.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.style.display = "none";
  lightboxImage.src = "";
  document.body.style.overflow = "auto";
}

galleryItems.forEach((item) => {
  item.addEventListener("click", openLightbox);
});

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === closeBtn) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.style.display === "flex") {
    closeLightbox();
  }
});