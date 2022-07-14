import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import DnDLogo from './assets/DnD-Logo.png'
import { Link } from "react-router-dom";

import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function Navigation({ loggedIn, setLoggedIn }) {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    return(
        
            <Row className="p-0 " style={{borderBottom:"solid black 2px",marginBottom:"10px",background:"rgb(0,0,0)"}}>
                <Nav 
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Col>
                        <Nav.Item className="justify-content-left p-5">
                            <img src={DnDLogo} style={{width: 280, height: 'auto'}} />
                        </Nav.Item>
                    </Col>

                    <Col className="" style={{color:"white"}}>
                        <Nav.Item >
                            <h3 className="pt-5 mr-5 Cinzel-Decorative">The Spells and Equipment Index</h3>
                            <Button className="m-3 Ruslan-Display" variant="danger" type="button">
                                <Link className="text-decoration-none  text-white" to="/home">Home</Link>
                            </Button>
                            
                            <Button className="m-3 Ruslan-Display" variant="danger">
                                <Link  className="text-decoration-none  text-white" to="/spells">Spells</Link>
                            </Button>
                            
                            <Button className="m-3 Ruslan-Display" variant="danger">
                                <Link  className="text-decoration-none  text-white" to="/equipment">Equipment</Link>
                            </Button>
                        </Nav.Item>
                    </Col>

                    {/* <Col style={{color:"white"}} className="Ruslan-Display">
                        <Nav.Item >
                            <Row>
                                <Form onSubmit={(event) => {
                                    event.preventDefault()
                                    console.log(username)
                                    console.log(password)
                                }}>
                                
                                    <Form.Group className="mb-3 px-5 mx-5 " controlId="formUsername">
                                        <Col>
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control className='w-50 ' onChange={(event) => {
                                                setUsername(prevState => prevState = event.target.value)
                                                console.log(username)}}
                                                value={username}
                                                type="username"
                                                placeholder="Username" 
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
                    </Col> */}
                    
                </Nav>
                <Button style={{display: visible ? 'inline' : 'none', position:"fixed",background:"rgb(50,50,50)",width:"fit-content",height:"fit-content",left:"90%",bottom:"40px",fontSize:"10px",zIndex:"99",cursor:"pointer", color:"red",border:"red"}}>
      <span class="material-symbols-outlined" onClick={scrollToTop} style={{height:"fit-content"}}>
arrow_upward
</span>
    </Button>
            </Row>
        
  
    )
}



export default Navigation;