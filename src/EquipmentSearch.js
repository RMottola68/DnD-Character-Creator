import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useState, useEffect} from "react";
import Item from "./Item";
import TavernImage from './assets/Tavern.jpg'
function EquipmentSearch({ myEquipment, setMyEquipment }){
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
        <section>
            <div className="search" style={{}}>
                <input className='' style={{}}
                onChange={(event) => setEquipmentSearch(prevState => prevState = event.target.value)}
                 placeholder="search equipment here"
                value={equipmentSearch}
                type="text"
                
               
                />
            </div>
            <div>{equipmentToDisplay.map((item) =>{
                return(
                <Item item={item} myEquipment={myEquipment} setMyEquipment={setMyEquipment} />
                )
            })}</div>
        </section>
        
    )
    
}

export default EquipmentSearch;