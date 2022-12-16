var  username,email , password , confirmPassword , phone , address;


function registeration(){
    //retrieving data
     username=document.getElementById("username").value;
     email = document.getElementById("email").value;
     password = document.getElementById("password").value;
     confirmPassword = document.getElementById("confirmPassword").value;
     phone = document.getElementById("phone").value;
     address = document.getElementById("address").value;
   
    
   //storing data
   
   window.localStorage.setItem('username', username);
   window.localStorage.setItem('Email', email);
   window.localStorage.setItem('password', password);
   window.localStorage.setItem('confirmpassword', confirmPassword);
   window.localStorage.setItem('phone', phone);
   window.localStorage.setItem('address', address);
   window.localStorage.setItem('login',"false");

   

}

function validation(){
    var pass = document.getElementById("password").value;
    var conf = document.getElementById("confirmPassword").value;
    var passwordRexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,20}$/;
    if(pass.length < 3) {  
      document.getElementById("message").innerHTML = "**Password length must be atleast 3 characters";  
      return false;  
    }
  
    if(pass.length > 20) {  
          document.getElementById("message").innerHTML = "**Password length must not exceed 20 characters";
          
          return false;  
       }
  
      
       if(pass != conf)  
      {   
          document.getElementById("message").innerHTML = "**passwords did not match";  
          return false;  
      }
       

      if(passwordRexp.test(pass)==0)
        { 
            document.getElementById("message").innerHTML = "**password Must contain at least one number and one uppercase and lowercase letter";
        return false;
        }
        var phone = document.getElementById("phone").value;
           var phoneRexp =/^\d{11}$/;
           if(phoneRexp.test(phone)==0)
           { 
               document.getElementById("message").innerHTML = "**invalid phone number";
           return false;
           }
  
  
      else{
       alert("you have been register successfully");
      }
  
  }

  
  function login(){
    
    email = document.getElementById("Email").value;
    password = document.getElementById("Password").value;
    
     
     var email_localStorage = window.localStorage.getItem('Email')
     var password_localStorage = window.localStorage.getItem('password')
     
     

    if (email != email_localStorage){
        document.getElementById("message1").innerHTML = "Wrong Email";
        
        return false;
    }else if (password != password_localStorage){
        document.getElementById("message1").innerHTML = "Wrong Password";
        
        return false;
    }else{
        window.localStorage.setItem('login',"true");
        return true;
       
        

    }
    
}
