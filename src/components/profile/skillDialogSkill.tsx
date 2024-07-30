import { NumericInput } from "@blueprintjs/core";
import { Nikke, NikkeStaticData } from "../../types"
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { modifyInvestment } from "../../state/investment";

interface SkillDialogSkillProps {
    nikke: Nikke;
    nikke_static: NikkeStaticData;
    skill_type: string;
}

function replacePlaceholders(description: string, values: number[]): string {
    let index = 0;
    return description.replace(/__/g, () => {
        if (index < values.length) {
            return values[index++].toString();
        }
        return '__'; // Return placeholder if out of bounds
    });
}

const SkillDialogSkill: React.FC<SkillDialogSkillProps> = ({ nikke, nikke_static, skill_type }) => {
    const dispatch = useDispatch();

    let skill_level = 1;
    let skill_name = '';
    let skill_description = '';
    let skill_values: Record<number, number[]> = {};
    let skill_cooldown: number | undefined = undefined;

    switch (skill_type) {
        case "Skill 1":
            skill_level = nikke.skill_levels[0] || 1;
            skill_name = nikke_static.skills.skill_1.name;
            skill_description = nikke_static.skills.skill_1.description;
            skill_values = nikke_static.skills.skill_1.values;
            skill_cooldown = nikke_static.skills.skill_1.cooldown;
            break;
        case "Skill 2":
            skill_level = nikke.skill_levels[1] || 1;
            skill_name = nikke_static.skills.skill_2.name;
            skill_description = nikke_static.skills.skill_2.description;
            skill_values = nikke_static.skills.skill_2.values;
            skill_cooldown = nikke_static.skills.skill_2.cooldown;
            break;
        case "Burst Skill":
        default:
            skill_level = nikke.skill_levels[2] || 1;
            skill_name = nikke_static.skills.burst_skill.name;
            skill_description = nikke_static.skills.burst_skill.description;
            skill_values = nikke_static.skills.burst_skill.values;
            skill_cooldown = nikke_static.skills.burst_skill.cooldown;
            break;
    }

    const values = skill_values[skill_level] || [];
    const description_with_values = replacePlaceholders(skill_description, values);

    if (skill_cooldown) {
        skill_name = `${skill_name} (${skill_cooldown}s)`;
    }

    const setSkill = useCallback((value: number) => {
        if (value < 1 || value > 10)
            return
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
        dispatch(modifyInvestment(new_nikke));
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
                    value={skill_level}
                    min={1}
                    max={10}
                    stepSize={1}
                    majorStepSize={3}
                    onValueChange={setSkill}
                    allowNumericCharactersOnly
                    style={{ width: '40px' }}
                />
            </div>
            <div style={{ gridColumn: '2 / 3', placeContent: 'center' }}>
                <p><b>{skill_type} - {skill_name}:</b> {description_with_values}</p>
            </div>
        </div>
    );
}

export default SkillDialogSkill;
