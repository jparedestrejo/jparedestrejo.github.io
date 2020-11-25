


const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 360) mainnav.classList.remove('responsive')};

const d = new Date();
const popup = document.querySelector(".pancakealert");

if(d.getDay()==5) popup.style.display="block";

