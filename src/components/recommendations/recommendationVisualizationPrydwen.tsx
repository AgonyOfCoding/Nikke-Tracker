import { useSelector } from "react-redux";
import { color_scheme } from "../../types";
import { Button, Tooltip } from "@blueprintjs/core";
import { RootState } from "../../state/store";
import { getMiscIcon } from "../../utility/iconGetters";
import { recommendation_data_prydwen } from "../../data/recommendationsPrydwen";

export interface RecommendationVisualizationPrydwenProps {
    nikke_id: string;
    treasure?: boolean;
}

const RecommendationVisualizationPrydwen: React.FC<RecommendationVisualizationPrydwenProps> = ({ nikke_id, treasure }) => {
    const recommendations = treasure ? recommendation_data_prydwen[nikke_id].with_treasure : recommendation_data_prydwen[nikke_id];
    const post_overload: boolean = useSelector((state: RootState) => state.settings.post_overload);

    if (!recommendations)
        return null;

    const ratingColors: { [key: string]: string } = {
        SSS: "#e84ce4",
        SS: "#f05454",
        S: "#ff7c7c",
        A: "#ffa4a4",
        B: "#ffbc7c",
        C: "#fffc7c",
        D: "#c0fc7c",
        E: "#a0fc9c"
    }
    
    const priorityColors: { [key: string]: string } = {
        essential: "#df3036",
        ideal: "#74ee65",
        passable: "#dcdd5b"
    };

    return (
        <div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows: "repeat(2, auto)"
                }}
            >
                <div style={{ gridColumn: '1 / 2' }} >
                    <b>Story (low deficit)</b>
                    <div
                        style={{ backgroundColor: ratingColors[recommendations.ratings.story_low_deficit], color: "black", fontWeight: "bold", border: "1px solid black" }}
                    >
                        {recommendations.ratings.story_low_deficit}
                    </div>
                </div>
                <div style={{ gridColumn: '2 / 3' }} >
                    <b>Story (high deficit)</b>
                    <div
                        style={{ backgroundColor: ratingColors[recommendations.ratings.story_high_deficit], color: "black", fontWeight: "bold", border: "1px solid black" }}
                    >
                        {recommendations.ratings.story_high_deficit}
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridTemplateRows: 'repeat(3, auto)'
                }}
            >
                <div style={{ gridColumn: '1 / 2' }} >
                    <b>Boss (solo)</b>
                    <div
                        style={{ backgroundColor: ratingColors[recommendations.ratings.boss_solo], color: "black", fontWeight: "bold", border: "1px solid black" }}
                    >
                        {recommendations.ratings.boss_solo}
                    </div>
                </div>
                <div style={{ gridColumn: '2 / 3' }} >
                    <b>Boss (adds)</b>
                    <div
                        style={{ backgroundColor: ratingColors[recommendations.ratings.boss_adds], color: "black", fontWeight: "bold", border: "1px solid black" }}
                    >
                        {recommendations.ratings.boss_adds}
                    </div>
                </div>
                <div style={{ gridColumn: '3 / 4' }} >
                    <b>PVP</b>
                    <div
                        style={{ backgroundColor: ratingColors[recommendations.ratings.pvp], color: "black", fontWeight: "bold", border: "1px solid black" }}
                    >
                        {recommendations.ratings.pvp}
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '10px' }} >
                <div>Skill investment priority: <b>{recommendations.skills.priority}</b></div>
                <div>PVE: {recommendations.skills.pve}</div>
                <div>PVP: {recommendations.skills.pvp}</div>
            </div>
            {recommendations.overloads.ideal &&
                <div style={{ marginTop: '10px', backgroundColor: "#28242c", borderTop: "1px solid grey", borderBottom: "1px solid grey" }} >
                    <div>Overload investment priority: <b>{recommendations.overloads.priority}</b></div>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '9fr 1fr',
                            gridTemplateRows: 'repeat(2, auto)',
                            fontWeight: 'bold'
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
                        {recommendations.overloads.notes !== "" &&
                            <div style={{ gridColumn: '2 / 3', placeContent: 'center' }} >
                                <Tooltip content={recommendations.overloads.notes} >
                                    <Button small minimal text="?" style={{ color: color_scheme[0], fontWeight: 'bold' }} />
                                </Tooltip>
                            </div>
                        }
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
                    {!post_overload && 
                        recommendations.cube.pre_overload.map((cube, index) => (
                            <Tooltip key={index} content={`${cube} cube`} >
                                <div style={{ gridColumn: `${index+1} / ${index+2}` }} >
                                    <img src={getMiscIcon("cube", cube)} alt="Icon not found" style={{ width: "64px", height: "64px" }} />
                                </div>
                            </Tooltip>
                        ))
                    }
                    {post_overload && 
                        recommendations.cube.post_overload.map((cube, index) => (
                            <Tooltip key={index} content={cube} >
                                <div style={{ gridColumn: `${index+1} / ${index+2}` }} >
                                    <img src={getMiscIcon("cube", cube)} alt="Icon not found" style={{ width: "64px", height: "64px" }} />
                                </div>
                            </Tooltip>
                        ))
                    }
                    {recommendations.cube.notes !== "" &&
                        <div style={{ gridColumn: '4 / 5', placeContent: 'center' }} >
                            <Tooltip content={recommendations.cube.notes} >
                                <Button small minimal text="?" style={{ color: color_scheme[0], fontWeight: 'bold' }} />
                            </Tooltip>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default RecommendationVisualizationPrydwen;