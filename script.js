//let drinksOption = '';
//let dessertsOption = '';


/* function selectOption(container){
    let selectedBefore = document.querySelector('.selected');
    if(selectedBefore !== null){selectedBefore.classList.remove('selected');}
    console.log(container);
    container = document.querySelector('.selected');
    let check = document.querySelector('.check');

    container.classList.toggle('selected');
    check.classList.toggle('unhidden');
} */

function selectOption(selector){
    console.group(selector);
    const selectedBefore = document.querySelector('.selected')
    if(selectedBefore !== null){selectedBefore.classList.remove('selected')}
    selector.classList.toggle('selected');
}

fuction showIcon(){
    
}