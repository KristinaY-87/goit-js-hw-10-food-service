import menu from './menu.json';
import menuTemplate from '../templates/menu-list.hbs';
import themes from './theme.js';

const refs = {
    menuList: document.querySelector('.js-menu'),
    body: document.body,
    switcher: document.querySelector('.theme-switch__toggle')
};
const cardsMarkUp = menuTemplate(menu);

refs.menuList.innerHTML = cardsMarkUp;
refs.switcher.checked = localStorage.getItem('themes') === themes.DARK;

const saveSettings = localStorage.getItem('themes') === null ? themes.LIGHT : localStorage.getItem('themes');
refs.body.classList.add(saveSettings);

const changeSettings = (add, rem) => {
    refs.body.classList.remove(rem);
        refs.body.classList.add(add);
        localStorage.setItem('themes', add);
}

refs.switcher.addEventListener('change', ({target}) => {
       if (target.checked) {
        changeSettings(themes.DARK, themes.LIGHT)
    }
    else {
        changeSettings(themes.LIGHT, themes.DARK)
    }
})
