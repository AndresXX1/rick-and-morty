const initialState = {
    myFavorites: []
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_FAV":
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case "REMOVE_FAV":
            return {...state, myFavorites: state.myFavorites.filter((fav) => fav.id !== Number(action.payload))
                ,}   //fav seria cada elemento del array


        default:
            return {...state}
    }

};

export default reducer