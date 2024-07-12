import React from 'react';
const PersonDetails = (props) => {
    return <div>
        <h1>Name: {props.name}</h1>
        <h1>Age: {props.age}</h1>
        <h1>Mobile Number: {props.mobile}</h1>
        <h1>Email Address: {props.email}</h1>
        <h1>City: {props.city}</h1>
    
    </div>
}
export default PersonDetails;
