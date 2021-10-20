import Dropdown from './component/dropdown.js';
import PostCardModal from './component/postCardModal.js';
// import {qs, qsAll} from './utils.js';

"use strict";

class Main {

    constructor() {
        this.init();
    }

    init() {
        this.dropdown = new Dropdown();
        this.postCardModal = new PostCardModal();
    }
    

    
}

new Main();
