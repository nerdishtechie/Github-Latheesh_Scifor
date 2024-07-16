import React, {Component} from 'react';
class StateManagement extends Component{
    constructor(){
        super()
        this.state={
            message:'Hello Folks!'
        }
    }changeMessage(){
        this.setState({
            message:'Welcome to the future!'
        })

    }

    render(){
        return( <div> <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeMessage()} >Welcome to my page!</button>
        </div>)
        }
}
export default StateManagement;