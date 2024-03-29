export const initialState = {
  protein: { items: [] },
  rice: { items: [] },
  beans: { items: [] },
  topping: { items: [] },
  options: { items: [] },
  side: { items: [] },
  drinks: { items: [] },
  mealCount: Number(window.localStorage.mealCount) || 0,
}
export const reducer = (state, action) => {
  const cat = action.item?.category;
  switch (action.type) {
    case 'ADD_TO_ORDER':
      if ((cat !== 'protein' &&
        cat !== 'rice' &&
        cat !== 'beans') ||
        state[cat].items.length < 2) {
        return {
          ...state,
          [cat]: { ...state[cat], items: [...state[cat].items, action.item] },
        }
      }
    case 'REMOVE_FROM_ORDER':
      const filtered = state[cat].items.filter((item) => {
        return item.name !== action.item.name;
      })
      return {
        ...state,
        [cat]: { ...state[cat], items: filtered },
      }
    case 'CHANGE_OPTION':
      let targetCat = state[cat].items;
      for (let i = 0; i < targetCat.length; i++) {
        console.log(action.item.option)
        if (targetCat[i].name === action.item.name) {
          targetCat[i].option = action.item.option;
        }
      }
      return {
        ...state,
        [cat]: { ...state[cat], items: targetCat },
      }
    case 'SET_AMOUNT':
      let outputAmount = action.amount
      if (cat === 'protein' ||
        cat === 'rice' ||
        cat === 'beans') {
          if (state[cat].items.length === 2) {
            if (state[cat].double) {
              outputAmount = '1x';
            } else {
              outputAmount = '1/2';
            }
          } else if (state[cat].items.length === 1 && state[cat].double) {
            outputAmount = '2x';
          }
      }
      return {
        ...state,
        [cat]: { ...state[cat], amount: outputAmount }
      }
    case 'CHANGE_DOUBLE':
      return {
        ...state,
        [cat]: { ...state[cat], double: action.double }
      }
    case 'ADD_TO_CART':
      return {
        ...state,
        mealCount: state.mealCount + 1,
      }
    default:
      return state;
  }
};

export default reducer;