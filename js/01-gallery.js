import { galleryItems } from "./gallery-items.js";

const listGalleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

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
listGalleryRef.addEventListener("keydown", onModalClose)

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
    
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
    instance.show();
}

//function onModalClose(e) {
//      e.preventDefault();
//    if (e.code === "Escape") {
//        instance.close();
//    }
//}
