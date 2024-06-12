const form = document.getElementById("patient-form");

form.addEventListener("submit", render);

function render(event) {
  event.preventDefault();
  const name = event.target.fullName.value;
  const password = event.target.password.value;

  const nameEl = document.getElementById("fname");
  const passwordEl = document.getElementById("pss");
  

  nameEl.innerText = name;
  passwordEl.innerText = password;

}
