const ALERT_SHOW_TIME = 5000;

//alert modal
const showAlert = (message) => {

  const body = document.querySelector('.body');
  const errorTemplate = document.querySelector('#error-message');

  const fragment = new DocumentFragment();

  const templateItem = errorTemplate.content.cloneNode(true);

  templateItem.querySelector('.error-message__info').textContent = message;
  fragment.append(templateItem);

  body.append(fragment);
};

export { showAlert };
