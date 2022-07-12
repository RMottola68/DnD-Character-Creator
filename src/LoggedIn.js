import Nav from 'react-bootstrap/Nav';
import DnDLogo from "./assets/DnD-Logo.png"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function LoggedIn() {
    
    return(
            /*This component will render once the loggedIn state is set to true */
            <Row>
                {/* <Nav 
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                        <Col>
                            <Nav.Item class="justify-content-left p-3">
                                <img src={DnDLogo} style={{width: 280, height: 'auto'}} />
                            </Nav.Item>
                        </Col>

                        <Col>
                            <Nav.Item class="justify-content-center">
                                <h3>Dungeons & Dragons Character Creator</h3>
                            </Nav.Item>
                        </Col>

                        <Col>
                            <Nav.Item>
                            <Row>
                                <Form onSubmit={(event) => {
                                    event.preventDefault()
                                    console.log(event.target.userName)
                                    console.log(event.target.password)
                                }}>
                                
                                    <Form.Group className="mb-3" controlId="formUsername">
                                        <Col>
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="username" placeholder="Enter Username" />                        
                                        </Col>
                                    
                                        <Col>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Col>
                                        <Button variant="primary" type="submit">Submit</Button>
                                        
                                    </Form.Group>
                                

                                </Form>
                            </Row>
                            </Nav.Item>
                        </Col>
                    
                </Nav> */}
            </Row>
        
  
    )
}



export default LoggedIn;