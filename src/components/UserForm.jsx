import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

class UserForm extends React.Component {
  constructor() {
    super();

    this.state = { name: "", email: "" };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.name.length > 0 && this.state.email.length > 0) {
      let newUser = {
        name: this.state.name,
        email: this.state.email,
        id: uuid(),
      };

      this.props.addUser(newUser);

      this.setState({ name: "", email: "" });
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Fullname</Form.Label>
            <Form.Control
              value={this.state.name}
              onChange={this.handleNameChange}
              type="text"
              placeholder="Enter your fullname"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User email</Form.Label>
            <Form.Control
              value={this.state.email}
              onChange={this.handleEmailChange}
              type="email"
              placeholder="Enter your email"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

// function UserForm(props) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let newUser = {
//       name: name,
//       email: email,
//       id: uuid(),
//     };

//     props.addUser(newUser);

//     setName("");
//     setEmail("");
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>User Fullname</Form.Label>
//           <Form.Control
//             value={name}
//             onChange={handleNameChange}
//             type="text"
//             placeholder="Enter your fullname"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>User email</Form.Label>
//           <Form.Control
//             value={email}
//             onChange={handleEmailChange}
//             type="email"
//             placeholder="Enter your email"
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </Container>
//   );
// }

export default UserForm;
