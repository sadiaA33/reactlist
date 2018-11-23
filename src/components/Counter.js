import React from 'react';
import propTypes from 'prop-types'


    const Counter=({index,amount,changeScore})=>{
    
    
    /*incrementScore = () => {
      this.setState( prevState => ({
        score: prevState.score + 1
      }));
    }
  made it stateless by deleting these two functions
    decrementScore = () => {
      this.setState( prevState => ({
        score: prevState.score - 1
      }));
    }*/
  
      return (
        <div className="counter">
          <button className="counter-action decrement" onClick = {()=>changeScore(index,-1)}> - </button>
          <span className="counter-score">{ amount }</span>
          <button className="counter-action increment" onClick={()=>changeScore(index ,1)} > + </button>
        </div>
      );
    }
  Counter.propTypes ={
    index :propTypes.number,
    amount:propTypes.number,
   changeScore:propTypes.func
  };
  export default Counter;
  