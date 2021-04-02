export const initialState = {
  order: [],
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_ORDER':
      if (state.order.length < 2) {
        return {
          ...state,
          order: [...state.order, action.item],
        };
      }
    // case 'REMOVE_FROM_ORDER':
    //   return {
    //     ...state,
    //     order: [...state.order, ]
    //   }
    default:
      return state;
  }
};

export default reducer;