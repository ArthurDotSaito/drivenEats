let validationOne, validationTwo, validationThree;
let priceDish, nameDish;
let priceDrink, nameDrink;
let priceDessert, nameDessert;
let orderValue;

function selectDishes(selector){
    const selectedBefore = document.querySelector('.prato>.selected');
    if(selectedBefore !== null){selectedBefore.classList.remove('selected');}
    selector.classList.toggle('selected');

    const checkedBefore = document.querySelector('.cardBottomOne>.unhidden');
    if(checkedBefore !== null){checkedBefore.classList.remove('unhidden');}
    const checked = selector.querySelector('.check');
    checked.classList.add('unhidden');
    
    nameDish = selector.querySelector('.dishName').innerHTML;
    let aux = selector.querySelector('.priceOne').innerHTML;
    priceDish = Number(aux.replace(/[^0-9.-]+/g,""));
    validationOne = selector.innerHTML;
    enableCloseOrder();
}

function selectDrinks(selector){
    const selectedBefore = document.querySelector('.bebidas>.selected');
    if(selectedBefore !== null){selectedBefore.classList.remove('selected');}
    selector.classList.toggle('selected');

    const checkedBefore = document.querySelector('.cardBottomTwo>.unhidden');
    if(checkedBefore !== null){checkedBefore.classList.remove('unhidden');}
    const checked = selector.querySelector('.check');
    checked.classList.add('unhidden');
    
    nameDrink = selector.querySelector('.dishName').innerHTML;
    let aux = selector.querySelector('.priceTwo').innerHTML;
    priceDrink = Number(aux.replace(/[^0-9.-]+/g,""));
    validationTwo = selector.innerHTML;
    enableCloseOrder();
}

function selectDessert(selector){
    const selectedBefore = document.querySelector('.sobremesa>.selected');
    if(selectedBefore !== null){selectedBefore.classList.remove('selected');}
    selector.classList.toggle('selected');

    const checkedBefore = document.querySelector('.cardBottomThree>.unhidden');
    if(checkedBefore !== null){checkedBefore.classList.remove('unhidden');}
    const checked = selector.querySelector('.check');
    checked.classList.add('unhidden');

    nameDessert = selector.querySelector('.dishName').innerHTML;
    let aux = selector.querySelector('.priceThree').innerHTML;
    priceDessert = Number(aux.replace(/[^0-9.-]+/g,""));
    validationThree = selector.innerHTML;
    enableCloseOrder();
}

function enableCloseOrder(){
    if(validationOne !== undefined){
        if(validationTwo !== undefined){
            if(validationThree !== undefined){
                const button = document.querySelector('.footer>.closeOrderButton');
                document.querySelector('.footer>.closeOrderButton').disabled =  false;
                button.classList.add('buttonOn');
                button.innerHTML = 'Fechar Pedido';
            }
        }
    }
}

function orderPrice(){
    orderValue = (priceDish/100) + (priceDrink/100) + (priceDessert/100);
    console.log(orderValue);
    return orderValue;
}

function closeOrder(){
    orderPrice();
    let cellphoneNumber = "5543999601411";
    let message = 'Olá, gostaria de fazer o pedido:\n- Prato: ' + nameDish + '\n- Bebida: '+  nameDrink  +'\n- Sobremesa: ' + nameDessert +'\nTotal: R$'+orderValue;

    message = window.encodeURIComponent(message);

    window.open("https://api.whatsapp.com/send?phone=" + cellphoneNumber + "&text=" + message, "_blank");
}