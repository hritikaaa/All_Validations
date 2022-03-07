

//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        // showError(input,'Email is not invalid');
        return false;

    }
}

//check Phone number is valid
function checkphoneno(input) {
    const ve =  /^\(?([789]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
    if(ve.test(input.value.trim())) {
        showSucces(input)
    }else {
        // showError(input,'Phone Number is not invalid');
        return false;
    }
}

//checkRequired fields
function checkRequired(inputArr) {
    var showError=[], isInvalid = true;
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            // showError(input,`${getFieldName(input)} is required`)
            showError.push(input);//if empty, then show error for input field
            isInvalid = false;
            //return false;
        }
    });
    return {
        isInvalid,
        errorFields: showError
    }
}


//check input Length
function checkLength(input, min ,max) {
    if(input.value.length < min) {
        // showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        return 1;
    }else if(input.value.length > max) {
        // showError(input, `${getFieldName(input)} must be les than ${max} characters`);
        return false;
    }else {
        showSucces(input);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


