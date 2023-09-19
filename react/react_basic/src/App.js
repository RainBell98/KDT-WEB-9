// import ClassComponent from './ClassComponent';
// import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Food from './Food';
import FunctionComponent from './FunctionComponent';
import Test from './Test';
import Test2 from './Test2';
import Info from './Info';

function App() {
  return (
    <>
      {/* <Test></Test>
      <Test2></Test2> */}
      {/* <ClassComponent name="우종" age={10}></ClassComponent>
      <ClassComponent></ClassComponent> */}
      {/* <FunctionComponent myClass={'kdt9'}>코딩</FunctionComponent>
      <FunctionComponent></FunctionComponent> */}
      {/* <Food food="고기"></Food>
      <Food></Food> */}
      <Info title={'나의 하루는 4시 40분에 시작된다'} author={'김유진'} price={'13,500원'} type={'자기계발서'}></Info>
    </>
  );
}

export default App;
