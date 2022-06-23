export const ReducerFunc = (state, action) => {
  switch (action.type) {
    case "lth":
      return {
        ...state,
        sort: action.payload
      };
    case "htl":
      return {
        ...state,
        sort: action.payload
      };
    case "SIZE":
      return {
        ...state,
        size: action.payload.check
          ? [...state.size, action.payload.sizeOption]
          : state.size.length > 0
          ? state.size.filter((sizeVal) => sizeVal !== action.payload.option)
          : []
      };
    default:
      return state;
  }
};
