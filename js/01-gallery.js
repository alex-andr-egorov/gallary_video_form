// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from "./gallery-items";
//вывод картинок на страницу
const container = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original }) =>
      `<li class = "gallery__item">
      <a class="gallery__link" href="${original}"><img class = "gallery__image" src="${preview}" alt="futury"/></a>
</li>`
  )
  .join("");
container.insertAdjacentHTML("beforeend", markup);

//робота с библиотекой

let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  // do something…
});
gallery.on("error.simplelightbox", function (e) {
  console.log(e); // some usefull information
});

console.log(markup);
