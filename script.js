let Username=document.getElementById("Username").value;
function checkpassword(){
    
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirmPassword").value;
    console.log(password,confirmPassword);
    // let message=document.getElementById("message");

    // if(password.length!=0){
    //     if(password==confirmPassword){
    //         message.textContent="passwords match";
            
    //     }
    //     else{
    //         alert("password did not match");
    //     }
    // }
    // else{
    //     alert("Password can't be empty!");
   // }
   if(password.length!=0){
    if(password!=confirmPassword){
        alert("password did not match");
       }
    else{
        return message=document.getElementById("message");
    }
   }
   
   else{
    alert("password cannot be empty");
   }
}