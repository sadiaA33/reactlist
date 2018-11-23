import React from "react"
import ReactDOM from 'react-dom'

import './index.css';
import App from './components/App';


/*const Header=(props)=>{
    return(
        <header>
        <div>
            <h1 className = "things">Things: </h1> 
            </div>
            <h1>{props.title}</h1>
            
           <span className = "stats"> Amount:{props.totalLists}</span> 
        </header>
    );
}*/

 /*const List = (props)=>{
     return (
         <div className = 'list'>
<span className = 'list-name'>
<button className ='remove-list' onClick = {()=>props.removeList(props.id)}>x</button>
{props.name}</span> 
<div class ='numbers'> {props.number}</div>



         </div>
     );
 }*/

 /*class Counter extends React.Component {
     state = {
        number = 0
     }
 
incrementNumber = ()=>{
    this.setState(prevState => (
        {number:prevState.number +1}))}
    
decrementNumber=()=>{
    this.setState(prevState =>({ number:prevState.number -1}))}

render(){
    return (
        <div className="counter"> 
        <button className="counter-action decrement" onClick={()=>this.decrementNumber()}>-</button>
        <span className="counter-score">{this.state.number}</span>
        <button className="counter-action increment" onClick={()=>this.incrementNumber()}>+</button>

        </div>
    );}
        
    
 }*/

  /*class App extends React.Component {
      state = {
          lists :[
              { name: "milk",  number:2, id:1},
              { name: "nuts",  number:4, id:2},
              { name: "salt",  number:1, id:3},
              { name: "musk",  number:8, id:4}
          ]
          
      };
       handleRemoveList = (id)=>{
           this.setState(prevState=>{
               return {
                   lists:prevState.lists.filter(p=> p.id !==id)
               };
           });
       }
       render(){
           return(
               <div className =" todolist">
                   <Header title="To do list" totalLists={this.state.lists.length}/>
            {this.state.lists.map(lists=>
            <List name={lists.name}
                     number={lists.number}
                     id ={lists.id}
                     key ={lists.id.toString()} 
                     removeList = {this.handleRemoveList}   
                     />
                     )}
            
               </div>
           );
       }
    }
*/


ReactDOM.render(
   
    
    <App />, //deleted the props after making state
   
    document.getElementById('root')
);