import React,{Component} from 'react';

import './App.css';

class  App extends Component {

constructor(props){
  super(props);
}

  state={
    val:'',
    res:''
  }
 
onClickHandler=()=>{
 // console.log(this.state.val);
  let str = this.state.val;
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      this.setState({res:'false'});
        return false;
        
    }
  }
  this.setState({res:'true'});
  return true;
}

Updateval=(e)=>{
  this.setState({val:e.target.value});
  console.log(this.state.val);
  this.setState({res:''});
}

  render(){
    return (
      <div className="App">
       <label className="Sujay">Please enter your name here:</label>
       <input type="text" value={this.state.val} onChange={this.Updateval}></input>
       <br/>
       <br/>
       <button className="Bhola" onClick={this.onClickHandler} > Check for palindrome</button>
       {
         (this.state.res!=='')?<div>{(this.state.res=='true')?<div>Yes</div>:<div>no</div>}</div>:null
       }
       
      </div>
    );
  }
  
}

export default App;
