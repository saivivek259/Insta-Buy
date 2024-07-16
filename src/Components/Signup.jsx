import { Row, Col, Form, Button} from "react-bootstrap";

import SignupImg from '../assets/signup.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup(setUser){
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    return(
        <div style={{backgroundColor: '#216ad9'}}>
            <Row style={{padding: 75}}>
                <Col style={{padding:100}}>
                    <div>
                    <h1 style={{color:'white'}}>InstaBug!</h1>
                    <h3 style={{color:'white'}}> One Place for all your needs</h3>
                    <Form>
                        <div style={{ width:'70%', display:'flex', justifyContent: 'space-between'}}>
                        <Form.Group style={{width: '49%'}} className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group  style={{width: '49%'}} className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="password" />
                        </Form.Group>
                </div>
                <Form.Group  style={{width: '70%'}} className="mb-3" controlId="formBasicText">
                            <Form.Control type="text" placeholder="Enter Full name" />
                        </Form.Group>

                <Button onClick={() =>{
                    localStorage.setItem('userEmail', email);
                    setUser(email);
                    navigate('/');
                }}
                 style={{width: '70%' , marginBottom: 26, backgroundColor: '#216ad9',borderWidth: 1, borderColor:'white' , color: 'white'}} type="submit">
                    Start Shopping
                </Button>
                <div style={{color: 'white'}}>
                    Already a member? <a style={{color: 'white'}}  href="/login">Click here</a>
                </div>
                </Form>
                </div>
                </Col>
                <Col>
                <img src={SignupImg} style={{height: '80vh'}} />
                </Col>
            </Row>
        </div>
    )
}