//defines the add user action with a type and payload/data
export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};
