import React from 'react';
import { NikkeStaticData } from '../types';

interface NikkeIconRowProps {
    nikke_static: NikkeStaticData
}

const NikkeIconRow: React.FC<NikkeIconRowProps> = ({ nikke_static }) => {

    const getNikkeIcon = (type: string, value: string) => {
        try {
            return require(`../assets/misc/${type}_${value}.png`);
        } catch (err) {
            return '';
        }
    }

    return (
        <div style={styles.container}>
            <img src={getNikkeIcon("burst", nikke_static.burst)} alt="Icon not found" style={styles.image} />
            <img src={getNikkeIcon("role", nikke_static.role)} alt="Icon not found" style={styles.image} />
            <img src={getNikkeIcon("element", nikke_static.element)} alt="Icon not found" style={styles.image} />
            <img src={getNikkeIcon("weapon", nikke_static.weapon_type)} alt="Icon not found" style={styles.image} />
            <img src={getNikkeIcon("manufacturer", nikke_static.manufacturer)} alt="Icon not found" style={styles.image} />
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