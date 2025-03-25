const burgerOpenNode = document.querySelector('.header__burger');
const burgerCloseNode = document.querySelector('.header__popup-close');
const popupNode = document.querySelector('.header__popup');
const popupNavLink = document.querySelectorAll('.header__list-link');

function popupIsActive(){
    popupNode.classList.toggle('isActive');
    document.body.classList.toggle('lock-scroll');
};

burgerOpenNode.addEventListener('click', popupIsActive);
burgerCloseNode.addEventListener('click', popupIsActive);

popupNode.addEventListener('click', (event) => {
    if(event.target === popupNode){
        popupIsActive();
    }
})

popupNavLink.forEach(link => {
    link.addEventListener('click', popupIsActive);
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

