# NIT - NIKKE Investment Tracker

This is a React app for keeping track of Nikke investents like skill levels and overload lines.

## Changelog

0.x - Still in develoment

## Installation instructions

Electron-based desktop application is planned, but for now only way to install is to run the source code locally

1. Install Node. npm comes bundled with it and is required. Install git.
2. Clone the project with git. Open terminal/etc. where you want to have the code and run:
    
  ```shell
  git clone https://github.com/AgonyOfCoding/Nikke-Tracker
  ```
    
3. Run the npm scripts:

  ```shell
  npm install
  npm start
  ```

The app opens on the default browser. The install script is only required the first time. Stop the app with ctrl+c in the terminal or just close the terminal and browser. Run the start script again to restart.

## Update

Clone the source code again. Make sure not to lose the files in "server/data" folder or you will lose the tracked investments. The safe bet is to save the data folder somewhere else, delete everything else, clone the project and then move the data folder into the new server folder.

## Features

The main feature of NIT is to provide a list of Nikke entries that can be filtered and sorted in any ways I thought would be useful. Each entry combines three sets of information about that Nikke into a semi-compact space:

1. Static data. This is the general information about that Nikke. Name, portrait, burst stage, weapon type, element, manufacturer, skill info, etc.
2. Your investment. The primary information of interest are the skill levels and possible Oveload lines, but core and bond levels as well as collection item status can also be tracked.
3. Recommendations such as what skill levels and Overload lines are good for different Nikkes. Currently, there are four sources for the recommendations:
  - [Nikke.gg](https://nikke.gg/)
  - [Prydwen](https://www.prydwen.gg/nikke/)
  - [skyJLV](https://docs.google.com/spreadsheets/d/1SGm58euwr0KntlWU4SEJrhNFTFNkKp7h41HiSKMF2QQ/edit?gid=668853492#gid=668853492)
  - [Keripo's PVP tierlist](https://tinyurl.com/nikke-pvp-tierlist)

Nikkes can also be favorited for quick access through favorite filtering.

<div align="left">
  <img src="src/assets/readme_images/overview.png"/>
</div>

### Equipment

<div align="left">
  <img src="src/assets/readme_images/overload_line.png"/>
</div>

Each Nikke entry lets you select which equipment pieces she currently has and the overload lines for relevant pieces. The equipment level is also displayed. The overload lines show the attribute, value and which level that value corresponds to (1-15). Levels 12-15 are visualized with the same way that in-game. Below the equipment, the attribute values are pooled into a table to quickly gauge the number and level of specific attributes

### Skills

Skill levels are visualized for each Nikke entry, and clicking that button brings up a dialog that provides the full skill descriptions and bonus values. It can be used to test how much benefit increasing the levels would bring.

<div align="left">
  <img src="src/assets/readme_images/skill_dialog.png"/>
</div>

### Collection Items

Collection item rarities and phases can be tracked. There is also a collection item priority for all Nikkes that is based on the tier list skyJLV made shortly after collection items were first introduced. As he hasn't updated the tier list since, the priorities contain some of my own opinions as well but are still based on his guide videos.

<div align="left">
  <img src="src/assets/readme_images/collection_items.png"/>
</div>

## Teams

The Teams-feature is a way to quickly access the information about Nikkes you are using for different content. Each content type has a number of five-nikke teams, where you can select the Nikkes as well as what harmony cube you want to use. The content types are:

- <b>Campaign.</b> One team for the destroy-stages and another for defend-stages. This division is mainly because Red Hood can be used as the sole Burst I Nikke if the stage can be finished within two burst rotations. The third team (Boss) can be useful if stuck on a specific campaign boss such as Mother Whale...
- <b>Solo Raid.</b> Five teams obviously.
- <b>Anomaly Interception.</b> One team for each of the five bosses.
- <b>Tribe Tower.</b> One team for each tower.
- <b>Shooting Range.</b>
- <b>PVP.</b> One team for Rookie Arena and three for SP. PVP enthusiasts would probably like dozens of teams but it's not exactly my favorite game mode so these have been enough for me.

Beside the cubes, the element of each Nikke is shown on the summary tab. Clicking the element icons on the navbar highlight that element on the teams. This can be useful for solo raid bosses with element shields to quickly see that each team has it covered and which Nikkes can be used to destroy the shield.

<div align="left">
  <img src="src/assets/readme_images/teams_solo_raid.png"/>
</div>

## Example cases

Just starting to get into endgame, getting some overload equipment and enough skill books to consider higher skill levels? Pick your preferred recommendation source, sort by priority/ranking and filter out Nikkes you haven't pulled.

New solo raid dropped? The Teams-feature lets you construct the five teams, after which you can quickly see how invested those Nikkes are and what could be the best way to increase damage in that raid.

Still doing Special Interception that gives totally random manufacturer equipment and just got a new piece? Sort by priority and fiter by manufacturer and class.

Unlocked Anomaly Interception and wondering which boss to fight? Sort by priority/ranking and filter by missing overload equipment.

Got a new collection item or wondering how to spend the upgrade materials or which collection item to get from the solo raid reward? Sort by collection item priority and filter by weapon type. Addtionally, sort by collection item phase to see which Nikkes already have invested collection items, or filter by a collection item rarity if you only want to spend the blue materials for blue collection items for example.

<div align="left">
  <img src="src/assets/readme_images/filter_ol_gloves.png"/>
</div>