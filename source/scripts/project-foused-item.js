const projectFocusedItem = () => {

  const isScrolledIntoView = (elem) => {
    const rect = elem.getBoundingClientRect();

    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const isVisible = (elemTop < (window.innerHeight / 2) && Math.sign(elemTop) != -1) || ((elemBottom > window.innerHeight / 2) && elemBottom < window.innerHeight);
    return isVisible;
  };

  const allProjetItems = document.querySelectorAll('.projects__card');

  const itemArr = [...allProjetItems];

  const markCurrentMenuItem = () => {
    itemArr.forEach((item) => {
      let itemNumber;
      if(isScrolledIntoView(item)) {
        itemNumber = item.getAttribute('data-item-id');
        console.log(itemNumber)

        allProjetItems.forEach((item) => {
          item.classList.remove('projects__card--scrolled');
          if(item.getAttribute('data-item-id') === itemNumber){
            item.classList.add('projects__card--scrolled');
          }
        })
      }
    })
  };

	markCurrentMenuItem();

  window.addEventListener('scroll', markCurrentMenuItem);
}

export { projectFocusedItem };
