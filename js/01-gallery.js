import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const galleryContainer = document.querySelector ('.gallery');
const imagesMarkup = createGalleryItemsMarkup (galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createGalleryItemsMarkup (galleryItems) {
   return galleryItems.map (({preview, original, description})=>{
        return `<div class="gallery__item">
        <a class="gallery__link" href=${original} onclick="event.preventDefault()">
          <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
          />
        </a>
      </div>`
    }).join('');
}

function onImgClick (evt) {
  if(evt.target.nodeName !== ('IMG')) {return;};
  const modal = basicLightbox.create(`
 <img src = "${evt.target.dataset.source}"/>
`);
   modal.show();
}

galleryContainer.addEventListener ('click', onImgClick)
