import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setPlace } from '../redux/stores'

class App extends React.Component{
 
  componentDidMount() {
   
  }
  render(){
      return (
        <div className="App">
              <div className="container h-100 mt-5">
          <div className="row h-100 justify-content-center align-items-center">
          
          </div>  
        </div>
        </div>
      );
    }
}
const mapStateToProps = (state) => ({
  dataPlace: state.data
})

export default connect(mapStateToProps)(App)
