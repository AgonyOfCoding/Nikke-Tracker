import { Button, Dialog, DialogBody, DialogFooter } from "@blueprintjs/core";
import { useState } from "react";
import { color_scheme } from "../../types";

const NavbarAbout: React.FC = () => {
    const [dialog_open, setDialogOpen] = useState(false);
    return (
        <>
            <Button className="bp5-minimal" text="About" onClick={() => setDialogOpen(true)} />
            <Dialog isOpen={dialog_open} title="About" onClose={() => setDialogOpen(false)} >
                <DialogBody>
                    <p><a href="https://github.com/AgonyOfCoding/Nikke-Tracker" target="_blank" rel="noreferrer" >Github repository</a> (updates)</p>
                    <p><a href="https://nikke.gg/" target="_blank" rel="noreferrer" >Nikke.gg</a></p>
                    <p><a href="https://www.prydwen.gg/nikke/" target="_blank" rel="noreferrer" >Prydwen</a></p>
                    <p><a href="https://docs.google.com/spreadsheets/d/1SGm58euwr0KntlWU4SEJrhNFTFNkKp7h41HiSKMF2QQ/edit?gid=668853492#gid=668853492" target="_blank" rel="noreferrer" >skyJLV</a></p>
                    <p><a href="https://tinyurl.com/nikke-pvp-tierlist" target="_blank" rel="noreferrer" >Keripo's PvP Tier List</a></p>
                    <p>Nikke profile icons from <a href="https://nikke-db.pages.dev/tierlistmaker" target="_blank" rel="noreferrer" >Nikke-DB</a>. Other icons are screenshots from the game.</p>
                    <h3>Hints</h3>
                    <p>Shift+click changes most values in larger increments.</p>
                    <p>Not all equipment levels have icons yet, belive the numbers next to the icon.</p>
                </DialogBody>
                <DialogFooter
                    actions={
                        <Button
                            style={{ backgroundColor: color_scheme[4], color: color_scheme[0] }}
                            text="Close"
                            onClick={() => setDialogOpen(false)} />
                        }
                />
            </Dialog>
        </>
    )
}

export default NavbarAbout;