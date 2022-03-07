


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone_no =  document.getElementById('phone_no');

form.addEventListener('submit',function(e) {
    e.preventDefault();

    // checkRequired([username, email, phone_no ]);
    //  checkLength(username,3,15);
    // checkphoneno(phone_no);
    
    
    if (checkRequired([username, email, phone_no]).isInvalid == false)
    {
        checkRequired([username, email, phone_no]).errorFields.forEach(function (inputField){
            showError(inputField,`${getFieldName(inputField)} is required`);

        });

  }
  else {

   if (checkphoneno(phone_no) == false){
       showError(phone_no,'Phone Number is not invalid');

  }

   if (checkLength(input, 3, 15) == 1){
      showError(input, `${getFieldName(input)} must be at least 3 characters`);

   }

   if (checkLength(input, 3, 15) == false){
       showError(input, `${getFieldName(input)} must be les than 15 characters`);

   }

  if (checkEmail(email) == false){
      showError(email,'Email is not invalid');

  }
  }//endd else

   
});
       


        

    



    
  

