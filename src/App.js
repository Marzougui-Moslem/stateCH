import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class App extends Component {
    constructor(props){
    super(props);
    this.state={
    person: {
    fulName:"Azzedine Ounahi",
    bio:"Azzedine Ounahi (en arabe  عز الدين أوناحي), né le 19 avril 2000 à Casablanca au Maroc, est un footballeur international marocain jouant au poste de milieu  Ounahi",
    imgSrc:"https://www.footballdatabase.eu/images/photos/players/2022/a_362/362215.jpg",
    profession:"footballeur",
    bool:true,
},
    
}

}
updateState =()=> {
    
    this.setState({ person:{...this.state.person, bool : !this.state.person.bool}});
}


    render() {
        return (
            <>
            {this.state.person.bool ? (  
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.state.person.imgSrc} />
      <Card.Body>
        <Card.Title>{this.state.person.fulName}</Card.Title>
        <Card.Text>{this.state.person.bio}</Card.Text>
        <Card.Text>{this.state.person.profession}</Card.Text>
      </Card.Body> 
      <Button variant="primary" onClick={()=> this.updateState()}> Hide</Button>
      
      
    </Card>)
    : (<Button variant="primary" onClick={()=> this.updateState()}> Show</Button>)
    
    }
             
   
            </>
        );
    }
}
export default App;
