function Spell({ spell }) {
    return(
        <div className="spell-name">
            Spell Name: {spell.name}
            Spell School: {spell.school}
            Classes: {spell.dnd_class}
            Spell Level: {spell.level}
            Description: {spell.desc}
        </div>
    )
}

export default Spell;