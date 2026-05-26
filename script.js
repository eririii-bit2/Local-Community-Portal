const form = document.getElementById("serviceForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  // Remove existing alert if any
  const existing = document.getElementById("formAlert");
  if (existing) existing.remove();

  // Validate service selection
  if (!service) {
    showAlert("Please select a service.", "danger");
    return;
  }

  // Show success message
  showAlert(
    `Request submitted! Thank you, ${name}. We will contact you at ${email} regarding your "${service}" request.`,
    "success"
  );

  form.reset();
});

function showAlert(msg, type) {
  const alert = document.createElement("div");
  alert.id = "formAlert";
  alert.className = `alert alert-${type} mt-3`;
  alert.textContent = msg;
  form.appendChild(alert);
}