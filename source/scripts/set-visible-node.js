const setVisibleNode = ( itemName, activeClass) => {

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
    let visibleItems = [];

    itemArr.forEach((item) => {
      if(isScrolledIntoView(item)) {
        visibleItems.push(item);
      }
      item.classList.remove(activeClass);
    })

    visibleItems.forEach((item) => {
      item.classList.add(activeClass);
    })

    visibleItems= [];
  };

	addActiveClassForVisibleElem();

  window.addEventListener('scroll', addActiveClassForVisibleElem);
}

export { setVisibleNode };
