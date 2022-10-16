function selectDishes(selector){
    const selectedBefore = document.querySelector('.prato>.selected');
    if(selectedBefore !== null){selectedBefore.classList.remove('selected');}
    selector.classList.toggle('selected');

    const checkedBefore = document.querySelector('.priceOne> .unhidden');
    if(checkedBefore !== null){checkedBefore.classList.remove('unhidden');}
    const checked = selector.querySelector('.check');
    checked.classList.add('unhidden');
}

function selectDrinks(selector){
    const selectedBefore = document.querySelector('.bebidas>.selected');
    if(selectedBefore !== null){selectedBefore.classList.remove('selected');}
    selector.classList.toggle('selected');

    const checkedBefore = document.querySelector('.priceTwo> .unhidden');
    if(checkedBefore !== null){checkedBefore.classList.remove('unhidden');}
    const checked = selector.querySelector('.check');
    checked.classList.add('unhidden');
}

function selectDessert(selector){
    const selectedBefore = document.querySelector('.sobremesa>.selected');
    if(selectedBefore !== null){selectedBefore.classList.remove('selected');}
    selector.classList.toggle('selected');

    const checkedBefore = document.querySelector('.priceThree> .unhidden');
    if(checkedBefore !== null){checkedBefore.classList.remove('unhidden');}
    const checked = selector.querySelector('.check');
    checked.classList.add('unhidden');
}