import DarkModeButton from './component/darkmodeBotton.js';
import Dropdown from './component/dropdown.js';
import PostCardModal from './component/postCardModal.js';
import {qs} from './utils.js';

"use strict";

class Main {

    constructor() {
        this.$writeBtn = qs('.header__write');
        this.init();
    }

    init() {
        this.dropdown = new Dropdown();
        this.postCardModal = new PostCardModal();
        this.darkModeBtn = new DarkModeButton();
    }
}

new Main();
