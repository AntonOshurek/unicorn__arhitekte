const coloredItem = ( itemName, activeClass) => {

  const isScrolledIntoView = (elem) => {
    const rect = elem.getBoundingClientRect();

    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const isVisible = (elemTop < (window.innerHeight / 2) && Math.sign(elemTop) != -1) || ((elemBottom > window.innerHeight / 2) && elemBottom < window.innerHeight);
    return isVisible;
  };

  const allPersonItems = document.querySelectorAll(itemName);

  const itemArr = [...allPersonItems];

  const addActiveClassForVisibleElem = () => {
    let coloredItems = [];

    itemArr.forEach((item) => {
      if(isScrolledIntoView(item)) {
        coloredItems.push(item);
      }
      item.classList.remove(activeClass);
    })

    coloredItems.forEach((item) => {
      item.classList.add(activeClass);
    })

    coloredItems= [];
  };

	addActiveClassForVisibleElem();

  window.addEventListener('scroll', addActiveClassForVisibleElem);
}

export { coloredItem };
