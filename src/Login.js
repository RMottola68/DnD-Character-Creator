import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import DnDLogo from './assets/DnD-Logo.png'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function LogIn({ loggedIn, setLoggedIn }) {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    return(
        
            <Row>
                <Nav 
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Col>
                        <Nav.Item className="justify-content-left p-3">
                            <img src={DnDLogo} style={{width: 280, height: 'auto'}} />
                        </Nav.Item>
                    </Col>

                    <Col>
                        <Nav.Item className="justify-content-center">
                            <h3>Dungeons & Dragons Character Creator</h3>
                        </Nav.Item>
                    </Col>

                    <Col>
                        <Nav.Item>
                            <Row>
                                <Form onSubmit={(event) => {
                                    event.preventDefault()
                                    console.log(username)
                                    console.log(password)
                                }}>
                                
                                    <Form.Group className="mb-3" controlId="formUsername">
                                        <Col>
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control onChange={(event) => {
                                                setUsername(prevState => prevState = event.target.value)
                                                console.log(username)}}
                                                value={username}
                                                type="username"
                                                placeholder="Enter Username" 
                                            />                        
                                        </Col>
                                    
                                        <Col>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control onChange={(event) => {
                                                setPassword(prevState => prevState = event.target.value)
                                                console.log(password)
                                                }} 
                                                value={password} 
                                                placeholder="Password" 
                                            />
                                        </Col>
                                        <Button variant="primary" type="submit">Submit</Button>
                                        
                                    </Form.Group>
                                

                                </Form>
                            </Row>
                        </Nav.Item>
                    </Col>
                    
                </Nav>
            </Row>
        
  
    )
}



export default LogIn;