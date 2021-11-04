import { qs, qsAll, createElem } from "../utils.js";
import TagInput from "./tagInput.js";

export default class Tag {
    constructor() {
        this.$target = qs('.tag__items');
        this.state = {};
        this.init();
        this.setEvent();
    }

    init() {
        this.tagInput = new TagInput(this.onCheckExistTag.bind(this), this.addTag.bind(this));
    }
    
    render() {
        const result = createElem('span');
        result.className = 'tag__item';
        result.innerText = this.state.tagName;
        this.$target.appendChild(result);
    }

    setEvent() {
        this.$target.addEventListener('click', e => {
            this.onClickDeleteTag(e.target);
        })
    }
    
    onCheckExistTag(tag) {
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

    onClickDeleteTag(tag) {
        tag.remove();
    }
}

new Tag();