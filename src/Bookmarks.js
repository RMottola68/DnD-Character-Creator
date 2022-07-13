import Spell from "./Spell";
import Item from "./Item"
import Carter_One from "./assets/fonts/Carter_One/CarterOne-Regular.ttf"
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
        <div >
        <table style={{width:"100%"}}>
            <tr className="Cinzel-Decorative"style={{width:"100%",textAlign:"center",borderBottom:"black 2px solid"}}>
                <td style={{width:"50%",font:Carter_One}}><h2>Spells</h2></td>
                <td style={{width:"50%", borderLeft:"black 2px solid"}}><h2>Equipment</h2></td>
            </tr>
        </table>
            <div style={{width:"50%",float:"left",background:"rgb(30,0,0)"}}>{renderMySpells}<div style={{color:"white",textAlign:"center"}}>You can add more spells in the spells tab by clicking the <span class="material-symbols-outlined">bookmark_add</span> on any spell!</div></div>
            <div style={{width:"50%", float:"right",borderLeft:"black 2px solid", background:"rgb(30,0,0)"}}>{renderMyEquipment}<div style={{color:"white",textAlign:"center"}}>You can add more items in the equipment tab by clicking the <span class="material-symbols-outlined">bookmark_add</span> on any item!</div></div>
        </div>
    )
}

export default Bookmarks;