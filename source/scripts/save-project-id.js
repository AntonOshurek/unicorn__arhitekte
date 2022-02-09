const saveProjectId = () => {
  const projects = document.querySelector('.projects');

  let dataID;

  const saveID = (evt) => {
    dataID = evt.target.parentElement.parentElement.getAttribute('data-item-id');
    localStorage.setItem('dataID', dataID - 1);

    projects.removeEventListener('click', saveID);

  };

  projects.addEventListener('click', saveID);

}

export { saveProjectId };
