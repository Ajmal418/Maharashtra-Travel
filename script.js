     let mainBar= document.querySelector('.mainBar')      
    let cross= document.querySelector('.sidebar')      
    showSideBar=()=>{
            cross.style.display='flex';
            mainBar.style.zIndex='1';
            
        }
        closeSideBar=()=>{
                
            mainBar.style.zIndex='999';
            cross.style.display='none';
    }
      
    let a =document.querySelectorAll('.fa');
    let rating =document.querySelector('#rating');
    let value =document.querySelector('.current-rating')
    a.forEach((values,key)=>{
        values.addEventListener('click',()=>{         
            count =key+1
            value.innerHTML=`${count} of 5`;
            rating.value=count;
            a.forEach((star,i)=>{
                if(count>=i+1){
                    star.classList.add('checked')                 
                }else{
                   star.classList.remove('checked')
                }
               
            })
        }); 
    })

const navbar=document.querySelectorAll('.position-fixed');
navbar.forEach((value,key)=>{

    window.onscroll=()=>{
        
        if(window.scrollY >=10){
            value.classList.add('in_active');
        }else{
           
            value.classList.remove('in_active');
            
        }
    }
})
data=document.querySelectorAll('.white');            
data.forEach((value , key)=>{
    value.classList.add('text-white')
    value.classList.remove('text-white')
    // console.log(value)
});
        function validatEmail(email){
                var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                regex = new RegExp(pattern);
                if(regex.test(email)){
                    
                return true
                }
                
        }
    document.getElementById('submit').addEventListener('click',function(e)
        {
            e.preventDefault()
            
            const name         = document.getElementById('name').value
            const mobile        = document.getElementById('mobile').value
            const email         = document.getElementById('email').value
            const rating         = document.getElementById('rating').value
            const name_error   = document.getElementById('name_error')
            const rating_error   = document.getElementById('rating_error')
            const mobile_error  = document.getElementById('mobile_error')
            const email_error   = document.getElementById('email_error')
            // const gcaptcha      = document.getElementById('g-recaptcha_error')
        
           
            if(name==''){         
                name_error.classList.remove('d-none')
                return false;
            }else{
                name_error.classList.add('d-none')

            }
            if(mobile==''){        
                mobile_error.classList.remove('d-none')
                return false;
            }else{
                mobile_error.classList.add('d-none')

            }
            if(email=='' ){        
                email_error.classList.remove('d-none')
                return false;
            }else{
                email_error.classList.add('d-none')

            }
            if(rating=='' ){        
                rating_error.classList.remove('d-none')
                return false;
            }else{
                rating_error.classList.add('d-none')

            }        
            if(!validatEmail(email)){        
                email_error.classList.remove('d-none')
                email_error.innerHTML='please enter valid email address'
                return false
                
            }else{
                email_error.classList.add('d-none')

            }
            // if(grecaptcha.getResponse()=='' ){        
            //     gcaptcha.classList.remove('d-none')
            //     gcaptcha.classList.add('d-block')
            //     return false;
            // }     
        
            const hey= document.getElementById('forms') 
            const  data = new  FormData(hey) 
            sendEmail(email,name);
            
            // try {
            //     response =   fetch('/railway/captcha.php',{
            //     method:'post',
            //     body:data,
            
            //  }).then( res=>res.json()).then(json=>{
            //     console.log(json)
            //  })
            // } catch (error) {
            //     console.log(error)
            // }
            

        })  
        
        function sendEmail(email,name) {
                Email.send({
                    SecureToken :"d8922af1-fa59-4f67-a67a-f41c56b1afe3",
                    To: email,
                    From: "ajmalkhan49256@gmail.com",
                    Subject: "Galaxy",
                    Body: `thank you for contact with us MR/MR's ${name} our team get in touch with you`,
                
                })
                    .then(function (message) {
                        console.log(message)
                    if(message=='OK'){ 
                        console.log(message)
                        Swal.fire('success',"email send succefully",'success').then(()=>{
                            window.location.reload()
                        });
                    }else{                      
                        Swal.fire('Faield',"Somthin went worng",'error');
                    }
                    });
        }

