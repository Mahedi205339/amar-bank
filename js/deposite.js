//add event listener to the doposit button 
document.getElementById('btn-diposit').addEventListener('click',function(){
    //get the deposite amount from the deposit input
    const dopositField =document.getElementById('deposit-input')
    const newDepositAmountString = dopositField.value
    const newDepositAmount = parseFloat(newDepositAmountString)
    // console.log(depositAmount)
    // get the current doposit total 
    const depositTotalElement = document.getElementById('deposit-total')
    const preDepositTotalString = depositTotalElement.innerText
    const preDepositTotal = parseFloat(preDepositTotalString)
    const currentDepositTotal = preDepositTotal+newDepositAmount

    depositTotalElement.innerText =currentDepositTotal

    const balanceTotalElement = document.getElementById('balance-total')
    const preBalanceTotalString = balanceTotalElement.innerText
    const preBalanceTotal = parseFloat(preBalanceTotalString)
    const newBalanceTotal = preBalanceTotal + currentDepositTotal ;

    balanceTotalElement.innerText =newBalanceTotal

    //clear the diposit field 
    dopositField.value ='';
})