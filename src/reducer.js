export const initialState = {
    protein: [],
    rice: [],
    beans: [],
    topping: [],
    option: [],
    side: [],
    drink: [],
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_ORDER':
      if (state[action.item.category].length < 2) {
        const cat = action.item.category;
        return {
          ...state,
          [cat]: [...state[cat], action.item]
        }
      }
    case 'REMOVE_FROM_ORDER':
      const filtered = state[action.category].filter((item) => {
        return item.name !== action.name;
      })
      const cat = action.category;
      return {
        ...state,
        [cat]: filtered,
      }
    default:
      return state;
  }
};

export default reducer;