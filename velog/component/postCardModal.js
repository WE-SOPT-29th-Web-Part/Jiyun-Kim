import { createElem, qs } from "../utils.js";

export default class PostCardModal {
    constructor() {
        this.$main = qs('main');
        this.$target = qs('.post__modal');
        this.$delete_btn = qs('.post__modal-btn');
        this.setEvent();
    }

    render() {
        this.$target.innerHTML = 
        `
            ${this.$postCard.outerHTML}
        `;
        this.$target.appendChild(this.$delete_btn);
    }

    setEvent() {
        this.$main.addEventListener('click', e => {
            this.$postCard = e.target.closest('.post__card');
            if (this.$postCard) this.onClickCard();
        });

        this.$delete_btn.addEventListener('click', e => {
            this.onClickDeleteBtn();
        });
    }

    onClickCard() {
        this.$target.classList.add('open');
        document.body.style.overflow = 'hidden';
        this.render();
    }

    onClickDeleteBtn() {
        this.$target.classList.remove('open');
        document.body.style.overflow = 'visible';
    }
}
