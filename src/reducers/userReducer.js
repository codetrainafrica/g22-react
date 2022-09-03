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
  //checks what type of action was triggered
  switch (actions.type) {
    //runs if the add user action was triggered
    case "ADD_USER":
      return { ...state, users: [...state.users, actions.payload] };

    //runs if the delete user action was triggered
    case "DELETE_USER":
      //code to delete user
      return state;

    //runs if no acion was triggered
    default:
      return state;
  }
};

export default userReducer;
