import Dropdown from './component/dropdown.js';
import {qs, qsAll} from './utils.js';

"use strict";

// 드롭다운 박스 구현
//박스 모양 만들기 -> ul
//nav__select 클릭 시 보이게 만들기 -> 이벤트 위임으로 처리
//새로 생긴 nav__select-list 내부를 클릭하지 않았을 시 hidden 한다.

class Main {

    constructor() {
        this.init();
    }

    init() {
        this.dropdown = new Dropdown();
    }
    

    
}

new Main();