import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Object from './components/Object';

function App(props) {
  
  const isFetching = props;

  if (isFetching == true){
    return <h2>Fetching The Object</h2>
} else {
 

  
  return (
    <div className="App">
      Async Redux Project
      <Object/>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return({
    isFetching: state.isFetching
  })
}

export default connect(mapStateToProps, {})(App);