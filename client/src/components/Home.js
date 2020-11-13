import {Form} from 'react-bootstrap';
import React, {Component} from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import './Home.css';
//import {history} from 'react-router';

const Home = ({history}) => {
    const options=[false,false,false];
    return(
       <div>
            <Container fluid={true}>
                <Row className="justify-content-center align-items-center" id="pRow">
                    <Col xs="6" sm="5"  md="4" lg="3" xl="3" id="pCol">
                        <Form id="form">
                      
                            <Form.Row className="justify-content-start cRow">
                                <Form.Check>
                                    <Form.Check.Input className="fCheck" onClick={()=>{options[0]=!options[0]}}/>
                                    <Form.Check.Label className="fLabel" >Ip Address</Form.Check.Label>
                                </Form.Check>
                            </Form.Row>
                           
                        
                           
                                <Form.Row className="justify-content-start">
                                    <Form.Check>
                                        <Form.Check.Input className="fCheck" onClick={()=>{options[1]=!options[1]}}/>
                                        <Form.Check.Label className="fLabel" >Accept Language</Form.Check.Label>
                                    </Form.Check>
                                </Form.Row>
                            
                           

                                <Form.Row className="justify-content-start">
                                    <Form.Check>
                                        <Form.Check.Input className="fCheck" onClick={()=>{options[2]=!options[2]}}/>
                                        <Form.Check.Label className="fLabel" >User Info</Form.Check.Label>
                                    </Form.Check>
                                </Form.Row>
                            
                            <Form.Row>
                                <Button onClick={()=>{history.push('/data', {display:options})}} id="sButton">Submit</Button>
                            </Form.Row>

                            {/*passing data through post request may be better instead of passing display to location.state*/}
                        </Form>

                        
                    </Col>
                </Row>
            </Container>
        </div> 
    );
    
}

export default Home;