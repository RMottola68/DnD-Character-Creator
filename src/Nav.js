import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import DnDLogo from './assets/DnD-Logo.png'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function Navigation({ loggedIn, setLoggedIn }) {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    return(
        
            <Row className="p-0 m-0">
                <Nav 
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Col>
                        <Nav.Item className="justify-content-left p-5">
                            <img src={DnDLogo} style={{width: 280, height: 'auto'}} />
                        </Nav.Item>
                    </Col>

                    <Col className="">
                        <Nav.Item >
                            <h3 className="pt-5 mr-5">Dungeons & Dragons Character Creator</h3>
                        </Nav.Item>
                    </Col>

                    <Col>
                        <Nav.Item >
                            <Row>
                                <Form onSubmit={(event) => {
                                    event.preventDefault()
                                    console.log(username)
                                    console.log(password)
                                }}>
                                
                                    <Form.Group className="mb-3 px-5 mx-5" controlId="formUsername">
                                        <Col>
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control className='w-50' onChange={(event) => {
                                                setUsername(prevState => prevState = event.target.value)
                                                console.log(username)}}
                                                value={username}
                                                type="username"
                                                placeholder="Enter Username" 
                                            />                        
                                        </Col>
                                    
                                        <Col>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control className='w-50' onChange={(event) => {
                                                setPassword(prevState => prevState = event.target.value)
                                                console.log(password)
                                                }} 
                                                value={password} 
                                                placeholder="Password" 
                                            />
                                        </Col>
                                        <Button variant="danger" type="submit" className='mt-3'>Submit</Button>
                                        
                                    </Form.Group>
                                

                                </Form>
                            </Row>
                        </Nav.Item>
                    </Col>
                    
                </Nav>
            </Row>
        
  
    )
}



export default Navigation;