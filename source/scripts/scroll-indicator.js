const srollIndicator = () => {

  const srollIndicator = document.querySelector('.scroll-indicator');
  const bar = document.querySelector('.sroll-indicator__bar');

  srollIndicator.classList.add('scroll-indicator--active');

  const myFunction = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.height = scrolled + "%";
  };

  window.onscroll = function() {myFunction()};

};

export { srollIndicator };
