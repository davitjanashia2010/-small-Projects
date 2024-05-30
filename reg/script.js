document.getElementById("registrationForm").addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    if(password !== confirmPassword) {
      document.getElementById("message").innerHTML = "Passwords do not match";
      return;
    }
    document.getElementById("message").innerHTML = "Registration successful!";
    document.getElementById("image").src="https://cdn-icons-png.freepik.com/256/5610/5610944.png"
  });
  