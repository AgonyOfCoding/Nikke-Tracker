import { NumericInput } from "@blueprintjs/core";
import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTempSkill1, setTempSkill2, setTempSkillB } from "../../state/investment";
import { Nikke, NikkeSkill, NikkeStaticData } from "../../types";

interface SkillDialogSkillProps {
    nikke: Nikke;
    nikke_static: NikkeStaticData;
    skill_type: string;
}

function replacePlaceholders(description: string, values: number[]): (string | JSX.Element)[] {
    let index = 0;
    const parts = description.split(/(__)/);

    return parts.map((part) => {
        if (part === '__' && index < values.length) {
            return <b key={index}>{values[index++]}</b>;
        }
        return part;
    });
}

const SkillDialogSkill: React.FC<SkillDialogSkillProps> = ({ nikke, nikke_static, skill_type }) => {
    const dispatch = useDispatch();

    const [skill_level, setSkillLevel] = useState(skill_type === "Skill 1" ?
        nikke.skill_levels[0] : skill_type === "Skill 2" ?
        nikke.skill_levels[1] : nikke.skill_levels[2]);

    useEffect(() => {
        switch(skill_type) {
            case "Skill 1":
                dispatch(setTempSkill1(skill_level))
                break;
            case "Skill 2":
                dispatch(setTempSkill2(skill_level))
                break;
            case "Burst Skill":
                dispatch(setTempSkillB(skill_level))
                break;
            default:
        }
    }, [skill_type, skill_level, dispatch]);

    

    const skill_data: NikkeSkill | undefined = {
        "Skill 1": nikke_static.skills.skill_1,
        "Skill 2": nikke_static.skills.skill_2,
        "Burst Skill": nikke_static.skills.burst_skill
    }[skill_type];

    const { name: skill_name = '', description: skill_description = '', values: skill_values = {}, cooldown: skill_cooldown } = skill_data || {};
    const values = skill_values[skill_level] || [];
    const description_with_values = replacePlaceholders(skill_description, values);

    const skillNameWithCooldown = skill_cooldown ? `${skill_name} (${skill_cooldown}s)` : skill_name;

    const handleSkillChange = useCallback((value: number) => {
        if (value < 1 || value > 10) return;
        setSkillLevel(value);
    }, []);

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 4fr'
            }}
        >
            <div style={{ gridColumn: '1 / 2', placeItems: 'top' }}>
                <NumericInput
                    small
                    value={skill_level}
                    min={1}
                    max={10}
                    stepSize={1}
                    majorStepSize={3}
                    onValueChange={handleSkillChange}
                    allowNumericCharactersOnly
                    style={{ width: '40px' }}
                />
            </div>
            <div style={{ gridColumn: '2 / 3', placeContent: 'center' }}>
                <p>
                    <b>{skill_type} - {skillNameWithCooldown}:</b>{' '}
                    {description_with_values.map((part, index) => (
                        <React.Fragment key={index}>{part}</React.Fragment>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default SkillDialogSkill;