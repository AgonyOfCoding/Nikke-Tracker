import { useState } from "react";
import { color_scheme, OverloadAttribute, RecommendationsNikkeGG } from "../../types";
import { Button, Dialog, DialogBody, DialogFooter, Icon, Tooltip } from "@blueprintjs/core";
import "../../customStyles/customDialogStyles.css"
import NikkeGGOverloadStars from "./nikkeGGOverloadStars";

export interface RecommendationVisualizationNikkeGGProps {
    recommendations: RecommendationsNikkeGG;
}

const RecommendationVisualizationNikkeGG: React.FC<RecommendationVisualizationNikkeGGProps> = ({ recommendations }) => {
    // const priorityColors: { [key: string]: string } = {
    //     essential: 'lightgreen',
    //     ideal: 'yellow',
    //     good: 'orange',
    //     fine: 'tan',
    //     passable: 'white',
    //     no: 'red'
    // };

    return (
        <div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '3fr 3fr 3fr 1fr',
                    gridTemplateRows: 'repeat(4, auto)',
                }}
            >
                <div style={{ gridColumn: '1 / 2' }} >
                    <b>Story</b>
                    <div style={{ backgroundColor: 'green' }}>{recommendations.ratings.story}</div>
                </div>
                <div style={{ gridColumn: '2 / 3' }} >
                    <b>PvP</b>
                    <div style={{ backgroundColor: 'green' }}>{recommendations.ratings.pvp}</div>
                </div>
                <div style={{ gridColumn: '3 / 4' }} >
                    <b>Boss</b>
                    <div style={{ backgroundColor: 'green' }}>{recommendations.ratings.boss}</div>
                </div>
                <div style={{ gridColumn: '4 / 5', placeContent: 'center' }} >
                    <Tooltip content={recommendations.ratings.notes} disabled={recommendations.ratings.notes === ""} >
                        <Button small minimal text="?" style={{ color: color_scheme[0], fontWeight: 'bold' }} />
                    </Tooltip>
                </div>
            </div>
            {recommendations.skills.budget &&
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '9fr 1fr',
                        gridTemplateRows: 'repeat(2, auto)',
                        marginTop: '10px'
                    }}
                >
                    <div style={{ gridColumn: '1 / 2' }} >
                        <div>Skill investment priority: {recommendations.skills.priority}</div>
                        <div>{recommendations.skills.budget} → {recommendations.skills.recommended}</div>
                    </div>
                    <div style={{ gridColumn: '2 / 3', placeContent: 'center' }} >
                        <Tooltip content={recommendations.skills.notes} disabled={recommendations.skills.notes === ""} >
                            <Button small minimal text="?" style={{ color: color_scheme[0], fontWeight: 'bold' }} />
                        </Tooltip>
                    </div>
                </div>
            }
            {recommendations.overloads.atk &&
                <div style={{ marginTop: '10px' }}>
                    <div>
                        {Object.keys(OverloadAttribute).filter(attribute => recommendations.overloads![attribute as keyof typeof OverloadAttribute] !== 0).map(attribute => 
                            <div
                                key={attribute}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '8fr 2fr',
                                    gridTemplateRows: 'repeat(2, auto)',
                                    columnGap: '5px'
                                }}
                            >
                                <div style={{ gridColumn: '1 / 2', textAlign: 'right' }} >
                                    {OverloadAttribute[attribute as keyof typeof OverloadAttribute]}
                                </div>
                                <div style={{ gridColumn: '2 / 3', placeContent: 'center' }} >
                                    <NikkeGGOverloadStars stars_n={recommendations.overloads![attribute as keyof typeof OverloadAttribute]} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            }
            {recommendations.cube.cube &&
                <div>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '3fr 3fr 3fr 1fr',
                            gridTemplateRows: 'repeat(4, auto)',
                            marginTop: '10px'
                        }}
                    >
                        {recommendations.cube.cube.map((cube, index) =>
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
            }
        </div>
    )
}

export default RecommendationVisualizationNikkeGG;