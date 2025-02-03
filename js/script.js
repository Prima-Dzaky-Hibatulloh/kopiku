// Toogle class active

const navbarNav = document.querySelector('.navbar-nav');

//Ketika hamberger menu di klik
document.querySelector('#hamberger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik diluar sidebar untuk menghilangkan nav

const hamberger = document.querySelector('#hamberger-menu');

document.addEventListener('click', function(e) {
    if (!hamberger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});