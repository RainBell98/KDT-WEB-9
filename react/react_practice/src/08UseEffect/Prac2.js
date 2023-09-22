import { useState, useEffect } from 'react';
import axios from 'axios';

export const Prac2 = () => {
  const [userList, setUserList] = useState([]);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    //useEffect는 비동기 함수를 직접적으로 지원하지 않음
    //비동기 함수를 사용하려면 내부에 비동기 함수를 정의하고 바로 호출
    async function user() {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setUserList(res.data);
    }
    user();
    // axios({
    //   method: 'get',
    //   url: `https://jsonplaceholder.typicode.com/users`,
    // }).then((res) => {
    //   console.log();
    // });

    return () => {};
  }, []);
  useEffect(() => {
    console.log(userList.length);
  }, [userList]);
  const changeVisibleState = () => {
    setVisible(() => !visible);
    console.log('연결해제완료');
  };
  return (
    <>
      {visible && (
        <ul value={userList} onChange={(e) => setUserList(e.target.value)}>
          {userList.map((value) => {
            console.log('유저정보업데이트');
            return (
              <li>
                {value.name} - {value.email}
              </li>
            );
          })}
          {visible != true && console.log('연결해제완료')}
        </ul>
      )}
      <button onClick={changeVisibleState}>삭제</button>
    </>
  );
};
