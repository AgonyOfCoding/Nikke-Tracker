import { NumericInput } from "@blueprintjs/core";
import { Nikke, NikkeStaticData } from "../../types"
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { modifyInvestment } from "../../state/investment";
import React from "react";

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

    // Use local state for skill level
    const [skillLevel, setSkillLevel] = useState(() => {
        switch (skill_type) {
            case "Skill 1":
                return nikke.skill_levels[0] || 1;
            case "Skill 2":
                return nikke.skill_levels[1] || 1;
            case "Burst Skill":
            default:
                return nikke.skill_levels[2] || 1;
        }
    });

    // Determine skill data based on skill_type
    const skill_data = {
        "Skill 1": nikke_static.skills.skill_1,
        "Skill 2": nikke_static.skills.skill_2,
        "Burst Skill": nikke_static.skills.burst_skill
    }[skill_type];

    const { name: skill_name = '', description: skill_description = '', values: skill_values = {}, cooldown: skill_cooldown } = skill_data || {};

    // Get the current values and description
    const values = skill_values[skillLevel] || [];
    const description_with_values = replacePlaceholders(skill_description, values);

    // Append cooldown to skill name if available
    const skillNameWithCooldown = skill_cooldown ? `${skill_name} (${skill_cooldown}s)` : skill_name;

    // Function to handle skill level change
    const handleSkillChange = useCallback((value: number) => {
        if (value < 1 || value > 10) return;

        const new_skill_levels = [...nikke.skill_levels];
        switch (skill_type) {
            case "Skill 1":
                new_skill_levels[0] = value;
                break;
            case "Skill 2":
                new_skill_levels[1] = value;
                break;
            case "Burst Skill":
                new_skill_levels[2] = value;
                break;
        }

        const new_nikke: Nikke = {
            ...nikke,
            skill_levels: new_skill_levels
        };

        setSkillLevel(value); // Update local state
        dispatch(modifyInvestment(new_nikke)); // Dispatch Redux action
    }, [dispatch, nikke, skill_type]);

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 4fr',
                gridTemplateRows: 'repeat(2, auto)'
            }}
        >
            <div style={{ gridColumn: '1 / 2', placeContent: 'center' }}>
                <NumericInput
                    small
                    value={skillLevel}
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