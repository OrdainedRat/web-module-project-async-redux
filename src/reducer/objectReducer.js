import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../action/objectActions"

const initialState = {
    object: {
        estimated_diameter: {
          feet: {},
        kilometers: {},
        meters: {},
        miles: {}   
        }
       
    },
    isFetching: true,
    error: ''
}


export const objectReducer = (state = initialState, action) => {

    switch(action.type){
        case FETCH_START:
            return{
                ...state,
                isFetching: true
            }
        break;
        case FETCH_SUCCESS:
            return({
                ...state,
                object: action.payload,
                isFetching: false
            })
        break;
        case FETCH_FAIL:
            console.log('failure work')
        break;
        default:
            return state;
    }
}