/این بخش مربوط به دارک مود هستش/;

let ChangeColor = document.getElementById("imgWeather");

ChangeColor.addEventListener("click", function () {
  let isDarkMod = true;
  let body = document.body;

  if (isDarkMod) {
    body.classList.add("darkmod");
    isDarkMod = false;
  } else {
    body.classList.remove("darkmod");
    isDarkMod = true;
  }
});
