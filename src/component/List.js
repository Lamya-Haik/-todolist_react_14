import React from 'react';
 

export default class List  extends React.Component{
render(){
return(
    <li className="liste list-group-item mt-3 d-flex justify-content-between">{this.props.nom} 
    <button className="btn btn-success">icone</button>
    </li>
)
}
}