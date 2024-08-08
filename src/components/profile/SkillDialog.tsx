import { Button, Dialog, DialogBody, DialogFooter, NumericInput } from "@blueprintjs/core";
import { color_scheme, Nikke, NikkeStaticData } from "../../types"
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { modifyInvestment } from "../../state/investment";
import React from "react";

interface SkillDialogSkillProps {
    nikke: Nikke;
    nikke_static: NikkeStaticData;
    skill_type: string;
    onClose: () => void; // Callback to notify when dialog is closing
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

const SkillDialogSkill: React.FC<SkillDialogSkillProps> = ({ nikke, nikke_static, skill_type, onClose }) => {
    const dispatch = useDispatch();
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

    const skill_data = {
        "Skill 1": nikke_static.skills.skill_1,
        "Skill 2": nikke_static.skills.skill_2,
        "Burst Skill": nikke_static.skills.burst_skill
    }[skill_type];

    const { name: skill_name = '', description: skill_description = '', values: skill_values = {}, cooldown: skill_cooldown } = skill_data || {};
    const values = skill_values[skillLevel] || [];
    const description_with_values = replacePlaceholders(skill_description, values);

    const skillNameWithCooldown = skill_cooldown ? `${skill_name} (${skill_cooldown}s)` : skill_name;

    const handleSkillChange = useCallback((value: number) => {
        if (value < 1 || value > 10) return;
        setSkillLevel(value);
    }, []);

    const handleClose = useCallback(() => {
        const new_skill_levels = [...nikke.skill_levels];
        switch (skill_type) {
            case "Skill 1":
                new_skill_levels[0] = skillLevel;
                break;
            case "Skill 2":
                new_skill_levels[1] = skillLevel;
                break;
            case "Burst Skill":
                new_skill_levels[2] = skillLevel;
                break;
        }

        const new_nikke: Nikke = {
            ...nikke,
            skill_levels: new_skill_levels
        };

        dispatch(modifyInvestment(new_nikke));
        onClose(); // Notify parent to close the dialog
    }, [dispatch, nikke, skillLevel, skill_type, onClose]);

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
                    value={skillLevel}
                    min={1}
                    max={10}
                    stepSize={1}
                    majorStepSize={3}
                    onValueChange={handleSkillChange}
                    allowNumericCharactersOnly
                    style={{ width: '40px' }}
                />
                {skill_type === "Burst Skill" &&
                    <Button text="Save" onClick={handleClose} intent="success" style={{ marginTop: 5 }} />
                }
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

interface SkillDialogProps {
    nikke: Nikke;
    nikke_static: NikkeStaticData;
}


const SkillDialog: React.FC<SkillDialogProps> = ({ nikke, nikke_static }) => {
    const [skillDialogOpen, setSkillDialogOpen] = useState(false);

    const handleDialogClose = useCallback(() => {
        setSkillDialogOpen(false);
    }, []);

    return (<>
        <Button
            intent="success"
            onClick={() => setSkillDialogOpen(true)}
        >
            {nikke.skill_levels[0]}/{nikke.skill_levels[1]}/{nikke.skill_levels[2]}
        </Button>
        <Dialog isOpen={skillDialogOpen} title='Set Skill Levels' onClose={handleDialogClose} >
            <DialogBody>
                <SkillDialogSkill
                    nikke={nikke}
                    nikke_static={nikke_static}
                    skill_type={'Skill 1'}
                    onClose={handleDialogClose} // Pass handleDialogClose as onClose prop
                />
                <SkillDialogSkill
                    nikke={nikke}
                    nikke_static={nikke_static}
                    skill_type={'Skill 2'}
                    onClose={handleDialogClose} // Pass handleDialogClose as onClose prop
                />
                <SkillDialogSkill
                    nikke={nikke}
                    nikke_static={nikke_static}
                    skill_type={'Burst Skill'}
                    onClose={handleDialogClose} // Pass handleDialogClose as onClose prop
                />
            </DialogBody>
            <DialogFooter
                actions={
                    <Button
                        style={{ backgroundColor: color_scheme[4], color: color_scheme[0] }}
                        text="Close"
                        onClick={handleDialogClose} /> // Ensure the dialog is closed when this button is clicked
                }
            />
        </Dialog>
    </>);
};

export default SkillDialog;