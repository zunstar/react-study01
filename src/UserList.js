import React,{useEffect} from 'react';

const User = React.memo(function User({user,onRemove,onToggle}){
    const {username,email,id,active} = user;

    useEffect(()=>{ 
       
    },[user]);
    
    return(
        <div>
            <b
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                onClick={()=> onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            &nbsp;
            &nbsp;
            <span>{email}</span>
            <button onClick={()=> onRemove(id)}>삭제</button>
        </div>
    )
});

function UserList({users, onRemove, onToggle}){
    return(
        <div>
            {
                users.map(
                    user => (
                        <User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove} 
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    )
}
// React.memo 를 사용하여 컴포넌트 성능 최적화
// React.memo 를 사용하면 컴포넌트의 props 가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화를 해줄 수 있습니다.
export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);