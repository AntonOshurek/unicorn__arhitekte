//API
import { getAllProjects } from './api';


const projectGallery = document.querySelector('.project__gallery');
const pitureTemplate = document.querySelector('#project__image');

const infoText =  document.querySelector('.project__info-text');
const projetName = document.querySelector('.project__name');

const dataList = document.querySelector('.data-list');
const dataListItemTemplate = document.querySelector('#data-list__item');

const showCurrentProjects = () => {
  let projectData;
  const dataID = localStorage.getItem('dataID');

  getAllProjects().then((data) => {
    projectData = data.data[dataID];

    showImages(projectData);
    showInfo(projectData);
  })

  function showImages(projectData) {

    const fragment = new DocumentFragment();

    projectData.images.forEach((image) => {
      const templateItem = pitureTemplate.content.cloneNode(true);

      templateItem.querySelector('.project__image').src = image;

      fragment.append(templateItem);
    })

    projectGallery.append(fragment)
  }

  function showInfo(data) {
    infoText.textContent = data.description;
    projetName.textContent = data.name;

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



