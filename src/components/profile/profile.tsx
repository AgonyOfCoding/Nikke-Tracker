import { Button, Dialog, DialogBody, DialogFooter } from "@blueprintjs/core";
import { color_scheme, Nikke, NikkeStaticData, RecommendationData } from "../../types";
import { useState } from "react";
import SkillDialogSkill from "./skillDialogSkill";
import "../../customStyles/customDialogStyles.css"
import NikkeIconRow from "./nikkeIconRow";
import { useDispatch } from "react-redux";
import { addNikke } from "../../state/investment";
import { getNikkeIcon } from "../../utility/iconGetters";
import CoreVisualization from "./coreVisualization";
import CollectionItemVisualization from "./collectionItemVisualization";

interface ProfileProps {
    nikke_static: NikkeStaticData;
    nikke_data: Nikke | undefined;
}


const Profile: React.FC<ProfileProps> = ({ nikke_static, nikke_data }) => {
    const dispatch = useDispatch();
    const priorityColors: { [key: string]: string } = {
        High: 'green',
        Medium: 'yellow',
        Low: 'red',
        PVP: 'magenta',
    };
    const [skill_dialog_open, setSkillDialogOpen] = useState(false);
    
    return (
        <div>
            <h3 style={{ margin:0 }}>{nikke_static.name}</h3>
            <img src={getNikkeIcon(nikke_static.id)}
                    alt="Icon not found"
                    style={{ width: '128px', height: '128px' }}
            />
            <NikkeIconRow nikke_static={nikke_static} />
            {nikke_data &&
                <CoreVisualization nikke_data={nikke_data} />
            }
            {nikke_data && 
                <div>
                    <Button
                        style={{ backgroundColor: color_scheme[3], color: color_scheme[0] }}
                        onClick={() => setSkillDialogOpen(true)}
                    >
                        {nikke_data.skill_levels[0]}/{nikke_data.skill_levels[1]}/{nikke_data.skill_levels[2]}
                    </Button>
                    <Dialog isOpen={skill_dialog_open} title='Set Skill Levels' onClose={() => setSkillDialogOpen(false)} >
                        <DialogBody className="custom-dialog-body" >
                            <SkillDialogSkill nikke={nikke_data} nikke_static={nikke_static} skill_type={'Skill 1'} />
                            <SkillDialogSkill nikke={nikke_data} nikke_static={nikke_static} skill_type={'Skill 2'} />
                            <SkillDialogSkill nikke={nikke_data} nikke_static={nikke_static} skill_type={'Burst Skill'} />
                        </DialogBody>
                        <DialogFooter
                            className="custom-dialog-footer"
                            actions={
                                <Button
                                    style={{ backgroundColor: color_scheme[4], color: color_scheme[0] }}
                                    text="Close"
                                    onClick={() => setSkillDialogOpen(false)} />
                                }
                        />
                    </Dialog>
                    {nikke_data && 
                        <CollectionItemVisualization nikke={nikke_data} nikke_static={nikke_static} />
                    }
                </div>
            }
            {!nikke_data &&
                <Button
                    style={{ backgroundColor: color_scheme[3], color: color_scheme[0] }}
                    text="Add Investment"
                    onClick={() => dispatch(addNikke(nikke_static.id))}
                />
            }
        </div>
    )
}

export default Profile;
