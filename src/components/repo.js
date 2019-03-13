import React ,{Component} from 'react'
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Alert,Row,Table, Col, CardGroup,CardDeck,Container } from 'reactstrap';
//import RepoList from './list'
import CardHeader from 'reactstrap/lib/CardHeader';
class Repo extends Component{
    render(){
        console.log(this.props.repositories)
        return(
             <div>
                 <Alert color="primary">REPO SEARCH RESULT</Alert>
                 
                
                { this.props.repositories.map((repo, index) => {                 
                        return <RepoList repositary={repo} key={index} />

                    })}
                
             </div>
        )
    }
 }
class RepoList extends Component{
    render(){
        return(
            <div>

                
                
                <Card >
                    <CardBody>
                      <img top width="50px"  height="50px" src={this.props.repositary.owner.avatar_url} />
                        {/* <CardImg>{this.props.repositary.owner.avatar_url}</CardImg> */}
                        <CardTitle>{this.props.repositary.name}</CardTitle>
                        <a>OPEN ISSUES:{this.props.repositary.open_issues} </a>
                        FORKS:{this.props.repositary.forks}<br/>
                       <CardText>{this.props.repositary.description}</CardText>
                        
                       <a href={this.props.repositary.homepage}> <Button color="primary" >VIEW PROFILE</Button></a>
                    </CardBody>     
                </Card>
              
                
            </div>
        )
   }
}
  export default Repo
