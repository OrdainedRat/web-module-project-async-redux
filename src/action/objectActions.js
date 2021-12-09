import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getObject = () => {
    return(dispatch) => {
        dispatch({type:FETCH_START});

        axios.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=EXBZOM1VfFdfEqJAemb8hvatr1LOFGMtEHlaYAhU')
            .then(res => {
                const keys = Object.keys(res.data.near_earth_objects);
                const key = keys[Math.floor(Math.random()*8)]
            
                const entries = Object.entries(res.data.near_earth_objects)
               
               const items = entries.filter((entry) => {
                   return entry.includes(key) 
                })
                 const item = items.map(thing => {
                    return thing[1][Math.floor(Math.random()*thing[1].length)]
                })
                
                const newObj = {
                  [key]: item[0]
                }
                console.log('object', newObj)

               dispatch({type:FETCH_SUCCESS, payload:newObj})
                
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