


const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 360) mainnav.classList.remove('responsive')};

