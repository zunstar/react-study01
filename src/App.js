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
    
    // 불변성을 지키기위해 두가지 방법이 있다.
    // setUsers([...users,user]);
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
