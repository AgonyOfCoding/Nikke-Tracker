import { Icon } from "@blueprintjs/core";
import { Nikke } from "../../types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { modifyInvestment } from "../../state/investment";

interface FavoriteIconProps {
    nikke: Nikke;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ nikke }) => {
    const dispatch = useDispatch();

    const setFavorite = useCallback(() => {
        const new_nikke: Nikke = {
            ...nikke,
            favorite: !nikke.favorite
        };

        dispatch(modifyInvestment(new_nikke));
    }, [dispatch, nikke]);

    return (
        <Icon
            size={20}
            icon={nikke.favorite ? "star" : "star-empty"}
            onClick={setFavorite}
            style={{
                position: 'absolute',
                top: '5px',
                left: '5px',
                color: nikke.favorite ? "gold" : "black"
            }}
        />
    )
}

export default FavoriteIcon;