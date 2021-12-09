import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getObject = () => {
    return(dispatch) => {
        dispatch({type:FETCH_START});

        axios.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=EXBZOM1VfFdfEqJAemb8hvatr1LOFGMtEHlaYAhU')
            .then(res => {
            const dataEntries = Object.values(res.data.near_earth_objects)
            const entry = dataEntries[Math.floor(Math.random()*dataEntries.length)]
            const item = entry[Math.floor(Math.random()*entry.length)]
                
               dispatch({type:FETCH_SUCCESS, payload:item})
                
            })
            .catch(err => {
                dispatch({type:FETCH_FAIL, payload: err})
            })
    }
}


export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess = (object) => {
    return({type:FETCH_SUCCESS, payload: object})
}

export const fetchFail = (error) => {
    return({type:FETCH_FAIL, payload: error})
}