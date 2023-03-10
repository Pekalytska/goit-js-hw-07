import { galleryItems } from "./gallery-items.js";

const listGalleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
let instance;

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
                </a>
            </div>
    `;
    })
    .join("");
}
listGalleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

listGalleryRef.addEventListener("click", onImageClick);
function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        listGalleryRef.addEventListener("keydown", onModalClose);
      },
      onClose: (instance) => {
        listGalleryRef.removeEventListener("keydown", onModalClose);
      },
    }
  );
  instance.show();
}

function onModalClose(event) {
  event.preventDefault();
  if (event.code === "Escape") {
    instance.close();
  }
}
