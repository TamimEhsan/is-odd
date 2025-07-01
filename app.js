import isEven from 'is-even';

window.checkOdd = function () {
    const number = parseInt(document.getElementById('numberInput').value, 10);
    const resultEl = document.getElementById('result');

    if (isNaN(number) || !isEven(number)) {
        resultEl.textContent = 'It is not an Odd';
    } else {
        resultEl.textContent = 'It is an Odd';
    }
    
};
