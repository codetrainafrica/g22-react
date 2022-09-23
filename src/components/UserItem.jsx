import React, { Component } from "react";

// class UserItem extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.details.name}</h1>
//         <h3>{this.props.details.email}</h3>
//       </div>
//     );
//   }
// }

function UserItem(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.details.name}</h1>
      <h3>{props.details.email}</h3>
    </div>
  );
}

export default UserItem;
