import React, { useRef } from 'react';
import UserList from './UserList';

function App() {

  const users = [
    {id: 1, name: 'aaaa' ,email: 'a@naver.com'},
    {id: 2, name: 'bbbb',email: 'b@naver.com'},
    {id: 3, name: 'cccc',email: 'c@naver.com'},
  ];
  // useRef()를 사용하여 변수를 만들고, 이를 useRef를 통해 관리
  // 컴포넌트가 리렌더링되어도 값이 계속 유지
  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current); // 4
    // 값이 변경되어도 컴포넌트가 리렌더링되지 않음
    nextId.current += 1;
  }
  return (
    <UserList users={users} />
  );
}

export default App;
