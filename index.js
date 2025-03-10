const openPopupBtnNode = document.querySelector('.header__open-popup');
const closePopupBtnNode = document.querySelector('.header__close-popup');
const togglePopupNode = document.querySelector('.header__popup');

openPopupBtnNode.addEventListener('click', () => {
    togglePopupNode.classList.toggle('js-close');
});

closePopupBtnNode.addEventListener('click', () => {
    togglePopupNode.classList.toggle('js-close');
})