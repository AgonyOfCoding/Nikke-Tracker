import { NikkeStaticData, Nikke, Burst, EquipmentManufacturer, NikkeManufacturer } from "../types";
import { EquipmentFilterOption, FilterOptions } from "../state/filterOptions";

export function nikkeListFilterer(
list: NikkeStaticData[], nikke_investment_data: Nikke[], filterState: FilterOptions): NikkeStaticData[] {

    const filtered_static_data: NikkeStaticData[] = list.filter((nikke) =>
        nikke.id !== '' &&
        (!filterState.favorite || nikke_investment_data.find(n => n.id === nikke.id)?.favorite) &&
        (filterState.burst === undefined || nikke.burst === filterState.burst || nikke.burst === Burst.Burst_Lambda) &&
        (filterState.role === undefined || nikke.role === filterState.role) &&
        (filterState.weapon === undefined || nikke.weapon_type === filterState.weapon) &&
        (filterState.manufacturer === undefined || nikke.manufacturer === filterState.manufacturer) &&
        (filterState.element === undefined || nikke.element === filterState.element) &&
        (filterState.nikke_rarity === undefined || nikke.rarity === filterState.nikke_rarity) &&
        (filterState.collection_item_rarity === undefined || 
            (filterState.collection_item_rarity === "no_collection_item" && !nikke_investment_data.find(n => n.id === nikke.id)?.collection_item) ||
            (nikke_investment_data.find(n => n.id === nikke.id)?.collection_item?.rarity === filterState.collection_item_rarity)
        ) &&
        (filterState.equipment === undefined || missingOLEquipment(nikke, nikke_investment_data, filterState.equipment)) &&
        (filterState.misc === undefined ||
            (filterState.misc === "bond_not_maxed" && isBondMax(nikke, nikke_investment_data))
        )
    )

    return filtered_static_data;
}

function missingOLEquipment(nikke_static: NikkeStaticData, nikke_investment_data: Nikke[], equipment_piece: EquipmentFilterOption) {
    const nikke_inv: Nikke | undefined = nikke_investment_data.find(n => n.id === nikke_static.id);
    if (!nikke_inv) return false;

    const missingHelm = nikke_inv.equipment.helm === undefined || nikke_inv.equipment.helm.manufacturer === EquipmentManufacturer.standard;
    const missingGloves = nikke_inv.equipment.gloves === undefined || nikke_inv.equipment.gloves.manufacturer === EquipmentManufacturer.standard;
    const missingChest = nikke_inv.equipment.chest === undefined || nikke_inv.equipment.chest.manufacturer === EquipmentManufacturer.standard;
    const missingBoots = nikke_inv.equipment.boots === undefined || nikke_inv.equipment.boots.manufacturer === EquipmentManufacturer.standard;

    if (equipment_piece === EquipmentFilterOption.missing_ol_helm) return missingHelm;
    if (equipment_piece === EquipmentFilterOption.missing_ol_gloves) return missingGloves;
    if (equipment_piece === EquipmentFilterOption.missing_ol_chest) return missingChest;
    if (equipment_piece === EquipmentFilterOption.missing_ol_boots) return missingBoots;

    return missingHelm || missingGloves || missingChest || missingBoots;
}

function isBondMax(nikke_static: NikkeStaticData, nikke_investment_data: Nikke[]) {
    const nikke_inv: Nikke | undefined = nikke_investment_data.find(n => n.id === nikke_static.id);
    if (!nikke_inv) return false;

    const core = nikke_inv.core;
    const bond = nikke_inv.bond;

    if (nikke_static.manufacturer === NikkeManufacturer.Pilgrim && core >= 3 && bond < 40) return true;
    if (core >= 2 && bond < 30) return true;
    if (core >= 1 && bond < 20) return true;
    if (bond < 10) return true;

    return false;
}