import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useState, useEffect} from "react";
import Spell from "./Spell";
function SpellSearch(){
    const [spells, setSpells] = useState([]);
    const [spellSearch, setSpellSearch] = useState('');

    function getSpells(){
        fetch(`https://api.open5e.com/spells/?limit=321`)
        .then((res)=>res.json())
        .then((spellData)=> setSpells(spellData.results))
    }
    
    useEffect(getSpells,[])
    console.log(spells)

    // const spellList = spells.map((spell)=>{
    //     return(
    //         <Spell spell={spell} />
    //     )
    // })

    const spellsToDisplay = spells.filter((spell) => {
        let spellSearchCase = spellSearch.toLowerCase();
        return(
        spell.name.toLowerCase().includes(spellSearchCase)
        )
    })
    return(
        <div>
            <div className="search">
                <input 
                onChange={(event) => setSpellSearch(prevState => prevState = event.target.value)}
                 
                value={spellSearch}
                type="text"

                />
            </div>
            <Button className="m-3" variant="danger" onClick={console.log(spells)}>Get spells</Button>
            <div>{spellsToDisplay.map((spell) =>{
                return(
                <Spell spell={spell} />
                )
            })}</div>
        </div>
        
    )
    
}

export default SpellSearch;