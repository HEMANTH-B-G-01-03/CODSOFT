let string = "";
let resultDisplayed = false;

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (resultDisplayed) {
      string = "";
      resultDisplayed = false;
    }

    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
      resultDisplayed = true;
    } 
    else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    }
     else if (e.target.innerHTML == "M+") {
      string = "mem_added";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == "M-") {
      string = "mem_sub";
      document.querySelector('input').value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var originalColor = button.style.backgroundColor || "";
      button.style.backgroundColor = "lightgreen";
      setTimeout(function () {
        button.style.backgroundColor = originalColor;
      }, 500);
    });
  });
});
