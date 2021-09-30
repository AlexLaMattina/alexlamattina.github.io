
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {    
        event.preventDefault();
        if (validate()){
            emailjs.sendForm('service_8sgpquq', 'template_qjlabbh', this)
            .then(function() {
            console.log('SUCCESS!');
    

        },function (error){
            console.log('FAILED...', error);

        });
        window.alert("Message Sent!"); 
        document.getElementById("contact-form").reset();    
        }   
    });
}

function fnameError(){
    document.getElementById("user_fname").style.border = "1px solid black";
    document.getElementById("user_fname").placeholder = "Your First Name...";

    if (document.getElementById("user_fname").value == "") {
        document.getElementById("user_fname").style.border = "2px solid red";
        document.getElementById("user_fname").placeholder = "Required";
        return false;
        
    }else {
        return true;
    }
}

function lnameError(){
    document.getElementById("user_lname").style.border = "1px solid black";
    document.getElementById("user_lname").placeholder = "Your Last Name...";


    if (document.getElementById("user_lname").value == "") {
        document.getElementById("user_lname").style.border = "2px solid red";
        document.getElementById("user_lname").placeholder = "Required";
        return false;
       
    }else {
        return true;
    }
}
function emailError(){
    document.getElementById("user_email").style.border = "1px solid black";
    document.getElementById("user_email").placeholder = "xyz@domain.domain";


    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if( emailformat.test(document.getElementById("user_email").value)){
      return true;
    }else{
        document.getElementById("user_email").style.border = "2px solid red";
        document.getElementById("user_email").placeholder = "Invalid Email";
        return false;
    } 
}

function telError(){
    document.getElementById("user_phone").style.border = "1px solid black";
    document.getElementById("user_phone").placeholder = "123-456-7890";


    var phoneformat = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    
    if(phoneformat.test(document.getElementById("user_phone").value)){
        return true;
    }else {
        document.getElementById("user_phone").style.border = "2px solid red";
        document.getElementById("user_phone").placeholder = "Invalid Phone Number";
        return false;
    }
    
}

function messageError(){
    document.getElementById("user_message").style.border = "1px solid black";
    document.getElementById("user_message").placeholder = "Your Message...";


    if (document.getElementById("user_message").value == "") {
        document.getElementById("user_message").style.border = "2px solid red";
        document.getElementById("user_message").placeholder = "Required";
        return false;
    }else{
        return true;
    }
    
}


function validate(){
    return (fnameError() & lnameError() & emailError() & telError() & messageError())
     
}

function getDomains(){
    var storedText;
    fetch('https://data.iana.org/TLD/tlds-alpha-by-domain.txt')
      .then(function(response) {
        response.text().then(function(text) {
          storedText = text.split("\n");
        });
      });
      return storedText; 
}

function compare(str1, domains){
    if(domains.includes(str1)){
        return true;
    }
    return false; 
}

function getDomain1(email){
    var domain = email.substring(email.indexOf("@") +1, email.lastIndexOf("."));
    return domain; 
}
   
function getDomain2(email){
    var domain2 = email.substring(email.lastIndexOf(".")+1);
    return domain2;
}