import { useDispatch } from "react-redux";
import { CollectionItem, CollectionItemRarity, color_scheme, Nikke, NikkeStaticData, RecommendationData, WeaponType } from "../../types";
import { NumericInput, Popover } from "@blueprintjs/core";
import { useCallback, useState } from "react";
import { getCollectionItemIcon } from "../../utility/iconGetters";
import { modifyInvestment } from "../../state/investment";
import { nikkes_with_treasure } from "../../data/miscData";

interface CollectionItemVisualizationProps {
    nikke: Nikke;
    nikke_static: NikkeStaticData;
    recommendations: RecommendationData | undefined;
}

const collectionItemPriorityDescriptions: { [key: string]: string } = {
    highest: "Highest priority",
    high: "High priority",
    priority_treasure: "Priority Treasure",
    priority_stats: "Priority, for stats",
    priority_solo_raid: "Priority (Solo Raid)",
    priority_rest: "Priority after other priority units",
    treasure: "Has a Treasure",
    element_advantage: "Could be useful when element advantage",
    pvp: "PVP / CP padding",
    useful_but_not_priority: "Useful unit, but not a priority",
    maybe_someday: "Maybe useful someday",
    ignore_for_now: "Ignore for now",
    dont_bother: "Don't bother",
    not_rated: "Not rated"
}

export const collectionItemPriorityRanks: { [key: string]: number } = {
    highest: 1,
    high: 2,
    priority_treasure: 3,
    priority_stats: 4,
    priority_solo_raid: 5,
    priority_rest: 6,
    treasure: 7,
    element_advantage: 8,
    pvp: 9,
    useful_but_not_priority: 10,
    maybe_someday: 11,
    ignore_for_now: 12,
    dont_bother: 13,
    not_rated: 14,
}

const CollectionItemVisualization: React.FC<CollectionItemVisualizationProps> = ({ nikke, nikke_static, recommendations }) => {
    const dispatch = useDispatch();
    const [popover_open, setPopoverOpen] = useState(false);
    const collection_item: CollectionItem | undefined = nikke.collection_item;
    console.log(recommendations);
    const priority = collectionItemPriorityDescriptions[recommendations ? recommendations.skyfall.collection_item_priority : "not_rated"];
    const rank = collectionItemPriorityRanks[recommendations ? recommendations.skyfall.collection_item_priority : "not_rated"]

    const collectionItemSelector = () => {
        return (
            <div style={{ backgroundColor: color_scheme[0] }} >
                {collection_item?.rarity !== CollectionItemRarity.R &&
                    <img src={getCollectionItemIcon("R", nikke_static.weapon_type)}
                        alt="Icon not found"
                        style={{ width: '128px' }}
                        onClick={() => setCollectionItemRarity(CollectionItemRarity.R, nikke_static.weapon_type)}
                    />
                }
                {collection_item?.rarity !== CollectionItemRarity.SR &&
                    <img src={getCollectionItemIcon("SR", nikke_static.weapon_type)}
                        alt="Icon not found"
                        style={{ width: '128px' }}
                        onClick={() => setCollectionItemRarity(CollectionItemRarity.SR, nikke_static.weapon_type)}
                    />
                }
                {nikkes_with_treasure.includes(nikke_static.id) && collection_item?.rarity !== CollectionItemRarity.SSR &&
                    <img src={getCollectionItemIcon("SSR", nikke_static.id)}
                        alt="Icon not found"
                        style={{ width: '128px' }}
                        onClick={() => setCollectionItemRarity(CollectionItemRarity.SSR, nikke_static.id)}
                    />
                }
            </div>
        )
    };

    const setCollectionItemPhase = useCallback((phase: number) => {
        if (phase && (phase < 1 || phase > 15))
            return
        if (!collection_item)
            return
        const new_collection_item: CollectionItem ={
            ...collection_item,
            phase: phase 
        }
        const new_nikke: Nikke = {
            ...nikke,
            collection_item: new_collection_item
        };
        dispatch(modifyInvestment(new_nikke));
    }, [dispatch, nikke, collection_item]);

    const setCollectionItemRarity = useCallback((rarity: CollectionItemRarity, type: WeaponType | string) => {
        const new_collection_item: CollectionItem = {
            rarity: rarity,
            type: type,
            phase: 0 
        }
        const new_nikke: Nikke = {
            ...nikke,
            collection_item: new_collection_item
        };
        dispatch(modifyInvestment(new_nikke));
        setPopoverOpen(false)
    }, [dispatch, nikke]);

    return (
        <div>
            <div>Collection Item Priority: {priority} ({rank})</div>
            <Popover
                minimal
                interactionKind='click'
                isOpen={popover_open}
                onInteraction={(state) => setPopoverOpen(state)}
                content={collectionItemSelector()}
            >
                <img 
                    src={collection_item ? 
                        getCollectionItemIcon(collection_item.rarity, collection_item.type) :
                        getCollectionItemIcon("empty")
                    }
                    alt="Icon not found"
                    style={{ width: collection_item ? '128px' : '64px' }}
                />
            </Popover>
            {collection_item && 
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: 'repeat(2, auto)'
                    }}
                >
                    <div style={{ gridColumn: '1 / 2', placeContent: 'center'   }}  >
                        <b>Phase:</b>
                    </div>
                    <div style={{ gridColumn: '2 / 3', placeContent: 'center'   }} >
                        <NumericInput
                            value={collection_item.phase}
                            min={0}
                            max={15}
                            stepSize={1}
                            majorStepSize={5}
                            onValueChange={setCollectionItemPhase}
                            allowNumericCharactersOnly
                            style={{ width: '40px' }}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default CollectionItemVisualization;