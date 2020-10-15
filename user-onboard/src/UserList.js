import React from 'react';
import UserCard from './UserCard';




const UserList = (props) => {
    const {users} = props
    return (

    <div>
       {users.map((user, index) => { 
         return <UserCard user={user} key={index} />
       })}
     </div>  
     );
}
 
export default UserList;