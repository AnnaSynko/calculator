const display = document.querySelector('.display');

document.querySelectorAll('.digits button, .opers button')
.forEach(button => button.addEventListener('click', digitPressed) );

function digitPressed(e) {
    display.value += e.target.innerHTML;
}

document.querySelector('.persent')
.forEach(button => button.addEventListener('click', persentPressed));

function persentPressed() {
    display.value = 0.01 * (eval(display.value));      
}

document.querySelector('.sqrt')
.forEach(button => button.addEventListener('click', sqrtPressed));

function sqrtPressed() {
    display.value = Math.sqrt(eval(display.value));
}

document.querySelector('.pow')
.forEach(button => button.addEventListener('click', powPressed));

function powPressed() {
    display.value = Math.pow((eval(display.value)), 2);
}
document.querySelectorAll('.equal')
.forEach(button => button.addEventListener('click', equalPressed));

function equalPressed() {
    display.value = eval(display.value);
}

document.querySelectorAll('.clear')
.forEach(button => button.addEventListener('click', clearPressed));

function clearPressed(){
    display.value = "";
}

