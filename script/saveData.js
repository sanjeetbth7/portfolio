const scriptURL = "https://script.google.com/macros/s/AKfycbyddk5447WHr7KW-OzOIfL-MFb_nFedHXYA4Q4tK5cxVMzLp9qmbcyx_yjDEM5hXjR2KQ/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form submitted!");
  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    });
    if (response.ok) {
      console.log("Form submission successful!");
      alert("Thanks! I will contact you soon.");
    } else {
      console.error("Form submission failed with status:", response.status);
      alert("Form submission failed. Please try again later.");
    }
  } catch (error) {
    console.error("Error!", error.message);
    alert("An error occurred. Please try again later.");
  }
});
