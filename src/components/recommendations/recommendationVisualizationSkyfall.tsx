import { useState } from "react";
import { color_scheme, RecommendationsSkyfall } from "../../types";
import { Button, Dialog, DialogBody, DialogFooter } from "@blueprintjs/core";
import "../../customStyles/customDialogStyles.css"

export interface RecommendationVisualizationSkyfallProps {
    recommendations: RecommendationsSkyfall;
}

const RecommendationVisualizationSkyfall: React.FC<RecommendationVisualizationSkyfallProps> = ({ recommendations }) => {
    const [cube_notes_dialog_open, setCubeNotesDialogOpen] = useState(false);
    const [notes_dialog_open, setNotesDialogOpen] = useState(false);

    if (recommendations.notes === undefined) {
        return <p>No recommendations</p>
    }
    
    const priorityColors: { [key: string]: string } = {
        ideal: 'yellow',
        good: 'orange',
        fine: 'tan',
        passable: 'white',
        no: 'red'
    };

    return (
        <div>
            <div>
                <b>Priority: {recommendations.priority}</b>
            </div>
            <div>
                <b>Skills: {recommendations.skills[0]}/{recommendations.skills[1]}/{recommendations.skills[2]}</b>
            </div>
            <div>
                <b>Overloads</b>
                <div style={{ backgroundColor: color_scheme[4] }}>
                    {recommendations.overloads.ideal.map(attribute => 
                        <p key={attribute} style={{ color: priorityColors["ideal"], margin:0 }}>
                            {attribute}
                        </p>
                    )}
                    {recommendations.overloads.good.map(attribute => 
                        <p key={attribute} style={{ color: priorityColors["good"], margin:0 }}>
                            {attribute}
                        </p>
                    )}
                    {recommendations.overloads.fine.map(attribute => 
                        <p key={attribute} style={{ color: priorityColors["fine"], margin:0 }}>
                            {attribute}
                        </p>
                    )}
                    {recommendations.overloads.passable.map(attribute => 
                        <p key={attribute} style={{ color: priorityColors["passable"], margin:0 }}>
                            {attribute}
                        </p>
                    )}
                    {recommendations.overloads.no.map(attribute => 
                        <p key={attribute} style={{ color: priorityColors["no"], margin:0 }}>
                            {attribute}
                        </p>
                    )}
                </div>
            </div>
            <div>
                <b>Harmony Cube</b>
                {recommendations.cube.cube.map(cube =>
                    <p>{cube}</p>
                )}
                <Button
                    style={{ backgroundColor: color_scheme[0], color: color_scheme[4] }}
                    text="Notes"
                    onClick={() => setCubeNotesDialogOpen(true)}
                />
                <Dialog isOpen={cube_notes_dialog_open} title='Recommendation notes' onClose={() => setCubeNotesDialogOpen(false)} >
                    <DialogBody className="custom-dialog-body" >
                        <p>{recommendations.cube.notes}</p>
                    </DialogBody>
                    <DialogFooter
                        className="custom-dialog-footer"
                        actions={
                            <Button
                                style={{ backgroundColor: color_scheme[4], color: color_scheme[0] }}
                                text="Close"
                                onClick={() => setCubeNotesDialogOpen(false)} />
                            }
                    />
                </Dialog>
            </div>
            <Button
                style={{ backgroundColor: color_scheme[0], color: color_scheme[4] }}
                text="Notes"
                onClick={() => setNotesDialogOpen(true)}
            />
            <Dialog isOpen={notes_dialog_open} title='Recommendation notes' onClose={() => setNotesDialogOpen(false)} >
                <DialogBody className="custom-dialog-body" >
                    <p>{recommendations.notes}</p>
                </DialogBody>
                <DialogFooter
                    className="custom-dialog-footer"
                    actions={
                        <Button
                            style={{ backgroundColor: color_scheme[4], color: color_scheme[0] }}
                            text="Close"
                            onClick={() => setNotesDialogOpen(false)} />
                        }
                />
            </Dialog>
        </div>
    )
}

export default RecommendationVisualizationSkyfall;