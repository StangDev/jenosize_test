import React from 'react';
import { connect } from 'react-redux'
import CardPlaceList from '../components/cardPlaceList'
class App extends React.Component{
 
 componentDidMount(){
   console.log('componentDidMount',this.props);
   
 }
  render(){
      return (
        <div className="App">
              <div className="container h-100 mt-5">
          <div className="row h-100 justify-content-center align-items-center mt-5">
          <CardPlaceList data={this.props.dataPlace} />
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
