const body = document.body;
const username = "Cliff";
const password = "************";
const speed = 100;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typing(text, selection) {
  const element = document.getElementById(selection);
  for (let i = 0; i < text.length; i++) {
    element.innerHTML += text.charAt(i);
    await sleep(speed);
  }
}

async function init() {
  await typing(username, "username");
  await typing(password, "password");
  body.getElementsByClassName("loader")[0].style.animation =
    "hideLoader 1s ease-out forwards";
}

init();
