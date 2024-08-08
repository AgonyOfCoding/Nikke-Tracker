import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { TeamSet, TeamsState } from "../../state/teamsState";
import { NikkeStaticData, RecommendationData } from "../../types";
import TeamsSummary from "./teamsSummary";
import NikkeList from "../list/nikkeList";

interface TeamsViewProps {
    nikke_static_data: { [key: string]: NikkeStaticData };
    recommendation_data: { [key: string]: RecommendationData };
}

const TeamsView: React.FC<TeamsViewProps> = ({ nikke_static_data, recommendation_data }) => {
    const teams_state: TeamsState = useSelector((state: RootState) => state.teams);
    const { selected_team_set, selected_team, teams_data } = teams_state;

    if (!selected_team_set || !teams_data)
        return null;

    const team_set_key = selected_team_set === TeamSet.campaign ?
        "campaign" : selected_team_set === TeamSet.solo_raid ?
        "solo_raid" : selected_team_set === TeamSet.tribe_tower ?
        "tribe_tower": selected_team_set === TeamSet.pvp ?
        "pvp" : "custom";

    if (selected_team === "summary" ) {
        return (
            <TeamsSummary teams={teams_data[team_set_key]} nikke_static_data={nikke_static_data} />
        )
    }

    const team_nikke_list: NikkeStaticData[] = [];
    teams_data[team_set_key].forEach(team => {
        if (team.name === selected_team) {
            if (team.nikke_1) team_nikke_list.push(nikke_static_data[team.nikke_1]);
            if (team.nikke_2) team_nikke_list.push(nikke_static_data[team.nikke_2]);
            if (team.nikke_3) team_nikke_list.push(nikke_static_data[team.nikke_3]);
            if (team.nikke_4) team_nikke_list.push(nikke_static_data[team.nikke_4]);
            if (team.nikke_5) team_nikke_list.push(nikke_static_data[team.nikke_5]);
        }
    })

    return (
        <NikkeList nikke_static_data={nikke_static_data} recommendation_data={recommendation_data} team_nikke_list={team_nikke_list} />
    )
}

export default TeamsView;