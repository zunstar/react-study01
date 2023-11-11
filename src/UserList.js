function User({user}){
    return(
        <div>
            <b>{user.name}</b> <span>{user.email}</span>
        </div>
    )
}

function UserList(){
    const users = [
        {id: 1, name: 'aaaa' ,email: 'a@naver.com'},
        {id: 2, name: 'bbbb',email: 'b@naver.com'},
        {id: 3, name: 'cccc',email: 'c@naver.com'},
    ];

    return(
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    )
}

export default UserList;