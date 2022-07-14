import {Button } from 'react-bootstrap';

function Spell2({ spell, mySpells, setMySpells, key }) {



    // function addSpell() {
    //     console.log(spell)
    // }

    

    return(
        
        <div className="spell-name"  style={{ color: 'red',marginBottom:20, padding: 20,borderBottomColor: "red",borderBottomWidth:2,borderBottomStyle:"solid",borderLeft: "red" ,borderLeftStyle:"solid", marginLeft:2,textAlign:"center",background:"rgb(0,0,0)"}}>
            
            <h1 className="Cinzel-Decorative" style={{padding:0,margin:0}}>Spell Name: <span className='' style={{color:"white"}}>{spell.name}</span> </h1>
            <h2 className="Cinzel-Decorative" style={{padding:0,margin:0}}>Spell School: <span className='Shojumaru' style={{color:"white"}}>{spell.school}</span></h2>
            
            <h4 style={{padding:0,borderBottom:"white solid 2px",fontSize:"14px",marginLeft:"35%",marginRight:"35%"}}><strong>Classes:</strong> <em style={{color:"white"}}>{spell.dnd_class} </em>| <strong>Spell Level:</strong> <em style={{color:"white"}}>{spell.level}</em></h4>
            <p className="" style={{padding:0,margin:0,paddingTop:"10px",color:"white"}}><span className='Ruslan-Display'>Description:</span> {spell.desc}</p>
           
        </div>
    )
}

export default Spell2;