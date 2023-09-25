import { LifeCycleFunc } from './08Lifecycle/LifeCycleFunc';
import RefSampleClass1 from './09Ref/RefSampleClass1';
import RefSampleClass2 from './09Ref/RefSampleClass2';
import { RefSampleFunc1 } from './09Ref/RefSampleFunc1';
import { RefSampleFunc2 } from './09Ref/RefSampleFunc2';
import { UseCallback } from './10Hook/useCallback';
import { UseMemo } from './10Hook/useMemo';
import { Counter } from './10Hook/useReducer';

function App() {
  return (
    <>
      {/* <LifeCycleFunc></LifeCycleFunc> */}
      {/* <RefSampleClass1></RefSampleClass1>
      <RefSampleClass2></RefSampleClass2> */}
      {/* <RefSampleFunc1></RefSampleFunc1>
      <RefSampleFunc2></RefSampleFunc2> */}
      {/* <UseMemo></UseMemo> */}
      {/* <UseCallback></UseCallback> */}
      <Counter></Counter>
    </>
  );
}

export default App;
