import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useState, useEffect} from "react";
function SpellSearch(){
    const [spells, setSpells] = useState([]);
    function getSpells(){
        fetch(`https://api.open5e.com/spells/?limit=321`)
        .then((res)=>res.json())
        .then((spellData)=> setSpells(spellData))
    }
    
    useEffect(getSpells,[])
    const spellList = spells.map((spell, index)=>{return(
        
    )})
    return(
        <div>penis
            <Button className="m-3" variant="danger" onClick={getSpells}>Get spells</Button>
        </div>
        
    )
    
}

export default SpellSearch;