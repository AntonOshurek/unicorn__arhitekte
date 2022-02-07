const saveProjectId = () => {
  const projects = document.querySelector('.projects');

  let dataID;

  projects.addEventListener('click', (evt) => {
    dataID = evt.target.parentElement.parentElement.getAttribute('data-item-id');
    localStorage.setItem('dataID', dataID);
  })

}

export { saveProjectId };
