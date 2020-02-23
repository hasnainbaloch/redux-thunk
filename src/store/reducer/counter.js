import * as actionsType from '../actions/actions';


const initialState = {
    counter : 0,
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case actionsType.ADD:
                
            return{
                ...state,
                counter: state.counter + 1
            }

        case actionsType.SUB:
            
            return{
                ...state,
                counter: state.counter - 1
            }

        case actionsType.ADD_TEN:
            
            return{
                ...state,
                counter: state.counter + 10
            }

        case actionsType.SUB_FIFTEEN:
            
            return{
                ...state,
                counter: state.counter - 15
            }
    }
    
    return state;
}

export default reducer;