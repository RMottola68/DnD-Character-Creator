import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useState, useEffect} from "react";
import Item from "./Item";
import TavernImage from './assets/Tavern.jpg'
function EquipmentSearch(){
    const [equipment, setEquipment] = useState([]);
    const [equipmentSearch, setEquipmentSearch] = useState('');

    function getEquipment(){
        fetch(`https://api.open5e.com/weapons`)
        .then((res)=>res.json())
        .then((equipmentData)=> setEquipment(equipmentData.results))
    }
    
    useEffect(getEquipment,[])

    // const spellList = spells.map((spell)=>{
    //     return(
    //         <Spell spell={spell} />
    //     )
    // })

    const equipmentToDisplay = equipment.filter((item) => {
        let itemSearchCase = equipmentSearch.toLowerCase();
        return(
        item.name.toLowerCase().includes(itemSearchCase)
        )
    })
    return(
        <div style={{background:{TavernImage}}}>
            <div className="search " >
                <input 
                onChange={(event) => setEquipmentSearch(prevState => prevState = event.target.value)}
                 
                value={equipmentSearch}
                type="text"

                />
            </div>
            <Button className="m-3" variant="danger" onClick={console.log(equipment)}>Get spells</Button>
            <div>{equipmentToDisplay.map((item) =>{
                return(
                <Item item={item} />
                )
            })}</div>
        </div>
        
    )
    
}

export default EquipmentSearch;