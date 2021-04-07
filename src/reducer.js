export const initialState = {
    protein: [],
    rice: [],
    beans: [],
    topping: [],
    options: [],
    side: [],
    drink: [],
}

export const reducer = (state, action) => {
  const cat = action.item.category;
  switch(action.type) {
    case 'ADD_TO_ORDER':
      if (state[action.item.category].length < 2) {
        return {
          ...state,
          [cat]: [...state[cat], action.item]
        }
      }
    case 'REMOVE_FROM_ORDER':
      const filtered = state[cat].filter((item) => {
        return item.name !== action.name;
      })
      return {
        ...state,
        [cat]: filtered,
      }
    default:
      return state;
  }
};

export default reducer;