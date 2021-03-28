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