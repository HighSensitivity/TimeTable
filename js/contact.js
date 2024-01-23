document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form input values
  const name = document.querySelector("input[name='name']").value;
  const email = document.querySelector("input[name='email']").value;
  const phone = document.querySelector("input[name='phone']").value;
  const comment = document.querySelector("textarea[name='comment']").value;
  const country = document.querySelector("select[name='country']").value;
  
  // Display thank you message in a popup
  alert("Thank you for contacting our organization! Expect an email from us in your mailbox.");
  
  // Redirect to index.html after 2 seconds
  setTimeout(function() {
    window.location.href = "index.html";
  }, 0000);
  
  // Optionally, you can submit the form data to a server using AJAX
  // Here's an example using fetch API
  fetch("https://www.example.com/submit-form", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      comment: comment,
      country: country
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    // Handle server response if needed
    console.log(data);
  })
  .catch(error => {
    // Handle error if needed
    console.error(error);
  });
});