import { galleryItems } from './gallery-items.js';



const container = document.querySelector(".gallery");

function createMarkup(arr){
    return arr.map(({preview, original, description}) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`).join('')
};

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

container.addEventListener('click', handlerImgClick);
function handlerImgClick(evt){
    
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
      }
    const instance = basicLightbox.create(`
    <img src = ${evt.target.dataset.source} width="800" height="600">`)

instance.show()


container.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });

}






console.log(galleryItems);

