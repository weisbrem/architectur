const title = document.querySelector('.title--main');
const preloadTitle = document.querySelector('.title--preload');
const gallery = document.querySelector('.gallery');

window.onload = () => {
  setTimeout(() => {
    gallery.setAttribute('style', 'opacity: 1');
    title.setAttribute('style', 'display: block');
    preloadTitle.setAttribute('style', 'display: none');

    Draggable.create('.gallery', {
      bounds: 'body',
      inertia: true,
    });
  }, 1000);
};
