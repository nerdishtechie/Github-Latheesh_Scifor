import React, {Component} from 'react';
class ClassProps extends Component{
    
    render(){
        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                <h1>Age: {this.props.age}</h1>
                <h1>Country: {this.props.country}</h1>
                <h1>State: {this.props.state}</h1>
            </div>

        )
    }
}
export default ClassProps;