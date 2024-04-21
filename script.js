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
let menu = document.querySelector('.menu');
let debounceTimer;

button.addEventListener('mousedown', (event) => {
    isDragging = true;
    const { clientX, clientY } = event;
    lastMouseX = clientX;
    lastMouseY = clientY;
    const rect = button.getBoundingClientRect();
    buttonLeft = rect.left;
    buttonTop = rect.top;
    document.addEventListener('mousemove', onMouseMove);
});

function onMouseMove(event) {
    if (isDragging) {
        const { clientX, clientY } = event;
        const deltaX = clientX - lastMouseX;
        const deltaY = clientY - lastMouseY;
        buttonLeft += deltaX;
        buttonTop += deltaY;
        button.style.transform = `translate(${buttonLeft}px, ${buttonTop}px)`;
        lastMouseX = clientX;
        lastMouseY = clientY;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            // Additional logic if needed after debouncing
        }, 0);
    }
}

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
});

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










