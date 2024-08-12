import { Button } from "@blueprintjs/core";
import { Nikke, NikkeRarity, NikkeStaticData, RecommendationData } from "../../types";
import NikkeIconRow from "./nikkeIconRow";
import { useDispatch } from "react-redux";
import { addNikke } from "../../state/investment";
import { getNikkeIcon } from "../../utility/iconGetters";
import CoreVisualization from "./coreVisualization";
import BondVisualization from "./BondVisualization";
import SkillDialog from "./SkillDialog";
import FavoriteIcon from "./favoriteIcon";

interface ProfileProps {
    nikke_static: NikkeStaticData;
    nikke_data: Nikke | undefined;
    recommendations: RecommendationData;
}


const Profile: React.FC<ProfileProps> = ({ nikke_static, nikke_data }) => {
    const dispatch = useDispatch();

    const getGradientColors = (rarity: NikkeRarity) => {
        switch (rarity) {
            case NikkeRarity.SSR:
                return 'linear-gradient(to top, #c9a36a, #895650)';
            case NikkeRarity.SR:
                return 'linear-gradient(to top, #8a5fcc, #35365a)';
            case NikkeRarity.R:
            default:
                return 'linear-gradient(to top, #4273ba, #34375a)';
        }
    };
    
    return (
        <div style={{ alignItems: 'center' }} >
            {nikke_data && <FavoriteIcon nikke={nikke_data} />}
            <h3 style={{ margin:0 }}>{nikke_static.name}</h3>
            <div style={styles.container}>
                <div style={{ ...styles.background, background: getGradientColors(nikke_static.rarity) }}>
                    <img src={getNikkeIcon(nikke_static.id)} alt="Icon not found" style={styles.image} />
                </div>
            </div>
            <NikkeIconRow nikke_static={nikke_static} />
            {nikke_data && nikke_static.rarity === NikkeRarity.SSR &&
                <CoreVisualization nikke_data={nikke_data} />
            }
            {nikke_data && nikke_static.rarity !== NikkeRarity.R &&
                <BondVisualization nikke_data={nikke_data} nikke_static={nikke_static} />
            }
            {nikke_data && 
                <SkillDialog nikke={nikke_data} nikke_static={nikke_static} />
            }
            {!nikke_data &&
                <Button
                    style={{ margin: '10px' }}
                    intent="success"
                    text="Add Investment"
                    onClick={() => dispatch(addNikke(nikke_static.id))}
                />
            }
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' as const, // Ensure TypeScript understands this as a valid flex property
    },
    background: {
        width: '128px',
        height: '128px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start' as const, // Aligns the image at the top
    },
    image: {
        width: '128px',
        height: '128px',
        objectFit: 'cover' as const,
        position: 'relative' as const,
        zIndex: 1,
        top: 0,
    },
};

export default Profile;
