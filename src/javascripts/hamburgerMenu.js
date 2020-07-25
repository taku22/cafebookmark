export default function hamburgerMenu() {
  const hamburgerMenu = document.querySelector('.hamburgerMenu');
  const hamburgerMenuMenuLine01 = document.querySelector('.hamburgerMenu__menuLine01');
  const hamburgerMenuMenuLine02 = document.querySelector('.hamburgerMenu__menuLine02');
  const hamburgerMenuMenuLine03 = document.querySelector('.hamburgerMenu__menuLine03');


  hamburgerMenu.addEventListener('click',function(){
    hamburgerMenuMenuLine01.classList.toggle('hamburgerMenu__menuLine01--opened');
    hamburgerMenuMenuLine02.classList.toggle('hamburgerMenu__menuLine02--opened');
    hamburgerMenuMenuLine03.classList.toggle('hamburgerMenu__menuLine03--opened');

  })

}


