// 1. Validation and prevention from typing wrong inputs (Now they can't type except number values)
const depoWith = document.getElementsByClassName('depo-with');

for (const element of depoWith) {
    element.addEventListener('input', function () {
        for (let i = 0; i < element.value.length; i++) {
            if (isNaN(element.value[i])) {
                element.value = element.value.slice(0, i);
            }
        }
    })
}

// 2. all the function to be called when nedded

// function to get the number from string value
function getValue(idName) {
    const theElement = document.getElementById(idName);
    const theValue = parseFloat(theElement.value);
    theElement.value = '';
    
    if(!isNaN(theValue)) {
        return theValue;
    }
    else {
        return 0;
    }
}

// function to get the number from string innerText
function getInnerText(idName) {
    const theElement = document.getElementById(idName);
    const theInnerText = parseFloat(theElement.innerText);
    return theInnerText;
}

// function to set different innerText inside element
function setInnerText(idName, theText) {
    return document.getElementById(idName).innerText = theText;

}

// 3. event listeners to be listened

// deposit button click event
document.getElementById('depo-btn').addEventListener('click', function () {
    const depoInput = getValue('depo-input');
    const deposit = getInnerText('deposit');
    const balance = getInnerText('balance');
    setInnerText('deposit', (deposit + depoInput));
    setInnerText('balance', (balance + depoInput));
})

// withdraw button click event
document.getElementById('with-btn').addEventListener('click', function () {
    const withInput = getValue('with-input');
    const withdraw = getInnerText('withdraw');
    const balance = getInnerText('balance');
    if (withInput > balance) { return };
    setInnerText('withdraw', (withdraw + withInput));
    setInnerText('balance', (balance - withInput));
})