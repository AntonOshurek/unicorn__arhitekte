const getAllProjects = () => fetch('data.json')
  .then((response) => {
    if(response.ok) {
      return response.json();
    }
})

export { getAllProjects };
