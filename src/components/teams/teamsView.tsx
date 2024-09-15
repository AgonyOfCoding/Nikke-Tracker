import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { TeamSet, TeamsState } from "../../state/teamsState";
import { NikkeStaticData } from "../../types";
import TeamsSummary from "./teamsSummary";
import NikkeList from "../list/nikkeList";
import { nikke_static_data } from "../../data/nikkeStaticData";

const TeamsView: React.FC = () => {
    const teams_state: TeamsState = useSelector((state: RootState) => state.teams);
    const { selected_team_set, selected_team, teams_data } = teams_state;

    if (!selected_team_set || !teams_data)
        return null;

    const team_set_key = selected_team_set === TeamSet.campaign ?
        "campaign" : selected_team_set === TeamSet.solo_raid ?
        "solo_raid" : selected_team_set === TeamSet.anomaly_interception ?
        "anomaly_interception" : selected_team_set === TeamSet.tribe_tower ?
        "tribe_tower" : selected_team_set === TeamSet.shooting_range ?
        "shooting_range" : selected_team_set === TeamSet.pvp ?
        "pvp" : "custom";

    if (selected_team === "summary" ) {
        return (
            <TeamsSummary teams={teams_data[team_set_key]} />
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
        <NikkeList team_nikke_list={team_nikke_list} />
    )
}

export default TeamsView;