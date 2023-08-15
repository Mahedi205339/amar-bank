//add event listener to the doposit button 
document.getElementById('btn-diposit').addEventListener('click',function(){
    //get the deposite amount from the deposit input
    const dopositField =document.getElementById('deposit-input')
    const depositAmount = dopositField.value
    // console.log(depositAmount)
    // get the current doposit total 
    const depositTotalElement = document.getElementById('deposit-total')
    const depositTotal = depositTotalElement.innerText
    depositTotalElement.innerText =depositAmount
})