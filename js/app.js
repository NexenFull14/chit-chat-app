import View from './functions.js';

function init() {
    const view = new View();

    view.sendMessage(() => {
        view.displayMessage();
    }, event => {
        if (event.key === 'Enter') {
            view.displayMessage();
        }
    });

    view.menuBtnListener(() => {
        view.showMenu();
    });
}

window.addEventListener('load', init);