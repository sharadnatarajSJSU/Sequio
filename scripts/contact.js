let sendLetter = document.getElementById('sendLetter');
function addClass() {
  document.body.classList.add("sent");
}

sendLetter.addEventListener("click", addClass);

document.getElementById("sendLetter").addEventListener("click", function (event) {
  event.preventDefault(); 

  // Get user inputs
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector('textarea').value;

  console.log(name);
  console.log(email);
  console.log(message);

  emailjs.send("service_kn72rdt", "template_t5q5go2", {
    to_name: "SEQUIO",
    from_name: name,
    from_email: email,
    message: message,
  })
    .then(function (response) {
      console.log("Email sent successfully:", response);
        
    })
    .catch(function (error) {
      console.error("Email could not be sent:", error);
      
    });
});