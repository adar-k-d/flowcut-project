
document.addEventListener('DOMContentLoaded', () => {
    // Handle slideshow button interactions and popup display
    const showButtons = document.querySelectorAll('.show-slideshow');
    const popup = document.querySelector('.popup');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    showButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (popup.classList.contains('visible')) {
                popup.classList.remove('visible');
            } else {
                const rect = button.getBoundingClientRect();
                popup.style.left = `${rect.left + rect.width}px`; // Position to the right of the button
                popup.style.top = `${rect.top}px`; // Align to the top of the button
                popup.classList.add('visible');
                showSlide(currentSlide); // Make sure to display the correct slide
            }
        });
    });

    // Control the slideshow navigation via mouse wheel
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.addEventListener('wheel', (event) => {
        event.preventDefault(); // Prevent the whole page from scrolling
        if (event.deltaY < 0) {
            // Scroll up, move to the previous slide
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        } else {
            // Scroll down, move to the next slide
            currentSlide = (currentSlide + 1) % slides.length;
        }
        showSlide(currentSlide);
    });

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    // Context menu toggle for any specific buttons (not clearly defined in the snippet)
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        let menu = button.nextElementSibling; // Assuming menu is the next sibling
        button.addEventListener('click', () => {
            menu.classList.toggle('visible');
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.matches('.button, .menu *')) {
            const openMenus = document.querySelectorAll('.menu.visible');
            openMenus.forEach(menu => {
                menu.classList.remove('visible');
            });
        }
    });
});


