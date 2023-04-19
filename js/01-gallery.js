import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const makeGalleryItem = ({ preview, original, description } = {}) => {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>
    `;
};

const galleryItem = galleryItems.map((el) => {
    return makeGalleryItem(el);
});

galleryList.insertAdjacentHTML("beforeend", galleryItem.join(""));

galleryList.addEventListener("click", openLightboxByClickOfImage);

let instance;

function openLightboxByClickOfImage(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    instance = basicLightbox.create(
        `
        <img src="${event.target.dataset.source}" alt="${event.target.alt}" />
        `,
        {
            onClose: (instance) => {
                document.removeEventListener(
                    "keydown",
                    closeLightboxByClickOfImage
                );
            },
            onShow: (instance) => {
                document.addEventListener(
                    "keydown",
                    closeLightboxByClickOfImage
                );
            },
        }
    );

    instance.show();
}

function closeLightboxByClickOfImage(event) {
    if (event.code === "Escape") {
        instance.close();
    }
}
