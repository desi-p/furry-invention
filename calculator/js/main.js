let total = 0

function calculatorResult() {
    document.querySelector('#placeToPutResult').innerText = total;
}


document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2 )
document.querySelector('#multiply2').addEventListener('click', mult2)
document.querySelector('#multiply8').addEventListener('click', mult8)

function makeZero() {
    total = 0;
    calculatorResult();
}

function jumanji() {
    total = total + 3;
    calculatorResult();
}

function add9() {
    total += 9;
    calculatorResult();
}

function sub2() {
    total -= 2;
    calculatorResult();
}

function mult2() {
    total *= 2;
    calculatorResult();
}

function mult8() {
    total *= 8;
    calculatorResult();
}