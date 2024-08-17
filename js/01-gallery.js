import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const createGalleryMarkup = (items) => {
  return items.map((item) => {
    const { preview, original, description } = item;
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
</li>`;
  }).join("");
};

const renderGallery = () => {
    galleryContainer.innerHTML = createGalleryMarkup(galleryItems);
}

renderGallery();

function onGalleryClick(e){
    e.preventDefault();
    const isGalleryImg = e.target.classList.contains('gallery__image');

    if(!isGalleryImg) return;

    const imgSource = e.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${imgSource}" width="800" height="800" />`);

    instance.show();

    function closeLightbox(e){
        if(e.key === 'Escape'){
            instance.close();
            document.removeEventListener('keydown', closeLightbox);
        }
    }
    document.addEventListener('keydown', closeLightbox);
}


galleryContainer.addEventListener('click', onGalleryClick);

