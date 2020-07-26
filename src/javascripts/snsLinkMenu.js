export default () => {
  const snsLink = document.querySelector('.snsLink');
  const snsLinkMenuClosed = document.querySelector('.snsLink__menu--closed');

  snsLink.addEventListener('click', () => {
    console.log('pushed');
    snsLinkMenuClosed.classList.toggle('snsLink__menu--opened');
  })
}
