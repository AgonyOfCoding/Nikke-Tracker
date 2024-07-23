import { Button, Dialog, DialogBody, DialogFooter } from "@blueprintjs/core";
import { color_scheme, Nikke, NikkeStaticData, RecommendationData } from "../types";
import { useState } from "react";
import SkillDialogSkill from "./skillDialogSkill";
import "../customStyles/customDialogStyles.css"
import NikkeIconRow from "./nikkeIconRow";

interface ProfileColumnProps {
    nikke_recommendations: RecommendationData | undefined;
    nikke_static: NikkeStaticData;
    nikke_data: Nikke | undefined;
}


const ProfileColumn: React.FC<ProfileColumnProps> = ({ nikke_recommendations, nikke_static, nikke_data }) => {
    const getCoreIcon = (core: number): string => {
        try {
            return require(`../assets/misc/core_${core}.png`);
        } catch (err) {
            return '';
        }
    }
    const getNikkeIcon = (id: string) => {
        try {
            return require(`../assets/nikke_icons/${id}.png`);
        } catch (err) {
            return '';
        }
    }
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
            {nikke_recommendations && 
                <p style={{ color: priorityColors[nikke_recommendations.priority], margin:0 }} >{nikke_recommendations.priority} priority</p>
            }
            <img src={getNikkeIcon(nikke_static.id)}
                    alt={nikke_static.name}
                    style={{ width: '128px', height: '128px' }}
            />
            <NikkeIconRow nikke_static={nikke_static} />
            {nikke_data &&
                <img src={getCoreIcon(nikke_data.core)}
                        alt="Core icon error"
                        style={{ width: '80px' }}
                />
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
                    {nikke_recommendations && 
                        <p style={{ margin:0 }}>{nikke_recommendations.skills[0]}/{nikke_recommendations.skills[1]}/{nikke_recommendations.skills[2]}</p>
                    }
                    {!nikke_recommendations && 
                        <p style={{ margin:0 }}>No skill recommendations</p>
                    }
                    {nikke_data.collection_item && 
                        <p>Collection Item: {nikke_data.collection_item.rarity} phase: {nikke_data.collection_item.phase}</p>
                    }
                </div>
            }
            {!nikke_data &&
                <Button
                    style={{ backgroundColor: color_scheme[3], color: color_scheme[0] }}
                    text="Add Nikke"
                />
            }
        </div>
    )
}

export default ProfileColumn;
