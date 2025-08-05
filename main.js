inputSubmit.addEventListener("click", (event)=>{
    event.preventDefault();
    emailValidation();
});


let emailValidation = ()=>{
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (expReg.test(emailInput.value) == false) {
        emailInput.style.border = "1px solid hsl(0, 6%, 24%)";
        iconError.style.display = "block";
        messError.style.display = "block";
    } else {
        emailInput.value = "";
        emailInput.style.border = "1px solid hsl(0, 36%, 70%)";
        iconError.style.display = "none";
        messError.style.display = "none";
    }
}