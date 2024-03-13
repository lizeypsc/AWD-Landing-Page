document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
        });

        button.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
});
