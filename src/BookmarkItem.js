function BookmarkItem({ item }) {

    return(
        <div className="item-name"  style={{ color: 'red',marginBottom:20, padding: 20,borderBottomColor: "red",borderBottomWidth:2,borderBottomStyle:"solid",borderLeft: "black" ,borderLeftStyle:"solid", marginLeft:2,textAlign:"center",background:"rgb(0,0,0)"}}>

        <h1 className="Cinzel-Decorative" style={{padding:0,margin:0}}>Item Name: <span className='' style={{color:"white"}}>{item.name} </span></h1>
        <h2 className="Cinzel-Decorative" style={{padding:0,margin:0}}>Category: <span className='Shojumaru' style={{color:"white"}}>{item.category}</span></h2>
        
        <h4 style={{padding:0,borderBottom:"white solid 2px",fontSize:"14px",marginLeft:"35%",marginRight:"35%"}}><strong>Damage Dice:</strong> <em style={{color:"white"}}>{item.damage_dice} </em>| <strong>Weight:</strong> <em style={{color:"white"}}>{item.weight}</em></h4>
        <p style={{padding:0,margin:0,paddingTop:"10px",color:"white"}}>Cost: {item.cost}</p>
       
    </div>
    
    )
}

export default BookmarkItem;