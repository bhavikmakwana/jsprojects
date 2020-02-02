const form  = document.getElementById('form');
const username  = document.getElementById('username');
const email  = document.getElementById('email');
const password  = document.getElementById('password');
const password2= document.getElementById('password2');

//show error message
function showError(input,message){
    const fromControl = input.parentElement;
    fromControl.className = 'form-control error';
    const small =  fromControl.querySelector('small');
    small.innerHTML = message;
}
//show success message
function showSuccess(input){
    const formControl =input.parentElement;
    formControl.className="form-control success";
}

//email validator
function isValidEmail(input){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input)){
        showSuccess(input);
    }else {
        showError(input,'Email is not valid');
    }
}

//check length fields
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFeildsName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input,`${getFeildsName(input)} must be at less than ${max} characters`);
    }else {
        showSuccess(input);
    }
}

//check Password match 
function passwordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,`Password do not match`);
    }
}

//check required fields 
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFeildsName(input)} is required`);
        }else {
            showSuccess(input);
        }
    });
}

//get getFeildsName
function getFeildsName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//evemt listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]); 
    checkLength(username,3,15);
    checkLength(password,6,25);
    passwordMatch(password,password2)
});