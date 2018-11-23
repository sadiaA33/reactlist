
//import React from 'react';
import React, {PureComponent} from 'react';
import Counter from './Counter';

class List extends PureComponent {
  render(){
    const {
      name,id,amount,index,removeList,changeScore
    } = this.props;
    return (
      <div className="list">
        <span className="list-name">
          <button className="remove-List" onClick = {() => removeList(id)}>✖</button>
          { name }
        </span>
  
       <Counter 
        index={index}
        amount={amount}
        changeScore = {changeScore}
        /> 
      </div>
    );

  }

}


 
  

  export default List;

/*const List = (props)=>{
    return (
        <div className = 'list'>
<span className = 'list-name'>
<button className ='remove-list' onClick = {()=>props.removeList(props.id)}><i class="far fa-trash-alt"></i></button>
{props.name}</span> 
<div class ='numbers'> {props.number}</div>



        </div>
    );
}
export default List;*/