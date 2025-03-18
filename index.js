const openPopupBtnNode = document.querySelector('.header__open-popup');
const closePopupBtnNode = document.querySelector('.header__close-popup');
const togglePopupNode = document.querySelector('.header__popup');

openPopupBtnNode.addEventListener('click', () => {
    togglePopupNode.classList.toggle('js-close');
});

closePopupBtnNode.addEventListener('click', () => {
    togglePopupNode.classList.toggle('js-close');
})

//  секция репродукция / переключение контента

const getBtnNodes = document.querySelectorAll('.reproduction__button-nav');
const getContentNodes = document.querySelectorAll('.reproduction__list-wrapper');

getBtnNodes.forEach(function(btn){
    btn.addEventListener('click', () => {
        const id = btn.dataset.id; 
        getBtnNodes.forEach(function(b){
            b.classList.remove('active');
            
        })
        btn.classList.add('active');
        getContentNodes.forEach(content => {
            content.hidden = true;
            const contentId = document.querySelector(`.reproduction__list-wrapper[data-id="${id}"]`);
            if(contentId){
                contentId.hidden = false;
            }
        });
    })
})

