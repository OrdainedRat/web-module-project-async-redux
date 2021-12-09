import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getObject, fetchSuccess } from "../action/objectActions";

const Object = (props) => {

    const { object, isFetching, error } = props;
    
    
    console.log(object)
   

    const fakeObj = { 
        name: 'mike'
    }

    useEffect(() => {
        props.getObject();
    }, [])

    return(
        <div>
            <p>Working</p>
            {}
        </div>
    )
}

const mapStateToProps = (state) => {
  console.log('here is my state', state )
  return {
     object: state.object
  }
}

export default connect(mapStateToProps , { getObject, fetchSuccess })(Object)