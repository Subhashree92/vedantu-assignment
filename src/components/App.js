import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader,Alert } from 'reactstrap';
import '../App.css';
import Repo from '../components/repo'

class App extends Component {
  constructor(){
    super();
    this.state={
      repositories:[],
      query:''
    }
    this.formSubmission=this.formSubmission.bind(this);
  }
  formSubmission(e){  
    e.preventDefault()
      axios.get('https://api.github.com/search/repositories?q=TEST').then((response)=>{
              this.setState({
                  repositories:response.data.items
                  
              })
          console.log(response);
          }).catch((err)=>{
              console.log(err);
          })
        }
    
  
  

  render() {
    return (
      <div className="container">
    
       <Card>
       <Alert color="primary">GIT REPOSITARY FILTER</Alert>
        <form onSubmit={this.formSubmission}> 
              <input type="text" placeholder="placeholder" />
              <input type="submit"  value="SEARCH"  color="primary"/>
         </form> 
       </Card>
       
       <Repo repositories={this.state.repositories}/>

      </div>
    );
  }
}

export default App;
