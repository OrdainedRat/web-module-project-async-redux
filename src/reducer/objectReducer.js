import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../action/objectActions"

const initialState = {
    object: {},
    isFetching: false,
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
                object: action.payload
            })
        break;
        case FETCH_FAIL:
            console.log('failure work')
        break;
        default:
            return state;
    }
}