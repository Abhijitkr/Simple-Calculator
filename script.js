const display = document.querySelector('form input');
const buttons = document.querySelectorAll('button');

buttons.forEach( button => {

    
    button.addEventListener('click', e => {
        if(e.target.tagName === 'BUTTON'){
            if(e.target.dataset.num === 'AC'){
                display.value = '';
            }else if(e.target.dataset.num === 'DEL'){
                display.value = display.value.slice(0, -1);
            }else if(e.target.dataset.num === '=' && display.value !== '' ){
                display.value = eval(display.value);
            }else{
                display.value += e.target.dataset.num;
            }
        }
    });

});