import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const makeGalleryItem = ({ preview, original, description } = {}) => {
    return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    `;
};

const galleryItem = galleryItems.map((el) => {
    return makeGalleryItem(el);
});

galleryList.insertAdjacentHTML("beforeend", galleryItem.join(""));

galleryList.addEventListener("click", openLightboxByClickOfImage);

let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

function openLightboxByClickOfImage(event) {
    event.preventDefault();
}
