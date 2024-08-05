import { Button, Dialog, DialogBody, DialogFooter } from "@blueprintjs/core";
import { color_scheme, Nikke, NikkeStaticData, RecommendationData } from "../../types";
import { useState } from "react";
import SkillDialogSkill from "./skillDialogSkill";
import "../../customStyles/customDialogStyles.css"
import NikkeIconRow from "./nikkeIconRow";
import { useDispatch, useSelector } from "react-redux";
import { addNikke } from "../../state/investment";
import { getNikkeIcon } from "../../utility/iconGetters";
import CoreVisualization from "./coreVisualization";
import CollectionItemVisualization from "./collectionItemVisualization";
import { RootState } from "../../state/store";
import BondVisualization from "./BondVisualization";

interface ProfileProps {
    nikke_static: NikkeStaticData;
    nikke_data: Nikke | undefined;
    recommendations: RecommendationData;
}


const Profile: React.FC<ProfileProps> = ({ nikke_static, nikke_data, recommendations }) => {
    const wide_layout: boolean = useSelector((state: RootState) => state.settings.wide_layout)
    const dispatch = useDispatch();
    const [skill_dialog_open, setSkillDialogOpen] = useState(false);

    const rarityColors: { [rarity: string]: string } = {
        SSR: "#f18031", //#f5a763
        SR: "#883af8", //#a665eb
        R: "#3b81eb" //#68a3ea
    }
    
    return (
        <div>
            <h2 style={{ margin:0 }}>{nikke_static.name}</h2>
            <img 
                src={getNikkeIcon(nikke_static.id)}
                alt="Icon not found"
                style={{ width: '128px', height: '128px', backgroundColor: rarityColors[nikke_static.rarity] }}
            />
            <NikkeIconRow nikke_static={nikke_static} />
            {nikke_data &&
                <CoreVisualization nikke_data={nikke_data} />
            }
            {nikke_data &&
                <BondVisualization nikke_data={nikke_data} nikke_static={nikke_static} />
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
                    {nikke_data && !wide_layout &&
                        <CollectionItemVisualization nikke={nikke_data} nikke_static={nikke_static} recommendations={recommendations} />
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
