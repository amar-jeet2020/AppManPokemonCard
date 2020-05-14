import React from 'react'
import SkillBar from 'react-skillbars';

const DrawSkillLevel = (props) => {
    var strength = 0; var weakness = 0;
    if (props.pokemon.attacks != undefined) {
        if (props.pokemon.attacks.length == 1)
            strength = 50
        else if (props.pokemon.attacks.length == 2)
            strength = 100
    }
    if (props.pokemon.weaknesses != undefined) {
        weakness = props.pokemon.weaknesses.length
    }
    const skills = [
        { type: "HP", level: props.pokemon.hp > 100 ? 100 : 0 },
        { type: "Str", level: strength },
        { type: "Weak", level: (weakness * 100) === 100 ? 100 : 0 },
    ];
    return (
        <SkillBar skills={skills} />
    )
}

export default DrawSkillLevel;