const menuBtn = document.getElementById('menu-open');
const menuBtnClose = document.getElementById('menu-close');
const menuMobile = document.getElementById('menu-mobile');
const menuOverlay = document.getElementById('menu-overlay');

function toggleMenu() {
    menuMobile.classList.toggle('-translate-x-full');

    menuOverlay.classList.toggle('hidden');
    setTimeout(() => {
        menuOverlay.classList.toggle('opacity-100');
    }, 10);

    }

menuBtn.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu)