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
        
        <div className="spell-name"  style={{ color: 'blue',marginBottom:20, padding: 20,borderBottomColor: "black",borderBottomWidth:2,borderBottomStyle:"solid",borderLeft: "black" ,borderLeftStyle:"solid", marginLeft:2,textAlign:"center",background:"rgb(200,200,200)"}}>
            <h1 style={{padding:0,margin:0}}>Spell Name: {spell.name} <Button style={{}} onClick={addSpell}>Bookmark Spell</Button></h1>
            <h2 style={{padding:0,margin:0}}>Spell School: {spell.school}</h2>
            
            <h4 style={{padding:0,borderBottom:"blue solid 2px",fontSize:"14px",marginLeft:"35%",marginRight:"35%"}}><strong>Classes:</strong> <em>{spell.dnd_class} </em>| <strong>Spell Level:</strong> <em>{spell.level}</em></h4>
            <p style={{padding:0,margin:0,paddingTop:"10px"}}>Description: {spell.desc}</p>
           
        </div>
    )
}

export default Spell;