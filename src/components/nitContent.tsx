import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { TeamSet } from "../state/teamsState";
import TeamsView from "./teams/teamsView";
import NikkeList from "./list/nikkeList";

// const transformStaticData = ( data: { [key: string]: any }): { [key: string]: NikkeStaticData } => {
//     const transformedData: { [key: string]: NikkeStaticData } = {};

//     Object.keys(data).forEach(key => {
//         const entry = data[key];
//         transformedData[key] = {
//             id: entry.id,
//             name: entry.name,
//             manufacturer: entry.manufacturer as NikkeManufacturer,
//             role: entry.role as NikkeRole,
//             weapon_type: entry.weapon_type as WeaponType,
//             rarity: entry.rarity as NikkeRarity,
//             burst: entry.burst as Burst,
//             element: entry.element as NikkeElement,
//             skills: entry.skills as NikkeSkills
//         };
//     });

//     return transformedData;
// };

const NITContent: React.FC = () => {
    // const [nikke_static_data, setNikkeStaticData] = useState<{ [key: string]: NikkeStaticData } | null>(null);
    const selected_team_set: TeamSet | undefined = useSelector((state: RootState) => state.teams.selected_team_set);

    // useEffect(() => {
    //     const sta = transformStaticData(nikkeStaticDataJson);
    //     setNikkeStaticData(sta);
    // }, []);

    // if (!nikke_static_data) {
    //     return <Spinner />
    // }

    if (selected_team_set) {
        return (
            <TeamsView />
        )
    }
    return (
        <NikkeList />
    )
}

export default NITContent;