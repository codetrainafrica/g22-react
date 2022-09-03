import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    { name: "Mary", email: "mary@email.com", id: uuid() },
    { name: "Joe", email: "joe@email.com", id: uuid() },
  ],
  number: 30,
  name: "Zidane",
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_USER":
      console.log(actions.payload);
      return { ...state, users: [...state.users, actions.payload] };

    case "DELETE_USER":
      //code to delete user
      return state;

    default:
      return state;
  }
};

export default userReducer;
