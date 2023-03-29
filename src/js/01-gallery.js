import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const Images = createMarkupGallery(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', Images);

function createMarkupGallery(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                      <a class="gallery__link" href="${original}">
                              <img class="gallery__image"
                              src="${preview}"
                              data-source="${original}"
                              alt="${description}"/>
                              </a>
                    </li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionType: 'alt',
  captionDelay: 250,
});
