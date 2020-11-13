import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './Data.css'

class Data extends React.Component{
    constructor(props){
        super(props);
        this.state={
            info:[],
            keys:[],
            loading:true
        }
  
    }

    componentDidMount(){
        //should create sting array to store the names of categories
        fetch('http://localhost:4000/api/data')
            .then((res)=>res.json())
            .then((data)=>{
                const chosen=this.props.location.state.display;
                let result=[];
                let newKeys=[]
                const keys=Object.keys(data);
                

                for(let i=0;i<3;i++){
                    if(chosen[i]){
                        result.push(data[keys[i]]);
                        newKeys.push(keys[i]);
                        console.log("result:",result);

                    }else{
                        
                    }
                }

                this.setState({info:result, loading:false, keys:newKeys});
            })
            .catch((error)=>{return console.log("error:",error)})
    }

    render(){
        return(
            <div>
            {(this.state.loading)? <div>Loading...</div>:(
                <Container fluid={true}>
                    <Row className="justify-content-center align-items-center" id="pRow">
                        
                        <Col sm="5">
                           <Row>
                                <ListGroup id="listG">
                                    {this.state.info.map((item,index)=><ListGroup.Item className="listI" key={index}><strong>{this.state.keys[index]}: </strong>{item} </ListGroup.Item>)}
                                </ListGroup>  
                            </Row>
                            <Row>
                                <Button onClick={()=>{this.props.history.push('/')}} id="sButton" >Return</Button>
                            </Row>
                        </Col>     
                    </Row>              
                </Container>
            )}
            </div>
        );
    }
};

export default Data;