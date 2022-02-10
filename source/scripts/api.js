const GET_DATA_SOURCE = 'data.json';

const getAllProjects = () => fetch(GET_DATA_SOURCE)
  .then((response) => {
    if(response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
})

export { getAllProjects };
