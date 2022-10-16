let validationOne;
let validationTwo;
let validationThree;


function selectDishes(selector){
    const selectedBefore = document.querySelector('.prato>.selected');
    if(selectedBefore !== null){selectedBefore.classList.remove('selected');}
    selector.classList.toggle('selected');

    const checkedBefore = document.querySelector('.priceOne> .unhidden');
    if(checkedBefore !== null){checkedBefore.classList.remove('unhidden');}
    const checked = selector.querySelector('.check');
    checked.classList.add('unhidden');
    
    validationOne = selector.innerHTML;
    console.log(validationOne);
    console.log(validationTwo);
    console.log(validationThree);
    enableCloseOrder();
}

function selectDrinks(selector){
    const selectedBefore = document.querySelector('.bebidas>.selected');
    if(selectedBefore !== null){selectedBefore.classList.remove('selected');}
    selector.classList.toggle('selected');

    const checkedBefore = document.querySelector('.priceTwo> .unhidden');
    if(checkedBefore !== null){checkedBefore.classList.remove('unhidden');}
    const checked = selector.querySelector('.check');
    checked.classList.add('unhidden');
    
    validationTwo = selector.innerHTML;
    console.log(validationOne);
    console.log(validationTwo);
    console.log(validationThree);
    enableCloseOrder();
}

function selectDessert(selector){
    const selectedBefore = document.querySelector('.sobremesa>.selected');
    if(selectedBefore !== null){selectedBefore.classList.remove('selected');}
    selector.classList.toggle('selected');

    const checkedBefore = document.querySelector('.priceThree> .unhidden');
    if(checkedBefore !== null){checkedBefore.classList.remove('unhidden');}
    const checked = selector.querySelector('.check');
    checked.classList.add('unhidden');

    validationThree = selector.innerHTML;
    console.log(validationOne);
    console.log(validationTwo);
    console.log(validationThree);
    enableCloseOrder();
}

function enableCloseOrder(){
    if(validationOne !== undefined){
        if(validationTwo !== undefined){
            if(validationThree !== undefined){
                const button = document.querySelector('.footer>.closeOrderButton');
                button.classList.add('buttonOn');
                button.innerHTML = 'Fechar Pedido';
            }
        }
    }
}

