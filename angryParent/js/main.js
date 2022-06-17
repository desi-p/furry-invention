document.querySelector('#mad').addEventListener('click', madResult)
document.querySelector('#furious').addEventListener('click', furiousResult)


function madResult() {
    const fName = document.querySelector('#firstName').value;
    const fmName = document.querySelector('#firstMiddleName').value;
    const smName = document.querySelector('#secondMiddleName').value; 
    const lName = document.querySelector('#lastName').value;
    document.querySelector('#placeToYell').innerText = fName + ' ' + fmName + ' ' + smName + ' ' + lName;
}

function furiousResult() {
    const fName = document.querySelector('#firstName').value;
    const fmName = document.querySelector('#firstMiddleName').value;
    const smName = document.querySelector('#secondMiddleName').value; 
    const lName = document.querySelector('#lastName').value;
    document.querySelector('.slow').innerText = fName + ' ' + fmName + ' ' + smName + ' ' + lName;
}
