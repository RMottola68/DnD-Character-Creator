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
        .then(alert('Item added to bookmarks!'))
      

    }

    return(
        <div className="item-name"  style={{ color: 'red',marginBottom:20, padding: 20,borderBottomColor: "red",borderBottomWidth:2,borderBottomStyle:"solid",borderLeft: "black" ,borderLeftStyle:"solid", marginLeft:2,textAlign:"center",background:"rgb(0,0,0)"}}>
        <Button className="Ruslan-Display" style={{float:"right"}} onClick={addItem} ><span className="material-symbols-outlined">
bookmark_add
</span></Button>
        <h1 className="Cinzel-Decorative" style={{padding:0,margin:0}}>Item Name: <span className='' style={{color:"white"}}>{item.name} </span></h1>
        <h2 className="Cinzel-Decorative" style={{padding:0,margin:0}}>Category: <span className='Shojumaru' style={{color:"white"}}>{item.category}</span></h2>
        
        <h4 style={{padding:0,borderBottom:"white solid 2px",fontSize:"14px",marginLeft:"35%",marginRight:"35%"}}><strong>Damage Dice:</strong> <em style={{color:"white"}}>{item.damage_dice} </em>| <strong>Weight:</strong> <em style={{color:"white"}}>{item.weight}</em></h4>
        <p style={{padding:0,margin:0,paddingTop:"10px",color:"white"}}>Cost: {item.cost}</p>
       
    </div>
    
    )
}

export default Item;