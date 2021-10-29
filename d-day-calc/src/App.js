import './App.css';
import Header from './components/Header'
import DateInput from './components/DateInput'
import CenterText from './components/CenterText'
import Result from './components/Result'
import Footer from './components/Footer'
import { useState } from 'react';

//DateInput에서 input 값으로 년, 월, 일 값을 받아온다.
//result에서 input값과, DateInput에서 받아온 년, 월, 일 값과 연산을 실시한다.
function App() {
  //dateinput, result에서 사용되는 값이기에 공통으로 사용되는 값의 경우에는 가장 위로 상태를 끌어올려주어야 한다.
  //react는 데이터 방향이 위에서 아래로만 흐를 수 있다. 따라서 공통 조상에서 데이터를 저장해야한다.
  // => 이것을 상태 끌어올리기라고 한다. props로 내려준다.
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());

  return (
    <div className="App">
      <section>
        <Header></Header>
        <DateInput 
          year={year}
          month={month}
          date={date}
          setYear={setYear}
          setMonth={setMonth}
          setDate={setDate}
        ></DateInput>
        </section>
      <CenterText></CenterText>
      <Result
        year={year}
        month={month}
        date={date}
      ></Result>
      <Footer></Footer>
    </div>
  );
}

export default App;
