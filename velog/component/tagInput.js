import { qs } from "../utils.js";

export default class TagInput {
    constructor(onCheckExistTag, addTag) {
        this.$tagInput = qs('.tag__input');
        this.onCheckExistTag = onCheckExistTag;
        this.addTag = addTag;
        this.setEvent();
    }


    setEvent() {
        this.$tagInput.addEventListener('keyup', e => {
            if (e.key !== 'Enter') return;
            if (this.onCheckExistTag(e.target)) {
                e.target.value = '';
                return;
            }
            this.addTag(e.target);
        });
    }

}