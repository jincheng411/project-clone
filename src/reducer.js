export const initialState = {
  order: {
    protein: [],
    rice: [],
    bean: [],
    topping: [],
    option: [],
    side: [],
    drink: [],
  },
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_ORDER':
      if (state.order[action.item.category].length < 2) {
        const addOn = [...state.order[action.item.category], action.item]
        console.log(addOn)
        return {
          ...state,
          order: {...state.order, protein: addOn},
        };
      }
    case 'REMOVE_FROM_ORDER':
      const filtered = state.order.filter((item) => {
        return item.name !== action.name;
      })
      return {
        ...state,
        order: filtered,
      }
    default:
      return state;
  }
};

export default reducer;