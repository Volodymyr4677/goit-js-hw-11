import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const renderImages = images => {
  const gallery = document.querySelector('.gallery');

  gallery.innerHTML = '';

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  const markup = images
    .map(
      item => `
        <div class="photo-card">
          <a href="${item.largeImageURL}">
            <img src="${item.webformatURL}" alt="${item.tags}" />
          </a>
          <div class="info">
            <i class="info-item">
              <b>Likes</b> ${item.likes}
            </i>
            <p class="info-item">
              <b>Views</b> ${item.views}
            </p>
            <p class="info-item">
              <b>Comments</b> ${item.comments}
            </p>
            <p class="info-item">
              <b>Downloads</b> ${item.downloads}
            </p>
          </div>
        </div>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
};
