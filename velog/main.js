"use strict";

// 드롭다운 박스 구현
//박스 모양 만들기 -> ul
//nav__select 클릭 시 보이게 만들기 -> 이벤트 위임으로 처리
//새로 생긴 nav__select-list 내부를 클릭하지 않았을 시 hidden 한다.

function Main() {
    const qs = (selector) => document.querySelector(selector);
    const qsAll = (selector) => document.querySelectorAll(selector);

    const $select = qs('.nav__select');
    const $selectItems = qsAll('.nav__dropdown-item');

    $select.addEventListener('click', (e) => {
        const dropdownItem = e.target.classList;
        const dropdown = $select.querySelector('.nav__dropdown') ;

        if (e.target.closest('.nav__dropdown')) {
            $selectItems.forEach(item => {
                item.classList.remove('select');
            });
            dropdownItem.add('select');
            $select.querySelector('.nav__select-text').innerHTML = e.target.innerHTML;
        }
        
        if (dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
        }
        else {
            dropdown.classList.add('open');
        }
    });
}

Main();