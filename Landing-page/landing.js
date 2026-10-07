const form = document.getElementById("bookingForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const need = document.getElementById("need").value;

  const phoneOk = /^[0-9+\s-]{10,16}$/.test(phone);

  if (!name || !phoneOk || !need) {
    message.textContent = "Please fill in all fields with a valid WhatsApp number.";
    message.className = "form-message error";
    return;
  }

  // Opens WhatsApp with the booking details already typed in
  const text = `Hello Oma, my name is ${name}. I'd like to book a styling session. I need help with: ${need}. My number is ${phone}.`;
  const url = `https://wa.me/2348168545570?text=${encodeURIComponent(text)}`;

  message.textContent = "Thank you! Opening WhatsApp to send your request...";
  message.className = "form-message success";
  window.open(url, "_blank");
  form.reset();
});