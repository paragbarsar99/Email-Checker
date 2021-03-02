console.log('client side js file')
///this file is responsable for showing results on 
//client side
//find our respective document
const emailform = document.querySelector('form')
const messageOne = document.querySelector('#message-1');
const search = document.querySelector('input');

//adding a event Listener
emailform.addEventListener('submit',(e) => {
   
     e.preventDefault();
     const email = search.value;
     messageOne.textContent = 'Loading...';
        
     //handle error's
    if(!email) { 
        messageOne.textContent = 'Please Fill The Field'
    }else{
        fetch('/emailvalidator?search=' + email).then((response) => {
         if(response.status === 500) messageOne.textContent ='server is not responding';
          console.log(response) 
         response.json().then(({result,error}) => {
            if(result === 'true' ) {
                messageOne.textContent = 'Email is Valid'
            } else if(error === 'true') {
                messageOne.textContent = 'Email Is Invalid'
            }
          
        // }).catch((err) => {
           
        //     err ? messageOne.textContent = `Email Is Not Valid`:
        //     messageOne.textContent= `Check Your Internet Connection`
            
        // })   
     })
   })
  }
})