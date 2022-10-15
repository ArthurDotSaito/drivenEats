function selectOption(selector){
    const selectedBefore = document.querySelector('.selected');
    if(selectedBefore !== null){selectedBefore.classList.remove('selected');}
    selector.classList.toggle('selected');

    const checkedBefore = document.querySelector('.unhidden');
    if(checkedBefore !== null){checkedBefore.classList.remove('unhidden');}
    const checked = selector.querySelector('.price> .check');
    checked.classList.add('unhidden');
}
