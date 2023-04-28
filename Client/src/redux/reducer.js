const { ADD_FAV, REMOVE_FAV, FILTER, ORDER } = require("./actions")
// const axios = require('axios')

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, actions) => {
    switch(actions.type){
        case ADD_FAV:
            return { ...state, myFavorites: actions.payload, allCharacters: actions.payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: actions.payload };
        case FILTER:
            const allCharactersFilter = state.allCharacters.filter((character) => character.gender === actions.payload);

            return{
                ...state,
                myFavorites: actions.payload === 'allCharacters'
                ? [...state.allCharacters]
                : allCharactersFilter 
            }
        case ORDER:
            const allCharactersOrder = [...state.allCharacters]
                
            
            return {
                ...state,
                myFavorites:
                actions.payload === 'A'
                ? allCharactersOrder.sort((a,b) => a.id - b.id)
                : allCharactersOrder.sort((a,b) => b.id - a.id)
            }
        default: 
            return {...state}
    }
};

export default rootReducer;