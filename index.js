const burgerOpenNode = document.querySelector('.header__burger');
const burgerCloseNode = document.querySelector('.header__popup-close');
const popupNode = document.querySelector('.header__popup');

burgerOpenNode.addEventListener('click', () => {
    popupNode.classList.add('js-open__popup');
});
burgerCloseNode.addEventListener('click', () => {
    popupNode.classList.remove('js-open__popup');
});
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

