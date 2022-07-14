import Spell2 from "./Spell2";
import BookmarkItem from "./BookmarkItem"
import Carter_One from "./assets/fonts/Carter_One/CarterOne-Regular.ttf"
import { Button } from 'react-bootstrap';

function Bookmarks({ mySpells, setMySpells, myEquipment, setMyEquipment }){
    
    const renderMySpells = mySpells.map((spell, index) => {
        return(
            <div key={index} >
                <Button className="m-3 Ruslan-Display" variant="danger" onClick={() => deleteSpell(spell)} >Delete</Button>
                <Spell2 key={index} spell={spell} />
            </div>
        )
    })
    
    
    const renderMyEquipment = myEquipment.map((item, index) => {
        
        return(
            <>
                <Button className="m-3 Ruslan-Display" variant="danger" onClick={() => deleteItem(item)} >Delete</Button>
                <BookmarkItem key={index} item={item} />
            </>
        )
    })

    function deleteSpell(spell){
        const newSpells = [...mySpells]
        
        const filteredSpells = newSpells.filter((magic) => {
            
            return magic !== spell
        })
        console.log(filteredSpells);
        fetch('http://localhost:8000/users/0', {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                // accept: "application/json"
            },
            body: JSON.stringify({spells: [...filteredSpells]})
        })
        .then(res => res.json())
        .then(spellData => {
            
            setMySpells(prevState => prevState = [...filteredSpells])
        })
    }

    function deleteItem(item){
        const newItems = [...myEquipment]
        
        const filteredItems = newItems.filter((weapon) => {
            
            return weapon !== item
        })
        
        fetch('http://localhost:8000/users/0', {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                // accept: "application/json"
            },
            body: JSON.stringify({equipment: [...filteredItems]})
        })
        .then(res => res.json())
        .then(itemData => {
            
            setMyEquipment(prevState => prevState = [...filteredItems])
        })
    }
    
    return(
        <div >
            <table style={{width:"100%"}}>
                <tbody className="Cinzel-Decorative"style={{width:"100%",textAlign:"center",borderBottom:"black 2px solid"}}>
                    <tr>
                        <td style={{width:"50%",font:Carter_One}}><h2>Spells</h2></td>
                        <td style={{width:"50%", borderLeft:"black 2px solid"}}><h2>Equipment</h2></td>
                    </tr>
                </tbody>
            </table>
            <div style={{width:"50%",float:"left",background:"rgb(30,0,0)"}}>{renderMySpells}<div style={{color:"white",textAlign:"center"}}>You can add more spells in the spells tab by clicking the <span className="material-symbols-outlined">bookmark_add</span> on any spell!</div></div>
            <div style={{width:"50%", float:"right",borderLeft:"black 2px solid", background:"rgb(30,0,0)"}}>{renderMyEquipment}<div style={{color:"white",textAlign:"center"}}>You can add more items in the equipment tab by clicking the <span className="material-symbols-outlined">bookmark_add</span> on any item!</div></div>
        </div>
    )
}

export default Bookmarks;