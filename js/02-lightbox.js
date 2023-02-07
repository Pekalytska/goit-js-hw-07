import { galleryItems } from "./gallery-items.js";

const listGalleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}">
        </a>
    `;
    })
    .join("");
}
listGalleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

let gallery = new SimpleLightbox(".gallery a");
gallery.options.captionsData = "alt";
//gallery.options.captionPosition = 'bottom';
gallery.options.captionDelay = 250;
