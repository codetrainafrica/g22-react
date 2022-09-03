import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { addUser } from "../actions/userActions";

/*
    Reading from the store using the connect method
*/

// function UserList({ users, number, addUser }) {
//   return (
//     <div>
//       {users.map((user) => {
//         return <h1>{user.name}</h1>;
//       })}
//     </div>
//   );
// }

/*
    reads the state from the store 
    and sends it the component as props
*/
// const mapState = (state) => {
//   return { users: state.users, number: state.number };
// };

/*
    passes the action to the component as props
*/
// const mapDispatch = {
//   addUser: addUser,
// };

//the connect method enables
//the component to communicate with the store
// export default connect(mapState, mapDispatch)(UserList);

/*
    Reading from the store using the useSelector hook
*/
function UserList() {
  /*
    reads the state from the store
*/
  const { users, number, name } = useSelector((state) => {
    return state;
  });

  return (
    <div>
      {users.map((user) => {
        return <h1>{user.name}</h1>;
      })}
    </div>
  );
}

export default UserList;
