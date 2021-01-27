// login area
var loginBtn= document.querySelector('#loginBtn');
loginBtn.addEventListener('click', function(e) {
    var loginArea= document.querySelector('.login-area');
    loginArea.style.display= 'none';
    const tranArea= document.querySelector('#transection-area');
    tranArea.style.display= 'block';
})

//deposit area
const depositBtn= document.querySelector('#deposit button');
depositBtn.addEventListener('click', function(e) {
    var depositAmount= document.querySelector('#deposit input').value;
    depositAmount= parseFloat(depositAmount);

    updateSpan('depositCurrent', depositAmount);
    updateSpan('balanceCurrent', depositAmount);

    document.querySelector('#deposit input').value= '';
})

const withdrawBtn= document.querySelector("#withdraw button");
withdrawBtn.addEventListener('click', function(e) {
    var withdrawAmount= document.querySelector('#withdraw input').value;
    withdrawAmount= parseFloat(withdrawAmount);

    updateSpan('withdrawCurrent', withdrawAmount);
    updateSpan('balanceCurrent', -1*withdrawAmount);
    document.querySelector('#withdraw input').value= '';
})

function updateSpan(identity, depositAmount) {
    var currentBalance= document.querySelector('.'+identity).innerText;
    currentBalance= parseFloat(currentBalance);
    var totalBalance= currentBalance+depositAmount;
    document.querySelector('.'+identity).innerText= totalBalance;
}