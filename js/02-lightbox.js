import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

function createGalleryMarkup(items){
    return items.map(item => {
        const { preview, original, description } = item;
        return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>`;
    }).join('');
}

const renderGallery = () => {
    galleryList.innerHTML = createGalleryMarkup(galleryItems);
} 

renderGallery();

const lightbox = new 
SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: 'bottom',
  enableKeyboard: true,
});