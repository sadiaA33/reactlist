import React from 'react';


const Header=(props)=>{
    return(
        <header>
        <div>
            <h1 className = "things">Things: </h1> 
            </div>
            <h1>{props.title}</h1>
            
           <span className = "stats"> Amount:{props.totalLists}</span> 
        </header>
    );
}
export default Header;