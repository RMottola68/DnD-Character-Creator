import {Button } from 'react-bootstrap';

function Spell({ spell, mySpells, setMySpells }) {

    function addSpell() {
        const spellObj = {
            name: spell.name,
            dnd_class: spell.dnd_class,
            school: spell.school,
            desc: spell.desc,
            level: spell.level

        }    
        fetch('http://localhost:8000/users/0', {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                // accept: "application/json"
            },
            body: JSON.stringify({spells: [...mySpells, spellObj]})
        })
        .then(res => res.json())
        .then(spellData => {
            console.log(spellData)
            setMySpells(prevState => prevState = [...mySpells, spellData.spells[spellData.spells.length-1]])
        })
        .then(console.log('clicked'))
      

    }

    // function addSpell() {
    //     console.log(spell)
    // }

    

    return(
        
        <div className="spell-name"  style={{ color: 'red',marginBottom:20, padding: 20,borderBottomColor: "red",borderBottomWidth:2,borderBottomStyle:"solid",borderLeft: "red" ,borderLeftStyle:"solid", marginLeft:2,textAlign:"center",background:"rgb(0,0,0)"}}>
            <Button className="Ruslan-Display" style={{float:"right"}} onClick={addSpell}><span class="material-symbols-outlined">bookmark_add</span></Button>
            <h1 className="Cinzel-Decorative" style={{padding:0,margin:0}}>Spell Name: <span className='' style={{color:"white"}}>{spell.name}</span> </h1>
            <h2 className="Cinzel-Decorative" style={{padding:0,margin:0}}>Spell School: <span className='Shojumaru' style={{color:"white"}}>{spell.school}</span></h2>
            
            <h4 style={{padding:0,borderBottom:"white solid 2px",fontSize:"14px",marginLeft:"35%",marginRight:"35%"}}><strong>Classes:</strong> <em style={{color:"white"}}>{spell.dnd_class} </em>| <strong>Spell Level:</strong> <em style={{color:"white"}}>{spell.level}</em></h4>
            <p className="" style={{padding:0,margin:0,paddingTop:"10px",color:"white"}}>Description: {spell.desc}</p>
           
        </div>
    )
}

export default Spell;