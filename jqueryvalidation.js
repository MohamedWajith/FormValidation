$(document).ready(function(){
    $('form').submit(function(event){
        
        var name=$('#name').val();
        var patname=/^[a-zA-z]+$/;
        if(!name.match(patname)){
            document.getElementById("errorname").innerHTML="*Invalid Name";
            document.getElementById("errorname").style.color="red";
            
            return false;
        }
        
        var email=$('#email').val();
        var patemail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!email.match(patemail)){
            document.getElementById("erroremail").innerHTML="*Invalid Email";
            document.getElementById("erroremail").style.color="red";
            
            return false;
        }
        
        var pwd=$('#pwd').val();
        var patpwd=/^.{8,}$/;
        
        if(!pwd.match(patpwd)){
            document.getElementById("errorpwd").innerHTML="*Invalid Password";
            document.getElementById("errorpwd").style.color="red";
            
            return false;
           
           }
        var pwd2=$('#pwd2').val()
        if(pwd != pwd2){
            document.getElementById("errorpwd2").innerHTML="Password doesn't match";
            document.getElementById("errorpwd2").style.color="red";
            return false;
        }
        
        
        
        var nic=$('#nic').val();
        var patnic=/^[0-9]{9}[vVxX]$/;
        var patnicnew=/^[0-9]{12}$/;
        if(!nic.match(patnic)){
            document.getElementById("errornic").innerHTML="*Invalid NIC";
            document.getElementById("errornic").style.color="red";
            
            return false;
        }
        
        var mno=$('#mno').val();
        var patmno=/^07[0-9]{8}$/;
        if(!mno.match(patmno)){
            document.getElementById("errormno").innerHTML="*Invalid Mobile Number";
            document.getElementById("errormno").style.color="red";
            
            return false;
        }
        
        var photo=$('#photo').val();
        var patphoto=/(\.jpg|\.jpeg|\.png|\.gif)$/;
        if(!photo.match(patphoto)){
            document.getElementById("errorphoto").innerHTML="*Invalid Format";
            document.getElementById("errorphoto").style.color="red";
            
            return false;
        }
        
        
    });       
        
    }); 