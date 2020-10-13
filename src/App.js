import React,{Component} from 'react';

import './App.css';

class  App extends Component {

constructor(props){
  super(props);
}

  state={
    val:'',
    res:'',
    valdrp:'',
    drpvals:{
      name:'hello',value:'xet'
    }
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

Updatevaldrp=(e)=>{
  this.setState({valdrp:e.target.value});
 
}

onClickHandlerdrp =()=>{
  var newdrp={};
  
  console.log(this.state.drpvals);
  let obj={name:'hello',value:this.state.valdrp};
  newdrp={
    ...this.state.drpvals,
   val: obj
  };
  console.log(newdrp);
  this.setState({drpvals:newdrp});
  console.log(this.state.drpvals);
}

  render(){
    let drp_val='';
   // if(this.state.drpval!=[] && this.state.drpval!=null)
   // {
//console.log(this.state.drpval);

 


   

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

      <br/>
      <br/>
      <label>Please enter the value to add to dropdown:</label>
      <input type="text" value={this.state.valdrp} onChange={this.Updatevaldrp}></input>
      <br/>
      <button className="Bhola" onClick={this.onClickHandlerdrp} > Add to dropdown</button>
      <select>
        
        {this.state.drpvals.map((obj)=>{
  return(
    <option  value={obj.val}>{obj.val}</option>
  )
})
}
      </select>
       
      </div>
    );
  }
  
}

export default App;
