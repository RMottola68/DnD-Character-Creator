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
            <div>{renderMySpells}</div>
            <div>{renderMyEquipment}</div>
        </>
    )
}

export default Bookmarks;