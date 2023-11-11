import React, { useRef ,useState, useMemo } from 'react';
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

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  };

  const [users,setUsers] = useState([
    {id: 1, username: 'aaaa' ,email: 'a@naver.com',active: true},
    {id: 2, username: 'bbbb',email: 'b@naver.com',active: false},
    {id: 3, username: 'cccc',email: 'c@naver.com',active: false},
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
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
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(
      users.map(user => 
        user.id === id ? {...user, active: !user.active} : user
      )
    );
  }

  // useMemo 를 사용하여 연산한 값 재사용하기
  // useMemo 의 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣어주면 되고,
  // 두번째 파라미터에는 deps 배열을 넣어주면 되는데, 이 배열 안에 넣은 내용이 바뀌면,
  // 우리가 등록한 함수를 호출해서 값을 연산해주고, 만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 됩니다.
  // 이렇게 함으로써, 렌더링하는 과정에서 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있습니다.
  // 이번에는 users 배열을 파라미터로 넣어주었는데, 이 배열 내부의 값이 바뀔 때에만 함수를 호출하고,
  // 만약에 배열 내부의 값이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 됩니다.
  // 이렇게 함으로써, users 배열 내부의 값이 바뀌지 않았다면, 즉 onCreate, onRemove, onToggle 함수가 호출되었을 때만
  // countActiveUsers 함수가 호출되고, 그렇지 않다면 호출되지 않습니다.
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
