const srollIndicator = () => {

  const bar = document.querySelector('.sroll-indicator__bar');

  const myFunction = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.height = scrolled + "%";

    console.log(scrolled);
  };

  window.onscroll = function() {myFunction()};

};

export { srollIndicator };
