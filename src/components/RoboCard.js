import React from 'react';
import ReactCardFlip from 'react-card-flip';
import {
  Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, 
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class RoboCard extends React.Component {
    constructor(props) {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    
    render () {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div >
                    <Card style={{width: 250, height: 450, backgroundColor: '#009999'}}>
                        <CardImg top width="100%"   src={`https://robohash.org/${this.props.id}?100x100`} alt="robots" />
                        <CardBody>
                            <CardTitle>{this.props.name} </CardTitle>
                            <CardSubtitle>{this.props.email}</CardSubtitle>
                            <Button onClick={this.handleClick} color="primary">Profile </Button>
                        </CardBody>
                    </Card>
                </div>
                <div >
                    <Card style={{width: 250, height: 450, backgroundColor: 'powderblue'}}>
                        <CardBody>
                            <h5>Name</h5><CardTitle>{this.props.name}</CardTitle>
                            <h5>Email</h5><CardSubtitle>{this.props.email}</CardSubtitle>
                            <h5>Address</h5>
                            <CardText>{this.props.street} </CardText>
                            <CardText>{this.props.suite} </CardText>
                            <CardText>{this.props.city} </CardText>
                            <CardText>{this.props.zipcode} </CardText>
                            <h5>Website</h5>
                            <CardText>{this.props.website} </CardText>
                            <Button onClick={this.handleClick} color="primary">Picture</Button>
                        </CardBody>
                    </Card>
                </div>
        </ReactCardFlip>
      )
    }
  }

  export default RoboCard;
