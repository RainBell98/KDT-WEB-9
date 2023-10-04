// import { LifeCycleFunc } from './08Lifecycle/LifeCycleFunc';
// import RefSampleClass1 from './09Ref/RefSampleClass1';
// import RefSampleClass2 from './09Ref/RefSampleClass2';
// import { RefSampleFunc1 } from './09Ref/RefSampleFunc1';
// import { RefSampleFunc2 } from './09Ref/RefSampleFunc2';
// import { UseCallback } from './10Hook/useCallback';
// import { UseMemo } from './10Hook/useMemo';
// import { Counter } from './10Hook/useReducer';
// import { SassComponent } from './11Style/SassComponent';
// import { Style } from './11Style/Style';
// import { StyledComponent } from './11Style/StyledComponent';
// import { Outlet } from 'react-router-dom';
// import { Header } from './12Router/Header';
// import { Form } from './13Form/Form';
import { useState } from 'react';
import { LanguageProvider } from './14Context/store/lang-context';
import { LanguageSelector } from './14Context/LangSelector';
// import { Root } from './12Router/Root';
// import { Router } from './12Router/Router';

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
      {/* <Counter></Counter> */}
      {/* <Style></Style> */}
      {/* <SassComponent></SassComponent> */}
      {/* <StyledComponent></StyledComponent> */}
      {/* <Router></Router> ver1*/}
      {/* <Header />
      <Outlet /> */}
      <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider>
    </>
  );
}

export default App;
