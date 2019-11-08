const form    = document.querySelector('#form');

const button  = document.getElementById("btn");


const emailSubmit = ( event ) => {
  event.preventDefault();
  let email         = document.getElementById("email").value;
  let statusMsg     = document.querySelector(".msg-status");
  let errorIcon     = document.querySelector(".error-icon");

    if(email === "") {
      alert('Field is empty!! Please input your email address');
    }else if (!(/^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      statusMsg.innerHTML          = "Please provide a valid email"
      statusMsg.style.color        = "hsl(0, 93%, 68%)"
      statusMsg.style.transition   = "display ease-in 3s"
      errorIcon.style.display      = "block";
      errorIcon.style.transition   = "visibility ease-in 5s"
      return;
    }else {
      statusMsg.innerHTML         = "Success!!! Email is valid";
      statusMsg.style.color       = "hsl(121, 72%, 56%";
      errorIcon.style.display     = "none"
      return;
    }
}
form.addEventListener('submit', emailSubmit);
