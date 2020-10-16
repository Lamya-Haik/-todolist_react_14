import React from 'react';
import List from './component/List';
 

 

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      value: "",
      tableau: [],
    }
  }

  ajouter = () => {
  let a = this.state
  let obj = {
    valeur: a.value,
    validate: false,
    edit: false,
  } 
  a.tableau.push(obj)
  this.setState(a)
  console.log(a.tableau);
  }

  onChange =(event) => {
    this.setState({value: event.target.value})
  }


render(){
return(
  <div className="container text-center">
    <h1 className="text-center">Todo list</h1>
    <input type="text" value= {this.state.value} onChange={this.onChange.bind(this)}/>
    <button onClick={() => this.ajouter()} className="bg-primary text-white">Add</button>
    <ul className="list-group">
      {this.state.tableau.map((e,i) => {
        return(
          <List key={i} nom={e.valeur}/>
        )
      })}
    </ul>

  </div>
)
}
}
