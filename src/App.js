import React, { useRef ,useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

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
    {id: 1, name: 'aaaa' ,email: 'a@naver.com'},
    {id: 2, name: 'bbbb',email: 'b@naver.com'},
    {id: 3, name: 'cccc',email: 'c@naver.com'},
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

  // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;
