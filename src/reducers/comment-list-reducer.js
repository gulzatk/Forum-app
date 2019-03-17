export default (state = {}, action) => {
  let newState;
  const { name, comment, id } = action;

  switch (action.type) {
    case "ADD_COMMENT":
      newState = Object.assign({}, state, {
        [id]: {
          name: name,
          comment: comment,
          id: id
        }
      });
      return newState;
    default:
      return state;
  }
};
