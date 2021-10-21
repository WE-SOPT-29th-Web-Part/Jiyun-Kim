import Dropdown from './component/dropdown.js';
import PostCardModal from './component/postCardModal.js';
import {qs} from './utils.js';

"use strict";

class Main {

    constructor() {
        this.$writeBtn = qs('.header__write');
        this.init();
        this.setEvent();
    }

    init() {
        this.dropdown = new Dropdown();
        this.postCardModal = new PostCardModal();
    }

    setEvent() {
        this.$writeBtn.addEventListener('click', () => {
            location.href="write.html";
        })
    }
}

new Main();
