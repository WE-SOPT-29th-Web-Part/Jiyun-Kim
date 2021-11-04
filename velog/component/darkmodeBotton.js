import {qs} from '../utils.js';

export default class DarkModeButton {
    constructor() {
        this.$target = qs('.header__toggle'); 
        this.setEvent();
    }

    setEvent() {
        this.$target.addEventListener('click', () => {
            this.onClickToggle(this.$target);
        });
    }

    onClickToggle(elem) {
        elem.classList.contains('dark') ? elem.classList.remove('dark') : elem.classList.add('dark');
    }
} 