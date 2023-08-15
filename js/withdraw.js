document.getElementById('btn-withdraw').addEventListener('click',function(){
   const withdrawInput =document.getElementById('withdraw-input')
   const newWithdrawAmountString = withdrawInput.value ;
   const newWithdrawAmount =parseFloat(newWithdrawAmountString)

   const withdrawTotalElement = document.getElementById('withdraw-total')
   const preWithdrawTotalString = withdrawTotalElement.innerText;
   const preWithdrawTotal = parseFloat(preWithdrawTotalString)

   const currentWithdrawTotal = preWithdrawTotal + newWithdrawAmount ;
   withdrawTotalElement.innerText =currentWithdrawTotal


   withdrawInput.value = '';

   const balanceTotalElement = document.getElementById('balance-total')
   const balanceTotalString = balanceTotalElement.innerText;
   const preBalanceTotal = parseFloat(balanceTotalString)
   const currentBalanceTotal = preBalanceTotal - currentWithdrawTotal ;
   balanceTotalElement.innerText = currentBalanceTotal ;
})