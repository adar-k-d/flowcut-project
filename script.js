/*let button = document.querySelector('.button');
let menu = document.querySelector('.menu');
button.addEventListener('click', () => {
  menu.style.display = 'block';
});
document.addEventListener('click', (event) => {
  if (!event.target.matches('.button, .menu *')) {
    menu.style.display = 'none';
  }
});
*/











/*let button = document.querySelector('.button');
let menu = document.querySelector('.menu');

button.addEventListener('click', () => {
  menu.classList.toggle('visible');
});

document.addEventListener('click', (event) => {
  if (!event.target.matches('.button, .menu *')) {
    menu.classList.remove('visible');
  }
});

// Show all buttons initially
let buttons = menu.querySelectorAll('button');
buttons.forEach(button => {
  button.style.display = 'inline-block';
});
*/

let button = document.querySelector('.button');
let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;
let buttonLeft = 0;
let buttonTop = 0;

button.addEventListener('mousedown', (event) => {
    isDragging = true;
    const { clientX, clientY } = event;
    lastMouseX = clientX;
    lastMouseY = clientY;
    const rect = button.getBoundingClientRect();
    buttonLeft = rect.left;
    buttonTop = rect.top;
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const { clientX, clientY } = event;
        const deltaX = clientX - lastMouseX;
        const deltaY = clientY - lastMouseY;
        buttonLeft += deltaX;
        buttonTop += deltaY;
        button.style.left = `${buttonLeft}px`;
        button.style.top = `${buttonTop}px`;
        lastMouseX = clientX;
        lastMouseY = clientY;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

let menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    menu.classList.toggle('visible');
});

document.addEventListener('click', (event) => {
    if (!event.target.matches('.button, .menu *')) {
        menu.classList.remove('visible');
    }
});

// Show all buttons initially
let buttons = menu.querySelectorAll('button');
buttons.forEach(button => {
    button.style.display = 'inline-block';
});










