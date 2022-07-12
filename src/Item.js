import {Button } from 'react-bootstrap';

function Item({ item }) {

    console.log(item)

    return(
        <div className="item-name"  style={{ color: 'blue',marginBottom:20, padding: 20,borderBottomColor: "black",borderBottomWidth:2,borderBottomStyle:"solid",borderLeft: "black" ,borderLeftStyle:"solid", marginLeft:2,textAlign:"center"}}>
        <h1 style={{padding:0,margin:0}}>Item Name: {item.name} <Button style={{}}>Bookmark Item</Button></h1>
        <h2 style={{padding:0,margin:0}}>Weapon Category: {item.category}</h2>
        
        <h4 style={{padding:0,borderBottom:"blue solid 2px",fontSize:"14px"}}><strong>Damage Dice:</strong> <em>{item.damage_dice} </em>| <strong>Weight:</strong> <em>{item.weight}</em></h4>
        <p style={{padding:0,margin:0,paddingTop:"10px"}}>Cost: {item.cost}</p>
       
    </div>
    )
}

export default Item;