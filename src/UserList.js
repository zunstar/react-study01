function User({user}){
    return(
        <div>
            <b>{user.name}</b> <span>{user.email}</span>
        </div>
    )
}

function UserList({users}){
   

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