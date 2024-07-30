import { AllManufacturers, EquipmentType, NikkeRole } from "../types";

export function getNikkeIcon(id: string) {
    try {
        return require(`../assets/nikke_icons/${id}.png`)
    } catch(err) {
        return '';
    }
}

export function getEquipmentIcon(manufacturer: AllManufacturers, role: NikkeRole, type: EquipmentType, level: number) {
    try {
        return require(`../assets/equipment_icons/${manufacturer}_${role}_${type}_${level}.png`)
    } catch(err) {
        try {
            return require(`../assets/equipment_icons/${manufacturer}_${role}_${type}_0.png`)
        } catch(err) {
            return '';
        }
    }
}

export function getEmptyEquipmentIcon(type: EquipmentType) {
    try {
        return require(`../assets/equipment_icons/empty_${type}.png`)
    } catch(err) {
        return '';
    }
}

export function getMiscIcon(icon_type: string, type_value: string) {
    try {
        return require(`../assets/misc_icons/${icon_type}_${type_value}.png`)
    } catch(err) {
        return '';
    }
}

export function getCollectionItemIcon(rarity: string, type?: string) {
    try {
        if (rarity === 'empty') {
            return require(`../assets/collection_item_icons/${rarity}.png`)
        } else {
            return require(`../assets/collection_item_icons/${rarity}_${type}.png`)
        }
    } catch(err) {
        return '';
    }
}

// function getIcon(path: string) {
//     try {
//         return require(path)
//     } catch(err) {
//         return '';
//     }
// }