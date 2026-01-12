const navMenu = document.getElementById('nav-menu')
const navClose = document.getElementById('nav-close')
const navToggle = document.getElementById('nav-toggle')
const navLink = document.querySelectorAll('.nav-link')
const header = document.getElementById('header')
const scrollUpBtn = document.getElementById('scrollup');

// Toggle menu
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Close menu on link click
function linkAction(){
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change background header
function scrollHeader(){
    if(window.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

// Show scroll-up button
function scrollUp(){
    if(window.scrollY >= 200){
        scrollUpBtn.classList.add('show-scroll');
    } else {
        scrollUpBtn.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp)

// Active link on scroll
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')
        const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            link.classList.add('active-link')
        } else {
            link.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ScrollReveal animations
const sra = ScrollReveal({
    distance:'60px',
    duration:2500,
    delay:400,
    reset: true
})
sra.reveal(`.home-header,.section-title`,{delay:600})
sra.reveal(`.home-footer`,{delay:700})
sra.reveal(`.home-img`,{delay:900,origin:'top'})
sra.reveal(`.sponsor-img , .products-card , .footer-logo , .footer-content ,.footer-end`,{origin:'top',interval:100})
sra.reveal(`.specs-data , .discount-animate`,{origin:'left',interval:100})
sra.reveal(`.specs-img , .discount-img`,{origin:'right',interval:100})
sra.reveal(`.case-img`,{origin:'top'})
sra.reveal(`.case-data`)
