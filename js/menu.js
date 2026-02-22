document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ul');
    const toggle = document.querySelector('.nav-toggle');

    toggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');

        if (nav.classList.contains('active')) {
            toggle.innerHTML = '&#10005;';
        } else {
            toggle.innerHTML = '&#9776;';
        }
    });
});