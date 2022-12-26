import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

//Create and render markup
const galleryList = document.querySelector('.gallery');

const makeGalleryItem = ({ preview, original, description } = {}) => {
    return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
    `
};

const galleryItem = galleryItems.map(el => {
    return makeGalleryItem(el);
});
// console.log(galleryItem);
galleryList.insertAdjacentHTML('beforeend', galleryItem.join(''));

//Implementation of delegation and obtaining the url of a large image
galleryList.addEventListener('click', openLightboxByClickOfImage);

let instance; //take out the variable to access it in a function

function openLightboxByClickOfImage(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return; 
    };
    // console.log(event.target.dataset.source);

    instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" alt="${event.target.alt}" />
    `);
    instance.show();
    // console.log(event.target);

    if (basicLightbox.visible()) {
        document.addEventListener("keydown", closeLightboxByClickOfImage);
    }
}

// close large image
function closeLightboxByClickOfImage(event) {
    if(event.code === 'Escape') {
        instance.close();
    }
}