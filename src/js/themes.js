const themeSwitcher = document.querySelector('#theme-switch-toggle');
const themeObject = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

themeSwitcher.addEventListener('change', newThemeApply);

function switchToDarkMode() {
    themeSwitcher.setAttribute('checked', 'true');
    themeObject.classList.remove(Theme.LIGHT);
    themeObject.classList.add(Theme.DARK);
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
};

function switchToLightMode() {
    themeSwitcher.removeAttribute('checked');
    themeObject.classList.remove(Theme.DARK);
    themeObject.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}


function newThemeApply() {
    if (!themeSwitcher.hasAttribute('checked')) {
        switchToDarkMode();
    } else {
        switchToLightMode();
    }
};
// збереження теми
window.addEventListener('load', storeTheme);

function storeTheme() {
    const currentTheme = JSON.parse(localStorage.getItem('theme'));
    if (currentTheme === Theme.DARK) {
        switchToDarkMode();
    }
    if (currentTheme === Theme.LIGHT) {
        switchToLightMode();
    }
};