import { qs, qsAll, createElem } from "../utils.js";

export default class Tag {
    constructor() {
        this.$tagInput = qs('.tag__input');
        this.$target = qs('.tag__items');
        this.state = {};
        this.setEvent();
    }

    render() {
        const result = createElem('span');
        result.className = 'tag__item';
        result.innerText = this.state.tagName;
        this.$target.appendChild(result);
    }

    setEvent() {
        this.$tagInput.addEventListener('keyup', e => {
            if (e.key !== 'Enter') return;
            if (this.checkExistTag(e.target)) {
                e.target.value = '';
                return;
            }
            this.addTag(e.target);
        });

        this.$target.addEventListener('click', e => {
            this.deleteTag(e.target);
        })
    }

    checkExistTag(tag) {
        const $tagItems = qsAll('.tag__item');
        for(let item of $tagItems) {
            if (tag.value === item.innerText) return true;
        };
        return false;
    }

    addTag(tag) {
        this.state['tagName'] = tag.value;
        tag.value = '';
        this.render();
    }

    deleteTag(tag) {
        tag.remove();
    }
}

new Tag();