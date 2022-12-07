const commentReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "POST_COMMENT":
      return { ...state };
    default:
      return state;
  }
};
export default commentReducer;
