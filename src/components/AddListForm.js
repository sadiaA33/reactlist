import React ,{PureComponent}from 'react';

class AddListForm extends PureComponent {
   // state={
       // value:''
    //}
    ListInput= React.createRef();

    //handleValueChange = (e) => {

        //this.setState({value: e.target.value})
        
       // }
        handleSubmit = (e)=>{
            e.preventDefault();
            this.props.addList(this.ListInput.current.value);
            e.currentTarget.reset();
            //this.setState({value:''});
        }
        
    render () {
       // console.log(this.state.value)
        return (
            <form onSubmit={this.handleSubmit}>
            
                <input type="text" ref = {this.ListInput}
                //value = {this.state.value}
                //onChange={this.handleValueChange}
                placeholder="Enter item"
                />
                 
                <input
                type="submit"
                value="Add an item"
                />
            </form>
        )
    } }




export default AddListForm;