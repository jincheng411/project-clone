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
  const cat = action.item?.category;
  switch (action.type) {
    case 'ADD_TO_ORDER':
      if ((cat !== 'protein' &&
        cat !== 'rice' &&
        cat !== 'beans') ||
        state[cat].length < 2) {
        return {
          ...state,
          [cat]: [...state[cat], action.item]
        }
      }
    case 'REMOVE_FROM_ORDER':
      const filtered = state[cat].filter((item) => {
        return item.name !== action.item.name;
      })
      return {
        ...state,
        [cat]: filtered,
      }
    case 'CHANGE_OPTION':
      let targetCat = state[cat];
      for (let i = 0; i < targetCat.length; i++) {
        console.log(action.item.option)
        if (targetCat[i].name === action.item.name) {
          targetCat[i].option = action.item.option;
        }
      }
      return {
        ...state,
        [cat]: targetCat,
      }
    default:
      return state;
  }
};

export default reducer;