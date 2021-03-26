import menuCard from '/templates/card.hbs';
import menuList from '/menu.json';

// Розмітка карточок

const cardMarkUp = document.querySelector('.menu');


const cardMarkUpGenerator = createCards(menuList);

cardMarkUp.insertAdjacentHTML('beforeend', cardMarkUpGenerator);
console.log(cardMarkUpGenerator);

function createCards(menuList) {

    return menuCard(menuList);
};
/* const cardMarkUpGenerator = createCards(menuList);
console.log(cardMarkUpGenerator);

function createCards(menuList) {
    return menuList.map(menuItem => menuCard(menuList)).join('');
    // return menuList.map(menuCard).join('');
} */