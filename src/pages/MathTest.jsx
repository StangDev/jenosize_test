import React, { Component } from 'react';
import {
  Card, CardText, CardBody,Button,Input,Col
} from 'reactstrap';

class MathTest extends Component {
  constructor() {
    super();

    this.state = {
      a1:3,
      an:8,
      results:[]
    };
  }
  _calNow(){
    const { a1,an} = this.state
    let results = this._cal(a1,an)
    this.setState({results})
  }
  _cal(a,n){
    let sequence = []; 
    for(let i = 1; i < n; i++){
      var cal = (Math.pow(i, 2)-i)+a
      var prefix =(i+1)<n?' , ':null;
      var txt = cal+prefix
      sequence.push(txt);
    }

    return sequence
    
    }
  render() {
    return (
              <div className="container h-100 mt-5 App">
                <div className="row h-100 justify-content-center align-items-center">
                <Card className="col-6">
                  <CardBody className="row">
                  <Col sm={3}>
                      <Input type="number" value={this.state.a1} placeholder="a1"  onChange={(e) => this.setState({a1:parseInt(e.target.value)})}/>
                    </Col>
                    <Col sm={3}>
                      <Input type="number"  value={this.state.an} placeholder="an" onChange={(e) => this.setState({an:parseInt(e.target.value)})}/>
                    </Col>
                    <Col sm={3}>
                      <Button color="primary"  onClick={()=>this._calNow()}>cal</Button>
                    </Col>
                    <CardText className="col-12">3 , 5 , 7 , 9 , 15 , x , y ,z</CardText>
                    <CardText className="col-12">results: {this.state.results}</CardText>
                  </CardBody>
                </Card> 
                </div>  
              </div>
          )
  }

}

export default MathTest;