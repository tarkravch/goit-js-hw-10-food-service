const themeSwitcher = document.querySelector('#theme-switch-toggle');
const themeObject = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

themeSwitcher.addEventListener('change', newThemeApply);

function switchMode(toRemove, toAdd) {
    if (toAdd === Theme.DARK) {
        themeSwitcher.setAttribute('checked', 'true');
    }
    if (toAdd === Theme.LIGHT) {
        themeSwitcher.removeAttribute('checked');
    }
    themeObject.classList.remove(toRemove);
    themeObject.classList.add(toAdd);
    stringify(toAdd);
};

function stringify(classToString) {
    localStorage.setItem('theme', JSON.stringify(classToString));
};


function newThemeApply() {
    if (!themeSwitcher.hasAttribute('checked')) {
        switchMode(Theme.LIGHT, Theme.DARK);
    } else {
        switchMode(Theme.DARK, Theme.LIGHT);
    }
};

// збереження теми
window.addEventListener('load', storeTheme);

function storeTheme() {
    const currentTheme = JSON.parse(localStorage.getItem('theme'));
    if (currentTheme === Theme.DARK) {
        switchMode(Theme.LIGHT, Theme.DARK);
    }
    if (currentTheme === Theme.LIGHT) {
        switchMode(Theme.DARK, Theme.LIGHT);
    }
};