import logo from './logo.svg';
import './App.css';

function App() {
  // const flag = true;
  // let txt = '';
  // if (flag) {
  //   txt = 'true입니다';
  // } else {
  //   txt = 'false입니다';
  // }
  // const styles = {
  //   backgroundColor: 'black',
  //   color: 'white',
  // };
  // return (
  //   <>
  //     {/* <h1 style={styles}>Hello React</h1>
  //     <div>리액트 시작</div>
  //     <input /> */}
  //     {/* <div>{flag ? <h1>true입니다</h1> : <h1>flase입니다</h1>}</div> */}
  //     {/* <div>{txt}</div> */}
  //     <div>
  //       이것은 div입니다
  //       <h3>이것은 div안에 있는 h3태그입니다.</h3>
  //     </div>
  //     <div>{3 + 5 == 8 ? <p>정답입니다</p> : <p>오답입니다</p>}</div>
  //   </>
  // );
  // const name = '로이';
  // const animal = '강아지';
  // const styles = {
  //   textDecoration: 'underline',
  // };
  // return (
  //   <>
  //     <h2>
  //       제 반려동물의 이름은 <u>{name}</u>입니다
  //     </h2>
  //     <h2>
  //       <u>{name}</u>는 <u>{animal}</u>입니다
  //     </h2>
  //   </>
  // );
  // const title = 'Hello World';
  // return (
  //   <>
  //     <div className="test">{title}</div>
  //     <div className="input">
  //       아이디: <input />
  //       <br />
  //       <br />
  //       비밀번호: <input />
  //     </div>
  //   </>
  // );
  // return (
  //   <>
  //     <div className="prac4">
  //       <div className="red"></div>
  //       <div className="orange"></div>
  //       <div className="yellow"></div>
  //       <div className="green"></div>
  //       <div className="blue"></div>
  //       <div className="navy"></div>
  //       <div className="purple"></div>
  //     </div>
  //   </>
  // );

  //map 함수
  // const lists = ['k', 'd', 't', 'w', 'e', 'b'];
  // const animals = ['dog', 'cat', 'rabbit'];
  // const newAnimal = animals.filter((value) => {
  //   // return value.length > 3;
  //   return value.includes('a');
  // });
  // console.log(newAnimal);

  // //단축평가
  // //&&연산자
  // const result = true && 'Hello';
  // console.log(result);
  //||연산자
  // const defaultValue = 1000;
  // const price = 1500;
  // const dbPrice = price || defaultValue;
  // console.log(dbPrice);

  // return (
  //   <>
  //     {lists.map((value, index) => {
  //       return (
  //         <div key={index}>
  //           <p>Hello {value}</p>
  //         </div>
  //       );
  //     })}
  //   </>
  // );
  const users = [
    { id: 1, name: 'John', age: 25, vip: true },
    { id: 2, name: 'Jane', age: 19, vip: false },
    { id: 3, name: 'Alice', age: 30, vip: true },
    { id: 4, name: 'Bob', age: 18, vip: false },
    { id: 5, name: 'Charlie', age: 35, vip: true },
  ];
  const user = users.filter((value) => {
    return value.vip;
  });

  const res = true && result();
  function result() {
    return (
      <>
        {user.map((value) => {
          return (
            <div key={value.id}>
              <p>- {value.name}</p>
            </div>
          );
        })}
      </>
    );
  }
  console.log(res);
  return <>{res}</>;
}

export default App;
