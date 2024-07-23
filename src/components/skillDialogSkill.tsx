import { Button, ButtonGroup } from "@blueprintjs/core";
import { color_scheme, Nikke, NikkeStaticData } from "../types"


interface SkillDialogSkillProps {
    nikke: Nikke,
    nikke_static: NikkeStaticData,
    skill_type: string
}

function replacePlaceholders(description: string, values: number[]): string {
    let index = 0;
    return description.replace(/__/g, () => values[index++].toString());
}

const SkillDialogSkill: React.FC<SkillDialogSkillProps> = ({ nikke, nikke_static, skill_type }) => {
    var skill_level: number, skill_name: string, skill_description: string, skill_values: Record<number, number[]>;
    switch (skill_type) {
        case "Skill 1":
            skill_level = nikke.skill_levels[0];
            skill_name = nikke_static.skills.skill_1.name;
            skill_description = nikke_static.skills.skill_1.description;
            skill_values = nikke_static.skills.skill_1.values;
            break;
        case "Skill 2":
            skill_level = nikke.skill_levels[1];
            skill_name = nikke_static.skills.skill_2.name;
            skill_description = nikke_static.skills.skill_2.description;
            skill_values = nikke_static.skills.skill_2.values;
            break;
        case "Burst Skill":
            skill_level = nikke.skill_levels[2];
            skill_name = nikke_static.skills.burst_skill.name;
            skill_description = nikke_static.skills.burst_skill.description;
            skill_values = nikke_static.skills.burst_skill.values;
            break;
        default:
            return null;
    }
    const description_with_values = replacePlaceholders(skill_description, skill_values[skill_level]);

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 8fr',
                gridTemplateRows: 'repeat(3, auto)',
                // backgroundColor: color_scheme[2]
            }}
        >
            <div style={{ gridColumn: '1 / 2', placeContent: 'center'  }}>
                <ButtonGroup vertical>
                    <Button icon='small-plus' small style={{ backgroundColor: color_scheme[0] }} />
                    <Button icon='small-minus' small style={{ backgroundColor: color_scheme[0] }} />
                </ButtonGroup>
            </div>
            <div style={{ gridColumn: '2 / 3', placeContent: 'center'  }}>
                <b>{skill_level}</b>
            </div>
            <div style={{ gridColumn: '3 / 4', placeContent: 'center'  }}>
                <p><b>{skill_type} - {skill_name}:</b> {description_with_values}</p>
            </div>
        </div>
    )
}

export default SkillDialogSkill;