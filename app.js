const form = document.getElementById("form");
let email = document.getElementById("email");
const button = document.getElementById("submit");

button.addEventListener("click", (e) => {
  e.preventDefault();

  let regx =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (!email.value.match(regx)) {
    form.classList.add("invalid");
  } else {
    form.classList.remove("invalid");
  }
});
