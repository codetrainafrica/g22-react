import React, { useState, Component } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuid } from "uuid";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       users: [
//         { name: "Tony", email: "tony@email.com", id: uuid() },
//         { name: "Mary", email: "mary@email.com", id: uuid() },
//         { name: "Adjowa", email: "adjowa@email.com", id: uuid() },
//         { name: "Zak", email: "zak@email.com", id: uuid() },
//       ],
//     };
//   }

//   addNewUser = (newUser) => {
//     this.setState({ users: [...this.state.users, newUser] });
//   };

//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col>
//             <UserForm addUser={this.addNewUser} />
//           </Col>

//           <Col>
//             <UserList users={this.state.users} />
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

function App() {
  const [users, setUsers] = useState([
    { name: "Tony", email: "tony@email.com", id: uuid() },
    { name: "Mary", email: "mary@email.com", id: uuid() },
    { name: "Adjowa", email: "adjowa@email.com", id: uuid() },
    { name: "Zak", email: "zak@email.com", id: uuid() },
  ]);

  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <Container>
      <Row>
        <Col>
          <UserForm addUser={addNewUser} />
        </Col>

        <Col>
          <UserList users={users} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
