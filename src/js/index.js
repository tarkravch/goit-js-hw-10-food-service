import menuCard from './templates/card.hbs';
import menuList from './menu.json';

console.log(menuCard);

const themeSwitcher = document.querySelector('#theme-switch-toggle');
const themeObject = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

themeSwitcher.addEventListener('change', newThemeApply);


function newThemeApply() {
    if (!themeSwitcher.hasAttribute('checked')) {
        themeSwitcher.setAttribute('checked', 'true');
        themeObject.classList.remove('light-theme');
        themeObject.classList.add('dark-theme');
    } else {
        themeSwitcher.removeAttribute('checked');
        themeObject.classList.remove('dark-theme');
        themeObject.classList.add('light-theme');
    }


};