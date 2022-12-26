import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const makeGalleryItem = ({ preview, original, description } = {}) => {
    return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    `
};

const galleryItem = galleryItems.map(el => {
    return makeGalleryItem(el);
});
// console.log(galleryItem);
galleryList.insertAdjacentHTML('beforeend', galleryItem.join(''));


galleryList.addEventListener('click', openLightboxByClickOfImage);

 let lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250 }); //fadeSpeed:300

function openLightboxByClickOfImage(event) {
    event.preventDefault();
}