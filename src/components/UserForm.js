import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addUser } from "../actions/userActions";
import { v4 as uuid } from "uuid";

// function UserForm(props) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//creates an object with the details
//of the new user including an auto generated id
//     let newUser = {
//       name: name,
//       email: email,
//       id: uuid(),
//     };

//triggers the addUser action
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

/*
    passes the addUser action to the component as props
*/
// const mapDispatch = {
//   addUser: addUser,
// };

// export default connect(null, mapDispatch)(UserForm);

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //hook to help trigger actions
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      name: name,
      email: email,
      id: uuid(),
    };

    //triggers the addUser action
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
