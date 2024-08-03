import { color_scheme, RecommendationsSkyfall } from "../../types";
import { Button, Tooltip } from "@blueprintjs/core";
import { getMiscIcon } from "../../utility/iconGetters";

export interface RecommendationVisualizationSkyfallProps {
    recommendations: RecommendationsSkyfall;
}

const RecommendationVisualizationSkyfall: React.FC<RecommendationVisualizationSkyfallProps> = ({ recommendations }) => {
    if (recommendations.notes === undefined) {
        return <p>No recommendations</p>
    }
    
    const priorityColors: { [key: string]: string } = {
        ideal: "#ffff00",
        good: "#ff7614",
        fine: "#f9c395",
        passable: "#efefef",
        no: "#f11822"
    };

    return (
        <div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '3fr 1fr',
                    gridTemplateRows: 'repeat(2, auto)',
                }}
            >
                <div style={{ gridColumn: '1 / 2' }} >
                    <b>{recommendations.priority} priority</b>
                </div>
                <div style={{ gridColumn: '2 / 3', placeContent: 'center' }} >
                    <Tooltip content={recommendations.notes} >
                        <Button small minimal text="?" style={{ color: color_scheme[0], fontWeight: 'bold' }} />
                    </Tooltip>
                </div>
            </div>
            <div style={{ marginTop: "10px" }} >
                <div>{recommendations.skills[0]}</div>
                <div>{recommendations.skills[1]}</div>
                <div>{recommendations.skills[2]}</div>
            </div>
            <div style={{ marginTop: "10px" }} >
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
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '3fr 3fr 3fr 1fr',
                    gridTemplateRows: 'repeat(4, auto)',
                    marginTop: '10px'
                }}
            >
                {recommendations.cube.cube.map((cube, index) =>
                    <Tooltip content={cube} >
                        <div key={index} style={{ gridColumn: `${index+1} / ${index+2}` }} >
                            <img src={getMiscIcon("cube", cube)} alt="Icon not found" style={{ width: "64px", height: "64px" }} />
                        </div>
                    </Tooltip>
                )}
                {recommendations.cube.notes !== "" &&
                    <div style={{ gridColumn: '4 / 5', placeContent: 'center' }} >
                        <Tooltip content={recommendations.cube.notes} disabled={recommendations.cube.notes === ""} >
                            <Button small minimal text="?" style={{ color: color_scheme[0], fontWeight: 'bold' }} />
                        </Tooltip>
                    </div>
                }
            </div>
        </div>
    )
}

export default RecommendationVisualizationSkyfall;