import { useState } from "react";
import { color_scheme, OverloadAttribute, RecommendationsPrydwen } from "../../types";
import { Button, Dialog, DialogBody, DialogFooter, Tooltip } from "@blueprintjs/core";
import "../../customStyles/customDialogStyles.css"

export interface RecommendationVisualizationPrydwenProps {
    recommendations: RecommendationsPrydwen;
}

const RecommendationVisualizationPrydwen: React.FC<RecommendationVisualizationPrydwenProps> = ({ recommendations }) => {
    const [cube_notes_dialog_open, setCubeNotesDialogOpen] = useState(false);
    
    const priorityColors: { [key: string]: string } = {
        essential: 'red',
        ideal: 'lightgreen',
        passable: 'yellow'
    };

    return (
        <div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: 'repeat(2, auto)',
                }}
            >
                <div style={{ gridColumn: '1 / 2' }} >
                    <b>Story (low deficit)</b>
                    <div style={{ backgroundColor: 'green' }}>{recommendations.ratings.story_low_deficit}</div>
                </div>
                <div style={{ gridColumn: '2 / 3' }} >
                    <b>Story (high deficit)</b>
                    <div style={{ backgroundColor: 'green' }}>{recommendations.ratings.story_high_deficit}</div>
                </div>
            </div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridTemplateRows: 'repeat(3, auto)',
                }}
            >
                <div style={{ gridColumn: '1 / 2' }} >
                    <b>Boss (solo)</b>
                    <div style={{ backgroundColor: 'green' }}>{recommendations.ratings.boss_solo}</div>
                </div>
                <div style={{ gridColumn: '2 / 3' }} >
                    <b>Boss (adds)</b>
                    <div style={{ backgroundColor: 'green' }}>{recommendations.ratings.boss_adds}</div>
                </div>
                <div style={{ gridColumn: '3 / 4' }} >
                    <b>PVP</b>
                    <div style={{ backgroundColor: 'green' }}>{recommendations.ratings.pvp}</div>
                </div>
            </div>
            <div style={{ marginTop: '10px' }} >
                <div>Skill investment priority: {recommendations.skills.priority}</div>
                <div>PVE: {recommendations.skills.pve}</div>
                <div>PVP: {recommendations.skills.pvp}</div>
            </div>
            {recommendations.overloads.ideal &&
                <div style={{ marginTop: '10px' }} >
                    <div>Overload investment priority: {recommendations.overloads.priority}</div>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '9fr 1fr',
                            gridTemplateRows: 'repeat(2, auto)',
                        }}
                    >
                        <div style={{ gridColumn: '1 / 2' }} >
                            {recommendations.overloads.essential.map(attribute => 
                                <div key={attribute} style={{ color: priorityColors["essential"] }} >
                                    {attribute}
                                </div>
                            )}
                            {recommendations.overloads.ideal.map(attribute => 
                                <div key={attribute} style={{ color: priorityColors["ideal"] }} >
                                    {attribute}
                                </div>
                            )}
                            {recommendations.overloads.passable.map(attribute => 
                                <div key={attribute} style={{ color: priorityColors["passable"] }} >
                                    {attribute}
                                </div>
                            )}
                        </div>
                        <div style={{ gridColumn: '2 / 3', placeContent: 'center' }} >
                            <Tooltip content={recommendations.overloads.notes} disabled={recommendations.overloads.notes === ""} >
                                <Button small minimal text="?" style={{ color: color_scheme[0], fontWeight: 'bold' }} />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            }
            <div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '3fr 3fr 3fr 1fr',
                        gridTemplateRows: 'repeat(4, auto)',
                        marginTop: '10px'
                    }}
                >
                    {/* <b>Pre-overload</b>
                    {recommendations.cube.pre_overload.map((cube, index) =>
                        <Tooltip content={`${cube} cube`} >
                            <div key={index} style={{ gridColumn: `${index+1} / ${index+2}` }} >
                                {cube}
                            </div>
                        </Tooltip>
                    )} */}
                    {recommendations.cube.post_overload.map((cube, index) =>
                        <Tooltip content={`${cube} cube`} >
                            <div key={index} style={{ gridColumn: `${index+1} / ${index+2}` }} >
                                {cube}
                            </div>
                        </Tooltip>
                    )}
                    <div style={{ gridColumn: '4 / 5', placeContent: 'center' }} >
                        <Tooltip content={recommendations.cube.notes} disabled={recommendations.cube.notes === ""} >
                            <Button small minimal text="?" style={{ color: color_scheme[0], fontWeight: 'bold' }} />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendationVisualizationPrydwen;