import { useDispatch } from "react-redux";
import { CollectionItem, CollectionItemRarity, color_scheme, Nikke, NikkeStaticData, WeaponType } from "../../types";
import { NumericInput, Popover } from "@blueprintjs/core";
import { useCallback, useState } from "react";
import { getCollectionItemIcon } from "../../utility/iconGetters";
import { modifyInvestment } from "../../state/investment";
import { nikkes_with_treasure } from "../../data/miscData";

interface CollectionItemVisualizationProps {
    nikke: Nikke;
    nikke_static: NikkeStaticData;
}

const CollectionItemVisualization: React.FC<CollectionItemVisualizationProps> = ({ nikke, nikke_static }) => {
    const dispatch = useDispatch();
    const [popover_open, setPopoverOpen] = useState(false);
    const collection_item: CollectionItem | undefined = nikke.collection_item;

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
            phase: 1 
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
                            min={1}
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