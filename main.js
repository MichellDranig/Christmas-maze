// sign up checkform
function checkform(){
    let formElement = document.querySelector("#checkform");
    let password = formElement.password;
    let passwordTwo = formElement.passwordTwo;
    let passShort = document.querySelector('#passShort');
    let ensPass = document.querySelector('#ensPass');
    

    if(password.value === passwordTwo.value){ // passwords should be same value
        enspasswords = true;
    }else { // if not - don't go to next page, display message 
        ensPass.innerHTML = 'Passwords er ikke ens';
        return false;
    }

    if(password.value.length > 8){ // Password has to be over 8 characters 
        passLength = true;
    } else { // if not - don't go to next page, display message 
        passShort.innerHTML = 'Password skal være over 8 karaktere';
        return false;
    }
}
