const backdrop = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(function () {
            backdrop.classList.add('open');
        }, 10);
    });
};

backdrop.addEventListener('click', function () {
    //mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(function () {
        backdrop.style.display = 'none';
    }, 500)
};

toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function () {
        backdrop.classList.add('open');
    }, 10)
});

// ctaButton.addEventListener('animationstart', function (event) {
//     console.log('animation start', event)
// })

// ctaButton.addEventListener('animationend', function (event) {
//     console.log('animation ended', event)
// })

// ctaButton.addEventListener('animationiteration', function (event) {
//     console.log('animation iteration', event)
// })