import { Icon } from '@blueprintjs/core';
import React from 'react';

interface NikkeGGOverloadStarsProps {
    stars_n: number;
}

const NikkeGGOverloadStars: React.FC<NikkeGGOverloadStarsProps> = ({ stars_n }) => {
    if (stars_n === -1)
        return <div>NO</div>;

    return (
        <div style={styles.container}>
            <Icon icon={stars_n > 0 ? "star" : "star-empty"} />
            <Icon icon={stars_n > 1 ? "star" : "star-empty"} />
            <Icon icon={stars_n > 2 ? "star" : "star-empty"} />
            <Icon icon={stars_n > 3 ? "star" : "star-empty"} />
            <Icon icon={stars_n > 4 ? "star" : "star-empty"} />
        </div>
    );
};

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)'
    },
    image: {
        width: '32px'
    }
};

export default NikkeGGOverloadStars;