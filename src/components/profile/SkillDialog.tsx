import { Button, Dialog, DialogBody, DialogFooter, Tooltip } from "@blueprintjs/core";
import { color_scheme, Nikke, NikkeStaticData } from "../../types"
import { useCallback, useState } from "react";
import React from "react";
import SkillDialogSkill from "./skillDialogSkill";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { modifyInvestment } from "../../state/investment";

interface SkillDialogProps {
    nikke: Nikke;
    nikke_static: NikkeStaticData;
}


const SkillDialog: React.FC<SkillDialogProps> = ({ nikke, nikke_static }) => {
    const [skillDialogOpen, setSkillDialogOpen] = useState(false);
    const { temp_skill_1, temp_skill_2, temp_skill_B } = useSelector((state: RootState) => state.investments);
    const dispatch = useDispatch();

    const handleDialogClose = useCallback(() => {
        const new_nikke: Nikke = {
            ...nikke,
            skill_levels: [temp_skill_1, temp_skill_2, temp_skill_B]
        };

        dispatch(modifyInvestment(new_nikke));
        setSkillDialogOpen(false);
    }, [nikke, temp_skill_1, temp_skill_2, temp_skill_B, dispatch]);

    return (<>
        <Tooltip content="Skills" >
            <Button 
                intent="success"
                onClick={() => setSkillDialogOpen(true)}
            >
                {nikke.skill_levels[0]}/{nikke.skill_levels[1]}/{nikke.skill_levels[2]}
            </Button>
        </Tooltip>
        <Dialog isOpen={skillDialogOpen} title='Set Skill Levels' onClose={handleDialogClose} >
            <DialogBody>
                <SkillDialogSkill
                    nikke={nikke}
                    nikke_static={nikke_static}
                    skill_type={'Skill 1'}
                />
                <SkillDialogSkill
                    nikke={nikke}
                    nikke_static={nikke_static}
                    skill_type={'Skill 2'}
                />
                <SkillDialogSkill
                    nikke={nikke}
                    nikke_static={nikke_static}
                    skill_type={'Burst Skill'}
                />
            </DialogBody>
            <DialogFooter
                actions={
                    <Button
                        style={{ backgroundColor: color_scheme[4], color: color_scheme[0] }}
                        text="Close"
                        onClick={handleDialogClose} /> 
                }
            />
        </Dialog>
    </>);
};

export default SkillDialog;