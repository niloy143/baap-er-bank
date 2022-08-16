function getValue(idName) {
    const theElement = document.getElementById(idName);
    const theValue = parseFloat(theElement.value);
    theElement.value = '';
    if(!isNaN(theValue) && theValue > 0) {
        return theValue;
    }
    else {
        return 0;
    }
}

function getInnerText(idName) {
    const theElement = document.getElementById(idName);
    const theInnerText = parseFloat(theElement.innerText);
    return theInnerText;
}

document.getElementById('depo-btn').addEventListener('click', function() {
    const depoInput = getValue('depo-input');
    const deposit = getInnerText('deposit');
    const balance = getInnerText('balance');
    document.getElementById('deposit').innerText = depoInput + deposit;
    document.getElementById('balance').innerText = depoInput + balance;
})

document.getElementById('with-btn').addEventListener('click', function() {
    const withInput = getValue('with-input');
    const withdraw = getInnerText('withdraw');
    const balance = getInnerText('balance');
    if(withInput > balance) {return};
    document.getElementById('withdraw').innerText = withInput + withdraw;
    document.getElementById('balance').innerText = balance - withInput;
})