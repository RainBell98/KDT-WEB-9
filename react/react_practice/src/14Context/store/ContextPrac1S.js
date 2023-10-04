import React, { createContext, useState } from 'react';

//Context생성
//createContext() : Provider와 Consumer 두개의 리액트 컴포넌트를 반환
const MyContext = createContext({
  thema: '',
  setThema: () => {},
  language: '',
  setLanguage: () => {},
});

export const UserProvider = ({ children }) => {
  const [thema, setThema] = useState('light');
  return <MyContext.Provider value={{ thema, setThema }}>{children}</MyContext.Provider>;
};
export const UserProvider1 = ({ children }) => {
  const [language, setLanguage] = useState('jp');
  return <MyContext.Provider value={{ language, setLanguage }}>{children}</MyContext.Provider>;
};

export default MyContext;
