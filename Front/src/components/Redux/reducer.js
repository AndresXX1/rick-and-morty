const initialState = {
    myFavorites: [],
    errors: {},
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_FAV":
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload],
          errors: {},
        };
  
      case "REMOVE_FAV":
        const updatedFavorites = state.myFavorites.filter(
          (character) => character.id !== action.payload
        );
        return {
          ...state,
          myFavorites: updatedFavorites,
          errors: {},
        };
  
      case "ERROR":
        return {
          ...state,
          errors: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;