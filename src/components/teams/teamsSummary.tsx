import { CubeName, Team } from "../../types"
import { getMiscIcon, getNikkeIcon } from "../../utility/iconGetters";

interface TeamsSummaryProps {
    teams: Team[];
}

const TeamsSummary: React.FC<TeamsSummaryProps> = ({ teams }) => {
    return (
        <div style={{ marginTop: '150px' }}>
            {teams.map(team => 
                <TeamRow key={team.name} team={team} />
            )}
        </div>
    )
}

interface TeamRowProps {
    team: Team
}

const TeamRow: React.FC<TeamRowProps> = ({ team }) => {
    const { name, nikke_1, nikke_2, nikke_3, nikke_4, nikke_5, cube_1, cube_2, cube_3, cube_4, cube_5 } = team;
    
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
                gridTemplateRows: 'repeat(6, auto)'
            }}
        >
            <h3>{name}</h3>
            <SummaryEntry nikke={nikke_1} cube={cube_1} index={2} />
            <SummaryEntry nikke={nikke_2} cube={cube_2} index={3} />
            <SummaryEntry nikke={nikke_3} cube={cube_3} index={4} />
            <SummaryEntry nikke={nikke_4} cube={cube_4} index={5} />
            <SummaryEntry nikke={nikke_5} cube={cube_5} index={6} />
        </div>
    )
}

interface SummaryEntryProps {
    nikke: string | undefined;
    cube: CubeName | undefined;
    index: number;
}

const SummaryEntry: React.FC<SummaryEntryProps> = ({ nikke, cube, index }) => {
    return (
        <div style={{ gridColumn: `${index} / ${index + 1}` }} >
            {nikke &&
                <img 
                    src={getNikkeIcon(nikke)}
                    alt="Icon not found"
                    style={{ width: '128px', height: '128px' }}
                />
            }
            {cube &&
                <img 
                    src={getMiscIcon("cube", cube)}
                    alt="Icon not found"
                    style={{ width: '64px', height: '64px' }}
                />
            }
        </div>
    )
}

export default TeamsSummary;