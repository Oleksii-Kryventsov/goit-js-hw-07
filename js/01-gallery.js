import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description }) => {
        return`
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" loading="lazy" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
        </div>
        `
    }).join('');
};

galleryEl.addEventListener('click', handleImageClick);

function handleImageClick(event) {
    event.preventDefault();
    window.addEventListener('keydown', onEscKeyDown);

    if (!event.target.classList.contains('gallery__image')) {
        return;
    };

    const originalImg = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);

    originalImg.show()
    
    function onEscKeyDown(event) {
    originalImg.close()
    };
};

