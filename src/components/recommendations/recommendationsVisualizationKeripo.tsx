import { color_scheme, RecommendationsKeripo } from "../../types";
import { Button, Tooltip } from "@blueprintjs/core";
import { getMiscIcon } from "../../utility/iconGetters";
import { recommendation_data_keripo } from "../../data/recommendationsKeripo";

export interface RecommendationVisualizationKeripoProps {
    nikke_id: string;
}

const RecommendationVisualizationKeripo: React.FC<RecommendationVisualizationKeripoProps> = ({ nikke_id }) => {
    const recommendations: RecommendationsKeripo | undefined = recommendation_data_keripo[nikke_id] || undefined;
    if (!recommendations) {
        return <h3>No recommendations</h3>
    }
    
    const tierColorsBackground: { [key: string]: string } = {
        "S+": "#ead1dc",
        "S": "#f4cccc",
        "S-": "#f4cccc",
        "A+": "#fce5cd",
        "(A+)": "#fce5cd",
        "A": "#fce5cd",
        "A-": "#fce5cd",
        "(A-)": "#fce5cd",
        "B+": "#fff2cc",
        "B": "#fff2cc",
        "B-": "#fff2cc",
        "C": "#d9ead3",
        "D": "#d0e0e3",
        "(D)": "#d0e0e3",
        "Burst": "#cfe2f3",
        "Special": "#d9d2e9"
    };

    const tierColorsText: { [key: string]: string } = {
        "S+": "#351c75",
        "S": "#fe0100",
        "S-": "#fe0100",
        "A+": "#e69138",
        "(A+)": "#e69138",
        "A": "#e69138",
        "A-": "#e69138",
        "(A-)": "#e69138",
        "B+": "#bf9000",
        "B": "#bf9000",
        "B-": "#bf9000",
        "C": "#38763c",
        "D": "#134f5c",
        "(D)": "#134f5c",
        "Burst": "#1155d2",
        "Special": "#351c75"
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} >
                <div
                    style={{
                        backgroundColor: tierColorsBackground[recommendations.tier],
                        color: tierColorsText[recommendations.tier],
                        width: 50,
                        height: 50,
                        fontSize: 20,
                        fontWeight: "bold"
                    }}
                >
                    {recommendations.tier}
                </div>
                <div>
                    {recommendations.role}
                </div>
            </div>
            <div>
                {recommendations.skills}
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} >
                {recommendations.cube.map((cube, index) =>
                    <Tooltip key={index} content={cube} >
                        <div key={index} style={{ gridColumn: `${index+2} / ${index+3}` }} >
                            <img src={getMiscIcon("cube", cube)} alt="Icon not found" style={{ width: "64px", height: "64px" }} />
                        </div>
                    </Tooltip>
                )}
            </div>
            <div>
                {recommendations.tl_dr}
            </div>
            <Tooltip content={<div>{recommendations.full.map((line, index) => <p key={index}>{line}</p>)}</div>} >
                <Button text="Full explanation" intent="primary"/>
            </Tooltip>
        </div>
    )
}

export default RecommendationVisualizationKeripo;