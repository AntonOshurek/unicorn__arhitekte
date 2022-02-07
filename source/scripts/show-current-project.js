//API
import { getAllProjects } from './api';

const showCurrentProjects = () => {
  const dataID = localStorage.getItem('dataID');

  getAllProjects().then((data) => {
    console.log(data.data[dataID - 1])
  })
}

export { showCurrentProjects };



