import React from 'react';
import RoboCard from './RoboCard';

import {
     Container, Row, Col 
  } from 'reactstrap';

const divStyle = {
    marginTop: '10px',
};

const RoboCardList = ({robots}) => {
    /*if(true){  // see errors in dev mode
      throw new Error('Nooooooo');
    }*/
    const cardComponent = robots.map((user, i) => {
        return (
            <Col sm="3" style={divStyle}> 
                <RoboCard  id={robots[i].id} name= {robots[i].name} email={robots[i].email} street= {robots[i].address.street } suite= {robots[i].address.suite} city= {robots[i].address.city} zipcode= {robots[i].address.zipcode} website= {robots[i].website}/> 
            </Col>
        )
    })
    return (
      <Container fluid>
        <Row> 
                { cardComponent }
        </Row> 
      </Container>
    );
}

export default RoboCardList;