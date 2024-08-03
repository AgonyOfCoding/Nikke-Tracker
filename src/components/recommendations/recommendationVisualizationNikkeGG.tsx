import { color_scheme, RecommendationsNikkeGG, WeaponType } from "../../types";
import { Button, Tooltip } from "@blueprintjs/core";
import { getMiscIcon } from "../../utility/iconGetters";
import NikkeGGOverloadLine from "./nikkeGGOverloadLine";
import { getNikkeGGOverloadArchitype } from "../../data/miscData";

export interface RecommendationVisualizationNikkeGGProps {
    recommendations: RecommendationsNikkeGG;
    weapon_type: WeaponType;
}

function ratingColor(rating: number): string {
    if (rating >= 9.5) return "#a02454"
    if (rating >= 9.0) return "#a0243c"
    if (rating >= 8.5) return "#a02424"
    if (rating >= 8.0) return "#a04c24"
    if (rating >= 7.0) return "#997326"
    if (rating >= 6.0) return "#a09c24"
    if (rating >= 4.0) return "#889c24"
    if (rating >= 2.0) return "#709c24"
    return "#589c24"
}

const RecommendationVisualizationNikkeGG: React.FC<RecommendationVisualizationNikkeGGProps> = ({ recommendations, weapon_type }) => {

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
                    <div style={{ backgroundColor: ratingColor(recommendations.ratings.story) }}>{recommendations.ratings.story}</div>
                </div>
                <div style={{ gridColumn: '2 / 3' }} >
                    <b>PvP</b>
                    <div style={{ backgroundColor: ratingColor(recommendations.ratings.pvp) }}>{recommendations.ratings.pvp}</div>
                </div>
                <div style={{ gridColumn: '3 / 4' }} >
                    <b>Boss</b>
                    <div style={{ backgroundColor: ratingColor(recommendations.ratings.boss) }}>{recommendations.ratings.boss}</div>
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
            
            <div style={{ marginTop: '10px' }}>
                {recommendations.overloads.priority && recommendations.overloads.priority_rank !== 0 &&
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '9fr 1fr',
                            gridTemplateRows: 'repeat(2, auto)',
                            marginTop: '10px'
                        }}
                    >
                        <div style={{ gridColumn: '1 / 2' }} >
                        <div>Overload investment priority: {recommendations.overloads.priority} [{recommendations.overloads.priority_rank}]</div>
                        </div>
                        <div style={{ gridColumn: '2 / 3' }} >
                            <Tooltip content={recommendations.overloads.notes} >
                                <Button small minimal text="?" style={{ color: color_scheme[0], fontWeight: 'bold' }} />
                            </Tooltip>
                        </div>
                    </div>
                    
                }
                {!recommendations.overloads.priority && 
                    <div>Default weapon-specific overloads</div>
                }
                <NikkeGGOverloadLine attribute={"elemental_damage"} overload_line={recommendations.overloads.atk ? recommendations.overloads.elemental_damage : getNikkeGGOverloadArchitype(weapon_type).elemental_damage } />
                <NikkeGGOverloadLine attribute={"hit_rate"} overload_line={recommendations.overloads.atk ? recommendations.overloads.hit_rate : getNikkeGGOverloadArchitype(weapon_type).hit_rate } />
                <NikkeGGOverloadLine attribute={"max_ammo"} overload_line={recommendations.overloads.atk ? recommendations.overloads.max_ammo : getNikkeGGOverloadArchitype(weapon_type).max_ammo } />
                <NikkeGGOverloadLine attribute={"atk"} overload_line={recommendations.overloads.atk ? recommendations.overloads.atk : getNikkeGGOverloadArchitype(weapon_type).atk } />
                <NikkeGGOverloadLine attribute={"charge_damage"} overload_line={recommendations.overloads.atk ? recommendations.overloads.charge_damage : getNikkeGGOverloadArchitype(weapon_type).charge_damage } />
                <NikkeGGOverloadLine attribute={"charge_speed"} overload_line={recommendations.overloads.atk ? recommendations.overloads.charge_speed : getNikkeGGOverloadArchitype(weapon_type).charge_speed } />
                <NikkeGGOverloadLine attribute={"crit_damage"} overload_line={recommendations.overloads.atk ? recommendations.overloads.crit_damage : getNikkeGGOverloadArchitype(weapon_type).crit_damage } />
                <NikkeGGOverloadLine attribute={"crit_rate"} overload_line={recommendations.overloads.atk ? recommendations.overloads.crit_rate : getNikkeGGOverloadArchitype(weapon_type).crit_rate } />
                <NikkeGGOverloadLine attribute={"def"} overload_line={recommendations.overloads.atk ? recommendations.overloads.def : getNikkeGGOverloadArchitype(weapon_type).def } />
            </div>
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
                            <Tooltip content={cube} >
                                <div key={index} style={{ gridColumn: `${index+1} / ${index+2}` }} >
                                    <img src={getMiscIcon("cube", cube)} alt="Icon not found" style={{ width: "64px", height: "64px" }} />
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