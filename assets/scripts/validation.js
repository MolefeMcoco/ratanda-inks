function sendMessage(){
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var message = document.getElementById('message');
        var requiredName = document.getElementById('name_required');
        var requiredEmail = document.getElementById('email_required');
        var requiredMessage = document.getElementById('message_required');
        if (name.value === null || name.value === "") {
            name.focus();
            name.style.border = "solid 3px red";
            requiredName.innerHTML = "<i class='fa fa-warning'></i> please enter a name";
            return false;
        }else if( name.value.length < 3){
            name.focus();
            name.style.border = "solid 3px red";
            requiredName.innerHTML = "<i class='fa fa-warning'></i> please enter atleast 3 characters";
            return false;
        }else{
            name.focus();
            name.style.border = "solid 3px green";
            requiredName.innerHTML = "";
        } 

        if(email.value === null || email.value === ""){
            email.focus();
            email.style.border = "solid 3px red";
            requiredEmail.innerHTML = "<i class='fa fa-warning'></i> please enter email";
            return false;
        }else{
            email.focus();
            email.style.border = "solid 3px green";
            requiredEmail.innerHTML = "";
        }

        if (message.value === null || message.value === "") {
            message.focus();
            message.style.border = "solid 3px red";
            requiredMessage.innerHTML = "<i class='fa fa-warning'></i> please enter a message";
            return false;
        }else if( message.value.length < 10){
            message.focus();
            message.style.border = "solid 3px red";
            requiredMessage.innerHTML = "<i class='fa fa-warning'></i> please enter atleast 10 characters";
            return false;
        }else{
            message.focus();
            message.style.border = "solid 3px green";
            requiredMessage.innerHTML = "";
        }
};
