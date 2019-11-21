//create The Form Functionality

//grab The Elements

const form = document.querySelector('#task-form');
const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');
const message = document.querySelector('.input-message');
const text = document.querySelector('#paragraph');
text.className = 'text-center';
//write it
form.addEventListener('submit', function (e) {
  if (inputName.value.length === 0 || inputEmail.value.length === 0 || message.value.length === 0) {
    text.textContent = 'Put somethig On The Field !';
    setBorderColor('red');
    setTimeout(clearText, 2000);
  } else {
    setBorderColor('green');
    text.textContent = 'Your Form Is Submited !';
    inputName.value = '';
    inputEmail.value = '';
    message.value = '';
    setTimeout(clearText, 2000);
  }
  e.preventDefault();
})
//create A Function called Set Border Color
function clearText() {
  text.textContent = '';
  setBorderColor('#03F4EB');
}

function setBorderColor(color) {
  inputName.style.borderColor = color;
  inputEmail.style.borderColor = color;
  message.style.borderColor = color;
  text.style.color = color;
}