import Spell from "./Spell";
function Bookmarks({ mySpells, myEquipment }){
    
    const renderMySpells = mySpells.map((spell) => {
        return(
            <Spell spell={spell} />
        )
    })
    
    
    //   function RenderMyEquipment
    
    return(
        <div>{renderMySpells}</div>
    )
}

export default Bookmarks;