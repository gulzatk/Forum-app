import constants from "./../constants";
const { constant } = constants;

export default (state = {}, action) => {
  let newState;
  const { name, comment, id, formattedAddTime } = action;

  switch (action.type) {
    case constant.ADD_COMMENT:
      newState = Object.assign({}, state, {
        [id]: {
          name: name,
          comment: comment,
          id: id,
          formattedAddTime: formattedAddTime
        }
      });
      return newState;
    case constant.RECEIVE_COMMENT:
      newState = Object.assign({}, state);
      newState[action.comment.id] = action.comment;
      return newState;
    case constant.UPDATE_ELAPSED_TIME:
      const newComment = Object.assign({}, state[id], { formattedAddTime });
      newState = Object.assign({}, state, {
        [id]: newComment
      });
      return newState;
    default:
      return state;
  }
};
