import { createElem, qs } from "../utils.js";

export default class PostCardModal {
    constructor() {
        this.$main = qs('main');
        this.$target = createElem('div');
        this.$target.className = 'post__modal';
        document.body.appendChild(this.$target);
        this.setEvent();
    }

    render() {
        this.$target.innerHTML = 
        `
            ${this.$postCard.outerHTML} 
            <button class="post__modal-btn">X</button>
        `;
    }

    setEvent() {
        this.$main.addEventListener('click', e => {
            this.$postCard = e.target.closest('.post__card');
            if (this.$postCard) this.onClickCard();
        });

        this.$target.addEventListener('click', e => {
            if (e.target.classList.contains('post__modal-btn')) {
                this.onClickDeleteBtn();
            }
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
