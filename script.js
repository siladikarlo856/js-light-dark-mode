const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(themeMode) {
    themeMode == LIGHT_THEME ? document.documentElement.setAttribute('data-theme', 'light') : document.documentElement.setAttribute('data-theme', 'dark');
    nav.style.backgroundColor = themeMode == LIGHT_THEME ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = themeMode == LIGHT_THEME ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = themeMode == LIGHT_THEME ? 'Light Mode' : 'Dark Mode';
    themeMode == LIGHT_THEME ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    themeMode == LIGHT_THEME ? imageMode(LIGHT_THEME) : imageMode(DARK_THEME);
}

// Dark Mode Style
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

// Light Mode Styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');  
}


// Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked) {
        toggleDarkLightMode(DARK_THEME);
        localStorage.setItem('theme', DARK_THEME);
    } else {
        toggleDarkLightMode(LIGHT_THEME);
        localStorage.setItem('theme', LIGHT_THEME);

    }
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// On Load

const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme == DARK_THEME) {
        toggleSwitch.checked = true;
        toggleDarkLightMode(DARK_THEME);
    } 
}
