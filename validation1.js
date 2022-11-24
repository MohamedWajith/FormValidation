function checkValidation(){
            
            var nic=document.getElementById("nic");
            var mno=document.getElementById("mno");
            var email=document.getElementById("email");
            var pwd=document.getElementById("pwd");
            var pwd2=document.getElementById("pwd2");
            var name=document.getElementById("name");
            var photo=document.getElementById("photo");
    
    //console.log("Name : "+name);  
            
            var patnic=/^[0-9]{9}[vVxX]$/;
            var patnewnic=/^[0-9]{12}$/;
            var patname=/^[a-zA-Z]+$/;
            var patemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var patphototo=/(\.jpg|\.jpeg|\.png|\.gif)$/i;
            var patm=/^07[0-9]{8}$/;
            
            
            //validation 
         /*   if(!name.value.match(patname)){
                    document.getElementById("errorname").innerHTML="*Invalid Name";
                    document.getElementById("errorname").style.color="red";
                    name.focus();
                    name.select();
                    return false;  
            }
            
            if(!email.value.match(patemail)){
                    document.getElementById("erroremail").innerHTML="*Invalid Email";
                    document.getElementById("erroremail").style.color="red";
                    email.focus();
                    email.select();
                    return false;  
            }
            
            if(!pwd.length > 8){
                  //  document.getElementById("errorpwd").innerHTML="*Invalid Password";
                  //  document.getElementById("errorpwd").style.color="red";
                  //  pwd.focus();
                  //  pwd.select();
                  //  return false;
                console.log(pwd);
                
            }
            if(pwd!=pwd2){
                 //   document.getElementById("errorpwd2").innerHTML="*Password doesn't match";
                 //   document.getElementById("errorpwd2").style.color="red";
                 //   pwd2.focus();
                 //   pwd2.select();
                   alert("Password Not Match!!!!");
                   

            } 
            
            
            
            
            if(!nic.value.match(patnewnic)){
               
                    document.getElementById("errornic").innerHTML="*Invalid NIC Number";
                    document.getElementById("errornic").style.color="red";
                    nic.focus();
                    nic.select();
                    return false;
            }
            
            
            if(!mno.value.match(patm)){
                    document.getElementById("errormno").innerHTML="*Invalid Mobile Number";
                    document.getElementById("errormno").style.color="red";
                    mno.focus();
                    mno.select();
                    document.getElementById("errormno").innerHTML="";
                    return false;
               }
            */
        }
        
        