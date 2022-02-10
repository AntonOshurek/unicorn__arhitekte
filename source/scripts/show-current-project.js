import { getAllProjects } from './api';
import { showAlert } from './notifications';

const projectGallery = document.querySelector('.project__gallery');
const pitureTemplate = document.querySelector('#project__image');

const dataList = document.querySelector('.data-list');
const dataListItemTemplate = document.querySelector('#data-list__item');

const infoText =  document.querySelector('.project__info-text');
const headerTitle = document.querySelector('.header__title');

const showCurrentProjects = () => {
  let dataID = localStorage.getItem('dataID');

  if(dataID === '' || !dataID) {
    dataID = 0;
  }

  getAllProjects().then((data) => {
    removeDataTemplates();
    showImages(data.data[dataID]);
    showInfo(data.data[dataID]);
  }).catch((err) => {
    showAlert(`błąd pobierania danych - ${err}`);
    logMyErrors(err);
  });

  function removeDataTemplates() {
    document.querySelectorAll('.data-list__item').forEach((item) => {
      item.remove();
    })
  }

  function showImages(data) {
    const fragment = new DocumentFragment();

    data.images.forEach((image) => {
      const templateItem = pitureTemplate.content.cloneNode(true);

      templateItem.querySelector('.project__image').src = image;

      fragment.append(templateItem);
    })

    projectGallery.append(fragment)
  }

  function showInfo(data) {
    infoText.textContent = data.description;
    headerTitle.textContent = data.name;
    document.title = data.name;

    const fragment = new DocumentFragment();

    data.dataList.forEach((item) => {
      const templateItem = dataListItemTemplate.content.cloneNode(true);

      templateItem.querySelector('.data-list__item').textContent = item;

      fragment.append(templateItem);
    })


    dataList.append(fragment)
  }
}

export { showCurrentProjects };
