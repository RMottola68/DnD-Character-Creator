import {Button } from 'react-bootstrap';

function Item({ item, myEquipment, setMyEquipment }) {

    function addItem() {
        const itemObj = {
            name: item.name,
            damage_dice: item.damage_dice,
            category: item.category,
            cost: item.cost,
           weight: item.weight

        }    
        fetch('http://localhost:8000/users/0', {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                // accept: "application/json"
            },
            body: JSON.stringify({equipment: [...myEquipment, itemObj]})
        })
        .then(res => res.json())
        .then(equipmentData => {
            console.log(equipmentData)
            setMyEquipment(prevState => prevState = [...myEquipment, equipmentData.equipment[equipmentData.equipment.length-1]])
        })
        .then(console.log('clicked'))
      

    }

    return(
        <div className="item-name"  style={{ color: 'blue',marginBottom:20, padding: 20,borderBottomColor: "black",borderBottomWidth:2,borderBottomStyle:"solid",borderLeft: "black" ,borderLeftStyle:"solid", marginLeft:2,textAlign:"center"}}>
        <h1 style={{padding:0,margin:0}}>Item Name: {item.name} <Button style={{}} onClick={addItem} >Bookmark Item</Button></h1>
        <h2 style={{padding:0,margin:0}}>Weapon Category: {item.category}</h2>
        
        <h4 style={{padding:0,borderBottom:"blue solid 2px",fontSize:"14px"}}><strong>Damage Dice:</strong> <em>{item.damage_dice} </em>| <strong>Weight:</strong> <em>{item.weight}</em></h4>
        <p style={{padding:0,margin:0,paddingTop:"10px"}}>Cost: {item.cost}</p>
       
    </div>
    )
}

export default Item;