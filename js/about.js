const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeButton = document.getElementById("lightboxClose");
const prevButton = document.getElementById("lightboxPrev");
const nextButton = document.getElementById("lightboxNext");

let currentIndex = 0;  
let lastFocused = null; 

function showImage(index) {
    currentIndex = (index + galleryItems.length) % galleryItems.length;
    const thumbnail = galleryItems[currentIndex].querySelector("img");
    lightboxImage.src = thumbnail.src;
    lightboxImage.alt = thumbnail.alt;
    lightboxCaption.textContent = thumbnail.alt;
}

function openLightbox(index) {
    lastFocused = document.activeElement;
    showImage(index);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden"; 
    closeButton.focus();
}

function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) {
        lastFocused.focus();
    }
}

galleryItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
        openLightbox(index);
    });
});

closeButton.addEventListener("click", closeLightbox);
prevButton.addEventListener("click", function () { showImage(currentIndex - 1); });
nextButton.addEventListener("click", function () { showImage(currentIndex + 1); });

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", function (event) {
    if (lightbox.hidden) {
        return;
    }
    if (event.key === "Escape") {
        closeLightbox();
    } else if (event.key === "ArrowLeft") {
        showImage(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
        showImage(currentIndex + 1);
    }
});

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const isOpen = button.getAttribute("aria-expanded") === "true";

        accordionButtons.forEach(function (other) {
            other.setAttribute("aria-expanded", "false");
            document.getElementById(other.getAttribute("aria-controls")).hidden = true;
        });

        if (!isOpen) {
            button.setAttribute("aria-expanded", "true");
            document.getElementById(button.getAttribute("aria-controls")).hidden = false;
        }
    });
});