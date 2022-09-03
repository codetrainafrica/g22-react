import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { addUser } from "../actions/userActions";

// function UserList({ users, number, addUser }) {
//   return (
//     <div>
//       {users.map((user) => {
//         return <h1>{user.name}</h1>;
//       })}
//     </div>
//   );
// }

// const mapState = (state) => {
//   return { users: state.users, number: state.number };
// };

// const mapDispatch = {
//   addUser: addUser,
// };

// export default connect(mapState, mapDispatch)(UserList);

function UserList() {
  const { users } = useSelector((state) => {
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
