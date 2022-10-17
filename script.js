let validationOne, validationTwo, validationThree;
let priceDish, nameDish;
let priceDrink, nameDrink;
let priceDessert, nameDessert;
let orderValue;
let customerName, customerAddress;

function selectDishes(selector) {
    const selectedBefore = document.querySelector('.prato>.selected');
    if (selectedBefore !== null) { selectedBefore.classList.remove('selected'); }
    selector.classList.toggle('selected');

    const checkedBefore = document.querySelector('.cardBottomOne>.unhidden');
    if (checkedBefore !== null) { checkedBefore.classList.remove('unhidden'); }
    const checked = selector.querySelector('.check');
    checked.classList.add('unhidden');

    nameDish = getName(selector);
    priceDish = getPrice(selector);
    validationOne = selector.innerHTML;
    enableCloseOrder();
}

function selectDrinks(selector) {
    const selectedBefore = document.querySelector('.bebidas>.selected');
    if (selectedBefore !== null) { selectedBefore.classList.remove('selected'); }
    selector.classList.toggle('selected');

    const checkedBefore = document.querySelector('.cardBottomTwo>.unhidden');
    if (checkedBefore !== null) { checkedBefore.classList.remove('unhidden'); }
    const checked = selector.querySelector('.check');
    checked.classList.add('unhidden');

    nameDrink = getName(selector);
    priceDrink = getPrice(selector);
    validationTwo = selector.innerHTML;
    enableCloseOrder();
}

function selectDessert(selector) {
    const selectedBefore = document.querySelector('.sobremesa>.selected');
    if (selectedBefore !== null) { selectedBefore.classList.remove('selected'); }
    selector.classList.toggle('selected');

    const checkedBefore = document.querySelector('.cardBottomThree>.unhidden');
    if (checkedBefore !== null) { checkedBefore.classList.remove('unhidden'); }
    const checked = selector.querySelector('.check');
    checked.classList.add('unhidden');

    nameDessert = getName(selector);
    priceDessert = getPrice(selector);
    validationThree = selector.innerHTML;
    enableCloseOrder();
}

function getName(name){
    functionName = name.querySelector('.dishName').innerHTML;
    return functionName;
}

function getPrice(name){
    let aux = name.querySelector('.price').innerHTML;
    functionPriceDish = Number(aux.replace(/[^0-9.-]+/g, ""));
    return functionPriceDish;
}

function enableCloseOrder() {
    if (validationOne !== undefined) {
        if (validationTwo !== undefined) {
            if (validationThree !== undefined) {
                const button = document.querySelector('.footer>.closeOrderButton');
                document.querySelector('.footer>.closeOrderButton').disabled = false;
                button.classList.add('buttonOn');
                button.innerHTML = 'Fechar Pedido';
            }
        }
    }
}

function orderPrice() {
    let aux = ((priceDish / 100) + (priceDrink / 100) + (priceDessert / 100)).toFixed(2);
    orderValue = aux.toString().replace(".", ",");
    console.log(orderValue);
    return orderValue;
}

function customerData(){
    customerName = prompt("Digite seu nome:");
    customerAddress = prompt("Digite seu endereço");
    event.preventDefault();
}

function closeOrder() {
    orderPrice();
    customerData();
    let cellphoneNumber = "5543999601411";
    let message = `Olá, gostaria de fazer o pedido:\n- Prato: ${nameDish}\n- Bebida: ${nameDrink}\n- Sobremesa: ${nameDessert}\nTotal: R$ ${orderValue}
    \n\nNome: ${customerName}\nEndereço: ${customerAddress}`;

    message = window.encodeURIComponent(message);

    window.open("https://api.whatsapp.com/send?phone=" + cellphoneNumber + "&text=" + message, "_blank");
}