import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useState, useEffect} from "react";
import Spell from "./Spell";
import TavernImage from './assets/Tavern.jpg'
function SpellSearch({ mySpells, setMySpells }){
    const [spells, setSpells] = useState([]);
    const [spellSearch, setSpellSearch] = useState('');

    function getSpells(){
        fetch(`https://api.open5e.com/spells/?limit=321`)
        .then((res)=>res.json())
        .then((spellData)=> setSpells(spellData.results))
    }
    
    useEffect(getSpells,[])


    const spellsToDisplay = spells.filter((spell) => {
        let spellSearchCase = spellSearch.toLowerCase();
        return(
        spell.name.toLowerCase().includes(spellSearchCase)
        )
    })
    return(
        <div style={{background:{TavernImage}}}>
            <div className="search" >
                <input 
                onChange={(event) => setSpellSearch(prevState => prevState = event.target.value)}
                 
                value={spellSearch}
                type="text"

                />
            </div>
            
            <div>{spellsToDisplay.map((spell, index) =>{
                return(
                <Spell key={index} spell={spell} mySpells={mySpells} setMySpells={setMySpells} />
                )
            })}
            </div>
        </div>
        
    )
    
}

export default SpellSearch;