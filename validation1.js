function checkValidation(){
        var name=document.getElementById("name");
        var patname=/^[a-zA-z]+$/;
    
        if(!name.value.match(patname)){
            document.getElementById("errorname").innerHTML="*Invalid Name";
            document.getElementById("errorname").style.color="red";
            return false;
        }
        
        var email=document.getElementById("email"); 
        var patemail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(!email.value.match(patemail)){
                   document.getElementById("erroremail").innerHTML="*Invalid Email";
                   document.getElementById("erroremail").style.color="red";
                   return false;     
          }
    
        var pwd=document.getElementById("pwd");
        var patpwd=/^.{8,}$/;
        
    
            if(!pwd.value.match(patpwd)){
                   document.getElementById("errorpwd").innerHTML="*Invalid Password";
                   document.getElementById("errorpwd").style.color="red";
                   return false;
               }
        var pwd=document.getElementById("pwd").value;
        var pwd2=document.getElementById("pwd2").value;
                if (pwd != pwd2) {
                   document.getElementById("errorpwd2").innerHTML="*Invalid Password";
                   document.getElementById("errorpwd2").style.color="red";
                return false;
        }
    
        var nic=document.getElementById("nic");
        var patnic=/^[0-9]{9}[vVxX]$/;
        var patnicnew=/^[0-9]{12}$/;

                if(!nic.value.match(patnic) && !nic.value.match(patnicnew)){
                   document.getElementById("errornic").innerHTML="Invalid nic";
                   document.getElementById("errornic").style.color="red";
                   return false;      
            
             }
        var mno=document.getElementById("mno");
        var patmno=/^07[0-9]{8}$/;
        
                if(!mno.value.match(patmno)){
                   document.getElementById("errormno").innerHTML="Invalid number";
                   document.getElementById("errormno").style.color="red";
                   return false;
                }
    
        var photo=document.getElementById("photo");
        var patphoto=/(\.jpg|\.jpeg|\.png|\.gif)$/;
                
                if(!photo.value.match(patphoto)){
                   document.getElementById("errorphoto").innerHTML="Invalid Format";
                   document.getElementById("errorphoto").style.color="red";
                   return false;
                }
            
        }
        
        