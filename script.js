const display = document.querySelector('form input');
// const buttons = document.querySelectorAll('button');
const calculator = document.querySelector('article')
const special = ['%','/','*','-','+'];

// buttons.forEach( button => {

    calculator.addEventListener('click', e => {
        if(e.target.tagName === 'BUTTON'){
            const buttonVal = e.target.dataset.num;
            if(buttonVal === 'AC'){
                display.value = '';
            }else if(buttonVal === 'DEL'){
                display.value = display.value.slice(0, -1);
            }else if(buttonVal === '=' && display.value !== '' ){
                display.value = eval(display.value);
                // display.value = math.evaluate(display.value);
            }else{
                display.value += buttonVal;
                if(display.value === '=' || special.includes(display.value)) 
                    display.value = '';
            }
        }
    });

// });
