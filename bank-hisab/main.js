// ================= Bank Hisab ================

const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');
const balance = document.getElementById('balance');

const depoInput = document.getElementById('depo-input');
const depoButton = document.getElementById('depo-btn');

const withInput = document.getElementById('with-input');
const withButton = document.getElementById('with-btn');

depoButton.addEventListener('click', function () {
    const depositAmount = parseFloat(deposit.innerText);
    const balanceAmount = parseFloat(balance.innerText);
    if (!isNaN(depoInput.value) && depoInput.value !== '' && depoInput.value > 0) {
        deposit.innerText = depositAmount + parseFloat(depoInput.value);
        balance.innerText = balanceAmount + parseFloat(depoInput.value);
    }
    depoInput.value = '';
});


withButton.addEventListener('click', function () {
    const withdrawAmount = parseFloat(withdraw.innerText);
    const balanceAmount = parseFloat(balance.innerText);
    if (!isNaN(withInput.value) && withInput.value !== '' && 0 < withInput.value &&withInput.value <= balanceAmount) {
        withdraw.innerText = withdrawAmount + parseFloat(withInput.value);
        balance.innerText = balanceAmount - parseFloat(withInput.value);
    }
    withInput.value = '';
});