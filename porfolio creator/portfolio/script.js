document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
      // You can process form data here (e.g., send it to a server)
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      form.reset();
    });
  });
  