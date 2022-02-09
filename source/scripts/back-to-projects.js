const backToProjets = () => {
  const projects = document.querySelector('.projects');

  if(localStorage.getItem('scrollPosition')) {
    document.documentElement.scrollTop = localStorage.getItem('scrollPosition');
    localStorage.removeItem('scrollPosition');
  } else {
    document.documentElement.scrollTop = 0;
  }

  let scrollPosition;

  const savePosition = () => {
    scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    localStorage.setItem('scrollPosition', scrollPosition);

    projects.removeEventListener('click', savePosition);
  };

  projects.addEventListener('click', savePosition);
}

export { backToProjets };
