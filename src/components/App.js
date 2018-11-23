
import React,{Component} from 'react';
import Header from './Header';

import List from './List';
import AddListForm from './AddListForm';
//import Counter from './Counter' ;


class App extends Component {
  state = {
    lists: [
      {
        name: "milk",
        amount:0,
        id: 1
      },
      {
        name: "salt",
        amount:0,
        id: 2
      },
      {
        name: "nuts",
        amount:0,
        id: 3
      },
      {
        name: "sugar",
        amount:0,
        id: 4
      }
    ]
  };

  prevListId = 4;


  handleScoreChange = (index,delta) => {

 this.setState(prevState =>({
   amount:prevState.lists[index].amount+=delta
 }))
    //this.setState( prevState => ({
      //score: prevState.score + 1
      //console.log('index'+ index,'delta)'+delta);
   // }));
   
}

handleAddList = (name)=> {
  console.log(this.state.lists);
  this.setState(prevState =>{
    return {

    
    lists:[
      ...prevState.lists,
      //this.state.players,
      {
        name,
        amount:0,
        id:this.prevListId+=1
      },
      //this.state.players

    ]
  }})
}
  handleRemoveList = (id) => {
    this.setState( prevState => {
      return {
        lists: prevState.lists.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="todolist">
        <Header 
          title="To do list"
          lists = {this.state.lists}
          totalLists={this.state.lists.length} 
        />
  
        {/* Players list */}
        {this.state.lists.map( (lists,index) =>
          <List
            name={lists.name}
            amount={lists.amount}
            id={lists.id}
            key={lists.id.toString()} 
            index={index}
            changeScore={this.handleScoreChange}
            removeList={this.handleRemoveList}           
          />
        )}
        <AddListForm addList={this.handleAddList}/>
      </div>
    );
  }
}

export default App;




/*import React from 'react';

import Header from './Header';

import List from './List';

class App extends React.Component {
    state = {
        lists :[
            { name: "milk",  number:2, id:1},
            { name: "nuts",  number:4, id:2},
            { name: "salt",  number:1, id:3},
            { name: "musk",  number:8, id:4}
        ]
        
    }
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
  export default App;

*/
