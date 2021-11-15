//1. add 버튼을 눌렀을 때, list가 추가되도록
//2. enter 키보드 키를 눌렀을 때 list가 추가되도록
//3. 쓰레기통을 누르면 지워지도록하기
//4. 오늘만보기, 내일만보기, 함께보기 필터링 적용

//엄격모드 실행
//안되야할 것들을 막아주는 것.
"use strict";

//1.
//add 버튼을 눌렀을 때 input의 value를 가져오기
//가져온 value를 바탕으로 list에 추가

const qs = (selector) => document.querySelector(selector);
const qsAll = (selector) => document.querySelectorAll(selector);

const inputs = qsAll('.todos__input');
const addBtn = qsAll('.todos__add');
const todosItems = qsAll('.todos__items');

addBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
    onAdd(index);
  });
});

inputs.forEach((input, index) => {
  input.addEventListener('keyup', (e) => {
    if (e.key !== 'Enter') return;
    onAdd(index);
  });
})

const onAdd = (index) => {
  if (!inputs[index].value) return;
  const list = document.createElement('li');
  list.className = 'todos__item';
  const result = 
    `
    <span class="todos__name">${inputs[index].value}</span>
    <button class="todos__delete">
      <img src="./assets/icons/close_black_24dp.svg" alt="delete" />
    </button>
    `;
  list.innerHTML = result;
  todosItems[index].appendChild(list);
  inputs[index].value = '';

  onDelete({elem: list, selector: '.todos__delete'});
}

const onDelete = (element) => {
  const setDeleteEvent = element.elem.querySelector(element.selector);
  setDeleteEvent.addEventListener('click', () => {
    element.elem.remove();
  });
}

//필터링 기능
//체크된 요소 width 100%
//체크여부 .open 클래스로 구분
//section, nav button들 option으로 한번에 들고오기

const nav = qs('.options');
const todos = qsAll('.todos > section');

nav.addEventListener('click', (e) => {
  const className = e.target.className;
  if (className.includes('options__today')) {
    todos[0].classList.add('open');
    todos[1].classList.remove('open');
  } else if (className.includes('options__tomorrow')) {
    todos[0].classList.remove('open');
    todos[1].classList.add('open');
  } else if (className.includes('options__together')) {
    todos[0].classList.add('open');
    todos[1].classList.add('open');
  }
});
