function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

function subscribe() {
  let email = prompt("What is your e-mail address?");
  alert(
    "Thank you! " +
      "We hope you enjoy our special step-by-step tutorials for beginners every monday 🧶🤍✨."
  );
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

let subscribeButton = document.querySelector(".subscribe-button");
