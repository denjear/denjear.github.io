var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;
    if(name.length == 0){
        nameError.innerHTML="Name is Required!";
        return false;
    }
    nameError.innerHTML = '<i class="fa fa-check"></i>';
    return true;
}
function validatePhone(){
    var phone = document.getElementById("contact-phone").value;
    if(phone.length == 0){
        phoneError.innerHTML="Phone is Required!";
        return false
    }
    if(isNaN(phone)==true){
        phoneError.innerHTML="Phone Must a Number!";
        return false
    }
    if(phone.length < 10){
        phoneError.innerHTML="Phone Number Should be 10 Digit!";
        return false
    }
    phoneError.innerHTML = '<i class="fa fa-check"></i>';
    return true;    
}
function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 20;
    var left = required - message.length;

    if(message.length == 0){
        messageError.innerHTML = "Message is Required!";
        return false;
    }
    if(left > 0){
        messageError.innerHTML = left + " More Characters Required";
        return false;
    }
    messageError.innerHTML = '<i class="fa fa-check"></i>';
    return true;    
}
function validateForm(){
    if(!validateName() || !validatePhone() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Please Fix Error to Submit";
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false
    } return alert("Email Has been Sent!");
}