import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getObject, fetchSuccess } from "../action/objectActions";

const Object = (props) => {

    const { object, isFetching, error } = props;
    
   
    
   if (isFetching == true){
       return <h2>Fetching The Object</h2>
   }
   

    const fakeObj = { 
        name: 'mike'
    }

    useEffect(() => {
        props.getObject();
        
    }, [])
 
    return(
        <div>
            <p>Working</p>
            <h1>Look at {object.name} !</h1>
            <p>Estimated Diameter (Minimum, Maximum): <br/>
                 Feet: {object.estimated_diameter.feet.estimated_diameter_min}, {object.estimated_diameter.feet.estimated_diameter_max}  <br/>
                 Kilometers: {object.estimated_diameter.kilometers.estimated_diameter_min}, {object.estimated_diameter.kilometers.estimated_diameter_max}  <br/>
                 Meters: {object.estimated_diameter.meters.estimated_diameter_min}, {object.estimated_diameter.meters.estimated_diameter_max}  <br/>
                 Miles: {object.estimated_diameter.miles.estimated_diameter_min}, {object.estimated_diameter.miles.estimated_diameter_max}  <br/>                          
            </p>
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