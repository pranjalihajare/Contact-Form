const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // stop actual form submission

      // Get values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Error message containers
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const messageError = document.getElementById("messageError");
      const successMessage = document.getElementById("successMessage");

      // Reset previous errors
      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";
      successMessage.textContent = "";

      let isValid = true;

      // Validate name
      if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
      }

      // Validate email
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
      } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
      }

      // Validate message
      if (message === "") {
        messageError.textContent = "Message cannot be empty.";
        isValid = false;
      }

      // If valid, show success
      if (isValid) {
        successMessage.textContent = "✅ Form submitted successfully!";
        form.reset(); // Clear fields
      }
    });