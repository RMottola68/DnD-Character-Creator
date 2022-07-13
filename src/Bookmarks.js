import Spell from "./Spell";
import Item from "./Item"
function Bookmarks({ mySpells, myEquipment }){
    
    const renderMySpells = mySpells.map((spell) => {
        return(
            <Spell spell={spell} />
        )
    })
    
    
    const renderMyEquipment = myEquipment.map((item) => {
        return(
            <Item item={item} />
        )
    })
    
    return(
        <>
        <table style={{width:"100%"}}>
            <tr style={{width:"100%",textAlign:"center",borderBottom:"black 2px solid"}}>
                <td style={{width:"50%",}}><h2>Spells</h2></td>
                <td style={{width:"50%", borderLeft:"black 2px solid"}}><h2>Equipment</h2></td>
            </tr>
        </table>
            <div style={{width:"50%",float:"left",background:"rgb(100,100,100)"}}>{renderMySpells}</div>
            <div style={{width:"50%", float:"right",borderLeft:"black 2px solid", background:"rgb(100,100,100)"}}>{renderMyEquipment}</div>
        </>
    )
}

export default Bookmarks;