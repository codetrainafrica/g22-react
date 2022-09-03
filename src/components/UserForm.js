import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addUser } from "../actions/userActions";
import { v4 as uuid } from "uuid";

// function UserForm(props) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let newUser = {
//       name: name,
//       email: email,
//       id: uuid(),
//     };

//     props.addUser(newUser);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type={"text"}
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type={"email"}
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input type={"submit"} />
//     </form>
//   );
// }

// const mapDispatch = {
//   addUser: addUser,
// };

// export default connect(null, mapDispatch)(UserForm);

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      name: name,
      email: email,
      id: uuid(),
    };

    dispatch(addUser(newUser));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type={"submit"} />
    </form>
  );
};

export default UserForm;
