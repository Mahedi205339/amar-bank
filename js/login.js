// added click event handler with the login button 
document.getElementById('btn-login').addEventListener('click',function(){
    // step 2 ; get the email address inside the email input field
    const emailField =document.getElementById('user-email');
    const email = emailField.value ;
    //step 3:get password
    //set id on html element
    //get the value from the element 
    //get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value
   
    //DANGER :do not verify email password on the client side
    if(email === 'mahedihasan@gmail.com' && password === 'incorrect'){
        console.log('valid user')
        window.location.href = 'bank.html';
    }else{
        alert('your password is incorrect')
    }
})