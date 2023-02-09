import { galleryItems } from "./gallery-items.js";

const listGalleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}">
            </a>
        </li>
        
    `;
    })
    .join("");
}
listGalleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  download: false,
});
