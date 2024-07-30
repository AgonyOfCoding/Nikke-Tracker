import React from 'react';
import { NikkeStaticData } from '../../types';
import { getMiscIcon } from '../../utility/iconGetters';

interface NikkeIconRowProps {
    nikke_static: NikkeStaticData
}

const NikkeIconRow: React.FC<NikkeIconRowProps> = ({ nikke_static }) => {

    return (
        <div style={styles.container}>
            <img src={getMiscIcon("burst", nikke_static.burst)} alt="Icon not found" style={styles.image} />
            <img src={getMiscIcon("weapon", nikke_static.weapon_type)} alt="Icon not found" style={styles.image} />
            <img src={getMiscIcon("role", nikke_static.role)} alt="Icon not found" style={styles.image} />
            <img src={getMiscIcon("element", nikke_static.element)} alt="Icon not found" style={styles.image} />
            <img src={getMiscIcon("manufacturer", nikke_static.manufacturer)} alt="Icon not found" style={styles.image} />
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

export default NikkeIconRow;