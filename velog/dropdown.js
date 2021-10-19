import {qs, qsAll} from './utils.js';

export default class Dropdown {
    constructor() {
        this.$dropdown = qs('.nav__select');
        this.$dropdownItems = qsAll('.nav__dropdown-item');
        this.setEvent();
    }

    render() {

    }

    setEvent() {
        this.$dropdown.addEventListener('click', (e) => {
            const dropdownItem = e.target.classList;
            const dropdown = this.$dropdown.querySelector('.nav__dropdown') ;
    
            if (e.target.closest('.nav__dropdown')) {
                this.$dropdownItems.forEach(item => {
                    item.classList.remove('select');
                });
                dropdownItem.add('select');
                this.$dropdown.querySelector('.nav__select-text').innerHTML = e.target.innerHTML;
            }
            
            if (dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
            }
            else {
                dropdown.classList.add('open');
            }
        });
    }
}