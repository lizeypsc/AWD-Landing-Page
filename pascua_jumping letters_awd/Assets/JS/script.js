const letters = document.querySelectorAll('#_letters #_letter');

letters.forEach((letter) => {
    letter.addEventListener('click', () => {
        letter.classList.toggle('active');
    });
});
