// import { Larva } from './03Comp/Larva';
import PropsPrac1 from './04Props/PropsPrac1';
import PropsPrac2 from './04Props/PropsPrac2';
import Message from './05Event/Message';
import StatePrac1 from './06State/StatePrac1';
import StatePrac2 from './06State/StatePrac2';
import StatePrac3 from './06State/StatePrac3';
import StatePrac4 from './06State/StatePrac4';
import UseStatePrac1 from './07UseState/UseStatePrac1';
import UseStatePrac2 from './07UseState/UseStatePrac2';
import UseStatePrac3 from './07UseState/UseStatePrac3';
import UseStatePrac4 from './07UseState/UseStatePrac4';
import UseStatePrac5 from './07UseState/UseStatePrac5';
import { Prac1 } from './08UseEffect/Prac1';
import { Prac2 } from './08UseEffect/Prac2';
import RefSampleClass1 from './09Ref/RefSampleClass1';
import SignupForm from './10Hook/useReducerPrac';
import { FormPrac1 } from './13Form/FormPrac1';
import { ContextPrac1, ContextPrac1_2 } from './14Context/ContextPrac1';
import { CartProvider } from './14Context/store/CartList';
import { UserProvider, UserProvider1 } from './14Context/store/ContextPrac1S';
import { ProductList } from './14Context/ProductList';
import { PracScss1 } from './Style/prac1';
import { PracStyle2 } from './Style/pracStyle2';
import { PracStyle3 } from './Style/pracStyle3';

import { Cart } from './14Context/Cart';

function App() {
  return (
    <>
      {/* Prop 실습 */}
      {/* <PropsPrac1 food="치킨" />
            <PropsPrac1 />
            <PropsPrac2
                title={"나의하루는 4시40분에 시작된다"}
                author={"김유진"}
                price={"13,600원"}
                type={"자기개발서"}
            /> */}
      {/* 이벤트 핸들링 실습 */}
      {/* <Message message={"Hello React"} /> */}
      {/* state 실습 */}
      {/* <StatePrac1 /> */}
      {/* <StatePrac2 /> */}
      {/* <StatePrac3 /> */}
      {/* <StatePrac4 /> */}
      {/* useState 실습 */}
      {/* <UseStatePrac1 />
            <UseStatePrac2 /> */}
      {/* <UseStatePrac3 /> */}
      {/* <UseStatePrac4 />
            <UseStatePrac5 /> */}
      {/* <Prac1></Prac1> */}
      {/* <Prac2></Prac2> */}
      {/* <RefSampleClass1></RefSampleClass1> */}
      {/* <SignupForm></SignupForm> */}
      {/* <Larva></Larva> */}
      {/* <PracScss1></PracScss1> */}
      {/* <PracStyle2></PracStyle2> */}
      {/* <PracStyle3></PracStyle3> */}
      {/* <UseStatePrac5></UseStatePrac5> */}
      {/* <FormPrac1></FormPrac1> */}
      {/* <UserProvider>
        <ContextPrac1></ContextPrac1>
      </UserProvider>
      <UserProvider1>
        <ContextPrac1_2></ContextPrac1_2>
      </UserProvider1> */}

      <CartProvider>
        <Cart></Cart>
        <ProductList></ProductList>
      </CartProvider>
    </>
  );
}

export default App;
