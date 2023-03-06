import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description }) => {
        return`
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" loading="lazy" src="${preview}" alt="${description}"/>
        </a>
        `
    }).join('');
};

new SimpleLightbox('.gallery .gallery__link', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250
});
