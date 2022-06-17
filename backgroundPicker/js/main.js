document.getElementById('purple').onclick = bgPurple
document.getElementById('blue').onclick = bgBlue
document.getElementById('green').onclick = bgGreen
document.getElementById('orange').onclick = bgOrange

function bgPurple(){
    document.querySelector('body').style.backgroundColor = 'rgb(231, 109, 231, 1)';
}

function bgBlue() {
    document.querySelector('body').style.backgroundColor = 'rgb(120, 120, 247, 1)';
}

function bgGreen() {
    document.querySelector('body').style.backgroundColor = 'rgb(87, 241, 87, 1)';
}

function bgOrange() {
    document.querySelector('body').style.backgroundColor = 'orange';
}