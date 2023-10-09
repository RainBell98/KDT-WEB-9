import React from 'react';

interface Props {
  name: string;
}

// 컴포넌트 제작 방법 1.
// export default function Types({ name }: Props) {
//     return(<>
//         <h2>Hello {name}</h2>
//     </>)
// }

// 컴포넌트 제작 방법 2.
const Types: React.FC<Props> = (props) => {
  return (
    <>
      <h2>HELLO2 {props.name}</h2>
    </>
  );
};

export default Types;
