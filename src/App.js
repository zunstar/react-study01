import React, { useRef ,useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  
  const { username, email } = inputs;

  // useCallback 을 사용하여 함수를 재사용 할 수 있도록 설정
  // inputs 가 바뀔 때만 함수가 새로 만들어지도록 설정
  // 함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 deps 배열 안에 포함시켜야 함
  // 함수형 업데이트를 하게 되면 deps 에서 사용하는 상태를 넣어주지 않아도 됨
  // deps 에 넣는 상태 값은 useCallback 의 파라미터로 설정하는 상태 값이어도 상관 없음
  // useCallback 의 두번째 파라미터인 deps 배열 안에는 함수에서 사용하는 상태 혹은 props 를 넣어주어야 함
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  },[inputs]);

  const [users,setUsers] = useState([
    {id: 1, username: 'aaaa' ,email: 'a@naver.com',active: true},
    {id: 2, username: 'bbbb',email: 'b@naver.com',active: false},
    {id: 3, username: 'cccc',email: 'c@naver.com',active: false},
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id : nextId.current,
      username,
      email
    }
    
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  },[username,email,users]);

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  },[users]);

  const onToggle = useCallback(id => {
    setUsers(
      users.map(user => 
        user.id === id ? {...user, active: !user.active} : user
      )
    );
  },[users]);

  const count = useMemo(() => countActiveUsers(users),[users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
