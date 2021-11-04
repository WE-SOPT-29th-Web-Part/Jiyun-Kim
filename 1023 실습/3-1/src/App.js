import { useEffect, useState } from 'react';
import './App.css';
import Counter from './Count';

//함수형 컴포넌트
function App() {
  //return 문 뒤에는 jsx
  //App 안에는 자스 코드가 들어간다.
  //react는 컴포넌트 안에서 js + html 동시에 다룬다. 분리하지 않았기에 장점이 있다.
  //보다 직관적으로 사용할 수 있다.
  //최상위 태그는 하나만 있어야 한다.


  //mount : 컴포넌트가 처음 생성될 때
  //unmount : 컴포넌트가 화면을 떠날 때

  const a = 'web Part';
  //useState는 상태값과 상태를 변경할 수 잇는 함수를 받아온다.
  //useState(0) 이렇게 해준 것은 초기값을 설정해 준 것이다.
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count가 변경됨');
    }, [count]);
  //useEffect(변경되었을 때 실행할 콜백함수, 변경된 것을 감지할 배열)
  //state에 따라 감지하여 변경해주려면 state 함수를 두번째 인자로 전해주면 됨
  useEffect(()=> {
    console.log('mount!')
  }, []);
  //useEffect -> 컴포넌트 마운트 되었을 때는 빈배열을 주면 componentDidMount를 다룬다.

  const handleClick = () => {
    setCount((count) => count + 1);
    //상태 값을 변경하는 방법
  }

  return (
    <div className="App"> 
      {a} react study
      <Counter countName={count}></Counter>
    </div>
  );

  
}

export default App;
