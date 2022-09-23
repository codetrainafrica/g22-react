import React, { Component } from "react";
import UserItem from "./UserItem";

// class UserList extends Component {
//   render() {
//     return (
//       <div>
//         <h1>User list component</h1>

//         {this.props.users.map((user) => {
//           return <UserItem key={user.id} details={user} />;
//         })}
//       </div>
//     );
//   }
// }

function UserList(props) {
  return (
    <div>
      <h1>User list component</h1>;
      {props.users.map((user) => {
        return <UserItem key={user.id} details={user} />;
      })}
    </div>
  );
}

export default UserList;
