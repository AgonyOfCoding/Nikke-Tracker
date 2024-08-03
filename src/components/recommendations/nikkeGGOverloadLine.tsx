import { Button, Icon, Tooltip } from '@blueprintjs/core';
import React from 'react';
import { color_scheme, OverloadAttribute, OverloadLineNikkeGG } from '../../types';

interface NikkeGGOverloadLineProps {
    attribute: string;
    overload_line: OverloadLineNikkeGG;
}

const NikkeGGOverloadLine: React.FC<NikkeGGOverloadLineProps> = ({ attribute, overload_line }) => {
    const { priority, recommended, notes } = overload_line;

    return (
        <div
            key={attribute}
            style={{
                display: 'grid',
                gridTemplateColumns: '6fr 1fr 2fr 1fr',
                gridTemplateRows: 'repeat(4, auto)',
                columnGap: '5px'
            }}
        >
            <div style={{ gridColumn: '1 / 2', textAlign: 'right' }} >
                {OverloadAttribute[attribute as keyof typeof OverloadAttribute]}
            </div>
            <div style={{ gridColumn: '2 / 3', textAlign: 'right' }} >
                {recommended}
            </div>
            <div style={{ gridColumn: '3 / 4', placeContent: 'center' }} >
                {overload_line.priority !== -1 &&
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(5, 1fr)",
                            color: priority === 5 ? "#cacb31" : color_scheme[0]
                        }}
                    >
                        <Icon icon={priority > 0 ? "star" : "star-empty"} />
                        <Icon icon={priority > 1 ? "star" : "star-empty"} />
                        <Icon icon={priority > 2 ? "star" : "star-empty"} />
                        <Icon icon={priority > 3 ? "star" : "star-empty"} />
                        <Icon icon={priority > 4 ? "star" : "star-empty"} />
                    </div>
                }
                {overload_line.priority === -1 &&
                    <div>NO</div>
                }
            </div>
            {notes !== "" &&
                <div style={{ gridColumn: '4 / 5', placeContent: 'center' }} >
                    <Tooltip content={notes} >
                        <Button small minimal text="?" style={{ color: color_scheme[0], fontWeight: 'bold' }} />
                    </Tooltip>
                </div>
            }
        </div>
        
    );
};

export default NikkeGGOverloadLine;