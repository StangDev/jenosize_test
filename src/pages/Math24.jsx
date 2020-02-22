import React, {  Component } from 'react';
import {
  Card, CardText, CardBody,Button,Input,Col
} from 'reactstrap';

class Math24 extends Component {
    constructor() {
        super();
       
        this.state = { 
          a1:0,
          b2:0,
          c3:0,
          d4:0,
          results:null
        };
      }
      _cal24(){
      
        const {a,b,c,d} = this.state
        let results = this._func24([a,b,c,d])
        this.setState({results})
        
      }
      _func24=(nums)=>{
        if (nums.length <= 1) {
          return Math.abs(nums[0] - 24) < 0.01;
        }
        for (let i = 0; i < nums.length; i++) {
          for (let j = 0; j < i; j++) {
            const x = nums[i];
            const y = nums[j];
            for (const n of this._Combina(x, y)) {
              nums.splice(i, 1);
              nums.splice(j, 1);
              nums.push(n);
              if (this._func24(nums)) {
                return true;
              }
              nums.pop(n);
              nums.splice(j, 0, x);
              nums.splice(i, 0, y);
            }
          }
        }
        return false
      }
      _Combina(x, y) {
        
        return [x + y, x - y, x - y, x * y, x / y, x / y];
      }
  render() {
    return (
      <div className="container h-100 mt-5 App">
      <div className="row h-100 justify-content-center align-items-center">
      <Card className="col-6">
        <CardBody className="row">
        <Col sm={3}>
          <Input type="number"  placeholder="a"  onChange={(e) => this.setState({a:parseInt(e.target.value)})}/>
        </Col>
        <Col sm={3}>
          <Input type="number"  placeholder="b" onChange={(e) => this.setState({b:parseInt(e.target.value)})}/>
        </Col>
        <Col sm={3}>
          <Input type="number"  placeholder="c" onChange={(e) => this.setState({c:parseInt(e.target.value)})}/>
        </Col>
        <Col sm={3}>
          <Input type="number"  placeholder="d" onChange={(e) => this.setState({d:parseInt(e.target.value)})}/>
        </Col>
        <Col className="mt-3" sm={12}>
          <Button color="primary" size="sm" block onClick={()=>this._cal24()}>cal24</Button>
        </Col>
          <CardText className="col-12">results: {this.state.results?'Yep! cal 24':'Opp! not 24'}</CardText>
        </CardBody>
      </Card> 
      </div>  
    </div>
    )
  }
}

export default Math24;